import { ap as Le, aU as ve, aH as W, bL as ze, u as ee, bM as be, bN as Re, bO as Ae, av as Ce, au as _e, bP as Me, r as h, bQ as Be, Q as Ve, al as d, aG as me, W as Se, o as Ee, bR as V, b as g, h as pe, i as f, f as i, T as Ye, d as y, n as u, z as e, aN as ye, az as De, am as Fe, e as I, y as $, Z as Xe, c as E, F as J, B as He, bS as je, q as x, H as Ke, t as Ne, bT as We, bU as Ze, aO as qe, bV as Ge, bI as Qe, G as Ue, g as Je, v as ea, aB as aa, aC as Oe, bi as B, bW as sa, aD as Te, bX as ta, bY as na, bZ as oa, a3 as K, b_ as la, aA as he, b$ as ke, c0 as Ie, c1 as ra, aM as ia, aF as ca, c2 as ua } from "./index-7b696e01.js";
import { t as fe, i as da } from "./position-df18ca50.js";
const fa = Le({ urlList: { type: W(Array), default: () => ze([]) }, zIndex: { type: Number }, initialIndex: { type: Number, default: 0 }, infinite: { type: Boolean, default: true }, hideOnClickModal: Boolean, teleported: Boolean, closeOnPressEscape: { type: Boolean, default: true }, zoomRate: { type: Number, default: 1.2 }, minScale: { type: Number, default: 0.2 }, maxScale: { type: Number, default: 7 }, showProgress: { type: Boolean, default: false }, crossorigin: { type: W(String) } }), va = { close: () => true, switch: (v) => ve(v), rotate: (v) => ve(v) }, ma = ee({ name: "ElImageViewer" }), pa = ee({ ...ma, props: fa, emits: va, setup(v, { expose: ae, emit: L }) {
  var w;
  const l = v, m = { CONTAIN: { name: "contain", icon: be(Re) }, ORIGINAL: { name: "original", icon: be(Ae) } };
  let Y, D = "";
  const { t: se } = Ce(), t = _e("image-viewer"), { nextZIndex: P } = Me(), z = h(), M = h([]), R = Be(), c = h(true), p = h(l.initialIndex), N = Ve(m.CONTAIN), o = h({ scale: 1, deg: 0, offsetX: 0, offsetY: 0, enableTransition: false }), te = h((w = l.zIndex) != null ? w : P()), F = d(() => {
    const { urlList: a } = l;
    return a.length <= 1;
  }), Z = d(() => p.value === 0), X = d(() => p.value === l.urlList.length - 1), H = d(() => l.urlList[p.value]), ne = d(() => [t.e("btn"), t.e("prev"), t.is("disabled", !l.infinite && Z.value)]), oe = d(() => [t.e("btn"), t.e("next"), t.is("disabled", !l.infinite && X.value)]), q = d(() => {
    const { scale: a, deg: r, offsetX: n, offsetY: k, enableTransition: _ } = o.value;
    let S = n / a, T = k / a;
    const j = r * Math.PI / 180, ge = Math.cos(j), we = Math.sin(j);
    S = S * ge + T * we, T = T * ge - n / a * we;
    const de = { transform: `scale(${a}) rotate(${r}deg) translate(${S}px, ${T}px)`, transition: _ ? "transform .3s" : "" };
    return N.value.name === m.CONTAIN.name && (de.maxWidth = de.maxHeight = "100%"), de;
  }), G = d(() => `${p.value + 1} / ${l.urlList.length}`);
  function A() {
    U(), Y == null ? void 0 : Y(), document.body.style.overflow = D, L("close");
  }
  function Q() {
    const a = fe((n) => {
      switch (n.code) {
        case B.esc:
          l.closeOnPressEscape && A();
          break;
        case B.space:
          C();
          break;
        case B.left:
          ce();
          break;
        case B.up:
          O("zoomIn");
          break;
        case B.right:
          ue();
          break;
        case B.down:
          O("zoomOut");
          break;
      }
    }), r = fe((n) => {
      const k = n.deltaY || n.deltaX;
      O(k < 0 ? "zoomIn" : "zoomOut", { zoomRate: l.zoomRate, enableTransition: false });
    });
    R.run(() => {
      V(document, "keydown", a), V(document, "wheel", r);
    });
  }
  function U() {
    R.stop();
  }
  function le() {
    c.value = false;
  }
  function re(a) {
    c.value = false, a.target.alt = se("el.image.error");
  }
  function s(a) {
    if (c.value || a.button !== 0 || !z.value)
      return;
    o.value.enableTransition = false;
    const { offsetX: r, offsetY: n } = o.value, k = a.pageX, _ = a.pageY, S = fe((j) => {
      o.value = { ...o.value, offsetX: r + j.pageX - k, offsetY: n + j.pageY - _ };
    }), T = V(document, "mousemove", S);
    V(document, "mouseup", () => {
      T();
    }), a.preventDefault();
  }
  function b() {
    o.value = { scale: 1, deg: 0, offsetX: 0, offsetY: 0, enableTransition: false };
  }
  function C() {
    if (c.value)
      return;
    const a = sa(m), r = Object.values(m), n = N.value.name, _ = (r.findIndex((S) => S.name === n) + 1) % a.length;
    N.value = m[a[_]], b();
  }
  function ie(a) {
    const r = l.urlList.length;
    p.value = (a + r) % r;
  }
  function ce() {
    Z.value && !l.infinite || ie(p.value - 1);
  }
  function ue() {
    X.value && !l.infinite || ie(p.value + 1);
  }
  function O(a, r = {}) {
    if (c.value)
      return;
    const { minScale: n, maxScale: k } = l, { zoomRate: _, rotateDeg: S, enableTransition: T } = { zoomRate: l.zoomRate, rotateDeg: 90, enableTransition: true, ...r };
    switch (a) {
      case "zoomOut":
        o.value.scale > n && (o.value.scale = Number.parseFloat((o.value.scale / _).toFixed(3)));
        break;
      case "zoomIn":
        o.value.scale < k && (o.value.scale = Number.parseFloat((o.value.scale * _).toFixed(3)));
        break;
      case "clockwise":
        o.value.deg += S, L("rotate", o.value.deg);
        break;
      case "anticlockwise":
        o.value.deg -= S, L("rotate", o.value.deg);
        break;
    }
    o.value.enableTransition = T;
  }
  function $e(a) {
    var r;
    ((r = a.detail) == null ? void 0 : r.focusReason) === "pointer" && a.preventDefault();
  }
  function xe() {
    l.closeOnPressEscape && A();
  }
  function Pe(a) {
    if (a.ctrlKey) {
      if (a.deltaY < 0)
        return a.preventDefault(), false;
      if (a.deltaY > 0)
        return a.preventDefault(), false;
    }
  }
  return me(H, () => {
    Se(() => {
      const a = M.value[0];
      (a == null ? void 0 : a.complete) || (c.value = true);
    });
  }), me(p, (a) => {
    b(), L("switch", a);
  }), Ee(() => {
    Q(), Y = V("wheel", Pe, { passive: false }), D = document.body.style.overflow, document.body.style.overflow = "hidden";
  }), ae({ setActiveItem: ie }), (a, r) => (g(), pe(e(aa), { to: "body", disabled: !a.teleported }, { default: f(() => [i(Ye, { name: "viewer-fade", appear: "" }, { default: f(() => [y("div", { ref_key: "wrapper", ref: z, tabindex: -1, class: u(e(t).e("wrapper")), style: ye({ zIndex: te.value }) }, [i(e(De), { loop: "", trapped: "", "focus-trap-el": z.value, "focus-start-el": "container", onFocusoutPrevented: $e, onReleaseRequested: xe }, { default: f(() => [y("div", { class: u(e(t).e("mask")), onClick: Fe((n) => a.hideOnClickModal && A(), ["self"]) }, null, 10, ["onClick"]), I(" CLOSE "), y("span", { class: u([e(t).e("btn"), e(t).e("close")]), onClick: A }, [i(e($), null, { default: f(() => [i(e(Xe))]), _: 1 })], 2), I(" ARROW "), e(F) ? I("v-if", true) : (g(), E(J, { key: 0 }, [y("span", { class: u(e(ne)), onClick: ce }, [i(e($), null, { default: f(() => [i(e(He))]), _: 1 })], 2), y("span", { class: u(e(oe)), onClick: ue }, [i(e($), null, { default: f(() => [i(e(je))]), _: 1 })], 2)], 64)), a.showProgress ? (g(), E("div", { key: 1, class: u([e(t).e("btn"), e(t).e("progress")]) }, [x(a.$slots, "progress", { activeIndex: p.value, total: a.urlList.length }, () => [Ke(Ne(e(G)), 1)])], 2)) : I("v-if", true), I(" ACTIONS "), y("div", { class: u([e(t).e("btn"), e(t).e("actions")]) }, [y("div", { class: u(e(t).e("actions__inner")) }, [x(a.$slots, "toolbar", { actions: O, prev: ce, next: ue, reset: C, activeIndex: p.value }, () => [i(e($), { onClick: (n) => O("zoomOut") }, { default: f(() => [i(e(We))]), _: 1 }, 8, ["onClick"]), i(e($), { onClick: (n) => O("zoomIn") }, { default: f(() => [i(e(Ze))]), _: 1 }, 8, ["onClick"]), y("i", { class: u(e(t).e("actions__divider")) }, null, 2), i(e($), { onClick: C }, { default: f(() => [(g(), pe(qe(e(N).icon)))]), _: 1 }), y("i", { class: u(e(t).e("actions__divider")) }, null, 2), i(e($), { onClick: (n) => O("anticlockwise") }, { default: f(() => [i(e(Ge))]), _: 1 }, 8, ["onClick"]), i(e($), { onClick: (n) => O("clockwise") }, { default: f(() => [i(e(Qe))]), _: 1 }, 8, ["onClick"])])], 2)], 2), I(" CANVAS "), y("div", { class: u(e(t).e("canvas")) }, [(g(true), E(J, null, Ue(a.urlList, (n, k) => Je((g(), E("img", { ref_for: true, ref: (_) => M.value[k] = _, key: n, src: n, style: ye(e(q)), class: u(e(t).e("img")), crossorigin: a.crossorigin, onLoad: le, onError: re, onMousedown: s }, null, 46, ["src", "crossorigin"])), [[ea, k === p.value]])), 128))], 2), x(a.$slots, "default")]), _: 3 }, 8, ["focus-trap-el"])], 6)]), _: 3 })]), _: 3 }, 8, ["disabled"]));
} });
var ga = Oe(pa, [["__file", "image-viewer.vue"]]);
const wa = Te(ga), ba = Le({ hideOnClickModal: Boolean, src: { type: String, default: "" }, fit: { type: String, values: ["", "contain", "cover", "fill", "none", "scale-down"], default: "" }, loading: { type: String, values: ["eager", "lazy"] }, lazy: Boolean, scrollContainer: { type: W([String, Object]) }, previewSrcList: { type: W(Array), default: () => ze([]) }, previewTeleported: Boolean, zIndex: { type: Number }, initialIndex: { type: Number, default: 0 }, infinite: { type: Boolean, default: true }, closeOnPressEscape: { type: Boolean, default: true }, zoomRate: { type: Number, default: 1.2 }, minScale: { type: Number, default: 0.2 }, maxScale: { type: Number, default: 7 }, showProgress: { type: Boolean, default: false }, crossorigin: { type: W(String) } }), ya = { load: (v) => v instanceof Event, error: (v) => v instanceof Event, switch: (v) => ve(v), close: () => true, show: () => true }, ha = ee({ name: "ElImage", inheritAttrs: false }), ka = ee({ ...ha, props: ba, emits: ya, setup(v, { expose: ae, emit: L }) {
  const w = v, { t: l } = Ce(), m = _e("image"), Y = ta(), D = d(() => na(Object.entries(Y).filter(([s]) => /^(data-|on[A-Z])/i.test(s) || ["id", "style"].includes(s)))), se = oa({ excludeListeners: true, excludeKeys: d(() => Object.keys(D.value)) }), t = h(), P = h(false), z = h(true), M = h(false), R = h(), c = h(), p = K && "loading" in HTMLImageElement.prototype;
  let N;
  const o = d(() => [m.e("inner"), F.value && m.e("preview"), z.value && m.is("loading")]), te = d(() => {
    const { fit: s } = w;
    return K && s ? { objectFit: s } : {};
  }), F = d(() => {
    const { previewSrcList: s } = w;
    return la(s) && s.length > 0;
  }), Z = d(() => {
    const { previewSrcList: s, initialIndex: b } = w;
    let C = b;
    return b > s.length - 1 && (C = 0), C;
  }), X = d(() => w.loading === "eager" ? false : !p && w.loading === "lazy" || w.lazy), H = () => {
    K && (z.value = true, P.value = false, t.value = w.src);
  };
  function ne(s) {
    z.value = false, P.value = false, L("load", s);
  }
  function oe(s) {
    z.value = false, P.value = true, L("error", s);
  }
  function q() {
    da(R.value, c.value) && (H(), Q());
  }
  const G = ua(q, 200, true);
  async function A() {
    var s;
    if (!K)
      return;
    await Se();
    const { scrollContainer: b } = w;
    ra(b) ? c.value = b : ia(b) && b !== "" ? c.value = (s = document.querySelector(b)) != null ? s : void 0 : R.value && (c.value = ca(R.value)), c.value && (N = V(c, "scroll", G), setTimeout(() => q(), 100));
  }
  function Q() {
    !K || !c.value || !G || (N == null ? void 0 : N(), c.value = void 0);
  }
  function U() {
    F.value && (M.value = true, L("show"));
  }
  function le() {
    M.value = false, L("close");
  }
  function re(s) {
    L("switch", s);
  }
  return me(() => w.src, () => {
    X.value ? (z.value = true, P.value = false, Q(), A()) : H();
  }), Ee(() => {
    X.value ? A() : H();
  }), ae({ showPreview: U }), (s, b) => (g(), E("div", he({ ref_key: "container", ref: R }, e(D), { class: [e(m).b(), s.$attrs.class] }), [P.value ? x(s.$slots, "error", { key: 0 }, () => [y("div", { class: u(e(m).e("error")) }, Ne(e(l)("el.image.error")), 3)]) : (g(), E(J, { key: 1 }, [t.value !== void 0 ? (g(), E("img", he({ key: 0 }, e(se), { src: t.value, loading: s.loading, style: e(te), class: e(o), crossorigin: s.crossorigin, onClick: U, onLoad: ne, onError: oe }), null, 16, ["src", "loading", "crossorigin"])) : I("v-if", true), z.value ? (g(), E("div", { key: 1, class: u(e(m).e("wrapper")) }, [x(s.$slots, "placeholder", {}, () => [y("div", { class: u(e(m).e("placeholder")) }, null, 2)])], 2)) : I("v-if", true)], 64)), e(F) ? (g(), E(J, { key: 2 }, [M.value ? (g(), pe(e(wa), { key: 0, "z-index": s.zIndex, "initial-index": e(Z), infinite: s.infinite, "zoom-rate": s.zoomRate, "min-scale": s.minScale, "max-scale": s.maxScale, "show-progress": s.showProgress, "url-list": s.previewSrcList, crossorigin: s.crossorigin, "hide-on-click-modal": s.hideOnClickModal, teleported: s.previewTeleported, "close-on-press-escape": s.closeOnPressEscape, onClose: le, onSwitch: re }, { progress: f((C) => [x(s.$slots, "progress", ke(Ie(C)))]), toolbar: f((C) => [x(s.$slots, "toolbar", ke(Ie(C)))]), default: f(() => [s.$slots.viewer ? (g(), E("div", { key: 0 }, [x(s.$slots, "viewer")])) : I("v-if", true)]), _: 3 }, 8, ["z-index", "initial-index", "infinite", "zoom-rate", "min-scale", "max-scale", "show-progress", "url-list", "crossorigin", "hide-on-click-modal", "teleported", "close-on-press-escape"])) : I("v-if", true)], 64)) : I("v-if", true)], 16));
} });
var Ia = Oe(ka, [["__file", "image.vue"]]);
const Ca = Te(Ia);
export {
  wa as E,
  Ca as a
};
