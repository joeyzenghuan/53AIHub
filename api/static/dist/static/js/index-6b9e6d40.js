import { E as D, c as V, S as $, e as E, v as F } from "./element-plus-c72880c6.js";
import { _ as S } from "./index-62cbccec.js";
import { _ as B } from "./index.vue_vue_type_script_setup_true_lang-9a63c23d.js";
import { d as L } from "./pinia-6f4b1ece.js";
import { s as d } from "./setting-2f8c07fe.js";
import { d as z, e as C, V as y, i as M, o as f, J as g, K as x, M as _, a as r, P as c, S as u, a2 as N, an as j } from "./@vue-3b855f7b.js";
import "./dayjs-b67ba5b3.js";
import "./cssfilter-476ae7ee.js";
import "./lodash-es-fadd064a.js";
import "./@element-plus-0cfad8bb.js";
import "./@vueuse-7fa053fd.js";
import "./@popperjs-c45de710.js";
import "./async-validator-7f96df71.js";
import "./@ctrl-f8748455.js";
import "./normalize-wheel-es-ed76fb12.js";
import "./index-76ebd052.js";
import "./axios-8e4517c3.js";
import "./vue-i18n-b5fa020c.js";
import "./@intlify-bab9fd84.js";
import "./vue-router-2f60a71a.js";
import "./vue-demi-71ba0ef2.js";
const I = L("setting-store", { state: () => ({}), actions: { async loadListData() {
  return (await d.list()).data;
}, async loadDetailData(o) {
  const { data: e = [] } = await d.detail(o);
  return e;
}, async save(o, e) {
  return o ? (await d.update(o, e)).data : (await d.create({ key: e.key, value: e.value })).data;
} } }), O = { class: "flex-1 flex flex-col bg-white p-6 mt-3 box-border" }, P = { class: "flex-1 max-h-[calc(100vh-240px)] overflow-auto" }, U = { class: "font-semibold text-[#1D1E1F]" }, H = { class: "text-[#9A9A9A] text-sm mt-4" }, J = { class: "text-[#9A9A9A] text-sm mt-6" }, K = { class: "text-[#9A9A9A] text-sm mt-6" }, mt = z({ __name: "index", setup(o) {
  const e = I(), i = C(false), s = y({ setting_id: 0, key: "third_party_statistic_header", value: "" }), a = y({ setting_id: 0, key: "third_party_statistic_css", value: "" });
  M(async () => {
    i.value = true;
    const t = await e.loadListData().finally(() => {
      i.value = false;
    }), l = t.find((n) => n.key === s.key), m = t.find((n) => n.key === a.key);
    Object.assign(s, l), Object.assign(a, m);
  });
  const h = async () => {
    await Promise.all([e.save(s.setting_id, { key: s.key, value: s.value }).then((t) => {
      s.setting_id = t.setting_id || 0;
    }), e.save(a.setting_id, { key: a.key, value: a.value }).then((t) => {
      a.setting_id = t.setting_id || 0;
    })]), D.success(window.$t("action_save_success"));
  };
  return (t, l) => {
    const m = B, n = V, w = $, k = E, b = S, v = F, A = j("debounce");
    return f(), g(b, { class: "px-[60px] py-8" }, { default: x(() => [_(m, { title: t.$t("module.statistics") }, null, 8, ["title"]), r("div", O, [r("div", P, [r("h1", U, c(t.$t("module.statistics_header_title")), 1), r("div", H, c(t.$t("module.statistics_header_desc")), 1), r("div", J, c(t.$t("module.statistics_textarea_label_1")), 1), u(_(n, { modelValue: s.value, "onUpdate:modelValue": l[0] || (l[0] = (p) => s.value = p), class: "mt-3 !w-[600px]", style: { "--el-input-bg-color": "#F7F8FA" }, type: "textarea", resize: "none", placeholder: t.$t("module.statistics_textarea_label_1_example"), rows: 8 }, null, 8, ["modelValue", "placeholder"]), [[v, i.value]]), r("div", K, c(t.$t("module.statistics_textarea_label_2")), 1), u(_(n, { modelValue: a.value, "onUpdate:modelValue": l[1] || (l[1] = (p) => a.value = p), class: "mt-3 !w-[600px]", style: { "--el-input-bg-color": "#F7F8FA" }, type: "textarea", resize: "none", rows: 8, placeholder: t.$t("module.statistics_textarea_label_2_example") }, null, 8, ["modelValue", "placeholder"]), [[v, i.value]])]), _(w), u((f(), g(k, { class: "h-[36px] w-[96px]", type: "primary", size: "large", onClick: h }, { default: x(() => [N(c(t.$t("action_save")), 1)]), _: 1 })), [[A]])])]), _: 1 });
  };
} });
export {
  mt as default
};
