import { E as i, e as p } from "./element-plus-c72880c6.js";
import { b as l } from "./vue-router-2f60a71a.js";
import { d as m, i as c, o as d, c as u, a as t, P as s, M as _, K as x, a2 as f } from "./@vue-3b855f7b.js";
import "./dayjs-b67ba5b3.js";
import "./cssfilter-476ae7ee.js";
import "./lodash-es-fadd064a.js";
import "./@element-plus-0cfad8bb.js";
import "./@vueuse-7fa053fd.js";
import "./@popperjs-c45de710.js";
import "./async-validator-7f96df71.js";
import "./@ctrl-f8748455.js";
import "./normalize-wheel-es-ed76fb12.js";
const g = "/console/static/svg/404-451d813e.svg", h = { class: "flex h-full" }, v = { class: "px-4 m-auto space-y-4 text-center max-[400px]" }, w = { class: "text-4xl text-slate-800 dark:text-neutral-200" }, z = m({ __name: "index", setup(y) {
  const r = l();
  function a() {
    r.push("/");
  }
  return c(() => {
    i({ type: "warning", dangerouslyUseHTMLString: true, message: window.$t("no_permission_tip"), duration: 0, showClose: true });
  }), (o, e) => {
    const n = p;
    return d(), u("div", h, [t("div", v, [t("h1", w, s(o.$t("not_found_tip")), 1), e[0] || (e[0] = t("p", { class: "text-base text-slate-500 dark:text-neutral-400" }, null, -1)), e[1] || (e[1] = t("div", { class: "flex-center text-center" }, [t("div", { class: "w-[300px]" }, [t("img", { src: g, alt: "404" })])], -1)), _(n, { size: "large", type: "primary", onClick: a }, { default: x(() => [f(s(o.$t("go_home")), 1)]), _: 1 })])]);
  };
} });
export {
  z as default
};
