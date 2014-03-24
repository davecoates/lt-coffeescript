if(!lt.util.load.provided_QMARK_('lt.plugins.coffee')) {
goog.provide('lt.plugins.coffee');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.files');
goog.require('lt.objs.plugins');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor');
lt.plugins.coffee.node_require = (function node_require(mod_path){return require(lt.objs.files.join.call(null,lt.objs.plugins.user_plugins_dir,mod_path));
});
lt.plugins.coffee.node_coffee = lt.plugins.coffee.node_require.call(null,"coffeescript/node_modules/coffee-script");
lt.plugins.coffee.render_coffee = (function render_coffee(info,opts){return lt.plugins.coffee.node_coffee.compile(new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(info),cljs.core.clj__GT_js.call(null,lt.plugins.coffee.options));
});
lt.plugins.coffee.__BEH__on_eval = (function __BEH__on_eval(editor){try{var code = lt.objs.editor.__GT_val.call(null,editor);var form = code;var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var info__$1 = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,editor))?cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.selection.call(null,editor),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"start"))], null),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"end"))], null),new cljs.core.Keyword(null,"type","type",1017479852),"ExpressionStatement"], null)):(cljs.core.truth_(form)?cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"pos","pos",1014015430),lt.plugins.coffee.pos,new cljs.core.Keyword(null,"code","code",1016963423),form,new cljs.core.Keyword(null,"meta","meta",1017252215),cljs.core.meta):null));var info__$2 = cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"code","code",1016963423),lt.plugins.coffee.render_coffee.call(null,info__$1,cljs.core.PersistentArrayMap.EMPTY));if(cljs.core.truth_(info__$2))
{return lt.object.raise.call(null,lt.plugins.coffee.coffee_lang,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info__$2], null));
} else
{return null;
}
}catch (e8300){if((e8300 instanceof global.Error))
{var e = e8300;return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.eval.js.exception","editor.eval.js.exception",723801901),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ex","ex",1013907493),e,new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),((e.location.first_line + 1) - 1)], null)], null)], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8300;
} else
{return null;
}
}
}});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.coffee","on-eval","lt.plugins.coffee/on-eval",1751755516),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.coffee.__BEH__on_eval,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null,new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));
lt.plugins.coffee.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__8302 = event;var map__8302__$1 = ((cljs.core.seq_QMARK_.call(null,map__8302))?cljs.core.apply.call(null,cljs.core.hash_map,map__8302):map__8302);var origin = cljs.core.get.call(null,map__8302__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__8302__$1,new cljs.core.Keyword(null,"info","info",1017141280));lt.objs.notifos.working.call(null,"");
return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.js","editor.eval.js",1847417804),new cljs.core.Keyword(null,"origin","origin",4300251800),origin,new cljs.core.Keyword(null,"info","info",1017141280),info], null)),new cljs.core.Keyword(null,"editor.eval.js","editor.eval.js",1847417804),cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"ed-id","ed-id",1110205563),lt.object.__GT_id.call(null,origin)),new cljs.core.Keyword(null,"only","only",1017320222),origin);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.coffee","eval!","lt.plugins.coffee/eval!",3235805239),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.coffee.__BEH__eval_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));
lt.plugins.coffee.__BEH__coffee_exception = (function __BEH__coffee_exception(editor,ex){lt.objs.notifos.done_working.call(null);
var stack = (cljs.core.truth_(new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(ex).stack)?new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(ex).stack:new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(ex));var loc = new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ex));var loc__$1 = cljs.core.assoc.call(null,loc,new cljs.core.Keyword(null,"start-line","start-line",3689311729),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ex))));return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),stack,loc__$1);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.coffee","coffee-exception","lt.plugins.coffee/coffee-exception",4395390656),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.coffee.__BEH__coffee_exception,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.js.exception","editor.eval.js.exception",723801901),null], null), null));
lt.plugins.coffee.__BEH__coffee_result = (function __BEH__coffee_result(editor,res){lt.objs.notifos.done_working.call(null);
var loc = new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res));var loc__$1 = cljs.core.assoc.call(null,loc,new cljs.core.Keyword(null,"start-line","start-line",3689311729),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))));if(cljs.core.truth_(lt.plugins.coffee.expression_QMARK_.call(null,new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))))
{var str_result = (cljs.core.truth_(new cljs.core.Keyword(null,"no-inspect","no-inspect",887813498).cljs$core$IFn$_invoke$arity$1(res))?(cljs.core.truth_(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res))?new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res):"undefined"):lt.plugins.coffee.inspect.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res)));return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),str_result,loc__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",4328760836)," = "], null));
} else
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),"\u2713",loc__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",4328760836)," "], null));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.coffee","coffee-result","lt.plugins.coffee/coffee-result",2280343152),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.coffee.__BEH__coffee_result,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.js.result","editor.eval.js.result",3021062051),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.coffee","coffee-lang","lt.plugins.coffee/coffee-lang",1099163777),new cljs.core.Keyword(null,"tags","tags",1017456523),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.coffee","eval!","lt.plugins.coffee/eval!",3235805239)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));
lt.plugins.coffee.coffee_lang = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.coffee","coffee-lang","lt.plugins.coffee/coffee-lang",1099163777));
}

//# sourceMappingURL=coffeescript_compiled.js.map