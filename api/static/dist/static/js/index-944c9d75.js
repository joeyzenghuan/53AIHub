import { _ as M } from "./index-62cbccec.js";
import { a as P, E as K, b as O, L as H, M as J, c as j, e as q, x as G, K as Q, I as W, J as X } from "./element-plus-c72880c6.js";
import { _ as Y } from "./index.vue_vue_type_script_setup_true_lang-9a63c23d.js";
import { _ as Z } from "./index-510919ce.js";
import { f as ee, K as te } from "./@element-plus-0cfad8bb.js";
import { b as ae, f as oe } from "./index-76ebd052.js";
import { I as ne, a as le, b as se, c as re } from "./user-50e3390c.js";
import { d as $, V as ie, e as E, i as D, D as C, o as v, c as T, a as l, M as a, K as o, H as ce, ac as ue, u as m, a2 as _, P as s, I as h, J as A, af as pe } from "./@vue-3b855f7b.js";
import { u as de } from "./vue-router-2f60a71a.js";
import "./dayjs-b67ba5b3.js";
import "./cssfilter-476ae7ee.js";
import "./lodash-es-fadd064a.js";
import "./@vueuse-7fa053fd.js";
import "./@popperjs-c45de710.js";
import "./async-validator-7f96df71.js";
import "./@ctrl-f8748455.js";
import "./normalize-wheel-es-ed76fb12.js";
import "./index.vue_vue_type_script_setup_true_lang-2b51690f.js";
import "./sortablejs-437f0071.js";
import "./debounce-f4e6390f.js";
import "./pinia-6f4b1ece.js";
import "./vue-demi-71ba0ef2.js";
import "./axios-8e4517c3.js";
import "./vue-i18n-b5fa020c.js";
import "./@intlify-bab9fd84.js";
const _e = { class: "max-h-ful flex flex-col bg-white py-6 px-8 box-border overflow-auto" }, me = { class: "flex items-center justify-between" }, fe = { class: "flex items-center gap-3" }, be = { class: "!border-none !outline-none h-9 flex-center px-5 gap-1.5 rounded-2xl bg-[#F6F7F8] text-xs text-[#1D1E1F] cursor-pointer" }, ge = { class: "flex-center gap-3" }, we = { class: "flex-1 overflow-y-auto bg-white rounded-lg mt-4" }, he = $({ __name: "account", setup(I) {
  const f = [-1, ne, le, se].map((e) => ({ value: e, label: re.get(e) || "internal_user.status.all" })), u = ae(), n = ie({ status: -1, keyword: "", page: 1, pageSize: 10 }), r = E(false), b = E([]), p = E(0), x = (e) => {
    n.status = e, i();
  }, i = () => {
    n.page = 1, d();
  }, d = async () => {
    r.value = true;
    let e = { status: n.status, keyword: n.keyword, offset: (n.page - 1) * n.pageSize, limit: n.pageSize };
    e.status < 0 && delete e.status;
    const { count: w = 0, users: y = [] } = await u.loadListData({ data: e }).finally(() => {
      r.value = false;
    });
    b.value = y.map((B) => B), p.value = +w || 0;
  }, g = ({ data: e = {} } = {}) => {
  }, k = async (e) => {
    await P.confirm(window.$t("module.operation_user_delete_confirm")), await u.delete({ data: { user_id: e.user_id } }), K.success(window.$t("action_delete_success")), d();
  }, z = (e) => {
    n.pageSize = e, i();
  }, N = (e) => {
    n.page = e, d();
  };
  return D(async () => {
    i();
  }), C(() => {
  }), (e, w) => {
    const y = O, B = Q, U = H, L = J, V = j, S = q, c = G, F = Z;
    return v(), T("div", _e, [l("div", me, [l("div", fe, [a(L, { placement: "bottom", onCommand: x }, { dropdown: o(() => [a(U, null, { default: o(() => [(v(true), T(ce, null, ue(m(f), (t) => (v(), A(B, { key: t.value, command: t.value }, { default: o(() => [_(s(e.$t(t.label)), 1)]), _: 2 }, 1032, ["command"]))), 128))]), _: 1 })]), default: o(() => {
      var _a;
      return [l("div", be, [_(s(e.$t(((_a = m(f).find((t) => t.value === n.status)) == null ? void 0 : _a.label) || "internal_user.status.all")) + " ", 1), a(y, { size: "14", color: "#9EA5B6" }, { default: o(() => [a(m(ee))]), _: 1 })])];
    }), _: 1 })]), l("div", ge, [a(V, { modelValue: n.keyword, "onUpdate:modelValue": w[0] || (w[0] = (t) => n.keyword = t), style: { width: "268px" }, size: "large", clearable: "", "suffix-icon": m(te), placeholder: e.$t("internal_user.account.search_placeholder"), onChange: i }, null, 8, ["modelValue", "suffix-icon", "placeholder"]), a(S, { class: "min-w-[100px]", type: "primary", size: "large", onClick: g }, { default: o(() => [_(s(e.$t("action_add")), 1)]), _: 1 })])]), l("div", we, [a(F, { data: b.value, total: p.value, style: { width: "100%" }, "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", loading: r.value, onPageCurrentChange: N, onPageSizeChange: z }, { default: o(() => [a(c, { label: e.$t("internal_user.account.name"), "min-width": "140", prop: "nickname", "show-overflow-tooltip": "" }, null, 8, ["label"]), a(c, { label: e.$t("internal_user.account.mobile"), "min-width": "140", prop: "mobile", "show-overflow-tooltip": "" }, { default: o(({ row: t }) => [l("span", { class: h({ "text-[#9B9B9B]": !t.mobile }) }, s(t.mobile || "--"), 3)]), _: 1 }, 8, ["label"]), a(c, { label: e.$t("internal_user.account.group"), "min-width": "140", prop: "group", "show-overflow-tooltip": "" }, { default: o(({ row: t }) => [l("span", { class: h({ "text-[#9B9B9B]": !t.group }) }, s(t.group || "--"), 3)]), _: 1 }, 8, ["label"]), a(c, { label: e.$t("internal_user.account.department"), "min-width": "140", prop: "department", "show-overflow-tooltip": "" }, { default: o(({ row: t }) => [l("span", { class: h({ "text-[#9B9B9B]": !t.department }) }, s(t.department || "--"), 3)]), _: 1 }, 8, ["label"]), a(c, { label: e.$t("internal_user.account.status"), "min-width": "140", prop: "status", "show-overflow-tooltip": "" }, { default: o(({ row: t }) => [l("span", { class: h({ "text-[#9B9B9B]": !t.status }) }, s(t.status || "--"), 3)]), _: 1 }, 8, ["label"]), a(c, { label: e.$t("operation"), width: "100", fixed: "right", align: "right" }, { default: o(({ row: t }) => [a(S, { class: "text-[#5A6D9E] !bg-transparent", type: "text", onClick: (R) => g({ data: t }) }, { default: o(() => [_(s(e.$t("action_edit")), 1)]), _: 2 }, 1032, ["onClick"]), a(S, { class: "text-[#5A6D9E] !bg-transparent", type: "text", onClick: (R) => k(t) }, { default: o(() => [_(s(e.$t("action_delete")), 1)]), _: 2 }, 1032, ["onClick"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data", "total", "loading"])])]);
  };
} }), Ee = $({ __name: "index", setup(I) {
  const f = de(), u = E("account");
  return D(async () => {
  }), C(() => {
  }), (n, r) => {
    const b = Y, p = W, x = pe("OrganizationView"), i = X, d = M;
    return v(), A(d, { class: "px-[60px] py-8" }, { default: o(() => [a(b, { title: n.$t(m(f).meta.title) }, null, 8, ["title"]), a(i, { class: "mt-2 flex-1 h-0", modelValue: u.value, "onUpdate:modelValue": r[0] || (r[0] = (g) => u.value = g) }, { default: o(() => [a(p, { label: n.$t("internal_user.account.title"), name: "account", lazy: "" }, { default: o(() => [a(he)]), _: 1 }, 8, ["label"]), a(p, { label: n.$t("internal_user.organization.title"), name: "organization", lazy: "" }, { default: o(() => [a(x)]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["modelValue"])]), _: 1 });
  };
} });
const je = oe(Ee, [["__scopeId", "data-v-f24bcf3d"]]);
export {
  je as default
};
