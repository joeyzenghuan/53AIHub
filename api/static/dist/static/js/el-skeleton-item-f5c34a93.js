import { aP as g, b1 as w, y as p, aU as S, b as i, c as u, j as h, u as t, cj as I, e as N, q as m, a$ as $, bc as v, r as P, o as B, $ as E, br as T, bF as j, ck as V, F as d, K as b, s as _, f as C, a3 as y, cf as F, b0 as z, cl as L } from "./index-8579fe4a.js";
const O = g({ animated: { type: Boolean, default: false }, count: { type: Number, default: 1 }, rows: { type: Number, default: 3 }, loading: { type: Boolean, default: true }, throttle: { type: w([Number, Object]) } }), R = g({ variant: { type: String, values: ["circle", "rect", "h1", "h3", "text", "caption", "p", "image", "button"], default: "text" } }), U = p({ name: "ElSkeletonItem" }), q = p({ ...U, props: R, setup(l) {
  const e = S("skeleton");
  return (o, s) => (i(), u("div", { class: m([t(e).e("item"), t(e).e(o.variant)]) }, [o.variant === "image" ? (i(), h(t(I), { key: 0 })) : N("v-if", true)], 2));
} });
var c = $(q, [["__file", "skeleton-item.vue"]]);
const H = (l, e = 0) => {
  if (e === 0)
    return l;
  const o = v(e) && !!e.initVal, s = P(o);
  let r = null;
  const a = (n) => {
    if (j(n)) {
      s.value = l.value;
      return;
    }
    r && clearTimeout(r), r = setTimeout(() => {
      s.value = l.value;
    }, n);
  }, f = (n) => {
    n === "leading" ? T(e) ? a(e) : a(e.leading) : v(e) ? a(e.trailing) : s.value = false;
  };
  return B(() => f("leading")), E(() => l.value, (n) => {
    f(n ? "leading" : "trailing");
  }), s;
}, K = p({ name: "ElSkeleton" }), M = p({ ...K, props: O, setup(l, { expose: e }) {
  const o = l, s = S("skeleton"), r = H(V(o, "loading"), o.throttle);
  return e({ uiLoading: r }), (a, f) => t(r) ? (i(), u("div", y({ key: 0, class: [t(s).b(), t(s).is("animated", a.animated)] }, a.$attrs), [(i(true), u(d, null, b(a.count, (n) => (i(), u(d, { key: n }, [t(r) ? _(a.$slots, "template", { key: n }, () => [C(c, { class: m(t(s).is("first")), variant: "p" }, null, 8, ["class"]), (i(true), u(d, null, b(a.rows, (k) => (i(), h(c, { key: k, class: m([t(s).e("paragraph"), t(s).is("last", k === a.rows && a.rows > 1)]), variant: "p" }, null, 8, ["class"]))), 128))]) : N("v-if", true)], 64))), 128))], 16)) : _(a.$slots, "default", F(y({ key: 1 }, a.$attrs)));
} });
var A = $(M, [["__file", "skeleton.vue"]]);
const G = z(A, { SkeletonItem: c }), J = L(c);
export {
  J as E,
  G as a
};
