import { y as i, E as f, c as o, d as a, f as n, w as d, e as p, s as t, t as _, G as u, b as l, u as m, H as h } from "./index-8579fe4a.js";
const k = { class: "flex-none flex items-center justify-between gap-3" }, x = { class: "flex-1 flex items-center gap-3" }, b = { class: "text-[26px] text-[#1D1E1F] font-semibold" }, B = i({ __name: "index", props: { back: { type: Boolean, default: false }, title: { default: "" } }, setup(w) {
  const s = f(), c = () => {
    window.history.state.back ? s.go(-1) : s.push("/");
  };
  return (e, y) => {
    const r = u;
    return l(), o("div", k, [a("div", x, [e.back ? (l(), o("div", { key: 0, class: "w-7 h-7 flex-center cursor-pointer", onClick: c }, [n(r, { size: "18" }, { default: d(() => [n(m(h))]), _: 1 })])) : p("", true), t(e.$slots, "title_prefix"), a("h2", b, _(e.title), 1), t(e.$slots, "title_suffix")]), t(e.$slots, "right")]);
  };
} });
export {
  B as _
};
