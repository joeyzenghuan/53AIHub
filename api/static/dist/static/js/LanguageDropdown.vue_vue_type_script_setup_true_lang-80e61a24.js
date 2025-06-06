import { b, K as E, L as h, M as D } from "./element-plus-c72880c6.js";
import { e as I, _ as x } from "./index-76ebd052.js";
import { f as k } from "./@element-plus-0cfad8bb.js";
import { u as B } from "./vue-i18n-b5fa020c.js";
import { d as C, e as u, o as l, J as _, K as n, M as a, c as L, H as M, ac as S, a2 as N, P as p, a as d, u as V } from "./@vue-3b855f7b.js";
const y = { class: "!outline-none !border-none flex-center gap-1 cursor-pointer" }, z = { class: "text-sm cursor-pointer" }, U = C({ __name: "LanguageDropdown", setup(K) {
  var _a;
  const { t: j, locale: s } = B(), o = u([{ label: "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09", value: "zh-cn" }, { label: "\u4E2D\u6587\uFF08\u7E41\u9AD4\uFF09", value: "zh-tw" }, { label: "English\uFF08US\uFF09", value: "en" }, { label: "\u65E5\u672C\u8A9E", value: "ja" }]), r = u(((_a = o.value.find((e) => e.value === s.value)) == null ? void 0 : _a.label) || ""), m = (e) => {
    var _a2;
    localStorage.setItem("default_lang", e), s.value = e, r.value = ((_a2 = o.value.find((c) => c.value === e)) == null ? void 0 : _a2.label) || "", I.emit("language-change", e);
  };
  return (e, c) => {
    const i = x, g = b, f = E, v = h, w = D;
    return l(), _(w, { trigger: "click", onCommand: m }, { dropdown: n(() => [a(v, null, { default: n(() => [(l(true), L(M, null, S(o.value, (t) => (l(), _(f, { key: t.value, command: t.value }, { default: n(() => [N(p(t.label), 1)]), _: 2 }, 1032, ["command"]))), 128))]), _: 1 })]), default: n(() => [d("div", y, [a(i, { name: "language" }), d("span", z, p(r.value), 1), a(g, null, { default: n(() => [a(V(k))]), _: 1 })])]), _: 1 });
  };
} });
export {
  U as _
};
