import { R as i, o as d, a as r, b as c, c as s, d as e, t as n, e as l, f as _, A as v } from "./index-7b696e01.js";
import { d as p } from "./copy-BS31ARP0-68b0a49d.js";
const u = { class: "code-viewer" }, m = { class: "code-viewer__header" }, w = { class: "code-viewer__tabs-container" }, g = { key: 0, class: "code-viewer__tabs" }, f = { class: "code-viewer__tab code-viewer__tab--active" }, y = { class: "code-viewer__actions" }, b = { class: "code-viewer__content" }, S = { class: "code-viewer__code" }, k = ["innerHTML"], h = { __name: "code", props: { html: { type: String, default: "" }, value: { type: String, default: "" }, language: { type: String, default: "" } }, setup(a) {
  const o = a, t = () => {
    p(JSON.stringify(o.value));
  };
  return d(() => {
  }), r(() => {
  }), (C, M) => (c(), s("div", u, [e("div", m, [e("div", w, [a.language ? (c(), s("div", g, [e("div", f, n(a.language.toUpperCase()), 1)])) : l("", true)]), e("div", y, [e("i", { class: "code-viewer__icon code-viewer__icon--copy", onClick: t }, [_(v, { name: "copy" })])])]), e("div", b, [e("div", S, [e("pre", { class: "code-viewer__code-pre", innerHTML: a.html }, null, 8, k)])])]));
} }, T = i(h, [["__scopeId", "data-v-f1658eb6"]]);
export {
  T as default
};
