import { y as Q, r as p, Z as ee, b as u, j as h, w as t, d as _, f as o, L as f, t as r, x as le, c as E, K as A, F as y, a9 as ae, a5 as oe, ag as ne, ah as se, a4 as re, a6 as ie, I as ue, z as de, A as _e, B as pe, Y as W, o as me, N as X, a as ce, u as c, M as Z, a0 as fe, m as be, q as I, G as ve } from "./index-8579fe4a.js";
import { v as Ee } from "./el-loading-8747b309.js";
import { _ as ge } from "./index-ad57f5b2.js";
import { E as he, _ as ye } from "./el-table-column-376475e4.js";
import { E as we } from "./el-tag-0b6baecb.js";
import "./el-checkbox-a21716fc.js";
import { E as $e, a as Ve, b as Ae } from "./el-dropdown-menu-ce96a192.js";
import "./el-scrollbar-4065fe54.js";
import "./el-dropdown-item-4ed993c7.js";
import { _ as De } from "./index.vue_vue_type_script_setup_true_lang-e4a54f30.js";
import { E as Te } from "./el-input-number-310bd679.js";
import { E as xe, a as Be } from "./el-radio-2c60a23c.js";
import { E as Ce, a as Se } from "./el-select-8a770a23.js";
import { P as G, a as ke, b as j } from "./setting-b38aa7f1.js";
import "./sortable.esm-7ba019b6.js";
import "./isEqual-8c73ec38.js";
import "./debounce-484109dd.js";
import "./dropdown-85221e0a.js";
import "./index-ede470e7.js";
const Fe = { class: "text-[#9A9A9A] text-sm mt-2" }, Re = { class: "py-4 flex items-center justify-center" }, Ne = Q({ __name: "order-add-dialog", setup(m, { expose: w }) {
  const i = p(), d = p(false), D = p(false), n = ee({ order_id: "", user_list: [], subscription_version: "1", subscription_duration: "1", subscription_unit: "1", amount: "0.00", amount_unit: "1" }), k = p({}), T = p([{ value: "1", label: "\u5F20\u4E09" }, { value: "2", label: "\u674E\u56DB" }, { value: "3", label: "\u738B\u4E94" }, { value: "4", label: "\u8D75\u516D" }, { value: "5", label: "\u5B59\u4E03" }]), z = p([{ value: "1", label: "\u4E13\u4E1A\u7248" }, { value: "2", label: "\u65D7\u8230\u7248" }]), L = p([{ value: "1", label: "\u6708" }, { value: "2", label: "\u5E74" }]), b = p([{ value: "1", label: "CNY" }, { value: "2", label: "USD" }]), F = ({ data: s = {} } = {}) => {
    n.order_id = s.order_id || "AH2015032000200", n.user_list = s.user_list || [], n.subscription_version = s.subscription_version || "1", n.subscription_duration = s.subscription_duration || "1", n.subscription_unit = s.subscription_unit || "1", n.amount = +s.amount || "0.00", n.amount_unit = s.amount_unit || "1", D.value = !!s.order_id, k.value = s, d.value = true;
  }, $ = () => {
    d.value = false, R();
  }, R = () => {
    n.order_id = "", n.user_list = [], n.subscription_version = "", n.subscription_duration = "", n.subscription_unit = "", n.amount = "", n.amount_unit = "";
  }, M = () => {
    i.value.validate((s) => {
      s && (ae.success(window.$t("action_save_success")), $());
    });
  };
  return w({ open: F, close: $, reset: R }), (s, e) => {
    const V = oe, g = ne, x = Ce, B = Se, C = xe, S = Be, N = Te, v = se, U = re, O = ie;
    return u(), h(O, { title: s.$t(D.value ? "action_edit" : "action_add"), "close-on-click-modal": false, width: "700px", "destroy-on-close": "", "append-to-body": "", modelValue: d.value, "onUpdate:modelValue": e[7] || (e[7] = (l) => d.value = l), onClose: $ }, { footer: t(() => [_("div", Re, [o(U, { class: "w-[96px] h-[36px]", type: "primary", onClick: M }, { default: t(() => [f(r(s.$t("action_confirm")), 1)]), _: 1 }), o(U, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: le($, ["stop"]) }, { default: t(() => [f(r(s.$t("action_cancel")), 1)]), _: 1 })])]), default: t(() => [o(v, { ref_key: "form_ref", ref: i, model: n, "label-position": "top" }, { default: t(() => [o(g, { class: "mt-5", label: s.$t("order_no") }, { default: t(() => [o(V, { modelValue: n.order_id, "onUpdate:modelValue": e[0] || (e[0] = (l) => n.order_id = l), size: "large", disabled: "", placeholder: s.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), o(g, { label: s.$t("user"), prop: "user_list", rules: [{ validator: (l, Y, a) => {
      if (!Y.length)
        return a(new Error(s.$t("form_select_placeholder") + s.$t("user")));
      a();
    }, trigger: "blur" }] }, { default: t(() => [o(B, { modelValue: n.user_list, "onUpdate:modelValue": e[1] || (e[1] = (l) => n.user_list = l), filterable: "", "collapse-tags": false, "collapse-tags-tooltip": "", multiple: "", size: "large", placeholder: s.$t("form_select_placeholder") + s.$t("user") }, { default: t(() => [(u(true), E(y, null, A(T.value, (l) => (u(), h(x, { key: l.value, label: l.label, value: l.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder"]), _("div", Fe, r(s.$t("module.operation_order_user_tip")), 1)]), _: 1 }, 8, ["label", "rules"]), o(g, { label: s.$t("order_subscription_version") }, { default: t(() => [o(S, { modelValue: n.subscription_version, "onUpdate:modelValue": e[2] || (e[2] = (l) => n.subscription_version = l), size: "large" }, { default: t(() => [(u(true), E(y, null, A(z.value, (l) => (u(), h(C, { key: l.value, label: l.value }, { default: t(() => [f(r(l.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), o(g, { label: s.$t("order_subscription_duration") }, { default: t(() => [o(N, { modelValue: n.subscription_duration, "onUpdate:modelValue": e[3] || (e[3] = (l) => n.subscription_duration = l), min: 1, controls: false, class: "!w-[108px] mr-4", size: "large", placeholder: s.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"]), o(S, { modelValue: n.subscription_unit, "onUpdate:modelValue": e[4] || (e[4] = (l) => n.subscription_unit = l), size: "large" }, { default: t(() => [(u(true), E(y, null, A(L.value, (l) => (u(), h(C, { key: l.value, label: l.value }, { default: t(() => [f(r(l.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), o(g, { label: s.$t("order_amount") }, { default: t(() => [o(B, { class: "!w-[108px] amount-unit-select", modelValue: n.amount_unit, "onUpdate:modelValue": e[5] || (e[5] = (l) => n.amount_unit = l), size: "large" }, { default: t(() => [(u(true), E(y, null, A(b.value, (l) => (u(), h(x, { key: l.value, label: l.label, value: l.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue"]), o(N, { class: "flex-1 amount-input", modelValue: n.amount, "onUpdate:modelValue": e[6] || (e[6] = (l) => n.amount = l), min: 0, precision: 2, controls: false, size: "large", placeholder: s.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["title", "modelValue"]);
  };
} });
const Ue = ue(Ne, [["__scopeId", "data-v-59a691bb"]]), P = -1, J = 1, q = 2, te = 3, K = 4, H = /* @__PURE__ */ new Map([[P, "order.status.all"], [J, "order.status.not_confirm"], [q, "order.status.pending"], [te, "order.status.paid"], [K, "order.status.expired"]]), Ie = { async list({ params: m = {} } = {}) {
  m = JSON.parse(JSON.stringify(m)), m.offset || (m.offset = 0), m.limit || (m.limit = 10), m.keyword || delete m.keyword;
  const { data: w = {} } = await de.get("/api/orders", { params: m }).catch(_e), i = (w.orders || []).map((d = {}) => (d.created_time = +d.created_time, d.created_time = pe({ date: d.created_time, format: "YYYY-MM-DD hh:mm:ss" }), d));
  return { ...w, list: i };
} }, Pe = { class: "flex-1 flex flex-col bg-white p-6 mt-3 box-border max-h-[calc(100vh-100px)] overflow-auto" }, ze = { class: "flex items-center justify-between" }, Le = { class: "flex items-center gap-3" }, Me = { class: "!border-none !outline-none h-9 flex-center px-5 gap-1.5 rounded-2xl bg-[#F6F7F8] text-xs text-[#1D1E1F] cursor-pointer" }, Oe = { class: "!border-none !outline-none h-9 flex-center px-5 gap-1.5 rounded-2xl bg-[#F6F7F8] text-xs text-[#1D1E1F] cursor-pointer" }, Ye = { class: "flex-center gap-3" }, Ge = { class: "flex-1 overflow-y-auto bg-white rounded-lg mt-4" }, _o = Q({ __name: "index", setup(m) {
  const w = p(), i = ee({ status: P, pay_type: G, keyword: "", offset: 0, limit: 10 }), d = [P, J, q, te, K].map((e) => ({ value: e, label: H.get(e) || H.get(P) })), D = [G, ke].map((e) => ({ value: e, label: j.get(e) || j.get(G) })), n = p([]), k = p(0), T = p(false), z = W(() => d.find((e) => e.value === i.status) || {}), L = W(() => D.find((e) => e.value === i.pay_type) || {});
  me(async () => {
    b(), X.on("user-login-success", b);
  }), ce(() => {
    X.off("user-login-success", b);
  });
  const b = () => {
    i.offset = 0, F();
  }, F = async () => {
    T.value = true;
    const { total: e = 0, list: V = [] } = await Ie.list({ params: i }).finally(() => {
      T.value = false;
    });
    k.value = e, n.value = V;
  }, $ = (e) => {
    i.limit = e, b();
  }, R = (e) => {
    i.offset = (e - 1) * i.limit, F();
  }, M = (e) => {
    i.status = e, b();
  }, s = (e) => {
    i.pay_type = e, b();
  };
  return (e, V) => {
    const g = De, x = ve, B = $e, C = Ve, S = Ae, N = oe, v = he, U = we, O = ye, l = ge, Y = Ee;
    return u(), E(y, null, [o(l, { class: "px-[60px] py-8" }, { default: t(() => [o(g, { title: e.$t("module.operation_order") }, null, 8, ["title"]), _("div", Pe, [_("div", ze, [_("div", Le, [o(S, { placement: "bottom", onCommand: M }, { dropdown: t(() => [o(C, null, { default: t(() => [(u(true), E(y, null, A(c(d), (a) => (u(), h(B, { key: a.value, command: a.value }, { default: t(() => [f(r(e.$t(a.label)), 1)]), _: 2 }, 1032, ["command"]))), 128))]), _: 1 })]), default: t(() => [_("div", Me, [f(r(e.$t(z.value.label || "")) + " ", 1), o(x, { size: "14", color: "#9EA5B6" }, { default: t(() => [o(c(Z))]), _: 1 })])]), _: 1 }), o(S, { placement: "bottom", onCommand: s }, { dropdown: t(() => [o(C, null, { default: t(() => [(u(true), E(y, null, A(c(D), (a) => (u(), h(B, { key: a.value, command: a.value }, { default: t(() => [f(r(e.$t(a.label)), 1)]), _: 2 }, 1032, ["command"]))), 128))]), _: 1 })]), default: t(() => [_("div", Oe, [f(r(e.$t(L.value.label || "")) + " ", 1), o(x, { size: "14", color: "#9EA5B6" }, { default: t(() => [o(c(Z))]), _: 1 })])]), _: 1 })]), _("div", Ye, [o(N, { modelValue: i.keyword, "onUpdate:modelValue": V[0] || (V[0] = (a) => i.keyword = a), style: { "max-width": "268px" }, size: "large", clearable: "", "suffix-icon": c(fe), placeholder: e.$t("module.operation_order_search_placeholder"), onChange: b }, null, 8, ["modelValue", "suffix-icon", "placeholder"])])]), be((u(), E("div", Ge, [o(O, { data: n.value, total: k.value, style: { width: "100%" }, "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", onPageSizeChange: $, onPageCurrentChange: R }, { default: t(() => [o(v, { label: e.$t("order_id"), "min-width": "160", prop: "order_id", "show-overflow-tooltip": "" }, null, 8, ["label"]), o(v, { label: e.$t("order_subscription"), "min-width": "140", prop: "subscription_name", "show-overflow-tooltip": "" }, { default: t(({ row: a }) => [_("span", { class: I({ "text-[#9B9B9B]": !a.subscription_name }) }, r(a.subscription_name) + "*" + r(a.duration) + r(e.$t(a.time_unit)), 3)]), _: 1 }, 8, ["label"]), o(v, { label: e.$t("order_amount"), "min-width": "140", prop: "amount", "show-overflow-tooltip": "" }, { default: t(({ row: a }) => [_("span", { class: I({ "text-[#9B9B9B]": !a.amount }) }, r(a.currency || "CNY") + "\xA0" + r(((+a.amount || 0) / 100).toFixed(2)), 3)]), _: 1 }, 8, ["label"]), o(v, { label: e.$t("order_status"), "min-width": "120", "show-overflow-tooltip": "" }, { default: t(({ row: a }) => [o(U, { class: "!border-none", type: a.status == c(J) ? "danger" : a.status == c(q) ? "primary" : a.status == c(K) ? "warning" : "success" }, { default: t(() => [f(r(e.$t(c(H).get(a.status) || "")), 1)]), _: 2 }, 1032, ["type"])]), _: 1 }, 8, ["label"]), o(v, { label: e.$t("order_create_time"), width: "160", "show-overflow-tooltip": "" }, { default: t(({ row: a }) => [_("span", { class: I({ "text-[#9B9B9B]": !a.created_time }) }, r(a.created_time.slice(0, 16) || "--"), 3)]), _: 1 }, 8, ["label"]), o(v, { label: e.$t("user"), width: "160", prop: "nickname", "show-overflow-tooltip": "" }, { default: t(({ row: a }) => [_("span", { class: I({ "text-[#9B9B9B]": !a.nickname }) }, r(a.nickname || "--"), 3)]), _: 1 }, 8, ["label"]), o(v, { label: e.$t("order_payment_type"), prop: "pay_type", width: "120", "show-overflow-tooltip": "" }, { default: t(({ row: a }) => [f(r(e.$t(c(j).get(a.pay_type) || "")), 1)]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data", "total"])])), [[Y, T.value]])])]), _: 1 }), o(Ue, { ref_key: "add_ref", ref: w }, null, 512)], 64);
  };
} });
export {
  _o as default
};
