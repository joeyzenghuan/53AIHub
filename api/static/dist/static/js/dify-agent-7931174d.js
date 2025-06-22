import { _ as N } from "./index.vue_vue_type_script_setup_true_lang-52e77f65.js";
import { y as T, aI as L, r as C, Z as j, $ as G, aJ as O, b as i, c as _, F as g, d, t as c, f as t, w as r, j as V, L as P, e as y, u as s, al as $, K as M, q as H, aK as K, at as q, a9 as J, R as Y, a4 as Z, a5 as Q, ag as W, ah as X, I as ee } from "./index-8579fe4a.js";
import { E as te, a as ae } from "./el-checkbox-a21716fc.js";
import "./el-tag-0b6baecb.js";
import { E as oe, a as le } from "./el-select-8a770a23.js";
import "./el-scrollbar-4065fe54.js";
import { E as se } from "./el-popover-53d9d77c.js";
import { A as ne } from "./agent-info-3b42dae9.js";
import { _ as re } from "./base-config.vue_vue_type_script_setup_true_lang-b44f6063.js";
import { u as ie } from "./drawer.vue_vue_type_script_setup_true_lang-6dfd020c.js";
import { c as de } from "./group-39bff2fe.js";
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
import "./el-drawer-393896dd.js";
import "./agent-f71520b7.js";
const pe = { class: "flex items-center justify-between" }, me = { class: "flex items-center gap-1" }, ue = { class: "text-base text-[#1D1E1F]" }, _e = { class: "flex-center text-[#9A9A9A] gap-1 ml-1" }, ce = { class: "text-sm" }, fe = ["innerHTML"], ge = { class: "text-base text-[#1D1E1F] font-medium mt-6 mb-4" }, be = { class: "text-base text-[#1D1E1F] font-medium mb-4" }, he = { class: "text-[#1D1E1F]" }, ve = T({ __name: "dify-agent", props: { showChannelConfig: { type: Boolean, default: false } }, setup(E, { expose: x }) {
  const n = ie(), p = L("channelConfig") || {}, b = C(), m = C(false), o = j({ key: "", base_url: "", models: [], config: { agent_type: "chat" } }), k = C(), A = async () => {
    if (!await b.value.validate())
      return;
    const a = [K(`${o.key}_${o.base_url}`)], h = "dify", u = { channel_id: p.value.channel_id, key: o.key, base_url: o.base_url, config: o.config, models: a, name: h }, v = await q.save({ data: u });
    Object.assign(p.value, v), u.channel_id || (u.channel_id = v.channel_id), n.form_data.custom_config.channel_config = u, n.form_data.model = a[0], J.success(window.$t("action_save_success")), m.value = true;
  }, I = async () => (b.value && b.value.validate(), k.value && await k.value.validate(), true);
  return G(() => n.agent_data, ({ channel_config: e = {} } = {}) => {
    var _a;
    m.value = !!+e.channel_id, p.value.channel_id = +e.channel_id || 0, p.value.key = o.key = e.key || "", p.value.base_url = o.base_url = e.base_url || "https://api.dify.ai/v1", p.value.models = o.models = e.models || [], p.value.config = o.config = { ...e.config || {}, agent_type: ((_a = e.config) == null ? void 0 : _a.agent_type) || "chat" };
  }, { immediate: true, deep: true }), x({ validateForm: I, onChannelSave: A }), (e, a) => {
    const h = Y, u = se, v = Z, w = Q, f = W, R = oe, D = le, F = X, S = O("ExpandConfig"), U = te, B = ae, z = N;
    return i(), _("div", { class: H([E.showChannelConfig ? "" : "py-7"]) }, [E.showChannelConfig ? (i(), _(g, { key: 0 }, [d("div", pe, [d("div", me, [d("h3", ue, c(e.$t("dify")), 1), t(u, { content: "Right Top prompts info", placement: "right-start", width: "480" }, { reference: r(() => [d("div", _e, [t(h, { name: "help", width: "14", color: "#999" }), d("span", ce, c(e.$t("how_get")), 1)])]), default: r(() => [d("div", { class: "whitespace-pre-wrap text-sm text-[#333] leading-6", innerHTML: e.$t("dify_agent_get_tip", { url: "<a class='text-[#5A6D9E] underline' href='https://dify.ai/zh' target='_blank'>https://dify.ai/zh</a>" }) }, null, 8, fe)]), _: 1 })]), m.value ? (i(), V(v, { key: 0, type: "primary", link: "", onClick: a[0] || (a[0] = (l) => m.value = false) }, { default: r(() => [t(h, { name: "edit", width: "16", class: "mr-2" }), P(" " + c(e.$t("action_edit")), 1)]), _: 1 })) : y("", true)]), t(F, { ref_key: "channelFormRef", ref: b, model: o, "label-position": "top", class: "mt-3" }, { default: r(() => [t(f, { label: e.$t("api_host"), prop: "base_url", rules: s($)({ message: "form_input_placeholder", validator: ["text", "link"] }) }, { default: r(() => [t(w, { modelValue: o.base_url, "onUpdate:modelValue": a[1] || (a[1] = (l) => o.base_url = l), size: "large", placeholder: e.$t("form_input_placeholder"), disabled: m.value }, null, 8, ["modelValue", "placeholder", "disabled"])]), _: 1 }, 8, ["label", "rules"]), t(f, { label: e.$t("api_screet"), prop: "key", rules: s($)({ message: "form_input_placeholder" }) }, { default: r(() => [t(w, { modelValue: o.key, "onUpdate:modelValue": a[2] || (a[2] = (l) => o.key = l), size: "large", placeholder: e.$t("form_input_placeholder"), disabled: m.value }, null, 8, ["modelValue", "placeholder", "disabled"])]), _: 1 }, 8, ["label", "rules"]), t(f, { label: e.$t("agent_type"), prop: "config.agent_type", rules: s($)({ message: "form_input_placeholder" }) }, { default: r(() => [t(D, { modelValue: o.config.agent_type, "onUpdate:modelValue": a[3] || (a[3] = (l) => o.config.agent_type = l), class: "max-w-[360px]", size: "large", placeholder: e.$t("form_select_placeholder"), disabled: m.value }, { default: r(() => [t(R, { value: "chat", label: e.$t("agent_type_chat") }, null, 8, ["label"])]), _: 1 }, 8, ["modelValue", "placeholder", "disabled"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"])], 64)) : y("", true), t(F, { ref_key: "agentFormRef", ref: k, model: s(n).form_data, "label-width": "104px", "label-position": "top" }, { default: r(() => [E.showChannelConfig ? (i(), _(g, { key: 0 }, [d("div", ge, c(e.$t("basic_info")), 1), t(ne, { modelValue: s(n).form_data, "onUpdate:modelValue": a[4] || (a[4] = (l) => s(n).form_data = l) }, null, 8, ["modelValue"])], 64)) : (i(), _(g, { key: 1 }, [t(re), t(S), s(n).subscription_options.length ? (i(), _(g, { key: 0 }, [d("div", be, c(e.$t("permission_setting")), 1), t(f, { label: e.$t("register_user.title") }, { default: r(() => [t(B, { modelValue: s(n).form_data.subscription_group_ids, "onUpdate:modelValue": a[5] || (a[5] = (l) => s(n).form_data.subscription_group_ids = l) }, { default: r(() => [(i(true), _(g, null, M(s(n).subscription_options, (l) => (i(), V(U, { key: l.value, label: l.value }, { default: r(() => [d("span", he, c(l.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), s(n).is_independent ? y("", true) : (i(), V(f, { key: 0, label: e.$t("internal_user.title"), prop: "user_group_ids" }, { default: r(() => [t(z, { modelValue: s(n).form_data.user_group_ids, "onUpdate:modelValue": a[6] || (a[6] = (l) => s(n).form_data.user_group_ids = l), type: "picker", "group-type": s(de), multiple: "" }, null, 8, ["modelValue", "group-type"])]), _: 1 }, 8, ["label"]))], 64)) : y("", true)], 64))]), _: 1 }, 8, ["model"])], 2);
  };
} });
const qe = ee(ve, [["__scopeId", "data-v-d6045c1b"]]);
export {
  qe as default
};
