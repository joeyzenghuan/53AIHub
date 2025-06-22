import { _ as se } from "./index-ad57f5b2.js";
import { E as G, _ as K } from "./el-table-column-376475e4.js";
import { y as Y, ak as Z, r as _, Z as O, Y as Q, b as L, j, w as o, d as i, f as t, L as E, t as u, x as ne, u as R, a0 as W, q as y, bK as M, bL as A, n as V, a5 as X, a4 as ee, a6 as ie, bM as D, I as re, aa as ce, o as de, a as ue, bN as pe, c as me, F as _e, a9 as q, ab as fe, G as ge } from "./index-8579fe4a.js";
import "./el-checkbox-a21716fc.js";
import "./el-tag-0b6baecb.js";
import { _ as be } from "./index.vue_vue_type_script_setup_true_lang-e4a54f30.js";
import { E as he, a as ve } from "./el-tab-pane-e22c8d9b.js";
import "./el-loading-8747b309.js";
import "./el-select-8a770a23.js";
import "./el-scrollbar-4065fe54.js";
import "./isEqual-8c73ec38.js";
import "./debounce-484109dd.js";
import "./sortable.esm-7ba019b6.js";
import "./index-3dae9a97.js";
const we = { class: "w-full flex items-center justify-between" }, ye = { class: "py-4 flex items-center justify-between" }, ke = ["innerHTML"], xe = { class: "flex-center" }, $e = Y({ __name: "user-select-dialog", emits: ["success"], setup(te, { expose: F, emit: N }) {
  const B = N, k = Z(), x = _(), s = _(false), p = _(false), n = O({ keyword: "", page: 1, pageSize: 10 }), v = _([]), S = _(0), b = _("register"), $ = _([]), a = _([]), c = Q(() => {
    let e = [...$.value, ...a.value];
    return e = e.filter((d) => ![M, A].includes(Number(d.role))), e;
  });
  let h = null;
  const P = ({ value: e = [], success: d = null } = {}) => {
    n.keyword = "", $.value = [], a.value = [], s.value = true, b.value = "register", m(), h = d;
  }, w = () => {
    s.value = false;
  }, z = async () => {
    p.value = true;
    const e = { keyword: n.keyword, offset: (n.page - 1) * n.pageSize, limit: n.pageSize }, { total: d = 0, list: T = [] } = await (b.value === "register" ? k.loadListData : D.fetch_internal_user)(b.value === "register" ? { data: e } : e).catch(() => {
      p.value = false;
    });
    v.value = [], await V(), v.value = [...T].map((f = {}) => f), S.value = +d || 0, c.value.length && (await V(), c.value.forEach((f = {}) => {
      const C = v.value.find((g) => g.user_id === f.user_id);
      C && x.value.toggleRowSelection(C);
    })), await V(), v.value.forEach((f = {}) => {
      [M, A].includes(Number(f.role)) && !c.value.find((g) => g.user_id === f.user_id) && x.value.toggleRowSelection(f);
    }), p.value = false;
  }, m = () => {
    V(() => (n.page = 1, z()));
  }, U = (e) => {
    n.pageSize = e, m();
  }, I = (e) => {
    n.page = e, z();
  }, l = (e) => {
    p.value || (b.value === "register" ? $.value = [...e] : a.value = [...e]);
  }, H = (e = {}) => ![M, A].includes(Number(e.role)), ae = () => {
    const e = JSON.parse(JSON.stringify(c.value));
    typeof h == "function" && h({ value: e }), B("success", { value: e }), w();
  };
  return F({ open: P, close: w }), (e, d) => {
    const T = he, f = ve, C = X, g = G, le = K, J = ee, oe = ie;
    return L(), j(oe, { modelValue: s.value, "onUpdate:modelValue": d[2] || (d[2] = (r) => s.value = r), title: e.$t("action_select"), "close-on-click-modal": false, width: "800px", "destroy-on-close": "", "append-to-body": "", "align-center": "", onClose: w }, { footer: o(() => [i("div", ye, [i("div", { class: "text-sm text-[#768097] text-left", innerHTML: e.$t("selected_tip", { total: `<span class='text-[#3664EF]'>${c.value.length}</span>` }) }, null, 8, ke), i("div", xe, [t(J, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: ne(w, ["stop"]) }, { default: o(() => [E(u(e.$t("action_cancel")), 1)]), _: 1 }), t(J, { class: "w-[96px] h-[36px]", type: "primary", loading: p.value, disabled: !c.value.length, onClick: ae }, { default: o(() => [E(u(e.$t("action_confirm")), 1)]), _: 1 }, 8, ["loading", "disabled"])])])]), default: o(() => [i("div", we, [t(f, { modelValue: b.value, "onUpdate:modelValue": d[0] || (d[0] = (r) => b.value = r), onTabClick: m }, { default: o(() => [t(T, { label: e.$t("register_user.title"), name: "register", lazy: "" }, null, 8, ["label"]), t(T, { label: e.$t("internal_user.title"), name: "internal", lazy: "" }, null, 8, ["label"])]), _: 1 }, 8, ["modelValue"]), t(C, { modelValue: n.keyword, "onUpdate:modelValue": d[1] || (d[1] = (r) => n.keyword = r), style: { width: "220px" }, size: "default", clearable: "", "suffix-icon": R(W), placeholder: e.$t("module.operation_user_search_placeholder"), onChange: m }, null, 8, ["modelValue", "suffix-icon", "placeholder"])]), t(le, { ref_key: "tableRef", ref: x, class: "mt-5", data: v.value, total: S.value, page: n.page, limit: n.pageSize, style: { width: "100%" }, "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", loading: p.value, onPageSizeChange: U, onPageCurrentChange: I, onSelectionChange: l }, { default: o(() => [t(g, { type: "selection", width: "40", selectable: H }), t(g, { label: e.$t("user"), "min-width": "140", prop: "nickname", "show-overflow-tooltip": "" }, null, 8, ["label"]), t(g, { label: e.$t("mobile"), "min-width": "140", prop: "mobile", "show-overflow-tooltip": "" }, { default: o(({ row: r }) => [i("span", { class: y({ "text-[#9B9B9B]": !r.mobile }) }, u(r.mobile || "--"), 3)]), _: 1 }, 8, ["label"]), t(g, { label: e.$t("email"), "min-width": "140", prop: "email", "show-overflow-tooltip": "" }, { default: o(({ row: r }) => [i("span", { class: y({ "text-[#9B9B9B]": !r.email }) }, u(r.email || "--"), 3)]), _: 1 }, 8, ["label"]), t(g, { label: e.$t("register_time"), width: "160", prop: "register_time" }, { default: o(({ row: r }) => [i("span", { class: y({ "text-[#9B9B9B]": !r.register_time }) }, u((r.register_time || "").slice(0, 16) || "--"), 3)]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data", "total", "page", "limit", "loading"])]), _: 1 }, 8, ["modelValue", "title"]);
  };
} });
const Ce = re($e, [["__scopeId", "data-v-725fe343"]]), Ee = { class: "flex-1 flex flex-col bg-white p-6 mt-3 box-border max-h-[calc(100vh-100px)] overflow-auto" }, Be = { class: "flex items-center justify-between" }, Se = { class: "flex-1 overflow-y-auto bg-white rounded-lg mt-4" }, ze = { class: "flex items-center gap-1 w-full" }, Te = { class: "truncate" }, Je = Y({ __name: "index", setup(te) {
  const F = ce(), N = Z(), B = _();
  O({ keyword: "" });
  const k = _(false), x = Q(() => N.info), s = O({ keyword: "", page: 1, pageSize: 10, count: 0, list: [] }), p = async () => {
    k.value = true;
    const { total: a = 0, list: c = [] } = await D.fetch_admin_user({ keyword: s.keyword, offset: (s.page - 1) * s.pageSize, limit: s.pageSize }).finally(() => {
      k.value = false;
    });
    s.count = +a || 0, s.list = [...c];
  }, n = () => (s.page = 1, p()), v = ({ data: a = {} } = {}) => {
    B.value.open({ success: ({ value: c }) => {
      D.batch_save_admin({ user_ids: c.map((h) => h.user_id) }).then((h) => {
        q.success(window.$t("action_add_success")), n();
      });
    } });
  }, S = async (a) => {
    await fe.confirm(window.$t("admin_user.delete_confirm")), await D.batch_remove_admin({ user_ids: [a.user_id] }), q.success(window.$t("action_delete_success")), p();
  }, b = (a) => {
    s.pageSize = a, n();
  }, $ = (a) => {
    s.page = a, p();
  };
  return de(async () => {
    p();
  }), ue(() => {
  }), (a, c) => {
    const h = be, P = X, w = ee, z = ge, m = G, U = K, I = se;
    return L(), j(I, { class: "px-[60px] py-8" }, { default: o(() => [t(h, { title: a.$t(R(F).meta.title) }, null, 8, ["title"]), i("div", Ee, [i("div", Be, [t(P, { modelValue: s.keyword, "onUpdate:modelValue": c[0] || (c[0] = (l) => s.keyword = l), style: { width: "268px" }, size: "large", clearable: "", "suffix-icon": R(W), placeholder: a.$t("admin_user.search_placeholder"), onChange: n }, null, 8, ["modelValue", "suffix-icon", "placeholder"]), t(w, { class: "min-w-[100px]", type: "primary", size: "large", onClick: v }, { default: o(() => [E(" + " + u(a.$t("action_add")), 1)]), _: 1 })]), i("div", Se, [t(U, { data: s.list, total: s.count, style: { width: "100%" }, loading: k.value, "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", onPageSizeChange: b, onPageCurrentChange: $ }, { default: o(() => [t(m, { label: a.$t("user"), "min-width": "160", prop: "nickname", "show-overflow-tooltip": "" }, { default: o(({ row: l }) => [i("div", ze, [t(z, { size: "16", color: "#C7C7C7" }, { default: o(() => [t(R(pe))]), _: 1 }), i("div", Te, u(l.nickname), 1)])]), _: 1 }, 8, ["label"]), t(m, { label: a.$t("mobile"), "min-width": "140", prop: "mobile", "show-overflow-tooltip": "" }, { default: o(({ row: l }) => [i("span", { class: y({ "text-[#9B9B9B]": !l.mobile }) }, u(l.mobile || "--"), 3)]), _: 1 }, 8, ["label"]), t(m, { label: a.$t("email"), "min-width": "140", prop: "email", "show-overflow-tooltip": "" }, { default: o(({ row: l }) => [i("span", { class: y({ "text-[#9B9B9B]": !l.email }) }, u(l.email || "--"), 3)]), _: 1 }, 8, ["label"]), t(m, { label: a.$t("role.title"), "min-width": "120", prop: "role", "show-overflow-tooltip": "" }, { default: o(({ row: l }) => [i("span", { class: y({ "text-[#9B9B9B]": !l.role_label }) }, u(a.$t(l.role_label) || "--"), 3)]), _: 1 }, 8, ["label"]), t(m, { label: a.$t("add_time"), width: "160", prop: "add_admin_time" }, { default: o(({ row: l }) => [i("span", { class: y({ "text-[#9B9B9B]": !l.add_admin_time }) }, u((l.add_admin_time || "").slice(0, 16) || "--"), 3)]), _: 1 }, 8, ["label"]), t(m, { label: a.$t("operation"), width: "60", fixed: "right", align: "right" }, { default: o(({ row: l }) => [l.is_admin && x.value.user_id != l.user_id ? (L(), j(w, { key: 0, class: "text-[#5A6D9E] !bg-transparent", type: "text", onClick: (H) => S(l) }, { default: o(() => [E(u(a.$t("action_delete")), 1)]), _: 2 }, 1032, ["onClick"])) : (L(), me(_e, { key: 1 }, [E(" -- ")], 64))]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data", "total", "loading"])])]), t(Ce, { ref_key: "userSelectRef", ref: B }, null, 512)]), _: 1 });
  };
} });
export {
  Je as default
};
