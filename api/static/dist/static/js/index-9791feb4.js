import { aP as Fe, b1 as Te, af as qe, h as Y, aV as Pe, U as be, Y as S, aU as j, r as x, o as q, $ as D, aX as ye, bj as K, y as R, b as F, c as B, d as u, q as k, u as r, a7 as T, a$ as X, bD as Xe, bk as Ge, bo as Je, bp as ee, b5 as ne, bE as se, bs as ie, cR as Z, cS as we, aI as Ze, i as Qe, F as Le, K as Ae, bu as et, bg as tt, bw as lt, bv as ot, cq as at, Z as ce, n as Q, ax as nt, j as te, w as L, m as le, by as st, f as E, e as ke, a5 as rt, a4 as ue, L as de, t as V, cT as it, a3 as ct, G as Ee, M as ut, p as xe, a2 as dt, az as ft, bx as Ce, b0 as pt, z as $e, A as Se, aq as vt, ak as ht, x as mt, a9 as _t, ag as gt, ah as bt } from "./index-8579fe4a.js";
import { v as yt } from "./el-loading-8747b309.js";
import { _ as wt } from "./index-ad57f5b2.js";
import { E as kt } from "./el-image-viewer-dd2f27c0.js";
import { E as Et } from "./el-divider-7d014453.js";
import { _ as xt } from "./index.vue_vue_type_script_setup_true_lang-e4a54f30.js";
import { a as fe } from "./position-4ca9dd9d.js";
import { d as Ct } from "./debounce-484109dd.js";
const $t = Fe({ color: { type: Te(Object), required: true }, vertical: { type: Boolean, default: false } });
let re = false;
function U(e, o) {
  if (!qe)
    return;
  const s = function(l) {
    var c;
    (c = o.drag) == null || c.call(o, l);
  }, t = function(l) {
    var c;
    document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", t), document.removeEventListener("touchmove", s), document.removeEventListener("touchend", t), document.onselectstart = null, document.ondragstart = null, re = false, (c = o.end) == null || c.call(o, l);
  }, f = function(l) {
    var c;
    re || (l.preventDefault(), document.onselectstart = () => false, document.ondragstart = () => false, document.addEventListener("mousemove", s), document.addEventListener("mouseup", t), document.addEventListener("touchmove", s), document.addEventListener("touchend", t), re = true, (c = o.start) == null || c.call(o, l));
  };
  e.addEventListener("mousedown", f), e.addEventListener("touchstart", f, { passive: false });
}
const St = (e) => {
  const o = Y(), { t: s } = Pe(), t = be(), f = be(), l = S(() => e.color.get("alpha")), c = S(() => s("el.colorpicker.alphaLabel"));
  function h(p) {
    var n;
    p.target !== t.value && a(p), (n = t.value) == null || n.focus();
  }
  function a(p) {
    if (!f.value || !t.value)
      return;
    const i = o.vnode.el.getBoundingClientRect(), { clientX: v, clientY: m } = fe(p);
    if (e.vertical) {
      let C = m - i.top;
      C = Math.max(t.value.offsetHeight / 2, C), C = Math.min(C, i.height - t.value.offsetHeight / 2), e.color.set("alpha", Math.round((C - t.value.offsetHeight / 2) / (i.height - t.value.offsetHeight) * 100));
    } else {
      let C = v - i.left;
      C = Math.max(t.value.offsetWidth / 2, C), C = Math.min(C, i.width - t.value.offsetWidth / 2), e.color.set("alpha", Math.round((C - t.value.offsetWidth / 2) / (i.width - t.value.offsetWidth) * 100));
    }
  }
  function _(p) {
    const { code: n, shiftKey: i } = p, v = i ? 10 : 1;
    switch (n) {
      case K.left:
      case K.down:
        p.preventDefault(), p.stopPropagation(), $(-v);
        break;
      case K.right:
      case K.up:
        p.preventDefault(), p.stopPropagation(), $(v);
        break;
    }
  }
  function $(p) {
    let n = l.value + p;
    n = n < 0 ? 0 : n > 100 ? 100 : n, e.color.set("alpha", n);
  }
  return { thumb: t, bar: f, alpha: l, alphaLabel: c, handleDrag: a, handleClick: h, handleKeydown: _ };
}, Vt = (e, { bar: o, thumb: s, handleDrag: t }) => {
  const f = Y(), l = j("color-alpha-slider"), c = x(0), h = x(0), a = x();
  function _() {
    if (!s.value || e.vertical)
      return 0;
    const y = f.vnode.el, g = e.color.get("alpha");
    return y ? Math.round(g * (y.offsetWidth - s.value.offsetWidth / 2) / 100) : 0;
  }
  function $() {
    if (!s.value)
      return 0;
    const y = f.vnode.el;
    if (!e.vertical)
      return 0;
    const g = e.color.get("alpha");
    return y ? Math.round(g * (y.offsetHeight - s.value.offsetHeight / 2) / 100) : 0;
  }
  function p() {
    if (e.color && e.color.value) {
      const { r: y, g, b: I } = e.color.toRgb();
      return `linear-gradient(to right, rgba(${y}, ${g}, ${I}, 0) 0%, rgba(${y}, ${g}, ${I}, 1) 100%)`;
    }
    return "";
  }
  function n() {
    c.value = _(), h.value = $(), a.value = p();
  }
  q(() => {
    if (!o.value || !s.value)
      return;
    const y = { drag: (g) => {
      t(g);
    }, end: (g) => {
      t(g);
    } };
    U(o.value, y), U(s.value, y), n();
  }), D(() => e.color.get("alpha"), () => n()), D(() => e.color.value, () => n());
  const i = S(() => [l.b(), l.is("vertical", e.vertical)]), v = S(() => l.e("bar")), m = S(() => l.e("thumb")), C = S(() => ({ background: a.value })), A = S(() => ({ left: ye(c.value), top: ye(h.value) }));
  return { rootKls: i, barKls: v, barStyle: C, thumbKls: m, thumbStyle: A, update: n };
}, Ft = "ElColorAlphaSlider", Tt = R({ name: Ft }), Pt = R({ ...Tt, props: $t, setup(e, { expose: o }) {
  const s = e, { alpha: t, alphaLabel: f, bar: l, thumb: c, handleDrag: h, handleClick: a, handleKeydown: _ } = St(s), { rootKls: $, barKls: p, barStyle: n, thumbKls: i, thumbStyle: v, update: m } = Vt(s, { bar: l, thumb: c, handleDrag: h });
  return o({ update: m, bar: l, thumb: c }), (C, A) => (F(), B("div", { class: k(r($)) }, [u("div", { ref_key: "bar", ref: l, class: k(r(p)), style: T(r(n)), onClick: r(a) }, null, 14, ["onClick"]), u("div", { ref_key: "thumb", ref: c, class: k(r(i)), style: T(r(v)), "aria-label": r(f), "aria-valuenow": r(t), "aria-orientation": C.vertical ? "vertical" : "horizontal", "aria-valuemin": "0", "aria-valuemax": "100", role: "slider", tabindex: "0", onKeydown: r(_) }, null, 46, ["aria-label", "aria-valuenow", "aria-orientation", "onKeydown"])], 2));
} });
var Lt = X(Pt, [["__file", "alpha-slider.vue"]]);
const At = R({ name: "ElColorHueSlider", props: { color: { type: Object, required: true }, vertical: Boolean }, setup(e) {
  const o = j("color-hue-slider"), s = Y(), t = x(), f = x(), l = x(0), c = x(0), h = S(() => e.color.get("hue"));
  D(() => h.value, () => {
    n();
  });
  function a(i) {
    i.target !== t.value && _(i);
  }
  function _(i) {
    if (!f.value || !t.value)
      return;
    const m = s.vnode.el.getBoundingClientRect(), { clientX: C, clientY: A } = fe(i);
    let y;
    if (e.vertical) {
      let g = A - m.top;
      g = Math.min(g, m.height - t.value.offsetHeight / 2), g = Math.max(t.value.offsetHeight / 2, g), y = Math.round((g - t.value.offsetHeight / 2) / (m.height - t.value.offsetHeight) * 360);
    } else {
      let g = C - m.left;
      g = Math.min(g, m.width - t.value.offsetWidth / 2), g = Math.max(t.value.offsetWidth / 2, g), y = Math.round((g - t.value.offsetWidth / 2) / (m.width - t.value.offsetWidth) * 360);
    }
    e.color.set("hue", y);
  }
  function $() {
    if (!t.value)
      return 0;
    const i = s.vnode.el;
    if (e.vertical)
      return 0;
    const v = e.color.get("hue");
    return i ? Math.round(v * (i.offsetWidth - t.value.offsetWidth / 2) / 360) : 0;
  }
  function p() {
    if (!t.value)
      return 0;
    const i = s.vnode.el;
    if (!e.vertical)
      return 0;
    const v = e.color.get("hue");
    return i ? Math.round(v * (i.offsetHeight - t.value.offsetHeight / 2) / 360) : 0;
  }
  function n() {
    l.value = $(), c.value = p();
  }
  return q(() => {
    if (!f.value || !t.value)
      return;
    const i = { drag: (v) => {
      _(v);
    }, end: (v) => {
      _(v);
    } };
    U(f.value, i), U(t.value, i), n();
  }), { bar: f, thumb: t, thumbLeft: l, thumbTop: c, hueValue: h, handleClick: a, update: n, ns: o };
} });
function Mt(e, o, s, t, f, l) {
  return F(), B("div", { class: k([e.ns.b(), e.ns.is("vertical", e.vertical)]) }, [u("div", { ref: "bar", class: k(e.ns.e("bar")), onClick: e.handleClick }, null, 10, ["onClick"]), u("div", { ref: "thumb", class: k(e.ns.e("thumb")), style: T({ left: e.thumbLeft + "px", top: e.thumbTop + "px" }) }, null, 6)], 2);
}
var Dt = X(At, [["render", Mt], ["__file", "hue-slider.vue"]]);
const Bt = Fe({ modelValue: String, id: String, showAlpha: Boolean, colorFormat: String, disabled: Boolean, size: Xe, popperClass: { type: String, default: "" }, tabindex: { type: [String, Number], default: 0 }, teleported: Ge.teleported, predefine: { type: Te(Array) }, validateEvent: { type: Boolean, default: true }, ...Je(["ariaLabel"]) }), It = { [ee]: (e) => ne(e) || se(e), [ie]: (e) => ne(e) || se(e), activeChange: (e) => ne(e) || se(e), focus: (e) => e instanceof FocusEvent, blur: (e) => e instanceof FocusEvent }, Me = Symbol("colorPickerContextKey");
class oe {
  constructor(o = {}) {
    this._hue = 0, this._saturation = 100, this._value = 100, this._alpha = 100, this._tiny = new Z(), this._isValid = false, this.enableAlpha = false, this.format = "", this.value = "";
    for (const s in o)
      we(o, s) && (this[s] = o[s]);
    o.value ? this.fromString(o.value) : this.doOnChange();
  }
  set(o, s) {
    if (arguments.length === 1 && typeof o == "object") {
      for (const t in o)
        we(o, t) && this.set(t, o[t]);
      return;
    }
    this[`_${o}`] = s, this._isValid = true, this.doOnChange();
  }
  get(o) {
    return ["hue", "saturation", "value", "alpha"].includes(o) ? Math.round(this[`_${o}`]) : this[`_${o}`];
  }
  toRgb() {
    return this._isValid ? this._tiny.toRgb() : { r: 255, g: 255, b: 255, a: 0 };
  }
  fromString(o) {
    const s = new Z(o);
    if (this._isValid = s.isValid, s.isValid) {
      const { h: t, s: f, v: l, a: c } = s.toHsv();
      this._hue = t, this._saturation = f * 100, this._value = l * 100, this._alpha = c * 100;
    } else
      this._hue = 0, this._saturation = 100, this._value = 100, this._alpha = 100;
    this.doOnChange();
  }
  compare(o) {
    const s = new Z({ h: o._hue, s: o._saturation / 100, v: o._value / 100, a: o._alpha / 100 });
    return this._tiny.equals(s);
  }
  doOnChange() {
    const { _hue: o, _saturation: s, _value: t, _alpha: f, format: l, enableAlpha: c } = this;
    let h = l || (c ? "rgb" : "hex");
    l === "hex" && c && (h = "hex8"), this._tiny = new Z({ h: o, s: s / 100, v: t / 100, a: f / 100 }), this.value = this._isValid ? this._tiny.toString(h) : "";
  }
}
const Ot = R({ props: { colors: { type: Array, required: true }, color: { type: Object, required: true }, enableAlpha: { type: Boolean, required: true } }, setup(e) {
  const o = j("color-predefine"), { currentColor: s } = Ze(Me), t = x(l(e.colors, e.color));
  D(() => s.value, (c) => {
    const h = new oe({ value: c });
    t.value.forEach((a) => {
      a.selected = h.compare(a);
    });
  }), Qe(() => {
    t.value = l(e.colors, e.color);
  });
  function f(c) {
    e.color.fromString(e.colors[c]);
  }
  function l(c, h) {
    return c.map((a) => {
      const _ = new oe({ value: a });
      return _.selected = _.compare(h), _;
    });
  }
  return { rgbaColors: t, handleSelect: f, ns: o };
} });
function Ht(e, o, s, t, f, l) {
  return F(), B("div", { class: k(e.ns.b()) }, [u("div", { class: k(e.ns.e("colors")) }, [(F(true), B(Le, null, Ae(e.rgbaColors, (c, h) => (F(), B("div", { key: e.colors[h], class: k([e.ns.e("color-selector"), e.ns.is("alpha", c.get("alpha") < 100), { selected: c.selected }]), onClick: (a) => e.handleSelect(h) }, [u("div", { style: T({ backgroundColor: c.value }) }, null, 4)], 10, ["onClick"]))), 128))], 2)], 2);
}
var Kt = X(Ot, [["render", Ht], ["__file", "predefine.vue"]]);
const Rt = R({ name: "ElSlPanel", props: { color: { type: Object, required: true } }, setup(e) {
  const o = j("color-svpanel"), s = Y(), t = x(0), f = x(0), l = x("hsl(0, 100%, 50%)"), c = S(() => {
    const _ = e.color.get("hue"), $ = e.color.get("value");
    return { hue: _, value: $ };
  });
  function h() {
    const _ = e.color.get("saturation"), $ = e.color.get("value"), p = s.vnode.el, { clientWidth: n, clientHeight: i } = p;
    f.value = _ * n / 100, t.value = (100 - $) * i / 100, l.value = `hsl(${e.color.get("hue")}, 100%, 50%)`;
  }
  function a(_) {
    const p = s.vnode.el.getBoundingClientRect(), { clientX: n, clientY: i } = fe(_);
    let v = n - p.left, m = i - p.top;
    v = Math.max(0, v), v = Math.min(v, p.width), m = Math.max(0, m), m = Math.min(m, p.height), f.value = v, t.value = m, e.color.set({ saturation: v / p.width * 100, value: 100 - m / p.height * 100 });
  }
  return D(() => c.value, () => {
    h();
  }), q(() => {
    U(s.vnode.el, { drag: (_) => {
      a(_);
    }, end: (_) => {
      a(_);
    } }), h();
  }), { cursorTop: t, cursorLeft: f, background: l, colorValue: c, handleDrag: a, update: h, ns: o };
} });
function zt(e, o, s, t, f, l) {
  return F(), B("div", { class: k(e.ns.b()), style: T({ backgroundColor: e.background }) }, [u("div", { class: k(e.ns.e("white")) }, null, 2), u("div", { class: k(e.ns.e("black")) }, null, 2), u("div", { class: k(e.ns.e("cursor")), style: T({ top: e.cursorTop + "px", left: e.cursorLeft + "px" }) }, [u("div")], 6)], 6);
}
var Nt = X(Rt, [["render", zt], ["__file", "sv-panel.vue"]]);
const Wt = R({ name: "ElColorPicker" }), Ut = R({ ...Wt, props: Bt, emits: It, setup(e, { expose: o, emit: s }) {
  const t = e, { t: f } = Pe(), l = j("color"), { formItem: c } = et(), h = tt(), a = lt(), { inputId: _, isLabeledByFormItem: $ } = ot(t, { formItemContext: c }), p = x(), n = x(), i = x(), v = x(), m = x(), C = x(), { isFocused: A, handleFocus: y, handleBlur: g } = at(m, { beforeFocus() {
    return a.value;
  }, beforeBlur(d) {
    var P;
    return (P = v.value) == null ? void 0 : P.isFocusInsideContent(d);
  }, afterBlur() {
    W(false), N();
  } });
  let I = true;
  const w = ce(new oe({ enableAlpha: t.showAlpha, format: t.colorFormat || "", value: t.modelValue })), O = x(false), b = x(false), M = x(""), De = S(() => !t.modelValue && !b.value ? "transparent" : He(w, t.showAlpha)), G = S(() => !t.modelValue && !b.value ? "" : w.value), Be = S(() => $.value ? void 0 : t.ariaLabel || f("el.colorpicker.defaultLabel")), Ie = S(() => $.value ? c == null ? void 0 : c.labelId : void 0), Oe = S(() => [l.b("picker"), l.is("disabled", a.value), l.bm("picker", h.value), l.is("focused", A.value)]);
  function He(d, P) {
    const { r: H, g: _e, b: ge, a: je } = d.toRgb();
    return P ? `rgba(${H}, ${_e}, ${ge}, ${je})` : `rgb(${H}, ${_e}, ${ge})`;
  }
  function W(d) {
    O.value = d;
  }
  const J = Ct(W, 100, { leading: true });
  function pe() {
    a.value || W(true);
  }
  function ve() {
    J(false), N();
  }
  function N() {
    Q(() => {
      t.modelValue ? w.fromString(t.modelValue) : (w.value = "", !G.value && M.value && (M.value = ""), Q(() => {
        b.value = false;
      }));
    });
  }
  function Ke() {
    a.value || (O.value && N(), J(!O.value));
  }
  function Re() {
    w.fromString(M.value), w.value !== M.value && (M.value = w.value);
  }
  function ze() {
    const d = w.value;
    s(ee, d), s(ie, d), t.validateEvent && (c == null ? void 0 : c.validate("change").catch((P) => Ce())), J(false), Q(() => {
      const P = new oe({ enableAlpha: t.showAlpha, format: t.colorFormat || "", value: t.modelValue });
      w.compare(P) || N();
    });
  }
  function Ne() {
    J(false), s(ee, null), s(ie, null), t.modelValue !== null && t.validateEvent && (c == null ? void 0 : c.validate("change").catch((d) => Ce())), N();
  }
  function We() {
    O.value && (ve(), A.value && me());
  }
  function he(d) {
    d.preventDefault(), d.stopPropagation(), W(false), N();
  }
  function Ue(d) {
    switch (d.code) {
      case K.enter:
      case K.numpadEnter:
      case K.space:
        d.preventDefault(), d.stopPropagation(), pe(), C.value.focus();
        break;
      case K.esc:
        he(d);
        break;
    }
  }
  function me() {
    m.value.focus();
  }
  function Ye() {
    m.value.blur();
  }
  return q(() => {
    t.modelValue && (M.value = G.value);
  }), D(() => t.modelValue, (d) => {
    d ? d && d !== w.value && (I = false, w.fromString(d)) : b.value = false;
  }), D(() => [t.colorFormat, t.showAlpha], () => {
    w.enableAlpha = t.showAlpha, w.format = t.colorFormat || w.format, w.doOnChange(), s(ee, w.value);
  }), D(() => G.value, (d) => {
    M.value = d, I && s("activeChange", d), I = true;
  }), D(() => w.value, () => {
    !t.modelValue && !b.value && (b.value = true);
  }), D(() => O.value, () => {
    Q(() => {
      var d, P, H;
      (d = p.value) == null || d.update(), (P = n.value) == null || P.update(), (H = i.value) == null || H.update();
    });
  }), nt(Me, { currentColor: G }), o({ color: w, show: pe, hide: ve, focus: me, blur: Ye }), (d, P) => (F(), te(r(ft), { ref_key: "popper", ref: v, visible: O.value, "show-arrow": false, "fallback-placements": ["bottom", "top", "right", "left"], offset: 0, "gpu-acceleration": false, "popper-class": [r(l).be("picker", "panel"), r(l).b("dropdown"), d.popperClass], "stop-popper-mouse-event": false, effect: "light", trigger: "click", teleported: d.teleported, transition: `${r(l).namespace.value}-zoom-in-top`, persistent: "", onHide: (H) => W(false) }, { content: L(() => [le((F(), B("div", { onKeydown: st(he, ["esc"]) }, [u("div", { class: k(r(l).be("dropdown", "main-wrapper")) }, [E(Dt, { ref_key: "hue", ref: p, class: "hue-slider", color: r(w), vertical: "" }, null, 8, ["color"]), E(Nt, { ref_key: "sv", ref: n, color: r(w) }, null, 8, ["color"])], 2), d.showAlpha ? (F(), te(Lt, { key: 0, ref_key: "alpha", ref: i, color: r(w) }, null, 8, ["color"])) : ke("v-if", true), d.predefine ? (F(), te(Kt, { key: 1, ref: "predefine", "enable-alpha": d.showAlpha, color: r(w), colors: d.predefine }, null, 8, ["enable-alpha", "color", "colors"])) : ke("v-if", true), u("div", { class: k(r(l).be("dropdown", "btns")) }, [u("span", { class: k(r(l).be("dropdown", "value")) }, [E(r(rt), { ref_key: "inputRef", ref: C, modelValue: M.value, "onUpdate:modelValue": (H) => M.value = H, "validate-event": false, size: "small", onChange: Re }, null, 8, ["modelValue", "onUpdate:modelValue"])], 2), E(r(ue), { class: k(r(l).be("dropdown", "link-btn")), text: "", size: "small", onClick: Ne }, { default: L(() => [de(V(r(f)("el.colorpicker.clear")), 1)]), _: 1 }, 8, ["class"]), E(r(ue), { plain: "", size: "small", class: k(r(l).be("dropdown", "btn")), onClick: ze }, { default: L(() => [de(V(r(f)("el.colorpicker.confirm")), 1)]), _: 1 }, 8, ["class"])], 2)], 40, ["onKeydown"])), [[r(it), We, m.value]])]), default: L(() => [u("div", ct({ id: r(_), ref_key: "triggerRef", ref: m }, d.$attrs, { class: r(Oe), role: "button", "aria-label": r(Be), "aria-labelledby": r(Ie), "aria-description": r(f)("el.colorpicker.description", { color: d.modelValue || "" }), "aria-disabled": r(a), tabindex: r(a) ? void 0 : d.tabindex, onKeydown: Ue, onFocus: r(y), onBlur: r(g) }), [u("div", { class: k(r(l).be("picker", "trigger")), onClick: Ke }, [u("span", { class: k([r(l).be("picker", "color"), r(l).is("alpha", d.showAlpha)]) }, [u("span", { class: k(r(l).be("picker", "color-inner")), style: T({ backgroundColor: r(De) }) }, [le(E(r(Ee), { class: k([r(l).be("picker", "icon"), r(l).is("icon-arrow-down")]) }, { default: L(() => [E(r(ut))]), _: 1 }, 8, ["class"]), [[xe, d.modelValue || b.value]]), le(E(r(Ee), { class: k([r(l).be("picker", "empty"), r(l).is("icon-close")]) }, { default: L(() => [E(r(dt))]), _: 1 }, 8, ["class"]), [[xe, !d.modelValue && !b.value]])], 6)], 2)], 2)], 16, ["id", "aria-label", "aria-labelledby", "aria-description", "aria-disabled", "tabindex", "onFocus", "onBlur"])]), _: 1 }, 8, ["visible", "popper-class", "teleported", "transition", "onHide"]));
} });
var Yt = X(Ut, [["__file", "color-picker.vue"]]);
const jt = pt(Yt), z = "website", ae = "software", qt = /* @__PURE__ */ new Map([[z, "template_style.website"], [ae, "template_style.software"]]), Xt = /* @__PURE__ */ new Map([[z, "/images/info/template-portal.png"], [ae, "/images/info/template-independent.png"]]), Ve = { async getTemplateStyle() {
  const { data: { template_type: e = "{}" } = {} } = await $e.get("/api/enterprises/template_type").catch(Se);
  let o = {};
  try {
    o = JSON.parse(e);
  } catch {
    o = {};
  }
  return o;
}, async saveTemplateStyle(e) {
  return $e.put("/api/enterprises/template_type", { template_type: JSON.stringify(e) }).catch(Se);
} };
const Gt = { class: "mt-5 flex-1 flex flex-col gap-4 bg-white py-6 px-8 box-border" }, Jt = { class: "text-[#1D1E1F] font-semibold" }, Zt = { class: "w-full relative shadow-md overflow-auto" }, Qt = { class: "w-full relative flex items-center justify-between bg-[#F0F0F0] min-w-[720px]" }, el = { class: "absolute top-0 left-[96px] h-[46px] overflow-hidden flex items-center gap-2" }, tl = ["src"], ll = { class: "text-[#1D1E1F] text-sm max-w-[8em] truncate" }, ol = { class: "flex items-center gap-3" }, al = ["src"], nl = { class: "flex items-center gap-2" }, sl = { class: "flex flex-wrap gap-4" }, rl = ["onClick"], il = { class: "text-sm p-1.5" }, cl = { class: "flex items-center flex-wrap gap-7 text-[#4F5052] text-sm" }, ul = { class: "flex items-center gap-2" }, dl = { class: "flex items-center gap-2" }, fl = { class: "flex items-center gap-2" }, pl = { class: "flex items-center gap-2" }, vl = { class: "flex items-center gap-2" }, hl = { class: "flex items-center gap-2" }, xl = R({ __name: "index", setup(e) {
  Y();
  const o = vt();
  ht();
  const s = x(), t = x(true), f = x(false);
  S(() => o.info);
  const l = S(() => o.info.logo || ""), c = S(() => o.info.ico || l.value), h = S(() => o.info.display_name || ""), a = ce({ style_type: z, theme_color: "#2563eb", text_color: "#333333", nav_bg_color: "#ffffff", nav_text_color: "#333333", page_footer_bg_color: "#18191f", page_footer_text_color: "#f2f2f2" }), _ = ce({}), $ = async () => {
    await s.value.validate() && (f.value = true, await Ve.saveTemplateStyle({ ...a }).finally(() => {
      f.value = false;
    }), _t.success(window.$t("action_save_success")), p());
  }, p = async () => {
    t.value = true;
    const n = await Ve.getTemplateStyle().finally(() => {
      t.value = false;
    });
    a.style_type = n.style_type || z, [z, ae].includes(a.style_type) || (a.style_type = z), a.theme_color = n.theme_color || "#3664EF", a.text_color = n.text_color || "#333333", a.nav_bg_color = n.nav_bg_color || "#ffffff", a.nav_text_color = n.nav_text_color || "#333333", a.page_footer_bg_color = n.page_footer_bg_color || "#18191F", a.page_footer_text_color = n.page_footer_text_color || "#F2F2F2";
  };
  return q(() => {
    p();
  }), (n, i) => {
    const v = xt, m = Et, C = kt, A = gt, y = jt, g = bt, I = ue, w = wt, O = yt;
    return F(), te(w, { class: "px-[60px] py-8" }, { default: L(() => [E(v, { title: n.$t("module.template_style") }, null, 8, ["title"]), le((F(), B("div", Gt, [u("h4", Jt, V(n.$t("action_preview")), 1), u("div", Zt, [u("div", Qt, [u("div", { class: "w-[340px] h-[46px]", style: T({ background: `url(${n.$getRealPath({ url: "/images/browser_navigation_bar.png" })})`, "background-size": "1025px 46px" }) }, null, 4), u("div", { class: "w-[280px] h-[46px]", style: T({ background: `url(${n.$getRealPath({ url: "/images/browser_navigation_bar.png" })})`, "background-size": "1025px 46px", "background-position": "right top" }) }, null, 4)]), u("div", el, [u("img", { src: c.value, class: "w-[14px] object-cover" }, null, 8, tl), u("div", ll, V(h.value), 1)]), u("div", { class: "w-full min-w-[720px] h-[79px] px-[32px] box-border flex items-center justify-between rounded", style: T({ backgroundColor: a.nav_bg_color }) }, [u("div", ol, [u("img", { src: l.value, class: "w-[44px] object-cover" }, null, 8, al), u("div", { class: "text-[24px] font-semibold max-w-[12em] truncate", style: T({ color: a.nav_text_color }) }, V(h.value), 5)]), u("div", nl, [u("div", { class: "text-[#fff] text-sm w-[76px] h-[38px] leading-[38px] text-center rounded-md overflow-hidden", style: T({ backgroundColor: a.theme_color }) }, V(n.$t("action_login")), 5)])], 4)]), E(m), E(g, { ref_key: "form_ref", ref: s, class: "flex-1 max-h-[calc(100vh-378px)] overflow-auto", model: a, rules: _, "label-position": "top" }, { default: L(() => [E(A, { label: n.$t("template_style.website_style") }, { default: L(() => [u("ul", sl, [(F(true), B(Le, null, Ae([r(z), r(ae)], (b) => (F(), B("li", { key: b, class: k(["w-[172px] p-1.5 bg-[#F5F5F5] flex flex-col cursor-pointer items-center gap-2 border rounded box-border overflow-hidden text-sm hover:border-[#3664EF] hover:text-[#3664EF]", [a.style_type === b ? "border-[#3664EF] text-[#3664EF]" : "text-[#4F5052]"]]), onClick: mt((M) => a.style_type = b, ["stop"]) }, [u("div", il, V(n.$t(r(qt).get(b))), 1), E(C, { class: "w-full", src: n.$getRealPath({ url: r(Xt).get(b) }), fit: "contain" }, null, 8, ["src"])], 10, rl))), 128))])]), _: 1 }, 8, ["label"]), E(A, { label: n.$t("template_style.theme_color") }, { default: L(() => [u("ul", cl, [u("li", ul, [E(y, { modelValue: a.theme_color, "onUpdate:modelValue": i[0] || (i[0] = (b) => a.theme_color = b) }, null, 8, ["modelValue"]), u("span", null, V(n.$t("template_style.theme_color_v2")), 1)]), u("li", dl, [E(y, { modelValue: a.text_color, "onUpdate:modelValue": i[1] || (i[1] = (b) => a.text_color = b) }, null, 8, ["modelValue"]), u("span", null, V(n.$t("template_style.text_color")), 1)]), u("li", fl, [E(y, { modelValue: a.nav_bg_color, "onUpdate:modelValue": i[2] || (i[2] = (b) => a.nav_bg_color = b) }, null, 8, ["modelValue"]), u("span", null, V(n.$t("template_style.nav_bg_color")), 1)]), u("li", pl, [E(y, { modelValue: a.nav_text_color, "onUpdate:modelValue": i[3] || (i[3] = (b) => a.nav_text_color = b) }, null, 8, ["modelValue"]), u("span", null, V(n.$t("template_style.nav_text_color")), 1)]), u("li", vl, [E(y, { modelValue: a.page_footer_bg_color, "onUpdate:modelValue": i[4] || (i[4] = (b) => a.page_footer_bg_color = b) }, null, 8, ["modelValue"]), u("span", null, V(n.$t("template_style.page_footer_bg_color")), 1)]), u("li", hl, [E(y, { modelValue: a.page_footer_text_color, "onUpdate:modelValue": i[5] || (i[5] = (b) => a.page_footer_text_color = b) }, null, 8, ["modelValue"]), u("span", null, V(n.$t("template_style.page_footer_text_color")), 1)])])]), _: 1 }, 8, ["label"]), i[6] || (i[6] = u("div", { class: "w-full h-8" }, null, -1))]), _: 1, __: [6] }, 8, ["model", "rules"]), E(m, { class: "!my-3" }), E(I, { class: "h-[36px] w-[96px]", type: "primary", size: "large", loading: f.value, onClick: $ }, { default: L(() => [de(V(n.$t("action_save")), 1)]), _: 1 }, 8, ["loading"])])), [[O, t.value]])]), _: 1 });
  };
} });
export {
  xl as default
};
