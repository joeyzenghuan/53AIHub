import { d as b, e as B, i as w, D as g, o as d, J as m, K as l, a as c, a2 as _, P as r, G as h, M as y, u as v, ar as k, ad as E } from "./@vue-3b855f7b.js";
import { g as T, b as V, e as D } from "./element-plus-c72880c6.js";
import { b as A } from "./@element-plus-0cfad8bb.js";
const N = { class: "p-2 flex items-center justify-between" }, $ = { class: "text-lg font-semibold text-[#1D1E1F]" }, z = { class: "p-2 text-base text-[#535456]" }, j = { class: "flex items-center justify-center my-2" }, I = b({ __name: "index", props: { title: { default: "" }, content: { default: "" }, confirmButtonText: { default: window.$t("action_confirm") }, showConfirmButton: { type: Boolean, default: true }, cancelButtonText: { default: window.$t("action_cancel") }, showCancelButton: { type: Boolean, default: true } }, emits: ["confirm"], setup(f, { expose: i, emit: p }) {
  const t = B(false);
  w(() => {
  }), g(() => {
  });
  const u = async ({ data: e = {} } = {}) => {
    t.value = true;
  }, o = () => {
    t.value = false;
  };
  return i({ open: u, close: o }), (e, n) => {
    const s = V, a = D, x = T;
    return d(), m(x, { "header-class": "hidden", width: "520px", style: { "--el-dialog-border-radius": "16px" }, "close-on-click-modal": false, "show-close": false, "destroy-on-close": "", "append-to-body": "", center: "", "align-center": "", modelValue: t.value, "onUpdate:modelValue": n[0] || (n[0] = (C) => t.value = C) }, { footer: l(() => [c("div", j, [e.showCancelButton ? (d(), m(a, { key: 0, size: "large", onClick: o }, { default: l(() => [_(r(e.cancelButtonText), 1)]), _: 1 })) : h("", true), e.showConfirmButton ? (d(), m(a, { key: 1, class: "!px-8", type: "primary", size: "large", onClick: o }, { default: l(() => [_(r(e.confirmButtonText), 1)]), _: 1 })) : h("", true)])]), default: l(() => [c("header", N, [c("h1", $, r(e.title), 1), y(s, { class: "font-bold", size: 20, color: "#9A9A9A", onClick: o }, { default: l(() => [y(v(A))]), _: 1 })]), c("section", z, r(e.content), 1)]), _: 1 }, 8, ["modelValue"]);
  };
} });
function F({ title: f, content: i, confirmButtonText: p, showConfirmButton: t, cancelButtonText: u, showCancelButton: o }) {
  try {
    const e = document.createElement("div");
    document.body.appendChild(e);
    let n = {};
    const s = k({ setup() {
      const a = B(null);
      return w(() => {
        a.value && (n = a.value);
      }), () => E(I, { ref: a, title: f, content: i, confirmButtonText: p, showConfirmButton: t, cancelButtonText: u, showCancelButton: o });
    } });
    return s.config.globalProperties.$t = window.$t, s.mount(e), n.destroy = () => {
      s.unmount(), e.remove();
    }, n;
  } catch (e) {
    return console.error(e), {};
  }
}
export {
  F as T
};
