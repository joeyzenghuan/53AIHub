import { _ as se } from "./index-71389ea4.js";
import { _ as X } from "./index-d368b04e.js";
import { u as Y, b5 as q, r as _, ae as O, al as G, b as T, h as H, i as o, d as i, f as t, H as E, t as u, am as ne, z as R, V as K, n as y, bv as A, bw as I, X as Q, $ as Z, Y as ie, bx as D, W as M, p as re, by as de, o as ce, a as ue, bz as pe, c as me, F as _e, a9 as W, a8 as fe, y as ge } from "./index-7b696e01.js";
import { E as ee } from "./el-table-column-fe44992a.js";
import "./el-tag-63139441.js";
import { _ as be } from "./index.vue_vue_type_script_setup_true_lang-ca2646ba.js";
import { E as he, a as ve } from "./el-tab-pane-08bf2574.js";
import "./agent-fe196a62.js";
import "./el-loading-5050bc7d.js";
import "./index.vue_vue_type_script_setup_true_lang-7fe9a2b9.js";
import "./sortable.esm-437f0071.js";
import "./position-df18ca50.js";
import "./debounce-c1af5016.js";
import "./el-select-2909247e.js";
import "./el-scrollbar-a17df1f1.js";
import "./isEqual-71b69c76.js";
import "./debounce-f4e6390f.js";
import "./index-6fa206ef.js";
const we = { class: "w-full flex items-center justify-between" }, ye = { class: "py-4 flex items-center justify-between" }, ke = ["innerHTML"], $e = { class: "flex-center" }, xe = Y({ __name: "user-select-dialog", emits: ["success"], setup(te, { expose: F, emit: L }) {
  const B = L, k = q(), $ = _(), s = _(false), p = _(false), n = O({ keyword: "", page: 1, pageSize: 10 }), h = _([]), S = _(0), v = _("register"), x = _([]), l = _([]), d = G(() => {
    let e = [...x.value, ...l.value];
    return e = e.filter((c) => ![A, I].includes(Number(c.role))), e;
  });
  let b = null;
  const N = ({ value: e = [], success: c = null } = {}) => {
    n.keyword = "", x.value = [], l.value = [], s.value = true, m(), b = c;
  }, w = () => {
    s.value = false;
  }, z = async () => {
    p.value = true;
    let e = { keyword: n.keyword, offset: (n.page - 1) * n.pageSize, limit: n.pageSize };
    const { total: c = 0, list: V = [] } = await (v.value === "register" ? k.loadListData : D.fetch_internal_user)(v.value === "register" ? { data: e } : e).catch(() => {
      p.value = false;
    });
    h.value = [], await M(), h.value = [...V].map((f = {}) => f), S.value = +c || 0, d.value.length && (await M(), d.value.forEach((f = {}) => {
      const C = h.value.find((g) => g.user_id === f.user_id);
      C && $.value.toggleRowSelection(C);
    })), await M(), h.value.forEach((f = {}) => {
      [A, I].includes(Number(f.role)) && !d.value.find((g) => g.user_id === f.user_id) && $.value.toggleRowSelection(f);
    }), p.value = false;
  }, m = () => (n.page = 1, z()), P = (e) => {
    n.pageSize = e, m();
  }, U = (e) => {
    n.page = e, z();
  }, a = (e) => {
    p.value || (v.value === "register" ? x.value = [...e] : l.value = [...e]);
  }, j = (e = {}) => ![A, I].includes(Number(e.role)), le = () => {
    const e = JSON.parse(JSON.stringify(d.value));
    typeof b == "function" && b({ value: e }), B("success", { value: e }), w();
  };
  return F({ open: N, close: w }), (e, c) => {
    const V = he, f = ve, C = Q, g = ee, ae = X, J = Z, oe = ie;
    return T(), H(oe, { modelValue: s.value, "onUpdate:modelValue": c[2] || (c[2] = (r) => s.value = r), title: e.$t("action_select"), "close-on-click-modal": false, width: "800px", "destroy-on-close": "", "append-to-body": "", "align-center": "", onClose: w }, { footer: o(() => [i("div", ye, [i("div", { class: "text-sm text-[#768097] text-left", innerHTML: e.$t("selected_tip", { total: `<span class='text-[#3664EF]'>${d.value.length}</span>` }) }, null, 8, ke), i("div", $e, [t(J, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: ne(w, ["stop"]) }, { default: o(() => [E(u(e.$t("action_cancel")), 1)]), _: 1 }), t(J, { class: "w-[96px] h-[36px]", type: "primary", loading: p.value, disabled: !d.value.length, onClick: le }, { default: o(() => [E(u(e.$t("action_confirm")), 1)]), _: 1 }, 8, ["loading", "disabled"])])])]), default: o(() => [i("div", we, [t(f, { modelValue: v.value, "onUpdate:modelValue": c[0] || (c[0] = (r) => v.value = r), onTabClick: m }, { default: o(() => [t(V, { label: e.$t("register_user.title"), name: "register", lazy: "" }, null, 8, ["label"]), t(V, { label: e.$t("internal_user.title"), name: "internal", lazy: "" }, null, 8, ["label"])]), _: 1 }, 8, ["modelValue"]), t(C, { modelValue: n.keyword, "onUpdate:modelValue": c[1] || (c[1] = (r) => n.keyword = r), style: { width: "220px" }, size: "default", clearable: "", "suffix-icon": R(K), placeholder: e.$t("module.operation_user_search_placeholder"), onChange: m }, null, 8, ["modelValue", "suffix-icon", "placeholder"])]), t(ae, { ref_key: "tableRef", ref: $, class: "mt-5", data: h.value, total: S.value, page: n.page, limit: n.pageSize, style: { width: "100%" }, "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", loading: p.value, onPageSizeChange: P, onPageCurrentChange: U, onSelectionChange: a }, { default: o(() => [t(g, { type: "selection", width: "40", selectable: j }), t(g, { label: e.$t("user"), "min-width": "140", prop: "nickname", "show-overflow-tooltip": "" }, null, 8, ["label"]), t(g, { label: e.$t("mobile"), "min-width": "140", prop: "mobile", "show-overflow-tooltip": "" }, { default: o(({ row: r }) => [i("span", { class: y({ "text-[#9B9B9B]": !r.mobile }) }, u(r.mobile || "--"), 3)]), _: 1 }, 8, ["label"]), t(g, { label: e.$t("email"), "min-width": "140", prop: "email", "show-overflow-tooltip": "" }, { default: o(({ row: r }) => [i("span", { class: y({ "text-[#9B9B9B]": !r.email }) }, u(r.email || "--"), 3)]), _: 1 }, 8, ["label"]), t(g, { label: e.$t("register_time"), width: "160", prop: "register_time" }, { default: o(({ row: r }) => [i("span", { class: y({ "text-[#9B9B9B]": !r.register_time }) }, u((r.register_time || "").slice(0, 16) || "--"), 3)]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data", "total", "page", "limit", "loading"])]), _: 1 }, 8, ["modelValue", "title"]);
  };
} });
const Ce = re(xe, [["__scopeId", "data-v-e8f37065"]]), Ee = { class: "flex-1 flex flex-col bg-white p-6 mt-3 box-border max-h-[calc(100vh-100px)] overflow-auto" }, Be = { class: "flex items-center justify-between" }, Se = { class: "flex-1 overflow-y-auto bg-white rounded-lg mt-4" }, ze = { class: "flex items-center gap-1 w-full" }, Ve = { class: "truncate" }, qe = Y({ __name: "index", setup(te) {
  const F = de(), L = q(), B = _();
  O({ keyword: "" });
  const k = _(false), $ = G(() => L.info), s = O({ keyword: "", page: 1, pageSize: 10, count: 0, list: [] }), p = async () => {
    k.value = true;
    const { total: l = 0, list: d = [] } = await D.fetch_admin_user({ keyword: s.keyword, offset: (s.page - 1) * s.pageSize, limit: s.pageSize }).finally(() => {
      k.value = false;
    });
    s.count = +l || 0, s.list = [...d];
  }, n = () => (s.page = 1, p()), h = ({ data: l = {} } = {}) => {
    B.value.open({ success: ({ value: d }) => {
      D.batch_save_admin({ user_ids: d.map((b) => b.user_id) }).then((b) => {
        W.success(window.$t("action_add_success")), n();
      });
    } });
  }, S = async (l) => {
    await fe.confirm(window.$t("admin_user.delete_confirm")), await D.batch_remove_admin({ user_ids: [l.user_id] }), W.success(window.$t("action_delete_success")), p();
  }, v = (l) => {
    s.pageSize = l, n();
  }, x = (l) => {
    s.page = l, p();
  };
  return ce(async () => {
    p();
  }), ue(() => {
  }), (l, d) => {
    const b = be, N = Q, w = Z, z = ge, m = ee, P = X, U = se;
    return T(), H(U, { class: "px-[60px] py-8" }, { default: o(() => [t(b, { title: l.$t(R(F).meta.title) }, null, 8, ["title"]), i("div", Ee, [i("div", Be, [t(N, { modelValue: s.keyword, "onUpdate:modelValue": d[0] || (d[0] = (a) => s.keyword = a), style: { width: "268px" }, size: "large", clearable: "", "suffix-icon": R(K), placeholder: l.$t("admin_user.search_placeholder"), onChange: n }, null, 8, ["modelValue", "suffix-icon", "placeholder"]), t(w, { class: "min-w-[100px]", type: "primary", size: "large", onClick: h }, { default: o(() => [E(u(l.$t("action_add")), 1)]), _: 1 })]), i("div", Se, [t(P, { data: s.list, total: s.count, style: { width: "100%" }, loading: k.value, "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", onPageSizeChange: v, onPageCurrentChange: x }, { default: o(() => [t(m, { label: l.$t("user"), "min-width": "160", prop: "nickname", "show-overflow-tooltip": "" }, { default: o(({ row: a }) => [i("div", ze, [t(z, { size: "16", color: "#C7C7C7" }, { default: o(() => [t(R(pe))]), _: 1 }), i("div", Ve, u(a.nickname), 1)])]), _: 1 }, 8, ["label"]), t(m, { label: l.$t("mobile"), "min-width": "140", prop: "mobile", "show-overflow-tooltip": "" }, { default: o(({ row: a }) => [i("span", { class: y({ "text-[#9B9B9B]": !a.mobile }) }, u(a.mobile || "--"), 3)]), _: 1 }, 8, ["label"]), t(m, { label: l.$t("email"), "min-width": "140", prop: "email", "show-overflow-tooltip": "" }, { default: o(({ row: a }) => [i("span", { class: y({ "text-[#9B9B9B]": !a.email }) }, u(a.email || "--"), 3)]), _: 1 }, 8, ["label"]), t(m, { label: l.$t("role.title"), "min-width": "120", prop: "role", "show-overflow-tooltip": "" }, { default: o(({ row: a }) => [i("span", { class: y({ "text-[#9B9B9B]": !a.role_label }) }, u(l.$t(a.role_label) || "--"), 3)]), _: 1 }, 8, ["label"]), t(m, { label: l.$t("add_time"), width: "160", prop: "add_admin_time" }, { default: o(({ row: a }) => [i("span", { class: y({ "text-[#9B9B9B]": !a.add_admin_time }) }, u((a.add_admin_time || "").slice(0, 16) || "--"), 3)]), _: 1 }, 8, ["label"]), t(m, { label: l.$t("operation"), width: "60", fixed: "right", align: "right" }, { default: o(({ row: a }) => [a.is_admin && $.value.user_id != a.user_id ? (T(), H(w, { key: 0, class: "text-[#5A6D9E] !bg-transparent", type: "text", onClick: (j) => S(a) }, { default: o(() => [E(u(l.$t("action_delete")), 1)]), _: 2 }, 1032, ["onClick"])) : (T(), me(_e, { key: 1 }, [E("--")], 64))]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data", "total", "loading"])])]), t(Ce, { ref_key: "userSelectRef", ref: B }, null, 512)]), _: 1 });
  };
} });
export {
  qe as default
};
