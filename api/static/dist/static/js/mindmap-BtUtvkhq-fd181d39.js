import { R as Ou, r as n0, w as _u, o as Bu, a as qu, b as Z0, c as Sa, d as Xe, n as Ts, t as r0, g as s0, v as o0, f as un, A as dn, h as Aa, i as Ta, T as Ma, E as Lu, D as Du, j as Ru } from "./index-6feda8be.js";
import { K as Pu, X as $u, O as Fu, H as Ca, Y as Hu, F as i0, L as rn, q as fo, G as Vu, V as ju, B as Uu, a as Ku, I as Ms, E as Cs } from "./helper-7WMIPux3-736d9956.js";
import { t as Ea, l as Na } from "./min-DLf0xQMm-9aab427e.js";
import { h as Gu } from "./ordinal-DfAQgscy-dbc3c131.js";
import { c as Xu } from "./colors-BD7LS4qt-ca223d59.js";
import { r as Wu, d as Yu } from "./copy-BS31ARP0-bcf717fb.js";
import "./init-DjUOC4st-cac434d1.js";
function Qu(t2, e) {
  let n, r = -1, i = -1;
  if (e === void 0)
    for (const l of t2)
      ++i, l != null && (n > l || n === void 0 && l >= l) && (n = l, r = i);
  else
    for (let l of t2)
      (l = e(l, ++i, t2)) != null && (n > l || n === void 0 && l >= l) && (n = l, r = i);
  return r;
}
function Zu(t2) {
  let e;
  for (; e = t2.sourceEvent; )
    t2 = e;
  return t2;
}
function pn(t2, e) {
  if (t2 = Zu(t2), e === void 0 && (e = t2.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = t2.clientX, r.y = t2.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (e.getBoundingClientRect) {
      var i = e.getBoundingClientRect();
      return [t2.clientX - i.left - e.clientLeft, t2.clientY - i.top - e.clientTop];
    }
  }
  return [t2.pageX, t2.pageY];
}
const Xs = { capture: true, passive: false };
function Ws(t2) {
  t2.preventDefault(), t2.stopImmediatePropagation();
}
function Ju(t2) {
  var e = t2.document.documentElement, n = rn(t2).on("dragstart.drag", Ws, Xs);
  "onselectstart" in e ? n.on("selectstart.drag", Ws, Xs) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function e1(t2, e) {
  var n = t2.document.documentElement, r = rn(t2).on("dragstart.drag", null);
  e && (r.on("click.drag", Ws, Xs), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
var t1 = 1e-12;
function Ia(t2) {
  return ((t2 = Math.exp(t2)) + 1 / t2) / 2;
}
function n1(t2) {
  return ((t2 = Math.exp(t2)) - 1 / t2) / 2;
}
function r1(t2) {
  return ((t2 = Math.exp(2 * t2)) - 1) / (t2 + 1);
}
const s1 = function t(e, n, r) {
  function i(l, h) {
    var p = l[0], m = l[1], y = l[2], k = h[0], T = h[1], N = h[2], z = k - p, S = T - m, M = z * z + S * S, C, B;
    if (M < t1)
      B = Math.log(N / y) / e, C = function(te) {
        return [p + te * z, m + te * S, y * Math.exp(e * te * B)];
      };
    else {
      var H = Math.sqrt(M), F = (N * N - y * y + r * M) / (2 * y * n * H), V = (N * N - y * y - r * M) / (2 * N * n * H), U = Math.log(Math.sqrt(F * F + 1) - F), X = Math.log(Math.sqrt(V * V + 1) - V);
      B = (X - U) / e, C = function(te) {
        var j = te * B, le = Ia(U), ge = y / (n * H) * (le * r1(e * j + U) - n1(U));
        return [p + ge * z, m + ge * S, y * le / Ia(e * j + U)];
      };
    }
    return C.duration = B * 1e3 * e / Math.SQRT2, C;
  }
  return i.rho = function(l) {
    var h = Math.max(1e-3, +l), p = h * h, m = p * p;
    return t(h, p, m);
  }, i;
}(Math.SQRT2, 2, 4), o1 = Xu("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function i1(t2) {
  return t2.source;
}
function a1(t2) {
  return t2.target;
}
function l1(t2) {
  let e = i1, n = a1, r = ju, i = Uu, l = null, h = null, p = $u(m);
  function m() {
    let y;
    const k = Fu.call(arguments), T = e.apply(this, k), N = n.apply(this, k);
    if (l == null && (h = t2(y = p())), h.lineStart(), k[0] = T, h.point(+r.apply(this, k), +i.apply(this, k)), k[0] = N, h.point(+r.apply(this, k), +i.apply(this, k)), h.lineEnd(), y)
      return h = null, y + "" || null;
  }
  return m.source = function(y) {
    return arguments.length ? (e = y, m) : e;
  }, m.target = function(y) {
    return arguments.length ? (n = y, m) : n;
  }, m.x = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : Ca(+y), m) : r;
  }, m.y = function(y) {
    return arguments.length ? (i = typeof y == "function" ? y : Ca(+y), m) : i;
  }, m.context = function(y) {
    return arguments.length ? (y == null ? l = h = null : h = t2(l = y), m) : l;
  }, m;
}
function c1() {
  return l1(Hu);
}
const J0 = (t2) => () => t2;
function h1(t2, { sourceEvent: e, target: n, transform: r, dispatch: i }) {
  Object.defineProperties(this, { type: { value: t2, enumerable: true, configurable: true }, sourceEvent: { value: e, enumerable: true, configurable: true }, target: { value: n, enumerable: true, configurable: true }, transform: { value: r, enumerable: true, configurable: true }, _: { value: i } });
}
function Es(t2) {
  t2.stopImmediatePropagation();
}
function a0(t2) {
  t2.preventDefault(), t2.stopImmediatePropagation();
}
function u1(t2) {
  return (!t2.ctrlKey || t2.type === "wheel") && !t2.button;
}
function d1() {
  var t2 = this;
  return t2 instanceof SVGElement ? (t2 = t2.ownerSVGElement || t2, t2.hasAttribute("viewBox") ? (t2 = t2.viewBox.baseVal, [[t2.x, t2.y], [t2.x + t2.width, t2.y + t2.height]]) : [[0, 0], [t2.width.baseVal.value, t2.height.baseVal.value]]) : [[0, 0], [t2.clientWidth, t2.clientHeight]];
}
function za() {
  return this.__zoom || fo;
}
function p1(t2) {
  return -t2.deltaY * (t2.deltaMode === 1 ? 0.05 : t2.deltaMode ? 1 : 2e-3) * (t2.ctrlKey ? 10 : 1);
}
function m1() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function f1(t2, e, n) {
  var r = t2.invertX(e[0][0]) - n[0][0], i = t2.invertX(e[1][0]) - n[1][0], l = t2.invertY(e[0][1]) - n[0][1], h = t2.invertY(e[1][1]) - n[1][1];
  return t2.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), h > l ? (l + h) / 2 : Math.min(0, l) || Math.max(0, h));
}
function g1() {
  var t2 = u1, e = d1, n = f1, r = p1, i = m1, l = [0, 1 / 0], h = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], p = 250, m = s1, y = Ku("start", "zoom", "end"), k, T, N, z = 500, S = 150, M = 0, C = 10;
  function B($) {
    $.property("__zoom", za).on("wheel.zoom", j, { passive: false }).on("mousedown.zoom", le).on("dblclick.zoom", ge).filter(i).on("touchstart.zoom", pe).on("touchmove.zoom", ae).on("touchend.zoom touchcancel.zoom", Ae).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  B.transform = function($, se, Y, ie) {
    var me = $.selection ? $.selection() : $;
    me.property("__zoom", za), $ !== me ? U($, se, Y, ie) : me.interrupt().each(function() {
      X(this, arguments).event(ie).start().zoom(null, typeof se == "function" ? se.apply(this, arguments) : se).end();
    });
  }, B.scaleBy = function($, se, Y, ie) {
    B.scaleTo($, function() {
      var me = this.__zoom.k, we = typeof se == "function" ? se.apply(this, arguments) : se;
      return me * we;
    }, Y, ie);
  }, B.scaleTo = function($, se, Y, ie) {
    B.transform($, function() {
      var me = e.apply(this, arguments), we = this.__zoom, Z = Y == null ? V(me) : typeof Y == "function" ? Y.apply(this, arguments) : Y, Ee = we.invert(Z), R = typeof se == "function" ? se.apply(this, arguments) : se;
      return n(F(H(we, R), Z, Ee), me, h);
    }, Y, ie);
  }, B.translateBy = function($, se, Y, ie) {
    B.transform($, function() {
      return n(this.__zoom.translate(typeof se == "function" ? se.apply(this, arguments) : se, typeof Y == "function" ? Y.apply(this, arguments) : Y), e.apply(this, arguments), h);
    }, null, ie);
  }, B.translateTo = function($, se, Y, ie, me) {
    B.transform($, function() {
      var we = e.apply(this, arguments), Z = this.__zoom, Ee = ie == null ? V(we) : typeof ie == "function" ? ie.apply(this, arguments) : ie;
      return n(fo.translate(Ee[0], Ee[1]).scale(Z.k).translate(typeof se == "function" ? -se.apply(this, arguments) : -se, typeof Y == "function" ? -Y.apply(this, arguments) : -Y), we, h);
    }, ie, me);
  };
  function H($, se) {
    return se = Math.max(l[0], Math.min(l[1], se)), se === $.k ? $ : new Ms(se, $.x, $.y);
  }
  function F($, se, Y) {
    var ie = se[0] - Y[0] * $.k, me = se[1] - Y[1] * $.k;
    return ie === $.x && me === $.y ? $ : new Ms($.k, ie, me);
  }
  function V($) {
    return [(+$[0][0] + +$[1][0]) / 2, (+$[0][1] + +$[1][1]) / 2];
  }
  function U($, se, Y, ie) {
    $.on("start.zoom", function() {
      X(this, arguments).event(ie).start();
    }).on("interrupt.zoom end.zoom", function() {
      X(this, arguments).event(ie).end();
    }).tween("zoom", function() {
      var me = this, we = arguments, Z = X(me, we).event(ie), Ee = e.apply(me, we), R = Y == null ? V(Ee) : typeof Y == "function" ? Y.apply(me, we) : Y, oe = Math.max(Ee[1][0] - Ee[0][0], Ee[1][1] - Ee[0][1]), ve = me.__zoom, Le = typeof se == "function" ? se.apply(me, we) : se, pt = m(ve.invert(R).concat(oe / ve.k), Le.invert(R).concat(oe / Le.k));
      return function(mt) {
        if (mt === 1)
          mt = Le;
        else {
          var Et = pt(mt), Wn = oe / Et[2];
          mt = new Ms(Wn, R[0] - Et[0] * Wn, R[1] - Et[1] * Wn);
        }
        Z.zoom(null, mt);
      };
    });
  }
  function X($, se, Y) {
    return !Y && $.__zooming || new te($, se);
  }
  function te($, se) {
    this.that = $, this.args = se, this.active = 0, this.sourceEvent = null, this.extent = e.apply($, se), this.taps = 0;
  }
  te.prototype = { event: function($) {
    return $ && (this.sourceEvent = $), this;
  }, start: function() {
    return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
  }, zoom: function($, se) {
    return this.mouse && $ !== "mouse" && (this.mouse[1] = se.invert(this.mouse[0])), this.touch0 && $ !== "touch" && (this.touch0[1] = se.invert(this.touch0[0])), this.touch1 && $ !== "touch" && (this.touch1[1] = se.invert(this.touch1[0])), this.that.__zoom = se, this.emit("zoom"), this;
  }, end: function() {
    return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
  }, emit: function($) {
    var se = rn(this.that).datum();
    y.call($, this.that, new h1($, { sourceEvent: this.sourceEvent, target: B, transform: this.that.__zoom, dispatch: y }), se);
  } };
  function j($, ...se) {
    if (!t2.apply(this, arguments))
      return;
    var Y = X(this, se).event($), ie = this.__zoom, me = Math.max(l[0], Math.min(l[1], ie.k * Math.pow(2, r.apply(this, arguments)))), we = pn($);
    if (Y.wheel)
      (Y.mouse[0][0] !== we[0] || Y.mouse[0][1] !== we[1]) && (Y.mouse[1] = ie.invert(Y.mouse[0] = we)), clearTimeout(Y.wheel);
    else {
      if (ie.k === me)
        return;
      Y.mouse = [we, ie.invert(we)], Cs(this), Y.start();
    }
    a0($), Y.wheel = setTimeout(Z, S), Y.zoom("mouse", n(F(H(ie, me), Y.mouse[0], Y.mouse[1]), Y.extent, h));
    function Z() {
      Y.wheel = null, Y.end();
    }
  }
  function le($, ...se) {
    if (N || !t2.apply(this, arguments))
      return;
    var Y = $.currentTarget, ie = X(this, se, true).event($), me = rn($.view).on("mousemove.zoom", R, true).on("mouseup.zoom", oe, true), we = pn($, Y), Z = $.clientX, Ee = $.clientY;
    Ju($.view), Es($), ie.mouse = [we, this.__zoom.invert(we)], Cs(this), ie.start();
    function R(ve) {
      if (a0(ve), !ie.moved) {
        var Le = ve.clientX - Z, pt = ve.clientY - Ee;
        ie.moved = Le * Le + pt * pt > M;
      }
      ie.event(ve).zoom("mouse", n(F(ie.that.__zoom, ie.mouse[0] = pn(ve, Y), ie.mouse[1]), ie.extent, h));
    }
    function oe(ve) {
      me.on("mousemove.zoom mouseup.zoom", null), e1(ve.view, ie.moved), a0(ve), ie.event(ve).end();
    }
  }
  function ge($, ...se) {
    if (t2.apply(this, arguments)) {
      var Y = this.__zoom, ie = pn($.changedTouches ? $.changedTouches[0] : $, this), me = Y.invert(ie), we = Y.k * ($.shiftKey ? 0.5 : 2), Z = n(F(H(Y, we), ie, me), e.apply(this, se), h);
      a0($), p > 0 ? rn(this).transition().duration(p).call(U, Z, ie, $) : rn(this).call(B.transform, Z, ie, $);
    }
  }
  function pe($, ...se) {
    if (t2.apply(this, arguments)) {
      var Y = $.touches, ie = Y.length, me = X(this, se, $.changedTouches.length === ie).event($), we, Z, Ee, R;
      for (Es($), Z = 0; Z < ie; ++Z)
        Ee = Y[Z], R = pn(Ee, this), R = [R, this.__zoom.invert(R), Ee.identifier], me.touch0 ? !me.touch1 && me.touch0[2] !== R[2] && (me.touch1 = R, me.taps = 0) : (me.touch0 = R, we = true, me.taps = 1 + !!k);
      k && (k = clearTimeout(k)), we && (me.taps < 2 && (T = R[0], k = setTimeout(function() {
        k = null;
      }, z)), Cs(this), me.start());
    }
  }
  function ae($, ...se) {
    if (this.__zooming) {
      var Y = X(this, se).event($), ie = $.changedTouches, me = ie.length, we, Z, Ee, R;
      for (a0($), we = 0; we < me; ++we)
        Z = ie[we], Ee = pn(Z, this), Y.touch0 && Y.touch0[2] === Z.identifier ? Y.touch0[0] = Ee : Y.touch1 && Y.touch1[2] === Z.identifier && (Y.touch1[0] = Ee);
      if (Z = Y.that.__zoom, Y.touch1) {
        var oe = Y.touch0[0], ve = Y.touch0[1], Le = Y.touch1[0], pt = Y.touch1[1], mt = (mt = Le[0] - oe[0]) * mt + (mt = Le[1] - oe[1]) * mt, Et = (Et = pt[0] - ve[0]) * Et + (Et = pt[1] - ve[1]) * Et;
        Z = H(Z, Math.sqrt(mt / Et)), Ee = [(oe[0] + Le[0]) / 2, (oe[1] + Le[1]) / 2], R = [(ve[0] + pt[0]) / 2, (ve[1] + pt[1]) / 2];
      } else if (Y.touch0)
        Ee = Y.touch0[0], R = Y.touch0[1];
      else
        return;
      Y.zoom("touch", n(F(Z, Ee, R), Y.extent, h));
    }
  }
  function Ae($, ...se) {
    if (this.__zooming) {
      var Y = X(this, se).event($), ie = $.changedTouches, me = ie.length, we, Z;
      for (Es($), N && clearTimeout(N), N = setTimeout(function() {
        N = null;
      }, z), we = 0; we < me; ++we)
        Z = ie[we], Y.touch0 && Y.touch0[2] === Z.identifier ? delete Y.touch0 : Y.touch1 && Y.touch1[2] === Z.identifier && delete Y.touch1;
      if (Y.touch1 && !Y.touch0 && (Y.touch0 = Y.touch1, delete Y.touch1), Y.touch0)
        Y.touch0[1] = this.__zoom.invert(Y.touch0[0]);
      else if (Y.end(), Y.taps === 2 && (Z = pn(Z, this), Math.hypot(T[0] - Z[0], T[1] - Z[1]) < C)) {
        var Ee = rn(this).on("dblclick.zoom");
        Ee && Ee.apply(this, arguments);
      }
    }
  }
  return B.wheelDelta = function($) {
    return arguments.length ? (r = typeof $ == "function" ? $ : J0(+$), B) : r;
  }, B.filter = function($) {
    return arguments.length ? (t2 = typeof $ == "function" ? $ : J0(!!$), B) : t2;
  }, B.touchable = function($) {
    return arguments.length ? (i = typeof $ == "function" ? $ : J0(!!$), B) : i;
  }, B.extent = function($) {
    return arguments.length ? (e = typeof $ == "function" ? $ : J0([[+$[0][0], +$[0][1]], [+$[1][0], +$[1][1]]]), B) : e;
  }, B.scaleExtent = function($) {
    return arguments.length ? (l[0] = +$[0], l[1] = +$[1], B) : [l[0], l[1]];
  }, B.translateExtent = function($) {
    return arguments.length ? (h[0][0] = +$[0][0], h[1][0] = +$[1][0], h[0][1] = +$[0][1], h[1][1] = +$[1][1], B) : [[h[0][0], h[0][1]], [h[1][0], h[1][1]]];
  }, B.constrain = function($) {
    return arguments.length ? (n = $, B) : n;
  }, B.duration = function($) {
    return arguments.length ? (p = +$, B) : p;
  }, B.interpolate = function($) {
    return arguments.length ? (m = $, B) : m;
  }, B.on = function() {
    var $ = y.on.apply(y, arguments);
    return $ === y ? B : $;
  }, B.clickDistance = function($) {
    return arguments.length ? (M = ($ = +$) * $, B) : Math.sqrt(M);
  }, B.tapDistance = function($) {
    return arguments.length ? (C = +$, B) : C;
  }, B;
}
const y1 = "npm2url/dist/index.cjs", b1 = { jsdelivr: (t2) => `https://cdn.jsdelivr.net/npm/${t2}`, unpkg: (t2) => `https://unpkg.com/${t2}` };
async function x1(t2, e) {
  const n = await fetch(t2, { signal: e });
  if (!n.ok)
    throw n;
  await n.text();
}
class w1 {
  constructor() {
    this.providers = { ...b1 }, this.provider = "jsdelivr";
  }
  async getFastestProvider(e = 5e3, n = y1) {
    const r = new AbortController();
    let i = 0;
    try {
      return await new Promise((l, h) => {
        Promise.all(Object.entries(this.providers).map(async ([p, m]) => {
          try {
            await x1(m(n), r.signal), l(p);
          } catch {
          }
        })).then(() => h(new Error("All providers failed"))), i = setTimeout(h, e, new Error("Timed out"));
      });
    } finally {
      r.abort(), clearTimeout(i);
    }
  }
  async findFastestProvider(e, n) {
    return this.provider = await this.getFastestProvider(e, n), this.provider;
  }
  setProvider(e, n) {
    n ? this.providers[e] = n : delete this.providers[e];
  }
  getFullUrl(e, n = this.provider) {
    if (e.includes("://"))
      return e;
    const r = this.providers[n];
    if (!r)
      throw new Error(`Provider ${n} not found`);
    return r(e);
  }
}
class h0 {
  constructor() {
    this.listeners = [];
  }
  tap(e) {
    return this.listeners.push(e), () => this.revoke(e);
  }
  revoke(e) {
    const n = this.listeners.indexOf(e);
    n >= 0 && this.listeners.splice(n, 1);
  }
  revokeAll() {
    this.listeners.splice(0);
  }
  call(...e) {
    for (const n of this.listeners)
      n(...e);
  }
}
const v1 = Math.random().toString(36).slice(2, 8);
let Oa = 0;
function k1() {
  return Oa += 1, `mm-${v1}-${Oa}`;
}
function On() {
}
function u0(t2, e) {
  const n = (r, i) => e(r, () => {
    var l;
    return (l = r.children) == null ? void 0 : l.map((h) => n(h, r));
  }, i);
  return n(t2);
}
function S1(t2, ...e) {
  const n = (t2 || "").split(" ").filter(Boolean);
  return e.forEach((r) => {
    r && n.indexOf(r) < 0 && n.push(r);
  }), n.join(" ");
}
function _a(t2, e) {
  return (...n) => e(t2, ...n);
}
function A1() {
  const t2 = {};
  return t2.promise = new Promise((e, n) => {
    t2.resolve = e, t2.reject = n;
  }), t2;
}
function T1(t2) {
  const e = {};
  return function(...n) {
    const r = `${n[0]}`;
    let i = e[r];
    return i || (i = { value: t2(...n) }, e[r] = i), i.value;
  };
}
function M1(t2, e) {
  const n = { timer: 0 };
  function r() {
    n.timer && (window.clearTimeout(n.timer), n.timer = 0);
  }
  function i() {
    r(), n.args && (n.result = t2(...n.args));
  }
  return function(...l) {
    return r(), n.args = l, n.timer = window.setTimeout(i, e), n.result;
  };
}
/*! @gera2ld/jsx-dom v2.2.2 | ISC License */
const wl = 1, vl = 2, C1 = "http://www.w3.org/2000/svg", Ns = "http://www.w3.org/1999/xlink", E1 = { show: Ns, actuate: Ns, href: Ns }, N1 = (t2) => typeof t2 == "string" || typeof t2 == "number", I1 = (t2) => (t2 == null ? void 0 : t2.vtype) === wl, z1 = (t2) => (t2 == null ? void 0 : t2.vtype) === vl;
function O1(t2, e, ...n) {
  return e = Object.assign({}, e, { children: n.length === 1 ? n[0] : n }), _1(t2, e);
}
function _1(t2, e) {
  let n;
  if (typeof t2 == "string")
    n = wl;
  else if (typeof t2 == "function")
    n = vl;
  else
    throw new Error("Invalid VNode type");
  return { vtype: n, type: t2, props: e };
}
function B1(t2) {
  return t2.children;
}
const q1 = { isSvg: false };
function Ba(t2, e) {
  Array.isArray(e) || (e = [e]), e = e.filter(Boolean), e.length && t2.append(...e);
}
function L1(t2, e, n) {
  for (const r in e)
    if (!(r === "key" || r === "children" || r === "ref"))
      if (r === "dangerouslySetInnerHTML")
        t2.innerHTML = e[r].__html;
      else if (r === "innerHTML" || r === "textContent" || r === "innerText" || r === "value" && ["textarea", "select"].includes(t2.tagName)) {
        const i = e[r];
        i != null && (t2[r] = i);
      } else
        r.startsWith("on") ? t2[r.toLowerCase()] = e[r] : R1(t2, r, e[r], n.isSvg);
}
const D1 = { className: "class", labelFor: "for" };
function R1(t2, e, n, r) {
  if (e = D1[e] || e, n === true)
    t2.setAttribute(e, "");
  else if (n === false)
    t2.removeAttribute(e);
  else {
    const i = r ? E1[e] : void 0;
    i !== void 0 ? t2.setAttributeNS(i, e, n) : t2.setAttribute(e, n);
  }
}
function P1(t2) {
  return t2.reduce((e, n) => e.concat(n), []);
}
function Ys(t2, e) {
  return Array.isArray(t2) ? P1(t2.map((n) => Ys(n, e))) : go(t2, e);
}
function go(t2, e = q1) {
  if (t2 == null || typeof t2 == "boolean")
    return null;
  if (t2 instanceof Node)
    return t2;
  if (z1(t2)) {
    const { type: n, props: r } = t2;
    if (n === B1) {
      const l = document.createDocumentFragment();
      if (r.children) {
        const h = Ys(r.children, e);
        Ba(l, h);
      }
      return l;
    }
    const i = n(r);
    return go(i, e);
  }
  if (N1(t2))
    return document.createTextNode(`${t2}`);
  if (I1(t2)) {
    let n;
    const { type: r, props: i } = t2;
    if (!e.isSvg && r === "svg" && (e = Object.assign({}, e, { isSvg: true })), e.isSvg ? n = document.createElementNS(C1, r) : n = document.createElement(r), L1(n, i, e), i.children) {
      let h = e;
      e.isSvg && r === "foreignObject" && (h = Object.assign({}, h, { isSvg: false }));
      const p = Ys(i.children, h);
      p != null && Ba(n, p);
    }
    const { ref: l } = i;
    return typeof l == "function" && l(n), n;
  }
  throw new Error("mount: Invalid Vnode!");
}
function $1(t2) {
  return go(t2);
}
function kl(...t2) {
  return $1(O1(...t2));
}
const F1 = T1((t2) => {
  document.head.append(kl("link", { rel: "preload", as: "script", href: t2 }));
}), qa = {};
async function H1(t2, e) {
  var n;
  const r = t2.type === "script" && ((n = t2.data) == null ? void 0 : n.src) || "";
  if (t2.loaded || (t2.loaded = qa[r]), !t2.loaded) {
    const i = A1();
    if (t2.loaded = i.promise, t2.type === "script" && (document.head.append(kl("script", { ...t2.data, onLoad: () => i.resolve(), onError: i.reject })), r ? qa[r] = t2.loaded : i.resolve()), t2.type === "iife") {
      const { fn: l, getParams: h } = t2.data;
      l(...(h == null ? void 0 : h(e)) || []), i.resolve();
    }
  }
  await t2.loaded;
}
async function Sl(t2, e) {
  t2.forEach((n) => {
    var r;
    n.type === "script" && (r = n.data) != null && r.src && F1(n.data.src);
  }), e = { getMarkmap: () => window.markmap, ...e };
  for (const n of t2)
    await H1(n, e);
}
function yo(t2) {
  return { type: "script", data: { src: t2 } };
}
function Al(t2) {
  return { type: "stylesheet", data: { href: t2 } };
}
const Tl = typeof navigator < "u" && navigator.userAgent.includes("Macintosh"), V1 = Gu(o1), j1 = (t2 = 1, e = 3, n = 2) => (r) => t2 + e / n ** r.state.depth, U1 = { autoFit: false, duration: 500, embedGlobalCSS: true, fitRatio: 0.95, maxInitialScale: 2, scrollForPan: Tl, initialExpandLevel: -1, zoom: true, pan: true, toggleRecursively: false, color: (t2) => {
  var e;
  return V1(`${((e = t2.state) == null ? void 0 : e.path) || ""}`);
}, lineWidth: j1(), maxWidth: 0, nodeMinHeight: 16, paddingX: 8, spacingHorizontal: 80, spacingVertical: 5 };
function K1(t2) {
  let e = 0;
  for (let n = 0; n < t2.length; n++)
    e = (e << 5) - e + t2.charCodeAt(n) | 0;
  return (e >>> 0).toString(36);
}
function bt(t2) {
  if (typeof t2 == "string") {
    const n = t2;
    t2 = (r) => r.matches(n);
  }
  const e = t2;
  return function() {
    let n = Array.from(this.childNodes);
    return e && (n = n.filter((r) => e(r))), n;
  };
}
function G1(t2) {
  var e = 0, n = t2.children, r = n && n.length;
  if (!r)
    e = 1;
  else
    for (; --r >= 0; )
      e += n[r].value;
  t2.value = e;
}
function X1() {
  return this.eachAfter(G1);
}
function W1(t2) {
  var e = this, n, r = [e], i, l, h;
  do
    for (n = r.reverse(), r = []; e = n.pop(); )
      if (t2(e), i = e.children, i)
        for (l = 0, h = i.length; l < h; ++l)
          r.push(i[l]);
  while (r.length);
  return this;
}
function Y1(t2) {
  for (var e = this, n = [e], r, i; e = n.pop(); )
    if (t2(e), r = e.children, r)
      for (i = r.length - 1; i >= 0; --i)
        n.push(r[i]);
  return this;
}
function Q1(t2) {
  for (var e = this, n = [e], r = [], i, l, h; e = n.pop(); )
    if (r.push(e), i = e.children, i)
      for (l = 0, h = i.length; l < h; ++l)
        n.push(i[l]);
  for (; e = r.pop(); )
    t2(e);
  return this;
}
function Z1(t2) {
  return this.eachAfter(function(e) {
    for (var n = +t2(e.data) || 0, r = e.children, i = r && r.length; --i >= 0; )
      n += r[i].value;
    e.value = n;
  });
}
function J1(t2) {
  return this.eachBefore(function(e) {
    e.children && e.children.sort(t2);
  });
}
function ed(t2) {
  for (var e = this, n = td(e, t2), r = [e]; e !== n; )
    e = e.parent, r.push(e);
  for (var i = r.length; t2 !== n; )
    r.splice(i, 0, t2), t2 = t2.parent;
  return r;
}
function td(t2, e) {
  if (t2 === e)
    return t2;
  var n = t2.ancestors(), r = e.ancestors(), i = null;
  for (t2 = n.pop(), e = r.pop(); t2 === e; )
    i = t2, t2 = n.pop(), e = r.pop();
  return i;
}
function nd() {
  for (var t2 = this, e = [t2]; t2 = t2.parent; )
    e.push(t2);
  return e;
}
function rd() {
  var t2 = [];
  return this.each(function(e) {
    t2.push(e);
  }), t2;
}
function sd() {
  var t2 = [];
  return this.eachBefore(function(e) {
    e.children || t2.push(e);
  }), t2;
}
function od() {
  var t2 = this, e = [];
  return t2.each(function(n) {
    n !== t2 && e.push({ source: n.parent, target: n });
  }), e;
}
function bo(t2, e) {
  var n = new dr(t2), r = +t2.value && (n.value = t2.value), i, l = [n], h, p, m, y;
  for (e == null && (e = ad); i = l.pop(); )
    if (r && (i.value = +i.data.value), (p = e(i.data)) && (y = p.length))
      for (i.children = new Array(y), m = y - 1; m >= 0; --m)
        l.push(h = i.children[m] = new dr(p[m])), h.parent = i, h.depth = i.depth + 1;
  return n.eachBefore(cd);
}
function id() {
  return bo(this).eachBefore(ld);
}
function ad(t2) {
  return t2.children;
}
function ld(t2) {
  t2.data = t2.data.data;
}
function cd(t2) {
  var e = 0;
  do
    t2.height = e;
  while ((t2 = t2.parent) && t2.height < ++e);
}
function dr(t2) {
  this.data = t2, this.depth = this.height = 0, this.parent = null;
}
dr.prototype = bo.prototype = { constructor: dr, count: X1, each: W1, eachAfter: Q1, eachBefore: Y1, sum: Z1, sort: J1, path: ed, ancestors: nd, descendants: rd, leaves: sd, links: od, copy: id };
const hd = "2.1.2", ud = { version: hd }, { version: dd } = ud, pd = Object.freeze({ children: (t2) => t2.children, nodeSize: (t2) => t2.data.size, spacing: 0 });
function Cl(t2) {
  const e = Object.assign({}, pd, t2);
  function n(p) {
    const m = e[p];
    return typeof m == "function" ? m : () => m;
  }
  function r(p) {
    const m = h(l(), p, (y) => y.children);
    return m.update(), m.data;
  }
  function i() {
    const p = n("nodeSize"), m = n("spacing");
    return class Ml extends bo.prototype.constructor {
      constructor(k) {
        super(k);
      }
      copy() {
        const k = h(this.constructor, this, (T) => T.children);
        return k.each((T) => T.data = T.data.data), k;
      }
      get size() {
        return p(this);
      }
      spacing(k) {
        return m(this, k);
      }
      get nodes() {
        return this.descendants();
      }
      get xSize() {
        return this.size[0];
      }
      get ySize() {
        return this.size[1];
      }
      get top() {
        return this.y;
      }
      get bottom() {
        return this.y + this.ySize;
      }
      get left() {
        return this.x - this.xSize / 2;
      }
      get right() {
        return this.x + this.xSize / 2;
      }
      get root() {
        const k = this.ancestors();
        return k[k.length - 1];
      }
      get numChildren() {
        return this.hasChildren ? this.children.length : 0;
      }
      get hasChildren() {
        return !this.noChildren;
      }
      get noChildren() {
        return this.children === null;
      }
      get firstChild() {
        return this.hasChildren ? this.children[0] : null;
      }
      get lastChild() {
        return this.hasChildren ? this.children[this.numChildren - 1] : null;
      }
      get extents() {
        return (this.children || []).reduce((k, T) => Ml.maxExtents(k, T.extents), this.nodeExtents);
      }
      get nodeExtents() {
        return { top: this.top, bottom: this.bottom, left: this.left, right: this.right };
      }
      static maxExtents(k, T) {
        return { top: Math.min(k.top, T.top), bottom: Math.max(k.bottom, T.bottom), left: Math.min(k.left, T.left), right: Math.max(k.right, T.right) };
      }
    };
  }
  function l() {
    const p = i(), m = n("nodeSize"), y = n("spacing");
    return class extends p {
      constructor(k) {
        super(k), Object.assign(this, { x: 0, y: 0, relX: 0, prelim: 0, shift: 0, change: 0, lExt: this, lExtRelX: 0, lThr: null, rExt: this, rExtRelX: 0, rThr: null });
      }
      get size() {
        return m(this.data);
      }
      spacing(k) {
        return y(this.data, k.data);
      }
      get x() {
        return this.data.x;
      }
      set x(k) {
        this.data.x = k;
      }
      get y() {
        return this.data.y;
      }
      set y(k) {
        this.data.y = k;
      }
      update() {
        return El(this), Nl(this), this;
      }
    };
  }
  function h(p, m, y) {
    const k = (T, N) => {
      const z = new p(T);
      Object.assign(z, { parent: N, depth: N === null ? 0 : N.depth + 1, height: 0, length: 1 });
      const S = y(T) || [];
      return z.children = S.length === 0 ? null : S.map((M) => k(M, z)), z.children && Object.assign(z, z.children.reduce((M, C) => ({ height: Math.max(M.height, C.height + 1), length: M.length + C.length }), z)), z;
    };
    return k(m, null);
  }
  return Object.assign(r, { nodeSize(p) {
    return arguments.length ? (e.nodeSize = p, r) : e.nodeSize;
  }, spacing(p) {
    return arguments.length ? (e.spacing = p, r) : e.spacing;
  }, children(p) {
    return arguments.length ? (e.children = p, r) : e.children;
  }, hierarchy(p, m) {
    const y = typeof m > "u" ? e.children : m;
    return h(i(), p, y);
  }, dump(p) {
    const m = n("nodeSize"), y = (k) => (T) => {
      const N = k + "  ", z = k + "    ", { x: S, y: M } = T, C = m(T), B = T.children || [], H = B.length === 0 ? " " : `,${N}children: [${z}${B.map(y(z)).join(z)}${N}],${k}`;
      return `{ size: [${C.join(", ")}],${N}x: ${S}, y: ${M}${H}},`;
    };
    return y(`
`)(p);
  } }), r;
}
Cl.version = dd;
const El = (t2, e = 0) => (t2.y = e, (t2.children || []).reduce((n, r) => {
  const [i, l] = n;
  El(r, t2.y + t2.ySize);
  const h = (i === 0 ? r.lExt : r.rExt).bottom;
  i !== 0 && fd(t2, i, l);
  const p = Sd(h, i, l);
  return [i + 1, p];
}, [0, null]), md(t2), kd(t2), t2), Nl = (t2, e, n) => {
  typeof e > "u" && (e = -t2.relX - t2.prelim, n = 0);
  const r = e + t2.relX;
  return t2.relX = r + t2.prelim - n, t2.prelim = 0, t2.x = n + t2.relX, (t2.children || []).forEach((i) => Nl(i, r, t2.x)), t2;
}, md = (t2) => {
  (t2.children || []).reduce((e, n) => {
    const [r, i] = e, l = r + n.shift, h = i + l + n.change;
    return n.relX += h, [l, h];
  }, [0, 0]);
}, fd = (t2, e, n) => {
  const r = t2.children[e - 1], i = t2.children[e];
  let l = r, h = r.relX, p = i, m = i.relX, y = true;
  for (; l && p; ) {
    l.bottom > n.lowY && (n = n.next);
    const k = h + l.prelim - (m + p.prelim) + l.xSize / 2 + p.xSize / 2 + l.spacing(p);
    (k > 0 || k < 0 && y) && (m += k, gd(i, k), yd(t2, e, n.index, k)), y = false;
    const T = l.bottom, N = p.bottom;
    T <= N && (l = xd(l), l && (h += l.relX)), T >= N && (p = bd(p), p && (m += p.relX));
  }
  !l && p ? wd(t2, e, p, m) : l && !p && vd(t2, e, l, h);
}, gd = (t2, e) => {
  t2.relX += e, t2.lExtRelX += e, t2.rExtRelX += e;
}, yd = (t2, e, n, r) => {
  const i = t2.children[e], l = e - n;
  if (l > 1) {
    const h = r / l;
    t2.children[n + 1].shift += h, i.shift -= h, i.change -= r - h;
  }
}, bd = (t2) => t2.hasChildren ? t2.firstChild : t2.lThr, xd = (t2) => t2.hasChildren ? t2.lastChild : t2.rThr, wd = (t2, e, n, r) => {
  const i = t2.firstChild, l = i.lExt, h = t2.children[e];
  l.lThr = n;
  const p = r - n.relX - i.lExtRelX;
  l.relX += p, l.prelim -= p, i.lExt = h.lExt, i.lExtRelX = h.lExtRelX;
}, vd = (t2, e, n, r) => {
  const i = t2.children[e], l = i.rExt, h = t2.children[e - 1];
  l.rThr = n;
  const p = r - n.relX - i.rExtRelX;
  l.relX += p, l.prelim -= p, i.rExt = h.rExt, i.rExtRelX = h.rExtRelX;
}, kd = (t2) => {
  if (t2.hasChildren) {
    const e = t2.firstChild, n = t2.lastChild, r = (e.prelim + e.relX - e.xSize / 2 + n.relX + n.prelim + n.xSize / 2) / 2;
    Object.assign(t2, { prelim: r, lExt: e.lExt, lExtRelX: e.lExtRelX, rExt: n.rExt, rExtRelX: n.rExtRelX });
  }
}, Sd = (t2, e, n) => {
  for (; n !== null && t2 >= n.lowY; )
    n = n.next;
  return { lowY: t2, index: e, next: n };
}, Ad = ".markmap{--markmap-max-width: 9999px;--markmap-a-color: #0097e6;--markmap-a-hover-color: #00a8ff;--markmap-code-bg: #f0f0f0;--markmap-code-color: #555;--markmap-highlight-bg: #ffeaa7;--markmap-table-border: 1px solid currentColor;--markmap-font: 300 16px/20px sans-serif;--markmap-circle-open-bg: #fff;--markmap-text-color: #333;--markmap-highlight-node-bg: #ff02;font:var(--markmap-font);color:var(--markmap-text-color)}.markmap-link{fill:none}.markmap-node>circle{cursor:pointer}.markmap-foreign{display:inline-block}.markmap-foreign p{margin:0}.markmap-foreign a{color:var(--markmap-a-color)}.markmap-foreign a:hover{color:var(--markmap-a-hover-color)}.markmap-foreign code{padding:.25em;font-size:calc(1em - 2px);color:var(--markmap-code-color);background-color:var(--markmap-code-bg);border-radius:2px}.markmap-foreign pre{margin:0}.markmap-foreign pre>code{display:block}.markmap-foreign del{text-decoration:line-through}.markmap-foreign em{font-style:italic}.markmap-foreign strong{font-weight:700}.markmap-foreign mark{background:var(--markmap-highlight-bg)}.markmap-foreign table,.markmap-foreign th,.markmap-foreign td{border-collapse:collapse;border:var(--markmap-table-border)}.markmap-foreign img{display:inline-block}.markmap-foreign svg{fill:currentColor}.markmap-foreign>div{width:var(--markmap-max-width);text-align:left}.markmap-foreign>div>div{display:inline-block}.markmap-highlight rect{fill:var(--markmap-highlight-node-bg)}.markmap-dark .markmap{--markmap-code-bg: #1a1b26;--markmap-code-color: #ddd;--markmap-circle-open-bg: #444;--markmap-text-color: #eee}", Is = "g.markmap-node", Td = "path.markmap-link", Md = "g.markmap-highlight", zs = c1();
function La(t2, e) {
  const n = Qu(t2, e);
  return t2[n];
}
function Os(t2) {
  t2.stopPropagation();
}
const Cd = new h0();
class xo {
  constructor(e, n) {
    this.options = { ...U1 }, this._disposeList = [], this.handleZoom = (r) => {
      const { transform: i } = r;
      this.g.attr("transform", i);
    }, this.handlePan = (r) => {
      r.preventDefault();
      const i = i0(this.svg.node()), l = i.translate(-r.deltaX / i.k, -r.deltaY / i.k);
      this.svg.call(this.zoom.transform, l);
    }, this.handleClick = (r, i) => {
      let l = this.options.toggleRecursively;
      (Tl ? r.metaKey : r.ctrlKey) && (l = !l), this.toggleNode(i, l);
    }, this.ensureView = this.ensureVisible, this.svg = e.datum ? e : rn(e), this.styleNode = this.svg.append("style"), this.zoom = g1().filter((r) => this.options.scrollForPan && r.type === "wheel" ? r.ctrlKey && !r.button : (!r.ctrlKey || r.type === "wheel") && !r.button).on("zoom", this.handleZoom), this.setOptions(n), this.state = { id: this.options.id || this.svg.attr("id") || k1(), rect: { x1: 0, y1: 0, x2: 0, y2: 0 } }, this.g = this.svg.append("g"), this.g.append("g").attr("class", "markmap-highlight"), this._observer = new ResizeObserver(M1(() => {
      this.renderData();
    }, 100)), this._disposeList.push(Cd.tap(() => {
      this.setData();
    }), () => this._observer.disconnect());
  }
  getStyleContent() {
    const { style: e } = this.options, { id: n } = this.state, r = typeof e == "function" ? e(n) : "";
    return [this.options.embedGlobalCSS && Ad, r].filter(Boolean).join(`
`);
  }
  updateStyle() {
    this.svg.attr("class", S1(this.svg.attr("class"), "markmap", this.state.id));
    const e = this.getStyleContent();
    this.styleNode.text(e);
  }
  async toggleNode(e, n = false) {
    var r, i;
    const l = (r = e.payload) != null && r.fold ? 0 : 1;
    n ? u0(e, (h, p) => {
      h.payload = { ...h.payload, fold: l }, p();
    }) : e.payload = { ...e.payload, fold: (i = e.payload) != null && i.fold ? 0 : 1 }, await this.renderData(e);
  }
  _initializeData(e) {
    let n = 0;
    const { color: r, initialExpandLevel: i } = this.options;
    let l = 0, h = 0;
    return u0(e, (p, m, y) => {
      var k, T, N, z;
      h += 1, p.children = (k = p.children) == null ? void 0 : k.map((M) => ({ ...M })), n += 1, p.state = { ...p.state, depth: h, id: n, rect: { x: 0, y: 0, width: 0, height: 0 }, size: [0, 0] }, p.state.key = [(T = y == null ? void 0 : y.state) == null ? void 0 : T.id, p.state.id].filter(Boolean).join(".") + K1(p.content), p.state.path = [(N = y == null ? void 0 : y.state) == null ? void 0 : N.path, p.state.id].filter(Boolean).join("."), r(p);
      const S = ((z = p.payload) == null ? void 0 : z.fold) === 2;
      S ? l += 1 : (l || i >= 0 && p.state.depth >= i) && (p.payload = { ...p.payload, fold: 1 }), m(), S && (l -= 1), h -= 1;
    }), e;
  }
  _relayout() {
    if (!this.state.data)
      return;
    this.g.selectAll(bt(Is)).selectAll(bt("foreignObject")).each(function(m) {
      var y;
      const k = (y = this.firstChild) == null ? void 0 : y.firstChild, T = [k.scrollWidth, k.scrollHeight];
      m.state.size = T;
    });
    const { lineWidth: e, paddingX: n, spacingHorizontal: r, spacingVertical: i } = this.options, l = Cl({}).children((m) => {
      var y;
      if (!((y = m.payload) != null && y.fold))
        return m.children;
    }).nodeSize((m) => {
      const [y, k] = m.data.state.size;
      return [k, y + (y ? n * 2 : 0) + r];
    }).spacing((m, y) => (m.parent === y.parent ? i : i * 2) + e(m.data)), h = l.hierarchy(this.state.data);
    l(h);
    const p = h.descendants();
    p.forEach((m) => {
      const y = m.data;
      y.state.rect = { x: m.y, y: m.x - m.xSize / 2, width: m.ySize - r, height: m.xSize };
    }), this.state.rect = { x1: Ea(p, (m) => m.data.state.rect.x) || 0, y1: Ea(p, (m) => m.data.state.rect.y) || 0, x2: Na(p, (m) => m.data.state.rect.x + m.data.state.rect.width) || 0, y2: Na(p, (m) => m.data.state.rect.y + m.data.state.rect.height) || 0 };
  }
  setOptions(e) {
    this.options = { ...this.options, ...e }, this.options.zoom ? this.svg.call(this.zoom) : this.svg.on(".zoom", null), this.options.pan ? this.svg.on("wheel", this.handlePan) : this.svg.on("wheel", null);
  }
  async setData(e, n) {
    n && this.setOptions(n), e && (this.state.data = this._initializeData(e)), this.state.data && (this.updateStyle(), await this.renderData());
  }
  async setHighlight(e) {
    this.state.highlight = e || void 0, await this.renderData();
  }
  _getHighlightRect(e) {
    const n = this.svg.node(), r = 4 / i0(n).k, i = { ...e.state.rect };
    return i.x -= r, i.y -= r, i.width += 2 * r, i.height += 2 * r, i;
  }
  async renderData(e) {
    const { paddingX: n, autoFit: r, color: i, maxWidth: l, lineWidth: h } = this.options, p = this.state.data;
    if (!p)
      return;
    const m = {}, y = {}, k = [];
    u0(p, (R, oe, ve) => {
      var Le;
      (Le = R.payload) != null && Le.fold || oe(), m[R.state.id] = R, ve && (y[R.state.id] = ve.state.id), k.push(R);
    });
    const T = {}, N = {}, z = (R) => {
      !R || T[R.state.id] || u0(R, (oe, ve) => {
        T[oe.state.id] = R.state.id, ve();
      });
    }, S = (R) => N[T[R.state.id]] || p.state.rect, M = (R) => (m[T[R.state.id]] || p).state.rect;
    N[p.state.id] = p.state.rect, e && z(e);
    let { highlight: C } = this.state;
    C && !m[C.state.id] && (C = void 0);
    let B = this.g.selectAll(bt(Md)).selectAll(bt("rect")).data(C ? [this._getHighlightRect(C)] : []).join("rect").attr("x", (R) => R.x).attr("y", (R) => R.y).attr("width", (R) => R.width).attr("height", (R) => R.height);
    const H = this.g.selectAll(bt(Is)).each((R) => {
      N[R.state.id] = R.state.rect;
    }).data(k, (R) => R.state.key), F = H.enter().append("g").attr("data-depth", (R) => R.state.depth).attr("data-path", (R) => R.state.path).each((R) => {
      z(m[y[R.state.id]]);
    }), V = H.exit().each((R) => {
      z(m[y[R.state.id]]);
    }), U = H.merge(F).attr("class", (R) => {
      var oe;
      return ["markmap-node", ((oe = R.payload) == null ? void 0 : oe.fold) && "markmap-fold"].filter(Boolean).join(" ");
    }), X = U.selectAll(bt("line")).data((R) => [R], (R) => R.state.key), te = X.enter().append("line").attr("stroke", (R) => i(R)).attr("stroke-width", 0), j = X.merge(te), le = U.selectAll(bt("circle")).data((R) => {
      var oe;
      return (oe = R.children) != null && oe.length ? [R] : [];
    }, (R) => R.state.key), ge = le.enter().append("circle").attr("stroke-width", 0).attr("r", 0).on("click", (R, oe) => this.handleClick(R, oe)).on("mousedown", Os).merge(le).attr("stroke", (R) => i(R)).attr("fill", (R) => {
      var oe;
      return (oe = R.payload) != null && oe.fold && R.children ? i(R) : "var(--markmap-circle-open-bg)";
    }), pe = this._observer, ae = U.selectAll(bt("foreignObject")).data((R) => [R], (R) => R.state.key), Ae = ae.enter().append("foreignObject").attr("class", "markmap-foreign").attr("x", n).attr("y", 0).style("opacity", 0).on("mousedown", Os).on("dblclick", Os);
    Ae.append("xhtml:div").append("xhtml:div").html((R) => R.content).attr("xmlns", "http://www.w3.org/1999/xhtml"), Ae.each(function() {
      var R;
      const oe = (R = this.firstChild) == null ? void 0 : R.firstChild;
      pe.observe(oe);
    });
    const $ = V.selectAll(bt("foreignObject"));
    $.each(function() {
      var R;
      const oe = (R = this.firstChild) == null ? void 0 : R.firstChild;
      pe.unobserve(oe);
    });
    const se = Ae.merge(ae), Y = k.flatMap((R) => {
      var oe;
      return (oe = R.payload) != null && oe.fold ? [] : R.children.map((ve) => ({ source: R, target: ve }));
    }), ie = this.g.selectAll(bt(Td)).data(Y, (R) => R.target.state.key), me = ie.exit(), we = ie.enter().insert("path", "g").attr("class", "markmap-link").attr("data-depth", (R) => R.target.state.depth).attr("data-path", (R) => R.target.state.path).attr("d", (R) => {
      const oe = S(R.target), ve = [oe.x + oe.width, oe.y + oe.height];
      return zs({ source: ve, target: ve });
    }).attr("stroke-width", 0).merge(ie);
    this.svg.style("--markmap-max-width", l ? `${l}px` : null), await new Promise(requestAnimationFrame), this._relayout(), B = B.data(C ? [this._getHighlightRect(C)] : []).join("rect"), this.transition(B).attr("x", (R) => R.x).attr("y", (R) => R.y).attr("width", (R) => R.width).attr("height", (R) => R.height), F.attr("transform", (R) => {
      const oe = S(R);
      return `translate(${oe.x + oe.width - R.state.rect.width},${oe.y + oe.height - R.state.rect.height})`;
    }), this.transition(V).attr("transform", (R) => {
      const oe = M(R), ve = oe.x + oe.width - R.state.rect.width, Le = oe.y + oe.height - R.state.rect.height;
      return `translate(${ve},${Le})`;
    }).remove(), this.transition(U).attr("transform", (R) => `translate(${R.state.rect.x},${R.state.rect.y})`);
    const Z = V.selectAll(bt("line"));
    this.transition(Z).attr("x1", (R) => R.state.rect.width).attr("stroke-width", 0), te.attr("x1", (R) => R.state.rect.width).attr("x2", (R) => R.state.rect.width), j.attr("y1", (R) => R.state.rect.height + h(R) / 2).attr("y2", (R) => R.state.rect.height + h(R) / 2), this.transition(j).attr("x1", -1).attr("x2", (R) => R.state.rect.width + 2).attr("stroke", (R) => i(R)).attr("stroke-width", h);
    const Ee = V.selectAll(bt("circle"));
    this.transition(Ee).attr("r", 0).attr("stroke-width", 0), ge.attr("cx", (R) => R.state.rect.width).attr("cy", (R) => R.state.rect.height + h(R) / 2), this.transition(ge).attr("r", 6).attr("stroke-width", "1.5"), this.transition($).style("opacity", 0), se.attr("width", (R) => Math.max(0, R.state.rect.width - n * 2)).attr("height", (R) => R.state.rect.height), this.transition(se).style("opacity", 1), this.transition(me).attr("d", (R) => {
      const oe = M(R.target), ve = [oe.x + oe.width, oe.y + oe.height + h(R.target) / 2];
      return zs({ source: ve, target: ve });
    }).attr("stroke-width", 0).remove(), this.transition(we).attr("stroke", (R) => i(R.target)).attr("stroke-width", (R) => h(R.target)).attr("d", (R) => {
      const oe = R.source, ve = R.target, Le = [oe.state.rect.x + oe.state.rect.width, oe.state.rect.y + oe.state.rect.height + h(oe) / 2], pt = [ve.state.rect.x, ve.state.rect.y + ve.state.rect.height + h(ve) / 2];
      return zs({ source: Le, target: pt });
    }), r && this.fit();
  }
  transition(e) {
    const { duration: n } = this.options;
    return e.transition().duration(n);
  }
  async fit(e = this.options.maxInitialScale) {
    const n = this.svg.node(), { width: r, height: i } = n.getBoundingClientRect(), { fitRatio: l } = this.options, { x1: h, y1: p, x2: m, y2: y } = this.state.rect, k = m - h, T = y - p, N = Math.min(r / k * l, i / T * l, e), z = fo.translate((r - k * N) / 2 - h * N, (i - T * N) / 2 - p * N).scale(N);
    return this.transition(this.svg).call(this.zoom.transform, z).end().catch(On);
  }
  findElement(e) {
    let n;
    return this.g.selectAll(bt(Is)).each(function(r) {
      r === e && (n = { data: r, g: this });
    }), n;
  }
  async ensureVisible(e, n) {
    var r;
    const i = (r = this.findElement(e)) == null ? void 0 : r.data;
    if (!i)
      return;
    const l = this.svg.node(), h = l.getBoundingClientRect(), p = i0(l), [m, y] = [i.state.rect.x, i.state.rect.x + i.state.rect.width + 2].map((B) => B * p.k + p.x), [k, T] = [i.state.rect.y, i.state.rect.y + i.state.rect.height].map((B) => B * p.k + p.y), N = { left: 0, right: 0, top: 0, bottom: 0, ...n }, z = [N.left - m, h.width - N.right - y], S = [N.top - k, h.height - N.bottom - T], M = z[0] * z[1] > 0 ? La(z, Math.abs) / p.k : 0, C = S[0] * S[1] > 0 ? La(S, Math.abs) / p.k : 0;
    if (M || C) {
      const B = p.translate(M, C);
      return this.transition(this.svg).call(this.zoom.transform, B).end().catch(On);
    }
  }
  async centerNode(e, n) {
    var r;
    const i = (r = this.findElement(e)) == null ? void 0 : r.data;
    if (!i)
      return;
    const l = this.svg.node(), h = l.getBoundingClientRect(), p = i0(l), m = (i.state.rect.x + i.state.rect.width / 2) * p.k + p.x, y = (i.state.rect.y + i.state.rect.height / 2) * p.k + p.y, k = { left: 0, right: 0, top: 0, bottom: 0, ...n }, T = (k.left + h.width - k.right) / 2, N = (k.top + h.height - k.bottom) / 2, z = (T - m) / p.k, S = (N - y) / p.k;
    if (z || S) {
      const M = p.translate(z, S);
      return this.transition(this.svg).call(this.zoom.transform, M).end().catch(On);
    }
  }
  async rescale(e) {
    const n = this.svg.node(), { width: r, height: i } = n.getBoundingClientRect(), l = r / 2, h = i / 2, p = i0(n), m = p.translate((l - p.x) * (1 - e) / p.k, (h - p.y) * (1 - e) / p.k).scale(e);
    return this.transition(this.svg).call(this.zoom.transform, m).end().catch(On);
  }
  destroy() {
    this.svg.on(".zoom", null), this.svg.html(null), this._disposeList.forEach((e) => {
      e();
    });
  }
  static create(e, n, r = null) {
    const i = new xo(e, n);
    return r && i.setData(r).then(() => {
      i.fit();
    }), i;
  }
}
const Ed = { _useHtmlParser2: false };
function Qs(t2, e) {
  if (!t2)
    return e ?? Ed;
  const n = { _useHtmlParser2: !!t2.xmlMode, ...e, ...t2 };
  return t2.xml ? (n._useHtmlParser2 = true, n.xmlMode = true, t2.xml !== true && Object.assign(n, t2.xml)) : t2.xmlMode && (n._useHtmlParser2 = true), n;
}
var ze;
(function(t2) {
  t2.Root = "root", t2.Text = "text", t2.Directive = "directive", t2.Comment = "comment", t2.Script = "script", t2.Style = "style", t2.Tag = "tag", t2.CDATA = "cdata", t2.Doctype = "doctype";
})(ze || (ze = {}));
function Nd(t2) {
  return t2.type === ze.Tag || t2.type === ze.Script || t2.type === ze.Style;
}
const Id = ze.Root, zd = ze.Text, Od = ze.Directive, _d = ze.Comment, Bd = ze.Script, qd = ze.Style, Ld = ze.Tag, Dd = ze.CDATA, Rd = ze.Doctype;
let Il = class {
  constructor() {
    this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
  }
  get parentNode() {
    return this.parent;
  }
  set parentNode(t2) {
    this.parent = t2;
  }
  get previousSibling() {
    return this.prev;
  }
  set previousSibling(t2) {
    this.prev = t2;
  }
  get nextSibling() {
    return this.next;
  }
  set nextSibling(t2) {
    this.next = t2;
  }
  cloneNode(t2 = false) {
    return x0(this, t2);
  }
};
class wo extends Il {
  constructor(e) {
    super(), this.data = e;
  }
  get nodeValue() {
    return this.data;
  }
  set nodeValue(e) {
    this.data = e;
  }
}
class pr extends wo {
  constructor() {
    super(...arguments), this.type = ze.Text;
  }
  get nodeType() {
    return 3;
  }
}
class zl extends wo {
  constructor() {
    super(...arguments), this.type = ze.Comment;
  }
  get nodeType() {
    return 8;
  }
}
class Ol extends wo {
  constructor(e, n) {
    super(n), this.name = e, this.type = ze.Directive;
  }
  get nodeType() {
    return 1;
  }
}
class vo extends Il {
  constructor(e) {
    super(), this.children = e;
  }
  get firstChild() {
    var e;
    return (e = this.children[0]) !== null && e !== void 0 ? e : null;
  }
  get lastChild() {
    return this.children.length > 0 ? this.children[this.children.length - 1] : null;
  }
  get childNodes() {
    return this.children;
  }
  set childNodes(e) {
    this.children = e;
  }
}
class _l extends vo {
  constructor() {
    super(...arguments), this.type = ze.CDATA;
  }
  get nodeType() {
    return 4;
  }
}
let b0 = class extends vo {
  constructor() {
    super(...arguments), this.type = ze.Root;
  }
  get nodeType() {
    return 9;
  }
};
class Bl extends vo {
  constructor(e, n, r = [], i = e === "script" ? ze.Script : e === "style" ? ze.Style : ze.Tag) {
    super(r), this.name = e, this.attribs = n, this.type = i;
  }
  get nodeType() {
    return 1;
  }
  get tagName() {
    return this.name;
  }
  set tagName(e) {
    this.name = e;
  }
  get attributes() {
    return Object.keys(this.attribs).map((e) => {
      var n, r;
      return { name: e, value: this.attribs[e], namespace: (n = this["x-attribsNamespace"]) === null || n === void 0 ? void 0 : n[e], prefix: (r = this["x-attribsPrefix"]) === null || r === void 0 ? void 0 : r[e] };
    });
  }
}
function fe(t2) {
  return Nd(t2);
}
function Ar(t2) {
  return t2.type === ze.CDATA;
}
function xn(t2) {
  return t2.type === ze.Text;
}
function ko(t2) {
  return t2.type === ze.Comment;
}
function Pd(t2) {
  return t2.type === ze.Directive;
}
function kn(t2) {
  return t2.type === ze.Root;
}
function rt(t2) {
  return Object.prototype.hasOwnProperty.call(t2, "children");
}
function x0(t2, e = false) {
  let n;
  if (xn(t2))
    n = new pr(t2.data);
  else if (ko(t2))
    n = new zl(t2.data);
  else if (fe(t2)) {
    const r = e ? _s(t2.children) : [], i = new Bl(t2.name, { ...t2.attribs }, r);
    r.forEach((l) => l.parent = i), t2.namespace != null && (i.namespace = t2.namespace), t2["x-attribsNamespace"] && (i["x-attribsNamespace"] = { ...t2["x-attribsNamespace"] }), t2["x-attribsPrefix"] && (i["x-attribsPrefix"] = { ...t2["x-attribsPrefix"] }), n = i;
  } else if (Ar(t2)) {
    const r = e ? _s(t2.children) : [], i = new _l(r);
    r.forEach((l) => l.parent = i), n = i;
  } else if (kn(t2)) {
    const r = e ? _s(t2.children) : [], i = new b0(r);
    r.forEach((l) => l.parent = i), t2["x-mode"] && (i["x-mode"] = t2["x-mode"]), n = i;
  } else if (Pd(t2)) {
    const r = new Ol(t2.name, t2.data);
    t2["x-name"] != null && (r["x-name"] = t2["x-name"], r["x-publicId"] = t2["x-publicId"], r["x-systemId"] = t2["x-systemId"]), n = r;
  } else
    throw new Error(`Not implemented yet: ${t2.type}`);
  return n.startIndex = t2.startIndex, n.endIndex = t2.endIndex, t2.sourceCodeLocation != null && (n.sourceCodeLocation = t2.sourceCodeLocation), n;
}
function _s(t2) {
  const e = t2.map((n) => x0(n, true));
  for (let n = 1; n < e.length; n++)
    e[n].prev = e[n - 1], e[n - 1].next = e[n];
  return e;
}
const Da = { withStartIndices: false, withEndIndices: false, xmlMode: false };
class $d {
  constructor(e, n, r) {
    this.dom = [], this.root = new b0(this.dom), this.done = false, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof n == "function" && (r = n, n = Da), typeof e == "object" && (n = e, e = void 0), this.callback = e ?? null, this.options = n ?? Da, this.elementCB = r ?? null;
  }
  onparserinit(e) {
    this.parser = e;
  }
  onreset() {
    this.dom = [], this.root = new b0(this.dom), this.done = false, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
  }
  onend() {
    this.done || (this.done = true, this.parser = null, this.handleCallback(null));
  }
  onerror(e) {
    this.handleCallback(e);
  }
  onclosetag() {
    this.lastNode = null;
    const e = this.tagStack.pop();
    this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e);
  }
  onopentag(e, n) {
    const r = this.options.xmlMode ? ze.Tag : void 0, i = new Bl(e, n, void 0, r);
    this.addNode(i), this.tagStack.push(i);
  }
  ontext(e) {
    const { lastNode: n } = this;
    if (n && n.type === ze.Text)
      n.data += e, this.options.withEndIndices && (n.endIndex = this.parser.endIndex);
    else {
      const r = new pr(e);
      this.addNode(r), this.lastNode = r;
    }
  }
  oncomment(e) {
    if (this.lastNode && this.lastNode.type === ze.Comment) {
      this.lastNode.data += e;
      return;
    }
    const n = new zl(e);
    this.addNode(n), this.lastNode = n;
  }
  oncommentend() {
    this.lastNode = null;
  }
  oncdatastart() {
    const e = new pr(""), n = new _l([e]);
    this.addNode(n), e.parent = n, this.lastNode = e;
  }
  oncdataend() {
    this.lastNode = null;
  }
  onprocessinginstruction(e, n) {
    const r = new Ol(e, n);
    this.addNode(r);
  }
  handleCallback(e) {
    if (typeof this.callback == "function")
      this.callback(e, this.dom);
    else if (e)
      throw e;
  }
  addNode(e) {
    const n = this.tagStack[this.tagStack.length - 1], r = n.children[n.children.length - 1];
    this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), n.children.push(e), r && (e.prev = r, r.next = e), e.parent = n, this.lastNode = null;
  }
}
const ql = new Uint16Array('\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map((t2) => t2.charCodeAt(0))), Ll = new Uint16Array("\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map((t2) => t2.charCodeAt(0)));
var Bs;
const Fd = /* @__PURE__ */ new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), Zs = (Bs = String.fromCodePoint) !== null && Bs !== void 0 ? Bs : function(t2) {
  let e = "";
  return t2 > 65535 && (t2 -= 65536, e += String.fromCharCode(t2 >>> 10 & 1023 | 55296), t2 = 56320 | t2 & 1023), e += String.fromCharCode(t2), e;
};
function Hd(t2) {
  var e;
  return t2 >= 55296 && t2 <= 57343 || t2 > 1114111 ? 65533 : (e = Fd.get(t2)) !== null && e !== void 0 ? e : t2;
}
var nt;
(function(t2) {
  t2[t2.NUM = 35] = "NUM", t2[t2.SEMI = 59] = "SEMI", t2[t2.EQUALS = 61] = "EQUALS", t2[t2.ZERO = 48] = "ZERO", t2[t2.NINE = 57] = "NINE", t2[t2.LOWER_A = 97] = "LOWER_A", t2[t2.LOWER_F = 102] = "LOWER_F", t2[t2.LOWER_X = 120] = "LOWER_X", t2[t2.LOWER_Z = 122] = "LOWER_Z", t2[t2.UPPER_A = 65] = "UPPER_A", t2[t2.UPPER_F = 70] = "UPPER_F", t2[t2.UPPER_Z = 90] = "UPPER_Z";
})(nt || (nt = {}));
const Vd = 32;
var sn;
(function(t2) {
  t2[t2.VALUE_LENGTH = 49152] = "VALUE_LENGTH", t2[t2.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", t2[t2.JUMP_TABLE = 127] = "JUMP_TABLE";
})(sn || (sn = {}));
function Js(t2) {
  return t2 >= nt.ZERO && t2 <= nt.NINE;
}
function jd(t2) {
  return t2 >= nt.UPPER_A && t2 <= nt.UPPER_F || t2 >= nt.LOWER_A && t2 <= nt.LOWER_F;
}
function Ud(t2) {
  return t2 >= nt.UPPER_A && t2 <= nt.UPPER_Z || t2 >= nt.LOWER_A && t2 <= nt.LOWER_Z || Js(t2);
}
function Kd(t2) {
  return t2 === nt.EQUALS || Ud(t2);
}
var tt;
(function(t2) {
  t2[t2.EntityStart = 0] = "EntityStart", t2[t2.NumericStart = 1] = "NumericStart", t2[t2.NumericDecimal = 2] = "NumericDecimal", t2[t2.NumericHex = 3] = "NumericHex", t2[t2.NamedEntity = 4] = "NamedEntity";
})(tt || (tt = {}));
var Dt;
(function(t2) {
  t2[t2.Legacy = 0] = "Legacy", t2[t2.Strict = 1] = "Strict", t2[t2.Attribute = 2] = "Attribute";
})(Dt || (Dt = {}));
class Dl {
  constructor(e, n, r) {
    this.decodeTree = e, this.emitCodePoint = n, this.errors = r, this.state = tt.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = Dt.Strict;
  }
  startEntity(e) {
    this.decodeMode = e, this.state = tt.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  write(e, n) {
    switch (this.state) {
      case tt.EntityStart:
        return e.charCodeAt(n) === nt.NUM ? (this.state = tt.NumericStart, this.consumed += 1, this.stateNumericStart(e, n + 1)) : (this.state = tt.NamedEntity, this.stateNamedEntity(e, n));
      case tt.NumericStart:
        return this.stateNumericStart(e, n);
      case tt.NumericDecimal:
        return this.stateNumericDecimal(e, n);
      case tt.NumericHex:
        return this.stateNumericHex(e, n);
      case tt.NamedEntity:
        return this.stateNamedEntity(e, n);
    }
  }
  stateNumericStart(e, n) {
    return n >= e.length ? -1 : (e.charCodeAt(n) | Vd) === nt.LOWER_X ? (this.state = tt.NumericHex, this.consumed += 1, this.stateNumericHex(e, n + 1)) : (this.state = tt.NumericDecimal, this.stateNumericDecimal(e, n));
  }
  addToNumericResult(e, n, r, i) {
    if (n !== r) {
      const l = r - n;
      this.result = this.result * Math.pow(i, l) + parseInt(e.substr(n, l), i), this.consumed += l;
    }
  }
  stateNumericHex(e, n) {
    const r = n;
    for (; n < e.length; ) {
      const i = e.charCodeAt(n);
      if (Js(i) || jd(i))
        n += 1;
      else
        return this.addToNumericResult(e, r, n, 16), this.emitNumericEntity(i, 3);
    }
    return this.addToNumericResult(e, r, n, 16), -1;
  }
  stateNumericDecimal(e, n) {
    const r = n;
    for (; n < e.length; ) {
      const i = e.charCodeAt(n);
      if (Js(i))
        n += 1;
      else
        return this.addToNumericResult(e, r, n, 10), this.emitNumericEntity(i, 2);
    }
    return this.addToNumericResult(e, r, n, 10), -1;
  }
  emitNumericEntity(e, n) {
    var r;
    if (this.consumed <= n)
      return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (e === nt.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === Dt.Strict)
      return 0;
    return this.emitCodePoint(Hd(this.result), this.consumed), this.errors && (e !== nt.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  stateNamedEntity(e, n) {
    const { decodeTree: r } = this;
    let i = r[this.treeIndex], l = (i & sn.VALUE_LENGTH) >> 14;
    for (; n < e.length; n++, this.excess++) {
      const h = e.charCodeAt(n);
      if (this.treeIndex = Gd(r, i, this.treeIndex + Math.max(1, l), h), this.treeIndex < 0)
        return this.result === 0 || this.decodeMode === Dt.Attribute && (l === 0 || Kd(h)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (i = r[this.treeIndex], l = (i & sn.VALUE_LENGTH) >> 14, l !== 0) {
        if (h === nt.SEMI)
          return this.emitNamedEntityData(this.treeIndex, l, this.consumed + this.excess);
        this.decodeMode !== Dt.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  emitNotTerminatedNamedEntity() {
    var e;
    const { result: n, decodeTree: r } = this, i = (r[n] & sn.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(n, i, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  emitNamedEntityData(e, n, r) {
    const { decodeTree: i } = this;
    return this.emitCodePoint(n === 1 ? i[e] & ~sn.VALUE_LENGTH : i[e + 1], r), n === 3 && this.emitCodePoint(i[e + 2], r), r;
  }
  end() {
    var e;
    switch (this.state) {
      case tt.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== Dt.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      case tt.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case tt.NumericHex:
        return this.emitNumericEntity(0, 3);
      case tt.NumericStart:
        return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case tt.EntityStart:
        return 0;
    }
  }
}
function Rl(t2) {
  let e = "";
  const n = new Dl(t2, (r) => e += Zs(r));
  return function(r, i) {
    let l = 0, h = 0;
    for (; (h = r.indexOf("&", h)) >= 0; ) {
      e += r.slice(l, h), n.startEntity(i);
      const m = n.write(r, h + 1);
      if (m < 0) {
        l = h + n.end();
        break;
      }
      l = h + m, h = m === 0 ? l + 1 : l;
    }
    const p = e + r.slice(l);
    return e = "", p;
  };
}
function Gd(t2, e, n, r) {
  const i = (e & sn.BRANCH_LENGTH) >> 7, l = e & sn.JUMP_TABLE;
  if (i === 0)
    return l !== 0 && r === l ? n : -1;
  if (l) {
    const m = r - l;
    return m < 0 || m >= i ? -1 : t2[n + m] - 1;
  }
  let h = n, p = h + i - 1;
  for (; h <= p; ) {
    const m = h + p >>> 1, y = t2[m];
    if (y < r)
      h = m + 1;
    else if (y > r)
      p = m - 1;
    else
      return t2[m + i];
  }
  return -1;
}
Rl(ql);
Rl(Ll);
const Ra = /["&'<>$\x80-\uFFFF]/g, Xd = /* @__PURE__ */ new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), Wd = String.prototype.codePointAt != null ? (t2, e) => t2.codePointAt(e) : (t2, e) => (t2.charCodeAt(e) & 64512) === 55296 ? (t2.charCodeAt(e) - 55296) * 1024 + t2.charCodeAt(e + 1) - 56320 + 65536 : t2.charCodeAt(e);
function Pl(t2) {
  let e = "", n = 0, r;
  for (; (r = Ra.exec(t2)) !== null; ) {
    const i = r.index, l = t2.charCodeAt(i), h = Xd.get(l);
    h !== void 0 ? (e += t2.substring(n, i) + h, n = i + 1) : (e += `${t2.substring(n, i)}&#x${Wd(t2, i).toString(16)};`, n = Ra.lastIndex += +((l & 64512) === 55296));
  }
  return e + t2.substr(n);
}
function $l(t2, e) {
  return function(n) {
    let r, i = 0, l = "";
    for (; r = t2.exec(n); )
      i !== r.index && (l += n.substring(i, r.index)), l += e.get(r[0].charCodeAt(0)), i = r.index + 1;
    return l + n.substring(i);
  };
}
const Yd = $l(/["&\u00A0]/g, /* @__PURE__ */ new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), Qd = $l(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]])), Zd = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map((t2) => [t2.toLowerCase(), t2])), Jd = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map((t2) => [t2.toLowerCase(), t2])), ep = /* @__PURE__ */ new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function tp(t2) {
  return t2.replace(/"/g, "&quot;");
}
function np(t2, e) {
  var n;
  if (!t2)
    return;
  const r = ((n = e.encodeEntities) !== null && n !== void 0 ? n : e.decodeEntities) === false ? tp : e.xmlMode || e.encodeEntities !== "utf8" ? Pl : Yd;
  return Object.keys(t2).map((i) => {
    var l, h;
    const p = (l = t2[i]) !== null && l !== void 0 ? l : "";
    return e.xmlMode === "foreign" && (i = (h = Jd.get(i)) !== null && h !== void 0 ? h : i), !e.emptyAttrs && !e.xmlMode && p === "" ? i : `${i}="${r(p)}"`;
  }).join(" ");
}
const Pa = /* @__PURE__ */ new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function Tr(t2, e = {}) {
  const n = "length" in t2 ? t2 : [t2];
  let r = "";
  for (let i = 0; i < n.length; i++)
    r += rp(n[i], e);
  return r;
}
function rp(t2, e) {
  switch (t2.type) {
    case Id:
      return Tr(t2.children, e);
    case Rd:
    case Od:
      return ap(t2);
    case _d:
      return hp(t2);
    case Dd:
      return cp(t2);
    case Bd:
    case qd:
    case Ld:
      return ip(t2, e);
    case zd:
      return lp(t2, e);
  }
}
const sp = /* @__PURE__ */ new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), op = /* @__PURE__ */ new Set(["svg", "math"]);
function ip(t2, e) {
  var n;
  e.xmlMode === "foreign" && (t2.name = (n = Zd.get(t2.name)) !== null && n !== void 0 ? n : t2.name, t2.parent && sp.has(t2.parent.name) && (e = { ...e, xmlMode: false })), !e.xmlMode && op.has(t2.name) && (e = { ...e, xmlMode: "foreign" });
  let r = `<${t2.name}`;
  const i = np(t2.attribs, e);
  return i && (r += ` ${i}`), t2.children.length === 0 && (e.xmlMode ? e.selfClosingTags !== false : e.selfClosingTags && Pa.has(t2.name)) ? (e.xmlMode || (r += " "), r += "/>") : (r += ">", t2.children.length > 0 && (r += Tr(t2.children, e)), (e.xmlMode || !Pa.has(t2.name)) && (r += `</${t2.name}>`)), r;
}
function ap(t2) {
  return `<${t2.data}>`;
}
function lp(t2, e) {
  var n;
  let r = t2.data || "";
  return ((n = e.encodeEntities) !== null && n !== void 0 ? n : e.decodeEntities) !== false && !(!e.xmlMode && t2.parent && ep.has(t2.parent.name)) && (r = e.xmlMode || e.encodeEntities !== "utf8" ? Pl(r) : Qd(r)), r;
}
function cp(t2) {
  return `<![CDATA[${t2.children[0].data}]]>`;
}
function hp(t2) {
  return `<!--${t2.data}-->`;
}
function Fl(t2, e) {
  return Tr(t2, e);
}
function up(t2, e) {
  return rt(t2) ? t2.children.map((n) => Fl(n, e)).join("") : "";
}
function lr(t2) {
  return Array.isArray(t2) ? t2.map(lr).join("") : fe(t2) ? t2.name === "br" ? `
` : lr(t2.children) : Ar(t2) ? lr(t2.children) : xn(t2) ? t2.data : "";
}
function Pn(t2) {
  return Array.isArray(t2) ? t2.map(Pn).join("") : rt(t2) && !ko(t2) ? Pn(t2.children) : xn(t2) ? t2.data : "";
}
function mr(t2) {
  return Array.isArray(t2) ? t2.map(mr).join("") : rt(t2) && (t2.type === ze.Tag || Ar(t2)) ? mr(t2.children) : xn(t2) ? t2.data : "";
}
function Mr(t2) {
  return rt(t2) ? t2.children : [];
}
function Hl(t2) {
  return t2.parent || null;
}
function Vl(t2) {
  const e = Hl(t2);
  if (e != null)
    return Mr(e);
  const n = [t2];
  let { prev: r, next: i } = t2;
  for (; r != null; )
    n.unshift(r), { prev: r } = r;
  for (; i != null; )
    n.push(i), { next: i } = i;
  return n;
}
function dp(t2, e) {
  var n;
  return (n = t2.attribs) === null || n === void 0 ? void 0 : n[e];
}
function pp(t2, e) {
  return t2.attribs != null && Object.prototype.hasOwnProperty.call(t2.attribs, e) && t2.attribs[e] != null;
}
function mp(t2) {
  return t2.name;
}
function So(t2) {
  let { next: e } = t2;
  for (; e !== null && !fe(e); )
    ({ next: e } = e);
  return e;
}
function Ao(t2) {
  let { prev: e } = t2;
  for (; e !== null && !fe(e); )
    ({ prev: e } = e);
  return e;
}
function Sn(t2) {
  if (t2.prev && (t2.prev.next = t2.next), t2.next && (t2.next.prev = t2.prev), t2.parent) {
    const e = t2.parent.children, n = e.lastIndexOf(t2);
    n >= 0 && e.splice(n, 1);
  }
  t2.next = null, t2.prev = null, t2.parent = null;
}
function fp(t2, e) {
  const n = e.prev = t2.prev;
  n && (n.next = e);
  const r = e.next = t2.next;
  r && (r.prev = e);
  const i = e.parent = t2.parent;
  if (i) {
    const l = i.children;
    l[l.lastIndexOf(t2)] = e, t2.parent = null;
  }
}
function gp(t2, e) {
  if (Sn(e), e.next = null, e.parent = t2, t2.children.push(e) > 1) {
    const n = t2.children[t2.children.length - 2];
    n.next = e, e.prev = n;
  } else
    e.prev = null;
}
function yp(t2, e) {
  Sn(e);
  const { parent: n } = t2, r = t2.next;
  if (e.next = r, e.prev = t2, t2.next = e, e.parent = n, r) {
    if (r.prev = e, n) {
      const i = n.children;
      i.splice(i.lastIndexOf(r), 0, e);
    }
  } else
    n && n.children.push(e);
}
function bp(t2, e) {
  if (Sn(e), e.parent = t2, e.prev = null, t2.children.unshift(e) !== 1) {
    const n = t2.children[1];
    n.prev = e, e.next = n;
  } else
    e.next = null;
}
function xp(t2, e) {
  Sn(e);
  const { parent: n } = t2;
  if (n) {
    const r = n.children;
    r.splice(r.indexOf(t2), 0, e);
  }
  t2.prev && (t2.prev.next = e), e.parent = n, e.prev = t2.prev, e.next = t2, t2.prev = e;
}
function Cr(t2, e, n = true, r = 1 / 0) {
  return To(t2, Array.isArray(e) ? e : [e], n, r);
}
function To(t2, e, n, r) {
  const i = [], l = [e], h = [0];
  for (; ; ) {
    if (h[0] >= l[0].length) {
      if (h.length === 1)
        return i;
      l.shift(), h.shift();
      continue;
    }
    const p = l[0][h[0]++];
    if (t2(p) && (i.push(p), --r <= 0))
      return i;
    n && rt(p) && p.children.length > 0 && (h.unshift(0), l.unshift(p.children));
  }
}
function wp(t2, e) {
  return e.find(t2);
}
function Mo(t2, e, n = true) {
  let r = null;
  for (let i = 0; i < e.length && !r; i++) {
    const l = e[i];
    if (fe(l))
      t2(l) ? r = l : n && l.children.length > 0 && (r = Mo(t2, l.children, true));
    else
      continue;
  }
  return r;
}
function jl(t2, e) {
  return e.some((n) => fe(n) && (t2(n) || jl(t2, n.children)));
}
function vp(t2, e) {
  const n = [], r = [e], i = [0];
  for (; ; ) {
    if (i[0] >= r[0].length) {
      if (r.length === 1)
        return n;
      r.shift(), i.shift();
      continue;
    }
    const l = r[0][i[0]++];
    fe(l) && (t2(l) && n.push(l), l.children.length > 0 && (i.unshift(0), r.unshift(l.children)));
  }
}
const fr = { tag_name(t2) {
  return typeof t2 == "function" ? (e) => fe(e) && t2(e.name) : t2 === "*" ? fe : (e) => fe(e) && e.name === t2;
}, tag_type(t2) {
  return typeof t2 == "function" ? (e) => t2(e.type) : (e) => e.type === t2;
}, tag_contains(t2) {
  return typeof t2 == "function" ? (e) => xn(e) && t2(e.data) : (e) => xn(e) && e.data === t2;
} };
function Ul(t2, e) {
  return typeof e == "function" ? (n) => fe(n) && e(n.attribs[t2]) : (n) => fe(n) && n.attribs[t2] === e;
}
function kp(t2, e) {
  return (n) => t2(n) || e(n);
}
function Kl(t2) {
  const e = Object.keys(t2).map((n) => {
    const r = t2[n];
    return Object.prototype.hasOwnProperty.call(fr, n) ? fr[n](r) : Ul(n, r);
  });
  return e.length === 0 ? null : e.reduce(kp);
}
function Sp(t2, e) {
  const n = Kl(t2);
  return n ? n(e) : true;
}
function Ap(t2, e, n, r = 1 / 0) {
  const i = Kl(t2);
  return i ? Cr(i, e, n, r) : [];
}
function Tp(t2, e, n = true) {
  return Array.isArray(e) || (e = [e]), Mo(Ul("id", t2), e, n);
}
function Hn(t2, e, n = true, r = 1 / 0) {
  return Cr(fr.tag_name(t2), e, n, r);
}
function Mp(t2, e, n = true, r = 1 / 0) {
  return Cr(fr.tag_type(t2), e, n, r);
}
function Cp(t2) {
  let e = t2.length;
  for (; --e >= 0; ) {
    const n = t2[e];
    if (e > 0 && t2.lastIndexOf(n, e - 1) >= 0) {
      t2.splice(e, 1);
      continue;
    }
    for (let r = n.parent; r; r = r.parent)
      if (t2.includes(r)) {
        t2.splice(e, 1);
        break;
      }
  }
  return t2;
}
var At;
(function(t2) {
  t2[t2.DISCONNECTED = 1] = "DISCONNECTED", t2[t2.PRECEDING = 2] = "PRECEDING", t2[t2.FOLLOWING = 4] = "FOLLOWING", t2[t2.CONTAINS = 8] = "CONTAINS", t2[t2.CONTAINED_BY = 16] = "CONTAINED_BY";
})(At || (At = {}));
function Gl(t2, e) {
  const n = [], r = [];
  if (t2 === e)
    return 0;
  let i = rt(t2) ? t2 : t2.parent;
  for (; i; )
    n.unshift(i), i = i.parent;
  for (i = rt(e) ? e : e.parent; i; )
    r.unshift(i), i = i.parent;
  const l = Math.min(n.length, r.length);
  let h = 0;
  for (; h < l && n[h] === r[h]; )
    h++;
  if (h === 0)
    return At.DISCONNECTED;
  const p = n[h - 1], m = p.children, y = n[h], k = r[h];
  return m.indexOf(y) > m.indexOf(k) ? p === e ? At.FOLLOWING | At.CONTAINED_BY : At.FOLLOWING : p === t2 ? At.PRECEDING | At.CONTAINS : At.PRECEDING;
}
function Vn(t2) {
  return t2 = t2.filter((e, n, r) => !r.includes(e, n + 1)), t2.sort((e, n) => {
    const r = Gl(e, n);
    return r & At.PRECEDING ? -1 : r & At.FOLLOWING ? 1 : 0;
  }), t2;
}
function Ep(t2) {
  const e = gr(_p, t2);
  return e ? e.name === "feed" ? Np(e) : Ip(e) : null;
}
function Np(t2) {
  var e;
  const n = t2.children, r = { type: "atom", items: Hn("entry", n).map((h) => {
    var p;
    const { children: m } = h, y = { media: Xl(m) };
    dt(y, "id", "id", m), dt(y, "title", "title", m);
    const k = (p = gr("link", m)) === null || p === void 0 ? void 0 : p.attribs.href;
    k && (y.link = k);
    const T = on("summary", m) || on("content", m);
    T && (y.description = T);
    const N = on("updated", m);
    return N && (y.pubDate = new Date(N)), y;
  }) };
  dt(r, "id", "id", n), dt(r, "title", "title", n);
  const i = (e = gr("link", n)) === null || e === void 0 ? void 0 : e.attribs.href;
  i && (r.link = i), dt(r, "description", "subtitle", n);
  const l = on("updated", n);
  return l && (r.updated = new Date(l)), dt(r, "author", "email", n, true), r;
}
function Ip(t2) {
  var e, n;
  const r = (n = (e = gr("channel", t2.children)) === null || e === void 0 ? void 0 : e.children) !== null && n !== void 0 ? n : [], i = { type: t2.name.substr(0, 3), id: "", items: Hn("item", t2.children).map((h) => {
    const { children: p } = h, m = { media: Xl(p) };
    dt(m, "id", "guid", p), dt(m, "title", "title", p), dt(m, "link", "link", p), dt(m, "description", "description", p);
    const y = on("pubDate", p) || on("dc:date", p);
    return y && (m.pubDate = new Date(y)), m;
  }) };
  dt(i, "title", "title", r), dt(i, "link", "link", r), dt(i, "description", "description", r);
  const l = on("lastBuildDate", r);
  return l && (i.updated = new Date(l)), dt(i, "author", "managingEditor", r, true), i;
}
const zp = ["url", "type", "lang"], Op = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function Xl(t2) {
  return Hn("media:content", t2).map((e) => {
    const { attribs: n } = e, r = { medium: n.medium, isDefault: !!n.isDefault };
    for (const i of zp)
      n[i] && (r[i] = n[i]);
    for (const i of Op)
      n[i] && (r[i] = parseInt(n[i], 10));
    return n.expression && (r.expression = n.expression), r;
  });
}
function gr(t2, e) {
  return Hn(t2, e, true, 1)[0];
}
function on(t2, e, n = false) {
  return Pn(Hn(t2, e, n, 1)).trim();
}
function dt(t2, e, n, r, i = false) {
  const l = on(n, r, i);
  l && (t2[e] = l);
}
function _p(t2) {
  return t2 === "rss" || t2 === "feed" || t2 === "rdf:RDF";
}
const Er = Object.freeze(Object.defineProperty({ __proto__: null, get DocumentPosition() {
  return At;
}, append: yp, appendChild: gp, compareDocumentPosition: Gl, existsOne: jl, filter: Cr, find: To, findAll: vp, findOne: Mo, findOneChild: wp, getAttributeValue: dp, getChildren: Mr, getElementById: Tp, getElements: Ap, getElementsByTagName: Hn, getElementsByTagType: Mp, getFeed: Ep, getInnerHTML: up, getName: mp, getOuterHTML: Fl, getParent: Hl, getSiblings: Vl, getText: lr, hasAttrib: pp, hasChildren: rt, innerText: mr, isCDATA: Ar, isComment: ko, isDocument: kn, isTag: fe, isText: xn, nextElementSibling: So, prepend: xp, prependChild: bp, prevElementSibling: Ao, removeElement: Sn, removeSubsets: Cp, replaceElement: fp, testElement: Sp, textContent: Pn, uniqueSort: Vn }, Symbol.toStringTag, { value: "Module" }));
function Wl(t2, e, n) {
  return t2 ? t2(e ?? t2._root.children, null, void 0, n).toString() : "";
}
function Bp(t2, e) {
  return typeof t2 == "object" && t2 != null && !("length" in t2) && !("type" in t2);
}
function qp(t2, e) {
  const n = Bp(t2) ? (e = t2, void 0) : t2, r = { ...this === null || this === void 0 ? void 0 : this._options, ...Qs(e) };
  return Wl(this, n, r);
}
function Lp(t2) {
  const e = { ...this._options, xmlMode: true };
  return Wl(this, t2, e);
}
function w0(t2) {
  const e = t2 ?? (this ? this.root() : []);
  let n = "";
  for (let r = 0; r < e.length; r++)
    n += Pn(e[r]);
  return n;
}
function Dp(t2, e, n = typeof e == "boolean" ? e : false) {
  if (!t2 || typeof t2 != "string")
    return null;
  typeof e == "boolean" && (n = e);
  const r = this.load(t2, this._options, false);
  return n || r("script").remove(), [...r.root()[0].children];
}
function Rp() {
  return this(this._root);
}
function Yl(t2, e) {
  if (e === t2)
    return false;
  let n = e;
  for (; n && n !== n.parent; )
    if (n = n.parent, n === t2)
      return true;
  return false;
}
function Pp(t2) {
  return this.root().extract(t2);
}
function $p(t2, e) {
  if (!$a(t2) || !$a(e))
    return;
  let n = t2.length;
  const r = +e.length;
  for (let i = 0; i < r; i++)
    t2[n++] = e[i];
  return t2.length = n, t2;
}
function $a(t2) {
  if (Array.isArray(t2))
    return true;
  if (typeof t2 != "object" || t2 === null || !("length" in t2) || typeof t2.length != "number" || t2.length < 0)
    return false;
  for (let e = 0; e < t2.length; e++)
    if (!(e in t2))
      return false;
  return true;
}
const Fp = Object.freeze(Object.defineProperty({ __proto__: null, contains: Yl, extract: Pp, html: qp, merge: $p, parseHTML: Dp, root: Rp, text: w0, xml: Lp }, Symbol.toStringTag, { value: "Module" }));
function Wt(t2) {
  return t2.cheerio != null;
}
function Hp(t2) {
  return t2.replace(/[._-](\w|$)/g, (e, n) => n.toUpperCase());
}
function Vp(t2) {
  return t2.replace(/[A-Z]/g, "-$&").toLowerCase();
}
function Ue(t2, e) {
  const n = t2.length;
  for (let r = 0; r < n; r++)
    e(t2[r], r);
  return t2;
}
var gn;
(function(t2) {
  t2[t2.LowerA = 97] = "LowerA", t2[t2.LowerZ = 122] = "LowerZ", t2[t2.UpperA = 65] = "UpperA", t2[t2.UpperZ = 90] = "UpperZ", t2[t2.Exclamation = 33] = "Exclamation";
})(gn || (gn = {}));
function eo(t2) {
  const e = t2.indexOf("<");
  if (e < 0 || e > t2.length - 3)
    return false;
  const n = t2.charCodeAt(e + 1);
  return (n >= gn.LowerA && n <= gn.LowerZ || n >= gn.UpperA && n <= gn.UpperZ || n === gn.Exclamation) && t2.includes(">", e + 2);
}
const v0 = Object.prototype.hasOwnProperty, k0 = /\s+/, to = "data-", Co = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, jp = /^{[^]*}$|^\[[^]*]$/;
function yr(t2, e, n) {
  var r;
  if (!(!t2 || !fe(t2))) {
    if ((r = t2.attribs) !== null && r !== void 0 || (t2.attribs = {}), !e)
      return t2.attribs;
    if (v0.call(t2.attribs, e))
      return !n && Co.test(e) ? e : t2.attribs[e];
    if (t2.name === "option" && e === "value")
      return w0(t2.children);
    if (t2.name === "input" && (t2.attribs.type === "radio" || t2.attribs.type === "checkbox") && e === "value")
      return "on";
  }
}
function Ln(t2, e, n) {
  n === null ? Zl(t2, e) : t2.attribs[e] = `${n}`;
}
function Up(t2, e) {
  if (typeof t2 == "object" || e !== void 0) {
    if (typeof e == "function") {
      if (typeof t2 != "string")
        throw new Error("Bad combination of arguments.");
      return Ue(this, (n, r) => {
        fe(n) && Ln(n, t2, e.call(n, r, n.attribs[t2]));
      });
    }
    return Ue(this, (n) => {
      if (fe(n))
        if (typeof t2 == "object")
          for (const r of Object.keys(t2)) {
            const i = t2[r];
            Ln(n, r, i);
          }
        else
          Ln(n, t2, e);
    });
  }
  return arguments.length > 1 ? this : yr(this[0], t2, this.options.xmlMode);
}
function Fa(t2, e, n) {
  return e in t2 ? t2[e] : !n && Co.test(e) ? yr(t2, e, false) !== void 0 : yr(t2, e, n);
}
function qs(t2, e, n, r) {
  e in t2 ? t2[e] = n : Ln(t2, e, !r && Co.test(e) ? n ? "" : null : `${n}`);
}
function Kp(t2, e) {
  var n;
  if (typeof t2 == "string" && e === void 0) {
    const r = this[0];
    if (!r || !fe(r))
      return;
    switch (t2) {
      case "style": {
        const i = this.css(), l = Object.keys(i);
        for (let h = 0; h < l.length; h++)
          i[h] = l[h];
        return i.length = l.length, i;
      }
      case "tagName":
      case "nodeName":
        return r.name.toUpperCase();
      case "href":
      case "src": {
        const i = (n = r.attribs) === null || n === void 0 ? void 0 : n[t2];
        return typeof URL < "u" && (t2 === "href" && (r.tagName === "a" || r.tagName === "link") || t2 === "src" && (r.tagName === "img" || r.tagName === "iframe" || r.tagName === "audio" || r.tagName === "video" || r.tagName === "source")) && i !== void 0 && this.options.baseURI ? new URL(i, this.options.baseURI).href : i;
      }
      case "innerText":
        return mr(r);
      case "textContent":
        return Pn(r);
      case "outerHTML":
        return this.clone().wrap("<container />").parent().html();
      case "innerHTML":
        return this.html();
      default:
        return Fa(r, t2, this.options.xmlMode);
    }
  }
  if (typeof t2 == "object" || e !== void 0) {
    if (typeof e == "function") {
      if (typeof t2 == "object")
        throw new TypeError("Bad combination of arguments.");
      return Ue(this, (r, i) => {
        fe(r) && qs(r, t2, e.call(r, i, Fa(r, t2, this.options.xmlMode)), this.options.xmlMode);
      });
    }
    return Ue(this, (r) => {
      if (fe(r))
        if (typeof t2 == "object")
          for (const i of Object.keys(t2)) {
            const l = t2[i];
            qs(r, i, l, this.options.xmlMode);
          }
        else
          qs(r, t2, e, this.options.xmlMode);
    });
  }
}
function Ha(t2, e, n) {
  var r;
  (r = t2.data) !== null && r !== void 0 || (t2.data = {}), typeof e == "object" ? Object.assign(t2.data, e) : typeof e == "string" && n !== void 0 && (t2.data[e] = n);
}
function Gp(t2) {
  for (const e of Object.keys(t2.attribs)) {
    if (!e.startsWith(to))
      continue;
    const n = Hp(e.slice(to.length));
    v0.call(t2.data, n) || (t2.data[n] = Ql(t2.attribs[e]));
  }
  return t2.data;
}
function Xp(t2, e) {
  const n = to + Vp(e), r = t2.data;
  if (v0.call(r, e))
    return r[e];
  if (v0.call(t2.attribs, n))
    return r[e] = Ql(t2.attribs[n]);
}
function Ql(t2) {
  if (t2 === "null")
    return null;
  if (t2 === "true")
    return true;
  if (t2 === "false")
    return false;
  const e = Number(t2);
  if (t2 === String(e))
    return e;
  if (jp.test(t2))
    try {
      return JSON.parse(t2);
    } catch {
    }
  return t2;
}
function Wp(t2, e) {
  var n;
  const r = this[0];
  if (!r || !fe(r))
    return;
  const i = r;
  return (n = i.data) !== null && n !== void 0 || (i.data = {}), t2 == null ? Gp(i) : typeof t2 == "object" || e !== void 0 ? (Ue(this, (l) => {
    fe(l) && (typeof t2 == "object" ? Ha(l, t2) : Ha(l, t2, e));
  }), this) : Xp(i, t2);
}
function Yp(t2) {
  const e = arguments.length === 0, n = this[0];
  if (!n || !fe(n))
    return e ? void 0 : this;
  switch (n.name) {
    case "textarea":
      return this.text(t2);
    case "select": {
      const r = this.find("option:selected");
      if (!e) {
        if (this.attr("multiple") == null && typeof t2 == "object")
          return this;
        this.find("option").removeAttr("selected");
        const i = typeof t2 == "object" ? t2 : [t2];
        for (const l of i)
          this.find(`option[value="${l}"]`).attr("selected", "");
        return this;
      }
      return this.attr("multiple") ? r.toArray().map((i) => w0(i.children)) : r.attr("value");
    }
    case "input":
    case "option":
      return e ? this.attr("value") : this.attr("value", t2);
  }
}
function Zl(t2, e) {
  !t2.attribs || !v0.call(t2.attribs, e) || delete t2.attribs[e];
}
function br(t2) {
  return t2 ? t2.trim().split(k0) : [];
}
function Qp(t2) {
  const e = br(t2);
  for (const n of e)
    Ue(this, (r) => {
      fe(r) && Zl(r, n);
    });
  return this;
}
function Zp(t2) {
  return this.toArray().some((e) => {
    const n = fe(e) && e.attribs.class;
    let r = -1;
    if (n && t2.length > 0)
      for (; (r = n.indexOf(t2, r + 1)) > -1; ) {
        const i = r + t2.length;
        if ((r === 0 || k0.test(n[r - 1])) && (i === n.length || k0.test(n[i])))
          return true;
      }
    return false;
  });
}
function Jl(t2) {
  if (typeof t2 == "function")
    return Ue(this, (r, i) => {
      if (fe(r)) {
        const l = r.attribs.class || "";
        Jl.call([r], t2.call(r, i, l));
      }
    });
  if (!t2 || typeof t2 != "string")
    return this;
  const e = t2.split(k0), n = this.length;
  for (let r = 0; r < n; r++) {
    const i = this[r];
    if (!fe(i))
      continue;
    const l = yr(i, "class", false);
    if (l) {
      let h = ` ${l} `;
      for (const p of e) {
        const m = `${p} `;
        h.includes(` ${m}`) || (h += m);
      }
      Ln(i, "class", h.trim());
    } else
      Ln(i, "class", e.join(" ").trim());
  }
  return this;
}
function ec(t2) {
  if (typeof t2 == "function")
    return Ue(this, (i, l) => {
      fe(i) && ec.call([i], t2.call(i, l, i.attribs.class || ""));
    });
  const e = br(t2), n = e.length, r = arguments.length === 0;
  return Ue(this, (i) => {
    if (fe(i))
      if (r)
        i.attribs.class = "";
      else {
        const l = br(i.attribs.class);
        let h = false;
        for (let p = 0; p < n; p++) {
          const m = l.indexOf(e[p]);
          m >= 0 && (l.splice(m, 1), h = true, p--);
        }
        h && (i.attribs.class = l.join(" "));
      }
  });
}
function tc(t2, e) {
  if (typeof t2 == "function")
    return Ue(this, (h, p) => {
      fe(h) && tc.call([h], t2.call(h, p, h.attribs.class || "", e), e);
    });
  if (!t2 || typeof t2 != "string")
    return this;
  const n = t2.split(k0), r = n.length, i = typeof e == "boolean" ? e ? 1 : -1 : 0, l = this.length;
  for (let h = 0; h < l; h++) {
    const p = this[h];
    if (!fe(p))
      continue;
    const m = br(p.attribs.class);
    for (let y = 0; y < r; y++) {
      const k = m.indexOf(n[y]);
      i >= 0 && k < 0 ? m.push(n[y]) : i <= 0 && k >= 0 && m.splice(k, 1);
    }
    p.attribs.class = m.join(" ");
  }
  return this;
}
const Jp = Object.freeze(Object.defineProperty({ __proto__: null, addClass: Jl, attr: Up, data: Wp, hasClass: Zp, prop: Kp, removeAttr: Qp, removeClass: ec, toggleClass: tc, val: Yp }, Symbol.toStringTag, { value: "Module" }));
var he;
(function(t2) {
  t2.Attribute = "attribute", t2.Pseudo = "pseudo", t2.PseudoElement = "pseudo-element", t2.Tag = "tag", t2.Universal = "universal", t2.Adjacent = "adjacent", t2.Child = "child", t2.Descendant = "descendant", t2.Parent = "parent", t2.Sibling = "sibling", t2.ColumnCombinator = "column-combinator";
})(he || (he = {}));
var et;
(function(t2) {
  t2.Any = "any", t2.Element = "element", t2.End = "end", t2.Equals = "equals", t2.Exists = "exists", t2.Hyphen = "hyphen", t2.Not = "not", t2.Start = "start";
})(et || (et = {}));
const Va = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, em = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, tm = /* @__PURE__ */ new Map([[126, et.Element], [94, et.Start], [36, et.End], [42, et.Any], [33, et.Not], [124, et.Hyphen]]), nm = /* @__PURE__ */ new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function f0(t2) {
  switch (t2.type) {
    case he.Adjacent:
    case he.Child:
    case he.Descendant:
    case he.Parent:
    case he.Sibling:
    case he.ColumnCombinator:
      return true;
    default:
      return false;
  }
}
const rm = /* @__PURE__ */ new Set(["contains", "icontains"]);
function sm(t2, e, n) {
  const r = parseInt(e, 16) - 65536;
  return r !== r || n ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320);
}
function l0(t2) {
  return t2.replace(em, sm);
}
function Ls(t2) {
  return t2 === 39 || t2 === 34;
}
function ja(t2) {
  return t2 === 32 || t2 === 9 || t2 === 10 || t2 === 12 || t2 === 13;
}
function Nr(t2) {
  const e = [], n = nc(e, `${t2}`, 0);
  if (n < t2.length)
    throw new Error(`Unmatched selector: ${t2.slice(n)}`);
  return e;
}
function nc(t2, e, n) {
  let r = [];
  function i(N) {
    const z = e.slice(n + N).match(Va);
    if (!z)
      throw new Error(`Expected name, found ${e.slice(n)}`);
    const [S] = z;
    return n += N + S.length, l0(S);
  }
  function l(N) {
    for (n += N; n < e.length && ja(e.charCodeAt(n)); )
      n++;
  }
  function h() {
    n += 1;
    const N = n;
    let z = 1;
    for (; z > 0 && n < e.length; n++)
      e.charCodeAt(n) === 40 && !p(n) ? z++ : e.charCodeAt(n) === 41 && !p(n) && z--;
    if (z)
      throw new Error("Parenthesis not matched");
    return l0(e.slice(N, n - 1));
  }
  function p(N) {
    let z = 0;
    for (; e.charCodeAt(--N) === 92; )
      z++;
    return (z & 1) === 1;
  }
  function m() {
    if (r.length > 0 && f0(r[r.length - 1]))
      throw new Error("Did not expect successive traversals.");
  }
  function y(N) {
    if (r.length > 0 && r[r.length - 1].type === he.Descendant) {
      r[r.length - 1].type = N;
      return;
    }
    m(), r.push({ type: N });
  }
  function k(N, z) {
    r.push({ type: he.Attribute, name: N, action: z, value: i(1), namespace: null, ignoreCase: "quirks" });
  }
  function T() {
    if (r.length && r[r.length - 1].type === he.Descendant && r.pop(), r.length === 0)
      throw new Error("Empty sub-selector");
    t2.push(r);
  }
  if (l(0), e.length === n)
    return n;
  e:
    for (; n < e.length; ) {
      const N = e.charCodeAt(n);
      switch (N) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
          (r.length === 0 || r[0].type !== he.Descendant) && (m(), r.push({ type: he.Descendant })), l(1);
          break;
        }
        case 62: {
          y(he.Child), l(1);
          break;
        }
        case 60: {
          y(he.Parent), l(1);
          break;
        }
        case 126: {
          y(he.Sibling), l(1);
          break;
        }
        case 43: {
          y(he.Adjacent), l(1);
          break;
        }
        case 46: {
          k("class", et.Element);
          break;
        }
        case 35: {
          k("id", et.Equals);
          break;
        }
        case 91: {
          l(1);
          let z, S = null;
          e.charCodeAt(n) === 124 ? z = i(1) : e.startsWith("*|", n) ? (S = "*", z = i(2)) : (z = i(0), e.charCodeAt(n) === 124 && e.charCodeAt(n + 1) !== 61 && (S = z, z = i(1))), l(0);
          let M = et.Exists;
          const C = tm.get(e.charCodeAt(n));
          if (C) {
            if (M = C, e.charCodeAt(n + 1) !== 61)
              throw new Error("Expected `=`");
            l(2);
          } else
            e.charCodeAt(n) === 61 && (M = et.Equals, l(1));
          let B = "", H = null;
          if (M !== "exists") {
            if (Ls(e.charCodeAt(n))) {
              const U = e.charCodeAt(n);
              let X = n + 1;
              for (; X < e.length && (e.charCodeAt(X) !== U || p(X)); )
                X += 1;
              if (e.charCodeAt(X) !== U)
                throw new Error("Attribute value didn't end");
              B = l0(e.slice(n + 1, X)), n = X + 1;
            } else {
              const U = n;
              for (; n < e.length && (!ja(e.charCodeAt(n)) && e.charCodeAt(n) !== 93 || p(n)); )
                n += 1;
              B = l0(e.slice(U, n));
            }
            l(0);
            const V = e.charCodeAt(n) | 32;
            V === 115 ? (H = false, l(1)) : V === 105 && (H = true, l(1));
          }
          if (e.charCodeAt(n) !== 93)
            throw new Error("Attribute selector didn't terminate");
          n += 1;
          const F = { type: he.Attribute, name: z, action: M, value: B, namespace: S, ignoreCase: H };
          r.push(F);
          break;
        }
        case 58: {
          if (e.charCodeAt(n + 1) === 58) {
            r.push({ type: he.PseudoElement, name: i(2).toLowerCase(), data: e.charCodeAt(n) === 40 ? h() : null });
            continue;
          }
          const z = i(1).toLowerCase();
          let S = null;
          if (e.charCodeAt(n) === 40)
            if (nm.has(z)) {
              if (Ls(e.charCodeAt(n + 1)))
                throw new Error(`Pseudo-selector ${z} cannot be quoted`);
              if (S = [], n = nc(S, e, n + 1), e.charCodeAt(n) !== 41)
                throw new Error(`Missing closing parenthesis in :${z} (${e})`);
              n += 1;
            } else {
              if (S = h(), rm.has(z)) {
                const M = S.charCodeAt(0);
                M === S.charCodeAt(S.length - 1) && Ls(M) && (S = S.slice(1, -1));
              }
              S = l0(S);
            }
          r.push({ type: he.Pseudo, name: z, data: S });
          break;
        }
        case 44: {
          T(), r = [], l(1);
          break;
        }
        default: {
          if (e.startsWith("/*", n)) {
            const M = e.indexOf("*/", n + 2);
            if (M < 0)
              throw new Error("Comment was not terminated");
            n = M + 2, r.length === 0 && l(0);
            break;
          }
          let z = null, S;
          if (N === 42)
            n += 1, S = "*";
          else if (N === 124) {
            if (S = "", e.charCodeAt(n + 1) === 124) {
              y(he.ColumnCombinator), l(2);
              break;
            }
          } else if (Va.test(e.slice(n)))
            S = i(0);
          else
            break e;
          e.charCodeAt(n) === 124 && e.charCodeAt(n + 1) !== 124 && (z = S, e.charCodeAt(n + 1) === 42 ? (S = "*", n += 2) : S = i(1)), r.push(S === "*" ? { type: he.Universal, namespace: z } : { type: he.Tag, name: S, namespace: z });
        }
      }
    }
  return T(), n;
}
function om(t2) {
  return t2 && t2.__esModule && Object.prototype.hasOwnProperty.call(t2, "default") ? t2.default : t2;
}
var Ua, Ka;
function im() {
  return Ka || (Ka = 1, Ua = { trueFunc: function() {
    return true;
  }, falseFunc: function() {
    return false;
  } }), Ua;
}
var xr = im();
const Se = om(xr), rc = /* @__PURE__ */ new Map([[he.Universal, 50], [he.Tag, 30], [he.Attribute, 1], [he.Pseudo, 0]]);
function Eo(t2) {
  return !rc.has(t2.type);
}
const am = /* @__PURE__ */ new Map([[et.Exists, 10], [et.Equals, 8], [et.Not, 7], [et.Start, 6], [et.End, 6], [et.Any, 5]]);
function lm(t2) {
  const e = t2.map(sc);
  for (let n = 1; n < t2.length; n++) {
    const r = e[n];
    if (!(r < 0))
      for (let i = n - 1; i >= 0 && r < e[i]; i--) {
        const l = t2[i + 1];
        t2[i + 1] = t2[i], t2[i] = l, e[i + 1] = e[i], e[i] = r;
      }
  }
}
function sc(t2) {
  var e, n;
  let r = (e = rc.get(t2.type)) !== null && e !== void 0 ? e : -1;
  return t2.type === he.Attribute ? (r = (n = am.get(t2.action)) !== null && n !== void 0 ? n : 4, t2.action === et.Equals && t2.name === "id" && (r = 9), t2.ignoreCase && (r >>= 1)) : t2.type === he.Pseudo && (t2.data ? t2.name === "has" || t2.name === "contains" ? r = 0 : Array.isArray(t2.data) ? (r = Math.min(...t2.data.map((i) => Math.min(...i.map(sc)))), r < 0 && (r = 0)) : r = 2 : r = 3), r;
}
const cm = /[-[\]{}()*+?.,\\^$|#\s]/g;
function Ga(t2) {
  return t2.replace(cm, "\\$&");
}
const hm = /* @__PURE__ */ new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function mn(t2, e) {
  return typeof t2.ignoreCase == "boolean" ? t2.ignoreCase : t2.ignoreCase === "quirks" ? !!e.quirksMode : !e.xmlMode && hm.has(t2.name);
}
const um = { equals(t2, e, n) {
  const { adapter: r } = n, { name: i } = e;
  let { value: l } = e;
  return mn(e, n) ? (l = l.toLowerCase(), (h) => {
    const p = r.getAttributeValue(h, i);
    return p != null && p.length === l.length && p.toLowerCase() === l && t2(h);
  }) : (h) => r.getAttributeValue(h, i) === l && t2(h);
}, hyphen(t2, e, n) {
  const { adapter: r } = n, { name: i } = e;
  let { value: l } = e;
  const h = l.length;
  return mn(e, n) ? (l = l.toLowerCase(), function(p) {
    const m = r.getAttributeValue(p, i);
    return m != null && (m.length === h || m.charAt(h) === "-") && m.substr(0, h).toLowerCase() === l && t2(p);
  }) : function(p) {
    const m = r.getAttributeValue(p, i);
    return m != null && (m.length === h || m.charAt(h) === "-") && m.substr(0, h) === l && t2(p);
  };
}, element(t2, e, n) {
  const { adapter: r } = n, { name: i, value: l } = e;
  if (/\s/.test(l))
    return Se.falseFunc;
  const h = new RegExp(`(?:^|\\s)${Ga(l)}(?:$|\\s)`, mn(e, n) ? "i" : "");
  return function(p) {
    const m = r.getAttributeValue(p, i);
    return m != null && m.length >= l.length && h.test(m) && t2(p);
  };
}, exists(t2, { name: e }, { adapter: n }) {
  return (r) => n.hasAttrib(r, e) && t2(r);
}, start(t2, e, n) {
  const { adapter: r } = n, { name: i } = e;
  let { value: l } = e;
  const h = l.length;
  return h === 0 ? Se.falseFunc : mn(e, n) ? (l = l.toLowerCase(), (p) => {
    const m = r.getAttributeValue(p, i);
    return m != null && m.length >= h && m.substr(0, h).toLowerCase() === l && t2(p);
  }) : (p) => {
    var m;
    return !!(!((m = r.getAttributeValue(p, i)) === null || m === void 0) && m.startsWith(l)) && t2(p);
  };
}, end(t2, e, n) {
  const { adapter: r } = n, { name: i } = e;
  let { value: l } = e;
  const h = -l.length;
  return h === 0 ? Se.falseFunc : mn(e, n) ? (l = l.toLowerCase(), (p) => {
    var m;
    return ((m = r.getAttributeValue(p, i)) === null || m === void 0 ? void 0 : m.substr(h).toLowerCase()) === l && t2(p);
  }) : (p) => {
    var m;
    return !!(!((m = r.getAttributeValue(p, i)) === null || m === void 0) && m.endsWith(l)) && t2(p);
  };
}, any(t2, e, n) {
  const { adapter: r } = n, { name: i, value: l } = e;
  if (l === "")
    return Se.falseFunc;
  if (mn(e, n)) {
    const h = new RegExp(Ga(l), "i");
    return function(p) {
      const m = r.getAttributeValue(p, i);
      return m != null && m.length >= l.length && h.test(m) && t2(p);
    };
  }
  return (h) => {
    var p;
    return !!(!((p = r.getAttributeValue(h, i)) === null || p === void 0) && p.includes(l)) && t2(h);
  };
}, not(t2, e, n) {
  const { adapter: r } = n, { name: i } = e;
  let { value: l } = e;
  return l === "" ? (h) => !!r.getAttributeValue(h, i) && t2(h) : mn(e, n) ? (l = l.toLowerCase(), (h) => {
    const p = r.getAttributeValue(h, i);
    return (p == null || p.length !== l.length || p.toLowerCase() !== l) && t2(h);
  }) : (h) => r.getAttributeValue(h, i) !== l && t2(h);
} }, dm = /* @__PURE__ */ new Set([9, 10, 12, 13, 32]), Xa = 48, pm = 57;
function mm(t2) {
  if (t2 = t2.trim().toLowerCase(), t2 === "even")
    return [2, 0];
  if (t2 === "odd")
    return [2, 1];
  let e = 0, n = 0, r = l(), i = h();
  if (e < t2.length && t2.charAt(e) === "n" && (e++, n = r * (i ?? 1), p(), e < t2.length ? (r = l(), p(), i = h()) : r = i = 0), i === null || e < t2.length)
    throw new Error(`n-th rule couldn't be parsed ('${t2}')`);
  return [n, r * i];
  function l() {
    return t2.charAt(e) === "-" ? (e++, -1) : (t2.charAt(e) === "+" && e++, 1);
  }
  function h() {
    const m = e;
    let y = 0;
    for (; e < t2.length && t2.charCodeAt(e) >= Xa && t2.charCodeAt(e) <= pm; )
      y = y * 10 + (t2.charCodeAt(e) - Xa), e++;
    return e === m ? null : y;
  }
  function p() {
    for (; e < t2.length && dm.has(t2.charCodeAt(e)); )
      e++;
  }
}
function fm(t2) {
  const e = t2[0], n = t2[1] - 1;
  if (n < 0 && e <= 0)
    return Se.falseFunc;
  if (e === -1)
    return (l) => l <= n;
  if (e === 0)
    return (l) => l === n;
  if (e === 1)
    return n < 0 ? Se.trueFunc : (l) => l >= n;
  const r = Math.abs(e), i = (n % r + r) % r;
  return e > 1 ? (l) => l >= n && l % r === i : (l) => l <= n && l % r === i;
}
function er(t2) {
  return fm(mm(t2));
}
function tr(t2, e) {
  return (n) => {
    const r = e.getParent(n);
    return r != null && e.isTag(r) && t2(n);
  };
}
const no = { contains(t2, e, { adapter: n }) {
  return function(r) {
    return t2(r) && n.getText(r).includes(e);
  };
}, icontains(t2, e, { adapter: n }) {
  const r = e.toLowerCase();
  return function(i) {
    return t2(i) && n.getText(i).toLowerCase().includes(r);
  };
}, "nth-child"(t2, e, { adapter: n, equals: r }) {
  const i = er(e);
  return i === Se.falseFunc ? Se.falseFunc : i === Se.trueFunc ? tr(t2, n) : function(l) {
    const h = n.getSiblings(l);
    let p = 0;
    for (let m = 0; m < h.length && !r(l, h[m]); m++)
      n.isTag(h[m]) && p++;
    return i(p) && t2(l);
  };
}, "nth-last-child"(t2, e, { adapter: n, equals: r }) {
  const i = er(e);
  return i === Se.falseFunc ? Se.falseFunc : i === Se.trueFunc ? tr(t2, n) : function(l) {
    const h = n.getSiblings(l);
    let p = 0;
    for (let m = h.length - 1; m >= 0 && !r(l, h[m]); m--)
      n.isTag(h[m]) && p++;
    return i(p) && t2(l);
  };
}, "nth-of-type"(t2, e, { adapter: n, equals: r }) {
  const i = er(e);
  return i === Se.falseFunc ? Se.falseFunc : i === Se.trueFunc ? tr(t2, n) : function(l) {
    const h = n.getSiblings(l);
    let p = 0;
    for (let m = 0; m < h.length; m++) {
      const y = h[m];
      if (r(l, y))
        break;
      n.isTag(y) && n.getName(y) === n.getName(l) && p++;
    }
    return i(p) && t2(l);
  };
}, "nth-last-of-type"(t2, e, { adapter: n, equals: r }) {
  const i = er(e);
  return i === Se.falseFunc ? Se.falseFunc : i === Se.trueFunc ? tr(t2, n) : function(l) {
    const h = n.getSiblings(l);
    let p = 0;
    for (let m = h.length - 1; m >= 0; m--) {
      const y = h[m];
      if (r(l, y))
        break;
      n.isTag(y) && n.getName(y) === n.getName(l) && p++;
    }
    return i(p) && t2(l);
  };
}, root(t2, e, { adapter: n }) {
  return (r) => {
    const i = n.getParent(r);
    return (i == null || !n.isTag(i)) && t2(r);
  };
}, scope(t2, e, n, r) {
  const { equals: i } = n;
  return !r || r.length === 0 ? no.root(t2, e, n) : r.length === 1 ? (l) => i(r[0], l) && t2(l) : (l) => r.includes(l) && t2(l);
}, hover: Ds("isHovered"), visited: Ds("isVisited"), active: Ds("isActive") };
function Ds(t2) {
  return function(e, n, { adapter: r }) {
    const i = r[t2];
    return typeof i != "function" ? Se.falseFunc : function(l) {
      return i(l) && e(l);
    };
  };
}
const Wa = { empty(t2, { adapter: e }) {
  return !e.getChildren(t2).some((n) => e.isTag(n) || e.getText(n) !== "");
}, "first-child"(t2, { adapter: e, equals: n }) {
  if (e.prevElementSibling)
    return e.prevElementSibling(t2) == null;
  const r = e.getSiblings(t2).find((i) => e.isTag(i));
  return r != null && n(t2, r);
}, "last-child"(t2, { adapter: e, equals: n }) {
  const r = e.getSiblings(t2);
  for (let i = r.length - 1; i >= 0; i--) {
    if (n(t2, r[i]))
      return true;
    if (e.isTag(r[i]))
      break;
  }
  return false;
}, "first-of-type"(t2, { adapter: e, equals: n }) {
  const r = e.getSiblings(t2), i = e.getName(t2);
  for (let l = 0; l < r.length; l++) {
    const h = r[l];
    if (n(t2, h))
      return true;
    if (e.isTag(h) && e.getName(h) === i)
      break;
  }
  return false;
}, "last-of-type"(t2, { adapter: e, equals: n }) {
  const r = e.getSiblings(t2), i = e.getName(t2);
  for (let l = r.length - 1; l >= 0; l--) {
    const h = r[l];
    if (n(t2, h))
      return true;
    if (e.isTag(h) && e.getName(h) === i)
      break;
  }
  return false;
}, "only-of-type"(t2, { adapter: e, equals: n }) {
  const r = e.getName(t2);
  return e.getSiblings(t2).every((i) => n(t2, i) || !e.isTag(i) || e.getName(i) !== r);
}, "only-child"(t2, { adapter: e, equals: n }) {
  return e.getSiblings(t2).every((r) => n(t2, r) || !e.isTag(r));
} };
function Ya(t2, e, n, r) {
  if (n === null) {
    if (t2.length > r)
      throw new Error(`Pseudo-class :${e} requires an argument`);
  } else if (t2.length === r)
    throw new Error(`Pseudo-class :${e} doesn't have any arguments`);
}
const gm = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`, enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" }, oc = {};
function ym(t2, e) {
  return t2 === Se.falseFunc ? Se.falseFunc : (n) => e.isTag(n) && t2(n);
}
function ic(t2, e) {
  const n = e.getSiblings(t2);
  if (n.length <= 1)
    return [];
  const r = n.indexOf(t2);
  return r < 0 || r === n.length - 1 ? [] : n.slice(r + 1).filter(e.isTag);
}
function ro(t2) {
  return { xmlMode: !!t2.xmlMode, lowerCaseAttributeNames: !!t2.lowerCaseAttributeNames, lowerCaseTags: !!t2.lowerCaseTags, quirksMode: !!t2.quirksMode, cacheResults: !!t2.cacheResults, pseudos: t2.pseudos, adapter: t2.adapter, equals: t2.equals };
}
const Rs = (t2, e, n, r, i) => {
  const l = i(e, ro(n), r);
  return l === Se.trueFunc ? t2 : l === Se.falseFunc ? Se.falseFunc : (h) => l(h) && t2(h);
}, Ps = { is: Rs, matches: Rs, where: Rs, not(t2, e, n, r, i) {
  const l = i(e, ro(n), r);
  return l === Se.falseFunc ? t2 : l === Se.trueFunc ? Se.falseFunc : (h) => !l(h) && t2(h);
}, has(t2, e, n, r, i) {
  const { adapter: l } = n, h = ro(n);
  h.relativeSelector = true;
  const p = e.some((k) => k.some(Eo)) ? [oc] : void 0, m = i(e, h, p);
  if (m === Se.falseFunc)
    return Se.falseFunc;
  const y = ym(m, l);
  if (p && m !== Se.trueFunc) {
    const { shouldTestNextSiblings: k = false } = m;
    return (T) => {
      if (!t2(T))
        return false;
      p[0] = T;
      const N = l.getChildren(T), z = k ? [...N, ...ic(T, l)] : N;
      return l.existsOne(y, z);
    };
  }
  return (k) => t2(k) && l.existsOne(y, l.getChildren(k));
} };
function bm(t2, e, n, r, i) {
  var l;
  const { name: h, data: p } = e;
  if (Array.isArray(p)) {
    if (!(h in Ps))
      throw new Error(`Unknown pseudo-class :${h}(${p})`);
    return Ps[h](t2, p, n, r, i);
  }
  const m = (l = n.pseudos) === null || l === void 0 ? void 0 : l[h], y = typeof m == "string" ? m : gm[h];
  if (typeof y == "string") {
    if (p != null)
      throw new Error(`Pseudo ${h} doesn't have any arguments`);
    const k = Nr(y);
    return Ps.is(t2, k, n, r, i);
  }
  if (typeof m == "function")
    return Ya(m, h, p, 1), (k) => m(k, p) && t2(k);
  if (h in no)
    return no[h](t2, p, n, r);
  if (h in Wa) {
    const k = Wa[h];
    return Ya(k, h, p, 2), (T) => k(T, n, p) && t2(T);
  }
  throw new Error(`Unknown pseudo-class :${h}`);
}
function $s(t2, e) {
  const n = e.getParent(t2);
  return n && e.isTag(n) ? n : null;
}
function xm(t2, e, n, r, i) {
  const { adapter: l, equals: h } = n;
  switch (e.type) {
    case he.PseudoElement:
      throw new Error("Pseudo-elements are not supported by css-select");
    case he.ColumnCombinator:
      throw new Error("Column combinators are not yet supported by css-select");
    case he.Attribute: {
      if (e.namespace != null)
        throw new Error("Namespaced attributes are not yet supported by css-select");
      return (!n.xmlMode || n.lowerCaseAttributeNames) && (e.name = e.name.toLowerCase()), um[e.action](t2, e, n);
    }
    case he.Pseudo:
      return bm(t2, e, n, r, i);
    case he.Tag: {
      if (e.namespace != null)
        throw new Error("Namespaced tag names are not yet supported by css-select");
      let { name: p } = e;
      return (!n.xmlMode || n.lowerCaseTags) && (p = p.toLowerCase()), function(m) {
        return l.getName(m) === p && t2(m);
      };
    }
    case he.Descendant: {
      if (n.cacheResults === false || typeof WeakSet > "u")
        return function(m) {
          let y = m;
          for (; y = $s(y, l); )
            if (t2(y))
              return true;
          return false;
        };
      const p = /* @__PURE__ */ new WeakSet();
      return function(m) {
        let y = m;
        for (; y = $s(y, l); )
          if (!p.has(y)) {
            if (l.isTag(y) && t2(y))
              return true;
            p.add(y);
          }
        return false;
      };
    }
    case "_flexibleDescendant":
      return function(p) {
        let m = p;
        do
          if (t2(m))
            return true;
        while (m = $s(m, l));
        return false;
      };
    case he.Parent:
      return function(p) {
        return l.getChildren(p).some((m) => l.isTag(m) && t2(m));
      };
    case he.Child:
      return function(p) {
        const m = l.getParent(p);
        return m != null && l.isTag(m) && t2(m);
      };
    case he.Sibling:
      return function(p) {
        const m = l.getSiblings(p);
        for (let y = 0; y < m.length; y++) {
          const k = m[y];
          if (h(p, k))
            break;
          if (l.isTag(k) && t2(k))
            return true;
        }
        return false;
      };
    case he.Adjacent:
      return l.prevElementSibling ? function(p) {
        const m = l.prevElementSibling(p);
        return m != null && t2(m);
      } : function(p) {
        const m = l.getSiblings(p);
        let y;
        for (let k = 0; k < m.length; k++) {
          const T = m[k];
          if (h(p, T))
            break;
          l.isTag(T) && (y = T);
        }
        return !!y && t2(y);
      };
    case he.Universal: {
      if (e.namespace != null && e.namespace !== "*")
        throw new Error("Namespaced universal selectors are not yet supported by css-select");
      return t2;
    }
  }
}
function ac(t2) {
  return t2.type === he.Pseudo && (t2.name === "scope" || Array.isArray(t2.data) && t2.data.some((e) => e.some(ac)));
}
const wm = { type: he.Descendant }, vm = { type: "_flexibleDescendant" }, km = { type: he.Pseudo, name: "scope", data: null };
function Sm(t2, { adapter: e }, n) {
  const r = !!(n != null && n.every((i) => {
    const l = e.isTag(i) && e.getParent(i);
    return i === oc || l && e.isTag(l);
  }));
  for (const i of t2) {
    if (!(i.length > 0 && Eo(i[0]) && i[0].type !== he.Descendant))
      if (r && !i.some(ac))
        i.unshift(wm);
      else
        continue;
    i.unshift(km);
  }
}
function lc(t2, e, n) {
  var r;
  t2.forEach(lm), n = (r = e.context) !== null && r !== void 0 ? r : n;
  const i = Array.isArray(n), l = n && (Array.isArray(n) ? n : [n]);
  if (e.relativeSelector !== false)
    Sm(t2, e, l);
  else if (t2.some((m) => m.length > 0 && Eo(m[0])))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
  let h = false;
  const p = t2.map((m) => {
    if (m.length >= 2) {
      const [y, k] = m;
      y.type !== he.Pseudo || y.name !== "scope" || (i && k.type === he.Descendant ? m[1] = vm : (k.type === he.Adjacent || k.type === he.Sibling) && (h = true));
    }
    return Am(m, e, l);
  }).reduce(Tm, Se.falseFunc);
  return p.shouldTestNextSiblings = h, p;
}
function Am(t2, e, n) {
  var r;
  return t2.reduce((i, l) => i === Se.falseFunc ? Se.falseFunc : xm(i, l, e, n, lc), (r = e.rootFunc) !== null && r !== void 0 ? r : Se.trueFunc);
}
function Tm(t2, e) {
  return e === Se.falseFunc || t2 === Se.trueFunc ? t2 : t2 === Se.falseFunc || e === Se.trueFunc ? e : function(n) {
    return t2(n) || e(n);
  };
}
const cc = (t2, e) => t2 === e, Mm = { adapter: Er, equals: cc };
function Cm(t2) {
  var e, n, r, i;
  const l = t2 ?? Mm;
  return (e = l.adapter) !== null && e !== void 0 || (l.adapter = Er), (n = l.equals) !== null && n !== void 0 || (l.equals = (i = (r = l.adapter) === null || r === void 0 ? void 0 : r.equals) !== null && i !== void 0 ? i : cc), l;
}
function Em(t2) {
  return function(e, n, r) {
    const i = Cm(n);
    return t2(e, i, r);
  };
}
const No = Em(lc);
function hc(t2, e, n = false) {
  return n && (t2 = Nm(t2, e)), Array.isArray(t2) ? e.removeSubsets(t2) : e.getChildren(t2);
}
function Nm(t2, e) {
  const n = Array.isArray(t2) ? t2.slice(0) : [t2], r = n.length;
  for (let i = 0; i < r; i++) {
    const l = ic(n[i], e);
    n.push(...l);
  }
  return n;
}
const Im = /* @__PURE__ */ new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function wr(t2) {
  return t2.type !== "pseudo" ? false : Im.has(t2.name) ? true : t2.name === "not" && Array.isArray(t2.data) ? t2.data.some((e) => e.some(wr)) : false;
}
function zm(t2, e, n) {
  const r = e != null ? parseInt(e, 10) : NaN;
  switch (t2) {
    case "first":
      return 1;
    case "nth":
    case "eq":
      return isFinite(r) ? r >= 0 ? r + 1 : 1 / 0 : 0;
    case "lt":
      return isFinite(r) ? r >= 0 ? Math.min(r, n) : 1 / 0 : 0;
    case "gt":
      return isFinite(r) ? 1 / 0 : 0;
    case "odd":
      return 2 * n;
    case "even":
      return 2 * n - 1;
    case "last":
    case "not":
      return 1 / 0;
  }
}
function Om(t2) {
  for (; t2.parent; )
    t2 = t2.parent;
  return t2;
}
function Io(t2) {
  const e = [], n = [];
  for (const r of t2)
    r.some(wr) ? e.push(r) : n.push(r);
  return [n, e];
}
const _m = { type: he.Universal, namespace: null }, Bm = { type: he.Pseudo, name: "scope", data: null };
function uc(t2, e, n = {}) {
  return dc([t2], e, n);
}
function dc(t2, e, n = {}) {
  if (typeof e == "function")
    return t2.some(e);
  const [r, i] = Io(Nr(e));
  return r.length > 0 && t2.some(No(r, n)) || i.some((l) => fc(l, t2, n).length > 0);
}
function qm(t2, e, n, r) {
  const i = typeof n == "string" ? parseInt(n, 10) : NaN;
  switch (t2) {
    case "first":
    case "lt":
      return e;
    case "last":
      return e.length > 0 ? [e[e.length - 1]] : e;
    case "nth":
    case "eq":
      return isFinite(i) && Math.abs(i) < e.length ? [i < 0 ? e[e.length + i] : e[i]] : [];
    case "gt":
      return isFinite(i) ? e.slice(i + 1) : [];
    case "even":
      return e.filter((l, h) => h % 2 === 0);
    case "odd":
      return e.filter((l, h) => h % 2 === 1);
    case "not": {
      const l = new Set(mc(n, e, r));
      return e.filter((h) => !l.has(h));
    }
  }
}
function pc(t2, e, n = {}) {
  return mc(Nr(t2), e, n);
}
function mc(t2, e, n) {
  if (e.length === 0)
    return [];
  const [r, i] = Io(t2);
  let l;
  if (r.length) {
    const h = oo(e, r, n);
    if (i.length === 0)
      return h;
    h.length && (l = new Set(h));
  }
  for (let h = 0; h < i.length && (l == null ? void 0 : l.size) !== e.length; h++) {
    const p = i[h];
    if ((l ? e.filter((y) => fe(y) && !l.has(y)) : e).length === 0)
      break;
    const m = fc(p, e, n);
    if (m.length)
      if (l)
        m.forEach((y) => l.add(y));
      else {
        if (h === i.length - 1)
          return m;
        l = new Set(m);
      }
  }
  return typeof l < "u" ? l.size === e.length ? e : e.filter((h) => l.has(h)) : [];
}
function fc(t2, e, n) {
  var r;
  if (t2.some(f0)) {
    const i = (r = n.root) !== null && r !== void 0 ? r : Om(e[0]), l = { ...n, context: e, relativeSelector: false };
    return t2.push(Bm), vr(i, t2, l, true, e.length);
  }
  return vr(e, t2, n, false, e.length);
}
function Lm(t2, e, n = {}, r = 1 / 0) {
  if (typeof t2 == "function")
    return gc(e, t2);
  const [i, l] = Io(Nr(t2)), h = l.map((p) => vr(e, p, n, true, r));
  return i.length && h.push(so(e, i, n, r)), h.length === 0 ? [] : h.length === 1 ? h[0] : Vn(h.reduce((p, m) => [...p, ...m]));
}
function vr(t2, e, n, r, i) {
  const l = e.findIndex(wr), h = e.slice(0, l), p = e[l], m = e.length - 1 === l ? i : 1 / 0, y = zm(p.name, p.data, m);
  if (y === 0)
    return [];
  const k = (h.length === 0 && !Array.isArray(t2) ? Mr(t2).filter(fe) : h.length === 0 ? (Array.isArray(t2) ? t2 : [t2]).filter(fe) : r || h.some(f0) ? so(t2, [h], n, y) : oo(t2, [h], n)).slice(0, y);
  let T = qm(p.name, k, p.data, n);
  if (T.length === 0 || e.length === l + 1)
    return T;
  const N = e.slice(l + 1), z = N.some(f0);
  if (z) {
    if (f0(N[0])) {
      const { type: S } = N[0];
      (S === he.Sibling || S === he.Adjacent) && (T = hc(T, Er, true)), N.unshift(_m);
    }
    n = { ...n, relativeSelector: false, rootFunc: (S) => T.includes(S) };
  } else
    n.rootFunc && n.rootFunc !== xr.trueFunc && (n = { ...n, rootFunc: xr.trueFunc });
  return N.some(wr) ? vr(T, N, n, false, i) : z ? so(T, [N], n, i) : oo(T, [N], n);
}
function so(t2, e, n, r) {
  const i = No(e, n, t2);
  return gc(t2, i, r);
}
function gc(t2, e, n = 1 / 0) {
  const r = hc(t2, Er, e.shouldTestNextSiblings);
  return To((i) => fe(i) && e(i), r, true, n);
}
function oo(t2, e, n) {
  const r = (Array.isArray(t2) ? t2 : [t2]).filter(fe);
  if (r.length === 0)
    return r;
  const i = No(e, n);
  return i === xr.trueFunc ? r : r.filter(i);
}
const Dm = /^\s*[+~]/;
function Rm(t2) {
  if (!t2)
    return this._make([]);
  if (typeof t2 != "string") {
    const e = Wt(t2) ? t2.toArray() : [t2], n = this.toArray();
    return this._make(e.filter((r) => n.some((i) => Yl(i, r))));
  }
  return this._findBySelector(t2, Number.POSITIVE_INFINITY);
}
function Pm(t2, e) {
  var n;
  const r = this.toArray(), i = Dm.test(t2) ? r : this.children().toArray(), l = { context: r, root: (n = this._root) === null || n === void 0 ? void 0 : n[0], xmlMode: this.options.xmlMode, lowerCaseTags: this.options.lowerCaseTags, lowerCaseAttributeNames: this.options.lowerCaseAttributeNames, pseudos: this.options.pseudos, quirksMode: this.options.quirksMode };
  return this._make(Lm(t2, i, l, e));
}
function zo(t2) {
  return function(e, ...n) {
    return function(r) {
      var i;
      let l = t2(e, this);
      return r && (l = Bo(l, r, this.options.xmlMode, (i = this._root) === null || i === void 0 ? void 0 : i[0])), this._make(this.length > 1 && l.length > 1 ? n.reduce((h, p) => p(h), l) : l);
    };
  };
}
const T0 = zo((t2, e) => {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    const i = t2(e[r]);
    i.length > 0 && (n = n.concat(i));
  }
  return n;
}), Oo = zo((t2, e) => {
  const n = [];
  for (let r = 0; r < e.length; r++) {
    const i = t2(e[r]);
    i !== null && n.push(i);
  }
  return n;
});
function _o(t2, ...e) {
  let n = null;
  const r = zo((i, l) => {
    const h = [];
    return Ue(l, (p) => {
      for (let m; (m = i(p)) && !(n != null && n(m, h.length)); p = m)
        h.push(m);
    }), h;
  })(t2, ...e);
  return function(i, l) {
    n = typeof i == "string" ? (p) => uc(p, i, this.options) : i ? M0(i) : null;
    const h = r.call(this, l);
    return n = null, h;
  };
}
function jn(t2) {
  return t2.length > 1 ? Array.from(new Set(t2)) : t2;
}
const $m = Oo(({ parent: t2 }) => t2 && !kn(t2) ? t2 : null, jn), Fm = T0((t2) => {
  const e = [];
  for (; t2.parent && !kn(t2.parent); )
    e.push(t2.parent), t2 = t2.parent;
  return e;
}, Vn, (t2) => t2.reverse()), Hm = _o(({ parent: t2 }) => t2 && !kn(t2) ? t2 : null, Vn, (t2) => t2.reverse());
function Vm(t2) {
  var e;
  const n = [];
  if (!t2)
    return this._make(n);
  const r = { xmlMode: this.options.xmlMode, root: (e = this._root) === null || e === void 0 ? void 0 : e[0] }, i = typeof t2 == "string" ? (l) => uc(l, t2, r) : M0(t2);
  return Ue(this, (l) => {
    for (l && !kn(l) && !fe(l) && (l = l.parent); l && fe(l); ) {
      if (i(l, 0)) {
        n.includes(l) || n.push(l);
        break;
      }
      l = l.parent;
    }
  }), this._make(n);
}
const jm = Oo((t2) => So(t2)), Um = T0((t2) => {
  const e = [];
  for (; t2.next; )
    t2 = t2.next, fe(t2) && e.push(t2);
  return e;
}, jn), Km = _o((t2) => So(t2), jn), Gm = Oo((t2) => Ao(t2)), Xm = T0((t2) => {
  const e = [];
  for (; t2.prev; )
    t2 = t2.prev, fe(t2) && e.push(t2);
  return e;
}, jn), Wm = _o((t2) => Ao(t2), jn), Ym = T0((t2) => Vl(t2).filter((e) => fe(e) && e !== t2), Vn), Qm = T0((t2) => Mr(t2).filter(fe), jn);
function Zm() {
  const t2 = this.toArray().reduce((e, n) => rt(n) ? e.concat(n.children) : e, []);
  return this._make(t2);
}
function Jm(t2) {
  let e = 0;
  const n = this.length;
  for (; e < n && t2.call(this[e], e, this[e]) !== false; )
    ++e;
  return this;
}
function e4(t2) {
  let e = [];
  for (let n = 0; n < this.length; n++) {
    const r = this[n], i = t2.call(r, n, r);
    i != null && (e = e.concat(i));
  }
  return this._make(e);
}
function M0(t2) {
  return typeof t2 == "function" ? (e, n) => t2.call(e, n, e) : Wt(t2) ? (e) => Array.prototype.includes.call(t2, e) : function(e) {
    return t2 === e;
  };
}
function t4(t2) {
  var e;
  return this._make(Bo(this.toArray(), t2, this.options.xmlMode, (e = this._root) === null || e === void 0 ? void 0 : e[0]));
}
function Bo(t2, e, n, r) {
  return typeof e == "string" ? pc(e, t2, { xmlMode: n, root: r }) : t2.filter(M0(e));
}
function n4(t2) {
  const e = this.toArray();
  return typeof t2 == "string" ? dc(e.filter(fe), t2, this.options) : t2 ? e.some(M0(t2)) : false;
}
function r4(t2) {
  let e = this.toArray();
  if (typeof t2 == "string") {
    const n = new Set(pc(t2, e, this.options));
    e = e.filter((r) => !n.has(r));
  } else {
    const n = M0(t2);
    e = e.filter((r, i) => !n(r, i));
  }
  return this._make(e);
}
function s4(t2) {
  return this.filter(typeof t2 == "string" ? `:has(${t2})` : (e, n) => this._make(n).find(t2).length > 0);
}
function o4() {
  return this.length > 1 ? this._make(this[0]) : this;
}
function i4() {
  return this.length > 0 ? this._make(this[this.length - 1]) : this;
}
function a4(t2) {
  var e;
  return t2 = +t2, t2 === 0 && this.length <= 1 ? this : (t2 < 0 && (t2 = this.length + t2), this._make((e = this[t2]) !== null && e !== void 0 ? e : []));
}
function l4(t2) {
  return t2 == null ? this.toArray() : this[t2 < 0 ? this.length + t2 : t2];
}
function c4() {
  return Array.prototype.slice.call(this);
}
function h4(t2) {
  let e, n;
  return t2 == null ? (e = this.parent().children(), n = this[0]) : typeof t2 == "string" ? (e = this._make(t2), n = this[0]) : (e = this, n = Wt(t2) ? t2[0] : t2), Array.prototype.indexOf.call(e, n);
}
function u4(t2, e) {
  return this._make(Array.prototype.slice.call(this, t2, e));
}
function d4() {
  var t2;
  return (t2 = this.prevObject) !== null && t2 !== void 0 ? t2 : this._make([]);
}
function p4(t2, e) {
  const n = this._make(t2, e), r = Vn([...this.get(), ...n.get()]);
  return this._make(r);
}
function m4(t2) {
  return this.prevObject ? this.add(t2 ? this.prevObject.filter(t2) : this.prevObject) : this;
}
const f4 = Object.freeze(Object.defineProperty({ __proto__: null, _findBySelector: Pm, add: p4, addBack: m4, children: Qm, closest: Vm, contents: Zm, each: Jm, end: d4, eq: a4, filter: t4, filterArray: Bo, find: Rm, first: o4, get: l4, has: s4, index: h4, is: n4, last: i4, map: e4, next: jm, nextAll: Um, nextUntil: Km, not: r4, parent: $m, parents: Fm, parentsUntil: Hm, prev: Gm, prevAll: Xm, prevUntil: Wm, siblings: Ym, slice: u4, toArray: c4 }, Symbol.toStringTag, { value: "Module" }));
function g4(t2) {
  return function(e, n, r, i) {
    if (typeof Buffer < "u" && Buffer.isBuffer(e) && (e = e.toString()), typeof e == "string")
      return t2(e, n, r, i);
    const l = e;
    if (!Array.isArray(l) && kn(l))
      return l;
    const h = new b0([]);
    return wn(l, h), h;
  };
}
function wn(t2, e) {
  const n = Array.isArray(t2) ? t2 : [t2];
  e ? e.children = n : e = null;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    i.parent && i.parent.children !== n && Sn(i), e ? (i.prev = n[r - 1] || null, i.next = n[r + 1] || null) : i.prev = i.next = null, i.parent = e;
  }
  return e;
}
function y4(t2, e) {
  if (t2 == null)
    return [];
  if (typeof t2 == "string")
    return this._parse(t2, this.options, false, null).children.slice(0);
  if ("length" in t2) {
    if (t2.length === 1)
      return this._makeDomArray(t2[0], e);
    const n = [];
    for (let r = 0; r < t2.length; r++) {
      const i = t2[r];
      if (typeof i == "object") {
        if (i == null)
          continue;
        if (!("length" in i)) {
          n.push(e ? x0(i, true) : i);
          continue;
        }
      }
      n.push(...this._makeDomArray(i, e));
    }
    return n;
  }
  return [e ? x0(t2, true) : t2];
}
function yc(t2) {
  return function(...e) {
    const n = this.length - 1;
    return Ue(this, (r, i) => {
      if (!rt(r))
        return;
      const l = typeof e[0] == "function" ? e[0].call(r, i, this._render(r.children)) : e, h = this._makeDomArray(l, i < n);
      t2(h, r.children, r);
    });
  };
}
function ln(t2, e, n, r, i) {
  var l, h;
  const p = [e, n, ...r], m = e === 0 ? null : t2[e - 1], y = e + n >= t2.length ? null : t2[e + n];
  for (let k = 0; k < r.length; ++k) {
    const T = r[k], N = T.parent;
    if (N) {
      const z = N.children.indexOf(T);
      z > -1 && (N.children.splice(z, 1), i === N && e > z && p[0]--);
    }
    T.parent = i, T.prev && (T.prev.next = (l = T.next) !== null && l !== void 0 ? l : null), T.next && (T.next.prev = (h = T.prev) !== null && h !== void 0 ? h : null), T.prev = k === 0 ? m : r[k - 1], T.next = k === r.length - 1 ? y : r[k + 1];
  }
  return m && (m.next = r[0]), y && (y.prev = r[r.length - 1]), t2.splice(...p);
}
function b4(t2) {
  return (Wt(t2) ? t2 : this._make(t2)).append(this), this;
}
function x4(t2) {
  return (Wt(t2) ? t2 : this._make(t2)).prepend(this), this;
}
const w4 = yc((t2, e, n) => {
  ln(e, e.length, 0, t2, n);
}), v4 = yc((t2, e, n) => {
  ln(e, 0, 0, t2, n);
});
function bc(t2) {
  return function(e) {
    const n = this.length - 1, r = this.parents().last();
    for (let i = 0; i < this.length; i++) {
      const l = this[i], h = typeof e == "function" ? e.call(l, i, l) : typeof e == "string" && !eo(e) ? r.find(e).clone() : e, [p] = this._makeDomArray(h, i < n);
      if (!p || !rt(p))
        continue;
      let m = p, y = 0;
      for (; y < m.children.length; ) {
        const k = m.children[y];
        fe(k) ? (m = k, y = 0) : y++;
      }
      t2(l, m, [p]);
    }
    return this;
  };
}
const k4 = bc((t2, e, n) => {
  const { parent: r } = t2;
  if (!r)
    return;
  const i = r.children, l = i.indexOf(t2);
  wn([t2], e), ln(i, l, 0, n, r);
}), S4 = bc((t2, e, n) => {
  rt(t2) && (wn(t2.children, e), wn(n, t2));
});
function A4(t2) {
  return this.parent(t2).not("body").each((e, n) => {
    this._make(n).replaceWith(n.children);
  }), this;
}
function T4(t2) {
  const e = this[0];
  if (e) {
    const n = this._make(typeof t2 == "function" ? t2.call(e, 0, e) : t2).insertBefore(e);
    let r;
    for (let l = 0; l < n.length; l++)
      n[l].type === "tag" && (r = n[l]);
    let i = 0;
    for (; r && i < r.children.length; ) {
      const l = r.children[i];
      l.type === "tag" ? (r = l, i = 0) : i++;
    }
    r && this._make(r).append(this);
  }
  return this;
}
function M4(...t2) {
  const e = this.length - 1;
  return Ue(this, (n, r) => {
    if (!rt(n) || !n.parent)
      return;
    const i = n.parent.children, l = i.indexOf(n);
    if (l < 0)
      return;
    const h = typeof t2[0] == "function" ? t2[0].call(n, r, this._render(n.children)) : t2, p = this._makeDomArray(h, r < e);
    ln(i, l + 1, 0, p, n.parent);
  });
}
function C4(t2) {
  typeof t2 == "string" && (t2 = this._make(t2)), this.remove();
  const e = [];
  for (const n of this._makeDomArray(t2)) {
    const r = this.clone().toArray(), { parent: i } = n;
    if (!i)
      continue;
    const l = i.children, h = l.indexOf(n);
    h < 0 || (ln(l, h + 1, 0, r, i), e.push(...r));
  }
  return this._make(e);
}
function E4(...t2) {
  const e = this.length - 1;
  return Ue(this, (n, r) => {
    if (!rt(n) || !n.parent)
      return;
    const i = n.parent.children, l = i.indexOf(n);
    if (l < 0)
      return;
    const h = typeof t2[0] == "function" ? t2[0].call(n, r, this._render(n.children)) : t2, p = this._makeDomArray(h, r < e);
    ln(i, l, 0, p, n.parent);
  });
}
function N4(t2) {
  const e = this._make(t2);
  this.remove();
  const n = [];
  return Ue(e, (r) => {
    const i = this.clone().toArray(), { parent: l } = r;
    if (!l)
      return;
    const h = l.children, p = h.indexOf(r);
    p < 0 || (ln(h, p, 0, i, l), n.push(...i));
  }), this._make(n);
}
function I4(t2) {
  const e = t2 ? this.filter(t2) : this;
  return Ue(e, (n) => {
    Sn(n), n.prev = n.next = n.parent = null;
  }), this;
}
function z4(t2) {
  return Ue(this, (e, n) => {
    const { parent: r } = e;
    if (!r)
      return;
    const i = r.children, l = typeof t2 == "function" ? t2.call(e, n, e) : t2, h = this._makeDomArray(l);
    wn(h, null);
    const p = i.indexOf(e);
    ln(i, p, 1, h, r), h.includes(e) || (e.parent = e.prev = e.next = null);
  });
}
function O4() {
  return Ue(this, (t2) => {
    if (rt(t2)) {
      for (const e of t2.children)
        e.next = e.prev = e.parent = null;
      t2.children.length = 0;
    }
  });
}
function _4(t2) {
  if (t2 === void 0) {
    const e = this[0];
    return !e || !rt(e) ? null : this._render(e.children);
  }
  return Ue(this, (e) => {
    if (!rt(e))
      return;
    for (const r of e.children)
      r.next = r.prev = r.parent = null;
    const n = Wt(t2) ? t2.toArray() : this._parse(`${t2}`, this.options, false, e).children;
    wn(n, e);
  });
}
function B4() {
  return this._render(this);
}
function q4(t2) {
  return t2 === void 0 ? w0(this) : typeof t2 == "function" ? Ue(this, (e, n) => this._make(e).text(t2.call(e, n, w0([e])))) : Ue(this, (e) => {
    if (!rt(e))
      return;
    for (const r of e.children)
      r.next = r.prev = r.parent = null;
    const n = new pr(`${t2}`);
    wn(n, e);
  });
}
function L4() {
  const t2 = Array.prototype.map.call(this.get(), (n) => x0(n, true)), e = new b0(t2);
  for (const n of t2)
    n.parent = e;
  return this._make(t2);
}
const D4 = Object.freeze(Object.defineProperty({ __proto__: null, _makeDomArray: y4, after: M4, append: w4, appendTo: b4, before: E4, clone: L4, empty: O4, html: _4, insertAfter: C4, insertBefore: N4, prepend: v4, prependTo: x4, remove: I4, replaceWith: z4, text: q4, toString: B4, unwrap: A4, wrap: k4, wrapAll: T4, wrapInner: S4 }, Symbol.toStringTag, { value: "Module" }));
function R4(t2, e) {
  if (t2 != null && e != null || typeof t2 == "object" && !Array.isArray(t2))
    return Ue(this, (n, r) => {
      fe(n) && xc(n, t2, e, r);
    });
  if (this.length !== 0)
    return wc(this[0], t2);
}
function xc(t2, e, n, r) {
  if (typeof e == "string") {
    const i = wc(t2), l = typeof n == "function" ? n.call(t2, r, i[e]) : n;
    l === "" ? delete i[e] : l != null && (i[e] = l), t2.attribs.style = P4(i);
  } else if (typeof e == "object") {
    const i = Object.keys(e);
    for (let l = 0; l < i.length; l++) {
      const h = i[l];
      xc(t2, h, e[h], l);
    }
  }
}
function wc(t2, e) {
  if (!t2 || !fe(t2))
    return;
  const n = $4(t2.attribs.style);
  if (typeof e == "string")
    return n[e];
  if (Array.isArray(e)) {
    const r = {};
    for (const i of e)
      n[i] != null && (r[i] = n[i]);
    return r;
  }
  return n;
}
function P4(t2) {
  return Object.keys(t2).reduce((e, n) => `${e}${e ? " " : ""}${n}: ${t2[n]};`, "");
}
function $4(t2) {
  if (t2 = (t2 || "").trim(), !t2)
    return {};
  const e = {};
  let n;
  for (const r of t2.split(";")) {
    const i = r.indexOf(":");
    if (i < 1 || i === r.length - 1) {
      const l = r.trimEnd();
      l.length > 0 && n !== void 0 && (e[n] += `;${l}`);
    } else
      n = r.slice(0, i).trim(), e[n] = r.slice(i + 1).trim();
  }
  return e;
}
const F4 = Object.freeze(Object.defineProperty({ __proto__: null, css: R4 }, Symbol.toStringTag, { value: "Module" })), Qa = "input,select,textarea,keygen", H4 = /%20/g, Za = /\r?\n/g;
function V4() {
  return this.serializeArray().map((t2) => `${encodeURIComponent(t2.name)}=${encodeURIComponent(t2.value)}`).join("&").replace(H4, "+");
}
function j4() {
  return this.map((t2, e) => {
    const n = this._make(e);
    return fe(e) && e.name === "form" ? n.find(Qa).toArray() : n.filter(Qa).toArray();
  }).filter('[name!=""]:enabled:not(:submit, :button, :image, :reset, :file):matches([checked], :not(:checkbox, :radio))').map((t2, e) => {
    var n;
    const r = this._make(e), i = r.attr("name"), l = (n = r.val()) !== null && n !== void 0 ? n : "";
    return Array.isArray(l) ? l.map((h) => ({ name: i, value: h.replace(Za, `\r
`) })) : { name: i, value: l.replace(Za, `\r
`) };
  }).toArray();
}
const U4 = Object.freeze(Object.defineProperty({ __proto__: null, serialize: V4, serializeArray: j4 }, Symbol.toStringTag, { value: "Module" }));
function K4(t2) {
  var e;
  return typeof t2 == "string" ? { selector: t2, value: "textContent" } : { selector: t2.selector, value: (e = t2.value) !== null && e !== void 0 ? e : "textContent" };
}
function G4(t2) {
  const e = {};
  for (const n in t2) {
    const r = t2[n], i = Array.isArray(r), { selector: l, value: h } = K4(i ? r[0] : r), p = typeof h == "function" ? h : typeof h == "string" ? (m) => this._make(m).prop(h) : (m) => this._make(m).extract(h);
    if (i)
      e[n] = this._findBySelector(l, Number.POSITIVE_INFINITY).map((m, y) => p(y, n, e)).get();
    else {
      const m = this._findBySelector(l, 1);
      e[n] = m.length > 0 ? p(m[0], n, e) : void 0;
    }
  }
  return e;
}
const X4 = Object.freeze(Object.defineProperty({ __proto__: null, extract: G4 }, Symbol.toStringTag, { value: "Module" }));
class C0 {
  constructor(e, n, r) {
    if (this.length = 0, this.options = r, this._root = n, e) {
      for (let i = 0; i < e.length; i++)
        this[i] = e[i];
      this.length = e.length;
    }
  }
}
C0.prototype.cheerio = "[cheerio object]";
C0.prototype.splice = Array.prototype.splice;
C0.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
Object.assign(C0.prototype, Jp, f4, D4, F4, U4, X4);
function W4(t2, e) {
  return function n(r, i, l = true) {
    if (r == null)
      throw new Error("cheerio.load() expects a string");
    const h = Qs(i), p = t2(r, h, l, null);
    class m extends C0 {
      _make(T, N) {
        const z = y(T, N);
        return z.prevObject = this, z;
      }
      _parse(T, N, z, S) {
        return t2(T, N, z, S);
      }
      _render(T) {
        return e(T, this.options);
      }
    }
    function y(k, T, N = p, z) {
      if (k && Wt(k))
        return k;
      const S = Qs(z, h), M = typeof N == "string" ? [t2(N, S, false, null)] : "length" in N ? N : [N], C = Wt(M) ? M : new m(M, null, S);
      if (C._root = C, !k)
        return new m(void 0, C, S);
      const B = typeof k == "string" && eo(k) ? t2(k, S, false, null).children : Y4(k) ? [k] : Array.isArray(k) ? k : void 0, H = new m(B, C, S);
      if (B)
        return H;
      if (typeof k != "string")
        throw new TypeError("Unexpected type of selector");
      let F = k;
      const V = T ? typeof T == "string" ? eo(T) ? new m([t2(T, S, false, null)], C, S) : (F = `${T} ${F}`, C) : Wt(T) ? T : new m(Array.isArray(T) ? T : [T], C, S) : C;
      return V ? V.find(F) : H;
    }
    return Object.assign(y, Fp, { load: n, _root: p, _options: h, fn: m.prototype, prototype: m.prototype }), y;
  };
}
function Y4(t2) {
  return !!t2.name || t2.type === "root" || t2.type === "text" || t2.type === "comment";
}
var ue;
(function(t2) {
  t2[t2.Tab = 9] = "Tab", t2[t2.NewLine = 10] = "NewLine", t2[t2.FormFeed = 12] = "FormFeed", t2[t2.CarriageReturn = 13] = "CarriageReturn", t2[t2.Space = 32] = "Space", t2[t2.ExclamationMark = 33] = "ExclamationMark", t2[t2.Number = 35] = "Number", t2[t2.Amp = 38] = "Amp", t2[t2.SingleQuote = 39] = "SingleQuote", t2[t2.DoubleQuote = 34] = "DoubleQuote", t2[t2.Dash = 45] = "Dash", t2[t2.Slash = 47] = "Slash", t2[t2.Zero = 48] = "Zero", t2[t2.Nine = 57] = "Nine", t2[t2.Semi = 59] = "Semi", t2[t2.Lt = 60] = "Lt", t2[t2.Eq = 61] = "Eq", t2[t2.Gt = 62] = "Gt", t2[t2.Questionmark = 63] = "Questionmark", t2[t2.UpperA = 65] = "UpperA", t2[t2.LowerA = 97] = "LowerA", t2[t2.UpperF = 70] = "UpperF", t2[t2.LowerF = 102] = "LowerF", t2[t2.UpperZ = 90] = "UpperZ", t2[t2.LowerZ = 122] = "LowerZ", t2[t2.LowerX = 120] = "LowerX", t2[t2.OpeningSquareBracket = 91] = "OpeningSquareBracket";
})(ue || (ue = {}));
var G;
(function(t2) {
  t2[t2.Text = 1] = "Text", t2[t2.BeforeTagName = 2] = "BeforeTagName", t2[t2.InTagName = 3] = "InTagName", t2[t2.InSelfClosingTag = 4] = "InSelfClosingTag", t2[t2.BeforeClosingTagName = 5] = "BeforeClosingTagName", t2[t2.InClosingTagName = 6] = "InClosingTagName", t2[t2.AfterClosingTagName = 7] = "AfterClosingTagName", t2[t2.BeforeAttributeName = 8] = "BeforeAttributeName", t2[t2.InAttributeName = 9] = "InAttributeName", t2[t2.AfterAttributeName = 10] = "AfterAttributeName", t2[t2.BeforeAttributeValue = 11] = "BeforeAttributeValue", t2[t2.InAttributeValueDq = 12] = "InAttributeValueDq", t2[t2.InAttributeValueSq = 13] = "InAttributeValueSq", t2[t2.InAttributeValueNq = 14] = "InAttributeValueNq", t2[t2.BeforeDeclaration = 15] = "BeforeDeclaration", t2[t2.InDeclaration = 16] = "InDeclaration", t2[t2.InProcessingInstruction = 17] = "InProcessingInstruction", t2[t2.BeforeComment = 18] = "BeforeComment", t2[t2.CDATASequence = 19] = "CDATASequence", t2[t2.InSpecialComment = 20] = "InSpecialComment", t2[t2.InCommentLike = 21] = "InCommentLike", t2[t2.BeforeSpecialS = 22] = "BeforeSpecialS", t2[t2.BeforeSpecialT = 23] = "BeforeSpecialT", t2[t2.SpecialStartSequence = 24] = "SpecialStartSequence", t2[t2.InSpecialTag = 25] = "InSpecialTag", t2[t2.InEntity = 26] = "InEntity";
})(G || (G = {}));
function Gt(t2) {
  return t2 === ue.Space || t2 === ue.NewLine || t2 === ue.Tab || t2 === ue.FormFeed || t2 === ue.CarriageReturn;
}
function nr(t2) {
  return t2 === ue.Slash || t2 === ue.Gt || Gt(t2);
}
function Q4(t2) {
  return t2 >= ue.LowerA && t2 <= ue.LowerZ || t2 >= ue.UpperA && t2 <= ue.UpperZ;
}
var Rt;
(function(t2) {
  t2[t2.NoValue = 0] = "NoValue", t2[t2.Unquoted = 1] = "Unquoted", t2[t2.Single = 2] = "Single", t2[t2.Double = 3] = "Double";
})(Rt || (Rt = {}));
const ot = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) };
class Z4 {
  constructor({ xmlMode: e = false, decodeEntities: n = true }, r) {
    this.cbs = r, this.state = G.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = G.Text, this.isSpecial = false, this.running = true, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = e, this.decodeEntities = n, this.entityDecoder = new Dl(e ? Ll : ql, (i, l) => this.emitCodePoint(i, l));
  }
  reset() {
    this.state = G.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = G.Text, this.currentSequence = void 0, this.running = true, this.offset = 0;
  }
  write(e) {
    this.offset += this.buffer.length, this.buffer = e, this.parse();
  }
  end() {
    this.running && this.finish();
  }
  pause() {
    this.running = false;
  }
  resume() {
    this.running = true, this.index < this.buffer.length + this.offset && this.parse();
  }
  stateText(e) {
    e === ue.Lt || !this.decodeEntities && this.fastForwardTo(ue.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = G.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && e === ue.Amp && this.startEntity();
  }
  stateSpecialStartSequence(e) {
    const n = this.sequenceIndex === this.currentSequence.length;
    if (!(n ? nr(e) : (e | 32) === this.currentSequence[this.sequenceIndex]))
      this.isSpecial = false;
    else if (!n) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0, this.state = G.InTagName, this.stateInTagName(e);
  }
  stateInSpecialTag(e) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (e === ue.Gt || Gt(e)) {
        const n = this.index - this.currentSequence.length;
        if (this.sectionStart < n) {
          const r = this.index;
          this.index = n, this.cbs.ontext(this.sectionStart, n), this.index = r;
        }
        this.isSpecial = false, this.sectionStart = n + 2, this.stateInClosingTagName(e);
        return;
      }
      this.sequenceIndex = 0;
    }
    (e | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === ot.TitleEnd ? this.decodeEntities && e === ue.Amp && this.startEntity() : this.fastForwardTo(ue.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(e === ue.Lt);
  }
  stateCDATASequence(e) {
    e === ot.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === ot.Cdata.length && (this.state = G.InCommentLike, this.currentSequence = ot.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = G.InDeclaration, this.stateInDeclaration(e));
  }
  fastForwardTo(e) {
    for (; ++this.index < this.buffer.length + this.offset; )
      if (this.buffer.charCodeAt(this.index - this.offset) === e)
        return true;
    return this.index = this.buffer.length + this.offset - 1, false;
  }
  stateInCommentLike(e) {
    e === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === ot.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = G.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
  }
  isTagStartChar(e) {
    return this.xmlMode ? !nr(e) : Q4(e);
  }
  startSpecial(e, n) {
    this.isSpecial = true, this.currentSequence = e, this.sequenceIndex = n, this.state = G.SpecialStartSequence;
  }
  stateBeforeTagName(e) {
    if (e === ue.ExclamationMark)
      this.state = G.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (e === ue.Questionmark)
      this.state = G.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(e)) {
      const n = e | 32;
      this.sectionStart = this.index, this.xmlMode ? this.state = G.InTagName : n === ot.ScriptEnd[2] ? this.state = G.BeforeSpecialS : n === ot.TitleEnd[2] ? this.state = G.BeforeSpecialT : this.state = G.InTagName;
    } else
      e === ue.Slash ? this.state = G.BeforeClosingTagName : (this.state = G.Text, this.stateText(e));
  }
  stateInTagName(e) {
    nr(e) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = G.BeforeAttributeName, this.stateBeforeAttributeName(e));
  }
  stateBeforeClosingTagName(e) {
    Gt(e) || (e === ue.Gt ? this.state = G.Text : (this.state = this.isTagStartChar(e) ? G.InClosingTagName : G.InSpecialComment, this.sectionStart = this.index));
  }
  stateInClosingTagName(e) {
    (e === ue.Gt || Gt(e)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = G.AfterClosingTagName, this.stateAfterClosingTagName(e));
  }
  stateAfterClosingTagName(e) {
    (e === ue.Gt || this.fastForwardTo(ue.Gt)) && (this.state = G.Text, this.sectionStart = this.index + 1);
  }
  stateBeforeAttributeName(e) {
    e === ue.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = G.InSpecialTag, this.sequenceIndex = 0) : this.state = G.Text, this.sectionStart = this.index + 1) : e === ue.Slash ? this.state = G.InSelfClosingTag : Gt(e) || (this.state = G.InAttributeName, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(e) {
    e === ue.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = G.Text, this.sectionStart = this.index + 1, this.isSpecial = false) : Gt(e) || (this.state = G.BeforeAttributeName, this.stateBeforeAttributeName(e));
  }
  stateInAttributeName(e) {
    (e === ue.Eq || nr(e)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = G.AfterAttributeName, this.stateAfterAttributeName(e));
  }
  stateAfterAttributeName(e) {
    e === ue.Eq ? this.state = G.BeforeAttributeValue : e === ue.Slash || e === ue.Gt ? (this.cbs.onattribend(Rt.NoValue, this.sectionStart), this.sectionStart = -1, this.state = G.BeforeAttributeName, this.stateBeforeAttributeName(e)) : Gt(e) || (this.cbs.onattribend(Rt.NoValue, this.sectionStart), this.state = G.InAttributeName, this.sectionStart = this.index);
  }
  stateBeforeAttributeValue(e) {
    e === ue.DoubleQuote ? (this.state = G.InAttributeValueDq, this.sectionStart = this.index + 1) : e === ue.SingleQuote ? (this.state = G.InAttributeValueSq, this.sectionStart = this.index + 1) : Gt(e) || (this.sectionStart = this.index, this.state = G.InAttributeValueNq, this.stateInAttributeValueNoQuotes(e));
  }
  handleInAttributeValue(e, n) {
    e === n || !this.decodeEntities && this.fastForwardTo(n) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(n === ue.DoubleQuote ? Rt.Double : Rt.Single, this.index + 1), this.state = G.BeforeAttributeName) : this.decodeEntities && e === ue.Amp && this.startEntity();
  }
  stateInAttributeValueDoubleQuotes(e) {
    this.handleInAttributeValue(e, ue.DoubleQuote);
  }
  stateInAttributeValueSingleQuotes(e) {
    this.handleInAttributeValue(e, ue.SingleQuote);
  }
  stateInAttributeValueNoQuotes(e) {
    Gt(e) || e === ue.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(Rt.Unquoted, this.index), this.state = G.BeforeAttributeName, this.stateBeforeAttributeName(e)) : this.decodeEntities && e === ue.Amp && this.startEntity();
  }
  stateBeforeDeclaration(e) {
    e === ue.OpeningSquareBracket ? (this.state = G.CDATASequence, this.sequenceIndex = 0) : this.state = e === ue.Dash ? G.BeforeComment : G.InDeclaration;
  }
  stateInDeclaration(e) {
    (e === ue.Gt || this.fastForwardTo(ue.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = G.Text, this.sectionStart = this.index + 1);
  }
  stateInProcessingInstruction(e) {
    (e === ue.Gt || this.fastForwardTo(ue.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = G.Text, this.sectionStart = this.index + 1);
  }
  stateBeforeComment(e) {
    e === ue.Dash ? (this.state = G.InCommentLike, this.currentSequence = ot.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = G.InDeclaration;
  }
  stateInSpecialComment(e) {
    (e === ue.Gt || this.fastForwardTo(ue.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = G.Text, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(e) {
    const n = e | 32;
    n === ot.ScriptEnd[3] ? this.startSpecial(ot.ScriptEnd, 4) : n === ot.StyleEnd[3] ? this.startSpecial(ot.StyleEnd, 4) : (this.state = G.InTagName, this.stateInTagName(e));
  }
  stateBeforeSpecialT(e) {
    const n = e | 32;
    n === ot.TitleEnd[3] ? this.startSpecial(ot.TitleEnd, 4) : n === ot.TextareaEnd[3] ? this.startSpecial(ot.TextareaEnd, 4) : (this.state = G.InTagName, this.stateInTagName(e));
  }
  startEntity() {
    this.baseState = this.state, this.state = G.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? Dt.Strict : this.baseState === G.Text || this.baseState === G.InSpecialTag ? Dt.Legacy : Dt.Attribute);
  }
  stateInEntity() {
    const e = this.entityDecoder.write(this.buffer, this.index - this.offset);
    e >= 0 ? (this.state = this.baseState, e === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1;
  }
  cleanup() {
    this.running && this.sectionStart !== this.index && (this.state === G.Text || this.state === G.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === G.InAttributeValueDq || this.state === G.InAttributeValueSq || this.state === G.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
  }
  shouldContinue() {
    return this.index < this.buffer.length + this.offset && this.running;
  }
  parse() {
    for (; this.shouldContinue(); ) {
      const e = this.buffer.charCodeAt(this.index - this.offset);
      switch (this.state) {
        case G.Text: {
          this.stateText(e);
          break;
        }
        case G.SpecialStartSequence: {
          this.stateSpecialStartSequence(e);
          break;
        }
        case G.InSpecialTag: {
          this.stateInSpecialTag(e);
          break;
        }
        case G.CDATASequence: {
          this.stateCDATASequence(e);
          break;
        }
        case G.InAttributeValueDq: {
          this.stateInAttributeValueDoubleQuotes(e);
          break;
        }
        case G.InAttributeName: {
          this.stateInAttributeName(e);
          break;
        }
        case G.InCommentLike: {
          this.stateInCommentLike(e);
          break;
        }
        case G.InSpecialComment: {
          this.stateInSpecialComment(e);
          break;
        }
        case G.BeforeAttributeName: {
          this.stateBeforeAttributeName(e);
          break;
        }
        case G.InTagName: {
          this.stateInTagName(e);
          break;
        }
        case G.InClosingTagName: {
          this.stateInClosingTagName(e);
          break;
        }
        case G.BeforeTagName: {
          this.stateBeforeTagName(e);
          break;
        }
        case G.AfterAttributeName: {
          this.stateAfterAttributeName(e);
          break;
        }
        case G.InAttributeValueSq: {
          this.stateInAttributeValueSingleQuotes(e);
          break;
        }
        case G.BeforeAttributeValue: {
          this.stateBeforeAttributeValue(e);
          break;
        }
        case G.BeforeClosingTagName: {
          this.stateBeforeClosingTagName(e);
          break;
        }
        case G.AfterClosingTagName: {
          this.stateAfterClosingTagName(e);
          break;
        }
        case G.BeforeSpecialS: {
          this.stateBeforeSpecialS(e);
          break;
        }
        case G.BeforeSpecialT: {
          this.stateBeforeSpecialT(e);
          break;
        }
        case G.InAttributeValueNq: {
          this.stateInAttributeValueNoQuotes(e);
          break;
        }
        case G.InSelfClosingTag: {
          this.stateInSelfClosingTag(e);
          break;
        }
        case G.InDeclaration: {
          this.stateInDeclaration(e);
          break;
        }
        case G.BeforeDeclaration: {
          this.stateBeforeDeclaration(e);
          break;
        }
        case G.BeforeComment: {
          this.stateBeforeComment(e);
          break;
        }
        case G.InProcessingInstruction: {
          this.stateInProcessingInstruction(e);
          break;
        }
        case G.InEntity: {
          this.stateInEntity();
          break;
        }
      }
      this.index++;
    }
    this.cleanup();
  }
  finish() {
    this.state === G.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend();
  }
  handleTrailingData() {
    const e = this.buffer.length + this.offset;
    this.sectionStart >= e || (this.state === G.InCommentLike ? this.currentSequence === ot.CdataEnd ? this.cbs.oncdata(this.sectionStart, e, 0) : this.cbs.oncomment(this.sectionStart, e, 0) : this.state === G.InTagName || this.state === G.BeforeAttributeName || this.state === G.BeforeAttributeValue || this.state === G.AfterAttributeName || this.state === G.InAttributeName || this.state === G.InAttributeValueSq || this.state === G.InAttributeValueDq || this.state === G.InAttributeValueNq || this.state === G.InClosingTagName || this.cbs.ontext(this.sectionStart, e));
  }
  emitCodePoint(e, n) {
    this.baseState !== G.Text && this.baseState !== G.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + n, this.index = this.sectionStart - 1, this.cbs.onattribentity(e)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + n, this.index = this.sectionStart - 1, this.cbs.ontextentity(e, this.sectionStart));
  }
}
const En = /* @__PURE__ */ new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), _e = /* @__PURE__ */ new Set(["p"]), Ja = /* @__PURE__ */ new Set(["thead", "tbody"]), el = /* @__PURE__ */ new Set(["dd", "dt"]), tl = /* @__PURE__ */ new Set(["rt", "rp"]), J4 = /* @__PURE__ */ new Map([["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])], ["th", /* @__PURE__ */ new Set(["th"])], ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])], ["body", /* @__PURE__ */ new Set(["head", "link", "script"])], ["li", /* @__PURE__ */ new Set(["li"])], ["p", _e], ["h1", _e], ["h2", _e], ["h3", _e], ["h4", _e], ["h5", _e], ["h6", _e], ["select", En], ["input", En], ["output", En], ["button", En], ["datalist", En], ["textarea", En], ["option", /* @__PURE__ */ new Set(["option"])], ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])], ["dd", el], ["dt", el], ["address", _e], ["article", _e], ["aside", _e], ["blockquote", _e], ["details", _e], ["div", _e], ["dl", _e], ["fieldset", _e], ["figcaption", _e], ["figure", _e], ["footer", _e], ["form", _e], ["header", _e], ["hr", _e], ["main", _e], ["nav", _e], ["ol", _e], ["pre", _e], ["section", _e], ["table", _e], ["ul", _e], ["rt", tl], ["rp", tl], ["tbody", Ja], ["tfoot", Ja]]), ef = /* @__PURE__ */ new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), nl = /* @__PURE__ */ new Set(["math", "svg"]), rl = /* @__PURE__ */ new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), tf = /\s|\//;
let nf = class {
  constructor(t2, e = {}) {
    var n, r, i, l, h, p;
    this.options = e, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = false, this.cbs = t2 ?? {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (n = e.lowerCaseTags) !== null && n !== void 0 ? n : this.htmlMode, this.lowerCaseAttributeNames = (r = e.lowerCaseAttributeNames) !== null && r !== void 0 ? r : this.htmlMode, this.recognizeSelfClosing = (i = e.recognizeSelfClosing) !== null && i !== void 0 ? i : !this.htmlMode, this.tokenizer = new ((l = e.Tokenizer) !== null && l !== void 0 ? l : Z4)(this.options, this), this.foreignContext = [!this.htmlMode], (p = (h = this.cbs).onparserinit) === null || p === void 0 || p.call(h, this);
  }
  ontext(t2, e) {
    var n, r;
    const i = this.getSlice(t2, e);
    this.endIndex = e - 1, (r = (n = this.cbs).ontext) === null || r === void 0 || r.call(n, i), this.startIndex = e;
  }
  ontextentity(t2, e) {
    var n, r;
    this.endIndex = e - 1, (r = (n = this.cbs).ontext) === null || r === void 0 || r.call(n, Zs(t2)), this.startIndex = e;
  }
  isVoidElement(t2) {
    return this.htmlMode && ef.has(t2);
  }
  onopentagname(t2, e) {
    this.endIndex = e;
    let n = this.getSlice(t2, e);
    this.lowerCaseTagNames && (n = n.toLowerCase()), this.emitOpenTag(n);
  }
  emitOpenTag(t2) {
    var e, n, r, i;
    this.openTagStart = this.startIndex, this.tagname = t2;
    const l = this.htmlMode && J4.get(t2);
    if (l)
      for (; this.stack.length > 0 && l.has(this.stack[0]); ) {
        const h = this.stack.shift();
        (n = (e = this.cbs).onclosetag) === null || n === void 0 || n.call(e, h, true);
      }
    this.isVoidElement(t2) || (this.stack.unshift(t2), this.htmlMode && (nl.has(t2) ? this.foreignContext.unshift(true) : rl.has(t2) && this.foreignContext.unshift(false))), (i = (r = this.cbs).onopentagname) === null || i === void 0 || i.call(r, t2), this.cbs.onopentag && (this.attribs = {});
  }
  endOpenTag(t2) {
    var e, n;
    this.startIndex = this.openTagStart, this.attribs && ((n = (e = this.cbs).onopentag) === null || n === void 0 || n.call(e, this.tagname, this.attribs, t2), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, true), this.tagname = "";
  }
  onopentagend(t2) {
    this.endIndex = t2, this.endOpenTag(false), this.startIndex = t2 + 1;
  }
  onclosetag(t2, e) {
    var n, r, i, l, h, p, m, y;
    this.endIndex = e;
    let k = this.getSlice(t2, e);
    if (this.lowerCaseTagNames && (k = k.toLowerCase()), this.htmlMode && (nl.has(k) || rl.has(k)) && this.foreignContext.shift(), this.isVoidElement(k))
      this.htmlMode && k === "br" && ((l = (i = this.cbs).onopentagname) === null || l === void 0 || l.call(i, "br"), (p = (h = this.cbs).onopentag) === null || p === void 0 || p.call(h, "br", {}, true), (y = (m = this.cbs).onclosetag) === null || y === void 0 || y.call(m, "br", false));
    else {
      const T = this.stack.indexOf(k);
      if (T !== -1)
        for (let N = 0; N <= T; N++) {
          const z = this.stack.shift();
          (r = (n = this.cbs).onclosetag) === null || r === void 0 || r.call(n, z, N !== T);
        }
      else
        this.htmlMode && k === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(true));
    }
    this.startIndex = e + 1;
  }
  onselfclosingtag(t2) {
    this.endIndex = t2, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(false), this.startIndex = t2 + 1) : this.onopentagend(t2);
  }
  closeCurrentTag(t2) {
    var e, n;
    const r = this.tagname;
    this.endOpenTag(t2), this.stack[0] === r && ((n = (e = this.cbs).onclosetag) === null || n === void 0 || n.call(e, r, !t2), this.stack.shift());
  }
  onattribname(t2, e) {
    this.startIndex = t2;
    const n = this.getSlice(t2, e);
    this.attribname = this.lowerCaseAttributeNames ? n.toLowerCase() : n;
  }
  onattribdata(t2, e) {
    this.attribvalue += this.getSlice(t2, e);
  }
  onattribentity(t2) {
    this.attribvalue += Zs(t2);
  }
  onattribend(t2, e) {
    var n, r;
    this.endIndex = e, (r = (n = this.cbs).onattribute) === null || r === void 0 || r.call(n, this.attribname, this.attribvalue, t2 === Rt.Double ? '"' : t2 === Rt.Single ? "'" : t2 === Rt.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = "";
  }
  getInstructionName(t2) {
    const e = t2.search(tf);
    let n = e < 0 ? t2 : t2.substr(0, e);
    return this.lowerCaseTagNames && (n = n.toLowerCase()), n;
  }
  ondeclaration(t2, e) {
    this.endIndex = e;
    const n = this.getSlice(t2, e);
    if (this.cbs.onprocessinginstruction) {
      const r = this.getInstructionName(n);
      this.cbs.onprocessinginstruction(`!${r}`, `!${n}`);
    }
    this.startIndex = e + 1;
  }
  onprocessinginstruction(t2, e) {
    this.endIndex = e;
    const n = this.getSlice(t2, e);
    if (this.cbs.onprocessinginstruction) {
      const r = this.getInstructionName(n);
      this.cbs.onprocessinginstruction(`?${r}`, `?${n}`);
    }
    this.startIndex = e + 1;
  }
  oncomment(t2, e, n) {
    var r, i, l, h;
    this.endIndex = e, (i = (r = this.cbs).oncomment) === null || i === void 0 || i.call(r, this.getSlice(t2, e - n)), (h = (l = this.cbs).oncommentend) === null || h === void 0 || h.call(l), this.startIndex = e + 1;
  }
  oncdata(t2, e, n) {
    var r, i, l, h, p, m, y, k, T, N;
    this.endIndex = e;
    const z = this.getSlice(t2, e - n);
    !this.htmlMode || this.options.recognizeCDATA ? ((i = (r = this.cbs).oncdatastart) === null || i === void 0 || i.call(r), (h = (l = this.cbs).ontext) === null || h === void 0 || h.call(l, z), (m = (p = this.cbs).oncdataend) === null || m === void 0 || m.call(p)) : ((k = (y = this.cbs).oncomment) === null || k === void 0 || k.call(y, `[CDATA[${z}]]`), (N = (T = this.cbs).oncommentend) === null || N === void 0 || N.call(T)), this.startIndex = e + 1;
  }
  onend() {
    var t2, e;
    if (this.cbs.onclosetag) {
      this.endIndex = this.startIndex;
      for (let n = 0; n < this.stack.length; n++)
        this.cbs.onclosetag(this.stack[n], true);
    }
    (e = (t2 = this.cbs).onend) === null || e === void 0 || e.call(t2);
  }
  reset() {
    var t2, e, n, r;
    (e = (t2 = this.cbs).onreset) === null || e === void 0 || e.call(t2), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (r = (n = this.cbs).onparserinit) === null || r === void 0 || r.call(n, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = false;
  }
  parseComplete(t2) {
    this.reset(), this.end(t2);
  }
  getSlice(t2, e) {
    for (; t2 - this.bufferOffset >= this.buffers[0].length; )
      this.shiftBuffer();
    let n = this.buffers[0].slice(t2 - this.bufferOffset, e - this.bufferOffset);
    for (; e - this.bufferOffset > this.buffers[0].length; )
      this.shiftBuffer(), n += this.buffers[0].slice(0, e - this.bufferOffset);
    return n;
  }
  shiftBuffer() {
    this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
  }
  write(t2) {
    var e, n;
    if (this.ended) {
      (n = (e = this.cbs).onerror) === null || n === void 0 || n.call(e, new Error(".write() after done!"));
      return;
    }
    this.buffers.push(t2), this.tokenizer.running && (this.tokenizer.write(t2), this.writeIndex++);
  }
  end(t2) {
    var e, n;
    if (this.ended) {
      (n = (e = this.cbs).onerror) === null || n === void 0 || n.call(e, new Error(".end() after done!"));
      return;
    }
    t2 && this.write(t2), this.ended = true, this.tokenizer.end();
  }
  pause() {
    this.tokenizer.pause();
  }
  resume() {
    for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; )
      this.tokenizer.write(this.buffers[this.writeIndex++]);
    this.ended && this.tokenizer.end();
  }
  parseChunk(t2) {
    this.write(t2);
  }
  done(t2) {
    this.end(t2);
  }
};
function rf(t2, e) {
  const n = new $d(void 0, e);
  return new nf(n, e).end(t2), n.root;
}
const sf = W4(g4(rf), Tr), of = { "div,p": ({ $node: t2 }) => ({ queue: t2.children() }), "h1,h2,h3,h4,h5,h6": ({ $node: t2, getContent: e }) => ({ ...e(t2.contents()) }), "ul,ol": ({ $node: t2 }) => ({ queue: t2.children(), nesting: true }), li: ({ $node: t2, getContent: e }) => {
  const n = t2.children().filter("ul,ol");
  let r;
  if (t2.contents().first().is("div,p"))
    r = e(t2.children().first());
  else {
    let i = t2.contents();
    const l = i.index(n);
    l >= 0 && (i = i.slice(0, l)), r = e(i);
  }
  return { queue: n, nesting: true, ...r };
}, "table,pre,p>img:only-child": ({ $node: t2, getContent: e }) => ({ ...e(t2) }) }, af = { selector: "h1,h2,h3,h4,h5,h6,ul,ol,li,table,pre,p>img:only-child", selectorRules: of }, sl = "markmap: ", lf = /^h[1-6]$/, cf = /^[uo]l$/, hf = /^li$/;
function uf(t2) {
  return lf.test(t2) ? +t2[1] : cf.test(t2) ? 8 : hf.test(t2) ? 9 : 7;
}
function df(t2, e) {
  const n = { ...af, ...e }, r = sf(t2);
  let i = r("body");
  i.length || (i = r.root());
  let l = 0;
  const h = { id: l, tag: "", html: "", level: 0, parent: 0, childrenLevel: 0, children: [] }, p = [];
  let m = 0;
  return z(i.children()), h;
  function y(S) {
    var M;
    const { parent: C } = S, B = { id: ++l, tag: S.tagName, level: S.level, html: S.html, childrenLevel: 0, children: S.nesting ? [] : void 0, parent: C.id };
    return (M = S.comments) != null && M.length && (B.comments = S.comments), Object.keys(S.data || {}).length && (B.data = S.data), C.children && ((C.childrenLevel === 0 || C.childrenLevel > B.level) && (C.children = [], C.childrenLevel = B.level), C.childrenLevel === B.level && C.children.push(B)), B;
  }
  function k(S) {
    let M;
    for (; (M = p[p.length - 1]) && M.level >= S; )
      p.pop();
    return M || h;
  }
  function T(S) {
    var M;
    const C = N(S), B = (M = r.html(C.$node)) == null ? void 0 : M.trimEnd();
    return { comments: C.comments, html: B };
  }
  function N(S) {
    const M = [];
    return S = S.filter((C, B) => {
      if (B.type === "comment") {
        const H = B.data.trim();
        if (H.startsWith(sl))
          return M.push(H.slice(sl.length).trim()), false;
      }
      return true;
    }), { $node: S, comments: M };
  }
  function z(S, M) {
    S.each((C, B) => {
      var H;
      const F = r(B), V = (H = Object.entries(n.selectorRules).find(([pe]) => F.is(pe))) == null ? void 0 : H[1], U = V == null ? void 0 : V({ $node: F, $: r, getContent: T });
      if (U != null && U.queue && !U.nesting) {
        z(U.queue, M);
        return;
      }
      const X = uf(B.tagName);
      if (!U) {
        X <= 6 && (m = X);
        return;
      }
      if (m > 0 && X > m || !F.is(n.selector))
        return;
      m = 0;
      const te = X <= 6;
      let j = { ...F.closest("p").data(), ...F.data() }, le = U.html || "";
      if (F.is("ol>li") && M != null && M.children) {
        const pe = +(F.parent().attr("start") || 1) + M.children.length;
        le = `${pe}. ${le}`, j = { ...j, listIndex: pe };
      }
      const ge = y({ parent: M || k(X), nesting: !!U.queue || te, tagName: B.tagName, level: X, html: le, comments: U.comments, data: j });
      te && p.push(ge), U.queue && z(U.queue, ge);
    });
  }
}
function pf(t2) {
  return u0(t2, (e, n) => {
    const r = { content: e.html, children: n() || [] };
    return e.data && (r.payload = { tag: e.tag, ...e.data }), e.comments && (e.comments.includes("foldAll") ? r.payload = { ...r.payload, fold: 2 } : e.comments.includes("fold") && (r.payload = { ...r.payload, fold: 1 })), r;
  });
}
function mf(t2, e) {
  const n = df(t2, e);
  return pf(n);
}
function ff(t2) {
  function e(r, i) {
    const l = r.pos, h = r.src.charCodeAt(l);
    if (i || h !== 43)
      return false;
    const p = r.scanDelims(r.pos, true);
    let m = p.length;
    const y = String.fromCharCode(h);
    if (m < 2)
      return false;
    if (m % 2) {
      const k = r.push("text", "", 0);
      k.content = y, m--;
    }
    for (let k = 0; k < m; k += 2) {
      const T = r.push("text", "", 0);
      T.content = y + y, !(!p.can_open && !p.can_close) && r.delimiters.push({ marker: h, length: 0, jump: k / 2, token: r.tokens.length - 1, end: -1, open: p.can_open, close: p.can_close });
    }
    return r.pos += p.length, true;
  }
  function n(r, i) {
    let l;
    const h = [], p = i.length;
    for (let m = 0; m < p; m++) {
      const y = i[m];
      if (y.marker !== 43 || y.end === -1)
        continue;
      const k = i[y.end];
      l = r.tokens[y.token], l.type = "ins_open", l.tag = "ins", l.nesting = 1, l.markup = "++", l.content = "", l = r.tokens[k.token], l.type = "ins_close", l.tag = "ins", l.nesting = -1, l.markup = "++", l.content = "", r.tokens[k.token - 1].type === "text" && r.tokens[k.token - 1].content === "+" && h.push(k.token - 1);
    }
    for (; h.length; ) {
      const m = h.pop();
      let y = m + 1;
      for (; y < r.tokens.length && r.tokens[y].type === "ins_close"; )
        y++;
      y--, m !== y && (l = r.tokens[y], r.tokens[y] = r.tokens[m], r.tokens[m] = l);
    }
  }
  t2.inline.ruler.before("emphasis", "ins", e), t2.inline.ruler2.before("emphasis", "ins", function(r) {
    const i = r.tokens_meta, l = (r.tokens_meta || []).length;
    n(r, r.delimiters);
    for (let h = 0; h < l; h++)
      i[h] && i[h].delimiters && n(r, i[h].delimiters);
  });
}
function gf(t2) {
  function e(r, i) {
    const l = r.pos, h = r.src.charCodeAt(l);
    if (i || h !== 61)
      return false;
    const p = r.scanDelims(r.pos, true);
    let m = p.length;
    const y = String.fromCharCode(h);
    if (m < 2)
      return false;
    if (m % 2) {
      const k = r.push("text", "", 0);
      k.content = y, m--;
    }
    for (let k = 0; k < m; k += 2) {
      const T = r.push("text", "", 0);
      T.content = y + y, !(!p.can_open && !p.can_close) && r.delimiters.push({ marker: h, length: 0, jump: k / 2, token: r.tokens.length - 1, end: -1, open: p.can_open, close: p.can_close });
    }
    return r.pos += p.length, true;
  }
  function n(r, i) {
    const l = [], h = i.length;
    for (let p = 0; p < h; p++) {
      const m = i[p];
      if (m.marker !== 61 || m.end === -1)
        continue;
      const y = i[m.end], k = r.tokens[m.token];
      k.type = "mark_open", k.tag = "mark", k.nesting = 1, k.markup = "==", k.content = "";
      const T = r.tokens[y.token];
      T.type = "mark_close", T.tag = "mark", T.nesting = -1, T.markup = "==", T.content = "", r.tokens[y.token - 1].type === "text" && r.tokens[y.token - 1].content === "=" && l.push(y.token - 1);
    }
    for (; l.length; ) {
      const p = l.pop();
      let m = p + 1;
      for (; m < r.tokens.length && r.tokens[m].type === "mark_close"; )
        m++;
      if (m--, p !== m) {
        const y = r.tokens[m];
        r.tokens[m] = r.tokens[p], r.tokens[p] = y;
      }
    }
  }
  t2.inline.ruler.before("emphasis", "mark", e), t2.inline.ruler2.before("emphasis", "mark", function(r) {
    let i;
    const l = r.tokens_meta, h = (r.tokens_meta || []).length;
    for (n(r, r.delimiters), i = 0; i < h; i++)
      l[i] && l[i].delimiters && n(r, l[i].delimiters);
  });
}
const yf = /\\([ \\!"#$%&'()*+,./:;<=>?@[\]^_`{|}~-])/g;
function bf(t2, e) {
  const n = t2.posMax, r = t2.pos;
  if (t2.src.charCodeAt(r) !== 126 || e || r + 2 >= n)
    return false;
  t2.pos = r + 1;
  let i = false;
  for (; t2.pos < n; ) {
    if (t2.src.charCodeAt(t2.pos) === 126) {
      i = true;
      break;
    }
    t2.md.inline.skipToken(t2);
  }
  if (!i || r + 1 === t2.pos)
    return t2.pos = r, false;
  const l = t2.src.slice(r + 1, t2.pos);
  if (l.match(/(^|[^\\])(\\\\)*\s/))
    return t2.pos = r, false;
  t2.posMax = t2.pos, t2.pos = r + 1;
  const h = t2.push("sub_open", "sub", 1);
  h.markup = "~";
  const p = t2.push("text", "", 0);
  p.content = l.replace(yf, "$1");
  const m = t2.push("sub_close", "sub", -1);
  return m.markup = "~", t2.pos = t2.posMax + 1, t2.posMax = n, true;
}
function xf(t2) {
  t2.inline.ruler.after("emphasis", "sub", bf);
}
const wf = /\\([ \\!"#$%&'()*+,./:;<=>?@[\]^_`{|}~-])/g;
function vf(t2, e) {
  const n = t2.posMax, r = t2.pos;
  if (t2.src.charCodeAt(r) !== 94 || e || r + 2 >= n)
    return false;
  t2.pos = r + 1;
  let i = false;
  for (; t2.pos < n; ) {
    if (t2.src.charCodeAt(t2.pos) === 94) {
      i = true;
      break;
    }
    t2.md.inline.skipToken(t2);
  }
  if (!i || r + 1 === t2.pos)
    return t2.pos = r, false;
  const l = t2.src.slice(r + 1, t2.pos);
  if (l.match(/(^|[^\\])(\\\\)*\s/))
    return t2.pos = r, false;
  t2.posMax = t2.pos, t2.pos = r + 1;
  const h = t2.push("sup_open", "sup", 1);
  h.markup = "^";
  const p = t2.push("text", "", 0);
  p.content = l.replace(wf, "$1");
  const m = t2.push("sup_close", "sup", -1);
  return m.markup = "^", t2.pos = t2.posMax + 1, t2.posMax = n, true;
}
function kf(t2) {
  t2.inline.ruler.after("emphasis", "sup", vf);
}
const qo = Symbol.for("yaml.alias"), io = Symbol.for("yaml.document"), an = Symbol.for("yaml.map"), vc = Symbol.for("yaml.pair"), Pt = Symbol.for("yaml.scalar"), Un = Symbol.for("yaml.seq"), Ct = Symbol.for("yaml.node.type"), An = (t2) => !!t2 && typeof t2 == "object" && t2[Ct] === qo, Ir = (t2) => !!t2 && typeof t2 == "object" && t2[Ct] === io, E0 = (t2) => !!t2 && typeof t2 == "object" && t2[Ct] === an, Qe = (t2) => !!t2 && typeof t2 == "object" && t2[Ct] === vc, qe = (t2) => !!t2 && typeof t2 == "object" && t2[Ct] === Pt, N0 = (t2) => !!t2 && typeof t2 == "object" && t2[Ct] === Un;
function We(t2) {
  if (t2 && typeof t2 == "object")
    switch (t2[Ct]) {
      case an:
      case Un:
        return true;
    }
  return false;
}
function Ye(t2) {
  if (t2 && typeof t2 == "object")
    switch (t2[Ct]) {
      case qo:
      case an:
      case Pt:
      case Un:
        return true;
    }
  return false;
}
const kc = (t2) => (qe(t2) || We(t2)) && !!t2.anchor, fn = Symbol("break visit"), Sf = Symbol("skip children"), g0 = Symbol("remove node");
function Kn(t2, e) {
  const n = Af(e);
  Ir(t2) ? _n(null, t2.contents, n, Object.freeze([t2])) === g0 && (t2.contents = null) : _n(null, t2, n, Object.freeze([]));
}
Kn.BREAK = fn;
Kn.SKIP = Sf;
Kn.REMOVE = g0;
function _n(t2, e, n, r) {
  const i = Tf(t2, e, n, r);
  if (Ye(i) || Qe(i))
    return Mf(t2, r, i), _n(t2, i, n, r);
  if (typeof i != "symbol") {
    if (We(e)) {
      r = Object.freeze(r.concat(e));
      for (let l = 0; l < e.items.length; ++l) {
        const h = _n(l, e.items[l], n, r);
        if (typeof h == "number")
          l = h - 1;
        else {
          if (h === fn)
            return fn;
          h === g0 && (e.items.splice(l, 1), l -= 1);
        }
      }
    } else if (Qe(e)) {
      r = Object.freeze(r.concat(e));
      const l = _n("key", e.key, n, r);
      if (l === fn)
        return fn;
      l === g0 && (e.key = null);
      const h = _n("value", e.value, n, r);
      if (h === fn)
        return fn;
      h === g0 && (e.value = null);
    }
  }
  return i;
}
function Af(t2) {
  return typeof t2 == "object" && (t2.Collection || t2.Node || t2.Value) ? Object.assign({ Alias: t2.Node, Map: t2.Node, Scalar: t2.Node, Seq: t2.Node }, t2.Value && { Map: t2.Value, Scalar: t2.Value, Seq: t2.Value }, t2.Collection && { Map: t2.Collection, Seq: t2.Collection }, t2) : t2;
}
function Tf(t2, e, n, r) {
  var i, l, h, p, m;
  if (typeof n == "function")
    return n(t2, e, r);
  if (E0(e))
    return (i = n.Map) == null ? void 0 : i.call(n, t2, e, r);
  if (N0(e))
    return (l = n.Seq) == null ? void 0 : l.call(n, t2, e, r);
  if (Qe(e))
    return (h = n.Pair) == null ? void 0 : h.call(n, t2, e, r);
  if (qe(e))
    return (p = n.Scalar) == null ? void 0 : p.call(n, t2, e, r);
  if (An(e))
    return (m = n.Alias) == null ? void 0 : m.call(n, t2, e, r);
}
function Mf(t2, e, n) {
  const r = e[e.length - 1];
  if (We(r))
    r.items[t2] = n;
  else if (Qe(r))
    t2 === "key" ? r.key = n : r.value = n;
  else if (Ir(r))
    r.contents = n;
  else {
    const i = An(r) ? "alias" : "scalar";
    throw new Error(`Cannot replace node with ${i} parent`);
  }
}
const Cf = { "!": "%21", ",": "%2C", "[": "%5B", "]": "%5D", "{": "%7B", "}": "%7D" }, Ef = (t2) => t2.replace(/[!,[\]{}]/g, (e) => Cf[e]);
class lt {
  constructor(e, n) {
    this.docStart = null, this.docEnd = false, this.yaml = Object.assign({}, lt.defaultYaml, e), this.tags = Object.assign({}, lt.defaultTags, n);
  }
  clone() {
    const e = new lt(this.yaml, this.tags);
    return e.docStart = this.docStart, e;
  }
  atDocument() {
    const e = new lt(this.yaml, this.tags);
    switch (this.yaml.version) {
      case "1.1":
        this.atNextDocument = true;
        break;
      case "1.2":
        this.atNextDocument = false, this.yaml = { explicit: lt.defaultYaml.explicit, version: "1.2" }, this.tags = Object.assign({}, lt.defaultTags);
        break;
    }
    return e;
  }
  add(e, n) {
    this.atNextDocument && (this.yaml = { explicit: lt.defaultYaml.explicit, version: "1.1" }, this.tags = Object.assign({}, lt.defaultTags), this.atNextDocument = false);
    const r = e.trim().split(/[ \t]+/), i = r.shift();
    switch (i) {
      case "%TAG": {
        if (r.length !== 2 && (n(0, "%TAG directive should contain exactly two parts"), r.length < 2))
          return false;
        const [l, h] = r;
        return this.tags[l] = h, true;
      }
      case "%YAML": {
        if (this.yaml.explicit = true, r.length !== 1)
          return n(0, "%YAML directive should contain exactly one part"), false;
        const [l] = r;
        if (l === "1.1" || l === "1.2")
          return this.yaml.version = l, true;
        {
          const h = /^\d+\.\d+$/.test(l);
          return n(6, `Unsupported YAML version ${l}`, h), false;
        }
      }
      default:
        return n(0, `Unknown directive ${i}`, true), false;
    }
  }
  tagName(e, n) {
    if (e === "!")
      return "!";
    if (e[0] !== "!")
      return n(`Not a valid tag: ${e}`), null;
    if (e[1] === "<") {
      const h = e.slice(2, -1);
      return h === "!" || h === "!!" ? (n(`Verbatim tags aren't resolved, so ${e} is invalid.`), null) : (e[e.length - 1] !== ">" && n("Verbatim tags must end with a >"), h);
    }
    const [, r, i] = e.match(/^(.*!)([^!]*)$/s);
    i || n(`The ${e} tag has no suffix`);
    const l = this.tags[r];
    if (l)
      try {
        return l + decodeURIComponent(i);
      } catch (h) {
        return n(String(h)), null;
      }
    return r === "!" ? e : (n(`Could not resolve tag: ${e}`), null);
  }
  tagString(e) {
    for (const [n, r] of Object.entries(this.tags))
      if (e.startsWith(r))
        return n + Ef(e.substring(r.length));
    return e[0] === "!" ? e : `!<${e}>`;
  }
  toString(e) {
    const n = this.yaml.explicit ? [`%YAML ${this.yaml.version || "1.2"}`] : [], r = Object.entries(this.tags);
    let i;
    if (e && r.length > 0 && Ye(e.contents)) {
      const l = {};
      Kn(e.contents, (h, p) => {
        Ye(p) && p.tag && (l[p.tag] = true);
      }), i = Object.keys(l);
    } else
      i = [];
    for (const [l, h] of r)
      l === "!!" && h === "tag:yaml.org,2002:" || (!e || i.some((p) => p.startsWith(h))) && n.push(`%TAG ${l} ${h}`);
    return n.join(`
`);
  }
}
lt.defaultYaml = { explicit: false, version: "1.2" };
lt.defaultTags = { "!!": "tag:yaml.org,2002:" };
function Sc(t2) {
  if (/[\x00-\x19\s,[\]{}]/.test(t2)) {
    const e = `Anchor must not contain whitespace or control characters: ${JSON.stringify(t2)}`;
    throw new Error(e);
  }
  return true;
}
function Ac(t2) {
  const e = /* @__PURE__ */ new Set();
  return Kn(t2, { Value(n, r) {
    r.anchor && e.add(r.anchor);
  } }), e;
}
function Tc(t2, e) {
  for (let n = 1; ; ++n) {
    const r = `${t2}${n}`;
    if (!e.has(r))
      return r;
  }
}
function Nf(t2, e) {
  const n = [], r = /* @__PURE__ */ new Map();
  let i = null;
  return { onAnchor: (l) => {
    n.push(l), i ?? (i = Ac(t2));
    const h = Tc(e, i);
    return i.add(h), h;
  }, setAnchors: () => {
    for (const l of n) {
      const h = r.get(l);
      if (typeof h == "object" && h.anchor && (qe(h.node) || We(h.node)))
        h.node.anchor = h.anchor;
      else {
        const p = new Error("Failed to resolve repeated object (this should not happen)");
        throw p.source = l, p;
      }
    }
  }, sourceObjects: r };
}
function Bn(t2, e, n, r) {
  if (r && typeof r == "object")
    if (Array.isArray(r))
      for (let i = 0, l = r.length; i < l; ++i) {
        const h = r[i], p = Bn(t2, r, String(i), h);
        p === void 0 ? delete r[i] : p !== h && (r[i] = p);
      }
    else if (r instanceof Map)
      for (const i of Array.from(r.keys())) {
        const l = r.get(i), h = Bn(t2, r, i, l);
        h === void 0 ? r.delete(i) : h !== l && r.set(i, h);
      }
    else if (r instanceof Set)
      for (const i of Array.from(r)) {
        const l = Bn(t2, r, i, i);
        l === void 0 ? r.delete(i) : l !== i && (r.delete(i), r.add(l));
      }
    else
      for (const [i, l] of Object.entries(r)) {
        const h = Bn(t2, r, i, l);
        h === void 0 ? delete r[i] : h !== l && (r[i] = h);
      }
  return t2.call(e, n, r);
}
function Mt(t2, e, n) {
  if (Array.isArray(t2))
    return t2.map((r, i) => Mt(r, String(i), n));
  if (t2 && typeof t2.toJSON == "function") {
    if (!n || !kc(t2))
      return t2.toJSON(e, n);
    const r = { aliasCount: 0, count: 1, res: void 0 };
    n.anchors.set(t2, r), n.onCreate = (l) => {
      r.res = l, delete n.onCreate;
    };
    const i = t2.toJSON(e, n);
    return n.onCreate && n.onCreate(i), i;
  }
  return typeof t2 == "bigint" && !(n != null && n.keep) ? Number(t2) : t2;
}
class Lo {
  constructor(e) {
    Object.defineProperty(this, Ct, { value: e });
  }
  clone() {
    const e = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    return this.range && (e.range = this.range.slice()), e;
  }
  toJS(e, { mapAsMap: n, maxAliasCount: r, onAnchor: i, reviver: l } = {}) {
    if (!Ir(e))
      throw new TypeError("A document argument is required");
    const h = { anchors: /* @__PURE__ */ new Map(), doc: e, keep: true, mapAsMap: n === true, mapKeyWarned: false, maxAliasCount: typeof r == "number" ? r : 100 }, p = Mt(this, "", h);
    if (typeof i == "function")
      for (const { count: m, res: y } of h.anchors.values())
        i(y, m);
    return typeof l == "function" ? Bn(l, { "": p }, "", p) : p;
  }
}
class Do extends Lo {
  constructor(e) {
    super(qo), this.source = e, Object.defineProperty(this, "tag", { set() {
      throw new Error("Alias nodes cannot have tags");
    } });
  }
  resolve(e, n) {
    let r;
    n != null && n.aliasResolveCache ? r = n.aliasResolveCache : (r = [], Kn(e, { Node: (l, h) => {
      (An(h) || kc(h)) && r.push(h);
    } }), n && (n.aliasResolveCache = r));
    let i;
    for (const l of r) {
      if (l === this)
        break;
      l.anchor === this.source && (i = l);
    }
    return i;
  }
  toJSON(e, n) {
    if (!n)
      return { source: this.source };
    const { anchors: r, doc: i, maxAliasCount: l } = n, h = this.resolve(i, n);
    if (!h) {
      const m = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
      throw new ReferenceError(m);
    }
    let p = r.get(h);
    if (p || (Mt(h, null, n), p = r.get(h)), !p || p.res === void 0) {
      const m = "This should not happen: Alias anchor was not resolved?";
      throw new ReferenceError(m);
    }
    if (l >= 0 && (p.count += 1, p.aliasCount === 0 && (p.aliasCount = cr(i, h, r)), p.count * p.aliasCount > l)) {
      const m = "Excessive alias count indicates a resource exhaustion attack";
      throw new ReferenceError(m);
    }
    return p.res;
  }
  toString(e, n, r) {
    const i = `*${this.source}`;
    if (e) {
      if (Sc(this.source), e.options.verifyAliasOrder && !e.anchors.has(this.source)) {
        const l = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
        throw new Error(l);
      }
      if (e.implicitKey)
        return `${i} `;
    }
    return i;
  }
}
function cr(t2, e, n) {
  if (An(e)) {
    const r = e.resolve(t2), i = n && r && n.get(r);
    return i ? i.count * i.aliasCount : 0;
  } else if (We(e)) {
    let r = 0;
    for (const i of e.items) {
      const l = cr(t2, i, n);
      l > r && (r = l);
    }
    return r;
  } else if (Qe(e)) {
    const r = cr(t2, e.key, n), i = cr(t2, e.value, n);
    return Math.max(r, i);
  }
  return 1;
}
const Mc = (t2) => !t2 || typeof t2 != "function" && typeof t2 != "object";
class be extends Lo {
  constructor(e) {
    super(Pt), this.value = e;
  }
  toJSON(e, n) {
    return n != null && n.keep ? this.value : Mt(this.value, e, n);
  }
  toString() {
    return String(this.value);
  }
}
be.BLOCK_FOLDED = "BLOCK_FOLDED";
be.BLOCK_LITERAL = "BLOCK_LITERAL";
be.PLAIN = "PLAIN";
be.QUOTE_DOUBLE = "QUOTE_DOUBLE";
be.QUOTE_SINGLE = "QUOTE_SINGLE";
const If = "tag:yaml.org,2002:";
function zf(t2, e, n) {
  if (e) {
    const r = n.filter((l) => l.tag === e), i = r.find((l) => !l.format) ?? r[0];
    if (!i)
      throw new Error(`Tag ${e} not found`);
    return i;
  }
  return n.find((r) => {
    var i;
    return ((i = r.identify) == null ? void 0 : i.call(r, t2)) && !r.format;
  });
}
function S0(t2, e, n) {
  var r, i, l;
  if (Ir(t2) && (t2 = t2.contents), Ye(t2))
    return t2;
  if (Qe(t2)) {
    const S = (i = (r = n.schema[an]).createNode) == null ? void 0 : i.call(r, n.schema, null, n);
    return S.items.push(t2), S;
  }
  (t2 instanceof String || t2 instanceof Number || t2 instanceof Boolean || typeof BigInt < "u" && t2 instanceof BigInt) && (t2 = t2.valueOf());
  const { aliasDuplicateObjects: h, onAnchor: p, onTagObj: m, schema: y, sourceObjects: k } = n;
  let T;
  if (h && t2 && typeof t2 == "object") {
    if (T = k.get(t2), T)
      return T.anchor ?? (T.anchor = p(t2)), new Do(T.anchor);
    T = { anchor: null, node: null }, k.set(t2, T);
  }
  e != null && e.startsWith("!!") && (e = If + e.slice(2));
  let N = zf(t2, e, y.tags);
  if (!N) {
    if (t2 && typeof t2.toJSON == "function" && (t2 = t2.toJSON()), !t2 || typeof t2 != "object") {
      const S = new be(t2);
      return T && (T.node = S), S;
    }
    N = t2 instanceof Map ? y[an] : Symbol.iterator in Object(t2) ? y[Un] : y[an];
  }
  m && (m(N), delete n.onTagObj);
  const z = N != null && N.createNode ? N.createNode(n.schema, t2, n) : typeof ((l = N == null ? void 0 : N.nodeClass) == null ? void 0 : l.from) == "function" ? N.nodeClass.from(n.schema, t2, n) : new be(t2);
  return e ? z.tag = e : N.default || (z.tag = N.tag), T && (T.node = z), z;
}
function kr(t2, e, n) {
  let r = n;
  for (let i = e.length - 1; i >= 0; --i) {
    const l = e[i];
    if (typeof l == "number" && Number.isInteger(l) && l >= 0) {
      const h = [];
      h[l] = r, r = h;
    } else
      r = /* @__PURE__ */ new Map([[l, r]]);
  }
  return S0(r, void 0, { aliasDuplicateObjects: false, keepUndefined: false, onAnchor: () => {
    throw new Error("This should not happen, please report a bug.");
  }, schema: t2, sourceObjects: /* @__PURE__ */ new Map() });
}
const d0 = (t2) => t2 == null || typeof t2 == "object" && !!t2[Symbol.iterator]().next().done;
class Cc extends Lo {
  constructor(e, n) {
    super(e), Object.defineProperty(this, "schema", { value: n, configurable: true, enumerable: false, writable: true });
  }
  clone(e) {
    const n = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    return e && (n.schema = e), n.items = n.items.map((r) => Ye(r) || Qe(r) ? r.clone(e) : r), this.range && (n.range = this.range.slice()), n;
  }
  addIn(e, n) {
    if (d0(e))
      this.add(n);
    else {
      const [r, ...i] = e, l = this.get(r, true);
      if (We(l))
        l.addIn(i, n);
      else if (l === void 0 && this.schema)
        this.set(r, kr(this.schema, i, n));
      else
        throw new Error(`Expected YAML collection at ${r}. Remaining path: ${i}`);
    }
  }
  deleteIn(e) {
    const [n, ...r] = e;
    if (r.length === 0)
      return this.delete(n);
    const i = this.get(n, true);
    if (We(i))
      return i.deleteIn(r);
    throw new Error(`Expected YAML collection at ${n}. Remaining path: ${r}`);
  }
  getIn(e, n) {
    const [r, ...i] = e, l = this.get(r, true);
    return i.length === 0 ? !n && qe(l) ? l.value : l : We(l) ? l.getIn(i, n) : void 0;
  }
  hasAllNullValues(e) {
    return this.items.every((n) => {
      if (!Qe(n))
        return false;
      const r = n.value;
      return r == null || e && qe(r) && r.value == null && !r.commentBefore && !r.comment && !r.tag;
    });
  }
  hasIn(e) {
    const [n, ...r] = e;
    if (r.length === 0)
      return this.has(n);
    const i = this.get(n, true);
    return We(i) ? i.hasIn(r) : false;
  }
  setIn(e, n) {
    const [r, ...i] = e;
    if (i.length === 0)
      this.set(r, n);
    else {
      const l = this.get(r, true);
      if (We(l))
        l.setIn(i, n);
      else if (l === void 0 && this.schema)
        this.set(r, kr(this.schema, i, n));
      else
        throw new Error(`Expected YAML collection at ${r}. Remaining path: ${i}`);
    }
  }
}
const Of = (t2) => t2.replace(/^(?!$)(?: $)?/gm, "#");
function Xt(t2, e) {
  return /^\n+$/.test(t2) ? t2.substring(1) : e ? t2.replace(/^(?! *$)/gm, e) : t2;
}
const yn = (t2, e, n) => t2.endsWith(`
`) ? Xt(n, e) : n.includes(`
`) ? `
` + Xt(n, e) : (t2.endsWith(" ") ? "" : " ") + n, Ec = "flow", ao = "block", hr = "quoted";
function zr(t2, e, n = "flow", { indentAtStart: r, lineWidth: i = 80, minContentWidth: l = 20, onFold: h, onOverflow: p } = {}) {
  if (!i || i < 0)
    return t2;
  i < l && (l = 0);
  const m = Math.max(1 + l, 1 + i - e.length);
  if (t2.length <= m)
    return t2;
  const y = [], k = {};
  let T = i - e.length;
  typeof r == "number" && (r > i - Math.max(2, l) ? y.push(0) : T = i - r);
  let N, z, S = false, M = -1, C = -1, B = -1;
  n === ao && (M = ol(t2, M, e.length), M !== -1 && (T = M + m));
  for (let F; F = t2[M += 1]; ) {
    if (n === hr && F === "\\") {
      switch (C = M, t2[M + 1]) {
        case "x":
          M += 3;
          break;
        case "u":
          M += 5;
          break;
        case "U":
          M += 9;
          break;
        default:
          M += 1;
      }
      B = M;
    }
    if (F === `
`)
      n === ao && (M = ol(t2, M, e.length)), T = M + e.length + m, N = void 0;
    else {
      if (F === " " && z && z !== " " && z !== `
` && z !== "	") {
        const V = t2[M + 1];
        V && V !== " " && V !== `
` && V !== "	" && (N = M);
      }
      if (M >= T)
        if (N)
          y.push(N), T = N + m, N = void 0;
        else if (n === hr) {
          for (; z === " " || z === "	"; )
            z = F, F = t2[M += 1], S = true;
          const V = M > B + 1 ? M - 2 : C - 1;
          if (k[V])
            return t2;
          y.push(V), k[V] = true, T = V + m, N = void 0;
        } else
          S = true;
    }
    z = F;
  }
  if (S && p && p(), y.length === 0)
    return t2;
  h && h();
  let H = t2.slice(0, y[0]);
  for (let F = 0; F < y.length; ++F) {
    const V = y[F], U = y[F + 1] || t2.length;
    V === 0 ? H = `
${e}${t2.slice(0, U)}` : (n === hr && k[V] && (H += `${t2[V]}\\`), H += `
${e}${t2.slice(V + 1, U)}`);
  }
  return H;
}
function ol(t2, e, n) {
  let r = e, i = e + 1, l = t2[i];
  for (; l === " " || l === "	"; )
    if (e < i + n)
      l = t2[++e];
    else {
      do
        l = t2[++e];
      while (l && l !== `
`);
      r = e, i = e + 1, l = t2[i];
    }
  return r;
}
const Or = (t2, e) => ({ indentAtStart: e ? t2.indent.length : t2.indentAtStart, lineWidth: t2.options.lineWidth, minContentWidth: t2.options.minContentWidth }), _r = (t2) => /^(%|---|\.\.\.)/m.test(t2);
function _f(t2, e, n) {
  if (!e || e < 0)
    return false;
  const r = e - n, i = t2.length;
  if (i <= r)
    return false;
  for (let l = 0, h = 0; l < i; ++l)
    if (t2[l] === `
`) {
      if (l - h > r)
        return true;
      if (h = l + 1, i - h <= r)
        return false;
    }
  return true;
}
function y0(t2, e) {
  const n = JSON.stringify(t2);
  if (e.options.doubleQuotedAsJSON)
    return n;
  const { implicitKey: r } = e, i = e.options.doubleQuotedMinMultiLineLength, l = e.indent || (_r(t2) ? "  " : "");
  let h = "", p = 0;
  for (let m = 0, y = n[m]; y; y = n[++m])
    if (y === " " && n[m + 1] === "\\" && n[m + 2] === "n" && (h += n.slice(p, m) + "\\ ", m += 1, p = m, y = "\\"), y === "\\")
      switch (n[m + 1]) {
        case "u":
          {
            h += n.slice(p, m);
            const k = n.substr(m + 2, 4);
            switch (k) {
              case "0000":
                h += "\\0";
                break;
              case "0007":
                h += "\\a";
                break;
              case "000b":
                h += "\\v";
                break;
              case "001b":
                h += "\\e";
                break;
              case "0085":
                h += "\\N";
                break;
              case "00a0":
                h += "\\_";
                break;
              case "2028":
                h += "\\L";
                break;
              case "2029":
                h += "\\P";
                break;
              default:
                k.substr(0, 2) === "00" ? h += "\\x" + k.substr(2) : h += n.substr(m, 6);
            }
            m += 5, p = m + 1;
          }
          break;
        case "n":
          if (r || n[m + 2] === '"' || n.length < i)
            m += 1;
          else {
            for (h += n.slice(p, m) + `

`; n[m + 2] === "\\" && n[m + 3] === "n" && n[m + 4] !== '"'; )
              h += `
`, m += 2;
            h += l, n[m + 2] === " " && (h += "\\"), m += 1, p = m + 1;
          }
          break;
        default:
          m += 1;
      }
  return h = p ? h + n.slice(p) : n, r ? h : zr(h, l, hr, Or(e, false));
}
function lo(t2, e) {
  if (e.options.singleQuote === false || e.implicitKey && t2.includes(`
`) || /[ \t]\n|\n[ \t]/.test(t2))
    return y0(t2, e);
  const n = e.indent || (_r(t2) ? "  " : ""), r = "'" + t2.replace(/'/g, "''").replace(/\n+/g, `$&
${n}`) + "'";
  return e.implicitKey ? r : zr(r, n, Ec, Or(e, false));
}
function qn(t2, e) {
  const { singleQuote: n } = e.options;
  let r;
  if (n === false)
    r = y0;
  else {
    const i = t2.includes('"'), l = t2.includes("'");
    i && !l ? r = lo : l && !i ? r = y0 : r = n ? lo : y0;
  }
  return r(t2, e);
}
let co;
try {
  co = new RegExp(`(^|(?<!
))
+(?!
|$)`, "g");
} catch {
  co = /\n+(?!\n|$)/g;
}
function ur({ comment: t2, type: e, value: n }, r, i, l) {
  const { blockQuote: h, commentString: p, lineWidth: m } = r.options;
  if (!h || /\n[\t ]+$/.test(n) || /^\s*$/.test(n))
    return qn(n, r);
  const y = r.indent || (r.forceBlockIndent || _r(n) ? "  " : ""), k = h === "literal" ? true : h === "folded" || e === be.BLOCK_FOLDED ? false : e === be.BLOCK_LITERAL ? true : !_f(n, m, y.length);
  if (!n)
    return k ? `|
` : `>
`;
  let T, N;
  for (N = n.length; N > 0; --N) {
    const V = n[N - 1];
    if (V !== `
` && V !== "	" && V !== " ")
      break;
  }
  let z = n.substring(N);
  const S = z.indexOf(`
`);
  S === -1 ? T = "-" : n === z || S !== z.length - 1 ? (T = "+", l && l()) : T = "", z && (n = n.slice(0, -z.length), z[z.length - 1] === `
` && (z = z.slice(0, -1)), z = z.replace(co, `$&${y}`));
  let M = false, C, B = -1;
  for (C = 0; C < n.length; ++C) {
    const V = n[C];
    if (V === " ")
      M = true;
    else if (V === `
`)
      B = C;
    else
      break;
  }
  let H = n.substring(0, B < C ? B + 1 : C);
  H && (n = n.substring(H.length), H = H.replace(/\n+/g, `$&${y}`));
  let F = (M ? y ? "2" : "1" : "") + T;
  if (t2 && (F += " " + p(t2.replace(/ ?[\r\n]+/g, " ")), i && i()), !k) {
    const V = n.replace(/\n+/g, `
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${y}`);
    let U = false;
    const X = Or(r, true);
    h !== "folded" && e !== be.BLOCK_FOLDED && (X.onOverflow = () => {
      U = true;
    });
    const te = zr(`${H}${V}${z}`, y, ao, X);
    if (!U)
      return `>${F}
${y}${te}`;
  }
  return n = n.replace(/\n+/g, `$&${y}`), `|${F}
${y}${H}${n}${z}`;
}
function Bf(t2, e, n, r) {
  const { type: i, value: l } = t2, { actualString: h, implicitKey: p, indent: m, indentStep: y, inFlow: k } = e;
  if (p && l.includes(`
`) || k && /[[\]{},]/.test(l))
    return qn(l, e);
  if (/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(l))
    return p || k || !l.includes(`
`) ? qn(l, e) : ur(t2, e, n, r);
  if (!p && !k && i !== be.PLAIN && l.includes(`
`))
    return ur(t2, e, n, r);
  if (_r(l)) {
    if (m === "")
      return e.forceBlockIndent = true, ur(t2, e, n, r);
    if (p && m === y)
      return qn(l, e);
  }
  const T = l.replace(/\n+/g, `$&
${m}`);
  if (h) {
    const N = (M) => {
      var C;
      return M.default && M.tag !== "tag:yaml.org,2002:str" && ((C = M.test) == null ? void 0 : C.test(T));
    }, { compat: z, tags: S } = e.doc.schema;
    if (S.some(N) || z != null && z.some(N))
      return qn(l, e);
  }
  return p ? T : zr(T, m, Ec, Or(e, false));
}
function Ro(t2, e, n, r) {
  const { implicitKey: i, inFlow: l } = e, h = typeof t2.value == "string" ? t2 : Object.assign({}, t2, { value: String(t2.value) });
  let { type: p } = t2;
  p !== be.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(h.value) && (p = be.QUOTE_DOUBLE);
  const m = (k) => {
    switch (k) {
      case be.BLOCK_FOLDED:
      case be.BLOCK_LITERAL:
        return i || l ? qn(h.value, e) : ur(h, e, n, r);
      case be.QUOTE_DOUBLE:
        return y0(h.value, e);
      case be.QUOTE_SINGLE:
        return lo(h.value, e);
      case be.PLAIN:
        return Bf(h, e, n, r);
      default:
        return null;
    }
  };
  let y = m(p);
  if (y === null) {
    const { defaultKeyType: k, defaultStringType: T } = e.options, N = i && k || T;
    if (y = m(N), y === null)
      throw new Error(`Unsupported default string type ${N}`);
  }
  return y;
}
function Nc(t2, e) {
  const n = Object.assign({ blockQuote: true, commentString: Of, defaultKeyType: null, defaultStringType: "PLAIN", directives: null, doubleQuotedAsJSON: false, doubleQuotedMinMultiLineLength: 40, falseStr: "false", flowCollectionPadding: true, indentSeq: true, lineWidth: 80, minContentWidth: 20, nullStr: "null", simpleKeys: false, singleQuote: null, trueStr: "true", verifyAliasOrder: true }, t2.schema.toStringOptions, e);
  let r;
  switch (n.collectionStyle) {
    case "block":
      r = false;
      break;
    case "flow":
      r = true;
      break;
    default:
      r = null;
  }
  return { anchors: /* @__PURE__ */ new Set(), doc: t2, flowCollectionPadding: n.flowCollectionPadding ? " " : "", indent: "", indentStep: typeof n.indent == "number" ? " ".repeat(n.indent) : "  ", inFlow: r, options: n };
}
function qf(t2, e) {
  var n;
  if (e.tag) {
    const l = t2.filter((h) => h.tag === e.tag);
    if (l.length > 0)
      return l.find((h) => h.format === e.format) ?? l[0];
  }
  let r, i;
  if (qe(e)) {
    i = e.value;
    let l = t2.filter((h) => {
      var p;
      return (p = h.identify) == null ? void 0 : p.call(h, i);
    });
    if (l.length > 1) {
      const h = l.filter((p) => p.test);
      h.length > 0 && (l = h);
    }
    r = l.find((h) => h.format === e.format) ?? l.find((h) => !h.format);
  } else
    i = e, r = t2.find((l) => l.nodeClass && i instanceof l.nodeClass);
  if (!r) {
    const l = ((n = i == null ? void 0 : i.constructor) == null ? void 0 : n.name) ?? (i === null ? "null" : typeof i);
    throw new Error(`Tag not resolved for ${l} value`);
  }
  return r;
}
function Lf(t2, e, { anchors: n, doc: r }) {
  if (!r.directives)
    return "";
  const i = [], l = (qe(t2) || We(t2)) && t2.anchor;
  l && Sc(l) && (n.add(l), i.push(`&${l}`));
  const h = t2.tag ?? (e.default ? null : e.tag);
  return h && i.push(r.directives.tagString(h)), i.join(" ");
}
function $n(t2, e, n, r) {
  var i;
  if (Qe(t2))
    return t2.toString(e, n, r);
  if (An(t2)) {
    if (e.doc.directives)
      return t2.toString(e);
    if ((i = e.resolvedAliases) != null && i.has(t2))
      throw new TypeError("Cannot stringify circular structure without alias nodes");
    e.resolvedAliases ? e.resolvedAliases.add(t2) : e.resolvedAliases = /* @__PURE__ */ new Set([t2]), t2 = t2.resolve(e.doc);
  }
  let l;
  const h = Ye(t2) ? t2 : e.doc.createNode(t2, { onTagObj: (y) => l = y });
  l ?? (l = qf(e.doc.schema.tags, h));
  const p = Lf(h, l, e);
  p.length > 0 && (e.indentAtStart = (e.indentAtStart ?? 0) + p.length + 1);
  const m = typeof l.stringify == "function" ? l.stringify(h, e, n, r) : qe(h) ? Ro(h, e, n, r) : h.toString(e, n, r);
  return p ? qe(h) || m[0] === "{" || m[0] === "[" ? `${p} ${m}` : `${p}
${e.indent}${m}` : m;
}
function Df({ key: t2, value: e }, n, r, i) {
  const { allNullValues: l, doc: h, indent: p, indentStep: m, options: { commentString: y, indentSeq: k, simpleKeys: T } } = n;
  let N = Ye(t2) && t2.comment || null;
  if (T) {
    if (N)
      throw new Error("With simple keys, key nodes cannot have comments");
    if (We(t2) || !Ye(t2) && typeof t2 == "object") {
      const te = "With simple keys, collection cannot be used as a key value";
      throw new Error(te);
    }
  }
  let z = !T && (!t2 || N && e == null && !n.inFlow || We(t2) || (qe(t2) ? t2.type === be.BLOCK_FOLDED || t2.type === be.BLOCK_LITERAL : typeof t2 == "object"));
  n = Object.assign({}, n, { allNullValues: false, implicitKey: !z && (T || !l), indent: p + m });
  let S = false, M = false, C = $n(t2, n, () => S = true, () => M = true);
  if (!z && !n.inFlow && C.length > 1024) {
    if (T)
      throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
    z = true;
  }
  if (n.inFlow) {
    if (l || e == null)
      return S && r && r(), C === "" ? "?" : z ? `? ${C}` : C;
  } else if (l && !T || e == null && z)
    return C = `? ${C}`, N && !S ? C += yn(C, n.indent, y(N)) : M && i && i(), C;
  S && (N = null), z ? (N && (C += yn(C, n.indent, y(N))), C = `? ${C}
${p}:`) : (C = `${C}:`, N && (C += yn(C, n.indent, y(N))));
  let B, H, F;
  Ye(e) ? (B = !!e.spaceBefore, H = e.commentBefore, F = e.comment) : (B = false, H = null, F = null, e && typeof e == "object" && (e = h.createNode(e))), n.implicitKey = false, !z && !N && qe(e) && (n.indentAtStart = C.length + 1), M = false, !k && m.length >= 2 && !n.inFlow && !z && N0(e) && !e.flow && !e.tag && !e.anchor && (n.indent = n.indent.substring(2));
  let V = false;
  const U = $n(e, n, () => V = true, () => M = true);
  let X = " ";
  if (N || B || H) {
    if (X = B ? `
` : "", H) {
      const te = y(H);
      X += `
${Xt(te, n.indent)}`;
    }
    U === "" && !n.inFlow ? X === `
` && (X = `

`) : X += `
${n.indent}`;
  } else if (!z && We(e)) {
    const te = U[0], j = U.indexOf(`
`), le = j !== -1, ge = n.inFlow ?? e.flow ?? e.items.length === 0;
    if (le || !ge) {
      let pe = false;
      if (le && (te === "&" || te === "!")) {
        let ae = U.indexOf(" ");
        te === "&" && ae !== -1 && ae < j && U[ae + 1] === "!" && (ae = U.indexOf(" ", ae + 1)), (ae === -1 || j < ae) && (pe = true);
      }
      pe || (X = `
${n.indent}`);
    }
  } else
    (U === "" || U[0] === `
`) && (X = "");
  return C += X + U, n.inFlow ? V && r && r() : F && !V ? C += yn(C, n.indent, y(F)) : M && i && i(), C;
}
function Ic(t2, e) {
  (t2 === "debug" || t2 === "warn") && console.warn(e);
}
const rr = "<<", Yt = { identify: (t2) => t2 === rr || typeof t2 == "symbol" && t2.description === rr, default: "key", tag: "tag:yaml.org,2002:merge", test: /^<<$/, resolve: () => Object.assign(new be(Symbol(rr)), { addToJSMap: zc }), stringify: () => rr }, Rf = (t2, e) => (Yt.identify(e) || qe(e) && (!e.type || e.type === be.PLAIN) && Yt.identify(e.value)) && (t2 == null ? void 0 : t2.doc.schema.tags.some((n) => n.tag === Yt.tag && n.default));
function zc(t2, e, n) {
  if (n = t2 && An(n) ? n.resolve(t2.doc) : n, N0(n))
    for (const r of n.items)
      Fs(t2, e, r);
  else if (Array.isArray(n))
    for (const r of n)
      Fs(t2, e, r);
  else
    Fs(t2, e, n);
}
function Fs(t2, e, n) {
  const r = t2 && An(n) ? n.resolve(t2.doc) : n;
  if (!E0(r))
    throw new Error("Merge sources must be maps or map aliases");
  const i = r.toJSON(null, t2, Map);
  for (const [l, h] of i)
    e instanceof Map ? e.has(l) || e.set(l, h) : e instanceof Set ? e.add(l) : Object.prototype.hasOwnProperty.call(e, l) || Object.defineProperty(e, l, { value: h, writable: true, enumerable: true, configurable: true });
  return e;
}
function Oc(t2, e, { key: n, value: r }) {
  if (Ye(n) && n.addToJSMap)
    n.addToJSMap(t2, e, r);
  else if (Rf(t2, n))
    zc(t2, e, r);
  else {
    const i = Mt(n, "", t2);
    if (e instanceof Map)
      e.set(i, Mt(r, i, t2));
    else if (e instanceof Set)
      e.add(i);
    else {
      const l = Pf(n, i, t2), h = Mt(r, l, t2);
      l in e ? Object.defineProperty(e, l, { value: h, writable: true, enumerable: true, configurable: true }) : e[l] = h;
    }
  }
  return e;
}
function Pf(t2, e, n) {
  if (e === null)
    return "";
  if (typeof e != "object")
    return String(e);
  if (Ye(t2) && n != null && n.doc) {
    const r = Nc(n.doc, {});
    r.anchors = /* @__PURE__ */ new Set();
    for (const l of n.anchors.keys())
      r.anchors.add(l.anchor);
    r.inFlow = true, r.inStringifyKey = true;
    const i = t2.toString(r);
    if (!n.mapKeyWarned) {
      let l = JSON.stringify(i);
      l.length > 40 && (l = l.substring(0, 36) + '..."'), Ic(n.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${l}. Set mapAsMap: true to use object keys.`), n.mapKeyWarned = true;
    }
    return i;
  }
  return JSON.stringify(e);
}
function Po(t2, e, n) {
  const r = S0(t2, void 0, n), i = S0(e, void 0, n);
  return new ct(r, i);
}
class ct {
  constructor(e, n = null) {
    Object.defineProperty(this, Ct, { value: vc }), this.key = e, this.value = n;
  }
  clone(e) {
    let { key: n, value: r } = this;
    return Ye(n) && (n = n.clone(e)), Ye(r) && (r = r.clone(e)), new ct(n, r);
  }
  toJSON(e, n) {
    const r = n != null && n.mapAsMap ? /* @__PURE__ */ new Map() : {};
    return Oc(n, r, this);
  }
  toString(e, n, r) {
    return e != null && e.doc ? Df(this, e, n, r) : JSON.stringify(this);
  }
}
function _c(t2, e, n) {
  return (e.inFlow ?? t2.flow ? Ff : $f)(t2, e, n);
}
function $f({ comment: t2, items: e }, n, { blockItemPrefix: r, flowChars: i, itemIndent: l, onChompKeep: h, onComment: p }) {
  const { indent: m, options: { commentString: y } } = n, k = Object.assign({}, n, { indent: l, type: null });
  let T = false;
  const N = [];
  for (let S = 0; S < e.length; ++S) {
    const M = e[S];
    let C = null;
    if (Ye(M))
      !T && M.spaceBefore && N.push(""), Sr(n, N, M.commentBefore, T), M.comment && (C = M.comment);
    else if (Qe(M)) {
      const H = Ye(M.key) ? M.key : null;
      H && (!T && H.spaceBefore && N.push(""), Sr(n, N, H.commentBefore, T));
    }
    T = false;
    let B = $n(M, k, () => C = null, () => T = true);
    C && (B += yn(B, l, y(C))), T && C && (T = false), N.push(r + B);
  }
  let z;
  if (N.length === 0)
    z = i.start + i.end;
  else {
    z = N[0];
    for (let S = 1; S < N.length; ++S) {
      const M = N[S];
      z += M ? `
${m}${M}` : `
`;
    }
  }
  return t2 ? (z += `
` + Xt(y(t2), m), p && p()) : T && h && h(), z;
}
function Ff({ items: t2 }, e, { flowChars: n, itemIndent: r }) {
  const { indent: i, indentStep: l, flowCollectionPadding: h, options: { commentString: p } } = e;
  r += l;
  const m = Object.assign({}, e, { indent: r, inFlow: true, type: null });
  let y = false, k = 0;
  const T = [];
  for (let S = 0; S < t2.length; ++S) {
    const M = t2[S];
    let C = null;
    if (Ye(M))
      M.spaceBefore && T.push(""), Sr(e, T, M.commentBefore, false), M.comment && (C = M.comment);
    else if (Qe(M)) {
      const H = Ye(M.key) ? M.key : null;
      H && (H.spaceBefore && T.push(""), Sr(e, T, H.commentBefore, false), H.comment && (y = true));
      const F = Ye(M.value) ? M.value : null;
      F ? (F.comment && (C = F.comment), F.commentBefore && (y = true)) : M.value == null && H != null && H.comment && (C = H.comment);
    }
    C && (y = true);
    let B = $n(M, m, () => C = null);
    S < t2.length - 1 && (B += ","), C && (B += yn(B, r, p(C))), !y && (T.length > k || B.includes(`
`)) && (y = true), T.push(B), k = T.length;
  }
  const { start: N, end: z } = n;
  if (T.length === 0)
    return N + z;
  if (!y) {
    const S = T.reduce((M, C) => M + C.length + 2, 2);
    y = e.options.lineWidth > 0 && S > e.options.lineWidth;
  }
  if (y) {
    let S = N;
    for (const M of T)
      S += M ? `
${l}${i}${M}` : `
`;
    return `${S}
${i}${z}`;
  } else
    return `${N}${h}${T.join(" ")}${h}${z}`;
}
function Sr({ indent: t2, options: { commentString: e } }, n, r, i) {
  if (r && i && (r = r.replace(/^\n+/, "")), r) {
    const l = Xt(e(r), t2);
    n.push(l.trimStart());
  }
}
function bn(t2, e) {
  const n = qe(e) ? e.value : e;
  for (const r of t2)
    if (Qe(r) && (r.key === e || r.key === n || qe(r.key) && r.key.value === n))
      return r;
}
class Tt extends Cc {
  static get tagName() {
    return "tag:yaml.org,2002:map";
  }
  constructor(e) {
    super(an, e), this.items = [];
  }
  static from(e, n, r) {
    const { keepUndefined: i, replacer: l } = r, h = new this(e), p = (m, y) => {
      if (typeof l == "function")
        y = l.call(n, m, y);
      else if (Array.isArray(l) && !l.includes(m))
        return;
      (y !== void 0 || i) && h.items.push(Po(m, y, r));
    };
    if (n instanceof Map)
      for (const [m, y] of n)
        p(m, y);
    else if (n && typeof n == "object")
      for (const m of Object.keys(n))
        p(m, n[m]);
    return typeof e.sortMapEntries == "function" && h.items.sort(e.sortMapEntries), h;
  }
  add(e, n) {
    var r;
    let i;
    Qe(e) ? i = e : !e || typeof e != "object" || !("key" in e) ? i = new ct(e, e == null ? void 0 : e.value) : i = new ct(e.key, e.value);
    const l = bn(this.items, i.key), h = (r = this.schema) == null ? void 0 : r.sortMapEntries;
    if (l) {
      if (!n)
        throw new Error(`Key ${i.key} already set`);
      qe(l.value) && Mc(i.value) ? l.value.value = i.value : l.value = i.value;
    } else if (h) {
      const p = this.items.findIndex((m) => h(i, m) < 0);
      p === -1 ? this.items.push(i) : this.items.splice(p, 0, i);
    } else
      this.items.push(i);
  }
  delete(e) {
    const n = bn(this.items, e);
    return n ? this.items.splice(this.items.indexOf(n), 1).length > 0 : false;
  }
  get(e, n) {
    const r = bn(this.items, e), i = r == null ? void 0 : r.value;
    return (!n && qe(i) ? i.value : i) ?? void 0;
  }
  has(e) {
    return !!bn(this.items, e);
  }
  set(e, n) {
    this.add(new ct(e, n), true);
  }
  toJSON(e, n, r) {
    const i = r ? new r() : n != null && n.mapAsMap ? /* @__PURE__ */ new Map() : {};
    n != null && n.onCreate && n.onCreate(i);
    for (const l of this.items)
      Oc(n, i, l);
    return i;
  }
  toString(e, n, r) {
    if (!e)
      return JSON.stringify(this);
    for (const i of this.items)
      if (!Qe(i))
        throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);
    return !e.allNullValues && this.hasAllNullValues(false) && (e = Object.assign({}, e, { allNullValues: true })), _c(this, e, { blockItemPrefix: "", flowChars: { start: "{", end: "}" }, itemIndent: e.indent || "", onChompKeep: r, onComment: n });
  }
}
const Gn = { collection: "map", default: true, nodeClass: Tt, tag: "tag:yaml.org,2002:map", resolve(t2, e) {
  return E0(t2) || e("Expected a mapping for this tag"), t2;
}, createNode: (t2, e, n) => Tt.from(t2, e, n) };
class vn extends Cc {
  static get tagName() {
    return "tag:yaml.org,2002:seq";
  }
  constructor(e) {
    super(Un, e), this.items = [];
  }
  add(e) {
    this.items.push(e);
  }
  delete(e) {
    const n = sr(e);
    return typeof n != "number" ? false : this.items.splice(n, 1).length > 0;
  }
  get(e, n) {
    const r = sr(e);
    if (typeof r != "number")
      return;
    const i = this.items[r];
    return !n && qe(i) ? i.value : i;
  }
  has(e) {
    const n = sr(e);
    return typeof n == "number" && n < this.items.length;
  }
  set(e, n) {
    const r = sr(e);
    if (typeof r != "number")
      throw new Error(`Expected a valid index, not ${e}.`);
    const i = this.items[r];
    qe(i) && Mc(n) ? i.value = n : this.items[r] = n;
  }
  toJSON(e, n) {
    const r = [];
    n != null && n.onCreate && n.onCreate(r);
    let i = 0;
    for (const l of this.items)
      r.push(Mt(l, String(i++), n));
    return r;
  }
  toString(e, n, r) {
    return e ? _c(this, e, { blockItemPrefix: "- ", flowChars: { start: "[", end: "]" }, itemIndent: (e.indent || "") + "  ", onChompKeep: r, onComment: n }) : JSON.stringify(this);
  }
  static from(e, n, r) {
    const { replacer: i } = r, l = new this(e);
    if (n && Symbol.iterator in Object(n)) {
      let h = 0;
      for (let p of n) {
        if (typeof i == "function") {
          const m = n instanceof Set ? p : String(h++);
          p = i.call(n, m, p);
        }
        l.items.push(S0(p, void 0, r));
      }
    }
    return l;
  }
}
function sr(t2) {
  let e = qe(t2) ? t2.value : t2;
  return e && typeof e == "string" && (e = Number(e)), typeof e == "number" && Number.isInteger(e) && e >= 0 ? e : null;
}
const Xn = { collection: "seq", default: true, nodeClass: vn, tag: "tag:yaml.org,2002:seq", resolve(t2, e) {
  return N0(t2) || e("Expected a sequence for this tag"), t2;
}, createNode: (t2, e, n) => vn.from(t2, e, n) }, Br = { identify: (t2) => typeof t2 == "string", default: true, tag: "tag:yaml.org,2002:str", resolve: (t2) => t2, stringify(t2, e, n, r) {
  return e = Object.assign({ actualString: true }, e), Ro(t2, e, n, r);
} }, qr = { identify: (t2) => t2 == null, createNode: () => new be(null), default: true, tag: "tag:yaml.org,2002:null", test: /^(?:~|[Nn]ull|NULL)?$/, resolve: () => new be(null), stringify: ({ source: t2 }, e) => typeof t2 == "string" && qr.test.test(t2) ? t2 : e.options.nullStr }, $o = { identify: (t2) => typeof t2 == "boolean", default: true, tag: "tag:yaml.org,2002:bool", test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/, resolve: (t2) => new be(t2[0] === "t" || t2[0] === "T"), stringify({ source: t2, value: e }, n) {
  if (t2 && $o.test.test(t2)) {
    const r = t2[0] === "t" || t2[0] === "T";
    if (e === r)
      return t2;
  }
  return e ? n.options.trueStr : n.options.falseStr;
} };
function zt({ format: t2, minFractionDigits: e, tag: n, value: r }) {
  if (typeof r == "bigint")
    return String(r);
  const i = typeof r == "number" ? r : Number(r);
  if (!isFinite(i))
    return isNaN(i) ? ".nan" : i < 0 ? "-.inf" : ".inf";
  let l = JSON.stringify(r);
  if (!t2 && e && (!n || n === "tag:yaml.org,2002:float") && /^\d/.test(l)) {
    let h = l.indexOf(".");
    h < 0 && (h = l.length, l += ".");
    let p = e - (l.length - h - 1);
    for (; p-- > 0; )
      l += "0";
  }
  return l;
}
const Bc = { identify: (t2) => typeof t2 == "number", default: true, tag: "tag:yaml.org,2002:float", test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/, resolve: (t2) => t2.slice(-3).toLowerCase() === "nan" ? NaN : t2[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY, stringify: zt }, qc = { identify: (t2) => typeof t2 == "number", default: true, tag: "tag:yaml.org,2002:float", format: "EXP", test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/, resolve: (t2) => parseFloat(t2), stringify(t2) {
  const e = Number(t2.value);
  return isFinite(e) ? e.toExponential() : zt(t2);
} }, Lc = { identify: (t2) => typeof t2 == "number", default: true, tag: "tag:yaml.org,2002:float", test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/, resolve(t2) {
  const e = new be(parseFloat(t2)), n = t2.indexOf(".");
  return n !== -1 && t2[t2.length - 1] === "0" && (e.minFractionDigits = t2.length - n - 1), e;
}, stringify: zt }, Lr = (t2) => typeof t2 == "bigint" || Number.isInteger(t2), Fo = (t2, e, n, { intAsBigInt: r }) => r ? BigInt(t2) : parseInt(t2.substring(e), n);
function Dc(t2, e, n) {
  const { value: r } = t2;
  return Lr(r) && r >= 0 ? n + r.toString(e) : zt(t2);
}
const Rc = { identify: (t2) => Lr(t2) && t2 >= 0, default: true, tag: "tag:yaml.org,2002:int", format: "OCT", test: /^0o[0-7]+$/, resolve: (t2, e, n) => Fo(t2, 2, 8, n), stringify: (t2) => Dc(t2, 8, "0o") }, Pc = { identify: Lr, default: true, tag: "tag:yaml.org,2002:int", test: /^[-+]?[0-9]+$/, resolve: (t2, e, n) => Fo(t2, 0, 10, n), stringify: zt }, $c = { identify: (t2) => Lr(t2) && t2 >= 0, default: true, tag: "tag:yaml.org,2002:int", format: "HEX", test: /^0x[0-9a-fA-F]+$/, resolve: (t2, e, n) => Fo(t2, 2, 16, n), stringify: (t2) => Dc(t2, 16, "0x") }, Hf = [Gn, Xn, Br, qr, $o, Rc, Pc, $c, Bc, qc, Lc];
function il(t2) {
  return typeof t2 == "bigint" || Number.isInteger(t2);
}
const or = ({ value: t2 }) => JSON.stringify(t2), Vf = [{ identify: (t2) => typeof t2 == "string", default: true, tag: "tag:yaml.org,2002:str", resolve: (t2) => t2, stringify: or }, { identify: (t2) => t2 == null, createNode: () => new be(null), default: true, tag: "tag:yaml.org,2002:null", test: /^null$/, resolve: () => null, stringify: or }, { identify: (t2) => typeof t2 == "boolean", default: true, tag: "tag:yaml.org,2002:bool", test: /^true$|^false$/, resolve: (t2) => t2 === "true", stringify: or }, { identify: il, default: true, tag: "tag:yaml.org,2002:int", test: /^-?(?:0|[1-9][0-9]*)$/, resolve: (t2, e, { intAsBigInt: n }) => n ? BigInt(t2) : parseInt(t2, 10), stringify: ({ value: t2 }) => il(t2) ? t2.toString() : JSON.stringify(t2) }, { identify: (t2) => typeof t2 == "number", default: true, tag: "tag:yaml.org,2002:float", test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/, resolve: (t2) => parseFloat(t2), stringify: or }], jf = { default: true, tag: "", test: /^/, resolve(t2, e) {
  return e(`Unresolved plain scalar ${JSON.stringify(t2)}`), t2;
} }, Uf = [Gn, Xn].concat(Vf, jf), Ho = { identify: (t2) => t2 instanceof Uint8Array, default: false, tag: "tag:yaml.org,2002:binary", resolve(t2, e) {
  if (typeof atob == "function") {
    const n = atob(t2.replace(/[\n\r]/g, "")), r = new Uint8Array(n.length);
    for (let i = 0; i < n.length; ++i)
      r[i] = n.charCodeAt(i);
    return r;
  } else
    return e("This environment does not support reading binary tags; either Buffer or atob is required"), t2;
}, stringify({ comment: t2, type: e, value: n }, r, i, l) {
  if (!n)
    return "";
  const h = n;
  let p;
  if (typeof btoa == "function") {
    let m = "";
    for (let y = 0; y < h.length; ++y)
      m += String.fromCharCode(h[y]);
    p = btoa(m);
  } else
    throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
  if (e ?? (e = be.BLOCK_LITERAL), e !== be.QUOTE_DOUBLE) {
    const m = Math.max(r.options.lineWidth - r.indent.length, r.options.minContentWidth), y = Math.ceil(p.length / m), k = new Array(y);
    for (let T = 0, N = 0; T < y; ++T, N += m)
      k[T] = p.substr(N, m);
    p = k.join(e === be.BLOCK_LITERAL ? `
` : " ");
  }
  return Ro({ comment: t2, type: e, value: p }, r, i, l);
} };
function Fc(t2, e) {
  if (N0(t2))
    for (let n = 0; n < t2.items.length; ++n) {
      let r = t2.items[n];
      if (!Qe(r)) {
        if (E0(r)) {
          r.items.length > 1 && e("Each pair must have its own sequence indicator");
          const i = r.items[0] || new ct(new be(null));
          if (r.commentBefore && (i.key.commentBefore = i.key.commentBefore ? `${r.commentBefore}
${i.key.commentBefore}` : r.commentBefore), r.comment) {
            const l = i.value ?? i.key;
            l.comment = l.comment ? `${r.comment}
${l.comment}` : r.comment;
          }
          r = i;
        }
        t2.items[n] = Qe(r) ? r : new ct(r);
      }
    }
  else
    e("Expected a sequence for this tag");
  return t2;
}
function Hc(t2, e, n) {
  const { replacer: r } = n, i = new vn(t2);
  i.tag = "tag:yaml.org,2002:pairs";
  let l = 0;
  if (e && Symbol.iterator in Object(e))
    for (let h of e) {
      typeof r == "function" && (h = r.call(e, String(l++), h));
      let p, m;
      if (Array.isArray(h))
        if (h.length === 2)
          p = h[0], m = h[1];
        else
          throw new TypeError(`Expected [key, value] tuple: ${h}`);
      else if (h && h instanceof Object) {
        const y = Object.keys(h);
        if (y.length === 1)
          p = y[0], m = h[p];
        else
          throw new TypeError(`Expected tuple with one key, not ${y.length} keys`);
      } else
        p = h;
      i.items.push(Po(p, m, n));
    }
  return i;
}
const Vo = { collection: "seq", default: false, tag: "tag:yaml.org,2002:pairs", resolve: Fc, createNode: Hc };
class Dn extends vn {
  constructor() {
    super(), this.add = Tt.prototype.add.bind(this), this.delete = Tt.prototype.delete.bind(this), this.get = Tt.prototype.get.bind(this), this.has = Tt.prototype.has.bind(this), this.set = Tt.prototype.set.bind(this), this.tag = Dn.tag;
  }
  toJSON(e, n) {
    if (!n)
      return super.toJSON(e);
    const r = /* @__PURE__ */ new Map();
    n != null && n.onCreate && n.onCreate(r);
    for (const i of this.items) {
      let l, h;
      if (Qe(i) ? (l = Mt(i.key, "", n), h = Mt(i.value, l, n)) : l = Mt(i, "", n), r.has(l))
        throw new Error("Ordered maps must not include duplicate keys");
      r.set(l, h);
    }
    return r;
  }
  static from(e, n, r) {
    const i = Hc(e, n, r), l = new this();
    return l.items = i.items, l;
  }
}
Dn.tag = "tag:yaml.org,2002:omap";
const jo = { collection: "seq", identify: (t2) => t2 instanceof Map, nodeClass: Dn, default: false, tag: "tag:yaml.org,2002:omap", resolve(t2, e) {
  const n = Fc(t2, e), r = [];
  for (const { key: i } of n.items)
    qe(i) && (r.includes(i.value) ? e(`Ordered maps must not include duplicate keys: ${i.value}`) : r.push(i.value));
  return Object.assign(new Dn(), n);
}, createNode: (t2, e, n) => Dn.from(t2, e, n) };
function Vc({ value: t2, source: e }, n) {
  return e && (t2 ? jc : Uc).test.test(e) ? e : t2 ? n.options.trueStr : n.options.falseStr;
}
const jc = { identify: (t2) => t2 === true, default: true, tag: "tag:yaml.org,2002:bool", test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/, resolve: () => new be(true), stringify: Vc }, Uc = { identify: (t2) => t2 === false, default: true, tag: "tag:yaml.org,2002:bool", test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/, resolve: () => new be(false), stringify: Vc }, Kf = { identify: (t2) => typeof t2 == "number", default: true, tag: "tag:yaml.org,2002:float", test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/, resolve: (t2) => t2.slice(-3).toLowerCase() === "nan" ? NaN : t2[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY, stringify: zt }, Gf = { identify: (t2) => typeof t2 == "number", default: true, tag: "tag:yaml.org,2002:float", format: "EXP", test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/, resolve: (t2) => parseFloat(t2.replace(/_/g, "")), stringify(t2) {
  const e = Number(t2.value);
  return isFinite(e) ? e.toExponential() : zt(t2);
} }, Xf = { identify: (t2) => typeof t2 == "number", default: true, tag: "tag:yaml.org,2002:float", test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/, resolve(t2) {
  const e = new be(parseFloat(t2.replace(/_/g, ""))), n = t2.indexOf(".");
  if (n !== -1) {
    const r = t2.substring(n + 1).replace(/_/g, "");
    r[r.length - 1] === "0" && (e.minFractionDigits = r.length);
  }
  return e;
}, stringify: zt }, I0 = (t2) => typeof t2 == "bigint" || Number.isInteger(t2);
function Dr(t2, e, n, { intAsBigInt: r }) {
  const i = t2[0];
  if ((i === "-" || i === "+") && (e += 1), t2 = t2.substring(e).replace(/_/g, ""), r) {
    switch (n) {
      case 2:
        t2 = `0b${t2}`;
        break;
      case 8:
        t2 = `0o${t2}`;
        break;
      case 16:
        t2 = `0x${t2}`;
        break;
    }
    const h = BigInt(t2);
    return i === "-" ? BigInt(-1) * h : h;
  }
  const l = parseInt(t2, n);
  return i === "-" ? -1 * l : l;
}
function Uo(t2, e, n) {
  const { value: r } = t2;
  if (I0(r)) {
    const i = r.toString(e);
    return r < 0 ? "-" + n + i.substr(1) : n + i;
  }
  return zt(t2);
}
const Wf = { identify: I0, default: true, tag: "tag:yaml.org,2002:int", format: "BIN", test: /^[-+]?0b[0-1_]+$/, resolve: (t2, e, n) => Dr(t2, 2, 2, n), stringify: (t2) => Uo(t2, 2, "0b") }, Yf = { identify: I0, default: true, tag: "tag:yaml.org,2002:int", format: "OCT", test: /^[-+]?0[0-7_]+$/, resolve: (t2, e, n) => Dr(t2, 1, 8, n), stringify: (t2) => Uo(t2, 8, "0") }, Qf = { identify: I0, default: true, tag: "tag:yaml.org,2002:int", test: /^[-+]?[0-9][0-9_]*$/, resolve: (t2, e, n) => Dr(t2, 0, 10, n), stringify: zt }, Zf = { identify: I0, default: true, tag: "tag:yaml.org,2002:int", format: "HEX", test: /^[-+]?0x[0-9a-fA-F_]+$/, resolve: (t2, e, n) => Dr(t2, 2, 16, n), stringify: (t2) => Uo(t2, 16, "0x") };
class Rn extends Tt {
  constructor(e) {
    super(e), this.tag = Rn.tag;
  }
  add(e) {
    let n;
    Qe(e) ? n = e : e && typeof e == "object" && "key" in e && "value" in e && e.value === null ? n = new ct(e.key, null) : n = new ct(e, null), bn(this.items, n.key) || this.items.push(n);
  }
  get(e, n) {
    const r = bn(this.items, e);
    return !n && Qe(r) ? qe(r.key) ? r.key.value : r.key : r;
  }
  set(e, n) {
    if (typeof n != "boolean")
      throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`);
    const r = bn(this.items, e);
    r && !n ? this.items.splice(this.items.indexOf(r), 1) : !r && n && this.items.push(new ct(e));
  }
  toJSON(e, n) {
    return super.toJSON(e, n, Set);
  }
  toString(e, n, r) {
    if (!e)
      return JSON.stringify(this);
    if (this.hasAllNullValues(true))
      return super.toString(Object.assign({}, e, { allNullValues: true }), n, r);
    throw new Error("Set items must all have null values");
  }
  static from(e, n, r) {
    const { replacer: i } = r, l = new this(e);
    if (n && Symbol.iterator in Object(n))
      for (let h of n)
        typeof i == "function" && (h = i.call(n, h, h)), l.items.push(Po(h, null, r));
    return l;
  }
}
Rn.tag = "tag:yaml.org,2002:set";
const Ko = { collection: "map", identify: (t2) => t2 instanceof Set, nodeClass: Rn, default: false, tag: "tag:yaml.org,2002:set", createNode: (t2, e, n) => Rn.from(t2, e, n), resolve(t2, e) {
  if (E0(t2)) {
    if (t2.hasAllNullValues(true))
      return Object.assign(new Rn(), t2);
    e("Set items must all have null values");
  } else
    e("Expected a mapping for this tag");
  return t2;
} };
function Go(t2, e) {
  const n = t2[0], r = n === "-" || n === "+" ? t2.substring(1) : t2, i = (h) => e ? BigInt(h) : Number(h), l = r.replace(/_/g, "").split(":").reduce((h, p) => h * i(60) + i(p), i(0));
  return n === "-" ? i(-1) * l : l;
}
function Kc(t2) {
  let { value: e } = t2, n = (h) => h;
  if (typeof e == "bigint")
    n = (h) => BigInt(h);
  else if (isNaN(e) || !isFinite(e))
    return zt(t2);
  let r = "";
  e < 0 && (r = "-", e *= n(-1));
  const i = n(60), l = [e % i];
  return e < 60 ? l.unshift(0) : (e = (e - l[0]) / i, l.unshift(e % i), e >= 60 && (e = (e - l[0]) / i, l.unshift(e))), r + l.map((h) => String(h).padStart(2, "0")).join(":").replace(/000000\d*$/, "");
}
const Gc = { identify: (t2) => typeof t2 == "bigint" || Number.isInteger(t2), default: true, tag: "tag:yaml.org,2002:int", format: "TIME", test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/, resolve: (t2, e, { intAsBigInt: n }) => Go(t2, n), stringify: Kc }, Xc = { identify: (t2) => typeof t2 == "number", default: true, tag: "tag:yaml.org,2002:float", format: "TIME", test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/, resolve: (t2) => Go(t2, false), stringify: Kc }, Rr = { identify: (t2) => t2 instanceof Date, default: true, tag: "tag:yaml.org,2002:timestamp", test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"), resolve(t2) {
  const e = t2.match(Rr.test);
  if (!e)
    throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");
  const [, n, r, i, l, h, p] = e.map(Number), m = e[7] ? Number((e[7] + "00").substr(1, 3)) : 0;
  let y = Date.UTC(n, r - 1, i, l || 0, h || 0, p || 0, m);
  const k = e[8];
  if (k && k !== "Z") {
    let T = Go(k, false);
    Math.abs(T) < 30 && (T *= 60), y -= 6e4 * T;
  }
  return new Date(y);
}, stringify: ({ value: t2 }) => (t2 == null ? void 0 : t2.toISOString().replace(/(T00:00:00)?\.000Z$/, "")) ?? "" }, al = [Gn, Xn, Br, qr, jc, Uc, Wf, Yf, Qf, Zf, Kf, Gf, Xf, Ho, Yt, jo, Vo, Ko, Gc, Xc, Rr], ll = /* @__PURE__ */ new Map([["core", Hf], ["failsafe", [Gn, Xn, Br]], ["json", Uf], ["yaml11", al], ["yaml-1.1", al]]), cl = { binary: Ho, bool: $o, float: Lc, floatExp: qc, floatNaN: Bc, floatTime: Xc, int: Pc, intHex: $c, intOct: Rc, intTime: Gc, map: Gn, merge: Yt, null: qr, omap: jo, pairs: Vo, seq: Xn, set: Ko, timestamp: Rr }, Jf = { "tag:yaml.org,2002:binary": Ho, "tag:yaml.org,2002:merge": Yt, "tag:yaml.org,2002:omap": jo, "tag:yaml.org,2002:pairs": Vo, "tag:yaml.org,2002:set": Ko, "tag:yaml.org,2002:timestamp": Rr };
function Hs(t2, e, n) {
  const r = ll.get(e);
  if (r && !t2)
    return n && !r.includes(Yt) ? r.concat(Yt) : r.slice();
  let i = r;
  if (!i)
    if (Array.isArray(t2))
      i = [];
    else {
      const l = Array.from(ll.keys()).filter((h) => h !== "yaml11").map((h) => JSON.stringify(h)).join(", ");
      throw new Error(`Unknown schema "${e}"; use one of ${l} or define customTags array`);
    }
  if (Array.isArray(t2))
    for (const l of t2)
      i = i.concat(l);
  else
    typeof t2 == "function" && (i = t2(i.slice()));
  return n && (i = i.concat(Yt)), i.reduce((l, h) => {
    const p = typeof h == "string" ? cl[h] : h;
    if (!p) {
      const m = JSON.stringify(h), y = Object.keys(cl).map((k) => JSON.stringify(k)).join(", ");
      throw new Error(`Unknown custom tag ${m}; use one of ${y}`);
    }
    return l.includes(p) || l.push(p), l;
  }, []);
}
const e5 = (t2, e) => t2.key < e.key ? -1 : t2.key > e.key ? 1 : 0;
class Xo {
  constructor({ compat: e, customTags: n, merge: r, resolveKnownTags: i, schema: l, sortMapEntries: h, toStringDefaults: p }) {
    this.compat = Array.isArray(e) ? Hs(e, "compat") : e ? Hs(null, e) : null, this.name = typeof l == "string" && l || "core", this.knownTags = i ? Jf : {}, this.tags = Hs(n, this.name, r), this.toStringOptions = p ?? null, Object.defineProperty(this, an, { value: Gn }), Object.defineProperty(this, Pt, { value: Br }), Object.defineProperty(this, Un, { value: Xn }), this.sortMapEntries = typeof h == "function" ? h : h === true ? e5 : null;
  }
  clone() {
    const e = Object.create(Xo.prototype, Object.getOwnPropertyDescriptors(this));
    return e.tags = this.tags.slice(), e;
  }
}
function t5(t2, e) {
  var n;
  const r = [];
  let i = e.directives === true;
  if (e.directives !== false && t2.directives) {
    const y = t2.directives.toString(t2);
    y ? (r.push(y), i = true) : t2.directives.docStart && (i = true);
  }
  i && r.push("---");
  const l = Nc(t2, e), { commentString: h } = l.options;
  if (t2.commentBefore) {
    r.length !== 1 && r.unshift("");
    const y = h(t2.commentBefore);
    r.unshift(Xt(y, ""));
  }
  let p = false, m = null;
  if (t2.contents) {
    if (Ye(t2.contents)) {
      if (t2.contents.spaceBefore && i && r.push(""), t2.contents.commentBefore) {
        const T = h(t2.contents.commentBefore);
        r.push(Xt(T, ""));
      }
      l.forceBlockIndent = !!t2.comment, m = t2.contents.comment;
    }
    const y = m ? void 0 : () => p = true;
    let k = $n(t2.contents, l, () => m = null, y);
    m && (k += yn(k, "", h(m))), (k[0] === "|" || k[0] === ">") && r[r.length - 1] === "---" ? r[r.length - 1] = `--- ${k}` : r.push(k);
  } else
    r.push($n(t2.contents, l));
  if ((n = t2.directives) != null && n.docEnd)
    if (t2.comment) {
      const y = h(t2.comment);
      y.includes(`
`) ? (r.push("..."), r.push(Xt(y, ""))) : r.push(`... ${y}`);
    } else
      r.push("...");
  else {
    let y = t2.comment;
    y && p && (y = y.replace(/^\n+/, "")), y && ((!p || m) && r[r.length - 1] !== "" && r.push(""), r.push(Xt(h(y), "")));
  }
  return r.join(`
`) + `
`;
}
class Pr {
  constructor(e, n, r) {
    this.commentBefore = null, this.comment = null, this.errors = [], this.warnings = [], Object.defineProperty(this, Ct, { value: io });
    let i = null;
    typeof n == "function" || Array.isArray(n) ? i = n : r === void 0 && n && (r = n, n = void 0);
    const l = Object.assign({ intAsBigInt: false, keepSourceTokens: false, logLevel: "warn", prettyErrors: true, strict: true, stringKeys: false, uniqueKeys: true, version: "1.2" }, r);
    this.options = l;
    let { version: h } = l;
    r != null && r._directives ? (this.directives = r._directives.atDocument(), this.directives.yaml.explicit && (h = this.directives.yaml.version)) : this.directives = new lt({ version: h }), this.setSchema(h, r), this.contents = e === void 0 ? null : this.createNode(e, i, r);
  }
  clone() {
    const e = Object.create(Pr.prototype, { [Ct]: { value: io } });
    return e.commentBefore = this.commentBefore, e.comment = this.comment, e.errors = this.errors.slice(), e.warnings = this.warnings.slice(), e.options = Object.assign({}, this.options), this.directives && (e.directives = this.directives.clone()), e.schema = this.schema.clone(), e.contents = Ye(this.contents) ? this.contents.clone(e.schema) : this.contents, this.range && (e.range = this.range.slice()), e;
  }
  add(e) {
    Nn(this.contents) && this.contents.add(e);
  }
  addIn(e, n) {
    Nn(this.contents) && this.contents.addIn(e, n);
  }
  createAlias(e, n) {
    if (!e.anchor) {
      const r = Ac(this);
      e.anchor = !n || r.has(n) ? Tc(n || "a", r) : n;
    }
    return new Do(e.anchor);
  }
  createNode(e, n, r) {
    let i;
    if (typeof n == "function")
      e = n.call({ "": e }, "", e), i = n;
    else if (Array.isArray(n)) {
      const C = (H) => typeof H == "number" || H instanceof String || H instanceof Number, B = n.filter(C).map(String);
      B.length > 0 && (n = n.concat(B)), i = n;
    } else
      r === void 0 && n && (r = n, n = void 0);
    const { aliasDuplicateObjects: l, anchorPrefix: h, flow: p, keepUndefined: m, onTagObj: y, tag: k } = r ?? {}, { onAnchor: T, setAnchors: N, sourceObjects: z } = Nf(this, h || "a"), S = { aliasDuplicateObjects: l ?? true, keepUndefined: m ?? false, onAnchor: T, onTagObj: y, replacer: i, schema: this.schema, sourceObjects: z }, M = S0(e, k, S);
    return p && We(M) && (M.flow = true), N(), M;
  }
  createPair(e, n, r = {}) {
    const i = this.createNode(e, null, r), l = this.createNode(n, null, r);
    return new ct(i, l);
  }
  delete(e) {
    return Nn(this.contents) ? this.contents.delete(e) : false;
  }
  deleteIn(e) {
    return d0(e) ? this.contents == null ? false : (this.contents = null, true) : Nn(this.contents) ? this.contents.deleteIn(e) : false;
  }
  get(e, n) {
    return We(this.contents) ? this.contents.get(e, n) : void 0;
  }
  getIn(e, n) {
    return d0(e) ? !n && qe(this.contents) ? this.contents.value : this.contents : We(this.contents) ? this.contents.getIn(e, n) : void 0;
  }
  has(e) {
    return We(this.contents) ? this.contents.has(e) : false;
  }
  hasIn(e) {
    return d0(e) ? this.contents !== void 0 : We(this.contents) ? this.contents.hasIn(e) : false;
  }
  set(e, n) {
    this.contents == null ? this.contents = kr(this.schema, [e], n) : Nn(this.contents) && this.contents.set(e, n);
  }
  setIn(e, n) {
    d0(e) ? this.contents = n : this.contents == null ? this.contents = kr(this.schema, Array.from(e), n) : Nn(this.contents) && this.contents.setIn(e, n);
  }
  setSchema(e, n = {}) {
    typeof e == "number" && (e = String(e));
    let r;
    switch (e) {
      case "1.1":
        this.directives ? this.directives.yaml.version = "1.1" : this.directives = new lt({ version: "1.1" }), r = { resolveKnownTags: false, schema: "yaml-1.1" };
        break;
      case "1.2":
      case "next":
        this.directives ? this.directives.yaml.version = e : this.directives = new lt({ version: e }), r = { resolveKnownTags: true, schema: "core" };
        break;
      case null:
        this.directives && delete this.directives, r = null;
        break;
      default: {
        const i = JSON.stringify(e);
        throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${i}`);
      }
    }
    if (n.schema instanceof Object)
      this.schema = n.schema;
    else if (r)
      this.schema = new Xo(Object.assign(r, n));
    else
      throw new Error("With a null YAML version, the { schema: Schema } option is required");
  }
  toJS({ json: e, jsonArg: n, mapAsMap: r, maxAliasCount: i, onAnchor: l, reviver: h } = {}) {
    const p = { anchors: /* @__PURE__ */ new Map(), doc: this, keep: !e, mapAsMap: r === true, mapKeyWarned: false, maxAliasCount: typeof i == "number" ? i : 100 }, m = Mt(this.contents, n ?? "", p);
    if (typeof l == "function")
      for (const { count: y, res: k } of p.anchors.values())
        l(k, y);
    return typeof h == "function" ? Bn(h, { "": m }, "", m) : m;
  }
  toJSON(e, n) {
    return this.toJS({ json: true, jsonArg: e, mapAsMap: false, onAnchor: n });
  }
  toString(e = {}) {
    if (this.errors.length > 0)
      throw new Error("Document with errors cannot be stringified");
    if ("indent" in e && (!Number.isInteger(e.indent) || Number(e.indent) <= 0)) {
      const n = JSON.stringify(e.indent);
      throw new Error(`"indent" option must be a positive integer, not ${n}`);
    }
    return t5(this, e);
  }
}
function Nn(t2) {
  if (We(t2))
    return true;
  throw new Error("Expected a YAML collection as document contents");
}
class Wc extends Error {
  constructor(e, n, r, i) {
    super(), this.name = e, this.code = r, this.message = i, this.pos = n;
  }
}
class p0 extends Wc {
  constructor(e, n, r) {
    super("YAMLParseError", e, n, r);
  }
}
class n5 extends Wc {
  constructor(e, n, r) {
    super("YAMLWarning", e, n, r);
  }
}
const hl = (t2, e) => (n) => {
  if (n.pos[0] === -1)
    return;
  n.linePos = n.pos.map((p) => e.linePos(p));
  const { line: r, col: i } = n.linePos[0];
  n.message += ` at line ${r}, column ${i}`;
  let l = i - 1, h = t2.substring(e.lineStarts[r - 1], e.lineStarts[r]).replace(/[\n\r]+$/, "");
  if (l >= 60 && h.length > 80) {
    const p = Math.min(l - 39, h.length - 79);
    h = "\u2026" + h.substring(p), l -= p - 1;
  }
  if (h.length > 80 && (h = h.substring(0, 79) + "\u2026"), r > 1 && /^ *$/.test(h.substring(0, l))) {
    let p = t2.substring(e.lineStarts[r - 2], e.lineStarts[r - 1]);
    p.length > 80 && (p = p.substring(0, 79) + `\u2026
`), h = p + h;
  }
  if (/[^ ]/.test(h)) {
    let p = 1;
    const m = n.linePos[1];
    m && m.line === r && m.col > i && (p = Math.max(1, Math.min(m.col - i, 80 - l)));
    const y = " ".repeat(l) + "^".repeat(p);
    n.message += `:

${h}
${y}
`;
  }
};
function Fn(t2, { flow: e, indicator: n, next: r, offset: i, onError: l, parentIndent: h, startOnNewline: p }) {
  let m = false, y = p, k = p, T = "", N = "", z = false, S = false, M = null, C = null, B = null, H = null, F = null, V = null, U = null;
  for (const j of t2)
    switch (S && (j.type !== "space" && j.type !== "newline" && j.type !== "comma" && l(j.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), S = false), M && (y && j.type !== "comment" && j.type !== "newline" && l(M, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), M = null), j.type) {
      case "space":
        !e && (n !== "doc-start" || (r == null ? void 0 : r.type) !== "flow-collection") && j.source.includes("	") && (M = j), k = true;
        break;
      case "comment": {
        k || l(j, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
        const le = j.source.substring(1) || " ";
        T ? T += N + le : T = le, N = "", y = false;
        break;
      }
      case "newline":
        y ? T ? T += j.source : (!V || n !== "seq-item-ind") && (m = true) : N += j.source, y = true, z = true, (C || B) && (H = j), k = true;
        break;
      case "anchor":
        C && l(j, "MULTIPLE_ANCHORS", "A node can have at most one anchor"), j.source.endsWith(":") && l(j.offset + j.source.length - 1, "BAD_ALIAS", "Anchor ending in : is ambiguous", true), C = j, U ?? (U = j.offset), y = false, k = false, S = true;
        break;
      case "tag": {
        B && l(j, "MULTIPLE_TAGS", "A node can have at most one tag"), B = j, U ?? (U = j.offset), y = false, k = false, S = true;
        break;
      }
      case n:
        (C || B) && l(j, "BAD_PROP_ORDER", `Anchors and tags must be after the ${j.source} indicator`), V && l(j, "UNEXPECTED_TOKEN", `Unexpected ${j.source} in ${e ?? "collection"}`), V = j, y = n === "seq-item-ind" || n === "explicit-key-ind", k = false;
        break;
      case "comma":
        if (e) {
          F && l(j, "UNEXPECTED_TOKEN", `Unexpected , in ${e}`), F = j, y = false, k = false;
          break;
        }
      default:
        l(j, "UNEXPECTED_TOKEN", `Unexpected ${j.type} token`), y = false, k = false;
    }
  const X = t2[t2.length - 1], te = X ? X.offset + X.source.length : i;
  return S && r && r.type !== "space" && r.type !== "newline" && r.type !== "comma" && (r.type !== "scalar" || r.source !== "") && l(r.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), M && (y && M.indent <= h || (r == null ? void 0 : r.type) === "block-map" || (r == null ? void 0 : r.type) === "block-seq") && l(M, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), { comma: F, found: V, spaceBefore: m, comment: T, hasNewline: z, anchor: C, tag: B, newlineAfterProp: H, end: te, start: U ?? te };
}
function A0(t2) {
  if (!t2)
    return null;
  switch (t2.type) {
    case "alias":
    case "scalar":
    case "double-quoted-scalar":
    case "single-quoted-scalar":
      if (t2.source.includes(`
`))
        return true;
      if (t2.end) {
        for (const e of t2.end)
          if (e.type === "newline")
            return true;
      }
      return false;
    case "flow-collection":
      for (const e of t2.items) {
        for (const n of e.start)
          if (n.type === "newline")
            return true;
        if (e.sep) {
          for (const n of e.sep)
            if (n.type === "newline")
              return true;
        }
        if (A0(e.key) || A0(e.value))
          return true;
      }
      return false;
    default:
      return true;
  }
}
function ho(t2, e, n) {
  if ((e == null ? void 0 : e.type) === "flow-collection") {
    const r = e.end[0];
    r.indent === t2 && (r.source === "]" || r.source === "}") && A0(e) && n(r, "BAD_INDENT", "Flow end indicator should be more indented than parent", true);
  }
}
function Yc(t2, e, n) {
  const { uniqueKeys: r } = t2.options;
  if (r === false)
    return false;
  const i = typeof r == "function" ? r : (l, h) => l === h || qe(l) && qe(h) && l.value === h.value;
  return e.some((l) => i(l.key, n));
}
const ul = "All mapping items must start at the same column";
function r5({ composeNode: t2, composeEmptyNode: e }, n, r, i, l) {
  var h;
  const p = (l == null ? void 0 : l.nodeClass) ?? Tt, m = new p(n.schema);
  n.atRoot && (n.atRoot = false);
  let y = r.offset, k = null;
  for (const T of r.items) {
    const { start: N, key: z, sep: S, value: M } = T, C = Fn(N, { indicator: "explicit-key-ind", next: z ?? (S == null ? void 0 : S[0]), offset: y, onError: i, parentIndent: r.indent, startOnNewline: true }), B = !C.found;
    if (B) {
      if (z && (z.type === "block-seq" ? i(y, "BLOCK_AS_IMPLICIT_KEY", "A block sequence may not be used as an implicit map key") : "indent" in z && z.indent !== r.indent && i(y, "BAD_INDENT", ul)), !C.anchor && !C.tag && !S) {
        k = C.end, C.comment && (m.comment ? m.comment += `
` + C.comment : m.comment = C.comment);
        continue;
      }
      (C.newlineAfterProp || A0(z)) && i(z ?? N[N.length - 1], "MULTILINE_IMPLICIT_KEY", "Implicit keys need to be on a single line");
    } else
      ((h = C.found) == null ? void 0 : h.indent) !== r.indent && i(y, "BAD_INDENT", ul);
    n.atKey = true;
    const H = C.end, F = z ? t2(n, z, C, i) : e(n, H, N, null, C, i);
    n.schema.compat && ho(r.indent, z, i), n.atKey = false, Yc(n, m.items, F) && i(H, "DUPLICATE_KEY", "Map keys must be unique");
    const V = Fn(S ?? [], { indicator: "map-value-ind", next: M, offset: F.range[2], onError: i, parentIndent: r.indent, startOnNewline: !z || z.type === "block-scalar" });
    if (y = V.end, V.found) {
      B && ((M == null ? void 0 : M.type) === "block-map" && !V.hasNewline && i(y, "BLOCK_AS_IMPLICIT_KEY", "Nested mappings are not allowed in compact mappings"), n.options.strict && C.start < V.found.offset - 1024 && i(F.range, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));
      const U = M ? t2(n, M, V, i) : e(n, y, S, null, V, i);
      n.schema.compat && ho(r.indent, M, i), y = U.range[2];
      const X = new ct(F, U);
      n.options.keepSourceTokens && (X.srcToken = T), m.items.push(X);
    } else {
      B && i(F.range, "MISSING_CHAR", "Implicit map keys need to be followed by map values"), V.comment && (F.comment ? F.comment += `
` + V.comment : F.comment = V.comment);
      const U = new ct(F);
      n.options.keepSourceTokens && (U.srcToken = T), m.items.push(U);
    }
  }
  return k && k < y && i(k, "IMPOSSIBLE", "Map comment with trailing content"), m.range = [r.offset, y, k ?? y], m;
}
function s5({ composeNode: t2, composeEmptyNode: e }, n, r, i, l) {
  const h = (l == null ? void 0 : l.nodeClass) ?? vn, p = new h(n.schema);
  n.atRoot && (n.atRoot = false), n.atKey && (n.atKey = false);
  let m = r.offset, y = null;
  for (const { start: k, value: T } of r.items) {
    const N = Fn(k, { indicator: "seq-item-ind", next: T, offset: m, onError: i, parentIndent: r.indent, startOnNewline: true });
    if (!N.found)
      if (N.anchor || N.tag || T)
        T && T.type === "block-seq" ? i(N.end, "BAD_INDENT", "All sequence items must start at the same column") : i(m, "MISSING_CHAR", "Sequence item without - indicator");
      else {
        y = N.end, N.comment && (p.comment = N.comment);
        continue;
      }
    const z = T ? t2(n, T, N, i) : e(n, N.end, k, null, N, i);
    n.schema.compat && ho(r.indent, T, i), m = z.range[2], p.items.push(z);
  }
  return p.range = [r.offset, m, y ?? m], p;
}
function z0(t2, e, n, r) {
  let i = "";
  if (t2) {
    let l = false, h = "";
    for (const p of t2) {
      const { source: m, type: y } = p;
      switch (y) {
        case "space":
          l = true;
          break;
        case "comment": {
          n && !l && r(p, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
          const k = m.substring(1) || " ";
          i ? i += h + k : i = k, h = "";
          break;
        }
        case "newline":
          i && (h += m), l = true;
          break;
        default:
          r(p, "UNEXPECTED_TOKEN", `Unexpected ${y} at node end`);
      }
      e += m.length;
    }
  }
  return { comment: i, offset: e };
}
const Vs = "Block collections are not allowed within flow collections", js = (t2) => t2 && (t2.type === "block-map" || t2.type === "block-seq");
function o5({ composeNode: t2, composeEmptyNode: e }, n, r, i, l) {
  const h = r.start.source === "{", p = h ? "flow map" : "flow sequence", m = (l == null ? void 0 : l.nodeClass) ?? (h ? Tt : vn), y = new m(n.schema);
  y.flow = true;
  const k = n.atRoot;
  k && (n.atRoot = false), n.atKey && (n.atKey = false);
  let T = r.offset + r.start.source.length;
  for (let C = 0; C < r.items.length; ++C) {
    const B = r.items[C], { start: H, key: F, sep: V, value: U } = B, X = Fn(H, { flow: p, indicator: "explicit-key-ind", next: F ?? (V == null ? void 0 : V[0]), offset: T, onError: i, parentIndent: r.indent, startOnNewline: false });
    if (!X.found) {
      if (!X.anchor && !X.tag && !V && !U) {
        C === 0 && X.comma ? i(X.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${p}`) : C < r.items.length - 1 && i(X.start, "UNEXPECTED_TOKEN", `Unexpected empty item in ${p}`), X.comment && (y.comment ? y.comment += `
` + X.comment : y.comment = X.comment), T = X.end;
        continue;
      }
      !h && n.options.strict && A0(F) && i(F, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
    }
    if (C === 0)
      X.comma && i(X.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${p}`);
    else if (X.comma || i(X.start, "MISSING_CHAR", `Missing , between ${p} items`), X.comment) {
      let te = "";
      e:
        for (const j of H)
          switch (j.type) {
            case "comma":
            case "space":
              break;
            case "comment":
              te = j.source.substring(1);
              break e;
            default:
              break e;
          }
      if (te) {
        let j = y.items[y.items.length - 1];
        Qe(j) && (j = j.value ?? j.key), j.comment ? j.comment += `
` + te : j.comment = te, X.comment = X.comment.substring(te.length + 1);
      }
    }
    if (!h && !V && !X.found) {
      const te = U ? t2(n, U, X, i) : e(n, X.end, V, null, X, i);
      y.items.push(te), T = te.range[2], js(U) && i(te.range, "BLOCK_IN_FLOW", Vs);
    } else {
      n.atKey = true;
      const te = X.end, j = F ? t2(n, F, X, i) : e(n, te, H, null, X, i);
      js(F) && i(j.range, "BLOCK_IN_FLOW", Vs), n.atKey = false;
      const le = Fn(V ?? [], { flow: p, indicator: "map-value-ind", next: U, offset: j.range[2], onError: i, parentIndent: r.indent, startOnNewline: false });
      if (le.found) {
        if (!h && !X.found && n.options.strict) {
          if (V)
            for (const ae of V) {
              if (ae === le.found)
                break;
              if (ae.type === "newline") {
                i(ae, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
                break;
              }
            }
          X.start < le.found.offset - 1024 && i(le.found, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key");
        }
      } else
        U && ("source" in U && U.source && U.source[0] === ":" ? i(U, "MISSING_CHAR", `Missing space after : in ${p}`) : i(le.start, "MISSING_CHAR", `Missing , or : between ${p} items`));
      const ge = U ? t2(n, U, le, i) : le.found ? e(n, le.end, V, null, le, i) : null;
      ge ? js(U) && i(ge.range, "BLOCK_IN_FLOW", Vs) : le.comment && (j.comment ? j.comment += `
` + le.comment : j.comment = le.comment);
      const pe = new ct(j, ge);
      if (n.options.keepSourceTokens && (pe.srcToken = B), h) {
        const ae = y;
        Yc(n, ae.items, j) && i(te, "DUPLICATE_KEY", "Map keys must be unique"), ae.items.push(pe);
      } else {
        const ae = new Tt(n.schema);
        ae.flow = true, ae.items.push(pe);
        const Ae = (ge ?? j).range;
        ae.range = [j.range[0], Ae[1], Ae[2]], y.items.push(ae);
      }
      T = ge ? ge.range[2] : le.end;
    }
  }
  const N = h ? "}" : "]", [z, ...S] = r.end;
  let M = T;
  if (z && z.source === N)
    M = z.offset + z.source.length;
  else {
    const C = p[0].toUpperCase() + p.substring(1), B = k ? `${C} must end with a ${N}` : `${C} in block collection must be sufficiently indented and end with a ${N}`;
    i(T, k ? "MISSING_CHAR" : "BAD_INDENT", B), z && z.source.length !== 1 && S.unshift(z);
  }
  if (S.length > 0) {
    const C = z0(S, M, n.options.strict, i);
    C.comment && (y.comment ? y.comment += `
` + C.comment : y.comment = C.comment), y.range = [r.offset, M, C.offset];
  } else
    y.range = [r.offset, M, M];
  return y;
}
function Us(t2, e, n, r, i, l) {
  const h = n.type === "block-map" ? r5(t2, e, n, r, l) : n.type === "block-seq" ? s5(t2, e, n, r, l) : o5(t2, e, n, r, l), p = h.constructor;
  return i === "!" || i === p.tagName ? (h.tag = p.tagName, h) : (i && (h.tag = i), h);
}
function i5(t2, e, n, r, i) {
  var l;
  const h = r.tag, p = h ? e.directives.tagName(h.source, (z) => i(h, "TAG_RESOLVE_FAILED", z)) : null;
  if (n.type === "block-seq") {
    const { anchor: z, newlineAfterProp: S } = r, M = z && h ? z.offset > h.offset ? z : h : z ?? h;
    M && (!S || S.offset < M.offset) && i(M, "MISSING_CHAR", "Missing newline after block sequence props");
  }
  const m = n.type === "block-map" ? "map" : n.type === "block-seq" ? "seq" : n.start.source === "{" ? "map" : "seq";
  if (!h || !p || p === "!" || p === Tt.tagName && m === "map" || p === vn.tagName && m === "seq")
    return Us(t2, e, n, i, p);
  let y = e.schema.tags.find((z) => z.tag === p && z.collection === m);
  if (!y) {
    const z = e.schema.knownTags[p];
    if (z && z.collection === m)
      e.schema.tags.push(Object.assign({}, z, { default: false })), y = z;
    else
      return z ? i(h, "BAD_COLLECTION_TYPE", `${z.tag} used for ${m} collection, but expects ${z.collection ?? "scalar"}`, true) : i(h, "TAG_RESOLVE_FAILED", `Unresolved tag: ${p}`, true), Us(t2, e, n, i, p);
  }
  const k = Us(t2, e, n, i, p, y), T = ((l = y.resolve) == null ? void 0 : l.call(y, k, (z) => i(h, "TAG_RESOLVE_FAILED", z), e.options)) ?? k, N = Ye(T) ? T : new be(T);
  return N.range = k.range, N.tag = p, y != null && y.format && (N.format = y.format), N;
}
function a5(t2, e, n) {
  const r = e.offset, i = l5(e, t2.options.strict, n);
  if (!i)
    return { value: "", type: null, comment: "", range: [r, r, r] };
  const l = i.mode === ">" ? be.BLOCK_FOLDED : be.BLOCK_LITERAL, h = e.source ? c5(e.source) : [];
  let p = h.length;
  for (let M = h.length - 1; M >= 0; --M) {
    const C = h[M][1];
    if (C === "" || C === "\r")
      p = M;
    else
      break;
  }
  if (p === 0) {
    const M = i.chomp === "+" && h.length > 0 ? `
`.repeat(Math.max(1, h.length - 1)) : "";
    let C = r + i.length;
    return e.source && (C += e.source.length), { value: M, type: l, comment: i.comment, range: [r, C, C] };
  }
  let m = e.indent + i.indent, y = e.offset + i.length, k = 0;
  for (let M = 0; M < p; ++M) {
    const [C, B] = h[M];
    if (B === "" || B === "\r")
      i.indent === 0 && C.length > m && (m = C.length);
    else {
      C.length < m && n(y + C.length, "MISSING_CHAR", "Block scalars with more-indented leading empty lines must use an explicit indentation indicator"), i.indent === 0 && (m = C.length), k = M, m === 0 && !t2.atRoot && n(y, "BAD_INDENT", "Block scalar values in collections must be indented");
      break;
    }
    y += C.length + B.length + 1;
  }
  for (let M = h.length - 1; M >= p; --M)
    h[M][0].length > m && (p = M + 1);
  let T = "", N = "", z = false;
  for (let M = 0; M < k; ++M)
    T += h[M][0].slice(m) + `
`;
  for (let M = k; M < p; ++M) {
    let [C, B] = h[M];
    y += C.length + B.length + 1;
    const H = B[B.length - 1] === "\r";
    if (H && (B = B.slice(0, -1)), B && C.length < m) {
      const F = `Block scalar lines must not be less indented than their ${i.indent ? "explicit indentation indicator" : "first line"}`;
      n(y - B.length - (H ? 2 : 1), "BAD_INDENT", F), C = "";
    }
    l === be.BLOCK_LITERAL ? (T += N + C.slice(m) + B, N = `
`) : C.length > m || B[0] === "	" ? (N === " " ? N = `
` : !z && N === `
` && (N = `

`), T += N + C.slice(m) + B, N = `
`, z = true) : B === "" ? N === `
` ? T += `
` : N = `
` : (T += N + B, N = " ", z = false);
  }
  switch (i.chomp) {
    case "-":
      break;
    case "+":
      for (let M = p; M < h.length; ++M)
        T += `
` + h[M][0].slice(m);
      T[T.length - 1] !== `
` && (T += `
`);
      break;
    default:
      T += `
`;
  }
  const S = r + i.length + e.source.length;
  return { value: T, type: l, comment: i.comment, range: [r, S, S] };
}
function l5({ offset: t2, props: e }, n, r) {
  if (e[0].type !== "block-scalar-header")
    return r(e[0], "IMPOSSIBLE", "Block scalar header not found"), null;
  const { source: i } = e[0], l = i[0];
  let h = 0, p = "", m = -1;
  for (let N = 1; N < i.length; ++N) {
    const z = i[N];
    if (!p && (z === "-" || z === "+"))
      p = z;
    else {
      const S = Number(z);
      !h && S ? h = S : m === -1 && (m = t2 + N);
    }
  }
  m !== -1 && r(m, "UNEXPECTED_TOKEN", `Block scalar header includes extra characters: ${i}`);
  let y = false, k = "", T = i.length;
  for (let N = 1; N < e.length; ++N) {
    const z = e[N];
    switch (z.type) {
      case "space":
        y = true;
      case "newline":
        T += z.source.length;
        break;
      case "comment":
        n && !y && r(z, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters"), T += z.source.length, k = z.source.substring(1);
        break;
      case "error":
        r(z, "UNEXPECTED_TOKEN", z.message), T += z.source.length;
        break;
      default: {
        const S = `Unexpected token in block scalar header: ${z.type}`;
        r(z, "UNEXPECTED_TOKEN", S);
        const M = z.source;
        M && typeof M == "string" && (T += M.length);
      }
    }
  }
  return { mode: l, indent: h, chomp: p, comment: k, length: T };
}
function c5(t2) {
  const e = t2.split(/\n( *)/), n = e[0], r = n.match(/^( *)/), i = [r != null && r[1] ? [r[1], n.slice(r[1].length)] : ["", n]];
  for (let l = 1; l < e.length; l += 2)
    i.push([e[l], e[l + 1]]);
  return i;
}
function h5(t2, e, n) {
  const { offset: r, type: i, source: l, end: h } = t2;
  let p, m;
  const y = (N, z, S) => n(r + N, z, S);
  switch (i) {
    case "scalar":
      p = be.PLAIN, m = u5(l, y);
      break;
    case "single-quoted-scalar":
      p = be.QUOTE_SINGLE, m = d5(l, y);
      break;
    case "double-quoted-scalar":
      p = be.QUOTE_DOUBLE, m = p5(l, y);
      break;
    default:
      return n(t2, "UNEXPECTED_TOKEN", `Expected a flow scalar value, but found: ${i}`), { value: "", type: null, comment: "", range: [r, r + l.length, r + l.length] };
  }
  const k = r + l.length, T = z0(h, k, e, n);
  return { value: m, type: p, comment: T.comment, range: [r, k, T.offset] };
}
function u5(t2, e) {
  let n = "";
  switch (t2[0]) {
    case "	":
      n = "a tab character";
      break;
    case ",":
      n = "flow indicator character ,";
      break;
    case "%":
      n = "directive indicator character %";
      break;
    case "|":
    case ">": {
      n = `block scalar indicator ${t2[0]}`;
      break;
    }
    case "@":
    case "`": {
      n = `reserved character ${t2[0]}`;
      break;
    }
  }
  return n && e(0, "BAD_SCALAR_START", `Plain value cannot start with ${n}`), Qc(t2);
}
function d5(t2, e) {
  return (t2[t2.length - 1] !== "'" || t2.length === 1) && e(t2.length, "MISSING_CHAR", "Missing closing 'quote"), Qc(t2.slice(1, -1)).replace(/''/g, "'");
}
function Qc(t2) {
  let e, n;
  try {
    e = new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`, "sy"), n = new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`, "sy");
  } catch {
    e = /(.*?)[ \t]*\r?\n/sy, n = /[ \t]*(.*?)[ \t]*\r?\n/sy;
  }
  let r = e.exec(t2);
  if (!r)
    return t2;
  let i = r[1], l = " ", h = e.lastIndex;
  for (n.lastIndex = h; r = n.exec(t2); )
    r[1] === "" ? l === `
` ? i += l : l = `
` : (i += l + r[1], l = " "), h = n.lastIndex;
  const p = /[ \t]*(.*)/sy;
  return p.lastIndex = h, r = p.exec(t2), i + l + ((r == null ? void 0 : r[1]) ?? "");
}
function p5(t2, e) {
  let n = "";
  for (let r = 1; r < t2.length - 1; ++r) {
    const i = t2[r];
    if (!(i === "\r" && t2[r + 1] === `
`))
      if (i === `
`) {
        const { fold: l, offset: h } = m5(t2, r);
        n += l, r = h;
      } else if (i === "\\") {
        let l = t2[++r];
        const h = f5[l];
        if (h)
          n += h;
        else if (l === `
`)
          for (l = t2[r + 1]; l === " " || l === "	"; )
            l = t2[++r + 1];
        else if (l === "\r" && t2[r + 1] === `
`)
          for (l = t2[++r + 1]; l === " " || l === "	"; )
            l = t2[++r + 1];
        else if (l === "x" || l === "u" || l === "U") {
          const p = { x: 2, u: 4, U: 8 }[l];
          n += g5(t2, r + 1, p, e), r += p;
        } else {
          const p = t2.substr(r - 1, 2);
          e(r - 1, "BAD_DQ_ESCAPE", `Invalid escape sequence ${p}`), n += p;
        }
      } else if (i === " " || i === "	") {
        const l = r;
        let h = t2[r + 1];
        for (; h === " " || h === "	"; )
          h = t2[++r + 1];
        h !== `
` && !(h === "\r" && t2[r + 2] === `
`) && (n += r > l ? t2.slice(l, r + 1) : i);
      } else
        n += i;
  }
  return (t2[t2.length - 1] !== '"' || t2.length === 1) && e(t2.length, "MISSING_CHAR", 'Missing closing "quote'), n;
}
function m5(t2, e) {
  let n = "", r = t2[e + 1];
  for (; (r === " " || r === "	" || r === `
` || r === "\r") && !(r === "\r" && t2[e + 2] !== `
`); )
    r === `
` && (n += `
`), e += 1, r = t2[e + 1];
  return n || (n = " "), { fold: n, offset: e };
}
const f5 = { 0: "\0", a: "\x07", b: "\b", e: "\x1B", f: "\f", n: `
`, r: "\r", t: "	", v: "\v", N: "\x85", _: "\xA0", L: "\u2028", P: "\u2029", " ": " ", '"': '"', "/": "/", "\\": "\\", "	": "	" };
function g5(t2, e, n, r) {
  const i = t2.substr(e, n), l = i.length === n && /^[0-9a-fA-F]+$/.test(i) ? parseInt(i, 16) : NaN;
  if (isNaN(l)) {
    const h = t2.substr(e - 2, n + 2);
    return r(e - 2, "BAD_DQ_ESCAPE", `Invalid escape sequence ${h}`), h;
  }
  return String.fromCodePoint(l);
}
function Zc(t2, e, n, r) {
  const { value: i, type: l, comment: h, range: p } = e.type === "block-scalar" ? a5(t2, e, r) : h5(e, t2.options.strict, r), m = n ? t2.directives.tagName(n.source, (T) => r(n, "TAG_RESOLVE_FAILED", T)) : null;
  let y;
  t2.options.stringKeys && t2.atKey ? y = t2.schema[Pt] : m ? y = y5(t2.schema, i, m, n, r) : e.type === "scalar" ? y = b5(t2, i, e, r) : y = t2.schema[Pt];
  let k;
  try {
    const T = y.resolve(i, (N) => r(n ?? e, "TAG_RESOLVE_FAILED", N), t2.options);
    k = qe(T) ? T : new be(T);
  } catch (T) {
    const N = T instanceof Error ? T.message : String(T);
    r(n ?? e, "TAG_RESOLVE_FAILED", N), k = new be(i);
  }
  return k.range = p, k.source = i, l && (k.type = l), m && (k.tag = m), y.format && (k.format = y.format), h && (k.comment = h), k;
}
function y5(t2, e, n, r, i) {
  var l;
  if (n === "!")
    return t2[Pt];
  const h = [];
  for (const m of t2.tags)
    if (!m.collection && m.tag === n)
      if (m.default && m.test)
        h.push(m);
      else
        return m;
  for (const m of h)
    if ((l = m.test) != null && l.test(e))
      return m;
  const p = t2.knownTags[n];
  return p && !p.collection ? (t2.tags.push(Object.assign({}, p, { default: false, test: void 0 })), p) : (i(r, "TAG_RESOLVE_FAILED", `Unresolved tag: ${n}`, n !== "tag:yaml.org,2002:str"), t2[Pt]);
}
function b5({ atKey: t2, directives: e, schema: n }, r, i, l) {
  const h = n.tags.find((p) => {
    var m;
    return (p.default === true || t2 && p.default === "key") && ((m = p.test) == null ? void 0 : m.test(r));
  }) || n[Pt];
  if (n.compat) {
    const p = n.compat.find((m) => {
      var y;
      return m.default && ((y = m.test) == null ? void 0 : y.test(r));
    }) ?? n[Pt];
    if (h.tag !== p.tag) {
      const m = e.tagString(h.tag), y = e.tagString(p.tag), k = `Value may be parsed as either ${m} or ${y}`;
      l(i, "TAG_RESOLVE_FAILED", k, true);
    }
  }
  return h;
}
function x5(t2, e, n) {
  if (e) {
    n ?? (n = e.length);
    for (let r = n - 1; r >= 0; --r) {
      let i = e[r];
      switch (i.type) {
        case "space":
        case "comment":
        case "newline":
          t2 -= i.source.length;
          continue;
      }
      for (i = e[++r]; (i == null ? void 0 : i.type) === "space"; )
        t2 += i.source.length, i = e[++r];
      break;
    }
  }
  return t2;
}
const w5 = { composeNode: Jc, composeEmptyNode: Wo };
function Jc(t2, e, n, r) {
  const i = t2.atKey, { spaceBefore: l, comment: h, anchor: p, tag: m } = n;
  let y, k = true;
  switch (e.type) {
    case "alias":
      y = v5(t2, e, r), (p || m) && r(e, "ALIAS_PROPS", "An alias node must not specify any properties");
      break;
    case "scalar":
    case "single-quoted-scalar":
    case "double-quoted-scalar":
    case "block-scalar":
      y = Zc(t2, e, m, r), p && (y.anchor = p.source.substring(1));
      break;
    case "block-map":
    case "block-seq":
    case "flow-collection":
      y = i5(w5, t2, e, n, r), p && (y.anchor = p.source.substring(1));
      break;
    default: {
      const T = e.type === "error" ? e.message : `Unsupported token (type: ${e.type})`;
      r(e, "UNEXPECTED_TOKEN", T), y = Wo(t2, e.offset, void 0, null, n, r), k = false;
    }
  }
  return p && y.anchor === "" && r(p, "BAD_ALIAS", "Anchor cannot be an empty string"), i && t2.options.stringKeys && (!qe(y) || typeof y.value != "string" || y.tag && y.tag !== "tag:yaml.org,2002:str") && r(m ?? e, "NON_STRING_KEY", "With stringKeys, all keys must be strings"), l && (y.spaceBefore = true), h && (e.type === "scalar" && e.source === "" ? y.comment = h : y.commentBefore = h), t2.options.keepSourceTokens && k && (y.srcToken = e), y;
}
function Wo(t2, e, n, r, { spaceBefore: i, comment: l, anchor: h, tag: p, end: m }, y) {
  const k = { type: "scalar", offset: x5(e, n, r), indent: -1, source: "" }, T = Zc(t2, k, p, y);
  return h && (T.anchor = h.source.substring(1), T.anchor === "" && y(h, "BAD_ALIAS", "Anchor cannot be an empty string")), i && (T.spaceBefore = true), l && (T.comment = l, T.range[2] = m), T;
}
function v5({ options: t2 }, { offset: e, source: n, end: r }, i) {
  const l = new Do(n.substring(1));
  l.source === "" && i(e, "BAD_ALIAS", "Alias cannot be an empty string"), l.source.endsWith(":") && i(e + n.length - 1, "BAD_ALIAS", "Alias ending in : is ambiguous", true);
  const h = e + n.length, p = z0(r, h, t2.strict, i);
  return l.range = [e, h, p.offset], p.comment && (l.comment = p.comment), l;
}
function k5(t2, e, { offset: n, start: r, value: i, end: l }, h) {
  const p = Object.assign({ _directives: e }, t2), m = new Pr(void 0, p), y = { atKey: false, atRoot: true, directives: m.directives, options: m.options, schema: m.schema }, k = Fn(r, { indicator: "doc-start", next: i ?? (l == null ? void 0 : l[0]), offset: n, onError: h, parentIndent: 0, startOnNewline: true });
  k.found && (m.directives.docStart = true, i && (i.type === "block-map" || i.type === "block-seq") && !k.hasNewline && h(k.end, "MISSING_CHAR", "Block collection cannot start on same line with directives-end marker")), m.contents = i ? Jc(y, i, k, h) : Wo(y, k.end, r, null, k, h);
  const T = m.contents.range[2], N = z0(l, T, false, h);
  return N.comment && (m.comment = N.comment), m.range = [n, T, N.offset], m;
}
function c0(t2) {
  if (typeof t2 == "number")
    return [t2, t2 + 1];
  if (Array.isArray(t2))
    return t2.length === 2 ? t2 : [t2[0], t2[1]];
  const { offset: e, source: n } = t2;
  return [e, e + (typeof n == "string" ? n.length : 1)];
}
function dl(t2) {
  var e;
  let n = "", r = false, i = false;
  for (let l = 0; l < t2.length; ++l) {
    const h = t2[l];
    switch (h[0]) {
      case "#":
        n += (n === "" ? "" : i ? `

` : `
`) + (h.substring(1) || " "), r = true, i = false;
        break;
      case "%":
        ((e = t2[l + 1]) == null ? void 0 : e[0]) !== "#" && (l += 1), r = false;
        break;
      default:
        r || (i = true), r = false;
    }
  }
  return { comment: n, afterEmptyLine: i };
}
class S5 {
  constructor(e = {}) {
    this.doc = null, this.atDirectives = false, this.prelude = [], this.errors = [], this.warnings = [], this.onError = (n, r, i, l) => {
      const h = c0(n);
      l ? this.warnings.push(new n5(h, r, i)) : this.errors.push(new p0(h, r, i));
    }, this.directives = new lt({ version: e.version || "1.2" }), this.options = e;
  }
  decorate(e, n) {
    const { comment: r, afterEmptyLine: i } = dl(this.prelude);
    if (r) {
      const l = e.contents;
      if (n)
        e.comment = e.comment ? `${e.comment}
${r}` : r;
      else if (i || e.directives.docStart || !l)
        e.commentBefore = r;
      else if (We(l) && !l.flow && l.items.length > 0) {
        let h = l.items[0];
        Qe(h) && (h = h.key);
        const p = h.commentBefore;
        h.commentBefore = p ? `${r}
${p}` : r;
      } else {
        const h = l.commentBefore;
        l.commentBefore = h ? `${r}
${h}` : r;
      }
    }
    n ? (Array.prototype.push.apply(e.errors, this.errors), Array.prototype.push.apply(e.warnings, this.warnings)) : (e.errors = this.errors, e.warnings = this.warnings), this.prelude = [], this.errors = [], this.warnings = [];
  }
  streamInfo() {
    return { comment: dl(this.prelude).comment, directives: this.directives, errors: this.errors, warnings: this.warnings };
  }
  *compose(e, n = false, r = -1) {
    for (const i of e)
      yield* this.next(i);
    yield* this.end(n, r);
  }
  *next(e) {
    switch (e.type) {
      case "directive":
        this.directives.add(e.source, (n, r, i) => {
          const l = c0(e);
          l[0] += n, this.onError(l, "BAD_DIRECTIVE", r, i);
        }), this.prelude.push(e.source), this.atDirectives = true;
        break;
      case "document": {
        const n = k5(this.options, this.directives, e, this.onError);
        this.atDirectives && !n.directives.docStart && this.onError(e, "MISSING_CHAR", "Missing directives-end/doc-start indicator line"), this.decorate(n, false), this.doc && (yield this.doc), this.doc = n, this.atDirectives = false;
        break;
      }
      case "byte-order-mark":
      case "space":
        break;
      case "comment":
      case "newline":
        this.prelude.push(e.source);
        break;
      case "error": {
        const n = e.source ? `${e.message}: ${JSON.stringify(e.source)}` : e.message, r = new p0(c0(e), "UNEXPECTED_TOKEN", n);
        this.atDirectives || !this.doc ? this.errors.push(r) : this.doc.errors.push(r);
        break;
      }
      case "doc-end": {
        if (!this.doc) {
          const r = "Unexpected doc-end without preceding document";
          this.errors.push(new p0(c0(e), "UNEXPECTED_TOKEN", r));
          break;
        }
        this.doc.directives.docEnd = true;
        const n = z0(e.end, e.offset + e.source.length, this.doc.options.strict, this.onError);
        if (this.decorate(this.doc, true), n.comment) {
          const r = this.doc.comment;
          this.doc.comment = r ? `${r}
${n.comment}` : n.comment;
        }
        this.doc.range[2] = n.offset;
        break;
      }
      default:
        this.errors.push(new p0(c0(e), "UNEXPECTED_TOKEN", `Unsupported token ${e.type}`));
    }
  }
  *end(e = false, n = -1) {
    if (this.doc)
      this.decorate(this.doc, true), yield this.doc, this.doc = null;
    else if (e) {
      const r = Object.assign({ _directives: this.directives }, this.options), i = new Pr(void 0, r);
      this.atDirectives && this.onError(n, "MISSING_CHAR", "Missing directives-end indicator line"), i.range = [0, n, n], this.decorate(i, false), yield i;
    }
  }
}
const eh = "\uFEFF", th = "", nh = "", uo = "";
function A5(t2) {
  switch (t2) {
    case eh:
      return "byte-order-mark";
    case th:
      return "doc-mode";
    case nh:
      return "flow-error-end";
    case uo:
      return "scalar";
    case "---":
      return "doc-start";
    case "...":
      return "doc-end";
    case "":
    case `
`:
    case `\r
`:
      return "newline";
    case "-":
      return "seq-item-ind";
    case "?":
      return "explicit-key-ind";
    case ":":
      return "map-value-ind";
    case "{":
      return "flow-map-start";
    case "}":
      return "flow-map-end";
    case "[":
      return "flow-seq-start";
    case "]":
      return "flow-seq-end";
    case ",":
      return "comma";
  }
  switch (t2[0]) {
    case " ":
    case "	":
      return "space";
    case "#":
      return "comment";
    case "%":
      return "directive-line";
    case "*":
      return "alias";
    case "&":
      return "anchor";
    case "!":
      return "tag";
    case "'":
      return "single-quoted-scalar";
    case '"':
      return "double-quoted-scalar";
    case "|":
    case ">":
      return "block-scalar-header";
  }
  return null;
}
function It(t2) {
  switch (t2) {
    case void 0:
    case " ":
    case `
`:
    case "\r":
    case "	":
      return true;
    default:
      return false;
  }
}
const pl = new Set("0123456789ABCDEFabcdef"), T5 = new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"), ir = new Set(",[]{}"), M5 = new Set(` ,[]{}
\r	`), Ks = (t2) => !t2 || M5.has(t2);
class C5 {
  constructor() {
    this.atEnd = false, this.blockScalarIndent = -1, this.blockScalarKeep = false, this.buffer = "", this.flowKey = false, this.flowLevel = 0, this.indentNext = 0, this.indentValue = 0, this.lineEndPos = null, this.next = null, this.pos = 0;
  }
  *lex(e, n = false) {
    if (e) {
      if (typeof e != "string")
        throw TypeError("source is not a string");
      this.buffer = this.buffer ? this.buffer + e : e, this.lineEndPos = null;
    }
    this.atEnd = !n;
    let r = this.next ?? "stream";
    for (; r && (n || this.hasChars(1)); )
      r = yield* this.parseNext(r);
  }
  atLineEnd() {
    let e = this.pos, n = this.buffer[e];
    for (; n === " " || n === "	"; )
      n = this.buffer[++e];
    return !n || n === "#" || n === `
` ? true : n === "\r" ? this.buffer[e + 1] === `
` : false;
  }
  charAt(e) {
    return this.buffer[this.pos + e];
  }
  continueScalar(e) {
    let n = this.buffer[e];
    if (this.indentNext > 0) {
      let r = 0;
      for (; n === " "; )
        n = this.buffer[++r + e];
      if (n === "\r") {
        const i = this.buffer[r + e + 1];
        if (i === `
` || !i && !this.atEnd)
          return e + r + 1;
      }
      return n === `
` || r >= this.indentNext || !n && !this.atEnd ? e + r : -1;
    }
    if (n === "-" || n === ".") {
      const r = this.buffer.substr(e, 3);
      if ((r === "---" || r === "...") && It(this.buffer[e + 3]))
        return -1;
    }
    return e;
  }
  getLine() {
    let e = this.lineEndPos;
    return (typeof e != "number" || e !== -1 && e < this.pos) && (e = this.buffer.indexOf(`
`, this.pos), this.lineEndPos = e), e === -1 ? this.atEnd ? this.buffer.substring(this.pos) : null : (this.buffer[e - 1] === "\r" && (e -= 1), this.buffer.substring(this.pos, e));
  }
  hasChars(e) {
    return this.pos + e <= this.buffer.length;
  }
  setNext(e) {
    return this.buffer = this.buffer.substring(this.pos), this.pos = 0, this.lineEndPos = null, this.next = e, null;
  }
  peek(e) {
    return this.buffer.substr(this.pos, e);
  }
  *parseNext(e) {
    switch (e) {
      case "stream":
        return yield* this.parseStream();
      case "line-start":
        return yield* this.parseLineStart();
      case "block-start":
        return yield* this.parseBlockStart();
      case "doc":
        return yield* this.parseDocument();
      case "flow":
        return yield* this.parseFlowCollection();
      case "quoted-scalar":
        return yield* this.parseQuotedScalar();
      case "block-scalar":
        return yield* this.parseBlockScalar();
      case "plain-scalar":
        return yield* this.parsePlainScalar();
    }
  }
  *parseStream() {
    let e = this.getLine();
    if (e === null)
      return this.setNext("stream");
    if (e[0] === eh && (yield* this.pushCount(1), e = e.substring(1)), e[0] === "%") {
      let n = e.length, r = e.indexOf("#");
      for (; r !== -1; ) {
        const l = e[r - 1];
        if (l === " " || l === "	") {
          n = r - 1;
          break;
        } else
          r = e.indexOf("#", r + 1);
      }
      for (; ; ) {
        const l = e[n - 1];
        if (l === " " || l === "	")
          n -= 1;
        else
          break;
      }
      const i = (yield* this.pushCount(n)) + (yield* this.pushSpaces(true));
      return yield* this.pushCount(e.length - i), this.pushNewline(), "stream";
    }
    if (this.atLineEnd()) {
      const n = yield* this.pushSpaces(true);
      return yield* this.pushCount(e.length - n), yield* this.pushNewline(), "stream";
    }
    return yield th, yield* this.parseLineStart();
  }
  *parseLineStart() {
    const e = this.charAt(0);
    if (!e && !this.atEnd)
      return this.setNext("line-start");
    if (e === "-" || e === ".") {
      if (!this.atEnd && !this.hasChars(4))
        return this.setNext("line-start");
      const n = this.peek(3);
      if ((n === "---" || n === "...") && It(this.charAt(3)))
        return yield* this.pushCount(3), this.indentValue = 0, this.indentNext = 0, n === "---" ? "doc" : "stream";
    }
    return this.indentValue = yield* this.pushSpaces(false), this.indentNext > this.indentValue && !It(this.charAt(1)) && (this.indentNext = this.indentValue), yield* this.parseBlockStart();
  }
  *parseBlockStart() {
    const [e, n] = this.peek(2);
    if (!n && !this.atEnd)
      return this.setNext("block-start");
    if ((e === "-" || e === "?" || e === ":") && It(n)) {
      const r = (yield* this.pushCount(1)) + (yield* this.pushSpaces(true));
      return this.indentNext = this.indentValue + 1, this.indentValue += r, yield* this.parseBlockStart();
    }
    return "doc";
  }
  *parseDocument() {
    yield* this.pushSpaces(true);
    const e = this.getLine();
    if (e === null)
      return this.setNext("doc");
    let n = yield* this.pushIndicators();
    switch (e[n]) {
      case "#":
        yield* this.pushCount(e.length - n);
      case void 0:
        return yield* this.pushNewline(), yield* this.parseLineStart();
      case "{":
      case "[":
        return yield* this.pushCount(1), this.flowKey = false, this.flowLevel = 1, "flow";
      case "}":
      case "]":
        return yield* this.pushCount(1), "doc";
      case "*":
        return yield* this.pushUntil(Ks), "doc";
      case '"':
      case "'":
        return yield* this.parseQuotedScalar();
      case "|":
      case ">":
        return n += yield* this.parseBlockScalarHeader(), n += yield* this.pushSpaces(true), yield* this.pushCount(e.length - n), yield* this.pushNewline(), yield* this.parseBlockScalar();
      default:
        return yield* this.parsePlainScalar();
    }
  }
  *parseFlowCollection() {
    let e, n, r = -1;
    do
      e = yield* this.pushNewline(), e > 0 ? (n = yield* this.pushSpaces(false), this.indentValue = r = n) : n = 0, n += yield* this.pushSpaces(true);
    while (e + n > 0);
    const i = this.getLine();
    if (i === null)
      return this.setNext("flow");
    if ((r !== -1 && r < this.indentNext && i[0] !== "#" || r === 0 && (i.startsWith("---") || i.startsWith("...")) && It(i[3])) && !(r === this.indentNext - 1 && this.flowLevel === 1 && (i[0] === "]" || i[0] === "}")))
      return this.flowLevel = 0, yield nh, yield* this.parseLineStart();
    let l = 0;
    for (; i[l] === ","; )
      l += yield* this.pushCount(1), l += yield* this.pushSpaces(true), this.flowKey = false;
    switch (l += yield* this.pushIndicators(), i[l]) {
      case void 0:
        return "flow";
      case "#":
        return yield* this.pushCount(i.length - l), "flow";
      case "{":
      case "[":
        return yield* this.pushCount(1), this.flowKey = false, this.flowLevel += 1, "flow";
      case "}":
      case "]":
        return yield* this.pushCount(1), this.flowKey = true, this.flowLevel -= 1, this.flowLevel ? "flow" : "doc";
      case "*":
        return yield* this.pushUntil(Ks), "flow";
      case '"':
      case "'":
        return this.flowKey = true, yield* this.parseQuotedScalar();
      case ":": {
        const h = this.charAt(1);
        if (this.flowKey || It(h) || h === ",")
          return this.flowKey = false, yield* this.pushCount(1), yield* this.pushSpaces(true), "flow";
      }
      default:
        return this.flowKey = false, yield* this.parsePlainScalar();
    }
  }
  *parseQuotedScalar() {
    const e = this.charAt(0);
    let n = this.buffer.indexOf(e, this.pos + 1);
    if (e === "'")
      for (; n !== -1 && this.buffer[n + 1] === "'"; )
        n = this.buffer.indexOf("'", n + 2);
    else
      for (; n !== -1; ) {
        let l = 0;
        for (; this.buffer[n - 1 - l] === "\\"; )
          l += 1;
        if (l % 2 === 0)
          break;
        n = this.buffer.indexOf('"', n + 1);
      }
    const r = this.buffer.substring(0, n);
    let i = r.indexOf(`
`, this.pos);
    if (i !== -1) {
      for (; i !== -1; ) {
        const l = this.continueScalar(i + 1);
        if (l === -1)
          break;
        i = r.indexOf(`
`, l);
      }
      i !== -1 && (n = i - (r[i - 1] === "\r" ? 2 : 1));
    }
    if (n === -1) {
      if (!this.atEnd)
        return this.setNext("quoted-scalar");
      n = this.buffer.length;
    }
    return yield* this.pushToIndex(n + 1, false), this.flowLevel ? "flow" : "doc";
  }
  *parseBlockScalarHeader() {
    this.blockScalarIndent = -1, this.blockScalarKeep = false;
    let e = this.pos;
    for (; ; ) {
      const n = this.buffer[++e];
      if (n === "+")
        this.blockScalarKeep = true;
      else if (n > "0" && n <= "9")
        this.blockScalarIndent = Number(n) - 1;
      else if (n !== "-")
        break;
    }
    return yield* this.pushUntil((n) => It(n) || n === "#");
  }
  *parseBlockScalar() {
    let e = this.pos - 1, n = 0, r;
    e:
      for (let l = this.pos; r = this.buffer[l]; ++l)
        switch (r) {
          case " ":
            n += 1;
            break;
          case `
`:
            e = l, n = 0;
            break;
          case "\r": {
            const h = this.buffer[l + 1];
            if (!h && !this.atEnd)
              return this.setNext("block-scalar");
            if (h === `
`)
              break;
          }
          default:
            break e;
        }
    if (!r && !this.atEnd)
      return this.setNext("block-scalar");
    if (n >= this.indentNext) {
      this.blockScalarIndent === -1 ? this.indentNext = n : this.indentNext = this.blockScalarIndent + (this.indentNext === 0 ? 1 : this.indentNext);
      do {
        const l = this.continueScalar(e + 1);
        if (l === -1)
          break;
        e = this.buffer.indexOf(`
`, l);
      } while (e !== -1);
      if (e === -1) {
        if (!this.atEnd)
          return this.setNext("block-scalar");
        e = this.buffer.length;
      }
    }
    let i = e + 1;
    for (r = this.buffer[i]; r === " "; )
      r = this.buffer[++i];
    if (r === "	") {
      for (; r === "	" || r === " " || r === "\r" || r === `
`; )
        r = this.buffer[++i];
      e = i - 1;
    } else if (!this.blockScalarKeep)
      do {
        let l = e - 1, h = this.buffer[l];
        h === "\r" && (h = this.buffer[--l]);
        const p = l;
        for (; h === " "; )
          h = this.buffer[--l];
        if (h === `
` && l >= this.pos && l + 1 + n > p)
          e = l;
        else
          break;
      } while (true);
    return yield uo, yield* this.pushToIndex(e + 1, true), yield* this.parseLineStart();
  }
  *parsePlainScalar() {
    const e = this.flowLevel > 0;
    let n = this.pos - 1, r = this.pos - 1, i;
    for (; i = this.buffer[++r]; )
      if (i === ":") {
        const l = this.buffer[r + 1];
        if (It(l) || e && ir.has(l))
          break;
        n = r;
      } else if (It(i)) {
        let l = this.buffer[r + 1];
        if (i === "\r" && (l === `
` ? (r += 1, i = `
`, l = this.buffer[r + 1]) : n = r), l === "#" || e && ir.has(l))
          break;
        if (i === `
`) {
          const h = this.continueScalar(r + 1);
          if (h === -1)
            break;
          r = Math.max(r, h - 2);
        }
      } else {
        if (e && ir.has(i))
          break;
        n = r;
      }
    return !i && !this.atEnd ? this.setNext("plain-scalar") : (yield uo, yield* this.pushToIndex(n + 1, true), e ? "flow" : "doc");
  }
  *pushCount(e) {
    return e > 0 ? (yield this.buffer.substr(this.pos, e), this.pos += e, e) : 0;
  }
  *pushToIndex(e, n) {
    const r = this.buffer.slice(this.pos, e);
    return r ? (yield r, this.pos += r.length, r.length) : (n && (yield ""), 0);
  }
  *pushIndicators() {
    switch (this.charAt(0)) {
      case "!":
        return (yield* this.pushTag()) + (yield* this.pushSpaces(true)) + (yield* this.pushIndicators());
      case "&":
        return (yield* this.pushUntil(Ks)) + (yield* this.pushSpaces(true)) + (yield* this.pushIndicators());
      case "-":
      case "?":
      case ":": {
        const e = this.flowLevel > 0, n = this.charAt(1);
        if (It(n) || e && ir.has(n))
          return e ? this.flowKey && (this.flowKey = false) : this.indentNext = this.indentValue + 1, (yield* this.pushCount(1)) + (yield* this.pushSpaces(true)) + (yield* this.pushIndicators());
      }
    }
    return 0;
  }
  *pushTag() {
    if (this.charAt(1) === "<") {
      let e = this.pos + 2, n = this.buffer[e];
      for (; !It(n) && n !== ">"; )
        n = this.buffer[++e];
      return yield* this.pushToIndex(n === ">" ? e + 1 : e, false);
    } else {
      let e = this.pos + 1, n = this.buffer[e];
      for (; n; )
        if (T5.has(n))
          n = this.buffer[++e];
        else if (n === "%" && pl.has(this.buffer[e + 1]) && pl.has(this.buffer[e + 2]))
          n = this.buffer[e += 3];
        else
          break;
      return yield* this.pushToIndex(e, false);
    }
  }
  *pushNewline() {
    const e = this.buffer[this.pos];
    return e === `
` ? yield* this.pushCount(1) : e === "\r" && this.charAt(1) === `
` ? yield* this.pushCount(2) : 0;
  }
  *pushSpaces(e) {
    let n = this.pos - 1, r;
    do
      r = this.buffer[++n];
    while (r === " " || e && r === "	");
    const i = n - this.pos;
    return i > 0 && (yield this.buffer.substr(this.pos, i), this.pos = n), i;
  }
  *pushUntil(e) {
    let n = this.pos, r = this.buffer[n];
    for (; !e(r); )
      r = this.buffer[++n];
    return yield* this.pushToIndex(n, false);
  }
}
class E5 {
  constructor() {
    this.lineStarts = [], this.addNewLine = (e) => this.lineStarts.push(e), this.linePos = (e) => {
      let n = 0, r = this.lineStarts.length;
      for (; n < r; ) {
        const l = n + r >> 1;
        this.lineStarts[l] < e ? n = l + 1 : r = l;
      }
      if (this.lineStarts[n] === e)
        return { line: n + 1, col: 1 };
      if (n === 0)
        return { line: 0, col: e };
      const i = this.lineStarts[n - 1];
      return { line: n, col: e - i + 1 };
    };
  }
}
function nn(t2, e) {
  for (let n = 0; n < t2.length; ++n)
    if (t2[n].type === e)
      return true;
  return false;
}
function ml(t2) {
  for (let e = 0; e < t2.length; ++e)
    switch (t2[e].type) {
      case "space":
      case "comment":
      case "newline":
        break;
      default:
        return e;
    }
  return -1;
}
function rh(t2) {
  switch (t2 == null ? void 0 : t2.type) {
    case "alias":
    case "scalar":
    case "single-quoted-scalar":
    case "double-quoted-scalar":
    case "flow-collection":
      return true;
    default:
      return false;
  }
}
function ar(t2) {
  switch (t2.type) {
    case "document":
      return t2.start;
    case "block-map": {
      const e = t2.items[t2.items.length - 1];
      return e.sep ?? e.start;
    }
    case "block-seq":
      return t2.items[t2.items.length - 1].start;
    default:
      return [];
  }
}
function In(t2) {
  var e;
  if (t2.length === 0)
    return [];
  let n = t2.length;
  e:
    for (; --n >= 0; )
      switch (t2[n].type) {
        case "doc-start":
        case "explicit-key-ind":
        case "map-value-ind":
        case "seq-item-ind":
        case "newline":
          break e;
      }
  for (; ((e = t2[++n]) == null ? void 0 : e.type) === "space"; )
    ;
  return t2.splice(n, t2.length);
}
function fl(t2) {
  if (t2.start.type === "flow-seq-start")
    for (const e of t2.items)
      e.sep && !e.value && !nn(e.start, "explicit-key-ind") && !nn(e.sep, "map-value-ind") && (e.key && (e.value = e.key), delete e.key, rh(e.value) ? e.value.end ? Array.prototype.push.apply(e.value.end, e.sep) : e.value.end = e.sep : Array.prototype.push.apply(e.start, e.sep), delete e.sep);
}
class N5 {
  constructor(e) {
    this.atNewLine = true, this.atScalar = false, this.indent = 0, this.offset = 0, this.onKeyLine = false, this.stack = [], this.source = "", this.type = "", this.lexer = new C5(), this.onNewLine = e;
  }
  *parse(e, n = false) {
    this.onNewLine && this.offset === 0 && this.onNewLine(0);
    for (const r of this.lexer.lex(e, n))
      yield* this.next(r);
    n || (yield* this.end());
  }
  *next(e) {
    if (this.source = e, this.atScalar) {
      this.atScalar = false, yield* this.step(), this.offset += e.length;
      return;
    }
    const n = A5(e);
    if (n)
      if (n === "scalar")
        this.atNewLine = false, this.atScalar = true, this.type = "scalar";
      else {
        switch (this.type = n, yield* this.step(), n) {
          case "newline":
            this.atNewLine = true, this.indent = 0, this.onNewLine && this.onNewLine(this.offset + e.length);
            break;
          case "space":
            this.atNewLine && e[0] === " " && (this.indent += e.length);
            break;
          case "explicit-key-ind":
          case "map-value-ind":
          case "seq-item-ind":
            this.atNewLine && (this.indent += e.length);
            break;
          case "doc-mode":
          case "flow-error-end":
            return;
          default:
            this.atNewLine = false;
        }
        this.offset += e.length;
      }
    else {
      const r = `Not a YAML token: ${e}`;
      yield* this.pop({ type: "error", offset: this.offset, message: r, source: e }), this.offset += e.length;
    }
  }
  *end() {
    for (; this.stack.length > 0; )
      yield* this.pop();
  }
  get sourceToken() {
    return { type: this.type, offset: this.offset, indent: this.indent, source: this.source };
  }
  *step() {
    const e = this.peek(1);
    if (this.type === "doc-end" && (!e || e.type !== "doc-end")) {
      for (; this.stack.length > 0; )
        yield* this.pop();
      this.stack.push({ type: "doc-end", offset: this.offset, source: this.source });
      return;
    }
    if (!e)
      return yield* this.stream();
    switch (e.type) {
      case "document":
        return yield* this.document(e);
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return yield* this.scalar(e);
      case "block-scalar":
        return yield* this.blockScalar(e);
      case "block-map":
        return yield* this.blockMap(e);
      case "block-seq":
        return yield* this.blockSequence(e);
      case "flow-collection":
        return yield* this.flowCollection(e);
      case "doc-end":
        return yield* this.documentEnd(e);
    }
    yield* this.pop();
  }
  peek(e) {
    return this.stack[this.stack.length - e];
  }
  *pop(e) {
    const n = e ?? this.stack.pop();
    if (!n)
      yield { type: "error", offset: this.offset, source: "", message: "Tried to pop an empty stack" };
    else if (this.stack.length === 0)
      yield n;
    else {
      const r = this.peek(1);
      switch (n.type === "block-scalar" ? n.indent = "indent" in r ? r.indent : 0 : n.type === "flow-collection" && r.type === "document" && (n.indent = 0), n.type === "flow-collection" && fl(n), r.type) {
        case "document":
          r.value = n;
          break;
        case "block-scalar":
          r.props.push(n);
          break;
        case "block-map": {
          const i = r.items[r.items.length - 1];
          if (i.value) {
            r.items.push({ start: [], key: n, sep: [] }), this.onKeyLine = true;
            return;
          } else if (i.sep)
            i.value = n;
          else {
            Object.assign(i, { key: n, sep: [] }), this.onKeyLine = !i.explicitKey;
            return;
          }
          break;
        }
        case "block-seq": {
          const i = r.items[r.items.length - 1];
          i.value ? r.items.push({ start: [], value: n }) : i.value = n;
          break;
        }
        case "flow-collection": {
          const i = r.items[r.items.length - 1];
          !i || i.value ? r.items.push({ start: [], key: n, sep: [] }) : i.sep ? i.value = n : Object.assign(i, { key: n, sep: [] });
          return;
        }
        default:
          yield* this.pop(), yield* this.pop(n);
      }
      if ((r.type === "document" || r.type === "block-map" || r.type === "block-seq") && (n.type === "block-map" || n.type === "block-seq")) {
        const i = n.items[n.items.length - 1];
        i && !i.sep && !i.value && i.start.length > 0 && ml(i.start) === -1 && (n.indent === 0 || i.start.every((l) => l.type !== "comment" || l.indent < n.indent)) && (r.type === "document" ? r.end = i.start : r.items.push({ start: i.start }), n.items.splice(-1, 1));
      }
    }
  }
  *stream() {
    switch (this.type) {
      case "directive-line":
        yield { type: "directive", offset: this.offset, source: this.source };
        return;
      case "byte-order-mark":
      case "space":
      case "comment":
      case "newline":
        yield this.sourceToken;
        return;
      case "doc-mode":
      case "doc-start": {
        const e = { type: "document", offset: this.offset, start: [] };
        this.type === "doc-start" && e.start.push(this.sourceToken), this.stack.push(e);
        return;
      }
    }
    yield { type: "error", offset: this.offset, message: `Unexpected ${this.type} token in YAML stream`, source: this.source };
  }
  *document(e) {
    if (e.value)
      return yield* this.lineEnd(e);
    switch (this.type) {
      case "doc-start": {
        ml(e.start) !== -1 ? (yield* this.pop(), yield* this.step()) : e.start.push(this.sourceToken);
        return;
      }
      case "anchor":
      case "tag":
      case "space":
      case "comment":
      case "newline":
        e.start.push(this.sourceToken);
        return;
    }
    const n = this.startBlockValue(e);
    n ? this.stack.push(n) : yield { type: "error", offset: this.offset, message: `Unexpected ${this.type} token in YAML document`, source: this.source };
  }
  *scalar(e) {
    if (this.type === "map-value-ind") {
      const n = ar(this.peek(2)), r = In(n);
      let i;
      e.end ? (i = e.end, i.push(this.sourceToken), delete e.end) : i = [this.sourceToken];
      const l = { type: "block-map", offset: e.offset, indent: e.indent, items: [{ start: r, key: e, sep: i }] };
      this.onKeyLine = true, this.stack[this.stack.length - 1] = l;
    } else
      yield* this.lineEnd(e);
  }
  *blockScalar(e) {
    switch (this.type) {
      case "space":
      case "comment":
      case "newline":
        e.props.push(this.sourceToken);
        return;
      case "scalar":
        if (e.source = this.source, this.atNewLine = true, this.indent = 0, this.onNewLine) {
          let n = this.source.indexOf(`
`) + 1;
          for (; n !== 0; )
            this.onNewLine(this.offset + n), n = this.source.indexOf(`
`, n) + 1;
        }
        yield* this.pop();
        break;
      default:
        yield* this.pop(), yield* this.step();
    }
  }
  *blockMap(e) {
    var n;
    const r = e.items[e.items.length - 1];
    switch (this.type) {
      case "newline":
        if (this.onKeyLine = false, r.value) {
          const i = "end" in r.value ? r.value.end : void 0, l = Array.isArray(i) ? i[i.length - 1] : void 0;
          (l == null ? void 0 : l.type) === "comment" ? i == null ? void 0 : i.push(this.sourceToken) : e.items.push({ start: [this.sourceToken] });
        } else
          r.sep ? r.sep.push(this.sourceToken) : r.start.push(this.sourceToken);
        return;
      case "space":
      case "comment":
        if (r.value)
          e.items.push({ start: [this.sourceToken] });
        else if (r.sep)
          r.sep.push(this.sourceToken);
        else {
          if (this.atIndentedComment(r.start, e.indent)) {
            const i = e.items[e.items.length - 2], l = (n = i == null ? void 0 : i.value) == null ? void 0 : n.end;
            if (Array.isArray(l)) {
              Array.prototype.push.apply(l, r.start), l.push(this.sourceToken), e.items.pop();
              return;
            }
          }
          r.start.push(this.sourceToken);
        }
        return;
    }
    if (this.indent >= e.indent) {
      const i = !this.onKeyLine && this.indent === e.indent, l = i && (r.sep || r.explicitKey) && this.type !== "seq-item-ind";
      let h = [];
      if (l && r.sep && !r.value) {
        const p = [];
        for (let m = 0; m < r.sep.length; ++m) {
          const y = r.sep[m];
          switch (y.type) {
            case "newline":
              p.push(m);
              break;
            case "space":
              break;
            case "comment":
              y.indent > e.indent && (p.length = 0);
              break;
            default:
              p.length = 0;
          }
        }
        p.length >= 2 && (h = r.sep.splice(p[1]));
      }
      switch (this.type) {
        case "anchor":
        case "tag":
          l || r.value ? (h.push(this.sourceToken), e.items.push({ start: h }), this.onKeyLine = true) : r.sep ? r.sep.push(this.sourceToken) : r.start.push(this.sourceToken);
          return;
        case "explicit-key-ind":
          !r.sep && !r.explicitKey ? (r.start.push(this.sourceToken), r.explicitKey = true) : l || r.value ? (h.push(this.sourceToken), e.items.push({ start: h, explicitKey: true })) : this.stack.push({ type: "block-map", offset: this.offset, indent: this.indent, items: [{ start: [this.sourceToken], explicitKey: true }] }), this.onKeyLine = true;
          return;
        case "map-value-ind":
          if (r.explicitKey)
            if (r.sep)
              if (r.value)
                e.items.push({ start: [], key: null, sep: [this.sourceToken] });
              else if (nn(r.sep, "map-value-ind"))
                this.stack.push({ type: "block-map", offset: this.offset, indent: this.indent, items: [{ start: h, key: null, sep: [this.sourceToken] }] });
              else if (rh(r.key) && !nn(r.sep, "newline")) {
                const p = In(r.start), m = r.key, y = r.sep;
                y.push(this.sourceToken), delete r.key, delete r.sep, this.stack.push({ type: "block-map", offset: this.offset, indent: this.indent, items: [{ start: p, key: m, sep: y }] });
              } else
                h.length > 0 ? r.sep = r.sep.concat(h, this.sourceToken) : r.sep.push(this.sourceToken);
            else if (nn(r.start, "newline"))
              Object.assign(r, { key: null, sep: [this.sourceToken] });
            else {
              const p = In(r.start);
              this.stack.push({ type: "block-map", offset: this.offset, indent: this.indent, items: [{ start: p, key: null, sep: [this.sourceToken] }] });
            }
          else
            r.sep ? r.value || l ? e.items.push({ start: h, key: null, sep: [this.sourceToken] }) : nn(r.sep, "map-value-ind") ? this.stack.push({ type: "block-map", offset: this.offset, indent: this.indent, items: [{ start: [], key: null, sep: [this.sourceToken] }] }) : r.sep.push(this.sourceToken) : Object.assign(r, { key: null, sep: [this.sourceToken] });
          this.onKeyLine = true;
          return;
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar": {
          const p = this.flowScalar(this.type);
          l || r.value ? (e.items.push({ start: h, key: p, sep: [] }), this.onKeyLine = true) : r.sep ? this.stack.push(p) : (Object.assign(r, { key: p, sep: [] }), this.onKeyLine = true);
          return;
        }
        default: {
          const p = this.startBlockValue(e);
          if (p) {
            if (p.type === "block-seq") {
              if (!r.explicitKey && r.sep && !nn(r.sep, "newline")) {
                yield* this.pop({ type: "error", offset: this.offset, message: "Unexpected block-seq-ind on same line with key", source: this.source });
                return;
              }
            } else
              i && e.items.push({ start: h });
            this.stack.push(p);
            return;
          }
        }
      }
    }
    yield* this.pop(), yield* this.step();
  }
  *blockSequence(e) {
    var n;
    const r = e.items[e.items.length - 1];
    switch (this.type) {
      case "newline":
        if (r.value) {
          const i = "end" in r.value ? r.value.end : void 0, l = Array.isArray(i) ? i[i.length - 1] : void 0;
          (l == null ? void 0 : l.type) === "comment" ? i == null ? void 0 : i.push(this.sourceToken) : e.items.push({ start: [this.sourceToken] });
        } else
          r.start.push(this.sourceToken);
        return;
      case "space":
      case "comment":
        if (r.value)
          e.items.push({ start: [this.sourceToken] });
        else {
          if (this.atIndentedComment(r.start, e.indent)) {
            const i = e.items[e.items.length - 2], l = (n = i == null ? void 0 : i.value) == null ? void 0 : n.end;
            if (Array.isArray(l)) {
              Array.prototype.push.apply(l, r.start), l.push(this.sourceToken), e.items.pop();
              return;
            }
          }
          r.start.push(this.sourceToken);
        }
        return;
      case "anchor":
      case "tag":
        if (r.value || this.indent <= e.indent)
          break;
        r.start.push(this.sourceToken);
        return;
      case "seq-item-ind":
        if (this.indent !== e.indent)
          break;
        r.value || nn(r.start, "seq-item-ind") ? e.items.push({ start: [this.sourceToken] }) : r.start.push(this.sourceToken);
        return;
    }
    if (this.indent > e.indent) {
      const i = this.startBlockValue(e);
      if (i) {
        this.stack.push(i);
        return;
      }
    }
    yield* this.pop(), yield* this.step();
  }
  *flowCollection(e) {
    const n = e.items[e.items.length - 1];
    if (this.type === "flow-error-end") {
      let r;
      do
        yield* this.pop(), r = this.peek(1);
      while (r && r.type === "flow-collection");
    } else if (e.end.length === 0) {
      switch (this.type) {
        case "comma":
        case "explicit-key-ind":
          !n || n.sep ? e.items.push({ start: [this.sourceToken] }) : n.start.push(this.sourceToken);
          return;
        case "map-value-ind":
          !n || n.value ? e.items.push({ start: [], key: null, sep: [this.sourceToken] }) : n.sep ? n.sep.push(this.sourceToken) : Object.assign(n, { key: null, sep: [this.sourceToken] });
          return;
        case "space":
        case "comment":
        case "newline":
        case "anchor":
        case "tag":
          !n || n.value ? e.items.push({ start: [this.sourceToken] }) : n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
          return;
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar": {
          const i = this.flowScalar(this.type);
          !n || n.value ? e.items.push({ start: [], key: i, sep: [] }) : n.sep ? this.stack.push(i) : Object.assign(n, { key: i, sep: [] });
          return;
        }
        case "flow-map-end":
        case "flow-seq-end":
          e.end.push(this.sourceToken);
          return;
      }
      const r = this.startBlockValue(e);
      r ? this.stack.push(r) : (yield* this.pop(), yield* this.step());
    } else {
      const r = this.peek(2);
      if (r.type === "block-map" && (this.type === "map-value-ind" && r.indent === e.indent || this.type === "newline" && !r.items[r.items.length - 1].sep))
        yield* this.pop(), yield* this.step();
      else if (this.type === "map-value-ind" && r.type !== "flow-collection") {
        const i = ar(r), l = In(i);
        fl(e);
        const h = e.end.splice(1, e.end.length);
        h.push(this.sourceToken);
        const p = { type: "block-map", offset: e.offset, indent: e.indent, items: [{ start: l, key: e, sep: h }] };
        this.onKeyLine = true, this.stack[this.stack.length - 1] = p;
      } else
        yield* this.lineEnd(e);
    }
  }
  flowScalar(e) {
    if (this.onNewLine) {
      let n = this.source.indexOf(`
`) + 1;
      for (; n !== 0; )
        this.onNewLine(this.offset + n), n = this.source.indexOf(`
`, n) + 1;
    }
    return { type: e, offset: this.offset, indent: this.indent, source: this.source };
  }
  startBlockValue(e) {
    switch (this.type) {
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return this.flowScalar(this.type);
      case "block-scalar-header":
        return { type: "block-scalar", offset: this.offset, indent: this.indent, props: [this.sourceToken], source: "" };
      case "flow-map-start":
      case "flow-seq-start":
        return { type: "flow-collection", offset: this.offset, indent: this.indent, start: this.sourceToken, items: [], end: [] };
      case "seq-item-ind":
        return { type: "block-seq", offset: this.offset, indent: this.indent, items: [{ start: [this.sourceToken] }] };
      case "explicit-key-ind": {
        this.onKeyLine = true;
        const n = ar(e), r = In(n);
        return r.push(this.sourceToken), { type: "block-map", offset: this.offset, indent: this.indent, items: [{ start: r, explicitKey: true }] };
      }
      case "map-value-ind": {
        this.onKeyLine = true;
        const n = ar(e), r = In(n);
        return { type: "block-map", offset: this.offset, indent: this.indent, items: [{ start: r, key: null, sep: [this.sourceToken] }] };
      }
    }
    return null;
  }
  atIndentedComment(e, n) {
    return this.type !== "comment" || this.indent <= n ? false : e.every((r) => r.type === "newline" || r.type === "space");
  }
  *documentEnd(e) {
    this.type !== "doc-mode" && (e.end ? e.end.push(this.sourceToken) : e.end = [this.sourceToken], this.type === "newline" && (yield* this.pop()));
  }
  *lineEnd(e) {
    switch (this.type) {
      case "comma":
      case "doc-start":
      case "doc-end":
      case "flow-seq-end":
      case "flow-map-end":
      case "map-value-ind":
        yield* this.pop(), yield* this.step();
        break;
      case "newline":
        this.onKeyLine = false;
      case "space":
      case "comment":
      default:
        e.end ? e.end.push(this.sourceToken) : e.end = [this.sourceToken], this.type === "newline" && (yield* this.pop());
    }
  }
}
function I5(t2) {
  const e = t2.prettyErrors !== false;
  return { lineCounter: t2.lineCounter || e && new E5() || null, prettyErrors: e };
}
function z5(t2, e = {}) {
  const { lineCounter: n, prettyErrors: r } = I5(e), i = new N5(n == null ? void 0 : n.addNewLine), l = new S5(e);
  let h = null;
  for (const p of l.compose(i.parse(t2), true, t2.length))
    if (!h)
      h = p;
    else if (h.options.logLevel !== "silent") {
      h.errors.push(new p0(p.range.slice(0, 2), "MULTIPLE_DOCS", "Source contains multiple documents; please use YAML.parseAllDocuments()"));
      break;
    }
  return r && n && (h.errors.forEach(hl(t2, n)), h.warnings.forEach(hl(t2, n))), h;
}
function O5(t2, e, n) {
  let r;
  const i = z5(t2, n);
  if (!i)
    return null;
  if (i.warnings.forEach((l) => Ic(i.options.logLevel, l)), i.errors.length > 0) {
    if (i.options.logLevel !== "silent")
      throw i.errors[0];
    i.errors = [];
  }
  return i.toJS(Object.assign({ reviver: r }, n));
}
var zn = {}, po = { exports: {} }, _5 = po.exports, gl;
function B5() {
  return gl || (gl = 1, function(t2, e) {
    (function(n, r) {
      t2.exports = r();
    })(typeof self < "u" ? self : _5, function() {
      return function() {
        var n = {};
        (function() {
          n.d = function(o, s) {
            for (var a in s)
              n.o(s, a) && !n.o(o, a) && Object.defineProperty(o, a, { enumerable: true, get: s[a] });
          };
        })(), function() {
          n.o = function(o, s) {
            return Object.prototype.hasOwnProperty.call(o, s);
          };
        }();
        var r = {};
        n.d(r, { default: function() {
          return Nu;
        } });
        class i {
          constructor(s, a) {
            this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
            let c = "KaTeX parse error: " + s, u, f;
            const b = a && a.loc;
            if (b && b.start <= b.end) {
              const A = b.lexer.input;
              u = b.start, f = b.end, u === A.length ? c += " at end of input: " : c += " at position " + (u + 1) + ": ";
              const O = A.slice(u, f).replace(/[^]/g, "$&\u0332");
              let q;
              u > 15 ? q = "\u2026" + A.slice(u - 15, u) : q = A.slice(0, u);
              let L;
              f + 15 < A.length ? L = A.slice(f, f + 15) + "\u2026" : L = A.slice(f), c += q + O + L;
            }
            const w = new Error(c);
            return w.name = "ParseError", w.__proto__ = i.prototype, w.position = u, u != null && f != null && (w.length = f - u), w.rawMessage = s, w;
          }
        }
        i.prototype.__proto__ = Error.prototype;
        var l = i;
        const h = function(o, s) {
          return o.indexOf(s) !== -1;
        }, p = function(o, s) {
          return o === void 0 ? s : o;
        }, m = /([A-Z])/g, y = function(o) {
          return o.replace(m, "-$1").toLowerCase();
        }, k = { "&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#x27;" }, T = /[&><"']/g;
        function N(o) {
          return String(o).replace(T, (s) => k[s]);
        }
        const z = function(o) {
          return o.type === "ordgroup" || o.type === "color" ? o.body.length === 1 ? z(o.body[0]) : o : o.type === "font" ? z(o.body) : o;
        }, S = function(o) {
          const s = z(o);
          return s.type === "mathord" || s.type === "textord" || s.type === "atom";
        }, M = function(o) {
          if (!o)
            throw new Error("Expected non-null, but got " + String(o));
          return o;
        };
        var C = { contains: h, deflt: p, escape: N, hyphenate: y, getBaseElem: z, isCharacterBox: S, protocolFromUrl: function(o) {
          const s = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(o);
          return s ? s[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(s[1]) ? null : s[1].toLowerCase() : "_relative";
        } };
        const B = { displayMode: { type: "boolean", description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.", cli: "-d, --display-mode" }, output: { type: { enum: ["htmlAndMathml", "html", "mathml"] }, description: "Determines the markup language of the output.", cli: "-F, --format <type>" }, leqno: { type: "boolean", description: "Render display math in leqno style (left-justified tags)." }, fleqn: { type: "boolean", description: "Render display math flush left." }, throwOnError: { type: "boolean", default: true, cli: "-t, --no-throw-on-error", cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error." }, errorColor: { type: "string", default: "#cc0000", cli: "-c, --error-color <color>", cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.", cliProcessor: (o) => "#" + o }, macros: { type: "object", cli: "-m, --macro <def>", cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).", cliDefault: [], cliProcessor: (o, s) => (s.push(o), s) }, minRuleThickness: { type: "number", description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.", processor: (o) => Math.max(0, o), cli: "--min-rule-thickness <size>", cliProcessor: parseFloat }, colorIsTextColor: { type: "boolean", description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.", cli: "-b, --color-is-text-color" }, strict: { type: [{ enum: ["warn", "ignore", "error"] }, "boolean", "function"], description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.", cli: "-S, --strict", cliDefault: false }, trust: { type: ["boolean", "function"], description: "Trust the input, enabling all HTML features such as \\url.", cli: "-T, --trust" }, maxSize: { type: "number", default: 1 / 0, description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large", processor: (o) => Math.max(0, o), cli: "-s, --max-size <n>", cliProcessor: parseInt }, maxExpand: { type: "number", default: 1e3, description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.", processor: (o) => Math.max(0, o), cli: "-e, --max-expand <n>", cliProcessor: (o) => o === "Infinity" ? 1 / 0 : parseInt(o) }, globalGroup: { type: "boolean", cli: false } };
        function H(o) {
          if (o.default)
            return o.default;
          const s = o.type, a = Array.isArray(s) ? s[0] : s;
          if (typeof a != "string")
            return a.enum[0];
          switch (a) {
            case "boolean":
              return false;
            case "string":
              return "";
            case "number":
              return 0;
            case "object":
              return {};
          }
        }
        class F {
          constructor(s) {
            this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, s = s || {};
            for (const a in B)
              if (B.hasOwnProperty(a)) {
                const c = B[a];
                this[a] = s[a] !== void 0 ? c.processor ? c.processor(s[a]) : s[a] : H(c);
              }
          }
          reportNonstrict(s, a, c) {
            let u = this.strict;
            if (typeof u == "function" && (u = u(s, a, c)), !(!u || u === "ignore")) {
              if (u === true || u === "error")
                throw new l("LaTeX-incompatible input and strict mode is set to 'error': " + (a + " [" + s + "]"), c);
              u === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (a + " [" + s + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + u + "': " + a + " [" + s + "]"));
            }
          }
          useStrictBehavior(s, a, c) {
            let u = this.strict;
            if (typeof u == "function")
              try {
                u = u(s, a, c);
              } catch {
                u = "error";
              }
            return !u || u === "ignore" ? false : u === true || u === "error" ? true : u === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (a + " [" + s + "]")), false) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + u + "': " + a + " [" + s + "]")), false);
          }
          isTrusted(s) {
            if (s.url && !s.protocol) {
              const a = C.protocolFromUrl(s.url);
              if (a == null)
                return false;
              s.protocol = a;
            }
            return !!(typeof this.trust == "function" ? this.trust(s) : this.trust);
          }
        }
        class V {
          constructor(s, a, c) {
            this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = s, this.size = a, this.cramped = c;
          }
          sup() {
            return Ae[$[this.id]];
          }
          sub() {
            return Ae[se[this.id]];
          }
          fracNum() {
            return Ae[Y[this.id]];
          }
          fracDen() {
            return Ae[ie[this.id]];
          }
          cramp() {
            return Ae[me[this.id]];
          }
          text() {
            return Ae[we[this.id]];
          }
          isTight() {
            return this.size >= 2;
          }
        }
        const U = 0, X = 1, te = 2, j = 3, le = 4, ge = 5, pe = 6, ae = 7, Ae = [new V(U, 0, false), new V(X, 0, true), new V(te, 1, false), new V(j, 1, true), new V(le, 2, false), new V(ge, 2, true), new V(pe, 3, false), new V(ae, 3, true)], $ = [le, ge, le, ge, pe, ae, pe, ae], se = [ge, ge, ge, ge, ae, ae, ae, ae], Y = [te, j, le, ge, pe, ae, pe, ae], ie = [j, j, ge, ge, ae, ae, ae, ae], me = [X, X, j, j, ge, ge, ae, ae], we = [U, X, te, j, te, j, te, j];
        var Z = { DISPLAY: Ae[U], TEXT: Ae[te], SCRIPT: Ae[le], SCRIPTSCRIPT: Ae[pe] };
        const Ee = [{ name: "latin", blocks: [[256, 591], [768, 879]] }, { name: "cyrillic", blocks: [[1024, 1279]] }, { name: "armenian", blocks: [[1328, 1423]] }, { name: "brahmic", blocks: [[2304, 4255]] }, { name: "georgian", blocks: [[4256, 4351]] }, { name: "cjk", blocks: [[12288, 12543], [19968, 40879], [65280, 65376]] }, { name: "hangul", blocks: [[44032, 55215]] }];
        function R(o) {
          for (let s = 0; s < Ee.length; s++) {
            const a = Ee[s];
            for (let c = 0; c < a.blocks.length; c++) {
              const u = a.blocks[c];
              if (o >= u[0] && o <= u[1])
                return a.name;
            }
          }
          return null;
        }
        const oe = [];
        Ee.forEach((o) => o.blocks.forEach((s) => oe.push(...s)));
        function ve(o) {
          for (let s = 0; s < oe.length; s += 2)
            if (o >= oe[s] && o <= oe[s + 1])
              return true;
          return false;
        }
        const Le = 80, pt = function(o, s) {
          return "M95," + (622 + o + s) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + o / 2.075 + " -" + o + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + o) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + o) + " " + s + "h400000v" + (40 + o) + "h-400000z";
        }, mt = function(o, s) {
          return "M263," + (601 + o + s) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + o / 2.084 + " -" + o + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + o) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + o) + " " + s + "h400000v" + (40 + o) + "h-400000z";
        }, Et = function(o, s) {
          return "M983 " + (10 + o + s) + `
l` + o / 3.13 + " -" + o + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + o) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + o) + " " + s + "h400000v" + (40 + o) + "h-400000z";
        }, Wn = function(o, s) {
          return "M424," + (2398 + o + s) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + o / 4.223 + " -" + o + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + o) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + o) + " " + s + `
h400000v` + (40 + o) + "h-400000z";
        }, ih = function(o, s) {
          return "M473," + (2713 + o + s) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + o / 5.298 + " -" + o + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + o) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + o) + " " + s + "h400000v" + (40 + o) + "H1017.7z";
        }, ah = function(o) {
          const s = o / 2;
          return "M400000 " + o + " H0 L" + s + " 0 l65 45 L145 " + (o - 80) + " H400000z";
        }, lh = function(o, s, a) {
          const c = a - 54 - s - o;
          return "M702 " + (o + s) + "H400000" + (40 + o) + `
H742v` + c + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + s + "H400000v" + (40 + o) + "H742z";
        }, ch = function(o, s, a) {
          s = 1e3 * s;
          let c = "";
          switch (o) {
            case "sqrtMain":
              c = pt(s, Le);
              break;
            case "sqrtSize1":
              c = mt(s, Le);
              break;
            case "sqrtSize2":
              c = Et(s, Le);
              break;
            case "sqrtSize3":
              c = Wn(s, Le);
              break;
            case "sqrtSize4":
              c = ih(s, Le);
              break;
            case "sqrtTall":
              c = lh(s, Le, a);
          }
          return c;
        }, hh = function(o, s) {
          switch (o) {
            case "\u239C":
              return "M291 0 H417 V" + s + " H291z M291 0 H417 V" + s + " H291z";
            case "\u2223":
              return "M145 0 H188 V" + s + " H145z M145 0 H188 V" + s + " H145z";
            case "\u2225":
              return "M145 0 H188 V" + s + " H145z M145 0 H188 V" + s + " H145z" + ("M367 0 H410 V" + s + " H367z M367 0 H410 V" + s + " H367z");
            case "\u239F":
              return "M457 0 H583 V" + s + " H457z M457 0 H583 V" + s + " H457z";
            case "\u23A2":
              return "M319 0 H403 V" + s + " H319z M319 0 H403 V" + s + " H319z";
            case "\u23A5":
              return "M263 0 H347 V" + s + " H263z M263 0 H347 V" + s + " H263z";
            case "\u23AA":
              return "M384 0 H504 V" + s + " H384z M384 0 H504 V" + s + " H384z";
            case "\u23D0":
              return "M312 0 H355 V" + s + " H312z M312 0 H355 V" + s + " H312z";
            case "\u2016":
              return "M257 0 H300 V" + s + " H257z M257 0 H300 V" + s + " H257z" + ("M478 0 H521 V" + s + " H478z M478 0 H521 V" + s + " H478z");
            default:
              return "";
          }
        }, Qo = { doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`, doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`, leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`, leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`, leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`, leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`, leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`, leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`, leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`, leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`, leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`, lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`, leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`, leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`, leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`, longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`, midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`, midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`, oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`, oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`, oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`, oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`, rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`, rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`, rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`, rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`, rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`, rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`, rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`, rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`, rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`, righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`, rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`, rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`, twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`, twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`, tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`, tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`, tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`, tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`, vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`, widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`, widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`, widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`, rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`, baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`, rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`, shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`, shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z` }, uh = function(o, s) {
          switch (o) {
            case "lbrack":
              return "M403 1759 V84 H666 V0 H319 V1759 v" + s + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + s + " v1759 h84z";
            case "rbrack":
              return "M347 1759 V0 H0 V84 H263 V1759 v" + s + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + s + " v1759 h84z";
            case "vert":
              return "M145 15 v585 v" + s + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -s + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + s + " v585 h43z";
            case "doublevert":
              return "M145 15 v585 v" + s + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -s + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + s + ` v585 h43z
M367 15 v585 v` + s + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -s + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + s + " v585 h43z";
            case "lfloor":
              return "M319 602 V0 H403 V602 v" + s + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + s + " v1715 H319z";
            case "rfloor":
              return "M319 602 V0 H403 V602 v" + s + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + s + " v1715 H319z";
            case "lceil":
              return "M403 1759 V84 H666 V0 H319 V1759 v" + s + ` v602 h84z
M403 1759 V0 H319 V1759 v` + s + " v602 h84z";
            case "rceil":
              return "M347 1759 V0 H0 V84 H263 V1759 v" + s + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + s + " v602 h84z";
            case "lparen":
              return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (s + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (s + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
            case "rparen":
              return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (s + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (s + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
            default:
              throw new Error("Unknown stretchy delimiter.");
          }
        };
        class Yn {
          constructor(s) {
            this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = s, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
          }
          hasClass(s) {
            return C.contains(this.classes, s);
          }
          toNode() {
            const s = document.createDocumentFragment();
            for (let a = 0; a < this.children.length; a++)
              s.appendChild(this.children[a].toNode());
            return s;
          }
          toMarkup() {
            let s = "";
            for (let a = 0; a < this.children.length; a++)
              s += this.children[a].toMarkup();
            return s;
          }
          toText() {
            const s = (a) => a.toText();
            return this.children.map(s).join("");
          }
        }
        var Ot = { "AMS-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.68889, 0, 0, 0.72222], 66: [0, 0.68889, 0, 0, 0.66667], 67: [0, 0.68889, 0, 0, 0.72222], 68: [0, 0.68889, 0, 0, 0.72222], 69: [0, 0.68889, 0, 0, 0.66667], 70: [0, 0.68889, 0, 0, 0.61111], 71: [0, 0.68889, 0, 0, 0.77778], 72: [0, 0.68889, 0, 0, 0.77778], 73: [0, 0.68889, 0, 0, 0.38889], 74: [0.16667, 0.68889, 0, 0, 0.5], 75: [0, 0.68889, 0, 0, 0.77778], 76: [0, 0.68889, 0, 0, 0.66667], 77: [0, 0.68889, 0, 0, 0.94445], 78: [0, 0.68889, 0, 0, 0.72222], 79: [0.16667, 0.68889, 0, 0, 0.77778], 80: [0, 0.68889, 0, 0, 0.61111], 81: [0.16667, 0.68889, 0, 0, 0.77778], 82: [0, 0.68889, 0, 0, 0.72222], 83: [0, 0.68889, 0, 0, 0.55556], 84: [0, 0.68889, 0, 0, 0.66667], 85: [0, 0.68889, 0, 0, 0.72222], 86: [0, 0.68889, 0, 0, 0.72222], 87: [0, 0.68889, 0, 0, 1], 88: [0, 0.68889, 0, 0, 0.72222], 89: [0, 0.68889, 0, 0, 0.72222], 90: [0, 0.68889, 0, 0, 0.66667], 107: [0, 0.68889, 0, 0, 0.55556], 160: [0, 0, 0, 0, 0.25], 165: [0, 0.675, 0.025, 0, 0.75], 174: [0.15559, 0.69224, 0, 0, 0.94666], 240: [0, 0.68889, 0, 0, 0.55556], 295: [0, 0.68889, 0, 0, 0.54028], 710: [0, 0.825, 0, 0, 2.33334], 732: [0, 0.9, 0, 0, 2.33334], 770: [0, 0.825, 0, 0, 2.33334], 771: [0, 0.9, 0, 0, 2.33334], 989: [0.08167, 0.58167, 0, 0, 0.77778], 1008: [0, 0.43056, 0.04028, 0, 0.66667], 8245: [0, 0.54986, 0, 0, 0.275], 8463: [0, 0.68889, 0, 0, 0.54028], 8487: [0, 0.68889, 0, 0, 0.72222], 8498: [0, 0.68889, 0, 0, 0.55556], 8502: [0, 0.68889, 0, 0, 0.66667], 8503: [0, 0.68889, 0, 0, 0.44445], 8504: [0, 0.68889, 0, 0, 0.66667], 8513: [0, 0.68889, 0, 0, 0.63889], 8592: [-0.03598, 0.46402, 0, 0, 0.5], 8594: [-0.03598, 0.46402, 0, 0, 0.5], 8602: [-0.13313, 0.36687, 0, 0, 1], 8603: [-0.13313, 0.36687, 0, 0, 1], 8606: [0.01354, 0.52239, 0, 0, 1], 8608: [0.01354, 0.52239, 0, 0, 1], 8610: [0.01354, 0.52239, 0, 0, 1.11111], 8611: [0.01354, 0.52239, 0, 0, 1.11111], 8619: [0, 0.54986, 0, 0, 1], 8620: [0, 0.54986, 0, 0, 1], 8621: [-0.13313, 0.37788, 0, 0, 1.38889], 8622: [-0.13313, 0.36687, 0, 0, 1], 8624: [0, 0.69224, 0, 0, 0.5], 8625: [0, 0.69224, 0, 0, 0.5], 8630: [0, 0.43056, 0, 0, 1], 8631: [0, 0.43056, 0, 0, 1], 8634: [0.08198, 0.58198, 0, 0, 0.77778], 8635: [0.08198, 0.58198, 0, 0, 0.77778], 8638: [0.19444, 0.69224, 0, 0, 0.41667], 8639: [0.19444, 0.69224, 0, 0, 0.41667], 8642: [0.19444, 0.69224, 0, 0, 0.41667], 8643: [0.19444, 0.69224, 0, 0, 0.41667], 8644: [0.1808, 0.675, 0, 0, 1], 8646: [0.1808, 0.675, 0, 0, 1], 8647: [0.1808, 0.675, 0, 0, 1], 8648: [0.19444, 0.69224, 0, 0, 0.83334], 8649: [0.1808, 0.675, 0, 0, 1], 8650: [0.19444, 0.69224, 0, 0, 0.83334], 8651: [0.01354, 0.52239, 0, 0, 1], 8652: [0.01354, 0.52239, 0, 0, 1], 8653: [-0.13313, 0.36687, 0, 0, 1], 8654: [-0.13313, 0.36687, 0, 0, 1], 8655: [-0.13313, 0.36687, 0, 0, 1], 8666: [0.13667, 0.63667, 0, 0, 1], 8667: [0.13667, 0.63667, 0, 0, 1], 8669: [-0.13313, 0.37788, 0, 0, 1], 8672: [-0.064, 0.437, 0, 0, 1.334], 8674: [-0.064, 0.437, 0, 0, 1.334], 8705: [0, 0.825, 0, 0, 0.5], 8708: [0, 0.68889, 0, 0, 0.55556], 8709: [0.08167, 0.58167, 0, 0, 0.77778], 8717: [0, 0.43056, 0, 0, 0.42917], 8722: [-0.03598, 0.46402, 0, 0, 0.5], 8724: [0.08198, 0.69224, 0, 0, 0.77778], 8726: [0.08167, 0.58167, 0, 0, 0.77778], 8733: [0, 0.69224, 0, 0, 0.77778], 8736: [0, 0.69224, 0, 0, 0.72222], 8737: [0, 0.69224, 0, 0, 0.72222], 8738: [0.03517, 0.52239, 0, 0, 0.72222], 8739: [0.08167, 0.58167, 0, 0, 0.22222], 8740: [0.25142, 0.74111, 0, 0, 0.27778], 8741: [0.08167, 0.58167, 0, 0, 0.38889], 8742: [0.25142, 0.74111, 0, 0, 0.5], 8756: [0, 0.69224, 0, 0, 0.66667], 8757: [0, 0.69224, 0, 0, 0.66667], 8764: [-0.13313, 0.36687, 0, 0, 0.77778], 8765: [-0.13313, 0.37788, 0, 0, 0.77778], 8769: [-0.13313, 0.36687, 0, 0, 0.77778], 8770: [-0.03625, 0.46375, 0, 0, 0.77778], 8774: [0.30274, 0.79383, 0, 0, 0.77778], 8776: [-0.01688, 0.48312, 0, 0, 0.77778], 8778: [0.08167, 0.58167, 0, 0, 0.77778], 8782: [0.06062, 0.54986, 0, 0, 0.77778], 8783: [0.06062, 0.54986, 0, 0, 0.77778], 8785: [0.08198, 0.58198, 0, 0, 0.77778], 8786: [0.08198, 0.58198, 0, 0, 0.77778], 8787: [0.08198, 0.58198, 0, 0, 0.77778], 8790: [0, 0.69224, 0, 0, 0.77778], 8791: [0.22958, 0.72958, 0, 0, 0.77778], 8796: [0.08198, 0.91667, 0, 0, 0.77778], 8806: [0.25583, 0.75583, 0, 0, 0.77778], 8807: [0.25583, 0.75583, 0, 0, 0.77778], 8808: [0.25142, 0.75726, 0, 0, 0.77778], 8809: [0.25142, 0.75726, 0, 0, 0.77778], 8812: [0.25583, 0.75583, 0, 0, 0.5], 8814: [0.20576, 0.70576, 0, 0, 0.77778], 8815: [0.20576, 0.70576, 0, 0, 0.77778], 8816: [0.30274, 0.79383, 0, 0, 0.77778], 8817: [0.30274, 0.79383, 0, 0, 0.77778], 8818: [0.22958, 0.72958, 0, 0, 0.77778], 8819: [0.22958, 0.72958, 0, 0, 0.77778], 8822: [0.1808, 0.675, 0, 0, 0.77778], 8823: [0.1808, 0.675, 0, 0, 0.77778], 8828: [0.13667, 0.63667, 0, 0, 0.77778], 8829: [0.13667, 0.63667, 0, 0, 0.77778], 8830: [0.22958, 0.72958, 0, 0, 0.77778], 8831: [0.22958, 0.72958, 0, 0, 0.77778], 8832: [0.20576, 0.70576, 0, 0, 0.77778], 8833: [0.20576, 0.70576, 0, 0, 0.77778], 8840: [0.30274, 0.79383, 0, 0, 0.77778], 8841: [0.30274, 0.79383, 0, 0, 0.77778], 8842: [0.13597, 0.63597, 0, 0, 0.77778], 8843: [0.13597, 0.63597, 0, 0, 0.77778], 8847: [0.03517, 0.54986, 0, 0, 0.77778], 8848: [0.03517, 0.54986, 0, 0, 0.77778], 8858: [0.08198, 0.58198, 0, 0, 0.77778], 8859: [0.08198, 0.58198, 0, 0, 0.77778], 8861: [0.08198, 0.58198, 0, 0, 0.77778], 8862: [0, 0.675, 0, 0, 0.77778], 8863: [0, 0.675, 0, 0, 0.77778], 8864: [0, 0.675, 0, 0, 0.77778], 8865: [0, 0.675, 0, 0, 0.77778], 8872: [0, 0.69224, 0, 0, 0.61111], 8873: [0, 0.69224, 0, 0, 0.72222], 8874: [0, 0.69224, 0, 0, 0.88889], 8876: [0, 0.68889, 0, 0, 0.61111], 8877: [0, 0.68889, 0, 0, 0.61111], 8878: [0, 0.68889, 0, 0, 0.72222], 8879: [0, 0.68889, 0, 0, 0.72222], 8882: [0.03517, 0.54986, 0, 0, 0.77778], 8883: [0.03517, 0.54986, 0, 0, 0.77778], 8884: [0.13667, 0.63667, 0, 0, 0.77778], 8885: [0.13667, 0.63667, 0, 0, 0.77778], 8888: [0, 0.54986, 0, 0, 1.11111], 8890: [0.19444, 0.43056, 0, 0, 0.55556], 8891: [0.19444, 0.69224, 0, 0, 0.61111], 8892: [0.19444, 0.69224, 0, 0, 0.61111], 8901: [0, 0.54986, 0, 0, 0.27778], 8903: [0.08167, 0.58167, 0, 0, 0.77778], 8905: [0.08167, 0.58167, 0, 0, 0.77778], 8906: [0.08167, 0.58167, 0, 0, 0.77778], 8907: [0, 0.69224, 0, 0, 0.77778], 8908: [0, 0.69224, 0, 0, 0.77778], 8909: [-0.03598, 0.46402, 0, 0, 0.77778], 8910: [0, 0.54986, 0, 0, 0.76042], 8911: [0, 0.54986, 0, 0, 0.76042], 8912: [0.03517, 0.54986, 0, 0, 0.77778], 8913: [0.03517, 0.54986, 0, 0, 0.77778], 8914: [0, 0.54986, 0, 0, 0.66667], 8915: [0, 0.54986, 0, 0, 0.66667], 8916: [0, 0.69224, 0, 0, 0.66667], 8918: [0.0391, 0.5391, 0, 0, 0.77778], 8919: [0.0391, 0.5391, 0, 0, 0.77778], 8920: [0.03517, 0.54986, 0, 0, 1.33334], 8921: [0.03517, 0.54986, 0, 0, 1.33334], 8922: [0.38569, 0.88569, 0, 0, 0.77778], 8923: [0.38569, 0.88569, 0, 0, 0.77778], 8926: [0.13667, 0.63667, 0, 0, 0.77778], 8927: [0.13667, 0.63667, 0, 0, 0.77778], 8928: [0.30274, 0.79383, 0, 0, 0.77778], 8929: [0.30274, 0.79383, 0, 0, 0.77778], 8934: [0.23222, 0.74111, 0, 0, 0.77778], 8935: [0.23222, 0.74111, 0, 0, 0.77778], 8936: [0.23222, 0.74111, 0, 0, 0.77778], 8937: [0.23222, 0.74111, 0, 0, 0.77778], 8938: [0.20576, 0.70576, 0, 0, 0.77778], 8939: [0.20576, 0.70576, 0, 0, 0.77778], 8940: [0.30274, 0.79383, 0, 0, 0.77778], 8941: [0.30274, 0.79383, 0, 0, 0.77778], 8994: [0.19444, 0.69224, 0, 0, 0.77778], 8995: [0.19444, 0.69224, 0, 0, 0.77778], 9416: [0.15559, 0.69224, 0, 0, 0.90222], 9484: [0, 0.69224, 0, 0, 0.5], 9488: [0, 0.69224, 0, 0, 0.5], 9492: [0, 0.37788, 0, 0, 0.5], 9496: [0, 0.37788, 0, 0, 0.5], 9585: [0.19444, 0.68889, 0, 0, 0.88889], 9586: [0.19444, 0.74111, 0, 0, 0.88889], 9632: [0, 0.675, 0, 0, 0.77778], 9633: [0, 0.675, 0, 0, 0.77778], 9650: [0, 0.54986, 0, 0, 0.72222], 9651: [0, 0.54986, 0, 0, 0.72222], 9654: [0.03517, 0.54986, 0, 0, 0.77778], 9660: [0, 0.54986, 0, 0, 0.72222], 9661: [0, 0.54986, 0, 0, 0.72222], 9664: [0.03517, 0.54986, 0, 0, 0.77778], 9674: [0.11111, 0.69224, 0, 0, 0.66667], 9733: [0.19444, 0.69224, 0, 0, 0.94445], 10003: [0, 0.69224, 0, 0, 0.83334], 10016: [0, 0.69224, 0, 0, 0.83334], 10731: [0.11111, 0.69224, 0, 0, 0.66667], 10846: [0.19444, 0.75583, 0, 0, 0.61111], 10877: [0.13667, 0.63667, 0, 0, 0.77778], 10878: [0.13667, 0.63667, 0, 0, 0.77778], 10885: [0.25583, 0.75583, 0, 0, 0.77778], 10886: [0.25583, 0.75583, 0, 0, 0.77778], 10887: [0.13597, 0.63597, 0, 0, 0.77778], 10888: [0.13597, 0.63597, 0, 0, 0.77778], 10889: [0.26167, 0.75726, 0, 0, 0.77778], 10890: [0.26167, 0.75726, 0, 0, 0.77778], 10891: [0.48256, 0.98256, 0, 0, 0.77778], 10892: [0.48256, 0.98256, 0, 0, 0.77778], 10901: [0.13667, 0.63667, 0, 0, 0.77778], 10902: [0.13667, 0.63667, 0, 0, 0.77778], 10933: [0.25142, 0.75726, 0, 0, 0.77778], 10934: [0.25142, 0.75726, 0, 0, 0.77778], 10935: [0.26167, 0.75726, 0, 0, 0.77778], 10936: [0.26167, 0.75726, 0, 0, 0.77778], 10937: [0.26167, 0.75726, 0, 0, 0.77778], 10938: [0.26167, 0.75726, 0, 0, 0.77778], 10949: [0.25583, 0.75583, 0, 0, 0.77778], 10950: [0.25583, 0.75583, 0, 0, 0.77778], 10955: [0.28481, 0.79383, 0, 0, 0.77778], 10956: [0.28481, 0.79383, 0, 0, 0.77778], 57350: [0.08167, 0.58167, 0, 0, 0.22222], 57351: [0.08167, 0.58167, 0, 0, 0.38889], 57352: [0.08167, 0.58167, 0, 0, 0.77778], 57353: [0, 0.43056, 0.04028, 0, 0.66667], 57356: [0.25142, 0.75726, 0, 0, 0.77778], 57357: [0.25142, 0.75726, 0, 0, 0.77778], 57358: [0.41951, 0.91951, 0, 0, 0.77778], 57359: [0.30274, 0.79383, 0, 0, 0.77778], 57360: [0.30274, 0.79383, 0, 0, 0.77778], 57361: [0.41951, 0.91951, 0, 0, 0.77778], 57366: [0.25142, 0.75726, 0, 0, 0.77778], 57367: [0.25142, 0.75726, 0, 0, 0.77778], 57368: [0.25142, 0.75726, 0, 0, 0.77778], 57369: [0.25142, 0.75726, 0, 0, 0.77778], 57370: [0.13597, 0.63597, 0, 0, 0.77778], 57371: [0.13597, 0.63597, 0, 0, 0.77778] }, "Caligraphic-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.68333, 0, 0.19445, 0.79847], 66: [0, 0.68333, 0.03041, 0.13889, 0.65681], 67: [0, 0.68333, 0.05834, 0.13889, 0.52653], 68: [0, 0.68333, 0.02778, 0.08334, 0.77139], 69: [0, 0.68333, 0.08944, 0.11111, 0.52778], 70: [0, 0.68333, 0.09931, 0.11111, 0.71875], 71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487], 72: [0, 0.68333, 965e-5, 0.11111, 0.84452], 73: [0, 0.68333, 0.07382, 0, 0.54452], 74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778], 75: [0, 0.68333, 0.01445, 0.05556, 0.76195], 76: [0, 0.68333, 0, 0.13889, 0.68972], 77: [0, 0.68333, 0, 0.13889, 1.2009], 78: [0, 0.68333, 0.14736, 0.08334, 0.82049], 79: [0, 0.68333, 0.02778, 0.11111, 0.79611], 80: [0, 0.68333, 0.08222, 0.08334, 0.69556], 81: [0.09722, 0.68333, 0, 0.11111, 0.81667], 82: [0, 0.68333, 0, 0.08334, 0.8475], 83: [0, 0.68333, 0.075, 0.13889, 0.60556], 84: [0, 0.68333, 0.25417, 0, 0.54464], 85: [0, 0.68333, 0.09931, 0.08334, 0.62583], 86: [0, 0.68333, 0.08222, 0, 0.61278], 87: [0, 0.68333, 0.08222, 0.08334, 0.98778], 88: [0, 0.68333, 0.14643, 0.13889, 0.7133], 89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834], 90: [0, 0.68333, 0.07944, 0.13889, 0.72473], 160: [0, 0, 0, 0, 0.25] }, "Fraktur-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69141, 0, 0, 0.29574], 34: [0, 0.69141, 0, 0, 0.21471], 38: [0, 0.69141, 0, 0, 0.73786], 39: [0, 0.69141, 0, 0, 0.21201], 40: [0.24982, 0.74947, 0, 0, 0.38865], 41: [0.24982, 0.74947, 0, 0, 0.38865], 42: [0, 0.62119, 0, 0, 0.27764], 43: [0.08319, 0.58283, 0, 0, 0.75623], 44: [0, 0.10803, 0, 0, 0.27764], 45: [0.08319, 0.58283, 0, 0, 0.75623], 46: [0, 0.10803, 0, 0, 0.27764], 47: [0.24982, 0.74947, 0, 0, 0.50181], 48: [0, 0.47534, 0, 0, 0.50181], 49: [0, 0.47534, 0, 0, 0.50181], 50: [0, 0.47534, 0, 0, 0.50181], 51: [0.18906, 0.47534, 0, 0, 0.50181], 52: [0.18906, 0.47534, 0, 0, 0.50181], 53: [0.18906, 0.47534, 0, 0, 0.50181], 54: [0, 0.69141, 0, 0, 0.50181], 55: [0.18906, 0.47534, 0, 0, 0.50181], 56: [0, 0.69141, 0, 0, 0.50181], 57: [0.18906, 0.47534, 0, 0, 0.50181], 58: [0, 0.47534, 0, 0, 0.21606], 59: [0.12604, 0.47534, 0, 0, 0.21606], 61: [-0.13099, 0.36866, 0, 0, 0.75623], 63: [0, 0.69141, 0, 0, 0.36245], 65: [0, 0.69141, 0, 0, 0.7176], 66: [0, 0.69141, 0, 0, 0.88397], 67: [0, 0.69141, 0, 0, 0.61254], 68: [0, 0.69141, 0, 0, 0.83158], 69: [0, 0.69141, 0, 0, 0.66278], 70: [0.12604, 0.69141, 0, 0, 0.61119], 71: [0, 0.69141, 0, 0, 0.78539], 72: [0.06302, 0.69141, 0, 0, 0.7203], 73: [0, 0.69141, 0, 0, 0.55448], 74: [0.12604, 0.69141, 0, 0, 0.55231], 75: [0, 0.69141, 0, 0, 0.66845], 76: [0, 0.69141, 0, 0, 0.66602], 77: [0, 0.69141, 0, 0, 1.04953], 78: [0, 0.69141, 0, 0, 0.83212], 79: [0, 0.69141, 0, 0, 0.82699], 80: [0.18906, 0.69141, 0, 0, 0.82753], 81: [0.03781, 0.69141, 0, 0, 0.82699], 82: [0, 0.69141, 0, 0, 0.82807], 83: [0, 0.69141, 0, 0, 0.82861], 84: [0, 0.69141, 0, 0, 0.66899], 85: [0, 0.69141, 0, 0, 0.64576], 86: [0, 0.69141, 0, 0, 0.83131], 87: [0, 0.69141, 0, 0, 1.04602], 88: [0, 0.69141, 0, 0, 0.71922], 89: [0.18906, 0.69141, 0, 0, 0.83293], 90: [0.12604, 0.69141, 0, 0, 0.60201], 91: [0.24982, 0.74947, 0, 0, 0.27764], 93: [0.24982, 0.74947, 0, 0, 0.27764], 94: [0, 0.69141, 0, 0, 0.49965], 97: [0, 0.47534, 0, 0, 0.50046], 98: [0, 0.69141, 0, 0, 0.51315], 99: [0, 0.47534, 0, 0, 0.38946], 100: [0, 0.62119, 0, 0, 0.49857], 101: [0, 0.47534, 0, 0, 0.40053], 102: [0.18906, 0.69141, 0, 0, 0.32626], 103: [0.18906, 0.47534, 0, 0, 0.5037], 104: [0.18906, 0.69141, 0, 0, 0.52126], 105: [0, 0.69141, 0, 0, 0.27899], 106: [0, 0.69141, 0, 0, 0.28088], 107: [0, 0.69141, 0, 0, 0.38946], 108: [0, 0.69141, 0, 0, 0.27953], 109: [0, 0.47534, 0, 0, 0.76676], 110: [0, 0.47534, 0, 0, 0.52666], 111: [0, 0.47534, 0, 0, 0.48885], 112: [0.18906, 0.52396, 0, 0, 0.50046], 113: [0.18906, 0.47534, 0, 0, 0.48912], 114: [0, 0.47534, 0, 0, 0.38919], 115: [0, 0.47534, 0, 0, 0.44266], 116: [0, 0.62119, 0, 0, 0.33301], 117: [0, 0.47534, 0, 0, 0.5172], 118: [0, 0.52396, 0, 0, 0.5118], 119: [0, 0.52396, 0, 0, 0.77351], 120: [0.18906, 0.47534, 0, 0, 0.38865], 121: [0.18906, 0.47534, 0, 0, 0.49884], 122: [0.18906, 0.47534, 0, 0, 0.39054], 160: [0, 0, 0, 0, 0.25], 8216: [0, 0.69141, 0, 0, 0.21471], 8217: [0, 0.69141, 0, 0, 0.21471], 58112: [0, 0.62119, 0, 0, 0.49749], 58113: [0, 0.62119, 0, 0, 0.4983], 58114: [0.18906, 0.69141, 0, 0, 0.33328], 58115: [0.18906, 0.69141, 0, 0, 0.32923], 58116: [0.18906, 0.47534, 0, 0, 0.50343], 58117: [0, 0.69141, 0, 0, 0.33301], 58118: [0, 0.62119, 0, 0, 0.33409], 58119: [0, 0.47534, 0, 0, 0.50073] }, "Main-Bold": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.35], 34: [0, 0.69444, 0, 0, 0.60278], 35: [0.19444, 0.69444, 0, 0, 0.95833], 36: [0.05556, 0.75, 0, 0, 0.575], 37: [0.05556, 0.75, 0, 0, 0.95833], 38: [0, 0.69444, 0, 0, 0.89444], 39: [0, 0.69444, 0, 0, 0.31944], 40: [0.25, 0.75, 0, 0, 0.44722], 41: [0.25, 0.75, 0, 0, 0.44722], 42: [0, 0.75, 0, 0, 0.575], 43: [0.13333, 0.63333, 0, 0, 0.89444], 44: [0.19444, 0.15556, 0, 0, 0.31944], 45: [0, 0.44444, 0, 0, 0.38333], 46: [0, 0.15556, 0, 0, 0.31944], 47: [0.25, 0.75, 0, 0, 0.575], 48: [0, 0.64444, 0, 0, 0.575], 49: [0, 0.64444, 0, 0, 0.575], 50: [0, 0.64444, 0, 0, 0.575], 51: [0, 0.64444, 0, 0, 0.575], 52: [0, 0.64444, 0, 0, 0.575], 53: [0, 0.64444, 0, 0, 0.575], 54: [0, 0.64444, 0, 0, 0.575], 55: [0, 0.64444, 0, 0, 0.575], 56: [0, 0.64444, 0, 0, 0.575], 57: [0, 0.64444, 0, 0, 0.575], 58: [0, 0.44444, 0, 0, 0.31944], 59: [0.19444, 0.44444, 0, 0, 0.31944], 60: [0.08556, 0.58556, 0, 0, 0.89444], 61: [-0.10889, 0.39111, 0, 0, 0.89444], 62: [0.08556, 0.58556, 0, 0, 0.89444], 63: [0, 0.69444, 0, 0, 0.54305], 64: [0, 0.69444, 0, 0, 0.89444], 65: [0, 0.68611, 0, 0, 0.86944], 66: [0, 0.68611, 0, 0, 0.81805], 67: [0, 0.68611, 0, 0, 0.83055], 68: [0, 0.68611, 0, 0, 0.88194], 69: [0, 0.68611, 0, 0, 0.75555], 70: [0, 0.68611, 0, 0, 0.72361], 71: [0, 0.68611, 0, 0, 0.90416], 72: [0, 0.68611, 0, 0, 0.9], 73: [0, 0.68611, 0, 0, 0.43611], 74: [0, 0.68611, 0, 0, 0.59444], 75: [0, 0.68611, 0, 0, 0.90138], 76: [0, 0.68611, 0, 0, 0.69166], 77: [0, 0.68611, 0, 0, 1.09166], 78: [0, 0.68611, 0, 0, 0.9], 79: [0, 0.68611, 0, 0, 0.86388], 80: [0, 0.68611, 0, 0, 0.78611], 81: [0.19444, 0.68611, 0, 0, 0.86388], 82: [0, 0.68611, 0, 0, 0.8625], 83: [0, 0.68611, 0, 0, 0.63889], 84: [0, 0.68611, 0, 0, 0.8], 85: [0, 0.68611, 0, 0, 0.88472], 86: [0, 0.68611, 0.01597, 0, 0.86944], 87: [0, 0.68611, 0.01597, 0, 1.18888], 88: [0, 0.68611, 0, 0, 0.86944], 89: [0, 0.68611, 0.02875, 0, 0.86944], 90: [0, 0.68611, 0, 0, 0.70277], 91: [0.25, 0.75, 0, 0, 0.31944], 92: [0.25, 0.75, 0, 0, 0.575], 93: [0.25, 0.75, 0, 0, 0.31944], 94: [0, 0.69444, 0, 0, 0.575], 95: [0.31, 0.13444, 0.03194, 0, 0.575], 97: [0, 0.44444, 0, 0, 0.55902], 98: [0, 0.69444, 0, 0, 0.63889], 99: [0, 0.44444, 0, 0, 0.51111], 100: [0, 0.69444, 0, 0, 0.63889], 101: [0, 0.44444, 0, 0, 0.52708], 102: [0, 0.69444, 0.10903, 0, 0.35139], 103: [0.19444, 0.44444, 0.01597, 0, 0.575], 104: [0, 0.69444, 0, 0, 0.63889], 105: [0, 0.69444, 0, 0, 0.31944], 106: [0.19444, 0.69444, 0, 0, 0.35139], 107: [0, 0.69444, 0, 0, 0.60694], 108: [0, 0.69444, 0, 0, 0.31944], 109: [0, 0.44444, 0, 0, 0.95833], 110: [0, 0.44444, 0, 0, 0.63889], 111: [0, 0.44444, 0, 0, 0.575], 112: [0.19444, 0.44444, 0, 0, 0.63889], 113: [0.19444, 0.44444, 0, 0, 0.60694], 114: [0, 0.44444, 0, 0, 0.47361], 115: [0, 0.44444, 0, 0, 0.45361], 116: [0, 0.63492, 0, 0, 0.44722], 117: [0, 0.44444, 0, 0, 0.63889], 118: [0, 0.44444, 0.01597, 0, 0.60694], 119: [0, 0.44444, 0.01597, 0, 0.83055], 120: [0, 0.44444, 0, 0, 0.60694], 121: [0.19444, 0.44444, 0.01597, 0, 0.60694], 122: [0, 0.44444, 0, 0, 0.51111], 123: [0.25, 0.75, 0, 0, 0.575], 124: [0.25, 0.75, 0, 0, 0.31944], 125: [0.25, 0.75, 0, 0, 0.575], 126: [0.35, 0.34444, 0, 0, 0.575], 160: [0, 0, 0, 0, 0.25], 163: [0, 0.69444, 0, 0, 0.86853], 168: [0, 0.69444, 0, 0, 0.575], 172: [0, 0.44444, 0, 0, 0.76666], 176: [0, 0.69444, 0, 0, 0.86944], 177: [0.13333, 0.63333, 0, 0, 0.89444], 184: [0.17014, 0, 0, 0, 0.51111], 198: [0, 0.68611, 0, 0, 1.04166], 215: [0.13333, 0.63333, 0, 0, 0.89444], 216: [0.04861, 0.73472, 0, 0, 0.89444], 223: [0, 0.69444, 0, 0, 0.59722], 230: [0, 0.44444, 0, 0, 0.83055], 247: [0.13333, 0.63333, 0, 0, 0.89444], 248: [0.09722, 0.54167, 0, 0, 0.575], 305: [0, 0.44444, 0, 0, 0.31944], 338: [0, 0.68611, 0, 0, 1.16944], 339: [0, 0.44444, 0, 0, 0.89444], 567: [0.19444, 0.44444, 0, 0, 0.35139], 710: [0, 0.69444, 0, 0, 0.575], 711: [0, 0.63194, 0, 0, 0.575], 713: [0, 0.59611, 0, 0, 0.575], 714: [0, 0.69444, 0, 0, 0.575], 715: [0, 0.69444, 0, 0, 0.575], 728: [0, 0.69444, 0, 0, 0.575], 729: [0, 0.69444, 0, 0, 0.31944], 730: [0, 0.69444, 0, 0, 0.86944], 732: [0, 0.69444, 0, 0, 0.575], 733: [0, 0.69444, 0, 0, 0.575], 915: [0, 0.68611, 0, 0, 0.69166], 916: [0, 0.68611, 0, 0, 0.95833], 920: [0, 0.68611, 0, 0, 0.89444], 923: [0, 0.68611, 0, 0, 0.80555], 926: [0, 0.68611, 0, 0, 0.76666], 928: [0, 0.68611, 0, 0, 0.9], 931: [0, 0.68611, 0, 0, 0.83055], 933: [0, 0.68611, 0, 0, 0.89444], 934: [0, 0.68611, 0, 0, 0.83055], 936: [0, 0.68611, 0, 0, 0.89444], 937: [0, 0.68611, 0, 0, 0.83055], 8211: [0, 0.44444, 0.03194, 0, 0.575], 8212: [0, 0.44444, 0.03194, 0, 1.14999], 8216: [0, 0.69444, 0, 0, 0.31944], 8217: [0, 0.69444, 0, 0, 0.31944], 8220: [0, 0.69444, 0, 0, 0.60278], 8221: [0, 0.69444, 0, 0, 0.60278], 8224: [0.19444, 0.69444, 0, 0, 0.51111], 8225: [0.19444, 0.69444, 0, 0, 0.51111], 8242: [0, 0.55556, 0, 0, 0.34444], 8407: [0, 0.72444, 0.15486, 0, 0.575], 8463: [0, 0.69444, 0, 0, 0.66759], 8465: [0, 0.69444, 0, 0, 0.83055], 8467: [0, 0.69444, 0, 0, 0.47361], 8472: [0.19444, 0.44444, 0, 0, 0.74027], 8476: [0, 0.69444, 0, 0, 0.83055], 8501: [0, 0.69444, 0, 0, 0.70277], 8592: [-0.10889, 0.39111, 0, 0, 1.14999], 8593: [0.19444, 0.69444, 0, 0, 0.575], 8594: [-0.10889, 0.39111, 0, 0, 1.14999], 8595: [0.19444, 0.69444, 0, 0, 0.575], 8596: [-0.10889, 0.39111, 0, 0, 1.14999], 8597: [0.25, 0.75, 0, 0, 0.575], 8598: [0.19444, 0.69444, 0, 0, 1.14999], 8599: [0.19444, 0.69444, 0, 0, 1.14999], 8600: [0.19444, 0.69444, 0, 0, 1.14999], 8601: [0.19444, 0.69444, 0, 0, 1.14999], 8636: [-0.10889, 0.39111, 0, 0, 1.14999], 8637: [-0.10889, 0.39111, 0, 0, 1.14999], 8640: [-0.10889, 0.39111, 0, 0, 1.14999], 8641: [-0.10889, 0.39111, 0, 0, 1.14999], 8656: [-0.10889, 0.39111, 0, 0, 1.14999], 8657: [0.19444, 0.69444, 0, 0, 0.70277], 8658: [-0.10889, 0.39111, 0, 0, 1.14999], 8659: [0.19444, 0.69444, 0, 0, 0.70277], 8660: [-0.10889, 0.39111, 0, 0, 1.14999], 8661: [0.25, 0.75, 0, 0, 0.70277], 8704: [0, 0.69444, 0, 0, 0.63889], 8706: [0, 0.69444, 0.06389, 0, 0.62847], 8707: [0, 0.69444, 0, 0, 0.63889], 8709: [0.05556, 0.75, 0, 0, 0.575], 8711: [0, 0.68611, 0, 0, 0.95833], 8712: [0.08556, 0.58556, 0, 0, 0.76666], 8715: [0.08556, 0.58556, 0, 0, 0.76666], 8722: [0.13333, 0.63333, 0, 0, 0.89444], 8723: [0.13333, 0.63333, 0, 0, 0.89444], 8725: [0.25, 0.75, 0, 0, 0.575], 8726: [0.25, 0.75, 0, 0, 0.575], 8727: [-0.02778, 0.47222, 0, 0, 0.575], 8728: [-0.02639, 0.47361, 0, 0, 0.575], 8729: [-0.02639, 0.47361, 0, 0, 0.575], 8730: [0.18, 0.82, 0, 0, 0.95833], 8733: [0, 0.44444, 0, 0, 0.89444], 8734: [0, 0.44444, 0, 0, 1.14999], 8736: [0, 0.69224, 0, 0, 0.72222], 8739: [0.25, 0.75, 0, 0, 0.31944], 8741: [0.25, 0.75, 0, 0, 0.575], 8743: [0, 0.55556, 0, 0, 0.76666], 8744: [0, 0.55556, 0, 0, 0.76666], 8745: [0, 0.55556, 0, 0, 0.76666], 8746: [0, 0.55556, 0, 0, 0.76666], 8747: [0.19444, 0.69444, 0.12778, 0, 0.56875], 8764: [-0.10889, 0.39111, 0, 0, 0.89444], 8768: [0.19444, 0.69444, 0, 0, 0.31944], 8771: [222e-5, 0.50222, 0, 0, 0.89444], 8773: [0.027, 0.638, 0, 0, 0.894], 8776: [0.02444, 0.52444, 0, 0, 0.89444], 8781: [222e-5, 0.50222, 0, 0, 0.89444], 8801: [222e-5, 0.50222, 0, 0, 0.89444], 8804: [0.19667, 0.69667, 0, 0, 0.89444], 8805: [0.19667, 0.69667, 0, 0, 0.89444], 8810: [0.08556, 0.58556, 0, 0, 1.14999], 8811: [0.08556, 0.58556, 0, 0, 1.14999], 8826: [0.08556, 0.58556, 0, 0, 0.89444], 8827: [0.08556, 0.58556, 0, 0, 0.89444], 8834: [0.08556, 0.58556, 0, 0, 0.89444], 8835: [0.08556, 0.58556, 0, 0, 0.89444], 8838: [0.19667, 0.69667, 0, 0, 0.89444], 8839: [0.19667, 0.69667, 0, 0, 0.89444], 8846: [0, 0.55556, 0, 0, 0.76666], 8849: [0.19667, 0.69667, 0, 0, 0.89444], 8850: [0.19667, 0.69667, 0, 0, 0.89444], 8851: [0, 0.55556, 0, 0, 0.76666], 8852: [0, 0.55556, 0, 0, 0.76666], 8853: [0.13333, 0.63333, 0, 0, 0.89444], 8854: [0.13333, 0.63333, 0, 0, 0.89444], 8855: [0.13333, 0.63333, 0, 0, 0.89444], 8856: [0.13333, 0.63333, 0, 0, 0.89444], 8857: [0.13333, 0.63333, 0, 0, 0.89444], 8866: [0, 0.69444, 0, 0, 0.70277], 8867: [0, 0.69444, 0, 0, 0.70277], 8868: [0, 0.69444, 0, 0, 0.89444], 8869: [0, 0.69444, 0, 0, 0.89444], 8900: [-0.02639, 0.47361, 0, 0, 0.575], 8901: [-0.02639, 0.47361, 0, 0, 0.31944], 8902: [-0.02778, 0.47222, 0, 0, 0.575], 8968: [0.25, 0.75, 0, 0, 0.51111], 8969: [0.25, 0.75, 0, 0, 0.51111], 8970: [0.25, 0.75, 0, 0, 0.51111], 8971: [0.25, 0.75, 0, 0, 0.51111], 8994: [-0.13889, 0.36111, 0, 0, 1.14999], 8995: [-0.13889, 0.36111, 0, 0, 1.14999], 9651: [0.19444, 0.69444, 0, 0, 1.02222], 9657: [-0.02778, 0.47222, 0, 0, 0.575], 9661: [0.19444, 0.69444, 0, 0, 1.02222], 9667: [-0.02778, 0.47222, 0, 0, 0.575], 9711: [0.19444, 0.69444, 0, 0, 1.14999], 9824: [0.12963, 0.69444, 0, 0, 0.89444], 9825: [0.12963, 0.69444, 0, 0, 0.89444], 9826: [0.12963, 0.69444, 0, 0, 0.89444], 9827: [0.12963, 0.69444, 0, 0, 0.89444], 9837: [0, 0.75, 0, 0, 0.44722], 9838: [0.19444, 0.69444, 0, 0, 0.44722], 9839: [0.19444, 0.69444, 0, 0, 0.44722], 10216: [0.25, 0.75, 0, 0, 0.44722], 10217: [0.25, 0.75, 0, 0, 0.44722], 10815: [0, 0.68611, 0, 0, 0.9], 10927: [0.19667, 0.69667, 0, 0, 0.89444], 10928: [0.19667, 0.69667, 0, 0, 0.89444], 57376: [0.19444, 0.69444, 0, 0, 0] }, "Main-BoldItalic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.11417, 0, 0.38611], 34: [0, 0.69444, 0.07939, 0, 0.62055], 35: [0.19444, 0.69444, 0.06833, 0, 0.94444], 37: [0.05556, 0.75, 0.12861, 0, 0.94444], 38: [0, 0.69444, 0.08528, 0, 0.88555], 39: [0, 0.69444, 0.12945, 0, 0.35555], 40: [0.25, 0.75, 0.15806, 0, 0.47333], 41: [0.25, 0.75, 0.03306, 0, 0.47333], 42: [0, 0.75, 0.14333, 0, 0.59111], 43: [0.10333, 0.60333, 0.03306, 0, 0.88555], 44: [0.19444, 0.14722, 0, 0, 0.35555], 45: [0, 0.44444, 0.02611, 0, 0.41444], 46: [0, 0.14722, 0, 0, 0.35555], 47: [0.25, 0.75, 0.15806, 0, 0.59111], 48: [0, 0.64444, 0.13167, 0, 0.59111], 49: [0, 0.64444, 0.13167, 0, 0.59111], 50: [0, 0.64444, 0.13167, 0, 0.59111], 51: [0, 0.64444, 0.13167, 0, 0.59111], 52: [0.19444, 0.64444, 0.13167, 0, 0.59111], 53: [0, 0.64444, 0.13167, 0, 0.59111], 54: [0, 0.64444, 0.13167, 0, 0.59111], 55: [0.19444, 0.64444, 0.13167, 0, 0.59111], 56: [0, 0.64444, 0.13167, 0, 0.59111], 57: [0, 0.64444, 0.13167, 0, 0.59111], 58: [0, 0.44444, 0.06695, 0, 0.35555], 59: [0.19444, 0.44444, 0.06695, 0, 0.35555], 61: [-0.10889, 0.39111, 0.06833, 0, 0.88555], 63: [0, 0.69444, 0.11472, 0, 0.59111], 64: [0, 0.69444, 0.09208, 0, 0.88555], 65: [0, 0.68611, 0, 0, 0.86555], 66: [0, 0.68611, 0.0992, 0, 0.81666], 67: [0, 0.68611, 0.14208, 0, 0.82666], 68: [0, 0.68611, 0.09062, 0, 0.87555], 69: [0, 0.68611, 0.11431, 0, 0.75666], 70: [0, 0.68611, 0.12903, 0, 0.72722], 71: [0, 0.68611, 0.07347, 0, 0.89527], 72: [0, 0.68611, 0.17208, 0, 0.8961], 73: [0, 0.68611, 0.15681, 0, 0.47166], 74: [0, 0.68611, 0.145, 0, 0.61055], 75: [0, 0.68611, 0.14208, 0, 0.89499], 76: [0, 0.68611, 0, 0, 0.69777], 77: [0, 0.68611, 0.17208, 0, 1.07277], 78: [0, 0.68611, 0.17208, 0, 0.8961], 79: [0, 0.68611, 0.09062, 0, 0.85499], 80: [0, 0.68611, 0.0992, 0, 0.78721], 81: [0.19444, 0.68611, 0.09062, 0, 0.85499], 82: [0, 0.68611, 0.02559, 0, 0.85944], 83: [0, 0.68611, 0.11264, 0, 0.64999], 84: [0, 0.68611, 0.12903, 0, 0.7961], 85: [0, 0.68611, 0.17208, 0, 0.88083], 86: [0, 0.68611, 0.18625, 0, 0.86555], 87: [0, 0.68611, 0.18625, 0, 1.15999], 88: [0, 0.68611, 0.15681, 0, 0.86555], 89: [0, 0.68611, 0.19803, 0, 0.86555], 90: [0, 0.68611, 0.14208, 0, 0.70888], 91: [0.25, 0.75, 0.1875, 0, 0.35611], 93: [0.25, 0.75, 0.09972, 0, 0.35611], 94: [0, 0.69444, 0.06709, 0, 0.59111], 95: [0.31, 0.13444, 0.09811, 0, 0.59111], 97: [0, 0.44444, 0.09426, 0, 0.59111], 98: [0, 0.69444, 0.07861, 0, 0.53222], 99: [0, 0.44444, 0.05222, 0, 0.53222], 100: [0, 0.69444, 0.10861, 0, 0.59111], 101: [0, 0.44444, 0.085, 0, 0.53222], 102: [0.19444, 0.69444, 0.21778, 0, 0.4], 103: [0.19444, 0.44444, 0.105, 0, 0.53222], 104: [0, 0.69444, 0.09426, 0, 0.59111], 105: [0, 0.69326, 0.11387, 0, 0.35555], 106: [0.19444, 0.69326, 0.1672, 0, 0.35555], 107: [0, 0.69444, 0.11111, 0, 0.53222], 108: [0, 0.69444, 0.10861, 0, 0.29666], 109: [0, 0.44444, 0.09426, 0, 0.94444], 110: [0, 0.44444, 0.09426, 0, 0.64999], 111: [0, 0.44444, 0.07861, 0, 0.59111], 112: [0.19444, 0.44444, 0.07861, 0, 0.59111], 113: [0.19444, 0.44444, 0.105, 0, 0.53222], 114: [0, 0.44444, 0.11111, 0, 0.50167], 115: [0, 0.44444, 0.08167, 0, 0.48694], 116: [0, 0.63492, 0.09639, 0, 0.385], 117: [0, 0.44444, 0.09426, 0, 0.62055], 118: [0, 0.44444, 0.11111, 0, 0.53222], 119: [0, 0.44444, 0.11111, 0, 0.76777], 120: [0, 0.44444, 0.12583, 0, 0.56055], 121: [0.19444, 0.44444, 0.105, 0, 0.56166], 122: [0, 0.44444, 0.13889, 0, 0.49055], 126: [0.35, 0.34444, 0.11472, 0, 0.59111], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.69444, 0.11473, 0, 0.59111], 176: [0, 0.69444, 0, 0, 0.94888], 184: [0.17014, 0, 0, 0, 0.53222], 198: [0, 0.68611, 0.11431, 0, 1.02277], 216: [0.04861, 0.73472, 0.09062, 0, 0.88555], 223: [0.19444, 0.69444, 0.09736, 0, 0.665], 230: [0, 0.44444, 0.085, 0, 0.82666], 248: [0.09722, 0.54167, 0.09458, 0, 0.59111], 305: [0, 0.44444, 0.09426, 0, 0.35555], 338: [0, 0.68611, 0.11431, 0, 1.14054], 339: [0, 0.44444, 0.085, 0, 0.82666], 567: [0.19444, 0.44444, 0.04611, 0, 0.385], 710: [0, 0.69444, 0.06709, 0, 0.59111], 711: [0, 0.63194, 0.08271, 0, 0.59111], 713: [0, 0.59444, 0.10444, 0, 0.59111], 714: [0, 0.69444, 0.08528, 0, 0.59111], 715: [0, 0.69444, 0, 0, 0.59111], 728: [0, 0.69444, 0.10333, 0, 0.59111], 729: [0, 0.69444, 0.12945, 0, 0.35555], 730: [0, 0.69444, 0, 0, 0.94888], 732: [0, 0.69444, 0.11472, 0, 0.59111], 733: [0, 0.69444, 0.11472, 0, 0.59111], 915: [0, 0.68611, 0.12903, 0, 0.69777], 916: [0, 0.68611, 0, 0, 0.94444], 920: [0, 0.68611, 0.09062, 0, 0.88555], 923: [0, 0.68611, 0, 0, 0.80666], 926: [0, 0.68611, 0.15092, 0, 0.76777], 928: [0, 0.68611, 0.17208, 0, 0.8961], 931: [0, 0.68611, 0.11431, 0, 0.82666], 933: [0, 0.68611, 0.10778, 0, 0.88555], 934: [0, 0.68611, 0.05632, 0, 0.82666], 936: [0, 0.68611, 0.10778, 0, 0.88555], 937: [0, 0.68611, 0.0992, 0, 0.82666], 8211: [0, 0.44444, 0.09811, 0, 0.59111], 8212: [0, 0.44444, 0.09811, 0, 1.18221], 8216: [0, 0.69444, 0.12945, 0, 0.35555], 8217: [0, 0.69444, 0.12945, 0, 0.35555], 8220: [0, 0.69444, 0.16772, 0, 0.62055], 8221: [0, 0.69444, 0.07939, 0, 0.62055] }, "Main-Italic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.12417, 0, 0.30667], 34: [0, 0.69444, 0.06961, 0, 0.51444], 35: [0.19444, 0.69444, 0.06616, 0, 0.81777], 37: [0.05556, 0.75, 0.13639, 0, 0.81777], 38: [0, 0.69444, 0.09694, 0, 0.76666], 39: [0, 0.69444, 0.12417, 0, 0.30667], 40: [0.25, 0.75, 0.16194, 0, 0.40889], 41: [0.25, 0.75, 0.03694, 0, 0.40889], 42: [0, 0.75, 0.14917, 0, 0.51111], 43: [0.05667, 0.56167, 0.03694, 0, 0.76666], 44: [0.19444, 0.10556, 0, 0, 0.30667], 45: [0, 0.43056, 0.02826, 0, 0.35778], 46: [0, 0.10556, 0, 0, 0.30667], 47: [0.25, 0.75, 0.16194, 0, 0.51111], 48: [0, 0.64444, 0.13556, 0, 0.51111], 49: [0, 0.64444, 0.13556, 0, 0.51111], 50: [0, 0.64444, 0.13556, 0, 0.51111], 51: [0, 0.64444, 0.13556, 0, 0.51111], 52: [0.19444, 0.64444, 0.13556, 0, 0.51111], 53: [0, 0.64444, 0.13556, 0, 0.51111], 54: [0, 0.64444, 0.13556, 0, 0.51111], 55: [0.19444, 0.64444, 0.13556, 0, 0.51111], 56: [0, 0.64444, 0.13556, 0, 0.51111], 57: [0, 0.64444, 0.13556, 0, 0.51111], 58: [0, 0.43056, 0.0582, 0, 0.30667], 59: [0.19444, 0.43056, 0.0582, 0, 0.30667], 61: [-0.13313, 0.36687, 0.06616, 0, 0.76666], 63: [0, 0.69444, 0.1225, 0, 0.51111], 64: [0, 0.69444, 0.09597, 0, 0.76666], 65: [0, 0.68333, 0, 0, 0.74333], 66: [0, 0.68333, 0.10257, 0, 0.70389], 67: [0, 0.68333, 0.14528, 0, 0.71555], 68: [0, 0.68333, 0.09403, 0, 0.755], 69: [0, 0.68333, 0.12028, 0, 0.67833], 70: [0, 0.68333, 0.13305, 0, 0.65277], 71: [0, 0.68333, 0.08722, 0, 0.77361], 72: [0, 0.68333, 0.16389, 0, 0.74333], 73: [0, 0.68333, 0.15806, 0, 0.38555], 74: [0, 0.68333, 0.14028, 0, 0.525], 75: [0, 0.68333, 0.14528, 0, 0.76888], 76: [0, 0.68333, 0, 0, 0.62722], 77: [0, 0.68333, 0.16389, 0, 0.89666], 78: [0, 0.68333, 0.16389, 0, 0.74333], 79: [0, 0.68333, 0.09403, 0, 0.76666], 80: [0, 0.68333, 0.10257, 0, 0.67833], 81: [0.19444, 0.68333, 0.09403, 0, 0.76666], 82: [0, 0.68333, 0.03868, 0, 0.72944], 83: [0, 0.68333, 0.11972, 0, 0.56222], 84: [0, 0.68333, 0.13305, 0, 0.71555], 85: [0, 0.68333, 0.16389, 0, 0.74333], 86: [0, 0.68333, 0.18361, 0, 0.74333], 87: [0, 0.68333, 0.18361, 0, 0.99888], 88: [0, 0.68333, 0.15806, 0, 0.74333], 89: [0, 0.68333, 0.19383, 0, 0.74333], 90: [0, 0.68333, 0.14528, 0, 0.61333], 91: [0.25, 0.75, 0.1875, 0, 0.30667], 93: [0.25, 0.75, 0.10528, 0, 0.30667], 94: [0, 0.69444, 0.06646, 0, 0.51111], 95: [0.31, 0.12056, 0.09208, 0, 0.51111], 97: [0, 0.43056, 0.07671, 0, 0.51111], 98: [0, 0.69444, 0.06312, 0, 0.46], 99: [0, 0.43056, 0.05653, 0, 0.46], 100: [0, 0.69444, 0.10333, 0, 0.51111], 101: [0, 0.43056, 0.07514, 0, 0.46], 102: [0.19444, 0.69444, 0.21194, 0, 0.30667], 103: [0.19444, 0.43056, 0.08847, 0, 0.46], 104: [0, 0.69444, 0.07671, 0, 0.51111], 105: [0, 0.65536, 0.1019, 0, 0.30667], 106: [0.19444, 0.65536, 0.14467, 0, 0.30667], 107: [0, 0.69444, 0.10764, 0, 0.46], 108: [0, 0.69444, 0.10333, 0, 0.25555], 109: [0, 0.43056, 0.07671, 0, 0.81777], 110: [0, 0.43056, 0.07671, 0, 0.56222], 111: [0, 0.43056, 0.06312, 0, 0.51111], 112: [0.19444, 0.43056, 0.06312, 0, 0.51111], 113: [0.19444, 0.43056, 0.08847, 0, 0.46], 114: [0, 0.43056, 0.10764, 0, 0.42166], 115: [0, 0.43056, 0.08208, 0, 0.40889], 116: [0, 0.61508, 0.09486, 0, 0.33222], 117: [0, 0.43056, 0.07671, 0, 0.53666], 118: [0, 0.43056, 0.10764, 0, 0.46], 119: [0, 0.43056, 0.10764, 0, 0.66444], 120: [0, 0.43056, 0.12042, 0, 0.46389], 121: [0.19444, 0.43056, 0.08847, 0, 0.48555], 122: [0, 0.43056, 0.12292, 0, 0.40889], 126: [0.35, 0.31786, 0.11585, 0, 0.51111], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.66786, 0.10474, 0, 0.51111], 176: [0, 0.69444, 0, 0, 0.83129], 184: [0.17014, 0, 0, 0, 0.46], 198: [0, 0.68333, 0.12028, 0, 0.88277], 216: [0.04861, 0.73194, 0.09403, 0, 0.76666], 223: [0.19444, 0.69444, 0.10514, 0, 0.53666], 230: [0, 0.43056, 0.07514, 0, 0.71555], 248: [0.09722, 0.52778, 0.09194, 0, 0.51111], 338: [0, 0.68333, 0.12028, 0, 0.98499], 339: [0, 0.43056, 0.07514, 0, 0.71555], 710: [0, 0.69444, 0.06646, 0, 0.51111], 711: [0, 0.62847, 0.08295, 0, 0.51111], 713: [0, 0.56167, 0.10333, 0, 0.51111], 714: [0, 0.69444, 0.09694, 0, 0.51111], 715: [0, 0.69444, 0, 0, 0.51111], 728: [0, 0.69444, 0.10806, 0, 0.51111], 729: [0, 0.66786, 0.11752, 0, 0.30667], 730: [0, 0.69444, 0, 0, 0.83129], 732: [0, 0.66786, 0.11585, 0, 0.51111], 733: [0, 0.69444, 0.1225, 0, 0.51111], 915: [0, 0.68333, 0.13305, 0, 0.62722], 916: [0, 0.68333, 0, 0, 0.81777], 920: [0, 0.68333, 0.09403, 0, 0.76666], 923: [0, 0.68333, 0, 0, 0.69222], 926: [0, 0.68333, 0.15294, 0, 0.66444], 928: [0, 0.68333, 0.16389, 0, 0.74333], 931: [0, 0.68333, 0.12028, 0, 0.71555], 933: [0, 0.68333, 0.11111, 0, 0.76666], 934: [0, 0.68333, 0.05986, 0, 0.71555], 936: [0, 0.68333, 0.11111, 0, 0.76666], 937: [0, 0.68333, 0.10257, 0, 0.71555], 8211: [0, 0.43056, 0.09208, 0, 0.51111], 8212: [0, 0.43056, 0.09208, 0, 1.02222], 8216: [0, 0.69444, 0.12417, 0, 0.30667], 8217: [0, 0.69444, 0.12417, 0, 0.30667], 8220: [0, 0.69444, 0.1685, 0, 0.51444], 8221: [0, 0.69444, 0.06961, 0, 0.51444], 8463: [0, 0.68889, 0, 0, 0.54028] }, "Main-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.27778], 34: [0, 0.69444, 0, 0, 0.5], 35: [0.19444, 0.69444, 0, 0, 0.83334], 36: [0.05556, 0.75, 0, 0, 0.5], 37: [0.05556, 0.75, 0, 0, 0.83334], 38: [0, 0.69444, 0, 0, 0.77778], 39: [0, 0.69444, 0, 0, 0.27778], 40: [0.25, 0.75, 0, 0, 0.38889], 41: [0.25, 0.75, 0, 0, 0.38889], 42: [0, 0.75, 0, 0, 0.5], 43: [0.08333, 0.58333, 0, 0, 0.77778], 44: [0.19444, 0.10556, 0, 0, 0.27778], 45: [0, 0.43056, 0, 0, 0.33333], 46: [0, 0.10556, 0, 0, 0.27778], 47: [0.25, 0.75, 0, 0, 0.5], 48: [0, 0.64444, 0, 0, 0.5], 49: [0, 0.64444, 0, 0, 0.5], 50: [0, 0.64444, 0, 0, 0.5], 51: [0, 0.64444, 0, 0, 0.5], 52: [0, 0.64444, 0, 0, 0.5], 53: [0, 0.64444, 0, 0, 0.5], 54: [0, 0.64444, 0, 0, 0.5], 55: [0, 0.64444, 0, 0, 0.5], 56: [0, 0.64444, 0, 0, 0.5], 57: [0, 0.64444, 0, 0, 0.5], 58: [0, 0.43056, 0, 0, 0.27778], 59: [0.19444, 0.43056, 0, 0, 0.27778], 60: [0.0391, 0.5391, 0, 0, 0.77778], 61: [-0.13313, 0.36687, 0, 0, 0.77778], 62: [0.0391, 0.5391, 0, 0, 0.77778], 63: [0, 0.69444, 0, 0, 0.47222], 64: [0, 0.69444, 0, 0, 0.77778], 65: [0, 0.68333, 0, 0, 0.75], 66: [0, 0.68333, 0, 0, 0.70834], 67: [0, 0.68333, 0, 0, 0.72222], 68: [0, 0.68333, 0, 0, 0.76389], 69: [0, 0.68333, 0, 0, 0.68056], 70: [0, 0.68333, 0, 0, 0.65278], 71: [0, 0.68333, 0, 0, 0.78472], 72: [0, 0.68333, 0, 0, 0.75], 73: [0, 0.68333, 0, 0, 0.36111], 74: [0, 0.68333, 0, 0, 0.51389], 75: [0, 0.68333, 0, 0, 0.77778], 76: [0, 0.68333, 0, 0, 0.625], 77: [0, 0.68333, 0, 0, 0.91667], 78: [0, 0.68333, 0, 0, 0.75], 79: [0, 0.68333, 0, 0, 0.77778], 80: [0, 0.68333, 0, 0, 0.68056], 81: [0.19444, 0.68333, 0, 0, 0.77778], 82: [0, 0.68333, 0, 0, 0.73611], 83: [0, 0.68333, 0, 0, 0.55556], 84: [0, 0.68333, 0, 0, 0.72222], 85: [0, 0.68333, 0, 0, 0.75], 86: [0, 0.68333, 0.01389, 0, 0.75], 87: [0, 0.68333, 0.01389, 0, 1.02778], 88: [0, 0.68333, 0, 0, 0.75], 89: [0, 0.68333, 0.025, 0, 0.75], 90: [0, 0.68333, 0, 0, 0.61111], 91: [0.25, 0.75, 0, 0, 0.27778], 92: [0.25, 0.75, 0, 0, 0.5], 93: [0.25, 0.75, 0, 0, 0.27778], 94: [0, 0.69444, 0, 0, 0.5], 95: [0.31, 0.12056, 0.02778, 0, 0.5], 97: [0, 0.43056, 0, 0, 0.5], 98: [0, 0.69444, 0, 0, 0.55556], 99: [0, 0.43056, 0, 0, 0.44445], 100: [0, 0.69444, 0, 0, 0.55556], 101: [0, 0.43056, 0, 0, 0.44445], 102: [0, 0.69444, 0.07778, 0, 0.30556], 103: [0.19444, 0.43056, 0.01389, 0, 0.5], 104: [0, 0.69444, 0, 0, 0.55556], 105: [0, 0.66786, 0, 0, 0.27778], 106: [0.19444, 0.66786, 0, 0, 0.30556], 107: [0, 0.69444, 0, 0, 0.52778], 108: [0, 0.69444, 0, 0, 0.27778], 109: [0, 0.43056, 0, 0, 0.83334], 110: [0, 0.43056, 0, 0, 0.55556], 111: [0, 0.43056, 0, 0, 0.5], 112: [0.19444, 0.43056, 0, 0, 0.55556], 113: [0.19444, 0.43056, 0, 0, 0.52778], 114: [0, 0.43056, 0, 0, 0.39167], 115: [0, 0.43056, 0, 0, 0.39445], 116: [0, 0.61508, 0, 0, 0.38889], 117: [0, 0.43056, 0, 0, 0.55556], 118: [0, 0.43056, 0.01389, 0, 0.52778], 119: [0, 0.43056, 0.01389, 0, 0.72222], 120: [0, 0.43056, 0, 0, 0.52778], 121: [0.19444, 0.43056, 0.01389, 0, 0.52778], 122: [0, 0.43056, 0, 0, 0.44445], 123: [0.25, 0.75, 0, 0, 0.5], 124: [0.25, 0.75, 0, 0, 0.27778], 125: [0.25, 0.75, 0, 0, 0.5], 126: [0.35, 0.31786, 0, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 163: [0, 0.69444, 0, 0, 0.76909], 167: [0.19444, 0.69444, 0, 0, 0.44445], 168: [0, 0.66786, 0, 0, 0.5], 172: [0, 0.43056, 0, 0, 0.66667], 176: [0, 0.69444, 0, 0, 0.75], 177: [0.08333, 0.58333, 0, 0, 0.77778], 182: [0.19444, 0.69444, 0, 0, 0.61111], 184: [0.17014, 0, 0, 0, 0.44445], 198: [0, 0.68333, 0, 0, 0.90278], 215: [0.08333, 0.58333, 0, 0, 0.77778], 216: [0.04861, 0.73194, 0, 0, 0.77778], 223: [0, 0.69444, 0, 0, 0.5], 230: [0, 0.43056, 0, 0, 0.72222], 247: [0.08333, 0.58333, 0, 0, 0.77778], 248: [0.09722, 0.52778, 0, 0, 0.5], 305: [0, 0.43056, 0, 0, 0.27778], 338: [0, 0.68333, 0, 0, 1.01389], 339: [0, 0.43056, 0, 0, 0.77778], 567: [0.19444, 0.43056, 0, 0, 0.30556], 710: [0, 0.69444, 0, 0, 0.5], 711: [0, 0.62847, 0, 0, 0.5], 713: [0, 0.56778, 0, 0, 0.5], 714: [0, 0.69444, 0, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0, 0, 0.5], 729: [0, 0.66786, 0, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.75], 732: [0, 0.66786, 0, 0, 0.5], 733: [0, 0.69444, 0, 0, 0.5], 915: [0, 0.68333, 0, 0, 0.625], 916: [0, 0.68333, 0, 0, 0.83334], 920: [0, 0.68333, 0, 0, 0.77778], 923: [0, 0.68333, 0, 0, 0.69445], 926: [0, 0.68333, 0, 0, 0.66667], 928: [0, 0.68333, 0, 0, 0.75], 931: [0, 0.68333, 0, 0, 0.72222], 933: [0, 0.68333, 0, 0, 0.77778], 934: [0, 0.68333, 0, 0, 0.72222], 936: [0, 0.68333, 0, 0, 0.77778], 937: [0, 0.68333, 0, 0, 0.72222], 8211: [0, 0.43056, 0.02778, 0, 0.5], 8212: [0, 0.43056, 0.02778, 0, 1], 8216: [0, 0.69444, 0, 0, 0.27778], 8217: [0, 0.69444, 0, 0, 0.27778], 8220: [0, 0.69444, 0, 0, 0.5], 8221: [0, 0.69444, 0, 0, 0.5], 8224: [0.19444, 0.69444, 0, 0, 0.44445], 8225: [0.19444, 0.69444, 0, 0, 0.44445], 8230: [0, 0.123, 0, 0, 1.172], 8242: [0, 0.55556, 0, 0, 0.275], 8407: [0, 0.71444, 0.15382, 0, 0.5], 8463: [0, 0.68889, 0, 0, 0.54028], 8465: [0, 0.69444, 0, 0, 0.72222], 8467: [0, 0.69444, 0, 0.11111, 0.41667], 8472: [0.19444, 0.43056, 0, 0.11111, 0.63646], 8476: [0, 0.69444, 0, 0, 0.72222], 8501: [0, 0.69444, 0, 0, 0.61111], 8592: [-0.13313, 0.36687, 0, 0, 1], 8593: [0.19444, 0.69444, 0, 0, 0.5], 8594: [-0.13313, 0.36687, 0, 0, 1], 8595: [0.19444, 0.69444, 0, 0, 0.5], 8596: [-0.13313, 0.36687, 0, 0, 1], 8597: [0.25, 0.75, 0, 0, 0.5], 8598: [0.19444, 0.69444, 0, 0, 1], 8599: [0.19444, 0.69444, 0, 0, 1], 8600: [0.19444, 0.69444, 0, 0, 1], 8601: [0.19444, 0.69444, 0, 0, 1], 8614: [0.011, 0.511, 0, 0, 1], 8617: [0.011, 0.511, 0, 0, 1.126], 8618: [0.011, 0.511, 0, 0, 1.126], 8636: [-0.13313, 0.36687, 0, 0, 1], 8637: [-0.13313, 0.36687, 0, 0, 1], 8640: [-0.13313, 0.36687, 0, 0, 1], 8641: [-0.13313, 0.36687, 0, 0, 1], 8652: [0.011, 0.671, 0, 0, 1], 8656: [-0.13313, 0.36687, 0, 0, 1], 8657: [0.19444, 0.69444, 0, 0, 0.61111], 8658: [-0.13313, 0.36687, 0, 0, 1], 8659: [0.19444, 0.69444, 0, 0, 0.61111], 8660: [-0.13313, 0.36687, 0, 0, 1], 8661: [0.25, 0.75, 0, 0, 0.61111], 8704: [0, 0.69444, 0, 0, 0.55556], 8706: [0, 0.69444, 0.05556, 0.08334, 0.5309], 8707: [0, 0.69444, 0, 0, 0.55556], 8709: [0.05556, 0.75, 0, 0, 0.5], 8711: [0, 0.68333, 0, 0, 0.83334], 8712: [0.0391, 0.5391, 0, 0, 0.66667], 8715: [0.0391, 0.5391, 0, 0, 0.66667], 8722: [0.08333, 0.58333, 0, 0, 0.77778], 8723: [0.08333, 0.58333, 0, 0, 0.77778], 8725: [0.25, 0.75, 0, 0, 0.5], 8726: [0.25, 0.75, 0, 0, 0.5], 8727: [-0.03472, 0.46528, 0, 0, 0.5], 8728: [-0.05555, 0.44445, 0, 0, 0.5], 8729: [-0.05555, 0.44445, 0, 0, 0.5], 8730: [0.2, 0.8, 0, 0, 0.83334], 8733: [0, 0.43056, 0, 0, 0.77778], 8734: [0, 0.43056, 0, 0, 1], 8736: [0, 0.69224, 0, 0, 0.72222], 8739: [0.25, 0.75, 0, 0, 0.27778], 8741: [0.25, 0.75, 0, 0, 0.5], 8743: [0, 0.55556, 0, 0, 0.66667], 8744: [0, 0.55556, 0, 0, 0.66667], 8745: [0, 0.55556, 0, 0, 0.66667], 8746: [0, 0.55556, 0, 0, 0.66667], 8747: [0.19444, 0.69444, 0.11111, 0, 0.41667], 8764: [-0.13313, 0.36687, 0, 0, 0.77778], 8768: [0.19444, 0.69444, 0, 0, 0.27778], 8771: [-0.03625, 0.46375, 0, 0, 0.77778], 8773: [-0.022, 0.589, 0, 0, 0.778], 8776: [-0.01688, 0.48312, 0, 0, 0.77778], 8781: [-0.03625, 0.46375, 0, 0, 0.77778], 8784: [-0.133, 0.673, 0, 0, 0.778], 8801: [-0.03625, 0.46375, 0, 0, 0.77778], 8804: [0.13597, 0.63597, 0, 0, 0.77778], 8805: [0.13597, 0.63597, 0, 0, 0.77778], 8810: [0.0391, 0.5391, 0, 0, 1], 8811: [0.0391, 0.5391, 0, 0, 1], 8826: [0.0391, 0.5391, 0, 0, 0.77778], 8827: [0.0391, 0.5391, 0, 0, 0.77778], 8834: [0.0391, 0.5391, 0, 0, 0.77778], 8835: [0.0391, 0.5391, 0, 0, 0.77778], 8838: [0.13597, 0.63597, 0, 0, 0.77778], 8839: [0.13597, 0.63597, 0, 0, 0.77778], 8846: [0, 0.55556, 0, 0, 0.66667], 8849: [0.13597, 0.63597, 0, 0, 0.77778], 8850: [0.13597, 0.63597, 0, 0, 0.77778], 8851: [0, 0.55556, 0, 0, 0.66667], 8852: [0, 0.55556, 0, 0, 0.66667], 8853: [0.08333, 0.58333, 0, 0, 0.77778], 8854: [0.08333, 0.58333, 0, 0, 0.77778], 8855: [0.08333, 0.58333, 0, 0, 0.77778], 8856: [0.08333, 0.58333, 0, 0, 0.77778], 8857: [0.08333, 0.58333, 0, 0, 0.77778], 8866: [0, 0.69444, 0, 0, 0.61111], 8867: [0, 0.69444, 0, 0, 0.61111], 8868: [0, 0.69444, 0, 0, 0.77778], 8869: [0, 0.69444, 0, 0, 0.77778], 8872: [0.249, 0.75, 0, 0, 0.867], 8900: [-0.05555, 0.44445, 0, 0, 0.5], 8901: [-0.05555, 0.44445, 0, 0, 0.27778], 8902: [-0.03472, 0.46528, 0, 0, 0.5], 8904: [5e-3, 0.505, 0, 0, 0.9], 8942: [0.03, 0.903, 0, 0, 0.278], 8943: [-0.19, 0.313, 0, 0, 1.172], 8945: [-0.1, 0.823, 0, 0, 1.282], 8968: [0.25, 0.75, 0, 0, 0.44445], 8969: [0.25, 0.75, 0, 0, 0.44445], 8970: [0.25, 0.75, 0, 0, 0.44445], 8971: [0.25, 0.75, 0, 0, 0.44445], 8994: [-0.14236, 0.35764, 0, 0, 1], 8995: [-0.14236, 0.35764, 0, 0, 1], 9136: [0.244, 0.744, 0, 0, 0.412], 9137: [0.244, 0.745, 0, 0, 0.412], 9651: [0.19444, 0.69444, 0, 0, 0.88889], 9657: [-0.03472, 0.46528, 0, 0, 0.5], 9661: [0.19444, 0.69444, 0, 0, 0.88889], 9667: [-0.03472, 0.46528, 0, 0, 0.5], 9711: [0.19444, 0.69444, 0, 0, 1], 9824: [0.12963, 0.69444, 0, 0, 0.77778], 9825: [0.12963, 0.69444, 0, 0, 0.77778], 9826: [0.12963, 0.69444, 0, 0, 0.77778], 9827: [0.12963, 0.69444, 0, 0, 0.77778], 9837: [0, 0.75, 0, 0, 0.38889], 9838: [0.19444, 0.69444, 0, 0, 0.38889], 9839: [0.19444, 0.69444, 0, 0, 0.38889], 10216: [0.25, 0.75, 0, 0, 0.38889], 10217: [0.25, 0.75, 0, 0, 0.38889], 10222: [0.244, 0.744, 0, 0, 0.412], 10223: [0.244, 0.745, 0, 0, 0.412], 10229: [0.011, 0.511, 0, 0, 1.609], 10230: [0.011, 0.511, 0, 0, 1.638], 10231: [0.011, 0.511, 0, 0, 1.859], 10232: [0.024, 0.525, 0, 0, 1.609], 10233: [0.024, 0.525, 0, 0, 1.638], 10234: [0.024, 0.525, 0, 0, 1.858], 10236: [0.011, 0.511, 0, 0, 1.638], 10815: [0, 0.68333, 0, 0, 0.75], 10927: [0.13597, 0.63597, 0, 0, 0.77778], 10928: [0.13597, 0.63597, 0, 0, 0.77778], 57376: [0.19444, 0.69444, 0, 0, 0] }, "Math-BoldItalic": { 32: [0, 0, 0, 0, 0.25], 48: [0, 0.44444, 0, 0, 0.575], 49: [0, 0.44444, 0, 0, 0.575], 50: [0, 0.44444, 0, 0, 0.575], 51: [0.19444, 0.44444, 0, 0, 0.575], 52: [0.19444, 0.44444, 0, 0, 0.575], 53: [0.19444, 0.44444, 0, 0, 0.575], 54: [0, 0.64444, 0, 0, 0.575], 55: [0.19444, 0.44444, 0, 0, 0.575], 56: [0, 0.64444, 0, 0, 0.575], 57: [0.19444, 0.44444, 0, 0, 0.575], 65: [0, 0.68611, 0, 0, 0.86944], 66: [0, 0.68611, 0.04835, 0, 0.8664], 67: [0, 0.68611, 0.06979, 0, 0.81694], 68: [0, 0.68611, 0.03194, 0, 0.93812], 69: [0, 0.68611, 0.05451, 0, 0.81007], 70: [0, 0.68611, 0.15972, 0, 0.68889], 71: [0, 0.68611, 0, 0, 0.88673], 72: [0, 0.68611, 0.08229, 0, 0.98229], 73: [0, 0.68611, 0.07778, 0, 0.51111], 74: [0, 0.68611, 0.10069, 0, 0.63125], 75: [0, 0.68611, 0.06979, 0, 0.97118], 76: [0, 0.68611, 0, 0, 0.75555], 77: [0, 0.68611, 0.11424, 0, 1.14201], 78: [0, 0.68611, 0.11424, 0, 0.95034], 79: [0, 0.68611, 0.03194, 0, 0.83666], 80: [0, 0.68611, 0.15972, 0, 0.72309], 81: [0.19444, 0.68611, 0, 0, 0.86861], 82: [0, 0.68611, 421e-5, 0, 0.87235], 83: [0, 0.68611, 0.05382, 0, 0.69271], 84: [0, 0.68611, 0.15972, 0, 0.63663], 85: [0, 0.68611, 0.11424, 0, 0.80027], 86: [0, 0.68611, 0.25555, 0, 0.67778], 87: [0, 0.68611, 0.15972, 0, 1.09305], 88: [0, 0.68611, 0.07778, 0, 0.94722], 89: [0, 0.68611, 0.25555, 0, 0.67458], 90: [0, 0.68611, 0.06979, 0, 0.77257], 97: [0, 0.44444, 0, 0, 0.63287], 98: [0, 0.69444, 0, 0, 0.52083], 99: [0, 0.44444, 0, 0, 0.51342], 100: [0, 0.69444, 0, 0, 0.60972], 101: [0, 0.44444, 0, 0, 0.55361], 102: [0.19444, 0.69444, 0.11042, 0, 0.56806], 103: [0.19444, 0.44444, 0.03704, 0, 0.5449], 104: [0, 0.69444, 0, 0, 0.66759], 105: [0, 0.69326, 0, 0, 0.4048], 106: [0.19444, 0.69326, 0.0622, 0, 0.47083], 107: [0, 0.69444, 0.01852, 0, 0.6037], 108: [0, 0.69444, 88e-4, 0, 0.34815], 109: [0, 0.44444, 0, 0, 1.0324], 110: [0, 0.44444, 0, 0, 0.71296], 111: [0, 0.44444, 0, 0, 0.58472], 112: [0.19444, 0.44444, 0, 0, 0.60092], 113: [0.19444, 0.44444, 0.03704, 0, 0.54213], 114: [0, 0.44444, 0.03194, 0, 0.5287], 115: [0, 0.44444, 0, 0, 0.53125], 116: [0, 0.63492, 0, 0, 0.41528], 117: [0, 0.44444, 0, 0, 0.68102], 118: [0, 0.44444, 0.03704, 0, 0.56666], 119: [0, 0.44444, 0.02778, 0, 0.83148], 120: [0, 0.44444, 0, 0, 0.65903], 121: [0.19444, 0.44444, 0.03704, 0, 0.59028], 122: [0, 0.44444, 0.04213, 0, 0.55509], 160: [0, 0, 0, 0, 0.25], 915: [0, 0.68611, 0.15972, 0, 0.65694], 916: [0, 0.68611, 0, 0, 0.95833], 920: [0, 0.68611, 0.03194, 0, 0.86722], 923: [0, 0.68611, 0, 0, 0.80555], 926: [0, 0.68611, 0.07458, 0, 0.84125], 928: [0, 0.68611, 0.08229, 0, 0.98229], 931: [0, 0.68611, 0.05451, 0, 0.88507], 933: [0, 0.68611, 0.15972, 0, 0.67083], 934: [0, 0.68611, 0, 0, 0.76666], 936: [0, 0.68611, 0.11653, 0, 0.71402], 937: [0, 0.68611, 0.04835, 0, 0.8789], 945: [0, 0.44444, 0, 0, 0.76064], 946: [0.19444, 0.69444, 0.03403, 0, 0.65972], 947: [0.19444, 0.44444, 0.06389, 0, 0.59003], 948: [0, 0.69444, 0.03819, 0, 0.52222], 949: [0, 0.44444, 0, 0, 0.52882], 950: [0.19444, 0.69444, 0.06215, 0, 0.50833], 951: [0.19444, 0.44444, 0.03704, 0, 0.6], 952: [0, 0.69444, 0.03194, 0, 0.5618], 953: [0, 0.44444, 0, 0, 0.41204], 954: [0, 0.44444, 0, 0, 0.66759], 955: [0, 0.69444, 0, 0, 0.67083], 956: [0.19444, 0.44444, 0, 0, 0.70787], 957: [0, 0.44444, 0.06898, 0, 0.57685], 958: [0.19444, 0.69444, 0.03021, 0, 0.50833], 959: [0, 0.44444, 0, 0, 0.58472], 960: [0, 0.44444, 0.03704, 0, 0.68241], 961: [0.19444, 0.44444, 0, 0, 0.6118], 962: [0.09722, 0.44444, 0.07917, 0, 0.42361], 963: [0, 0.44444, 0.03704, 0, 0.68588], 964: [0, 0.44444, 0.13472, 0, 0.52083], 965: [0, 0.44444, 0.03704, 0, 0.63055], 966: [0.19444, 0.44444, 0, 0, 0.74722], 967: [0.19444, 0.44444, 0, 0, 0.71805], 968: [0.19444, 0.69444, 0.03704, 0, 0.75833], 969: [0, 0.44444, 0.03704, 0, 0.71782], 977: [0, 0.69444, 0, 0, 0.69155], 981: [0.19444, 0.69444, 0, 0, 0.7125], 982: [0, 0.44444, 0.03194, 0, 0.975], 1009: [0.19444, 0.44444, 0, 0, 0.6118], 1013: [0, 0.44444, 0, 0, 0.48333], 57649: [0, 0.44444, 0, 0, 0.39352], 57911: [0.19444, 0.44444, 0, 0, 0.43889] }, "Math-Italic": { 32: [0, 0, 0, 0, 0.25], 48: [0, 0.43056, 0, 0, 0.5], 49: [0, 0.43056, 0, 0, 0.5], 50: [0, 0.43056, 0, 0, 0.5], 51: [0.19444, 0.43056, 0, 0, 0.5], 52: [0.19444, 0.43056, 0, 0, 0.5], 53: [0.19444, 0.43056, 0, 0, 0.5], 54: [0, 0.64444, 0, 0, 0.5], 55: [0.19444, 0.43056, 0, 0, 0.5], 56: [0, 0.64444, 0, 0, 0.5], 57: [0.19444, 0.43056, 0, 0, 0.5], 65: [0, 0.68333, 0, 0.13889, 0.75], 66: [0, 0.68333, 0.05017, 0.08334, 0.75851], 67: [0, 0.68333, 0.07153, 0.08334, 0.71472], 68: [0, 0.68333, 0.02778, 0.05556, 0.82792], 69: [0, 0.68333, 0.05764, 0.08334, 0.7382], 70: [0, 0.68333, 0.13889, 0.08334, 0.64306], 71: [0, 0.68333, 0, 0.08334, 0.78625], 72: [0, 0.68333, 0.08125, 0.05556, 0.83125], 73: [0, 0.68333, 0.07847, 0.11111, 0.43958], 74: [0, 0.68333, 0.09618, 0.16667, 0.55451], 75: [0, 0.68333, 0.07153, 0.05556, 0.84931], 76: [0, 0.68333, 0, 0.02778, 0.68056], 77: [0, 0.68333, 0.10903, 0.08334, 0.97014], 78: [0, 0.68333, 0.10903, 0.08334, 0.80347], 79: [0, 0.68333, 0.02778, 0.08334, 0.76278], 80: [0, 0.68333, 0.13889, 0.08334, 0.64201], 81: [0.19444, 0.68333, 0, 0.08334, 0.79056], 82: [0, 0.68333, 773e-5, 0.08334, 0.75929], 83: [0, 0.68333, 0.05764, 0.08334, 0.6132], 84: [0, 0.68333, 0.13889, 0.08334, 0.58438], 85: [0, 0.68333, 0.10903, 0.02778, 0.68278], 86: [0, 0.68333, 0.22222, 0, 0.58333], 87: [0, 0.68333, 0.13889, 0, 0.94445], 88: [0, 0.68333, 0.07847, 0.08334, 0.82847], 89: [0, 0.68333, 0.22222, 0, 0.58056], 90: [0, 0.68333, 0.07153, 0.08334, 0.68264], 97: [0, 0.43056, 0, 0, 0.52859], 98: [0, 0.69444, 0, 0, 0.42917], 99: [0, 0.43056, 0, 0.05556, 0.43276], 100: [0, 0.69444, 0, 0.16667, 0.52049], 101: [0, 0.43056, 0, 0.05556, 0.46563], 102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959], 103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697], 104: [0, 0.69444, 0, 0, 0.57616], 105: [0, 0.65952, 0, 0, 0.34451], 106: [0.19444, 0.65952, 0.05724, 0, 0.41181], 107: [0, 0.69444, 0.03148, 0, 0.5206], 108: [0, 0.69444, 0.01968, 0.08334, 0.29838], 109: [0, 0.43056, 0, 0, 0.87801], 110: [0, 0.43056, 0, 0, 0.60023], 111: [0, 0.43056, 0, 0.05556, 0.48472], 112: [0.19444, 0.43056, 0, 0.08334, 0.50313], 113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641], 114: [0, 0.43056, 0.02778, 0.05556, 0.45116], 115: [0, 0.43056, 0, 0.05556, 0.46875], 116: [0, 0.61508, 0, 0.08334, 0.36111], 117: [0, 0.43056, 0, 0.02778, 0.57246], 118: [0, 0.43056, 0.03588, 0.02778, 0.48472], 119: [0, 0.43056, 0.02691, 0.08334, 0.71592], 120: [0, 0.43056, 0, 0.02778, 0.57153], 121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028], 122: [0, 0.43056, 0.04398, 0.05556, 0.46505], 160: [0, 0, 0, 0, 0.25], 915: [0, 0.68333, 0.13889, 0.08334, 0.61528], 916: [0, 0.68333, 0, 0.16667, 0.83334], 920: [0, 0.68333, 0.02778, 0.08334, 0.76278], 923: [0, 0.68333, 0, 0.16667, 0.69445], 926: [0, 0.68333, 0.07569, 0.08334, 0.74236], 928: [0, 0.68333, 0.08125, 0.05556, 0.83125], 931: [0, 0.68333, 0.05764, 0.08334, 0.77986], 933: [0, 0.68333, 0.13889, 0.05556, 0.58333], 934: [0, 0.68333, 0, 0.08334, 0.66667], 936: [0, 0.68333, 0.11, 0.05556, 0.61222], 937: [0, 0.68333, 0.05017, 0.08334, 0.7724], 945: [0, 0.43056, 37e-4, 0.02778, 0.6397], 946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563], 947: [0.19444, 0.43056, 0.05556, 0, 0.51773], 948: [0, 0.69444, 0.03785, 0.05556, 0.44444], 949: [0, 0.43056, 0, 0.08334, 0.46632], 950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375], 951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653], 952: [0, 0.69444, 0.02778, 0.08334, 0.46944], 953: [0, 0.43056, 0, 0.05556, 0.35394], 954: [0, 0.43056, 0, 0, 0.57616], 955: [0, 0.69444, 0, 0, 0.58334], 956: [0.19444, 0.43056, 0, 0.02778, 0.60255], 957: [0, 0.43056, 0.06366, 0.02778, 0.49398], 958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375], 959: [0, 0.43056, 0, 0.05556, 0.48472], 960: [0, 0.43056, 0.03588, 0, 0.57003], 961: [0.19444, 0.43056, 0, 0.08334, 0.51702], 962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285], 963: [0, 0.43056, 0.03588, 0, 0.57141], 964: [0, 0.43056, 0.1132, 0.02778, 0.43715], 965: [0, 0.43056, 0.03588, 0.02778, 0.54028], 966: [0.19444, 0.43056, 0, 0.08334, 0.65417], 967: [0.19444, 0.43056, 0, 0.05556, 0.62569], 968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139], 969: [0, 0.43056, 0.03588, 0, 0.62245], 977: [0, 0.69444, 0, 0.08334, 0.59144], 981: [0.19444, 0.69444, 0, 0.08334, 0.59583], 982: [0, 0.43056, 0.02778, 0, 0.82813], 1009: [0.19444, 0.43056, 0, 0.08334, 0.51702], 1013: [0, 0.43056, 0, 0.05556, 0.4059], 57649: [0, 0.43056, 0, 0.02778, 0.32246], 57911: [0.19444, 0.43056, 0, 0.08334, 0.38403] }, "SansSerif-Bold": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.36667], 34: [0, 0.69444, 0, 0, 0.55834], 35: [0.19444, 0.69444, 0, 0, 0.91667], 36: [0.05556, 0.75, 0, 0, 0.55], 37: [0.05556, 0.75, 0, 0, 1.02912], 38: [0, 0.69444, 0, 0, 0.83056], 39: [0, 0.69444, 0, 0, 0.30556], 40: [0.25, 0.75, 0, 0, 0.42778], 41: [0.25, 0.75, 0, 0, 0.42778], 42: [0, 0.75, 0, 0, 0.55], 43: [0.11667, 0.61667, 0, 0, 0.85556], 44: [0.10556, 0.13056, 0, 0, 0.30556], 45: [0, 0.45833, 0, 0, 0.36667], 46: [0, 0.13056, 0, 0, 0.30556], 47: [0.25, 0.75, 0, 0, 0.55], 48: [0, 0.69444, 0, 0, 0.55], 49: [0, 0.69444, 0, 0, 0.55], 50: [0, 0.69444, 0, 0, 0.55], 51: [0, 0.69444, 0, 0, 0.55], 52: [0, 0.69444, 0, 0, 0.55], 53: [0, 0.69444, 0, 0, 0.55], 54: [0, 0.69444, 0, 0, 0.55], 55: [0, 0.69444, 0, 0, 0.55], 56: [0, 0.69444, 0, 0, 0.55], 57: [0, 0.69444, 0, 0, 0.55], 58: [0, 0.45833, 0, 0, 0.30556], 59: [0.10556, 0.45833, 0, 0, 0.30556], 61: [-0.09375, 0.40625, 0, 0, 0.85556], 63: [0, 0.69444, 0, 0, 0.51945], 64: [0, 0.69444, 0, 0, 0.73334], 65: [0, 0.69444, 0, 0, 0.73334], 66: [0, 0.69444, 0, 0, 0.73334], 67: [0, 0.69444, 0, 0, 0.70278], 68: [0, 0.69444, 0, 0, 0.79445], 69: [0, 0.69444, 0, 0, 0.64167], 70: [0, 0.69444, 0, 0, 0.61111], 71: [0, 0.69444, 0, 0, 0.73334], 72: [0, 0.69444, 0, 0, 0.79445], 73: [0, 0.69444, 0, 0, 0.33056], 74: [0, 0.69444, 0, 0, 0.51945], 75: [0, 0.69444, 0, 0, 0.76389], 76: [0, 0.69444, 0, 0, 0.58056], 77: [0, 0.69444, 0, 0, 0.97778], 78: [0, 0.69444, 0, 0, 0.79445], 79: [0, 0.69444, 0, 0, 0.79445], 80: [0, 0.69444, 0, 0, 0.70278], 81: [0.10556, 0.69444, 0, 0, 0.79445], 82: [0, 0.69444, 0, 0, 0.70278], 83: [0, 0.69444, 0, 0, 0.61111], 84: [0, 0.69444, 0, 0, 0.73334], 85: [0, 0.69444, 0, 0, 0.76389], 86: [0, 0.69444, 0.01528, 0, 0.73334], 87: [0, 0.69444, 0.01528, 0, 1.03889], 88: [0, 0.69444, 0, 0, 0.73334], 89: [0, 0.69444, 0.0275, 0, 0.73334], 90: [0, 0.69444, 0, 0, 0.67223], 91: [0.25, 0.75, 0, 0, 0.34306], 93: [0.25, 0.75, 0, 0, 0.34306], 94: [0, 0.69444, 0, 0, 0.55], 95: [0.35, 0.10833, 0.03056, 0, 0.55], 97: [0, 0.45833, 0, 0, 0.525], 98: [0, 0.69444, 0, 0, 0.56111], 99: [0, 0.45833, 0, 0, 0.48889], 100: [0, 0.69444, 0, 0, 0.56111], 101: [0, 0.45833, 0, 0, 0.51111], 102: [0, 0.69444, 0.07639, 0, 0.33611], 103: [0.19444, 0.45833, 0.01528, 0, 0.55], 104: [0, 0.69444, 0, 0, 0.56111], 105: [0, 0.69444, 0, 0, 0.25556], 106: [0.19444, 0.69444, 0, 0, 0.28611], 107: [0, 0.69444, 0, 0, 0.53056], 108: [0, 0.69444, 0, 0, 0.25556], 109: [0, 0.45833, 0, 0, 0.86667], 110: [0, 0.45833, 0, 0, 0.56111], 111: [0, 0.45833, 0, 0, 0.55], 112: [0.19444, 0.45833, 0, 0, 0.56111], 113: [0.19444, 0.45833, 0, 0, 0.56111], 114: [0, 0.45833, 0.01528, 0, 0.37222], 115: [0, 0.45833, 0, 0, 0.42167], 116: [0, 0.58929, 0, 0, 0.40417], 117: [0, 0.45833, 0, 0, 0.56111], 118: [0, 0.45833, 0.01528, 0, 0.5], 119: [0, 0.45833, 0.01528, 0, 0.74445], 120: [0, 0.45833, 0, 0, 0.5], 121: [0.19444, 0.45833, 0.01528, 0, 0.5], 122: [0, 0.45833, 0, 0, 0.47639], 126: [0.35, 0.34444, 0, 0, 0.55], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.69444, 0, 0, 0.55], 176: [0, 0.69444, 0, 0, 0.73334], 180: [0, 0.69444, 0, 0, 0.55], 184: [0.17014, 0, 0, 0, 0.48889], 305: [0, 0.45833, 0, 0, 0.25556], 567: [0.19444, 0.45833, 0, 0, 0.28611], 710: [0, 0.69444, 0, 0, 0.55], 711: [0, 0.63542, 0, 0, 0.55], 713: [0, 0.63778, 0, 0, 0.55], 728: [0, 0.69444, 0, 0, 0.55], 729: [0, 0.69444, 0, 0, 0.30556], 730: [0, 0.69444, 0, 0, 0.73334], 732: [0, 0.69444, 0, 0, 0.55], 733: [0, 0.69444, 0, 0, 0.55], 915: [0, 0.69444, 0, 0, 0.58056], 916: [0, 0.69444, 0, 0, 0.91667], 920: [0, 0.69444, 0, 0, 0.85556], 923: [0, 0.69444, 0, 0, 0.67223], 926: [0, 0.69444, 0, 0, 0.73334], 928: [0, 0.69444, 0, 0, 0.79445], 931: [0, 0.69444, 0, 0, 0.79445], 933: [0, 0.69444, 0, 0, 0.85556], 934: [0, 0.69444, 0, 0, 0.79445], 936: [0, 0.69444, 0, 0, 0.85556], 937: [0, 0.69444, 0, 0, 0.79445], 8211: [0, 0.45833, 0.03056, 0, 0.55], 8212: [0, 0.45833, 0.03056, 0, 1.10001], 8216: [0, 0.69444, 0, 0, 0.30556], 8217: [0, 0.69444, 0, 0, 0.30556], 8220: [0, 0.69444, 0, 0, 0.55834], 8221: [0, 0.69444, 0, 0, 0.55834] }, "SansSerif-Italic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.05733, 0, 0.31945], 34: [0, 0.69444, 316e-5, 0, 0.5], 35: [0.19444, 0.69444, 0.05087, 0, 0.83334], 36: [0.05556, 0.75, 0.11156, 0, 0.5], 37: [0.05556, 0.75, 0.03126, 0, 0.83334], 38: [0, 0.69444, 0.03058, 0, 0.75834], 39: [0, 0.69444, 0.07816, 0, 0.27778], 40: [0.25, 0.75, 0.13164, 0, 0.38889], 41: [0.25, 0.75, 0.02536, 0, 0.38889], 42: [0, 0.75, 0.11775, 0, 0.5], 43: [0.08333, 0.58333, 0.02536, 0, 0.77778], 44: [0.125, 0.08333, 0, 0, 0.27778], 45: [0, 0.44444, 0.01946, 0, 0.33333], 46: [0, 0.08333, 0, 0, 0.27778], 47: [0.25, 0.75, 0.13164, 0, 0.5], 48: [0, 0.65556, 0.11156, 0, 0.5], 49: [0, 0.65556, 0.11156, 0, 0.5], 50: [0, 0.65556, 0.11156, 0, 0.5], 51: [0, 0.65556, 0.11156, 0, 0.5], 52: [0, 0.65556, 0.11156, 0, 0.5], 53: [0, 0.65556, 0.11156, 0, 0.5], 54: [0, 0.65556, 0.11156, 0, 0.5], 55: [0, 0.65556, 0.11156, 0, 0.5], 56: [0, 0.65556, 0.11156, 0, 0.5], 57: [0, 0.65556, 0.11156, 0, 0.5], 58: [0, 0.44444, 0.02502, 0, 0.27778], 59: [0.125, 0.44444, 0.02502, 0, 0.27778], 61: [-0.13, 0.37, 0.05087, 0, 0.77778], 63: [0, 0.69444, 0.11809, 0, 0.47222], 64: [0, 0.69444, 0.07555, 0, 0.66667], 65: [0, 0.69444, 0, 0, 0.66667], 66: [0, 0.69444, 0.08293, 0, 0.66667], 67: [0, 0.69444, 0.11983, 0, 0.63889], 68: [0, 0.69444, 0.07555, 0, 0.72223], 69: [0, 0.69444, 0.11983, 0, 0.59722], 70: [0, 0.69444, 0.13372, 0, 0.56945], 71: [0, 0.69444, 0.11983, 0, 0.66667], 72: [0, 0.69444, 0.08094, 0, 0.70834], 73: [0, 0.69444, 0.13372, 0, 0.27778], 74: [0, 0.69444, 0.08094, 0, 0.47222], 75: [0, 0.69444, 0.11983, 0, 0.69445], 76: [0, 0.69444, 0, 0, 0.54167], 77: [0, 0.69444, 0.08094, 0, 0.875], 78: [0, 0.69444, 0.08094, 0, 0.70834], 79: [0, 0.69444, 0.07555, 0, 0.73611], 80: [0, 0.69444, 0.08293, 0, 0.63889], 81: [0.125, 0.69444, 0.07555, 0, 0.73611], 82: [0, 0.69444, 0.08293, 0, 0.64584], 83: [0, 0.69444, 0.09205, 0, 0.55556], 84: [0, 0.69444, 0.13372, 0, 0.68056], 85: [0, 0.69444, 0.08094, 0, 0.6875], 86: [0, 0.69444, 0.1615, 0, 0.66667], 87: [0, 0.69444, 0.1615, 0, 0.94445], 88: [0, 0.69444, 0.13372, 0, 0.66667], 89: [0, 0.69444, 0.17261, 0, 0.66667], 90: [0, 0.69444, 0.11983, 0, 0.61111], 91: [0.25, 0.75, 0.15942, 0, 0.28889], 93: [0.25, 0.75, 0.08719, 0, 0.28889], 94: [0, 0.69444, 0.0799, 0, 0.5], 95: [0.35, 0.09444, 0.08616, 0, 0.5], 97: [0, 0.44444, 981e-5, 0, 0.48056], 98: [0, 0.69444, 0.03057, 0, 0.51667], 99: [0, 0.44444, 0.08336, 0, 0.44445], 100: [0, 0.69444, 0.09483, 0, 0.51667], 101: [0, 0.44444, 0.06778, 0, 0.44445], 102: [0, 0.69444, 0.21705, 0, 0.30556], 103: [0.19444, 0.44444, 0.10836, 0, 0.5], 104: [0, 0.69444, 0.01778, 0, 0.51667], 105: [0, 0.67937, 0.09718, 0, 0.23889], 106: [0.19444, 0.67937, 0.09162, 0, 0.26667], 107: [0, 0.69444, 0.08336, 0, 0.48889], 108: [0, 0.69444, 0.09483, 0, 0.23889], 109: [0, 0.44444, 0.01778, 0, 0.79445], 110: [0, 0.44444, 0.01778, 0, 0.51667], 111: [0, 0.44444, 0.06613, 0, 0.5], 112: [0.19444, 0.44444, 0.0389, 0, 0.51667], 113: [0.19444, 0.44444, 0.04169, 0, 0.51667], 114: [0, 0.44444, 0.10836, 0, 0.34167], 115: [0, 0.44444, 0.0778, 0, 0.38333], 116: [0, 0.57143, 0.07225, 0, 0.36111], 117: [0, 0.44444, 0.04169, 0, 0.51667], 118: [0, 0.44444, 0.10836, 0, 0.46111], 119: [0, 0.44444, 0.10836, 0, 0.68334], 120: [0, 0.44444, 0.09169, 0, 0.46111], 121: [0.19444, 0.44444, 0.10836, 0, 0.46111], 122: [0, 0.44444, 0.08752, 0, 0.43472], 126: [0.35, 0.32659, 0.08826, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.67937, 0.06385, 0, 0.5], 176: [0, 0.69444, 0, 0, 0.73752], 184: [0.17014, 0, 0, 0, 0.44445], 305: [0, 0.44444, 0.04169, 0, 0.23889], 567: [0.19444, 0.44444, 0.04169, 0, 0.26667], 710: [0, 0.69444, 0.0799, 0, 0.5], 711: [0, 0.63194, 0.08432, 0, 0.5], 713: [0, 0.60889, 0.08776, 0, 0.5], 714: [0, 0.69444, 0.09205, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0.09483, 0, 0.5], 729: [0, 0.67937, 0.07774, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.73752], 732: [0, 0.67659, 0.08826, 0, 0.5], 733: [0, 0.69444, 0.09205, 0, 0.5], 915: [0, 0.69444, 0.13372, 0, 0.54167], 916: [0, 0.69444, 0, 0, 0.83334], 920: [0, 0.69444, 0.07555, 0, 0.77778], 923: [0, 0.69444, 0, 0, 0.61111], 926: [0, 0.69444, 0.12816, 0, 0.66667], 928: [0, 0.69444, 0.08094, 0, 0.70834], 931: [0, 0.69444, 0.11983, 0, 0.72222], 933: [0, 0.69444, 0.09031, 0, 0.77778], 934: [0, 0.69444, 0.04603, 0, 0.72222], 936: [0, 0.69444, 0.09031, 0, 0.77778], 937: [0, 0.69444, 0.08293, 0, 0.72222], 8211: [0, 0.44444, 0.08616, 0, 0.5], 8212: [0, 0.44444, 0.08616, 0, 1], 8216: [0, 0.69444, 0.07816, 0, 0.27778], 8217: [0, 0.69444, 0.07816, 0, 0.27778], 8220: [0, 0.69444, 0.14205, 0, 0.5], 8221: [0, 0.69444, 316e-5, 0, 0.5] }, "SansSerif-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.31945], 34: [0, 0.69444, 0, 0, 0.5], 35: [0.19444, 0.69444, 0, 0, 0.83334], 36: [0.05556, 0.75, 0, 0, 0.5], 37: [0.05556, 0.75, 0, 0, 0.83334], 38: [0, 0.69444, 0, 0, 0.75834], 39: [0, 0.69444, 0, 0, 0.27778], 40: [0.25, 0.75, 0, 0, 0.38889], 41: [0.25, 0.75, 0, 0, 0.38889], 42: [0, 0.75, 0, 0, 0.5], 43: [0.08333, 0.58333, 0, 0, 0.77778], 44: [0.125, 0.08333, 0, 0, 0.27778], 45: [0, 0.44444, 0, 0, 0.33333], 46: [0, 0.08333, 0, 0, 0.27778], 47: [0.25, 0.75, 0, 0, 0.5], 48: [0, 0.65556, 0, 0, 0.5], 49: [0, 0.65556, 0, 0, 0.5], 50: [0, 0.65556, 0, 0, 0.5], 51: [0, 0.65556, 0, 0, 0.5], 52: [0, 0.65556, 0, 0, 0.5], 53: [0, 0.65556, 0, 0, 0.5], 54: [0, 0.65556, 0, 0, 0.5], 55: [0, 0.65556, 0, 0, 0.5], 56: [0, 0.65556, 0, 0, 0.5], 57: [0, 0.65556, 0, 0, 0.5], 58: [0, 0.44444, 0, 0, 0.27778], 59: [0.125, 0.44444, 0, 0, 0.27778], 61: [-0.13, 0.37, 0, 0, 0.77778], 63: [0, 0.69444, 0, 0, 0.47222], 64: [0, 0.69444, 0, 0, 0.66667], 65: [0, 0.69444, 0, 0, 0.66667], 66: [0, 0.69444, 0, 0, 0.66667], 67: [0, 0.69444, 0, 0, 0.63889], 68: [0, 0.69444, 0, 0, 0.72223], 69: [0, 0.69444, 0, 0, 0.59722], 70: [0, 0.69444, 0, 0, 0.56945], 71: [0, 0.69444, 0, 0, 0.66667], 72: [0, 0.69444, 0, 0, 0.70834], 73: [0, 0.69444, 0, 0, 0.27778], 74: [0, 0.69444, 0, 0, 0.47222], 75: [0, 0.69444, 0, 0, 0.69445], 76: [0, 0.69444, 0, 0, 0.54167], 77: [0, 0.69444, 0, 0, 0.875], 78: [0, 0.69444, 0, 0, 0.70834], 79: [0, 0.69444, 0, 0, 0.73611], 80: [0, 0.69444, 0, 0, 0.63889], 81: [0.125, 0.69444, 0, 0, 0.73611], 82: [0, 0.69444, 0, 0, 0.64584], 83: [0, 0.69444, 0, 0, 0.55556], 84: [0, 0.69444, 0, 0, 0.68056], 85: [0, 0.69444, 0, 0, 0.6875], 86: [0, 0.69444, 0.01389, 0, 0.66667], 87: [0, 0.69444, 0.01389, 0, 0.94445], 88: [0, 0.69444, 0, 0, 0.66667], 89: [0, 0.69444, 0.025, 0, 0.66667], 90: [0, 0.69444, 0, 0, 0.61111], 91: [0.25, 0.75, 0, 0, 0.28889], 93: [0.25, 0.75, 0, 0, 0.28889], 94: [0, 0.69444, 0, 0, 0.5], 95: [0.35, 0.09444, 0.02778, 0, 0.5], 97: [0, 0.44444, 0, 0, 0.48056], 98: [0, 0.69444, 0, 0, 0.51667], 99: [0, 0.44444, 0, 0, 0.44445], 100: [0, 0.69444, 0, 0, 0.51667], 101: [0, 0.44444, 0, 0, 0.44445], 102: [0, 0.69444, 0.06944, 0, 0.30556], 103: [0.19444, 0.44444, 0.01389, 0, 0.5], 104: [0, 0.69444, 0, 0, 0.51667], 105: [0, 0.67937, 0, 0, 0.23889], 106: [0.19444, 0.67937, 0, 0, 0.26667], 107: [0, 0.69444, 0, 0, 0.48889], 108: [0, 0.69444, 0, 0, 0.23889], 109: [0, 0.44444, 0, 0, 0.79445], 110: [0, 0.44444, 0, 0, 0.51667], 111: [0, 0.44444, 0, 0, 0.5], 112: [0.19444, 0.44444, 0, 0, 0.51667], 113: [0.19444, 0.44444, 0, 0, 0.51667], 114: [0, 0.44444, 0.01389, 0, 0.34167], 115: [0, 0.44444, 0, 0, 0.38333], 116: [0, 0.57143, 0, 0, 0.36111], 117: [0, 0.44444, 0, 0, 0.51667], 118: [0, 0.44444, 0.01389, 0, 0.46111], 119: [0, 0.44444, 0.01389, 0, 0.68334], 120: [0, 0.44444, 0, 0, 0.46111], 121: [0.19444, 0.44444, 0.01389, 0, 0.46111], 122: [0, 0.44444, 0, 0, 0.43472], 126: [0.35, 0.32659, 0, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.67937, 0, 0, 0.5], 176: [0, 0.69444, 0, 0, 0.66667], 184: [0.17014, 0, 0, 0, 0.44445], 305: [0, 0.44444, 0, 0, 0.23889], 567: [0.19444, 0.44444, 0, 0, 0.26667], 710: [0, 0.69444, 0, 0, 0.5], 711: [0, 0.63194, 0, 0, 0.5], 713: [0, 0.60889, 0, 0, 0.5], 714: [0, 0.69444, 0, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0, 0, 0.5], 729: [0, 0.67937, 0, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.66667], 732: [0, 0.67659, 0, 0, 0.5], 733: [0, 0.69444, 0, 0, 0.5], 915: [0, 0.69444, 0, 0, 0.54167], 916: [0, 0.69444, 0, 0, 0.83334], 920: [0, 0.69444, 0, 0, 0.77778], 923: [0, 0.69444, 0, 0, 0.61111], 926: [0, 0.69444, 0, 0, 0.66667], 928: [0, 0.69444, 0, 0, 0.70834], 931: [0, 0.69444, 0, 0, 0.72222], 933: [0, 0.69444, 0, 0, 0.77778], 934: [0, 0.69444, 0, 0, 0.72222], 936: [0, 0.69444, 0, 0, 0.77778], 937: [0, 0.69444, 0, 0, 0.72222], 8211: [0, 0.44444, 0.02778, 0, 0.5], 8212: [0, 0.44444, 0.02778, 0, 1], 8216: [0, 0.69444, 0, 0, 0.27778], 8217: [0, 0.69444, 0, 0, 0.27778], 8220: [0, 0.69444, 0, 0, 0.5], 8221: [0, 0.69444, 0, 0, 0.5] }, "Script-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.7, 0.22925, 0, 0.80253], 66: [0, 0.7, 0.04087, 0, 0.90757], 67: [0, 0.7, 0.1689, 0, 0.66619], 68: [0, 0.7, 0.09371, 0, 0.77443], 69: [0, 0.7, 0.18583, 0, 0.56162], 70: [0, 0.7, 0.13634, 0, 0.89544], 71: [0, 0.7, 0.17322, 0, 0.60961], 72: [0, 0.7, 0.29694, 0, 0.96919], 73: [0, 0.7, 0.19189, 0, 0.80907], 74: [0.27778, 0.7, 0.19189, 0, 1.05159], 75: [0, 0.7, 0.31259, 0, 0.91364], 76: [0, 0.7, 0.19189, 0, 0.87373], 77: [0, 0.7, 0.15981, 0, 1.08031], 78: [0, 0.7, 0.3525, 0, 0.9015], 79: [0, 0.7, 0.08078, 0, 0.73787], 80: [0, 0.7, 0.08078, 0, 1.01262], 81: [0, 0.7, 0.03305, 0, 0.88282], 82: [0, 0.7, 0.06259, 0, 0.85], 83: [0, 0.7, 0.19189, 0, 0.86767], 84: [0, 0.7, 0.29087, 0, 0.74697], 85: [0, 0.7, 0.25815, 0, 0.79996], 86: [0, 0.7, 0.27523, 0, 0.62204], 87: [0, 0.7, 0.27523, 0, 0.80532], 88: [0, 0.7, 0.26006, 0, 0.94445], 89: [0, 0.7, 0.2939, 0, 0.70961], 90: [0, 0.7, 0.24037, 0, 0.8212], 160: [0, 0, 0, 0, 0.25] }, "Size1-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.35001, 0.85, 0, 0, 0.45834], 41: [0.35001, 0.85, 0, 0, 0.45834], 47: [0.35001, 0.85, 0, 0, 0.57778], 91: [0.35001, 0.85, 0, 0, 0.41667], 92: [0.35001, 0.85, 0, 0, 0.57778], 93: [0.35001, 0.85, 0, 0, 0.41667], 123: [0.35001, 0.85, 0, 0, 0.58334], 125: [0.35001, 0.85, 0, 0, 0.58334], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.72222, 0, 0, 0.55556], 732: [0, 0.72222, 0, 0, 0.55556], 770: [0, 0.72222, 0, 0, 0.55556], 771: [0, 0.72222, 0, 0, 0.55556], 8214: [-99e-5, 0.601, 0, 0, 0.77778], 8593: [1e-5, 0.6, 0, 0, 0.66667], 8595: [1e-5, 0.6, 0, 0, 0.66667], 8657: [1e-5, 0.6, 0, 0, 0.77778], 8659: [1e-5, 0.6, 0, 0, 0.77778], 8719: [0.25001, 0.75, 0, 0, 0.94445], 8720: [0.25001, 0.75, 0, 0, 0.94445], 8721: [0.25001, 0.75, 0, 0, 1.05556], 8730: [0.35001, 0.85, 0, 0, 1], 8739: [-599e-5, 0.606, 0, 0, 0.33333], 8741: [-599e-5, 0.606, 0, 0, 0.55556], 8747: [0.30612, 0.805, 0.19445, 0, 0.47222], 8748: [0.306, 0.805, 0.19445, 0, 0.47222], 8749: [0.306, 0.805, 0.19445, 0, 0.47222], 8750: [0.30612, 0.805, 0.19445, 0, 0.47222], 8896: [0.25001, 0.75, 0, 0, 0.83334], 8897: [0.25001, 0.75, 0, 0, 0.83334], 8898: [0.25001, 0.75, 0, 0, 0.83334], 8899: [0.25001, 0.75, 0, 0, 0.83334], 8968: [0.35001, 0.85, 0, 0, 0.47222], 8969: [0.35001, 0.85, 0, 0, 0.47222], 8970: [0.35001, 0.85, 0, 0, 0.47222], 8971: [0.35001, 0.85, 0, 0, 0.47222], 9168: [-99e-5, 0.601, 0, 0, 0.66667], 10216: [0.35001, 0.85, 0, 0, 0.47222], 10217: [0.35001, 0.85, 0, 0, 0.47222], 10752: [0.25001, 0.75, 0, 0, 1.11111], 10753: [0.25001, 0.75, 0, 0, 1.11111], 10754: [0.25001, 0.75, 0, 0, 1.11111], 10756: [0.25001, 0.75, 0, 0, 0.83334], 10758: [0.25001, 0.75, 0, 0, 0.83334] }, "Size2-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.65002, 1.15, 0, 0, 0.59722], 41: [0.65002, 1.15, 0, 0, 0.59722], 47: [0.65002, 1.15, 0, 0, 0.81111], 91: [0.65002, 1.15, 0, 0, 0.47222], 92: [0.65002, 1.15, 0, 0, 0.81111], 93: [0.65002, 1.15, 0, 0, 0.47222], 123: [0.65002, 1.15, 0, 0, 0.66667], 125: [0.65002, 1.15, 0, 0, 0.66667], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.75, 0, 0, 1], 732: [0, 0.75, 0, 0, 1], 770: [0, 0.75, 0, 0, 1], 771: [0, 0.75, 0, 0, 1], 8719: [0.55001, 1.05, 0, 0, 1.27778], 8720: [0.55001, 1.05, 0, 0, 1.27778], 8721: [0.55001, 1.05, 0, 0, 1.44445], 8730: [0.65002, 1.15, 0, 0, 1], 8747: [0.86225, 1.36, 0.44445, 0, 0.55556], 8748: [0.862, 1.36, 0.44445, 0, 0.55556], 8749: [0.862, 1.36, 0.44445, 0, 0.55556], 8750: [0.86225, 1.36, 0.44445, 0, 0.55556], 8896: [0.55001, 1.05, 0, 0, 1.11111], 8897: [0.55001, 1.05, 0, 0, 1.11111], 8898: [0.55001, 1.05, 0, 0, 1.11111], 8899: [0.55001, 1.05, 0, 0, 1.11111], 8968: [0.65002, 1.15, 0, 0, 0.52778], 8969: [0.65002, 1.15, 0, 0, 0.52778], 8970: [0.65002, 1.15, 0, 0, 0.52778], 8971: [0.65002, 1.15, 0, 0, 0.52778], 10216: [0.65002, 1.15, 0, 0, 0.61111], 10217: [0.65002, 1.15, 0, 0, 0.61111], 10752: [0.55001, 1.05, 0, 0, 1.51112], 10753: [0.55001, 1.05, 0, 0, 1.51112], 10754: [0.55001, 1.05, 0, 0, 1.51112], 10756: [0.55001, 1.05, 0, 0, 1.11111], 10758: [0.55001, 1.05, 0, 0, 1.11111] }, "Size3-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.95003, 1.45, 0, 0, 0.73611], 41: [0.95003, 1.45, 0, 0, 0.73611], 47: [0.95003, 1.45, 0, 0, 1.04445], 91: [0.95003, 1.45, 0, 0, 0.52778], 92: [0.95003, 1.45, 0, 0, 1.04445], 93: [0.95003, 1.45, 0, 0, 0.52778], 123: [0.95003, 1.45, 0, 0, 0.75], 125: [0.95003, 1.45, 0, 0, 0.75], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.75, 0, 0, 1.44445], 732: [0, 0.75, 0, 0, 1.44445], 770: [0, 0.75, 0, 0, 1.44445], 771: [0, 0.75, 0, 0, 1.44445], 8730: [0.95003, 1.45, 0, 0, 1], 8968: [0.95003, 1.45, 0, 0, 0.58334], 8969: [0.95003, 1.45, 0, 0, 0.58334], 8970: [0.95003, 1.45, 0, 0, 0.58334], 8971: [0.95003, 1.45, 0, 0, 0.58334], 10216: [0.95003, 1.45, 0, 0, 0.75], 10217: [0.95003, 1.45, 0, 0, 0.75] }, "Size4-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [1.25003, 1.75, 0, 0, 0.79167], 41: [1.25003, 1.75, 0, 0, 0.79167], 47: [1.25003, 1.75, 0, 0, 1.27778], 91: [1.25003, 1.75, 0, 0, 0.58334], 92: [1.25003, 1.75, 0, 0, 1.27778], 93: [1.25003, 1.75, 0, 0, 0.58334], 123: [1.25003, 1.75, 0, 0, 0.80556], 125: [1.25003, 1.75, 0, 0, 0.80556], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.825, 0, 0, 1.8889], 732: [0, 0.825, 0, 0, 1.8889], 770: [0, 0.825, 0, 0, 1.8889], 771: [0, 0.825, 0, 0, 1.8889], 8730: [1.25003, 1.75, 0, 0, 1], 8968: [1.25003, 1.75, 0, 0, 0.63889], 8969: [1.25003, 1.75, 0, 0, 0.63889], 8970: [1.25003, 1.75, 0, 0, 0.63889], 8971: [1.25003, 1.75, 0, 0, 0.63889], 9115: [0.64502, 1.155, 0, 0, 0.875], 9116: [1e-5, 0.6, 0, 0, 0.875], 9117: [0.64502, 1.155, 0, 0, 0.875], 9118: [0.64502, 1.155, 0, 0, 0.875], 9119: [1e-5, 0.6, 0, 0, 0.875], 9120: [0.64502, 1.155, 0, 0, 0.875], 9121: [0.64502, 1.155, 0, 0, 0.66667], 9122: [-99e-5, 0.601, 0, 0, 0.66667], 9123: [0.64502, 1.155, 0, 0, 0.66667], 9124: [0.64502, 1.155, 0, 0, 0.66667], 9125: [-99e-5, 0.601, 0, 0, 0.66667], 9126: [0.64502, 1.155, 0, 0, 0.66667], 9127: [1e-5, 0.9, 0, 0, 0.88889], 9128: [0.65002, 1.15, 0, 0, 0.88889], 9129: [0.90001, 0, 0, 0, 0.88889], 9130: [0, 0.3, 0, 0, 0.88889], 9131: [1e-5, 0.9, 0, 0, 0.88889], 9132: [0.65002, 1.15, 0, 0, 0.88889], 9133: [0.90001, 0, 0, 0, 0.88889], 9143: [0.88502, 0.915, 0, 0, 1.05556], 10216: [1.25003, 1.75, 0, 0, 0.80556], 10217: [1.25003, 1.75, 0, 0, 0.80556], 57344: [-499e-5, 0.605, 0, 0, 1.05556], 57345: [-499e-5, 0.605, 0, 0, 1.05556], 57680: [0, 0.12, 0, 0, 0.45], 57681: [0, 0.12, 0, 0, 0.45], 57682: [0, 0.12, 0, 0, 0.45], 57683: [0, 0.12, 0, 0, 0.45] }, "Typewriter-Regular": { 32: [0, 0, 0, 0, 0.525], 33: [0, 0.61111, 0, 0, 0.525], 34: [0, 0.61111, 0, 0, 0.525], 35: [0, 0.61111, 0, 0, 0.525], 36: [0.08333, 0.69444, 0, 0, 0.525], 37: [0.08333, 0.69444, 0, 0, 0.525], 38: [0, 0.61111, 0, 0, 0.525], 39: [0, 0.61111, 0, 0, 0.525], 40: [0.08333, 0.69444, 0, 0, 0.525], 41: [0.08333, 0.69444, 0, 0, 0.525], 42: [0, 0.52083, 0, 0, 0.525], 43: [-0.08056, 0.53055, 0, 0, 0.525], 44: [0.13889, 0.125, 0, 0, 0.525], 45: [-0.08056, 0.53055, 0, 0, 0.525], 46: [0, 0.125, 0, 0, 0.525], 47: [0.08333, 0.69444, 0, 0, 0.525], 48: [0, 0.61111, 0, 0, 0.525], 49: [0, 0.61111, 0, 0, 0.525], 50: [0, 0.61111, 0, 0, 0.525], 51: [0, 0.61111, 0, 0, 0.525], 52: [0, 0.61111, 0, 0, 0.525], 53: [0, 0.61111, 0, 0, 0.525], 54: [0, 0.61111, 0, 0, 0.525], 55: [0, 0.61111, 0, 0, 0.525], 56: [0, 0.61111, 0, 0, 0.525], 57: [0, 0.61111, 0, 0, 0.525], 58: [0, 0.43056, 0, 0, 0.525], 59: [0.13889, 0.43056, 0, 0, 0.525], 60: [-0.05556, 0.55556, 0, 0, 0.525], 61: [-0.19549, 0.41562, 0, 0, 0.525], 62: [-0.05556, 0.55556, 0, 0, 0.525], 63: [0, 0.61111, 0, 0, 0.525], 64: [0, 0.61111, 0, 0, 0.525], 65: [0, 0.61111, 0, 0, 0.525], 66: [0, 0.61111, 0, 0, 0.525], 67: [0, 0.61111, 0, 0, 0.525], 68: [0, 0.61111, 0, 0, 0.525], 69: [0, 0.61111, 0, 0, 0.525], 70: [0, 0.61111, 0, 0, 0.525], 71: [0, 0.61111, 0, 0, 0.525], 72: [0, 0.61111, 0, 0, 0.525], 73: [0, 0.61111, 0, 0, 0.525], 74: [0, 0.61111, 0, 0, 0.525], 75: [0, 0.61111, 0, 0, 0.525], 76: [0, 0.61111, 0, 0, 0.525], 77: [0, 0.61111, 0, 0, 0.525], 78: [0, 0.61111, 0, 0, 0.525], 79: [0, 0.61111, 0, 0, 0.525], 80: [0, 0.61111, 0, 0, 0.525], 81: [0.13889, 0.61111, 0, 0, 0.525], 82: [0, 0.61111, 0, 0, 0.525], 83: [0, 0.61111, 0, 0, 0.525], 84: [0, 0.61111, 0, 0, 0.525], 85: [0, 0.61111, 0, 0, 0.525], 86: [0, 0.61111, 0, 0, 0.525], 87: [0, 0.61111, 0, 0, 0.525], 88: [0, 0.61111, 0, 0, 0.525], 89: [0, 0.61111, 0, 0, 0.525], 90: [0, 0.61111, 0, 0, 0.525], 91: [0.08333, 0.69444, 0, 0, 0.525], 92: [0.08333, 0.69444, 0, 0, 0.525], 93: [0.08333, 0.69444, 0, 0, 0.525], 94: [0, 0.61111, 0, 0, 0.525], 95: [0.09514, 0, 0, 0, 0.525], 96: [0, 0.61111, 0, 0, 0.525], 97: [0, 0.43056, 0, 0, 0.525], 98: [0, 0.61111, 0, 0, 0.525], 99: [0, 0.43056, 0, 0, 0.525], 100: [0, 0.61111, 0, 0, 0.525], 101: [0, 0.43056, 0, 0, 0.525], 102: [0, 0.61111, 0, 0, 0.525], 103: [0.22222, 0.43056, 0, 0, 0.525], 104: [0, 0.61111, 0, 0, 0.525], 105: [0, 0.61111, 0, 0, 0.525], 106: [0.22222, 0.61111, 0, 0, 0.525], 107: [0, 0.61111, 0, 0, 0.525], 108: [0, 0.61111, 0, 0, 0.525], 109: [0, 0.43056, 0, 0, 0.525], 110: [0, 0.43056, 0, 0, 0.525], 111: [0, 0.43056, 0, 0, 0.525], 112: [0.22222, 0.43056, 0, 0, 0.525], 113: [0.22222, 0.43056, 0, 0, 0.525], 114: [0, 0.43056, 0, 0, 0.525], 115: [0, 0.43056, 0, 0, 0.525], 116: [0, 0.55358, 0, 0, 0.525], 117: [0, 0.43056, 0, 0, 0.525], 118: [0, 0.43056, 0, 0, 0.525], 119: [0, 0.43056, 0, 0, 0.525], 120: [0, 0.43056, 0, 0, 0.525], 121: [0.22222, 0.43056, 0, 0, 0.525], 122: [0, 0.43056, 0, 0, 0.525], 123: [0.08333, 0.69444, 0, 0, 0.525], 124: [0.08333, 0.69444, 0, 0, 0.525], 125: [0.08333, 0.69444, 0, 0, 0.525], 126: [0, 0.61111, 0, 0, 0.525], 127: [0, 0.61111, 0, 0, 0.525], 160: [0, 0, 0, 0, 0.525], 176: [0, 0.61111, 0, 0, 0.525], 184: [0.19445, 0, 0, 0, 0.525], 305: [0, 0.43056, 0, 0, 0.525], 567: [0.22222, 0.43056, 0, 0, 0.525], 711: [0, 0.56597, 0, 0, 0.525], 713: [0, 0.56555, 0, 0, 0.525], 714: [0, 0.61111, 0, 0, 0.525], 715: [0, 0.61111, 0, 0, 0.525], 728: [0, 0.61111, 0, 0, 0.525], 730: [0, 0.61111, 0, 0, 0.525], 770: [0, 0.61111, 0, 0, 0.525], 771: [0, 0.61111, 0, 0, 0.525], 776: [0, 0.61111, 0, 0, 0.525], 915: [0, 0.61111, 0, 0, 0.525], 916: [0, 0.61111, 0, 0, 0.525], 920: [0, 0.61111, 0, 0, 0.525], 923: [0, 0.61111, 0, 0, 0.525], 926: [0, 0.61111, 0, 0, 0.525], 928: [0, 0.61111, 0, 0, 0.525], 931: [0, 0.61111, 0, 0, 0.525], 933: [0, 0.61111, 0, 0, 0.525], 934: [0, 0.61111, 0, 0, 0.525], 936: [0, 0.61111, 0, 0, 0.525], 937: [0, 0.61111, 0, 0, 0.525], 8216: [0, 0.61111, 0, 0, 0.525], 8217: [0, 0.61111, 0, 0, 0.525], 8242: [0, 0.61111, 0, 0, 0.525], 9251: [0.11111, 0.21944, 0, 0, 0.525] } };
        const O0 = { slant: [0.25, 0.25, 0.25], space: [0, 0, 0], stretch: [0, 0, 0], shrink: [0, 0, 0], xHeight: [0.431, 0.431, 0.431], quad: [1, 1.171, 1.472], extraSpace: [0, 0, 0], num1: [0.677, 0.732, 0.925], num2: [0.394, 0.384, 0.387], num3: [0.444, 0.471, 0.504], denom1: [0.686, 0.752, 1.025], denom2: [0.345, 0.344, 0.532], sup1: [0.413, 0.503, 0.504], sup2: [0.363, 0.431, 0.404], sup3: [0.289, 0.286, 0.294], sub1: [0.15, 0.143, 0.2], sub2: [0.247, 0.286, 0.4], supDrop: [0.386, 0.353, 0.494], subDrop: [0.05, 0.071, 0.1], delim1: [2.39, 1.7, 1.98], delim2: [1.01, 1.157, 1.42], axisHeight: [0.25, 0.25, 0.25], defaultRuleThickness: [0.04, 0.049, 0.049], bigOpSpacing1: [0.111, 0.111, 0.111], bigOpSpacing2: [0.166, 0.166, 0.166], bigOpSpacing3: [0.2, 0.2, 0.2], bigOpSpacing4: [0.6, 0.611, 0.611], bigOpSpacing5: [0.1, 0.143, 0.143], sqrtRuleThickness: [0.04, 0.04, 0.04], ptPerEm: [10, 10, 10], doubleRuleSep: [0.2, 0.2, 0.2], arrayRuleWidth: [0.04, 0.04, 0.04], fboxsep: [0.3, 0.3, 0.3], fboxrule: [0.04, 0.04, 0.04] }, Zo = { \u00C5: "A", \u00D0: "D", \u00DE: "o", \u00E5: "a", \u00F0: "d", \u00FE: "o", \u0410: "A", \u0411: "B", \u0412: "B", \u0413: "F", \u0414: "A", \u0415: "E", \u0416: "K", \u0417: "3", \u0418: "N", \u0419: "N", \u041A: "K", \u041B: "N", \u041C: "M", \u041D: "H", \u041E: "O", \u041F: "N", \u0420: "P", \u0421: "C", \u0422: "T", \u0423: "y", \u0424: "O", \u0425: "X", \u0426: "U", \u0427: "h", \u0428: "W", \u0429: "W", \u042A: "B", \u042B: "X", \u042C: "B", \u042D: "3", \u042E: "X", \u042F: "R", \u0430: "a", \u0431: "b", \u0432: "a", \u0433: "r", \u0434: "y", \u0435: "e", \u0436: "m", \u0437: "e", \u0438: "n", \u0439: "n", \u043A: "n", \u043B: "n", \u043C: "m", \u043D: "n", \u043E: "o", \u043F: "n", \u0440: "p", \u0441: "c", \u0442: "o", \u0443: "y", \u0444: "b", \u0445: "x", \u0446: "n", \u0447: "n", \u0448: "w", \u0449: "w", \u044A: "a", \u044B: "m", \u044C: "a", \u044D: "e", \u044E: "m", \u044F: "r" };
        function dh(o, s) {
          Ot[o] = s;
        }
        function $r(o, s, a) {
          if (!Ot[s])
            throw new Error("Font metrics not found for font: " + s + ".");
          let c = o.charCodeAt(0), u = Ot[s][c];
          if (!u && o[0] in Zo && (c = Zo[o[0]].charCodeAt(0), u = Ot[s][c]), !u && a === "text" && ve(c) && (u = Ot[s][77]), u)
            return { depth: u[0], height: u[1], italic: u[2], skew: u[3], width: u[4] };
        }
        const Fr = {};
        function ph(o) {
          let s;
          if (o >= 5 ? s = 0 : o >= 3 ? s = 1 : s = 2, !Fr[s]) {
            const a = Fr[s] = { cssEmPerMu: O0.quad[s] / 18 };
            for (const c in O0)
              O0.hasOwnProperty(c) && (a[c] = O0[c][s]);
          }
          return Fr[s];
        }
        const mh = [[1, 1, 1], [2, 1, 1], [3, 1, 1], [4, 2, 1], [5, 2, 1], [6, 3, 1], [7, 4, 2], [8, 6, 3], [9, 7, 6], [10, 8, 7], [11, 10, 9]], Jo = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.44, 1.728, 2.074, 2.488], ei = function(o, s) {
          return s.size < 2 ? o : mh[o - 1][s.size - 1];
        };
        class $t {
          constructor(s) {
            this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = s.style, this.color = s.color, this.size = s.size || $t.BASESIZE, this.textSize = s.textSize || this.size, this.phantom = !!s.phantom, this.font = s.font || "", this.fontFamily = s.fontFamily || "", this.fontWeight = s.fontWeight || "", this.fontShape = s.fontShape || "", this.sizeMultiplier = Jo[this.size - 1], this.maxSize = s.maxSize, this.minRuleThickness = s.minRuleThickness, this._fontMetrics = void 0;
          }
          extend(s) {
            const a = { style: this.style, size: this.size, textSize: this.textSize, color: this.color, phantom: this.phantom, font: this.font, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontShape: this.fontShape, maxSize: this.maxSize, minRuleThickness: this.minRuleThickness };
            for (const c in s)
              s.hasOwnProperty(c) && (a[c] = s[c]);
            return new $t(a);
          }
          havingStyle(s) {
            return this.style === s ? this : this.extend({ style: s, size: ei(this.textSize, s) });
          }
          havingCrampedStyle() {
            return this.havingStyle(this.style.cramp());
          }
          havingSize(s) {
            return this.size === s && this.textSize === s ? this : this.extend({ style: this.style.text(), size: s, textSize: s, sizeMultiplier: Jo[s - 1] });
          }
          havingBaseStyle(s) {
            s = s || this.style.text();
            const a = ei($t.BASESIZE, s);
            return this.size === a && this.textSize === $t.BASESIZE && this.style === s ? this : this.extend({ style: s, size: a });
          }
          havingBaseSizing() {
            let s;
            switch (this.style.id) {
              case 4:
              case 5:
                s = 3;
                break;
              case 6:
              case 7:
                s = 1;
                break;
              default:
                s = 6;
            }
            return this.extend({ style: this.style.text(), size: s });
          }
          withColor(s) {
            return this.extend({ color: s });
          }
          withPhantom() {
            return this.extend({ phantom: true });
          }
          withFont(s) {
            return this.extend({ font: s });
          }
          withTextFontFamily(s) {
            return this.extend({ fontFamily: s, font: "" });
          }
          withTextFontWeight(s) {
            return this.extend({ fontWeight: s, font: "" });
          }
          withTextFontShape(s) {
            return this.extend({ fontShape: s, font: "" });
          }
          sizingClasses(s) {
            return s.size !== this.size ? ["sizing", "reset-size" + s.size, "size" + this.size] : [];
          }
          baseSizingClasses() {
            return this.size !== $t.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + $t.BASESIZE] : [];
          }
          fontMetrics() {
            return this._fontMetrics || (this._fontMetrics = ph(this.size)), this._fontMetrics;
          }
          getColor() {
            return this.phantom ? "transparent" : this.color;
          }
        }
        $t.BASESIZE = 6;
        var fh = $t;
        const Hr = { pt: 1, mm: 7227 / 2540, cm: 7227 / 254, in: 72.27, bp: 803 / 800, pc: 12, dd: 1238 / 1157, cc: 14856 / 1157, nd: 685 / 642, nc: 1370 / 107, sp: 1 / 65536, px: 803 / 800 }, gh = { ex: true, em: true, mu: true }, ti = function(o) {
          return typeof o != "string" && (o = o.unit), o in Hr || o in gh || o === "ex";
        }, Fe = function(o, s) {
          let a;
          if (o.unit in Hr)
            a = Hr[o.unit] / s.fontMetrics().ptPerEm / s.sizeMultiplier;
          else if (o.unit === "mu")
            a = s.fontMetrics().cssEmPerMu;
          else {
            let c;
            if (s.style.isTight() ? c = s.havingStyle(s.style.text()) : c = s, o.unit === "ex")
              a = c.fontMetrics().xHeight;
            else if (o.unit === "em")
              a = c.fontMetrics().quad;
            else
              throw new l("Invalid unit: '" + o.unit + "'");
            c !== s && (a *= c.sizeMultiplier / s.sizeMultiplier);
          }
          return Math.min(o.number * a, s.maxSize);
        }, J = function(o) {
          return +o.toFixed(4) + "em";
        }, Qt = function(o) {
          return o.filter((s) => s).join(" ");
        }, ni = function(o, s, a) {
          if (this.classes = o || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = a || {}, s) {
            s.style.isTight() && this.classes.push("mtight");
            const c = s.getColor();
            c && (this.style.color = c);
          }
        }, ri = function(o) {
          const s = document.createElement(o);
          s.className = Qt(this.classes);
          for (const a in this.style)
            this.style.hasOwnProperty(a) && (s.style[a] = this.style[a]);
          for (const a in this.attributes)
            this.attributes.hasOwnProperty(a) && s.setAttribute(a, this.attributes[a]);
          for (let a = 0; a < this.children.length; a++)
            s.appendChild(this.children[a].toNode());
          return s;
        }, yh = /[\s"'>/=\x00-\x1f]/, si = function(o) {
          let s = "<" + o;
          this.classes.length && (s += ' class="' + C.escape(Qt(this.classes)) + '"');
          let a = "";
          for (const c in this.style)
            this.style.hasOwnProperty(c) && (a += C.hyphenate(c) + ":" + this.style[c] + ";");
          a && (s += ' style="' + C.escape(a) + '"');
          for (const c in this.attributes)
            if (this.attributes.hasOwnProperty(c)) {
              if (yh.test(c))
                throw new l("Invalid attribute name '" + c + "'");
              s += " " + c + '="' + C.escape(this.attributes[c]) + '"';
            }
          s += ">";
          for (let c = 0; c < this.children.length; c++)
            s += this.children[c].toMarkup();
          return s += "</" + o + ">", s;
        };
        class Qn {
          constructor(s, a, c, u) {
            this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, ni.call(this, s, c, u), this.children = a || [];
          }
          setAttribute(s, a) {
            this.attributes[s] = a;
          }
          hasClass(s) {
            return C.contains(this.classes, s);
          }
          toNode() {
            return ri.call(this, "span");
          }
          toMarkup() {
            return si.call(this, "span");
          }
        }
        class Vr {
          constructor(s, a, c, u) {
            this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, ni.call(this, a, u), this.children = c || [], this.setAttribute("href", s);
          }
          setAttribute(s, a) {
            this.attributes[s] = a;
          }
          hasClass(s) {
            return C.contains(this.classes, s);
          }
          toNode() {
            return ri.call(this, "a");
          }
          toMarkup() {
            return si.call(this, "a");
          }
        }
        class bh {
          constructor(s, a, c) {
            this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = a, this.src = s, this.classes = ["mord"], this.style = c;
          }
          hasClass(s) {
            return C.contains(this.classes, s);
          }
          toNode() {
            const s = document.createElement("img");
            s.src = this.src, s.alt = this.alt, s.className = "mord";
            for (const a in this.style)
              this.style.hasOwnProperty(a) && (s.style[a] = this.style[a]);
            return s;
          }
          toMarkup() {
            let s = '<img src="' + C.escape(this.src) + '"' + (' alt="' + C.escape(this.alt) + '"'), a = "";
            for (const c in this.style)
              this.style.hasOwnProperty(c) && (a += C.hyphenate(c) + ":" + this.style[c] + ";");
            return a && (s += ' style="' + C.escape(a) + '"'), s += "'/>", s;
          }
        }
        const xh = { \u00EE: "\u0131\u0302", \u00EF: "\u0131\u0308", \u00ED: "\u0131\u0301", \u00EC: "\u0131\u0300" };
        class xt {
          constructor(s, a, c, u, f, b, w, A) {
            this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = s, this.height = a || 0, this.depth = c || 0, this.italic = u || 0, this.skew = f || 0, this.width = b || 0, this.classes = w || [], this.style = A || {}, this.maxFontSize = 0;
            const O = R(this.text.charCodeAt(0));
            O && this.classes.push(O + "_fallback"), /[îïíì]/.test(this.text) && (this.text = xh[this.text]);
          }
          hasClass(s) {
            return C.contains(this.classes, s);
          }
          toNode() {
            const s = document.createTextNode(this.text);
            let a = null;
            this.italic > 0 && (a = document.createElement("span"), a.style.marginRight = J(this.italic)), this.classes.length > 0 && (a = a || document.createElement("span"), a.className = Qt(this.classes));
            for (const c in this.style)
              this.style.hasOwnProperty(c) && (a = a || document.createElement("span"), a.style[c] = this.style[c]);
            return a ? (a.appendChild(s), a) : s;
          }
          toMarkup() {
            let s = false, a = "<span";
            this.classes.length && (s = true, a += ' class="', a += C.escape(Qt(this.classes)), a += '"');
            let c = "";
            this.italic > 0 && (c += "margin-right:" + this.italic + "em;");
            for (const f in this.style)
              this.style.hasOwnProperty(f) && (c += C.hyphenate(f) + ":" + this.style[f] + ";");
            c && (s = true, a += ' style="' + C.escape(c) + '"');
            const u = C.escape(this.text);
            return s ? (a += ">", a += u, a += "</span>", a) : u;
          }
        }
        class Ft {
          constructor(s, a) {
            this.children = void 0, this.attributes = void 0, this.children = s || [], this.attributes = a || {};
          }
          toNode() {
            const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            for (const a in this.attributes)
              Object.prototype.hasOwnProperty.call(this.attributes, a) && s.setAttribute(a, this.attributes[a]);
            for (let a = 0; a < this.children.length; a++)
              s.appendChild(this.children[a].toNode());
            return s;
          }
          toMarkup() {
            let s = '<svg xmlns="http://www.w3.org/2000/svg"';
            for (const a in this.attributes)
              Object.prototype.hasOwnProperty.call(this.attributes, a) && (s += " " + a + '="' + C.escape(this.attributes[a]) + '"');
            s += ">";
            for (let a = 0; a < this.children.length; a++)
              s += this.children[a].toMarkup();
            return s += "</svg>", s;
          }
        }
        class Zt {
          constructor(s, a) {
            this.pathName = void 0, this.alternate = void 0, this.pathName = s, this.alternate = a;
          }
          toNode() {
            const s = document.createElementNS("http://www.w3.org/2000/svg", "path");
            return this.alternate ? s.setAttribute("d", this.alternate) : s.setAttribute("d", Qo[this.pathName]), s;
          }
          toMarkup() {
            return this.alternate ? '<path d="' + C.escape(this.alternate) + '"/>' : '<path d="' + C.escape(Qo[this.pathName]) + '"/>';
          }
        }
        class jr {
          constructor(s) {
            this.attributes = void 0, this.attributes = s || {};
          }
          toNode() {
            const s = document.createElementNS("http://www.w3.org/2000/svg", "line");
            for (const a in this.attributes)
              Object.prototype.hasOwnProperty.call(this.attributes, a) && s.setAttribute(a, this.attributes[a]);
            return s;
          }
          toMarkup() {
            let s = "<line";
            for (const a in this.attributes)
              Object.prototype.hasOwnProperty.call(this.attributes, a) && (s += " " + a + '="' + C.escape(this.attributes[a]) + '"');
            return s += "/>", s;
          }
        }
        function oi(o) {
          if (o instanceof xt)
            return o;
          throw new Error("Expected symbolNode but got " + String(o) + ".");
        }
        function wh(o) {
          if (o instanceof Qn)
            return o;
          throw new Error("Expected span<HtmlDomNode> but got " + String(o) + ".");
        }
        const vh = { bin: 1, close: 1, inner: 1, open: 1, punct: 1, rel: 1 }, kh = { "accent-token": 1, mathord: 1, "op-token": 1, spacing: 1, textord: 1 }, _0 = { math: {}, text: {} };
        var He = _0;
        function d(o, s, a, c, u, f) {
          _0[o][u] = { font: s, group: a, replace: c }, f && c && (_0[o][c] = _0[o][u]);
        }
        const g = "math", K = "text", x = "main", E = "ams", Pe = "accent-token", re = "bin", it = "close", Tn = "inner", ce = "mathord", Ze = "op-token", ft = "open", B0 = "punct", I = "rel", Ht = "spacing", _ = "textord";
        d(g, x, I, "\u2261", "\\equiv", true), d(g, x, I, "\u227A", "\\prec", true), d(g, x, I, "\u227B", "\\succ", true), d(g, x, I, "\u223C", "\\sim", true), d(g, x, I, "\u22A5", "\\perp"), d(g, x, I, "\u2AAF", "\\preceq", true), d(g, x, I, "\u2AB0", "\\succeq", true), d(g, x, I, "\u2243", "\\simeq", true), d(g, x, I, "\u2223", "\\mid", true), d(g, x, I, "\u226A", "\\ll", true), d(g, x, I, "\u226B", "\\gg", true), d(g, x, I, "\u224D", "\\asymp", true), d(g, x, I, "\u2225", "\\parallel"), d(g, x, I, "\u22C8", "\\bowtie", true), d(g, x, I, "\u2323", "\\smile", true), d(g, x, I, "\u2291", "\\sqsubseteq", true), d(g, x, I, "\u2292", "\\sqsupseteq", true), d(g, x, I, "\u2250", "\\doteq", true), d(g, x, I, "\u2322", "\\frown", true), d(g, x, I, "\u220B", "\\ni", true), d(g, x, I, "\u221D", "\\propto", true), d(g, x, I, "\u22A2", "\\vdash", true), d(g, x, I, "\u22A3", "\\dashv", true), d(g, x, I, "\u220B", "\\owns"), d(g, x, B0, ".", "\\ldotp"), d(g, x, B0, "\u22C5", "\\cdotp"), d(g, x, _, "#", "\\#"), d(K, x, _, "#", "\\#"), d(g, x, _, "&", "\\&"), d(K, x, _, "&", "\\&"), d(g, x, _, "\u2135", "\\aleph", true), d(g, x, _, "\u2200", "\\forall", true), d(g, x, _, "\u210F", "\\hbar", true), d(g, x, _, "\u2203", "\\exists", true), d(g, x, _, "\u2207", "\\nabla", true), d(g, x, _, "\u266D", "\\flat", true), d(g, x, _, "\u2113", "\\ell", true), d(g, x, _, "\u266E", "\\natural", true), d(g, x, _, "\u2663", "\\clubsuit", true), d(g, x, _, "\u2118", "\\wp", true), d(g, x, _, "\u266F", "\\sharp", true), d(g, x, _, "\u2662", "\\diamondsuit", true), d(g, x, _, "\u211C", "\\Re", true), d(g, x, _, "\u2661", "\\heartsuit", true), d(g, x, _, "\u2111", "\\Im", true), d(g, x, _, "\u2660", "\\spadesuit", true), d(g, x, _, "\xA7", "\\S", true), d(K, x, _, "\xA7", "\\S"), d(g, x, _, "\xB6", "\\P", true), d(K, x, _, "\xB6", "\\P"), d(g, x, _, "\u2020", "\\dag"), d(K, x, _, "\u2020", "\\dag"), d(K, x, _, "\u2020", "\\textdagger"), d(g, x, _, "\u2021", "\\ddag"), d(K, x, _, "\u2021", "\\ddag"), d(K, x, _, "\u2021", "\\textdaggerdbl"), d(g, x, it, "\u23B1", "\\rmoustache", true), d(g, x, ft, "\u23B0", "\\lmoustache", true), d(g, x, it, "\u27EF", "\\rgroup", true), d(g, x, ft, "\u27EE", "\\lgroup", true), d(g, x, re, "\u2213", "\\mp", true), d(g, x, re, "\u2296", "\\ominus", true), d(g, x, re, "\u228E", "\\uplus", true), d(g, x, re, "\u2293", "\\sqcap", true), d(g, x, re, "\u2217", "\\ast"), d(g, x, re, "\u2294", "\\sqcup", true), d(g, x, re, "\u25EF", "\\bigcirc", true), d(g, x, re, "\u2219", "\\bullet", true), d(g, x, re, "\u2021", "\\ddagger"), d(g, x, re, "\u2240", "\\wr", true), d(g, x, re, "\u2A3F", "\\amalg"), d(g, x, re, "&", "\\And"), d(g, x, I, "\u27F5", "\\longleftarrow", true), d(g, x, I, "\u21D0", "\\Leftarrow", true), d(g, x, I, "\u27F8", "\\Longleftarrow", true), d(g, x, I, "\u27F6", "\\longrightarrow", true), d(g, x, I, "\u21D2", "\\Rightarrow", true), d(g, x, I, "\u27F9", "\\Longrightarrow", true), d(g, x, I, "\u2194", "\\leftrightarrow", true), d(g, x, I, "\u27F7", "\\longleftrightarrow", true), d(g, x, I, "\u21D4", "\\Leftrightarrow", true), d(g, x, I, "\u27FA", "\\Longleftrightarrow", true), d(g, x, I, "\u21A6", "\\mapsto", true), d(g, x, I, "\u27FC", "\\longmapsto", true), d(g, x, I, "\u2197", "\\nearrow", true), d(g, x, I, "\u21A9", "\\hookleftarrow", true), d(g, x, I, "\u21AA", "\\hookrightarrow", true), d(g, x, I, "\u2198", "\\searrow", true), d(g, x, I, "\u21BC", "\\leftharpoonup", true), d(g, x, I, "\u21C0", "\\rightharpoonup", true), d(g, x, I, "\u2199", "\\swarrow", true), d(g, x, I, "\u21BD", "\\leftharpoondown", true), d(g, x, I, "\u21C1", "\\rightharpoondown", true), d(g, x, I, "\u2196", "\\nwarrow", true), d(g, x, I, "\u21CC", "\\rightleftharpoons", true), d(g, E, I, "\u226E", "\\nless", true), d(g, E, I, "\uE010", "\\@nleqslant"), d(g, E, I, "\uE011", "\\@nleqq"), d(g, E, I, "\u2A87", "\\lneq", true), d(g, E, I, "\u2268", "\\lneqq", true), d(g, E, I, "\uE00C", "\\@lvertneqq"), d(g, E, I, "\u22E6", "\\lnsim", true), d(g, E, I, "\u2A89", "\\lnapprox", true), d(g, E, I, "\u2280", "\\nprec", true), d(g, E, I, "\u22E0", "\\npreceq", true), d(g, E, I, "\u22E8", "\\precnsim", true), d(g, E, I, "\u2AB9", "\\precnapprox", true), d(g, E, I, "\u2241", "\\nsim", true), d(g, E, I, "\uE006", "\\@nshortmid"), d(g, E, I, "\u2224", "\\nmid", true), d(g, E, I, "\u22AC", "\\nvdash", true), d(g, E, I, "\u22AD", "\\nvDash", true), d(g, E, I, "\u22EA", "\\ntriangleleft"), d(g, E, I, "\u22EC", "\\ntrianglelefteq", true), d(g, E, I, "\u228A", "\\subsetneq", true), d(g, E, I, "\uE01A", "\\@varsubsetneq"), d(g, E, I, "\u2ACB", "\\subsetneqq", true), d(g, E, I, "\uE017", "\\@varsubsetneqq"), d(g, E, I, "\u226F", "\\ngtr", true), d(g, E, I, "\uE00F", "\\@ngeqslant"), d(g, E, I, "\uE00E", "\\@ngeqq"), d(g, E, I, "\u2A88", "\\gneq", true), d(g, E, I, "\u2269", "\\gneqq", true), d(g, E, I, "\uE00D", "\\@gvertneqq"), d(g, E, I, "\u22E7", "\\gnsim", true), d(g, E, I, "\u2A8A", "\\gnapprox", true), d(g, E, I, "\u2281", "\\nsucc", true), d(g, E, I, "\u22E1", "\\nsucceq", true), d(g, E, I, "\u22E9", "\\succnsim", true), d(g, E, I, "\u2ABA", "\\succnapprox", true), d(g, E, I, "\u2246", "\\ncong", true), d(g, E, I, "\uE007", "\\@nshortparallel"), d(g, E, I, "\u2226", "\\nparallel", true), d(g, E, I, "\u22AF", "\\nVDash", true), d(g, E, I, "\u22EB", "\\ntriangleright"), d(g, E, I, "\u22ED", "\\ntrianglerighteq", true), d(g, E, I, "\uE018", "\\@nsupseteqq"), d(g, E, I, "\u228B", "\\supsetneq", true), d(g, E, I, "\uE01B", "\\@varsupsetneq"), d(g, E, I, "\u2ACC", "\\supsetneqq", true), d(g, E, I, "\uE019", "\\@varsupsetneqq"), d(g, E, I, "\u22AE", "\\nVdash", true), d(g, E, I, "\u2AB5", "\\precneqq", true), d(g, E, I, "\u2AB6", "\\succneqq", true), d(g, E, I, "\uE016", "\\@nsubseteqq"), d(g, E, re, "\u22B4", "\\unlhd"), d(g, E, re, "\u22B5", "\\unrhd"), d(g, E, I, "\u219A", "\\nleftarrow", true), d(g, E, I, "\u219B", "\\nrightarrow", true), d(g, E, I, "\u21CD", "\\nLeftarrow", true), d(g, E, I, "\u21CF", "\\nRightarrow", true), d(g, E, I, "\u21AE", "\\nleftrightarrow", true), d(g, E, I, "\u21CE", "\\nLeftrightarrow", true), d(g, E, I, "\u25B3", "\\vartriangle"), d(g, E, _, "\u210F", "\\hslash"), d(g, E, _, "\u25BD", "\\triangledown"), d(g, E, _, "\u25CA", "\\lozenge"), d(g, E, _, "\u24C8", "\\circledS"), d(g, E, _, "\xAE", "\\circledR"), d(K, E, _, "\xAE", "\\circledR"), d(g, E, _, "\u2221", "\\measuredangle", true), d(g, E, _, "\u2204", "\\nexists"), d(g, E, _, "\u2127", "\\mho"), d(g, E, _, "\u2132", "\\Finv", true), d(g, E, _, "\u2141", "\\Game", true), d(g, E, _, "\u2035", "\\backprime"), d(g, E, _, "\u25B2", "\\blacktriangle"), d(g, E, _, "\u25BC", "\\blacktriangledown"), d(g, E, _, "\u25A0", "\\blacksquare"), d(g, E, _, "\u29EB", "\\blacklozenge"), d(g, E, _, "\u2605", "\\bigstar"), d(g, E, _, "\u2222", "\\sphericalangle", true), d(g, E, _, "\u2201", "\\complement", true), d(g, E, _, "\xF0", "\\eth", true), d(K, x, _, "\xF0", "\xF0"), d(g, E, _, "\u2571", "\\diagup"), d(g, E, _, "\u2572", "\\diagdown"), d(g, E, _, "\u25A1", "\\square"), d(g, E, _, "\u25A1", "\\Box"), d(g, E, _, "\u25CA", "\\Diamond"), d(g, E, _, "\xA5", "\\yen", true), d(K, E, _, "\xA5", "\\yen", true), d(g, E, _, "\u2713", "\\checkmark", true), d(K, E, _, "\u2713", "\\checkmark"), d(g, E, _, "\u2136", "\\beth", true), d(g, E, _, "\u2138", "\\daleth", true), d(g, E, _, "\u2137", "\\gimel", true), d(g, E, _, "\u03DD", "\\digamma", true), d(g, E, _, "\u03F0", "\\varkappa"), d(g, E, ft, "\u250C", "\\@ulcorner", true), d(g, E, it, "\u2510", "\\@urcorner", true), d(g, E, ft, "\u2514", "\\@llcorner", true), d(g, E, it, "\u2518", "\\@lrcorner", true), d(g, E, I, "\u2266", "\\leqq", true), d(g, E, I, "\u2A7D", "\\leqslant", true), d(g, E, I, "\u2A95", "\\eqslantless", true), d(g, E, I, "\u2272", "\\lesssim", true), d(g, E, I, "\u2A85", "\\lessapprox", true), d(g, E, I, "\u224A", "\\approxeq", true), d(g, E, re, "\u22D6", "\\lessdot"), d(g, E, I, "\u22D8", "\\lll", true), d(g, E, I, "\u2276", "\\lessgtr", true), d(g, E, I, "\u22DA", "\\lesseqgtr", true), d(g, E, I, "\u2A8B", "\\lesseqqgtr", true), d(g, E, I, "\u2251", "\\doteqdot"), d(g, E, I, "\u2253", "\\risingdotseq", true), d(g, E, I, "\u2252", "\\fallingdotseq", true), d(g, E, I, "\u223D", "\\backsim", true), d(g, E, I, "\u22CD", "\\backsimeq", true), d(g, E, I, "\u2AC5", "\\subseteqq", true), d(g, E, I, "\u22D0", "\\Subset", true), d(g, E, I, "\u228F", "\\sqsubset", true), d(g, E, I, "\u227C", "\\preccurlyeq", true), d(g, E, I, "\u22DE", "\\curlyeqprec", true), d(g, E, I, "\u227E", "\\precsim", true), d(g, E, I, "\u2AB7", "\\precapprox", true), d(g, E, I, "\u22B2", "\\vartriangleleft"), d(g, E, I, "\u22B4", "\\trianglelefteq"), d(g, E, I, "\u22A8", "\\vDash", true), d(g, E, I, "\u22AA", "\\Vvdash", true), d(g, E, I, "\u2323", "\\smallsmile"), d(g, E, I, "\u2322", "\\smallfrown"), d(g, E, I, "\u224F", "\\bumpeq", true), d(g, E, I, "\u224E", "\\Bumpeq", true), d(g, E, I, "\u2267", "\\geqq", true), d(g, E, I, "\u2A7E", "\\geqslant", true), d(g, E, I, "\u2A96", "\\eqslantgtr", true), d(g, E, I, "\u2273", "\\gtrsim", true), d(g, E, I, "\u2A86", "\\gtrapprox", true), d(g, E, re, "\u22D7", "\\gtrdot"), d(g, E, I, "\u22D9", "\\ggg", true), d(g, E, I, "\u2277", "\\gtrless", true), d(g, E, I, "\u22DB", "\\gtreqless", true), d(g, E, I, "\u2A8C", "\\gtreqqless", true), d(g, E, I, "\u2256", "\\eqcirc", true), d(g, E, I, "\u2257", "\\circeq", true), d(g, E, I, "\u225C", "\\triangleq", true), d(g, E, I, "\u223C", "\\thicksim"), d(g, E, I, "\u2248", "\\thickapprox"), d(g, E, I, "\u2AC6", "\\supseteqq", true), d(g, E, I, "\u22D1", "\\Supset", true), d(g, E, I, "\u2290", "\\sqsupset", true), d(g, E, I, "\u227D", "\\succcurlyeq", true), d(g, E, I, "\u22DF", "\\curlyeqsucc", true), d(g, E, I, "\u227F", "\\succsim", true), d(g, E, I, "\u2AB8", "\\succapprox", true), d(g, E, I, "\u22B3", "\\vartriangleright"), d(g, E, I, "\u22B5", "\\trianglerighteq"), d(g, E, I, "\u22A9", "\\Vdash", true), d(g, E, I, "\u2223", "\\shortmid"), d(g, E, I, "\u2225", "\\shortparallel"), d(g, E, I, "\u226C", "\\between", true), d(g, E, I, "\u22D4", "\\pitchfork", true), d(g, E, I, "\u221D", "\\varpropto"), d(g, E, I, "\u25C0", "\\blacktriangleleft"), d(g, E, I, "\u2234", "\\therefore", true), d(g, E, I, "\u220D", "\\backepsilon"), d(g, E, I, "\u25B6", "\\blacktriangleright"), d(g, E, I, "\u2235", "\\because", true), d(g, E, I, "\u22D8", "\\llless"), d(g, E, I, "\u22D9", "\\gggtr"), d(g, E, re, "\u22B2", "\\lhd"), d(g, E, re, "\u22B3", "\\rhd"), d(g, E, I, "\u2242", "\\eqsim", true), d(g, x, I, "\u22C8", "\\Join"), d(g, E, I, "\u2251", "\\Doteq", true), d(g, E, re, "\u2214", "\\dotplus", true), d(g, E, re, "\u2216", "\\smallsetminus"), d(g, E, re, "\u22D2", "\\Cap", true), d(g, E, re, "\u22D3", "\\Cup", true), d(g, E, re, "\u2A5E", "\\doublebarwedge", true), d(g, E, re, "\u229F", "\\boxminus", true), d(g, E, re, "\u229E", "\\boxplus", true), d(g, E, re, "\u22C7", "\\divideontimes", true), d(g, E, re, "\u22C9", "\\ltimes", true), d(g, E, re, "\u22CA", "\\rtimes", true), d(g, E, re, "\u22CB", "\\leftthreetimes", true), d(g, E, re, "\u22CC", "\\rightthreetimes", true), d(g, E, re, "\u22CF", "\\curlywedge", true), d(g, E, re, "\u22CE", "\\curlyvee", true), d(g, E, re, "\u229D", "\\circleddash", true), d(g, E, re, "\u229B", "\\circledast", true), d(g, E, re, "\u22C5", "\\centerdot"), d(g, E, re, "\u22BA", "\\intercal", true), d(g, E, re, "\u22D2", "\\doublecap"), d(g, E, re, "\u22D3", "\\doublecup"), d(g, E, re, "\u22A0", "\\boxtimes", true), d(g, E, I, "\u21E2", "\\dashrightarrow", true), d(g, E, I, "\u21E0", "\\dashleftarrow", true), d(g, E, I, "\u21C7", "\\leftleftarrows", true), d(g, E, I, "\u21C6", "\\leftrightarrows", true), d(g, E, I, "\u21DA", "\\Lleftarrow", true), d(g, E, I, "\u219E", "\\twoheadleftarrow", true), d(g, E, I, "\u21A2", "\\leftarrowtail", true), d(g, E, I, "\u21AB", "\\looparrowleft", true), d(g, E, I, "\u21CB", "\\leftrightharpoons", true), d(g, E, I, "\u21B6", "\\curvearrowleft", true), d(g, E, I, "\u21BA", "\\circlearrowleft", true), d(g, E, I, "\u21B0", "\\Lsh", true), d(g, E, I, "\u21C8", "\\upuparrows", true), d(g, E, I, "\u21BF", "\\upharpoonleft", true), d(g, E, I, "\u21C3", "\\downharpoonleft", true), d(g, x, I, "\u22B6", "\\origof", true), d(g, x, I, "\u22B7", "\\imageof", true), d(g, E, I, "\u22B8", "\\multimap", true), d(g, E, I, "\u21AD", "\\leftrightsquigarrow", true), d(g, E, I, "\u21C9", "\\rightrightarrows", true), d(g, E, I, "\u21C4", "\\rightleftarrows", true), d(g, E, I, "\u21A0", "\\twoheadrightarrow", true), d(g, E, I, "\u21A3", "\\rightarrowtail", true), d(g, E, I, "\u21AC", "\\looparrowright", true), d(g, E, I, "\u21B7", "\\curvearrowright", true), d(g, E, I, "\u21BB", "\\circlearrowright", true), d(g, E, I, "\u21B1", "\\Rsh", true), d(g, E, I, "\u21CA", "\\downdownarrows", true), d(g, E, I, "\u21BE", "\\upharpoonright", true), d(g, E, I, "\u21C2", "\\downharpoonright", true), d(g, E, I, "\u21DD", "\\rightsquigarrow", true), d(g, E, I, "\u21DD", "\\leadsto"), d(g, E, I, "\u21DB", "\\Rrightarrow", true), d(g, E, I, "\u21BE", "\\restriction"), d(g, x, _, "\u2018", "`"), d(g, x, _, "$", "\\$"), d(K, x, _, "$", "\\$"), d(K, x, _, "$", "\\textdollar"), d(g, x, _, "%", "\\%"), d(K, x, _, "%", "\\%"), d(g, x, _, "_", "\\_"), d(K, x, _, "_", "\\_"), d(K, x, _, "_", "\\textunderscore"), d(g, x, _, "\u2220", "\\angle", true), d(g, x, _, "\u221E", "\\infty", true), d(g, x, _, "\u2032", "\\prime"), d(g, x, _, "\u25B3", "\\triangle"), d(g, x, _, "\u0393", "\\Gamma", true), d(g, x, _, "\u0394", "\\Delta", true), d(g, x, _, "\u0398", "\\Theta", true), d(g, x, _, "\u039B", "\\Lambda", true), d(g, x, _, "\u039E", "\\Xi", true), d(g, x, _, "\u03A0", "\\Pi", true), d(g, x, _, "\u03A3", "\\Sigma", true), d(g, x, _, "\u03A5", "\\Upsilon", true), d(g, x, _, "\u03A6", "\\Phi", true), d(g, x, _, "\u03A8", "\\Psi", true), d(g, x, _, "\u03A9", "\\Omega", true), d(g, x, _, "A", "\u0391"), d(g, x, _, "B", "\u0392"), d(g, x, _, "E", "\u0395"), d(g, x, _, "Z", "\u0396"), d(g, x, _, "H", "\u0397"), d(g, x, _, "I", "\u0399"), d(g, x, _, "K", "\u039A"), d(g, x, _, "M", "\u039C"), d(g, x, _, "N", "\u039D"), d(g, x, _, "O", "\u039F"), d(g, x, _, "P", "\u03A1"), d(g, x, _, "T", "\u03A4"), d(g, x, _, "X", "\u03A7"), d(g, x, _, "\xAC", "\\neg", true), d(g, x, _, "\xAC", "\\lnot"), d(g, x, _, "\u22A4", "\\top"), d(g, x, _, "\u22A5", "\\bot"), d(g, x, _, "\u2205", "\\emptyset"), d(g, E, _, "\u2205", "\\varnothing"), d(g, x, ce, "\u03B1", "\\alpha", true), d(g, x, ce, "\u03B2", "\\beta", true), d(g, x, ce, "\u03B3", "\\gamma", true), d(g, x, ce, "\u03B4", "\\delta", true), d(g, x, ce, "\u03F5", "\\epsilon", true), d(g, x, ce, "\u03B6", "\\zeta", true), d(g, x, ce, "\u03B7", "\\eta", true), d(g, x, ce, "\u03B8", "\\theta", true), d(g, x, ce, "\u03B9", "\\iota", true), d(g, x, ce, "\u03BA", "\\kappa", true), d(g, x, ce, "\u03BB", "\\lambda", true), d(g, x, ce, "\u03BC", "\\mu", true), d(g, x, ce, "\u03BD", "\\nu", true), d(g, x, ce, "\u03BE", "\\xi", true), d(g, x, ce, "\u03BF", "\\omicron", true), d(g, x, ce, "\u03C0", "\\pi", true), d(g, x, ce, "\u03C1", "\\rho", true), d(g, x, ce, "\u03C3", "\\sigma", true), d(g, x, ce, "\u03C4", "\\tau", true), d(g, x, ce, "\u03C5", "\\upsilon", true), d(g, x, ce, "\u03D5", "\\phi", true), d(g, x, ce, "\u03C7", "\\chi", true), d(g, x, ce, "\u03C8", "\\psi", true), d(g, x, ce, "\u03C9", "\\omega", true), d(g, x, ce, "\u03B5", "\\varepsilon", true), d(g, x, ce, "\u03D1", "\\vartheta", true), d(g, x, ce, "\u03D6", "\\varpi", true), d(g, x, ce, "\u03F1", "\\varrho", true), d(g, x, ce, "\u03C2", "\\varsigma", true), d(g, x, ce, "\u03C6", "\\varphi", true), d(g, x, re, "\u2217", "*", true), d(g, x, re, "+", "+"), d(g, x, re, "\u2212", "-", true), d(g, x, re, "\u22C5", "\\cdot", true), d(g, x, re, "\u2218", "\\circ", true), d(g, x, re, "\xF7", "\\div", true), d(g, x, re, "\xB1", "\\pm", true), d(g, x, re, "\xD7", "\\times", true), d(g, x, re, "\u2229", "\\cap", true), d(g, x, re, "\u222A", "\\cup", true), d(g, x, re, "\u2216", "\\setminus", true), d(g, x, re, "\u2227", "\\land"), d(g, x, re, "\u2228", "\\lor"), d(g, x, re, "\u2227", "\\wedge", true), d(g, x, re, "\u2228", "\\vee", true), d(g, x, _, "\u221A", "\\surd"), d(g, x, ft, "\u27E8", "\\langle", true), d(g, x, ft, "\u2223", "\\lvert"), d(g, x, ft, "\u2225", "\\lVert"), d(g, x, it, "?", "?"), d(g, x, it, "!", "!"), d(g, x, it, "\u27E9", "\\rangle", true), d(g, x, it, "\u2223", "\\rvert"), d(g, x, it, "\u2225", "\\rVert"), d(g, x, I, "=", "="), d(g, x, I, ":", ":"), d(g, x, I, "\u2248", "\\approx", true), d(g, x, I, "\u2245", "\\cong", true), d(g, x, I, "\u2265", "\\ge"), d(g, x, I, "\u2265", "\\geq", true), d(g, x, I, "\u2190", "\\gets"), d(g, x, I, ">", "\\gt", true), d(g, x, I, "\u2208", "\\in", true), d(g, x, I, "\uE020", "\\@not"), d(g, x, I, "\u2282", "\\subset", true), d(g, x, I, "\u2283", "\\supset", true), d(g, x, I, "\u2286", "\\subseteq", true), d(g, x, I, "\u2287", "\\supseteq", true), d(g, E, I, "\u2288", "\\nsubseteq", true), d(g, E, I, "\u2289", "\\nsupseteq", true), d(g, x, I, "\u22A8", "\\models"), d(g, x, I, "\u2190", "\\leftarrow", true), d(g, x, I, "\u2264", "\\le"), d(g, x, I, "\u2264", "\\leq", true), d(g, x, I, "<", "\\lt", true), d(g, x, I, "\u2192", "\\rightarrow", true), d(g, x, I, "\u2192", "\\to"), d(g, E, I, "\u2271", "\\ngeq", true), d(g, E, I, "\u2270", "\\nleq", true), d(g, x, Ht, "\xA0", "\\ "), d(g, x, Ht, "\xA0", "\\space"), d(g, x, Ht, "\xA0", "\\nobreakspace"), d(K, x, Ht, "\xA0", "\\ "), d(K, x, Ht, "\xA0", " "), d(K, x, Ht, "\xA0", "\\space"), d(K, x, Ht, "\xA0", "\\nobreakspace"), d(g, x, Ht, null, "\\nobreak"), d(g, x, Ht, null, "\\allowbreak"), d(g, x, B0, ",", ","), d(g, x, B0, ";", ";"), d(g, E, re, "\u22BC", "\\barwedge", true), d(g, E, re, "\u22BB", "\\veebar", true), d(g, x, re, "\u2299", "\\odot", true), d(g, x, re, "\u2295", "\\oplus", true), d(g, x, re, "\u2297", "\\otimes", true), d(g, x, _, "\u2202", "\\partial", true), d(g, x, re, "\u2298", "\\oslash", true), d(g, E, re, "\u229A", "\\circledcirc", true), d(g, E, re, "\u22A1", "\\boxdot", true), d(g, x, re, "\u25B3", "\\bigtriangleup"), d(g, x, re, "\u25BD", "\\bigtriangledown"), d(g, x, re, "\u2020", "\\dagger"), d(g, x, re, "\u22C4", "\\diamond"), d(g, x, re, "\u22C6", "\\star"), d(g, x, re, "\u25C3", "\\triangleleft"), d(g, x, re, "\u25B9", "\\triangleright"), d(g, x, ft, "{", "\\{"), d(K, x, _, "{", "\\{"), d(K, x, _, "{", "\\textbraceleft"), d(g, x, it, "}", "\\}"), d(K, x, _, "}", "\\}"), d(K, x, _, "}", "\\textbraceright"), d(g, x, ft, "{", "\\lbrace"), d(g, x, it, "}", "\\rbrace"), d(g, x, ft, "[", "\\lbrack", true), d(K, x, _, "[", "\\lbrack", true), d(g, x, it, "]", "\\rbrack", true), d(K, x, _, "]", "\\rbrack", true), d(g, x, ft, "(", "\\lparen", true), d(g, x, it, ")", "\\rparen", true), d(K, x, _, "<", "\\textless", true), d(K, x, _, ">", "\\textgreater", true), d(g, x, ft, "\u230A", "\\lfloor", true), d(g, x, it, "\u230B", "\\rfloor", true), d(g, x, ft, "\u2308", "\\lceil", true), d(g, x, it, "\u2309", "\\rceil", true), d(g, x, _, "\\", "\\backslash"), d(g, x, _, "\u2223", "|"), d(g, x, _, "\u2223", "\\vert"), d(K, x, _, "|", "\\textbar", true), d(g, x, _, "\u2225", "\\|"), d(g, x, _, "\u2225", "\\Vert"), d(K, x, _, "\u2225", "\\textbardbl"), d(K, x, _, "~", "\\textasciitilde"), d(K, x, _, "\\", "\\textbackslash"), d(K, x, _, "^", "\\textasciicircum"), d(g, x, I, "\u2191", "\\uparrow", true), d(g, x, I, "\u21D1", "\\Uparrow", true), d(g, x, I, "\u2193", "\\downarrow", true), d(g, x, I, "\u21D3", "\\Downarrow", true), d(g, x, I, "\u2195", "\\updownarrow", true), d(g, x, I, "\u21D5", "\\Updownarrow", true), d(g, x, Ze, "\u2210", "\\coprod"), d(g, x, Ze, "\u22C1", "\\bigvee"), d(g, x, Ze, "\u22C0", "\\bigwedge"), d(g, x, Ze, "\u2A04", "\\biguplus"), d(g, x, Ze, "\u22C2", "\\bigcap"), d(g, x, Ze, "\u22C3", "\\bigcup"), d(g, x, Ze, "\u222B", "\\int"), d(g, x, Ze, "\u222B", "\\intop"), d(g, x, Ze, "\u222C", "\\iint"), d(g, x, Ze, "\u222D", "\\iiint"), d(g, x, Ze, "\u220F", "\\prod"), d(g, x, Ze, "\u2211", "\\sum"), d(g, x, Ze, "\u2A02", "\\bigotimes"), d(g, x, Ze, "\u2A01", "\\bigoplus"), d(g, x, Ze, "\u2A00", "\\bigodot"), d(g, x, Ze, "\u222E", "\\oint"), d(g, x, Ze, "\u222F", "\\oiint"), d(g, x, Ze, "\u2230", "\\oiiint"), d(g, x, Ze, "\u2A06", "\\bigsqcup"), d(g, x, Ze, "\u222B", "\\smallint"), d(K, x, Tn, "\u2026", "\\textellipsis"), d(g, x, Tn, "\u2026", "\\mathellipsis"), d(K, x, Tn, "\u2026", "\\ldots", true), d(g, x, Tn, "\u2026", "\\ldots", true), d(g, x, Tn, "\u22EF", "\\@cdots", true), d(g, x, Tn, "\u22F1", "\\ddots", true), d(g, x, _, "\u22EE", "\\varvdots"), d(K, x, _, "\u22EE", "\\varvdots"), d(g, x, Pe, "\u02CA", "\\acute"), d(g, x, Pe, "\u02CB", "\\grave"), d(g, x, Pe, "\xA8", "\\ddot"), d(g, x, Pe, "~", "\\tilde"), d(g, x, Pe, "\u02C9", "\\bar"), d(g, x, Pe, "\u02D8", "\\breve"), d(g, x, Pe, "\u02C7", "\\check"), d(g, x, Pe, "^", "\\hat"), d(g, x, Pe, "\u20D7", "\\vec"), d(g, x, Pe, "\u02D9", "\\dot"), d(g, x, Pe, "\u02DA", "\\mathring"), d(g, x, ce, "\uE131", "\\@imath"), d(g, x, ce, "\uE237", "\\@jmath"), d(g, x, _, "\u0131", "\u0131"), d(g, x, _, "\u0237", "\u0237"), d(K, x, _, "\u0131", "\\i", true), d(K, x, _, "\u0237", "\\j", true), d(K, x, _, "\xDF", "\\ss", true), d(K, x, _, "\xE6", "\\ae", true), d(K, x, _, "\u0153", "\\oe", true), d(K, x, _, "\xF8", "\\o", true), d(K, x, _, "\xC6", "\\AE", true), d(K, x, _, "\u0152", "\\OE", true), d(K, x, _, "\xD8", "\\O", true), d(K, x, Pe, "\u02CA", "\\'"), d(K, x, Pe, "\u02CB", "\\`"), d(K, x, Pe, "\u02C6", "\\^"), d(K, x, Pe, "\u02DC", "\\~"), d(K, x, Pe, "\u02C9", "\\="), d(K, x, Pe, "\u02D8", "\\u"), d(K, x, Pe, "\u02D9", "\\."), d(K, x, Pe, "\xB8", "\\c"), d(K, x, Pe, "\u02DA", "\\r"), d(K, x, Pe, "\u02C7", "\\v"), d(K, x, Pe, "\xA8", '\\"'), d(K, x, Pe, "\u02DD", "\\H"), d(K, x, Pe, "\u25EF", "\\textcircled");
        const ii = { "--": true, "---": true, "``": true, "''": true };
        d(K, x, _, "\u2013", "--", true), d(K, x, _, "\u2013", "\\textendash"), d(K, x, _, "\u2014", "---", true), d(K, x, _, "\u2014", "\\textemdash"), d(K, x, _, "\u2018", "`", true), d(K, x, _, "\u2018", "\\textquoteleft"), d(K, x, _, "\u2019", "'", true), d(K, x, _, "\u2019", "\\textquoteright"), d(K, x, _, "\u201C", "``", true), d(K, x, _, "\u201C", "\\textquotedblleft"), d(K, x, _, "\u201D", "''", true), d(K, x, _, "\u201D", "\\textquotedblright"), d(g, x, _, "\xB0", "\\degree", true), d(K, x, _, "\xB0", "\\degree"), d(K, x, _, "\xB0", "\\textdegree", true), d(g, x, _, "\xA3", "\\pounds"), d(g, x, _, "\xA3", "\\mathsterling", true), d(K, x, _, "\xA3", "\\pounds"), d(K, x, _, "\xA3", "\\textsterling", true), d(g, E, _, "\u2720", "\\maltese"), d(K, E, _, "\u2720", "\\maltese");
        const ai = '0123456789/@."';
        for (let o = 0; o < ai.length; o++) {
          const s = ai.charAt(o);
          d(g, x, _, s, s);
        }
        const li = '0123456789!@*()-=+";:?/.,';
        for (let o = 0; o < li.length; o++) {
          const s = li.charAt(o);
          d(K, x, _, s, s);
        }
        const q0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (let o = 0; o < q0.length; o++) {
          const s = q0.charAt(o);
          d(g, x, ce, s, s), d(K, x, _, s, s);
        }
        d(g, E, _, "C", "\u2102"), d(K, E, _, "C", "\u2102"), d(g, E, _, "H", "\u210D"), d(K, E, _, "H", "\u210D"), d(g, E, _, "N", "\u2115"), d(K, E, _, "N", "\u2115"), d(g, E, _, "P", "\u2119"), d(K, E, _, "P", "\u2119"), d(g, E, _, "Q", "\u211A"), d(K, E, _, "Q", "\u211A"), d(g, E, _, "R", "\u211D"), d(K, E, _, "R", "\u211D"), d(g, E, _, "Z", "\u2124"), d(K, E, _, "Z", "\u2124"), d(g, x, ce, "h", "\u210E"), d(K, x, ce, "h", "\u210E");
        let de = "";
        for (let o = 0; o < q0.length; o++) {
          const s = q0.charAt(o);
          de = String.fromCharCode(55349, 56320 + o), d(g, x, ce, s, de), d(K, x, _, s, de), de = String.fromCharCode(55349, 56372 + o), d(g, x, ce, s, de), d(K, x, _, s, de), de = String.fromCharCode(55349, 56424 + o), d(g, x, ce, s, de), d(K, x, _, s, de), de = String.fromCharCode(55349, 56580 + o), d(g, x, ce, s, de), d(K, x, _, s, de), de = String.fromCharCode(55349, 56684 + o), d(g, x, ce, s, de), d(K, x, _, s, de), de = String.fromCharCode(55349, 56736 + o), d(g, x, ce, s, de), d(K, x, _, s, de), de = String.fromCharCode(55349, 56788 + o), d(g, x, ce, s, de), d(K, x, _, s, de), de = String.fromCharCode(55349, 56840 + o), d(g, x, ce, s, de), d(K, x, _, s, de), de = String.fromCharCode(55349, 56944 + o), d(g, x, ce, s, de), d(K, x, _, s, de), o < 26 && (de = String.fromCharCode(55349, 56632 + o), d(g, x, ce, s, de), d(K, x, _, s, de), de = String.fromCharCode(55349, 56476 + o), d(g, x, ce, s, de), d(K, x, _, s, de));
        }
        de = "\u{1D55C}", d(g, x, ce, "k", de), d(K, x, _, "k", de);
        for (let o = 0; o < 10; o++) {
          const s = o.toString();
          de = String.fromCharCode(55349, 57294 + o), d(g, x, ce, s, de), d(K, x, _, s, de), de = String.fromCharCode(55349, 57314 + o), d(g, x, ce, s, de), d(K, x, _, s, de), de = String.fromCharCode(55349, 57324 + o), d(g, x, ce, s, de), d(K, x, _, s, de), de = String.fromCharCode(55349, 57334 + o), d(g, x, ce, s, de), d(K, x, _, s, de);
        }
        const Ur = "\xD0\xDE\xFE";
        for (let o = 0; o < Ur.length; o++) {
          const s = Ur.charAt(o);
          d(g, x, ce, s, s), d(K, x, _, s, s);
        }
        const L0 = [["mathbf", "textbf", "Main-Bold"], ["mathbf", "textbf", "Main-Bold"], ["mathnormal", "textit", "Math-Italic"], ["mathnormal", "textit", "Math-Italic"], ["boldsymbol", "boldsymbol", "Main-BoldItalic"], ["boldsymbol", "boldsymbol", "Main-BoldItalic"], ["mathscr", "textscr", "Script-Regular"], ["", "", ""], ["", "", ""], ["", "", ""], ["mathfrak", "textfrak", "Fraktur-Regular"], ["mathfrak", "textfrak", "Fraktur-Regular"], ["mathbb", "textbb", "AMS-Regular"], ["mathbb", "textbb", "AMS-Regular"], ["mathboldfrak", "textboldfrak", "Fraktur-Regular"], ["mathboldfrak", "textboldfrak", "Fraktur-Regular"], ["mathsf", "textsf", "SansSerif-Regular"], ["mathsf", "textsf", "SansSerif-Regular"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathitsf", "textitsf", "SansSerif-Italic"], ["mathitsf", "textitsf", "SansSerif-Italic"], ["", "", ""], ["", "", ""], ["mathtt", "texttt", "Typewriter-Regular"], ["mathtt", "texttt", "Typewriter-Regular"]], ci = [["mathbf", "textbf", "Main-Bold"], ["", "", ""], ["mathsf", "textsf", "SansSerif-Regular"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathtt", "texttt", "Typewriter-Regular"]], Sh = function(o, s) {
          const a = o.charCodeAt(0), c = o.charCodeAt(1), u = (a - 55296) * 1024 + (c - 56320) + 65536, f = s === "math" ? 0 : 1;
          if (119808 <= u && u < 120484) {
            const b = Math.floor((u - 119808) / 26);
            return [L0[b][2], L0[b][f]];
          } else if (120782 <= u && u <= 120831) {
            const b = Math.floor((u - 120782) / 10);
            return [ci[b][2], ci[b][f]];
          } else {
            if (u === 120485 || u === 120486)
              return [L0[0][2], L0[0][f]];
            if (120486 < u && u < 120782)
              return ["", ""];
            throw new l("Unsupported character: " + o);
          }
        }, D0 = function(o, s, a) {
          return He[a][o] && He[a][o].replace && (o = He[a][o].replace), { value: o, metrics: $r(o, s, a) };
        }, Nt = function(o, s, a, c, u) {
          const f = D0(o, s, a), b = f.metrics;
          o = f.value;
          let w;
          if (b) {
            let A = b.italic;
            (a === "text" || c && c.font === "mathit") && (A = 0), w = new xt(o, b.height, b.depth, A, b.skew, b.width, u);
          } else
            typeof console < "u" && console.warn("No character metrics " + ("for '" + o + "' in style '" + s + "' and mode '" + a + "'")), w = new xt(o, 0, 0, 0, 0, 0, u);
          if (c) {
            w.maxFontSize = c.sizeMultiplier, c.style.isTight() && w.classes.push("mtight");
            const A = c.getColor();
            A && (w.style.color = A);
          }
          return w;
        }, Ah = function(o, s, a, c) {
          return c === void 0 && (c = []), a.font === "boldsymbol" && D0(o, "Main-Bold", s).metrics ? Nt(o, "Main-Bold", s, a, c.concat(["mathbf"])) : o === "\\" || He[s][o].font === "main" ? Nt(o, "Main-Regular", s, a, c) : Nt(o, "AMS-Regular", s, a, c.concat(["amsrm"]));
        }, Th = function(o, s, a, c, u) {
          return u !== "textord" && D0(o, "Math-BoldItalic", s).metrics ? { fontName: "Math-BoldItalic", fontClass: "boldsymbol" } : { fontName: "Main-Bold", fontClass: "mathbf" };
        }, Mh = function(o, s, a) {
          const c = o.mode, u = o.text, f = ["mord"], b = c === "math" || c === "text" && s.font, w = b ? s.font : s.fontFamily;
          let A = "", O = "";
          if (u.charCodeAt(0) === 55349 && ([A, O] = Sh(u, c)), A.length > 0)
            return Nt(u, A, c, s, f.concat(O));
          if (w) {
            let q, L;
            if (w === "boldsymbol") {
              const P = Th(u, c, s, f, a);
              q = P.fontName, L = [P.fontClass];
            } else
              b ? (q = di[w].fontName, L = [w]) : (q = R0(w, s.fontWeight, s.fontShape), L = [w, s.fontWeight, s.fontShape]);
            if (D0(u, q, c).metrics)
              return Nt(u, q, c, s, f.concat(L));
            if (ii.hasOwnProperty(u) && q.slice(0, 10) === "Typewriter") {
              const P = [];
              for (let Q = 0; Q < u.length; Q++)
                P.push(Nt(u[Q], q, c, s, f.concat(L)));
              return ui(P);
            }
          }
          if (a === "mathord")
            return Nt(u, "Math-Italic", c, s, f.concat(["mathnormal"]));
          if (a === "textord") {
            const q = He[c][u] && He[c][u].font;
            if (q === "ams") {
              const L = R0("amsrm", s.fontWeight, s.fontShape);
              return Nt(u, L, c, s, f.concat("amsrm", s.fontWeight, s.fontShape));
            } else if (q === "main" || !q) {
              const L = R0("textrm", s.fontWeight, s.fontShape);
              return Nt(u, L, c, s, f.concat(s.fontWeight, s.fontShape));
            } else {
              const L = R0(q, s.fontWeight, s.fontShape);
              return Nt(u, L, c, s, f.concat(L, s.fontWeight, s.fontShape));
            }
          } else
            throw new Error("unexpected type: " + a + " in makeOrd");
        }, Ch = (o, s) => {
          if (Qt(o.classes) !== Qt(s.classes) || o.skew !== s.skew || o.maxFontSize !== s.maxFontSize)
            return false;
          if (o.classes.length === 1) {
            const a = o.classes[0];
            if (a === "mbin" || a === "mord")
              return false;
          }
          for (const a in o.style)
            if (o.style.hasOwnProperty(a) && o.style[a] !== s.style[a])
              return false;
          for (const a in s.style)
            if (s.style.hasOwnProperty(a) && o.style[a] !== s.style[a])
              return false;
          return true;
        }, Eh = (o) => {
          for (let s = 0; s < o.length - 1; s++) {
            const a = o[s], c = o[s + 1];
            a instanceof xt && c instanceof xt && Ch(a, c) && (a.text += c.text, a.height = Math.max(a.height, c.height), a.depth = Math.max(a.depth, c.depth), a.italic = c.italic, o.splice(s + 1, 1), s--);
          }
          return o;
        }, Kr = function(o) {
          let s = 0, a = 0, c = 0;
          for (let u = 0; u < o.children.length; u++) {
            const f = o.children[u];
            f.height > s && (s = f.height), f.depth > a && (a = f.depth), f.maxFontSize > c && (c = f.maxFontSize);
          }
          o.height = s, o.depth = a, o.maxFontSize = c;
        }, ht = function(o, s, a, c) {
          const u = new Qn(o, s, a, c);
          return Kr(u), u;
        }, hi = (o, s, a, c) => new Qn(o, s, a, c), Nh = function(o, s, a) {
          const c = ht([o], [], s);
          return c.height = Math.max(a || s.fontMetrics().defaultRuleThickness, s.minRuleThickness), c.style.borderBottomWidth = J(c.height), c.maxFontSize = 1, c;
        }, Ih = function(o, s, a, c) {
          const u = new Vr(o, s, a, c);
          return Kr(u), u;
        }, ui = function(o) {
          const s = new Yn(o);
          return Kr(s), s;
        }, zh = function(o, s) {
          return o instanceof Yn ? ht([], [o], s) : o;
        }, Oh = function(o) {
          if (o.positionType === "individualShift") {
            const a = o.children, c = [a[0]], u = -a[0].shift - a[0].elem.depth;
            let f = u;
            for (let b = 1; b < a.length; b++) {
              const w = -a[b].shift - f - a[b].elem.depth, A = w - (a[b - 1].elem.height + a[b - 1].elem.depth);
              f = f + w, c.push({ type: "kern", size: A }), c.push(a[b]);
            }
            return { children: c, depth: u };
          }
          let s;
          if (o.positionType === "top") {
            let a = o.positionData;
            for (let c = 0; c < o.children.length; c++) {
              const u = o.children[c];
              a -= u.type === "kern" ? u.size : u.elem.height + u.elem.depth;
            }
            s = a;
          } else if (o.positionType === "bottom")
            s = -o.positionData;
          else {
            const a = o.children[0];
            if (a.type !== "elem")
              throw new Error('First child must have type "elem".');
            if (o.positionType === "shift")
              s = -a.elem.depth - o.positionData;
            else if (o.positionType === "firstBaseline")
              s = -a.elem.depth;
            else
              throw new Error("Invalid positionType " + o.positionType + ".");
          }
          return { children: o.children, depth: s };
        }, _h = function(o, s) {
          const { children: a, depth: c } = Oh(o);
          let u = 0;
          for (let Q = 0; Q < a.length; Q++) {
            const ee = a[Q];
            if (ee.type === "elem") {
              const ye = ee.elem;
              u = Math.max(u, ye.maxFontSize, ye.height);
            }
          }
          u += 2;
          const f = ht(["pstrut"], []);
          f.style.height = J(u);
          const b = [];
          let w = c, A = c, O = c;
          for (let Q = 0; Q < a.length; Q++) {
            const ee = a[Q];
            if (ee.type === "kern")
              O += ee.size;
            else {
              const ye = ee.elem, Te = ee.wrapperClasses || [], ke = ee.wrapperStyle || {}, Ne = ht(Te, [f, ye], void 0, ke);
              Ne.style.top = J(-u - O - ye.depth), ee.marginLeft && (Ne.style.marginLeft = ee.marginLeft), ee.marginRight && (Ne.style.marginRight = ee.marginRight), b.push(Ne), O += ye.height + ye.depth;
            }
            w = Math.min(w, O), A = Math.max(A, O);
          }
          const q = ht(["vlist"], b);
          q.style.height = J(A);
          let L;
          if (w < 0) {
            const Q = ht([], []), ee = ht(["vlist"], [Q]);
            ee.style.height = J(-w);
            const ye = ht(["vlist-s"], [new xt("\u200B")]);
            L = [ht(["vlist-r"], [q, ye]), ht(["vlist-r"], [ee])];
          } else
            L = [ht(["vlist-r"], [q])];
          const P = ht(["vlist-t"], L);
          return L.length === 2 && P.classes.push("vlist-t2"), P.height = A, P.depth = -w, P;
        }, Bh = (o, s) => {
          const a = ht(["mspace"], [], s), c = Fe(o, s);
          return a.style.marginRight = J(c), a;
        }, R0 = function(o, s, a) {
          let c = "";
          switch (o) {
            case "amsrm":
              c = "AMS";
              break;
            case "textrm":
              c = "Main";
              break;
            case "textsf":
              c = "SansSerif";
              break;
            case "texttt":
              c = "Typewriter";
              break;
            default:
              c = o;
          }
          let u;
          return s === "textbf" && a === "textit" ? u = "BoldItalic" : s === "textbf" ? u = "Bold" : s === "textit" ? u = "Italic" : u = "Regular", c + "-" + u;
        }, di = { mathbf: { variant: "bold", fontName: "Main-Bold" }, mathrm: { variant: "normal", fontName: "Main-Regular" }, textit: { variant: "italic", fontName: "Main-Italic" }, mathit: { variant: "italic", fontName: "Main-Italic" }, mathnormal: { variant: "italic", fontName: "Math-Italic" }, mathsfit: { variant: "sans-serif-italic", fontName: "SansSerif-Italic" }, mathbb: { variant: "double-struck", fontName: "AMS-Regular" }, mathcal: { variant: "script", fontName: "Caligraphic-Regular" }, mathfrak: { variant: "fraktur", fontName: "Fraktur-Regular" }, mathscr: { variant: "script", fontName: "Script-Regular" }, mathsf: { variant: "sans-serif", fontName: "SansSerif-Regular" }, mathtt: { variant: "monospace", fontName: "Typewriter-Regular" } }, pi = { vec: ["vec", 0.471, 0.714], oiintSize1: ["oiintSize1", 0.957, 0.499], oiintSize2: ["oiintSize2", 1.472, 0.659], oiiintSize1: ["oiiintSize1", 1.304, 0.499], oiiintSize2: ["oiiintSize2", 1.98, 0.659] };
        var D = { fontMap: di, makeSymbol: Nt, mathsym: Ah, makeSpan: ht, makeSvgSpan: hi, makeLineSpan: Nh, makeAnchor: Ih, makeFragment: ui, wrapFragment: zh, makeVList: _h, makeOrd: Mh, makeGlue: Bh, staticSvg: function(o, s) {
          const [a, c, u] = pi[o], f = new Zt(a), b = new Ft([f], { width: J(c), height: J(u), style: "width:" + J(c), viewBox: "0 0 " + 1e3 * c + " " + 1e3 * u, preserveAspectRatio: "xMinYMin" }), w = hi(["overlay"], [b], s);
          return w.height = u, w.style.height = J(u), w.style.width = J(c), w;
        }, svgData: pi, tryCombineChars: Eh };
        const Ve = { number: 3, unit: "mu" }, cn = { number: 4, unit: "mu" }, Vt = { number: 5, unit: "mu" }, qh = { mord: { mop: Ve, mbin: cn, mrel: Vt, minner: Ve }, mop: { mord: Ve, mop: Ve, mrel: Vt, minner: Ve }, mbin: { mord: cn, mop: cn, mopen: cn, minner: cn }, mrel: { mord: Vt, mop: Vt, mopen: Vt, minner: Vt }, mopen: {}, mclose: { mop: Ve, mbin: cn, mrel: Vt, minner: Ve }, mpunct: { mord: Ve, mop: Ve, mrel: Vt, mopen: Ve, mclose: Ve, mpunct: Ve, minner: Ve }, minner: { mord: Ve, mop: Ve, mbin: cn, mrel: Vt, mopen: Ve, mpunct: Ve, minner: Ve } }, Lh = { mord: { mop: Ve }, mop: { mord: Ve, mop: Ve }, mbin: {}, mrel: {}, mopen: {}, mclose: { mop: Ve }, mpunct: {}, minner: { mop: Ve } }, mi = {}, P0 = {}, $0 = {};
        function ne(o) {
          let { type: s, names: a, props: c, handler: u, htmlBuilder: f, mathmlBuilder: b } = o;
          const w = { type: s, numArgs: c.numArgs, argTypes: c.argTypes, allowedInArgument: !!c.allowedInArgument, allowedInText: !!c.allowedInText, allowedInMath: c.allowedInMath === void 0 ? true : c.allowedInMath, numOptionalArgs: c.numOptionalArgs || 0, infix: !!c.infix, primitive: !!c.primitive, handler: u };
          for (let A = 0; A < a.length; ++A)
            mi[a[A]] = w;
          s && (f && (P0[s] = f), b && ($0[s] = b));
        }
        function hn(o) {
          let { type: s, htmlBuilder: a, mathmlBuilder: c } = o;
          ne({ type: s, names: [], props: { numArgs: 0 }, handler() {
            throw new Error("Should never be called.");
          }, htmlBuilder: a, mathmlBuilder: c });
        }
        const F0 = function(o) {
          return o.type === "ordgroup" && o.body.length === 1 ? o.body[0] : o;
        }, Ge = function(o) {
          return o.type === "ordgroup" ? o.body : [o];
        }, jt = D.makeSpan, Dh = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], Rh = ["rightmost", "mrel", "mclose", "mpunct"], Ph = { display: Z.DISPLAY, text: Z.TEXT, script: Z.SCRIPT, scriptscript: Z.SCRIPTSCRIPT }, $h = { mord: "mord", mop: "mop", mbin: "mbin", mrel: "mrel", mopen: "mopen", mclose: "mclose", mpunct: "mpunct", minner: "minner" }, Je = function(o, s, a, c) {
          c === void 0 && (c = [null, null]);
          const u = [];
          for (let O = 0; O < o.length; O++) {
            const q = Me(o[O], s);
            if (q instanceof Yn) {
              const L = q.children;
              u.push(...L);
            } else
              u.push(q);
          }
          if (D.tryCombineChars(u), !a)
            return u;
          let f = s;
          if (o.length === 1) {
            const O = o[0];
            O.type === "sizing" ? f = s.havingSize(O.size) : O.type === "styling" && (f = s.havingStyle(Ph[O.style]));
          }
          const b = jt([c[0] || "leftmost"], [], s), w = jt([c[1] || "rightmost"], [], s), A = a === "root";
          return Gr(u, (O, q) => {
            const L = q.classes[0], P = O.classes[0];
            L === "mbin" && C.contains(Rh, P) ? q.classes[0] = "mord" : P === "mbin" && C.contains(Dh, L) && (O.classes[0] = "mord");
          }, { node: b }, w, A), Gr(u, (O, q) => {
            const L = Wr(q), P = Wr(O), Q = L && P ? O.hasClass("mtight") ? Lh[L][P] : qh[L][P] : null;
            if (Q)
              return D.makeGlue(Q, f);
          }, { node: b }, w, A), u;
        }, Gr = function(o, s, a, c, u) {
          c && o.push(c);
          let f = 0;
          for (; f < o.length; f++) {
            const b = o[f], w = fi(b);
            if (w) {
              Gr(w.children, s, a, null, u);
              continue;
            }
            const A = !b.hasClass("mspace");
            if (A) {
              const O = s(b, a.node);
              O && (a.insertAfter ? a.insertAfter(O) : (o.unshift(O), f++));
            }
            A ? a.node = b : u && b.hasClass("newline") && (a.node = jt(["leftmost"])), a.insertAfter = ((O) => (q) => {
              o.splice(O + 1, 0, q), f++;
            })(f);
          }
          c && o.pop();
        }, fi = function(o) {
          return o instanceof Yn || o instanceof Vr || o instanceof Qn && o.hasClass("enclosing") ? o : null;
        }, Xr = function(o, s) {
          const a = fi(o);
          if (a) {
            const c = a.children;
            if (c.length) {
              if (s === "right")
                return Xr(c[c.length - 1], "right");
              if (s === "left")
                return Xr(c[0], "left");
            }
          }
          return o;
        }, Wr = function(o, s) {
          return o ? (s && (o = Xr(o, s)), $h[o.classes[0]] || null) : null;
        }, Zn = function(o, s) {
          const a = ["nulldelimiter"].concat(o.baseSizingClasses());
          return jt(s.concat(a));
        }, Me = function(o, s, a) {
          if (!o)
            return jt();
          if (P0[o.type]) {
            let c = P0[o.type](o, s);
            if (a && s.size !== a.size) {
              c = jt(s.sizingClasses(a), [c], s);
              const u = s.sizeMultiplier / a.sizeMultiplier;
              c.height *= u, c.depth *= u;
            }
            return c;
          } else
            throw new l("Got group of unknown type: '" + o.type + "'");
        };
        function H0(o, s) {
          const a = jt(["base"], o, s), c = jt(["strut"]);
          return c.style.height = J(a.height + a.depth), a.depth && (c.style.verticalAlign = J(-a.depth)), a.children.unshift(c), a;
        }
        function Yr(o, s) {
          let a = null;
          o.length === 1 && o[0].type === "tag" && (a = o[0].tag, o = o[0].body);
          const c = Je(o, s, "root");
          let u;
          c.length === 2 && c[1].hasClass("tag") && (u = c.pop());
          const f = [];
          let b = [];
          for (let O = 0; O < c.length; O++)
            if (b.push(c[O]), c[O].hasClass("mbin") || c[O].hasClass("mrel") || c[O].hasClass("allowbreak")) {
              let q = false;
              for (; O < c.length - 1 && c[O + 1].hasClass("mspace") && !c[O + 1].hasClass("newline"); )
                O++, b.push(c[O]), c[O].hasClass("nobreak") && (q = true);
              q || (f.push(H0(b, s)), b = []);
            } else
              c[O].hasClass("newline") && (b.pop(), b.length > 0 && (f.push(H0(b, s)), b = []), f.push(c[O]));
          b.length > 0 && f.push(H0(b, s));
          let w;
          a ? (w = H0(Je(a, s, true)), w.classes = ["tag"], f.push(w)) : u && f.push(u);
          const A = jt(["katex-html"], f);
          if (A.setAttribute("aria-hidden", "true"), w) {
            const O = w.children[0];
            O.style.height = J(A.height + A.depth), A.depth && (O.style.verticalAlign = J(-A.depth));
          }
          return A;
        }
        function gi(o) {
          return new Yn(o);
        }
        class gt {
          constructor(s, a, c) {
            this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = s, this.attributes = {}, this.children = a || [], this.classes = c || [];
          }
          setAttribute(s, a) {
            this.attributes[s] = a;
          }
          getAttribute(s) {
            return this.attributes[s];
          }
          toNode() {
            const s = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
            for (const a in this.attributes)
              Object.prototype.hasOwnProperty.call(this.attributes, a) && s.setAttribute(a, this.attributes[a]);
            this.classes.length > 0 && (s.className = Qt(this.classes));
            for (let a = 0; a < this.children.length; a++)
              if (this.children[a] instanceof _t && this.children[a + 1] instanceof _t) {
                let c = this.children[a].toText() + this.children[++a].toText();
                for (; this.children[a + 1] instanceof _t; )
                  c += this.children[++a].toText();
                s.appendChild(new _t(c).toNode());
              } else
                s.appendChild(this.children[a].toNode());
            return s;
          }
          toMarkup() {
            let s = "<" + this.type;
            for (const a in this.attributes)
              Object.prototype.hasOwnProperty.call(this.attributes, a) && (s += " " + a + '="', s += C.escape(this.attributes[a]), s += '"');
            this.classes.length > 0 && (s += ' class ="' + C.escape(Qt(this.classes)) + '"'), s += ">";
            for (let a = 0; a < this.children.length; a++)
              s += this.children[a].toMarkup();
            return s += "</" + this.type + ">", s;
          }
          toText() {
            return this.children.map((s) => s.toText()).join("");
          }
        }
        class _t {
          constructor(s) {
            this.text = void 0, this.text = s;
          }
          toNode() {
            return document.createTextNode(this.text);
          }
          toMarkup() {
            return C.escape(this.toText());
          }
          toText() {
            return this.text;
          }
        }
        class Fh {
          constructor(s) {
            this.width = void 0, this.character = void 0, this.width = s, s >= 0.05555 && s <= 0.05556 ? this.character = "\u200A" : s >= 0.1666 && s <= 0.1667 ? this.character = "\u2009" : s >= 0.2222 && s <= 0.2223 ? this.character = "\u2005" : s >= 0.2777 && s <= 0.2778 ? this.character = "\u2005\u200A" : s >= -0.05556 && s <= -0.05555 ? this.character = "\u200A\u2063" : s >= -0.1667 && s <= -0.1666 ? this.character = "\u2009\u2063" : s >= -0.2223 && s <= -0.2222 ? this.character = "\u205F\u2063" : s >= -0.2778 && s <= -0.2777 ? this.character = "\u2005\u2063" : this.character = null;
          }
          toNode() {
            if (this.character)
              return document.createTextNode(this.character);
            {
              const s = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
              return s.setAttribute("width", J(this.width)), s;
            }
          }
          toMarkup() {
            return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + J(this.width) + '"/>';
          }
          toText() {
            return this.character ? this.character : " ";
          }
        }
        var W = { MathNode: gt, TextNode: _t, SpaceNode: Fh, newDocumentFragment: gi };
        const wt = function(o, s, a) {
          return He[s][o] && He[s][o].replace && o.charCodeAt(0) !== 55349 && !(ii.hasOwnProperty(o) && a && (a.fontFamily && a.fontFamily.slice(4, 6) === "tt" || a.font && a.font.slice(4, 6) === "tt")) && (o = He[s][o].replace), new W.TextNode(o);
        }, Qr = function(o) {
          return o.length === 1 ? o[0] : new W.MathNode("mrow", o);
        }, Zr = function(o, s) {
          if (s.fontFamily === "texttt")
            return "monospace";
          if (s.fontFamily === "textsf")
            return s.fontShape === "textit" && s.fontWeight === "textbf" ? "sans-serif-bold-italic" : s.fontShape === "textit" ? "sans-serif-italic" : s.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
          if (s.fontShape === "textit" && s.fontWeight === "textbf")
            return "bold-italic";
          if (s.fontShape === "textit")
            return "italic";
          if (s.fontWeight === "textbf")
            return "bold";
          const a = s.font;
          if (!a || a === "mathnormal")
            return null;
          const c = o.mode;
          if (a === "mathit")
            return "italic";
          if (a === "boldsymbol")
            return o.type === "textord" ? "bold" : "bold-italic";
          if (a === "mathbf")
            return "bold";
          if (a === "mathbb")
            return "double-struck";
          if (a === "mathsfit")
            return "sans-serif-italic";
          if (a === "mathfrak")
            return "fraktur";
          if (a === "mathscr" || a === "mathcal")
            return "script";
          if (a === "mathsf")
            return "sans-serif";
          if (a === "mathtt")
            return "monospace";
          let u = o.text;
          if (C.contains(["\\imath", "\\jmath"], u))
            return null;
          He[c][u] && He[c][u].replace && (u = He[c][u].replace);
          const f = D.fontMap[a].fontName;
          return $r(u, f, c) ? D.fontMap[a].variant : null;
        };
        function Jr(o) {
          if (!o)
            return false;
          if (o.type === "mi" && o.children.length === 1) {
            const s = o.children[0];
            return s instanceof _t && s.text === ".";
          } else if (o.type === "mo" && o.children.length === 1 && o.getAttribute("separator") === "true" && o.getAttribute("lspace") === "0em" && o.getAttribute("rspace") === "0em") {
            const s = o.children[0];
            return s instanceof _t && s.text === ",";
          } else
            return false;
        }
        const ut = function(o, s, a) {
          if (o.length === 1) {
            const f = Be(o[0], s);
            return a && f instanceof gt && f.type === "mo" && (f.setAttribute("lspace", "0em"), f.setAttribute("rspace", "0em")), [f];
          }
          const c = [];
          let u;
          for (let f = 0; f < o.length; f++) {
            const b = Be(o[f], s);
            if (b instanceof gt && u instanceof gt) {
              if (b.type === "mtext" && u.type === "mtext" && b.getAttribute("mathvariant") === u.getAttribute("mathvariant")) {
                u.children.push(...b.children);
                continue;
              } else if (b.type === "mn" && u.type === "mn") {
                u.children.push(...b.children);
                continue;
              } else if (Jr(b) && u.type === "mn") {
                u.children.push(...b.children);
                continue;
              } else if (b.type === "mn" && Jr(u))
                b.children = [...u.children, ...b.children], c.pop();
              else if ((b.type === "msup" || b.type === "msub") && b.children.length >= 1 && (u.type === "mn" || Jr(u))) {
                const w = b.children[0];
                w instanceof gt && w.type === "mn" && (w.children = [...u.children, ...w.children], c.pop());
              } else if (u.type === "mi" && u.children.length === 1) {
                const w = u.children[0];
                if (w instanceof _t && w.text === "\u0338" && (b.type === "mo" || b.type === "mi" || b.type === "mn")) {
                  const A = b.children[0];
                  A instanceof _t && A.text.length > 0 && (A.text = A.text.slice(0, 1) + "\u0338" + A.text.slice(1), c.pop());
                }
              }
            }
            c.push(b), u = b;
          }
          return c;
        }, Jt = function(o, s, a) {
          return Qr(ut(o, s, a));
        }, Be = function(o, s) {
          if (!o)
            return new W.MathNode("mrow");
          if ($0[o.type])
            return $0[o.type](o, s);
          throw new l("Got group of unknown type: '" + o.type + "'");
        };
        function yi(o, s, a, c, u) {
          const f = ut(o, a);
          let b;
          f.length === 1 && f[0] instanceof gt && C.contains(["mrow", "mtable"], f[0].type) ? b = f[0] : b = new W.MathNode("mrow", f);
          const w = new W.MathNode("annotation", [new W.TextNode(s)]);
          w.setAttribute("encoding", "application/x-tex");
          const A = new W.MathNode("semantics", [b, w]), O = new W.MathNode("math", [A]);
          O.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), c && O.setAttribute("display", "block");
          const q = u ? "katex" : "katex-mathml";
          return D.makeSpan([q], [O]);
        }
        const bi = function(o) {
          return new fh({ style: o.displayMode ? Z.DISPLAY : Z.TEXT, maxSize: o.maxSize, minRuleThickness: o.minRuleThickness });
        }, xi = function(o, s) {
          if (s.displayMode) {
            const a = ["katex-display"];
            s.leqno && a.push("leqno"), s.fleqn && a.push("fleqn"), o = D.makeSpan(a, [o]);
          }
          return o;
        }, Hh = function(o, s, a) {
          const c = bi(a);
          let u;
          if (a.output === "mathml")
            return yi(o, s, c, a.displayMode, true);
          if (a.output === "html") {
            const f = Yr(o, c);
            u = D.makeSpan(["katex"], [f]);
          } else {
            const f = yi(o, s, c, a.displayMode, false), b = Yr(o, c);
            u = D.makeSpan(["katex"], [f, b]);
          }
          return xi(u, a);
        }, Vh = function(o, s, a) {
          const c = bi(a), u = Yr(o, c), f = D.makeSpan(["katex"], [u]);
          return xi(f, a);
        }, jh = { widehat: "^", widecheck: "\u02C7", widetilde: "~", utilde: "~", overleftarrow: "\u2190", underleftarrow: "\u2190", xleftarrow: "\u2190", overrightarrow: "\u2192", underrightarrow: "\u2192", xrightarrow: "\u2192", underbrace: "\u23DF", overbrace: "\u23DE", overgroup: "\u23E0", undergroup: "\u23E1", overleftrightarrow: "\u2194", underleftrightarrow: "\u2194", xleftrightarrow: "\u2194", Overrightarrow: "\u21D2", xRightarrow: "\u21D2", overleftharpoon: "\u21BC", xleftharpoonup: "\u21BC", overrightharpoon: "\u21C0", xrightharpoonup: "\u21C0", xLeftarrow: "\u21D0", xLeftrightarrow: "\u21D4", xhookleftarrow: "\u21A9", xhookrightarrow: "\u21AA", xmapsto: "\u21A6", xrightharpoondown: "\u21C1", xleftharpoondown: "\u21BD", xrightleftharpoons: "\u21CC", xleftrightharpoons: "\u21CB", xtwoheadleftarrow: "\u219E", xtwoheadrightarrow: "\u21A0", xlongequal: "=", xtofrom: "\u21C4", xrightleftarrows: "\u21C4", xrightequilibrium: "\u21CC", xleftequilibrium: "\u21CB", "\\cdrightarrow": "\u2192", "\\cdleftarrow": "\u2190", "\\cdlongequal": "=" }, Uh = function(o) {
          const s = new W.MathNode("mo", [new W.TextNode(jh[o.replace(/^\\/, "")])]);
          return s.setAttribute("stretchy", "true"), s;
        }, Kh = { overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"], overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"], underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"], underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"], xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"], "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"], xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"], "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"], Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"], xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"], xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"], overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"], xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"], xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"], overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"], xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"], xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"], xlongequal: [["longequal"], 0.888, 334, "xMinYMin"], "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"], xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"], xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"], overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522], overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548], underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548], underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522], xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522], xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560], xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716], xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716], xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522], xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522], overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522], underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522], overgroup: [["leftgroup", "rightgroup"], 0.888, 342], undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342], xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522], xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528], xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901], xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716], xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716] }, Gh = function(o) {
          return o.type === "ordgroup" ? o.body.length : 1;
        };
        var Ut = { encloseSpan: function(o, s, a, c, u) {
          let f;
          const b = o.height + o.depth + a + c;
          if (/fbox|color|angl/.test(s)) {
            if (f = D.makeSpan(["stretchy", s], [], u), s === "fbox") {
              const w = u.color && u.getColor();
              w && (f.style.borderColor = w);
            }
          } else {
            const w = [];
            /^[bx]cancel$/.test(s) && w.push(new jr({ x1: "0", y1: "0", x2: "100%", y2: "100%", "stroke-width": "0.046em" })), /^x?cancel$/.test(s) && w.push(new jr({ x1: "0", y1: "100%", x2: "100%", y2: "0", "stroke-width": "0.046em" }));
            const A = new Ft(w, { width: "100%", height: J(b) });
            f = D.makeSvgSpan([], [A], u);
          }
          return f.height = b, f.style.height = J(b), f;
        }, mathMLnode: Uh, svgSpan: function(o, s) {
          function a() {
            let b = 4e5;
            const w = o.label.slice(1);
            if (C.contains(["widehat", "widecheck", "widetilde", "utilde"], w)) {
              const A = Gh(o.base);
              let O, q, L;
              if (A > 5)
                w === "widehat" || w === "widecheck" ? (O = 420, b = 2364, L = 0.42, q = w + "4") : (O = 312, b = 2340, L = 0.34, q = "tilde4");
              else {
                const ee = [1, 1, 2, 2, 3, 3][A];
                w === "widehat" || w === "widecheck" ? (b = [0, 1062, 2364, 2364, 2364][ee], O = [0, 239, 300, 360, 420][ee], L = [0, 0.24, 0.3, 0.3, 0.36, 0.42][ee], q = w + ee) : (b = [0, 600, 1033, 2339, 2340][ee], O = [0, 260, 286, 306, 312][ee], L = [0, 0.26, 0.286, 0.3, 0.306, 0.34][ee], q = "tilde" + ee);
              }
              const P = new Zt(q), Q = new Ft([P], { width: "100%", height: J(L), viewBox: "0 0 " + b + " " + O, preserveAspectRatio: "none" });
              return { span: D.makeSvgSpan([], [Q], s), minWidth: 0, height: L };
            } else {
              const A = [], O = Kh[w], [q, L, P] = O, Q = P / 1e3, ee = q.length;
              let ye, Te;
              if (ee === 1) {
                const ke = O[3];
                ye = ["hide-tail"], Te = [ke];
              } else if (ee === 2)
                ye = ["halfarrow-left", "halfarrow-right"], Te = ["xMinYMin", "xMaxYMin"];
              else if (ee === 3)
                ye = ["brace-left", "brace-center", "brace-right"], Te = ["xMinYMin", "xMidYMin", "xMaxYMin"];
              else
                throw new Error(`Correct katexImagesData or update code here to support
                    ` + ee + " children.");
              for (let ke = 0; ke < ee; ke++) {
                const Ne = new Zt(q[ke]), Ce = new Ft([Ne], { width: "400em", height: J(Q), viewBox: "0 0 " + b + " " + P, preserveAspectRatio: Te[ke] + " slice" }), De = D.makeSvgSpan([ye[ke]], [Ce], s);
                if (ee === 1)
                  return { span: De, minWidth: L, height: Q };
                De.style.height = J(Q), A.push(De);
              }
              return { span: D.makeSpan(["stretchy"], A, s), minWidth: L, height: Q };
            }
          }
          const { span: c, minWidth: u, height: f } = a();
          return c.height = f, c.style.height = J(f), u > 0 && (c.style.minWidth = J(u)), c;
        } };
        function xe(o, s) {
          if (!o || o.type !== s)
            throw new Error("Expected node of type " + s + ", but got " + (o ? "node of type " + o.type : String(o)));
          return o;
        }
        function es(o) {
          const s = V0(o);
          if (!s)
            throw new Error("Expected node of symbol group type, but got " + (o ? "node of type " + o.type : String(o)));
          return s;
        }
        function V0(o) {
          return o && (o.type === "atom" || kh.hasOwnProperty(o.type)) ? o : null;
        }
        const ts = (o, s) => {
          let a, c, u;
          o && o.type === "supsub" ? (c = xe(o.base, "accent"), a = c.base, o.base = a, u = wh(Me(o, s)), o.base = c) : (c = xe(o, "accent"), a = c.base);
          const f = Me(a, s.havingCrampedStyle()), b = c.isShifty && C.isCharacterBox(a);
          let w = 0;
          if (b) {
            const P = C.getBaseElem(a), Q = Me(P, s.havingCrampedStyle());
            w = oi(Q).skew;
          }
          const A = c.label === "\\c";
          let O = A ? f.height + f.depth : Math.min(f.height, s.fontMetrics().xHeight), q;
          if (c.isStretchy)
            q = Ut.svgSpan(c, s), q = D.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: f }, { type: "elem", elem: q, wrapperClasses: ["svg-align"], wrapperStyle: w > 0 ? { width: "calc(100% - " + J(2 * w) + ")", marginLeft: J(2 * w) } : void 0 }] }, s);
          else {
            let P, Q;
            c.label === "\\vec" ? (P = D.staticSvg("vec", s), Q = D.svgData.vec[1]) : (P = D.makeOrd({ mode: c.mode, text: c.label }, s, "textord"), P = oi(P), P.italic = 0, Q = P.width, A && (O += P.depth)), q = D.makeSpan(["accent-body"], [P]);
            const ee = c.label === "\\textcircled";
            ee && (q.classes.push("accent-full"), O = f.height);
            let ye = w;
            ee || (ye -= Q / 2), q.style.left = J(ye), c.label === "\\textcircled" && (q.style.top = ".2em"), q = D.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: f }, { type: "kern", size: -O }, { type: "elem", elem: q }] }, s);
          }
          const L = D.makeSpan(["mord", "accent"], [q], s);
          return u ? (u.children[0] = L, u.height = Math.max(L.height, u.height), u.classes[0] = "mord", u) : L;
        }, wi = (o, s) => {
          const a = o.isStretchy ? Ut.mathMLnode(o.label) : new W.MathNode("mo", [wt(o.label, o.mode)]), c = new W.MathNode("mover", [Be(o.base, s), a]);
          return c.setAttribute("accent", "true"), c;
        }, Xh = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((o) => "\\" + o).join("|"));
        ne({ type: "accent", names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"], props: { numArgs: 1 }, handler: (o, s) => {
          const a = F0(s[0]), c = !Xh.test(o.funcName), u = !c || o.funcName === "\\widehat" || o.funcName === "\\widetilde" || o.funcName === "\\widecheck";
          return { type: "accent", mode: o.parser.mode, label: o.funcName, isStretchy: c, isShifty: u, base: a };
        }, htmlBuilder: ts, mathmlBuilder: wi }), ne({ type: "accent", names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"], props: { numArgs: 1, allowedInText: true, allowedInMath: true, argTypes: ["primitive"] }, handler: (o, s) => {
          const a = s[0];
          let c = o.parser.mode;
          return c === "math" && (o.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + o.funcName + " works only in text mode"), c = "text"), { type: "accent", mode: c, label: o.funcName, isStretchy: false, isShifty: true, base: a };
        }, htmlBuilder: ts, mathmlBuilder: wi }), ne({ type: "accentUnder", names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"], props: { numArgs: 1 }, handler: (o, s) => {
          let { parser: a, funcName: c } = o;
          const u = s[0];
          return { type: "accentUnder", mode: a.mode, label: c, base: u };
        }, htmlBuilder: (o, s) => {
          const a = Me(o.base, s), c = Ut.svgSpan(o, s), u = o.label === "\\utilde" ? 0.12 : 0, f = D.makeVList({ positionType: "top", positionData: a.height, children: [{ type: "elem", elem: c, wrapperClasses: ["svg-align"] }, { type: "kern", size: u }, { type: "elem", elem: a }] }, s);
          return D.makeSpan(["mord", "accentunder"], [f], s);
        }, mathmlBuilder: (o, s) => {
          const a = Ut.mathMLnode(o.label), c = new W.MathNode("munder", [Be(o.base, s), a]);
          return c.setAttribute("accentunder", "true"), c;
        } });
        const j0 = (o) => {
          const s = new W.MathNode("mpadded", o ? [o] : []);
          return s.setAttribute("width", "+0.6em"), s.setAttribute("lspace", "0.3em"), s;
        };
        ne({ type: "xArrow", names: ["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xlongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xtofrom", "\\xrightleftarrows", "\\xrightequilibrium", "\\xleftequilibrium", "\\\\cdrightarrow", "\\\\cdleftarrow", "\\\\cdlongequal"], props: { numArgs: 1, numOptionalArgs: 1 }, handler(o, s, a) {
          let { parser: c, funcName: u } = o;
          return { type: "xArrow", mode: c.mode, label: u, body: s[0], below: a[0] };
        }, htmlBuilder(o, s) {
          const a = s.style;
          let c = s.havingStyle(a.sup());
          const u = D.wrapFragment(Me(o.body, c, s), s), f = o.label.slice(0, 2) === "\\x" ? "x" : "cd";
          u.classes.push(f + "-arrow-pad");
          let b;
          o.below && (c = s.havingStyle(a.sub()), b = D.wrapFragment(Me(o.below, c, s), s), b.classes.push(f + "-arrow-pad"));
          const w = Ut.svgSpan(o, s), A = -s.fontMetrics().axisHeight + 0.5 * w.height;
          let O = -s.fontMetrics().axisHeight - 0.5 * w.height - 0.111;
          (u.depth > 0.25 || o.label === "\\xleftequilibrium") && (O -= u.depth);
          let q;
          if (b) {
            const L = -s.fontMetrics().axisHeight + b.height + 0.5 * w.height + 0.111;
            q = D.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: u, shift: O }, { type: "elem", elem: w, shift: A }, { type: "elem", elem: b, shift: L }] }, s);
          } else
            q = D.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: u, shift: O }, { type: "elem", elem: w, shift: A }] }, s);
          return q.children[0].children[0].children[1].classes.push("svg-align"), D.makeSpan(["mrel", "x-arrow"], [q], s);
        }, mathmlBuilder(o, s) {
          const a = Ut.mathMLnode(o.label);
          a.setAttribute("minsize", o.label.charAt(0) === "x" ? "1.75em" : "3.0em");
          let c;
          if (o.body) {
            const u = j0(Be(o.body, s));
            if (o.below) {
              const f = j0(Be(o.below, s));
              c = new W.MathNode("munderover", [a, f, u]);
            } else
              c = new W.MathNode("mover", [a, u]);
          } else if (o.below) {
            const u = j0(Be(o.below, s));
            c = new W.MathNode("munder", [a, u]);
          } else
            c = j0(), c = new W.MathNode("mover", [a, c]);
          return c;
        } });
        const Wh = D.makeSpan;
        function vi(o, s) {
          const a = Je(o.body, s, true);
          return Wh([o.mclass], a, s);
        }
        function ki(o, s) {
          let a;
          const c = ut(o.body, s);
          return o.mclass === "minner" ? a = new W.MathNode("mpadded", c) : o.mclass === "mord" ? o.isCharacterBox ? (a = c[0], a.type = "mi") : a = new W.MathNode("mi", c) : (o.isCharacterBox ? (a = c[0], a.type = "mo") : a = new W.MathNode("mo", c), o.mclass === "mbin" ? (a.attributes.lspace = "0.22em", a.attributes.rspace = "0.22em") : o.mclass === "mpunct" ? (a.attributes.lspace = "0em", a.attributes.rspace = "0.17em") : o.mclass === "mopen" || o.mclass === "mclose" ? (a.attributes.lspace = "0em", a.attributes.rspace = "0em") : o.mclass === "minner" && (a.attributes.lspace = "0.0556em", a.attributes.width = "+0.1111em")), a;
        }
        ne({ type: "mclass", names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"], props: { numArgs: 1, primitive: true }, handler(o, s) {
          let { parser: a, funcName: c } = o;
          const u = s[0];
          return { type: "mclass", mode: a.mode, mclass: "m" + c.slice(5), body: Ge(u), isCharacterBox: C.isCharacterBox(u) };
        }, htmlBuilder: vi, mathmlBuilder: ki });
        const U0 = (o) => {
          const s = o.type === "ordgroup" && o.body.length ? o.body[0] : o;
          return s.type === "atom" && (s.family === "bin" || s.family === "rel") ? "m" + s.family : "mord";
        };
        ne({ type: "mclass", names: ["\\@binrel"], props: { numArgs: 2 }, handler(o, s) {
          let { parser: a } = o;
          return { type: "mclass", mode: a.mode, mclass: U0(s[0]), body: Ge(s[1]), isCharacterBox: C.isCharacterBox(s[1]) };
        } }), ne({ type: "mclass", names: ["\\stackrel", "\\overset", "\\underset"], props: { numArgs: 2 }, handler(o, s) {
          let { parser: a, funcName: c } = o;
          const u = s[1], f = s[0];
          let b;
          c !== "\\stackrel" ? b = U0(u) : b = "mrel";
          const w = { type: "op", mode: u.mode, limits: true, alwaysHandleSupSub: true, parentIsSupSub: false, symbol: false, suppressBaseShift: c !== "\\stackrel", body: Ge(u) }, A = { type: "supsub", mode: f.mode, base: w, sup: c === "\\underset" ? null : f, sub: c === "\\underset" ? f : null };
          return { type: "mclass", mode: a.mode, mclass: b, body: [A], isCharacterBox: C.isCharacterBox(A) };
        }, htmlBuilder: vi, mathmlBuilder: ki }), ne({ type: "pmb", names: ["\\pmb"], props: { numArgs: 1, allowedInText: true }, handler(o, s) {
          let { parser: a } = o;
          return { type: "pmb", mode: a.mode, mclass: U0(s[0]), body: Ge(s[0]) };
        }, htmlBuilder(o, s) {
          const a = Je(o.body, s, true), c = D.makeSpan([o.mclass], a, s);
          return c.style.textShadow = "0.02em 0.01em 0.04px", c;
        }, mathmlBuilder(o, s) {
          const a = ut(o.body, s), c = new W.MathNode("mstyle", a);
          return c.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), c;
        } });
        const Yh = { ">": "\\\\cdrightarrow", "<": "\\\\cdleftarrow", "=": "\\\\cdlongequal", A: "\\uparrow", V: "\\downarrow", "|": "\\Vert", ".": "no arrow" }, Si = () => ({ type: "styling", body: [], mode: "math", style: "display" }), Ai = (o) => o.type === "textord" && o.text === "@", Qh = (o, s) => (o.type === "mathord" || o.type === "atom") && o.text === s;
        function Zh(o, s, a) {
          const c = Yh[o];
          switch (c) {
            case "\\\\cdrightarrow":
            case "\\\\cdleftarrow":
              return a.callFunction(c, [s[0]], [s[1]]);
            case "\\uparrow":
            case "\\downarrow": {
              const u = a.callFunction("\\\\cdleft", [s[0]], []), f = { type: "atom", text: c, mode: "math", family: "rel" }, b = a.callFunction("\\Big", [f], []), w = a.callFunction("\\\\cdright", [s[1]], []), A = { type: "ordgroup", mode: "math", body: [u, b, w] };
              return a.callFunction("\\\\cdparent", [A], []);
            }
            case "\\\\cdlongequal":
              return a.callFunction("\\\\cdlongequal", [], []);
            case "\\Vert": {
              const u = { type: "textord", text: "\\Vert", mode: "math" };
              return a.callFunction("\\Big", [u], []);
            }
            default:
              return { type: "textord", text: " ", mode: "math" };
          }
        }
        function Jh(o) {
          const s = [];
          for (o.gullet.beginGroup(), o.gullet.macros.set("\\cr", "\\\\\\relax"), o.gullet.beginGroup(); ; ) {
            s.push(o.parseExpression(false, "\\\\")), o.gullet.endGroup(), o.gullet.beginGroup();
            const f = o.fetch().text;
            if (f === "&" || f === "\\\\")
              o.consume();
            else if (f === "\\end") {
              s[s.length - 1].length === 0 && s.pop();
              break;
            } else
              throw new l("Expected \\\\ or \\cr or \\end", o.nextToken);
          }
          let a = [];
          const c = [a];
          for (let f = 0; f < s.length; f++) {
            const b = s[f];
            let w = Si();
            for (let A = 0; A < b.length; A++)
              if (!Ai(b[A]))
                w.body.push(b[A]);
              else {
                a.push(w), A += 1;
                const O = es(b[A]).text, q = new Array(2);
                if (q[0] = { type: "ordgroup", mode: "math", body: [] }, q[1] = { type: "ordgroup", mode: "math", body: [] }, !("=|.".indexOf(O) > -1))
                  if ("<>AV".indexOf(O) > -1)
                    for (let P = 0; P < 2; P++) {
                      let Q = true;
                      for (let ee = A + 1; ee < b.length; ee++) {
                        if (Qh(b[ee], O)) {
                          Q = false, A = ee;
                          break;
                        }
                        if (Ai(b[ee]))
                          throw new l("Missing a " + O + " character to complete a CD arrow.", b[ee]);
                        q[P].body.push(b[ee]);
                      }
                      if (Q)
                        throw new l("Missing a " + O + " character to complete a CD arrow.", b[A]);
                    }
                  else
                    throw new l('Expected one of "<>AV=|." after @', b[A]);
                const L = { type: "styling", body: [Zh(O, q, o)], mode: "math", style: "display" };
                a.push(L), w = Si();
              }
            f % 2 === 0 ? a.push(w) : a.shift(), a = [], c.push(a);
          }
          o.gullet.endGroup(), o.gullet.endGroup();
          const u = new Array(c[0].length).fill({ type: "align", align: "c", pregap: 0.25, postgap: 0.25 });
          return { type: "array", mode: "math", body: c, arraystretch: 1, addJot: true, rowGaps: [null], cols: u, colSeparationType: "CD", hLinesBeforeRow: new Array(c.length + 1).fill([]) };
        }
        ne({ type: "cdlabel", names: ["\\\\cdleft", "\\\\cdright"], props: { numArgs: 1 }, handler(o, s) {
          let { parser: a, funcName: c } = o;
          return { type: "cdlabel", mode: a.mode, side: c.slice(4), label: s[0] };
        }, htmlBuilder(o, s) {
          const a = s.havingStyle(s.style.sup()), c = D.wrapFragment(Me(o.label, a, s), s);
          return c.classes.push("cd-label-" + o.side), c.style.bottom = J(0.8 - c.depth), c.height = 0, c.depth = 0, c;
        }, mathmlBuilder(o, s) {
          let a = new W.MathNode("mrow", [Be(o.label, s)]);
          return a = new W.MathNode("mpadded", [a]), a.setAttribute("width", "0"), o.side === "left" && a.setAttribute("lspace", "-1width"), a.setAttribute("voffset", "0.7em"), a = new W.MathNode("mstyle", [a]), a.setAttribute("displaystyle", "false"), a.setAttribute("scriptlevel", "1"), a;
        } }), ne({ type: "cdlabelparent", names: ["\\\\cdparent"], props: { numArgs: 1 }, handler(o, s) {
          let { parser: a } = o;
          return { type: "cdlabelparent", mode: a.mode, fragment: s[0] };
        }, htmlBuilder(o, s) {
          const a = D.wrapFragment(Me(o.fragment, s), s);
          return a.classes.push("cd-vert-arrow"), a;
        }, mathmlBuilder(o, s) {
          return new W.MathNode("mrow", [Be(o.fragment, s)]);
        } }), ne({ type: "textord", names: ["\\@char"], props: { numArgs: 1, allowedInText: true }, handler(o, s) {
          let { parser: a } = o;
          const c = xe(s[0], "ordgroup").body;
          let u = "";
          for (let w = 0; w < c.length; w++) {
            const A = xe(c[w], "textord");
            u += A.text;
          }
          let f = parseInt(u), b;
          if (isNaN(f))
            throw new l("\\@char has non-numeric argument " + u);
          if (f < 0 || f >= 1114111)
            throw new l("\\@char with invalid code point " + u);
          return f <= 65535 ? b = String.fromCharCode(f) : (f -= 65536, b = String.fromCharCode((f >> 10) + 55296, (f & 1023) + 56320)), { type: "textord", mode: a.mode, text: b };
        } });
        const Ti = (o, s) => {
          const a = Je(o.body, s.withColor(o.color), false);
          return D.makeFragment(a);
        }, Mi = (o, s) => {
          const a = ut(o.body, s.withColor(o.color)), c = new W.MathNode("mstyle", a);
          return c.setAttribute("mathcolor", o.color), c;
        };
        ne({ type: "color", names: ["\\textcolor"], props: { numArgs: 2, allowedInText: true, argTypes: ["color", "original"] }, handler(o, s) {
          let { parser: a } = o;
          const c = xe(s[0], "color-token").color, u = s[1];
          return { type: "color", mode: a.mode, color: c, body: Ge(u) };
        }, htmlBuilder: Ti, mathmlBuilder: Mi }), ne({ type: "color", names: ["\\color"], props: { numArgs: 1, allowedInText: true, argTypes: ["color"] }, handler(o, s) {
          let { parser: a, breakOnTokenText: c } = o;
          const u = xe(s[0], "color-token").color;
          a.gullet.macros.set("\\current@color", u);
          const f = a.parseExpression(true, c);
          return { type: "color", mode: a.mode, color: u, body: f };
        }, htmlBuilder: Ti, mathmlBuilder: Mi }), ne({ type: "cr", names: ["\\\\"], props: { numArgs: 0, numOptionalArgs: 0, allowedInText: true }, handler(o, s, a) {
          let { parser: c } = o;
          const u = c.gullet.future().text === "[" ? c.parseSizeGroup(true) : null, f = !c.settings.displayMode || !c.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
          return { type: "cr", mode: c.mode, newLine: f, size: u && xe(u, "size").value };
        }, htmlBuilder(o, s) {
          const a = D.makeSpan(["mspace"], [], s);
          return o.newLine && (a.classes.push("newline"), o.size && (a.style.marginTop = J(Fe(o.size, s)))), a;
        }, mathmlBuilder(o, s) {
          const a = new W.MathNode("mspace");
          return o.newLine && (a.setAttribute("linebreak", "newline"), o.size && a.setAttribute("height", J(Fe(o.size, s)))), a;
        } });
        const ns = { "\\global": "\\global", "\\long": "\\\\globallong", "\\\\globallong": "\\\\globallong", "\\def": "\\gdef", "\\gdef": "\\gdef", "\\edef": "\\xdef", "\\xdef": "\\xdef", "\\let": "\\\\globallet", "\\futurelet": "\\\\globalfuture" }, Ci = (o) => {
          const s = o.text;
          if (/^(?:[\\{}$&#^_]|EOF)$/.test(s))
            throw new l("Expected a control sequence", o);
          return s;
        }, eu = (o) => {
          let s = o.gullet.popToken();
          return s.text === "=" && (s = o.gullet.popToken(), s.text === " " && (s = o.gullet.popToken())), s;
        }, Ei = (o, s, a, c) => {
          let u = o.gullet.macros.get(a.text);
          u == null && (a.noexpand = true, u = { tokens: [a], numArgs: 0, unexpandable: !o.gullet.isExpandable(a.text) }), o.gullet.macros.set(s, u, c);
        };
        ne({ type: "internal", names: ["\\global", "\\long", "\\\\globallong"], props: { numArgs: 0, allowedInText: true }, handler(o) {
          let { parser: s, funcName: a } = o;
          s.consumeSpaces();
          const c = s.fetch();
          if (ns[c.text])
            return (a === "\\global" || a === "\\\\globallong") && (c.text = ns[c.text]), xe(s.parseFunction(), "internal");
          throw new l("Invalid token after macro prefix", c);
        } }), ne({ type: "internal", names: ["\\def", "\\gdef", "\\edef", "\\xdef"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler(o) {
          let { parser: s, funcName: a } = o, c = s.gullet.popToken();
          const u = c.text;
          if (/^(?:[\\{}$&#^_]|EOF)$/.test(u))
            throw new l("Expected a control sequence", c);
          let f = 0, b;
          const w = [[]];
          for (; s.gullet.future().text !== "{"; )
            if (c = s.gullet.popToken(), c.text === "#") {
              if (s.gullet.future().text === "{") {
                b = s.gullet.future(), w[f].push("{");
                break;
              }
              if (c = s.gullet.popToken(), !/^[1-9]$/.test(c.text))
                throw new l('Invalid argument number "' + c.text + '"');
              if (parseInt(c.text) !== f + 1)
                throw new l('Argument number "' + c.text + '" out of order');
              f++, w.push([]);
            } else {
              if (c.text === "EOF")
                throw new l("Expected a macro definition");
              w[f].push(c.text);
            }
          let { tokens: A } = s.gullet.consumeArg();
          return b && A.unshift(b), (a === "\\edef" || a === "\\xdef") && (A = s.gullet.expandTokens(A), A.reverse()), s.gullet.macros.set(u, { tokens: A, numArgs: f, delimiters: w }, a === ns[a]), { type: "internal", mode: s.mode };
        } }), ne({ type: "internal", names: ["\\let", "\\\\globallet"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler(o) {
          let { parser: s, funcName: a } = o;
          const c = Ci(s.gullet.popToken());
          s.gullet.consumeSpaces();
          const u = eu(s);
          return Ei(s, c, u, a === "\\\\globallet"), { type: "internal", mode: s.mode };
        } }), ne({ type: "internal", names: ["\\futurelet", "\\\\globalfuture"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler(o) {
          let { parser: s, funcName: a } = o;
          const c = Ci(s.gullet.popToken()), u = s.gullet.popToken(), f = s.gullet.popToken();
          return Ei(s, c, f, a === "\\\\globalfuture"), s.gullet.pushToken(f), s.gullet.pushToken(u), { type: "internal", mode: s.mode };
        } });
        const Jn = function(o, s, a) {
          const c = He.math[o] && He.math[o].replace, u = $r(c || o, s, a);
          if (!u)
            throw new Error("Unsupported symbol " + o + " and font size " + s + ".");
          return u;
        }, rs = function(o, s, a, c) {
          const u = a.havingBaseStyle(s), f = D.makeSpan(c.concat(u.sizingClasses(a)), [o], a), b = u.sizeMultiplier / a.sizeMultiplier;
          return f.height *= b, f.depth *= b, f.maxFontSize = u.sizeMultiplier, f;
        }, Ni = function(o, s, a) {
          const c = s.havingBaseStyle(a), u = (1 - s.sizeMultiplier / c.sizeMultiplier) * s.fontMetrics().axisHeight;
          o.classes.push("delimcenter"), o.style.top = J(u), o.height -= u, o.depth += u;
        }, tu = function(o, s, a, c, u, f) {
          const b = D.makeSymbol(o, "Main-Regular", u, c), w = rs(b, s, c, f);
          return a && Ni(w, c, s), w;
        }, nu = function(o, s, a, c) {
          return D.makeSymbol(o, "Size" + s + "-Regular", a, c);
        }, Ii = function(o, s, a, c, u, f) {
          const b = nu(o, s, u, c), w = rs(D.makeSpan(["delimsizing", "size" + s], [b], c), Z.TEXT, c, f);
          return a && Ni(w, c, Z.TEXT), w;
        }, ss = function(o, s, a) {
          let c;
          return s === "Size1-Regular" ? c = "delim-size1" : c = "delim-size4", { type: "elem", elem: D.makeSpan(["delimsizinginner", c], [D.makeSpan([], [D.makeSymbol(o, s, a)])]) };
        }, os = function(o, s, a) {
          const c = Ot["Size4-Regular"][o.charCodeAt(0)] ? Ot["Size4-Regular"][o.charCodeAt(0)][4] : Ot["Size1-Regular"][o.charCodeAt(0)][4], u = new Zt("inner", hh(o, Math.round(1e3 * s))), f = new Ft([u], { width: J(c), height: J(s), style: "width:" + J(c), viewBox: "0 0 " + 1e3 * c + " " + Math.round(1e3 * s), preserveAspectRatio: "xMinYMin" }), b = D.makeSvgSpan([], [f], a);
          return b.height = s, b.style.height = J(s), b.style.width = J(c), { type: "elem", elem: b };
        }, is = 8e-3, K0 = { type: "kern", size: -1 * is }, ru = ["|", "\\lvert", "\\rvert", "\\vert"], su = ["\\|", "\\lVert", "\\rVert", "\\Vert"], zi = function(o, s, a, c, u, f) {
          let b, w, A, O, q = "", L = 0;
          b = A = O = o, w = null;
          let P = "Size1-Regular";
          o === "\\uparrow" ? A = O = "\u23D0" : o === "\\Uparrow" ? A = O = "\u2016" : o === "\\downarrow" ? b = A = "\u23D0" : o === "\\Downarrow" ? b = A = "\u2016" : o === "\\updownarrow" ? (b = "\\uparrow", A = "\u23D0", O = "\\downarrow") : o === "\\Updownarrow" ? (b = "\\Uparrow", A = "\u2016", O = "\\Downarrow") : C.contains(ru, o) ? (A = "\u2223", q = "vert", L = 333) : C.contains(su, o) ? (A = "\u2225", q = "doublevert", L = 556) : o === "[" || o === "\\lbrack" ? (b = "\u23A1", A = "\u23A2", O = "\u23A3", P = "Size4-Regular", q = "lbrack", L = 667) : o === "]" || o === "\\rbrack" ? (b = "\u23A4", A = "\u23A5", O = "\u23A6", P = "Size4-Regular", q = "rbrack", L = 667) : o === "\\lfloor" || o === "\u230A" ? (A = b = "\u23A2", O = "\u23A3", P = "Size4-Regular", q = "lfloor", L = 667) : o === "\\lceil" || o === "\u2308" ? (b = "\u23A1", A = O = "\u23A2", P = "Size4-Regular", q = "lceil", L = 667) : o === "\\rfloor" || o === "\u230B" ? (A = b = "\u23A5", O = "\u23A6", P = "Size4-Regular", q = "rfloor", L = 667) : o === "\\rceil" || o === "\u2309" ? (b = "\u23A4", A = O = "\u23A5", P = "Size4-Regular", q = "rceil", L = 667) : o === "(" || o === "\\lparen" ? (b = "\u239B", A = "\u239C", O = "\u239D", P = "Size4-Regular", q = "lparen", L = 875) : o === ")" || o === "\\rparen" ? (b = "\u239E", A = "\u239F", O = "\u23A0", P = "Size4-Regular", q = "rparen", L = 875) : o === "\\{" || o === "\\lbrace" ? (b = "\u23A7", w = "\u23A8", O = "\u23A9", A = "\u23AA", P = "Size4-Regular") : o === "\\}" || o === "\\rbrace" ? (b = "\u23AB", w = "\u23AC", O = "\u23AD", A = "\u23AA", P = "Size4-Regular") : o === "\\lgroup" || o === "\u27EE" ? (b = "\u23A7", O = "\u23A9", A = "\u23AA", P = "Size4-Regular") : o === "\\rgroup" || o === "\u27EF" ? (b = "\u23AB", O = "\u23AD", A = "\u23AA", P = "Size4-Regular") : o === "\\lmoustache" || o === "\u23B0" ? (b = "\u23A7", O = "\u23AD", A = "\u23AA", P = "Size4-Regular") : (o === "\\rmoustache" || o === "\u23B1") && (b = "\u23AB", O = "\u23A9", A = "\u23AA", P = "Size4-Regular");
          const Q = Jn(b, P, u), ee = Q.height + Q.depth, ye = Jn(A, P, u), Te = ye.height + ye.depth, ke = Jn(O, P, u), Ne = ke.height + ke.depth;
          let Ce = 0, De = 1;
          if (w !== null) {
            const Ke = Jn(w, P, u);
            Ce = Ke.height + Ke.depth, De = 2;
          }
          const st = ee + Ne + Ce, at = Math.max(0, Math.ceil((s - st) / (De * Te))), kt = st + at * De * Te;
          let Cn = c.fontMetrics().axisHeight;
          a && (Cn *= c.sizeMultiplier);
          const Ie = kt / 2 - Cn, Oe = [];
          if (q.length > 0) {
            const Ke = kt - ee - Ne, je = Math.round(kt * 1e3), St = uh(q, Math.round(Ke * 1e3)), Iu = new Zt(q, St), va = (L / 1e3).toFixed(3) + "em", ka = (je / 1e3).toFixed(3) + "em", zu = new Ft([Iu], { width: va, height: ka, viewBox: "0 0 " + L + " " + je }), Q0 = D.makeSvgSpan([], [zu], c);
            Q0.height = je / 1e3, Q0.style.width = va, Q0.style.height = ka, Oe.push({ type: "elem", elem: Q0 });
          } else {
            if (Oe.push(ss(O, P, u)), Oe.push(K0), w === null) {
              const Ke = kt - ee - Ne + 2 * is;
              Oe.push(os(A, Ke, c));
            } else {
              const Ke = (kt - ee - Ne - Ce) / 2 + 2 * is;
              Oe.push(os(A, Ke, c)), Oe.push(K0), Oe.push(ss(w, P, u)), Oe.push(K0), Oe.push(os(A, Ke, c));
            }
            Oe.push(K0), Oe.push(ss(b, P, u));
          }
          const Re = c.havingBaseStyle(Z.TEXT), $e = D.makeVList({ positionType: "bottom", positionData: Ie, children: Oe }, Re);
          return rs(D.makeSpan(["delimsizing", "mult"], [$e], Re), Z.TEXT, c, f);
        }, as = 80, ls = 0.08, cs = function(o, s, a, c, u) {
          const f = ch(o, c, a), b = new Zt(o, f), w = new Ft([b], { width: "400em", height: J(s), viewBox: "0 0 400000 " + a, preserveAspectRatio: "xMinYMin slice" });
          return D.makeSvgSpan(["hide-tail"], [w], u);
        }, ou = function(o, s) {
          const a = s.havingBaseSizing(), c = qi("\\surd", o * a.sizeMultiplier, Bi, a);
          let u = a.sizeMultiplier;
          const f = Math.max(0, s.minRuleThickness - s.fontMetrics().sqrtRuleThickness);
          let b, w = 0, A = 0, O = 0, q;
          return c.type === "small" ? (O = 1e3 + 1e3 * f + as, o < 1 ? u = 1 : o < 1.4 && (u = 0.7), w = (1 + f + ls) / u, A = (1 + f) / u, b = cs("sqrtMain", w, O, f, s), b.style.minWidth = "0.853em", q = 0.833 / u) : c.type === "large" ? (O = (1e3 + as) * e0[c.size], A = (e0[c.size] + f) / u, w = (e0[c.size] + f + ls) / u, b = cs("sqrtSize" + c.size, w, O, f, s), b.style.minWidth = "1.02em", q = 1 / u) : (w = o + f + ls, A = o + f, O = Math.floor(1e3 * o + f) + as, b = cs("sqrtTall", w, O, f, s), b.style.minWidth = "0.742em", q = 1.056), b.height = A, b.style.height = J(w), { span: b, advanceWidth: q, ruleWidth: (s.fontMetrics().sqrtRuleThickness + f) * u };
        }, Oi = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230A", "\u230B", "\\lceil", "\\rceil", "\u2308", "\u2309", "\\surd"], iu = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27EE", "\u27EF", "\\lmoustache", "\\rmoustache", "\u23B0", "\u23B1"], _i = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], e0 = [0, 1.2, 1.8, 2.4, 3], au = function(o, s, a, c, u) {
          if (o === "<" || o === "\\lt" || o === "\u27E8" ? o = "\\langle" : (o === ">" || o === "\\gt" || o === "\u27E9") && (o = "\\rangle"), C.contains(Oi, o) || C.contains(_i, o))
            return Ii(o, s, false, a, c, u);
          if (C.contains(iu, o))
            return zi(o, e0[s], false, a, c, u);
          throw new l("Illegal delimiter: '" + o + "'");
        }, lu = [{ type: "small", style: Z.SCRIPTSCRIPT }, { type: "small", style: Z.SCRIPT }, { type: "small", style: Z.TEXT }, { type: "large", size: 1 }, { type: "large", size: 2 }, { type: "large", size: 3 }, { type: "large", size: 4 }], cu = [{ type: "small", style: Z.SCRIPTSCRIPT }, { type: "small", style: Z.SCRIPT }, { type: "small", style: Z.TEXT }, { type: "stack" }], Bi = [{ type: "small", style: Z.SCRIPTSCRIPT }, { type: "small", style: Z.SCRIPT }, { type: "small", style: Z.TEXT }, { type: "large", size: 1 }, { type: "large", size: 2 }, { type: "large", size: 3 }, { type: "large", size: 4 }, { type: "stack" }], hu = function(o) {
          if (o.type === "small")
            return "Main-Regular";
          if (o.type === "large")
            return "Size" + o.size + "-Regular";
          if (o.type === "stack")
            return "Size4-Regular";
          throw new Error("Add support for delim type '" + o.type + "' here.");
        }, qi = function(o, s, a, c) {
          const u = Math.min(2, 3 - c.style.size);
          for (let f = u; f < a.length && a[f].type !== "stack"; f++) {
            const b = Jn(o, hu(a[f]), "math");
            let w = b.height + b.depth;
            if (a[f].type === "small") {
              const A = c.havingBaseStyle(a[f].style);
              w *= A.sizeMultiplier;
            }
            if (w > s)
              return a[f];
          }
          return a[a.length - 1];
        }, Li = function(o, s, a, c, u, f) {
          o === "<" || o === "\\lt" || o === "\u27E8" ? o = "\\langle" : (o === ">" || o === "\\gt" || o === "\u27E9") && (o = "\\rangle");
          let b;
          C.contains(_i, o) ? b = lu : C.contains(Oi, o) ? b = Bi : b = cu;
          const w = qi(o, s, b, c);
          return w.type === "small" ? tu(o, w.style, a, c, u, f) : w.type === "large" ? Ii(o, w.size, a, c, u, f) : zi(o, s, a, c, u, f);
        };
        var Kt = { sqrtImage: ou, sizedDelim: au, sizeToMaxHeight: e0, customSizedDelim: Li, leftRightDelim: function(o, s, a, c, u, f) {
          const b = c.fontMetrics().axisHeight * c.sizeMultiplier, w = 901, A = 5 / c.fontMetrics().ptPerEm, O = Math.max(s - b, a + b), q = Math.max(O / 500 * w, 2 * O - A);
          return Li(o, q, true, c, u, f);
        } };
        const Di = { "\\bigl": { mclass: "mopen", size: 1 }, "\\Bigl": { mclass: "mopen", size: 2 }, "\\biggl": { mclass: "mopen", size: 3 }, "\\Biggl": { mclass: "mopen", size: 4 }, "\\bigr": { mclass: "mclose", size: 1 }, "\\Bigr": { mclass: "mclose", size: 2 }, "\\biggr": { mclass: "mclose", size: 3 }, "\\Biggr": { mclass: "mclose", size: 4 }, "\\bigm": { mclass: "mrel", size: 1 }, "\\Bigm": { mclass: "mrel", size: 2 }, "\\biggm": { mclass: "mrel", size: 3 }, "\\Biggm": { mclass: "mrel", size: 4 }, "\\big": { mclass: "mord", size: 1 }, "\\Big": { mclass: "mord", size: 2 }, "\\bigg": { mclass: "mord", size: 3 }, "\\Bigg": { mclass: "mord", size: 4 } }, uu = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230A", "\u230B", "\\lceil", "\\rceil", "\u2308", "\u2309", "<", ">", "\\langle", "\u27E8", "\\rangle", "\u27E9", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27EE", "\u27EF", "\\lmoustache", "\\rmoustache", "\u23B0", "\u23B1", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
        function G0(o, s) {
          const a = V0(o);
          if (a && C.contains(uu, a.text))
            return a;
          throw a ? new l("Invalid delimiter '" + a.text + "' after '" + s.funcName + "'", o) : new l("Invalid delimiter type '" + o.type + "'", o);
        }
        ne({ type: "delimsizing", names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"], props: { numArgs: 1, argTypes: ["primitive"] }, handler: (o, s) => {
          const a = G0(s[0], o);
          return { type: "delimsizing", mode: o.parser.mode, size: Di[o.funcName].size, mclass: Di[o.funcName].mclass, delim: a.text };
        }, htmlBuilder: (o, s) => o.delim === "." ? D.makeSpan([o.mclass]) : Kt.sizedDelim(o.delim, o.size, s, o.mode, [o.mclass]), mathmlBuilder: (o) => {
          const s = [];
          o.delim !== "." && s.push(wt(o.delim, o.mode));
          const a = new W.MathNode("mo", s);
          o.mclass === "mopen" || o.mclass === "mclose" ? a.setAttribute("fence", "true") : a.setAttribute("fence", "false"), a.setAttribute("stretchy", "true");
          const c = J(Kt.sizeToMaxHeight[o.size]);
          return a.setAttribute("minsize", c), a.setAttribute("maxsize", c), a;
        } });
        function Ri(o) {
          if (!o.body)
            throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
        }
        ne({ type: "leftright-right", names: ["\\right"], props: { numArgs: 1, primitive: true }, handler: (o, s) => {
          const a = o.parser.gullet.macros.get("\\current@color");
          if (a && typeof a != "string")
            throw new l("\\current@color set to non-string in \\right");
          return { type: "leftright-right", mode: o.parser.mode, delim: G0(s[0], o).text, color: a };
        } }), ne({ type: "leftright", names: ["\\left"], props: { numArgs: 1, primitive: true }, handler: (o, s) => {
          const a = G0(s[0], o), c = o.parser;
          ++c.leftrightDepth;
          const u = c.parseExpression(false);
          --c.leftrightDepth, c.expect("\\right", false);
          const f = xe(c.parseFunction(), "leftright-right");
          return { type: "leftright", mode: c.mode, body: u, left: a.text, right: f.delim, rightColor: f.color };
        }, htmlBuilder: (o, s) => {
          Ri(o);
          const a = Je(o.body, s, true, ["mopen", "mclose"]);
          let c = 0, u = 0, f = false;
          for (let A = 0; A < a.length; A++)
            a[A].isMiddle ? f = true : (c = Math.max(a[A].height, c), u = Math.max(a[A].depth, u));
          c *= s.sizeMultiplier, u *= s.sizeMultiplier;
          let b;
          if (o.left === "." ? b = Zn(s, ["mopen"]) : b = Kt.leftRightDelim(o.left, c, u, s, o.mode, ["mopen"]), a.unshift(b), f)
            for (let A = 1; A < a.length; A++) {
              const O = a[A].isMiddle;
              O && (a[A] = Kt.leftRightDelim(O.delim, c, u, O.options, o.mode, []));
            }
          let w;
          if (o.right === ".")
            w = Zn(s, ["mclose"]);
          else {
            const A = o.rightColor ? s.withColor(o.rightColor) : s;
            w = Kt.leftRightDelim(o.right, c, u, A, o.mode, ["mclose"]);
          }
          return a.push(w), D.makeSpan(["minner"], a, s);
        }, mathmlBuilder: (o, s) => {
          Ri(o);
          const a = ut(o.body, s);
          if (o.left !== ".") {
            const c = new W.MathNode("mo", [wt(o.left, o.mode)]);
            c.setAttribute("fence", "true"), a.unshift(c);
          }
          if (o.right !== ".") {
            const c = new W.MathNode("mo", [wt(o.right, o.mode)]);
            c.setAttribute("fence", "true"), o.rightColor && c.setAttribute("mathcolor", o.rightColor), a.push(c);
          }
          return Qr(a);
        } }), ne({ type: "middle", names: ["\\middle"], props: { numArgs: 1, primitive: true }, handler: (o, s) => {
          const a = G0(s[0], o);
          if (!o.parser.leftrightDepth)
            throw new l("\\middle without preceding \\left", a);
          return { type: "middle", mode: o.parser.mode, delim: a.text };
        }, htmlBuilder: (o, s) => {
          let a;
          if (o.delim === ".")
            a = Zn(s, []);
          else {
            a = Kt.sizedDelim(o.delim, 1, s, o.mode, []);
            const c = { delim: o.delim, options: s };
            a.isMiddle = c;
          }
          return a;
        }, mathmlBuilder: (o, s) => {
          const a = o.delim === "\\vert" || o.delim === "|" ? wt("|", "text") : wt(o.delim, o.mode), c = new W.MathNode("mo", [a]);
          return c.setAttribute("fence", "true"), c.setAttribute("lspace", "0.05em"), c.setAttribute("rspace", "0.05em"), c;
        } });
        const hs = (o, s) => {
          const a = D.wrapFragment(Me(o.body, s), s), c = o.label.slice(1);
          let u = s.sizeMultiplier, f, b = 0;
          const w = C.isCharacterBox(o.body);
          if (c === "sout")
            f = D.makeSpan(["stretchy", "sout"]), f.height = s.fontMetrics().defaultRuleThickness / u, b = -0.5 * s.fontMetrics().xHeight;
          else if (c === "phase") {
            const O = Fe({ number: 0.6, unit: "pt" }, s), q = Fe({ number: 0.35, unit: "ex" }, s), L = s.havingBaseSizing();
            u = u / L.sizeMultiplier;
            const P = a.height + a.depth + O + q;
            a.style.paddingLeft = J(P / 2 + O);
            const Q = Math.floor(1e3 * P * u), ee = ah(Q), ye = new Ft([new Zt("phase", ee)], { width: "400em", height: J(Q / 1e3), viewBox: "0 0 400000 " + Q, preserveAspectRatio: "xMinYMin slice" });
            f = D.makeSvgSpan(["hide-tail"], [ye], s), f.style.height = J(P), b = a.depth + O + q;
          } else {
            /cancel/.test(c) ? w || a.classes.push("cancel-pad") : c === "angl" ? a.classes.push("anglpad") : a.classes.push("boxpad");
            let O = 0, q = 0, L = 0;
            /box/.test(c) ? (L = Math.max(s.fontMetrics().fboxrule, s.minRuleThickness), O = s.fontMetrics().fboxsep + (c === "colorbox" ? 0 : L), q = O) : c === "angl" ? (L = Math.max(s.fontMetrics().defaultRuleThickness, s.minRuleThickness), O = 4 * L, q = Math.max(0, 0.25 - a.depth)) : (O = w ? 0.2 : 0, q = O), f = Ut.encloseSpan(a, c, O, q, s), /fbox|boxed|fcolorbox/.test(c) ? (f.style.borderStyle = "solid", f.style.borderWidth = J(L)) : c === "angl" && L !== 0.049 && (f.style.borderTopWidth = J(L), f.style.borderRightWidth = J(L)), b = a.depth + q, o.backgroundColor && (f.style.backgroundColor = o.backgroundColor, o.borderColor && (f.style.borderColor = o.borderColor));
          }
          let A;
          if (o.backgroundColor)
            A = D.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: f, shift: b }, { type: "elem", elem: a, shift: 0 }] }, s);
          else {
            const O = /cancel|phase/.test(c) ? ["svg-align"] : [];
            A = D.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: a, shift: 0 }, { type: "elem", elem: f, shift: b, wrapperClasses: O }] }, s);
          }
          return /cancel/.test(c) && (A.height = a.height, A.depth = a.depth), /cancel/.test(c) && !w ? D.makeSpan(["mord", "cancel-lap"], [A], s) : D.makeSpan(["mord"], [A], s);
        }, us = (o, s) => {
          let a = 0;
          const c = new W.MathNode(o.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [Be(o.body, s)]);
          switch (o.label) {
            case "\\cancel":
              c.setAttribute("notation", "updiagonalstrike");
              break;
            case "\\bcancel":
              c.setAttribute("notation", "downdiagonalstrike");
              break;
            case "\\phase":
              c.setAttribute("notation", "phasorangle");
              break;
            case "\\sout":
              c.setAttribute("notation", "horizontalstrike");
              break;
            case "\\fbox":
              c.setAttribute("notation", "box");
              break;
            case "\\angl":
              c.setAttribute("notation", "actuarial");
              break;
            case "\\fcolorbox":
            case "\\colorbox":
              if (a = s.fontMetrics().fboxsep * s.fontMetrics().ptPerEm, c.setAttribute("width", "+" + 2 * a + "pt"), c.setAttribute("height", "+" + 2 * a + "pt"), c.setAttribute("lspace", a + "pt"), c.setAttribute("voffset", a + "pt"), o.label === "\\fcolorbox") {
                const u = Math.max(s.fontMetrics().fboxrule, s.minRuleThickness);
                c.setAttribute("style", "border: " + u + "em solid " + String(o.borderColor));
              }
              break;
            case "\\xcancel":
              c.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
              break;
          }
          return o.backgroundColor && c.setAttribute("mathbackground", o.backgroundColor), c;
        };
        ne({ type: "enclose", names: ["\\colorbox"], props: { numArgs: 2, allowedInText: true, argTypes: ["color", "text"] }, handler(o, s, a) {
          let { parser: c, funcName: u } = o;
          const f = xe(s[0], "color-token").color, b = s[1];
          return { type: "enclose", mode: c.mode, label: u, backgroundColor: f, body: b };
        }, htmlBuilder: hs, mathmlBuilder: us }), ne({ type: "enclose", names: ["\\fcolorbox"], props: { numArgs: 3, allowedInText: true, argTypes: ["color", "color", "text"] }, handler(o, s, a) {
          let { parser: c, funcName: u } = o;
          const f = xe(s[0], "color-token").color, b = xe(s[1], "color-token").color, w = s[2];
          return { type: "enclose", mode: c.mode, label: u, backgroundColor: b, borderColor: f, body: w };
        }, htmlBuilder: hs, mathmlBuilder: us }), ne({ type: "enclose", names: ["\\fbox"], props: { numArgs: 1, argTypes: ["hbox"], allowedInText: true }, handler(o, s) {
          let { parser: a } = o;
          return { type: "enclose", mode: a.mode, label: "\\fbox", body: s[0] };
        } }), ne({ type: "enclose", names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"], props: { numArgs: 1 }, handler(o, s) {
          let { parser: a, funcName: c } = o;
          const u = s[0];
          return { type: "enclose", mode: a.mode, label: c, body: u };
        }, htmlBuilder: hs, mathmlBuilder: us }), ne({ type: "enclose", names: ["\\angl"], props: { numArgs: 1, argTypes: ["hbox"], allowedInText: false }, handler(o, s) {
          let { parser: a } = o;
          return { type: "enclose", mode: a.mode, label: "\\angl", body: s[0] };
        } });
        const Pi = {};
        function Bt(o) {
          let { type: s, names: a, props: c, handler: u, htmlBuilder: f, mathmlBuilder: b } = o;
          const w = { type: s, numArgs: c.numArgs || 0, allowedInText: false, numOptionalArgs: 0, handler: u };
          for (let A = 0; A < a.length; ++A)
            Pi[a[A]] = w;
          f && (P0[s] = f), b && ($0[s] = b);
        }
        const $i = {};
        function v(o, s) {
          $i[o] = s;
        }
        class yt {
          constructor(s, a, c) {
            this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = s, this.start = a, this.end = c;
          }
          static range(s, a) {
            return a ? !s || !s.loc || !a.loc || s.loc.lexer !== a.loc.lexer ? null : new yt(s.loc.lexer, s.loc.start, a.loc.end) : s && s.loc;
          }
        }
        class vt {
          constructor(s, a) {
            this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = s, this.loc = a;
          }
          range(s, a) {
            return new vt(a, yt.range(this, s));
          }
        }
        function Fi(o) {
          const s = [];
          o.consumeSpaces();
          let a = o.fetch().text;
          for (a === "\\relax" && (o.consume(), o.consumeSpaces(), a = o.fetch().text); a === "\\hline" || a === "\\hdashline"; )
            o.consume(), s.push(a === "\\hdashline"), o.consumeSpaces(), a = o.fetch().text;
          return s;
        }
        const X0 = (o) => {
          if (!o.parser.settings.displayMode)
            throw new l("{" + o.envName + "} can be used only in display mode.");
        };
        function ds(o) {
          if (o.indexOf("ed") === -1)
            return o.indexOf("*") === -1;
        }
        function en(o, s, a) {
          let { hskipBeforeAndAfter: c, addJot: u, cols: f, arraystretch: b, colSeparationType: w, autoTag: A, singleRow: O, emptySingleRow: q, maxNumCols: L, leqno: P } = s;
          if (o.gullet.beginGroup(), O || o.gullet.macros.set("\\cr", "\\\\\\relax"), !b) {
            const De = o.gullet.expandMacroAsText("\\arraystretch");
            if (De == null)
              b = 1;
            else if (b = parseFloat(De), !b || b < 0)
              throw new l("Invalid \\arraystretch: " + De);
          }
          o.gullet.beginGroup();
          let Q = [];
          const ee = [Q], ye = [], Te = [], ke = A != null ? [] : void 0;
          function Ne() {
            A && o.gullet.macros.set("\\@eqnsw", "1", true);
          }
          function Ce() {
            ke && (o.gullet.macros.get("\\df@tag") ? (ke.push(o.subparse([new vt("\\df@tag")])), o.gullet.macros.set("\\df@tag", void 0, true)) : ke.push(!!A && o.gullet.macros.get("\\@eqnsw") === "1"));
          }
          for (Ne(), Te.push(Fi(o)); ; ) {
            let De = o.parseExpression(false, O ? "\\end" : "\\\\");
            o.gullet.endGroup(), o.gullet.beginGroup(), De = { type: "ordgroup", mode: o.mode, body: De }, a && (De = { type: "styling", mode: o.mode, style: a, body: [De] }), Q.push(De);
            const st = o.fetch().text;
            if (st === "&") {
              if (L && Q.length === L) {
                if (O || w)
                  throw new l("Too many tab characters: &", o.nextToken);
                o.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
              }
              o.consume();
            } else if (st === "\\end") {
              Ce(), Q.length === 1 && De.type === "styling" && De.body[0].body.length === 0 && (ee.length > 1 || !q) && ee.pop(), Te.length < ee.length + 1 && Te.push([]);
              break;
            } else if (st === "\\\\") {
              o.consume();
              let at;
              o.gullet.future().text !== " " && (at = o.parseSizeGroup(true)), ye.push(at ? at.value : null), Ce(), Te.push(Fi(o)), Q = [], ee.push(Q), Ne();
            } else
              throw new l("Expected & or \\\\ or \\cr or \\end", o.nextToken);
          }
          return o.gullet.endGroup(), o.gullet.endGroup(), { type: "array", mode: o.mode, addJot: u, arraystretch: b, body: ee, cols: f, rowGaps: ye, hskipBeforeAndAfter: c, hLinesBeforeRow: Te, colSeparationType: w, tags: ke, leqno: P };
        }
        function ps(o) {
          return o.slice(0, 1) === "d" ? "display" : "text";
        }
        const qt = function(o, s) {
          let a, c;
          const u = o.body.length, f = o.hLinesBeforeRow;
          let b = 0, w = new Array(u);
          const A = [], O = Math.max(s.fontMetrics().arrayRuleWidth, s.minRuleThickness), q = 1 / s.fontMetrics().ptPerEm;
          let L = 5 * q;
          o.colSeparationType && o.colSeparationType === "small" && (L = 0.2778 * (s.havingStyle(Z.SCRIPT).sizeMultiplier / s.sizeMultiplier));
          const P = o.colSeparationType === "CD" ? Fe({ number: 3, unit: "ex" }, s) : 12 * q, Q = 3 * q, ee = o.arraystretch * P, ye = 0.7 * ee, Te = 0.3 * ee;
          let ke = 0;
          function Ne(Ie) {
            for (let Oe = 0; Oe < Ie.length; ++Oe)
              Oe > 0 && (ke += 0.25), A.push({ pos: ke, isDashed: Ie[Oe] });
          }
          for (Ne(f[0]), a = 0; a < o.body.length; ++a) {
            const Ie = o.body[a];
            let Oe = ye, Re = Te;
            b < Ie.length && (b = Ie.length);
            const $e = new Array(Ie.length);
            for (c = 0; c < Ie.length; ++c) {
              const St = Me(Ie[c], s);
              Re < St.depth && (Re = St.depth), Oe < St.height && (Oe = St.height), $e[c] = St;
            }
            const Ke = o.rowGaps[a];
            let je = 0;
            Ke && (je = Fe(Ke, s), je > 0 && (je += Te, Re < je && (Re = je), je = 0)), o.addJot && (Re += Q), $e.height = Oe, $e.depth = Re, ke += Oe, $e.pos = ke, ke += Re + je, w[a] = $e, Ne(f[a + 1]);
          }
          const Ce = ke / 2 + s.fontMetrics().axisHeight, De = o.cols || [], st = [];
          let at, kt;
          const Cn = [];
          if (o.tags && o.tags.some((Ie) => Ie))
            for (a = 0; a < u; ++a) {
              const Ie = w[a], Oe = Ie.pos - Ce, Re = o.tags[a];
              let $e;
              Re === true ? $e = D.makeSpan(["eqn-num"], [], s) : Re === false ? $e = D.makeSpan([], [], s) : $e = D.makeSpan([], Je(Re, s, true), s), $e.depth = Ie.depth, $e.height = Ie.height, Cn.push({ type: "elem", elem: $e, shift: Oe });
            }
          for (c = 0, kt = 0; c < b || kt < De.length; ++c, ++kt) {
            let Ie = De[kt] || {}, Oe = true;
            for (; Ie.type === "separator"; ) {
              if (Oe || (at = D.makeSpan(["arraycolsep"], []), at.style.width = J(s.fontMetrics().doubleRuleSep), st.push(at)), Ie.separator === "|" || Ie.separator === ":") {
                const Ke = Ie.separator === "|" ? "solid" : "dashed", je = D.makeSpan(["vertical-separator"], [], s);
                je.style.height = J(ke), je.style.borderRightWidth = J(O), je.style.borderRightStyle = Ke, je.style.margin = "0 " + J(-O / 2);
                const St = ke - Ce;
                St && (je.style.verticalAlign = J(-St)), st.push(je);
              } else
                throw new l("Invalid separator type: " + Ie.separator);
              kt++, Ie = De[kt] || {}, Oe = false;
            }
            if (c >= b)
              continue;
            let Re;
            (c > 0 || o.hskipBeforeAndAfter) && (Re = C.deflt(Ie.pregap, L), Re !== 0 && (at = D.makeSpan(["arraycolsep"], []), at.style.width = J(Re), st.push(at)));
            let $e = [];
            for (a = 0; a < u; ++a) {
              const Ke = w[a], je = Ke[c];
              if (!je)
                continue;
              const St = Ke.pos - Ce;
              je.depth = Ke.depth, je.height = Ke.height, $e.push({ type: "elem", elem: je, shift: St });
            }
            $e = D.makeVList({ positionType: "individualShift", children: $e }, s), $e = D.makeSpan(["col-align-" + (Ie.align || "c")], [$e]), st.push($e), (c < b - 1 || o.hskipBeforeAndAfter) && (Re = C.deflt(Ie.postgap, L), Re !== 0 && (at = D.makeSpan(["arraycolsep"], []), at.style.width = J(Re), st.push(at)));
          }
          if (w = D.makeSpan(["mtable"], st), A.length > 0) {
            const Ie = D.makeLineSpan("hline", s, O), Oe = D.makeLineSpan("hdashline", s, O), Re = [{ type: "elem", elem: w, shift: 0 }];
            for (; A.length > 0; ) {
              const $e = A.pop(), Ke = $e.pos - Ce;
              $e.isDashed ? Re.push({ type: "elem", elem: Oe, shift: Ke }) : Re.push({ type: "elem", elem: Ie, shift: Ke });
            }
            w = D.makeVList({ positionType: "individualShift", children: Re }, s);
          }
          if (Cn.length === 0)
            return D.makeSpan(["mord"], [w], s);
          {
            let Ie = D.makeVList({ positionType: "individualShift", children: Cn }, s);
            return Ie = D.makeSpan(["tag"], [Ie], s), D.makeFragment([w, Ie]);
          }
        }, du = { c: "center ", l: "left ", r: "right " }, Lt = function(o, s) {
          const a = [], c = new W.MathNode("mtd", [], ["mtr-glue"]), u = new W.MathNode("mtd", [], ["mml-eqn-num"]);
          for (let L = 0; L < o.body.length; L++) {
            const P = o.body[L], Q = [];
            for (let ee = 0; ee < P.length; ee++)
              Q.push(new W.MathNode("mtd", [Be(P[ee], s)]));
            o.tags && o.tags[L] && (Q.unshift(c), Q.push(c), o.leqno ? Q.unshift(u) : Q.push(u)), a.push(new W.MathNode("mtr", Q));
          }
          let f = new W.MathNode("mtable", a);
          const b = o.arraystretch === 0.5 ? 0.1 : 0.16 + o.arraystretch - 1 + (o.addJot ? 0.09 : 0);
          f.setAttribute("rowspacing", J(b));
          let w = "", A = "";
          if (o.cols && o.cols.length > 0) {
            const L = o.cols;
            let P = "", Q = false, ee = 0, ye = L.length;
            L[0].type === "separator" && (w += "top ", ee = 1), L[L.length - 1].type === "separator" && (w += "bottom ", ye -= 1);
            for (let Te = ee; Te < ye; Te++)
              L[Te].type === "align" ? (A += du[L[Te].align], Q && (P += "none "), Q = true) : L[Te].type === "separator" && Q && (P += L[Te].separator === "|" ? "solid " : "dashed ", Q = false);
            f.setAttribute("columnalign", A.trim()), /[sd]/.test(P) && f.setAttribute("columnlines", P.trim());
          }
          if (o.colSeparationType === "align") {
            const L = o.cols || [];
            let P = "";
            for (let Q = 1; Q < L.length; Q++)
              P += Q % 2 ? "0em " : "1em ";
            f.setAttribute("columnspacing", P.trim());
          } else
            o.colSeparationType === "alignat" || o.colSeparationType === "gather" ? f.setAttribute("columnspacing", "0em") : o.colSeparationType === "small" ? f.setAttribute("columnspacing", "0.2778em") : o.colSeparationType === "CD" ? f.setAttribute("columnspacing", "0.5em") : f.setAttribute("columnspacing", "1em");
          let O = "";
          const q = o.hLinesBeforeRow;
          w += q[0].length > 0 ? "left " : "", w += q[q.length - 1].length > 0 ? "right " : "";
          for (let L = 1; L < q.length - 1; L++)
            O += q[L].length === 0 ? "none " : q[L][0] ? "dashed " : "solid ";
          return /[sd]/.test(O) && f.setAttribute("rowlines", O.trim()), w !== "" && (f = new W.MathNode("menclose", [f]), f.setAttribute("notation", w.trim())), o.arraystretch && o.arraystretch < 1 && (f = new W.MathNode("mstyle", [f]), f.setAttribute("scriptlevel", "1")), f;
        }, Hi = function(o, s) {
          o.envName.indexOf("ed") === -1 && X0(o);
          const a = [], c = o.envName.indexOf("at") > -1 ? "alignat" : "align", u = o.envName === "split", f = en(o.parser, { cols: a, addJot: true, autoTag: u ? void 0 : ds(o.envName), emptySingleRow: true, colSeparationType: c, maxNumCols: u ? 2 : void 0, leqno: o.parser.settings.leqno }, "display");
          let b, w = 0;
          const A = { type: "ordgroup", mode: o.mode, body: [] };
          if (s[0] && s[0].type === "ordgroup") {
            let q = "";
            for (let L = 0; L < s[0].body.length; L++) {
              const P = xe(s[0].body[L], "textord");
              q += P.text;
            }
            b = Number(q), w = b * 2;
          }
          const O = !w;
          f.body.forEach(function(q) {
            for (let L = 1; L < q.length; L += 2) {
              const P = xe(q[L], "styling");
              xe(P.body[0], "ordgroup").body.unshift(A);
            }
            if (O)
              w < q.length && (w = q.length);
            else {
              const L = q.length / 2;
              if (b < L)
                throw new l("Too many math in a row: " + ("expected " + b + ", but got " + L), q[0]);
            }
          });
          for (let q = 0; q < w; ++q) {
            let L = "r", P = 0;
            q % 2 === 1 ? L = "l" : q > 0 && O && (P = 1), a[q] = { type: "align", align: L, pregap: P, postgap: 0 };
          }
          return f.colSeparationType = O ? "align" : "alignat", f;
        };
        Bt({ type: "array", names: ["array", "darray"], props: { numArgs: 1 }, handler(o, s) {
          const a = (V0(s[0]) ? [s[0]] : xe(s[0], "ordgroup").body).map(function(u) {
            const f = es(u).text;
            if ("lcr".indexOf(f) !== -1)
              return { type: "align", align: f };
            if (f === "|")
              return { type: "separator", separator: "|" };
            if (f === ":")
              return { type: "separator", separator: ":" };
            throw new l("Unknown column alignment: " + f, u);
          }), c = { cols: a, hskipBeforeAndAfter: true, maxNumCols: a.length };
          return en(o.parser, c, ps(o.envName));
        }, htmlBuilder: qt, mathmlBuilder: Lt }), Bt({ type: "array", names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"], props: { numArgs: 0 }, handler(o) {
          const s = { matrix: null, pmatrix: ["(", ")"], bmatrix: ["[", "]"], Bmatrix: ["\\{", "\\}"], vmatrix: ["|", "|"], Vmatrix: ["\\Vert", "\\Vert"] }[o.envName.replace("*", "")];
          let a = "c";
          const c = { hskipBeforeAndAfter: false, cols: [{ type: "align", align: a }] };
          if (o.envName.charAt(o.envName.length - 1) === "*") {
            const b = o.parser;
            if (b.consumeSpaces(), b.fetch().text === "[") {
              if (b.consume(), b.consumeSpaces(), a = b.fetch().text, "lcr".indexOf(a) === -1)
                throw new l("Expected l or c or r", b.nextToken);
              b.consume(), b.consumeSpaces(), b.expect("]"), b.consume(), c.cols = [{ type: "align", align: a }];
            }
          }
          const u = en(o.parser, c, ps(o.envName)), f = Math.max(0, ...u.body.map((b) => b.length));
          return u.cols = new Array(f).fill({ type: "align", align: a }), s ? { type: "leftright", mode: o.mode, body: [u], left: s[0], right: s[1], rightColor: void 0 } : u;
        }, htmlBuilder: qt, mathmlBuilder: Lt }), Bt({ type: "array", names: ["smallmatrix"], props: { numArgs: 0 }, handler(o) {
          const s = { arraystretch: 0.5 }, a = en(o.parser, s, "script");
          return a.colSeparationType = "small", a;
        }, htmlBuilder: qt, mathmlBuilder: Lt }), Bt({ type: "array", names: ["subarray"], props: { numArgs: 1 }, handler(o, s) {
          const a = (V0(s[0]) ? [s[0]] : xe(s[0], "ordgroup").body).map(function(u) {
            const f = es(u).text;
            if ("lc".indexOf(f) !== -1)
              return { type: "align", align: f };
            throw new l("Unknown column alignment: " + f, u);
          });
          if (a.length > 1)
            throw new l("{subarray} can contain only one column");
          let c = { cols: a, hskipBeforeAndAfter: false, arraystretch: 0.5 };
          if (c = en(o.parser, c, "script"), c.body.length > 0 && c.body[0].length > 1)
            throw new l("{subarray} can contain only one column");
          return c;
        }, htmlBuilder: qt, mathmlBuilder: Lt }), Bt({ type: "array", names: ["cases", "dcases", "rcases", "drcases"], props: { numArgs: 0 }, handler(o) {
          const s = { arraystretch: 1.2, cols: [{ type: "align", align: "l", pregap: 0, postgap: 1 }, { type: "align", align: "l", pregap: 0, postgap: 0 }] }, a = en(o.parser, s, ps(o.envName));
          return { type: "leftright", mode: o.mode, body: [a], left: o.envName.indexOf("r") > -1 ? "." : "\\{", right: o.envName.indexOf("r") > -1 ? "\\}" : ".", rightColor: void 0 };
        }, htmlBuilder: qt, mathmlBuilder: Lt }), Bt({ type: "array", names: ["align", "align*", "aligned", "split"], props: { numArgs: 0 }, handler: Hi, htmlBuilder: qt, mathmlBuilder: Lt }), Bt({ type: "array", names: ["gathered", "gather", "gather*"], props: { numArgs: 0 }, handler(o) {
          C.contains(["gather", "gather*"], o.envName) && X0(o);
          const s = { cols: [{ type: "align", align: "c" }], addJot: true, colSeparationType: "gather", autoTag: ds(o.envName), emptySingleRow: true, leqno: o.parser.settings.leqno };
          return en(o.parser, s, "display");
        }, htmlBuilder: qt, mathmlBuilder: Lt }), Bt({ type: "array", names: ["alignat", "alignat*", "alignedat"], props: { numArgs: 1 }, handler: Hi, htmlBuilder: qt, mathmlBuilder: Lt }), Bt({ type: "array", names: ["equation", "equation*"], props: { numArgs: 0 }, handler(o) {
          X0(o);
          const s = { autoTag: ds(o.envName), emptySingleRow: true, singleRow: true, maxNumCols: 1, leqno: o.parser.settings.leqno };
          return en(o.parser, s, "display");
        }, htmlBuilder: qt, mathmlBuilder: Lt }), Bt({ type: "array", names: ["CD"], props: { numArgs: 0 }, handler(o) {
          return X0(o), Jh(o.parser);
        }, htmlBuilder: qt, mathmlBuilder: Lt }), v("\\nonumber", "\\gdef\\@eqnsw{0}"), v("\\notag", "\\nonumber"), ne({ type: "text", names: ["\\hline", "\\hdashline"], props: { numArgs: 0, allowedInText: true, allowedInMath: true }, handler(o, s) {
          throw new l(o.funcName + " valid only within array environment");
        } });
        var Vi = Pi;
        ne({ type: "environment", names: ["\\begin", "\\end"], props: { numArgs: 1, argTypes: ["text"] }, handler(o, s) {
          let { parser: a, funcName: c } = o;
          const u = s[0];
          if (u.type !== "ordgroup")
            throw new l("Invalid environment name", u);
          let f = "";
          for (let b = 0; b < u.body.length; ++b)
            f += xe(u.body[b], "textord").text;
          if (c === "\\begin") {
            if (!Vi.hasOwnProperty(f))
              throw new l("No such environment: " + f, u);
            const b = Vi[f], { args: w, optArgs: A } = a.parseArguments("\\begin{" + f + "}", b), O = { mode: a.mode, envName: f, parser: a }, q = b.handler(O, w, A);
            a.expect("\\end", false);
            const L = a.nextToken, P = xe(a.parseFunction(), "environment");
            if (P.name !== f)
              throw new l("Mismatch: \\begin{" + f + "} matched by \\end{" + P.name + "}", L);
            return q;
          }
          return { type: "environment", mode: a.mode, name: f, nameGroup: u };
        } });
        const ji = (o, s) => {
          const a = o.font, c = s.withFont(a);
          return Me(o.body, c);
        }, Ui = (o, s) => {
          const a = o.font, c = s.withFont(a);
          return Be(o.body, c);
        }, Ki = { "\\Bbb": "\\mathbb", "\\bold": "\\mathbf", "\\frak": "\\mathfrak", "\\bm": "\\boldsymbol" };
        ne({ type: "font", names: ["\\mathrm", "\\mathit", "\\mathbf", "\\mathnormal", "\\mathsfit", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"], props: { numArgs: 1, allowedInArgument: true }, handler: (o, s) => {
          let { parser: a, funcName: c } = o;
          const u = F0(s[0]);
          let f = c;
          return f in Ki && (f = Ki[f]), { type: "font", mode: a.mode, font: f.slice(1), body: u };
        }, htmlBuilder: ji, mathmlBuilder: Ui }), ne({ type: "mclass", names: ["\\boldsymbol", "\\bm"], props: { numArgs: 1 }, handler: (o, s) => {
          let { parser: a } = o;
          const c = s[0], u = C.isCharacterBox(c);
          return { type: "mclass", mode: a.mode, mclass: U0(c), body: [{ type: "font", mode: a.mode, font: "boldsymbol", body: c }], isCharacterBox: u };
        } }), ne({ type: "font", names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"], props: { numArgs: 0, allowedInText: true }, handler: (o, s) => {
          let { parser: a, funcName: c, breakOnTokenText: u } = o;
          const { mode: f } = a, b = a.parseExpression(true, u), w = "math" + c.slice(1);
          return { type: "font", mode: f, font: w, body: { type: "ordgroup", mode: a.mode, body: b } };
        }, htmlBuilder: ji, mathmlBuilder: Ui });
        const Gi = (o, s) => {
          let a = s;
          return o === "display" ? a = a.id >= Z.SCRIPT.id ? a.text() : Z.DISPLAY : o === "text" && a.size === Z.DISPLAY.size ? a = Z.TEXT : o === "script" ? a = Z.SCRIPT : o === "scriptscript" && (a = Z.SCRIPTSCRIPT), a;
        }, ms = (o, s) => {
          const a = Gi(o.size, s.style), c = a.fracNum(), u = a.fracDen();
          let f;
          f = s.havingStyle(c);
          const b = Me(o.numer, f, s);
          if (o.continued) {
            const Ne = 8.5 / s.fontMetrics().ptPerEm, Ce = 3.5 / s.fontMetrics().ptPerEm;
            b.height = b.height < Ne ? Ne : b.height, b.depth = b.depth < Ce ? Ce : b.depth;
          }
          f = s.havingStyle(u);
          const w = Me(o.denom, f, s);
          let A, O, q;
          o.hasBarLine ? (o.barSize ? (O = Fe(o.barSize, s), A = D.makeLineSpan("frac-line", s, O)) : A = D.makeLineSpan("frac-line", s), O = A.height, q = A.height) : (A = null, O = 0, q = s.fontMetrics().defaultRuleThickness);
          let L, P, Q;
          a.size === Z.DISPLAY.size || o.size === "display" ? (L = s.fontMetrics().num1, O > 0 ? P = 3 * q : P = 7 * q, Q = s.fontMetrics().denom1) : (O > 0 ? (L = s.fontMetrics().num2, P = q) : (L = s.fontMetrics().num3, P = 3 * q), Q = s.fontMetrics().denom2);
          let ee;
          if (A) {
            const Ne = s.fontMetrics().axisHeight;
            L - b.depth - (Ne + 0.5 * O) < P && (L += P - (L - b.depth - (Ne + 0.5 * O))), Ne - 0.5 * O - (w.height - Q) < P && (Q += P - (Ne - 0.5 * O - (w.height - Q)));
            const Ce = -(Ne - 0.5 * O);
            ee = D.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: w, shift: Q }, { type: "elem", elem: A, shift: Ce }, { type: "elem", elem: b, shift: -L }] }, s);
          } else {
            const Ne = L - b.depth - (w.height - Q);
            Ne < P && (L += 0.5 * (P - Ne), Q += 0.5 * (P - Ne)), ee = D.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: w, shift: Q }, { type: "elem", elem: b, shift: -L }] }, s);
          }
          f = s.havingStyle(a), ee.height *= f.sizeMultiplier / s.sizeMultiplier, ee.depth *= f.sizeMultiplier / s.sizeMultiplier;
          let ye;
          a.size === Z.DISPLAY.size ? ye = s.fontMetrics().delim1 : a.size === Z.SCRIPTSCRIPT.size ? ye = s.havingStyle(Z.SCRIPT).fontMetrics().delim2 : ye = s.fontMetrics().delim2;
          let Te, ke;
          return o.leftDelim == null ? Te = Zn(s, ["mopen"]) : Te = Kt.customSizedDelim(o.leftDelim, ye, true, s.havingStyle(a), o.mode, ["mopen"]), o.continued ? ke = D.makeSpan([]) : o.rightDelim == null ? ke = Zn(s, ["mclose"]) : ke = Kt.customSizedDelim(o.rightDelim, ye, true, s.havingStyle(a), o.mode, ["mclose"]), D.makeSpan(["mord"].concat(f.sizingClasses(s)), [Te, D.makeSpan(["mfrac"], [ee]), ke], s);
        }, fs = (o, s) => {
          let a = new W.MathNode("mfrac", [Be(o.numer, s), Be(o.denom, s)]);
          if (!o.hasBarLine)
            a.setAttribute("linethickness", "0px");
          else if (o.barSize) {
            const u = Fe(o.barSize, s);
            a.setAttribute("linethickness", J(u));
          }
          const c = Gi(o.size, s.style);
          if (c.size !== s.style.size) {
            a = new W.MathNode("mstyle", [a]);
            const u = c.size === Z.DISPLAY.size ? "true" : "false";
            a.setAttribute("displaystyle", u), a.setAttribute("scriptlevel", "0");
          }
          if (o.leftDelim != null || o.rightDelim != null) {
            const u = [];
            if (o.leftDelim != null) {
              const f = new W.MathNode("mo", [new W.TextNode(o.leftDelim.replace("\\", ""))]);
              f.setAttribute("fence", "true"), u.push(f);
            }
            if (u.push(a), o.rightDelim != null) {
              const f = new W.MathNode("mo", [new W.TextNode(o.rightDelim.replace("\\", ""))]);
              f.setAttribute("fence", "true"), u.push(f);
            }
            return Qr(u);
          }
          return a;
        };
        ne({ type: "genfrac", names: ["\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac", "\\\\bracefrac", "\\\\brackfrac"], props: { numArgs: 2, allowedInArgument: true }, handler: (o, s) => {
          let { parser: a, funcName: c } = o;
          const u = s[0], f = s[1];
          let b, w = null, A = null, O = "auto";
          switch (c) {
            case "\\dfrac":
            case "\\frac":
            case "\\tfrac":
              b = true;
              break;
            case "\\\\atopfrac":
              b = false;
              break;
            case "\\dbinom":
            case "\\binom":
            case "\\tbinom":
              b = false, w = "(", A = ")";
              break;
            case "\\\\bracefrac":
              b = false, w = "\\{", A = "\\}";
              break;
            case "\\\\brackfrac":
              b = false, w = "[", A = "]";
              break;
            default:
              throw new Error("Unrecognized genfrac command");
          }
          switch (c) {
            case "\\dfrac":
            case "\\dbinom":
              O = "display";
              break;
            case "\\tfrac":
            case "\\tbinom":
              O = "text";
              break;
          }
          return { type: "genfrac", mode: a.mode, continued: false, numer: u, denom: f, hasBarLine: b, leftDelim: w, rightDelim: A, size: O, barSize: null };
        }, htmlBuilder: ms, mathmlBuilder: fs }), ne({ type: "genfrac", names: ["\\cfrac"], props: { numArgs: 2 }, handler: (o, s) => {
          let { parser: a, funcName: c } = o;
          const u = s[0], f = s[1];
          return { type: "genfrac", mode: a.mode, continued: true, numer: u, denom: f, hasBarLine: true, leftDelim: null, rightDelim: null, size: "display", barSize: null };
        } }), ne({ type: "infix", names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"], props: { numArgs: 0, infix: true }, handler(o) {
          let { parser: s, funcName: a, token: c } = o, u;
          switch (a) {
            case "\\over":
              u = "\\frac";
              break;
            case "\\choose":
              u = "\\binom";
              break;
            case "\\atop":
              u = "\\\\atopfrac";
              break;
            case "\\brace":
              u = "\\\\bracefrac";
              break;
            case "\\brack":
              u = "\\\\brackfrac";
              break;
            default:
              throw new Error("Unrecognized infix genfrac command");
          }
          return { type: "infix", mode: s.mode, replaceWith: u, token: c };
        } });
        const Xi = ["display", "text", "script", "scriptscript"], Wi = function(o) {
          let s = null;
          return o.length > 0 && (s = o, s = s === "." ? null : s), s;
        };
        ne({ type: "genfrac", names: ["\\genfrac"], props: { numArgs: 6, allowedInArgument: true, argTypes: ["math", "math", "size", "text", "math", "math"] }, handler(o, s) {
          let { parser: a } = o;
          const c = s[4], u = s[5], f = F0(s[0]), b = f.type === "atom" && f.family === "open" ? Wi(f.text) : null, w = F0(s[1]), A = w.type === "atom" && w.family === "close" ? Wi(w.text) : null, O = xe(s[2], "size");
          let q, L = null;
          O.isBlank ? q = true : (L = O.value, q = L.number > 0);
          let P = "auto", Q = s[3];
          if (Q.type === "ordgroup") {
            if (Q.body.length > 0) {
              const ee = xe(Q.body[0], "textord");
              P = Xi[Number(ee.text)];
            }
          } else
            Q = xe(Q, "textord"), P = Xi[Number(Q.text)];
          return { type: "genfrac", mode: a.mode, numer: c, denom: u, continued: false, hasBarLine: q, barSize: L, leftDelim: b, rightDelim: A, size: P };
        }, htmlBuilder: ms, mathmlBuilder: fs }), ne({ type: "infix", names: ["\\above"], props: { numArgs: 1, argTypes: ["size"], infix: true }, handler(o, s) {
          let { parser: a, funcName: c, token: u } = o;
          return { type: "infix", mode: a.mode, replaceWith: "\\\\abovefrac", size: xe(s[0], "size").value, token: u };
        } }), ne({ type: "genfrac", names: ["\\\\abovefrac"], props: { numArgs: 3, argTypes: ["math", "size", "math"] }, handler: (o, s) => {
          let { parser: a, funcName: c } = o;
          const u = s[0], f = M(xe(s[1], "infix").size), b = s[2], w = f.number > 0;
          return { type: "genfrac", mode: a.mode, numer: u, denom: b, continued: false, hasBarLine: w, barSize: f, leftDelim: null, rightDelim: null, size: "auto" };
        }, htmlBuilder: ms, mathmlBuilder: fs });
        const Yi = (o, s) => {
          const a = s.style;
          let c, u;
          o.type === "supsub" ? (c = o.sup ? Me(o.sup, s.havingStyle(a.sup()), s) : Me(o.sub, s.havingStyle(a.sub()), s), u = xe(o.base, "horizBrace")) : u = xe(o, "horizBrace");
          const f = Me(u.base, s.havingBaseStyle(Z.DISPLAY)), b = Ut.svgSpan(u, s);
          let w;
          if (u.isOver ? (w = D.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: f }, { type: "kern", size: 0.1 }, { type: "elem", elem: b }] }, s), w.children[0].children[0].children[1].classes.push("svg-align")) : (w = D.makeVList({ positionType: "bottom", positionData: f.depth + 0.1 + b.height, children: [{ type: "elem", elem: b }, { type: "kern", size: 0.1 }, { type: "elem", elem: f }] }, s), w.children[0].children[0].children[0].classes.push("svg-align")), c) {
            const A = D.makeSpan(["mord", u.isOver ? "mover" : "munder"], [w], s);
            u.isOver ? w = D.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: A }, { type: "kern", size: 0.2 }, { type: "elem", elem: c }] }, s) : w = D.makeVList({ positionType: "bottom", positionData: A.depth + 0.2 + c.height + c.depth, children: [{ type: "elem", elem: c }, { type: "kern", size: 0.2 }, { type: "elem", elem: A }] }, s);
          }
          return D.makeSpan(["mord", u.isOver ? "mover" : "munder"], [w], s);
        };
        ne({ type: "horizBrace", names: ["\\overbrace", "\\underbrace"], props: { numArgs: 1 }, handler(o, s) {
          let { parser: a, funcName: c } = o;
          return { type: "horizBrace", mode: a.mode, label: c, isOver: /^\\over/.test(c), base: s[0] };
        }, htmlBuilder: Yi, mathmlBuilder: (o, s) => {
          const a = Ut.mathMLnode(o.label);
          return new W.MathNode(o.isOver ? "mover" : "munder", [Be(o.base, s), a]);
        } }), ne({ type: "href", names: ["\\href"], props: { numArgs: 2, argTypes: ["url", "original"], allowedInText: true }, handler: (o, s) => {
          let { parser: a } = o;
          const c = s[1], u = xe(s[0], "url").url;
          return a.settings.isTrusted({ command: "\\href", url: u }) ? { type: "href", mode: a.mode, href: u, body: Ge(c) } : a.formatUnsupportedCmd("\\href");
        }, htmlBuilder: (o, s) => {
          const a = Je(o.body, s, false);
          return D.makeAnchor(o.href, [], a, s);
        }, mathmlBuilder: (o, s) => {
          let a = Jt(o.body, s);
          return a instanceof gt || (a = new gt("mrow", [a])), a.setAttribute("href", o.href), a;
        } }), ne({ type: "href", names: ["\\url"], props: { numArgs: 1, argTypes: ["url"], allowedInText: true }, handler: (o, s) => {
          let { parser: a } = o;
          const c = xe(s[0], "url").url;
          if (!a.settings.isTrusted({ command: "\\url", url: c }))
            return a.formatUnsupportedCmd("\\url");
          const u = [];
          for (let b = 0; b < c.length; b++) {
            let w = c[b];
            w === "~" && (w = "\\textasciitilde"), u.push({ type: "textord", mode: "text", text: w });
          }
          const f = { type: "text", mode: a.mode, font: "\\texttt", body: u };
          return { type: "href", mode: a.mode, href: c, body: Ge(f) };
        } }), ne({ type: "hbox", names: ["\\hbox"], props: { numArgs: 1, argTypes: ["text"], allowedInText: true, primitive: true }, handler(o, s) {
          let { parser: a } = o;
          return { type: "hbox", mode: a.mode, body: Ge(s[0]) };
        }, htmlBuilder(o, s) {
          const a = Je(o.body, s, false);
          return D.makeFragment(a);
        }, mathmlBuilder(o, s) {
          return new W.MathNode("mrow", ut(o.body, s));
        } }), ne({ type: "html", names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"], props: { numArgs: 2, argTypes: ["raw", "original"], allowedInText: true }, handler: (o, s) => {
          let { parser: a, funcName: c, token: u } = o;
          const f = xe(s[0], "raw").string, b = s[1];
          a.settings.strict && a.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
          let w;
          const A = {};
          switch (c) {
            case "\\htmlClass":
              A.class = f, w = { command: "\\htmlClass", class: f };
              break;
            case "\\htmlId":
              A.id = f, w = { command: "\\htmlId", id: f };
              break;
            case "\\htmlStyle":
              A.style = f, w = { command: "\\htmlStyle", style: f };
              break;
            case "\\htmlData": {
              const O = f.split(",");
              for (let q = 0; q < O.length; q++) {
                const L = O[q].split("=");
                if (L.length !== 2)
                  throw new l("Error parsing key-value for \\htmlData");
                A["data-" + L[0].trim()] = L[1].trim();
              }
              w = { command: "\\htmlData", attributes: A };
              break;
            }
            default:
              throw new Error("Unrecognized html command");
          }
          return a.settings.isTrusted(w) ? { type: "html", mode: a.mode, attributes: A, body: Ge(b) } : a.formatUnsupportedCmd(c);
        }, htmlBuilder: (o, s) => {
          const a = Je(o.body, s, false), c = ["enclosing"];
          o.attributes.class && c.push(...o.attributes.class.trim().split(/\s+/));
          const u = D.makeSpan(c, a, s);
          for (const f in o.attributes)
            f !== "class" && o.attributes.hasOwnProperty(f) && u.setAttribute(f, o.attributes[f]);
          return u;
        }, mathmlBuilder: (o, s) => Jt(o.body, s) }), ne({ type: "htmlmathml", names: ["\\html@mathml"], props: { numArgs: 2, allowedInText: true }, handler: (o, s) => {
          let { parser: a } = o;
          return { type: "htmlmathml", mode: a.mode, html: Ge(s[0]), mathml: Ge(s[1]) };
        }, htmlBuilder: (o, s) => {
          const a = Je(o.html, s, false);
          return D.makeFragment(a);
        }, mathmlBuilder: (o, s) => Jt(o.mathml, s) });
        const gs = function(o) {
          if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(o))
            return { number: +o, unit: "bp" };
          {
            const s = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(o);
            if (!s)
              throw new l("Invalid size: '" + o + "' in \\includegraphics");
            const a = { number: +(s[1] + s[2]), unit: s[3] };
            if (!ti(a))
              throw new l("Invalid unit: '" + a.unit + "' in \\includegraphics.");
            return a;
          }
        };
        ne({ type: "includegraphics", names: ["\\includegraphics"], props: { numArgs: 1, numOptionalArgs: 1, argTypes: ["raw", "url"], allowedInText: false }, handler: (o, s, a) => {
          let { parser: c } = o, u = { number: 0, unit: "em" }, f = { number: 0.9, unit: "em" }, b = { number: 0, unit: "em" }, w = "";
          if (a[0]) {
            const O = xe(a[0], "raw").string.split(",");
            for (let q = 0; q < O.length; q++) {
              const L = O[q].split("=");
              if (L.length === 2) {
                const P = L[1].trim();
                switch (L[0].trim()) {
                  case "alt":
                    w = P;
                    break;
                  case "width":
                    u = gs(P);
                    break;
                  case "height":
                    f = gs(P);
                    break;
                  case "totalheight":
                    b = gs(P);
                    break;
                  default:
                    throw new l("Invalid key: '" + L[0] + "' in \\includegraphics.");
                }
              }
            }
          }
          const A = xe(s[0], "url").url;
          return w === "" && (w = A, w = w.replace(/^.*[\\/]/, ""), w = w.substring(0, w.lastIndexOf("."))), c.settings.isTrusted({ command: "\\includegraphics", url: A }) ? { type: "includegraphics", mode: c.mode, alt: w, width: u, height: f, totalheight: b, src: A } : c.formatUnsupportedCmd("\\includegraphics");
        }, htmlBuilder: (o, s) => {
          const a = Fe(o.height, s);
          let c = 0;
          o.totalheight.number > 0 && (c = Fe(o.totalheight, s) - a);
          let u = 0;
          o.width.number > 0 && (u = Fe(o.width, s));
          const f = { height: J(a + c) };
          u > 0 && (f.width = J(u)), c > 0 && (f.verticalAlign = J(-c));
          const b = new bh(o.src, o.alt, f);
          return b.height = a, b.depth = c, b;
        }, mathmlBuilder: (o, s) => {
          const a = new W.MathNode("mglyph", []);
          a.setAttribute("alt", o.alt);
          const c = Fe(o.height, s);
          let u = 0;
          if (o.totalheight.number > 0 && (u = Fe(o.totalheight, s) - c, a.setAttribute("valign", J(-u))), a.setAttribute("height", J(c + u)), o.width.number > 0) {
            const f = Fe(o.width, s);
            a.setAttribute("width", J(f));
          }
          return a.setAttribute("src", o.src), a;
        } }), ne({ type: "kern", names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"], props: { numArgs: 1, argTypes: ["size"], primitive: true, allowedInText: true }, handler(o, s) {
          let { parser: a, funcName: c } = o;
          const u = xe(s[0], "size");
          if (a.settings.strict) {
            const f = c[1] === "m", b = u.value.unit === "mu";
            f ? (b || a.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + c + " supports only mu units, " + ("not " + u.value.unit + " units")), a.mode !== "math" && a.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + c + " works only in math mode")) : b && a.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + c + " doesn't support mu units");
          }
          return { type: "kern", mode: a.mode, dimension: u.value };
        }, htmlBuilder(o, s) {
          return D.makeGlue(o.dimension, s);
        }, mathmlBuilder(o, s) {
          const a = Fe(o.dimension, s);
          return new W.SpaceNode(a);
        } }), ne({ type: "lap", names: ["\\mathllap", "\\mathrlap", "\\mathclap"], props: { numArgs: 1, allowedInText: true }, handler: (o, s) => {
          let { parser: a, funcName: c } = o;
          const u = s[0];
          return { type: "lap", mode: a.mode, alignment: c.slice(5), body: u };
        }, htmlBuilder: (o, s) => {
          let a;
          o.alignment === "clap" ? (a = D.makeSpan([], [Me(o.body, s)]), a = D.makeSpan(["inner"], [a], s)) : a = D.makeSpan(["inner"], [Me(o.body, s)]);
          const c = D.makeSpan(["fix"], []);
          let u = D.makeSpan([o.alignment], [a, c], s);
          const f = D.makeSpan(["strut"]);
          return f.style.height = J(u.height + u.depth), u.depth && (f.style.verticalAlign = J(-u.depth)), u.children.unshift(f), u = D.makeSpan(["thinbox"], [u], s), D.makeSpan(["mord", "vbox"], [u], s);
        }, mathmlBuilder: (o, s) => {
          const a = new W.MathNode("mpadded", [Be(o.body, s)]);
          if (o.alignment !== "rlap") {
            const c = o.alignment === "llap" ? "-1" : "-0.5";
            a.setAttribute("lspace", c + "width");
          }
          return a.setAttribute("width", "0px"), a;
        } }), ne({ type: "styling", names: ["\\(", "$"], props: { numArgs: 0, allowedInText: true, allowedInMath: false }, handler(o, s) {
          let { funcName: a, parser: c } = o;
          const u = c.mode;
          c.switchMode("math");
          const f = a === "\\(" ? "\\)" : "$", b = c.parseExpression(false, f);
          return c.expect(f), c.switchMode(u), { type: "styling", mode: c.mode, style: "text", body: b };
        } }), ne({ type: "text", names: ["\\)", "\\]"], props: { numArgs: 0, allowedInText: true, allowedInMath: false }, handler(o, s) {
          throw new l("Mismatched " + o.funcName);
        } });
        const Qi = (o, s) => {
          switch (s.style.size) {
            case Z.DISPLAY.size:
              return o.display;
            case Z.TEXT.size:
              return o.text;
            case Z.SCRIPT.size:
              return o.script;
            case Z.SCRIPTSCRIPT.size:
              return o.scriptscript;
            default:
              return o.text;
          }
        };
        ne({ type: "mathchoice", names: ["\\mathchoice"], props: { numArgs: 4, primitive: true }, handler: (o, s) => {
          let { parser: a } = o;
          return { type: "mathchoice", mode: a.mode, display: Ge(s[0]), text: Ge(s[1]), script: Ge(s[2]), scriptscript: Ge(s[3]) };
        }, htmlBuilder: (o, s) => {
          const a = Qi(o, s), c = Je(a, s, false);
          return D.makeFragment(c);
        }, mathmlBuilder: (o, s) => {
          const a = Qi(o, s);
          return Jt(a, s);
        } });
        const Zi = (o, s, a, c, u, f, b) => {
          o = D.makeSpan([], [o]);
          const w = a && C.isCharacterBox(a);
          let A, O;
          if (s) {
            const P = Me(s, c.havingStyle(u.sup()), c);
            O = { elem: P, kern: Math.max(c.fontMetrics().bigOpSpacing1, c.fontMetrics().bigOpSpacing3 - P.depth) };
          }
          if (a) {
            const P = Me(a, c.havingStyle(u.sub()), c);
            A = { elem: P, kern: Math.max(c.fontMetrics().bigOpSpacing2, c.fontMetrics().bigOpSpacing4 - P.height) };
          }
          let q;
          if (O && A) {
            const P = c.fontMetrics().bigOpSpacing5 + A.elem.height + A.elem.depth + A.kern + o.depth + b;
            q = D.makeVList({ positionType: "bottom", positionData: P, children: [{ type: "kern", size: c.fontMetrics().bigOpSpacing5 }, { type: "elem", elem: A.elem, marginLeft: J(-f) }, { type: "kern", size: A.kern }, { type: "elem", elem: o }, { type: "kern", size: O.kern }, { type: "elem", elem: O.elem, marginLeft: J(f) }, { type: "kern", size: c.fontMetrics().bigOpSpacing5 }] }, c);
          } else if (A) {
            const P = o.height - b;
            q = D.makeVList({ positionType: "top", positionData: P, children: [{ type: "kern", size: c.fontMetrics().bigOpSpacing5 }, { type: "elem", elem: A.elem, marginLeft: J(-f) }, { type: "kern", size: A.kern }, { type: "elem", elem: o }] }, c);
          } else if (O) {
            const P = o.depth + b;
            q = D.makeVList({ positionType: "bottom", positionData: P, children: [{ type: "elem", elem: o }, { type: "kern", size: O.kern }, { type: "elem", elem: O.elem, marginLeft: J(f) }, { type: "kern", size: c.fontMetrics().bigOpSpacing5 }] }, c);
          } else
            return o;
          const L = [q];
          if (A && f !== 0 && !w) {
            const P = D.makeSpan(["mspace"], [], c);
            P.style.marginRight = J(f), L.unshift(P);
          }
          return D.makeSpan(["mop", "op-limits"], L, c);
        }, Ji = ["\\smallint"], Mn = (o, s) => {
          let a, c, u = false, f;
          o.type === "supsub" ? (a = o.sup, c = o.sub, f = xe(o.base, "op"), u = true) : f = xe(o, "op");
          const b = s.style;
          let w = false;
          b.size === Z.DISPLAY.size && f.symbol && !C.contains(Ji, f.name) && (w = true);
          let A;
          if (f.symbol) {
            const L = w ? "Size2-Regular" : "Size1-Regular";
            let P = "";
            if ((f.name === "\\oiint" || f.name === "\\oiiint") && (P = f.name.slice(1), f.name = P === "oiint" ? "\\iint" : "\\iiint"), A = D.makeSymbol(f.name, L, "math", s, ["mop", "op-symbol", w ? "large-op" : "small-op"]), P.length > 0) {
              const Q = A.italic, ee = D.staticSvg(P + "Size" + (w ? "2" : "1"), s);
              A = D.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: A, shift: 0 }, { type: "elem", elem: ee, shift: w ? 0.08 : 0 }] }, s), f.name = "\\" + P, A.classes.unshift("mop"), A.italic = Q;
            }
          } else if (f.body) {
            const L = Je(f.body, s, true);
            L.length === 1 && L[0] instanceof xt ? (A = L[0], A.classes[0] = "mop") : A = D.makeSpan(["mop"], L, s);
          } else {
            const L = [];
            for (let P = 1; P < f.name.length; P++)
              L.push(D.mathsym(f.name[P], f.mode, s));
            A = D.makeSpan(["mop"], L, s);
          }
          let O = 0, q = 0;
          return (A instanceof xt || f.name === "\\oiint" || f.name === "\\oiiint") && !f.suppressBaseShift && (O = (A.height - A.depth) / 2 - s.fontMetrics().axisHeight, q = A.italic), u ? Zi(A, a, c, s, b, q, O) : (O && (A.style.position = "relative", A.style.top = J(O)), A);
        }, t0 = (o, s) => {
          let a;
          if (o.symbol)
            a = new gt("mo", [wt(o.name, o.mode)]), C.contains(Ji, o.name) && a.setAttribute("largeop", "false");
          else if (o.body)
            a = new gt("mo", ut(o.body, s));
          else {
            a = new gt("mi", [new _t(o.name.slice(1))]);
            const c = new gt("mo", [wt("\u2061", "text")]);
            o.parentIsSupSub ? a = new gt("mrow", [a, c]) : a = gi([a, c]);
          }
          return a;
        }, pu = { "\u220F": "\\prod", "\u2210": "\\coprod", "\u2211": "\\sum", "\u22C0": "\\bigwedge", "\u22C1": "\\bigvee", "\u22C2": "\\bigcap", "\u22C3": "\\bigcup", "\u2A00": "\\bigodot", "\u2A01": "\\bigoplus", "\u2A02": "\\bigotimes", "\u2A04": "\\biguplus", "\u2A06": "\\bigsqcup" };
        ne({ type: "op", names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "\u220F", "\u2210", "\u2211", "\u22C0", "\u22C1", "\u22C2", "\u22C3", "\u2A00", "\u2A01", "\u2A02", "\u2A04", "\u2A06"], props: { numArgs: 0 }, handler: (o, s) => {
          let { parser: a, funcName: c } = o, u = c;
          return u.length === 1 && (u = pu[u]), { type: "op", mode: a.mode, limits: true, parentIsSupSub: false, symbol: true, name: u };
        }, htmlBuilder: Mn, mathmlBuilder: t0 }), ne({ type: "op", names: ["\\mathop"], props: { numArgs: 1, primitive: true }, handler: (o, s) => {
          let { parser: a } = o;
          const c = s[0];
          return { type: "op", mode: a.mode, limits: false, parentIsSupSub: false, symbol: false, body: Ge(c) };
        }, htmlBuilder: Mn, mathmlBuilder: t0 });
        const mu = { "\u222B": "\\int", "\u222C": "\\iint", "\u222D": "\\iiint", "\u222E": "\\oint", "\u222F": "\\oiint", "\u2230": "\\oiiint" };
        ne({ type: "op", names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"], props: { numArgs: 0 }, handler(o) {
          let { parser: s, funcName: a } = o;
          return { type: "op", mode: s.mode, limits: false, parentIsSupSub: false, symbol: false, name: a };
        }, htmlBuilder: Mn, mathmlBuilder: t0 }), ne({ type: "op", names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"], props: { numArgs: 0 }, handler(o) {
          let { parser: s, funcName: a } = o;
          return { type: "op", mode: s.mode, limits: true, parentIsSupSub: false, symbol: false, name: a };
        }, htmlBuilder: Mn, mathmlBuilder: t0 }), ne({ type: "op", names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "\u222B", "\u222C", "\u222D", "\u222E", "\u222F", "\u2230"], props: { numArgs: 0 }, handler(o) {
          let { parser: s, funcName: a } = o, c = a;
          return c.length === 1 && (c = mu[c]), { type: "op", mode: s.mode, limits: false, parentIsSupSub: false, symbol: true, name: c };
        }, htmlBuilder: Mn, mathmlBuilder: t0 });
        const ea = (o, s) => {
          let a, c, u = false, f;
          o.type === "supsub" ? (a = o.sup, c = o.sub, f = xe(o.base, "operatorname"), u = true) : f = xe(o, "operatorname");
          let b;
          if (f.body.length > 0) {
            const w = f.body.map((O) => {
              const q = O.text;
              return typeof q == "string" ? { type: "textord", mode: O.mode, text: q } : O;
            }), A = Je(w, s.withFont("mathrm"), true);
            for (let O = 0; O < A.length; O++) {
              const q = A[O];
              q instanceof xt && (q.text = q.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
            }
            b = D.makeSpan(["mop"], A, s);
          } else
            b = D.makeSpan(["mop"], [], s);
          return u ? Zi(b, a, c, s, s.style, 0, 0) : b;
        };
        ne({ type: "operatorname", names: ["\\operatorname@", "\\operatornamewithlimits"], props: { numArgs: 1 }, handler: (o, s) => {
          let { parser: a, funcName: c } = o;
          const u = s[0];
          return { type: "operatorname", mode: a.mode, body: Ge(u), alwaysHandleSupSub: c === "\\operatornamewithlimits", limits: false, parentIsSupSub: false };
        }, htmlBuilder: ea, mathmlBuilder: (o, s) => {
          let a = ut(o.body, s.withFont("mathrm")), c = true;
          for (let b = 0; b < a.length; b++) {
            const w = a[b];
            if (!(w instanceof W.SpaceNode))
              if (w instanceof W.MathNode)
                switch (w.type) {
                  case "mi":
                  case "mn":
                  case "ms":
                  case "mspace":
                  case "mtext":
                    break;
                  case "mo": {
                    const A = w.children[0];
                    w.children.length === 1 && A instanceof W.TextNode ? A.text = A.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : c = false;
                    break;
                  }
                  default:
                    c = false;
                }
              else
                c = false;
          }
          if (c) {
            const b = a.map((w) => w.toText()).join("");
            a = [new W.TextNode(b)];
          }
          const u = new W.MathNode("mi", a);
          u.setAttribute("mathvariant", "normal");
          const f = new W.MathNode("mo", [wt("\u2061", "text")]);
          return o.parentIsSupSub ? new W.MathNode("mrow", [u, f]) : W.newDocumentFragment([u, f]);
        } }), v("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@"), hn({ type: "ordgroup", htmlBuilder(o, s) {
          return o.semisimple ? D.makeFragment(Je(o.body, s, false)) : D.makeSpan(["mord"], Je(o.body, s, true), s);
        }, mathmlBuilder(o, s) {
          return Jt(o.body, s, true);
        } }), ne({ type: "overline", names: ["\\overline"], props: { numArgs: 1 }, handler(o, s) {
          let { parser: a } = o;
          const c = s[0];
          return { type: "overline", mode: a.mode, body: c };
        }, htmlBuilder(o, s) {
          const a = Me(o.body, s.havingCrampedStyle()), c = D.makeLineSpan("overline-line", s), u = s.fontMetrics().defaultRuleThickness, f = D.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: a }, { type: "kern", size: 3 * u }, { type: "elem", elem: c }, { type: "kern", size: u }] }, s);
          return D.makeSpan(["mord", "overline"], [f], s);
        }, mathmlBuilder(o, s) {
          const a = new W.MathNode("mo", [new W.TextNode("\u203E")]);
          a.setAttribute("stretchy", "true");
          const c = new W.MathNode("mover", [Be(o.body, s), a]);
          return c.setAttribute("accent", "true"), c;
        } }), ne({ type: "phantom", names: ["\\phantom"], props: { numArgs: 1, allowedInText: true }, handler: (o, s) => {
          let { parser: a } = o;
          const c = s[0];
          return { type: "phantom", mode: a.mode, body: Ge(c) };
        }, htmlBuilder: (o, s) => {
          const a = Je(o.body, s.withPhantom(), false);
          return D.makeFragment(a);
        }, mathmlBuilder: (o, s) => {
          const a = ut(o.body, s);
          return new W.MathNode("mphantom", a);
        } }), ne({ type: "hphantom", names: ["\\hphantom"], props: { numArgs: 1, allowedInText: true }, handler: (o, s) => {
          let { parser: a } = o;
          const c = s[0];
          return { type: "hphantom", mode: a.mode, body: c };
        }, htmlBuilder: (o, s) => {
          let a = D.makeSpan([], [Me(o.body, s.withPhantom())]);
          if (a.height = 0, a.depth = 0, a.children)
            for (let c = 0; c < a.children.length; c++)
              a.children[c].height = 0, a.children[c].depth = 0;
          return a = D.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: a }] }, s), D.makeSpan(["mord"], [a], s);
        }, mathmlBuilder: (o, s) => {
          const a = ut(Ge(o.body), s), c = new W.MathNode("mphantom", a), u = new W.MathNode("mpadded", [c]);
          return u.setAttribute("height", "0px"), u.setAttribute("depth", "0px"), u;
        } }), ne({ type: "vphantom", names: ["\\vphantom"], props: { numArgs: 1, allowedInText: true }, handler: (o, s) => {
          let { parser: a } = o;
          const c = s[0];
          return { type: "vphantom", mode: a.mode, body: c };
        }, htmlBuilder: (o, s) => {
          const a = D.makeSpan(["inner"], [Me(o.body, s.withPhantom())]), c = D.makeSpan(["fix"], []);
          return D.makeSpan(["mord", "rlap"], [a, c], s);
        }, mathmlBuilder: (o, s) => {
          const a = ut(Ge(o.body), s), c = new W.MathNode("mphantom", a), u = new W.MathNode("mpadded", [c]);
          return u.setAttribute("width", "0px"), u;
        } }), ne({ type: "raisebox", names: ["\\raisebox"], props: { numArgs: 2, argTypes: ["size", "hbox"], allowedInText: true }, handler(o, s) {
          let { parser: a } = o;
          const c = xe(s[0], "size").value, u = s[1];
          return { type: "raisebox", mode: a.mode, dy: c, body: u };
        }, htmlBuilder(o, s) {
          const a = Me(o.body, s), c = Fe(o.dy, s);
          return D.makeVList({ positionType: "shift", positionData: -c, children: [{ type: "elem", elem: a }] }, s);
        }, mathmlBuilder(o, s) {
          const a = new W.MathNode("mpadded", [Be(o.body, s)]), c = o.dy.number + o.dy.unit;
          return a.setAttribute("voffset", c), a;
        } }), ne({ type: "internal", names: ["\\relax"], props: { numArgs: 0, allowedInText: true, allowedInArgument: true }, handler(o) {
          let { parser: s } = o;
          return { type: "internal", mode: s.mode };
        } }), ne({ type: "rule", names: ["\\rule"], props: { numArgs: 2, numOptionalArgs: 1, allowedInText: true, allowedInMath: true, argTypes: ["size", "size", "size"] }, handler(o, s, a) {
          let { parser: c } = o;
          const u = a[0], f = xe(s[0], "size"), b = xe(s[1], "size");
          return { type: "rule", mode: c.mode, shift: u && xe(u, "size").value, width: f.value, height: b.value };
        }, htmlBuilder(o, s) {
          const a = D.makeSpan(["mord", "rule"], [], s), c = Fe(o.width, s), u = Fe(o.height, s), f = o.shift ? Fe(o.shift, s) : 0;
          return a.style.borderRightWidth = J(c), a.style.borderTopWidth = J(u), a.style.bottom = J(f), a.width = c, a.height = u + f, a.depth = -f, a.maxFontSize = u * 1.125 * s.sizeMultiplier, a;
        }, mathmlBuilder(o, s) {
          const a = Fe(o.width, s), c = Fe(o.height, s), u = o.shift ? Fe(o.shift, s) : 0, f = s.color && s.getColor() || "black", b = new W.MathNode("mspace");
          b.setAttribute("mathbackground", f), b.setAttribute("width", J(a)), b.setAttribute("height", J(c));
          const w = new W.MathNode("mpadded", [b]);
          return u >= 0 ? w.setAttribute("height", J(u)) : (w.setAttribute("height", J(u)), w.setAttribute("depth", J(-u))), w.setAttribute("voffset", J(u)), w;
        } });
        function ta(o, s, a) {
          const c = Je(o, s, false), u = s.sizeMultiplier / a.sizeMultiplier;
          for (let f = 0; f < c.length; f++) {
            const b = c[f].classes.indexOf("sizing");
            b < 0 ? Array.prototype.push.apply(c[f].classes, s.sizingClasses(a)) : c[f].classes[b + 1] === "reset-size" + s.size && (c[f].classes[b + 1] = "reset-size" + a.size), c[f].height *= u, c[f].depth *= u;
          }
          return D.makeFragment(c);
        }
        const na = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];
        ne({ type: "sizing", names: na, props: { numArgs: 0, allowedInText: true }, handler: (o, s) => {
          let { breakOnTokenText: a, funcName: c, parser: u } = o;
          const f = u.parseExpression(false, a);
          return { type: "sizing", mode: u.mode, size: na.indexOf(c) + 1, body: f };
        }, htmlBuilder: (o, s) => {
          const a = s.havingSize(o.size);
          return ta(o.body, a, s);
        }, mathmlBuilder: (o, s) => {
          const a = s.havingSize(o.size), c = ut(o.body, a), u = new W.MathNode("mstyle", c);
          return u.setAttribute("mathsize", J(a.sizeMultiplier)), u;
        } }), ne({ type: "smash", names: ["\\smash"], props: { numArgs: 1, numOptionalArgs: 1, allowedInText: true }, handler: (o, s, a) => {
          let { parser: c } = o, u = false, f = false;
          const b = a[0] && xe(a[0], "ordgroup");
          if (b) {
            let A = "";
            for (let O = 0; O < b.body.length; ++O)
              if (A = b.body[O].text, A === "t")
                u = true;
              else if (A === "b")
                f = true;
              else {
                u = false, f = false;
                break;
              }
          } else
            u = true, f = true;
          const w = s[0];
          return { type: "smash", mode: c.mode, body: w, smashHeight: u, smashDepth: f };
        }, htmlBuilder: (o, s) => {
          const a = D.makeSpan([], [Me(o.body, s)]);
          if (!o.smashHeight && !o.smashDepth)
            return a;
          if (o.smashHeight && (a.height = 0, a.children))
            for (let u = 0; u < a.children.length; u++)
              a.children[u].height = 0;
          if (o.smashDepth && (a.depth = 0, a.children))
            for (let u = 0; u < a.children.length; u++)
              a.children[u].depth = 0;
          const c = D.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: a }] }, s);
          return D.makeSpan(["mord"], [c], s);
        }, mathmlBuilder: (o, s) => {
          const a = new W.MathNode("mpadded", [Be(o.body, s)]);
          return o.smashHeight && a.setAttribute("height", "0px"), o.smashDepth && a.setAttribute("depth", "0px"), a;
        } }), ne({ type: "sqrt", names: ["\\sqrt"], props: { numArgs: 1, numOptionalArgs: 1 }, handler(o, s, a) {
          let { parser: c } = o;
          const u = a[0], f = s[0];
          return { type: "sqrt", mode: c.mode, body: f, index: u };
        }, htmlBuilder(o, s) {
          let a = Me(o.body, s.havingCrampedStyle());
          a.height === 0 && (a.height = s.fontMetrics().xHeight), a = D.wrapFragment(a, s);
          const c = s.fontMetrics().defaultRuleThickness;
          let u = c;
          s.style.id < Z.TEXT.id && (u = s.fontMetrics().xHeight);
          let f = c + u / 4;
          const b = a.height + a.depth + f + c, { span: w, ruleWidth: A, advanceWidth: O } = Kt.sqrtImage(b, s), q = w.height - A;
          q > a.height + a.depth + f && (f = (f + q - a.height - a.depth) / 2);
          const L = w.height - a.height - f - A;
          a.style.paddingLeft = J(O);
          const P = D.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: a, wrapperClasses: ["svg-align"] }, { type: "kern", size: -(a.height + L) }, { type: "elem", elem: w }, { type: "kern", size: A }] }, s);
          if (o.index) {
            const Q = s.havingStyle(Z.SCRIPTSCRIPT), ee = Me(o.index, Q, s), ye = 0.6 * (P.height - P.depth), Te = D.makeVList({ positionType: "shift", positionData: -ye, children: [{ type: "elem", elem: ee }] }, s), ke = D.makeSpan(["root"], [Te]);
            return D.makeSpan(["mord", "sqrt"], [ke, P], s);
          } else
            return D.makeSpan(["mord", "sqrt"], [P], s);
        }, mathmlBuilder(o, s) {
          const { body: a, index: c } = o;
          return c ? new W.MathNode("mroot", [Be(a, s), Be(c, s)]) : new W.MathNode("msqrt", [Be(a, s)]);
        } });
        const ra = { display: Z.DISPLAY, text: Z.TEXT, script: Z.SCRIPT, scriptscript: Z.SCRIPTSCRIPT };
        ne({ type: "styling", names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler(o, s) {
          let { breakOnTokenText: a, funcName: c, parser: u } = o;
          const f = u.parseExpression(true, a), b = c.slice(1, c.length - 5);
          return { type: "styling", mode: u.mode, style: b, body: f };
        }, htmlBuilder(o, s) {
          const a = ra[o.style], c = s.havingStyle(a).withFont("");
          return ta(o.body, c, s);
        }, mathmlBuilder(o, s) {
          const a = ra[o.style], c = s.havingStyle(a), u = ut(o.body, c), f = new W.MathNode("mstyle", u), b = { display: ["0", "true"], text: ["0", "false"], script: ["1", "false"], scriptscript: ["2", "false"] }[o.style];
          return f.setAttribute("scriptlevel", b[0]), f.setAttribute("displaystyle", b[1]), f;
        } });
        const fu = function(o, s) {
          const a = o.base;
          return a ? a.type === "op" ? a.limits && (s.style.size === Z.DISPLAY.size || a.alwaysHandleSupSub) ? Mn : null : a.type === "operatorname" ? a.alwaysHandleSupSub && (s.style.size === Z.DISPLAY.size || a.limits) ? ea : null : a.type === "accent" ? C.isCharacterBox(a.base) ? ts : null : a.type === "horizBrace" && !o.sub === a.isOver ? Yi : null : null;
        };
        hn({ type: "supsub", htmlBuilder(o, s) {
          const a = fu(o, s);
          if (a)
            return a(o, s);
          const { base: c, sup: u, sub: f } = o, b = Me(c, s);
          let w, A;
          const O = s.fontMetrics();
          let q = 0, L = 0;
          const P = c && C.isCharacterBox(c);
          if (u) {
            const Ce = s.havingStyle(s.style.sup());
            w = Me(u, Ce, s), P || (q = b.height - Ce.fontMetrics().supDrop * Ce.sizeMultiplier / s.sizeMultiplier);
          }
          if (f) {
            const Ce = s.havingStyle(s.style.sub());
            A = Me(f, Ce, s), P || (L = b.depth + Ce.fontMetrics().subDrop * Ce.sizeMultiplier / s.sizeMultiplier);
          }
          let Q;
          s.style === Z.DISPLAY ? Q = O.sup1 : s.style.cramped ? Q = O.sup3 : Q = O.sup2;
          const ee = s.sizeMultiplier, ye = J(0.5 / O.ptPerEm / ee);
          let Te = null;
          if (A) {
            const Ce = o.base && o.base.type === "op" && o.base.name && (o.base.name === "\\oiint" || o.base.name === "\\oiiint");
            (b instanceof xt || Ce) && (Te = J(-b.italic));
          }
          let ke;
          if (w && A) {
            q = Math.max(q, Q, w.depth + 0.25 * O.xHeight), L = Math.max(L, O.sub2);
            const Ce = 4 * O.defaultRuleThickness;
            if (q - w.depth - (A.height - L) < Ce) {
              L = Ce - (q - w.depth) + A.height;
              const st = 0.8 * O.xHeight - (q - w.depth);
              st > 0 && (q += st, L -= st);
            }
            const De = [{ type: "elem", elem: A, shift: L, marginRight: ye, marginLeft: Te }, { type: "elem", elem: w, shift: -q, marginRight: ye }];
            ke = D.makeVList({ positionType: "individualShift", children: De }, s);
          } else if (A) {
            L = Math.max(L, O.sub1, A.height - 0.8 * O.xHeight);
            const Ce = [{ type: "elem", elem: A, marginLeft: Te, marginRight: ye }];
            ke = D.makeVList({ positionType: "shift", positionData: L, children: Ce }, s);
          } else if (w)
            q = Math.max(q, Q, w.depth + 0.25 * O.xHeight), ke = D.makeVList({ positionType: "shift", positionData: -q, children: [{ type: "elem", elem: w, marginRight: ye }] }, s);
          else
            throw new Error("supsub must have either sup or sub.");
          const Ne = Wr(b, "right") || "mord";
          return D.makeSpan([Ne], [b, D.makeSpan(["msupsub"], [ke])], s);
        }, mathmlBuilder(o, s) {
          let a = false, c, u;
          o.base && o.base.type === "horizBrace" && (u = !!o.sup, u === o.base.isOver && (a = true, c = o.base.isOver)), o.base && (o.base.type === "op" || o.base.type === "operatorname") && (o.base.parentIsSupSub = true);
          const f = [Be(o.base, s)];
          o.sub && f.push(Be(o.sub, s)), o.sup && f.push(Be(o.sup, s));
          let b;
          if (a)
            b = c ? "mover" : "munder";
          else if (o.sub)
            if (o.sup) {
              const w = o.base;
              w && w.type === "op" && w.limits && s.style === Z.DISPLAY || w && w.type === "operatorname" && w.alwaysHandleSupSub && (s.style === Z.DISPLAY || w.limits) ? b = "munderover" : b = "msubsup";
            } else {
              const w = o.base;
              w && w.type === "op" && w.limits && (s.style === Z.DISPLAY || w.alwaysHandleSupSub) || w && w.type === "operatorname" && w.alwaysHandleSupSub && (w.limits || s.style === Z.DISPLAY) ? b = "munder" : b = "msub";
            }
          else {
            const w = o.base;
            w && w.type === "op" && w.limits && (s.style === Z.DISPLAY || w.alwaysHandleSupSub) || w && w.type === "operatorname" && w.alwaysHandleSupSub && (w.limits || s.style === Z.DISPLAY) ? b = "mover" : b = "msup";
          }
          return new W.MathNode(b, f);
        } }), hn({ type: "atom", htmlBuilder(o, s) {
          return D.mathsym(o.text, o.mode, s, ["m" + o.family]);
        }, mathmlBuilder(o, s) {
          const a = new W.MathNode("mo", [wt(o.text, o.mode)]);
          if (o.family === "bin") {
            const c = Zr(o, s);
            c === "bold-italic" && a.setAttribute("mathvariant", c);
          } else
            o.family === "punct" ? a.setAttribute("separator", "true") : (o.family === "open" || o.family === "close") && a.setAttribute("stretchy", "false");
          return a;
        } });
        const sa = { mi: "italic", mn: "normal", mtext: "normal" };
        hn({ type: "mathord", htmlBuilder(o, s) {
          return D.makeOrd(o, s, "mathord");
        }, mathmlBuilder(o, s) {
          const a = new W.MathNode("mi", [wt(o.text, o.mode, s)]), c = Zr(o, s) || "italic";
          return c !== sa[a.type] && a.setAttribute("mathvariant", c), a;
        } }), hn({ type: "textord", htmlBuilder(o, s) {
          return D.makeOrd(o, s, "textord");
        }, mathmlBuilder(o, s) {
          const a = wt(o.text, o.mode, s), c = Zr(o, s) || "normal";
          let u;
          return o.mode === "text" ? u = new W.MathNode("mtext", [a]) : /[0-9]/.test(o.text) ? u = new W.MathNode("mn", [a]) : o.text === "\\prime" ? u = new W.MathNode("mo", [a]) : u = new W.MathNode("mi", [a]), c !== sa[u.type] && u.setAttribute("mathvariant", c), u;
        } });
        const ys = { "\\nobreak": "nobreak", "\\allowbreak": "allowbreak" }, bs = { " ": {}, "\\ ": {}, "~": { className: "nobreak" }, "\\space": {}, "\\nobreakspace": { className: "nobreak" } };
        hn({ type: "spacing", htmlBuilder(o, s) {
          if (bs.hasOwnProperty(o.text)) {
            const a = bs[o.text].className || "";
            if (o.mode === "text") {
              const c = D.makeOrd(o, s, "textord");
              return c.classes.push(a), c;
            } else
              return D.makeSpan(["mspace", a], [D.mathsym(o.text, o.mode, s)], s);
          } else {
            if (ys.hasOwnProperty(o.text))
              return D.makeSpan(["mspace", ys[o.text]], [], s);
            throw new l('Unknown type of space "' + o.text + '"');
          }
        }, mathmlBuilder(o, s) {
          let a;
          if (bs.hasOwnProperty(o.text))
            a = new W.MathNode("mtext", [new W.TextNode("\xA0")]);
          else {
            if (ys.hasOwnProperty(o.text))
              return new W.MathNode("mspace");
            throw new l('Unknown type of space "' + o.text + '"');
          }
          return a;
        } });
        const oa = () => {
          const o = new W.MathNode("mtd", []);
          return o.setAttribute("width", "50%"), o;
        };
        hn({ type: "tag", mathmlBuilder(o, s) {
          const a = new W.MathNode("mtable", [new W.MathNode("mtr", [oa(), new W.MathNode("mtd", [Jt(o.body, s)]), oa(), new W.MathNode("mtd", [Jt(o.tag, s)])])]);
          return a.setAttribute("width", "100%"), a;
        } });
        const ia = { "\\text": void 0, "\\textrm": "textrm", "\\textsf": "textsf", "\\texttt": "texttt", "\\textnormal": "textrm" }, aa = { "\\textbf": "textbf", "\\textmd": "textmd" }, gu = { "\\textit": "textit", "\\textup": "textup" }, la = (o, s) => {
          const a = o.font;
          if (a) {
            if (ia[a])
              return s.withTextFontFamily(ia[a]);
            if (aa[a])
              return s.withTextFontWeight(aa[a]);
            if (a === "\\emph")
              return s.fontShape === "textit" ? s.withTextFontShape("textup") : s.withTextFontShape("textit");
          } else
            return s;
          return s.withTextFontShape(gu[a]);
        };
        ne({ type: "text", names: ["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textmd", "\\textit", "\\textup", "\\emph"], props: { numArgs: 1, argTypes: ["text"], allowedInArgument: true, allowedInText: true }, handler(o, s) {
          let { parser: a, funcName: c } = o;
          const u = s[0];
          return { type: "text", mode: a.mode, body: Ge(u), font: c };
        }, htmlBuilder(o, s) {
          const a = la(o, s), c = Je(o.body, a, true);
          return D.makeSpan(["mord", "text"], c, a);
        }, mathmlBuilder(o, s) {
          const a = la(o, s);
          return Jt(o.body, a);
        } }), ne({ type: "underline", names: ["\\underline"], props: { numArgs: 1, allowedInText: true }, handler(o, s) {
          let { parser: a } = o;
          return { type: "underline", mode: a.mode, body: s[0] };
        }, htmlBuilder(o, s) {
          const a = Me(o.body, s), c = D.makeLineSpan("underline-line", s), u = s.fontMetrics().defaultRuleThickness, f = D.makeVList({ positionType: "top", positionData: a.height, children: [{ type: "kern", size: u }, { type: "elem", elem: c }, { type: "kern", size: 3 * u }, { type: "elem", elem: a }] }, s);
          return D.makeSpan(["mord", "underline"], [f], s);
        }, mathmlBuilder(o, s) {
          const a = new W.MathNode("mo", [new W.TextNode("\u203E")]);
          a.setAttribute("stretchy", "true");
          const c = new W.MathNode("munder", [Be(o.body, s), a]);
          return c.setAttribute("accentunder", "true"), c;
        } }), ne({ type: "vcenter", names: ["\\vcenter"], props: { numArgs: 1, argTypes: ["original"], allowedInText: false }, handler(o, s) {
          let { parser: a } = o;
          return { type: "vcenter", mode: a.mode, body: s[0] };
        }, htmlBuilder(o, s) {
          const a = Me(o.body, s), c = s.fontMetrics().axisHeight, u = 0.5 * (a.height - c - (a.depth + c));
          return D.makeVList({ positionType: "shift", positionData: u, children: [{ type: "elem", elem: a }] }, s);
        }, mathmlBuilder(o, s) {
          return new W.MathNode("mpadded", [Be(o.body, s)], ["vcenter"]);
        } }), ne({ type: "verb", names: ["\\verb"], props: { numArgs: 0, allowedInText: true }, handler(o, s, a) {
          throw new l("\\verb ended by end of line instead of matching delimiter");
        }, htmlBuilder(o, s) {
          const a = ca(o), c = [], u = s.havingStyle(s.style.text());
          for (let f = 0; f < a.length; f++) {
            let b = a[f];
            b === "~" && (b = "\\textasciitilde"), c.push(D.makeSymbol(b, "Typewriter-Regular", o.mode, u, ["mord", "texttt"]));
          }
          return D.makeSpan(["mord", "text"].concat(u.sizingClasses(s)), D.tryCombineChars(c), u);
        }, mathmlBuilder(o, s) {
          const a = new W.TextNode(ca(o)), c = new W.MathNode("mtext", [a]);
          return c.setAttribute("mathvariant", "monospace"), c;
        } });
        const ca = (o) => o.body.replace(/ /g, o.star ? "\u2423" : "\xA0");
        var tn = mi;
        const ha = `[ \r
	]`, yu = "\\\\[a-zA-Z@]+", bu = "\\\\[^\uD800-\uDFFF]", xu = "(" + yu + ")" + ha + "*", wu = `\\\\(
|[ \r	]+
?)[ \r	]*`, xs = "[\u0300-\u036F]", vu = new RegExp(xs + "+$"), ku = "(" + ha + "+)|" + (wu + "|") + "([!-\\[\\]-\u2027\u202A-\uD7FF\uF900-\uFFFF]" + (xs + "*") + "|[\uD800-\uDBFF][\uDC00-\uDFFF]" + (xs + "*") + "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + ("|" + xu) + ("|" + bu + ")");
        class ua {
          constructor(s, a) {
            this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = s, this.settings = a, this.tokenRegex = new RegExp(ku, "g"), this.catcodes = { "%": 14, "~": 13 };
          }
          setCatcode(s, a) {
            this.catcodes[s] = a;
          }
          lex() {
            const s = this.input, a = this.tokenRegex.lastIndex;
            if (a === s.length)
              return new vt("EOF", new yt(this, a, a));
            const c = this.tokenRegex.exec(s);
            if (c === null || c.index !== a)
              throw new l("Unexpected character: '" + s[a] + "'", new vt(s[a], new yt(this, a, a + 1)));
            const u = c[6] || c[3] || (c[2] ? "\\ " : " ");
            if (this.catcodes[u] === 14) {
              const f = s.indexOf(`
`, this.tokenRegex.lastIndex);
              return f === -1 ? (this.tokenRegex.lastIndex = s.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = f + 1, this.lex();
            }
            return new vt(u, new yt(this, a, this.tokenRegex.lastIndex));
          }
        }
        class Su {
          constructor(s, a) {
            s === void 0 && (s = {}), a === void 0 && (a = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = a, this.builtins = s, this.undefStack = [];
          }
          beginGroup() {
            this.undefStack.push({});
          }
          endGroup() {
            if (this.undefStack.length === 0)
              throw new l("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
            const s = this.undefStack.pop();
            for (const a in s)
              s.hasOwnProperty(a) && (s[a] == null ? delete this.current[a] : this.current[a] = s[a]);
          }
          endGroups() {
            for (; this.undefStack.length > 0; )
              this.endGroup();
          }
          has(s) {
            return this.current.hasOwnProperty(s) || this.builtins.hasOwnProperty(s);
          }
          get(s) {
            return this.current.hasOwnProperty(s) ? this.current[s] : this.builtins[s];
          }
          set(s, a, c) {
            if (c === void 0 && (c = false), c) {
              for (let u = 0; u < this.undefStack.length; u++)
                delete this.undefStack[u][s];
              this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][s] = a);
            } else {
              const u = this.undefStack[this.undefStack.length - 1];
              u && !u.hasOwnProperty(s) && (u[s] = this.current[s]);
            }
            a == null ? delete this.current[s] : this.current[s] = a;
          }
        }
        var Au = $i;
        v("\\noexpand", function(o) {
          const s = o.popToken();
          return o.isExpandable(s.text) && (s.noexpand = true, s.treatAsRelax = true), { tokens: [s], numArgs: 0 };
        }), v("\\expandafter", function(o) {
          const s = o.popToken();
          return o.expandOnce(true), { tokens: [s], numArgs: 0 };
        }), v("\\@firstoftwo", function(o) {
          return { tokens: o.consumeArgs(2)[0], numArgs: 0 };
        }), v("\\@secondoftwo", function(o) {
          return { tokens: o.consumeArgs(2)[1], numArgs: 0 };
        }), v("\\@ifnextchar", function(o) {
          const s = o.consumeArgs(3);
          o.consumeSpaces();
          const a = o.future();
          return s[0].length === 1 && s[0][0].text === a.text ? { tokens: s[1], numArgs: 0 } : { tokens: s[2], numArgs: 0 };
        }), v("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"), v("\\TextOrMath", function(o) {
          const s = o.consumeArgs(2);
          return o.mode === "text" ? { tokens: s[0], numArgs: 0 } : { tokens: s[1], numArgs: 0 };
        });
        const da = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
        v("\\char", function(o) {
          let s = o.popToken(), a, c = "";
          if (s.text === "'")
            a = 8, s = o.popToken();
          else if (s.text === '"')
            a = 16, s = o.popToken();
          else if (s.text === "`")
            if (s = o.popToken(), s.text[0] === "\\")
              c = s.text.charCodeAt(1);
            else {
              if (s.text === "EOF")
                throw new l("\\char` missing argument");
              c = s.text.charCodeAt(0);
            }
          else
            a = 10;
          if (a) {
            if (c = da[s.text], c == null || c >= a)
              throw new l("Invalid base-" + a + " digit " + s.text);
            let u;
            for (; (u = da[o.future().text]) != null && u < a; )
              c *= a, c += u, o.popToken();
          }
          return "\\@char{" + c + "}";
        });
        const ws = (o, s, a, c) => {
          let u = o.consumeArg().tokens;
          if (u.length !== 1)
            throw new l("\\newcommand's first argument must be a macro name");
          const f = u[0].text, b = o.isDefined(f);
          if (b && !s)
            throw new l("\\newcommand{" + f + "} attempting to redefine " + (f + "; use \\renewcommand"));
          if (!b && !a)
            throw new l("\\renewcommand{" + f + "} when command " + f + " does not yet exist; use \\newcommand");
          let w = 0;
          if (u = o.consumeArg().tokens, u.length === 1 && u[0].text === "[") {
            let A = "", O = o.expandNextToken();
            for (; O.text !== "]" && O.text !== "EOF"; )
              A += O.text, O = o.expandNextToken();
            if (!A.match(/^\s*[0-9]+\s*$/))
              throw new l("Invalid number of arguments: " + A);
            w = parseInt(A), u = o.consumeArg().tokens;
          }
          return b && c || o.macros.set(f, { tokens: u, numArgs: w }), "";
        };
        v("\\newcommand", (o) => ws(o, false, true, false)), v("\\renewcommand", (o) => ws(o, true, false, false)), v("\\providecommand", (o) => ws(o, true, true, true)), v("\\message", (o) => {
          const s = o.consumeArgs(1)[0];
          return console.log(s.reverse().map((a) => a.text).join("")), "";
        }), v("\\errmessage", (o) => {
          const s = o.consumeArgs(1)[0];
          return console.error(s.reverse().map((a) => a.text).join("")), "";
        }), v("\\show", (o) => {
          const s = o.popToken(), a = s.text;
          return console.log(s, o.macros.get(a), tn[a], He.math[a], He.text[a]), "";
        }), v("\\bgroup", "{"), v("\\egroup", "}"), v("~", "\\nobreakspace"), v("\\lq", "`"), v("\\rq", "'"), v("\\aa", "\\r a"), v("\\AA", "\\r A"), v("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`\xA9}"), v("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}"), v("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`\xAE}"), v("\u212C", "\\mathscr{B}"), v("\u2130", "\\mathscr{E}"), v("\u2131", "\\mathscr{F}"), v("\u210B", "\\mathscr{H}"), v("\u2110", "\\mathscr{I}"), v("\u2112", "\\mathscr{L}"), v("\u2133", "\\mathscr{M}"), v("\u211B", "\\mathscr{R}"), v("\u212D", "\\mathfrak{C}"), v("\u210C", "\\mathfrak{H}"), v("\u2128", "\\mathfrak{Z}"), v("\\Bbbk", "\\Bbb{k}"), v("\xB7", "\\cdotp"), v("\\llap", "\\mathllap{\\textrm{#1}}"), v("\\rlap", "\\mathrlap{\\textrm{#1}}"), v("\\clap", "\\mathclap{\\textrm{#1}}"), v("\\mathstrut", "\\vphantom{(}"), v("\\underbar", "\\underline{\\text{#1}}"), v("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}'), v("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`\u2260}}"), v("\\ne", "\\neq"), v("\u2260", "\\neq"), v("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`\u2209}}"), v("\u2209", "\\notin"), v("\u2258", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`\u2258}}"), v("\u2259", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`\u2258}}"), v("\u225A", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`\u225A}}"), v("\u225B", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`\u225B}}"), v("\u225D", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`\u225D}}"), v("\u225E", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`\u225E}}"), v("\u225F", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`\u225F}}"), v("\u27C2", "\\perp"), v("\u203C", "\\mathclose{!\\mkern-0.8mu!}"), v("\u220C", "\\notni"), v("\u231C", "\\ulcorner"), v("\u231D", "\\urcorner"), v("\u231E", "\\llcorner"), v("\u231F", "\\lrcorner"), v("\xA9", "\\copyright"), v("\xAE", "\\textregistered"), v("\uFE0F", "\\textregistered"), v("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}'), v("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}'), v("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}'), v("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}'), v("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}"), v("\u22EE", "\\vdots"), v("\\varGamma", "\\mathit{\\Gamma}"), v("\\varDelta", "\\mathit{\\Delta}"), v("\\varTheta", "\\mathit{\\Theta}"), v("\\varLambda", "\\mathit{\\Lambda}"), v("\\varXi", "\\mathit{\\Xi}"), v("\\varPi", "\\mathit{\\Pi}"), v("\\varSigma", "\\mathit{\\Sigma}"), v("\\varUpsilon", "\\mathit{\\Upsilon}"), v("\\varPhi", "\\mathit{\\Phi}"), v("\\varPsi", "\\mathit{\\Psi}"), v("\\varOmega", "\\mathit{\\Omega}"), v("\\substack", "\\begin{subarray}{c}#1\\end{subarray}"), v("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax"), v("\\boxed", "\\fbox{$\\displaystyle{#1}$}"), v("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"), v("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"), v("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;"), v("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}"), v("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
        const pa = { ",": "\\dotsc", "\\not": "\\dotsb", "+": "\\dotsb", "=": "\\dotsb", "<": "\\dotsb", ">": "\\dotsb", "-": "\\dotsb", "*": "\\dotsb", ":": "\\dotsb", "\\DOTSB": "\\dotsb", "\\coprod": "\\dotsb", "\\bigvee": "\\dotsb", "\\bigwedge": "\\dotsb", "\\biguplus": "\\dotsb", "\\bigcap": "\\dotsb", "\\bigcup": "\\dotsb", "\\prod": "\\dotsb", "\\sum": "\\dotsb", "\\bigotimes": "\\dotsb", "\\bigoplus": "\\dotsb", "\\bigodot": "\\dotsb", "\\bigsqcup": "\\dotsb", "\\And": "\\dotsb", "\\longrightarrow": "\\dotsb", "\\Longrightarrow": "\\dotsb", "\\longleftarrow": "\\dotsb", "\\Longleftarrow": "\\dotsb", "\\longleftrightarrow": "\\dotsb", "\\Longleftrightarrow": "\\dotsb", "\\mapsto": "\\dotsb", "\\longmapsto": "\\dotsb", "\\hookrightarrow": "\\dotsb", "\\doteq": "\\dotsb", "\\mathbin": "\\dotsb", "\\mathrel": "\\dotsb", "\\relbar": "\\dotsb", "\\Relbar": "\\dotsb", "\\xrightarrow": "\\dotsb", "\\xleftarrow": "\\dotsb", "\\DOTSI": "\\dotsi", "\\int": "\\dotsi", "\\oint": "\\dotsi", "\\iint": "\\dotsi", "\\iiint": "\\dotsi", "\\iiiint": "\\dotsi", "\\idotsint": "\\dotsi", "\\DOTSX": "\\dotsx" };
        v("\\dots", function(o) {
          let s = "\\dotso";
          const a = o.expandAfterFuture().text;
          return a in pa ? s = pa[a] : (a.slice(0, 4) === "\\not" || a in He.math && C.contains(["bin", "rel"], He.math[a].group)) && (s = "\\dotsb"), s;
        });
        const vs = { ")": true, "]": true, "\\rbrack": true, "\\}": true, "\\rbrace": true, "\\rangle": true, "\\rceil": true, "\\rfloor": true, "\\rgroup": true, "\\rmoustache": true, "\\right": true, "\\bigr": true, "\\biggr": true, "\\Bigr": true, "\\Biggr": true, $: true, ";": true, ".": true, ",": true };
        v("\\dotso", function(o) {
          return o.future().text in vs ? "\\ldots\\," : "\\ldots";
        }), v("\\dotsc", function(o) {
          const s = o.future().text;
          return s in vs && s !== "," ? "\\ldots\\," : "\\ldots";
        }), v("\\cdots", function(o) {
          return o.future().text in vs ? "\\@cdots\\," : "\\@cdots";
        }), v("\\dotsb", "\\cdots"), v("\\dotsm", "\\cdots"), v("\\dotsi", "\\!\\cdots"), v("\\dotsx", "\\ldots\\,"), v("\\DOTSI", "\\relax"), v("\\DOTSB", "\\relax"), v("\\DOTSX", "\\relax"), v("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax"), v("\\,", "\\tmspace+{3mu}{.1667em}"), v("\\thinspace", "\\,"), v("\\>", "\\mskip{4mu}"), v("\\:", "\\tmspace+{4mu}{.2222em}"), v("\\medspace", "\\:"), v("\\;", "\\tmspace+{5mu}{.2777em}"), v("\\thickspace", "\\;"), v("\\!", "\\tmspace-{3mu}{.1667em}"), v("\\negthinspace", "\\!"), v("\\negmedspace", "\\tmspace-{4mu}{.2222em}"), v("\\negthickspace", "\\tmspace-{5mu}{.277em}"), v("\\enspace", "\\kern.5em "), v("\\enskip", "\\hskip.5em\\relax"), v("\\quad", "\\hskip1em\\relax"), v("\\qquad", "\\hskip2em\\relax"), v("\\tag", "\\@ifstar\\tag@literal\\tag@paren"), v("\\tag@paren", "\\tag@literal{({#1})}"), v("\\tag@literal", (o) => {
          if (o.macros.get("\\df@tag"))
            throw new l("Multiple \\tag");
          return "\\gdef\\df@tag{\\text{#1}}";
        }), v("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"), v("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)"), v("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}"), v("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"), v("\\newline", "\\\\\\relax"), v("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
        const ma = J(Ot["Main-Regular"][84][1] - 0.7 * Ot["Main-Regular"][65][1]);
        v("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + ma + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}"), v("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + ma + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}"), v("\\hspace", "\\@ifstar\\@hspacer\\@hspace"), v("\\@hspace", "\\hskip #1\\relax"), v("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax"), v("\\ordinarycolon", ":"), v("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"), v("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}'), v("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}'), v("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}'), v("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}'), v("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}'), v("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}'), v("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}'), v("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}'), v("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}'), v("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}'), v("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}'), v("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}'), v("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}'), v("\u2237", "\\dblcolon"), v("\u2239", "\\eqcolon"), v("\u2254", "\\coloneqq"), v("\u2255", "\\eqqcolon"), v("\u2A74", "\\Coloneqq"), v("\\ratio", "\\vcentcolon"), v("\\coloncolon", "\\dblcolon"), v("\\colonequals", "\\coloneqq"), v("\\coloncolonequals", "\\Coloneqq"), v("\\equalscolon", "\\eqqcolon"), v("\\equalscoloncolon", "\\Eqqcolon"), v("\\colonminus", "\\coloneq"), v("\\coloncolonminus", "\\Coloneq"), v("\\minuscolon", "\\eqcolon"), v("\\minuscoloncolon", "\\Eqcolon"), v("\\coloncolonapprox", "\\Colonapprox"), v("\\coloncolonsim", "\\Colonsim"), v("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), v("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}"), v("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), v("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}"), v("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`\u220C}}"), v("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}"), v("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}"), v("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}"), v("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}"), v("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}"), v("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}"), v("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}"), v("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}"), v("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{\u2269}"), v("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{\u2268}"), v("\\ngeqq", "\\html@mathml{\\@ngeqq}{\u2271}"), v("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{\u2271}"), v("\\nleqq", "\\html@mathml{\\@nleqq}{\u2270}"), v("\\nleqslant", "\\html@mathml{\\@nleqslant}{\u2270}"), v("\\nshortmid", "\\html@mathml{\\@nshortmid}{\u2224}"), v("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{\u2226}"), v("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{\u2288}"), v("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{\u2289}"), v("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{\u228A}"), v("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{\u2ACB}"), v("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{\u228B}"), v("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{\u2ACC}"), v("\\imath", "\\html@mathml{\\@imath}{\u0131}"), v("\\jmath", "\\html@mathml{\\@jmath}{\u0237}"), v("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`\u27E6}}"), v("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`\u27E7}}"), v("\u27E6", "\\llbracket"), v("\u27E7", "\\rrbracket"), v("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`\u2983}}"), v("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`\u2984}}"), v("\u2983", "\\lBrace"), v("\u2984", "\\rBrace"), v("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`\u29B5}}"), v("\u29B5", "\\minuso"), v("\\darr", "\\downarrow"), v("\\dArr", "\\Downarrow"), v("\\Darr", "\\Downarrow"), v("\\lang", "\\langle"), v("\\rang", "\\rangle"), v("\\uarr", "\\uparrow"), v("\\uArr", "\\Uparrow"), v("\\Uarr", "\\Uparrow"), v("\\N", "\\mathbb{N}"), v("\\R", "\\mathbb{R}"), v("\\Z", "\\mathbb{Z}"), v("\\alef", "\\aleph"), v("\\alefsym", "\\aleph"), v("\\Alpha", "\\mathrm{A}"), v("\\Beta", "\\mathrm{B}"), v("\\bull", "\\bullet"), v("\\Chi", "\\mathrm{X}"), v("\\clubs", "\\clubsuit"), v("\\cnums", "\\mathbb{C}"), v("\\Complex", "\\mathbb{C}"), v("\\Dagger", "\\ddagger"), v("\\diamonds", "\\diamondsuit"), v("\\empty", "\\emptyset"), v("\\Epsilon", "\\mathrm{E}"), v("\\Eta", "\\mathrm{H}"), v("\\exist", "\\exists"), v("\\harr", "\\leftrightarrow"), v("\\hArr", "\\Leftrightarrow"), v("\\Harr", "\\Leftrightarrow"), v("\\hearts", "\\heartsuit"), v("\\image", "\\Im"), v("\\infin", "\\infty"), v("\\Iota", "\\mathrm{I}"), v("\\isin", "\\in"), v("\\Kappa", "\\mathrm{K}"), v("\\larr", "\\leftarrow"), v("\\lArr", "\\Leftarrow"), v("\\Larr", "\\Leftarrow"), v("\\lrarr", "\\leftrightarrow"), v("\\lrArr", "\\Leftrightarrow"), v("\\Lrarr", "\\Leftrightarrow"), v("\\Mu", "\\mathrm{M}"), v("\\natnums", "\\mathbb{N}"), v("\\Nu", "\\mathrm{N}"), v("\\Omicron", "\\mathrm{O}"), v("\\plusmn", "\\pm"), v("\\rarr", "\\rightarrow"), v("\\rArr", "\\Rightarrow"), v("\\Rarr", "\\Rightarrow"), v("\\real", "\\Re"), v("\\reals", "\\mathbb{R}"), v("\\Reals", "\\mathbb{R}"), v("\\Rho", "\\mathrm{P}"), v("\\sdot", "\\cdot"), v("\\sect", "\\S"), v("\\spades", "\\spadesuit"), v("\\sub", "\\subset"), v("\\sube", "\\subseteq"), v("\\supe", "\\supseteq"), v("\\Tau", "\\mathrm{T}"), v("\\thetasym", "\\vartheta"), v("\\weierp", "\\wp"), v("\\Zeta", "\\mathrm{Z}"), v("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}"), v("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}"), v("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits"), v("\\bra", "\\mathinner{\\langle{#1}|}"), v("\\ket", "\\mathinner{|{#1}\\rangle}"), v("\\braket", "\\mathinner{\\langle{#1}\\rangle}"), v("\\Bra", "\\left\\langle#1\\right|"), v("\\Ket", "\\left|#1\\right\\rangle");
        const fa = (o) => (s) => {
          const a = s.consumeArg().tokens, c = s.consumeArg().tokens, u = s.consumeArg().tokens, f = s.consumeArg().tokens, b = s.macros.get("|"), w = s.macros.get("\\|");
          s.macros.beginGroup();
          const A = (L) => (P) => {
            o && (P.macros.set("|", b), u.length && P.macros.set("\\|", w));
            let Q = L;
            return !L && u.length && P.future().text === "|" && (P.popToken(), Q = true), { tokens: Q ? u : c, numArgs: 0 };
          };
          s.macros.set("|", A(false)), u.length && s.macros.set("\\|", A(true));
          const O = s.consumeArg().tokens, q = s.expandTokens([...f, ...O, ...a]);
          return s.macros.endGroup(), { tokens: q.reverse(), numArgs: 0 };
        };
        v("\\bra@ket", fa(false)), v("\\bra@set", fa(true)), v("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}"), v("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}"), v("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}"), v("\\angln", "{\\angl n}"), v("\\blue", "\\textcolor{##6495ed}{#1}"), v("\\orange", "\\textcolor{##ffa500}{#1}"), v("\\pink", "\\textcolor{##ff00af}{#1}"), v("\\red", "\\textcolor{##df0030}{#1}"), v("\\green", "\\textcolor{##28ae7b}{#1}"), v("\\gray", "\\textcolor{gray}{#1}"), v("\\purple", "\\textcolor{##9d38bd}{#1}"), v("\\blueA", "\\textcolor{##ccfaff}{#1}"), v("\\blueB", "\\textcolor{##80f6ff}{#1}"), v("\\blueC", "\\textcolor{##63d9ea}{#1}"), v("\\blueD", "\\textcolor{##11accd}{#1}"), v("\\blueE", "\\textcolor{##0c7f99}{#1}"), v("\\tealA", "\\textcolor{##94fff5}{#1}"), v("\\tealB", "\\textcolor{##26edd5}{#1}"), v("\\tealC", "\\textcolor{##01d1c1}{#1}"), v("\\tealD", "\\textcolor{##01a995}{#1}"), v("\\tealE", "\\textcolor{##208170}{#1}"), v("\\greenA", "\\textcolor{##b6ffb0}{#1}"), v("\\greenB", "\\textcolor{##8af281}{#1}"), v("\\greenC", "\\textcolor{##74cf70}{#1}"), v("\\greenD", "\\textcolor{##1fab54}{#1}"), v("\\greenE", "\\textcolor{##0d923f}{#1}"), v("\\goldA", "\\textcolor{##ffd0a9}{#1}"), v("\\goldB", "\\textcolor{##ffbb71}{#1}"), v("\\goldC", "\\textcolor{##ff9c39}{#1}"), v("\\goldD", "\\textcolor{##e07d10}{#1}"), v("\\goldE", "\\textcolor{##a75a05}{#1}"), v("\\redA", "\\textcolor{##fca9a9}{#1}"), v("\\redB", "\\textcolor{##ff8482}{#1}"), v("\\redC", "\\textcolor{##f9685d}{#1}"), v("\\redD", "\\textcolor{##e84d39}{#1}"), v("\\redE", "\\textcolor{##bc2612}{#1}"), v("\\maroonA", "\\textcolor{##ffbde0}{#1}"), v("\\maroonB", "\\textcolor{##ff92c6}{#1}"), v("\\maroonC", "\\textcolor{##ed5fa6}{#1}"), v("\\maroonD", "\\textcolor{##ca337c}{#1}"), v("\\maroonE", "\\textcolor{##9e034e}{#1}"), v("\\purpleA", "\\textcolor{##ddd7ff}{#1}"), v("\\purpleB", "\\textcolor{##c6b9fc}{#1}"), v("\\purpleC", "\\textcolor{##aa87ff}{#1}"), v("\\purpleD", "\\textcolor{##7854ab}{#1}"), v("\\purpleE", "\\textcolor{##543b78}{#1}"), v("\\mintA", "\\textcolor{##f5f9e8}{#1}"), v("\\mintB", "\\textcolor{##edf2df}{#1}"), v("\\mintC", "\\textcolor{##e0e5cc}{#1}"), v("\\grayA", "\\textcolor{##f6f7f7}{#1}"), v("\\grayB", "\\textcolor{##f0f1f2}{#1}"), v("\\grayC", "\\textcolor{##e3e5e6}{#1}"), v("\\grayD", "\\textcolor{##d6d8da}{#1}"), v("\\grayE", "\\textcolor{##babec2}{#1}"), v("\\grayF", "\\textcolor{##888d93}{#1}"), v("\\grayG", "\\textcolor{##626569}{#1}"), v("\\grayH", "\\textcolor{##3b3e40}{#1}"), v("\\grayI", "\\textcolor{##21242c}{#1}"), v("\\kaBlue", "\\textcolor{##314453}{#1}"), v("\\kaGreen", "\\textcolor{##71B307}{#1}");
        const ga = { "^": true, _: true, "\\limits": true, "\\nolimits": true };
        class Tu {
          constructor(s, a, c) {
            this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = a, this.expansionCount = 0, this.feed(s), this.macros = new Su(Au, a.macros), this.mode = c, this.stack = [];
          }
          feed(s) {
            this.lexer = new ua(s, this.settings);
          }
          switchMode(s) {
            this.mode = s;
          }
          beginGroup() {
            this.macros.beginGroup();
          }
          endGroup() {
            this.macros.endGroup();
          }
          endGroups() {
            this.macros.endGroups();
          }
          future() {
            return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
          }
          popToken() {
            return this.future(), this.stack.pop();
          }
          pushToken(s) {
            this.stack.push(s);
          }
          pushTokens(s) {
            this.stack.push(...s);
          }
          scanArgument(s) {
            let a, c, u;
            if (s) {
              if (this.consumeSpaces(), this.future().text !== "[")
                return null;
              a = this.popToken(), { tokens: u, end: c } = this.consumeArg(["]"]);
            } else
              ({ tokens: u, start: a, end: c } = this.consumeArg());
            return this.pushToken(new vt("EOF", c.loc)), this.pushTokens(u), a.range(c, "");
          }
          consumeSpaces() {
            for (; this.future().text === " "; )
              this.stack.pop();
          }
          consumeArg(s) {
            const a = [], c = s && s.length > 0;
            c || this.consumeSpaces();
            const u = this.future();
            let f, b = 0, w = 0;
            do {
              if (f = this.popToken(), a.push(f), f.text === "{")
                ++b;
              else if (f.text === "}") {
                if (--b, b === -1)
                  throw new l("Extra }", f);
              } else if (f.text === "EOF")
                throw new l("Unexpected end of input in a macro argument, expected '" + (s && c ? s[w] : "}") + "'", f);
              if (s && c)
                if ((b === 0 || b === 1 && s[w] === "{") && f.text === s[w]) {
                  if (++w, w === s.length) {
                    a.splice(-w, w);
                    break;
                  }
                } else
                  w = 0;
            } while (b !== 0 || c);
            return u.text === "{" && a[a.length - 1].text === "}" && (a.pop(), a.shift()), a.reverse(), { tokens: a, start: u, end: f };
          }
          consumeArgs(s, a) {
            if (a) {
              if (a.length !== s + 1)
                throw new l("The length of delimiters doesn't match the number of args!");
              const u = a[0];
              for (let f = 0; f < u.length; f++) {
                const b = this.popToken();
                if (u[f] !== b.text)
                  throw new l("Use of the macro doesn't match its definition", b);
              }
            }
            const c = [];
            for (let u = 0; u < s; u++)
              c.push(this.consumeArg(a && a[u + 1]).tokens);
            return c;
          }
          countExpansion(s) {
            if (this.expansionCount += s, this.expansionCount > this.settings.maxExpand)
              throw new l("Too many expansions: infinite loop or need to increase maxExpand setting");
          }
          expandOnce(s) {
            const a = this.popToken(), c = a.text, u = a.noexpand ? null : this._getExpansion(c);
            if (u == null || s && u.unexpandable) {
              if (s && u == null && c[0] === "\\" && !this.isDefined(c))
                throw new l("Undefined control sequence: " + c);
              return this.pushToken(a), false;
            }
            this.countExpansion(1);
            let f = u.tokens;
            const b = this.consumeArgs(u.numArgs, u.delimiters);
            if (u.numArgs) {
              f = f.slice();
              for (let w = f.length - 1; w >= 0; --w) {
                let A = f[w];
                if (A.text === "#") {
                  if (w === 0)
                    throw new l("Incomplete placeholder at end of macro body", A);
                  if (A = f[--w], A.text === "#")
                    f.splice(w + 1, 1);
                  else if (/^[1-9]$/.test(A.text))
                    f.splice(w, 2, ...b[+A.text - 1]);
                  else
                    throw new l("Not a valid argument number", A);
                }
              }
            }
            return this.pushTokens(f), f.length;
          }
          expandAfterFuture() {
            return this.expandOnce(), this.future();
          }
          expandNextToken() {
            for (; ; )
              if (this.expandOnce() === false) {
                const s = this.stack.pop();
                return s.treatAsRelax && (s.text = "\\relax"), s;
              }
            throw new Error();
          }
          expandMacro(s) {
            return this.macros.has(s) ? this.expandTokens([new vt(s)]) : void 0;
          }
          expandTokens(s) {
            const a = [], c = this.stack.length;
            for (this.pushTokens(s); this.stack.length > c; )
              if (this.expandOnce(true) === false) {
                const u = this.stack.pop();
                u.treatAsRelax && (u.noexpand = false, u.treatAsRelax = false), a.push(u);
              }
            return this.countExpansion(a.length), a;
          }
          expandMacroAsText(s) {
            const a = this.expandMacro(s);
            return a && a.map((c) => c.text).join("");
          }
          _getExpansion(s) {
            const a = this.macros.get(s);
            if (a == null)
              return a;
            if (s.length === 1) {
              const u = this.lexer.catcodes[s];
              if (u != null && u !== 13)
                return;
            }
            const c = typeof a == "function" ? a(this) : a;
            if (typeof c == "string") {
              let u = 0;
              if (c.indexOf("#") !== -1) {
                const A = c.replace(/##/g, "");
                for (; A.indexOf("#" + (u + 1)) !== -1; )
                  ++u;
              }
              const f = new ua(c, this.settings), b = [];
              let w = f.lex();
              for (; w.text !== "EOF"; )
                b.push(w), w = f.lex();
              return b.reverse(), { tokens: b, numArgs: u };
            }
            return c;
          }
          isDefined(s) {
            return this.macros.has(s) || tn.hasOwnProperty(s) || He.math.hasOwnProperty(s) || He.text.hasOwnProperty(s) || ga.hasOwnProperty(s);
          }
          isExpandable(s) {
            const a = this.macros.get(s);
            return a != null ? typeof a == "string" || typeof a == "function" || !a.unexpandable : tn.hasOwnProperty(s) && !tn[s].primitive;
          }
        }
        const ya = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, W0 = Object.freeze({ "\u208A": "+", "\u208B": "-", "\u208C": "=", "\u208D": "(", "\u208E": ")", "\u2080": "0", "\u2081": "1", "\u2082": "2", "\u2083": "3", "\u2084": "4", "\u2085": "5", "\u2086": "6", "\u2087": "7", "\u2088": "8", "\u2089": "9", "\u2090": "a", "\u2091": "e", "\u2095": "h", "\u1D62": "i", "\u2C7C": "j", "\u2096": "k", "\u2097": "l", "\u2098": "m", "\u2099": "n", "\u2092": "o", "\u209A": "p", "\u1D63": "r", "\u209B": "s", "\u209C": "t", "\u1D64": "u", "\u1D65": "v", "\u2093": "x", "\u1D66": "\u03B2", "\u1D67": "\u03B3", "\u1D68": "\u03C1", "\u1D69": "\u03D5", "\u1D6A": "\u03C7", "\u207A": "+", "\u207B": "-", "\u207C": "=", "\u207D": "(", "\u207E": ")", "\u2070": "0", "\xB9": "1", "\xB2": "2", "\xB3": "3", "\u2074": "4", "\u2075": "5", "\u2076": "6", "\u2077": "7", "\u2078": "8", "\u2079": "9", "\u1D2C": "A", "\u1D2E": "B", "\u1D30": "D", "\u1D31": "E", "\u1D33": "G", "\u1D34": "H", "\u1D35": "I", "\u1D36": "J", "\u1D37": "K", "\u1D38": "L", "\u1D39": "M", "\u1D3A": "N", "\u1D3C": "O", "\u1D3E": "P", "\u1D3F": "R", "\u1D40": "T", "\u1D41": "U", "\u2C7D": "V", "\u1D42": "W", "\u1D43": "a", "\u1D47": "b", "\u1D9C": "c", "\u1D48": "d", "\u1D49": "e", "\u1DA0": "f", "\u1D4D": "g", \u02B0: "h", "\u2071": "i", \u02B2: "j", "\u1D4F": "k", \u02E1: "l", "\u1D50": "m", \u207F: "n", "\u1D52": "o", "\u1D56": "p", \u02B3: "r", \u02E2: "s", "\u1D57": "t", "\u1D58": "u", "\u1D5B": "v", \u02B7: "w", \u02E3: "x", \u02B8: "y", "\u1DBB": "z", "\u1D5D": "\u03B2", "\u1D5E": "\u03B3", "\u1D5F": "\u03B4", "\u1D60": "\u03D5", "\u1D61": "\u03C7", "\u1DBF": "\u03B8" }), ks = { "\u0301": { text: "\\'", math: "\\acute" }, "\u0300": { text: "\\`", math: "\\grave" }, "\u0308": { text: '\\"', math: "\\ddot" }, "\u0303": { text: "\\~", math: "\\tilde" }, "\u0304": { text: "\\=", math: "\\bar" }, "\u0306": { text: "\\u", math: "\\breve" }, "\u030C": { text: "\\v", math: "\\check" }, "\u0302": { text: "\\^", math: "\\hat" }, "\u0307": { text: "\\.", math: "\\dot" }, "\u030A": { text: "\\r", math: "\\mathring" }, "\u030B": { text: "\\H" }, "\u0327": { text: "\\c" } }, ba = { \u00E1: "a\u0301", \u00E0: "a\u0300", \u00E4: "a\u0308", \u01DF: "a\u0308\u0304", \u00E3: "a\u0303", \u0101: "a\u0304", \u0103: "a\u0306", \u1EAF: "a\u0306\u0301", \u1EB1: "a\u0306\u0300", \u1EB5: "a\u0306\u0303", \u01CE: "a\u030C", \u00E2: "a\u0302", \u1EA5: "a\u0302\u0301", \u1EA7: "a\u0302\u0300", \u1EAB: "a\u0302\u0303", \u0227: "a\u0307", \u01E1: "a\u0307\u0304", \u00E5: "a\u030A", \u01FB: "a\u030A\u0301", \u1E03: "b\u0307", \u0107: "c\u0301", \u1E09: "c\u0327\u0301", \u010D: "c\u030C", \u0109: "c\u0302", \u010B: "c\u0307", \u00E7: "c\u0327", \u010F: "d\u030C", \u1E0B: "d\u0307", \u1E11: "d\u0327", \u00E9: "e\u0301", \u00E8: "e\u0300", \u00EB: "e\u0308", \u1EBD: "e\u0303", \u0113: "e\u0304", \u1E17: "e\u0304\u0301", \u1E15: "e\u0304\u0300", \u0115: "e\u0306", \u1E1D: "e\u0327\u0306", \u011B: "e\u030C", \u00EA: "e\u0302", \u1EBF: "e\u0302\u0301", \u1EC1: "e\u0302\u0300", \u1EC5: "e\u0302\u0303", \u0117: "e\u0307", \u0229: "e\u0327", \u1E1F: "f\u0307", \u01F5: "g\u0301", \u1E21: "g\u0304", \u011F: "g\u0306", \u01E7: "g\u030C", \u011D: "g\u0302", \u0121: "g\u0307", \u0123: "g\u0327", \u1E27: "h\u0308", \u021F: "h\u030C", \u0125: "h\u0302", \u1E23: "h\u0307", \u1E29: "h\u0327", \u00ED: "i\u0301", \u00EC: "i\u0300", \u00EF: "i\u0308", \u1E2F: "i\u0308\u0301", \u0129: "i\u0303", \u012B: "i\u0304", \u012D: "i\u0306", \u01D0: "i\u030C", \u00EE: "i\u0302", \u01F0: "j\u030C", \u0135: "j\u0302", \u1E31: "k\u0301", \u01E9: "k\u030C", \u0137: "k\u0327", \u013A: "l\u0301", \u013E: "l\u030C", \u013C: "l\u0327", \u1E3F: "m\u0301", \u1E41: "m\u0307", \u0144: "n\u0301", \u01F9: "n\u0300", \u00F1: "n\u0303", \u0148: "n\u030C", \u1E45: "n\u0307", \u0146: "n\u0327", \u00F3: "o\u0301", \u00F2: "o\u0300", \u00F6: "o\u0308", \u022B: "o\u0308\u0304", \u00F5: "o\u0303", \u1E4D: "o\u0303\u0301", \u1E4F: "o\u0303\u0308", \u022D: "o\u0303\u0304", \u014D: "o\u0304", \u1E53: "o\u0304\u0301", \u1E51: "o\u0304\u0300", \u014F: "o\u0306", \u01D2: "o\u030C", \u00F4: "o\u0302", \u1ED1: "o\u0302\u0301", \u1ED3: "o\u0302\u0300", \u1ED7: "o\u0302\u0303", \u022F: "o\u0307", \u0231: "o\u0307\u0304", \u0151: "o\u030B", \u1E55: "p\u0301", \u1E57: "p\u0307", \u0155: "r\u0301", \u0159: "r\u030C", \u1E59: "r\u0307", \u0157: "r\u0327", \u015B: "s\u0301", \u1E65: "s\u0301\u0307", \u0161: "s\u030C", \u1E67: "s\u030C\u0307", \u015D: "s\u0302", \u1E61: "s\u0307", \u015F: "s\u0327", \u1E97: "t\u0308", \u0165: "t\u030C", \u1E6B: "t\u0307", \u0163: "t\u0327", \u00FA: "u\u0301", \u00F9: "u\u0300", \u00FC: "u\u0308", \u01D8: "u\u0308\u0301", \u01DC: "u\u0308\u0300", \u01D6: "u\u0308\u0304", \u01DA: "u\u0308\u030C", \u0169: "u\u0303", \u1E79: "u\u0303\u0301", \u016B: "u\u0304", \u1E7B: "u\u0304\u0308", \u016D: "u\u0306", \u01D4: "u\u030C", \u00FB: "u\u0302", \u016F: "u\u030A", \u0171: "u\u030B", \u1E7D: "v\u0303", \u1E83: "w\u0301", \u1E81: "w\u0300", \u1E85: "w\u0308", \u0175: "w\u0302", \u1E87: "w\u0307", \u1E98: "w\u030A", \u1E8D: "x\u0308", \u1E8B: "x\u0307", \u00FD: "y\u0301", \u1EF3: "y\u0300", \u00FF: "y\u0308", \u1EF9: "y\u0303", \u0233: "y\u0304", \u0177: "y\u0302", \u1E8F: "y\u0307", \u1E99: "y\u030A", \u017A: "z\u0301", \u017E: "z\u030C", \u1E91: "z\u0302", \u017C: "z\u0307", \u00C1: "A\u0301", \u00C0: "A\u0300", \u00C4: "A\u0308", \u01DE: "A\u0308\u0304", \u00C3: "A\u0303", \u0100: "A\u0304", \u0102: "A\u0306", \u1EAE: "A\u0306\u0301", \u1EB0: "A\u0306\u0300", \u1EB4: "A\u0306\u0303", \u01CD: "A\u030C", \u00C2: "A\u0302", \u1EA4: "A\u0302\u0301", \u1EA6: "A\u0302\u0300", \u1EAA: "A\u0302\u0303", \u0226: "A\u0307", \u01E0: "A\u0307\u0304", \u00C5: "A\u030A", \u01FA: "A\u030A\u0301", \u1E02: "B\u0307", \u0106: "C\u0301", \u1E08: "C\u0327\u0301", \u010C: "C\u030C", \u0108: "C\u0302", \u010A: "C\u0307", \u00C7: "C\u0327", \u010E: "D\u030C", \u1E0A: "D\u0307", \u1E10: "D\u0327", \u00C9: "E\u0301", \u00C8: "E\u0300", \u00CB: "E\u0308", \u1EBC: "E\u0303", \u0112: "E\u0304", \u1E16: "E\u0304\u0301", \u1E14: "E\u0304\u0300", \u0114: "E\u0306", \u1E1C: "E\u0327\u0306", \u011A: "E\u030C", \u00CA: "E\u0302", \u1EBE: "E\u0302\u0301", \u1EC0: "E\u0302\u0300", \u1EC4: "E\u0302\u0303", \u0116: "E\u0307", \u0228: "E\u0327", \u1E1E: "F\u0307", \u01F4: "G\u0301", \u1E20: "G\u0304", \u011E: "G\u0306", \u01E6: "G\u030C", \u011C: "G\u0302", \u0120: "G\u0307", \u0122: "G\u0327", \u1E26: "H\u0308", \u021E: "H\u030C", \u0124: "H\u0302", \u1E22: "H\u0307", \u1E28: "H\u0327", \u00CD: "I\u0301", \u00CC: "I\u0300", \u00CF: "I\u0308", \u1E2E: "I\u0308\u0301", \u0128: "I\u0303", \u012A: "I\u0304", \u012C: "I\u0306", \u01CF: "I\u030C", \u00CE: "I\u0302", \u0130: "I\u0307", \u0134: "J\u0302", \u1E30: "K\u0301", \u01E8: "K\u030C", \u0136: "K\u0327", \u0139: "L\u0301", \u013D: "L\u030C", \u013B: "L\u0327", \u1E3E: "M\u0301", \u1E40: "M\u0307", \u0143: "N\u0301", \u01F8: "N\u0300", \u00D1: "N\u0303", \u0147: "N\u030C", \u1E44: "N\u0307", \u0145: "N\u0327", \u00D3: "O\u0301", \u00D2: "O\u0300", \u00D6: "O\u0308", \u022A: "O\u0308\u0304", \u00D5: "O\u0303", \u1E4C: "O\u0303\u0301", \u1E4E: "O\u0303\u0308", \u022C: "O\u0303\u0304", \u014C: "O\u0304", \u1E52: "O\u0304\u0301", \u1E50: "O\u0304\u0300", \u014E: "O\u0306", \u01D1: "O\u030C", \u00D4: "O\u0302", \u1ED0: "O\u0302\u0301", \u1ED2: "O\u0302\u0300", \u1ED6: "O\u0302\u0303", \u022E: "O\u0307", \u0230: "O\u0307\u0304", \u0150: "O\u030B", \u1E54: "P\u0301", \u1E56: "P\u0307", \u0154: "R\u0301", \u0158: "R\u030C", \u1E58: "R\u0307", \u0156: "R\u0327", \u015A: "S\u0301", \u1E64: "S\u0301\u0307", \u0160: "S\u030C", \u1E66: "S\u030C\u0307", \u015C: "S\u0302", \u1E60: "S\u0307", \u015E: "S\u0327", \u0164: "T\u030C", \u1E6A: "T\u0307", \u0162: "T\u0327", \u00DA: "U\u0301", \u00D9: "U\u0300", \u00DC: "U\u0308", \u01D7: "U\u0308\u0301", \u01DB: "U\u0308\u0300", \u01D5: "U\u0308\u0304", \u01D9: "U\u0308\u030C", \u0168: "U\u0303", \u1E78: "U\u0303\u0301", \u016A: "U\u0304", \u1E7A: "U\u0304\u0308", \u016C: "U\u0306", \u01D3: "U\u030C", \u00DB: "U\u0302", \u016E: "U\u030A", \u0170: "U\u030B", \u1E7C: "V\u0303", \u1E82: "W\u0301", \u1E80: "W\u0300", \u1E84: "W\u0308", \u0174: "W\u0302", \u1E86: "W\u0307", \u1E8C: "X\u0308", \u1E8A: "X\u0307", \u00DD: "Y\u0301", \u1EF2: "Y\u0300", \u0178: "Y\u0308", \u1EF8: "Y\u0303", \u0232: "Y\u0304", \u0176: "Y\u0302", \u1E8E: "Y\u0307", \u0179: "Z\u0301", \u017D: "Z\u030C", \u1E90: "Z\u0302", \u017B: "Z\u0307", \u03AC: "\u03B1\u0301", \u1F70: "\u03B1\u0300", \u1FB1: "\u03B1\u0304", \u1FB0: "\u03B1\u0306", \u03AD: "\u03B5\u0301", \u1F72: "\u03B5\u0300", \u03AE: "\u03B7\u0301", \u1F74: "\u03B7\u0300", \u03AF: "\u03B9\u0301", \u1F76: "\u03B9\u0300", \u03CA: "\u03B9\u0308", \u0390: "\u03B9\u0308\u0301", \u1FD2: "\u03B9\u0308\u0300", \u1FD1: "\u03B9\u0304", \u1FD0: "\u03B9\u0306", \u03CC: "\u03BF\u0301", \u1F78: "\u03BF\u0300", \u03CD: "\u03C5\u0301", \u1F7A: "\u03C5\u0300", \u03CB: "\u03C5\u0308", \u03B0: "\u03C5\u0308\u0301", \u1FE2: "\u03C5\u0308\u0300", \u1FE1: "\u03C5\u0304", \u1FE0: "\u03C5\u0306", \u03CE: "\u03C9\u0301", \u1F7C: "\u03C9\u0300", \u038E: "\u03A5\u0301", \u1FEA: "\u03A5\u0300", \u03AB: "\u03A5\u0308", \u1FE9: "\u03A5\u0304", \u1FE8: "\u03A5\u0306", \u038F: "\u03A9\u0301", \u1FFA: "\u03A9\u0300" };
        class Y0 {
          constructor(s, a) {
            this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new Tu(s, a, this.mode), this.settings = a, this.leftrightDepth = 0;
          }
          expect(s, a) {
            if (a === void 0 && (a = true), this.fetch().text !== s)
              throw new l("Expected '" + s + "', got '" + this.fetch().text + "'", this.fetch());
            a && this.consume();
          }
          consume() {
            this.nextToken = null;
          }
          fetch() {
            return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
          }
          switchMode(s) {
            this.mode = s, this.gullet.switchMode(s);
          }
          parse() {
            this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
            try {
              const s = this.parseExpression(false);
              return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), s;
            } finally {
              this.gullet.endGroups();
            }
          }
          subparse(s) {
            const a = this.nextToken;
            this.consume(), this.gullet.pushToken(new vt("}")), this.gullet.pushTokens(s);
            const c = this.parseExpression(false);
            return this.expect("}"), this.nextToken = a, c;
          }
          parseExpression(s, a) {
            const c = [];
            for (; ; ) {
              this.mode === "math" && this.consumeSpaces();
              const u = this.fetch();
              if (Y0.endOfExpression.indexOf(u.text) !== -1 || a && u.text === a || s && tn[u.text] && tn[u.text].infix)
                break;
              const f = this.parseAtom(a);
              if (f) {
                if (f.type === "internal")
                  continue;
              } else
                break;
              c.push(f);
            }
            return this.mode === "text" && this.formLigatures(c), this.handleInfixNodes(c);
          }
          handleInfixNodes(s) {
            let a = -1, c;
            for (let u = 0; u < s.length; u++)
              if (s[u].type === "infix") {
                if (a !== -1)
                  throw new l("only one infix operator per group", s[u].token);
                a = u, c = s[u].replaceWith;
              }
            if (a !== -1 && c) {
              let u, f;
              const b = s.slice(0, a), w = s.slice(a + 1);
              b.length === 1 && b[0].type === "ordgroup" ? u = b[0] : u = { type: "ordgroup", mode: this.mode, body: b }, w.length === 1 && w[0].type === "ordgroup" ? f = w[0] : f = { type: "ordgroup", mode: this.mode, body: w };
              let A;
              return c === "\\\\abovefrac" ? A = this.callFunction(c, [u, s[a], f], []) : A = this.callFunction(c, [u, f], []), [A];
            } else
              return s;
          }
          handleSupSubscript(s) {
            const a = this.fetch(), c = a.text;
            this.consume(), this.consumeSpaces();
            let u;
            do {
              var f;
              u = this.parseGroup(s);
            } while (((f = u) == null ? void 0 : f.type) === "internal");
            if (!u)
              throw new l("Expected group after '" + c + "'", a);
            return u;
          }
          formatUnsupportedCmd(s) {
            const a = [];
            for (let u = 0; u < s.length; u++)
              a.push({ type: "textord", mode: "text", text: s[u] });
            const c = { type: "text", mode: this.mode, body: a };
            return { type: "color", mode: this.mode, color: this.settings.errorColor, body: [c] };
          }
          parseAtom(s) {
            const a = this.parseGroup("atom", s);
            if ((a == null ? void 0 : a.type) === "internal" || this.mode === "text")
              return a;
            let c, u;
            for (; ; ) {
              this.consumeSpaces();
              const f = this.fetch();
              if (f.text === "\\limits" || f.text === "\\nolimits") {
                if (a && a.type === "op") {
                  const b = f.text === "\\limits";
                  a.limits = b, a.alwaysHandleSupSub = true;
                } else if (a && a.type === "operatorname")
                  a.alwaysHandleSupSub && (a.limits = f.text === "\\limits");
                else
                  throw new l("Limit controls must follow a math operator", f);
                this.consume();
              } else if (f.text === "^") {
                if (c)
                  throw new l("Double superscript", f);
                c = this.handleSupSubscript("superscript");
              } else if (f.text === "_") {
                if (u)
                  throw new l("Double subscript", f);
                u = this.handleSupSubscript("subscript");
              } else if (f.text === "'") {
                if (c)
                  throw new l("Double superscript", f);
                const b = { type: "textord", mode: this.mode, text: "\\prime" }, w = [b];
                for (this.consume(); this.fetch().text === "'"; )
                  w.push(b), this.consume();
                this.fetch().text === "^" && w.push(this.handleSupSubscript("superscript")), c = { type: "ordgroup", mode: this.mode, body: w };
              } else if (W0[f.text]) {
                const b = ya.test(f.text), w = [];
                for (w.push(new vt(W0[f.text])), this.consume(); ; ) {
                  const O = this.fetch().text;
                  if (!W0[O] || ya.test(O) !== b)
                    break;
                  w.unshift(new vt(W0[O])), this.consume();
                }
                const A = this.subparse(w);
                b ? u = { type: "ordgroup", mode: "math", body: A } : c = { type: "ordgroup", mode: "math", body: A };
              } else
                break;
            }
            return c || u ? { type: "supsub", mode: this.mode, base: a, sup: c, sub: u } : a;
          }
          parseFunction(s, a) {
            const c = this.fetch(), u = c.text, f = tn[u];
            if (!f)
              return null;
            if (this.consume(), a && a !== "atom" && !f.allowedInArgument)
              throw new l("Got function '" + u + "' with no arguments" + (a ? " as " + a : ""), c);
            if (this.mode === "text" && !f.allowedInText)
              throw new l("Can't use function '" + u + "' in text mode", c);
            if (this.mode === "math" && f.allowedInMath === false)
              throw new l("Can't use function '" + u + "' in math mode", c);
            const { args: b, optArgs: w } = this.parseArguments(u, f);
            return this.callFunction(u, b, w, c, s);
          }
          callFunction(s, a, c, u, f) {
            const b = { funcName: s, parser: this, token: u, breakOnTokenText: f }, w = tn[s];
            if (w && w.handler)
              return w.handler(b, a, c);
            throw new l("No function handler for " + s);
          }
          parseArguments(s, a) {
            const c = a.numArgs + a.numOptionalArgs;
            if (c === 0)
              return { args: [], optArgs: [] };
            const u = [], f = [];
            for (let b = 0; b < c; b++) {
              let w = a.argTypes && a.argTypes[b];
              const A = b < a.numOptionalArgs;
              (a.primitive && w == null || a.type === "sqrt" && b === 1 && f[0] == null) && (w = "primitive");
              const O = this.parseGroupOfType("argument to '" + s + "'", w, A);
              if (A)
                f.push(O);
              else if (O != null)
                u.push(O);
              else
                throw new l("Null argument, please report this as a bug");
            }
            return { args: u, optArgs: f };
          }
          parseGroupOfType(s, a, c) {
            switch (a) {
              case "color":
                return this.parseColorGroup(c);
              case "size":
                return this.parseSizeGroup(c);
              case "url":
                return this.parseUrlGroup(c);
              case "math":
              case "text":
                return this.parseArgumentGroup(c, a);
              case "hbox": {
                const u = this.parseArgumentGroup(c, "text");
                return u != null ? { type: "styling", mode: u.mode, body: [u], style: "text" } : null;
              }
              case "raw": {
                const u = this.parseStringGroup("raw", c);
                return u != null ? { type: "raw", mode: "text", string: u.text } : null;
              }
              case "primitive": {
                if (c)
                  throw new l("A primitive argument cannot be optional");
                const u = this.parseGroup(s);
                if (u == null)
                  throw new l("Expected group as " + s, this.fetch());
                return u;
              }
              case "original":
              case null:
              case void 0:
                return this.parseArgumentGroup(c);
              default:
                throw new l("Unknown group type as " + s, this.fetch());
            }
          }
          consumeSpaces() {
            for (; this.fetch().text === " "; )
              this.consume();
          }
          parseStringGroup(s, a) {
            const c = this.gullet.scanArgument(a);
            if (c == null)
              return null;
            let u = "", f;
            for (; (f = this.fetch()).text !== "EOF"; )
              u += f.text, this.consume();
            return this.consume(), c.text = u, c;
          }
          parseRegexGroup(s, a) {
            const c = this.fetch();
            let u = c, f = "", b;
            for (; (b = this.fetch()).text !== "EOF" && s.test(f + b.text); )
              u = b, f += u.text, this.consume();
            if (f === "")
              throw new l("Invalid " + a + ": '" + c.text + "'", c);
            return c.range(u, f);
          }
          parseColorGroup(s) {
            const a = this.parseStringGroup("color", s);
            if (a == null)
              return null;
            const c = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(a.text);
            if (!c)
              throw new l("Invalid color: '" + a.text + "'", a);
            let u = c[0];
            return /^[0-9a-f]{6}$/i.test(u) && (u = "#" + u), { type: "color-token", mode: this.mode, color: u };
          }
          parseSizeGroup(s) {
            let a, c = false;
            if (this.gullet.consumeSpaces(), !s && this.gullet.future().text !== "{" ? a = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : a = this.parseStringGroup("size", s), !a)
              return null;
            !s && a.text.length === 0 && (a.text = "0pt", c = true);
            const u = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(a.text);
            if (!u)
              throw new l("Invalid size: '" + a.text + "'", a);
            const f = { number: +(u[1] + u[2]), unit: u[3] };
            if (!ti(f))
              throw new l("Invalid unit: '" + f.unit + "'", a);
            return { type: "size", mode: this.mode, value: f, isBlank: c };
          }
          parseUrlGroup(s) {
            this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
            const a = this.parseStringGroup("url", s);
            if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), a == null)
              return null;
            const c = a.text.replace(/\\([#$%&~_^{}])/g, "$1");
            return { type: "url", mode: this.mode, url: c };
          }
          parseArgumentGroup(s, a) {
            const c = this.gullet.scanArgument(s);
            if (c == null)
              return null;
            const u = this.mode;
            a && this.switchMode(a), this.gullet.beginGroup();
            const f = this.parseExpression(false, "EOF");
            this.expect("EOF"), this.gullet.endGroup();
            const b = { type: "ordgroup", mode: this.mode, loc: c.loc, body: f };
            return a && this.switchMode(u), b;
          }
          parseGroup(s, a) {
            const c = this.fetch(), u = c.text;
            let f;
            if (u === "{" || u === "\\begingroup") {
              this.consume();
              const b = u === "{" ? "}" : "\\endgroup";
              this.gullet.beginGroup();
              const w = this.parseExpression(false, b), A = this.fetch();
              this.expect(b), this.gullet.endGroup(), f = { type: "ordgroup", mode: this.mode, loc: yt.range(c, A), body: w, semisimple: u === "\\begingroup" || void 0 };
            } else if (f = this.parseFunction(a, s) || this.parseSymbol(), f == null && u[0] === "\\" && !ga.hasOwnProperty(u)) {
              if (this.settings.throwOnError)
                throw new l("Undefined control sequence: " + u, c);
              f = this.formatUnsupportedCmd(u), this.consume();
            }
            return f;
          }
          formLigatures(s) {
            let a = s.length - 1;
            for (let c = 0; c < a; ++c) {
              const u = s[c], f = u.text;
              f === "-" && s[c + 1].text === "-" && (c + 1 < a && s[c + 2].text === "-" ? (s.splice(c, 3, { type: "textord", mode: "text", loc: yt.range(u, s[c + 2]), text: "---" }), a -= 2) : (s.splice(c, 2, { type: "textord", mode: "text", loc: yt.range(u, s[c + 1]), text: "--" }), a -= 1)), (f === "'" || f === "`") && s[c + 1].text === f && (s.splice(c, 2, { type: "textord", mode: "text", loc: yt.range(u, s[c + 1]), text: f + f }), a -= 1);
            }
          }
          parseSymbol() {
            const s = this.fetch();
            let a = s.text;
            if (/^\\verb[^a-zA-Z]/.test(a)) {
              this.consume();
              let f = a.slice(5);
              const b = f.charAt(0) === "*";
              if (b && (f = f.slice(1)), f.length < 2 || f.charAt(0) !== f.slice(-1))
                throw new l(`\\verb assertion failed --
                    please report what input caused this bug`);
              return f = f.slice(1, -1), { type: "verb", mode: "text", body: f, star: b };
            }
            ba.hasOwnProperty(a[0]) && !He[this.mode][a[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + a[0] + '" used in math mode', s), a = ba[a[0]] + a.slice(1));
            const c = vu.exec(a);
            c && (a = a.substring(0, c.index), a === "i" ? a = "\u0131" : a === "j" && (a = "\u0237"));
            let u;
            if (He[this.mode][a]) {
              this.settings.strict && this.mode === "math" && Ur.indexOf(a) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + a[0] + '" used in math mode', s);
              const f = He[this.mode][a].group, b = yt.range(s);
              let w;
              if (vh.hasOwnProperty(f)) {
                const A = f;
                w = { type: "atom", mode: this.mode, family: A, loc: b, text: a };
              } else
                w = { type: f, mode: this.mode, loc: b, text: a };
              u = w;
            } else if (a.charCodeAt(0) >= 128)
              this.settings.strict && (ve(a.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + a[0] + '" used in math mode', s) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + a[0] + '"' + (" (" + a.charCodeAt(0) + ")"), s)), u = { type: "textord", mode: "text", loc: yt.range(s), text: a };
            else
              return null;
            if (this.consume(), c)
              for (let f = 0; f < c[0].length; f++) {
                const b = c[0][f];
                if (!ks[b])
                  throw new l("Unknown accent ' " + b + "'", s);
                const w = ks[b][this.mode] || ks[b].text;
                if (!w)
                  throw new l("Accent " + b + " unsupported in " + this.mode + " mode", s);
                u = { type: "accent", mode: this.mode, loc: yt.range(s), label: w, isStretchy: false, isShifty: true, base: u };
              }
            return u;
          }
        }
        Y0.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
        var Ss = function(o, s) {
          if (!(typeof o == "string" || o instanceof String))
            throw new TypeError("KaTeX can only parse string typed expression");
          const a = new Y0(o, s);
          delete a.gullet.macros.current["\\df@tag"];
          let c = a.parse();
          if (delete a.gullet.macros.current["\\current@color"], delete a.gullet.macros.current["\\color"], a.gullet.macros.get("\\df@tag")) {
            if (!s.displayMode)
              throw new l("\\tag works only in display equations");
            c = [{ type: "tag", mode: "text", body: c, tag: a.subparse([new vt("\\df@tag")]) }];
          }
          return c;
        };
        let xa = function(o, s, a) {
          s.textContent = "";
          const c = As(o, a).toNode();
          s.appendChild(c);
        };
        typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), xa = function() {
          throw new l("KaTeX doesn't work in quirks mode.");
        });
        const Mu = function(o, s) {
          return As(o, s).toMarkup();
        }, Cu = function(o, s) {
          const a = new F(s);
          return Ss(o, a);
        }, wa = function(o, s, a) {
          if (a.throwOnError || !(o instanceof l))
            throw o;
          const c = D.makeSpan(["katex-error"], [new xt(s)]);
          return c.setAttribute("title", o.toString()), c.setAttribute("style", "color:" + a.errorColor), c;
        }, As = function(o, s) {
          const a = new F(s);
          try {
            const c = Ss(o, a);
            return Hh(c, o, a);
          } catch (c) {
            return wa(c, o, a);
          }
        };
        var Eu = { version: "0.16.22", render: xa, renderToString: Mu, ParseError: l, SETTINGS_SCHEMA: B, __parse: Cu, __renderToDomTree: As, __renderToHTMLTree: function(o, s) {
          const a = new F(s);
          try {
            const c = Ss(o, a);
            return Vh(c, o, a);
          } catch (c) {
            return wa(c, o, a);
          }
        }, __setFontMetrics: dh, __defineSymbol: d, __defineFunction: ne, __defineMacro: v, __domTree: { Span: Qn, Anchor: Vr, SymbolNode: xt, SvgNode: Ft, PathNode: Zt, LineNode: jr } }, Nu = Eu;
        return r = r.default, r;
      }();
    });
  }(po)), po.exports;
}
var yl;
function q5() {
  if (yl)
    return zn;
  yl = 1;
  var t2 = zn && zn.__importDefault || function(S) {
    return S && S.__esModule ? S : { default: S };
  };
  Object.defineProperty(zn, "__esModule", { value: true });
  const e = t2(B5());
  function n(S, M) {
    const C = S.src[M - 1], B = S.src[M], H = S.src[M + 1];
    if (B !== "$")
      return { can_open: false, can_close: false };
    let F = false, V = false;
    return C !== "$" && C !== "\\" && (C === void 0 || r(C) || !i(C)) && (F = true), H !== "$" && (H == null || r(H) || !i(H)) && (V = true), { can_open: F, can_close: V };
  }
  function r(S) {
    return /^\s$/u.test(S);
  }
  function i(S) {
    return /^[\w\d]$/u.test(S);
  }
  function l(S, M) {
    const C = S.src[M - 1], B = S.src[M], H = S.src[M + 1], F = S.src[M + 2];
    return B === "$" && C !== "$" && C !== "\\" && H === "$" && F !== "$" ? { can_open: true, can_close: true } : { can_open: false, can_close: false };
  }
  function h(S, M) {
    if (S.src[S.pos] !== "$")
      return false;
    const C = S.tokens.at(-1);
    if ((C == null ? void 0 : C.type) === "html_inline" && /^<\w+.+[^/]>$/.test(C.content))
      return false;
    let B = n(S, S.pos);
    if (!B.can_open)
      return M || (S.pending += "$"), S.pos += 1, true;
    let H = S.pos + 1, F = H, V;
    for (; (F = S.src.indexOf("$", F)) !== -1; ) {
      for (V = F - 1; S.src[V] === "\\"; )
        V -= 1;
      if ((F - V) % 2 == 1)
        break;
      F += 1;
    }
    if (F === -1)
      return M || (S.pending += "$"), S.pos = H, true;
    if (F - H === 0)
      return M || (S.pending += "$$"), S.pos = H + 1, true;
    if (B = n(S, F), !B.can_close)
      return M || (S.pending += "$"), S.pos = H, true;
    if (!M) {
      const U = S.push("math_inline", "math", 0);
      U.markup = "$", U.content = S.src.slice(H, F);
    }
    return S.pos = F + 1, true;
  }
  function p(S, M, C, B) {
    var H, F, V, U = false, X, te = S.bMarks[M] + S.tShift[M], j = S.eMarks[M];
    if (te + 2 > j || S.src.slice(te, te + 2) !== "$$")
      return false;
    te += 2;
    let le = S.src.slice(te, j);
    if (B)
      return true;
    for (le.trim().slice(-2) === "$$" && (le = le.trim().slice(0, -2), U = true), F = M; !U && (F++, !(F >= C || (te = S.bMarks[F] + S.tShift[F], j = S.eMarks[F], te < j && S.tShift[F] < S.blkIndent))); )
      S.src.slice(te, j).trim().slice(-2) === "$$" ? (V = S.src.slice(0, j).lastIndexOf("$$"), H = S.src.slice(te, V), U = true) : S.src.slice(te, j).trim().includes("$$") && (V = S.src.slice(0, j).trim().indexOf("$$"), H = S.src.slice(te, V), U = true);
    return S.line = F + 1, X = S.push("math_block", "math", 0), X.block = true, X.content = (le && le.trim() ? le + `
` : "") + S.getLines(M + 1, F, S.tShift[M], true) + (H && H.trim() ? H : ""), X.map = [M, S.line], X.markup = "$$", true;
  }
  function m(S, M, C, B) {
    const H = S.bMarks[M] + S.tShift[M], F = S.eMarks[M];
    if (!S.src.slice(H, F).match(/^\s*\\begin\s*\{([^{}]+)\}/))
      return false;
    if (M > 0) {
      const le = S.bMarks[M - 1] + S.tShift[M - 1], ge = S.eMarks[M - 1], pe = S.src.slice(le, ge);
      if (!/^\s*$/.test(pe))
        return false;
    }
    if (B)
      return true;
    const V = [];
    let U = M, X, te = false;
    e:
      for (; !te && !(U >= C); U++) {
        const le = S.bMarks[U] + S.tShift[U], ge = S.eMarks[U];
        if (le < ge && S.tShift[U] < S.blkIndent)
          break;
        const pe = S.src.slice(le, ge);
        for (const ae of pe.matchAll(/(\\begin|\\end)\s*\{([^{}]+)\}/g))
          if (ae[1] === "\\begin")
            V.push(ae[2].trim());
          else if (ae[1] === "\\end" && (V.pop(), !V.length)) {
            X = S.src.slice(le, ge), te = true;
            break e;
          }
      }
    S.line = U + 1;
    const j = S.push("math_block", "math", 0);
    return j.block = true, j.content = (S.getLines(M, U, S.tShift[M], true) + (X ?? "")).trim(), j.map = [M, S.line], j.markup = "$$", true;
  }
  function y(S, M) {
    var C, B, H, F, V;
    if (S.src.slice(S.pos, S.pos + 2) !== "$$")
      return false;
    if (F = l(S, S.pos), !F.can_open)
      return M || (S.pending += "$$"), S.pos += 2, true;
    for (C = S.pos + 2, B = C; (B = S.src.indexOf("$$", B)) !== -1; ) {
      for (V = B - 1; S.src[V] === "\\"; )
        V -= 1;
      if ((B - V) % 2 == 1)
        break;
      B += 2;
    }
    return B === -1 ? (M || (S.pending += "$$"), S.pos = C, true) : B - C === 0 ? (M || (S.pending += "$$$$"), S.pos = C + 2, true) : (F = l(S, B), F.can_close ? (M || (H = S.push("math_block", "math", 0), H.block = true, H.markup = "$$", H.content = S.src.slice(C, B)), S.pos = B + 2, true) : (M || (S.pending += "$$"), S.pos = C, true));
  }
  function k(S, M) {
    const C = S.src.slice(S.pos);
    if (!/^\n\\begin/.test(C))
      return false;
    if (S.pos += 1, M)
      return true;
    const B = C.split(/\n/g).slice(1);
    let H;
    const F = [];
    e:
      for (var V = 0; V < B.length; ++V) {
        const te = B[V];
        for (const j of te.matchAll(/(\\begin|\\end)\s*\{([^{}]+)\}/g))
          if (j[1] === "\\begin")
            F.push(j[2].trim());
          else if (j[1] === "\\end" && (F.pop(), !F.length)) {
            H = V;
            break e;
          }
      }
    if (typeof H > "u")
      return false;
    const U = B.slice(0, H + 1).reduce((te, j) => te + j.length, 0) + H + 1, X = S.push("math_inline_bare_block", "math", 0);
    return X.block = true, X.markup = "$$", X.content = C.slice(1, U), S.pos = S.pos + U, true;
  }
  function T(S, M, C, B) {
    const H = S.tokens;
    for (let F = H.length - 1; F >= 0; F--) {
      const V = H[F], U = [];
      if (V.type !== "html_block")
        continue;
      const X = V.content;
      for (const te of X.matchAll(B)) {
        if (!te.groups)
          continue;
        const j = te.groups.html_before_math, le = te.groups.math, ge = te.groups.html_after_math;
        j && U.push({ ...V, type: "html_block", map: null, content: j }), le && U.push({ ...V, type: M, map: null, content: le, markup: C, block: true, tag: "math" }), ge && U.push({ ...V, type: "html_block", map: null, content: ge });
      }
      U.length > 0 && H.splice(F, 1, ...U);
    }
    return true;
  }
  function N(S) {
    return S.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }
  function z(S, M) {
    const C = (M == null ? void 0 : M.katex) ?? e.default, B = M == null ? void 0 : M.enableBareBlocks, H = M == null ? void 0 : M.enableMathBlockInHtml, F = M == null ? void 0 : M.enableMathInlineInHtml, V = M == null ? void 0 : M.enableFencedBlocks;
    S.inline.ruler.after("escape", "math_inline", h), S.inline.ruler.after("escape", "math_inline_block", y), B && S.inline.ruler.before("text", "math_inline_bare_block", k), S.block.ruler.after("blockquote", "math_block", (pe, ae, Ae, $) => B && m(pe, ae, Ae, $) ? true : p(pe, ae, Ae, $), { alt: ["paragraph", "reference", "blockquote", "list"] });
    const U = /(?<html_before_math>[\s\S]*?)\$\$(?<math>[\s\S]+?)\$\$(?<html_after_math>(?:(?!\$\$[\s\S]+?\$\$)[\s\S])*)/gm, X = /(?<html_before_math>[\s\S]*?)\$(?<math>.*?)\$(?<html_after_math>(?:(?!\$.*?\$)[\s\S])*)/gm;
    H && S.core.ruler.push("math_block_in_html_block", (pe) => T(pe, "math_block", "$$", U)), F && S.core.ruler.push("math_inline_in_html_block", (pe) => T(pe, "math_inline", "$", X));
    const te = (pe) => {
      const ae = /\\begin\{(align|equation|gather|cd|alignat)\}/ig.test(pe);
      try {
        return C.renderToString(pe, { ...M, displayMode: ae });
      } catch (Ae) {
        return M != null && M.throwOnError && console.log(Ae), `<span class="katex-error" title="${N(pe)}">${N(Ae + "")}</span>`;
      }
    }, j = (pe, ae) => {
      const Ae = pe[ae].content, $ = Ae.length > 2 && Ae[0] === "`" && Ae[Ae.length - 1] === "`" ? Ae.slice(1, -1) : Ae;
      return te($);
    }, le = (pe) => {
      try {
        return `<p class="katex-block">${C.renderToString(pe, { ...M, displayMode: true })}</p>`;
      } catch (ae) {
        return M != null && M.throwOnError && console.log(ae), `<p class="katex-block katex-error" title="${N(pe)}">${N(ae + "")}</p>`;
      }
    }, ge = (pe, ae) => le(pe[ae].content) + `
`;
    if (S.renderer.rules.math_inline = j, S.renderer.rules.math_inline_block = ge, S.renderer.rules.math_inline_bare_block = ge, S.renderer.rules.math_block = ge, V) {
      const pe = "math", ae = S.renderer.rules.fence;
      S.renderer.rules.fence = function(Ae, $, se, Y, ie) {
        const me = Ae[$];
        return me.info.trim().toLowerCase() === pe && V ? le(me.content) + `
` : (ae == null ? void 0 : ae.call(this, Ae, $, se, Y, ie)) || "";
      };
    }
  }
  return zn.default = z, zn;
}
var L5 = q5();
const D5 = Lu(L5);
function R5() {
  const t2 = Ru({ html: true, breaks: true });
  return t2.use(ff).use(gf).use(xf).use(kf), t2;
}
function P5(t2) {
  return { transformer: t2, parser: new h0(), beforeParse: new h0(), afterParse: new h0(), retransform: new h0() };
}
const $5 = `<svg width="16" height="16" viewBox="0 -3 24 24"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"/></svg>
`, F5 = `<svg width="16" height="16" viewBox="0 -3 24 24"><path fill-rule="evenodd" d="M6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-5z" clip-rule="evenodd"/></svg>
`, H5 = "checkbox", bl = { " ": F5.trim(), x: $5.trim() }, V5 = { name: H5, transform(t2) {
  return t2.parser.tap((e) => {
    e.core.ruler.before("inline", "checkbox", (n) => {
      for (let r = 2; r < n.tokens.length; r += 1) {
        const i = n.tokens[r];
        if (i.type === "inline" && i.content) {
          const l = n.tokens[r - 1].type, h = n.tokens[r - 2].type;
          (l === "heading_open" || l === "paragraph_open" && h === "list_item_open") && (i.content = i.content.replace(/^\[(.)\] /, (p, m) => bl[m] ? `${bl[m]} ` : p));
        }
      }
      return false;
    });
  }), {};
} }, j5 = "frontmatter", U5 = { name: j5, transform(t2) {
  return t2.beforeParse.tap((e, n) => {
    var r;
    const { content: i } = n;
    if (!/^---\r?\n/.test(i))
      return;
    const l = /\n---\r?\n/.exec(i);
    if (!l)
      return;
    const h = i.slice(4, l.index).trimEnd();
    let p;
    try {
      p = O5(h.replace(/\r?\n|\r/g, `
`)), p != null && p.markmap && (p.markmap = K5(p.markmap));
    } catch {
      return;
    }
    n.frontmatter = p, n.parserOptions = { ...n.parserOptions, ...(r = p == null ? void 0 : p.markmap) == null ? void 0 : r.htmlParser }, n.frontmatterInfo = { lines: i.slice(0, l.index).split(`
`).length + 1, offset: l.index + l[0].length };
  }), {};
} };
function K5(t2) {
  if (t2)
    return ["color", "extraJs", "extraCss"].forEach((e) => {
      t2[e] != null && (t2[e] = G5(t2[e]));
    }), ["duration", "maxWidth", "initialExpandLevel"].forEach((e) => {
      t2[e] != null && (t2[e] = X5(t2[e]));
    }), t2;
}
function G5(t2) {
  let e;
  return typeof t2 == "string" ? e = [t2] : Array.isArray(t2) && (e = t2.filter((n) => n && typeof n == "string")), e != null && e.length ? e : void 0;
}
function X5(t2) {
  if (!isNaN(+t2))
    return +t2;
}
function Yo(t2, e) {
  return e.type === "script" && e.data.src ? { ...e, data: { ...e.data, src: t2.getFullUrl(e.data.src) } } : e;
}
function W5(t2, e) {
  return e.type === "stylesheet" && e.data.href ? { ...e, data: { ...e.data, href: t2.getFullUrl(e.data.href) } } : e;
}
const xl = "hljs", Y5 = ["@highlightjs/cdn-assets@11.11.1/highlight.min.js"].map((t2) => yo(t2)), Q5 = ["@highlightjs/cdn-assets@11.11.1/styles/default.min.css"].map((t2) => Al(t2)), Z5 = { versions: { hljs: "11.11.1" }, preloadScripts: Y5, styles: Q5 }, mo = { name: xl, config: Z5, transform(t2) {
  var e, n, r;
  let i;
  const l = ((n = (e = mo.config) == null ? void 0 : e.preloadScripts) == null ? void 0 : n.map((m) => Yo(t2.transformer.urlBuilder, m))) || [], h = () => (i || (i = Sl(l)), i);
  let p = On;
  return t2.parser.tap((m) => {
    m.set({ highlight: (y, k) => {
      p();
      const { hljs: T } = window;
      return T ? T.highlightAuto(y, k ? [k] : void 0).value : (h().then(() => {
        t2.retransform.call();
      }), y);
    } });
  }), t2.beforeParse.tap((m, y) => {
    p = () => {
      y.features[xl] = true;
    };
  }), { styles: (r = mo.config) == null ? void 0 : r.styles };
} };
function J5(t2, e, n) {
  return t2.map((r) => {
    if (typeof r == "string" && !r.includes("://")) {
      r.startsWith("npm:") || (r = `npm:${r}`);
      const i = 4 + e.length;
      r.startsWith(`npm:${e}/`) && (r = `${r.slice(0, i)}@${n}${r.slice(i)}`);
    }
    return r;
  });
}
var e6 = ["katex@0.16.18/dist/fonts/KaTeX_AMS-Regular.woff2", "katex@0.16.18/dist/fonts/KaTeX_Caligraphic-Bold.woff2", "katex@0.16.18/dist/fonts/KaTeX_Caligraphic-Regular.woff2", "katex@0.16.18/dist/fonts/KaTeX_Fraktur-Bold.woff2", "katex@0.16.18/dist/fonts/KaTeX_Fraktur-Regular.woff2", "katex@0.16.18/dist/fonts/KaTeX_Main-Bold.woff2", "katex@0.16.18/dist/fonts/KaTeX_Main-BoldItalic.woff2", "katex@0.16.18/dist/fonts/KaTeX_Main-Italic.woff2", "katex@0.16.18/dist/fonts/KaTeX_Main-Regular.woff2", "katex@0.16.18/dist/fonts/KaTeX_Math-BoldItalic.woff2", "katex@0.16.18/dist/fonts/KaTeX_Math-Italic.woff2", "katex@0.16.18/dist/fonts/KaTeX_SansSerif-Bold.woff2", "katex@0.16.18/dist/fonts/KaTeX_SansSerif-Italic.woff2", "katex@0.16.18/dist/fonts/KaTeX_SansSerif-Regular.woff2", "katex@0.16.18/dist/fonts/KaTeX_Script-Regular.woff2", "katex@0.16.18/dist/fonts/KaTeX_Size1-Regular.woff2", "katex@0.16.18/dist/fonts/KaTeX_Size2-Regular.woff2", "katex@0.16.18/dist/fonts/KaTeX_Size3-Regular.woff2", "katex@0.16.18/dist/fonts/KaTeX_Size4-Regular.woff2", "katex@0.16.18/dist/fonts/KaTeX_Typewriter-Regular.woff2"];
const Gs = "katex", t6 = ["katex@0.16.18/dist/katex.min.js"].map((t2) => yo(t2)), sh = yo("webfontloader@1.6.28/webfontloader.js");
sh.data.defer = true;
const n6 = ["katex@0.16.18/dist/katex.min.css"].map((t2) => Al(t2)), r6 = { versions: { katex: "0.16.18", webfontloader: "1.6.28" }, preloadScripts: t6, scripts: [{ type: "iife", data: { fn: (t2) => {
  window.WebFontConfig = { custom: { families: ["KaTeX_AMS", "KaTeX_Caligraphic:n4,n7", "KaTeX_Fraktur:n4,n7", "KaTeX_Main:n4,n7,i4,i7", "KaTeX_Math:i4,i7", "KaTeX_Script", "KaTeX_SansSerif:n4,n7,i4", "KaTeX_Size1", "KaTeX_Size2", "KaTeX_Size3", "KaTeX_Size4", "KaTeX_Typewriter"] }, active: () => {
    t2().refreshHook.call();
  } };
}, getParams({ getMarkmap: t2 }) {
  return [t2];
} } }, sh], styles: n6, resources: e6 };
function s6(t2) {
  return t2.default || t2;
}
const o6 = s6(D5), m0 = { name: Gs, config: r6, transform(t2) {
  var e, n, r, i;
  let l;
  const h = ((n = (e = m0.config) == null ? void 0 : e.preloadScripts) == null ? void 0 : n.map((k) => Yo(t2.transformer.urlBuilder, k))) || [], p = () => (l || (l = Sl(h)), l), m = (k, T) => {
    const { katex: N } = window;
    return N ? N.renderToString(k, { displayMode: T, throwOnError: false }) : (p().then(() => {
      t2.retransform.call();
    }), k);
  };
  let y = On;
  return t2.parser.tap((k) => {
    k.use(o6), ["math_block", "math_inline"].forEach((T) => {
      const N = (z, S) => (y(), m(z[S].content, !!z[S].block));
      k.renderer.rules[T] = N;
    });
  }), t2.beforeParse.tap((k, T) => {
    y = () => {
      T.features[Gs] = true;
    };
  }), t2.afterParse.tap((k, T) => {
    var N;
    const z = (N = T.frontmatter) == null ? void 0 : N.markmap;
    z && ["extraJs", "extraCss"].forEach((S) => {
      var M, C;
      const B = z[S];
      B && (z[S] = J5(B, Gs, ((C = (M = m0.config) == null ? void 0 : M.versions) == null ? void 0 : C.katex) || ""));
    });
  }), { styles: (r = m0.config) == null ? void 0 : r.styles, scripts: (i = m0.config) == null ? void 0 : i.scripts };
} }, i6 = "npmUrl", a6 = { name: i6, transform(t2) {
  return t2.afterParse.tap((e, n) => {
    const { frontmatter: r } = n, i = r == null ? void 0 : r.markmap;
    i && ["extraJs", "extraCss"].forEach((l) => {
      const h = i[l];
      h && (i[l] = h.map((p) => p.startsWith("npm:") ? t2.transformer.urlBuilder.getFullUrl(p.slice(4)) : p));
    });
  }), {};
} }, l6 = "sourceLines", c6 = { name: l6, transform(t2) {
  let e = 0;
  return t2.beforeParse.tap((n, r) => {
    var i;
    e = ((i = r.frontmatterInfo) == null ? void 0 : i.lines) || 0;
  }), t2.parser.tap((n) => {
    n.renderer.renderAttrs = _a(n.renderer.renderAttrs, (r, i) => {
      if (i.block && i.map) {
        const l = i.map.map((h) => h + e);
        i.attrSet("data-lines", l.join(","));
      }
      return r(i);
    }), n.renderer.rules.fence && (n.renderer.rules.fence = _a(n.renderer.rules.fence, (r, i, l, ...h) => {
      let p = r(i, l, ...h);
      const m = i[l];
      if (p.startsWith("<pre>") && m.map) {
        const y = m.map.map((k) => k + e);
        p = p.slice(0, 4) + ` data-lines="${y.join(",")}"` + p.slice(4);
      }
      return p;
    }));
  }), {};
} }, h6 = [U5, m0, mo, a6, V5, c6], u6 = h6;
function oh(t2) {
  for (; !t2.content && t2.children.length === 1; )
    t2 = t2.children[0];
  for (; t2.children.length === 1 && !t2.children[0].content; )
    t2 = { ...t2, children: t2.children[0].children };
  return { ...t2, children: t2.children.map(oh) };
}
class d6 {
  constructor(e = u6) {
    this.assetsMap = {}, this.urlBuilder = new w1(), this.hooks = P5(this), this.plugins = e.map((i) => typeof i == "function" ? i() : i);
    const n = {};
    for (const { name: i, transform: l } of this.plugins)
      n[i] = l(this.hooks);
    this.assetsMap = n;
    const r = R5();
    this.md = r, this.hooks.parser.call(r);
  }
  transform(e, n) {
    var r;
    const i = { content: e, features: {}, parserOptions: n };
    this.hooks.beforeParse.call(this.md, i);
    let { content: l } = i;
    i.frontmatterInfo && (l = l.slice(i.frontmatterInfo.offset));
    const h = this.md.render(l, {});
    this.hooks.afterParse.call(this.md, i);
    const p = oh(mf(h, i.parserOptions));
    return p.content || (p.content = `${((r = i.frontmatter) == null ? void 0 : r.title) || ""}`), { ...i, root: p };
  }
  resolveJS(e) {
    return Yo(this.urlBuilder, e);
  }
  resolveCSS(e) {
    return W5(this.urlBuilder, e);
  }
  getAssets(e) {
    const n = [], r = [];
    e ?? (e = this.plugins.map((i) => i.name));
    for (const i of e.map((l) => this.assetsMap[l]))
      i && (i.styles && n.push(...i.styles), i.scripts && r.push(...i.scripts));
    return { styles: n.map((i) => this.resolveCSS(i)), scripts: r.map((i) => this.resolveJS(i)) };
  }
  getUsedAssets(e) {
    const n = this.plugins.map((r) => r.name).filter((r) => e[r]);
    return this.getAssets(n);
  }
}
const p6 = { class: "mindmap-viewer__header" }, m6 = { class: "mindmap-viewer__tabs-container" }, f6 = { class: "mindmap-viewer__tabs" }, g6 = { class: "mindmap-viewer__actions" }, y6 = { class: "mindmap-viewer__icon" }, b6 = { class: "mindmap-viewer__icon" }, x6 = { class: "mindmap-viewer__dropdown-menu" }, w6 = { class: "mindmap-viewer__actions" }, v6 = { class: "mindmap-viewer__content" }, k6 = { class: "mindmap-viewer__code", key: "code" }, S6 = { class: "mindmap-viewer__code-pre" }, A6 = { __name: "mindmap", props: { value: { type: String, default: "" } }, setup(t2) {
  const e = t2, n = new d6(), r = n0(), i = n0(null), l = n0("image"), h = n0(false), p = n0(false), m = () => {
    h.value = !h.value;
  };
  let y;
  const k = async (B) => {
    if (!y)
      return;
    const { root: H } = n.transform(B);
    await y.setData(H), y.fit();
  }, T = () => {
    p.value = !p.value;
  }, N = () => {
    y.rescale(1.25);
  }, z = () => {
    y.rescale(0.8);
  }, S = () => {
    r.value && (Vu(r.value), Wu.success(Du.global.t("hubx.bubble.download_success")), h.value = false);
  }, M = () => {
    Yu(e.value), h.value = false;
  };
  _u(() => {
    k(e.value);
  });
  let C;
  return Bu(() => {
    try {
      y = xo.create(r.value), k(e.value);
    } catch (B) {
      console.log(B);
    }
    C = Pu(i.value, () => {
      h.value = false;
    });
  }), qu(() => {
    C == null ? void 0 : C.destroy();
  }), (B, H) => (Z0(), Sa("div", { class: Ts(["mindmap-viewer", { "mindmap-viewer--fixed": p.value }]) }, [Xe("div", p6, [Xe("div", m6, [Xe("div", f6, [Xe("div", { class: Ts(["mindmap-viewer__tab", { "mindmap-viewer__tab--active": l.value === "image" }]), onClick: H[0] || (H[0] = (F) => l.value = "image") }, r0(B.$hubx_t("hubx.bubble.image")), 3), Xe("div", { class: Ts(["mindmap-viewer__tab", { "mindmap-viewer__tab--active": l.value === "code" }]), onClick: H[1] || (H[1] = (F) => l.value = "code") }, r0(B.$hubx_t("hubx.bubble.code")), 3)])]), s0(Xe("div", g6, [Xe("div", { class: "mindmap-viewer__dropdown", ref_key: "dropdownRef", ref: i }, [Xe("span", { class: "mindmap-viewer__dropdown-trigger", onClick: m }, [Xe("i", y6, [un(dn, { name: "download" })]), Xe("i", b6, [un(dn, { name: "down" })])]), s0(Xe("div", x6, [Xe("div", { class: "mindmap-viewer__dropdown-item", onClick: S }, r0(B.$hubx_t("hubx.bubble.download_image")), 1), Xe("div", { class: "mindmap-viewer__dropdown-item", onClick: M }, r0(B.$hubx_t("hubx.bubble.copy_markdown")), 1)], 512), [[o0, h.value]])], 512), Xe("i", { class: "mindmap-viewer__icon", onClick: T }, [p.value ? (Z0(), Aa(dn, { key: 0, name: "collapse" })) : (Z0(), Aa(dn, { key: 1, name: "expand" }))]), Xe("i", { class: "mindmap-viewer__icon", onClick: z }, [un(dn, { name: "zoom-out" })]), Xe("i", { class: "mindmap-viewer__icon", onClick: N }, [un(dn, { name: "zoom-in" })])], 512), [[o0, l.value === "image"]]), s0(Xe("div", w6, [Xe("i", { class: "mindmap-viewer__icon", onClick: M }, [un(dn, { name: "copy" })])], 512), [[o0, l.value === "code"]])]), Xe("div", v6, [un(Ma, { name: "slide-fade", mode: "out-in" }, { default: Ta(() => [s0((Z0(), Sa("svg", { style: { position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }, ref_key: "svgRef", ref: r, key: "image" }, null, 512)), [[o0, l.value === "image"]])]), _: 1 }), un(Ma, { name: "slide-fade", mode: "out-in" }, { default: Ta(() => [s0(Xe("div", k6, [Xe("pre", S6, r0(t2.value), 1)], 512), [[o0, l.value === "code"]])]), _: 1 })])], 2));
} }, O6 = Ou(A6, [["__scopeId", "data-v-1ab8bb96"]]);
export {
  O6 as default
};
