import { _ as te } from "./index-ad57f5b2.js";
import { E as ae, _ as le } from "./el-table-column-376475e4.js";
import { y as q, ak as H, r as p, Z as P, b, j as F, w as l, d as i, f as t, L as v, t as d, x as ne, u, al as j, c as K, K as se, F as W, e as S, am as ie, a9 as Z, ag as re, a5 as J, R as de, ah as ce, a4 as Q, a6 as _e, an as pe, aa as ue, E as me, o as fe, a as ge, a0 as he, q as E, M as ve, ab as we, G as xe } from "./index-8579fe4a.js";
import { b as be, E as G, a as O } from "./el-dropdown-menu-ce96a192.js";
import "./el-dropdown-item-4ed993c7.js";
import "./el-checkbox-a21716fc.js";
import "./el-tag-0b6baecb.js";
import "./el-scrollbar-4065fe54.js";
import { _ as $e } from "./index.vue_vue_type_script_setup_true_lang-e4a54f30.js";
import { E as Ee } from "./index.vue_vue_type_script_setup_true_lang-5c7d7988.js";
import { E as ke, a as ye } from "./el-select-8a770a23.js";
import { _ as Ve } from "./image.vue_vue_type_style_index_0_lang-1ce00652.js";
import { _ as Be } from "./drawer.vue_vue_type_script_setup_true_lang-2dd065b8.js";
import { g as De, G as Ce } from "./group-39bff2fe.js";
import "./el-loading-8747b309.js";
import "./sortable.esm-7ba019b6.js";
import "./isEqual-8c73ec38.js";
import "./debounce-484109dd.js";
import "./dropdown-85221e0a.js";
import "./el-drawer-393896dd.js";
import "./_commonjsHelpers-725317a4.js";
import "./index-ede470e7.js";
const Ae = { class: "text-sm text-[#1D1E1F]" }, Ne = { class: "text-[#9A9A9A]" }, Fe = { class: "text-sm text-[#1D1E1F] mt-6" }, Se = { class: "mb-4" }, Ie = { class: "flex items-center gap-2 mt-5 text-sm text-[#1D1E1F]" }, Me = { class: "flex-none w-[88px]" }, ze = { class: "text-[#9A9A9A]" }, Ue = { class: "flex items-center gap-2 mt-5 text-sm text-[#1D1E1F]" }, Re = { class: "flex-none w-[88px]" }, Te = { class: "text-[#9A9A9A]" };
const Ye = { class: "py-4 flex items-center justify-center" }, Pe = q({ __name: "user-add-dialog", emits: ["success"], setup(X, { expose: I, emit: M }) {
  const f = M, k = H(), w = p(), m = p(false), x = p(false), e = P({ avatar: "", nickname: "", password: "", group_id: 0, expired_time: "" }), _ = p({}), y = p([]), V = p(false), z = ({ data: a = {}, subscription_options: r = [] } = {}) => {
    e.avatar = a.avatar || "", e.nickname = a.nickname || "", e.password = a.password || "", e.group_id = a.group_id || (r[0] || {}).value || 0, e.expired_time = a.expired_time || "", x.value = !!a.user_id, _.value = a, y.value = r, r.find((o) => o.value === e.group_id) || (e.group_id = ""), m.value = true;
  }, g = () => {
    m.value = false, B();
  }, B = () => {
    e.avatar = "", e.nickname = "", e.password = "";
  }, U = async () => {
    await w.value.validate() && (V.value = true, await k.save({ data: { user_id: _.value.user_id, avatar: e.avatar, nickname: e.nickname, password: e.password, group_id: e.group_id, expired_time: e.expired_time && ie(e.expired_time) || 0 } }).finally(() => {
      V.value = false;
    }), f("success"), Z.success(window.$t("action_save_success")), g());
  };
  return I({ open: z, close: g, reset: B }), (a, r) => {
    const o = re, c = J, h = ke, $ = ye, L = Ee, R = de, T = ce, D = Q, C = _e;
    return b(), F(C, { modelValue: m.value, "onUpdate:modelValue": r[6] || (r[6] = (n) => m.value = n), title: a.$t(x.value ? "action_edit" : "action_add"), "close-on-click-modal": false, width: "600px", "destroy-on-close": "", "append-to-body": "", onClose: g }, { footer: l(() => [i("div", Ye, [t(D, { class: "w-[96px] h-[36px]", type: "primary", loading: V.value, onClick: U }, { default: l(() => [v(d(a.$t("action_save")), 1)]), _: 1 }, 8, ["loading"]), t(D, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: ne(g, ["stop"]) }, { default: l(() => [v(d(a.$t("action_cancel")), 1)]), _: 1 })])]), default: l(() => [t(T, { ref_key: "form_ref", ref: w, model: e, "label-position": "top" }, { default: l(() => [i("h1", Ae, d(a.$t("user_info")), 1), t(o, { class: "mt-5", prop: "avatar" }, { label: l(() => [i("span", Ne, d(a.$t("avatar")), 1)]), default: l(() => [t(Ve, { modelValue: e.avatar, "onUpdate:modelValue": r[0] || (r[0] = (n) => e.avatar = n) }, null, 8, ["modelValue"])]), _: 1 }), t(o, { label: a.$t("user"), prop: "nickname", rules: u(j)({ message: "form_upload_placeholder" }) }, { default: l(() => [t(c, { modelValue: e.nickname, "onUpdate:modelValue": r[1] || (r[1] = (n) => e.nickname = n), size: "large", maxlength: "20", "show-word-limit": "", placeholder: a.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), t(o, { label: a.$t("login_password"), prop: "password", rules: e.password.length ? [...u(j)({ message: "login.password_placeholder", validator: ["password"] }), { min: 8, max: 20, message: a.$t("login.password_length"), trigger: "blur" }] : [] }, { default: l(() => [t(c, { modelValue: e.password, "onUpdate:modelValue": r[2] || (r[2] = (n) => e.password = n), size: "large", placeholder: a.$t("empty_to_not_change"), clearable: "", onBlur: r[3] || (r[3] = (n) => w.value.validateField("password")) }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), t(o, { label: a.$t("subscription"), prop: "group_id", rules: [{ validator: (n, A, N) => {
      if (!A)
        return N(new Error(a.$t("form_select_placeholder")));
      N();
    }, trigger: "blur" }] }, { default: l(() => [t($, { modelValue: e.group_id, "onUpdate:modelValue": r[4] || (r[4] = (n) => e.group_id = n), size: "large", placeholder: a.$t("form_input_placeholder") }, { default: l(() => [(b(true), K(W, null, se(y.value, (n) => (b(), F(h, { key: n.value, label: n.label, value: n.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label", "rules"]), t(o, { label: a.$t("subscription_end_at"), prop: "expired_time", rules: [] }, { default: l(() => [t(L, { modelValue: e.expired_time, "onUpdate:modelValue": r[5] || (r[5] = (n) => e.expired_time = n), format: "YYYY-MM-DD", "value-format": "YYYY-MM-DD", size: "large", placeholder: a.$t("permanent_effect") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), i("h1", Fe, d(a.$t("bind_account")), 1), i("ul", Se, [i("li", Ie, [t(R, { class: "flex-none", name: "mobile-circle" }), i("div", Me, d(a.$t("mobile_v2")), 1), i("div", ze, d(_.value.mobile || a.$t("not_bound")), 1)]), i("li", Ue, [t(R, { class: "flex-none", name: "email-circle" }), i("div", Re, d(a.$t("email")), 1), i("div", Te, d(_.value.email || a.$t("not_bound")), 1)]), S("", true), S("", true)])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue", "title"]);
  };
} }), Le = { class: "flex-1 flex flex-col bg-white p-6 mt-3 box-border max-h-[calc(100vh-100px)] overflow-auto" }, je = { class: "flex items-center justify-between" }, Ge = { class: "flex items-center gap-3" };
const Oe = { class: "flex-center gap-3" }, qe = { class: "flex-1 overflow-y-auto bg-white rounded-lg mt-4" }, He = { class: "text-[#5A6D9E] h-8 flex-center ml-2 !outline-none !border-none" }, ho = q({ __name: "index", setup(X) {
  const { isWorkEnv: I } = pe(), M = ue();
  me();
  const f = H(), k = p(), w = P({ group_id: 0, keyword: "" }), m = p([]), x = p(false), e = P({ keyword: "", page: 1, limit: 10, count: 0, list: [] }), _ = () => {
    x.value = true, f.loadListData({ data: { keyword: e.keyword, group_id: w.group_id, offset: (e.page - 1) * e.limit, limit: e.limit } }).then(({ total: o = 0, list: c = [] } = {}) => {
      e.count = +o || 0, e.list = [...c].map((h) => (h.subscription_name = (m.value.find(($) => $.group_id === h.group_id) || {}).group_name || "", h));
    }).finally(() => {
      x.value = false;
    });
  }, y = () => {
    e.page = 1, _();
  }, V = (o) => {
    w.group_id = o;
  }, z = ({ data: o = {} } = {}) => {
    k.value.open({ data: o, subscription_options: m.value });
  }, g = async (o) => {
    await we.confirm(window.$t("module.operation_user_delete_confirm")), await f.delete({ data: { user_id: o.user_id } }), Z.success(window.$t("action_delete_success")), _();
  }, B = (o) => {
    e.limit = o, e.page = 1, _();
  }, U = (o) => {
    e.page = o, _();
  }, a = p(), r = (o, c = {}) => {
    switch (o) {
      case "dialogue_record":
        a.value.open({ type: "user", relatedId: c.user_id });
        break;
      case "delete":
        g(c);
        break;
    }
  };
  return fe(async () => {
    const o = await De.list({ params: { group_type: Ce } });
    m.value = o.map((c = {}) => (c.value = +c.group_id || 0, c.label = c.group_name || "", c)), _();
  }), ge(() => {
  }), (o, c) => {
    const h = $e, $ = xe, L = G, R = O, T = be, D = J, C = Q, n = ae, A = G, N = O, ee = le, oe = te;
    return b(), K(W, null, [t(oe, { class: "px-[60px] py-8" }, { default: l(() => [t(h, { title: o.$t(u(M).meta.title) }, null, 8, ["title"]), i("div", Le, [i("div", je, [i("div", Ge, [S("", true)]), i("div", Oe, [t(D, { modelValue: e.keyword, "onUpdate:modelValue": c[0] || (c[0] = (s) => e.keyword = s), style: { width: "268px" }, size: "large", clearable: "", "suffix-icon": u(he), placeholder: o.$t("module.operation_user_search_placeholder"), onChange: y }, null, 8, ["modelValue", "suffix-icon", "placeholder"]), S("", true)])]), i("div", qe, [t(ee, { data: e.list, total: e.count, style: { width: "100%" }, "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", loading: x.value, onPageSizeChange: B, onPageCurrentChange: U }, { default: l(() => [t(n, { label: o.$t("user"), "min-width": "140", prop: "nickname", "show-overflow-tooltip": "" }, null, 8, ["label"]), t(n, { label: o.$t("mobile"), "min-width": "140", prop: "mobile", "show-overflow-tooltip": "" }, { default: l(({ row: s }) => [i("span", { class: E({ "text-[#9B9B9B]": !s.mobile }) }, d(s.mobile || "--"), 3)]), _: 1 }, 8, ["label"]), t(n, { label: o.$t("email"), "min-width": "140", prop: "email", "show-overflow-tooltip": "" }, { default: l(({ row: s }) => [i("span", { class: E({ "text-[#9B9B9B]": !s.email }) }, d(s.email || "--"), 3)]), _: 1 }, 8, ["label"]), t(n, { label: o.$t("subscription"), "min-width": "100", "show-overflow-tooltip": "" }, { default: l(({ row: s }) => [i("span", { class: E({ "text-[#9B9B9B]": !s.subscription_name }) }, d(s.subscription_name || "--"), 3)]), _: 1 }, 8, ["label"]), t(n, { label: o.$t("subscription_end_at"), width: "120", prop: "expired_time", "show-overflow-tooltip": "" }, { default: l(({ row: s }) => [i("span", { class: E({ "text-[#9B9B9B]": !s.expired_time }) }, d((s.expired_time || "").slice(0, 10) || +s.group_id && o.$t("permanent_effect") || "--"), 3)]), _: 1 }, 8, ["label"]), t(n, { label: o.$t("register_time"), width: "160", prop: "register_time" }, { default: l(({ row: s }) => [i("span", { class: E({ "text-[#9B9B9B]": !s.register_time }) }, d((s.register_time || "").slice(0, 16) || "--"), 3)]), _: 1 }, 8, ["label"]), t(n, { label: o.$t("operation"), width: "120", fixed: "right", align: "right" }, { default: l(({ row: s }) => [t(C, { class: "text-[#5A6D9E] !bg-transparent", type: "text", onClick: (Y) => z({ data: s }) }, { default: l(() => [v(d(o.$t("action_edit")), 1)]), _: 2 }, 1032, ["onClick"]), u(I) ? (b(), F(C, { key: 1, disabled: u(f).info.user_id == s.user_id, class: "text-[#5A6D9E] !bg-transparent !w-[30px] text-left", type: "text", onClick: (Y) => g(s) }, { default: l(() => [v(d(u(f).info.user_id == s.user_id ? "--" : o.$t("action_delete")), 1)]), _: 2 }, 1032, ["disabled", "onClick"])) : (b(), F(T, { key: 0, placement: "bottom", onCommand: (Y) => r(Y, s) }, { dropdown: l(() => [t(N, null, { default: l(() => [t(A, { command: "dialogue_record" }, { default: l(() => [v(d(o.$t("dialogue_record")), 1)]), _: 1 }), t(A, { disabled: u(f).info.user_id == s.user_id, command: "delete" }, { default: l(() => [v(d(o.$t("action_delete")), 1)]), _: 2 }, 1032, ["disabled"])]), _: 2 }, 1024)]), default: l(() => [i("div", He, [v(d(o.$t("more")) + " ", 1), t($, { size: "14", class: "ml-1" }, { default: l(() => [t(u(ve))]), _: 1 })])]), _: 2 }, 1032, ["onCommand"]))]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data", "total", "loading"])])])]), _: 1 }), t(Pe, { ref_key: "add_ref", ref: k, onSuccess: _ }, null, 512), t(Be, { ref_key: "dialogueRecordRef", ref: a }, null, 512)], 64);
  };
} });
export {
  ho as default
};
