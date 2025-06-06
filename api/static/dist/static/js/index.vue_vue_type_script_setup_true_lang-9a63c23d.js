import { b as i } from "./element-plus-c72880c6.js";
import { n as l } from "./@element-plus-0cfad8bb.js";
import { b as f } from "./vue-router-2f60a71a.js";
import { d, o, c as s, a, M as n, K as p, u as m, G as _, P as u, A as h } from "./@vue-3b855f7b.js";
const k = { class: "flex-none flex items-center justify-between gap-3" }, b = { class: "flex-1 flex items-center gap-3" }, x = { class: "text-[26px] text-[#1D1E1F] font-semibold" }, E = d({ __name: "index", props: { back: { type: Boolean, default: false }, title: { default: "" } }, setup(w) {
  const t = f(), r = () => {
    window.history.state.back ? t.go(-1) : t.push("/");
  };
  return (e, g) => {
    const c = i;
    return o(), s("div", k, [a("div", b, [e.back ? (o(), s("div", { key: 0, class: "w-7 h-7 flex-center cursor-pointer", onClick: r }, [n(c, { size: "18" }, { default: p(() => [n(m(l))]), _: 1 })])) : _("", true), a("h2", x, u(e.title), 1)]), h(e.$slots, "right")]);
  };
} });
export {
  E as _
};
