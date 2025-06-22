import { y as l, r as _, o as i, c as o, F as p, K as u, b as n, L as m, t as d, f, R as x } from "./index-8579fe4a.js";
const g = { class: "flex flex-wrap gap-4" }, y = l({ __name: "index", setup(h) {
  const a = _([]);
  return i(() => {
    const c = document.querySelectorAll("#__svg__icons__dom__ symbol"), t = [];
    Array.from(c).forEach((s) => {
      const e = s.getAttribute("id").replace("icon-", "");
      t.push(e);
    }), a.value = t;
  }), (c, t) => {
    const s = x;
    return n(), o("div", g, [(n(true), o(p, null, u(a.value, (e, r) => (n(), o("div", { key: r, class: "flex flex-col items-center" }, [m(d(e) + " ", 1), f(s, { name: e, width: "30px", height: "30px", color: "#182B50" }, null, 8, ["name"])]))), 128))]);
  };
} });
export {
  y as default
};
