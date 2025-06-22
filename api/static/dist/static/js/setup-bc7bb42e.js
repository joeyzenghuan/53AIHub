import { y as b, r as w, o as B, a as g, j as d, w as l, a6 as v, b as f, d as c, L as _, t as r, e as y, f as h, u as k, a2 as E, G as T, a4 as V, ac as A, ad as D } from "./index-8579fe4a.js";
const N = { class: "p-2 flex items-center justify-between" }, $ = { class: "text-lg font-semibold text-[#1D1E1F]" }, j = { class: "p-2 text-base text-[#535456]" }, z = { class: "flex items-center justify-center my-2" }, I = b({ __name: "index", props: { title: { default: "" }, content: { default: "" }, confirmButtonText: { default: window.$t("action_confirm") }, showConfirmButton: { type: Boolean, default: true }, cancelButtonText: { default: window.$t("action_cancel") }, showCancelButton: { type: Boolean, default: true } }, emits: ["confirm"], setup(m, { expose: i, emit: p }) {
  const t = w(false);
  B(() => {
  }), g(() => {
  });
  const u = async ({ data: e = {} } = {}) => {
    t.value = true;
  }, o = () => {
    t.value = false;
  };
  return i({ open: u, close: o }), (e, n) => {
    const s = T, a = V, x = v;
    return f(), d(x, { "header-class": "hidden", width: "520px", style: { "--el-dialog-border-radius": "16px" }, "close-on-click-modal": false, "show-close": false, "destroy-on-close": "", "append-to-body": "", center: "", "align-center": "", modelValue: t.value, "onUpdate:modelValue": n[0] || (n[0] = (C) => t.value = C) }, { footer: l(() => [c("div", z, [e.showCancelButton ? (f(), d(a, { key: 0, size: "large", onClick: o }, { default: l(() => [_(r(e.cancelButtonText), 1)]), _: 1 })) : y("", true), e.showConfirmButton ? (f(), d(a, { key: 1, class: "!px-8", type: "primary", size: "large", onClick: o }, { default: l(() => [_(r(e.confirmButtonText), 1)]), _: 1 })) : y("", true)])]), default: l(() => [c("header", N, [c("h1", $, r(e.title), 1), h(s, { class: "font-bold", size: 20, color: "#9A9A9A", onClick: o }, { default: l(() => [h(k(E))]), _: 1 })]), c("section", j, r(e.content), 1)]), _: 1 }, 8, ["modelValue"]);
  };
} });
function F({ title: m, content: i, confirmButtonText: p, showConfirmButton: t, cancelButtonText: u, showCancelButton: o }) {
  try {
    const e = document.createElement("div");
    document.body.appendChild(e);
    let n = {};
    const s = A({ setup() {
      const a = w(null);
      return B(() => {
        a.value && (n = a.value);
      }), () => D(I, { ref: a, title: m, content: i, confirmButtonText: p, showConfirmButton: t, cancelButtonText: u, showCancelButton: o });
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
