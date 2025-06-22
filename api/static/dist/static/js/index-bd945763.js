import { y as l, E as i, o as c, a9 as d, c as u, d as t, t as o, f as p, w as _, a4 as x, b as m, L as g } from "./index-8579fe4a.js";
const f = "/console/static/svg/404-451d813e.svg", w = { class: "flex h-full" }, y = { class: "px-4 m-auto space-y-4 text-center max-[400px]" }, h = { class: "text-4xl text-slate-800 dark:text-neutral-200" }, B = l({ __name: "index", setup(v) {
  const a = i();
  function n() {
    a.push("/");
  }
  return c(() => {
    d({ type: "warning", dangerouslyUseHTMLString: true, message: window.$t("no_permission_tip"), duration: 0, showClose: true });
  }), (s, e) => {
    const r = x;
    return m(), u("div", w, [t("div", y, [t("h1", h, o(s.$t("not_found_tip")), 1), e[0] || (e[0] = t("p", { class: "text-base text-slate-500 dark:text-neutral-400" }, null, -1)), e[1] || (e[1] = t("div", { class: "flex-center text-center" }, [t("div", { class: "w-[300px]" }, [t("img", { src: f, alt: "404" })])], -1)), p(r, { size: "large", type: "primary", onClick: n }, { default: _(() => [g(o(s.$t("go_home")), 1)]), _: 1 })])]);
  };
} });
export {
  B as default
};
