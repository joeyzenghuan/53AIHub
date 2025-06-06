import { E as j, S as z, d as N, a3 as O, f as R, e as J, v as H, B as W } from "./element-plus-c72880c6.js";
import { _ as K } from "./index-918f1759.js";
import { _ as Q } from "./index.vue_vue_type_script_setup_true_lang-9a63c23d.js";
import { d as q, h as G, e as y, j as d, V as S, i as X, o as u, J as Z, K as _, M as a, S as ee, c as b, a as e, P as r, Q as p, H as te, ac as oe, u as f, a2 as le, I as se, O as ae } from "./@vue-3b855f7b.js";
import { s as $, t as k, a as re, b as ne } from "./index-226b5715.js";
import "./dayjs-b67ba5b3.js";
import "./cssfilter-476ae7ee.js";
import "./lodash-es-fadd064a.js";
import "./@element-plus-0cfad8bb.js";
import "./@vueuse-7fa053fd.js";
import "./@popperjs-c45de710.js";
import "./async-validator-7f96df71.js";
import "./@ctrl-f8748455.js";
import "./normalize-wheel-es-ed76fb12.js";
import "./vue-router-2f60a71a.js";
import "./pinia-6f4b1ece.js";
import "./vue-demi-71ba0ef2.js";
import "./axios-8e4517c3.js";
import "./vue-i18n-b5fa020c.js";
import "./@intlify-bab9fd84.js";
const c = "website", h = "software", ie = /* @__PURE__ */ new Map([[c, "template_style.website"], [h, "template_style.software"]]), _e = /* @__PURE__ */ new Map([[c, "/images/info/template-portal.png"], [h, "/images/info/template-independent.png"]]), P = { async getTemplateStyle() {
  const { data: { template_type: m = "{}" } = {} } = await $.get("/api/enterprises/template_type").catch(k);
  let n = {};
  try {
    n = JSON.parse(m);
  } catch {
    n = {};
  }
  return n;
}, async saveTemplateStyle(m) {
  return $.put("/api/enterprises/template_type", { template_type: JSON.stringify(m) }).catch(k);
} }, pe = { class: "mt-5 flex-1 flex flex-col gap-4 bg-white py-6 px-8 box-border" }, ce = { class: "text-[#1D1E1F] font-semibold" }, me = { class: "w-full relative shadow-md overflow-auto" }, de = { class: "w-full relative flex items-center justify-between bg-[#F0F0F0] min-w-[720px]" }, ue = { class: "absolute top-0 left-[96px] h-[46px] overflow-hidden flex items-center gap-2" }, fe = ["src"], ge = { class: "text-[#1D1E1F] text-sm max-w-[8em] truncate" }, xe = { class: "flex items-center gap-3" }, ve = ["src"], ye = { class: "flex items-center gap-2" }, be = { class: "flex flex-wrap gap-4" }, he = ["onClick"], we = { class: "text-sm p-1.5" }, Ee = { class: "flex items-center flex-wrap gap-7 text-[#4F5052] text-sm" }, Fe = { class: "flex items-center gap-2" }, Te = { class: "flex items-center gap-2" }, Ve = { class: "flex items-center gap-2" }, Se = { class: "flex items-center gap-2" }, $e = { class: "flex items-center gap-2" }, ke = { class: "flex items-center gap-2" }, Ge = q({ __name: "index", setup(m) {
  G();
  const n = re();
  ne();
  const g = y(), x = y(true), v = y(false);
  d(() => n.info);
  const w = d(() => n.info.logo || ""), L = d(() => n.info.ico || w.value), E = d(() => n.info.display_name || ""), t = S({ style_type: c, theme_color: "#2563eb", text_color: "#333333", nav_bg_color: "#ffffff", nav_text_color: "#333333", page_footer_bg_color: "#18191f", page_footer_text_color: "#f2f2f2" }), M = S({}), C = async () => {
    await g.value.validate() && (v.value = true, await P.saveTemplateStyle({ ...t }).finally(() => {
      v.value = false;
    }), j.success(window.$t("action_save_success")), F());
  }, F = async () => {
    x.value = true;
    const o = await P.getTemplateStyle().finally(() => {
      x.value = false;
    });
    t.style_type = o.style_type || c, t.theme_color = o.theme_color || "#3664EF", t.text_color = o.text_color || "#333333", t.nav_bg_color = o.nav_bg_color || "#ffffff", t.nav_text_color = o.nav_text_color || "#333333", t.page_footer_bg_color = o.page_footer_bg_color || "#18191F", t.page_footer_text_color = o.page_footer_text_color || "#F2F2F2";
  };
  return X(() => {
    F();
  }), (o, s) => {
    const A = Q, T = z, B = W, V = N, i = O, D = R, Y = J, I = K, U = H;
    return u(), Z(I, { class: "px-[60px] py-8" }, { default: _(() => [a(A, { title: o.$t("module.template_style") }, null, 8, ["title"]), ee((u(), b("div", pe, [e("h4", ce, r(o.$t("action_preview")), 1), e("div", me, [e("div", de, [e("div", { class: "w-[340px] h-[46px]", style: p({ background: `url(${o.$getRealPath({ url: "/images/browser_navigation_bar.png" })})`, "background-size": "1025px 46px" }) }, null, 4), e("div", { class: "w-[280px] h-[46px]", style: p({ background: `url(${o.$getRealPath({ url: "/images/browser_navigation_bar.png" })})`, "background-size": "1025px 46px", "background-position": "right top" }) }, null, 4)]), e("div", ue, [e("img", { src: L.value, class: "w-[14px] object-cover" }, null, 8, fe), e("div", ge, r(E.value), 1)]), e("div", { class: "w-full min-w-[720px] h-[79px] px-[32px] box-border flex items-center justify-between rounded", style: p({ backgroundColor: t.nav_bg_color }) }, [e("div", xe, [e("img", { src: w.value, class: "w-[44px] object-cover" }, null, 8, ve), e("div", { class: "text-[24px] font-semibold max-w-[12em] truncate", style: p({ color: t.nav_text_color }) }, r(E.value), 5)]), e("div", ye, [e("div", { class: "text-[#fff] text-sm w-[76px] h-[38px] leading-[38px] text-center rounded-md overflow-hidden", style: p({ backgroundColor: t.theme_color }) }, r(o.$t("action_login")), 5)])], 4)]), a(T), a(D, { ref_key: "form_ref", ref: g, class: "flex-1 max-h-[calc(100vh-378px)] overflow-auto", model: t, rules: M, "label-position": "top" }, { default: _(() => [a(V, { label: o.$t("template_style.website_style") }, { default: _(() => [e("ul", be, [(u(true), b(te, null, oe([f(c), f(h)], (l) => (u(), b("li", { key: l, class: se(["w-[172px] p-1.5 bg-[#F5F5F5] flex flex-col cursor-pointer items-center gap-2 border rounded box-border overflow-hidden text-sm hover:border-[#3664EF] hover:text-[#3664EF]", [t.style_type === l ? "border-[#3664EF] text-[#3664EF]" : "text-[#4F5052] opacity-60 pointer-events-none"]]), onClick: ae((Pe) => t.style_type = l, ["stop"]) }, [e("div", we, r(o.$t(f(ie).get(l))), 1), a(B, { class: "w-full", src: o.$getRealPath({ url: f(_e).get(l) }), fit: "contain" }, null, 8, ["src"])], 10, he))), 128))])]), _: 1 }, 8, ["label"]), a(V, { label: o.$t("template_style.theme_color") }, { default: _(() => [e("ul", Ee, [e("li", Fe, [a(i, { modelValue: t.theme_color, "onUpdate:modelValue": s[0] || (s[0] = (l) => t.theme_color = l) }, null, 8, ["modelValue"]), e("span", null, r(o.$t("template_style.theme_color_v2")), 1)]), e("li", Te, [a(i, { modelValue: t.text_color, "onUpdate:modelValue": s[1] || (s[1] = (l) => t.text_color = l) }, null, 8, ["modelValue"]), e("span", null, r(o.$t("template_style.text_color")), 1)]), e("li", Ve, [a(i, { modelValue: t.nav_bg_color, "onUpdate:modelValue": s[2] || (s[2] = (l) => t.nav_bg_color = l) }, null, 8, ["modelValue"]), e("span", null, r(o.$t("template_style.nav_bg_color")), 1)]), e("li", Se, [a(i, { modelValue: t.nav_text_color, "onUpdate:modelValue": s[3] || (s[3] = (l) => t.nav_text_color = l) }, null, 8, ["modelValue"]), e("span", null, r(o.$t("template_style.nav_text_color")), 1)]), e("li", $e, [a(i, { modelValue: t.page_footer_bg_color, "onUpdate:modelValue": s[4] || (s[4] = (l) => t.page_footer_bg_color = l) }, null, 8, ["modelValue"]), e("span", null, r(o.$t("template_style.page_footer_bg_color")), 1)]), e("li", ke, [a(i, { modelValue: t.page_footer_text_color, "onUpdate:modelValue": s[5] || (s[5] = (l) => t.page_footer_text_color = l) }, null, 8, ["modelValue"]), e("span", null, r(o.$t("template_style.page_footer_text_color")), 1)])])]), _: 1 }, 8, ["label"]), s[6] || (s[6] = e("div", { class: "w-full h-8" }, null, -1))]), _: 1 }, 8, ["model", "rules"]), a(T, { class: "!my-3" }), a(Y, { class: "h-[36px] w-[96px]", type: "primary", size: "large", loading: v.value, onClick: C }, { default: _(() => [le(r(o.$t("action_save")), 1)]), _: 1 }, 8, ["loading"])])), [[U, x.value]])]), _: 1 });
  };
} });
export {
  Ge as default
};
