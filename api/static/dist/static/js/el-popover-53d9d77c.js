import { aP as A, bi as d, bk as r, bq as R, y as h, Y as n, aU as U, r as $, u as p, aX as D, b as u, j as K, w as c, c as V, q as L, t as v, e as b, s as g, L as O, a3 as q, az as z, a$ as H, bQ as I, b0 as j } from "./index-8579fe4a.js";
import { d as f } from "./dropdown-85221e0a.js";
const F = A({ trigger: d.trigger, triggerKeys: d.triggerKeys, placement: f.placement, disabled: d.disabled, visible: r.visible, transition: r.transition, popperOptions: f.popperOptions, tabindex: f.tabindex, content: r.content, popperStyle: r.popperStyle, popperClass: r.popperClass, enterable: { ...r.enterable, default: true }, effect: { ...r.effect, default: "light" }, teleported: r.teleported, appendTo: r.appendTo, title: String, width: { type: [String, Number], default: 150 }, offset: { type: Number, default: void 0 }, showAfter: { type: Number, default: 0 }, hideAfter: { type: Number, default: 200 }, autoClose: { type: Number, default: 0 }, showArrow: { type: Boolean, default: true }, persistent: { type: Boolean, default: true }, "onUpdate:visible": { type: Function } }), Q = { "update:visible": (t) => R(t), "before-enter": () => true, "before-leave": () => true, "after-enter": () => true, "after-leave": () => true }, X = "onUpdate:visible", Y = h({ name: "ElPopover" }), G = h({ ...Y, props: F, emits: Q, setup(t, { expose: a, emit: s }) {
  const o = t, y = n(() => o[X]), i = U("popover"), l = $(), w = n(() => {
    var e;
    return (e = p(l)) == null ? void 0 : e.popperRef;
  }), P = n(() => [{ width: D(o.width) }, o.popperStyle]), C = n(() => [i.b(), o.popperClass, { [i.m("plain")]: !!o.content }]), E = n(() => o.transition === `${i.namespace.value}-fade-in-linear`), k = () => {
    var e;
    (e = l.value) == null || e.hide();
  }, S = () => {
    s("before-enter");
  }, B = () => {
    s("before-leave");
  }, N = () => {
    s("after-enter");
  }, T = () => {
    s("update:visible", false), s("after-leave");
  };
  return a({ popperRef: w, hide: k }), (e, _) => (u(), K(p(z), q({ ref_key: "tooltipRef", ref: l }, e.$attrs, { trigger: e.trigger, "trigger-keys": e.triggerKeys, placement: e.placement, disabled: e.disabled, visible: e.visible, transition: e.transition, "popper-options": e.popperOptions, tabindex: e.tabindex, content: e.content, offset: e.offset, "show-after": e.showAfter, "hide-after": e.hideAfter, "auto-close": e.autoClose, "show-arrow": e.showArrow, "aria-label": e.title, effect: e.effect, enterable: e.enterable, "popper-class": p(C), "popper-style": p(P), teleported: e.teleported, "append-to": e.appendTo, persistent: e.persistent, "gpu-acceleration": p(E), "onUpdate:visible": p(y), onBeforeShow: S, onBeforeHide: B, onShow: N, onHide: T }), { content: c(() => [e.title ? (u(), V("div", { key: 0, class: L(p(i).e("title")), role: "title" }, v(e.title), 3)) : b("v-if", true), g(e.$slots, "default", {}, () => [O(v(e.content), 1)])]), default: c(() => [e.$slots.reference ? g(e.$slots, "reference", { key: 0 }) : b("v-if", true)]), _: 3 }, 16, ["trigger", "trigger-keys", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "append-to", "persistent", "gpu-acceleration", "onUpdate:visible"]));
} });
var J = H(G, [["__file", "popover.vue"]]);
const m = (t, a) => {
  const s = a.arg || a.value, o = s == null ? void 0 : s.popperRef;
  o && (o.triggerRef = t);
};
var M = { mounted(t, a) {
  m(t, a);
}, updated(t, a) {
  m(t, a);
} };
const W = "popover", Z = I(M, W), te = j(J, { directive: Z });
export {
  te as E
};
