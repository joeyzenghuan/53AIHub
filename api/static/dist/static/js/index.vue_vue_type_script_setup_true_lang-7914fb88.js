var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { W as qe, b as de, F as W, X as Oe, G as j, E as Q, d as R, c as K, D as ye, A as Me, Y as ae, Z as se, f as M, y as ne, O as He, N as Ye, e as X, g as We, x as we, _ as $e, $ as Ue } from "./element-plus-c72880c6.js";
import { a as je } from "./@vueuse-7fa053fd.js";
import { d as N, e as A, j as ue, i as Ie, o as c, c as w, J as E, a as r, A as Ne, I as ce, Q as ge, $ as Ke, G as C, H as U, h as ke, ae as Je, K as t, u, L as be, ac as q, P as m, B as Ze, M as e, f as _e, n as ie, D as Qe, O as Y, a2 as z, af as Xe, an as et, S as Ve, k as pe, V as Pe, T as Be } from "./@vue-3b855f7b.js";
import { f as O, D as Z, J as tt, H as lt, G as ot, C as Ce, l as I, k as at, _ as ee, K as st } from "./index-76ebd052.js";
import { d as nt } from "./pinia-6f4b1ece.js";
import { A as it, a as Te, f as re, e as Le, d as Re, g as dt, c as he, b as Ge } from "./agent-6508b772.js";
import { g as Ae, G as rt, b as ut } from "./group-89b8a1af.js";
import { _ as _t } from "./image.vue_vue_type_style_index_0_lang-58647f4f.js";
import { T as pt } from "./vue-codemirror-0523f0f1.js";
import { S as ct, F as mt, G as ft, M as bt, H as De, V as vt, z as ve, o as gt, W as ht } from "./@codemirror-a2adbe38.js";
const yt = N({ __name: "index", props: { target: { default: "body" }, flex: { type: Boolean, default: false }, zIndex: { default: 0 } }, emits: ["zoom"], setup(h, { emit: n }) {
  const l = h, s = n, { nextZIndex: a } = qe(), b = A(), _ = A(false), o = A(0), p = ue(() => ({ "bg-black bg-opacity-25  overflow-y-auto content-container": _.value, "content-flex": l.flex })), i = ue(() => ({ zIndex: l.zIndex ? l.zIndex : a() })), y = () => {
    _.value = !_.value, s("zoom", _.value);
  };
  return Ie(() => {
    je(b, ([k]) => {
      o.value = k.target.scrollHeight;
    });
  }), (k, d) => (c(), w(U, null, [(c(), E(Ke, { to: k.target, disabled: !_.value }, [r("div", { ref_key: "contentRef", ref: b, class: ce([p.value, k.$attrs.class]), style: ge(i.value) }, [Ne(k.$slots, "default", { isopen: _.value, handler: y }, void 0, true)], 6)], 8, ["to", "disabled"])), _.value ? (c(), w("div", { key: 0, style: ge({ height: `${o.value}px` }) }, null, 4)) : C("", true)], 64));
} });
const wt = O(yt, [["__scopeId", "data-v-eb86626f"]]), $t = { class: "w-[24px] h-[24px] inline-block" }, kt = ["src"], Vt = { class: "w-[24px] h-[24px] inline-block mr-2" }, Et = ["src"], xt = { class: "w-[24px] h-[24px] inline-block mr-2" }, zt = ["src"], Ft = N({ __name: "index", props: { iconType: { default: "image" }, options: { default: () => [] }, filterable: { type: Boolean, default: true }, size: { default: "large" } }, emits: ["change"], setup(h, { emit: n }) {
  const { proxy: l } = ke(), s = h, a = n, b = ue(() => {
    const o = l.$attrs.modelValue;
    let p = {};
    return s.options.forEach((i = {}) => {
      i.options ? i.options.forEach((y = {}) => {
        y.value === o && (p = y);
      }) : i.value === o && (p = i);
    }), p;
  }), _ = (o) => {
    a("change", { value: o });
  };
  return (o, p) => {
    const i = W, y = Oe, k = j;
    return c(), E(k, Ze(o.$attrs, { filterable: o.filterable, size: o.size, onChange: _ }), Je({ default: t(() => [Ne(o.$slots, "default", {}, () => [(c(true), w(U, null, q(o.options, (d) => (c(), w(U, { key: d.value }, [d.options ? (c(), E(y, { key: 0, label: o.$t(d.label) }, { default: t(() => [(c(true), w(U, null, q(d.options, (f) => (c(), E(i, { key: f.value, label: o.$t(f.label), value: f.value }, { default: t(() => [r("div", Vt, [o.iconType === "image" ? (c(), w("img", { key: 0, src: f.icon, class: "h-full inline-block object-cover" }, null, 8, Et)) : o.iconType === "icon" ? (c(), E(u(de), { key: 1, class: "text-lg" }, { default: t(() => [(c(), E(be(f.icon)))]), _: 2 }, 1024)) : C("", true)]), r("span", null, m(o.$t(f.label)), 1)]), _: 2 }, 1032, ["label", "value"]))), 128))]), _: 2 }, 1032, ["label"])) : (c(), E(i, { key: 1, label: o.$t(d.label), value: d.value }, { default: t(() => [r("div", xt, [o.iconType === "image" ? (c(), w("img", { key: 0, src: d.icon, class: "h-full inline-block object-cover" }, null, 8, zt)) : o.iconType === "icon" ? (c(), E(u(de), { key: 1, class: "w-[24px] h-[24px] text-lg" }, { default: t(() => [(c(), E(be(d.icon)))]), _: 2 }, 1024)) : C("", true)]), r("span", null, m(o.$t(d.label)), 1)]), _: 2 }, 1032, ["label", "value"]))], 64))), 128))], true)]), _: 2 }, [b.value.icon ? { name: "prefix", fn: t(() => [r("div", $t, [o.iconType === "image" ? (c(), w("img", { key: 0, src: b.value.icon, class: "h-full inline-block object-cover" }, null, 8, kt)) : o.iconType === "icon" ? (c(), E(u(de), { key: 1, class: "text-lg" }, { default: t(() => [(c(), E(be(b.value.icon)))]), _: 1 })) : C("", true)])]), key: "0" } : void 0]), 1040, ["filterable", "size"]);
  };
} });
const Ee = O(Ft, [["__scopeId", "data-v-2f12ca84"]]), Se = { temperature: 0.2, top_p: 0.75, presence_penalty: 0.5, frequency_penalty: 0.5 }, te = nt("agent-form-store", { state: () => ({ saving: false, loading: false, agent_id: 0, agent_type: "prompt", form_data: { logo: "", name: "", group_id: 0, description: "", channel_type: 0, model: "", sort: 0, prompt: "", user_group_ids: [], tools: [], use_cases: [], configs: {}, custom_config: { agent_type: "prompt", coze_workspace_id: "", coze_bot_id: "", app_builder_bot_id: "", channel_config: {} } }, agent_data: {}, group_options: [], channel_options: [], subscription_options: [], model_options: [], coze_workspace_options: [], coze_bot_options: [], app_builder_bot_options: [] }), getters: { agent_option_data: (h) => {
  let n = {};
  return it.forEach((l) => {
    const s = l.children.find((a) => a.value == h.agent_type);
    s && (n = JSON.parse(JSON.stringify(s)));
  }), n;
} }, actions: { async loadDetailData() {
  if (!this.agent_id)
    return Promise.resolve();
  this.loading = true;
  try {
    this.agent_data = await Te.detail({ data: { agent_id: this.agent_id } }), this.updateFormData();
  } finally {
    this.loading = false;
  }
}, updateFormData() {
  var _a;
  this.agent_type = this.agent_data.agent_type || this.agent_type || "", Object.assign(this.form_data, { logo: this.agent_data.logo || ((_a = this.agent_option_data) == null ? void 0 : _a.icon) || "", name: this.agent_data.name || "", group_id: +this.agent_data.group_id || 0, description: this.agent_data.description || "", channel_type: +this.agent_data.channel_type || 0, model: this.agent_data.model || "", sort: +this.agent_data.sort || 0, prompt: this.agent_data.prompt || "", user_group_ids: this.agent_data.user_group_ids || [], tools: this.agent_data.tools || [], use_cases: this.agent_data.use_cases || [], configs: this.agent_data.configs && Object.keys(this.agent_data.configs).length > 0 ? this.agent_data.configs : { completion_params: Se }, enable: !!+this.agent_data.enable || false, custom_config: { agent_type: this.agent_type, coze_workspace_id: "", coze_bot_id: "", app_builder_bot_id: "", channel_config: {}, ...this.agent_data.custom_config || {} } }), this.agent_type === re && (this.form_data.model = `${this.agent_data.channel_type}_${this.agent_data.model}` || "");
}, async loadGroupOptions() {
  const h = await Ae.list({ params: { group_type: rt } });
  this.group_options = (h || []).map((n) => (n.value = +n.group_id || 0, n.label = n.group_name || "", n)), this.group_options.length && !this.form_data.group_id && (this.form_data.group_id = this.group_options[0].value), this.group_options.find((n) => n.value === this.form_data.group_id) || (this.form_data.group_id = "");
}, async loadChannelOptions() {
  let h = await Z.list();
  this.channel_options = (h || []).filter((s = {}) => [tt, lt, ot].includes(s.type));
  const n = [];
  this.model_options = this.channel_options.map((s = {}) => (s.value = String(s.channel_type || s.channel_id || ""), s.icon = window.$getRealPath({ url: `/images/platform/${s.icon}.png` }), s.options = (s.model_options || []).map((a = {}) => (a.value = `${s.value}_${a.value}`, a.icon = window.$getRealPath({ url: `/images/platform/${a.icon}.png` }), a)), n.push(...s.options), s)), n.length && !this.form_data.model && (this.form_data.model = n[0].value), [re].includes(this.agent_type) && !n.find((s) => s.value === this.form_data.model) && (this.form_data.model = "");
  let l = this.channel_options.find((s) => s.channel_type == Ce.get(this.agent_type));
  switch (this.agent_type) {
    case Re:
    case Le:
      l && l.models && l.models[0] && (this.form_data.model = l.models[0]);
      break;
  }
}, async loadSubscriptionOptions() {
  const h = await Ae.list({ params: { group_type: ut } });
  this.subscription_options = (h || []).map((n) => (n.value = +n.group_id || 0, n.label = n.group_name || "", n)), !this.agent_id && this.subscription_options.length && !this.form_data.user_group_ids.length && (this.form_data.user_group_ids = this.subscription_options.map((n) => n.value));
}, async loadCozeWorkspaceOptions() {
  const h = await Z.cozeWorkspaceList();
  this.coze_workspace_options = (h || []).map((n) => (n.value = n.id || 0, n.label = n.name || "", n.icon = n.icon_url || "", n)), this.coze_workspace_options.length && !this.form_data.custom_config.coze_workspace_id && (this.form_data.custom_config.coze_workspace_id = this.coze_workspace_options[0].value), this.coze_workspace_options.find((n) => n.value === this.form_data.custom_config.coze_workspace_id) || (this.form_data.custom_config.coze_workspace_id = "");
}, async loadCozeBotOptions(h) {
  if (!h)
    return;
  const n = await Z.cozeBotList({ params: { workspace_id: h } });
  this.coze_bot_options = (n || []).map((l) => (l.value = l.bot_id || 0, l.label = l.bot_name || "", l.icon = l.icon_url || "", l)), this.coze_bot_options.length && !this.form_data.custom_config.coze_bot_id && (this.form_data.custom_config.coze_bot_id = this.coze_bot_options[0].value), this.coze_bot_options.find((l) => l.value === this.form_data.custom_config.coze_bot_id) || (this.form_data.custom_config.coze_bot_id = "");
}, async loadAppBuilderBotOptions() {
  const h = await Z.appBuilderBotList();
  this.app_builder_bot_options = (h || []).map((n) => (n.value = n.id || 0, n.value && (n.value = `bot-${n.value}`), n.label = n.name || "", n.icon = n.icon || dt.get(he) || "", n)), this.app_builder_bot_options.length && !this.form_data.custom_config.app_builder_bot_id && (this.form_data.custom_config.app_builder_bot_id = this.app_builder_bot_options[0].value), this.app_builder_bot_options.find((n) => n.value === this.form_data.custom_config.app_builder_bot_id) || (this.form_data.custom_config.app_builder_bot_id = "");
}, resetState() {
  this.saving = false, this.loading = false, this.agent_id = 0, this.agent_type = "prompt", this.form_data = { logo: "", name: "", group_id: 0, description: "", channel_type: 0, model: "", sort: 0, prompt: "", user_group_ids: [], tools: [], use_cases: [], configs: { completion_params: Se }, custom_config: { agent_type: "prompt", coze_workspace_id: "", coze_bot_id: "", app_builder_bot_id: "", channel_config: {} } }, this.agent_data = {}, this.group_options = [], this.channel_options = [], this.subscription_options = [], this.model_options = [], this.coze_workspace_options = [], this.coze_bot_options = [], this.app_builder_bot_options = [];
}, async saveAgentData({ hideToast: h = false } = {}) {
  const { logo: n = "", name: l = "", group_id: s = 0, description: a = "", model: b = "", channel_type: _ = 0, prompt: o = "", user_group_ids: p = [], use_cases: i = [], tools: y = [], sort: k = 0, configs: d = {}, enable: f, custom_config: D = {} } = this.form_data, x = { agent_id: this.agent_id || 0, channel_type: _, model: b, logo: n, name: l, group_id: +s || 0, description: a, sort: k, prompt: o, user_group_ids: p, use_cases: i, tools: y, configs: d, enable: f, custom_config: D };
  switch (_ || (x.channel_type = Ce.get(this.agent_type) || 0), this.agent_type) {
    case re:
      x.channel_type = +b.split("_")[0] || 0, x.model = b.split("_")[1] || "";
      break;
    case Ge:
      x.model = D.coze_bot_id || "";
      break;
    case he:
      x.model = D.app_builder_bot_id || "";
      break;
  }
  this.saving = true;
  const S = await Te.save({ data: x }).finally(() => {
    this.saving = false;
  });
  return h || Q.success(window.$t("action_save_success")), this.agent_data = S, this.agent_id = S.agent_id, this.agent_data;
} } }), Ct = { class: "w-full text-sm text-[#9A9A9A]" }, Tt = N({ __name: "agent-info", setup(h) {
  const n = te();
  return (l, s) => {
    const a = R, b = K, _ = W, o = j, p = ye;
    return c(), w(U, null, [e(a, { label: l.$t("avatar"), prop: "logo", rules: u(I)({ message: "form_upload_placeholder" }) }, { default: t(() => [e(_t, { modelValue: u(n).form_data.logo, "onUpdate:modelValue": s[0] || (s[0] = (i) => u(n).form_data.logo = i), class: "w-12 h-12" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"]), e(a, { label: l.$t("name"), prop: "name", rules: u(I)({ message: "form_input_placeholder" }) }, { default: t(() => [e(b, { modelValue: u(n).form_data.name, "onUpdate:modelValue": s[1] || (s[1] = (i) => u(n).form_data.name = i), size: "large", class: "max-w-[370px]", "show-word-limit": "", maxlength: "20", placeholder: l.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), e(a, { label: l.$t("group"), prop: "group_id", rules: u(I)({ message: "form_select_placeholder" }) }, { default: t(() => [e(o, { modelValue: u(n).form_data.group_id, "onUpdate:modelValue": s[2] || (s[2] = (i) => u(n).form_data.group_id = i), size: "large", class: "max-w-[370px]" }, { default: t(() => [(c(true), w(U, null, q(u(n).group_options, (i) => (c(), E(_, { key: i.value, value: i.value, label: i.label }, null, 8, ["value", "label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"]), e(a, { label: l.$t("description") }, { default: t(() => [e(b, { modelValue: u(n).form_data.description, "onUpdate:modelValue": s[3] || (s[3] = (i) => u(n).form_data.description = i), type: "textarea", rows: 6, resize: "none", "show-word-limit": "", maxlength: "200" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), e(a, { label: l.$t("action_sort"), prop: "sort", rules: u(I)({ message: "form_input_placeholder" }) }, { default: t(() => [e(p, { modelValue: u(n).form_data.sort, "onUpdate:modelValue": s[4] || (s[4] = (i) => u(n).form_data.sort = i), class: "!w-[300px]", size: "large", controls: false, precision: 0, min: 0, max: 99999999, placeholder: l.$t("form_input_placeholder"), onKeydown: l.$numberInputKeydownHandler }, null, 8, ["modelValue", "placeholder", "onKeydown"]), r("div", Ct, m(l.$t("module.agent_sort_desc")), 1)]), _: 1 }, 8, ["label", "rules"])], 64);
  };
} });
const J = O(Tt, [["__scopeId", "data-v-5ed0e72e"]]), At = { key: 0, class: "px-2 py-px text-right text-[#182B50] text-opacity-60 text-xs" }, Dt = N({ __name: "input", props: { modelValue: { default: "" }, placeholder: { default: "form_input_placeholder" }, disabled: { type: Boolean, default: false }, showLine: { type: Boolean, default: false }, showToken: { type: Boolean, default: false }, variables: { default: () => [] }, wordWrap: { type: Boolean, default: true } }, emits: ["change", "input", "update:modelValue", "focus", "blur"], setup(h, { expose: n, emit: l }) {
  const s = h, a = l, b = A(), _ = A(null), o = A(null), p = A(0), i = A(""), y = A(-1), k = ct.define(), d = mt.define({ create() {
    return null;
  }, update(v, g) {
    for (const T of g.effects)
      if (T.is(k))
        return T.value;
    return v;
  }, provide: (v) => ft.from(v) }), f = (v) => {
    for (const g of s.variables) {
      const T = g.children.find((le) => le.value === v);
      if (T)
        return { ...T, group: g.label };
    }
    return null;
  };
  class D extends ht {
    constructor(g, T) {
      super();
      __publicField(this, "name");
      __publicField(this, "value");
      this.name = g, this.value = T;
    }
    eq(g) {
      return this.name === g.name;
    }
    toDOM() {
      const g = document.createElement("span");
      return g.style.cssText = `
      color: rgb(42, 100, 231);
      padding: 0 4px;`, g.textContent = this.name, g;
    }
    ignoreEvent() {
      return false;
    }
  }
  const x = new bt({ regexp: /(\{\#(\S+?)\#\}|\{\{(\S+?)\}\})/g, decoration: (v) => {
    const g = f(v[0]);
    return g ? De.replace({ widget: new D(g == null ? void 0 : g.label, v[1]) }) : "";
  } }), S = vt.fromClass(class {
    constructor(v) {
      __publicField(this, "variablePlugin");
      this.variablePlugin = x.createDeco(v);
    }
    update(v) {
      this.variablePlugin = x.updateDeco(v, this.variablePlugin);
    }
  }, { decorations: (v) => v.variablePlugin, provide: (v) => ve.atomicRanges.of((g) => {
    var _a;
    return ((_a = g.plugin(v)) == null ? void 0 : _a.variablePlugin) || De.none;
  }) }), P = () => {
    ie(() => {
      a("update:modelValue", i.value), a("change", i.value), a("input", i.value);
    });
  }, F = (v, g, T) => {
    _.value.dispatch({ changes: { from: v, to: g, insert: T } });
  }, L = () => {
    o.value.querySelectorAll(".tooltip-item").forEach((g, T) => {
      T === y.value ? (g.classList.add("selected"), g.scrollIntoView({ block: "nearest" })) : g.classList.remove("selected");
    });
  }, B = () => {
    _.value && _.value.dispatch({ effects: k.of(null) }), document.removeEventListener("keydown", G, true);
  }, G = (v) => {
    if (!o.value)
      return;
    const g = o.value.querySelectorAll(".tooltip-item");
    switch (v.key) {
      case "ArrowDown":
      case "ArrowUp":
        v.preventDefault(), v.stopPropagation();
        const T = v.key === "ArrowDown" ? 1 : -1;
        y.value = Math.max(0, Math.min(y.value + T, g.length - 1)), L();
        break;
      case "Enter":
        v.preventDefault(), v.stopPropagation(), y.value >= 0 && (g[y.value].click(), B());
        break;
    }
  }, V = (v, g) => {
    const T = document.createElement("div");
    T.className = "variable-tooltip", o.value = T, s.variables.forEach((le) => {
      const me = document.createElement("div");
      me.className = "tooltip-title", me.textContent = le.label, T.appendChild(me), le.children.forEach((fe) => {
        const oe = document.createElement("div");
        oe.className = "tooltip-item", oe.textContent = fe.label, oe.dataset.value = fe.value, oe.onclick = () => {
          F(v, g, fe.value), B();
        }, T.appendChild(oe);
      });
    }), _.value.dispatch({ effects: k.of({ pos: v, above: true, create: () => ({ dom: T }) }) }), ie(() => {
      y.value = 0, L(), document.addEventListener("keydown", G, true);
    });
  }, H = ue(() => {
    const v = [ve.updateListener.of((g) => {
      _.value = g.view, g.docChanged && g.view.dispatch({ effects: k.of(null) });
    })];
    return s.wordWrap && v.push(ve.lineWrapping), s.variables && s.variables.length && v.push(S, d, gt.of([{ key: "/", run(g) {
      const T = g.state.selection.main.head;
      return setTimeout(() => {
        g.state.selection.main.head === T + 1 && V(T, T + 1);
      }, 200), false;
    } }])), v;
  }), $ = () => {
    ie(() => {
      if (_.value) {
        const v = _.value.state.doc.lines - 1, g = _.value.state.doc.line(v).to;
        _.value.dispatch({ selection: { anchor: g, head: g }, scrollIntoView: true });
      }
    });
  };
  _e(() => s.modelValue, () => {
    i.value = s.modelValue;
  }, { immediate: true }), _e(() => s.variables, () => {
    b.value && setTimeout(async () => {
      const v = i.value;
      i.value = "", await ie(), i.value = v;
    }, 200);
  }, { deep: true });
  const Fe = (v) => {
    o.value && !o.value.contains(v.target) && B();
  };
  return Ie(() => {
    document.addEventListener("click", Fe);
  }), Qe(() => {
    document.removeEventListener("click", Fe);
  }), n({ showTooltip() {
    const v = Math.max(_.value.state.doc.length, 0);
    V(v, v);
  }, insertContent(v) {
    const g = Math.max(_.value.state.doc.length, 0);
    F(g, g, v);
  }, forceUpdate(v = "") {
    i.value = v;
  }, scrollToBottom: $ }), (v, g) => (c(), w(U, null, [e(u(pt), { ref_key: "codemirrorRef", ref: b, modelValue: i.value, "onUpdate:modelValue": g[0] || (g[0] = (T) => i.value = T), disabled: v.disabled, class: ce(["w-full prompt-code", [v.showLine ? "" : "prompt-line--hidden"]]), placeholder: v.$t(v.placeholder), "indent-with-tab": false, "tab-size": 2, extensions: H.value, style: ge(v.$attrs.style), onChange: P, onFocus: g[1] || (g[1] = (T) => a("focus")), onBlur: g[2] || (g[2] = (T) => a("blur")) }, null, 8, ["modelValue", "disabled", "class", "placeholder", "extensions", "style"]), v.showToken ? (c(), w("div", At, m(p.value) + "\u4E2Atoken ", 1)) : C("", true)], 64));
} });
const St = { class: "text-base text-[#1D1E1F] font-medium" }, Ut = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-4" }, It = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-4" }, Nt = { class: "border rounded w-full flex flex-col !bg-[#FAFBFC] overflow-auto relative" }, Pt = ["title"], Bt = { class: "flex items-center gap-1" }, Lt = ["onClick"], Rt = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-4" }, Gt = { class: "text-[#1D1E1F]" }, qt = N({ __name: "prompt", setup(h, { expose: n }) {
  const l = te(), s = A(), a = () => Q.warning(window.$t("feature_coming_soon")), b = () => Q.warning(window.$t("feature_coming_soon")), _ = async (p = "") => {
    await at(p), Q.success(window.$t("action_copy_success"));
  };
  return n({ validateForm: async () => s.value.validate() }), (p, i) => {
    const y = Ee, k = R, d = ee, f = Me, D = wt, x = ae, S = se, P = M;
    return c(), w("div", null, [r("div", St, m(p.$t("basic_info")), 1), e(P, { ref_key: "form_ref", ref: s, model: u(l).form_data, "label-width": "104px", "label-position": "top", class: "mt-6" }, { default: t(() => [e(J, { modelValue: u(l).form_data, "onUpdate:modelValue": i[0] || (i[0] = (F) => u(l).form_data = F) }, null, 8, ["modelValue"]), r("div", Ut, m(p.$t("access_model")), 1), e(k, { "label-width": "0", prop: "model", rules: u(I)({ message: "form_select_placeholder" }) }, { default: t(() => [e(y, { modelValue: u(l).form_data.model, "onUpdate:modelValue": i[1] || (i[1] = (F) => u(l).form_data.model = F), size: "large", options: u(l).model_options }, null, 8, ["modelValue", "options"])]), _: 1 }, 8, ["rules"]), r("div", It, m(p.$t("role_instruction")), 1), e(k, { "label-width": "0" }, { default: t(() => [e(D, { class: "w-full", "z-index": 9 }, { default: t(({ isopen: F, handler: L }) => [r("div", Nt, [r("div", { class: ce(["min-h-10 pl-3 pr-2 border-b flex items-center justify-between rounded-t bg-[#FBFBFC]", [F ? "sticky top-0 left-0 right-0 z-10" : ""]]) }, [r("div", { class: "flex-1 text-sm text-[#4F5052] truncate", title: p.$t("role_instruction_desc") }, " *" + m(p.$t("role_instruction_desc")), 9, Pt), r("div", Bt, [e(f, { placement: "top", content: p.$t("optimize_tip") }, { default: t(() => [r("span", { class: "flex-center gap-1 text-[#2563EB] text-sm px-1 cursor-pointer", onClick: Y(a, ["stop"]) }, [e(d, { name: "hglt", width: "18px" }), z(" " + m(p.$t("optimize")), 1)])]), _: 1 }, 8, ["content"]), i[5] || (i[5] = r("div", { class: "flex-none h-4 w-px border-r border-[#E1E2E6]" }, null, -1)), e(f, { placement: "top", content: p.$t("generate_tip") }, { default: t(() => [r("span", { class: "text-[#182B50] px-1 cursor-pointer", onClick: Y(b, ["stop"]) }, [e(d, { name: "magic-stick", width: "18px" })])]), _: 1 }, 8, ["content"]), e(f, { placement: "top", content: p.$t("action_copy") }, { default: t(() => [r("span", { class: "text-[#182B50] px-1 cursor-pointer", onClick: i[2] || (i[2] = Y((B) => _(u(l).form_data.prompt), ["stop"])) }, [e(d, { name: "copy", width: "18px" })])]), _: 1 }, 8, ["content"]), e(f, { placement: "top", content: p.$t(F ? "action_shrink" : "action_amplify") }, { default: t(() => [r("span", { class: "text-[#182B50] px-1 cursor-pointer", onClick: Y(L, ["stop"]) }, [e(d, { name: F ? "shrink" : "amplify", width: "18px" }, null, 8, ["name"])], 8, Lt)]), _: 2 }, 1032, ["content"])])], 2), e(Dt, { modelValue: u(l).form_data.prompt, "onUpdate:modelValue": i[3] || (i[3] = (B) => u(l).form_data.prompt = B), style: { height: "280px", "min-height": "max-content" }, "show-line": "" }, null, 8, ["modelValue"])])]), _: 1 })]), _: 1 }), u(l).subscription_options.length ? (c(), w(U, { key: 0 }, [r("div", Rt, m(p.$t("permission_setting")), 1), e(k, { "label-width": "0" }, { default: t(() => [e(S, { modelValue: u(l).form_data.user_group_ids, "onUpdate:modelValue": i[4] || (i[4] = (F) => u(l).form_data.user_group_ids = F) }, { default: t(() => [(c(true), w(U, null, q(u(l).subscription_options, (F) => (c(), E(x, { key: F.value, label: F.value }, { default: t(() => [r("span", Gt, m(F.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 })], 64)) : C("", true)]), _: 1 }, 8, ["model"])]);
  };
} });
const Ot = O(qt, [["__scopeId", "data-v-9dd804fa"]]), Mt = { class: "py-7" }, Ht = { class: "text-base text-[#1D1E1F] font-medium" }, Yt = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-6" }, Wt = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-4" }, jt = { class: "text-[#1D1E1F]" }, Kt = N({ __name: "coze-agent", setup(h, { expose: n }) {
  ke();
  const l = te(), s = A();
  return n({ validateForm: async () => s.value.validate() }), (b, _) => {
    const o = Ee, p = R, i = ae, y = se, k = M;
    return c(), w("div", Mt, [r("div", Ht, m(b.$t("basic_info")), 1), e(k, { ref_key: "form_ref", ref: s, model: u(l).form_data, "label-width": "104px", "label-position": "top", class: "mt-6" }, { default: t(() => [e(J, { modelValue: u(l).form_data, "onUpdate:modelValue": _[0] || (_[0] = (d) => u(l).form_data = d) }, null, 8, ["modelValue"]), r("div", Yt, m(b.$t("select_agent")), 1), e(p, { label: b.$t("workspace"), prop: "custom_config.coze_workspace_id", rules: u(I)({ message: "form_select_placeholder" }) }, { default: t(() => [e(o, { modelValue: u(l).form_data.custom_config.coze_workspace_id, "onUpdate:modelValue": _[1] || (_[1] = (d) => u(l).form_data.custom_config.coze_workspace_id = d), size: "large", options: u(l).coze_workspace_options }, null, 8, ["modelValue", "options"])]), _: 1 }, 8, ["label", "rules"]), e(p, { label: b.$t("agent"), prop: "custom_config.coze_bot_id", rules: u(I)({ message: "form_select_placeholder" }) }, { default: t(() => [e(o, { modelValue: u(l).form_data.custom_config.coze_bot_id, "onUpdate:modelValue": _[2] || (_[2] = (d) => u(l).form_data.custom_config.coze_bot_id = d), size: "large", options: u(l).coze_bot_options }, null, 8, ["modelValue", "options"])]), _: 1 }, 8, ["label", "rules"]), u(l).subscription_options.length ? (c(), w(U, { key: 0 }, [r("div", Wt, m(b.$t("permission_setting")), 1), e(p, { "label-width": "0" }, { default: t(() => [e(y, { modelValue: u(l).form_data.user_group_ids, "onUpdate:modelValue": _[3] || (_[3] = (d) => u(l).form_data.user_group_ids = d) }, { default: t(() => [(c(true), w(U, null, q(u(l).subscription_options, (d) => (c(), E(i, { key: d.value, label: d.value }, { default: t(() => [r("span", jt, m(d.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 })], 64)) : C("", true)]), _: 1 }, 8, ["model"])]);
  };
} });
const Jt = O(Kt, [["__scopeId", "data-v-0817f00a"]]), Zt = { class: "flex flex-wrap gap-2" }, Qt = ["onClick"], Xt = { class: "text-sm" }, el = { class: "flex flex-col gap-3 w-full" }, tl = { class: "px-2" }, ll = N({ __name: "field-save", setup(h, { expose: n }) {
  const l = [{ type: "text-input", label: "\u5355\u884C\u6587\u672C", type_53ai: "text" }, { type: "paragraph", label: "\u591A\u884C\u6587\u672C", type_53ai: "textarea" }, { type: "number", label: "\u6570\u5B57", type_53ai: "inputNumber" }, { type: "paragraph", label: "\u9009\u9879", type_53ai: "select" }, { type: "paragraph", label: "\u6807\u7B7E", type_53ai: "tag" }, { type: "paragraph", label: "\u65E5\u671F", type_53ai: "date" }], s = A(false), a = A({ name: "", type: "text-input", value: "", placeholder: "", desc: "", required: false, maxlength: 0, showWordLimit: false, options: [], multiple: false }), b = (_) => {
    a.value.type = _.type, a.value.type_53ai = _.type_53ai;
  };
  return n({ open() {
    s.value = true;
  } }), (_, o) => {
    const p = K, i = R, y = W, k = j, d = ne, f = ye, D = Xe("Delete"), x = de, S = He, P = Ye, F = M, L = X, B = We, G = et("debounce");
    return c(), E(B, { modelValue: s.value, "onUpdate:modelValue": o[11] || (o[11] = (V) => s.value = V), width: "700", "destroy-on-close": "", title: "\u6DFB\u52A0" }, { footer: t(() => [e(L, { size: "large", onClick: o[10] || (o[10] = (V) => s.value = false) }, { default: t(() => o[14] || (o[14] = [z(" \u53D6\u6D88 ")])), _: 1 }), Ve((c(), E(L, { type: "primary", size: "large", onClick: _.handleSave }, { default: t(() => o[15] || (o[15] = [z(" \u786E\u5B9A ")])), _: 1 }, 8, ["onClick"])), [[G]])]), default: t(() => [e(F, { ref: "formRef", model: a.value, style: { height: "520px", "overflow-y": "auto" }, "label-position": "top" }, { default: t(() => [e(i, { label: "\u53D8\u91CF\u540D\u79F0", prop: "variable", required: "", rules: _.$rules.variable() }, { default: t(() => [e(p, { modelValue: a.value.variable, "onUpdate:modelValue": o[0] || (o[0] = (V) => a.value.variable = V), size: "large", placeholder: "\u8BF7\u8F93\u5165" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["rules"]), e(i, { label: "\u663E\u793A\u540D\u79F0", prop: "label", required: "", rules: _.$rules.required("\u8BF7\u8F93\u5165\u663E\u793A\u540D\u79F0") }, { default: t(() => [e(p, { modelValue: a.value.label, "onUpdate:modelValue": o[1] || (o[1] = (V) => a.value.label = V), size: "large", placeholder: "\u8BF7\u8F93\u5165" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["rules"]), e(i, { label: "\u53D8\u91CF\u7C7B\u578B" }, { default: t(() => [r("div", Zt, [(c(), w(U, null, q(l, (V) => r("div", { key: V.type, class: ce(["w-[112px] h-12 border rounded flex-center gap-1 cursor-pointer", [a.value.type_53ai === V.type_53ai ? "border-[#2563EB] text-[#2563EB] bg-[#2563EB] bg-opacity-[8%]" : "text-[#182B50] bg-[#F9FAFC]"]]), onClick: (H) => b(V) }, [r("span", Xt, m(V.label), 1)], 10, Qt)), 64))])]), _: 1 }), ["text", "textarea", "select"].includes(a.value.type_53ai) ? (c(), E(i, { key: 0, label: "\u5F15\u5BFC\u8BED" }, { default: t(() => [e(p, { modelValue: a.value.placeholder, "onUpdate:modelValue": o[2] || (o[2] = (V) => a.value.placeholder = V), size: "large", placeholder: "\u8BF7\u8F93\u5165" }, null, 8, ["modelValue"])]), _: 1 })) : C("", true), ["date"].includes(a.value.type_53ai) ? (c(), E(i, { key: 1, label: "\u9009\u62E9\u683C\u5F0F" }, { default: t(() => [e(k, { modelValue: a.value.mode, "onUpdate:modelValue": o[3] || (o[3] = (V) => a.value.mode = V), class: "w-full", size: "large", placeholder: "\u8BF7\u9009\u62E9" }, { default: t(() => [e(y, { label: "\u5E74", value: "y" }), e(y, { label: "\u5E74/\u6708", value: "y-m" }), e(y, { label: "\u5E74/\u6708/\u65E5", value: "y-m-d" }), e(y, { label: "\u65F6/\u5206", value: "h-m" }), e(y, { label: "\u65F6\u95F4\u8303\u56F4", value: "daterange" })]), _: 1 }, 8, ["modelValue"])]), _: 1 })) : C("", true), e(i, { label: "\u63CF\u8FF0" }, { default: t(() => [e(p, { modelValue: a.value.desc, "onUpdate:modelValue": o[4] || (o[4] = (V) => a.value.desc = V), size: "large", placeholder: "\u8BF7\u8F93\u5165" }, null, 8, ["modelValue"])]), _: 1 }), e(i, { label: "\u662F\u5426\u5FC5\u586B" }, { default: t(() => [e(d, { modelValue: a.value.required, "onUpdate:modelValue": o[5] || (o[5] = (V) => a.value.required = V) }, null, 8, ["modelValue"])]), _: 1 }), ["text", "textarea"].includes(a.value.type_53ai) ? (c(), E(i, { key: 2, label: "\u6700\u5927\u8F93\u5165\u5B57\u6570" }, { default: t(() => [e(f, { modelValue: a.value.max_length, "onUpdate:modelValue": o[6] || (o[6] = (V) => a.value.max_length = V), style: { width: "100%" }, precision: 0, controls: false, size: "large", placeholder: "\u8BF7\u8F93\u5165" }, null, 8, ["modelValue"])]), _: 1 })) : C("", true), ["text", "textarea"].includes(a.value.type_53ai) ? (c(), E(i, { key: 3, label: "\u662F\u5426\u5C55\u793A\u5B57\u6570" }, { default: t(() => [e(d, { modelValue: a.value.showWordLimit, "onUpdate:modelValue": o[7] || (o[7] = (V) => a.value.showWordLimit = V) }, null, 8, ["modelValue"])]), _: 1 })) : C("", true), a.value.type_53ai === "select" ? (c(), E(i, { key: 4, label: "\u9009\u9879" }, { default: t(() => [r("div", el, [(c(true), w(U, null, q(a.value.options, (V, H) => (c(), w("div", { key: V.value, class: "flex items-center" }, [e(p, { modelValue: V.label, "onUpdate:modelValue": ($) => V.label = $, class: "flex-1", size: "large", placeholder: "\u8BF7\u8F93\u5165" }, null, 8, ["modelValue", "onUpdate:modelValue"]), r("div", tl, [e(x, { class: "cursor-pointer", color: "#999999", onClick: ($) => _.handleDelOption(H) }, { default: t(() => [e(D)]), _: 2 }, 1032, ["onClick"])])]))), 128))]), r("div", { class: "w-full h-10 leading-10 rounded text-center border border-dashed border-[#DCDFE6] cursor-pointer text-sm text-[#182B50] text-opacity-80 mt-3", onClick: o[8] || (o[8] = (V) => _.handleAddOption()) }, " + \u6DFB\u52A0 ")]), _: 1 })) : C("", true), a.value.type_53ai === "select" ? (c(), E(i, { key: 5, label: "\u6A21\u5F0F" }, { default: t(() => [e(P, { modelValue: a.value.multiple, "onUpdate:modelValue": o[9] || (o[9] = (V) => a.value.multiple = V) }, { default: t(() => [e(S, { size: "large", label: false }, { default: t(() => o[12] || (o[12] = [z(" \u5355\u9009 ")])), _: 1 }), e(S, { size: "large", label: true }, { default: t(() => o[13] || (o[13] = [z(" \u591A\u9009 ")])), _: 1 })]), _: 1 }, 8, ["modelValue"])]), _: 1 })) : C("", true)]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue"]);
  };
} });
const xe = O(ll, [["__scopeId", "data-v-7dc0c810"]]), ol = { class: "w-full" }, al = { class: "text-[#182B50] text-opacity-60" }, sl = { key: 0 }, nl = { class: "flex items-center whitespace-nowrap text-[#182B50] mt-4" }, il = { class: "flex items-center whitespace-nowrap text-[#182B50] mt-4" }, dl = { class: "w-full" }, rl = { class: "text-[#182B50] text-opacity-60" }, ul = { key: 0 }, _l = { class: "h-[1px] flex overflow-hidden items-center whitespace-nowrap text-[#182B50] invisible" }, pl = { class: "flex items-center whitespace-nowrap text-[#182B50] mt-4" }, cl = { class: "flex items-center whitespace-nowrap text-[#182B50] mt-4" }, ml = N({ __name: "limit-config", setup(h) {
  const n = A({ request_limit: { frequency: { enable: false, interval: 1, number: 1, over_message: "" }, total: { enable: false, limit: 1, over_message: "" } } });
  return (l, s) => {
    const a = ne, b = ye, _ = K, o = R;
    return c(), w(U, null, [e(o, { label: l.$t("dialogue_frequency") }, { default: t(() => [r("div", ol, [r("div", al, [e(a, { modelValue: n.value.request_limit.frequency.enable, "onUpdate:modelValue": s[0] || (s[0] = (p) => n.value.request_limit.frequency.enable = p), class: "mr-2" }, null, 8, ["modelValue"]), z(" " + m(n.value.request_limit.frequency.enable ? l.$t("action_open") : l.$t("action_close")), 1)]), n.value.request_limit.frequency.enable ? (c(), w("div", sl, [r("div", nl, [z(m(l.$t("limit")), 1), e(b, { modelValue: n.value.request_limit.frequency.interval, "onUpdate:modelValue": s[1] || (s[1] = (p) => n.value.request_limit.frequency.interval = p), min: 1, controls: false, class: "mx-2 w-7", size: "large" }, null, 8, ["modelValue"]), z(" " + m(l.$t("second")) + ", " + m(l.$t("send")) + " ", 1), e(b, { modelValue: n.value.request_limit.frequency.number, "onUpdate:modelValue": s[2] || (s[2] = (p) => n.value.request_limit.frequency.number = p), min: 1, controls: false, class: "mx-2 w-7", size: "large" }, null, 8, ["modelValue"]), z(" " + m(l.$t("unit_messages")), 1)]), r("div", il, [z(m(l.$t("over_message")) + " ", 1), e(_, { modelValue: n.value.request_limit.frequency.over_message, "onUpdate:modelValue": s[3] || (s[3] = (p) => n.value.request_limit.frequency.over_message = p), type: "textarea", rows: 3, resize: "none", class: "mx-2", size: "large" }, null, 8, ["modelValue"])])])) : C("", true)])]), _: 1 }, 8, ["label"]), e(o, { label: l.$t("dialogue_total") }, { default: t(() => [r("div", dl, [r("div", rl, [e(a, { modelValue: n.value.request_limit.total.enable, "onUpdate:modelValue": s[4] || (s[4] = (p) => n.value.request_limit.total.enable = p), class: "mr-2" }, null, 8, ["modelValue"]), z(" " + m(n.value.request_limit.total.enable ? l.$t("action_open") : l.$t("action_close")), 1)]), n.value.request_limit.total.enable ? (c(), w("div", ul, [r("div", _l, [z(m(l.$t("limit")), 1), e(b, { min: 1, controls: false, class: "mx-2 w-7", size: "large" }), z(m(l.$t("second")) + ", " + m(l.$t("send")), 1), e(b, { min: 1, controls: false, class: "mx-2 w-7", size: "large" }), z(m(l.$t("unit_messages")), 1)]), r("div", pl, [z(m(l.$t("limit_every_dialogue")) + " ", 1), e(b, { modelValue: n.value.request_limit.total.limit, "onUpdate:modelValue": s[5] || (s[5] = (p) => n.value.request_limit.total.limit = p), min: 1, controls: false, class: "mx-2 w-7", size: "large" }, null, 8, ["modelValue"]), z(" " + m(l.$t("unit_messages_v2")), 1)]), r("div", cl, [z(m(l.$t("over_message")) + " ", 1), e(_, { modelValue: n.value.request_limit.total.over_message, "onUpdate:modelValue": s[6] || (s[6] = (p) => n.value.request_limit.total.over_message = p), type: "textarea", rows: 3, resize: "none", class: "mx-2", size: "large" }, null, 8, ["modelValue"])])])) : C("", true)])]), _: 1 }, 8, ["label"])], 64);
  };
} });
const ze = O(ml, [["__scopeId", "data-v-11c2c6f4"]]), fl = { class: "py-7" }, bl = { class: "text-base text-[#1D1E1F] font-medium" }, vl = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-6" }, gl = { class: "w-full border" }, hl = { class: "flex items-center gap-2 cursor-pointer" }, yl = { class: "w-full h-[50px] flex items-center pl-5" }, wl = { class: "w-full border" }, $l = { class: "flex items-center gap-2 cursor-pointer" }, kl = { class: "w-full h-[50px] flex items-center pl-5" }, Vl = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-6" }, El = N({ __name: "coze-workflow", setup(h) {
  const n = [{ date: "2016-05-03", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-02", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-04", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-01", name: "Tom", address: "No. 189, Grove St, Los Angeles" }], l = A(), s = () => {
    l.value.open();
  };
  return (a, b) => {
    const _ = K, o = R, p = ee, i = we, y = ne, k = $e, d = X, f = W, D = j, x = M;
    return c(), w("div", fl, [r("div", bl, m(a.$t("basic_info")), 1), e(x, { "label-width": "104px", "label-position": "left", class: "mt-6" }, { default: t(() => [e(J), r("div", vl, m(a.$t("edit_agent")), 1), e(o, { "label-position": "top", label: a.$t("coze_workflow_link") }, { default: t(() => [e(_, { size: "large" })]), _: 1 }, 8, ["label"]), e(o, { "label-position": "top", label: a.$t("input_variable") }, { default: t(() => [r("div", gl, [e(k, { data: n, "header-cell-class-name": "!bg-[#F8F9FA] h-[46px]", "header-row-class-name": "", style: { width: "100%" } }, { default: t(() => [e(i, { prop: "date", width: "50" }, { default: t(() => [e(p, { name: "drag" })]), _: 1 }), e(i, { prop: "date", label: a.$t("display_name") }, null, 8, ["label"]), e(i, { prop: "name", label: a.$t("variable_type") }, null, 8, ["label"]), e(i, { prop: "address", label: a.$t("action_enable"), width: "90" }, { default: t(() => [e(y)]), _: 1 }, 8, ["label"]), e(i, { prop: "address", label: a.$t("operation"), width: "96" }, { default: t(() => [r("div", hl, [e(p, { name: "edit", width: "16" }), e(p, { name: "del", width: "16" })])]), _: 1 }, 8, ["label"])]), _: 1 }), r("div", yl, [e(d, { link: "", type: "primary", onClick: s }, { default: t(() => [z(" +" + m(a.$t("action_add")), 1)]), _: 1 })])])]), _: 1 }, 8, ["label"]), e(o, { "label-position": "top", label: a.$t("output_variable") }, { default: t(() => [r("div", wl, [e(k, { data: n, "header-cell-class-name": "!bg-[#F8F9FA] h-[46px]", "header-row-class-name": "", style: { width: "100%" } }, { default: t(() => [e(i, { prop: "date", width: "50" }, { default: t(() => [e(p, { name: "drag" })]), _: 1 }), e(i, { prop: "date", label: a.$t("display_name") }, null, 8, ["label"]), e(i, { prop: "name", label: a.$t("variable_type") }, null, 8, ["label"]), e(i, { prop: "address", label: a.$t("action_enable"), width: "90" }, { default: t(() => [e(y)]), _: 1 }, 8, ["label"]), e(i, { prop: "address", label: a.$t("operation"), width: "96" }, { default: t(() => [r("div", $l, [e(p, { name: "edit", width: "16" }), e(p, { name: "del", width: "16" })])]), _: 1 }, 8, ["label"])]), _: 1 }), r("div", kl, [e(d, { link: "", type: "primary", onClick: s }, { default: t(() => [z(" +" + m(a.$t("action_add")), 1)]), _: 1 })])])]), _: 1 }, 8, ["label"]), r("div", Vl, m(a.$t("permission_setting")), 1), e(o, { label: a.$t("visible_range") }, { default: t(() => [e(D, { size: "large" }, { default: t(() => [e(f, { value: "1" }, { default: t(() => b[0] || (b[0] = [z(" \u5E02\u573A ")])), _: 1 })]), _: 1 })]), _: 1 }, 8, ["label"]), b[1] || (b[1] = r("div", { class: "border-t mb-4" }, null, -1)), e(ze)]), _: 1 }), e(xe, { ref_key: "fieldSaveRef", ref: l }, null, 512)]);
  };
} }), xl = { class: "pb-6" }, zl = { class: "border rounded p-5 mb-7" }, Fl = { class: "flex items-center justify-between" }, Cl = { class: "flex items-center gap-1" }, Tl = { class: "text-base text-[#1D1E1F]" }, Al = { class: "flex-center text-[#9A9A9A] gap-1 ml-1" }, Dl = { class: "text-sm" }, Sl = ["innerHTML"], Ul = { key: 0 }, Il = { class: "text-base text-[#1D1E1F] font-medium" }, Nl = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-4" }, Pl = { class: "text-[#1D1E1F]" }, Bl = N({ __name: "dify-agent", props: { showChannelConfig: { type: Boolean, default: true } }, setup(h, { expose: n }) {
  const l = te(), s = pe("channelConfig") || {}, a = pe("channelTypeKey") || {}, b = A(), _ = A(false), o = Pe({ key: "", base_url: "", models: [], config: { agent_type: "chat" } }), p = A(false), i = A(), y = async () => {
    if (!await b.value.validate())
      return;
    p.value = true;
    let f = [st(o.key + "_" + o.base_url)], D = a.value;
    const x = { channel_id: s.value.channel_id, key: o.key, base_url: o.base_url, config: o.config, models: f, name: D }, S = await Z.save({ data: x }).finally(() => {
      p.value = false;
    });
    Object.assign(s.value, S), x.channel_id || (x.channel_id = S.channel_id), l.form_data.custom_config.channel_config = x, l.form_data.model = f[0], Q.success(window.$t("action_save_success")), _.value = true;
  }, k = async () => i.value && i.value.validate();
  return _e(() => l.agent_data, ({ channel_config: d = {} } = {}) => {
    var _a;
    _.value = !!+d.channel_id, s.value.channel_id = +d.channel_id || 0, s.value.key = o.key = d.key || "", s.value.base_url = o.base_url = d.base_url || "https://api.dify.ai/v1", s.value.models = o.models = d.models || [], s.value.config = o.config = { ...d.config || {}, agent_type: ((_a = d.config) == null ? void 0 : _a.agent_type) || "chat" };
  }, { immediate: true, deep: true }), n({ validateForm: k }), (d, f) => {
    const D = ee, x = Ue, S = X, P = K, F = R, L = W, B = j, G = M, V = ae, H = se;
    return c(), w("div", xl, [Ve(r("div", zl, [r("div", Fl, [r("div", Cl, [r("h3", Tl, m(d.$t("dify")), 1), e(x, { content: "Right Top prompts info", placement: "right-start", width: "480" }, { reference: t(() => [r("div", Al, [e(D, { name: "help", width: "14", color: "#999" }), r("span", Dl, m(d.$t("how_get")), 1)])]), default: t(() => [r("div", { class: "whitespace-pre-wrap text-sm text-[#333] leading-6", innerHTML: d.$t("dify_agent_get_tip", { url: "<a class='text-[#5A6D9E] underline' href='https://dify.ai/zh' target='_blank'>https://dify.ai/zh</a>" }) }, null, 8, Sl)]), _: 1 })]), _.value ? (c(), E(S, { key: 0, type: "primary", link: "", onClick: f[0] || (f[0] = ($) => _.value = false) }, { default: t(() => [e(D, { name: "edit", width: "16", class: "mr-2" }), z(" " + m(d.$t("action_edit")), 1)]), _: 1 })) : C("", true)]), e(G, { ref_key: "channelFormRef", ref: b, model: o, "label-position": "top", class: "mt-3" }, { default: t(() => [e(F, { label: d.$t("api_host"), prop: "base_url", rules: u(I)({ message: "form_input_placeholder", validator: ["text", "link"] }) }, { default: t(() => [e(P, { size: "large", placeholder: d.$t("form_input_placeholder"), modelValue: o.base_url, "onUpdate:modelValue": f[1] || (f[1] = ($) => o.base_url = $), disabled: _.value }, null, 8, ["placeholder", "modelValue", "disabled"])]), _: 1 }, 8, ["label", "rules"]), e(F, { label: d.$t("api_screet"), prop: "key", rules: u(I)({ message: "form_input_placeholder" }) }, { default: t(() => [e(P, { size: "large", placeholder: d.$t("form_input_placeholder"), modelValue: o.key, "onUpdate:modelValue": f[2] || (f[2] = ($) => o.key = $), disabled: _.value }, null, 8, ["placeholder", "modelValue", "disabled"])]), _: 1 }, 8, ["label", "rules"]), e(F, { label: d.$t("agent_type"), prop: "config.agent_type", rules: u(I)({ message: "form_input_placeholder" }) }, { default: t(() => [e(B, { class: "max-w-[360px]", size: "large", modelValue: o.config.agent_type, "onUpdate:modelValue": f[3] || (f[3] = ($) => o.config.agent_type = $), placeholder: d.$t("form_select_placeholder"), disabled: _.value }, { default: t(() => [e(L, { value: "chat", label: d.$t("agent_type_chat") }, null, 8, ["label"])]), _: 1 }, 8, ["modelValue", "placeholder", "disabled"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"]), _.value ? C("", true) : (c(), w("div", Ul, [e(S, { type: "primary", class: "px-9", size: "large", loading: p.value, onClick: Y(y, ["stop"]) }, { default: t(() => [z(m(d.$t("action_save")), 1)]), _: 1 }, 8, ["loading"]), u(s).channel_id ? (c(), E(S, { key: 0, class: "px-9", size: "large", onClick: f[4] || (f[4] = Y(($) => _.value = true, ["stop"])) }, { default: t(() => [z(m(d.$t("action_cancel")), 1)]), _: 1 })) : C("", true)]))], 512), [[Be, h.showChannelConfig]]), C("", true), h.showChannelConfig && u(s).channel_id || !h.showChannelConfig ? (c(), w(U, { key: 1 }, [r("div", Il, m(d.$t("basic_info")), 1), e(G, { ref_key: "agentFormRef", ref: i, model: u(l).form_data, "label-width": "104px", "label-position": "top", class: "mt-6" }, { default: t(() => [e(J, { modelValue: u(l).form_data, "onUpdate:modelValue": f[5] || (f[5] = ($) => u(l).form_data = $) }, null, 8, ["modelValue"]), u(l).subscription_options.length ? (c(), w(U, { key: 0 }, [r("div", Nl, m(d.$t("permission_setting")), 1), e(F, { "label-width": "0" }, { default: t(() => [e(H, { modelValue: u(l).form_data.user_group_ids, "onUpdate:modelValue": f[6] || (f[6] = ($) => u(l).form_data.user_group_ids = $) }, { default: t(() => [(c(true), w(U, null, q(u(l).subscription_options, ($) => (c(), E(V, { key: $.value, label: $.value }, { default: t(() => [r("span", Pl, m($.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 })], 64)) : C("", true)]), _: 1 }, 8, ["model"])], 64)) : C("", true)]);
  };
} });
const Ll = O(Bl, [["__scopeId", "data-v-15322e62"]]), Rl = { class: "py-7" }, Gl = { class: "text-base text-[#1D1E1F] font-medium" }, ql = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-6" }, Ol = { class: "w-full border" }, Ml = { class: "flex items-center gap-2 cursor-pointer" }, Hl = { class: "w-full h-[50px] flex items-center pl-5" }, Yl = { class: "w-full border" }, Wl = { class: "flex items-center gap-2 cursor-pointer" }, jl = { class: "w-full h-[50px] flex items-center pl-5" }, Kl = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-6" }, Jl = N({ __name: "dify-workflow", setup(h) {
  const n = [{ date: "2016-05-03", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-02", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-04", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-01", name: "Tom", address: "No. 189, Grove St, Los Angeles" }], l = A(), s = () => {
    l.value.open();
  };
  return (a, b) => {
    const _ = K, o = R, p = ee, i = we, y = ne, k = $e, d = X, f = W, D = j, x = M;
    return c(), w("div", Rl, [r("div", Gl, m(a.$t("basic_info")), 1), e(x, { "label-width": "104px", "label-position": "left", class: "mt-6" }, { default: t(() => [e(J), r("div", ql, m(a.$t("coze_workflow_link")), 1), e(o, { "label-position": "top", label: a.$t("coze_workflow_link") }, { default: t(() => [e(_, { size: "large" })]), _: 1 }, 8, ["label"]), e(o, { "label-position": "top", label: a.$t("input_variable") }, { default: t(() => [r("div", Ol, [e(k, { data: n, "header-cell-class-name": "!bg-[#F8F9FA] h-[46px]", "header-row-class-name": "", style: { width: "100%" } }, { default: t(() => [e(i, { prop: "date", width: "50" }, { default: t(() => [e(p, { name: "drag" })]), _: 1 }), e(i, { prop: "date", label: a.$t("display_name") }, null, 8, ["label"]), e(i, { prop: "name", label: a.$t("variable_type") }, null, 8, ["label"]), e(i, { prop: "address", label: a.$t("action_enable"), width: "90" }, { default: t(() => [e(y)]), _: 1 }, 8, ["label"]), e(i, { prop: "address", label: a.$t("operation"), width: "96" }, { default: t(() => [r("div", Ml, [e(p, { name: "edit", width: "16" }), e(p, { name: "del", width: "16" })])]), _: 1 }, 8, ["label"])]), _: 1 }), r("div", Hl, [e(d, { link: "", type: "primary", onClick: s }, { default: t(() => [z(" +" + m(a.$t("action_add")), 1)]), _: 1 })])])]), _: 1 }, 8, ["label"]), e(o, { "label-position": "top", label: a.$t("output_variable") }, { default: t(() => [r("div", Yl, [e(k, { data: n, "header-cell-class-name": "!bg-[#F8F9FA] h-[46px]", "header-row-class-name": "", style: { width: "100%" } }, { default: t(() => [e(i, { prop: "date", width: "50" }, { default: t(() => [e(p, { name: "drag" })]), _: 1 }), e(i, { prop: "date", label: a.$t("display_name") }, null, 8, ["label"]), e(i, { prop: "name", label: a.$t("variable_type") }, null, 8, ["label"]), e(i, { prop: "address", label: a.$t("action_enable"), width: "90" }, { default: t(() => [e(y)]), _: 1 }, 8, ["label"]), e(i, { prop: "address", label: a.$t("operation"), width: "96" }, { default: t(() => [r("div", Wl, [e(p, { name: "edit", width: "16" }), e(p, { name: "del", width: "16" })])]), _: 1 }, 8, ["label"])]), _: 1 }), r("div", jl, [e(d, { link: "", type: "primary", onClick: s }, { default: t(() => [z(" +" + m(a.$t("action_add")), 1)]), _: 1 })])])]), _: 1 }, 8, ["label"]), r("div", Kl, m(a.$t("permission_setting")), 1), e(o, { label: a.$t("visible_range") }, { default: t(() => [e(D, { size: "large" }, { default: t(() => [e(f, { value: "1" }, { default: t(() => b[0] || (b[0] = [z(" \u5E02\u573A ")])), _: 1 })]), _: 1 })]), _: 1 }, 8, ["label"]), b[1] || (b[1] = r("div", { class: "border-t mb-4" }, null, -1)), e(ze)]), _: 1 }), e(xe, { ref_key: "fieldSaveRef", ref: l }, null, 512)]);
  };
} }), Zl = { class: "pb-6" }, Ql = { class: "border rounded p-5 mb-7" }, Xl = { class: "flex items-center justify-between" }, eo = { class: "flex items-center gap-1" }, to = { class: "text-base text-[#1D1E1F]" }, lo = { class: "flex-center text-[#9A9A9A] gap-1 ml-1" }, oo = { class: "text-sm" }, ao = ["innerHTML"], so = { key: 0 }, no = { class: "text-base text-[#1D1E1F] font-medium" }, io = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-4" }, ro = { class: "text-[#1D1E1F]" }, uo = N({ __name: "53ai-agent", props: { showChannelConfig: { type: Boolean, default: true } }, setup(h, { expose: n }) {
  const l = te(), s = pe("channelConfig") || {}, a = pe("channelTypeKey") || {}, b = A(), _ = A(false), o = Pe({ key: "", base_url: "", models: [], model: "", config: { agent_type: "chat" } }), p = A(false), i = A(), y = async () => {
    if (!await b.value.validate())
      return;
    p.value = true;
    let f = [o.model], D = a.value;
    const x = { channel_id: s.value.channel_id, key: o.key, base_url: o.base_url, config: o.config, models: f, name: D }, S = await Z.save({ data: x }).finally(() => {
      p.value = false;
    });
    Object.assign(s.value, S), x.channel_id || (x.channel_id = S.channel_id), l.form_data.custom_config.channel_config = x, l.form_data.model = f[0], Q.success(window.$t("action_save_success")), _.value = true;
  }, k = async () => i.value && i.value.validate();
  return _e(() => l.agent_data, ({ channel_config: d = {} } = {}) => {
    var _a;
    _.value = !!+d.channel_id, s.value.channel_id = +d.channel_id || 0, s.value.key = o.key = d.key || "", s.value.base_url = o.base_url = d.base_url || "https://api.53ai.com/v3", s.value.models = o.models = d.models || [], s.value.model = o.model = o.models[0] || "", s.value.config = o.config = { ...d.config || {}, agent_type: ((_a = d.config) == null ? void 0 : _a.agent_type) || "chat" };
  }, { immediate: true, deep: true }), n({ validateForm: k }), (d, f) => {
    const D = ee, x = Ue, S = X, P = K, F = R, L = W, B = j, G = M, V = ae, H = se;
    return c(), w("div", Zl, [Ve(r("div", Ql, [r("div", Xl, [r("div", eo, [r("h3", to, m(d.$t("53ai")), 1), e(x, { content: "Right Top prompts info", placement: "right-start", width: "480" }, { reference: t(() => [r("div", lo, [e(D, { name: "help", width: "14", color: "#999" }), r("span", oo, m(d.$t("how_get")), 1)])]), default: t(() => [r("div", { class: "whitespace-pre-wrap text-sm text-[#333] leading-6", innerHTML: d.$t("53ai_agent_get_tip", { url: "<a class='text-[#5A6D9E] underline' href='https://www.53ai.com' target='_blank'>https://www.53ai.com</a>" }) }, null, 8, ao)]), _: 1 })]), _.value ? (c(), E(S, { key: 0, type: "primary", link: "", onClick: f[0] || (f[0] = ($) => _.value = false) }, { default: t(() => [e(D, { name: "edit", width: "16", class: "mr-2" }), z(" " + m(d.$t("action_edit")), 1)]), _: 1 })) : C("", true)]), e(G, { ref_key: "channelFormRef", ref: b, model: o, "label-position": "top", class: "mt-3" }, { default: t(() => [e(F, { label: d.$t("53ai_api_endpoint"), prop: "base_url", rules: u(I)({ message: "form_input_placeholder", validator: ["text", "link"] }) }, { default: t(() => [e(P, { size: "large", placeholder: d.$t("form_input_placeholder"), modelValue: o.base_url, "onUpdate:modelValue": f[1] || (f[1] = ($) => o.base_url = $), disabled: _.value }, null, 8, ["placeholder", "modelValue", "disabled"])]), _: 1 }, 8, ["label", "rules"]), e(F, { label: d.$t("api_botid"), prop: "model", rules: u(I)({ message: "form_input_placeholder" }) }, { default: t(() => [e(P, { size: "large", placeholder: d.$t("form_input_placeholder"), modelValue: o.model, "onUpdate:modelValue": f[2] || (f[2] = ($) => o.model = $), disabled: _.value }, null, 8, ["placeholder", "modelValue", "disabled"])]), _: 1 }, 8, ["label", "rules"]), e(F, { label: d.$t("53ai_api_screet"), prop: "key", rules: u(I)({ message: "form_input_placeholder" }) }, { default: t(() => [e(P, { size: "large", placeholder: d.$t("form_input_placeholder"), modelValue: o.key, "onUpdate:modelValue": f[3] || (f[3] = ($) => o.key = $), disabled: _.value }, null, 8, ["placeholder", "modelValue", "disabled"])]), _: 1 }, 8, ["label", "rules"]), e(F, { label: d.$t("agent_type"), prop: "config.agent_type", rules: u(I)({ message: "form_input_placeholder" }) }, { default: t(() => [e(B, { class: "max-w-[360px]", size: "large", modelValue: o.config.agent_type, "onUpdate:modelValue": f[4] || (f[4] = ($) => o.config.agent_type = $), placeholder: d.$t("form_select_placeholder"), disabled: _.value }, { default: t(() => [e(L, { value: "chat", label: d.$t("agent_type_chat") }, null, 8, ["label"])]), _: 1 }, 8, ["modelValue", "placeholder", "disabled"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"]), _.value ? C("", true) : (c(), w("div", so, [e(S, { type: "primary", class: "px-9", size: "large", loading: p.value, onClick: Y(y, ["stop"]) }, { default: t(() => [z(m(d.$t("action_save")), 1)]), _: 1 }, 8, ["loading"]), u(s).channel_id ? (c(), E(S, { key: 0, class: "px-9", size: "large", onClick: f[5] || (f[5] = Y(($) => _.value = true, ["stop"])) }, { default: t(() => [z(m(d.$t("action_cancel")), 1)]), _: 1 })) : C("", true)]))], 512), [[Be, h.showChannelConfig]]), h.showChannelConfig && u(s).channel_id || !h.showChannelConfig ? (c(), w(U, { key: 0 }, [r("div", no, m(d.$t("basic_info")), 1), e(G, { ref_key: "agentFormRef", ref: i, model: u(l).form_data, "label-width": "104px", "label-position": "top", class: "mt-6" }, { default: t(() => [e(J, { modelValue: u(l).form_data, "onUpdate:modelValue": f[6] || (f[6] = ($) => u(l).form_data = $) }, null, 8, ["modelValue"]), u(l).subscription_options.length ? (c(), w(U, { key: 0 }, [r("div", io, m(d.$t("permission_setting")), 1), e(F, { "label-width": "0" }, { default: t(() => [e(H, { modelValue: u(l).form_data.user_group_ids, "onUpdate:modelValue": f[7] || (f[7] = ($) => u(l).form_data.user_group_ids = $) }, { default: t(() => [(c(true), w(U, null, q(u(l).subscription_options, ($) => (c(), E(V, { key: $.value, label: $.value }, { default: t(() => [r("span", ro, m($.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 })], 64)) : C("", true)]), _: 1 }, 8, ["model"])], 64)) : C("", true)]);
  };
} });
const _o = O(uo, [["__scopeId", "data-v-3b0bc51c"]]), po = { class: "py-7" }, co = { class: "text-base text-[#1D1E1F] font-medium" }, mo = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-6" }, fo = { class: "w-full border" }, bo = { class: "flex items-center gap-2 cursor-pointer" }, vo = { class: "w-full h-[50px] flex items-center pl-5" }, go = { class: "w-full border" }, ho = { class: "flex items-center gap-2 cursor-pointer" }, yo = { class: "w-full h-[50px] flex items-center pl-5" }, wo = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-6" }, $o = N({ __name: "53ai-workflow", setup(h) {
  const n = [{ date: "2016-05-03", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-02", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-04", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-01", name: "Tom", address: "No. 189, Grove St, Los Angeles" }], l = A(), s = () => {
    l.value.open();
  };
  return (a, b) => {
    const _ = K, o = R, p = ee, i = we, y = ne, k = $e, d = X, f = W, D = j, x = M;
    return c(), w("div", po, [r("div", co, m(a.$t("basic_info")), 1), e(x, { "label-width": "104px", "label-position": "left", class: "mt-6" }, { default: t(() => [e(J), r("div", mo, m(a.$t("edit_agent")), 1), e(o, { "label-position": "top", label: a.$t("coze_workflow_link") }, { default: t(() => [e(_, { size: "large" })]), _: 1 }, 8, ["label"]), e(o, { "label-position": "top", label: a.$t("input_variable") }, { default: t(() => [r("div", fo, [e(k, { data: n, "header-cell-class-name": "!bg-[#F8F9FA] h-[46px]", "header-row-class-name": "", style: { width: "100%" } }, { default: t(() => [e(i, { prop: "date", width: "50" }, { default: t(() => [e(p, { name: "drag" })]), _: 1 }), e(i, { prop: "date", label: a.$t("display_name") }, null, 8, ["label"]), e(i, { prop: "name", label: a.$t("variable_type") }, null, 8, ["label"]), e(i, { prop: "address", label: a.$t("action_enable"), width: "90" }, { default: t(() => [e(y)]), _: 1 }, 8, ["label"]), e(i, { prop: "address", label: a.$t("operation"), width: "96" }, { default: t(() => [r("div", bo, [e(p, { name: "edit", width: "16" }), e(p, { name: "del", width: "16" })])]), _: 1 }, 8, ["label"])]), _: 1 }), r("div", vo, [e(d, { link: "", type: "primary", onClick: s }, { default: t(() => [z(" +" + m(a.$t("action_add")), 1)]), _: 1 })])])]), _: 1 }, 8, ["label"]), e(o, { "label-position": "top", label: a.$t("output_variable") }, { default: t(() => [r("div", go, [e(k, { data: n, "header-cell-class-name": "!bg-[#F8F9FA] h-[46px]", "header-row-class-name": "", style: { width: "100%" } }, { default: t(() => [e(i, { prop: "date", width: "50" }, { default: t(() => [e(p, { name: "drag" })]), _: 1 }), e(i, { prop: "date", label: a.$t("display_name") }, null, 8, ["label"]), e(i, { prop: "name", label: a.$t("variable_type") }, null, 8, ["label"]), e(i, { prop: "address", label: a.$t("action_enable"), width: "90" }, { default: t(() => [e(y)]), _: 1 }, 8, ["label"]), e(i, { prop: "address", label: a.$t("operation"), width: "96" }, { default: t(() => [r("div", ho, [e(p, { name: "edit", width: "16" }), e(p, { name: "del", width: "16" })])]), _: 1 }, 8, ["label"])]), _: 1 }), r("div", yo, [e(d, { link: "", type: "primary", onClick: s }, { default: t(() => [z(" +" + m(a.$t("action_add")), 1)]), _: 1 })])])]), _: 1 }, 8, ["label"]), r("div", wo, m(a.$t("permission_setting")), 1), e(o, { label: a.$t("visible_range") }, { default: t(() => [e(D, { size: "large" }, { default: t(() => [e(f, { value: "1" }, { default: t(() => b[0] || (b[0] = [z(" \u5E02\u573A ")])), _: 1 })]), _: 1 })]), _: 1 }, 8, ["label"]), b[1] || (b[1] = r("div", { class: "border-t mb-4" }, null, -1)), e(ze)]), _: 1 }), e(xe, { ref_key: "fieldSaveRef", ref: l }, null, 512)]);
  };
} }), ko = { class: "py-7" }, Vo = { class: "text-base text-[#1D1E1F] font-medium" }, Eo = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-6" }, xo = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-4" }, zo = { class: "text-[#1D1E1F]" }, Fo = N({ __name: "app-builder-agent", setup(h, { expose: n }) {
  ke();
  const l = te(), s = A();
  return n({ validateForm: async () => s.value.validate() }), (b, _) => {
    const o = Ee, p = R, i = ae, y = se, k = M;
    return c(), w("div", ko, [r("div", Vo, m(b.$t("basic_info")), 1), e(k, { ref_key: "form_ref", ref: s, model: u(l).form_data, "label-width": "104px", "label-position": "top", class: "mt-6" }, { default: t(() => [e(J, { modelValue: u(l).form_data, "onUpdate:modelValue": _[0] || (_[0] = (d) => u(l).form_data = d) }, null, 8, ["modelValue"]), r("div", Eo, m(b.$t("select_agent")), 1), e(p, { prop: "custom_config.app_builder_bot_id", rules: u(I)({ message: "form_select_placeholder" }) }, { default: t(() => [e(o, { modelValue: u(l).form_data.custom_config.app_builder_bot_id, "onUpdate:modelValue": _[1] || (_[1] = (d) => u(l).form_data.custom_config.app_builder_bot_id = d), size: "large", options: u(l).app_builder_bot_options }, null, 8, ["modelValue", "options"])]), _: 1 }, 8, ["rules"]), u(l).subscription_options.length ? (c(), w(U, { key: 0 }, [r("div", xo, m(b.$t("permission_setting")), 1), e(p, { "label-width": "0" }, { default: t(() => [e(y, { modelValue: u(l).form_data.user_group_ids, "onUpdate:modelValue": _[2] || (_[2] = (d) => u(l).form_data.user_group_ids = d) }, { default: t(() => [(c(true), w(U, null, q(u(l).subscription_options, (d) => (c(), E(i, { key: d.value, label: d.value }, { default: t(() => [r("span", zo, m(d.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 })], 64)) : C("", true)]), _: 1 }, 8, ["model"])]);
  };
} });
const Co = O(Fo, [["__scopeId", "data-v-d85f6229"]]), Ro = N({ __name: "index", props: { agentType: {} }, setup(h, { expose: n }) {
  const l = A();
  return n({ get save() {
    return l.value.save;
  }, get validateForm() {
    return l.value.validateForm;
  } }), (s, a) => s.agentType === u(re) ? (c(), E(Ot, { key: 0, ref_key: "viewRef", ref: l }, null, 512)) : s.agentType === u(Ge) ? (c(), E(Jt, { key: 1, ref_key: "viewRef", ref: l }, null, 512)) : s.agentType === "coze-workflow" ? (c(), E(El, { key: 2, ref_key: "viewRef", ref: l }, null, 512)) : s.agentType === u(Re) ? (c(), E(Ll, { key: 3, ref_key: "viewRef", ref: l }, null, 512)) : s.agentType === "dify-workflow" ? (c(), E(Jl, { key: 4, ref_key: "viewRef", ref: l }, null, 512)) : s.agentType === u(Le) ? (c(), E(_o, { key: 5, ref_key: "viewRef", ref: l }, null, 512)) : s.agentType === "53ai-workflow" ? (c(), E($o, { key: 6, ref_key: "viewRef", ref: l }, null, 512)) : s.agentType === u(he) ? (c(), E(Co, { key: 7, ref_key: "viewRef", ref: l }, null, 512)) : C("", true);
} });
export {
  Ro as _,
  te as u
};
