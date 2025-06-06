import { _ as Z } from "./index-918f1759.js";
import { _ as O } from "./index-2b83add0.js";
import { c as j, x as H, e as J, g as ee, E as I, a as te, b as ae } from "./element-plus-c72880c6.js";
import { _ as oe } from "./index.vue_vue_type_script_setup_true_lang-9a63c23d.js";
import { K, L as le } from "./@element-plus-0cfad8bb.js";
import { d as q, e as _, V as T, o as z, J as U, K as l, a as n, M as a, a2 as $, P as d, O as se, u as R, I as w, n as N, j as ne, i as ie, D as re, c as ce, H as de } from "./@vue-3b855f7b.js";
import { b as G, U as Q, x as W } from "./index-226b5715.js";
import { u as ue } from "./vue-router-2f60a71a.js";
import "./agent-3dc66611.js";
import { u as A } from "./user-830d083c.js";
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
const pe = { class: "py-4 flex items-center justify-between" }, me = ["innerHTML"], _e = { class: "flex-center" }, fe = q({ __name: "user-select-dialog", emits: ["success"], setup(X, { expose: V, emit: C }) {
  const B = C, v = G(), y = _(), o = _(false), r = _(false), s = T({ keyword: "", page: 1, pageSize: 10 }), b = _([]), E = _(0), u = _([]);
  let x = null;
  const t = ({ value: e = [], success: i = null } = {}) => {
    s.keyword = "", u.value = [...e], o.value = true, k(), x = i;
  }, c = () => {
    o.value = false;
  }, f = async () => {
    r.value = true;
    const { count: e = 0, users: i = [] } = await v.loadListData({ data: { keyword: s.keyword, offset: (s.page - 1) * s.pageSize, limit: s.pageSize } }).catch(() => {
      r.value = false;
    });
    b.value = [], await N(), b.value = [...i].map((h = {}) => h), E.value = +e || 0, u.value.length && (await N(), u.value.forEach((h = {}) => {
      const g = b.value.find((P) => P.user_id === h.user_id);
      g && y.value.toggleRowSelection(g);
    })), r.value = false;
  }, k = () => (s.page = 1, f()), S = (e) => {
    s.pageSize = e, k();
  }, D = (e) => {
    s.page = e, f();
  }, m = (e) => {
    r.value || (u.value = [...e]);
  }, L = (e = {}) => {
    const i = [Q, W].includes(Number(e.role));
    return i && !u.value.find((h) => h.user_id === e.user_id) && y.value.toggleRowSelection(e), !i;
  }, F = () => {
    const e = JSON.parse(JSON.stringify(u.value));
    typeof x == "function" && x({ value: e }), B("success", { value: e }), c();
  };
  return V({ open: t, close: c }), (e, i) => {
    const h = j, g = H, P = O, M = J, Y = ee;
    return z(), U(Y, { modelValue: o.value, "onUpdate:modelValue": i[1] || (i[1] = (p) => o.value = p), title: e.$t("action_select"), "close-on-click-modal": false, width: "800px", "destroy-on-close": "", "append-to-body": "", "align-center": "", onClose: c }, { footer: l(() => [n("div", pe, [n("div", { class: "text-sm text-[#768097] text-left", innerHTML: e.$t("selected_tip", { total: `<span class='text-[#3664EF]'>${u.value.length}</span>` }) }, null, 8, me), n("div", _e, [a(M, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: se(c, ["stop"]) }, { default: l(() => [$(d(e.$t("action_cancel")), 1)]), _: 1 }), a(M, { class: "w-[96px] h-[36px]", type: "primary", loading: r.value, disabled: !u.value.length, onClick: F }, { default: l(() => [$(d(e.$t("action_confirm")), 1)]), _: 1 }, 8, ["loading", "disabled"])])])]), default: l(() => [n("div", null, [a(h, { modelValue: s.keyword, "onUpdate:modelValue": i[0] || (i[0] = (p) => s.keyword = p), style: { width: "220px" }, size: "default", clearable: "", "suffix-icon": R(K), placeholder: e.$t("module.operation_user_search_placeholder"), onChange: k }, null, 8, ["modelValue", "suffix-icon", "placeholder"])]), a(P, { ref_key: "tableRef", ref: y, class: "mt-5", data: b.value, total: E.value, style: { width: "100%" }, "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", loading: r.value, onPageSizeChange: S, onPageCurrentChange: D, onSelectionChange: m }, { default: l(() => [a(g, { type: "selection", width: "40", selectable: L }), a(g, { label: e.$t("user"), "min-width": "140", prop: "nickname", "show-overflow-tooltip": "" }, null, 8, ["label"]), a(g, { label: e.$t("account"), "min-width": "140", prop: "username", "show-overflow-tooltip": "" }, { default: l(({ row: p }) => [n("span", { class: w({ "text-[#9B9B9B]": !p.username }) }, d(p.username || "--"), 3)]), _: 1 }, 8, ["label"]), a(g, { label: e.$t("register_time"), width: "160", prop: "register_time" }, { default: l(({ row: p }) => [n("span", { class: w({ "text-[#9B9B9B]": !p.register_time }) }, d((p.register_time || "").slice(0, 16) || "--"), 3)]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data", "total", "loading"])]), _: 1 }, 8, ["modelValue", "title"]);
  };
} }), he = { class: "flex-1 flex flex-col bg-white p-6 mt-3 box-border max-h-[calc(100vh-100px)] overflow-auto" }, ge = { class: "flex items-center justify-between" }, be = { class: "flex-1 overflow-y-auto bg-white rounded-lg mt-4" }, we = { class: "ml-1.5" }, Ke = q({ __name: "index", setup(X) {
  const V = ue(), C = G(), B = _();
  T({ keyword: "" });
  const v = _(false), y = ne(() => C.info), o = T({ keyword: "", page: 1, pageSize: 10, count: 0, list: [] }), r = () => {
    v.value = true, C.loadListData({ data: { role: [Q, W].join(","), keyword: o.keyword, offset: (o.page - 1) * o.pageSize, limit: o.pageSize } }).then((t) => {
      o.count = t.count, o.list = [...t.users].map((c) => c);
    }).finally(() => {
      v.value = false;
    });
  }, s = () => (o.page = 1, r()), b = ({ data: t = {} } = {}) => {
    B.value.open({ success: ({ value: c }) => {
      A.batch_save_admin({ user_ids: c.map((f) => f.user_id) }).then((f) => {
        I.success(window.$t("action_add_success")), s();
      });
    } });
  }, E = async (t) => {
    await te.confirm(window.$t("admin_user.delete_confirm")), await A.batch_remove_admin({ user_ids: [t.user_id] }), I.success(window.$t("action_delete_success")), r();
  }, u = (t) => {
    o.pageSize = t, s();
  }, x = (t) => {
    o.page = t, r();
  };
  return ie(async () => {
    r();
  }), re(() => {
  }), (t, c) => {
    const f = oe, k = j, S = J, D = ae, m = H, L = O, F = Z;
    return z(), U(F, { class: "px-[60px] py-8" }, { default: l(() => [a(f, { title: t.$t(R(V).meta.title) }, null, 8, ["title"]), n("div", he, [n("div", ge, [a(k, { modelValue: o.keyword, "onUpdate:modelValue": c[0] || (c[0] = (e) => o.keyword = e), style: { width: "268px" }, size: "large", clearable: "", "suffix-icon": R(K), placeholder: t.$t("admin_user.search_placeholder"), onChange: s }, null, 8, ["modelValue", "suffix-icon", "placeholder"]), a(S, { class: "min-w-[100px]", type: "primary", size: "large", onClick: b }, { default: l(() => [$(d(t.$t("action_add")), 1)]), _: 1 })]), n("div", be, [a(L, { data: o.list, total: o.count, style: { width: "100%" }, loading: v.value, "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", onPageSizeChange: u, onPageCurrentChange: x }, { default: l(() => [a(m, { label: t.$t("user"), "min-width": "160", prop: "nickname", "show-overflow-tooltip": "" }, { default: l(({ row: e }) => [a(D, { size: "16", color: "#C7C7C7" }, { default: l(() => [a(R(le))]), _: 1 }), n("span", we, d(e.nickname), 1)]), _: 1 }, 8, ["label"]), a(m, { label: t.$t("mobile"), "min-width": "140", prop: "mobile", "show-overflow-tooltip": "" }, { default: l(({ row: e }) => [n("span", { class: w({ "text-[#9B9B9B]": !e.mobile }) }, d(e.mobile || "--"), 3)]), _: 1 }, 8, ["label"]), a(m, { label: t.$t("email"), "min-width": "140", prop: "email", "show-overflow-tooltip": "" }, { default: l(({ row: e }) => [n("span", { class: w({ "text-[#9B9B9B]": !e.email }) }, d(e.email || "--"), 3)]), _: 1 }, 8, ["label"]), a(m, { label: t.$t("role.title"), "min-width": "120", prop: "role", "show-overflow-tooltip": "" }, { default: l(({ row: e }) => [n("span", { class: w({ "text-[#9B9B9B]": !e.role_label }) }, d(t.$t(e.role_label) || "--"), 3)]), _: 1 }, 8, ["label"]), a(m, { label: t.$t("add_time"), width: "160", prop: "add_admin_time" }, { default: l(({ row: e }) => [n("span", { class: w({ "text-[#9B9B9B]": !e.add_admin_time }) }, d((e.add_admin_time || "").slice(0, 16) || "--"), 3)]), _: 1 }, 8, ["label"]), a(m, { label: t.$t("operation"), width: "60", fixed: "right", align: "right" }, { default: l(({ row: e }) => [e.is_admin && y.value.user_id != e.user_id ? (z(), U(S, { key: 0, class: "text-[#5A6D9E] !bg-transparent", type: "text", onClick: (i) => E(e) }, { default: l(() => [$(d(t.$t("action_delete")), 1)]), _: 2 }, 1032, ["onClick"])) : (z(), ce(de, { key: 1 }, [$("--")], 64))]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data", "total", "loading"])])]), a(fe, { ref_key: "userSelectRef", ref: B }, null, 512)]), _: 1 });
  };
} });
export {
  Ke as default
};
