import { aP as B, bD as F, bp as S, b5 as N, br as w, bq as z, bs as V, r as E, aI as W, Y as v, cB as P, bg as Y, bw as Z, aT as Q, y as _, aU as k, b as I, c as C, d as y, m as x, cC as D, u as e, bd as U, q as m, x as h, s as G, L as A, t as K, a$ as $, n as L, a7 as X, bo as ee, bJ as ae, bu as oe, bv as le, o as se, ax as ne, Z as te, b7 as re, $ as ie, bx as de, b0 as ue, cl as T } from "./index-8579fe4a.js";
const M = B({ modelValue: { type: [String, Number, Boolean], default: void 0 }, size: F, disabled: Boolean, label: { type: [String, Number, Boolean], default: void 0 }, value: { type: [String, Number, Boolean], default: void 0 }, name: { type: String, default: void 0 } }), ce = B({ ...M, border: Boolean }), q = { [S]: (o) => N(o) || w(o) || z(o), [V]: (o) => N(o) || w(o) || z(o) }, j = Symbol("radioGroupKey"), H = (o, u) => {
  const s = E(), a = W(j, void 0), i = v(() => !!a), c = v(() => P(o.value) ? o.label : o.value), r = v({ get() {
    return i.value ? a.modelValue : o.modelValue;
  }, set(n) {
    i.value ? a.changeEvent(n) : u && u(S, n), s.value.checked = o.modelValue === c.value;
  } }), d = Y(v(() => a == null ? void 0 : a.size)), l = Z(v(() => a == null ? void 0 : a.disabled)), t = E(false), p = v(() => l.value || i.value && r.value !== c.value ? -1 : 0);
  return Q({ from: "label act as value", replacement: "value", version: "3.0.0", scope: "el-radio", ref: "https://element-plus.org/en-US/component/radio.html" }, v(() => i.value && P(o.value))), { radioRef: s, isGroup: i, radioGroup: a, focus: t, size: d, disabled: l, tabIndex: p, modelValue: r, actualValue: c };
}, pe = _({ name: "ElRadio" }), be = _({ ...pe, props: ce, emits: q, setup(o, { emit: u }) {
  const s = o, a = k("radio"), { radioRef: i, radioGroup: c, focus: r, size: d, disabled: l, modelValue: t, actualValue: p } = H(s, u);
  function n() {
    L(() => u(V, t.value));
  }
  return (b, g) => {
    var f;
    return I(), C("label", { class: m([e(a).b(), e(a).is("disabled", e(l)), e(a).is("focus", e(r)), e(a).is("bordered", b.border), e(a).is("checked", e(t) === e(p)), e(a).m(e(d))]) }, [y("span", { class: m([e(a).e("input"), e(a).is("disabled", e(l)), e(a).is("checked", e(t) === e(p))]) }, [x(y("input", { ref_key: "radioRef", ref: i, "onUpdate:modelValue": (R) => U(t) ? t.value = R : null, class: m(e(a).e("original")), value: e(p), name: b.name || ((f = e(c)) == null ? void 0 : f.name), disabled: e(l), checked: e(t) === e(p), type: "radio", onFocus: (R) => r.value = true, onBlur: (R) => r.value = false, onChange: n, onClick: h(() => {
    }, ["stop"]) }, null, 42, ["onUpdate:modelValue", "value", "name", "disabled", "checked", "onFocus", "onBlur", "onClick"]), [[D, e(t)]]), y("span", { class: m(e(a).e("inner")) }, null, 2)], 2), y("span", { class: m(e(a).e("label")), onKeydown: h(() => {
    }, ["stop"]) }, [G(b.$slots, "default", {}, () => [A(K(b.label), 1)])], 42, ["onKeydown"])], 2);
  };
} });
var ve = $(be, [["__file", "radio.vue"]]);
const me = B({ ...M }), fe = _({ name: "ElRadioButton" }), ye = _({ ...fe, props: me, setup(o) {
  const u = o, s = k("radio"), { radioRef: a, focus: i, size: c, disabled: r, modelValue: d, radioGroup: l, actualValue: t } = H(u), p = v(() => ({ backgroundColor: (l == null ? void 0 : l.fill) || "", borderColor: (l == null ? void 0 : l.fill) || "", boxShadow: (l == null ? void 0 : l.fill) ? `-1px 0 0 0 ${l.fill}` : "", color: (l == null ? void 0 : l.textColor) || "" }));
  return (n, b) => {
    var g;
    return I(), C("label", { class: m([e(s).b("button"), e(s).is("active", e(d) === e(t)), e(s).is("disabled", e(r)), e(s).is("focus", e(i)), e(s).bm("button", e(c))]) }, [x(y("input", { ref_key: "radioRef", ref: a, "onUpdate:modelValue": (f) => U(d) ? d.value = f : null, class: m(e(s).be("button", "original-radio")), value: e(t), type: "radio", name: n.name || ((g = e(l)) == null ? void 0 : g.name), disabled: e(r), onFocus: (f) => i.value = true, onBlur: (f) => i.value = false, onClick: h(() => {
    }, ["stop"]) }, null, 42, ["onUpdate:modelValue", "value", "name", "disabled", "onFocus", "onBlur", "onClick"]), [[D, e(d)]]), y("span", { class: m(e(s).be("button", "inner")), style: X(e(d) === e(t) ? e(p) : {}), onKeydown: h(() => {
    }, ["stop"]) }, [G(n.$slots, "default", {}, () => [A(K(n.label), 1)])], 46, ["onKeydown"])], 2);
  };
} });
var J = $(ye, [["__file", "radio-button.vue"]]);
const _e = B({ id: { type: String, default: void 0 }, size: F, disabled: Boolean, modelValue: { type: [String, Number, Boolean], default: void 0 }, fill: { type: String, default: "" }, textColor: { type: String, default: "" }, name: { type: String, default: void 0 }, validateEvent: { type: Boolean, default: true }, ...ee(["ariaLabel"]) }), ge = q, he = _({ name: "ElRadioGroup" }), Be = _({ ...he, props: _e, emits: ge, setup(o, { emit: u }) {
  const s = o, a = k("radio"), i = ae(), c = E(), { formItem: r } = oe(), { inputId: d, isLabeledByFormItem: l } = le(s, { formItemContext: r }), t = (n) => {
    u(S, n), L(() => u(V, n));
  };
  se(() => {
    const n = c.value.querySelectorAll("[type=radio]"), b = n[0];
    !Array.from(n).some((g) => g.checked) && b && (b.tabIndex = 0);
  });
  const p = v(() => s.name || i.value);
  return ne(j, te({ ...re(s), changeEvent: t, name: p })), ie(() => s.modelValue, () => {
    s.validateEvent && (r == null ? void 0 : r.validate("change").catch((n) => de()));
  }), (n, b) => (I(), C("div", { id: e(d), ref_key: "radioGroupRef", ref: c, class: m(e(a).b("group")), role: "radiogroup", "aria-label": e(l) ? void 0 : n.ariaLabel || "radio-group", "aria-labelledby": e(l) ? e(r).labelId : void 0 }, [G(n.$slots, "default")], 10, ["id", "aria-label", "aria-labelledby"]));
} });
var O = $(Be, [["__file", "radio-group.vue"]]);
const Ee = ue(ve, { RadioButton: J, RadioGroup: O }), Se = T(O);
T(J);
export {
  Ee as E,
  Se as a
};
