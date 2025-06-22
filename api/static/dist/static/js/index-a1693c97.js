import { ar as we, bW as X, y as ee, ak as $e, aq as ke, r as V, Y as K, $ as ae, aJ as G, ay as Ce, b as l, c as f, d as s, t as p, m as ue, j as C, w as o, L as B, e as U, f as t, u as x, bX as pe, aH as le, aG as Ve, a9 as Z, n as J, aL as _e, a4 as Y, G as oe, F as P, K as H, by as Ee, x as Q, a5 as me, ag as fe, ah as ge, Z as re, aB as ie, s as qe, al as M, aN as ce, R as ve, a6 as Ae, aa as Fe, E as ze, an as Se, o as De, C as Be, as as Ue, ax as Re, N as de, I as Te } from "./index-8579fe4a.js";
import { v as je } from "./el-loading-8747b309.js";
import { _ as Ie } from "./index-ad57f5b2.js";
import { E as Le, a as Ne } from "./el-tab-pane-e22c8d9b.js";
import { _ as Oe } from "./index.vue_vue_type_script_setup_true_lang-e4a54f30.js";
import { E as Pe } from "./el-image-viewer-dd2f27c0.js";
import { u as ne, a as We, _ as Ge } from "./drawer.vue_vue_type_script_setup_true_lang-6dfd020c.js";
import { E as Ke } from "./el-empty-0ab0c30c.js";
import "./el-tag-0b6baecb.js";
import { E as Me, a as He } from "./el-select-8a770a23.js";
import "./el-scrollbar-4065fe54.js";
import { E as Je } from "./el-input-number-310bd679.js";
import { a as Ye } from "./el-skeleton-item-f5c34a93.js";
import { _ as Xe } from "./image.vue_vue_type_style_index_0_lang-1ce00652.js";
import { _ as Ze } from "./index.vue_vue_type_script_setup_true_lang-5c7d7988.js";
import "./index-3dae9a97.js";
import "./position-4ca9dd9d.js";
import "./debounce-484109dd.js";
import "./el-drawer-393896dd.js";
import "./agent-f71520b7.js";
import "./group-39bff2fe.js";
import "./isEqual-8c73ec38.js";
import "./index-ede470e7.js";
import "./el-table-column-376475e4.js";
import "./el-checkbox-a21716fc.js";
import "./sortable.esm-7ba019b6.js";
import "./_commonjsHelpers-725317a4.js";
const Qe = we("conversation-store", { state: () => ({}), actions: { async loadListData({ data: { offset: v, limit: E } = {} } = {}) {
  const { data: { conversations: q = [] } = {} } = await X.conversation.list({ data: { offset: v, limit: E } });
  return q.map((i = {}, _) => i);
}, async save({ data: v } = {}) {
  return v = { conversation_id: 0, agent_id: 0, ...v }, v.conversation_id || delete v.conversation_id, X.conversation[v.conversation_id ? "update" : "create"]({ data: v });
}, async chat({ data: v, onDownloadProgress: E, signal: q, hideError: i = false } = {}) {
  var _a;
  const _ = ((_a = v == null ? void 0 : v.agent_configs) == null ? void 0 : _a.completion_params) || { frequency_penalty: 0.5, presence_penalty: 0.5, temperature: 0.2, top_p: 0.75 };
  return v.agent_configs && delete v.agent_configs, v = { conversation_id: 0, frequency_penalty: _.frequency_penalty || 0, messages: [], model: "", presence_penalty: _.presence_penalty || 0, stream: true, temperature: _.temperature || 0, top_p: _.top_p || 0, ...v }, v.agent_id && (v.model = `agent-${v.agent_id}`, delete v.agent_id), X.conversation.chat({ data: v, onDownloadProgress: E, signal: q, hideError: i });
} } }), et = { class: "flex flex-col pt-7 relative" }, tt = { key: 0, class: "absolute top-0 left-0 w-full h-full bg-black/70 z-10" }, at = { class: "flex flex-col items-center justify-center gap-6 w-full h-full box-border" }, ot = { class: "text-base text-[#fff] text-center mx-8" }, nt = { class: "flex items-center justify-between px-4 mb-2" }, st = { class: "text-base text-[#1D1E1F]" }, lt = { class: "text-sm text-[#1D1E1F]" }, rt = { class: "px-6 py-3" }, it = ee({ __name: "chat", emits: ["save"], setup(v, { expose: E, emit: q }) {
  const i = q, _ = ne(), y = Qe();
  $e(), ke();
  const z = V(), m = V([]), c = V(false), n = K(() => c.value || m.value.some((r) => r.answer.loading)), T = K(() => {
    var _a, _b, _c, _d;
    return !!(((_b = (_a = _.form_data.custom_config) == null ? void 0 : _a.file_parse) == null ? void 0 : _b.enable) || ((_d = (_c = _.form_data.custom_config) == null ? void 0 : _c.image_parse) == null ? void 0 : _d.enable));
  }), S = K(() => {
    var _a, _b, _c, _d;
    let r = "";
    return ((_b = (_a = _.form_data.custom_config) == null ? void 0 : _a.file_parse) == null ? void 0 : _b.enable) && (r += ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.csv,.txt,.html,.json,.xml,.md"), ((_d = (_c = _.form_data.custom_config) == null ? void 0 : _c.image_parse) == null ? void 0 : _d.enable) && (r += ",image/*"), r;
  }), h = K(() => {
    const r = _.form_data.settings;
    return !!(r.opening_statement.replace(/\s/g, "") || r.suggested_questions.length && r.suggested_questions.some((w) => w.content.replace(/\s/g, "")));
  }), g = K(() => !(m.value.length || h.value)), D = async (r) => {
    const w = new FormData();
    w.append("file", r);
    try {
      const F = await X.upload({ data: w });
      return { id: F.data.id, url: `${Ve}/api/preview/${F.data.preview_key || ""}`, size: F.data.size, name: F.data.file_name, mime_type: F.data.mime_type };
    } catch {
      return {};
    }
  };
  let A = 0, I = -1, k = {}, $ = null;
  const e = async (r, w, F = "") => {
    if (n.value)
      return;
    if (w = w || [], !_.agent_data.agent_id)
      return Z.warning(window.$t("agent_not_found"));
    if (_.agent_data.channel_type || await _.saveAgentData({ hideToast: true }), $ && $.abort(), $ = new AbortController(), !A) {
      c.value = true;
      const { data: a = {} } = await y.save({ data: { agent_id: _.agent_data.agent_id, title: r } }).finally(() => {
        c.value = false;
      });
      A = a.conversation_id;
    }
    F !== "regenerate" && (w = (w == null ? void 0 : w.map((a) => ({ type: "image", content: `file_id:${a.id}`, filename: a.name, size: a.size, mime_type: a.mime_type, url: a.url }))) || []), m.value.push({ question: { role: "user", content: r, user_files: w }, answer: { loading: true, role: "assistant", content: "", reasoning_expanded: true, reasoning_content: "" } }), I = m.value.length - 1, k = m.value[I] || {};
    let W = [{ role: "user", content: r }];
    w.length && (W = [{ role: "user", content: JSON.stringify([{ type: "text", content: r }, ...w]) }]), y.chat({ data: { conversation_id: A, messages: W, agent_id: _.agent_data.agent_id, agent_configs: _.agent_data.configs }, hideError: true, onDownloadProgress: async ({ chunks: a = [], intact_content: N, intact_reasoning_content: j } = {}) => {
      k.answer.content = N || k.answer.content || "", k.answer.reasoning_content = j || k.answer.reasoning_content || "", a[0] && a[0].role && (k.answer.role = a[0].role || ""), await J(), z.value && z.value.scrollToBottom();
    }, signal: $.signal }).catch((a) => {
      k.answer.content || (k.answer.content = a.message), Z.warning(a.message === "Access token is invalid" ? window.$t("agent_app.check_agent_config_tip") : a.message);
    }).finally(() => {
      k.answer.loading = false, $ = null;
    }), await J(), z.value && z.value.scrollToBottom();
  }, d = () => {
    $ && ($.abort(), $ = null, k.answer.loading = false);
  }, u = (r) => {
    e(r.question.content, r.question.user_files, "regenerate");
  }, b = ({ saveAction: r = false } = {}) => {
    if (r)
      return i("save", { restart: true });
    A = 0, m.value = [], L.value = false;
  }, O = async (r = "") => {
    await _e(r), Z.success(window.$t("action_copy_success"));
  }, te = (r) => {
    e(r);
  }, L = V(false);
  return ae(() => _.form_data.custom_config, (r) => {
    L.value = false, A && (L.value = true);
  }, { deep: true }), E({ restart: b, getIsConfigChanged: () => L.value }), (r, w) => {
    const F = Y, W = oe, a = Ke, N = G("x-bubble-assistant"), j = G("x-icon"), he = G("x-bubble-user"), xe = G("x-bubble-list"), ye = G("x-sender"), be = Ce("debounce");
    return l(), f("div", et, [L.value ? (l(), f("div", tt, [s("div", at, [s("div", ot, p(r.$t("debugger_config_change_confirm")), 1), ue((l(), C(F, { type: "primary", size: "large", onClick: w[0] || (w[0] = (R) => b({ saveAction: true })) }, { default: o(() => [B(p(r.$t("save_and_restart")), 1)]), _: 1 })), [[be]])])])) : U("", true), s("div", nt, [s("div", st, p(r.$t("debug_preview")), 1), s("div", { class: "flex-center gap-1 cursor-pointer", onClick: b }, [t(W, null, { default: o(() => [t(x(pe))]), _: 1 }), s("span", lt, p(r.$t("restart")), 1)])]), t(xe, { messages: m.value, class: "flex-1 px-4 relative py-4" }, { header: o(() => [g.value ? (l(), C(a, { key: 0, class: "mt-10", description: r.$t("chat.empty_desc") }, null, 8, ["description"])) : U("", true), h.value ? (l(), C(N, { key: 1, type: "welcome", content: x(_).form_data.settings.opening_statement, suggestions: x(_).form_data.settings.suggested_questions, onSuggestion: te }, null, 8, ["content", "suggestions"])) : U("", true)]), item: o(({ message: R, index: na }) => [t(he, { content: R.question.content, files: R.question.user_files }, le({ _: 2 }, [R.answer.loading ? void 0 : { name: "menu", fn: o(() => [t(j, { size: "16", class: "cursor-pointer", name: "copy", onClick: (se) => O(R.question.content) }, null, 8, ["onClick"])]), key: "0" }]), 1032, ["content", "files"]), t(N, { content: R.answer.content, reasoning: R.answer.reasoning_content, "reasoning-expanded": R.answer.reasoning_expanded, streaming: R.answer.loading, "always-show-menu": r.message_index === m.value.length - 1 }, le({ _: 2 }, [R.answer.loading ? void 0 : { name: "menu", fn: o(() => [t(j, { size: "16", class: "cursor-pointer", name: "copy", onClick: (se) => O(R.answer.content) }, null, 8, ["onClick"]), t(j, { size: "16", class: "cursor-pointer", name: "refresh", onClick: (se) => u(R) }, null, 8, ["onClick"])]), key: "0" }]), 1032, ["content", "reasoning", "reasoning-expanded", "streaming", "always-show-menu"])]), _: 1 }, 8, ["messages"]), s("div", rt, [t(ye, { "enable-upload": T.value, "accept-types": S.value, "http-request": D, loading: n.value, onSend: e, onStop: d }, null, 8, ["enable-upload", "accept-types", "loading"])])]);
  };
} }), ct = { class: "flex flex-col px-4" }, dt = { class: "flex items-center justify-between mb-5" }, ut = { class: "text-base text-[#1D1E1F]" }, pt = { class: "flex-center gap-1 cursor-pointer" }, _t = { class: "text-sm text-[#1D1E1F]" }, mt = { key: 0, class: "text-xs text-[#182b50] text-opacity-30 mt-1" }, ft = { key: 0, class: "text-xs text-[#182b50] text-opacity-30 mt-1" }, gt = { key: 0, class: "text-xs text-[#182b50] text-opacity-30 mt-1" }, vt = { key: 0, class: "text-xs text-[#182b50] text-opacity-30 mt-1" }, ht = { class: "flex flex-wrap gap-3" }, xt = ["onClick"], yt = { class: "text-xs text-[#182B50] text-opacity-80" }, bt = { key: 0, class: "text-xs text-[#182b50] text-opacity-30 mt-1" }, wt = ee({ __name: "completion", setup(v, { expose: E }) {
  const q = V([{ id: 1, type: "text", label: window.$t("model_name"), placeholder: window.$t("model_name_placeholder"), maxlength: 20, showWordLimit: true, required: true, value: "gpt-3.5-turbo" }, { id: 2, type: "textarea", label: window.$t("prompt.title"), placeholder: window.$t("prompt_placeholder"), maxlength: 200, showWordLimit: true, required: true, value: "\u4F60\u662F\u4E00\u4E2AAI\u52A9\u624B" }]), i = (c) => function(n, T, S) {
    c.required ? c.value.some((g) => g.trim()) ? S() : S(new Error(`\u8BF7\u6DFB\u52A0${c.label}`)) : S();
  }, _ = (c) => {
    c.temp = "", c.focus = true;
  }, y = (c) => {
    const n = c.temp.trim();
    n && (c.value.unshift(n), c.temp = ""), c.focus = false;
  }, z = (c, n) => {
    c.value.splice(n, 1);
  }, m = () => q.value.reduce((c, n) => (c[`${n.id}`] = n.type === "select" && !n.multiple ? n.value : Array.isArray(n.value) ? n.value.join(",") : String(n.value), c), {});
  return E({ validate(c) {
    return formRef.value.validate((n) => {
      n && c && c(m());
    });
  } }), (c, n) => {
    const T = oe, S = me, h = fe, g = Je, D = Me, A = He, I = G("Close"), k = ge, $ = Y;
    return l(), f("div", ct, [s("div", dt, [s("div", ut, p(c.$t("debug_preview")), 1), s("div", pt, [t(T, null, { default: o(() => [t(x(pe))]), _: 1 }), s("span", _t, p(c.$t("restart")), 1)])]), U("", true), t(k, { ref: "formRef", model: q.value, "label-position": "top", "require-asterisk-position": "right", onSubmit: n[0] || (n[0] = Q(() => {
    }, ["prevent"])) }, { default: o(() => [(l(true), f(P, null, H(q.value, (e, d) => (l(), f(P, { key: e.id }, [e.type === "text" ? (l(), C(h, { key: 0, prop: `${d}.value`, label: e.label, required: e.required, rules: [{ required: e.required, message: "\u8BF7\u8F93\u5165", trigger: "blur" }] }, { default: o(() => [t(S, { modelValue: e.value, "onUpdate:modelValue": (u) => e.value = u, size: "large", placeholder: e.placeholder, maxlength: e.maxlength, "show-word-limit": e.showWordLimit }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "maxlength", "show-word-limit"]), e.desc ? (l(), f("div", mt, p(e.desc), 1)) : U("", true)]), _: 2 }, 1032, ["prop", "label", "required", "rules"])) : e.type === "textarea" ? (l(), C(h, { key: 1, prop: `${d}.value`, label: e.label, required: e.required, rules: [{ required: e.required, message: "\u8BF7\u8F93\u5165", trigger: "blur" }] }, { default: o(() => [t(S, { modelValue: e.value, "onUpdate:modelValue": (u) => e.value = u, size: "large", type: "textarea", rows: "4", resize: "none", placeholder: e.placeholder, maxlength: e.maxlength, "show-word-limit": e.showWordLimit }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "maxlength", "show-word-limit"]), e.desc ? (l(), f("div", ft, p(e.desc), 1)) : U("", true)]), _: 2 }, 1032, ["prop", "label", "required", "rules"])) : e.type === "inputNumber" ? (l(), C(h, { key: 2, prop: `${d}.value`, label: e.label, required: e.required, rules: [{ required: e.required, message: "\u8BF7\u8F93\u5165", trigger: "blur" }] }, { default: o(() => [s("div", null, [t(g, { modelValue: e.value, "onUpdate:modelValue": (u) => e.value = u, size: "large", min: 1, placeholder: e.placeholder }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]), e.desc ? (l(), f("div", gt, p(e.desc), 1)) : U("", true)])]), _: 2 }, 1032, ["prop", "label", "required", "rules"])) : e.type === "select" ? (l(), C(h, { key: 3, prop: `${d}.value`, label: e.label, required: e.required, rules: [{ required: e.required, message: "\u8BF7\u9009\u62E9", trigger: "change" }] }, { default: o(() => [t(A, { modelValue: e.value, "onUpdate:modelValue": (u) => e.value = u, class: "w-full", size: "large", multiple: e.multiple, placeholder: e.placeholder }, { default: o(() => [(l(true), f(P, null, H(e.options, (u) => (l(), C(D, { key: u.value, label: u.label, value: u.label }, null, 8, ["label", "value"]))), 128))]), _: 2 }, 1032, ["modelValue", "onUpdate:modelValue", "multiple", "placeholder"]), e.desc ? (l(), f("div", vt, p(e.desc), 1)) : U("", true)]), _: 2 }, 1032, ["prop", "label", "required", "rules"])) : e.type === "tag" ? (l(), C(h, { key: 4, prop: `${d}.value`, label: e.label, required: e.required, rules: [{ validator: i(e), trigger: "change" }] }, { default: o(() => [s("div", null, [s("div", ht, [(l(true), f(P, null, H(e.value, (u, b) => (l(), f("div", { key: b, class: "border bordre-[#B0B7C3] rounded-sm min-h-[32px] inline-flex items-center px-3 py-1 text-xs text-[#182B50] text-opacity-80 break-all" }, [B(p(u) + " ", 1), t(T, { class: "cursor-pointer ml-1", color: "#d2d5dc", onClick: (O) => z(e, b) }, { default: o(() => [t(I)]), _: 2 }, 1032, ["onClick"])]))), 128)), e.focus ? (l(), C(S, { key: 0, modelValue: e.temp, "onUpdate:modelValue": (u) => e.temp = u, autofocus: "", style: { width: "104px" }, class: "h-8", placeholder: c.$t("form_input_placeholder"), onKeypress: Ee((u) => y(e), ["enter"]), onBlur: (u) => y(e) }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "onKeypress", "onBlur"])) : (l(), f("div", { key: 1, class: "border bordre-[#B0B7C3] border-dashed rounded-sm h-8 inline-flex items-center px-3 cursor-pointer", onClick: (u) => _(e) }, [s("span", yt, "+ " + p(c.$t("action_add")), 1)], 8, xt))]), e.desc ? (l(), f("div", bt, p(e.desc), 1)) : U("", true)])]), _: 2 }, 1032, ["prop", "label", "required", "rules"])) : U("", true)], 64))), 128))]), _: 1 }, 8, ["model"]), s("div", null, [t($, { type: "primary", size: "large" }, { default: o(() => [B(p(c.$t("start_running")), 1)]), _: 1 })])]);
  };
} }), $t = { class: "h-full overflow-y-auto relative" }, kt = { class: "p-6 bg-white rounded" }, Ct = { class: "text-base text-[#1D1E1F]" }, Vt = { class: "text-sm text-[#9A9A9A] mt-4" }, Et = { class: "flex flex-wrap gap-5 mt-5" }, qt = { class: "bg-white rounded p-5 relative" }, At = { class: "text-sm text-[#9A9A9A]" }, Ft = { class: "text-sm text-[#1D1E1F] break-words mt-4" }, zt = { class: "absolute right-8 -bottom-9" }, St = { class: "bg-[#E6EEFF] rounded p-5 mt-4" }, Dt = { class: "flex items-center justify-between" }, Bt = { class: "text-sm text-[#9A9A9A]" }, Ut = { class: "text-sm text-[#1D1E1F] text-wrap break-words whitespace-pre-wrap mt-4 truncate line-clamp-6", style: { "-webkit-line-clamp": "12" } }, Rt = { class: "absolute inset-0 items-center justify-center bg-[#393C40] bg-opacity-10 rounded hidden group-hover:flex" }, Tt = { class: "text-base text-[#9A9A9A] mt-4" }, jt = { class: "p-6 bg-white rounded mt-6" }, It = { class: "text-base text-[#1D1E1F]" }, Lt = { class: "text-sm text-[#9A9A9A] mt-4" }, Nt = { class: "flex flex-wrap justify-between gap-5 mt-5" }, Ot = { key: 0, class: "w-[220px] h-[205px]" }, Pt = ["src"], Wt = ["onClick"], Gt = { class: "text-base text-[#9A9A9A] mt-4" }, Kt = ["title"], Mt = ["title"], Ht = { class: "absolute inset-0 items-center justify-center bg-[#393C40] bg-opacity-10 rounded hidden group-hover:flex" }, Jt = { class: "py-4 flex items-center justify-center" }, Yt = { class: "py-4 flex items-center justify-center" }, Xt = ee({ __name: "guide", setup(v) {
  const E = ne(), q = V(), i = V(), _ = V(E.form_data.use_cases.filter((e) => e.type === "case")), y = V([]);
  for (let e = 0; e < 3; e++) {
    const d = E.form_data.use_cases.filter((u) => u.type === "scene");
    y.value.push(d[e] || { id: "", image: "", scene: "", desc: "" });
  }
  const z = V(false), m = re({ id: "", input_text: "", output_text: "" }), c = V(false), n = re({ id: "", image: "", scene: "", desc: "" }), T = async (e = "") => {
    await _e(e), Z.success(window.$t("action_copy_success"));
  }, S = async ({ data: e = {} } = {}) => {
    m.id = e.id || "", m.input_text = e.input_text || "", m.output_text = e.output_text || "", z.value = true, await J(), q.value.clearValidate();
  }, h = ({ data: e = {}, index: d = -1 } = {}) => {
    _.value.splice(d, 1);
  }, g = () => {
    q.value.validate((e) => {
      if (!e)
        return;
      const d = m.id || ce(8), u = _.value.find((b) => b.id === d);
      u ? (u.input_text = m.input_text || "", u.output_text = m.output_text || "") : _.value.push({ type: "case", id: d, input_text: m.input_text || "", output_text: m.output_text || "" }), D();
    });
  }, D = () => {
    z.value = false;
  }, A = async ({ data: e = {} } = {}) => {
    n.id = e.id || "", n.image = e.image || "", n.scene = e.scene || "", n.desc = e.desc || "", c.value = true, await J(), i.value.clearValidate();
  }, I = ({ data: e = {}, index: d = -1 } = {}) => {
    y.value.splice(d, 1), y.value.push({ id: "", image: "", scene: "", desc: "" });
  }, k = () => {
    i.value.validate((e) => {
      if (!e)
        return;
      const d = n.id || ce(8), u = y.value.find((b) => b.id === d);
      if (u)
        u.image = n.image || "", u.scene = n.scene || "", u.desc = n.desc || "";
      else {
        const b = y.value.findIndex((O) => !O.id);
        b >= 0 && y.value.splice(b, 1, { type: "scene", id: d, image: n.image || "", scene: n.scene || "", desc: n.desc || "" });
      }
      $();
    });
  }, $ = () => {
    c.value = false;
  };
  return ae(() => _.value, () => {
    E.form_data.use_cases = [..._.value, ...y.value].filter((e) => e.id);
  }, { immediate: true, deep: true }), ae(() => y.value, () => {
    E.form_data.use_cases = [..._.value, ...y.value].filter((e) => e.id);
  }, { immediate: true, deep: true }), (e, d) => {
    const u = ve, b = Y, O = oe, te = Ye, L = me, r = fe, w = ge, F = Y, W = Ae;
    return l(), f("div", $t, [s("div", kt, [s("h4", Ct, p(e.$t("usage_case")), 1), s("div", Vt, p(e.$t("usage_case_desc")), 1), s("div", Et, [(l(true), f(P, null, H(_.value, (a, N) => (l(), f("div", { key: N, class: "flex-none w-[48%] box-border p-5 bg-[#F7F9FC] rounded relative group cursor-pointer break-inside-avoid" }, [s("div", qt, [s("div", At, p(e.$t("input")), 1), s("div", Ft, p(a.input_text || "--"), 1), s("div", zt, [t(u, { width: "50", height: "50", name: "arrow-down", color: "white" })])]), s("div", St, [s("div", Dt, [s("div", Bt, p(e.$t("output")), 1), t(u, { name: "copy", color: "#4F5052", onClick: (j) => T(a.output_text) }, null, 8, ["onClick"])]), s("div", Ut, p(a.output_text || "--"), 1)]), s("div", Rt, [t(b, { type: "primary", onClick: (j) => S({ data: a }) }, { default: o(() => [B(p(e.$t("action_edit")), 1)]), _: 2 }, 1032, ["onClick"]), t(b, { onClick: (j) => h({ data: a, index: N }) }, { default: o(() => [B(p(e.$t("action_delete")), 1)]), _: 2 }, 1032, ["onClick"])])]))), 128)), s("div", { class: "flex-none w-[48%] h-[140px] flex-center flex-col p-5 bg-[#F7F9FC] rounded cursor-pointer", onClick: Q(S, ["stop"]) }, [t(O, { size: "28", color: "#9A9A9A" }, { default: o(() => [t(x(ie))]), _: 1 }), s("p", Tt, p(e.$t("action_add")), 1)])])]), s("div", jt, [s("h4", It, p(e.$t("usage_scene")), 1), s("div", Lt, p(e.$t("usage_scene_desc")), 1), s("div", Nt, [(l(true), f(P, null, H(y.value, (a, N) => (l(), f("div", { key: N, class: "flex-1 max-w-[330px] px-4 box-border flex flex-col items-center text-center pt-3 pb-10 relative cursor-pointer group" }, [a.image ? (l(), f("div", Ot, [s("img", { src: a.image, class: "w-full h-full object-cover" }, null, 8, Pt)])) : (l(), f("div", { key: 1, class: "w-[220px] h-[205px] border flex-center flex-col mx-auto", onClick: Q((j) => A({ data: a }), ["stop"]) }, [t(O, { size: "28", color: "#9A9A9A" }, { default: o(() => [t(x(ie))]), _: 1 }), s("p", Gt, p(e.$t("action_add")), 1)], 8, Wt)), a.id ? (l(), f(P, { key: 2 }, [s("h6", { class: "text-base text-[#1D1E1F] mt-5 text-center max-w-[10em] truncate", title: a.scene || "" }, p(a.scene || ""), 9, Kt), s("p", { class: "text-xs text-[#9A9A9A] mt-4 text-center text-wrap break-words whitespace-pre-wrap max-w-[24em] truncate line-clamp-6", title: a.desc || "" }, p(a.desc || ""), 9, Mt), s("div", Ht, [t(b, { type: "primary", onClick: Q((j) => A({ data: a }), ["stop"]) }, { default: o(() => [B(p(e.$t("action_edit")), 1)]), _: 2 }, 1032, ["onClick"]), t(b, { onClick: (j) => I({ data: a, index: N }) }, { default: o(() => [B(p(e.$t("action_delete")), 1)]), _: 2 }, 1032, ["onClick"])])], 64)) : (l(), f(P, { key: 3 }, [a.scene ? U("", true) : (l(), C(te, { key: 0, class: "mt-6", rows: 1 }))], 64))]))), 128))])]), qe(e.$slots, "footer"), t(W, { modelValue: z.value, "onUpdate:modelValue": d[2] || (d[2] = (a) => z.value = a), title: m.id ? e.$t("action_edit") : e.$t("action_add"), "align-center": "", width: "600px" }, { footer: o(() => [s("div", Jt, [t(F, { class: "w-[96px] h-[36px]", type: "primary", onClick: g }, { default: o(() => [B(p(e.$t("action_confirm")), 1)]), _: 1 }), t(F, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: D }, { default: o(() => [B(p(e.$t("action_cancel")), 1)]), _: 1 })])]), default: o(() => [t(w, { ref_key: "case_form_ref", ref: q, model: m, "label-width": "64px", "label-position": "left" }, { default: o(() => [t(r, { label: e.$t("input"), prop: "input_text", rules: [...x(M)({ message: "form_input_placeholder" }), { max: 200, message: e.$t("form_input_placeholder_max_length", { max: 200 }) }] }, { default: o(() => [t(L, { modelValue: m.input_text, "onUpdate:modelValue": d[0] || (d[0] = (a) => m.input_text = a), size: "large", maxlength: 200, "show-word-limit": "" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"]), t(r, { label: e.$t("output"), prop: "output_text", rules: [...x(M)({ message: "form_input_placeholder" }), { max: 1e3, message: e.$t("form_input_placeholder_max_length", { max: 1e3 }) }] }, { default: o(() => [t(L, { modelValue: m.output_text, "onUpdate:modelValue": d[1] || (d[1] = (a) => m.output_text = a), type: "textarea", size: "large", rows: "10", resize: "none", maxlength: 1e3, "show-word-limit": "" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue", "title"]), t(W, { modelValue: c.value, "onUpdate:modelValue": d[6] || (d[6] = (a) => c.value = a), title: n.id ? e.$t("action_edit") : e.$t("action_add"), "align-center": "", width: "600px" }, { footer: o(() => [s("div", Yt, [t(F, { class: "w-[96px] h-[36px]", type: "primary", onClick: k }, { default: o(() => [B(p(e.$t("action_confirm")), 1)]), _: 1 }), t(F, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: $ }, { default: o(() => [B(p(e.$t("action_cancel")), 1)]), _: 1 })])]), default: o(() => [t(w, { ref_key: "scene_form_ref", ref: i, model: n, "label-width": "102px", "label-position": "left" }, { default: o(() => [t(r, { label: e.$t("pictorial_image"), prop: "image", rules: x(M)({ message: "form_upload_placeholder" }) }, { default: o(() => [t(Xe, { modelValue: n.image, "onUpdate:modelValue": d[3] || (d[3] = (a) => n.image = a), class: "!w-[120px] !h-[112px]" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"]), t(r, { label: e.$t("scene"), prop: "scene", rules: [...x(M)({ message: "form_input_placeholder" }), { max: 20, message: e.$t("form_input_placeholder_max_length", { max: 20 }) }] }, { default: o(() => [t(L, { modelValue: n.scene, "onUpdate:modelValue": d[4] || (d[4] = (a) => n.scene = a), size: "large", maxlength: 20, "show-word-limit": "" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"]), t(r, { label: e.$t("description"), prop: "desc", rules: [...x(M)({ message: "form_input_placeholder" }), { max: 50, message: e.$t("form_input_placeholder_max_length", { max: 50 }) }] }, { default: o(() => [t(L, { modelValue: n.desc, "onUpdate:modelValue": d[5] || (d[5] = (a) => n.desc = a), type: "textarea", size: "large", rows: "5", resize: "none", maxlength: 50, "show-word-limit": "" }, null, 8, ["modelValue"])]), _: 1 }, 8, ["label", "rules"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue", "title"])]);
  };
} }), Zt = { key: 1, class: "size-8 rounded" }, Qt = { id: "app-config-full-screen-hook", class: "relative h-full flex bg-white" }, ea = { class: "flex-1 flex flex-col overflow-hidden" }, ta = { class: "border-t px-4 py-5" }, aa = { class: "border-t px-4 py-5 mt-8 sticky bottom-0 left-0 right-0 bg-white z-10" }, oa = ee({ __name: "index", setup(v) {
  const E = Fe(), q = ze(), i = ne(), { isWorkEnv: _ } = Se(), y = V(), z = V(), m = V(), c = V("first"), n = V({});
  Re("channelConfig", n);
  const T = async ({ restart: h = false } = {}) => {
    var _a, _b;
    if (i.saving)
      return;
    const g = z.value;
    let D = "";
    if (g && g.save) {
      i.saving = true;
      const { data: A = {} } = await g.save().catch(() => {
        i.saving = false;
      });
      D = A.agent_id;
    } else if (g && g.validateForm) {
      if (!await g.validateForm())
        return Promise.reject();
      await i.saveAgentData().catch(() => {
        i.saving = false;
      }), i.saving = true, D = i.agent_id;
    }
    de.emit("agent-change", { agent_id: D }), D && await q.replace({ name: "AgentCreate", query: { type: i.agent_type, agent_id: D } }), i.saving = false, y.value && (h || ((_a = y.value) == null ? void 0 : _a.getIsConfigChanged())) && ((_b = y.value) == null ? void 0 : _b.restart());
  }, S = () => {
    m.value && m.value.open({ agent_type: i.agent_type, agent_id: i.agent_id, data: { channel_config: n.value }, cache: true });
  };
  return De(async () => {
    i.resetState(), await J();
    const h = E.query.type || "prompt";
    if (i.agent_id = Number(E.query.agent_id), i.agent_type = h, await i.loadDetailData(), i.loadChannelOptions(), i.loadSubscriptionOptions(), h !== Be.PROMPT) {
      const g = Ue(h);
      n.value.name = g.channelType, n.value.channel_type = g.channelValue;
    }
  }), (h, g) => {
    const D = Pe, A = ve, I = Y, k = Oe, $ = Le, e = Ne, d = Ie, u = je;
    return l(), C(d, { class: "px-[60px] py-8" }, { default: o(() => [t(k, { back: "", title: x(i).form_data.name, class: "mb-5" }, { title_prefix: o(() => [x(i).form_data.logo ? (l(), C(D, { key: 0, src: x(i).form_data.logo, class: "w-8 rounded" }, null, 8, ["src"])) : (l(), f("div", Zt))]), title_suffix: o(() => [t(I, { class: "!size-5 !p-0 flex-center", onClick: S }, { default: o(() => [t(A, { name: "edit", width: "14" })]), _: 1 })]), _: 1 }, 8, ["title"]), t(e, { modelValue: c.value, "onUpdate:modelValue": g[0] || (g[0] = (b) => c.value = b), class: "flex-1 agent-tabs el-tabs--full" }, { default: o(() => [t($, { label: h.$t("app_config"), name: "first", lazy: "" }, { default: o(() => [ue((l(), f("div", Qt, [s("div", ea, [t(We, { ref_key: "agentFormRef", ref: z, class: "flex-1 py-7 px-4 overflow-y-auto", "agent-type": x(i).agent_type }, null, 8, ["agent-type"]), s("div", ta, [t(I, { type: "primary", size: "large", loading: x(i).saving, onClick: T }, { default: o(() => [B(p(h.$t("action_save")), 1)]), _: 1 }, 8, ["loading"])])]), g[2] || (g[2] = s("div", { class: "flex-none w-px border-r" }, null, -1)), x(i).agent_option_data.mode === "chat" ? (l(), C(it, { key: 0, ref_key: "chatRef", ref: y, class: "flex-1 overflow-hidden", onSave: T }, null, 512)) : x(i).agent_option_data.mode === "completion" ? (l(), C(wt, { key: 1, class: "flex-1 py-7" })) : U("", true)])), [[u, x(i).loading]])]), _: 1 }, 8, ["label"]), t($, { label: h.$t("usage_guide"), name: "second", lazy: "" }, { default: o(() => [t(Xt, null, { footer: o(() => [s("div", aa, [t(I, { type: "primary", size: "large", loading: x(i).saving, onClick: T }, { default: o(() => [B(p(h.$t("action_save")), 1)]), _: 1 }, 8, ["loading"])])]), _: 1 })]), _: 1 }, 8, ["label"]), x(_) ? U("", true) : (l(), C($, { key: 0, label: h.$t("dialogue_record"), name: "third", lazy: "" }, { default: o(() => [t(Ze)]), _: 1 }, 8, ["label"]))]), _: 1 }, 8, ["modelValue"]), t(Ge, { ref_key: "infoDrawerRef", ref: m, onSuccess: g[1] || (g[1] = (b) => x(de).emit("agent-change")) }, null, 512)]), _: 1 });
  };
} });
const Sa = Te(oa, [["__scopeId", "data-v-bb7571d1"]]);
export {
  Sa as default
};
