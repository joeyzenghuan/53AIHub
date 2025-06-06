import { u as l, x as i, c as s, d as o, f as a, i as d, e as f, t as _, q as p, y as u, b as n, z as m, B as h } from "./index-7b696e01.js";
const k = { class: "flex-none flex items-center justify-between gap-3" }, x = { class: "flex-1 flex items-center gap-3" }, b = { class: "text-[26px] text-[#1D1E1F] font-semibold" }, g = l({ __name: "index", props: { back: { type: Boolean, default: false }, title: { default: "" } }, setup(w) {
  const t = i(), c = () => {
    window.history.state.back ? t.go(-1) : t.push("/");
  };
  return (e, y) => {
    const r = u;
    return n(), s("div", k, [o("div", x, [e.back ? (n(), s("div", { key: 0, class: "w-7 h-7 flex-center cursor-pointer", onClick: c }, [a(r, { size: "18" }, { default: d(() => [a(m(h))]), _: 1 })])) : f("", true), o("h2", b, _(e.title), 1)]), p(e.$slots, "right")]);
  };
} });
export {
  g as _
};
