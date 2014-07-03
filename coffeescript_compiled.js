if(!lt.util.load.provided_QMARK_('lt.plugins.coffee')) {
goog.provide('lt.plugins.coffee');
goog.require('cljs.core');
goog.require('lt.objs.app');
goog.require('lt.objs.plugins');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.files');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.clients.devtools');
goog.require('lt.objs.files');
goog.require('lt.objs.plugins');
goog.require('lt.plugins.watches');
goog.require('lt.objs.app');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.devtools');
goog.require('lt.plugins.watches');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.console');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.editor');
lt.objs.files.basename.call(null,"http://www.wherever.com/test/ook.js (old)");
lt.plugins.coffee.util_inspect = require("util").inspect;
lt.plugins.coffee.inspect = (function() {
var inspect = null;
var inspect__1 = (function (thing){return inspect.call(null,thing,5);
});
var inspect__2 = (function (thing,depth){return lt.plugins.coffee.util_inspect.call(null,thing,false,depth);
});
inspect = function(thing,depth){
switch(arguments.length){
case 1:
return inspect__1.call(this,thing);
case 2:
return inspect__2.call(this,thing,depth);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
inspect.cljs$core$IFn$_invoke$arity$1 = inspect__1;
inspect.cljs$core$IFn$_invoke$arity$2 = inspect__2;
return inspect;
})()
;
lt.plugins.coffee.node_coffee = require(lt.objs.plugins.local_module.call(null,"coffeescript","coffee-script"));
/**
* Compile code - opts are passed directly through to CS compiler
*/
lt.plugins.coffee.coffee__GT_js = (function() {
var coffee__GT_js = null;
var coffee__GT_js__1 = (function (coffee){return coffee__GT_js.call(null,coffee,cljs.core.PersistentArrayMap.EMPTY);
});
var coffee__GT_js__2 = (function (coffee,opts){return lt.plugins.coffee.node_coffee.compile(coffee,cljs.core.clj__GT_js.call(null,opts));
});
coffee__GT_js = function(coffee,opts){
switch(arguments.length){
case 1:
return coffee__GT_js__1.call(this,coffee);
case 2:
return coffee__GT_js__2.call(this,coffee,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
coffee__GT_js.cljs$core$IFn$_invoke$arity$1 = coffee__GT_js__1;
coffee__GT_js.cljs$core$IFn$_invoke$arity$2 = coffee__GT_js__2;
return coffee__GT_js;
})()
;
lt.plugins.coffee.parse = (function parse(code){return lt.plugins.coffee.node_coffee.nodes(code).expressions;
});
lt.plugins.coffee.by_pos = (function by_pos(locs,pos){var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos);return cljs.core.first.call(null,cljs.core.filter.call(null,((function (line){
return (function (p1__7896_SHARP_){return ((new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(p1__7896_SHARP_).first_line <= line)) && ((new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(p1__7896_SHARP_).last_line >= line));
});})(line))
,locs));
});
/**
* Get constructor name for js object
*/
lt.plugins.coffee.constructor_name = (function constructor_name(obj){return obj.constructor.name;
});
lt.plugins.coffee.__GT_forms = (function __GT_forms(expressions){return cljs.core.doall.call(null,cljs.core.map.call(null,(function (f){var type = lt.plugins.coffee.constructor_name.call(null,f);var type__$1 = ((cljs.core._EQ_.call(null,type,"Assign"))?lt.plugins.coffee.constructor_name.call(null,f.value):type);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loc","loc",1014011570),f.locationData,new cljs.core.Keyword(null,"type","type",1017479852),type__$1], null);
}),expressions));
});
lt.plugins.coffee.pos__GT_form = (function pos__GT_form(text,pos){var map__7898 = lt.plugins.coffee.by_pos.call(null,lt.plugins.coffee.__GT_forms.call(null,lt.plugins.coffee.parse.call(null,text)),pos);var map__7898__$1 = ((cljs.core.seq_QMARK_.call(null,map__7898))?cljs.core.apply.call(null,cljs.core.hash_map,map__7898):map__7898);var type = cljs.core.get.call(null,map__7898__$1,new cljs.core.Keyword(null,"type","type",1017479852));var loc = cljs.core.get.call(null,map__7898__$1,new cljs.core.Keyword(null,"loc","loc",1014011570));var start = (cljs.core.truth_(loc)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),loc.first_line,new cljs.core.Keyword(null,"ch","ch",1013907415),loc.first_column], null):null);var end = (cljs.core.truth_(loc)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),loc.last_line,new cljs.core.Keyword(null,"ch","ch",1013907415),loc.last_column], null):null);if(cljs.core.truth_(start))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"start","start",1123661780),start,new cljs.core.Keyword(null,"end","end",1014004813),end], null);
} else
{return null;
}
});
lt.plugins.coffee.expression_QMARK_ = (function expression_QMARK_(p__7899){var map__7901 = p__7899;var map__7901__$1 = ((cljs.core.seq_QMARK_.call(null,map__7901))?cljs.core.apply.call(null,cljs.core.hash_map,map__7901):map__7901);var type = cljs.core.get.call(null,map__7901__$1,new cljs.core.Keyword(null,"type","type",1017479852));return (!((type == null))) && (cljs.core.not_EQ_.call(null,type,"Code"));
});
lt.plugins.coffee.src__GT_watch = (function src__GT_watch(meta,src){var vec__7903 = ((cljs.core._EQ_.call(null,cljs.core.last.call(null,src),";"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,src,0,(cljs.core.count.call(null,src) - 1)),";"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src,""], null));var src__$1 = cljs.core.nth.call(null,vec__7903,0,null);var semi = cljs.core.nth.call(null,vec__7903,1,null);var opts = cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"ev","ev",1013907491),new cljs.core.Keyword(null,"editor.eval.coffee.watch","editor.eval.coffee.watch",4238407024)));var opts_str = JSON.stringify(opts);return [cljs.core.str("lttools.watch("),cljs.core.str(src__$1),cljs.core.str(", "),cljs.core.str(opts_str),cljs.core.str(")"),cljs.core.str(semi)].join('');
});
lt.plugins.coffee.__BEH__watch_src = (function __BEH__watch_src(editor,cur,meta,src){return lt.plugins.coffee.src__GT_watch.call(null,meta,src);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.coffee","watch-src","lt.plugins.coffee/watch-src",2875722520),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.coffee.__BEH__watch_src,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch.src+","watch.src+",868749304),null], null), null));
lt.plugins.coffee.__BEH__coffee_watch = (function __BEH__coffee_watch(editor,res){var temp__4092__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"watches","watches",2139868463).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res)));if(cljs.core.truth_(temp__4092__auto__))
{var watch = temp__4092__auto__;var str_result = (cljs.core.truth_(new cljs.core.Keyword(null,"no-inspect","no-inspect",887813498).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res)))?new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res):lt.plugins.coffee.inspect.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res),0));return lt.object.raise.call(null,new cljs.core.Keyword(null,"inline-result","inline-result",656479555).cljs$core$IFn$_invoke$arity$1(watch),new cljs.core.Keyword(null,"update!","update!",779473898),str_result);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.coffee","coffee-watch","lt.plugins.coffee/coffee-watch",3674718912),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.coffee.__BEH__coffee_watch,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.coffee.watch","editor.eval.coffee.watch",4238407024),null], null), null));
lt.plugins.coffee.__BEH__on_eval = (function __BEH__on_eval(editor){return lt.object.raise.call(null,lt.plugins.coffee.coffee_lang,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.assoc.call(null,cljs.core.deref.call(null,editor).call(null,new cljs.core.Keyword(null,"info","info",1017141280)),new cljs.core.Keyword(null,"code","code",1016963423),lt.plugins.coffee.coffee__GT_js.call(null,lt.plugins.watches.watched_range.call(null,editor,null,null,lt.plugins.coffee.src__GT_watch)))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.coffee","on-eval","lt.plugins.coffee/on-eval",1751755516),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.coffee.__BEH__on_eval,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));
lt.plugins.coffee.__BEH__on_eval__DOT__one = (function __BEH__on_eval__DOT__one(editor){try{var code = lt.objs.editor.__GT_val.call(null,editor);var pos = lt.objs.editor.__GT_cursor.call(null,editor);var map__7907 = lt.plugins.coffee.pos__GT_form.call(null,code,pos);var map__7907__$1 = ((cljs.core.seq_QMARK_.call(null,map__7907))?cljs.core.apply.call(null,cljs.core.hash_map,map__7907):map__7907);var meta = map__7907__$1;var end = cljs.core.get.call(null,map__7907__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__7907__$1,new cljs.core.Keyword(null,"start","start",1123661780));var form = (cljs.core.truth_(meta)?lt.plugins.watches.watched_range.call(null,editor,start,end,lt.plugins.coffee.src__GT_watch):null);var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var info__$1 = (cljs.core.truth_(start)?cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"meta","meta",1017252215)):null);var info__$2 = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,editor))?cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"code","code",1016963423),lt.plugins.coffee.coffee__GT_js.call(null,lt.objs.editor.selection.call(null,editor),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bare","bare",1016920612),true], null)),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"start"))], null),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"end"))], null)], null)):(cljs.core.truth_(form)?cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"code","code",1016963423),lt.plugins.coffee.coffee__GT_js.call(null,form,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bare","bare",1016920612),true], null)),new cljs.core.Keyword(null,"meta","meta",1017252215),meta):null));var info__$3 = cljs.core.assoc.call(null,info__$2,new cljs.core.Keyword(null,"full-source","full-source",2886038667),lt.plugins.coffee.coffee__GT_js.call(null,lt.plugins.watches.watched_range.call(null,editor,null,null,lt.plugins.coffee.src__GT_watch)));if(cljs.core.truth_(info__$3))
{return lt.object.raise.call(null,lt.plugins.coffee.coffee_lang,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info__$3], null));
} else
{return null;
}
}catch (e7906){if((e7906 instanceof global.Error))
{var e = e7906;return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.eval.js.exception","editor.eval.js.exception",723801901),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ex","ex",1013907493),e,new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),((e.location.first_line + 1) - 1)], null)], null)], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7906;
} else
{return null;
}
}
}});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.coffee","on-eval.one","lt.plugins.coffee/on-eval.one",1515737460),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.coffee.__BEH__on_eval__DOT__one,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));
lt.plugins.coffee.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__7909 = event;var map__7909__$1 = ((cljs.core.seq_QMARK_.call(null,map__7909))?cljs.core.apply.call(null,cljs.core.hash_map,map__7909):map__7909);var origin = cljs.core.get.call(null,map__7909__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__7909__$1,new cljs.core.Keyword(null,"info","info",1017141280));lt.objs.notifos.working.call(null,"");
return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.js","editor.eval.js",1847417804),new cljs.core.Keyword(null,"origin","origin",4300251800),origin,new cljs.core.Keyword(null,"info","info",1017141280),info], null)),new cljs.core.Keyword(null,"editor.eval.js","editor.eval.js",1847417804),cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"ed-id","ed-id",1110205563),lt.object.__GT_id.call(null,origin)),new cljs.core.Keyword(null,"only","only",1017320222),origin);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.coffee","eval!","lt.plugins.coffee/eval!",3235805239),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.coffee.__BEH__eval_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));
lt.plugins.coffee.__BEH__coffee_exception = (function __BEH__coffee_exception(editor,ex){lt.objs.notifos.done_working.call(null);
var stack = (cljs.core.truth_(new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(ex).stack)?new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(ex).stack:new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(ex));var loc = new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ex));var loc__$1 = cljs.core.assoc.call(null,loc,new cljs.core.Keyword(null,"start-line","start-line",3689311729),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ex))));return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),stack,loc__$1);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.coffee","coffee-exception","lt.plugins.coffee/coffee-exception",4395390656),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.coffee.__BEH__coffee_exception,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.js.exception","editor.eval.js.exception",723801901),null], null), null));
lt.plugins.coffee.__BEH__coffee_result = (function __BEH__coffee_result(editor,res){lt.objs.notifos.done_working.call(null);
var loc = new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res));var loc__$1 = cljs.core.assoc.call(null,loc,new cljs.core.Keyword(null,"start-line","start-line",3689311729),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))));if(lt.plugins.coffee.expression_QMARK_.call(null,new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res)))
{var str_result = (cljs.core.truth_(new cljs.core.Keyword(null,"no-inspect","no-inspect",887813498).cljs$core$IFn$_invoke$arity$1(res))?(cljs.core.truth_(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res))?new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res):"undefined"):lt.plugins.coffee.inspect.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res)));return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),str_result,loc__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",4328760836)," = "], null));
} else
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),"\u2713",loc__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",4328760836)," "], null));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.coffee","coffee-result","lt.plugins.coffee/coffee-result",2280343152),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.coffee.__BEH__coffee_result,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.js.result","editor.eval.js.result",3021062051),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.coffee","coffee-lang","lt.plugins.coffee/coffee-lang",1099163777),new cljs.core.Keyword(null,"tags","tags",1017456523),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.coffee","eval!","lt.plugins.coffee/eval!",3235805239)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"coffee-compile","coffee-compile",3206579364),new cljs.core.Keyword(null,"desc","desc",1016984067),"CoffeeScript: Compile",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var editor = lt.objs.editor.pool.last_active.call(null);var code = lt.objs.editor.__GT_val.call(null,editor);var pos = lt.objs.editor.__GT_cursor.call(null,editor);var map__7910 = lt.plugins.coffee.pos__GT_form.call(null,code,pos);var map__7910__$1 = ((cljs.core.seq_QMARK_.call(null,map__7910))?cljs.core.apply.call(null,cljs.core.hash_map,map__7910):map__7910);var meta = map__7910__$1;var end = cljs.core.get.call(null,map__7910__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__7910__$1,new cljs.core.Keyword(null,"start","start",1123661780));var form = (cljs.core.truth_(meta)?lt.plugins.watches.watched_range.call(null,editor,start,end,lt.plugins.coffee.src__GT_watch):null);return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),lt.plugins.coffee.coffee__GT_js.call(null,form),cljs.core.assoc.call(null,end,new cljs.core.Keyword(null,"start-line","start-line",3689311729),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(start)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",4328760836)," = "], null));
})], null));
lt.plugins.coffee.coffee_lang = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.coffee","coffee-lang","lt.plugins.coffee/coffee-lang",1099163777));
}

//# sourceMappingURL=coffeescript_compiled.js.map