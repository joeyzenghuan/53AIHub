import { cO as il, ae as rl, dq as ul, dr as it, ds as rt, dt as Y, du as dl, dv as cl, dw as fl, cL as pl, dx as vl, U as bl, r as I, Y as f, bT as X, aP as ut, aI as Se, bB as hl, cX as G, bc as P, h as Ce, cD as ml, $ as H, a$ as Oe, y as de, aU as re, bJ as dt, u as Te, Z as ue, b7 as $e, bh as gl, n as K, m as oe, p as De, b as S, c as E, s as M, d as V, t as B, q as g, x as N, o as ke, e as D, a7 as ye, aV as yl, cr as Sl, cq as Cl, bx as je, bu as Ol, bv as wl, dy as El, ce as F, ct as Il, bg as Vl, bF as ge, dz as _e, af as Tl, br as Ml, i as Rl, X as se, dk as $l, bj as Dl, bp as J, dA as kl, bs as Le, b5 as Ll, b1 as ne, bD as Nl, bk as xe, bm as et, b4 as Bl, M as Pl, dB as Fl, dC as Al, bo as Wl, az as zl, G as Kl, cT as Gl, ax as ct, aJ as q, ay as Hl, f as Q, w as L, F as tt, K as lt, L as nt, j as z, by as ae, cu as Ul, ao as Me, dD as ql, V as Ql, dE as Xl, W as Jl, b0 as Yl, cl as ft } from "./index-8579fe4a.js";
import { s as Zl, E as jl } from "./el-scrollbar-4065fe54.js";
import { t as at, E as _l } from "./el-tag-0b6baecb.js";
import { b as pt, i as ie } from "./isEqual-8c73ec38.js";
import { t as xl, d as en } from "./debounce-484109dd.js";
var st = 1 / 0, tn = 17976931348623157e292;
function ln(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = xl(e), e === st || e === -st) {
    var a = e < 0 ? -1 : 1;
    return a * tn;
  }
  return e === e ? e : 0;
}
function nn(e) {
  var a = ln(e), s = a % 1;
  return a === a ? s ? a - s : a : 0;
}
function an(e, a, s, r) {
  for (var o = e.length, b = s + (r ? 1 : -1); r ? b-- : ++b < o; )
    if (a(e[b], b, e))
      return b;
  return -1;
}
var sn = 1, on = 2;
function rn(e, a, s, r) {
  var o = s.length, b = o, l = !r;
  if (e == null)
    return !b;
  for (e = Object(e); o--; ) {
    var h = s[o];
    if (l && h[2] ? h[1] !== e[h[0]] : !(h[0] in e))
      return false;
  }
  for (; ++o < b; ) {
    h = s[o];
    var y = h[0], m = e[y], v = h[1];
    if (l && h[2]) {
      if (m === void 0 && !(y in e))
        return false;
    } else {
      var d = new il();
      if (r)
        var i = r(m, v, y, e, a, d);
      if (!(i === void 0 ? pt(v, m, sn | on, r, d) : i))
        return false;
    }
  }
  return true;
}
function vt(e) {
  return e === e && !rl(e);
}
function un(e) {
  for (var a = ul(e), s = a.length; s--; ) {
    var r = a[s], o = e[r];
    a[s] = [r, o, vt(o)];
  }
  return a;
}
function bt(e, a) {
  return function(s) {
    return s == null ? false : s[e] === a && (a !== void 0 || e in Object(s));
  };
}
function dn(e) {
  var a = un(e);
  return a.length == 1 && a[0][2] ? bt(a[0][0], a[0][1]) : function(s) {
    return s === e || rn(s, e, a);
  };
}
var cn = 1, fn = 2;
function pn(e, a) {
  return it(e) && vt(a) ? bt(rt(e), a) : function(s) {
    var r = Y(s, e);
    return r === void 0 && r === a ? dl(s, e) : pt(a, r, cn | fn);
  };
}
function vn(e) {
  return function(a) {
    return a == null ? void 0 : a[e];
  };
}
function bn(e) {
  return function(a) {
    return cl(a, e);
  };
}
function hn(e) {
  return it(e) ? vn(rt(e)) : bn(e);
}
function mn(e) {
  return typeof e == "function" ? e : e == null ? fl : typeof e == "object" ? pl(e) ? pn(e[0], e[1]) : dn(e) : hn(e);
}
var gn = Math.max, yn = Math.min;
function Sn(e, a, s) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return s !== void 0 && (o = nn(s), o = s < 0 ? gn(r + o, 0) : yn(o, r - 1)), an(e, mn(a), o, true);
}
const Cn = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Hn = (e) => vl(e);
function On() {
  const e = bl(), a = I(0), s = 11, r = f(() => ({ minWidth: `${Math.max(a.value, s)}px` }));
  return X(e, () => {
    var b, l;
    a.value = (l = (b = e.value) == null ? void 0 : b.getBoundingClientRect().width) != null ? l : 0;
  }), { calculatorRef: e, calculatorWidth: a, inputStyle: r };
}
const ht = Symbol("ElSelectGroup"), we = Symbol("ElSelect"), Re = "ElOption", wn = ut({ value: { type: [String, Number, Boolean, Object], required: true }, label: { type: [String, Number] }, created: Boolean, disabled: Boolean });
function En(e, a) {
  const s = Se(we);
  s || hl(Re, "usage: <el-select><el-option /></el-select/>");
  const r = Se(ht, { disabled: false }), o = f(() => v(G(s.props.modelValue), e.value)), b = f(() => {
    var u;
    if (s.props.multiple) {
      const p = G((u = s.props.modelValue) != null ? u : []);
      return !o.value && p.length >= s.props.multipleLimit && s.props.multipleLimit > 0;
    } else
      return false;
  }), l = f(() => {
    var u;
    return (u = e.label) != null ? u : P(e.value) ? "" : e.value;
  }), h = f(() => e.value || e.label || ""), y = f(() => e.disabled || a.groupDisabled || b.value), m = Ce(), v = (u = [], p) => {
    if (P(e.value)) {
      const w = s.props.valueKey;
      return u && u.some((T) => ml(Y(T, w)) === Y(p, w));
    } else
      return u && u.includes(p);
  }, d = () => {
    !e.disabled && !r.disabled && (s.states.hoveringIndex = s.optionsArray.indexOf(m.proxy));
  }, i = (u) => {
    const p = new RegExp(Cn(u), "i");
    a.visible = p.test(String(l.value)) || e.created;
  };
  return H(() => l.value, () => {
    !e.created && !s.props.remote && s.setSelected();
  }), H(() => e.value, (u, p) => {
    const { remote: w, valueKey: T } = s.props;
    if ((w ? u !== p : !ie(u, p)) && (s.onOptionDestroy(p, m.proxy), s.onOptionCreate(m.proxy)), !e.created && !w) {
      if (T && P(u) && P(p) && u[T] === p[T])
        return;
      s.setSelected();
    }
  }), H(() => r.disabled, () => {
    a.groupDisabled = r.disabled;
  }, { immediate: true }), { select: s, currentLabel: l, currentValue: h, itemSelected: o, isDisabled: y, hoverItem: d, updateOption: i };
}
const In = de({ name: Re, componentName: Re, props: wn, setup(e) {
  const a = re("select"), s = dt(), r = f(() => [a.be("dropdown", "item"), a.is("disabled", Te(h)), a.is("selected", Te(l)), a.is("hovering", Te(i))]), o = ue({ index: -1, groupDisabled: false, visible: true, hover: false }), { currentLabel: b, itemSelected: l, isDisabled: h, select: y, hoverItem: m, updateOption: v } = En(e, o), { visible: d, hover: i } = $e(o), u = Ce().proxy;
  y.onOptionCreate(u), gl(() => {
    const w = u.value, { selected: T } = y.states, R = T.some((j) => j.value === u.value);
    K(() => {
      y.states.cachedOptions.get(w) === u && !R && y.states.cachedOptions.delete(w);
    }), y.onOptionDestroy(w, u);
  });
  function p() {
    h.value || y.handleOptionSelect(u);
  }
  return { ns: a, id: s, containerKls: r, currentLabel: b, itemSelected: l, isDisabled: h, select: y, visible: d, hover: i, states: o, hoverItem: m, updateOption: v, selectOptionClick: p };
} });
function Vn(e, a) {
  return oe((S(), E("li", { id: e.id, class: g(e.containerKls), role: "option", "aria-disabled": e.isDisabled || void 0, "aria-selected": e.itemSelected, onMousemove: e.hoverItem, onClick: N(e.selectOptionClick, ["stop"]) }, [M(e.$slots, "default", {}, () => [V("span", null, B(e.currentLabel), 1)])], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [[De, e.visible]]);
}
var Ne = Oe(In, [["render", Vn], ["__file", "option.vue"]]);
const Tn = de({ name: "ElSelectDropdown", componentName: "ElSelectDropdown", setup() {
  const e = Se(we), a = re("select"), s = f(() => e.props.popperClass), r = f(() => e.props.multiple), o = f(() => e.props.fitInputWidth), b = I("");
  function l() {
    var h;
    b.value = `${(h = e.selectRef) == null ? void 0 : h.offsetWidth}px`;
  }
  return ke(() => {
    l(), X(e.selectRef, l);
  }), { ns: a, minWidth: b, popperClass: s, isMultiple: r, isFitInputWidth: o };
} });
function Mn(e, a, s, r, o, b) {
  return S(), E("div", { class: g([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]), style: ye({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth }) }, [e.$slots.header ? (S(), E("div", { key: 0, class: g(e.ns.be("dropdown", "header")) }, [M(e.$slots, "header")], 2)) : D("v-if", true), M(e.$slots, "default"), e.$slots.footer ? (S(), E("div", { key: 1, class: g(e.ns.be("dropdown", "footer")) }, [M(e.$slots, "footer")], 2)) : D("v-if", true)], 6);
}
var Rn = Oe(Tn, [["render", Mn], ["__file", "select-dropdown.vue"]]);
const $n = (e, a) => {
  const { t: s } = yl(), r = dt(), o = re("select"), b = re("input"), l = ue({ inputValue: "", options: /* @__PURE__ */ new Map(), cachedOptions: /* @__PURE__ */ new Map(), optionValues: [], selected: [], selectionWidth: 0, collapseItemWidth: 0, selectedLabel: "", hoveringIndex: -1, previousQuery: null, inputHovering: false, menuVisibleOnFocus: false, isBeforeHide: false }), h = I(), y = I(), m = I(), v = I(), d = I(), i = I(), u = I(), p = I(), w = I(), T = I(), R = I(), { isComposing: j, handleCompositionStart: U, handleCompositionUpdate: gt, handleCompositionEnd: yt } = Sl({ afterComposition: (t) => Ue(t) }), { wrapperRef: Be, isFocused: Pe, handleBlur: St } = Cl(d, { beforeFocus() {
    return x.value;
  }, afterFocus() {
    e.automaticDropdown && !C.value && (C.value = true, l.menuVisibleOnFocus = true);
  }, beforeBlur(t) {
    var n, c;
    return ((n = m.value) == null ? void 0 : n.isFocusInsideContent(t)) || ((c = v.value) == null ? void 0 : c.isFocusInsideContent(t));
  }, afterBlur() {
    var t;
    C.value = false, l.menuVisibleOnFocus = false, e.validateEvent && ((t = A == null ? void 0 : A.validate) == null || t.call(A, "blur").catch((n) => je()));
  } }), C = I(false), _ = I(), { form: ce, formItem: A } = Ol(), { inputId: Ct } = wl(e, { formItemContext: A }), { valueOnClear: Ot, isEmptyValue: wt } = El(e), x = f(() => e.disabled || (ce == null ? void 0 : ce.disabled)), Ee = f(() => F(e.modelValue) ? e.modelValue.length > 0 : !wt(e.modelValue)), Et = f(() => {
    var t;
    return (t = ce == null ? void 0 : ce.statusIcon) != null ? t : false;
  }), It = f(() => e.clearable && !x.value && l.inputHovering && Ee.value), Fe = f(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), Vt = f(() => o.is("reverse", !!(Fe.value && C.value))), Ie = f(() => (A == null ? void 0 : A.validateState) || ""), Tt = f(() => Ie.value && Il[Ie.value]), Mt = f(() => e.remote ? 300 : 0), Rt = f(() => e.remote && !l.inputValue && l.options.size === 0), $t = f(() => e.loading ? e.loadingText || s("el.select.loading") : e.filterable && l.inputValue && l.options.size > 0 && ee.value === 0 ? e.noMatchText || s("el.select.noMatch") : l.options.size === 0 ? e.noDataText || s("el.select.noData") : null), ee = f(() => $.value.filter((t) => t.visible).length), $ = f(() => {
    const t = Array.from(l.options.values()), n = [];
    return l.optionValues.forEach((c) => {
      const O = t.findIndex((k) => k.value === c);
      O > -1 && n.push(t[O]);
    }), n.length >= t.length ? n : t;
  }), Dt = f(() => Array.from(l.cachedOptions.values())), kt = f(() => {
    const t = $.value.filter((n) => !n.created).some((n) => n.currentLabel === l.inputValue);
    return e.filterable && e.allowCreate && l.inputValue !== "" && !t;
  }), Ae = () => {
    e.filterable && se(e.filterMethod) || e.filterable && e.remote && se(e.remoteMethod) || $.value.forEach((t) => {
      var n;
      (n = t.updateOption) == null || n.call(t, l.inputValue);
    });
  }, We = Vl(), Lt = f(() => ["small"].includes(We.value) ? "small" : "default"), Nt = f({ get() {
    return C.value && !Rt.value;
  }, set(t) {
    C.value = t;
  } }), Bt = f(() => {
    if (e.multiple && !ge(e.modelValue))
      return G(e.modelValue).length === 0 && !l.inputValue;
    const t = F(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || ge(t) ? !l.inputValue : true;
  }), Pt = f(() => {
    var t;
    const n = (t = e.placeholder) != null ? t : s("el.select.placeholder");
    return e.multiple || !Ee.value ? n : l.selectedLabel;
  }), Ft = f(() => _e ? null : "mouseenter");
  H(() => e.modelValue, (t, n) => {
    e.multiple && e.filterable && !e.reserveKeyword && (l.inputValue = "", fe("")), pe(), !ie(t, n) && e.validateEvent && (A == null ? void 0 : A.validate("change").catch((c) => je()));
  }, { flush: "post", deep: true }), H(() => C.value, (t) => {
    t ? fe(l.inputValue) : (l.inputValue = "", l.previousQuery = null, l.isBeforeHide = true), a("visible-change", t);
  }), H(() => l.options.entries(), () => {
    Tl && (pe(), e.defaultFirstOption && (e.filterable || e.remote) && ee.value && ze());
  }, { flush: "post" }), H([() => l.hoveringIndex, $], ([t]) => {
    Ml(t) && t > -1 ? _.value = $.value[t] || {} : _.value = {}, $.value.forEach((n) => {
      n.hover = _.value === n;
    });
  }), Rl(() => {
    l.isBeforeHide || Ae();
  });
  const fe = (t) => {
    l.previousQuery === t || j.value || (l.previousQuery = t, e.filterable && se(e.filterMethod) ? e.filterMethod(t) : e.filterable && e.remote && se(e.remoteMethod) && e.remoteMethod(t), e.defaultFirstOption && (e.filterable || e.remote) && ee.value ? K(ze) : K(At));
  }, ze = () => {
    const t = $.value.filter((k) => k.visible && !k.disabled && !k.states.groupDisabled), n = t.find((k) => k.created), c = t[0], O = $.value.map((k) => k.value);
    l.hoveringIndex = Je(O, n || c);
  }, pe = () => {
    if (e.multiple)
      l.selectedLabel = "";
    else {
      const n = F(e.modelValue) ? e.modelValue[0] : e.modelValue, c = Ke(n);
      l.selectedLabel = c.currentLabel, l.selected = [c];
      return;
    }
    const t = [];
    ge(e.modelValue) || G(e.modelValue).forEach((n) => {
      t.push(Ke(n));
    }), l.selected = t;
  }, Ke = (t) => {
    let n;
    const c = $l(t);
    for (let Z = l.cachedOptions.size - 1; Z >= 0; Z--) {
      const W = Dt.value[Z];
      if (c ? Y(W.value, e.valueKey) === Y(t, e.valueKey) : W.value === t) {
        n = { value: t, currentLabel: W.currentLabel, get isDisabled() {
          return W.isDisabled;
        } };
        break;
      }
    }
    if (n)
      return n;
    const O = c ? t.label : t ?? "";
    return { value: t, currentLabel: O };
  }, At = () => {
    l.hoveringIndex = $.value.findIndex((t) => l.selected.some((n) => he(n) === he(t)));
  }, Wt = () => {
    l.selectionWidth = Number.parseFloat(window.getComputedStyle(y.value).width);
  }, zt = () => {
    l.collapseItemWidth = T.value.getBoundingClientRect().width;
  }, Ve = () => {
    var t, n;
    (n = (t = m.value) == null ? void 0 : t.updatePopper) == null || n.call(t);
  }, Ge = () => {
    var t, n;
    (n = (t = v.value) == null ? void 0 : t.updatePopper) == null || n.call(t);
  }, He = () => {
    l.inputValue.length > 0 && !C.value && (C.value = true), fe(l.inputValue);
  }, Ue = (t) => {
    if (l.inputValue = t.target.value, e.remote)
      qe();
    else
      return He();
  }, qe = en(() => {
    He();
  }, Mt.value), te = (t) => {
    ie(e.modelValue, t) || a(Le, t);
  }, Kt = (t) => Sn(t, (n) => {
    const c = l.cachedOptions.get(n);
    return c && !c.disabled && !c.states.groupDisabled;
  }), Gt = (t) => {
    if (e.multiple && t.code !== Dl.delete && t.target.value.length <= 0) {
      const n = G(e.modelValue).slice(), c = Kt(n);
      if (c < 0)
        return;
      const O = n[c];
      n.splice(c, 1), a(J, n), te(n), a("remove-tag", O);
    }
  }, Ht = (t, n) => {
    const c = l.selected.indexOf(n);
    if (c > -1 && !x.value) {
      const O = G(e.modelValue).slice();
      O.splice(c, 1), a(J, O), te(O), a("remove-tag", n.value);
    }
    t.stopPropagation(), be();
  }, Qe = (t) => {
    t.stopPropagation();
    const n = e.multiple ? [] : Ot.value;
    if (e.multiple)
      for (const c of l.selected)
        c.isDisabled && n.push(c.value);
    a(J, n), te(n), l.hoveringIndex = -1, C.value = false, a("clear"), be();
  }, Xe = (t) => {
    var n;
    if (e.multiple) {
      const c = G((n = e.modelValue) != null ? n : []).slice(), O = Je(c, t);
      O > -1 ? c.splice(O, 1) : (e.multipleLimit <= 0 || c.length < e.multipleLimit) && c.push(t.value), a(J, c), te(c), t.created && fe(""), e.filterable && !e.reserveKeyword && (l.inputValue = "");
    } else
      a(J, t.value), te(t.value), C.value = false;
    be(), !C.value && K(() => {
      ve(t);
    });
  }, Je = (t, n) => ge(n) ? -1 : P(n.value) ? t.findIndex((c) => ie(Y(c, e.valueKey), he(n))) : t.indexOf(n.value), ve = (t) => {
    var n, c, O, k, Z;
    const W = F(t) ? t[0] : t;
    let me = null;
    if (W == null ? void 0 : W.value) {
      const le = $.value.filter((ol) => ol.value === W.value);
      le.length > 0 && (me = le[0].$el);
    }
    if (m.value && me) {
      const le = (k = (O = (c = (n = m.value) == null ? void 0 : n.popperRef) == null ? void 0 : c.contentRef) == null ? void 0 : O.querySelector) == null ? void 0 : k.call(O, `.${o.be("dropdown", "wrap")}`);
      le && kl(le, me);
    }
    (Z = R.value) == null || Z.handleScroll();
  }, Ut = (t) => {
    l.options.set(t.value, t), l.cachedOptions.set(t.value, t);
  }, qt = (t, n) => {
    l.options.get(t) === n && l.options.delete(t);
  }, Qt = f(() => {
    var t, n;
    return (n = (t = m.value) == null ? void 0 : t.popperRef) == null ? void 0 : n.contentRef;
  }), Xt = () => {
    l.isBeforeHide = false, K(() => {
      var t;
      (t = R.value) == null || t.update(), ve(l.selected);
    });
  }, be = () => {
    var t;
    (t = d.value) == null || t.focus();
  }, Jt = () => {
    var t;
    if (C.value) {
      C.value = false, K(() => {
        var n;
        return (n = d.value) == null ? void 0 : n.blur();
      });
      return;
    }
    (t = d.value) == null || t.blur();
  }, Yt = (t) => {
    Qe(t);
  }, Zt = (t) => {
    if (C.value = false, Pe.value) {
      const n = new FocusEvent("focus", t);
      K(() => St(n));
    }
  }, jt = () => {
    l.inputValue.length > 0 ? l.inputValue = "" : C.value = false;
  }, Ye = () => {
    x.value || (_e && (l.inputHovering = true), l.menuVisibleOnFocus ? l.menuVisibleOnFocus = false : C.value = !C.value);
  }, _t = () => {
    if (!C.value)
      Ye();
    else {
      const t = $.value[l.hoveringIndex];
      t && !t.isDisabled && Xe(t);
    }
  }, he = (t) => P(t.value) ? Y(t.value, e.valueKey) : t.value, xt = f(() => $.value.filter((t) => t.visible).every((t) => t.isDisabled)), el = f(() => e.multiple ? e.collapseTags ? l.selected.slice(0, e.maxCollapseTags) : l.selected : []), tl = f(() => e.multiple ? e.collapseTags ? l.selected.slice(e.maxCollapseTags) : [] : []), Ze = (t) => {
    if (!C.value) {
      C.value = true;
      return;
    }
    if (!(l.options.size === 0 || ee.value === 0 || j.value) && !xt.value) {
      t === "next" ? (l.hoveringIndex++, l.hoveringIndex === l.options.size && (l.hoveringIndex = 0)) : t === "prev" && (l.hoveringIndex--, l.hoveringIndex < 0 && (l.hoveringIndex = l.options.size - 1));
      const n = $.value[l.hoveringIndex];
      (n.isDisabled || !n.visible) && Ze(t), K(() => ve(_.value));
    }
  }, ll = () => {
    if (!y.value)
      return 0;
    const t = window.getComputedStyle(y.value);
    return Number.parseFloat(t.gap || "6px");
  }, nl = f(() => {
    const t = ll();
    return { maxWidth: `${T.value && e.maxCollapseTags === 1 ? l.selectionWidth - l.collapseItemWidth - t : l.selectionWidth}px` };
  }), al = f(() => ({ maxWidth: `${l.selectionWidth}px` })), sl = (t) => {
    a("popup-scroll", t);
  };
  return X(y, Wt), X(p, Ve), X(Be, Ve), X(w, Ge), X(T, zt), ke(() => {
    pe();
  }), { inputId: Ct, contentId: r, nsSelect: o, nsInput: b, states: l, isFocused: Pe, expanded: C, optionsArray: $, hoverOption: _, selectSize: We, filteredOptionsCount: ee, updateTooltip: Ve, updateTagTooltip: Ge, debouncedOnInputChange: qe, onInput: Ue, deletePrevTag: Gt, deleteTag: Ht, deleteSelected: Qe, handleOptionSelect: Xe, scrollToOption: ve, hasModelValue: Ee, shouldShowPlaceholder: Bt, currentPlaceholder: Pt, mouseEnterEventName: Ft, needStatusIcon: Et, showClose: It, iconComponent: Fe, iconReverse: Vt, validateState: Ie, validateIcon: Tt, showNewOption: kt, updateOptions: Ae, collapseTagSize: Lt, setSelected: pe, selectDisabled: x, emptyText: $t, handleCompositionStart: U, handleCompositionUpdate: gt, handleCompositionEnd: yt, onOptionCreate: Ut, onOptionDestroy: qt, handleMenuEnter: Xt, focus: be, blur: Jt, handleClearClick: Yt, handleClickOutside: Zt, handleEsc: jt, toggleMenu: Ye, selectOption: _t, getValueKey: he, navigateOptions: Ze, dropdownMenuVisible: Nt, showTagList: el, collapseTagList: tl, popupScroll: sl, tagStyle: nl, collapseTagStyle: al, popperRef: Qt, inputRef: d, tooltipRef: m, tagTooltipRef: v, prefixRef: i, suffixRef: u, selectRef: h, wrapperRef: Be, selectionRef: y, scrollbarRef: R, menuRef: p, tagMenuRef: w, collapseItemRef: T };
};
var Dn = de({ name: "ElOptions", setup(e, { slots: a }) {
  const s = Se(we);
  let r = [];
  return () => {
    var o, b;
    const l = (o = a.default) == null ? void 0 : o.call(a), h = [];
    function y(m) {
      F(m) && m.forEach((v) => {
        var d, i, u, p;
        const w = (d = (v == null ? void 0 : v.type) || {}) == null ? void 0 : d.name;
        w === "ElOptionGroup" ? y(!Ll(v.children) && !F(v.children) && se((i = v.children) == null ? void 0 : i.default) ? (u = v.children) == null ? void 0 : u.default() : v.children) : w === "ElOption" ? h.push((p = v.props) == null ? void 0 : p.value) : F(v.children) && y(v.children);
      });
    }
    return l.length && y((b = l[0]) == null ? void 0 : b.children), ie(h, r) || (r = h, s && (s.states.optionValues = h)), l;
  };
} });
const kn = ut({ name: String, id: String, modelValue: { type: ne([Array, String, Number, Boolean, Object]), default: void 0 }, autocomplete: { type: String, default: "off" }, automaticDropdown: Boolean, size: Nl, effect: { type: ne(String), default: "light" }, disabled: Boolean, clearable: Boolean, filterable: Boolean, allowCreate: Boolean, loading: Boolean, popperClass: { type: String, default: "" }, popperOptions: { type: ne(Object), default: () => ({}) }, remote: Boolean, loadingText: String, noMatchText: String, noDataText: String, remoteMethod: Function, filterMethod: Function, multiple: Boolean, multipleLimit: { type: Number, default: 0 }, placeholder: { type: String }, defaultFirstOption: Boolean, reserveKeyword: { type: Boolean, default: true }, valueKey: { type: String, default: "value" }, collapseTags: Boolean, collapseTagsTooltip: Boolean, maxCollapseTags: { type: Number, default: 1 }, teleported: xe.teleported, persistent: { type: Boolean, default: true }, clearIcon: { type: et, default: Bl }, fitInputWidth: Boolean, suffixIcon: { type: et, default: Pl }, tagType: { ...at.type, default: "info" }, tagEffect: { ...at.effect, default: "light" }, validateEvent: { type: Boolean, default: true }, remoteShowSuffix: Boolean, showArrow: { type: Boolean, default: true }, offset: { type: Number, default: 12 }, placement: { type: ne(String), values: Fl, default: "bottom-start" }, fallbackPlacements: { type: ne(Array), default: ["bottom-start", "top-start", "right", "left"] }, tabindex: { type: [String, Number], default: 0 }, appendTo: xe.appendTo, ...Al, ...Wl(["ariaLabel"]) });
J + "", Le + "", Zl.scroll;
const ot = "ElSelect", Ln = de({ name: ot, componentName: ot, components: { ElSelectMenu: Rn, ElOption: Ne, ElOptions: Dn, ElTag: _l, ElScrollbar: jl, ElTooltip: zl, ElIcon: Kl }, directives: { ClickOutside: Gl }, props: kn, emits: [J, Le, "remove-tag", "clear", "visible-change", "focus", "blur", "popup-scroll"], setup(e, { emit: a, slots: s }) {
  const r = Ce();
  r.appContext.config.warnHandler = (...i) => {
    !i[0] || i[0].includes('Slot "default" invoked outside of the render function') || console.warn(...i);
  };
  const o = f(() => {
    const { modelValue: i, multiple: u } = e, p = u ? [] : void 0;
    return F(i) ? u ? i : p : u ? p : i;
  }), b = ue({ ...$e(e), modelValue: o }), l = $n(b, a), { calculatorRef: h, inputStyle: y } = On(), m = (i) => i.reduce((u, p) => (u.push(p), p.children && p.children.length > 0 && u.push(...m(p.children)), u), []), v = (i) => {
    Ql(i || []).forEach((p) => {
      var w;
      if (P(p) && (p.type.name === "ElOption" || p.type.name === "ElTree")) {
        const T = p.type.name;
        if (T === "ElTree") {
          const R = ((w = p.props) == null ? void 0 : w.data) || [];
          m(R).forEach((U) => {
            U.currentLabel = U.label || (P(U.value) ? "" : U.value), l.onOptionCreate(U);
          });
        } else if (T === "ElOption") {
          const R = { ...p.props };
          R.currentLabel = R.label || (P(R.value) ? "" : R.value), l.onOptionCreate(R);
        }
      }
    });
  };
  H(() => {
    var i;
    return (i = s.default) == null ? void 0 : i.call(s);
  }, (i) => {
    e.persistent || v(i);
  }, { immediate: true }), ct(we, ue({ props: b, states: l.states, selectRef: l.selectRef, optionsArray: l.optionsArray, setSelected: l.setSelected, handleOptionSelect: l.handleOptionSelect, onOptionCreate: l.onOptionCreate, onOptionDestroy: l.onOptionDestroy }));
  const d = f(() => e.multiple ? l.states.selected.map((i) => i.currentLabel) : l.states.selectedLabel);
  return { ...l, modelValue: o, selectedLabel: d, calculatorRef: h, inputStyle: y };
} });
function Nn(e, a) {
  const s = q("el-tag"), r = q("el-tooltip"), o = q("el-icon"), b = q("el-option"), l = q("el-options"), h = q("el-scrollbar"), y = q("el-select-menu"), m = Hl("click-outside");
  return oe((S(), E("div", { ref: "selectRef", class: g([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]), [ql(e.mouseEnterEventName)]: (v) => e.states.inputHovering = true, onMouseleave: (v) => e.states.inputHovering = false }, [Q(r, { ref: "tooltipRef", visible: e.dropdownMenuVisible, placement: e.placement, teleported: e.teleported, "popper-class": [e.nsSelect.e("popper"), e.popperClass], "popper-options": e.popperOptions, "fallback-placements": e.fallbackPlacements, effect: e.effect, pure: "", trigger: "click", transition: `${e.nsSelect.namespace.value}-zoom-in-top`, "stop-popper-mouse-event": false, "gpu-acceleration": false, persistent: e.persistent, "append-to": e.appendTo, "show-arrow": e.showArrow, offset: e.offset, onBeforeShow: e.handleMenuEnter, onHide: (v) => e.states.isBeforeHide = false }, { default: L(() => {
    var v;
    return [V("div", { ref: "wrapperRef", class: g([e.nsSelect.e("wrapper"), e.nsSelect.is("focused", e.isFocused), e.nsSelect.is("hovering", e.states.inputHovering), e.nsSelect.is("filterable", e.filterable), e.nsSelect.is("disabled", e.selectDisabled)]), onClick: N(e.toggleMenu, ["prevent"]) }, [e.$slots.prefix ? (S(), E("div", { key: 0, ref: "prefixRef", class: g(e.nsSelect.e("prefix")) }, [M(e.$slots, "prefix")], 2)) : D("v-if", true), V("div", { ref: "selectionRef", class: g([e.nsSelect.e("selection"), e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)]) }, [e.multiple ? M(e.$slots, "tag", { key: 0 }, () => [(S(true), E(tt, null, lt(e.showTagList, (d) => (S(), E("div", { key: e.getValueKey(d), class: g(e.nsSelect.e("selected-item")) }, [Q(s, { closable: !e.selectDisabled && !d.isDisabled, size: e.collapseTagSize, type: e.tagType, effect: e.tagEffect, "disable-transitions": "", style: ye(e.tagStyle), onClose: (i) => e.deleteTag(i, d) }, { default: L(() => [V("span", { class: g(e.nsSelect.e("tags-text")) }, [M(e.$slots, "label", { label: d.currentLabel, value: d.value }, () => [nt(B(d.currentLabel), 1)])], 2)]), _: 2 }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])], 2))), 128)), e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (S(), z(r, { key: 0, ref: "tagTooltipRef", disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip, "fallback-placements": ["bottom", "top", "right", "left"], effect: e.effect, placement: "bottom", teleported: e.teleported }, { default: L(() => [V("div", { ref: "collapseItemRef", class: g(e.nsSelect.e("selected-item")) }, [Q(s, { closable: false, size: e.collapseTagSize, type: e.tagType, effect: e.tagEffect, "disable-transitions": "", style: ye(e.collapseTagStyle) }, { default: L(() => [V("span", { class: g(e.nsSelect.e("tags-text")) }, " + " + B(e.states.selected.length - e.maxCollapseTags), 3)]), _: 1 }, 8, ["size", "type", "effect", "style"])], 2)]), content: L(() => [V("div", { ref: "tagMenuRef", class: g(e.nsSelect.e("selection")) }, [(S(true), E(tt, null, lt(e.collapseTagList, (d) => (S(), E("div", { key: e.getValueKey(d), class: g(e.nsSelect.e("selected-item")) }, [Q(s, { class: "in-tooltip", closable: !e.selectDisabled && !d.isDisabled, size: e.collapseTagSize, type: e.tagType, effect: e.tagEffect, "disable-transitions": "", onClose: (i) => e.deleteTag(i, d) }, { default: L(() => [V("span", { class: g(e.nsSelect.e("tags-text")) }, [M(e.$slots, "label", { label: d.currentLabel, value: d.value }, () => [nt(B(d.currentLabel), 1)])], 2)]), _: 2 }, 1032, ["closable", "size", "type", "effect", "onClose"])], 2))), 128))], 2)]), _: 3 }, 8, ["disabled", "effect", "teleported"])) : D("v-if", true)]) : D("v-if", true), V("div", { class: g([e.nsSelect.e("selected-item"), e.nsSelect.e("input-wrapper"), e.nsSelect.is("hidden", !e.filterable)]) }, [oe(V("input", { id: e.inputId, ref: "inputRef", "onUpdate:modelValue": (d) => e.states.inputValue = d, type: "text", name: e.name, class: g([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]), disabled: e.selectDisabled, autocomplete: e.autocomplete, style: ye(e.inputStyle), tabindex: e.tabindex, role: "combobox", readonly: !e.filterable, spellcheck: "false", "aria-activedescendant": ((v = e.hoverOption) == null ? void 0 : v.id) || "", "aria-controls": e.contentId, "aria-expanded": e.dropdownMenuVisible, "aria-label": e.ariaLabel, "aria-autocomplete": "none", "aria-haspopup": "listbox", onKeydown: [ae(N((d) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]), ae(N((d) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]), ae(N(e.handleEsc, ["stop", "prevent"]), ["esc"]), ae(N(e.selectOption, ["stop", "prevent"]), ["enter"]), ae(N(e.deletePrevTag, ["stop"]), ["delete"])], onCompositionstart: e.handleCompositionStart, onCompositionupdate: e.handleCompositionUpdate, onCompositionend: e.handleCompositionEnd, onInput: e.onInput, onClick: N(e.toggleMenu, ["stop"]) }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [[Ul, e.states.inputValue]]), e.filterable ? (S(), E("span", { key: 0, ref: "calculatorRef", "aria-hidden": "true", class: g(e.nsSelect.e("input-calculator")), textContent: B(e.states.inputValue) }, null, 10, ["textContent"])) : D("v-if", true)], 2), e.shouldShowPlaceholder ? (S(), E("div", { key: 1, class: g([e.nsSelect.e("selected-item"), e.nsSelect.e("placeholder"), e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)]) }, [e.hasModelValue ? M(e.$slots, "label", { key: 0, label: e.currentPlaceholder, value: e.modelValue }, () => [V("span", null, B(e.currentPlaceholder), 1)]) : (S(), E("span", { key: 1 }, B(e.currentPlaceholder), 1))], 2)) : D("v-if", true)], 2), V("div", { ref: "suffixRef", class: g(e.nsSelect.e("suffix")) }, [e.iconComponent && !e.showClose ? (S(), z(o, { key: 0, class: g([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse]) }, { default: L(() => [(S(), z(Me(e.iconComponent)))]), _: 1 }, 8, ["class"])) : D("v-if", true), e.showClose && e.clearIcon ? (S(), z(o, { key: 1, class: g([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.nsSelect.e("clear")]), onClick: e.handleClearClick }, { default: L(() => [(S(), z(Me(e.clearIcon)))]), _: 1 }, 8, ["class", "onClick"])) : D("v-if", true), e.validateState && e.validateIcon && e.needStatusIcon ? (S(), z(o, { key: 2, class: g([e.nsInput.e("icon"), e.nsInput.e("validateIcon"), e.nsInput.is("loading", e.validateState === "validating")]) }, { default: L(() => [(S(), z(Me(e.validateIcon)))]), _: 1 }, 8, ["class"])) : D("v-if", true)], 2)], 10, ["onClick"])];
  }), content: L(() => [Q(y, { ref: "menuRef" }, { default: L(() => [e.$slots.header ? (S(), E("div", { key: 0, class: g(e.nsSelect.be("dropdown", "header")), onClick: N(() => {
  }, ["stop"]) }, [M(e.$slots, "header")], 10, ["onClick"])) : D("v-if", true), oe(Q(h, { id: e.contentId, ref: "scrollbarRef", tag: "ul", "wrap-class": e.nsSelect.be("dropdown", "wrap"), "view-class": e.nsSelect.be("dropdown", "list"), class: g([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]), role: "listbox", "aria-label": e.ariaLabel, "aria-orientation": "vertical", onScroll: e.popupScroll }, { default: L(() => [e.showNewOption ? (S(), z(b, { key: 0, value: e.states.inputValue, created: true }, null, 8, ["value"])) : D("v-if", true), Q(l, null, { default: L(() => [M(e.$slots, "default")]), _: 3 })]), _: 3 }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [[De, e.states.options.size > 0 && !e.loading]]), e.$slots.loading && e.loading ? (S(), E("div", { key: 1, class: g(e.nsSelect.be("dropdown", "loading")) }, [M(e.$slots, "loading")], 2)) : e.loading || e.filteredOptionsCount === 0 ? (S(), E("div", { key: 2, class: g(e.nsSelect.be("dropdown", "empty")) }, [M(e.$slots, "empty", {}, () => [V("span", null, B(e.emptyText), 1)])], 2)) : D("v-if", true), e.$slots.footer ? (S(), E("div", { key: 3, class: g(e.nsSelect.be("dropdown", "footer")), onClick: N(() => {
  }, ["stop"]) }, [M(e.$slots, "footer")], 10, ["onClick"])) : D("v-if", true)]), _: 3 }, 512)]), _: 3 }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "transition", "persistent", "append-to", "show-arrow", "offset", "onBeforeShow", "onHide"])], 16, ["onMouseleave"])), [[m, e.handleClickOutside, e.popperRef]]);
}
var Bn = Oe(Ln, [["render", Nn], ["__file", "select.vue"]]);
const Pn = de({ name: "ElOptionGroup", componentName: "ElOptionGroup", props: { label: String, disabled: Boolean }, setup(e) {
  const a = re("select"), s = I(), r = Ce(), o = I([]);
  ct(ht, ue({ ...$e(e) }));
  const b = f(() => o.value.some((m) => m.visible === true)), l = (m) => {
    var v;
    return m.type.name === "ElOption" && !!((v = m.component) != null && v.proxy);
  }, h = (m) => {
    const v = G(m), d = [];
    return v.forEach((i) => {
      var u;
      Jl(i) && (l(i) ? d.push(i.component.proxy) : F(i.children) && i.children.length ? d.push(...h(i.children)) : (u = i.component) != null && u.subTree && d.push(...h(i.component.subTree)));
    }), d;
  }, y = () => {
    o.value = h(r.subTree);
  };
  return ke(() => {
    y();
  }), Xl(s, y, { attributes: true, subtree: true, childList: true }), { groupRef: s, visible: b, ns: a };
} });
function Fn(e, a, s, r, o, b) {
  return oe((S(), E("ul", { ref: "groupRef", class: g(e.ns.be("group", "wrap")) }, [V("li", { class: g(e.ns.be("group", "title")) }, B(e.label), 3), V("li", null, [V("ul", { class: g(e.ns.b("group")) }, [M(e.$slots, "default")], 2)])], 2)), [[De, e.visible]]);
}
var mt = Oe(Pn, [["render", Fn], ["__file", "option-group.vue"]]);
const Un = Yl(Bn, { Option: Ne, OptionGroup: mt }), qn = ft(Ne), Qn = ft(mt);
export {
  qn as E,
  Un as a,
  Qn as b,
  Hn as c,
  mn as d,
  we as s,
  On as u
};
