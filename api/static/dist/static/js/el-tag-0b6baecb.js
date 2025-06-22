import { aP as w, bf as M, y as T, bg as N, aU as V, Y as $, b as i, c as P, d as r, s as g, q as o, u as a, j as u, w as p, f as k, a2 as y, x as v, G as C, e as h, a7 as _, T as I, a$ as j, b0 as q } from "./index-8579fe4a.js";
const F = w({ type: { type: String, values: ["primary", "success", "info", "warning", "danger"], default: "primary" }, closable: Boolean, disableTransitions: Boolean, hit: Boolean, color: String, size: { type: String, values: M }, effect: { type: String, values: ["dark", "light", "plain"], default: "light" }, round: Boolean }), G = { close: (n) => n instanceof MouseEvent, click: (n) => n instanceof MouseEvent }, K = T({ name: "ElTag" }), U = T({ ...K, props: F, emits: G, setup(n, { emit: d }) {
  const S = n, B = N(), s = V("tag"), m = $(() => {
    const { type: e, hit: l, effect: t, closable: c, round: z } = S;
    return [s.b(), s.is("closable", c), s.m(e || "primary"), s.m(B.value), s.m(t), s.is("hit", l), s.is("round", z)];
  }), f = (e) => {
    d("close", e);
  }, b = (e) => {
    d("click", e);
  }, E = (e) => {
    var l, t, c;
    (c = (t = (l = e == null ? void 0 : e.component) == null ? void 0 : l.subTree) == null ? void 0 : t.component) != null && c.bum && (e.component.subTree.component.bum = null);
  };
  return (e, l) => e.disableTransitions ? (i(), P("span", { key: 0, class: o(a(m)), style: _({ backgroundColor: e.color }), onClick: b }, [r("span", { class: o(a(s).e("content")) }, [g(e.$slots, "default")], 2), e.closable ? (i(), u(a(C), { key: 0, class: o(a(s).e("close")), onClick: v(f, ["stop"]) }, { default: p(() => [k(a(y))]), _: 1 }, 8, ["class", "onClick"])) : h("v-if", true)], 6)) : (i(), u(I, { key: 1, name: `${a(s).namespace.value}-zoom-in-center`, appear: "", onVnodeMounted: E }, { default: p(() => [r("span", { class: o(a(m)), style: _({ backgroundColor: e.color }), onClick: b }, [r("span", { class: o(a(s).e("content")) }, [g(e.$slots, "default")], 2), e.closable ? (i(), u(a(C), { key: 0, class: o(a(s).e("close")), onClick: v(f, ["stop"]) }, { default: p(() => [k(a(y))]), _: 1 }, 8, ["class", "onClick"])) : h("v-if", true)], 6)]), _: 3 }, 8, ["name"]));
} });
var Y = j(U, [["__file", "tag.vue"]]);
const D = q(Y);
export {
  D as E,
  F as t
};
