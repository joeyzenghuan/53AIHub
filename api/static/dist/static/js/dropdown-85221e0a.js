import { a$ as C, y, s as T, r as E, ax as _, aI as b, o as S, u as f, bh as L, aP as m, bi as $, b1 as o, bj as e, bk as I, bl as h, bm as M } from "./index-8579fe4a.js";
const w = y({ inheritAttrs: false });
function P(n, s, a, l, i, d) {
  return T(n.$slots, "default");
}
var v = C(w, [["render", P], ["__file", "collection.vue"]]);
const A = y({ name: "ElCollectionItem", inheritAttrs: false });
function B(n, s, a, l, i, d) {
  return T(n.$slots, "default");
}
var K = C(A, [["render", B], ["__file", "collection-item.vue"]]);
const x = "data-el-collection-item", Y = (n) => {
  const s = `El${n}Collection`, a = `${s}Item`, l = Symbol(s), i = Symbol(a), d = { ...v, name: s, setup() {
    const u = E(), c = /* @__PURE__ */ new Map();
    _(l, { itemMap: c, getItems: () => {
      const r = f(u);
      if (!r)
        return [];
      const t = Array.from(r.querySelectorAll(`[${x}]`));
      return [...c.values()].sort((g, N) => t.indexOf(g.ref) - t.indexOf(N.ref));
    }, collectionRef: u });
  } }, O = { ...K, name: a, setup(u, { attrs: c }) {
    const p = E(), r = b(l, void 0);
    _(i, { collectionItemRef: p }), S(() => {
      const t = f(p);
      t && r.itemMap.set(t, { ref: t, ...c });
    }), L(() => {
      const t = f(p);
      r.itemMap.delete(t);
    });
  } };
  return { COLLECTION_INJECTION_KEY: l, COLLECTION_ITEM_INJECTION_KEY: i, ElCollection: d, ElCollectionItem: O };
}, D = m({ trigger: $.trigger, triggerKeys: { type: o(Array), default: () => [e.enter, e.numpadEnter, e.space, e.down] }, effect: { ...I.effect, default: "light" }, type: { type: o(String) }, placement: { type: o(String), default: "bottom" }, popperOptions: { type: o(Object), default: () => ({}) }, id: String, size: { type: String, default: "" }, splitButton: Boolean, hideOnClick: { type: Boolean, default: true }, loop: { type: Boolean, default: true }, showTimeout: { type: Number, default: 150 }, hideTimeout: { type: Number, default: 150 }, tabindex: { type: o([Number, String]), default: 0 }, maxHeight: { type: o([Number, String]), default: "" }, popperClass: { type: String, default: "" }, disabled: Boolean, role: { type: String, values: h, default: "menu" }, buttonProps: { type: o(Object) }, teleported: I.teleported, persistent: { type: Boolean, default: true } }), k = m({ command: { type: [Object, String, Number], default: () => ({}) }, disabled: Boolean, divided: Boolean, textValue: String, icon: { type: M } }), U = m({ onKeydown: { type: o(Function) } }), j = [e.down, e.pageDown, e.home], F = [e.up, e.pageUp, e.end], V = [...j, ...F], { ElCollection: q, ElCollectionItem: z, COLLECTION_INJECTION_KEY: G, COLLECTION_ITEM_INJECTION_KEY: H } = Y("Dropdown");
export {
  H as C,
  q as E,
  V as F,
  F as L,
  k as a,
  x as b,
  Y as c,
  D as d,
  z as e,
  U as f,
  G as g
};
