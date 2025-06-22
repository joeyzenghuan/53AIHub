import { z as e, A as i } from "./index-8579fe4a.js";
var a = ((t) => (t[t.SYSTEM = 1] = "SYSTEM", t[t.EXTERNAL = 2] = "EXTERNAL", t[t.CUSTOM = 3] = "CUSTOM", t))(a || {});
const s = /* @__PURE__ */ new Map([[1, "navigation.type.system"], [2, "navigation.type.external"], [3, "navigation.type.custom"]]);
var r = ((t) => (t[t.SELF = 1] = "SELF", t[t.BLANK = 2] = "BLANK", t))(r || {});
const c = /* @__PURE__ */ new Map([[1, "navigation.target.self"], [2, "navigation.target.blank"]]), g = [{ jump_path: "/index", name: "\u9996\u9875", sort: 9999, config: JSON.stringify({ target: 1, seo_title: "", seo_keywords: "", seo_description: "" }) }, { jump_path: "/agent", name: "\u667A\u80FD\u4F53", sort: 9998, config: JSON.stringify({ target: 1, seo_title: "", seo_keywords: "", seo_description: "" }) }, { jump_path: "/prompt", name: "\u63D0\u793A\u8BCD", sort: 9997, config: JSON.stringify({ target: 1, seo_title: "", seo_keywords: "", seo_description: "" }) }, { jump_path: "/toolkit", name: "AI\u5DE5\u5177", sort: 9996, config: JSON.stringify({ target: 1, seo_title: "", seo_keywords: "", seo_description: "" }) }], p = (t = {}) => {
  try {
    t.config = JSON.parse(t.config);
  } catch {
    t.config = {};
  }
  return t.type = +t.type || +t.config.type || 1, t.type_label = s.get(t.type), t.target = +t.target || +t.config.target || 1, t.target_label = c.get(t.target), t;
}, _ = { async list(t) {
  t = JSON.parse(JSON.stringify(t));
  let { data: n = [] } = await e.get("/api/navigations", { params: t }).catch(i);
  return n = n.map((o) => p(o)), { total: n.length, list: n };
}, init() {
  return e.post("/api/navigations/init", [...g]).catch(i);
}, async detail({ navigation_id: t }) {
  const { data: n = {} } = await e.get(`/api/navigations/${t}`).catch(i);
  return n;
}, async save(t) {
  const n = +t.navigation_id || 0;
  delete t.navigation_id, t.config && typeof t.config == "object" && (t.config = JSON.stringify(t.config));
  const { data: o = {} } = await e[n ? "put" : "post"](`/api/navigations${n ? `/${n}` : ""}`, t).catch(i);
  return o;
}, async delete({ navigation_id: t }) {
  return e.delete(`/api/navigations/${t}`).catch(i);
}, async update_status({ navigation_id: t, status: n }) {
  return e.patch(`/api/navigations/${t}/status`, { status: n }).catch(i);
}, async update_sort(t) {
  return e.post("/api/navigations/sort", t).catch(i);
}, async save_content({ navigation_id: t, html_content: n }) {
  return e.post(`/api/navigations/${t}/content`, { html_content: n }).catch(i);
} };
export {
  a as N,
  r as a,
  s as b,
  c,
  _ as n
};
