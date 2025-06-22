import { _ as j } from "./index.vue_vue_type_script_setup_true_lang-52e77f65.js";
import { y as z, aI as B, r as w, Z as N, $ as T, b as p, c, F as f, d as i, t as g, f as l, w as r, u as n, al as h, e as V, K as G, j as C, q as L, at as O, a9 as P, R as M, a5 as H, ag as q, ah as K, I as Y } from "./index-8579fe4a.js";
import { E as Z, a as J } from "./el-checkbox-a21716fc.js";
import "./el-tag-0b6baecb.js";
import { E as Q, a as W } from "./el-select-8a770a23.js";
import "./el-scrollbar-4065fe54.js";
import { E as X } from "./el-popover-53d9d77c.js";
import { A as ee } from "./agent-info-3b42dae9.js";
import { _ as te } from "./base-config.vue_vue_type_script_setup_true_lang-b44f6063.js";
import { _ as le } from "./expand-config.vue_vue_type_script_setup_true_lang-979a7e3f.js";
import { u as oe } from "./drawer.vue_vue_type_script_setup_true_lang-6dfd020c.js";
import { c as ae } from "./group-39bff2fe.js";
import "./el-skeleton-item-f5c34a93.js";
import "./el-text-f138b0ce.js";
import "./isEqual-8c73ec38.js";
import "./debounce-484109dd.js";
import "./dropdown-85221e0a.js";
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
const ne = { class: "flex items-center justify-between" }, se = { class: "flex items-center gap-1" }, re = { class: "text-base text-[#1D1E1F]" }, ie = { class: "flex-center text-[#9A9A9A] gap-1 ml-1" }, me = { class: "text-sm" }, pe = ["innerHTML"], de = { class: "text-base text-[#1D1E1F] font-medium mt-6 mb-4" }, ue = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-4" }, _e = { class: "text-[#1D1E1F]" }, ce = z({ __name: "volcengine", props: { showChannelConfig: { type: Boolean, default: false } }, setup(v, { expose: F }) {
  const s = oe(), m = B("channelConfig") || {}, b = w(), y = w(false), t = N({ key: "", base_url: "", models: [], model: "", config: { agent_type: "chat" } }), k = w(), x = async () => {
    if (!await b.value.validate())
      return;
    const o = [t.model], E = "volcengine", d = { channel_id: m.value.channel_id, key: t.key, base_url: t.base_url, config: t.config, models: o, name: E }, u = await O.save({ data: d });
    Object.assign(m.value, u), d.channel_id || (d.channel_id = u.channel_id), s.form_data.custom_config.channel_config = d, s.form_data.model = o[0], P.success(window.$t("action_save_success")), y.value = true;
  }, I = async () => (b.value && b.value.validate(), k.value && k.value.validate());
  return T(() => s.agent_data, ({ channel_config: e = {} } = {}) => {
    var _a;
    y.value = !!+e.channel_id, m.value.channel_id = +e.channel_id || 0, m.value.key = t.key = e.key || "", m.value.base_url = t.base_url = e.base_url || "https://ark.cn-beijing.volces.com", m.value.models = t.models = e.models || [], m.value.model = t.model = t.models[0] || "", m.value.config = t.config = { ...e.config || {}, agent_type: ((_a = e.config) == null ? void 0 : _a.agent_type) || "chat" };
  }, { immediate: true, deep: true }), F({ validateForm: I, onChannelSave: x }), (e, o) => {
    const E = M, d = X, u = H, _ = q, R = Q, A = W, $ = K, D = Z, U = J, S = j;
    return p(), c("div", { class: L([v.showChannelConfig ? "" : "py-7"]) }, [v.showChannelConfig ? (p(), c(f, { key: 0 }, [i("div", ne, [i("div", se, [i("h3", re, g(e.$t("volcengine")), 1), l(d, { content: "Right Top prompts info", placement: "right-start", width: "480" }, { reference: r(() => [i("div", ie, [l(E, { name: "help", width: "14", color: "#999" }), i("span", me, g(e.$t("how_get")), 1)])]), default: r(() => [i("div", { class: "whitespace-pre-wrap text-sm text-[#333] leading-6", innerHTML: e.$t("volcengine_agent_get_tip", { url: "<a class='text-[#5A6D9E] underline' href='https://www.volcengine.com/' target='_blank'>https://www.volcengine.com/</a>", my_url: "<a class='text-[#5A6D9E] underline' href='https://console.volcengine.com/ark/region:ark+cn-beijing/assistant' target='_blank'>https://console.volcengine.com/ark/region:ark+cn-beijing/assistant</a>" }) }, null, 8, pe)]), _: 1 })])]), l($, { ref_key: "channelFormRef", ref: b, model: t, "label-position": "top", class: "mt-3" }, { default: r(() => [l(_, { label: e.$t("module.platform_model_base_url"), prop: "base_url", rules: n(h)({ message: "form_input_placeholder", validator: ["text", "link"] }) }, { default: r(() => [l(u, { modelValue: t.base_url, "onUpdate:modelValue": o[0] || (o[0] = (a) => t.base_url = a), size: "large", placeholder: e.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), l(_, { label: e.$t("api_botid_en"), prop: "model", rules: n(h)({ message: "form_input_placeholder" }) }, { default: r(() => [l(u, { modelValue: t.model, "onUpdate:modelValue": o[1] || (o[1] = (a) => t.model = a), size: "large", placeholder: e.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), l(_, { label: e.$t("api_key"), prop: "key", rules: n(h)({ message: "form_input_placeholder", validator: ["text"] }) }, { default: r(() => [l(u, { modelValue: t.key, "onUpdate:modelValue": o[2] || (o[2] = (a) => t.key = a), size: "large", placeholder: e.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), l(_, { label: e.$t("agent_type"), prop: "config.agent_type", rules: n(h)({ message: "form_input_placeholder" }) }, { default: r(() => [l(A, { modelValue: t.config.agent_type, "onUpdate:modelValue": o[3] || (o[3] = (a) => t.config.agent_type = a), class: "max-w-[360px]", size: "large", placeholder: e.$t("form_select_placeholder"), disabled: y.value }, { default: r(() => [l(R, { value: "chat", label: e.$t("agent_type_chat") }, null, 8, ["label"])]), _: 1 }, 8, ["modelValue", "placeholder", "disabled"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"])], 64)) : V("", true), l($, { ref_key: "agentFormRef", ref: k, model: n(s).form_data, "label-width": "104px", "label-position": "top" }, { default: r(() => [v.showChannelConfig ? (p(), c(f, { key: 0 }, [i("div", de, g(e.$t("basic_info")), 1), l(ee, { modelValue: n(s).form_data, "onUpdate:modelValue": o[4] || (o[4] = (a) => n(s).form_data = a) }, null, 8, ["modelValue"])], 64)) : (p(), c(f, { key: 1 }, [l(te), l(le), n(s).subscription_options.length ? (p(), c(f, { key: 0 }, [i("div", ue, g(e.$t("permission_setting")), 1), l(_, { label: e.$t("register_user.title") }, { default: r(() => [l(U, { modelValue: n(s).form_data.subscription_group_ids, "onUpdate:modelValue": o[5] || (o[5] = (a) => n(s).form_data.subscription_group_ids = a) }, { default: r(() => [(p(true), c(f, null, G(n(s).subscription_options, (a) => (p(), C(D, { key: a.value, label: a.value }, { default: r(() => [i("span", _e, g(a.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), n(s).is_independent ? V("", true) : (p(), C(_, { key: 0, label: e.$t("internal_user.title"), prop: "user_group_ids" }, { default: r(() => [l(S, { modelValue: n(s).form_data.user_group_ids, "onUpdate:modelValue": o[6] || (o[6] = (a) => n(s).form_data.user_group_ids = a), type: "picker", "group-type": n(ae), multiple: "" }, null, 8, ["modelValue", "group-type"])]), _: 1 }, 8, ["label"]))], 64)) : V("", true)], 64))]), _: 1 }, 8, ["model"])], 2);
  };
} });
const Me = Y(ce, [["__scopeId", "data-v-b07818d0"]]);
export {
  Me as default
};
