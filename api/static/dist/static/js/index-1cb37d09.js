import { ap as $e, aH as Ie, u as H, au as ke, b as l, c as v, h as B, z as $, cI as Ne, e as z, n as ie, aC as Ce, br as fe, r as C, o as Ee, aG as Q, aU as Re, b9 as Le, c8 as Ue, F as N, G as Y, q as W, f as a, aA as me, b$ as Oe, aD as je, c7 as He, ad as Ye, bK as ae, d as o, W as K, p as Ae, b5 as Ge, b4 as Me, al as Z, cC as X, af as Ke, t as f, g as Te, i as d, H as I, bI as Ve, bd as ce, bJ as We, a9 as oe, bF as Se, $ as ee, y as de, b0 as Je, am as se, X as qe, aa as Fe, ac as Be, ae as ve, a6 as ge, a4 as J, cJ as he, L as Xe, Y as Ze, by as Qe, x as et, cK as ye, cL as tt, M as te, N as ne, cM as at, O as re, an as be, J as ot } from "./index-7b696e01.js";
import { v as st } from "./el-loading-5050bc7d.js";
import { _ as lt } from "./index-71389ea4.js";
import { E as nt, a as rt } from "./el-tab-pane-08bf2574.js";
import { _ as it } from "./index.vue_vue_type_script_setup_true_lang-ca2646ba.js";
import { u as ue, _ as ct } from "./index.vue_vue_type_script_setup_true_lang-5a29e342.js";
import { d as dt } from "./debounce-f4e6390f.js";
import { E as ut } from "./el-empty-06cc10b4.js";
import "./el-tag-63139441.js";
import { E as pt, a as _t } from "./el-select-2909247e.js";
import "./el-scrollbar-a17df1f1.js";
import { E as ft } from "./el-input-number-d679436c.js";
import { _ as mt } from "./image.vue_vue_type_style_index_0_lang-376c63d4.js";
import { g as vt, c as gt, b as ht, e as xe, d as we } from "./agent-fe196a62.js";
import "./index-6fa206ef.js";
import "./el-table-column-fe44992a.js";
import "./debounce-c1af5016.js";
import "./isEqual-71b69c76.js";
import "./group-a5ba9c36.js";
import "./el-switch-546ddcad.js";
import "./el-radio-32a02f49.js";
import "./dropdown-cf05cb92.js";
import "./index-74671778.js";
const yt = $e({ animated: { type: Boolean, default: false }, count: { type: Number, default: 1 }, rows: { type: Number, default: 3 }, loading: { type: Boolean, default: true }, throttle: { type: Ie([Number, Object]) } }), bt = $e({ variant: { type: String, values: ["circle", "rect", "h1", "h3", "text", "caption", "p", "image", "button"], default: "text" } }), xt = H({ name: "ElSkeletonItem" }), wt = H({ ...xt, props: bt, setup(g) {
  const h = ke("skeleton");
  return (w, t) => (l(), v("div", { class: ie([$(h).e("item"), $(h).e(w.variant)]) }, [w.variant === "image" ? (l(), B($(Ne), { key: 0 })) : z("v-if", true)], 2));
} });
var le = Ce(wt, [["__file", "skeleton-item.vue"]]);
const $t = (g, h = 0) => {
  if (h === 0)
    return g;
  const w = fe(h) && !!h.initVal, t = C(w);
  let c = null;
  const n = (s) => {
    if (Le(s)) {
      t.value = g.value;
      return;
    }
    c && clearTimeout(c), c = setTimeout(() => {
      t.value = g.value;
    }, s);
  }, k = (s) => {
    s === "leading" ? Re(h) ? n(h) : n(h.leading) : fe(h) ? n(h.trailing) : t.value = false;
  };
  return Ee(() => k("leading")), Q(() => g.value, (s) => {
    k(s ? "leading" : "trailing");
  }), t;
}, kt = H({ name: "ElSkeleton" }), Ct = H({ ...kt, props: yt, setup(g, { expose: h }) {
  const w = g, t = ke("skeleton"), c = $t(Ue(w, "loading"), w.throttle);
  return h({ uiLoading: c }), (n, k) => $(c) ? (l(), v("div", me({ key: 0, class: [$(t).b(), $(t).is("animated", n.animated)] }, n.$attrs), [(l(true), v(N, null, Y(n.count, (s) => (l(), v(N, { key: s }, [$(c) ? W(n.$slots, "template", { key: s }, () => [a(le, { class: ie($(t).is("first")), variant: "p" }, null, 8, ["class"]), (l(true), v(N, null, Y(n.rows, (i) => (l(), B(le, { key: i, class: ie([$(t).e("paragraph"), $(t).is("last", i === n.rows && n.rows > 1)]), variant: "p" }, null, 8, ["class"]))), 128))]) : z("v-if", true)], 64))), 128))], 16)) : W(n.$slots, "default", Oe(me({ key: 1 }, n.$attrs)));
} });
var Et = Ce(Ct, [["__file", "skeleton.vue"]]);
const At = je(Et, { SkeletonItem: le });
He(le);
const Tt = Ye("conversation-store", { state: () => ({}), actions: { async loadListData({ data: { offset: g, limit: h } = {} } = {}) {
  const { data: { conversations: w = [] } = {} } = await ae.conversation.list({ data: { offset: g, limit: h } });
  return w.map((t = {}, c) => t);
}, async save({ data: g } = {}) {
  return g = { conversation_id: 0, agent_id: 0, ...g }, g.conversation_id || delete g.conversation_id, ae.conversation[g.conversation_id ? "update" : "create"]({ data: g });
}, async chat({ data: g, onDownloadProgress: h, signal: w, hideError: t = false } = {}) {
  var _a2;
  const c = ((_a2 = g == null ? void 0 : g.agent_configs) == null ? void 0 : _a2.completion_params) || { frequency_penalty: 0.5, presence_penalty: 0.5, temperature: 0.2, top_p: 0.75 };
  return g.agent_configs && delete g.agent_configs, g = { conversation_id: 0, frequency_penalty: c.frequency_penalty || 0, messages: [], model: "", presence_penalty: c.presence_penalty || 0, stream: true, temperature: c.temperature || 0, top_p: c.top_p || 0, ...g }, g.agent_id && (g.model = `agent-${g.agent_id}`, delete g.agent_id), ae.conversation.chat({ data: g, onDownloadProgress: h, signal: w, hideError: t });
} } }), Vt = ["data-visible"], St = ["data-visible"], qt = H({ __name: "index", props: { disableTop: { type: Boolean, default: false }, disableBottom: { type: Boolean, default: false }, threshold: { default: 50 }, debounceTime: { default: 200 } }, emits: ["load-top", "load-bottom"], setup(g, { expose: h, emit: w }) {
  const t = g, c = w, n = C(null), k = C(null), s = C(false), i = C(false), r = C(0);
  let D = 0;
  const S = dt(() => {
    if (!n.value)
      return;
    const { scrollTop: b, scrollHeight: x, clientHeight: e } = n.value, u = b, p = u > r.value;
    r.value = u;
    const A = u <= t.threshold, U = u + e >= x - t.threshold;
    !p && A && !t.disableTop && (s.value = true, c("load-top", () => {
      s.value = false;
    })), p && U && !t.disableBottom && (i.value = true, c("load-bottom", () => {
      i.value = false;
    }));
  }, t.debounceTime), y = () => {
    S();
  };
  return h({ scrollToTop: (b = "smooth") => {
    var _a2;
    (_a2 = n.value) == null ? void 0 : _a2.scrollTo({ top: 0, behavior: b });
  }, scrollToBottom: (b = "smooth") => {
    if (!n.value)
      return;
    const { scrollHeight: x, clientHeight: e } = n.value;
    n.value.scrollTo({ top: x - e, behavior: b });
  }, prepareTopLoad: () => {
    n.value && (D = n.value.scrollHeight);
  }, adjustScrollPosition: () => {
    K(() => {
      if (!n.value)
        return;
      const x = n.value.scrollHeight - D;
      x > 0 && (n.value.scrollTop += x);
    });
  } }), (b, x) => (l(), v("div", { ref_key: "containerRef", ref: n, class: "scroll-container", onScrollPassive: y }, [o("div", { ref_key: "contentRef", ref: k, class: "scroll-content" }, [b.disableTop ? z("", true) : (l(), v("div", { key: 0, class: "load-indicator top-indicator", "data-visible": s.value }, [W(b.$slots, "top-loading", { loading: s.value }, () => [x[0] || (x[0] = o("div", { class: "loader" }, [o("div", { class: "loader-spinner" })], -1))], true)], 8, Vt)), W(b.$slots, "default", {}, void 0, true), b.disableBottom ? z("", true) : (l(), v("div", { key: 1, class: "load-indicator bottom-indicator", "data-visible": i.value }, [W(b.$slots, "bottom-loading", { loading: i.value }, () => [x[1] || (x[1] = o("div", { class: "loader" }, [o("div", { class: "loader-spinner" })], -1))], true)], 8, St))], 512)], 544));
} });
const Ft = Ae(qt, [["__scopeId", "data-v-16b4f811"]]), Bt = { class: "flex flex-col pt-7 relative" }, zt = { key: 0, class: "absolute top-0 left-0 w-full h-full bg-black/70 z-10" }, Dt = { class: "flex flex-col items-center justify-center gap-6 w-full h-full box-border" }, Pt = { class: "text-base text-[#fff] text-center mx-8" }, It = { class: "flex items-center justify-between px-4 mb-2" }, Nt = { class: "text-base text-[#1D1E1F]" }, Rt = { class: "text-sm text-[#1D1E1F]" }, Lt = { class: "flex flex-col space-y-4" }, Ut = { class: "px-6 py-3" }, Ot = H({ __name: "chat", emits: ["save"], setup(g, { expose: h, emit: w }) {
  const t = w, c = ue(), n = Tt();
  Ge(), Me();
  const k = C(), s = C([]), i = C(false), r = Z(() => i.value || s.value.some((m) => m.answer.loading)), D = Z(() => {
    var _a2, _b, _c, _d;
    return !!(((_b = (_a2 = c.form_data.custom_config) == null ? void 0 : _a2.file_parse) == null ? void 0 : _b.enable) || ((_d = (_c = c.form_data.custom_config) == null ? void 0 : _c.image_parse) == null ? void 0 : _d.enable));
  }), S = Z(() => {
    var _a2, _b, _c, _d;
    let m = "";
    return ((_b = (_a2 = c.form_data.custom_config) == null ? void 0 : _a2.file_parse) == null ? void 0 : _b.enable) && (m += ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.csv,.txt,.html,.json,.xml,.md"), ((_d = (_c = c.form_data.custom_config) == null ? void 0 : _c.image_parse) == null ? void 0 : _d.enable) && (m += ",image/*"), m;
  }), y = async (m) => {
    const T = new FormData();
    T.append("file", m);
    try {
      const P = await ae.upload({ data: T });
      return { id: P.data.id, url: `${We}/api/preview/${P.data.preview_key || ""}`, size: P.data.size, name: P.data.file_name, mime_type: P.data.mime_type };
    } catch {
      return {};
    }
  }, E = (m) => {
    setTimeout(() => {
      m();
    }, 1200);
  }, F = (m) => {
    setTimeout(() => {
      m();
    }, 1200);
  };
  let q = 0, L = -1, b = {}, x = null;
  const e = async (m, T, P = "") => {
    if (T = T || [], !c.agent_data.agent_id)
      return oe.warning(window.$t("agent_not_found"));
    if (c.agent_data.channel_type || await c.saveAgentData({ hideToast: true }), x && x.abort(), x = new AbortController(), !q) {
      i.value = true;
      const { data: V = {} } = await n.save({ data: { agent_id: c.agent_data.agent_id, title: m } }).finally(() => {
        i.value = false;
      });
      q = V.conversation_id;
    }
    P !== "regenerate" && (T = (T == null ? void 0 : T.map((V) => ({ type: "image", content: `file_id:${V.id}`, filename: V.name, size: V.size, mime_type: V.mime_type, url: V.url }))) || []), s.value.push({ question: { role: "user", content: m, user_files: T }, answer: { loading: true, role: "assistant", content: "", reasoning_expanded: true, reasoning_content: "" } }), L = s.value.length - 1, b = s.value[L] || {};
    let O = [{ role: "user", content: m }];
    T.length && (O = [{ role: "user", content: JSON.stringify([{ type: "text", content: m }, ...T]) }]), n.chat({ data: { conversation_id: q, messages: O, agent_id: c.agent_data.agent_id, agent_configs: c.agent_data.configs }, hideError: true, onDownloadProgress: async ({ chunks: V = [], intact_content: _, intact_reasoning_content: j } = {}) => {
      b.answer.content = _ || b.answer.content || "", b.answer.reasoning_content = j || b.answer.reasoning_content || "", V[0] && V[0].role && (b.answer.role = V[0].role || ""), await K(), k.value && k.value.scrollToBottom();
    }, signal: x.signal }).catch((V) => {
      oe.warning(V.message === "Access token is invalid" ? window.$t("agent_app.check_agent_config_tip") : V.message);
    }).finally(() => {
      b.answer.loading = false, x = null;
    }), await K(), k.value && k.value.scrollToBottom();
  }, u = () => {
    x && (x.abort(), x = null, b.answer.loading = false);
  }, p = (m) => {
    e(m.question.content, m.question.user_files, "regenerate");
  }, A = ({ saveAction: m = false } = {}) => {
    if (m)
      return t("save", { restart: true });
    q = 0, s.value = [], G.value = false;
  }, U = async (m = "") => {
    await Se(m), oe.success(window.$t("action_copy_success"));
  }, G = C(false);
  return Q(() => c.form_data.custom_config, (m) => {
    G.value = false, q && (G.value = true);
  }, { deep: true }), h({ restart: A, getIsConfigChanged: () => G.value }), (m, T) => {
    const P = ee, O = de, V = ut, _ = X("x-icon"), j = X("x-bubble-user"), M = X("x-bubble-assistant"), ze = Ft, De = X("x-sender"), Pe = Ke("debounce");
    return l(), v("div", Bt, [G.value ? (l(), v("div", zt, [o("div", Dt, [o("div", Pt, f(m.$t("debugger_config_change_confirm")), 1), Te((l(), B(P, { type: "primary", size: "large", onClick: T[0] || (T[0] = (R) => A({ saveAction: true })) }, { default: d(() => [I(f(m.$t("save_and_restart")), 1)]), _: 1 })), [[Pe]])])])) : z("", true), o("div", It, [o("div", Nt, f(m.$t("debug_preview")), 1), o("div", { class: "flex-center gap-1 cursor-pointer", onClick: A }, [a(O, null, { default: d(() => [a($(Ve))]), _: 1 }), o("span", Rt, f(m.$t("restart")), 1)])]), a(ze, { ref_key: "scroll_ref", ref: k, class: "flex-1 px-4 relative", "disable-top": true, "disable-bottom": true, onLoadBottom: F, onLoadTop: E }, { default: d(() => [o("div", Lt, [s.value.length ? (l(true), v(N, { key: 1 }, Y(s.value, (R, pe) => (l(), v(N, { key: pe }, [a(j, { content: R.question.content, files: R.question.user_files }, ce({ _: 2 }, [R.answer.loading ? void 0 : { name: "menu", fn: d(() => [a(_, { size: "16", class: "cursor-pointer", name: "copy", onClick: (_e) => U(R.question.content) }, null, 8, ["onClick"])]), key: "0" }]), 1032, ["content", "files"]), a(M, { content: R.answer.content, reasoning: R.answer.reasoning_content, "reasoning-expanded": R.answer.reasoning_expanded, streaming: R.answer.loading, "always-show-menu": pe === s.value.length - 1 }, ce({ _: 2 }, [R.answer.loading ? void 0 : { name: "menu", fn: d(() => [a(_, { size: "16", class: "cursor-pointer", name: "copy", onClick: (_e) => U(R.answer.content) }, null, 8, ["onClick"]), a(_, { size: "16", class: "cursor-pointer", name: "refresh", onClick: (_e) => p(R) }, null, 8, ["onClick"])]), key: "0" }]), 1032, ["content", "reasoning", "reasoning-expanded", "streaming", "always-show-menu"])], 64))), 128)) : (l(), B(V, { key: 0, class: "mt-10", description: m.$t("chat.empty_desc") }, null, 8, ["description"]))])]), _: 1 }, 512), o("div", Ut, [a(De, { "enable-upload": D.value, "accept-types": S.value, "http-request": y, loading: r.value, onSend: e, onStop: u }, null, 8, ["enable-upload", "accept-types", "loading"])])]);
  };
} }), jt = { class: "flex flex-col px-4" }, Ht = { class: "flex items-center justify-between mb-5" }, Yt = { class: "text-base text-[#1D1E1F]" }, Gt = { class: "flex-center gap-1 cursor-pointer" }, Mt = { class: "text-sm text-[#1D1E1F]" }, Kt = { key: 0, class: "text-xs text-[#182b50] text-opacity-30 mt-1" }, Wt = { key: 0, class: "text-xs text-[#182b50] text-opacity-30 mt-1" }, Jt = { key: 0, class: "text-xs text-[#182b50] text-opacity-30 mt-1" }, Xt = { key: 0, class: "text-xs text-[#182b50] text-opacity-30 mt-1" }, Zt = { class: "flex flex-wrap gap-3" }, Qt = ["onClick"], ea = { class: "text-xs text-[#182B50] text-opacity-80" }, ta = { key: 0, class: "text-xs text-[#182b50] text-opacity-30 mt-1" }, aa = H({ __name: "completion", setup(g, { expose: h }) {
  const w = C([{ id: 1, type: "text", label: window.$t("model_name"), placeholder: window.$t("model_name_placeholder"), maxlength: 20, showWordLimit: true, required: true, value: "gpt-3.5-turbo" }, { id: 2, type: "textarea", label: window.$t("prompt"), placeholder: window.$t("prompt_placeholder"), maxlength: 200, showWordLimit: true, required: true, value: "\u4F60\u662F\u4E00\u4E2AAI\u52A9\u624B" }]), t = (i) => function(r, D, S) {
    i.required ? i.value.some((E) => E.trim()) ? S() : S(new Error(`\u8BF7\u6DFB\u52A0${i.label}`)) : S();
  }, c = (i) => {
    i.temp = "", i.focus = true;
  }, n = (i) => {
    const r = i.temp.trim();
    r && (i.value.unshift(r), i.temp = ""), i.focus = false;
  }, k = (i, r) => {
    i.value.splice(r, 1);
  }, s = () => w.value.reduce((i, r) => (i[`${r.id}`] = r.type === "select" && !r.multiple ? r.value : Array.isArray(r.value) ? r.value.join(",") : String(r.value), i), {});
  return h({ validate(i) {
    return formRef.value.validate((r) => {
      r && i && i(s());
    });
  } }), (i, r) => {
    const D = de, S = qe, y = Fe, E = ft, F = pt, q = _t, L = X("Close"), b = Be, x = ee;
    return l(), v("div", jt, [o("div", Ht, [o("div", Yt, f(i.$t("debug_preview")), 1), o("div", Gt, [a(D, null, { default: d(() => [a($(Ve))]), _: 1 }), o("span", Mt, f(i.$t("restart")), 1)])]), z("", true), a(b, { ref: "formRef", model: w.value, "label-position": "top", "require-asterisk-position": "right", onSubmit: r[0] || (r[0] = se(() => {
    }, ["prevent"])) }, { default: d(() => [(l(true), v(N, null, Y(w.value, (e, u) => (l(), v(N, { key: e.id }, [e.type === "text" ? (l(), B(y, { key: 0, prop: `${u}.value`, label: e.label, required: e.required, rules: [{ required: e.required, message: "\u8BF7\u8F93\u5165", trigger: "blur" }] }, { default: d(() => [a(S, { modelValue: e.value, "onUpdate:modelValue": (p) => e.value = p, size: "large", placeholder: e.placeholder, maxlength: e.maxlength, "show-word-limit": e.showWordLimit }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "maxlength", "show-word-limit"]), e.desc ? (l(), v("div", Kt, f(e.desc), 1)) : z("", true)]), _: 2 }, 1032, ["prop", "label", "required", "rules"])) : e.type === "textarea" ? (l(), B(y, { key: 1, prop: `${u}.value`, label: e.label, required: e.required, rules: [{ required: e.required, message: "\u8BF7\u8F93\u5165", trigger: "blur" }] }, { default: d(() => [a(S, { modelValue: e.value, "onUpdate:modelValue": (p) => e.value = p, size: "large", type: "textarea", rows: "4", resize: "none", placeholder: e.placeholder, maxlength: e.maxlength, "show-word-limit": e.showWordLimit }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "maxlength", "show-word-limit"]), e.desc ? (l(), v("div", Wt, f(e.desc), 1)) : z("", true)]), _: 2 }, 1032, ["prop", "label", "required", "rules"])) : e.type === "inputNumber" ? (l(), B(y, { key: 2, prop: `${u}.value`, label: e.label, required: e.required, rules: [{ required: e.required, message: "\u8BF7\u8F93\u5165", trigger: "blur" }] }, { default: d(() => [o("div", null, [a(E, { modelValue: e.value, "onUpdate:modelValue": (p) => e.value = p, size: "large", min: 1, placeholder: e.placeholder }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]), e.desc ? (l(), v("div", Jt, f(e.desc), 1)) : z("", true)])]), _: 2 }, 1032, ["prop", "label", "required", "rules"])) : e.type === "select" ? (l(), B(y, { key: 3, prop: `${u}.value`, label: e.label, required: e.required, rules: [{ required: e.required, message: "\u8BF7\u9009\u62E9", trigger: "change" }] }, { default: d(() => [a(q, { modelValue: e.value, "onUpdate:modelValue": (p) => e.value = p, class: "w-full", size: "large", multiple: e.multiple, placeholder: e.placeholder }, { default: d(() => [(l(true), v(N, null, Y(e.options, (p) => (l(), B(F, { key: p.value, label: p.label, value: p.label }, null, 8, ["label", "value"]))), 128))]), _: 2 }, 1032, ["modelValue", "onUpdate:modelValue", "multiple", "placeholder"]), e.desc ? (l(), v("div", Xt, f(e.desc), 1)) : z("", true)]), _: 2 }, 1032, ["prop", "label", "required", "rules"])) : e.type === "tag" ? (l(), B(y, { key: 4, prop: `${u}.value`, label: e.label, required: e.required, rules: [{ validator: t(e), trigger: "change" }] }, { default: d(() => [o("div", null, [o("div", Zt, [(l(true), v(N, null, Y(e.value, (p, A) => (l(), v("div", { key: A, class: "border bordre-[#B0B7C3] rounded-sm min-h-[32px] inline-flex items-center px-3 py-1 text-xs text-[#182B50] text-opacity-80 break-all" }, [I(f(p) + " ", 1), a(D, { class: "cursor-pointer ml-1", color: "#d2d5dc", onClick: (U) => k(e, A) }, { default: d(() => [a(L)]), _: 2 }, 1032, ["onClick"])]))), 128)), e.focus ? (l(), B(S, { key: 0, modelValue: e.temp, "onUpdate:modelValue": (p) => e.temp = p, autofocus: "", style: { width: "104px" }, class: "h-8", placeholder: i.$t("form_input_placeholder"), onKeypress: Je((p) => n(e), ["enter"]), onBlur: (p) => n(e) }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "onKeypress", "onBlur"])) : (l(), v("div", { key: 1, class: "border bordre-[#B0B7C3] border-dashed rounded-sm h-8 inline-flex items-center px-3 cursor-pointer", onClick: (p) => c(e) }, [o("span", ea, "+ " + f(i.$t("action_add")), 1)], 8, Qt))]), e.desc ? (l(), v("div", ta, f(e.desc), 1)) : z("", true)])]), _: 2 }, 1032, ["prop", "label", "required", "rules"])) : z("", true)], 64))), 128))]), _: 1 }, 8, ["model"]), o("div", null, [a(x, { type: "primary", size: "large" }, { default: d(() => [I(f(i.$t("start_running")), 1)]), _: 1 })])]);
  };
} });
const oa = { class: "h-full overflow-y-auto relative" }, sa = { class: "p-6 bg-white rounded" }, la = { class: "text-base text-[#1D1E1F]" }, na = { class: "text-sm text-[#9A9A9A] mt-4" }, ra = { class: "flex flex-wrap gap-5 mt-5" }, ia = { class: "bg-white rounded p-5 relative" }, ca = { class: "text-sm text-[#9A9A9A]" }, da = { class: "text-sm text-[#1D1E1F] break-words mt-4" }, ua = { class: "absolute right-8 -bottom-9" }, pa = { class: "bg-[#E6EEFF] rounded p-5 mt-4" }, _a = { class: "flex items-center justify-between" }, fa = { class: "text-sm text-[#9A9A9A]" }, ma = { class: "text-sm text-[#1D1E1F] text-wrap break-words whitespace-pre-wrap mt-4 truncate line-clamp-6", style: { "-webkit-line-clamp": "12" } }, va = { class: "absolute inset-0 items-center justify-center bg-[#393C40] bg-opacity-10 rounded hidden group-hover:flex" }, ga = { class: "text-base text-[#9A9A9A] mt-4" }, ha = { class: "p-6 bg-white rounded mt-6" }, ya = { class: "text-base text-[#1D1E1F]" }, ba = { class: "text-sm text-[#9A9A9A] mt-4" }, xa = { class: "flex flex-wrap justify-between gap-5 mt-5" }, wa = { key: 0, class: "w-[220px] h-[205px]" }, $a = ["src"], ka = ["onClick"], Ca = { class: "text-base text-[#9A9A9A] mt-4" }, Ea = ["title"], Aa = ["title"], Ta = { class: "absolute inset-0 items-center justify-center bg-[#393C40] bg-opacity-10 rounded hidden group-hover:flex" }, Va = { class: "py-4 flex items-center justify-center" }, Sa = { class: "py-4 flex items-center justify-center" }, qa = H({ __name: "guide", setup(g) {
  const h = ue(), w = C(), t = C(), c = C(h.form_data.use_cases.filter((e) => e.type === "case")), n = C([]);
  for (let e = 0; e < 3; e++) {
    const u = h.form_data.use_cases.filter((p) => p.type === "scene");
    n.value.push(u[e] || { id: "", image: "", scene: "", desc: "" });
  }
  const k = C(false), s = ve({ id: "", input_text: "", output_text: "" }), i = C(false), r = ve({ id: "", image: "", scene: "", desc: "" }), D = async (e = "") => {
    await Se(e), oe.success(window.$t("action_copy_success"));
  }, S = async ({ data: e = {} } = {}) => {
    s.id = e.id || "", s.input_text = e.input_text || "", s.output_text = e.output_text || "", k.value = true, await K(), w.value.clearValidate();
  }, y = ({ data: e = {}, index: u = -1 } = {}) => {
    c.value.splice(u, 1);
  }, E = () => {
    w.value.validate((e) => {
      if (!e)
        return;
      const u = s.id || he(8), p = c.value.find((A) => A.id === u);
      p ? (p.input_text = s.input_text || "", p.output_text = s.output_text || "") : c.value.push({ type: "case", id: u, input_text: s.input_text || "", output_text: s.output_text || "" }), F();
    });
  }, F = () => {
    k.value = false;
  }, q = async ({ data: e = {} } = {}) => {
    r.id = e.id || "", r.image = e.image || "", r.scene = e.scene || "", r.desc = e.desc || "", i.value = true, await K(), t.value.clearValidate();
  }, L = ({ data: e = {}, index: u = -1 } = {}) => {
    n.value.splice(u, 1), n.value.push({ id: "", image: "", scene: "", desc: "" });
  }, b = () => {
    t.value.validate((e) => {
      if (!e)
        return;
      const u = r.id || he(8), p = n.value.find((A) => A.id === u);
      if (p)
        p.image = r.image || "", p.scene = r.scene || "", p.desc = r.desc || "";
      else {
        const A = n.value.findIndex((U) => !U.id);
        A >= 0 && n.value.splice(A, 1, { type: "scene", id: u, image: r.image || "", scene: r.scene || "", desc: r.desc || "" });
      }
      x();
    });
  }, x = () => {
    i.value = false;
  };
  return Q(() => c.value, () => {
    h.form_data.use_cases = [...c.value, ...n.value].filter((e) => e.id);
  }, { immediate: true, deep: true }), Q(() => n.value, () => {
    h.form_data.use_cases = [...c.value, ...n.value].filter((e) => e.id);
  }, { immediate: true, deep: true }), (e, u) => {
    const p = Xe, A = ee, U = de, G = At, m = qe, T = Fe, P = Be, O = ee, V = Ze;
    return l(), v("div", oa, [o("div", sa, [o("h4", la, f(e.$t("usage_case")), 1), o("div", na, f(e.$t("usage_case_desc")), 1), o("div", ra, [(l(true), v(N, null, Y(c.value, (_, j) => (l(), v("div", { key: j, class: "flex-none w-[48%] box-border p-5 bg-[#F7F9FC] rounded relative group cursor-pointer break-inside-avoid" }, [o("div", ia, [o("div", ca, f(e.$t("input")), 1), o("div", da, f(_.input_text || "--"), 1), o("div", ua, [a(p, { width: "50", height: "50", name: "arrow-down", color: "white" })])]), o("div", pa, [o("div", _a, [o("div", fa, f(e.$t("output")), 1), a(p, { name: "copy", color: "#4F5052", onClick: (M) => D(_.output_text) }, null, 8, ["onClick"])]), o("div", ma, f(_.output_text || "--"), 1)]), o("div", va, [a(A, { type: "primary", onClick: (M) => S({ data: _ }) }, { default: d(() => [I(f(e.$t("action_edit")), 1)]), _: 2 }, 1032, ["onClick"]), a(A, { onClick: (M) => y({ data: _, index: j }) }, { default: d(() => [I(f(e.$t("action_delete")), 1)]), _: 2 }, 1032, ["onClick"])])]))), 128)), o("div", { class: "flex-none w-[48%] h-[140px] flex-center flex-col p-5 bg-[#F7F9FC] rounded cursor-pointer", onClick: se(S, ["stop"]) }, [a(U, { size: "28", color: "#9A9A9A" }, { default: d(() => [a($(ge))]), _: 1 }), o("p", ga, f(e.$t("action_add")), 1)])])]), o("div", ha, [o("h4", ya, f(e.$t("usage_scene")), 1), o("div", ba, f(e.$t("usage_scene_desc")), 1), o("div", xa, [(l(true), v(N, null, Y(n.value, (_, j) => (l(), v("div", { key: j, class: "flex-1 max-w-[330px] px-4 box-border flex flex-col items-center text-center pt-3 pb-10 relative cursor-pointer group" }, [_.image ? (l(), v("div", wa, [o("img", { src: _.image, class: "w-full h-full object-cover" }, null, 8, $a)])) : (l(), v("div", { key: 1, class: "w-[220px] h-[205px] border flex-center flex-col mx-auto", onClick: se((M) => q({ data: _ }), ["stop"]) }, [a(U, { size: "28", color: "#9A9A9A" }, { default: d(() => [a($(ge))]), _: 1 }), o("p", Ca, f(e.$t("action_add")), 1)], 8, ka)), _.id ? (l(), v(N, { key: 2 }, [o("h6", { class: "text-base text-[#1D1E1F] mt-5 text-center max-w-[10em] truncate", title: _.scene || "" }, f(_.scene || ""), 9, Ea), o("p", { class: "text-xs text-[#9A9A9A] mt-4 text-center text-wrap break-words whitespace-pre-wrap max-w-[24em] truncate line-clamp-6", title: _.desc || "" }, f(_.desc || ""), 9, Aa), o("div", Ta, [a(A, { type: "primary", onClick: se((M) => q({ data: _ }), ["stop"]) }, { default: d(() => [I(f(e.$t("action_edit")), 1)]), _: 2 }, 1032, ["onClick"]), a(A, { onClick: (M) => L({ data: _, index: j }) }, { default: d(() => [I(f(e.$t("action_delete")), 1)]), _: 2 }, 1032, ["onClick"])])], 64)) : (l(), v(N, { key: 3 }, [_.scene ? z("", true) : (l(), B(G, { key: 0, class: "mt-6", rows: 1 }))], 64))]))), 128))])]), W(e.$slots, "footer"), a(V, { modelValue: k.value, "onUpdate:modelValue": u[2] || (u[2] = (_) => k.value = _), title: s.id ? e.$t("action_edit") : e.$t("action_add"), "align-center": "", width: "600px" }, { footer: d(() => [o("div", Va, [a(O, { class: "w-[96px] h-[36px]", type: "primary", onClick: E }, { default: d(() => [I(f(e.$t("action_confirm")), 1)]), _: 1 }), a(O, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: F }, { default: d(() => [I(f(e.$t("action_cancel")), 1)]), _: 1 })])]), default: d(() => [a(P, { ref_key: "case_form_ref", ref: w, model: s, "label-width": "64px", "label-position": "left" }, { default: d(() => [a(T, { label: e.$t("input"), prop: "input_text", rules: [...$(J)({ message: "form_input_placeholder" }), { max: 200, message: e.$t("form_input_placeholder_max_length", { max: 200 }) }] }, { default: d(() => [a(m, { size: "large", modelValue: s.input_text, "onUpdate:modelValue": u[0] || (u[0] = (_) => s.input_text = _), maxlength: 200, "show-word-limit": "" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"]), a(T, { label: e.$t("output"), prop: "output_text", rules: [...$(J)({ message: "form_input_placeholder" }), { max: 1e3, message: e.$t("form_input_placeholder_max_length", { max: 1e3 }) }] }, { default: d(() => [a(m, { type: "textarea", size: "large", rows: "10", resize: "none", modelValue: s.output_text, "onUpdate:modelValue": u[1] || (u[1] = (_) => s.output_text = _), maxlength: 1e3, "show-word-limit": "" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue", "title"]), a(V, { modelValue: i.value, "onUpdate:modelValue": u[6] || (u[6] = (_) => i.value = _), title: r.id ? e.$t("action_edit") : e.$t("action_add"), "align-center": "", width: "600px" }, { footer: d(() => [o("div", Sa, [a(O, { class: "w-[96px] h-[36px]", type: "primary", onClick: b }, { default: d(() => [I(f(e.$t("action_confirm")), 1)]), _: 1 }), a(O, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: x }, { default: d(() => [I(f(e.$t("action_cancel")), 1)]), _: 1 })])]), default: d(() => [a(P, { ref_key: "scene_form_ref", ref: t, model: r, "label-width": "102px", "label-position": "left" }, { default: d(() => [a(T, { label: e.$t("pictorial_image"), prop: "image", rules: $(J)({ message: "form_upload_placeholder" }) }, { default: d(() => [a(mt, { class: "!w-[120px] !h-[112px]", modelValue: r.image, "onUpdate:modelValue": u[3] || (u[3] = (_) => r.image = _) }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"]), a(T, { label: e.$t("scene"), prop: "scene", rules: [...$(J)({ message: "form_input_placeholder" }), { max: 20, message: e.$t("form_input_placeholder_max_length", { max: 20 }) }] }, { default: d(() => [a(m, { size: "large", modelValue: r.scene, "onUpdate:modelValue": u[4] || (u[4] = (_) => r.scene = _), maxlength: 20, "show-word-limit": "" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"]), a(T, { label: e.$t("description"), prop: "desc", rules: [...$(J)({ message: "form_input_placeholder" }), { max: 50, message: e.$t("form_input_placeholder_max_length", { max: 50 }) }] }, { default: d(() => [a(m, { type: "textarea", size: "large", rows: "5", resize: "none", modelValue: r.desc, "onUpdate:modelValue": u[5] || (u[5] = (_) => r.desc = _), maxlength: 50, "show-word-limit": "" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue", "title"])]);
  };
} }), Fa = { id: "app-config-full-screen-hook", class: "relative h-full flex bg-white" }, Ba = { class: "flex-1 flex flex-col overflow-hidden" }, za = { key: 0, class: "border-t px-4 py-5" }, Da = { class: "border-t px-4 py-5 mt-8 sticky bottom-0 left-0 right-0 bg-white z-10" }, Pa = H({ __name: "index", setup(g) {
  const h = Qe(), w = et(), t = ue(), c = C(), n = C(), k = C("first"), s = C({});
  be("channelConfig", s);
  const i = Z(() => s.value.channel_type == te.get(re) ? re : s.value.channel_type == te.get(ne) ? ne : "");
  be("channelTypeKey", i);
  const r = Z(() => ![xe, we].includes(t.agent_type) || s.value.channel_id), D = async ({ restart: y = false } = {}) => {
    var _a2, _b;
    if (t.saving)
      return;
    const E = n.value;
    let F = "";
    if (E && E.save) {
      t.saving = true;
      const { data: q = {} } = await E.save().catch(() => {
        t.saving = false;
      });
      F = q.agent_id;
    } else if (E && E.validateForm) {
      if (!await E.validateForm())
        return Promise.reject();
      await t.saveAgentData().catch(() => {
        t.saving = false;
      }), t.saving = true, F = t.agent_id;
    }
    ot.emit("agent-change", { agent_id: F }), F && await w.replace({ name: "AgentCreate", query: { type: t.agent_type, agent_id: F } }), t.saving = false, c.value && (y || ((_a2 = c.value) == null ? void 0 : _a2.getIsConfigChanged())) && ((_b = c.value) == null ? void 0 : _b.restart());
  };
  let S = true;
  return Q(() => t.form_data.custom_config.coze_workspace_id, (y) => {
    S || t.loadCozeBotOptions(y);
  }), Ee(async () => {
    t.resetState(), await K();
    const y = h.query.type || "prompt";
    switch (t.agent_id = Number(h.query.agent_id), t.agent_type = y, t.form_data.logo = vt.get(y), t.form_data.group_id = Number(h.query.group_id), t.form_data.custom_config.agent_type = y, await t.loadDetailData(), t.loadGroupOptions(), t.loadChannelOptions(), t.loadSubscriptionOptions(), t.agent_type) {
      case ht:
        t.loadCozeWorkspaceOptions().then(() => {
          t.loadCozeBotOptions(t.form_data.custom_config.coze_workspace_id), S = false;
        });
        break;
      case gt:
        t.loadAppBuilderBotOptions();
        break;
    }
    switch (y) {
      case we:
        s.value.name = ye.get(at), s.value.channel_type = te.get(re);
        break;
      case xe:
        s.value.name = ye.get(tt), s.value.channel_type = te.get(ne);
        break;
    }
    t.form_data.channel_type || (t.form_data.channel_type = s.value.channel_type || 0), t.form_data.model || (await K(), t.form_data.model = i.value);
  }), (y, E) => {
    const F = it, q = ee, L = nt, b = rt, x = lt, e = st;
    return l(), B(x, { class: "px-[60px] py-8" }, { default: d(() => [a(F, { back: "", title: y.$t($(t).agent_option_data.label), class: "mb-5" }, null, 8, ["title"]), a(b, { modelValue: k.value, "onUpdate:modelValue": E[0] || (E[0] = (u) => k.value = u), class: "flex-1 agent-tabs el-tabs--full" }, { default: d(() => [a(L, { label: y.$t("app_config"), name: "first", lazy: "" }, { default: d(() => [Te((l(), v("div", Fa, [o("div", Ba, [a(ct, { ref_key: "agentFormRef", ref: n, class: "flex-1 py-7 px-4 overflow-y-auto", "agent-type": $(t).agent_type }, null, 8, ["agent-type"]), r.value ? (l(), v("div", za, [a(q, { type: "primary", size: "large", loading: $(t).saving, onClick: D }, { default: d(() => [I(f(y.$t("action_save")), 1)]), _: 1 }, 8, ["loading"])])) : z("", true)]), E[1] || (E[1] = o("div", { class: "flex-none w-px border-r" }, null, -1)), $(t).agent_option_data.response === "chat" ? (l(), B(Ot, { key: 0, ref_key: "chatRef", ref: c, class: "flex-1 overflow-hidden", onSave: D }, null, 512)) : $(t).agent_option_data.response === "completion" ? (l(), B(aa, { key: 1, class: "flex-1 py-7" })) : z("", true)])), [[e, y.loading]])]), _: 1 }, 8, ["label"]), a(L, { label: y.$t("usage_guide"), name: "second", lazy: "" }, { default: d(() => [a(qa, null, ce({ _: 2 }, [r.value ? { name: "footer", fn: d(() => [o("div", Da, [a(q, { type: "primary", size: "large", loading: $(t).saving, onClick: D }, { default: d(() => [I(f(y.$t("action_save")), 1)]), _: 1 }, 8, ["loading"])])]), key: "0" } : void 0]), 1024)]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["modelValue"])]), _: 1 });
  };
} });
const no = Ae(Pa, [["__scopeId", "data-v-39f90316"]]);
export {
  no as default
};
