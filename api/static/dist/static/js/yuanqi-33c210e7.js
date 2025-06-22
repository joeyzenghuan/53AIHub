import { _ as S } from "./index.vue_vue_type_script_setup_true_lang-52e77f65.js";
import { y as B, aI as N, r as V, Z as T, $ as z, b as p, c as u, F as f, d as i, t as g, f as a, w as r, j as w, u as n, al as $, e as b, K as j, q as G, at as L, a9 as O, R as P, a5 as M, ag as H, ah as K, I as Y } from "./index-8579fe4a.js";
import { E as Z, a as J } from "./el-checkbox-a21716fc.js";
import "./el-tag-0b6baecb.js";
import { E as Q, a as W } from "./el-select-8a770a23.js";
import "./el-scrollbar-4065fe54.js";
import { E as X } from "./el-popover-53d9d77c.js";
import { A as ee } from "./agent-info-3b42dae9.js";
import { _ as te } from "./base-config.vue_vue_type_script_setup_true_lang-b44f6063.js";
import { _ as ae } from "./expand-config.vue_vue_type_script_setup_true_lang-979a7e3f.js";
import { u as oe } from "./drawer.vue_vue_type_script_setup_true_lang-6dfd020c.js";
import { c as le } from "./group-39bff2fe.js";
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
const ne = { class: "flex items-center justify-between" }, se = { class: "flex items-center gap-1" }, re = { class: "text-base text-[#1D1E1F]" }, ie = { class: "flex-center text-[#9A9A9A] gap-1 ml-1" }, me = { class: "text-sm" }, pe = ["innerHTML"], de = { class: "text-base text-[#1D1E1F] font-medium mt-6 mb-4" }, ue = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-4" }, _e = { class: "text-[#1D1E1F]" }, ce = B({ __name: "yuanqi", props: { showChannelConfig: { type: Boolean, default: false } }, setup(y, { expose: x }) {
  const s = oe(), m = N("channelConfig") || {}, h = V(), v = V(false), t = T({ key: "", base_url: "", models: [], model: "", config: { agent_type: "chat" } }), E = V(), C = async () => {
    if (!await h.value.validate())
      return;
    const l = [t.model], k = "yuanqi", d = { channel_id: m.value.channel_id, key: t.key, base_url: t.base_url, config: t.config, models: l, name: k }, _ = await L.save({ data: d });
    Object.assign(m.value, _), d.channel_id || (d.channel_id = _.channel_id), s.form_data.custom_config.channel_config = d, s.form_data.model = l[0], O.success(window.$t("action_save_success")), v.value = true;
  }, I = async () => (h.value && h.value.validate(), E.value && E.value.validate());
  return z(() => s.agent_data, ({ channel_config: e = {} } = {}) => {
    var _a;
    v.value = !!+e.channel_id, m.value.channel_id = +e.channel_id || 0, m.value.key = t.key = e.key || "", m.value.base_url = t.base_url = e.base_url || "https://yuanqi.tencent.com/", m.value.models = t.models = e.models || [], m.value.model = t.model = t.models[0] || "", m.value.config = t.config = { ...e.config || {}, agent_type: ((_a = e.config) == null ? void 0 : _a.agent_type) || "chat" };
  }, { immediate: true, deep: true }), x({ validateForm: I, onChannelSave: C }), (e, l) => {
    const k = P, d = X, _ = M, c = H, R = Q, q = W, F = K, U = Z, A = J, D = S;
    return p(), u("div", { class: G([y.showChannelConfig ? "" : "py-7"]) }, [y.showChannelConfig ? (p(), u(f, { key: 0 }, [i("div", ne, [i("div", se, [i("h3", re, g(e.$t("yuanqi")), 1), a(d, { content: "Right Top prompts info", placement: "right-start", width: "480" }, { reference: r(() => [i("div", ie, [a(k, { name: "help", width: "14", color: "#999" }), i("span", me, g(e.$t("how_get")), 1)])]), default: r(() => [i("div", { class: "whitespace-pre-wrap text-sm text-[#333] leading-6", innerHTML: e.$t("yuanqi_agent_get_tip", { url: "<a class='text-[#5A6D9E] underline' href='https://yuanqi.tencent.com/my-creation/agent' target='_blank'>https://yuanqi.tencent.com/my-creation/agent</a>" }) }, null, 8, pe)]), _: 1 })])]), a(F, { ref_key: "channelFormRef", ref: h, model: t, "label-position": "top", class: "mt-3" }, { default: r(() => [b("", true), a(c, { label: e.$t("api_botid"), prop: "model", rules: n($)({ message: "form_input_placeholder" }) }, { default: r(() => [a(_, { modelValue: t.model, "onUpdate:modelValue": l[1] || (l[1] = (o) => t.model = o), size: "large", placeholder: e.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), a(c, { label: "Token", prop: "key", rules: n($)({ message: "form_input_placeholder", validator: ["text"] }) }, { default: r(() => [a(_, { modelValue: t.key, "onUpdate:modelValue": l[2] || (l[2] = (o) => t.key = o), size: "large", placeholder: e.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["rules"]), a(c, { label: e.$t("agent_type"), prop: "config.agent_type", rules: n($)({ message: "form_input_placeholder" }) }, { default: r(() => [a(q, { modelValue: t.config.agent_type, "onUpdate:modelValue": l[3] || (l[3] = (o) => t.config.agent_type = o), class: "max-w-[360px]", size: "large", placeholder: e.$t("form_select_placeholder"), disabled: v.value }, { default: r(() => [a(R, { value: "chat", label: e.$t("agent_type_chat") }, null, 8, ["label"])]), _: 1 }, 8, ["modelValue", "placeholder", "disabled"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"])], 64)) : b("", true), a(F, { ref_key: "agentFormRef", ref: E, model: n(s).form_data, "label-width": "104px", "label-position": "top" }, { default: r(() => [y.showChannelConfig ? (p(), u(f, { key: 0 }, [i("div", de, g(e.$t("basic_info")), 1), a(ee, { modelValue: n(s).form_data, "onUpdate:modelValue": l[4] || (l[4] = (o) => n(s).form_data = o) }, null, 8, ["modelValue"])], 64)) : (p(), u(f, { key: 1 }, [a(te), a(ae), n(s).subscription_options.length ? (p(), u(f, { key: 0 }, [i("div", ue, g(e.$t("permission_setting")), 1), a(c, { label: e.$t("register_user.title") }, { default: r(() => [a(A, { modelValue: n(s).form_data.subscription_group_ids, "onUpdate:modelValue": l[5] || (l[5] = (o) => n(s).form_data.subscription_group_ids = o) }, { default: r(() => [(p(true), u(f, null, j(n(s).subscription_options, (o) => (p(), w(U, { key: o.value, label: o.value }, { default: r(() => [i("span", _e, g(o.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), n(s).is_independent ? b("", true) : (p(), w(c, { key: 0, label: e.$t("internal_user.title"), prop: "user_group_ids" }, { default: r(() => [a(D, { modelValue: n(s).form_data.user_group_ids, "onUpdate:modelValue": l[6] || (l[6] = (o) => n(s).form_data.user_group_ids = o), type: "picker", "group-type": n(le), multiple: "" }, null, 8, ["modelValue", "group-type"])]), _: 1 }, 8, ["label"]))], 64)) : b("", true)], 64))]), _: 1 }, 8, ["model"])], 2);
  };
} });
const Pe = Y(ce, [["__scopeId", "data-v-54720ed5"]]);
export {
  Pe as default
};
