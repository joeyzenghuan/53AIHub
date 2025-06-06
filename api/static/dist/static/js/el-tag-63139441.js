import { ap as N, bl as M, u as T, aY as V, au as w, al as $, b as i, c as I, d as r, q as k, n as o, z as a, h as u, i as p, f as b, Z as y, am as C, y as v, e as h, aN as _, T as P, aC as q, aD as D } from "./index-7b696e01.js";
const F = N({ type: { type: String, values: ["primary", "success", "info", "warning", "danger"], default: "primary" }, closable: Boolean, disableTransitions: Boolean, hit: Boolean, color: String, size: { type: String, values: M }, effect: { type: String, values: ["dark", "light", "plain"], default: "light" }, round: Boolean }), K = { close: (n) => n instanceof MouseEvent, click: (n) => n instanceof MouseEvent }, Y = T({ name: "ElTag" }), Z = T({ ...Y, props: F, emits: K, setup(n, { emit: d }) {
  const S = n, z = V(), s = w("tag"), m = $(() => {
    const { type: e, hit: l, effect: t, closable: c, round: E } = S;
    return [s.b(), s.is("closable", c), s.m(e || "primary"), s.m(z.value), s.m(t), s.is("hit", l), s.is("round", E)];
  }), f = (e) => {
    d("close", e);
  }, g = (e) => {
    d("click", e);
  }, B = (e) => {
    var l, t, c;
    (c = (t = (l = e == null ? void 0 : e.component) == null ? void 0 : l.subTree) == null ? void 0 : t.component) != null && c.bum && (e.component.subTree.component.bum = null);
  };
  return (e, l) => e.disableTransitions ? (i(), I("span", { key: 0, class: o(a(m)), style: _({ backgroundColor: e.color }), onClick: g }, [r("span", { class: o(a(s).e("content")) }, [k(e.$slots, "default")], 2), e.closable ? (i(), u(a(v), { key: 0, class: o(a(s).e("close")), onClick: C(f, ["stop"]) }, { default: p(() => [b(a(y))]), _: 1 }, 8, ["class", "onClick"])) : h("v-if", true)], 6)) : (i(), u(P, { key: 1, name: `${a(s).namespace.value}-zoom-in-center`, appear: "", onVnodeMounted: B }, { default: p(() => [r("span", { class: o(a(m)), style: _({ backgroundColor: e.color }), onClick: g }, [r("span", { class: o(a(s).e("content")) }, [k(e.$slots, "default")], 2), e.closable ? (i(), u(a(v), { key: 0, class: o(a(s).e("close")), onClick: C(f, ["stop"]) }, { default: p(() => [b(a(y))]), _: 1 }, 8, ["class", "onClick"])) : h("v-if", true)], 6)]), _: 3 }, 8, ["name"]));
} });
var j = q(Z, [["__file", "tag.vue"]]);
const G = D(j);
export {
  G as E,
  F as t
};
