import { ap as R, b7 as F, aS as V, aM as N, aU as $, aT as z, aV as O, r as S, ak as X, al as v, cl as w, aY as Y, a_ as Z, at as J, u as _, au as E, b as k, c as G, d as y, g as P, cm as D, z as e, bs as U, n as f, am as h, q as I, H as A, t as K, aC as C, W as T, aN as Q, aR as ee, bu as ae, aX as oe, aZ as le, o as se, an as ne, ae as te, bm as re, aG as ie, a$ as de, aD as ue, c7 as x } from "./index-6feda8be.js";
const L = R({ modelValue: { type: [String, Number, Boolean], default: void 0 }, size: F, disabled: Boolean, label: { type: [String, Number, Boolean], default: void 0 }, value: { type: [String, Number, Boolean], default: void 0 }, name: { type: String, default: void 0 } }), ce = R({ ...L, border: Boolean }), M = { [V]: (o) => N(o) || $(o) || z(o), [O]: (o) => N(o) || $(o) || z(o) }, q = Symbol("radioGroupKey"), H = (o, u) => {
  const s = S(), a = X(q, void 0), i = v(() => !!a), c = v(() => w(o.value) ? o.label : o.value), r = v({ get() {
    return i.value ? a.modelValue : o.modelValue;
  }, set(n) {
    i.value ? a.changeEvent(n) : u && u(V, n), s.value.checked = o.modelValue === c.value;
  } }), d = Y(v(() => a == null ? void 0 : a.size)), l = Z(v(() => a == null ? void 0 : a.disabled)), t = S(false), p = v(() => l.value || i.value && r.value !== c.value ? -1 : 0);
  return J({ from: "label act as value", replacement: "value", version: "3.0.0", scope: "el-radio", ref: "https://element-plus.org/en-US/component/radio.html" }, v(() => i.value && w(o.value))), { radioRef: s, isGroup: i, radioGroup: a, focus: t, size: d, disabled: l, tabIndex: p, modelValue: r, actualValue: c };
}, pe = _({ name: "ElRadio" }), me = _({ ...pe, props: ce, emits: M, setup(o, { emit: u }) {
  const s = o, a = E("radio"), { radioRef: i, radioGroup: c, focus: r, size: d, disabled: l, modelValue: t, actualValue: p } = H(s, u);
  function n() {
    T(() => u("change", t.value));
  }
  return (m, g) => {
    var b;
    return k(), G("label", { class: f([e(a).b(), e(a).is("disabled", e(l)), e(a).is("focus", e(r)), e(a).is("bordered", m.border), e(a).is("checked", e(t) === e(p)), e(a).m(e(d))]) }, [y("span", { class: f([e(a).e("input"), e(a).is("disabled", e(l)), e(a).is("checked", e(t) === e(p))]) }, [P(y("input", { ref_key: "radioRef", ref: i, "onUpdate:modelValue": (B) => U(t) ? t.value = B : null, class: f(e(a).e("original")), value: e(p), name: m.name || ((b = e(c)) == null ? void 0 : b.name), disabled: e(l), checked: e(t) === e(p), type: "radio", onFocus: (B) => r.value = true, onBlur: (B) => r.value = false, onChange: n, onClick: h(() => {
    }, ["stop"]) }, null, 42, ["onUpdate:modelValue", "value", "name", "disabled", "checked", "onFocus", "onBlur", "onClick"]), [[D, e(t)]]), y("span", { class: f(e(a).e("inner")) }, null, 2)], 2), y("span", { class: f(e(a).e("label")), onKeydown: h(() => {
    }, ["stop"]) }, [I(m.$slots, "default", {}, () => [A(K(m.label), 1)])], 42, ["onKeydown"])], 2);
  };
} });
var ve = C(me, [["__file", "radio.vue"]]);
const fe = R({ ...L }), be = _({ name: "ElRadioButton" }), ye = _({ ...be, props: fe, setup(o) {
  const u = o, s = E("radio"), { radioRef: a, focus: i, size: c, disabled: r, modelValue: d, radioGroup: l, actualValue: t } = H(u), p = v(() => ({ backgroundColor: (l == null ? void 0 : l.fill) || "", borderColor: (l == null ? void 0 : l.fill) || "", boxShadow: (l == null ? void 0 : l.fill) ? `-1px 0 0 0 ${l.fill}` : "", color: (l == null ? void 0 : l.textColor) || "" }));
  return (n, m) => {
    var g;
    return k(), G("label", { class: f([e(s).b("button"), e(s).is("active", e(d) === e(t)), e(s).is("disabled", e(r)), e(s).is("focus", e(i)), e(s).bm("button", e(c))]) }, [P(y("input", { ref_key: "radioRef", ref: a, "onUpdate:modelValue": (b) => U(d) ? d.value = b : null, class: f(e(s).be("button", "original-radio")), value: e(t), type: "radio", name: n.name || ((g = e(l)) == null ? void 0 : g.name), disabled: e(r), onFocus: (b) => i.value = true, onBlur: (b) => i.value = false, onClick: h(() => {
    }, ["stop"]) }, null, 42, ["onUpdate:modelValue", "value", "name", "disabled", "onFocus", "onBlur", "onClick"]), [[D, e(d)]]), y("span", { class: f(e(s).be("button", "inner")), style: Q(e(d) === e(t) ? e(p) : {}), onKeydown: h(() => {
    }, ["stop"]) }, [I(n.$slots, "default", {}, () => [A(K(n.label), 1)])], 46, ["onKeydown"])], 2);
  };
} });
var W = C(ye, [["__file", "radio-button.vue"]]);
const _e = R({ id: { type: String, default: void 0 }, size: F, disabled: Boolean, modelValue: { type: [String, Number, Boolean], default: void 0 }, fill: { type: String, default: "" }, textColor: { type: String, default: "" }, name: { type: String, default: void 0 }, validateEvent: { type: Boolean, default: true }, ...ee(["ariaLabel"]) }), ge = M, he = _({ name: "ElRadioGroup" }), Re = _({ ...he, props: _e, emits: ge, setup(o, { emit: u }) {
  const s = o, a = E("radio"), i = ae(), c = S(), { formItem: r } = oe(), { inputId: d, isLabeledByFormItem: l } = le(s, { formItemContext: r }), t = (n) => {
    u(V, n), T(() => u("change", n));
  };
  se(() => {
    const n = c.value.querySelectorAll("[type=radio]"), m = n[0];
    !Array.from(n).some((g) => g.checked) && m && (m.tabIndex = 0);
  });
  const p = v(() => s.name || i.value);
  return ne(q, te({ ...re(s), changeEvent: t, name: p })), ie(() => s.modelValue, () => {
    s.validateEvent && (r == null ? void 0 : r.validate("change").catch((n) => de()));
  }), (n, m) => (k(), G("div", { id: e(d), ref_key: "radioGroupRef", ref: c, class: f(e(a).b("group")), role: "radiogroup", "aria-label": e(l) ? void 0 : n.ariaLabel || "radio-group", "aria-labelledby": e(l) ? e(r).labelId : void 0 }, [I(n.$slots, "default")], 10, ["id", "aria-label", "aria-labelledby"]));
} });
var j = C(Re, [["__file", "radio-group.vue"]]);
const Se = ue(ve, { RadioButton: W, RadioGroup: j }), Ve = x(j);
x(W);
export {
  Se as E,
  Ve as a
};
