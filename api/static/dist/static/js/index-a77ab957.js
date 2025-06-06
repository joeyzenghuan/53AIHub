import { ap as De, aH as He, a3 as tt, b3 as Z, av as Oe, Q as Ee, al as M, au as J, r as $, o as Q, aG as N, ax as Ce, bi as H, u as O, b as F, c as V, d, n as y, z as i, aN as P, aC as ee, b7 as at, bj as ot, aR as lt, aS as oe, aM as j, b8 as ie, aV as nt, cy as xe, ak as st, w as rt, F as Ke, G as Re, aX as it, aY as ct, a_ as ut, aZ as dt, ca as ft, ae as fe, W as ae, an as ht, h as le, i as A, g as ne, b0 as Me, f as k, e as ce, X as pt, $ as he, H as pe, t as S, cz as mt, aA as vt, y as Fe, I as _t, v as Se, Z as gt, ab as bt, a$ as Pe, aD as yt, s as Te, k as Ae, b4 as wt, b5 as kt, am as $t, a9 as Et, aa as Ct, ac as xt } from "./index-7b696e01.js";
import { v as Mt } from "./el-loading-5050bc7d.js";
import { _ as Ft } from "./index-71389ea4.js";
import { a as St } from "./el-image-d432a419.js";
import { E as Pt } from "./el-divider-0c731d25.js";
import { _ as Tt } from "./index.vue_vue_type_script_setup_true_lang-ca2646ba.js";
import { a as me } from "./position-df18ca50.js";
import { d as At } from "./debounce-c1af5016.js";
const Vt = De({ color: { type: He(Object), required: true }, vertical: { type: Boolean, default: false } });
let ue = false;
function G(t, a) {
  if (!tt)
    return;
  const o = function(l) {
    var s;
    (s = a.drag) == null || s.call(a, l);
  }, e = function(l) {
    var s;
    document.removeEventListener("mousemove", o), document.removeEventListener("mouseup", e), document.removeEventListener("touchmove", o), document.removeEventListener("touchend", e), document.onselectstart = null, document.ondragstart = null, ue = false, (s = a.end) == null || s.call(a, l);
  }, n = function(l) {
    var s;
    ue || (l.preventDefault(), document.onselectstart = () => false, document.ondragstart = () => false, document.addEventListener("mousemove", o), document.addEventListener("mouseup", e), document.addEventListener("touchmove", o), document.addEventListener("touchend", e), ue = true, (s = a.start) == null || s.call(a, l));
  };
  t.addEventListener("mousedown", n), t.addEventListener("touchstart", n, { passive: false });
}
const Lt = (t) => {
  const a = Z(), { t: o } = Oe(), e = Ee(), n = Ee(), l = M(() => t.color.get("alpha")), s = M(() => o("el.colorpicker.alphaLabel"));
  function h(p) {
    var c;
    p.target !== e.value && r(p), (c = e.value) == null || c.focus();
  }
  function r(p) {
    if (!n.value || !e.value)
      return;
    const u = a.vnode.el.getBoundingClientRect(), { clientX: v, clientY: _ } = me(p);
    if (t.vertical) {
      let E = _ - u.top;
      E = Math.max(e.value.offsetHeight / 2, E), E = Math.min(E, u.height - e.value.offsetHeight / 2), t.color.set("alpha", Math.round((E - e.value.offsetHeight / 2) / (u.height - e.value.offsetHeight) * 100));
    } else {
      let E = v - u.left;
      E = Math.max(e.value.offsetWidth / 2, E), E = Math.min(E, u.width - e.value.offsetWidth / 2), t.color.set("alpha", Math.round((E - e.value.offsetWidth / 2) / (u.width - e.value.offsetWidth) * 100));
    }
  }
  function m(p) {
    const { code: c, shiftKey: u } = p, v = u ? 10 : 1;
    switch (c) {
      case H.left:
      case H.down:
        p.preventDefault(), p.stopPropagation(), x(-v);
        break;
      case H.right:
      case H.up:
        p.preventDefault(), p.stopPropagation(), x(v);
        break;
    }
  }
  function x(p) {
    let c = l.value + p;
    c = c < 0 ? 0 : c > 100 ? 100 : c, t.color.set("alpha", c);
  }
  return { thumb: e, bar: n, alpha: l, alphaLabel: s, handleDrag: r, handleClick: h, handleKeydown: m };
}, Nt = (t, { bar: a, thumb: o, handleDrag: e }) => {
  const n = Z(), l = J("color-alpha-slider"), s = $(0), h = $(0), r = $();
  function m() {
    if (!o.value || t.vertical)
      return 0;
    const w = n.vnode.el, g = t.color.get("alpha");
    return w ? Math.round(g * (w.offsetWidth - o.value.offsetWidth / 2) / 100) : 0;
  }
  function x() {
    if (!o.value)
      return 0;
    const w = n.vnode.el;
    if (!t.vertical)
      return 0;
    const g = t.color.get("alpha");
    return w ? Math.round(g * (w.offsetHeight - o.value.offsetHeight / 2) / 100) : 0;
  }
  function p() {
    if (t.color && t.color.value) {
      const { r: w, g, b: I } = t.color.toRgb();
      return `linear-gradient(to right, rgba(${w}, ${g}, ${I}, 0) 0%, rgba(${w}, ${g}, ${I}, 1) 100%)`;
    }
    return "";
  }
  function c() {
    s.value = m(), h.value = x(), r.value = p();
  }
  Q(() => {
    if (!a.value || !o.value)
      return;
    const w = { drag: (g) => {
      e(g);
    }, end: (g) => {
      e(g);
    } };
    G(a.value, w), G(o.value, w), c();
  }), N(() => t.color.get("alpha"), () => c()), N(() => t.color.value, () => c());
  const u = M(() => [l.b(), l.is("vertical", t.vertical)]), v = M(() => l.e("bar")), _ = M(() => l.e("thumb")), E = M(() => ({ background: r.value })), L = M(() => ({ left: Ce(s.value), top: Ce(h.value) }));
  return { rootKls: u, barKls: v, barStyle: E, thumbKls: _, thumbStyle: L, update: c };
}, It = "ElColorAlphaSlider", Bt = O({ name: It }), Dt = O({ ...Bt, props: Vt, setup(t, { expose: a }) {
  const o = t, { alpha: e, alphaLabel: n, bar: l, thumb: s, handleDrag: h, handleClick: r, handleKeydown: m } = Lt(o), { rootKls: x, barKls: p, barStyle: c, thumbKls: u, thumbStyle: v, update: _ } = Nt(o, { bar: l, thumb: s, handleDrag: h });
  return a({ update: _, bar: l, thumb: s }), (E, L) => (F(), V("div", { class: y(i(x)) }, [d("div", { ref_key: "bar", ref: l, class: y(i(p)), style: P(i(c)), onClick: i(r) }, null, 14, ["onClick"]), d("div", { ref_key: "thumb", ref: s, class: y(i(u)), style: P(i(v)), "aria-label": i(n), "aria-valuenow": i(e), "aria-orientation": E.vertical ? "vertical" : "horizontal", "aria-valuemin": "0", "aria-valuemax": "100", role: "slider", tabindex: "0", onKeydown: i(m) }, null, 46, ["aria-label", "aria-valuenow", "aria-orientation", "onKeydown"])], 2));
} });
var Ht = ee(Dt, [["__file", "alpha-slider.vue"]]);
const Ot = O({ name: "ElColorHueSlider", props: { color: { type: Object, required: true }, vertical: Boolean }, setup(t) {
  const a = J("color-hue-slider"), o = Z(), e = $(), n = $(), l = $(0), s = $(0), h = M(() => t.color.get("hue"));
  N(() => h.value, () => {
    c();
  });
  function r(u) {
    u.target !== e.value && m(u);
  }
  function m(u) {
    if (!n.value || !e.value)
      return;
    const _ = o.vnode.el.getBoundingClientRect(), { clientX: E, clientY: L } = me(u);
    let w;
    if (t.vertical) {
      let g = L - _.top;
      g = Math.min(g, _.height - e.value.offsetHeight / 2), g = Math.max(e.value.offsetHeight / 2, g), w = Math.round((g - e.value.offsetHeight / 2) / (_.height - e.value.offsetHeight) * 360);
    } else {
      let g = E - _.left;
      g = Math.min(g, _.width - e.value.offsetWidth / 2), g = Math.max(e.value.offsetWidth / 2, g), w = Math.round((g - e.value.offsetWidth / 2) / (_.width - e.value.offsetWidth) * 360);
    }
    t.color.set("hue", w);
  }
  function x() {
    if (!e.value)
      return 0;
    const u = o.vnode.el;
    if (t.vertical)
      return 0;
    const v = t.color.get("hue");
    return u ? Math.round(v * (u.offsetWidth - e.value.offsetWidth / 2) / 360) : 0;
  }
  function p() {
    if (!e.value)
      return 0;
    const u = o.vnode.el;
    if (!t.vertical)
      return 0;
    const v = t.color.get("hue");
    return u ? Math.round(v * (u.offsetHeight - e.value.offsetHeight / 2) / 360) : 0;
  }
  function c() {
    l.value = x(), s.value = p();
  }
  return Q(() => {
    if (!n.value || !e.value)
      return;
    const u = { drag: (v) => {
      m(v);
    }, end: (v) => {
      m(v);
    } };
    G(n.value, u), G(e.value, u), c();
  }), { bar: n, thumb: e, thumbLeft: l, thumbTop: s, hueValue: h, handleClick: r, update: c, ns: a };
} });
function Kt(t, a, o, e, n, l) {
  return F(), V("div", { class: y([t.ns.b(), t.ns.is("vertical", t.vertical)]) }, [d("div", { ref: "bar", class: y(t.ns.e("bar")), onClick: t.handleClick }, null, 10, ["onClick"]), d("div", { ref: "thumb", class: y(t.ns.e("thumb")), style: P({ left: t.thumbLeft + "px", top: t.thumbTop + "px" }) }, null, 6)], 2);
}
var Rt = ee(Ot, [["render", Kt], ["__file", "hue-slider.vue"]]);
const Wt = De({ modelValue: String, id: String, showAlpha: Boolean, colorFormat: String, disabled: Boolean, size: at, popperClass: { type: String, default: "" }, tabindex: { type: [String, Number], default: 0 }, teleported: ot.teleported, predefine: { type: He(Array) }, validateEvent: { type: Boolean, default: true }, ...lt(["ariaLabel"]) }), zt = { [oe]: (t) => j(t) || ie(t), [nt]: (t) => j(t) || ie(t), activeChange: (t) => j(t) || ie(t), focus: (t) => t instanceof FocusEvent, blur: (t) => t instanceof FocusEvent }, We = Symbol("colorPickerContextKey"), Ve = function(t, a, o) {
  return [t, a * o / ((t = (2 - a) * o) < 1 ? t : 2 - t) || 0, t / 2];
}, Ut = function(t) {
  return j(t) && t.includes(".") && Number.parseFloat(t) === 1;
}, Yt = function(t) {
  return j(t) && t.includes("%");
}, z = function(t, a) {
  Ut(t) && (t = "100%");
  const o = Yt(t);
  return t = Math.min(a, Math.max(0, Number.parseFloat(`${t}`))), o && (t = Number.parseInt(`${t * a}`, 10) / 100), Math.abs(t - a) < 1e-6 ? 1 : t % a / Number.parseFloat(a);
}, Le = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" }, se = (t) => {
  t = Math.min(Math.round(t), 255);
  const a = Math.floor(t / 16), o = t % 16;
  return `${Le[a] || a}${Le[o] || o}`;
}, Ne = function({ r: t, g: a, b: o }) {
  return Number.isNaN(+t) || Number.isNaN(+a) || Number.isNaN(+o) ? "" : `#${se(t)}${se(a)}${se(o)}`;
}, de = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 }, K = function(t) {
  return t.length === 2 ? (de[t[0].toUpperCase()] || +t[0]) * 16 + (de[t[1].toUpperCase()] || +t[1]) : de[t[1].toUpperCase()] || +t[1];
}, jt = function(t, a, o) {
  a = a / 100, o = o / 100;
  let e = a;
  const n = Math.max(o, 0.01);
  o *= 2, a *= o <= 1 ? o : 2 - o, e *= n <= 1 ? n : 2 - n;
  const l = (o + a) / 2, s = o === 0 ? 2 * e / (n + e) : 2 * a / (o + a);
  return { h: t, s: s * 100, v: l * 100 };
}, Ie = (t, a, o) => {
  t = z(t, 255), a = z(a, 255), o = z(o, 255);
  const e = Math.max(t, a, o), n = Math.min(t, a, o);
  let l;
  const s = e, h = e - n, r = e === 0 ? 0 : h / e;
  if (e === n)
    l = 0;
  else {
    switch (e) {
      case t: {
        l = (a - o) / h + (a < o ? 6 : 0);
        break;
      }
      case a: {
        l = (o - t) / h + 2;
        break;
      }
      case o: {
        l = (t - a) / h + 4;
        break;
      }
    }
    l /= 6;
  }
  return { h: l * 360, s: r * 100, v: s * 100 };
}, Y = function(t, a, o) {
  t = z(t, 360) * 6, a = z(a, 100), o = z(o, 100);
  const e = Math.floor(t), n = t - e, l = o * (1 - a), s = o * (1 - n * a), h = o * (1 - (1 - n) * a), r = e % 6, m = [o, s, l, l, h, o][r], x = [h, o, o, s, l, l][r], p = [l, l, h, o, o, s][r];
  return { r: Math.round(m * 255), g: Math.round(x * 255), b: Math.round(p * 255) };
};
class X {
  constructor(a = {}) {
    this._hue = 0, this._saturation = 100, this._value = 100, this._alpha = 100, this.enableAlpha = false, this.format = "hex", this.value = "";
    for (const o in a)
      xe(a, o) && (this[o] = a[o]);
    a.value ? this.fromString(a.value) : this.doOnChange();
  }
  set(a, o) {
    if (arguments.length === 1 && typeof a == "object") {
      for (const e in a)
        xe(a, e) && this.set(e, a[e]);
      return;
    }
    this[`_${a}`] = o, this.doOnChange();
  }
  get(a) {
    return a === "alpha" ? Math.floor(this[`_${a}`]) : this[`_${a}`];
  }
  toRgb() {
    return Y(this._hue, this._saturation, this._value);
  }
  fromString(a) {
    if (!a) {
      this._hue = 0, this._saturation = 100, this._value = 100, this.doOnChange();
      return;
    }
    const o = (e, n, l) => {
      this._hue = Math.max(0, Math.min(360, e)), this._saturation = Math.max(0, Math.min(100, n)), this._value = Math.max(0, Math.min(100, l)), this.doOnChange();
    };
    if (a.includes("hsl")) {
      const e = a.replace(/hsla|hsl|\(|\)/gm, "").split(/\s|,/g).filter((n) => n !== "").map((n, l) => l > 2 ? Number.parseFloat(n) : Number.parseInt(n, 10));
      if (e.length === 4 ? this._alpha = Number.parseFloat(e[3]) * 100 : e.length === 3 && (this._alpha = 100), e.length >= 3) {
        const { h: n, s: l, v: s } = jt(e[0], e[1], e[2]);
        o(n, l, s);
      }
    } else if (a.includes("hsv")) {
      const e = a.replace(/hsva|hsv|\(|\)/gm, "").split(/\s|,/g).filter((n) => n !== "").map((n, l) => l > 2 ? Number.parseFloat(n) : Number.parseInt(n, 10));
      e.length === 4 ? this._alpha = Number.parseFloat(e[3]) * 100 : e.length === 3 && (this._alpha = 100), e.length >= 3 && o(e[0], e[1], e[2]);
    } else if (a.includes("rgb")) {
      const e = a.replace(/rgba|rgb|\(|\)/gm, "").split(/\s|,/g).filter((n) => n !== "").map((n, l) => l > 2 ? Number.parseFloat(n) : Number.parseInt(n, 10));
      if (e.length === 4 ? this._alpha = Number.parseFloat(e[3]) * 100 : e.length === 3 && (this._alpha = 100), e.length >= 3) {
        const { h: n, s: l, v: s } = Ie(e[0], e[1], e[2]);
        o(n, l, s);
      }
    } else if (a.includes("#")) {
      const e = a.replace("#", "").trim();
      if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(e))
        return;
      let n, l, s;
      e.length === 3 ? (n = K(e[0] + e[0]), l = K(e[1] + e[1]), s = K(e[2] + e[2])) : (e.length === 6 || e.length === 8) && (n = K(e.slice(0, 2)), l = K(e.slice(2, 4)), s = K(e.slice(4, 6))), e.length === 8 ? this._alpha = K(e.slice(6)) / 255 * 100 : (e.length === 3 || e.length === 6) && (this._alpha = 100);
      const { h, s: r, v: m } = Ie(n, l, s);
      o(h, r, m);
    }
  }
  compare(a) {
    return Math.abs(a._hue - this._hue) < 2 && Math.abs(a._saturation - this._saturation) < 1 && Math.abs(a._value - this._value) < 1 && Math.abs(a._alpha - this._alpha) < 1;
  }
  doOnChange() {
    const { _hue: a, _saturation: o, _value: e, _alpha: n, format: l } = this;
    if (this.enableAlpha)
      switch (l) {
        case "hsl": {
          const s = Ve(a, o / 100, e / 100);
          this.value = `hsla(${a}, ${Math.round(s[1] * 100)}%, ${Math.round(s[2] * 100)}%, ${this.get("alpha") / 100})`;
          break;
        }
        case "hsv": {
          this.value = `hsva(${a}, ${Math.round(o)}%, ${Math.round(e)}%, ${this.get("alpha") / 100})`;
          break;
        }
        case "hex": {
          this.value = `${Ne(Y(a, o, e))}${se(n * 255 / 100)}`;
          break;
        }
        default: {
          const { r: s, g: h, b: r } = Y(a, o, e);
          this.value = `rgba(${s}, ${h}, ${r}, ${this.get("alpha") / 100})`;
        }
      }
    else
      switch (l) {
        case "hsl": {
          const s = Ve(a, o / 100, e / 100);
          this.value = `hsl(${a}, ${Math.round(s[1] * 100)}%, ${Math.round(s[2] * 100)}%)`;
          break;
        }
        case "hsv": {
          this.value = `hsv(${a}, ${Math.round(o)}%, ${Math.round(e)}%)`;
          break;
        }
        case "rgb": {
          const { r: s, g: h, b: r } = Y(a, o, e);
          this.value = `rgb(${s}, ${h}, ${r})`;
          break;
        }
        default:
          this.value = Ne(Y(a, o, e));
      }
  }
}
const Xt = O({ props: { colors: { type: Array, required: true }, color: { type: Object, required: true }, enableAlpha: { type: Boolean, required: true } }, setup(t) {
  const a = J("color-predefine"), { currentColor: o } = st(We), e = $(l(t.colors, t.color));
  N(() => o.value, (s) => {
    const h = new X();
    h.fromString(s), e.value.forEach((r) => {
      r.selected = h.compare(r);
    });
  }), rt(() => {
    e.value = l(t.colors, t.color);
  });
  function n(s) {
    t.color.fromString(t.colors[s]);
  }
  function l(s, h) {
    return s.map((r) => {
      const m = new X();
      return m.enableAlpha = t.enableAlpha, m.format = "rgba", m.fromString(r), m.selected = m.value === h.value, m;
    });
  }
  return { rgbaColors: e, handleSelect: n, ns: a };
} });
function qt(t, a, o, e, n, l) {
  return F(), V("div", { class: y(t.ns.b()) }, [d("div", { class: y(t.ns.e("colors")) }, [(F(true), V(Ke, null, Re(t.rgbaColors, (s, h) => (F(), V("div", { key: t.colors[h], class: y([t.ns.e("color-selector"), t.ns.is("alpha", s._alpha < 100), { selected: s.selected }]), onClick: (r) => t.handleSelect(h) }, [d("div", { style: P({ backgroundColor: s.value }) }, null, 4)], 10, ["onClick"]))), 128))], 2)], 2);
}
var Gt = ee(Xt, [["render", qt], ["__file", "predefine.vue"]]);
const Zt = O({ name: "ElSlPanel", props: { color: { type: Object, required: true } }, setup(t) {
  const a = J("color-svpanel"), o = Z(), e = $(0), n = $(0), l = $("hsl(0, 100%, 50%)"), s = M(() => {
    const m = t.color.get("hue"), x = t.color.get("value");
    return { hue: m, value: x };
  });
  function h() {
    const m = t.color.get("saturation"), x = t.color.get("value"), p = o.vnode.el, { clientWidth: c, clientHeight: u } = p;
    n.value = m * c / 100, e.value = (100 - x) * u / 100, l.value = `hsl(${t.color.get("hue")}, 100%, 50%)`;
  }
  function r(m) {
    const p = o.vnode.el.getBoundingClientRect(), { clientX: c, clientY: u } = me(m);
    let v = c - p.left, _ = u - p.top;
    v = Math.max(0, v), v = Math.min(v, p.width), _ = Math.max(0, _), _ = Math.min(_, p.height), n.value = v, e.value = _, t.color.set({ saturation: v / p.width * 100, value: 100 - _ / p.height * 100 });
  }
  return N(() => s.value, () => {
    h();
  }), Q(() => {
    G(o.vnode.el, { drag: (m) => {
      r(m);
    }, end: (m) => {
      r(m);
    } }), h();
  }), { cursorTop: e, cursorLeft: n, background: l, colorValue: s, handleDrag: r, update: h, ns: a };
} });
function Jt(t, a, o, e, n, l) {
  return F(), V("div", { class: y(t.ns.b()), style: P({ backgroundColor: t.background }) }, [d("div", { class: y(t.ns.e("white")) }, null, 2), d("div", { class: y(t.ns.e("black")) }, null, 2), d("div", { class: y(t.ns.e("cursor")), style: P({ top: t.cursorTop + "px", left: t.cursorLeft + "px" }) }, [d("div")], 6)], 6);
}
var Qt = ee(Zt, [["render", Jt], ["__file", "sv-panel.vue"]]);
const ea = O({ name: "ElColorPicker" }), ta = O({ ...ea, props: Wt, emits: zt, setup(t, { expose: a, emit: o }) {
  const e = t, { t: n } = Oe(), l = J("color"), { formItem: s } = it(), h = ct(), r = ut(), { inputId: m, isLabeledByFormItem: x } = dt(e, { formItemContext: s }), p = $(), c = $(), u = $(), v = $(), _ = $(), E = $(), { isFocused: L, handleFocus: w, handleBlur: g } = ft(_, { beforeFocus() {
    return r.value;
  }, beforeBlur(f) {
    var T;
    return (T = v.value) == null ? void 0 : T.isFocusInsideContent(f);
  }, afterBlur() {
    U(false), W();
  } });
  let I = true;
  const C = fe(new X({ enableAlpha: e.showAlpha, format: e.colorFormat || "", value: e.modelValue })), B = $(false), b = $(false), R = $(""), ze = M(() => !e.modelValue && !b.value ? "transparent" : Xe(C, e.showAlpha)), re = M(() => !e.modelValue && !b.value ? "" : C.value), Ue = M(() => x.value ? void 0 : e.ariaLabel || n("el.colorpicker.defaultLabel")), Ye = M(() => x.value ? s == null ? void 0 : s.labelId : void 0), je = M(() => [l.b("picker"), l.is("disabled", r.value), l.bm("picker", h.value), l.is("focused", L.value)]);
  function Xe(f, T) {
    if (!(f instanceof X))
      throw new TypeError("color should be instance of _color Class");
    const { r: D, g: ke, b: $e } = f.toRgb();
    return T ? `rgba(${D}, ${ke}, ${$e}, ${f.get("alpha") / 100})` : `rgb(${D}, ${ke}, ${$e})`;
  }
  function U(f) {
    B.value = f;
  }
  const te = At(U, 100, { leading: true });
  function _e() {
    r.value || U(true);
  }
  function ge() {
    te(false), W();
  }
  function W() {
    ae(() => {
      e.modelValue ? C.fromString(e.modelValue) : (C.value = "", ae(() => {
        b.value = false;
      }));
    });
  }
  function qe() {
    r.value || (B.value && W(), te(!B.value));
  }
  function be() {
    C.fromString(R.value);
  }
  function Ge() {
    const f = C.value;
    o(oe, f), o("change", f), e.validateEvent && (s == null ? void 0 : s.validate("change").catch((T) => Pe())), te(false), ae(() => {
      const T = new X({ enableAlpha: e.showAlpha, format: e.colorFormat || "", value: e.modelValue });
      C.compare(T) || W();
    });
  }
  function Ze() {
    te(false), o(oe, null), o("change", null), e.modelValue !== null && e.validateEvent && (s == null ? void 0 : s.validate("change").catch((f) => Pe())), W();
  }
  function Je() {
    B.value && (ge(), L.value && we());
  }
  function ye(f) {
    f.preventDefault(), f.stopPropagation(), U(false), W();
  }
  function Qe(f) {
    switch (f.code) {
      case H.enter:
      case H.numpadEnter:
      case H.space:
        f.preventDefault(), f.stopPropagation(), _e(), E.value.focus();
        break;
      case H.esc:
        ye(f);
        break;
    }
  }
  function we() {
    _.value.focus();
  }
  function et() {
    _.value.blur();
  }
  return Q(() => {
    e.modelValue && (R.value = re.value);
  }), N(() => e.modelValue, (f) => {
    f ? f && f !== C.value && (I = false, C.fromString(f)) : b.value = false;
  }), N(() => [e.colorFormat, e.showAlpha], () => {
    C.enableAlpha = e.showAlpha, C.format = e.colorFormat || C.format, C.doOnChange(), o(oe, C.value);
  }), N(() => re.value, (f) => {
    R.value = f, I && o("activeChange", f), I = true;
  }), N(() => C.value, () => {
    !e.modelValue && !b.value && (b.value = true);
  }), N(() => B.value, () => {
    ae(() => {
      var f, T, D;
      (f = p.value) == null || f.update(), (T = c.value) == null || T.update(), (D = u.value) == null || D.update();
    });
  }), ht(We, { currentColor: re }), a({ color: C, show: _e, hide: ge, focus: we, blur: et }), (f, T) => (F(), le(i(bt), { ref_key: "popper", ref: v, visible: B.value, "show-arrow": false, "fallback-placements": ["bottom", "top", "right", "left"], offset: 0, "gpu-acceleration": false, "popper-class": [i(l).be("picker", "panel"), i(l).b("dropdown"), f.popperClass], "stop-popper-mouse-event": false, effect: "light", trigger: "click", teleported: f.teleported, transition: `${i(l).namespace.value}-zoom-in-top`, persistent: "", onHide: (D) => U(false) }, { content: A(() => [ne((F(), V("div", { onKeydown: Me(ye, ["esc"]) }, [d("div", { class: y(i(l).be("dropdown", "main-wrapper")) }, [k(Rt, { ref_key: "hue", ref: p, class: "hue-slider", color: i(C), vertical: "" }, null, 8, ["color"]), k(Qt, { ref_key: "sv", ref: c, color: i(C) }, null, 8, ["color"])], 2), f.showAlpha ? (F(), le(Ht, { key: 0, ref_key: "alpha", ref: u, color: i(C) }, null, 8, ["color"])) : ce("v-if", true), f.predefine ? (F(), le(Gt, { key: 1, ref: "predefine", "enable-alpha": f.showAlpha, color: i(C), colors: f.predefine }, null, 8, ["enable-alpha", "color", "colors"])) : ce("v-if", true), d("div", { class: y(i(l).be("dropdown", "btns")) }, [d("span", { class: y(i(l).be("dropdown", "value")) }, [k(i(pt), { ref_key: "inputRef", ref: E, modelValue: R.value, "onUpdate:modelValue": (D) => R.value = D, "validate-event": false, size: "small", onKeyup: Me(be, ["enter"]), onBlur: be }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])], 2), k(i(he), { class: y(i(l).be("dropdown", "link-btn")), text: "", size: "small", onClick: Ze }, { default: A(() => [pe(S(i(n)("el.colorpicker.clear")), 1)]), _: 1 }, 8, ["class"]), k(i(he), { plain: "", size: "small", class: y(i(l).be("dropdown", "btn")), onClick: Ge }, { default: A(() => [pe(S(i(n)("el.colorpicker.confirm")), 1)]), _: 1 }, 8, ["class"])], 2)], 40, ["onKeydown"])), [[i(mt), Je, _.value]])]), default: A(() => [d("div", vt({ id: i(m), ref_key: "triggerRef", ref: _ }, f.$attrs, { class: i(je), role: "button", "aria-label": i(Ue), "aria-labelledby": i(Ye), "aria-description": i(n)("el.colorpicker.description", { color: f.modelValue || "" }), "aria-disabled": i(r), tabindex: i(r) ? -1 : f.tabindex, onKeydown: Qe, onFocus: i(w), onBlur: i(g) }), [i(r) ? (F(), V("div", { key: 0, class: y(i(l).be("picker", "mask")) }, null, 2)) : ce("v-if", true), d("div", { class: y(i(l).be("picker", "trigger")), onClick: qe }, [d("span", { class: y([i(l).be("picker", "color"), i(l).is("alpha", f.showAlpha)]) }, [d("span", { class: y(i(l).be("picker", "color-inner")), style: P({ backgroundColor: i(ze) }) }, [ne(k(i(Fe), { class: y([i(l).be("picker", "icon"), i(l).is("icon-arrow-down")]) }, { default: A(() => [k(i(_t))]), _: 1 }, 8, ["class"]), [[Se, f.modelValue || b.value]]), ne(k(i(Fe), { class: y([i(l).be("picker", "empty"), i(l).is("icon-close")]) }, { default: A(() => [k(i(gt))]), _: 1 }, 8, ["class"]), [[Se, !f.modelValue && !b.value]])], 6)], 2)], 2)], 16, ["id", "aria-label", "aria-labelledby", "aria-description", "aria-disabled", "tabindex", "onFocus", "onBlur"])]), _: 1 }, 8, ["visible", "popper-class", "teleported", "transition", "onHide"]));
} });
var aa = ee(ta, [["__file", "color-picker.vue"]]);
const oa = yt(aa), q = "website", ve = "software", la = /* @__PURE__ */ new Map([[q, "template_style.website"], [ve, "template_style.software"]]), na = /* @__PURE__ */ new Map([[q, "/images/info/template-portal.png"], [ve, "/images/info/template-independent.png"]]), Be = { async getTemplateStyle() {
  const { data: { template_type: t = "{}" } = {} } = await Te.get("/api/enterprises/template_type").catch(Ae);
  let a = {};
  try {
    a = JSON.parse(t);
  } catch {
    a = {};
  }
  return a;
}, async saveTemplateStyle(t) {
  return Te.put("/api/enterprises/template_type", { template_type: JSON.stringify(t) }).catch(Ae);
} };
const sa = { class: "mt-5 flex-1 flex flex-col gap-4 bg-white py-6 px-8 box-border" }, ra = { class: "text-[#1D1E1F] font-semibold" }, ia = { class: "w-full relative shadow-md overflow-auto" }, ca = { class: "w-full relative flex items-center justify-between bg-[#F0F0F0] min-w-[720px]" }, ua = { class: "absolute top-0 left-[96px] h-[46px] overflow-hidden flex items-center gap-2" }, da = ["src"], fa = { class: "text-[#1D1E1F] text-sm max-w-[8em] truncate" }, ha = { class: "flex items-center gap-3" }, pa = ["src"], ma = { class: "flex items-center gap-2" }, va = { class: "flex flex-wrap gap-4" }, _a = ["onClick"], ga = { class: "text-sm p-1.5" }, ba = { class: "flex items-center flex-wrap gap-7 text-[#4F5052] text-sm" }, ya = { class: "flex items-center gap-2" }, wa = { class: "flex items-center gap-2" }, ka = { class: "flex items-center gap-2" }, $a = { class: "flex items-center gap-2" }, Ea = { class: "flex items-center gap-2" }, Ca = { class: "flex items-center gap-2" }, La = O({ __name: "index", setup(t) {
  Z();
  const a = wt();
  kt();
  const o = $(), e = $(true), n = $(false);
  M(() => a.info);
  const l = M(() => a.info.logo || ""), s = M(() => a.info.ico || l.value), h = M(() => a.info.display_name || ""), r = fe({ style_type: q, theme_color: "#2563eb", text_color: "#333333", nav_bg_color: "#ffffff", nav_text_color: "#333333", page_footer_bg_color: "#18191f", page_footer_text_color: "#f2f2f2" }), m = fe({}), x = async () => {
    await o.value.validate() && (n.value = true, await Be.saveTemplateStyle({ ...r }).finally(() => {
      n.value = false;
    }), Et.success(window.$t("action_save_success")), p());
  }, p = async () => {
    e.value = true;
    const c = await Be.getTemplateStyle().finally(() => {
      e.value = false;
    });
    r.style_type = c.style_type || q, r.theme_color = c.theme_color || "#3664EF", r.text_color = c.text_color || "#333333", r.nav_bg_color = c.nav_bg_color || "#ffffff", r.nav_text_color = c.nav_text_color || "#333333", r.page_footer_bg_color = c.page_footer_bg_color || "#18191F", r.page_footer_text_color = c.page_footer_text_color || "#F2F2F2";
  };
  return Q(() => {
    p();
  }), (c, u) => {
    const v = Tt, _ = Pt, E = St, L = Ct, w = oa, g = xt, I = he, C = Ft, B = Mt;
    return F(), le(C, { class: "px-[60px] py-8" }, { default: A(() => [k(v, { title: c.$t("module.template_style") }, null, 8, ["title"]), ne((F(), V("div", sa, [d("h4", ra, S(c.$t("action_preview")), 1), d("div", ia, [d("div", ca, [d("div", { class: "w-[340px] h-[46px]", style: P({ background: `url(${c.$getRealPath({ url: "/images/browser_navigation_bar.png" })})`, "background-size": "1025px 46px" }) }, null, 4), d("div", { class: "w-[280px] h-[46px]", style: P({ background: `url(${c.$getRealPath({ url: "/images/browser_navigation_bar.png" })})`, "background-size": "1025px 46px", "background-position": "right top" }) }, null, 4)]), d("div", ua, [d("img", { src: s.value, class: "w-[14px] object-cover" }, null, 8, da), d("div", fa, S(h.value), 1)]), d("div", { class: "w-full min-w-[720px] h-[79px] px-[32px] box-border flex items-center justify-between rounded", style: P({ backgroundColor: r.nav_bg_color }) }, [d("div", ha, [d("img", { src: l.value, class: "w-[44px] object-cover" }, null, 8, pa), d("div", { class: "text-[24px] font-semibold max-w-[12em] truncate", style: P({ color: r.nav_text_color }) }, S(h.value), 5)]), d("div", ma, [d("div", { class: "text-[#fff] text-sm w-[76px] h-[38px] leading-[38px] text-center rounded-md overflow-hidden", style: P({ backgroundColor: r.theme_color }) }, S(c.$t("action_login")), 5)])], 4)]), k(_), k(g, { ref_key: "form_ref", ref: o, class: "flex-1 max-h-[calc(100vh-378px)] overflow-auto", model: r, rules: m, "label-position": "top" }, { default: A(() => [k(L, { label: c.$t("template_style.website_style") }, { default: A(() => [d("ul", va, [(F(true), V(Ke, null, Re([i(q), i(ve)], (b) => (F(), V("li", { key: b, class: y(["w-[172px] p-1.5 bg-[#F5F5F5] flex flex-col cursor-pointer items-center gap-2 border rounded box-border overflow-hidden text-sm hover:border-[#3664EF] hover:text-[#3664EF]", [r.style_type === b ? "border-[#3664EF] text-[#3664EF]" : "text-[#4F5052] opacity-60 pointer-events-none"]]), onClick: $t((R) => r.style_type = b, ["stop"]) }, [d("div", ga, S(c.$t(i(la).get(b))), 1), k(E, { class: "w-full", src: c.$getRealPath({ url: i(na).get(b) }), fit: "contain" }, null, 8, ["src"])], 10, _a))), 128))])]), _: 1 }, 8, ["label"]), k(L, { label: c.$t("template_style.theme_color") }, { default: A(() => [d("ul", ba, [d("li", ya, [k(w, { modelValue: r.theme_color, "onUpdate:modelValue": u[0] || (u[0] = (b) => r.theme_color = b) }, null, 8, ["modelValue"]), d("span", null, S(c.$t("template_style.theme_color_v2")), 1)]), d("li", wa, [k(w, { modelValue: r.text_color, "onUpdate:modelValue": u[1] || (u[1] = (b) => r.text_color = b) }, null, 8, ["modelValue"]), d("span", null, S(c.$t("template_style.text_color")), 1)]), d("li", ka, [k(w, { modelValue: r.nav_bg_color, "onUpdate:modelValue": u[2] || (u[2] = (b) => r.nav_bg_color = b) }, null, 8, ["modelValue"]), d("span", null, S(c.$t("template_style.nav_bg_color")), 1)]), d("li", $a, [k(w, { modelValue: r.nav_text_color, "onUpdate:modelValue": u[3] || (u[3] = (b) => r.nav_text_color = b) }, null, 8, ["modelValue"]), d("span", null, S(c.$t("template_style.nav_text_color")), 1)]), d("li", Ea, [k(w, { modelValue: r.page_footer_bg_color, "onUpdate:modelValue": u[4] || (u[4] = (b) => r.page_footer_bg_color = b) }, null, 8, ["modelValue"]), d("span", null, S(c.$t("template_style.page_footer_bg_color")), 1)]), d("li", Ca, [k(w, { modelValue: r.page_footer_text_color, "onUpdate:modelValue": u[5] || (u[5] = (b) => r.page_footer_text_color = b) }, null, 8, ["modelValue"]), d("span", null, S(c.$t("template_style.page_footer_text_color")), 1)])])]), _: 1 }, 8, ["label"]), u[6] || (u[6] = d("div", { class: "w-full h-8" }, null, -1))]), _: 1 }, 8, ["model", "rules"]), k(_, { class: "!my-3" }), k(I, { class: "h-[36px] w-[96px]", type: "primary", size: "large", loading: n.value, onClick: x }, { default: A(() => [pe(S(c.$t("action_save")), 1)]), _: 1 }, 8, ["loading"])])), [[B, e.value]])]), _: 1 });
  };
} });
export {
  La as default
};
