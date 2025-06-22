import { y as ae, E as ne, r, Z as se, ai as le, o as ie, N as b, a as re, c as h, f as a, w as l, F as A, n as pe, P as U, aj as de, C as P, ab as F, b as w, L as g, t as i, d as s, u as ue, m as _e, p as ce, q as me, K as O, a9 as I, a4 as G, R as ge, I as fe } from "./index-8579fe4a.js";
import { E as he } from "./el-drawer-393896dd.js";
import { _ as we } from "./index-ad57f5b2.js";
import { E as ve, _ as ye } from "./el-table-column-376475e4.js";
import { E as be } from "./el-switch-1a77f9ca.js";
import "./el-checkbox-a21716fc.js";
import "./el-tag-0b6baecb.js";
import { _ as xe } from "./index.vue_vue_type_style_index_0_lang-e49eb195.js";
import { _ as $e } from "./index-3e1ea7e0.js";
import { _ as Ce } from "./index.vue_vue_type_script_setup_true_lang-e4a54f30.js";
import { _ as Ee } from "./drawer.vue_vue_type_script_setup_true_lang-6dfd020c.js";
import { a as T } from "./agent-f71520b7.js";
import { p as ke } from "./provider-31cc620c.js";
import { s as Ae } from "./subscription-ce932ddf.js";
import { b as Pe } from "./group-39bff2fe.js";
import "./el-loading-8747b309.js";
import "./el-select-8a770a23.js";
import "./el-scrollbar-4065fe54.js";
import "./isEqual-8c73ec38.js";
import "./debounce-484109dd.js";
import "./sortable.esm-7ba019b6.js";
import "./index.vue_vue_type_script_setup_true_lang-dd688c6c.js";
import "./position-4ca9dd9d.js";
import "./el-tab-pane-e22c8d9b.js";
import "./index-3dae9a97.js";
import "./el-dropdown-menu-ce96a192.js";
import "./dropdown-85221e0a.js";
import "./el-divider-7d014453.js";
const Te = { class: "flex items-center justify-between mt-5" }, Ve = { class: "flex-1 w-0" }, ze = { class: "flex-none flex-center gap-3 ml-8" }, Be = { class: "text-sm" }, De = { class: "flex-1 overflow-y-auto bg-white rounded-lg px-5 py-5 mt-4" }, Re = { class: "flex items-center gap-2 w-full" }, Se = ["src"], Le = { class: "flex-1 w-0 text-sm flex flex-col" }, Ne = { class: "text-[#2563EB] truncate" }, Ue = { class: "w-full min-h-[300px] overflow-y-auto" }, Fe = { class: "text-sm text-[#939499]" }, Oe = { class: "flex flex-col gap-5 pt-4 pb-6" }, Ie = ["src"], Ge = { class: "flex-1 text-base text-[#1D1E1F] truncate" }, je = ae({ __name: "index", setup(qe) {
  const V = ne(), x = r(), z = r(), n = se({ group_id: "-1", keyword: "", page: 1, page_size: 10 }), $ = r([]), B = r(0), C = r(false), v = r(false), j = r(le(de)), E = r([]), q = async () => {
    E.value.length || (E.value = await Ae.list({ params: { offset: 0, limit: 1e3 } }));
  }, u = async () => {
    C.value = true, await q();
    try {
      const { count: e = 0, agents: o = [] } = await T.list({ params: { group_id: n.group_id, keyword: n.keyword, offset: (n.page - 1) * n.page_size, limit: n.page_size } });
      B.value = e, $.value = [], await pe(), $.value = o.map((p = {}) => {
        const d = p;
        return d.user_group_ids = d.user_group_ids || [], d.user_group_names = d.user_group_ids.map((f) => {
          var _a;
          return ((_a = E.value.find((k) => k.group_id === f)) == null ? void 0 : _a.group_name) || "";
        }).filter((f) => !!f), d;
      });
    } finally {
      C.value = false;
    }
  }, _ = async () => {
    n.page = 1, await u();
  }, M = (e) => {
    n.page_size = e, _();
  }, Z = (e) => {
    n.page = e, u();
  }, Y = async ({ data: { agent_id: e } }) => {
    await F.confirm(window.$t("agent_delete_confirm"), window.$t("action_delete")), await T.delete({ data: { agent_id: e } }), I.success(window.$t("action_delete_success")), u();
  }, D = r(false), R = r(false), H = async () => {
    const e = await ke.list();
    D.value = !!e.find((o) => o.provider_type === U.COZE_CN), R.value = !!e.find((o) => o.provider_type === U.APP_BUILDER);
  }, S = (e) => new Promise((o, p) => {
    if (!D.value && P.COZE_AGENT_CN === e || !R.value && P.APP_BUILDER === e)
      return p(new Error("Authentication required")), F.confirm(window.$t(P.APP_BUILDER === e ? "app_builder_not_auth" : "coze_cn_not_auth", window.$t("tip")), window.$t("tip"), { confirmButtonText: window.$t("action_go"), cancelButtonText: window.$t("action_cancel"), type: "warning" }).then(() => {
        V.push({ name: "Platform" });
      });
    o();
  }), K = async (e) => {
    await S(e.value), z.value.open({ agent_type: e.value, group_id: +n.group_id > 0 ? n.group_id : void 0, data: { channel_config: { channel_type: e.channel_type } } }), v.value = false;
  }, L = async (e, o = {}) => {
    await S(e), u(), await V.push({ name: "AgentCreate", query: o.agent_id ? { type: o.agent_type, agent_id: o.agent_id } : { type: e, group_id: +n.group_id > 0 ? n.group_id : void 0 } });
  }, J = async ({ data: { agent_id: e, enable: o } }) => {
    await T.updateStatus({ data: { agent_id: e, enable: o } }), I.success(window.$t(o ? "action_enable_success" : "action_disable_success"));
  }, Q = () => {
  };
  return ie(() => {
    _(), H(), b.on("user-login-success", _), b.on("agent-change", u);
  }), re(() => {
    b.off("user-login-success", _), b.off("agent-change", u);
  }), (e, o) => {
    const p = G, d = Ce, f = $e, N = xe, k = ge, c = ve, W = be, X = ye, ee = we, te = G, oe = he;
    return w(), h(A, null, [a(ee, { class: "px-[60px] py-8" }, { default: l(() => [a(d, { title: e.$t("module.agent") }, { right: l(() => [a(p, { type: "primary", size: "large", onClick: o[0] || (o[0] = (t) => v.value = true) }, { default: l(() => [g(" + " + i(e.$t("action_add")), 1)]), _: 1 })]), _: 1 }, 8, ["title"]), s("div", Te, [s("div", Ve, [a(f, { ref_key: "groupTabsRef", ref: x, modelValue: n.group_id, "onUpdate:modelValue": o[1] || (o[1] = (t) => n.group_id = t), "group-type": ue(Pe), onChange: _ }, null, 8, ["modelValue", "group-type"])]), s("div", ze, [a(N, { modelValue: n.keyword, "onUpdate:modelValue": o[2] || (o[2] = (t) => n.keyword = t), placeholder: "module.agent_search_placeholder", onChange: _ }, null, 8, ["modelValue"]), s("div", { class: "flex items-center gap-1 whitespace-nowrap cursor-pointer text-[#576D9C]", onClick: o[3] || (o[3] = (...t) => x.value.open && x.value.open(...t)) }, [a(k, { name: "cate-manage", width: "14px", height: "14px" }), s("div", Be, i(e.$t("group")), 1)])])]), s("div", De, [a(X, { "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", data: $.value, total: B.value, loading: C.value, page: n.page, limit: n.page_size, onPageSizeChange: M, onPageCurrentChange: Z }, { default: l(() => [a(c, { prop: "date", label: e.$t("module.agent"), "min-width": "180", "show-overflow-tooltip": "" }, { default: l(({ row: t }) => [s("div", Re, [s("img", { class: "flex-none w-8 h-8 rounded-full overflow-hidden", src: t.logo, alt: "" }, null, 8, Se), s("div", Le, [s("div", Ne, i(t.name || "--"), 1), _e(s("div", { class: "text-xs text-[#808080] truncate" }, i(t.description || ""), 513), [[ce, t.description]])])])]), _: 1 }, 8, ["label"]), a(c, { label: e.$t("usage_range"), "min-width": "140", "show-overflow-tooltip": "" }, { default: l(({ row: t }) => [s("span", { class: me(t.user_group_names.length ? "" : "text-[#999]") }, i(t.user_group_names.join("\u3001") || "--"), 3)]), _: 1 }, 8, ["label"]), a(c, { label: e.$t("type"), width: "140", "show-overflow-tooltip": "" }, { default: l(({ row: t = {} }) => [g(i(e.$t(t.agent_type_label) || "--"), 1)]), _: 1 }, 8, ["label"]), a(c, { label: e.$t("sort"), width: "80", "show-overflow-tooltip": "" }, { default: l(({ row: t = {} }) => [g(i(t.sort), 1)]), _: 1 }, 8, ["label"]), a(c, { label: e.$t("action_enable"), width: "80" }, { default: l(({ row: t }) => [a(W, { modelValue: t.enable, "onUpdate:modelValue": (m) => t.enable = m, onChange: (m) => J({ data: t }) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), _: 1 }, 8, ["label"]), a(c, { label: e.$t("operation"), width: "120", align: "right", fixed: "right" }, { default: l(({ row: t }) => [a(p, { type: "primary", link: "", onClick: (m) => L(t.agent_type, t) }, { default: l(() => [g(i(e.$t("action_edit")), 1)]), _: 2 }, 1032, ["onClick"]), a(p, { type: "primary", link: "", onClick: (m) => Y({ data: t }) }, { default: l(() => [g(i(e.$t("action_delete")), 1)]), _: 2 }, 1032, ["onClick"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data", "total", "loading", "page", "limit"])])]), _: 1 }), a(oe, { modelValue: v.value, "onUpdate:modelValue": o[4] || (o[4] = (t) => v.value = t), title: e.$t("action_add"), size: "650px", onOpened: Q }, { default: l(() => [s("ul", Ue, [(w(true), h(A, null, O(j.value, (t, m) => (w(), h("li", { key: m }, [s("h4", Fe, i(e.$t(t.title)), 1), s("ul", Oe, [(w(true), h(A, null, O(t.children, (y) => (w(), h("li", { key: y.value, class: "h-[72px] px-6 rounded flex items-center gap-3 bg-[#F8F9FA] cursor-pointer hover:shadow" }, [s("img", { class: "flex-none size-10 rounded-lg", src: y.icon, alt: "" }, null, 8, Ie), s("div", Ge, i(e.$t(y.label)), 1), a(te, { type: "primary", plain: "", class: "border-none", onClick: (Me) => K(y) }, { default: l(() => [g(i(e.$t("action_add")), 1)]), _: 2 }, 1032, ["onClick"])]))), 128))])]))), 128))])]), _: 1 }, 8, ["modelValue", "title"]), a(Ee, { ref_key: "createDrawerRef", ref: z, onSuccess: o[5] || (o[5] = (t) => L(t.agent_type, t)) }, null, 512)], 64);
  };
} });
const bt = fe(je, [["__scopeId", "data-v-3f0deb76"]]);
export {
  bt as default
};
