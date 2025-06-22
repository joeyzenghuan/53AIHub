import { y as b, J as E, r as u, b as l, j as _, w as n, f as a, c as h, F as D, K as I, L as x, t as d, d as p, u as k, M as B, N as L, Q as C, R as N, G as S } from "./index-8579fe4a.js";
import { E as y, a as M, b as V } from "./el-dropdown-menu-ce96a192.js";
import "./el-scrollbar-4065fe54.js";
import "./el-dropdown-item-4ed993c7.js";
const j = { class: "!outline-none !border-none flex-center gap-1 cursor-pointer" }, z = { class: "text-sm cursor-pointer" }, R = b({ __name: "LanguageDropdown", setup(F) {
  var _a;
  const { t: A, locale: s } = E(), o = u([{ label: "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09", value: "zh-cn" }, { label: "\u4E2D\u6587\uFF08\u7E41\u9AD4\uFF09", value: "zh-tw" }, { label: "English\uFF08US\uFF09", value: "en" }, { label: "\u65E5\u672C\u8A9E", value: "ja" }]), r = u(((_a = o.value.find((e) => e.value === s.value)) == null ? void 0 : _a.label) || ""), m = (e) => {
    var _a2;
    localStorage.setItem("default_lang", e), s.value = e, r.value = ((_a2 = o.value.find((c) => c.value === e)) == null ? void 0 : _a2.label) || "", L.emit("language-change", e), C.setLang(e);
  };
  return (e, c) => {
    const g = N, i = S, f = y, v = M, w = V;
    return l(), _(w, { trigger: "click", onCommand: m }, { dropdown: n(() => [a(v, null, { default: n(() => [(l(true), h(D, null, I(o.value, (t) => (l(), _(f, { key: t.value, command: t.value }, { default: n(() => [x(d(t.label), 1)]), _: 2 }, 1032, ["command"]))), 128))]), _: 1 })]), default: n(() => [p("div", j, [a(g, { name: "language" }), p("span", z, d(r.value), 1), a(i, null, { default: n(() => [a(k(B))]), _: 1 })])]), _: 1 });
  };
} });
export {
  R as _
};
