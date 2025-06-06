import { aC as I, u as y, q as T, r as E, an as _, ak as S, o as b, z as f, bg as L, ap as m, bh as $, aH as o, bi as e, bj as C, bk as h, aQ as M } from "./index-7b696e01.js";
const w = y({ inheritAttrs: false });
function v(n, s, a, l, i, d) {
  return T(n.$slots, "default");
}
var A = I(w, [["render", v], ["__file", "collection.vue"]]);
const B = y({ name: "ElCollectionItem", inheritAttrs: false });
function K(n, s, a, l, i, d) {
  return T(n.$slots, "default");
}
var P = I(B, [["render", K], ["__file", "collection-item.vue"]]);
const x = "data-el-collection-item", Y = (n) => {
  const s = `El${n}Collection`, a = `${s}Item`, l = Symbol(s), i = Symbol(a), d = { ...A, name: s, setup() {
    const u = E(), c = /* @__PURE__ */ new Map();
    _(l, { itemMap: c, getItems: () => {
      const r = f(u);
      if (!r)
        return [];
      const t = Array.from(r.querySelectorAll(`[${x}]`));
      return [...c.values()].sort((O, N) => t.indexOf(O.ref) - t.indexOf(N.ref));
    }, collectionRef: u });
  } }, g = { ...P, name: a, setup(u, { attrs: c }) {
    const p = E(), r = S(l, void 0);
    _(i, { collectionItemRef: p }), b(() => {
      const t = f(p);
      t && r.itemMap.set(t, { ref: t, ...c });
    }), L(() => {
      const t = f(p);
      r.itemMap.delete(t);
    });
  } };
  return { COLLECTION_INJECTION_KEY: l, COLLECTION_ITEM_INJECTION_KEY: i, ElCollection: d, ElCollectionItem: g };
}, k = m({ trigger: $.trigger, triggerKeys: { type: o(Array), default: () => [e.enter, e.numpadEnter, e.space, e.down] }, effect: { ...C.effect, default: "light" }, type: { type: o(String) }, placement: { type: o(String), default: "bottom" }, popperOptions: { type: o(Object), default: () => ({}) }, id: String, size: { type: String, default: "" }, splitButton: Boolean, hideOnClick: { type: Boolean, default: true }, loop: { type: Boolean, default: true }, showTimeout: { type: Number, default: 150 }, hideTimeout: { type: Number, default: 150 }, tabindex: { type: o([Number, String]), default: 0 }, maxHeight: { type: o([Number, String]), default: "" }, popperClass: { type: String, default: "" }, disabled: Boolean, role: { type: String, values: h, default: "menu" }, buttonProps: { type: o(Object) }, teleported: C.teleported, persistent: { type: Boolean, default: true } }), D = m({ command: { type: [Object, String, Number], default: () => ({}) }, disabled: Boolean, divided: Boolean, textValue: String, icon: { type: M } }), q = m({ onKeydown: { type: o(Function) } }), j = [e.down, e.pageDown, e.home], F = [e.up, e.pageUp, e.end], z = [...j, ...F], { ElCollection: H, ElCollectionItem: U, COLLECTION_INJECTION_KEY: V, COLLECTION_ITEM_INJECTION_KEY: G } = Y("Dropdown");
export {
  G as C,
  H as E,
  z as F,
  F as L,
  D as a,
  x as b,
  Y as c,
  k as d,
  U as e,
  q as f,
  V as g
};
