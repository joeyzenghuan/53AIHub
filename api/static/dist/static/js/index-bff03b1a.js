import { ap as Be, aH as ce, bi as Z, b7 as Ae, aS as J, b_ as pe, b9 as H, aV as Y, aW as be, aM as ae, a_ as Re, aY as Ue, Q as ye, r as D, al as T, ca as Le, a$ as fe, cb as Oe, aG as he, au as ne, bp as Ke, cc as We, bX as Ye, as as we, u as de, bZ as He, aX as qe, aZ as Je, cd as Xe, b as g, c as z, z as a, n as F, q as le, e as K, d as I, F as Q, G as se, h as W, i as E, H as Ee, t as O, am as ie, g as re, ce as je, aA as Ge, bs as Ze, v as Qe, f as p, aK as ea, cf as aa, y as ue, aO as la, aN as ta, aC as oa, aD as na, b3 as sa, b4 as ia, b5 as ra, ae as ve, cg as te, a4 as oe, o as ua, J as me, a as da, aL as ca, ch as pa, ci as fa, cj as va, ck as ma, a9 as ga, aa as _a, X as ba, ac as ya, $ as ha, p as wa } from "./index-7b696e01.js";
import { v as Ea } from "./el-loading-5050bc7d.js";
import { E as xa, a as Sa } from "./el-image-d432a419.js";
import { _ as Va } from "./index-71389ea4.js";
import { E as Ia } from "./el-divider-0c731d25.js";
import { t as ge, E as Ta } from "./el-tag-63139441.js";
import { u as Ca, E as Da, a as $a } from "./el-select-2909247e.js";
import "./el-scrollbar-a17df1f1.js";
import { _ as ka } from "./index.vue_vue_type_script_setup_true_lang-ca2646ba.js";
import { _ as _e } from "./image.vue_vue_type_style_index_0_lang-376c63d4.js";
import { S as Na } from "./service-dialog-c61bac9b.js";
import "./position-df18ca50.js";
import "./debounce-c1af5016.js";
import "./isEqual-71b69c76.js";
const Pa = Be({ modelValue: { type: ce(Array) }, max: Number, tagType: { ...ge.type, default: "info" }, tagEffect: ge.effect, trigger: { type: ce(String), default: Z.enter }, draggable: { type: Boolean, default: false }, size: Ae, clearable: Boolean, disabled: { type: Boolean, default: void 0 }, validateEvent: { type: Boolean, default: true }, readonly: Boolean, autofocus: Boolean, id: { type: String, default: void 0 }, tabindex: { type: [String, Number], default: 0 }, maxlength: { type: [String, Number] }, minlength: { type: [String, Number] }, placeholder: String, autocomplete: { type: String, default: "off" }, ariaLabel: String }), Fa = { [J]: (l) => pe(l) || H(l), [Y]: (l) => pe(l) || H(l), [be]: (l) => ae(l), "add-tag": (l) => ae(l), "remove-tag": (l) => ae(l), focus: (l) => l instanceof FocusEvent, blur: (l) => l instanceof FocusEvent, clear: () => true };
function za({ props: l, emit: d, formItem: m }) {
  const _ = Re(), $ = Ue(), w = ye(), r = D(), t = T(() => ["small"].includes($.value) ? "small" : "default"), e = T(() => {
    var o;
    return (o = l.modelValue) != null && o.length ? void 0 : l.placeholder;
  }), v = T(() => !(l.readonly || _.value)), b = T(() => {
    var o, u;
    return H(l.max) ? false : ((u = (o = l.modelValue) == null ? void 0 : o.length) != null ? u : 0) >= l.max;
  }), c = (o) => {
    if (b.value) {
      r.value = void 0;
      return;
    }
    B.value || d(be, o.target.value);
  }, M = (o) => {
    var u;
    if (!B.value)
      switch (o.code) {
        case l.trigger:
          o.preventDefault(), o.stopPropagation(), x();
          break;
        case Z.numpadEnter:
          l.trigger === Z.enter && (o.preventDefault(), o.stopPropagation(), x());
          break;
        case Z.backspace:
          !r.value && ((u = l.modelValue) != null && u.length) && (o.preventDefault(), o.stopPropagation(), n(l.modelValue.length - 1));
          break;
      }
  }, x = () => {
    var o, u;
    const y = (o = r.value) == null ? void 0 : o.trim();
    if (!y || b.value)
      return;
    const k = [...(u = l.modelValue) != null ? u : [], y];
    d(J, k), d(Y, k), d("add-tag", y), r.value = void 0;
  }, n = (o) => {
    var u;
    const y = ((u = l.modelValue) != null ? u : []).slice(), [k] = y.splice(o, 1);
    d(J, y), d(Y, y), d("remove-tag", k);
  }, s = () => {
    r.value = void 0, d(J, void 0), d(Y, void 0), d("clear");
  }, S = (o, u, y) => {
    var k;
    const A = ((k = l.modelValue) != null ? k : []).slice(), [i] = A.splice(o, 1), X = u > o && y === "before" ? -1 : u < o && y === "after" ? 1 : 0;
    A.splice(u + X, 0, i), d(J, A), d(Y, A);
  }, C = () => {
    var o;
    (o = w.value) == null || o.focus();
  }, f = () => {
    var o;
    (o = w.value) == null || o.blur();
  }, { wrapperRef: V, isFocused: R } = Le(w, { beforeFocus() {
    return _.value;
  }, afterBlur() {
    var o;
    x(), l.validateEvent && ((o = m == null ? void 0 : m.validate) == null || o.call(m, "blur").catch((u) => fe()));
  } }), { isComposing: B, handleCompositionStart: U, handleCompositionUpdate: N, handleCompositionEnd: P } = Oe({ afterComposition: c });
  return he(() => l.modelValue, () => {
    var o;
    l.validateEvent && ((o = m == null ? void 0 : m.validate) == null || o.call(m, Y).catch((u) => fe()));
  }), { inputRef: w, wrapperRef: V, isFocused: R, isComposing: B, inputValue: r, size: $, tagSize: t, placeholder: e, closable: v, disabled: _, inputLimit: b, handleDragged: S, handleInput: c, handleKeydown: M, handleAddTag: x, handleRemoveTag: n, handleClear: s, handleCompositionStart: U, handleCompositionUpdate: N, handleCompositionEnd: P, focus: C, blur: f };
}
function Ma() {
  const l = D(false);
  return { hovering: l, handleMouseEnter: () => {
    l.value = true;
  }, handleMouseLeave: () => {
    l.value = false;
  } };
}
function Ba({ wrapperRef: l, handleDragged: d, afterDragged: m }) {
  const _ = ne("input-tag"), $ = ye(), w = D(false);
  let r, t, e, v;
  function b(n) {
    return `.${_.e("inner")} .${_.namespace.value}-tag:nth-child(${n + 1})`;
  }
  function c(n, s) {
    r = s, t = l.value.querySelector(b(s)), t && (t.style.opacity = "0.5"), n.dataTransfer.effectAllowed = "move";
  }
  function M(n, s) {
    if (e = s, n.preventDefault(), n.dataTransfer.dropEffect = "move", H(r) || r === s) {
      w.value = false;
      return;
    }
    const S = l.value.querySelector(b(s)).getBoundingClientRect(), C = r + 1 !== s, f = r - 1 !== s, V = n.clientX - S.left, R = C ? f ? 0.5 : 1 : -1, B = f ? C ? 0.5 : 0 : 1;
    V <= S.width * R ? v = "before" : V > S.width * B ? v = "after" : v = void 0;
    const U = l.value.querySelector(`.${_.e("inner")}`), N = U.getBoundingClientRect(), P = Number.parseFloat(Ke(U, "gap")) / 2, o = S.top - N.top;
    let u = -9999;
    if (v === "before")
      u = Math.max(S.left - N.left - P, Math.floor(-P / 2));
    else if (v === "after") {
      const y = S.right - N.left;
      u = y + (N.width === y ? Math.floor(P / 2) : P);
    }
    We($.value, { top: `${o}px`, left: `${u}px` }), w.value = !!v;
  }
  function x(n) {
    n.preventDefault(), t && (t.style.opacity = ""), v && !H(r) && !H(e) && r !== e && d(r, e, v), w.value = false, r = void 0, t = null, e = void 0, v = void 0, m == null ? void 0 : m();
  }
  return { dropIndicatorRef: $, showDropIndicator: w, handleDragStart: c, handleDragOver: M, handleDragEnd: x };
}
function Aa({ props: l, isFocused: d, hovering: m, disabled: _, inputValue: $, size: w, validateState: r, validateIcon: t, needStatusIcon: e }) {
  const v = Ye(), b = we(), c = ne("input-tag"), M = ne("input"), x = T(() => [c.b(), c.is("focused", d.value), c.is("hovering", m.value), c.is("disabled", _.value), c.m(w.value), c.e("wrapper"), v.class]), n = T(() => [v.style]), s = T(() => {
    var f, V;
    return [c.e("inner"), c.is("draggable", l.draggable), c.is("left-space", !((f = l.modelValue) != null && f.length) && !b.prefix), c.is("right-space", !((V = l.modelValue) != null && V.length) && !C.value)];
  }), S = T(() => {
    var f;
    return l.clearable && !_.value && !l.readonly && (((f = l.modelValue) == null ? void 0 : f.length) || $.value) && (d.value || m.value);
  }), C = T(() => b.suffix || S.value || r.value && t.value && e.value);
  return { ns: c, nsInput: M, containerKls: x, containerStyle: n, innerKls: s, showClear: S, showSuffix: C };
}
const Ra = de({ name: "ElInputTag", inheritAttrs: false }), Ua = de({ ...Ra, props: Pa, emits: Fa, setup(l, { expose: d, emit: m }) {
  const _ = l, $ = He(), w = we(), { form: r, formItem: t } = qe(), { inputId: e } = Je(_, { formItemContext: t }), v = T(() => {
    var h;
    return (h = r == null ? void 0 : r.statusIcon) != null ? h : false;
  }), b = T(() => (t == null ? void 0 : t.validateState) || ""), c = T(() => b.value && Xe[b.value]), { inputRef: M, wrapperRef: x, isFocused: n, inputValue: s, size: S, tagSize: C, placeholder: f, closable: V, disabled: R, handleDragged: B, handleInput: U, handleKeydown: N, handleRemoveTag: P, handleClear: o, handleCompositionStart: u, handleCompositionUpdate: y, handleCompositionEnd: k, focus: A, blur: i } = za({ props: _, emit: m, formItem: t }), { hovering: X, handleMouseEnter: xe, handleMouseLeave: Se } = Ma(), { calculatorRef: Ve, inputStyle: Ie } = Ca(), { dropIndicatorRef: Te, showDropIndicator: Ce, handleDragStart: De, handleDragOver: $e, handleDragEnd: ke } = Ba({ wrapperRef: x, handleDragged: B, afterDragged: A }), { ns: L, nsInput: ee, containerKls: Ne, containerStyle: Pe, innerKls: Fe, showClear: ze, showSuffix: Me } = Aa({ props: _, hovering: X, isFocused: n, inputValue: s, disabled: R, size: S, validateState: b, validateIcon: c, needStatusIcon: v });
  return d({ focus: A, blur: i }), (h, al) => (g(), z("div", { ref_key: "wrapperRef", ref: x, class: F(a(Ne)), style: ta(a(Pe)), onMouseenter: a(xe), onMouseleave: a(Se) }, [a(w).prefix ? (g(), z("div", { key: 0, class: F(a(L).e("prefix")) }, [le(h.$slots, "prefix")], 2)) : K("v-if", true), I("div", { class: F(a(Fe)) }, [(g(true), z(Q, null, se(h.modelValue, (j, q) => (g(), W(a(Ta), { key: q, size: a(C), closable: a(V), type: h.tagType, effect: h.tagEffect, draggable: a(V) && h.draggable, "disable-transitions": "", onClose: (G) => a(P)(q), onDragstart: (G) => a(De)(G, q), onDragover: (G) => a($e)(G, q), onDragend: a(ke), onDrop: ie(() => {
  }, ["stop"]) }, { default: E(() => [le(h.$slots, "tag", { value: j, index: q }, () => [Ee(O(j), 1)])]), _: 2 }, 1032, ["size", "closable", "type", "effect", "draggable", "onClose", "onDragstart", "onDragover", "onDragend", "onDrop"]))), 128)), I("div", { class: F(a(L).e("input-wrapper")) }, [re(I("input", Ge({ id: a(e), ref_key: "inputRef", ref: M, "onUpdate:modelValue": (j) => Ze(s) ? s.value = j : null }, a($), { type: "text", minlength: h.minlength, maxlength: h.maxlength, disabled: a(R), readonly: h.readonly, autocomplete: h.autocomplete, tabindex: h.tabindex, placeholder: a(f), autofocus: h.autofocus, ariaLabel: h.ariaLabel, class: a(L).e("input"), style: a(Ie), onCompositionstart: a(u), onCompositionupdate: a(y), onCompositionend: a(k), onInput: a(U), onKeydown: a(N) }), null, 16, ["id", "onUpdate:modelValue", "minlength", "maxlength", "disabled", "readonly", "autocomplete", "tabindex", "placeholder", "autofocus", "ariaLabel", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onKeydown"]), [[je, a(s)]]), I("span", { ref_key: "calculatorRef", ref: Ve, "aria-hidden": "true", class: F(a(L).e("input-calculator")), textContent: O(a(s)) }, null, 10, ["textContent"])], 2), re(I("div", { ref_key: "dropIndicatorRef", ref: Te, class: F(a(L).e("drop-indicator")) }, null, 2), [[Qe, a(Ce)]])], 2), a(Me) ? (g(), z("div", { key: 1, class: F(a(L).e("suffix")) }, [le(h.$slots, "suffix"), a(ze) ? (g(), W(a(ue), { key: 0, class: F([a(L).e("icon"), a(L).e("clear")]), onMousedown: ie(a(aa), ["prevent"]), onClick: a(o) }, { default: E(() => [p(a(ea))]), _: 1 }, 8, ["class", "onMousedown", "onClick"])) : K("v-if", true), a(b) && a(c) && a(v) ? (g(), W(a(ue), { key: 1, class: F([a(ee).e("icon"), a(ee).e("validateIcon"), a(ee).is("loading", a(b) === "validating")]) }, { default: E(() => [(g(), W(la(a(c))))]), _: 1 }, 8, ["class"])) : K("v-if", true)], 2)) : K("v-if", true)], 46, ["onMouseenter", "onMouseleave"]));
} });
var La = oa(Ua, [["__file", "input-tag.vue"]]);
const Oa = na(La);
const Ka = { class: "mt-5 flex-1 flex flex-col bg-white py-6 px-8 box-border" }, Wa = { class: "text-[#1D1E1F] font-semibold" }, Ya = { class: "mt-4 w-full flex items-center gap-4" }, Ha = { class: "mt-2 w-full text-sm text-[#9A9A9A]" }, qa = { class: "mt-4 w-full flex items-center gap-4" }, Ja = { class: "mt-2 w-full text-sm text-[#9A9A9A]" }, Xa = { class: "flex items-center flex-wrap gap-4" }, ja = ["onClick"], Ga = { key: 0, class: "absolute -top-6 -right-6 rotate-45 w-12 h-12 flex items-center justify-center bg-[#3664EF] text-white z-[9]" }, Za = { class: "text-base" }, Qa = { class: "text-sm text-[#939499]" }, el = de({ __name: "index", setup(l) {
  sa();
  const d = ia();
  ra();
  const m = D(), _ = D(false), $ = D(""), w = D(true), r = D(false), t = T(() => d.info), e = ve({ logo: t.value.logo || "", ico: t.value.ico || "", name: t.value.display_name || "", keywords: t.value.keywords || [], language: t.value.language !== "En" && t.value.language || "zh-cn", desc: t.value.description || "", copyright: t.value.copyright || "", website_type: t.value.type || te, template_type: t.value.template_type != 1 && t.value.template_type || "portal", layout_type: t.value.layout_type != 1 && t.value.layout_type || "loose" }), v = ve({ logo: oe({ message: "module.website_info_logo_placeholder" }), icon: oe({ message: "module.website_info_logo_placeholder" }), name: oe({ message: "module.website_info_name_placeholder" }) }), b = D([{ label: "\u4E2D\u6587-CN", value: "zh-cn" }, { label: "\u4E2D\u6587-TW", value: "zh-tw" }, { label: "\u82F1\u6587-EN", value: "en" }, { label: "\u65E5\u6587-JP", value: "jp" }]);
  D([{ label: "AI\u95E8\u6237", value: "portal" }, { label: "\u8C46\u5305\u98CE\u683C", value: "doubao" }, { label: "\u79D8\u5854\u98CE\u683C", value: "mita" }, { label: "Kimi\u98CE\u683C", value: "kimi" }, { label: "\u72EC\u7ACB\u7AD9", value: "independent" }]), D([{ label: "\u5BBD\u677E", value: "loose", desc: "\u5E03\u5C40\u5BBD\u677E\u94FA\u6EE1\u5C4F\u5E55\uFF0C\u81EA\u9002\u5E94\u7528\u6237\u7684\u5206\u8FA8\u7387" }, { label: "\u5C45\u4E2D", value: "center", desc: "\u5E03\u5C40\u7D27\u51D1\u4E14\u5185\u5BB9\u5C45\u4E2D" }]);
  const c = D(""), M = async () => {
    await m.value.validate() && (r.value = true, await d.update({ data: { eid: t.value.eid, logo: e.logo, ico: e.ico, display_name: e.name, language: e.language, description: e.desc, keywords: JSON.stringify(e.keywords), copyright: e.copyright, type: e.website_type, template_type: e.template_type, layout_type: e.layout_type } }).finally(() => {
      r.value = false;
    }), ga.success(window.$t("action_save_success")), d.loadSelfInfo());
  }, x = () => {
    w.value = false;
  };
  return ua(() => {
    me.on("enterprise-info-loaded", x);
  }), da(() => {
    me.off("enterprise-info-loaded", x);
  }), he(() => t.value, () => {
    e.logo = t.value.logo || "", e.ico = t.value.ico || "", e.name = t.value.display_name || "", e.keywords = JSON.parse(t.value.keywords || "[]"), e.language = t.value.language !== "En" && t.value.language || "zh-cn", e.desc = t.value.description || "", e.copyright = t.value.copyright || "", e.website_type = t.value.type || te, e.template_type = t.value.template_type != 1 && t.value.template_type || "portal", e.layout_type = t.value.layout_type != 1 && t.value.layout_type || "loose", +t.value.eid && x();
  }, { immediate: true, deep: true }), (n, s) => {
    const S = ka, C = Sa, f = _a, V = ba, R = Oa, B = Da, U = $a, N = ue, P = ya, o = Ia, u = ha, y = Va, k = xa, A = Ea;
    return g(), z(Q, null, [p(y, { class: "px-[60px] py-8" }, { default: E(() => [p(S, { title: n.$t("module.website_info") }, null, 8, ["title"]), re((g(), z("div", Ka, [p(P, { ref_key: "form_ref", ref: m, class: "flex-1 max-h-[calc(100vh-264px)] overflow-auto", model: e, rules: v, "label-position": "top" }, { default: E(() => [I("h1", Wa, O(n.$t("basic_info")), 1), p(f, { class: "mt-8", label: n.$t("module.website_info_logo"), prop: "logo" }, { default: E(() => [I("div", Ya, [e.logo ? (g(), W(C, { key: 0, class: "h-[70px] rounded overflow-hidden", src: e.logo, "preview-src-list": [e.logo], fit: "contain" }, null, 8, ["src", "preview-src-list"])) : K("", true), p(_e, { class: "w-auto h-auto", modelValue: e.logo, "onUpdate:modelValue": s[0] || (s[0] = (i) => e.logo = i), showText: "", text: n.$t(e.logo ? "action_modify" : "action_upload") }, null, 8, ["modelValue", "text"])]), I("div", Ha, O(n.$t("module.website_info_logo_tip")), 1)]), _: 1 }, 8, ["label"]), p(f, { class: "mt-8", label: n.$t("module.website_info_ico"), prop: "ico" }, { default: E(() => [I("div", qa, [e.ico ? (g(), W(C, { key: 0, class: "h-[24px] rounded overflow-hidden", src: e.ico, "preview-src-list": [e.ico], fit: "contain" }, null, 8, ["src", "preview-src-list"])) : K("", true), p(_e, { class: "w-auto h-auto", modelValue: e.ico, "onUpdate:modelValue": s[1] || (s[1] = (i) => e.ico = i), showText: "", cropperDisabled: "", allowTypeList: ["ico"], text: n.$t(e.ico ? "action_modify" : "action_upload") }, null, 8, ["modelValue", "text"])]), I("div", Ja, O(n.$t("module.website_info_ico_tip")), 1)]), _: 1 }, 8, ["label"]), p(f, { label: n.$t("module.website_info_name"), prop: "name" }, { default: E(() => [p(V, { class: "max-w-[660px]", modelValue: e.name, "onUpdate:modelValue": s[2] || (s[2] = (i) => e.name = i), placeholder: n.$t("module.website_info_name_placeholder"), size: "large", clearable: "", maxlength: "120", "show-word-limit": "" }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), p(f, { label: n.$t("module.website_info_keyword"), prop: "keywords" }, { default: E(() => [p(R, { class: "max-w-[660px]", draggable: "", size: "large", modelValue: e.keywords, "onUpdate:modelValue": s[3] || (s[3] = (i) => e.keywords = i), placeholder: n.$t("module.website_info_keyword_placeholder"), max: 10, maxlength: 20 }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), p(f, { label: n.$t("module.website_info_desc") }, { default: E(() => [p(V, { class: "max-w-[660px]", modelValue: e.desc, "onUpdate:modelValue": s[4] || (s[4] = (i) => e.desc = i), size: "large", type: "textarea", rows: 5, resize: "none", clearable: "", maxlength: "200", "show-word-limit": "", placeholder: n.$t("module.website_info_desc_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), p(f, { label: n.$t("module.website_info_copyright"), prop: "copyright" }, { default: E(() => [p(V, { class: "max-w-[660px]", modelValue: e.copyright, "onUpdate:modelValue": s[5] || (s[5] = (i) => e.copyright = i), placeholder: n.$t("module.website_info_copyright_placeholder"), size: "large", clearable: "", maxlength: "200", "show-word-limit": "" }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), p(f, { label: n.$t("module.website_info_language") }, { default: E(() => [p(U, { class: "max-w-[660px]", modelValue: e.language, "onUpdate:modelValue": s[6] || (s[6] = (i) => e.language = i), size: "large" }, { default: E(() => [(g(true), z(Q, null, se(b.value, (i) => (g(), W(B, { key: i.value, label: n.$t(`language_option_label.${i.value}`), value: i.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), p(f, { label: n.$t("module.website_info_type"), prop: "website_type" }, { default: E(() => [I("ul", Xa, [(g(true), z(Q, null, se([a(te), a(va), a(ma)], (i) => (g(), z("li", { key: i, class: F(["relative w-[300px] px-5 py-4 bg-[#F5F5F5] flex flex-col cursor-pointer gap-2 border rounded box-border overflow-hidden text-sm hover:border-[#3664EF] hover:text-[#3664EF]", [e.website_type === i ? "border-[#3664EF] text-[#3664EF]" : "text-[#1D1E1F]"]]), onClick: ie((X) => e.website_type = i, ["stop"]) }, [e.website_type === i ? (g(), z("div", Ga, [p(N, { class: "-rotate-45 translate-y-3.5 translate-x-0", color: "#fff", size: 16 }, { default: E(() => [p(a(ca))]), _: 1 })])) : K("", true), I("div", Za, O(n.$t(a(pa).get(i))), 1), I("div", Qa, O(n.$t(a(fa).get(i))), 1)], 10, ja))), 128))])]), _: 1 }, 8, ["label"]), s[9] || (s[9] = I("div", { class: "w-full h-8" }, null, -1))]), _: 1 }, 8, ["model", "rules"]), p(o), p(u, { class: "h-[36px] w-[96px]", type: "primary", size: "large", loading: r.value, onClick: M }, { default: E(() => [Ee(O(n.$t("action_save")), 1)]), _: 1 }, 8, ["loading"])])), [[A, w.value]])]), _: 1 }), c.value ? (g(), W(k, { key: 0, "url-list": [c.value], onClose: s[7] || (s[7] = (i) => c.value = "") }, null, 8, ["url-list"])) : K("", true), p(Na, { visible: _.value, "onUpdate:visible": s[8] || (s[8] = (i) => _.value = i), title: $.value }, null, 8, ["visible", "title"])], 64);
  };
} });
const gl = wa(el, [["__scopeId", "data-v-3fbeab0d"]]);
export {
  gl as default
};
