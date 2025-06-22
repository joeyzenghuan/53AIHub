import { aP as Le, br as ve, b1 as q, c0 as Ce, y as ae, c1 as ye, c2 as Re, c3 as Ae, aV as ze, aU as Se, bS as Ve, r as I, c4 as Me, U as Be, Y as d, $ as me, n as _e, o as Ee, c5 as B, b as v, j as pe, w as f, f as i, T as Ye, d as b, q as u, u as e, a7 as he, aZ as Fe, x as Xe, e as k, G as T, a2 as De, c as L, F as Z, H as He, c6 as je, s as x, L as Ke, t as Ne, c7 as qe, c8 as Ze, ao as We, c9 as Ge, bX as Ue, K as Je, a_ as Qe, a$ as $e, bj as M, ca as ea, b0 as Oe, cb as aa, cc as sa, cd as ta, af as K, ce as na, a3 as be, aH as oa, cf as ke, cg as Ie, ch as la, b5 as ra, bC as ia, ci as ca } from "./index-8579fe4a.js";
import { t as fe, i as ua } from "./position-4ca9dd9d.js";
const da = Le({ urlList: { type: q(Array), default: () => Ce([]) }, zIndex: { type: Number }, initialIndex: { type: Number, default: 0 }, infinite: { type: Boolean, default: true }, hideOnClickModal: Boolean, teleported: Boolean, closeOnPressEscape: { type: Boolean, default: true }, zoomRate: { type: Number, default: 1.2 }, minScale: { type: Number, default: 0.2 }, maxScale: { type: Number, default: 7 }, showProgress: { type: Boolean, default: false }, crossorigin: { type: q(String) } }), fa = { close: () => true, switch: (m) => ve(m), rotate: (m) => ve(m) }, va = ae({ name: "ElImageViewer" }), ma = ae({ ...va, props: da, emits: fa, setup(m, { expose: se, emit: C }) {
  var w;
  const l = m, p = { CONTAIN: { name: "contain", icon: ye(Re) }, ORIGINAL: { name: "original", icon: ye(Ae) } };
  let Y, F = "";
  const { t: te } = ze(), t = Se("image-viewer"), { nextZIndex: P } = Ve(), z = I(), V = I([]), R = Me(), c = I(true), g = I(l.initialIndex), N = Be(p.CONTAIN), o = I({ scale: 1, deg: 0, offsetX: 0, offsetY: 0, enableTransition: false }), ne = I((w = l.zIndex) != null ? w : P()), X = d(() => {
    const { urlList: a } = l;
    return a.length <= 1;
  }), W = d(() => g.value === 0), D = d(() => g.value === l.urlList.length - 1), H = d(() => l.urlList[g.value]), oe = d(() => [t.e("btn"), t.e("prev"), t.is("disabled", !l.infinite && W.value)]), le = d(() => [t.e("btn"), t.e("next"), t.is("disabled", !l.infinite && D.value)]), G = d(() => {
    const { scale: a, deg: r, offsetX: n, offsetY: h, enableTransition: _ } = o.value;
    let E = n / a, O = h / a;
    const j = r * Math.PI / 180, ge = Math.cos(j), we = Math.sin(j);
    E = E * ge + O * we, O = O * ge - n / a * we;
    const de = { transform: `scale(${a}) rotate(${r}deg) translate(${E}px, ${O}px)`, transition: _ ? "transform .3s" : "" };
    return N.value.name === p.CONTAIN.name && (de.maxWidth = de.maxHeight = "100%"), de;
  }), U = d(() => `${g.value + 1} / ${l.urlList.length}`);
  function A() {
    Q(), Y == null ? void 0 : Y(), document.body.style.overflow = F, C("close");
  }
  function J() {
    const a = fe((n) => {
      switch (n.code) {
        case M.esc:
          l.closeOnPressEscape && A();
          break;
        case M.space:
          S();
          break;
        case M.left:
          ce();
          break;
        case M.up:
          $("zoomIn");
          break;
        case M.right:
          ue();
          break;
        case M.down:
          $("zoomOut");
          break;
      }
    }), r = fe((n) => {
      const h = n.deltaY || n.deltaX;
      $(h < 0 ? "zoomIn" : "zoomOut", { zoomRate: l.zoomRate, enableTransition: false });
    });
    R.run(() => {
      B(document, "keydown", a), B(document, "wheel", r);
    });
  }
  function Q() {
    R.stop();
  }
  function re() {
    c.value = false;
  }
  function ie(a) {
    c.value = false, a.target.alt = te("el.image.error");
  }
  function s(a) {
    if (c.value || a.button !== 0 || !z.value)
      return;
    o.value.enableTransition = false;
    const { offsetX: r, offsetY: n } = o.value, h = a.pageX, _ = a.pageY, E = fe((j) => {
      o.value = { ...o.value, offsetX: r + j.pageX - h, offsetY: n + j.pageY - _ };
    }), O = B(document, "mousemove", E);
    B(document, "mouseup", () => {
      O();
    }), a.preventDefault();
  }
  function y() {
    o.value = { scale: 1, deg: 0, offsetX: 0, offsetY: 0, enableTransition: false };
  }
  function S() {
    if (c.value)
      return;
    const a = ea(p), r = Object.values(p), n = N.value.name, _ = (r.findIndex((E) => E.name === n) + 1) % a.length;
    N.value = p[a[_]], y();
  }
  function ee(a) {
    const r = l.urlList.length;
    g.value = (a + r) % r;
  }
  function ce() {
    W.value && !l.infinite || ee(g.value - 1);
  }
  function ue() {
    D.value && !l.infinite || ee(g.value + 1);
  }
  function $(a, r = {}) {
    if (c.value)
      return;
    const { minScale: n, maxScale: h } = l, { zoomRate: _, rotateDeg: E, enableTransition: O } = { zoomRate: l.zoomRate, rotateDeg: 90, enableTransition: true, ...r };
    switch (a) {
      case "zoomOut":
        o.value.scale > n && (o.value.scale = Number.parseFloat((o.value.scale / _).toFixed(3)));
        break;
      case "zoomIn":
        o.value.scale < h && (o.value.scale = Number.parseFloat((o.value.scale * _).toFixed(3)));
        break;
      case "clockwise":
        o.value.deg += E, C("rotate", o.value.deg);
        break;
      case "anticlockwise":
        o.value.deg -= E, C("rotate", o.value.deg);
        break;
    }
    o.value.enableTransition = O;
  }
  function Te(a) {
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
    _e(() => {
      const a = V.value[0];
      (a == null ? void 0 : a.complete) || (c.value = true);
    });
  }), me(g, (a) => {
    y(), C("switch", a);
  }), Ee(() => {
    J(), Y = B("wheel", Pe, { passive: false }), F = document.body.style.overflow, document.body.style.overflow = "hidden";
  }), se({ setActiveItem: ee }), (a, r) => (v(), pe(e(Qe), { to: "body", disabled: !a.teleported }, { default: f(() => [i(Ye, { name: "viewer-fade", appear: "" }, { default: f(() => [b("div", { ref_key: "wrapper", ref: z, tabindex: -1, class: u(e(t).e("wrapper")), style: he({ zIndex: ne.value }) }, [i(e(Fe), { loop: "", trapped: "", "focus-trap-el": z.value, "focus-start-el": "container", onFocusoutPrevented: Te, onReleaseRequested: xe }, { default: f(() => [b("div", { class: u(e(t).e("mask")), onClick: Xe((n) => a.hideOnClickModal && A(), ["self"]) }, null, 10, ["onClick"]), k(" CLOSE "), b("span", { class: u([e(t).e("btn"), e(t).e("close")]), onClick: A }, [i(e(T), null, { default: f(() => [i(e(De))]), _: 1 })], 2), k(" ARROW "), e(X) ? k("v-if", true) : (v(), L(Z, { key: 0 }, [b("span", { class: u(e(oe)), onClick: ce }, [i(e(T), null, { default: f(() => [i(e(He))]), _: 1 })], 2), b("span", { class: u(e(le)), onClick: ue }, [i(e(T), null, { default: f(() => [i(e(je))]), _: 1 })], 2)], 64)), a.$slots.progress || a.showProgress ? (v(), L("div", { key: 1, class: u([e(t).e("btn"), e(t).e("progress")]) }, [x(a.$slots, "progress", { activeIndex: g.value, total: a.urlList.length }, () => [Ke(Ne(e(U)), 1)])], 2)) : k("v-if", true), k(" ACTIONS "), b("div", { class: u([e(t).e("btn"), e(t).e("actions")]) }, [b("div", { class: u(e(t).e("actions__inner")) }, [x(a.$slots, "toolbar", { actions: $, prev: ce, next: ue, reset: S, activeIndex: g.value, setActiveItem: ee }, () => [i(e(T), { onClick: (n) => $("zoomOut") }, { default: f(() => [i(e(qe))]), _: 1 }, 8, ["onClick"]), i(e(T), { onClick: (n) => $("zoomIn") }, { default: f(() => [i(e(Ze))]), _: 1 }, 8, ["onClick"]), b("i", { class: u(e(t).e("actions__divider")) }, null, 2), i(e(T), { onClick: S }, { default: f(() => [(v(), pe(We(e(N).icon)))]), _: 1 }), b("i", { class: u(e(t).e("actions__divider")) }, null, 2), i(e(T), { onClick: (n) => $("anticlockwise") }, { default: f(() => [i(e(Ge))]), _: 1 }, 8, ["onClick"]), i(e(T), { onClick: (n) => $("clockwise") }, { default: f(() => [i(e(Ue))]), _: 1 }, 8, ["onClick"])])], 2)], 2), k(" CANVAS "), b("div", { class: u(e(t).e("canvas")) }, [(v(true), L(Z, null, Je(a.urlList, (n, h) => (v(), L(Z, { key: h }, [h === g.value ? (v(), L("img", { key: 0, ref_for: true, ref: (_) => V.value[h] = _, src: n, style: he(e(G)), class: u(e(t).e("img")), crossorigin: a.crossorigin, onLoad: re, onError: ie, onMousedown: s }, null, 46, ["src", "crossorigin"])) : k("v-if", true)], 64))), 128))], 2), x(a.$slots, "default")]), _: 3 }, 8, ["focus-trap-el"])], 6)]), _: 3 })]), _: 3 }, 8, ["disabled"]));
} });
var pa = $e(ma, [["__file", "image-viewer.vue"]]);
const ga = Oe(pa), wa = Le({ hideOnClickModal: Boolean, src: { type: String, default: "" }, fit: { type: String, values: ["", "contain", "cover", "fill", "none", "scale-down"], default: "" }, loading: { type: String, values: ["eager", "lazy"] }, lazy: Boolean, scrollContainer: { type: q([String, Object]) }, previewSrcList: { type: q(Array), default: () => Ce([]) }, previewTeleported: Boolean, zIndex: { type: Number }, initialIndex: { type: Number, default: 0 }, infinite: { type: Boolean, default: true }, closeOnPressEscape: { type: Boolean, default: true }, zoomRate: { type: Number, default: 1.2 }, minScale: { type: Number, default: 0.2 }, maxScale: { type: Number, default: 7 }, showProgress: { type: Boolean, default: false }, crossorigin: { type: q(String) } }), ya = { load: (m) => m instanceof Event, error: (m) => m instanceof Event, switch: (m) => ve(m), close: () => true, show: () => true }, ha = ae({ name: "ElImage", inheritAttrs: false }), ba = ae({ ...ha, props: wa, emits: ya, setup(m, { expose: se, emit: C }) {
  const w = m, { t: l } = ze(), p = Se("image"), Y = aa(), F = d(() => sa(Object.entries(Y).filter(([s]) => /^(data-|on[A-Z])/i.test(s) || ["id", "style"].includes(s)))), te = ta({ excludeListeners: true, excludeKeys: d(() => Object.keys(F.value)) }), t = I(), P = I(false), z = I(true), V = I(false), R = I(), c = I(), g = K && "loading" in HTMLImageElement.prototype;
  let N;
  const o = d(() => [p.e("inner"), X.value && p.e("preview"), z.value && p.is("loading")]), ne = d(() => {
    const { fit: s } = w;
    return K && s ? { objectFit: s } : {};
  }), X = d(() => {
    const { previewSrcList: s } = w;
    return na(s) && s.length > 0;
  }), W = d(() => {
    const { previewSrcList: s, initialIndex: y } = w;
    let S = y;
    return y > s.length - 1 && (S = 0), S;
  }), D = d(() => w.loading === "eager" ? false : !g && w.loading === "lazy" || w.lazy), H = () => {
    K && (z.value = true, P.value = false, t.value = w.src);
  };
  function oe(s) {
    z.value = false, P.value = false, C("load", s);
  }
  function le(s) {
    z.value = false, P.value = true, C("error", s);
  }
  function G() {
    ua(R.value, c.value) && (H(), J());
  }
  const U = ca(G, 200, true);
  async function A() {
    var s;
    if (!K)
      return;
    await _e();
    const { scrollContainer: y } = w;
    la(y) ? c.value = y : ra(y) && y !== "" ? c.value = (s = document.querySelector(y)) != null ? s : void 0 : R.value && (c.value = ia(R.value)), c.value && (N = B(c, "scroll", U), setTimeout(() => G(), 100));
  }
  function J() {
    !K || !c.value || !U || (N == null ? void 0 : N(), c.value = void 0);
  }
  function Q() {
    X.value && (V.value = true, C("show"));
  }
  function re() {
    V.value = false, C("close");
  }
  function ie(s) {
    C("switch", s);
  }
  return me(() => w.src, () => {
    D.value ? (z.value = true, P.value = false, J(), A()) : H();
  }), Ee(() => {
    D.value ? A() : H();
  }), se({ showPreview: Q }), (s, y) => (v(), L("div", be({ ref_key: "container", ref: R }, e(F), { class: [e(p).b(), s.$attrs.class] }), [P.value ? x(s.$slots, "error", { key: 0 }, () => [b("div", { class: u(e(p).e("error")) }, Ne(e(l)("el.image.error")), 3)]) : (v(), L(Z, { key: 1 }, [t.value !== void 0 ? (v(), L("img", be({ key: 0 }, e(te), { src: t.value, loading: s.loading, style: e(ne), class: e(o), crossorigin: s.crossorigin, onClick: Q, onLoad: oe, onError: le }), null, 16, ["src", "loading", "crossorigin"])) : k("v-if", true), z.value ? (v(), L("div", { key: 1, class: u(e(p).e("wrapper")) }, [x(s.$slots, "placeholder", {}, () => [b("div", { class: u(e(p).e("placeholder")) }, null, 2)])], 2)) : k("v-if", true)], 64)), e(X) ? (v(), L(Z, { key: 2 }, [V.value ? (v(), pe(e(ga), { key: 0, "z-index": s.zIndex, "initial-index": e(W), infinite: s.infinite, "zoom-rate": s.zoomRate, "min-scale": s.minScale, "max-scale": s.maxScale, "show-progress": s.showProgress, "url-list": s.previewSrcList, crossorigin: s.crossorigin, "hide-on-click-modal": s.hideOnClickModal, teleported: s.previewTeleported, "close-on-press-escape": s.closeOnPressEscape, onClose: re, onSwitch: ie }, oa({ toolbar: f((S) => [x(s.$slots, "toolbar", ke(Ie(S)))]), default: f(() => [s.$slots.viewer ? (v(), L("div", { key: 0 }, [x(s.$slots, "viewer")])) : k("v-if", true)]), _: 2 }, [s.$slots.progress ? { name: "progress", fn: f((S) => [x(s.$slots, "progress", ke(Ie(S)))]) } : void 0]), 1032, ["z-index", "initial-index", "infinite", "zoom-rate", "min-scale", "max-scale", "show-progress", "url-list", "crossorigin", "hide-on-click-modal", "teleported", "close-on-press-escape"])) : k("v-if", true)], 64)) : k("v-if", true)], 16));
} });
var ka = $e(ba, [["__file", "image.vue"]]);
const Ca = Oe(ka);
export {
  Ca as E,
  ga as a
};
