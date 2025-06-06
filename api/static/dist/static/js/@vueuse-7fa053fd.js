import { s as J, w as U, r as V, g as G, b as H, e as m, f as y, u as q, h as L, i as K, n as X, j as Y } from "./@vue-3b855f7b.js";
var Z = Object.defineProperty, k = Object.defineProperties, ee = Object.getOwnPropertyDescriptors, j = Object.getOwnPropertySymbols, te = Object.prototype.hasOwnProperty, ne = Object.prototype.propertyIsEnumerable, x = (e, t, n) => t in e ? Z(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n, re = (e, t) => {
  for (var n in t || (t = {}))
    te.call(t, n) && x(e, n, t[n]);
  if (j)
    for (var n of j(t))
      ne.call(t, n) && x(e, n, t[n]);
  return e;
}, oe = (e, t) => k(e, ee(t));
function Te(e, t) {
  var n;
  const r = J();
  return U(() => {
    r.value = e();
  }, oe(re({}, t), { flush: (n = t == null ? void 0 : t.flush) != null ? n : "sync" })), V(r);
}
var F;
const S = typeof window < "u", se = (e) => typeof e < "u", ie = (e) => typeof e == "function", ae = (e) => typeof e == "string", w = () => {
}, ue = S && ((F = window == null ? void 0 : window.navigator) == null ? void 0 : F.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function h(e) {
  return typeof e == "function" ? e() : q(e);
}
function B(e, t) {
  function n(...r) {
    return new Promise((s, i) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(s).catch(i);
    });
  }
  return n;
}
function le(e, t = {}) {
  let n, r, s = w;
  const i = (a) => {
    clearTimeout(a), s(), s = w;
  };
  return (a) => {
    const f = h(e), d = h(t.maxWait);
    return n && i(n), f <= 0 || d !== void 0 && d <= 0 ? (r && (i(r), r = null), Promise.resolve(a())) : new Promise((c, v) => {
      s = t.rejectOnCancel ? v : c, d && !r && (r = setTimeout(() => {
        n && i(n), r = null, c(a());
      }, d)), n = setTimeout(() => {
        r && i(r), r = null, c(a());
      }, f);
    });
  };
}
function ce(e, t = true, n = true, r = false) {
  let s = 0, i, u = true, a = w, f;
  const d = () => {
    i && (clearTimeout(i), i = void 0, a(), a = w);
  };
  return (v) => {
    const o = h(e), l = Date.now() - s, p = () => f = v();
    return d(), o <= 0 ? (s = Date.now(), p()) : (l > o && (n || !u) ? (s = Date.now(), p()) : t && (f = new Promise((g, I) => {
      a = r ? I : g, i = setTimeout(() => {
        s = Date.now(), u = true, g(p()), d();
      }, Math.max(0, o - l));
    })), !n && !i && (i = setTimeout(() => u = true, o)), u = false, f);
  };
}
function fe(e) {
  return e;
}
function $(e) {
  return G() ? (H(e), true) : false;
}
function de(e, t = 200, n = {}) {
  return B(le(t, n), e);
}
function je(e, t = 200, n = {}) {
  const r = m(e.value), s = de(() => {
    r.value = e.value;
  }, t, n);
  return y(e, () => s()), r;
}
function xe(e, t = 200, n = false, r = true, s = false) {
  return B(ce(t, n, r, s), e);
}
function pe(e, t = true) {
  L() ? K(e) : t ? e() : X(e);
}
function Fe(e, t, n = {}) {
  const { immediate: r = true } = n, s = m(false);
  let i = null;
  function u() {
    i && (clearTimeout(i), i = null);
  }
  function a() {
    s.value = false, u();
  }
  function f(...d) {
    u(), s.value = true, i = setTimeout(() => {
      s.value = false, i = null, e(...d);
    }, h(t));
  }
  return r && (s.value = true, S && f()), $(a), { isPending: V(s), start: f, stop: a };
}
function _(e) {
  var t;
  const n = h(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const P = S ? window : void 0, ve = S ? window.document : void 0;
function b(...e) {
  let t, n, r, s;
  if (ae(e[0]) || Array.isArray(e[0]) ? ([n, r, s] = e, t = P) : [t, n, r, s] = e, !t)
    return w;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const i = [], u = () => {
    i.forEach((c) => c()), i.length = 0;
  }, a = (c, v, o, l) => (c.addEventListener(v, o, l), () => c.removeEventListener(v, o, l)), f = y(() => [_(t), h(s)], ([c, v]) => {
    u(), c && i.push(...n.flatMap((o) => r.map((l) => a(c, o, l, v))));
  }, { immediate: true, flush: "post" }), d = () => {
    f(), u();
  };
  return $(d), d;
}
let A = false;
function Ae(e, t, n = {}) {
  const { window: r = P, ignore: s = [], capture: i = true, detectIframe: u = false } = n;
  if (!r)
    return;
  ue && !A && (A = true, Array.from(r.document.body.children).forEach((o) => o.addEventListener("click", w)));
  let a = true;
  const f = (o) => s.some((l) => {
    if (typeof l == "string")
      return Array.from(r.document.querySelectorAll(l)).some((p) => p === o.target || o.composedPath().includes(p));
    {
      const p = _(l);
      return p && (o.target === p || o.composedPath().includes(p));
    }
  }), c = [b(r, "click", (o) => {
    const l = _(e);
    if (!(!l || l === o.target || o.composedPath().includes(l))) {
      if (o.detail === 0 && (a = !f(o)), !a) {
        a = true;
        return;
      }
      t(o);
    }
  }, { passive: true, capture: i }), b(r, "pointerdown", (o) => {
    const l = _(e);
    l && (a = !o.composedPath().includes(l) && !f(o));
  }, { passive: true }), u && b(r, "blur", (o) => {
    var l;
    const p = _(e);
    ((l = r.document.activeElement) == null ? void 0 : l.tagName) === "IFRAME" && !(p == null ? void 0 : p.contains(r.document.activeElement)) && t(o);
  })].filter(Boolean);
  return () => c.forEach((o) => o());
}
function z(e, t = false) {
  const n = m(), r = () => n.value = !!e();
  return r(), pe(r, t), n;
}
function me(e) {
  return JSON.parse(JSON.stringify(e));
}
const D = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, N = "__vueuse_ssr_handlers__";
D[N] = D[N] || {};
function De({ document: e = ve } = {}) {
  if (!e)
    return m("visible");
  const t = m(e.visibilityState);
  return b(e, "visibilitychange", () => {
    t.value = e.visibilityState;
  }), t;
}
var C = Object.getOwnPropertySymbols, Oe = Object.prototype.hasOwnProperty, _e = Object.prototype.propertyIsEnumerable, be = (e, t) => {
  var n = {};
  for (var r in e)
    Oe.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && C)
    for (var r of C(e))
      t.indexOf(r) < 0 && _e.call(e, r) && (n[r] = e[r]);
  return n;
};
function Ne(e, t, n = {}) {
  const r = n, { window: s = P } = r, i = be(r, ["window"]);
  let u;
  const a = z(() => s && "ResizeObserver" in s), f = () => {
    u && (u.disconnect(), u = void 0);
  }, d = y(() => _(e), (v) => {
    f(), a.value && s && v && (u = new ResizeObserver(t), u.observe(v, i));
  }, { immediate: true, flush: "post" }), c = () => {
    f(), d();
  };
  return $(c), { isSupported: a, stop: c };
}
var R = Object.getOwnPropertySymbols, ye = Object.prototype.hasOwnProperty, we = Object.prototype.propertyIsEnumerable, he = (e, t) => {
  var n = {};
  for (var r in e)
    ye.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && R)
    for (var r of R(e))
      t.indexOf(r) < 0 && we.call(e, r) && (n[r] = e[r]);
  return n;
};
function Ce(e, t, n = {}) {
  const r = n, { window: s = P } = r, i = he(r, ["window"]);
  let u;
  const a = z(() => s && "MutationObserver" in s), f = () => {
    u && (u.disconnect(), u = void 0);
  }, d = y(() => _(e), (v) => {
    f(), a.value && s && v && (u = new MutationObserver(t), u.observe(v, i));
  }, { immediate: true }), c = () => {
    f(), d();
  };
  return $(c), { isSupported: a, stop: c };
}
var W;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(W || (W = {}));
var ge = Object.defineProperty, M = Object.getOwnPropertySymbols, Pe = Object.prototype.hasOwnProperty, Ie = Object.prototype.propertyIsEnumerable, Q = (e, t, n) => t in e ? ge(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n, Ee = (e, t) => {
  for (var n in t || (t = {}))
    Pe.call(t, n) && Q(e, n, t[n]);
  if (M)
    for (var n of M(t))
      Ie.call(t, n) && Q(e, n, t[n]);
  return e;
};
const Se = { easeInSine: [0.12, 0, 0.39, 0], easeOutSine: [0.61, 1, 0.88, 1], easeInOutSine: [0.37, 0, 0.63, 1], easeInQuad: [0.11, 0, 0.5, 0], easeOutQuad: [0.5, 1, 0.89, 1], easeInOutQuad: [0.45, 0, 0.55, 1], easeInCubic: [0.32, 0, 0.67, 0], easeOutCubic: [0.33, 1, 0.68, 1], easeInOutCubic: [0.65, 0, 0.35, 1], easeInQuart: [0.5, 0, 0.75, 0], easeOutQuart: [0.25, 1, 0.5, 1], easeInOutQuart: [0.76, 0, 0.24, 1], easeInQuint: [0.64, 0, 0.78, 0], easeOutQuint: [0.22, 1, 0.36, 1], easeInOutQuint: [0.83, 0, 0.17, 1], easeInExpo: [0.7, 0, 0.84, 0], easeOutExpo: [0.16, 1, 0.3, 1], easeInOutExpo: [0.87, 0, 0.13, 1], easeInCirc: [0.55, 0, 1, 0.45], easeOutCirc: [0, 0.55, 0.45, 1], easeInOutCirc: [0.85, 0, 0.15, 1], easeInBack: [0.36, 0, 0.66, -0.56], easeOutBack: [0.34, 1.56, 0.64, 1], easeInOutBack: [0.68, -0.6, 0.32, 1.6] };
Ee({ linear: fe }, Se);
function Re(e, t, n, r = {}) {
  var s, i, u;
  const { clone: a = false, passive: f = false, eventName: d, deep: c = false, defaultValue: v } = r, o = L(), l = n || (o == null ? void 0 : o.emit) || ((s = o == null ? void 0 : o.$emit) == null ? void 0 : s.bind(o)) || ((u = (i = o == null ? void 0 : o.proxy) == null ? void 0 : i.$emit) == null ? void 0 : u.bind(o == null ? void 0 : o.proxy));
  let p = d;
  t || (t = "modelValue"), p = d || p || `update:${t.toString()}`;
  const g = (O) => a ? ie(a) ? a(O) : me(O) : O, I = () => se(e[t]) ? g(e[t]) : v;
  if (f) {
    const O = I(), T = m(O);
    return y(() => e[t], (E) => T.value = g(E)), y(T, (E) => {
      (E !== e[t] || c) && l(p, E);
    }, { deep: c }), T;
  } else
    return Y({ get() {
      return I();
    }, set(O) {
      l(p, O);
    } });
}
function We({ window: e = P } = {}) {
  if (!e)
    return m(false);
  const t = m(e.document.hasFocus());
  return b(e, "blur", () => {
    t.value = false;
  }), b(e, "focus", () => {
    t.value = true;
  }), t;
}
export {
  Ne as a,
  _ as b,
  Te as c,
  Fe as d,
  xe as e,
  ue as f,
  Ce as g,
  De as h,
  S as i,
  We as j,
  Re as k,
  Ae as o,
  je as r,
  $ as t,
  b as u
};
