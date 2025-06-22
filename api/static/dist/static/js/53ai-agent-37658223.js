import { y as V, r as k, b as i, c as m, f as n, w as l, F as p, d as r, t as _, u as t, al as $, K as w, j as f, e as g, q as I, ag as A, ah as B, I as D } from "./index-8579fe4a.js";
import { _ as R } from "./index.vue_vue_type_script_setup_true_lang-52e77f65.js";
import { E as S, a as U } from "./el-checkbox-a21716fc.js";
import { _ as N } from "./index-5764df31.js";
import { A as G } from "./agent-info-3b42dae9.js";
import { _ as q } from "./base-config.vue_vue_type_script_setup_true_lang-b44f6063.js";
import { _ as P } from "./expand-config.vue_vue_type_script_setup_true_lang-979a7e3f.js";
import { u as j } from "./drawer.vue_vue_type_script_setup_true_lang-6dfd020c.js";
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
const L = { class: "flex items-center justify-between mb-4" }, T = { class: "flex items-center gap-1" }, K = { class: "text-base text-[#1D1E1F]" }, M = { class: "text-base text-[#1D1E1F] font-medium mb-4" }, O = { class: "text-base text-[#1D1E1F] font-medium mt-6 mb-4" }, Y = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-4" }, H = { class: "text-[#1D1E1F]" }, J = V({ __name: "53ai-agent", props: { showChannelConfig: { type: Boolean, default: false } }, setup(c, { expose: b }) {
  const e = j(), d = k(), h = async () => d.value && d.value.validate(), E = (o) => {
    e.agent_id || (e.form_data.logo = o.option.logo, e.form_data.name = o.option.name, e.form_data.description = o.option.description || ""), e.form_data.custom_config.chat53ai_agent_id = o.value, e.form_data.settings.opening_statement = o.option.opening_statement, e.form_data.settings.suggested_questions = o.option.suggested_questions.map((s) => ({ id: Math.random().toString(36).substring(2, 15), content: s }));
  };
  return b({ validateForm: h }), (o, s) => {
    const y = N, u = A, v = S, x = U, C = R, F = B;
    return i(), m("div", { class: I([c.showChannelConfig ? "" : "py-7"]) }, [n(F, { ref_key: "agentFormRef", ref: d, model: t(e).form_data, "label-width": "104px", "label-position": "top" }, { default: l(() => [c.showChannelConfig ? (i(), m(p, { key: 0 }, [r("div", L, [r("div", T, [r("h3", K, _(o.$t("53ai")), 1)])]), r("div", M, _(o.$t("select_agent")), 1), n(u, { prop: "custom_config['chat53ai_agent_id']", rules: t($)({ message: "form_select_placeholder" }) }, { default: l(() => [n(y, { modelValue: t(e).form_data.custom_config.chat53ai_agent_id, "onUpdate:modelValue": s[0] || (s[0] = (a) => t(e).form_data.custom_config.chat53ai_agent_id = a), "use-i18n": false, size: "large", options: t(e).chat53ai_agent_options, onChange: E }, null, 8, ["modelValue", "options"])]), _: 1 }, 8, ["rules"]), r("div", O, _(o.$t("basic_info")), 1), n(G, { modelValue: t(e).form_data, "onUpdate:modelValue": s[1] || (s[1] = (a) => t(e).form_data = a) }, null, 8, ["modelValue"])], 64)) : (i(), m(p, { key: 1 }, [n(q), n(P), t(e).subscription_options.length ? (i(), m(p, { key: 0 }, [r("div", Y, _(o.$t("permission_setting")), 1), n(u, { label: o.$t("register_user.title") }, { default: l(() => [n(x, { modelValue: t(e).form_data.subscription_group_ids, "onUpdate:modelValue": s[2] || (s[2] = (a) => t(e).form_data.subscription_group_ids = a) }, { default: l(() => [(i(true), m(p, null, w(t(e).subscription_options, (a) => (i(), f(v, { key: a.value, label: a.value }, { default: l(() => [r("span", H, _(a.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), t(e).is_independent ? g("", true) : (i(), f(u, { key: 0, label: o.$t("internal_user.title"), prop: "user_group_ids" }, { default: l(() => [n(C, { modelValue: t(e).form_data.user_group_ids, "onUpdate:modelValue": s[3] || (s[3] = (a) => t(e).form_data.user_group_ids = a), type: "picker", "group-type": t(z), multiple: "" }, null, 8, ["modelValue", "group-type"])]), _: 1 }, 8, ["label"]))], 64)) : g("", true)], 64))]), _: 1 }, 8, ["model"])], 2);
  };
} });
const Fe = D(J, [["__scopeId", "data-v-e1de9e4d"]]);
export {
  Fe as default
};
