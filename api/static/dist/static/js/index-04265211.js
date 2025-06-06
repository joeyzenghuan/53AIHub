import { ap as be, aH as Se, u as L, au as xe, b as l, c as g, h as F, z as w, cI as qe, e as B, n as re, aC as we, br as ue, r as A, o as $e, aG as ae, aU as Fe, b9 as Be, c8 as ze, F as D, G as O, q as M, f as o, aA as pe, b$ as De, aD as Pe, c7 as Ne, ad as Ie, bK as Q, d as s, W as j, p as ke, b5 as Le, b4 as Re, al as J, cC as W, t as v, i as d, bI as Ce, bd as ie, bJ as Ue, a9 as ee, bF as Ee, y as ce, H as P, b0 as Oe, am as te, X as Ae, aa as Te, ac as Ve, $ as oe, ae as _e, a6 as me, a4 as K, cJ as fe, L as je, Y as He, by as Ye, x as Ge, cK as ve, cL as Me, M as Z, N as le, cM as Ke, O as ne, an as ge, g as We, J as Je } from "./index-6feda8be.js";
import { v as Xe } from "./el-loading-7d1392af.js";
import { _ as Ze } from "./index-35dfd48d.js";
import { E as Qe, a as et } from "./el-tab-pane-d10c2129.js";
import { _ as tt } from "./index.vue_vue_type_script_setup_true_lang-bf5c9b93.js";
import { u as de, _ as at } from "./index.vue_vue_type_script_setup_true_lang-1b57cb11.js";
import { d as ot } from "./debounce-f4e6390f.js";
import { E as st } from "./el-empty-1de6f286.js";
import "./el-tag-41766c4c.js";
import { E as lt, a as nt } from "./el-select-15a52e42.js";
import "./el-scrollbar-1c0147c5.js";
import { E as rt } from "./el-input-number-a4222484.js";
import { _ as it } from "./image.vue_vue_type_style_index_0_lang-eb9d831e.js";
import { g as ct, c as dt, b as ut, e as he, d as ye } from "./agent-fc880aa9.js";
import "./index-43e50f65.js";
import "./el-table-column-97a25b03.js";
import "./debounce-bf10b7f9.js";
import "./isEqual-8788d17b.js";
import "./group-acb26c68.js";
import "./el-switch-d1b774bc.js";
import "./el-radio-7abec385.js";
import "./dropdown-4cbb8c7d.js";
import "./index-17af2188.js";
const pt = be({ animated: { type: Boolean, default: false }, count: { type: Number, default: 1 }, rows: { type: Number, default: 3 }, loading: { type: Boolean, default: true }, throttle: { type: Se([Number, Object]) } }), _t = be({ variant: { type: String, values: ["circle", "rect", "h1", "h3", "text", "caption", "p", "image", "button"], default: "text" } }), mt = L({ name: "ElSkeletonItem" }), ft = L({ ...mt, props: _t, setup(h) {
  const u = xe("skeleton");
  return (b, t) => (l(), g("div", { class: re([w(u).e("item"), w(u).e(b.variant)]) }, [b.variant === "image" ? (l(), F(w(qe), { key: 0 })) : B("v-if", true)], 2));
} });
var se = we(ft, [["__file", "skeleton-item.vue"]]);
const vt = (h, u = 0) => {
  if (u === 0)
    return h;
  const b = ue(u) && !!u.initVal, t = A(b);
  let _ = null;
  const n = (m) => {
    if (Be(m)) {
      t.value = h.value;
      return;
    }
    _ && clearTimeout(_), _ = setTimeout(() => {
      t.value = h.value;
    }, m);
  }, $ = (m) => {
    m === "leading" ? Fe(u) ? n(u) : n(u.leading) : ue(u) ? n(u.trailing) : t.value = false;
  };
  return $e(() => $("leading")), ae(() => h.value, (m) => {
    $(m ? "leading" : "trailing");
  }), t;
}, gt = L({ name: "ElSkeleton" }), ht = L({ ...gt, props: pt, setup(h, { expose: u }) {
  const b = h, t = xe("skeleton"), _ = vt(ze(b, "loading"), b.throttle);
  return u({ uiLoading: _ }), (n, $) => w(_) ? (l(), g("div", pe({ key: 0, class: [w(t).b(), w(t).is("animated", n.animated)] }, n.$attrs), [(l(true), g(D, null, O(n.count, (m) => (l(), g(D, { key: m }, [w(_) ? M(n.$slots, "template", { key: m }, () => [o(se, { class: re(w(t).is("first")), variant: "p" }, null, 8, ["class"]), (l(true), g(D, null, O(n.rows, (i) => (l(), F(se, { key: i, class: re([w(t).e("paragraph"), w(t).is("last", i === n.rows && n.rows > 1)]), variant: "p" }, null, 8, ["class"]))), 128))]) : B("v-if", true)], 64))), 128))], 16)) : M(n.$slots, "default", De(pe({ key: 1 }, n.$attrs)));
} });
var yt = we(ht, [["__file", "skeleton.vue"]]);
const bt = Pe(yt, { SkeletonItem: se });
Ne(se);
const xt = Ie("conversation-store", { state: () => ({}), actions: { async loadListData({ data: { offset: h, limit: u } = {} } = {}) {
  const { data: { conversations: b = [] } = {} } = await Q.conversation.list({ data: { offset: h, limit: u } });
  return b.map((t = {}, _) => t);
}, async save({ data: h } = {}) {
  return h = { conversation_id: 0, agent_id: 0, ...h }, h.conversation_id || delete h.conversation_id, Q.conversation[h.conversation_id ? "update" : "create"]({ data: h });
}, async chat({ data: h, onDownloadProgress: u, signal: b, hideError: t = false } = {}) {
  var _a2;
  const _ = ((_a2 = h == null ? void 0 : h.agent_configs) == null ? void 0 : _a2.completion_params) || { frequency_penalty: 0.5, presence_penalty: 0.5, temperature: 0.2, top_p: 0.75 };
  return h.agent_configs && delete h.agent_configs, h = { conversation_id: 0, frequency_penalty: _.frequency_penalty || 0, messages: [], model: "", presence_penalty: _.presence_penalty || 0, stream: true, temperature: _.temperature || 0, top_p: _.top_p || 0, ...h }, h.agent_id && (h.model = `agent-${h.agent_id}`, delete h.agent_id), Q.conversation.chat({ data: h, onDownloadProgress: u, signal: b, hideError: t });
} } }), wt = ["data-visible"], $t = ["data-visible"], kt = L({ __name: "index", props: { disableTop: { type: Boolean, default: false }, disableBottom: { type: Boolean, default: false }, threshold: { default: 50 }, debounceTime: { default: 200 } }, emits: ["load-top", "load-bottom"], setup(h, { expose: u, emit: b }) {
  const t = h, _ = b, n = A(null), $ = A(null), m = A(false), i = A(false), r = A(0);
  let z = 0;
  const f = ot(() => {
    if (!n.value)
      return;
    const { scrollTop: C, scrollHeight: E, clientHeight: e } = n.value, p = C, a = p > r.value;
    r.value = p;
    const y = p <= t.threshold, T = p + e >= E - t.threshold;
    !a && y && !t.disableTop && (m.value = true, _("load-top", () => {
      m.value = false;
    })), a && T && !t.disableBottom && (i.value = true, _("load-bottom", () => {
      i.value = false;
    }));
  }, t.debounceTime), x = () => {
    f();
  };
  return u({ scrollToTop: (C = "smooth") => {
    var _a2;
    (_a2 = n.value) == null ? void 0 : _a2.scrollTo({ top: 0, behavior: C });
  }, scrollToBottom: (C = "smooth") => {
    if (!n.value)
      return;
    const { scrollHeight: E, clientHeight: e } = n.value;
    n.value.scrollTo({ top: E - e, behavior: C });
  }, prepareTopLoad: () => {
    n.value && (z = n.value.scrollHeight);
  }, adjustScrollPosition: () => {
    j(() => {
      if (!n.value)
        return;
      const E = n.value.scrollHeight - z;
      E > 0 && (n.value.scrollTop += E);
    });
  } }), (C, E) => (l(), g("div", { ref_key: "containerRef", ref: n, class: "scroll-container", onScrollPassive: x }, [s("div", { ref_key: "contentRef", ref: $, class: "scroll-content" }, [C.disableTop ? B("", true) : (l(), g("div", { key: 0, class: "load-indicator top-indicator", "data-visible": m.value }, [M(C.$slots, "top-loading", { loading: m.value }, () => [E[0] || (E[0] = s("div", { class: "loader" }, [s("div", { class: "loader-spinner" })], -1))], true)], 8, wt)), M(C.$slots, "default", {}, void 0, true), C.disableBottom ? B("", true) : (l(), g("div", { key: 1, class: "load-indicator bottom-indicator", "data-visible": i.value }, [M(C.$slots, "bottom-loading", { loading: i.value }, () => [E[1] || (E[1] = s("div", { class: "loader" }, [s("div", { class: "loader-spinner" })], -1))], true)], 8, $t))], 512)], 544));
} });
const Ct = ke(kt, [["__scopeId", "data-v-16b4f811"]]), Et = { class: "flex flex-col pt-7" }, At = { class: "flex items-center justify-between px-4 mb-2" }, Tt = { class: "text-base text-[#1D1E1F]" }, Vt = { class: "text-sm text-[#1D1E1F]" }, St = { class: "flex flex-col space-y-4" }, qt = { class: "px-6 py-3" }, Ft = L({ __name: "chat", setup(h) {
  const u = de(), b = xt();
  Le(), Re();
  const t = A(), _ = A([]), n = A(false), $ = J(() => n.value || _.value.some((a) => a.answer.loading)), m = J(() => {
    var _a2, _b, _c, _d;
    return !!(((_b = (_a2 = u.form_data.custom_config) == null ? void 0 : _a2.file_parse) == null ? void 0 : _b.enable) || ((_d = (_c = u.form_data.custom_config) == null ? void 0 : _c.image_parse) == null ? void 0 : _d.enable));
  }), i = J(() => {
    var _a2, _b, _c, _d;
    let a = "";
    return ((_b = (_a2 = u.form_data.custom_config) == null ? void 0 : _a2.file_parse) == null ? void 0 : _b.enable) && (a += ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.csv,.txt,.html,.json,.xml,.md"), ((_d = (_c = u.form_data.custom_config) == null ? void 0 : _c.image_parse) == null ? void 0 : _d.enable) && (a += ",image/*"), a;
  }), r = async (a) => {
    const y = new FormData();
    y.append("file", a);
    try {
      const T = await Q.upload({ data: y });
      return { id: T.data.id, url: `${Ue}/api/preview/${T.data.preview_key || ""}`, size: T.data.size, name: T.data.file_name, mime_type: T.data.mime_type };
    } catch {
      return {};
    }
  }, z = (a) => {
    setTimeout(() => {
      a();
    }, 1200);
  }, f = (a) => {
    setTimeout(() => {
      a();
    }, 1200);
  };
  let x = 0, q = -1, V = {}, S = null;
  const N = async (a, y, T = "") => {
    if (y = y || [], !u.agent_data.agent_id)
      return ee.warning(window.$t("agent_not_found"));
    if (u.agent_data.channel_type || await u.saveAgentData({ hideToast: true }), S && S.abort(), S = new AbortController(), !x) {
      n.value = true;
      const { data: k = {} } = await b.save({ data: { agent_id: u.agent_data.agent_id, title: a } }).finally(() => {
        n.value = false;
      });
      x = k.conversation_id;
    }
    T !== "regenerate" && (y = (y == null ? void 0 : y.map((k) => ({ type: "image", content: `file_id:${k.id}`, filename: k.name, size: k.size, mime_type: k.mime_type, url: k.url }))) || []), _.value.push({ question: { role: "user", content: a, user_files: y }, answer: { loading: true, role: "assistant", content: "", reasoning_expanded: true, reasoning_content: "" } }), q = _.value.length - 1, V = _.value[q] || {};
    let H = [{ role: "user", content: a }];
    y.length && (H = [{ role: "user", content: JSON.stringify([{ type: "text", content: a }, ...y]) }]), b.chat({ data: { conversation_id: x, messages: H, agent_id: u.agent_data.agent_id, agent_configs: u.agent_data.configs }, hideError: true, onDownloadProgress: async ({ chunks: k = [], intact_content: I, intact_reasoning_content: Y } = {}) => {
      V.answer.content = I || V.answer.content || "", V.answer.reasoning_content = Y || V.answer.reasoning_content || "", k[0] && k[0].role && (V.answer.role = k[0].role || ""), await j(), t.value && t.value.scrollToBottom();
    }, signal: S.signal }).catch((k) => {
      ee.warning(k.message === "Access token is invalid" ? window.$t("agent_app.check_agent_config_tip") : k.message);
    }).finally(() => {
      V.answer.loading = false, S = null;
    }), await j(), t.value && t.value.scrollToBottom();
  }, C = () => {
    S && (S.abort(), S = null, V.answer.loading = false);
  }, E = (a) => {
    N(a.question.content, a.question.user_files, "regenerate");
  }, e = () => {
    x = 0, _.value = [];
  }, p = async (a = "") => {
    await Ee(a), ee.success(window.$t("action_copy_success"));
  };
  return (a, y) => {
    const T = ce, H = st, k = W("x-icon"), I = W("x-bubble-user"), Y = W("x-bubble-assistant"), G = Ct, X = W("x-sender");
    return l(), g("div", Et, [s("div", At, [s("div", Tt, v(a.$t("debug_preview")), 1), s("div", { class: "flex-center gap-1 cursor-pointer", onClick: e }, [o(T, null, { default: d(() => [o(w(Ce))]), _: 1 }), s("span", Vt, v(a.$t("restart")), 1)])]), o(G, { ref_key: "scroll_ref", ref: t, class: "flex-1 px-4", "disable-top": true, "disable-bottom": true, onLoadBottom: f, onLoadTop: z }, { default: d(() => [s("div", St, [_.value.length ? (l(true), g(D, { key: 1 }, O(_.value, (c, R) => (l(), g(D, { key: R }, [o(I, { content: c.question.content, files: c.question.user_files }, ie({ _: 2 }, [c.answer.loading ? void 0 : { name: "menu", fn: d(() => [o(k, { size: "16", class: "cursor-pointer", name: "copy", onClick: (U) => p(c.question.content) }, null, 8, ["onClick"])]), key: "0" }]), 1032, ["content", "files"]), o(Y, { content: c.answer.content, reasoning: c.answer.reasoning_content, "reasoning-expanded": c.answer.reasoning_expanded, streaming: c.answer.loading, "always-show-menu": R === _.value.length - 1 }, ie({ _: 2 }, [c.answer.loading ? void 0 : { name: "menu", fn: d(() => [o(k, { size: "16", class: "cursor-pointer", name: "copy", onClick: (U) => p(c.answer.content) }, null, 8, ["onClick"]), o(k, { size: "16", class: "cursor-pointer", name: "refresh", onClick: (U) => E(c) }, null, 8, ["onClick"])]), key: "0" }]), 1032, ["content", "reasoning", "reasoning-expanded", "streaming", "always-show-menu"])], 64))), 128)) : (l(), F(H, { key: 0, class: "mt-10", description: a.$t("chat.empty_desc") }, null, 8, ["description"]))])]), _: 1 }, 512), s("div", qt, [o(X, { "enable-upload": m.value, "accept-types": i.value, "http-request": r, loading: $.value, onSend: N, onStop: C }, null, 8, ["enable-upload", "accept-types", "loading"])])]);
  };
} }), Bt = { class: "flex flex-col px-4" }, zt = { class: "flex items-center justify-between mb-5" }, Dt = { class: "text-base text-[#1D1E1F]" }, Pt = { class: "flex-center gap-1 cursor-pointer" }, Nt = { class: "text-sm text-[#1D1E1F]" }, It = { key: 0, class: "text-xs text-[#182b50] text-opacity-30 mt-1" }, Lt = { key: 0, class: "text-xs text-[#182b50] text-opacity-30 mt-1" }, Rt = { key: 0, class: "text-xs text-[#182b50] text-opacity-30 mt-1" }, Ut = { key: 0, class: "text-xs text-[#182b50] text-opacity-30 mt-1" }, Ot = { class: "flex flex-wrap gap-3" }, jt = ["onClick"], Ht = { class: "text-xs text-[#182B50] text-opacity-80" }, Yt = { key: 0, class: "text-xs text-[#182b50] text-opacity-30 mt-1" }, Gt = L({ __name: "completion", setup(h, { expose: u }) {
  const b = A([{ id: 1, type: "text", label: window.$t("model_name"), placeholder: window.$t("model_name_placeholder"), maxlength: 20, showWordLimit: true, required: true, value: "gpt-3.5-turbo" }, { id: 2, type: "textarea", label: window.$t("prompt"), placeholder: window.$t("prompt_placeholder"), maxlength: 200, showWordLimit: true, required: true, value: "\u4F60\u662F\u4E00\u4E2AAI\u52A9\u624B" }]), t = (i) => function(r, z, f) {
    i.required ? i.value.some((q) => q.trim()) ? f() : f(new Error(`\u8BF7\u6DFB\u52A0${i.label}`)) : f();
  }, _ = (i) => {
    i.temp = "", i.focus = true;
  }, n = (i) => {
    const r = i.temp.trim();
    r && (i.value.unshift(r), i.temp = ""), i.focus = false;
  }, $ = (i, r) => {
    i.value.splice(r, 1);
  }, m = () => b.value.reduce((i, r) => (i[`${r.id}`] = r.type === "select" && !r.multiple ? r.value : Array.isArray(r.value) ? r.value.join(",") : String(r.value), i), {});
  return u({ validate(i) {
    return formRef.value.validate((r) => {
      r && i && i(m());
    });
  } }), (i, r) => {
    const z = ce, f = Ae, x = Te, q = rt, V = lt, S = nt, N = W("Close"), C = Ve, E = oe;
    return l(), g("div", Bt, [s("div", zt, [s("div", Dt, v(i.$t("debug_preview")), 1), s("div", Pt, [o(z, null, { default: d(() => [o(w(Ce))]), _: 1 }), s("span", Nt, v(i.$t("restart")), 1)])]), B("", true), o(C, { ref: "formRef", model: b.value, "label-position": "top", "require-asterisk-position": "right", onSubmit: r[0] || (r[0] = te(() => {
    }, ["prevent"])) }, { default: d(() => [(l(true), g(D, null, O(b.value, (e, p) => (l(), g(D, { key: e.id }, [e.type === "text" ? (l(), F(x, { key: 0, prop: `${p}.value`, label: e.label, required: e.required, rules: [{ required: e.required, message: "\u8BF7\u8F93\u5165", trigger: "blur" }] }, { default: d(() => [o(f, { modelValue: e.value, "onUpdate:modelValue": (a) => e.value = a, size: "large", placeholder: e.placeholder, maxlength: e.maxlength, "show-word-limit": e.showWordLimit }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "maxlength", "show-word-limit"]), e.desc ? (l(), g("div", It, v(e.desc), 1)) : B("", true)]), _: 2 }, 1032, ["prop", "label", "required", "rules"])) : e.type === "textarea" ? (l(), F(x, { key: 1, prop: `${p}.value`, label: e.label, required: e.required, rules: [{ required: e.required, message: "\u8BF7\u8F93\u5165", trigger: "blur" }] }, { default: d(() => [o(f, { modelValue: e.value, "onUpdate:modelValue": (a) => e.value = a, size: "large", type: "textarea", rows: "4", resize: "none", placeholder: e.placeholder, maxlength: e.maxlength, "show-word-limit": e.showWordLimit }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "maxlength", "show-word-limit"]), e.desc ? (l(), g("div", Lt, v(e.desc), 1)) : B("", true)]), _: 2 }, 1032, ["prop", "label", "required", "rules"])) : e.type === "inputNumber" ? (l(), F(x, { key: 2, prop: `${p}.value`, label: e.label, required: e.required, rules: [{ required: e.required, message: "\u8BF7\u8F93\u5165", trigger: "blur" }] }, { default: d(() => [s("div", null, [o(q, { modelValue: e.value, "onUpdate:modelValue": (a) => e.value = a, size: "large", min: 1, placeholder: e.placeholder }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]), e.desc ? (l(), g("div", Rt, v(e.desc), 1)) : B("", true)])]), _: 2 }, 1032, ["prop", "label", "required", "rules"])) : e.type === "select" ? (l(), F(x, { key: 3, prop: `${p}.value`, label: e.label, required: e.required, rules: [{ required: e.required, message: "\u8BF7\u9009\u62E9", trigger: "change" }] }, { default: d(() => [o(S, { modelValue: e.value, "onUpdate:modelValue": (a) => e.value = a, class: "w-full", size: "large", multiple: e.multiple, placeholder: e.placeholder }, { default: d(() => [(l(true), g(D, null, O(e.options, (a) => (l(), F(V, { key: a.value, label: a.label, value: a.label }, null, 8, ["label", "value"]))), 128))]), _: 2 }, 1032, ["modelValue", "onUpdate:modelValue", "multiple", "placeholder"]), e.desc ? (l(), g("div", Ut, v(e.desc), 1)) : B("", true)]), _: 2 }, 1032, ["prop", "label", "required", "rules"])) : e.type === "tag" ? (l(), F(x, { key: 4, prop: `${p}.value`, label: e.label, required: e.required, rules: [{ validator: t(e), trigger: "change" }] }, { default: d(() => [s("div", null, [s("div", Ot, [(l(true), g(D, null, O(e.value, (a, y) => (l(), g("div", { key: y, class: "border bordre-[#B0B7C3] rounded-sm min-h-[32px] inline-flex items-center px-3 py-1 text-xs text-[#182B50] text-opacity-80 break-all" }, [P(v(a) + " ", 1), o(z, { class: "cursor-pointer ml-1", color: "#d2d5dc", onClick: (T) => $(e, y) }, { default: d(() => [o(N)]), _: 2 }, 1032, ["onClick"])]))), 128)), e.focus ? (l(), F(f, { key: 0, modelValue: e.temp, "onUpdate:modelValue": (a) => e.temp = a, autofocus: "", style: { width: "104px" }, class: "h-8", placeholder: i.$t("form_input_placeholder"), onKeypress: Oe((a) => n(e), ["enter"]), onBlur: (a) => n(e) }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "onKeypress", "onBlur"])) : (l(), g("div", { key: 1, class: "border bordre-[#B0B7C3] border-dashed rounded-sm h-8 inline-flex items-center px-3 cursor-pointer", onClick: (a) => _(e) }, [s("span", Ht, "+ " + v(i.$t("action_add")), 1)], 8, jt))]), e.desc ? (l(), g("div", Yt, v(e.desc), 1)) : B("", true)])]), _: 2 }, 1032, ["prop", "label", "required", "rules"])) : B("", true)], 64))), 128))]), _: 1 }, 8, ["model"]), s("div", null, [o(E, { type: "primary", size: "large" }, { default: d(() => [P(v(i.$t("start_running")), 1)]), _: 1 })])]);
  };
} });
const Mt = { class: "h-full overflow-y-auto relative" }, Kt = { class: "p-6 bg-white rounded" }, Wt = { class: "text-base text-[#1D1E1F]" }, Jt = { class: "text-sm text-[#9A9A9A] mt-4" }, Xt = { class: "flex flex-wrap gap-5 mt-5" }, Zt = { class: "bg-white rounded p-5 relative" }, Qt = { class: "text-sm text-[#9A9A9A]" }, ea = { class: "text-sm text-[#1D1E1F] break-words mt-4" }, ta = { class: "absolute right-8 -bottom-9" }, aa = { class: "bg-[#E6EEFF] rounded p-5 mt-4" }, oa = { class: "flex items-center justify-between" }, sa = { class: "text-sm text-[#9A9A9A]" }, la = { class: "text-sm text-[#1D1E1F] text-wrap break-words whitespace-pre-wrap mt-4 truncate line-clamp-6", style: { "-webkit-line-clamp": "12" } }, na = { class: "absolute inset-0 items-center justify-center bg-[#393C40] bg-opacity-10 rounded hidden group-hover:flex" }, ra = { class: "text-base text-[#9A9A9A] mt-4" }, ia = { class: "p-6 bg-white rounded mt-6" }, ca = { class: "text-base text-[#1D1E1F]" }, da = { class: "text-sm text-[#9A9A9A] mt-4" }, ua = { class: "flex flex-wrap justify-between gap-5 mt-5" }, pa = { key: 0, class: "w-[220px] h-[205px]" }, _a = ["src"], ma = ["onClick"], fa = { class: "text-base text-[#9A9A9A] mt-4" }, va = ["title"], ga = ["title"], ha = { class: "absolute inset-0 items-center justify-center bg-[#393C40] bg-opacity-10 rounded hidden group-hover:flex" }, ya = { class: "py-4 flex items-center justify-center" }, ba = { class: "py-4 flex items-center justify-center" }, xa = L({ __name: "guide", setup(h) {
  const u = de(), b = A(), t = A(), _ = A(u.form_data.use_cases.filter((e) => e.type === "case")), n = A([]);
  for (let e = 0; e < 3; e++) {
    const p = u.form_data.use_cases.filter((a) => a.type === "scene");
    n.value.push(p[e] || { id: "", image: "", scene: "", desc: "" });
  }
  const $ = A(false), m = _e({ id: "", input_text: "", output_text: "" }), i = A(false), r = _e({ id: "", image: "", scene: "", desc: "" }), z = async (e = "") => {
    await Ee(e), ee.success(window.$t("action_copy_success"));
  }, f = async ({ data: e = {} } = {}) => {
    m.id = e.id || "", m.input_text = e.input_text || "", m.output_text = e.output_text || "", $.value = true, await j(), b.value.clearValidate();
  }, x = ({ data: e = {}, index: p = -1 } = {}) => {
    _.value.splice(p, 1);
  }, q = () => {
    b.value.validate((e) => {
      if (!e)
        return;
      const p = m.id || fe(8), a = _.value.find((y) => y.id === p);
      a ? (a.input_text = m.input_text || "", a.output_text = m.output_text || "") : _.value.push({ type: "case", id: p, input_text: m.input_text || "", output_text: m.output_text || "" }), V();
    });
  }, V = () => {
    $.value = false;
  }, S = async ({ data: e = {} } = {}) => {
    r.id = e.id || "", r.image = e.image || "", r.scene = e.scene || "", r.desc = e.desc || "", i.value = true, await j(), t.value.clearValidate();
  }, N = ({ data: e = {}, index: p = -1 } = {}) => {
    n.value.splice(p, 1), n.value.push({ id: "", image: "", scene: "", desc: "" });
  }, C = () => {
    t.value.validate((e) => {
      if (!e)
        return;
      const p = r.id || fe(8), a = n.value.find((y) => y.id === p);
      if (a)
        a.image = r.image || "", a.scene = r.scene || "", a.desc = r.desc || "";
      else {
        const y = n.value.findIndex((T) => !T.id);
        y >= 0 && n.value.splice(y, 1, { type: "scene", id: p, image: r.image || "", scene: r.scene || "", desc: r.desc || "" });
      }
      E();
    });
  }, E = () => {
    i.value = false;
  };
  return ae(() => _.value, () => {
    u.form_data.use_cases = [..._.value, ...n.value].filter((e) => e.id);
  }, { immediate: true, deep: true }), ae(() => n.value, () => {
    u.form_data.use_cases = [..._.value, ...n.value].filter((e) => e.id);
  }, { immediate: true, deep: true }), (e, p) => {
    const a = je, y = oe, T = ce, H = bt, k = Ae, I = Te, Y = Ve, G = oe, X = He;
    return l(), g("div", Mt, [s("div", Kt, [s("h4", Wt, v(e.$t("usage_case")), 1), s("div", Jt, v(e.$t("usage_case_desc")), 1), s("div", Xt, [(l(true), g(D, null, O(_.value, (c, R) => (l(), g("div", { key: R, class: "flex-none w-[48%] box-border p-5 bg-[#F7F9FC] rounded relative group cursor-pointer break-inside-avoid" }, [s("div", Zt, [s("div", Qt, v(e.$t("input")), 1), s("div", ea, v(c.input_text || "--"), 1), s("div", ta, [o(a, { width: "50", height: "50", name: "arrow-down", color: "white" })])]), s("div", aa, [s("div", oa, [s("div", sa, v(e.$t("output")), 1), o(a, { name: "copy", color: "#4F5052", onClick: (U) => z(c.output_text) }, null, 8, ["onClick"])]), s("div", la, v(c.output_text || "--"), 1)]), s("div", na, [o(y, { type: "primary", onClick: (U) => f({ data: c }) }, { default: d(() => [P(v(e.$t("action_edit")), 1)]), _: 2 }, 1032, ["onClick"]), o(y, { onClick: (U) => x({ data: c, index: R }) }, { default: d(() => [P(v(e.$t("action_delete")), 1)]), _: 2 }, 1032, ["onClick"])])]))), 128)), s("div", { class: "flex-none w-[48%] h-[140px] flex-center flex-col p-5 bg-[#F7F9FC] rounded cursor-pointer", onClick: te(f, ["stop"]) }, [o(T, { size: "28", color: "#9A9A9A" }, { default: d(() => [o(w(me))]), _: 1 }), s("p", ra, v(e.$t("action_add")), 1)])])]), s("div", ia, [s("h4", ca, v(e.$t("usage_scene")), 1), s("div", da, v(e.$t("usage_scene_desc")), 1), s("div", ua, [(l(true), g(D, null, O(n.value, (c, R) => (l(), g("div", { key: R, class: "flex-1 max-w-[330px] px-4 box-border flex flex-col items-center text-center pt-3 pb-10 relative cursor-pointer group" }, [c.image ? (l(), g("div", pa, [s("img", { src: c.image, class: "w-full h-full object-cover" }, null, 8, _a)])) : (l(), g("div", { key: 1, class: "w-[220px] h-[205px] border flex-center flex-col mx-auto", onClick: te((U) => S({ data: c }), ["stop"]) }, [o(T, { size: "28", color: "#9A9A9A" }, { default: d(() => [o(w(me))]), _: 1 }), s("p", fa, v(e.$t("action_add")), 1)], 8, ma)), c.id ? (l(), g(D, { key: 2 }, [s("h6", { class: "text-base text-[#1D1E1F] mt-5 text-center max-w-[10em] truncate", title: c.scene || "" }, v(c.scene || ""), 9, va), s("p", { class: "text-xs text-[#9A9A9A] mt-4 text-center text-wrap break-words whitespace-pre-wrap max-w-[24em] truncate line-clamp-6", title: c.desc || "" }, v(c.desc || ""), 9, ga), s("div", ha, [o(y, { type: "primary", onClick: te((U) => S({ data: c }), ["stop"]) }, { default: d(() => [P(v(e.$t("action_edit")), 1)]), _: 2 }, 1032, ["onClick"]), o(y, { onClick: (U) => N({ data: c, index: R }) }, { default: d(() => [P(v(e.$t("action_delete")), 1)]), _: 2 }, 1032, ["onClick"])])], 64)) : (l(), g(D, { key: 3 }, [c.scene ? B("", true) : (l(), F(H, { key: 0, class: "mt-6", rows: 1 }))], 64))]))), 128))])]), M(e.$slots, "footer"), o(X, { modelValue: $.value, "onUpdate:modelValue": p[2] || (p[2] = (c) => $.value = c), title: m.id ? e.$t("action_edit") : e.$t("action_add"), "align-center": "", width: "600px" }, { footer: d(() => [s("div", ya, [o(G, { class: "w-[96px] h-[36px]", type: "primary", onClick: q }, { default: d(() => [P(v(e.$t("action_confirm")), 1)]), _: 1 }), o(G, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: V }, { default: d(() => [P(v(e.$t("action_cancel")), 1)]), _: 1 })])]), default: d(() => [o(Y, { ref_key: "case_form_ref", ref: b, model: m, "label-width": "64px", "label-position": "left" }, { default: d(() => [o(I, { label: e.$t("input"), prop: "input_text", rules: [...w(K)({ message: "form_input_placeholder" }), { max: 200, message: e.$t("form_input_placeholder_max_length", { max: 200 }) }] }, { default: d(() => [o(k, { size: "large", modelValue: m.input_text, "onUpdate:modelValue": p[0] || (p[0] = (c) => m.input_text = c), maxlength: 200, "show-word-limit": "" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"]), o(I, { label: e.$t("output"), prop: "output_text", rules: [...w(K)({ message: "form_input_placeholder" }), { max: 1e3, message: e.$t("form_input_placeholder_max_length", { max: 1e3 }) }] }, { default: d(() => [o(k, { type: "textarea", size: "large", rows: "10", resize: "none", modelValue: m.output_text, "onUpdate:modelValue": p[1] || (p[1] = (c) => m.output_text = c), maxlength: 1e3, "show-word-limit": "" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue", "title"]), o(X, { modelValue: i.value, "onUpdate:modelValue": p[6] || (p[6] = (c) => i.value = c), title: r.id ? e.$t("action_edit") : e.$t("action_add"), "align-center": "", width: "600px" }, { footer: d(() => [s("div", ba, [o(G, { class: "w-[96px] h-[36px]", type: "primary", onClick: C }, { default: d(() => [P(v(e.$t("action_confirm")), 1)]), _: 1 }), o(G, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: E }, { default: d(() => [P(v(e.$t("action_cancel")), 1)]), _: 1 })])]), default: d(() => [o(Y, { ref_key: "scene_form_ref", ref: t, model: r, "label-width": "102px", "label-position": "left" }, { default: d(() => [o(I, { label: e.$t("pictorial_image"), prop: "image", rules: w(K)({ message: "form_upload_placeholder" }) }, { default: d(() => [o(it, { class: "!w-[120px] !h-[112px]", modelValue: r.image, "onUpdate:modelValue": p[3] || (p[3] = (c) => r.image = c) }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"]), o(I, { label: e.$t("scene"), prop: "scene", rules: [...w(K)({ message: "form_input_placeholder" }), { max: 20, message: e.$t("form_input_placeholder_max_length", { max: 20 }) }] }, { default: d(() => [o(k, { size: "large", modelValue: r.scene, "onUpdate:modelValue": p[4] || (p[4] = (c) => r.scene = c), maxlength: 20, "show-word-limit": "" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"]), o(I, { label: e.$t("description"), prop: "desc", rules: [...w(K)({ message: "form_input_placeholder" }), { max: 50, message: e.$t("form_input_placeholder_max_length", { max: 50 }) }] }, { default: d(() => [o(k, { type: "textarea", size: "large", rows: "5", resize: "none", modelValue: r.desc, "onUpdate:modelValue": p[5] || (p[5] = (c) => r.desc = c), maxlength: 50, "show-word-limit": "" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue", "title"])]);
  };
} }), wa = { id: "app-config-full-screen-hook", class: "relative h-full flex bg-white" }, $a = { class: "flex-1 flex flex-col overflow-hidden" }, ka = { key: 0, class: "border-t px-4 py-5" }, Ca = { class: "border-t px-4 py-5 mt-8 sticky bottom-0 left-0 right-0 bg-white z-10" }, Ea = L({ __name: "index", setup(h) {
  const u = Ye(), b = Ge(), t = de(), _ = A(), n = A("first"), $ = A({});
  ge("channelConfig", $);
  const m = J(() => $.value.channel_type == Z.get(ne) ? ne : $.value.channel_type == Z.get(le) ? le : "");
  ge("channelTypeKey", m);
  const i = J(() => ![he, ye].includes(t.agent_type) || $.value.channel_id), r = async () => {
    if (t.saving)
      return;
    const f = _.value;
    let x = "";
    if (f && f.save) {
      t.saving = true;
      const { data: q = {} } = await f.save().catch(() => {
        t.saving = false;
      });
      x = q.agent_id;
    } else if (f && f.validateForm) {
      if (!await f.validateForm())
        return Promise.reject();
      await t.saveAgentData().catch(() => {
        t.saving = false;
      }), t.saving = true, x = t.agent_id;
    }
    Je.emit("agent-change", { agent_id: x }), x && await b.replace({ name: "AgentCreate", query: { type: t.agent_type, agent_id: x } }), t.saving = false;
  };
  let z = true;
  return ae(() => t.form_data.custom_config.coze_workspace_id, (f) => {
    z || t.loadCozeBotOptions(f);
  }), $e(async () => {
    t.resetState(), await j();
    const f = u.query.type || "prompt";
    switch (t.agent_id = Number(u.query.agent_id), t.agent_type = f, t.form_data.logo = ct.get(f), t.form_data.group_id = Number(u.query.group_id), t.form_data.custom_config.agent_type = f, await t.loadDetailData(), t.loadGroupOptions(), t.loadChannelOptions(), t.loadSubscriptionOptions(), t.agent_type) {
      case ut:
        t.loadCozeWorkspaceOptions().then(() => {
          t.loadCozeBotOptions(t.form_data.custom_config.coze_workspace_id), z = false;
        });
        break;
      case dt:
        t.loadAppBuilderBotOptions();
        break;
    }
    switch (f) {
      case ye:
        $.value.name = ve.get(Ke), $.value.channel_type = Z.get(ne);
        break;
      case he:
        $.value.name = ve.get(Me), $.value.channel_type = Z.get(le);
        break;
    }
    t.form_data.channel_type || (t.form_data.channel_type = $.value.channel_type || 0), t.form_data.model || (await j(), t.form_data.model = m.value);
  }), (f, x) => {
    const q = tt, V = oe, S = Qe, N = et, C = Ze, E = Xe;
    return l(), F(C, { class: "px-[60px] py-8" }, { default: d(() => [o(q, { back: "", title: f.$t(w(t).agent_option_data.label), class: "mb-5" }, null, 8, ["title"]), o(N, { modelValue: n.value, "onUpdate:modelValue": x[0] || (x[0] = (e) => n.value = e), class: "flex-1 agent-tabs el-tabs--full" }, { default: d(() => [o(S, { label: f.$t("app_config"), name: "first", lazy: "" }, { default: d(() => [We((l(), g("div", wa, [s("div", $a, [o(at, { ref_key: "agentFormRef", ref: _, class: "flex-1 py-7 px-4 overflow-y-auto", "agent-type": w(t).agent_type }, null, 8, ["agent-type"]), i.value ? (l(), g("div", ka, [o(V, { type: "primary", size: "large", loading: w(t).saving, onClick: r }, { default: d(() => [P(v(f.$t("action_save")), 1)]), _: 1 }, 8, ["loading"])])) : B("", true)]), x[1] || (x[1] = s("div", { class: "flex-none w-px border-r" }, null, -1)), w(t).agent_option_data.response === "chat" ? (l(), F(Ft, { key: 0, class: "flex-1 overflow-hidden" })) : w(t).agent_option_data.response === "completion" ? (l(), F(Gt, { key: 1, class: "flex-1 py-7" })) : B("", true)])), [[E, f.loading]])]), _: 1 }, 8, ["label"]), o(S, { label: f.$t("usage_guide"), name: "second", lazy: "" }, { default: d(() => [o(xa, null, ie({ _: 2 }, [i.value ? { name: "footer", fn: d(() => [s("div", Ca, [o(V, { type: "primary", size: "large", loading: w(t).saving, onClick: r }, { default: d(() => [P(v(f.$t("action_save")), 1)]), _: 1 }, 8, ["loading"])])]), key: "0" } : void 0]), 1024)]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["modelValue"])]), _: 1 });
  };
} });
const Ja = ke(Ea, [["__scopeId", "data-v-318a5118"]]);
export {
  Ja as default
};
