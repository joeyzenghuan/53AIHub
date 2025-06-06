import { u as E, C as b, r as u, b as l, h as _, i as n, f as a, c as h, F as D, G as I, H as x, t as d, d as p, z as k, I as B, J as C, K as L, L as S, y } from "./index-7b696e01.js";
import { E as z, a as N, b as V } from "./el-dropdown-item-2f5f0e32.js";
import "./el-scrollbar-a17df1f1.js";
const F = { class: "!outline-none !border-none flex-center gap-1 cursor-pointer" }, M = { class: "text-sm cursor-pointer" }, T = E({ __name: "LanguageDropdown", setup(j) {
  var _a;
  const { t: G, locale: s } = b(), o = u([{ label: "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09", value: "zh-cn" }, { label: "\u4E2D\u6587\uFF08\u7E41\u9AD4\uFF09", value: "zh-tw" }, { label: "English\uFF08US\uFF09", value: "en" }, { label: "\u65E5\u672C\u8A9E", value: "ja" }]), r = u(((_a = o.value.find((e) => e.value === s.value)) == null ? void 0 : _a.label) || ""), m = (e) => {
    var _a2;
    localStorage.setItem("default_lang", e), s.value = e, r.value = ((_a2 = o.value.find((c) => c.value === e)) == null ? void 0 : _a2.label) || "", C.emit("language-change", e), L.setLang(e);
  };
  return (e, c) => {
    const g = S, i = y, f = z, v = N, w = V;
    return l(), _(w, { trigger: "click", onCommand: m }, { dropdown: n(() => [a(v, null, { default: n(() => [(l(true), h(D, null, I(o.value, (t) => (l(), _(f, { key: t.value, command: t.value }, { default: n(() => [x(d(t.label), 1)]), _: 2 }, 1032, ["command"]))), 128))]), _: 1 })]), default: n(() => [p("div", F, [a(g, { name: "language" }), p("span", M, d(r.value), 1), a(i, null, { default: n(() => [a(k(B))]), _: 1 })])]), _: 1 });
  };
} });
export {
  T as _
};
