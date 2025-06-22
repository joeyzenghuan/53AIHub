import { ar as D, y as $, r as E, Z as y, o as V, j as f, w as g, ay as F, b as x, f as d, d as r, t as c, m as p, L as B, a9 as L, a5 as S, a4 as j } from "./index-8579fe4a.js";
import { v as z } from "./el-loading-8747b309.js";
import { _ as C } from "./index-ad57f5b2.js";
import { E as N } from "./el-divider-7d014453.js";
import { _ as I } from "./index.vue_vue_type_script_setup_true_lang-e4a54f30.js";
import { s as _ } from "./setting-b38aa7f1.js";
const M = D("setting-store", { state: () => ({}), actions: { async loadListData() {
  return (await _.list()).data;
}, async loadDetailData(o) {
  const { data: t = [] } = await _.detail(o);
  return t;
}, async save(o, t) {
  return o ? (await _.update(o, t)).data : (await _.create({ key: t.key, value: t.value })).data;
} } }), O = { class: "flex-1 flex flex-col bg-white p-6 mt-3 box-border" }, U = { class: "flex-1 max-h-[calc(100vh-240px)] overflow-auto" }, H = { class: "font-semibold text-[#1D1E1F]" }, P = { class: "text-[#9A9A9A] text-sm mt-4" }, T = { class: "text-[#9A9A9A] text-sm mt-6" }, Z = { class: "text-[#9A9A9A] text-sm mt-6" }, W = $({ __name: "index", setup(o) {
  const t = M(), l = E(false), s = y({ setting_id: 0, key: "third_party_statistic_header", value: "" }), a = y({ setting_id: 0, key: "third_party_statistic_css", value: "" });
  V(async () => {
    l.value = true;
    const e = await t.loadListData().finally(() => {
      l.value = false;
    }), i = e.find((n) => n.key === s.key), u = e.find((n) => n.key === a.key);
    Object.assign(s, i), Object.assign(a, u);
  });
  const h = async () => {
    await Promise.all([t.save(s.setting_id, { key: s.key, value: s.value }).then((e) => {
      s.setting_id = e.setting_id || 0;
    }), t.save(a.setting_id, { key: a.key, value: a.value }).then((e) => {
      a.setting_id = e.setting_id || 0;
    })]), L.success(window.$t("action_save_success"));
  };
  return (e, i) => {
    const u = I, n = S, w = N, b = j, k = C, v = z, A = F("debounce");
    return x(), f(k, { class: "px-[60px] py-8" }, { default: g(() => [d(u, { title: e.$t("module.statistics") }, null, 8, ["title"]), r("div", O, [r("div", U, [r("h1", H, c(e.$t("module.statistics_header_title")), 1), r("div", P, c(e.$t("module.statistics_header_desc")), 1), r("div", T, c(e.$t("module.statistics_textarea_label_1")), 1), p(d(n, { modelValue: s.value, "onUpdate:modelValue": i[0] || (i[0] = (m) => s.value = m), class: "mt-3 !w-[600px]", style: { "--el-input-bg-color": "#F7F8FA" }, type: "textarea", resize: "none", placeholder: e.$t("module.statistics_textarea_label_1_example"), rows: 8 }, null, 8, ["modelValue", "placeholder"]), [[v, l.value]]), r("div", Z, c(e.$t("module.statistics_textarea_label_2")), 1), p(d(n, { modelValue: a.value, "onUpdate:modelValue": i[1] || (i[1] = (m) => a.value = m), class: "mt-3 !w-[600px]", style: { "--el-input-bg-color": "#F7F8FA" }, type: "textarea", resize: "none", rows: 8, placeholder: e.$t("module.statistics_textarea_label_2_example") }, null, 8, ["modelValue", "placeholder"]), [[v, l.value]])]), d(w), p((x(), f(b, { class: "h-[36px] w-[96px]", type: "primary", size: "large", onClick: h }, { default: g(() => [B(c(e.$t("action_save")), 1)]), _: 1 })), [[A]])])]), _: 1 });
  };
} });
export {
  W as default
};
