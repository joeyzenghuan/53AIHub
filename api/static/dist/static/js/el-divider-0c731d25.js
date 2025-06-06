import { ap as c, aH as p, u as i, au as u, al as v, b as s, c as a, n as o, z as r, q as f, e as m, aN as y, aC as S, aD as _ } from "./index-7b696e01.js";
const b = c({ direction: { type: String, values: ["horizontal", "vertical"], default: "horizontal" }, contentPosition: { type: String, values: ["left", "center", "right"], default: "center" }, borderStyle: { type: p(String), default: "solid" } }), h = i({ name: "ElDivider" }), z = i({ ...h, props: b, setup(n) {
  const l = n, e = u("divider"), d = v(() => e.cssVar({ "border-style": l.borderStyle }));
  return (t, P) => (s(), a("div", { class: o([r(e).b(), r(e).m(t.direction)]), style: y(r(d)), role: "separator" }, [t.$slots.default && t.direction !== "vertical" ? (s(), a("div", { key: 0, class: o([r(e).e("text"), r(e).is(t.contentPosition)]) }, [f(t.$slots, "default")], 2)) : m("v-if", true)], 6));
} });
var D = S(z, [["__file", "divider.vue"]]);
const C = _(D);
export {
  C as E
};
