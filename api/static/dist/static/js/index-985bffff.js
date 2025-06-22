import { _ as N } from "./index-ad57f5b2.js";
import { y as z, aq as V, r as f, b as r, j as p, w as d, d as t, u as w, f as m, a2 as R, t as a, L as _, aG as M, G as T, a4 as D, a6 as j, aa as G, o as U, N as C, a as A, c as y, K as I, e as E, F as O, ab as F } from "./index-8579fe4a.js";
import { E as P } from "./el-switch-1a77f9ca.js";
import { E as H } from "./el-tag-0b6baecb.js";
import { _ as K } from "./index.vue_vue_type_script_setup_true_lang-e4a54f30.js";
const J = "/console/images/sso/switch.png", Q = { class: "h-[116px] bg-[#F1F4FD] flex items-center justify-center gap-5 -mx-7 -mt-4 rounded-t-lg" }, W = ["src"], X = ["src"], Y = { class: "text-[#182B50] text-[28px] font-semibold text-center py-10" }, Z = { class: "text-[#182B50] text-center text-lg font-semibold" }, ee = { class: "text-[#182B50] text-center text-opacity-80 text-sm mt-3" }, se = { class: "py-6 flex flex-col items-center gap-5 mt-20" }, te = z({ __name: "access-dialog", setup(S, { expose: $ }) {
  const v = { wecom: "/images/sso/wecom_v2.png", dingtalk: "/images/sso/dingtalk.png" }, u = V(), i = f(false), n = f("wecom"), g = () => {
    let e = "";
    switch (n.value) {
      case "wecom":
        e = `${M}/api/saas/wecom/callback/start-install/wwdce32ea39893200f?eid=${u.info.eid}`;
        break;
      case "dingtalk":
        e = `${location.origin}${location.pathname}#/dingtalk-bind`;
        break;
    }
    window.open(e, "_blank");
  }, b = () => {
    let e = "";
    switch (n.value) {
      case "wecom":
        e = "https://work.weixin.qq.com/wework_admin/register_wx?from=loginpage";
        break;
      case "dingtalk":
        e = "https://open-dev.dingtalk.com/?spm=dd_developers.header.unLogin.openDevBtn";
        break;
    }
    window.open(e, "_blank");
  };
  return $({ open({ type: e } = {}) {
    e && (n.value = e), i.value = true;
  } }), (e, c) => {
    const s = T, l = D, k = j;
    return r(), p(k, { modelValue: i.value, "onUpdate:modelValue": c[1] || (c[1] = (h) => i.value = h), class: "el-dialog--noheader", width: "650px", "close-on-click-modal": false }, { default: d(() => [t("div", Q, [t("img", { class: "w-12 h-10", alt: "", src: v[n.value] }, null, 8, W), c[2] || (c[2] = t("img", { class: "w-[46px] h-[21px]", src: J, alt: "" }, null, -1)), t("img", { class: "w-12 h-12", src: w(u).info.logo, alt: "" }, null, 8, X)]), t("span", { class: "absolute right-4 top-4 cursor-pointer p-2", onClick: c[0] || (c[0] = (h) => i.value = false) }, [m(s, { color: "#909399", size: "20" }, { default: d(() => [m(w(R))]), _: 1 })]), t("div", Y, a(e.$t("sso.access_title", { title: e.$t(`sso.${n.value}.abbr_title`) })), 1), t("div", Z, a(e.$t("sso.access_desc", { title: e.$t(`sso.${n.value}.abbr_title`) })), 1), t("div", ee, a(e.$t("sso.access_desc_v2", { title: e.$t(`sso.${n.value}.abbr_title`) })), 1), t("div", se, [m(l, { type: "primary", size: "large", onClick: g }, { default: d(() => [_(a(e.$t("sso.goto_access", { title: e.$t(`sso.${n.value}.abbr_title`) })), 1)]), _: 1 }), m(l, { style: { "margin-left": "0" }, type: "primary", link: "", onClick: b }, { default: d(() => [_(a(e.$t("sso.goto_register", { title: e.$t(`sso.${n.value}.abbr_title`) })), 1)]), _: 1 })])]), _: 1 }, 8, ["modelValue"]);
  };
} }), oe = { class: "bg-white rounded-md overflow-hidden py-8 px-10 mt-5 box-border space-y-10 flex-1 overflow-y-auto" }, ae = { class: "text-lg text-[#1D1E1F] flex items-center gap-2" }, ne = ["src"], le = { class: "mt-4 flex flex-wrap items-center gap-4" }, ie = { class: "flex-none w-[300px] min-h-[176px] rounded overflow-hidden border p-5 box-border" }, ce = { class: "font-semibold text-[#1D1E1F] h-[26px]" }, re = { class: "text-xs text-[#939499] mt-3" }, de = { key: 0, class: "relative flex-none w-[300px] min-h-[176px] rounded overflow-hidden border p-5 box-border" }, ue = { class: "font-semibold text-[#1D1E1F]" }, _e = { class: "text-xs text-[#939499] mt-3" }, me = { key: 0, class: "absolute right-5 top-4" }, $e = z({ __name: "index", setup(S) {
  const $ = G(), v = V(), u = f({ wecom: false }), i = f({ wecom: false });
  U(() => {
    C.on("user-login-success", n);
  }), A(() => {
    C.off("user-login-success", n);
  });
  const n = async () => {
  }, g = f(), b = ({ type: s }) => {
    g.value.open({ type: s });
  }, e = ({ type: s }) => {
    let l = "";
    switch (s) {
      case "wecom":
        l = "https://work.weixin.qq.com/login";
        break;
      case "dingtalk":
        l = "https://open-dev.dingtalk.com/fe/app?hash=%23%2Fisv%2Fapp#/isv/app";
        break;
    }
    window.open(l, "_blank");
  }, c = async (s, l = "wecom") => {
    s ? await F.confirm(window.$t("sso.sync_confirm", { title: window.$t(`sso.${l}.abbr_title`) }), window.$t("sso.organization_sync")) : await F.confirm(window.$t("sso.sync_cancel"), window.$t("sso.sync_cancel_tip")), i.value[l] = !i.value[l];
  };
  return (s, l) => {
    const k = K, h = H, B = D, q = P, L = N;
    return r(), p(L, { class: "px-[60px] py-8" }, { default: d(() => [m(k, { title: s.$t(w($).meta.title) }, null, 8, ["title"]), t("div", oe, [(r(), y(O, null, I(["wecom", "dingtalk", "ad_ldap", "feishu"], (o) => t("div", { key: o }, [t("h1", ae, [t("img", { src: s.$getRealPath({ url: `/images/sso/${o}.png` }), class: "size-6 object-cover" }, null, 8, ne), _(" " + a(s.$t(`sso.${o}.title`)), 1)]), t("div", le, [t("div", ie, [t("h2", ce, [_(a(s.$t(`sso.${o}.access_title`)) + " ", 1), u.value[o] ? (r(), p(h, { key: 0, class: "ml-2 -mt-1", type: "success" }, { default: d(() => [_(a(s.$t("connected")), 1)]), _: 1 })) : E("", true)]), t("p", re, a(u.value[o] ? `${s.$t("sso.authorized_enterprise")}\uFF1A ${w(v).info.name}` : s.$t(`sso.${o}.access_desc`)), 1), u.value[o] ? (r(), p(B, { key: 0, class: "mt-12", onClick: (x) => e({ type: o }) }, { default: d(() => [_(a(s.$t("sso.unauthorized")), 1)]), _: 2 }, 1032, ["onClick"])) : (r(), p(B, { key: 1, class: "mt-12", type: "primary", disabled: ["dingtalk", "ad_ldap", "feishu"].includes(o), onClick: (x) => b({ type: o }) }, { default: d(() => [_(a(s.$t("sso.auth_access")), 1)]), _: 2 }, 1032, ["disabled", "onClick"]))]), o !== "ad_ldap" ? (r(), y("div", de, [t("h2", ue, a(s.$t("sso.organization_sync")), 1), t("p", _e, a(s.$t(`sso.${o}.sync_desc`)), 1), ["wecom"].includes(o) && u.value[o] ? (r(), y("div", me, [m(q, { "model-value": i.value[o], onChange: (x) => c(x, o) }, null, 8, ["model-value", "onChange"])])) : E("", true)])) : E("", true)])])), 64))]), m(te, { ref_key: "accessRef", ref: g }, null, 512)]), _: 1 });
  };
} });
export {
  $e as default
};
