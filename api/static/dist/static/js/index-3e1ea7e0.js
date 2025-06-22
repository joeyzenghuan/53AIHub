import { y as H, r as f, o as X, ai as j, b as s, j as c, w as t, d as u, f as r, L as $, t as p, x as Z, m as ee, u as K, a8 as oe, n as F, a9 as J, R as le, a5 as ae, G as Y, a4 as Q, a6 as te, Y as ne, c as h, F as C, K as B, e as P, M as se, az as re, I as ue } from "./index-8579fe4a.js";
import { v as ie } from "./el-loading-8747b309.js";
import { _ as pe } from "./index.vue_vue_type_script_setup_true_lang-dd688c6c.js";
import { g as L, D as q } from "./group-39bff2fe.js";
import { E as de, a as ce } from "./el-tab-pane-e22c8d9b.js";
import { a as me, b as _e } from "./el-dropdown-menu-ce96a192.js";
import "./el-scrollbar-4065fe54.js";
import { E as ge } from "./el-divider-7d014453.js";
import { E as fe, a as ve } from "./el-checkbox-a21716fc.js";
const ye = { class: "text-[#182B50] text-opacity-60 text-sm pb-4" }, be = { class: "flex items-center" }, he = { class: "pr-3 sort-icon cursor-move" }, we = { class: "flex-1" }, xe = { class: "py-4 flex items-center justify-center" }, ke = H({ __name: "index", props: { groupType: { default: 1 }, beforeRemove: {} }, emits: ["change"], setup(R, { expose: G, emit: S }) {
  const d = R, x = S, v = f(false), a = f([]), m = f([]), n = f(false);
  let i = [];
  X(() => {
    g();
  });
  const g = async () => {
    const e = await L.list({ params: { group_type: d.groupType } });
    a.value = [...e], m.value = [...e], a.value.length ? x("change", { value: a.value }) : a.value = [j(q)];
  }, D = async ({ value: e = [] } = {}) => {
    n.value = false, a.value = [], await F(), a.value = [...m.value], i.length && await g(), i = [], e && e.length && (a.value = [...e]), v.value = true;
  }, b = async () => {
    v.value = false;
  }, U = async () => {
    a.value.push({ ...j(q), group_id: -Date.now(), sort: a.value.length }), await F();
    const e = document.querySelector("#group_sortable");
    e.scrollTop = e.scrollHeight;
  }, A = async ({ index: e }) => {
    const o = a.value[e];
    if (a.value.filter((w) => w.group_id).length === 1)
      return J.warning(window.$t("group_min_one"));
    const _ = d.beforeRemove ? d.beforeRemove({ data: o }) : true;
    _ !== false && (_.then && _.catch && await _ === false || (i.push(o), a.value.splice(e, 1)));
  }, N = async () => {
    for (let e = 0; e < i.length; e++) {
      const o = i[e];
      o.group_id > 0 && await L.delete({ data: { group_id: o.group_id } });
    }
  }, O = async () => {
    if (n.value)
      return;
    const e = a.value.filter((o) => o.group_name.trim());
    if (!e.length)
      return J.warning(window.$t("group_not_empty"));
    n.value = true, await N().catch(() => {
      n.value = false;
    }), await L.save({ data: { group_type: d.groupType, groups: e.map((o, _) => ({ group_name: o.group_name.trim(), group_id: o.group_id > 0 ? o.group_id : 0, sort: e.length - _ })) } }).catch(() => {
      n.value = false;
    }), i = [], J.success(window.$t("action_save_success")), g(), b();
  };
  return G({ open: D, close: b }), (e, o) => {
    const _ = le, w = ae, k = Y, M = pe, E = Q, z = te, I = ie;
    return s(), c(z, { modelValue: v.value, "onUpdate:modelValue": o[1] || (o[1] = (y) => v.value = y), title: e.$t("group_management"), width: "680px", "align-center": "", "destroy-on-close": "", "close-on-click-modal": false }, { footer: t(() => [u("div", xe, [r(E, { class: "w-[96px] h-[36px]", type: "primary", loading: n.value, onClick: O }, { default: t(() => [$(p(e.$t("action_save")), 1)]), _: 1 }, 8, ["loading"]), r(E, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: Z(b, ["stop"]) }, { default: t(() => [$(p(e.$t("action_cancel")), 1)]), _: 1 })])]), default: t(() => [u("div", ye, p(e.$t("display_order")), 1), ee((s(), c(M, { modelValue: a.value, "onUpdate:modelValue": o[0] || (o[0] = (y) => a.value = y), identity: "group_id", customSortableId: "group_sortable", class: "w-full flex flex-col gap-4 max-h-[60vh] overflow-y-auto" }, { item: t(({ item: y, index: T }) => [u("div", be, [u("div", he, [r(_, { name: "drag", width: "16px", height: "32px", color: "#a1a5af" })]), u("div", we, [r(w, { modelValue: y.group_name, "onUpdate:modelValue": (V) => y.group_name = V, size: "large", placeholder: e.$t("form_input_placeholder"), class: "w-full", maxlength: "10", "show-word-limit": "" }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])]), r(k, { class: "ml-4 cursor-pointer", color: "rgba(24, 43, 80, 0.4)", onClick: (V) => A({ index: T }) }, { default: t(() => [r(K(oe))]), _: 2 }, 1032, ["onClick"])])]), _: 1 }, 8, ["modelValue"])), [[I, n.value]]), r(E, { type: "primary", link: "", class: "mt-4 ml-5", onClick: U }, { default: t(() => [$(" +" + p(e.$t("action_add")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue", "title"]);
  };
} }), Ee = { class: "text-sm text-[#1D1E1F]" }, Ve = { class: "inline-block bg-[#F6F7F8] leading-[24px] px-2 border rounded ml-2 text-[#9A9A9A]" }, Ce = { key: 0, class: "text-center text-[#A4AABA] text-sm py-8" }, $e = { class: "text-sm text-[#333435]" }, De = { class: "w-full flex items-center justify-between" }, Ae = H({ __name: "index", props: { type: { default: "tabs" }, groupType: { default: 1 }, modelValue: { default: null }, options: { default: [] }, disabled: { type: Boolean, default: false } }, emits: ["update:modelValue", "change", "get-options"], setup(R, { expose: G, emit: S }) {
  const d = R, x = S, v = f(), a = f(), m = f(d.modelValue), n = f(d.options), i = f(d.modelValue), g = ne(() => n.value.filter((e) => i.value.includes(e.group_id))), D = (e) => {
    e = JSON.parse(JSON.stringify(e)), x("update:modelValue", e), x("change", { value: e });
  }, b = () => {
    D(m.value);
  }, U = async ({ value: e = [] } = {}) => {
    d.type !== "tabs-pure" && (n.value = [], await F(), n.value = [...e], ["tabs"].includes(d.type) && (n.value.unshift({ group_id: "-1", group_name: "all" }), n.value.find((o) => o.group_id === m.value) || (m.value = n.value[0].group_id, b())), x("get-options", { options: n.value }));
  }, A = () => {
    var _a;
    i.value = JSON.parse(JSON.stringify(d.modelValue || [])), (_a = v.value) == null ? void 0 : _a.handleClose();
  }, N = async () => {
    var _a;
    D(i.value), await F(), (_a = v.value) == null ? void 0 : _a.handleClose();
  }, O = (e) => {
    e || A();
  };
  return G({ open: () => {
    var _a;
    (_a = a.value) == null ? void 0 : _a.open();
  }, getData: () => n.value }), (e, o) => {
    const _ = re, w = Y, k = Q, M = fe, E = ve, z = ge, I = me, y = _e, T = de, V = ce, W = ke;
    return s(), h(C, null, [e.type === "dropdown" ? (s(), c(y, { key: 0, ref_key: "dropdownRef", ref: v, trigger: "click", placement: "bottom-start", onVisibleChange: O }, { dropdown: t(() => [r(I, { class: "!w-[220px] !px-4 !py-2 box-border overflow-y-auto overflow-x-hidden" }, { default: t(() => [n.value.length ? (s(), c(E, { key: 1, modelValue: i.value, "onUpdate:modelValue": o[0] || (o[0] = (l) => i.value = l), class: "max-h-[60vh] overflow-y-auto overflow-x-hidden" }, { default: t(() => [(s(true), h(C, null, B(n.value, (l) => (s(), c(M, { key: l.group_id, class: "inline-block w-full", label: l.group_id }, { default: t(() => [u("span", $e, p(l.group_name), 1)]), _: 2 }, 1032, ["label"]))), 128))]), _: 1 }, 8, ["modelValue"])) : (s(), h("div", Ce, p(e.$t("no_data")), 1)), r(z, { class: "!my-2" }), u("div", null, [u("div", De, [u("div", { class: "cursor-pointer text-[#5A6D9E] text-sm hover:opacity-80", onClick: o[1] || (o[1] = (...l) => a.value.open && a.value.open(...l)) }, p(e.$t("group_management")), 1), u("div", null, [r(k, { class: "h-[28px]", size: "small", onClick: A }, { default: t(() => [$(p(e.$t("action_cancel")), 1)]), _: 1 }), r(k, { class: "h-[28px]", type: "primary", size: "small", onClick: N }, { default: t(() => [$(p(e.$t("action_confirm")), 1)]), _: 1 })])])])]), _: 1 })]), default: t(() => [u("div", null, [r(k, { size: "large", type: "info", plain: "", class: "!border-none !outline-none !bg-[--el-button-bg-color]" }, { default: t(() => [u("span", Ee, p(g.value.length ? g.value[0].group_name || "--" : e.$t("all_group")), 1), g.value.length > 1 ? (s(), c(_, { key: 0, effect: "light" }, { content: t(() => [(s(true), h(C, null, B(g.value.slice(1), (l) => (s(), h("label", { key: l.group_id, class: "inline-block bg-[#F6F7F8] leading-[24px] px-2 border rounded ml-2 my-2 text-[#9A9A9A]" }, p(l.group_name), 1))), 128))]), default: t(() => [u("div", Ve, " +" + p(g.value.length - 1), 1)]), _: 1 })) : P("", true), r(w, { class: "ml-2", size: "16", color: "#A4AABA" }, { default: t(() => [r(K(se))]), _: 1 })]), _: 1 })])]), _: 1 }, 512)) : e.type === "tabs-pure" ? (s(), c(V, { key: 1, modelValue: m.value, "onUpdate:modelValue": o[2] || (o[2] = (l) => m.value = l), class: "group-tabs", type: "card", onTabChange: b }, { default: t(() => [(s(true), h(C, null, B(e.options, (l) => (s(), c(T, { key: l.group_id, label: l.group_name, name: l.group_id, disabled: e.disabled || l.disabled }, null, 8, ["label", "name", "disabled"]))), 128))]), _: 1 }, 8, ["modelValue"])) : (s(), c(V, { key: 2, modelValue: m.value, "onUpdate:modelValue": o[3] || (o[3] = (l) => m.value = l), class: "group-tabs", type: "card", onTabChange: b }, { default: t(() => [(s(true), h(C, null, B(n.value, (l) => (s(), c(T, { key: l.group_id, label: e.$t(l.group_name), name: l.group_id, disabled: e.disabled || l.disabled }, null, 8, ["label", "name", "disabled"]))), 128))]), _: 1 }, 8, ["modelValue"])), e.groupType ? (s(), c(W, { key: 3, ref_key: "groupRef", ref: a, "group-type": e.groupType, onChange: U }, null, 8, ["group-type"])) : P("", true)], 64);
  };
} });
const ze = ue(Ae, [["__scopeId", "data-v-a7505ec5"]]);
export {
  ze as _
};
