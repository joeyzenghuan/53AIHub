import { u as b, r as B, o as w, a as g, h as d, i as l, Y as v, b as f, d as c, H as _, t as r, e as h, f as y, z as k, Z as E, y as T, $ as V, a0 as $, a1 as z } from "./index-7b696e01.js";
const A = { class: "p-2 flex items-center justify-between" }, D = { class: "text-lg font-semibold text-[#1D1E1F]" }, N = { class: "p-2 text-base text-[#535456]" }, j = { class: "flex items-center justify-center my-2" }, I = b({ __name: "index", props: { title: { default: "" }, content: { default: "" }, confirmButtonText: { default: window.$t("action_confirm") }, showConfirmButton: { type: Boolean, default: true }, cancelButtonText: { default: window.$t("action_cancel") }, showCancelButton: { type: Boolean, default: true } }, emits: ["confirm"], setup(m, { expose: i, emit: p }) {
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
    const s = T, a = V, x = v;
    return f(), d(x, { "header-class": "hidden", width: "520px", style: { "--el-dialog-border-radius": "16px" }, "close-on-click-modal": false, "show-close": false, "destroy-on-close": "", "append-to-body": "", center: "", "align-center": "", modelValue: t.value, "onUpdate:modelValue": n[0] || (n[0] = (C) => t.value = C) }, { footer: l(() => [c("div", j, [e.showCancelButton ? (f(), d(a, { key: 0, size: "large", onClick: o }, { default: l(() => [_(r(e.cancelButtonText), 1)]), _: 1 })) : h("", true), e.showConfirmButton ? (f(), d(a, { key: 1, class: "!px-8", type: "primary", size: "large", onClick: o }, { default: l(() => [_(r(e.confirmButtonText), 1)]), _: 1 })) : h("", true)])]), default: l(() => [c("header", A, [c("h1", D, r(e.title), 1), y(s, { class: "font-bold", size: 20, color: "#9A9A9A", onClick: o }, { default: l(() => [y(k(E))]), _: 1 })]), c("section", N, r(e.content), 1)]), _: 1 }, 8, ["modelValue"]);
  };
} });
function F({ title: m, content: i, confirmButtonText: p, showConfirmButton: t, cancelButtonText: u, showCancelButton: o }) {
  try {
    const e = document.createElement("div");
    document.body.appendChild(e);
    let n = {};
    const s = $({ setup() {
      const a = B(null);
      return w(() => {
        a.value && (n = a.value);
      }), () => z(I, { ref: a, title: m, content: i, confirmButtonText: p, showConfirmButton: t, cancelButtonText: u, showCancelButton: o });
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
