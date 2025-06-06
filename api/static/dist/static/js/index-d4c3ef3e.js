import { u as l, x as i, o as c, a9 as u, c as d, d as t, t as o, f as p, i as x, $ as _, b as m, H as g } from "./index-7b696e01.js";
const f = "/console/static/svg/404-451d813e.svg", h = { class: "flex h-full" }, v = { class: "px-4 m-auto space-y-4 text-center max-[400px]" }, w = { class: "text-4xl text-slate-800 dark:text-neutral-200" }, B = l({ __name: "index", setup(y) {
  const a = i();
  function n() {
    a.push("/");
  }
  return c(() => {
    u({ type: "warning", dangerouslyUseHTMLString: true, message: window.$t("no_permission_tip"), duration: 0, showClose: true });
  }), (s, e) => {
    const r = _;
    return m(), d("div", h, [t("div", v, [t("h1", w, o(s.$t("not_found_tip")), 1), e[0] || (e[0] = t("p", { class: "text-base text-slate-500 dark:text-neutral-400" }, null, -1)), e[1] || (e[1] = t("div", { class: "flex-center text-center" }, [t("div", { class: "w-[300px]" }, [t("img", { src: f, alt: "404" })])], -1)), p(r, { size: "large", type: "primary", onClick: n }, { default: x(() => [g(o(s.$t("go_home")), 1)]), _: 1 })])]);
  };
} });
export {
  B as default
};
