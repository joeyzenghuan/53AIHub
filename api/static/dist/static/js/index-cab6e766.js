import { E as le, c as Z, d as ae, G as ne, N as se, D as re, f as ie, e as ue, g as de, F as _e, O as pe, b as me, L as ce, M as fe, x as be, P as ve, v as ge, K as he } from "./element-plus-c72880c6.js";
import { _ as Ee } from "./index-62cbccec.js";
import { _ as ye } from "./index-510919ce.js";
import { _ as we } from "./index.vue_vue_type_script_setup_true_lang-9a63c23d.js";
import { f as X, K as $e } from "./@element-plus-0cfad8bb.js";
import { d as ee, e as p, V as oe, o as u, J as E, K as t, a as _, M as o, a2 as f, P as r, O as Ve, c as g, ac as D, H as y, j as q, i as De, D as Te, u as c, S as Ae, I as U } from "./@vue-3b855f7b.js";
import { f as xe, s as Ce, t as Se, v as Be, e as Q } from "./index-76ebd052.js";
import { P as G, a as ke, b as H } from "./setting-2f8c07fe.js";
import "./agent-6508b772.js";
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
import "./vue-router-2f60a71a.js";
import "./pinia-6f4b1ece.js";
import "./vue-demi-71ba0ef2.js";
import "./axios-8e4517c3.js";
import "./vue-i18n-b5fa020c.js";
import "./@intlify-bab9fd84.js";
const Fe = { class: "text-[#9A9A9A] text-sm mt-2" }, Pe = { class: "py-4 flex items-center justify-center" }, Re = ee({ __name: "order-add-dialog", setup(m, { expose: w }) {
  const i = p(), d = p(false), T = p(false), n = oe({ order_id: "", user_list: [], subscription_version: "1", subscription_duration: "1", subscription_unit: "1", amount: "0.00", amount_unit: "1" }), k = p({}), A = p([{ value: "1", label: "\u5F20\u4E09" }, { value: "2", label: "\u674E\u56DB" }, { value: "3", label: "\u738B\u4E94" }, { value: "4", label: "\u8D75\u516D" }, { value: "5", label: "\u5B59\u4E03" }]), M = p([{ value: "1", label: "\u4E13\u4E1A\u7248" }, { value: "2", label: "\u65D7\u8230\u7248" }]), O = p([{ value: "1", label: "\u6708" }, { value: "2", label: "\u5E74" }]), b = p([{ value: "1", label: "CNY" }, { value: "2", label: "USD" }]), F = ({ data: s = {} } = {}) => {
    n.order_id = s.order_id || "AH2015032000200", n.user_list = s.user_list || [], n.subscription_version = s.subscription_version || "1", n.subscription_duration = s.subscription_duration || "1", n.subscription_unit = s.subscription_unit || "1", n.amount = +s.amount || "0.00", n.amount_unit = s.amount_unit || "1", T.value = !!s.order_id, k.value = s, d.value = true;
  }, $ = () => {
    d.value = false, P();
  }, P = () => {
    n.order_id = "", n.user_list = [], n.subscription_version = "", n.subscription_duration = "", n.subscription_unit = "", n.amount = "", n.amount_unit = "";
  }, L = () => {
    i.value.validate((s) => {
      s && (le.success(window.$t("action_save_success")), $());
    });
  };
  return w({ open: F, close: $, reset: P }), (s, e) => {
    const V = Z, h = ae, x = _e, C = ne, S = pe, B = se, R = re, v = ie, N = ue, z = de;
    return u(), E(z, { title: s.$t(T.value ? "action_edit" : "action_add"), "close-on-click-modal": false, width: "700px", "destroy-on-close": "", "append-to-body": "", modelValue: d.value, "onUpdate:modelValue": e[7] || (e[7] = (l) => d.value = l), onClose: $ }, { footer: t(() => [_("div", Pe, [o(N, { class: "w-[96px] h-[36px]", type: "primary", onClick: L }, { default: t(() => [f(r(s.$t("action_confirm")), 1)]), _: 1 }), o(N, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: Ve($, ["stop"]) }, { default: t(() => [f(r(s.$t("action_cancel")), 1)]), _: 1 })])]), default: t(() => [o(v, { ref_key: "form_ref", ref: i, model: n, "label-position": "top" }, { default: t(() => [o(h, { class: "mt-5", label: s.$t("order_no") }, { default: t(() => [o(V, { modelValue: n.order_id, "onUpdate:modelValue": e[0] || (e[0] = (l) => n.order_id = l), size: "large", disabled: "", placeholder: s.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"]), o(h, { label: s.$t("user"), prop: "user_list", rules: [{ validator: (l, Y, a) => {
      if (!Y.length)
        return a(new Error(s.$t("form_select_placeholder") + s.$t("user")));
      a();
    }, trigger: "blur" }] }, { default: t(() => [o(C, { modelValue: n.user_list, "onUpdate:modelValue": e[1] || (e[1] = (l) => n.user_list = l), filterable: "", "collapse-tags": false, "collapse-tags-tooltip": "", multiple: "", size: "large", placeholder: s.$t("form_select_placeholder") + s.$t("user") }, { default: t(() => [(u(true), g(y, null, D(A.value, (l) => (u(), E(x, { key: l.value, label: l.label, value: l.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder"]), _("div", Fe, r(s.$t("module.operation_order_user_tip")), 1)]), _: 1 }, 8, ["label", "rules"]), o(h, { label: s.$t("order_subscription_version") }, { default: t(() => [o(B, { modelValue: n.subscription_version, "onUpdate:modelValue": e[2] || (e[2] = (l) => n.subscription_version = l), size: "large" }, { default: t(() => [(u(true), g(y, null, D(M.value, (l) => (u(), E(S, { key: l.value, label: l.value }, { default: t(() => [f(r(l.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), o(h, { label: s.$t("order_subscription_duration") }, { default: t(() => [o(R, { modelValue: n.subscription_duration, "onUpdate:modelValue": e[3] || (e[3] = (l) => n.subscription_duration = l), min: 1, controls: false, class: "!w-[108px] mr-4", size: "large", placeholder: s.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"]), o(B, { modelValue: n.subscription_unit, "onUpdate:modelValue": e[4] || (e[4] = (l) => n.subscription_unit = l), size: "large" }, { default: t(() => [(u(true), g(y, null, D(O.value, (l) => (u(), E(S, { key: l.value, label: l.value }, { default: t(() => [f(r(l.label), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 }, 8, ["label"]), o(h, { label: s.$t("order_amount") }, { default: t(() => [o(C, { class: "!w-[108px] amount-unit-select", modelValue: n.amount_unit, "onUpdate:modelValue": e[5] || (e[5] = (l) => n.amount_unit = l), size: "large" }, { default: t(() => [(u(true), g(y, null, D(b.value, (l) => (u(), E(x, { key: l.value, label: l.label, value: l.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue"]), o(R, { class: "flex-1 amount-input", modelValue: n.amount, "onUpdate:modelValue": e[6] || (e[6] = (l) => n.amount = l), min: 0, precision: 2, controls: false, size: "large", placeholder: s.$t("form_input_placeholder") }, null, 8, ["modelValue", "placeholder"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["title", "modelValue"]);
  };
} });
const Ne = xe(Re, [["__scopeId", "data-v-59a691bb"]]), I = -1, J = 1, K = 2, te = 3, W = 4, j = /* @__PURE__ */ new Map([[I, "order.status.all"], [J, "order.status.not_confirm"], [K, "order.status.pending"], [te, "order.status.paid"], [W, "order.status.expired"]]), Ue = { async list({ params: m = {} } = {}) {
  m = JSON.parse(JSON.stringify(m)), m.offset || (m.offset = 0), m.limit || (m.limit = 10), m.keyword || delete m.keyword;
  const { data: w = {} } = await Ce.get("/api/orders", { params: m }).catch(Se), i = (w.orders || []).map((d = {}) => (d.created_time = +d.created_time, d.created_time = Be({ date: d.created_time, format: "YYYY-MM-DD hh:mm:ss" }), d));
  return { ...w, list: i };
} }, Ie = { class: "flex-1 flex flex-col bg-white p-6 mt-3 box-border max-h-[calc(100vh-100px)] overflow-auto" }, Me = { class: "flex items-center justify-between" }, Oe = { class: "flex items-center gap-3" }, Le = { class: "!border-none !outline-none h-9 flex-center px-5 gap-1.5 rounded-2xl bg-[#F6F7F8] text-xs text-[#1D1E1F] cursor-pointer" }, ze = { class: "!border-none !outline-none h-9 flex-center px-5 gap-1.5 rounded-2xl bg-[#F6F7F8] text-xs text-[#1D1E1F] cursor-pointer" }, Ye = { class: "flex-center gap-3" }, Ge = { class: "flex-1 overflow-y-auto bg-white rounded-lg mt-4" }, go = ee({ __name: "index", setup(m) {
  const w = p(), i = oe({ status: I, pay_type: G, keyword: "", offset: 0, limit: 10 }), d = [I, J, K, te, W].map((e) => ({ value: e, label: j.get(e) || j.get(I) })), T = [G, ke].map((e) => ({ value: e, label: H.get(e) || H.get(G) })), n = p([]), k = p(0), A = p(false), M = q(() => d.find((e) => e.value === i.status) || {}), O = q(() => T.find((e) => e.value === i.pay_type) || {});
  De(async () => {
    b(), Q.on("user-login-success", b);
  }), Te(() => {
    Q.off("user-login-success", b);
  });
  const b = () => {
    i.offset = 0, F();
  }, F = async () => {
    A.value = true;
    const { total: e = 0, list: V = [] } = await Ue.list({ params: i }).finally(() => {
      A.value = false;
    });
    k.value = e, n.value = V;
  }, $ = (e) => {
    i.limit = e, b();
  }, P = (e) => {
    i.offset = (e - 1) * i.limit, F();
  }, L = (e) => {
    i.status = e, b();
  }, s = (e) => {
    i.pay_type = e, b();
  };
  return (e, V) => {
    const h = we, x = me, C = he, S = ce, B = fe, R = Z, v = be, N = ve, z = ye, l = Ee, Y = ge;
    return u(), g(y, null, [o(l, { class: "px-[60px] py-8" }, { default: t(() => [o(h, { title: e.$t("module.operation_order") }, null, 8, ["title"]), _("div", Ie, [_("div", Me, [_("div", Oe, [o(B, { placement: "bottom", onCommand: L }, { dropdown: t(() => [o(S, null, { default: t(() => [(u(true), g(y, null, D(c(d), (a) => (u(), E(C, { key: a.value, command: a.value }, { default: t(() => [f(r(e.$t(a.label)), 1)]), _: 2 }, 1032, ["command"]))), 128))]), _: 1 })]), default: t(() => [_("div", Le, [f(r(e.$t(M.value.label || "")) + " ", 1), o(x, { size: "14", color: "#9EA5B6" }, { default: t(() => [o(c(X))]), _: 1 })])]), _: 1 }), o(B, { placement: "bottom", onCommand: s }, { dropdown: t(() => [o(S, null, { default: t(() => [(u(true), g(y, null, D(c(T), (a) => (u(), E(C, { key: a.value, command: a.value }, { default: t(() => [f(r(e.$t(a.label)), 1)]), _: 2 }, 1032, ["command"]))), 128))]), _: 1 })]), default: t(() => [_("div", ze, [f(r(e.$t(O.value.label || "")) + " ", 1), o(x, { size: "14", color: "#9EA5B6" }, { default: t(() => [o(c(X))]), _: 1 })])]), _: 1 })]), _("div", Ye, [o(R, { modelValue: i.keyword, "onUpdate:modelValue": V[0] || (V[0] = (a) => i.keyword = a), style: { "max-width": "268px" }, size: "large", clearable: "", "suffix-icon": c($e), placeholder: e.$t("module.operation_order_search_placeholder"), onChange: b }, null, 8, ["modelValue", "suffix-icon", "placeholder"])])]), Ae((u(), g("div", Ge, [o(z, { data: n.value, total: k.value, style: { width: "100%" }, "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", onPageSizeChange: $, onPageCurrentChange: P }, { default: t(() => [o(v, { label: e.$t("order_id"), "min-width": "160", prop: "order_id", "show-overflow-tooltip": "" }, null, 8, ["label"]), o(v, { label: e.$t("order_subscription"), "min-width": "140", prop: "subscription_name", "show-overflow-tooltip": "" }, { default: t(({ row: a }) => [_("span", { class: U({ "text-[#9B9B9B]": !a.subscription_name }) }, r(a.subscription_name) + "*" + r(a.duration) + r(e.$t(a.time_unit)), 3)]), _: 1 }, 8, ["label"]), o(v, { label: e.$t("order_amount"), "min-width": "140", prop: "amount", "show-overflow-tooltip": "" }, { default: t(({ row: a }) => [_("span", { class: U({ "text-[#9B9B9B]": !a.amount }) }, r(a.currency || "CNY") + "\xA0" + r(((+a.amount || 0) / 100).toFixed(2)), 3)]), _: 1 }, 8, ["label"]), o(v, { label: e.$t("order_status"), "min-width": "120", "show-overflow-tooltip": "" }, { default: t(({ row: a }) => [o(N, { class: "!border-none", type: a.status == c(J) ? "danger" : a.status == c(K) ? "primary" : a.status == c(W) ? "warning" : "success" }, { default: t(() => [f(r(e.$t(c(j).get(a.status) || "")), 1)]), _: 2 }, 1032, ["type"])]), _: 1 }, 8, ["label"]), o(v, { label: e.$t("order_create_time"), width: "160", "show-overflow-tooltip": "" }, { default: t(({ row: a }) => [_("span", { class: U({ "text-[#9B9B9B]": !a.created_time }) }, r(a.created_time.slice(0, 16) || "--"), 3)]), _: 1 }, 8, ["label"]), o(v, { label: e.$t("user"), width: "160", prop: "nickname", "show-overflow-tooltip": "" }, { default: t(({ row: a }) => [_("span", { class: U({ "text-[#9B9B9B]": !a.nickname }) }, r(a.nickname || "--"), 3)]), _: 1 }, 8, ["label"]), o(v, { label: e.$t("order_payment_type"), prop: "pay_type", width: "120", "show-overflow-tooltip": "" }, { default: t(({ row: a }) => [f(r(e.$t(c(H).get(a.pay_type) || "")), 1)]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data", "total"])])), [[Y, A.value]])])]), _: 1 }), o(Ne, { ref_key: "add_ref", ref: w }, null, 512)], 64);
  };
} });
export {
  go as default
};
