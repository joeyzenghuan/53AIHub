import { cv as nl, a2 as al, d7 as sl, d8 as lt, d9 as nt, da as H, db as ol, dc as il, dd as rl, cs as ul, de as dl, Q as cl, r as E, al as u, c3 as G, ak as ye, cE as A, br as Y, b3 as Ve, df as pl, aG as U, aC as Se, u as ie, au as se, bu as at, z as Ie, ae as oe, bm as Te, bg as fl, W as F, g as ne, v as $e, b as y, c as I, q as $, d as T, t as N, n as h, am as L, o as Re, e as R, aN as ge, av as vl, cb as ml, ca as bl, aX as hl, aZ as gl, dg as yl, b_ as W, cd as Sl, aY as Ol, b9 as be, dh as Ye, a$ as Cl, a3 as wl, aU as Il, w as El, m as le, cX as Vl, bi as Tl, aS as X, di as $l, aV as st, aM as Rl, ap as Ml, b7 as kl, aH as he, bj as Dl, aQ as Ze, aK as Ll, I as Nl, dj as Bl, dk as Pl, aR as Fl, ab as Al, y as Wl, cz as zl, an as ot, cC as z, af as Kl, f as K, i as D, F as Je, G as je, H as _e, h as P, b0 as te, ce as Gl, aO as Ee, dl as Hl, dm as Ul, aD as ql, c7 as it } from "./index-6feda8be.js";
import { E as Ql } from "./el-scrollbar-1c0147c5.js";
import { t as xe, E as Xl } from "./el-tag-41766c4c.js";
import { b as rt, i as ae } from "./isEqual-8788d17b.js";
import { t as Yl, d as Zl } from "./debounce-bf10b7f9.js";
var et = 1 / 0, Jl = 17976931348623157e292;
function jl(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Yl(e), e === et || e === -et) {
    var a = e < 0 ? -1 : 1;
    return a * Jl;
  }
  return e === e ? e : 0;
}
function _l(e) {
  var a = jl(e), s = a % 1;
  return a === a ? s ? a - s : a : 0;
}
function xl(e, a, s, i) {
  for (var o = e.length, v = s + (i ? 1 : -1); i ? v-- : ++v < o; )
    if (a(e[v], v, e))
      return v;
  return -1;
}
var en = 1, tn = 2;
function ln(e, a, s, i) {
  var o = s.length, v = o, l = !i;
  if (e == null)
    return !v;
  for (e = Object(e); o--; ) {
    var c = s[o];
    if (l && c[2] ? c[1] !== e[c[0]] : !(c[0] in e))
      return false;
  }
  for (; ++o < v; ) {
    c = s[o];
    var d = c[0], f = e[d], m = c[1];
    if (l && c[2]) {
      if (f === void 0 && !(d in e))
        return false;
    } else {
      var S = new nl();
      if (i)
        var C = i(f, m, d, e, a, S);
      if (!(C === void 0 ? rt(m, f, en | tn, i, S) : C))
        return false;
    }
  }
  return true;
}
function ut(e) {
  return e === e && !al(e);
}
function nn(e) {
  for (var a = sl(e), s = a.length; s--; ) {
    var i = a[s], o = e[i];
    a[s] = [i, o, ut(o)];
  }
  return a;
}
function dt(e, a) {
  return function(s) {
    return s == null ? false : s[e] === a && (a !== void 0 || e in Object(s));
  };
}
function an(e) {
  var a = nn(e);
  return a.length == 1 && a[0][2] ? dt(a[0][0], a[0][1]) : function(s) {
    return s === e || ln(s, e, a);
  };
}
var sn = 1, on = 2;
function rn(e, a) {
  return lt(e) && ut(a) ? dt(nt(e), a) : function(s) {
    var i = H(s, e);
    return i === void 0 && i === a ? ol(s, e) : rt(a, i, sn | on);
  };
}
function un(e) {
  return function(a) {
    return a == null ? void 0 : a[e];
  };
}
function dn(e) {
  return function(a) {
    return il(a, e);
  };
}
function cn(e) {
  return lt(e) ? un(nt(e)) : dn(e);
}
function pn(e) {
  return typeof e == "function" ? e : e == null ? rl : typeof e == "object" ? ul(e) ? rn(e[0], e[1]) : an(e) : cn(e);
}
var fn = Math.max, vn = Math.min;
function mn(e, a, s) {
  var i = e == null ? 0 : e.length;
  if (!i)
    return -1;
  var o = i - 1;
  return s !== void 0 && (o = _l(s), o = s < 0 ? fn(i + o, 0) : vn(o, i - 1)), xl(e, pn(a), o, true);
}
const bn = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Fn = (e) => dl(e);
function hn() {
  const e = cl(), a = E(0), s = 11, i = u(() => ({ minWidth: `${Math.max(a.value, s)}px` }));
  return G(e, () => {
    var v, l;
    a.value = (l = (v = e.value) == null ? void 0 : v.getBoundingClientRect().width) != null ? l : 0;
  }), { calculatorRef: e, calculatorWidth: a, inputStyle: i };
}
const ct = Symbol("ElSelectGroup"), Oe = Symbol("ElSelect");
function gn(e, a) {
  const s = ye(Oe), i = ye(ct, { disabled: false }), o = u(() => m(A(s.props.modelValue), e.value)), v = u(() => {
    var b;
    if (s.props.multiple) {
      const g = A((b = s.props.modelValue) != null ? b : []);
      return !o.value && g.length >= s.props.multipleLimit && s.props.multipleLimit > 0;
    } else
      return false;
  }), l = u(() => e.label || (Y(e.value) ? "" : e.value)), c = u(() => e.value || e.label || ""), d = u(() => e.disabled || a.groupDisabled || v.value), f = Ve(), m = (b = [], g) => {
    if (Y(e.value)) {
      const p = s.props.valueKey;
      return b && b.some((V) => pl(H(V, p)) === H(g, p));
    } else
      return b && b.includes(g);
  }, S = () => {
    !e.disabled && !i.disabled && (s.states.hoveringIndex = s.optionsArray.indexOf(f.proxy));
  }, C = (b) => {
    const g = new RegExp(bn(b), "i");
    a.visible = g.test(l.value) || e.created;
  };
  return U(() => l.value, () => {
    !e.created && !s.props.remote && s.setSelected();
  }), U(() => e.value, (b, g) => {
    const { remote: p, valueKey: V } = s.props;
    if ((p ? b !== g : !ae(b, g)) && (s.onOptionDestroy(g, f.proxy), s.onOptionCreate(f.proxy)), !e.created && !p) {
      if (V && Y(b) && Y(g) && b[V] === g[V])
        return;
      s.setSelected();
    }
  }), U(() => i.disabled, () => {
    a.groupDisabled = i.disabled;
  }, { immediate: true }), { select: s, currentLabel: l, currentValue: c, itemSelected: o, isDisabled: d, hoverItem: S, updateOption: C };
}
const yn = ie({ name: "ElOption", componentName: "ElOption", props: { value: { required: true, type: [String, Number, Boolean, Object] }, label: [String, Number], created: Boolean, disabled: Boolean }, setup(e) {
  const a = se("select"), s = at(), i = u(() => [a.be("dropdown", "item"), a.is("disabled", Ie(c)), a.is("selected", Ie(l)), a.is("hovering", Ie(C))]), o = oe({ index: -1, groupDisabled: false, visible: true, hover: false }), { currentLabel: v, itemSelected: l, isDisabled: c, select: d, hoverItem: f, updateOption: m } = gn(e, o), { visible: S, hover: C } = Te(o), b = Ve().proxy;
  d.onOptionCreate(b), fl(() => {
    const p = b.value, { selected: V } = d.states, q = V.some((re) => re.value === b.value);
    F(() => {
      d.states.cachedOptions.get(p) === b && !q && d.states.cachedOptions.delete(p);
    }), d.onOptionDestroy(p, b);
  });
  function g() {
    c.value || d.handleOptionSelect(b);
  }
  return { ns: a, id: s, containerKls: i, currentLabel: v, itemSelected: l, isDisabled: c, select: d, hoverItem: f, updateOption: m, visible: S, hover: C, selectOptionClick: g, states: o };
} });
function Sn(e, a, s, i, o, v) {
  return ne((y(), I("li", { id: e.id, class: h(e.containerKls), role: "option", "aria-disabled": e.isDisabled || void 0, "aria-selected": e.itemSelected, onMousemove: e.hoverItem, onClick: L(e.selectOptionClick, ["stop"]) }, [$(e.$slots, "default", {}, () => [T("span", null, N(e.currentLabel), 1)])], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [[$e, e.visible]]);
}
var Me = Se(yn, [["render", Sn], ["__file", "option.vue"]]);
const On = ie({ name: "ElSelectDropdown", componentName: "ElSelectDropdown", setup() {
  const e = ye(Oe), a = se("select"), s = u(() => e.props.popperClass), i = u(() => e.props.multiple), o = u(() => e.props.fitInputWidth), v = E("");
  function l() {
    var c;
    v.value = `${(c = e.selectRef) == null ? void 0 : c.offsetWidth}px`;
  }
  return Re(() => {
    l(), G(e.selectRef, l);
  }), { ns: a, minWidth: v, popperClass: s, isMultiple: i, isFitInputWidth: o };
} });
function Cn(e, a, s, i, o, v) {
  return y(), I("div", { class: h([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]), style: ge({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth }) }, [e.$slots.header ? (y(), I("div", { key: 0, class: h(e.ns.be("dropdown", "header")) }, [$(e.$slots, "header")], 2)) : R("v-if", true), $(e.$slots, "default"), e.$slots.footer ? (y(), I("div", { key: 1, class: h(e.ns.be("dropdown", "footer")) }, [$(e.$slots, "footer")], 2)) : R("v-if", true)], 6);
}
var wn = Se(On, [["render", Cn], ["__file", "select-dropdown.vue"]]);
const In = (e, a) => {
  const { t: s } = vl(), i = at(), o = se("select"), v = se("input"), l = oe({ inputValue: "", options: /* @__PURE__ */ new Map(), cachedOptions: /* @__PURE__ */ new Map(), optionValues: [], selected: [], selectionWidth: 0, collapseItemWidth: 0, selectedLabel: "", hoveringIndex: -1, previousQuery: null, inputHovering: false, menuVisibleOnFocus: false, isBeforeHide: false }), c = E(null), d = E(null), f = E(null), m = E(null), S = E(null), C = E(null), b = E(null), g = E(null), p = E(null), V = E(null), q = E(null), { isComposing: re, handleCompositionStart: ft, handleCompositionUpdate: vt, handleCompositionEnd: mt } = ml({ afterComposition: (t) => Ke(t) }), { wrapperRef: ke, isFocused: De, handleBlur: bt } = bl(S, { beforeFocus() {
    return j.value;
  }, afterFocus() {
    e.automaticDropdown && !O.value && (O.value = true, l.menuVisibleOnFocus = true);
  }, beforeBlur(t) {
    var n, r;
    return ((n = f.value) == null ? void 0 : n.isFocusInsideContent(t)) || ((r = m.value) == null ? void 0 : r.isFocusInsideContent(t));
  }, afterBlur() {
    O.value = false, l.menuVisibleOnFocus = false;
  } }), O = E(false), Z = E(), { form: ue, formItem: J } = hl(), { inputId: ht } = gl(e, { formItemContext: J }), { valueOnClear: gt, isEmptyValue: yt } = yl(e), j = u(() => e.disabled || (ue == null ? void 0 : ue.disabled)), Ce = u(() => W(e.modelValue) ? e.modelValue.length > 0 : !yt(e.modelValue)), St = u(() => {
    var t;
    return (t = ue == null ? void 0 : ue.statusIcon) != null ? t : false;
  }), Ot = u(() => e.clearable && !j.value && l.inputHovering && Ce.value), Le = u(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), Ct = u(() => o.is("reverse", Le.value && O.value)), Ne = u(() => (J == null ? void 0 : J.validateState) || ""), wt = u(() => Sl[Ne.value]), It = u(() => e.remote ? 300 : 0), Et = u(() => e.remote && !l.inputValue && l.options.size === 0), Vt = u(() => e.loading ? e.loadingText || s("el.select.loading") : e.filterable && l.inputValue && l.options.size > 0 && _.value === 0 ? e.noMatchText || s("el.select.noMatch") : l.options.size === 0 ? e.noDataText || s("el.select.noData") : null), _ = u(() => M.value.filter((t) => t.visible).length), M = u(() => {
    const t = Array.from(l.options.values()), n = [];
    return l.optionValues.forEach((r) => {
      const w = t.findIndex((k) => k.value === r);
      w > -1 && n.push(t[w]);
    }), n.length >= t.length ? n : t;
  }), Tt = u(() => Array.from(l.cachedOptions.values())), $t = u(() => {
    const t = M.value.filter((n) => !n.created).some((n) => n.currentLabel === l.inputValue);
    return e.filterable && e.allowCreate && l.inputValue !== "" && !t;
  }), Be = () => {
    e.filterable && le(e.filterMethod) || e.filterable && e.remote && le(e.remoteMethod) || M.value.forEach((t) => {
      var n;
      (n = t.updateOption) == null || n.call(t, l.inputValue);
    });
  }, Pe = Ol(), Rt = u(() => ["small"].includes(Pe.value) ? "small" : "default"), Mt = u({ get() {
    return O.value && !Et.value;
  }, set(t) {
    O.value = t;
  } }), kt = u(() => {
    if (e.multiple && !be(e.modelValue))
      return A(e.modelValue).length === 0 && !l.inputValue;
    const t = W(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || be(t) ? !l.inputValue : true;
  }), Dt = u(() => {
    var t;
    const n = (t = e.placeholder) != null ? t : s("el.select.placeholder");
    return e.multiple || !Ce.value ? n : l.selectedLabel;
  }), Lt = u(() => Ye ? null : "mouseenter");
  U(() => e.modelValue, (t, n) => {
    e.multiple && e.filterable && !e.reserveKeyword && (l.inputValue = "", de("")), ce(), !ae(t, n) && e.validateEvent && (J == null ? void 0 : J.validate("change").catch((r) => Cl()));
  }, { flush: "post", deep: true }), U(() => O.value, (t) => {
    t ? de(l.inputValue) : (l.inputValue = "", l.previousQuery = null, l.isBeforeHide = true), a("visible-change", t);
  }), U(() => l.options.entries(), () => {
    wl && (ce(), e.defaultFirstOption && (e.filterable || e.remote) && _.value && Fe());
  }, { flush: "post" }), U(() => l.hoveringIndex, (t) => {
    Il(t) && t > -1 ? Z.value = M.value[t] || {} : Z.value = {}, M.value.forEach((n) => {
      n.hover = Z.value === n;
    });
  }), El(() => {
    l.isBeforeHide || Be();
  });
  const de = (t) => {
    l.previousQuery === t || re.value || (l.previousQuery = t, e.filterable && le(e.filterMethod) ? e.filterMethod(t) : e.filterable && e.remote && le(e.remoteMethod) && e.remoteMethod(t), e.defaultFirstOption && (e.filterable || e.remote) && _.value ? F(Fe) : F(Nt));
  }, Fe = () => {
    const t = M.value.filter((k) => k.visible && !k.disabled && !k.states.groupDisabled), n = t.find((k) => k.created), r = t[0], w = M.value.map((k) => k.value);
    l.hoveringIndex = qe(w, n || r);
  }, ce = () => {
    if (e.multiple)
      l.selectedLabel = "";
    else {
      const n = W(e.modelValue) ? e.modelValue[0] : e.modelValue, r = Ae(n);
      l.selectedLabel = r.currentLabel, l.selected = [r];
      return;
    }
    const t = [];
    be(e.modelValue) || A(e.modelValue).forEach((n) => {
      t.push(Ae(n));
    }), l.selected = t;
  }, Ae = (t) => {
    let n;
    const r = Vl(t);
    for (let Q = l.cachedOptions.size - 1; Q >= 0; Q--) {
      const B = Tt.value[Q];
      if (r ? H(B.value, e.valueKey) === H(t, e.valueKey) : B.value === t) {
        n = { value: t, currentLabel: B.currentLabel, get isDisabled() {
          return B.isDisabled;
        } };
        break;
      }
    }
    if (n)
      return n;
    const w = r ? t.label : t ?? "";
    return { value: t, currentLabel: w };
  }, Nt = () => {
    l.hoveringIndex = M.value.findIndex((t) => l.selected.some((n) => ve(n) === ve(t)));
  }, Bt = () => {
    l.selectionWidth = d.value.getBoundingClientRect().width;
  }, Pt = () => {
    l.collapseItemWidth = V.value.getBoundingClientRect().width;
  }, we = () => {
    var t, n;
    (n = (t = f.value) == null ? void 0 : t.updatePopper) == null || n.call(t);
  }, We = () => {
    var t, n;
    (n = (t = m.value) == null ? void 0 : t.updatePopper) == null || n.call(t);
  }, ze = () => {
    l.inputValue.length > 0 && !O.value && (O.value = true), de(l.inputValue);
  }, Ke = (t) => {
    if (l.inputValue = t.target.value, e.remote)
      Ge();
    else
      return ze();
  }, Ge = Zl(() => {
    ze();
  }, It.value), x = (t) => {
    ae(e.modelValue, t) || a(st, t);
  }, Ft = (t) => mn(t, (n) => {
    const r = l.cachedOptions.get(n);
    return r && !r.disabled && !r.states.groupDisabled;
  }), At = (t) => {
    if (e.multiple && t.code !== Tl.delete && t.target.value.length <= 0) {
      const n = A(e.modelValue).slice(), r = Ft(n);
      if (r < 0)
        return;
      const w = n[r];
      n.splice(r, 1), a(X, n), x(n), a("remove-tag", w);
    }
  }, Wt = (t, n) => {
    const r = l.selected.indexOf(n);
    if (r > -1 && !j.value) {
      const w = A(e.modelValue).slice();
      w.splice(r, 1), a(X, w), x(w), a("remove-tag", n.value);
    }
    t.stopPropagation(), fe();
  }, He = (t) => {
    t.stopPropagation();
    const n = e.multiple ? [] : gt.value;
    if (e.multiple)
      for (const r of l.selected)
        r.isDisabled && n.push(r.value);
    a(X, n), x(n), l.hoveringIndex = -1, O.value = false, a("clear"), fe();
  }, Ue = (t) => {
    var n;
    if (e.multiple) {
      const r = A((n = e.modelValue) != null ? n : []).slice(), w = qe(r, t);
      w > -1 ? r.splice(w, 1) : (e.multipleLimit <= 0 || r.length < e.multipleLimit) && r.push(t.value), a(X, r), x(r), t.created && de(""), e.filterable && !e.reserveKeyword && (l.inputValue = "");
    } else
      a(X, t.value), x(t.value), O.value = false;
    fe(), !O.value && F(() => {
      pe(t);
    });
  }, qe = (t = [], n) => be(n) ? -1 : Y(n.value) ? t.findIndex((r) => ae(H(r, e.valueKey), ve(n))) : t.indexOf(n.value), pe = (t) => {
    var n, r, w, k, Q;
    const B = W(t) ? t[0] : t;
    let me = null;
    if (B == null ? void 0 : B.value) {
      const ee = M.value.filter((ll) => ll.value === B.value);
      ee.length > 0 && (me = ee[0].$el);
    }
    if (f.value && me) {
      const ee = (k = (w = (r = (n = f.value) == null ? void 0 : n.popperRef) == null ? void 0 : r.contentRef) == null ? void 0 : w.querySelector) == null ? void 0 : k.call(w, `.${o.be("dropdown", "wrap")}`);
      ee && $l(ee, me);
    }
    (Q = q.value) == null || Q.handleScroll();
  }, zt = (t) => {
    l.options.set(t.value, t), l.cachedOptions.set(t.value, t);
  }, Kt = (t, n) => {
    l.options.get(t) === n && l.options.delete(t);
  }, Gt = u(() => {
    var t, n;
    return (n = (t = f.value) == null ? void 0 : t.popperRef) == null ? void 0 : n.contentRef;
  }), Ht = () => {
    l.isBeforeHide = false, F(() => {
      var t;
      (t = q.value) == null || t.update(), pe(l.selected);
    });
  }, fe = () => {
    var t;
    (t = S.value) == null || t.focus();
  }, Ut = () => {
    var t;
    if (O.value) {
      O.value = false, F(() => {
        var n;
        return (n = S.value) == null ? void 0 : n.blur();
      });
      return;
    }
    (t = S.value) == null || t.blur();
  }, qt = (t) => {
    He(t);
  }, Qt = (t) => {
    if (O.value = false, De.value) {
      const n = new FocusEvent("focus", t);
      F(() => bt(n));
    }
  }, Xt = () => {
    l.inputValue.length > 0 ? l.inputValue = "" : O.value = false;
  }, Qe = () => {
    j.value || (Ye && (l.inputHovering = true), l.menuVisibleOnFocus ? l.menuVisibleOnFocus = false : O.value = !O.value);
  }, Yt = () => {
    if (!O.value)
      Qe();
    else {
      const t = M.value[l.hoveringIndex];
      t && !t.isDisabled && Ue(t);
    }
  }, ve = (t) => Y(t.value) ? H(t.value, e.valueKey) : t.value, Zt = u(() => M.value.filter((t) => t.visible).every((t) => t.isDisabled)), Jt = u(() => e.multiple ? e.collapseTags ? l.selected.slice(0, e.maxCollapseTags) : l.selected : []), jt = u(() => e.multiple ? e.collapseTags ? l.selected.slice(e.maxCollapseTags) : [] : []), Xe = (t) => {
    if (!O.value) {
      O.value = true;
      return;
    }
    if (!(l.options.size === 0 || _.value === 0 || re.value) && !Zt.value) {
      t === "next" ? (l.hoveringIndex++, l.hoveringIndex === l.options.size && (l.hoveringIndex = 0)) : t === "prev" && (l.hoveringIndex--, l.hoveringIndex < 0 && (l.hoveringIndex = l.options.size - 1));
      const n = M.value[l.hoveringIndex];
      (n.isDisabled || !n.visible) && Xe(t), F(() => pe(Z.value));
    }
  }, _t = () => {
    if (!d.value)
      return 0;
    const t = window.getComputedStyle(d.value);
    return Number.parseFloat(t.gap || "6px");
  }, xt = u(() => {
    const t = _t();
    return { maxWidth: `${V.value && e.maxCollapseTags === 1 ? l.selectionWidth - l.collapseItemWidth - t : l.selectionWidth}px` };
  }), el = u(() => ({ maxWidth: `${l.selectionWidth}px` })), tl = (t) => {
    a("popup-scroll", t);
  };
  return G(d, Bt), G(g, we), G(ke, we), G(p, We), G(V, Pt), Re(() => {
    ce();
  }), { inputId: ht, contentId: i, nsSelect: o, nsInput: v, states: l, isFocused: De, expanded: O, optionsArray: M, hoverOption: Z, selectSize: Pe, filteredOptionsCount: _, updateTooltip: we, updateTagTooltip: We, debouncedOnInputChange: Ge, onInput: Ke, deletePrevTag: At, deleteTag: Wt, deleteSelected: He, handleOptionSelect: Ue, scrollToOption: pe, hasModelValue: Ce, shouldShowPlaceholder: kt, currentPlaceholder: Dt, mouseEnterEventName: Lt, needStatusIcon: St, showClose: Ot, iconComponent: Le, iconReverse: Ct, validateState: Ne, validateIcon: wt, showNewOption: $t, updateOptions: Be, collapseTagSize: Rt, setSelected: ce, selectDisabled: j, emptyText: Vt, handleCompositionStart: ft, handleCompositionUpdate: vt, handleCompositionEnd: mt, onOptionCreate: zt, onOptionDestroy: Kt, handleMenuEnter: Ht, focus: fe, blur: Ut, handleClearClick: qt, handleClickOutside: Qt, handleEsc: Xt, toggleMenu: Qe, selectOption: Yt, getValueKey: ve, navigateOptions: Xe, dropdownMenuVisible: Mt, showTagList: Jt, collapseTagList: jt, popupScroll: tl, tagStyle: xt, collapseTagStyle: el, popperRef: Gt, inputRef: S, tooltipRef: f, tagTooltipRef: m, prefixRef: C, suffixRef: b, selectRef: c, wrapperRef: ke, selectionRef: d, scrollbarRef: q, menuRef: g, tagMenuRef: p, collapseItemRef: V };
};
var En = ie({ name: "ElOptions", setup(e, { slots: a }) {
  const s = ye(Oe);
  let i = [];
  return () => {
    var o, v;
    const l = (o = a.default) == null ? void 0 : o.call(a), c = [];
    function d(f) {
      W(f) && f.forEach((m) => {
        var S, C, b, g;
        const p = (S = (m == null ? void 0 : m.type) || {}) == null ? void 0 : S.name;
        p === "ElOptionGroup" ? d(!Rl(m.children) && !W(m.children) && le((C = m.children) == null ? void 0 : C.default) ? (b = m.children) == null ? void 0 : b.default() : m.children) : p === "ElOption" ? c.push((g = m.props) == null ? void 0 : g.value) : W(m.children) && d(m.children);
      });
    }
    return l.length && d((v = l[0]) == null ? void 0 : v.children), ae(c, i) || (i = c, s && (s.states.optionValues = c)), l;
  };
} });
const Vn = Ml({ name: String, id: String, modelValue: { type: [Array, String, Number, Boolean, Object], default: void 0 }, autocomplete: { type: String, default: "off" }, automaticDropdown: Boolean, size: kl, effect: { type: he(String), default: "light" }, disabled: Boolean, clearable: Boolean, filterable: Boolean, allowCreate: Boolean, loading: Boolean, popperClass: { type: String, default: "" }, popperOptions: { type: he(Object), default: () => ({}) }, remote: Boolean, loadingText: String, noMatchText: String, noDataText: String, remoteMethod: Function, filterMethod: Function, multiple: Boolean, multipleLimit: { type: Number, default: 0 }, placeholder: { type: String }, defaultFirstOption: Boolean, reserveKeyword: { type: Boolean, default: true }, valueKey: { type: String, default: "value" }, collapseTags: Boolean, collapseTagsTooltip: Boolean, maxCollapseTags: { type: Number, default: 1 }, teleported: Dl.teleported, persistent: { type: Boolean, default: true }, clearIcon: { type: Ze, default: Ll }, fitInputWidth: Boolean, suffixIcon: { type: Ze, default: Nl }, tagType: { ...xe.type, default: "info" }, tagEffect: { ...xe.effect, default: "light" }, validateEvent: { type: Boolean, default: true }, remoteShowSuffix: Boolean, showArrow: { type: Boolean, default: true }, offset: { type: Number, default: 12 }, placement: { type: he(String), values: Bl, default: "bottom-start" }, fallbackPlacements: { type: he(Array), default: ["bottom-start", "top-start", "right", "left"] }, tabindex: { type: [String, Number], default: 0 }, appendTo: String, ...Pl, ...Fl(["ariaLabel"]) }), tt = "ElSelect", Tn = ie({ name: tt, componentName: tt, components: { ElSelectMenu: wn, ElOption: Me, ElOptions: En, ElTag: Xl, ElScrollbar: Ql, ElTooltip: Al, ElIcon: Wl }, directives: { ClickOutside: zl }, props: Vn, emits: [X, st, "remove-tag", "clear", "visible-change", "focus", "blur", "popup-scroll"], setup(e, { emit: a }) {
  const s = u(() => {
    const { modelValue: d, multiple: f } = e, m = f ? [] : void 0;
    return W(d) ? f ? d : m : f ? m : d;
  }), i = oe({ ...Te(e), modelValue: s }), o = In(i, a), { calculatorRef: v, inputStyle: l } = hn();
  ot(Oe, oe({ props: i, states: o.states, optionsArray: o.optionsArray, handleOptionSelect: o.handleOptionSelect, onOptionCreate: o.onOptionCreate, onOptionDestroy: o.onOptionDestroy, selectRef: o.selectRef, setSelected: o.setSelected }));
  const c = u(() => e.multiple ? o.states.selected.map((d) => d.currentLabel) : o.states.selectedLabel);
  return { ...o, modelValue: s, selectedLabel: c, calculatorRef: v, inputStyle: l };
} });
function $n(e, a, s, i, o, v) {
  const l = z("el-tag"), c = z("el-tooltip"), d = z("el-icon"), f = z("el-option"), m = z("el-options"), S = z("el-scrollbar"), C = z("el-select-menu"), b = Kl("click-outside");
  return ne((y(), I("div", { ref: "selectRef", class: h([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]), [Hl(e.mouseEnterEventName)]: (g) => e.states.inputHovering = true, onMouseleave: (g) => e.states.inputHovering = false }, [K(c, { ref: "tooltipRef", visible: e.dropdownMenuVisible, placement: e.placement, teleported: e.teleported, "popper-class": [e.nsSelect.e("popper"), e.popperClass], "popper-options": e.popperOptions, "fallback-placements": e.fallbackPlacements, effect: e.effect, pure: "", trigger: "click", transition: `${e.nsSelect.namespace.value}-zoom-in-top`, "stop-popper-mouse-event": false, "gpu-acceleration": false, persistent: e.persistent, "append-to": e.appendTo, "show-arrow": e.showArrow, offset: e.offset, onBeforeShow: e.handleMenuEnter, onHide: (g) => e.states.isBeforeHide = false }, { default: D(() => {
    var g;
    return [T("div", { ref: "wrapperRef", class: h([e.nsSelect.e("wrapper"), e.nsSelect.is("focused", e.isFocused), e.nsSelect.is("hovering", e.states.inputHovering), e.nsSelect.is("filterable", e.filterable), e.nsSelect.is("disabled", e.selectDisabled)]), onClick: L(e.toggleMenu, ["prevent"]) }, [e.$slots.prefix ? (y(), I("div", { key: 0, ref: "prefixRef", class: h(e.nsSelect.e("prefix")) }, [$(e.$slots, "prefix")], 2)) : R("v-if", true), T("div", { ref: "selectionRef", class: h([e.nsSelect.e("selection"), e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)]) }, [e.multiple ? $(e.$slots, "tag", { key: 0 }, () => [(y(true), I(Je, null, je(e.showTagList, (p) => (y(), I("div", { key: e.getValueKey(p), class: h(e.nsSelect.e("selected-item")) }, [K(l, { closable: !e.selectDisabled && !p.isDisabled, size: e.collapseTagSize, type: e.tagType, effect: e.tagEffect, "disable-transitions": "", style: ge(e.tagStyle), onClose: (V) => e.deleteTag(V, p) }, { default: D(() => [T("span", { class: h(e.nsSelect.e("tags-text")) }, [$(e.$slots, "label", { label: p.currentLabel, value: p.value }, () => [_e(N(p.currentLabel), 1)])], 2)]), _: 2 }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])], 2))), 128)), e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (y(), P(c, { key: 0, ref: "tagTooltipRef", disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip, "fallback-placements": ["bottom", "top", "right", "left"], effect: e.effect, placement: "bottom", teleported: e.teleported }, { default: D(() => [T("div", { ref: "collapseItemRef", class: h(e.nsSelect.e("selected-item")) }, [K(l, { closable: false, size: e.collapseTagSize, type: e.tagType, effect: e.tagEffect, "disable-transitions": "", style: ge(e.collapseTagStyle) }, { default: D(() => [T("span", { class: h(e.nsSelect.e("tags-text")) }, " + " + N(e.states.selected.length - e.maxCollapseTags), 3)]), _: 1 }, 8, ["size", "type", "effect", "style"])], 2)]), content: D(() => [T("div", { ref: "tagMenuRef", class: h(e.nsSelect.e("selection")) }, [(y(true), I(Je, null, je(e.collapseTagList, (p) => (y(), I("div", { key: e.getValueKey(p), class: h(e.nsSelect.e("selected-item")) }, [K(l, { class: "in-tooltip", closable: !e.selectDisabled && !p.isDisabled, size: e.collapseTagSize, type: e.tagType, effect: e.tagEffect, "disable-transitions": "", onClose: (V) => e.deleteTag(V, p) }, { default: D(() => [T("span", { class: h(e.nsSelect.e("tags-text")) }, [$(e.$slots, "label", { label: p.currentLabel, value: p.value }, () => [_e(N(p.currentLabel), 1)])], 2)]), _: 2 }, 1032, ["closable", "size", "type", "effect", "onClose"])], 2))), 128))], 2)]), _: 3 }, 8, ["disabled", "effect", "teleported"])) : R("v-if", true)]) : R("v-if", true), T("div", { class: h([e.nsSelect.e("selected-item"), e.nsSelect.e("input-wrapper"), e.nsSelect.is("hidden", !e.filterable)]) }, [ne(T("input", { id: e.inputId, ref: "inputRef", "onUpdate:modelValue": (p) => e.states.inputValue = p, type: "text", name: e.name, class: h([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]), disabled: e.selectDisabled, autocomplete: e.autocomplete, style: ge(e.inputStyle), tabindex: e.tabindex, role: "combobox", readonly: !e.filterable, spellcheck: "false", "aria-activedescendant": ((g = e.hoverOption) == null ? void 0 : g.id) || "", "aria-controls": e.contentId, "aria-expanded": e.dropdownMenuVisible, "aria-label": e.ariaLabel, "aria-autocomplete": "none", "aria-haspopup": "listbox", onKeydown: [te(L((p) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]), te(L((p) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]), te(L(e.handleEsc, ["stop", "prevent"]), ["esc"]), te(L(e.selectOption, ["stop", "prevent"]), ["enter"]), te(L(e.deletePrevTag, ["stop"]), ["delete"])], onCompositionstart: e.handleCompositionStart, onCompositionupdate: e.handleCompositionUpdate, onCompositionend: e.handleCompositionEnd, onInput: e.onInput, onClick: L(e.toggleMenu, ["stop"]) }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [[Gl, e.states.inputValue]]), e.filterable ? (y(), I("span", { key: 0, ref: "calculatorRef", "aria-hidden": "true", class: h(e.nsSelect.e("input-calculator")), textContent: N(e.states.inputValue) }, null, 10, ["textContent"])) : R("v-if", true)], 2), e.shouldShowPlaceholder ? (y(), I("div", { key: 1, class: h([e.nsSelect.e("selected-item"), e.nsSelect.e("placeholder"), e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)]) }, [e.hasModelValue ? $(e.$slots, "label", { key: 0, label: e.currentPlaceholder, value: e.modelValue }, () => [T("span", null, N(e.currentPlaceholder), 1)]) : (y(), I("span", { key: 1 }, N(e.currentPlaceholder), 1))], 2)) : R("v-if", true)], 2), T("div", { ref: "suffixRef", class: h(e.nsSelect.e("suffix")) }, [e.iconComponent && !e.showClose ? (y(), P(d, { key: 0, class: h([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse]) }, { default: D(() => [(y(), P(Ee(e.iconComponent)))]), _: 1 }, 8, ["class"])) : R("v-if", true), e.showClose && e.clearIcon ? (y(), P(d, { key: 1, class: h([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.nsSelect.e("clear")]), onClick: e.handleClearClick }, { default: D(() => [(y(), P(Ee(e.clearIcon)))]), _: 1 }, 8, ["class", "onClick"])) : R("v-if", true), e.validateState && e.validateIcon && e.needStatusIcon ? (y(), P(d, { key: 2, class: h([e.nsInput.e("icon"), e.nsInput.e("validateIcon"), e.nsInput.is("loading", e.validateState === "validating")]) }, { default: D(() => [(y(), P(Ee(e.validateIcon)))]), _: 1 }, 8, ["class"])) : R("v-if", true)], 2)], 10, ["onClick"])];
  }), content: D(() => [K(C, { ref: "menuRef" }, { default: D(() => [e.$slots.header ? (y(), I("div", { key: 0, class: h(e.nsSelect.be("dropdown", "header")), onClick: L(() => {
  }, ["stop"]) }, [$(e.$slots, "header")], 10, ["onClick"])) : R("v-if", true), ne(K(S, { id: e.contentId, ref: "scrollbarRef", tag: "ul", "wrap-class": e.nsSelect.be("dropdown", "wrap"), "view-class": e.nsSelect.be("dropdown", "list"), class: h([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]), role: "listbox", "aria-label": e.ariaLabel, "aria-orientation": "vertical", onScroll: e.popupScroll }, { default: D(() => [e.showNewOption ? (y(), P(f, { key: 0, value: e.states.inputValue, created: true }, null, 8, ["value"])) : R("v-if", true), K(m, null, { default: D(() => [$(e.$slots, "default")]), _: 3 })]), _: 3 }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [[$e, e.states.options.size > 0 && !e.loading]]), e.$slots.loading && e.loading ? (y(), I("div", { key: 1, class: h(e.nsSelect.be("dropdown", "loading")) }, [$(e.$slots, "loading")], 2)) : e.loading || e.filteredOptionsCount === 0 ? (y(), I("div", { key: 2, class: h(e.nsSelect.be("dropdown", "empty")) }, [$(e.$slots, "empty", {}, () => [T("span", null, N(e.emptyText), 1)])], 2)) : R("v-if", true), e.$slots.footer ? (y(), I("div", { key: 3, class: h(e.nsSelect.be("dropdown", "footer")), onClick: L(() => {
  }, ["stop"]) }, [$(e.$slots, "footer")], 10, ["onClick"])) : R("v-if", true)]), _: 3 }, 512)]), _: 3 }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "transition", "persistent", "append-to", "show-arrow", "offset", "onBeforeShow", "onHide"])], 16, ["onMouseleave"])), [[b, e.handleClickOutside, e.popperRef]]);
}
var Rn = Se(Tn, [["render", $n], ["__file", "select.vue"]]);
const Mn = ie({ name: "ElOptionGroup", componentName: "ElOptionGroup", props: { label: String, disabled: Boolean }, setup(e) {
  const a = se("select"), s = E(null), i = Ve(), o = E([]);
  ot(ct, oe({ ...Te(e) }));
  const v = u(() => o.value.some((f) => f.visible === true)), l = (f) => {
    var m, S;
    return ((m = f.type) == null ? void 0 : m.name) === "ElOption" && !!((S = f.component) != null && S.proxy);
  }, c = (f) => {
    const m = A(f), S = [];
    return m.forEach((C) => {
      var b, g;
      l(C) ? S.push(C.component.proxy) : (b = C.children) != null && b.length ? S.push(...c(C.children)) : (g = C.component) != null && g.subTree && S.push(...c(C.component.subTree));
    }), S;
  }, d = () => {
    o.value = c(i.subTree);
  };
  return Re(() => {
    d();
  }), Ul(s, d, { attributes: true, subtree: true, childList: true }), { groupRef: s, visible: v, ns: a };
} });
function kn(e, a, s, i, o, v) {
  return ne((y(), I("ul", { ref: "groupRef", class: h(e.ns.be("group", "wrap")) }, [T("li", { class: h(e.ns.be("group", "title")) }, N(e.label), 3), T("li", null, [T("ul", { class: h(e.ns.b("group")) }, [$(e.$slots, "default")], 2)])], 2)), [[$e, e.visible]]);
}
var pt = Se(Mn, [["render", kn], ["__file", "option-group.vue"]]);
const An = ql(Rn, { Option: Me, OptionGroup: pt }), Wn = it(Me), zn = it(pt);
export {
  Wn as E,
  An as a,
  zn as b,
  Fn as c,
  pn as d,
  Oe as s,
  hn as u
};
