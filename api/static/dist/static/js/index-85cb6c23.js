import { _ as q } from "./index-918f1759.js";
import { _ as W } from "./index-2b83add0.js";
import { E as O, d as X, c as R, G as Z, Q as ee, f as te, e as G, g as oe, F as ae, a as le, x as ne, b as se, K as ie, L as re, M as de } from "./element-plus-c72880c6.js";
import { _ as ce } from "./index.vue_vue_type_script_setup_true_lang-9a63c23d.js";
import { K as pe } from "./@element-plus-0cfad8bb.js";
import { b as K, w as _e, _ as me, l as P, u as ue } from "./index-226b5715.js";
import { d as j, e as _, V as U, o as k, J as L, K as n, a as s, M as a, a2 as B, P as r, O as fe, u as D, c as H, ac as ge, H as J, G as C, i as he, D as ve, I as h } from "./@vue-3b855f7b.js";
import { _ as we } from "./image.vue_vue_type_style_index_0_lang-45adb6cd.js";
import { u as xe } from "./vue-router-2f60a71a.js";
import { g as be, b as $e } from "./group-c1a36044.js";
import "./index.vue_vue_type_script_setup_true_lang-2b51690f.js";
import "./sortablejs-437f0071.js";
import "./debounce-f4e6390f.js";
import "./dayjs-b67ba5b3.js";
import "./cssfilter-476ae7ee.js";
import "./lodash-es-fadd064a.js";
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
import "./vue-cropper-d3d11008.js";
const Ee = { class: "text-sm text-[#1D1E1F]" }, ye = { class: "text-[#9A9A9A]" }, Ve = { class: "text-sm text-[#1D1E1F] mt-6" }, ke = { class: "mb-4" }, Be = { class: "flex items-center gap-2 mt-5 text-sm text-[#1D1E1F]" }, De = { class: "flex-none w-[88px]" }, Ce = { class: "text-[#9A9A9A]" }, Ae = { class: "flex items-center gap-2 mt-5 text-sm text-[#1D1E1F]" }, Ne = { class: "flex-none w-[88px]" }, Fe = { class: "text-[#9A9A9A]" };
const Se = { class: "py-4 flex items-center justify-center" }, Ie = j({ __name: "user-add-dialog", emits: ["success"], setup(Q, { expose: A, emit: N }) {
  const v = N, w = K(), u = _(), m = _(false), f = _(false), t = U({ avatar: "", nickname: "", password: "", group_id: 0, expired_time: "" }), d = _({}), x = _([]), b = _(false), F = ({ data: e = {}, subscription_options: o = [] } = {}) => {
    t.avatar = e.avatar || "", t.nickname = e.nickname || "", t.password = e.password || "", t.group_id = e.group_id || (o[0] || {}).value || 0, t.expired_time = e.expired_time || "", f.value = !!e.user_id, d.value = e, x.value = o, o.find((c) => c.value === t.group_id) || (t.group_id = ""), m.value = true;
  }, g = () => {
    m.value = false, $();
  }, $ = () => {
    t.avatar = "", t.nickname = "", t.password = "";
  }, S = async () => {
    await u.value.validate() && (b.value = true, await w.save({ data: { user_id: d.value.user_id, avatar: t.avatar, nickname: t.nickname, password: t.password, group_id: t.group_id, expired_time: t.expired_time && _e(t.expired_time) || 0 } }).finally(() => {
      b.value = false;
    }), v("success"), O.success(window.$t("action_save_success")), g());
  };
  return A({ open: F, close: g, reset: $ }), (e, o) => {
    const c = X, I = R, z = ae, T = Z, Y = ee, E = me, y = te, p = G, M = oe;
    return k(), L(M, { modelValue: m.value, "onUpdate:modelValue": o[6] || (o[6] = (i) => m.value = i), title: e.$t(f.value ? "action_edit" : "action_add"), "close-on-click-modal": false, width: "600px", "destroy-on-close": "", "append-to-body": "", onClose: g }, { footer: n(() => [s("div", Se, [a(p, { class: "w-[96px] h-[36px]", type: "primary", loading: b.value, onClick: S }, { default: n(() => [B(r(e.$t("action_save")), 1)]), _: 1 }, 8, ["loading"]), a(p, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: fe(g, ["stop"]) }, { default: n(() => [B(r(e.$t("action_cancel")), 1)]), _: 1 })])]), default: n(() => [a(y, { ref_key: "form_ref", ref: u, model: t, "label-position": "top" }, { default: n(() => [s("h1", Ee, r(e.$t("user_info")), 1), a(c, { class: "mt-5", prop: "avatar" }, { label: n(() => [s("span", ye, r(e.$t("avatar")), 1)]), default: n(() => [a(we, { modelValue: t.avatar, "onUpdate:modelValue": o[0] || (o[0] = (i) => t.avatar = i) }, null, 8, ["modelValue"])]), _: 1 }), a(c, { label: e.$t("user"), prop: "nickname", rules: D(P)({ message: "form_upload_placeholder" }) }, { default: n(() => [a(I, { modelValue: t.nickname, "onUpdate:modelValue": o[1] || (o[1] = (i) => t.nickname = i), size: "large", maxlength: "20", "show-word-limit": "", placeholder: e.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), a(c, { label: e.$t("login_password"), prop: "password", rules: t.password.length ? [...D(P)({ message: "login.password_placeholder", validator: ["password"] }), { min: 8, max: 20, message: e.$t("login.password_length"), trigger: "blur" }] : [] }, { default: n(() => [a(I, { modelValue: t.password, "onUpdate:modelValue": o[2] || (o[2] = (i) => t.password = i), size: "large", placeholder: e.$t("empty_to_not_change"), clearable: "", onBlur: o[3] || (o[3] = (i) => u.value.validateField("password")) }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), a(c, { label: e.$t("subscription"), prop: "group_id", rules: [{ validator: (i, l, V) => {
      if (!l)
        return V(new Error(e.$t("form_select_placeholder")));
      V();
    }, trigger: "blur" }] }, { default: n(() => [a(T, { modelValue: t.group_id, "onUpdate:modelValue": o[4] || (o[4] = (i) => t.group_id = i), size: "large", placeholder: e.$t("form_input_placeholder") }, { default: n(() => [(k(true), H(J, null, ge(x.value, (i) => (k(), L(z, { key: i.value, label: i.label, value: i.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), a(c, { label: e.$t("subscription_end_at"), prop: "expired_time", rules: [] }, { default: n(() => [a(Y, { modelValue: t.expired_time, "onUpdate:modelValue": o[5] || (o[5] = (i) => t.expired_time = i), format: "YYYY-MM-DD", "value-format": "YYYY-MM-DD", size: "large", placeholder: e.$t("permanent_effect") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), s("h1", Ve, r(e.$t("bind_account")), 1), s("ul", ke, [s("li", Be, [a(E, { class: "flex-none", name: "mobile-circle" }), s("div", De, r(e.$t("mobile_v2")), 1), s("div", Ce, r(d.value.mobile || e.$t("not_bound")), 1)]), s("li", Ae, [a(E, { class: "flex-none", name: "email-circle" }), s("div", Ne, r(e.$t("email")), 1), s("div", Fe, r(d.value.email || e.$t("not_bound")), 1)]), C("", true), C("", true)])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue", "title"]);
  };
} }), Me = { class: "flex-1 flex flex-col bg-white p-6 mt-3 box-border max-h-[calc(100vh-100px)] overflow-auto" }, Ue = { class: "flex items-center justify-between" }, ze = { class: "flex items-center gap-3" };
const Te = { class: "flex-center gap-3" }, Ye = { class: "flex-1 overflow-y-auto bg-white rounded-lg mt-4" }, mt = j({ __name: "index", setup(Q) {
  const { isOpLocalEnv: A } = ue(), N = xe(), v = K(), w = _(), u = U({ group_id: 0, keyword: "" }), m = _([]), f = _(false), t = U({ keyword: "", page: 1, limit: 10, count: 0, list: [] }), d = () => {
    f.value = true, v.loadListData({ data: { role: A.value ? "1,10" : "", keyword: t.keyword, group_id: u.group_id, offset: (t.page - 1) * t.limit, limit: t.limit } }).then((e) => {
      t.count = e.count, t.list = [...e.users].map((o) => (o.subscription_name = (m.value.find((c) => c.group_id === o.group_id) || {}).group_name || "", o));
    }).finally(() => {
      f.value = false;
    });
  }, x = () => {
    t.page = 1, d();
  }, b = (e) => {
    u.group_id = e;
  }, F = ({ data: e = {} } = {}) => {
    w.value.open({ data: e, subscription_options: m.value });
  }, g = async (e) => {
    await le.confirm(window.$t("module.operation_user_delete_confirm")), await v.delete({ data: { user_id: e.user_id } }), O.success(window.$t("action_delete_success")), d();
  }, $ = (e) => {
    t.limit = e, t.page = 1, d();
  }, S = (e) => {
    t.page = e, d();
  };
  return he(async () => {
    const e = await be.list({ params: { group_type: $e } });
    m.value = e.map((o = {}) => (o.value = +o.group_id || 0, o.label = o.group_name || "", o)), d();
  }), ve(() => {
  }), (e, o) => {
    const c = ce, I = se, z = ie, T = re, Y = de, E = R, y = G, p = ne, M = W, i = q;
    return k(), H(J, null, [a(i, { class: "px-[60px] py-8" }, { default: n(() => [a(c, { title: e.$t(D(N).meta.title) }, null, 8, ["title"]), s("div", Me, [s("div", Ue, [s("div", ze, [C("", true)]), s("div", Te, [a(E, { modelValue: t.keyword, "onUpdate:modelValue": o[0] || (o[0] = (l) => t.keyword = l), style: { width: "268px" }, size: "large", clearable: "", "suffix-icon": D(pe), placeholder: e.$t("module.operation_user_search_placeholder"), onChange: x }, null, 8, ["modelValue", "suffix-icon", "placeholder"]), C("", true)])]), s("div", Ye, [a(M, { data: t.list, total: t.count, style: { width: "100%" }, "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", loading: f.value, onPageSizeChange: $, onPageCurrentChange: S }, { default: n(() => [a(p, { label: e.$t("user"), "min-width": "140", prop: "nickname", "show-overflow-tooltip": "" }, null, 8, ["label"]), a(p, { label: e.$t("mobile"), "min-width": "140", prop: "mobile", "show-overflow-tooltip": "" }, { default: n(({ row: l }) => [s("span", { class: h({ "text-[#9B9B9B]": !l.mobile }) }, r(l.mobile || "--"), 3)]), _: 1 }, 8, ["label"]), a(p, { label: e.$t("email"), "min-width": "140", prop: "email", "show-overflow-tooltip": "" }, { default: n(({ row: l }) => [s("span", { class: h({ "text-[#9B9B9B]": !l.email }) }, r(l.email || "--"), 3)]), _: 1 }, 8, ["label"]), a(p, { label: e.$t("subscription"), "min-width": "100", "show-overflow-tooltip": "" }, { default: n(({ row: l }) => [s("span", { class: h({ "text-[#9B9B9B]": !l.subscription_name }) }, r(l.subscription_name || "--"), 3)]), _: 1 }, 8, ["label"]), a(p, { label: e.$t("subscription_end_at"), width: "120", prop: "expired_time", "show-overflow-tooltip": "" }, { default: n(({ row: l }) => [s("span", { class: h({ "text-[#9B9B9B]": !l.expired_time }) }, r((l.expired_time || "").slice(0, 10) || +l.group_id && e.$t("permanent_effect") || "--"), 3)]), _: 1 }, 8, ["label"]), a(p, { label: e.$t("register_time"), width: "160", prop: "register_time" }, { default: n(({ row: l }) => [s("span", { class: h({ "text-[#9B9B9B]": !l.register_time }) }, r((l.register_time || "").slice(0, 16) || "--"), 3)]), _: 1 }, 8, ["label"]), a(p, { label: e.$t("operation"), width: "100", fixed: "right", align: "right" }, { default: n(({ row: l }) => [a(y, { class: "text-[#5A6D9E] !bg-transparent", type: "text", onClick: (V) => F({ data: l }) }, { default: n(() => [B(r(e.$t("action_edit")), 1)]), _: 2 }, 1032, ["onClick"]), a(y, { class: "text-[#5A6D9E] !bg-transparent", type: "text", onClick: (V) => g(l) }, { default: n(() => [B(r(e.$t("action_delete")), 1)]), _: 2 }, 1032, ["onClick"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data", "total", "loading"])])])]), _: 1 }), a(Ie, { ref_key: "add_ref", ref: w, onSuccess: d }, null, 512)], 64);
  };
} });
export {
  mt as default
};
