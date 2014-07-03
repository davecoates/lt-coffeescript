(ns lt.plugins.coffee
  (:require
   [lt.object       :as object]
   [lt.objs.files :as files]
   [lt.objs.console :as console]
   [lt.objs.eval    :as eval]
   [lt.objs.editor.pool :as pool]
   [lt.objs.app :as app]
   [lt.objs.editor  :as ed]
   [lt.objs.notifos :as notifos]
   [lt.plugins.watches :as watches]
   [lt.objs.clients :as clients]
   [lt.objs.clients.devtools :as devtools]
   [lt.objs.sidebar.command :as cmd]
   [lt.objs.plugins :as plugins])
  (:require-macros [lt.macros :refer [behavior]]))

(files/basename "http://www.wherever.com/test/ook.js (old)")


(def util-inspect (.-inspect (js/require "util")))

(defn inspect
  ([thing] (inspect thing 5))
  ([thing depth] (util-inspect thing false depth)))


(def node-coffee
  (js/require (plugins/local-module "coffeescript" "coffee-script")))



(defn coffee->js
  "Compile code - opts are passed directly through to CS compiler"
  ([coffee] (coffee->js coffee {}))
  ([coffee opts]
  (.compile node-coffee coffee (clj->js opts))))

;; The below is modified from the Javascript plugin

(defn parse [code]
  "Extract expressions from the parse tree for a block of code"
  (.-expressions (.nodes node-coffee code)))


(defn by-pos [locs pos]
  "Filter a list of locations locs to those contain a position pos"
  (let [line (:line pos)]
    (first (filter #(and (<= (.-first_line (:loc %)) line)
                         (>= (.-last_line (:loc %)) line))
                   locs))))


(defn constructor-name
  "Get constructor name for js object"
  [obj]
  (-> obj .-constructor .-name))


(defn ->forms [expressions]
  "Extract forms from expressions generated from parse tree"
  (doall (map (fn [f]
                (let [type (constructor-name f)
                      type (if (= type "Assign") (-> f .-value constructor-name) type)
                      ]
                {:loc (.-locationData f)
                 :type  type
                 }))
              expressions)))


(defn pos->form [text pos]
  "Take some code and a position and extract the form at that position"
  (let [
        {:keys [loc type]} (-> text
                                (parse)
                                (->forms)
                                (by-pos pos))
        start (when loc {:line (.-first_line loc)
                         :ch (.-first_column loc)})
        end (when loc {:line (.-last_line loc)
                         :ch (.-last_column loc)})]
    (when start
      {:type type
       :start start
       :end end})))



(defn expression? [{:keys [type]}]
  "Does a particular type represent an expression we can display?"
  ;; Currently I'm just using any Assign node with a value of Code
  ;; Code is a function definition.
  ;; http://coffeescript.org/documentation/docs/nodes.html#section-91
  (and (not (nil? type)) (not= type "Code")))


;;; Plugin Reactions

; Copied from javascript plugin
(defn src->watch [meta src]
  (let [[src semi] (if (= (last src) ";")
                      [(subs src 0 (dec (count src))) ";"]
                      [src ""])
        opts (clj->js (assoc meta :ev :editor.eval.coffee.watch))
        opts-str (.stringify js/JSON opts)]
    (str "lttools.watch(" src ", " opts-str ")" semi)))
    ;; This is to make it work with my chrome plugin
    ;; should be abstracted out into separate connector i think
    ;; Alternate approach is to do a Runtime.evaluate() on lttools setup
    ;; TODO: Think about this and come up with a more flexible approach
    ;; TODO: This won't work with any other connectors right now
    ; (str "window.postMessage({action: 'lttools.watch', params: { expression: " src ", opts: " opts-str "}}, '*')" semi)))



(behavior ::watch-src
                  :triggers #{:watch.src+}
                  :reaction (fn [editor cur meta src]
                             (src->watch meta src)))


(behavior ::coffee-watch
                  :triggers #{:editor.eval.coffee.watch}
                  :reaction (fn [editor res]
                              (when-let [watch (get (:watches @editor) (-> res :meta :id))]
                                (let [str-result (if (-> res :meta :no-inspect)
                                                   (:result res)
                                                   (inspect (:result res) 0))]
                                  (object/raise (:inline-result watch) :update! str-result)))))


(behavior ::on-eval
          :triggers #{:eval}
          :reaction (fn [editor]
                      (object/raise coffee-lang :eval! {:origin editor
                                                        :info (assoc (@editor :info)
                                                                :code (-> (watches/watched-range editor nil nil src->watch)
                                                                          (coffee->js)))})))


(behavior ::on-eval.one
          :triggers #{:eval.one}
          :reaction (fn [editor]
                      (try
                        (let [code  (ed/->val editor)
                              pos (ed/->cursor editor)
                              {:keys [start end] :as meta} (pos->form code pos)

                              form (when meta (watches/watched-range editor start end src->watch))
                              info (:info @editor)
                              info (if start
                                     (assoc info :meta :meta))
                              info (if (ed/selection? editor)
                                     (assoc info
                                       :code (coffee->js (ed/selection editor) {:bare true})
                                       :meta {:start {:line (-> (ed/->cursor editor "start") :line)}
                                              :end {:line (-> (ed/->cursor editor "end") :line)}})
                                     (when form
                                       (assoc info :pos pos
                                         :code (coffee->js form {:bare true})
                                         :meta meta)))
                              info (assoc info :full-source (-> (watches/watched-range editor nil nil src->watch)
                                                                          (coffee->js)))
                              ]
                          (when info
                            (object/raise coffee-lang :eval! {:origin editor
                                                              :info info})))
                        (catch js/global.Error e
                          (object/raise editor :editor.eval.js.exception {:ex e :meta {:end {:line (dec (inc (.-location.first_line e)))}}})))))



(behavior ::eval!
          :triggers #{:eval!}
          :reaction (fn [this event]
                      (let [{:keys [info origin]} event]
                        (notifos/working "")
                        (clients/send (eval/get-client! {:command :editor.eval.js
                                                         :origin origin
                                                         :info info})
                                      :editor.eval.js
                                      (assoc info :ed-id (object/->id origin))
                                      :only origin))))


(behavior ::coffee-exception
                  :triggers #{:editor.eval.js.exception}
                  :reaction (fn [editor ex]
                              (notifos/done-working)
                              (let [stack (if (.-stack (:ex ex))
                                            (.-stack (:ex ex))
                                            (:ex ex))
                                    loc (-> ex :meta :end)
                                    loc (assoc loc :start-line (-> ex :meta :start :line))]
                                (object/raise editor :editor.exception stack loc))
                              ))



(behavior ::coffee-result
          :triggers #{:editor.eval.js.result}
          :reaction (fn [editor res]
                      (notifos/done-working)
                      (let [loc (-> res :meta :end)
                            loc (assoc loc :start-line (-> res :meta :start :line))]
                        (if (expression? (:meta res))
                          (let [str-result (if (:no-inspect res)
                                             (if (:result res)
                                               (:result res)
                                               "undefined")
                                             (inspect (:result res)))]
                            (object/raise editor :editor.result str-result loc {:prefix " = "}))
                          (object/raise editor :editor.result "✓" loc {:prefix " "})))))




(object/object* ::coffee-lang
                :tags #{}
                :behaviors [::eval!]
                :triggers #{:eval!})


;; It would be nice if this could optionally open a new file containing javascript
;; rather than displaying it inline - particularly if it's the whole file
(cmd/command {:command :coffee-compile
              :desc "CoffeeScript: Compile"
              :exec (fn []
                     (let [editor (pool/last-active)
                            code  (ed/->val editor)
                           pos (ed/->cursor editor)
                           {:keys [start end] :as meta} (pos->form code pos)
                           form (when meta (watches/watched-range editor start end src->watch))]
                       (object/raise editor :editor.result
                                     (coffee->js form)
                                     (assoc end :start-line (:line start)) {:prefix " = "})))})



(def coffee-lang (object/create ::coffee-lang))
