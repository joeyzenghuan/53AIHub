import { y as x, r as C, b as r, c as i, f as a, w as n, F as _, d as m, t as p, u as e, al as F, K as h, j as c, e as b, q as $, ag as B, ah as I, I as w } from "./index-8579fe4a.js";
import { _ as A } from "./index.vue_vue_type_script_setup_true_lang-52e77f65.js";
import { E as D, a as U } from "./el-checkbox-a21716fc.js";
import { _ as N } from "./index-5764df31.js";
import { A as S } from "./agent-info-3b42dae9.js";
import { _ as G } from "./base-config.vue_vue_type_script_setup_true_lang-b44f6063.js";
import { _ as R } from "./expand-config.vue_vue_type_script_setup_true_lang-979a7e3f.js";
import { u as P } from "./drawer.vue_vue_type_script_setup_true_lang-6dfd020c.js";
import { c as z } from "./group-39bff2fe.js";
import "./el-skeleton-item-f5c34a93.js";
import "./el-tag-0b6baecb.js";
import "./el-select-8a770a23.js";
import "./el-scrollbar-4065fe54.js";
import "./isEqual-8c73ec38.js";
import "./debounce-484109dd.js";
import "./el-text-f138b0ce.js";
import "./el-input-number-310bd679.js";
import "./index-ede470e7.js";
import "./image.vue_vue_type_style_index_0_lang-1ce00652.js";
import "./index.vue_vue_type_script_setup_true_lang-dd688c6c.js";
import "./sortable.esm-7ba019b6.js";
import "./position-4ca9dd9d.js";
import "./editor.vue_vue_type_style_index_0_lang-603ca752.js";
import "./el-loading-8747b309.js";
import "./el-switch-1a77f9ca.js";
import "./el-drawer-393896dd.js";
import "./agent-f71520b7.js";
const L = { class: "text-base text-[#1D1E1F] font-medium mb-4" }, T = { class: "text-base text-[#1D1E1F] font-medium mb-4" }, j = { class: "text-base text-[#1D1E1F] font-medium mb-4" }, q = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-4" }, K = { class: "text-[#1D1E1F]" }, O = x({ __name: "app-builder-agent", props: { showChannelConfig: { type: Boolean, default: false } }, setup(d, { expose: g }) {
  const o = P(), f = C();
  return g({ validateForm: async () => f.value.validate() }), (l, s) => {
    const E = N, u = B, y = D, V = U, k = A, v = I;
    return r(), i("div", { class: $([d.showChannelConfig ? "" : "py-7"]) }, [a(v, { ref_key: "form_ref", ref: f, model: e(o).form_data, "label-width": "104px", "label-position": "top" }, { default: n(() => [d.showChannelConfig ? (r(), i(_, { key: 0 }, [m("div", L, p(l.$t("app_builder")), 1), m("div", T, p(l.$t("select_agent")), 1), a(u, { prop: "custom_config.app_builder_bot_id", rules: e(F)({ message: "form_select_placeholder" }) }, { default: n(() => [a(E, { modelValue: e(o).form_data.custom_config.app_builder_bot_id, "onUpdate:modelValue": s[0] || (s[0] = (t) => e(o).form_data.custom_config.app_builder_bot_id = t), "use-i18n": false, size: "large", options: e(o).app_builder_bot_options }, null, 8, ["modelValue", "options"])]), _: 1 }, 8, ["rules"]), m("div", j, p(l.$t("basic_info")), 1), a(S, { modelValue: e(o).form_data, "onUpdate:modelValue": s[1] || (s[1] = (t) => e(o).form_data = t) }, null, 8, ["modelValue"])], 64)) : (r(), i(_, { key: 1 }, [a(G), a(R), e(o).subscription_options.length ? (r(), i(_, { key: 0 }, [m("div", q, p(l.$t("permission_setting")), 1), a(u, { label: l.$t("register_user.title") }, { default: n(() => [a(V, { modelValue: e(o).form_data.subscription_group_ids, "onUpdate:modelValue": s[2] || (s[2] = (t) => e(o).form_data.subscription_group_ids = t) }, { default: n(() => [(r(true), i(_, null, h(e(o).subscription_options, (t) => (r(), c(y, { key: t.value, label: t.value }, { default: n(() => [m("span", K, p(t.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), e(o).is_independent ? b("", true) : (r(), c(u, { key: 0, label: l.$t("internal_user.title"), prop: "user_group_ids" }, { default: n(() => [a(k, { modelValue: e(o).form_data.user_group_ids, "onUpdate:modelValue": s[3] || (s[3] = (t) => e(o).form_data.user_group_ids = t), type: "picker", "group-type": e(z), multiple: "" }, null, 8, ["modelValue", "group-type"])]), _: 1 }, 8, ["label"]))], 64)) : b("", true)], 64))]), _: 1 }, 8, ["model"])], 2);
  };
} });
const ke = w(O, [["__scopeId", "data-v-39300ba1"]]);
export {
  ke as default
};
