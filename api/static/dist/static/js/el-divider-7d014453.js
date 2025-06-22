import { aP as c, b1 as p, y as i, aU as u, Y as v, b as r, c as o, q as a, u as s, s as f, e as m, a7 as y, a$ as b, b0 as S } from "./index-8579fe4a.js";
const _ = c({ direction: { type: String, values: ["horizontal", "vertical"], default: "horizontal" }, contentPosition: { type: String, values: ["left", "center", "right"], default: "center" }, borderStyle: { type: p(String), default: "solid" } }), P = i({ name: "ElDivider" }), h = i({ ...P, props: _, setup(n) {
  const l = n, e = u("divider"), d = v(() => e.cssVar({ "border-style": l.borderStyle }));
  return (t, z) => (r(), o("div", { class: a([s(e).b(), s(e).m(t.direction)]), style: y(s(d)), role: "separator" }, [t.$slots.default && t.direction !== "vertical" ? (r(), o("div", { key: 0, class: a([s(e).e("text"), s(e).is(t.contentPosition)]) }, [f(t.$slots, "default")], 2)) : m("v-if", true)], 6));
} });
var g = b(h, [["__file", "divider.vue"]]);
const E = S(g);
export {
  E
};
