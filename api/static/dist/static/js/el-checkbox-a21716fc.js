import { bD as ee, bo as ae, bp as w, b5 as Y, br as J, bq as U, aI as I, Y as f, bF as P, bw as ge, bu as R, h as le, $ as ne, bx as te, bs as T, n as oe, r as A, ce as F, cB as O, bc as Ce, cD as Q, bg as X, bv as ue, aT as z, y as E, aS as se, aU as j, b as x, j as ie, w as re, d as Z, q as C, u as n, m as N, c as S, bd as $, x as D, cE as G, s as K, F as xe, L as ce, t as de, e as M, ao as be, a$ as q, a7 as Ve, aP as ye, b1 as Se, ax as Le, cF as Be, b7 as Ee, b0 as _e, cl as ve } from "./index-8579fe4a.js";
import { i as Fe } from "./isEqual-8c73ec38.js";
const me = { modelValue: { type: [Number, String, Boolean], default: void 0 }, label: { type: [String, Boolean, Number, Object], default: void 0 }, value: { type: [String, Boolean, Number, Object], default: void 0 }, indeterminate: Boolean, disabled: Boolean, checked: Boolean, name: { type: String, default: void 0 }, trueValue: { type: [String, Number], default: void 0 }, falseValue: { type: [String, Number], default: void 0 }, trueLabel: { type: [String, Number], default: void 0 }, falseLabel: { type: [String, Number], default: void 0 }, id: { type: String, default: void 0 }, border: Boolean, size: ee, tabindex: [String, Number], validateEvent: { type: Boolean, default: true }, ...ae(["ariaControls"]) }, fe = { [w]: (e) => Y(e) || J(e) || U(e), change: (e) => Y(e) || J(e) || U(e) }, _ = Symbol("checkboxGroupContextKey"), Ie = ({ model: e, isChecked: c }) => {
  const i = I(_, void 0), l = f(() => {
    var r, d;
    const t = (r = i == null ? void 0 : i.max) == null ? void 0 : r.value, v = (d = i == null ? void 0 : i.min) == null ? void 0 : d.value;
    return !P(t) && e.value.length >= t && !c.value || !P(v) && e.value.length <= v && c.value;
  });
  return { isDisabled: ge(f(() => (i == null ? void 0 : i.disabled.value) || l.value)), isLimitDisabled: l };
}, Ne = (e, { model: c, isLimitExceeded: i, hasOwnLabel: l, isDisabled: b, isLabeledByFormItem: r }) => {
  const d = I(_, void 0), { formItem: t } = R(), { emit: v } = le();
  function s(a) {
    var h, k, u, p;
    return [true, e.trueValue, e.trueLabel].includes(a) ? (k = (h = e.trueValue) != null ? h : e.trueLabel) != null ? k : true : (p = (u = e.falseValue) != null ? u : e.falseLabel) != null ? p : false;
  }
  function o(a, h) {
    v(T, s(a), h);
  }
  function m(a) {
    if (i.value)
      return;
    const h = a.target;
    v(T, s(h.checked), a);
  }
  async function V(a) {
    i.value || !l.value && !b.value && r.value && (a.composedPath().some((u) => u.tagName === "LABEL") || (c.value = s([false, e.falseValue, e.falseLabel].includes(c.value)), await oe(), o(c.value, a)));
  }
  const L = f(() => (d == null ? void 0 : d.validateEvent) || e.validateEvent);
  return ne(() => e.modelValue, () => {
    L.value && (t == null ? void 0 : t.validate("change").catch((a) => te()));
  }), { handleChange: m, onClickRoot: V };
}, $e = (e) => {
  const c = A(false), { emit: i } = le(), l = I(_, void 0), b = f(() => P(l) === false), r = A(false), d = f({ get() {
    var t, v;
    return b.value ? (t = l == null ? void 0 : l.modelValue) == null ? void 0 : t.value : (v = e.modelValue) != null ? v : c.value;
  }, set(t) {
    var v, s;
    b.value && F(t) ? (r.value = ((v = l == null ? void 0 : l.max) == null ? void 0 : v.value) !== void 0 && t.length > (l == null ? void 0 : l.max.value) && t.length > d.value.length, r.value === false && ((s = l == null ? void 0 : l.changeEvent) == null || s.call(l, t))) : (i(w, t), c.value = t);
  } });
  return { model: d, isGroup: b, isLimitExceeded: r };
}, De = (e, c, { model: i }) => {
  const l = I(_, void 0), b = A(false), r = f(() => O(e.value) ? e.label : e.value), d = f(() => {
    const o = i.value;
    return U(o) ? o : F(o) ? Ce(r.value) ? o.map(Q).some((m) => Fe(m, r.value)) : o.map(Q).includes(r.value) : o != null ? o === e.trueValue || o === e.trueLabel : !!o;
  }), t = X(f(() => {
    var o;
    return (o = l == null ? void 0 : l.size) == null ? void 0 : o.value;
  }), { prop: true }), v = X(f(() => {
    var o;
    return (o = l == null ? void 0 : l.size) == null ? void 0 : o.value;
  })), s = f(() => !!c.default || !O(r.value));
  return { checkboxButtonSize: t, isChecked: d, isFocused: b, checkboxSize: v, hasOwnLabel: s, actualValue: r };
}, he = (e, c) => {
  const { formItem: i } = R(), { model: l, isGroup: b, isLimitExceeded: r } = $e(e), { isFocused: d, isChecked: t, checkboxButtonSize: v, checkboxSize: s, hasOwnLabel: o, actualValue: m } = De(e, c, { model: l }), { isDisabled: V } = Ie({ model: l, isChecked: t }), { inputId: L, isLabeledByFormItem: a } = ue(e, { formItemContext: i, disableIdGeneration: o, disableIdManagement: b }), { handleChange: h, onClickRoot: k } = Ne(e, { model: l, isLimitExceeded: r, hasOwnLabel: o, isDisabled: V, isLabeledByFormItem: a });
  return (() => {
    function p() {
      var y, g;
      F(l.value) && !l.value.includes(m.value) ? l.value.push(m.value) : l.value = (g = (y = e.trueValue) != null ? y : e.trueLabel) != null ? g : true;
    }
    e.checked && p();
  })(), z({ from: "label act as value", replacement: "value", version: "3.0.0", scope: "el-checkbox", ref: "https://element-plus.org/en-US/component/checkbox.html" }, f(() => b.value && O(e.value))), z({ from: "true-label", replacement: "true-value", version: "3.0.0", scope: "el-checkbox", ref: "https://element-plus.org/en-US/component/checkbox.html" }, f(() => !!e.trueLabel)), z({ from: "false-label", replacement: "false-value", version: "3.0.0", scope: "el-checkbox", ref: "https://element-plus.org/en-US/component/checkbox.html" }, f(() => !!e.falseLabel)), { inputId: L, isLabeledByFormItem: a, isChecked: t, isDisabled: V, isFocused: d, checkboxButtonSize: v, checkboxSize: s, hasOwnLabel: o, model: l, actualValue: m, handleChange: h, onClickRoot: k };
}, Ge = E({ name: "ElCheckbox" }), we = E({ ...Ge, props: me, emits: fe, setup(e) {
  const c = e, i = se(), { inputId: l, isLabeledByFormItem: b, isChecked: r, isDisabled: d, isFocused: t, checkboxSize: v, hasOwnLabel: s, model: o, actualValue: m, handleChange: V, onClickRoot: L } = he(c, i), a = j("checkbox"), h = f(() => [a.b(), a.m(v.value), a.is("disabled", d.value), a.is("bordered", c.border), a.is("checked", r.value)]), k = f(() => [a.e("input"), a.is("disabled", d.value), a.is("checked", r.value), a.is("indeterminate", c.indeterminate), a.is("focus", t.value)]);
  return (u, p) => (x(), ie(be(!n(s) && n(b) ? "span" : "label"), { class: C(n(h)), "aria-controls": u.indeterminate ? u.ariaControls : null, onClick: n(L) }, { default: re(() => {
    var y, g, H, W;
    return [Z("span", { class: C(n(k)) }, [u.trueValue || u.falseValue || u.trueLabel || u.falseLabel ? N((x(), S("input", { key: 0, id: n(l), "onUpdate:modelValue": (B) => $(o) ? o.value = B : null, class: C(n(a).e("original")), type: "checkbox", indeterminate: u.indeterminate, name: u.name, tabindex: u.tabindex, disabled: n(d), "true-value": (g = (y = u.trueValue) != null ? y : u.trueLabel) != null ? g : true, "false-value": (W = (H = u.falseValue) != null ? H : u.falseLabel) != null ? W : false, onChange: n(V), onFocus: (B) => t.value = true, onBlur: (B) => t.value = false, onClick: D(() => {
    }, ["stop"]) }, null, 42, ["id", "onUpdate:modelValue", "indeterminate", "name", "tabindex", "disabled", "true-value", "false-value", "onChange", "onFocus", "onBlur", "onClick"])), [[G, n(o)]]) : N((x(), S("input", { key: 1, id: n(l), "onUpdate:modelValue": (B) => $(o) ? o.value = B : null, class: C(n(a).e("original")), type: "checkbox", indeterminate: u.indeterminate, disabled: n(d), value: n(m), name: u.name, tabindex: u.tabindex, onChange: n(V), onFocus: (B) => t.value = true, onBlur: (B) => t.value = false, onClick: D(() => {
    }, ["stop"]) }, null, 42, ["id", "onUpdate:modelValue", "indeterminate", "disabled", "value", "name", "tabindex", "onChange", "onFocus", "onBlur", "onClick"])), [[G, n(o)]]), Z("span", { class: C(n(a).e("inner")) }, null, 2)], 2), n(s) ? (x(), S("span", { key: 0, class: C(n(a).e("label")) }, [K(u.$slots, "default"), u.$slots.default ? M("v-if", true) : (x(), S(xe, { key: 0 }, [ce(de(u.label), 1)], 64))], 2)) : M("v-if", true)];
  }), _: 3 }, 8, ["class", "aria-controls", "onClick"]));
} });
var ze = q(we, [["__file", "checkbox.vue"]]);
const Ue = E({ name: "ElCheckboxButton" }), Pe = E({ ...Ue, props: me, emits: fe, setup(e) {
  const c = e, i = se(), { isFocused: l, isChecked: b, isDisabled: r, checkboxButtonSize: d, model: t, actualValue: v, handleChange: s } = he(c, i), o = I(_, void 0), m = j("checkbox"), V = f(() => {
    var a, h, k, u;
    const p = (h = (a = o == null ? void 0 : o.fill) == null ? void 0 : a.value) != null ? h : "";
    return { backgroundColor: p, borderColor: p, color: (u = (k = o == null ? void 0 : o.textColor) == null ? void 0 : k.value) != null ? u : "", boxShadow: p ? `-1px 0 0 0 ${p}` : void 0 };
  }), L = f(() => [m.b("button"), m.bm("button", d.value), m.is("disabled", r.value), m.is("checked", b.value), m.is("focus", l.value)]);
  return (a, h) => {
    var k, u, p, y;
    return x(), S("label", { class: C(n(L)) }, [a.trueValue || a.falseValue || a.trueLabel || a.falseLabel ? N((x(), S("input", { key: 0, "onUpdate:modelValue": (g) => $(t) ? t.value = g : null, class: C(n(m).be("button", "original")), type: "checkbox", name: a.name, tabindex: a.tabindex, disabled: n(r), "true-value": (u = (k = a.trueValue) != null ? k : a.trueLabel) != null ? u : true, "false-value": (y = (p = a.falseValue) != null ? p : a.falseLabel) != null ? y : false, onChange: n(s), onFocus: (g) => l.value = true, onBlur: (g) => l.value = false, onClick: D(() => {
    }, ["stop"]) }, null, 42, ["onUpdate:modelValue", "name", "tabindex", "disabled", "true-value", "false-value", "onChange", "onFocus", "onBlur", "onClick"])), [[G, n(t)]]) : N((x(), S("input", { key: 1, "onUpdate:modelValue": (g) => $(t) ? t.value = g : null, class: C(n(m).be("button", "original")), type: "checkbox", name: a.name, tabindex: a.tabindex, disabled: n(r), value: n(v), onChange: n(s), onFocus: (g) => l.value = true, onBlur: (g) => l.value = false, onClick: D(() => {
    }, ["stop"]) }, null, 42, ["onUpdate:modelValue", "name", "tabindex", "disabled", "value", "onChange", "onFocus", "onBlur", "onClick"])), [[G, n(t)]]), a.$slots.default || a.label ? (x(), S("span", { key: 2, class: C(n(m).be("button", "inner")), style: Ve(n(b) ? n(V) : void 0) }, [K(a.$slots, "default", {}, () => [ce(de(a.label), 1)])], 6)) : M("v-if", true)], 2);
  };
} });
var ke = q(Pe, [["__file", "checkbox-button.vue"]]);
const Te = ye({ modelValue: { type: Se(Array), default: () => [] }, disabled: Boolean, min: Number, max: Number, size: ee, fill: String, textColor: String, tag: { type: String, default: "div" }, validateEvent: { type: Boolean, default: true }, ...ae(["ariaLabel"]) }), Ae = { [w]: (e) => F(e), change: (e) => F(e) }, Oe = E({ name: "ElCheckboxGroup" }), Me = E({ ...Oe, props: Te, emits: Ae, setup(e, { emit: c }) {
  const i = e, l = j("checkbox"), { formItem: b } = R(), { inputId: r, isLabeledByFormItem: d } = ue(i, { formItemContext: b }), t = async (s) => {
    c(w, s), await oe(), c(T, s);
  }, v = f({ get() {
    return i.modelValue;
  }, set(s) {
    t(s);
  } });
  return Le(_, { ...Be(Ee(i), ["size", "min", "max", "disabled", "validateEvent", "fill", "textColor"]), modelValue: v, changeEvent: t }), ne(() => i.modelValue, () => {
    i.validateEvent && (b == null ? void 0 : b.validate("change").catch((s) => te()));
  }), (s, o) => {
    var m;
    return x(), ie(be(s.tag), { id: n(r), class: C(n(l).b("group")), role: "group", "aria-label": n(d) ? void 0 : s.ariaLabel || "checkbox-group", "aria-labelledby": n(d) ? (m = n(b)) == null ? void 0 : m.labelId : void 0 }, { default: re(() => [K(s.$slots, "default")]), _: 3 }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
  };
} });
var pe = q(Me, [["__file", "checkbox-group.vue"]]);
const Ke = _e(ze, { CheckboxButton: ke, CheckboxGroup: pe });
ve(ke);
const qe = ve(pe);
export {
  Ke as E,
  qe as a
};
