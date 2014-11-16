// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.experimental.dom');
goog.require('cljs.core');
goog.require('freactive.core');
goog.require('freactive.core');
freactive.experimental.dom.IElementSpec = (function (){var obj93145 = {};return obj93145;
})();
freactive.experimental.dom._get_virtual_dom = (function _get_virtual_dom(this$){if((function (){var and__11485__auto__ = this$;if(and__11485__auto__)
{return this$.freactive$experimental$dom$IElementSpec$_get_virtual_dom$arity$1;
} else
{return and__11485__auto__;
}
})())
{return this$.freactive$experimental$dom$IElementSpec$_get_virtual_dom$arity$1(this$);
} else
{var x__12134__auto__ = (((this$ == null))?null:this$);return (function (){var or__11497__auto__ = (freactive.experimental.dom._get_virtual_dom[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (freactive.experimental.dom._get_virtual_dom["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IElementSpec.-get-virtual-dom",this$);
}
}
})().call(null,this$);
}
});
freactive.experimental.dom.IElement = (function (){var obj93147 = {};return obj93147;
})();
freactive.experimental.dom._get_dom_node = (function _get_dom_node(this$){if((function (){var and__11485__auto__ = this$;if(and__11485__auto__)
{return this$.freactive$experimental$dom$IElement$_get_dom_node$arity$1;
} else
{return and__11485__auto__;
}
})())
{return this$.freactive$experimental$dom$IElement$_get_dom_node$arity$1(this$);
} else
{var x__12134__auto__ = (((this$ == null))?null:this$);return (function (){var or__11497__auto__ = (freactive.experimental.dom._get_dom_node[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (freactive.experimental.dom._get_dom_node["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IElement.-get-dom-node",this$);
}
}
})().call(null,this$);
}
});
freactive.experimental.dom._get_element_spec = (function _get_element_spec(this$){if((function (){var and__11485__auto__ = this$;if(and__11485__auto__)
{return this$.freactive$experimental$dom$IElement$_get_element_spec$arity$1;
} else
{return and__11485__auto__;
}
})())
{return this$.freactive$experimental$dom$IElement$_get_element_spec$arity$1(this$);
} else
{var x__12134__auto__ = (((this$ == null))?null:this$);return (function (){var or__11497__auto__ = (freactive.experimental.dom._get_element_spec[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (freactive.experimental.dom._get_element_spec["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IElement.-get-element-spec",this$);
}
}
})().call(null,this$);
}
});
freactive.experimental.dom.IHasElement = (function (){var obj93149 = {};return obj93149;
})();
freactive.experimental.dom._get_element = (function _get_element(this$){if((function (){var and__11485__auto__ = this$;if(and__11485__auto__)
{return this$.freactive$experimental$dom$IHasElement$_get_element$arity$1;
} else
{return and__11485__auto__;
}
})())
{return this$.freactive$experimental$dom$IHasElement$_get_element$arity$1(this$);
} else
{var x__12134__auto__ = (((this$ == null))?null:this$);return (function (){var or__11497__auto__ = (freactive.experimental.dom._get_element[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (freactive.experimental.dom._get_element["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHasElement.-get-element",this$);
}
}
})().call(null,this$);
}
});
freactive.experimental.dom.IRemove = (function (){var obj93151 = {};return obj93151;
})();
freactive.experimental.dom._remove = (function _remove(this$){if((function (){var and__11485__auto__ = this$;if(and__11485__auto__)
{return this$.freactive$experimental$dom$IRemove$_remove$arity$1;
} else
{return and__11485__auto__;
}
})())
{return this$.freactive$experimental$dom$IRemove$_remove$arity$1(this$);
} else
{var x__12134__auto__ = (((this$ == null))?null:this$);return (function (){var or__11497__auto__ = (freactive.experimental.dom._remove[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (freactive.experimental.dom._remove["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRemove.-remove",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
freactive.experimental.dom.Element = (function (spec,node){
this.spec = spec;
this.node = node;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
})
freactive.experimental.dom.Element.cljs$lang$type = true;
freactive.experimental.dom.Element.cljs$lang$ctorStr = "freactive.experimental.dom/Element";
freactive.experimental.dom.Element.cljs$lang$ctorPrWriter = (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"freactive.experimental.dom/Element");
});
freactive.experimental.dom.Element.prototype.freactive$experimental$dom$IRemove$ = true;
freactive.experimental.dom.Element.prototype.freactive$experimental$dom$IRemove$_remove$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.node.parentNode.removeChild(self__.node);
});
freactive.experimental.dom.Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Element: ");
cljs.core.pr_writer.call(null,self__.node,writer,opts);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,self__.spec,writer,opts);
return cljs.core._write.call(null,writer,">");
});
freactive.experimental.dom.Element.prototype.freactive$experimental$dom$IElement$ = true;
freactive.experimental.dom.Element.prototype.freactive$experimental$dom$IElement$_get_dom_node$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.node;
});
freactive.experimental.dom.Element.prototype.freactive$experimental$dom$IElement$_get_element_spec$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.spec;
});
freactive.experimental.dom.__GT_Element = (function __GT_Element(spec,node){return (new freactive.experimental.dom.Element(spec,node));
});

/**
* @constructor
* @param {*} spec
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
freactive.experimental.dom.ElementSpec = (function (spec,__meta,__extmap){
this.spec = spec;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
freactive.experimental.dom.ElementSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12093__auto__,k__12094__auto__){var self__ = this;
var this__12093__auto____$1 = this;return cljs.core._lookup.call(null,this__12093__auto____$1,k__12094__auto__,null);
});
freactive.experimental.dom.ElementSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12095__auto__,k93153,else__12096__auto__){var self__ = this;
var this__12095__auto____$1 = this;var G__93155 = (((k93153 instanceof cljs.core.Keyword))?k93153.fqn:null);switch (G__93155) {
case "spec":
return self__.spec;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k93153,else__12096__auto__);

}
});
freactive.experimental.dom.ElementSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12107__auto__,writer__12108__auto__,opts__12109__auto__){var self__ = this;
var this__12107__auto____$1 = this;var pr_pair__12110__auto__ = ((function (this__12107__auto____$1){
return (function (keyval__12111__auto__){return cljs.core.pr_sequential_writer.call(null,writer__12108__auto__,cljs.core.pr_writer,""," ","",opts__12109__auto__,keyval__12111__auto__);
});})(this__12107__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__12108__auto__,pr_pair__12110__auto__,"#freactive.experimental.dom.ElementSpec{",", ","}",opts__12109__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"spec","spec",347520401),self__.spec],null))], null),self__.__extmap));
});
freactive.experimental.dom.ElementSpec.prototype.freactive$experimental$dom$IElementSpec$ = true;
freactive.experimental.dom.ElementSpec.prototype.freactive$experimental$dom$IElementSpec$_get_virtual_dom$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.spec;
});
freactive.experimental.dom.ElementSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12091__auto__){var self__ = this;
var this__12091__auto____$1 = this;return self__.__meta;
});
freactive.experimental.dom.ElementSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12087__auto__){var self__ = this;
var this__12087__auto____$1 = this;return (new freactive.experimental.dom.ElementSpec(self__.spec,self__.__meta,self__.__extmap,self__.__hash));
});
freactive.experimental.dom.ElementSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12097__auto__){var self__ = this;
var this__12097__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
freactive.experimental.dom.ElementSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12088__auto__){var self__ = this;
var this__12088__auto____$1 = this;var h__11908__auto__ = self__.__hash;if(!((h__11908__auto__ == null)))
{return h__11908__auto__;
} else
{var h__11908__auto____$1 = cljs.core.hash_imap.call(null,this__12088__auto____$1);self__.__hash = h__11908__auto____$1;
return h__11908__auto____$1;
}
});
freactive.experimental.dom.ElementSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__12089__auto__,other__12090__auto__){var self__ = this;
var this__12089__auto____$1 = this;if(cljs.core.truth_((function (){var and__11485__auto__ = other__12090__auto__;if(cljs.core.truth_(and__11485__auto__))
{return ((this__12089__auto____$1.constructor === other__12090__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__12089__auto____$1,other__12090__auto__));
} else
{return and__11485__auto__;
}
})()))
{return true;
} else
{return false;
}
});
freactive.experimental.dom.ElementSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12102__auto__,k__12103__auto__){var self__ = this;
var this__12102__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),null], null), null),k__12103__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12102__auto____$1),self__.__meta),k__12103__auto__);
} else
{return (new freactive.experimental.dom.ElementSpec(self__.spec,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__12103__auto__)),null));
}
});
freactive.experimental.dom.ElementSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12100__auto__,k__12101__auto__,G__93152){var self__ = this;
var this__12100__auto____$1 = this;var pred__93156 = cljs.core.keyword_identical_QMARK_;var expr__93157 = k__12101__auto__;if(cljs.core.truth_(pred__93156.call(null,new cljs.core.Keyword(null,"spec","spec",347520401),expr__93157)))
{return (new freactive.experimental.dom.ElementSpec(G__93152,self__.__meta,self__.__extmap,null));
} else
{return (new freactive.experimental.dom.ElementSpec(self__.spec,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__12101__auto__,G__93152),null));
}
});
freactive.experimental.dom.ElementSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12105__auto__){var self__ = this;
var this__12105__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"spec","spec",347520401),self__.spec],null))], null),self__.__extmap));
});
freactive.experimental.dom.ElementSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12092__auto__,G__93152){var self__ = this;
var this__12092__auto____$1 = this;return (new freactive.experimental.dom.ElementSpec(self__.spec,G__93152,self__.__extmap,self__.__hash));
});
freactive.experimental.dom.ElementSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12098__auto__,entry__12099__auto__){var self__ = this;
var this__12098__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__12099__auto__))
{return cljs.core._assoc.call(null,this__12098__auto____$1,cljs.core._nth.call(null,entry__12099__auto__,(0)),cljs.core._nth.call(null,entry__12099__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__12098__auto____$1,entry__12099__auto__);
}
});
freactive.experimental.dom.ElementSpec.cljs$lang$type = true;
freactive.experimental.dom.ElementSpec.cljs$lang$ctorPrSeq = (function (this__12127__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"freactive.experimental.dom/ElementSpec");
});
freactive.experimental.dom.ElementSpec.cljs$lang$ctorPrWriter = (function (this__12127__auto__,writer__12128__auto__){return cljs.core._write.call(null,writer__12128__auto__,"freactive.experimental.dom/ElementSpec");
});
freactive.experimental.dom.__GT_ElementSpec = (function __GT_ElementSpec(spec){return (new freactive.experimental.dom.ElementSpec(spec));
});
freactive.experimental.dom.map__GT_ElementSpec = (function map__GT_ElementSpec(G__93154){return (new freactive.experimental.dom.ElementSpec(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(G__93154),null,cljs.core.dissoc.call(null,G__93154,new cljs.core.Keyword(null,"spec","spec",347520401))));
});
freactive.experimental.dom.get_element_spec = (function get_element_spec(element_or_spec){if((function (){var G__93162 = element_or_spec;if(G__93162)
{var bit__12161__auto__ = null;if(cljs.core.truth_((function (){var or__11497__auto__ = bit__12161__auto__;if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{return G__93162.freactive$experimental$dom$IElementSpec$;
}
})()))
{return true;
} else
{if((!G__93162.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.experimental.dom.IElementSpec,G__93162);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.experimental.dom.IElementSpec,G__93162);
}
})())
{return element_or_spec;
} else
{if((function (){var G__93163 = element_or_spec;if(G__93163)
{var bit__12161__auto__ = null;if(cljs.core.truth_((function (){var or__11497__auto__ = bit__12161__auto__;if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{return G__93163.freactive$experimental$dom$IElement$;
}
})()))
{return true;
} else
{if((!G__93163.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.experimental.dom.IElement,G__93163);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.experimental.dom.IElement,G__93163);
}
})())
{return freactive.experimental.dom._get_element_spec.call(null,element_or_spec);
} else
{return (new freactive.experimental.dom.ElementSpec(element_or_spec));

}
}
});
freactive.experimental.dom.get_virtual_dom = (function get_virtual_dom(element_or_spec){return freactive.experimental.dom._get_virtual_dom.call(null,freactive.experimental.dom.get_element_spec.call(null,element_or_spec));
});
freactive.experimental.dom.as_element_spec = (function as_element_spec(spec){if((function (){var G__93165 = spec;if(G__93165)
{var bit__12161__auto__ = null;if(cljs.core.truth_((function (){var or__11497__auto__ = bit__12161__auto__;if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{return G__93165.freactive$experimental$dom$IElementSpec$;
}
})()))
{return true;
} else
{if((!G__93165.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.experimental.dom.IElementSpec,G__93165);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.experimental.dom.IElementSpec,G__93165);
}
})())
{return spec;
} else
{return (new freactive.experimental.dom.ElementSpec(spec));
}
});
freactive.experimental.dom.with_transitions = (function with_transitions(elem_spec,transitions){if((function (){var G__93167 = elem_spec;if(G__93167)
{var bit__12161__auto__ = (G__93167.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12161__auto__) || (G__93167.cljs$core$IDeref$))
{return true;
} else
{if((!G__93167.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__93167);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__93167);
}
})())
{return freactive.core.rx_STAR_.call(null,(function (){return with_transitions.call(null,cljs.core.deref.call(null,elem_spec),transitions);
}),false);
} else
{return cljs.core.vary_meta.call(null,freactive.experimental.dom.as_element_spec.call(null,elem_spec),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("freactive.experimental.dom","transitions","freactive.experimental.dom/transitions",-1920980908)], null),cljs.core.merge,transitions);
}
});
freactive.experimental.dom.get_transition = (function get_transition(elem_spec,transition_name){return cljs.core.get_in.call(null,cljs.core.meta.call(null,freactive.experimental.dom.get_element_spec.call(null,elem_spec)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("freactive.experimental.dom","transitions","freactive.experimental.dom/transitions",-1920980908),transition_name], null));
});
freactive.experimental.dom.chain_transition = (function chain_transition(elem_spec,transition_name,transition_fn,chain_fn){if((function (){var G__93169 = elem_spec;if(G__93169)
{var bit__12161__auto__ = (G__93169.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12161__auto__) || (G__93169.cljs$core$IDeref$))
{return true;
} else
{if((!G__93169.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__93169);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__93169);
}
})())
{return freactive.core.rx_STAR_.call(null,(function (){return chain_transition.call(null,cljs.core.deref.call(null,elem_spec),transition_name,transition_fn,chain_fn);
}),false);
} else
{var cur_transition_fn = freactive.experimental.dom.get_transition.call(null,elem_spec,transition_name);var transition_fn__$1 = (cljs.core.truth_(cur_transition_fn)?chain_fn.call(null,cur_transition_fn,transition_fn):transition_fn);return freactive.experimental.dom.with_transitions.call(null,elem_spec,new cljs.core.PersistentArrayMap.fromArray([transition_name,transition_fn__$1], true, false));
}
});
freactive.experimental.dom.prepend_transition = (function prepend_transition(elem_spec,transition_name,transition_fn){return freactive.experimental.dom.chain_transition.call(null,elem_spec,transition_name,transition_fn,(function (cur_tx,new_tx){return (function (elem,on_complete){return new_tx.call(null,elem,(function (elem__$1,_){return cur_tx.call(null,elem__$1,on_complete);
}));
});
}));
});
freactive.experimental.dom.append_transition = (function append_transition(elem_spec,transition_name,transition_fn){return freactive.experimental.dom.chain_transition.call(null,elem_spec,transition_name,transition_fn,(function (cur_tx,new_tx){return (function (elem,on_complete){return cur_tx.call(null,elem,(function (elem__$1,_){return new_tx.call(null,elem__$1,on_complete);
}));
});
}));
});
freactive.experimental.dom.request_animation_frame = (function request_animation_frame(f){return window.requestAnimationFrame(f);
});
freactive.experimental.dom.set_style_prop_BANG_ = (function set_style_prop_BANG_(elem,prop_name,prop_value){var prop_name__$1 = cljs.core.name.call(null,prop_name);return (elem.style[prop_name__$1] = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop_value)));
});
freactive.experimental.dom.set_attr_BANG_ = (function set_attr_BANG_(elem,attr_name,attr_value){var attr_name__$1 = cljs.core.name.call(null,attr_name);return elem.setAttribute(attr_name__$1,attr_value);
});
freactive.experimental.dom.on_value_ref_invalidated_STAR_ = (function on_value_ref_invalidated_STAR_(set_fn,element,attr_name,ref){var temp__4388__auto___93172 = freactive.core.get_add_remove_watch_STAR_.call(null,ref);if(cljs.core.truth_(temp__4388__auto___93172))
{var vec__93171_93173 = temp__4388__auto___93172;var add_watch_STAR__93174 = cljs.core.nth.call(null,vec__93171_93173,(0),null);var remove_watch_STAR__93175 = cljs.core.nth.call(null,vec__93171_93173,(1),null);var f_93176 = ((function (vec__93171_93173,add_watch_STAR__93174,remove_watch_STAR__93175,temp__4388__auto___93172){
return (function() {
var on_value_ref_invalidated = null;
var on_value_ref_invalidated__2 = (function (key,ref__$1){remove_watch_STAR__93175.call(null,ref__$1,key);
return freactive.experimental.dom.request_animation_frame.call(null,((function (vec__93171_93173,add_watch_STAR__93174,remove_watch_STAR__93175,temp__4388__auto___93172){
return (function (_){if(cljs.core.truth_(element.parentNode))
{add_watch_STAR__93174.call(null,ref__$1,key,on_value_ref_invalidated);
return set_fn.call(null,element,attr_name,cljs.core.deref.call(null,ref__$1));
} else
{return null;
}
});})(vec__93171_93173,add_watch_STAR__93174,remove_watch_STAR__93175,temp__4388__auto___93172))
);
});
var on_value_ref_invalidated__4 = (function (key,ref__$1,_,___$1){return on_value_ref_invalidated.call(null,key,ref__$1);
});
on_value_ref_invalidated = function(key,ref__$1,_,___$1){
switch(arguments.length){
case 2:
return on_value_ref_invalidated__2.call(this,key,ref__$1);
case 4:
return on_value_ref_invalidated__4.call(this,key,ref__$1,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
on_value_ref_invalidated.cljs$core$IFn$_invoke$arity$2 = on_value_ref_invalidated__2;
on_value_ref_invalidated.cljs$core$IFn$_invoke$arity$4 = on_value_ref_invalidated__4;
return on_value_ref_invalidated;
})()
;})(vec__93171_93173,add_watch_STAR__93174,remove_watch_STAR__93175,temp__4388__auto___93172))
;add_watch_STAR__93174.call(null,ref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,attr_name], null),f_93176);
} else
{}
return set_fn.call(null,element,attr_name,cljs.core.deref.call(null,ref));
});
freactive.experimental.dom.bind_style_prop_BANG_ = (function bind_style_prop_BANG_(element,attr_name,attr_value){if((function (){var G__93178 = attr_value;if(G__93178)
{var bit__12161__auto__ = (G__93178.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12161__auto__) || (G__93178.cljs$core$IDeref$))
{return true;
} else
{if((!G__93178.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__93178);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__93178);
}
})())
{return freactive.experimental.dom.on_value_ref_invalidated_STAR_.call(null,freactive.experimental.dom.set_style_prop_BANG_,element,attr_name,attr_value);
} else
{return freactive.experimental.dom.set_style_prop_BANG_.call(null,element,attr_name,attr_value);
}
});
freactive.experimental.dom.listen_BANG_ = (function listen_BANG_(element,evt_name,handler){return element.addEventListener(evt_name,handler);
});
freactive.experimental.dom.bind_attr_BANG_ = (function bind_attr_BANG_(element,attr_name,attr_value){var attr_name__$1 = cljs.core.name.call(null,attr_name);if(cljs.core._EQ_.call(null,"style",attr_name__$1))
{if(cljs.core.map_QMARK_.call(null,attr_value))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"attr-value","attr-value",-561203417,null)))))));
}
var seq__93186 = cljs.core.seq.call(null,attr_value);var chunk__93187 = null;var count__93188 = (0);var i__93189 = (0);while(true){
if((i__93189 < count__93188))
{var vec__93190 = cljs.core._nth.call(null,chunk__93187,i__93189);var p = cljs.core.nth.call(null,vec__93190,(0),null);var v = cljs.core.nth.call(null,vec__93190,(1),null);freactive.experimental.dom.bind_style_prop_BANG_.call(null,element,p,v);
{
var G__93193 = seq__93186;
var G__93194 = chunk__93187;
var G__93195 = count__93188;
var G__93196 = (i__93189 + (1));
seq__93186 = G__93193;
chunk__93187 = G__93194;
count__93188 = G__93195;
i__93189 = G__93196;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__93186);if(temp__4388__auto__)
{var seq__93186__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__93186__$1))
{var c__12267__auto__ = cljs.core.chunk_first.call(null,seq__93186__$1);{
var G__93197 = cljs.core.chunk_rest.call(null,seq__93186__$1);
var G__93198 = c__12267__auto__;
var G__93199 = cljs.core.count.call(null,c__12267__auto__);
var G__93200 = (0);
seq__93186 = G__93197;
chunk__93187 = G__93198;
count__93188 = G__93199;
i__93189 = G__93200;
continue;
}
} else
{var vec__93191 = cljs.core.first.call(null,seq__93186__$1);var p = cljs.core.nth.call(null,vec__93191,(0),null);var v = cljs.core.nth.call(null,vec__93191,(1),null);freactive.experimental.dom.bind_style_prop_BANG_.call(null,element,p,v);
{
var G__93201 = cljs.core.next.call(null,seq__93186__$1);
var G__93202 = null;
var G__93203 = (0);
var G__93204 = (0);
seq__93186 = G__93201;
chunk__93187 = G__93202;
count__93188 = G__93203;
i__93189 = G__93204;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["o","n","-"], null),cljs.core.take.call(null,(3),attr_name__$1)))
{return freactive.experimental.dom.listen_BANG_.call(null,element,attr_name__$1.substring((3)),attr_value);
} else
{if((function (){var G__93192 = attr_value;if(G__93192)
{var bit__12161__auto__ = (G__93192.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12161__auto__) || (G__93192.cljs$core$IDeref$))
{return true;
} else
{if((!G__93192.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__93192);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__93192);
}
})())
{return freactive.experimental.dom.on_value_ref_invalidated_STAR_.call(null,freactive.experimental.dom.set_attr_BANG_,element,attr_name__$1,attr_value);
} else
{return freactive.experimental.dom.set_attr_BANG_.call(null,element,attr_name__$1,attr_value);
}

}
}
});
/**
* Regular expression that parses a CSS-style id and class from an element name.
*/
freactive.experimental.dom.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
freactive.experimental.dom.create_dom_node = (function create_dom_node(kw){var tag_ns = cljs.core.namespace.call(null,kw);var vec__93207 = cljs.core.re_matches.call(null,freactive.experimental.dom.re_tag,cljs.core.name.call(null,kw));var _ = cljs.core.nth.call(null,vec__93207,(0),null);var tag = cljs.core.nth.call(null,vec__93207,(1),null);var id = cljs.core.nth.call(null,vec__93207,(2),null);var class$ = cljs.core.nth.call(null,vec__93207,(3),null);var node = (function (){var G__93208 = tag_ns;if(cljs.core._EQ_.call(null,null,G__93208))
{return document.createElement(tag);
} else
{if(cljs.core._EQ_.call(null,"svg",G__93208))
{return document.createElementNS("http://www.w3.org/2000/svg",tag);
} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Don't know how to handle tag ns "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_ns)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,false)))));


}
}
})();if(cljs.core.truth_(id))
{node.id = id;
} else
{}
if(cljs.core.truth_(class$))
{node.className = class$;
} else
{}
return node;
});
freactive.experimental.dom.get_dom_node = (function get_dom_node(elem){return freactive.experimental.dom._get_dom_node.call(null,elem);
});
freactive.experimental.dom.replace_child = (function replace_child(parent,new_elem,cur_elem){var cur_dom_node = freactive.experimental.dom.get_dom_node.call(null,cur_elem);var new_virtual_dom = freactive.experimental.dom.get_virtual_dom.call(null,new_elem);if((typeof new_virtual_dom === 'string') && (cljs.core._EQ_.call(null,cur_dom_node.nodeType,(3))))
{cur_dom_node.textContent = new_virtual_dom;
cur_elem.spec = freactive.experimental.dom.get_element_spec.call(null,new_elem);
return cur_elem;
} else
{var new_elem__$1 = freactive.experimental.dom.build_element.call(null,new_elem);freactive.experimental.dom.get_dom_node.call(null,parent).replaceChild(freactive.experimental.dom.get_dom_node.call(null,new_elem__$1),cur_dom_node);
return new_elem__$1;
}
});
freactive.experimental.dom.append_child = (function append_child(parent,new_elem){var new_elem__$1 = freactive.experimental.dom.build_element.call(null,new_elem);freactive.experimental.dom.get_dom_node.call(null,parent).appendChild(freactive.experimental.dom.get_dom_node.call(null,new_elem__$1));
return new_elem__$1;
});
freactive.experimental.dom.clear_children_BANG_ = (function clear_children_BANG_(parent){var dom_node = freactive.experimental.dom.get_dom_node.call(null,parent);while(true){
var last_child = dom_node.lastChild;if(cljs.core.truth_(last_child))
{dom_node.removeChild(last_child);
{
continue;
}
} else
{return null;
}
break;
}
});
freactive.experimental.dom.replace_or_append_child = (function replace_or_append_child(parent,new_elem,cur_elem){if(cljs.core.truth_(cur_elem))
{return freactive.experimental.dom.replace_child.call(null,parent,new_elem,cur_elem);
} else
{return freactive.experimental.dom.append_child.call(null,parent,new_elem);
}
});
freactive.experimental.dom.do_show_element = (function do_show_element(parent,new_elem,cur_elem){var show = freactive.experimental.dom.get_transition.call(null,new_elem,new cljs.core.Keyword(null,"show","show",-576705889));var new_elem__$1 = freactive.experimental.dom.replace_or_append_child.call(null,parent,new_elem,cur_elem);if(cljs.core.truth_(show))
{show.call(null,new_elem__$1,null);
} else
{}
return new_elem__$1;
});
freactive.experimental.dom.transition_element = (function transition_element(parent,new_elem,cur_elem){if(cljs.core.truth_(cur_elem))
{var temp__4386__auto__ = freactive.experimental.dom.get_transition.call(null,cur_elem,new cljs.core.Keyword(null,"hide","hide",-596913169));if(cljs.core.truth_(temp__4386__auto__))
{var hide = temp__4386__auto__;return hide.call(null,cur_elem,freactive.experimental.dom.do_show_element.call(null,parent,new_elem,cur_elem));
} else
{return freactive.experimental.dom.do_show_element.call(null,parent,new_elem,cur_elem);
}
} else
{return freactive.experimental.dom.do_show_element.call(null,parent,new_elem,cur_elem);
}
});
freactive.experimental.dom.append_deref_child = (function append_deref_child(parent,child_ref){var temp__4386__auto__ = freactive.core.get_add_remove_watch_STAR_.call(null,child_ref);if(cljs.core.truth_(temp__4386__auto__))
{var vec__93210 = temp__4386__auto__;var add_watch_STAR_ = cljs.core.nth.call(null,vec__93210,(0),null);var remove_watch_STAR_ = cljs.core.nth.call(null,vec__93210,(1),null);var cur_elem = cljs.core.atom.call(null,null);var cancellation_token = cljs.core.atom.call(null,false);var f = ((function (cur_elem,cancellation_token,vec__93210,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__){
return (function() {
var on_child_ref_invalidated = null;
var on_child_ref_invalidated__2 = (function (cur_elem__$1,child_ref__$1){remove_watch_STAR_.call(null,child_ref__$1,cur_elem__$1);
return freactive.experimental.dom.request_animation_frame.call(null,((function (cur_elem,cancellation_token,vec__93210,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__){
return (function (x){if(cljs.core.not.call(null,cljs.core.deref.call(null,cancellation_token)))
{add_watch_STAR_.call(null,child_ref__$1,cur_elem__$1,on_child_ref_invalidated);
var new_elem = freactive.experimental.dom.as_element_spec.call(null,cljs.core.deref.call(null,child_ref__$1));var cur = cljs.core.deref.call(null,cur_elem__$1);if((cljs.core.not.call(null,cur)) || (cljs.core.not_EQ_.call(null,freactive.experimental.dom.get_virtual_dom.call(null,cur),freactive.experimental.dom.get_virtual_dom.call(null,new_elem))))
{return cljs.core.reset_BANG_.call(null,cur_elem__$1,freactive.experimental.dom.transition_element.call(null,parent,freactive.experimental.dom.append_transition.call(null,new_elem,new cljs.core.Keyword(null,"show","show",-576705889),((function (new_elem,cur,cur_elem,cancellation_token,vec__93210,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__){
return (function (elem,_){if(cljs.core.truth_(cljs.core.deref.call(null,cancellation_token)))
{return freactive.experimental.dom._remove.call(null,elem);
} else
{return null;
}
});})(new_elem,cur,cur_elem,cancellation_token,vec__93210,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__))
),cur));
} else
{return null;
}
} else
{return null;
}
});})(cur_elem,cancellation_token,vec__93210,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__))
);
});
var on_child_ref_invalidated__4 = (function (key,child_ref__$1,_,___$1){return on_child_ref_invalidated.call(null,key,child_ref__$1);
});
on_child_ref_invalidated = function(key,child_ref__$1,_,___$1){
switch(arguments.length){
case 2:
return on_child_ref_invalidated__2.call(this,key,child_ref__$1);
case 4:
return on_child_ref_invalidated__4.call(this,key,child_ref__$1,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
on_child_ref_invalidated.cljs$core$IFn$_invoke$arity$2 = on_child_ref_invalidated__2;
on_child_ref_invalidated.cljs$core$IFn$_invoke$arity$4 = on_child_ref_invalidated__4;
return on_child_ref_invalidated;
})()
;})(cur_elem,cancellation_token,vec__93210,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__))
;cljs.core.reset_BANG_.call(null,cur_elem,freactive.experimental.dom.transition_element.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),null));
f.call(null,cur_elem,child_ref);
return (new freactive.experimental.dom.ReactiveElement(child_ref,cur_elem,cancellation_token));
} else
{return freactive.experimental.dom.transition_element.call(null,parent,cljs.core.deref.call(null,child_ref),null);
}
});

/**
* @constructor
*/
freactive.experimental.dom.ReactiveElement = (function (spec_ref,cur_elem,cancellation_token){
this.spec_ref = spec_ref;
this.cur_elem = cur_elem;
this.cancellation_token = cancellation_token;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
})
freactive.experimental.dom.ReactiveElement.cljs$lang$type = true;
freactive.experimental.dom.ReactiveElement.cljs$lang$ctorStr = "freactive.experimental.dom/ReactiveElement";
freactive.experimental.dom.ReactiveElement.cljs$lang$ctorPrWriter = (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"freactive.experimental.dom/ReactiveElement");
});
freactive.experimental.dom.ReactiveElement.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<ReactiveElement: ");
cljs.core.pr_writer.call(null,self__.cur_elem,writer,opts);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,self__.spec_ref,writer,opts);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,self__.cancellation_token,writer,opts);
return cljs.core._write.call(null,writer,">");
});
freactive.experimental.dom.ReactiveElement.prototype.freactive$experimental$dom$IRemove$ = true;
freactive.experimental.dom.ReactiveElement.prototype.freactive$experimental$dom$IRemove$_remove$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cancellation_token,true);
return freactive.experimental.dom._remove.call(null,cljs.core.deref.call(null,self__.cur_elem));
});
freactive.experimental.dom.__GT_ReactiveElement = (function __GT_ReactiveElement(spec_ref,cur_elem,cancellation_token){return (new freactive.experimental.dom.ReactiveElement(spec_ref,cur_elem,cancellation_token));
});
freactive.experimental.dom.append_child_BANG_ = (function append_child_BANG_(parent,child){if((function (){var G__93212 = child;if(G__93212)
{var bit__12161__auto__ = (G__93212.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12161__auto__) || (G__93212.cljs$core$IDeref$))
{return true;
} else
{if((!G__93212.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__93212);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__93212);
}
})())
{return freactive.experimental.dom.append_deref_child.call(null,parent,child);
} else
{return freactive.experimental.dom.transition_element.call(null,parent,child,null);

}
});
freactive.experimental.dom.append_children_BANG_ = (function append_children_BANG_(elem,children){var seq__93217 = cljs.core.seq.call(null,children);var chunk__93218 = null;var count__93219 = (0);var i__93220 = (0);while(true){
if((i__93220 < count__93219))
{var ch = cljs.core._nth.call(null,chunk__93218,i__93220);if(cljs.core.sequential_QMARK_.call(null,ch))
{if((cljs.core.first.call(null,ch) instanceof cljs.core.Keyword))
{freactive.experimental.dom.append_child_BANG_.call(null,elem,ch);
} else
{append_children_BANG_.call(null,elem,ch);
}
} else
{freactive.experimental.dom.append_child_BANG_.call(null,elem,ch);
}
{
var G__93221 = seq__93217;
var G__93222 = chunk__93218;
var G__93223 = count__93219;
var G__93224 = (i__93220 + (1));
seq__93217 = G__93221;
chunk__93218 = G__93222;
count__93219 = G__93223;
i__93220 = G__93224;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__93217);if(temp__4388__auto__)
{var seq__93217__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__93217__$1))
{var c__12267__auto__ = cljs.core.chunk_first.call(null,seq__93217__$1);{
var G__93225 = cljs.core.chunk_rest.call(null,seq__93217__$1);
var G__93226 = c__12267__auto__;
var G__93227 = cljs.core.count.call(null,c__12267__auto__);
var G__93228 = (0);
seq__93217 = G__93225;
chunk__93218 = G__93226;
count__93219 = G__93227;
i__93220 = G__93228;
continue;
}
} else
{var ch = cljs.core.first.call(null,seq__93217__$1);if(cljs.core.sequential_QMARK_.call(null,ch))
{if((cljs.core.first.call(null,ch) instanceof cljs.core.Keyword))
{freactive.experimental.dom.append_child_BANG_.call(null,elem,ch);
} else
{append_children_BANG_.call(null,elem,ch);
}
} else
{freactive.experimental.dom.append_child_BANG_.call(null,elem,ch);
}
{
var G__93229 = cljs.core.next.call(null,seq__93217__$1);
var G__93230 = null;
var G__93231 = (0);
var G__93232 = (0);
seq__93217 = G__93229;
chunk__93218 = G__93230;
count__93219 = G__93231;
i__93220 = G__93232;
continue;
}
}
} else
{return null;
}
}
break;
}
});
freactive.experimental.dom.build_element = (function build_element(elem_spec){if((function (){var G__93240 = elem_spec;if(G__93240)
{var bit__12161__auto__ = null;if(cljs.core.truth_((function (){var or__11497__auto__ = bit__12161__auto__;if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{return G__93240.freactive$experimental$dom$IElement$;
}
})()))
{return true;
} else
{if((!G__93240.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.experimental.dom.IElement,G__93240);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.experimental.dom.IElement,G__93240);
}
})())
{return elem_spec;
} else
{var elem_spec__$1 = freactive.experimental.dom.as_element_spec.call(null,elem_spec);var virtual_dom = freactive.experimental.dom.get_virtual_dom.call(null,elem_spec__$1);if(typeof virtual_dom === 'string')
{return (new freactive.experimental.dom.Element(elem_spec__$1,document.createTextNode(virtual_dom)));
} else
{var node = freactive.experimental.dom.create_dom_node.call(null,cljs.core.first.call(null,virtual_dom));var elem = (new freactive.experimental.dom.Element(elem_spec__$1,node));var attrs_QMARK_ = cljs.core.second.call(null,virtual_dom);var attrs = ((cljs.core.map_QMARK_.call(null,attrs_QMARK_))?attrs_QMARK_:null);var children = (cljs.core.truth_(attrs)?cljs.core.nnext.call(null,virtual_dom):cljs.core.next.call(null,virtual_dom));var seq__93241_93247 = cljs.core.seq.call(null,attrs);var chunk__93242_93248 = null;var count__93243_93249 = (0);var i__93244_93250 = (0);while(true){
if((i__93244_93250 < count__93243_93249))
{var vec__93245_93251 = cljs.core._nth.call(null,chunk__93242_93248,i__93244_93250);var k_93252 = cljs.core.nth.call(null,vec__93245_93251,(0),null);var v_93253 = cljs.core.nth.call(null,vec__93245_93251,(1),null);freactive.experimental.dom.bind_attr_BANG_.call(null,node,k_93252,v_93253);
{
var G__93254 = seq__93241_93247;
var G__93255 = chunk__93242_93248;
var G__93256 = count__93243_93249;
var G__93257 = (i__93244_93250 + (1));
seq__93241_93247 = G__93254;
chunk__93242_93248 = G__93255;
count__93243_93249 = G__93256;
i__93244_93250 = G__93257;
continue;
}
} else
{var temp__4388__auto___93258 = cljs.core.seq.call(null,seq__93241_93247);if(temp__4388__auto___93258)
{var seq__93241_93259__$1 = temp__4388__auto___93258;if(cljs.core.chunked_seq_QMARK_.call(null,seq__93241_93259__$1))
{var c__12267__auto___93260 = cljs.core.chunk_first.call(null,seq__93241_93259__$1);{
var G__93261 = cljs.core.chunk_rest.call(null,seq__93241_93259__$1);
var G__93262 = c__12267__auto___93260;
var G__93263 = cljs.core.count.call(null,c__12267__auto___93260);
var G__93264 = (0);
seq__93241_93247 = G__93261;
chunk__93242_93248 = G__93262;
count__93243_93249 = G__93263;
i__93244_93250 = G__93264;
continue;
}
} else
{var vec__93246_93265 = cljs.core.first.call(null,seq__93241_93259__$1);var k_93266 = cljs.core.nth.call(null,vec__93246_93265,(0),null);var v_93267 = cljs.core.nth.call(null,vec__93246_93265,(1),null);freactive.experimental.dom.bind_attr_BANG_.call(null,node,k_93266,v_93267);
{
var G__93268 = cljs.core.next.call(null,seq__93241_93259__$1);
var G__93269 = null;
var G__93270 = (0);
var G__93271 = (0);
seq__93241_93247 = G__93268;
chunk__93242_93248 = G__93269;
count__93243_93249 = G__93270;
i__93244_93250 = G__93271;
continue;
}
}
} else
{}
}
break;
}
if(children)
{freactive.experimental.dom.append_children_BANG_.call(null,elem,children);
} else
{}
return elem;
}
}
});
freactive.experimental.dom.get_body = (function get_body(){return (document.getElementsByTagName("body")[(0)]);
});
freactive.experimental.dom.resolve_existing_element = (function resolve_existing_element(elem_or_node){if((function (){var G__93274 = elem_or_node;if(G__93274)
{var bit__12161__auto__ = null;if(cljs.core.truth_((function (){var or__11497__auto__ = bit__12161__auto__;if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{return G__93274.freactive$experimental$dom$IHasElement$;
}
})()))
{return true;
} else
{if((!G__93274.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.experimental.dom.IHasElement,G__93274);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.experimental.dom.IHasElement,G__93274);
}
})())
{return freactive.experimental.dom._get_element.call(null,elem_or_node);
} else
{if((function (){var G__93275 = elem_or_node;if(G__93275)
{var bit__12161__auto__ = null;if(cljs.core.truth_((function (){var or__11497__auto__ = bit__12161__auto__;if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{return G__93275.freactive$experimental$dom$IElement$;
}
})()))
{return true;
} else
{if((!G__93275.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.experimental.dom.IElement,G__93275);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.experimental.dom.IElement,G__93275);
}
})())
{return elem_or_node;
} else
{return (new freactive.experimental.dom.Element(null,elem_or_node));

}
}
});
freactive.experimental.dom.resolve_child_element = (function resolve_child_element(elem_or_node){if((function (){var G__93277 = elem_or_node;if(G__93277)
{var bit__12161__auto__ = null;if(cljs.core.truth_((function (){var or__11497__auto__ = bit__12161__auto__;if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{return G__93277.freactive$experimental$dom$IHasElement$;
}
})()))
{return true;
} else
{if((!G__93277.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.experimental.dom.IHasElement,G__93277);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,freactive.experimental.dom.IHasElement,G__93277);
}
})())
{return freactive.experimental.dom._get_element.call(null,elem_or_node);
} else
{return elem_or_node;

}
});
freactive.experimental.dom.append_BANG_ = (function append_BANG_(element,child){var element__$1 = freactive.experimental.dom.resolve_existing_element.call(null,element);return freactive.experimental.dom.append_child_BANG_.call(null,element__$1,freactive.experimental.dom.resolve_child_element.call(null,child));
});
freactive.experimental.dom.mount_BANG_ = (function mount_BANG_(element,child){var element__$1 = freactive.experimental.dom.resolve_existing_element.call(null,element);freactive.experimental.dom.clear_children_BANG_.call(null,element__$1);
return freactive.experimental.dom.append_child_BANG_.call(null,element__$1,freactive.experimental.dom.resolve_child_element.call(null,child));
});

//# sourceMappingURL=dom.js.map