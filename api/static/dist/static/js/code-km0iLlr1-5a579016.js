import { v as d, o as c, a as l, b as t, c as s, d as e, t as v, e as g, f as i, w as _, D as m, u as p, S as r, l as u, O as b } from "./index-8579fe4a.js";
import { d as w } from "./copy-NOBrwKqN-54f5154b.js";
const f = { class: "diagram-viewer" }, y = { class: "diagram-viewer__header" }, h = { class: "diagram-viewer__tabs-container" }, S = { key: 0, class: "diagram-viewer__tabs" }, x = { class: "diagram-viewer__tab diagram-viewer__tab--active" }, k = { class: "diagram-viewer__actions" }, C = { class: "diagram-viewer__content" }, M = { class: "diagram-viewer__code" }, N = ["innerHTML"], V = { __name: "code", props: { html: { type: String, default: "" }, value: { type: String, default: "" }, language: { type: String, default: "" } }, setup(a) {
  const n = a, o = () => {
    w(n.value), b.success(r.global.t("hubx.bubble.copied"));
  };
  return c(() => {
  }), l(() => {
  }), (B, D) => (t(), s("div", f, [e("div", y, [e("div", h, [a.language ? (t(), s("div", S, [e("div", x, v(a.language.toUpperCase()), 1)])) : g("", true)]), e("div", k, [i(u, { content: p(r).global.t("hubx.bubble.copy"), placement: "top", trigger: "hover" }, { default: _(() => [e("i", { class: "diagram-viewer__icon", onClick: o }, [i(m, { size: "18px", name: "copy" })])]), _: 1 }, 8, ["content"])])]), e("div", C, [e("div", M, [e("pre", { class: "diagram-viewer__code-pre", innerHTML: a.html }, null, 8, N)])])]));
} }, H = d(V, [["__scopeId", "data-v-db0a2636"]]);
export {
  H as default
};
