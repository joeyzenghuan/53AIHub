import { y as X, r as v, Y as z, Z as ee, $ as le, o as oe, b as s, j as g, w as n, c, s as ae, e as N, F as y, K as E, f as r, L as h, t as p, d as i, x as te, u as O, a0 as se, q as ne, a1 as re, a2 as ue, a3 as B, n as ie, R as de, a4 as ce, a5 as pe, G as fe, a6 as me } from "./index-8579fe4a.js";
import { E as _e, a as ge } from "./el-skeleton-item-f5c34a93.js";
import "./el-tag-0b6baecb.js";
import { E as ve, a as he } from "./el-select-8a770a23.js";
import "./el-scrollbar-4065fe54.js";
import { E as xe, a as ke } from "./el-checkbox-a21716fc.js";
import { E as ye } from "./el-text-f138b0ce.js";
import { G as Ee, g as be } from "./group-39bff2fe.js";
const we = { key: 0, class: "relative" }, Ve = { key: 1, class: "w-full flex items-center flex-wrap gap-2" }, Ce = { class: "flex h-[400px]" }, Se = { class: "flex-1 w-0 pr-4 box-border flex flex-col border-r border-[#E5E5E5]" }, Ne = { class: "w-full flex items-center gap-2 group" }, Oe = ["title"], $e = { class: "flex-1 w-0 pl-4 box-border flex flex-col" }, Fe = { class: "leading-[40px]" }, ze = { class: "flex-1 h-0 w-full mt-3 bg-[#FBF8FB] rounded overflow-auto" }, Be = { class: "box-border p-4 flex items-start flex-wrap gap-2" }, Je = { class: "py-2 flex items-center justify-end" }, Ie = { class: "text-[#1D1E1F]" }, Ke = X({ __name: "index", props: { type: { default: "select" }, groupType: { default: Ee }, modelValue: { default: null }, size: { default: "large" }, defaultAll: { type: Boolean, default: false }, defaultFirst: { type: Boolean, default: false } }, emits: ["update:modelValue", "change", "confirm"], setup(J, { expose: I, emit: T }) {
  const u = J, b = T, $ = v(), o = v([]), d = v([]), x = v(false), R = z(() => d.value.filter((e) => o.value.includes(e.group_id))), U = z(() => d.value.filter((e) => u.modelValue.includes(e.group_id))), f = () => {
    const e = JSON.parse(JSON.stringify(o.value));
    b("update:modelValue", e), b("change", { value: e });
  }, F = async () => {
    x.value = true;
    const e = await be.list({ params: { group_type: u.groupType } }).catch(() => {
      x.value = false;
    });
    d.value = e.map((t) => (t.value = +t.group_id || 0, t.label = t.name = t.group_name || "", t)), await ie();
    const a = JSON.parse(JSON.stringify(u.modelValue)), m = a.length;
    o.value = a.filter((t) => d.value.some((S) => S.group_id === t)), m && m !== o.value.length && f(), u.defaultAll && (!u.modelValue || !u.modelValue.length) ? (o.value = d.value.map((t) => t.group_id), f()) : u.defaultFirst && (!u.modelValue || !u.modelValue.length) && (o.value = [d.value[0].group_id], f()), x.value = false;
  }, k = v(false), w = ee({ keyword: "" }), V = () => {
    o.value = JSON.parse(JSON.stringify(u.modelValue)), k.value = true;
  }, C = () => {
    k.value = false;
  }, G = () => {
    $.value.filter(w.keyword);
  }, D = (e, a) => e ? a.name.includes(e) : true, A = (e) => {
    o.value = o.value.filter((a) => a !== e.group_id);
  }, L = (e) => {
    o.value.some((a) => a === e.value) ? o.value = o.value.filter((a) => a !== e.group_id) : o.value.push(e.group_id);
  }, P = () => {
    f();
    const e = JSON.parse(JSON.stringify(o.value));
    b("confirm", { value: e }), C();
  };
  return le(() => u.modelValue, (e) => {
    o.value = e;
  }), oe(() => {
    F();
  }), I({ refresh: F, open: V, close: C }), (e, a) => {
    const m = de, t = ce, S = pe, j = fe, K = ye, M = me, Y = xe, q = ke, Z = ve, H = he, Q = _e, W = ge;
    return s(), g(W, { class: "w-full", animated: "", loading: x.value }, { default: n(() => [e.type === "picker" ? (s(), c("div", we, [e.$slots.trigger ? (s(), c("div", { key: 0, onClick: V }, [ae(e.$slots, "trigger")])) : N("", true), e.$slots.trigger ? N("", true) : (s(), c("ul", Ve, [(s(true), c(y, null, E(U.value, (l) => (s(), c("li", { key: l.group_id, class: "flex items-center gap-2 px-2 box-border border border-[#E5E5E5] rounded-sm text-[#666]" }, [r(m, { name: "user-group", width: "18px", height: "18px", color: "#C7C7C7" }), h(" " + p(l.name), 1)]))), 128)), r(t, { type: "primary", link: "", onClick: V }, { default: n(() => [h(p(e.$t(e.modelValue.length ? "action_modify" : "action_add")), 1)]), _: 1 })])), r(M, { title: e.$t("action_select"), width: "650px", "close-on-click-modal": false, "destroy-on-close": "", "append-to-body": "", modelValue: k.value, "onUpdate:modelValue": a[1] || (a[1] = (l) => k.value = l) }, { footer: n(() => [i("div", Je, [r(t, { class: "w-[96px] h-[36px]", onClick: te(C, ["stop"]) }, { default: n(() => [h(p(e.$t("action_cancel")), 1)]), _: 1 }), r(t, { class: "w-[96px] h-[36px]", size: "large", type: "primary", onClick: P }, { default: n(() => [h(p(e.$t("action_confirm")), 1)]), _: 1 })])]), default: n(() => [i("div", Ce, [i("div", Se, [r(S, { class: "w-full h-[36px]", modelValue: w.keyword, "onUpdate:modelValue": a[0] || (a[0] = (l) => w.keyword = l), size: "default", clearable: "", "prefix-icon": O(se), placeholder: e.$t("internal_user.group.search_placeholder_v2"), onChange: G }, null, 8, ["modelValue", "prefix-icon", "placeholder"]), r(K, { ref_key: "treeRef", ref: $, class: "mt-4 flex-1 h-0 box-border pr-1 overflow-auto", "node-key": "group_id", data: d.value, "default-expanded-keys": [0], "expand-on-click-node": false, "filter-node-method": D, onNodeClick: L }, { default: n(({ data: l }) => [i("div", Ne, [r(m, { name: "user-group", width: "18px", height: "18px", color: o.value.some((_) => _ === l.group_id) ? "#3664EF" : "#999" }, null, 8, ["color"]), i("div", { class: ne(["flex-1 w-0 text-sm truncate", [o.value.some((_) => _ === l.group_id) ? "text-[#3664EF]" : "text-[#333]"]]), title: l.label }, p(l.label), 11, Oe), o.value.some((_) => _ === l.group_id) ? (s(), g(j, { key: 0, color: "#3664EF" }, { default: n(() => [r(O(re))]), _: 1 })) : N("", true)])]), _: 1 }, 8, ["data"])]), i("div", $e, [i("h4", Fe, p(e.$t("internal_user.scope.selected_title")), 1), i("div", ze, [i("ul", Be, [(s(true), c(y, null, E(R.value, (l) => (s(), c("li", { key: l.group_id, class: "py-1 bg-white px-2 box-border border border-[#E5E5E5] rounded-sm" }, [r(m, { class: "inline-block mr-1", name: "user-group", width: "18px", height: "18px", color: "#939499" }), h(" " + p(l.group_name) + " ", 1), r(t, { class: "ml-1 !outline-none !border-none !bg-[#C4C4C4] !size-4", style: { zoom: "0.9" }, icon: O(ue), type: "info", size: "small", circle: "", onClick: (_) => A(l) }, null, 8, ["icon", "onClick"])]))), 128))])])])])]), _: 1 }, 8, ["title", "modelValue"])])) : e.type === "checkbox" ? (s(), g(q, B({ key: 1, modelValue: o.value, "onUpdate:modelValue": a[2] || (a[2] = (l) => o.value = l) }, e.$attrs, { onChange: f }), { default: n(() => [(s(true), c(y, null, E(d.value, (l) => (s(), g(Y, { key: l.group_id, label: l.group_id }, { default: n(() => [i("span", Ie, p(l.group_name), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 16, ["modelValue"])) : (s(), g(H, B({ key: 2, size: e.size, placeholder: e.$t("form_select_placeholder"), modelValue: o.value, "onUpdate:modelValue": a[3] || (a[3] = (l) => o.value = l) }, e.$attrs, { onChange: f }), { default: n(() => [(s(true), c(y, null, E(d.value, (l) => (s(), g(Z, { key: l.group_id, label: l.group_name, value: l.group_id }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 16, ["size", "placeholder", "modelValue"]))]), template: n(() => [r(Q, { class: "w-full !h-[40px]", variant: "h1" })]), _: 3 }, 8, ["loading"]);
  };
} });
export {
  Ke as _
};
