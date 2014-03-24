(ns lt.plugins.coffee
  (:require
            [lt.object       :as object]
            [lt.objs.eval    :as eval]
            [lt.objs.editor  :as ed]
            [lt.objs.notifos :as notifos]
            [lt.objs.files   :as files]
            [lt.objs.clients :as clients]
            [lt.objs.plugins :as plugins])
  (:require-macros [lt.macros :refer [behavior defui]]))

(defn node-require [mod-path]
  (js/require (files/join plugins/user-plugins-dir mod-path)))

(def node-coffee
  (node-require "coffeescript/node_modules/coffee-script"))

(defn render-coffee [info opts]
    (.compile node-coffee (:code info) (clj->js options)))

;;; Plugin Reactions

(behavior ::on-eval
          :triggers #{:eval, :eval.one}
          :reaction (fn [editor]
                      (try
                        (let [code  (ed/->val editor)
                            form code ; TODO
                            info (:info @editor)
                            info (if (ed/selection? editor)
                                   (assoc info
                                     :code (ed/selection editor)
                                     :meta {:start {:line (-> (ed/->cursor editor "start") :line)}
                                            :end {:line (-> (ed/->cursor editor "end") :line)}
                                            :type "ExpressionStatement"})
                                   (when form
                                     (assoc info :pos pos :code form :meta meta)))
                            info (assoc info :code (render-coffee info {}))]
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

(def coffee-lang (object/create ::coffee-lang))
