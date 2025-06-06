import { _ as m } from "./index-226b5715.js";
import { d as p, e as c, i as l, o as r, c as s, H as _, ac as u, a2 as d, P as f, M as x } from "./@vue-3b855f7b.js";
import "./element-plus-c72880c6.js";
import "./dayjs-b67ba5b3.js";
import "./cssfilter-476ae7ee.js";
import "./lodash-es-fadd064a.js";
import "./@element-plus-0cfad8bb.js";
import "./@vueuse-7fa053fd.js";
import "./@popperjs-c45de710.js";
import "./async-validator-7f96df71.js";
import "./@ctrl-f8748455.js";
import "./normalize-wheel-es-ed76fb12.js";
import "./pinia-6f4b1ece.js";
import "./vue-demi-71ba0ef2.js";
import "./axios-8e4517c3.js";
import "./vue-i18n-b5fa020c.js";
import "./@intlify-bab9fd84.js";
import "./vue-router-2f60a71a.js";
const g = { class: "flex flex-wrap gap-4" }, P = p({ __name: "index", setup(h) {
  const i = c([]);
  return l(() => {
    const n = document.querySelectorAll("#__svg__icons__dom__ symbol"), o = [];
    Array.from(n).forEach((e) => {
      const t = e.getAttribute("id").replace("icon-", "");
      o.push(t);
    }), i.value = o;
  }), (n, o) => {
    const e = m;
    return r(), s("div", g, [(r(true), s(_, null, u(i.value, (t, a) => (r(), s("div", { key: a, class: "flex flex-col items-center" }, [d(f(t) + " ", 1), x(e, { name: t, width: "30px", height: "30px", color: "#182B50" }, null, 8, ["name"])]))), 128))]);
  };
} });
export {
  P as default
};
