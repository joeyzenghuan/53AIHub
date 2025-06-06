import { t as V, e as j, u as I, v as P } from "./element-plus-c72880c6.js";
import { u as H, a as M, b as U, _ as z } from "./index-226b5715.js";
import { _ as G } from "./index.vue_vue_type_script_setup_true_lang-9a63c23d.js";
import { _ as J } from "./LanguageDropdown.vue_vue_type_script_setup_true_lang-454f226e.js";
import { S as K } from "./service-dialog-7058ad1d.js";
import { d as O, e as x, j as f, i as R, o as a, c as l, M as i, K as h, S as g, a as e, P as t, u as c, a2 as E, J as T, G as _, an as Y } from "./@vue-3b855f7b.js";
import "./dayjs-b67ba5b3.js";
import "./cssfilter-476ae7ee.js";
import "./lodash-es-fadd064a.js";
import "./@element-plus-0cfad8bb.js";
import "./@vueuse-7fa053fd.js";
import "./@popperjs-c45de710.js";
import "./async-validator-7f96df71.js";
import "./@ctrl-f8748455.js";
import "./normalize-wheel-es-ed76fb12.js";
import "./pinia-6f4b1ece.js";
import "./vue-demi-71ba0ef2.js";
import "./axios-8e4517c3.js";
import "./vue-i18n-b5fa020c.js";
import "./@intlify-bab9fd84.js";
import "./vue-router-2f60a71a.js";
const q = { class: "h-full flex flex-col px-[60px] py-8" }, Q = { class: "flex-1 overflow-y-auto flex bg-white mt-4 py-[67px] box-border px-[76px] rounded-lg" }, W = { class: "flex-1" }, X = { class: "flex items-center gap-4" }, Z = ["src"], ee = { class: "text-2xl text-[#1D1E1F] font-semibold" }, te = { class: "text-sm text-[#9A9A9A] mt-3" }, se = { class: "mt-10 flex flex-col gap-8" }, oe = { class: "flex items-center gap-8" }, ie = { class: "flex-none w-[64px] text-base text-[#9A9A9A]" }, ne = { key: 0, class: "flex items-center gap-2" }, ae = { key: 0, class: "flex items-center gap-8" }, le = { class: "flex-none w-[64px] text-base text-[#9A9A9A]" }, re = { class: "flex items-center gap-3" }, ce = { class: "text-base text-[#2563EB]" }, _e = { class: "flex items-center gap-8" }, de = { class: "flex-none w-[64px] text-base text-[#9A9A9A]" }, pe = { class: "flex items-center gap-3" }, me = { class: "text-base text-[#2563EB]" }, ue = { class: "flex items-center gap-8" }, ve = { class: "flex-none w-[64px] text-base text-[#9A9A9A]" }, xe = { class: "flex items-center gap-3" }, fe = { class: "text-base text-[#2563EB]" }, he = { class: "flex items-center gap-8" }, ge = { class: "flex-none w-[64px] text-base text-[#9A9A9A]" }, be = { class: "flex items-center gap-3" }, we = { class: "text-base text-[#1D1E1F]" }, Ae = { key: 1, class: "flex items-center gap-8" }, ye = { class: "flex-none w-[64px] text-base text-[#9A9A9A]" }, $e = { class: "flex items-center gap-3" }, Ee = { class: "text-base text-[#1D1E1F]" }, ke = { class: "ml-[48px] pt-[68px] flex flex-col items-end" }, Be = { class: "flex flex-col gap-3 w-[238px]" }, De = { class: "flex justify-between text-sm text-[#4F5052]" }, Se = ["src"], Fe = { class: "text-sm text-[#9A9A9A] text-center py-11" }, Ze = O({ __name: "index", setup(Le) {
  const { isOpLocalEnv: r } = H(), b = M(), k = U(), B = (/* @__PURE__ */ new Date()).getFullYear(), d = x(false), p = x({}), m = x(false), n = f(() => b.info), u = f(() => k.is_saas_login), w = f(() => r.value ? `${window.location.origin}/#/index` : n.value.domain), A = (s = 0) => s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return R(async () => {
    d.value = true, p.value = await b.loadHomeInfo().finally(() => {
      d.value = false;
    });
  }), (s, o) => {
    const D = J, S = G, v = z, F = V, L = j, N = I, y = Y("router"), C = P;
    return a(), l("div", q, [i(S, { title: s.$t("module.homepage") }, { right: h(() => [i(D)]), _: 1 }, 8, ["title"]), g((a(), l("div", Q, [e("div", W, [e("div", X, [e("img", { class: "h-[70px] object-contain", src: n.value.logo, alt: "" }, null, 8, Z), e("h3", ee, t(n.value.name), 1), g(i(v, { class: "cursor-pointer hover:opacity-60", name: "edit", color: "#2563EB" }, null, 512), [[y, { name: "Info" }, void 0, { push: true }]])]), e("div", te, t(n.value.description || ""), 1), e("div", se, [e("div", oe, [e("div", ie, t(c(r) ? s.$t("website_home") : s.$t("website_domain")), 1), u.value || c(r) ? (a(), l("div", ne, [i(F, { style: { "--el-link-text-color": "#1D1E1F", "--el-link-font-size": "16px" }, target: "_blank", href: w.value }, { default: h(() => [E(t(w.value) + " ", 1), i(v, { class: "cursor-pointer ml-1", name: "blank", width: "16", color: "#2563EB" })]), _: 1 }, 8, ["href"]), c(r) ? _("", true) : g((a(), T(v, { key: 0, class: "cursor-pointer hover:opacity-60", name: "edit", width: "16", color: "#2563EB" }, null, 512)), [[y, { name: "Domain" }, void 0, { push: true }]])])) : _("", true)]), u.value ? (a(), l("div", ae, [e("div", le, t(s.$t("version")), 1), e("div", re, [e("div", ce, t(s.$t(`website_version.${n.value.version}`)), 1)])])) : _("", true), e("div", _e, [e("div", de, t(s.$t("agent")), 1), e("div", pe, [e("div", me, t(A(+p.value.agent_count || 0)), 1)])]), e("div", ue, [e("div", ve, t(s.$t("user_count")), 1), e("div", xe, [e("div", fe, t(A(+p.value.user_count || 0)), 1)])]), e("div", he, [e("div", ge, t(s.$t("create_time")), 1), e("div", be, [e("div", we, t((n.value.created_time || "").substr(0, 16)), 1)])]), u.value ? (a(), l("div", Ae, [e("div", ye, t(s.$t("service_expired_time")), 1), e("div", $e, [e("div", Ee, t((n.value.expired_time || "").substr(0, 16)), 1), i(L, { link: "", type: "primary", onClick: o[0] || (o[0] = ($) => m.value = true) }, { default: h(() => [E(t(s.$t("action_renew_v2")), 1)]), _: 1 })])])) : _("", true)]), o[2] || (o[2] = e("div", { class: "w-full h-[67px]" }, null, -1))]), e("div", ke, [e("div", Be, [e("div", De, [e("span", null, t(s.$t("configuration_completion")), 1), o[3] || (o[3] = e("span", null, "100%", -1))]), i(N, { percentage: 100, "show-text": false })]), e("img", { class: "w-[312px] h-[220px] mt-[74px]", src: s.$getRealPath({ url: "/images/intro.png" }), alt: "" }, null, 8, Se)])])), [[C, d.value]]), e("div", Fe, t(s.$t("copyright_desc", { year: c(B) })), 1), i(K, { visible: m.value, "onUpdate:visible": o[1] || (o[1] = ($) => m.value = $), title: s.$t("action_renew_v2") }, null, 8, ["visible", "title"])]);
  };
} });
export {
  Ze as default
};
