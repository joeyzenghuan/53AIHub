var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { ap as cu, bh as gl, bj as Ot, aT as fu, u as pe, al as at, au as uu, r as ee, z as C, ax as du, b as O, h as W, i as v, c as z, n as An, t as N, e as J, q as hn, H as G, aA as lh, ab as ah, aC as pu, dw as mu, aD as gu, bP as bu, o as Dr, c3 as yu, d as A, aN as Oo, dx as vu, F as le, p as yt, b3 as Tr, bd as wu, y as tn, aO as to, G as gt, W as Gi, ad as xu, cP as yi, dy as ku, cS as _u, cR as Su, M as bl, a9 as xi, f as b, a4 as Te, aa as et, X as Ut, Q as io, ak as cn, aG as We, bg as Cu, a1 as Au, df as Mu, a as Du, dz as Tu, am as Rt, bF as Ou, L as Li, ac as Dt, cC as Eu, af as Bu, g as Or, $ as Ii, Y as Pu, ae as hh, v as ch, dA as Ru } from "./index-7b696e01.js";
import { b as Mn, c as Dn, E as Er, a as Br } from "./el-table-column-fe44992a.js";
import "./el-tag-63139441.js";
import { E as jt, b as Lu, a as Kt } from "./el-select-2909247e.js";
import "./el-scrollbar-a17df1f1.js";
import { E as Pr } from "./el-input-number-d679436c.js";
import { A as Iu, f as pi, a as yl, e as fh, d as uh, g as Nu, c as Eo, b as dh } from "./agent-fe196a62.js";
import { g as vl, G as Vu, c as $u } from "./group-a5ba9c36.js";
import { _ as Fu } from "./image.vue_vue_type_style_index_0_lang-376c63d4.js";
import { E as Ni } from "./el-switch-546ddcad.js";
import { E as zu, a as Hu } from "./el-radio-32a02f49.js";
import { d as no } from "./dropdown-cf05cb92.js";
const Wu = cu({ trigger: gl.trigger, placement: no.placement, disabled: gl.disabled, visible: Ot.visible, transition: Ot.transition, popperOptions: no.popperOptions, tabindex: no.tabindex, content: Ot.content, popperStyle: Ot.popperStyle, popperClass: Ot.popperClass, enterable: { ...Ot.enterable, default: true }, effect: { ...Ot.effect, default: "light" }, teleported: Ot.teleported, title: String, width: { type: [String, Number], default: 150 }, offset: { type: Number, default: void 0 }, showAfter: { type: Number, default: 0 }, hideAfter: { type: Number, default: 200 }, autoClose: { type: Number, default: 0 }, showArrow: { type: Boolean, default: true }, persistent: { type: Boolean, default: true }, "onUpdate:visible": { type: Function } }), qu = { "update:visible": (n) => fu(n), "before-enter": () => true, "before-leave": () => true, "after-enter": () => true, "after-leave": () => true }, Uu = "onUpdate:visible", ju = pe({ name: "ElPopover" }), Ku = pe({ ...ju, props: Wu, emits: qu, setup(n, { expose: e, emit: t }) {
  const i = n, s = at(() => i[Uu]), o = uu("popover"), r = ee(), l = at(() => {
    var m;
    return (m = C(r)) == null ? void 0 : m.popperRef;
  }), a = at(() => [{ width: du(i.width) }, i.popperStyle]), h = at(() => [o.b(), i.popperClass, { [o.m("plain")]: !!i.content }]), c = at(() => i.transition === `${o.namespace.value}-fade-in-linear`), f = () => {
    var m;
    (m = r.value) == null || m.hide();
  }, u = () => {
    t("before-enter");
  }, d = () => {
    t("before-leave");
  }, p = () => {
    t("after-enter");
  }, g = () => {
    t("update:visible", false), t("after-leave");
  };
  return e({ popperRef: l, hide: f }), (m, y) => (O(), W(C(ah), lh({ ref_key: "tooltipRef", ref: r }, m.$attrs, { trigger: m.trigger, placement: m.placement, disabled: m.disabled, visible: m.visible, transition: m.transition, "popper-options": m.popperOptions, tabindex: m.tabindex, content: m.content, offset: m.offset, "show-after": m.showAfter, "hide-after": m.hideAfter, "auto-close": m.autoClose, "show-arrow": m.showArrow, "aria-label": m.title, effect: m.effect, enterable: m.enterable, "popper-class": C(h), "popper-style": C(a), teleported: m.teleported, persistent: m.persistent, "gpu-acceleration": C(c), "onUpdate:visible": C(s), onBeforeShow: u, onBeforeHide: d, onShow: p, onHide: g }), { content: v(() => [m.title ? (O(), z("div", { key: 0, class: An(C(o).e("title")), role: "title" }, N(m.title), 3)) : J("v-if", true), hn(m.$slots, "default", {}, () => [G(N(m.content), 1)])]), default: v(() => [m.$slots.reference ? hn(m.$slots, "reference", { key: 0 }) : J("v-if", true)]), _: 3 }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]));
} });
var Gu = pu(Ku, [["__file", "popover.vue"]]);
const wl = (n, e) => {
  const t = e.arg || e.value, i = t == null ? void 0 : t.popperRef;
  i && (i.triggerRef = n);
};
var Yu = { mounted(n, e) {
  wl(n, e);
}, updated(n, e) {
  wl(n, e);
} };
const Ju = "popover", Xu = mu(Yu, Ju), ph = gu(Gu, { directive: Xu });
const Qu = pe({ __name: "index", props: { target: { default: "body" }, flex: { type: Boolean, default: false }, zIndex: { default: 0 } }, emits: ["zoom"], setup(n, { emit: e }) {
  const t = n, i = e, { nextZIndex: s } = bu(), o = ee(), r = ee(false), l = ee(0), a = at(() => ({ "bg-black bg-opacity-25  overflow-y-auto content-container": r.value, "content-flex": t.flex })), h = at(() => ({ zIndex: t.zIndex ? t.zIndex : s() })), c = () => {
    r.value = !r.value, i("zoom", r.value);
  };
  return Dr(() => {
    yu(o, ([f]) => {
      l.value = f.target.scrollHeight;
    });
  }), (f, u) => (O(), z(le, null, [(O(), W(vu, { to: f.target, disabled: !r.value }, [A("div", { ref_key: "contentRef", ref: o, class: An([a.value, f.$attrs.class]), style: Oo(h.value) }, [hn(f.$slots, "default", { isopen: r.value, handler: c }, void 0, true)], 6)], 8, ["to", "disabled"])), r.value ? (O(), z("div", { key: 0, style: Oo({ height: `${l.value}px` }) }, null, 4)) : J("", true)], 64));
} });
const Zu = yt(Qu, [["__scopeId", "data-v-eb86626f"]]), ed = { class: "w-[24px] h-[24px] inline-block" }, td = ["src"], id = { class: "flex items-center gap-2" }, nd = { class: "flex-none size-6 flex items-center justify-center" }, sd = ["src"], od = { class: "flex-1 truncate" }, rd = { class: "size-6 inline-block mr-2" }, ld = ["src"], ad = pe({ __name: "index", props: { iconType: { default: "image" }, options: { default: () => [] }, filterable: { type: Boolean, default: true }, size: { default: "large" } }, emits: ["change"], setup(n, { emit: e }) {
  const t = n, i = e, { proxy: s } = Tr(), o = at(() => {
    const l = s.$attrs.modelValue;
    let a = {};
    return t.options.forEach((h = {}) => {
      h.options ? h.options.forEach((c = {}) => {
        c.value === l && (a = c);
      }) : h.value === l && (a = h);
    }), a;
  }), r = (l) => {
    Gi(() => {
      i("change", { value: l, option: o.value });
    });
  };
  return (l, a) => {
    const h = jt, c = Lu, f = Kt;
    return O(), W(f, lh(l.$attrs, { filterable: l.filterable, size: l.size, onChange: r }), wu({ default: v(() => [hn(l.$slots, "default", {}, () => [(O(true), z(le, null, gt(l.options, (u) => (O(), z(le, { key: u.value }, [u.options ? (O(), W(c, { key: 0, label: l.$t(u.label) }, { default: v(() => [(O(true), z(le, null, gt(u.options, (d) => (O(), W(h, { key: d.value, label: l.$t(d.label), value: d.value }, { default: v(() => [A("div", id, [A("div", nd, [l.iconType === "image" ? (O(), z("img", { key: 0, src: d.icon, class: "h-full inline-block object-cover" }, null, 8, sd)) : l.iconType === "icon" ? (O(), W(C(tn), { key: 1, class: "text-lg" }, { default: v(() => [(O(), W(to(d.icon)))]), _: 2 }, 1024)) : J("", true)]), A("span", od, N(l.$t(d.label)), 1), hn(l.$slots, "item_after", { data: d }, void 0, true)])]), _: 2 }, 1032, ["label", "value"]))), 128))]), _: 2 }, 1032, ["label"])) : (O(), W(h, { key: 1, label: l.$t(u.label), value: u.value }, { default: v(() => [A("div", rd, [l.iconType === "image" ? (O(), z("img", { key: 0, src: u.icon, class: "h-full inline-block object-cover" }, null, 8, ld)) : l.iconType === "icon" ? (O(), W(C(tn), { key: 1, class: "size-6 text-lg" }, { default: v(() => [(O(), W(to(u.icon)))]), _: 2 }, 1024)) : J("", true)]), A("span", null, N(l.$t(u.label)), 1)]), _: 2 }, 1032, ["label", "value"]))], 64))), 128))], true)]), _: 2 }, [o.value.icon ? { name: "prefix", fn: v(() => [A("div", ed, [l.iconType === "image" ? (O(), z("img", { key: 0, src: o.value.icon, class: "h-full inline-block object-cover" }, null, 8, td)) : l.iconType === "icon" ? (O(), W(C(tn), { key: 1, class: "text-lg" }, { default: v(() => [(O(), W(to(o.value.icon)))]), _: 1 })) : J("", true)])]), key: "0" } : void 0]), 1040, ["filterable", "size"]);
  };
} });
const Rr = yt(ad, [["__scopeId", "data-v-9fbb60a7"]]), xl = { temperature: 0.2, top_p: 0.75, presence_penalty: 0.5, frequency_penalty: 0.5 }, ci = xu("agent-form-store", { state: () => ({ saving: false, loading: false, agent_id: 0, agent_type: "prompt", form_data: { logo: "", name: "", group_id: 0, description: "", channel_type: 0, model: "", sort: 0, prompt: "", user_group_ids: [], tools: [], use_cases: [], configs: {}, custom_config: { agent_type: "prompt", coze_workspace_id: "", coze_bot_id: "", app_builder_bot_id: "", channel_config: {}, file_parse: { enable: false }, image_parse: { enable: false } } }, agent_data: {}, group_options: [], channel_options: [], subscription_options: [], model_options: [], coze_workspace_options: [], coze_bot_options: [], app_builder_bot_options: [] }), getters: { agent_option_data: (n) => {
  let e = {};
  return Iu.forEach((t) => {
    const i = t.children.find((s) => s.value == n.agent_type);
    i && (e = JSON.parse(JSON.stringify(i)));
  }), e;
}, support_file: (n) => n.agent_type !== pi, support_image: (n) => {
  var _a2, _b2;
  return n.agent_type !== pi ? true : ((_b2 = (_a2 = n.model_options.find((e) => e.model_options.some((t) => t.value === n.form_data.model))) == null ? void 0 : _a2.model_options.find((e) => e.value === n.form_data.model)) == null ? void 0 : _b2.vision) || false;
} }, actions: { async loadDetailData() {
  if (!this.agent_id)
    return Promise.resolve();
  this.loading = true;
  try {
    this.agent_data = await yl.detail({ data: { agent_id: this.agent_id } }), this.updateFormData();
  } finally {
    this.loading = false;
  }
}, updateFormData() {
  var _a2;
  this.agent_type = this.agent_data.agent_type || this.agent_type || "", Object.assign(this.form_data, { logo: this.agent_data.logo || ((_a2 = this.agent_option_data) == null ? void 0 : _a2.icon) || "", name: this.agent_data.name || "", group_id: +this.agent_data.group_id || 0, description: this.agent_data.description || "", channel_type: +this.agent_data.channel_type || 0, model: this.agent_data.model || "", sort: +this.agent_data.sort || 0, prompt: this.agent_data.prompt || "", user_group_ids: this.agent_data.user_group_ids || [], tools: this.agent_data.tools || [], use_cases: this.agent_data.use_cases || [], configs: this.agent_data.configs && Object.keys(this.agent_data.configs).length > 0 ? this.agent_data.configs : { completion_params: xl }, enable: !!+this.agent_data.enable || false, custom_config: { agent_type: this.agent_type, coze_workspace_id: "", coze_bot_id: "", app_builder_bot_id: "", channel_config: {}, file_parse: { enable: false }, image_parse: { enable: false }, ...this.agent_data.custom_config || {} } }), this.agent_type === pi && (this.form_data.model = `${this.agent_data.channel_type}_${this.agent_data.model}` || "");
}, async loadGroupOptions() {
  const n = await vl.list({ params: { group_type: Vu } });
  this.group_options = (n || []).map((e) => (e.value = +e.group_id || 0, e.label = e.group_name || "", e)), this.group_options.length && !this.form_data.group_id && (this.form_data.group_id = this.group_options[0].value), this.group_options.find((e) => e.value === this.form_data.group_id) || (this.form_data.group_id = "");
}, async loadChannelOptions() {
  const n = await yi.list();
  this.channel_options = (n || []).filter((i = {}) => [ku, _u, Su].includes(i.type));
  const e = [];
  this.model_options = this.channel_options.map((i = {}) => (i.value = String(i.channel_type || i.channel_id || ""), i.icon = window.$getRealPath({ url: `/images/platform/${i.icon}.png` }), i.options = (i.model_options || []).map((s = {}) => (s.value = `${i.value}_${s.value}`, s.icon = window.$getRealPath({ url: `/images/platform/${s.icon}.png` }), s)), e.push(...i.options), i)), e.length && !this.form_data.model && (this.form_data.model = e[0].value), [pi].includes(this.agent_type) && !e.find((i) => i.value === this.form_data.model) && (this.form_data.model = "");
  const t = this.channel_options.find((i) => i.channel_type == bl.get(this.agent_type));
  switch (this.agent_type) {
    case uh:
    case fh:
      t && t.models && t.models[0] && (this.form_data.model = t.models[0]);
      break;
  }
}, async loadSubscriptionOptions() {
  const n = await vl.list({ params: { group_type: $u } });
  this.subscription_options = (n || []).map((e) => (e.value = +e.group_id || 0, e.label = e.group_name || "", e)), !this.agent_id && this.subscription_options.length && !this.form_data.user_group_ids.length && (this.form_data.user_group_ids = this.subscription_options.map((e) => e.value));
}, async loadCozeWorkspaceOptions() {
  const n = await yi.cozeWorkspaceList();
  this.coze_workspace_options = (n || []).map((e) => (e.value = e.id || 0, e.label = e.name || "", e.icon = e.icon_url || "", e)), this.coze_workspace_options.length && !this.form_data.custom_config.coze_workspace_id && (this.form_data.custom_config.coze_workspace_id = this.coze_workspace_options[0].value), this.coze_workspace_options.find((e) => e.value === this.form_data.custom_config.coze_workspace_id) || (this.form_data.custom_config.coze_workspace_id = "");
}, async loadCozeBotOptions(n) {
  if (!n)
    return;
  const e = await yi.cozeBotList({ params: { workspace_id: n } });
  this.coze_bot_options = (e || []).map((t) => (t.value = t.bot_id || 0, t.label = t.bot_name || "", t.icon = t.icon_url || "", t)), this.coze_bot_options.length && !this.form_data.custom_config.coze_bot_id && (this.form_data.custom_config.coze_bot_id = this.coze_bot_options[0].value), this.coze_bot_options.find((t) => t.value === this.form_data.custom_config.coze_bot_id) || (this.form_data.custom_config.coze_bot_id = "");
}, async loadAppBuilderBotOptions() {
  const n = await yi.appBuilderBotList();
  this.app_builder_bot_options = (n || []).map((e) => (e.value = e.id || 0, e.value && (e.value = `bot-${e.value}`), e.label = e.name || "", e.icon = e.icon || Nu.get(Eo) || "", e)), this.app_builder_bot_options.length && !this.form_data.custom_config.app_builder_bot_id && (this.form_data.custom_config.app_builder_bot_id = this.app_builder_bot_options[0].value), this.app_builder_bot_options.find((e) => e.value === this.form_data.custom_config.app_builder_bot_id) || (this.form_data.custom_config.app_builder_bot_id = "");
}, resetState() {
  this.saving = false, this.loading = false, this.agent_id = 0, this.agent_type = "prompt", this.form_data = { logo: "", name: "", group_id: 0, description: "", channel_type: 0, model: "", sort: 0, prompt: "", user_group_ids: [], tools: [], use_cases: [], configs: { completion_params: xl }, custom_config: { agent_type: "prompt", coze_workspace_id: "", coze_bot_id: "", app_builder_bot_id: "", channel_config: {}, file_parse: { enable: false }, image_parse: { enable: false } } }, this.agent_data = {}, this.group_options = [], this.channel_options = [], this.subscription_options = [], this.model_options = [], this.coze_workspace_options = [], this.coze_bot_options = [], this.app_builder_bot_options = [];
}, async saveAgentData({ hideToast: n = false } = {}) {
  const { logo: e = "", name: t = "", group_id: i = 0, description: s = "", model: o = "", channel_type: r = 0, prompt: l = "", user_group_ids: a = [], use_cases: h = [], tools: c = [], sort: f = 0, configs: u = {}, enable: d, custom_config: p = {} } = this.form_data, g = { agent_id: this.agent_id || 0, channel_type: r, model: o, logo: e, name: t, group_id: +i || 0, description: s, sort: f, prompt: l, user_group_ids: a, use_cases: h, tools: c, configs: u, enable: d, custom_config: p };
  switch (r || (g.channel_type = bl.get(this.agent_type) || 0), this.agent_type) {
    case pi:
      g.channel_type = +o.split("_")[0] || 0, g.model = o.split("_")[1] || "";
      break;
    case dh:
      g.model = p.coze_bot_id || "";
      break;
    case Eo:
      g.model = p.app_builder_bot_id || "";
      break;
  }
  this.saving = true;
  const m = await yl.save({ data: g }).finally(() => {
    this.saving = false;
  });
  return n || xi.success(window.$t("action_save_success")), this.agent_data = m, this.agent_id = m.agent_id, this.agent_data;
} } }), hd = { class: "w-full text-sm text-[#9A9A9A]" }, cd = pe({ __name: "agent-info", setup(n) {
  const e = ci();
  return (t, i) => {
    const s = et, o = Ut, r = jt, l = Kt, a = Pr;
    return O(), z(le, null, [b(s, { label: t.$t("avatar"), prop: "logo", rules: C(Te)({ message: "form_upload_placeholder" }) }, { default: v(() => [b(Fu, { modelValue: C(e).form_data.logo, "onUpdate:modelValue": i[0] || (i[0] = (h) => C(e).form_data.logo = h), class: "w-12 h-12" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"]), b(s, { label: t.$t("name"), prop: "name", rules: C(Te)({ message: "form_input_placeholder" }) }, { default: v(() => [b(o, { modelValue: C(e).form_data.name, "onUpdate:modelValue": i[1] || (i[1] = (h) => C(e).form_data.name = h), size: "large", class: "max-w-[370px]", "show-word-limit": "", maxlength: "20", placeholder: t.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), b(s, { label: t.$t("group"), prop: "group_id", rules: C(Te)({ message: "form_select_placeholder" }) }, { default: v(() => [b(l, { modelValue: C(e).form_data.group_id, "onUpdate:modelValue": i[2] || (i[2] = (h) => C(e).form_data.group_id = h), size: "large", class: "max-w-[370px]" }, { default: v(() => [(O(true), z(le, null, gt(C(e).group_options, (h) => (O(), W(r, { key: h.value, value: h.value, label: h.label }, null, 8, ["value", "label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"]), b(s, { label: t.$t("description") }, { default: v(() => [b(o, { modelValue: C(e).form_data.description, "onUpdate:modelValue": i[3] || (i[3] = (h) => C(e).form_data.description = h), type: "textarea", rows: 6, resize: "none", "show-word-limit": "", maxlength: "200" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), b(s, { label: t.$t("action_sort"), prop: "sort", rules: C(Te)({ message: "form_input_placeholder" }) }, { default: v(() => [b(a, { modelValue: C(e).form_data.sort, "onUpdate:modelValue": i[4] || (i[4] = (h) => C(e).form_data.sort = h), class: "!w-[300px]", size: "large", controls: false, precision: 0, min: 0, max: 99999999, placeholder: t.$t("form_input_placeholder"), onKeydown: t.$numberInputKeydownHandler }, null, 8, ["modelValue", "placeholder", "onKeydown"]), A("div", hd, N(t.$t("module.agent_sort_desc")), 1)]), _: 1 }, 8, ["label", "rules"])], 64);
  };
} });
const Gt = yt(cd, [["__scopeId", "data-v-5ed0e72e"]]), fd = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-4" }, ud = { key: 0, class: "flex items-center gap-2" }, dd = { class: "flex-1" }, pd = { class: "text-sm text-[#1D1E1F]" }, md = { class: "flex-none text-sm text-[#1D1E1F]" }, gd = { key: 1, class: "flex items-center gap-2 mt-4" }, bd = { class: "flex-1" }, yd = { class: "text-sm text-[#1D1E1F]" }, vd = { class: "flex-none text-sm text-[#1D1E1F]" }, Vi = pe({ __name: "expand-config", setup(n) {
  const e = ci();
  return (t, i) => {
    const s = Ni;
    return C(e).support_file || C(e).support_image ? (O(), z(le, { key: 0 }, [A("div", fd, N(t.$t("expand_setting")), 1), C(e).support_file ? (O(), z("div", ud, [A("div", dd, [A("div", pd, N(t.$t("agent_file_parse")), 1)]), A("div", md, [G(N(C(e).form_data.custom_config.file_parse.enable ? t.$t("action_open") : t.$t("action_close")) + " ", 1), b(s, { modelValue: C(e).form_data.custom_config.file_parse.enable, "onUpdate:modelValue": i[0] || (i[0] = (o) => C(e).form_data.custom_config.file_parse.enable = o) }, null, 8, ["modelValue"])])])) : J("", true), C(e).support_image ? (O(), z("div", gd, [A("div", bd, [A("div", yd, N(t.$t("agent_image_parse")), 1)]), A("div", vd, [G(N(C(e).form_data.custom_config.image_parse.enable ? t.$t("action_open") : t.$t("action_close")) + " ", 1), b(s, { modelValue: C(e).form_data.custom_config.image_parse.enable, "onUpdate:modelValue": i[1] || (i[1] = (o) => C(e).form_data.custom_config.image_parse.enable = o) }, null, 8, ["modelValue"])])])) : J("", true)], 64)) : J("", true);
  };
} });
let Bo = [], mh = [];
(() => {
  let n = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((e) => e ? parseInt(e, 36) : 1);
  for (let e = 0, t = 0; e < n.length; e++)
    (e % 2 ? mh : Bo).push(t = t + n[e]);
})();
function wd(n) {
  if (n < 768)
    return false;
  for (let e = 0, t = Bo.length; ; ) {
    let i = e + t >> 1;
    if (n < Bo[i])
      t = i;
    else if (n >= mh[i])
      e = i + 1;
    else
      return true;
    if (e == t)
      return false;
  }
}
function kl(n) {
  return n >= 127462 && n <= 127487;
}
const _l = 8205;
function xd(n, e, t = true, i = true) {
  return (t ? gh : kd)(n, e, i);
}
function gh(n, e, t) {
  if (e == n.length)
    return e;
  e && bh(n.charCodeAt(e)) && yh(n.charCodeAt(e - 1)) && e--;
  let i = so(n, e);
  for (e += Sl(i); e < n.length; ) {
    let s = so(n, e);
    if (i == _l || s == _l || t && wd(s))
      e += Sl(s), i = s;
    else if (kl(s)) {
      let o = 0, r = e - 2;
      for (; r >= 0 && kl(so(n, r)); )
        o++, r -= 2;
      if (o % 2 == 0)
        break;
      e += 2;
    } else
      break;
  }
  return e;
}
function kd(n, e, t) {
  for (; e > 0; ) {
    let i = gh(n, e - 2, t);
    if (i < e)
      return i;
    e--;
  }
  return 0;
}
function so(n, e) {
  let t = n.charCodeAt(e);
  if (!yh(t) || e + 1 == n.length)
    return t;
  let i = n.charCodeAt(e + 1);
  return bh(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function bh(n) {
  return n >= 56320 && n < 57344;
}
function yh(n) {
  return n >= 55296 && n < 56320;
}
function Sl(n) {
  return n < 65536 ? 1 : 2;
}
class Q {
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, false, 1, 0);
  }
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, true, 1, 0);
  }
  replace(e, t, i) {
    [e, t] = Mi(this, e, t);
    let s = [];
    return this.decompose(0, e, s, 2), i.length && i.decompose(0, i.length, s, 3), this.decompose(t, this.length, s, 1), ht.from(s, this.length - (t - e) + i.length);
  }
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  slice(e, t = this.length) {
    [e, t] = Mi(this, e, t);
    let i = [];
    return this.decompose(e, t, i, 0), ht.from(i, t - e);
  }
  eq(e) {
    if (e == this)
      return true;
    if (e.length != this.length || e.lines != this.lines)
      return false;
    let t = this.scanIdentical(e, 1), i = this.length - this.scanIdentical(e, -1), s = new nn(this), o = new nn(e);
    for (let r = t, l = t; ; ) {
      if (s.next(r), o.next(r), r = 0, s.lineBreak != o.lineBreak || s.done != o.done || s.value != o.value)
        return false;
      if (l += s.value.length, s.done || l >= i)
        return true;
    }
  }
  iter(e = 1) {
    return new nn(this, e);
  }
  iterRange(e, t = this.length) {
    return new vh(this, e, t);
  }
  iterLines(e, t) {
    let i;
    if (e == null)
      i = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let s = this.line(e).from;
      i = this.iterRange(s, Math.max(s, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
    }
    return new wh(i);
  }
  toString() {
    return this.sliceString(0);
  }
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  constructor() {
  }
  static of(e) {
    if (e.length == 0)
      throw new RangeError("A document must have at least one line");
    return e.length == 1 && !e[0] ? Q.empty : e.length <= 32 ? new ce(e) : ht.from(ce.split(e, []));
  }
}
class ce extends Q {
  constructor(e, t = _d(e)) {
    super(), this.text = e, this.length = t;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, i, s) {
    for (let o = 0; ; o++) {
      let r = this.text[o], l = s + r.length;
      if ((t ? i : l) >= e)
        return new Sd(s, l, i, r);
      s = l + 1, i++;
    }
  }
  decompose(e, t, i, s) {
    let o = e <= 0 && t >= this.length ? this : new ce(Cl(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (s & 1) {
      let r = i.pop(), l = hs(o.text, r.text.slice(), 0, o.length);
      if (l.length <= 32)
        i.push(new ce(l, r.length + o.length));
      else {
        let a = l.length >> 1;
        i.push(new ce(l.slice(0, a)), new ce(l.slice(a)));
      }
    } else
      i.push(o);
  }
  replace(e, t, i) {
    if (!(i instanceof ce))
      return super.replace(e, t, i);
    [e, t] = Mi(this, e, t);
    let s = hs(this.text, hs(i.text, Cl(this.text, 0, e)), t), o = this.length + i.length - (t - e);
    return s.length <= 32 ? new ce(s, o) : ht.from(ce.split(s, []), o);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Mi(this, e, t);
    let s = "";
    for (let o = 0, r = 0; o <= t && r < this.text.length; r++) {
      let l = this.text[r], a = o + l.length;
      o > e && r && (s += i), e < a && t > o && (s += l.slice(Math.max(0, e - o), t - o)), o = a + 1;
    }
    return s;
  }
  flatten(e) {
    for (let t of this.text)
      e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let i = [], s = -1;
    for (let o of e)
      i.push(o), s += o.length + 1, i.length == 32 && (t.push(new ce(i, s)), i = [], s = -1);
    return s > -1 && t.push(new ce(i, s)), t;
  }
}
class ht extends Q {
  constructor(e, t) {
    super(), this.children = e, this.length = t, this.lines = 0;
    for (let i of e)
      this.lines += i.lines;
  }
  lineInner(e, t, i, s) {
    for (let o = 0; ; o++) {
      let r = this.children[o], l = s + r.length, a = i + r.lines - 1;
      if ((t ? a : l) >= e)
        return r.lineInner(e, t, i, s);
      s = l + 1, i = a + 1;
    }
  }
  decompose(e, t, i, s) {
    for (let o = 0, r = 0; r <= t && o < this.children.length; o++) {
      let l = this.children[o], a = r + l.length;
      if (e <= a && t >= r) {
        let h = s & ((r <= e ? 1 : 0) | (a >= t ? 2 : 0));
        r >= e && a <= t && !h ? i.push(l) : l.decompose(e - r, t - r, i, h);
      }
      r = a + 1;
    }
  }
  replace(e, t, i) {
    if ([e, t] = Mi(this, e, t), i.lines < this.lines)
      for (let s = 0, o = 0; s < this.children.length; s++) {
        let r = this.children[s], l = o + r.length;
        if (e >= o && t <= l) {
          let a = r.replace(e - o, t - o, i), h = this.lines - r.lines + a.lines;
          if (a.lines < h >> 5 - 1 && a.lines > h >> 5 + 1) {
            let c = this.children.slice();
            return c[s] = a, new ht(c, this.length - (t - e) + i.length);
          }
          return super.replace(o, l, a);
        }
        o = l + 1;
      }
    return super.replace(e, t, i);
  }
  sliceString(e, t = this.length, i = `
`) {
    [e, t] = Mi(this, e, t);
    let s = "";
    for (let o = 0, r = 0; o < this.children.length && r <= t; o++) {
      let l = this.children[o], a = r + l.length;
      r > e && o && (s += i), e < a && t > r && (s += l.sliceString(e - r, t - r, i)), r = a + 1;
    }
    return s;
  }
  flatten(e) {
    for (let t of this.children)
      t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof ht))
      return 0;
    let i = 0, [s, o, r, l] = t > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; s += t, o += t) {
      if (s == r || o == l)
        return i;
      let a = this.children[s], h = e.children[o];
      if (a != h)
        return i + a.scanIdentical(h, t);
      i += a.length + 1;
    }
  }
  static from(e, t = e.reduce((i, s) => i + s.length + 1, -1)) {
    let i = 0;
    for (let d of e)
      i += d.lines;
    if (i < 32) {
      let d = [];
      for (let p of e)
        p.flatten(d);
      return new ce(d, t);
    }
    let s = Math.max(32, i >> 5), o = s << 1, r = s >> 1, l = [], a = 0, h = -1, c = [];
    function f(d) {
      let p;
      if (d.lines > o && d instanceof ht)
        for (let g of d.children)
          f(g);
      else
        d.lines > r && (a > r || !a) ? (u(), l.push(d)) : d instanceof ce && a && (p = c[c.length - 1]) instanceof ce && d.lines + p.lines <= 32 ? (a += d.lines, h += d.length + 1, c[c.length - 1] = new ce(p.text.concat(d.text), p.length + 1 + d.length)) : (a + d.lines > s && u(), a += d.lines, h += d.length + 1, c.push(d));
    }
    function u() {
      a != 0 && (l.push(c.length == 1 ? c[0] : ht.from(c, h)), h = -1, a = c.length = 0);
    }
    for (let d of e)
      f(d);
    return u(), l.length == 1 ? l[0] : new ht(l, t);
  }
}
Q.empty = new ce([""], 0);
function _d(n) {
  let e = -1;
  for (let t of n)
    e += t.length + 1;
  return e;
}
function hs(n, e, t = 0, i = 1e9) {
  for (let s = 0, o = 0, r = true; o < n.length && s <= i; o++) {
    let l = n[o], a = s + l.length;
    a >= t && (a > i && (l = l.slice(0, i - s)), s < t && (l = l.slice(t - s)), r ? (e[e.length - 1] += l, r = false) : e.push(l)), s = a + 1;
  }
  return e;
}
function Cl(n, e, t) {
  return hs(n, [""], e, t);
}
class nn {
  constructor(e, t = 1) {
    this.dir = t, this.done = false, this.lineBreak = false, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof ce ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = false; ; ) {
      let i = this.nodes.length - 1, s = this.nodes[i], o = this.offsets[i], r = o >> 1, l = s instanceof ce ? s.text.length : s.children.length;
      if (r == (t > 0 ? l : 0)) {
        if (i == 0)
          return this.done = true, this.value = "", this;
        t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((o & 1) == (t > 0 ? 0 : 1)) {
        if (this.offsets[i] += t, e == 0)
          return this.lineBreak = true, this.value = `
`, this;
        e--;
      } else if (s instanceof ce) {
        let a = s.text[r + (t < 0 ? -1 : 0)];
        if (this.offsets[i] += t, a.length > Math.max(0, e))
          return this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = s.children[r + (t < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[i] += t) : (t < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(t > 0 ? 1 : (a instanceof ce ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class vh {
  constructor(e, t, i) {
    this.value = "", this.done = false, this.cursor = new nn(e, t > i ? -1 : 1), this.pos = t > i ? e.length : 0, this.from = Math.min(t, i), this.to = Math.max(t, i);
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = true, this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let i = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > i && (e = i), i -= e;
    let { value: s } = this.cursor.next(e);
    return this.pos += (s.length + e) * t, this.value = s.length <= i ? s : t < 0 ? s.slice(s.length - i) : s.slice(0, i), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class wh {
  constructor(e) {
    this.inner = e, this.afterBreak = true, this.value = "", this.done = false;
  }
  next(e = 0) {
    let { done: t, lineBreak: i, value: s } = this.inner.next(e);
    return t && this.afterBreak ? (this.value = "", this.afterBreak = false) : t ? (this.done = true, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = true, this.next()) : (this.value = s, this.afterBreak = false), this;
  }
  get lineBreak() {
    return false;
  }
}
typeof Symbol < "u" && (Q.prototype[Symbol.iterator] = function() {
  return this.iter();
}, nn.prototype[Symbol.iterator] = vh.prototype[Symbol.iterator] = wh.prototype[Symbol.iterator] = function() {
  return this;
});
class Sd {
  constructor(e, t, i, s) {
    this.from = e, this.to = t, this.number = i, this.text = s;
  }
  get length() {
    return this.to - this.from;
  }
}
function Mi(n, e, t) {
  return e = Math.max(0, Math.min(n.length, e)), [e, Math.max(e, Math.min(n.length, t))];
}
function xe(n, e, t = true, i = true) {
  return xd(n, e, t, i);
}
function Cd(n) {
  return n >= 56320 && n < 57344;
}
function Ad(n) {
  return n >= 55296 && n < 56320;
}
function Be(n, e) {
  let t = n.charCodeAt(e);
  if (!Ad(t) || e + 1 == n.length)
    return t;
  let i = n.charCodeAt(e + 1);
  return Cd(i) ? (t - 55296 << 10) + (i - 56320) + 65536 : t;
}
function Lr(n) {
  return n <= 65535 ? String.fromCharCode(n) : (n -= 65536, String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320));
}
function ct(n) {
  return n < 65536 ? 1 : 2;
}
const Po = /\r\n?|\n/;
var De = function(n) {
  return n[n.Simple = 0] = "Simple", n[n.TrackDel = 1] = "TrackDel", n[n.TrackBefore = 2] = "TrackBefore", n[n.TrackAfter = 3] = "TrackAfter", n;
}(De || (De = {}));
class mt {
  constructor(e) {
    this.sections = e;
  }
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2)
      e += this.sections[t];
    return e;
  }
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t + 1];
      e += i < 0 ? this.sections[t] : i;
    }
    return e;
  }
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  iterGaps(e) {
    for (let t = 0, i = 0, s = 0; t < this.sections.length; ) {
      let o = this.sections[t++], r = this.sections[t++];
      r < 0 ? (e(i, s, o), s += o) : s += r, i += o;
    }
  }
  iterChangedRanges(e, t = false) {
    Ro(this, e, t);
  }
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], s = this.sections[t++];
      s < 0 ? e.push(i, s) : e.push(s, i);
    }
    return new mt(e);
  }
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : xh(this, e);
  }
  mapDesc(e, t = false) {
    return e.empty ? this : Lo(this, e, t);
  }
  mapPos(e, t = -1, i = De.Simple) {
    let s = 0, o = 0;
    for (let r = 0; r < this.sections.length; ) {
      let l = this.sections[r++], a = this.sections[r++], h = s + l;
      if (a < 0) {
        if (h > e)
          return o + (e - s);
        o += l;
      } else {
        if (i != De.Simple && h >= e && (i == De.TrackDel && s < e && h > e || i == De.TrackBefore && s < e || i == De.TrackAfter && h > e))
          return null;
        if (h > e || h == e && t < 0 && !l)
          return e == s || t < 0 ? o : o + a;
        o += a;
      }
      s = h;
    }
    if (e > s)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${s}`);
    return o;
  }
  touchesRange(e, t = e) {
    for (let i = 0, s = 0; i < this.sections.length && s <= t; ) {
      let o = this.sections[i++], r = this.sections[i++], l = s + o;
      if (r >= 0 && s <= t && l >= e)
        return s < e && l > t ? "cover" : true;
      s = l;
    }
    return false;
  }
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++], s = this.sections[t++];
      e += (e ? " " : "") + i + (s >= 0 ? ":" + s : "");
    }
    return e;
  }
  toJSON() {
    return this.sections;
  }
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new mt(e);
  }
  static create(e) {
    return new mt(e);
  }
}
class ue extends mt {
  constructor(e, t) {
    super(e), this.inserted = t;
  }
  apply(e) {
    if (this.length != e.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return Ro(this, (t, i, s, o, r) => e = e.replace(s, s + (i - t), r), false), e;
  }
  mapDesc(e, t = false) {
    return Lo(this, e, t, true);
  }
  invert(e) {
    let t = this.sections.slice(), i = [];
    for (let s = 0, o = 0; s < t.length; s += 2) {
      let r = t[s], l = t[s + 1];
      if (l >= 0) {
        t[s] = l, t[s + 1] = r;
        let a = s >> 1;
        for (; i.length < a; )
          i.push(Q.empty);
        i.push(r ? e.slice(o, o + r) : Q.empty);
      }
      o += r;
    }
    return new ue(t, i);
  }
  compose(e) {
    return this.empty ? e : e.empty ? this : xh(this, e, true);
  }
  map(e, t = false) {
    return e.empty ? this : Lo(this, e, t, true);
  }
  iterChanges(e, t = false) {
    Ro(this, e, t);
  }
  get desc() {
    return mt.create(this.sections);
  }
  filter(e) {
    let t = [], i = [], s = [], o = new fn(this);
    e:
      for (let r = 0, l = 0; ; ) {
        let a = r == e.length ? 1e9 : e[r++];
        for (; l < a || l == a && o.len == 0; ) {
          if (o.done)
            break e;
          let c = Math.min(o.len, a - l);
          ke(s, c, -1);
          let f = o.ins == -1 ? -1 : o.off == 0 ? o.ins : 0;
          ke(t, c, f), f > 0 && Lt(i, t, o.text), o.forward(c), l += c;
        }
        let h = e[r++];
        for (; l < h; ) {
          if (o.done)
            break e;
          let c = Math.min(o.len, h - l);
          ke(t, c, -1), ke(s, c, o.ins == -1 ? -1 : o.off == 0 ? o.ins : 0), o.forward(c), l += c;
        }
      }
    return { changes: new ue(t, i), filtered: mt.create(s) };
  }
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t], s = this.sections[t + 1];
      s < 0 ? e.push(i) : s == 0 ? e.push([i]) : e.push([i].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  static of(e, t, i) {
    let s = [], o = [], r = 0, l = null;
    function a(c = false) {
      if (!c && !s.length)
        return;
      r < t && ke(s, t - r, -1);
      let f = new ue(s, o);
      l = l ? l.compose(f.map(l)) : f, s = [], o = [], r = 0;
    }
    function h(c) {
      if (Array.isArray(c))
        for (let f of c)
          h(f);
      else if (c instanceof ue) {
        if (c.length != t)
          throw new RangeError(`Mismatched change set length (got ${c.length}, expected ${t})`);
        a(), l = l ? l.compose(c.map(l)) : c;
      } else {
        let { from: f, to: u = f, insert: d } = c;
        if (f > u || f < 0 || u > t)
          throw new RangeError(`Invalid change range ${f} to ${u} (in doc of length ${t})`);
        let p = d ? typeof d == "string" ? Q.of(d.split(i || Po)) : d : Q.empty, g = p.length;
        if (f == u && g == 0)
          return;
        f < r && a(), f > r && ke(s, f - r, -1), ke(s, u - f, g), Lt(o, s, p), r = u;
      }
    }
    return h(e), a(!l), l;
  }
  static empty(e) {
    return new ue(e ? [e, -1] : [], []);
  }
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let t = [], i = [];
    for (let s = 0; s < e.length; s++) {
      let o = e[s];
      if (typeof o == "number")
        t.push(o, -1);
      else {
        if (!Array.isArray(o) || typeof o[0] != "number" || o.some((r, l) => l && typeof r != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (o.length == 1)
          t.push(o[0], 0);
        else {
          for (; i.length < s; )
            i.push(Q.empty);
          i[s] = Q.of(o.slice(1)), t.push(o[0], i[s].length);
        }
      }
    }
    return new ue(t, i);
  }
  static createSet(e, t) {
    return new ue(e, t);
  }
}
function ke(n, e, t, i = false) {
  if (e == 0 && t <= 0)
    return;
  let s = n.length - 2;
  s >= 0 && t <= 0 && t == n[s + 1] ? n[s] += e : s >= 0 && e == 0 && n[s] == 0 ? n[s + 1] += t : i ? (n[s] += e, n[s + 1] += t) : n.push(e, t);
}
function Lt(n, e, t) {
  if (t.length == 0)
    return;
  let i = e.length - 2 >> 1;
  if (i < n.length)
    n[n.length - 1] = n[n.length - 1].append(t);
  else {
    for (; n.length < i; )
      n.push(Q.empty);
    n.push(t);
  }
}
function Ro(n, e, t) {
  let i = n.inserted;
  for (let s = 0, o = 0, r = 0; r < n.sections.length; ) {
    let l = n.sections[r++], a = n.sections[r++];
    if (a < 0)
      s += l, o += l;
    else {
      let h = s, c = o, f = Q.empty;
      for (; h += l, c += a, a && i && (f = f.append(i[r - 2 >> 1])), !(t || r == n.sections.length || n.sections[r + 1] < 0); )
        l = n.sections[r++], a = n.sections[r++];
      e(s, h, o, c, f), s = h, o = c;
    }
  }
}
function Lo(n, e, t, i = false) {
  let s = [], o = i ? [] : null, r = new fn(n), l = new fn(e);
  for (let a = -1; ; ) {
    if (r.done && l.len || l.done && r.len)
      throw new Error("Mismatched change set lengths");
    if (r.ins == -1 && l.ins == -1) {
      let h = Math.min(r.len, l.len);
      ke(s, h, -1), r.forward(h), l.forward(h);
    } else if (l.ins >= 0 && (r.ins < 0 || a == r.i || r.off == 0 && (l.len < r.len || l.len == r.len && !t))) {
      let h = l.len;
      for (ke(s, l.ins, -1); h; ) {
        let c = Math.min(r.len, h);
        r.ins >= 0 && a < r.i && r.len <= c && (ke(s, 0, r.ins), o && Lt(o, s, r.text), a = r.i), r.forward(c), h -= c;
      }
      l.next();
    } else if (r.ins >= 0) {
      let h = 0, c = r.len;
      for (; c; )
        if (l.ins == -1) {
          let f = Math.min(c, l.len);
          h += f, c -= f, l.forward(f);
        } else if (l.ins == 0 && l.len < c)
          c -= l.len, l.next();
        else
          break;
      ke(s, h, a < r.i ? r.ins : 0), o && a < r.i && Lt(o, s, r.text), a = r.i, r.forward(r.len - c);
    } else {
      if (r.done && l.done)
        return o ? ue.createSet(s, o) : mt.create(s);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function xh(n, e, t = false) {
  let i = [], s = t ? [] : null, o = new fn(n), r = new fn(e);
  for (let l = false; ; ) {
    if (o.done && r.done)
      return s ? ue.createSet(i, s) : mt.create(i);
    if (o.ins == 0)
      ke(i, o.len, 0, l), o.next();
    else if (r.len == 0 && !r.done)
      ke(i, 0, r.ins, l), s && Lt(s, i, r.text), r.next();
    else {
      if (o.done || r.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(o.len2, r.len), h = i.length;
        if (o.ins == -1) {
          let c = r.ins == -1 ? -1 : r.off ? 0 : r.ins;
          ke(i, a, c, l), s && c && Lt(s, i, r.text);
        } else
          r.ins == -1 ? (ke(i, o.off ? 0 : o.len, a, l), s && Lt(s, i, o.textBit(a))) : (ke(i, o.off ? 0 : o.len, r.off ? 0 : r.ins, l), s && !r.off && Lt(s, i, r.text));
        l = (o.ins > a || r.ins >= 0 && r.len > a) && (l || i.length > h), o.forward2(a), r.forward(a);
      }
    }
  }
}
class fn {
  constructor(e) {
    this.set = e, this.i = 0, this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set, t = this.i - 2 >> 1;
    return t >= e.length ? Q.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set, i = this.i - 2 >> 1;
    return i >= t.length && !e ? Q.empty : t[i].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class ti {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.flags = i;
  }
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  get empty() {
    return this.from == this.to;
  }
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  get bidiLevel() {
    let e = this.flags & 7;
    return e == 7 ? null : e;
  }
  get goalColumn() {
    let e = this.flags >> 6;
    return e == 16777215 ? void 0 : e;
  }
  map(e, t = -1) {
    let i, s;
    return this.empty ? i = s = e.mapPos(this.from, t) : (i = e.mapPos(this.from, 1), s = e.mapPos(this.to, -1)), i == this.from && s == this.to ? this : new ti(i, s, this.flags);
  }
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor)
      return k.range(e, t);
    let i = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return k.range(this.anchor, i);
  }
  eq(e, t = false) {
    return this.anchor == e.anchor && this.head == e.head && (!t || !this.empty || this.assoc == e.assoc);
  }
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return k.range(e.anchor, e.head);
  }
  static create(e, t, i) {
    return new ti(e, t, i);
  }
}
class k {
  constructor(e, t) {
    this.ranges = e, this.mainIndex = t;
  }
  map(e, t = -1) {
    return e.empty ? this : k.create(this.ranges.map((i) => i.map(e, t)), this.mainIndex);
  }
  eq(e, t = false) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
      return false;
    for (let i = 0; i < this.ranges.length; i++)
      if (!this.ranges[i].eq(e.ranges[i], t))
        return false;
    return true;
  }
  get main() {
    return this.ranges[this.mainIndex];
  }
  asSingle() {
    return this.ranges.length == 1 ? this : new k([this.main], 0);
  }
  addRange(e, t = true) {
    return k.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  replaceRange(e, t = this.mainIndex) {
    let i = this.ranges.slice();
    return i[t] = e, k.create(i, this.mainIndex);
  }
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new k(e.ranges.map((t) => ti.fromJSON(t)), e.main);
  }
  static single(e, t = e) {
    return new k([k.range(e, t)], 0);
  }
  static create(e, t = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let i = 0, s = 0; s < e.length; s++) {
      let o = e[s];
      if (o.empty ? o.from <= i : o.from < i)
        return k.normalized(e.slice(), t);
      i = o.to;
    }
    return new k(e, t);
  }
  static cursor(e, t = 0, i, s) {
    return ti.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (s ?? 16777215) << 6);
  }
  static range(e, t, i, s) {
    let o = (i ?? 16777215) << 6 | (s == null ? 7 : Math.min(6, s));
    return t < e ? ti.create(t, e, 48 | o) : ti.create(e, t, (t > e ? 8 : 0) | o);
  }
  static normalized(e, t = 0) {
    let i = e[t];
    e.sort((s, o) => s.from - o.from), t = e.indexOf(i);
    for (let s = 1; s < e.length; s++) {
      let o = e[s], r = e[s - 1];
      if (o.empty ? o.from <= r.to : o.from < r.to) {
        let l = r.from, a = Math.max(o.to, r.to);
        s <= t && t--, e.splice(--s, 2, o.anchor > o.head ? k.range(a, l) : k.range(l, a));
      }
    }
    return new k(e, t);
  }
}
function kh(n, e) {
  for (let t of n.ranges)
    if (t.to > e)
      throw new RangeError("Selection points outside of document");
}
let Ir = 0;
class $ {
  constructor(e, t, i, s, o) {
    this.combine = e, this.compareInput = t, this.compare = i, this.isStatic = s, this.id = Ir++, this.default = e([]), this.extensions = typeof o == "function" ? o(this) : o;
  }
  get reader() {
    return this;
  }
  static define(e = {}) {
    return new $(e.combine || ((t) => t), e.compareInput || ((t, i) => t === i), e.compare || (e.combine ? (t, i) => t === i : Nr), !!e.static, e.enables);
  }
  of(e) {
    return new cs([], this, 0, e);
  }
  compute(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new cs(e, this, 1, t);
  }
  computeN(e, t) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new cs(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (i) => i), this.compute([e], (i) => t(i.field(e)));
  }
}
function Nr(n, e) {
  return n == e || n.length == e.length && n.every((t, i) => t === e[i]);
}
class cs {
  constructor(e, t, i, s) {
    this.dependencies = e, this.facet = t, this.type = i, this.value = s, this.id = Ir++;
  }
  dynamicSlot(e) {
    var t;
    let i = this.value, s = this.facet.compareInput, o = this.id, r = e[o] >> 1, l = this.type == 2, a = false, h = false, c = [];
    for (let f of this.dependencies)
      f == "doc" ? a = true : f == "selection" ? h = true : ((t = e[f.id]) !== null && t !== void 0 ? t : 1) & 1 || c.push(e[f.id]);
    return { create(f) {
      return f.values[r] = i(f), 1;
    }, update(f, u) {
      if (a && u.docChanged || h && (u.docChanged || u.selection) || Io(f, c)) {
        let d = i(f);
        if (l ? !Al(d, f.values[r], s) : !s(d, f.values[r]))
          return f.values[r] = d, 1;
      }
      return 0;
    }, reconfigure: (f, u) => {
      let d, p = u.config.address[o];
      if (p != null) {
        let g = ws(u, p);
        if (this.dependencies.every((m) => m instanceof $ ? u.facet(m) === f.facet(m) : m instanceof ge ? u.field(m, false) == f.field(m, false) : true) || (l ? Al(d = i(f), g, s) : s(d = i(f), g)))
          return f.values[r] = g, 0;
      } else
        d = i(f);
      return f.values[r] = d, 1;
    } };
  }
}
function Al(n, e, t) {
  if (n.length != e.length)
    return false;
  for (let i = 0; i < n.length; i++)
    if (!t(n[i], e[i]))
      return false;
  return true;
}
function Io(n, e) {
  let t = false;
  for (let i of e)
    sn(n, i) & 1 && (t = true);
  return t;
}
function Md(n, e, t) {
  let i = t.map((a) => n[a.id]), s = t.map((a) => a.type), o = i.filter((a) => !(a & 1)), r = n[e.id] >> 1;
  function l(a) {
    let h = [];
    for (let c = 0; c < i.length; c++) {
      let f = ws(a, i[c]);
      if (s[c] == 2)
        for (let u of f)
          h.push(u);
      else
        h.push(f);
    }
    return e.combine(h);
  }
  return { create(a) {
    for (let h of i)
      sn(a, h);
    return a.values[r] = l(a), 1;
  }, update(a, h) {
    if (!Io(a, o))
      return 0;
    let c = l(a);
    return e.compare(c, a.values[r]) ? 0 : (a.values[r] = c, 1);
  }, reconfigure(a, h) {
    let c = Io(a, i), f = h.config.facets[e.id], u = h.facet(e);
    if (f && !c && Nr(t, f))
      return a.values[r] = u, 0;
    let d = l(a);
    return e.compare(d, u) ? (a.values[r] = u, 0) : (a.values[r] = d, 1);
  } };
}
const $n = $.define({ static: true });
class ge {
  constructor(e, t, i, s, o) {
    this.id = e, this.createF = t, this.updateF = i, this.compareF = s, this.spec = o, this.provides = void 0;
  }
  static define(e) {
    let t = new ge(Ir++, e.create, e.update, e.compare || ((i, s) => i === s), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet($n).find((i) => i.field == this);
    return ((t == null ? void 0 : t.create) || this.createF)(e);
  }
  slot(e) {
    let t = e[this.id] >> 1;
    return { create: (i) => (i.values[t] = this.create(i), 1), update: (i, s) => {
      let o = i.values[t], r = this.updateF(o, s);
      return this.compareF(o, r) ? 0 : (i.values[t] = r, 1);
    }, reconfigure: (i, s) => {
      let o = i.facet($n), r = s.facet($n), l;
      return (l = o.find((a) => a.field == this)) && l != r.find((a) => a.field == this) ? (i.values[t] = l.create(i), 1) : s.config.address[this.id] != null ? (i.values[t] = s.field(this), 0) : (i.values[t] = this.create(i), 1);
    } };
  }
  init(e) {
    return [this, $n.of({ field: this, create: e })];
  }
  get extension() {
    return this;
  }
}
const Qt = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function Hi(n) {
  return (e) => new _h(e, n);
}
const fi = { highest: Hi(Qt.highest), high: Hi(Qt.high), default: Hi(Qt.default), low: Hi(Qt.low), lowest: Hi(Qt.lowest) };
class _h {
  constructor(e, t) {
    this.inner = e, this.prec = t;
  }
}
class Tn {
  of(e) {
    return new No(this, e);
  }
  reconfigure(e) {
    return Tn.reconfigure.of({ compartment: this, extension: e });
  }
  get(e) {
    return e.config.compartments.get(this);
  }
}
class No {
  constructor(e, t) {
    this.compartment = e, this.inner = t;
  }
}
class vs {
  constructor(e, t, i, s, o, r) {
    for (this.base = e, this.compartments = t, this.dynamicSlots = i, this.address = s, this.staticValues = o, this.facets = r, this.statusTemplate = []; this.statusTemplate.length < i.length; )
      this.statusTemplate.push(0);
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, i) {
    let s = [], o = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ new Map();
    for (let u of Dd(e, t, r))
      u instanceof ge ? s.push(u) : (o[u.facet.id] || (o[u.facet.id] = [])).push(u);
    let l = /* @__PURE__ */ Object.create(null), a = [], h = [];
    for (let u of s)
      l[u.id] = h.length << 1, h.push((d) => u.slot(d));
    let c = i == null ? void 0 : i.config.facets;
    for (let u in o) {
      let d = o[u], p = d[0].facet, g = c && c[u] || [];
      if (d.every((m) => m.type == 0))
        if (l[p.id] = a.length << 1 | 1, Nr(g, d))
          a.push(i.facet(p));
        else {
          let m = p.combine(d.map((y) => y.value));
          a.push(i && p.compare(m, i.facet(p)) ? i.facet(p) : m);
        }
      else {
        for (let m of d)
          m.type == 0 ? (l[m.id] = a.length << 1 | 1, a.push(m.value)) : (l[m.id] = h.length << 1, h.push((y) => m.dynamicSlot(y)));
        l[p.id] = h.length << 1, h.push((m) => Md(m, p, d));
      }
    }
    let f = h.map((u) => u(l));
    return new vs(e, r, f, l, a, o);
  }
}
function Dd(n, e, t) {
  let i = [[], [], [], [], []], s = /* @__PURE__ */ new Map();
  function o(r, l) {
    let a = s.get(r);
    if (a != null) {
      if (a <= l)
        return;
      let h = i[a].indexOf(r);
      h > -1 && i[a].splice(h, 1), r instanceof No && t.delete(r.compartment);
    }
    if (s.set(r, l), Array.isArray(r))
      for (let h of r)
        o(h, l);
    else if (r instanceof No) {
      if (t.has(r.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let h = e.get(r.compartment) || r.inner;
      t.set(r.compartment, h), o(h, l);
    } else if (r instanceof _h)
      o(r.inner, r.prec);
    else if (r instanceof ge)
      i[l].push(r), r.provides && o(r.provides, l);
    else if (r instanceof cs)
      i[l].push(r), r.facet.extensions && o(r.facet.extensions, Qt.default);
    else {
      let h = r.extension;
      if (!h)
        throw new Error(`Unrecognized extension value in extension set (${r}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      o(h, l);
    }
  }
  return o(n, Qt.default), i.reduce((r, l) => r.concat(l));
}
function sn(n, e) {
  if (e & 1)
    return 2;
  let t = e >> 1, i = n.status[t];
  if (i == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2)
    return i;
  n.status[t] = 4;
  let s = n.computeSlot(n, n.config.dynamicSlots[t]);
  return n.status[t] = 2 | s;
}
function ws(n, e) {
  return e & 1 ? n.config.staticValues[e >> 1] : n.values[e >> 1];
}
const Sh = $.define(), Vo = $.define({ combine: (n) => n.some((e) => e), static: true }), Ch = $.define({ combine: (n) => n.length ? n[0] : void 0, static: true }), Ah = $.define(), Mh = $.define(), Dh = $.define(), Th = $.define({ combine: (n) => n.length ? n[0] : false });
class Tt {
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  static define() {
    return new Td();
  }
}
class Td {
  of(e) {
    return new Tt(this, e);
  }
}
class Od {
  constructor(e) {
    this.map = e;
  }
  of(e) {
    return new H(this, e);
  }
}
class H {
  constructor(e, t) {
    this.type = e, this.value = t;
  }
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0 ? void 0 : t == this.value ? this : new H(this.type, t);
  }
  is(e) {
    return this.type == e;
  }
  static define(e = {}) {
    return new Od(e.map || ((t) => t));
  }
  static mapEffects(e, t) {
    if (!e.length)
      return e;
    let i = [];
    for (let s of e) {
      let o = s.map(t);
      o && i.push(o);
    }
    return i;
  }
}
H.reconfigure = H.define();
H.appendConfig = H.define();
class de {
  constructor(e, t, i, s, o, r) {
    this.startState = e, this.changes = t, this.selection = i, this.effects = s, this.annotations = o, this.scrollIntoView = r, this._doc = null, this._state = null, i && kh(i, t.newLength), o.some((l) => l.type == de.time) || (this.annotations = o.concat(de.time.of(Date.now())));
  }
  static create(e, t, i, s, o, r) {
    return new de(e, t, i, s, o, r);
  }
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  annotation(e) {
    for (let t of this.annotations)
      if (t.type == e)
        return t.value;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  isUserEvent(e) {
    let t = this.annotation(de.userEvent);
    return !!(t && (t == e || t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."));
  }
}
de.time = Tt.define();
de.userEvent = Tt.define();
de.addToHistory = Tt.define();
de.remote = Tt.define();
function Ed(n, e) {
  let t = [];
  for (let i = 0, s = 0; ; ) {
    let o, r;
    if (i < n.length && (s == e.length || e[s] >= n[i]))
      o = n[i++], r = n[i++];
    else if (s < e.length)
      o = e[s++], r = e[s++];
    else
      return t;
    !t.length || t[t.length - 1] < o ? t.push(o, r) : t[t.length - 1] < r && (t[t.length - 1] = r);
  }
}
function Oh(n, e, t) {
  var i;
  let s, o, r;
  return t ? (s = e.changes, o = ue.empty(e.changes.length), r = n.changes.compose(e.changes)) : (s = e.changes.map(n.changes), o = n.changes.mapDesc(e.changes, true), r = n.changes.compose(s)), { changes: r, selection: e.selection ? e.selection.map(o) : (i = n.selection) === null || i === void 0 ? void 0 : i.map(s), effects: H.mapEffects(n.effects, s).concat(H.mapEffects(e.effects, o)), annotations: n.annotations.length ? n.annotations.concat(e.annotations) : e.annotations, scrollIntoView: n.scrollIntoView || e.scrollIntoView };
}
function $o(n, e, t) {
  let i = e.selection, s = ki(e.annotations);
  return e.userEvent && (s = s.concat(de.userEvent.of(e.userEvent))), { changes: e.changes instanceof ue ? e.changes : ue.of(e.changes || [], t, n.facet(Ch)), selection: i && (i instanceof k ? i : k.single(i.anchor, i.head)), effects: ki(e.effects), annotations: s, scrollIntoView: !!e.scrollIntoView };
}
function Eh(n, e, t) {
  let i = $o(n, e.length ? e[0] : {}, n.doc.length);
  e.length && e[0].filter === false && (t = false);
  for (let o = 1; o < e.length; o++) {
    e[o].filter === false && (t = false);
    let r = !!e[o].sequential;
    i = Oh(i, $o(n, e[o], r ? i.changes.newLength : n.doc.length), r);
  }
  let s = de.create(n, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return Pd(t ? Bd(s) : s);
}
function Bd(n) {
  let e = n.startState, t = true;
  for (let s of e.facet(Ah)) {
    let o = s(n);
    if (o === false) {
      t = false;
      break;
    }
    Array.isArray(o) && (t = t === true ? o : Ed(t, o));
  }
  if (t !== true) {
    let s, o;
    if (t === false)
      o = n.changes.invertedDesc, s = ue.empty(e.doc.length);
    else {
      let r = n.changes.filter(t);
      s = r.changes, o = r.filtered.mapDesc(r.changes).invertedDesc;
    }
    n = de.create(e, s, n.selection && n.selection.map(o), H.mapEffects(n.effects, o), n.annotations, n.scrollIntoView);
  }
  let i = e.facet(Mh);
  for (let s = i.length - 1; s >= 0; s--) {
    let o = i[s](n);
    o instanceof de ? n = o : Array.isArray(o) && o.length == 1 && o[0] instanceof de ? n = o[0] : n = Eh(e, ki(o), false);
  }
  return n;
}
function Pd(n) {
  let e = n.startState, t = e.facet(Dh), i = n;
  for (let s = t.length - 1; s >= 0; s--) {
    let o = t[s](n);
    o && Object.keys(o).length && (i = Oh(i, $o(e, o, n.changes.newLength), true));
  }
  return i == n ? n : de.create(e, n.changes, n.selection, i.effects, i.annotations, i.scrollIntoView);
}
const Rd = [];
function ki(n) {
  return n == null ? Rd : Array.isArray(n) ? n : [n];
}
var re = function(n) {
  return n[n.Word = 0] = "Word", n[n.Space = 1] = "Space", n[n.Other = 2] = "Other", n;
}(re || (re = {}));
const Ld = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Fo;
try {
  Fo = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function Id(n) {
  if (Fo)
    return Fo.test(n);
  for (let e = 0; e < n.length; e++) {
    let t = n[e];
    if (/\w/.test(t) || t > "\x80" && (t.toUpperCase() != t.toLowerCase() || Ld.test(t)))
      return true;
  }
  return false;
}
function Nd(n) {
  return (e) => {
    if (!/\S/.test(e))
      return re.Space;
    if (Id(e))
      return re.Word;
    for (let t = 0; t < n.length; t++)
      if (e.indexOf(n[t]) > -1)
        return re.Word;
    return re.Other;
  };
}
class U {
  constructor(e, t, i, s, o, r) {
    this.config = e, this.doc = t, this.selection = i, this.values = s, this.status = e.statusTemplate.slice(), this.computeSlot = o, r && (r._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      sn(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = true) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (t)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return sn(this, i), ws(this, i);
  }
  update(...e) {
    return Eh(this, e, true);
  }
  applyTransaction(e) {
    let t = this.config, { base: i, compartments: s } = t;
    for (let l of e.effects)
      l.is(Tn.reconfigure) ? (t && (s = /* @__PURE__ */ new Map(), t.compartments.forEach((a, h) => s.set(h, a)), t = null), s.set(l.value.compartment, l.value.extension)) : l.is(H.reconfigure) ? (t = null, i = l.value) : l.is(H.appendConfig) && (t = null, i = ki(i).concat(l.value));
    let o;
    t ? o = e.startState.values.slice() : (t = vs.resolve(i, s, this), o = new U(t, this.doc, this.selection, t.dynamicSlots.map(() => null), (a, h) => h.reconfigure(a, this), null).values);
    let r = e.startState.facet(Vo) ? e.newSelection : e.newSelection.asSingle();
    new U(t, e.newDoc, r, o, (l, a) => a.update(l, e), e);
  }
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({ changes: { from: t.from, to: t.to, insert: e }, range: k.cursor(t.from + e.length) }));
  }
  changeByRange(e) {
    let t = this.selection, i = e(t.ranges[0]), s = this.changes(i.changes), o = [i.range], r = ki(i.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]), h = this.changes(a.changes), c = h.map(s);
      for (let u = 0; u < l; u++)
        o[u] = o[u].map(c);
      let f = s.mapDesc(h, true);
      o.push(a.range.map(f)), s = s.compose(c), r = H.mapEffects(r, c).concat(H.mapEffects(ki(a.effects), f));
    }
    return { changes: s, selection: k.create(o, t.mainIndex), effects: r };
  }
  changes(e = []) {
    return e instanceof ue ? e : ue.of(e, this.doc.length, this.facet(U.lineSeparator));
  }
  toText(e) {
    return Q.of(e.split(this.facet(U.lineSeparator) || Po));
  }
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (sn(this, t), ws(this, t));
  }
  toJSON(e) {
    let t = { doc: this.sliceDoc(), selection: this.selection.toJSON() };
    if (e)
      for (let i in e) {
        let s = e[i];
        s instanceof ge && this.config.address[s.id] != null && (t[i] = s.spec.toJSON(this.field(e[i]), this));
      }
    return t;
  }
  static fromJSON(e, t = {}, i) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let s = [];
    if (i) {
      for (let o in i)
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          let r = i[o], l = e[o];
          s.push(r.init((a) => r.spec.fromJSON(l, a)));
        }
    }
    return U.create({ doc: e.doc, selection: k.fromJSON(e.selection), extensions: t.extensions ? s.concat([t.extensions]) : s });
  }
  static create(e = {}) {
    let t = vs.resolve(e.extensions || [], /* @__PURE__ */ new Map()), i = e.doc instanceof Q ? e.doc : Q.of((e.doc || "").split(t.staticFacet(U.lineSeparator) || Po)), s = e.selection ? e.selection instanceof k ? e.selection : k.single(e.selection.anchor, e.selection.head) : k.single(0);
    return kh(s, i.length), t.staticFacet(Vo) || (s = s.asSingle()), new U(t, i, s, t.dynamicSlots.map(() => null), (o, r) => r.create(o), null);
  }
  get tabSize() {
    return this.facet(U.tabSize);
  }
  get lineBreak() {
    return this.facet(U.lineSeparator) || `
`;
  }
  get readOnly() {
    return this.facet(Th);
  }
  phrase(e, ...t) {
    for (let i of this.facet(U.phrases))
      if (Object.prototype.hasOwnProperty.call(i, e)) {
        e = i[e];
        break;
      }
    return t.length && (e = e.replace(/\$(\$|\d*)/g, (i, s) => {
      if (s == "$")
        return "$";
      let o = +(s || 1);
      return !o || o > t.length ? i : t[o - 1];
    })), e;
  }
  languageDataAt(e, t, i = -1) {
    let s = [];
    for (let o of this.facet(Sh))
      for (let r of o(this, t, i))
        Object.prototype.hasOwnProperty.call(r, e) && s.push(r[e]);
    return s;
  }
  charCategorizer(e) {
    return Nd(this.languageDataAt("wordChars", e).join(""));
  }
  wordAt(e) {
    let { text: t, from: i, length: s } = this.doc.lineAt(e), o = this.charCategorizer(e), r = e - i, l = e - i;
    for (; r > 0; ) {
      let a = xe(t, r, false);
      if (o(t.slice(a, r)) != re.Word)
        break;
      r = a;
    }
    for (; l < s; ) {
      let a = xe(t, l);
      if (o(t.slice(l, a)) != re.Word)
        break;
      l = a;
    }
    return r == l ? null : k.range(r + i, l + i);
  }
}
U.allowMultipleSelections = Vo;
U.tabSize = $.define({ combine: (n) => n.length ? n[0] : 4 });
U.lineSeparator = Ch;
U.readOnly = Th;
U.phrases = $.define({ compare(n, e) {
  let t = Object.keys(n), i = Object.keys(e);
  return t.length == i.length && t.every((s) => n[s] == e[s]);
} });
U.languageData = Sh;
U.changeFilter = Ah;
U.transactionFilter = Mh;
U.transactionExtender = Dh;
Tn.reconfigure = H.define();
function vt(n, e, t = {}) {
  let i = {};
  for (let s of n)
    for (let o of Object.keys(s)) {
      let r = s[o], l = i[o];
      if (l === void 0)
        i[o] = r;
      else if (!(l === r || r === void 0))
        if (Object.hasOwnProperty.call(t, o))
          i[o] = t[o](l, r);
        else
          throw new Error("Config merge conflict for field " + o);
    }
  for (let s in e)
    i[s] === void 0 && (i[s] = e[s]);
  return i;
}
class oi {
  eq(e) {
    return this == e;
  }
  range(e, t = e) {
    return zo.create(e, t, this);
  }
}
oi.prototype.startSide = oi.prototype.endSide = 0;
oi.prototype.point = false;
oi.prototype.mapMode = De.TrackDel;
let zo = class Bh {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.value = i;
  }
  static create(e, t, i) {
    return new Bh(e, t, i);
  }
};
function Ho(n, e) {
  return n.from - e.from || n.value.startSide - e.value.startSide;
}
class Vr {
  constructor(e, t, i, s) {
    this.from = e, this.to = t, this.value = i, this.maxPoint = s;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  findIndex(e, t, i, s = 0) {
    let o = i ? this.to : this.from;
    for (let r = s, l = o.length; ; ) {
      if (r == l)
        return r;
      let a = r + l >> 1, h = o[a] - e || (i ? this.value[a].endSide : this.value[a].startSide) - t;
      if (a == r)
        return h >= 0 ? r : l;
      h >= 0 ? l = a : r = a + 1;
    }
  }
  between(e, t, i, s) {
    for (let o = this.findIndex(t, -1e9, true), r = this.findIndex(i, 1e9, false, o); o < r; o++)
      if (s(this.from[o] + e, this.to[o] + e, this.value[o]) === false)
        return false;
  }
  map(e, t) {
    let i = [], s = [], o = [], r = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let h = this.value[a], c = this.from[a] + e, f = this.to[a] + e, u, d;
      if (c == f) {
        let p = t.mapPos(c, h.startSide, h.mapMode);
        if (p == null || (u = d = p, h.startSide != h.endSide && (d = t.mapPos(c, h.endSide), d < u)))
          continue;
      } else if (u = t.mapPos(c, h.startSide), d = t.mapPos(f, h.endSide), u > d || u == d && h.startSide > 0 && h.endSide <= 0)
        continue;
      (d - u || h.endSide - h.startSide) < 0 || (r < 0 && (r = u), h.point && (l = Math.max(l, d - u)), i.push(h), s.push(u - r), o.push(d - r));
    }
    return { mapped: i.length ? new Vr(s, o, i, l) : null, pos: r };
  }
}
class X {
  constructor(e, t, i, s) {
    this.chunkPos = e, this.chunk = t, this.nextLayer = i, this.maxPoint = s;
  }
  static create(e, t, i, s) {
    return new X(e, t, i, s);
  }
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  get size() {
    if (this.isEmpty)
      return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk)
      e += t.value.length;
    return e;
  }
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  update(e) {
    let { add: t = [], sort: i = false, filterFrom: s = 0, filterTo: o = this.length } = e, r = e.filter;
    if (t.length == 0 && !r)
      return this;
    if (i && (t = t.slice().sort(Ho)), this.isEmpty)
      return t.length ? X.of(t) : this;
    let l = new Ph(this, null, -1).goto(0), a = 0, h = [], c = new Ct();
    for (; l.value || a < t.length; )
      if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
        let f = t[a++];
        c.addInner(f.from, f.to, f.value) || h.push(f);
      } else
        l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) && (!r || s > this.chunkEnd(l.chunkIndex) || o < this.chunkPos[l.chunkIndex]) && c.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!r || s > l.to || o < l.from || r(l.from, l.to, l.value)) && (c.addInner(l.from, l.to, l.value) || h.push(zo.create(l.from, l.to, l.value))), l.next());
    return c.finishInner(this.nextLayer.isEmpty && !h.length ? X.empty : this.nextLayer.update({ add: h, filter: r, filterFrom: s, filterTo: o }));
  }
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let t = [], i = [], s = -1;
    for (let r = 0; r < this.chunk.length; r++) {
      let l = this.chunkPos[r], a = this.chunk[r], h = e.touchesRange(l, l + a.length);
      if (h === false)
        s = Math.max(s, a.maxPoint), t.push(a), i.push(e.mapPos(l));
      else if (h === true) {
        let { mapped: c, pos: f } = a.map(l, e);
        c && (s = Math.max(s, c.maxPoint), t.push(c), i.push(f));
      }
    }
    let o = this.nextLayer.map(e);
    return t.length == 0 ? o : new X(i, t, o || X.empty, s);
  }
  between(e, t, i) {
    if (!this.isEmpty) {
      for (let s = 0; s < this.chunk.length; s++) {
        let o = this.chunkPos[s], r = this.chunk[s];
        if (t >= o && e <= o + r.length && r.between(o, e - o, t - o, i) === false)
          return;
      }
      this.nextLayer.between(e, t, i);
    }
  }
  iter(e = 0) {
    return un.from([this]).goto(e);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(e, t = 0) {
    return un.from(e).goto(t);
  }
  static compare(e, t, i, s, o = -1) {
    let r = e.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= o), l = t.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= o), a = Ml(r, l, i), h = new Wi(r, a, o), c = new Wi(l, a, o);
    i.iterGaps((f, u, d) => Dl(h, f, c, u, d, s)), i.empty && i.length == 0 && Dl(h, 0, c, 0, 0, s);
  }
  static eq(e, t, i = 0, s) {
    s == null && (s = 1e9 - 1);
    let o = e.filter((c) => !c.isEmpty && t.indexOf(c) < 0), r = t.filter((c) => !c.isEmpty && e.indexOf(c) < 0);
    if (o.length != r.length)
      return false;
    if (!o.length)
      return true;
    let l = Ml(o, r), a = new Wi(o, l, 0).goto(i), h = new Wi(r, l, 0).goto(i);
    for (; ; ) {
      if (a.to != h.to || !Wo(a.active, h.active) || a.point && (!h.point || !a.point.eq(h.point)))
        return false;
      if (a.to > s)
        return true;
      a.next(), h.next();
    }
  }
  static spans(e, t, i, s, o = -1) {
    let r = new Wi(e, null, o).goto(t), l = t, a = r.openStart;
    for (; ; ) {
      let h = Math.min(r.to, i);
      if (r.point) {
        let c = r.activeForPoint(r.to), f = r.pointFrom < t ? c.length + 1 : r.point.startSide < 0 ? c.length : Math.min(c.length, a);
        s.point(l, h, r.point, c, f, r.pointRank), a = Math.min(r.openEnd(h), c.length);
      } else
        h > l && (s.span(l, h, r.active, a), a = r.openEnd(h));
      if (r.to > i)
        return a + (r.point && r.to > i ? 1 : 0);
      l = r.to, r.next();
    }
  }
  static of(e, t = false) {
    let i = new Ct();
    for (let s of e instanceof zo ? [e] : t ? Vd(e) : e)
      i.add(s.from, s.to, s.value);
    return i.finish();
  }
  static join(e) {
    if (!e.length)
      return X.empty;
    let t = e[e.length - 1];
    for (let i = e.length - 2; i >= 0; i--)
      for (let s = e[i]; s != X.empty; s = s.nextLayer)
        t = new X(s.chunkPos, s.chunk, t, Math.max(s.maxPoint, t.maxPoint));
    return t;
  }
}
X.empty = new X([], [], null, -1);
function Vd(n) {
  if (n.length > 1)
    for (let e = n[0], t = 1; t < n.length; t++) {
      let i = n[t];
      if (Ho(e, i) > 0)
        return n.slice().sort(Ho);
      e = i;
    }
  return n;
}
X.empty.nextLayer = X.empty;
class Ct {
  finishChunk(e) {
    this.chunks.push(new Vr(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
  }
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  add(e, t, i) {
    this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new Ct())).add(e, t, i);
  }
  addInner(e, t, i) {
    let s = e - this.lastTo || i.startSide - this.last.endSide;
    if (s <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return s < 0 ? false : (this.from.length == 250 && this.finishChunk(true), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = i, this.lastFrom = e, this.lastTo = t, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), true);
  }
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0)
      return false;
    this.from.length && this.finishChunk(true), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
    let i = t.value.length - 1;
    return this.last = t.value[i], this.lastFrom = t.from[i] + e, this.lastTo = t.to[i] + e, true;
  }
  finish() {
    return this.finishInner(X.empty);
  }
  finishInner(e) {
    if (this.from.length && this.finishChunk(false), this.chunks.length == 0)
      return e;
    let t = X.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, t;
  }
}
function Ml(n, e, t) {
  let i = /* @__PURE__ */ new Map();
  for (let o of n)
    for (let r = 0; r < o.chunk.length; r++)
      o.chunk[r].maxPoint <= 0 && i.set(o.chunk[r], o.chunkPos[r]);
  let s = /* @__PURE__ */ new Set();
  for (let o of e)
    for (let r = 0; r < o.chunk.length; r++) {
      let l = i.get(o.chunk[r]);
      l != null && (t ? t.mapPos(l) : l) == o.chunkPos[r] && !(t == null ? void 0 : t.touchesRange(l, l + o.chunk[r].length)) && s.add(o.chunk[r]);
    }
  return s;
}
class Ph {
  constructor(e, t, i, s = 0) {
    this.layer = e, this.skip = t, this.minPoint = i, this.rank = s;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, t = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, t, false), this;
  }
  gotoInner(e, t, i) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let s = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(s) || this.layer.chunkEnd(this.chunkIndex) < e || s.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, i = false;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let s = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, true);
      (!i || this.rangeIndex < s) && this.setRangeIndex(s);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, true);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex], t = this.layer.chunk[this.chunkIndex], i = e + t.from[this.rangeIndex];
        if (this.from = i, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(e) {
    return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
  }
}
class un {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, i = -1) {
    let s = [];
    for (let o = 0; o < e.length; o++)
      for (let r = e[o]; !r.isEmpty; r = r.nextLayer)
        r.maxPoint >= i && s.push(new Ph(r, t, i, o));
    return s.length == 1 ? s[0] : new un(s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let i of this.heap)
      i.goto(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      oo(this.heap, i);
    return this.next(), this;
  }
  forward(e, t) {
    for (let i of this.heap)
      i.forward(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      oo(this.heap, i);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), oo(this.heap, 0);
    }
  }
}
function oo(n, e) {
  for (let t = n[e]; ; ) {
    let i = (e << 1) + 1;
    if (i >= n.length)
      break;
    let s = n[i];
    if (i + 1 < n.length && s.compare(n[i + 1]) >= 0 && (s = n[i + 1], i++), t.compare(s) < 0)
      break;
    n[i] = t, n[e] = s, e = i;
  }
}
class Wi {
  constructor(e, t, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = un.from(e, t, i);
  }
  goto(e, t = -1e9) {
    return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this;
  }
  forward(e, t) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    Fn(this.active, e), Fn(this.activeTo, e), Fn(this.activeRank, e), this.minActive = Tl(this.active, this.activeTo);
  }
  addActive(e) {
    let t = 0, { value: i, to: s, rank: o } = this.cursor;
    for (; t < this.activeRank.length && (o - this.activeRank[t] || s - this.activeTo[t]) > 0; )
      t++;
    zn(this.active, t, i), zn(this.activeTo, t, s), zn(this.activeRank, t, o), e && zn(e, t, this.cursor.from), this.minActive = Tl(this.active, this.activeTo);
  }
  next() {
    let e = this.to, t = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let s = this.minActive;
      if (s > -1 && (this.activeTo[s] - this.cursor.from || this.active[s].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[s] > e) {
          this.to = this.activeTo[s], this.endSide = this.active[s].endSide;
          break;
        }
        this.removeActive(s), i && Fn(i, s);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let o = this.cursor.value;
          if (!o.point)
            this.addActive(i), this.cursor.next();
          else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = o, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = o.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (i) {
      this.openStart = 0;
      for (let s = i.length - 1; s >= 0 && i[s] < e; s--)
        this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length)
      return this.active;
    let t = [];
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)
      (this.activeTo[i] > e || this.activeTo[i] == e && this.active[i].endSide >= this.point.endSide) && t.push(this.active[i]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > e; i--)
      t++;
    return t;
  }
}
function Dl(n, e, t, i, s, o) {
  n.goto(e), t.goto(i);
  let r = i + s, l = i, a = i - e;
  for (; ; ) {
    let h = n.to + a - t.to, c = h || n.endSide - t.endSide, f = c < 0 ? n.to + a : t.to, u = Math.min(f, r);
    if (n.point || t.point ? n.point && t.point && (n.point == t.point || n.point.eq(t.point)) && Wo(n.activeForPoint(n.to), t.activeForPoint(t.to)) || o.comparePoint(l, u, n.point, t.point) : u > l && !Wo(n.active, t.active) && o.compareRange(l, u, n.active, t.active), f > r)
      break;
    (h || n.openEnd != t.openEnd) && o.boundChange && o.boundChange(f), l = f, c <= 0 && n.next(), c >= 0 && t.next();
  }
}
function Wo(n, e) {
  if (n.length != e.length)
    return false;
  for (let t = 0; t < n.length; t++)
    if (n[t] != e[t] && !n[t].eq(e[t]))
      return false;
  return true;
}
function Fn(n, e) {
  for (let t = e, i = n.length - 1; t < i; t++)
    n[t] = n[t + 1];
  n.pop();
}
function zn(n, e, t) {
  for (let i = n.length - 1; i >= e; i--)
    n[i + 1] = n[i];
  n[e] = t;
}
function Tl(n, e) {
  let t = -1, i = 1e9;
  for (let s = 0; s < e.length; s++)
    (e[s] - i || n[s].endSide - n[t].endSide) < 0 && (t = s, i = e[s]);
  return t;
}
function $i(n, e, t = n.length) {
  let i = 0;
  for (let s = 0; s < t && s < n.length; )
    n.charCodeAt(s) == 9 ? (i += e - i % e, s++) : (i++, s = xe(n, s));
  return i;
}
function qo(n, e, t, i) {
  for (let s = 0, o = 0; ; ) {
    if (o >= e)
      return s;
    if (s == n.length)
      break;
    o += n.charCodeAt(s) == 9 ? t - o % t : 1, s = xe(n, s);
  }
  return i === true ? -1 : n.length;
}
const Uo = "\u037C", Ol = typeof Symbol > "u" ? "__" + Uo : Symbol.for(Uo), jo = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), El = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class Ft {
  constructor(e, t) {
    this.rules = [];
    let { finish: i } = t || {};
    function s(r) {
      return /^@/.test(r) ? [r] : r.split(/,\s*/);
    }
    function o(r, l, a, h) {
      let c = [], f = /^@(\w+)\b/.exec(r[0]), u = f && f[1] == "keyframes";
      if (f && l == null)
        return a.push(r[0] + ";");
      for (let d in l) {
        let p = l[d];
        if (/&/.test(d))
          o(d.split(/,\s*/).map((g) => r.map((m) => g.replace(/&/, m))).reduce((g, m) => g.concat(m)), p, a);
        else if (p && typeof p == "object") {
          if (!f)
            throw new RangeError("The value of a property (" + d + ") should be a primitive value.");
          o(s(d), p, c, u);
        } else
          p != null && c.push(d.replace(/_.*/, "").replace(/[A-Z]/g, (g) => "-" + g.toLowerCase()) + ": " + p + ";");
      }
      (c.length || u) && a.push((i && !f && !h ? r.map(i) : r).join(", ") + " {" + c.join(" ") + "}");
    }
    for (let r in e)
      o(s(r), e[r], this.rules);
  }
  getRules() {
    return this.rules.join(`
`);
  }
  static newName() {
    let e = El[Ol] || 1;
    return El[Ol] = e + 1, Uo + e.toString(36);
  }
  static mount(e, t, i) {
    let s = e[jo], o = i && i.nonce;
    s ? o && s.setNonce(o) : s = new $d(e, o), s.mount(Array.isArray(t) ? t : [t], e);
  }
}
let Bl = /* @__PURE__ */ new Map();
class $d {
  constructor(e, t) {
    let i = e.ownerDocument || e, s = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && s.CSSStyleSheet) {
      let o = Bl.get(i);
      if (o)
        return e[jo] = o;
      this.sheet = new s.CSSStyleSheet(), Bl.set(i, this);
    } else
      this.styleTag = i.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
    this.modules = [], e[jo] = this;
  }
  mount(e, t) {
    let i = this.sheet, s = 0, o = 0;
    for (let r = 0; r < e.length; r++) {
      let l = e[r], a = this.modules.indexOf(l);
      if (a < o && a > -1 && (this.modules.splice(a, 1), o--, a = -1), a == -1) {
        if (this.modules.splice(o++, 0, l), i)
          for (let h = 0; h < l.rules.length; h++)
            i.insertRule(l.rules[h], s++);
      } else {
        for (; o < a; )
          s += this.modules[o++].rules.length;
        s += l.rules.length, o++;
      }
    }
    if (i)
      t.adoptedStyleSheets.indexOf(this.sheet) < 0 && (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
    else {
      let r = "";
      for (let a = 0; a < this.modules.length; a++)
        r += this.modules[a].getRules() + `
`;
      this.styleTag.textContent = r;
      let l = t.head || t;
      this.styleTag.parentNode != l && l.insertBefore(this.styleTag, l.firstChild);
    }
  }
  setNonce(e) {
    this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
  }
}
var zt = { 8: "Backspace", 9: "Tab", 10: "Enter", 12: "NumLock", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 44: "PrintScreen", 45: "Insert", 46: "Delete", 59: ";", 61: "=", 91: "Meta", 92: "Meta", 106: "*", 107: "+", 108: ",", 109: "-", 110: ".", 111: "/", 144: "NumLock", 145: "ScrollLock", 160: "Shift", 161: "Shift", 162: "Control", 163: "Control", 164: "Alt", 165: "Alt", 173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" }, dn = { 48: ")", 49: "!", 50: "@", 51: "#", 52: "$", 53: "%", 54: "^", 55: "&", 56: "*", 57: "(", 59: ":", 61: "+", 173: "_", 186: ":", 187: "+", 188: "<", 189: "_", 190: ">", 191: "?", 192: "~", 219: "{", 220: "|", 221: "}", 222: '"' }, Fd = typeof navigator < "u" && /Mac/.test(navigator.platform), zd = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var ve = 0; ve < 10; ve++)
  zt[48 + ve] = zt[96 + ve] = String(ve);
for (var ve = 1; ve <= 24; ve++)
  zt[ve + 111] = "F" + ve;
for (var ve = 65; ve <= 90; ve++)
  zt[ve] = String.fromCharCode(ve + 32), dn[ve] = String.fromCharCode(ve);
for (var ro in zt)
  dn.hasOwnProperty(ro) || (dn[ro] = zt[ro]);
function Hd(n) {
  var e = Fd && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || zd && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? dn : zt)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
function pn(n) {
  let e;
  return n.nodeType == 11 ? e = n.getSelection ? n : n.ownerDocument : e = n, e.getSelection();
}
function Ko(n, e) {
  return e ? n == e || n.contains(e.nodeType != 1 ? e.parentNode : e) : false;
}
function fs(n, e) {
  if (!e.anchorNode)
    return false;
  try {
    return Ko(n, e.anchorNode);
  } catch {
    return false;
  }
}
function Di(n) {
  return n.nodeType == 3 ? li(n, 0, n.nodeValue.length).getClientRects() : n.nodeType == 1 ? n.getClientRects() : [];
}
function on(n, e, t, i) {
  return t ? Pl(n, e, t, i, -1) || Pl(n, e, t, i, 1) : false;
}
function ri(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}
function xs(n) {
  return n.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName);
}
function Pl(n, e, t, i, s) {
  for (; ; ) {
    if (n == t && e == i)
      return true;
    if (e == (s < 0 ? 0 : bt(n))) {
      if (n.nodeName == "DIV")
        return false;
      let o = n.parentNode;
      if (!o || o.nodeType != 1)
        return false;
      e = ri(n) + (s < 0 ? 0 : 1), n = o;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[e + (s < 0 ? -1 : 0)], n.nodeType == 1 && n.contentEditable == "false")
        return false;
      e = s < 0 ? bt(n) : 0;
    } else
      return false;
  }
}
function bt(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function On(n, e) {
  let t = e ? n.left : n.right;
  return { left: t, right: t, top: n.top, bottom: n.bottom };
}
function Wd(n) {
  let e = n.visualViewport;
  return e ? { left: 0, right: e.width, top: 0, bottom: e.height } : { left: 0, right: n.innerWidth, top: 0, bottom: n.innerHeight };
}
function Rh(n, e) {
  let t = e.width / n.offsetWidth, i = e.height / n.offsetHeight;
  return (t > 0.995 && t < 1.005 || !isFinite(t) || Math.abs(e.width - n.offsetWidth) < 1) && (t = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(e.height - n.offsetHeight) < 1) && (i = 1), { scaleX: t, scaleY: i };
}
function qd(n, e, t, i, s, o, r, l) {
  let a = n.ownerDocument, h = a.defaultView || window;
  for (let c = n, f = false; c && !f; )
    if (c.nodeType == 1) {
      let u, d = c == a.body, p = 1, g = 1;
      if (d)
        u = Wd(h);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(c).position) && (f = true), c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
          c = c.assignedSlot || c.parentNode;
          continue;
        }
        let w = c.getBoundingClientRect();
        ({ scaleX: p, scaleY: g } = Rh(c, w)), u = { left: w.left, right: w.left + c.clientWidth * p, top: w.top, bottom: w.top + c.clientHeight * g };
      }
      let m = 0, y = 0;
      if (s == "nearest")
        e.top < u.top ? (y = e.top - (u.top + r), t > 0 && e.bottom > u.bottom + y && (y = e.bottom - u.bottom + r)) : e.bottom > u.bottom && (y = e.bottom - u.bottom + r, t < 0 && e.top - y < u.top && (y = e.top - (u.top + r)));
      else {
        let w = e.bottom - e.top, M = u.bottom - u.top;
        y = (s == "center" && w <= M ? e.top + w / 2 - M / 2 : s == "start" || s == "center" && t < 0 ? e.top - r : e.bottom - M + r) - u.top;
      }
      if (i == "nearest" ? e.left < u.left ? (m = e.left - (u.left + o), t > 0 && e.right > u.right + m && (m = e.right - u.right + o)) : e.right > u.right && (m = e.right - u.right + o, t < 0 && e.left < u.left + m && (m = e.left - (u.left + o))) : m = (i == "center" ? e.left + (e.right - e.left) / 2 - (u.right - u.left) / 2 : i == "start" == l ? e.left - o : e.right - (u.right - u.left) + o) - u.left, m || y)
        if (d)
          h.scrollBy(m, y);
        else {
          let w = 0, M = 0;
          if (y) {
            let S = c.scrollTop;
            c.scrollTop += y / g, M = (c.scrollTop - S) * g;
          }
          if (m) {
            let S = c.scrollLeft;
            c.scrollLeft += m / p, w = (c.scrollLeft - S) * p;
          }
          e = { left: e.left - w, top: e.top - M, right: e.right - w, bottom: e.bottom - M }, w && Math.abs(w - m) < 1 && (i = "nearest"), M && Math.abs(M - y) < 1 && (s = "nearest");
        }
      if (d)
        break;
      (e.top < u.top || e.bottom > u.bottom || e.left < u.left || e.right > u.right) && (e = { left: Math.max(e.left, u.left), right: Math.min(e.right, u.right), top: Math.max(e.top, u.top), bottom: Math.min(e.bottom, u.bottom) }), c = c.assignedSlot || c.parentNode;
    } else if (c.nodeType == 11)
      c = c.host;
    else
      break;
}
function Ud(n) {
  let e = n.ownerDocument, t, i;
  for (let s = n.parentNode; s && !(s == e.body || t && i); )
    if (s.nodeType == 1)
      !i && s.scrollHeight > s.clientHeight && (i = s), !t && s.scrollWidth > s.clientWidth && (t = s), s = s.assignedSlot || s.parentNode;
    else if (s.nodeType == 11)
      s = s.host;
    else
      break;
  return { x: t, y: i };
}
class jd {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: t, focusNode: i } = e;
    this.set(t, Math.min(e.anchorOffset, t ? bt(t) : 0), i, Math.min(e.focusOffset, i ? bt(i) : 0));
  }
  set(e, t, i, s) {
    this.anchorNode = e, this.anchorOffset = t, this.focusNode = i, this.focusOffset = s;
  }
}
let di = null;
function Lh(n) {
  if (n.setActive)
    return n.setActive();
  if (di)
    return n.focus(di);
  let e = [];
  for (let t = n; t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument); t = t.parentNode)
    ;
  if (n.focus(di == null ? { get preventScroll() {
    return di = { preventScroll: true }, true;
  } } : void 0), !di) {
    di = false;
    for (let t = 0; t < e.length; ) {
      let i = e[t++], s = e[t++], o = e[t++];
      i.scrollTop != s && (i.scrollTop = s), i.scrollLeft != o && (i.scrollLeft = o);
    }
  }
}
let Rl;
function li(n, e, t = e) {
  let i = Rl || (Rl = document.createRange());
  return i.setEnd(n, t), i.setStart(n, e), i;
}
function _i(n, e, t, i) {
  let s = { key: e, code: e, keyCode: t, which: t, cancelable: true };
  i && ({ altKey: s.altKey, ctrlKey: s.ctrlKey, shiftKey: s.shiftKey, metaKey: s.metaKey } = i);
  let o = new KeyboardEvent("keydown", s);
  o.synthetic = true, n.dispatchEvent(o);
  let r = new KeyboardEvent("keyup", s);
  return r.synthetic = true, n.dispatchEvent(r), o.defaultPrevented || r.defaultPrevented;
}
function Kd(n) {
  for (; n; ) {
    if (n && (n.nodeType == 9 || n.nodeType == 11 && n.host))
      return n;
    n = n.assignedSlot || n.parentNode;
  }
  return null;
}
function Ih(n) {
  for (; n.attributes.length; )
    n.removeAttributeNode(n.attributes[0]);
}
function Gd(n, e) {
  let t = e.focusNode, i = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != i)
    return false;
  for (i = Math.min(i, bt(t)); ; )
    if (i) {
      if (t.nodeType != 1)
        return false;
      let s = t.childNodes[i - 1];
      s.contentEditable == "false" ? i-- : (t = s, i = bt(t));
    } else {
      if (t == n)
        return true;
      i = ri(t), t = t.parentNode;
    }
}
function Nh(n) {
  return n.scrollTop > Math.max(1, n.scrollHeight - n.clientHeight - 4);
}
function Vh(n, e) {
  for (let t = n, i = e; ; ) {
    if (t.nodeType == 3 && i > 0)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i - 1], i = bt(t);
    } else if (t.parentNode && !xs(t))
      i = ri(t), t = t.parentNode;
    else
      return null;
  }
}
function $h(n, e) {
  for (let t = n, i = e; ; ) {
    if (t.nodeType == 3 && i < t.nodeValue.length)
      return { node: t, offset: i };
    if (t.nodeType == 1 && i < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[i], i = 0;
    } else if (t.parentNode && !xs(t))
      i = ri(t) + 1, t = t.parentNode;
    else
      return null;
  }
}
class _e {
  constructor(e, t, i = true) {
    this.node = e, this.offset = t, this.precise = i;
  }
  static before(e, t) {
    return new _e(e.parentNode, ri(e), t);
  }
  static after(e, t) {
    return new _e(e.parentNode, ri(e) + 1, t);
  }
}
const $r = [];
class ne {
  constructor() {
    this.parent = null, this.dom = null, this.flags = 2;
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e) {
    let t = this.posAtStart;
    for (let i of this.children) {
      if (i == e)
        return t;
      t += i.length + i.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  sync(e, t) {
    if (this.flags & 2) {
      let i = this.dom, s = null, o;
      for (let r of this.children) {
        if (r.flags & 7) {
          if (!r.dom && (o = s ? s.nextSibling : i.firstChild)) {
            let l = ne.get(o);
            (!l || !l.parent && l.canReuseDOM(r)) && r.reuseDOM(o);
          }
          r.sync(e, t), r.flags &= -8;
        }
        if (o = s ? s.nextSibling : i.firstChild, t && !t.written && t.node == i && o != r.dom && (t.written = true), r.dom.parentNode == i)
          for (; o && o != r.dom; )
            o = Ll(o);
        else
          i.insertBefore(r.dom, o);
        s = r.dom;
      }
      for (o = s ? s.nextSibling : i.firstChild, o && t && t.node == i && (t.written = true); o; )
        o = Ll(o);
    } else if (this.flags & 1)
      for (let i of this.children)
        i.flags & 7 && (i.sync(e, t), i.flags &= -8);
  }
  reuseDOM(e) {
  }
  localPosFromDOM(e, t) {
    let i;
    if (e == this.dom)
      i = this.dom.childNodes[t];
    else {
      let s = bt(e) == 0 ? 0 : t == 0 ? -1 : 1;
      for (; ; ) {
        let o = e.parentNode;
        if (o == this.dom)
          break;
        s == 0 && o.firstChild != o.lastChild && (e == o.firstChild ? s = -1 : s = 1), e = o;
      }
      s < 0 ? i = e : i = e.nextSibling;
    }
    if (i == this.dom.firstChild)
      return 0;
    for (; i && !ne.get(i); )
      i = i.nextSibling;
    if (!i)
      return this.length;
    for (let s = 0, o = 0; ; s++) {
      let r = this.children[s];
      if (r.dom == i)
        return o;
      o += r.length + r.breakAfter;
    }
  }
  domBoundsAround(e, t, i = 0) {
    let s = -1, o = -1, r = -1, l = -1;
    for (let a = 0, h = i, c = i; a < this.children.length; a++) {
      let f = this.children[a], u = h + f.length;
      if (h < e && u > t)
        return f.domBoundsAround(e, t, h);
      if (u >= e && s == -1 && (s = a, o = h), h > t && f.dom.parentNode == this.dom) {
        r = a, l = c;
        break;
      }
      c = u, h = u + f.breakAfter;
    }
    return { from: o, to: l < 0 ? i + this.length : l, startDOM: (s ? this.children[s - 1].dom.nextSibling : null) || this.dom.firstChild, endDOM: r < this.children.length && r >= 0 ? this.children[r].dom : null };
  }
  markDirty(e = false) {
    this.flags |= 2, this.markParentsDirty(e);
  }
  markParentsDirty(e) {
    for (let t = this.parent; t; t = t.parent) {
      if (e && (t.flags |= 2), t.flags & 1)
        return;
      t.flags |= 1, e = false;
    }
  }
  setParent(e) {
    this.parent != e && (this.parent = e, this.flags & 7 && this.markParentsDirty(true));
  }
  setDOM(e) {
    this.dom != e && (this.dom && (this.dom.cmView = null), this.dom = e, e.cmView = this);
  }
  get rootView() {
    for (let e = this; ; ) {
      let t = e.parent;
      if (!t)
        return e;
      e = t;
    }
  }
  replaceChildren(e, t, i = $r) {
    this.markDirty();
    for (let s = e; s < t; s++) {
      let o = this.children[s];
      o.parent == this && i.indexOf(o) < 0 && o.destroy();
    }
    i.length < 250 ? this.children.splice(e, t - e, ...i) : this.children = [].concat(this.children.slice(0, e), i, this.children.slice(t));
    for (let s = 0; s < i.length; s++)
      i[s].setParent(this);
  }
  ignoreMutation(e) {
    return false;
  }
  ignoreEvent(e) {
    return false;
  }
  childCursor(e = this.length) {
    return new Fh(this.children, e, this.children.length);
  }
  childPos(e, t = 1) {
    return this.childCursor().findPos(e, t);
  }
  toString() {
    let e = this.constructor.name.replace("View", "");
    return e + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (e == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(e) {
    return e.cmView;
  }
  get isEditable() {
    return true;
  }
  get isWidget() {
    return false;
  }
  get isHidden() {
    return false;
  }
  merge(e, t, i, s, o, r) {
    return false;
  }
  become(e) {
    return false;
  }
  canReuseDOM(e) {
    return e.constructor == this.constructor && !((this.flags | e.flags) & 8);
  }
  getSide() {
    return 0;
  }
  destroy() {
    for (let e of this.children)
      e.parent == this && e.destroy();
    this.parent = null;
  }
}
ne.prototype.breakAfter = 0;
function Ll(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class Fh {
  constructor(e, t, i) {
    this.children = e, this.pos = t, this.i = i, this.off = 0;
  }
  findPos(e, t = 1) {
    for (; ; ) {
      if (e > this.pos || e == this.pos && (t > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
        return this.off = e - this.pos, this;
      let i = this.children[--this.i];
      this.pos -= i.length + i.breakAfter;
    }
  }
}
function zh(n, e, t, i, s, o, r, l, a) {
  let { children: h } = n, c = h.length ? h[e] : null, f = o.length ? o[o.length - 1] : null, u = f ? f.breakAfter : r;
  if (!(e == i && c && !r && !u && o.length < 2 && c.merge(t, s, o.length ? f : null, t == 0, l, a))) {
    if (i < h.length) {
      let d = h[i];
      d && (s < d.length || d.breakAfter && (f == null ? void 0 : f.breakAfter)) ? (e == i && (d = d.split(s), s = 0), !u && f && d.merge(0, s, f, true, 0, a) ? o[o.length - 1] = d : ((s || d.children.length && !d.children[0].length) && d.merge(0, s, null, false, 0, a), o.push(d))) : (d == null ? void 0 : d.breakAfter) && (f ? f.breakAfter = 1 : r = 1), i++;
    }
    for (c && (c.breakAfter = r, t > 0 && (!r && o.length && c.merge(t, c.length, o[0], false, l, 0) ? c.breakAfter = o.shift().breakAfter : (t < c.length || c.children.length && c.children[c.children.length - 1].length == 0) && c.merge(t, c.length, null, false, l, 0), e++)); e < i && o.length; )
      if (h[i - 1].become(o[o.length - 1]))
        i--, o.pop(), a = o.length ? 0 : l;
      else if (h[e].become(o[0]))
        e++, o.shift(), l = o.length ? 0 : a;
      else
        break;
    !o.length && e && i < h.length && !h[e - 1].breakAfter && h[i].merge(0, 0, h[e - 1], false, l, a) && e--, (e < i || o.length) && n.replaceChildren(e, i, o);
  }
}
function Hh(n, e, t, i, s, o) {
  let r = n.childCursor(), { i: l, off: a } = r.findPos(t, 1), { i: h, off: c } = r.findPos(e, -1), f = e - t;
  for (let u of i)
    f += u.length;
  n.length += f, zh(n, h, c, l, a, i, 0, s, o);
}
let Pe = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, Go = typeof document < "u" ? document : { documentElement: { style: {} } };
const Yo = /Edge\/(\d+)/.exec(Pe.userAgent), Wh = /MSIE \d/.test(Pe.userAgent), Jo = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Pe.userAgent), Hs = !!(Wh || Jo || Yo), Il = !Hs && /gecko\/(\d+)/i.test(Pe.userAgent), lo = !Hs && /Chrome\/(\d+)/.exec(Pe.userAgent), Nl = "webkitFontSmoothing" in Go.documentElement.style, qh = !Hs && /Apple Computer/.test(Pe.vendor), Vl = qh && (/Mobile\/\w+/.test(Pe.userAgent) || Pe.maxTouchPoints > 2);
var V = { mac: Vl || /Mac/.test(Pe.platform), windows: /Win/.test(Pe.platform), linux: /Linux|X11/.test(Pe.platform), ie: Hs, ie_version: Wh ? Go.documentMode || 6 : Jo ? +Jo[1] : Yo ? +Yo[1] : 0, gecko: Il, gecko_version: Il ? +(/Firefox\/(\d+)/.exec(Pe.userAgent) || [0, 0])[1] : 0, chrome: !!lo, chrome_version: lo ? +lo[1] : 0, ios: Vl, android: /Android\b/.test(Pe.userAgent), webkit: Nl, safari: qh, webkit_version: Nl ? +(/\bAppleWebKit\/(\d+)/.exec(Pe.userAgent) || [0, 0])[1] : 0, tabSize: Go.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size" };
const Yd = 256;
class Qe extends ne {
  constructor(e) {
    super(), this.text = e;
  }
  get length() {
    return this.text.length;
  }
  createDOM(e) {
    this.setDOM(e || document.createTextNode(this.text));
  }
  sync(e, t) {
    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (t && t.node == this.dom && (t.written = true), this.dom.nodeValue = this.text);
  }
  reuseDOM(e) {
    e.nodeType == 3 && this.createDOM(e);
  }
  merge(e, t, i) {
    return this.flags & 8 || i && (!(i instanceof Qe) || this.length - (t - e) + i.length > Yd || i.flags & 8) ? false : (this.text = this.text.slice(0, e) + (i ? i.text : "") + this.text.slice(t), this.markDirty(), true);
  }
  split(e) {
    let t = new Qe(this.text.slice(e));
    return this.text = this.text.slice(0, e), this.markDirty(), t.flags |= this.flags & 8, t;
  }
  localPosFromDOM(e, t) {
    return e == this.dom ? t : t ? this.text.length : 0;
  }
  domAtPos(e) {
    return new _e(this.dom, e);
  }
  domBoundsAround(e, t, i) {
    return { from: i, to: i + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(e, t) {
    return Jd(this.dom, e, t);
  }
}
class At extends ne {
  constructor(e, t = [], i = 0) {
    super(), this.mark = e, this.children = t, this.length = i;
    for (let s of t)
      s.setParent(this);
  }
  setAttrs(e) {
    if (Ih(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs)
      for (let t in this.mark.attrs)
        e.setAttribute(t, this.mark.attrs[t]);
    return e;
  }
  canReuseDOM(e) {
    return super.canReuseDOM(e) && !((this.flags | e.flags) & 8);
  }
  reuseDOM(e) {
    e.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    this.dom ? this.flags & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(e, t);
  }
  merge(e, t, i, s, o, r) {
    return i && (!(i instanceof At && i.mark.eq(this.mark)) || e && o <= 0 || t < this.length && r <= 0) ? false : (Hh(this, e, t, i ? i.children.slice() : [], o - 1, r - 1), this.markDirty(), true);
  }
  split(e) {
    let t = [], i = 0, s = -1, o = 0;
    for (let l of this.children) {
      let a = i + l.length;
      a > e && t.push(i < e ? l.split(e - i) : l), s < 0 && i >= e && (s = o), i = a, o++;
    }
    let r = this.length - e;
    return this.length = e, s > -1 && (this.children.length = s, this.markDirty()), new At(this.mark, t, r);
  }
  domAtPos(e) {
    return Uh(this, e);
  }
  coordsAt(e, t) {
    return Kh(this, e, t);
  }
}
function Jd(n, e, t) {
  let i = n.nodeValue.length;
  e > i && (e = i);
  let s = e, o = e, r = 0;
  e == 0 && t < 0 || e == i && t >= 0 ? V.chrome || V.gecko || (e ? (s--, r = 1) : o < i && (o++, r = -1)) : t < 0 ? s-- : o < i && o++;
  let l = li(n, s, o).getClientRects();
  if (!l.length)
    return null;
  let a = l[(r ? r < 0 : t >= 0) ? 0 : l.length - 1];
  return V.safari && !r && a.width == 0 && (a = Array.prototype.find.call(l, (h) => h.width) || a), r ? On(a, r < 0) : a || null;
}
class It extends ne {
  static create(e, t, i) {
    return new It(e, t, i);
  }
  constructor(e, t, i) {
    super(), this.widget = e, this.length = t, this.side = i, this.prevWidget = null;
  }
  split(e) {
    let t = It.create(this.widget, this.length - e, this.side);
    return this.length -= e, t;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(e, t, i, s, o, r) {
    return i && (!(i instanceof It) || !this.widget.compare(i.widget) || e > 0 && o <= 0 || t < this.length && r <= 0) ? false : (this.length = e + (i ? i.length : 0) + (this.length - t), true);
  }
  become(e) {
    return e instanceof It && e.side == this.side && this.widget.constructor == e.widget.constructor ? (this.widget.compare(e.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, true) : false;
  }
  ignoreMutation() {
    return true;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0)
      return Q.empty;
    let e = this;
    for (; e.parent; )
      e = e.parent;
    let { view: t } = e, i = t && t.state.doc, s = this.posAtStart;
    return i ? i.slice(s, s + this.length) : Q.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0) ? _e.before(this.dom) : _e.after(this.dom, e == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e, t) {
    let i = this.widget.coordsAt(this.dom, e, t);
    if (i)
      return i;
    let s = this.dom.getClientRects(), o = null;
    if (!s.length)
      return null;
    let r = this.side ? this.side < 0 : e > 0;
    for (let l = r ? s.length - 1 : 0; o = s[l], !(e > 0 ? l == 0 : l == s.length - 1 || o.top < o.bottom); l += r ? -1 : 1)
      ;
    return On(o, !r);
  }
  get isEditable() {
    return false;
  }
  get isWidget() {
    return true;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class Ti extends ne {
  constructor(e) {
    super(), this.side = e;
  }
  get length() {
    return 0;
  }
  merge() {
    return false;
  }
  become(e) {
    return e instanceof Ti && e.side == this.side;
  }
  split() {
    return new Ti(this.side);
  }
  sync() {
    if (!this.dom) {
      let e = document.createElement("img");
      e.className = "cm-widgetBuffer", e.setAttribute("aria-hidden", "true"), this.setDOM(e);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(e) {
    return this.side > 0 ? _e.before(this.dom) : _e.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return Q.empty;
  }
  get isHidden() {
    return true;
  }
}
Qe.prototype.children = It.prototype.children = Ti.prototype.children = $r;
function Uh(n, e) {
  let t = n.dom, { children: i } = n, s = 0;
  for (let o = 0; s < i.length; s++) {
    let r = i[s], l = o + r.length;
    if (!(l == o && r.getSide() <= 0)) {
      if (e > o && e < l && r.dom.parentNode == t)
        return r.domAtPos(e - o);
      if (e <= o)
        break;
      o = l;
    }
  }
  for (let o = s; o > 0; o--) {
    let r = i[o - 1];
    if (r.dom.parentNode == t)
      return r.domAtPos(r.length);
  }
  for (let o = s; o < i.length; o++) {
    let r = i[o];
    if (r.dom.parentNode == t)
      return r.domAtPos(0);
  }
  return new _e(t, 0);
}
function jh(n, e, t) {
  let i, { children: s } = n;
  t > 0 && e instanceof At && s.length && (i = s[s.length - 1]) instanceof At && i.mark.eq(e.mark) ? jh(i, e.children[0], t - 1) : (s.push(e), e.setParent(n)), n.length += e.length;
}
function Kh(n, e, t) {
  let i = null, s = -1, o = null, r = -1;
  function l(h, c) {
    for (let f = 0, u = 0; f < h.children.length && u <= c; f++) {
      let d = h.children[f], p = u + d.length;
      p >= c && (d.children.length ? l(d, c - u) : (!o || o.isHidden && t > 0) && (p > c || u == p && d.getSide() > 0) ? (o = d, r = c - u) : (u < c || u == p && d.getSide() < 0 && !d.isHidden) && (i = d, s = c - u)), u = p;
    }
  }
  l(n, e);
  let a = (t < 0 ? i : o) || i || o;
  return a ? a.coordsAt(Math.max(0, a == i ? s : r), t) : Xd(n);
}
function Xd(n) {
  let e = n.dom.lastChild;
  if (!e)
    return n.dom.getBoundingClientRect();
  let t = Di(e);
  return t[t.length - 1] || null;
}
function Xo(n, e) {
  for (let t in n)
    t == "class" && e.class ? e.class += " " + n.class : t == "style" && e.style ? e.style += ";" + n.style : e[t] = n[t];
  return e;
}
const $l = /* @__PURE__ */ Object.create(null);
function ks(n, e, t) {
  if (n == e)
    return true;
  n || (n = $l), e || (e = $l);
  let i = Object.keys(n), s = Object.keys(e);
  if (i.length - (t && i.indexOf(t) > -1 ? 1 : 0) != s.length - (t && s.indexOf(t) > -1 ? 1 : 0))
    return false;
  for (let o of i)
    if (o != t && (s.indexOf(o) == -1 || n[o] !== e[o]))
      return false;
  return true;
}
function Qo(n, e, t) {
  let i = false;
  if (e)
    for (let s in e)
      t && s in t || (i = true, s == "style" ? n.style.cssText = "" : n.removeAttribute(s));
  if (t)
    for (let s in t)
      e && e[s] == t[s] || (i = true, s == "style" ? n.style.cssText = t[s] : n.setAttribute(s, t[s]));
  return i;
}
function Qd(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < n.attributes.length; t++) {
    let i = n.attributes[t];
    e[i.name] = i.value;
  }
  return e;
}
class wt {
  eq(e) {
    return false;
  }
  updateDOM(e, t) {
    return false;
  }
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  get estimatedHeight() {
    return -1;
  }
  get lineBreaks() {
    return 0;
  }
  ignoreEvent(e) {
    return true;
  }
  coordsAt(e, t, i) {
    return null;
  }
  get isHidden() {
    return false;
  }
  get editable() {
    return false;
  }
  destroy(e) {
  }
}
var Oe = function(n) {
  return n[n.Text = 0] = "Text", n[n.WidgetBefore = 1] = "WidgetBefore", n[n.WidgetAfter = 2] = "WidgetAfter", n[n.WidgetRange = 3] = "WidgetRange", n;
}(Oe || (Oe = {}));
class F extends oi {
  constructor(e, t, i, s) {
    super(), this.startSide = e, this.endSide = t, this.widget = i, this.spec = s;
  }
  get heightRelevant() {
    return false;
  }
  static mark(e) {
    return new En(e);
  }
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), i = !!e.block;
    return t += i && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new Ht(e, t, t, i, e.widget || null, false);
  }
  static replace(e) {
    let t = !!e.block, i, s;
    if (e.isBlockGap)
      i = -5e8, s = 4e8;
    else {
      let { start: o, end: r } = Gh(e, t);
      i = (o ? t ? -3e8 : -1 : 5e8) - 1, s = (r ? t ? 2e8 : 1 : -6e8) + 1;
    }
    return new Ht(e, i, s, t, e.widget || null, true);
  }
  static line(e) {
    return new Bn(e);
  }
  static set(e, t = false) {
    return X.of(e, t);
  }
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : false;
  }
}
F.none = X.empty;
class En extends F {
  constructor(e) {
    let { start: t, end: i } = Gh(e);
    super(t ? -1 : 5e8, i ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.class = e.class || "", this.attrs = e.attributes || null;
  }
  eq(e) {
    var t, i;
    return this == e || e instanceof En && this.tagName == e.tagName && (this.class || ((t = this.attrs) === null || t === void 0 ? void 0 : t.class)) == (e.class || ((i = e.attrs) === null || i === void 0 ? void 0 : i.class)) && ks(this.attrs, e.attrs, "class");
  }
  range(e, t = e) {
    if (e >= t)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
En.prototype.point = false;
class Bn extends F {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof Bn && this.spec.class == e.spec.class && ks(this.spec.attributes, e.spec.attributes);
  }
  range(e, t = e) {
    if (t != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
Bn.prototype.mapMode = De.TrackBefore;
Bn.prototype.point = true;
class Ht extends F {
  constructor(e, t, i, s, o, r) {
    super(t, i, o, e), this.block = s, this.isReplace = r, this.mapMode = s ? t <= 0 ? De.TrackBefore : De.TrackAfter : De.TrackDel;
  }
  get type() {
    return this.startSide != this.endSide ? Oe.WidgetRange : this.startSide <= 0 ? Oe.WidgetBefore : Oe.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof Ht && Zd(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
Ht.prototype.point = true;
function Gh(n, e = false) {
  let { inclusiveStart: t, inclusiveEnd: i } = n;
  return t == null && (t = n.inclusive), i == null && (i = n.inclusive), { start: t ?? e, end: i ?? e };
}
function Zd(n, e) {
  return n == e || !!(n && e && n.compare(e));
}
function us(n, e, t, i = 0) {
  let s = t.length - 1;
  s >= 0 && t[s] + i >= n ? t[s] = Math.max(t[s], e) : t.push(n, e);
}
class fe extends ne {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  merge(e, t, i, s, o, r) {
    if (i) {
      if (!(i instanceof fe))
        return false;
      this.dom || i.transferDOM(this);
    }
    return s && this.setDeco(i ? i.attrs : null), Hh(this, e, t, i ? i.children.slice() : [], o, r), true;
  }
  split(e) {
    let t = new fe();
    if (t.breakAfter = this.breakAfter, this.length == 0)
      return t;
    let { i, off: s } = this.childPos(e);
    s && (t.append(this.children[i].split(s), 0), this.children[i].merge(s, this.children[i].length, null, false, 0, 0), i++);
    for (let o = i; o < this.children.length; o++)
      t.append(this.children[o], 0);
    for (; i > 0 && this.children[i - 1].length == 0; )
      this.children[--i].destroy();
    return this.children.length = i, this.markDirty(), this.length = e, t;
  }
  transferDOM(e) {
    this.dom && (this.markDirty(), e.setDOM(this.dom), e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(e) {
    ks(this.attrs, e) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = e);
  }
  append(e, t) {
    jh(this, e, t);
  }
  addLineDeco(e) {
    let t = e.spec.attributes, i = e.spec.class;
    t && (this.attrs = Xo(t, this.attrs || {})), i && (this.attrs = Xo({ class: i }, this.attrs || {}));
  }
  domAtPos(e) {
    return Uh(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, t) {
    var i;
    this.dom ? this.flags & 4 && (Ih(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (Qo(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(e, t);
    let s = this.dom.lastChild;
    for (; s && ne.get(s) instanceof At; )
      s = s.lastChild;
    if (!s || !this.length || s.nodeName != "BR" && ((i = ne.get(s)) === null || i === void 0 ? void 0 : i.isEditable) == false && (!V.ios || !this.children.some((o) => o instanceof Qe))) {
      let o = document.createElement("BR");
      o.cmIgnore = true, this.dom.appendChild(o);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let e = 0, t;
    for (let i of this.children) {
      if (!(i instanceof Qe) || /[^ -~]/.test(i.text))
        return null;
      let s = Di(i.dom);
      if (s.length != 1)
        return null;
      e += s[0].width, t = s[0].height;
    }
    return e ? { lineHeight: this.dom.getBoundingClientRect().height, charWidth: e / this.length, textHeight: t } : null;
  }
  coordsAt(e, t) {
    let i = Kh(this, e, t);
    if (!this.children.length && i && this.parent) {
      let { heightOracle: s } = this.parent.view.viewState, o = i.bottom - i.top;
      if (Math.abs(o - s.lineHeight) < 2 && s.textHeight < o) {
        let r = (o - s.textHeight) / 2;
        return { top: i.top + r, bottom: i.bottom - r, left: i.left, right: i.left };
      }
    }
    return i;
  }
  become(e) {
    return e instanceof fe && this.children.length == 0 && e.children.length == 0 && ks(this.attrs, e.attrs) && this.breakAfter == e.breakAfter;
  }
  covers() {
    return true;
  }
  static find(e, t) {
    for (let i = 0, s = 0; i < e.children.length; i++) {
      let o = e.children[i], r = s + o.length;
      if (r >= t) {
        if (o instanceof fe)
          return o;
        if (r > t)
          break;
      }
      s = r + o.breakAfter;
    }
    return null;
  }
}
class St extends ne {
  constructor(e, t, i) {
    super(), this.widget = e, this.length = t, this.deco = i, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(e, t, i, s, o, r) {
    return i && (!(i instanceof St) || !this.widget.compare(i.widget) || e > 0 && o <= 0 || t < this.length && r <= 0) ? false : (this.length = e + (i ? i.length : 0) + (this.length - t), true);
  }
  domAtPos(e) {
    return e == 0 ? _e.before(this.dom) : _e.after(this.dom, e == this.length);
  }
  split(e) {
    let t = this.length - e;
    this.length = e;
    let i = new St(this.widget, t, this.deco);
    return i.breakAfter = this.breakAfter, i;
  }
  get children() {
    return $r;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : Q.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof St && e.widget.constructor == this.widget.constructor ? (e.widget.compare(this.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, this.deco = e.deco, this.breakAfter = e.breakAfter, true) : false;
  }
  ignoreMutation() {
    return true;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get isEditable() {
    return false;
  }
  get isWidget() {
    return true;
  }
  coordsAt(e, t) {
    let i = this.widget.coordsAt(this.dom, e, t);
    return i || (this.widget instanceof Zo ? null : On(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0));
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(e) {
    let { startSide: t, endSide: i } = this.deco;
    return t == i ? false : e < 0 ? t < 0 : i > 0;
  }
}
class Zo extends wt {
  constructor(e) {
    super(), this.height = e;
  }
  toDOM() {
    let e = document.createElement("div");
    return e.className = "cm-gap", this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return e.style.height = this.height + "px", true;
  }
  get editable() {
    return true;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return false;
  }
}
class rn {
  constructor(e, t, i, s) {
    this.doc = e, this.pos = t, this.end = i, this.disallowBlockEffectsFor = s, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = true, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = e.iter(), this.skip = t;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !(e.breakAfter || e instanceof St && e.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new fe()), this.atCursorPos = true), this.curLine;
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(Hn(new Ti(-1), e), e.length), this.pendingBuffer = 0);
  }
  addBlockWidget(e) {
    this.flushBuffer(), this.curLine = null, this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, !this.posCovered() && !(e && this.content.length && this.content[this.content.length - 1] instanceof St) && this.getLine();
  }
  buildText(e, t, i) {
    for (; e > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: o, lineBreak: r, done: l } = this.cursor.next(this.skip);
        if (this.skip = 0, l)
          throw new Error("Ran out of text content when drawing inline views");
        if (r) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = true, e--;
          continue;
        } else
          this.text = o, this.textOff = 0;
      }
      let s = Math.min(this.text.length - this.textOff, e, 512);
      this.flushBuffer(t.slice(t.length - i)), this.getLine().append(Hn(new Qe(this.text.slice(this.textOff, this.textOff + s)), t), i), this.atCursorPos = true, this.textOff += s, e -= s, i = 0;
    }
  }
  span(e, t, i, s) {
    this.buildText(t - e, i, s), this.pos = t, this.openStart < 0 && (this.openStart = s);
  }
  point(e, t, i, s, o, r) {
    if (this.disallowBlockEffectsFor[r] && i instanceof Ht) {
      if (i.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (t > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l = t - e;
    if (i instanceof Ht)
      if (i.block)
        i.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new St(i.widget || Oi.block, l, i));
      else {
        let a = It.create(i.widget || Oi.inline, l, l ? 0 : i.startSide), h = this.atCursorPos && !a.isEditable && o <= s.length && (e < t || i.startSide > 0), c = !a.isEditable && (e < t || o > s.length || i.startSide <= 0), f = this.getLine();
        this.pendingBuffer == 2 && !h && !a.isEditable && (this.pendingBuffer = 0), this.flushBuffer(s), h && (f.append(Hn(new Ti(1), s), o), o = s.length + Math.max(0, o - s.length)), f.append(Hn(a, s), o), this.atCursorPos = c, this.pendingBuffer = c ? e < t || o > s.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = s.slice());
      }
    else
      this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = t), this.openStart < 0 && (this.openStart = o);
  }
  static build(e, t, i, s, o) {
    let r = new rn(e, t, i, o);
    return r.openEnd = X.spans(s, t, i, r), r.openStart < 0 && (r.openStart = r.openEnd), r.finish(r.openEnd), r;
  }
}
function Hn(n, e) {
  for (let t of e)
    n = new At(t, [n], n.length);
  return n;
}
class Oi extends wt {
  constructor(e) {
    super(), this.tag = e;
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return true;
  }
}
Oi.inline = new Oi("span");
Oi.block = new Oi("div");
var oe = function(n) {
  return n[n.LTR = 0] = "LTR", n[n.RTL = 1] = "RTL", n;
}(oe || (oe = {}));
const ai = oe.LTR, Fr = oe.RTL;
function Yh(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    e.push(1 << +n[t]);
  return e;
}
const ep = Yh("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), tp = Yh("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), er = /* @__PURE__ */ Object.create(null), st = [];
for (let n of ["()", "[]", "{}"]) {
  let e = n.charCodeAt(0), t = n.charCodeAt(1);
  er[e] = t, er[t] = -e;
}
function Jh(n) {
  return n <= 247 ? ep[n] : 1424 <= n && n <= 1524 ? 2 : 1536 <= n && n <= 1785 ? tp[n - 1536] : 1774 <= n && n <= 2220 ? 4 : 8192 <= n && n <= 8204 ? 256 : 64336 <= n && n <= 65023 ? 4 : 1;
}
const ip = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class Nt {
  get dir() {
    return this.level % 2 ? Fr : ai;
  }
  constructor(e, t, i) {
    this.from = e, this.to = t, this.level = i;
  }
  side(e, t) {
    return this.dir == t == e ? this.to : this.from;
  }
  forward(e, t) {
    return e == (this.dir == t);
  }
  static find(e, t, i, s) {
    let o = -1;
    for (let r = 0; r < e.length; r++) {
      let l = e[r];
      if (l.from <= t && l.to >= t) {
        if (l.level == i)
          return r;
        (o < 0 || (s != 0 ? s < 0 ? l.from < t : l.to > t : e[o].level > l.level)) && (o = r);
      }
    }
    if (o < 0)
      throw new RangeError("Index out of range");
    return o;
  }
}
function Xh(n, e) {
  if (n.length != e.length)
    return false;
  for (let t = 0; t < n.length; t++) {
    let i = n[t], s = e[t];
    if (i.from != s.from || i.to != s.to || i.direction != s.direction || !Xh(i.inner, s.inner))
      return false;
  }
  return true;
}
const ie = [];
function np(n, e, t, i, s) {
  for (let o = 0; o <= i.length; o++) {
    let r = o ? i[o - 1].to : e, l = o < i.length ? i[o].from : t, a = o ? 256 : s;
    for (let h = r, c = a, f = a; h < l; h++) {
      let u = Jh(n.charCodeAt(h));
      u == 512 ? u = c : u == 8 && f == 4 && (u = 16), ie[h] = u == 4 ? 2 : u, u & 7 && (f = u), c = u;
    }
    for (let h = r, c = a, f = a; h < l; h++) {
      let u = ie[h];
      if (u == 128)
        h < l - 1 && c == ie[h + 1] && c & 24 ? u = ie[h] = c : ie[h] = 256;
      else if (u == 64) {
        let d = h + 1;
        for (; d < l && ie[d] == 64; )
          d++;
        let p = h && c == 8 || d < t && ie[d] == 8 ? f == 1 ? 1 : 8 : 256;
        for (let g = h; g < d; g++)
          ie[g] = p;
        h = d - 1;
      } else
        u == 8 && f == 1 && (ie[h] = 1);
      c = u, u & 7 && (f = u);
    }
  }
}
function sp(n, e, t, i, s) {
  let o = s == 1 ? 2 : 1;
  for (let r = 0, l = 0, a = 0; r <= i.length; r++) {
    let h = r ? i[r - 1].to : e, c = r < i.length ? i[r].from : t;
    for (let f = h, u, d, p; f < c; f++)
      if (d = er[u = n.charCodeAt(f)])
        if (d < 0) {
          for (let g = l - 3; g >= 0; g -= 3)
            if (st[g + 1] == -d) {
              let m = st[g + 2], y = m & 2 ? s : m & 4 ? m & 1 ? o : s : 0;
              y && (ie[f] = ie[st[g]] = y), l = g;
              break;
            }
        } else {
          if (st.length == 189)
            break;
          st[l++] = f, st[l++] = u, st[l++] = a;
        }
      else if ((p = ie[f]) == 2 || p == 1) {
        let g = p == s;
        a = g ? 0 : 1;
        for (let m = l - 3; m >= 0; m -= 3) {
          let y = st[m + 2];
          if (y & 2)
            break;
          if (g)
            st[m + 2] |= 2;
          else {
            if (y & 4)
              break;
            st[m + 2] |= 4;
          }
        }
      }
  }
}
function op(n, e, t, i) {
  for (let s = 0, o = i; s <= t.length; s++) {
    let r = s ? t[s - 1].to : n, l = s < t.length ? t[s].from : e;
    for (let a = r; a < l; ) {
      let h = ie[a];
      if (h == 256) {
        let c = a + 1;
        for (; ; )
          if (c == l) {
            if (s == t.length)
              break;
            c = t[s++].to, l = s < t.length ? t[s].from : e;
          } else if (ie[c] == 256)
            c++;
          else
            break;
        let f = o == 1, u = (c < e ? ie[c] : i) == 1, d = f == u ? f ? 1 : 2 : i;
        for (let p = c, g = s, m = g ? t[g - 1].to : n; p > a; )
          p == m && (p = t[--g].from, m = g ? t[g - 1].to : n), ie[--p] = d;
        a = c;
      } else
        o = h, a++;
    }
  }
}
function tr(n, e, t, i, s, o, r) {
  let l = i % 2 ? 2 : 1;
  if (i % 2 == s % 2)
    for (let a = e, h = 0; a < t; ) {
      let c = true, f = false;
      if (h == o.length || a < o[h].from) {
        let g = ie[a];
        g != l && (c = false, f = g == 16);
      }
      let u = !c && l == 1 ? [] : null, d = c ? i : i + 1, p = a;
      e:
        for (; ; )
          if (h < o.length && p == o[h].from) {
            if (f)
              break e;
            let g = o[h];
            if (!c)
              for (let m = g.to, y = h + 1; ; ) {
                if (m == t)
                  break e;
                if (y < o.length && o[y].from == m)
                  m = o[y++].to;
                else {
                  if (ie[m] == l)
                    break e;
                  break;
                }
              }
            if (h++, u)
              u.push(g);
            else {
              g.from > a && r.push(new Nt(a, g.from, d));
              let m = g.direction == ai != !(d % 2);
              ir(n, m ? i + 1 : i, s, g.inner, g.from, g.to, r), a = g.to;
            }
            p = g.to;
          } else {
            if (p == t || (c ? ie[p] != l : ie[p] == l))
              break;
            p++;
          }
      u ? tr(n, a, p, i + 1, s, u, r) : a < p && r.push(new Nt(a, p, d)), a = p;
    }
  else
    for (let a = t, h = o.length; a > e; ) {
      let c = true, f = false;
      if (!h || a > o[h - 1].to) {
        let g = ie[a - 1];
        g != l && (c = false, f = g == 16);
      }
      let u = !c && l == 1 ? [] : null, d = c ? i : i + 1, p = a;
      e:
        for (; ; )
          if (h && p == o[h - 1].to) {
            if (f)
              break e;
            let g = o[--h];
            if (!c)
              for (let m = g.from, y = h; ; ) {
                if (m == e)
                  break e;
                if (y && o[y - 1].to == m)
                  m = o[--y].from;
                else {
                  if (ie[m - 1] == l)
                    break e;
                  break;
                }
              }
            if (u)
              u.push(g);
            else {
              g.to < a && r.push(new Nt(g.to, a, d));
              let m = g.direction == ai != !(d % 2);
              ir(n, m ? i + 1 : i, s, g.inner, g.from, g.to, r), a = g.from;
            }
            p = g.from;
          } else {
            if (p == e || (c ? ie[p - 1] != l : ie[p - 1] == l))
              break;
            p--;
          }
      u ? tr(n, p, a, i + 1, s, u, r) : p < a && r.push(new Nt(p, a, d)), a = p;
    }
}
function ir(n, e, t, i, s, o, r) {
  let l = e % 2 ? 2 : 1;
  np(n, s, o, i, l), sp(n, s, o, i, l), op(s, o, i, l), tr(n, s, o, e, t, i, r);
}
function rp(n, e, t) {
  if (!n)
    return [new Nt(0, 0, e == Fr ? 1 : 0)];
  if (e == ai && !t.length && !ip.test(n))
    return Qh(n.length);
  if (t.length)
    for (; n.length > ie.length; )
      ie[ie.length] = 256;
  let i = [], s = e == ai ? 0 : 1;
  return ir(n, s, s, t, 0, n.length, i), i;
}
function Qh(n) {
  return [new Nt(0, n, 0)];
}
let Zh = "";
function lp(n, e, t, i, s) {
  var o;
  let r = i.head - n.from, l = Nt.find(e, r, (o = i.bidiLevel) !== null && o !== void 0 ? o : -1, i.assoc), a = e[l], h = a.side(s, t);
  if (r == h) {
    let u = l += s ? 1 : -1;
    if (u < 0 || u >= e.length)
      return null;
    a = e[l = u], r = a.side(!s, t), h = a.side(s, t);
  }
  let c = xe(n.text, r, a.forward(s, t));
  (c < a.from || c > a.to) && (c = h), Zh = n.text.slice(Math.min(r, c), Math.max(r, c));
  let f = l == (s ? e.length - 1 : 0) ? null : e[l + (s ? 1 : -1)];
  return f && c == h && f.level + (s ? 0 : 1) < a.level ? k.cursor(f.side(!s, t) + n.from, f.forward(s, t) ? 1 : -1, f.level) : k.cursor(c + n.from, a.forward(s, t) ? -1 : 1, a.level);
}
function ap(n, e, t) {
  for (let i = e; i < t; i++) {
    let s = Jh(n.charCodeAt(i));
    if (s == 1)
      return ai;
    if (s == 2 || s == 4)
      return Fr;
  }
  return ai;
}
const ec = $.define(), tc = $.define(), ic = $.define(), nc = $.define(), nr = $.define(), sc = $.define(), oc = $.define(), zr = $.define(), Hr = $.define(), rc = $.define({ combine: (n) => n.some((e) => e) }), lc = $.define({ combine: (n) => n.some((e) => e) }), ac = $.define();
class Si {
  constructor(e, t = "nearest", i = "nearest", s = 5, o = 5, r = false) {
    this.range = e, this.y = t, this.x = i, this.yMargin = s, this.xMargin = o, this.isSnapshot = r;
  }
  map(e) {
    return e.empty ? this : new Si(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new Si(k.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const Wn = H.define({ map: (n, e) => n.map(e) }), hc = H.define();
function Le(n, e, t) {
  let i = n.facet(nc);
  i.length ? i[0](e) : window.onerror ? window.onerror(String(e), t, void 0, void 0, e) : t ? console.error(t + ":", e) : console.error(e);
}
const _t = $.define({ combine: (n) => n.length ? n[0] : true });
let hp = 0;
const Yi = $.define();
class ae {
  constructor(e, t, i, s, o) {
    this.id = e, this.create = t, this.domEventHandlers = i, this.domEventObservers = s, this.extension = o(this);
  }
  static define(e, t) {
    const { eventHandlers: i, eventObservers: s, provide: o, decorations: r } = t || {};
    return new ae(hp++, e, i, s, (l) => {
      let a = [Yi.of(l)];
      return r && a.push(mn.of((h) => {
        let c = h.plugin(l);
        return c ? r(c) : F.none;
      })), o && a.push(o(l)), a;
    });
  }
  static fromClass(e, t) {
    return ae.define((i) => new e(i), t);
  }
}
class ao {
  constructor(e) {
    this.spec = e, this.mustUpdate = null, this.value = null;
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(t);
          } catch (i) {
            if (Le(t.state, i, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.create(e);
      } catch (t) {
        Le(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        Le(e.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const cc = $.define(), Wr = $.define(), mn = $.define(), fc = $.define(), qr = $.define(), uc = $.define();
function Fl(n, e) {
  let t = n.state.facet(uc);
  if (!t.length)
    return t;
  let i = t.map((o) => o instanceof Function ? o(n) : o), s = [];
  return X.spans(i, e.from, e.to, { point() {
  }, span(o, r, l, a) {
    let h = o - e.from, c = r - e.from, f = s;
    for (let u = l.length - 1; u >= 0; u--, a--) {
      let d = l[u].spec.bidiIsolate, p;
      if (d == null && (d = ap(e.text, h, c)), a > 0 && f.length && (p = f[f.length - 1]).to == h && p.direction == d)
        p.to = c, f = p.inner;
      else {
        let g = { from: h, to: c, direction: d, inner: [] };
        f.push(g), f = g.inner;
      }
    }
  } }), s;
}
const dc = $.define();
function Ur(n) {
  let e = 0, t = 0, i = 0, s = 0;
  for (let o of n.state.facet(dc)) {
    let r = o(n);
    r && (r.left != null && (e = Math.max(e, r.left)), r.right != null && (t = Math.max(t, r.right)), r.top != null && (i = Math.max(i, r.top)), r.bottom != null && (s = Math.max(s, r.bottom)));
  }
  return { left: e, right: t, top: i, bottom: s };
}
const Ji = $.define();
class Ke {
  constructor(e, t, i, s) {
    this.fromA = e, this.toA = t, this.fromB = i, this.toB = s;
  }
  join(e) {
    return new Ke(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let t = e.length, i = this;
    for (; t > 0; t--) {
      let s = e[t - 1];
      if (!(s.fromA > i.toA)) {
        if (s.toA < i.fromA)
          break;
        i = i.join(s), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, i), e;
  }
  static extendWithRanges(e, t) {
    if (t.length == 0)
      return e;
    let i = [];
    for (let s = 0, o = 0, r = 0, l = 0; ; s++) {
      let a = s == e.length ? null : e[s], h = r - l, c = a ? a.fromB : 1e9;
      for (; o < t.length && t[o] < c; ) {
        let f = t[o], u = t[o + 1], d = Math.max(l, f), p = Math.min(c, u);
        if (d <= p && new Ke(d + h, p + h, d, p).addToSet(i), u > c)
          break;
        o += 2;
      }
      if (!a)
        return i;
      new Ke(a.fromA, a.toA, a.fromB, a.toB).addToSet(i), r = a.toA, l = a.toB;
    }
  }
}
class _s {
  constructor(e, t, i) {
    this.view = e, this.state = t, this.transactions = i, this.flags = 0, this.startState = e.state, this.changes = ue.empty(this.startState.doc.length);
    for (let o of i)
      this.changes = this.changes.compose(o.changes);
    let s = [];
    this.changes.iterChangedRanges((o, r, l, a) => s.push(new Ke(o, r, l, a))), this.changedRanges = s;
  }
  static create(e, t, i) {
    return new _s(e, t, i);
  }
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
class zl extends ne {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(e) {
    super(), this.view = e, this.decorations = [], this.dynamicDecorationMap = [false], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.editContextFormatting = F.none, this.lastCompositionAfterCursor = false, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = false, this.lastUpdate = Date.now(), this.setDOM(e.contentDOM), this.children = [new fe()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new Ke(0, 0, 0, e.state.doc.length)], 0, null);
  }
  update(e) {
    var t;
    let i = e.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: h, toA: c }) => c < this.minWidthFrom || h > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let s = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((t = this.domChanged) === null || t === void 0) && t.newSel ? s = this.domChanged.newSel.head : !gp(e.changes, this.hasComposition) && !e.selectionSet && (s = e.state.selection.main.head));
    let o = s > -1 ? fp(this.view, e.changes, s) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: h, to: c } = this.hasComposition;
      i = new Ke(h, c, e.changes.mapPos(h, -1), e.changes.mapPos(c, 1)).addToSet(i.slice());
    }
    this.hasComposition = o ? { from: o.range.fromB, to: o.range.toB } : null, (V.ie || V.chrome) && !o && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = true);
    let r = this.decorations, l = this.updateDeco(), a = pp(r, l, e.changes);
    return i = Ke.extendWithRanges(i, a), !(this.flags & 7) && i.length == 0 ? false : (this.updateInner(i, e.startState.doc.length, o), e.transactions.length && (this.lastUpdate = Date.now()), true);
  }
  updateInner(e, t, i) {
    this.view.viewState.mustMeasureContent = true, this.updateChildren(e, t, i);
    let { observer: s } = this.view;
    s.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let r = V.chrome || V.ios ? { node: s.selectionRange.focusNode, written: false } : void 0;
      this.sync(this.view, r), this.flags &= -8, r && (r.written || s.selectionRange.focusNode != r.node) && (this.forceSelection = true), this.dom.style.height = "";
    }), this.markedForComposition.forEach((r) => r.flags &= -9);
    let o = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let r of this.children)
        r instanceof St && r.widget instanceof Zo && o.push(r.dom);
    s.updateGaps(o);
  }
  updateChildren(e, t, i) {
    let s = i ? i.range.addToSet(e.slice()) : e, o = this.childCursor(t);
    for (let r = s.length - 1; ; r--) {
      let l = r >= 0 ? s[r] : null;
      if (!l)
        break;
      let { fromA: a, toA: h, fromB: c, toB: f } = l, u, d, p, g;
      if (i && i.range.fromB < f && i.range.toB > c) {
        let S = rn.build(this.view.state.doc, c, i.range.fromB, this.decorations, this.dynamicDecorationMap), _ = rn.build(this.view.state.doc, i.range.toB, f, this.decorations, this.dynamicDecorationMap);
        d = S.breakAtStart, p = S.openStart, g = _.openEnd;
        let x = this.compositionView(i);
        _.breakAtStart ? x.breakAfter = 1 : _.content.length && x.merge(x.length, x.length, _.content[0], false, _.openStart, 0) && (x.breakAfter = _.content[0].breakAfter, _.content.shift()), S.content.length && x.merge(0, 0, S.content[S.content.length - 1], true, 0, S.openEnd) && S.content.pop(), u = S.content.concat(x).concat(_.content);
      } else
        ({ content: u, breakAtStart: d, openStart: p, openEnd: g } = rn.build(this.view.state.doc, c, f, this.decorations, this.dynamicDecorationMap));
      let { i: m, off: y } = o.findPos(h, 1), { i: w, off: M } = o.findPos(a, -1);
      zh(this, w, M, m, y, u, d, p, g);
    }
    i && this.fixCompositionDOM(i);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions)
      for (let i of t.effects)
        i.is(hc) && (this.editContextFormatting = i.value);
  }
  compositionView(e) {
    let t = new Qe(e.text.nodeValue);
    t.flags |= 8;
    for (let { deco: s } of e.marks)
      t = new At(s, [t], t.length);
    let i = new fe();
    return i.append(t, 0), i;
  }
  fixCompositionDOM(e) {
    let t = (o, r) => {
      r.flags |= 8 | (r.children.some((a) => a.flags & 7) ? 1 : 0), this.markedForComposition.add(r);
      let l = ne.get(o);
      l && l != r && (l.dom = null), r.setDOM(o);
    }, i = this.childPos(e.range.fromB, 1), s = this.children[i.i];
    t(e.line, s);
    for (let o = e.marks.length - 1; o >= -1; o--)
      i = s.childPos(i.off, 1), s = s.children[i.i], t(o >= 0 ? e.marks[o].node : e.text, s);
  }
  updateSelection(e = false, t = false) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let i = this.view.root.activeElement, s = i == this.dom, o = !s && !(this.view.state.facet(_t) || this.dom.tabIndex > -1) && fs(this.dom, this.view.observer.selectionRange) && !(i && this.dom.contains(i));
    if (!(s || t || o))
      return;
    let r = this.forceSelection;
    this.forceSelection = false;
    let l = this.view.state.selection.main, a = this.moveToLine(this.domAtPos(l.anchor)), h = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
    if (V.gecko && l.empty && !this.hasComposition && cp(a)) {
      let f = document.createTextNode("");
      this.view.observer.ignore(() => a.node.insertBefore(f, a.node.childNodes[a.offset] || null)), a = h = new _e(f, 0), r = true;
    }
    let c = this.view.observer.selectionRange;
    (r || !c.focusNode || (!on(a.node, a.offset, c.anchorNode, c.anchorOffset) || !on(h.node, h.offset, c.focusNode, c.focusOffset)) && !this.suppressWidgetCursorChange(c, l)) && (this.view.observer.ignore(() => {
      V.android && V.chrome && this.dom.contains(c.focusNode) && mp(c.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: true }));
      let f = pn(this.view.root);
      if (f)
        if (l.empty) {
          if (V.gecko) {
            let u = up(a.node, a.offset);
            if (u && u != 3) {
              let d = (u == 1 ? Vh : $h)(a.node, a.offset);
              d && (a = new _e(d.node, d.offset));
            }
          }
          f.collapse(a.node, a.offset), l.bidiLevel != null && f.caretBidiLevel !== void 0 && (f.caretBidiLevel = l.bidiLevel);
        } else if (f.extend) {
          f.collapse(a.node, a.offset);
          try {
            f.extend(h.node, h.offset);
          } catch {
          }
        } else {
          let u = document.createRange();
          l.anchor > l.head && ([a, h] = [h, a]), u.setEnd(h.node, h.offset), u.setStart(a.node, a.offset), f.removeAllRanges(), f.addRange(u);
        }
      o && this.view.root.activeElement == this.dom && (this.dom.blur(), i && i.focus());
    }), this.view.observer.setSelectionRange(a, h)), this.impreciseAnchor = a.precise ? null : new _e(c.anchorNode, c.anchorOffset), this.impreciseHead = h.precise ? null : new _e(c.focusNode, c.focusOffset);
  }
  suppressWidgetCursorChange(e, t) {
    return this.hasComposition && t.empty && on(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, t = e.state.selection.main, i = pn(e.root), { anchorNode: s, anchorOffset: o } = e.observer.selectionRange;
    if (!i || !t.empty || !t.assoc || !i.modify)
      return;
    let r = fe.find(this, t.head);
    if (!r)
      return;
    let l = r.posAtStart;
    if (t.head == l || t.head == l + r.length)
      return;
    let a = this.coordsAt(t.head, -1), h = this.coordsAt(t.head, 1);
    if (!a || !h || a.bottom > h.top)
      return;
    let c = this.domAtPos(t.head + t.assoc);
    i.collapse(c.node, c.offset), i.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let f = e.observer.selectionRange;
    e.docView.posFromDOM(f.anchorNode, f.anchorOffset) != t.from && i.collapse(s, o);
  }
  moveToLine(e) {
    let t = this.dom, i;
    if (e.node != t)
      return e;
    for (let s = e.offset; !i && s < t.childNodes.length; s++) {
      let o = ne.get(t.childNodes[s]);
      o instanceof fe && (i = o.domAtPos(0));
    }
    for (let s = e.offset - 1; !i && s >= 0; s--) {
      let o = ne.get(t.childNodes[s]);
      o instanceof fe && (i = o.domAtPos(o.length));
    }
    return i ? new _e(i.node, i.offset, true) : e;
  }
  nearest(e) {
    for (let t = e; t; ) {
      let i = ne.get(t);
      if (i && i.rootView == this)
        return i;
      t = t.parentNode;
    }
    return null;
  }
  posFromDOM(e, t) {
    let i = this.nearest(e);
    if (!i)
      throw new RangeError("Trying to find position for a DOM position outside of the document");
    return i.localPosFromDOM(e, t) + i.posAtStart;
  }
  domAtPos(e) {
    let { i: t, off: i } = this.childCursor().findPos(e, -1);
    for (; t < this.children.length - 1; ) {
      let s = this.children[t];
      if (i < s.length || s instanceof fe)
        break;
      t++, i = 0;
    }
    return this.children[t].domAtPos(i);
  }
  coordsAt(e, t) {
    let i = null, s = 0;
    for (let o = this.length, r = this.children.length - 1; r >= 0; r--) {
      let l = this.children[r], a = o - l.breakAfter, h = a - l.length;
      if (a < e)
        break;
      if (h <= e && (h < e || l.covers(-1)) && (a > e || l.covers(1)) && (!i || l instanceof fe && !(i instanceof fe && t >= 0)))
        i = l, s = h;
      else if (i && h == e && a == e && l instanceof St && Math.abs(t) < 2) {
        if (l.deco.startSide < 0)
          break;
        r && (i = null);
      }
      o = h;
    }
    return i ? i.coordsAt(e - s, t) : null;
  }
  coordsForChar(e) {
    let { i: t, off: i } = this.childPos(e, 1), s = this.children[t];
    if (!(s instanceof fe))
      return null;
    for (; s.children.length; ) {
      let { i: l, off: a } = s.childPos(i, 1);
      for (; ; l++) {
        if (l == s.children.length)
          return null;
        if ((s = s.children[l]).length)
          break;
      }
      i = a;
    }
    if (!(s instanceof Qe))
      return null;
    let o = xe(s.text, i);
    if (o == i)
      return null;
    let r = li(s.dom, i, o).getClientRects();
    for (let l = 0; l < r.length; l++) {
      let a = r[l];
      if (l == r.length - 1 || a.top < a.bottom && a.left < a.right)
        return a;
    }
    return null;
  }
  measureVisibleLineHeights(e) {
    let t = [], { from: i, to: s } = e, o = this.view.contentDOM.clientWidth, r = o > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == oe.LTR;
    for (let h = 0, c = 0; c < this.children.length; c++) {
      let f = this.children[c], u = h + f.length;
      if (u > s)
        break;
      if (h >= i) {
        let d = f.dom.getBoundingClientRect();
        if (t.push(d.height), r) {
          let p = f.dom.lastChild, g = p ? Di(p) : [];
          if (g.length) {
            let m = g[g.length - 1], y = a ? m.right - d.left : d.right - m.left;
            y > l && (l = y, this.minWidth = o, this.minWidthFrom = h, this.minWidthTo = u);
          }
        }
      }
      h = u + f.breakAfter;
    }
    return t;
  }
  textDirectionAt(e) {
    let { i: t } = this.childPos(e, 1);
    return getComputedStyle(this.children[t].dom).direction == "rtl" ? oe.RTL : oe.LTR;
  }
  measureTextSize() {
    for (let o of this.children)
      if (o instanceof fe) {
        let r = o.measureTextSize();
        if (r)
          return r;
      }
    let e = document.createElement("div"), t, i, s;
    return e.className = "cm-line", e.style.width = "99999px", e.style.position = "absolute", e.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(e);
      let o = Di(e.firstChild)[0];
      t = e.getBoundingClientRect().height, i = o ? o.width / 27 : 7, s = o ? o.height : t, e.remove();
    }), { lineHeight: t, charWidth: i, textHeight: s };
  }
  childCursor(e = this.length) {
    let t = this.children.length;
    return t && (e -= this.children[--t].length), new Fh(this.children, e, t);
  }
  computeBlockGapDeco() {
    let e = [], t = this.view.viewState;
    for (let i = 0, s = 0; ; s++) {
      let o = s == t.viewports.length ? null : t.viewports[s], r = o ? o.from - 1 : this.length;
      if (r > i) {
        let l = (t.lineBlockAt(r).bottom - t.lineBlockAt(i).top) / this.view.scaleY;
        e.push(F.replace({ widget: new Zo(l), block: true, inclusive: true, isBlockGap: true }).range(i, r));
      }
      if (!o)
        break;
      i = o.to + 1;
    }
    return F.set(e);
  }
  updateDeco() {
    let e = 1, t = this.view.state.facet(mn).map((o) => (this.dynamicDecorationMap[e++] = typeof o == "function") ? o(this.view) : o), i = false, s = this.view.state.facet(fc).map((o, r) => {
      let l = typeof o == "function";
      return l && (i = true), l ? o(this.view) : o;
    });
    for (s.length && (this.dynamicDecorationMap[e++] = i, t.push(X.join(s))), this.decorations = [this.editContextFormatting, ...t, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; e < this.decorations.length; )
      this.dynamicDecorationMap[e++] = false;
    return this.decorations;
  }
  scrollIntoView(e) {
    if (e.isSnapshot) {
      let h = this.view.viewState.lineBlockAt(e.range.head);
      this.view.scrollDOM.scrollTop = h.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
      return;
    }
    for (let h of this.view.state.facet(ac))
      try {
        if (h(this.view, e.range, e))
          return true;
      } catch (c) {
        Le(this.view.state, c, "scroll handler");
      }
    let { range: t } = e, i = this.coordsAt(t.head, t.empty ? t.assoc : t.head > t.anchor ? -1 : 1), s;
    if (!i)
      return;
    !t.empty && (s = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) && (i = { left: Math.min(i.left, s.left), top: Math.min(i.top, s.top), right: Math.max(i.right, s.right), bottom: Math.max(i.bottom, s.bottom) });
    let o = Ur(this.view), r = { left: i.left - o.left, top: i.top - o.top, right: i.right + o.right, bottom: i.bottom + o.bottom }, { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    qd(this.view.scrollDOM, r, t.head < t.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, l), -l), Math.max(Math.min(e.yMargin, a), -a), this.view.textDirection == oe.LTR);
  }
}
function cp(n) {
  return n.node.nodeType == 1 && n.node.firstChild && (n.offset == 0 || n.node.childNodes[n.offset - 1].contentEditable == "false") && (n.offset == n.node.childNodes.length || n.node.childNodes[n.offset].contentEditable == "false");
}
function pc(n, e) {
  let t = n.observer.selectionRange;
  if (!t.focusNode)
    return null;
  let i = Vh(t.focusNode, t.focusOffset), s = $h(t.focusNode, t.focusOffset), o = i || s;
  if (s && i && s.node != i.node) {
    let l = ne.get(s.node);
    if (!l || l instanceof Qe && l.text != s.node.nodeValue)
      o = s;
    else if (n.docView.lastCompositionAfterCursor) {
      let a = ne.get(i.node);
      !a || a instanceof Qe && a.text != i.node.nodeValue || (o = s);
    }
  }
  if (n.docView.lastCompositionAfterCursor = o != i, !o)
    return null;
  let r = e - o.offset;
  return { from: r, to: r + o.node.nodeValue.length, node: o.node };
}
function fp(n, e, t) {
  let i = pc(n, t);
  if (!i)
    return null;
  let { node: s, from: o, to: r } = i, l = s.nodeValue;
  if (/[\n\r]/.test(l) || n.state.doc.sliceString(i.from, i.to) != l)
    return null;
  let a = e.invertedDesc, h = new Ke(a.mapPos(o), a.mapPos(r), o, r), c = [];
  for (let f = s.parentNode; ; f = f.parentNode) {
    let u = ne.get(f);
    if (u instanceof At)
      c.push({ node: f, deco: u.mark });
    else {
      if (u instanceof fe || f.nodeName == "DIV" && f.parentNode == n.contentDOM)
        return { range: h, text: s, marks: c, line: f };
      if (f != n.contentDOM)
        c.push({ node: f, deco: new En({ inclusive: true, attributes: Qd(f), tagName: f.tagName.toLowerCase() }) });
      else
        return null;
    }
  }
}
function up(n, e) {
  return n.nodeType != 1 ? 0 : (e && n.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < n.childNodes.length && n.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let dp = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    us(e, t, this.changes);
  }
  comparePoint(e, t) {
    us(e, t, this.changes);
  }
  boundChange(e) {
    us(e, e, this.changes);
  }
};
function pp(n, e, t) {
  let i = new dp();
  return X.compare(n, e, t, i), i.changes;
}
function mp(n, e) {
  for (let t = n; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false")
      return true;
  return false;
}
function gp(n, e) {
  let t = false;
  return e && n.iterChangedRanges((i, s) => {
    i < e.to && s > e.from && (t = true);
  }), t;
}
function bp(n, e, t = 1) {
  let i = n.charCategorizer(e), s = n.doc.lineAt(e), o = e - s.from;
  if (s.length == 0)
    return k.cursor(e);
  o == 0 ? t = 1 : o == s.length && (t = -1);
  let r = o, l = o;
  t < 0 ? r = xe(s.text, o, false) : l = xe(s.text, o);
  let a = i(s.text.slice(r, l));
  for (; r > 0; ) {
    let h = xe(s.text, r, false);
    if (i(s.text.slice(h, r)) != a)
      break;
    r = h;
  }
  for (; l < s.length; ) {
    let h = xe(s.text, l);
    if (i(s.text.slice(l, h)) != a)
      break;
    l = h;
  }
  return k.range(r + s.from, l + s.from);
}
function yp(n, e) {
  return e.left > n ? e.left - n : Math.max(0, n - e.right);
}
function vp(n, e) {
  return e.top > n ? e.top - n : Math.max(0, n - e.bottom);
}
function ho(n, e) {
  return n.top < e.bottom - 1 && n.bottom > e.top + 1;
}
function Hl(n, e) {
  return e < n.top ? { top: e, left: n.left, right: n.right, bottom: n.bottom } : n;
}
function Wl(n, e) {
  return e > n.bottom ? { top: n.top, left: n.left, right: n.right, bottom: e } : n;
}
function sr(n, e, t) {
  let i, s, o, r, l = false, a, h, c, f;
  for (let p = n.firstChild; p; p = p.nextSibling) {
    let g = Di(p);
    for (let m = 0; m < g.length; m++) {
      let y = g[m];
      s && ho(s, y) && (y = Hl(Wl(y, s.bottom), s.top));
      let w = yp(e, y), M = vp(t, y);
      if (w == 0 && M == 0)
        return p.nodeType == 3 ? ql(p, e, t) : sr(p, e, t);
      if (!i || r > M || r == M && o > w) {
        i = p, s = y, o = w, r = M;
        let S = M ? t < y.top ? -1 : 1 : w ? e < y.left ? -1 : 1 : 0;
        l = !S || (S > 0 ? m < g.length - 1 : m > 0);
      }
      w == 0 ? t > y.bottom && (!c || c.bottom < y.bottom) ? (a = p, c = y) : t < y.top && (!f || f.top > y.top) && (h = p, f = y) : c && ho(c, y) ? c = Wl(c, y.bottom) : f && ho(f, y) && (f = Hl(f, y.top));
    }
  }
  if (c && c.bottom >= t ? (i = a, s = c) : f && f.top <= t && (i = h, s = f), !i)
    return { node: n, offset: 0 };
  let u = Math.max(s.left, Math.min(s.right, e));
  if (i.nodeType == 3)
    return ql(i, u, t);
  if (l && i.contentEditable != "false")
    return sr(i, u, t);
  let d = Array.prototype.indexOf.call(n.childNodes, i) + (e >= (s.left + s.right) / 2 ? 1 : 0);
  return { node: n, offset: d };
}
function ql(n, e, t) {
  let i = n.nodeValue.length, s = -1, o = 1e9, r = 0;
  for (let l = 0; l < i; l++) {
    let a = li(n, l, l + 1).getClientRects();
    for (let h = 0; h < a.length; h++) {
      let c = a[h];
      if (c.top == c.bottom)
        continue;
      r || (r = e - c.left);
      let f = (c.top > t ? c.top - t : t - c.bottom) - 1;
      if (c.left - 1 <= e && c.right + 1 >= e && f < o) {
        let u = e >= (c.left + c.right) / 2, d = u;
        if ((V.chrome || V.gecko) && li(n, l).getBoundingClientRect().left == c.right && (d = !u), f <= 0)
          return { node: n, offset: l + (d ? 1 : 0) };
        s = l + (d ? 1 : 0), o = f;
      }
    }
  }
  return { node: n, offset: s > -1 ? s : r > 0 ? n.nodeValue.length : 0 };
}
function mc(n, e, t, i = -1) {
  var s, o;
  let r = n.contentDOM.getBoundingClientRect(), l = r.top + n.viewState.paddingTop, a, { docHeight: h } = n.viewState, { x: c, y: f } = e, u = f - l;
  if (u < 0)
    return 0;
  if (u > h)
    return n.state.doc.length;
  for (let S = n.viewState.heightOracle.textHeight / 2, _ = false; a = n.elementAtHeight(u), a.type != Oe.Text; )
    for (; u = i > 0 ? a.bottom + S : a.top - S, !(u >= 0 && u <= h); ) {
      if (_)
        return t ? null : 0;
      _ = true, i = -i;
    }
  f = l + u;
  let d = a.from;
  if (d < n.viewport.from)
    return n.viewport.from == 0 ? 0 : t ? null : Ul(n, r, a, c, f);
  if (d > n.viewport.to)
    return n.viewport.to == n.state.doc.length ? n.state.doc.length : t ? null : Ul(n, r, a, c, f);
  let p = n.dom.ownerDocument, g = n.root.elementFromPoint ? n.root : p, m = g.elementFromPoint(c, f);
  m && !n.contentDOM.contains(m) && (m = null), m || (c = Math.max(r.left + 1, Math.min(r.right - 1, c)), m = g.elementFromPoint(c, f), m && !n.contentDOM.contains(m) && (m = null));
  let y, w = -1;
  if (m && ((s = n.docView.nearest(m)) === null || s === void 0 ? void 0 : s.isEditable) != false) {
    if (p.caretPositionFromPoint) {
      let S = p.caretPositionFromPoint(c, f);
      S && ({ offsetNode: y, offset: w } = S);
    } else if (p.caretRangeFromPoint) {
      let S = p.caretRangeFromPoint(c, f);
      S && ({ startContainer: y, startOffset: w } = S, (!n.contentDOM.contains(y) || V.safari && wp(y, w, c) || V.chrome && xp(y, w, c)) && (y = void 0));
    }
    y && (w = Math.min(bt(y), w));
  }
  if (!y || !n.docView.dom.contains(y)) {
    let S = fe.find(n.docView, d);
    if (!S)
      return u > a.top + a.height / 2 ? a.to : a.from;
    ({ node: y, offset: w } = sr(S.dom, c, f));
  }
  let M = n.docView.nearest(y);
  if (!M)
    return null;
  if (M.isWidget && ((o = M.dom) === null || o === void 0 ? void 0 : o.nodeType) == 1) {
    let S = M.dom.getBoundingClientRect();
    return e.y < S.top || e.y <= S.bottom && e.x <= (S.left + S.right) / 2 ? M.posAtStart : M.posAtEnd;
  } else
    return M.localPosFromDOM(y, w) + M.posAtStart;
}
function Ul(n, e, t, i, s) {
  let o = Math.round((i - e.left) * n.defaultCharacterWidth);
  if (n.lineWrapping && t.height > n.defaultLineHeight * 1.5) {
    let l = n.viewState.heightOracle.textHeight, a = Math.floor((s - t.top - (n.defaultLineHeight - l) * 0.5) / l);
    o += a * n.viewState.heightOracle.lineLength;
  }
  let r = n.state.sliceDoc(t.from, t.to);
  return t.from + qo(r, o, n.state.tabSize);
}
function wp(n, e, t) {
  let i;
  if (n.nodeType != 3 || e != (i = n.nodeValue.length))
    return false;
  for (let s = n.nextSibling; s; s = s.nextSibling)
    if (s.nodeType != 1 || s.nodeName != "BR")
      return false;
  return li(n, i - 1, i).getBoundingClientRect().left > t;
}
function xp(n, e, t) {
  if (e != 0)
    return false;
  for (let s = n; ; ) {
    let o = s.parentNode;
    if (!o || o.nodeType != 1 || o.firstChild != s)
      return false;
    if (o.classList.contains("cm-line"))
      break;
    s = o;
  }
  let i = n.nodeType == 1 ? n.getBoundingClientRect() : li(n, 0, Math.max(n.nodeValue.length, 1)).getBoundingClientRect();
  return t - i.left > 5;
}
function or(n, e) {
  let t = n.lineBlockAt(e);
  if (Array.isArray(t.type)) {
    for (let i of t.type)
      if (i.to > e || i.to == e && (i.to == t.to || i.type == Oe.Text))
        return i;
  }
  return t;
}
function kp(n, e, t, i) {
  let s = or(n, e.head), o = !i || s.type != Oe.Text || !(n.lineWrapping || s.widgetLineBreaks) ? null : n.coordsAtPos(e.assoc < 0 && e.head > s.from ? e.head - 1 : e.head);
  if (o) {
    let r = n.dom.getBoundingClientRect(), l = n.textDirectionAt(s.from), a = n.posAtCoords({ x: t == (l == oe.LTR) ? r.right - 1 : r.left + 1, y: (o.top + o.bottom) / 2 });
    if (a != null)
      return k.cursor(a, t ? -1 : 1);
  }
  return k.cursor(t ? s.to : s.from, t ? -1 : 1);
}
function jl(n, e, t, i) {
  let s = n.state.doc.lineAt(e.head), o = n.bidiSpans(s), r = n.textDirectionAt(s.from);
  for (let l = e, a = null; ; ) {
    let h = lp(s, o, r, l, t), c = Zh;
    if (!h) {
      if (s.number == (t ? n.state.doc.lines : 1))
        return l;
      c = `
`, s = n.state.doc.line(s.number + (t ? 1 : -1)), o = n.bidiSpans(s), h = n.visualLineSide(s, !t);
    }
    if (a) {
      if (!a(c))
        return l;
    } else {
      if (!i)
        return h;
      a = i(c);
    }
    l = h;
  }
}
function _p(n, e, t) {
  let i = n.state.charCategorizer(e), s = i(t);
  return (o) => {
    let r = i(o);
    return s == re.Space && (s = r), s == r;
  };
}
function Sp(n, e, t, i) {
  let s = e.head, o = t ? 1 : -1;
  if (s == (t ? n.state.doc.length : 0))
    return k.cursor(s, e.assoc);
  let r = e.goalColumn, l, a = n.contentDOM.getBoundingClientRect(), h = n.coordsAtPos(s, e.assoc || -1), c = n.documentTop;
  if (h)
    r == null && (r = h.left - a.left), l = o < 0 ? h.top : h.bottom;
  else {
    let d = n.viewState.lineBlockAt(s);
    r == null && (r = Math.min(a.right - a.left, n.defaultCharacterWidth * (s - d.from))), l = (o < 0 ? d.top : d.bottom) + c;
  }
  let f = a.left + r, u = i ?? n.viewState.heightOracle.textHeight >> 1;
  for (let d = 0; ; d += 10) {
    let p = l + (u + d) * o, g = mc(n, { x: f, y: p }, false, o);
    if (p < a.top || p > a.bottom || (o < 0 ? g < s : g > s)) {
      let m = n.docView.coordsForChar(g), y = !m || p < m.top ? -1 : 1;
      return k.cursor(g, y, void 0, r);
    }
  }
}
function ds(n, e, t) {
  for (; ; ) {
    let i = 0;
    for (let s of n)
      s.between(e - 1, e + 1, (o, r, l) => {
        if (e > o && e < r) {
          let a = i || t || (e - o < r - e ? -1 : 1);
          e = a < 0 ? o : r, i = a;
        }
      });
    if (!i)
      return e;
  }
}
function co(n, e, t) {
  let i = ds(n.state.facet(qr).map((s) => s(n)), t.from, e.head > t.from ? -1 : 1);
  return i == t.from ? t : k.cursor(i, i < t.from ? 1 : -1);
}
const Xi = "\uFFFF";
class Cp {
  constructor(e, t) {
    this.points = e, this.text = "", this.lineSeparator = t.facet(U.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += Xi;
  }
  readRange(e, t) {
    if (!e)
      return this;
    let i = e.parentNode;
    for (let s = e; ; ) {
      this.findPointBefore(i, s);
      let o = this.text.length;
      this.readNode(s);
      let r = s.nextSibling;
      if (r == t)
        break;
      let l = ne.get(s), a = ne.get(r);
      (l && a ? l.breakAfter : (l ? l.breakAfter : xs(s)) || xs(r) && (s.nodeName != "BR" || s.cmIgnore) && this.text.length > o) && this.lineBreak(), s = r;
    }
    return this.findPointBefore(i, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let i of this.points)
      i.node == e && (i.pos = this.text.length + Math.min(i.offset, t.length));
    for (let i = 0, s = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let o = -1, r = 1, l;
      if (this.lineSeparator ? (o = t.indexOf(this.lineSeparator, i), r = this.lineSeparator.length) : (l = s.exec(t)) && (o = l.index, r = l[0].length), this.append(t.slice(i, o < 0 ? t.length : o)), o < 0)
        break;
      if (this.lineBreak(), r > 1)
        for (let a of this.points)
          a.node == e && a.pos > this.text.length && (a.pos -= r - 1);
      i = o + r;
    }
  }
  readNode(e) {
    if (e.cmIgnore)
      return;
    let t = ne.get(e), i = t && t.overrideDOMText;
    if (i != null) {
      this.findPointInside(e, i.length);
      for (let s = i.iter(); !s.next().done; )
        s.lineBreak ? this.lineBreak() : this.append(s.value);
    } else
      e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let i of this.points)
      i.node == e && e.childNodes[i.offset] == t && (i.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let i of this.points)
      (e.nodeType == 3 ? i.node == e : e.contains(i.node)) && (i.pos = this.text.length + (Ap(e, i.node, i.offset) ? t : 0));
  }
}
function Ap(n, e, t) {
  for (; ; ) {
    if (!e || t < bt(e))
      return false;
    if (e == n)
      return true;
    t = ri(e) + 1, e = e.parentNode;
  }
}
class Kl {
  constructor(e, t) {
    this.node = e, this.offset = t, this.pos = -1;
  }
}
class Mp {
  constructor(e, t, i, s) {
    this.typeOver = s, this.bounds = null, this.text = "", this.domChanged = t > -1;
    let { impreciseHead: o, impreciseAnchor: r } = e.docView;
    if (e.state.readOnly && t > -1)
      this.newSel = null;
    else if (t > -1 && (this.bounds = e.docView.domBoundsAround(t, i, 0))) {
      let l = o || r ? [] : Op(e), a = new Cp(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = Ep(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, a = o && o.node == l.focusNode && o.offset == l.focusOffset || !Ko(e.contentDOM, l.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), h = r && r.node == l.anchorNode && r.offset == l.anchorOffset || !Ko(e.contentDOM, l.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset), c = e.viewport;
      if ((V.ios || V.chrome) && e.state.selection.main.empty && a != h && (c.from > 0 || c.to < e.state.doc.length)) {
        let f = Math.min(a, h), u = Math.max(a, h), d = c.from - f, p = c.to - u;
        (d == 0 || d == 1 || f == 0) && (p == 0 || p == -1 || u == e.state.doc.length) && (a = 0, h = e.state.doc.length);
      }
      this.newSel = k.single(h, a);
    }
  }
}
function gc(n, e) {
  let t, { newSel: i } = e, s = n.state.selection.main, o = n.inputState.lastKeyTime > Date.now() - 100 ? n.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: r, to: l } = e.bounds, a = s.from, h = null;
    (o === 8 || V.android && e.text.length < l - r) && (a = s.to, h = "end");
    let c = Tp(n.state.doc.sliceString(r, l, Xi), e.text, a - r, h);
    c && (V.chrome && o == 13 && c.toB == c.from + 2 && e.text.slice(c.from, c.toB) == Xi + Xi && c.toB--, t = { from: r + c.from, to: r + c.toA, insert: Q.of(e.text.slice(c.from, c.toB).split(Xi)) });
  } else
    i && (!n.hasFocus && n.state.facet(_t) || i.main.eq(s)) && (i = null);
  if (!t && !i)
    return false;
  if (!t && e.typeOver && !s.empty && i && i.main.empty ? t = { from: s.from, to: s.to, insert: n.state.doc.slice(s.from, s.to) } : (V.mac || V.android) && t && t.from == t.to && t.from == s.head - 1 && /^\. ?$/.test(t.insert.toString()) && n.contentDOM.getAttribute("autocorrect") == "off" ? (i && t.insert.length == 2 && (i = k.single(i.main.anchor - 1, i.main.head - 1)), t = { from: t.from, to: t.to, insert: Q.of([t.insert.toString().replace(".", " ")]) }) : t && t.from >= s.from && t.to <= s.to && (t.from != s.from || t.to != s.to) && s.to - s.from - (t.to - t.from) <= 4 ? t = { from: s.from, to: s.to, insert: n.state.doc.slice(s.from, t.from).append(t.insert).append(n.state.doc.slice(t.to, s.to)) } : V.chrome && t && t.from == t.to && t.from == s.head && t.insert.toString() == `
 ` && n.lineWrapping && (i && (i = k.single(i.main.anchor - 1, i.main.head - 1)), t = { from: s.from, to: s.to, insert: Q.of([" "]) }), t)
    return jr(n, t, i, o);
  if (i && !i.main.eq(s)) {
    let r = false, l = "select";
    return n.inputState.lastSelectionTime > Date.now() - 50 && (n.inputState.lastSelectionOrigin == "select" && (r = true), l = n.inputState.lastSelectionOrigin), n.dispatch({ selection: i, scrollIntoView: r, userEvent: l }), true;
  } else
    return false;
}
function jr(n, e, t, i = -1) {
  if (V.ios && n.inputState.flushIOSKey(e))
    return true;
  let s = n.state.selection.main;
  if (V.android && (e.to == s.to && (e.from == s.from || e.from == s.from - 1 && n.state.sliceDoc(e.from, s.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && _i(n.contentDOM, "Enter", 13) || (e.from == s.from - 1 && e.to == s.to && e.insert.length == 0 || i == 8 && e.insert.length < e.to - e.from && e.to > s.head) && _i(n.contentDOM, "Backspace", 8) || e.from == s.from && e.to == s.to + 1 && e.insert.length == 0 && _i(n.contentDOM, "Delete", 46)))
    return true;
  let o = e.insert.toString();
  n.inputState.composing >= 0 && n.inputState.composing++;
  let r, l = () => r || (r = Dp(n, e, t));
  return n.state.facet(sc).some((a) => a(n, e.from, e.to, o, l)) || n.dispatch(l()), true;
}
function Dp(n, e, t) {
  let i, s = n.state, o = s.selection.main;
  if (e.from >= o.from && e.to <= o.to && e.to - e.from >= (o.to - o.from) / 3 && (!t || t.main.empty && t.main.from == e.from + e.insert.length) && n.inputState.composing < 0) {
    let l = o.from < e.from ? s.sliceDoc(o.from, e.from) : "", a = o.to > e.to ? s.sliceDoc(e.to, o.to) : "";
    i = s.replaceSelection(n.state.toText(l + e.insert.sliceString(0, void 0, n.state.lineBreak) + a));
  } else {
    let l = s.changes(e), a = t && t.main.to <= l.newLength ? t.main : void 0;
    if (s.selection.ranges.length > 1 && n.inputState.composing >= 0 && e.to <= o.to && e.to >= o.to - 10) {
      let h = n.state.sliceDoc(e.from, e.to), c, f = t && pc(n, t.main.head);
      if (f) {
        let p = e.insert.length - (e.to - e.from);
        c = { from: f.from, to: f.to - p };
      } else
        c = n.state.doc.lineAt(o.head);
      let u = o.to - e.to, d = o.to - o.from;
      i = s.changeByRange((p) => {
        if (p.from == o.from && p.to == o.to)
          return { changes: l, range: a || p.map(l) };
        let g = p.to - u, m = g - h.length;
        if (p.to - p.from != d || n.state.sliceDoc(m, g) != h || p.to >= c.from && p.from <= c.to)
          return { range: p };
        let y = s.changes({ from: m, to: g, insert: e.insert }), w = p.to - o.to;
        return { changes: y, range: a ? k.range(Math.max(0, a.anchor + w), Math.max(0, a.head + w)) : p.map(y) };
      });
    } else
      i = { changes: l, selection: a && s.selection.replaceRange(a) };
  }
  let r = "input.type";
  return (n.composing || n.inputState.compositionPendingChange && n.inputState.compositionEndedAt > Date.now() - 50) && (n.inputState.compositionPendingChange = false, r += ".compose", n.inputState.compositionFirstChange && (r += ".start", n.inputState.compositionFirstChange = false)), s.update(i, { userEvent: r, scrollIntoView: true });
}
function Tp(n, e, t, i) {
  let s = Math.min(n.length, e.length), o = 0;
  for (; o < s && n.charCodeAt(o) == e.charCodeAt(o); )
    o++;
  if (o == s && n.length == e.length)
    return null;
  let r = n.length, l = e.length;
  for (; r > 0 && l > 0 && n.charCodeAt(r - 1) == e.charCodeAt(l - 1); )
    r--, l--;
  if (i == "end") {
    let a = Math.max(0, o - Math.min(r, l));
    t -= r + a - o;
  }
  if (r < o && n.length < e.length) {
    let a = t <= o && t >= r ? o - t : 0;
    o -= a, l = o + (l - r), r = o;
  } else if (l < o) {
    let a = t <= o && t >= l ? o - t : 0;
    o -= a, r = o + (r - l), l = o;
  }
  return { from: o, toA: r, toB: l };
}
function Op(n) {
  let e = [];
  if (n.root.activeElement != n.contentDOM)
    return e;
  let { anchorNode: t, anchorOffset: i, focusNode: s, focusOffset: o } = n.observer.selectionRange;
  return t && (e.push(new Kl(t, i)), (s != t || o != i) && e.push(new Kl(s, o))), e;
}
function Ep(n, e) {
  if (n.length == 0)
    return null;
  let t = n[0].pos, i = n.length == 2 ? n[1].pos : t;
  return t > -1 && i > -1 ? k.single(t + e, i + e) : null;
}
class Bp {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = false, this.compositionPendingChange = false, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, V.safari && e.contentDOM.addEventListener("input", () => null), V.gecko && Gp(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !Fp(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(e.type, e)) : this.runHandlers(e.type, e));
  }
  runHandlers(e, t) {
    let i = this.handlers[e];
    if (i) {
      for (let s of i.observers)
        s(this.view, t);
      for (let s of i.handlers) {
        if (t.defaultPrevented)
          break;
        if (s(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = Pp(e), i = this.handlers, s = this.view.contentDOM;
    for (let o in t)
      if (o != "scroll") {
        let r = !t[o].handlers.length, l = i[o];
        l && r != !l.handlers.length && (s.removeEventListener(o, this.handleEvent), l = null), l || s.addEventListener(o, this.handleEvent, { passive: r });
      }
    for (let o in i)
      o != "scroll" && !t[o] && s.removeEventListener(o, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return true;
    if (this.tabFocusMode > 0 && e.keyCode != 27 && yc.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), V.android && V.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), true;
    let t;
    return V.ios && !e.synthetic && !e.altKey && !e.metaKey && ((t = bc.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey || Rp.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey) ? (this.pendingIOSKey = t || e, setTimeout(() => this.flushIOSKey(), 250), true) : (e.keyCode != 229 && this.view.observer.forceFlush(), false);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t || t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? false : (this.pendingIOSKey = void 0, _i(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0));
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type) ? this.composing > 0 ? true : V.safari && !V.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = false, true) : false : false;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e;
  }
  update(e) {
    this.view.observer.update(e), this.mouseSelection && this.mouseSelection.update(e), this.draggedContent && e.docChanged && (this.draggedContent = this.draggedContent.map(e.changes)), e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function Gl(n, e) {
  return (t, i) => {
    try {
      return e.call(n, i, t);
    } catch (s) {
      Le(t.state, s);
    }
  };
}
function Pp(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(i) {
    return e[i] || (e[i] = { observers: [], handlers: [] });
  }
  for (let i of n) {
    let s = i.spec;
    if (s && s.domEventHandlers)
      for (let o in s.domEventHandlers) {
        let r = s.domEventHandlers[o];
        r && t(o).handlers.push(Gl(i.value, r));
      }
    if (s && s.domEventObservers)
      for (let o in s.domEventObservers) {
        let r = s.domEventObservers[o];
        r && t(o).observers.push(Gl(i.value, r));
      }
  }
  for (let i in Ze)
    t(i).handlers.push(Ze[i]);
  for (let i in Ye)
    t(i).observers.push(Ye[i]);
  return e;
}
const bc = [{ key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" }, { key: "Enter", keyCode: 13, inputType: "insertParagraph" }, { key: "Enter", keyCode: 13, inputType: "insertLineBreak" }, { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }], Rp = "dthko", yc = [16, 17, 18, 20, 91, 92, 224, 225], qn = 6;
function Un(n) {
  return Math.max(0, n) * 0.7 + 8;
}
function Lp(n, e) {
  return Math.max(Math.abs(n.clientX - e.clientX), Math.abs(n.clientY - e.clientY));
}
class Ip {
  constructor(e, t, i, s) {
    this.view = e, this.startEvent = t, this.style = i, this.mustSelect = s, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = t, this.scrollParents = Ud(e.contentDOM), this.atoms = e.state.facet(qr).map((r) => r(e));
    let o = e.contentDOM.ownerDocument;
    o.addEventListener("mousemove", this.move = this.move.bind(this)), o.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(U.allowMultipleSelections) && Np(e, t), this.dragging = $p(e, t) && xc(t) == 1 ? null : false;
  }
  start(e) {
    this.dragging === false && this.select(e);
  }
  move(e) {
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && Lp(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let t = 0, i = 0, s = 0, o = 0, r = this.view.win.innerWidth, l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: s, right: r } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: o, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = Ur(this.view);
    e.clientX - a.left <= s + qn ? t = -Un(s - e.clientX) : e.clientX + a.right >= r - qn && (t = Un(e.clientX - r)), e.clientY - a.top <= o + qn ? i = -Un(o - e.clientY) : e.clientY + a.bottom >= l - qn && (i = Un(e.clientY - l)), this.setScrollSpeed(t, i);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move), e.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(e, t) {
    this.scrollSpeed = { x: e, y: t }, e || t ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: e, y: t } = this.scrollSpeed;
    e && this.scrollParents.x && (this.scrollParents.x.scrollLeft += e, e = 0), t && this.scrollParents.y && (this.scrollParents.y.scrollTop += t, t = 0), (e || t) && this.view.win.scrollBy(e, t), this.dragging === false && this.select(this.lastEvent);
  }
  skipAtoms(e) {
    let t = null;
    for (let i = 0; i < e.ranges.length; i++) {
      let s = e.ranges[i], o = null;
      if (s.empty) {
        let r = ds(this.atoms, s.from, 0);
        r != s.from && (o = k.cursor(r, -1));
      } else {
        let r = ds(this.atoms, s.from, -1), l = ds(this.atoms, s.to, 1);
        (r != s.from || l != s.to) && (o = k.range(s.from == s.anchor ? r : l, s.from == s.head ? r : l));
      }
      o && (t || (t = e.ranges.slice()), t[i] = o);
    }
    return t ? k.create(t, e.mainIndex) : e;
  }
  select(e) {
    let { view: t } = this, i = this.skipAtoms(this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !i.eq(t.state.selection, this.dragging === false)) && this.view.dispatch({ selection: i, userEvent: "select.pointer" }), this.mustSelect = false;
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function Np(n, e) {
  let t = n.state.facet(ec);
  return t.length ? t[0](e) : V.mac ? e.metaKey : e.ctrlKey;
}
function Vp(n, e) {
  let t = n.state.facet(tc);
  return t.length ? t[0](e) : V.mac ? !e.altKey : !e.ctrlKey;
}
function $p(n, e) {
  let { main: t } = n.state.selection;
  if (t.empty)
    return false;
  let i = pn(n.root);
  if (!i || i.rangeCount == 0)
    return true;
  let s = i.getRangeAt(0).getClientRects();
  for (let o = 0; o < s.length; o++) {
    let r = s[o];
    if (r.left <= e.clientX && r.right >= e.clientX && r.top <= e.clientY && r.bottom >= e.clientY)
      return true;
  }
  return false;
}
function Fp(n, e) {
  if (!e.bubbles)
    return true;
  if (e.defaultPrevented)
    return false;
  for (let t = e.target, i; t != n.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || (i = ne.get(t)) && i.ignoreEvent(e))
      return false;
  return true;
}
const Ze = /* @__PURE__ */ Object.create(null), Ye = /* @__PURE__ */ Object.create(null), vc = V.ie && V.ie_version < 15 || V.ios && V.webkit_version < 604;
function zp(n) {
  let e = n.dom.parentNode;
  if (!e)
    return;
  let t = e.appendChild(document.createElement("textarea"));
  t.style.cssText = "position: fixed; left: -10000px; top: 10px", t.focus(), setTimeout(() => {
    n.focus(), t.remove(), wc(n, t.value);
  }, 50);
}
function Ws(n, e, t) {
  for (let i of n.facet(e))
    t = i(t, n);
  return t;
}
function wc(n, e) {
  e = Ws(n.state, zr, e);
  let { state: t } = n, i, s = 1, o = t.toText(e), r = o.lines == t.selection.ranges.length;
  if (rr != null && t.selection.ranges.every((a) => a.empty) && rr == o.toString()) {
    let a = -1;
    i = t.changeByRange((h) => {
      let c = t.doc.lineAt(h.from);
      if (c.from == a)
        return { range: h };
      a = c.from;
      let f = t.toText((r ? o.line(s++).text : e) + t.lineBreak);
      return { changes: { from: c.from, insert: f }, range: k.cursor(h.from + f.length) };
    });
  } else
    r ? i = t.changeByRange((a) => {
      let h = o.line(s++);
      return { changes: { from: a.from, to: a.to, insert: h.text }, range: k.cursor(a.from + h.length) };
    }) : i = t.replaceSelection(o);
  n.dispatch(i, { userEvent: "input.paste", scrollIntoView: true });
}
Ye.scroll = (n) => {
  n.inputState.lastScrollTop = n.scrollDOM.scrollTop, n.inputState.lastScrollLeft = n.scrollDOM.scrollLeft;
};
Ze.keydown = (n, e) => (n.inputState.setSelectionOrigin("select"), e.keyCode == 27 && n.inputState.tabFocusMode != 0 && (n.inputState.tabFocusMode = Date.now() + 2e3), false);
Ye.touchstart = (n, e) => {
  n.inputState.lastTouchTime = Date.now(), n.inputState.setSelectionOrigin("select.pointer");
};
Ye.touchmove = (n) => {
  n.inputState.setSelectionOrigin("select.pointer");
};
Ze.mousedown = (n, e) => {
  if (n.observer.flush(), n.inputState.lastTouchTime > Date.now() - 2e3)
    return false;
  let t = null;
  for (let i of n.state.facet(ic))
    if (t = i(n, e), t)
      break;
  if (!t && e.button == 0 && (t = qp(n, e)), t) {
    let i = !n.hasFocus;
    n.inputState.startMouseSelection(new Ip(n, e, t, i)), i && n.observer.ignore(() => {
      Lh(n.contentDOM);
      let o = n.root.activeElement;
      o && !o.contains(n.contentDOM) && o.blur();
    });
    let s = n.inputState.mouseSelection;
    if (s)
      return s.start(e), s.dragging === false;
  }
  return false;
};
function Yl(n, e, t, i) {
  if (i == 1)
    return k.cursor(e, t);
  if (i == 2)
    return bp(n.state, e, t);
  {
    let s = fe.find(n.docView, e), o = n.state.doc.lineAt(s ? s.posAtEnd : e), r = s ? s.posAtStart : o.from, l = s ? s.posAtEnd : o.to;
    return l < n.state.doc.length && l == o.to && l++, k.range(r, l);
  }
}
let Jl = (n, e, t) => e >= t.top && e <= t.bottom && n >= t.left && n <= t.right;
function Hp(n, e, t, i) {
  let s = fe.find(n.docView, e);
  if (!s)
    return 1;
  let o = e - s.posAtStart;
  if (o == 0)
    return 1;
  if (o == s.length)
    return -1;
  let r = s.coordsAt(o, -1);
  if (r && Jl(t, i, r))
    return -1;
  let l = s.coordsAt(o, 1);
  return l && Jl(t, i, l) ? 1 : r && r.bottom >= i ? -1 : 1;
}
function Xl(n, e) {
  let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, false);
  return { pos: t, bias: Hp(n, t, e.clientX, e.clientY) };
}
const Wp = V.ie && V.ie_version <= 11;
let Ql = null, Zl = 0, ea = 0;
function xc(n) {
  if (!Wp)
    return n.detail;
  let e = Ql, t = ea;
  return Ql = n, ea = Date.now(), Zl = !e || t > Date.now() - 400 && Math.abs(e.clientX - n.clientX) < 2 && Math.abs(e.clientY - n.clientY) < 2 ? (Zl + 1) % 3 : 1;
}
function qp(n, e) {
  let t = Xl(n, e), i = xc(e), s = n.state.selection;
  return { update(o) {
    o.docChanged && (t.pos = o.changes.mapPos(t.pos), s = s.map(o.changes));
  }, get(o, r, l) {
    let a = Xl(n, o), h, c = Yl(n, a.pos, a.bias, i);
    if (t.pos != a.pos && !r) {
      let f = Yl(n, t.pos, t.bias, i), u = Math.min(f.from, c.from), d = Math.max(f.to, c.to);
      c = u < c.from ? k.range(u, d) : k.range(d, u);
    }
    return r ? s.replaceRange(s.main.extend(c.from, c.to)) : l && i == 1 && s.ranges.length > 1 && (h = Up(s, a.pos)) ? h : l ? s.addRange(c) : k.create([c]);
  } };
}
function Up(n, e) {
  for (let t = 0; t < n.ranges.length; t++) {
    let { from: i, to: s } = n.ranges[t];
    if (i <= e && s >= e)
      return k.create(n.ranges.slice(0, t).concat(n.ranges.slice(t + 1)), n.mainIndex == t ? 0 : n.mainIndex - (n.mainIndex > t ? 1 : 0));
  }
  return null;
}
Ze.dragstart = (n, e) => {
  let { selection: { main: t } } = n.state;
  if (e.target.draggable) {
    let s = n.docView.nearest(e.target);
    if (s && s.isWidget) {
      let o = s.posAtStart, r = o + s.length;
      (o >= t.to || r <= t.from) && (t = k.range(o, r));
    }
  }
  let { inputState: i } = n;
  return i.mouseSelection && (i.mouseSelection.dragging = true), i.draggedContent = t, e.dataTransfer && (e.dataTransfer.setData("Text", Ws(n.state, Hr, n.state.sliceDoc(t.from, t.to))), e.dataTransfer.effectAllowed = "copyMove"), false;
};
Ze.dragend = (n) => (n.inputState.draggedContent = null, false);
function ta(n, e, t, i) {
  if (t = Ws(n.state, zr, t), !t)
    return;
  let s = n.posAtCoords({ x: e.clientX, y: e.clientY }, false), { draggedContent: o } = n.inputState, r = i && o && Vp(n, e) ? { from: o.from, to: o.to } : null, l = { from: s, insert: t }, a = n.state.changes(r ? [r, l] : l);
  n.focus(), n.dispatch({ changes: a, selection: { anchor: a.mapPos(s, -1), head: a.mapPos(s, 1) }, userEvent: r ? "move.drop" : "input.drop" }), n.inputState.draggedContent = null;
}
Ze.drop = (n, e) => {
  if (!e.dataTransfer)
    return false;
  if (n.state.readOnly)
    return true;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let i = Array(t.length), s = 0, o = () => {
      ++s == t.length && ta(n, e, i.filter((r) => r != null).join(n.state.lineBreak), false);
    };
    for (let r = 0; r < t.length; r++) {
      let l = new FileReader();
      l.onerror = o, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[r] = l.result), o();
      }, l.readAsText(t[r]);
    }
    return true;
  } else {
    let i = e.dataTransfer.getData("Text");
    if (i)
      return ta(n, e, i, true), true;
  }
  return false;
};
Ze.paste = (n, e) => {
  if (n.state.readOnly)
    return true;
  n.observer.flush();
  let t = vc ? null : e.clipboardData;
  return t ? (wc(n, t.getData("text/plain") || t.getData("text/uri-list")), true) : (zp(n), false);
};
function jp(n, e) {
  let t = n.dom.parentNode;
  if (!t)
    return;
  let i = t.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = e, i.focus(), i.selectionEnd = e.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), n.focus();
  }, 50);
}
function Kp(n) {
  let e = [], t = [], i = false;
  for (let s of n.selection.ranges)
    s.empty || (e.push(n.sliceDoc(s.from, s.to)), t.push(s));
  if (!e.length) {
    let s = -1;
    for (let { from: o } of n.selection.ranges) {
      let r = n.doc.lineAt(o);
      r.number > s && (e.push(r.text), t.push({ from: r.from, to: Math.min(n.doc.length, r.to + 1) })), s = r.number;
    }
    i = true;
  }
  return { text: Ws(n, Hr, e.join(n.lineBreak)), ranges: t, linewise: i };
}
let rr = null;
Ze.copy = Ze.cut = (n, e) => {
  let { text: t, ranges: i, linewise: s } = Kp(n.state);
  if (!t && !s)
    return false;
  rr = s ? t : null, e.type == "cut" && !n.state.readOnly && n.dispatch({ changes: i, scrollIntoView: true, userEvent: "delete.cut" });
  let o = vc ? null : e.clipboardData;
  return o ? (o.clearData(), o.setData("text/plain", t), true) : (jp(n, t), false);
};
const kc = Tt.define();
function _c(n, e) {
  let t = [];
  for (let i of n.facet(oc)) {
    let s = i(n, e);
    s && t.push(s);
  }
  return t ? n.update({ effects: t, annotations: kc.of(true) }) : null;
}
function Sc(n) {
  setTimeout(() => {
    let e = n.hasFocus;
    if (e != n.inputState.notifiedFocused) {
      let t = _c(n.state, e);
      t ? n.dispatch(t) : n.update([]);
    }
  }, 10);
}
Ye.focus = (n) => {
  n.inputState.lastFocusTime = Date.now(), !n.scrollDOM.scrollTop && (n.inputState.lastScrollTop || n.inputState.lastScrollLeft) && (n.scrollDOM.scrollTop = n.inputState.lastScrollTop, n.scrollDOM.scrollLeft = n.inputState.lastScrollLeft), Sc(n);
};
Ye.blur = (n) => {
  n.observer.clearSelectionRange(), Sc(n);
};
Ye.compositionstart = Ye.compositionupdate = (n) => {
  n.observer.editContext || (n.inputState.compositionFirstChange == null && (n.inputState.compositionFirstChange = true), n.inputState.composing < 0 && (n.inputState.composing = 0));
};
Ye.compositionend = (n) => {
  n.observer.editContext || (n.inputState.composing = -1, n.inputState.compositionEndedAt = Date.now(), n.inputState.compositionPendingKey = true, n.inputState.compositionPendingChange = n.observer.pendingRecords().length > 0, n.inputState.compositionFirstChange = null, V.chrome && V.android ? n.observer.flushSoon() : n.inputState.compositionPendingChange ? Promise.resolve().then(() => n.observer.flush()) : setTimeout(() => {
    n.inputState.composing < 0 && n.docView.hasComposition && n.update([]);
  }, 50));
};
Ye.contextmenu = (n) => {
  n.inputState.lastContextMenu = Date.now();
};
Ze.beforeinput = (n, e) => {
  var t, i;
  if (e.inputType == "insertReplacementText" && n.observer.editContext) {
    let o = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData("text/plain"), r = e.getTargetRanges();
    if (o && r.length) {
      let l = r[0], a = n.posAtDOM(l.startContainer, l.startOffset), h = n.posAtDOM(l.endContainer, l.endOffset);
      return jr(n, { from: a, to: h, insert: n.state.toText(o) }, null), true;
    }
  }
  let s;
  if (V.chrome && V.android && (s = bc.find((o) => o.inputType == e.inputType)) && (n.observer.delayAndroidKey(s.key, s.keyCode), s.key == "Backspace" || s.key == "Delete")) {
    let o = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var r;
      (((r = window.visualViewport) === null || r === void 0 ? void 0 : r.height) || 0) > o + 10 && n.hasFocus && (n.contentDOM.blur(), n.focus());
    }, 100);
  }
  return V.ios && e.inputType == "deleteContentForward" && n.observer.flushSoon(), V.safari && e.inputType == "insertText" && n.inputState.composing >= 0 && setTimeout(() => Ye.compositionend(n, e), 20), false;
};
const ia = /* @__PURE__ */ new Set();
function Gp(n) {
  ia.has(n) || (ia.add(n), n.addEventListener("copy", () => {
  }), n.addEventListener("cut", () => {
  }));
}
const na = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let Ei = false;
function sa() {
  Ei = false;
}
class Yp {
  constructor(e) {
    this.lineWrapping = e, this.doc = Q.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(e, t) {
    let i = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return this.lineWrapping && (i += Math.max(0, Math.ceil((t - e - i * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i;
  }
  heightForLine(e) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(e) {
    return this.doc = e, this;
  }
  mustRefreshForWrapping(e) {
    return na.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = false;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      s < 0 ? i++ : this.heightSamples[Math.floor(s * 10)] || (t = true, this.heightSamples[Math.floor(s * 10)] = true);
    }
    return t;
  }
  refresh(e, t, i, s, o, r) {
    let l = na.indexOf(e) > -1, a = Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = t, this.charWidth = i, this.textHeight = s, this.lineLength = o, a) {
      this.heightSamples = {};
      for (let h = 0; h < r.length; h++) {
        let c = r[h];
        c < 0 ? h++ : this.heightSamples[Math.floor(c * 10)] = true;
      }
    }
    return a;
  }
}
class Jp {
  constructor(e, t) {
    this.from = e, this.heights = t, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class ft {
  constructor(e, t, i, s, o) {
    this.from = e, this.length = t, this.top = i, this.height = s, this._content = o;
  }
  get type() {
    return typeof this._content == "number" ? Oe.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    return this._content instanceof Ht ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  join(e) {
    let t = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(e._content) ? e._content : [e]);
    return new ft(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var se = function(n) {
  return n[n.ByPos = 0] = "ByPos", n[n.ByHeight = 1] = "ByHeight", n[n.ByPosNoHeight = 2] = "ByPosNoHeight", n;
}(se || (se = {}));
const ps = 1e-3;
class Ee {
  constructor(e, t, i = 2) {
    this.length = e, this.height = t, this.flags = i;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | this.flags & -3;
  }
  setHeight(e) {
    this.height != e && (Math.abs(this.height - e) > ps && (Ei = true), this.height = e);
  }
  replace(e, t, i) {
    return Ee.of(i);
  }
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, i, s) {
    let o = this, r = i.doc;
    for (let l = s.length - 1; l >= 0; l--) {
      let { fromA: a, toA: h, fromB: c, toB: f } = s[l], u = o.lineAt(a, se.ByPosNoHeight, i.setDoc(t), 0, 0), d = u.to >= h ? u : o.lineAt(h, se.ByPosNoHeight, i, 0, 0);
      for (f += d.to - h, h = d.to; l > 0 && u.from <= s[l - 1].toA; )
        a = s[l - 1].fromA, c = s[l - 1].fromB, l--, a < u.from && (u = o.lineAt(a, se.ByPosNoHeight, i, 0, 0));
      c += u.from - a, a = u.from;
      let p = Kr.build(i.setDoc(r), e, c, f);
      o = Ss(o, o.replace(a, h, p));
    }
    return o.updateHeight(i, 0);
  }
  static empty() {
    return new $e(0, 0);
  }
  static of(e) {
    if (e.length == 1)
      return e[0];
    let t = 0, i = e.length, s = 0, o = 0;
    for (; ; )
      if (t == i)
        if (s > o * 2) {
          let l = e[t - 1];
          l.break ? e.splice(--t, 1, l.left, null, l.right) : e.splice(--t, 1, l.left, l.right), i += 1 + l.break, s -= l.size;
        } else if (o > s * 2) {
          let l = e[i];
          l.break ? e.splice(i, 1, l.left, null, l.right) : e.splice(i, 1, l.left, l.right), i += 2 + l.break, o -= l.size;
        } else
          break;
      else if (s < o) {
        let l = e[t++];
        l && (s += l.size);
      } else {
        let l = e[--i];
        l && (o += l.size);
      }
    let r = 0;
    return e[t - 1] == null ? (r = 1, t--) : e[t] == null && (r = 1, i++), new Xp(Ee.of(e.slice(0, t)), r, Ee.of(e.slice(i)));
  }
}
function Ss(n, e) {
  return n == e ? n : (n.constructor != e.constructor && (Ei = true), e);
}
Ee.prototype.size = 1;
class Cc extends Ee {
  constructor(e, t, i) {
    super(e, t), this.deco = i;
  }
  blockAt(e, t, i, s) {
    return new ft(s, this.length, i, this.height, this.deco || 0);
  }
  lineAt(e, t, i, s, o) {
    return this.blockAt(0, i, s, o);
  }
  forEachLine(e, t, i, s, o, r) {
    e <= o + this.length && t >= o && r(this.blockAt(0, i, s, o));
  }
  updateHeight(e, t = 0, i = false, s) {
    return s && s.from <= t && s.more && this.setHeight(s.heights[s.index++]), this.outdated = false, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class $e extends Cc {
  constructor(e, t) {
    super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(e, t, i, s) {
    return new ft(s, this.length, i, this.height, this.breaks);
  }
  replace(e, t, i) {
    let s = i[0];
    return i.length == 1 && (s instanceof $e || s instanceof ye && s.flags & 4) && Math.abs(this.length - s.length) < 10 ? (s instanceof ye ? s = new $e(s.length, this.height) : s.height = this.height, this.outdated || (s.outdated = false), s) : Ee.of(i);
  }
  updateHeight(e, t = 0, i = false, s) {
    return s && s.from <= t && s.more ? this.setHeight(s.heights[s.index++]) : (i || this.outdated) && this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight), this.outdated = false, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class ye extends Ee {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let i = e.doc.lineAt(t).number, s = e.doc.lineAt(t + this.length).number, o = s - i + 1, r, l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * o);
      r = a / o, this.length > o + 1 && (l = (this.height - a) / (this.length - o - 1));
    } else
      r = this.height / o;
    return { firstLine: i, lastLine: s, perLine: r, perChar: l };
  }
  blockAt(e, t, i, s) {
    let { firstLine: o, lastLine: r, perLine: l, perChar: a } = this.heightMetrics(t, s);
    if (t.lineWrapping) {
      let h = s + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length)), c = t.doc.lineAt(h), f = l + c.length * a, u = Math.max(i, e - f / 2);
      return new ft(c.from, c.length, u, f, 0);
    } else {
      let h = Math.max(0, Math.min(r - o, Math.floor((e - i) / l))), { from: c, length: f } = t.doc.line(o + h);
      return new ft(c, f, i + l * h, l, 0);
    }
  }
  lineAt(e, t, i, s, o) {
    if (t == se.ByHeight)
      return this.blockAt(e, i, s, o);
    if (t == se.ByPosNoHeight) {
      let { from: d, to: p } = i.doc.lineAt(e);
      return new ft(d, p - d, 0, 0, 0);
    }
    let { firstLine: r, perLine: l, perChar: a } = this.heightMetrics(i, o), h = i.doc.lineAt(e), c = l + h.length * a, f = h.number - r, u = s + l * f + a * (h.from - o - f);
    return new ft(h.from, h.length, Math.max(s, Math.min(u, s + this.height - c)), c, 0);
  }
  forEachLine(e, t, i, s, o, r) {
    e = Math.max(e, o), t = Math.min(t, o + this.length);
    let { firstLine: l, perLine: a, perChar: h } = this.heightMetrics(i, o);
    for (let c = e, f = s; c <= t; ) {
      let u = i.doc.lineAt(c);
      if (c == e) {
        let p = u.number - l;
        f += a * p + h * (e - o - p);
      }
      let d = a + h * u.length;
      r(new ft(u.from, u.length, f, d, 0)), f += d, c = u.to + 1;
    }
  }
  replace(e, t, i) {
    let s = this.length - t;
    if (s > 0) {
      let o = i[i.length - 1];
      o instanceof ye ? i[i.length - 1] = new ye(o.length + s) : i.push(null, new ye(s - 1));
    }
    if (e > 0) {
      let o = i[0];
      o instanceof ye ? i[0] = new ye(e + o.length) : i.unshift(new ye(e - 1), null);
    }
    return Ee.of(i);
  }
  decomposeLeft(e, t) {
    t.push(new ye(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new ye(this.length - e - 1));
  }
  updateHeight(e, t = 0, i = false, s) {
    let o = t + this.length;
    if (s && s.from <= t + this.length && s.more) {
      let r = [], l = Math.max(t, s.from), a = -1;
      for (s.from > t && r.push(new ye(s.from - t - 1).updateHeight(e, t)); l <= o && s.more; ) {
        let c = e.doc.lineAt(l).length;
        r.length && r.push(null);
        let f = s.heights[s.index++];
        a == -1 ? a = f : Math.abs(f - a) >= ps && (a = -2);
        let u = new $e(c, f);
        u.outdated = false, r.push(u), l += c + 1;
      }
      l <= o && r.push(null, new ye(o - l).updateHeight(e, l));
      let h = Ee.of(r);
      return (a < 0 || Math.abs(h.height - this.height) >= ps || Math.abs(a - this.heightMetrics(e, t).perLine) >= ps) && (Ei = true), Ss(this, h);
    } else
      (i || this.outdated) && (this.setHeight(e.heightForGap(t, t + this.length)), this.outdated = false);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class Xp extends Ee {
  constructor(e, t, i) {
    super(e.length + t + i.length, e.height + i.height, t | (e.outdated || i.outdated ? 2 : 0)), this.left = e, this.right = i, this.size = e.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, i, s) {
    let o = i + this.left.height;
    return e < o ? this.left.blockAt(e, t, i, s) : this.right.blockAt(e, t, o, s + this.left.length + this.break);
  }
  lineAt(e, t, i, s, o) {
    let r = s + this.left.height, l = o + this.left.length + this.break, a = t == se.ByHeight ? e < r : e < l, h = a ? this.left.lineAt(e, t, i, s, o) : this.right.lineAt(e, t, i, r, l);
    if (this.break || (a ? h.to < l : h.from > l))
      return h;
    let c = t == se.ByPosNoHeight ? se.ByPosNoHeight : se.ByPos;
    return a ? h.join(this.right.lineAt(l, c, i, r, l)) : this.left.lineAt(l, c, i, s, o).join(h);
  }
  forEachLine(e, t, i, s, o, r) {
    let l = s + this.left.height, a = o + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, t, i, s, o, r), t >= a && this.right.forEachLine(e, t, i, l, a, r);
    else {
      let h = this.lineAt(a, se.ByPos, i, s, o);
      e < h.from && this.left.forEachLine(e, h.from - 1, i, s, o, r), h.to >= e && h.from <= t && r(h), t > h.to && this.right.forEachLine(h.to + 1, t, i, l, a, r);
    }
  }
  replace(e, t, i) {
    let s = this.left.length + this.break;
    if (t < s)
      return this.balanced(this.left.replace(e, t, i), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - s, t - s, i));
    let o = [];
    e > 0 && this.decomposeLeft(e, o);
    let r = o.length;
    for (let l of i)
      o.push(l);
    if (e > 0 && oa(o, r - 1), t < this.length) {
      let l = o.length;
      this.decomposeRight(t, o), oa(o, l);
    }
    return Ee.of(o);
  }
  decomposeLeft(e, t) {
    let i = this.left.length;
    if (e <= i)
      return this.left.decomposeLeft(e, t);
    t.push(this.left), this.break && (i++, e >= i && t.push(null)), e > i && this.right.decomposeLeft(e - i, t);
  }
  decomposeRight(e, t) {
    let i = this.left.length, s = i + this.break;
    if (e >= s)
      return this.right.decomposeRight(e - s, t);
    e < i && this.left.decomposeRight(e, t), this.break && e < s && t.push(null), t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size ? Ee.of(this.break ? [e, null, t] : [e, t]) : (this.left = Ss(this.left, e), this.right = Ss(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
  }
  updateHeight(e, t = 0, i = false, s) {
    let { left: o, right: r } = this, l = t + o.length + this.break, a = null;
    return s && s.from <= t + o.length && s.more ? a = o = o.updateHeight(e, t, i, s) : o.updateHeight(e, t, i), s && s.from <= l + r.length && s.more ? a = r = r.updateHeight(e, l, i, s) : r.updateHeight(e, l, i), a ? this.balanced(o, r) : (this.height = this.left.height + this.right.height, this.outdated = false, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function oa(n, e) {
  let t, i;
  n[e] == null && (t = n[e - 1]) instanceof ye && (i = n[e + 1]) instanceof ye && n.splice(e - 1, 3, new ye(t.length + 1 + i.length));
}
const Qp = 5;
class Kr {
  constructor(e, t) {
    this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let i = Math.min(t, this.lineEnd), s = this.nodes[this.nodes.length - 1];
      s instanceof $e ? s.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new $e(i - this.pos, -1)), this.writtenTo = i, t > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = t;
  }
  point(e, t, i) {
    if (e < t || i.heightRelevant) {
      let s = i.widget ? i.widget.estimatedHeight : 0, o = i.widget ? i.widget.lineBreaks : 0;
      s < 0 && (s = this.oracle.lineHeight);
      let r = t - e;
      i.block ? this.addBlock(new Cc(r, s, i)) : (r || o || s >= Qp) && this.addLineDeco(s, o, r);
    } else
      t > e && this.span(e, t);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new $e(this.pos - e, -1)), this.writtenTo = this.pos;
  }
  blankContent(e, t) {
    let i = new ye(t - e);
    return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof $e)
      return e;
    let t = new $e(0, -1);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    this.enterLine();
    let t = e.deco;
    t && t.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, t && t.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, t, i) {
    let s = this.ensureLine();
    s.length += i, s.collapsed += i, s.widgetHeight = Math.max(s.widgetHeight, e), s.breaks += t, this.writtenTo = this.pos = this.pos + i;
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof $e) && !this.isCovered ? this.nodes.push(new $e(0, -1)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = e;
    for (let s of this.nodes)
      s instanceof $e && s.updateHeight(this.oracle, i), i += s ? s.length : 1;
    return this.nodes;
  }
  static build(e, t, i, s) {
    let o = new Kr(i, e);
    return X.spans(t, i, s, o, 0), o.finish(i);
  }
}
function Zp(n, e, t) {
  let i = new em();
  return X.compare(n, e, t, i, 0), i.changes;
}
class em {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, t, i, s) {
    (e < t || i && i.heightRelevant || s && s.heightRelevant) && us(e, t, this.changes, 5);
  }
}
function tm(n, e) {
  let t = n.getBoundingClientRect(), i = n.ownerDocument, s = i.defaultView || window, o = Math.max(0, t.left), r = Math.min(s.innerWidth, t.right), l = Math.max(0, t.top), a = Math.min(s.innerHeight, t.bottom);
  for (let h = n.parentNode; h && h != i.body; )
    if (h.nodeType == 1) {
      let c = h, f = window.getComputedStyle(c);
      if ((c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth) && f.overflow != "visible") {
        let u = c.getBoundingClientRect();
        o = Math.max(o, u.left), r = Math.min(r, u.right), l = Math.max(l, u.top), a = Math.min(h == n.parentNode ? s.innerHeight : a, u.bottom);
      }
      h = f.position == "absolute" || f.position == "fixed" ? c.offsetParent : c.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
  return { left: o - t.left, right: Math.max(o, r) - t.left, top: l - (t.top + e), bottom: Math.max(l, a) - (t.top + e) };
}
function im(n) {
  let e = n.getBoundingClientRect(), t = n.ownerDocument.defaultView || window;
  return e.left < t.innerWidth && e.right > 0 && e.top < t.innerHeight && e.bottom > 0;
}
function nm(n, e) {
  let t = n.getBoundingClientRect();
  return { left: 0, right: t.right - t.left, top: e, bottom: t.bottom - (t.top + e) };
}
class fo {
  constructor(e, t, i, s) {
    this.from = e, this.to = t, this.size = i, this.displaySize = s;
  }
  static same(e, t) {
    if (e.length != t.length)
      return false;
    for (let i = 0; i < e.length; i++) {
      let s = e[i], o = t[i];
      if (s.from != o.from || s.to != o.to || s.size != o.size)
        return false;
    }
    return true;
  }
  draw(e, t) {
    return F.replace({ widget: new sm(this.displaySize * (t ? e.scaleY : e.scaleX), t) }).range(this.from, this.to);
  }
}
class sm extends wt {
  constructor(e, t) {
    super(), this.size = e, this.vertical = t;
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    return this.vertical ? e.style.height = this.size + "px" : (e.style.width = this.size + "px", e.style.height = "2px", e.style.display = "inline-block"), e;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class ra {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = true, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = false, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = la, this.scrollTarget = null, this.printing = false, this.mustMeasureContent = true, this.defaultTextDirection = oe.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = false;
    let t = e.facet(Wr).some((i) => typeof i != "function" && i.class == "cm-lineWrapping");
    this.heightOracle = new Yp(t), this.stateDeco = e.facet(mn).filter((i) => typeof i != "function"), this.heightMap = Ee.empty().applyChanges(this.stateDeco, Q.empty, this.heightOracle.setDoc(e.doc), [new Ke(0, 0, 0, e.doc.length)]);
    for (let i = 0; i < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); i++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = F.set(this.lineGaps.map((i) => i.draw(this, false))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: t } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let s = i ? t.head : t.anchor;
      if (!e.some(({ from: o, to: r }) => s >= o && s <= r)) {
        let { from: o, to: r } = this.lineBlockAt(s);
        e.push(new jn(o, r));
      }
    }
    return this.viewports = e.sort((i, s) => i.from - s.from), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? la : new Gr(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(Qi(e, this.scaler));
    });
  }
  update(e, t = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = this.state.facet(mn).filter((c) => typeof c != "function");
    let s = e.changedRanges, o = Ke.extendWithRanges(s, Zp(i, this.stateDeco, e ? e.changes : ue.empty(this.state.doc.length))), r = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    sa(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), o), (this.heightMap.height != r || Ei) && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let a = o.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (t && (t.range.head < a.from || t.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, t));
    let h = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, e.flags |= this.updateForViewport(), (h || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(lc) && (this.mustEnforceCursorAssoc = true);
  }
  measure(e) {
    let t = e.contentDOM, i = window.getComputedStyle(t), s = this.heightOracle, o = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? oe.RTL : oe.LTR;
    let r = this.heightOracle.mustRefreshForWrapping(o), l = t.getBoundingClientRect(), a = r || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = false;
    let h = 0, c = 0;
    if (l.width && l.height) {
      let { scaleX: S, scaleY: _ } = Rh(t, l);
      (S > 5e-3 && Math.abs(this.scaleX - S) > 5e-3 || _ > 5e-3 && Math.abs(this.scaleY - _) > 5e-3) && (this.scaleX = S, this.scaleY = _, h |= 16, r = a = true);
    }
    let f = (parseInt(i.paddingTop) || 0) * this.scaleY, u = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != f || this.paddingBottom != u) && (this.paddingTop = f, this.paddingBottom = u, h |= 18), this.editorWidth != e.scrollDOM.clientWidth && (s.lineWrapping && (a = true), this.editorWidth = e.scrollDOM.clientWidth, h |= 16);
    let d = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != d && (this.scrollAnchorHeight = -1, this.scrollTop = d), this.scrolledToBottom = Nh(e.scrollDOM);
    let p = (this.printing ? nm : tm)(t, this.paddingTop), g = p.top - this.pixelViewport.top, m = p.bottom - this.pixelViewport.bottom;
    this.pixelViewport = p;
    let y = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (y != this.inView && (this.inView = y, y && (a = true)), !this.inView && !this.scrollTarget && !im(e.dom))
      return 0;
    let w = l.width;
    if ((this.contentDOMWidth != w || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, h |= 16), a) {
      let S = e.docView.measureVisibleLineHeights(this.viewport);
      if (s.mustRefreshForHeights(S) && (r = true), r || s.lineWrapping && Math.abs(w - this.contentDOMWidth) > s.charWidth) {
        let { lineHeight: _, charWidth: x, textHeight: D } = e.docView.measureTextSize();
        r = _ > 0 && s.refresh(o, _, x, D, w / x, S), r && (e.docView.minWidth = 0, h |= 16);
      }
      g > 0 && m > 0 ? c = Math.max(g, m) : g < 0 && m < 0 && (c = Math.min(g, m)), sa();
      for (let _ of this.viewports) {
        let x = _.from == this.viewport.from ? S : e.docView.measureVisibleLineHeights(_);
        this.heightMap = (r ? Ee.empty().applyChanges(this.stateDeco, Q.empty, this.heightOracle, [new Ke(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(s, 0, r, new Jp(_.from, x));
      }
      Ei && (h |= 2);
    }
    let M = !this.viewportIsAppropriate(this.viewport, c) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return M && (h & 2 && (h |= this.updateScaler()), this.viewport = this.getViewport(c, this.scrollTarget), h |= this.updateForViewport()), (h & 2 || M) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(r ? [] : this.lineGaps, e)), h |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = false, e.docView.enforceCursorAssoc()), h;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), s = this.heightMap, o = this.heightOracle, { visibleTop: r, visibleBottom: l } = this, a = new jn(s.lineAt(r - i * 1e3, se.ByHeight, o, 0, 0).from, s.lineAt(l + (1 - i) * 1e3, se.ByHeight, o, 0, 0).to);
    if (t) {
      let { head: h } = t.range;
      if (h < a.from || h > a.to) {
        let c = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), f = s.lineAt(h, se.ByPos, o, 0, 0), u;
        t.y == "center" ? u = (f.top + f.bottom) / 2 - c / 2 : t.y == "start" || t.y == "nearest" && h < a.from ? u = f.top : u = f.bottom - c, a = new jn(s.lineAt(u - 1e3 / 2, se.ByHeight, o, 0, 0).from, s.lineAt(u + c + 1e3 / 2, se.ByHeight, o, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let i = t.mapPos(e.from, -1), s = t.mapPos(e.to, 1);
    return new jn(this.heightMap.lineAt(i, se.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(s, se.ByPos, this.heightOracle, 0, 0).to);
  }
  viewportIsAppropriate({ from: e, to: t }, i = 0) {
    if (!this.inView)
      return true;
    let { top: s } = this.heightMap.lineAt(e, se.ByPos, this.heightOracle, 0, 0), { bottom: o } = this.heightMap.lineAt(t, se.ByPos, this.heightOracle, 0, 0), { visibleTop: r, visibleBottom: l } = this;
    return (e == 0 || s <= r - Math.max(10, Math.min(-i, 250))) && (t == this.state.doc.length || o >= l + Math.max(10, Math.min(i, 250))) && s > r - 2 * 1e3 && o < l + 2 * 1e3;
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty)
      return e;
    let i = [];
    for (let s of e)
      t.touchesRange(s.from, s.to) || i.push(new fo(t.mapPos(s.from), t.mapPos(s.to), s.size, s.displaySize));
    return i;
  }
  ensureLineGaps(e, t) {
    let i = this.heightOracle.lineWrapping, s = i ? 1e4 : 2e3, o = s >> 1, r = s << 1;
    if (this.defaultTextDirection != oe.LTR && !i)
      return [];
    let l = [], a = (c, f, u, d) => {
      if (f - c < o)
        return;
      let p = this.state.selection.main, g = [p.from];
      p.empty || g.push(p.to);
      for (let y of g)
        if (y > c && y < f) {
          a(c, y - 10, u, d), a(y + 10, f, u, d);
          return;
        }
      let m = rm(e, (y) => y.from >= u.from && y.to <= u.to && Math.abs(y.from - c) < o && Math.abs(y.to - f) < o && !g.some((w) => y.from < w && y.to > w));
      if (!m) {
        if (f < u.to && t && i && t.visibleRanges.some((M) => M.from <= f && M.to >= f)) {
          let M = t.moveToLineBoundary(k.cursor(f), false, true).head;
          M > c && (f = M);
        }
        let y = this.gapSize(u, c, f, d), w = i || y < 2e6 ? y : 2e6;
        m = new fo(c, f, y, w);
      }
      l.push(m);
    }, h = (c) => {
      if (c.length < r || c.type != Oe.Text)
        return;
      let f = om(c.from, c.to, this.stateDeco);
      if (f.total < r)
        return;
      let u = this.scrollTarget ? this.scrollTarget.range.head : null, d, p;
      if (i) {
        let g = s / this.heightOracle.lineLength * this.heightOracle.lineHeight, m, y;
        if (u != null) {
          let w = Gn(f, u), M = ((this.visibleBottom - this.visibleTop) / 2 + g) / c.height;
          m = w - M, y = w + M;
        } else
          m = (this.visibleTop - c.top - g) / c.height, y = (this.visibleBottom - c.top + g) / c.height;
        d = Kn(f, m), p = Kn(f, y);
      } else {
        let g = f.total * this.heightOracle.charWidth, m = s * this.heightOracle.charWidth, y = 0;
        if (g > 2e6)
          for (let x of e)
            x.from >= c.from && x.from < c.to && x.size != x.displaySize && x.from * this.heightOracle.charWidth + y < this.pixelViewport.left && (y = x.size - x.displaySize);
        let w = this.pixelViewport.left + y, M = this.pixelViewport.right + y, S, _;
        if (u != null) {
          let x = Gn(f, u), D = ((M - w) / 2 + m) / g;
          S = x - D, _ = x + D;
        } else
          S = (w - m) / g, _ = (M + m) / g;
        d = Kn(f, S), p = Kn(f, _);
      }
      d > c.from && a(c.from, d, c, f), p < c.to && a(p, c.to, c, f);
    };
    for (let c of this.viewportLines)
      Array.isArray(c.type) ? c.type.forEach(h) : h(c);
    return l;
  }
  gapSize(e, t, i, s) {
    let o = Gn(s, i) - Gn(s, t);
    return this.heightOracle.lineWrapping ? e.height * o : s.total * this.heightOracle.charWidth * o;
  }
  updateLineGaps(e) {
    fo.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = F.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(e) {
    let t = this.stateDeco;
    this.lineGaps.length && (t = t.concat(this.lineGapDeco));
    let i = [];
    X.spans(t, this.viewport.from, this.viewport.to, { span(o, r) {
      i.push({ from: o, to: r });
    }, point() {
    } }, 20);
    let s = 0;
    if (i.length != this.visibleRanges.length)
      s = 12;
    else
      for (let o = 0; o < i.length && !(s & 8); o++) {
        let r = this.visibleRanges[o], l = i[o];
        (r.from != l.from || r.to != l.to) && (s |= 4, e && e.mapPos(r.from, -1) == l.from && e.mapPos(r.to, 1) == l.to || (s |= 8));
      }
    return this.visibleRanges = i, s;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || Qi(this.heightMap.lineAt(e, se.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || Qi(this.heightMap.lineAt(this.scaler.fromDOM(e), se.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return Qi(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class jn {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
function om(n, e, t) {
  let i = [], s = n, o = 0;
  return X.spans(t, n, e, { span() {
  }, point(r, l) {
    r > s && (i.push({ from: s, to: r }), o += r - s), s = l;
  } }, 20), s < e && (i.push({ from: s, to: e }), o += e - s), { total: o, ranges: i };
}
function Kn({ total: n, ranges: e }, t) {
  if (t <= 0)
    return e[0].from;
  if (t >= 1)
    return e[e.length - 1].to;
  let i = Math.floor(n * t);
  for (let s = 0; ; s++) {
    let { from: o, to: r } = e[s], l = r - o;
    if (i <= l)
      return o + i;
    i -= l;
  }
}
function Gn(n, e) {
  let t = 0;
  for (let { from: i, to: s } of n.ranges) {
    if (e <= s) {
      t += e - i;
      break;
    }
    t += s - i;
  }
  return t / n.total;
}
function rm(n, e) {
  for (let t of n)
    if (e(t))
      return t;
}
const la = { toDOM(n) {
  return n;
}, fromDOM(n) {
  return n;
}, scale: 1, eq(n) {
  return n == this;
} };
class Gr {
  constructor(e, t, i) {
    let s = 0, o = 0, r = 0;
    this.viewports = i.map(({ from: l, to: a }) => {
      let h = t.lineAt(l, se.ByPos, e, 0, 0).top, c = t.lineAt(a, se.ByPos, e, 0, 0).bottom;
      return s += c - h, { from: l, to: a, top: h, bottom: c, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - s) / (t.height - s);
    for (let l of this.viewports)
      l.domTop = r + (l.top - o) * this.scale, r = l.domBottom = l.domTop + (l.bottom - l.top), o = l.bottom;
  }
  toDOM(e) {
    for (let t = 0, i = 0, s = 0; ; t++) {
      let o = t < this.viewports.length ? this.viewports[t] : null;
      if (!o || e < o.top)
        return s + (e - i) * this.scale;
      if (e <= o.bottom)
        return o.domTop + (e - o.top);
      i = o.bottom, s = o.domBottom;
    }
  }
  fromDOM(e) {
    for (let t = 0, i = 0, s = 0; ; t++) {
      let o = t < this.viewports.length ? this.viewports[t] : null;
      if (!o || e < o.domTop)
        return i + (e - s) / this.scale;
      if (e <= o.domBottom)
        return o.top + (e - o.domTop);
      i = o.bottom, s = o.domBottom;
    }
  }
  eq(e) {
    return e instanceof Gr ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((t, i) => t.from == e.viewports[i].from && t.to == e.viewports[i].to) : false;
  }
}
function Qi(n, e) {
  if (e.scale == 1)
    return n;
  let t = e.toDOM(n.top), i = e.toDOM(n.bottom);
  return new ft(n.from, n.length, t, i - t, Array.isArray(n._content) ? n._content.map((s) => Qi(s, e)) : n._content);
}
const Yn = $.define({ combine: (n) => n.join(" ") }), lr = $.define({ combine: (n) => n.indexOf(true) > -1 }), ar = Ft.newName(), Ac = Ft.newName(), Mc = Ft.newName(), Dc = { "&light": "." + Ac, "&dark": "." + Mc };
function hr(n, e, t) {
  return new Ft(e, { finish(i) {
    return /&/.test(i) ? i.replace(/&\w*/, (s) => {
      if (s == "&")
        return n;
      if (!t || !t[s])
        throw new RangeError(`Unsupported selector: ${s}`);
      return t[s];
    }) : n + " " + i;
  } });
}
const lm = hr("." + ar, { "&": { position: "relative !important", boxSizing: "border-box", "&.cm-focused": { outline: "1px dotted #212121" }, display: "flex !important", flexDirection: "column" }, ".cm-scroller": { display: "flex !important", alignItems: "flex-start !important", fontFamily: "monospace", lineHeight: 1.4, height: "100%", overflowX: "auto", position: "relative", zIndex: 0, overflowAnchor: "none" }, ".cm-content": { margin: 0, flexGrow: 2, flexShrink: 0, display: "block", whiteSpace: "pre", wordWrap: "normal", boxSizing: "border-box", minHeight: "100%", padding: "4px 0", outline: "none", "&[contenteditable=true]": { WebkitUserModify: "read-write-plaintext-only" } }, ".cm-lineWrapping": { whiteSpace_fallback: "pre-wrap", whiteSpace: "break-spaces", wordBreak: "break-word", overflowWrap: "anywhere", flexShrink: 1 }, "&light .cm-content": { caretColor: "black" }, "&dark .cm-content": { caretColor: "white" }, ".cm-line": { display: "block", padding: "0 2px 0 6px" }, ".cm-layer": { position: "absolute", left: 0, top: 0, contain: "size style", "& > *": { position: "absolute" } }, "&light .cm-selectionBackground": { background: "#d9d9d9" }, "&dark .cm-selectionBackground": { background: "#222" }, "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#d7d4f0" }, "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#233" }, ".cm-cursorLayer": { pointerEvents: "none" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer": { animation: "steps(1) cm-blink 1.2s infinite" }, "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, ".cm-cursor, .cm-dropCursor": { borderLeft: "1.2px solid black", marginLeft: "-0.6px", pointerEvents: "none" }, ".cm-cursor": { display: "none" }, "&dark .cm-cursor": { borderLeftColor: "#ddd" }, ".cm-dropCursor": { position: "absolute" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": { display: "block" }, ".cm-iso": { unicodeBidi: "isolate" }, ".cm-announced": { position: "fixed", top: "-10000px" }, "@media print": { ".cm-announced": { display: "none" } }, "&light .cm-activeLine": { backgroundColor: "#cceeff44" }, "&dark .cm-activeLine": { backgroundColor: "#99eeff33" }, "&light .cm-specialChar": { color: "red" }, "&dark .cm-specialChar": { color: "#f78" }, ".cm-gutters": { flexShrink: 0, display: "flex", height: "100%", boxSizing: "border-box", insetInlineStart: 0, zIndex: 200 }, "&light .cm-gutters": { backgroundColor: "#f5f5f5", color: "#6c6c6c", borderRight: "1px solid #ddd" }, "&dark .cm-gutters": { backgroundColor: "#333338", color: "#ccc" }, ".cm-gutter": { display: "flex !important", flexDirection: "column", flexShrink: 0, boxSizing: "border-box", minHeight: "100%", overflow: "hidden" }, ".cm-gutterElement": { boxSizing: "border-box" }, ".cm-lineNumbers .cm-gutterElement": { padding: "0 3px 0 5px", minWidth: "20px", textAlign: "right", whiteSpace: "nowrap" }, "&light .cm-activeLineGutter": { backgroundColor: "#e2f2ff" }, "&dark .cm-activeLineGutter": { backgroundColor: "#222227" }, ".cm-panels": { boxSizing: "border-box", position: "sticky", left: 0, right: 0, zIndex: 300 }, "&light .cm-panels": { backgroundColor: "#f5f5f5", color: "black" }, "&light .cm-panels-top": { borderBottom: "1px solid #ddd" }, "&light .cm-panels-bottom": { borderTop: "1px solid #ddd" }, "&dark .cm-panels": { backgroundColor: "#333338", color: "white" }, ".cm-tab": { display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }, ".cm-widgetBuffer": { verticalAlign: "text-top", height: "1em", width: 0, display: "inline" }, ".cm-placeholder": { color: "#888", display: "inline-block", verticalAlign: "top" }, ".cm-highlightSpace": { backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)", backgroundPosition: "center" }, ".cm-highlightTab": { backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`, backgroundSize: "auto 100%", backgroundPosition: "right 90%", backgroundRepeat: "no-repeat" }, ".cm-trailingSpace": { backgroundColor: "#ff332255" }, ".cm-button": { verticalAlign: "middle", color: "inherit", fontSize: "70%", padding: ".2em 1em", borderRadius: "1px" }, "&light .cm-button": { backgroundImage: "linear-gradient(#eff1f5, #d9d9df)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)" } }, "&dark .cm-button": { backgroundImage: "linear-gradient(#393939, #111)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#111, #333)" } }, ".cm-textfield": { verticalAlign: "middle", color: "inherit", fontSize: "70%", border: "1px solid silver", padding: ".2em .5em" }, "&light .cm-textfield": { backgroundColor: "white" }, "&dark .cm-textfield": { border: "1px solid #555", backgroundColor: "inherit" } }, Dc), am = { childList: true, characterData: true, subtree: true, attributes: true, characterDataOldValue: true }, uo = V.ie && V.ie_version <= 11;
class hm {
  constructor(e) {
    this.view = e, this.active = false, this.editContext = null, this.selectionRange = new jd(), this.selectionChanged = false, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = false, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
      for (let i of t)
        this.queue.push(i);
      (V.ie && V.ie_version <= 11 || V.ios && e.composing) && t.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && e.constructor.EDIT_CONTEXT !== false && !(V.chrome && V.chrome_version < 126) && (this.editContext = new fm(e), e.state.facet(_t) && (e.contentDOM.editContext = this.editContext.editContext)), uo && (this.onCharData = (t) => {
      this.queue.push({ target: t.target, type: "characterData", oldValue: t.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var t;
      ((t = this.view.docView) === null || t === void 0 ? void 0 : t.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(e.scrollDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((t) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), t.length > 0 && t[t.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((t) => {
      t.length > 0 && t[t.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runHandlers("scroll", e), this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(false), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(e) {
    (e.type == "change" || !e.type) && !e.matches || (this.view.viewState.printing = true, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = false, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(e) {
    if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((t, i) => t != e[i]))) {
      this.gapIntersection.disconnect();
      for (let t of e)
        this.gapIntersection.observe(t);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let t = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: i } = this, s = this.selectionRange;
    if (i.state.facet(_t) ? i.root.activeElement != this.dom : !fs(this.dom, s))
      return;
    let o = s.anchorNode && i.docView.nearest(s.anchorNode);
    if (o && o.ignoreEvent(e)) {
      t || (this.selectionChanged = false);
      return;
    }
    (V.ie && V.ie_version <= 11 || V.android && V.chrome) && !i.state.selection.main.empty && s.focusNode && on(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset) ? this.flushSoon() : this.flush(false);
  }
  readSelectionRange() {
    let { view: e } = this, t = pn(e.root);
    if (!t)
      return false;
    let i = V.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && cm(this.view, t) || t;
    if (!i || this.selectionRange.eq(i))
      return false;
    let s = fs(this.dom, i);
    return s && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && Gd(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), false) : (this.selectionRange.setRange(i), s && (this.selectionChanged = true), true);
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset), this.selectionChanged = false;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0, t = null;
    for (let i = this.dom; i; )
      if (i.nodeType == 1)
        !t && e < this.scrollTargets.length && this.scrollTargets[e] == i ? e++ : t || (t = this.scrollTargets.slice(0, e)), t && t.push(i), i = i.assignedSlot || i.parentNode;
      else if (i.nodeType == 11)
        i = i.host;
      else
        break;
    if (e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t) {
      for (let i of this.scrollTargets)
        i.removeEventListener("scroll", this.onScroll);
      for (let i of this.scrollTargets = t)
        i.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active)
      return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, am), uo && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = true);
  }
  stop() {
    this.active && (this.active = false, this.observer.disconnect(), uo && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = false;
  }
  delayAndroidKey(e, t) {
    var i;
    if (!this.delayedAndroidKey) {
      let s = () => {
        let o = this.delayedAndroidKey;
        o && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = o.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && o.force && _i(this.dom, o.key, o.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(s);
    }
    (!this.delayedAndroidKey || e == "Enter") && (this.delayedAndroidKey = { key: e, keyCode: t, force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force) });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords())
      this.queue.push(e);
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let t = -1, i = -1, s = false;
    for (let o of e) {
      let r = this.readMutation(o);
      r && (r.typeOver && (s = true), t == -1 ? { from: t, to: i } = r : (t = Math.min(r.from, t), i = Math.max(r.to, i)));
    }
    return { from: t, to: i, typeOver: s };
  }
  readChange() {
    let { from: e, to: t, typeOver: i } = this.processRecords(), s = this.selectionChanged && fs(this.dom, this.selectionRange);
    if (e < 0 && !s)
      return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = false;
    let o = new Mp(this.view, e, t, i);
    return this.view.docView.domChanged = { newSel: o.newSel ? o.newSel.main : null }, o;
  }
  flush(e = true) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return false;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t)
      return this.view.requestMeasure(), false;
    let i = this.view.state, s = gc(this.view, t);
    return this.view.state == i && (t.domChanged || t.newSel && !t.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), s;
  }
  readMutation(e) {
    let t = this.view.docView.nearest(e.target);
    if (!t || t.ignoreMutation(e))
      return null;
    if (t.markDirty(e.type == "attributes"), e.type == "attributes" && (t.flags |= 4), e.type == "childList") {
      let i = aa(t, e.previousSibling || e.target.previousSibling, -1), s = aa(t, e.nextSibling || e.target.nextSibling, 1);
      return { from: i ? t.posAfter(i) : t.posAtStart, to: s ? t.posBefore(s) : t.posAtEnd, typeOver: false };
    } else
      return e.type == "characterData" ? { from: t.posAtStart, to: t.posAtEnd, typeOver: e.target.nodeValue == e.oldValue } : null;
  }
  setWindow(e) {
    e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : e.addEventListener("beforeprint", this.onPrint), e.addEventListener("scroll", this.onScroll), e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : e.removeEventListener("beforeprint", this.onPrint), e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(e) {
    this.editContext && (this.editContext.update(e), e.startState.facet(_t) != e.state.facet(_t) && (e.view.contentDOM.editContext = e.state.facet(_t) ? this.editContext.editContext : null));
  }
  destroy() {
    var e, t, i;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (t = this.gapIntersection) === null || t === void 0 || t.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
    for (let s of this.scrollTargets)
      s.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function aa(n, e, t) {
  for (; e; ) {
    let i = ne.get(e);
    if (i && i.parent == n)
      return i;
    let s = e.parentNode;
    e = s != n.dom ? s : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function ha(n, e) {
  let t = e.startContainer, i = e.startOffset, s = e.endContainer, o = e.endOffset, r = n.docView.domAtPos(n.state.selection.main.anchor);
  return on(r.node, r.offset, s, o) && ([t, i, s, o] = [s, o, t, i]), { anchorNode: t, anchorOffset: i, focusNode: s, focusOffset: o };
}
function cm(n, e) {
  if (e.getComposedRanges) {
    let s = e.getComposedRanges(n.root)[0];
    if (s)
      return ha(n, s);
  }
  let t = null;
  function i(s) {
    s.preventDefault(), s.stopImmediatePropagation(), t = s.getTargetRanges()[0];
  }
  return n.contentDOM.addEventListener("beforeinput", i, true), n.dom.ownerDocument.execCommand("indent"), n.contentDOM.removeEventListener("beforeinput", i, true), t ? ha(n, t) : null;
}
class fm {
  constructor(e) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(e.state);
    let t = this.editContext = new window.EditContext({ text: e.state.doc.sliceString(this.from, this.to), selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))), selectionEnd: this.toContextPos(e.state.selection.main.head) });
    this.handlers.textupdate = (i) => {
      let s = e.state.selection.main, { anchor: o, head: r } = s, l = this.toEditorPos(i.updateRangeStart), a = this.toEditorPos(i.updateRangeEnd);
      e.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i.updateRangeStart, editorBase: l, drifted: false });
      let h = { from: l, to: a, insert: Q.of(i.text.split(`
`)) };
      if (h.from == this.from && o < this.from ? h.from = o : h.to == this.to && o > this.to && (h.to = o), h.from == h.to && !h.insert.length) {
        let c = k.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        c.main.eq(s) || e.dispatch({ selection: c, userEvent: "select" });
        return;
      }
      if ((V.mac || V.android) && h.from == r - 1 && /^\. ?$/.test(i.text) && e.contentDOM.getAttribute("autocorrect") == "off" && (h = { from: l, to: a, insert: Q.of([i.text.replace(".", " ")]) }), this.pendingContextChange = h, !e.state.readOnly) {
        let c = this.to - this.from + (h.to - h.from + h.insert.length);
        jr(e, h, k.single(this.toEditorPos(i.selectionStart, c), this.toEditorPos(i.selectionEnd, c)));
      }
      this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state));
    }, this.handlers.characterboundsupdate = (i) => {
      let s = [], o = null;
      for (let r = this.toEditorPos(i.rangeStart), l = this.toEditorPos(i.rangeEnd); r < l; r++) {
        let a = e.coordsForChar(r);
        o = a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top) || o || new DOMRect(), s.push(o);
      }
      t.updateCharacterBounds(i.rangeStart, s);
    }, this.handlers.textformatupdate = (i) => {
      let s = [];
      for (let o of i.getTextFormats()) {
        let r = o.underlineStyle, l = o.underlineThickness;
        if (r != "None" && l != "None") {
          let a = this.toEditorPos(o.rangeStart), h = this.toEditorPos(o.rangeEnd);
          if (a < h) {
            let c = `text-decoration: underline ${r == "Dashed" ? "dashed " : r == "Squiggle" ? "wavy " : ""}${l == "Thin" ? 1 : 2}px`;
            s.push(F.mark({ attributes: { style: c } }).range(a, h));
          }
        }
      }
      e.dispatch({ effects: hc.of(F.set(s)) });
    }, this.handlers.compositionstart = () => {
      e.inputState.composing < 0 && (e.inputState.composing = 0, e.inputState.compositionFirstChange = true);
    }, this.handlers.compositionend = () => {
      if (e.inputState.composing = -1, e.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: i } = this.composing;
        this.composing = null, i && this.reset(e.state);
      }
    };
    for (let i in this.handlers)
      t.addEventListener(i, this.handlers[i]);
    this.measureReq = { read: (i) => {
      this.editContext.updateControlBounds(i.contentDOM.getBoundingClientRect());
      let s = pn(i.root);
      s && s.rangeCount && this.editContext.updateSelectionBounds(s.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(e) {
    let t = 0, i = false, s = this.pendingContextChange;
    return e.changes.iterChanges((o, r, l, a, h) => {
      if (i)
        return;
      let c = h.length - (r - o);
      if (s && r >= s.to)
        if (s.from == o && s.to == r && s.insert.eq(h)) {
          s = this.pendingContextChange = null, t += c, this.to += c;
          return;
        } else
          s = null, this.revertPending(e.state);
      if (o += t, r += t, r <= this.from)
        this.from += c, this.to += c;
      else if (o < this.to) {
        if (o < this.from || r > this.to || this.to - this.from + h.length > 3e4) {
          i = true;
          return;
        }
        this.editContext.updateText(this.toContextPos(o), this.toContextPos(r), h.toString()), this.to += c;
      }
      t += c;
    }), s && !i && this.revertPending(e.state), !i;
  }
  update(e) {
    let t = this.pendingContextChange, i = e.startState.selection.main;
    this.composing && (this.composing.drifted || !e.changes.touchesRange(i.from, i.to) && e.transactions.some((s) => !s.isUserEvent("input.type") && s.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = true, this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(e) || !this.rangeIsValid(e.state) ? (this.pendingContextChange = null, this.reset(e.state)) : (e.docChanged || e.selectionSet || t) && this.setSelection(e.state), (e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq);
  }
  resetRange(e) {
    let { head: t } = e.selection.main;
    this.from = Math.max(0, t - 1e4), this.to = Math.min(e.doc.length, t + 1e4);
  }
  reset(e) {
    this.resetRange(e), this.editContext.updateText(0, this.editContext.text.length, e.doc.sliceString(this.from, this.to)), this.setSelection(e);
  }
  revertPending(e) {
    let t = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(t.from), this.toContextPos(t.from + t.insert.length), e.doc.sliceString(t.from, t.to));
  }
  setSelection(e) {
    let { main: t } = e.selection, i = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))), s = this.toContextPos(t.head);
    (this.editContext.selectionStart != i || this.editContext.selectionEnd != s) && this.editContext.updateSelection(i, s);
  }
  rangeIsValid(e) {
    let { head: t } = e.selection.main;
    return !(this.from > 0 && t - this.from < 500 || this.to < e.doc.length && this.to - t < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(e, t = this.to - this.from) {
    e = Math.min(e, t);
    let i = this.composing;
    return i && i.drifted ? i.editorBase + (e - i.contextBase) : e + this.from;
  }
  toContextPos(e) {
    let t = this.composing;
    return t && t.drifted ? t.contextBase + (e - t.editorBase) : e - this.from;
  }
  destroy() {
    for (let e in this.handlers)
      this.editContext.removeEventListener(e, this.handlers[e]);
  }
}
class I {
  get state() {
    return this.viewState.state;
  }
  get viewport() {
    return this.viewState.viewport;
  }
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  get inView() {
    return this.viewState.inView;
  }
  get composing() {
    return this.inputState.composing > 0;
  }
  get compositionStarted() {
    return this.inputState.composing >= 0;
  }
  get root() {
    return this._root;
  }
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  constructor(e = {}) {
    var t;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = false, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), e.parent && e.parent.appendChild(this.dom);
    let { dispatch: i } = e;
    this.dispatchTransactions = e.dispatchTransactions || i && ((s) => s.forEach((o) => i(o, this))) || ((s) => this.update(s)), this.dispatch = this.dispatch.bind(this), this._root = e.root || Kd(e.parent) || document, this.viewState = new ra(e.state || U.create(e)), e.scrollTo && e.scrollTo.is(Wn) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Yi).map((s) => new ao(s));
    for (let s of this.plugins)
      s.update(this);
    this.observer = new hm(this), this.inputState = new Bp(this), this.inputState.ensureHandlers(this.plugins), this.docView = new zl(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((t = document.fonts) === null || t === void 0) && t.ready && document.fonts.ready.then(() => this.requestMeasure());
  }
  dispatch(...e) {
    let t = e.length == 1 && e[0] instanceof de ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
    this.dispatchTransactions(t, this);
  }
  update(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let t = false, i = false, s, o = this.state;
    for (let u of e) {
      if (u.startState != o)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      o = u.state;
    }
    if (this.destroyed) {
      this.viewState.state = o;
      return;
    }
    let r = this.hasFocus, l = 0, a = null;
    e.some((u) => u.annotation(kc)) ? (this.inputState.notifiedFocused = r, l = 1) : r != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = r, a = _c(o, r), a || (l = 1));
    let h = this.observer.delayedAndroidKey, c = null;
    if (h ? (this.observer.clearDelayedAndroidKey(), c = this.observer.readChange(), (c && !this.state.doc.eq(o.doc) || !this.state.selection.eq(o.selection)) && (c = null)) : this.observer.clear(), o.facet(U.phrases) != this.state.facet(U.phrases))
      return this.setState(o);
    s = _s.create(this, o, e), s.flags |= l;
    let f = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of e) {
        if (f && (f = f.map(u.changes)), u.scrollIntoView) {
          let { main: d } = u.state.selection;
          f = new Si(d.empty ? d : k.cursor(d.head, d.head > d.anchor ? -1 : 1));
        }
        for (let d of u.effects)
          d.is(Wn) && (f = d.value.clip(this.state));
      }
      this.viewState.update(s, f), this.bidiCache = Cs.update(this.bidiCache, s.changes), s.empty || (this.updatePlugins(s), this.inputState.update(s)), t = this.docView.update(s), this.state.facet(Ji) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(t, e.some((u) => u.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (s.startState.facet(Yn) != s.state.facet(Yn) && (this.viewState.mustMeasureContent = true), (t || i || f || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), t && this.docViewUpdate(), !s.empty)
      for (let u of this.state.facet(nr))
        try {
          u(s);
        } catch (d) {
          Le(this.state, d, "update listener");
        }
    (a || c) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), c && !gc(this, c) && h.force && _i(this.contentDOM, h.key, h.keyCode);
    });
  }
  setState(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let t = this.hasFocus;
    try {
      for (let i of this.plugins)
        i.destroy(this);
      this.viewState = new ra(e), this.plugins = e.facet(Yi).map((i) => new ao(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView.destroy(), this.docView = new zl(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(Yi), i = e.state.facet(Yi);
    if (t != i) {
      let s = [];
      for (let o of i) {
        let r = t.indexOf(o);
        if (r < 0)
          s.push(new ao(o));
        else {
          let l = this.plugins[r];
          l.mustUpdate = e, s.push(l);
        }
      }
      for (let o of this.plugins)
        o.mustUpdate != e && o.destroy(this);
      this.plugins = s, this.pluginMap.clear();
    } else
      for (let s of this.plugins)
        s.mustUpdate = e;
    for (let s = 0; s < this.plugins.length; s++)
      this.plugins[s].update(this);
    t != i && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let t = e.value;
      if (t && t.docViewUpdate)
        try {
          t.docViewUpdate(this);
        } catch (i) {
          Le(this.state, i, "doc view update listener");
        }
    }
  }
  measure(e = true) {
    if (this.destroyed)
      return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, e && this.observer.forceFlush();
    let t = null, i = this.scrollDOM, s = i.scrollTop * this.scaleY, { scrollAnchorPos: o, scrollAnchorHeight: r } = this.viewState;
    Math.abs(s - this.viewState.scrollTop) > 1 && (r = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (r < 0)
          if (Nh(i))
            o = -1, r = this.viewState.heightMap.height;
          else {
            let d = this.viewState.scrollAnchorAt(s);
            o = d.from, r = d.top;
          }
        this.updateState = 1;
        let a = this.viewState.measure(this);
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (l > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let h = [];
        a & 4 || ([this.measureRequests, h] = [h, this.measureRequests]);
        let c = h.map((d) => {
          try {
            return d.read(this);
          } catch (p) {
            return Le(this.state, p), ca;
          }
        }), f = _s.create(this, this.state, []), u = false;
        f.flags |= a, t ? t.flags |= a : t = f, this.updateState = 2, f.empty || (this.updatePlugins(f), this.inputState.update(f), this.updateAttrs(), u = this.docView.update(f), u && this.docViewUpdate());
        for (let d = 0; d < h.length; d++)
          if (c[d] != ca)
            try {
              let p = h[d];
              p.write && p.write(c[d], this);
            } catch (p) {
              Le(this.state, p);
            }
        if (u && this.docView.updateSelection(true), !f.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, r = -1;
              continue;
            } else {
              let p = (o < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(o).top) - r;
              if (p > 1 || p < -1) {
                s = s + p, i.scrollTop = s / this.scaleY, r = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (t && !t.empty)
      for (let l of this.state.facet(nr))
        l(t);
  }
  get themeClasses() {
    return ar + " " + (this.state.facet(lr) ? Mc : Ac) + " " + this.state.facet(Yn);
  }
  updateAttrs() {
    let e = fa(this, cc, { class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses }), t = { spellcheck: "false", autocorrect: "off", autocapitalize: "off", writingsuggestions: "false", translate: "no", contenteditable: this.state.facet(_t) ? "true" : "false", class: "cm-content", style: `${V.tabSize}: ${this.state.tabSize}`, role: "textbox", "aria-multiline": "true" };
    this.state.readOnly && (t["aria-readonly"] = "true"), fa(this, Wr, t);
    let i = this.observer.ignore(() => {
      let s = Qo(this.contentDOM, this.contentAttrs, t), o = Qo(this.dom, this.editorAttrs, e);
      return s || o;
    });
    return this.editorAttrs = e, this.contentAttrs = t, i;
  }
  showAnnouncements(e) {
    let t = true;
    for (let i of e)
      for (let s of i.effects)
        if (s.is(I.announce)) {
          t && (this.announceDOM.textContent = ""), t = false;
          let o = this.announceDOM.appendChild(document.createElement("div"));
          o.textContent = s.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(Ji);
    let e = this.state.facet(I.cspNonce);
    Ft.mount(this.root, this.styleModules.concat(lm).reverse(), e ? { nonce: e } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(false);
  }
  requestMeasure(e) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e) {
      if (this.measureRequests.indexOf(e) > -1)
        return;
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++)
          if (this.measureRequests[t].key === e.key) {
            this.measureRequests[t] = e;
            return;
          }
      }
      this.measureRequests.push(e);
    }
  }
  plugin(e) {
    let t = this.pluginMap.get(e);
    return (t === void 0 || t && t.spec != e) && this.pluginMap.set(e, t = this.plugins.find((i) => i.spec == e) || null), t && t.update(this).value;
  }
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  get scaleX() {
    return this.viewState.scaleX;
  }
  get scaleY() {
    return this.viewState.scaleY;
  }
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  moveByChar(e, t, i) {
    return co(this, e, jl(this, e, t, i));
  }
  moveByGroup(e, t) {
    return co(this, e, jl(this, e, t, (i) => _p(this, e.head, i)));
  }
  visualLineSide(e, t) {
    let i = this.bidiSpans(e), s = this.textDirectionAt(e.from), o = i[t ? i.length - 1 : 0];
    return k.cursor(o.side(t, s) + e.from, o.forward(!t, s) ? 1 : -1);
  }
  moveToLineBoundary(e, t, i = true) {
    return kp(this, e, t, i);
  }
  moveVertically(e, t, i) {
    return co(this, e, Sp(this, e, t, i));
  }
  domAtPos(e) {
    return this.docView.domAtPos(e);
  }
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = true) {
    return this.readMeasured(), mc(this, e, t);
  }
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(e, t);
    if (!i || i.left == i.right)
      return i;
    let s = this.state.doc.lineAt(e), o = this.bidiSpans(s), r = o[Nt.find(o, e - s.from, -1, t)];
    return On(i, r.dir == oe.LTR == t > 0);
  }
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e);
  }
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  textDirectionAt(e) {
    return !this.state.facet(rc) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(e) {
    if (e.length > um)
      return Qh(e.length);
    let t = this.textDirectionAt(e.from), i;
    for (let o of this.bidiCache)
      if (o.from == e.from && o.dir == t && (o.fresh || Xh(o.isolates, i = Fl(this, e))))
        return o.order;
    i || (i = Fl(this, e));
    let s = rp(e.text, t, i);
    return this.bidiCache.push(new Cs(e.from, e.to, t, i, true, s)), s;
  }
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || V.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  focus() {
    this.observer.ignore(() => {
      Lh(this.contentDOM), this.docView.updateSelection();
    });
  }
  setRoot(e) {
    this._root != e && (this._root = e, this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window), this.mountStyles());
  }
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let e of this.plugins)
      e.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = true;
  }
  static scrollIntoView(e, t = {}) {
    return Wn.of(new Si(typeof e == "number" ? k.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin));
  }
  scrollSnapshot() {
    let { scrollTop: e, scrollLeft: t } = this.scrollDOM, i = this.viewState.scrollAnchorAt(e);
    return Wn.of(new Si(k.cursor(i.from), "start", "start", i.top - e, t, true));
  }
  setTabFocusMode(e) {
    e == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof e == "boolean" ? this.inputState.tabFocusMode = e ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e);
  }
  static domEventHandlers(e) {
    return ae.define(() => ({}), { eventHandlers: e });
  }
  static domEventObservers(e) {
    return ae.define(() => ({}), { eventObservers: e });
  }
  static theme(e, t) {
    let i = Ft.newName(), s = [Yn.of(i), Ji.of(hr(`.${i}`, e))];
    return t && t.dark && s.push(lr.of(true)), s;
  }
  static baseTheme(e) {
    return fi.lowest(Ji.of(hr("." + ar, e, Dc)));
  }
  static findFromDOM(e) {
    var t;
    let i = e.querySelector(".cm-content"), s = i && ne.get(i) || ne.get(e);
    return ((t = s == null ? void 0 : s.rootView) === null || t === void 0 ? void 0 : t.view) || null;
  }
}
I.styleModule = Ji;
I.inputHandler = sc;
I.clipboardInputFilter = zr;
I.clipboardOutputFilter = Hr;
I.scrollHandler = ac;
I.focusChangeEffect = oc;
I.perLineTextDirection = rc;
I.exceptionSink = nc;
I.updateListener = nr;
I.editable = _t;
I.mouseSelectionStyle = ic;
I.dragMovesSelection = tc;
I.clickAddsSelectionRange = ec;
I.decorations = mn;
I.outerDecorations = fc;
I.atomicRanges = qr;
I.bidiIsolatedRanges = uc;
I.scrollMargins = dc;
I.darkTheme = lr;
I.cspNonce = $.define({ combine: (n) => n.length ? n[0] : "" });
I.contentAttributes = Wr;
I.editorAttributes = cc;
I.lineWrapping = I.contentAttributes.of({ class: "cm-lineWrapping" });
I.announce = H.define();
const um = 4096, ca = {};
class Cs {
  constructor(e, t, i, s, o, r) {
    this.from = e, this.to = t, this.dir = i, this.isolates = s, this.fresh = o, this.order = r;
  }
  static update(e, t) {
    if (t.empty && !e.some((o) => o.fresh))
      return e;
    let i = [], s = e.length ? e[e.length - 1].dir : oe.LTR;
    for (let o = Math.max(0, e.length - 10); o < e.length; o++) {
      let r = e[o];
      r.dir == s && !t.touchesRange(r.from, r.to) && i.push(new Cs(t.mapPos(r.from, 1), t.mapPos(r.to, -1), r.dir, r.isolates, false, r.order));
    }
    return i;
  }
}
function fa(n, e, t) {
  for (let i = n.state.facet(e), s = i.length - 1; s >= 0; s--) {
    let o = i[s], r = typeof o == "function" ? o(n) : o;
    r && Xo(r, t);
  }
  return t;
}
const dm = V.mac ? "mac" : V.windows ? "win" : V.linux ? "linux" : "key";
function pm(n, e) {
  const t = n.split(/-(?!$)/);
  let i = t[t.length - 1];
  i == "Space" && (i = " ");
  let s, o, r, l;
  for (let a = 0; a < t.length - 1; ++a) {
    const h = t[a];
    if (/^(cmd|meta|m)$/i.test(h))
      l = true;
    else if (/^a(lt)?$/i.test(h))
      s = true;
    else if (/^(c|ctrl|control)$/i.test(h))
      o = true;
    else if (/^s(hift)?$/i.test(h))
      r = true;
    else if (/^mod$/i.test(h))
      e == "mac" ? l = true : o = true;
    else
      throw new Error("Unrecognized modifier name: " + h);
  }
  return s && (i = "Alt-" + i), o && (i = "Ctrl-" + i), l && (i = "Meta-" + i), r && (i = "Shift-" + i), i;
}
function Jn(n, e, t) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t !== false && e.shiftKey && (n = "Shift-" + n), n;
}
const mm = fi.default(I.domEventHandlers({ keydown(n, e) {
  return Oc(Tc(e.state), n, e, "editor");
} })), Pn = $.define({ enables: mm }), ua = /* @__PURE__ */ new WeakMap();
function Tc(n) {
  let e = n.facet(Pn), t = ua.get(e);
  return t || ua.set(e, t = ym(e.reduce((i, s) => i.concat(s), []))), t;
}
function gm(n, e, t) {
  return Oc(Tc(n.state), e, n, t);
}
let Pt = null;
const bm = 4e3;
function ym(n, e = dm) {
  let t = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), s = (r, l) => {
    let a = i[r];
    if (a == null)
      i[r] = l;
    else if (a != l)
      throw new Error("Key binding " + r + " is used both as a regular binding and as a multi-stroke prefix");
  }, o = (r, l, a, h, c) => {
    var f, u;
    let d = t[r] || (t[r] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((y) => pm(y, e));
    for (let y = 1; y < p.length; y++) {
      let w = p.slice(0, y).join(" ");
      s(w, true), d[w] || (d[w] = { preventDefault: true, stopPropagation: false, run: [(M) => {
        let S = Pt = { view: M, prefix: w, scope: r };
        return setTimeout(() => {
          Pt == S && (Pt = null);
        }, bm), true;
      }] });
    }
    let g = p.join(" ");
    s(g, false);
    let m = d[g] || (d[g] = { preventDefault: false, stopPropagation: false, run: ((u = (f = d._any) === null || f === void 0 ? void 0 : f.run) === null || u === void 0 ? void 0 : u.slice()) || [] });
    a && m.run.push(a), h && (m.preventDefault = true), c && (m.stopPropagation = true);
  };
  for (let r of n) {
    let l = r.scope ? r.scope.split(" ") : ["editor"];
    if (r.any)
      for (let h of l) {
        let c = t[h] || (t[h] = /* @__PURE__ */ Object.create(null));
        c._any || (c._any = { preventDefault: false, stopPropagation: false, run: [] });
        let { any: f } = r;
        for (let u in c)
          c[u].run.push((d) => f(d, cr));
      }
    let a = r[e] || r.key;
    if (a)
      for (let h of l)
        o(h, a, r.run, r.preventDefault, r.stopPropagation), r.shift && o(h, "Shift-" + a, r.shift, r.preventDefault, r.stopPropagation);
  }
  return t;
}
let cr = null;
function Oc(n, e, t, i) {
  cr = e;
  let s = Hd(e), o = Be(s, 0), r = ct(o) == s.length && s != " ", l = "", a = false, h = false, c = false;
  Pt && Pt.view == t && Pt.scope == i && (l = Pt.prefix + " ", yc.indexOf(e.keyCode) < 0 && (h = true, Pt = null));
  let f = /* @__PURE__ */ new Set(), u = (m) => {
    if (m) {
      for (let y of m.run)
        if (!f.has(y) && (f.add(y), y(t)))
          return m.stopPropagation && (c = true), true;
      m.preventDefault && (m.stopPropagation && (c = true), h = true);
    }
    return false;
  }, d = n[i], p, g;
  return d && (u(d[l + Jn(s, e, !r)]) ? a = true : r && (e.altKey || e.metaKey || e.ctrlKey) && !(V.windows && e.ctrlKey && e.altKey) && (p = zt[e.keyCode]) && p != s ? (u(d[l + Jn(p, e, true)]) || e.shiftKey && (g = dn[e.keyCode]) != s && g != p && u(d[l + Jn(g, e, false)])) && (a = true) : r && e.shiftKey && u(d[l + Jn(s, e, true)]) && (a = true), !a && u(d._any) && (a = true)), h && (a = true), a && c && e.stopPropagation(), cr = null, a;
}
class Rn {
  constructor(e, t, i, s, o) {
    this.className = e, this.left = t, this.top = i, this.width = s, this.height = o;
  }
  draw() {
    let e = document.createElement("div");
    return e.className = this.className, this.adjust(e), e;
  }
  update(e, t) {
    return t.className != this.className ? false : (this.adjust(e), true);
  }
  adjust(e) {
    e.style.left = this.left + "px", e.style.top = this.top + "px", this.width != null && (e.style.width = this.width + "px"), e.style.height = this.height + "px";
  }
  eq(e) {
    return this.left == e.left && this.top == e.top && this.width == e.width && this.height == e.height && this.className == e.className;
  }
  static forRange(e, t, i) {
    if (i.empty) {
      let s = e.coordsAtPos(i.head, i.assoc || 1);
      if (!s)
        return [];
      let o = Ec(e);
      return [new Rn(t, s.left - o.left, s.top - o.top, null, s.bottom - s.top)];
    } else
      return vm(e, t, i);
  }
}
function Ec(n) {
  let e = n.scrollDOM.getBoundingClientRect();
  return { left: (n.textDirection == oe.LTR ? e.left : e.right - n.scrollDOM.clientWidth * n.scaleX) - n.scrollDOM.scrollLeft * n.scaleX, top: e.top - n.scrollDOM.scrollTop * n.scaleY };
}
function da(n, e, t, i) {
  let s = n.coordsAtPos(e, t * 2);
  if (!s)
    return i;
  let o = n.dom.getBoundingClientRect(), r = (s.top + s.bottom) / 2, l = n.posAtCoords({ x: o.left + 1, y: r }), a = n.posAtCoords({ x: o.right - 1, y: r });
  return l == null || a == null ? i : { from: Math.max(i.from, Math.min(l, a)), to: Math.min(i.to, Math.max(l, a)) };
}
function vm(n, e, t) {
  if (t.to <= n.viewport.from || t.from >= n.viewport.to)
    return [];
  let i = Math.max(t.from, n.viewport.from), s = Math.min(t.to, n.viewport.to), o = n.textDirection == oe.LTR, r = n.contentDOM, l = r.getBoundingClientRect(), a = Ec(n), h = r.querySelector(".cm-line"), c = h && window.getComputedStyle(h), f = l.left + (c ? parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)) : 0), u = l.right - (c ? parseInt(c.paddingRight) : 0), d = or(n, i), p = or(n, s), g = d.type == Oe.Text ? d : null, m = p.type == Oe.Text ? p : null;
  if (g && (n.lineWrapping || d.widgetLineBreaks) && (g = da(n, i, 1, g)), m && (n.lineWrapping || p.widgetLineBreaks) && (m = da(n, s, -1, m)), g && m && g.from == m.from && g.to == m.to)
    return w(M(t.from, t.to, g));
  {
    let _ = g ? M(t.from, null, g) : S(d, false), x = m ? M(null, t.to, m) : S(p, true), D = [];
    return (g || d).to < (m || p).from - (g && m ? 1 : 0) || d.widgetLineBreaks > 1 && _.bottom + n.defaultLineHeight / 2 < x.top ? D.push(y(f, _.bottom, u, x.top)) : _.bottom < x.top && n.elementAtHeight((_.bottom + x.top) / 2).type == Oe.Text && (_.bottom = x.top = (_.bottom + x.top) / 2), w(_).concat(D).concat(w(x));
  }
  function y(_, x, D, B) {
    return new Rn(e, _ - a.left, x - a.top, D - _, B - x);
  }
  function w({ top: _, bottom: x, horizontal: D }) {
    let B = [];
    for (let q = 0; q < D.length; q += 2)
      B.push(y(D[q], _, D[q + 1], x));
    return B;
  }
  function M(_, x, D) {
    let B = 1e9, q = -1e9, E = [];
    function T(K, Z, he, Ne, it) {
      let be = n.coordsAtPos(K, K == D.to ? -2 : 2), ze = n.coordsAtPos(he, he == D.from ? 2 : -2);
      !be || !ze || (B = Math.min(be.top, ze.top, B), q = Math.max(be.bottom, ze.bottom, q), it == oe.LTR ? E.push(o && Z ? f : be.left, o && Ne ? u : ze.right) : E.push(!o && Ne ? f : ze.left, !o && Z ? u : be.right));
    }
    let R = _ ?? D.from, j = x ?? D.to;
    for (let K of n.visibleRanges)
      if (K.to > R && K.from < j)
        for (let Z = Math.max(K.from, R), he = Math.min(K.to, j); ; ) {
          let Ne = n.state.doc.lineAt(Z);
          for (let it of n.bidiSpans(Ne)) {
            let be = it.from + Ne.from, ze = it.to + Ne.from;
            if (be >= he)
              break;
            ze > Z && T(Math.max(be, Z), _ == null && be <= R, Math.min(ze, he), x == null && ze >= j, it.dir);
          }
          if (Z = Ne.to + 1, Z >= he)
            break;
        }
    return E.length == 0 && T(R, _ == null, j, x == null, n.textDirection), { top: B, bottom: q, horizontal: E };
  }
  function S(_, x) {
    let D = l.top + (x ? _.top : _.bottom);
    return { top: D, bottom: D, horizontal: [] };
  }
}
function wm(n, e) {
  return n.constructor == e.constructor && n.eq(e);
}
class xm {
  constructor(e, t) {
    this.view = e, this.layer = t, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), t.above && this.dom.classList.add("cm-layer-above"), t.class && this.dom.classList.add(t.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(ms) != e.state.facet(ms) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && (this.scale(), e.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(e) {
    this.layer.updateOnDocViewUpdate !== false && e.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let t = 0, i = e.facet(ms);
    for (; t < i.length && i[t] != this.layer; )
      t++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: e, scaleY: t } = this.view;
    (e != this.scaleX || t != this.scaleY) && (this.scaleX = e, this.scaleY = t, this.dom.style.transform = `scale(${1 / e}, ${1 / t})`);
  }
  draw(e) {
    if (e.length != this.drawn.length || e.some((t, i) => !wm(t, this.drawn[i]))) {
      let t = this.dom.firstChild, i = 0;
      for (let s of e)
        s.update && t && s.constructor && this.drawn[i].constructor && s.update(t, this.drawn[i]) ? (t = t.nextSibling, i++) : this.dom.insertBefore(s.draw(), t);
      for (; t; ) {
        let s = t.nextSibling;
        t.remove(), t = s;
      }
      this.drawn = e;
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const ms = $.define();
function Bc(n) {
  return [ae.define((e) => new xm(e, n)), ms.of(n)];
}
const Pc = !(V.ios && V.webkit && V.webkit_version < 534), gn = $.define({ combine(n) {
  return vt(n, { cursorBlinkRate: 1200, drawRangeCursor: true }, { cursorBlinkRate: (e, t) => Math.min(e, t), drawRangeCursor: (e, t) => e || t });
} });
function km(n = {}) {
  return [gn.of(n), _m, Sm, Cm, lc.of(true)];
}
function Rc(n) {
  return n.startState.facet(gn) != n.state.facet(gn);
}
const _m = Bc({ above: true, markers(n) {
  let { state: e } = n, t = e.facet(gn), i = [];
  for (let s of e.selection.ranges) {
    let o = s == e.selection.main;
    if (s.empty ? !o || Pc : t.drawRangeCursor) {
      let r = o ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = s.empty ? s : k.cursor(s.head, s.head > s.anchor ? -1 : 1);
      for (let a of Rn.forRange(n, r, l))
        i.push(a);
    }
  }
  return i;
}, update(n, e) {
  n.transactions.some((i) => i.selection) && (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
  let t = Rc(n);
  return t && pa(n.state, e), n.docChanged || n.selectionSet || t;
}, mount(n, e) {
  pa(e.state, n);
}, class: "cm-cursorLayer" });
function pa(n, e) {
  e.style.animationDuration = n.facet(gn).cursorBlinkRate + "ms";
}
const Sm = Bc({ above: false, markers(n) {
  return n.state.selection.ranges.map((e) => e.empty ? [] : Rn.forRange(n, "cm-selectionBackground", e)).reduce((e, t) => e.concat(t));
}, update(n, e) {
  return n.docChanged || n.selectionSet || n.viewportChanged || Rc(n);
}, class: "cm-selectionLayer" }), fr = { ".cm-line": { "& ::selection, &::selection": { backgroundColor: "transparent !important" } }, ".cm-content": { "& :focus": { caretColor: "initial !important", "&::selection, & ::selection": { backgroundColor: "Highlight !important" } } } };
Pc && (fr[".cm-line"].caretColor = fr[".cm-content"].caretColor = "transparent !important");
const Cm = fi.highest(I.theme(fr)), Lc = H.define({ map(n, e) {
  return n == null ? null : e.mapPos(n);
} }), Zi = ge.define({ create() {
  return null;
}, update(n, e) {
  return n != null && (n = e.changes.mapPos(n)), e.effects.reduce((t, i) => i.is(Lc) ? i.value : t, n);
} }), Am = ae.fromClass(class {
  constructor(n) {
    this.view = n, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(n) {
    var e;
    let t = n.state.field(Zi);
    t == null ? this.cursor != null && ((e = this.cursor) === null || e === void 0 || e.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (n.startState.field(Zi) != t || n.docChanged || n.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let { view: n } = this, e = n.state.field(Zi), t = e != null && n.coordsAtPos(e);
    if (!t)
      return null;
    let i = n.scrollDOM.getBoundingClientRect();
    return { left: t.left - i.left + n.scrollDOM.scrollLeft * n.scaleX, top: t.top - i.top + n.scrollDOM.scrollTop * n.scaleY, height: t.bottom - t.top };
  }
  drawCursor(n) {
    if (this.cursor) {
      let { scaleX: e, scaleY: t } = this.view;
      n ? (this.cursor.style.left = n.left / e + "px", this.cursor.style.top = n.top / t + "px", this.cursor.style.height = n.height / t + "px") : this.cursor.style.left = "-100000px";
    }
  }
  destroy() {
    this.cursor && this.cursor.remove();
  }
  setDropPos(n) {
    this.view.state.field(Zi) != n && this.view.dispatch({ effects: Lc.of(n) });
  }
}, { eventObservers: { dragover(n) {
  this.setDropPos(this.view.posAtCoords({ x: n.clientX, y: n.clientY }));
}, dragleave(n) {
  (n.target == this.view.contentDOM || !this.view.contentDOM.contains(n.relatedTarget)) && this.setDropPos(null);
}, dragend() {
  this.setDropPos(null);
}, drop() {
  this.setDropPos(null);
} } });
function Mm() {
  return [Zi, Am];
}
function ma(n, e, t, i, s) {
  e.lastIndex = 0;
  for (let o = n.iterRange(t, i), r = t, l; !o.next().done; r += o.value.length)
    if (!o.lineBreak)
      for (; l = e.exec(o.value); )
        s(r + l.index, l);
}
function Dm(n, e) {
  let t = n.visibleRanges;
  if (t.length == 1 && t[0].from == n.viewport.from && t[0].to == n.viewport.to)
    return t;
  let i = [];
  for (let { from: s, to: o } of t)
    s = Math.max(n.state.doc.lineAt(s).from, s - e), o = Math.min(n.state.doc.lineAt(o).to, o + e), i.length && i[i.length - 1].to >= s ? i[i.length - 1].to = o : i.push({ from: s, to: o });
  return i;
}
class Ic {
  constructor(e) {
    const { regexp: t, decoration: i, decorate: s, boundary: o, maxLength: r = 1e3 } = e;
    if (!t.global)
      throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = t, s)
      this.addMatch = (l, a, h, c) => s(c, h, h + l[0].length, l, a);
    else if (typeof i == "function")
      this.addMatch = (l, a, h, c) => {
        let f = i(l, a, h);
        f && c(h, h + l[0].length, f);
      };
    else if (i)
      this.addMatch = (l, a, h, c) => c(h, h + l[0].length, i);
    else
      throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = o, this.maxLength = r;
  }
  createDeco(e) {
    let t = new Ct(), i = t.add.bind(t);
    for (let { from: s, to: o } of Dm(e, this.maxLength))
      ma(e.state.doc, this.regexp, s, o, (r, l) => this.addMatch(l, e, r, i));
    return t.finish();
  }
  updateDeco(e, t) {
    let i = 1e9, s = -1;
    return e.docChanged && e.changes.iterChanges((o, r, l, a) => {
      a >= e.view.viewport.from && l <= e.view.viewport.to && (i = Math.min(l, i), s = Math.max(a, s));
    }), e.viewportMoved || s - i > 1e3 ? this.createDeco(e.view) : s > -1 ? this.updateRange(e.view, t.map(e.changes), i, s) : t;
  }
  updateRange(e, t, i, s) {
    for (let o of e.visibleRanges) {
      let r = Math.max(o.from, i), l = Math.min(o.to, s);
      if (l > r) {
        let a = e.state.doc.lineAt(r), h = a.to < l ? e.state.doc.lineAt(l) : a, c = Math.max(o.from, a.from), f = Math.min(o.to, h.to);
        if (this.boundary) {
          for (; r > a.from; r--)
            if (this.boundary.test(a.text[r - 1 - a.from])) {
              c = r;
              break;
            }
          for (; l < h.to; l++)
            if (this.boundary.test(h.text[l - h.from])) {
              f = l;
              break;
            }
        }
        let u = [], d, p = (g, m, y) => u.push(y.range(g, m));
        if (a == h)
          for (this.regexp.lastIndex = c - a.from; (d = this.regexp.exec(a.text)) && d.index < f - a.from; )
            this.addMatch(d, e, d.index + a.from, p);
        else
          ma(e.state.doc, this.regexp, c, f, (g, m) => this.addMatch(m, e, g, p));
        t = t.update({ filterFrom: c, filterTo: f, filter: (g, m) => g < c || m > f, add: u });
      }
    }
    return t;
  }
}
const ur = /x/.unicode != null ? "gu" : "g", Tm = new RegExp(`[\0-\b
-\x7F-\x9F\xAD\u061C\u200B\u200E\u200F\u2028\u2029\u202D\u202E\u2066\u2067\u2069\uFEFF\uFFF9-\uFFFC]`, ur), Om = { 0: "null", 7: "bell", 8: "backspace", 10: "newline", 11: "vertical tab", 13: "carriage return", 27: "escape", 8203: "zero width space", 8204: "zero width non-joiner", 8205: "zero width joiner", 8206: "left-to-right mark", 8207: "right-to-left mark", 8232: "line separator", 8237: "left-to-right override", 8238: "right-to-left override", 8294: "left-to-right isolate", 8295: "right-to-left isolate", 8297: "pop directional isolate", 8233: "paragraph separator", 65279: "zero width no-break space", 65532: "object replacement" };
let po = null;
function Em() {
  var n;
  if (po == null && typeof document < "u" && document.body) {
    let e = document.body.style;
    po = ((n = e.tabSize) !== null && n !== void 0 ? n : e.MozTabSize) != null;
  }
  return po || false;
}
const gs = $.define({ combine(n) {
  let e = vt(n, { render: null, specialChars: Tm, addSpecialChars: null });
  return (e.replaceTabs = !Em()) && (e.specialChars = new RegExp("	|" + e.specialChars.source, ur)), e.addSpecialChars && (e.specialChars = new RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, ur)), e;
} });
function Bm(n = {}) {
  return [gs.of(n), Pm()];
}
let ga = null;
function Pm() {
  return ga || (ga = ae.fromClass(class {
    constructor(n) {
      this.view = n, this.decorations = F.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(n.state.facet(gs)), this.decorations = this.decorator.createDeco(n);
    }
    makeDecorator(n) {
      return new Ic({ regexp: n.specialChars, decoration: (e, t, i) => {
        let { doc: s } = t.state, o = Be(e[0], 0);
        if (o == 9) {
          let r = s.lineAt(i), l = t.state.tabSize, a = $i(r.text, l, i - r.from);
          return F.replace({ widget: new Nm((l - a % l) * this.view.defaultCharacterWidth / this.view.scaleX) });
        }
        return this.decorationCache[o] || (this.decorationCache[o] = F.replace({ widget: new Im(n, o) }));
      }, boundary: n.replaceTabs ? void 0 : /[^]/ });
    }
    update(n) {
      let e = n.state.facet(gs);
      n.startState.facet(gs) != e ? (this.decorator = this.makeDecorator(e), this.decorations = this.decorator.createDeco(n.view)) : this.decorations = this.decorator.updateDeco(n, this.decorations);
    }
  }, { decorations: (n) => n.decorations }));
}
const Rm = "\u2022";
function Lm(n) {
  return n >= 32 ? Rm : n == 10 ? "\u2424" : String.fromCharCode(9216 + n);
}
class Im extends wt {
  constructor(e, t) {
    super(), this.options = e, this.code = t;
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let t = Lm(this.code), i = e.state.phrase("Control character") + " " + (Om[this.code] || "0x" + this.code.toString(16)), s = this.options.render && this.options.render(this.code, i, t);
    if (s)
      return s;
    let o = document.createElement("span");
    return o.textContent = t, o.title = i, o.setAttribute("aria-label", i), o.className = "cm-specialChar", o;
  }
  ignoreEvent() {
    return false;
  }
}
class Nm extends wt {
  constructor(e) {
    super(), this.width = e;
  }
  eq(e) {
    return e.width == this.width;
  }
  toDOM() {
    let e = document.createElement("span");
    return e.textContent = "	", e.className = "cm-tab", e.style.width = this.width + "px", e;
  }
  ignoreEvent() {
    return false;
  }
}
function Vm() {
  return Fm;
}
const $m = F.line({ class: "cm-activeLine" }), Fm = ae.fromClass(class {
  constructor(n) {
    this.decorations = this.getDeco(n);
  }
  update(n) {
    (n.docChanged || n.selectionSet) && (this.decorations = this.getDeco(n.view));
  }
  getDeco(n) {
    let e = -1, t = [];
    for (let i of n.state.selection.ranges) {
      let s = n.lineBlockAt(i.head);
      s.from > e && (t.push($m.range(s.from)), e = s.from);
    }
    return F.set(t);
  }
}, { decorations: (n) => n.decorations });
class zm extends wt {
  constructor(e) {
    super(), this.content = e;
  }
  toDOM(e) {
    let t = document.createElement("span");
    return t.className = "cm-placeholder", t.style.pointerEvents = "none", t.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : typeof this.content == "function" ? this.content(e) : this.content.cloneNode(true)), typeof this.content == "string" ? t.setAttribute("aria-label", "placeholder " + this.content) : t.setAttribute("aria-hidden", "true"), t;
  }
  coordsAt(e) {
    let t = e.firstChild ? Di(e.firstChild) : [];
    if (!t.length)
      return null;
    let i = window.getComputedStyle(e.parentNode), s = On(t[0], i.direction != "rtl"), o = parseInt(i.lineHeight);
    return s.bottom - s.top > o * 1.5 ? { left: s.left, right: s.right, top: s.top, bottom: s.top + o } : s;
  }
  ignoreEvent() {
    return false;
  }
}
function Hm(n) {
  return ae.fromClass(class {
    constructor(e) {
      this.view = e, this.placeholder = n ? F.set([F.widget({ widget: new zm(n), side: 1 }).range(0)]) : F.none;
    }
    get decorations() {
      return this.view.state.doc.length ? F.none : this.placeholder;
    }
  }, { decorations: (e) => e.decorations });
}
const dr = 2e3;
function Wm(n, e, t) {
  let i = Math.min(e.line, t.line), s = Math.max(e.line, t.line), o = [];
  if (e.off > dr || t.off > dr || e.col < 0 || t.col < 0) {
    let r = Math.min(e.off, t.off), l = Math.max(e.off, t.off);
    for (let a = i; a <= s; a++) {
      let h = n.doc.line(a);
      h.length <= l && o.push(k.range(h.from + r, h.to + l));
    }
  } else {
    let r = Math.min(e.col, t.col), l = Math.max(e.col, t.col);
    for (let a = i; a <= s; a++) {
      let h = n.doc.line(a), c = qo(h.text, r, n.tabSize, true);
      if (c < 0)
        o.push(k.cursor(h.to));
      else {
        let f = qo(h.text, l, n.tabSize);
        o.push(k.range(h.from + c, h.from + f));
      }
    }
  }
  return o;
}
function qm(n, e) {
  let t = n.coordsAtPos(n.viewport.from);
  return t ? Math.round(Math.abs((t.left - e) / n.defaultCharacterWidth)) : -1;
}
function ba(n, e) {
  let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, false), i = n.state.doc.lineAt(t), s = t - i.from, o = s > dr ? -1 : s == i.length ? qm(n, e.clientX) : $i(i.text, n.state.tabSize, t - i.from);
  return { line: i.number, col: o, off: s };
}
function Um(n, e) {
  let t = ba(n, e), i = n.state.selection;
  return t ? { update(s) {
    if (s.docChanged) {
      let o = s.changes.mapPos(s.startState.doc.line(t.line).from), r = s.state.doc.lineAt(o);
      t = { line: r.number, col: t.col, off: Math.min(t.off, r.length) }, i = i.map(s.changes);
    }
  }, get(s, o, r) {
    let l = ba(n, s);
    if (!l)
      return i;
    let a = Wm(n.state, t, l);
    return a.length ? r ? k.create(a.concat(i.ranges)) : k.create(a) : i;
  } } : null;
}
function jm(n) {
  let e = (n == null ? void 0 : n.eventFilter) || ((t) => t.altKey && t.button == 0);
  return I.mouseSelectionStyle.of((t, i) => e(i) ? Um(t, i) : null);
}
const Km = { Alt: [18, (n) => !!n.altKey], Control: [17, (n) => !!n.ctrlKey], Shift: [16, (n) => !!n.shiftKey], Meta: [91, (n) => !!n.metaKey] }, Gm = { style: "cursor: crosshair" };
function Ym(n = {}) {
  let [e, t] = Km[n.key || "Alt"], i = ae.fromClass(class {
    constructor(s) {
      this.view = s, this.isDown = false;
    }
    set(s) {
      this.isDown != s && (this.isDown = s, this.view.update([]));
    }
  }, { eventObservers: { keydown(s) {
    this.set(s.keyCode == e || t(s));
  }, keyup(s) {
    (s.keyCode == e || !t(s)) && this.set(false);
  }, mousemove(s) {
    this.set(t(s));
  } } });
  return [i, I.contentAttributes.of((s) => {
    var o;
    return !((o = s.plugin(i)) === null || o === void 0) && o.isDown ? Gm : null;
  })];
}
const qi = "-10000px";
class Nc {
  constructor(e, t, i, s) {
    this.facet = t, this.createTooltipView = i, this.removeTooltipView = s, this.input = e.state.facet(t), this.tooltips = this.input.filter((r) => r);
    let o = null;
    this.tooltipViews = this.tooltips.map((r) => o = i(r, o));
  }
  update(e, t) {
    var i;
    let s = e.state.facet(this.facet), o = s.filter((a) => a);
    if (s === this.input) {
      for (let a of this.tooltipViews)
        a.update && a.update(e);
      return false;
    }
    let r = [], l = t ? [] : null;
    for (let a = 0; a < o.length; a++) {
      let h = o[a], c = -1;
      if (h) {
        for (let f = 0; f < this.tooltips.length; f++) {
          let u = this.tooltips[f];
          u && u.create == h.create && (c = f);
        }
        if (c < 0)
          r[a] = this.createTooltipView(h, a ? r[a - 1] : null), l && (l[a] = !!h.above);
        else {
          let f = r[a] = this.tooltipViews[c];
          l && (l[a] = t[c]), f.update && f.update(e);
        }
      }
    }
    for (let a of this.tooltipViews)
      r.indexOf(a) < 0 && (this.removeTooltipView(a), (i = a.destroy) === null || i === void 0 || i.call(a));
    return t && (l.forEach((a, h) => t[h] = a), t.length = l.length), this.input = s, this.tooltips = o, this.tooltipViews = r, true;
  }
}
function Jm(n) {
  let e = n.dom.ownerDocument.documentElement;
  return { top: 0, left: 0, bottom: e.clientHeight, right: e.clientWidth };
}
const mo = $.define({ combine: (n) => {
  var e, t, i;
  return { position: V.ios ? "absolute" : ((e = n.find((s) => s.position)) === null || e === void 0 ? void 0 : e.position) || "fixed", parent: ((t = n.find((s) => s.parent)) === null || t === void 0 ? void 0 : t.parent) || null, tooltipSpace: ((i = n.find((s) => s.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || Jm };
} }), ya = /* @__PURE__ */ new WeakMap(), Yr = ae.fromClass(class {
  constructor(n) {
    this.view = n, this.above = [], this.inView = true, this.madeAbsolute = false, this.lastTransaction = 0, this.measureTimeout = -1;
    let e = n.state.facet(mo);
    this.position = e.position, this.parent = e.parent, this.classes = n.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new Nc(n, qs, (t, i) => this.createTooltip(t, i), (t) => {
      this.resizeObserver && this.resizeObserver.unobserve(t.dom), t.dom.remove();
    }), this.above = this.manager.tooltips.map((t) => !!t.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((t) => {
      Date.now() > this.lastTransaction - 50 && t.length > 0 && t[t.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), n.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let n of this.manager.tooltipViews)
        this.intersectionObserver.observe(n.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(n) {
    n.transactions.length && (this.lastTransaction = Date.now());
    let e = this.manager.update(n, this.above);
    e && this.observeIntersection();
    let t = e || n.geometryChanged, i = n.state.facet(mo);
    if (i.position != this.position && !this.madeAbsolute) {
      this.position = i.position;
      for (let s of this.manager.tooltipViews)
        s.dom.style.position = this.position;
      t = true;
    }
    if (i.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = i.parent, this.createContainer();
      for (let s of this.manager.tooltipViews)
        this.container.appendChild(s.dom);
      t = true;
    } else
      this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    t && this.maybeMeasure();
  }
  createTooltip(n, e) {
    let t = n.create(this.view), i = e ? e.dom : null;
    if (t.dom.classList.add("cm-tooltip"), n.arrow && !t.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let s = document.createElement("div");
      s.className = "cm-tooltip-arrow", t.dom.appendChild(s);
    }
    return t.dom.style.position = this.position, t.dom.style.top = qi, t.dom.style.left = "0px", this.container.insertBefore(t.dom, i), t.mount && t.mount(this.view), this.resizeObserver && this.resizeObserver.observe(t.dom), t;
  }
  destroy() {
    var n, e, t;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let i of this.manager.tooltipViews)
      i.dom.remove(), (n = i.destroy) === null || n === void 0 || n.call(i);
    this.parent && this.container.remove(), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), (t = this.intersectionObserver) === null || t === void 0 || t.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let n = 1, e = 1, t = false;
    if (this.position == "fixed" && this.manager.tooltipViews.length) {
      let { dom: o } = this.manager.tooltipViews[0];
      if (V.gecko)
        t = o.offsetParent != this.container.ownerDocument.body;
      else if (o.style.top == qi && o.style.left == "0px") {
        let r = o.getBoundingClientRect();
        t = Math.abs(r.top + 1e4) > 1 || Math.abs(r.left) > 1;
      }
    }
    if (t || this.position == "absolute")
      if (this.parent) {
        let o = this.parent.getBoundingClientRect();
        o.width && o.height && (n = o.width / this.parent.offsetWidth, e = o.height / this.parent.offsetHeight);
      } else
        ({ scaleX: n, scaleY: e } = this.view.viewState);
    let i = this.view.scrollDOM.getBoundingClientRect(), s = Ur(this.view);
    return { visible: { left: i.left + s.left, top: i.top + s.top, right: i.right - s.right, bottom: i.bottom - s.bottom }, parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(), pos: this.manager.tooltips.map((o, r) => {
      let l = this.manager.tooltipViews[r];
      return l.getCoords ? l.getCoords(o.pos) : this.view.coordsAtPos(o.pos);
    }), size: this.manager.tooltipViews.map(({ dom: o }) => o.getBoundingClientRect()), space: this.view.state.facet(mo).tooltipSpace(this.view), scaleX: n, scaleY: e, makeAbsolute: t };
  }
  writeMeasure(n) {
    var e;
    if (n.makeAbsolute) {
      this.madeAbsolute = true, this.position = "absolute";
      for (let l of this.manager.tooltipViews)
        l.dom.style.position = "absolute";
    }
    let { visible: t, space: i, scaleX: s, scaleY: o } = n, r = [];
    for (let l = 0; l < this.manager.tooltips.length; l++) {
      let a = this.manager.tooltips[l], h = this.manager.tooltipViews[l], { dom: c } = h, f = n.pos[l], u = n.size[l];
      if (!f || a.clip !== false && (f.bottom <= Math.max(t.top, i.top) || f.top >= Math.min(t.bottom, i.bottom) || f.right < Math.max(t.left, i.left) - 0.1 || f.left > Math.min(t.right, i.right) + 0.1)) {
        c.style.top = qi;
        continue;
      }
      let d = a.arrow ? h.dom.querySelector(".cm-tooltip-arrow") : null, p = d ? 7 : 0, g = u.right - u.left, m = (e = ya.get(h)) !== null && e !== void 0 ? e : u.bottom - u.top, y = h.offset || Qm, w = this.view.textDirection == oe.LTR, M = u.width > i.right - i.left ? w ? i.left : i.right - u.width : w ? Math.max(i.left, Math.min(f.left - (d ? 14 : 0) + y.x, i.right - g)) : Math.min(Math.max(i.left, f.left - g + (d ? 14 : 0) - y.x), i.right - g), S = this.above[l];
      !a.strictSide && (S ? f.top - m - p - y.y < i.top : f.bottom + m + p + y.y > i.bottom) && S == i.bottom - f.bottom > f.top - i.top && (S = this.above[l] = !S);
      let _ = (S ? f.top - i.top : i.bottom - f.bottom) - p;
      if (_ < m && h.resize !== false) {
        if (_ < this.view.defaultLineHeight) {
          c.style.top = qi;
          continue;
        }
        ya.set(h, m), c.style.height = (m = _) / o + "px";
      } else
        c.style.height && (c.style.height = "");
      let x = S ? f.top - m - p - y.y : f.bottom + p + y.y, D = M + g;
      if (h.overlap !== true)
        for (let B of r)
          B.left < D && B.right > M && B.top < x + m && B.bottom > x && (x = S ? B.top - m - 2 - p : B.bottom + p + 2);
      if (this.position == "absolute" ? (c.style.top = (x - n.parent.top) / o + "px", va(c, (M - n.parent.left) / s)) : (c.style.top = x / o + "px", va(c, M / s)), d) {
        let B = f.left + (w ? y.x : -y.x) - (M + 14 - 7);
        d.style.left = B / s + "px";
      }
      h.overlap !== true && r.push({ left: M, top: x, right: D, bottom: x + m }), c.classList.toggle("cm-tooltip-above", S), c.classList.toggle("cm-tooltip-below", !S), h.positioned && h.positioned(n.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let n of this.manager.tooltipViews)
        n.dom.style.top = qi;
  }
}, { eventObservers: { scroll() {
  this.maybeMeasure();
} } });
function va(n, e) {
  let t = parseInt(n.style.left, 10);
  (isNaN(t) || Math.abs(e - t) > 1) && (n.style.left = e + "px");
}
const Xm = I.baseTheme({ ".cm-tooltip": { zIndex: 500, boxSizing: "border-box" }, "&light .cm-tooltip": { border: "1px solid #bbb", backgroundColor: "#f5f5f5" }, "&light .cm-tooltip-section:not(:first-child)": { borderTop: "1px solid #bbb" }, "&dark .cm-tooltip": { backgroundColor: "#333338", color: "white" }, ".cm-tooltip-arrow": { height: "7px", width: `${7 * 2}px`, position: "absolute", zIndex: -1, overflow: "hidden", "&:before, &:after": { content: "''", position: "absolute", width: 0, height: 0, borderLeft: "7px solid transparent", borderRight: "7px solid transparent" }, ".cm-tooltip-above &": { bottom: "-7px", "&:before": { borderTop: "7px solid #bbb" }, "&:after": { borderTop: "7px solid #f5f5f5", bottom: "1px" } }, ".cm-tooltip-below &": { top: "-7px", "&:before": { borderBottom: "7px solid #bbb" }, "&:after": { borderBottom: "7px solid #f5f5f5", top: "1px" } } }, "&dark .cm-tooltip .cm-tooltip-arrow": { "&:before": { borderTopColor: "#333338", borderBottomColor: "#333338" }, "&:after": { borderTopColor: "transparent", borderBottomColor: "transparent" } } }), Qm = { x: 0, y: 0 }, qs = $.define({ enables: [Yr, Xm] }), As = $.define({ combine: (n) => n.reduce((e, t) => e.concat(t), []) });
class Us {
  static create(e) {
    return new Us(e);
  }
  constructor(e) {
    this.view = e, this.mounted = false, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Nc(e, As, (t, i) => this.createHostedView(t, i), (t) => t.dom.remove());
  }
  createHostedView(e, t) {
    let i = e.create(this.view);
    return i.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(i.dom, t ? t.dom.nextSibling : this.dom.firstChild), this.mounted && i.mount && i.mount(this.view), i;
  }
  mount(e) {
    for (let t of this.manager.tooltipViews)
      t.mount && t.mount(e);
    this.mounted = true;
  }
  positioned(e) {
    for (let t of this.manager.tooltipViews)
      t.positioned && t.positioned(e);
  }
  update(e) {
    this.manager.update(e);
  }
  destroy() {
    var e;
    for (let t of this.manager.tooltipViews)
      (e = t.destroy) === null || e === void 0 || e.call(t);
  }
  passProp(e) {
    let t;
    for (let i of this.manager.tooltipViews) {
      let s = i[e];
      if (s !== void 0) {
        if (t === void 0)
          t = s;
        else if (t !== s)
          return;
      }
    }
    return t;
  }
  get offset() {
    return this.passProp("offset");
  }
  get getCoords() {
    return this.passProp("getCoords");
  }
  get overlap() {
    return this.passProp("overlap");
  }
  get resize() {
    return this.passProp("resize");
  }
}
const Zm = qs.compute([As], (n) => {
  let e = n.facet(As);
  return e.length === 0 ? null : { pos: Math.min(...e.map((t) => t.pos)), end: Math.max(...e.map((t) => {
    var i;
    return (i = t.end) !== null && i !== void 0 ? i : t.pos;
  })), create: Us.create, above: e[0].above, arrow: e.some((t) => t.arrow) };
});
class eg {
  constructor(e, t, i, s, o) {
    this.view = e, this.source = t, this.field = i, this.setHover = s, this.hoverTime = o, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: e.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), e.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), e.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
  }
  update() {
    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (this.hoverTimeout = -1, this.active.length)
      return;
    let e = Date.now() - this.lastMove.time;
    e < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e) : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: e, lastMove: t } = this, i = e.docView.nearest(t.target);
    if (!i)
      return;
    let s, o = 1;
    if (i instanceof It)
      s = i.posAtStart;
    else {
      if (s = e.posAtCoords(t), s == null)
        return;
      let l = e.coordsAtPos(s);
      if (!l || t.y < l.top || t.y > l.bottom || t.x < l.left - e.defaultCharacterWidth || t.x > l.right + e.defaultCharacterWidth)
        return;
      let a = e.bidiSpans(e.state.doc.lineAt(s)).find((c) => c.from <= s && c.to >= s), h = a && a.dir == oe.RTL ? -1 : 1;
      o = t.x < l.left ? -h : h;
    }
    let r = this.source(e, s, o);
    if (r == null ? void 0 : r.then) {
      let l = this.pending = { pos: s };
      r.then((a) => {
        this.pending == l && (this.pending = null, a && !(Array.isArray(a) && !a.length) && e.dispatch({ effects: this.setHover.of(Array.isArray(a) ? a : [a]) }));
      }, (a) => Le(e.state, a, "hover tooltip"));
    } else
      r && !(Array.isArray(r) && !r.length) && e.dispatch({ effects: this.setHover.of(Array.isArray(r) ? r : [r]) });
  }
  get tooltip() {
    let e = this.view.plugin(Yr), t = e ? e.manager.tooltips.findIndex((i) => i.create == Us.create) : -1;
    return t > -1 ? e.manager.tooltipViews[t] : null;
  }
  mousemove(e) {
    var t, i;
    this.lastMove = { x: e.clientX, y: e.clientY, target: e.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: s, tooltip: o } = this;
    if (s.length && o && !tg(o.dom, e) || this.pending) {
      let { pos: r } = s[0] || this.pending, l = (i = (t = s[0]) === null || t === void 0 ? void 0 : t.end) !== null && i !== void 0 ? i : r;
      (r == l ? this.view.posAtCoords(this.lastMove) != r : !ig(this.view, r, l, e.clientX, e.clientY)) && (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
    }
  }
  mouseleave(e) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
    let { active: t } = this;
    if (t.length) {
      let { tooltip: i } = this;
      i && i.dom.contains(e.relatedTarget) ? this.watchTooltipLeave(i.dom) : this.view.dispatch({ effects: this.setHover.of([]) });
    }
  }
  watchTooltipLeave(e) {
    let t = (i) => {
      e.removeEventListener("mouseleave", t), this.active.length && !this.view.dom.contains(i.relatedTarget) && this.view.dispatch({ effects: this.setHover.of([]) });
    };
    e.addEventListener("mouseleave", t);
  }
  destroy() {
    clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
const Xn = 4;
function tg(n, e) {
  let { left: t, right: i, top: s, bottom: o } = n.getBoundingClientRect(), r;
  if (r = n.querySelector(".cm-tooltip-arrow")) {
    let l = r.getBoundingClientRect();
    s = Math.min(l.top, s), o = Math.max(l.bottom, o);
  }
  return e.clientX >= t - Xn && e.clientX <= i + Xn && e.clientY >= s - Xn && e.clientY <= o + Xn;
}
function ig(n, e, t, i, s, o) {
  let r = n.scrollDOM.getBoundingClientRect(), l = n.documentTop + n.documentPadding.top + n.contentHeight;
  if (r.left > i || r.right < i || r.top > s || Math.min(r.bottom, l) < s)
    return false;
  let a = n.posAtCoords({ x: i, y: s }, false);
  return a >= e && a <= t;
}
function ng(n, e = {}) {
  let t = H.define(), i = ge.define({ create() {
    return [];
  }, update(s, o) {
    if (s.length && (e.hideOnChange && (o.docChanged || o.selection) ? s = [] : e.hideOn && (s = s.filter((r) => !e.hideOn(o, r))), o.docChanged)) {
      let r = [];
      for (let l of s) {
        let a = o.changes.mapPos(l.pos, -1, De.TrackDel);
        if (a != null) {
          let h = Object.assign(/* @__PURE__ */ Object.create(null), l);
          h.pos = a, h.end != null && (h.end = o.changes.mapPos(h.end)), r.push(h);
        }
      }
      s = r;
    }
    for (let r of o.effects)
      r.is(t) && (s = r.value), r.is(sg) && (s = []);
    return s;
  }, provide: (s) => As.from(s) });
  return { active: i, extension: [i, ae.define((s) => new eg(s, n, i, t, e.hoverTime || 300)), Zm] };
}
function Vc(n, e) {
  let t = n.plugin(Yr);
  if (!t)
    return null;
  let i = t.manager.tooltips.indexOf(e);
  return i < 0 ? null : t.manager.tooltipViews[i];
}
const sg = H.define(), wa = $.define({ combine(n) {
  let e, t;
  for (let i of n)
    e = e || i.topContainer, t = t || i.bottomContainer;
  return { topContainer: e, bottomContainer: t };
} });
function bn(n, e) {
  let t = n.plugin($c), i = t ? t.specs.indexOf(e) : -1;
  return i > -1 ? t.panels[i] : null;
}
const $c = ae.fromClass(class {
  constructor(n) {
    this.input = n.state.facet(yn), this.specs = this.input.filter((t) => t), this.panels = this.specs.map((t) => t(n));
    let e = n.state.facet(wa);
    this.top = new Qn(n, true, e.topContainer), this.bottom = new Qn(n, false, e.bottomContainer), this.top.sync(this.panels.filter((t) => t.top)), this.bottom.sync(this.panels.filter((t) => !t.top));
    for (let t of this.panels)
      t.dom.classList.add("cm-panel"), t.mount && t.mount();
  }
  update(n) {
    let e = n.state.facet(wa);
    this.top.container != e.topContainer && (this.top.sync([]), this.top = new Qn(n.view, true, e.topContainer)), this.bottom.container != e.bottomContainer && (this.bottom.sync([]), this.bottom = new Qn(n.view, false, e.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let t = n.state.facet(yn);
    if (t != this.input) {
      let i = t.filter((a) => a), s = [], o = [], r = [], l = [];
      for (let a of i) {
        let h = this.specs.indexOf(a), c;
        h < 0 ? (c = a(n.view), l.push(c)) : (c = this.panels[h], c.update && c.update(n)), s.push(c), (c.top ? o : r).push(c);
      }
      this.specs = i, this.panels = s, this.top.sync(o), this.bottom.sync(r);
      for (let a of l)
        a.dom.classList.add("cm-panel"), a.mount && a.mount();
    } else
      for (let i of this.panels)
        i.update && i.update(n);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, { provide: (n) => I.scrollMargins.of((e) => {
  let t = e.plugin(n);
  return t && { top: t.top.scrollMargin(), bottom: t.bottom.scrollMargin() };
}) });
class Qn {
  constructor(e, t, i) {
    this.view = e, this.top = t, this.container = i, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
  }
  sync(e) {
    for (let t of this.panels)
      t.destroy && e.indexOf(t) < 0 && t.destroy();
    this.panels = e, this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), this.dom = void 0);
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
      let t = this.container || this.view.dom;
      t.insertBefore(this.dom, this.top ? t.firstChild : null);
    }
    let e = this.dom.firstChild;
    for (let t of this.panels)
      if (t.dom.parentNode == this.dom) {
        for (; e != t.dom; )
          e = xa(e);
        e = e.nextSibling;
      } else
        this.dom.insertBefore(t.dom, e);
    for (; e; )
      e = xa(e);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let e of this.classes.split(" "))
        e && this.container.classList.remove(e);
      for (let e of (this.classes = this.view.themeClasses).split(" "))
        e && this.container.classList.add(e);
    }
  }
}
function xa(n) {
  let e = n.nextSibling;
  return n.remove(), e;
}
const yn = $.define({ enables: $c });
class Mt extends oi {
  compare(e) {
    return this == e || this.constructor == e.constructor && this.eq(e);
  }
  eq(e) {
    return false;
  }
  destroy(e) {
  }
}
Mt.prototype.elementClass = "";
Mt.prototype.toDOM = void 0;
Mt.prototype.mapMode = De.TrackBefore;
Mt.prototype.startSide = Mt.prototype.endSide = -1;
Mt.prototype.point = true;
const bs = $.define(), og = $.define(), rg = { class: "", renderEmptyElements: false, elementStyle: "", markers: () => X.empty, lineMarker: () => null, widgetMarker: () => null, lineMarkerChange: null, initialSpacer: null, updateSpacer: null, domEventHandlers: {} }, ln = $.define();
function lg(n) {
  return [Fc(), ln.of(Object.assign(Object.assign({}, rg), n))];
}
const pr = $.define({ combine: (n) => n.some((e) => e) });
function Fc(n) {
  let e = [ag];
  return n && n.fixed === false && e.push(pr.of(true)), e;
}
const ag = ae.fromClass(class {
  constructor(n) {
    this.view = n, this.prevViewport = n.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = n.state.facet(ln).map((e) => new _a(n, e));
    for (let e of this.gutters)
      this.dom.appendChild(e.dom);
    this.fixed = !n.state.facet(pr), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(false), n.scrollDOM.insertBefore(this.dom, n.contentDOM);
  }
  update(n) {
    if (this.updateGutters(n)) {
      let e = this.prevViewport, t = n.view.viewport, i = Math.min(e.to, t.to) - Math.max(e.from, t.from);
      this.syncGutters(i < (t.to - t.from) * 0.8);
    }
    n.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px"), this.view.state.facet(pr) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = n.view.viewport;
  }
  syncGutters(n) {
    let e = this.dom.nextSibling;
    n && this.dom.remove();
    let t = X.iter(this.view.state.facet(bs), this.view.viewport.from), i = [], s = this.gutters.map((o) => new hg(o, this.view.viewport, -this.view.documentPadding.top));
    for (let o of this.view.viewportLineBlocks)
      if (i.length && (i = []), Array.isArray(o.type)) {
        let r = true;
        for (let l of o.type)
          if (l.type == Oe.Text && r) {
            mr(t, i, l.from);
            for (let a of s)
              a.line(this.view, l, i);
            r = false;
          } else if (l.widget)
            for (let a of s)
              a.widget(this.view, l);
      } else if (o.type == Oe.Text) {
        mr(t, i, o.from);
        for (let r of s)
          r.line(this.view, o, i);
      } else if (o.widget)
        for (let r of s)
          r.widget(this.view, o);
    for (let o of s)
      o.finish();
    n && this.view.scrollDOM.insertBefore(this.dom, e);
  }
  updateGutters(n) {
    let e = n.startState.facet(ln), t = n.state.facet(ln), i = n.docChanged || n.heightChanged || n.viewportChanged || !X.eq(n.startState.facet(bs), n.state.facet(bs), n.view.viewport.from, n.view.viewport.to);
    if (e == t)
      for (let s of this.gutters)
        s.update(n) && (i = true);
    else {
      i = true;
      let s = [];
      for (let o of t) {
        let r = e.indexOf(o);
        r < 0 ? s.push(new _a(this.view, o)) : (this.gutters[r].update(n), s.push(this.gutters[r]));
      }
      for (let o of this.gutters)
        o.dom.remove(), s.indexOf(o) < 0 && o.destroy();
      for (let o of s)
        this.dom.appendChild(o.dom);
      this.gutters = s;
    }
    return i;
  }
  destroy() {
    for (let n of this.gutters)
      n.destroy();
    this.dom.remove();
  }
}, { provide: (n) => I.scrollMargins.of((e) => {
  let t = e.plugin(n);
  return !t || t.gutters.length == 0 || !t.fixed ? null : e.textDirection == oe.LTR ? { left: t.dom.offsetWidth * e.scaleX } : { right: t.dom.offsetWidth * e.scaleX };
}) });
function ka(n) {
  return Array.isArray(n) ? n : [n];
}
function mr(n, e, t) {
  for (; n.value && n.from <= t; )
    n.from == t && e.push(n.value), n.next();
}
class hg {
  constructor(e, t, i) {
    this.gutter = e, this.height = i, this.i = 0, this.cursor = X.iter(e.markers, t.from);
  }
  addElement(e, t, i) {
    let { gutter: s } = this, o = (t.top - this.height) / e.scaleY, r = t.height / e.scaleY;
    if (this.i == s.elements.length) {
      let l = new zc(e, r, o, i);
      s.elements.push(l), s.dom.appendChild(l.dom);
    } else
      s.elements[this.i].update(e, r, o, i);
    this.height = t.bottom, this.i++;
  }
  line(e, t, i) {
    let s = [];
    mr(this.cursor, s, t.from), i.length && (s = s.concat(i));
    let o = this.gutter.config.lineMarker(e, t, s);
    o && s.unshift(o);
    let r = this.gutter;
    s.length == 0 && !r.config.renderEmptyElements || this.addElement(e, t, s);
  }
  widget(e, t) {
    let i = this.gutter.config.widgetMarker(e, t.widget, t), s = i ? [i] : null;
    for (let o of e.state.facet(og)) {
      let r = o(e, t.widget, t);
      r && (s || (s = [])).push(r);
    }
    s && this.addElement(e, t, s);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom), t.destroy();
    }
  }
}
class _a {
  constructor(e, t) {
    this.view = e, this.config = t, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in t.domEventHandlers)
      this.dom.addEventListener(i, (s) => {
        let o = s.target, r;
        if (o != this.dom && this.dom.contains(o)) {
          for (; o.parentNode != this.dom; )
            o = o.parentNode;
          let a = o.getBoundingClientRect();
          r = (a.top + a.bottom) / 2;
        } else
          r = s.clientY;
        let l = e.lineBlockAtHeight(r - e.documentTop);
        t.domEventHandlers[i](e, l, s) && s.preventDefault();
      });
    this.markers = ka(t.markers(e)), t.initialSpacer && (this.spacer = new zc(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let t = this.markers;
    if (this.markers = ka(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let s = this.config.updateSpacer(this.spacer.markers[0], e);
      s != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [s]);
    }
    let i = e.view.viewport;
    return !X.eq(this.markers, t, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : false);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class zc {
  constructor(e, t, i, s) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, i, s);
  }
  update(e, t, i, s) {
    this.height != t && (this.height = t, this.dom.style.height = t + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), cg(this.markers, s) || this.setMarkers(e, s);
  }
  setMarkers(e, t) {
    let i = "cm-gutterElement", s = this.dom.firstChild;
    for (let o = 0, r = 0; ; ) {
      let l = r, a = o < t.length ? t[o++] : null, h = false;
      if (a) {
        let c = a.elementClass;
        c && (i += " " + c);
        for (let f = r; f < this.markers.length; f++)
          if (this.markers[f].compare(a)) {
            l = f, h = true;
            break;
          }
      } else
        l = this.markers.length;
      for (; r < l; ) {
        let c = this.markers[r++];
        if (c.toDOM) {
          c.destroy(s);
          let f = s.nextSibling;
          s.remove(), s = f;
        }
      }
      if (!a)
        break;
      a.toDOM && (h ? s = s.nextSibling : this.dom.insertBefore(a.toDOM(e), s)), h && r++;
    }
    this.dom.className = i, this.markers = t;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function cg(n, e) {
  if (n.length != e.length)
    return false;
  for (let t = 0; t < n.length; t++)
    if (!n[t].compare(e[t]))
      return false;
  return true;
}
const fg = $.define(), ug = $.define(), vi = $.define({ combine(n) {
  return vt(n, { formatNumber: String, domEventHandlers: {} }, { domEventHandlers(e, t) {
    let i = Object.assign({}, e);
    for (let s in t) {
      let o = i[s], r = t[s];
      i[s] = o ? (l, a, h) => o(l, a, h) || r(l, a, h) : r;
    }
    return i;
  } });
} });
class go extends Mt {
  constructor(e) {
    super(), this.number = e;
  }
  eq(e) {
    return this.number == e.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function bo(n, e) {
  return n.state.facet(vi).formatNumber(e, n.state);
}
const dg = ln.compute([vi], (n) => ({ class: "cm-lineNumbers", renderEmptyElements: false, markers(e) {
  return e.state.facet(fg);
}, lineMarker(e, t, i) {
  return i.some((s) => s.toDOM) ? null : new go(bo(e, e.state.doc.lineAt(t.from).number));
}, widgetMarker: (e, t, i) => {
  for (let s of e.state.facet(ug)) {
    let o = s(e, t, i);
    if (o)
      return o;
  }
  return null;
}, lineMarkerChange: (e) => e.startState.facet(vi) != e.state.facet(vi), initialSpacer(e) {
  return new go(bo(e, Sa(e.state.doc.lines)));
}, updateSpacer(e, t) {
  let i = bo(t.view, Sa(t.view.state.doc.lines));
  return i == e.number ? e : new go(i);
}, domEventHandlers: n.facet(vi).domEventHandlers }));
function pg(n = {}) {
  return [vi.of(n), Fc(), dg];
}
function Sa(n) {
  let e = 9;
  for (; e < n; )
    e = e * 10 + 9;
  return e;
}
const mg = new class extends Mt {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), gg = bs.compute(["selection"], (n) => {
  let e = [], t = -1;
  for (let i of n.selection.ranges) {
    let s = n.doc.lineAt(i.head).from;
    s > t && (t = s, e.push(mg.range(s)));
  }
  return X.of(e);
});
function bg() {
  return gg;
}
const yg = 1024;
let vg = 0;
class yo {
  constructor(e, t) {
    this.from = e, this.to = t;
  }
}
class Y {
  constructor(e = {}) {
    this.id = vg++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
      throw new Error("This node type doesn't define a deserialize function");
    });
  }
  add(e) {
    if (this.perNode)
      throw new RangeError("Can't add per-node props to node types");
    return typeof e != "function" && (e = Je.match(e)), (t) => {
      let i = e(t);
      return i === void 0 ? null : [this, i];
    };
  }
}
Y.closedBy = new Y({ deserialize: (n) => n.split(" ") });
Y.openedBy = new Y({ deserialize: (n) => n.split(" ") });
Y.group = new Y({ deserialize: (n) => n.split(" ") });
Y.isolate = new Y({ deserialize: (n) => {
  if (n && n != "rtl" && n != "ltr" && n != "auto")
    throw new RangeError("Invalid value for isolate: " + n);
  return n || "auto";
} });
Y.contextHash = new Y({ perNode: true });
Y.lookAhead = new Y({ perNode: true });
Y.mounted = new Y({ perNode: true });
class Ms {
  constructor(e, t, i) {
    this.tree = e, this.overlay = t, this.parser = i;
  }
  static get(e) {
    return e && e.props && e.props[Y.mounted.id];
  }
}
const wg = /* @__PURE__ */ Object.create(null);
class Je {
  constructor(e, t, i, s = 0) {
    this.name = e, this.props = t, this.id = i, this.flags = s;
  }
  static define(e) {
    let t = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : wg, i = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), s = new Je(e.name || "", t, e.id, i);
    if (e.props) {
      for (let o of e.props)
        if (Array.isArray(o) || (o = o(s)), o) {
          if (o[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          t[o[0].id] = o[1];
        }
    }
    return s;
  }
  prop(e) {
    return this.props[e.id];
  }
  get isTop() {
    return (this.flags & 1) > 0;
  }
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  get isError() {
    return (this.flags & 4) > 0;
  }
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  is(e) {
    if (typeof e == "string") {
      if (this.name == e)
        return true;
      let t = this.prop(Y.group);
      return t ? t.indexOf(e) > -1 : false;
    }
    return this.id == e;
  }
  static match(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e)
      for (let s of i.split(" "))
        t[s] = e[i];
    return (i) => {
      for (let s = i.prop(Y.group), o = -1; o < (s ? s.length : 0); o++) {
        let r = t[o < 0 ? i.name : s[o]];
        if (r)
          return r;
      }
    };
  }
}
Je.none = new Je("", /* @__PURE__ */ Object.create(null), 0, 8);
const Zn = /* @__PURE__ */ new WeakMap(), Ca = /* @__PURE__ */ new WeakMap();
var we;
(function(n) {
  n[n.ExcludeBuffers = 1] = "ExcludeBuffers", n[n.IncludeAnonymous = 2] = "IncludeAnonymous", n[n.IgnoreMounts = 4] = "IgnoreMounts", n[n.IgnoreOverlays = 8] = "IgnoreOverlays";
})(we || (we = {}));
class Se {
  constructor(e, t, i, s, o) {
    if (this.type = e, this.children = t, this.positions = i, this.length = s, this.props = null, o && o.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [r, l] of o)
        this.props[typeof r == "number" ? r : r.id] = l;
    }
  }
  toString() {
    let e = Ms.get(this);
    if (e && !e.overlay)
      return e.tree.toString();
    let t = "";
    for (let i of this.children) {
      let s = i.toString();
      s && (t && (t += ","), t += s);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
  }
  cursor(e = 0) {
    return new br(this.topNode, e);
  }
  cursorAt(e, t = 0, i = 0) {
    let s = Zn.get(this) || this.topNode, o = new br(s);
    return o.moveTo(e, t), Zn.set(this, o._tree), o;
  }
  get topNode() {
    return new Ge(this, 0, 0, null);
  }
  resolve(e, t = 0) {
    let i = vn(Zn.get(this) || this.topNode, e, t, false);
    return Zn.set(this, i), i;
  }
  resolveInner(e, t = 0) {
    let i = vn(Ca.get(this) || this.topNode, e, t, true);
    return Ca.set(this, i), i;
  }
  resolveStack(e, t = 0) {
    return _g(this, e, t);
  }
  iterate(e) {
    let { enter: t, leave: i, from: s = 0, to: o = this.length } = e, r = e.mode || 0, l = (r & we.IncludeAnonymous) > 0;
    for (let a = this.cursor(r | we.IncludeAnonymous); ; ) {
      let h = false;
      if (a.from <= o && a.to >= s && (!l && a.type.isAnonymous || t(a) !== false)) {
        if (a.firstChild())
          continue;
        h = true;
      }
      for (; h && i && (l || !a.type.isAnonymous) && i(a), !a.nextSibling(); ) {
        if (!a.parent())
          return;
        h = true;
      }
    }
  }
  prop(e) {
    return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
  }
  get propValues() {
    let e = [];
    if (this.props)
      for (let t in this.props)
        e.push([+t, this.props[t]]);
    return e;
  }
  balance(e = {}) {
    return this.children.length <= 8 ? this : Qr(Je.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, i, s) => new Se(this.type, t, i, s, this.propValues), e.makeTree || ((t, i, s) => new Se(Je.none, t, i, s)));
  }
  static build(e) {
    return Sg(e);
  }
}
Se.empty = new Se(Je.none, [], [], 0);
class Jr {
  constructor(e, t) {
    this.buffer = e, this.index = t;
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new Jr(this.buffer, this.index);
  }
}
class Wt {
  constructor(e, t, i) {
    this.buffer = e, this.length = t, this.set = i;
  }
  get type() {
    return Je.none;
  }
  toString() {
    let e = [];
    for (let t = 0; t < this.buffer.length; )
      e.push(this.childString(t)), t = this.buffer[t + 3];
    return e.join(",");
  }
  childString(e) {
    let t = this.buffer[e], i = this.buffer[e + 3], s = this.set.types[t], o = s.name;
    if (/\W/.test(o) && !s.isError && (o = JSON.stringify(o)), e += 4, i == e)
      return o;
    let r = [];
    for (; e < i; )
      r.push(this.childString(e)), e = this.buffer[e + 3];
    return o + "(" + r.join(",") + ")";
  }
  findChild(e, t, i, s, o) {
    let { buffer: r } = this, l = -1;
    for (let a = e; a != t && !(Hc(o, s, r[a + 1], r[a + 2]) && (l = a, i > 0)); a = r[a + 3])
      ;
    return l;
  }
  slice(e, t, i) {
    let s = this.buffer, o = new Uint16Array(t - e), r = 0;
    for (let l = e, a = 0; l < t; ) {
      o[a++] = s[l++], o[a++] = s[l++] - i;
      let h = o[a++] = s[l++] - i;
      o[a++] = s[l++] - e, r = Math.max(r, h);
    }
    return new Wt(o, r, this.set);
  }
}
function Hc(n, e, t, i) {
  switch (n) {
    case -2:
      return t < e;
    case -1:
      return i >= e && t < e;
    case 0:
      return t < e && i > e;
    case 1:
      return t <= e && i > e;
    case 2:
      return i > e;
    case 4:
      return true;
  }
}
function vn(n, e, t, i) {
  for (var s; n.from == n.to || (t < 1 ? n.from >= e : n.from > e) || (t > -1 ? n.to <= e : n.to < e); ) {
    let r = !i && n instanceof Ge && n.index < 0 ? null : n.parent;
    if (!r)
      return n;
    n = r;
  }
  let o = i ? 0 : we.IgnoreOverlays;
  if (i)
    for (let r = n, l = r.parent; l; r = l, l = r.parent)
      r instanceof Ge && r.index < 0 && ((s = l.enter(e, t, o)) === null || s === void 0 ? void 0 : s.from) != r.from && (n = l);
  for (; ; ) {
    let r = n.enter(e, t, o);
    if (!r)
      return n;
    n = r;
  }
}
class Wc {
  cursor(e = 0) {
    return new br(this, e);
  }
  getChild(e, t = null, i = null) {
    let s = Aa(this, e, t, i);
    return s.length ? s[0] : null;
  }
  getChildren(e, t = null, i = null) {
    return Aa(this, e, t, i);
  }
  resolve(e, t = 0) {
    return vn(this, e, t, false);
  }
  resolveInner(e, t = 0) {
    return vn(this, e, t, true);
  }
  matchContext(e) {
    return gr(this.parent, e);
  }
  enterUnfinishedNodesBefore(e) {
    let t = this.childBefore(e), i = this;
    for (; t; ) {
      let s = t.lastChild;
      if (!s || s.to != t.to)
        break;
      s.type.isError && s.from == s.to ? (i = t, t = s.prevSibling) : t = s;
    }
    return i;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class Ge extends Wc {
  constructor(e, t, i, s) {
    super(), this._tree = e, this.from = t, this.index = i, this._parent = s;
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e, t, i, s, o = 0) {
    for (let r = this; ; ) {
      for (let { children: l, positions: a } = r._tree, h = t > 0 ? l.length : -1; e != h; e += t) {
        let c = l[e], f = a[e] + r.from;
        if (Hc(s, i, f, f + c.length)) {
          if (c instanceof Wt) {
            if (o & we.ExcludeBuffers)
              continue;
            let u = c.findChild(0, c.buffer.length, t, i - f, s);
            if (u > -1)
              return new Vt(new xg(r, c, e, f), null, u);
          } else if (o & we.IncludeAnonymous || !c.type.isAnonymous || Xr(c)) {
            let u;
            if (!(o & we.IgnoreMounts) && (u = Ms.get(c)) && !u.overlay)
              return new Ge(u.tree, f, e, r);
            let d = new Ge(c, f, e, r);
            return o & we.IncludeAnonymous || !d.type.isAnonymous ? d : d.nextChild(t < 0 ? c.children.length - 1 : 0, t, i, s);
          }
        }
      }
      if (o & we.IncludeAnonymous || !r.type.isAnonymous || (r.index >= 0 ? e = r.index + t : e = t < 0 ? -1 : r._parent._tree.children.length, r = r._parent, !r))
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(0, 1, 0, 4);
  }
  get lastChild() {
    return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
  }
  childAfter(e) {
    return this.nextChild(0, 1, e, 2);
  }
  childBefore(e) {
    return this.nextChild(this._tree.children.length - 1, -1, e, -2);
  }
  enter(e, t, i = 0) {
    let s;
    if (!(i & we.IgnoreOverlays) && (s = Ms.get(this._tree)) && s.overlay) {
      let o = e - this.from;
      for (let { from: r, to: l } of s.overlay)
        if ((t > 0 ? r <= o : r < o) && (t < 0 ? l >= o : l > o))
          return new Ge(s.tree, s.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, t, i);
  }
  nextSignificantParent() {
    let e = this;
    for (; e.type.isAnonymous && e._parent; )
      e = e._parent;
    return e;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  toString() {
    return this._tree.toString();
  }
}
function Aa(n, e, t, i) {
  let s = n.cursor(), o = [];
  if (!s.firstChild())
    return o;
  if (t != null) {
    for (let r = false; !r; )
      if (r = s.type.is(t), !s.nextSibling())
        return o;
  }
  for (; ; ) {
    if (i != null && s.type.is(i))
      return o;
    if (s.type.is(e) && o.push(s.node), !s.nextSibling())
      return i == null ? o : [];
  }
}
function gr(n, e, t = e.length - 1) {
  for (let i = n; t >= 0; i = i.parent) {
    if (!i)
      return false;
    if (!i.type.isAnonymous) {
      if (e[t] && e[t] != i.name)
        return false;
      t--;
    }
  }
  return true;
}
class xg {
  constructor(e, t, i, s) {
    this.parent = e, this.buffer = t, this.index = i, this.start = s;
  }
}
class Vt extends Wc {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, t, i) {
    super(), this.context = e, this._parent = t, this.index = i, this.type = e.buffer.set.types[e.buffer.buffer[i]];
  }
  child(e, t, i) {
    let { buffer: s } = this.context, o = s.findChild(this.index + 4, s.buffer[this.index + 3], e, t - this.context.start, i);
    return o < 0 ? null : new Vt(this.context, this, o);
  }
  get firstChild() {
    return this.child(1, 0, 4);
  }
  get lastChild() {
    return this.child(-1, 0, 4);
  }
  childAfter(e) {
    return this.child(1, e, 2);
  }
  childBefore(e) {
    return this.child(-1, e, -2);
  }
  enter(e, t, i = 0) {
    if (i & we.ExcludeBuffers)
      return null;
    let { buffer: s } = this.context, o = s.findChild(this.index + 4, s.buffer[this.index + 3], t > 0 ? 1 : -1, e - this.context.start, t);
    return o < 0 ? null : new Vt(this.context, this, o);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(this.context.index + e, e, 0, 4);
  }
  get nextSibling() {
    let { buffer: e } = this.context, t = e.buffer[this.index + 3];
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new Vt(this.context, this._parent, t) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t ? this.externalSibling(-1) : new Vt(this.context, this._parent, e.findChild(t, this.index, -1, 0, 4));
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [], t = [], { buffer: i } = this.context, s = this.index + 4, o = i.buffer[this.index + 3];
    if (o > s) {
      let r = i.buffer[this.index + 1];
      e.push(i.slice(s, o, r)), t.push(0);
    }
    return new Se(this.type, e, t, this.to - this.from);
  }
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function qc(n) {
  if (!n.length)
    return null;
  let e = 0, t = n[0];
  for (let o = 1; o < n.length; o++) {
    let r = n[o];
    (r.from > t.from || r.to < t.to) && (t = r, e = o);
  }
  let i = t instanceof Ge && t.index < 0 ? null : t.parent, s = n.slice();
  return i ? s[e] = i : s.splice(e, 1), new kg(s, t);
}
class kg {
  constructor(e, t) {
    this.heads = e, this.node = t;
  }
  get next() {
    return qc(this.heads);
  }
}
function _g(n, e, t) {
  let i = n.resolveInner(e, t), s = null;
  for (let o = i instanceof Ge ? i : i.context.parent; o; o = o.parent)
    if (o.index < 0) {
      let r = o.parent;
      (s || (s = [i])).push(r.resolve(e, t)), o = r;
    } else {
      let r = Ms.get(o.tree);
      if (r && r.overlay && r.overlay[0].from <= e && r.overlay[r.overlay.length - 1].to >= e) {
        let l = new Ge(r.tree, r.overlay[0].from + o.from, -1, o);
        (s || (s = [i])).push(vn(l, e, t, false));
      }
    }
  return s ? qc(s) : i;
}
class br {
  get name() {
    return this.type.name;
  }
  constructor(e, t = 0) {
    if (this.mode = t, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof Ge)
      this.yieldNode(e);
    else {
      this._tree = e.context.parent, this.buffer = e.context;
      for (let i = e._parent; i; i = i._parent)
        this.stack.unshift(i.index);
      this.bufferNode = e, this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, true) : false;
  }
  yieldBuf(e, t) {
    this.index = e;
    let { start: i, buffer: s } = this.buffer;
    return this.type = t || s.set.types[s.buffer[e]], this.from = i + s.buffer[e + 1], this.to = i + s.buffer[e + 2], true;
  }
  yield(e) {
    return e ? e instanceof Ge ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : false;
  }
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  enterChild(e, t, i) {
    if (!this.buffer)
      return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, i, this.mode));
    let { buffer: s } = this.buffer, o = s.findChild(this.index + 4, s.buffer[this.index + 3], e, t - this.buffer.start, i);
    return o < 0 ? false : (this.stack.push(this.index), this.yieldBuf(o));
  }
  firstChild() {
    return this.enterChild(1, 0, 4);
  }
  lastChild() {
    return this.enterChild(-1, 0, 4);
  }
  childAfter(e) {
    return this.enterChild(1, e, 2);
  }
  childBefore(e) {
    return this.enterChild(-1, e, -2);
  }
  enter(e, t, i = this.mode) {
    return this.buffer ? i & we.ExcludeBuffers ? false : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, i));
  }
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & we.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & we.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
    return this.buffer = null, this.yieldNode(e);
  }
  sibling(e) {
    if (!this.buffer)
      return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)) : false;
    let { buffer: t } = this.buffer, i = this.stack.length - 1;
    if (e < 0) {
      let s = i < 0 ? 0 : this.stack[i] + 4;
      if (this.index != s)
        return this.yieldBuf(t.findChild(s, this.index, -1, 0, 4));
    } else {
      let s = t.buffer[this.index + 3];
      if (s < (i < 0 ? t.buffer.length : t.buffer[this.stack[i] + 3]))
        return this.yieldBuf(s);
    }
    return i < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode)) : false;
  }
  nextSibling() {
    return this.sibling(1);
  }
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let t, i, { buffer: s } = this;
    if (s) {
      if (e > 0) {
        if (this.index < s.buffer.buffer.length)
          return false;
      } else
        for (let o = 0; o < this.index; o++)
          if (s.buffer.buffer[o + 3] < this.index)
            return false;
      ({ index: t, parent: i } = s);
    } else
      ({ index: t, _parent: i } = this._tree);
    for (; i; { index: t, _parent: i } = i)
      if (t > -1)
        for (let o = t + e, r = e < 0 ? -1 : i._tree.children.length; o != r; o += e) {
          let l = i._tree.children[o];
          if (this.mode & we.IncludeAnonymous || l instanceof Wt || !l.type.isAnonymous || Xr(l))
            return false;
        }
    return true;
  }
  move(e, t) {
    if (t && this.enterChild(e, 0, 4))
      return true;
    for (; ; ) {
      if (this.sibling(e))
        return true;
      if (this.atLastNode(e) || !this.parent())
        return false;
    }
  }
  next(e = true) {
    return this.move(1, e);
  }
  prev(e = true) {
    return this.move(-1, e);
  }
  moveTo(e, t = 0) {
    for (; (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent(); )
      ;
    for (; this.enterChild(1, e, t); )
      ;
    return this;
  }
  get node() {
    if (!this.buffer)
      return this._tree;
    let e = this.bufferNode, t = null, i = 0;
    if (e && e.context == this.buffer)
      e:
        for (let s = this.index, o = this.stack.length; o >= 0; ) {
          for (let r = e; r; r = r._parent)
            if (r.index == s) {
              if (s == this.index)
                return r;
              t = r, i = o + 1;
              break e;
            }
          s = this.stack[--o];
        }
    for (let s = i; s < this.stack.length; s++)
      t = new Vt(this.buffer, t, this.stack[s]);
    return this.bufferNode = new Vt(this.buffer, t, this.index);
  }
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  iterate(e, t) {
    for (let i = 0; ; ) {
      let s = false;
      if (this.type.isAnonymous || e(this) !== false) {
        if (this.firstChild()) {
          i++;
          continue;
        }
        this.type.isAnonymous || (s = true);
      }
      for (; ; ) {
        if (s && t && t(this), s = this.type.isAnonymous, !i)
          return;
        if (this.nextSibling())
          break;
        this.parent(), i--, s = true;
      }
    }
  }
  matchContext(e) {
    if (!this.buffer)
      return gr(this.node.parent, e);
    let { buffer: t } = this.buffer, { types: i } = t.set;
    for (let s = e.length - 1, o = this.stack.length - 1; s >= 0; o--) {
      if (o < 0)
        return gr(this._tree, e, s);
      let r = i[t.buffer[this.stack[o]]];
      if (!r.isAnonymous) {
        if (e[s] && e[s] != r.name)
          return false;
        s--;
      }
    }
    return true;
  }
}
function Xr(n) {
  return n.children.some((e) => e instanceof Wt || !e.type.isAnonymous || Xr(e));
}
function Sg(n) {
  var e;
  let { buffer: t, nodeSet: i, maxBufferLength: s = yg, reused: o = [], minRepeatType: r = i.types.length } = n, l = Array.isArray(t) ? new Jr(t, t.length) : t, a = i.types, h = 0, c = 0;
  function f(_, x, D, B, q, E) {
    let { id: T, start: R, end: j, size: K } = l, Z = c, he = h;
    for (; K < 0; )
      if (l.next(), K == -1) {
        let kt = o[T];
        D.push(kt), B.push(R - _);
        return;
      } else if (K == -3) {
        h = T;
        return;
      } else if (K == -4) {
        c = T;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${K}`);
    let Ne = a[T], it, be, ze = R - _;
    if (j - R <= s && (be = m(l.pos - x, q))) {
      let kt = new Uint16Array(be.size - be.skip), He = l.pos - be.size, nt = kt.length;
      for (; l.pos > He; )
        nt = y(be.start, kt, nt);
      it = new Wt(kt, j - be.start, i), ze = be.start - _;
    } else {
      let kt = l.pos - K;
      l.next();
      let He = [], nt = [], Jt = T >= r ? T : -1, ui = 0, Vn = j;
      for (; l.pos > kt; )
        Jt >= 0 && l.id == Jt && l.size >= 0 ? (l.end <= Vn - s && (p(He, nt, R, ui, l.end, Vn, Jt, Z, he), ui = He.length, Vn = l.end), l.next()) : E > 2500 ? u(R, kt, He, nt) : f(R, kt, He, nt, Jt, E + 1);
      if (Jt >= 0 && ui > 0 && ui < He.length && p(He, nt, R, ui, R, Vn, Jt, Z, he), He.reverse(), nt.reverse(), Jt > -1 && ui > 0) {
        let ml = d(Ne, he);
        it = Qr(Ne, He, nt, 0, He.length, 0, j - R, ml, ml);
      } else
        it = g(Ne, He, nt, j - R, Z - j, he);
    }
    D.push(it), B.push(ze);
  }
  function u(_, x, D, B) {
    let q = [], E = 0, T = -1;
    for (; l.pos > x; ) {
      let { id: R, start: j, end: K, size: Z } = l;
      if (Z > 4)
        l.next();
      else {
        if (T > -1 && j < T)
          break;
        T < 0 && (T = K - s), q.push(R, j, K), E++, l.next();
      }
    }
    if (E) {
      let R = new Uint16Array(E * 4), j = q[q.length - 2];
      for (let K = q.length - 3, Z = 0; K >= 0; K -= 3)
        R[Z++] = q[K], R[Z++] = q[K + 1] - j, R[Z++] = q[K + 2] - j, R[Z++] = Z;
      D.push(new Wt(R, q[2] - j, i)), B.push(j - _);
    }
  }
  function d(_, x) {
    return (D, B, q) => {
      let E = 0, T = D.length - 1, R, j;
      if (T >= 0 && (R = D[T]) instanceof Se) {
        if (!T && R.type == _ && R.length == q)
          return R;
        (j = R.prop(Y.lookAhead)) && (E = B[T] + R.length + j);
      }
      return g(_, D, B, q, E, x);
    };
  }
  function p(_, x, D, B, q, E, T, R, j) {
    let K = [], Z = [];
    for (; _.length > B; )
      K.push(_.pop()), Z.push(x.pop() + D - q);
    _.push(g(i.types[T], K, Z, E - q, R - E, j)), x.push(q - D);
  }
  function g(_, x, D, B, q, E, T) {
    if (E) {
      let R = [Y.contextHash, E];
      T = T ? [R].concat(T) : [R];
    }
    if (q > 25) {
      let R = [Y.lookAhead, q];
      T = T ? [R].concat(T) : [R];
    }
    return new Se(_, x, D, B, T);
  }
  function m(_, x) {
    let D = l.fork(), B = 0, q = 0, E = 0, T = D.end - s, R = { size: 0, start: 0, skip: 0 };
    e:
      for (let j = D.pos - _; D.pos > j; ) {
        let K = D.size;
        if (D.id == x && K >= 0) {
          R.size = B, R.start = q, R.skip = E, E += 4, B += 4, D.next();
          continue;
        }
        let Z = D.pos - K;
        if (K < 0 || Z < j || D.start < T)
          break;
        let he = D.id >= r ? 4 : 0, Ne = D.start;
        for (D.next(); D.pos > Z; ) {
          if (D.size < 0)
            if (D.size == -3)
              he += 4;
            else
              break e;
          else
            D.id >= r && (he += 4);
          D.next();
        }
        q = Ne, B += K, E += he;
      }
    return (x < 0 || B == _) && (R.size = B, R.start = q, R.skip = E), R.size > 4 ? R : void 0;
  }
  function y(_, x, D) {
    let { id: B, start: q, end: E, size: T } = l;
    if (l.next(), T >= 0 && B < r) {
      let R = D;
      if (T > 4) {
        let j = l.pos - (T - 4);
        for (; l.pos > j; )
          D = y(_, x, D);
      }
      x[--D] = R, x[--D] = E - _, x[--D] = q - _, x[--D] = B;
    } else
      T == -3 ? h = B : T == -4 && (c = B);
    return D;
  }
  let w = [], M = [];
  for (; l.pos > 0; )
    f(n.start || 0, n.bufferStart || 0, w, M, -1, 0);
  let S = (e = n.length) !== null && e !== void 0 ? e : w.length ? M[0] + w[0].length : 0;
  return new Se(a[n.topID], w.reverse(), M.reverse(), S);
}
const Ma = /* @__PURE__ */ new WeakMap();
function ys(n, e) {
  if (!n.isAnonymous || e instanceof Wt || e.type != n)
    return 1;
  let t = Ma.get(e);
  if (t == null) {
    t = 1;
    for (let i of e.children) {
      if (i.type != n || !(i instanceof Se)) {
        t = 1;
        break;
      }
      t += ys(n, i);
    }
    Ma.set(e, t);
  }
  return t;
}
function Qr(n, e, t, i, s, o, r, l, a) {
  let h = 0;
  for (let p = i; p < s; p++)
    h += ys(n, e[p]);
  let c = Math.ceil(h * 1.5 / 8), f = [], u = [];
  function d(p, g, m, y, w) {
    for (let M = m; M < y; ) {
      let S = M, _ = g[M], x = ys(n, p[M]);
      for (M++; M < y; M++) {
        let D = ys(n, p[M]);
        if (x + D >= c)
          break;
        x += D;
      }
      if (M == S + 1) {
        if (x > c) {
          let D = p[S];
          d(D.children, D.positions, 0, D.children.length, g[S] + w);
          continue;
        }
        f.push(p[S]);
      } else {
        let D = g[M - 1] + p[M - 1].length - _;
        f.push(Qr(n, p, g, S, M, _, D, null, a));
      }
      u.push(_ + w - o);
    }
  }
  return d(e, t, i, s, 0), (l || a)(f, u, r);
}
class ni {
  constructor(e, t, i, s, o = false, r = false) {
    this.from = e, this.to = t, this.tree = i, this.offset = s, this.open = (o ? 1 : 0) | (r ? 2 : 0);
  }
  get openStart() {
    return (this.open & 1) > 0;
  }
  get openEnd() {
    return (this.open & 2) > 0;
  }
  static addTree(e, t = [], i = false) {
    let s = [new ni(0, e.length, e, 0, false, i)];
    for (let o of t)
      o.to > e.length && s.push(o);
    return s;
  }
  static applyChanges(e, t, i = 128) {
    if (!t.length)
      return e;
    let s = [], o = 1, r = e.length ? e[0] : null;
    for (let l = 0, a = 0, h = 0; ; l++) {
      let c = l < t.length ? t[l] : null, f = c ? c.fromA : 1e9;
      if (f - a >= i)
        for (; r && r.from < f; ) {
          let u = r;
          if (a >= u.from || f <= u.to || h) {
            let d = Math.max(u.from, a) - h, p = Math.min(u.to, f) - h;
            u = d >= p ? null : new ni(d, p, u.tree, u.offset + h, l > 0, !!c);
          }
          if (u && s.push(u), r.to > f)
            break;
          r = o < e.length ? e[o++] : null;
        }
      if (!c)
        break;
      a = c.toA, h = c.toA - c.toB;
    }
    return s;
  }
}
class Cg {
  startParse(e, t, i) {
    return typeof e == "string" && (e = new Ag(e)), i = i ? i.length ? i.map((s) => new yo(s.from, s.to)) : [new yo(0, 0)] : [new yo(0, e.length)], this.createParse(e, t || [], i);
  }
  parse(e, t, i) {
    let s = this.startParse(e, t, i);
    for (; ; ) {
      let o = s.advance();
      if (o)
        return o;
    }
  }
}
class Ag {
  constructor(e) {
    this.string = e;
  }
  get length() {
    return this.string.length;
  }
  chunk(e) {
    return this.string.slice(e);
  }
  get lineChunks() {
    return false;
  }
  read(e, t) {
    return this.string.slice(e, t);
  }
}
new Y({ perNode: true });
let Mg = 0;
class qe {
  constructor(e, t, i, s) {
    this.name = e, this.set = t, this.base = i, this.modified = s, this.id = Mg++;
  }
  toString() {
    let { name: e } = this;
    for (let t of this.modified)
      t.name && (e = `${t.name}(${e})`);
    return e;
  }
  static define(e, t) {
    let i = typeof e == "string" ? e : "?";
    if (e instanceof qe && (t = e), t == null ? void 0 : t.base)
      throw new Error("Can not derive from a modified tag");
    let s = new qe(i, [], null, []);
    if (s.set.push(s), t)
      for (let o of t.set)
        s.set.push(o);
    return s;
  }
  static defineModifier(e) {
    let t = new Ds(e);
    return (i) => i.modified.indexOf(t) > -1 ? i : Ds.get(i.base || i, i.modified.concat(t).sort((s, o) => s.id - o.id));
  }
}
let Dg = 0;
class Ds {
  constructor(e) {
    this.name = e, this.instances = [], this.id = Dg++;
  }
  static get(e, t) {
    if (!t.length)
      return e;
    let i = t[0].instances.find((l) => l.base == e && Tg(t, l.modified));
    if (i)
      return i;
    let s = [], o = new qe(e.name, s, e, t);
    for (let l of t)
      l.instances.push(o);
    let r = Og(t);
    for (let l of e.set)
      if (!l.modified.length)
        for (let a of r)
          s.push(Ds.get(l, a));
    return o;
  }
}
function Tg(n, e) {
  return n.length == e.length && n.every((t, i) => t == e[i]);
}
function Og(n) {
  let e = [[]];
  for (let t = 0; t < n.length; t++)
    for (let i = 0, s = e.length; i < s; i++)
      e.push(e[i].concat(n[t]));
  return e.sort((t, i) => i.length - t.length);
}
function Eg(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let i = n[t];
    Array.isArray(i) || (i = [i]);
    for (let s of t.split(" "))
      if (s) {
        let o = [], r = 2, l = s;
        for (let f = 0; ; ) {
          if (l == "..." && f > 0 && f + 3 == s.length) {
            r = 1;
            break;
          }
          let u = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!u)
            throw new RangeError("Invalid path: " + s);
          if (o.push(u[0] == "*" ? "" : u[0][0] == '"' ? JSON.parse(u[0]) : u[0]), f += u[0].length, f == s.length)
            break;
          let d = s[f++];
          if (f == s.length && d == "!") {
            r = 0;
            break;
          }
          if (d != "/")
            throw new RangeError("Invalid path: " + s);
          l = s.slice(f);
        }
        let a = o.length - 1, h = o[a];
        if (!h)
          throw new RangeError("Invalid path: " + s);
        let c = new Ts(i, r, a > 0 ? o.slice(0, a) : null);
        e[h] = c.sort(e[h]);
      }
  }
  return Uc.add(e);
}
const Uc = new Y();
class Ts {
  constructor(e, t, i, s) {
    this.tags = e, this.mode = t, this.context = i, this.next = s;
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(e) {
    return !e || e.depth < this.depth ? (this.next = e, this) : (e.next = this.sort(e.next), e);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
Ts.empty = new Ts([], 2, null);
function jc(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let o of n)
    if (!Array.isArray(o.tag))
      t[o.tag.id] = o.class;
    else
      for (let r of o.tag)
        t[r.id] = o.class;
  let { scope: i, all: s = null } = e || {};
  return { style: (o) => {
    let r = s;
    for (let l of o)
      for (let a of l.set) {
        let h = t[a.id];
        if (h) {
          r = r ? r + " " + h : h;
          break;
        }
      }
    return r;
  }, scope: i };
}
function Bg(n, e) {
  let t = null;
  for (let i of n) {
    let s = i.style(e);
    s && (t = t ? t + " " + s : s);
  }
  return t;
}
function Pg(n, e, t, i = 0, s = n.length) {
  let o = new Rg(i, Array.isArray(e) ? e : [e], t);
  o.highlightRange(n.cursor(), i, s, "", o.highlighters), o.flush(s);
}
class Rg {
  constructor(e, t, i) {
    this.at = e, this.highlighters = t, this.span = i, this.class = "";
  }
  startSpan(e, t) {
    t != this.class && (this.flush(e), e > this.at && (this.at = e), this.class = t);
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, t, i, s, o) {
    let { type: r, from: l, to: a } = e;
    if (l >= i || a <= t)
      return;
    r.isTop && (o = this.highlighters.filter((d) => !d.scope || d.scope(r)));
    let h = s, c = Lg(e) || Ts.empty, f = Bg(o, c.tags);
    if (f && (h && (h += " "), h += f, c.mode == 1 && (s += (s ? " " : "") + f)), this.startSpan(Math.max(t, l), h), c.opaque)
      return;
    let u = e.tree && e.tree.prop(Y.mounted);
    if (u && u.overlay) {
      let d = e.node.enter(u.overlay[0].from + l, 1), p = this.highlighters.filter((m) => !m.scope || m.scope(u.tree.type)), g = e.firstChild();
      for (let m = 0, y = l; ; m++) {
        let w = m < u.overlay.length ? u.overlay[m] : null, M = w ? w.from + l : a, S = Math.max(t, y), _ = Math.min(i, M);
        if (S < _ && g)
          for (; e.from < _ && (this.highlightRange(e, S, _, s, o), this.startSpan(Math.min(_, e.to), h), !(e.to >= M || !e.nextSibling())); )
            ;
        if (!w || M > i)
          break;
        y = w.to + l, y > t && (this.highlightRange(d.cursor(), Math.max(t, w.from + l), Math.min(i, y), "", p), this.startSpan(Math.min(i, y), h));
      }
      g && e.parent();
    } else if (e.firstChild()) {
      u && (s = "");
      do
        if (!(e.to <= t)) {
          if (e.from >= i)
            break;
          this.highlightRange(e, t, i, s, o), this.startSpan(Math.min(i, e.to), h);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
}
function Lg(n) {
  let e = n.type.prop(Uc);
  for (; e && e.context && !n.matchContext(e.context); )
    e = e.next;
  return e || null;
}
const P = qe.define, es = P(), Et = P(), Da = P(Et), Ta = P(Et), Bt = P(), ts = P(Bt), vo = P(Bt), lt = P(), Xt = P(lt), ot = P(), rt = P(), yr = P(), Ui = P(yr), is = P(), L = { comment: es, lineComment: P(es), blockComment: P(es), docComment: P(es), name: Et, variableName: P(Et), typeName: Da, tagName: P(Da), propertyName: Ta, attributeName: P(Ta), className: P(Et), labelName: P(Et), namespace: P(Et), macroName: P(Et), literal: Bt, string: ts, docString: P(ts), character: P(ts), attributeValue: P(ts), number: vo, integer: P(vo), float: P(vo), bool: P(Bt), regexp: P(Bt), escape: P(Bt), color: P(Bt), url: P(Bt), keyword: ot, self: P(ot), null: P(ot), atom: P(ot), unit: P(ot), modifier: P(ot), operatorKeyword: P(ot), controlKeyword: P(ot), definitionKeyword: P(ot), moduleKeyword: P(ot), operator: rt, derefOperator: P(rt), arithmeticOperator: P(rt), logicOperator: P(rt), bitwiseOperator: P(rt), compareOperator: P(rt), updateOperator: P(rt), definitionOperator: P(rt), typeOperator: P(rt), controlOperator: P(rt), punctuation: yr, separator: P(yr), bracket: Ui, angleBracket: P(Ui), squareBracket: P(Ui), paren: P(Ui), brace: P(Ui), content: lt, heading: Xt, heading1: P(Xt), heading2: P(Xt), heading3: P(Xt), heading4: P(Xt), heading5: P(Xt), heading6: P(Xt), contentSeparator: P(lt), list: P(lt), quote: P(lt), emphasis: P(lt), strong: P(lt), link: P(lt), monospace: P(lt), strikethrough: P(lt), inserted: P(), deleted: P(), changed: P(), invalid: P(), meta: is, documentMeta: P(is), annotation: P(is), processingInstruction: P(is), definition: qe.defineModifier("definition"), constant: qe.defineModifier("constant"), function: qe.defineModifier("function"), standard: qe.defineModifier("standard"), local: qe.defineModifier("local"), special: qe.defineModifier("special") };
for (let n in L) {
  let e = L[n];
  e instanceof qe && (e.name = n);
}
jc([{ tag: L.link, class: "tok-link" }, { tag: L.heading, class: "tok-heading" }, { tag: L.emphasis, class: "tok-emphasis" }, { tag: L.strong, class: "tok-strong" }, { tag: L.keyword, class: "tok-keyword" }, { tag: L.atom, class: "tok-atom" }, { tag: L.bool, class: "tok-bool" }, { tag: L.url, class: "tok-url" }, { tag: L.labelName, class: "tok-labelName" }, { tag: L.inserted, class: "tok-inserted" }, { tag: L.deleted, class: "tok-deleted" }, { tag: L.literal, class: "tok-literal" }, { tag: L.string, class: "tok-string" }, { tag: L.number, class: "tok-number" }, { tag: [L.regexp, L.escape, L.special(L.string)], class: "tok-string2" }, { tag: L.variableName, class: "tok-variableName" }, { tag: L.local(L.variableName), class: "tok-variableName tok-local" }, { tag: L.definition(L.variableName), class: "tok-variableName tok-definition" }, { tag: L.special(L.variableName), class: "tok-variableName2" }, { tag: L.definition(L.propertyName), class: "tok-propertyName tok-definition" }, { tag: L.typeName, class: "tok-typeName" }, { tag: L.namespace, class: "tok-namespace" }, { tag: L.className, class: "tok-className" }, { tag: L.macroName, class: "tok-macroName" }, { tag: L.propertyName, class: "tok-propertyName" }, { tag: L.operator, class: "tok-operator" }, { tag: L.comment, class: "tok-comment" }, { tag: L.meta, class: "tok-meta" }, { tag: L.invalid, class: "tok-invalid" }, { tag: L.punctuation, class: "tok-punctuation" }]);
var wo;
const en = new Y(), Ig = new Y();
class ut {
  constructor(e, t, i = [], s = "") {
    this.data = e, this.name = s, U.prototype.hasOwnProperty("tree") || Object.defineProperty(U.prototype, "tree", { get() {
      return Ce(this);
    } }), this.parser = t, this.extension = [qt.of(this), U.languageData.of((o, r, l) => {
      let a = Oa(o, r, l), h = a.type.prop(en);
      if (!h)
        return [];
      let c = o.facet(h), f = a.type.prop(Ig);
      if (f) {
        let u = a.resolve(r - a.from, l);
        for (let d of f)
          if (d.test(u, o)) {
            let p = o.facet(d.facet);
            return d.type == "replace" ? p : p.concat(c);
          }
      }
      return c;
    })].concat(i);
  }
  isActiveAt(e, t, i = -1) {
    return Oa(e, t, i).type.prop(en) == this.data;
  }
  findRegions(e) {
    let t = e.facet(qt);
    if ((t == null ? void 0 : t.data) == this.data)
      return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting)
      return [];
    let i = [], s = (o, r) => {
      if (o.prop(en) == this.data) {
        i.push({ from: r, to: r + o.length });
        return;
      }
      let l = o.prop(Y.mounted);
      if (l) {
        if (l.tree.prop(en) == this.data) {
          if (l.overlay)
            for (let a of l.overlay)
              i.push({ from: a.from + r, to: a.to + r });
          else
            i.push({ from: r, to: r + o.length });
          return;
        } else if (l.overlay) {
          let a = i.length;
          if (s(l.tree, l.overlay[0].from + r), i.length > a)
            return;
        }
      }
      for (let a = 0; a < o.children.length; a++) {
        let h = o.children[a];
        h instanceof Se && s(h, o.positions[a] + r);
      }
    };
    return s(Ce(e), 0), i;
  }
  get allowsNesting() {
    return true;
  }
}
ut.setState = H.define();
function Oa(n, e, t) {
  let i = n.facet(qt), s = Ce(n).topNode;
  if (!i || i.allowsNesting)
    for (let o = s; o; o = o.enter(e, t, we.ExcludeBuffers))
      o.type.isTop && (s = o);
  return s;
}
function Ce(n) {
  let e = n.field(ut.state, false);
  return e ? e.tree : Se.empty;
}
class Ng {
  constructor(e) {
    this.doc = e, this.cursorPos = 0, this.string = "", this.cursor = e.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(e) {
    return this.string = this.cursor.next(e - this.cursorPos).value, this.cursorPos = e + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(e) {
    return this.syncTo(e), this.string;
  }
  get lineChunks() {
    return true;
  }
  read(e, t) {
    let i = this.cursorPos - this.string.length;
    return e < i || t >= this.cursorPos ? this.doc.sliceString(e, t) : this.string.slice(e - i, t - i);
  }
}
let ji = null;
class Os {
  constructor(e, t, i = [], s, o, r, l, a) {
    this.parser = e, this.state = t, this.fragments = i, this.tree = s, this.treeLen = o, this.viewport = r, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  static create(e, t, i) {
    return new Os(e, t, [], Se.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new Ng(this.state.doc), this.fragments);
  }
  work(e, t) {
    return t != null && t >= this.state.doc.length && (t = void 0), this.tree != Se.empty && this.isDone(t ?? this.state.doc.length) ? (this.takeTree(), true) : this.withContext(() => {
      var i;
      if (typeof e == "number") {
        let s = Date.now() + e;
        e = () => Date.now() > s;
      }
      for (this.parse || (this.parse = this.startParse()), t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t); ; ) {
        let s = this.parse.advance();
        if (s)
          if (this.fragments = this.withoutTempSkipped(ni.addTree(s, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length, this.tree = s, this.parse = null, this.treeLen < (t ?? this.state.doc.length))
            this.parse = this.startParse();
          else
            return true;
        if (e())
          return false;
      }
    });
  }
  takeTree() {
    let e, t;
    this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
      for (; !(t = this.parse.advance()); )
        ;
    }), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(ni.addTree(this.tree, this.fragments, true)), this.parse = null);
  }
  withContext(e) {
    let t = ji;
    ji = this;
    try {
      return e();
    } finally {
      ji = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; t = this.tempSkipped.pop(); )
      e = Ea(e, t.from, t.to);
    return e;
  }
  changes(e, t) {
    let { fragments: i, tree: s, treeLen: o, viewport: r, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((h, c, f, u) => a.push({ fromA: h, toA: c, fromB: f, toB: u })), i = ni.applyChanges(i, a), s = Se.empty, o = 0, r = { from: e.mapPos(r.from, -1), to: e.mapPos(r.to, 1) }, this.skipped.length) {
        l = [];
        for (let h of this.skipped) {
          let c = e.mapPos(h.from, 1), f = e.mapPos(h.to, -1);
          c < f && l.push({ from: c, to: f });
        }
      }
    }
    return new Os(this.parser, t, i, s, o, r, l, this.scheduleOn);
  }
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to)
      return false;
    this.viewport = e;
    let t = this.skipped.length;
    for (let i = 0; i < this.skipped.length; i++) {
      let { from: s, to: o } = this.skipped[i];
      s < e.to && o > e.from && (this.fragments = Ea(this.fragments, s, o), this.skipped.splice(i--, 1));
    }
    return this.skipped.length >= t ? false : (this.reset(), true);
  }
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  skipUntilInView(e, t) {
    this.skipped.push({ from: e, to: t });
  }
  static getSkippingParser(e) {
    return new class extends Cg {
      createParse(t, i, s) {
        let o = s[0].from, r = s[s.length - 1].to;
        return { parsedPos: o, advance() {
          let a = ji;
          if (a) {
            for (let h of s)
              a.tempSkipped.push(h);
            e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
          }
          return this.parsedPos = r, new Se(Je.none, [], [], r - o);
        }, stoppedAt: null, stopAt() {
        } };
      }
    }();
  }
  isDone(e) {
    e = Math.min(e, this.state.doc.length);
    let t = this.fragments;
    return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
  }
  static get() {
    return ji;
  }
}
function Ea(n, e, t) {
  return ni.applyChanges(n, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class Bi {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let t = this.context.changes(e.changes, e.state), i = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, i) || t.takeTree(), new Bi(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length), i = Os.create(e.facet(qt).parser, e, { from: 0, to: t });
    return i.work(20, t) || i.takeTree(), new Bi(i);
  }
}
ut.state = ge.define({ create: Bi.init, update(n, e) {
  for (let t of e.effects)
    if (t.is(ut.setState))
      return t.value;
  return e.startState.facet(qt) != e.state.facet(qt) ? Bi.init(e.state) : n.apply(e);
} });
let Kc = (n) => {
  let e = setTimeout(() => n(), 500);
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (Kc = (n) => {
  let e = -1, t = setTimeout(() => {
    e = requestIdleCallback(n, { timeout: 500 - 100 });
  }, 100);
  return () => e < 0 ? clearTimeout(t) : cancelIdleCallback(e);
});
const xo = typeof navigator < "u" && (!((wo = navigator.scheduling) === null || wo === void 0) && wo.isInputPending) ? () => navigator.scheduling.isInputPending() : null, Vg = ae.fromClass(class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let t = this.view.state.field(ut.state).context;
    (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: e } = this.view, t = e.field(ut.state);
    (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = Kc(this.work));
  }
  work(e) {
    this.working = null;
    let t = Date.now();
    if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: i, viewport: { to: s } } = this.view, o = i.field(ut.state);
    if (o.tree == o.context.tree && o.context.isDone(s + 1e5))
      return;
    let r = Date.now() + Math.min(this.chunkBudget, 100, e && !xo ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = o.context.treeLen < s && i.doc.length > s + 1e3, a = o.context.work(() => xo && xo() || Date.now() > r, s + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - t, (a || this.chunkBudget <= 0) && (o.context.takeTree(), this.view.dispatch({ effects: ut.setState.of(new Bi(o.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(o.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((t) => Le(this.view.state, t)).then(() => this.workScheduled--), e.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, { eventHandlers: { focus() {
  this.scheduleWork();
} } }), qt = $.define({ combine(n) {
  return n.length ? n[0] : null;
}, enables: (n) => [ut.state, Vg, I.contentAttributes.compute([n], (e) => {
  let t = e.facet(n);
  return t && t.name ? { "data-language": t.name } : {};
})] }), $g = $.define(), js = $.define({ combine: (n) => {
  if (!n.length)
    return "  ";
  let e = n[0];
  if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
    throw new Error("Invalid indent unit: " + JSON.stringify(n[0]));
  return e;
} });
function Es(n) {
  let e = n.facet(js);
  return e.charCodeAt(0) == 9 ? n.tabSize * e.length : e.length;
}
function wn(n, e) {
  let t = "", i = n.tabSize, s = n.facet(js)[0];
  if (s == "	") {
    for (; e >= i; )
      t += "	", e -= i;
    s = " ";
  }
  for (let o = 0; o < e; o++)
    t += s;
  return t;
}
function Zr(n, e) {
  n instanceof U && (n = new Ks(n));
  for (let i of n.state.facet($g)) {
    let s = i(n, e);
    if (s !== void 0)
      return s;
  }
  let t = Ce(n.state);
  return t.length >= e ? zg(n, t, e) : null;
}
class Ks {
  constructor(e, t = {}) {
    this.state = e, this.options = t, this.unit = Es(e);
  }
  lineAt(e, t = 1) {
    let i = this.state.doc.lineAt(e), { simulateBreak: s, simulateDoubleBreak: o } = this.options;
    return s != null && s >= i.from && s <= i.to ? o && s == e ? { text: "", from: e } : (t < 0 ? s < e : s <= e) ? { text: i.text.slice(s - i.from), from: s } : { text: i.text.slice(0, s - i.from), from: i.from } : i;
  }
  textAfterPos(e, t = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak)
      return "";
    let { text: i, from: s } = this.lineAt(e, t);
    return i.slice(e - s, Math.min(i.length, e + 100 - s));
  }
  column(e, t = 1) {
    let { text: i, from: s } = this.lineAt(e, t), o = this.countColumn(i, e - s), r = this.options.overrideIndentation ? this.options.overrideIndentation(s) : -1;
    return r > -1 && (o += r - this.countColumn(i, i.search(/\S|$/))), o;
  }
  countColumn(e, t = e.length) {
    return $i(e, this.state.tabSize, t);
  }
  lineIndent(e, t = 1) {
    let { text: i, from: s } = this.lineAt(e, t), o = this.options.overrideIndentation;
    if (o) {
      let r = o(s);
      if (r > -1)
        return r;
    }
    return this.countColumn(i, i.search(/\S|$/));
  }
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const Fg = new Y();
function zg(n, e, t) {
  let i = e.resolveStack(t), s = e.resolveInner(t, -1).resolve(t, 0).enterUnfinishedNodesBefore(t);
  if (s != i.node) {
    let o = [];
    for (let r = s; r && !(r.from == i.node.from && r.type == i.node.type); r = r.parent)
      o.push(r);
    for (let r = o.length - 1; r >= 0; r--)
      i = { node: o[r], next: i };
  }
  return Gc(i, n, t);
}
function Gc(n, e, t) {
  for (let i = n; i; i = i.next) {
    let s = Wg(i.node);
    if (s)
      return s(el.create(e, t, i));
  }
  return 0;
}
function Hg(n) {
  return n.pos == n.options.simulateBreak && n.options.simulateDoubleBreak;
}
function Wg(n) {
  let e = n.type.prop(Fg);
  if (e)
    return e;
  let t = n.firstChild, i;
  if (t && (i = t.type.prop(Y.closedBy))) {
    let s = n.lastChild, o = s && i.indexOf(s.name) > -1;
    return (r) => Kg(r, true, 1, void 0, o && !Hg(r) ? s.from : void 0);
  }
  return n.parent == null ? qg : null;
}
function qg() {
  return 0;
}
class el extends Ks {
  constructor(e, t, i) {
    super(e.state, e.options), this.base = e, this.pos = t, this.context = i;
  }
  get node() {
    return this.context.node;
  }
  static create(e, t, i) {
    return new el(e, t, i);
  }
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  baseIndentFor(e) {
    let t = this.state.doc.lineAt(e.from);
    for (; ; ) {
      let i = e.resolve(t.from);
      for (; i.parent && i.parent.from == i.from; )
        i = i.parent;
      if (Ug(i, e))
        break;
      t = this.state.doc.lineAt(i.from);
    }
    return this.lineIndent(t.from);
  }
  continue() {
    return Gc(this.context.next, this.base, this.pos);
  }
}
function Ug(n, e) {
  for (let t = e; t; t = t.parent)
    if (n == t)
      return true;
  return false;
}
function jg(n) {
  let e = n.node, t = e.childAfter(e.from), i = e.lastChild;
  if (!t)
    return null;
  let s = n.options.simulateBreak, o = n.state.doc.lineAt(t.from), r = s == null || s <= o.from ? o.to : Math.min(o.to, s);
  for (let l = t.to; ; ) {
    let a = e.childAfter(l);
    if (!a || a == i)
      return null;
    if (!a.type.isSkipped) {
      if (a.from >= r)
        return null;
      let h = /^ */.exec(o.text.slice(t.to - o.from))[0].length;
      return { from: t.from, to: t.to + h };
    }
    l = a.to;
  }
}
function Kg(n, e, t, i, s) {
  let o = n.textAfter, r = o.match(/^\s*/)[0].length, l = i && o.slice(r, r + i.length) == i || s == n.pos + r, a = e ? jg(n) : null;
  return a ? l ? n.column(a.from) : n.column(a.to) : n.baseIndent + (l ? 0 : n.unit * t);
}
const Gg = 200;
function Yg() {
  return U.transactionFilter.of((n) => {
    if (!n.docChanged || !n.isUserEvent("input.type") && !n.isUserEvent("input.complete"))
      return n;
    let e = n.startState.languageDataAt("indentOnInput", n.startState.selection.main.head);
    if (!e.length)
      return n;
    let t = n.newDoc, { head: i } = n.newSelection.main, s = t.lineAt(i);
    if (i > s.from + Gg)
      return n;
    let o = t.sliceString(s.from, i);
    if (!e.some((h) => h.test(o)))
      return n;
    let { state: r } = n, l = -1, a = [];
    for (let { head: h } of r.selection.ranges) {
      let c = r.doc.lineAt(h);
      if (c.from == l)
        continue;
      l = c.from;
      let f = Zr(r, c.from);
      if (f == null)
        continue;
      let u = /^\s*/.exec(c.text)[0], d = wn(r, f);
      u != d && a.push({ from: c.from, to: c.from + u.length, insert: d });
    }
    return a.length ? [n, { changes: a, sequential: true }] : n;
  });
}
const Jg = $.define(), Xg = new Y();
function Qg(n, e, t) {
  let i = Ce(n);
  if (i.length < t)
    return null;
  let s = i.resolveStack(t, 1), o = null;
  for (let r = s; r; r = r.next) {
    let l = r.node;
    if (l.to <= t || l.from > t)
      continue;
    if (o && l.from < e)
      break;
    let a = l.type.prop(Xg);
    if (a && (l.to < i.length - 50 || i.length == n.doc.length || !Zg(l))) {
      let h = a(l, n);
      h && h.from <= t && h.from >= e && h.to > t && (o = h);
    }
  }
  return o;
}
function Zg(n) {
  let e = n.lastChild;
  return e && e.to == n.to && e.type.isError;
}
function Bs(n, e, t) {
  for (let i of n.facet(Jg)) {
    let s = i(n, e, t);
    if (s)
      return s;
  }
  return Qg(n, e, t);
}
function Yc(n, e) {
  let t = e.mapPos(n.from, 1), i = e.mapPos(n.to, -1);
  return t >= i ? void 0 : { from: t, to: i };
}
const Gs = H.define({ map: Yc }), Ln = H.define({ map: Yc });
function Jc(n) {
  let e = [];
  for (let { head: t } of n.state.selection.ranges)
    e.some((i) => i.from <= t && i.to >= t) || e.push(n.lineBlockAt(t));
  return e;
}
const hi = ge.define({ create() {
  return F.none;
}, update(n, e) {
  n = n.map(e.changes);
  for (let t of e.effects)
    if (t.is(Gs) && !e0(n, t.value.from, t.value.to)) {
      let { preparePlaceholder: i } = e.state.facet(tl), s = i ? F.replace({ widget: new l0(i(e.state, t.value)) }) : Ba;
      n = n.update({ add: [s.range(t.value.from, t.value.to)] });
    } else
      t.is(Ln) && (n = n.update({ filter: (i, s) => t.value.from != i || t.value.to != s, filterFrom: t.value.from, filterTo: t.value.to }));
  if (e.selection) {
    let t = false, { head: i } = e.selection.main;
    n.between(i, i, (s, o) => {
      s < i && o > i && (t = true);
    }), t && (n = n.update({ filterFrom: i, filterTo: i, filter: (s, o) => o <= i || s >= i }));
  }
  return n;
}, provide: (n) => I.decorations.from(n), toJSON(n, e) {
  let t = [];
  return n.between(0, e.doc.length, (i, s) => {
    t.push(i, s);
  }), t;
}, fromJSON(n) {
  if (!Array.isArray(n) || n.length % 2)
    throw new RangeError("Invalid JSON for fold state");
  let e = [];
  for (let t = 0; t < n.length; ) {
    let i = n[t++], s = n[t++];
    if (typeof i != "number" || typeof s != "number")
      throw new RangeError("Invalid JSON for fold state");
    e.push(Ba.range(i, s));
  }
  return F.set(e, true);
} });
function Ps(n, e, t) {
  var i;
  let s = null;
  return (i = n.field(hi, false)) === null || i === void 0 || i.between(e, t, (o, r) => {
    (!s || s.from > o) && (s = { from: o, to: r });
  }), s;
}
function e0(n, e, t) {
  let i = false;
  return n.between(e, e, (s, o) => {
    s == e && o == t && (i = true);
  }), i;
}
function Xc(n, e) {
  return n.field(hi, false) ? e : e.concat(H.appendConfig.of(Zc()));
}
const t0 = (n) => {
  for (let e of Jc(n)) {
    let t = Bs(n.state, e.from, e.to);
    if (t)
      return n.dispatch({ effects: Xc(n.state, [Gs.of(t), Qc(n, t)]) }), true;
  }
  return false;
}, i0 = (n) => {
  if (!n.state.field(hi, false))
    return false;
  let e = [];
  for (let t of Jc(n)) {
    let i = Ps(n.state, t.from, t.to);
    i && e.push(Ln.of(i), Qc(n, i, false));
  }
  return e.length && n.dispatch({ effects: e }), e.length > 0;
};
function Qc(n, e, t = true) {
  let i = n.state.doc.lineAt(e.from).number, s = n.state.doc.lineAt(e.to).number;
  return I.announce.of(`${n.state.phrase(t ? "Folded lines" : "Unfolded lines")} ${i} ${n.state.phrase("to")} ${s}.`);
}
const n0 = (n) => {
  let { state: e } = n, t = [];
  for (let i = 0; i < e.doc.length; ) {
    let s = n.lineBlockAt(i), o = Bs(e, s.from, s.to);
    o && t.push(Gs.of(o)), i = (o ? n.lineBlockAt(o.to) : s).to + 1;
  }
  return t.length && n.dispatch({ effects: Xc(n.state, t) }), !!t.length;
}, s0 = (n) => {
  let e = n.state.field(hi, false);
  if (!e || !e.size)
    return false;
  let t = [];
  return e.between(0, n.state.doc.length, (i, s) => {
    t.push(Ln.of({ from: i, to: s }));
  }), n.dispatch({ effects: t }), true;
}, o0 = [{ key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: t0 }, { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: i0 }, { key: "Ctrl-Alt-[", run: n0 }, { key: "Ctrl-Alt-]", run: s0 }], r0 = { placeholderDOM: null, preparePlaceholder: null, placeholderText: "\u2026" }, tl = $.define({ combine(n) {
  return vt(n, r0);
} });
function Zc(n) {
  let e = [hi, c0];
  return n && e.push(tl.of(n)), e;
}
function ef(n, e) {
  let { state: t } = n, i = t.facet(tl), s = (r) => {
    let l = n.lineBlockAt(n.posAtDOM(r.target)), a = Ps(n.state, l.from, l.to);
    a && n.dispatch({ effects: Ln.of(a) }), r.preventDefault();
  };
  if (i.placeholderDOM)
    return i.placeholderDOM(n, s, e);
  let o = document.createElement("span");
  return o.textContent = i.placeholderText, o.setAttribute("aria-label", t.phrase("folded code")), o.title = t.phrase("unfold"), o.className = "cm-foldPlaceholder", o.onclick = s, o;
}
const Ba = F.replace({ widget: new class extends wt {
  toDOM(n) {
    return ef(n, null);
  }
}() });
class l0 extends wt {
  constructor(e) {
    super(), this.value = e;
  }
  eq(e) {
    return this.value == e.value;
  }
  toDOM(e) {
    return ef(e, this.value);
  }
}
const a0 = { openText: "\u2304", closedText: "\u203A", markerDOM: null, domEventHandlers: {}, foldingChanged: () => false };
class ko extends Mt {
  constructor(e, t) {
    super(), this.config = e, this.open = t;
  }
  eq(e) {
    return this.config == e.config && this.open == e.open;
  }
  toDOM(e) {
    if (this.config.markerDOM)
      return this.config.markerDOM(this.open);
    let t = document.createElement("span");
    return t.textContent = this.open ? this.config.openText : this.config.closedText, t.title = e.state.phrase(this.open ? "Fold line" : "Unfold line"), t;
  }
}
function h0(n = {}) {
  let e = Object.assign(Object.assign({}, a0), n), t = new ko(e, true), i = new ko(e, false), s = ae.fromClass(class {
    constructor(r) {
      this.from = r.viewport.from, this.markers = this.buildMarkers(r);
    }
    update(r) {
      (r.docChanged || r.viewportChanged || r.startState.facet(qt) != r.state.facet(qt) || r.startState.field(hi, false) != r.state.field(hi, false) || Ce(r.startState) != Ce(r.state) || e.foldingChanged(r)) && (this.markers = this.buildMarkers(r.view));
    }
    buildMarkers(r) {
      let l = new Ct();
      for (let a of r.viewportLineBlocks) {
        let h = Ps(r.state, a.from, a.to) ? i : Bs(r.state, a.from, a.to) ? t : null;
        h && l.add(a.from, a.from, h);
      }
      return l.finish();
    }
  }), { domEventHandlers: o } = e;
  return [s, lg({ class: "cm-foldGutter", markers(r) {
    var l;
    return ((l = r.plugin(s)) === null || l === void 0 ? void 0 : l.markers) || X.empty;
  }, initialSpacer() {
    return new ko(e, false);
  }, domEventHandlers: Object.assign(Object.assign({}, o), { click: (r, l, a) => {
    if (o.click && o.click(r, l, a))
      return true;
    let h = Ps(r.state, l.from, l.to);
    if (h)
      return r.dispatch({ effects: Ln.of(h) }), true;
    let c = Bs(r.state, l.from, l.to);
    return c ? (r.dispatch({ effects: Gs.of(c) }), true) : false;
  } }) }), Zc()];
}
const c0 = I.baseTheme({ ".cm-foldPlaceholder": { backgroundColor: "#eee", border: "1px solid #ddd", color: "#888", borderRadius: ".2em", margin: "0 1px", padding: "0 1px", cursor: "pointer" }, ".cm-foldGutter span": { padding: "0 1px", cursor: "pointer" } });
class Ys {
  constructor(e, t) {
    this.specs = e;
    let i;
    function s(l) {
      let a = Ft.newName();
      return (i || (i = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const o = typeof t.all == "string" ? t.all : t.all ? s(t.all) : void 0, r = t.scope;
    this.scope = r instanceof ut ? (l) => l.prop(en) == r.data : r ? (l) => l == r : void 0, this.style = jc(e.map((l) => ({ tag: l.tag, class: l.class || s(Object.assign({}, l, { tag: null })) })), { all: o }).style, this.module = i ? new Ft(i) : null, this.themeType = t.themeType;
  }
  static define(e, t) {
    return new Ys(e, t || {});
  }
}
const vr = $.define(), tf = $.define({ combine(n) {
  return n.length ? [n[0]] : null;
} });
function _o(n) {
  let e = n.facet(vr);
  return e.length ? e : n.facet(tf);
}
function f0(n, e) {
  let t = [d0], i;
  return n instanceof Ys && (n.module && t.push(I.styleModule.of(n.module)), i = n.themeType), (e == null ? void 0 : e.fallback) ? t.push(tf.of(n)) : i ? t.push(vr.computeN([I.darkTheme], (s) => s.facet(I.darkTheme) == (i == "dark") ? [n] : [])) : t.push(vr.of(n)), t;
}
class u0 {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = Ce(e.state), this.decorations = this.buildDeco(e, _o(e.state)), this.decoratedTo = e.viewport.to;
  }
  update(e) {
    let t = Ce(e.state), i = _o(e.state), s = i != _o(e.startState), { viewport: o } = e.view, r = e.changes.mapPos(this.decoratedTo, 1);
    t.length < o.to && !s && t.type == this.tree.type && r >= o.to ? (this.decorations = this.decorations.map(e.changes), this.decoratedTo = r) : (t != this.tree || e.viewportChanged || s) && (this.tree = t, this.decorations = this.buildDeco(e.view, i), this.decoratedTo = o.to);
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length)
      return F.none;
    let i = new Ct();
    for (let { from: s, to: o } of e.visibleRanges)
      Pg(this.tree, t, (r, l, a) => {
        i.add(r, l, this.markCache[a] || (this.markCache[a] = F.mark({ class: a })));
      }, s, o);
    return i.finish();
  }
}
const d0 = fi.high(ae.fromClass(u0, { decorations: (n) => n.decorations })), p0 = Ys.define([{ tag: L.meta, color: "#404740" }, { tag: L.link, textDecoration: "underline" }, { tag: L.heading, textDecoration: "underline", fontWeight: "bold" }, { tag: L.emphasis, fontStyle: "italic" }, { tag: L.strong, fontWeight: "bold" }, { tag: L.strikethrough, textDecoration: "line-through" }, { tag: L.keyword, color: "#708" }, { tag: [L.atom, L.bool, L.url, L.contentSeparator, L.labelName], color: "#219" }, { tag: [L.literal, L.inserted], color: "#164" }, { tag: [L.string, L.deleted], color: "#a11" }, { tag: [L.regexp, L.escape, L.special(L.string)], color: "#e40" }, { tag: L.definition(L.variableName), color: "#00f" }, { tag: L.local(L.variableName), color: "#30a" }, { tag: [L.typeName, L.namespace], color: "#085" }, { tag: L.className, color: "#167" }, { tag: [L.special(L.variableName), L.macroName], color: "#256" }, { tag: L.definition(L.propertyName), color: "#00c" }, { tag: L.comment, color: "#940" }, { tag: L.invalid, color: "#f00" }]), m0 = I.baseTheme({ "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" }, "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" } }), nf = 1e4, sf = "()[]{}", of = $.define({ combine(n) {
  return vt(n, { afterCursor: true, brackets: sf, maxScanDistance: nf, renderMatch: y0 });
} }), g0 = F.mark({ class: "cm-matchingBracket" }), b0 = F.mark({ class: "cm-nonmatchingBracket" });
function y0(n) {
  let e = [], t = n.matched ? g0 : b0;
  return e.push(t.range(n.start.from, n.start.to)), n.end && e.push(t.range(n.end.from, n.end.to)), e;
}
const v0 = ge.define({ create() {
  return F.none;
}, update(n, e) {
  if (!e.docChanged && !e.selection)
    return n;
  let t = [], i = e.state.facet(of);
  for (let s of e.state.selection.ranges) {
    if (!s.empty)
      continue;
    let o = dt(e.state, s.head, -1, i) || s.head > 0 && dt(e.state, s.head - 1, 1, i) || i.afterCursor && (dt(e.state, s.head, 1, i) || s.head < e.state.doc.length && dt(e.state, s.head + 1, -1, i));
    o && (t = t.concat(i.renderMatch(o, e.state)));
  }
  return F.set(t, true);
}, provide: (n) => I.decorations.from(n) }), w0 = [v0, m0];
function x0(n = {}) {
  return [of.of(n), w0];
}
const k0 = new Y();
function wr(n, e, t) {
  let i = n.prop(e < 0 ? Y.openedBy : Y.closedBy);
  if (i)
    return i;
  if (n.name.length == 1) {
    let s = t.indexOf(n.name);
    if (s > -1 && s % 2 == (e < 0 ? 1 : 0))
      return [t[s + e]];
  }
  return null;
}
function xr(n) {
  let e = n.type.prop(k0);
  return e ? e(n.node) : n;
}
function dt(n, e, t, i = {}) {
  let s = i.maxScanDistance || nf, o = i.brackets || sf, r = Ce(n), l = r.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let h = wr(a.type, t, o);
    if (h && a.from < a.to) {
      let c = xr(a);
      if (c && (t > 0 ? e >= c.from && e < c.to : e > c.from && e <= c.to))
        return _0(n, e, t, a, c, h, o);
    }
  }
  return S0(n, e, t, r, l.type, s, o);
}
function _0(n, e, t, i, s, o, r) {
  let l = i.parent, a = { from: s.from, to: s.to }, h = 0, c = l == null ? void 0 : l.cursor();
  if (c && (t < 0 ? c.childBefore(i.from) : c.childAfter(i.to)))
    do
      if (t < 0 ? c.to <= i.from : c.from >= i.to) {
        if (h == 0 && o.indexOf(c.type.name) > -1 && c.from < c.to) {
          let f = xr(c);
          return { start: a, end: f ? { from: f.from, to: f.to } : void 0, matched: true };
        } else if (wr(c.type, t, r))
          h++;
        else if (wr(c.type, -t, r)) {
          if (h == 0) {
            let f = xr(c);
            return { start: a, end: f && f.from < f.to ? { from: f.from, to: f.to } : void 0, matched: false };
          }
          h--;
        }
      }
    while (t < 0 ? c.prevSibling() : c.nextSibling());
  return { start: a, matched: false };
}
function S0(n, e, t, i, s, o, r) {
  let l = t < 0 ? n.sliceDoc(e - 1, e) : n.sliceDoc(e, e + 1), a = r.indexOf(l);
  if (a < 0 || a % 2 == 0 != t > 0)
    return null;
  let h = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e }, c = n.doc.iterRange(e, t > 0 ? n.doc.length : 0), f = 0;
  for (let u = 0; !c.next().done && u <= o; ) {
    let d = c.value;
    t < 0 && (u += d.length);
    let p = e + u * t;
    for (let g = t > 0 ? 0 : d.length - 1, m = t > 0 ? d.length : -1; g != m; g += t) {
      let y = r.indexOf(d[g]);
      if (!(y < 0 || i.resolveInner(p + g, 1).type != s))
        if (y % 2 == 0 == t > 0)
          f++;
        else {
          if (f == 1)
            return { start: h, end: { from: p + g, to: p + g + 1 }, matched: y >> 1 == a >> 1 };
          f--;
        }
    }
    t > 0 && (u += d.length);
  }
  return c.done ? { start: h, matched: false } : null;
}
const C0 = /* @__PURE__ */ Object.create(null), Pa = [Je.none], Ra = [], La = /* @__PURE__ */ Object.create(null), A0 = /* @__PURE__ */ Object.create(null);
for (let [n, e] of [["variable", "variableName"], ["variable-2", "variableName.special"], ["string-2", "string.special"], ["def", "variableName.definition"], ["tag", "tagName"], ["attribute", "attributeName"], ["type", "typeName"], ["builtin", "variableName.standard"], ["qualifier", "modifier"], ["error", "invalid"], ["header", "heading"], ["property", "propertyName"]])
  A0[n] = M0(C0, e);
function So(n, e) {
  Ra.indexOf(n) > -1 || (Ra.push(n), console.warn(e));
}
function M0(n, e) {
  let t = [];
  for (let l of e.split(" ")) {
    let a = [];
    for (let h of l.split(".")) {
      let c = n[h] || L[h];
      c ? typeof c == "function" ? a.length ? a = a.map(c) : So(h, `Modifier ${h} used at start of tag`) : a.length ? So(h, `Tag ${h} used as modifier`) : a = Array.isArray(c) ? c : [c] : So(h, `Unknown highlighting tag ${h}`);
    }
    for (let h of a)
      t.push(h);
  }
  if (!t.length)
    return 0;
  let i = e.replace(/ /g, "_"), s = i + " " + t.map((l) => l.id), o = La[s];
  if (o)
    return o.id;
  let r = La[s] = Je.define({ id: Pa.length, name: i, props: [Eg({ [i]: t })] });
  return Pa.push(r), r.id;
}
oe.RTL, oe.LTR;
const D0 = (n) => {
  let { state: e } = n, t = e.doc.lineAt(e.selection.main.from), i = nl(n.state, t.from);
  return i.line ? T0(n) : i.block ? E0(n) : false;
};
function il(n, e) {
  return ({ state: t, dispatch: i }) => {
    if (t.readOnly)
      return false;
    let s = n(e, t);
    return s ? (i(t.update(s)), true) : false;
  };
}
const T0 = il(R0, 0), O0 = il(rf, 0), E0 = il((n, e) => rf(n, e, P0(e)), 0);
function nl(n, e) {
  let t = n.languageDataAt("commentTokens", e);
  return t.length ? t[0] : {};
}
const Ki = 50;
function B0(n, { open: e, close: t }, i, s) {
  let o = n.sliceDoc(i - Ki, i), r = n.sliceDoc(s, s + Ki), l = /\s*$/.exec(o)[0].length, a = /^\s*/.exec(r)[0].length, h = o.length - l;
  if (o.slice(h - e.length, h) == e && r.slice(a, a + t.length) == t)
    return { open: { pos: i - l, margin: l && 1 }, close: { pos: s + a, margin: a && 1 } };
  let c, f;
  s - i <= 2 * Ki ? c = f = n.sliceDoc(i, s) : (c = n.sliceDoc(i, i + Ki), f = n.sliceDoc(s - Ki, s));
  let u = /^\s*/.exec(c)[0].length, d = /\s*$/.exec(f)[0].length, p = f.length - d - t.length;
  return c.slice(u, u + e.length) == e && f.slice(p, p + t.length) == t ? { open: { pos: i + u + e.length, margin: /\s/.test(c.charAt(u + e.length)) ? 1 : 0 }, close: { pos: s - d - t.length, margin: /\s/.test(f.charAt(p - 1)) ? 1 : 0 } } : null;
}
function P0(n) {
  let e = [];
  for (let t of n.selection.ranges) {
    let i = n.doc.lineAt(t.from), s = t.to <= i.to ? i : n.doc.lineAt(t.to);
    s.from > i.from && s.from == t.to && (s = t.to == i.to + 1 ? i : n.doc.lineAt(t.to - 1));
    let o = e.length - 1;
    o >= 0 && e[o].to > i.from ? e[o].to = s.to : e.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: s.to });
  }
  return e;
}
function rf(n, e, t = e.selection.ranges) {
  let i = t.map((o) => nl(e, o.from).block);
  if (!i.every((o) => o))
    return null;
  let s = t.map((o, r) => B0(e, i[r], o.from, o.to));
  if (n != 2 && !s.every((o) => o))
    return { changes: e.changes(t.map((o, r) => s[r] ? [] : [{ from: o.from, insert: i[r].open + " " }, { from: o.to, insert: " " + i[r].close }])) };
  if (n != 1 && s.some((o) => o)) {
    let o = [];
    for (let r = 0, l; r < s.length; r++)
      if (l = s[r]) {
        let a = i[r], { open: h, close: c } = l;
        o.push({ from: h.pos - a.open.length, to: h.pos + h.margin }, { from: c.pos - c.margin, to: c.pos + a.close.length });
      }
    return { changes: o };
  }
  return null;
}
function R0(n, e, t = e.selection.ranges) {
  let i = [], s = -1;
  for (let { from: o, to: r } of t) {
    let l = i.length, a = 1e9, h = nl(e, o).line;
    if (h) {
      for (let c = o; c <= r; ) {
        let f = e.doc.lineAt(c);
        if (f.from > s && (o == r || r > f.from)) {
          s = f.from;
          let u = /^\s*/.exec(f.text)[0].length, d = u == f.length, p = f.text.slice(u, u + h.length) == h ? u : -1;
          u < f.text.length && u < a && (a = u), i.push({ line: f, comment: p, token: h, indent: u, empty: d, single: false });
        }
        c = f.to + 1;
      }
      if (a < 1e9)
        for (let c = l; c < i.length; c++)
          i[c].indent < i[c].line.text.length && (i[c].indent = a);
      i.length == l + 1 && (i[l].single = true);
    }
  }
  if (n != 2 && i.some((o) => o.comment < 0 && (!o.empty || o.single))) {
    let o = [];
    for (let { line: l, token: a, indent: h, empty: c, single: f } of i)
      (f || !c) && o.push({ from: l.from + h, insert: a + " " });
    let r = e.changes(o);
    return { changes: r, selection: e.selection.map(r, 1) };
  } else if (n != 1 && i.some((o) => o.comment >= 0)) {
    let o = [];
    for (let { line: r, comment: l, token: a } of i)
      if (l >= 0) {
        let h = r.from + l, c = h + a.length;
        r.text[c - r.from] == " " && c++, o.push({ from: h, to: c });
      }
    return { changes: o };
  }
  return null;
}
const kr = Tt.define(), L0 = Tt.define(), I0 = $.define(), lf = $.define({ combine(n) {
  return vt(n, { minDepth: 100, newGroupDelay: 500, joinToEvent: (e, t) => t }, { minDepth: Math.max, newGroupDelay: Math.min, joinToEvent: (e, t) => (i, s) => e(i, s) || t(i, s) });
} }), af = ge.define({ create() {
  return pt.empty;
}, update(n, e) {
  let t = e.state.facet(lf), i = e.annotation(kr);
  if (i) {
    let a = Ie.fromTransaction(e, i.selection), h = i.side, c = h == 0 ? n.undone : n.done;
    return a ? c = Rs(c, c.length, t.minDepth, a) : c = ff(c, e.startState.selection), new pt(h == 0 ? i.rest : c, h == 0 ? c : i.rest);
  }
  let s = e.annotation(L0);
  if ((s == "full" || s == "before") && (n = n.isolate()), e.annotation(de.addToHistory) === false)
    return e.changes.empty ? n : n.addMapping(e.changes.desc);
  let o = Ie.fromTransaction(e), r = e.annotation(de.time), l = e.annotation(de.userEvent);
  return o ? n = n.addChanges(o, r, l, t, e) : e.selection && (n = n.addSelection(e.startState.selection, r, l, t.newGroupDelay)), (s == "full" || s == "after") && (n = n.isolate()), n;
}, toJSON(n) {
  return { done: n.done.map((e) => e.toJSON()), undone: n.undone.map((e) => e.toJSON()) };
}, fromJSON(n) {
  return new pt(n.done.map(Ie.fromJSON), n.undone.map(Ie.fromJSON));
} });
function N0(n = {}) {
  return [af, lf.of(n), I.domEventHandlers({ beforeinput(e, t) {
    let i = e.inputType == "historyUndo" ? hf : e.inputType == "historyRedo" ? _r : null;
    return i ? (e.preventDefault(), i(t)) : false;
  } })];
}
function Js(n, e) {
  return function({ state: t, dispatch: i }) {
    if (!e && t.readOnly)
      return false;
    let s = t.field(af, false);
    if (!s)
      return false;
    let o = s.pop(n, t, e);
    return o ? (i(o), true) : false;
  };
}
const hf = Js(0, false), _r = Js(1, false), V0 = Js(0, true), $0 = Js(1, true);
class Ie {
  constructor(e, t, i, s, o) {
    this.changes = e, this.effects = t, this.mapped = i, this.startSelection = s, this.selectionsAfter = o;
  }
  setSelAfter(e) {
    return new Ie(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e, t, i;
    return { changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(), mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(), startSelection: (i = this.startSelection) === null || i === void 0 ? void 0 : i.toJSON(), selectionsAfter: this.selectionsAfter.map((s) => s.toJSON()) };
  }
  static fromJSON(e) {
    return new Ie(e.changes && ue.fromJSON(e.changes), [], e.mapped && mt.fromJSON(e.mapped), e.startSelection && k.fromJSON(e.startSelection), e.selectionsAfter.map(k.fromJSON));
  }
  static fromTransaction(e, t) {
    let i = Ue;
    for (let s of e.startState.facet(I0)) {
      let o = s(e);
      o.length && (i = i.concat(o));
    }
    return !i.length && e.changes.empty ? null : new Ie(e.changes.invert(e.startState.doc), i, void 0, t || e.startState.selection, Ue);
  }
  static selection(e) {
    return new Ie(void 0, Ue, void 0, void 0, e);
  }
}
function Rs(n, e, t, i) {
  let s = e + 1 > t + 20 ? e - t - 1 : 0, o = n.slice(s, e);
  return o.push(i), o;
}
function F0(n, e) {
  let t = [], i = false;
  return n.iterChangedRanges((s, o) => t.push(s, o)), e.iterChangedRanges((s, o, r, l) => {
    for (let a = 0; a < t.length; ) {
      let h = t[a++], c = t[a++];
      l >= h && r <= c && (i = true);
    }
  }), i;
}
function z0(n, e) {
  return n.ranges.length == e.ranges.length && n.ranges.filter((t, i) => t.empty != e.ranges[i].empty).length === 0;
}
function cf(n, e) {
  return n.length ? e.length ? n.concat(e) : n : e;
}
const Ue = [], H0 = 200;
function ff(n, e) {
  if (n.length) {
    let t = n[n.length - 1], i = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - H0));
    return i.length && i[i.length - 1].eq(e) ? n : (i.push(e), Rs(n, n.length - 1, 1e9, t.setSelAfter(i)));
  } else
    return [Ie.selection([e])];
}
function W0(n) {
  let e = n[n.length - 1], t = n.slice();
  return t[n.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), t;
}
function Co(n, e) {
  if (!n.length)
    return n;
  let t = n.length, i = Ue;
  for (; t; ) {
    let s = q0(n[t - 1], e, i);
    if (s.changes && !s.changes.empty || s.effects.length) {
      let o = n.slice(0, t);
      return o[t - 1] = s, o;
    } else
      e = s.mapped, t--, i = s.selectionsAfter;
  }
  return i.length ? [Ie.selection(i)] : Ue;
}
function q0(n, e, t) {
  let i = cf(n.selectionsAfter.length ? n.selectionsAfter.map((l) => l.map(e)) : Ue, t);
  if (!n.changes)
    return Ie.selection(i);
  let s = n.changes.map(e), o = e.mapDesc(n.changes, true), r = n.mapped ? n.mapped.composeDesc(o) : o;
  return new Ie(s, H.mapEffects(n.effects, e), r, n.startSelection.map(o), i);
}
const U0 = /^(input\.type|delete)($|\.)/;
class pt {
  constructor(e, t, i = 0, s = void 0) {
    this.done = e, this.undone = t, this.prevTime = i, this.prevUserEvent = s;
  }
  isolate() {
    return this.prevTime ? new pt(this.done, this.undone) : this;
  }
  addChanges(e, t, i, s, o) {
    let r = this.done, l = r[r.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!i || U0.test(i)) && (!l.selectionsAfter.length && t - this.prevTime < s.newGroupDelay && s.joinToEvent(o, F0(l.changes, e.changes)) || i == "input.type.compose") ? r = Rs(r, r.length - 1, s.minDepth, new Ie(e.changes.compose(l.changes), cf(H.mapEffects(e.effects, l.changes), l.effects), l.mapped, l.startSelection, Ue)) : r = Rs(r, r.length, s.minDepth, e), new pt(r, Ue, t, i);
  }
  addSelection(e, t, i, s) {
    let o = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Ue;
    return o.length > 0 && t - this.prevTime < s && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && z0(o[o.length - 1], e) ? this : new pt(ff(this.done, e), this.undone, t, i);
  }
  addMapping(e) {
    return new pt(Co(this.done, e), Co(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, i) {
    let s = e == 0 ? this.done : this.undone;
    if (s.length == 0)
      return null;
    let o = s[s.length - 1], r = o.selectionsAfter[0] || t.selection;
    if (i && o.selectionsAfter.length)
      return t.update({ selection: o.selectionsAfter[o.selectionsAfter.length - 1], annotations: kr.of({ side: e, rest: W0(s), selection: r }), userEvent: e == 0 ? "select.undo" : "select.redo", scrollIntoView: true });
    if (o.changes) {
      let l = s.length == 1 ? Ue : s.slice(0, s.length - 1);
      return o.mapped && (l = Co(l, o.mapped)), t.update({ changes: o.changes, selection: o.startSelection, effects: o.effects, annotations: kr.of({ side: e, rest: l, selection: r }), filter: false, userEvent: e == 0 ? "undo" : "redo", scrollIntoView: true });
    } else
      return null;
  }
}
pt.empty = new pt(Ue, Ue);
const j0 = [{ key: "Mod-z", run: hf, preventDefault: true }, { key: "Mod-y", mac: "Mod-Shift-z", run: _r, preventDefault: true }, { linux: "Ctrl-Shift-z", run: _r, preventDefault: true }, { key: "Mod-u", run: V0, preventDefault: true }, { key: "Alt-u", mac: "Mod-Shift-u", run: $0, preventDefault: true }];
function Fi(n, e) {
  return k.create(n.ranges.map(e), n.mainIndex);
}
function xt(n, e) {
  return n.update({ selection: e, scrollIntoView: true, userEvent: "select" });
}
function tt({ state: n, dispatch: e }, t) {
  let i = Fi(n.selection, t);
  return i.eq(n.selection, true) ? false : (e(xt(n, i)), true);
}
function Xs(n, e) {
  return k.cursor(e ? n.to : n.from);
}
function uf(n, e) {
  return tt(n, (t) => t.empty ? n.moveByChar(t, e) : Xs(t, e));
}
function Ae(n) {
  return n.textDirectionAt(n.state.selection.main.head) == oe.LTR;
}
const df = (n) => uf(n, !Ae(n)), pf = (n) => uf(n, Ae(n));
function mf(n, e) {
  return tt(n, (t) => t.empty ? n.moveByGroup(t, e) : Xs(t, e));
}
const K0 = (n) => mf(n, !Ae(n)), G0 = (n) => mf(n, Ae(n));
function Y0(n, e, t) {
  if (e.type.prop(t))
    return true;
  let i = e.to - e.from;
  return i && (i > 2 || /[^\s,.;:]/.test(n.sliceDoc(e.from, e.to))) || e.firstChild;
}
function Qs(n, e, t) {
  let i = Ce(n).resolveInner(e.head), s = t ? Y.closedBy : Y.openedBy;
  for (let a = e.head; ; ) {
    let h = t ? i.childAfter(a) : i.childBefore(a);
    if (!h)
      break;
    Y0(n, h, s) ? i = h : a = t ? h.to : h.from;
  }
  let o = i.type.prop(s), r, l;
  return o && (r = t ? dt(n, i.from, 1) : dt(n, i.to, -1)) && r.matched ? l = t ? r.end.to : r.end.from : l = t ? i.to : i.from, k.cursor(l, t ? -1 : 1);
}
const J0 = (n) => tt(n, (e) => Qs(n.state, e, !Ae(n))), X0 = (n) => tt(n, (e) => Qs(n.state, e, Ae(n)));
function gf(n, e) {
  return tt(n, (t) => {
    if (!t.empty)
      return Xs(t, e);
    let i = n.moveVertically(t, e);
    return i.head != t.head ? i : n.moveToLineBoundary(t, e);
  });
}
const bf = (n) => gf(n, false), yf = (n) => gf(n, true);
function vf(n) {
  let e = n.scrollDOM.clientHeight < n.scrollDOM.scrollHeight - 2, t = 0, i = 0, s;
  if (e) {
    for (let o of n.state.facet(I.scrollMargins)) {
      let r = o(n);
      (r == null ? void 0 : r.top) && (t = Math.max(r == null ? void 0 : r.top, t)), (r == null ? void 0 : r.bottom) && (i = Math.max(r == null ? void 0 : r.bottom, i));
    }
    s = n.scrollDOM.clientHeight - t - i;
  } else
    s = (n.dom.ownerDocument.defaultView || window).innerHeight;
  return { marginTop: t, marginBottom: i, selfScroll: e, height: Math.max(n.defaultLineHeight, s - 5) };
}
function wf(n, e) {
  let t = vf(n), { state: i } = n, s = Fi(i.selection, (r) => r.empty ? n.moveVertically(r, e, t.height) : Xs(r, e));
  if (s.eq(i.selection))
    return false;
  let o;
  if (t.selfScroll) {
    let r = n.coordsAtPos(i.selection.main.head), l = n.scrollDOM.getBoundingClientRect(), a = l.top + t.marginTop, h = l.bottom - t.marginBottom;
    r && r.top > a && r.bottom < h && (o = I.scrollIntoView(s.main.head, { y: "start", yMargin: r.top - a }));
  }
  return n.dispatch(xt(i, s), { effects: o }), true;
}
const Ia = (n) => wf(n, false), Sr = (n) => wf(n, true);
function Yt(n, e, t) {
  let i = n.lineBlockAt(e.head), s = n.moveToLineBoundary(e, t);
  if (s.head == e.head && s.head != (t ? i.to : i.from) && (s = n.moveToLineBoundary(e, t, false)), !t && s.head == i.from && i.length) {
    let o = /^\s*/.exec(n.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    o && e.head != i.from + o && (s = k.cursor(i.from + o));
  }
  return s;
}
const Q0 = (n) => tt(n, (e) => Yt(n, e, true)), Z0 = (n) => tt(n, (e) => Yt(n, e, false)), eb = (n) => tt(n, (e) => Yt(n, e, !Ae(n))), tb = (n) => tt(n, (e) => Yt(n, e, Ae(n))), ib = (n) => tt(n, (e) => k.cursor(n.lineBlockAt(e.head).from, 1)), nb = (n) => tt(n, (e) => k.cursor(n.lineBlockAt(e.head).to, -1));
function sb(n, e, t) {
  let i = false, s = Fi(n.selection, (o) => {
    let r = dt(n, o.head, -1) || dt(n, o.head, 1) || o.head > 0 && dt(n, o.head - 1, 1) || o.head < n.doc.length && dt(n, o.head + 1, -1);
    if (!r || !r.end)
      return o;
    i = true;
    let l = r.start.from == o.head ? r.end.to : r.end.from;
    return t ? k.range(o.anchor, l) : k.cursor(l);
  });
  return i ? (e(xt(n, s)), true) : false;
}
const ob = ({ state: n, dispatch: e }) => sb(n, e, false);
function Xe(n, e) {
  let t = Fi(n.state.selection, (i) => {
    let s = e(i);
    return k.range(i.anchor, s.head, s.goalColumn, s.bidiLevel || void 0);
  });
  return t.eq(n.state.selection) ? false : (n.dispatch(xt(n.state, t)), true);
}
function xf(n, e) {
  return Xe(n, (t) => n.moveByChar(t, e));
}
const kf = (n) => xf(n, !Ae(n)), _f = (n) => xf(n, Ae(n));
function Sf(n, e) {
  return Xe(n, (t) => n.moveByGroup(t, e));
}
const rb = (n) => Sf(n, !Ae(n)), lb = (n) => Sf(n, Ae(n)), ab = (n) => Xe(n, (e) => Qs(n.state, e, !Ae(n))), hb = (n) => Xe(n, (e) => Qs(n.state, e, Ae(n)));
function Cf(n, e) {
  return Xe(n, (t) => n.moveVertically(t, e));
}
const Af = (n) => Cf(n, false), Mf = (n) => Cf(n, true);
function Df(n, e) {
  return Xe(n, (t) => n.moveVertically(t, e, vf(n).height));
}
const Na = (n) => Df(n, false), Va = (n) => Df(n, true), cb = (n) => Xe(n, (e) => Yt(n, e, true)), fb = (n) => Xe(n, (e) => Yt(n, e, false)), ub = (n) => Xe(n, (e) => Yt(n, e, !Ae(n))), db = (n) => Xe(n, (e) => Yt(n, e, Ae(n))), pb = (n) => Xe(n, (e) => k.cursor(n.lineBlockAt(e.head).from)), mb = (n) => Xe(n, (e) => k.cursor(n.lineBlockAt(e.head).to)), $a = ({ state: n, dispatch: e }) => (e(xt(n, { anchor: 0 })), true), Fa = ({ state: n, dispatch: e }) => (e(xt(n, { anchor: n.doc.length })), true), za = ({ state: n, dispatch: e }) => (e(xt(n, { anchor: n.selection.main.anchor, head: 0 })), true), Ha = ({ state: n, dispatch: e }) => (e(xt(n, { anchor: n.selection.main.anchor, head: n.doc.length })), true), gb = ({ state: n, dispatch: e }) => (e(n.update({ selection: { anchor: 0, head: n.doc.length }, userEvent: "select" })), true), bb = ({ state: n, dispatch: e }) => {
  let t = Zs(n).map(({ from: i, to: s }) => k.range(i, Math.min(s + 1, n.doc.length)));
  return e(n.update({ selection: k.create(t), userEvent: "select" })), true;
}, yb = ({ state: n, dispatch: e }) => {
  let t = Fi(n.selection, (i) => {
    let s = Ce(n), o = s.resolveStack(i.from, 1);
    if (i.empty) {
      let r = s.resolveStack(i.from, -1);
      r.node.from >= o.node.from && r.node.to <= o.node.to && (o = r);
    }
    for (let r = o; r; r = r.next) {
      let { node: l } = r;
      if ((l.from < i.from && l.to >= i.to || l.to > i.to && l.from <= i.from) && r.next)
        return k.range(l.to, l.from);
    }
    return i;
  });
  return t.eq(n.selection) ? false : (e(xt(n, t)), true);
}, vb = ({ state: n, dispatch: e }) => {
  let t = n.selection, i = null;
  return t.ranges.length > 1 ? i = k.create([t.main]) : t.main.empty || (i = k.create([k.cursor(t.main.head)])), i ? (e(xt(n, i)), true) : false;
};
function In(n, e) {
  if (n.state.readOnly)
    return false;
  let t = "delete.selection", { state: i } = n, s = i.changeByRange((o) => {
    let { from: r, to: l } = o;
    if (r == l) {
      let a = e(o);
      a < r ? (t = "delete.backward", a = ns(n, a, false)) : a > r && (t = "delete.forward", a = ns(n, a, true)), r = Math.min(r, a), l = Math.max(l, a);
    } else
      r = ns(n, r, false), l = ns(n, l, true);
    return r == l ? { range: o } : { changes: { from: r, to: l }, range: k.cursor(r, r < o.head ? -1 : 1) };
  });
  return s.changes.empty ? false : (n.dispatch(i.update(s, { scrollIntoView: true, userEvent: t, effects: t == "delete.selection" ? I.announce.of(i.phrase("Selection deleted")) : void 0 })), true);
}
function ns(n, e, t) {
  if (n instanceof I)
    for (let i of n.state.facet(I.atomicRanges).map((s) => s(n)))
      i.between(e, e, (s, o) => {
        s < e && o > e && (e = t ? o : s);
      });
  return e;
}
const Tf = (n, e, t) => In(n, (i) => {
  let s = i.from, { state: o } = n, r = o.doc.lineAt(s), l, a;
  if (t && !e && s > r.from && s < r.from + 200 && !/[^ \t]/.test(l = r.text.slice(0, s - r.from))) {
    if (l[l.length - 1] == "	")
      return s - 1;
    let h = $i(l, o.tabSize), c = h % Es(o) || Es(o);
    for (let f = 0; f < c && l[l.length - 1 - f] == " "; f++)
      s--;
    a = s;
  } else
    a = xe(r.text, s - r.from, e, e) + r.from, a == s && r.number != (e ? o.doc.lines : 1) ? a += e ? 1 : -1 : !e && /[\ufe00-\ufe0f]/.test(r.text.slice(a - r.from, s - r.from)) && (a = xe(r.text, a - r.from, false, false) + r.from);
  return a;
}), Cr = (n) => Tf(n, false, true), Of = (n) => Tf(n, true, false), Ef = (n, e) => In(n, (t) => {
  let i = t.head, { state: s } = n, o = s.doc.lineAt(i), r = s.charCategorizer(i);
  for (let l = null; ; ) {
    if (i == (e ? o.to : o.from)) {
      i == t.head && o.number != (e ? s.doc.lines : 1) && (i += e ? 1 : -1);
      break;
    }
    let a = xe(o.text, i - o.from, e) + o.from, h = o.text.slice(Math.min(i, a) - o.from, Math.max(i, a) - o.from), c = r(h);
    if (l != null && c != l)
      break;
    (h != " " || i != t.head) && (l = c), i = a;
  }
  return i;
}), Bf = (n) => Ef(n, false), wb = (n) => Ef(n, true), xb = (n) => In(n, (e) => {
  let t = n.lineBlockAt(e.head).to;
  return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1);
}), kb = (n) => In(n, (e) => {
  let t = n.moveToLineBoundary(e, false).head;
  return e.head > t ? t : Math.max(0, e.head - 1);
}), _b = (n) => In(n, (e) => {
  let t = n.moveToLineBoundary(e, true).head;
  return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1);
}), Sb = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return false;
  let t = n.changeByRange((i) => ({ changes: { from: i.from, to: i.to, insert: Q.of(["", ""]) }, range: k.cursor(i.from) }));
  return e(n.update(t, { scrollIntoView: true, userEvent: "input" })), true;
}, Cb = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return false;
  let t = n.changeByRange((i) => {
    if (!i.empty || i.from == 0 || i.from == n.doc.length)
      return { range: i };
    let s = i.from, o = n.doc.lineAt(s), r = s == o.from ? s - 1 : xe(o.text, s - o.from, false) + o.from, l = s == o.to ? s + 1 : xe(o.text, s - o.from, true) + o.from;
    return { changes: { from: r, to: l, insert: n.doc.slice(s, l).append(n.doc.slice(r, s)) }, range: k.cursor(l) };
  });
  return t.changes.empty ? false : (e(n.update(t, { scrollIntoView: true, userEvent: "move.character" })), true);
};
function Zs(n) {
  let e = [], t = -1;
  for (let i of n.selection.ranges) {
    let s = n.doc.lineAt(i.from), o = n.doc.lineAt(i.to);
    if (!i.empty && i.to == o.from && (o = n.doc.lineAt(i.to - 1)), t >= s.number) {
      let r = e[e.length - 1];
      r.to = o.to, r.ranges.push(i);
    } else
      e.push({ from: s.from, to: o.to, ranges: [i] });
    t = o.number + 1;
  }
  return e;
}
function Pf(n, e, t) {
  if (n.readOnly)
    return false;
  let i = [], s = [];
  for (let o of Zs(n)) {
    if (t ? o.to == n.doc.length : o.from == 0)
      continue;
    let r = n.doc.lineAt(t ? o.to + 1 : o.from - 1), l = r.length + 1;
    if (t) {
      i.push({ from: o.to, to: r.to }, { from: o.from, insert: r.text + n.lineBreak });
      for (let a of o.ranges)
        s.push(k.range(Math.min(n.doc.length, a.anchor + l), Math.min(n.doc.length, a.head + l)));
    } else {
      i.push({ from: r.from, to: o.from }, { from: o.to, insert: n.lineBreak + r.text });
      for (let a of o.ranges)
        s.push(k.range(a.anchor - l, a.head - l));
    }
  }
  return i.length ? (e(n.update({ changes: i, scrollIntoView: true, selection: k.create(s, n.selection.mainIndex), userEvent: "move.line" })), true) : false;
}
const Ab = ({ state: n, dispatch: e }) => Pf(n, e, false), Mb = ({ state: n, dispatch: e }) => Pf(n, e, true);
function Rf(n, e, t) {
  if (n.readOnly)
    return false;
  let i = [];
  for (let s of Zs(n))
    t ? i.push({ from: s.from, insert: n.doc.slice(s.from, s.to) + n.lineBreak }) : i.push({ from: s.to, insert: n.lineBreak + n.doc.slice(s.from, s.to) });
  return e(n.update({ changes: i, scrollIntoView: true, userEvent: "input.copyline" })), true;
}
const Db = ({ state: n, dispatch: e }) => Rf(n, e, false), Tb = ({ state: n, dispatch: e }) => Rf(n, e, true), Ob = (n) => {
  if (n.state.readOnly)
    return false;
  let { state: e } = n, t = e.changes(Zs(e).map(({ from: s, to: o }) => (s > 0 ? s-- : o < e.doc.length && o++, { from: s, to: o }))), i = Fi(e.selection, (s) => {
    let o;
    if (n.lineWrapping) {
      let r = n.lineBlockAt(s.head), l = n.coordsAtPos(s.head, s.assoc || 1);
      l && (o = r.bottom + n.documentTop - l.bottom + n.defaultLineHeight / 2);
    }
    return n.moveVertically(s, true, o);
  }).map(t);
  return n.dispatch({ changes: t, selection: i, scrollIntoView: true, userEvent: "delete.line" }), true;
};
function Eb(n, e) {
  if (/\(\)|\[\]|\{\}/.test(n.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let t = Ce(n).resolveInner(e), i = t.childBefore(e), s = t.childAfter(e), o;
  return i && s && i.to <= e && s.from >= e && (o = i.type.prop(Y.closedBy)) && o.indexOf(s.name) > -1 && n.doc.lineAt(i.to).from == n.doc.lineAt(s.from).from && !/\S/.test(n.sliceDoc(i.to, s.from)) ? { from: i.to, to: s.from } : null;
}
const Wa = Lf(false), Bb = Lf(true);
function Lf(n) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly)
      return false;
    let i = e.changeByRange((s) => {
      let { from: o, to: r } = s, l = e.doc.lineAt(o), a = !n && o == r && Eb(e, o);
      n && (o = r = (r <= l.to ? l : e.doc.lineAt(r)).to);
      let h = new Ks(e, { simulateBreak: o, simulateDoubleBreak: !!a }), c = Zr(h, o);
      for (c == null && (c = $i(/^\s*/.exec(e.doc.lineAt(o).text)[0], e.tabSize)); r < l.to && /\s/.test(l.text[r - l.from]); )
        r++;
      a ? { from: o, to: r } = a : o > l.from && o < l.from + 100 && !/\S/.test(l.text.slice(0, o)) && (o = l.from);
      let f = ["", wn(e, c)];
      return a && f.push(wn(e, h.lineIndent(l.from, -1))), { changes: { from: o, to: r, insert: Q.of(f) }, range: k.cursor(o + 1 + f[1].length) };
    });
    return t(e.update(i, { scrollIntoView: true, userEvent: "input" })), true;
  };
}
function sl(n, e) {
  let t = -1;
  return n.changeByRange((i) => {
    let s = [];
    for (let r = i.from; r <= i.to; ) {
      let l = n.doc.lineAt(r);
      l.number > t && (i.empty || i.to > l.from) && (e(l, s, i), t = l.number), r = l.to + 1;
    }
    let o = n.changes(s);
    return { changes: s, range: k.range(o.mapPos(i.anchor, 1), o.mapPos(i.head, 1)) };
  });
}
const Pb = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return false;
  let t = /* @__PURE__ */ Object.create(null), i = new Ks(n, { overrideIndentation: (o) => {
    let r = t[o];
    return r ?? -1;
  } }), s = sl(n, (o, r, l) => {
    let a = Zr(i, o.from);
    if (a == null)
      return;
    /\S/.test(o.text) || (a = 0);
    let h = /^\s*/.exec(o.text)[0], c = wn(n, a);
    (h != c || l.from < o.from + h.length) && (t[o.from] = a, r.push({ from: o.from, to: o.from + h.length, insert: c }));
  });
  return s.changes.empty || e(n.update(s, { userEvent: "indent" })), true;
}, If = ({ state: n, dispatch: e }) => n.readOnly ? false : (e(n.update(sl(n, (t, i) => {
  i.push({ from: t.from, insert: n.facet(js) });
}), { userEvent: "input.indent" })), true), Nf = ({ state: n, dispatch: e }) => n.readOnly ? false : (e(n.update(sl(n, (t, i) => {
  let s = /^\s*/.exec(t.text)[0];
  if (!s)
    return;
  let o = $i(s, n.tabSize), r = 0, l = wn(n, Math.max(0, o - Es(n)));
  for (; r < s.length && r < l.length && s.charCodeAt(r) == l.charCodeAt(r); )
    r++;
  i.push({ from: t.from + r, to: t.from + s.length, insert: l.slice(r) });
}), { userEvent: "delete.dedent" })), true), Rb = (n) => (n.setTabFocusMode(), true), Lb = [{ key: "Ctrl-b", run: df, shift: kf, preventDefault: true }, { key: "Ctrl-f", run: pf, shift: _f }, { key: "Ctrl-p", run: bf, shift: Af }, { key: "Ctrl-n", run: yf, shift: Mf }, { key: "Ctrl-a", run: ib, shift: pb }, { key: "Ctrl-e", run: nb, shift: mb }, { key: "Ctrl-d", run: Of }, { key: "Ctrl-h", run: Cr }, { key: "Ctrl-k", run: xb }, { key: "Ctrl-Alt-h", run: Bf }, { key: "Ctrl-o", run: Sb }, { key: "Ctrl-t", run: Cb }, { key: "Ctrl-v", run: Sr }], Ib = [{ key: "ArrowLeft", run: df, shift: kf, preventDefault: true }, { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: K0, shift: rb, preventDefault: true }, { mac: "Cmd-ArrowLeft", run: eb, shift: ub, preventDefault: true }, { key: "ArrowRight", run: pf, shift: _f, preventDefault: true }, { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: G0, shift: lb, preventDefault: true }, { mac: "Cmd-ArrowRight", run: tb, shift: db, preventDefault: true }, { key: "ArrowUp", run: bf, shift: Af, preventDefault: true }, { mac: "Cmd-ArrowUp", run: $a, shift: za }, { mac: "Ctrl-ArrowUp", run: Ia, shift: Na }, { key: "ArrowDown", run: yf, shift: Mf, preventDefault: true }, { mac: "Cmd-ArrowDown", run: Fa, shift: Ha }, { mac: "Ctrl-ArrowDown", run: Sr, shift: Va }, { key: "PageUp", run: Ia, shift: Na }, { key: "PageDown", run: Sr, shift: Va }, { key: "Home", run: Z0, shift: fb, preventDefault: true }, { key: "Mod-Home", run: $a, shift: za }, { key: "End", run: Q0, shift: cb, preventDefault: true }, { key: "Mod-End", run: Fa, shift: Ha }, { key: "Enter", run: Wa, shift: Wa }, { key: "Mod-a", run: gb }, { key: "Backspace", run: Cr, shift: Cr }, { key: "Delete", run: Of }, { key: "Mod-Backspace", mac: "Alt-Backspace", run: Bf }, { key: "Mod-Delete", mac: "Alt-Delete", run: wb }, { mac: "Mod-Backspace", run: kb }, { mac: "Mod-Delete", run: _b }].concat(Lb.map((n) => ({ mac: n.key, run: n.run, shift: n.shift }))), Nb = [{ key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: J0, shift: ab }, { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: X0, shift: hb }, { key: "Alt-ArrowUp", run: Ab }, { key: "Shift-Alt-ArrowUp", run: Db }, { key: "Alt-ArrowDown", run: Mb }, { key: "Shift-Alt-ArrowDown", run: Tb }, { key: "Escape", run: vb }, { key: "Mod-Enter", run: Bb }, { key: "Alt-l", mac: "Ctrl-l", run: bb }, { key: "Mod-i", run: yb, preventDefault: true }, { key: "Mod-[", run: Nf }, { key: "Mod-]", run: If }, { key: "Mod-Alt-\\", run: Pb }, { key: "Shift-Mod-k", run: Ob }, { key: "Shift-Mod-\\", run: ob }, { key: "Mod-/", run: D0 }, { key: "Alt-A", run: O0 }, { key: "Ctrl-m", mac: "Shift-Alt-m", run: Rb }].concat(Ib), Vb = { key: "Tab", run: If, shift: Nf };
function te() {
  var n = arguments[0];
  typeof n == "string" && (n = document.createElement(n));
  var e = 1, t = arguments[1];
  if (t && typeof t == "object" && t.nodeType == null && !Array.isArray(t)) {
    for (var i in t)
      if (Object.prototype.hasOwnProperty.call(t, i)) {
        var s = t[i];
        typeof s == "string" ? n.setAttribute(i, s) : s != null && (n[i] = s);
      }
    e++;
  }
  for (; e < arguments.length; e++)
    Vf(n, arguments[e]);
  return n;
}
function Vf(n, e) {
  if (typeof e == "string")
    n.appendChild(document.createTextNode(e));
  else if (e != null)
    if (e.nodeType != null)
      n.appendChild(e);
    else if (Array.isArray(e))
      for (var t = 0; t < e.length; t++)
        Vf(n, e[t]);
    else
      throw new RangeError("Unsupported child node: " + e);
}
const qa = typeof String.prototype.normalize == "function" ? (n) => n.normalize("NFKD") : (n) => n;
class Pi {
  constructor(e, t, i = 0, s = e.length, o, r) {
    this.test = r, this.value = { from: 0, to: 0 }, this.done = false, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(i, s), this.bufferStart = i, this.normalize = o ? (l) => o(qa(l)) : qa, this.query = this.normalize(t);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done)
        return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return Be(this.buffer, this.bufferPos);
  }
  next() {
    for (; this.matches.length; )
      this.matches.pop();
    return this.nextOverlapping();
  }
  nextOverlapping() {
    for (; ; ) {
      let e = this.peek();
      if (e < 0)
        return this.done = true, this;
      let t = Lr(e), i = this.bufferStart + this.bufferPos;
      this.bufferPos += ct(e);
      let s = this.normalize(t);
      if (s.length)
        for (let o = 0, r = i; ; o++) {
          let l = s.charCodeAt(o), a = this.match(l, r, this.bufferPos + this.bufferStart);
          if (o == s.length - 1) {
            if (a)
              return this.value = a, this;
            break;
          }
          r == i && o < t.length && t.charCodeAt(o) == l && r++;
        }
    }
  }
  match(e, t, i) {
    let s = null;
    for (let o = 0; o < this.matches.length; o += 2) {
      let r = this.matches[o], l = false;
      this.query.charCodeAt(r) == e && (r == this.query.length - 1 ? s = { from: this.matches[o + 1], to: i } : (this.matches[o]++, l = true)), l || (this.matches.splice(o, 2), o -= 2);
    }
    return this.query.charCodeAt(0) == e && (this.query.length == 1 ? s = { from: t, to: i } : this.matches.push(1, t)), s && this.test && !this.test(s.from, s.to, this.buffer, this.bufferStart) && (s = null), s;
  }
}
typeof Symbol < "u" && (Pi.prototype[Symbol.iterator] = function() {
  return this;
});
const $f = { from: -1, to: -1, match: /.*/.exec("") }, ol = "gm" + (/x/.unicode == null ? "" : "u");
class Ff {
  constructor(e, t, i, s = 0, o = e.length) {
    if (this.text = e, this.to = o, this.curLine = "", this.done = false, this.value = $f, /\\[sWDnr]|\n|\r|\[\^/.test(t))
      return new zf(e, t, i, s, o);
    this.re = new RegExp(t, ol + ((i == null ? void 0 : i.ignoreCase) ? "i" : "")), this.test = i == null ? void 0 : i.test, this.iter = e.iter();
    let r = e.lineAt(s);
    this.curLineStart = r.from, this.matchPos = Ls(e, s), this.getLine(this.curLineStart);
  }
  getLine(e) {
    this.iter.next(e), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
  }
  nextLine() {
    this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
  }
  next() {
    for (let e = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = e;
      let t = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (t) {
        let i = this.curLineStart + t.index, s = i + t[0].length;
        if (this.matchPos = Ls(this.text, s + (i == s ? 1 : 0)), i == this.curLineStart + this.curLine.length && this.nextLine(), (i < s || i > this.value.to) && (!this.test || this.test(i, s, t)))
          return this.value = { from: i, to: s, match: t }, this;
        e = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to)
        this.nextLine(), e = 0;
      else
        return this.done = true, this;
    }
  }
}
const Ao = /* @__PURE__ */ new WeakMap();
class Ci {
  constructor(e, t) {
    this.from = e, this.text = t;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, t, i) {
    let s = Ao.get(e);
    if (!s || s.from >= i || s.to <= t) {
      let l = new Ci(t, e.sliceString(t, i));
      return Ao.set(e, l), l;
    }
    if (s.from == t && s.to == i)
      return s;
    let { text: o, from: r } = s;
    return r > t && (o = e.sliceString(t, r) + o, r = t), s.to < i && (o += e.sliceString(s.to, i)), Ao.set(e, new Ci(r, o)), new Ci(t, o.slice(t - r, i - r));
  }
}
class zf {
  constructor(e, t, i, s, o) {
    this.text = e, this.to = o, this.done = false, this.value = $f, this.matchPos = Ls(e, s), this.re = new RegExp(t, ol + ((i == null ? void 0 : i.ignoreCase) ? "i" : "")), this.test = i == null ? void 0 : i.test, this.flat = Ci.get(e, s, this.chunkEnd(s + 5e3));
  }
  chunkEnd(e) {
    return e >= this.to ? this.to : this.text.lineAt(e).to;
  }
  next() {
    for (; ; ) {
      let e = this.re.lastIndex = this.matchPos - this.flat.from, t = this.re.exec(this.flat.text);
      if (t && !t[0] && t.index == e && (this.re.lastIndex = e + 1, t = this.re.exec(this.flat.text)), t) {
        let i = this.flat.from + t.index, s = i + t[0].length;
        if ((this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) && (!this.test || this.test(i, s, t)))
          return this.value = { from: i, to: s, match: t }, this.matchPos = Ls(this.text, s + (i == s ? 1 : 0)), this;
      }
      if (this.flat.to == this.to)
        return this.done = true, this;
      this.flat = Ci.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (Ff.prototype[Symbol.iterator] = zf.prototype[Symbol.iterator] = function() {
  return this;
});
function $b(n) {
  try {
    return new RegExp(n, ol), true;
  } catch {
    return false;
  }
}
function Ls(n, e) {
  if (e >= n.length)
    return e;
  let t = n.lineAt(e), i;
  for (; e < t.to && (i = t.text.charCodeAt(e - t.from)) >= 56320 && i < 57344; )
    e++;
  return e;
}
function Ar(n) {
  let e = String(n.state.doc.lineAt(n.state.selection.main.head).number), t = te("input", { class: "cm-textfield", name: "line", value: e }), i = te("form", { class: "cm-gotoLine", onkeydown: (o) => {
    o.keyCode == 27 ? (o.preventDefault(), n.dispatch({ effects: an.of(false) }), n.focus()) : o.keyCode == 13 && (o.preventDefault(), s());
  }, onsubmit: (o) => {
    o.preventDefault(), s();
  } }, te("label", n.state.phrase("Go to line"), ": ", t), " ", te("button", { class: "cm-button", type: "submit" }, n.state.phrase("go")), te("button", { name: "close", onclick: () => {
    n.dispatch({ effects: an.of(false) }), n.focus();
  }, "aria-label": n.state.phrase("close"), type: "button" }, ["\xD7"]));
  function s() {
    let o = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(t.value);
    if (!o)
      return;
    let { state: r } = n, l = r.doc.lineAt(r.selection.main.head), [, a, h, c, f] = o, u = c ? +c.slice(1) : 0, d = h ? +h : l.number;
    if (h && f) {
      let m = d / 100;
      a && (m = m * (a == "-" ? -1 : 1) + l.number / r.doc.lines), d = Math.round(r.doc.lines * m);
    } else
      h && a && (d = d * (a == "-" ? -1 : 1) + l.number);
    let p = r.doc.line(Math.max(1, Math.min(r.doc.lines, d))), g = k.cursor(p.from + Math.max(0, Math.min(u, p.length)));
    n.dispatch({ effects: [an.of(false), I.scrollIntoView(g.from, { y: "center" })], selection: g }), n.focus();
  }
  return { dom: i };
}
const an = H.define(), Ua = ge.define({ create() {
  return true;
}, update(n, e) {
  for (let t of e.effects)
    t.is(an) && (n = t.value);
  return n;
}, provide: (n) => yn.from(n, (e) => e ? Ar : null) }), Fb = (n) => {
  let e = bn(n, Ar);
  if (!e) {
    let t = [an.of(true)];
    n.state.field(Ua, false) == null && t.push(H.appendConfig.of([Ua, zb])), n.dispatch({ effects: t }), e = bn(n, Ar);
  }
  return e && e.dom.querySelector("input").select(), true;
}, zb = I.baseTheme({ ".cm-panel.cm-gotoLine": { padding: "2px 6px 4px", position: "relative", "& label": { fontSize: "80%" }, "& [name=close]": { position: "absolute", top: "0", bottom: "0", right: "4px", backgroundColor: "inherit", border: "none", font: "inherit", padding: "0" } } }), Hb = { highlightWordAroundCursor: false, minSelectionLength: 1, maxMatches: 100, wholeWords: false }, Hf = $.define({ combine(n) {
  return vt(n, Hb, { highlightWordAroundCursor: (e, t) => e || t, minSelectionLength: Math.min, maxMatches: Math.min });
} });
function Wb(n) {
  let e = [Gb, Kb];
  return n && e.push(Hf.of(n)), e;
}
const qb = F.mark({ class: "cm-selectionMatch" }), Ub = F.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function ja(n, e, t, i) {
  return (t == 0 || n(e.sliceDoc(t - 1, t)) != re.Word) && (i == e.doc.length || n(e.sliceDoc(i, i + 1)) != re.Word);
}
function jb(n, e, t, i) {
  return n(e.sliceDoc(t, t + 1)) == re.Word && n(e.sliceDoc(i - 1, i)) == re.Word;
}
const Kb = ae.fromClass(class {
  constructor(n) {
    this.decorations = this.getDeco(n);
  }
  update(n) {
    (n.selectionSet || n.docChanged || n.viewportChanged) && (this.decorations = this.getDeco(n.view));
  }
  getDeco(n) {
    let e = n.state.facet(Hf), { state: t } = n, i = t.selection;
    if (i.ranges.length > 1)
      return F.none;
    let s = i.main, o, r = null;
    if (s.empty) {
      if (!e.highlightWordAroundCursor)
        return F.none;
      let a = t.wordAt(s.head);
      if (!a)
        return F.none;
      r = t.charCategorizer(s.head), o = t.sliceDoc(a.from, a.to);
    } else {
      let a = s.to - s.from;
      if (a < e.minSelectionLength || a > 200)
        return F.none;
      if (e.wholeWords) {
        if (o = t.sliceDoc(s.from, s.to), r = t.charCategorizer(s.head), !(ja(r, t, s.from, s.to) && jb(r, t, s.from, s.to)))
          return F.none;
      } else if (o = t.sliceDoc(s.from, s.to), !o)
        return F.none;
    }
    let l = [];
    for (let a of n.visibleRanges) {
      let h = new Pi(t.doc, o, a.from, a.to);
      for (; !h.next().done; ) {
        let { from: c, to: f } = h.value;
        if ((!r || ja(r, t, c, f)) && (s.empty && c <= s.from && f >= s.to ? l.push(Ub.range(c, f)) : (c >= s.to || f <= s.from) && l.push(qb.range(c, f)), l.length > e.maxMatches))
          return F.none;
      }
    }
    return F.set(l);
  }
}, { decorations: (n) => n.decorations }), Gb = I.baseTheme({ ".cm-selectionMatch": { backgroundColor: "#99ff7780" }, ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" } }), Yb = ({ state: n, dispatch: e }) => {
  let { selection: t } = n, i = k.create(t.ranges.map((s) => n.wordAt(s.head) || k.cursor(s.head)), t.mainIndex);
  return i.eq(t) ? false : (e(n.update({ selection: i })), true);
};
function Jb(n, e) {
  let { main: t, ranges: i } = n.selection, s = n.wordAt(t.head), o = s && s.from == t.from && s.to == t.to;
  for (let r = false, l = new Pi(n.doc, e, i[i.length - 1].to); ; )
    if (l.next(), l.done) {
      if (r)
        return null;
      l = new Pi(n.doc, e, 0, Math.max(0, i[i.length - 1].from - 1)), r = true;
    } else {
      if (r && i.some((a) => a.from == l.value.from))
        continue;
      if (o) {
        let a = n.wordAt(l.value.from);
        if (!a || a.from != l.value.from || a.to != l.value.to)
          continue;
      }
      return l.value;
    }
}
const Xb = ({ state: n, dispatch: e }) => {
  let { ranges: t } = n.selection;
  if (t.some((o) => o.from === o.to))
    return Yb({ state: n, dispatch: e });
  let i = n.sliceDoc(t[0].from, t[0].to);
  if (n.selection.ranges.some((o) => n.sliceDoc(o.from, o.to) != i))
    return false;
  let s = Jb(n, i);
  return s ? (e(n.update({ selection: n.selection.addRange(k.range(s.from, s.to), false), effects: I.scrollIntoView(s.to) })), true) : false;
}, zi = $.define({ combine(n) {
  return vt(n, { top: false, caseSensitive: false, literal: false, regexp: false, wholeWord: false, createPanel: (e) => new hy(e), scrollToMatch: (e) => I.scrollIntoView(e) });
} });
class Wf {
  constructor(e) {
    this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || $b(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord;
  }
  unquote(e) {
    return this.literal ? e : e.replace(/\\([nrt\\])/g, (t, i) => i == "n" ? `
` : i == "r" ? "\r" : i == "t" ? "	" : "\\");
  }
  eq(e) {
    return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord;
  }
  create() {
    return this.regexp ? new ty(this) : new Zb(this);
  }
  getCursor(e, t = 0, i) {
    let s = e.doc ? e : U.create({ doc: e });
    return i == null && (i = s.doc.length), this.regexp ? gi(this, s, t, i) : mi(this, s, t, i);
  }
}
class qf {
  constructor(e) {
    this.spec = e;
  }
}
function mi(n, e, t, i) {
  return new Pi(e.doc, n.unquoted, t, i, n.caseSensitive ? void 0 : (s) => s.toLowerCase(), n.wholeWord ? Qb(e.doc, e.charCategorizer(e.selection.main.head)) : void 0);
}
function Qb(n, e) {
  return (t, i, s, o) => ((o > t || o + s.length < i) && (o = Math.max(0, t - 2), s = n.sliceString(o, Math.min(n.length, i + 2))), (e(Is(s, t - o)) != re.Word || e(Ns(s, t - o)) != re.Word) && (e(Ns(s, i - o)) != re.Word || e(Is(s, i - o)) != re.Word));
}
class Zb extends qf {
  constructor(e) {
    super(e);
  }
  nextMatch(e, t, i) {
    let s = mi(this.spec, e, i, e.doc.length).nextOverlapping();
    if (s.done) {
      let o = Math.min(e.doc.length, t + this.spec.unquoted.length);
      s = mi(this.spec, e, 0, o).nextOverlapping();
    }
    return s.done || s.value.from == t && s.value.to == i ? null : s.value;
  }
  prevMatchInRange(e, t, i) {
    for (let s = i; ; ) {
      let o = Math.max(t, s - 1e4 - this.spec.unquoted.length), r = mi(this.spec, e, o, s), l = null;
      for (; !r.nextOverlapping().done; )
        l = r.value;
      if (l)
        return l;
      if (o == t)
        return null;
      s -= 1e4;
    }
  }
  prevMatch(e, t, i) {
    let s = this.prevMatchInRange(e, 0, t);
    return s || (s = this.prevMatchInRange(e, Math.max(0, i - this.spec.unquoted.length), e.doc.length)), s && (s.from != t || s.to != i) ? s : null;
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(e, t) {
    let i = mi(this.spec, e, 0, e.doc.length), s = [];
    for (; !i.next().done; ) {
      if (s.length >= t)
        return null;
      s.push(i.value);
    }
    return s;
  }
  highlight(e, t, i, s) {
    let o = mi(this.spec, e, Math.max(0, t - this.spec.unquoted.length), Math.min(i + this.spec.unquoted.length, e.doc.length));
    for (; !o.next().done; )
      s(o.value.from, o.value.to);
  }
}
function gi(n, e, t, i) {
  return new Ff(e.doc, n.search, { ignoreCase: !n.caseSensitive, test: n.wholeWord ? ey(e.charCategorizer(e.selection.main.head)) : void 0 }, t, i);
}
function Is(n, e) {
  return n.slice(xe(n, e, false), e);
}
function Ns(n, e) {
  return n.slice(e, xe(n, e));
}
function ey(n) {
  return (e, t, i) => !i[0].length || (n(Is(i.input, i.index)) != re.Word || n(Ns(i.input, i.index)) != re.Word) && (n(Ns(i.input, i.index + i[0].length)) != re.Word || n(Is(i.input, i.index + i[0].length)) != re.Word);
}
class ty extends qf {
  nextMatch(e, t, i) {
    let s = gi(this.spec, e, i, e.doc.length).next();
    return s.done && (s = gi(this.spec, e, 0, t).next()), s.done ? null : s.value;
  }
  prevMatchInRange(e, t, i) {
    for (let s = 1; ; s++) {
      let o = Math.max(t, i - s * 1e4), r = gi(this.spec, e, o, i), l = null;
      for (; !r.next().done; )
        l = r.value;
      if (l && (o == t || l.from > o + 10))
        return l;
      if (o == t)
        return null;
    }
  }
  prevMatch(e, t, i) {
    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, i, e.doc.length);
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, (t, i) => {
      if (i == "&")
        return e.match[0];
      if (i == "$")
        return "$";
      for (let s = i.length; s > 0; s--) {
        let o = +i.slice(0, s);
        if (o > 0 && o < e.match.length)
          return e.match[o] + i.slice(s);
      }
      return t;
    });
  }
  matchAll(e, t) {
    let i = gi(this.spec, e, 0, e.doc.length), s = [];
    for (; !i.next().done; ) {
      if (s.length >= t)
        return null;
      s.push(i.value);
    }
    return s;
  }
  highlight(e, t, i, s) {
    let o = gi(this.spec, e, Math.max(0, t - 250), Math.min(i + 250, e.doc.length));
    for (; !o.next().done; )
      s(o.value.from, o.value.to);
  }
}
const xn = H.define(), rl = H.define(), $t = ge.define({ create(n) {
  return new Mo(Mr(n).create(), null);
}, update(n, e) {
  for (let t of e.effects)
    t.is(xn) ? n = new Mo(t.value.create(), n.panel) : t.is(rl) && (n = new Mo(n.query, t.value ? ll : null));
  return n;
}, provide: (n) => yn.from(n, (e) => e.panel) });
class Mo {
  constructor(e, t) {
    this.query = e, this.panel = t;
  }
}
const iy = F.mark({ class: "cm-searchMatch" }), ny = F.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), sy = ae.fromClass(class {
  constructor(n) {
    this.view = n, this.decorations = this.highlight(n.state.field($t));
  }
  update(n) {
    let e = n.state.field($t);
    (e != n.startState.field($t) || n.docChanged || n.selectionSet || n.viewportChanged) && (this.decorations = this.highlight(e));
  }
  highlight({ query: n, panel: e }) {
    if (!e || !n.spec.valid)
      return F.none;
    let { view: t } = this, i = new Ct();
    for (let s = 0, o = t.visibleRanges, r = o.length; s < r; s++) {
      let { from: l, to: a } = o[s];
      for (; s < r - 1 && a > o[s + 1].from - 2 * 250; )
        a = o[++s].to;
      n.highlight(t.state, l, a, (h, c) => {
        let f = t.state.selection.ranges.some((u) => u.from == h && u.to == c);
        i.add(h, c, f ? ny : iy);
      });
    }
    return i.finish();
  }
}, { decorations: (n) => n.decorations });
function Nn(n) {
  return (e) => {
    let t = e.state.field($t, false);
    return t && t.query.spec.valid ? n(e, t) : Kf(e);
  };
}
const Vs = Nn((n, { query: e }) => {
  let { to: t } = n.state.selection.main, i = e.nextMatch(n.state, t, t);
  if (!i)
    return false;
  let s = k.single(i.from, i.to), o = n.state.facet(zi);
  return n.dispatch({ selection: s, effects: [al(n, i), o.scrollToMatch(s.main, n)], userEvent: "select.search" }), jf(n), true;
}), $s = Nn((n, { query: e }) => {
  let { state: t } = n, { from: i } = t.selection.main, s = e.prevMatch(t, i, i);
  if (!s)
    return false;
  let o = k.single(s.from, s.to), r = n.state.facet(zi);
  return n.dispatch({ selection: o, effects: [al(n, s), r.scrollToMatch(o.main, n)], userEvent: "select.search" }), jf(n), true;
}), oy = Nn((n, { query: e }) => {
  let t = e.matchAll(n.state, 1e3);
  return !t || !t.length ? false : (n.dispatch({ selection: k.create(t.map((i) => k.range(i.from, i.to))), userEvent: "select.search.matches" }), true);
}), ry = ({ state: n, dispatch: e }) => {
  let t = n.selection;
  if (t.ranges.length > 1 || t.main.empty)
    return false;
  let { from: i, to: s } = t.main, o = [], r = 0;
  for (let l = new Pi(n.doc, n.sliceDoc(i, s)); !l.next().done; ) {
    if (o.length > 1e3)
      return false;
    l.value.from == i && (r = o.length), o.push(k.range(l.value.from, l.value.to));
  }
  return e(n.update({ selection: k.create(o, r), userEvent: "select.search.matches" })), true;
}, Ka = Nn((n, { query: e }) => {
  let { state: t } = n, { from: i, to: s } = t.selection.main;
  if (t.readOnly)
    return false;
  let o = e.nextMatch(t, i, i);
  if (!o)
    return false;
  let r = o, l = [], a, h, c = [];
  if (r.from == i && r.to == s && (h = t.toText(e.getReplacement(r)), l.push({ from: r.from, to: r.to, insert: h }), r = e.nextMatch(t, r.from, r.to), c.push(I.announce.of(t.phrase("replaced match on line $", t.doc.lineAt(i).number) + "."))), r) {
    let f = l.length == 0 || l[0].from >= o.to ? 0 : o.to - o.from - h.length;
    a = k.single(r.from - f, r.to - f), c.push(al(n, r)), c.push(t.facet(zi).scrollToMatch(a.main, n));
  }
  return n.dispatch({ changes: l, selection: a, effects: c, userEvent: "input.replace" }), true;
}), ly = Nn((n, { query: e }) => {
  if (n.state.readOnly)
    return false;
  let t = e.matchAll(n.state, 1e9).map((s) => {
    let { from: o, to: r } = s;
    return { from: o, to: r, insert: e.getReplacement(s) };
  });
  if (!t.length)
    return false;
  let i = n.state.phrase("replaced $ matches", t.length) + ".";
  return n.dispatch({ changes: t, effects: I.announce.of(i), userEvent: "input.replace.all" }), true;
});
function ll(n) {
  return n.state.facet(zi).createPanel(n);
}
function Mr(n, e) {
  var t, i, s, o, r;
  let l = n.selection.main, a = l.empty || l.to > l.from + 100 ? "" : n.sliceDoc(l.from, l.to);
  if (e && !a)
    return e;
  let h = n.facet(zi);
  return new Wf({ search: ((t = e == null ? void 0 : e.literal) !== null && t !== void 0 ? t : h.literal) ? a : a.replace(/\n/g, "\\n"), caseSensitive: (i = e == null ? void 0 : e.caseSensitive) !== null && i !== void 0 ? i : h.caseSensitive, literal: (s = e == null ? void 0 : e.literal) !== null && s !== void 0 ? s : h.literal, regexp: (o = e == null ? void 0 : e.regexp) !== null && o !== void 0 ? o : h.regexp, wholeWord: (r = e == null ? void 0 : e.wholeWord) !== null && r !== void 0 ? r : h.wholeWord });
}
function Uf(n) {
  let e = bn(n, ll);
  return e && e.dom.querySelector("[main-field]");
}
function jf(n) {
  let e = Uf(n);
  e && e == n.root.activeElement && e.select();
}
const Kf = (n) => {
  let e = n.state.field($t, false);
  if (e && e.panel) {
    let t = Uf(n);
    if (t && t != n.root.activeElement) {
      let i = Mr(n.state, e.query.spec);
      i.valid && n.dispatch({ effects: xn.of(i) }), t.focus(), t.select();
    }
  } else
    n.dispatch({ effects: [rl.of(true), e ? xn.of(Mr(n.state, e.query.spec)) : H.appendConfig.of(fy)] });
  return true;
}, Gf = (n) => {
  let e = n.state.field($t, false);
  if (!e || !e.panel)
    return false;
  let t = bn(n, ll);
  return t && t.dom.contains(n.root.activeElement) && n.focus(), n.dispatch({ effects: rl.of(false) }), true;
}, ay = [{ key: "Mod-f", run: Kf, scope: "editor search-panel" }, { key: "F3", run: Vs, shift: $s, scope: "editor search-panel", preventDefault: true }, { key: "Mod-g", run: Vs, shift: $s, scope: "editor search-panel", preventDefault: true }, { key: "Escape", run: Gf, scope: "editor search-panel" }, { key: "Mod-Shift-l", run: ry }, { key: "Mod-Alt-g", run: Fb }, { key: "Mod-d", run: Xb, preventDefault: true }];
class hy {
  constructor(e) {
    this.view = e;
    let t = this.query = e.state.field($t).query.spec;
    this.commit = this.commit.bind(this), this.searchField = te("input", { value: t.search, placeholder: Ve(e, "Find"), "aria-label": Ve(e, "Find"), class: "cm-textfield", name: "search", form: "", "main-field": "true", onchange: this.commit, onkeyup: this.commit }), this.replaceField = te("input", { value: t.replace, placeholder: Ve(e, "Replace"), "aria-label": Ve(e, "Replace"), class: "cm-textfield", name: "replace", form: "", onchange: this.commit, onkeyup: this.commit }), this.caseField = te("input", { type: "checkbox", name: "case", form: "", checked: t.caseSensitive, onchange: this.commit }), this.reField = te("input", { type: "checkbox", name: "re", form: "", checked: t.regexp, onchange: this.commit }), this.wordField = te("input", { type: "checkbox", name: "word", form: "", checked: t.wholeWord, onchange: this.commit });
    function i(s, o, r) {
      return te("button", { class: "cm-button", name: s, onclick: o, type: "button" }, r);
    }
    this.dom = te("div", { onkeydown: (s) => this.keydown(s), class: "cm-search" }, [this.searchField, i("next", () => Vs(e), [Ve(e, "next")]), i("prev", () => $s(e), [Ve(e, "previous")]), i("select", () => oy(e), [Ve(e, "all")]), te("label", null, [this.caseField, Ve(e, "match case")]), te("label", null, [this.reField, Ve(e, "regexp")]), te("label", null, [this.wordField, Ve(e, "by word")]), ...e.state.readOnly ? [] : [te("br"), this.replaceField, i("replace", () => Ka(e), [Ve(e, "replace")]), i("replaceAll", () => ly(e), [Ve(e, "replace all")])], te("button", { name: "close", onclick: () => Gf(e), "aria-label": Ve(e, "close"), type: "button" }, ["\xD7"])]);
  }
  commit() {
    let e = new Wf({ search: this.searchField.value, caseSensitive: this.caseField.checked, regexp: this.reField.checked, wholeWord: this.wordField.checked, replace: this.replaceField.value });
    e.eq(this.query) || (this.query = e, this.view.dispatch({ effects: xn.of(e) }));
  }
  keydown(e) {
    gm(this.view, e, "search-panel") ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? $s : Vs)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), Ka(this.view));
  }
  update(e) {
    for (let t of e.transactions)
      for (let i of t.effects)
        i.is(xn) && !i.value.eq(this.query) && this.setQuery(i.value);
  }
  setQuery(e) {
    this.query = e, this.searchField.value = e.search, this.replaceField.value = e.replace, this.caseField.checked = e.caseSensitive, this.reField.checked = e.regexp, this.wordField.checked = e.wholeWord;
  }
  mount() {
    this.searchField.select();
  }
  get pos() {
    return 80;
  }
  get top() {
    return this.view.state.facet(zi).top;
  }
}
function Ve(n, e) {
  return n.state.phrase(e);
}
const ss = 30, os = /[\s\.,:;?!]/;
function al(n, { from: e, to: t }) {
  let i = n.state.doc.lineAt(e), s = n.state.doc.lineAt(t).to, o = Math.max(i.from, e - ss), r = Math.min(s, t + ss), l = n.state.sliceDoc(o, r);
  if (o != i.from) {
    for (let a = 0; a < ss; a++)
      if (!os.test(l[a + 1]) && os.test(l[a])) {
        l = l.slice(a);
        break;
      }
  }
  if (r != s) {
    for (let a = l.length - 1; a > l.length - ss; a--)
      if (!os.test(l[a - 1]) && os.test(l[a])) {
        l = l.slice(0, a);
        break;
      }
  }
  return I.announce.of(`${n.state.phrase("current match")}. ${l} ${n.state.phrase("on line")} ${i.number}.`);
}
const cy = I.baseTheme({ ".cm-panel.cm-search": { padding: "2px 6px 4px", position: "relative", "& [name=close]": { position: "absolute", top: "0", right: "4px", backgroundColor: "inherit", border: "none", font: "inherit", padding: 0, margin: 0 }, "& input, & button, & label": { margin: ".2em .6em .2em 0" }, "& input[type=checkbox]": { marginRight: ".2em" }, "& label": { fontSize: "80%", whiteSpace: "pre" } }, "&light .cm-searchMatch": { backgroundColor: "#ffff0054" }, "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" }, "&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" }, "&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" } }), fy = [$t, fi.low(sy), cy];
class Yf {
  constructor(e, t, i, s) {
    this.state = e, this.pos = t, this.explicit = i, this.view = s, this.abortListeners = [], this.abortOnDocChange = false;
  }
  tokenBefore(e) {
    let t = Ce(this.state).resolveInner(this.pos, -1);
    for (; t && e.indexOf(t.name) < 0; )
      t = t.parent;
    return t ? { from: t.from, to: this.pos, text: this.state.sliceDoc(t.from, this.pos), type: t.type } : null;
  }
  matchBefore(e) {
    let t = this.state.doc.lineAt(this.pos), i = Math.max(t.from, this.pos - 250), s = t.text.slice(i - t.from, this.pos - t.from), o = s.search(Jf(e, false));
    return o < 0 ? null : { from: i + o, to: this.pos, text: s.slice(o) };
  }
  get aborted() {
    return this.abortListeners == null;
  }
  addEventListener(e, t, i) {
    e == "abort" && this.abortListeners && (this.abortListeners.push(t), i && i.onDocChange && (this.abortOnDocChange = true));
  }
}
function Ga(n) {
  let e = Object.keys(n).join(""), t = /\w/.test(e);
  return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function uy(n) {
  let e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  for (let { label: s } of n) {
    e[s[0]] = true;
    for (let o = 1; o < s.length; o++)
      t[s[o]] = true;
  }
  let i = Ga(e) + Ga(t) + "*$";
  return [new RegExp("^" + i), new RegExp(i)];
}
function dy(n) {
  let e = n.map((s) => typeof s == "string" ? { label: s } : s), [t, i] = e.every((s) => /^\w+$/.test(s.label)) ? [/\w*$/, /\w+$/] : uy(e);
  return (s) => {
    let o = s.matchBefore(i);
    return o || s.explicit ? { from: o ? o.from : s.pos, options: e, validFor: t } : null;
  };
}
class Ya {
  constructor(e, t, i, s) {
    this.completion = e, this.source = t, this.match = i, this.score = s;
  }
}
function si(n) {
  return n.selection.main.from;
}
function Jf(n, e) {
  var t;
  let { source: i } = n, s = e && i[0] != "^", o = i[i.length - 1] != "$";
  return !s && !o ? n : new RegExp(`${s ? "^" : ""}(?:${i})${o ? "$" : ""}`, (t = n.flags) !== null && t !== void 0 ? t : n.ignoreCase ? "i" : "");
}
const Xf = Tt.define();
function py(n, e, t, i) {
  let { main: s } = n.selection, o = t - s.from, r = i - s.from;
  return Object.assign(Object.assign({}, n.changeByRange((l) => {
    if (l != s && t != i && n.sliceDoc(l.from + o, l.from + r) != n.sliceDoc(t, i))
      return { range: l };
    let a = n.toText(e);
    return { changes: { from: l.from + o, to: i == s.from ? l.to : l.from + r, insert: a }, range: k.cursor(l.from + o + a.length) };
  })), { scrollIntoView: true, userEvent: "input.complete" });
}
const Ja = /* @__PURE__ */ new WeakMap();
function my(n) {
  if (!Array.isArray(n))
    return n;
  let e = Ja.get(n);
  return e || Ja.set(n, e = dy(n)), e;
}
const Fs = H.define(), kn = H.define();
class gy {
  constructor(e) {
    this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let t = 0; t < e.length; ) {
      let i = Be(e, t), s = ct(i);
      this.chars.push(i);
      let o = e.slice(t, t + s), r = o.toUpperCase();
      this.folded.push(Be(r == o ? o.toLowerCase() : r, 0)), t += s;
    }
    this.astral = e.length != this.chars.length;
  }
  ret(e, t) {
    return this.score = e, this.matched = t, this;
  }
  match(e) {
    if (this.pattern.length == 0)
      return this.ret(-100, []);
    if (e.length < this.pattern.length)
      return null;
    let { chars: t, folded: i, any: s, precise: o, byWord: r } = this;
    if (t.length == 1) {
      let w = Be(e, 0), M = ct(w), S = M == e.length ? 0 : -100;
      if (w != t[0])
        if (w == i[0])
          S += -200;
        else
          return null;
      return this.ret(S, [0, M]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0)
      return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = t.length, h = 0;
    if (l < 0) {
      for (let w = 0, M = Math.min(e.length, 200); w < M && h < a; ) {
        let S = Be(e, w);
        (S == t[h] || S == i[h]) && (s[h++] = w), w += ct(S);
      }
      if (h < a)
        return null;
    }
    let c = 0, f = 0, u = false, d = 0, p = -1, g = -1, m = /[a-z]/.test(e), y = true;
    for (let w = 0, M = Math.min(e.length, 200), S = 0; w < M && f < a; ) {
      let _ = Be(e, w);
      l < 0 && (c < a && _ == t[c] && (o[c++] = w), d < a && (_ == t[d] || _ == i[d] ? (d == 0 && (p = w), g = w + 1, d++) : d = 0));
      let x, D = _ < 255 ? _ >= 48 && _ <= 57 || _ >= 97 && _ <= 122 ? 2 : _ >= 65 && _ <= 90 ? 1 : 0 : (x = Lr(_)) != x.toLowerCase() ? 1 : x != x.toUpperCase() ? 2 : 0;
      (!w || D == 1 && m || S == 0 && D != 0) && (t[f] == _ || i[f] == _ && (u = true) ? r[f++] = w : r.length && (y = false)), S = D, w += ct(_);
    }
    return f == a && r[0] == 0 && y ? this.result(-100 + (u ? -200 : 0), r, e) : d == a && p == 0 ? this.ret(-200 - e.length + (g == e.length ? 0 : -100), [0, g]) : l > -1 ? this.ret(-700 - e.length, [l, l + this.pattern.length]) : d == a ? this.ret(-200 + -700 - e.length, [p, g]) : f == a ? this.result(-100 + (u ? -200 : 0) + -700 + (y ? 0 : -1100), r, e) : t.length == 2 ? null : this.result((s[0] ? -700 : 0) + -200 + -1100, s, e);
  }
  result(e, t, i) {
    let s = [], o = 0;
    for (let r of t) {
      let l = r + (this.astral ? ct(Be(i, r)) : 1);
      o && s[o - 1] == r ? s[o - 1] = l : (s[o++] = r, s[o++] = l);
    }
    return this.ret(e - i.length, s);
  }
}
class by {
  constructor(e) {
    this.pattern = e, this.matched = [], this.score = 0, this.folded = e.toLowerCase();
  }
  match(e) {
    if (e.length < this.pattern.length)
      return null;
    let t = e.slice(0, this.pattern.length), i = t == this.pattern ? 0 : t.toLowerCase() == this.folded ? -200 : null;
    return i == null ? null : (this.matched = [0, t.length], this.score = i + (e.length == this.pattern.length ? 0 : -100), this);
  }
}
const me = $.define({ combine(n) {
  return vt(n, { activateOnTyping: true, activateOnCompletion: () => false, activateOnTypingDelay: 100, selectOnOpen: true, override: null, closeOnBlur: true, maxRenderedOptions: 100, defaultKeymap: true, tooltipClass: () => "", optionClass: () => "", aboveCursor: false, icons: true, addToOptions: [], positionInfo: yy, filterStrict: false, compareCompletions: (e, t) => e.label.localeCompare(t.label), interactionDelay: 75, updateSyncTime: 100 }, { defaultKeymap: (e, t) => e && t, closeOnBlur: (e, t) => e && t, icons: (e, t) => e && t, tooltipClass: (e, t) => (i) => Xa(e(i), t(i)), optionClass: (e, t) => (i) => Xa(e(i), t(i)), addToOptions: (e, t) => e.concat(t), filterStrict: (e, t) => e || t });
} });
function Xa(n, e) {
  return n ? e ? n + " " + e : n : e;
}
function yy(n, e, t, i, s, o) {
  let r = n.textDirection == oe.RTL, l = r, a = false, h = "top", c, f, u = e.left - s.left, d = s.right - e.right, p = i.right - i.left, g = i.bottom - i.top;
  if (l && u < Math.min(p, d) ? l = false : !l && d < Math.min(p, u) && (l = true), p <= (l ? u : d))
    c = Math.max(s.top, Math.min(t.top, s.bottom - g)) - e.top, f = Math.min(400, l ? u : d);
  else {
    a = true, f = Math.min(400, (r ? e.right : s.right - e.left) - 30);
    let w = s.bottom - e.bottom;
    w >= g || w > e.top ? c = t.bottom - e.top : (h = "bottom", c = e.bottom - t.top);
  }
  let m = (e.bottom - e.top) / o.offsetHeight, y = (e.right - e.left) / o.offsetWidth;
  return { style: `${h}: ${c / m}px; max-width: ${f / y}px`, class: "cm-completionInfo-" + (a ? r ? "left-narrow" : "right-narrow" : l ? "left" : "right") };
}
function vy(n) {
  let e = n.addToOptions.slice();
  return n.icons && e.push({ render(t) {
    let i = document.createElement("div");
    return i.classList.add("cm-completionIcon"), t.type && i.classList.add(...t.type.split(/\s+/g).map((s) => "cm-completionIcon-" + s)), i.setAttribute("aria-hidden", "true"), i;
  }, position: 20 }), e.push({ render(t, i, s, o) {
    let r = document.createElement("span");
    r.className = "cm-completionLabel";
    let l = t.displayLabel || t.label, a = 0;
    for (let h = 0; h < o.length; ) {
      let c = o[h++], f = o[h++];
      c > a && r.appendChild(document.createTextNode(l.slice(a, c)));
      let u = r.appendChild(document.createElement("span"));
      u.appendChild(document.createTextNode(l.slice(c, f))), u.className = "cm-completionMatchedText", a = f;
    }
    return a < l.length && r.appendChild(document.createTextNode(l.slice(a))), r;
  }, position: 50 }, { render(t) {
    if (!t.detail)
      return null;
    let i = document.createElement("span");
    return i.className = "cm-completionDetail", i.textContent = t.detail, i;
  }, position: 80 }), e.sort((t, i) => t.position - i.position).map((t) => t.render);
}
function Do(n, e, t) {
  if (n <= t)
    return { from: 0, to: n };
  if (e < 0 && (e = 0), e <= n >> 1) {
    let s = Math.floor(e / t);
    return { from: s * t, to: (s + 1) * t };
  }
  let i = Math.floor((n - e) / t);
  return { from: n - (i + 1) * t, to: n - i * t };
}
class wy {
  constructor(e, t, i) {
    this.view = e, this.stateField = t, this.applyCompletion = i, this.info = null, this.infoDestroy = null, this.placeInfoReq = { read: () => this.measureInfo(), write: (a) => this.placeInfo(a), key: this }, this.space = null, this.currentClass = "";
    let s = e.state.field(t), { options: o, selected: r } = s.open, l = e.state.facet(me);
    this.optionContent = vy(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = Do(o.length, r, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (a) => {
      let { options: h } = e.state.field(t).open;
      for (let c = a.target, f; c && c != this.dom; c = c.parentNode)
        if (c.nodeName == "LI" && (f = /-(\d+)$/.exec(c.id)) && +f[1] < h.length) {
          this.applyCompletion(e, h[+f[1]]), a.preventDefault();
          return;
        }
    }), this.dom.addEventListener("focusout", (a) => {
      let h = e.state.field(this.stateField, false);
      h && h.tooltip && e.state.facet(me).closeOnBlur && a.relatedTarget != e.contentDOM && e.dispatch({ effects: kn.of(null) });
    }), this.showOptions(o, s.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(e, t) {
    this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(e, t, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  update(e) {
    var t;
    let i = e.state.field(this.stateField), s = e.startState.field(this.stateField);
    if (this.updateTooltipClass(e.state), i != s) {
      let { options: o, selected: r, disabled: l } = i.open;
      (!s.open || s.open.options != o) && (this.range = Do(o.length, r, e.state.facet(me).maxRenderedOptions), this.showOptions(o, i.id)), this.updateSel(), l != ((t = s.open) === null || t === void 0 ? void 0 : t.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
    }
  }
  updateTooltipClass(e) {
    let t = this.tooltipClass(e);
    if (t != this.currentClass) {
      for (let i of this.currentClass.split(" "))
        i && this.dom.classList.remove(i);
      for (let i of t.split(" "))
        i && this.dom.classList.add(i);
      this.currentClass = t;
    }
  }
  positioned(e) {
    this.space = e, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let e = this.view.state.field(this.stateField), t = e.open;
    if ((t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = Do(t.options.length, t.selected, this.view.state.facet(me).maxRenderedOptions), this.showOptions(t.options, e.id)), this.updateSelectedOption(t.selected)) {
      this.destroyInfo();
      let { completion: i } = t.options[t.selected], { info: s } = i;
      if (!s)
        return;
      let o = typeof s == "string" ? document.createTextNode(s) : s(i);
      if (!o)
        return;
      "then" in o ? o.then((r) => {
        r && this.view.state.field(this.stateField, false) == e && this.addInfoPane(r, i);
      }).catch((r) => Le(this.view.state, r, "completion info")) : this.addInfoPane(o, i);
    }
  }
  addInfoPane(e, t) {
    this.destroyInfo();
    let i = this.info = document.createElement("div");
    if (i.className = "cm-tooltip cm-completionInfo", e.nodeType != null)
      i.appendChild(e), this.infoDestroy = null;
    else {
      let { dom: s, destroy: o } = e;
      i.appendChild(s), this.infoDestroy = o || null;
    }
    this.dom.appendChild(i), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    let t = null;
    for (let i = this.list.firstChild, s = this.range.from; i; i = i.nextSibling, s++)
      i.nodeName != "LI" || !i.id ? s-- : s == e ? i.hasAttribute("aria-selected") || (i.setAttribute("aria-selected", "true"), t = i) : i.hasAttribute("aria-selected") && i.removeAttribute("aria-selected");
    return t && ky(this.list, t), t;
  }
  measureInfo() {
    let e = this.dom.querySelector("[aria-selected]");
    if (!e || !this.info)
      return null;
    let t = this.dom.getBoundingClientRect(), i = this.info.getBoundingClientRect(), s = e.getBoundingClientRect(), o = this.space;
    if (!o) {
      let r = this.dom.ownerDocument.documentElement;
      o = { left: 0, top: 0, right: r.clientWidth, bottom: r.clientHeight };
    }
    return s.top > Math.min(o.bottom, t.bottom) - 10 || s.bottom < Math.max(o.top, t.top) + 10 ? null : this.view.state.facet(me).positionInfo(this.view, t, s, i, o, this.dom);
  }
  placeInfo(e) {
    this.info && (e ? (e.style && (this.info.style.cssText = e.style), this.info.className = "cm-tooltip cm-completionInfo " + (e.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(e, t, i) {
    const s = document.createElement("ul");
    s.id = t, s.setAttribute("role", "listbox"), s.setAttribute("aria-expanded", "true"), s.setAttribute("aria-label", this.view.state.phrase("Completions")), s.addEventListener("mousedown", (r) => {
      r.target == s && r.preventDefault();
    });
    let o = null;
    for (let r = i.from; r < i.to; r++) {
      let { completion: l, match: a } = e[r], { section: h } = l;
      if (h) {
        let u = typeof h == "string" ? h : h.name;
        if (u != o && (r > i.from || i.from == 0))
          if (o = u, typeof h != "string" && h.header)
            s.appendChild(h.header(h));
          else {
            let d = s.appendChild(document.createElement("completion-section"));
            d.textContent = u;
          }
      }
      const c = s.appendChild(document.createElement("li"));
      c.id = t + "-" + r, c.setAttribute("role", "option");
      let f = this.optionClass(l);
      f && (c.className = f);
      for (let u of this.optionContent) {
        let d = u(l, this.view.state, this.view, a);
        d && c.appendChild(d);
      }
    }
    return i.from && s.classList.add("cm-completionListIncompleteTop"), i.to < e.length && s.classList.add("cm-completionListIncompleteBottom"), s;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function xy(n, e) {
  return (t) => new wy(t, n, e);
}
function ky(n, e) {
  let t = n.getBoundingClientRect(), i = e.getBoundingClientRect(), s = t.height / n.offsetHeight;
  i.top < t.top ? n.scrollTop -= (t.top - i.top) / s : i.bottom > t.bottom && (n.scrollTop += (i.bottom - t.bottom) / s);
}
function Qa(n) {
  return (n.boost || 0) * 100 + (n.apply ? 10 : 0) + (n.info ? 5 : 0) + (n.type ? 1 : 0);
}
function _y(n, e) {
  let t = [], i = null, s = (h) => {
    t.push(h);
    let { section: c } = h.completion;
    if (c) {
      i || (i = []);
      let f = typeof c == "string" ? c : c.name;
      i.some((u) => u.name == f) || i.push(typeof c == "string" ? { name: f } : c);
    }
  }, o = e.facet(me);
  for (let h of n)
    if (h.hasResult()) {
      let c = h.result.getMatch;
      if (h.result.filter === false)
        for (let f of h.result.options)
          s(new Ya(f, h.source, c ? c(f) : [], 1e9 - t.length));
      else {
        let f = e.sliceDoc(h.from, h.to), u, d = o.filterStrict ? new by(f) : new gy(f);
        for (let p of h.result.options)
          if (u = d.match(p.label)) {
            let g = p.displayLabel ? c ? c(p, u.matched) : [] : u.matched;
            s(new Ya(p, h.source, g, u.score + (p.boost || 0)));
          }
      }
    }
  if (i) {
    let h = /* @__PURE__ */ Object.create(null), c = 0, f = (u, d) => {
      var p, g;
      return ((p = u.rank) !== null && p !== void 0 ? p : 1e9) - ((g = d.rank) !== null && g !== void 0 ? g : 1e9) || (u.name < d.name ? -1 : 1);
    };
    for (let u of i.sort(f))
      c -= 1e5, h[u.name] = c;
    for (let u of t) {
      let { section: d } = u.completion;
      d && (u.score += h[typeof d == "string" ? d : d.name]);
    }
  }
  let r = [], l = null, a = o.compareCompletions;
  for (let h of t.sort((c, f) => f.score - c.score || a(c.completion, f.completion))) {
    let c = h.completion;
    !l || l.label != c.label || l.detail != c.detail || l.type != null && c.type != null && l.type != c.type || l.apply != c.apply || l.boost != c.boost ? r.push(h) : Qa(h.completion) > Qa(l) && (r[r.length - 1] = h), l = h.completion;
  }
  return r;
}
class wi {
  constructor(e, t, i, s, o, r) {
    this.options = e, this.attrs = t, this.tooltip = i, this.timestamp = s, this.selected = o, this.disabled = r;
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length ? this : new wi(this.options, Za(t, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, t, i, s, o, r) {
    if (s && !r && e.some((h) => h.isPending))
      return s.setDisabled();
    let l = _y(e, t);
    if (!l.length)
      return s && e.some((h) => h.isPending) ? s.setDisabled() : null;
    let a = t.facet(me).selectOnOpen ? 0 : -1;
    if (s && s.selected != a && s.selected != -1) {
      let h = s.options[s.selected].completion;
      for (let c = 0; c < l.length; c++)
        if (l[c].completion == h) {
          a = c;
          break;
        }
    }
    return new wi(l, Za(i, a), { pos: e.reduce((h, c) => c.hasResult() ? Math.min(h, c.from) : h, 1e8), create: Ty, above: o.aboveCursor }, s ? s.timestamp : Date.now(), a, false);
  }
  map(e) {
    return new wi(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), { pos: e.mapPos(this.tooltip.pos) }), this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new wi(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, true);
  }
}
class zs {
  constructor(e, t, i) {
    this.active = e, this.id = t, this.open = i;
  }
  static start() {
    return new zs(My, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: t } = e, i = t.facet(me), o = (i.override || t.languageDataAt("autocomplete", si(t)).map(my)).map((a) => (this.active.find((c) => c.source == a) || new je(a, this.active.some((c) => c.state != 0) ? 1 : 0)).update(e, i));
    o.length == this.active.length && o.every((a, h) => a == this.active[h]) && (o = this.active);
    let r = this.open, l = e.effects.some((a) => a.is(hl));
    r && e.docChanged && (r = r.map(e.changes)), e.selection || o.some((a) => a.hasResult() && e.changes.touchesRange(a.from, a.to)) || !Sy(o, this.active) || l ? r = wi.build(o, t, this.id, r, i, l) : r && r.disabled && !o.some((a) => a.isPending) && (r = null), !r && o.every((a) => !a.isPending) && o.some((a) => a.hasResult()) && (o = o.map((a) => a.hasResult() ? new je(a.source, 0) : a));
    for (let a of e.effects)
      a.is(Zf) && (r = r && r.setSelected(a.value, this.id));
    return o == this.active && r == this.open ? this : new zs(o, this.id, r);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? Cy : Ay;
  }
}
function Sy(n, e) {
  if (n == e)
    return true;
  for (let t = 0, i = 0; ; ) {
    for (; t < n.length && !n[t].hasResult(); )
      t++;
    for (; i < e.length && !e[i].hasResult(); )
      i++;
    let s = t == n.length, o = i == e.length;
    if (s || o)
      return s == o;
    if (n[t++].result != e[i++].result)
      return false;
  }
}
const Cy = { "aria-autocomplete": "list" }, Ay = {};
function Za(n, e) {
  let t = { "aria-autocomplete": "list", "aria-haspopup": "listbox", "aria-controls": n };
  return e > -1 && (t["aria-activedescendant"] = n + "-" + e), t;
}
const My = [];
function Qf(n, e) {
  if (n.isUserEvent("input.complete")) {
    let i = n.annotation(Xf);
    if (i && e.activateOnCompletion(i))
      return 12;
  }
  let t = n.isUserEvent("input.type");
  return t && e.activateOnTyping ? 5 : t ? 1 : n.isUserEvent("delete.backward") ? 2 : n.selection ? 8 : n.docChanged ? 16 : 0;
}
class je {
  constructor(e, t, i = false) {
    this.source = e, this.state = t, this.explicit = i;
  }
  hasResult() {
    return false;
  }
  get isPending() {
    return this.state == 1;
  }
  update(e, t) {
    let i = Qf(e, t), s = this;
    (i & 8 || i & 16 && this.touches(e)) && (s = new je(s.source, 0)), i & 4 && s.state == 0 && (s = new je(this.source, 1)), s = s.updateFor(e, i);
    for (let o of e.effects)
      if (o.is(Fs))
        s = new je(s.source, 1, o.value);
      else if (o.is(kn))
        s = new je(s.source, 0);
      else if (o.is(hl))
        for (let r of o.value)
          r.source == s.source && (s = r);
    return s;
  }
  updateFor(e, t) {
    return this.map(e.changes);
  }
  map(e) {
    return this;
  }
  touches(e) {
    return e.changes.touchesRange(si(e.state));
  }
}
class Ai extends je {
  constructor(e, t, i, s, o, r) {
    super(e, 3, t), this.limit = i, this.result = s, this.from = o, this.to = r;
  }
  hasResult() {
    return true;
  }
  updateFor(e, t) {
    var i;
    if (!(t & 3))
      return this.map(e.changes);
    let s = this.result;
    s.map && !e.changes.empty && (s = s.map(s, e.changes));
    let o = e.changes.mapPos(this.from), r = e.changes.mapPos(this.to, 1), l = si(e.state);
    if (l > r || !s || t & 2 && (si(e.startState) == this.from || l < this.limit))
      return new je(this.source, t & 4 ? 1 : 0);
    let a = e.changes.mapPos(this.limit);
    return Dy(s.validFor, e.state, o, r) ? new Ai(this.source, this.explicit, a, s, o, r) : s.update && (s = s.update(s, o, r, new Yf(e.state, l, false))) ? new Ai(this.source, this.explicit, a, s, s.from, (i = s.to) !== null && i !== void 0 ? i : si(e.state)) : new je(this.source, 1, this.explicit);
  }
  map(e) {
    return e.empty ? this : (this.result.map ? this.result.map(this.result, e) : this.result) ? new Ai(this.source, this.explicit, e.mapPos(this.limit), this.result, e.mapPos(this.from), e.mapPos(this.to, 1)) : new je(this.source, 0);
  }
  touches(e) {
    return e.changes.touchesRange(this.from, this.to);
  }
}
function Dy(n, e, t, i) {
  if (!n)
    return false;
  let s = e.sliceDoc(t, i);
  return typeof n == "function" ? n(s, t, i, e) : Jf(n, true).test(s);
}
const hl = H.define({ map(n, e) {
  return n.map((t) => t.map(e));
} }), Zf = H.define(), Re = ge.define({ create() {
  return zs.start();
}, update(n, e) {
  return n.update(e);
}, provide: (n) => [qs.from(n, (e) => e.tooltip), I.contentAttributes.from(n, (e) => e.attrs)] });
function cl(n, e) {
  const t = e.completion.apply || e.completion.label;
  let i = n.state.field(Re).active.find((s) => s.source == e.source);
  return i instanceof Ai ? (typeof t == "string" ? n.dispatch(Object.assign(Object.assign({}, py(n.state, t, i.from, i.to)), { annotations: Xf.of(e.completion) })) : t(n, e.completion, i.from, i.to), true) : false;
}
const Ty = xy(Re, cl);
function rs(n, e = "option") {
  return (t) => {
    let i = t.state.field(Re, false);
    if (!i || !i.open || i.open.disabled || Date.now() - i.open.timestamp < t.state.facet(me).interactionDelay)
      return false;
    let s = 1, o;
    e == "page" && (o = Vc(t, i.open.tooltip)) && (s = Math.max(2, Math.floor(o.dom.offsetHeight / o.dom.querySelector("li").offsetHeight) - 1));
    let { length: r } = i.open.options, l = i.open.selected > -1 ? i.open.selected + s * (n ? 1 : -1) : n ? 0 : r - 1;
    return l < 0 ? l = e == "page" ? 0 : r - 1 : l >= r && (l = e == "page" ? r - 1 : 0), t.dispatch({ effects: Zf.of(l) }), true;
  };
}
const Oy = (n) => {
  let e = n.state.field(Re, false);
  return n.state.readOnly || !e || !e.open || e.open.selected < 0 || e.open.disabled || Date.now() - e.open.timestamp < n.state.facet(me).interactionDelay ? false : cl(n, e.open.options[e.open.selected]);
}, eh = (n) => n.state.field(Re, false) ? (n.dispatch({ effects: Fs.of(true) }), true) : false, Ey = (n) => {
  let e = n.state.field(Re, false);
  return !e || !e.active.some((t) => t.state != 0) ? false : (n.dispatch({ effects: kn.of(null) }), true);
};
class By {
  constructor(e, t) {
    this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const Py = 50, Ry = 1e3, Ly = ae.fromClass(class {
  constructor(n) {
    this.view = n, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = false, this.composing = 0;
    for (let e of n.state.field(Re).active)
      e.isPending && this.startQuery(e);
  }
  update(n) {
    let e = n.state.field(Re), t = n.state.facet(me);
    if (!n.selectionSet && !n.docChanged && n.startState.field(Re) == e)
      return;
    let i = n.transactions.some((o) => {
      let r = Qf(o, t);
      return r & 8 || (o.selection || o.docChanged) && !(r & 3);
    });
    for (let o = 0; o < this.running.length; o++) {
      let r = this.running[o];
      if (i || r.context.abortOnDocChange && n.docChanged || r.updates.length + n.transactions.length > Py && Date.now() - r.time > Ry) {
        for (let l of r.context.abortListeners)
          try {
            l();
          } catch (a) {
            Le(this.view.state, a);
          }
        r.context.abortListeners = null, this.running.splice(o--, 1);
      } else
        r.updates.push(...n.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), n.transactions.some((o) => o.effects.some((r) => r.is(Fs))) && (this.pendingStart = true);
    let s = this.pendingStart ? 50 : t.activateOnTypingDelay;
    if (this.debounceUpdate = e.active.some((o) => o.isPending && !this.running.some((r) => r.active.source == o.source)) ? setTimeout(() => this.startUpdate(), s) : -1, this.composing != 0)
      for (let o of n.transactions)
        o.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && o.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = false;
    let { state: n } = this.view, e = n.field(Re);
    for (let t of e.active)
      t.isPending && !this.running.some((i) => i.active.source == t.source) && this.startQuery(t);
    this.running.length && e.open && e.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(me).updateSyncTime));
  }
  startQuery(n) {
    let { state: e } = this.view, t = si(e), i = new Yf(e, t, n.explicit, this.view), s = new By(n, i);
    this.running.push(s), Promise.resolve(n.source(i)).then((o) => {
      s.context.aborted || (s.done = o || null, this.scheduleAccept());
    }, (o) => {
      this.view.dispatch({ effects: kn.of(null) }), Le(this.view.state, o);
    });
  }
  scheduleAccept() {
    this.running.every((n) => n.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(me).updateSyncTime));
  }
  accept() {
    var n;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let e = [], t = this.view.state.facet(me), i = this.view.state.field(Re);
    for (let s = 0; s < this.running.length; s++) {
      let o = this.running[s];
      if (o.done === void 0)
        continue;
      if (this.running.splice(s--, 1), o.done) {
        let l = si(o.updates.length ? o.updates[0].startState : this.view.state), a = Math.min(l, o.done.from + (o.active.explicit ? 0 : 1)), h = new Ai(o.active.source, o.active.explicit, a, o.done, o.done.from, (n = o.done.to) !== null && n !== void 0 ? n : l);
        for (let c of o.updates)
          h = h.update(c, t);
        if (h.hasResult()) {
          e.push(h);
          continue;
        }
      }
      let r = i.active.find((l) => l.source == o.active.source);
      if (r && r.isPending)
        if (o.done == null) {
          let l = new je(o.active.source, 0);
          for (let a of o.updates)
            l = l.update(a, t);
          l.isPending || e.push(l);
        } else
          this.startQuery(r);
    }
    (e.length || i.open && i.open.disabled) && this.view.dispatch({ effects: hl.of(e) });
  }
}, { eventHandlers: { blur(n) {
  let e = this.view.state.field(Re, false);
  if (e && e.tooltip && this.view.state.facet(me).closeOnBlur) {
    let t = e.open && Vc(this.view, e.open.tooltip);
    (!t || !t.dom.contains(n.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: kn.of(null) }), 10);
  }
}, compositionstart() {
  this.composing = 1;
}, compositionend() {
  this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: Fs.of(false) }), 20), this.composing = 0;
} } }), Iy = typeof navigator == "object" && /Win/.test(navigator.platform), Ny = fi.highest(I.domEventHandlers({ keydown(n, e) {
  let t = e.state.field(Re, false);
  if (!t || !t.open || t.open.disabled || t.open.selected < 0 || n.key.length > 1 || n.ctrlKey && !(Iy && n.altKey) || n.metaKey)
    return false;
  let i = t.open.options[t.open.selected], s = t.active.find((r) => r.source == i.source), o = i.completion.commitCharacters || s.result.commitCharacters;
  return o && o.indexOf(n.key) > -1 && cl(e, i), false;
} })), Vy = I.baseTheme({ ".cm-tooltip.cm-tooltip-autocomplete": { "& > ul": { fontFamily: "monospace", whiteSpace: "nowrap", overflow: "hidden auto", maxWidth_fallback: "700px", maxWidth: "min(700px, 95vw)", minWidth: "250px", maxHeight: "10em", height: "100%", listStyle: "none", margin: 0, padding: 0, "& > li, & > completion-section": { padding: "1px 3px", lineHeight: 1.2 }, "& > li": { overflowX: "hidden", textOverflow: "ellipsis", cursor: "pointer" }, "& > completion-section": { display: "list-item", borderBottom: "1px solid silver", paddingLeft: "0.5em", opacity: 0.7 } } }, "&light .cm-tooltip-autocomplete ul li[aria-selected]": { background: "#17c", color: "white" }, "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#777" }, "&dark .cm-tooltip-autocomplete ul li[aria-selected]": { background: "#347", color: "white" }, "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#444" }, ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": { content: '"\xB7\xB7\xB7"', opacity: 0.5, display: "block", textAlign: "center" }, ".cm-tooltip.cm-completionInfo": { position: "absolute", padding: "3px 9px", width: "max-content", maxWidth: "400px", boxSizing: "border-box", whiteSpace: "pre-line" }, ".cm-completionInfo.cm-completionInfo-left": { right: "100%" }, ".cm-completionInfo.cm-completionInfo-right": { left: "100%" }, ".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" }, ".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" }, "&light .cm-snippetField": { backgroundColor: "#00000022" }, "&dark .cm-snippetField": { backgroundColor: "#ffffff22" }, ".cm-snippetFieldPosition": { verticalAlign: "text-top", width: 0, height: "1.15em", display: "inline-block", margin: "0 -0.7px -.7em", borderLeft: "1.4px dotted #888" }, ".cm-completionMatchedText": { textDecoration: "underline" }, ".cm-completionDetail": { marginLeft: "0.5em", fontStyle: "italic" }, ".cm-completionIcon": { fontSize: "90%", width: ".8em", display: "inline-block", textAlign: "center", paddingRight: ".6em", opacity: "0.6", boxSizing: "content-box" }, ".cm-completionIcon-function, .cm-completionIcon-method": { "&:after": { content: "'\u0192'" } }, ".cm-completionIcon-class": { "&:after": { content: "'\u25CB'" } }, ".cm-completionIcon-interface": { "&:after": { content: "'\u25CC'" } }, ".cm-completionIcon-variable": { "&:after": { content: "'\u{1D465}'" } }, ".cm-completionIcon-constant": { "&:after": { content: "'\u{1D436}'" } }, ".cm-completionIcon-type": { "&:after": { content: "'\u{1D461}'" } }, ".cm-completionIcon-enum": { "&:after": { content: "'\u222A'" } }, ".cm-completionIcon-property": { "&:after": { content: "'\u25A1'" } }, ".cm-completionIcon-keyword": { "&:after": { content: "'\u{1F511}\uFE0E'" } }, ".cm-completionIcon-namespace": { "&:after": { content: "'\u25A2'" } }, ".cm-completionIcon-text": { "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" } } }), _n = { brackets: ["(", "[", "{", "'", '"'], before: ")]}:;>", stringPrefixes: [] }, ii = H.define({ map(n, e) {
  let t = e.mapPos(n, -1, De.TrackAfter);
  return t ?? void 0;
} }), fl = new class extends oi {
}();
fl.startSide = 1;
fl.endSide = -1;
const eu = ge.define({ create() {
  return X.empty;
}, update(n, e) {
  if (n = n.map(e.changes), e.selection) {
    let t = e.state.doc.lineAt(e.selection.main.head);
    n = n.update({ filter: (i) => i >= t.from && i <= t.to });
  }
  for (let t of e.effects)
    t.is(ii) && (n = n.update({ add: [fl.range(t.value, t.value + 1)] }));
  return n;
} });
function $y() {
  return [zy, eu];
}
const To = "()[]{}<>\xAB\xBB\xBB\xAB\uFF3B\uFF3D\uFF5B\uFF5D";
function tu(n) {
  for (let e = 0; e < To.length; e += 2)
    if (To.charCodeAt(e) == n)
      return To.charAt(e + 1);
  return Lr(n < 128 ? n : n + 1);
}
function iu(n, e) {
  return n.languageDataAt("closeBrackets", e)[0] || _n;
}
const Fy = typeof navigator == "object" && /Android\b/.test(navigator.userAgent), zy = I.inputHandler.of((n, e, t, i) => {
  if ((Fy ? n.composing : n.compositionStarted) || n.state.readOnly)
    return false;
  let s = n.state.selection.main;
  if (i.length > 2 || i.length == 2 && ct(Be(i, 0)) == 1 || e != s.from || t != s.to)
    return false;
  let o = qy(n.state, i);
  return o ? (n.dispatch(o), true) : false;
}), Hy = ({ state: n, dispatch: e }) => {
  if (n.readOnly)
    return false;
  let i = iu(n, n.selection.main.head).brackets || _n.brackets, s = null, o = n.changeByRange((r) => {
    if (r.empty) {
      let l = Uy(n.doc, r.head);
      for (let a of i)
        if (a == l && eo(n.doc, r.head) == tu(Be(a, 0)))
          return { changes: { from: r.head - a.length, to: r.head + a.length }, range: k.cursor(r.head - a.length) };
    }
    return { range: s = r };
  });
  return s || e(n.update(o, { scrollIntoView: true, userEvent: "delete.backward" })), !s;
}, Wy = [{ key: "Backspace", run: Hy }];
function qy(n, e) {
  let t = iu(n, n.selection.main.head), i = t.brackets || _n.brackets;
  for (let s of i) {
    let o = tu(Be(s, 0));
    if (e == s)
      return o == s ? Gy(n, s, i.indexOf(s + s + s) > -1, t) : jy(n, s, o, t.before || _n.before);
    if (e == o && nu(n, n.selection.main.from))
      return Ky(n, s, o);
  }
  return null;
}
function nu(n, e) {
  let t = false;
  return n.field(eu).between(0, n.doc.length, (i) => {
    i == e && (t = true);
  }), t;
}
function eo(n, e) {
  let t = n.sliceString(e, e + 2);
  return t.slice(0, ct(Be(t, 0)));
}
function Uy(n, e) {
  let t = n.sliceString(e - 2, e);
  return ct(Be(t, 0)) == t.length ? t : t.slice(1);
}
function jy(n, e, t, i) {
  let s = null, o = n.changeByRange((r) => {
    if (!r.empty)
      return { changes: [{ insert: e, from: r.from }, { insert: t, from: r.to }], effects: ii.of(r.to + e.length), range: k.range(r.anchor + e.length, r.head + e.length) };
    let l = eo(n.doc, r.head);
    return !l || /\s/.test(l) || i.indexOf(l) > -1 ? { changes: { insert: e + t, from: r.head }, effects: ii.of(r.head + e.length), range: k.cursor(r.head + e.length) } : { range: s = r };
  });
  return s ? null : n.update(o, { scrollIntoView: true, userEvent: "input.type" });
}
function Ky(n, e, t) {
  let i = null, s = n.changeByRange((o) => o.empty && eo(n.doc, o.head) == t ? { changes: { from: o.head, to: o.head + t.length, insert: t }, range: k.cursor(o.head + t.length) } : i = { range: o });
  return i ? null : n.update(s, { scrollIntoView: true, userEvent: "input.type" });
}
function Gy(n, e, t, i) {
  let s = i.stringPrefixes || _n.stringPrefixes, o = null, r = n.changeByRange((l) => {
    if (!l.empty)
      return { changes: [{ insert: e, from: l.from }, { insert: e, from: l.to }], effects: ii.of(l.to + e.length), range: k.range(l.anchor + e.length, l.head + e.length) };
    let a = l.head, h = eo(n.doc, a), c;
    if (h == e) {
      if (th(n, a))
        return { changes: { insert: e + e, from: a }, effects: ii.of(a + e.length), range: k.cursor(a + e.length) };
      if (nu(n, a)) {
        let u = t && n.sliceDoc(a, a + e.length * 3) == e + e + e ? e + e + e : e;
        return { changes: { from: a, to: a + u.length, insert: u }, range: k.cursor(a + u.length) };
      }
    } else {
      if (t && n.sliceDoc(a - 2 * e.length, a) == e + e && (c = ih(n, a - 2 * e.length, s)) > -1 && th(n, c))
        return { changes: { insert: e + e + e + e, from: a }, effects: ii.of(a + e.length), range: k.cursor(a + e.length) };
      if (n.charCategorizer(a)(h) != re.Word && ih(n, a, s) > -1 && !Yy(n, a, e, s))
        return { changes: { insert: e + e, from: a }, effects: ii.of(a + e.length), range: k.cursor(a + e.length) };
    }
    return { range: o = l };
  });
  return o ? null : n.update(r, { scrollIntoView: true, userEvent: "input.type" });
}
function th(n, e) {
  let t = Ce(n).resolveInner(e + 1);
  return t.parent && t.from == e;
}
function Yy(n, e, t, i) {
  let s = Ce(n).resolveInner(e, -1), o = i.reduce((r, l) => Math.max(r, l.length), 0);
  for (let r = 0; r < 5; r++) {
    let l = n.sliceDoc(s.from, Math.min(s.to, s.from + t.length + o)), a = l.indexOf(t);
    if (!a || a > -1 && i.indexOf(l.slice(0, a)) > -1) {
      let c = s.firstChild;
      for (; c && c.from == s.from && c.to - c.from > t.length + a; ) {
        if (n.sliceDoc(c.to - t.length, c.to) == t)
          return false;
        c = c.firstChild;
      }
      return true;
    }
    let h = s.to == e && s.parent;
    if (!h)
      break;
    s = h;
  }
  return false;
}
function ih(n, e, t) {
  let i = n.charCategorizer(e);
  if (i(n.sliceDoc(e - 1, e)) != re.Word)
    return e;
  for (let s of t) {
    let o = e - s.length;
    if (n.sliceDoc(o, e) == s && i(n.sliceDoc(o - 1, o)) != re.Word)
      return o;
  }
  return -1;
}
function Jy(n = {}) {
  return [Ny, Re, me.of(n), Ly, Xy, Vy];
}
const su = [{ key: "Ctrl-Space", run: eh }, { mac: "Alt-`", run: eh }, { key: "Escape", run: Ey }, { key: "ArrowDown", run: rs(true) }, { key: "ArrowUp", run: rs(false) }, { key: "PageDown", run: rs(true, "page") }, { key: "PageUp", run: rs(false, "page") }, { key: "Enter", run: Oy }], Xy = fi.highest(Pn.computeN([me], (n) => n.facet(me).defaultKeymap ? [su] : []));
class nh {
  constructor(e, t, i) {
    this.from = e, this.to = t, this.diagnostic = i;
  }
}
class Zt {
  constructor(e, t, i) {
    this.diagnostics = e, this.panel = t, this.selected = i;
  }
  static init(e, t, i) {
    let s = e, o = i.facet(Sn).markerFilter;
    o && (s = o(s, i));
    let r = e.slice().sort((f, u) => f.from - u.from || f.to - u.to), l = new Ct(), a = [], h = 0;
    for (let f = 0; ; ) {
      let u = f == r.length ? null : r[f];
      if (!u && !a.length)
        break;
      let d, p;
      for (a.length ? (d = h, p = a.reduce((m, y) => Math.min(m, y.to), u && u.from > d ? u.from : 1e8)) : (d = u.from, p = u.to, a.push(u), f++); f < r.length; ) {
        let m = r[f];
        if (m.from == d && (m.to > m.from || m.to == d))
          a.push(m), f++, p = Math.min(m.to, p);
        else {
          p = Math.min(m.from, p);
          break;
        }
      }
      let g = c1(a);
      if (a.some((m) => m.from == m.to || m.from == m.to - 1 && i.doc.lineAt(m.from).to == m.from))
        l.add(d, d, F.widget({ widget: new r1(g), diagnostics: a.slice() }));
      else {
        let m = a.reduce((y, w) => w.markClass ? y + " " + w.markClass : y, "");
        l.add(d, p, F.mark({ class: "cm-lintRange cm-lintRange-" + g + m, diagnostics: a.slice(), inclusiveEnd: a.some((y) => y.to > p) }));
      }
      h = p;
      for (let m = 0; m < a.length; m++)
        a[m].to <= h && a.splice(m--, 1);
    }
    let c = l.finish();
    return new Zt(c, t, Ri(c));
  }
}
function Ri(n, e = null, t = 0) {
  let i = null;
  return n.between(t, 1e9, (s, o, { spec: r }) => {
    if (!(e && r.diagnostics.indexOf(e) < 0))
      if (!i)
        i = new nh(s, o, e || r.diagnostics[0]);
      else {
        if (r.diagnostics.indexOf(i.diagnostic) < 0)
          return false;
        i = new nh(i.from, o, i.diagnostic);
      }
  }), i;
}
function Qy(n, e) {
  let t = e.pos, i = e.end || t, s = n.state.facet(Sn).hideOn(n, t, i);
  if (s != null)
    return s;
  let o = n.startState.doc.lineAt(e.pos);
  return !!(n.effects.some((r) => r.is(ou)) || n.changes.touchesRange(o.from, Math.max(o.to, i)));
}
function Zy(n, e) {
  return n.field(Fe, false) ? e : e.concat(H.appendConfig.of(f1));
}
const ou = H.define(), ul = H.define(), ru = H.define(), Fe = ge.define({ create() {
  return new Zt(F.none, null, null);
}, update(n, e) {
  if (e.docChanged && n.diagnostics.size) {
    let t = n.diagnostics.map(e.changes), i = null, s = n.panel;
    if (n.selected) {
      let o = e.changes.mapPos(n.selected.from, 1);
      i = Ri(t, n.selected.diagnostic, o) || Ri(t, null, o);
    }
    !t.size && s && e.state.facet(Sn).autoPanel && (s = null), n = new Zt(t, s, i);
  }
  for (let t of e.effects)
    if (t.is(ou)) {
      let i = e.state.facet(Sn).autoPanel ? t.value.length ? Cn.open : null : n.panel;
      n = Zt.init(t.value, i, e.state);
    } else
      t.is(ul) ? n = new Zt(n.diagnostics, t.value ? Cn.open : null, n.selected) : t.is(ru) && (n = new Zt(n.diagnostics, n.panel, t.value));
  return n;
}, provide: (n) => [yn.from(n, (e) => e.panel), I.decorations.from(n, (e) => e.diagnostics)] }), e1 = F.mark({ class: "cm-lintRange cm-lintRange-active" });
function t1(n, e, t) {
  let { diagnostics: i } = n.state.field(Fe), s, o = -1, r = -1;
  i.between(e - (t < 0 ? 1 : 0), e + (t > 0 ? 1 : 0), (a, h, { spec: c }) => {
    if (e >= a && e <= h && (a == h || (e > a || t > 0) && (e < h || t < 0)))
      return s = c.diagnostics, o = a, r = h, false;
  });
  let l = n.state.facet(Sn).tooltipFilter;
  return s && l && (s = l(s, n.state)), s ? { pos: o, end: r, above: n.state.doc.lineAt(o).to < r, create() {
    return { dom: i1(n, s) };
  } } : null;
}
function i1(n, e) {
  return te("ul", { class: "cm-tooltip-lint" }, e.map((t) => au(n, t, false)));
}
const n1 = (n) => {
  let e = n.state.field(Fe, false);
  (!e || !e.panel) && n.dispatch({ effects: Zy(n.state, [ul.of(true)]) });
  let t = bn(n, Cn.open);
  return t && t.dom.querySelector(".cm-panel-lint ul").focus(), true;
}, sh = (n) => {
  let e = n.state.field(Fe, false);
  return !e || !e.panel ? false : (n.dispatch({ effects: ul.of(false) }), true);
}, s1 = (n) => {
  let e = n.state.field(Fe, false);
  if (!e)
    return false;
  let t = n.state.selection.main, i = e.diagnostics.iter(t.to + 1);
  return !i.value && (i = e.diagnostics.iter(0), !i.value || i.from == t.from && i.to == t.to) ? false : (n.dispatch({ selection: { anchor: i.from, head: i.to }, scrollIntoView: true }), true);
}, o1 = [{ key: "Mod-Shift-m", run: n1, preventDefault: true }, { key: "F8", run: s1 }], Sn = $.define({ combine(n) {
  return Object.assign({ sources: n.map((e) => e.source).filter((e) => e != null) }, vt(n.map((e) => e.config), { delay: 750, markerFilter: null, tooltipFilter: null, needsRefresh: null, hideOn: () => null }, { needsRefresh: (e, t) => e ? t ? (i) => e(i) || t(i) : e : t }));
} });
function lu(n) {
  let e = [];
  if (n)
    e:
      for (let { name: t } of n) {
        for (let i = 0; i < t.length; i++) {
          let s = t[i];
          if (/[a-zA-Z]/.test(s) && !e.some((o) => o.toLowerCase() == s.toLowerCase())) {
            e.push(s);
            continue e;
          }
        }
        e.push("");
      }
  return e;
}
function au(n, e, t) {
  var i;
  let s = t ? lu(e.actions) : [];
  return te("li", { class: "cm-diagnostic cm-diagnostic-" + e.severity }, te("span", { class: "cm-diagnosticText" }, e.renderMessage ? e.renderMessage(n) : e.message), (i = e.actions) === null || i === void 0 ? void 0 : i.map((o, r) => {
    let l = false, a = (u) => {
      if (u.preventDefault(), l)
        return;
      l = true;
      let d = Ri(n.state.field(Fe).diagnostics, e);
      d && o.apply(n, d.from, d.to);
    }, { name: h } = o, c = s[r] ? h.indexOf(s[r]) : -1, f = c < 0 ? h : [h.slice(0, c), te("u", h.slice(c, c + 1)), h.slice(c + 1)];
    return te("button", { type: "button", class: "cm-diagnosticAction", onclick: a, onmousedown: a, "aria-label": ` Action: ${h}${c < 0 ? "" : ` (access key "${s[r]})"`}.` }, f);
  }), e.source && te("div", { class: "cm-diagnosticSource" }, e.source));
}
class r1 extends wt {
  constructor(e) {
    super(), this.sev = e;
  }
  eq(e) {
    return e.sev == this.sev;
  }
  toDOM() {
    return te("span", { class: "cm-lintPoint cm-lintPoint-" + this.sev });
  }
}
class oh {
  constructor(e, t) {
    this.diagnostic = t, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = au(e, t, true), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class Cn {
  constructor(e) {
    this.view = e, this.items = [];
    let t = (s) => {
      if (s.keyCode == 27)
        sh(this.view), this.view.focus();
      else if (s.keyCode == 38 || s.keyCode == 33)
        this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
      else if (s.keyCode == 40 || s.keyCode == 34)
        this.moveSelection((this.selectedIndex + 1) % this.items.length);
      else if (s.keyCode == 36)
        this.moveSelection(0);
      else if (s.keyCode == 35)
        this.moveSelection(this.items.length - 1);
      else if (s.keyCode == 13)
        this.view.focus();
      else if (s.keyCode >= 65 && s.keyCode <= 90 && this.selectedIndex >= 0) {
        let { diagnostic: o } = this.items[this.selectedIndex], r = lu(o.actions);
        for (let l = 0; l < r.length; l++)
          if (r[l].toUpperCase().charCodeAt(0) == s.keyCode) {
            let a = Ri(this.view.state.field(Fe).diagnostics, o);
            a && o.actions[l].apply(e, a.from, a.to);
          }
      } else
        return;
      s.preventDefault();
    }, i = (s) => {
      for (let o = 0; o < this.items.length; o++)
        this.items[o].dom.contains(s.target) && this.moveSelection(o);
    };
    this.list = te("ul", { tabIndex: 0, role: "listbox", "aria-label": this.view.state.phrase("Diagnostics"), onkeydown: t, onclick: i }), this.dom = te("div", { class: "cm-panel-lint" }, this.list, te("button", { type: "button", name: "close", "aria-label": this.view.state.phrase("close"), onclick: () => sh(this.view) }, "\xD7")), this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(Fe).selected;
    if (!e)
      return -1;
    for (let t = 0; t < this.items.length; t++)
      if (this.items[t].diagnostic == e.diagnostic)
        return t;
    return -1;
  }
  update() {
    let { diagnostics: e, selected: t } = this.view.state.field(Fe), i = 0, s = false, o = null, r = /* @__PURE__ */ new Set();
    for (e.between(0, this.view.state.doc.length, (l, a, { spec: h }) => {
      for (let c of h.diagnostics) {
        if (r.has(c))
          continue;
        r.add(c);
        let f = -1, u;
        for (let d = i; d < this.items.length; d++)
          if (this.items[d].diagnostic == c) {
            f = d;
            break;
          }
        f < 0 ? (u = new oh(this.view, c), this.items.splice(i, 0, u), s = true) : (u = this.items[f], f > i && (this.items.splice(i, f - i), s = true)), t && u.diagnostic == t.diagnostic ? u.dom.hasAttribute("aria-selected") || (u.dom.setAttribute("aria-selected", "true"), o = u) : u.dom.hasAttribute("aria-selected") && u.dom.removeAttribute("aria-selected"), i++;
      }
    }); i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); )
      s = true, this.items.pop();
    this.items.length == 0 && (this.items.push(new oh(this.view, { from: -1, to: -1, severity: "info", message: this.view.state.phrase("No diagnostics") })), s = true), o ? (this.list.setAttribute("aria-activedescendant", o.id), this.view.requestMeasure({ key: this, read: () => ({ sel: o.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }), write: ({ sel: l, panel: a }) => {
      let h = a.height / this.list.offsetHeight;
      l.top < a.top ? this.list.scrollTop -= (a.top - l.top) / h : l.bottom > a.bottom && (this.list.scrollTop += (l.bottom - a.bottom) / h);
    } })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), s && this.sync();
  }
  sync() {
    let e = this.list.firstChild;
    function t() {
      let i = e;
      e = i.nextSibling, i.remove();
    }
    for (let i of this.items)
      if (i.dom.parentNode == this.list) {
        for (; e != i.dom; )
          t();
        e = i.dom.nextSibling;
      } else
        this.list.insertBefore(i.dom, e);
    for (; e; )
      t();
  }
  moveSelection(e) {
    if (this.selectedIndex < 0)
      return;
    let t = this.view.state.field(Fe), i = Ri(t.diagnostics, this.items[e].diagnostic);
    i && this.view.dispatch({ selection: { anchor: i.from, head: i.to }, scrollIntoView: true, effects: ru.of(i) });
  }
  static open(e) {
    return new Cn(e);
  }
}
function l1(n, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(n)}</svg>')`;
}
function ls(n) {
  return l1(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${n}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const a1 = I.baseTheme({ ".cm-diagnostic": { padding: "3px 6px 3px 8px", marginLeft: "-1px", display: "block", whiteSpace: "pre-wrap" }, ".cm-diagnostic-error": { borderLeft: "5px solid #d11" }, ".cm-diagnostic-warning": { borderLeft: "5px solid orange" }, ".cm-diagnostic-info": { borderLeft: "5px solid #999" }, ".cm-diagnostic-hint": { borderLeft: "5px solid #66d" }, ".cm-diagnosticAction": { font: "inherit", border: "none", padding: "2px 4px", backgroundColor: "#444", color: "white", borderRadius: "3px", marginLeft: "8px", cursor: "pointer" }, ".cm-diagnosticSource": { fontSize: "70%", opacity: 0.7 }, ".cm-lintRange": { backgroundPosition: "left bottom", backgroundRepeat: "repeat-x", paddingBottom: "0.7px" }, ".cm-lintRange-error": { backgroundImage: ls("#d11") }, ".cm-lintRange-warning": { backgroundImage: ls("orange") }, ".cm-lintRange-info": { backgroundImage: ls("#999") }, ".cm-lintRange-hint": { backgroundImage: ls("#66d") }, ".cm-lintRange-active": { backgroundColor: "#ffdd9980" }, ".cm-tooltip-lint": { padding: 0, margin: 0 }, ".cm-lintPoint": { position: "relative", "&:after": { content: '""', position: "absolute", bottom: 0, left: "-2px", borderLeft: "3px solid transparent", borderRight: "3px solid transparent", borderBottom: "4px solid #d11" } }, ".cm-lintPoint-warning": { "&:after": { borderBottomColor: "orange" } }, ".cm-lintPoint-info": { "&:after": { borderBottomColor: "#999" } }, ".cm-lintPoint-hint": { "&:after": { borderBottomColor: "#66d" } }, ".cm-panel.cm-panel-lint": { position: "relative", "& ul": { maxHeight: "100px", overflowY: "auto", "& [aria-selected]": { backgroundColor: "#ddd", "& u": { textDecoration: "underline" } }, "&:focus [aria-selected]": { background_fallback: "#bdf", backgroundColor: "Highlight", color_fallback: "white", color: "HighlightText" }, "& u": { textDecoration: "none" }, padding: 0, margin: 0 }, "& [name=close]": { position: "absolute", top: "0", right: "2px", background: "inherit", border: "none", font: "inherit", padding: 0, margin: 0 } } });
function h1(n) {
  return n == "error" ? 4 : n == "warning" ? 3 : n == "info" ? 2 : 1;
}
function c1(n) {
  let e = "hint", t = 1;
  for (let i of n) {
    let s = h1(i.severity);
    s > t && (t = s, e = i.severity);
  }
  return e;
}
const f1 = [Fe, I.decorations.compute([Fe], (n) => {
  let { selected: e, panel: t } = n.field(Fe);
  return !e || !t || e.from == e.to ? F.none : F.set([e1.range(e.from, e.to)]);
}), ng(t1, { hideOn: Qy }), a1], u1 = (() => [pg(), bg(), Bm(), N0(), h0(), km(), Mm(), U.allowMultipleSelections.of(true), Yg(), f0(p0, { fallback: true }), x0(), $y(), Jy(), jm(), Ym(), Vm(), Wb(), Pn.of([...Wy, ...Nb, ...ay, ...j0, ...o0, ...su, ...o1])])();
/*!
* VueCodemirror v6.1.1
* Copyright (c) Surmon. All rights reserved.
* Released under the MIT License.
* Surmon
*/
var d1 = Object.freeze({ autofocus: false, disabled: false, indentWithTab: true, tabSize: 2, placeholder: "", autoDestroy: true, extensions: [u1] }), p1 = Symbol("vue-codemirror-global-config"), Me, m1 = function(n) {
  var e = n.onUpdate, t = n.onChange, i = n.onFocus, s = n.onBlur, o = function(r, l) {
    var a = {};
    for (var h in r)
      Object.prototype.hasOwnProperty.call(r, h) && l.indexOf(h) < 0 && (a[h] = r[h]);
    if (r != null && typeof Object.getOwnPropertySymbols == "function") {
      var c = 0;
      for (h = Object.getOwnPropertySymbols(r); c < h.length; c++)
        l.indexOf(h[c]) < 0 && Object.prototype.propertyIsEnumerable.call(r, h[c]) && (a[h[c]] = r[h[c]]);
    }
    return a;
  }(n, ["onUpdate", "onChange", "onFocus", "onBlur"]);
  return U.create({ doc: o.doc, selection: o.selection, extensions: (Array.isArray(o.extensions) ? o.extensions : [o.extensions]).concat([I.updateListener.of(function(r) {
    e(r), r.docChanged && t(r.state.doc.toString(), r), r.focusChanged && (r.view.hasFocus ? i(r) : s(r));
  })]) });
}, bi = function(n) {
  var e = new Tn();
  return { compartment: e, run: function(t) {
    e.get(n.state) ? n.dispatch({ effects: e.reconfigure(t) }) : n.dispatch({ effects: H.appendConfig.of(e.of(t)) });
  } };
}, rh = function(n, e) {
  var t = bi(n), i = t.compartment, s = t.run;
  return function(o) {
    var r = i.get(n.state);
    s(o ?? r !== e ? e : []);
  };
}, as = { type: Boolean, default: void 0 }, g1 = { autofocus: as, disabled: as, indentWithTab: as, tabSize: Number, placeholder: String, style: Object, autoDestroy: as, phrases: Object, root: Object, extensions: Array, selection: Object }, b1 = { modelValue: { type: String, default: "" } }, y1 = Object.assign(Object.assign({}, g1), b1);
(function(n) {
  n.Change = "change", n.Update = "update", n.Focus = "focus", n.Blur = "blur", n.Ready = "ready", n.ModelUpdate = "update:modelValue";
})(Me || (Me = {}));
var ei = {};
ei[Me.Change] = function(n, e) {
  return true;
}, ei[Me.Update] = function(n) {
  return true;
}, ei[Me.Focus] = function(n) {
  return true;
}, ei[Me.Blur] = function(n) {
  return true;
}, ei[Me.Ready] = function(n) {
  return true;
};
var hu = {};
hu[Me.ModelUpdate] = ei[Me.Change];
var v1 = Object.assign(Object.assign({}, ei), hu), w1 = pe({ name: "VueCodemirror", props: Object.assign({}, y1), emits: Object.assign({}, v1), setup: function(n, e) {
  var t = io(), i = io(), s = io(), o = Object.assign(Object.assign({}, d1), cn(p1, {})), r = at(function() {
    var l = {};
    return Object.keys(Mu(n)).forEach(function(a) {
      var h;
      a !== "modelValue" && (l[a] = (h = n[a]) !== null && h !== void 0 ? h : o[a]);
    }), l;
  });
  return Dr(function() {
    var l;
    i.value = m1({ doc: n.modelValue, selection: r.value.selection, extensions: (l = o.extensions) !== null && l !== void 0 ? l : [], onFocus: function(h) {
      return e.emit(Me.Focus, h);
    }, onBlur: function(h) {
      return e.emit(Me.Blur, h);
    }, onUpdate: function(h) {
      return e.emit(Me.Update, h);
    }, onChange: function(h, c) {
      h !== n.modelValue && (e.emit(Me.Change, h, c), e.emit(Me.ModelUpdate, h, c));
    } }), s.value = function(h) {
      return new I(Object.assign({}, h));
    }({ state: i.value, parent: t.value, root: r.value.root });
    var a = function(h) {
      var c = function() {
        return h.state.doc.toString();
      }, f = bi(h).run, u = rh(h, [I.editable.of(false), U.readOnly.of(true)]), d = rh(h, Pn.of([Vb])), p = bi(h).run, g = bi(h).run, m = bi(h).run, y = bi(h).run;
      return { focus: function() {
        return h.focus();
      }, getDoc: c, setDoc: function(w) {
        w !== c() && h.dispatch({ changes: { from: 0, to: h.state.doc.length, insert: w } });
      }, reExtensions: f, toggleDisabled: u, toggleIndentWithTab: d, setTabSize: function(w) {
        p([U.tabSize.of(w), js.of(" ".repeat(w))]);
      }, setPhrases: function(w) {
        g([U.phrases.of(w)]);
      }, setPlaceholder: function(w) {
        m(Hm(w));
      }, setStyle: function(w) {
        w === void 0 && (w = {}), y(I.theme({ "&": Object.assign({}, w) }));
      } };
    }(s.value);
    We(function() {
      return n.modelValue;
    }, function(h) {
      h !== a.getDoc() && a.setDoc(h);
    }), We(function() {
      return n.extensions;
    }, function(h) {
      return a.reExtensions(h || []);
    }, { immediate: true }), We(function() {
      return r.value.disabled;
    }, function(h) {
      return a.toggleDisabled(h);
    }, { immediate: true }), We(function() {
      return r.value.indentWithTab;
    }, function(h) {
      return a.toggleIndentWithTab(h);
    }, { immediate: true }), We(function() {
      return r.value.tabSize;
    }, function(h) {
      return a.setTabSize(h);
    }, { immediate: true }), We(function() {
      return r.value.phrases;
    }, function(h) {
      return a.setPhrases(h || {});
    }, { immediate: true }), We(function() {
      return r.value.placeholder;
    }, function(h) {
      return a.setPlaceholder(h);
    }, { immediate: true }), We(function() {
      return r.value.style;
    }, function(h) {
      return a.setStyle(h);
    }, { immediate: true }), r.value.autofocus && a.focus(), e.emit(Me.Ready, { state: i.value, view: s.value, container: t.value });
  }), Cu(function() {
    r.value.autoDestroy && s.value && function(l) {
      l.destroy();
    }(s.value);
  }), function() {
    return Au("div", { class: "v-codemirror", style: { display: "contents" }, ref: t });
  };
} }), x1 = w1;
const k1 = { key: 0, class: "px-2 py-px text-right text-[#182B50] text-opacity-60 text-xs" }, _1 = pe({ __name: "input", props: { modelValue: { default: "" }, placeholder: { default: "form_input_placeholder" }, disabled: { type: Boolean, default: false }, showLine: { type: Boolean, default: false }, showToken: { type: Boolean, default: false }, variables: { default: () => [] }, wordWrap: { type: Boolean, default: true } }, emits: ["change", "input", "update:modelValue", "focus", "blur"], setup(n, { expose: e, emit: t }) {
  const i = n, s = t, o = ee(), r = ee(null), l = ee(null), a = ee(0), h = ee(""), c = ee(-1), f = H.define(), u = ge.define({ create() {
    return null;
  }, update(E, T) {
    for (const R of T.effects)
      if (R.is(f))
        return R.value;
    return E;
  }, provide: (E) => qs.from(E) }), d = (E) => {
    for (const T of i.variables) {
      const R = T.children.find((j) => j.value === E);
      if (R)
        return { ...R, group: T.label };
    }
    return null;
  };
  class p extends wt {
    constructor(T, R) {
      super();
      __publicField(this, "name");
      __publicField(this, "value");
      this.name = T, this.value = R;
    }
    eq(T) {
      return this.name === T.name;
    }
    toDOM() {
      const T = document.createElement("span");
      return T.style.cssText = `
      color: rgb(42, 100, 231);
      padding: 0 4px;`, T.textContent = this.name, T;
    }
    ignoreEvent() {
      return false;
    }
  }
  const g = new Ic({ regexp: /(\{\#(\S+?)\#\}|\{\{(\S+?)\}\})/g, decoration: (E) => {
    const T = d(E[0]);
    return T ? F.replace({ widget: new p(T == null ? void 0 : T.label, E[1]) }) : "";
  } }), m = ae.fromClass(class {
    constructor(E) {
      __publicField(this, "variablePlugin");
      this.variablePlugin = g.createDeco(E);
    }
    update(E) {
      this.variablePlugin = g.updateDeco(E, this.variablePlugin);
    }
  }, { decorations: (E) => E.variablePlugin, provide: (E) => I.atomicRanges.of((T) => {
    var _a2;
    return ((_a2 = T.plugin(E)) == null ? void 0 : _a2.variablePlugin) || F.none;
  }) }), y = () => {
    Gi(() => {
      s("update:modelValue", h.value), s("change", h.value), s("input", h.value);
    });
  }, w = (E, T, R) => {
    r.value.dispatch({ changes: { from: E, to: T, insert: R } });
  }, M = () => {
    l.value.querySelectorAll(".tooltip-item").forEach((T, R) => {
      R === c.value ? (T.classList.add("selected"), T.scrollIntoView({ block: "nearest" })) : T.classList.remove("selected");
    });
  }, S = () => {
    r.value && r.value.dispatch({ effects: f.of(null) }), document.removeEventListener("keydown", _, true);
  }, _ = (E) => {
    if (!l.value)
      return;
    const T = l.value.querySelectorAll(".tooltip-item");
    switch (E.key) {
      case "ArrowDown":
      case "ArrowUp":
        E.preventDefault(), E.stopPropagation();
        const R = E.key === "ArrowDown" ? 1 : -1;
        c.value = Math.max(0, Math.min(c.value + R, T.length - 1)), M();
        break;
      case "Enter":
        E.preventDefault(), E.stopPropagation(), c.value >= 0 && (T[c.value].click(), S());
        break;
    }
  }, x = (E, T) => {
    const R = document.createElement("div");
    R.className = "variable-tooltip", l.value = R, i.variables.forEach((j) => {
      const K = document.createElement("div");
      K.className = "tooltip-title", K.textContent = j.label, R.appendChild(K), j.children.forEach((Z) => {
        const he = document.createElement("div");
        he.className = "tooltip-item", he.textContent = Z.label, he.dataset.value = Z.value, he.onclick = () => {
          w(E, T, Z.value), S();
        }, R.appendChild(he);
      });
    }), r.value.dispatch({ effects: f.of({ pos: E, above: true, create: () => ({ dom: R }) }) }), Gi(() => {
      c.value = 0, M(), document.addEventListener("keydown", _, true);
    });
  }, D = at(() => {
    const E = [I.updateListener.of((T) => {
      r.value = T.view, T.docChanged && T.view.dispatch({ effects: f.of(null) });
    })];
    return i.wordWrap && E.push(I.lineWrapping), i.variables && i.variables.length && E.push(m, u, Pn.of([{ key: "/", run(T) {
      const R = T.state.selection.main.head;
      return setTimeout(() => {
        T.state.selection.main.head === R + 1 && x(R, R + 1);
      }, 200), false;
    } }])), E;
  }), B = () => {
    Gi(() => {
      if (r.value) {
        const E = r.value.state.doc.lines - 1, T = r.value.state.doc.line(E).to;
        r.value.dispatch({ selection: { anchor: T, head: T }, scrollIntoView: true });
      }
    });
  };
  We(() => i.modelValue, () => {
    h.value = i.modelValue;
  }, { immediate: true }), We(() => i.variables, () => {
    o.value && setTimeout(async () => {
      const E = h.value;
      h.value = "", await Gi(), h.value = E;
    }, 200);
  }, { deep: true });
  const q = (E) => {
    l.value && !l.value.contains(E.target) && S();
  };
  return Dr(() => {
    document.addEventListener("click", q);
  }), Du(() => {
    document.removeEventListener("click", q);
  }), e({ showTooltip() {
    const E = Math.max(r.value.state.doc.length, 0);
    x(E, E);
  }, insertContent(E) {
    const T = Math.max(r.value.state.doc.length, 0);
    w(T, T, E);
  }, forceUpdate(E = "") {
    h.value = E;
  }, scrollToBottom: B }), (E, T) => (O(), z(le, null, [b(C(x1), { ref_key: "codemirrorRef", ref: o, modelValue: h.value, "onUpdate:modelValue": T[0] || (T[0] = (R) => h.value = R), disabled: E.disabled, class: An(["w-full prompt-code", [E.showLine ? "" : "prompt-line--hidden"]]), placeholder: E.$t(E.placeholder), "indent-with-tab": false, "tab-size": 2, extensions: D.value, style: Oo(E.$attrs.style), onChange: y, onFocus: T[1] || (T[1] = (R) => s("focus")), onBlur: T[2] || (T[2] = (R) => s("blur")) }, null, 8, ["modelValue", "disabled", "class", "placeholder", "extensions", "style"]), E.showToken ? (O(), z("div", k1, N(a.value) + "\u4E2Atoken ", 1)) : J("", true)], 64));
} });
const S1 = { class: "text-base text-[#1D1E1F] font-medium" }, C1 = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-4" }, A1 = { class: "flex-center inline-flex align-middle ml-1 w-4 h-4 bg-[#FDF8EB] rounded-sm" }, M1 = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-4" }, D1 = { class: "border rounded w-full flex flex-col !bg-[#FAFBFC] overflow-auto relative" }, T1 = ["title"], O1 = { class: "flex items-center gap-1" }, E1 = ["onClick"], B1 = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-4" }, P1 = { class: "text-[#1D1E1F]" }, R1 = pe({ __name: "prompt", setup(n, { expose: e }) {
  const t = ci(), i = ee(), s = () => xi.warning(window.$t("feature_coming_soon")), o = () => xi.warning(window.$t("feature_coming_soon")), r = (h) => {
    h.option.vision || (t.form_data.custom_config.image_parse.enable = false);
  }, l = async (h = "") => {
    await Ou(h), xi.success(window.$t("action_copy_success"));
  };
  return e({ validateForm: async () => i.value.validate() }), (h, c) => {
    const f = tn, u = ah, d = Rr, p = et, g = Li, m = Zu, y = Mn, w = Dn, M = Dt;
    return O(), z("div", null, [A("div", S1, N(h.$t("basic_info")), 1), b(M, { ref_key: "form_ref", ref: i, model: C(t).form_data, "label-width": "104px", "label-position": "top", class: "mt-6" }, { default: v(() => [b(Gt, { modelValue: C(t).form_data, "onUpdate:modelValue": c[0] || (c[0] = (S) => C(t).form_data = S) }, null, 8, ["modelValue"]), A("div", C1, N(h.$t("access_model")), 1), b(p, { "label-width": "0", prop: "model", rules: C(Te)({ message: "form_select_placeholder" }) }, { default: v(() => [b(d, { modelValue: C(t).form_data.model, "onUpdate:modelValue": c[1] || (c[1] = (S) => C(t).form_data.model = S), size: "large", options: C(t).model_options, onChange: r }, { item_after: v(({ data: S }) => [S.vision ? (O(), W(u, { key: 0, content: h.$t("support_image"), placement: "top" }, { default: v(() => [A("div", A1, [b(f, { size: "10px", color: "#F0A105" }, { default: v(() => [b(C(Tu))]), _: 1 })])]), _: 1 }, 8, ["content"])) : J("", true)]), _: 1 }, 8, ["modelValue", "options"])]), _: 1 }, 8, ["rules"]), A("div", M1, N(h.$t("role_instruction")), 1), b(p, { "label-width": "0" }, { default: v(() => [b(m, { class: "w-full", "z-index": 9 }, { default: v(({ isopen: S, handler: _ }) => [A("div", D1, [A("div", { class: An(["min-h-10 pl-3 pr-2 border-b flex items-center justify-between rounded-t bg-[#FBFBFC]", [S ? "sticky top-0 left-0 right-0 z-10" : ""]]) }, [A("div", { class: "flex-1 text-sm text-[#4F5052] truncate", title: h.$t("role_instruction_desc") }, " *" + N(h.$t("role_instruction_desc")), 9, T1), A("div", O1, [b(u, { placement: "top", content: h.$t("optimize_tip") }, { default: v(() => [A("span", { class: "flex-center gap-1 text-[#2563EB] text-sm px-1 cursor-pointer", onClick: Rt(s, ["stop"]) }, [b(g, { name: "hglt", width: "18px" }), G(" " + N(h.$t("optimize")), 1)])]), _: 1 }, 8, ["content"]), c[5] || (c[5] = A("div", { class: "flex-none h-4 w-px border-r border-[#E1E2E6]" }, null, -1)), b(u, { placement: "top", content: h.$t("generate_tip") }, { default: v(() => [A("span", { class: "text-[#182B50] px-1 cursor-pointer", onClick: Rt(o, ["stop"]) }, [b(g, { name: "magic-stick", width: "18px" })])]), _: 1 }, 8, ["content"]), b(u, { placement: "top", content: h.$t("action_copy") }, { default: v(() => [A("span", { class: "text-[#182B50] px-1 cursor-pointer", onClick: c[2] || (c[2] = Rt((x) => l(C(t).form_data.prompt), ["stop"])) }, [b(g, { name: "copy", width: "18px" })])]), _: 1 }, 8, ["content"]), b(u, { placement: "top", content: h.$t(S ? "action_shrink" : "action_amplify") }, { default: v(() => [A("span", { class: "text-[#182B50] px-1 cursor-pointer", onClick: Rt(_, ["stop"]) }, [b(g, { name: S ? "shrink" : "amplify", width: "18px" }, null, 8, ["name"])], 8, E1)]), _: 2 }, 1032, ["content"])])], 2), b(_1, { modelValue: C(t).form_data.prompt, "onUpdate:modelValue": c[3] || (c[3] = (x) => C(t).form_data.prompt = x), style: { height: "280px", "min-height": "max-content" }, "show-line": "" }, null, 8, ["modelValue"])])]), _: 1 })]), _: 1 }), C(t).subscription_options.length ? (O(), z(le, { key: 0 }, [b(Vi), A("div", B1, N(h.$t("permission_setting")), 1), b(p, { "label-width": "0" }, { default: v(() => [b(w, { modelValue: C(t).form_data.user_group_ids, "onUpdate:modelValue": c[4] || (c[4] = (S) => C(t).form_data.user_group_ids = S) }, { default: v(() => [(O(true), z(le, null, gt(C(t).subscription_options, (S) => (O(), W(y, { key: S.value, label: S.value }, { default: v(() => [A("span", P1, N(S.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 })], 64)) : J("", true)]), _: 1 }, 8, ["model"])]);
  };
} });
const L1 = yt(R1, [["__scopeId", "data-v-74200d91"]]), I1 = { class: "py-7" }, N1 = { class: "text-base text-[#1D1E1F] font-medium mb-4" }, V1 = { class: "text-base text-[#1D1E1F] font-medium mt-8 mb-4" }, $1 = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-4" }, F1 = { class: "text-[#1D1E1F]" }, z1 = pe({ __name: "coze-agent", setup(n, { expose: e }) {
  Tr();
  const t = ci(), i = ee();
  return e({ validateForm: async () => i.value.validate() }), (o, r) => {
    const l = Rr, a = et, h = Mn, c = Dn, f = Dt;
    return O(), z("div", I1, [b(f, { ref_key: "form_ref", ref: i, model: C(t).form_data, "label-width": "104px", "label-position": "top" }, { default: v(() => [A("div", N1, N(o.$t("coze_cn")), 1), b(a, { label: o.$t("workspace"), prop: "custom_config.coze_workspace_id", rules: C(Te)({ message: "form_select_placeholder" }) }, { default: v(() => [b(l, { modelValue: C(t).form_data.custom_config.coze_workspace_id, "onUpdate:modelValue": r[0] || (r[0] = (u) => C(t).form_data.custom_config.coze_workspace_id = u), size: "large", options: C(t).coze_workspace_options }, null, 8, ["modelValue", "options"])]), _: 1 }, 8, ["label", "rules"]), b(a, { label: o.$t("agent"), prop: "custom_config.coze_bot_id", rules: C(Te)({ message: "form_select_placeholder" }) }, { default: v(() => [b(l, { modelValue: C(t).form_data.custom_config.coze_bot_id, "onUpdate:modelValue": r[1] || (r[1] = (u) => C(t).form_data.custom_config.coze_bot_id = u), size: "large", options: C(t).coze_bot_options }, null, 8, ["modelValue", "options"])]), _: 1 }, 8, ["label", "rules"]), A("div", V1, N(o.$t("basic_info")), 1), b(Gt, { modelValue: C(t).form_data, "onUpdate:modelValue": r[2] || (r[2] = (u) => C(t).form_data = u) }, null, 8, ["modelValue"]), b(Vi), C(t).subscription_options.length ? (O(), z(le, { key: 0 }, [A("div", $1, N(o.$t("permission_setting")), 1), b(a, { "label-width": "0" }, { default: v(() => [b(c, { modelValue: C(t).form_data.user_group_ids, "onUpdate:modelValue": r[3] || (r[3] = (u) => C(t).form_data.user_group_ids = u) }, { default: v(() => [(O(true), z(le, null, gt(C(t).subscription_options, (u) => (O(), W(h, { key: u.value, label: u.value }, { default: v(() => [A("span", F1, N(u.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 })], 64)) : J("", true)]), _: 1 }, 8, ["model"])]);
  };
} });
const H1 = yt(z1, [["__scopeId", "data-v-9c65a0ba"]]), W1 = { class: "flex flex-wrap gap-2" }, q1 = ["onClick"], U1 = { class: "text-sm" }, j1 = { class: "flex flex-col gap-3 w-full" }, K1 = { class: "px-2" }, G1 = pe({ __name: "field-save", setup(n, { expose: e }) {
  const t = [{ type: "text-input", label: "\u5355\u884C\u6587\u672C", type_53ai: "text" }, { type: "paragraph", label: "\u591A\u884C\u6587\u672C", type_53ai: "textarea" }, { type: "number", label: "\u6570\u5B57", type_53ai: "inputNumber" }, { type: "paragraph", label: "\u9009\u9879", type_53ai: "select" }, { type: "paragraph", label: "\u6807\u7B7E", type_53ai: "tag" }, { type: "paragraph", label: "\u65E5\u671F", type_53ai: "date" }], i = ee(false), s = ee({ name: "", type: "text-input", value: "", placeholder: "", desc: "", required: false, maxlength: 0, showWordLimit: false, options: [], multiple: false }), o = (r) => {
    s.value.type = r.type, s.value.type_53ai = r.type_53ai;
  };
  return e({ open() {
    i.value = true;
  } }), (r, l) => {
    const a = Ut, h = et, c = jt, f = Kt, u = Ni, d = Pr, p = Eu("Delete"), g = tn, m = zu, y = Hu, w = Dt, M = Ii, S = Pu, _ = Bu("debounce");
    return O(), W(S, { modelValue: i.value, "onUpdate:modelValue": l[11] || (l[11] = (x) => i.value = x), width: "700", "destroy-on-close": "", title: "\u6DFB\u52A0" }, { footer: v(() => [b(M, { size: "large", onClick: l[10] || (l[10] = (x) => i.value = false) }, { default: v(() => l[14] || (l[14] = [G(" \u53D6\u6D88 ")])), _: 1 }), Or((O(), W(M, { type: "primary", size: "large", onClick: r.handleSave }, { default: v(() => l[15] || (l[15] = [G(" \u786E\u5B9A ")])), _: 1 }, 8, ["onClick"])), [[_]])]), default: v(() => [b(w, { ref: "formRef", model: s.value, style: { height: "520px", "overflow-y": "auto" }, "label-position": "top" }, { default: v(() => [b(h, { label: "\u53D8\u91CF\u540D\u79F0", prop: "variable", required: "", rules: r.$rules.variable() }, { default: v(() => [b(a, { modelValue: s.value.variable, "onUpdate:modelValue": l[0] || (l[0] = (x) => s.value.variable = x), size: "large", placeholder: "\u8BF7\u8F93\u5165" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["rules"]), b(h, { label: "\u663E\u793A\u540D\u79F0", prop: "label", required: "", rules: r.$rules.required("\u8BF7\u8F93\u5165\u663E\u793A\u540D\u79F0") }, { default: v(() => [b(a, { modelValue: s.value.label, "onUpdate:modelValue": l[1] || (l[1] = (x) => s.value.label = x), size: "large", placeholder: "\u8BF7\u8F93\u5165" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["rules"]), b(h, { label: "\u53D8\u91CF\u7C7B\u578B" }, { default: v(() => [A("div", W1, [(O(), z(le, null, gt(t, (x) => A("div", { key: x.type, class: An(["w-[112px] h-12 border rounded flex-center gap-1 cursor-pointer", [s.value.type_53ai === x.type_53ai ? "border-[#2563EB] text-[#2563EB] bg-[#2563EB] bg-opacity-[8%]" : "text-[#182B50] bg-[#F9FAFC]"]]), onClick: (D) => o(x) }, [A("span", U1, N(x.label), 1)], 10, q1)), 64))])]), _: 1 }), ["text", "textarea", "select"].includes(s.value.type_53ai) ? (O(), W(h, { key: 0, label: "\u5F15\u5BFC\u8BED" }, { default: v(() => [b(a, { modelValue: s.value.placeholder, "onUpdate:modelValue": l[2] || (l[2] = (x) => s.value.placeholder = x), size: "large", placeholder: "\u8BF7\u8F93\u5165" }, null, 8, ["modelValue"])]), _: 1 })) : J("", true), ["date"].includes(s.value.type_53ai) ? (O(), W(h, { key: 1, label: "\u9009\u62E9\u683C\u5F0F" }, { default: v(() => [b(f, { modelValue: s.value.mode, "onUpdate:modelValue": l[3] || (l[3] = (x) => s.value.mode = x), class: "w-full", size: "large", placeholder: "\u8BF7\u9009\u62E9" }, { default: v(() => [b(c, { label: "\u5E74", value: "y" }), b(c, { label: "\u5E74/\u6708", value: "y-m" }), b(c, { label: "\u5E74/\u6708/\u65E5", value: "y-m-d" }), b(c, { label: "\u65F6/\u5206", value: "h-m" }), b(c, { label: "\u65F6\u95F4\u8303\u56F4", value: "daterange" })]), _: 1 }, 8, ["modelValue"])]), _: 1 })) : J("", true), b(h, { label: "\u63CF\u8FF0" }, { default: v(() => [b(a, { modelValue: s.value.desc, "onUpdate:modelValue": l[4] || (l[4] = (x) => s.value.desc = x), size: "large", placeholder: "\u8BF7\u8F93\u5165" }, null, 8, ["modelValue"])]), _: 1 }), b(h, { label: "\u662F\u5426\u5FC5\u586B" }, { default: v(() => [b(u, { modelValue: s.value.required, "onUpdate:modelValue": l[5] || (l[5] = (x) => s.value.required = x) }, null, 8, ["modelValue"])]), _: 1 }), ["text", "textarea"].includes(s.value.type_53ai) ? (O(), W(h, { key: 2, label: "\u6700\u5927\u8F93\u5165\u5B57\u6570" }, { default: v(() => [b(d, { modelValue: s.value.max_length, "onUpdate:modelValue": l[6] || (l[6] = (x) => s.value.max_length = x), style: { width: "100%" }, precision: 0, controls: false, size: "large", placeholder: "\u8BF7\u8F93\u5165" }, null, 8, ["modelValue"])]), _: 1 })) : J("", true), ["text", "textarea"].includes(s.value.type_53ai) ? (O(), W(h, { key: 3, label: "\u662F\u5426\u5C55\u793A\u5B57\u6570" }, { default: v(() => [b(u, { modelValue: s.value.showWordLimit, "onUpdate:modelValue": l[7] || (l[7] = (x) => s.value.showWordLimit = x) }, null, 8, ["modelValue"])]), _: 1 })) : J("", true), s.value.type_53ai === "select" ? (O(), W(h, { key: 4, label: "\u9009\u9879" }, { default: v(() => [A("div", j1, [(O(true), z(le, null, gt(s.value.options, (x, D) => (O(), z("div", { key: x.value, class: "flex items-center" }, [b(a, { modelValue: x.label, "onUpdate:modelValue": (B) => x.label = B, class: "flex-1", size: "large", placeholder: "\u8BF7\u8F93\u5165" }, null, 8, ["modelValue", "onUpdate:modelValue"]), A("div", K1, [b(g, { class: "cursor-pointer", color: "#999999", onClick: (B) => r.handleDelOption(D) }, { default: v(() => [b(p)]), _: 2 }, 1032, ["onClick"])])]))), 128))]), A("div", { class: "w-full h-10 leading-10 rounded text-center border border-dashed border-[#DCDFE6] cursor-pointer text-sm text-[#182B50] text-opacity-80 mt-3", onClick: l[8] || (l[8] = (x) => r.handleAddOption()) }, " + \u6DFB\u52A0 ")]), _: 1 })) : J("", true), s.value.type_53ai === "select" ? (O(), W(h, { key: 5, label: "\u6A21\u5F0F" }, { default: v(() => [b(y, { modelValue: s.value.multiple, "onUpdate:modelValue": l[9] || (l[9] = (x) => s.value.multiple = x) }, { default: v(() => [b(m, { size: "large", label: false }, { default: v(() => l[12] || (l[12] = [G(" \u5355\u9009 ")])), _: 1 }), b(m, { size: "large", label: true }, { default: v(() => l[13] || (l[13] = [G(" \u591A\u9009 ")])), _: 1 })]), _: 1 }, 8, ["modelValue"])]), _: 1 })) : J("", true)]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue"]);
  };
} });
const dl = yt(G1, [["__scopeId", "data-v-7dc0c810"]]), Y1 = { class: "w-full" }, J1 = { class: "text-[#182B50] text-opacity-60" }, X1 = { key: 0 }, Q1 = { class: "flex items-center whitespace-nowrap text-[#182B50] mt-4" }, Z1 = { class: "flex items-center whitespace-nowrap text-[#182B50] mt-4" }, ev = { class: "w-full" }, tv = { class: "text-[#182B50] text-opacity-60" }, iv = { key: 0 }, nv = { class: "h-[1px] flex overflow-hidden items-center whitespace-nowrap text-[#182B50] invisible" }, sv = { class: "flex items-center whitespace-nowrap text-[#182B50] mt-4" }, ov = { class: "flex items-center whitespace-nowrap text-[#182B50] mt-4" }, rv = pe({ __name: "limit-config", setup(n) {
  const e = ee({ request_limit: { frequency: { enable: false, interval: 1, number: 1, over_message: "" }, total: { enable: false, limit: 1, over_message: "" } } });
  return (t, i) => {
    const s = Ni, o = Pr, r = Ut, l = et;
    return O(), z(le, null, [b(l, { label: t.$t("dialogue_frequency") }, { default: v(() => [A("div", Y1, [A("div", J1, [b(s, { modelValue: e.value.request_limit.frequency.enable, "onUpdate:modelValue": i[0] || (i[0] = (a) => e.value.request_limit.frequency.enable = a), class: "mr-2" }, null, 8, ["modelValue"]), G(" " + N(e.value.request_limit.frequency.enable ? t.$t("action_open") : t.$t("action_close")), 1)]), e.value.request_limit.frequency.enable ? (O(), z("div", X1, [A("div", Q1, [G(N(t.$t("limit")), 1), b(o, { modelValue: e.value.request_limit.frequency.interval, "onUpdate:modelValue": i[1] || (i[1] = (a) => e.value.request_limit.frequency.interval = a), min: 1, controls: false, class: "mx-2 w-7", size: "large" }, null, 8, ["modelValue"]), G(" " + N(t.$t("second")) + ", " + N(t.$t("send")) + " ", 1), b(o, { modelValue: e.value.request_limit.frequency.number, "onUpdate:modelValue": i[2] || (i[2] = (a) => e.value.request_limit.frequency.number = a), min: 1, controls: false, class: "mx-2 w-7", size: "large" }, null, 8, ["modelValue"]), G(" " + N(t.$t("unit_messages")), 1)]), A("div", Z1, [G(N(t.$t("over_message")) + " ", 1), b(r, { modelValue: e.value.request_limit.frequency.over_message, "onUpdate:modelValue": i[3] || (i[3] = (a) => e.value.request_limit.frequency.over_message = a), type: "textarea", rows: 3, resize: "none", class: "mx-2", size: "large" }, null, 8, ["modelValue"])])])) : J("", true)])]), _: 1 }, 8, ["label"]), b(l, { label: t.$t("dialogue_total") }, { default: v(() => [A("div", ev, [A("div", tv, [b(s, { modelValue: e.value.request_limit.total.enable, "onUpdate:modelValue": i[4] || (i[4] = (a) => e.value.request_limit.total.enable = a), class: "mr-2" }, null, 8, ["modelValue"]), G(" " + N(e.value.request_limit.total.enable ? t.$t("action_open") : t.$t("action_close")), 1)]), e.value.request_limit.total.enable ? (O(), z("div", iv, [A("div", nv, [G(N(t.$t("limit")), 1), b(o, { min: 1, controls: false, class: "mx-2 w-7", size: "large" }), G(N(t.$t("second")) + ", " + N(t.$t("send")), 1), b(o, { min: 1, controls: false, class: "mx-2 w-7", size: "large" }), G(N(t.$t("unit_messages")), 1)]), A("div", sv, [G(N(t.$t("limit_every_dialogue")) + " ", 1), b(o, { modelValue: e.value.request_limit.total.limit, "onUpdate:modelValue": i[5] || (i[5] = (a) => e.value.request_limit.total.limit = a), min: 1, controls: false, class: "mx-2 w-7", size: "large" }, null, 8, ["modelValue"]), G(" " + N(t.$t("unit_messages_v2")), 1)]), A("div", ov, [G(N(t.$t("over_message")) + " ", 1), b(r, { modelValue: e.value.request_limit.total.over_message, "onUpdate:modelValue": i[6] || (i[6] = (a) => e.value.request_limit.total.over_message = a), type: "textarea", rows: 3, resize: "none", class: "mx-2", size: "large" }, null, 8, ["modelValue"])])])) : J("", true)])]), _: 1 }, 8, ["label"])], 64);
  };
} });
const pl = yt(rv, [["__scopeId", "data-v-11c2c6f4"]]), lv = { class: "py-7" }, av = { class: "text-base text-[#1D1E1F] font-medium" }, hv = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-6" }, cv = { class: "w-full border" }, fv = { class: "flex items-center gap-2 cursor-pointer" }, uv = { class: "w-full h-[50px] flex items-center pl-5" }, dv = { class: "w-full border" }, pv = { class: "flex items-center gap-2 cursor-pointer" }, mv = { class: "w-full h-[50px] flex items-center pl-5" }, gv = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-6" }, bv = pe({ __name: "coze-workflow", setup(n) {
  const e = [{ date: "2016-05-03", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-02", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-04", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-01", name: "Tom", address: "No. 189, Grove St, Los Angeles" }], t = ee(), i = () => {
    t.value.open();
  };
  return (s, o) => {
    const r = Ut, l = et, a = Li, h = Er, c = Ni, f = Br, u = Ii, d = jt, p = Kt, g = Dt;
    return O(), z("div", lv, [A("div", av, N(s.$t("basic_info")), 1), b(g, { "label-width": "104px", "label-position": "left", class: "mt-6" }, { default: v(() => [b(Gt), A("div", hv, N(s.$t("edit_agent")), 1), b(l, { "label-position": "top", label: s.$t("coze_workflow_link") }, { default: v(() => [b(r, { size: "large" })]), _: 1 }, 8, ["label"]), b(l, { "label-position": "top", label: s.$t("input_variable") }, { default: v(() => [A("div", cv, [b(f, { data: e, "header-cell-class-name": "!bg-[#F8F9FA] h-[46px]", "header-row-class-name": "", style: { width: "100%" } }, { default: v(() => [b(h, { prop: "date", width: "50" }, { default: v(() => [b(a, { name: "drag" })]), _: 1 }), b(h, { prop: "date", label: s.$t("display_name") }, null, 8, ["label"]), b(h, { prop: "name", label: s.$t("variable_type") }, null, 8, ["label"]), b(h, { prop: "address", label: s.$t("action_enable"), width: "90" }, { default: v(() => [b(c)]), _: 1 }, 8, ["label"]), b(h, { prop: "address", label: s.$t("operation"), width: "96" }, { default: v(() => [A("div", fv, [b(a, { name: "edit", width: "16" }), b(a, { name: "del", width: "16" })])]), _: 1 }, 8, ["label"])]), _: 1 }), A("div", uv, [b(u, { link: "", type: "primary", onClick: i }, { default: v(() => [G(" +" + N(s.$t("action_add")), 1)]), _: 1 })])])]), _: 1 }, 8, ["label"]), b(l, { "label-position": "top", label: s.$t("output_variable") }, { default: v(() => [A("div", dv, [b(f, { data: e, "header-cell-class-name": "!bg-[#F8F9FA] h-[46px]", "header-row-class-name": "", style: { width: "100%" } }, { default: v(() => [b(h, { prop: "date", width: "50" }, { default: v(() => [b(a, { name: "drag" })]), _: 1 }), b(h, { prop: "date", label: s.$t("display_name") }, null, 8, ["label"]), b(h, { prop: "name", label: s.$t("variable_type") }, null, 8, ["label"]), b(h, { prop: "address", label: s.$t("action_enable"), width: "90" }, { default: v(() => [b(c)]), _: 1 }, 8, ["label"]), b(h, { prop: "address", label: s.$t("operation"), width: "96" }, { default: v(() => [A("div", pv, [b(a, { name: "edit", width: "16" }), b(a, { name: "del", width: "16" })])]), _: 1 }, 8, ["label"])]), _: 1 }), A("div", mv, [b(u, { link: "", type: "primary", onClick: i }, { default: v(() => [G(" +" + N(s.$t("action_add")), 1)]), _: 1 })])])]), _: 1 }, 8, ["label"]), b(Vi), A("div", gv, N(s.$t("permission_setting")), 1), b(l, { label: s.$t("visible_range") }, { default: v(() => [b(p, { size: "large" }, { default: v(() => [b(d, { value: "1" }, { default: v(() => o[0] || (o[0] = [G(" \u5E02\u573A ")])), _: 1 })]), _: 1 })]), _: 1 }, 8, ["label"]), o[1] || (o[1] = A("div", { class: "border-t mb-4" }, null, -1)), b(pl)]), _: 1 }), b(dl, { ref_key: "fieldSaveRef", ref: t }, null, 512)]);
  };
} });
const yv = { class: "pb-6" }, vv = { class: "border rounded p-5 mb-7" }, wv = { class: "flex items-center justify-between" }, xv = { class: "flex items-center gap-1" }, kv = { class: "text-base text-[#1D1E1F]" }, _v = { class: "flex-center text-[#9A9A9A] gap-1 ml-1" }, Sv = { class: "text-sm" }, Cv = ["innerHTML"], Av = { key: 0 }, Mv = { class: "text-base text-[#1D1E1F] font-medium" }, Dv = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-4" }, Tv = { class: "text-[#1D1E1F]" }, Ov = pe({ __name: "dify-agent", props: { showChannelConfig: { type: Boolean, default: true } }, setup(n, { expose: e }) {
  const t = ci(), i = cn("channelConfig") || {}, s = cn("channelTypeKey") || {}, o = ee(), r = ee(false), l = hh({ key: "", base_url: "", models: [], config: { agent_type: "chat" } }), a = ee(false), h = ee(), c = async () => {
    if (!await o.value.validate())
      return;
    a.value = true;
    const d = [Ru(`${l.key}_${l.base_url}`)], p = s.value, g = { channel_id: i.value.channel_id, key: l.key, base_url: l.base_url, config: l.config, models: d, name: p }, m = await yi.save({ data: g }).finally(() => {
      a.value = false;
    });
    Object.assign(i.value, m), g.channel_id || (g.channel_id = m.channel_id), t.form_data.custom_config.channel_config = g, t.form_data.model = d[0], xi.success(window.$t("action_save_success")), r.value = true;
  }, f = async () => h.value && h.value.validate();
  return We(() => t.agent_data, ({ channel_config: u = {} } = {}) => {
    var _a2;
    r.value = !!+u.channel_id, i.value.channel_id = +u.channel_id || 0, i.value.key = l.key = u.key || "", i.value.base_url = l.base_url = u.base_url || "https://api.dify.ai/v1", i.value.models = l.models = u.models || [], i.value.config = l.config = { ...u.config || {}, agent_type: ((_a2 = u.config) == null ? void 0 : _a2.agent_type) || "chat" };
  }, { immediate: true, deep: true }), e({ validateForm: f }), (u, d) => {
    const p = Li, g = ph, m = Ii, y = Ut, w = et, M = jt, S = Kt, _ = Dt, x = Mn, D = Dn;
    return O(), z("div", yv, [Or(A("div", vv, [A("div", wv, [A("div", xv, [A("h3", kv, N(u.$t("dify")), 1), b(g, { content: "Right Top prompts info", placement: "right-start", width: "480" }, { reference: v(() => [A("div", _v, [b(p, { name: "help", width: "14", color: "#999" }), A("span", Sv, N(u.$t("how_get")), 1)])]), default: v(() => [A("div", { class: "whitespace-pre-wrap text-sm text-[#333] leading-6", innerHTML: u.$t("dify_agent_get_tip", { url: "<a class='text-[#5A6D9E] underline' href='https://dify.ai/zh' target='_blank'>https://dify.ai/zh</a>" }) }, null, 8, Cv)]), _: 1 })]), r.value ? (O(), W(m, { key: 0, type: "primary", link: "", onClick: d[0] || (d[0] = (B) => r.value = false) }, { default: v(() => [b(p, { name: "edit", width: "16", class: "mr-2" }), G(" " + N(u.$t("action_edit")), 1)]), _: 1 })) : J("", true)]), b(_, { ref_key: "channelFormRef", ref: o, model: l, "label-position": "top", class: "mt-3" }, { default: v(() => [b(w, { label: u.$t("api_host"), prop: "base_url", rules: C(Te)({ message: "form_input_placeholder", validator: ["text", "link"] }) }, { default: v(() => [b(y, { modelValue: l.base_url, "onUpdate:modelValue": d[1] || (d[1] = (B) => l.base_url = B), size: "large", placeholder: u.$t("form_input_placeholder"), disabled: r.value }, null, 8, ["modelValue", "placeholder", "disabled"])]), _: 1 }, 8, ["label", "rules"]), b(w, { label: u.$t("api_screet"), prop: "key", rules: C(Te)({ message: "form_input_placeholder" }) }, { default: v(() => [b(y, { modelValue: l.key, "onUpdate:modelValue": d[2] || (d[2] = (B) => l.key = B), size: "large", placeholder: u.$t("form_input_placeholder"), disabled: r.value }, null, 8, ["modelValue", "placeholder", "disabled"])]), _: 1 }, 8, ["label", "rules"]), b(w, { label: u.$t("agent_type"), prop: "config.agent_type", rules: C(Te)({ message: "form_input_placeholder" }) }, { default: v(() => [b(S, { modelValue: l.config.agent_type, "onUpdate:modelValue": d[3] || (d[3] = (B) => l.config.agent_type = B), class: "max-w-[360px]", size: "large", placeholder: u.$t("form_select_placeholder"), disabled: r.value }, { default: v(() => [b(M, { value: "chat", label: u.$t("agent_type_chat") }, null, 8, ["label"])]), _: 1 }, 8, ["modelValue", "placeholder", "disabled"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"]), r.value ? J("", true) : (O(), z("div", Av, [b(m, { type: "primary", class: "px-9", size: "large", loading: a.value, onClick: Rt(c, ["stop"]) }, { default: v(() => [G(N(u.$t("action_save")), 1)]), _: 1 }, 8, ["loading"]), C(i).channel_id ? (O(), W(m, { key: 0, class: "px-9", size: "large", onClick: d[4] || (d[4] = Rt((B) => r.value = true, ["stop"])) }, { default: v(() => [G(N(u.$t("action_cancel")), 1)]), _: 1 })) : J("", true)]))], 512), [[ch, n.showChannelConfig]]), J("", true), n.showChannelConfig && C(i).channel_id || !n.showChannelConfig ? (O(), z(le, { key: 1 }, [A("div", Mv, N(u.$t("basic_info")), 1), b(_, { ref_key: "agentFormRef", ref: h, model: C(t).form_data, "label-width": "104px", "label-position": "top", class: "mt-6" }, { default: v(() => [b(Gt, { modelValue: C(t).form_data, "onUpdate:modelValue": d[5] || (d[5] = (B) => C(t).form_data = B) }, null, 8, ["modelValue"]), C(t).subscription_options.length ? (O(), z(le, { key: 0 }, [A("div", Dv, N(u.$t("permission_setting")), 1), b(w, { "label-width": "0" }, { default: v(() => [b(D, { modelValue: C(t).form_data.user_group_ids, "onUpdate:modelValue": d[6] || (d[6] = (B) => C(t).form_data.user_group_ids = B) }, { default: v(() => [(O(true), z(le, null, gt(C(t).subscription_options, (B) => (O(), W(x, { key: B.value, label: B.value }, { default: v(() => [A("span", Tv, N(B.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 })], 64)) : J("", true)]), _: 1 }, 8, ["model"])], 64)) : J("", true)]);
  };
} });
const Ev = yt(Ov, [["__scopeId", "data-v-4597a7ef"]]), Bv = { class: "py-7" }, Pv = { class: "text-base text-[#1D1E1F] font-medium" }, Rv = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-6" }, Lv = { class: "w-full border" }, Iv = { class: "flex items-center gap-2 cursor-pointer" }, Nv = { class: "w-full h-[50px] flex items-center pl-5" }, Vv = { class: "w-full border" }, $v = { class: "flex items-center gap-2 cursor-pointer" }, Fv = { class: "w-full h-[50px] flex items-center pl-5" }, zv = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-6" }, Hv = pe({ __name: "dify-workflow", setup(n) {
  const e = [{ date: "2016-05-03", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-02", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-04", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-01", name: "Tom", address: "No. 189, Grove St, Los Angeles" }], t = ee(), i = () => {
    t.value.open();
  };
  return (s, o) => {
    const r = Ut, l = et, a = Li, h = Er, c = Ni, f = Br, u = Ii, d = jt, p = Kt, g = Dt;
    return O(), z("div", Bv, [A("div", Pv, N(s.$t("basic_info")), 1), b(g, { "label-width": "104px", "label-position": "left", class: "mt-6" }, { default: v(() => [b(Gt), A("div", Rv, N(s.$t("coze_workflow_link")), 1), b(l, { "label-position": "top", label: s.$t("coze_workflow_link") }, { default: v(() => [b(r, { size: "large" })]), _: 1 }, 8, ["label"]), b(l, { "label-position": "top", label: s.$t("input_variable") }, { default: v(() => [A("div", Lv, [b(f, { data: e, "header-cell-class-name": "!bg-[#F8F9FA] h-[46px]", "header-row-class-name": "", style: { width: "100%" } }, { default: v(() => [b(h, { prop: "date", width: "50" }, { default: v(() => [b(a, { name: "drag" })]), _: 1 }), b(h, { prop: "date", label: s.$t("display_name") }, null, 8, ["label"]), b(h, { prop: "name", label: s.$t("variable_type") }, null, 8, ["label"]), b(h, { prop: "address", label: s.$t("action_enable"), width: "90" }, { default: v(() => [b(c)]), _: 1 }, 8, ["label"]), b(h, { prop: "address", label: s.$t("operation"), width: "96" }, { default: v(() => [A("div", Iv, [b(a, { name: "edit", width: "16" }), b(a, { name: "del", width: "16" })])]), _: 1 }, 8, ["label"])]), _: 1 }), A("div", Nv, [b(u, { link: "", type: "primary", onClick: i }, { default: v(() => [G(" +" + N(s.$t("action_add")), 1)]), _: 1 })])])]), _: 1 }, 8, ["label"]), b(l, { "label-position": "top", label: s.$t("output_variable") }, { default: v(() => [A("div", Vv, [b(f, { data: e, "header-cell-class-name": "!bg-[#F8F9FA] h-[46px]", "header-row-class-name": "", style: { width: "100%" } }, { default: v(() => [b(h, { prop: "date", width: "50" }, { default: v(() => [b(a, { name: "drag" })]), _: 1 }), b(h, { prop: "date", label: s.$t("display_name") }, null, 8, ["label"]), b(h, { prop: "name", label: s.$t("variable_type") }, null, 8, ["label"]), b(h, { prop: "address", label: s.$t("action_enable"), width: "90" }, { default: v(() => [b(c)]), _: 1 }, 8, ["label"]), b(h, { prop: "address", label: s.$t("operation"), width: "96" }, { default: v(() => [A("div", $v, [b(a, { name: "edit", width: "16" }), b(a, { name: "del", width: "16" })])]), _: 1 }, 8, ["label"])]), _: 1 }), A("div", Fv, [b(u, { link: "", type: "primary", onClick: i }, { default: v(() => [G(" +" + N(s.$t("action_add")), 1)]), _: 1 })])])]), _: 1 }, 8, ["label"]), A("div", zv, N(s.$t("permission_setting")), 1), b(l, { label: s.$t("visible_range") }, { default: v(() => [b(p, { size: "large" }, { default: v(() => [b(d, { value: "1" }, { default: v(() => o[0] || (o[0] = [G(" \u5E02\u573A ")])), _: 1 })]), _: 1 })]), _: 1 }, 8, ["label"]), o[1] || (o[1] = A("div", { class: "border-t mb-4" }, null, -1)), b(pl)]), _: 1 }), b(dl, { ref_key: "fieldSaveRef", ref: t }, null, 512)]);
  };
} }), Wv = { class: "pb-6" }, qv = { class: "border rounded p-5 mb-7" }, Uv = { class: "flex items-center justify-between" }, jv = { class: "flex items-center gap-1" }, Kv = { class: "text-base text-[#1D1E1F]" }, Gv = { class: "flex-center text-[#9A9A9A] gap-1 ml-1" }, Yv = { class: "text-sm" }, Jv = ["innerHTML"], Xv = { key: 0 }, Qv = { class: "text-base text-[#1D1E1F] font-medium" }, Zv = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-4" }, ew = { class: "text-[#1D1E1F]" }, tw = pe({ __name: "53ai-agent", props: { showChannelConfig: { type: Boolean, default: true } }, setup(n, { expose: e }) {
  const t = ci(), i = cn("channelConfig") || {}, s = cn("channelTypeKey") || {}, o = ee(), r = ee(false), l = hh({ key: "", base_url: "", models: [], model: "", config: { agent_type: "chat" } }), a = ee(false), h = ee(), c = async () => {
    if (!await o.value.validate())
      return;
    a.value = true;
    const d = [l.model], p = s.value, g = { channel_id: i.value.channel_id, key: l.key, base_url: l.base_url, config: l.config, models: d, name: p }, m = await yi.save({ data: g }).finally(() => {
      a.value = false;
    });
    Object.assign(i.value, m), g.channel_id || (g.channel_id = m.channel_id), t.form_data.custom_config.channel_config = g, t.form_data.model = d[0], xi.success(window.$t("action_save_success")), r.value = true;
  }, f = async () => h.value && h.value.validate();
  return We(() => t.agent_data, ({ channel_config: u = {} } = {}) => {
    var _a2;
    r.value = !!+u.channel_id, i.value.channel_id = +u.channel_id || 0, i.value.key = l.key = u.key || "", i.value.base_url = l.base_url = u.base_url || "https://api.53ai.com/v3", i.value.models = l.models = u.models || [], i.value.model = l.model = l.models[0] || "", i.value.config = l.config = { ...u.config || {}, agent_type: ((_a2 = u.config) == null ? void 0 : _a2.agent_type) || "chat" };
  }, { immediate: true, deep: true }), e({ validateForm: f }), (u, d) => {
    const p = Li, g = ph, m = Ii, y = Ut, w = et, M = jt, S = Kt, _ = Dt, x = Mn, D = Dn;
    return O(), z("div", Wv, [Or(A("div", qv, [A("div", Uv, [A("div", jv, [A("h3", Kv, N(u.$t("53ai")), 1), b(g, { content: "Right Top prompts info", placement: "right-start", width: "480" }, { reference: v(() => [A("div", Gv, [b(p, { name: "help", width: "14", color: "#999" }), A("span", Yv, N(u.$t("how_get")), 1)])]), default: v(() => [A("div", { class: "whitespace-pre-wrap text-sm text-[#333] leading-6", innerHTML: u.$t("53ai_agent_get_tip", { url: "<a class='text-[#5A6D9E] underline' href='https://www.53ai.com' target='_blank'>https://www.53ai.com</a>" }) }, null, 8, Jv)]), _: 1 })]), r.value ? (O(), W(m, { key: 0, type: "primary", link: "", onClick: d[0] || (d[0] = (B) => r.value = false) }, { default: v(() => [b(p, { name: "edit", width: "16", class: "mr-2" }), G(" " + N(u.$t("action_edit")), 1)]), _: 1 })) : J("", true)]), b(_, { ref_key: "channelFormRef", ref: o, model: l, "label-position": "top", class: "mt-3" }, { default: v(() => [b(w, { label: u.$t("53ai_api_endpoint"), prop: "base_url", rules: C(Te)({ message: "form_input_placeholder", validator: ["text", "link"] }) }, { default: v(() => [b(y, { modelValue: l.base_url, "onUpdate:modelValue": d[1] || (d[1] = (B) => l.base_url = B), size: "large", placeholder: u.$t("form_input_placeholder"), disabled: r.value }, null, 8, ["modelValue", "placeholder", "disabled"])]), _: 1 }, 8, ["label", "rules"]), b(w, { label: u.$t("api_botid"), prop: "model", rules: C(Te)({ message: "form_input_placeholder" }) }, { default: v(() => [b(y, { modelValue: l.model, "onUpdate:modelValue": d[2] || (d[2] = (B) => l.model = B), size: "large", placeholder: u.$t("form_input_placeholder"), disabled: r.value }, null, 8, ["modelValue", "placeholder", "disabled"])]), _: 1 }, 8, ["label", "rules"]), b(w, { label: u.$t("53ai_api_screet"), prop: "key", rules: C(Te)({ message: "form_input_placeholder" }) }, { default: v(() => [b(y, { modelValue: l.key, "onUpdate:modelValue": d[3] || (d[3] = (B) => l.key = B), size: "large", placeholder: u.$t("form_input_placeholder"), disabled: r.value }, null, 8, ["modelValue", "placeholder", "disabled"])]), _: 1 }, 8, ["label", "rules"]), b(w, { label: u.$t("agent_type"), prop: "config.agent_type", rules: C(Te)({ message: "form_input_placeholder" }) }, { default: v(() => [b(S, { modelValue: l.config.agent_type, "onUpdate:modelValue": d[4] || (d[4] = (B) => l.config.agent_type = B), class: "max-w-[360px]", size: "large", placeholder: u.$t("form_select_placeholder"), disabled: r.value }, { default: v(() => [b(M, { value: "chat", label: u.$t("agent_type_chat") }, null, 8, ["label"])]), _: 1 }, 8, ["modelValue", "placeholder", "disabled"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"]), r.value ? J("", true) : (O(), z("div", Xv, [b(m, { type: "primary", class: "px-9", size: "large", loading: a.value, onClick: Rt(c, ["stop"]) }, { default: v(() => [G(N(u.$t("action_save")), 1)]), _: 1 }, 8, ["loading"]), C(i).channel_id ? (O(), W(m, { key: 0, class: "px-9", size: "large", onClick: d[5] || (d[5] = Rt((B) => r.value = true, ["stop"])) }, { default: v(() => [G(N(u.$t("action_cancel")), 1)]), _: 1 })) : J("", true)]))], 512), [[ch, n.showChannelConfig]]), n.showChannelConfig && C(i).channel_id || !n.showChannelConfig ? (O(), z(le, { key: 0 }, [A("div", Qv, N(u.$t("basic_info")), 1), b(_, { ref_key: "agentFormRef", ref: h, model: C(t).form_data, "label-width": "104px", "label-position": "top", class: "mt-6" }, { default: v(() => [b(Gt, { modelValue: C(t).form_data, "onUpdate:modelValue": d[6] || (d[6] = (B) => C(t).form_data = B) }, null, 8, ["modelValue"]), b(Vi), C(t).subscription_options.length ? (O(), z(le, { key: 0 }, [A("div", Zv, N(u.$t("permission_setting")), 1), b(w, { "label-width": "0" }, { default: v(() => [b(D, { modelValue: C(t).form_data.user_group_ids, "onUpdate:modelValue": d[7] || (d[7] = (B) => C(t).form_data.user_group_ids = B) }, { default: v(() => [(O(true), z(le, null, gt(C(t).subscription_options, (B) => (O(), W(x, { key: B.value, label: B.value }, { default: v(() => [A("span", ew, N(B.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 })], 64)) : J("", true)]), _: 1 }, 8, ["model"])], 64)) : J("", true)]);
  };
} });
const iw = yt(tw, [["__scopeId", "data-v-cd8cb1e9"]]), nw = { class: "py-7" }, sw = { class: "text-base text-[#1D1E1F] font-medium" }, ow = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-6" }, rw = { class: "w-full border" }, lw = { class: "flex items-center gap-2 cursor-pointer" }, aw = { class: "w-full h-[50px] flex items-center pl-5" }, hw = { class: "w-full border" }, cw = { class: "flex items-center gap-2 cursor-pointer" }, fw = { class: "w-full h-[50px] flex items-center pl-5" }, uw = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-6" }, dw = pe({ __name: "53ai-workflow", setup(n) {
  const e = [{ date: "2016-05-03", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-02", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-04", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-01", name: "Tom", address: "No. 189, Grove St, Los Angeles" }], t = ee(), i = () => {
    t.value.open();
  };
  return (s, o) => {
    const r = Ut, l = et, a = Li, h = Er, c = Ni, f = Br, u = Ii, d = jt, p = Kt, g = Dt;
    return O(), z("div", nw, [A("div", sw, N(s.$t("basic_info")), 1), b(g, { "label-width": "104px", "label-position": "left", class: "mt-6" }, { default: v(() => [b(Gt), A("div", ow, N(s.$t("edit_agent")), 1), b(l, { "label-position": "top", label: s.$t("coze_workflow_link") }, { default: v(() => [b(r, { size: "large" })]), _: 1 }, 8, ["label"]), b(l, { "label-position": "top", label: s.$t("input_variable") }, { default: v(() => [A("div", rw, [b(f, { data: e, "header-cell-class-name": "!bg-[#F8F9FA] h-[46px]", "header-row-class-name": "", style: { width: "100%" } }, { default: v(() => [b(h, { prop: "date", width: "50" }, { default: v(() => [b(a, { name: "drag" })]), _: 1 }), b(h, { prop: "date", label: s.$t("display_name") }, null, 8, ["label"]), b(h, { prop: "name", label: s.$t("variable_type") }, null, 8, ["label"]), b(h, { prop: "address", label: s.$t("action_enable"), width: "90" }, { default: v(() => [b(c)]), _: 1 }, 8, ["label"]), b(h, { prop: "address", label: s.$t("operation"), width: "96" }, { default: v(() => [A("div", lw, [b(a, { name: "edit", width: "16" }), b(a, { name: "del", width: "16" })])]), _: 1 }, 8, ["label"])]), _: 1 }), A("div", aw, [b(u, { link: "", type: "primary", onClick: i }, { default: v(() => [G(" +" + N(s.$t("action_add")), 1)]), _: 1 })])])]), _: 1 }, 8, ["label"]), b(l, { "label-position": "top", label: s.$t("output_variable") }, { default: v(() => [A("div", hw, [b(f, { data: e, "header-cell-class-name": "!bg-[#F8F9FA] h-[46px]", "header-row-class-name": "", style: { width: "100%" } }, { default: v(() => [b(h, { prop: "date", width: "50" }, { default: v(() => [b(a, { name: "drag" })]), _: 1 }), b(h, { prop: "date", label: s.$t("display_name") }, null, 8, ["label"]), b(h, { prop: "name", label: s.$t("variable_type") }, null, 8, ["label"]), b(h, { prop: "address", label: s.$t("action_enable"), width: "90" }, { default: v(() => [b(c)]), _: 1 }, 8, ["label"]), b(h, { prop: "address", label: s.$t("operation"), width: "96" }, { default: v(() => [A("div", cw, [b(a, { name: "edit", width: "16" }), b(a, { name: "del", width: "16" })])]), _: 1 }, 8, ["label"])]), _: 1 }), A("div", fw, [b(u, { link: "", type: "primary", onClick: i }, { default: v(() => [G(" +" + N(s.$t("action_add")), 1)]), _: 1 })])])]), _: 1 }, 8, ["label"]), b(Vi), A("div", uw, N(s.$t("permission_setting")), 1), b(l, { label: s.$t("visible_range") }, { default: v(() => [b(p, { size: "large" }, { default: v(() => [b(d, { value: "1" }, { default: v(() => o[0] || (o[0] = [G(" \u5E02\u573A ")])), _: 1 })]), _: 1 })]), _: 1 }, 8, ["label"]), o[1] || (o[1] = A("div", { class: "border-t mb-4" }, null, -1)), b(pl)]), _: 1 }), b(dl, { ref_key: "fieldSaveRef", ref: t }, null, 512)]);
  };
} }), pw = { class: "py-7" }, mw = { class: "text-base text-[#1D1E1F] font-medium" }, gw = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-6" }, bw = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-4" }, yw = { class: "text-[#1D1E1F]" }, vw = pe({ __name: "app-builder-agent", setup(n, { expose: e }) {
  Tr();
  const t = ci(), i = ee();
  return e({ validateForm: async () => i.value.validate() }), (o, r) => {
    const l = Rr, a = et, h = Mn, c = Dn, f = Dt;
    return O(), z("div", pw, [A("div", mw, N(o.$t("basic_info")), 1), b(f, { ref_key: "form_ref", ref: i, model: C(t).form_data, "label-width": "104px", "label-position": "top", class: "mt-6" }, { default: v(() => [b(Gt, { modelValue: C(t).form_data, "onUpdate:modelValue": r[0] || (r[0] = (u) => C(t).form_data = u) }, null, 8, ["modelValue"]), A("div", gw, N(o.$t("select_agent")), 1), b(a, { prop: "custom_config.app_builder_bot_id", rules: C(Te)({ message: "form_select_placeholder" }) }, { default: v(() => [b(l, { modelValue: C(t).form_data.custom_config.app_builder_bot_id, "onUpdate:modelValue": r[1] || (r[1] = (u) => C(t).form_data.custom_config.app_builder_bot_id = u), size: "large", options: C(t).app_builder_bot_options }, null, 8, ["modelValue", "options"])]), _: 1 }, 8, ["rules"]), b(Vi), C(t).subscription_options.length ? (O(), z(le, { key: 0 }, [A("div", bw, N(o.$t("permission_setting")), 1), b(a, { "label-width": "0" }, { default: v(() => [b(c, { modelValue: C(t).form_data.user_group_ids, "onUpdate:modelValue": r[2] || (r[2] = (u) => C(t).form_data.user_group_ids = u) }, { default: v(() => [(O(true), z(le, null, gt(C(t).subscription_options, (u) => (O(), W(h, { key: u.value, label: u.value }, { default: v(() => [A("span", yw, N(u.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 })], 64)) : J("", true)]), _: 1 }, 8, ["model"])]);
  };
} });
const ww = yt(vw, [["__scopeId", "data-v-10f5bd12"]]), Lw = pe({ __name: "index", props: { agentType: {} }, setup(n, { expose: e }) {
  const t = ee();
  return e({ get save() {
    return t.value.save;
  }, get validateForm() {
    return t.value.validateForm;
  } }), (i, s) => i.agentType === C(pi) ? (O(), W(L1, { key: 0, ref_key: "viewRef", ref: t }, null, 512)) : i.agentType === C(dh) ? (O(), W(H1, { key: 1, ref_key: "viewRef", ref: t }, null, 512)) : i.agentType === "coze-workflow" ? (O(), W(bv, { key: 2, ref_key: "viewRef", ref: t }, null, 512)) : i.agentType === C(uh) ? (O(), W(Ev, { key: 3, ref_key: "viewRef", ref: t }, null, 512)) : i.agentType === "dify-workflow" ? (O(), W(Hv, { key: 4, ref_key: "viewRef", ref: t }, null, 512)) : i.agentType === C(fh) ? (O(), W(iw, { key: 5, ref_key: "viewRef", ref: t }, null, 512)) : i.agentType === "53ai-workflow" ? (O(), W(dw, { key: 6, ref_key: "viewRef", ref: t }, null, 512)) : i.agentType === C(Eo) ? (O(), W(ww, { key: 7, ref_key: "viewRef", ref: t }, null, 512)) : J("", true);
} });
export {
  Lw as _,
  ci as u
};
