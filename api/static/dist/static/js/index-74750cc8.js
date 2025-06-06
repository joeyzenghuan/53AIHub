import { ad as $, u as D, r as E, ae as y, o as V, h as f, i as g, af as F, b as h, f as d, d as r, t as c, g as p, H as B, a9 as S, X as L, $ as z } from "./index-7b696e01.js";
import { v as C } from "./el-loading-5050bc7d.js";
import { _ as N } from "./index-71389ea4.js";
import { E as j } from "./el-divider-0c731d25.js";
import { _ as H } from "./index.vue_vue_type_script_setup_true_lang-ca2646ba.js";
import { s as _ } from "./setting-23844e27.js";
const I = $("setting-store", { state: () => ({}), actions: { async loadListData() {
  return (await _.list()).data;
}, async loadDetailData(o) {
  const { data: t = [] } = await _.detail(o);
  return t;
}, async save(o, t) {
  return o ? (await _.update(o, t)).data : (await _.create({ key: t.key, value: t.value })).data;
} } }), M = { class: "flex-1 flex flex-col bg-white p-6 mt-3 box-border" }, O = { class: "flex-1 max-h-[calc(100vh-240px)] overflow-auto" }, U = { class: "font-semibold text-[#1D1E1F]" }, P = { class: "text-[#9A9A9A] text-sm mt-4" }, T = { class: "text-[#9A9A9A] text-sm mt-6" }, X = { class: "text-[#9A9A9A] text-sm mt-6" }, W = D({ __name: "index", setup(o) {
  const t = I(), i = E(false), s = y({ setting_id: 0, key: "third_party_statistic_header", value: "" }), a = y({ setting_id: 0, key: "third_party_statistic_css", value: "" });
  V(async () => {
    i.value = true;
    const e = await t.loadListData().finally(() => {
      i.value = false;
    }), l = e.find((n) => n.key === s.key), u = e.find((n) => n.key === a.key);
    Object.assign(s, l), Object.assign(a, u);
  });
  const x = async () => {
    await Promise.all([t.save(s.setting_id, { key: s.key, value: s.value }).then((e) => {
      s.setting_id = e.setting_id || 0;
    }), t.save(a.setting_id, { key: a.key, value: a.value }).then((e) => {
      a.setting_id = e.setting_id || 0;
    })]), S.success(window.$t("action_save_success"));
  };
  return (e, l) => {
    const u = H, n = L, w = j, b = z, k = N, v = C, A = F("debounce");
    return h(), f(k, { class: "px-[60px] py-8" }, { default: g(() => [d(u, { title: e.$t("module.statistics") }, null, 8, ["title"]), r("div", M, [r("div", O, [r("h1", U, c(e.$t("module.statistics_header_title")), 1), r("div", P, c(e.$t("module.statistics_header_desc")), 1), r("div", T, c(e.$t("module.statistics_textarea_label_1")), 1), p(d(n, { modelValue: s.value, "onUpdate:modelValue": l[0] || (l[0] = (m) => s.value = m), class: "mt-3 !w-[600px]", style: { "--el-input-bg-color": "#F7F8FA" }, type: "textarea", resize: "none", placeholder: e.$t("module.statistics_textarea_label_1_example"), rows: 8 }, null, 8, ["modelValue", "placeholder"]), [[v, i.value]]), r("div", X, c(e.$t("module.statistics_textarea_label_2")), 1), p(d(n, { modelValue: a.value, "onUpdate:modelValue": l[1] || (l[1] = (m) => a.value = m), class: "mt-3 !w-[600px]", style: { "--el-input-bg-color": "#F7F8FA" }, type: "textarea", resize: "none", rows: 8, placeholder: e.$t("module.statistics_textarea_label_2_example") }, null, 8, ["modelValue", "placeholder"]), [[v, i.value]])]), d(w), p((h(), f(b, { class: "h-[36px] w-[96px]", type: "primary", size: "large", onClick: x }, { default: g(() => [B(c(e.$t("action_save")), 1)]), _: 1 })), [[A]])])]), _: 1 });
  };
} });
export {
  W as default
};
