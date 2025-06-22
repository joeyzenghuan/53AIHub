import { y as g, r as $, b as E, c as y, d as o, t as n, f as e, w as l, L as r, a5 as F, ag as k, R as S, a4 as A, ah as L } from "./index-8579fe4a.js";
import "./el-tag-0b6baecb.js";
import { E as N, a as T } from "./el-select-8a770a23.js";
import "./el-scrollbar-4065fe54.js";
import { E as C, a as D } from "./el-table-column-376475e4.js";
import "./el-checkbox-a21716fc.js";
import { E as z } from "./el-switch-1a77f9ca.js";
import { A as B } from "./agent-info-3b42dae9.js";
import { L as G, F as I } from "./limit-config-9fc5876a.js";
import "./isEqual-8c73ec38.js";
import "./debounce-484109dd.js";
import "./el-loading-8747b309.js";
import "./sortable.esm-7ba019b6.js";
import "./el-input-number-310bd679.js";
import "./index-ede470e7.js";
import "./drawer.vue_vue_type_script_setup_true_lang-6dfd020c.js";
import "./el-drawer-393896dd.js";
import "./agent-f71520b7.js";
import "./group-39bff2fe.js";
import "./image.vue_vue_type_style_index_0_lang-1ce00652.js";
import "./el-radio-2c60a23c.js";
const R = { class: "py-7" }, V = { class: "text-base text-[#1D1E1F] font-medium" }, x = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-6" }, O = { class: "w-full border" }, j = { class: "flex items-center gap-2 cursor-pointer" }, q = { class: "w-full h-[50px] flex items-center pl-5" }, H = { class: "w-full border" }, J = { class: "flex items-center gap-2 cursor-pointer" }, K = { class: "w-full h-[50px] flex items-center pl-5" }, M = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-6" }, fe = g({ __name: "dify-workflow", setup(P) {
  const p = [{ date: "2016-05-03", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-02", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-04", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-01", name: "Tom", address: "No. 189, Grove St, Los Angeles" }], m = $(), _ = () => {
    m.value.open();
  };
  return (t, i) => {
    const u = F, d = k, s = S, a = C, c = z, b = D, f = A, h = N, w = T, v = L;
    return E(), y("div", R, [o("div", V, n(t.$t("basic_info")), 1), e(v, { "label-width": "104px", "label-position": "left", class: "mt-6" }, { default: l(() => [e(B), o("div", x, n(t.$t("coze_workflow_link")), 1), e(d, { "label-position": "top", label: t.$t("coze_workflow_link") }, { default: l(() => [e(u, { size: "large" })]), _: 1 }, 8, ["label"]), e(d, { "label-position": "top", label: t.$t("input_variable") }, { default: l(() => [o("div", O, [e(b, { data: p, "header-cell-class-name": "!bg-[#F8F9FA] h-[46px]", "header-row-class-name": "", style: { width: "100%" } }, { default: l(() => [e(a, { prop: "date", width: "50" }, { default: l(() => [e(s, { name: "drag" })]), _: 1 }), e(a, { prop: "date", label: t.$t("display_name") }, null, 8, ["label"]), e(a, { prop: "name", label: t.$t("variable_type") }, null, 8, ["label"]), e(a, { prop: "address", label: t.$t("action_enable"), width: "90" }, { default: l(() => [e(c)]), _: 1 }, 8, ["label"]), e(a, { prop: "address", label: t.$t("operation"), width: "96" }, { default: l(() => [o("div", j, [e(s, { name: "edit", width: "16" }), e(s, { name: "del", width: "16" })])]), _: 1 }, 8, ["label"])]), _: 1 }), o("div", q, [e(f, { link: "", type: "primary", onClick: _ }, { default: l(() => [r(" +" + n(t.$t("action_add")), 1)]), _: 1 })])])]), _: 1 }, 8, ["label"]), e(d, { "label-position": "top", label: t.$t("output_variable") }, { default: l(() => [o("div", H, [e(b, { data: p, "header-cell-class-name": "!bg-[#F8F9FA] h-[46px]", "header-row-class-name": "", style: { width: "100%" } }, { default: l(() => [e(a, { prop: "date", width: "50" }, { default: l(() => [e(s, { name: "drag" })]), _: 1 }), e(a, { prop: "date", label: t.$t("display_name") }, null, 8, ["label"]), e(a, { prop: "name", label: t.$t("variable_type") }, null, 8, ["label"]), e(a, { prop: "address", label: t.$t("action_enable"), width: "90" }, { default: l(() => [e(c)]), _: 1 }, 8, ["label"]), e(a, { prop: "address", label: t.$t("operation"), width: "96" }, { default: l(() => [o("div", J, [e(s, { name: "edit", width: "16" }), e(s, { name: "del", width: "16" })])]), _: 1 }, 8, ["label"])]), _: 1 }), o("div", K, [e(f, { link: "", type: "primary", onClick: _ }, { default: l(() => [r(" +" + n(t.$t("action_add")), 1)]), _: 1 })])])]), _: 1 }, 8, ["label"]), o("div", M, n(t.$t("permission_setting")), 1), e(d, { label: t.$t("visible_range") }, { default: l(() => [e(w, { size: "large" }, { default: l(() => [e(h, { value: "1" }, { default: l(() => i[0] || (i[0] = [r(" \u5E02\u573A ")])), _: 1, __: [0] })]), _: 1 })]), _: 1 }, 8, ["label"]), i[1] || (i[1] = o("div", { class: "border-t mb-4" }, null, -1)), e(G)]), _: 1, __: [1] }), e(I, { ref_key: "fieldSaveRef", ref: m }, null, 512)]);
  };
} });
export {
  fe as default
};
