import { y as w, r as v, $ as F, b as r, c as m, f as a, w as n, F as _, d as p, t as d, u as o, al as k, e as u, K as x, j as V, q as $, ag as I, ah as U, I as A } from "./index-8579fe4a.js";
import { _ as B } from "./index.vue_vue_type_script_setup_true_lang-52e77f65.js";
import { E as D, a as N } from "./el-checkbox-a21716fc.js";
import { _ as S } from "./index-5764df31.js";
import { A as G } from "./agent-info-3b42dae9.js";
import { _ as R } from "./base-config.vue_vue_type_script_setup_true_lang-b44f6063.js";
import { _ as P } from "./expand-config.vue_vue_type_script_setup_true_lang-979a7e3f.js";
import { u as L } from "./drawer.vue_vue_type_script_setup_true_lang-6dfd020c.js";
import { c as O } from "./group-39bff2fe.js";
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
const T = { class: "text-base text-[#1D1E1F] font-medium mb-4" }, j = { class: "text-base text-[#1D1E1F] font-medium mt-8 mb-4" }, q = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-4" }, K = { class: "text-[#1D1E1F]" }, Y = w({ __name: "coze-agent", props: { showChannelConfig: { type: Boolean, default: false } }, setup(c, { expose: z }) {
  const e = L(), f = v();
  z({ validateForm: async () => f.value.validate() });
  let g = true;
  return F(() => e.form_data.custom_config.coze_workspace_id, (l) => {
    g || e.loadCozeBotOptions(l), g = false;
  }), (l, s) => {
    const b = S, i = I, C = D, E = N, y = B, h = U;
    return r(), m("div", { class: $([c.showChannelConfig ? "" : "py-7"]) }, [a(h, { ref_key: "form_ref", ref: f, model: o(e).form_data, "label-width": "104px", "label-position": "top" }, { default: n(() => [c.showChannelConfig ? (r(), m(_, { key: 0 }, [p("div", T, d(l.$t("coze_cn")), 1), a(i, { label: l.$t("workspace"), prop: "custom_config.coze_workspace_id", rules: o(k)({ message: "form_select_placeholder" }) }, { default: n(() => [a(b, { modelValue: o(e).form_data.custom_config.coze_workspace_id, "onUpdate:modelValue": s[0] || (s[0] = (t) => o(e).form_data.custom_config.coze_workspace_id = t), size: "large", options: o(e).coze_workspace_options }, null, 8, ["modelValue", "options"])]), _: 1 }, 8, ["label", "rules"]), a(i, { label: l.$t("agent"), prop: "custom_config.coze_bot_id", rules: o(k)({ message: "form_select_placeholder" }) }, { default: n(() => [a(b, { modelValue: o(e).form_data.custom_config.coze_bot_id, "onUpdate:modelValue": s[1] || (s[1] = (t) => o(e).form_data.custom_config.coze_bot_id = t), size: "large", options: o(e).coze_bot_options }, null, 8, ["modelValue", "options"])]), _: 1 }, 8, ["label", "rules"]), p("div", j, d(l.$t("basic_info")), 1), a(G, { modelValue: o(e).form_data, "onUpdate:modelValue": s[2] || (s[2] = (t) => o(e).form_data = t) }, null, 8, ["modelValue"])], 64)) : u("", true), c.showChannelConfig ? u("", true) : (r(), m(_, { key: 1 }, [a(R), a(P), o(e).subscription_options.length ? (r(), m(_, { key: 0 }, [p("div", q, d(l.$t("permission_setting")), 1), a(i, { label: l.$t("register_user.title") }, { default: n(() => [a(E, { modelValue: o(e).form_data.subscription_group_ids, "onUpdate:modelValue": s[3] || (s[3] = (t) => o(e).form_data.subscription_group_ids = t) }, { default: n(() => [(r(true), m(_, null, x(o(e).subscription_options, (t) => (r(), V(C, { key: t.value, label: t.value }, { default: n(() => [p("span", K, d(t.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), o(e).is_independent ? u("", true) : (r(), V(i, { key: 0, label: l.$t("internal_user.title"), prop: "user_group_ids" }, { default: n(() => [a(y, { modelValue: o(e).form_data.user_group_ids, "onUpdate:modelValue": s[4] || (s[4] = (t) => o(e).form_data.user_group_ids = t), type: "picker", "group-type": o(O), multiple: "" }, null, 8, ["modelValue", "group-type"])]), _: 1 }, 8, ["label"]))], 64)) : u("", true)], 64))]), _: 1 }, 8, ["model"])], 2);
  };
} });
const yo = A(Y, [["__scopeId", "data-v-6bfde16f"]]);
export {
  yo as default
};
