import { u as F, b as g, h as ae, i as s, f as a, H as d, t as i, $ as G, x as ne, r as _, ae as se, a7 as le, o as ie, J as E, a as re, c as y, F as P, W as _e, ah as de, ai as pe, aj as ue, Y as ce, d as l, z as me, g as ge, v as fe, n as O, G as I, a8 as L, a9 as k, L as he, p as we } from "./index-6feda8be.js";
import { _ as ve } from "./index-35dfd48d.js";
import { _ as ye } from "./index-72b6e71e.js";
import { E as be } from "./el-switch-d1b774bc.js";
import { E as Ee } from "./el-table-column-97a25b03.js";
import "./el-tag-41766c4c.js";
import { _ as $e } from "./index.vue_vue_type_style_index_0_lang-000d3c45.js";
import { _ as Te } from "./index-da827d3a.js";
import { _ as xe } from "./index.vue_vue_type_script_setup_true_lang-bf5c9b93.js";
import { E as Ce } from "./el-drawer-b7fa9cba.js";
import { _ as Ae } from "./index.vue_vue_type_script_setup_true_lang-1b57cb11.js";
import { a as V, A as Pe, b as Y, c as N, d as ke, e as Ve, f as Ne } from "./agent-fc880aa9.js";
import { s as Ge } from "./subscription-7ceb7995.js";
import { G as ze } from "./group-acb26c68.js";
import "./el-loading-7d1392af.js";
import "./index.vue_vue_type_script_setup_true_lang-b4d73f03.js";
import "./sortable.esm-437f0071.js";
import "./position-80aa4e7f.js";
import "./debounce-bf10b7f9.js";
import "./el-select-15a52e42.js";
import "./el-scrollbar-1c0147c5.js";
import "./isEqual-8788d17b.js";
import "./debounce-f4e6390f.js";
import "./el-tab-pane-d10c2129.js";
import "./index-43e50f65.js";
import "./el-input-number-a4222484.js";
import "./index-17af2188.js";
import "./image.vue_vue_type_style_index_0_lang-eb9d831e.js";
import "./el-radio-7abec385.js";
import "./dropdown-4cbb8c7d.js";
const Be = F({ __name: "drawer", setup(R) {
  return (p, b) => {
    const f = G, n = Ce;
    return g(), ae(n, { title: p.$t("action_add"), size: "840px" }, { footer: s(() => [a(f, { size: "large" }, { default: s(() => [d(i(p.$t("action_cancel")), 1)]), _: 1 }), a(f, { type: "primary", size: "large" }, { default: s(() => [d(i(p.$t("action_confirm")), 1)]), _: 1 })]), default: s(() => [a(Ae, { "agent-type": "dify_agent" })]), _: 1 }, 8, ["title"]);
  };
} }), De = { class: "flex items-center justify-between mt-5" }, Se = { class: "flex-1 w-0" }, Oe = { class: "flex-none flex-center gap-3 ml-8" }, Ie = { class: "text-sm" }, Le = { class: "flex-1 overflow-y-auto bg-white rounded-lg px-5 py-5 mt-4" }, Ye = { class: "flex items-center gap-2 w-full" }, Fe = ["src"], Re = { class: "flex-1 w-0 text-sm flex flex-col" }, Ue = { class: "text-[#2563EB] truncate" }, Me = { class: "w-full min-h-[300px] overflow-y-auto" }, je = { class: "text-sm text-[#939499]" }, He = { class: "grid grid-cols-3 gap-5 pt-4 pb-6" }, We = ["src"], Ze = { class: "flex-1 truncate" }, qe = F({ name: "Agent", __name: "index", setup(R) {
  const p = ne(), b = _(), f = [Y, N, ke, Ve, Ne], n = se({ group_id: "-1", keyword: "", page: 1, page_size: 10 }), $ = _([]), z = _(0), T = _(false), x = _(false), U = _(le(Pe)), C = _([]), M = async () => {
    C.value.length || (C.value = await Ge.list({ params: { offset: 0, limit: 1e3 } }));
  }, h = async () => {
    T.value = true, await M();
    const { count: e = 0, agents: o = [] } = await V.list({ params: { group_id: n.group_id, keyword: n.keyword, offset: (n.page - 1) * n.page_size, limit: n.page_size } }).finally(() => {
      T.value = false;
    });
    z.value = e, $.value = [], await _e(), $.value = o.map((r = {}) => (r.user_group_ids = r.user_group_ids || [], r.user_group_names = r.user_group_ids.map((w) => (C.value.find((A) => A.group_id == w) || {}).group_name).filter((w) => w), r));
  }, u = async () => {
    n.page = 1, await h();
  }, j = (e) => {
    n.page_size = e, u();
  }, H = (e) => {
    n.page = e, h();
  }, W = async ({ data: { agent_id: e } }) => {
    await L.confirm(window.$t("agent_delete_confirm"), window.$t("action_delete")), await V.delete({ data: { agent_id: e } }), k.success(window.$t("action_delete_success")), h();
  }, B = async (e, o = {}) => {
    if (!f.includes(e))
      return k.warning(window.$t("feature_coming_soon"));
    if (!D.value && Y == e || !S.value && N == e)
      return L.confirm(window.$t(N == e ? "app_builder_not_auth" : "coze_cn_not_auth", window.$t("tip")), window.$t("tip"), { confirmButtonText: window.$t("action_go"), cancelButtonText: window.$t("action_cancel"), type: "warning" }).then(() => {
        p.push({ name: "Platform" });
      });
    await p.push({ name: "AgentCreate", query: o.agent_id ? { type: o.agent_type, agent_id: o.agent_id } : { type: e, group_id: +n.group_id > 0 ? n.group_id : void 0 } });
  }, Z = async ({ data: { agent_id: e, enable: o } }) => {
    await V.updateStatus({ data: { agent_id: e, enable: o } }), k.success(window.$t(o ? "action_enable_success" : "action_disable_success"));
  }, D = _(false), S = _(false), q = async () => {
    const e = await de.list();
    D.value = !!e.find((o) => o.provider_type == pe), S.value = !!e.find((o) => o.provider_type == ue);
  };
  return ie(() => {
    u(), q(), E.on("user-login-success", u), E.on("agent-change", h);
  }), re(() => {
    E.off("user-login-success", u), E.off("agent-change", h);
  }), (e, o) => {
    const r = G, w = xe, A = Te, J = $e, K = he, c = Ee, Q = be, X = ye, ee = ve, te = G, oe = ce;
    return g(), y(P, null, [a(ee, { class: "px-[60px] py-8" }, { default: s(() => [a(w, { title: e.$t("module.agent") }, { right: s(() => [a(r, { type: "primary", onClick: o[0] || (o[0] = (t) => x.value = true) }, { default: s(() => [d(" + " + i(e.$t("action_add")), 1)]), _: 1 })]), _: 1 }, 8, ["title"]), l("div", De, [l("div", Se, [a(A, { ref_key: "group_tabs_ref", ref: b, modelValue: n.group_id, "onUpdate:modelValue": o[1] || (o[1] = (t) => n.group_id = t), "group-type": me(ze), onChange: u }, null, 8, ["modelValue", "group-type"])]), l("div", Oe, [a(J, { modelValue: n.keyword, "onUpdate:modelValue": o[2] || (o[2] = (t) => n.keyword = t), placeholder: "module.agent_search_placeholder", onChange: u }, null, 8, ["modelValue"]), l("div", { class: "flex items-center gap-1 whitespace-nowrap cursor-pointer text-[#576D9C]", onClick: o[3] || (o[3] = (...t) => b.value.open && b.value.open(...t)) }, [a(K, { name: "cate-manage", width: "14px", height: "14px" }), l("div", Ie, i(e.$t("group")), 1)])])]), l("div", Le, [a(X, { "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", data: $.value, total: z.value, loading: T.value, page: n.page, limit: n.page_size, onPageSizeChange: j, onPageCurrentChange: H }, { default: s(() => [a(c, { prop: "date", label: e.$t("module.agent"), "min-width": "180", "show-overflow-tooltip": "" }, { default: s(({ row: t }) => [l("div", Ye, [l("img", { class: "flex-none w-8 h-8 rounded-full overflow-hidden", src: t.logo, alt: "" }, null, 8, Fe), l("div", Re, [l("div", Ue, i(t.name || "--"), 1), ge(l("div", { class: "text-xs text-[#808080] truncate" }, i(t.description || ""), 513), [[fe, t.description]])])])]), _: 1 }, 8, ["label"]), a(c, { label: e.$t("usage_range"), "min-width": "140", "show-overflow-tooltip": "" }, { default: s(({ row: t }) => [l("span", { class: O(t.user_group_names.length ? "" : "text-[#999]") }, i(t.user_group_names.join("\u3001") || "--"), 3)]), _: 1 }, 8, ["label"]), a(c, { label: e.$t("type"), width: "140", "show-overflow-tooltip": "" }, { default: s(({ row: t = {} }) => [d(i(e.$t(t.agent_type_label) || "--"), 1)]), _: 1 }, 8, ["label"]), a(c, { label: e.$t("sort"), width: "80", "show-overflow-tooltip": "" }, { default: s(({ row: t = {} }) => [d(i(t.sort), 1)]), _: 1 }, 8, ["label"]), a(c, { label: e.$t("action_enable"), width: "80" }, { default: s(({ row: t }) => [a(Q, { modelValue: t.enable, "onUpdate:modelValue": (m) => t.enable = m, onChange: (m) => Z({ data: t }) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), _: 1 }, 8, ["label"]), a(c, { label: e.$t("operation"), width: "120", align: "right", fixed: "right" }, { default: s(({ row: t }) => [a(r, { onClick: (m) => B(t.agent_type, t), type: "primary", link: "" }, { default: s(() => [d(i(e.$t("action_edit")), 1)]), _: 2 }, 1032, ["onClick"]), a(r, { type: "primary", link: "", onClick: (m) => W({ data: t }) }, { default: s(() => [d(i(e.$t("action_delete")), 1)]), _: 2 }, 1032, ["onClick"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data", "total", "loading", "page", "limit"])])]), _: 1 }), a(oe, { modelValue: x.value, "onUpdate:modelValue": o[4] || (o[4] = (t) => x.value = t), title: e.$t("action_add"), width: "1000px", onOpened: e.onAddOpened }, { default: s(() => [l("ul", Me, [(g(true), y(P, null, I(U.value, (t, m) => (g(), y("li", { key: m }, [l("h4", je, i(e.$t(t.title)), 1), l("ul", He, [(g(true), y(P, null, I(t.children, (v) => (g(), y("li", { key: v.value, class: O(["h-[100px] px-6 rounded flex items-center gap-3 bg-[#FAFAFB] cursor-pointer group hover:bg-white hover:shadow", [f.includes(v.value) ? "" : "opacity-50"]]) }, [l("img", { class: "flex-none w-10 h-10 rounded-lg", src: v.icon, alt: "" }, null, 8, We), l("div", Ze, i(e.$t(v.label)), 1), a(te, { type: "primary", plain: "", class: "border-none invisible group-hover:visible", onClick: (Je) => B(v.value) }, { default: s(() => [d(i(e.$t("action_add")), 1)]), _: 2 }, 1032, ["onClick"])], 2))), 128))])]))), 128))])]), _: 1 }, 8, ["modelValue", "title", "onOpened"]), a(Be)], 64);
  };
} });
const At = we(qe, [["__scopeId", "data-v-30693193"]]);
export {
  At as default
};
