import { _ as B } from "./index.vue_vue_type_script_setup_true_lang-52e77f65.js";
import { y as N, aI as z, r as V, Z as T, $ as j, b as m, c as u, F as f, d as i, t as b, f as t, w as r, j as w, u as n, al as $, e as g, K as G, q as L, at as O, a9 as P, R as M, a5 as H, ag as q, ah as K, I as Y } from "./index-8579fe4a.js";
import { E as Z, a as J } from "./el-checkbox-a21716fc.js";
import "./el-tag-0b6baecb.js";
import { E as Q, a as W } from "./el-select-8a770a23.js";
import "./el-scrollbar-4065fe54.js";
import { E as X } from "./el-popover-53d9d77c.js";
import { A as ee } from "./agent-info-3b42dae9.js";
import { _ as ae } from "./base-config.vue_vue_type_script_setup_true_lang-b44f6063.js";
import { _ as te } from "./expand-config.vue_vue_type_script_setup_true_lang-979a7e3f.js";
import { u as le } from "./drawer.vue_vue_type_script_setup_true_lang-6dfd020c.js";
import { c as oe } from "./group-39bff2fe.js";
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
const ne = { class: "flex items-center justify-between" }, se = { class: "flex items-center gap-1" }, re = { class: "text-base text-[#1D1E1F]" }, ie = { class: "flex-center text-[#9A9A9A] gap-1 ml-1" }, pe = { class: "text-sm" }, me = ["innerHTML"], de = { class: "text-base text-[#1D1E1F] font-medium mt-6 mb-4" }, ue = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-4" }, _e = { class: "text-[#1D1E1F]" }, ce = N({ __name: "bailian", props: { showChannelConfig: { type: Boolean, default: false } }, setup(v, { expose: x }) {
  const s = le(), p = z("channelConfig") || {}, h = V(), y = V(false), a = T({ key: "", base_url: "", models: [], model: "", config: { agent_type: "chat" } }), E = V(), C = async () => {
    if (!await h.value.validate())
      return;
    const o = [a.model], k = "bailian", d = { channel_id: p.value.channel_id, key: a.key, base_url: a.base_url, config: a.config, models: o, name: k }, _ = await O.save({ data: d });
    Object.assign(p.value, _), d.channel_id || (d.channel_id = _.channel_id), s.form_data.custom_config.channel_config = d, s.form_data.model = o[0], P.success(window.$t("action_save_success")), y.value = true;
  }, I = async () => (h.value && h.value.validate(), E.value && E.value.validate());
  return j(() => s.agent_data, ({ channel_config: e = {} } = {}) => {
    var _a;
    y.value = !!+e.channel_id, p.value.channel_id = +e.channel_id || 0, p.value.key = a.key = e.key || "", p.value.base_url = a.base_url = e.base_url || "https://dashscope.aliyuncs.com", p.value.models = a.models = e.models || [], p.value.model = a.model = a.models[0] || "", p.value.config = a.config = { ...e.config || {}, agent_type: ((_a = e.config) == null ? void 0 : _a.agent_type) || "chat" };
  }, { immediate: true, deep: true }), x({ validateForm: I, onChannelSave: C }), (e, o) => {
    const k = M, d = X, _ = H, c = q, R = Q, U = W, F = K, A = Z, D = J, S = B;
    return m(), u("div", { class: L([v.showChannelConfig ? "" : "py-7"]) }, [v.showChannelConfig ? (m(), u(f, { key: 0 }, [i("div", ne, [i("div", se, [i("h3", re, b(e.$t("bailian")), 1), t(d, { content: "Right Top prompts info", placement: "right-start", width: "480" }, { reference: r(() => [i("div", ie, [t(k, { name: "help", width: "14", color: "#999" }), i("span", pe, b(e.$t("how_get")), 1)])]), default: r(() => [i("div", { class: "whitespace-pre-wrap text-sm text-[#333] leading-6", innerHTML: e.$t("bailian_agent_get_tip", { url: "<a class='text-[#5A6D9E] underline' href='https://bailian.console.aliyun.com/?tab=app#/app-center' target='_blank'>https://bailian.console.aliyun.com/?tab=app#/app-center</a>" }) }, null, 8, me)]), _: 1 })])]), t(F, { ref_key: "channelFormRef", ref: h, model: a, "label-position": "top", class: "mt-3" }, { default: r(() => [g("", true), t(c, { label: e.$t("api_appid"), prop: "model", rules: n($)({ message: "form_input_placeholder" }) }, { default: r(() => [t(_, { modelValue: a.model, "onUpdate:modelValue": o[1] || (o[1] = (l) => a.model = l), size: "large", placeholder: e.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), t(c, { label: e.$t("api_key"), prop: "key", rules: n($)({ message: "form_input_placeholder", validator: ["text"] }) }, { default: r(() => [t(_, { modelValue: a.key, "onUpdate:modelValue": o[2] || (o[2] = (l) => a.key = l), size: "large", placeholder: e.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), t(c, { label: e.$t("agent_type"), prop: "config.agent_type", rules: n($)({ message: "form_input_placeholder" }) }, { default: r(() => [t(U, { modelValue: a.config.agent_type, "onUpdate:modelValue": o[3] || (o[3] = (l) => a.config.agent_type = l), class: "max-w-[360px]", size: "large", placeholder: e.$t("form_select_placeholder"), disabled: y.value }, { default: r(() => [t(R, { value: "chat", label: e.$t("agent_type_chat") }, null, 8, ["label"])]), _: 1 }, 8, ["modelValue", "placeholder", "disabled"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"])], 64)) : g("", true), t(F, { ref_key: "agentFormRef", ref: E, model: n(s).form_data, "label-width": "104px", "label-position": "top" }, { default: r(() => [v.showChannelConfig ? (m(), u(f, { key: 0 }, [i("div", de, b(e.$t("basic_info")), 1), t(ee, { modelValue: n(s).form_data, "onUpdate:modelValue": o[4] || (o[4] = (l) => n(s).form_data = l) }, null, 8, ["modelValue"])], 64)) : (m(), u(f, { key: 1 }, [t(ae), t(te), n(s).subscription_options.length ? (m(), u(f, { key: 0 }, [i("div", ue, b(e.$t("permission_setting")), 1), t(c, { label: e.$t("register_user.title") }, { default: r(() => [t(D, { modelValue: n(s).form_data.subscription_group_ids, "onUpdate:modelValue": o[5] || (o[5] = (l) => n(s).form_data.subscription_group_ids = l) }, { default: r(() => [(m(true), u(f, null, G(n(s).subscription_options, (l) => (m(), w(A, { key: l.value, label: l.value }, { default: r(() => [i("span", _e, b(l.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), n(s).is_independent ? g("", true) : (m(), w(c, { key: 0, label: e.$t("internal_user.title"), prop: "user_group_ids" }, { default: r(() => [t(S, { modelValue: n(s).form_data.user_group_ids, "onUpdate:modelValue": o[6] || (o[6] = (l) => n(s).form_data.user_group_ids = l), type: "picker", "group-type": n(oe), multiple: "" }, null, 8, ["modelValue", "group-type"])]), _: 1 }, 8, ["label"]))], 64)) : g("", true)], 64))]), _: 1 }, 8, ["model"])], 2);
  };
} });
const Me = Y(ce, [["__scopeId", "data-v-9566fb7d"]]);
export {
  Me as default
};
