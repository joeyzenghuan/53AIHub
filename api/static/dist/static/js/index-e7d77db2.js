import { u as Z, r as p, ae as ee, b as u, h, i as t, d as _, f as o, H as f, t as r, am as le, c as E, G as D, F as y, a9 as ae, X as oe, aa as ne, ac as se, $ as re, Y as ie, p as ue, s as de, k as _e, l as pe, al as q, o as me, J as K, a as ce, z as c, I as Q, V as fe, g as be, n as N, y as ve } from "./index-7b696e01.js";
import { v as Ee } from "./el-loading-5050bc7d.js";
import { _ as ge } from "./index-71389ea4.js";
import { _ as he } from "./index-d368b04e.js";
import { E as ye } from "./el-tag-63139441.js";
import { E as we } from "./el-table-column-fe44992a.js";
import { E as $e, a as Ve, b as De } from "./el-dropdown-item-2f5f0e32.js";
import "./el-scrollbar-a17df1f1.js";
import { _ as Te } from "./index.vue_vue_type_script_setup_true_lang-ca2646ba.js";
import { E as Ae } from "./el-input-number-d679436c.js";
import { E as xe, a as Ce } from "./el-radio-32a02f49.js";
import { E as Be, a as Se } from "./el-select-2909247e.js";
import { P as G, a as ke, b as H } from "./setting-23844e27.js";
import "./agent-fe196a62.js";
import "./index.vue_vue_type_script_setup_true_lang-7fe9a2b9.js";
import "./sortable.esm-437f0071.js";
import "./position-df18ca50.js";
import "./debounce-c1af5016.js";
import "./debounce-f4e6390f.js";
import "./isEqual-71b69c76.js";
import "./dropdown-cf05cb92.js";
import "./index-74671778.js";
const Fe = { class: "text-[#9A9A9A] text-sm mt-2" }, Re = { class: "py-4 flex items-center justify-center" }, Ue = Z({ __name: "order-add-dialog", setup(m, { expose: w }) {
  const i = p(), d = p(false), T = p(false), n = ee({ order_id: "", user_list: [], subscription_version: "1", subscription_duration: "1", subscription_unit: "1", amount: "0.00", amount_unit: "1" }), k = p({}), A = p([{ value: "1", label: "\u5F20\u4E09" }, { value: "2", label: "\u674E\u56DB" }, { value: "3", label: "\u738B\u4E94" }, { value: "4", label: "\u8D75\u516D" }, { value: "5", label: "\u5B59\u4E03" }]), z = p([{ value: "1", label: "\u4E13\u4E1A\u7248" }, { value: "2", label: "\u65D7\u8230\u7248" }]), L = p([{ value: "1", label: "\u6708" }, { value: "2", label: "\u5E74" }]), b = p([{ value: "1", label: "CNY" }, { value: "2", label: "USD" }]), F = ({ data: s = {} } = {}) => {
    n.order_id = s.order_id || "AH2015032000200", n.user_list = s.user_list || [], n.subscription_version = s.subscription_version || "1", n.subscription_duration = s.subscription_duration || "1", n.subscription_unit = s.subscription_unit || "1", n.amount = +s.amount || "0.00", n.amount_unit = s.amount_unit || "1", T.value = !!s.order_id, k.value = s, d.value = true;
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
    const V = oe, g = ne, x = Be, C = Se, B = xe, S = Ce, U = Ae, v = se, I = re, O = ie;
    return u(), h(O, { title: s.$t(T.value ? "action_edit" : "action_add"), "close-on-click-modal": false, width: "700px", "destroy-on-close": "", "append-to-body": "", modelValue: d.value, "onUpdate:modelValue": e[7] || (e[7] = (l) => d.value = l), onClose: $ }, { footer: t(() => [_("div", Re, [o(I, { class: "w-[96px] h-[36px]", type: "primary", onClick: M }, { default: t(() => [f(r(s.$t("action_confirm")), 1)]), _: 1 }), o(I, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: le($, ["stop"]) }, { default: t(() => [f(r(s.$t("action_cancel")), 1)]), _: 1 })])]), default: t(() => [o(v, { ref_key: "form_ref", ref: i, model: n, "label-position": "top" }, { default: t(() => [o(g, { class: "mt-5", label: s.$t("order_no") }, { default: t(() => [o(V, { modelValue: n.order_id, "onUpdate:modelValue": e[0] || (e[0] = (l) => n.order_id = l), size: "large", disabled: "", placeholder: s.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), o(g, { label: s.$t("user"), prop: "user_list", rules: [{ validator: (l, Y, a) => {
      if (!Y.length)
        return a(new Error(s.$t("form_select_placeholder") + s.$t("user")));
      a();
    }, trigger: "blur" }] }, { default: t(() => [o(C, { modelValue: n.user_list, "onUpdate:modelValue": e[1] || (e[1] = (l) => n.user_list = l), filterable: "", "collapse-tags": false, "collapse-tags-tooltip": "", multiple: "", size: "large", placeholder: s.$t("form_select_placeholder") + s.$t("user") }, { default: t(() => [(u(true), E(y, null, D(A.value, (l) => (u(), h(x, { key: l.value, label: l.label, value: l.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder"]), _("div", Fe, r(s.$t("module.operation_order_user_tip")), 1)]), _: 1 }, 8, ["label", "rules"]), o(g, { label: s.$t("order_subscription_version") }, { default: t(() => [o(S, { modelValue: n.subscription_version, "onUpdate:modelValue": e[2] || (e[2] = (l) => n.subscription_version = l), size: "large" }, { default: t(() => [(u(true), E(y, null, D(z.value, (l) => (u(), h(B, { key: l.value, label: l.value }, { default: t(() => [f(r(l.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), o(g, { label: s.$t("order_subscription_duration") }, { default: t(() => [o(U, { modelValue: n.subscription_duration, "onUpdate:modelValue": e[3] || (e[3] = (l) => n.subscription_duration = l), min: 1, controls: false, class: "!w-[108px] mr-4", size: "large", placeholder: s.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"]), o(S, { modelValue: n.subscription_unit, "onUpdate:modelValue": e[4] || (e[4] = (l) => n.subscription_unit = l), size: "large" }, { default: t(() => [(u(true), E(y, null, D(L.value, (l) => (u(), h(B, { key: l.value, label: l.value }, { default: t(() => [f(r(l.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), o(g, { label: s.$t("order_amount") }, { default: t(() => [o(C, { class: "!w-[108px] amount-unit-select", modelValue: n.amount_unit, "onUpdate:modelValue": e[5] || (e[5] = (l) => n.amount_unit = l), size: "large" }, { default: t(() => [(u(true), E(y, null, D(b.value, (l) => (u(), h(x, { key: l.value, label: l.label, value: l.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue"]), o(U, { class: "flex-1 amount-input", modelValue: n.amount, "onUpdate:modelValue": e[6] || (e[6] = (l) => n.amount = l), min: 0, precision: 2, controls: false, size: "large", placeholder: s.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["title", "modelValue"]);
  };
} });
const Ie = ue(Ue, [["__scopeId", "data-v-59a691bb"]]), P = -1, j = 1, X = 2, te = 3, W = 4, J = /* @__PURE__ */ new Map([[P, "order.status.all"], [j, "order.status.not_confirm"], [X, "order.status.pending"], [te, "order.status.paid"], [W, "order.status.expired"]]), Ne = { async list({ params: m = {} } = {}) {
  m = JSON.parse(JSON.stringify(m)), m.offset || (m.offset = 0), m.limit || (m.limit = 10), m.keyword || delete m.keyword;
  const { data: w = {} } = await de.get("/api/orders", { params: m }).catch(_e), i = (w.orders || []).map((d = {}) => (d.created_time = +d.created_time, d.created_time = pe({ date: d.created_time, format: "YYYY-MM-DD hh:mm:ss" }), d));
  return { ...w, list: i };
} }, Pe = { class: "flex-1 flex flex-col bg-white p-6 mt-3 box-border max-h-[calc(100vh-100px)] overflow-auto" }, ze = { class: "flex items-center justify-between" }, Le = { class: "flex items-center gap-3" }, Me = { class: "!border-none !outline-none h-9 flex-center px-5 gap-1.5 rounded-2xl bg-[#F6F7F8] text-xs text-[#1D1E1F] cursor-pointer" }, Oe = { class: "!border-none !outline-none h-9 flex-center px-5 gap-1.5 rounded-2xl bg-[#F6F7F8] text-xs text-[#1D1E1F] cursor-pointer" }, Ye = { class: "flex-center gap-3" }, Ge = { class: "flex-1 overflow-y-auto bg-white rounded-lg mt-4" }, co = Z({ __name: "index", setup(m) {
  const w = p(), i = ee({ status: P, pay_type: G, keyword: "", offset: 0, limit: 10 }), d = [P, j, X, te, W].map((e) => ({ value: e, label: J.get(e) || J.get(P) })), T = [G, ke].map((e) => ({ value: e, label: H.get(e) || H.get(G) })), n = p([]), k = p(0), A = p(false), z = q(() => d.find((e) => e.value === i.status) || {}), L = q(() => T.find((e) => e.value === i.pay_type) || {});
  me(async () => {
    b(), K.on("user-login-success", b);
  }), ce(() => {
    K.off("user-login-success", b);
  });
  const b = () => {
    i.offset = 0, F();
  }, F = async () => {
    A.value = true;
    const { total: e = 0, list: V = [] } = await Ne.list({ params: i }).finally(() => {
      A.value = false;
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
    const g = Te, x = ve, C = $e, B = Ve, S = De, U = oe, v = we, I = ye, O = he, l = ge, Y = Ee;
    return u(), E(y, null, [o(l, { class: "px-[60px] py-8" }, { default: t(() => [o(g, { title: e.$t("module.operation_order") }, null, 8, ["title"]), _("div", Pe, [_("div", ze, [_("div", Le, [o(S, { placement: "bottom", onCommand: M }, { dropdown: t(() => [o(B, null, { default: t(() => [(u(true), E(y, null, D(c(d), (a) => (u(), h(C, { key: a.value, command: a.value }, { default: t(() => [f(r(e.$t(a.label)), 1)]), _: 2 }, 1032, ["command"]))), 128))]), _: 1 })]), default: t(() => [_("div", Me, [f(r(e.$t(z.value.label || "")) + " ", 1), o(x, { size: "14", color: "#9EA5B6" }, { default: t(() => [o(c(Q))]), _: 1 })])]), _: 1 }), o(S, { placement: "bottom", onCommand: s }, { dropdown: t(() => [o(B, null, { default: t(() => [(u(true), E(y, null, D(c(T), (a) => (u(), h(C, { key: a.value, command: a.value }, { default: t(() => [f(r(e.$t(a.label)), 1)]), _: 2 }, 1032, ["command"]))), 128))]), _: 1 })]), default: t(() => [_("div", Oe, [f(r(e.$t(L.value.label || "")) + " ", 1), o(x, { size: "14", color: "#9EA5B6" }, { default: t(() => [o(c(Q))]), _: 1 })])]), _: 1 })]), _("div", Ye, [o(U, { modelValue: i.keyword, "onUpdate:modelValue": V[0] || (V[0] = (a) => i.keyword = a), style: { "max-width": "268px" }, size: "large", clearable: "", "suffix-icon": c(fe), placeholder: e.$t("module.operation_order_search_placeholder"), onChange: b }, null, 8, ["modelValue", "suffix-icon", "placeholder"])])]), be((u(), E("div", Ge, [o(O, { data: n.value, total: k.value, style: { width: "100%" }, "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", onPageSizeChange: $, onPageCurrentChange: R }, { default: t(() => [o(v, { label: e.$t("order_id"), "min-width": "160", prop: "order_id", "show-overflow-tooltip": "" }, null, 8, ["label"]), o(v, { label: e.$t("order_subscription"), "min-width": "140", prop: "subscription_name", "show-overflow-tooltip": "" }, { default: t(({ row: a }) => [_("span", { class: N({ "text-[#9B9B9B]": !a.subscription_name }) }, r(a.subscription_name) + "*" + r(a.duration) + r(e.$t(a.time_unit)), 3)]), _: 1 }, 8, ["label"]), o(v, { label: e.$t("order_amount"), "min-width": "140", prop: "amount", "show-overflow-tooltip": "" }, { default: t(({ row: a }) => [_("span", { class: N({ "text-[#9B9B9B]": !a.amount }) }, r(a.currency || "CNY") + "\xA0" + r(((+a.amount || 0) / 100).toFixed(2)), 3)]), _: 1 }, 8, ["label"]), o(v, { label: e.$t("order_status"), "min-width": "120", "show-overflow-tooltip": "" }, { default: t(({ row: a }) => [o(I, { class: "!border-none", type: a.status == c(j) ? "danger" : a.status == c(X) ? "primary" : a.status == c(W) ? "warning" : "success" }, { default: t(() => [f(r(e.$t(c(J).get(a.status) || "")), 1)]), _: 2 }, 1032, ["type"])]), _: 1 }, 8, ["label"]), o(v, { label: e.$t("order_create_time"), width: "160", "show-overflow-tooltip": "" }, { default: t(({ row: a }) => [_("span", { class: N({ "text-[#9B9B9B]": !a.created_time }) }, r(a.created_time.slice(0, 16) || "--"), 3)]), _: 1 }, 8, ["label"]), o(v, { label: e.$t("user"), width: "160", prop: "nickname", "show-overflow-tooltip": "" }, { default: t(({ row: a }) => [_("span", { class: N({ "text-[#9B9B9B]": !a.nickname }) }, r(a.nickname || "--"), 3)]), _: 1 }, 8, ["label"]), o(v, { label: e.$t("order_payment_type"), prop: "pay_type", width: "120", "show-overflow-tooltip": "" }, { default: t(({ row: a }) => [f(r(e.$t(c(H).get(a.pay_type) || "")), 1)]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data", "total"])])), [[Y, A.value]])])]), _: 1 }), o(Ie, { ref_key: "add_ref", ref: w }, null, 512)], 64);
  };
} });
export {
  co as default
};
