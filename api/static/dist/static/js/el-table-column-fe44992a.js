import { dL as vn, dM as pn, dd as mn, a2 as Tt, dN as dt, dO as gn, cp as al, cx as sl, dP as bn, dQ as yn, d7 as Cn, dR as wn, dS as Sn, dT as rl, cs as gt, cu as xn, cw as En, dU as Ln, dV as kn, dW as Rn, dX as Dt, dY as Nn, dZ as Fn, cv as On, d_ as Tn, d$ as Mn, a3 as Ae, b7 as Mt, aR as il, aS as ft, aM as fe, aU as Oe, aT as Ee, ak as se, al as T, b9 as Ce, a_ as Wn, aX as Wt, b3 as ne, aG as de, a$ as ul, W as Me, r as L, b_ as ee, cl as $e, br as je, df as _t, aY as bt, aZ as cl, at as vt, u as he, as as dl, au as ve, b as I, h as Fe, i as Re, d as ae, n as B, z as O, g as Te, c as X, bs as Ue, am as at, e0 as st, q as Le, F as rt, H as ht, t as Ne, e as xe, aO as fl, aC as Ve, aN as He, ap as $n, aH as Hn, an as hl, e1 as An, bm as vl, aD as pl, c7 as $t, cy as Ge, m as ye, aE as Pn, f as we, ab as ml, e2 as jt, e3 as gl, U as Bn, da as Ut, y as Ht, I as Vn, bc as Kn, cz as zn, av as bl, cC as be, af as yl, G as Gt, e4 as Cl, o as qe, ba as In, a as At, bq as it, c1 as Dn, dI as ze, bo as Ye, ae as _n, a1 as P, w as Ie, bR as Yt, c3 as qt, bg as wl, v as Xt, bS as Sl, b1 as jn, e5 as Un } from "./index-7b696e01.js";
import { E as xl } from "./el-scrollbar-a17df1f1.js";
import { d as Gn } from "./el-select-2909247e.js";
import { d as ut } from "./debounce-c1af5016.js";
import { i as Yn } from "./isEqual-71b69c76.js";
function qn(e, t) {
  return vn(pn(e, t, mn), e + "");
}
function Xn(e, t, n) {
  if (!Tt(n))
    return false;
  var l = typeof t;
  return (l == "number" ? dt(n) && gn(t, n.length) : l == "string" && t in n) ? al(n[t], e) : false;
}
function Qn(e) {
  return qn(function(t, n) {
    var l = -1, s = n.length, r = s > 1 ? n[s - 1] : void 0, i = s > 2 ? n[2] : void 0;
    for (r = e.length > 3 && typeof r == "function" ? (s--, r) : void 0, i && Xn(n[0], n[1], i) && (r = s < 3 ? void 0 : r, s = 1), t = Object(t); ++l < s; ) {
      var o = n[l];
      o && e(t, o, l, r);
    }
    return t;
  });
}
var Zn = "[object Object]", Jn = Function.prototype, eo = Object.prototype, El = Jn.toString, to = eo.hasOwnProperty, lo = El.call(Object);
function no(e) {
  if (!sl(e) || bn(e) != Zn)
    return false;
  var t = yn(e);
  if (t === null)
    return true;
  var n = to.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && El.call(n) == lo;
}
function oo(e) {
  return function(t, n, l) {
    for (var s = -1, r = Object(t), i = l(t), o = i.length; o--; ) {
      var a = i[e ? o : ++s];
      if (n(r[a], a, r) === false)
        break;
    }
    return t;
  };
}
var ao = oo();
const Ll = ao;
function so(e, t) {
  return e && Ll(e, t, Cn);
}
function ro(e, t) {
  return function(n, l) {
    if (n == null)
      return n;
    if (!dt(n))
      return e(n, l);
    for (var s = n.length, r = t ? s : -1, i = Object(n); (t ? r-- : ++r < s) && l(i[r], r, i) !== false; )
      ;
    return n;
  };
}
var io = ro(so);
const uo = io;
function yt(e, t, n) {
  (n !== void 0 && !al(e[t], n) || n === void 0 && !(t in e)) && wn(e, t, n);
}
function co(e) {
  return sl(e) && dt(e);
}
function Ct(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function fo(e) {
  return Sn(e, rl(e));
}
function ho(e, t, n, l, s, r, i) {
  var o = Ct(e, n), a = Ct(t, n), u = i.get(a);
  if (u) {
    yt(e, n, u);
    return;
  }
  var c = r ? r(o, a, n + "", e, t, i) : void 0, f = c === void 0;
  if (f) {
    var v = gt(a), y = !v && xn(a), h = !v && !y && En(a);
    c = a, v || y || h ? gt(o) ? c = o : co(o) ? c = Ln(o) : y ? (f = false, c = kn(a, true)) : h ? (f = false, c = Rn(a, true)) : c = [] : no(a) || Dt(a) ? (c = o, Dt(o) ? c = fo(o) : (!Tt(o) || Nn(o)) && (c = Fn(a))) : f = false;
  }
  f && (i.set(a, c), s(c, a, l, r, i), i.delete(a)), yt(e, n, c);
}
function kl(e, t, n, l, s) {
  e !== t && Ll(t, function(r, i) {
    if (s || (s = new On()), Tt(r))
      ho(e, t, i, n, kl, l, s);
    else {
      var o = l ? l(Ct(e, i), r, i + "", e, t, s) : void 0;
      o === void 0 && (o = r), yt(e, i, o);
    }
  }, rl);
}
function vo(e, t) {
  var n = -1, l = dt(e) ? Array(e.length) : [];
  return uo(e, function(s, r, i) {
    l[++n] = t(s, r, i);
  }), l;
}
function po(e, t) {
  var n = gt(e) ? Tn : vo;
  return n(e, Gn(t));
}
function mo(e, t) {
  return Mn(po(e, t), 1);
}
function Xe(e) {
  return e === null;
}
var go = Qn(function(e, t, n) {
  kl(e, t, n);
});
const Rl = go, bo = (e) => Ae ? window.requestAnimationFrame(e) : setTimeout(e, 16), Nl = { modelValue: { type: [Number, String, Boolean], default: void 0 }, label: { type: [String, Boolean, Number, Object], default: void 0 }, value: { type: [String, Boolean, Number, Object], default: void 0 }, indeterminate: Boolean, disabled: Boolean, checked: Boolean, name: { type: String, default: void 0 }, trueValue: { type: [String, Number], default: void 0 }, falseValue: { type: [String, Number], default: void 0 }, trueLabel: { type: [String, Number], default: void 0 }, falseLabel: { type: [String, Number], default: void 0 }, id: { type: String, default: void 0 }, border: Boolean, size: Mt, tabindex: [String, Number], validateEvent: { type: Boolean, default: true }, ...il(["ariaControls"]) }, Fl = { [ft]: (e) => fe(e) || Oe(e) || Ee(e), change: (e) => fe(e) || Oe(e) || Ee(e) }, Ke = Symbol("checkboxGroupContextKey"), yo = ({ model: e, isChecked: t }) => {
  const n = se(Ke, void 0), l = T(() => {
    var r, i;
    const o = (r = n == null ? void 0 : n.max) == null ? void 0 : r.value, a = (i = n == null ? void 0 : n.min) == null ? void 0 : i.value;
    return !Ce(o) && e.value.length >= o && !t.value || !Ce(a) && e.value.length <= a && t.value;
  });
  return { isDisabled: Wn(T(() => (n == null ? void 0 : n.disabled.value) || l.value)), isLimitDisabled: l };
}, Co = (e, { model: t, isLimitExceeded: n, hasOwnLabel: l, isDisabled: s, isLabeledByFormItem: r }) => {
  const i = se(Ke, void 0), { formItem: o } = Wt(), { emit: a } = ne();
  function u(h) {
    var b, g, C, k;
    return [true, e.trueValue, e.trueLabel].includes(h) ? (g = (b = e.trueValue) != null ? b : e.trueLabel) != null ? g : true : (k = (C = e.falseValue) != null ? C : e.falseLabel) != null ? k : false;
  }
  function c(h, b) {
    a("change", u(h), b);
  }
  function f(h) {
    if (n.value)
      return;
    const b = h.target;
    a("change", u(b.checked), h);
  }
  async function v(h) {
    n.value || !l.value && !s.value && r.value && (h.composedPath().some((C) => C.tagName === "LABEL") || (t.value = u([false, e.falseValue, e.falseLabel].includes(t.value)), await Me(), c(t.value, h)));
  }
  const y = T(() => (i == null ? void 0 : i.validateEvent) || e.validateEvent);
  return de(() => e.modelValue, () => {
    y.value && (o == null ? void 0 : o.validate("change").catch((h) => ul()));
  }), { handleChange: f, onClickRoot: v };
}, wo = (e) => {
  const t = L(false), { emit: n } = ne(), l = se(Ke, void 0), s = T(() => Ce(l) === false), r = L(false), i = T({ get() {
    var o, a;
    return s.value ? (o = l == null ? void 0 : l.modelValue) == null ? void 0 : o.value : (a = e.modelValue) != null ? a : t.value;
  }, set(o) {
    var a, u;
    s.value && ee(o) ? (r.value = ((a = l == null ? void 0 : l.max) == null ? void 0 : a.value) !== void 0 && o.length > (l == null ? void 0 : l.max.value) && o.length > i.value.length, r.value === false && ((u = l == null ? void 0 : l.changeEvent) == null || u.call(l, o))) : (n(ft, o), t.value = o);
  } });
  return { model: i, isGroup: s, isLimitExceeded: r };
}, So = (e, t, { model: n }) => {
  const l = se(Ke, void 0), s = L(false), r = T(() => $e(e.value) ? e.label : e.value), i = T(() => {
    const c = n.value;
    return Ee(c) ? c : ee(c) ? je(r.value) ? c.map(_t).some((f) => Yn(f, r.value)) : c.map(_t).includes(r.value) : c != null ? c === e.trueValue || c === e.trueLabel : !!c;
  }), o = bt(T(() => {
    var c;
    return (c = l == null ? void 0 : l.size) == null ? void 0 : c.value;
  }), { prop: true }), a = bt(T(() => {
    var c;
    return (c = l == null ? void 0 : l.size) == null ? void 0 : c.value;
  })), u = T(() => !!t.default || !$e(r.value));
  return { checkboxButtonSize: o, isChecked: i, isFocused: s, checkboxSize: a, hasOwnLabel: u, actualValue: r };
}, Ol = (e, t) => {
  const { formItem: n } = Wt(), { model: l, isGroup: s, isLimitExceeded: r } = wo(e), { isFocused: i, isChecked: o, checkboxButtonSize: a, checkboxSize: u, hasOwnLabel: c, actualValue: f } = So(e, t, { model: l }), { isDisabled: v } = yo({ model: l, isChecked: o }), { inputId: y, isLabeledByFormItem: h } = cl(e, { formItemContext: n, disableIdGeneration: c, disableIdManagement: s }), { handleChange: b, onClickRoot: g } = Co(e, { model: l, isLimitExceeded: r, hasOwnLabel: c, isDisabled: v, isLabeledByFormItem: h });
  return (() => {
    function k() {
      var x, d;
      ee(l.value) && !l.value.includes(f.value) ? l.value.push(f.value) : l.value = (d = (x = e.trueValue) != null ? x : e.trueLabel) != null ? d : true;
    }
    e.checked && k();
  })(), vt({ from: "label act as value", replacement: "value", version: "3.0.0", scope: "el-checkbox", ref: "https://element-plus.org/en-US/component/checkbox.html" }, T(() => s.value && $e(e.value))), vt({ from: "true-label", replacement: "true-value", version: "3.0.0", scope: "el-checkbox", ref: "https://element-plus.org/en-US/component/checkbox.html" }, T(() => !!e.trueLabel)), vt({ from: "false-label", replacement: "false-value", version: "3.0.0", scope: "el-checkbox", ref: "https://element-plus.org/en-US/component/checkbox.html" }, T(() => !!e.falseLabel)), { inputId: y, isLabeledByFormItem: h, isChecked: o, isDisabled: v, isFocused: i, checkboxButtonSize: a, checkboxSize: u, hasOwnLabel: c, model: l, actualValue: f, handleChange: b, onClickRoot: g };
}, xo = he({ name: "ElCheckbox" }), Eo = he({ ...xo, props: Nl, emits: Fl, setup(e) {
  const t = e, n = dl(), { inputId: l, isLabeledByFormItem: s, isChecked: r, isDisabled: i, isFocused: o, checkboxSize: a, hasOwnLabel: u, model: c, actualValue: f, handleChange: v, onClickRoot: y } = Ol(t, n), h = ve("checkbox"), b = T(() => [h.b(), h.m(a.value), h.is("disabled", i.value), h.is("bordered", t.border), h.is("checked", r.value)]), g = T(() => [h.e("input"), h.is("disabled", i.value), h.is("checked", r.value), h.is("indeterminate", t.indeterminate), h.is("focus", o.value)]);
  return (C, k) => (I(), Fe(fl(!O(u) && O(s) ? "span" : "label"), { class: B(O(b)), "aria-controls": C.indeterminate ? C.ariaControls : null, onClick: O(y) }, { default: Re(() => {
    var x, d, p, w;
    return [ae("span", { class: B(O(g)) }, [C.trueValue || C.falseValue || C.trueLabel || C.falseLabel ? Te((I(), X("input", { key: 0, id: O(l), "onUpdate:modelValue": (m) => Ue(c) ? c.value = m : null, class: B(O(h).e("original")), type: "checkbox", indeterminate: C.indeterminate, name: C.name, tabindex: C.tabindex, disabled: O(i), "true-value": (d = (x = C.trueValue) != null ? x : C.trueLabel) != null ? d : true, "false-value": (w = (p = C.falseValue) != null ? p : C.falseLabel) != null ? w : false, onChange: O(v), onFocus: (m) => o.value = true, onBlur: (m) => o.value = false, onClick: at(() => {
    }, ["stop"]) }, null, 42, ["id", "onUpdate:modelValue", "indeterminate", "name", "tabindex", "disabled", "true-value", "false-value", "onChange", "onFocus", "onBlur", "onClick"])), [[st, O(c)]]) : Te((I(), X("input", { key: 1, id: O(l), "onUpdate:modelValue": (m) => Ue(c) ? c.value = m : null, class: B(O(h).e("original")), type: "checkbox", indeterminate: C.indeterminate, disabled: O(i), value: O(f), name: C.name, tabindex: C.tabindex, onChange: O(v), onFocus: (m) => o.value = true, onBlur: (m) => o.value = false, onClick: at(() => {
    }, ["stop"]) }, null, 42, ["id", "onUpdate:modelValue", "indeterminate", "disabled", "value", "name", "tabindex", "onChange", "onFocus", "onBlur", "onClick"])), [[st, O(c)]]), ae("span", { class: B(O(h).e("inner")) }, null, 2)], 2), O(u) ? (I(), X("span", { key: 0, class: B(O(h).e("label")) }, [Le(C.$slots, "default"), C.$slots.default ? xe("v-if", true) : (I(), X(rt, { key: 0 }, [ht(Ne(C.label), 1)], 64))], 2)) : xe("v-if", true)];
  }), _: 3 }, 8, ["class", "aria-controls", "onClick"]));
} });
var Lo = Ve(Eo, [["__file", "checkbox.vue"]]);
const ko = he({ name: "ElCheckboxButton" }), Ro = he({ ...ko, props: Nl, emits: Fl, setup(e) {
  const t = e, n = dl(), { isFocused: l, isChecked: s, isDisabled: r, checkboxButtonSize: i, model: o, actualValue: a, handleChange: u } = Ol(t, n), c = se(Ke, void 0), f = ve("checkbox"), v = T(() => {
    var h, b, g, C;
    const k = (b = (h = c == null ? void 0 : c.fill) == null ? void 0 : h.value) != null ? b : "";
    return { backgroundColor: k, borderColor: k, color: (C = (g = c == null ? void 0 : c.textColor) == null ? void 0 : g.value) != null ? C : "", boxShadow: k ? `-1px 0 0 0 ${k}` : void 0 };
  }), y = T(() => [f.b("button"), f.bm("button", i.value), f.is("disabled", r.value), f.is("checked", s.value), f.is("focus", l.value)]);
  return (h, b) => {
    var g, C, k, x;
    return I(), X("label", { class: B(O(y)) }, [h.trueValue || h.falseValue || h.trueLabel || h.falseLabel ? Te((I(), X("input", { key: 0, "onUpdate:modelValue": (d) => Ue(o) ? o.value = d : null, class: B(O(f).be("button", "original")), type: "checkbox", name: h.name, tabindex: h.tabindex, disabled: O(r), "true-value": (C = (g = h.trueValue) != null ? g : h.trueLabel) != null ? C : true, "false-value": (x = (k = h.falseValue) != null ? k : h.falseLabel) != null ? x : false, onChange: O(u), onFocus: (d) => l.value = true, onBlur: (d) => l.value = false, onClick: at(() => {
    }, ["stop"]) }, null, 42, ["onUpdate:modelValue", "name", "tabindex", "disabled", "true-value", "false-value", "onChange", "onFocus", "onBlur", "onClick"])), [[st, O(o)]]) : Te((I(), X("input", { key: 1, "onUpdate:modelValue": (d) => Ue(o) ? o.value = d : null, class: B(O(f).be("button", "original")), type: "checkbox", name: h.name, tabindex: h.tabindex, disabled: O(r), value: O(a), onChange: O(u), onFocus: (d) => l.value = true, onBlur: (d) => l.value = false, onClick: at(() => {
    }, ["stop"]) }, null, 42, ["onUpdate:modelValue", "name", "tabindex", "disabled", "value", "onChange", "onFocus", "onBlur", "onClick"])), [[st, O(o)]]), h.$slots.default || h.label ? (I(), X("span", { key: 2, class: B(O(f).be("button", "inner")), style: He(O(s) ? O(v) : void 0) }, [Le(h.$slots, "default", {}, () => [ht(Ne(h.label), 1)])], 6)) : xe("v-if", true)], 2);
  };
} });
var Tl = Ve(Ro, [["__file", "checkbox-button.vue"]]);
const No = $n({ modelValue: { type: Hn(Array), default: () => [] }, disabled: Boolean, min: Number, max: Number, size: Mt, fill: String, textColor: String, tag: { type: String, default: "div" }, validateEvent: { type: Boolean, default: true }, ...il(["ariaLabel"]) }), Fo = { [ft]: (e) => ee(e), change: (e) => ee(e) }, Oo = he({ name: "ElCheckboxGroup" }), To = he({ ...Oo, props: No, emits: Fo, setup(e, { emit: t }) {
  const n = e, l = ve("checkbox"), { formItem: s } = Wt(), { inputId: r, isLabeledByFormItem: i } = cl(n, { formItemContext: s }), o = async (u) => {
    t(ft, u), await Me(), t("change", u);
  }, a = T({ get() {
    return n.modelValue;
  }, set(u) {
    o(u);
  } });
  return hl(Ke, { ...An(vl(n), ["size", "min", "max", "disabled", "validateEvent", "fill", "textColor"]), modelValue: a, changeEvent: o }), de(() => n.modelValue, () => {
    n.validateEvent && (s == null ? void 0 : s.validate("change").catch((u) => ul()));
  }), (u, c) => {
    var f;
    return I(), Fe(fl(u.tag), { id: O(r), class: B(O(l).b("group")), role: "group", "aria-label": O(i) ? void 0 : u.ariaLabel || "checkbox-group", "aria-labelledby": O(i) ? (f = O(s)) == null ? void 0 : f.labelId : void 0 }, { default: Re(() => [Le(u.$slots, "default")]), _: 3 }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
  };
} });
var Ml = Ve(To, [["__file", "checkbox-group.vue"]]);
const Pe = pl(Lo, { CheckboxButton: Tl, CheckboxGroup: Ml });
$t(Tl);
const Ga = $t(Ml), pt = function(e) {
  var t;
  return (t = e.target) == null ? void 0 : t.closest("td");
}, Mo = function(e, t, n, l, s) {
  if (!t && !l && (!s || ee(s) && !s.length))
    return e;
  fe(n) ? n = n === "descending" ? -1 : 1 : n = n && n < 0 ? -1 : 1;
  const r = l ? null : function(o, a) {
    return s ? (ee(s) || (s = [s]), s.map((u) => fe(u) ? Ut(o, u) : u(o, a, e))) : (t !== "$key" && je(o) && "$value" in o && (o = o.$value), [je(o) ? Ut(o, t) : o]);
  }, i = function(o, a) {
    if (l)
      return l(o.value, a.value);
    for (let u = 0, c = o.key.length; u < c; u++) {
      if (o.key[u] < a.key[u])
        return -1;
      if (o.key[u] > a.key[u])
        return 1;
    }
    return 0;
  };
  return e.map((o, a) => ({ value: o, index: a, key: r ? r(o, a) : null })).sort((o, a) => {
    let u = i(o, a);
    return u || (u = o.index - a.index), u * +n;
  }).map((o) => o.value);
}, Wl = function(e, t) {
  let n = null;
  return e.columns.forEach((l) => {
    l.id === t && (n = l);
  }), n;
}, Wo = function(e, t) {
  let n = null;
  for (let l = 0; l < e.columns.length; l++) {
    const s = e.columns[l];
    if (s.columnKey === t) {
      n = s;
      break;
    }
  }
  return n || Pn("ElTable", `No column matching with column-key: ${t}`), n;
}, Qt = function(e, t, n) {
  const l = (t.className || "").match(new RegExp(`${n}-table_[^\\s]+`, "gm"));
  return l ? Wl(e, l[0]) : null;
}, le = (e, t) => {
  if (!e)
    throw new Error("Row is required when get row identity");
  if (fe(t)) {
    if (!t.includes("."))
      return `${e[t]}`;
    const n = t.split(".");
    let l = e;
    for (const s of n)
      l = l[s];
    return `${l}`;
  } else if (ye(t))
    return t.call(null, e);
}, De = function(e, t) {
  const n = {};
  return (e || []).forEach((l, s) => {
    n[le(l, t)] = { row: l, index: s };
  }), n;
};
function $o(e, t) {
  const n = {};
  let l;
  for (l in e)
    n[l] = e[l];
  for (l in t)
    if (Ge(t, l)) {
      const s = t[l];
      Ce(s) || (n[l] = s);
    }
  return n;
}
function Pt(e) {
  return e === "" || Ce(e) || (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e;
}
function $l(e) {
  return e === "" || Ce(e) || (e = Pt(e), Number.isNaN(e) && (e = 80)), e;
}
function Ho(e) {
  return Oe(e) ? e : fe(e) ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null;
}
function Ao(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...l) => t(n(...l)));
}
function ct(e, t, n, l, s, r) {
  let i = r ?? 0, o = false;
  const a = e.indexOf(t), u = a !== -1, c = s == null ? void 0 : s.call(null, t, i), f = (y) => {
    y === "add" ? e.push(t) : e.splice(a, 1), o = true;
  }, v = (y) => {
    let h = 0;
    const b = (l == null ? void 0 : l.children) && y[l.children];
    return b && ee(b) && (h += b.length, b.forEach((g) => {
      h += v(g);
    })), h;
  };
  return (!s || c) && (Ee(n) ? n && !u ? f("add") : !n && u && f("remove") : f(u ? "remove" : "add")), !(l == null ? void 0 : l.checkStrictly) && (l == null ? void 0 : l.children) && ee(t[l.children]) && t[l.children].forEach((y) => {
    const h = ct(e, y, n ?? !u, l, s, i + 1);
    i += v(y) + 1, h && (o = h);
  }), o;
}
function Po(e, t, n = "children", l = "hasChildren") {
  const s = (i) => !(ee(i) && i.length);
  function r(i, o, a) {
    t(i, o, a), o.forEach((u) => {
      if (u[l]) {
        t(u, null, a + 1);
        return;
      }
      const c = u[n];
      s(c) || r(u, c, a + 1);
    });
  }
  e.forEach((i) => {
    if (i[l]) {
      t(i, null, 0);
      return;
    }
    const o = i[n];
    s(o) || r(i, o, 0);
  });
}
const Bo = (e, t, n, l) => {
  const s = { strategy: "fixed", ...e.popperOptions }, r = ye(l.tooltipFormatter) ? l.tooltipFormatter({ row: n, column: l, cellValue: gl(n, l.property).value }) : void 0;
  return Bn(r) ? { slotContent: r, content: null, ...e, popperOptions: s } : { slotContent: null, content: r ?? t, ...e, popperOptions: s };
};
let ce = null;
function Vo(e, t, n, l, s, r) {
  const i = Bo(e, t, n, l), o = { ...i, slotContent: void 0 };
  if ((ce == null ? void 0 : ce.trigger) === s) {
    const y = ce.vm.component;
    Rl(y.props, o), i.slotContent && (y.slots.content = () => [i.slotContent]);
    return;
  }
  ce == null ? void 0 : ce();
  const a = r == null ? void 0 : r.refs.tableWrapper, u = a == null ? void 0 : a.dataset.prefix, c = we(ml, { virtualTriggering: true, virtualRef: s, appendTo: a, placement: "top", transition: "none", offset: 0, hideAfter: 0, ...o }, i.slotContent ? { content: () => i.slotContent } : void 0);
  c.appContext = { ...r.appContext, ...r };
  const f = document.createElement("div");
  jt(c, f), c.component.exposed.onOpen();
  const v = a == null ? void 0 : a.querySelector(`.${u}-scrollbar__wrap`);
  ce = () => {
    jt(null, f), v == null ? void 0 : v.removeEventListener("scroll", ce), ce = null;
  }, ce.trigger = s, ce.vm = c, v == null ? void 0 : v.addEventListener("scroll", ce);
}
function Hl(e) {
  return e.children ? mo(e.children, Hl) : [e];
}
function Zt(e, t) {
  return e + t.colSpan;
}
const Al = (e, t, n, l) => {
  let s = 0, r = e;
  const i = n.states.columns.value;
  if (l) {
    const a = Hl(l[e]);
    s = i.slice(0, i.indexOf(a[0])).reduce(Zt, 0), r = s + a.reduce(Zt, 0) - 1;
  } else
    s = e;
  let o;
  switch (t) {
    case "left":
      r < n.states.fixedLeafColumnsLength.value && (o = "left");
      break;
    case "right":
      s >= i.length - n.states.rightFixedLeafColumnsLength.value && (o = "right");
      break;
    default:
      r < n.states.fixedLeafColumnsLength.value ? o = "left" : s >= i.length - n.states.rightFixedLeafColumnsLength.value && (o = "right");
  }
  return o ? { direction: o, start: s, after: r } : {};
}, Bt = (e, t, n, l, s, r = 0) => {
  const i = [], { direction: o, start: a, after: u } = Al(t, n, l, s);
  if (o) {
    const c = o === "left";
    i.push(`${e}-fixed-column--${o}`), c && u + r === l.states.fixedLeafColumnsLength.value - 1 ? i.push("is-last-column") : !c && a - r === l.states.columns.value.length - l.states.rightFixedLeafColumnsLength.value && i.push("is-first-column");
  }
  return i;
};
function Jt(e, t) {
  return e + (Xe(t.realWidth) || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
}
const Vt = (e, t, n, l) => {
  const { direction: s, start: r = 0, after: i = 0 } = Al(e, t, n, l);
  if (!s)
    return;
  const o = {}, a = s === "left", u = n.states.columns.value;
  return a ? o.left = u.slice(0, r).reduce(Jt, 0) : o.right = u.slice(i + 1).reverse().reduce(Jt, 0), o;
}, Be = (e, t) => {
  e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
};
function Ko(e) {
  const t = ne(), n = L(false), l = L([]);
  return { updateExpandRows: () => {
    const a = e.data.value || [], u = e.rowKey.value;
    if (n.value)
      l.value = a.slice();
    else if (u) {
      const c = De(l.value, u);
      l.value = a.reduce((f, v) => {
        const y = le(v, u);
        return c[y] && f.push(v), f;
      }, []);
    } else
      l.value = [];
  }, toggleRowExpansion: (a, u) => {
    ct(l.value, a, u) && t.emit("expand-change", a, l.value.slice());
  }, setExpandRowKeys: (a) => {
    t.store.assertRowKey();
    const u = e.data.value || [], c = e.rowKey.value, f = De(u, c);
    l.value = a.reduce((v, y) => {
      const h = f[y];
      return h && v.push(h.row), v;
    }, []);
  }, isRowExpanded: (a) => {
    const u = e.rowKey.value;
    return u ? !!De(l.value, u)[le(a, u)] : l.value.includes(a);
  }, states: { expandRows: l, defaultExpandAll: n } };
}
function zo(e) {
  const t = ne(), n = L(null), l = L(null), s = (u) => {
    t.store.assertRowKey(), n.value = u, i(u);
  }, r = () => {
    n.value = null;
  }, i = (u) => {
    const { data: c, rowKey: f } = e;
    let v = null;
    f.value && (v = (O(c) || []).find((y) => le(y, f.value) === u)), l.value = v, t.emit("current-change", l.value, null);
  };
  return { setCurrentRowKey: s, restoreCurrentRowKey: r, setCurrentRowByKey: i, updateCurrentRow: (u) => {
    const c = l.value;
    if (u && u !== c) {
      l.value = u, t.emit("current-change", l.value, c);
      return;
    }
    !u && c && (l.value = null, t.emit("current-change", null, c));
  }, updateCurrentRowData: () => {
    const u = e.rowKey.value, c = e.data.value || [], f = l.value;
    if (!c.includes(f) && f) {
      if (u) {
        const v = le(f, u);
        i(v);
      } else
        l.value = null;
      Xe(l.value) && t.emit("current-change", null, f);
    } else
      n.value && (i(n.value), r());
  }, states: { _currentRowKey: n, currentRow: l } };
}
function Io(e) {
  const t = L([]), n = L({}), l = L(16), s = L(false), r = L({}), i = L("hasChildren"), o = L("children"), a = L(false), u = ne(), c = T(() => {
    if (!e.rowKey.value)
      return {};
    const d = e.data.value || [];
    return v(d);
  }), f = T(() => {
    const d = e.rowKey.value, p = Object.keys(r.value), w = {};
    return p.length && p.forEach((m) => {
      if (r.value[m].length) {
        const E = { children: [] };
        r.value[m].forEach((R) => {
          const W = le(R, d);
          E.children.push(W), R[i.value] && !w[W] && (w[W] = { children: [] });
        }), w[m] = E;
      }
    }), w;
  }), v = (d) => {
    const p = e.rowKey.value, w = {};
    return Po(d, (m, E, R) => {
      const W = le(m, p);
      ee(E) ? w[W] = { children: E.map((K) => le(K, p)), level: R } : s.value && (w[W] = { children: [], lazy: true, level: R });
    }, o.value, i.value), w;
  }, y = (d = false, p = ((w) => (w = u.store) == null ? void 0 : w.states.defaultExpandAll.value)()) => {
    var w;
    const m = c.value, E = f.value, R = Object.keys(m), W = {};
    if (R.length) {
      const K = O(n), H = [], D = (V, _) => {
        if (d)
          return t.value ? p || t.value.includes(_) : !!(p || (V == null ? void 0 : V.expanded));
        {
          const G = p || t.value && t.value.includes(_);
          return !!((V == null ? void 0 : V.expanded) || G);
        }
      };
      R.forEach((V) => {
        const _ = K[V], G = { ...m[V] };
        if (G.expanded = D(_, V), G.lazy) {
          const { loaded: F = false, loading: S = false } = _ || {};
          G.loaded = !!F, G.loading = !!S, H.push(V);
        }
        W[V] = G;
      });
      const U = Object.keys(E);
      s.value && U.length && H.length && U.forEach((V) => {
        const _ = K[V], G = E[V].children;
        if (H.includes(V)) {
          if (W[V].children.length !== 0)
            throw new Error("[ElTable]children must be an empty array.");
          W[V].children = G;
        } else {
          const { loaded: F = false, loading: S = false } = _ || {};
          W[V] = { lazy: true, loaded: !!F, loading: !!S, expanded: D(_, V), children: G, level: "" };
        }
      });
    }
    n.value = W, (w = u.store) == null || w.updateTableScrollY();
  };
  de(() => t.value, () => {
    y(true);
  }), de(() => c.value, () => {
    y();
  }), de(() => f.value, () => {
    y();
  });
  const h = (d) => {
    t.value = d, y();
  }, b = (d) => s.value && d && "loaded" in d && !d.loaded, g = (d, p) => {
    u.store.assertRowKey();
    const w = e.rowKey.value, m = le(d, w), E = m && n.value[m];
    if (m && E && "expanded" in E) {
      const R = E.expanded;
      p = Ce(p) ? !E.expanded : p, n.value[m].expanded = p, R !== p && u.emit("expand-change", d, p), b(E) && k(d, m, E), u.store.updateTableScrollY();
    }
  }, C = (d) => {
    u.store.assertRowKey();
    const p = e.rowKey.value, w = le(d, p), m = n.value[w];
    b(m) ? k(d, w, m) : g(d, void 0);
  }, k = (d, p, w) => {
    const { load: m } = u.props;
    m && !n.value[p].loaded && (n.value[p].loading = true, m(d, w, (E) => {
      if (!ee(E))
        throw new TypeError("[ElTable] data must be an array");
      n.value[p].loading = false, n.value[p].loaded = true, n.value[p].expanded = true, E.length && (r.value[p] = E), u.emit("expand-change", d, true);
    }));
  };
  return { loadData: k, loadOrToggle: C, toggleTreeExpansion: g, updateTreeExpandKeys: h, updateTreeData: y, updateKeyChildren: (d, p) => {
    const { lazy: w, rowKey: m } = u.props;
    if (w) {
      if (!m)
        throw new Error("[Table] rowKey is required in updateKeyChild");
      r.value[d] && (r.value[d] = p);
    }
  }, normalize: v, states: { expandRowKeys: t, treeData: n, indent: l, lazy: s, lazyTreeNodeMap: r, lazyColumnIdentifier: i, childrenColumnName: o, checkStrictly: a } };
}
const Do = (e, t) => {
  const n = t.sortingColumn;
  return !n || fe(n.sortable) ? e : Mo(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy);
}, tt = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children && n.children.length > 0 ? t.push.apply(t, tt(n.children)) : t.push(n);
  }), t;
};
function _o() {
  var e;
  const t = ne(), { size: n } = vl((e = t.proxy) == null ? void 0 : e.$props), l = L(null), s = L([]), r = L([]), i = L(false), o = L([]), a = L([]), u = L([]), c = L([]), f = L([]), v = L([]), y = L([]), h = L([]), b = [], g = L(0), C = L(0), k = L(0), x = L(false), d = L([]), p = L(false), w = L(false), m = L(null), E = L({}), R = L(null), W = L(null), K = L(null), H = L(null), D = L(null), U = T(() => l.value ? De(d.value, l.value) : void 0);
  de(s, () => {
    var N;
    t.state && (F(false), t.props.tableLayout === "auto" && ((N = t.refs.tableHeaderRef) == null || N.updateFixedColumnStyle()));
  }, { deep: true });
  const V = () => {
    if (!l.value)
      throw new Error("[ElTable] prop row-key is required");
  }, _ = (N) => {
    var $;
    ($ = N.children) == null || $.forEach((A) => {
      A.fixed = N.fixed, _(A);
    });
  }, G = () => {
    var N, $;
    o.value.forEach((j) => {
      _(j);
    }), c.value = o.value.filter((j) => j.type !== "selection" && [true, "left"].includes(j.fixed));
    let A;
    if ((($ = (N = o.value) == null ? void 0 : N[0]) == null ? void 0 : $.type) === "selection") {
      const j = o.value[0];
      A = [true, "left"].includes(j.fixed) || c.value.length && j.fixed !== "right", A && c.value.unshift(j);
    }
    f.value = o.value.filter((j) => j.fixed === "right");
    const z = o.value.filter((j) => (A ? j.type !== "selection" : true) && !j.fixed);
    a.value = [].concat(c.value).concat(z).concat(f.value);
    const Y = tt(z), J = tt(c.value), ie = tt(f.value);
    g.value = Y.length, C.value = J.length, k.value = ie.length, u.value = [].concat(J).concat(Y).concat(ie), i.value = c.value.length > 0 || f.value.length > 0;
  }, F = (N, $ = false) => {
    N && G(), $ ? t.state.doLayout() : t.state.debouncedUpdateLayout();
  }, S = (N) => U.value ? !!U.value[le(N, l.value)] : d.value.includes(N), M = () => {
    x.value = false;
    const N = d.value;
    d.value = [], N.length && t.emit("selection-change", []);
  }, q = () => {
    let N;
    if (l.value) {
      N = [];
      const $ = De(s.value, l.value);
      for (const A in U.value)
        Ge(U.value, A) && !$[A] && N.push(U.value[A].row);
    } else
      N = d.value.filter(($) => !s.value.includes($));
    if (N.length) {
      const $ = d.value.filter((A) => !N.includes(A));
      d.value = $, t.emit("selection-change", $.slice());
    }
  }, Q = () => (d.value || []).slice(), Z = (N, $, A = true, z = false) => {
    var Y, J, ie, j;
    const ke = { children: (J = (Y = t == null ? void 0 : t.store) == null ? void 0 : Y.states) == null ? void 0 : J.childrenColumnName.value, checkStrictly: (j = (ie = t == null ? void 0 : t.store) == null ? void 0 : ie.states) == null ? void 0 : j.checkStrictly.value };
    if (ct(d.value, N, $, ke, z ? void 0 : m.value, s.value.indexOf(N))) {
      const Je = (d.value || []).slice();
      A && t.emit("select", Je, N), t.emit("selection-change", Je);
    }
  }, oe = () => {
    var N, $;
    const A = w.value ? !x.value : !(x.value || d.value.length);
    x.value = A;
    let z = false, Y = 0;
    const J = ($ = (N = t == null ? void 0 : t.store) == null ? void 0 : N.states) == null ? void 0 : $.rowKey.value, { childrenColumnName: ie } = t.store.states, j = { children: ie.value, checkStrictly: false };
    s.value.forEach((ke, Ze) => {
      const Je = Ze + Y;
      ct(d.value, ke, A, j, m.value, Je) && (z = true), Y += te(le(ke, J));
    }), z && t.emit("selection-change", d.value ? d.value.slice() : []), t.emit("select-all", (d.value || []).slice());
  }, re = () => {
    s.value.forEach((N) => {
      const $ = le(N, l.value), A = U.value[$];
      A && (d.value[A.index] = N);
    });
  }, ge = () => {
    var N;
    if (((N = s.value) == null ? void 0 : N.length) === 0) {
      x.value = false;
      return;
    }
    const { childrenColumnName: $ } = t.store.states;
    let A = 0, z = 0;
    const Y = (ie) => {
      var j;
      for (const ke of ie) {
        const Ze = m.value && m.value.call(null, ke, A);
        if (S(ke))
          z++;
        else if (!m.value || Ze)
          return false;
        if (A++, (j = ke[$.value]) != null && j.length && !Y(ke[$.value]))
          return false;
      }
      return true;
    }, J = Y(s.value || []);
    x.value = z === 0 ? false : J;
  }, te = (N) => {
    var $;
    if (!t || !t.store)
      return 0;
    const { treeData: A } = t.store.states;
    let z = 0;
    const Y = ($ = A.value[N]) == null ? void 0 : $.children;
    return Y && (z += Y.length, Y.forEach((J) => {
      z += te(J);
    })), z;
  }, pe = (N, $) => {
    ee(N) || (N = [N]);
    const A = {};
    return N.forEach((z) => {
      E.value[z.id] = $, A[z.columnKey || z.id] = $;
    }), A;
  }, me = (N, $, A) => {
    W.value && W.value !== N && (W.value.order = null), W.value = N, K.value = $, H.value = A;
  }, Qe = () => {
    let N = O(r);
    Object.keys(E.value).forEach(($) => {
      const A = E.value[$];
      if (!A || A.length === 0)
        return;
      const z = Wl({ columns: u.value }, $);
      z && z.filterMethod && (N = N.filter((Y) => A.some((J) => z.filterMethod.call(null, J, Y, z))));
    }), R.value = N;
  }, zt = () => {
    s.value = Do(R.value, { sortingColumn: W.value, sortProp: K.value, sortOrder: H.value });
  }, Xl = (N = void 0) => {
    N && N.filter || Qe(), zt();
  }, Ql = (N) => {
    const { tableHeaderRef: $ } = t.refs;
    if (!$)
      return;
    const A = Object.assign({}, $.filterPanels), z = Object.keys(A);
    if (z.length)
      if (fe(N) && (N = [N]), ee(N)) {
        const Y = N.map((J) => Wo({ columns: u.value }, J));
        z.forEach((J) => {
          const ie = Y.find((j) => j.id === J);
          ie && (ie.filteredValue = []);
        }), t.store.commit("filterChange", { column: Y, values: [], silent: true, multi: true });
      } else
        z.forEach((Y) => {
          const J = u.value.find((ie) => ie.id === Y);
          J && (J.filteredValue = []);
        }), E.value = {}, t.store.commit("filterChange", { column: {}, values: [], silent: true });
  }, Zl = () => {
    W.value && (me(null, null, null), t.store.commit("changeSortCondition", { silent: true }));
  }, { setExpandRowKeys: Jl, toggleRowExpansion: It, updateExpandRows: en, states: tn, isRowExpanded: ln } = Ko({ data: s, rowKey: l }), { updateTreeExpandKeys: nn, toggleTreeExpansion: on, updateTreeData: an, updateKeyChildren: sn, loadOrToggle: rn, states: un } = Io({ data: s, rowKey: l }), { updateCurrentRowData: cn, updateCurrentRow: dn, setCurrentRowKey: fn, states: hn } = zo({ data: s, rowKey: l });
  return { assertRowKey: V, updateColumns: G, scheduleLayout: F, isSelected: S, clearSelection: M, cleanSelection: q, getSelectionRows: Q, toggleRowSelection: Z, _toggleAllSelection: oe, toggleAllSelection: null, updateSelectionByRowKey: re, updateAllSelected: ge, updateFilters: pe, updateCurrentRow: dn, updateSort: me, execFilter: Qe, execSort: zt, execQuery: Xl, clearFilter: Ql, clearSort: Zl, toggleRowExpansion: It, setExpandRowKeysAdapter: (N) => {
    Jl(N), nn(N);
  }, setCurrentRowKey: fn, toggleRowExpansionAdapter: (N, $) => {
    u.value.some(({ type: z }) => z === "expand") ? It(N, $) : on(N, $);
  }, isRowExpanded: ln, updateExpandRows: en, updateCurrentRowData: cn, loadOrToggle: rn, updateTreeData: an, updateKeyChildren: sn, states: { tableSize: n, rowKey: l, data: s, _data: r, isComplex: i, _columns: o, originColumns: a, columns: u, fixedColumns: c, rightFixedColumns: f, leafColumns: v, fixedLeafColumns: y, rightFixedLeafColumns: h, updateOrderFns: b, leafColumnsLength: g, fixedLeafColumnsLength: C, rightFixedLeafColumnsLength: k, isAllSelected: x, selection: d, reserveSelection: p, selectOnIndeterminate: w, selectable: m, filters: E, filteredData: R, sortingColumn: W, sortProp: K, sortOrder: H, hoverRow: D, ...tn, ...un, ...hn } };
}
function wt(e, t) {
  return e.map((n) => {
    var l;
    return n.id === t.id ? t : ((l = n.children) != null && l.length && (n.children = wt(n.children, t)), n);
  });
}
function St(e) {
  e.forEach((t) => {
    var n, l;
    t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t), (l = t.children) != null && l.length && St(t.children);
  }), e.sort((t, n) => t.no - n.no);
}
function jo() {
  const e = ne(), t = _o();
  return { ns: ve("table"), ...t, mutations: { setData(i, o) {
    const a = O(i._data) !== o;
    i.data.value = o, i._data.value = o, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), O(i.reserveSelection) ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey()) : a ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout();
  }, insertColumn(i, o, a, u) {
    const c = O(i._columns);
    let f = [];
    a ? (a && !a.children && (a.children = []), a.children.push(o), f = wt(c, a)) : (c.push(o), f = c), St(f), i._columns.value = f, i.updateOrderFns.push(u), o.type === "selection" && (i.selectable.value = o.selectable, i.reserveSelection.value = o.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
  }, updateColumnOrder(i, o) {
    var a;
    ((a = o.getColumnIndex) == null ? void 0 : a.call(o)) !== o.no && (St(i._columns.value), e.$ready && e.store.updateColumns());
  }, removeColumn(i, o, a, u) {
    const c = O(i._columns) || [];
    if (a)
      a.children.splice(a.children.findIndex((v) => v.id === o.id), 1), Me(() => {
        var v;
        ((v = a.children) == null ? void 0 : v.length) === 0 && delete a.children;
      }), i._columns.value = wt(c, a);
    else {
      const v = c.indexOf(o);
      v > -1 && (c.splice(v, 1), i._columns.value = c);
    }
    const f = i.updateOrderFns.indexOf(u);
    f > -1 && i.updateOrderFns.splice(f, 1), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
  }, sort(i, o) {
    const { prop: a, order: u, init: c } = o;
    if (a) {
      const f = O(i.columns).find((v) => v.property === a);
      f && (f.order = u, e.store.updateSort(f, a, u), e.store.commit("changeSortCondition", { init: c }));
    }
  }, changeSortCondition(i, o) {
    const { sortingColumn: a, sortProp: u, sortOrder: c } = i, f = O(a), v = O(u), y = O(c);
    Xe(y) && (i.sortingColumn.value = null, i.sortProp.value = null);
    const h = { filter: true };
    e.store.execQuery(h), (!o || !(o.silent || o.init)) && e.emit("sort-change", { column: f, prop: v, order: y }), e.store.updateTableScrollY();
  }, filterChange(i, o) {
    const { column: a, values: u, silent: c } = o, f = e.store.updateFilters(a, u);
    e.store.execQuery(), c || e.emit("filter-change", f), e.store.updateTableScrollY();
  }, toggleAllSelection() {
    e.store.toggleAllSelection();
  }, rowSelectedChanged(i, o) {
    e.store.toggleRowSelection(o), e.store.updateAllSelected();
  }, setHoverRow(i, o) {
    i.hoverRow.value = o;
  }, setCurrentRow(i, o) {
    e.store.updateCurrentRow(o);
  } }, commit: function(i, ...o) {
    const a = e.store.mutations;
    if (a[i])
      a[i].apply(e, [e.store.states].concat(o));
    else
      throw new Error(`Action not found: ${i}`);
  }, updateTableScrollY: function() {
    Me(() => e.layout.updateScrollY.apply(e.layout));
  } };
}
const _e = { rowKey: "rowKey", defaultExpandAll: "defaultExpandAll", selectOnIndeterminate: "selectOnIndeterminate", indent: "indent", lazy: "lazy", data: "data", "treeProps.hasChildren": { key: "lazyColumnIdentifier", default: "hasChildren" }, "treeProps.children": { key: "childrenColumnName", default: "children" }, "treeProps.checkStrictly": { key: "checkStrictly", default: false } };
function Uo(e, t) {
  if (!e)
    throw new Error("Table is required.");
  const n = jo();
  return n.toggleAllSelection = ut(n._toggleAllSelection, 10), Object.keys(_e).forEach((l) => {
    Pl(Bl(t, l), l, n);
  }), Go(n, t), n;
}
function Go(e, t) {
  Object.keys(_e).forEach((n) => {
    de(() => Bl(t, n), (l) => {
      Pl(l, n, e);
    });
  });
}
function Pl(e, t, n) {
  let l = e, s = _e[t];
  je(_e[t]) && (s = s.key, l = l || _e[t].default), n.states[s].value = l;
}
function Bl(e, t) {
  if (t.includes(".")) {
    const n = t.split(".");
    let l = e;
    return n.forEach((s) => {
      l = l[s];
    }), l;
  } else
    return e[t];
}
class Yo {
  constructor(t) {
    this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = true, this.showHeader = true, this.height = L(null), this.scrollX = L(false), this.scrollY = L(false), this.bodyWidth = L(null), this.fixedWidth = L(null), this.rightFixedWidth = L(null), this.gutterWidth = 0;
    for (const n in t)
      Ge(t, n) && (Ue(this[n]) ? this[n].value = t[n] : this[n] = t[n]);
    if (!this.table)
      throw new Error("Table is required for Table Layout");
    if (!this.store)
      throw new Error("Store is required for Table Layout");
  }
  updateScrollY() {
    const t = this.height.value;
    if (Xe(t))
      return false;
    const n = this.table.refs.scrollBarRef;
    if (this.table.vnode.el && (n == null ? void 0 : n.wrapRef)) {
      let l = true;
      const s = this.scrollY.value;
      return l = n.wrapRef.scrollHeight > n.wrapRef.clientHeight, this.scrollY.value = l, s !== l;
    }
    return false;
  }
  setHeight(t, n = "height") {
    if (!Ae)
      return;
    const l = this.table.vnode.el;
    if (t = Ho(t), this.height.value = Number(t), !l && (t || t === 0))
      return Me(() => this.setHeight(t, n));
    Oe(t) ? (l.style[n] = `${t}px`, this.updateElsHeight()) : fe(t) && (l.style[n] = t, this.updateElsHeight());
  }
  setMaxHeight(t) {
    this.setHeight(t, "max-height");
  }
  getFlattenColumns() {
    const t = [];
    return this.table.store.states.columns.value.forEach((l) => {
      l.isColumnGroup ? t.push.apply(t, l.columns) : t.push(l);
    }), t;
  }
  updateElsHeight() {
    this.updateScrollY(), this.notifyObservers("scrollable");
  }
  headerDisplayNone(t) {
    if (!t)
      return true;
    let n = t;
    for (; n.tagName !== "DIV"; ) {
      if (getComputedStyle(n).display === "none")
        return true;
      n = n.parentElement;
    }
    return false;
  }
  updateColumnsWidth() {
    if (!Ae)
      return;
    const t = this.fit, n = this.table.vnode.el.clientWidth;
    let l = 0;
    const s = this.getFlattenColumns(), r = s.filter((a) => !Oe(a.width));
    if (s.forEach((a) => {
      Oe(a.width) && a.realWidth && (a.realWidth = null);
    }), r.length > 0 && t) {
      if (s.forEach((a) => {
        l += Number(a.width || a.minWidth || 80);
      }), l <= n) {
        this.scrollX.value = false;
        const a = n - l;
        if (r.length === 1)
          r[0].realWidth = Number(r[0].minWidth || 80) + a;
        else {
          const u = r.reduce((v, y) => v + Number(y.minWidth || 80), 0), c = a / u;
          let f = 0;
          r.forEach((v, y) => {
            if (y === 0)
              return;
            const h = Math.floor(Number(v.minWidth || 80) * c);
            f += h, v.realWidth = Number(v.minWidth || 80) + h;
          }), r[0].realWidth = Number(r[0].minWidth || 80) + a - f;
        }
      } else
        this.scrollX.value = true, r.forEach((a) => {
          a.realWidth = Number(a.minWidth);
        });
      this.bodyWidth.value = Math.max(l, n), this.table.state.resizeState.value.width = this.bodyWidth.value;
    } else
      s.forEach((a) => {
        !a.width && !a.minWidth ? a.realWidth = 80 : a.realWidth = Number(a.width || a.minWidth), l += a.realWidth;
      }), this.scrollX.value = l > n, this.bodyWidth.value = l;
    const i = this.store.states.fixedColumns.value;
    if (i.length > 0) {
      let a = 0;
      i.forEach((u) => {
        a += Number(u.realWidth || u.width);
      }), this.fixedWidth.value = a;
    }
    const o = this.store.states.rightFixedColumns.value;
    if (o.length > 0) {
      let a = 0;
      o.forEach((u) => {
        a += Number(u.realWidth || u.width);
      }), this.rightFixedWidth.value = a;
    }
    this.notifyObservers("columns");
  }
  addObserver(t) {
    this.observers.push(t);
  }
  removeObserver(t) {
    const n = this.observers.indexOf(t);
    n !== -1 && this.observers.splice(n, 1);
  }
  notifyObservers(t) {
    this.observers.forEach((l) => {
      var s, r;
      switch (t) {
        case "columns":
          (s = l.state) == null || s.onColumnsChange(this);
          break;
        case "scrollable":
          (r = l.state) == null || r.onScrollableChange(this);
          break;
        default:
          throw new Error(`Table Layout don't have event ${t}.`);
      }
    });
  }
}
const { CheckboxGroup: qo } = Pe, Xo = he({ name: "ElTableFilterPanel", components: { ElCheckbox: Pe, ElCheckboxGroup: qo, ElScrollbar: xl, ElTooltip: ml, ElIcon: Ht, ArrowDown: Vn, ArrowUp: Kn }, directives: { ClickOutside: zn }, props: { placement: { type: String, default: "bottom-start" }, store: { type: Object }, column: { type: Object }, upDataColumn: { type: Function }, appendTo: { type: String } }, setup(e) {
  const t = ne(), { t: n } = bl(), l = ve("table-filter"), s = t == null ? void 0 : t.parent;
  s.filterPanels.value[e.column.id] || (s.filterPanels.value[e.column.id] = t);
  const r = L(false), i = L(null), o = T(() => e.column && e.column.filters), a = T(() => e.column.filterClassName ? `${l.b()} ${e.column.filterClassName}` : l.b()), u = T({ get: () => {
    var p;
    return (((p = e.column) == null ? void 0 : p.filteredValue) || [])[0];
  }, set: (p) => {
    c.value && ($e(p) ? c.value.splice(0, 1) : c.value.splice(0, 1, p));
  } }), c = T({ get() {
    return e.column ? e.column.filteredValue || [] : [];
  }, set(p) {
    e.column && e.upDataColumn("filteredValue", p);
  } }), f = T(() => e.column ? e.column.filterMultiple : true), v = (p) => p.value === u.value, y = () => {
    r.value = false;
  }, h = (p) => {
    p.stopPropagation(), r.value = !r.value;
  }, b = () => {
    r.value = false;
  }, g = () => {
    x(c.value), y();
  }, C = () => {
    c.value = [], x(c.value), y();
  }, k = (p) => {
    u.value = p, $e(p) ? x([]) : x(c.value), y();
  }, x = (p) => {
    e.store.commit("filterChange", { column: e.column, values: p }), e.store.updateAllSelected();
  };
  de(r, (p) => {
    e.column && e.upDataColumn("filterOpened", p);
  }, { immediate: true });
  const d = T(() => {
    var p, w;
    return (w = (p = i.value) == null ? void 0 : p.popperRef) == null ? void 0 : w.contentRef;
  });
  return { tooltipVisible: r, multiple: f, filterClassName: a, filteredValue: c, filterValue: u, filters: o, handleConfirm: g, handleReset: C, handleSelect: k, isPropAbsent: $e, isActive: v, t: n, ns: l, showFilterPanel: h, hideFilterPanel: b, popperPaneRef: d, tooltip: i };
} });
function Qo(e, t, n, l, s, r) {
  const i = be("el-checkbox"), o = be("el-checkbox-group"), a = be("el-scrollbar"), u = be("arrow-up"), c = be("arrow-down"), f = be("el-icon"), v = be("el-tooltip"), y = yl("click-outside");
  return I(), Fe(v, { ref: "tooltip", visible: e.tooltipVisible, offset: 0, placement: e.placement, "show-arrow": false, "stop-popper-mouse-event": false, teleported: "", effect: "light", pure: "", "popper-class": e.filterClassName, persistent: "", "append-to": e.appendTo }, { content: Re(() => [e.multiple ? (I(), X("div", { key: 0 }, [ae("div", { class: B(e.ns.e("content")) }, [we(a, { "wrap-class": e.ns.e("wrap") }, { default: Re(() => [we(o, { modelValue: e.filteredValue, "onUpdate:modelValue": (h) => e.filteredValue = h, class: B(e.ns.e("checkbox-group")) }, { default: Re(() => [(I(true), X(rt, null, Gt(e.filters, (h) => (I(), Fe(i, { key: h.value, value: h.value }, { default: Re(() => [ht(Ne(h.text), 1)]), _: 2 }, 1032, ["value"]))), 128))]), _: 1 }, 8, ["modelValue", "onUpdate:modelValue", "class"])]), _: 1 }, 8, ["wrap-class"])], 2), ae("div", { class: B(e.ns.e("bottom")) }, [ae("button", { class: B({ [e.ns.is("disabled")]: e.filteredValue.length === 0 }), disabled: e.filteredValue.length === 0, type: "button", onClick: e.handleConfirm }, Ne(e.t("el.table.confirmFilter")), 11, ["disabled", "onClick"]), ae("button", { type: "button", onClick: e.handleReset }, Ne(e.t("el.table.resetFilter")), 9, ["onClick"])], 2)])) : (I(), X("ul", { key: 1, class: B(e.ns.e("list")) }, [ae("li", { class: B([e.ns.e("list-item"), { [e.ns.is("active")]: e.isPropAbsent(e.filterValue) }]), onClick: (h) => e.handleSelect(null) }, Ne(e.t("el.table.clearFilter")), 11, ["onClick"]), (I(true), X(rt, null, Gt(e.filters, (h) => (I(), X("li", { key: h.value, class: B([e.ns.e("list-item"), e.ns.is("active", e.isActive(h))]), label: h.value, onClick: (b) => e.handleSelect(h.value) }, Ne(h.text), 11, ["label", "onClick"]))), 128))], 2))]), default: Re(() => [Te((I(), X("span", { class: B([`${e.ns.namespace.value}-table__column-filter-trigger`, `${e.ns.namespace.value}-none-outline`]), onClick: e.showFilterPanel }, [we(f, null, { default: Re(() => [Le(e.$slots, "filter-icon", {}, () => [e.column.filterOpened ? (I(), Fe(u, { key: 0 })) : (I(), Fe(c, { key: 1 }))])]), _: 3 })], 10, ["onClick"])), [[y, e.hideFilterPanel, e.popperPaneRef]])]), _: 3 }, 8, ["visible", "placement", "popper-class", "append-to"]);
}
var Zo = Ve(Xo, [["render", Qo], ["__file", "filter-panel.vue"]]);
function Kt(e) {
  const t = ne();
  Cl(() => {
    n.value.addObserver(t);
  }), qe(() => {
    l(n.value), s(n.value);
  }), In(() => {
    l(n.value), s(n.value);
  }), At(() => {
    n.value.removeObserver(t);
  });
  const n = T(() => {
    const r = e.layout;
    if (!r)
      throw new Error("Can not find table layout.");
    return r;
  }), l = (r) => {
    var i;
    const o = ((i = e.vnode.el) == null ? void 0 : i.querySelectorAll("colgroup > col")) || [];
    if (!o.length)
      return;
    const a = r.getFlattenColumns(), u = {};
    a.forEach((c) => {
      u[c.id] = c;
    });
    for (let c = 0, f = o.length; c < f; c++) {
      const v = o[c], y = v.getAttribute("name"), h = u[y];
      h && v.setAttribute("width", h.realWidth || h.width);
    }
  }, s = (r) => {
    var i, o;
    const a = ((i = e.vnode.el) == null ? void 0 : i.querySelectorAll("colgroup > col[name=gutter]")) || [];
    for (let c = 0, f = a.length; c < f; c++)
      a[c].setAttribute("width", r.scrollY.value ? r.gutterWidth : "0");
    const u = ((o = e.vnode.el) == null ? void 0 : o.querySelectorAll("th.gutter")) || [];
    for (let c = 0, f = u.length; c < f; c++) {
      const v = u[c];
      v.style.width = r.scrollY.value ? `${r.gutterWidth}px` : "0", v.style.display = r.scrollY.value ? "" : "none";
    }
  };
  return { tableLayout: n.value, onColumnsChange: l, onScrollableChange: s };
}
const Se = Symbol("ElTable");
function Jo(e, t) {
  const n = ne(), l = se(Se), s = (b) => {
    b.stopPropagation();
  }, r = (b, g) => {
    !g.filters && g.sortable ? h(b, g, false) : g.filterable && !g.sortable && s(b), l == null ? void 0 : l.emit("header-click", g, b);
  }, i = (b, g) => {
    l == null ? void 0 : l.emit("header-contextmenu", g, b);
  }, o = L(null), a = L(false), u = L({}), c = (b, g) => {
    if (Ae && !(g.children && g.children.length > 0) && o.value && e.border) {
      a.value = true;
      const C = l;
      t("set-drag-visible", true);
      const x = (C == null ? void 0 : C.vnode.el).getBoundingClientRect().left, d = n.vnode.el.querySelector(`th.${g.id}`), p = d.getBoundingClientRect(), w = p.left - x + 30;
      it(d, "noclick"), u.value = { startMouseLeft: b.clientX, startLeft: p.right - x, startColumnLeft: p.left - x, tableLeft: x };
      const m = C == null ? void 0 : C.refs.resizeProxy;
      m.style.left = `${u.value.startLeft}px`, document.onselectstart = function() {
        return false;
      }, document.ondragstart = function() {
        return false;
      };
      const E = (W) => {
        const K = W.clientX - u.value.startMouseLeft, H = u.value.startLeft + K;
        m.style.left = `${Math.max(w, H)}px`;
      }, R = () => {
        if (a.value) {
          const { startColumnLeft: W, startLeft: K } = u.value, D = Number.parseInt(m.style.left, 10) - W;
          g.width = g.realWidth = D, C == null ? void 0 : C.emit("header-dragend", g.width, K - W, g, b), requestAnimationFrame(() => {
            e.store.scheduleLayout(false, true);
          }), document.body.style.cursor = "", a.value = false, o.value = null, u.value = {}, t("set-drag-visible", false);
        }
        document.removeEventListener("mousemove", E), document.removeEventListener("mouseup", R), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
          Ye(d, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", E), document.addEventListener("mouseup", R);
    }
  }, f = (b, g) => {
    var C;
    if (g.children && g.children.length > 0)
      return;
    const k = b.target;
    if (!Dn(k))
      return;
    const x = k == null ? void 0 : k.closest("th");
    if (!(!g || !g.resizable || !x) && !a.value && e.border) {
      const d = x.getBoundingClientRect(), p = document.body.style, w = ((C = x.parentNode) == null ? void 0 : C.lastElementChild) === x, m = e.allowDragLastColumn || !w;
      d.width > 12 && d.right - b.clientX < 8 && m ? (p.cursor = "col-resize", ze(x, "is-sortable") && (x.style.cursor = "col-resize"), o.value = g) : a.value || (p.cursor = "", ze(x, "is-sortable") && (x.style.cursor = "pointer"), o.value = null);
    }
  }, v = () => {
    Ae && (document.body.style.cursor = "");
  }, y = ({ order: b, sortOrders: g }) => {
    if (b === "")
      return g[0];
    const C = g.indexOf(b || null);
    return g[C > g.length - 2 ? 0 : C + 1];
  }, h = (b, g, C) => {
    var k;
    b.stopPropagation();
    const x = g.order === C ? null : C || y(g), d = (k = b.target) == null ? void 0 : k.closest("th");
    if (d && ze(d, "noclick")) {
      Ye(d, "noclick");
      return;
    }
    if (!g.sortable)
      return;
    const p = b.currentTarget;
    if (["ascending", "descending"].some((W) => ze(p, W) && !g.sortOrders.includes(W)))
      return;
    const w = e.store.states;
    let m = w.sortProp.value, E;
    const R = w.sortingColumn.value;
    (R !== g || R === g && Xe(R.order)) && (R && (R.order = null), w.sortingColumn.value = g, m = g.property), x ? E = g.order = x : E = g.order = null, w.sortProp.value = m, w.sortOrder.value = E, l == null ? void 0 : l.store.commit("changeSortCondition");
  };
  return { handleHeaderClick: r, handleHeaderContextMenu: i, handleMouseDown: c, handleMouseMove: f, handleMouseOut: v, handleSortClick: h, handleFilterClick: s };
}
function ea(e) {
  const t = se(Se), n = ve("table");
  return { getHeaderRowStyle: (o) => {
    const a = t == null ? void 0 : t.props.headerRowStyle;
    return ye(a) ? a.call(null, { rowIndex: o }) : a;
  }, getHeaderRowClass: (o) => {
    const a = [], u = t == null ? void 0 : t.props.headerRowClassName;
    return fe(u) ? a.push(u) : ye(u) && a.push(u.call(null, { rowIndex: o })), a.join(" ");
  }, getHeaderCellStyle: (o, a, u, c) => {
    var f;
    let v = (f = t == null ? void 0 : t.props.headerCellStyle) != null ? f : {};
    ye(v) && (v = v.call(null, { rowIndex: o, columnIndex: a, row: u, column: c }));
    const y = Vt(a, c.fixed, e.store, u);
    return Be(y, "left"), Be(y, "right"), Object.assign({}, v, y);
  }, getHeaderCellClass: (o, a, u, c) => {
    const f = Bt(n.b(), a, c.fixed, e.store, u), v = [c.id, c.order, c.headerAlign, c.className, c.labelClassName, ...f];
    c.children || v.push("is-leaf"), c.sortable && v.push("is-sortable");
    const y = t == null ? void 0 : t.props.headerCellClassName;
    return fe(y) ? v.push(y) : ye(y) && v.push(y.call(null, { rowIndex: o, columnIndex: a, row: u, column: c })), v.push(n.e("cell")), v.filter((h) => !!h).join(" ");
  } };
}
const Vl = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? (t.push(n), t.push.apply(t, Vl(n.children))) : t.push(n);
  }), t;
}, Kl = (e) => {
  let t = 1;
  const n = (r, i) => {
    if (i && (r.level = i.level + 1, t < r.level && (t = r.level)), r.children) {
      let o = 0;
      r.children.forEach((a) => {
        n(a, r), o += a.colSpan;
      }), r.colSpan = o;
    } else
      r.colSpan = 1;
  };
  e.forEach((r) => {
    r.level = 1, n(r, void 0);
  });
  const l = [];
  for (let r = 0; r < t; r++)
    l.push([]);
  return Vl(e).forEach((r) => {
    r.children ? (r.rowSpan = 1, r.children.forEach((i) => i.isSubColumn = true)) : r.rowSpan = t - r.level + 1, l[r.level - 1].push(r);
  }), l;
};
function ta(e) {
  const t = se(Se), n = T(() => Kl(e.store.states.originColumns.value));
  return { isGroup: T(() => {
    const r = n.value.length > 1;
    return r && t && (t.state.isGroup.value = true), r;
  }), toggleAllSelection: (r) => {
    r.stopPropagation(), t == null ? void 0 : t.store.commit("toggleAllSelection");
  }, columnRows: n };
}
var la = he({ name: "ElTableHeader", components: { ElCheckbox: Pe }, props: { fixed: { type: String, default: "" }, store: { required: true, type: Object }, border: Boolean, defaultSort: { type: Object, default: () => ({ prop: "", order: "" }) }, appendFilterPanelTo: { type: String }, allowDragLastColumn: { type: Boolean } }, setup(e, { emit: t }) {
  const n = ne(), l = se(Se), s = ve("table"), r = L({}), { onColumnsChange: i, onScrollableChange: o } = Kt(l), a = (l == null ? void 0 : l.props.tableLayout) === "auto", u = _n(/* @__PURE__ */ new Map()), c = L(), f = () => {
    setTimeout(() => {
      u.size > 0 && (u.forEach((W, K) => {
        const H = c.value.querySelector(`.${K.replace(/\s/g, ".")}`);
        if (H) {
          const D = H.getBoundingClientRect().width;
          W.width = D;
        }
      }), u.clear());
    });
  };
  de(u, f), qe(async () => {
    await Me(), await Me();
    const { prop: W, order: K } = e.defaultSort;
    l == null ? void 0 : l.store.commit("sort", { prop: W, order: K, init: true }), f();
  });
  const { handleHeaderClick: v, handleHeaderContextMenu: y, handleMouseDown: h, handleMouseMove: b, handleMouseOut: g, handleSortClick: C, handleFilterClick: k } = Jo(e, t), { getHeaderRowStyle: x, getHeaderRowClass: d, getHeaderCellStyle: p, getHeaderCellClass: w } = ea(e), { isGroup: m, toggleAllSelection: E, columnRows: R } = ta(e);
  return n.state = { onColumnsChange: i, onScrollableChange: o }, n.filterPanels = r, { ns: s, filterPanels: r, onColumnsChange: i, onScrollableChange: o, columnRows: R, getHeaderRowClass: d, getHeaderRowStyle: x, getHeaderCellClass: w, getHeaderCellStyle: p, handleHeaderClick: v, handleHeaderContextMenu: y, handleMouseDown: h, handleMouseMove: b, handleMouseOut: g, handleSortClick: C, handleFilterClick: k, isGroup: m, toggleAllSelection: E, saveIndexSelection: u, isTableLayoutAuto: a, theadRef: c, updateFixedColumnStyle: f };
}, render() {
  const { ns: e, isGroup: t, columnRows: n, getHeaderCellStyle: l, getHeaderCellClass: s, getHeaderRowClass: r, getHeaderRowStyle: i, handleHeaderClick: o, handleHeaderContextMenu: a, handleMouseDown: u, handleMouseMove: c, handleSortClick: f, handleMouseOut: v, store: y, $parent: h, saveIndexSelection: b, isTableLayoutAuto: g } = this;
  let C = 1;
  return P("thead", { ref: "theadRef", class: { [e.is("group")]: t } }, n.map((k, x) => P("tr", { class: r(x), key: x, style: i(x) }, k.map((d, p) => {
    d.rowSpan > C && (C = d.rowSpan);
    const w = s(x, p, k, d);
    return g && d.fixed && b.set(w, d), P("th", { class: w, colspan: d.colSpan, key: `${d.id}-thead`, rowspan: d.rowSpan, style: l(x, p, k, d), onClick: (m) => {
      m.currentTarget.classList.contains("noclick") || o(m, d);
    }, onContextmenu: (m) => a(m, d), onMousedown: (m) => u(m, d), onMousemove: (m) => c(m, d), onMouseout: v }, [P("div", { class: ["cell", d.filteredValue && d.filteredValue.length > 0 ? "highlight" : ""] }, [d.renderHeader ? d.renderHeader({ column: d, $index: p, store: y, _self: h }) : d.label, d.sortable && P("span", { onClick: (m) => f(m, d), class: "caret-wrapper" }, [P("i", { onClick: (m) => f(m, d, "ascending"), class: "sort-caret ascending" }), P("i", { onClick: (m) => f(m, d, "descending"), class: "sort-caret descending" })]), d.filterable && P(Zo, { store: y, placement: d.filterPlacement || "bottom-start", appendTo: h.appendFilterPanelTo, column: d, upDataColumn: (m, E) => {
      d[m] = E;
    } }, { "filter-icon": () => d.renderFilterIcon ? d.renderFilterIcon({ filterOpened: d.filterOpened }) : null })])]);
  }))));
} });
function mt(e, t, n = 0.03) {
  return e - t > n;
}
function na(e) {
  const t = se(Se), n = L(""), l = L(P("div")), s = (h, b, g) => {
    var C;
    const k = t, x = pt(h);
    let d;
    const p = (C = k == null ? void 0 : k.vnode.el) == null ? void 0 : C.dataset.prefix;
    x && (d = Qt({ columns: e.store.states.columns.value }, x, p), d && (k == null ? void 0 : k.emit(`cell-${g}`, b, d, x, h))), k == null ? void 0 : k.emit(`row-${g}`, b, d, h);
  }, r = (h, b) => {
    s(h, b, "dblclick");
  }, i = (h, b) => {
    e.store.commit("setCurrentRow", b), s(h, b, "click");
  }, o = (h, b) => {
    s(h, b, "contextmenu");
  }, a = ut((h) => {
    e.store.commit("setHoverRow", h);
  }, 30), u = ut(() => {
    e.store.commit("setHoverRow", null);
  }, 30), c = (h) => {
    const b = window.getComputedStyle(h, null), g = Number.parseInt(b.paddingLeft, 10) || 0, C = Number.parseInt(b.paddingRight, 10) || 0, k = Number.parseInt(b.paddingTop, 10) || 0, x = Number.parseInt(b.paddingBottom, 10) || 0;
    return { left: g, right: C, top: k, bottom: x };
  }, f = (h, b, g) => {
    let C = b.target.parentNode;
    for (; h > 1 && (C = C == null ? void 0 : C.nextSibling, !(!C || C.nodeName !== "TR")); )
      g(C, "hover-row hover-fixed-row"), h--;
  };
  return { handleDoubleClick: r, handleClick: i, handleContextMenu: o, handleMouseEnter: a, handleMouseLeave: u, handleCellMouseEnter: (h, b, g) => {
    var C, k, x;
    const d = t, p = pt(h), w = (C = d == null ? void 0 : d.vnode.el) == null ? void 0 : C.dataset.prefix;
    let m;
    if (p) {
      m = Qt({ columns: e.store.states.columns.value }, p, w), p.rowSpan > 1 && f(p.rowSpan, h, it);
      const M = d.hoverState = { cell: p, column: m, row: b };
      d == null ? void 0 : d.emit("cell-mouse-enter", M.row, M.column, M.cell, h);
    }
    if (!g)
      return;
    const E = h.target.querySelector(".cell");
    if (!(ze(E, `${w}-tooltip`) && E.childNodes.length))
      return;
    const R = document.createRange();
    R.setStart(E, 0), R.setEnd(E, E.childNodes.length);
    const { width: W, height: K } = R.getBoundingClientRect(), { width: H, height: D } = E.getBoundingClientRect(), { top: U, left: V, right: _, bottom: G } = c(E), F = V + _, S = U + G;
    mt(W + F, H) || mt(K + S, D) || mt(E.scrollWidth, H) ? Vo(g, p.innerText || p.textContent, b, m, p, d) : ((k = ce) == null ? void 0 : k.trigger) === p && ((x = ce) == null || x());
  }, handleCellMouseLeave: (h) => {
    const b = pt(h);
    if (!b)
      return;
    b.rowSpan > 1 && f(b.rowSpan, h, Ye);
    const g = t == null ? void 0 : t.hoverState;
    t == null ? void 0 : t.emit("cell-mouse-leave", g == null ? void 0 : g.row, g == null ? void 0 : g.column, g == null ? void 0 : g.cell, h);
  }, tooltipContent: n, tooltipTrigger: l };
}
function oa(e) {
  const t = se(Se), n = ve("table");
  return { getRowStyle: (u, c) => {
    const f = t == null ? void 0 : t.props.rowStyle;
    return ye(f) ? f.call(null, { row: u, rowIndex: c }) : f || null;
  }, getRowClass: (u, c) => {
    const f = [n.e("row")];
    (t == null ? void 0 : t.props.highlightCurrentRow) && u === e.store.states.currentRow.value && f.push("current-row"), e.stripe && c % 2 === 1 && f.push(n.em("row", "striped"));
    const v = t == null ? void 0 : t.props.rowClassName;
    return fe(v) ? f.push(v) : ye(v) && f.push(v.call(null, { row: u, rowIndex: c })), f;
  }, getCellStyle: (u, c, f, v) => {
    const y = t == null ? void 0 : t.props.cellStyle;
    let h = y ?? {};
    ye(y) && (h = y.call(null, { rowIndex: u, columnIndex: c, row: f, column: v }));
    const b = Vt(c, e == null ? void 0 : e.fixed, e.store);
    return Be(b, "left"), Be(b, "right"), Object.assign({}, h, b);
  }, getCellClass: (u, c, f, v, y) => {
    const h = Bt(n.b(), c, e == null ? void 0 : e.fixed, e.store, void 0, y), b = [v.id, v.align, v.className, ...h], g = t == null ? void 0 : t.props.cellClassName;
    return fe(g) ? b.push(g) : ye(g) && b.push(g.call(null, { rowIndex: u, columnIndex: c, row: f, column: v })), b.push(n.e("cell")), b.filter((C) => !!C).join(" ");
  }, getSpan: (u, c, f, v) => {
    let y = 1, h = 1;
    const b = t == null ? void 0 : t.props.spanMethod;
    if (ye(b)) {
      const g = b({ row: u, column: c, rowIndex: f, columnIndex: v });
      ee(g) ? (y = g[0], h = g[1]) : je(g) && (y = g.rowspan, h = g.colspan);
    }
    return { rowspan: y, colspan: h };
  }, getColspanRealWidth: (u, c, f) => {
    if (c < 1)
      return u[f].realWidth;
    const v = u.map(({ realWidth: y, width: h }) => y || h).slice(f, f + c);
    return Number(v.reduce((y, h) => Number(y) + Number(h), -1));
  } };
}
const aa = he({ name: "TableTdWrapper" }), sa = he({ ...aa, props: { colspan: { type: Number, default: 1 }, rowspan: { type: Number, default: 1 } }, setup(e) {
  return (t, n) => (I(), X("td", { colspan: e.colspan, rowspan: e.rowspan }, [Le(t.$slots, "default")], 8, ["colspan", "rowspan"]));
} });
var ra = Ve(sa, [["__file", "td-wrapper.vue"]]);
function ia(e) {
  const t = se(Se), n = ve("table"), { handleDoubleClick: l, handleClick: s, handleContextMenu: r, handleMouseEnter: i, handleMouseLeave: o, handleCellMouseEnter: a, handleCellMouseLeave: u, tooltipContent: c, tooltipTrigger: f } = na(e), { getRowStyle: v, getRowClass: y, getCellStyle: h, getCellClass: b, getSpan: g, getColspanRealWidth: C } = oa(e), k = T(() => e.store.states.columns.value.findIndex(({ type: m }) => m === "default")), x = (m, E) => {
    const R = t.props.rowKey;
    return R ? le(m, R) : E;
  }, d = (m, E, R, W = false) => {
    const { tooltipEffect: K, tooltipOptions: H, store: D } = e, { indent: U, columns: V } = D.states, _ = y(m, E);
    let G = true;
    return R && (_.push(n.em("row", `level-${R.level}`)), G = R.display), P("tr", { style: [G ? null : { display: "none" }, v(m, E)], class: _, key: x(m, E), onDblclick: (S) => l(S, m), onClick: (S) => s(S, m), onContextmenu: (S) => r(S, m), onMouseenter: () => i(E), onMouseleave: o }, V.value.map((S, M) => {
      const { rowspan: q, colspan: Q } = g(m, S, E, M);
      if (!q || !Q)
        return null;
      const Z = Object.assign({}, S);
      Z.realWidth = C(V.value, Q, M);
      const oe = { store: e.store, _self: e.context || t, column: Z, row: m, $index: E, cellIndex: M, expanded: W };
      M === k.value && R && (oe.treeNode = { indent: R.level * U.value, level: R.level }, Ee(R.expanded) && (oe.treeNode.expanded = R.expanded, "loading" in R && (oe.treeNode.loading = R.loading), "noLazyChildren" in R && (oe.treeNode.noLazyChildren = R.noLazyChildren)));
      const re = `${x(m, E)},${M}`, ge = Z.columnKey || Z.rawColumnKey || "", te = S.showOverflowTooltip && Rl({ effect: K }, H, S.showOverflowTooltip);
      return P(ra, { style: h(E, M, m, S), class: b(E, M, m, S, Q - 1), key: `${ge}${re}`, rowspan: q, colspan: Q, onMouseenter: (pe) => a(pe, m, te), onMouseleave: u }, { default: () => p(M, S, oe) });
    }));
  }, p = (m, E, R) => E.renderCell(R);
  return { wrappedRowRender: (m, E) => {
    const R = e.store, { isRowExpanded: W, assertRowKey: K } = R, { treeData: H, lazyTreeNodeMap: D, childrenColumnName: U, rowKey: V } = R.states, _ = R.states.columns.value;
    if (_.some(({ type: F }) => F === "expand")) {
      const F = W(m), S = d(m, E, void 0, F), M = t.renderExpanded;
      return F ? M ? [[S, P("tr", { key: `expanded-row__${S.key}` }, [P("td", { colspan: _.length, class: `${n.e("cell")} ${n.e("expanded-cell")}` }, [M({ row: m, $index: E, store: R, expanded: F })])])]] : (console.error("[Element Error]renderExpanded is required."), S) : [[S]];
    } else if (Object.keys(H.value).length) {
      K();
      const F = le(m, V.value);
      let S = H.value[F], M = null;
      S && (M = { expanded: S.expanded, level: S.level, display: true }, Ee(S.lazy) && (Ee(S.loaded) && S.loaded && (M.noLazyChildren = !(S.children && S.children.length)), M.loading = S.loading));
      const q = [d(m, E, M)];
      if (S) {
        let Q = 0;
        const Z = (re, ge) => {
          re && re.length && ge && re.forEach((te) => {
            const pe = { display: ge.display && ge.expanded, level: ge.level + 1, expanded: false, noLazyChildren: false, loading: false }, me = le(te, V.value);
            if ($e(me))
              throw new Error("For nested data item, row-key is required.");
            if (S = { ...H.value[me] }, S && (pe.expanded = S.expanded, S.level = S.level || pe.level, S.display = !!(S.expanded && pe.display), Ee(S.lazy) && (Ee(S.loaded) && S.loaded && (pe.noLazyChildren = !(S.children && S.children.length)), pe.loading = S.loading)), Q++, q.push(d(te, E + Q, pe)), S) {
              const Qe = D.value[me] || te[U.value];
              Z(Qe, S);
            }
          });
        };
        S.display = true;
        const oe = D.value[F] || m[U.value];
        Z(oe, S);
      }
      return q;
    } else
      return d(m, E, void 0);
  }, tooltipContent: c, tooltipTrigger: f };
}
const ua = { store: { required: true, type: Object }, stripe: Boolean, tooltipEffect: String, tooltipOptions: { type: Object }, context: { default: () => ({}), type: Object }, rowClassName: [String, Function], rowStyle: [Object, Function], fixed: { type: String, default: "" }, highlight: Boolean };
var ca = he({ name: "ElTableBody", props: ua, setup(e) {
  const t = ne(), n = se(Se), l = ve("table"), { wrappedRowRender: s, tooltipContent: r, tooltipTrigger: i } = ia(e), { onColumnsChange: o, onScrollableChange: a } = Kt(n), u = [];
  return de(e.store.states.hoverRow, (c, f) => {
    var v;
    const y = t == null ? void 0 : t.vnode.el, h = Array.from((y == null ? void 0 : y.children) || []).filter((C) => C == null ? void 0 : C.classList.contains(`${l.e("row")}`));
    let b = c;
    const g = (v = h[b]) == null ? void 0 : v.childNodes;
    if (g == null ? void 0 : g.length) {
      let C = 0;
      Array.from(g).reduce((x, d, p) => {
        var w, m;
        return ((w = g[p]) == null ? void 0 : w.colSpan) > 1 && (C = (m = g[p]) == null ? void 0 : m.colSpan), d.nodeName !== "TD" && C === 0 && x.push(p), C > 0 && C--, x;
      }, []).forEach((x) => {
        var d;
        for (b = c; b > 0; ) {
          const p = (d = h[b - 1]) == null ? void 0 : d.childNodes;
          if (p[x] && p[x].nodeName === "TD" && p[x].rowSpan > 1) {
            it(p[x], "hover-cell"), u.push(p[x]);
            break;
          }
          b--;
        }
      });
    } else
      u.forEach((C) => Ye(C, "hover-cell")), u.length = 0;
    !e.store.states.isComplex.value || !Ae || bo(() => {
      const C = h[f], k = h[c];
      C && !C.classList.contains("hover-fixed-row") && Ye(C, "hover-row"), k && it(k, "hover-row");
    });
  }), At(() => {
    var c;
    (c = ce) == null || c();
  }), { ns: l, onColumnsChange: o, onScrollableChange: a, wrappedRowRender: s, tooltipContent: r, tooltipTrigger: i };
}, render() {
  const { wrappedRowRender: e, store: t } = this, n = t.states.data.value || [];
  return P("tbody", { tabIndex: -1 }, [n.reduce((l, s) => l.concat(e(s, l.length)), [])]);
} });
function da() {
  const e = se(Se), t = e == null ? void 0 : e.store, n = T(() => t.states.fixedLeafColumnsLength.value), l = T(() => t.states.rightFixedColumns.value.length), s = T(() => t.states.columns.value.length), r = T(() => t.states.fixedColumns.value.length), i = T(() => t.states.rightFixedColumns.value.length);
  return { leftFixedLeafCount: n, rightFixedLeafCount: l, columnsCount: s, leftFixedCount: r, rightFixedCount: i, columns: t.states.columns };
}
function fa(e) {
  const { columns: t } = da(), n = ve("table");
  return { getCellClasses: (r, i) => {
    const o = r[i], a = [n.e("cell"), o.id, o.align, o.labelClassName, ...Bt(n.b(), i, o.fixed, e.store)];
    return o.className && a.push(o.className), o.children || a.push(n.is("leaf")), a;
  }, getCellStyles: (r, i) => {
    const o = Vt(i, r.fixed, e.store);
    return Be(o, "left"), Be(o, "right"), o;
  }, columns: t };
}
var ha = he({ name: "ElTableFooter", props: { fixed: { type: String, default: "" }, store: { required: true, type: Object }, summaryMethod: Function, sumText: String, border: Boolean, defaultSort: { type: Object, default: () => ({ prop: "", order: "" }) } }, setup(e) {
  const t = se(Se), n = ve("table"), { getCellClasses: l, getCellStyles: s, columns: r } = fa(e), { onScrollableChange: i, onColumnsChange: o } = Kt(t);
  return { ns: n, onScrollableChange: i, onColumnsChange: o, getCellClasses: l, getCellStyles: s, columns: r };
}, render() {
  const { columns: e, getCellStyles: t, getCellClasses: n, summaryMethod: l, sumText: s } = this, r = this.store.states.data.value;
  let i = [];
  return l ? i = l({ columns: e, data: r }) : e.forEach((o, a) => {
    if (a === 0) {
      i[a] = s;
      return;
    }
    const u = r.map((y) => Number(y[o.property])), c = [];
    let f = true;
    u.forEach((y) => {
      if (!Number.isNaN(+y)) {
        f = false;
        const h = `${y}`.split(".")[1];
        c.push(h ? h.length : 0);
      }
    });
    const v = Math.max.apply(null, c);
    f ? i[a] = "" : i[a] = u.reduce((y, h) => {
      const b = Number(h);
      return Number.isNaN(+b) ? y : Number.parseFloat((y + h).toFixed(Math.min(v, 20)));
    }, 0);
  }), P(P("tfoot", [P("tr", {}, [...e.map((o, a) => P("td", { key: a, colspan: o.colSpan, rowspan: o.rowSpan, class: n(e, a), style: t(o, a) }, [P("div", { class: ["cell", o.labelClassName] }, [i[a]])]))])]));
} });
function va(e) {
  return { setCurrentRow: (f) => {
    e.commit("setCurrentRow", f);
  }, getSelectionRows: () => e.getSelectionRows(), toggleRowSelection: (f, v, y = true) => {
    e.toggleRowSelection(f, v, false, y), e.updateAllSelected();
  }, clearSelection: () => {
    e.clearSelection();
  }, clearFilter: (f) => {
    e.clearFilter(f);
  }, toggleAllSelection: () => {
    e.commit("toggleAllSelection");
  }, toggleRowExpansion: (f, v) => {
    e.toggleRowExpansionAdapter(f, v);
  }, clearSort: () => {
    e.clearSort();
  }, sort: (f, v) => {
    e.commit("sort", { prop: f, order: v });
  }, updateKeyChildren: (f, v) => {
    e.updateKeyChildren(f, v);
  } };
}
function pa(e, t, n, l) {
  const s = L(false), r = L(null), i = L(false), o = (F) => {
    i.value = F;
  }, a = L({ width: null, height: null, headerHeight: null }), u = L(false), c = { display: "inline-block", verticalAlign: "middle" }, f = L(), v = L(0), y = L(0), h = L(0), b = L(0), g = L(0);
  Ie(() => {
    t.setHeight(e.height);
  }), Ie(() => {
    t.setMaxHeight(e.maxHeight);
  }), de(() => [e.currentRowKey, n.states.rowKey], ([F, S]) => {
    !O(S) || !O(F) || n.setCurrentRowKey(`${F}`);
  }, { immediate: true }), de(() => e.data, (F) => {
    l.store.commit("setData", F);
  }, { immediate: true, deep: true }), Ie(() => {
    e.expandRowKeys && n.setExpandRowKeysAdapter(e.expandRowKeys);
  });
  const C = () => {
    l.store.commit("setHoverRow", null), l.hoverState && (l.hoverState = null);
  }, k = (F, S) => {
    const { pixelX: M, pixelY: q } = S;
    Math.abs(M) >= Math.abs(q) && (l.refs.bodyWrapper.scrollLeft += S.pixelX / 5);
  }, x = T(() => e.height || e.maxHeight || n.states.fixedColumns.value.length > 0 || n.states.rightFixedColumns.value.length > 0), d = T(() => ({ width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : "" })), p = () => {
    x.value && t.updateElsHeight(), t.updateColumnsWidth(), !(typeof window > "u") && requestAnimationFrame(R);
  };
  qe(async () => {
    await Me(), n.updateColumns(), W(), requestAnimationFrame(p);
    const F = l.vnode.el, S = l.refs.headerWrapper;
    e.flexible && F && F.parentElement && (F.parentElement.style.minWidth = "0"), a.value = { width: f.value = F.offsetWidth, height: F.offsetHeight, headerHeight: e.showHeader && S ? S.offsetHeight : null }, n.states.columns.value.forEach((M) => {
      M.filteredValue && M.filteredValue.length && l.store.commit("filterChange", { column: M, values: M.filteredValue, silent: true });
    }), l.$ready = true;
  });
  const w = (F, S) => {
    if (!F)
      return;
    const M = Array.from(F.classList).filter((q) => !q.startsWith("is-scrolling-"));
    M.push(t.scrollX.value ? S : "is-scrolling-none"), F.className = M.join(" ");
  }, m = (F) => {
    const { tableWrapper: S } = l.refs;
    w(S, F);
  }, E = (F) => {
    const { tableWrapper: S } = l.refs;
    return !!(S && S.classList.contains(F));
  }, R = function() {
    if (!l.refs.scrollBarRef)
      return;
    if (!t.scrollX.value) {
      const re = "is-scrolling-none";
      E(re) || m(re);
      return;
    }
    const F = l.refs.scrollBarRef.wrapRef;
    if (!F)
      return;
    const { scrollLeft: S, offsetWidth: M, scrollWidth: q } = F, { headerWrapper: Q, footerWrapper: Z } = l.refs;
    Q && (Q.scrollLeft = S), Z && (Z.scrollLeft = S);
    const oe = q - M - 1;
    S >= oe ? m("is-scrolling-right") : m(S === 0 ? "is-scrolling-left" : "is-scrolling-middle");
  }, W = () => {
    l.refs.scrollBarRef && (l.refs.scrollBarRef.wrapRef && Yt(l.refs.scrollBarRef.wrapRef, "scroll", R, { passive: true }), e.fit ? qt(l.vnode.el, K) : Yt(window, "resize", K), qt(l.refs.bodyWrapper, () => {
      var F, S;
      K(), (S = (F = l.refs) == null ? void 0 : F.scrollBarRef) == null || S.update();
    }));
  }, K = () => {
    var F, S, M, q;
    const Q = l.vnode.el;
    if (!l.$ready || !Q)
      return;
    let Z = false;
    const { width: oe, height: re, headerHeight: ge } = a.value, te = f.value = Q.offsetWidth;
    oe !== te && (Z = true);
    const pe = Q.offsetHeight;
    (e.height || x.value) && re !== pe && (Z = true);
    const me = e.tableLayout === "fixed" ? l.refs.headerWrapper : (F = l.refs.tableHeaderRef) == null ? void 0 : F.$el;
    e.showHeader && (me == null ? void 0 : me.offsetHeight) !== ge && (Z = true), v.value = ((S = l.refs.tableWrapper) == null ? void 0 : S.scrollHeight) || 0, h.value = (me == null ? void 0 : me.scrollHeight) || 0, b.value = ((M = l.refs.footerWrapper) == null ? void 0 : M.offsetHeight) || 0, g.value = ((q = l.refs.appendWrapper) == null ? void 0 : q.offsetHeight) || 0, y.value = v.value - h.value - b.value - g.value, Z && (a.value = { width: te, height: pe, headerHeight: e.showHeader && (me == null ? void 0 : me.offsetHeight) || 0 }, p());
  }, H = bt(), D = T(() => {
    const { bodyWidth: F, scrollY: S, gutterWidth: M } = t;
    return F.value ? `${F.value - (S.value ? M : 0)}px` : "";
  }), U = T(() => e.maxHeight ? "fixed" : e.tableLayout), V = T(() => {
    if (e.data && e.data.length)
      return null;
    let F = "100%";
    e.height && y.value && (F = `${y.value}px`);
    const S = f.value;
    return { width: S ? `${S}px` : "", height: F };
  }), _ = T(() => e.height ? { height: "100%" } : e.maxHeight ? Number.isNaN(Number(e.maxHeight)) ? { maxHeight: `calc(${e.maxHeight} - ${h.value + b.value}px)` } : { maxHeight: `${e.maxHeight - h.value - b.value}px` } : {});
  return { isHidden: s, renderExpanded: r, setDragVisible: o, isGroup: u, handleMouseLeave: C, handleHeaderFooterMousewheel: k, tableSize: H, emptyBlockStyle: V, handleFixedMousewheel: (F, S) => {
    const M = l.refs.bodyWrapper;
    if (Math.abs(S.spinY) > 0) {
      const q = M.scrollTop;
      S.pixelY < 0 && q !== 0 && F.preventDefault(), S.pixelY > 0 && M.scrollHeight - M.clientHeight > q && F.preventDefault(), M.scrollTop += Math.ceil(S.pixelY / 5);
    } else
      M.scrollLeft += Math.ceil(S.pixelX / 5);
  }, resizeProxyVisible: i, bodyWidth: D, resizeState: a, doLayout: p, tableBodyStyles: d, tableLayout: U, scrollbarViewStyle: c, scrollbarStyle: _ };
}
function ma(e) {
  const t = L(), n = () => {
    const s = e.vnode.el.querySelector(".hidden-columns"), r = { childList: true, subtree: true }, i = e.store.states.updateOrderFns;
    t.value = new MutationObserver(() => {
      i.forEach((o) => o());
    }), t.value.observe(s, r);
  };
  qe(() => {
    n();
  }), At(() => {
    var l;
    (l = t.value) == null || l.disconnect();
  });
}
var ga = { data: { type: Array, default: () => [] }, size: Mt, width: [String, Number], height: [String, Number], maxHeight: [String, Number], fit: { type: Boolean, default: true }, stripe: Boolean, border: Boolean, rowKey: [String, Function], showHeader: { type: Boolean, default: true }, showSummary: Boolean, sumText: String, summaryMethod: Function, rowClassName: [String, Function], rowStyle: [Object, Function], cellClassName: [String, Function], cellStyle: [Object, Function], headerRowClassName: [String, Function], headerRowStyle: [Object, Function], headerCellClassName: [String, Function], headerCellStyle: [Object, Function], highlightCurrentRow: Boolean, currentRowKey: [String, Number], emptyText: String, expandRowKeys: Array, defaultExpandAll: Boolean, defaultSort: Object, tooltipEffect: String, tooltipOptions: Object, spanMethod: Function, selectOnIndeterminate: { type: Boolean, default: true }, indent: { type: Number, default: 16 }, treeProps: { type: Object, default: () => ({ hasChildren: "hasChildren", children: "children", checkStrictly: false }) }, lazy: Boolean, load: Function, style: { type: Object, default: () => ({}) }, className: { type: String, default: "" }, tableLayout: { type: String, default: "fixed" }, scrollbarAlwaysOn: Boolean, flexible: Boolean, showOverflowTooltip: [Boolean, Object], tooltipFormatter: Function, appendFilterPanelTo: String, scrollbarTabindex: { type: [Number, String], default: void 0 }, allowDragLastColumn: { type: Boolean, default: true } };
function zl(e) {
  const t = e.tableLayout === "auto";
  let n = e.columns || [];
  t && n.every(({ width: s }) => Ce(s)) && (n = []);
  const l = (s) => {
    const r = { key: `${e.tableLayout}_${s.id}`, style: {}, name: void 0 };
    return t ? r.style = { width: `${s.width}px` } : r.name = s.id, r;
  };
  return P("colgroup", {}, n.map((s) => P("col", l(s))));
}
zl.props = ["columns", "tableLayout"];
const ba = () => {
  const e = L(), t = (r, i) => {
    const o = e.value;
    o && o.scrollTo(r, i);
  }, n = (r, i) => {
    const o = e.value;
    o && Oe(i) && ["Top", "Left"].includes(r) && o[`setScroll${r}`](i);
  };
  return { scrollBarRef: e, scrollTo: t, setScrollTop: (r) => n("Top", r), setScrollLeft: (r) => n("Left", r) };
};
var el = false, We, xt, Et, lt, nt, Il, ot, Lt, kt, Rt, Dl, Nt, Ft, _l, jl;
function ue() {
  if (!el) {
    el = true;
    var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (Nt = /\b(iPhone|iP[ao]d)/.exec(e), Ft = /\b(iP[ao]d)/.exec(e), Rt = /Android/i.exec(e), _l = /FBAN\/\w+;/i.exec(e), jl = /Mobile/i.exec(e), Dl = !!/Win64/.exec(e), t) {
      We = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, We && document && document.documentMode && (We = document.documentMode);
      var l = /(?:Trident\/(\d+.\d+))/.exec(e);
      Il = l ? parseFloat(l[1]) + 4 : We, xt = t[2] ? parseFloat(t[2]) : NaN, Et = t[3] ? parseFloat(t[3]) : NaN, lt = t[4] ? parseFloat(t[4]) : NaN, lt ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), nt = t && t[1] ? parseFloat(t[1]) : NaN) : nt = NaN;
    } else
      We = xt = Et = nt = lt = NaN;
    if (n) {
      if (n[1]) {
        var s = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        ot = s ? parseFloat(s[1].replace("_", ".")) : true;
      } else
        ot = false;
      Lt = !!n[2], kt = !!n[3];
    } else
      ot = Lt = kt = false;
  }
}
var Ot = { ie: function() {
  return ue() || We;
}, ieCompatibilityMode: function() {
  return ue() || Il > We;
}, ie64: function() {
  return Ot.ie() && Dl;
}, firefox: function() {
  return ue() || xt;
}, opera: function() {
  return ue() || Et;
}, webkit: function() {
  return ue() || lt;
}, safari: function() {
  return Ot.webkit();
}, chrome: function() {
  return ue() || nt;
}, windows: function() {
  return ue() || Lt;
}, osx: function() {
  return ue() || ot;
}, linux: function() {
  return ue() || kt;
}, iphone: function() {
  return ue() || Nt;
}, mobile: function() {
  return ue() || Nt || Ft || Rt || jl;
}, nativeApp: function() {
  return ue() || _l;
}, android: function() {
  return ue() || Rt;
}, ipad: function() {
  return ue() || Ft;
} }, ya = Ot, et = !!(typeof window < "u" && window.document && window.document.createElement), Ca = { canUseDOM: et, canUseWorkers: typeof Worker < "u", canUseEventListeners: et && !!(window.addEventListener || window.attachEvent), canUseViewport: et && !!window.screen, isInWorker: !et }, Ul = Ca, Gl;
Ul.canUseDOM && (Gl = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== true);
function wa(e, t) {
  if (!Ul.canUseDOM || t && !("addEventListener" in document))
    return false;
  var n = "on" + e, l = n in document;
  if (!l) {
    var s = document.createElement("div");
    s.setAttribute(n, "return;"), l = typeof s[n] == "function";
  }
  return !l && Gl && e === "wheel" && (l = document.implementation.hasFeature("Events.wheel", "3.0")), l;
}
var Sa = wa, tl = 10, ll = 40, nl = 800;
function Yl(e) {
  var t = 0, n = 0, l = 0, s = 0;
  return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), l = t * tl, s = n * tl, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (l = e.deltaX), (l || s) && e.deltaMode && (e.deltaMode == 1 ? (l *= ll, s *= ll) : (l *= nl, s *= nl)), l && !t && (t = l < 1 ? -1 : 1), s && !n && (n = s < 1 ? -1 : 1), { spinX: t, spinY: n, pixelX: l, pixelY: s };
}
Yl.getEventType = function() {
  return ya.firefox() ? "DOMMouseScroll" : Sa("wheel") ? "wheel" : "mousewheel";
};
var xa = Yl;
/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/
const Ea = function(e, t) {
  if (e && e.addEventListener) {
    const n = function(l) {
      const s = xa(l);
      t && Reflect.apply(t, this, [l, s]);
    };
    e.addEventListener("wheel", n, { passive: true });
  }
}, La = { beforeMount(e, t) {
  Ea(e, t.value);
} };
let ka = 1;
const Ra = he({ name: "ElTable", directives: { Mousewheel: La }, components: { TableHeader: la, TableBody: ca, TableFooter: ha, ElScrollbar: xl, hColgroup: zl }, props: ga, emits: ["select", "select-all", "selection-change", "cell-mouse-enter", "cell-mouse-leave", "cell-contextmenu", "cell-click", "cell-dblclick", "row-click", "row-contextmenu", "row-dblclick", "header-click", "header-contextmenu", "sort-change", "filter-change", "current-change", "header-dragend", "expand-change", "scroll"], setup(e) {
  const { t } = bl(), n = ve("table"), l = ne();
  hl(Se, l);
  const s = Uo(l, e);
  l.store = s;
  const r = new Yo({ store: l.store, table: l, fit: e.fit, showHeader: e.showHeader });
  l.layout = r;
  const i = T(() => (s.states.data.value || []).length === 0), { setCurrentRow: o, getSelectionRows: a, toggleRowSelection: u, clearSelection: c, clearFilter: f, toggleAllSelection: v, toggleRowExpansion: y, clearSort: h, sort: b, updateKeyChildren: g } = va(s), { isHidden: C, renderExpanded: k, setDragVisible: x, isGroup: d, handleMouseLeave: p, handleHeaderFooterMousewheel: w, tableSize: m, emptyBlockStyle: E, handleFixedMousewheel: R, resizeProxyVisible: W, bodyWidth: K, resizeState: H, doLayout: D, tableBodyStyles: U, tableLayout: V, scrollbarViewStyle: _, scrollbarStyle: G } = pa(e, r, s, l), { scrollBarRef: F, scrollTo: S, setScrollLeft: M, setScrollTop: q } = ba(), Q = ut(D, 50), Z = `${n.namespace.value}-table_${ka++}`;
  l.tableId = Z, l.state = { isGroup: d, resizeState: H, doLayout: D, debouncedUpdateLayout: Q };
  const oe = T(() => {
    var te;
    return (te = e.sumText) != null ? te : t("el.table.sumText");
  }), re = T(() => {
    var te;
    return (te = e.emptyText) != null ? te : t("el.table.emptyText");
  }), ge = T(() => Kl(s.states.originColumns.value)[0]);
  return ma(l), wl(() => {
    Q.cancel();
  }), { ns: n, layout: r, store: s, columns: ge, handleHeaderFooterMousewheel: w, handleMouseLeave: p, tableId: Z, tableSize: m, isHidden: C, isEmpty: i, renderExpanded: k, resizeProxyVisible: W, resizeState: H, isGroup: d, bodyWidth: K, tableBodyStyles: U, emptyBlockStyle: E, debouncedUpdateLayout: Q, handleFixedMousewheel: R, setCurrentRow: o, getSelectionRows: a, toggleRowSelection: u, clearSelection: c, clearFilter: f, toggleAllSelection: v, toggleRowExpansion: y, clearSort: h, doLayout: D, sort: b, updateKeyChildren: g, t, setDragVisible: x, context: l, computedSumText: oe, computedEmptyText: re, tableLayout: V, scrollbarViewStyle: _, scrollbarStyle: G, scrollBarRef: F, scrollTo: S, setScrollLeft: M, setScrollTop: q, allowDragLastColumn: e.allowDragLastColumn };
} });
function Na(e, t, n, l, s, r) {
  const i = be("hColgroup"), o = be("table-header"), a = be("table-body"), u = be("table-footer"), c = be("el-scrollbar"), f = yl("mousewheel");
  return I(), X("div", { ref: "tableWrapper", class: B([{ [e.ns.m("fit")]: e.fit, [e.ns.m("striped")]: e.stripe, [e.ns.m("border")]: e.border || e.isGroup, [e.ns.m("hidden")]: e.isHidden, [e.ns.m("group")]: e.isGroup, [e.ns.m("fluid-height")]: e.maxHeight, [e.ns.m("scrollable-x")]: e.layout.scrollX.value, [e.ns.m("scrollable-y")]: e.layout.scrollY.value, [e.ns.m("enable-row-hover")]: !e.store.states.isComplex.value, [e.ns.m("enable-row-transition")]: (e.store.states.data.value || []).length !== 0 && (e.store.states.data.value || []).length < 100, "has-footer": e.showSummary }, e.ns.m(e.tableSize), e.className, e.ns.b(), e.ns.m(`layout-${e.tableLayout}`)]), style: He(e.style), "data-prefix": e.ns.namespace.value, onMouseleave: e.handleMouseLeave }, [ae("div", { class: B(e.ns.e("inner-wrapper")) }, [ae("div", { ref: "hiddenColumns", class: "hidden-columns" }, [Le(e.$slots, "default")], 512), e.showHeader && e.tableLayout === "fixed" ? Te((I(), X("div", { key: 0, ref: "headerWrapper", class: B(e.ns.e("header-wrapper")) }, [ae("table", { ref: "tableHeader", class: B(e.ns.e("header")), style: He(e.tableBodyStyles), border: "0", cellpadding: "0", cellspacing: "0" }, [we(i, { columns: e.store.states.columns.value, "table-layout": e.tableLayout }, null, 8, ["columns", "table-layout"]), we(o, { ref: "tableHeaderRef", border: e.border, "default-sort": e.defaultSort, store: e.store, "append-filter-panel-to": e.appendFilterPanelTo, "allow-drag-last-column": e.allowDragLastColumn, onSetDragVisible: e.setDragVisible }, null, 8, ["border", "default-sort", "store", "append-filter-panel-to", "allow-drag-last-column", "onSetDragVisible"])], 6)], 2)), [[f, e.handleHeaderFooterMousewheel]]) : xe("v-if", true), ae("div", { ref: "bodyWrapper", class: B(e.ns.e("body-wrapper")) }, [we(c, { ref: "scrollBarRef", "view-style": e.scrollbarViewStyle, "wrap-style": e.scrollbarStyle, always: e.scrollbarAlwaysOn, tabindex: e.scrollbarTabindex, onScroll: (v) => e.$emit("scroll", v) }, { default: Re(() => [ae("table", { ref: "tableBody", class: B(e.ns.e("body")), cellspacing: "0", cellpadding: "0", border: "0", style: He({ width: e.bodyWidth, tableLayout: e.tableLayout }) }, [we(i, { columns: e.store.states.columns.value, "table-layout": e.tableLayout }, null, 8, ["columns", "table-layout"]), e.showHeader && e.tableLayout === "auto" ? (I(), Fe(o, { key: 0, ref: "tableHeaderRef", class: B(e.ns.e("body-header")), border: e.border, "default-sort": e.defaultSort, store: e.store, "append-filter-panel-to": e.appendFilterPanelTo, onSetDragVisible: e.setDragVisible }, null, 8, ["class", "border", "default-sort", "store", "append-filter-panel-to", "onSetDragVisible"])) : xe("v-if", true), we(a, { context: e.context, highlight: e.highlightCurrentRow, "row-class-name": e.rowClassName, "tooltip-effect": e.tooltipEffect, "tooltip-options": e.tooltipOptions, "row-style": e.rowStyle, store: e.store, stripe: e.stripe }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "tooltip-options", "row-style", "store", "stripe"]), e.showSummary && e.tableLayout === "auto" ? (I(), Fe(u, { key: 1, class: B(e.ns.e("body-footer")), border: e.border, "default-sort": e.defaultSort, store: e.store, "sum-text": e.computedSumText, "summary-method": e.summaryMethod }, null, 8, ["class", "border", "default-sort", "store", "sum-text", "summary-method"])) : xe("v-if", true)], 6), e.isEmpty ? (I(), X("div", { key: 0, ref: "emptyBlock", style: He(e.emptyBlockStyle), class: B(e.ns.e("empty-block")) }, [ae("span", { class: B(e.ns.e("empty-text")) }, [Le(e.$slots, "empty", {}, () => [ht(Ne(e.computedEmptyText), 1)])], 2)], 6)) : xe("v-if", true), e.$slots.append ? (I(), X("div", { key: 1, ref: "appendWrapper", class: B(e.ns.e("append-wrapper")) }, [Le(e.$slots, "append")], 2)) : xe("v-if", true)]), _: 3 }, 8, ["view-style", "wrap-style", "always", "tabindex", "onScroll"])], 2), e.showSummary && e.tableLayout === "fixed" ? Te((I(), X("div", { key: 1, ref: "footerWrapper", class: B(e.ns.e("footer-wrapper")) }, [ae("table", { class: B(e.ns.e("footer")), cellspacing: "0", cellpadding: "0", border: "0", style: He(e.tableBodyStyles) }, [we(i, { columns: e.store.states.columns.value, "table-layout": e.tableLayout }, null, 8, ["columns", "table-layout"]), we(u, { border: e.border, "default-sort": e.defaultSort, store: e.store, "sum-text": e.computedSumText, "summary-method": e.summaryMethod }, null, 8, ["border", "default-sort", "store", "sum-text", "summary-method"])], 6)], 2)), [[Xt, !e.isEmpty], [f, e.handleHeaderFooterMousewheel]]) : xe("v-if", true), e.border || e.isGroup ? (I(), X("div", { key: 2, class: B(e.ns.e("border-left-patch")) }, null, 2)) : xe("v-if", true)], 2), Te(ae("div", { ref: "resizeProxy", class: B(e.ns.e("column-resize-proxy")) }, null, 2), [[Xt, e.resizeProxyVisible]])], 46, ["data-prefix", "onMouseleave"]);
}
var Fa = Ve(Ra, [["render", Na], ["__file", "table.vue"]]);
const Oa = { selection: "table-column--selection", expand: "table__expand-column" }, Ta = { default: { order: "" }, selection: { width: 48, minWidth: 48, realWidth: 48, order: "" }, expand: { width: 48, minWidth: 48, realWidth: 48, order: "" }, index: { width: 48, minWidth: 48, realWidth: 48, order: "" } }, Ma = (e) => Oa[e] || "", Wa = { selection: { renderHeader({ store: e, column: t }) {
  function n() {
    return e.states.data.value && e.states.data.value.length === 0;
  }
  return P(Pe, { disabled: n(), size: e.states.tableSize.value, indeterminate: e.states.selection.value.length > 0 && !e.states.isAllSelected.value, "onUpdate:modelValue": e.toggleAllSelection, modelValue: e.states.isAllSelected.value, ariaLabel: t.label });
}, renderCell({ row: e, column: t, store: n, $index: l }) {
  return P(Pe, { disabled: t.selectable ? !t.selectable.call(null, e, l) : false, size: n.states.tableSize.value, onChange: () => {
    n.commit("rowSelectedChanged", e);
  }, onClick: (s) => s.stopPropagation(), modelValue: n.isSelected(e), ariaLabel: t.label });
}, sortable: false, resizable: false }, index: { renderHeader({ column: e }) {
  return e.label || "#";
}, renderCell({ column: e, $index: t }) {
  let n = t + 1;
  const l = e.index;
  return Oe(l) ? n = t + l : ye(l) && (n = l(t)), P("div", {}, [n]);
}, sortable: false }, expand: { renderHeader({ column: e }) {
  return e.label || "";
}, renderCell({ row: e, store: t, expanded: n }) {
  const { ns: l } = t, s = [l.e("expand-icon")];
  return n && s.push(l.em("expand-icon", "expanded")), P("div", { class: s, onClick: function(i) {
    i.stopPropagation(), t.toggleRowExpansion(e);
  } }, { default: () => [P(Ht, null, { default: () => [P(Sl)] })] });
}, sortable: false, resizable: false } };
function $a({ row: e, column: t, $index: n }) {
  var l;
  const s = t.property, r = s && gl(e, s).value;
  return t && t.formatter ? t.formatter(e, t, r, n) : ((l = r == null ? void 0 : r.toString) == null ? void 0 : l.call(r)) || "";
}
function Ha({ row: e, treeNode: t, store: n }, l = false) {
  const { ns: s } = n;
  if (!t)
    return l ? [P("span", { class: s.e("placeholder") })] : null;
  const r = [], i = function(o) {
    o.stopPropagation(), !t.loading && n.loadOrToggle(e);
  };
  if (t.indent && r.push(P("span", { class: s.e("indent"), style: { "padding-left": `${t.indent}px` } })), Ee(t.expanded) && !t.noLazyChildren) {
    const o = [s.e("expand-icon"), t.expanded ? s.em("expand-icon", "expanded") : ""];
    let a = Sl;
    t.loading && (a = jn), r.push(P("div", { class: o, onClick: i }, { default: () => [P(Ht, { class: { [s.is("loading")]: t.loading } }, { default: () => [P(a)] })] }));
  } else
    r.push(P("span", { class: s.e("placeholder") }));
  return r;
}
function ol(e, t) {
  return e.reduce((n, l) => (n[l] = l, n), t);
}
function Aa(e, t) {
  const n = ne();
  return { registerComplexWatchers: () => {
    const r = ["fixed"], i = { realWidth: "width", realMinWidth: "minWidth" }, o = ol(r, i);
    Object.keys(o).forEach((a) => {
      const u = i[a];
      Ge(t, u) && de(() => t[u], (c) => {
        let f = c;
        u === "width" && a === "realWidth" && (f = Pt(c)), u === "minWidth" && a === "realMinWidth" && (f = $l(c)), n.columnConfig.value[u] = f, n.columnConfig.value[a] = f;
        const v = u === "fixed";
        e.value.store.scheduleLayout(v);
      });
    });
  }, registerNormalWatchers: () => {
    const r = ["label", "filters", "filterMultiple", "filteredValue", "sortable", "index", "formatter", "className", "labelClassName", "filterClassName", "showOverflowTooltip", "tooltipFormatter"], i = { property: "prop", align: "realAlign", headerAlign: "realHeaderAlign" }, o = ol(r, i);
    Object.keys(o).forEach((a) => {
      const u = i[a];
      Ge(t, u) && de(() => t[u], (c) => {
        n.columnConfig.value[a] = c;
      });
    });
  } };
}
function Pa(e, t, n) {
  const l = ne(), s = L(""), r = L(false), i = L(), o = L(), a = ve("table");
  Ie(() => {
    i.value = e.align ? `is-${e.align}` : null, i.value;
  }), Ie(() => {
    o.value = e.headerAlign ? `is-${e.headerAlign}` : i.value, o.value;
  });
  const u = T(() => {
    let d = l.vnode.vParent || l.parent;
    for (; d && !d.tableId && !d.columnId; )
      d = d.vnode.vParent || d.parent;
    return d;
  }), c = T(() => {
    const { store: d } = l.parent;
    if (!d)
      return false;
    const { treeData: p } = d.states, w = p.value;
    return w && Object.keys(w).length > 0;
  }), f = L(Pt(e.width)), v = L($l(e.minWidth)), y = (d) => (f.value && (d.width = f.value), v.value && (d.minWidth = v.value), !f.value && v.value && (d.width = void 0), d.minWidth || (d.minWidth = 80), d.realWidth = Number(Ce(d.width) ? d.minWidth : d.width), d), h = (d) => {
    const p = d.type, w = Wa[p] || {};
    Object.keys(w).forEach((E) => {
      const R = w[E];
      E !== "className" && !Ce(R) && (d[E] = R);
    });
    const m = Ma(p);
    if (m) {
      const E = `${O(a.namespace)}-${m}`;
      d.className = d.className ? `${d.className} ${E}` : E;
    }
    return d;
  }, b = (d) => {
    ee(d) ? d.forEach((w) => p(w)) : p(d);
    function p(w) {
      var m;
      ((m = w == null ? void 0 : w.type) == null ? void 0 : m.name) === "ElTableColumn" && (w.vParent = l);
    }
  };
  return { columnId: s, realAlign: i, isSubColumn: r, realHeaderAlign: o, columnOrTableParent: u, setColumnWidth: y, setColumnForcedProps: h, setColumnRenders: (d) => {
    e.renderHeader || d.type !== "selection" && (d.renderHeader = (w) => (l.columnConfig.value.label, Le(t, "header", w, () => [d.label]))), t["filter-icon"] && (d.renderFilterIcon = (w) => Le(t, "filter-icon", w));
    let p = d.renderCell;
    return d.type === "expand" ? (d.renderCell = (w) => P("div", { class: "cell" }, [p(w)]), n.value.renderExpanded = (w) => t.default ? t.default(w) : t.default) : (p = p || $a, d.renderCell = (w) => {
      let m = null;
      if (t.default) {
        const D = t.default(w);
        m = D.some((U) => U.type !== Un) ? D : p(w);
      } else
        m = p(w);
      const { columns: E } = n.value.store.states, R = E.value.findIndex((D) => D.type === "default"), W = c.value && w.cellIndex === R, K = Ha(w, W), H = { class: "cell", style: {} };
      return d.showOverflowTooltip && (H.class = `${H.class} ${O(a.namespace)}-tooltip`, H.style = { width: `${(w.column.realWidth || Number(w.column.width)) - 1}px` }), b(m), P("div", H, [K, m]);
    }), d;
  }, getPropsData: (...d) => d.reduce((p, w) => (ee(w) && w.forEach((m) => {
    p[m] = e[m];
  }), p), {}), getColumnElIndex: (d, p) => Array.prototype.indexOf.call(d, p), updateColumnOrder: () => {
    n.value.store.commit("updateColumnOrder", l.columnConfig.value);
  } };
}
var Ba = { type: { type: String, default: "default" }, label: String, className: String, labelClassName: String, property: String, prop: String, width: { type: [String, Number], default: "" }, minWidth: { type: [String, Number], default: "" }, renderHeader: Function, sortable: { type: [Boolean, String], default: false }, sortMethod: Function, sortBy: [String, Function, Array], resizable: { type: Boolean, default: true }, columnKey: String, align: String, headerAlign: String, showOverflowTooltip: { type: [Boolean, Object], default: void 0 }, tooltipFormatter: Function, fixed: [Boolean, String], formatter: Function, selectable: Function, reserveSelection: Boolean, filterMethod: Function, filteredValue: Array, filters: Array, filterPlacement: String, filterMultiple: { type: Boolean, default: true }, filterClassName: String, index: [Number, Function], sortOrders: { type: Array, default: () => ["ascending", "descending", null], validator: (e) => e.every((t) => ["ascending", "descending", null].includes(t)) } };
let Va = 1;
var ql = he({ name: "ElTableColumn", components: { ElCheckbox: Pe }, props: Ba, setup(e, { slots: t }) {
  const n = ne(), l = L({}), s = T(() => {
    let x = n.parent;
    for (; x && !x.tableId; )
      x = x.parent;
    return x;
  }), { registerNormalWatchers: r, registerComplexWatchers: i } = Aa(s, e), { columnId: o, isSubColumn: a, realHeaderAlign: u, columnOrTableParent: c, setColumnWidth: f, setColumnForcedProps: v, setColumnRenders: y, getPropsData: h, getColumnElIndex: b, realAlign: g, updateColumnOrder: C } = Pa(e, t, s), k = c.value;
  o.value = `${k.tableId || k.columnId}_column_${Va++}`, Cl(() => {
    a.value = s.value !== k;
    const x = e.type || "default", d = e.sortable === "" ? true : e.sortable, p = Ce(e.showOverflowTooltip) ? k.props.showOverflowTooltip : e.showOverflowTooltip, w = Ce(e.tooltipFormatter) ? k.props.tooltipFormatter : e.tooltipFormatter, m = { ...Ta[x], id: o.value, type: x, property: e.prop || e.property, align: g, headerAlign: u, showOverflowTooltip: p, tooltipFormatter: w, filterable: e.filters || e.filterMethod, filteredValue: [], filterPlacement: "", filterClassName: "", isColumnGroup: false, isSubColumn: false, filterOpened: false, sortable: d, index: e.index, rawColumnKey: n.vnode.key };
    let H = h(["columnKey", "label", "className", "labelClassName", "type", "renderHeader", "formatter", "fixed", "resizable"], ["sortMethod", "sortBy", "sortOrders"], ["selectable", "reserveSelection"], ["filterMethod", "filters", "filterMultiple", "filterOpened", "filteredValue", "filterPlacement", "filterClassName"]);
    H = $o(m, H), H = Ao(y, f, v)(H), l.value = H, r(), i();
  }), qe(() => {
    var x;
    const d = c.value, p = a.value ? d.vnode.el.children : (x = d.refs.hiddenColumns) == null ? void 0 : x.children, w = () => b(p || [], n.vnode.el);
    l.value.getColumnIndex = w, w() > -1 && s.value.store.commit("insertColumn", l.value, a.value ? d.columnConfig.value : null, C);
  }), wl(() => {
    const x = l.value.getColumnIndex;
    (x ? x() : -1) > -1 && s.value.store.commit("removeColumn", l.value, a.value ? k.columnConfig.value : null, C);
  }), n.columnId = o.value, n.columnConfig = l;
}, render() {
  var e, t, n;
  try {
    const l = (t = (e = this.$slots).default) == null ? void 0 : t.call(e, { row: {}, column: {}, $index: -1 }), s = [];
    if (ee(l))
      for (const i of l)
        ((n = i.type) == null ? void 0 : n.name) === "ElTableColumn" || i.shapeFlag & 2 ? s.push(i) : i.type === rt && ee(i.children) && i.children.forEach((o) => {
          (o == null ? void 0 : o.patchFlag) !== 1024 && !fe(o == null ? void 0 : o.children) && s.push(o);
        });
    return P("div", s);
  } catch {
    return P("div", []);
  }
} });
const Ya = pl(Fa, { TableColumn: ql }), qa = $t(ql);
export {
  qa as E,
  Ya as a,
  Pe as b,
  Ga as c
};
