import { E as G, B as K, d as q, c as Q, R as X, G as Z, f as ee, S as le, e as oe, T as te, v as ae, F as se, b as ie } from "./element-plus-c72880c6.js";
import { _ as ne } from "./index-62cbccec.js";
import { _ as re } from "./index.vue_vue_type_script_setup_true_lang-9a63c23d.js";
import { d as ue, h as de, e as r, j as pe, V as S, i as me, D as ce, f as _e, o as n, c as m, M as a, K as i, S as fe, a as u, P as c, J as _, G as f, H as E, ac as T, u as p, a2 as ve, I as ge, O as ye } from "./@vue-3b855f7b.js";
import { C as we } from "./@element-plus-0cfad8bb.js";
import { _ as F } from "./image.vue_vue_type_style_index_0_lang-58647f4f.js";
import { S as be } from "./service-dialog-20bd8bbd.js";
import { u as Ee, a as he, b as xe, W as h, l as x, e as z, y as Ve, z as $e, A as ke, B as Ie, f as Se } from "./index-76ebd052.js";
import "./dayjs-b67ba5b3.js";
import "./cssfilter-476ae7ee.js";
import "./lodash-es-fadd064a.js";
import "./@vueuse-7fa053fd.js";
import "./@popperjs-c45de710.js";
import "./async-validator-7f96df71.js";
import "./@ctrl-f8748455.js";
import "./normalize-wheel-es-ed76fb12.js";
import "./vue-router-2f60a71a.js";
import "./vue-cropper-d3d11008.js";
import "./pinia-6f4b1ece.js";
import "./vue-demi-71ba0ef2.js";
import "./axios-8e4517c3.js";
import "./vue-i18n-b5fa020c.js";
import "./@intlify-bab9fd84.js";
const Te = { class: "mt-5 flex-1 flex flex-col bg-white py-6 px-8 box-border" }, Fe = { class: "text-[#1D1E1F] font-semibold" }, ze = { class: "mt-4 w-full flex items-center gap-4" }, Be = { class: "mt-2 w-full text-sm text-[#9A9A9A]" }, De = { class: "mt-4 w-full flex items-center gap-4" }, Ne = { class: "mt-2 w-full text-sm text-[#9A9A9A]" }, Ce = { class: "flex items-center flex-wrap gap-4" }, Ae = ["onClick"], Pe = { key: 0, class: "absolute -top-6 -right-6 rotate-45 w-12 h-12 flex items-center justify-center bg-[#3664EF] text-white z-[9]" }, Ue = { class: "text-base" }, Le = { class: "text-sm text-[#939499]" }, We = ue({ __name: "index", setup(Me) {
  de();
  const { isOpLocalEnv: B } = Ee(), v = he();
  xe();
  const V = r(), $ = r(false), D = r(""), k = r(true), g = r(false), l = pe(() => v.info), e = S({ logo: l.value.logo || "", ico: l.value.ico || "", name: l.value.display_name || "", keywords: l.value.keywords || [], language: l.value.language !== "En" && l.value.language || "zh-cn", desc: l.value.description || "", copyright: l.value.copyright || "", website_type: l.value.type || h, template_type: l.value.template_type != 1 && l.value.template_type || "portal", layout_type: l.value.layout_type != 1 && l.value.layout_type || "loose" }), N = S({ logo: x({ message: "module.website_info_logo_placeholder" }), icon: x({ message: "module.website_info_logo_placeholder" }), name: x({ message: "module.website_info_name_placeholder" }) }), C = r([{ label: "\u4E2D\u6587-CN", value: "zh-cn" }, { label: "\u4E2D\u6587-TW", value: "zh-tw" }, { label: "\u82F1\u6587-EN", value: "en" }, { label: "\u65E5\u6587-JP", value: "jp" }]);
  r([{ label: "AI\u95E8\u6237", value: "portal" }, { label: "\u8C46\u5305\u98CE\u683C", value: "doubao" }, { label: "\u79D8\u5854\u98CE\u683C", value: "mita" }, { label: "Kimi\u98CE\u683C", value: "kimi" }, { label: "\u72EC\u7ACB\u7AD9", value: "independent" }]), r([{ label: "\u5BBD\u677E", value: "loose", desc: "\u5E03\u5C40\u5BBD\u677E\u94FA\u6EE1\u5C4F\u5E55\uFF0C\u81EA\u9002\u5E94\u7528\u6237\u7684\u5206\u8FA8\u7387" }, { label: "\u5C45\u4E2D", value: "center", desc: "\u5E03\u5C40\u7D27\u51D1\u4E14\u5185\u5BB9\u5C45\u4E2D" }]);
  const y = r(""), A = async () => {
    await V.value.validate() && (g.value = true, await v.update({ data: { eid: l.value.eid, logo: e.logo, ico: e.ico, display_name: e.name, language: e.language, description: e.desc, keywords: JSON.stringify(e.keywords), copyright: e.copyright, type: e.website_type, template_type: e.template_type, layout_type: e.layout_type } }).finally(() => {
      g.value = false;
    }), G.success(window.$t("action_save_success")), v.loadSelfInfo());
  }, w = () => {
    k.value = false;
  };
  return me(() => {
    z.on("enterprise-info-loaded", w);
  }), ce(() => {
    z.off("enterprise-info-loaded", w);
  }), _e(() => l.value, () => {
    e.logo = l.value.logo || "", e.ico = l.value.ico || "", e.name = l.value.display_name || "", e.keywords = JSON.parse(l.value.keywords || "[]"), e.language = l.value.language !== "En" && l.value.language || "zh-cn", e.desc = l.value.description || "", e.copyright = l.value.copyright || "", e.website_type = l.value.type || h, e.template_type = l.value.template_type != 1 && l.value.template_type || "portal", e.layout_type = l.value.layout_type != 1 && l.value.layout_type || "loose", +l.value.eid && w();
  }, { immediate: true, deep: true }), (t, s) => {
    const P = re, I = K, d = q, b = Q, U = X, L = se, W = Z, M = ie, O = ee, Y = le, R = oe, J = ne, j = te, H = ae;
    return n(), m(E, null, [a(J, { class: "px-[60px] py-8" }, { default: i(() => [a(P, { title: t.$t("module.website_info") }, null, 8, ["title"]), fe((n(), m("div", Te, [a(O, { ref_key: "form_ref", ref: V, class: "flex-1 max-h-[calc(100vh-264px)] overflow-auto", model: e, rules: N, "label-position": "top" }, { default: i(() => [u("h1", Fe, c(t.$t("basic_info")), 1), a(d, { class: "mt-8", label: t.$t("module.website_info_logo"), prop: "logo" }, { default: i(() => [u("div", ze, [e.logo ? (n(), _(I, { key: 0, class: "h-[70px] rounded overflow-hidden", src: e.logo, "preview-src-list": [e.logo], fit: "contain" }, null, 8, ["src", "preview-src-list"])) : f("", true), a(F, { class: "w-auto h-auto", modelValue: e.logo, "onUpdate:modelValue": s[0] || (s[0] = (o) => e.logo = o), showText: "", text: t.$t(e.logo ? "action_modify" : "action_upload") }, null, 8, ["modelValue", "text"])]), u("div", Be, c(t.$t("module.website_info_logo_tip")), 1)]), _: 1 }, 8, ["label"]), a(d, { class: "mt-8", label: t.$t("module.website_info_ico"), prop: "ico" }, { default: i(() => [u("div", De, [e.ico ? (n(), _(I, { key: 0, class: "h-[24px] rounded overflow-hidden", src: e.ico, "preview-src-list": [e.ico], fit: "contain" }, null, 8, ["src", "preview-src-list"])) : f("", true), a(F, { class: "w-auto h-auto", modelValue: e.ico, "onUpdate:modelValue": s[1] || (s[1] = (o) => e.ico = o), showText: "", cropperDisabled: "", allowTypeList: ["ico"], text: t.$t(e.ico ? "action_modify" : "action_upload") }, null, 8, ["modelValue", "text"])]), u("div", Ne, c(t.$t("module.website_info_ico_tip")), 1)]), _: 1 }, 8, ["label"]), a(d, { label: t.$t("module.website_info_name"), prop: "name" }, { default: i(() => [a(b, { class: "max-w-[660px]", modelValue: e.name, "onUpdate:modelValue": s[2] || (s[2] = (o) => e.name = o), placeholder: t.$t("module.website_info_name_placeholder"), size: "large", clearable: "", maxlength: "120", "show-word-limit": "" }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), a(d, { label: t.$t("module.website_info_keyword"), prop: "keywords" }, { default: i(() => [a(U, { class: "max-w-[660px]", draggable: "", size: "large", modelValue: e.keywords, "onUpdate:modelValue": s[3] || (s[3] = (o) => e.keywords = o), placeholder: t.$t("module.website_info_keyword_placeholder"), max: 10, maxlength: 20 }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), a(d, { label: t.$t("module.website_info_desc") }, { default: i(() => [a(b, { class: "max-w-[660px]", modelValue: e.desc, "onUpdate:modelValue": s[4] || (s[4] = (o) => e.desc = o), size: "large", type: "textarea", rows: 5, resize: "none", clearable: "", maxlength: "200", "show-word-limit": "", placeholder: t.$t("module.website_info_desc_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), a(d, { label: t.$t("module.website_info_copyright"), prop: "copyright" }, { default: i(() => [a(b, { class: "max-w-[660px]", modelValue: e.copyright, "onUpdate:modelValue": s[5] || (s[5] = (o) => e.copyright = o), placeholder: t.$t("module.website_info_copyright_placeholder"), size: "large", clearable: "", maxlength: "200", "show-word-limit": "" }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), a(d, { label: t.$t("module.website_info_language") }, { default: i(() => [a(W, { class: "max-w-[660px]", modelValue: e.language, "onUpdate:modelValue": s[6] || (s[6] = (o) => e.language = o), size: "large" }, { default: i(() => [(n(true), m(E, null, T(C.value, (o) => (n(), _(L, { key: o.value, label: t.$t(`language_option_label.${o.value}`), value: o.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), a(d, { label: t.$t("module.website_info_type"), prop: "website_type" }, { default: i(() => [u("ul", Ce, [(n(true), m(E, null, T([p(h), p(Ve), p($e)], (o) => (n(), m("li", { key: o, class: ge(["relative w-[300px] px-5 py-4 bg-[#F5F5F5] flex flex-col cursor-pointer gap-2 border rounded box-border overflow-hidden text-sm hover:border-[#3664EF] hover:text-[#3664EF]", [e.website_type === o ? "border-[#3664EF] text-[#3664EF]" : "text-[#1D1E1F]", p(B) ? "opacity-60 pointer-events-none" : ""]]), onClick: ye((Oe) => e.website_type = o, ["stop"]) }, [e.website_type === o ? (n(), m("div", Pe, [a(M, { class: "-rotate-45 translate-y-3.5 translate-x-0", color: "#fff", size: 16 }, { default: i(() => [a(p(we))]), _: 1 })])) : f("", true), u("div", Ue, c(t.$t(p(ke).get(o))), 1), u("div", Le, c(t.$t(p(Ie).get(o))), 1)], 10, Ae))), 128))])]), _: 1 }, 8, ["label"]), s[9] || (s[9] = u("div", { class: "w-full h-8" }, null, -1))]), _: 1 }, 8, ["model", "rules"]), a(Y), a(R, { class: "h-[36px] w-[96px]", type: "primary", size: "large", loading: g.value, onClick: A }, { default: i(() => [ve(c(t.$t("action_save")), 1)]), _: 1 }, 8, ["loading"])])), [[H, k.value]])]), _: 1 }), y.value ? (n(), _(j, { key: 0, "url-list": [y.value], onClose: s[7] || (s[7] = (o) => y.value = "") }, null, 8, ["url-list"])) : f("", true), a(be, { visible: $.value, "onUpdate:visible": s[8] || (s[8] = (o) => $.value = o), title: D.value }, null, 8, ["visible", "title"])], 64);
  };
} });
const ml = Se(We, [["__scopeId", "data-v-ad120f32"]]);
export {
  ml as default
};
