import { _ as L, d as F, f as Q } from "./index-76ebd052.js";
import { c as N, E as I, b as W, e as X, g as Y, v as Z, I as ee, J as oe } from "./element-plus-c72880c6.js";
import { K as ae, F as te } from "./@element-plus-0cfad8bb.js";
import { d as M } from "./debounce-f4e6390f.js";
import { d as S, e as c, o as v, J as E, u as C, c as G, M as p, a as w, P as k, n as D, i as ne, K as m, a2 as U, O as le, S as se, H as P, ac as ue } from "./@vue-3b855f7b.js";
import { _ as re } from "./index.vue_vue_type_script_setup_true_lang-2b51690f.js";
import { g as R, D as z } from "./group-89b8a1af.js";
const ie = { class: "text-sm" }, ke = S({ __name: "index", props: { placeholder: { default: "form_input_placeholder" }, size: { default: "default" } }, emits: ["input", "change"], setup(T, { emit: x }) {
  const h = x, r = c(), l = c(""), s = c(false), o = () => {
    s.value = true, D(() => {
      r.value.focus();
    });
  }, u = () => {
    l.value || (s.value = false);
  }, t = M(() => {
    h("input", l.value);
  }, 600), i = M(() => {
    h("change", l.value);
  }, 0);
  return (n, d) => {
    const g = N, b = L;
    return s.value ? (v(), E(g, { key: 0, ref_key: "inputRef", ref: r, modelValue: l.value, "onUpdate:modelValue": d[0] || (d[0] = (V) => l.value = V), style: { "max-width": "230px" }, size: "default", clearable: "", "prefix-icon": C(ae), placeholder: n.$t(n.placeholder), class: "input-with-search", onBlur: u, onInput: C(t), onChange: C(i) }, null, 8, ["modelValue", "prefix-icon", "placeholder", "onInput", "onChange"])) : (v(), G("div", { key: 1, class: "flex items-center gap-1 cursor-pointer text-[#576D9C]", onClick: o }, [p(b, { name: "search", width: "16" }), w("span", ie, k(n.$t("action_search")), 1)]));
  };
} });
const pe = { class: "text-[#182B50] text-opacity-60 text-sm pb-4" }, ce = { class: "flex items-center" }, de = { class: "pr-3 sort-icon cursor-move" }, _e = { class: "flex-1" }, me = { class: "py-4 flex items-center justify-center" }, ge = S({ __name: "index", props: { groupType: { default: 1 }, beforeRemove: {} }, emits: ["change"], setup(T, { expose: x, emit: h }) {
  const r = T, l = h, s = c(false), o = c([]), u = c([]), t = c(false);
  let i = [];
  ne(() => {
    n();
  });
  const n = async () => {
    const e = await R.list({ params: { group_type: r.groupType } });
    o.value = [...e], u.value = [...e], o.value.length ? l("change", { value: o.value }) : o.value = [F(z)];
  }, d = async ({ value: e = [] } = {}) => {
    t.value = false, o.value = [], await D(), o.value = [...u.value], i.length && await n(), i = [], e && e.length && (o.value = [...e]), s.value = true;
  }, g = async () => {
    s.value = false;
  }, b = async () => {
    o.value.push({ ...F(z), group_id: -Date.now(), sort: o.value.length }), await D();
    const e = document.querySelector("#group_sortable");
    e.scrollTop = e.scrollHeight;
  }, V = async ({ index: e }) => {
    const a = o.value[e];
    if (o.value.filter(($) => $.group_id).length === 1)
      return I.warning(window.$t("group_min_one"));
    const _ = r.beforeRemove ? r.beforeRemove({ data: a }) : true;
    _ !== false && (_.then && _.catch && await _ === false || (i.push(a), o.value.splice(e, 1)));
  }, f = async () => {
    for (let e = 0; e < i.length; e++) {
      const a = i[e];
      a.group_id > 0 && await R.delete({ data: { group_id: a.group_id } });
    }
  }, O = async () => {
    if (t.value)
      return;
    const e = o.value.filter((a) => a.group_name.trim());
    if (!e.length)
      return I.warning(window.$t("group_not_empty"));
    t.value = true, await f().catch(() => {
      t.value = false;
    }), await R.save({ data: { group_type: r.groupType, groups: e.map((a, _) => ({ group_name: a.group_name.trim(), group_id: a.group_id > 0 ? a.group_id : 0, sort: e.length - _ })) } }).catch(() => {
      t.value = false;
    }), i = [], I.success(window.$t("action_save_success")), n(), g();
  };
  return x({ open: d, close: g }), (e, a) => {
    const _ = L, $ = N, H = W, J = re, B = X, K = Y, j = Z;
    return v(), E(K, { modelValue: s.value, "onUpdate:modelValue": a[1] || (a[1] = (y) => s.value = y), title: e.$t("group_management"), width: "680px", "align-center": "", "destroy-on-close": "", "close-on-click-modal": false }, { footer: m(() => [w("div", me, [p(B, { class: "w-[96px] h-[36px]", type: "primary", loading: t.value, onClick: O }, { default: m(() => [U(k(e.$t("action_save")), 1)]), _: 1 }, 8, ["loading"]), p(B, { class: "w-[96px] h-[36px] text-[#1D1E1F]", type: "info", plain: "", onClick: le(g, ["stop"]) }, { default: m(() => [U(k(e.$t("action_cancel")), 1)]), _: 1 })])]), default: m(() => [w("div", pe, k(e.$t("display_order")), 1), se((v(), E(J, { modelValue: o.value, "onUpdate:modelValue": a[0] || (a[0] = (y) => o.value = y), identity: "group_id", customSortableId: "group_sortable", class: "w-full flex flex-col gap-4 max-h-[60vh] overflow-y-auto" }, { item: m(({ item: y, index: q }) => [w("div", ce, [w("div", de, [p(_, { name: "drag", width: "16px", height: "32px", color: "#a1a5af" })]), w("div", _e, [p($, { modelValue: y.group_name, "onUpdate:modelValue": (A) => y.group_name = A, size: "large", placeholder: e.$t("form_input_placeholder"), class: "w-full", maxlength: "10", "show-word-limit": "" }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])]), p(H, { class: "ml-4 cursor-pointer", color: "rgba(24, 43, 80, 0.4)", onClick: (A) => V({ index: q }) }, { default: m(() => [p(C(te))]), _: 2 }, 1032, ["onClick"])])]), _: 1 }, 8, ["modelValue"])), [[j, t.value]]), p(B, { type: "primary", link: "", class: "mt-4 ml-5", onClick: b }, { default: m(() => [U(" +" + k(e.$t("action_add")), 1)]), _: 1 })]), _: 1 }, 8, ["modelValue", "title"]);
  };
} }), fe = S({ __name: "index", props: { groupType: { default: 1 }, modelValue: { default: "" }, options: { default: [] } }, emits: ["update:modelValue", "change", "get-options"], setup(T, { expose: x, emit: h }) {
  const r = T, l = h, s = c(), o = c(r.modelValue), u = c(r.options), t = () => {
    l("update:modelValue", o.value), l("change", { value: o.value });
  }, i = async ({ value: n = [] } = {}) => {
    u.value = [], await D(), u.value = [{ group_id: "-1", group_name: "all" }, ...n], u.value.find((d) => d.group_id === o.value) || (o.value = u.value[0].group_id, t()), l("get-options", { options: u.value });
  };
  return x({ open: () => {
    var _a;
    (_a = s.value) == null ? void 0 : _a.open();
  } }), (n, d) => {
    const g = ee, b = oe, V = ge;
    return v(), G(P, null, [p(b, { modelValue: o.value, "onUpdate:modelValue": d[0] || (d[0] = (f) => o.value = f), class: "group-tabs", type: "card", onTabChange: t }, { default: m(() => [(v(true), G(P, null, ue(u.value, (f) => (v(), E(g, { key: f.group_id, label: n.$t(f.group_name), name: f.group_id }, null, 8, ["label", "name"]))), 128))]), _: 1 }, 8, ["modelValue"]), p(V, { ref_key: "group_ref", ref: s, groupType: n.groupType, onChange: i }, null, 8, ["groupType"])], 64);
  };
} });
const Te = Q(fe, [["__scopeId", "data-v-460aaff9"]]);
export {
  Te as _,
  ke as a
};
