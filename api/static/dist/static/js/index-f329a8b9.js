import { u as L, r as _, o as j, a7 as R, b as y, h as G, i, d as h, f as n, H as C, t as b, am as q, g as W, z as X, a5 as Y, W as U, a9 as D, L as J, X as K, y as Q, $ as Z, Y as ee, c as S, F, G as oe, p as ae } from "./index-7b696e01.js";
import { v as te } from "./el-loading-5050bc7d.js";
import { _ as le } from "./index.vue_vue_type_script_setup_true_lang-7fe9a2b9.js";
import { g as B, D as I } from "./group-a5ba9c36.js";
import { E as ne, a as se } from "./el-tab-pane-08bf2574.js";
const ue = { class: "text-[#182B50] text-opacity-60 text-sm pb-4" }, re = { class: "flex items-center" }, ie = { class: "pr-3 sort-icon cursor-move" }, pe = { class: "flex-1" }, ce = { class: "py-4 flex items-center justify-center" }, de = L({ __name: "index", props: { groupType: { default: 1 }, beforeRemove: {} }, emits: ["change"], setup(x, { expose: V, emit: T }) {
  const p = x, f = T, c = _(false), o = _([]), l = _([]), t = _(false);
  let s = [];
  j(() => {
    u();
  });
  const u = async () => {
    const e = await B.list({ params: { group_type: p.groupType } });
    o.value = [...e], l.value = [...e], o.value.length ? f("change", { value: o.value }) : o.value = [R(I)];
  }, m = async ({ value: e = [] } = {}) => {
    t.value = false, o.value = [], await U(), o.value = [...l.value], s.length && await u(), s = [], e && e.length && (o.value = [...e]), c.value = true;
  }, v = async () => {
    c.value = false;
  }, E = async () => {
    o.value.push({ ...R(I), group_id: -Date.now(), sort: o.value.length }), await U();
    const e = document.querySelector("#group_sortable");
    e.scrollTop = e.scrollHeight;
  }, $ = async ({ index: e }) => {
    const a = o.value[e];
    if (o.value.filter((w) => w.group_id).length === 1)
      return D.warning(window.$t("group_min_one"));
    const r = p.beforeRemove ? p.beforeRemove({ data: a }) : true;
    r !== false && (r.then && r.catch && await r === false || (s.push(a), o.value.splice(e, 1)));
  }, d = async () => {
    for (let e = 0; e < s.length; e++) {
      const a = s[e];
      a.group_id > 0 && await B.delete({ data: { group_id: a.group_id } });
    }
  }, M = async () => {
    if (t.value)
      return;
    const e = o.value.filter((a) => a.group_name.trim());
    if (!e.length)
      return D.warning(window.$t("group_not_empty"));
    t.value = true, await d().catch(() => {
      t.value = false;
    }), await B.save({ data: { group_type: p.groupType, groups: e.map((a, r) => ({ group_name: a.group_name.trim(), group_id: a.group_id > 0 ? a.group_id : 0, sort: e.length - r })) } }).catch(() => {
      t.value = false;
    }), s = [], D.success(window.$t("action_save_success")), u(), v();
  };
  return V({ open: m, close: v }), (e, a) => {
    const r = J, w = K, N = Q, P = le, k = Z, z = ee, H = te;
    return y(), G(z, { modelValue: c.value, "onUpdate:modelValue": a[1] || (a[1] = (g) => c.value = g), title: e.$t("group_management"), width: "680px", "align-center": "", "destroy-on-close": "", "close-on-click-modal": false }, { footer: i(() => [h("div", ce, [n(k, { class: "w-[96px] h-[36px]", type: "primary", loading: t.value, onClick: M }, { default: i(() => [C(b(e.$t("action_save")), 1)]), _: 1 }, 8, ["loading"]), n(k, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: q(v, ["stop"]) }, { default: i(() => [C(b(e.$t("action_cancel")), 1)]), _: 1 })])]), default: i(() => [h("div", ue, b(e.$t("display_order")), 1), W((y(), G(P, { modelValue: o.value, "onUpdate:modelValue": a[0] || (a[0] = (g) => o.value = g), identity: "group_id", customSortableId: "group_sortable", class: "w-full flex flex-col gap-4 max-h-[60vh] overflow-y-auto" }, { item: i(({ item: g, index: O }) => [h("div", re, [h("div", ie, [n(r, { name: "drag", width: "16px", height: "32px", color: "#a1a5af" })]), h("div", pe, [n(w, { modelValue: g.group_name, "onUpdate:modelValue": (A) => g.group_name = A, size: "large", placeholder: e.$t("form_input_placeholder"), class: "w-full", maxlength: "10", "show-word-limit": "" }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])]), n(N, { class: "ml-4 cursor-pointer", color: "rgba(24, 43, 80, 0.4)", onClick: (A) => $({ index: O }) }, { default: i(() => [n(X(Y))]), _: 2 }, 1032, ["onClick"])])]), _: 1 }, 8, ["modelValue"])), [[H, t.value]]), n(k, { type: "primary", link: "", class: "mt-4 ml-5", onClick: E }, { default: i(() => [C(" +" + b(e.$t("action_add")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue", "title"]);
  };
} }), _e = L({ __name: "index", props: { groupType: { default: 1 }, modelValue: { default: "" }, options: { default: [] } }, emits: ["update:modelValue", "change", "get-options"], setup(x, { expose: V, emit: T }) {
  const p = x, f = T, c = _(), o = _(p.modelValue), l = _(p.options), t = () => {
    f("update:modelValue", o.value), f("change", { value: o.value });
  }, s = async ({ value: u = [] } = {}) => {
    l.value = [], await U(), l.value = [{ group_id: "-1", group_name: "all" }, ...u], l.value.find((m) => m.group_id === o.value) || (o.value = l.value[0].group_id, t()), f("get-options", { options: l.value });
  };
  return V({ open: () => {
    var _a;
    (_a = c.value) == null ? void 0 : _a.open();
  } }), (u, m) => {
    const v = ne, E = se, $ = de;
    return y(), S(F, null, [n(E, { modelValue: o.value, "onUpdate:modelValue": m[0] || (m[0] = (d) => o.value = d), class: "group-tabs", type: "card", onTabChange: t }, { default: i(() => [(y(true), S(F, null, oe(l.value, (d) => (y(), G(v, { key: d.group_id, label: u.$t(d.group_name), name: d.group_id }, null, 8, ["label", "name"]))), 128))]), _: 1 }, 8, ["modelValue"]), n($, { ref_key: "group_ref", ref: c, groupType: u.groupType, onChange: s }, null, 8, ["groupType"])], 64);
  };
} });
const ye = ae(_e, [["__scopeId", "data-v-4fbdb850"]]);
export {
  ye as _
};
