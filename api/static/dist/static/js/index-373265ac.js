import { e as B, w as ae, a as I, E as P, x as ne, y as se, g as le } from "./element-plus-c72880c6.js";
import { _ as ie } from "./index-918f1759.js";
import { _ as re } from "./index-2b83add0.js";
import { d as _e, e as E, p as pe, P as de, c as ue, _ as ce, f as me } from "./index-226b5715.js";
import { _ as ge, a as fe } from "./index-2911cb47.js";
import { _ as he } from "./index.vue_vue_type_script_setup_true_lang-9a63c23d.js";
import { d as U, o as g, J as we, K as s, M as a, a2 as p, P as i, e as _, V as ve, i as ye, D as be, c as y, a as l, u as Ee, S as $e, T as Te, I as O, H as k, ac as L, n as xe } from "./@vue-3b855f7b.js";
import { _ as Ce } from "./index.vue_vue_type_script_setup_true_lang-4702f412.js";
import { b as Ae } from "./vue-router-2f60a71a.js";
import { A as Pe, a as V, b as R, c as N, d as ke, e as Ve, f as Ne } from "./agent-3dc66611.js";
import { s as Be } from "./subscription-41103fdc.js";
import { G as De } from "./group-c1a36044.js";
import "./dayjs-b67ba5b3.js";
import "./cssfilter-476ae7ee.js";
import "./lodash-es-fadd064a.js";
import "./@element-plus-0cfad8bb.js";
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
import "./image.vue_vue_type_style_index_0_lang-45adb6cd.js";
import "./vue-cropper-d3d11008.js";
import "./vue-codemirror-0523f0f1.js";
import "./codemirror-763a75c7.js";
import "./@codemirror-a2adbe38.js";
import "./@lezer-f449c16b.js";
import "./crelt-7bb88e1d.js";
import "./style-mod-ab9c37a6.js";
import "./@marijn-45184d7f.js";
import "./w3c-keyname-9fb136d3.js";
const Ge = U({ __name: "drawer", setup(Y) {
  return (d, b) => {
    const f = B, n = ae;
    return g(), we(n, { title: d.$t("action_add"), size: "840px" }, { footer: s(() => [a(f, { size: "large" }, { default: s(() => [p(i(d.$t("action_cancel")), 1)]), _: 1 }), a(f, { type: "primary", size: "large" }, { default: s(() => [p(i(d.$t("action_confirm")), 1)]), _: 1 })]), default: s(() => [a(Ce, { "agent-type": "dify_agent" })]), _: 1 }, 8, ["title"]);
  };
} }), ze = { class: "flex items-center justify-between mt-5" }, Se = { class: "flex-1 w-0" }, Ie = { class: "flex-none flex-center gap-3 ml-8" }, Oe = { class: "text-sm" }, Le = { class: "flex-1 overflow-y-auto bg-white rounded-lg px-5 py-5 mt-4" }, Re = { class: "flex items-center gap-2 w-full" }, Ue = ["src"], Ye = { class: "flex-1 w-0 text-sm flex flex-col" }, Fe = { class: "text-[#2563EB] truncate" }, Me = { class: "w-full min-h-[300px] overflow-y-auto" }, He = { class: "text-sm text-[#939499]" }, je = { class: "grid grid-cols-3 gap-5 pt-4 pb-6" }, Ze = ["src"], qe = { class: "flex-1 truncate" }, Je = U({ name: "Agent", __name: "index", setup(Y) {
  const d = Ae(), b = _(), f = [R, N, ke, Ve, Ne], n = ve({ group_id: "-1", keyword: "", page: 1, page_size: 10 }), $ = _([]), D = _(0), T = _(false), x = _(false), F = _(_e(Pe)), C = _([]), M = async () => {
    C.value.length || (C.value = await Be.list({ params: { offset: 0, limit: 1e3 } }));
  }, h = async () => {
    T.value = true, await M();
    const { count: e = 0, agents: o = [] } = await V.list({ params: { group_id: n.group_id, keyword: n.keyword, offset: (n.page - 1) * n.page_size, limit: n.page_size } }).finally(() => {
      T.value = false;
    });
    D.value = e, $.value = [], await xe(), $.value = o.map((r = {}) => (r.user_group_ids = r.user_group_ids || [], r.user_group_names = r.user_group_ids.map((w) => (C.value.find((A) => A.group_id == w) || {}).group_name).filter((w) => w), r));
  }, u = async () => {
    n.page = 1, await h();
  }, H = (e) => {
    n.page_size = e, u();
  }, j = (e) => {
    n.page = e, h();
  }, Z = async ({ data: { agent_id: e } }) => {
    await I.confirm(window.$t("agent_delete_confirm"), window.$t("action_delete")), await V.delete({ data: { agent_id: e } }), P.success(window.$t("action_delete_success")), h();
  }, G = async (e, o = {}) => {
    if (!f.includes(e))
      return P.warning(window.$t("feature_coming_soon"));
    if (!z.value && R == e || !S.value && N == e)
      return I.confirm(window.$t(N == e ? "app_builder_not_auth" : "coze_cn_not_auth", window.$t("tip")), window.$t("tip"), { confirmButtonText: window.$t("action_go"), cancelButtonText: window.$t("action_cancel"), type: "warning" }).then(() => {
        d.push({ name: "Platform" });
      });
    await d.push({ name: "AgentCreate", query: o.agent_id ? { type: o.agent_type, agent_id: o.agent_id } : { type: e, group_id: +n.group_id > 0 ? n.group_id : void 0 } });
  }, q = async ({ data: { agent_id: e, enable: o } }) => {
    await V.updateStatus({ data: { agent_id: e, enable: o } }), P.success(window.$t(o ? "action_enable_success" : "action_disable_success"));
  }, z = _(false), S = _(false), J = async () => {
    const e = await pe.list();
    z.value = !!e.find((o) => o.provider_type == de), S.value = !!e.find((o) => o.provider_type == ue);
  };
  return ye(() => {
    u(), J(), E.on("user-login-success", u), E.on("agent-change", h);
  }), be(() => {
    E.off("user-login-success", u), E.off("agent-change", h);
  }), (e, o) => {
    const r = B, w = he, A = ge, K = fe, W = ce, c = ne, Q = se, X = re, ee = ie, te = B, oe = le;
    return g(), y(k, null, [a(ee, { class: "px-[60px] py-8" }, { default: s(() => [a(w, { title: e.$t("module.agent") }, { right: s(() => [a(r, { type: "primary", onClick: o[0] || (o[0] = (t) => x.value = true) }, { default: s(() => [p(" + " + i(e.$t("action_add")), 1)]), _: 1 })]), _: 1 }, 8, ["title"]), l("div", ze, [l("div", Se, [a(A, { ref_key: "group_tabs_ref", ref: b, modelValue: n.group_id, "onUpdate:modelValue": o[1] || (o[1] = (t) => n.group_id = t), "group-type": Ee(De), onChange: u }, null, 8, ["modelValue", "group-type"])]), l("div", Ie, [a(K, { modelValue: n.keyword, "onUpdate:modelValue": o[2] || (o[2] = (t) => n.keyword = t), placeholder: "module.agent_search_placeholder", onChange: u }, null, 8, ["modelValue"]), l("div", { class: "flex items-center gap-1 whitespace-nowrap cursor-pointer text-[#576D9C]", onClick: o[3] || (o[3] = (...t) => b.value.open && b.value.open(...t)) }, [a(W, { name: "cate-manage", width: "14px", height: "14px" }), l("div", Oe, i(e.$t("group")), 1)])])]), l("div", Le, [a(X, { "header-row-class-name": "rounded overflow-hidden", "header-cell-class-name": "!bg-[#F6F7F8] !h-[60px] !border-none", data: $.value, total: D.value, loading: T.value, page: n.page, limit: n.page_size, onPageSizeChange: H, onPageCurrentChange: j }, { default: s(() => [a(c, { prop: "date", label: e.$t("module.agent"), "min-width": "180", "show-overflow-tooltip": "" }, { default: s(({ row: t }) => [l("div", Re, [l("img", { class: "flex-none w-8 h-8 rounded-full overflow-hidden", src: t.logo, alt: "" }, null, 8, Ue), l("div", Ye, [l("div", Fe, i(t.name || "--"), 1), $e(l("div", { class: "text-xs text-[#808080] truncate" }, i(t.description || ""), 513), [[Te, t.description]])])])]), _: 1 }, 8, ["label"]), a(c, { label: e.$t("usage_range"), "min-width": "140", "show-overflow-tooltip": "" }, { default: s(({ row: t }) => [l("span", { class: O(t.user_group_names.length ? "" : "text-[#999]") }, i(t.user_group_names.join("\u3001") || "--"), 3)]), _: 1 }, 8, ["label"]), a(c, { label: e.$t("type"), width: "140", "show-overflow-tooltip": "" }, { default: s(({ row: t = {} }) => [p(i(e.$t(t.agent_type_label) || "--"), 1)]), _: 1 }, 8, ["label"]), a(c, { label: e.$t("sort"), width: "80", "show-overflow-tooltip": "" }, { default: s(({ row: t = {} }) => [p(i(t.sort), 1)]), _: 1 }, 8, ["label"]), a(c, { label: e.$t("action_enable"), width: "80" }, { default: s(({ row: t }) => [a(Q, { modelValue: t.enable, "onUpdate:modelValue": (m) => t.enable = m, onChange: (m) => q({ data: t }) }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])]), _: 1 }, 8, ["label"]), a(c, { label: e.$t("operation"), width: "120", align: "right", fixed: "right" }, { default: s(({ row: t }) => [a(r, { onClick: (m) => G(t.agent_type, t), type: "primary", link: "" }, { default: s(() => [p(i(e.$t("action_edit")), 1)]), _: 2 }, 1032, ["onClick"]), a(r, { type: "primary", link: "", onClick: (m) => Z({ data: t }) }, { default: s(() => [p(i(e.$t("action_delete")), 1)]), _: 2 }, 1032, ["onClick"])]), _: 1 }, 8, ["label"])]), _: 1 }, 8, ["data", "total", "loading", "page", "limit"])])]), _: 1 }), a(oe, { modelValue: x.value, "onUpdate:modelValue": o[4] || (o[4] = (t) => x.value = t), title: e.$t("action_add"), width: "1000px", onOpened: e.onAddOpened }, { default: s(() => [l("ul", Me, [(g(true), y(k, null, L(F.value, (t, m) => (g(), y("li", { key: m }, [l("h4", He, i(e.$t(t.title)), 1), l("ul", je, [(g(true), y(k, null, L(t.children, (v) => (g(), y("li", { key: v.value, class: O(["h-[100px] px-6 rounded flex items-center gap-3 bg-[#FAFAFB] cursor-pointer group hover:bg-white hover:shadow", [f.includes(v.value) ? "" : "opacity-50"]]) }, [l("img", { class: "flex-none w-10 h-10 rounded-lg", src: v.icon, alt: "" }, null, 8, Ze), l("div", qe, i(e.$t(v.label)), 1), a(te, { type: "primary", plain: "", class: "border-none invisible group-hover:visible", onClick: (Ke) => G(v.value) }, { default: s(() => [p(i(e.$t("action_add")), 1)]), _: 2 }, 1032, ["onClick"])], 2))), 128))])]))), 128))])]), _: 1 }, 8, ["modelValue", "title", "onOpened"]), a(Ge)], 64);
  };
} });
const St = me(Je, [["__scopeId", "data-v-30693193"]]);
export {
  St as default
};
