import { y as g, r as $, b as E, c as y, d as o, t as n, f as e, w as a, L as r, a5 as F, ag as k, R as S, a4 as A, ah as L } from "./index-8579fe4a.js";
import "./el-tag-0b6baecb.js";
import { E as N, a as T } from "./el-select-8a770a23.js";
import "./el-scrollbar-4065fe54.js";
import { E as C, a as D } from "./el-table-column-376475e4.js";
import "./el-checkbox-a21716fc.js";
import { E as z } from "./el-switch-1a77f9ca.js";
import { A as B } from "./agent-info-3b42dae9.js";
import { _ as G } from "./expand-config.vue_vue_type_script_setup_true_lang-979a7e3f.js";
import { L as I, F as R } from "./limit-config-9fc5876a.js";
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
const V = { class: "py-7" }, x = { class: "text-base text-[#1D1E1F] font-medium" }, O = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-6" }, j = { class: "w-full border" }, q = { class: "flex items-center gap-2 cursor-pointer" }, H = { class: "w-full h-[50px] flex items-center pl-5" }, J = { class: "w-full border" }, K = { class: "flex items-center gap-2 cursor-pointer" }, M = { class: "w-full h-[50px] flex items-center pl-5" }, P = { class: "text-base text-[#1D1E1F] font-medium mt-10 mb-6" }, he = g({ __name: "coze-workflow", setup(Q) {
  const p = [{ date: "2016-05-03", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-02", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-04", name: "Tom", address: "No. 189, Grove St, Los Angeles" }, { date: "2016-05-01", name: "Tom", address: "No. 189, Grove St, Los Angeles" }], m = $(), _ = () => {
    m.value.open();
  };
  return (t, i) => {
    const u = F, d = k, s = S, l = C, c = z, b = D, f = A, h = N, w = T, v = L;
    return E(), y("div", V, [o("div", x, n(t.$t("basic_info")), 1), e(v, { "label-width": "104px", "label-position": "left", class: "mt-6" }, { default: a(() => [e(B), o("div", O, n(t.$t("edit_agent")), 1), e(d, { "label-position": "top", label: t.$t("coze_workflow_link") }, { default: a(() => [e(u, { size: "large" })]), _: 1 }, 8, ["label"]), e(d, { "label-position": "top", label: t.$t("input_variable") }, { default: a(() => [o("div", j, [e(b, { data: p, "header-cell-class-name": "!bg-[#F8F9FA] h-[46px]", "header-row-class-name": "", style: { width: "100%" } }, { default: a(() => [e(l, { prop: "date", width: "50" }, { default: a(() => [e(s, { name: "drag" })]), _: 1 }), e(l, { prop: "date", label: t.$t("display_name") }, null, 8, ["label"]), e(l, { prop: "name", label: t.$t("variable_type") }, null, 8, ["label"]), e(l, { prop: "address", label: t.$t("action_enable"), width: "90" }, { default: a(() => [e(c)]), _: 1 }, 8, ["label"]), e(l, { prop: "address", label: t.$t("operation"), width: "96" }, { default: a(() => [o("div", q, [e(s, { name: "edit", width: "16" }), e(s, { name: "del", width: "16" })])]), _: 1 }, 8, ["label"])]), _: 1 }), o("div", H, [e(f, { link: "", type: "primary", onClick: _ }, { default: a(() => [r(" +" + n(t.$t("action_add")), 1)]), _: 1 })])])]), _: 1 }, 8, ["label"]), e(d, { "label-position": "top", label: t.$t("output_variable") }, { default: a(() => [o("div", J, [e(b, { data: p, "header-cell-class-name": "!bg-[#F8F9FA] h-[46px]", "header-row-class-name": "", style: { width: "100%" } }, { default: a(() => [e(l, { prop: "date", width: "50" }, { default: a(() => [e(s, { name: "drag" })]), _: 1 }), e(l, { prop: "date", label: t.$t("display_name") }, null, 8, ["label"]), e(l, { prop: "name", label: t.$t("variable_type") }, null, 8, ["label"]), e(l, { prop: "address", label: t.$t("action_enable"), width: "90" }, { default: a(() => [e(c)]), _: 1 }, 8, ["label"]), e(l, { prop: "address", label: t.$t("operation"), width: "96" }, { default: a(() => [o("div", K, [e(s, { name: "edit", width: "16" }), e(s, { name: "del", width: "16" })])]), _: 1 }, 8, ["label"])]), _: 1 }), o("div", M, [e(f, { link: "", type: "primary", onClick: _ }, { default: a(() => [r(" +" + n(t.$t("action_add")), 1)]), _: 1 })])])]), _: 1 }, 8, ["label"]), e(G), o("div", P, n(t.$t("permission_setting")), 1), e(d, { label: t.$t("visible_range") }, { default: a(() => [e(w, { size: "large" }, { default: a(() => [e(h, { value: "1" }, { default: a(() => i[0] || (i[0] = [r(" \u5E02\u573A ")])), _: 1, __: [0] })]), _: 1 })]), _: 1 }, 8, ["label"]), i[1] || (i[1] = o("div", { class: "border-t mb-4" }, null, -1)), e(I)]), _: 1, __: [1] }), e(R, { ref_key: "fieldSaveRef", ref: m }, null, 512)]);
  };
} });
export {
  he as default
};
