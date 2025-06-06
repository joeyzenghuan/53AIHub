import { R as Rn$1, r as ref, w as watchEffect, o as onMounted, a as onUnmounted, b as openBlock, c as createElementBlock, d as createBaseVNode, n as normalizeClass, t as toDisplayString, g as withDirectives, v as vShow, f as createVNode, A as At$1, h as createBlock, i as withCtx, T as Transition, E as E0$1, D as Dl$1, j as gt } from "./main-zTjO05wq.js";
import { K as Ki$1, X as Xi$1, O as Oi$1, H as Hi$1, Y as Yi$1, F as Fi$1, L as Li$1, q as qi$1, G as Gi$1, V as Vi$1, B as Bi$1, a as Vt, I, E as Er$1 } from "./helper-7WMIPux3-FiO_G2IV.js";
import { t, l } from "./min-DLf0xQMm-nalJLjBu.js";
import { h } from "./ordinal-DfAQgscy-u5KZJLIt.js";
import { c } from "./colors-BD7LS4qt-GuCNWxZ4.js";
import { r, d } from "./copy-BS31ARP0-eab1H3tb.js";
import "./init-DjUOC4st-2EPjLC0T.js";
function Qh(t3, e) {
  let n, r3 = -1, a = -1;
  if (e === void 0)
    for (const l3 of t3)
      ++a, l3 != null && (n > l3 || n === void 0 && l3 >= l3) && (n = l3, r3 = a);
  else
    for (let l3 of t3)
      (l3 = e(l3, ++a, t3)) != null && (n > l3 || n === void 0 && l3 >= l3) && (n = l3, r3 = a);
  return r3;
}
function Zh(t3) {
  let e;
  for (; e = t3.sourceEvent; )
    t3 = e;
  return t3;
}
function dn(t3, e) {
  if (t3 = Zh(t3), e === void 0 && (e = t3.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var r3 = n.createSVGPoint();
      return r3.x = t3.clientX, r3.y = t3.clientY, r3 = r3.matrixTransform(e.getScreenCTM().inverse()), [r3.x, r3.y];
    }
    if (e.getBoundingClientRect) {
      var a = e.getBoundingClientRect();
      return [t3.clientX - a.left - e.clientLeft, t3.clientY - a.top - e.clientTop];
    }
  }
  return [t3.pageX, t3.pageY];
}
const Yi = { capture: true, passive: false };
function Ji(t3) {
  t3.preventDefault(), t3.stopImmediatePropagation();
}
function e1(t3) {
  var e = t3.document.documentElement, n = Li$1(t3).on("dragstart.drag", Ji, Yi);
  "onselectstart" in e ? n.on("selectstart.drag", Ji, Yi) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function t1(t3, e) {
  var n = t3.document.documentElement, r3 = Li$1(t3).on("dragstart.drag", null);
  e && (r3.on("click.drag", Ji, Yi), setTimeout(function() {
    r3.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r3.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
var n1 = 1e-12;
function Io(t3) {
  return ((t3 = Math.exp(t3)) + 1 / t3) / 2;
}
function r1(t3) {
  return ((t3 = Math.exp(t3)) - 1 / t3) / 2;
}
function s1(t3) {
  return ((t3 = Math.exp(2 * t3)) - 1) / (t3 + 1);
}
const i1 = function t2(e, n, r3) {
  function a(l3, u) {
    var f = l3[0], p = l3[1], y = l3[2], v = u[0], T = u[1], _ = u[2], C = v - f, S = T - p, N = C * C + S * S, O, I3;
    if (N < n1)
      I3 = Math.log(_ / y) / e, O = function(ee) {
        return [
          f + ee * C,
          p + ee * S,
          y * Math.exp(e * ee * I3)
        ];
      };
    else {
      var F = Math.sqrt(N), H = (_ * _ - y * y + r3 * N) / (2 * y * n * F), j = (_ * _ - y * y - r3 * N) / (2 * _ * n * F), V = Math.log(Math.sqrt(H * H + 1) - H), W = Math.log(Math.sqrt(j * j + 1) - j);
      I3 = (W - V) / e, O = function(ee) {
        var K = ee * I3, le = Io(V), Te = y / (n * F) * (le * s1(e * K + V) - r1(V));
        return [
          f + Te * C,
          p + Te * S,
          y * le / Io(e * K + V)
        ];
      };
    }
    return O.duration = I3 * 1e3 * e / Math.SQRT2, O;
  }
  return a.rho = function(l3) {
    var u = Math.max(1e-3, +l3), f = u * u, p = f * f;
    return t2(u, f, p);
  }, a;
}(Math.SQRT2, 2, 4), a1 = c("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
function o1(t3) {
  return t3.source;
}
function l1(t3) {
  return t3.target;
}
function c1(t3) {
  let e = o1, n = l1, r3 = Vi$1, a = Bi$1, l3 = null, u = null, f = Xi$1(p);
  function p() {
    let y;
    const v = Oi$1.call(arguments), T = e.apply(this, v), _ = n.apply(this, v);
    if (l3 == null && (u = t3(y = f())), u.lineStart(), v[0] = T, u.point(+r3.apply(this, v), +a.apply(this, v)), v[0] = _, u.point(+r3.apply(this, v), +a.apply(this, v)), u.lineEnd(), y)
      return u = null, y + "" || null;
  }
  return p.source = function(y) {
    return arguments.length ? (e = y, p) : e;
  }, p.target = function(y) {
    return arguments.length ? (n = y, p) : n;
  }, p.x = function(y) {
    return arguments.length ? (r3 = typeof y == "function" ? y : Hi$1(+y), p) : r3;
  }, p.y = function(y) {
    return arguments.length ? (a = typeof y == "function" ? y : Hi$1(+y), p) : a;
  }, p.context = function(y) {
    return arguments.length ? (y == null ? l3 = u = null : u = t3(l3 = y), p) : l3;
  }, p;
}
function u1() {
  return c1(Yi$1);
}
const Zr = (t3) => () => t3;
function h1(t3, {
  sourceEvent: e,
  target: n,
  transform: r3,
  dispatch: a
}) {
  Object.defineProperties(this, {
    type: { value: t3, enumerable: true, configurable: true },
    sourceEvent: { value: e, enumerable: true, configurable: true },
    target: { value: n, enumerable: true, configurable: true },
    transform: { value: r3, enumerable: true, configurable: true },
    _: { value: a }
  });
}
function _i(t3) {
  t3.stopImmediatePropagation();
}
function or(t3) {
  t3.preventDefault(), t3.stopImmediatePropagation();
}
function f1(t3) {
  return (!t3.ctrlKey || t3.type === "wheel") && !t3.button;
}
function d1() {
  var t3 = this;
  return t3 instanceof SVGElement ? (t3 = t3.ownerSVGElement || t3, t3.hasAttribute("viewBox") ? (t3 = t3.viewBox.baseVal, [[t3.x, t3.y], [t3.x + t3.width, t3.y + t3.height]]) : [[0, 0], [t3.width.baseVal.value, t3.height.baseVal.value]]) : [[0, 0], [t3.clientWidth, t3.clientHeight]];
}
function zo() {
  return this.__zoom || qi$1;
}
function m1(t3) {
  return -t3.deltaY * (t3.deltaMode === 1 ? 0.05 : t3.deltaMode ? 1 : 2e-3) * (t3.ctrlKey ? 10 : 1);
}
function p1() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function g1(t3, e, n) {
  var r3 = t3.invertX(e[0][0]) - n[0][0], a = t3.invertX(e[1][0]) - n[1][0], l3 = t3.invertY(e[0][1]) - n[0][1], u = t3.invertY(e[1][1]) - n[1][1];
  return t3.translate(
    a > r3 ? (r3 + a) / 2 : Math.min(0, r3) || Math.max(0, a),
    u > l3 ? (l3 + u) / 2 : Math.min(0, l3) || Math.max(0, u)
  );
}
function y1() {
  var t3 = f1, e = d1, n = g1, r3 = m1, a = p1, l3 = [0, 1 / 0], u = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], f = 250, p = i1, y = Vt("start", "zoom", "end"), v, T, _, C = 500, S = 150, N = 0, O = 10;
  function I$1($) {
    $.property("__zoom", zo).on("wheel.zoom", K, { passive: false }).on("mousedown.zoom", le).on("dblclick.zoom", Te).filter(a).on("touchstart.zoom", ue).on("touchmove.zoom", ce).on("touchend.zoom touchcancel.zoom", ye).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  I$1.transform = function($, se, J, ie) {
    var pe = $.selection ? $.selection() : $;
    pe.property("__zoom", zo), $ !== pe ? V($, se, J, ie) : pe.interrupt().each(function() {
      W(this, arguments).event(ie).start().zoom(null, typeof se == "function" ? se.apply(this, arguments) : se).end();
    });
  }, I$1.scaleBy = function($, se, J, ie) {
    I$1.scaleTo($, function() {
      var pe = this.__zoom.k, ke = typeof se == "function" ? se.apply(this, arguments) : se;
      return pe * ke;
    }, J, ie);
  }, I$1.scaleTo = function($, se, J, ie) {
    I$1.transform($, function() {
      var pe = e.apply(this, arguments), ke = this.__zoom, ve = J == null ? j(pe) : typeof J == "function" ? J.apply(this, arguments) : J, Z = ke.invert(ve), q = typeof se == "function" ? se.apply(this, arguments) : se;
      return n(H(F(ke, q), ve, Z), pe, u);
    }, J, ie);
  }, I$1.translateBy = function($, se, J, ie) {
    I$1.transform($, function() {
      return n(this.__zoom.translate(
        typeof se == "function" ? se.apply(this, arguments) : se,
        typeof J == "function" ? J.apply(this, arguments) : J
      ), e.apply(this, arguments), u);
    }, null, ie);
  }, I$1.translateTo = function($, se, J, ie, pe) {
    I$1.transform($, function() {
      var ke = e.apply(this, arguments), ve = this.__zoom, Z = ie == null ? j(ke) : typeof ie == "function" ? ie.apply(this, arguments) : ie;
      return n(qi$1.translate(Z[0], Z[1]).scale(ve.k).translate(
        typeof se == "function" ? -se.apply(this, arguments) : -se,
        typeof J == "function" ? -J.apply(this, arguments) : -J
      ), ke, u);
    }, ie, pe);
  };
  function F($, se) {
    return se = Math.max(l3[0], Math.min(l3[1], se)), se === $.k ? $ : new I(se, $.x, $.y);
  }
  function H($, se, J) {
    var ie = se[0] - J[0] * $.k, pe = se[1] - J[1] * $.k;
    return ie === $.x && pe === $.y ? $ : new I($.k, ie, pe);
  }
  function j($) {
    return [(+$[0][0] + +$[1][0]) / 2, (+$[0][1] + +$[1][1]) / 2];
  }
  function V($, se, J, ie) {
    $.on("start.zoom", function() {
      W(this, arguments).event(ie).start();
    }).on("interrupt.zoom end.zoom", function() {
      W(this, arguments).event(ie).end();
    }).tween("zoom", function() {
      var pe = this, ke = arguments, ve = W(pe, ke).event(ie), Z = e.apply(pe, ke), q = J == null ? j(Z) : typeof J == "function" ? J.apply(pe, ke) : J, ae = Math.max(Z[1][0] - Z[0][0], Z[1][1] - Z[0][1]), we = pe.__zoom, Ge = typeof se == "function" ? se.apply(pe, ke) : se, nt = p(we.invert(q).concat(ae / we.k), Ge.invert(q).concat(ae / Ge.k));
      return function(mt) {
        if (mt === 1)
          mt = Ge;
        else {
          var Et = nt(mt), Wn = ae / Et[2];
          mt = new I(Wn, q[0] - Et[0] * Wn, q[1] - Et[1] * Wn);
        }
        ve.zoom(null, mt);
      };
    });
  }
  function W($, se, J) {
    return !J && $.__zooming || new ee($, se);
  }
  function ee($, se) {
    this.that = $, this.args = se, this.active = 0, this.sourceEvent = null, this.extent = e.apply($, se), this.taps = 0;
  }
  ee.prototype = {
    event: function($) {
      return $ && (this.sourceEvent = $), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function($, se) {
      return this.mouse && $ !== "mouse" && (this.mouse[1] = se.invert(this.mouse[0])), this.touch0 && $ !== "touch" && (this.touch0[1] = se.invert(this.touch0[0])), this.touch1 && $ !== "touch" && (this.touch1[1] = se.invert(this.touch1[0])), this.that.__zoom = se, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function($) {
      var se = Li$1(this.that).datum();
      y.call(
        $,
        this.that,
        new h1($, {
          sourceEvent: this.sourceEvent,
          target: I$1,
          transform: this.that.__zoom,
          dispatch: y
        }),
        se
      );
    }
  };
  function K($, ...se) {
    if (!t3.apply(this, arguments))
      return;
    var J = W(this, se).event($), ie = this.__zoom, pe = Math.max(l3[0], Math.min(l3[1], ie.k * Math.pow(2, r3.apply(this, arguments)))), ke = dn($);
    if (J.wheel)
      (J.mouse[0][0] !== ke[0] || J.mouse[0][1] !== ke[1]) && (J.mouse[1] = ie.invert(J.mouse[0] = ke)), clearTimeout(J.wheel);
    else {
      if (ie.k === pe)
        return;
      J.mouse = [ke, ie.invert(ke)], Er$1(this), J.start();
    }
    or($), J.wheel = setTimeout(ve, S), J.zoom("mouse", n(H(F(ie, pe), J.mouse[0], J.mouse[1]), J.extent, u));
    function ve() {
      J.wheel = null, J.end();
    }
  }
  function le($, ...se) {
    if (_ || !t3.apply(this, arguments))
      return;
    var J = $.currentTarget, ie = W(this, se, true).event($), pe = Li$1($.view).on("mousemove.zoom", q, true).on("mouseup.zoom", ae, true), ke = dn($, J), ve = $.clientX, Z = $.clientY;
    e1($.view), _i($), ie.mouse = [ke, this.__zoom.invert(ke)], Er$1(this), ie.start();
    function q(we) {
      if (or(we), !ie.moved) {
        var Ge = we.clientX - ve, nt = we.clientY - Z;
        ie.moved = Ge * Ge + nt * nt > N;
      }
      ie.event(we).zoom("mouse", n(H(ie.that.__zoom, ie.mouse[0] = dn(we, J), ie.mouse[1]), ie.extent, u));
    }
    function ae(we) {
      pe.on("mousemove.zoom mouseup.zoom", null), t1(we.view, ie.moved), or(we), ie.event(we).end();
    }
  }
  function Te($, ...se) {
    if (t3.apply(this, arguments)) {
      var J = this.__zoom, ie = dn($.changedTouches ? $.changedTouches[0] : $, this), pe = J.invert(ie), ke = J.k * ($.shiftKey ? 0.5 : 2), ve = n(H(F(J, ke), ie, pe), e.apply(this, se), u);
      or($), f > 0 ? Li$1(this).transition().duration(f).call(V, ve, ie, $) : Li$1(this).call(I$1.transform, ve, ie, $);
    }
  }
  function ue($, ...se) {
    if (t3.apply(this, arguments)) {
      var J = $.touches, ie = J.length, pe = W(this, se, $.changedTouches.length === ie).event($), ke, ve, Z, q;
      for (_i($), ve = 0; ve < ie; ++ve)
        Z = J[ve], q = dn(Z, this), q = [q, this.__zoom.invert(q), Z.identifier], pe.touch0 ? !pe.touch1 && pe.touch0[2] !== q[2] && (pe.touch1 = q, pe.taps = 0) : (pe.touch0 = q, ke = true, pe.taps = 1 + !!v);
      v && (v = clearTimeout(v)), ke && (pe.taps < 2 && (T = q[0], v = setTimeout(function() {
        v = null;
      }, C)), Er$1(this), pe.start());
    }
  }
  function ce($, ...se) {
    if (this.__zooming) {
      var J = W(this, se).event($), ie = $.changedTouches, pe = ie.length, ke, ve, Z, q;
      for (or($), ke = 0; ke < pe; ++ke)
        ve = ie[ke], Z = dn(ve, this), J.touch0 && J.touch0[2] === ve.identifier ? J.touch0[0] = Z : J.touch1 && J.touch1[2] === ve.identifier && (J.touch1[0] = Z);
      if (ve = J.that.__zoom, J.touch1) {
        var ae = J.touch0[0], we = J.touch0[1], Ge = J.touch1[0], nt = J.touch1[1], mt = (mt = Ge[0] - ae[0]) * mt + (mt = Ge[1] - ae[1]) * mt, Et = (Et = nt[0] - we[0]) * Et + (Et = nt[1] - we[1]) * Et;
        ve = F(ve, Math.sqrt(mt / Et)), Z = [(ae[0] + Ge[0]) / 2, (ae[1] + Ge[1]) / 2], q = [(we[0] + nt[0]) / 2, (we[1] + nt[1]) / 2];
      } else if (J.touch0)
        Z = J.touch0[0], q = J.touch0[1];
      else
        return;
      J.zoom("touch", n(H(ve, Z, q), J.extent, u));
    }
  }
  function ye($, ...se) {
    if (this.__zooming) {
      var J = W(this, se).event($), ie = $.changedTouches, pe = ie.length, ke, ve;
      for (_i($), _ && clearTimeout(_), _ = setTimeout(function() {
        _ = null;
      }, C), ke = 0; ke < pe; ++ke)
        ve = ie[ke], J.touch0 && J.touch0[2] === ve.identifier ? delete J.touch0 : J.touch1 && J.touch1[2] === ve.identifier && delete J.touch1;
      if (J.touch1 && !J.touch0 && (J.touch0 = J.touch1, delete J.touch1), J.touch0)
        J.touch0[1] = this.__zoom.invert(J.touch0[0]);
      else if (J.end(), J.taps === 2 && (ve = dn(ve, this), Math.hypot(T[0] - ve[0], T[1] - ve[1]) < O)) {
        var Z = Li$1(this).on("dblclick.zoom");
        Z && Z.apply(this, arguments);
      }
    }
  }
  return I$1.wheelDelta = function($) {
    return arguments.length ? (r3 = typeof $ == "function" ? $ : Zr(+$), I$1) : r3;
  }, I$1.filter = function($) {
    return arguments.length ? (t3 = typeof $ == "function" ? $ : Zr(!!$), I$1) : t3;
  }, I$1.touchable = function($) {
    return arguments.length ? (a = typeof $ == "function" ? $ : Zr(!!$), I$1) : a;
  }, I$1.extent = function($) {
    return arguments.length ? (e = typeof $ == "function" ? $ : Zr([[+$[0][0], +$[0][1]], [+$[1][0], +$[1][1]]]), I$1) : e;
  }, I$1.scaleExtent = function($) {
    return arguments.length ? (l3[0] = +$[0], l3[1] = +$[1], I$1) : [l3[0], l3[1]];
  }, I$1.translateExtent = function($) {
    return arguments.length ? (u[0][0] = +$[0][0], u[1][0] = +$[1][0], u[0][1] = +$[0][1], u[1][1] = +$[1][1], I$1) : [[u[0][0], u[0][1]], [u[1][0], u[1][1]]];
  }, I$1.constrain = function($) {
    return arguments.length ? (n = $, I$1) : n;
  }, I$1.duration = function($) {
    return arguments.length ? (f = +$, I$1) : f;
  }, I$1.interpolate = function($) {
    return arguments.length ? (p = $, I$1) : p;
  }, I$1.on = function() {
    var $ = y.on.apply(y, arguments);
    return $ === y ? I$1 : $;
  }, I$1.clickDistance = function($) {
    return arguments.length ? (N = ($ = +$) * $, I$1) : Math.sqrt(N);
  }, I$1.tapDistance = function($) {
    return arguments.length ? (O = +$, I$1) : O;
  }, I$1;
}
const b1 = "npm2url/dist/index.cjs", w1 = {
  jsdelivr: (t3) => `https://cdn.jsdelivr.net/npm/${t3}`,
  unpkg: (t3) => `https://unpkg.com/${t3}`
};
async function x1(t3, e) {
  const n = await fetch(t3, {
    signal: e
  });
  if (!n.ok)
    throw n;
  await n.text();
}
class k1 {
  constructor() {
    this.providers = { ...w1 }, this.provider = "jsdelivr";
  }
  /**
   * Get the fastest provider name.
   * If none of the providers returns a valid response within `timeout`, an error will be thrown.
   */
  async getFastestProvider(e = 5e3, n = b1) {
    const r3 = new AbortController();
    let a = 0;
    try {
      return await new Promise((l3, u) => {
        Promise.all(
          Object.entries(this.providers).map(async ([f, p]) => {
            try {
              await x1(p(n), r3.signal), l3(f);
            } catch {
            }
          })
        ).then(() => u(new Error("All providers failed"))), a = setTimeout(u, e, new Error("Timed out"));
      });
    } finally {
      r3.abort(), clearTimeout(a);
    }
  }
  /**
   * Set the current provider to the fastest provider found by `getFastestProvider`.
   */
  async findFastestProvider(e, n) {
    return this.provider = await this.getFastestProvider(e, n), this.provider;
  }
  setProvider(e, n) {
    n ? this.providers[e] = n : delete this.providers[e];
  }
  getFullUrl(e, n = this.provider) {
    if (e.includes("://"))
      return e;
    const r3 = this.providers[n];
    if (!r3)
      throw new Error(`Provider ${n} not found`);
    return r3(e);
  }
}
class ur {
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
let Oo = 0;
function S1() {
  return Oo += 1, `mm-${v1}-${Oo}`;
}
function zn() {
}
function hr(t3, e) {
  const n = (r3, a) => e(
    r3,
    () => {
      var l3;
      return (l3 = r3.children) == null ? void 0 : l3.map((u) => n(u, r3));
    },
    a
  );
  return n(t3);
}
function A1(t3, ...e) {
  const n = (t3 || "").split(" ").filter(Boolean);
  return e.forEach((r3) => {
    r3 && n.indexOf(r3) < 0 && n.push(r3);
  }), n.join(" ");
}
function Bo(t3, e) {
  return (...n) => e(t3, ...n);
}
function T1() {
  const t3 = {};
  return t3.promise = new Promise((e, n) => {
    t3.resolve = e, t3.reject = n;
  }), t3;
}
function N1(t3) {
  const e = {};
  return function(...r3) {
    const a = `${r3[0]}`;
    let l3 = e[a];
    return l3 || (l3 = {
      value: t3(...r3)
    }, e[a] = l3), l3.value;
  };
}
function M1(t3, e) {
  const n = {
    timer: 0
  };
  function r3() {
    n.timer && (window.clearTimeout(n.timer), n.timer = 0);
  }
  function a() {
    r3(), n.args && (n.result = t3(...n.args));
  }
  return function(...u) {
    return r3(), n.args = u, n.timer = window.setTimeout(a, e), n.result;
  };
}
/*! @gera2ld/jsx-dom v2.2.2 | ISC License */
const xl = 1, kl = 2, E1 = "http://www.w3.org/2000/svg", Ci = "http://www.w3.org/1999/xlink", _1 = {
  show: Ci,
  actuate: Ci,
  href: Ci
}, C1 = (t3) => typeof t3 == "string" || typeof t3 == "number", I1 = (t3) => (t3 == null ? void 0 : t3.vtype) === xl, z1 = (t3) => (t3 == null ? void 0 : t3.vtype) === kl;
function O1(t3, e, ...n) {
  return e = Object.assign({}, e, {
    children: n.length === 1 ? n[0] : n
  }), B1(t3, e);
}
function B1(t3, e) {
  let n;
  if (typeof t3 == "string")
    n = xl;
  else if (typeof t3 == "function")
    n = kl;
  else
    throw new Error("Invalid VNode type");
  return {
    vtype: n,
    type: t3,
    props: e
  };
}
function D1(t3) {
  return t3.children;
}
const L1 = {
  isSvg: false
};
function Do(t3, e) {
  Array.isArray(e) || (e = [e]), e = e.filter(Boolean), e.length && t3.append(...e);
}
function q1(t3, e, n) {
  for (const r3 in e)
    if (!(r3 === "key" || r3 === "children" || r3 === "ref"))
      if (r3 === "dangerouslySetInnerHTML")
        t3.innerHTML = e[r3].__html;
      else if (r3 === "innerHTML" || r3 === "textContent" || r3 === "innerText" || r3 === "value" && ["textarea", "select"].includes(t3.tagName)) {
        const a = e[r3];
        a != null && (t3[r3] = a);
      } else
        r3.startsWith("on") ? t3[r3.toLowerCase()] = e[r3] : $1(t3, r3, e[r3], n.isSvg);
}
const R1 = {
  className: "class",
  labelFor: "for"
};
function $1(t3, e, n, r3) {
  if (e = R1[e] || e, n === true)
    t3.setAttribute(e, "");
  else if (n === false)
    t3.removeAttribute(e);
  else {
    const a = r3 ? _1[e] : void 0;
    a !== void 0 ? t3.setAttributeNS(a, e, n) : t3.setAttribute(e, n);
  }
}
function P1(t3) {
  return t3.reduce((e, n) => e.concat(n), []);
}
function Qi(t3, e) {
  return Array.isArray(t3) ? P1(t3.map((n) => Qi(n, e))) : g0(t3, e);
}
function g0(t3, e = L1) {
  if (t3 == null || typeof t3 == "boolean")
    return null;
  if (t3 instanceof Node)
    return t3;
  if (z1(t3)) {
    const {
      type: n,
      props: r3
    } = t3;
    if (n === D1) {
      const l3 = document.createDocumentFragment();
      if (r3.children) {
        const u = Qi(r3.children, e);
        Do(l3, u);
      }
      return l3;
    }
    const a = n(r3);
    return g0(a, e);
  }
  if (C1(t3))
    return document.createTextNode(`${t3}`);
  if (I1(t3)) {
    let n;
    const {
      type: r3,
      props: a
    } = t3;
    if (!e.isSvg && r3 === "svg" && (e = Object.assign({}, e, {
      isSvg: true
    })), e.isSvg ? n = document.createElementNS(E1, r3) : n = document.createElement(r3), q1(n, a, e), a.children) {
      let u = e;
      e.isSvg && r3 === "foreignObject" && (u = Object.assign({}, u, {
        isSvg: false
      }));
      const f = Qi(a.children, u);
      f != null && Do(n, f);
    }
    const {
      ref: l3
    } = a;
    return typeof l3 == "function" && l3(n), n;
  }
  throw new Error("mount: Invalid Vnode!");
}
function F1(t3) {
  return g0(t3);
}
function vl(...t3) {
  return F1(O1(...t3));
}
const H1 = N1((t3) => {
  document.head.append(
    vl("link", {
      rel: "preload",
      as: "script",
      href: t3
    })
  );
}), Lo = {};
async function j1(t3, e) {
  var n;
  const r3 = t3.type === "script" && ((n = t3.data) == null ? void 0 : n.src) || "";
  if (t3.loaded || (t3.loaded = Lo[r3]), !t3.loaded) {
    const a = T1();
    if (t3.loaded = a.promise, t3.type === "script" && (document.head.append(
      vl("script", {
        ...t3.data,
        onLoad: () => a.resolve(),
        onError: a.reject
      })
    ), r3 ? Lo[r3] = t3.loaded : a.resolve()), t3.type === "iife") {
      const { fn: l3, getParams: u } = t3.data;
      l3(...(u == null ? void 0 : u(e)) || []), a.resolve();
    }
  }
  await t3.loaded;
}
async function Sl(t3, e) {
  t3.forEach((n) => {
    var r3;
    n.type === "script" && ((r3 = n.data) != null && r3.src) && H1(n.data.src);
  }), e = {
    getMarkmap: () => window.markmap,
    ...e
  };
  for (const n of t3)
    await j1(n, e);
}
function y0(t3) {
  return {
    type: "script",
    data: {
      src: t3
    }
  };
}
function Al(t3) {
  return {
    type: "stylesheet",
    data: {
      href: t3
    }
  };
}
const Tl = typeof navigator < "u" && navigator.userAgent.includes("Macintosh"), V1 = h(a1), U1 = (t3 = 1, e = 3, n = 2) => (r3) => t3 + e / n ** r3.state.depth, G1 = {
  autoFit: false,
  duration: 500,
  embedGlobalCSS: true,
  fitRatio: 0.95,
  maxInitialScale: 2,
  scrollForPan: Tl,
  initialExpandLevel: -1,
  zoom: true,
  pan: true,
  toggleRecursively: false,
  color: (t3) => {
    var e;
    return V1(`${((e = t3.state) == null ? void 0 : e.path) || ""}`);
  },
  lineWidth: U1(),
  maxWidth: 0,
  nodeMinHeight: 16,
  paddingX: 8,
  spacingHorizontal: 80,
  spacingVertical: 5
};
function K1(t3) {
  let e = 0;
  for (let n = 0; n < t3.length; n++)
    e = (e << 5) - e + t3.charCodeAt(n) | 0;
  return (e >>> 0).toString(36);
}
function bt(t3) {
  if (typeof t3 == "string") {
    const n = t3;
    t3 = (r3) => r3.matches(n);
  }
  const e = t3;
  return function() {
    let n = Array.from(this.childNodes);
    return e && (n = n.filter((r3) => e(r3))), n;
  };
}
function X1(t3) {
  var e = 0, n = t3.children, r3 = n && n.length;
  if (!r3)
    e = 1;
  else
    for (; --r3 >= 0; )
      e += n[r3].value;
  t3.value = e;
}
function W1() {
  return this.eachAfter(X1);
}
function Y1(t3) {
  var e = this, n, r3 = [e], a, l3, u;
  do
    for (n = r3.reverse(), r3 = []; e = n.pop(); )
      if (t3(e), a = e.children, a)
        for (l3 = 0, u = a.length; l3 < u; ++l3)
          r3.push(a[l3]);
  while (r3.length);
  return this;
}
function J1(t3) {
  for (var e = this, n = [e], r3, a; e = n.pop(); )
    if (t3(e), r3 = e.children, r3)
      for (a = r3.length - 1; a >= 0; --a)
        n.push(r3[a]);
  return this;
}
function Q1(t3) {
  for (var e = this, n = [e], r3 = [], a, l3, u; e = n.pop(); )
    if (r3.push(e), a = e.children, a)
      for (l3 = 0, u = a.length; l3 < u; ++l3)
        n.push(a[l3]);
  for (; e = r3.pop(); )
    t3(e);
  return this;
}
function Z1(t3) {
  return this.eachAfter(function(e) {
    for (var n = +t3(e.data) || 0, r3 = e.children, a = r3 && r3.length; --a >= 0; )
      n += r3[a].value;
    e.value = n;
  });
}
function ef(t3) {
  return this.eachBefore(function(e) {
    e.children && e.children.sort(t3);
  });
}
function tf(t3) {
  for (var e = this, n = nf(e, t3), r3 = [e]; e !== n; )
    e = e.parent, r3.push(e);
  for (var a = r3.length; t3 !== n; )
    r3.splice(a, 0, t3), t3 = t3.parent;
  return r3;
}
function nf(t3, e) {
  if (t3 === e)
    return t3;
  var n = t3.ancestors(), r3 = e.ancestors(), a = null;
  for (t3 = n.pop(), e = r3.pop(); t3 === e; )
    a = t3, t3 = n.pop(), e = r3.pop();
  return a;
}
function rf() {
  for (var t3 = this, e = [t3]; t3 = t3.parent; )
    e.push(t3);
  return e;
}
function sf() {
  var t3 = [];
  return this.each(function(e) {
    t3.push(e);
  }), t3;
}
function af() {
  var t3 = [];
  return this.eachBefore(function(e) {
    e.children || t3.push(e);
  }), t3;
}
function of() {
  var t3 = this, e = [];
  return t3.each(function(n) {
    n !== t3 && e.push({ source: n.parent, target: n });
  }), e;
}
function b0(t3, e) {
  var n = new ds(t3), r3 = +t3.value && (n.value = t3.value), a, l3 = [n], u, f, p, y;
  for (e == null && (e = cf); a = l3.pop(); )
    if (r3 && (a.value = +a.data.value), (f = e(a.data)) && (y = f.length))
      for (a.children = new Array(y), p = y - 1; p >= 0; --p)
        l3.push(u = a.children[p] = new ds(f[p])), u.parent = a, u.depth = a.depth + 1;
  return n.eachBefore(hf);
}
function lf() {
  return b0(this).eachBefore(uf);
}
function cf(t3) {
  return t3.children;
}
function uf(t3) {
  t3.data = t3.data.data;
}
function hf(t3) {
  var e = 0;
  do
    t3.height = e;
  while ((t3 = t3.parent) && t3.height < ++e);
}
function ds(t3) {
  this.data = t3, this.depth = this.height = 0, this.parent = null;
}
ds.prototype = b0.prototype = {
  constructor: ds,
  count: W1,
  each: Y1,
  eachAfter: Q1,
  eachBefore: J1,
  sum: Z1,
  sort: ef,
  path: tf,
  ancestors: rf,
  descendants: sf,
  leaves: af,
  links: of,
  copy: lf
};
const ff = "2.1.2", df = {
  version: ff
}, { version: mf } = df, pf = Object.freeze({
  children: (t3) => t3.children,
  nodeSize: (t3) => t3.data.size,
  spacing: 0
});
function Ml(t3) {
  const e = Object.assign({}, pf, t3);
  function n(f) {
    const p = e[f];
    return typeof p == "function" ? p : () => p;
  }
  function r3(f) {
    const p = u(l3(), f, (y) => y.children);
    return p.update(), p.data;
  }
  function a() {
    const f = n("nodeSize"), p = n("spacing");
    return class Nl extends b0.prototype.constructor {
      constructor(v) {
        super(v);
      }
      copy() {
        const v = u(this.constructor, this, (T) => T.children);
        return v.each((T) => T.data = T.data.data), v;
      }
      get size() {
        return f(this);
      }
      spacing(v) {
        return p(this, v);
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
        const v = this.ancestors();
        return v[v.length - 1];
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
        return (this.children || []).reduce(
          (v, T) => Nl.maxExtents(v, T.extents),
          this.nodeExtents
        );
      }
      get nodeExtents() {
        return {
          top: this.top,
          bottom: this.bottom,
          left: this.left,
          right: this.right
        };
      }
      static maxExtents(v, T) {
        return {
          top: Math.min(v.top, T.top),
          bottom: Math.max(v.bottom, T.bottom),
          left: Math.min(v.left, T.left),
          right: Math.max(v.right, T.right)
        };
      }
    };
  }
  function l3() {
    const f = a(), p = n("nodeSize"), y = n("spacing");
    return class extends f {
      constructor(v) {
        super(v), Object.assign(this, {
          x: 0,
          y: 0,
          relX: 0,
          prelim: 0,
          shift: 0,
          change: 0,
          lExt: this,
          lExtRelX: 0,
          lThr: null,
          rExt: this,
          rExtRelX: 0,
          rThr: null
        });
      }
      get size() {
        return p(this.data);
      }
      spacing(v) {
        return y(this.data, v.data);
      }
      get x() {
        return this.data.x;
      }
      set x(v) {
        this.data.x = v;
      }
      get y() {
        return this.data.y;
      }
      set y(v) {
        this.data.y = v;
      }
      update() {
        return El(this), _l(this), this;
      }
    };
  }
  function u(f, p, y) {
    const v = (T, _) => {
      const C = new f(T);
      Object.assign(C, {
        parent: _,
        depth: _ === null ? 0 : _.depth + 1,
        height: 0,
        length: 1
      });
      const S = y(T) || [];
      return C.children = S.length === 0 ? null : S.map((N) => v(N, C)), C.children && Object.assign(C, C.children.reduce(
        (N, O) => ({
          height: Math.max(N.height, O.height + 1),
          length: N.length + O.length
        }),
        C
      )), C;
    };
    return v(p, null);
  }
  return Object.assign(r3, {
    nodeSize(f) {
      return arguments.length ? (e.nodeSize = f, r3) : e.nodeSize;
    },
    spacing(f) {
      return arguments.length ? (e.spacing = f, r3) : e.spacing;
    },
    children(f) {
      return arguments.length ? (e.children = f, r3) : e.children;
    },
    hierarchy(f, p) {
      const y = typeof p > "u" ? e.children : p;
      return u(a(), f, y);
    },
    dump(f) {
      const p = n("nodeSize"), y = (v) => (T) => {
        const _ = v + "  ", C = v + "    ", { x: S, y: N } = T, O = p(T), I3 = T.children || [], F = I3.length === 0 ? " " : `,${_}children: [${C}${I3.map(y(C)).join(C)}${_}],${v}`;
        return `{ size: [${O.join(", ")}],${_}x: ${S}, y: ${N}${F}},`;
      };
      return y(`
`)(f);
    }
  }), r3;
}
Ml.version = mf;
const El = (t3, e = 0) => (t3.y = e, (t3.children || []).reduce((n, r3) => {
  const [a, l3] = n;
  El(r3, t3.y + t3.ySize);
  const u = (a === 0 ? r3.lExt : r3.rExt).bottom;
  a !== 0 && yf(t3, a, l3);
  const f = Tf(u, a, l3);
  return [a + 1, f];
}, [0, null]), gf(t3), Af(t3), t3), _l = (t3, e, n) => {
  typeof e > "u" && (e = -t3.relX - t3.prelim, n = 0);
  const r3 = e + t3.relX;
  return t3.relX = r3 + t3.prelim - n, t3.prelim = 0, t3.x = n + t3.relX, (t3.children || []).forEach((a) => _l(a, r3, t3.x)), t3;
}, gf = (t3) => {
  (t3.children || []).reduce((e, n) => {
    const [r3, a] = e, l3 = r3 + n.shift, u = a + l3 + n.change;
    return n.relX += u, [l3, u];
  }, [0, 0]);
}, yf = (t3, e, n) => {
  const r3 = t3.children[e - 1], a = t3.children[e];
  let l3 = r3, u = r3.relX, f = a, p = a.relX, y = true;
  for (; l3 && f; ) {
    l3.bottom > n.lowY && (n = n.next);
    const v = u + l3.prelim - (p + f.prelim) + l3.xSize / 2 + f.xSize / 2 + l3.spacing(f);
    (v > 0 || v < 0 && y) && (p += v, bf(a, v), wf(t3, e, n.index, v)), y = false;
    const T = l3.bottom, _ = f.bottom;
    T <= _ && (l3 = kf(l3), l3 && (u += l3.relX)), T >= _ && (f = xf(f), f && (p += f.relX));
  }
  !l3 && f ? vf(t3, e, f, p) : l3 && !f && Sf(t3, e, l3, u);
}, bf = (t3, e) => {
  t3.relX += e, t3.lExtRelX += e, t3.rExtRelX += e;
}, wf = (t3, e, n, r3) => {
  const a = t3.children[e], l3 = e - n;
  if (l3 > 1) {
    const u = r3 / l3;
    t3.children[n + 1].shift += u, a.shift -= u, a.change -= r3 - u;
  }
}, xf = (t3) => t3.hasChildren ? t3.firstChild : t3.lThr, kf = (t3) => t3.hasChildren ? t3.lastChild : t3.rThr, vf = (t3, e, n, r3) => {
  const a = t3.firstChild, l3 = a.lExt, u = t3.children[e];
  l3.lThr = n;
  const f = r3 - n.relX - a.lExtRelX;
  l3.relX += f, l3.prelim -= f, a.lExt = u.lExt, a.lExtRelX = u.lExtRelX;
}, Sf = (t3, e, n, r3) => {
  const a = t3.children[e], l3 = a.rExt, u = t3.children[e - 1];
  l3.rThr = n;
  const f = r3 - n.relX - a.rExtRelX;
  l3.relX += f, l3.prelim -= f, a.rExt = u.rExt, a.rExtRelX = u.rExtRelX;
}, Af = (t3) => {
  if (t3.hasChildren) {
    const e = t3.firstChild, n = t3.lastChild, r3 = (e.prelim + e.relX - e.xSize / 2 + n.relX + n.prelim + n.xSize / 2) / 2;
    Object.assign(t3, {
      prelim: r3,
      lExt: e.lExt,
      lExtRelX: e.lExtRelX,
      rExt: n.rExt,
      rExtRelX: n.rExtRelX
    });
  }
}, Tf = (t3, e, n) => {
  for (; n !== null && t3 >= n.lowY; )
    n = n.next;
  return {
    lowY: t3,
    index: e,
    next: n
  };
}, Nf = ".markmap{--markmap-max-width: 9999px;--markmap-a-color: #0097e6;--markmap-a-hover-color: #00a8ff;--markmap-code-bg: #f0f0f0;--markmap-code-color: #555;--markmap-highlight-bg: #ffeaa7;--markmap-table-border: 1px solid currentColor;--markmap-font: 300 16px/20px sans-serif;--markmap-circle-open-bg: #fff;--markmap-text-color: #333;--markmap-highlight-node-bg: #ff02;font:var(--markmap-font);color:var(--markmap-text-color)}.markmap-link{fill:none}.markmap-node>circle{cursor:pointer}.markmap-foreign{display:inline-block}.markmap-foreign p{margin:0}.markmap-foreign a{color:var(--markmap-a-color)}.markmap-foreign a:hover{color:var(--markmap-a-hover-color)}.markmap-foreign code{padding:.25em;font-size:calc(1em - 2px);color:var(--markmap-code-color);background-color:var(--markmap-code-bg);border-radius:2px}.markmap-foreign pre{margin:0}.markmap-foreign pre>code{display:block}.markmap-foreign del{text-decoration:line-through}.markmap-foreign em{font-style:italic}.markmap-foreign strong{font-weight:700}.markmap-foreign mark{background:var(--markmap-highlight-bg)}.markmap-foreign table,.markmap-foreign th,.markmap-foreign td{border-collapse:collapse;border:var(--markmap-table-border)}.markmap-foreign img{display:inline-block}.markmap-foreign svg{fill:currentColor}.markmap-foreign>div{width:var(--markmap-max-width);text-align:left}.markmap-foreign>div>div{display:inline-block}.markmap-highlight rect{fill:var(--markmap-highlight-node-bg)}.markmap-dark .markmap{--markmap-code-bg: #1a1b26;--markmap-code-color: #ddd;--markmap-circle-open-bg: #444;--markmap-text-color: #eee}", Ii = "g.markmap-node", Mf = "path.markmap-link", Ef = "g.markmap-highlight", zi = u1();
function qo(t3, e) {
  const n = Qh(t3, e);
  return t3[n];
}
function Oi(t3) {
  t3.stopPropagation();
}
const _f = new ur();
class w0 {
  constructor(e, n) {
    this.options = { ...G1 }, this._disposeList = [], this.handleZoom = (r3) => {
      const { transform: a } = r3;
      this.g.attr("transform", a);
    }, this.handlePan = (r3) => {
      r3.preventDefault();
      const a = Fi$1(this.svg.node()), l3 = a.translate(
        -r3.deltaX / a.k,
        -r3.deltaY / a.k
      );
      this.svg.call(this.zoom.transform, l3);
    }, this.handleClick = (r3, a) => {
      let l3 = this.options.toggleRecursively;
      (Tl ? r3.metaKey : r3.ctrlKey) && (l3 = !l3), this.toggleNode(a, l3);
    }, this.ensureView = this.ensureVisible, this.svg = e.datum ? e : Li$1(e), this.styleNode = this.svg.append("style"), this.zoom = y1().filter((r3) => this.options.scrollForPan && r3.type === "wheel" ? r3.ctrlKey && !r3.button : (!r3.ctrlKey || r3.type === "wheel") && !r3.button).on("zoom", this.handleZoom), this.setOptions(n), this.state = {
      id: this.options.id || this.svg.attr("id") || S1(),
      rect: { x1: 0, y1: 0, x2: 0, y2: 0 }
    }, this.g = this.svg.append("g"), this.g.append("g").attr("class", "markmap-highlight"), this._observer = new ResizeObserver(
      M1(() => {
        this.renderData();
      }, 100)
    ), this._disposeList.push(
      _f.tap(() => {
        this.setData();
      }),
      () => this._observer.disconnect()
    );
  }
  getStyleContent() {
    const { style: e } = this.options, { id: n } = this.state, r3 = typeof e == "function" ? e(n) : "";
    return [this.options.embedGlobalCSS && Nf, r3].filter(Boolean).join(`
`);
  }
  updateStyle() {
    this.svg.attr(
      "class",
      A1(this.svg.attr("class"), "markmap", this.state.id)
    );
    const e = this.getStyleContent();
    this.styleNode.text(e);
  }
  async toggleNode(e, n = false) {
    var r3, a;
    const l3 = (r3 = e.payload) != null && r3.fold ? 0 : 1;
    n ? hr(e, (u, f) => {
      u.payload = {
        ...u.payload,
        fold: l3
      }, f();
    }) : e.payload = {
      ...e.payload,
      fold: (a = e.payload) != null && a.fold ? 0 : 1
    }, await this.renderData(e);
  }
  _initializeData(e) {
    let n = 0;
    const { color: r3, initialExpandLevel: a } = this.options;
    let l3 = 0, u = 0;
    return hr(e, (f, p, y) => {
      var v, T, _, C;
      u += 1, f.children = (v = f.children) == null ? void 0 : v.map((N) => ({ ...N })), n += 1, f.state = {
        ...f.state,
        depth: u,
        id: n,
        rect: {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        },
        size: [0, 0]
      }, f.state.key = [(T = y == null ? void 0 : y.state) == null ? void 0 : T.id, f.state.id].filter(Boolean).join(".") + K1(f.content), f.state.path = [(_ = y == null ? void 0 : y.state) == null ? void 0 : _.path, f.state.id].filter(Boolean).join("."), r3(f);
      const S = ((C = f.payload) == null ? void 0 : C.fold) === 2;
      S ? l3 += 1 : (l3 || a >= 0 && f.state.depth >= a) && (f.payload = { ...f.payload, fold: 1 }), p(), S && (l3 -= 1), u -= 1;
    }), e;
  }
  _relayout() {
    if (!this.state.data)
      return;
    this.g.selectAll(bt(Ii)).selectAll(
      bt("foreignObject")
    ).each(function(p) {
      var y;
      const v = (y = this.firstChild) == null ? void 0 : y.firstChild, T = [v.scrollWidth, v.scrollHeight];
      p.state.size = T;
    });
    const { lineWidth: e, paddingX: n, spacingHorizontal: r3, spacingVertical: a } = this.options, l$1 = Ml({}).children((p) => {
      var y;
      if (!((y = p.payload) != null && y.fold))
        return p.children;
    }).nodeSize((p) => {
      const [y, v] = p.data.state.size;
      return [v, y + (y ? n * 2 : 0) + r3];
    }).spacing((p, y) => (p.parent === y.parent ? a : a * 2) + e(p.data)), u = l$1.hierarchy(this.state.data);
    l$1(u);
    const f = u.descendants();
    f.forEach((p) => {
      const y = p.data;
      y.state.rect = {
        x: p.y,
        y: p.x - p.xSize / 2,
        width: p.ySize - r3,
        height: p.xSize
      };
    }), this.state.rect = {
      x1: t(f, (p) => p.data.state.rect.x) || 0,
      y1: t(f, (p) => p.data.state.rect.y) || 0,
      x2: l(
        f,
        (p) => p.data.state.rect.x + p.data.state.rect.width
      ) || 0,
      y2: l(
        f,
        (p) => p.data.state.rect.y + p.data.state.rect.height
      ) || 0
    };
  }
  setOptions(e) {
    this.options = {
      ...this.options,
      ...e
    }, this.options.zoom ? this.svg.call(this.zoom) : this.svg.on(".zoom", null), this.options.pan ? this.svg.on("wheel", this.handlePan) : this.svg.on("wheel", null);
  }
  async setData(e, n) {
    n && this.setOptions(n), e && (this.state.data = this._initializeData(e)), this.state.data && (this.updateStyle(), await this.renderData());
  }
  async setHighlight(e) {
    this.state.highlight = e || void 0, await this.renderData();
  }
  _getHighlightRect(e) {
    const n = this.svg.node(), r3 = 4 / Fi$1(n).k, a = {
      ...e.state.rect
    };
    return a.x -= r3, a.y -= r3, a.width += 2 * r3, a.height += 2 * r3, a;
  }
  async renderData(e) {
    const { paddingX: n, autoFit: r3, color: a, maxWidth: l3, lineWidth: u } = this.options, f = this.state.data;
    if (!f)
      return;
    const p = {}, y = {}, v = [];
    hr(f, (q, ae, we) => {
      var Ge;
      (Ge = q.payload) != null && Ge.fold || ae(), p[q.state.id] = q, we && (y[q.state.id] = we.state.id), v.push(q);
    });
    const T = {}, _ = {}, C = (q) => {
      !q || T[q.state.id] || hr(q, (ae, we) => {
        T[ae.state.id] = q.state.id, we();
      });
    }, S = (q) => _[T[q.state.id]] || f.state.rect, N = (q) => (p[T[q.state.id]] || f).state.rect;
    _[f.state.id] = f.state.rect, e && C(e);
    let { highlight: O } = this.state;
    O && !p[O.state.id] && (O = void 0);
    let I3 = this.g.selectAll(bt(Ef)).selectAll(bt("rect")).data(O ? [this._getHighlightRect(O)] : []).join("rect").attr("x", (q) => q.x).attr("y", (q) => q.y).attr("width", (q) => q.width).attr("height", (q) => q.height);
    const F = this.g.selectAll(bt(Ii)).each((q) => {
      _[q.state.id] = q.state.rect;
    }).data(v, (q) => q.state.key), H = F.enter().append("g").attr("data-depth", (q) => q.state.depth).attr("data-path", (q) => q.state.path).each((q) => {
      C(p[y[q.state.id]]);
    }), j = F.exit().each((q) => {
      C(p[y[q.state.id]]);
    }), V = F.merge(H).attr(
      "class",
      (q) => {
        var ae;
        return ["markmap-node", ((ae = q.payload) == null ? void 0 : ae.fold) && "markmap-fold"].filter(Boolean).join(" ");
      }
    ), W = V.selectAll(bt("line")).data(
      (q) => [q],
      (q) => q.state.key
    ), ee = W.enter().append("line").attr("stroke", (q) => a(q)).attr("stroke-width", 0), K = W.merge(ee), le = V.selectAll(bt("circle")).data(
      (q) => {
        var ae;
        return (ae = q.children) != null && ae.length ? [q] : [];
      },
      (q) => q.state.key
    ), Te = le.enter().append("circle").attr("stroke-width", 0).attr("r", 0).on("click", (q, ae) => this.handleClick(q, ae)).on("mousedown", Oi).merge(le).attr("stroke", (q) => a(q)).attr(
      "fill",
      (q) => {
        var ae;
        return (ae = q.payload) != null && ae.fold && q.children ? a(q) : "var(--markmap-circle-open-bg)";
      }
    ), ue = this._observer, ce = V.selectAll(bt("foreignObject")).data(
      (q) => [q],
      (q) => q.state.key
    ), ye = ce.enter().append("foreignObject").attr("class", "markmap-foreign").attr("x", n).attr("y", 0).style("opacity", 0).on("mousedown", Oi).on("dblclick", Oi);
    ye.append("xhtml:div").append("xhtml:div").html((q) => q.content).attr("xmlns", "http://www.w3.org/1999/xhtml"), ye.each(function() {
      var q;
      const ae = (q = this.firstChild) == null ? void 0 : q.firstChild;
      ue.observe(ae);
    });
    const $ = j.selectAll(
      bt("foreignObject")
    );
    $.each(function() {
      var q;
      const ae = (q = this.firstChild) == null ? void 0 : q.firstChild;
      ue.unobserve(ae);
    });
    const se = ye.merge(ce), J = v.flatMap(
      (q) => {
        var ae;
        return (ae = q.payload) != null && ae.fold ? [] : q.children.map((we) => ({ source: q, target: we }));
      }
    ), ie = this.g.selectAll(bt(Mf)).data(J, (q) => q.target.state.key), pe = ie.exit(), ke = ie.enter().insert("path", "g").attr("class", "markmap-link").attr("data-depth", (q) => q.target.state.depth).attr("data-path", (q) => q.target.state.path).attr("d", (q) => {
      const ae = S(q.target), we = [
        ae.x + ae.width,
        ae.y + ae.height
      ];
      return zi({ source: we, target: we });
    }).attr("stroke-width", 0).merge(ie);
    this.svg.style(
      "--markmap-max-width",
      l3 ? `${l3}px` : null
    ), await new Promise(requestAnimationFrame), this._relayout(), I3 = I3.data(O ? [this._getHighlightRect(O)] : []).join("rect"), this.transition(I3).attr("x", (q) => q.x).attr("y", (q) => q.y).attr("width", (q) => q.width).attr("height", (q) => q.height), H.attr("transform", (q) => {
      const ae = S(q);
      return `translate(${ae.x + ae.width - q.state.rect.width},${ae.y + ae.height - q.state.rect.height})`;
    }), this.transition(j).attr("transform", (q) => {
      const ae = N(q), we = ae.x + ae.width - q.state.rect.width, Ge = ae.y + ae.height - q.state.rect.height;
      return `translate(${we},${Ge})`;
    }).remove(), this.transition(V).attr(
      "transform",
      (q) => `translate(${q.state.rect.x},${q.state.rect.y})`
    );
    const ve = j.selectAll(
      bt("line")
    );
    this.transition(ve).attr("x1", (q) => q.state.rect.width).attr("stroke-width", 0), ee.attr("x1", (q) => q.state.rect.width).attr("x2", (q) => q.state.rect.width), K.attr("y1", (q) => q.state.rect.height + u(q) / 2).attr("y2", (q) => q.state.rect.height + u(q) / 2), this.transition(K).attr("x1", -1).attr("x2", (q) => q.state.rect.width + 2).attr("stroke", (q) => a(q)).attr("stroke-width", u);
    const Z = j.selectAll(
      bt("circle")
    );
    this.transition(Z).attr("r", 0).attr("stroke-width", 0), Te.attr("cx", (q) => q.state.rect.width).attr("cy", (q) => q.state.rect.height + u(q) / 2), this.transition(Te).attr("r", 6).attr("stroke-width", "1.5"), this.transition($).style("opacity", 0), se.attr("width", (q) => Math.max(0, q.state.rect.width - n * 2)).attr("height", (q) => q.state.rect.height), this.transition(se).style("opacity", 1), this.transition(pe).attr("d", (q) => {
      const ae = N(q.target), we = [
        ae.x + ae.width,
        ae.y + ae.height + u(q.target) / 2
      ];
      return zi({ source: we, target: we });
    }).attr("stroke-width", 0).remove(), this.transition(ke).attr("stroke", (q) => a(q.target)).attr("stroke-width", (q) => u(q.target)).attr("d", (q) => {
      const ae = q.source, we = q.target, Ge = [
        ae.state.rect.x + ae.state.rect.width,
        ae.state.rect.y + ae.state.rect.height + u(ae) / 2
      ], nt = [
        we.state.rect.x,
        we.state.rect.y + we.state.rect.height + u(we) / 2
      ];
      return zi({ source: Ge, target: nt });
    }), r3 && this.fit();
  }
  transition(e) {
    const { duration: n } = this.options;
    return e.transition().duration(n);
  }
  /**
   * Fit the content to the viewport.
   */
  async fit(e = this.options.maxInitialScale) {
    const n = this.svg.node(), { width: r3, height: a } = n.getBoundingClientRect(), { fitRatio: l3 } = this.options, { x1: u, y1: f, x2: p, y2: y } = this.state.rect, v = p - u, T = y - f, _ = Math.min(
      r3 / v * l3,
      a / T * l3,
      e
    ), C = qi$1.translate(
      (r3 - v * _) / 2 - u * _,
      (a - T * _) / 2 - f * _
    ).scale(_);
    return this.transition(this.svg).call(this.zoom.transform, C).end().catch(zn);
  }
  findElement(e) {
    let n;
    return this.g.selectAll(bt(Ii)).each(function(r3) {
      r3 === e && (n = {
        data: r3,
        g: this
      });
    }), n;
  }
  /**
   * Pan the content to make the provided node visible in the viewport.
   */
  async ensureVisible(e, n) {
    var r3;
    const a = (r3 = this.findElement(e)) == null ? void 0 : r3.data;
    if (!a)
      return;
    const l3 = this.svg.node(), u = l3.getBoundingClientRect(), f = Fi$1(l3), [p, y] = [
      a.state.rect.x,
      a.state.rect.x + a.state.rect.width + 2
    ].map((I3) => I3 * f.k + f.x), [v, T] = [
      a.state.rect.y,
      a.state.rect.y + a.state.rect.height
    ].map((I3) => I3 * f.k + f.y), _ = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      ...n
    }, C = [_.left - p, u.width - _.right - y], S = [_.top - v, u.height - _.bottom - T], N = C[0] * C[1] > 0 ? qo(C, Math.abs) / f.k : 0, O = S[0] * S[1] > 0 ? qo(S, Math.abs) / f.k : 0;
    if (N || O) {
      const I3 = f.translate(N, O);
      return this.transition(this.svg).call(this.zoom.transform, I3).end().catch(zn);
    }
  }
  async centerNode(e, n) {
    var r3;
    const a = (r3 = this.findElement(e)) == null ? void 0 : r3.data;
    if (!a)
      return;
    const l3 = this.svg.node(), u = l3.getBoundingClientRect(), f = Fi$1(l3), p = (a.state.rect.x + a.state.rect.width / 2) * f.k + f.x, y = (a.state.rect.y + a.state.rect.height / 2) * f.k + f.y, v = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      ...n
    }, T = (v.left + u.width - v.right) / 2, _ = (v.top + u.height - v.bottom) / 2, C = (T - p) / f.k, S = (_ - y) / f.k;
    if (C || S) {
      const N = f.translate(C, S);
      return this.transition(this.svg).call(this.zoom.transform, N).end().catch(zn);
    }
  }
  /**
   * Scale content with it pinned at the center of the viewport.
   */
  async rescale(e) {
    const n = this.svg.node(), { width: r3, height: a } = n.getBoundingClientRect(), l3 = r3 / 2, u = a / 2, f = Fi$1(n), p = f.translate(
      (l3 - f.x) * (1 - e) / f.k,
      (u - f.y) * (1 - e) / f.k
    ).scale(e);
    return this.transition(this.svg).call(this.zoom.transform, p).end().catch(zn);
  }
  destroy() {
    this.svg.on(".zoom", null), this.svg.html(null), this._disposeList.forEach((e) => {
      e();
    });
  }
  static create(e, n, r3 = null) {
    const a = new w0(e, n);
    return r3 && a.setData(r3).then(() => {
      a.fit();
    }), a;
  }
}
const Cf = {
  _useHtmlParser2: false
};
function Zi(t3, e) {
  if (!t3)
    return e ?? Cf;
  const n = {
    _useHtmlParser2: !!t3.xmlMode,
    ...e,
    ...t3
  };
  return t3.xml ? (n._useHtmlParser2 = true, n.xmlMode = true, t3.xml !== true && Object.assign(n, t3.xml)) : t3.xmlMode && (n._useHtmlParser2 = true), n;
}
var Ie;
(function(t3) {
  t3.Root = "root", t3.Text = "text", t3.Directive = "directive", t3.Comment = "comment", t3.Script = "script", t3.Style = "style", t3.Tag = "tag", t3.CDATA = "cdata", t3.Doctype = "doctype";
})(Ie || (Ie = {}));
function If(t3) {
  return t3.type === Ie.Tag || t3.type === Ie.Script || t3.type === Ie.Style;
}
const zf = Ie.Root, Of = Ie.Text, Bf = Ie.Directive, Df = Ie.Comment, Lf = Ie.Script, qf = Ie.Style, Rf = Ie.Tag, $f = Ie.CDATA, Pf = Ie.Doctype;
let Cl = class {
  constructor() {
    this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
  }
  // Read-write aliases for properties
  /**
   * Same as {@link parent}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get parentNode() {
    return this.parent;
  }
  set parentNode(e) {
    this.parent = e;
  }
  /**
   * Same as {@link prev}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get previousSibling() {
    return this.prev;
  }
  set previousSibling(e) {
    this.prev = e;
  }
  /**
   * Same as {@link next}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get nextSibling() {
    return this.next;
  }
  set nextSibling(e) {
    this.next = e;
  }
  /**
   * Clone this node, and optionally its children.
   *
   * @param recursive Clone child nodes as well.
   * @returns A clone of the node.
   */
  cloneNode(e = false) {
    return wr(this, e);
  }
};
class x0 extends Cl {
  /**
   * @param data The content of the data node
   */
  constructor(e) {
    super(), this.data = e;
  }
  /**
   * Same as {@link data}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get nodeValue() {
    return this.data;
  }
  set nodeValue(e) {
    this.data = e;
  }
}
class ms extends x0 {
  constructor() {
    super(...arguments), this.type = Ie.Text;
  }
  get nodeType() {
    return 3;
  }
}
class Il extends x0 {
  constructor() {
    super(...arguments), this.type = Ie.Comment;
  }
  get nodeType() {
    return 8;
  }
}
class zl extends x0 {
  constructor(e, n) {
    super(n), this.name = e, this.type = Ie.Directive;
  }
  get nodeType() {
    return 1;
  }
}
class k0 extends Cl {
  /**
   * @param children Children of the node. Only certain node types can have children.
   */
  constructor(e) {
    super(), this.children = e;
  }
  // Aliases
  /** First child of the node. */
  get firstChild() {
    var e;
    return (e = this.children[0]) !== null && e !== void 0 ? e : null;
  }
  /** Last child of the node. */
  get lastChild() {
    return this.children.length > 0 ? this.children[this.children.length - 1] : null;
  }
  /**
   * Same as {@link children}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get childNodes() {
    return this.children;
  }
  set childNodes(e) {
    this.children = e;
  }
}
class Ol extends k0 {
  constructor() {
    super(...arguments), this.type = Ie.CDATA;
  }
  get nodeType() {
    return 4;
  }
}
let br = class extends k0 {
  constructor() {
    super(...arguments), this.type = Ie.Root;
  }
  get nodeType() {
    return 9;
  }
};
class Bl extends k0 {
  /**
   * @param name Name of the tag, eg. `div`, `span`.
   * @param attribs Object mapping attribute names to attribute values.
   * @param children Children of the node.
   */
  constructor(e, n, r3 = [], a = e === "script" ? Ie.Script : e === "style" ? Ie.Style : Ie.Tag) {
    super(r3), this.name = e, this.attribs = n, this.type = a;
  }
  get nodeType() {
    return 1;
  }
  // DOM Level 1 aliases
  /**
   * Same as {@link name}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get tagName() {
    return this.name;
  }
  set tagName(e) {
    this.name = e;
  }
  get attributes() {
    return Object.keys(this.attribs).map((e) => {
      var n, r3;
      return {
        name: e,
        value: this.attribs[e],
        namespace: (n = this["x-attribsNamespace"]) === null || n === void 0 ? void 0 : n[e],
        prefix: (r3 = this["x-attribsPrefix"]) === null || r3 === void 0 ? void 0 : r3[e]
      };
    });
  }
}
function ge(t3) {
  return If(t3);
}
function Ts(t3) {
  return t3.type === Ie.CDATA;
}
function wn(t3) {
  return t3.type === Ie.Text;
}
function v0(t3) {
  return t3.type === Ie.Comment;
}
function Ff(t3) {
  return t3.type === Ie.Directive;
}
function vn(t3) {
  return t3.type === Ie.Root;
}
function it(t3) {
  return Object.prototype.hasOwnProperty.call(t3, "children");
}
function wr(t3, e = false) {
  let n;
  if (wn(t3))
    n = new ms(t3.data);
  else if (v0(t3))
    n = new Il(t3.data);
  else if (ge(t3)) {
    const r3 = e ? Bi(t3.children) : [], a = new Bl(t3.name, { ...t3.attribs }, r3);
    r3.forEach((l3) => l3.parent = a), t3.namespace != null && (a.namespace = t3.namespace), t3["x-attribsNamespace"] && (a["x-attribsNamespace"] = { ...t3["x-attribsNamespace"] }), t3["x-attribsPrefix"] && (a["x-attribsPrefix"] = { ...t3["x-attribsPrefix"] }), n = a;
  } else if (Ts(t3)) {
    const r3 = e ? Bi(t3.children) : [], a = new Ol(r3);
    r3.forEach((l3) => l3.parent = a), n = a;
  } else if (vn(t3)) {
    const r3 = e ? Bi(t3.children) : [], a = new br(r3);
    r3.forEach((l3) => l3.parent = a), t3["x-mode"] && (a["x-mode"] = t3["x-mode"]), n = a;
  } else if (Ff(t3)) {
    const r3 = new zl(t3.name, t3.data);
    t3["x-name"] != null && (r3["x-name"] = t3["x-name"], r3["x-publicId"] = t3["x-publicId"], r3["x-systemId"] = t3["x-systemId"]), n = r3;
  } else
    throw new Error(`Not implemented yet: ${t3.type}`);
  return n.startIndex = t3.startIndex, n.endIndex = t3.endIndex, t3.sourceCodeLocation != null && (n.sourceCodeLocation = t3.sourceCodeLocation), n;
}
function Bi(t3) {
  const e = t3.map((n) => wr(n, true));
  for (let n = 1; n < e.length; n++)
    e[n].prev = e[n - 1], e[n - 1].next = e[n];
  return e;
}
const Ro = {
  withStartIndices: false,
  withEndIndices: false,
  xmlMode: false
};
class Hf {
  /**
   * @param callback Called once parsing has completed.
   * @param options Settings for the handler.
   * @param elementCB Callback whenever a tag is closed.
   */
  constructor(e, n, r3) {
    this.dom = [], this.root = new br(this.dom), this.done = false, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof n == "function" && (r3 = n, n = Ro), typeof e == "object" && (n = e, e = void 0), this.callback = e ?? null, this.options = n ?? Ro, this.elementCB = r3 ?? null;
  }
  onparserinit(e) {
    this.parser = e;
  }
  // Resets the handler back to starting state
  onreset() {
    this.dom = [], this.root = new br(this.dom), this.done = false, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
  }
  // Signals the handler that parsing is done
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
    const r3 = this.options.xmlMode ? Ie.Tag : void 0, a = new Bl(e, n, void 0, r3);
    this.addNode(a), this.tagStack.push(a);
  }
  ontext(e) {
    const { lastNode: n } = this;
    if (n && n.type === Ie.Text)
      n.data += e, this.options.withEndIndices && (n.endIndex = this.parser.endIndex);
    else {
      const r3 = new ms(e);
      this.addNode(r3), this.lastNode = r3;
    }
  }
  oncomment(e) {
    if (this.lastNode && this.lastNode.type === Ie.Comment) {
      this.lastNode.data += e;
      return;
    }
    const n = new Il(e);
    this.addNode(n), this.lastNode = n;
  }
  oncommentend() {
    this.lastNode = null;
  }
  oncdatastart() {
    const e = new ms(""), n = new Ol([e]);
    this.addNode(n), e.parent = n, this.lastNode = e;
  }
  oncdataend() {
    this.lastNode = null;
  }
  onprocessinginstruction(e, n) {
    const r3 = new zl(e, n);
    this.addNode(r3);
  }
  handleCallback(e) {
    if (typeof this.callback == "function")
      this.callback(e, this.dom);
    else if (e)
      throw e;
  }
  addNode(e) {
    const n = this.tagStack[this.tagStack.length - 1], r3 = n.children[n.children.length - 1];
    this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), n.children.push(e), r3 && (e.prev = r3, r3.next = e), e.parent = n, this.lastNode = null;
  }
}
const Dl = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((t3) => t3.charCodeAt(0))
), Ll = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((t3) => t3.charCodeAt(0))
);
var Di;
const jf = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), e0 = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (Di = String.fromCodePoint) !== null && Di !== void 0 ? Di : function(t3) {
    let e = "";
    return t3 > 65535 && (t3 -= 65536, e += String.fromCharCode(t3 >>> 10 & 1023 | 55296), t3 = 56320 | t3 & 1023), e += String.fromCharCode(t3), e;
  }
);
function Vf(t3) {
  var e;
  return t3 >= 55296 && t3 <= 57343 || t3 > 1114111 ? 65533 : (e = jf.get(t3)) !== null && e !== void 0 ? e : t3;
}
var st;
(function(t3) {
  t3[t3.NUM = 35] = "NUM", t3[t3.SEMI = 59] = "SEMI", t3[t3.EQUALS = 61] = "EQUALS", t3[t3.ZERO = 48] = "ZERO", t3[t3.NINE = 57] = "NINE", t3[t3.LOWER_A = 97] = "LOWER_A", t3[t3.LOWER_F = 102] = "LOWER_F", t3[t3.LOWER_X = 120] = "LOWER_X", t3[t3.LOWER_Z = 122] = "LOWER_Z", t3[t3.UPPER_A = 65] = "UPPER_A", t3[t3.UPPER_F = 70] = "UPPER_F", t3[t3.UPPER_Z = 90] = "UPPER_Z";
})(st || (st = {}));
const Uf = 32;
var sn;
(function(t3) {
  t3[t3.VALUE_LENGTH = 49152] = "VALUE_LENGTH", t3[t3.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", t3[t3.JUMP_TABLE = 127] = "JUMP_TABLE";
})(sn || (sn = {}));
function t0(t3) {
  return t3 >= st.ZERO && t3 <= st.NINE;
}
function Gf(t3) {
  return t3 >= st.UPPER_A && t3 <= st.UPPER_F || t3 >= st.LOWER_A && t3 <= st.LOWER_F;
}
function Kf(t3) {
  return t3 >= st.UPPER_A && t3 <= st.UPPER_Z || t3 >= st.LOWER_A && t3 <= st.LOWER_Z || t0(t3);
}
function Xf(t3) {
  return t3 === st.EQUALS || Kf(t3);
}
var rt;
(function(t3) {
  t3[t3.EntityStart = 0] = "EntityStart", t3[t3.NumericStart = 1] = "NumericStart", t3[t3.NumericDecimal = 2] = "NumericDecimal", t3[t3.NumericHex = 3] = "NumericHex", t3[t3.NamedEntity = 4] = "NamedEntity";
})(rt || (rt = {}));
var qt;
(function(t3) {
  t3[t3.Legacy = 0] = "Legacy", t3[t3.Strict = 1] = "Strict", t3[t3.Attribute = 2] = "Attribute";
})(qt || (qt = {}));
class ql {
  constructor(e, n, r3) {
    this.decodeTree = e, this.emitCodePoint = n, this.errors = r3, this.state = rt.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = qt.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(e) {
    this.decodeMode = e, this.state = rt.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(e, n) {
    switch (this.state) {
      case rt.EntityStart:
        return e.charCodeAt(n) === st.NUM ? (this.state = rt.NumericStart, this.consumed += 1, this.stateNumericStart(e, n + 1)) : (this.state = rt.NamedEntity, this.stateNamedEntity(e, n));
      case rt.NumericStart:
        return this.stateNumericStart(e, n);
      case rt.NumericDecimal:
        return this.stateNumericDecimal(e, n);
      case rt.NumericHex:
        return this.stateNumericHex(e, n);
      case rt.NamedEntity:
        return this.stateNamedEntity(e, n);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(e, n) {
    return n >= e.length ? -1 : (e.charCodeAt(n) | Uf) === st.LOWER_X ? (this.state = rt.NumericHex, this.consumed += 1, this.stateNumericHex(e, n + 1)) : (this.state = rt.NumericDecimal, this.stateNumericDecimal(e, n));
  }
  addToNumericResult(e, n, r3, a) {
    if (n !== r3) {
      const l3 = r3 - n;
      this.result = this.result * Math.pow(a, l3) + parseInt(e.substr(n, l3), a), this.consumed += l3;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(e, n) {
    const r3 = n;
    for (; n < e.length; ) {
      const a = e.charCodeAt(n);
      if (t0(a) || Gf(a))
        n += 1;
      else
        return this.addToNumericResult(e, r3, n, 16), this.emitNumericEntity(a, 3);
    }
    return this.addToNumericResult(e, r3, n, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(e, n) {
    const r3 = n;
    for (; n < e.length; ) {
      const a = e.charCodeAt(n);
      if (t0(a))
        n += 1;
      else
        return this.addToNumericResult(e, r3, n, 10), this.emitNumericEntity(a, 2);
    }
    return this.addToNumericResult(e, r3, n, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(e, n) {
    var r3;
    if (this.consumed <= n)
      return (r3 = this.errors) === null || r3 === void 0 || r3.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (e === st.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === qt.Strict)
      return 0;
    return this.emitCodePoint(Vf(this.result), this.consumed), this.errors && (e !== st.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(e, n) {
    const { decodeTree: r3 } = this;
    let a = r3[this.treeIndex], l3 = (a & sn.VALUE_LENGTH) >> 14;
    for (; n < e.length; n++, this.excess++) {
      const u = e.charCodeAt(n);
      if (this.treeIndex = Wf(r3, a, this.treeIndex + Math.max(1, l3), u), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === qt.Attribute && // We shouldn't have consumed any characters after the entity,
        (l3 === 0 || // And there should be no invalid characters.
        Xf(u)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (a = r3[this.treeIndex], l3 = (a & sn.VALUE_LENGTH) >> 14, l3 !== 0) {
        if (u === st.SEMI)
          return this.emitNamedEntityData(this.treeIndex, l3, this.consumed + this.excess);
        this.decodeMode !== qt.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var e;
    const { result: n, decodeTree: r3 } = this, a = (r3[n] & sn.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(n, a, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(e, n, r3) {
    const { decodeTree: a } = this;
    return this.emitCodePoint(n === 1 ? a[e] & ~sn.VALUE_LENGTH : a[e + 1], r3), n === 3 && this.emitCodePoint(a[e + 2], r3), r3;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var e;
    switch (this.state) {
      case rt.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== qt.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      case rt.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case rt.NumericHex:
        return this.emitNumericEntity(0, 3);
      case rt.NumericStart:
        return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case rt.EntityStart:
        return 0;
    }
  }
}
function Rl(t3) {
  let e = "";
  const n = new ql(t3, (r3) => e += e0(r3));
  return function(a, l3) {
    let u = 0, f = 0;
    for (; (f = a.indexOf("&", f)) >= 0; ) {
      e += a.slice(u, f), n.startEntity(l3);
      const y = n.write(
        a,
        // Skip the "&"
        f + 1
      );
      if (y < 0) {
        u = f + n.end();
        break;
      }
      u = f + y, f = y === 0 ? u + 1 : u;
    }
    const p = e + a.slice(u);
    return e = "", p;
  };
}
function Wf(t3, e, n, r3) {
  const a = (e & sn.BRANCH_LENGTH) >> 7, l3 = e & sn.JUMP_TABLE;
  if (a === 0)
    return l3 !== 0 && r3 === l3 ? n : -1;
  if (l3) {
    const p = r3 - l3;
    return p < 0 || p >= a ? -1 : t3[n + p] - 1;
  }
  let u = n, f = u + a - 1;
  for (; u <= f; ) {
    const p = u + f >>> 1, y = t3[p];
    if (y < r3)
      u = p + 1;
    else if (y > r3)
      f = p - 1;
    else
      return t3[p + a];
  }
  return -1;
}
Rl(Dl);
Rl(Ll);
const $o = /["&'<>$\x80-\uFFFF]/g, Yf = /* @__PURE__ */ new Map([
  [34, "&quot;"],
  [38, "&amp;"],
  [39, "&apos;"],
  [60, "&lt;"],
  [62, "&gt;"]
]), Jf = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? (t3, e) => t3.codePointAt(e) : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    (t3, e) => (t3.charCodeAt(e) & 64512) === 55296 ? (t3.charCodeAt(e) - 55296) * 1024 + t3.charCodeAt(e + 1) - 56320 + 65536 : t3.charCodeAt(e)
  )
);
function $l(t3) {
  let e = "", n = 0, r3;
  for (; (r3 = $o.exec(t3)) !== null; ) {
    const a = r3.index, l3 = t3.charCodeAt(a), u = Yf.get(l3);
    u !== void 0 ? (e += t3.substring(n, a) + u, n = a + 1) : (e += `${t3.substring(n, a)}&#x${Jf(t3, a).toString(16)};`, n = $o.lastIndex += +((l3 & 64512) === 55296));
  }
  return e + t3.substr(n);
}
function Pl(t3, e) {
  return function(r3) {
    let a, l3 = 0, u = "";
    for (; a = t3.exec(r3); )
      l3 !== a.index && (u += r3.substring(l3, a.index)), u += e.get(a[0].charCodeAt(0)), l3 = a.index + 1;
    return u + r3.substring(l3);
  };
}
const Qf = Pl(/["&\u00A0]/g, /* @__PURE__ */ new Map([
  [34, "&quot;"],
  [38, "&amp;"],
  [160, "&nbsp;"]
])), Zf = Pl(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
  [38, "&amp;"],
  [60, "&lt;"],
  [62, "&gt;"],
  [160, "&nbsp;"]
])), ed = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map((t3) => [t3.toLowerCase(), t3])), td = new Map([
  "definitionURL",
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map((t3) => [t3.toLowerCase(), t3])), nd = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function rd(t3) {
  return t3.replace(/"/g, "&quot;");
}
function sd(t3, e) {
  var n;
  if (!t3)
    return;
  const r3 = ((n = e.encodeEntities) !== null && n !== void 0 ? n : e.decodeEntities) === false ? rd : e.xmlMode || e.encodeEntities !== "utf8" ? $l : Qf;
  return Object.keys(t3).map((a) => {
    var l3, u;
    const f = (l3 = t3[a]) !== null && l3 !== void 0 ? l3 : "";
    return e.xmlMode === "foreign" && (a = (u = td.get(a)) !== null && u !== void 0 ? u : a), !e.emptyAttrs && !e.xmlMode && f === "" ? a : `${a}="${r3(f)}"`;
  }).join(" ");
}
const Po = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function Ns(t3, e = {}) {
  const n = "length" in t3 ? t3 : [t3];
  let r3 = "";
  for (let a = 0; a < n.length; a++)
    r3 += id(n[a], e);
  return r3;
}
function id(t3, e) {
  switch (t3.type) {
    case zf:
      return Ns(t3.children, e);
    case Pf:
    case Bf:
      return cd(t3);
    case Df:
      return fd(t3);
    case $f:
      return hd(t3);
    case Lf:
    case qf:
    case Rf:
      return ld(t3, e);
    case Of:
      return ud(t3, e);
  }
}
const ad = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]), od = /* @__PURE__ */ new Set(["svg", "math"]);
function ld(t3, e) {
  var n;
  e.xmlMode === "foreign" && (t3.name = (n = ed.get(t3.name)) !== null && n !== void 0 ? n : t3.name, t3.parent && ad.has(t3.parent.name) && (e = { ...e, xmlMode: false })), !e.xmlMode && od.has(t3.name) && (e = { ...e, xmlMode: "foreign" });
  let r3 = `<${t3.name}`;
  const a = sd(t3.attribs, e);
  return a && (r3 += ` ${a}`), t3.children.length === 0 && (e.xmlMode ? (
    // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
    e.selfClosingTags !== false
  ) : (
    // User explicitly asked for self-closing tags, even in HTML mode
    e.selfClosingTags && Po.has(t3.name)
  )) ? (e.xmlMode || (r3 += " "), r3 += "/>") : (r3 += ">", t3.children.length > 0 && (r3 += Ns(t3.children, e)), (e.xmlMode || !Po.has(t3.name)) && (r3 += `</${t3.name}>`)), r3;
}
function cd(t3) {
  return `<${t3.data}>`;
}
function ud(t3, e) {
  var n;
  let r3 = t3.data || "";
  return ((n = e.encodeEntities) !== null && n !== void 0 ? n : e.decodeEntities) !== false && !(!e.xmlMode && t3.parent && nd.has(t3.parent.name)) && (r3 = e.xmlMode || e.encodeEntities !== "utf8" ? $l(r3) : Zf(r3)), r3;
}
function hd(t3) {
  return `<![CDATA[${t3.children[0].data}]]>`;
}
function fd(t3) {
  return `<!--${t3.data}-->`;
}
function Fl(t3, e) {
  return Ns(t3, e);
}
function dd(t3, e) {
  return it(t3) ? t3.children.map((n) => Fl(n, e)).join("") : "";
}
function ls(t3) {
  return Array.isArray(t3) ? t3.map(ls).join("") : ge(t3) ? t3.name === "br" ? `
` : ls(t3.children) : Ts(t3) ? ls(t3.children) : wn(t3) ? t3.data : "";
}
function $n(t3) {
  return Array.isArray(t3) ? t3.map($n).join("") : it(t3) && !v0(t3) ? $n(t3.children) : wn(t3) ? t3.data : "";
}
function ps(t3) {
  return Array.isArray(t3) ? t3.map(ps).join("") : it(t3) && (t3.type === Ie.Tag || Ts(t3)) ? ps(t3.children) : wn(t3) ? t3.data : "";
}
function Ms(t3) {
  return it(t3) ? t3.children : [];
}
function Hl(t3) {
  return t3.parent || null;
}
function jl(t3) {
  const e = Hl(t3);
  if (e != null)
    return Ms(e);
  const n = [t3];
  let { prev: r3, next: a } = t3;
  for (; r3 != null; )
    n.unshift(r3), { prev: r3 } = r3;
  for (; a != null; )
    n.push(a), { next: a } = a;
  return n;
}
function md(t3, e) {
  var n;
  return (n = t3.attribs) === null || n === void 0 ? void 0 : n[e];
}
function pd(t3, e) {
  return t3.attribs != null && Object.prototype.hasOwnProperty.call(t3.attribs, e) && t3.attribs[e] != null;
}
function gd(t3) {
  return t3.name;
}
function S0(t3) {
  let { next: e } = t3;
  for (; e !== null && !ge(e); )
    ({ next: e } = e);
  return e;
}
function A0(t3) {
  let { prev: e } = t3;
  for (; e !== null && !ge(e); )
    ({ prev: e } = e);
  return e;
}
function Sn(t3) {
  if (t3.prev && (t3.prev.next = t3.next), t3.next && (t3.next.prev = t3.prev), t3.parent) {
    const e = t3.parent.children, n = e.lastIndexOf(t3);
    n >= 0 && e.splice(n, 1);
  }
  t3.next = null, t3.prev = null, t3.parent = null;
}
function yd(t3, e) {
  const n = e.prev = t3.prev;
  n && (n.next = e);
  const r3 = e.next = t3.next;
  r3 && (r3.prev = e);
  const a = e.parent = t3.parent;
  if (a) {
    const l3 = a.children;
    l3[l3.lastIndexOf(t3)] = e, t3.parent = null;
  }
}
function bd(t3, e) {
  if (Sn(e), e.next = null, e.parent = t3, t3.children.push(e) > 1) {
    const n = t3.children[t3.children.length - 2];
    n.next = e, e.prev = n;
  } else
    e.prev = null;
}
function wd(t3, e) {
  Sn(e);
  const { parent: n } = t3, r3 = t3.next;
  if (e.next = r3, e.prev = t3, t3.next = e, e.parent = n, r3) {
    if (r3.prev = e, n) {
      const a = n.children;
      a.splice(a.lastIndexOf(r3), 0, e);
    }
  } else
    n && n.children.push(e);
}
function xd(t3, e) {
  if (Sn(e), e.parent = t3, e.prev = null, t3.children.unshift(e) !== 1) {
    const n = t3.children[1];
    n.prev = e, e.next = n;
  } else
    e.next = null;
}
function kd(t3, e) {
  Sn(e);
  const { parent: n } = t3;
  if (n) {
    const r3 = n.children;
    r3.splice(r3.indexOf(t3), 0, e);
  }
  t3.prev && (t3.prev.next = e), e.parent = n, e.prev = t3.prev, e.next = t3, t3.prev = e;
}
function Es(t3, e, n = true, r3 = 1 / 0) {
  return T0(t3, Array.isArray(e) ? e : [e], n, r3);
}
function T0(t3, e, n, r3) {
  const a = [], l3 = [e], u = [0];
  for (; ; ) {
    if (u[0] >= l3[0].length) {
      if (u.length === 1)
        return a;
      l3.shift(), u.shift();
      continue;
    }
    const f = l3[0][u[0]++];
    if (t3(f) && (a.push(f), --r3 <= 0))
      return a;
    n && it(f) && f.children.length > 0 && (u.unshift(0), l3.unshift(f.children));
  }
}
function vd(t3, e) {
  return e.find(t3);
}
function N0(t3, e, n = true) {
  let r3 = null;
  for (let a = 0; a < e.length && !r3; a++) {
    const l3 = e[a];
    if (ge(l3))
      t3(l3) ? r3 = l3 : n && l3.children.length > 0 && (r3 = N0(t3, l3.children, true));
    else
      continue;
  }
  return r3;
}
function Vl(t3, e) {
  return e.some((n) => ge(n) && (t3(n) || Vl(t3, n.children)));
}
function Sd(t3, e) {
  const n = [], r3 = [e], a = [0];
  for (; ; ) {
    if (a[0] >= r3[0].length) {
      if (r3.length === 1)
        return n;
      r3.shift(), a.shift();
      continue;
    }
    const l3 = r3[0][a[0]++];
    ge(l3) && (t3(l3) && n.push(l3), l3.children.length > 0 && (a.unshift(0), r3.unshift(l3.children)));
  }
}
const gs = {
  tag_name(t3) {
    return typeof t3 == "function" ? (e) => ge(e) && t3(e.name) : t3 === "*" ? ge : (e) => ge(e) && e.name === t3;
  },
  tag_type(t3) {
    return typeof t3 == "function" ? (e) => t3(e.type) : (e) => e.type === t3;
  },
  tag_contains(t3) {
    return typeof t3 == "function" ? (e) => wn(e) && t3(e.data) : (e) => wn(e) && e.data === t3;
  }
};
function Ul(t3, e) {
  return typeof e == "function" ? (n) => ge(n) && e(n.attribs[t3]) : (n) => ge(n) && n.attribs[t3] === e;
}
function Ad(t3, e) {
  return (n) => t3(n) || e(n);
}
function Gl(t3) {
  const e = Object.keys(t3).map((n) => {
    const r3 = t3[n];
    return Object.prototype.hasOwnProperty.call(gs, n) ? gs[n](r3) : Ul(n, r3);
  });
  return e.length === 0 ? null : e.reduce(Ad);
}
function Td(t3, e) {
  const n = Gl(t3);
  return n ? n(e) : true;
}
function Nd(t3, e, n, r3 = 1 / 0) {
  const a = Gl(t3);
  return a ? Es(a, e, n, r3) : [];
}
function Md(t3, e, n = true) {
  return Array.isArray(e) || (e = [e]), N0(Ul("id", t3), e, n);
}
function Hn(t3, e, n = true, r3 = 1 / 0) {
  return Es(gs.tag_name(t3), e, n, r3);
}
function Ed(t3, e, n = true, r3 = 1 / 0) {
  return Es(gs.tag_type(t3), e, n, r3);
}
function _d(t3) {
  let e = t3.length;
  for (; --e >= 0; ) {
    const n = t3[e];
    if (e > 0 && t3.lastIndexOf(n, e - 1) >= 0) {
      t3.splice(e, 1);
      continue;
    }
    for (let r3 = n.parent; r3; r3 = r3.parent)
      if (t3.includes(r3)) {
        t3.splice(e, 1);
        break;
      }
  }
  return t3;
}
var At;
(function(t3) {
  t3[t3.DISCONNECTED = 1] = "DISCONNECTED", t3[t3.PRECEDING = 2] = "PRECEDING", t3[t3.FOLLOWING = 4] = "FOLLOWING", t3[t3.CONTAINS = 8] = "CONTAINS", t3[t3.CONTAINED_BY = 16] = "CONTAINED_BY";
})(At || (At = {}));
function Kl(t3, e) {
  const n = [], r3 = [];
  if (t3 === e)
    return 0;
  let a = it(t3) ? t3 : t3.parent;
  for (; a; )
    n.unshift(a), a = a.parent;
  for (a = it(e) ? e : e.parent; a; )
    r3.unshift(a), a = a.parent;
  const l3 = Math.min(n.length, r3.length);
  let u = 0;
  for (; u < l3 && n[u] === r3[u]; )
    u++;
  if (u === 0)
    return At.DISCONNECTED;
  const f = n[u - 1], p = f.children, y = n[u], v = r3[u];
  return p.indexOf(y) > p.indexOf(v) ? f === e ? At.FOLLOWING | At.CONTAINED_BY : At.FOLLOWING : f === t3 ? At.PRECEDING | At.CONTAINS : At.PRECEDING;
}
function jn(t3) {
  return t3 = t3.filter((e, n, r3) => !r3.includes(e, n + 1)), t3.sort((e, n) => {
    const r3 = Kl(e, n);
    return r3 & At.PRECEDING ? -1 : r3 & At.FOLLOWING ? 1 : 0;
  }), t3;
}
function Cd(t3) {
  const e = ys(Dd, t3);
  return e ? e.name === "feed" ? Id(e) : zd(e) : null;
}
function Id(t3) {
  var e;
  const n = t3.children, r3 = {
    type: "atom",
    items: Hn("entry", n).map((u) => {
      var f;
      const { children: p } = u, y = { media: Xl(p) };
      dt(y, "id", "id", p), dt(y, "title", "title", p);
      const v = (f = ys("link", p)) === null || f === void 0 ? void 0 : f.attribs.href;
      v && (y.link = v);
      const T = an("summary", p) || an("content", p);
      T && (y.description = T);
      const _ = an("updated", p);
      return _ && (y.pubDate = new Date(_)), y;
    })
  };
  dt(r3, "id", "id", n), dt(r3, "title", "title", n);
  const a = (e = ys("link", n)) === null || e === void 0 ? void 0 : e.attribs.href;
  a && (r3.link = a), dt(r3, "description", "subtitle", n);
  const l3 = an("updated", n);
  return l3 && (r3.updated = new Date(l3)), dt(r3, "author", "email", n, true), r3;
}
function zd(t3) {
  var e, n;
  const r3 = (n = (e = ys("channel", t3.children)) === null || e === void 0 ? void 0 : e.children) !== null && n !== void 0 ? n : [], a = {
    type: t3.name.substr(0, 3),
    id: "",
    items: Hn("item", t3.children).map((u) => {
      const { children: f } = u, p = { media: Xl(f) };
      dt(p, "id", "guid", f), dt(p, "title", "title", f), dt(p, "link", "link", f), dt(p, "description", "description", f);
      const y = an("pubDate", f) || an("dc:date", f);
      return y && (p.pubDate = new Date(y)), p;
    })
  };
  dt(a, "title", "title", r3), dt(a, "link", "link", r3), dt(a, "description", "description", r3);
  const l3 = an("lastBuildDate", r3);
  return l3 && (a.updated = new Date(l3)), dt(a, "author", "managingEditor", r3, true), a;
}
const Od = ["url", "type", "lang"], Bd = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
function Xl(t3) {
  return Hn("media:content", t3).map((e) => {
    const { attribs: n } = e, r3 = {
      medium: n.medium,
      isDefault: !!n.isDefault
    };
    for (const a of Od)
      n[a] && (r3[a] = n[a]);
    for (const a of Bd)
      n[a] && (r3[a] = parseInt(n[a], 10));
    return n.expression && (r3.expression = n.expression), r3;
  });
}
function ys(t3, e) {
  return Hn(t3, e, true, 1)[0];
}
function an(t3, e, n = false) {
  return $n(Hn(t3, e, n, 1)).trim();
}
function dt(t3, e, n, r3, a = false) {
  const l3 = an(n, r3, a);
  l3 && (t3[e] = l3);
}
function Dd(t3) {
  return t3 === "rss" || t3 === "feed" || t3 === "rdf:RDF";
}
const _s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get DocumentPosition() {
    return At;
  },
  append: wd,
  appendChild: bd,
  compareDocumentPosition: Kl,
  existsOne: Vl,
  filter: Es,
  find: T0,
  findAll: Sd,
  findOne: N0,
  findOneChild: vd,
  getAttributeValue: md,
  getChildren: Ms,
  getElementById: Md,
  getElements: Nd,
  getElementsByTagName: Hn,
  getElementsByTagType: Ed,
  getFeed: Cd,
  getInnerHTML: dd,
  getName: gd,
  getOuterHTML: Fl,
  getParent: Hl,
  getSiblings: jl,
  getText: ls,
  hasAttrib: pd,
  hasChildren: it,
  innerText: ps,
  isCDATA: Ts,
  isComment: v0,
  isDocument: vn,
  isTag: ge,
  isText: wn,
  nextElementSibling: S0,
  prepend: kd,
  prependChild: xd,
  prevElementSibling: A0,
  removeElement: Sn,
  removeSubsets: _d,
  replaceElement: yd,
  testElement: Td,
  textContent: $n,
  uniqueSort: jn
}, Symbol.toStringTag, { value: "Module" }));
function Wl(t3, e, n) {
  return t3 ? t3(e ?? t3._root.children, null, void 0, n).toString() : "";
}
function Ld(t3, e) {
  return typeof t3 == "object" && t3 != null && !("length" in t3) && !("type" in t3);
}
function qd(t3, e) {
  const n = Ld(t3) ? (e = t3, void 0) : t3, r3 = {
    ...this === null || this === void 0 ? void 0 : this._options,
    ...Zi(e)
  };
  return Wl(this, n, r3);
}
function Rd(t3) {
  const e = { ...this._options, xmlMode: true };
  return Wl(this, t3, e);
}
function xr(t3) {
  const e = t3 ?? (this ? this.root() : []);
  let n = "";
  for (let r3 = 0; r3 < e.length; r3++)
    n += $n(e[r3]);
  return n;
}
function $d(t3, e, n = typeof e == "boolean" ? e : false) {
  if (!t3 || typeof t3 != "string")
    return null;
  typeof e == "boolean" && (n = e);
  const r3 = this.load(t3, this._options, false);
  return n || r3("script").remove(), [...r3.root()[0].children];
}
function Pd() {
  return this(this._root);
}
function Yl(t3, e) {
  if (e === t3)
    return false;
  let n = e;
  for (; n && n !== n.parent; )
    if (n = n.parent, n === t3)
      return true;
  return false;
}
function Fd(t3) {
  return this.root().extract(t3);
}
function Hd(t3, e) {
  if (!Fo(t3) || !Fo(e))
    return;
  let n = t3.length;
  const r3 = +e.length;
  for (let a = 0; a < r3; a++)
    t3[n++] = e[a];
  return t3.length = n, t3;
}
function Fo(t3) {
  if (Array.isArray(t3))
    return true;
  if (typeof t3 != "object" || t3 === null || !("length" in t3) || typeof t3.length != "number" || t3.length < 0)
    return false;
  for (let e = 0; e < t3.length; e++)
    if (!(e in t3))
      return false;
  return true;
}
const jd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  contains: Yl,
  extract: Fd,
  html: qd,
  merge: Hd,
  parseHTML: $d,
  root: Pd,
  text: xr,
  xml: Rd
}, Symbol.toStringTag, { value: "Module" }));
function Wt(t3) {
  return t3.cheerio != null;
}
function Vd(t3) {
  return t3.replace(/[._-](\w|$)/g, (e, n) => n.toUpperCase());
}
function Ud(t3) {
  return t3.replace(/[A-Z]/g, "-$&").toLowerCase();
}
function Ve(t3, e) {
  const n = t3.length;
  for (let r3 = 0; r3 < n; r3++)
    e(t3[r3], r3);
  return t3;
}
var gn;
(function(t3) {
  t3[t3.LowerA = 97] = "LowerA", t3[t3.LowerZ = 122] = "LowerZ", t3[t3.UpperA = 65] = "UpperA", t3[t3.UpperZ = 90] = "UpperZ", t3[t3.Exclamation = 33] = "Exclamation";
})(gn || (gn = {}));
function n0(t3) {
  const e = t3.indexOf("<");
  if (e < 0 || e > t3.length - 3)
    return false;
  const n = t3.charCodeAt(e + 1);
  return (n >= gn.LowerA && n <= gn.LowerZ || n >= gn.UpperA && n <= gn.UpperZ || n === gn.Exclamation) && t3.includes(">", e + 2);
}
const kr = Object.prototype.hasOwnProperty, vr = /\s+/, r0 = "data-", M0 = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, Gd = /^{[^]*}$|^\[[^]*]$/;
function bs(t3, e, n) {
  var r3;
  if (!(!t3 || !ge(t3))) {
    if ((r3 = t3.attribs) !== null && r3 !== void 0 || (t3.attribs = {}), !e)
      return t3.attribs;
    if (kr.call(t3.attribs, e))
      return !n && M0.test(e) ? e : t3.attribs[e];
    if (t3.name === "option" && e === "value")
      return xr(t3.children);
    if (t3.name === "input" && (t3.attribs.type === "radio" || t3.attribs.type === "checkbox") && e === "value")
      return "on";
  }
}
function Ln(t3, e, n) {
  n === null ? Ql(t3, e) : t3.attribs[e] = `${n}`;
}
function Kd(t3, e) {
  if (typeof t3 == "object" || e !== void 0) {
    if (typeof e == "function") {
      if (typeof t3 != "string")
        throw new Error("Bad combination of arguments.");
      return Ve(this, (n, r3) => {
        ge(n) && Ln(n, t3, e.call(n, r3, n.attribs[t3]));
      });
    }
    return Ve(this, (n) => {
      if (ge(n))
        if (typeof t3 == "object")
          for (const r3 of Object.keys(t3)) {
            const a = t3[r3];
            Ln(n, r3, a);
          }
        else
          Ln(n, t3, e);
    });
  }
  return arguments.length > 1 ? this : bs(this[0], t3, this.options.xmlMode);
}
function Ho(t3, e, n) {
  return e in t3 ? (
    // @ts-expect-error TS doesn't like us accessing the value directly here.
    t3[e]
  ) : !n && M0.test(e) ? bs(t3, e, false) !== void 0 : bs(t3, e, n);
}
function Li(t3, e, n, r3) {
  e in t3 ? t3[e] = n : Ln(t3, e, !r3 && M0.test(e) ? n ? "" : null : `${n}`);
}
function Xd(t3, e) {
  var n;
  if (typeof t3 == "string" && e === void 0) {
    const r3 = this[0];
    if (!r3 || !ge(r3))
      return;
    switch (t3) {
      case "style": {
        const a = this.css(), l3 = Object.keys(a);
        for (let u = 0; u < l3.length; u++)
          a[u] = l3[u];
        return a.length = l3.length, a;
      }
      case "tagName":
      case "nodeName":
        return r3.name.toUpperCase();
      case "href":
      case "src": {
        const a = (n = r3.attribs) === null || n === void 0 ? void 0 : n[t3];
        return typeof URL < "u" && (t3 === "href" && (r3.tagName === "a" || r3.tagName === "link") || t3 === "src" && (r3.tagName === "img" || r3.tagName === "iframe" || r3.tagName === "audio" || r3.tagName === "video" || r3.tagName === "source")) && a !== void 0 && this.options.baseURI ? new URL(a, this.options.baseURI).href : a;
      }
      case "innerText":
        return ps(r3);
      case "textContent":
        return $n(r3);
      case "outerHTML":
        return this.clone().wrap("<container />").parent().html();
      case "innerHTML":
        return this.html();
      default:
        return Ho(r3, t3, this.options.xmlMode);
    }
  }
  if (typeof t3 == "object" || e !== void 0) {
    if (typeof e == "function") {
      if (typeof t3 == "object")
        throw new TypeError("Bad combination of arguments.");
      return Ve(this, (r3, a) => {
        ge(r3) && Li(r3, t3, e.call(r3, a, Ho(r3, t3, this.options.xmlMode)), this.options.xmlMode);
      });
    }
    return Ve(this, (r3) => {
      if (ge(r3))
        if (typeof t3 == "object")
          for (const a of Object.keys(t3)) {
            const l3 = t3[a];
            Li(r3, a, l3, this.options.xmlMode);
          }
        else
          Li(r3, t3, e, this.options.xmlMode);
    });
  }
}
function jo(t3, e, n) {
  var r3;
  (r3 = t3.data) !== null && r3 !== void 0 || (t3.data = {}), typeof e == "object" ? Object.assign(t3.data, e) : typeof e == "string" && n !== void 0 && (t3.data[e] = n);
}
function Wd(t3) {
  for (const e of Object.keys(t3.attribs)) {
    if (!e.startsWith(r0))
      continue;
    const n = Vd(e.slice(r0.length));
    kr.call(t3.data, n) || (t3.data[n] = Jl(t3.attribs[e]));
  }
  return t3.data;
}
function Yd(t3, e) {
  const n = r0 + Ud(e), r3 = t3.data;
  if (kr.call(r3, e))
    return r3[e];
  if (kr.call(t3.attribs, n))
    return r3[e] = Jl(t3.attribs[n]);
}
function Jl(t3) {
  if (t3 === "null")
    return null;
  if (t3 === "true")
    return true;
  if (t3 === "false")
    return false;
  const e = Number(t3);
  if (t3 === String(e))
    return e;
  if (Gd.test(t3))
    try {
      return JSON.parse(t3);
    } catch {
    }
  return t3;
}
function Jd(t3, e) {
  var n;
  const r3 = this[0];
  if (!r3 || !ge(r3))
    return;
  const a = r3;
  return (n = a.data) !== null && n !== void 0 || (a.data = {}), t3 == null ? Wd(a) : typeof t3 == "object" || e !== void 0 ? (Ve(this, (l3) => {
    ge(l3) && (typeof t3 == "object" ? jo(l3, t3) : jo(l3, t3, e));
  }), this) : Yd(a, t3);
}
function Qd(t3) {
  const e = arguments.length === 0, n = this[0];
  if (!n || !ge(n))
    return e ? void 0 : this;
  switch (n.name) {
    case "textarea":
      return this.text(t3);
    case "select": {
      const r3 = this.find("option:selected");
      if (!e) {
        if (this.attr("multiple") == null && typeof t3 == "object")
          return this;
        this.find("option").removeAttr("selected");
        const a = typeof t3 == "object" ? t3 : [t3];
        for (const l3 of a)
          this.find(`option[value="${l3}"]`).attr("selected", "");
        return this;
      }
      return this.attr("multiple") ? r3.toArray().map((a) => xr(a.children)) : r3.attr("value");
    }
    case "input":
    case "option":
      return e ? this.attr("value") : this.attr("value", t3);
  }
}
function Ql(t3, e) {
  !t3.attribs || !kr.call(t3.attribs, e) || delete t3.attribs[e];
}
function ws(t3) {
  return t3 ? t3.trim().split(vr) : [];
}
function Zd(t3) {
  const e = ws(t3);
  for (const n of e)
    Ve(this, (r3) => {
      ge(r3) && Ql(r3, n);
    });
  return this;
}
function em(t3) {
  return this.toArray().some((e) => {
    const n = ge(e) && e.attribs.class;
    let r3 = -1;
    if (n && t3.length > 0)
      for (; (r3 = n.indexOf(t3, r3 + 1)) > -1; ) {
        const a = r3 + t3.length;
        if ((r3 === 0 || vr.test(n[r3 - 1])) && (a === n.length || vr.test(n[a])))
          return true;
      }
    return false;
  });
}
function Zl(t3) {
  if (typeof t3 == "function")
    return Ve(this, (r3, a) => {
      if (ge(r3)) {
        const l3 = r3.attribs.class || "";
        Zl.call([r3], t3.call(r3, a, l3));
      }
    });
  if (!t3 || typeof t3 != "string")
    return this;
  const e = t3.split(vr), n = this.length;
  for (let r3 = 0; r3 < n; r3++) {
    const a = this[r3];
    if (!ge(a))
      continue;
    const l3 = bs(a, "class", false);
    if (l3) {
      let u = ` ${l3} `;
      for (const f of e) {
        const p = `${f} `;
        u.includes(` ${p}`) || (u += p);
      }
      Ln(a, "class", u.trim());
    } else
      Ln(a, "class", e.join(" ").trim());
  }
  return this;
}
function ec(t3) {
  if (typeof t3 == "function")
    return Ve(this, (a, l3) => {
      ge(a) && ec.call([a], t3.call(a, l3, a.attribs.class || ""));
    });
  const e = ws(t3), n = e.length, r3 = arguments.length === 0;
  return Ve(this, (a) => {
    if (ge(a))
      if (r3)
        a.attribs.class = "";
      else {
        const l3 = ws(a.attribs.class);
        let u = false;
        for (let f = 0; f < n; f++) {
          const p = l3.indexOf(e[f]);
          p >= 0 && (l3.splice(p, 1), u = true, f--);
        }
        u && (a.attribs.class = l3.join(" "));
      }
  });
}
function tc(t3, e) {
  if (typeof t3 == "function")
    return Ve(this, (u, f) => {
      ge(u) && tc.call([u], t3.call(u, f, u.attribs.class || "", e), e);
    });
  if (!t3 || typeof t3 != "string")
    return this;
  const n = t3.split(vr), r3 = n.length, a = typeof e == "boolean" ? e ? 1 : -1 : 0, l3 = this.length;
  for (let u = 0; u < l3; u++) {
    const f = this[u];
    if (!ge(f))
      continue;
    const p = ws(f.attribs.class);
    for (let y = 0; y < r3; y++) {
      const v = p.indexOf(n[y]);
      a >= 0 && v < 0 ? p.push(n[y]) : a <= 0 && v >= 0 && p.splice(v, 1);
    }
    f.attribs.class = p.join(" ");
  }
  return this;
}
const tm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addClass: Zl,
  attr: Kd,
  data: Jd,
  hasClass: em,
  prop: Xd,
  removeAttr: Zd,
  removeClass: ec,
  toggleClass: tc,
  val: Qd
}, Symbol.toStringTag, { value: "Module" }));
var fe;
(function(t3) {
  t3.Attribute = "attribute", t3.Pseudo = "pseudo", t3.PseudoElement = "pseudo-element", t3.Tag = "tag", t3.Universal = "universal", t3.Adjacent = "adjacent", t3.Child = "child", t3.Descendant = "descendant", t3.Parent = "parent", t3.Sibling = "sibling", t3.ColumnCombinator = "column-combinator";
})(fe || (fe = {}));
var tt;
(function(t3) {
  t3.Any = "any", t3.Element = "element", t3.End = "end", t3.Equals = "equals", t3.Exists = "exists", t3.Hyphen = "hyphen", t3.Not = "not", t3.Start = "start";
})(tt || (tt = {}));
const Vo = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, nm = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, rm = /* @__PURE__ */ new Map([
  [126, tt.Element],
  [94, tt.Start],
  [36, tt.End],
  [42, tt.Any],
  [33, tt.Not],
  [124, tt.Hyphen]
]), sm = /* @__PURE__ */ new Set([
  "has",
  "not",
  "matches",
  "is",
  "where",
  "host",
  "host-context"
]);
function pr(t3) {
  switch (t3.type) {
    case fe.Adjacent:
    case fe.Child:
    case fe.Descendant:
    case fe.Parent:
    case fe.Sibling:
    case fe.ColumnCombinator:
      return true;
    default:
      return false;
  }
}
const im = /* @__PURE__ */ new Set(["contains", "icontains"]);
function am(t3, e, n) {
  const r3 = parseInt(e, 16) - 65536;
  return r3 !== r3 || n ? e : r3 < 0 ? (
    // BMP codepoint
    String.fromCharCode(r3 + 65536)
  ) : (
    // Supplemental Plane codepoint (surrogate pair)
    String.fromCharCode(r3 >> 10 | 55296, r3 & 1023 | 56320)
  );
}
function lr(t3) {
  return t3.replace(nm, am);
}
function qi(t3) {
  return t3 === 39 || t3 === 34;
}
function Uo(t3) {
  return t3 === 32 || t3 === 9 || t3 === 10 || t3 === 12 || t3 === 13;
}
function Cs(t3) {
  const e = [], n = nc(e, `${t3}`, 0);
  if (n < t3.length)
    throw new Error(`Unmatched selector: ${t3.slice(n)}`);
  return e;
}
function nc(t3, e, n) {
  let r3 = [];
  function a(_) {
    const C = e.slice(n + _).match(Vo);
    if (!C)
      throw new Error(`Expected name, found ${e.slice(n)}`);
    const [S] = C;
    return n += _ + S.length, lr(S);
  }
  function l3(_) {
    for (n += _; n < e.length && Uo(e.charCodeAt(n)); )
      n++;
  }
  function u() {
    n += 1;
    const _ = n;
    let C = 1;
    for (; C > 0 && n < e.length; n++)
      e.charCodeAt(n) === 40 && !f(n) ? C++ : e.charCodeAt(n) === 41 && !f(n) && C--;
    if (C)
      throw new Error("Parenthesis not matched");
    return lr(e.slice(_, n - 1));
  }
  function f(_) {
    let C = 0;
    for (; e.charCodeAt(--_) === 92; )
      C++;
    return (C & 1) === 1;
  }
  function p() {
    if (r3.length > 0 && pr(r3[r3.length - 1]))
      throw new Error("Did not expect successive traversals.");
  }
  function y(_) {
    if (r3.length > 0 && r3[r3.length - 1].type === fe.Descendant) {
      r3[r3.length - 1].type = _;
      return;
    }
    p(), r3.push({ type: _ });
  }
  function v(_, C) {
    r3.push({
      type: fe.Attribute,
      name: _,
      action: C,
      value: a(1),
      namespace: null,
      ignoreCase: "quirks"
    });
  }
  function T() {
    if (r3.length && r3[r3.length - 1].type === fe.Descendant && r3.pop(), r3.length === 0)
      throw new Error("Empty sub-selector");
    t3.push(r3);
  }
  if (l3(0), e.length === n)
    return n;
  e:
    for (; n < e.length; ) {
      const _ = e.charCodeAt(n);
      switch (_) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
          (r3.length === 0 || r3[0].type !== fe.Descendant) && (p(), r3.push({ type: fe.Descendant })), l3(1);
          break;
        }
        case 62: {
          y(fe.Child), l3(1);
          break;
        }
        case 60: {
          y(fe.Parent), l3(1);
          break;
        }
        case 126: {
          y(fe.Sibling), l3(1);
          break;
        }
        case 43: {
          y(fe.Adjacent), l3(1);
          break;
        }
        case 46: {
          v("class", tt.Element);
          break;
        }
        case 35: {
          v("id", tt.Equals);
          break;
        }
        case 91: {
          l3(1);
          let C, S = null;
          e.charCodeAt(n) === 124 ? C = a(1) : e.startsWith("*|", n) ? (S = "*", C = a(2)) : (C = a(0), e.charCodeAt(n) === 124 && e.charCodeAt(n + 1) !== 61 && (S = C, C = a(1))), l3(0);
          let N = tt.Exists;
          const O = rm.get(e.charCodeAt(n));
          if (O) {
            if (N = O, e.charCodeAt(n + 1) !== 61)
              throw new Error("Expected `=`");
            l3(2);
          } else
            e.charCodeAt(n) === 61 && (N = tt.Equals, l3(1));
          let I3 = "", F = null;
          if (N !== "exists") {
            if (qi(e.charCodeAt(n))) {
              const V = e.charCodeAt(n);
              let W = n + 1;
              for (; W < e.length && (e.charCodeAt(W) !== V || f(W)); )
                W += 1;
              if (e.charCodeAt(W) !== V)
                throw new Error("Attribute value didn't end");
              I3 = lr(e.slice(n + 1, W)), n = W + 1;
            } else {
              const V = n;
              for (; n < e.length && (!Uo(e.charCodeAt(n)) && e.charCodeAt(n) !== 93 || f(n)); )
                n += 1;
              I3 = lr(e.slice(V, n));
            }
            l3(0);
            const j = e.charCodeAt(n) | 32;
            j === 115 ? (F = false, l3(1)) : j === 105 && (F = true, l3(1));
          }
          if (e.charCodeAt(n) !== 93)
            throw new Error("Attribute selector didn't terminate");
          n += 1;
          const H = {
            type: fe.Attribute,
            name: C,
            action: N,
            value: I3,
            namespace: S,
            ignoreCase: F
          };
          r3.push(H);
          break;
        }
        case 58: {
          if (e.charCodeAt(n + 1) === 58) {
            r3.push({
              type: fe.PseudoElement,
              name: a(2).toLowerCase(),
              data: e.charCodeAt(n) === 40 ? u() : null
            });
            continue;
          }
          const C = a(1).toLowerCase();
          let S = null;
          if (e.charCodeAt(n) === 40)
            if (sm.has(C)) {
              if (qi(e.charCodeAt(n + 1)))
                throw new Error(`Pseudo-selector ${C} cannot be quoted`);
              if (S = [], n = nc(S, e, n + 1), e.charCodeAt(n) !== 41)
                throw new Error(`Missing closing parenthesis in :${C} (${e})`);
              n += 1;
            } else {
              if (S = u(), im.has(C)) {
                const N = S.charCodeAt(0);
                N === S.charCodeAt(S.length - 1) && qi(N) && (S = S.slice(1, -1));
              }
              S = lr(S);
            }
          r3.push({ type: fe.Pseudo, name: C, data: S });
          break;
        }
        case 44: {
          T(), r3 = [], l3(1);
          break;
        }
        default: {
          if (e.startsWith("/*", n)) {
            const N = e.indexOf("*/", n + 2);
            if (N < 0)
              throw new Error("Comment was not terminated");
            n = N + 2, r3.length === 0 && l3(0);
            break;
          }
          let C = null, S;
          if (_ === 42)
            n += 1, S = "*";
          else if (_ === 124) {
            if (S = "", e.charCodeAt(n + 1) === 124) {
              y(fe.ColumnCombinator), l3(2);
              break;
            }
          } else if (Vo.test(e.slice(n)))
            S = a(0);
          else
            break e;
          e.charCodeAt(n) === 124 && e.charCodeAt(n + 1) !== 124 && (C = S, e.charCodeAt(n + 1) === 42 ? (S = "*", n += 2) : S = a(1)), r3.push(S === "*" ? { type: fe.Universal, namespace: C } : { type: fe.Tag, name: S, namespace: C });
        }
      }
    }
  return T(), n;
}
function om(t3) {
  return t3 && t3.__esModule && Object.prototype.hasOwnProperty.call(t3, "default") ? t3.default : t3;
}
var Ri, Go;
function lm() {
  return Go || (Go = 1, Ri = {
    trueFunc: function() {
      return true;
    },
    falseFunc: function() {
      return false;
    }
  }), Ri;
}
var xs = lm();
const Ae = /* @__PURE__ */ om(xs), rc = /* @__PURE__ */ new Map([
  [fe.Universal, 50],
  [fe.Tag, 30],
  [fe.Attribute, 1],
  [fe.Pseudo, 0]
]);
function E0(t3) {
  return !rc.has(t3.type);
}
const cm = /* @__PURE__ */ new Map([
  [tt.Exists, 10],
  [tt.Equals, 8],
  [tt.Not, 7],
  [tt.Start, 6],
  [tt.End, 6],
  [tt.Any, 5]
]);
function um(t3) {
  const e = t3.map(sc);
  for (let n = 1; n < t3.length; n++) {
    const r3 = e[n];
    if (!(r3 < 0))
      for (let a = n - 1; a >= 0 && r3 < e[a]; a--) {
        const l3 = t3[a + 1];
        t3[a + 1] = t3[a], t3[a] = l3, e[a + 1] = e[a], e[a] = r3;
      }
  }
}
function sc(t3) {
  var e, n;
  let r3 = (e = rc.get(t3.type)) !== null && e !== void 0 ? e : -1;
  return t3.type === fe.Attribute ? (r3 = (n = cm.get(t3.action)) !== null && n !== void 0 ? n : 4, t3.action === tt.Equals && t3.name === "id" && (r3 = 9), t3.ignoreCase && (r3 >>= 1)) : t3.type === fe.Pseudo && (t3.data ? t3.name === "has" || t3.name === "contains" ? r3 = 0 : Array.isArray(t3.data) ? (r3 = Math.min(...t3.data.map((a) => Math.min(...a.map(sc)))), r3 < 0 && (r3 = 0)) : r3 = 2 : r3 = 3), r3;
}
const hm = /[-[\]{}()*+?.,\\^$|#\s]/g;
function Ko(t3) {
  return t3.replace(hm, "\\$&");
}
const fm = /* @__PURE__ */ new Set([
  "accept",
  "accept-charset",
  "align",
  "alink",
  "axis",
  "bgcolor",
  "charset",
  "checked",
  "clear",
  "codetype",
  "color",
  "compact",
  "declare",
  "defer",
  "dir",
  "direction",
  "disabled",
  "enctype",
  "face",
  "frame",
  "hreflang",
  "http-equiv",
  "lang",
  "language",
  "link",
  "media",
  "method",
  "multiple",
  "nohref",
  "noresize",
  "noshade",
  "nowrap",
  "readonly",
  "rel",
  "rev",
  "rules",
  "scope",
  "scrolling",
  "selected",
  "shape",
  "target",
  "text",
  "type",
  "valign",
  "valuetype",
  "vlink"
]);
function mn(t3, e) {
  return typeof t3.ignoreCase == "boolean" ? t3.ignoreCase : t3.ignoreCase === "quirks" ? !!e.quirksMode : !e.xmlMode && fm.has(t3.name);
}
const dm = {
  equals(t3, e, n) {
    const { adapter: r3 } = n, { name: a } = e;
    let { value: l3 } = e;
    return mn(e, n) ? (l3 = l3.toLowerCase(), (u) => {
      const f = r3.getAttributeValue(u, a);
      return f != null && f.length === l3.length && f.toLowerCase() === l3 && t3(u);
    }) : (u) => r3.getAttributeValue(u, a) === l3 && t3(u);
  },
  hyphen(t3, e, n) {
    const { adapter: r3 } = n, { name: a } = e;
    let { value: l3 } = e;
    const u = l3.length;
    return mn(e, n) ? (l3 = l3.toLowerCase(), function(p) {
      const y = r3.getAttributeValue(p, a);
      return y != null && (y.length === u || y.charAt(u) === "-") && y.substr(0, u).toLowerCase() === l3 && t3(p);
    }) : function(p) {
      const y = r3.getAttributeValue(p, a);
      return y != null && (y.length === u || y.charAt(u) === "-") && y.substr(0, u) === l3 && t3(p);
    };
  },
  element(t3, e, n) {
    const { adapter: r3 } = n, { name: a, value: l3 } = e;
    if (/\s/.test(l3))
      return Ae.falseFunc;
    const u = new RegExp(`(?:^|\\s)${Ko(l3)}(?:$|\\s)`, mn(e, n) ? "i" : "");
    return function(p) {
      const y = r3.getAttributeValue(p, a);
      return y != null && y.length >= l3.length && u.test(y) && t3(p);
    };
  },
  exists(t3, { name: e }, { adapter: n }) {
    return (r3) => n.hasAttrib(r3, e) && t3(r3);
  },
  start(t3, e, n) {
    const { adapter: r3 } = n, { name: a } = e;
    let { value: l3 } = e;
    const u = l3.length;
    return u === 0 ? Ae.falseFunc : mn(e, n) ? (l3 = l3.toLowerCase(), (f) => {
      const p = r3.getAttributeValue(f, a);
      return p != null && p.length >= u && p.substr(0, u).toLowerCase() === l3 && t3(f);
    }) : (f) => {
      var p;
      return !!(!((p = r3.getAttributeValue(f, a)) === null || p === void 0) && p.startsWith(l3)) && t3(f);
    };
  },
  end(t3, e, n) {
    const { adapter: r3 } = n, { name: a } = e;
    let { value: l3 } = e;
    const u = -l3.length;
    return u === 0 ? Ae.falseFunc : mn(e, n) ? (l3 = l3.toLowerCase(), (f) => {
      var p;
      return ((p = r3.getAttributeValue(f, a)) === null || p === void 0 ? void 0 : p.substr(u).toLowerCase()) === l3 && t3(f);
    }) : (f) => {
      var p;
      return !!(!((p = r3.getAttributeValue(f, a)) === null || p === void 0) && p.endsWith(l3)) && t3(f);
    };
  },
  any(t3, e, n) {
    const { adapter: r3 } = n, { name: a, value: l3 } = e;
    if (l3 === "")
      return Ae.falseFunc;
    if (mn(e, n)) {
      const u = new RegExp(Ko(l3), "i");
      return function(p) {
        const y = r3.getAttributeValue(p, a);
        return y != null && y.length >= l3.length && u.test(y) && t3(p);
      };
    }
    return (u) => {
      var f;
      return !!(!((f = r3.getAttributeValue(u, a)) === null || f === void 0) && f.includes(l3)) && t3(u);
    };
  },
  not(t3, e, n) {
    const { adapter: r3 } = n, { name: a } = e;
    let { value: l3 } = e;
    return l3 === "" ? (u) => !!r3.getAttributeValue(u, a) && t3(u) : mn(e, n) ? (l3 = l3.toLowerCase(), (u) => {
      const f = r3.getAttributeValue(u, a);
      return (f == null || f.length !== l3.length || f.toLowerCase() !== l3) && t3(u);
    }) : (u) => r3.getAttributeValue(u, a) !== l3 && t3(u);
  }
}, mm = /* @__PURE__ */ new Set([9, 10, 12, 13, 32]), Xo = 48, pm = 57;
function gm(t3) {
  if (t3 = t3.trim().toLowerCase(), t3 === "even")
    return [2, 0];
  if (t3 === "odd")
    return [2, 1];
  let e = 0, n = 0, r3 = l3(), a = u();
  if (e < t3.length && t3.charAt(e) === "n" && (e++, n = r3 * (a ?? 1), f(), e < t3.length ? (r3 = l3(), f(), a = u()) : r3 = a = 0), a === null || e < t3.length)
    throw new Error(`n-th rule couldn't be parsed ('${t3}')`);
  return [n, r3 * a];
  function l3() {
    return t3.charAt(e) === "-" ? (e++, -1) : (t3.charAt(e) === "+" && e++, 1);
  }
  function u() {
    const p = e;
    let y = 0;
    for (; e < t3.length && t3.charCodeAt(e) >= Xo && t3.charCodeAt(e) <= pm; )
      y = y * 10 + (t3.charCodeAt(e) - Xo), e++;
    return e === p ? null : y;
  }
  function f() {
    for (; e < t3.length && mm.has(t3.charCodeAt(e)); )
      e++;
  }
}
function ym(t3) {
  const e = t3[0], n = t3[1] - 1;
  if (n < 0 && e <= 0)
    return Ae.falseFunc;
  if (e === -1)
    return (l3) => l3 <= n;
  if (e === 0)
    return (l3) => l3 === n;
  if (e === 1)
    return n < 0 ? Ae.trueFunc : (l3) => l3 >= n;
  const r3 = Math.abs(e), a = (n % r3 + r3) % r3;
  return e > 1 ? (l3) => l3 >= n && l3 % r3 === a : (l3) => l3 <= n && l3 % r3 === a;
}
function es(t3) {
  return ym(gm(t3));
}
function ts(t3, e) {
  return (n) => {
    const r3 = e.getParent(n);
    return r3 != null && e.isTag(r3) && t3(n);
  };
}
const s0 = {
  contains(t3, e, { adapter: n }) {
    return function(a) {
      return t3(a) && n.getText(a).includes(e);
    };
  },
  icontains(t3, e, { adapter: n }) {
    const r3 = e.toLowerCase();
    return function(l3) {
      return t3(l3) && n.getText(l3).toLowerCase().includes(r3);
    };
  },
  // Location specific methods
  "nth-child"(t3, e, { adapter: n, equals: r3 }) {
    const a = es(e);
    return a === Ae.falseFunc ? Ae.falseFunc : a === Ae.trueFunc ? ts(t3, n) : function(u) {
      const f = n.getSiblings(u);
      let p = 0;
      for (let y = 0; y < f.length && !r3(u, f[y]); y++)
        n.isTag(f[y]) && p++;
      return a(p) && t3(u);
    };
  },
  "nth-last-child"(t3, e, { adapter: n, equals: r3 }) {
    const a = es(e);
    return a === Ae.falseFunc ? Ae.falseFunc : a === Ae.trueFunc ? ts(t3, n) : function(u) {
      const f = n.getSiblings(u);
      let p = 0;
      for (let y = f.length - 1; y >= 0 && !r3(u, f[y]); y--)
        n.isTag(f[y]) && p++;
      return a(p) && t3(u);
    };
  },
  "nth-of-type"(t3, e, { adapter: n, equals: r3 }) {
    const a = es(e);
    return a === Ae.falseFunc ? Ae.falseFunc : a === Ae.trueFunc ? ts(t3, n) : function(u) {
      const f = n.getSiblings(u);
      let p = 0;
      for (let y = 0; y < f.length; y++) {
        const v = f[y];
        if (r3(u, v))
          break;
        n.isTag(v) && n.getName(v) === n.getName(u) && p++;
      }
      return a(p) && t3(u);
    };
  },
  "nth-last-of-type"(t3, e, { adapter: n, equals: r3 }) {
    const a = es(e);
    return a === Ae.falseFunc ? Ae.falseFunc : a === Ae.trueFunc ? ts(t3, n) : function(u) {
      const f = n.getSiblings(u);
      let p = 0;
      for (let y = f.length - 1; y >= 0; y--) {
        const v = f[y];
        if (r3(u, v))
          break;
        n.isTag(v) && n.getName(v) === n.getName(u) && p++;
      }
      return a(p) && t3(u);
    };
  },
  // TODO determine the actual root element
  root(t3, e, { adapter: n }) {
    return (r3) => {
      const a = n.getParent(r3);
      return (a == null || !n.isTag(a)) && t3(r3);
    };
  },
  scope(t3, e, n, r3) {
    const { equals: a } = n;
    return !r3 || r3.length === 0 ? s0.root(t3, e, n) : r3.length === 1 ? (l3) => a(r3[0], l3) && t3(l3) : (l3) => r3.includes(l3) && t3(l3);
  },
  hover: $i("isHovered"),
  visited: $i("isVisited"),
  active: $i("isActive")
};
function $i(t3) {
  return function(n, r3, { adapter: a }) {
    const l3 = a[t3];
    return typeof l3 != "function" ? Ae.falseFunc : function(f) {
      return l3(f) && n(f);
    };
  };
}
const Wo = {
  empty(t3, { adapter: e }) {
    return !e.getChildren(t3).some((n) => (
      // FIXME: `getText` call is potentially expensive.
      e.isTag(n) || e.getText(n) !== ""
    ));
  },
  "first-child"(t3, { adapter: e, equals: n }) {
    if (e.prevElementSibling)
      return e.prevElementSibling(t3) == null;
    const r3 = e.getSiblings(t3).find((a) => e.isTag(a));
    return r3 != null && n(t3, r3);
  },
  "last-child"(t3, { adapter: e, equals: n }) {
    const r3 = e.getSiblings(t3);
    for (let a = r3.length - 1; a >= 0; a--) {
      if (n(t3, r3[a]))
        return true;
      if (e.isTag(r3[a]))
        break;
    }
    return false;
  },
  "first-of-type"(t3, { adapter: e, equals: n }) {
    const r3 = e.getSiblings(t3), a = e.getName(t3);
    for (let l3 = 0; l3 < r3.length; l3++) {
      const u = r3[l3];
      if (n(t3, u))
        return true;
      if (e.isTag(u) && e.getName(u) === a)
        break;
    }
    return false;
  },
  "last-of-type"(t3, { adapter: e, equals: n }) {
    const r3 = e.getSiblings(t3), a = e.getName(t3);
    for (let l3 = r3.length - 1; l3 >= 0; l3--) {
      const u = r3[l3];
      if (n(t3, u))
        return true;
      if (e.isTag(u) && e.getName(u) === a)
        break;
    }
    return false;
  },
  "only-of-type"(t3, { adapter: e, equals: n }) {
    const r3 = e.getName(t3);
    return e.getSiblings(t3).every((a) => n(t3, a) || !e.isTag(a) || e.getName(a) !== r3);
  },
  "only-child"(t3, { adapter: e, equals: n }) {
    return e.getSiblings(t3).every((r3) => n(t3, r3) || !e.isTag(r3));
  }
};
function Yo(t3, e, n, r3) {
  if (n === null) {
    if (t3.length > r3)
      throw new Error(`Pseudo-class :${e} requires an argument`);
  } else if (t3.length === r3)
    throw new Error(`Pseudo-class :${e} doesn't have any arguments`);
}
const bm = {
  // Links
  "any-link": ":is(a, area, link)[href]",
  link: ":any-link:not(:visited)",
  // Forms
  // https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
  disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
  enabled: ":not(:disabled)",
  checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
  required: ":is(input, select, textarea)[required]",
  optional: ":is(input, select, textarea):not([required])",
  // JQuery extensions
  // https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-selectedness
  selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
  checkbox: "[type=checkbox]",
  file: "[type=file]",
  password: "[type=password]",
  radio: "[type=radio]",
  reset: "[type=reset]",
  image: "[type=image]",
  submit: "[type=submit]",
  parent: ":not(:empty)",
  header: ":is(h1, h2, h3, h4, h5, h6)",
  button: ":is(button, input[type=button])",
  input: ":is(input, textarea, select, button)",
  text: "input:is(:not([type!='']), [type=text])"
}, ic = {};
function wm(t3, e) {
  return t3 === Ae.falseFunc ? Ae.falseFunc : (n) => e.isTag(n) && t3(n);
}
function ac(t3, e) {
  const n = e.getSiblings(t3);
  if (n.length <= 1)
    return [];
  const r3 = n.indexOf(t3);
  return r3 < 0 || r3 === n.length - 1 ? [] : n.slice(r3 + 1).filter(e.isTag);
}
function i0(t3) {
  return {
    xmlMode: !!t3.xmlMode,
    lowerCaseAttributeNames: !!t3.lowerCaseAttributeNames,
    lowerCaseTags: !!t3.lowerCaseTags,
    quirksMode: !!t3.quirksMode,
    cacheResults: !!t3.cacheResults,
    pseudos: t3.pseudos,
    adapter: t3.adapter,
    equals: t3.equals
  };
}
const Pi = (t3, e, n, r3, a) => {
  const l3 = a(e, i0(n), r3);
  return l3 === Ae.trueFunc ? t3 : l3 === Ae.falseFunc ? Ae.falseFunc : (u) => l3(u) && t3(u);
}, Fi = {
  is: Pi,
  /**
   * `:matches` and `:where` are aliases for `:is`.
   */
  matches: Pi,
  where: Pi,
  not(t3, e, n, r3, a) {
    const l3 = a(e, i0(n), r3);
    return l3 === Ae.falseFunc ? t3 : l3 === Ae.trueFunc ? Ae.falseFunc : (u) => !l3(u) && t3(u);
  },
  has(t3, e, n, r3, a) {
    const { adapter: l3 } = n, u = i0(n);
    u.relativeSelector = true;
    const f = e.some((v) => v.some(E0)) ? (
      // Used as a placeholder. Will be replaced with the actual element.
      [ic]
    ) : void 0, p = a(e, u, f);
    if (p === Ae.falseFunc)
      return Ae.falseFunc;
    const y = wm(p, l3);
    if (f && p !== Ae.trueFunc) {
      const { shouldTestNextSiblings: v = false } = p;
      return (T) => {
        if (!t3(T))
          return false;
        f[0] = T;
        const _ = l3.getChildren(T), C = v ? [..._, ...ac(T, l3)] : _;
        return l3.existsOne(y, C);
      };
    }
    return (v) => t3(v) && l3.existsOne(y, l3.getChildren(v));
  }
};
function xm(t3, e, n, r3, a) {
  var l3;
  const { name: u, data: f } = e;
  if (Array.isArray(f)) {
    if (!(u in Fi))
      throw new Error(`Unknown pseudo-class :${u}(${f})`);
    return Fi[u](t3, f, n, r3, a);
  }
  const p = (l3 = n.pseudos) === null || l3 === void 0 ? void 0 : l3[u], y = typeof p == "string" ? p : bm[u];
  if (typeof y == "string") {
    if (f != null)
      throw new Error(`Pseudo ${u} doesn't have any arguments`);
    const v = Cs(y);
    return Fi.is(t3, v, n, r3, a);
  }
  if (typeof p == "function")
    return Yo(p, u, f, 1), (v) => p(v, f) && t3(v);
  if (u in s0)
    return s0[u](t3, f, n, r3);
  if (u in Wo) {
    const v = Wo[u];
    return Yo(v, u, f, 2), (T) => v(T, n, f) && t3(T);
  }
  throw new Error(`Unknown pseudo-class :${u}`);
}
function Hi(t3, e) {
  const n = e.getParent(t3);
  return n && e.isTag(n) ? n : null;
}
function km(t3, e, n, r3, a) {
  const { adapter: l3, equals: u } = n;
  switch (e.type) {
    case fe.PseudoElement:
      throw new Error("Pseudo-elements are not supported by css-select");
    case fe.ColumnCombinator:
      throw new Error("Column combinators are not yet supported by css-select");
    case fe.Attribute: {
      if (e.namespace != null)
        throw new Error("Namespaced attributes are not yet supported by css-select");
      return (!n.xmlMode || n.lowerCaseAttributeNames) && (e.name = e.name.toLowerCase()), dm[e.action](t3, e, n);
    }
    case fe.Pseudo:
      return xm(t3, e, n, r3, a);
    case fe.Tag: {
      if (e.namespace != null)
        throw new Error("Namespaced tag names are not yet supported by css-select");
      let { name: f } = e;
      return (!n.xmlMode || n.lowerCaseTags) && (f = f.toLowerCase()), function(y) {
        return l3.getName(y) === f && t3(y);
      };
    }
    case fe.Descendant: {
      if (n.cacheResults === false || typeof WeakSet > "u")
        return function(y) {
          let v = y;
          for (; v = Hi(v, l3); )
            if (t3(v))
              return true;
          return false;
        };
      const f = /* @__PURE__ */ new WeakSet();
      return function(y) {
        let v = y;
        for (; v = Hi(v, l3); )
          if (!f.has(v)) {
            if (l3.isTag(v) && t3(v))
              return true;
            f.add(v);
          }
        return false;
      };
    }
    case "_flexibleDescendant":
      return function(p) {
        let y = p;
        do
          if (t3(y))
            return true;
        while (y = Hi(y, l3));
        return false;
      };
    case fe.Parent:
      return function(p) {
        return l3.getChildren(p).some((y) => l3.isTag(y) && t3(y));
      };
    case fe.Child:
      return function(p) {
        const y = l3.getParent(p);
        return y != null && l3.isTag(y) && t3(y);
      };
    case fe.Sibling:
      return function(p) {
        const y = l3.getSiblings(p);
        for (let v = 0; v < y.length; v++) {
          const T = y[v];
          if (u(p, T))
            break;
          if (l3.isTag(T) && t3(T))
            return true;
        }
        return false;
      };
    case fe.Adjacent:
      return l3.prevElementSibling ? function(p) {
        const y = l3.prevElementSibling(p);
        return y != null && t3(y);
      } : function(p) {
        const y = l3.getSiblings(p);
        let v;
        for (let T = 0; T < y.length; T++) {
          const _ = y[T];
          if (u(p, _))
            break;
          l3.isTag(_) && (v = _);
        }
        return !!v && t3(v);
      };
    case fe.Universal: {
      if (e.namespace != null && e.namespace !== "*")
        throw new Error("Namespaced universal selectors are not yet supported by css-select");
      return t3;
    }
  }
}
function oc(t3) {
  return t3.type === fe.Pseudo && (t3.name === "scope" || Array.isArray(t3.data) && t3.data.some((e) => e.some(oc)));
}
const vm = { type: fe.Descendant }, Sm = {
  type: "_flexibleDescendant"
}, Am = {
  type: fe.Pseudo,
  name: "scope",
  data: null
};
function Tm(t3, { adapter: e }, n) {
  const r3 = !!(n != null && n.every((a) => {
    const l3 = e.isTag(a) && e.getParent(a);
    return a === ic || l3 && e.isTag(l3);
  }));
  for (const a of t3) {
    if (!(a.length > 0 && E0(a[0]) && a[0].type !== fe.Descendant))
      if (r3 && !a.some(oc))
        a.unshift(vm);
      else
        continue;
    a.unshift(Am);
  }
}
function lc(t3, e, n) {
  var r3;
  t3.forEach(um), n = (r3 = e.context) !== null && r3 !== void 0 ? r3 : n;
  const a = Array.isArray(n), l3 = n && (Array.isArray(n) ? n : [n]);
  if (e.relativeSelector !== false)
    Tm(t3, e, l3);
  else if (t3.some((p) => p.length > 0 && E0(p[0])))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
  let u = false;
  const f = t3.map((p) => {
    if (p.length >= 2) {
      const [y, v] = p;
      y.type !== fe.Pseudo || y.name !== "scope" || (a && v.type === fe.Descendant ? p[1] = Sm : (v.type === fe.Adjacent || v.type === fe.Sibling) && (u = true));
    }
    return Nm(p, e, l3);
  }).reduce(Mm, Ae.falseFunc);
  return f.shouldTestNextSiblings = u, f;
}
function Nm(t3, e, n) {
  var r3;
  return t3.reduce((a, l3) => a === Ae.falseFunc ? Ae.falseFunc : km(a, l3, e, n, lc), (r3 = e.rootFunc) !== null && r3 !== void 0 ? r3 : Ae.trueFunc);
}
function Mm(t3, e) {
  return e === Ae.falseFunc || t3 === Ae.trueFunc ? t3 : t3 === Ae.falseFunc || e === Ae.trueFunc ? e : function(r3) {
    return t3(r3) || e(r3);
  };
}
const cc = (t3, e) => t3 === e, Em = {
  adapter: _s,
  equals: cc
};
function _m(t3) {
  var e, n, r3, a;
  const l3 = t3 ?? Em;
  return (e = l3.adapter) !== null && e !== void 0 || (l3.adapter = _s), (n = l3.equals) !== null && n !== void 0 || (l3.equals = (a = (r3 = l3.adapter) === null || r3 === void 0 ? void 0 : r3.equals) !== null && a !== void 0 ? a : cc), l3;
}
function Cm(t3) {
  return function(n, r3, a) {
    const l3 = _m(r3);
    return t3(n, l3, a);
  };
}
const _0 = Cm(lc);
function uc(t3, e, n = false) {
  return n && (t3 = Im(t3, e)), Array.isArray(t3) ? e.removeSubsets(t3) : e.getChildren(t3);
}
function Im(t3, e) {
  const n = Array.isArray(t3) ? t3.slice(0) : [t3], r3 = n.length;
  for (let a = 0; a < r3; a++) {
    const l3 = ac(n[a], e);
    n.push(...l3);
  }
  return n;
}
const zm = /* @__PURE__ */ new Set([
  "first",
  "last",
  "eq",
  "gt",
  "nth",
  "lt",
  "even",
  "odd"
]);
function ks(t3) {
  return t3.type !== "pseudo" ? false : zm.has(t3.name) ? true : t3.name === "not" && Array.isArray(t3.data) ? t3.data.some((e) => e.some(ks)) : false;
}
function Om(t3, e, n) {
  const r3 = e != null ? parseInt(e, 10) : NaN;
  switch (t3) {
    case "first":
      return 1;
    case "nth":
    case "eq":
      return isFinite(r3) ? r3 >= 0 ? r3 + 1 : 1 / 0 : 0;
    case "lt":
      return isFinite(r3) ? r3 >= 0 ? Math.min(r3, n) : 1 / 0 : 0;
    case "gt":
      return isFinite(r3) ? 1 / 0 : 0;
    case "odd":
      return 2 * n;
    case "even":
      return 2 * n - 1;
    case "last":
    case "not":
      return 1 / 0;
  }
}
function Bm(t3) {
  for (; t3.parent; )
    t3 = t3.parent;
  return t3;
}
function C0(t3) {
  const e = [], n = [];
  for (const r3 of t3)
    r3.some(ks) ? e.push(r3) : n.push(r3);
  return [n, e];
}
const Dm = {
  type: fe.Universal,
  namespace: null
}, Lm = {
  type: fe.Pseudo,
  name: "scope",
  data: null
};
function hc(t3, e, n = {}) {
  return fc([t3], e, n);
}
function fc(t3, e, n = {}) {
  if (typeof e == "function")
    return t3.some(e);
  const [r3, a] = C0(Cs(e));
  return r3.length > 0 && t3.some(_0(r3, n)) || a.some((l3) => pc(l3, t3, n).length > 0);
}
function qm(t3, e, n, r3) {
  const a = typeof n == "string" ? parseInt(n, 10) : NaN;
  switch (t3) {
    case "first":
    case "lt":
      return e;
    case "last":
      return e.length > 0 ? [e[e.length - 1]] : e;
    case "nth":
    case "eq":
      return isFinite(a) && Math.abs(a) < e.length ? [a < 0 ? e[e.length + a] : e[a]] : [];
    case "gt":
      return isFinite(a) ? e.slice(a + 1) : [];
    case "even":
      return e.filter((l3, u) => u % 2 === 0);
    case "odd":
      return e.filter((l3, u) => u % 2 === 1);
    case "not": {
      const l3 = new Set(mc(n, e, r3));
      return e.filter((u) => !l3.has(u));
    }
  }
}
function dc(t3, e, n = {}) {
  return mc(Cs(t3), e, n);
}
function mc(t3, e, n) {
  if (e.length === 0)
    return [];
  const [r3, a] = C0(t3);
  let l3;
  if (r3.length) {
    const u = o0(e, r3, n);
    if (a.length === 0)
      return u;
    u.length && (l3 = new Set(u));
  }
  for (let u = 0; u < a.length && (l3 == null ? void 0 : l3.size) !== e.length; u++) {
    const f = a[u];
    if ((l3 ? e.filter((v) => ge(v) && !l3.has(v)) : e).length === 0)
      break;
    const y = pc(f, e, n);
    if (y.length)
      if (l3)
        y.forEach((v) => l3.add(v));
      else {
        if (u === a.length - 1)
          return y;
        l3 = new Set(y);
      }
  }
  return typeof l3 < "u" ? l3.size === e.length ? e : (
    // Filter elements to preserve order
    e.filter((u) => l3.has(u))
  ) : [];
}
function pc(t3, e, n) {
  var r3;
  if (t3.some(pr)) {
    const a = (r3 = n.root) !== null && r3 !== void 0 ? r3 : Bm(e[0]), l3 = { ...n, context: e, relativeSelector: false };
    return t3.push(Lm), vs(a, t3, l3, true, e.length);
  }
  return vs(e, t3, n, false, e.length);
}
function Rm(t3, e, n = {}, r3 = 1 / 0) {
  if (typeof t3 == "function")
    return gc(e, t3);
  const [a, l3] = C0(Cs(t3)), u = l3.map((f) => vs(e, f, n, true, r3));
  return a.length && u.push(a0(e, a, n, r3)), u.length === 0 ? [] : u.length === 1 ? u[0] : jn(u.reduce((f, p) => [...f, ...p]));
}
function vs(t3, e, n, r3, a) {
  const l3 = e.findIndex(ks), u = e.slice(0, l3), f = e[l3], p = e.length - 1 === l3 ? a : 1 / 0, y = Om(f.name, f.data, p);
  if (y === 0)
    return [];
  const T = (u.length === 0 && !Array.isArray(t3) ? Ms(t3).filter(ge) : u.length === 0 ? (Array.isArray(t3) ? t3 : [t3]).filter(ge) : r3 || u.some(pr) ? a0(t3, [u], n, y) : o0(t3, [u], n)).slice(0, y);
  let _ = qm(f.name, T, f.data, n);
  if (_.length === 0 || e.length === l3 + 1)
    return _;
  const C = e.slice(l3 + 1), S = C.some(pr);
  if (S) {
    if (pr(C[0])) {
      const { type: N } = C[0];
      (N === fe.Sibling || N === fe.Adjacent) && (_ = uc(_, _s, true)), C.unshift(Dm);
    }
    n = {
      ...n,
      // Avoid absolutizing the selector
      relativeSelector: false,
      /*
       * Add a custom root func, to make sure traversals don't match elements
       * that aren't a part of the considered tree.
       */
      rootFunc: (N) => _.includes(N)
    };
  } else
    n.rootFunc && n.rootFunc !== xs.trueFunc && (n = { ...n, rootFunc: xs.trueFunc });
  return C.some(ks) ? vs(_, C, n, false, a) : S ? (
    // Query existing elements to resolve traversal.
    a0(_, [C], n, a)
  ) : (
    // If we don't have any more traversals, simply filter elements.
    o0(_, [C], n)
  );
}
function a0(t3, e, n, r3) {
  const a = _0(e, n, t3);
  return gc(t3, a, r3);
}
function gc(t3, e, n = 1 / 0) {
  const r3 = uc(t3, _s, e.shouldTestNextSiblings);
  return T0((a) => ge(a) && e(a), r3, true, n);
}
function o0(t3, e, n) {
  const r3 = (Array.isArray(t3) ? t3 : [t3]).filter(ge);
  if (r3.length === 0)
    return r3;
  const a = _0(e, n);
  return a === xs.trueFunc ? r3 : r3.filter(a);
}
const $m = /^\s*[+~]/;
function Pm(t3) {
  if (!t3)
    return this._make([]);
  if (typeof t3 != "string") {
    const e = Wt(t3) ? t3.toArray() : [t3], n = this.toArray();
    return this._make(e.filter((r3) => n.some((a) => Yl(a, r3))));
  }
  return this._findBySelector(t3, Number.POSITIVE_INFINITY);
}
function Fm(t3, e) {
  var n;
  const r3 = this.toArray(), a = $m.test(t3) ? r3 : this.children().toArray(), l3 = {
    context: r3,
    root: (n = this._root) === null || n === void 0 ? void 0 : n[0],
    // Pass options that are recognized by `cheerio-select`
    xmlMode: this.options.xmlMode,
    lowerCaseTags: this.options.lowerCaseTags,
    lowerCaseAttributeNames: this.options.lowerCaseAttributeNames,
    pseudos: this.options.pseudos,
    quirksMode: this.options.quirksMode
  };
  return this._make(Rm(t3, a, l3, e));
}
function I0(t3) {
  return function(e, ...n) {
    return function(r3) {
      var a;
      let l3 = t3(e, this);
      return r3 && (l3 = B0(l3, r3, this.options.xmlMode, (a = this._root) === null || a === void 0 ? void 0 : a[0])), this._make(
        // Post processing is only necessary if there is more than one element.
        this.length > 1 && l3.length > 1 ? n.reduce((u, f) => f(u), l3) : l3
      );
    };
  };
}
const Tr = I0((t3, e) => {
  let n = [];
  for (let r3 = 0; r3 < e.length; r3++) {
    const a = t3(e[r3]);
    a.length > 0 && (n = n.concat(a));
  }
  return n;
}), z0 = I0((t3, e) => {
  const n = [];
  for (let r3 = 0; r3 < e.length; r3++) {
    const a = t3(e[r3]);
    a !== null && n.push(a);
  }
  return n;
});
function O0(t3, ...e) {
  let n = null;
  const r3 = I0((a, l3) => {
    const u = [];
    return Ve(l3, (f) => {
      for (let p; (p = a(f)) && !(n != null && n(p, u.length)); f = p)
        u.push(p);
    }), u;
  })(t3, ...e);
  return function(a, l3) {
    n = typeof a == "string" ? (f) => hc(f, a, this.options) : a ? Nr(a) : null;
    const u = r3.call(this, l3);
    return n = null, u;
  };
}
function Vn(t3) {
  return t3.length > 1 ? Array.from(new Set(t3)) : t3;
}
const Hm = z0(({ parent: t3 }) => t3 && !vn(t3) ? t3 : null, Vn), jm = Tr((t3) => {
  const e = [];
  for (; t3.parent && !vn(t3.parent); )
    e.push(t3.parent), t3 = t3.parent;
  return e;
}, jn, (t3) => t3.reverse()), Vm = O0(({ parent: t3 }) => t3 && !vn(t3) ? t3 : null, jn, (t3) => t3.reverse());
function Um(t3) {
  var e;
  const n = [];
  if (!t3)
    return this._make(n);
  const r3 = {
    xmlMode: this.options.xmlMode,
    root: (e = this._root) === null || e === void 0 ? void 0 : e[0]
  }, a = typeof t3 == "string" ? (l3) => hc(l3, t3, r3) : Nr(t3);
  return Ve(this, (l3) => {
    for (l3 && !vn(l3) && !ge(l3) && (l3 = l3.parent); l3 && ge(l3); ) {
      if (a(l3, 0)) {
        n.includes(l3) || n.push(l3);
        break;
      }
      l3 = l3.parent;
    }
  }), this._make(n);
}
const Gm = z0((t3) => S0(t3)), Km = Tr((t3) => {
  const e = [];
  for (; t3.next; )
    t3 = t3.next, ge(t3) && e.push(t3);
  return e;
}, Vn), Xm = O0((t3) => S0(t3), Vn), Wm = z0((t3) => A0(t3)), Ym = Tr((t3) => {
  const e = [];
  for (; t3.prev; )
    t3 = t3.prev, ge(t3) && e.push(t3);
  return e;
}, Vn), Jm = O0((t3) => A0(t3), Vn), Qm = Tr((t3) => jl(t3).filter((e) => ge(e) && e !== t3), jn), Zm = Tr((t3) => Ms(t3).filter(ge), Vn);
function e4() {
  const t3 = this.toArray().reduce((e, n) => it(n) ? e.concat(n.children) : e, []);
  return this._make(t3);
}
function t4(t3) {
  let e = 0;
  const n = this.length;
  for (; e < n && t3.call(this[e], e, this[e]) !== false; )
    ++e;
  return this;
}
function n4(t3) {
  let e = [];
  for (let n = 0; n < this.length; n++) {
    const r3 = this[n], a = t3.call(r3, n, r3);
    a != null && (e = e.concat(a));
  }
  return this._make(e);
}
function Nr(t3) {
  return typeof t3 == "function" ? (e, n) => t3.call(e, n, e) : Wt(t3) ? (e) => Array.prototype.includes.call(t3, e) : function(e) {
    return t3 === e;
  };
}
function r4(t3) {
  var e;
  return this._make(B0(this.toArray(), t3, this.options.xmlMode, (e = this._root) === null || e === void 0 ? void 0 : e[0]));
}
function B0(t3, e, n, r3) {
  return typeof e == "string" ? dc(e, t3, { xmlMode: n, root: r3 }) : t3.filter(Nr(e));
}
function s4(t3) {
  const e = this.toArray();
  return typeof t3 == "string" ? fc(e.filter(ge), t3, this.options) : t3 ? e.some(Nr(t3)) : false;
}
function i4(t3) {
  let e = this.toArray();
  if (typeof t3 == "string") {
    const n = new Set(dc(t3, e, this.options));
    e = e.filter((r3) => !n.has(r3));
  } else {
    const n = Nr(t3);
    e = e.filter((r3, a) => !n(r3, a));
  }
  return this._make(e);
}
function a4(t3) {
  return this.filter(typeof t3 == "string" ? (
    // Using the `:has` selector here short-circuits searches.
    `:has(${t3})`
  ) : (e, n) => this._make(n).find(t3).length > 0);
}
function o4() {
  return this.length > 1 ? this._make(this[0]) : this;
}
function l4() {
  return this.length > 0 ? this._make(this[this.length - 1]) : this;
}
function c4(t3) {
  var e;
  return t3 = +t3, t3 === 0 && this.length <= 1 ? this : (t3 < 0 && (t3 = this.length + t3), this._make((e = this[t3]) !== null && e !== void 0 ? e : []));
}
function u4(t3) {
  return t3 == null ? this.toArray() : this[t3 < 0 ? this.length + t3 : t3];
}
function h4() {
  return Array.prototype.slice.call(this);
}
function f4(t3) {
  let e, n;
  return t3 == null ? (e = this.parent().children(), n = this[0]) : typeof t3 == "string" ? (e = this._make(t3), n = this[0]) : (e = this, n = Wt(t3) ? t3[0] : t3), Array.prototype.indexOf.call(e, n);
}
function d4(t3, e) {
  return this._make(Array.prototype.slice.call(this, t3, e));
}
function m4() {
  var t3;
  return (t3 = this.prevObject) !== null && t3 !== void 0 ? t3 : this._make([]);
}
function p4(t3, e) {
  const n = this._make(t3, e), r3 = jn([...this.get(), ...n.get()]);
  return this._make(r3);
}
function g4(t3) {
  return this.prevObject ? this.add(t3 ? this.prevObject.filter(t3) : this.prevObject) : this;
}
const y4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _findBySelector: Fm,
  add: p4,
  addBack: g4,
  children: Zm,
  closest: Um,
  contents: e4,
  each: t4,
  end: m4,
  eq: c4,
  filter: r4,
  filterArray: B0,
  find: Pm,
  first: o4,
  get: u4,
  has: a4,
  index: f4,
  is: s4,
  last: l4,
  map: n4,
  next: Gm,
  nextAll: Km,
  nextUntil: Xm,
  not: i4,
  parent: Hm,
  parents: jm,
  parentsUntil: Vm,
  prev: Wm,
  prevAll: Ym,
  prevUntil: Jm,
  siblings: Qm,
  slice: d4,
  toArray: h4
}, Symbol.toStringTag, { value: "Module" }));
function b4(t3) {
  return function(n, r3, a, l3) {
    if (typeof Buffer < "u" && Buffer.isBuffer(n) && (n = n.toString()), typeof n == "string")
      return t3(n, r3, a, l3);
    const u = n;
    if (!Array.isArray(u) && vn(u))
      return u;
    const f = new br([]);
    return xn(u, f), f;
  };
}
function xn(t3, e) {
  const n = Array.isArray(t3) ? t3 : [t3];
  e ? e.children = n : e = null;
  for (let r3 = 0; r3 < n.length; r3++) {
    const a = n[r3];
    a.parent && a.parent.children !== n && Sn(a), e ? (a.prev = n[r3 - 1] || null, a.next = n[r3 + 1] || null) : a.prev = a.next = null, a.parent = e;
  }
  return e;
}
function w4(t3, e) {
  if (t3 == null)
    return [];
  if (typeof t3 == "string")
    return this._parse(t3, this.options, false, null).children.slice(0);
  if ("length" in t3) {
    if (t3.length === 1)
      return this._makeDomArray(t3[0], e);
    const n = [];
    for (let r3 = 0; r3 < t3.length; r3++) {
      const a = t3[r3];
      if (typeof a == "object") {
        if (a == null)
          continue;
        if (!("length" in a)) {
          n.push(e ? wr(a, true) : a);
          continue;
        }
      }
      n.push(...this._makeDomArray(a, e));
    }
    return n;
  }
  return [e ? wr(t3, true) : t3];
}
function yc(t3) {
  return function(...e) {
    const n = this.length - 1;
    return Ve(this, (r3, a) => {
      if (!it(r3))
        return;
      const l3 = typeof e[0] == "function" ? e[0].call(r3, a, this._render(r3.children)) : e, u = this._makeDomArray(l3, a < n);
      t3(u, r3.children, r3);
    });
  };
}
function ln(t3, e, n, r3, a) {
  var l3, u;
  const f = [
    e,
    n,
    ...r3
  ], p = e === 0 ? null : t3[e - 1], y = e + n >= t3.length ? null : t3[e + n];
  for (let v = 0; v < r3.length; ++v) {
    const T = r3[v], _ = T.parent;
    if (_) {
      const S = _.children.indexOf(T);
      S > -1 && (_.children.splice(S, 1), a === _ && e > S && f[0]--);
    }
    T.parent = a, T.prev && (T.prev.next = (l3 = T.next) !== null && l3 !== void 0 ? l3 : null), T.next && (T.next.prev = (u = T.prev) !== null && u !== void 0 ? u : null), T.prev = v === 0 ? p : r3[v - 1], T.next = v === r3.length - 1 ? y : r3[v + 1];
  }
  return p && (p.next = r3[0]), y && (y.prev = r3[r3.length - 1]), t3.splice(...f);
}
function x4(t3) {
  return (Wt(t3) ? t3 : this._make(t3)).append(this), this;
}
function k4(t3) {
  return (Wt(t3) ? t3 : this._make(t3)).prepend(this), this;
}
const v4 = yc((t3, e, n) => {
  ln(e, e.length, 0, t3, n);
}), S4 = yc((t3, e, n) => {
  ln(e, 0, 0, t3, n);
});
function bc(t3) {
  return function(e) {
    const n = this.length - 1, r3 = this.parents().last();
    for (let a = 0; a < this.length; a++) {
      const l3 = this[a], u = typeof e == "function" ? e.call(l3, a, l3) : typeof e == "string" && !n0(e) ? r3.find(e).clone() : e, [f] = this._makeDomArray(u, a < n);
      if (!f || !it(f))
        continue;
      let p = f, y = 0;
      for (; y < p.children.length; ) {
        const v = p.children[y];
        ge(v) ? (p = v, y = 0) : y++;
      }
      t3(l3, p, [f]);
    }
    return this;
  };
}
const A4 = bc((t3, e, n) => {
  const { parent: r3 } = t3;
  if (!r3)
    return;
  const a = r3.children, l3 = a.indexOf(t3);
  xn([t3], e), ln(a, l3, 0, n, r3);
}), T4 = bc((t3, e, n) => {
  it(t3) && (xn(t3.children, e), xn(n, t3));
});
function N4(t3) {
  return this.parent(t3).not("body").each((e, n) => {
    this._make(n).replaceWith(n.children);
  }), this;
}
function M4(t3) {
  const e = this[0];
  if (e) {
    const n = this._make(typeof t3 == "function" ? t3.call(e, 0, e) : t3).insertBefore(e);
    let r3;
    for (let l3 = 0; l3 < n.length; l3++)
      n[l3].type === "tag" && (r3 = n[l3]);
    let a = 0;
    for (; r3 && a < r3.children.length; ) {
      const l3 = r3.children[a];
      l3.type === "tag" ? (r3 = l3, a = 0) : a++;
    }
    r3 && this._make(r3).append(this);
  }
  return this;
}
function E4(...t3) {
  const e = this.length - 1;
  return Ve(this, (n, r3) => {
    if (!it(n) || !n.parent)
      return;
    const a = n.parent.children, l3 = a.indexOf(n);
    if (l3 < 0)
      return;
    const u = typeof t3[0] == "function" ? t3[0].call(n, r3, this._render(n.children)) : t3, f = this._makeDomArray(u, r3 < e);
    ln(a, l3 + 1, 0, f, n.parent);
  });
}
function _4(t3) {
  typeof t3 == "string" && (t3 = this._make(t3)), this.remove();
  const e = [];
  for (const n of this._makeDomArray(t3)) {
    const r3 = this.clone().toArray(), { parent: a } = n;
    if (!a)
      continue;
    const l3 = a.children, u = l3.indexOf(n);
    u < 0 || (ln(l3, u + 1, 0, r3, a), e.push(...r3));
  }
  return this._make(e);
}
function C4(...t3) {
  const e = this.length - 1;
  return Ve(this, (n, r3) => {
    if (!it(n) || !n.parent)
      return;
    const a = n.parent.children, l3 = a.indexOf(n);
    if (l3 < 0)
      return;
    const u = typeof t3[0] == "function" ? t3[0].call(n, r3, this._render(n.children)) : t3, f = this._makeDomArray(u, r3 < e);
    ln(a, l3, 0, f, n.parent);
  });
}
function I4(t3) {
  const e = this._make(t3);
  this.remove();
  const n = [];
  return Ve(e, (r3) => {
    const a = this.clone().toArray(), { parent: l3 } = r3;
    if (!l3)
      return;
    const u = l3.children, f = u.indexOf(r3);
    f < 0 || (ln(u, f, 0, a, l3), n.push(...a));
  }), this._make(n);
}
function z4(t3) {
  const e = t3 ? this.filter(t3) : this;
  return Ve(e, (n) => {
    Sn(n), n.prev = n.next = n.parent = null;
  }), this;
}
function O4(t3) {
  return Ve(this, (e, n) => {
    const { parent: r3 } = e;
    if (!r3)
      return;
    const a = r3.children, l3 = typeof t3 == "function" ? t3.call(e, n, e) : t3, u = this._makeDomArray(l3);
    xn(u, null);
    const f = a.indexOf(e);
    ln(a, f, 1, u, r3), u.includes(e) || (e.parent = e.prev = e.next = null);
  });
}
function B4() {
  return Ve(this, (t3) => {
    if (it(t3)) {
      for (const e of t3.children)
        e.next = e.prev = e.parent = null;
      t3.children.length = 0;
    }
  });
}
function D4(t3) {
  if (t3 === void 0) {
    const e = this[0];
    return !e || !it(e) ? null : this._render(e.children);
  }
  return Ve(this, (e) => {
    if (!it(e))
      return;
    for (const r3 of e.children)
      r3.next = r3.prev = r3.parent = null;
    const n = Wt(t3) ? t3.toArray() : this._parse(`${t3}`, this.options, false, e).children;
    xn(n, e);
  });
}
function L4() {
  return this._render(this);
}
function q4(t3) {
  return t3 === void 0 ? xr(this) : typeof t3 == "function" ? Ve(this, (e, n) => this._make(e).text(t3.call(e, n, xr([e])))) : Ve(this, (e) => {
    if (!it(e))
      return;
    for (const r3 of e.children)
      r3.next = r3.prev = r3.parent = null;
    const n = new ms(`${t3}`);
    xn(n, e);
  });
}
function R4() {
  const t3 = Array.prototype.map.call(this.get(), (n) => wr(n, true)), e = new br(t3);
  for (const n of t3)
    n.parent = e;
  return this._make(t3);
}
const $4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _makeDomArray: w4,
  after: E4,
  append: v4,
  appendTo: x4,
  before: C4,
  clone: R4,
  empty: B4,
  html: D4,
  insertAfter: _4,
  insertBefore: I4,
  prepend: S4,
  prependTo: k4,
  remove: z4,
  replaceWith: O4,
  text: q4,
  toString: L4,
  unwrap: N4,
  wrap: A4,
  wrapAll: M4,
  wrapInner: T4
}, Symbol.toStringTag, { value: "Module" }));
function P4(t3, e) {
  if (t3 != null && e != null || // When `prop` is a "plain" object
  typeof t3 == "object" && !Array.isArray(t3))
    return Ve(this, (n, r3) => {
      ge(n) && wc(n, t3, e, r3);
    });
  if (this.length !== 0)
    return xc(this[0], t3);
}
function wc(t3, e, n, r3) {
  if (typeof e == "string") {
    const a = xc(t3), l3 = typeof n == "function" ? n.call(t3, r3, a[e]) : n;
    l3 === "" ? delete a[e] : l3 != null && (a[e] = l3), t3.attribs.style = F4(a);
  } else if (typeof e == "object") {
    const a = Object.keys(e);
    for (let l3 = 0; l3 < a.length; l3++) {
      const u = a[l3];
      wc(t3, u, e[u], l3);
    }
  }
}
function xc(t3, e) {
  if (!t3 || !ge(t3))
    return;
  const n = H4(t3.attribs.style);
  if (typeof e == "string")
    return n[e];
  if (Array.isArray(e)) {
    const r3 = {};
    for (const a of e)
      n[a] != null && (r3[a] = n[a]);
    return r3;
  }
  return n;
}
function F4(t3) {
  return Object.keys(t3).reduce((e, n) => `${e}${e ? " " : ""}${n}: ${t3[n]};`, "");
}
function H4(t3) {
  if (t3 = (t3 || "").trim(), !t3)
    return {};
  const e = {};
  let n;
  for (const r3 of t3.split(";")) {
    const a = r3.indexOf(":");
    if (a < 1 || a === r3.length - 1) {
      const l3 = r3.trimEnd();
      l3.length > 0 && n !== void 0 && (e[n] += `;${l3}`);
    } else
      n = r3.slice(0, a).trim(), e[n] = r3.slice(a + 1).trim();
  }
  return e;
}
const j4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: P4
}, Symbol.toStringTag, { value: "Module" })), Jo = "input,select,textarea,keygen", V4 = /%20/g, Qo = /\r?\n/g;
function U4() {
  return this.serializeArray().map((n) => `${encodeURIComponent(n.name)}=${encodeURIComponent(n.value)}`).join("&").replace(V4, "+");
}
function G4() {
  return this.map((t3, e) => {
    const n = this._make(e);
    return ge(e) && e.name === "form" ? n.find(Jo).toArray() : n.filter(Jo).toArray();
  }).filter(
    // Verify elements have a name (`attr.name`) and are not disabled (`:enabled`)
    '[name!=""]:enabled:not(:submit, :button, :image, :reset, :file):matches([checked], :not(:checkbox, :radio))'
  ).map((t3, e) => {
    var n;
    const r3 = this._make(e), a = r3.attr("name"), l3 = (n = r3.val()) !== null && n !== void 0 ? n : "";
    return Array.isArray(l3) ? l3.map((u) => (
      /*
       * We trim replace any line endings (e.g. `\r` or `\r\n` with `\r\n`) to guarantee consistency across platforms
       * These can occur inside of `<textarea>'s`
       */
      { name: a, value: u.replace(Qo, `\r
`) }
    )) : { name: a, value: l3.replace(Qo, `\r
`) };
  }).toArray();
}
const K4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  serialize: U4,
  serializeArray: G4
}, Symbol.toStringTag, { value: "Module" }));
function X4(t3) {
  var e;
  return typeof t3 == "string" ? { selector: t3, value: "textContent" } : {
    selector: t3.selector,
    value: (e = t3.value) !== null && e !== void 0 ? e : "textContent"
  };
}
function W4(t3) {
  const e = {};
  for (const n in t3) {
    const r3 = t3[n], a = Array.isArray(r3), { selector: l3, value: u } = X4(a ? r3[0] : r3), f = typeof u == "function" ? u : typeof u == "string" ? (p) => this._make(p).prop(u) : (p) => this._make(p).extract(u);
    if (a)
      e[n] = this._findBySelector(l3, Number.POSITIVE_INFINITY).map((p, y) => f(y, n, e)).get();
    else {
      const p = this._findBySelector(l3, 1);
      e[n] = p.length > 0 ? f(p[0], n, e) : void 0;
    }
  }
  return e;
}
const Y4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  extract: W4
}, Symbol.toStringTag, { value: "Module" }));
class Mr {
  /**
   * Instance of cheerio. Methods are specified in the modules. Usage of this
   * constructor is not recommended. Please use `$.load` instead.
   *
   * @private
   * @param elements - The new selection.
   * @param root - Sets the root node.
   * @param options - Options for the instance.
   */
  constructor(e, n, r3) {
    if (this.length = 0, this.options = r3, this._root = n, e) {
      for (let a = 0; a < e.length; a++)
        this[a] = e[a];
      this.length = e.length;
    }
  }
}
Mr.prototype.cheerio = "[cheerio object]";
Mr.prototype.splice = Array.prototype.splice;
Mr.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
Object.assign(Mr.prototype, tm, y4, $4, j4, K4, Y4);
function J4(t3, e) {
  return function n(r3, a, l3 = true) {
    if (r3 == null)
      throw new Error("cheerio.load() expects a string");
    const u = Zi(a), f = t3(r3, u, l3, null);
    class p extends Mr {
      _make(T, _) {
        const C = y(T, _);
        return C.prevObject = this, C;
      }
      _parse(T, _, C, S) {
        return t3(T, _, C, S);
      }
      _render(T) {
        return e(T, this.options);
      }
    }
    function y(v, T, _ = f, C) {
      if (v && Wt(v))
        return v;
      const S = Zi(C, u), N = typeof _ == "string" ? [t3(_, S, false, null)] : "length" in _ ? _ : [_], O = Wt(N) ? N : new p(N, null, S);
      if (O._root = O, !v)
        return new p(void 0, O, S);
      const I3 = typeof v == "string" && n0(v) ? (
        // $(<html>)
        t3(v, S, false, null).children
      ) : Q4(v) ? (
        // $(dom)
        [v]
      ) : Array.isArray(v) ? (
        // $([dom])
        v
      ) : void 0, F = new p(I3, O, S);
      if (I3)
        return F;
      if (typeof v != "string")
        throw new TypeError("Unexpected type of selector");
      let H = v;
      const j = T ? (
        // If we don't have a context, maybe we have a root, from loading
        typeof T == "string" ? n0(T) ? (
          // $('li', '<ul>...</ul>')
          new p([t3(T, S, false, null)], O, S)
        ) : (
          // $('li', 'ul')
          (H = `${T} ${H}`, O)
        ) : Wt(T) ? (
          // $('li', $)
          T
        ) : (
          // $('li', node), $('li', [nodes])
          new p(Array.isArray(T) ? T : [T], O, S)
        )
      ) : O;
      return j ? j.find(H) : F;
    }
    return Object.assign(y, jd, {
      load: n,
      // `_root` and `_options` are used in static methods.
      _root: f,
      _options: u,
      // Add `fn` for plugins
      fn: p.prototype,
      // Add the prototype here to maintain `instanceof` behavior.
      prototype: p.prototype
    }), y;
  };
}
function Q4(t3) {
  return !!t3.name || t3.type === "root" || t3.type === "text" || t3.type === "comment";
}
var de;
(function(t3) {
  t3[t3.Tab = 9] = "Tab", t3[t3.NewLine = 10] = "NewLine", t3[t3.FormFeed = 12] = "FormFeed", t3[t3.CarriageReturn = 13] = "CarriageReturn", t3[t3.Space = 32] = "Space", t3[t3.ExclamationMark = 33] = "ExclamationMark", t3[t3.Number = 35] = "Number", t3[t3.Amp = 38] = "Amp", t3[t3.SingleQuote = 39] = "SingleQuote", t3[t3.DoubleQuote = 34] = "DoubleQuote", t3[t3.Dash = 45] = "Dash", t3[t3.Slash = 47] = "Slash", t3[t3.Zero = 48] = "Zero", t3[t3.Nine = 57] = "Nine", t3[t3.Semi = 59] = "Semi", t3[t3.Lt = 60] = "Lt", t3[t3.Eq = 61] = "Eq", t3[t3.Gt = 62] = "Gt", t3[t3.Questionmark = 63] = "Questionmark", t3[t3.UpperA = 65] = "UpperA", t3[t3.LowerA = 97] = "LowerA", t3[t3.UpperF = 70] = "UpperF", t3[t3.LowerF = 102] = "LowerF", t3[t3.UpperZ = 90] = "UpperZ", t3[t3.LowerZ = 122] = "LowerZ", t3[t3.LowerX = 120] = "LowerX", t3[t3.OpeningSquareBracket = 91] = "OpeningSquareBracket";
})(de || (de = {}));
var X;
(function(t3) {
  t3[t3.Text = 1] = "Text", t3[t3.BeforeTagName = 2] = "BeforeTagName", t3[t3.InTagName = 3] = "InTagName", t3[t3.InSelfClosingTag = 4] = "InSelfClosingTag", t3[t3.BeforeClosingTagName = 5] = "BeforeClosingTagName", t3[t3.InClosingTagName = 6] = "InClosingTagName", t3[t3.AfterClosingTagName = 7] = "AfterClosingTagName", t3[t3.BeforeAttributeName = 8] = "BeforeAttributeName", t3[t3.InAttributeName = 9] = "InAttributeName", t3[t3.AfterAttributeName = 10] = "AfterAttributeName", t3[t3.BeforeAttributeValue = 11] = "BeforeAttributeValue", t3[t3.InAttributeValueDq = 12] = "InAttributeValueDq", t3[t3.InAttributeValueSq = 13] = "InAttributeValueSq", t3[t3.InAttributeValueNq = 14] = "InAttributeValueNq", t3[t3.BeforeDeclaration = 15] = "BeforeDeclaration", t3[t3.InDeclaration = 16] = "InDeclaration", t3[t3.InProcessingInstruction = 17] = "InProcessingInstruction", t3[t3.BeforeComment = 18] = "BeforeComment", t3[t3.CDATASequence = 19] = "CDATASequence", t3[t3.InSpecialComment = 20] = "InSpecialComment", t3[t3.InCommentLike = 21] = "InCommentLike", t3[t3.BeforeSpecialS = 22] = "BeforeSpecialS", t3[t3.BeforeSpecialT = 23] = "BeforeSpecialT", t3[t3.SpecialStartSequence = 24] = "SpecialStartSequence", t3[t3.InSpecialTag = 25] = "InSpecialTag", t3[t3.InEntity = 26] = "InEntity";
})(X || (X = {}));
function Kt(t3) {
  return t3 === de.Space || t3 === de.NewLine || t3 === de.Tab || t3 === de.FormFeed || t3 === de.CarriageReturn;
}
function ns(t3) {
  return t3 === de.Slash || t3 === de.Gt || Kt(t3);
}
function Z4(t3) {
  return t3 >= de.LowerA && t3 <= de.LowerZ || t3 >= de.UpperA && t3 <= de.UpperZ;
}
var Rt;
(function(t3) {
  t3[t3.NoValue = 0] = "NoValue", t3[t3.Unquoted = 1] = "Unquoted", t3[t3.Single = 2] = "Single", t3[t3.Double = 3] = "Double";
})(Rt || (Rt = {}));
const at = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  // CDATA[
  CdataEnd: new Uint8Array([93, 93, 62]),
  // ]]>
  CommentEnd: new Uint8Array([45, 45, 62]),
  // `-->`
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  // `<\/script`
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  // `</style`
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  // `</title`
  TextareaEnd: new Uint8Array([
    60,
    47,
    116,
    101,
    120,
    116,
    97,
    114,
    101,
    97
  ])
  // `</textarea`
};
class ep {
  constructor({ xmlMode: e = false, decodeEntities: n = true }, r3) {
    this.cbs = r3, this.state = X.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = X.Text, this.isSpecial = false, this.running = true, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = e, this.decodeEntities = n, this.entityDecoder = new ql(e ? Ll : Dl, (a, l3) => this.emitCodePoint(a, l3));
  }
  reset() {
    this.state = X.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = X.Text, this.currentSequence = void 0, this.running = true, this.offset = 0;
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
    e === de.Lt || !this.decodeEntities && this.fastForwardTo(de.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = X.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && e === de.Amp && this.startEntity();
  }
  stateSpecialStartSequence(e) {
    const n = this.sequenceIndex === this.currentSequence.length;
    if (!(n ? (
      // If we are at the end of the sequence, make sure the tag name has ended
      ns(e)
    ) : (
      // Otherwise, do a case-insensitive comparison
      (e | 32) === this.currentSequence[this.sequenceIndex]
    )))
      this.isSpecial = false;
    else if (!n) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0, this.state = X.InTagName, this.stateInTagName(e);
  }
  /** Look for an end tag. For <title> tags, also decode entities. */
  stateInSpecialTag(e) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (e === de.Gt || Kt(e)) {
        const n = this.index - this.currentSequence.length;
        if (this.sectionStart < n) {
          const r3 = this.index;
          this.index = n, this.cbs.ontext(this.sectionStart, n), this.index = r3;
        }
        this.isSpecial = false, this.sectionStart = n + 2, this.stateInClosingTagName(e);
        return;
      }
      this.sequenceIndex = 0;
    }
    (e | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === at.TitleEnd ? this.decodeEntities && e === de.Amp && this.startEntity() : this.fastForwardTo(de.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(e === de.Lt);
  }
  stateCDATASequence(e) {
    e === at.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === at.Cdata.length && (this.state = X.InCommentLike, this.currentSequence = at.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = X.InDeclaration, this.stateInDeclaration(e));
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */
  fastForwardTo(e) {
    for (; ++this.index < this.buffer.length + this.offset; )
      if (this.buffer.charCodeAt(this.index - this.offset) === e)
        return true;
    return this.index = this.buffer.length + this.offset - 1, false;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */
  stateInCommentLike(e) {
    e === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === at.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = X.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
  }
  /**
   * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
   *
   * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
   * We allow anything that wouldn't end the tag.
   */
  isTagStartChar(e) {
    return this.xmlMode ? !ns(e) : Z4(e);
  }
  startSpecial(e, n) {
    this.isSpecial = true, this.currentSequence = e, this.sequenceIndex = n, this.state = X.SpecialStartSequence;
  }
  stateBeforeTagName(e) {
    if (e === de.ExclamationMark)
      this.state = X.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (e === de.Questionmark)
      this.state = X.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(e)) {
      const n = e | 32;
      this.sectionStart = this.index, this.xmlMode ? this.state = X.InTagName : n === at.ScriptEnd[2] ? this.state = X.BeforeSpecialS : n === at.TitleEnd[2] ? this.state = X.BeforeSpecialT : this.state = X.InTagName;
    } else
      e === de.Slash ? this.state = X.BeforeClosingTagName : (this.state = X.Text, this.stateText(e));
  }
  stateInTagName(e) {
    ns(e) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = X.BeforeAttributeName, this.stateBeforeAttributeName(e));
  }
  stateBeforeClosingTagName(e) {
    Kt(e) || (e === de.Gt ? this.state = X.Text : (this.state = this.isTagStartChar(e) ? X.InClosingTagName : X.InSpecialComment, this.sectionStart = this.index));
  }
  stateInClosingTagName(e) {
    (e === de.Gt || Kt(e)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = X.AfterClosingTagName, this.stateAfterClosingTagName(e));
  }
  stateAfterClosingTagName(e) {
    (e === de.Gt || this.fastForwardTo(de.Gt)) && (this.state = X.Text, this.sectionStart = this.index + 1);
  }
  stateBeforeAttributeName(e) {
    e === de.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = X.InSpecialTag, this.sequenceIndex = 0) : this.state = X.Text, this.sectionStart = this.index + 1) : e === de.Slash ? this.state = X.InSelfClosingTag : Kt(e) || (this.state = X.InAttributeName, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(e) {
    e === de.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = X.Text, this.sectionStart = this.index + 1, this.isSpecial = false) : Kt(e) || (this.state = X.BeforeAttributeName, this.stateBeforeAttributeName(e));
  }
  stateInAttributeName(e) {
    (e === de.Eq || ns(e)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = X.AfterAttributeName, this.stateAfterAttributeName(e));
  }
  stateAfterAttributeName(e) {
    e === de.Eq ? this.state = X.BeforeAttributeValue : e === de.Slash || e === de.Gt ? (this.cbs.onattribend(Rt.NoValue, this.sectionStart), this.sectionStart = -1, this.state = X.BeforeAttributeName, this.stateBeforeAttributeName(e)) : Kt(e) || (this.cbs.onattribend(Rt.NoValue, this.sectionStart), this.state = X.InAttributeName, this.sectionStart = this.index);
  }
  stateBeforeAttributeValue(e) {
    e === de.DoubleQuote ? (this.state = X.InAttributeValueDq, this.sectionStart = this.index + 1) : e === de.SingleQuote ? (this.state = X.InAttributeValueSq, this.sectionStart = this.index + 1) : Kt(e) || (this.sectionStart = this.index, this.state = X.InAttributeValueNq, this.stateInAttributeValueNoQuotes(e));
  }
  handleInAttributeValue(e, n) {
    e === n || !this.decodeEntities && this.fastForwardTo(n) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(n === de.DoubleQuote ? Rt.Double : Rt.Single, this.index + 1), this.state = X.BeforeAttributeName) : this.decodeEntities && e === de.Amp && this.startEntity();
  }
  stateInAttributeValueDoubleQuotes(e) {
    this.handleInAttributeValue(e, de.DoubleQuote);
  }
  stateInAttributeValueSingleQuotes(e) {
    this.handleInAttributeValue(e, de.SingleQuote);
  }
  stateInAttributeValueNoQuotes(e) {
    Kt(e) || e === de.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(Rt.Unquoted, this.index), this.state = X.BeforeAttributeName, this.stateBeforeAttributeName(e)) : this.decodeEntities && e === de.Amp && this.startEntity();
  }
  stateBeforeDeclaration(e) {
    e === de.OpeningSquareBracket ? (this.state = X.CDATASequence, this.sequenceIndex = 0) : this.state = e === de.Dash ? X.BeforeComment : X.InDeclaration;
  }
  stateInDeclaration(e) {
    (e === de.Gt || this.fastForwardTo(de.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = X.Text, this.sectionStart = this.index + 1);
  }
  stateInProcessingInstruction(e) {
    (e === de.Gt || this.fastForwardTo(de.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = X.Text, this.sectionStart = this.index + 1);
  }
  stateBeforeComment(e) {
    e === de.Dash ? (this.state = X.InCommentLike, this.currentSequence = at.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = X.InDeclaration;
  }
  stateInSpecialComment(e) {
    (e === de.Gt || this.fastForwardTo(de.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = X.Text, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(e) {
    const n = e | 32;
    n === at.ScriptEnd[3] ? this.startSpecial(at.ScriptEnd, 4) : n === at.StyleEnd[3] ? this.startSpecial(at.StyleEnd, 4) : (this.state = X.InTagName, this.stateInTagName(e));
  }
  stateBeforeSpecialT(e) {
    const n = e | 32;
    n === at.TitleEnd[3] ? this.startSpecial(at.TitleEnd, 4) : n === at.TextareaEnd[3] ? this.startSpecial(at.TextareaEnd, 4) : (this.state = X.InTagName, this.stateInTagName(e));
  }
  startEntity() {
    this.baseState = this.state, this.state = X.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? qt.Strict : this.baseState === X.Text || this.baseState === X.InSpecialTag ? qt.Legacy : qt.Attribute);
  }
  stateInEntity() {
    const e = this.entityDecoder.write(this.buffer, this.index - this.offset);
    e >= 0 ? (this.state = this.baseState, e === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1;
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    this.running && this.sectionStart !== this.index && (this.state === X.Text || this.state === X.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === X.InAttributeValueDq || this.state === X.InAttributeValueSq || this.state === X.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
  }
  shouldContinue() {
    return this.index < this.buffer.length + this.offset && this.running;
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse() {
    for (; this.shouldContinue(); ) {
      const e = this.buffer.charCodeAt(this.index - this.offset);
      switch (this.state) {
        case X.Text: {
          this.stateText(e);
          break;
        }
        case X.SpecialStartSequence: {
          this.stateSpecialStartSequence(e);
          break;
        }
        case X.InSpecialTag: {
          this.stateInSpecialTag(e);
          break;
        }
        case X.CDATASequence: {
          this.stateCDATASequence(e);
          break;
        }
        case X.InAttributeValueDq: {
          this.stateInAttributeValueDoubleQuotes(e);
          break;
        }
        case X.InAttributeName: {
          this.stateInAttributeName(e);
          break;
        }
        case X.InCommentLike: {
          this.stateInCommentLike(e);
          break;
        }
        case X.InSpecialComment: {
          this.stateInSpecialComment(e);
          break;
        }
        case X.BeforeAttributeName: {
          this.stateBeforeAttributeName(e);
          break;
        }
        case X.InTagName: {
          this.stateInTagName(e);
          break;
        }
        case X.InClosingTagName: {
          this.stateInClosingTagName(e);
          break;
        }
        case X.BeforeTagName: {
          this.stateBeforeTagName(e);
          break;
        }
        case X.AfterAttributeName: {
          this.stateAfterAttributeName(e);
          break;
        }
        case X.InAttributeValueSq: {
          this.stateInAttributeValueSingleQuotes(e);
          break;
        }
        case X.BeforeAttributeValue: {
          this.stateBeforeAttributeValue(e);
          break;
        }
        case X.BeforeClosingTagName: {
          this.stateBeforeClosingTagName(e);
          break;
        }
        case X.AfterClosingTagName: {
          this.stateAfterClosingTagName(e);
          break;
        }
        case X.BeforeSpecialS: {
          this.stateBeforeSpecialS(e);
          break;
        }
        case X.BeforeSpecialT: {
          this.stateBeforeSpecialT(e);
          break;
        }
        case X.InAttributeValueNq: {
          this.stateInAttributeValueNoQuotes(e);
          break;
        }
        case X.InSelfClosingTag: {
          this.stateInSelfClosingTag(e);
          break;
        }
        case X.InDeclaration: {
          this.stateInDeclaration(e);
          break;
        }
        case X.BeforeDeclaration: {
          this.stateBeforeDeclaration(e);
          break;
        }
        case X.BeforeComment: {
          this.stateBeforeComment(e);
          break;
        }
        case X.InProcessingInstruction: {
          this.stateInProcessingInstruction(e);
          break;
        }
        case X.InEntity: {
          this.stateInEntity();
          break;
        }
      }
      this.index++;
    }
    this.cleanup();
  }
  finish() {
    this.state === X.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend();
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const e = this.buffer.length + this.offset;
    this.sectionStart >= e || (this.state === X.InCommentLike ? this.currentSequence === at.CdataEnd ? this.cbs.oncdata(this.sectionStart, e, 0) : this.cbs.oncomment(this.sectionStart, e, 0) : this.state === X.InTagName || this.state === X.BeforeAttributeName || this.state === X.BeforeAttributeValue || this.state === X.AfterAttributeName || this.state === X.InAttributeName || this.state === X.InAttributeValueSq || this.state === X.InAttributeValueDq || this.state === X.InAttributeValueNq || this.state === X.InClosingTagName || this.cbs.ontext(this.sectionStart, e));
  }
  emitCodePoint(e, n) {
    this.baseState !== X.Text && this.baseState !== X.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + n, this.index = this.sectionStart - 1, this.cbs.onattribentity(e)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + n, this.index = this.sectionStart - 1, this.cbs.ontextentity(e, this.sectionStart));
  }
}
const En = /* @__PURE__ */ new Set([
  "input",
  "option",
  "optgroup",
  "select",
  "button",
  "datalist",
  "textarea"
]), Oe = /* @__PURE__ */ new Set(["p"]), Zo = /* @__PURE__ */ new Set(["thead", "tbody"]), el = /* @__PURE__ */ new Set(["dd", "dt"]), tl = /* @__PURE__ */ new Set(["rt", "rp"]), tp = /* @__PURE__ */ new Map([
  ["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])],
  ["th", /* @__PURE__ */ new Set(["th"])],
  ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])],
  ["body", /* @__PURE__ */ new Set(["head", "link", "script"])],
  ["li", /* @__PURE__ */ new Set(["li"])],
  ["p", Oe],
  ["h1", Oe],
  ["h2", Oe],
  ["h3", Oe],
  ["h4", Oe],
  ["h5", Oe],
  ["h6", Oe],
  ["select", En],
  ["input", En],
  ["output", En],
  ["button", En],
  ["datalist", En],
  ["textarea", En],
  ["option", /* @__PURE__ */ new Set(["option"])],
  ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
  ["dd", el],
  ["dt", el],
  ["address", Oe],
  ["article", Oe],
  ["aside", Oe],
  ["blockquote", Oe],
  ["details", Oe],
  ["div", Oe],
  ["dl", Oe],
  ["fieldset", Oe],
  ["figcaption", Oe],
  ["figure", Oe],
  ["footer", Oe],
  ["form", Oe],
  ["header", Oe],
  ["hr", Oe],
  ["main", Oe],
  ["nav", Oe],
  ["ol", Oe],
  ["pre", Oe],
  ["section", Oe],
  ["table", Oe],
  ["ul", Oe],
  ["rt", tl],
  ["rp", tl],
  ["tbody", Zo],
  ["tfoot", Zo]
]), np = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]), nl = /* @__PURE__ */ new Set(["math", "svg"]), rl = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignobject",
  "desc",
  "title"
]), rp = /\s|\//;
let sp = class {
  constructor(e, n = {}) {
    var r3, a, l3, u, f, p;
    this.options = n, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = false, this.cbs = e ?? {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (r3 = n.lowerCaseTags) !== null && r3 !== void 0 ? r3 : this.htmlMode, this.lowerCaseAttributeNames = (a = n.lowerCaseAttributeNames) !== null && a !== void 0 ? a : this.htmlMode, this.recognizeSelfClosing = (l3 = n.recognizeSelfClosing) !== null && l3 !== void 0 ? l3 : !this.htmlMode, this.tokenizer = new ((u = n.Tokenizer) !== null && u !== void 0 ? u : ep)(this.options, this), this.foreignContext = [!this.htmlMode], (p = (f = this.cbs).onparserinit) === null || p === void 0 || p.call(f, this);
  }
  // Tokenizer event handlers
  /** @internal */
  ontext(e, n) {
    var r3, a;
    const l3 = this.getSlice(e, n);
    this.endIndex = n - 1, (a = (r3 = this.cbs).ontext) === null || a === void 0 || a.call(r3, l3), this.startIndex = n;
  }
  /** @internal */
  ontextentity(e, n) {
    var r3, a;
    this.endIndex = n - 1, (a = (r3 = this.cbs).ontext) === null || a === void 0 || a.call(r3, e0(e)), this.startIndex = n;
  }
  /**
   * Checks if the current tag is a void element. Override this if you want
   * to specify your own additional void elements.
   */
  isVoidElement(e) {
    return this.htmlMode && np.has(e);
  }
  /** @internal */
  onopentagname(e, n) {
    this.endIndex = n;
    let r3 = this.getSlice(e, n);
    this.lowerCaseTagNames && (r3 = r3.toLowerCase()), this.emitOpenTag(r3);
  }
  emitOpenTag(e) {
    var n, r3, a, l3;
    this.openTagStart = this.startIndex, this.tagname = e;
    const u = this.htmlMode && tp.get(e);
    if (u)
      for (; this.stack.length > 0 && u.has(this.stack[0]); ) {
        const f = this.stack.shift();
        (r3 = (n = this.cbs).onclosetag) === null || r3 === void 0 || r3.call(n, f, true);
      }
    this.isVoidElement(e) || (this.stack.unshift(e), this.htmlMode && (nl.has(e) ? this.foreignContext.unshift(true) : rl.has(e) && this.foreignContext.unshift(false))), (l3 = (a = this.cbs).onopentagname) === null || l3 === void 0 || l3.call(a, e), this.cbs.onopentag && (this.attribs = {});
  }
  endOpenTag(e) {
    var n, r3;
    this.startIndex = this.openTagStart, this.attribs && ((r3 = (n = this.cbs).onopentag) === null || r3 === void 0 || r3.call(n, this.tagname, this.attribs, e), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, true), this.tagname = "";
  }
  /** @internal */
  onopentagend(e) {
    this.endIndex = e, this.endOpenTag(false), this.startIndex = e + 1;
  }
  /** @internal */
  onclosetag(e, n) {
    var r3, a, l3, u, f, p, y, v;
    this.endIndex = n;
    let T = this.getSlice(e, n);
    if (this.lowerCaseTagNames && (T = T.toLowerCase()), this.htmlMode && (nl.has(T) || rl.has(T)) && this.foreignContext.shift(), this.isVoidElement(T))
      this.htmlMode && T === "br" && ((u = (l3 = this.cbs).onopentagname) === null || u === void 0 || u.call(l3, "br"), (p = (f = this.cbs).onopentag) === null || p === void 0 || p.call(f, "br", {}, true), (v = (y = this.cbs).onclosetag) === null || v === void 0 || v.call(y, "br", false));
    else {
      const _ = this.stack.indexOf(T);
      if (_ !== -1)
        for (let C = 0; C <= _; C++) {
          const S = this.stack.shift();
          (a = (r3 = this.cbs).onclosetag) === null || a === void 0 || a.call(r3, S, C !== _);
        }
      else
        this.htmlMode && T === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(true));
    }
    this.startIndex = n + 1;
  }
  /** @internal */
  onselfclosingtag(e) {
    this.endIndex = e, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(false), this.startIndex = e + 1) : this.onopentagend(e);
  }
  closeCurrentTag(e) {
    var n, r3;
    const a = this.tagname;
    this.endOpenTag(e), this.stack[0] === a && ((r3 = (n = this.cbs).onclosetag) === null || r3 === void 0 || r3.call(n, a, !e), this.stack.shift());
  }
  /** @internal */
  onattribname(e, n) {
    this.startIndex = e;
    const r3 = this.getSlice(e, n);
    this.attribname = this.lowerCaseAttributeNames ? r3.toLowerCase() : r3;
  }
  /** @internal */
  onattribdata(e, n) {
    this.attribvalue += this.getSlice(e, n);
  }
  /** @internal */
  onattribentity(e) {
    this.attribvalue += e0(e);
  }
  /** @internal */
  onattribend(e, n) {
    var r3, a;
    this.endIndex = n, (a = (r3 = this.cbs).onattribute) === null || a === void 0 || a.call(r3, this.attribname, this.attribvalue, e === Rt.Double ? '"' : e === Rt.Single ? "'" : e === Rt.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = "";
  }
  getInstructionName(e) {
    const n = e.search(rp);
    let r3 = n < 0 ? e : e.substr(0, n);
    return this.lowerCaseTagNames && (r3 = r3.toLowerCase()), r3;
  }
  /** @internal */
  ondeclaration(e, n) {
    this.endIndex = n;
    const r3 = this.getSlice(e, n);
    if (this.cbs.onprocessinginstruction) {
      const a = this.getInstructionName(r3);
      this.cbs.onprocessinginstruction(`!${a}`, `!${r3}`);
    }
    this.startIndex = n + 1;
  }
  /** @internal */
  onprocessinginstruction(e, n) {
    this.endIndex = n;
    const r3 = this.getSlice(e, n);
    if (this.cbs.onprocessinginstruction) {
      const a = this.getInstructionName(r3);
      this.cbs.onprocessinginstruction(`?${a}`, `?${r3}`);
    }
    this.startIndex = n + 1;
  }
  /** @internal */
  oncomment(e, n, r3) {
    var a, l3, u, f;
    this.endIndex = n, (l3 = (a = this.cbs).oncomment) === null || l3 === void 0 || l3.call(a, this.getSlice(e, n - r3)), (f = (u = this.cbs).oncommentend) === null || f === void 0 || f.call(u), this.startIndex = n + 1;
  }
  /** @internal */
  oncdata(e, n, r3) {
    var a, l3, u, f, p, y, v, T, _, C;
    this.endIndex = n;
    const S = this.getSlice(e, n - r3);
    !this.htmlMode || this.options.recognizeCDATA ? ((l3 = (a = this.cbs).oncdatastart) === null || l3 === void 0 || l3.call(a), (f = (u = this.cbs).ontext) === null || f === void 0 || f.call(u, S), (y = (p = this.cbs).oncdataend) === null || y === void 0 || y.call(p)) : ((T = (v = this.cbs).oncomment) === null || T === void 0 || T.call(v, `[CDATA[${S}]]`), (C = (_ = this.cbs).oncommentend) === null || C === void 0 || C.call(_)), this.startIndex = n + 1;
  }
  /** @internal */
  onend() {
    var e, n;
    if (this.cbs.onclosetag) {
      this.endIndex = this.startIndex;
      for (let r3 = 0; r3 < this.stack.length; r3++)
        this.cbs.onclosetag(this.stack[r3], true);
    }
    (n = (e = this.cbs).onend) === null || n === void 0 || n.call(e);
  }
  /**
   * Resets the parser to a blank state, ready to parse a new HTML document
   */
  reset() {
    var e, n, r3, a;
    (n = (e = this.cbs).onreset) === null || n === void 0 || n.call(e), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (a = (r3 = this.cbs).onparserinit) === null || a === void 0 || a.call(r3, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = false;
  }
  /**
   * Resets the parser, then parses a complete document and
   * pushes it to the handler.
   *
   * @param data Document to parse.
   */
  parseComplete(e) {
    this.reset(), this.end(e);
  }
  getSlice(e, n) {
    for (; e - this.bufferOffset >= this.buffers[0].length; )
      this.shiftBuffer();
    let r3 = this.buffers[0].slice(e - this.bufferOffset, n - this.bufferOffset);
    for (; n - this.bufferOffset > this.buffers[0].length; )
      this.shiftBuffer(), r3 += this.buffers[0].slice(0, n - this.bufferOffset);
    return r3;
  }
  shiftBuffer() {
    this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
  }
  /**
   * Parses a chunk of data and calls the corresponding callbacks.
   *
   * @param chunk Chunk to parse.
   */
  write(e) {
    var n, r3;
    if (this.ended) {
      (r3 = (n = this.cbs).onerror) === null || r3 === void 0 || r3.call(n, new Error(".write() after done!"));
      return;
    }
    this.buffers.push(e), this.tokenizer.running && (this.tokenizer.write(e), this.writeIndex++);
  }
  /**
   * Parses the end of the buffer and clears the stack, calls onend.
   *
   * @param chunk Optional final chunk to parse.
   */
  end(e) {
    var n, r3;
    if (this.ended) {
      (r3 = (n = this.cbs).onerror) === null || r3 === void 0 || r3.call(n, new Error(".end() after done!"));
      return;
    }
    e && this.write(e), this.ended = true, this.tokenizer.end();
  }
  /**
   * Pauses parsing. The parser won't emit events until `resume` is called.
   */
  pause() {
    this.tokenizer.pause();
  }
  /**
   * Resumes parsing after `pause` was called.
   */
  resume() {
    for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; )
      this.tokenizer.write(this.buffers[this.writeIndex++]);
    this.ended && this.tokenizer.end();
  }
  /**
   * Alias of `write`, for backwards compatibility.
   *
   * @param chunk Chunk to parse.
   * @deprecated
   */
  parseChunk(e) {
    this.write(e);
  }
  /**
   * Alias of `end`, for backwards compatibility.
   *
   * @param chunk Optional final chunk to parse.
   * @deprecated
   */
  done(e) {
    this.end(e);
  }
};
function ip(t3, e) {
  const n = new Hf(void 0, e);
  return new sp(n, e).end(t3), n.root;
}
const ap = J4(b4(ip), Ns), op = {
  "div,p": ({ $node: t3 }) => ({
    queue: t3.children()
  }),
  "h1,h2,h3,h4,h5,h6": ({ $node: t3, getContent: e }) => ({
    ...e(t3.contents())
  }),
  "ul,ol": ({ $node: t3 }) => ({
    queue: t3.children(),
    nesting: true
  }),
  li: ({ $node: t3, getContent: e }) => {
    const n = t3.children().filter("ul,ol");
    let r3;
    if (t3.contents().first().is("div,p"))
      r3 = e(t3.children().first());
    else {
      let a = t3.contents();
      const l3 = a.index(n);
      l3 >= 0 && (a = a.slice(0, l3)), r3 = e(a);
    }
    return {
      queue: n,
      nesting: true,
      ...r3
    };
  },
  "table,pre,p>img:only-child": ({ $node: t3, getContent: e }) => ({
    ...e(t3)
  })
}, lp = {
  selector: "h1,h2,h3,h4,h5,h6,ul,ol,li,table,pre,p>img:only-child",
  selectorRules: op
}, sl = "markmap: ", cp = /^h[1-6]$/, up = /^[uo]l$/, hp = /^li$/;
function fp(t3) {
  return cp.test(t3) ? +t3[1] : up.test(t3) ? 8 : hp.test(t3) ? 9 : 7;
}
function dp(t3, e) {
  const n = {
    ...lp,
    ...e
  }, r3 = ap(t3);
  let a = r3("body");
  a.length || (a = r3.root());
  let l3 = 0;
  const u = {
    id: l3,
    tag: "",
    html: "",
    level: 0,
    parent: 0,
    childrenLevel: 0,
    children: []
  }, f = [];
  let p = 0;
  return C(a.children()), u;
  function y(S) {
    var N;
    const { parent: O } = S, I3 = {
      id: ++l3,
      tag: S.tagName,
      level: S.level,
      html: S.html,
      childrenLevel: 0,
      children: S.nesting ? [] : void 0,
      parent: O.id
    };
    return (N = S.comments) != null && N.length && (I3.comments = S.comments), Object.keys(S.data || {}).length && (I3.data = S.data), O.children && ((O.childrenLevel === 0 || O.childrenLevel > I3.level) && (O.children = [], O.childrenLevel = I3.level), O.childrenLevel === I3.level && O.children.push(I3)), I3;
  }
  function v(S) {
    let N;
    for (; (N = f[f.length - 1]) && N.level >= S; )
      f.pop();
    return N || u;
  }
  function T(S) {
    var N;
    const O = _(S), I3 = (N = r3.html(O.$node)) == null ? void 0 : N.trimEnd();
    return { comments: O.comments, html: I3 };
  }
  function _(S) {
    const N = [];
    return S = S.filter((O, I3) => {
      if (I3.type === "comment") {
        const F = I3.data.trim();
        if (F.startsWith(sl))
          return N.push(F.slice(sl.length).trim()), false;
      }
      return true;
    }), { $node: S, comments: N };
  }
  function C(S, N) {
    S.each((O, I3) => {
      var F;
      const H = r3(I3), j = (F = Object.entries(n.selectorRules).find(
        ([ue]) => H.is(ue)
      )) == null ? void 0 : F[1], V = j == null ? void 0 : j({ $node: H, $: r3, getContent: T });
      if (V != null && V.queue && !V.nesting) {
        C(V.queue, N);
        return;
      }
      const W = fp(I3.tagName);
      if (!V) {
        W <= 6 && (p = W);
        return;
      }
      if (p > 0 && W > p || !H.is(n.selector))
        return;
      p = 0;
      const ee = W <= 6;
      let K = {
        // If the child is an inline element and expected to be a separate node,
        // data from the closest `<p>` should be included, e.g. `<p data-lines><img /></p>`
        ...H.closest("p").data(),
        ...H.data()
      }, le = V.html || "";
      if (H.is("ol>li") && (N != null && N.children)) {
        const ce = +(H.parent().attr("start") || 1) + N.children.length;
        le = `${ce}. ${le}`, K = {
          ...K,
          listIndex: ce
        };
      }
      const Te = y({
        parent: N || v(W),
        nesting: !!V.queue || ee,
        tagName: I3.tagName,
        level: W,
        html: le,
        comments: V.comments,
        data: K
      });
      ee && f.push(Te), V.queue && C(V.queue, Te);
    });
  }
}
function mp(t3) {
  return hr(t3, (e, n) => {
    const r3 = {
      content: e.html,
      children: n() || []
    };
    return e.data && (r3.payload = {
      tag: e.tag,
      ...e.data
    }), e.comments && (e.comments.includes("foldAll") ? r3.payload = { ...r3.payload, fold: 2 } : e.comments.includes("fold") && (r3.payload = { ...r3.payload, fold: 1 })), r3;
  });
}
function pp(t3, e) {
  const n = dp(t3, e);
  return mp(n);
}
function gp(t3) {
  function e(r3, a) {
    const l3 = r3.pos, u = r3.src.charCodeAt(l3);
    if (a || u !== 43)
      return false;
    const f = r3.scanDelims(r3.pos, true);
    let p = f.length;
    const y = String.fromCharCode(u);
    if (p < 2)
      return false;
    if (p % 2) {
      const v = r3.push("text", "", 0);
      v.content = y, p--;
    }
    for (let v = 0; v < p; v += 2) {
      const T = r3.push("text", "", 0);
      T.content = y + y, !(!f.can_open && !f.can_close) && r3.delimiters.push({
        marker: u,
        length: 0,
        // disable "rule of 3" length checks meant for emphasis
        jump: v / 2,
        // 1 delimiter = 2 characters
        token: r3.tokens.length - 1,
        end: -1,
        open: f.can_open,
        close: f.can_close
      });
    }
    return r3.pos += f.length, true;
  }
  function n(r3, a) {
    let l3;
    const u = [], f = a.length;
    for (let p = 0; p < f; p++) {
      const y = a[p];
      if (y.marker !== 43 || y.end === -1)
        continue;
      const v = a[y.end];
      l3 = r3.tokens[y.token], l3.type = "ins_open", l3.tag = "ins", l3.nesting = 1, l3.markup = "++", l3.content = "", l3 = r3.tokens[v.token], l3.type = "ins_close", l3.tag = "ins", l3.nesting = -1, l3.markup = "++", l3.content = "", r3.tokens[v.token - 1].type === "text" && r3.tokens[v.token - 1].content === "+" && u.push(v.token - 1);
    }
    for (; u.length; ) {
      const p = u.pop();
      let y = p + 1;
      for (; y < r3.tokens.length && r3.tokens[y].type === "ins_close"; )
        y++;
      y--, p !== y && (l3 = r3.tokens[y], r3.tokens[y] = r3.tokens[p], r3.tokens[p] = l3);
    }
  }
  t3.inline.ruler.before("emphasis", "ins", e), t3.inline.ruler2.before("emphasis", "ins", function(r3) {
    const a = r3.tokens_meta, l3 = (r3.tokens_meta || []).length;
    n(r3, r3.delimiters);
    for (let u = 0; u < l3; u++)
      a[u] && a[u].delimiters && n(r3, a[u].delimiters);
  });
}
function yp(t3) {
  function e(r3, a) {
    const l3 = r3.pos, u = r3.src.charCodeAt(l3);
    if (a || u !== 61)
      return false;
    const f = r3.scanDelims(r3.pos, true);
    let p = f.length;
    const y = String.fromCharCode(u);
    if (p < 2)
      return false;
    if (p % 2) {
      const v = r3.push("text", "", 0);
      v.content = y, p--;
    }
    for (let v = 0; v < p; v += 2) {
      const T = r3.push("text", "", 0);
      T.content = y + y, !(!f.can_open && !f.can_close) && r3.delimiters.push({
        marker: u,
        length: 0,
        // disable "rule of 3" length checks meant for emphasis
        jump: v / 2,
        // 1 delimiter = 2 characters
        token: r3.tokens.length - 1,
        end: -1,
        open: f.can_open,
        close: f.can_close
      });
    }
    return r3.pos += f.length, true;
  }
  function n(r3, a) {
    const l3 = [], u = a.length;
    for (let f = 0; f < u; f++) {
      const p = a[f];
      if (p.marker !== 61 || p.end === -1)
        continue;
      const y = a[p.end], v = r3.tokens[p.token];
      v.type = "mark_open", v.tag = "mark", v.nesting = 1, v.markup = "==", v.content = "";
      const T = r3.tokens[y.token];
      T.type = "mark_close", T.tag = "mark", T.nesting = -1, T.markup = "==", T.content = "", r3.tokens[y.token - 1].type === "text" && r3.tokens[y.token - 1].content === "=" && l3.push(y.token - 1);
    }
    for (; l3.length; ) {
      const f = l3.pop();
      let p = f + 1;
      for (; p < r3.tokens.length && r3.tokens[p].type === "mark_close"; )
        p++;
      if (p--, f !== p) {
        const y = r3.tokens[p];
        r3.tokens[p] = r3.tokens[f], r3.tokens[f] = y;
      }
    }
  }
  t3.inline.ruler.before("emphasis", "mark", e), t3.inline.ruler2.before("emphasis", "mark", function(r3) {
    let a;
    const l3 = r3.tokens_meta, u = (r3.tokens_meta || []).length;
    for (n(r3, r3.delimiters), a = 0; a < u; a++)
      l3[a] && l3[a].delimiters && n(r3, l3[a].delimiters);
  });
}
const bp = /\\([ \\!"#$%&'()*+,./:;<=>?@[\]^_`{|}~-])/g;
function wp(t3, e) {
  const n = t3.posMax, r3 = t3.pos;
  if (t3.src.charCodeAt(r3) !== 126 || e || r3 + 2 >= n)
    return false;
  t3.pos = r3 + 1;
  let a = false;
  for (; t3.pos < n; ) {
    if (t3.src.charCodeAt(t3.pos) === 126) {
      a = true;
      break;
    }
    t3.md.inline.skipToken(t3);
  }
  if (!a || r3 + 1 === t3.pos)
    return t3.pos = r3, false;
  const l3 = t3.src.slice(r3 + 1, t3.pos);
  if (l3.match(/(^|[^\\])(\\\\)*\s/))
    return t3.pos = r3, false;
  t3.posMax = t3.pos, t3.pos = r3 + 1;
  const u = t3.push("sub_open", "sub", 1);
  u.markup = "~";
  const f = t3.push("text", "", 0);
  f.content = l3.replace(bp, "$1");
  const p = t3.push("sub_close", "sub", -1);
  return p.markup = "~", t3.pos = t3.posMax + 1, t3.posMax = n, true;
}
function xp(t3) {
  t3.inline.ruler.after("emphasis", "sub", wp);
}
const kp = /\\([ \\!"#$%&'()*+,./:;<=>?@[\]^_`{|}~-])/g;
function vp(t3, e) {
  const n = t3.posMax, r3 = t3.pos;
  if (t3.src.charCodeAt(r3) !== 94 || e || r3 + 2 >= n)
    return false;
  t3.pos = r3 + 1;
  let a = false;
  for (; t3.pos < n; ) {
    if (t3.src.charCodeAt(t3.pos) === 94) {
      a = true;
      break;
    }
    t3.md.inline.skipToken(t3);
  }
  if (!a || r3 + 1 === t3.pos)
    return t3.pos = r3, false;
  const l3 = t3.src.slice(r3 + 1, t3.pos);
  if (l3.match(/(^|[^\\])(\\\\)*\s/))
    return t3.pos = r3, false;
  t3.posMax = t3.pos, t3.pos = r3 + 1;
  const u = t3.push("sup_open", "sup", 1);
  u.markup = "^";
  const f = t3.push("text", "", 0);
  f.content = l3.replace(kp, "$1");
  const p = t3.push("sup_close", "sup", -1);
  return p.markup = "^", t3.pos = t3.posMax + 1, t3.posMax = n, true;
}
function Sp(t3) {
  t3.inline.ruler.after("emphasis", "sup", vp);
}
const D0 = Symbol.for("yaml.alias"), l0 = Symbol.for("yaml.document"), on = Symbol.for("yaml.map"), kc = Symbol.for("yaml.pair"), $t = Symbol.for("yaml.scalar"), Un = Symbol.for("yaml.seq"), Mt = Symbol.for("yaml.node.type"), An = (t3) => !!t3 && typeof t3 == "object" && t3[Mt] === D0, Is = (t3) => !!t3 && typeof t3 == "object" && t3[Mt] === l0, Er = (t3) => !!t3 && typeof t3 == "object" && t3[Mt] === on, Je = (t3) => !!t3 && typeof t3 == "object" && t3[Mt] === kc, Le = (t3) => !!t3 && typeof t3 == "object" && t3[Mt] === $t, _r = (t3) => !!t3 && typeof t3 == "object" && t3[Mt] === Un;
function We(t3) {
  if (t3 && typeof t3 == "object")
    switch (t3[Mt]) {
      case on:
      case Un:
        return true;
    }
  return false;
}
function Ye(t3) {
  if (t3 && typeof t3 == "object")
    switch (t3[Mt]) {
      case D0:
      case on:
      case $t:
      case Un:
        return true;
    }
  return false;
}
const vc = (t3) => (Le(t3) || We(t3)) && !!t3.anchor, pn = Symbol("break visit"), Ap = Symbol("skip children"), gr = Symbol("remove node");
function Gn(t3, e) {
  const n = Tp(e);
  Is(t3) ? On(null, t3.contents, n, Object.freeze([t3])) === gr && (t3.contents = null) : On(null, t3, n, Object.freeze([]));
}
Gn.BREAK = pn;
Gn.SKIP = Ap;
Gn.REMOVE = gr;
function On(t3, e, n, r3) {
  const a = Np(t3, e, n, r3);
  if (Ye(a) || Je(a))
    return Mp(t3, r3, a), On(t3, a, n, r3);
  if (typeof a != "symbol") {
    if (We(e)) {
      r3 = Object.freeze(r3.concat(e));
      for (let l3 = 0; l3 < e.items.length; ++l3) {
        const u = On(l3, e.items[l3], n, r3);
        if (typeof u == "number")
          l3 = u - 1;
        else {
          if (u === pn)
            return pn;
          u === gr && (e.items.splice(l3, 1), l3 -= 1);
        }
      }
    } else if (Je(e)) {
      r3 = Object.freeze(r3.concat(e));
      const l3 = On("key", e.key, n, r3);
      if (l3 === pn)
        return pn;
      l3 === gr && (e.key = null);
      const u = On("value", e.value, n, r3);
      if (u === pn)
        return pn;
      u === gr && (e.value = null);
    }
  }
  return a;
}
function Tp(t3) {
  return typeof t3 == "object" && (t3.Collection || t3.Node || t3.Value) ? Object.assign({
    Alias: t3.Node,
    Map: t3.Node,
    Scalar: t3.Node,
    Seq: t3.Node
  }, t3.Value && {
    Map: t3.Value,
    Scalar: t3.Value,
    Seq: t3.Value
  }, t3.Collection && {
    Map: t3.Collection,
    Seq: t3.Collection
  }, t3) : t3;
}
function Np(t3, e, n, r3) {
  var a, l3, u, f, p;
  if (typeof n == "function")
    return n(t3, e, r3);
  if (Er(e))
    return (a = n.Map) == null ? void 0 : a.call(n, t3, e, r3);
  if (_r(e))
    return (l3 = n.Seq) == null ? void 0 : l3.call(n, t3, e, r3);
  if (Je(e))
    return (u = n.Pair) == null ? void 0 : u.call(n, t3, e, r3);
  if (Le(e))
    return (f = n.Scalar) == null ? void 0 : f.call(n, t3, e, r3);
  if (An(e))
    return (p = n.Alias) == null ? void 0 : p.call(n, t3, e, r3);
}
function Mp(t3, e, n) {
  const r3 = e[e.length - 1];
  if (We(r3))
    r3.items[t3] = n;
  else if (Je(r3))
    t3 === "key" ? r3.key = n : r3.value = n;
  else if (Is(r3))
    r3.contents = n;
  else {
    const a = An(r3) ? "alias" : "scalar";
    throw new Error(`Cannot replace node with ${a} parent`);
  }
}
const Ep = {
  "!": "%21",
  ",": "%2C",
  "[": "%5B",
  "]": "%5D",
  "{": "%7B",
  "}": "%7D"
}, _p = (t3) => t3.replace(/[!,[\]{}]/g, (e) => Ep[e]);
class ct {
  constructor(e, n) {
    this.docStart = null, this.docEnd = false, this.yaml = Object.assign({}, ct.defaultYaml, e), this.tags = Object.assign({}, ct.defaultTags, n);
  }
  clone() {
    const e = new ct(this.yaml, this.tags);
    return e.docStart = this.docStart, e;
  }
  /**
   * During parsing, get a Directives instance for the current document and
   * update the stream state according to the current version's spec.
   */
  atDocument() {
    const e = new ct(this.yaml, this.tags);
    switch (this.yaml.version) {
      case "1.1":
        this.atNextDocument = true;
        break;
      case "1.2":
        this.atNextDocument = false, this.yaml = {
          explicit: ct.defaultYaml.explicit,
          version: "1.2"
        }, this.tags = Object.assign({}, ct.defaultTags);
        break;
    }
    return e;
  }
  /**
   * @param onError - May be called even if the action was successful
   * @returns `true` on success
   */
  add(e, n) {
    this.atNextDocument && (this.yaml = { explicit: ct.defaultYaml.explicit, version: "1.1" }, this.tags = Object.assign({}, ct.defaultTags), this.atNextDocument = false);
    const r3 = e.trim().split(/[ \t]+/), a = r3.shift();
    switch (a) {
      case "%TAG": {
        if (r3.length !== 2 && (n(0, "%TAG directive should contain exactly two parts"), r3.length < 2))
          return false;
        const [l3, u] = r3;
        return this.tags[l3] = u, true;
      }
      case "%YAML": {
        if (this.yaml.explicit = true, r3.length !== 1)
          return n(0, "%YAML directive should contain exactly one part"), false;
        const [l3] = r3;
        if (l3 === "1.1" || l3 === "1.2")
          return this.yaml.version = l3, true;
        {
          const u = /^\d+\.\d+$/.test(l3);
          return n(6, `Unsupported YAML version ${l3}`, u), false;
        }
      }
      default:
        return n(0, `Unknown directive ${a}`, true), false;
    }
  }
  /**
   * Resolves a tag, matching handles to those defined in %TAG directives.
   *
   * @returns Resolved tag, which may also be the non-specific tag `'!'` or a
   *   `'!local'` tag, or `null` if unresolvable.
   */
  tagName(e, n) {
    if (e === "!")
      return "!";
    if (e[0] !== "!")
      return n(`Not a valid tag: ${e}`), null;
    if (e[1] === "<") {
      const u = e.slice(2, -1);
      return u === "!" || u === "!!" ? (n(`Verbatim tags aren't resolved, so ${e} is invalid.`), null) : (e[e.length - 1] !== ">" && n("Verbatim tags must end with a >"), u);
    }
    const [, r3, a] = e.match(/^(.*!)([^!]*)$/s);
    a || n(`The ${e} tag has no suffix`);
    const l3 = this.tags[r3];
    if (l3)
      try {
        return l3 + decodeURIComponent(a);
      } catch (u) {
        return n(String(u)), null;
      }
    return r3 === "!" ? e : (n(`Could not resolve tag: ${e}`), null);
  }
  /**
   * Given a fully resolved tag, returns its printable string form,
   * taking into account current tag prefixes and defaults.
   */
  tagString(e) {
    for (const [n, r3] of Object.entries(this.tags))
      if (e.startsWith(r3))
        return n + _p(e.substring(r3.length));
    return e[0] === "!" ? e : `!<${e}>`;
  }
  toString(e) {
    const n = this.yaml.explicit ? [`%YAML ${this.yaml.version || "1.2"}`] : [], r3 = Object.entries(this.tags);
    let a;
    if (e && r3.length > 0 && Ye(e.contents)) {
      const l3 = {};
      Gn(e.contents, (u, f) => {
        Ye(f) && f.tag && (l3[f.tag] = true);
      }), a = Object.keys(l3);
    } else
      a = [];
    for (const [l3, u] of r3)
      l3 === "!!" && u === "tag:yaml.org,2002:" || (!e || a.some((f) => f.startsWith(u))) && n.push(`%TAG ${l3} ${u}`);
    return n.join(`
`);
  }
}
ct.defaultYaml = { explicit: false, version: "1.2" };
ct.defaultTags = { "!!": "tag:yaml.org,2002:" };
function Sc(t3) {
  if (/[\x00-\x19\s,[\]{}]/.test(t3)) {
    const n = `Anchor must not contain whitespace or control characters: ${JSON.stringify(t3)}`;
    throw new Error(n);
  }
  return true;
}
function Ac(t3) {
  const e = /* @__PURE__ */ new Set();
  return Gn(t3, {
    Value(n, r3) {
      r3.anchor && e.add(r3.anchor);
    }
  }), e;
}
function Tc(t3, e) {
  for (let n = 1; ; ++n) {
    const r3 = `${t3}${n}`;
    if (!e.has(r3))
      return r3;
  }
}
function Cp(t3, e) {
  const n = [], r3 = /* @__PURE__ */ new Map();
  let a = null;
  return {
    onAnchor: (l3) => {
      n.push(l3), a ?? (a = Ac(t3));
      const u = Tc(e, a);
      return a.add(u), u;
    },
    /**
     * With circular references, the source node is only resolved after all
     * of its child nodes are. This is why anchors are set only after all of
     * the nodes have been created.
     */
    setAnchors: () => {
      for (const l3 of n) {
        const u = r3.get(l3);
        if (typeof u == "object" && u.anchor && (Le(u.node) || We(u.node)))
          u.node.anchor = u.anchor;
        else {
          const f = new Error("Failed to resolve repeated object (this should not happen)");
          throw f.source = l3, f;
        }
      }
    },
    sourceObjects: r3
  };
}
function Bn(t3, e, n, r3) {
  if (r3 && typeof r3 == "object")
    if (Array.isArray(r3))
      for (let a = 0, l3 = r3.length; a < l3; ++a) {
        const u = r3[a], f = Bn(t3, r3, String(a), u);
        f === void 0 ? delete r3[a] : f !== u && (r3[a] = f);
      }
    else if (r3 instanceof Map)
      for (const a of Array.from(r3.keys())) {
        const l3 = r3.get(a), u = Bn(t3, r3, a, l3);
        u === void 0 ? r3.delete(a) : u !== l3 && r3.set(a, u);
      }
    else if (r3 instanceof Set)
      for (const a of Array.from(r3)) {
        const l3 = Bn(t3, r3, a, a);
        l3 === void 0 ? r3.delete(a) : l3 !== a && (r3.delete(a), r3.add(l3));
      }
    else
      for (const [a, l3] of Object.entries(r3)) {
        const u = Bn(t3, r3, a, l3);
        u === void 0 ? delete r3[a] : u !== l3 && (r3[a] = u);
      }
  return t3.call(e, n, r3);
}
function Nt(t3, e, n) {
  if (Array.isArray(t3))
    return t3.map((r3, a) => Nt(r3, String(a), n));
  if (t3 && typeof t3.toJSON == "function") {
    if (!n || !vc(t3))
      return t3.toJSON(e, n);
    const r3 = { aliasCount: 0, count: 1, res: void 0 };
    n.anchors.set(t3, r3), n.onCreate = (l3) => {
      r3.res = l3, delete n.onCreate;
    };
    const a = t3.toJSON(e, n);
    return n.onCreate && n.onCreate(a), a;
  }
  return typeof t3 == "bigint" && !(n != null && n.keep) ? Number(t3) : t3;
}
class L0 {
  constructor(e) {
    Object.defineProperty(this, Mt, { value: e });
  }
  /** Create a copy of this node.  */
  clone() {
    const e = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    return this.range && (e.range = this.range.slice()), e;
  }
  /** A plain JavaScript representation of this node. */
  toJS(e, { mapAsMap: n, maxAliasCount: r3, onAnchor: a, reviver: l3 } = {}) {
    if (!Is(e))
      throw new TypeError("A document argument is required");
    const u = {
      anchors: /* @__PURE__ */ new Map(),
      doc: e,
      keep: true,
      mapAsMap: n === true,
      mapKeyWarned: false,
      maxAliasCount: typeof r3 == "number" ? r3 : 100
    }, f = Nt(this, "", u);
    if (typeof a == "function")
      for (const { count: p, res: y } of u.anchors.values())
        a(y, p);
    return typeof l3 == "function" ? Bn(l3, { "": f }, "", f) : f;
  }
}
class q0 extends L0 {
  constructor(e) {
    super(D0), this.source = e, Object.defineProperty(this, "tag", {
      set() {
        throw new Error("Alias nodes cannot have tags");
      }
    });
  }
  /**
   * Resolve the value of this alias within `doc`, finding the last
   * instance of the `source` anchor before this node.
   */
  resolve(e, n) {
    let r3;
    n != null && n.aliasResolveCache ? r3 = n.aliasResolveCache : (r3 = [], Gn(e, {
      Node: (l3, u) => {
        (An(u) || vc(u)) && r3.push(u);
      }
    }), n && (n.aliasResolveCache = r3));
    let a;
    for (const l3 of r3) {
      if (l3 === this)
        break;
      l3.anchor === this.source && (a = l3);
    }
    return a;
  }
  toJSON(e, n) {
    if (!n)
      return { source: this.source };
    const { anchors: r3, doc: a, maxAliasCount: l3 } = n, u = this.resolve(a, n);
    if (!u) {
      const p = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
      throw new ReferenceError(p);
    }
    let f = r3.get(u);
    if (f || (Nt(u, null, n), f = r3.get(u)), !f || f.res === void 0) {
      const p = "This should not happen: Alias anchor was not resolved?";
      throw new ReferenceError(p);
    }
    if (l3 >= 0 && (f.count += 1, f.aliasCount === 0 && (f.aliasCount = cs(a, u, r3)), f.count * f.aliasCount > l3)) {
      const p = "Excessive alias count indicates a resource exhaustion attack";
      throw new ReferenceError(p);
    }
    return f.res;
  }
  toString(e, n, r3) {
    const a = `*${this.source}`;
    if (e) {
      if (Sc(this.source), e.options.verifyAliasOrder && !e.anchors.has(this.source)) {
        const l3 = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
        throw new Error(l3);
      }
      if (e.implicitKey)
        return `${a} `;
    }
    return a;
  }
}
function cs(t3, e, n) {
  if (An(e)) {
    const r3 = e.resolve(t3), a = n && r3 && n.get(r3);
    return a ? a.count * a.aliasCount : 0;
  } else if (We(e)) {
    let r3 = 0;
    for (const a of e.items) {
      const l3 = cs(t3, a, n);
      l3 > r3 && (r3 = l3);
    }
    return r3;
  } else if (Je(e)) {
    const r3 = cs(t3, e.key, n), a = cs(t3, e.value, n);
    return Math.max(r3, a);
  }
  return 1;
}
const Nc = (t3) => !t3 || typeof t3 != "function" && typeof t3 != "object";
class be extends L0 {
  constructor(e) {
    super($t), this.value = e;
  }
  toJSON(e, n) {
    return n != null && n.keep ? this.value : Nt(this.value, e, n);
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
const Ip = "tag:yaml.org,2002:";
function zp(t3, e, n) {
  if (e) {
    const r3 = n.filter((l3) => l3.tag === e), a = r3.find((l3) => !l3.format) ?? r3[0];
    if (!a)
      throw new Error(`Tag ${e} not found`);
    return a;
  }
  return n.find((r3) => {
    var a;
    return ((a = r3.identify) == null ? void 0 : a.call(r3, t3)) && !r3.format;
  });
}
function Sr(t3, e, n) {
  var T, _, C;
  if (Is(t3) && (t3 = t3.contents), Ye(t3))
    return t3;
  if (Je(t3)) {
    const S = (_ = (T = n.schema[on]).createNode) == null ? void 0 : _.call(T, n.schema, null, n);
    return S.items.push(t3), S;
  }
  (t3 instanceof String || t3 instanceof Number || t3 instanceof Boolean || typeof BigInt < "u" && t3 instanceof BigInt) && (t3 = t3.valueOf());
  const { aliasDuplicateObjects: r3, onAnchor: a, onTagObj: l3, schema: u, sourceObjects: f } = n;
  let p;
  if (r3 && t3 && typeof t3 == "object") {
    if (p = f.get(t3), p)
      return p.anchor ?? (p.anchor = a(t3)), new q0(p.anchor);
    p = { anchor: null, node: null }, f.set(t3, p);
  }
  e != null && e.startsWith("!!") && (e = Ip + e.slice(2));
  let y = zp(t3, e, u.tags);
  if (!y) {
    if (t3 && typeof t3.toJSON == "function" && (t3 = t3.toJSON()), !t3 || typeof t3 != "object") {
      const S = new be(t3);
      return p && (p.node = S), S;
    }
    y = t3 instanceof Map ? u[on] : Symbol.iterator in Object(t3) ? u[Un] : u[on];
  }
  l3 && (l3(y), delete n.onTagObj);
  const v = y != null && y.createNode ? y.createNode(n.schema, t3, n) : typeof ((C = y == null ? void 0 : y.nodeClass) == null ? void 0 : C.from) == "function" ? y.nodeClass.from(n.schema, t3, n) : new be(t3);
  return e ? v.tag = e : y.default || (v.tag = y.tag), p && (p.node = v), v;
}
function Ss(t3, e, n) {
  let r3 = n;
  for (let a = e.length - 1; a >= 0; --a) {
    const l3 = e[a];
    if (typeof l3 == "number" && Number.isInteger(l3) && l3 >= 0) {
      const u = [];
      u[l3] = r3, r3 = u;
    } else
      r3 = /* @__PURE__ */ new Map([[l3, r3]]);
  }
  return Sr(r3, void 0, {
    aliasDuplicateObjects: false,
    keepUndefined: false,
    onAnchor: () => {
      throw new Error("This should not happen, please report a bug.");
    },
    schema: t3,
    sourceObjects: /* @__PURE__ */ new Map()
  });
}
const fr = (t3) => t3 == null || typeof t3 == "object" && !!t3[Symbol.iterator]().next().done;
class Mc extends L0 {
  constructor(e, n) {
    super(e), Object.defineProperty(this, "schema", {
      value: n,
      configurable: true,
      enumerable: false,
      writable: true
    });
  }
  /**
   * Create a copy of this collection.
   *
   * @param schema - If defined, overwrites the original's schema
   */
  clone(e) {
    const n = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    return e && (n.schema = e), n.items = n.items.map((r3) => Ye(r3) || Je(r3) ? r3.clone(e) : r3), this.range && (n.range = this.range.slice()), n;
  }
  /**
   * Adds a value to the collection. For `!!map` and `!!omap` the value must
   * be a Pair instance or a `{ key, value }` object, which may not have a key
   * that already exists in the map.
   */
  addIn(e, n) {
    if (fr(e))
      this.add(n);
    else {
      const [r3, ...a] = e, l3 = this.get(r3, true);
      if (We(l3))
        l3.addIn(a, n);
      else if (l3 === void 0 && this.schema)
        this.set(r3, Ss(this.schema, a, n));
      else
        throw new Error(`Expected YAML collection at ${r3}. Remaining path: ${a}`);
    }
  }
  /**
   * Removes a value from the collection.
   * @returns `true` if the item was found and removed.
   */
  deleteIn(e) {
    const [n, ...r3] = e;
    if (r3.length === 0)
      return this.delete(n);
    const a = this.get(n, true);
    if (We(a))
      return a.deleteIn(r3);
    throw new Error(`Expected YAML collection at ${n}. Remaining path: ${r3}`);
  }
  /**
   * Returns item at `key`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  getIn(e, n) {
    const [r3, ...a] = e, l3 = this.get(r3, true);
    return a.length === 0 ? !n && Le(l3) ? l3.value : l3 : We(l3) ? l3.getIn(a, n) : void 0;
  }
  hasAllNullValues(e) {
    return this.items.every((n) => {
      if (!Je(n))
        return false;
      const r3 = n.value;
      return r3 == null || e && Le(r3) && r3.value == null && !r3.commentBefore && !r3.comment && !r3.tag;
    });
  }
  /**
   * Checks if the collection includes a value with the key `key`.
   */
  hasIn(e) {
    const [n, ...r3] = e;
    if (r3.length === 0)
      return this.has(n);
    const a = this.get(n, true);
    return We(a) ? a.hasIn(r3) : false;
  }
  /**
   * Sets a value in this collection. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  setIn(e, n) {
    const [r3, ...a] = e;
    if (a.length === 0)
      this.set(r3, n);
    else {
      const l3 = this.get(r3, true);
      if (We(l3))
        l3.setIn(a, n);
      else if (l3 === void 0 && this.schema)
        this.set(r3, Ss(this.schema, a, n));
      else
        throw new Error(`Expected YAML collection at ${r3}. Remaining path: ${a}`);
    }
  }
}
const Op = (t3) => t3.replace(/^(?!$)(?: $)?/gm, "#");
function Xt(t3, e) {
  return /^\n+$/.test(t3) ? t3.substring(1) : e ? t3.replace(/^(?! *$)/gm, e) : t3;
}
const yn = (t3, e, n) => t3.endsWith(`
`) ? Xt(n, e) : n.includes(`
`) ? `
` + Xt(n, e) : (t3.endsWith(" ") ? "" : " ") + n, Ec = "flow", c0 = "block", us = "quoted";
function zs(t3, e, n = "flow", { indentAtStart: r3, lineWidth: a = 80, minContentWidth: l3 = 20, onFold: u, onOverflow: f } = {}) {
  if (!a || a < 0)
    return t3;
  a < l3 && (l3 = 0);
  const p = Math.max(1 + l3, 1 + a - e.length);
  if (t3.length <= p)
    return t3;
  const y = [], v = {};
  let T = a - e.length;
  typeof r3 == "number" && (r3 > a - Math.max(2, l3) ? y.push(0) : T = a - r3);
  let _, C, S = false, N = -1, O = -1, I3 = -1;
  n === c0 && (N = il(t3, N, e.length), N !== -1 && (T = N + p));
  for (let H; H = t3[N += 1]; ) {
    if (n === us && H === "\\") {
      switch (O = N, t3[N + 1]) {
        case "x":
          N += 3;
          break;
        case "u":
          N += 5;
          break;
        case "U":
          N += 9;
          break;
        default:
          N += 1;
      }
      I3 = N;
    }
    if (H === `
`)
      n === c0 && (N = il(t3, N, e.length)), T = N + e.length + p, _ = void 0;
    else {
      if (H === " " && C && C !== " " && C !== `
` && C !== "	") {
        const j = t3[N + 1];
        j && j !== " " && j !== `
` && j !== "	" && (_ = N);
      }
      if (N >= T)
        if (_)
          y.push(_), T = _ + p, _ = void 0;
        else if (n === us) {
          for (; C === " " || C === "	"; )
            C = H, H = t3[N += 1], S = true;
          const j = N > I3 + 1 ? N - 2 : O - 1;
          if (v[j])
            return t3;
          y.push(j), v[j] = true, T = j + p, _ = void 0;
        } else
          S = true;
    }
    C = H;
  }
  if (S && f && f(), y.length === 0)
    return t3;
  u && u();
  let F = t3.slice(0, y[0]);
  for (let H = 0; H < y.length; ++H) {
    const j = y[H], V = y[H + 1] || t3.length;
    j === 0 ? F = `
${e}${t3.slice(0, V)}` : (n === us && v[j] && (F += `${t3[j]}\\`), F += `
${e}${t3.slice(j + 1, V)}`);
  }
  return F;
}
function il(t3, e, n) {
  let r3 = e, a = e + 1, l3 = t3[a];
  for (; l3 === " " || l3 === "	"; )
    if (e < a + n)
      l3 = t3[++e];
    else {
      do
        l3 = t3[++e];
      while (l3 && l3 !== `
`);
      r3 = e, a = e + 1, l3 = t3[a];
    }
  return r3;
}
const Os = (t3, e) => ({
  indentAtStart: e ? t3.indent.length : t3.indentAtStart,
  lineWidth: t3.options.lineWidth,
  minContentWidth: t3.options.minContentWidth
}), Bs = (t3) => /^(%|---|\.\.\.)/m.test(t3);
function Bp(t3, e, n) {
  if (!e || e < 0)
    return false;
  const r3 = e - n, a = t3.length;
  if (a <= r3)
    return false;
  for (let l3 = 0, u = 0; l3 < a; ++l3)
    if (t3[l3] === `
`) {
      if (l3 - u > r3)
        return true;
      if (u = l3 + 1, a - u <= r3)
        return false;
    }
  return true;
}
function yr(t3, e) {
  const n = JSON.stringify(t3);
  if (e.options.doubleQuotedAsJSON)
    return n;
  const { implicitKey: r3 } = e, a = e.options.doubleQuotedMinMultiLineLength, l3 = e.indent || (Bs(t3) ? "  " : "");
  let u = "", f = 0;
  for (let p = 0, y = n[p]; y; y = n[++p])
    if (y === " " && n[p + 1] === "\\" && n[p + 2] === "n" && (u += n.slice(f, p) + "\\ ", p += 1, f = p, y = "\\"), y === "\\")
      switch (n[p + 1]) {
        case "u":
          {
            u += n.slice(f, p);
            const v = n.substr(p + 2, 4);
            switch (v) {
              case "0000":
                u += "\\0";
                break;
              case "0007":
                u += "\\a";
                break;
              case "000b":
                u += "\\v";
                break;
              case "001b":
                u += "\\e";
                break;
              case "0085":
                u += "\\N";
                break;
              case "00a0":
                u += "\\_";
                break;
              case "2028":
                u += "\\L";
                break;
              case "2029":
                u += "\\P";
                break;
              default:
                v.substr(0, 2) === "00" ? u += "\\x" + v.substr(2) : u += n.substr(p, 6);
            }
            p += 5, f = p + 1;
          }
          break;
        case "n":
          if (r3 || n[p + 2] === '"' || n.length < a)
            p += 1;
          else {
            for (u += n.slice(f, p) + `

`; n[p + 2] === "\\" && n[p + 3] === "n" && n[p + 4] !== '"'; )
              u += `
`, p += 2;
            u += l3, n[p + 2] === " " && (u += "\\"), p += 1, f = p + 1;
          }
          break;
        default:
          p += 1;
      }
  return u = f ? u + n.slice(f) : n, r3 ? u : zs(u, l3, us, Os(e, false));
}
function u0(t3, e) {
  if (e.options.singleQuote === false || e.implicitKey && t3.includes(`
`) || /[ \t]\n|\n[ \t]/.test(t3))
    return yr(t3, e);
  const n = e.indent || (Bs(t3) ? "  " : ""), r3 = "'" + t3.replace(/'/g, "''").replace(/\n+/g, `$&
${n}`) + "'";
  return e.implicitKey ? r3 : zs(r3, n, Ec, Os(e, false));
}
function Dn(t3, e) {
  const { singleQuote: n } = e.options;
  let r3;
  if (n === false)
    r3 = yr;
  else {
    const a = t3.includes('"'), l3 = t3.includes("'");
    a && !l3 ? r3 = u0 : l3 && !a ? r3 = yr : r3 = n ? u0 : yr;
  }
  return r3(t3, e);
}
let h0;
try {
  h0 = new RegExp(`(^|(?<!
))
+(?!
|$)`, "g");
} catch {
  h0 = /\n+(?!\n|$)/g;
}
function hs({ comment: t3, type: e, value: n }, r3, a, l3) {
  const { blockQuote: u, commentString: f, lineWidth: p } = r3.options;
  if (!u || /\n[\t ]+$/.test(n) || /^\s*$/.test(n))
    return Dn(n, r3);
  const y = r3.indent || (r3.forceBlockIndent || Bs(n) ? "  " : ""), v = u === "literal" ? true : u === "folded" || e === be.BLOCK_FOLDED ? false : e === be.BLOCK_LITERAL ? true : !Bp(n, p, y.length);
  if (!n)
    return v ? `|
` : `>
`;
  let T, _;
  for (_ = n.length; _ > 0; --_) {
    const V = n[_ - 1];
    if (V !== `
` && V !== "	" && V !== " ")
      break;
  }
  let C = n.substring(_);
  const S = C.indexOf(`
`);
  S === -1 ? T = "-" : n === C || S !== C.length - 1 ? (T = "+", l3 && l3()) : T = "", C && (n = n.slice(0, -C.length), C[C.length - 1] === `
` && (C = C.slice(0, -1)), C = C.replace(h0, `$&${y}`));
  let N = false, O, I3 = -1;
  for (O = 0; O < n.length; ++O) {
    const V = n[O];
    if (V === " ")
      N = true;
    else if (V === `
`)
      I3 = O;
    else
      break;
  }
  let F = n.substring(0, I3 < O ? I3 + 1 : O);
  F && (n = n.substring(F.length), F = F.replace(/\n+/g, `$&${y}`));
  let j = (N ? y ? "2" : "1" : "") + T;
  if (t3 && (j += " " + f(t3.replace(/ ?[\r\n]+/g, " ")), a && a()), !v) {
    const V = n.replace(/\n+/g, `
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${y}`);
    let W = false;
    const ee = Os(r3, true);
    u !== "folded" && e !== be.BLOCK_FOLDED && (ee.onOverflow = () => {
      W = true;
    });
    const K = zs(`${F}${V}${C}`, y, c0, ee);
    if (!W)
      return `>${j}
${y}${K}`;
  }
  return n = n.replace(/\n+/g, `$&${y}`), `|${j}
${y}${F}${n}${C}`;
}
function Dp(t3, e, n, r3) {
  const { type: a, value: l3 } = t3, { actualString: u, implicitKey: f, indent: p, indentStep: y, inFlow: v } = e;
  if (f && l3.includes(`
`) || v && /[[\]{},]/.test(l3))
    return Dn(l3, e);
  if (/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(l3))
    return f || v || !l3.includes(`
`) ? Dn(l3, e) : hs(t3, e, n, r3);
  if (!f && !v && a !== be.PLAIN && l3.includes(`
`))
    return hs(t3, e, n, r3);
  if (Bs(l3)) {
    if (p === "")
      return e.forceBlockIndent = true, hs(t3, e, n, r3);
    if (f && p === y)
      return Dn(l3, e);
  }
  const T = l3.replace(/\n+/g, `$&
${p}`);
  if (u) {
    const _ = (N) => {
      var O;
      return N.default && N.tag !== "tag:yaml.org,2002:str" && ((O = N.test) == null ? void 0 : O.test(T));
    }, { compat: C, tags: S } = e.doc.schema;
    if (S.some(_) || C != null && C.some(_))
      return Dn(l3, e);
  }
  return f ? T : zs(T, p, Ec, Os(e, false));
}
function R0(t3, e, n, r3) {
  const { implicitKey: a, inFlow: l3 } = e, u = typeof t3.value == "string" ? t3 : Object.assign({}, t3, { value: String(t3.value) });
  let { type: f } = t3;
  f !== be.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(u.value) && (f = be.QUOTE_DOUBLE);
  const p = (v) => {
    switch (v) {
      case be.BLOCK_FOLDED:
      case be.BLOCK_LITERAL:
        return a || l3 ? Dn(u.value, e) : hs(u, e, n, r3);
      case be.QUOTE_DOUBLE:
        return yr(u.value, e);
      case be.QUOTE_SINGLE:
        return u0(u.value, e);
      case be.PLAIN:
        return Dp(u, e, n, r3);
      default:
        return null;
    }
  };
  let y = p(f);
  if (y === null) {
    const { defaultKeyType: v, defaultStringType: T } = e.options, _ = a && v || T;
    if (y = p(_), y === null)
      throw new Error(`Unsupported default string type ${_}`);
  }
  return y;
}
function _c(t3, e) {
  const n = Object.assign({
    blockQuote: true,
    commentString: Op,
    defaultKeyType: null,
    defaultStringType: "PLAIN",
    directives: null,
    doubleQuotedAsJSON: false,
    doubleQuotedMinMultiLineLength: 40,
    falseStr: "false",
    flowCollectionPadding: true,
    indentSeq: true,
    lineWidth: 80,
    minContentWidth: 20,
    nullStr: "null",
    simpleKeys: false,
    singleQuote: null,
    trueStr: "true",
    verifyAliasOrder: true
  }, t3.schema.toStringOptions, e);
  let r3;
  switch (n.collectionStyle) {
    case "block":
      r3 = false;
      break;
    case "flow":
      r3 = true;
      break;
    default:
      r3 = null;
  }
  return {
    anchors: /* @__PURE__ */ new Set(),
    doc: t3,
    flowCollectionPadding: n.flowCollectionPadding ? " " : "",
    indent: "",
    indentStep: typeof n.indent == "number" ? " ".repeat(n.indent) : "  ",
    inFlow: r3,
    options: n
  };
}
function Lp(t3, e) {
  var a;
  if (e.tag) {
    const l3 = t3.filter((u) => u.tag === e.tag);
    if (l3.length > 0)
      return l3.find((u) => u.format === e.format) ?? l3[0];
  }
  let n, r3;
  if (Le(e)) {
    r3 = e.value;
    let l3 = t3.filter((u) => {
      var f;
      return (f = u.identify) == null ? void 0 : f.call(u, r3);
    });
    if (l3.length > 1) {
      const u = l3.filter((f) => f.test);
      u.length > 0 && (l3 = u);
    }
    n = l3.find((u) => u.format === e.format) ?? l3.find((u) => !u.format);
  } else
    r3 = e, n = t3.find((l3) => l3.nodeClass && r3 instanceof l3.nodeClass);
  if (!n) {
    const l3 = ((a = r3 == null ? void 0 : r3.constructor) == null ? void 0 : a.name) ?? (r3 === null ? "null" : typeof r3);
    throw new Error(`Tag not resolved for ${l3} value`);
  }
  return n;
}
function qp(t3, e, { anchors: n, doc: r3 }) {
  if (!r3.directives)
    return "";
  const a = [], l3 = (Le(t3) || We(t3)) && t3.anchor;
  l3 && Sc(l3) && (n.add(l3), a.push(`&${l3}`));
  const u = t3.tag ?? (e.default ? null : e.tag);
  return u && a.push(r3.directives.tagString(u)), a.join(" ");
}
function Pn(t3, e, n, r3) {
  var p;
  if (Je(t3))
    return t3.toString(e, n, r3);
  if (An(t3)) {
    if (e.doc.directives)
      return t3.toString(e);
    if ((p = e.resolvedAliases) != null && p.has(t3))
      throw new TypeError("Cannot stringify circular structure without alias nodes");
    e.resolvedAliases ? e.resolvedAliases.add(t3) : e.resolvedAliases = /* @__PURE__ */ new Set([t3]), t3 = t3.resolve(e.doc);
  }
  let a;
  const l3 = Ye(t3) ? t3 : e.doc.createNode(t3, { onTagObj: (y) => a = y });
  a ?? (a = Lp(e.doc.schema.tags, l3));
  const u = qp(l3, a, e);
  u.length > 0 && (e.indentAtStart = (e.indentAtStart ?? 0) + u.length + 1);
  const f = typeof a.stringify == "function" ? a.stringify(l3, e, n, r3) : Le(l3) ? R0(l3, e, n, r3) : l3.toString(e, n, r3);
  return u ? Le(l3) || f[0] === "{" || f[0] === "[" ? `${u} ${f}` : `${u}
${e.indent}${f}` : f;
}
function Rp({ key: t3, value: e }, n, r3, a) {
  const { allNullValues: l3, doc: u, indent: f, indentStep: p, options: { commentString: y, indentSeq: v, simpleKeys: T } } = n;
  let _ = Ye(t3) && t3.comment || null;
  if (T) {
    if (_)
      throw new Error("With simple keys, key nodes cannot have comments");
    if (We(t3) || !Ye(t3) && typeof t3 == "object") {
      const ee = "With simple keys, collection cannot be used as a key value";
      throw new Error(ee);
    }
  }
  let C = !T && (!t3 || _ && e == null && !n.inFlow || We(t3) || (Le(t3) ? t3.type === be.BLOCK_FOLDED || t3.type === be.BLOCK_LITERAL : typeof t3 == "object"));
  n = Object.assign({}, n, {
    allNullValues: false,
    implicitKey: !C && (T || !l3),
    indent: f + p
  });
  let S = false, N = false, O = Pn(t3, n, () => S = true, () => N = true);
  if (!C && !n.inFlow && O.length > 1024) {
    if (T)
      throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
    C = true;
  }
  if (n.inFlow) {
    if (l3 || e == null)
      return S && r3 && r3(), O === "" ? "?" : C ? `? ${O}` : O;
  } else if (l3 && !T || e == null && C)
    return O = `? ${O}`, _ && !S ? O += yn(O, n.indent, y(_)) : N && a && a(), O;
  S && (_ = null), C ? (_ && (O += yn(O, n.indent, y(_))), O = `? ${O}
${f}:`) : (O = `${O}:`, _ && (O += yn(O, n.indent, y(_))));
  let I3, F, H;
  Ye(e) ? (I3 = !!e.spaceBefore, F = e.commentBefore, H = e.comment) : (I3 = false, F = null, H = null, e && typeof e == "object" && (e = u.createNode(e))), n.implicitKey = false, !C && !_ && Le(e) && (n.indentAtStart = O.length + 1), N = false, !v && p.length >= 2 && !n.inFlow && !C && _r(e) && !e.flow && !e.tag && !e.anchor && (n.indent = n.indent.substring(2));
  let j = false;
  const V = Pn(e, n, () => j = true, () => N = true);
  let W = " ";
  if (_ || I3 || F) {
    if (W = I3 ? `
` : "", F) {
      const ee = y(F);
      W += `
${Xt(ee, n.indent)}`;
    }
    V === "" && !n.inFlow ? W === `
` && (W = `

`) : W += `
${n.indent}`;
  } else if (!C && We(e)) {
    const ee = V[0], K = V.indexOf(`
`), le = K !== -1, Te = n.inFlow ?? e.flow ?? e.items.length === 0;
    if (le || !Te) {
      let ue = false;
      if (le && (ee === "&" || ee === "!")) {
        let ce = V.indexOf(" ");
        ee === "&" && ce !== -1 && ce < K && V[ce + 1] === "!" && (ce = V.indexOf(" ", ce + 1)), (ce === -1 || K < ce) && (ue = true);
      }
      ue || (W = `
${n.indent}`);
    }
  } else
    (V === "" || V[0] === `
`) && (W = "");
  return O += W + V, n.inFlow ? j && r3 && r3() : H && !j ? O += yn(O, n.indent, y(H)) : N && a && a(), O;
}
function Cc(t3, e) {
  (t3 === "debug" || t3 === "warn") && console.warn(e);
}
const rs = "<<", Yt = {
  identify: (t3) => t3 === rs || typeof t3 == "symbol" && t3.description === rs,
  default: "key",
  tag: "tag:yaml.org,2002:merge",
  test: /^<<$/,
  resolve: () => Object.assign(new be(Symbol(rs)), {
    addToJSMap: Ic
  }),
  stringify: () => rs
}, $p = (t3, e) => (Yt.identify(e) || Le(e) && (!e.type || e.type === be.PLAIN) && Yt.identify(e.value)) && (t3 == null ? void 0 : t3.doc.schema.tags.some((n) => n.tag === Yt.tag && n.default));
function Ic(t3, e, n) {
  if (n = t3 && An(n) ? n.resolve(t3.doc) : n, _r(n))
    for (const r3 of n.items)
      ji(t3, e, r3);
  else if (Array.isArray(n))
    for (const r3 of n)
      ji(t3, e, r3);
  else
    ji(t3, e, n);
}
function ji(t3, e, n) {
  const r3 = t3 && An(n) ? n.resolve(t3.doc) : n;
  if (!Er(r3))
    throw new Error("Merge sources must be maps or map aliases");
  const a = r3.toJSON(null, t3, Map);
  for (const [l3, u] of a)
    e instanceof Map ? e.has(l3) || e.set(l3, u) : e instanceof Set ? e.add(l3) : Object.prototype.hasOwnProperty.call(e, l3) || Object.defineProperty(e, l3, {
      value: u,
      writable: true,
      enumerable: true,
      configurable: true
    });
  return e;
}
function zc(t3, e, { key: n, value: r3 }) {
  if (Ye(n) && n.addToJSMap)
    n.addToJSMap(t3, e, r3);
  else if ($p(t3, n))
    Ic(t3, e, r3);
  else {
    const a = Nt(n, "", t3);
    if (e instanceof Map)
      e.set(a, Nt(r3, a, t3));
    else if (e instanceof Set)
      e.add(a);
    else {
      const l3 = Pp(n, a, t3), u = Nt(r3, l3, t3);
      l3 in e ? Object.defineProperty(e, l3, {
        value: u,
        writable: true,
        enumerable: true,
        configurable: true
      }) : e[l3] = u;
    }
  }
  return e;
}
function Pp(t3, e, n) {
  if (e === null)
    return "";
  if (typeof e != "object")
    return String(e);
  if (Ye(t3) && (n != null && n.doc)) {
    const r3 = _c(n.doc, {});
    r3.anchors = /* @__PURE__ */ new Set();
    for (const l3 of n.anchors.keys())
      r3.anchors.add(l3.anchor);
    r3.inFlow = true, r3.inStringifyKey = true;
    const a = t3.toString(r3);
    if (!n.mapKeyWarned) {
      let l3 = JSON.stringify(a);
      l3.length > 40 && (l3 = l3.substring(0, 36) + '..."'), Cc(n.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${l3}. Set mapAsMap: true to use object keys.`), n.mapKeyWarned = true;
    }
    return a;
  }
  return JSON.stringify(e);
}
function $0(t3, e, n) {
  const r3 = Sr(t3, void 0, n), a = Sr(e, void 0, n);
  return new ut(r3, a);
}
class ut {
  constructor(e, n = null) {
    Object.defineProperty(this, Mt, { value: kc }), this.key = e, this.value = n;
  }
  clone(e) {
    let { key: n, value: r3 } = this;
    return Ye(n) && (n = n.clone(e)), Ye(r3) && (r3 = r3.clone(e)), new ut(n, r3);
  }
  toJSON(e, n) {
    const r3 = n != null && n.mapAsMap ? /* @__PURE__ */ new Map() : {};
    return zc(n, r3, this);
  }
  toString(e, n, r3) {
    return e != null && e.doc ? Rp(this, e, n, r3) : JSON.stringify(this);
  }
}
function Oc(t3, e, n) {
  return (e.inFlow ?? t3.flow ? Hp : Fp)(t3, e, n);
}
function Fp({ comment: t3, items: e }, n, { blockItemPrefix: r3, flowChars: a, itemIndent: l3, onChompKeep: u, onComment: f }) {
  const { indent: p, options: { commentString: y } } = n, v = Object.assign({}, n, { indent: l3, type: null });
  let T = false;
  const _ = [];
  for (let S = 0; S < e.length; ++S) {
    const N = e[S];
    let O = null;
    if (Ye(N))
      !T && N.spaceBefore && _.push(""), As(n, _, N.commentBefore, T), N.comment && (O = N.comment);
    else if (Je(N)) {
      const F = Ye(N.key) ? N.key : null;
      F && (!T && F.spaceBefore && _.push(""), As(n, _, F.commentBefore, T));
    }
    T = false;
    let I3 = Pn(N, v, () => O = null, () => T = true);
    O && (I3 += yn(I3, l3, y(O))), T && O && (T = false), _.push(r3 + I3);
  }
  let C;
  if (_.length === 0)
    C = a.start + a.end;
  else {
    C = _[0];
    for (let S = 1; S < _.length; ++S) {
      const N = _[S];
      C += N ? `
${p}${N}` : `
`;
    }
  }
  return t3 ? (C += `
` + Xt(y(t3), p), f && f()) : T && u && u(), C;
}
function Hp({ items: t3 }, e, { flowChars: n, itemIndent: r3 }) {
  const { indent: a, indentStep: l3, flowCollectionPadding: u, options: { commentString: f } } = e;
  r3 += l3;
  const p = Object.assign({}, e, {
    indent: r3,
    inFlow: true,
    type: null
  });
  let y = false, v = 0;
  const T = [];
  for (let S = 0; S < t3.length; ++S) {
    const N = t3[S];
    let O = null;
    if (Ye(N))
      N.spaceBefore && T.push(""), As(e, T, N.commentBefore, false), N.comment && (O = N.comment);
    else if (Je(N)) {
      const F = Ye(N.key) ? N.key : null;
      F && (F.spaceBefore && T.push(""), As(e, T, F.commentBefore, false), F.comment && (y = true));
      const H = Ye(N.value) ? N.value : null;
      H ? (H.comment && (O = H.comment), H.commentBefore && (y = true)) : N.value == null && (F != null && F.comment) && (O = F.comment);
    }
    O && (y = true);
    let I3 = Pn(N, p, () => O = null);
    S < t3.length - 1 && (I3 += ","), O && (I3 += yn(I3, r3, f(O))), !y && (T.length > v || I3.includes(`
`)) && (y = true), T.push(I3), v = T.length;
  }
  const { start: _, end: C } = n;
  if (T.length === 0)
    return _ + C;
  if (!y) {
    const S = T.reduce((N, O) => N + O.length + 2, 2);
    y = e.options.lineWidth > 0 && S > e.options.lineWidth;
  }
  if (y) {
    let S = _;
    for (const N of T)
      S += N ? `
${l3}${a}${N}` : `
`;
    return `${S}
${a}${C}`;
  } else
    return `${_}${u}${T.join(" ")}${u}${C}`;
}
function As({ indent: t3, options: { commentString: e } }, n, r3, a) {
  if (r3 && a && (r3 = r3.replace(/^\n+/, "")), r3) {
    const l3 = Xt(e(r3), t3);
    n.push(l3.trimStart());
  }
}
function bn(t3, e) {
  const n = Le(e) ? e.value : e;
  for (const r3 of t3)
    if (Je(r3) && (r3.key === e || r3.key === n || Le(r3.key) && r3.key.value === n))
      return r3;
}
class Tt extends Mc {
  static get tagName() {
    return "tag:yaml.org,2002:map";
  }
  constructor(e) {
    super(on, e), this.items = [];
  }
  /**
   * A generic collection parsing method that can be extended
   * to other node classes that inherit from YAMLMap
   */
  static from(e, n, r3) {
    const { keepUndefined: a, replacer: l3 } = r3, u = new this(e), f = (p, y) => {
      if (typeof l3 == "function")
        y = l3.call(n, p, y);
      else if (Array.isArray(l3) && !l3.includes(p))
        return;
      (y !== void 0 || a) && u.items.push($0(p, y, r3));
    };
    if (n instanceof Map)
      for (const [p, y] of n)
        f(p, y);
    else if (n && typeof n == "object")
      for (const p of Object.keys(n))
        f(p, n[p]);
    return typeof e.sortMapEntries == "function" && u.items.sort(e.sortMapEntries), u;
  }
  /**
   * Adds a value to the collection.
   *
   * @param overwrite - If not set `true`, using a key that is already in the
   *   collection will throw. Otherwise, overwrites the previous value.
   */
  add(e, n) {
    var u;
    let r3;
    Je(e) ? r3 = e : !e || typeof e != "object" || !("key" in e) ? r3 = new ut(e, e == null ? void 0 : e.value) : r3 = new ut(e.key, e.value);
    const a = bn(this.items, r3.key), l3 = (u = this.schema) == null ? void 0 : u.sortMapEntries;
    if (a) {
      if (!n)
        throw new Error(`Key ${r3.key} already set`);
      Le(a.value) && Nc(r3.value) ? a.value.value = r3.value : a.value = r3.value;
    } else if (l3) {
      const f = this.items.findIndex((p) => l3(r3, p) < 0);
      f === -1 ? this.items.push(r3) : this.items.splice(f, 0, r3);
    } else
      this.items.push(r3);
  }
  delete(e) {
    const n = bn(this.items, e);
    return n ? this.items.splice(this.items.indexOf(n), 1).length > 0 : false;
  }
  get(e, n) {
    const r3 = bn(this.items, e), a = r3 == null ? void 0 : r3.value;
    return (!n && Le(a) ? a.value : a) ?? void 0;
  }
  has(e) {
    return !!bn(this.items, e);
  }
  set(e, n) {
    this.add(new ut(e, n), true);
  }
  /**
   * @param ctx - Conversion context, originally set in Document#toJS()
   * @param {Class} Type - If set, forces the returned collection type
   * @returns Instance of Type, Map, or Object
   */
  toJSON(e, n, r3) {
    const a = r3 ? new r3() : n != null && n.mapAsMap ? /* @__PURE__ */ new Map() : {};
    n != null && n.onCreate && n.onCreate(a);
    for (const l3 of this.items)
      zc(n, a, l3);
    return a;
  }
  toString(e, n, r3) {
    if (!e)
      return JSON.stringify(this);
    for (const a of this.items)
      if (!Je(a))
        throw new Error(`Map items must all be pairs; found ${JSON.stringify(a)} instead`);
    return !e.allNullValues && this.hasAllNullValues(false) && (e = Object.assign({}, e, { allNullValues: true })), Oc(this, e, {
      blockItemPrefix: "",
      flowChars: { start: "{", end: "}" },
      itemIndent: e.indent || "",
      onChompKeep: r3,
      onComment: n
    });
  }
}
const Kn = {
  collection: "map",
  default: true,
  nodeClass: Tt,
  tag: "tag:yaml.org,2002:map",
  resolve(t3, e) {
    return Er(t3) || e("Expected a mapping for this tag"), t3;
  },
  createNode: (t3, e, n) => Tt.from(t3, e, n)
};
class kn extends Mc {
  static get tagName() {
    return "tag:yaml.org,2002:seq";
  }
  constructor(e) {
    super(Un, e), this.items = [];
  }
  add(e) {
    this.items.push(e);
  }
  /**
   * Removes a value from the collection.
   *
   * `key` must contain a representation of an integer for this to succeed.
   * It may be wrapped in a `Scalar`.
   *
   * @returns `true` if the item was found and removed.
   */
  delete(e) {
    const n = ss(e);
    return typeof n != "number" ? false : this.items.splice(n, 1).length > 0;
  }
  get(e, n) {
    const r3 = ss(e);
    if (typeof r3 != "number")
      return;
    const a = this.items[r3];
    return !n && Le(a) ? a.value : a;
  }
  /**
   * Checks if the collection includes a value with the key `key`.
   *
   * `key` must contain a representation of an integer for this to succeed.
   * It may be wrapped in a `Scalar`.
   */
  has(e) {
    const n = ss(e);
    return typeof n == "number" && n < this.items.length;
  }
  /**
   * Sets a value in this collection. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   *
   * If `key` does not contain a representation of an integer, this will throw.
   * It may be wrapped in a `Scalar`.
   */
  set(e, n) {
    const r3 = ss(e);
    if (typeof r3 != "number")
      throw new Error(`Expected a valid index, not ${e}.`);
    const a = this.items[r3];
    Le(a) && Nc(n) ? a.value = n : this.items[r3] = n;
  }
  toJSON(e, n) {
    const r3 = [];
    n != null && n.onCreate && n.onCreate(r3);
    let a = 0;
    for (const l3 of this.items)
      r3.push(Nt(l3, String(a++), n));
    return r3;
  }
  toString(e, n, r3) {
    return e ? Oc(this, e, {
      blockItemPrefix: "- ",
      flowChars: { start: "[", end: "]" },
      itemIndent: (e.indent || "") + "  ",
      onChompKeep: r3,
      onComment: n
    }) : JSON.stringify(this);
  }
  static from(e, n, r3) {
    const { replacer: a } = r3, l3 = new this(e);
    if (n && Symbol.iterator in Object(n)) {
      let u = 0;
      for (let f of n) {
        if (typeof a == "function") {
          const p = n instanceof Set ? f : String(u++);
          f = a.call(n, p, f);
        }
        l3.items.push(Sr(f, void 0, r3));
      }
    }
    return l3;
  }
}
function ss(t3) {
  let e = Le(t3) ? t3.value : t3;
  return e && typeof e == "string" && (e = Number(e)), typeof e == "number" && Number.isInteger(e) && e >= 0 ? e : null;
}
const Xn = {
  collection: "seq",
  default: true,
  nodeClass: kn,
  tag: "tag:yaml.org,2002:seq",
  resolve(t3, e) {
    return _r(t3) || e("Expected a sequence for this tag"), t3;
  },
  createNode: (t3, e, n) => kn.from(t3, e, n)
}, Ds = {
  identify: (t3) => typeof t3 == "string",
  default: true,
  tag: "tag:yaml.org,2002:str",
  resolve: (t3) => t3,
  stringify(t3, e, n, r3) {
    return e = Object.assign({ actualString: true }, e), R0(t3, e, n, r3);
  }
}, Ls = {
  identify: (t3) => t3 == null,
  createNode: () => new be(null),
  default: true,
  tag: "tag:yaml.org,2002:null",
  test: /^(?:~|[Nn]ull|NULL)?$/,
  resolve: () => new be(null),
  stringify: ({ source: t3 }, e) => typeof t3 == "string" && Ls.test.test(t3) ? t3 : e.options.nullStr
}, P0 = {
  identify: (t3) => typeof t3 == "boolean",
  default: true,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
  resolve: (t3) => new be(t3[0] === "t" || t3[0] === "T"),
  stringify({ source: t3, value: e }, n) {
    if (t3 && P0.test.test(t3)) {
      const r3 = t3[0] === "t" || t3[0] === "T";
      if (e === r3)
        return t3;
    }
    return e ? n.options.trueStr : n.options.falseStr;
  }
};
function It({ format: t3, minFractionDigits: e, tag: n, value: r3 }) {
  if (typeof r3 == "bigint")
    return String(r3);
  const a = typeof r3 == "number" ? r3 : Number(r3);
  if (!isFinite(a))
    return isNaN(a) ? ".nan" : a < 0 ? "-.inf" : ".inf";
  let l3 = JSON.stringify(r3);
  if (!t3 && e && (!n || n === "tag:yaml.org,2002:float") && /^\d/.test(l3)) {
    let u = l3.indexOf(".");
    u < 0 && (u = l3.length, l3 += ".");
    let f = e - (l3.length - u - 1);
    for (; f-- > 0; )
      l3 += "0";
  }
  return l3;
}
const Bc = {
  identify: (t3) => typeof t3 == "number",
  default: true,
  tag: "tag:yaml.org,2002:float",
  test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
  resolve: (t3) => t3.slice(-3).toLowerCase() === "nan" ? NaN : t3[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
  stringify: It
}, Dc = {
  identify: (t3) => typeof t3 == "number",
  default: true,
  tag: "tag:yaml.org,2002:float",
  format: "EXP",
  test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
  resolve: (t3) => parseFloat(t3),
  stringify(t3) {
    const e = Number(t3.value);
    return isFinite(e) ? e.toExponential() : It(t3);
  }
}, Lc = {
  identify: (t3) => typeof t3 == "number",
  default: true,
  tag: "tag:yaml.org,2002:float",
  test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
  resolve(t3) {
    const e = new be(parseFloat(t3)), n = t3.indexOf(".");
    return n !== -1 && t3[t3.length - 1] === "0" && (e.minFractionDigits = t3.length - n - 1), e;
  },
  stringify: It
}, qs = (t3) => typeof t3 == "bigint" || Number.isInteger(t3), F0 = (t3, e, n, { intAsBigInt: r3 }) => r3 ? BigInt(t3) : parseInt(t3.substring(e), n);
function qc(t3, e, n) {
  const { value: r3 } = t3;
  return qs(r3) && r3 >= 0 ? n + r3.toString(e) : It(t3);
}
const Rc = {
  identify: (t3) => qs(t3) && t3 >= 0,
  default: true,
  tag: "tag:yaml.org,2002:int",
  format: "OCT",
  test: /^0o[0-7]+$/,
  resolve: (t3, e, n) => F0(t3, 2, 8, n),
  stringify: (t3) => qc(t3, 8, "0o")
}, $c = {
  identify: qs,
  default: true,
  tag: "tag:yaml.org,2002:int",
  test: /^[-+]?[0-9]+$/,
  resolve: (t3, e, n) => F0(t3, 0, 10, n),
  stringify: It
}, Pc = {
  identify: (t3) => qs(t3) && t3 >= 0,
  default: true,
  tag: "tag:yaml.org,2002:int",
  format: "HEX",
  test: /^0x[0-9a-fA-F]+$/,
  resolve: (t3, e, n) => F0(t3, 2, 16, n),
  stringify: (t3) => qc(t3, 16, "0x")
}, jp = [
  Kn,
  Xn,
  Ds,
  Ls,
  P0,
  Rc,
  $c,
  Pc,
  Bc,
  Dc,
  Lc
];
function al(t3) {
  return typeof t3 == "bigint" || Number.isInteger(t3);
}
const is = ({ value: t3 }) => JSON.stringify(t3), Vp = [
  {
    identify: (t3) => typeof t3 == "string",
    default: true,
    tag: "tag:yaml.org,2002:str",
    resolve: (t3) => t3,
    stringify: is
  },
  {
    identify: (t3) => t3 == null,
    createNode: () => new be(null),
    default: true,
    tag: "tag:yaml.org,2002:null",
    test: /^null$/,
    resolve: () => null,
    stringify: is
  },
  {
    identify: (t3) => typeof t3 == "boolean",
    default: true,
    tag: "tag:yaml.org,2002:bool",
    test: /^true$|^false$/,
    resolve: (t3) => t3 === "true",
    stringify: is
  },
  {
    identify: al,
    default: true,
    tag: "tag:yaml.org,2002:int",
    test: /^-?(?:0|[1-9][0-9]*)$/,
    resolve: (t3, e, { intAsBigInt: n }) => n ? BigInt(t3) : parseInt(t3, 10),
    stringify: ({ value: t3 }) => al(t3) ? t3.toString() : JSON.stringify(t3)
  },
  {
    identify: (t3) => typeof t3 == "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
    resolve: (t3) => parseFloat(t3),
    stringify: is
  }
], Up = {
  default: true,
  tag: "",
  test: /^/,
  resolve(t3, e) {
    return e(`Unresolved plain scalar ${JSON.stringify(t3)}`), t3;
  }
}, Gp = [Kn, Xn].concat(Vp, Up), H0 = {
  identify: (t3) => t3 instanceof Uint8Array,
  // Buffer inherits from Uint8Array
  default: false,
  tag: "tag:yaml.org,2002:binary",
  /**
   * Returns a Buffer in node and an Uint8Array in browsers
   *
   * To use the resulting buffer as an image, you'll want to do something like:
   *
   *   const blob = new Blob([buffer], { type: 'image/jpeg' })
   *   document.querySelector('#photo').src = URL.createObjectURL(blob)
   */
  resolve(t3, e) {
    if (typeof atob == "function") {
      const n = atob(t3.replace(/[\n\r]/g, "")), r3 = new Uint8Array(n.length);
      for (let a = 0; a < n.length; ++a)
        r3[a] = n.charCodeAt(a);
      return r3;
    } else
      return e("This environment does not support reading binary tags; either Buffer or atob is required"), t3;
  },
  stringify({ comment: t3, type: e, value: n }, r3, a, l3) {
    if (!n)
      return "";
    const u = n;
    let f;
    if (typeof btoa == "function") {
      let p = "";
      for (let y = 0; y < u.length; ++y)
        p += String.fromCharCode(u[y]);
      f = btoa(p);
    } else
      throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
    if (e ?? (e = be.BLOCK_LITERAL), e !== be.QUOTE_DOUBLE) {
      const p = Math.max(r3.options.lineWidth - r3.indent.length, r3.options.minContentWidth), y = Math.ceil(f.length / p), v = new Array(y);
      for (let T = 0, _ = 0; T < y; ++T, _ += p)
        v[T] = f.substr(_, p);
      f = v.join(e === be.BLOCK_LITERAL ? `
` : " ");
    }
    return R0({ comment: t3, type: e, value: f }, r3, a, l3);
  }
};
function Fc(t3, e) {
  if (_r(t3))
    for (let n = 0; n < t3.items.length; ++n) {
      let r3 = t3.items[n];
      if (!Je(r3)) {
        if (Er(r3)) {
          r3.items.length > 1 && e("Each pair must have its own sequence indicator");
          const a = r3.items[0] || new ut(new be(null));
          if (r3.commentBefore && (a.key.commentBefore = a.key.commentBefore ? `${r3.commentBefore}
${a.key.commentBefore}` : r3.commentBefore), r3.comment) {
            const l3 = a.value ?? a.key;
            l3.comment = l3.comment ? `${r3.comment}
${l3.comment}` : r3.comment;
          }
          r3 = a;
        }
        t3.items[n] = Je(r3) ? r3 : new ut(r3);
      }
    }
  else
    e("Expected a sequence for this tag");
  return t3;
}
function Hc(t3, e, n) {
  const { replacer: r3 } = n, a = new kn(t3);
  a.tag = "tag:yaml.org,2002:pairs";
  let l3 = 0;
  if (e && Symbol.iterator in Object(e))
    for (let u of e) {
      typeof r3 == "function" && (u = r3.call(e, String(l3++), u));
      let f, p;
      if (Array.isArray(u))
        if (u.length === 2)
          f = u[0], p = u[1];
        else
          throw new TypeError(`Expected [key, value] tuple: ${u}`);
      else if (u && u instanceof Object) {
        const y = Object.keys(u);
        if (y.length === 1)
          f = y[0], p = u[f];
        else
          throw new TypeError(`Expected tuple with one key, not ${y.length} keys`);
      } else
        f = u;
      a.items.push($0(f, p, n));
    }
  return a;
}
const j0 = {
  collection: "seq",
  default: false,
  tag: "tag:yaml.org,2002:pairs",
  resolve: Fc,
  createNode: Hc
};
class qn extends kn {
  constructor() {
    super(), this.add = Tt.prototype.add.bind(this), this.delete = Tt.prototype.delete.bind(this), this.get = Tt.prototype.get.bind(this), this.has = Tt.prototype.has.bind(this), this.set = Tt.prototype.set.bind(this), this.tag = qn.tag;
  }
  /**
   * If `ctx` is given, the return type is actually `Map<unknown, unknown>`,
   * but TypeScript won't allow widening the signature of a child method.
   */
  toJSON(e, n) {
    if (!n)
      return super.toJSON(e);
    const r3 = /* @__PURE__ */ new Map();
    n != null && n.onCreate && n.onCreate(r3);
    for (const a of this.items) {
      let l3, u;
      if (Je(a) ? (l3 = Nt(a.key, "", n), u = Nt(a.value, l3, n)) : l3 = Nt(a, "", n), r3.has(l3))
        throw new Error("Ordered maps must not include duplicate keys");
      r3.set(l3, u);
    }
    return r3;
  }
  static from(e, n, r3) {
    const a = Hc(e, n, r3), l3 = new this();
    return l3.items = a.items, l3;
  }
}
qn.tag = "tag:yaml.org,2002:omap";
const V0 = {
  collection: "seq",
  identify: (t3) => t3 instanceof Map,
  nodeClass: qn,
  default: false,
  tag: "tag:yaml.org,2002:omap",
  resolve(t3, e) {
    const n = Fc(t3, e), r3 = [];
    for (const { key: a } of n.items)
      Le(a) && (r3.includes(a.value) ? e(`Ordered maps must not include duplicate keys: ${a.value}`) : r3.push(a.value));
    return Object.assign(new qn(), n);
  },
  createNode: (t3, e, n) => qn.from(t3, e, n)
};
function jc({ value: t3, source: e }, n) {
  return e && (t3 ? Vc : Uc).test.test(e) ? e : t3 ? n.options.trueStr : n.options.falseStr;
}
const Vc = {
  identify: (t3) => t3 === true,
  default: true,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
  resolve: () => new be(true),
  stringify: jc
}, Uc = {
  identify: (t3) => t3 === false,
  default: true,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
  resolve: () => new be(false),
  stringify: jc
}, Kp = {
  identify: (t3) => typeof t3 == "number",
  default: true,
  tag: "tag:yaml.org,2002:float",
  test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
  resolve: (t3) => t3.slice(-3).toLowerCase() === "nan" ? NaN : t3[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
  stringify: It
}, Xp = {
  identify: (t3) => typeof t3 == "number",
  default: true,
  tag: "tag:yaml.org,2002:float",
  format: "EXP",
  test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
  resolve: (t3) => parseFloat(t3.replace(/_/g, "")),
  stringify(t3) {
    const e = Number(t3.value);
    return isFinite(e) ? e.toExponential() : It(t3);
  }
}, Wp = {
  identify: (t3) => typeof t3 == "number",
  default: true,
  tag: "tag:yaml.org,2002:float",
  test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
  resolve(t3) {
    const e = new be(parseFloat(t3.replace(/_/g, ""))), n = t3.indexOf(".");
    if (n !== -1) {
      const r3 = t3.substring(n + 1).replace(/_/g, "");
      r3[r3.length - 1] === "0" && (e.minFractionDigits = r3.length);
    }
    return e;
  },
  stringify: It
}, Cr = (t3) => typeof t3 == "bigint" || Number.isInteger(t3);
function Rs(t3, e, n, { intAsBigInt: r3 }) {
  const a = t3[0];
  if ((a === "-" || a === "+") && (e += 1), t3 = t3.substring(e).replace(/_/g, ""), r3) {
    switch (n) {
      case 2:
        t3 = `0b${t3}`;
        break;
      case 8:
        t3 = `0o${t3}`;
        break;
      case 16:
        t3 = `0x${t3}`;
        break;
    }
    const u = BigInt(t3);
    return a === "-" ? BigInt(-1) * u : u;
  }
  const l3 = parseInt(t3, n);
  return a === "-" ? -1 * l3 : l3;
}
function U0(t3, e, n) {
  const { value: r3 } = t3;
  if (Cr(r3)) {
    const a = r3.toString(e);
    return r3 < 0 ? "-" + n + a.substr(1) : n + a;
  }
  return It(t3);
}
const Yp = {
  identify: Cr,
  default: true,
  tag: "tag:yaml.org,2002:int",
  format: "BIN",
  test: /^[-+]?0b[0-1_]+$/,
  resolve: (t3, e, n) => Rs(t3, 2, 2, n),
  stringify: (t3) => U0(t3, 2, "0b")
}, Jp = {
  identify: Cr,
  default: true,
  tag: "tag:yaml.org,2002:int",
  format: "OCT",
  test: /^[-+]?0[0-7_]+$/,
  resolve: (t3, e, n) => Rs(t3, 1, 8, n),
  stringify: (t3) => U0(t3, 8, "0")
}, Qp = {
  identify: Cr,
  default: true,
  tag: "tag:yaml.org,2002:int",
  test: /^[-+]?[0-9][0-9_]*$/,
  resolve: (t3, e, n) => Rs(t3, 0, 10, n),
  stringify: It
}, Zp = {
  identify: Cr,
  default: true,
  tag: "tag:yaml.org,2002:int",
  format: "HEX",
  test: /^[-+]?0x[0-9a-fA-F_]+$/,
  resolve: (t3, e, n) => Rs(t3, 2, 16, n),
  stringify: (t3) => U0(t3, 16, "0x")
};
class Rn extends Tt {
  constructor(e) {
    super(e), this.tag = Rn.tag;
  }
  add(e) {
    let n;
    Je(e) ? n = e : e && typeof e == "object" && "key" in e && "value" in e && e.value === null ? n = new ut(e.key, null) : n = new ut(e, null), bn(this.items, n.key) || this.items.push(n);
  }
  /**
   * If `keepPair` is `true`, returns the Pair matching `key`.
   * Otherwise, returns the value of that Pair's key.
   */
  get(e, n) {
    const r3 = bn(this.items, e);
    return !n && Je(r3) ? Le(r3.key) ? r3.key.value : r3.key : r3;
  }
  set(e, n) {
    if (typeof n != "boolean")
      throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`);
    const r3 = bn(this.items, e);
    r3 && !n ? this.items.splice(this.items.indexOf(r3), 1) : !r3 && n && this.items.push(new ut(e));
  }
  toJSON(e, n) {
    return super.toJSON(e, n, Set);
  }
  toString(e, n, r3) {
    if (!e)
      return JSON.stringify(this);
    if (this.hasAllNullValues(true))
      return super.toString(Object.assign({}, e, { allNullValues: true }), n, r3);
    throw new Error("Set items must all have null values");
  }
  static from(e, n, r3) {
    const { replacer: a } = r3, l3 = new this(e);
    if (n && Symbol.iterator in Object(n))
      for (let u of n)
        typeof a == "function" && (u = a.call(n, u, u)), l3.items.push($0(u, null, r3));
    return l3;
  }
}
Rn.tag = "tag:yaml.org,2002:set";
const G0 = {
  collection: "map",
  identify: (t3) => t3 instanceof Set,
  nodeClass: Rn,
  default: false,
  tag: "tag:yaml.org,2002:set",
  createNode: (t3, e, n) => Rn.from(t3, e, n),
  resolve(t3, e) {
    if (Er(t3)) {
      if (t3.hasAllNullValues(true))
        return Object.assign(new Rn(), t3);
      e("Set items must all have null values");
    } else
      e("Expected a mapping for this tag");
    return t3;
  }
};
function K0(t3, e) {
  const n = t3[0], r3 = n === "-" || n === "+" ? t3.substring(1) : t3, a = (u) => e ? BigInt(u) : Number(u), l3 = r3.replace(/_/g, "").split(":").reduce((u, f) => u * a(60) + a(f), a(0));
  return n === "-" ? a(-1) * l3 : l3;
}
function Gc(t3) {
  let { value: e } = t3, n = (u) => u;
  if (typeof e == "bigint")
    n = (u) => BigInt(u);
  else if (isNaN(e) || !isFinite(e))
    return It(t3);
  let r3 = "";
  e < 0 && (r3 = "-", e *= n(-1));
  const a = n(60), l3 = [e % a];
  return e < 60 ? l3.unshift(0) : (e = (e - l3[0]) / a, l3.unshift(e % a), e >= 60 && (e = (e - l3[0]) / a, l3.unshift(e))), r3 + l3.map((u) => String(u).padStart(2, "0")).join(":").replace(/000000\d*$/, "");
}
const Kc = {
  identify: (t3) => typeof t3 == "bigint" || Number.isInteger(t3),
  default: true,
  tag: "tag:yaml.org,2002:int",
  format: "TIME",
  test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
  resolve: (t3, e, { intAsBigInt: n }) => K0(t3, n),
  stringify: Gc
}, Xc = {
  identify: (t3) => typeof t3 == "number",
  default: true,
  tag: "tag:yaml.org,2002:float",
  format: "TIME",
  test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
  resolve: (t3) => K0(t3, false),
  stringify: Gc
}, $s = {
  identify: (t3) => t3 instanceof Date,
  default: true,
  tag: "tag:yaml.org,2002:timestamp",
  // If the time zone is omitted, the timestamp is assumed to be specified in UTC. The time part
  // may be omitted altogether, resulting in a date format. In such a case, the time part is
  // assumed to be 00:00:00Z (start of day, UTC).
  test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
  resolve(t3) {
    const e = t3.match($s.test);
    if (!e)
      throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");
    const [, n, r3, a, l3, u, f] = e.map(Number), p = e[7] ? Number((e[7] + "00").substr(1, 3)) : 0;
    let y = Date.UTC(n, r3 - 1, a, l3 || 0, u || 0, f || 0, p);
    const v = e[8];
    if (v && v !== "Z") {
      let T = K0(v, false);
      Math.abs(T) < 30 && (T *= 60), y -= 6e4 * T;
    }
    return new Date(y);
  },
  stringify: ({ value: t3 }) => (t3 == null ? void 0 : t3.toISOString().replace(/(T00:00:00)?\.000Z$/, "")) ?? ""
}, ol = [
  Kn,
  Xn,
  Ds,
  Ls,
  Vc,
  Uc,
  Yp,
  Jp,
  Qp,
  Zp,
  Kp,
  Xp,
  Wp,
  H0,
  Yt,
  V0,
  j0,
  G0,
  Kc,
  Xc,
  $s
], ll = /* @__PURE__ */ new Map([
  ["core", jp],
  ["failsafe", [Kn, Xn, Ds]],
  ["json", Gp],
  ["yaml11", ol],
  ["yaml-1.1", ol]
]), cl = {
  binary: H0,
  bool: P0,
  float: Lc,
  floatExp: Dc,
  floatNaN: Bc,
  floatTime: Xc,
  int: $c,
  intHex: Pc,
  intOct: Rc,
  intTime: Kc,
  map: Kn,
  merge: Yt,
  null: Ls,
  omap: V0,
  pairs: j0,
  seq: Xn,
  set: G0,
  timestamp: $s
}, e2 = {
  "tag:yaml.org,2002:binary": H0,
  "tag:yaml.org,2002:merge": Yt,
  "tag:yaml.org,2002:omap": V0,
  "tag:yaml.org,2002:pairs": j0,
  "tag:yaml.org,2002:set": G0,
  "tag:yaml.org,2002:timestamp": $s
};
function Vi(t3, e, n) {
  const r3 = ll.get(e);
  if (r3 && !t3)
    return n && !r3.includes(Yt) ? r3.concat(Yt) : r3.slice();
  let a = r3;
  if (!a)
    if (Array.isArray(t3))
      a = [];
    else {
      const l3 = Array.from(ll.keys()).filter((u) => u !== "yaml11").map((u) => JSON.stringify(u)).join(", ");
      throw new Error(`Unknown schema "${e}"; use one of ${l3} or define customTags array`);
    }
  if (Array.isArray(t3))
    for (const l3 of t3)
      a = a.concat(l3);
  else
    typeof t3 == "function" && (a = t3(a.slice()));
  return n && (a = a.concat(Yt)), a.reduce((l3, u) => {
    const f = typeof u == "string" ? cl[u] : u;
    if (!f) {
      const p = JSON.stringify(u), y = Object.keys(cl).map((v) => JSON.stringify(v)).join(", ");
      throw new Error(`Unknown custom tag ${p}; use one of ${y}`);
    }
    return l3.includes(f) || l3.push(f), l3;
  }, []);
}
const t22 = (t3, e) => t3.key < e.key ? -1 : t3.key > e.key ? 1 : 0;
class X0 {
  constructor({ compat: e, customTags: n, merge: r3, resolveKnownTags: a, schema: l3, sortMapEntries: u, toStringDefaults: f }) {
    this.compat = Array.isArray(e) ? Vi(e, "compat") : e ? Vi(null, e) : null, this.name = typeof l3 == "string" && l3 || "core", this.knownTags = a ? e2 : {}, this.tags = Vi(n, this.name, r3), this.toStringOptions = f ?? null, Object.defineProperty(this, on, { value: Kn }), Object.defineProperty(this, $t, { value: Ds }), Object.defineProperty(this, Un, { value: Xn }), this.sortMapEntries = typeof u == "function" ? u : u === true ? t22 : null;
  }
  clone() {
    const e = Object.create(X0.prototype, Object.getOwnPropertyDescriptors(this));
    return e.tags = this.tags.slice(), e;
  }
}
function n2(t3, e) {
  var p;
  const n = [];
  let r3 = e.directives === true;
  if (e.directives !== false && t3.directives) {
    const y = t3.directives.toString(t3);
    y ? (n.push(y), r3 = true) : t3.directives.docStart && (r3 = true);
  }
  r3 && n.push("---");
  const a = _c(t3, e), { commentString: l3 } = a.options;
  if (t3.commentBefore) {
    n.length !== 1 && n.unshift("");
    const y = l3(t3.commentBefore);
    n.unshift(Xt(y, ""));
  }
  let u = false, f = null;
  if (t3.contents) {
    if (Ye(t3.contents)) {
      if (t3.contents.spaceBefore && r3 && n.push(""), t3.contents.commentBefore) {
        const T = l3(t3.contents.commentBefore);
        n.push(Xt(T, ""));
      }
      a.forceBlockIndent = !!t3.comment, f = t3.contents.comment;
    }
    const y = f ? void 0 : () => u = true;
    let v = Pn(t3.contents, a, () => f = null, y);
    f && (v += yn(v, "", l3(f))), (v[0] === "|" || v[0] === ">") && n[n.length - 1] === "---" ? n[n.length - 1] = `--- ${v}` : n.push(v);
  } else
    n.push(Pn(t3.contents, a));
  if ((p = t3.directives) != null && p.docEnd)
    if (t3.comment) {
      const y = l3(t3.comment);
      y.includes(`
`) ? (n.push("..."), n.push(Xt(y, ""))) : n.push(`... ${y}`);
    } else
      n.push("...");
  else {
    let y = t3.comment;
    y && u && (y = y.replace(/^\n+/, "")), y && ((!u || f) && n[n.length - 1] !== "" && n.push(""), n.push(Xt(l3(y), "")));
  }
  return n.join(`
`) + `
`;
}
class Ps {
  constructor(e, n, r3) {
    this.commentBefore = null, this.comment = null, this.errors = [], this.warnings = [], Object.defineProperty(this, Mt, { value: l0 });
    let a = null;
    typeof n == "function" || Array.isArray(n) ? a = n : r3 === void 0 && n && (r3 = n, n = void 0);
    const l3 = Object.assign({
      intAsBigInt: false,
      keepSourceTokens: false,
      logLevel: "warn",
      prettyErrors: true,
      strict: true,
      stringKeys: false,
      uniqueKeys: true,
      version: "1.2"
    }, r3);
    this.options = l3;
    let { version: u } = l3;
    r3 != null && r3._directives ? (this.directives = r3._directives.atDocument(), this.directives.yaml.explicit && (u = this.directives.yaml.version)) : this.directives = new ct({ version: u }), this.setSchema(u, r3), this.contents = e === void 0 ? null : this.createNode(e, a, r3);
  }
  /**
   * Create a deep copy of this Document and its contents.
   *
   * Custom Node values that inherit from `Object` still refer to their original instances.
   */
  clone() {
    const e = Object.create(Ps.prototype, {
      [Mt]: { value: l0 }
    });
    return e.commentBefore = this.commentBefore, e.comment = this.comment, e.errors = this.errors.slice(), e.warnings = this.warnings.slice(), e.options = Object.assign({}, this.options), this.directives && (e.directives = this.directives.clone()), e.schema = this.schema.clone(), e.contents = Ye(this.contents) ? this.contents.clone(e.schema) : this.contents, this.range && (e.range = this.range.slice()), e;
  }
  /** Adds a value to the document. */
  add(e) {
    _n(this.contents) && this.contents.add(e);
  }
  /** Adds a value to the document. */
  addIn(e, n) {
    _n(this.contents) && this.contents.addIn(e, n);
  }
  /**
   * Create a new `Alias` node, ensuring that the target `node` has the required anchor.
   *
   * If `node` already has an anchor, `name` is ignored.
   * Otherwise, the `node.anchor` value will be set to `name`,
   * or if an anchor with that name is already present in the document,
   * `name` will be used as a prefix for a new unique anchor.
   * If `name` is undefined, the generated anchor will use 'a' as a prefix.
   */
  createAlias(e, n) {
    if (!e.anchor) {
      const r3 = Ac(this);
      e.anchor = // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      !n || r3.has(n) ? Tc(n || "a", r3) : n;
    }
    return new q0(e.anchor);
  }
  createNode(e, n, r3) {
    let a;
    if (typeof n == "function")
      e = n.call({ "": e }, "", e), a = n;
    else if (Array.isArray(n)) {
      const O = (F) => typeof F == "number" || F instanceof String || F instanceof Number, I3 = n.filter(O).map(String);
      I3.length > 0 && (n = n.concat(I3)), a = n;
    } else
      r3 === void 0 && n && (r3 = n, n = void 0);
    const { aliasDuplicateObjects: l3, anchorPrefix: u, flow: f, keepUndefined: p, onTagObj: y, tag: v } = r3 ?? {}, { onAnchor: T, setAnchors: _, sourceObjects: C } = Cp(
      this,
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      u || "a"
    ), S = {
      aliasDuplicateObjects: l3 ?? true,
      keepUndefined: p ?? false,
      onAnchor: T,
      onTagObj: y,
      replacer: a,
      schema: this.schema,
      sourceObjects: C
    }, N = Sr(e, v, S);
    return f && We(N) && (N.flow = true), _(), N;
  }
  /**
   * Convert a key and a value into a `Pair` using the current schema,
   * recursively wrapping all values as `Scalar` or `Collection` nodes.
   */
  createPair(e, n, r3 = {}) {
    const a = this.createNode(e, null, r3), l3 = this.createNode(n, null, r3);
    return new ut(a, l3);
  }
  /**
   * Removes a value from the document.
   * @returns `true` if the item was found and removed.
   */
  delete(e) {
    return _n(this.contents) ? this.contents.delete(e) : false;
  }
  /**
   * Removes a value from the document.
   * @returns `true` if the item was found and removed.
   */
  deleteIn(e) {
    return fr(e) ? this.contents == null ? false : (this.contents = null, true) : _n(this.contents) ? this.contents.deleteIn(e) : false;
  }
  /**
   * Returns item at `key`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  get(e, n) {
    return We(this.contents) ? this.contents.get(e, n) : void 0;
  }
  /**
   * Returns item at `path`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  getIn(e, n) {
    return fr(e) ? !n && Le(this.contents) ? this.contents.value : this.contents : We(this.contents) ? this.contents.getIn(e, n) : void 0;
  }
  /**
   * Checks if the document includes a value with the key `key`.
   */
  has(e) {
    return We(this.contents) ? this.contents.has(e) : false;
  }
  /**
   * Checks if the document includes a value at `path`.
   */
  hasIn(e) {
    return fr(e) ? this.contents !== void 0 : We(this.contents) ? this.contents.hasIn(e) : false;
  }
  /**
   * Sets a value in this document. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  set(e, n) {
    this.contents == null ? this.contents = Ss(this.schema, [e], n) : _n(this.contents) && this.contents.set(e, n);
  }
  /**
   * Sets a value in this document. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  setIn(e, n) {
    fr(e) ? this.contents = n : this.contents == null ? this.contents = Ss(this.schema, Array.from(e), n) : _n(this.contents) && this.contents.setIn(e, n);
  }
  /**
   * Change the YAML version and schema used by the document.
   * A `null` version disables support for directives, explicit tags, anchors, and aliases.
   * It also requires the `schema` option to be given as a `Schema` instance value.
   *
   * Overrides all previously set schema options.
   */
  setSchema(e, n = {}) {
    typeof e == "number" && (e = String(e));
    let r3;
    switch (e) {
      case "1.1":
        this.directives ? this.directives.yaml.version = "1.1" : this.directives = new ct({ version: "1.1" }), r3 = { resolveKnownTags: false, schema: "yaml-1.1" };
        break;
      case "1.2":
      case "next":
        this.directives ? this.directives.yaml.version = e : this.directives = new ct({ version: e }), r3 = { resolveKnownTags: true, schema: "core" };
        break;
      case null:
        this.directives && delete this.directives, r3 = null;
        break;
      default: {
        const a = JSON.stringify(e);
        throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${a}`);
      }
    }
    if (n.schema instanceof Object)
      this.schema = n.schema;
    else if (r3)
      this.schema = new X0(Object.assign(r3, n));
    else
      throw new Error("With a null YAML version, the { schema: Schema } option is required");
  }
  // json & jsonArg are only used from toJSON()
  toJS({ json: e, jsonArg: n, mapAsMap: r3, maxAliasCount: a, onAnchor: l3, reviver: u } = {}) {
    const f = {
      anchors: /* @__PURE__ */ new Map(),
      doc: this,
      keep: !e,
      mapAsMap: r3 === true,
      mapKeyWarned: false,
      maxAliasCount: typeof a == "number" ? a : 100
    }, p = Nt(this.contents, n ?? "", f);
    if (typeof l3 == "function")
      for (const { count: y, res: v } of f.anchors.values())
        l3(v, y);
    return typeof u == "function" ? Bn(u, { "": p }, "", p) : p;
  }
  /**
   * A JSON representation of the document `contents`.
   *
   * @param jsonArg Used by `JSON.stringify` to indicate the array index or
   *   property name.
   */
  toJSON(e, n) {
    return this.toJS({ json: true, jsonArg: e, mapAsMap: false, onAnchor: n });
  }
  /** A YAML representation of the document. */
  toString(e = {}) {
    if (this.errors.length > 0)
      throw new Error("Document with errors cannot be stringified");
    if ("indent" in e && (!Number.isInteger(e.indent) || Number(e.indent) <= 0)) {
      const n = JSON.stringify(e.indent);
      throw new Error(`"indent" option must be a positive integer, not ${n}`);
    }
    return n2(this, e);
  }
}
function _n(t3) {
  if (We(t3))
    return true;
  throw new Error("Expected a YAML collection as document contents");
}
class Wc extends Error {
  constructor(e, n, r3, a) {
    super(), this.name = e, this.code = r3, this.message = a, this.pos = n;
  }
}
class dr extends Wc {
  constructor(e, n, r3) {
    super("YAMLParseError", e, n, r3);
  }
}
class r2 extends Wc {
  constructor(e, n, r3) {
    super("YAMLWarning", e, n, r3);
  }
}
const ul = (t3, e) => (n) => {
  if (n.pos[0] === -1)
    return;
  n.linePos = n.pos.map((f) => e.linePos(f));
  const { line: r3, col: a } = n.linePos[0];
  n.message += ` at line ${r3}, column ${a}`;
  let l3 = a - 1, u = t3.substring(e.lineStarts[r3 - 1], e.lineStarts[r3]).replace(/[\n\r]+$/, "");
  if (l3 >= 60 && u.length > 80) {
    const f = Math.min(l3 - 39, u.length - 79);
    u = "…" + u.substring(f), l3 -= f - 1;
  }
  if (u.length > 80 && (u = u.substring(0, 79) + "…"), r3 > 1 && /^ *$/.test(u.substring(0, l3))) {
    let f = t3.substring(e.lineStarts[r3 - 2], e.lineStarts[r3 - 1]);
    f.length > 80 && (f = f.substring(0, 79) + `…
`), u = f + u;
  }
  if (/[^ ]/.test(u)) {
    let f = 1;
    const p = n.linePos[1];
    p && p.line === r3 && p.col > a && (f = Math.max(1, Math.min(p.col - a, 80 - l3)));
    const y = " ".repeat(l3) + "^".repeat(f);
    n.message += `:

${u}
${y}
`;
  }
};
function Fn(t3, { flow: e, indicator: n, next: r3, offset: a, onError: l3, parentIndent: u, startOnNewline: f }) {
  let p = false, y = f, v = f, T = "", _ = "", C = false, S = false, N = null, O = null, I3 = null, F = null, H = null, j = null, V = null;
  for (const K of t3)
    switch (S && (K.type !== "space" && K.type !== "newline" && K.type !== "comma" && l3(K.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), S = false), N && (y && K.type !== "comment" && K.type !== "newline" && l3(N, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), N = null), K.type) {
      case "space":
        !e && (n !== "doc-start" || (r3 == null ? void 0 : r3.type) !== "flow-collection") && K.source.includes("	") && (N = K), v = true;
        break;
      case "comment": {
        v || l3(K, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
        const le = K.source.substring(1) || " ";
        T ? T += _ + le : T = le, _ = "", y = false;
        break;
      }
      case "newline":
        y ? T ? T += K.source : (!j || n !== "seq-item-ind") && (p = true) : _ += K.source, y = true, C = true, (O || I3) && (F = K), v = true;
        break;
      case "anchor":
        O && l3(K, "MULTIPLE_ANCHORS", "A node can have at most one anchor"), K.source.endsWith(":") && l3(K.offset + K.source.length - 1, "BAD_ALIAS", "Anchor ending in : is ambiguous", true), O = K, V ?? (V = K.offset), y = false, v = false, S = true;
        break;
      case "tag": {
        I3 && l3(K, "MULTIPLE_TAGS", "A node can have at most one tag"), I3 = K, V ?? (V = K.offset), y = false, v = false, S = true;
        break;
      }
      case n:
        (O || I3) && l3(K, "BAD_PROP_ORDER", `Anchors and tags must be after the ${K.source} indicator`), j && l3(K, "UNEXPECTED_TOKEN", `Unexpected ${K.source} in ${e ?? "collection"}`), j = K, y = n === "seq-item-ind" || n === "explicit-key-ind", v = false;
        break;
      case "comma":
        if (e) {
          H && l3(K, "UNEXPECTED_TOKEN", `Unexpected , in ${e}`), H = K, y = false, v = false;
          break;
        }
      default:
        l3(K, "UNEXPECTED_TOKEN", `Unexpected ${K.type} token`), y = false, v = false;
    }
  const W = t3[t3.length - 1], ee = W ? W.offset + W.source.length : a;
  return S && r3 && r3.type !== "space" && r3.type !== "newline" && r3.type !== "comma" && (r3.type !== "scalar" || r3.source !== "") && l3(r3.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), N && (y && N.indent <= u || (r3 == null ? void 0 : r3.type) === "block-map" || (r3 == null ? void 0 : r3.type) === "block-seq") && l3(N, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), {
    comma: H,
    found: j,
    spaceBefore: p,
    comment: T,
    hasNewline: C,
    anchor: O,
    tag: I3,
    newlineAfterProp: F,
    end: ee,
    start: V ?? ee
  };
}
function Ar(t3) {
  if (!t3)
    return null;
  switch (t3.type) {
    case "alias":
    case "scalar":
    case "double-quoted-scalar":
    case "single-quoted-scalar":
      if (t3.source.includes(`
`))
        return true;
      if (t3.end) {
        for (const e of t3.end)
          if (e.type === "newline")
            return true;
      }
      return false;
    case "flow-collection":
      for (const e of t3.items) {
        for (const n of e.start)
          if (n.type === "newline")
            return true;
        if (e.sep) {
          for (const n of e.sep)
            if (n.type === "newline")
              return true;
        }
        if (Ar(e.key) || Ar(e.value))
          return true;
      }
      return false;
    default:
      return true;
  }
}
function f0(t3, e, n) {
  if ((e == null ? void 0 : e.type) === "flow-collection") {
    const r3 = e.end[0];
    r3.indent === t3 && (r3.source === "]" || r3.source === "}") && Ar(e) && n(r3, "BAD_INDENT", "Flow end indicator should be more indented than parent", true);
  }
}
function Yc(t3, e, n) {
  const { uniqueKeys: r3 } = t3.options;
  if (r3 === false)
    return false;
  const a = typeof r3 == "function" ? r3 : (l3, u) => l3 === u || Le(l3) && Le(u) && l3.value === u.value;
  return e.some((l3) => a(l3.key, n));
}
const hl = "All mapping items must start at the same column";
function s2({ composeNode: t3, composeEmptyNode: e }, n, r3, a, l3) {
  var v;
  const u = (l3 == null ? void 0 : l3.nodeClass) ?? Tt, f = new u(n.schema);
  n.atRoot && (n.atRoot = false);
  let p = r3.offset, y = null;
  for (const T of r3.items) {
    const { start: _, key: C, sep: S, value: N } = T, O = Fn(_, {
      indicator: "explicit-key-ind",
      next: C ?? (S == null ? void 0 : S[0]),
      offset: p,
      onError: a,
      parentIndent: r3.indent,
      startOnNewline: true
    }), I3 = !O.found;
    if (I3) {
      if (C && (C.type === "block-seq" ? a(p, "BLOCK_AS_IMPLICIT_KEY", "A block sequence may not be used as an implicit map key") : "indent" in C && C.indent !== r3.indent && a(p, "BAD_INDENT", hl)), !O.anchor && !O.tag && !S) {
        y = O.end, O.comment && (f.comment ? f.comment += `
` + O.comment : f.comment = O.comment);
        continue;
      }
      (O.newlineAfterProp || Ar(C)) && a(C ?? _[_.length - 1], "MULTILINE_IMPLICIT_KEY", "Implicit keys need to be on a single line");
    } else
      ((v = O.found) == null ? void 0 : v.indent) !== r3.indent && a(p, "BAD_INDENT", hl);
    n.atKey = true;
    const F = O.end, H = C ? t3(n, C, O, a) : e(n, F, _, null, O, a);
    n.schema.compat && f0(r3.indent, C, a), n.atKey = false, Yc(n, f.items, H) && a(F, "DUPLICATE_KEY", "Map keys must be unique");
    const j = Fn(S ?? [], {
      indicator: "map-value-ind",
      next: N,
      offset: H.range[2],
      onError: a,
      parentIndent: r3.indent,
      startOnNewline: !C || C.type === "block-scalar"
    });
    if (p = j.end, j.found) {
      I3 && ((N == null ? void 0 : N.type) === "block-map" && !j.hasNewline && a(p, "BLOCK_AS_IMPLICIT_KEY", "Nested mappings are not allowed in compact mappings"), n.options.strict && O.start < j.found.offset - 1024 && a(H.range, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));
      const V = N ? t3(n, N, j, a) : e(n, p, S, null, j, a);
      n.schema.compat && f0(r3.indent, N, a), p = V.range[2];
      const W = new ut(H, V);
      n.options.keepSourceTokens && (W.srcToken = T), f.items.push(W);
    } else {
      I3 && a(H.range, "MISSING_CHAR", "Implicit map keys need to be followed by map values"), j.comment && (H.comment ? H.comment += `
` + j.comment : H.comment = j.comment);
      const V = new ut(H);
      n.options.keepSourceTokens && (V.srcToken = T), f.items.push(V);
    }
  }
  return y && y < p && a(y, "IMPOSSIBLE", "Map comment with trailing content"), f.range = [r3.offset, p, y ?? p], f;
}
function i2({ composeNode: t3, composeEmptyNode: e }, n, r3, a, l3) {
  const u = (l3 == null ? void 0 : l3.nodeClass) ?? kn, f = new u(n.schema);
  n.atRoot && (n.atRoot = false), n.atKey && (n.atKey = false);
  let p = r3.offset, y = null;
  for (const { start: v, value: T } of r3.items) {
    const _ = Fn(v, {
      indicator: "seq-item-ind",
      next: T,
      offset: p,
      onError: a,
      parentIndent: r3.indent,
      startOnNewline: true
    });
    if (!_.found)
      if (_.anchor || _.tag || T)
        T && T.type === "block-seq" ? a(_.end, "BAD_INDENT", "All sequence items must start at the same column") : a(p, "MISSING_CHAR", "Sequence item without - indicator");
      else {
        y = _.end, _.comment && (f.comment = _.comment);
        continue;
      }
    const C = T ? t3(n, T, _, a) : e(n, _.end, v, null, _, a);
    n.schema.compat && f0(r3.indent, T, a), p = C.range[2], f.items.push(C);
  }
  return f.range = [r3.offset, p, y ?? p], f;
}
function Ir(t3, e, n, r3) {
  let a = "";
  if (t3) {
    let l3 = false, u = "";
    for (const f of t3) {
      const { source: p, type: y } = f;
      switch (y) {
        case "space":
          l3 = true;
          break;
        case "comment": {
          n && !l3 && r3(f, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
          const v = p.substring(1) || " ";
          a ? a += u + v : a = v, u = "";
          break;
        }
        case "newline":
          a && (u += p), l3 = true;
          break;
        default:
          r3(f, "UNEXPECTED_TOKEN", `Unexpected ${y} at node end`);
      }
      e += p.length;
    }
  }
  return { comment: a, offset: e };
}
const Ui = "Block collections are not allowed within flow collections", Gi = (t3) => t3 && (t3.type === "block-map" || t3.type === "block-seq");
function a2({ composeNode: t3, composeEmptyNode: e }, n, r3, a, l3) {
  const u = r3.start.source === "{", f = u ? "flow map" : "flow sequence", p = (l3 == null ? void 0 : l3.nodeClass) ?? (u ? Tt : kn), y = new p(n.schema);
  y.flow = true;
  const v = n.atRoot;
  v && (n.atRoot = false), n.atKey && (n.atKey = false);
  let T = r3.offset + r3.start.source.length;
  for (let O = 0; O < r3.items.length; ++O) {
    const I3 = r3.items[O], { start: F, key: H, sep: j, value: V } = I3, W = Fn(F, {
      flow: f,
      indicator: "explicit-key-ind",
      next: H ?? (j == null ? void 0 : j[0]),
      offset: T,
      onError: a,
      parentIndent: r3.indent,
      startOnNewline: false
    });
    if (!W.found) {
      if (!W.anchor && !W.tag && !j && !V) {
        O === 0 && W.comma ? a(W.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${f}`) : O < r3.items.length - 1 && a(W.start, "UNEXPECTED_TOKEN", `Unexpected empty item in ${f}`), W.comment && (y.comment ? y.comment += `
` + W.comment : y.comment = W.comment), T = W.end;
        continue;
      }
      !u && n.options.strict && Ar(H) && a(
        H,
        // checked by containsNewline()
        "MULTILINE_IMPLICIT_KEY",
        "Implicit keys of flow sequence pairs need to be on a single line"
      );
    }
    if (O === 0)
      W.comma && a(W.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${f}`);
    else if (W.comma || a(W.start, "MISSING_CHAR", `Missing , between ${f} items`), W.comment) {
      let ee = "";
      e:
        for (const K of F)
          switch (K.type) {
            case "comma":
            case "space":
              break;
            case "comment":
              ee = K.source.substring(1);
              break e;
            default:
              break e;
          }
      if (ee) {
        let K = y.items[y.items.length - 1];
        Je(K) && (K = K.value ?? K.key), K.comment ? K.comment += `
` + ee : K.comment = ee, W.comment = W.comment.substring(ee.length + 1);
      }
    }
    if (!u && !j && !W.found) {
      const ee = V ? t3(n, V, W, a) : e(n, W.end, j, null, W, a);
      y.items.push(ee), T = ee.range[2], Gi(V) && a(ee.range, "BLOCK_IN_FLOW", Ui);
    } else {
      n.atKey = true;
      const ee = W.end, K = H ? t3(n, H, W, a) : e(n, ee, F, null, W, a);
      Gi(H) && a(K.range, "BLOCK_IN_FLOW", Ui), n.atKey = false;
      const le = Fn(j ?? [], {
        flow: f,
        indicator: "map-value-ind",
        next: V,
        offset: K.range[2],
        onError: a,
        parentIndent: r3.indent,
        startOnNewline: false
      });
      if (le.found) {
        if (!u && !W.found && n.options.strict) {
          if (j)
            for (const ce of j) {
              if (ce === le.found)
                break;
              if (ce.type === "newline") {
                a(ce, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
                break;
              }
            }
          W.start < le.found.offset - 1024 && a(le.found, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key");
        }
      } else
        V && ("source" in V && V.source && V.source[0] === ":" ? a(V, "MISSING_CHAR", `Missing space after : in ${f}`) : a(le.start, "MISSING_CHAR", `Missing , or : between ${f} items`));
      const Te = V ? t3(n, V, le, a) : le.found ? e(n, le.end, j, null, le, a) : null;
      Te ? Gi(V) && a(Te.range, "BLOCK_IN_FLOW", Ui) : le.comment && (K.comment ? K.comment += `
` + le.comment : K.comment = le.comment);
      const ue = new ut(K, Te);
      if (n.options.keepSourceTokens && (ue.srcToken = I3), u) {
        const ce = y;
        Yc(n, ce.items, K) && a(ee, "DUPLICATE_KEY", "Map keys must be unique"), ce.items.push(ue);
      } else {
        const ce = new Tt(n.schema);
        ce.flow = true, ce.items.push(ue);
        const ye = (Te ?? K).range;
        ce.range = [K.range[0], ye[1], ye[2]], y.items.push(ce);
      }
      T = Te ? Te.range[2] : le.end;
    }
  }
  const _ = u ? "}" : "]", [C, ...S] = r3.end;
  let N = T;
  if (C && C.source === _)
    N = C.offset + C.source.length;
  else {
    const O = f[0].toUpperCase() + f.substring(1), I3 = v ? `${O} must end with a ${_}` : `${O} in block collection must be sufficiently indented and end with a ${_}`;
    a(T, v ? "MISSING_CHAR" : "BAD_INDENT", I3), C && C.source.length !== 1 && S.unshift(C);
  }
  if (S.length > 0) {
    const O = Ir(S, N, n.options.strict, a);
    O.comment && (y.comment ? y.comment += `
` + O.comment : y.comment = O.comment), y.range = [r3.offset, N, O.offset];
  } else
    y.range = [r3.offset, N, N];
  return y;
}
function Ki(t3, e, n, r3, a, l3) {
  const u = n.type === "block-map" ? s2(t3, e, n, r3, l3) : n.type === "block-seq" ? i2(t3, e, n, r3, l3) : a2(t3, e, n, r3, l3), f = u.constructor;
  return a === "!" || a === f.tagName ? (u.tag = f.tagName, u) : (a && (u.tag = a), u);
}
function o2(t3, e, n, r3, a) {
  var _;
  const l3 = r3.tag, u = l3 ? e.directives.tagName(l3.source, (C) => a(l3, "TAG_RESOLVE_FAILED", C)) : null;
  if (n.type === "block-seq") {
    const { anchor: C, newlineAfterProp: S } = r3, N = C && l3 ? C.offset > l3.offset ? C : l3 : C ?? l3;
    N && (!S || S.offset < N.offset) && a(N, "MISSING_CHAR", "Missing newline after block sequence props");
  }
  const f = n.type === "block-map" ? "map" : n.type === "block-seq" ? "seq" : n.start.source === "{" ? "map" : "seq";
  if (!l3 || !u || u === "!" || u === Tt.tagName && f === "map" || u === kn.tagName && f === "seq")
    return Ki(t3, e, n, a, u);
  let p = e.schema.tags.find((C) => C.tag === u && C.collection === f);
  if (!p) {
    const C = e.schema.knownTags[u];
    if (C && C.collection === f)
      e.schema.tags.push(Object.assign({}, C, { default: false })), p = C;
    else
      return C ? a(l3, "BAD_COLLECTION_TYPE", `${C.tag} used for ${f} collection, but expects ${C.collection ?? "scalar"}`, true) : a(l3, "TAG_RESOLVE_FAILED", `Unresolved tag: ${u}`, true), Ki(t3, e, n, a, u);
  }
  const y = Ki(t3, e, n, a, u, p), v = ((_ = p.resolve) == null ? void 0 : _.call(p, y, (C) => a(l3, "TAG_RESOLVE_FAILED", C), e.options)) ?? y, T = Ye(v) ? v : new be(v);
  return T.range = y.range, T.tag = u, p != null && p.format && (T.format = p.format), T;
}
function l2(t3, e, n) {
  const r3 = e.offset, a = c2(e, t3.options.strict, n);
  if (!a)
    return { value: "", type: null, comment: "", range: [r3, r3, r3] };
  const l3 = a.mode === ">" ? be.BLOCK_FOLDED : be.BLOCK_LITERAL, u = e.source ? u2(e.source) : [];
  let f = u.length;
  for (let N = u.length - 1; N >= 0; --N) {
    const O = u[N][1];
    if (O === "" || O === "\r")
      f = N;
    else
      break;
  }
  if (f === 0) {
    const N = a.chomp === "+" && u.length > 0 ? `
`.repeat(Math.max(1, u.length - 1)) : "";
    let O = r3 + a.length;
    return e.source && (O += e.source.length), { value: N, type: l3, comment: a.comment, range: [r3, O, O] };
  }
  let p = e.indent + a.indent, y = e.offset + a.length, v = 0;
  for (let N = 0; N < f; ++N) {
    const [O, I3] = u[N];
    if (I3 === "" || I3 === "\r")
      a.indent === 0 && O.length > p && (p = O.length);
    else {
      O.length < p && n(y + O.length, "MISSING_CHAR", "Block scalars with more-indented leading empty lines must use an explicit indentation indicator"), a.indent === 0 && (p = O.length), v = N, p === 0 && !t3.atRoot && n(y, "BAD_INDENT", "Block scalar values in collections must be indented");
      break;
    }
    y += O.length + I3.length + 1;
  }
  for (let N = u.length - 1; N >= f; --N)
    u[N][0].length > p && (f = N + 1);
  let T = "", _ = "", C = false;
  for (let N = 0; N < v; ++N)
    T += u[N][0].slice(p) + `
`;
  for (let N = v; N < f; ++N) {
    let [O, I3] = u[N];
    y += O.length + I3.length + 1;
    const F = I3[I3.length - 1] === "\r";
    if (F && (I3 = I3.slice(0, -1)), I3 && O.length < p) {
      const j = `Block scalar lines must not be less indented than their ${a.indent ? "explicit indentation indicator" : "first line"}`;
      n(y - I3.length - (F ? 2 : 1), "BAD_INDENT", j), O = "";
    }
    l3 === be.BLOCK_LITERAL ? (T += _ + O.slice(p) + I3, _ = `
`) : O.length > p || I3[0] === "	" ? (_ === " " ? _ = `
` : !C && _ === `
` && (_ = `

`), T += _ + O.slice(p) + I3, _ = `
`, C = true) : I3 === "" ? _ === `
` ? T += `
` : _ = `
` : (T += _ + I3, _ = " ", C = false);
  }
  switch (a.chomp) {
    case "-":
      break;
    case "+":
      for (let N = f; N < u.length; ++N)
        T += `
` + u[N][0].slice(p);
      T[T.length - 1] !== `
` && (T += `
`);
      break;
    default:
      T += `
`;
  }
  const S = r3 + a.length + e.source.length;
  return { value: T, type: l3, comment: a.comment, range: [r3, S, S] };
}
function c2({ offset: t3, props: e }, n, r3) {
  if (e[0].type !== "block-scalar-header")
    return r3(e[0], "IMPOSSIBLE", "Block scalar header not found"), null;
  const { source: a } = e[0], l3 = a[0];
  let u = 0, f = "", p = -1;
  for (let _ = 1; _ < a.length; ++_) {
    const C = a[_];
    if (!f && (C === "-" || C === "+"))
      f = C;
    else {
      const S = Number(C);
      !u && S ? u = S : p === -1 && (p = t3 + _);
    }
  }
  p !== -1 && r3(p, "UNEXPECTED_TOKEN", `Block scalar header includes extra characters: ${a}`);
  let y = false, v = "", T = a.length;
  for (let _ = 1; _ < e.length; ++_) {
    const C = e[_];
    switch (C.type) {
      case "space":
        y = true;
      case "newline":
        T += C.source.length;
        break;
      case "comment":
        n && !y && r3(C, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters"), T += C.source.length, v = C.source.substring(1);
        break;
      case "error":
        r3(C, "UNEXPECTED_TOKEN", C.message), T += C.source.length;
        break;
      default: {
        const S = `Unexpected token in block scalar header: ${C.type}`;
        r3(C, "UNEXPECTED_TOKEN", S);
        const N = C.source;
        N && typeof N == "string" && (T += N.length);
      }
    }
  }
  return { mode: l3, indent: u, chomp: f, comment: v, length: T };
}
function u2(t3) {
  const e = t3.split(/\n( *)/), n = e[0], r3 = n.match(/^( *)/), l3 = [r3 != null && r3[1] ? [r3[1], n.slice(r3[1].length)] : ["", n]];
  for (let u = 1; u < e.length; u += 2)
    l3.push([e[u], e[u + 1]]);
  return l3;
}
function h2(t3, e, n) {
  const { offset: r3, type: a, source: l3, end: u } = t3;
  let f, p;
  const y = (_, C, S) => n(r3 + _, C, S);
  switch (a) {
    case "scalar":
      f = be.PLAIN, p = f2(l3, y);
      break;
    case "single-quoted-scalar":
      f = be.QUOTE_SINGLE, p = d2(l3, y);
      break;
    case "double-quoted-scalar":
      f = be.QUOTE_DOUBLE, p = m2(l3, y);
      break;
    default:
      return n(t3, "UNEXPECTED_TOKEN", `Expected a flow scalar value, but found: ${a}`), {
        value: "",
        type: null,
        comment: "",
        range: [r3, r3 + l3.length, r3 + l3.length]
      };
  }
  const v = r3 + l3.length, T = Ir(u, v, e, n);
  return {
    value: p,
    type: f,
    comment: T.comment,
    range: [r3, v, T.offset]
  };
}
function f2(t3, e) {
  let n = "";
  switch (t3[0]) {
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
      n = `block scalar indicator ${t3[0]}`;
      break;
    }
    case "@":
    case "`": {
      n = `reserved character ${t3[0]}`;
      break;
    }
  }
  return n && e(0, "BAD_SCALAR_START", `Plain value cannot start with ${n}`), Jc(t3);
}
function d2(t3, e) {
  return (t3[t3.length - 1] !== "'" || t3.length === 1) && e(t3.length, "MISSING_CHAR", "Missing closing 'quote"), Jc(t3.slice(1, -1)).replace(/''/g, "'");
}
function Jc(t3) {
  let e, n;
  try {
    e = new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`, "sy"), n = new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`, "sy");
  } catch {
    e = /(.*?)[ \t]*\r?\n/sy, n = /[ \t]*(.*?)[ \t]*\r?\n/sy;
  }
  let r3 = e.exec(t3);
  if (!r3)
    return t3;
  let a = r3[1], l3 = " ", u = e.lastIndex;
  for (n.lastIndex = u; r3 = n.exec(t3); )
    r3[1] === "" ? l3 === `
` ? a += l3 : l3 = `
` : (a += l3 + r3[1], l3 = " "), u = n.lastIndex;
  const f = /[ \t]*(.*)/sy;
  return f.lastIndex = u, r3 = f.exec(t3), a + l3 + ((r3 == null ? void 0 : r3[1]) ?? "");
}
function m2(t3, e) {
  let n = "";
  for (let r3 = 1; r3 < t3.length - 1; ++r3) {
    const a = t3[r3];
    if (!(a === "\r" && t3[r3 + 1] === `
`))
      if (a === `
`) {
        const { fold: l3, offset: u } = p2(t3, r3);
        n += l3, r3 = u;
      } else if (a === "\\") {
        let l3 = t3[++r3];
        const u = g2[l3];
        if (u)
          n += u;
        else if (l3 === `
`)
          for (l3 = t3[r3 + 1]; l3 === " " || l3 === "	"; )
            l3 = t3[++r3 + 1];
        else if (l3 === "\r" && t3[r3 + 1] === `
`)
          for (l3 = t3[++r3 + 1]; l3 === " " || l3 === "	"; )
            l3 = t3[++r3 + 1];
        else if (l3 === "x" || l3 === "u" || l3 === "U") {
          const f = { x: 2, u: 4, U: 8 }[l3];
          n += y2(t3, r3 + 1, f, e), r3 += f;
        } else {
          const f = t3.substr(r3 - 1, 2);
          e(r3 - 1, "BAD_DQ_ESCAPE", `Invalid escape sequence ${f}`), n += f;
        }
      } else if (a === " " || a === "	") {
        const l3 = r3;
        let u = t3[r3 + 1];
        for (; u === " " || u === "	"; )
          u = t3[++r3 + 1];
        u !== `
` && !(u === "\r" && t3[r3 + 2] === `
`) && (n += r3 > l3 ? t3.slice(l3, r3 + 1) : a);
      } else
        n += a;
  }
  return (t3[t3.length - 1] !== '"' || t3.length === 1) && e(t3.length, "MISSING_CHAR", 'Missing closing "quote'), n;
}
function p2(t3, e) {
  let n = "", r3 = t3[e + 1];
  for (; (r3 === " " || r3 === "	" || r3 === `
` || r3 === "\r") && !(r3 === "\r" && t3[e + 2] !== `
`); )
    r3 === `
` && (n += `
`), e += 1, r3 = t3[e + 1];
  return n || (n = " "), { fold: n, offset: e };
}
const g2 = {
  0: "\0",
  // null character
  a: "\x07",
  // bell character
  b: "\b",
  // backspace
  e: "\x1B",
  // escape character
  f: "\f",
  // form feed
  n: `
`,
  // line feed
  r: "\r",
  // carriage return
  t: "	",
  // horizontal tab
  v: "\v",
  // vertical tab
  N: "",
  // Unicode next line
  _: " ",
  // Unicode non-breaking space
  L: "\u2028",
  // Unicode line separator
  P: "\u2029",
  // Unicode paragraph separator
  " ": " ",
  '"': '"',
  "/": "/",
  "\\": "\\",
  "	": "	"
};
function y2(t3, e, n, r3) {
  const a = t3.substr(e, n), u = a.length === n && /^[0-9a-fA-F]+$/.test(a) ? parseInt(a, 16) : NaN;
  if (isNaN(u)) {
    const f = t3.substr(e - 2, n + 2);
    return r3(e - 2, "BAD_DQ_ESCAPE", `Invalid escape sequence ${f}`), f;
  }
  return String.fromCodePoint(u);
}
function Qc(t3, e, n, r3) {
  const { value: a, type: l3, comment: u, range: f } = e.type === "block-scalar" ? l2(t3, e, r3) : h2(e, t3.options.strict, r3), p = n ? t3.directives.tagName(n.source, (T) => r3(n, "TAG_RESOLVE_FAILED", T)) : null;
  let y;
  t3.options.stringKeys && t3.atKey ? y = t3.schema[$t] : p ? y = b2(t3.schema, a, p, n, r3) : e.type === "scalar" ? y = w2(t3, a, e, r3) : y = t3.schema[$t];
  let v;
  try {
    const T = y.resolve(a, (_) => r3(n ?? e, "TAG_RESOLVE_FAILED", _), t3.options);
    v = Le(T) ? T : new be(T);
  } catch (T) {
    const _ = T instanceof Error ? T.message : String(T);
    r3(n ?? e, "TAG_RESOLVE_FAILED", _), v = new be(a);
  }
  return v.range = f, v.source = a, l3 && (v.type = l3), p && (v.tag = p), y.format && (v.format = y.format), u && (v.comment = u), v;
}
function b2(t3, e, n, r3, a) {
  var f;
  if (n === "!")
    return t3[$t];
  const l3 = [];
  for (const p of t3.tags)
    if (!p.collection && p.tag === n)
      if (p.default && p.test)
        l3.push(p);
      else
        return p;
  for (const p of l3)
    if ((f = p.test) != null && f.test(e))
      return p;
  const u = t3.knownTags[n];
  return u && !u.collection ? (t3.tags.push(Object.assign({}, u, { default: false, test: void 0 })), u) : (a(r3, "TAG_RESOLVE_FAILED", `Unresolved tag: ${n}`, n !== "tag:yaml.org,2002:str"), t3[$t]);
}
function w2({ atKey: t3, directives: e, schema: n }, r3, a, l3) {
  const u = n.tags.find((f) => {
    var p;
    return (f.default === true || t3 && f.default === "key") && ((p = f.test) == null ? void 0 : p.test(r3));
  }) || n[$t];
  if (n.compat) {
    const f = n.compat.find((p) => {
      var y;
      return p.default && ((y = p.test) == null ? void 0 : y.test(r3));
    }) ?? n[$t];
    if (u.tag !== f.tag) {
      const p = e.tagString(u.tag), y = e.tagString(f.tag), v = `Value may be parsed as either ${p} or ${y}`;
      l3(a, "TAG_RESOLVE_FAILED", v, true);
    }
  }
  return u;
}
function x2(t3, e, n) {
  if (e) {
    n ?? (n = e.length);
    for (let r3 = n - 1; r3 >= 0; --r3) {
      let a = e[r3];
      switch (a.type) {
        case "space":
        case "comment":
        case "newline":
          t3 -= a.source.length;
          continue;
      }
      for (a = e[++r3]; (a == null ? void 0 : a.type) === "space"; )
        t3 += a.source.length, a = e[++r3];
      break;
    }
  }
  return t3;
}
const k2 = { composeNode: Zc, composeEmptyNode: W0 };
function Zc(t3, e, n, r3) {
  const a = t3.atKey, { spaceBefore: l3, comment: u, anchor: f, tag: p } = n;
  let y, v = true;
  switch (e.type) {
    case "alias":
      y = v2(t3, e, r3), (f || p) && r3(e, "ALIAS_PROPS", "An alias node must not specify any properties");
      break;
    case "scalar":
    case "single-quoted-scalar":
    case "double-quoted-scalar":
    case "block-scalar":
      y = Qc(t3, e, p, r3), f && (y.anchor = f.source.substring(1));
      break;
    case "block-map":
    case "block-seq":
    case "flow-collection":
      y = o2(k2, t3, e, n, r3), f && (y.anchor = f.source.substring(1));
      break;
    default: {
      const T = e.type === "error" ? e.message : `Unsupported token (type: ${e.type})`;
      r3(e, "UNEXPECTED_TOKEN", T), y = W0(t3, e.offset, void 0, null, n, r3), v = false;
    }
  }
  return f && y.anchor === "" && r3(f, "BAD_ALIAS", "Anchor cannot be an empty string"), a && t3.options.stringKeys && (!Le(y) || typeof y.value != "string" || y.tag && y.tag !== "tag:yaml.org,2002:str") && r3(p ?? e, "NON_STRING_KEY", "With stringKeys, all keys must be strings"), l3 && (y.spaceBefore = true), u && (e.type === "scalar" && e.source === "" ? y.comment = u : y.commentBefore = u), t3.options.keepSourceTokens && v && (y.srcToken = e), y;
}
function W0(t3, e, n, r3, { spaceBefore: a, comment: l3, anchor: u, tag: f, end: p }, y) {
  const v = {
    type: "scalar",
    offset: x2(e, n, r3),
    indent: -1,
    source: ""
  }, T = Qc(t3, v, f, y);
  return u && (T.anchor = u.source.substring(1), T.anchor === "" && y(u, "BAD_ALIAS", "Anchor cannot be an empty string")), a && (T.spaceBefore = true), l3 && (T.comment = l3, T.range[2] = p), T;
}
function v2({ options: t3 }, { offset: e, source: n, end: r3 }, a) {
  const l3 = new q0(n.substring(1));
  l3.source === "" && a(e, "BAD_ALIAS", "Alias cannot be an empty string"), l3.source.endsWith(":") && a(e + n.length - 1, "BAD_ALIAS", "Alias ending in : is ambiguous", true);
  const u = e + n.length, f = Ir(r3, u, t3.strict, a);
  return l3.range = [e, u, f.offset], f.comment && (l3.comment = f.comment), l3;
}
function S2(t3, e, { offset: n, start: r3, value: a, end: l3 }, u) {
  const f = Object.assign({ _directives: e }, t3), p = new Ps(void 0, f), y = {
    atKey: false,
    atRoot: true,
    directives: p.directives,
    options: p.options,
    schema: p.schema
  }, v = Fn(r3, {
    indicator: "doc-start",
    next: a ?? (l3 == null ? void 0 : l3[0]),
    offset: n,
    onError: u,
    parentIndent: 0,
    startOnNewline: true
  });
  v.found && (p.directives.docStart = true, a && (a.type === "block-map" || a.type === "block-seq") && !v.hasNewline && u(v.end, "MISSING_CHAR", "Block collection cannot start on same line with directives-end marker")), p.contents = a ? Zc(y, a, v, u) : W0(y, v.end, r3, null, v, u);
  const T = p.contents.range[2], _ = Ir(l3, T, false, u);
  return _.comment && (p.comment = _.comment), p.range = [n, T, _.offset], p;
}
function cr(t3) {
  if (typeof t3 == "number")
    return [t3, t3 + 1];
  if (Array.isArray(t3))
    return t3.length === 2 ? t3 : [t3[0], t3[1]];
  const { offset: e, source: n } = t3;
  return [e, e + (typeof n == "string" ? n.length : 1)];
}
function fl(t3) {
  var a;
  let e = "", n = false, r3 = false;
  for (let l3 = 0; l3 < t3.length; ++l3) {
    const u = t3[l3];
    switch (u[0]) {
      case "#":
        e += (e === "" ? "" : r3 ? `

` : `
`) + (u.substring(1) || " "), n = true, r3 = false;
        break;
      case "%":
        ((a = t3[l3 + 1]) == null ? void 0 : a[0]) !== "#" && (l3 += 1), n = false;
        break;
      default:
        n || (r3 = true), n = false;
    }
  }
  return { comment: e, afterEmptyLine: r3 };
}
class A2 {
  constructor(e = {}) {
    this.doc = null, this.atDirectives = false, this.prelude = [], this.errors = [], this.warnings = [], this.onError = (n, r3, a, l3) => {
      const u = cr(n);
      l3 ? this.warnings.push(new r2(u, r3, a)) : this.errors.push(new dr(u, r3, a));
    }, this.directives = new ct({ version: e.version || "1.2" }), this.options = e;
  }
  decorate(e, n) {
    const { comment: r3, afterEmptyLine: a } = fl(this.prelude);
    if (r3) {
      const l3 = e.contents;
      if (n)
        e.comment = e.comment ? `${e.comment}
${r3}` : r3;
      else if (a || e.directives.docStart || !l3)
        e.commentBefore = r3;
      else if (We(l3) && !l3.flow && l3.items.length > 0) {
        let u = l3.items[0];
        Je(u) && (u = u.key);
        const f = u.commentBefore;
        u.commentBefore = f ? `${r3}
${f}` : r3;
      } else {
        const u = l3.commentBefore;
        l3.commentBefore = u ? `${r3}
${u}` : r3;
      }
    }
    n ? (Array.prototype.push.apply(e.errors, this.errors), Array.prototype.push.apply(e.warnings, this.warnings)) : (e.errors = this.errors, e.warnings = this.warnings), this.prelude = [], this.errors = [], this.warnings = [];
  }
  /**
   * Current stream status information.
   *
   * Mostly useful at the end of input for an empty stream.
   */
  streamInfo() {
    return {
      comment: fl(this.prelude).comment,
      directives: this.directives,
      errors: this.errors,
      warnings: this.warnings
    };
  }
  /**
   * Compose tokens into documents.
   *
   * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
   * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
   */
  *compose(e, n = false, r3 = -1) {
    for (const a of e)
      yield* this.next(a);
    yield* this.end(n, r3);
  }
  /** Advance the composer by one CST token. */
  *next(e) {
    switch (e.type) {
      case "directive":
        this.directives.add(e.source, (n, r3, a) => {
          const l3 = cr(e);
          l3[0] += n, this.onError(l3, "BAD_DIRECTIVE", r3, a);
        }), this.prelude.push(e.source), this.atDirectives = true;
        break;
      case "document": {
        const n = S2(this.options, this.directives, e, this.onError);
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
        const n = e.source ? `${e.message}: ${JSON.stringify(e.source)}` : e.message, r3 = new dr(cr(e), "UNEXPECTED_TOKEN", n);
        this.atDirectives || !this.doc ? this.errors.push(r3) : this.doc.errors.push(r3);
        break;
      }
      case "doc-end": {
        if (!this.doc) {
          const r3 = "Unexpected doc-end without preceding document";
          this.errors.push(new dr(cr(e), "UNEXPECTED_TOKEN", r3));
          break;
        }
        this.doc.directives.docEnd = true;
        const n = Ir(e.end, e.offset + e.source.length, this.doc.options.strict, this.onError);
        if (this.decorate(this.doc, true), n.comment) {
          const r3 = this.doc.comment;
          this.doc.comment = r3 ? `${r3}
${n.comment}` : n.comment;
        }
        this.doc.range[2] = n.offset;
        break;
      }
      default:
        this.errors.push(new dr(cr(e), "UNEXPECTED_TOKEN", `Unsupported token ${e.type}`));
    }
  }
  /**
   * Call at end of input to yield any remaining document.
   *
   * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
   * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
   */
  *end(e = false, n = -1) {
    if (this.doc)
      this.decorate(this.doc, true), yield this.doc, this.doc = null;
    else if (e) {
      const r3 = Object.assign({ _directives: this.directives }, this.options), a = new Ps(void 0, r3);
      this.atDirectives && this.onError(n, "MISSING_CHAR", "Missing directives-end indicator line"), a.range = [0, n, n], this.decorate(a, false), yield a;
    }
  }
}
const eu = "\uFEFF", tu = "", nu = "", d0 = "";
function T2(t3) {
  switch (t3) {
    case eu:
      return "byte-order-mark";
    case tu:
      return "doc-mode";
    case nu:
      return "flow-error-end";
    case d0:
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
  switch (t3[0]) {
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
function Ct(t3) {
  switch (t3) {
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
const dl = new Set("0123456789ABCDEFabcdef"), N2 = new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"), as = new Set(",[]{}"), M2 = new Set(` ,[]{}
\r	`), Xi = (t3) => !t3 || M2.has(t3);
class E2 {
  constructor() {
    this.atEnd = false, this.blockScalarIndent = -1, this.blockScalarKeep = false, this.buffer = "", this.flowKey = false, this.flowLevel = 0, this.indentNext = 0, this.indentValue = 0, this.lineEndPos = null, this.next = null, this.pos = 0;
  }
  /**
   * Generate YAML tokens from the `source` string. If `incomplete`,
   * a part of the last line may be left as a buffer for the next call.
   *
   * @returns A generator of lexical tokens
   */
  *lex(e, n = false) {
    if (e) {
      if (typeof e != "string")
        throw TypeError("source is not a string");
      this.buffer = this.buffer ? this.buffer + e : e, this.lineEndPos = null;
    }
    this.atEnd = !n;
    let r3 = this.next ?? "stream";
    for (; r3 && (n || this.hasChars(1)); )
      r3 = yield* this.parseNext(r3);
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
      let r3 = 0;
      for (; n === " "; )
        n = this.buffer[++r3 + e];
      if (n === "\r") {
        const a = this.buffer[r3 + e + 1];
        if (a === `
` || !a && !this.atEnd)
          return e + r3 + 1;
      }
      return n === `
` || r3 >= this.indentNext || !n && !this.atEnd ? e + r3 : -1;
    }
    if (n === "-" || n === ".") {
      const r3 = this.buffer.substr(e, 3);
      if ((r3 === "---" || r3 === "...") && Ct(this.buffer[e + 3]))
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
    if (e[0] === eu && (yield* this.pushCount(1), e = e.substring(1)), e[0] === "%") {
      let n = e.length, r3 = e.indexOf("#");
      for (; r3 !== -1; ) {
        const l3 = e[r3 - 1];
        if (l3 === " " || l3 === "	") {
          n = r3 - 1;
          break;
        } else
          r3 = e.indexOf("#", r3 + 1);
      }
      for (; ; ) {
        const l3 = e[n - 1];
        if (l3 === " " || l3 === "	")
          n -= 1;
        else
          break;
      }
      const a = (yield* this.pushCount(n)) + (yield* this.pushSpaces(true));
      return yield* this.pushCount(e.length - a), this.pushNewline(), "stream";
    }
    if (this.atLineEnd()) {
      const n = yield* this.pushSpaces(true);
      return yield* this.pushCount(e.length - n), yield* this.pushNewline(), "stream";
    }
    return yield tu, yield* this.parseLineStart();
  }
  *parseLineStart() {
    const e = this.charAt(0);
    if (!e && !this.atEnd)
      return this.setNext("line-start");
    if (e === "-" || e === ".") {
      if (!this.atEnd && !this.hasChars(4))
        return this.setNext("line-start");
      const n = this.peek(3);
      if ((n === "---" || n === "...") && Ct(this.charAt(3)))
        return yield* this.pushCount(3), this.indentValue = 0, this.indentNext = 0, n === "---" ? "doc" : "stream";
    }
    return this.indentValue = yield* this.pushSpaces(false), this.indentNext > this.indentValue && !Ct(this.charAt(1)) && (this.indentNext = this.indentValue), yield* this.parseBlockStart();
  }
  *parseBlockStart() {
    const [e, n] = this.peek(2);
    if (!n && !this.atEnd)
      return this.setNext("block-start");
    if ((e === "-" || e === "?" || e === ":") && Ct(n)) {
      const r3 = (yield* this.pushCount(1)) + (yield* this.pushSpaces(true));
      return this.indentNext = this.indentValue + 1, this.indentValue += r3, yield* this.parseBlockStart();
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
        return yield* this.pushUntil(Xi), "doc";
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
    let e, n, r3 = -1;
    do
      e = yield* this.pushNewline(), e > 0 ? (n = yield* this.pushSpaces(false), this.indentValue = r3 = n) : n = 0, n += yield* this.pushSpaces(true);
    while (e + n > 0);
    const a = this.getLine();
    if (a === null)
      return this.setNext("flow");
    if ((r3 !== -1 && r3 < this.indentNext && a[0] !== "#" || r3 === 0 && (a.startsWith("---") || a.startsWith("...")) && Ct(a[3])) && !(r3 === this.indentNext - 1 && this.flowLevel === 1 && (a[0] === "]" || a[0] === "}")))
      return this.flowLevel = 0, yield nu, yield* this.parseLineStart();
    let l3 = 0;
    for (; a[l3] === ","; )
      l3 += yield* this.pushCount(1), l3 += yield* this.pushSpaces(true), this.flowKey = false;
    switch (l3 += yield* this.pushIndicators(), a[l3]) {
      case void 0:
        return "flow";
      case "#":
        return yield* this.pushCount(a.length - l3), "flow";
      case "{":
      case "[":
        return yield* this.pushCount(1), this.flowKey = false, this.flowLevel += 1, "flow";
      case "}":
      case "]":
        return yield* this.pushCount(1), this.flowKey = true, this.flowLevel -= 1, this.flowLevel ? "flow" : "doc";
      case "*":
        return yield* this.pushUntil(Xi), "flow";
      case '"':
      case "'":
        return this.flowKey = true, yield* this.parseQuotedScalar();
      case ":": {
        const u = this.charAt(1);
        if (this.flowKey || Ct(u) || u === ",")
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
        let l3 = 0;
        for (; this.buffer[n - 1 - l3] === "\\"; )
          l3 += 1;
        if (l3 % 2 === 0)
          break;
        n = this.buffer.indexOf('"', n + 1);
      }
    const r3 = this.buffer.substring(0, n);
    let a = r3.indexOf(`
`, this.pos);
    if (a !== -1) {
      for (; a !== -1; ) {
        const l3 = this.continueScalar(a + 1);
        if (l3 === -1)
          break;
        a = r3.indexOf(`
`, l3);
      }
      a !== -1 && (n = a - (r3[a - 1] === "\r" ? 2 : 1));
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
    return yield* this.pushUntil((n) => Ct(n) || n === "#");
  }
  *parseBlockScalar() {
    let e = this.pos - 1, n = 0, r3;
    e:
      for (let l3 = this.pos; r3 = this.buffer[l3]; ++l3)
        switch (r3) {
          case " ":
            n += 1;
            break;
          case `
`:
            e = l3, n = 0;
            break;
          case "\r": {
            const u = this.buffer[l3 + 1];
            if (!u && !this.atEnd)
              return this.setNext("block-scalar");
            if (u === `
`)
              break;
          }
          default:
            break e;
        }
    if (!r3 && !this.atEnd)
      return this.setNext("block-scalar");
    if (n >= this.indentNext) {
      this.blockScalarIndent === -1 ? this.indentNext = n : this.indentNext = this.blockScalarIndent + (this.indentNext === 0 ? 1 : this.indentNext);
      do {
        const l3 = this.continueScalar(e + 1);
        if (l3 === -1)
          break;
        e = this.buffer.indexOf(`
`, l3);
      } while (e !== -1);
      if (e === -1) {
        if (!this.atEnd)
          return this.setNext("block-scalar");
        e = this.buffer.length;
      }
    }
    let a = e + 1;
    for (r3 = this.buffer[a]; r3 === " "; )
      r3 = this.buffer[++a];
    if (r3 === "	") {
      for (; r3 === "	" || r3 === " " || r3 === "\r" || r3 === `
`; )
        r3 = this.buffer[++a];
      e = a - 1;
    } else if (!this.blockScalarKeep)
      do {
        let l3 = e - 1, u = this.buffer[l3];
        u === "\r" && (u = this.buffer[--l3]);
        const f = l3;
        for (; u === " "; )
          u = this.buffer[--l3];
        if (u === `
` && l3 >= this.pos && l3 + 1 + n > f)
          e = l3;
        else
          break;
      } while (true);
    return yield d0, yield* this.pushToIndex(e + 1, true), yield* this.parseLineStart();
  }
  *parsePlainScalar() {
    const e = this.flowLevel > 0;
    let n = this.pos - 1, r3 = this.pos - 1, a;
    for (; a = this.buffer[++r3]; )
      if (a === ":") {
        const l3 = this.buffer[r3 + 1];
        if (Ct(l3) || e && as.has(l3))
          break;
        n = r3;
      } else if (Ct(a)) {
        let l3 = this.buffer[r3 + 1];
        if (a === "\r" && (l3 === `
` ? (r3 += 1, a = `
`, l3 = this.buffer[r3 + 1]) : n = r3), l3 === "#" || e && as.has(l3))
          break;
        if (a === `
`) {
          const u = this.continueScalar(r3 + 1);
          if (u === -1)
            break;
          r3 = Math.max(r3, u - 2);
        }
      } else {
        if (e && as.has(a))
          break;
        n = r3;
      }
    return !a && !this.atEnd ? this.setNext("plain-scalar") : (yield d0, yield* this.pushToIndex(n + 1, true), e ? "flow" : "doc");
  }
  *pushCount(e) {
    return e > 0 ? (yield this.buffer.substr(this.pos, e), this.pos += e, e) : 0;
  }
  *pushToIndex(e, n) {
    const r3 = this.buffer.slice(this.pos, e);
    return r3 ? (yield r3, this.pos += r3.length, r3.length) : (n && (yield ""), 0);
  }
  *pushIndicators() {
    switch (this.charAt(0)) {
      case "!":
        return (yield* this.pushTag()) + (yield* this.pushSpaces(true)) + (yield* this.pushIndicators());
      case "&":
        return (yield* this.pushUntil(Xi)) + (yield* this.pushSpaces(true)) + (yield* this.pushIndicators());
      case "-":
      case "?":
      case ":": {
        const e = this.flowLevel > 0, n = this.charAt(1);
        if (Ct(n) || e && as.has(n))
          return e ? this.flowKey && (this.flowKey = false) : this.indentNext = this.indentValue + 1, (yield* this.pushCount(1)) + (yield* this.pushSpaces(true)) + (yield* this.pushIndicators());
      }
    }
    return 0;
  }
  *pushTag() {
    if (this.charAt(1) === "<") {
      let e = this.pos + 2, n = this.buffer[e];
      for (; !Ct(n) && n !== ">"; )
        n = this.buffer[++e];
      return yield* this.pushToIndex(n === ">" ? e + 1 : e, false);
    } else {
      let e = this.pos + 1, n = this.buffer[e];
      for (; n; )
        if (N2.has(n))
          n = this.buffer[++e];
        else if (n === "%" && dl.has(this.buffer[e + 1]) && dl.has(this.buffer[e + 2]))
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
    let n = this.pos - 1, r3;
    do
      r3 = this.buffer[++n];
    while (r3 === " " || e && r3 === "	");
    const a = n - this.pos;
    return a > 0 && (yield this.buffer.substr(this.pos, a), this.pos = n), a;
  }
  *pushUntil(e) {
    let n = this.pos, r3 = this.buffer[n];
    for (; !e(r3); )
      r3 = this.buffer[++n];
    return yield* this.pushToIndex(n, false);
  }
}
class _2 {
  constructor() {
    this.lineStarts = [], this.addNewLine = (e) => this.lineStarts.push(e), this.linePos = (e) => {
      let n = 0, r3 = this.lineStarts.length;
      for (; n < r3; ) {
        const l3 = n + r3 >> 1;
        this.lineStarts[l3] < e ? n = l3 + 1 : r3 = l3;
      }
      if (this.lineStarts[n] === e)
        return { line: n + 1, col: 1 };
      if (n === 0)
        return { line: 0, col: e };
      const a = this.lineStarts[n - 1];
      return { line: n, col: e - a + 1 };
    };
  }
}
function nn(t3, e) {
  for (let n = 0; n < t3.length; ++n)
    if (t3[n].type === e)
      return true;
  return false;
}
function ml(t3) {
  for (let e = 0; e < t3.length; ++e)
    switch (t3[e].type) {
      case "space":
      case "comment":
      case "newline":
        break;
      default:
        return e;
    }
  return -1;
}
function ru(t3) {
  switch (t3 == null ? void 0 : t3.type) {
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
function os(t3) {
  switch (t3.type) {
    case "document":
      return t3.start;
    case "block-map": {
      const e = t3.items[t3.items.length - 1];
      return e.sep ?? e.start;
    }
    case "block-seq":
      return t3.items[t3.items.length - 1].start;
    default:
      return [];
  }
}
function Cn(t3) {
  var n;
  if (t3.length === 0)
    return [];
  let e = t3.length;
  e:
    for (; --e >= 0; )
      switch (t3[e].type) {
        case "doc-start":
        case "explicit-key-ind":
        case "map-value-ind":
        case "seq-item-ind":
        case "newline":
          break e;
      }
  for (; ((n = t3[++e]) == null ? void 0 : n.type) === "space"; )
    ;
  return t3.splice(e, t3.length);
}
function pl(t3) {
  if (t3.start.type === "flow-seq-start")
    for (const e of t3.items)
      e.sep && !e.value && !nn(e.start, "explicit-key-ind") && !nn(e.sep, "map-value-ind") && (e.key && (e.value = e.key), delete e.key, ru(e.value) ? e.value.end ? Array.prototype.push.apply(e.value.end, e.sep) : e.value.end = e.sep : Array.prototype.push.apply(e.start, e.sep), delete e.sep);
}
class C2 {
  /**
   * @param onNewLine - If defined, called separately with the start position of
   *   each new line (in `parse()`, including the start of input).
   */
  constructor(e) {
    this.atNewLine = true, this.atScalar = false, this.indent = 0, this.offset = 0, this.onKeyLine = false, this.stack = [], this.source = "", this.type = "", this.lexer = new E2(), this.onNewLine = e;
  }
  /**
   * Parse `source` as a YAML stream.
   * If `incomplete`, a part of the last line may be left as a buffer for the next call.
   *
   * Errors are not thrown, but yielded as `{ type: 'error', message }` tokens.
   *
   * @returns A generator of tokens representing each directive, document, and other structure.
   */
  *parse(e, n = false) {
    this.onNewLine && this.offset === 0 && this.onNewLine(0);
    for (const r3 of this.lexer.lex(e, n))
      yield* this.next(r3);
    n || (yield* this.end());
  }
  /**
   * Advance the parser by the `source` of one lexical token.
   */
  *next(e) {
    if (this.source = e, this.atScalar) {
      this.atScalar = false, yield* this.step(), this.offset += e.length;
      return;
    }
    const n = T2(e);
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
      const r3 = `Not a YAML token: ${e}`;
      yield* this.pop({ type: "error", offset: this.offset, message: r3, source: e }), this.offset += e.length;
    }
  }
  /** Call at end of input to push out any remaining constructions */
  *end() {
    for (; this.stack.length > 0; )
      yield* this.pop();
  }
  get sourceToken() {
    return {
      type: this.type,
      offset: this.offset,
      indent: this.indent,
      source: this.source
    };
  }
  *step() {
    const e = this.peek(1);
    if (this.type === "doc-end" && (!e || e.type !== "doc-end")) {
      for (; this.stack.length > 0; )
        yield* this.pop();
      this.stack.push({
        type: "doc-end",
        offset: this.offset,
        source: this.source
      });
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
      const r3 = this.peek(1);
      switch (n.type === "block-scalar" ? n.indent = "indent" in r3 ? r3.indent : 0 : n.type === "flow-collection" && r3.type === "document" && (n.indent = 0), n.type === "flow-collection" && pl(n), r3.type) {
        case "document":
          r3.value = n;
          break;
        case "block-scalar":
          r3.props.push(n);
          break;
        case "block-map": {
          const a = r3.items[r3.items.length - 1];
          if (a.value) {
            r3.items.push({ start: [], key: n, sep: [] }), this.onKeyLine = true;
            return;
          } else if (a.sep)
            a.value = n;
          else {
            Object.assign(a, { key: n, sep: [] }), this.onKeyLine = !a.explicitKey;
            return;
          }
          break;
        }
        case "block-seq": {
          const a = r3.items[r3.items.length - 1];
          a.value ? r3.items.push({ start: [], value: n }) : a.value = n;
          break;
        }
        case "flow-collection": {
          const a = r3.items[r3.items.length - 1];
          !a || a.value ? r3.items.push({ start: [], key: n, sep: [] }) : a.sep ? a.value = n : Object.assign(a, { key: n, sep: [] });
          return;
        }
        default:
          yield* this.pop(), yield* this.pop(n);
      }
      if ((r3.type === "document" || r3.type === "block-map" || r3.type === "block-seq") && (n.type === "block-map" || n.type === "block-seq")) {
        const a = n.items[n.items.length - 1];
        a && !a.sep && !a.value && a.start.length > 0 && ml(a.start) === -1 && (n.indent === 0 || a.start.every((l3) => l3.type !== "comment" || l3.indent < n.indent)) && (r3.type === "document" ? r3.end = a.start : r3.items.push({ start: a.start }), n.items.splice(-1, 1));
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
        const e = {
          type: "document",
          offset: this.offset,
          start: []
        };
        this.type === "doc-start" && e.start.push(this.sourceToken), this.stack.push(e);
        return;
      }
    }
    yield {
      type: "error",
      offset: this.offset,
      message: `Unexpected ${this.type} token in YAML stream`,
      source: this.source
    };
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
    n ? this.stack.push(n) : yield {
      type: "error",
      offset: this.offset,
      message: `Unexpected ${this.type} token in YAML document`,
      source: this.source
    };
  }
  *scalar(e) {
    if (this.type === "map-value-ind") {
      const n = os(this.peek(2)), r3 = Cn(n);
      let a;
      e.end ? (a = e.end, a.push(this.sourceToken), delete e.end) : a = [this.sourceToken];
      const l3 = {
        type: "block-map",
        offset: e.offset,
        indent: e.indent,
        items: [{ start: r3, key: e, sep: a }]
      };
      this.onKeyLine = true, this.stack[this.stack.length - 1] = l3;
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
    var r3;
    const n = e.items[e.items.length - 1];
    switch (this.type) {
      case "newline":
        if (this.onKeyLine = false, n.value) {
          const a = "end" in n.value ? n.value.end : void 0, l3 = Array.isArray(a) ? a[a.length - 1] : void 0;
          (l3 == null ? void 0 : l3.type) === "comment" ? a == null || a.push(this.sourceToken) : e.items.push({ start: [this.sourceToken] });
        } else
          n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
        return;
      case "space":
      case "comment":
        if (n.value)
          e.items.push({ start: [this.sourceToken] });
        else if (n.sep)
          n.sep.push(this.sourceToken);
        else {
          if (this.atIndentedComment(n.start, e.indent)) {
            const a = e.items[e.items.length - 2], l3 = (r3 = a == null ? void 0 : a.value) == null ? void 0 : r3.end;
            if (Array.isArray(l3)) {
              Array.prototype.push.apply(l3, n.start), l3.push(this.sourceToken), e.items.pop();
              return;
            }
          }
          n.start.push(this.sourceToken);
        }
        return;
    }
    if (this.indent >= e.indent) {
      const a = !this.onKeyLine && this.indent === e.indent, l3 = a && (n.sep || n.explicitKey) && this.type !== "seq-item-ind";
      let u = [];
      if (l3 && n.sep && !n.value) {
        const f = [];
        for (let p = 0; p < n.sep.length; ++p) {
          const y = n.sep[p];
          switch (y.type) {
            case "newline":
              f.push(p);
              break;
            case "space":
              break;
            case "comment":
              y.indent > e.indent && (f.length = 0);
              break;
            default:
              f.length = 0;
          }
        }
        f.length >= 2 && (u = n.sep.splice(f[1]));
      }
      switch (this.type) {
        case "anchor":
        case "tag":
          l3 || n.value ? (u.push(this.sourceToken), e.items.push({ start: u }), this.onKeyLine = true) : n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
          return;
        case "explicit-key-ind":
          !n.sep && !n.explicitKey ? (n.start.push(this.sourceToken), n.explicitKey = true) : l3 || n.value ? (u.push(this.sourceToken), e.items.push({ start: u, explicitKey: true })) : this.stack.push({
            type: "block-map",
            offset: this.offset,
            indent: this.indent,
            items: [{ start: [this.sourceToken], explicitKey: true }]
          }), this.onKeyLine = true;
          return;
        case "map-value-ind":
          if (n.explicitKey)
            if (n.sep)
              if (n.value)
                e.items.push({ start: [], key: null, sep: [this.sourceToken] });
              else if (nn(n.sep, "map-value-ind"))
                this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: u, key: null, sep: [this.sourceToken] }]
                });
              else if (ru(n.key) && !nn(n.sep, "newline")) {
                const f = Cn(n.start), p = n.key, y = n.sep;
                y.push(this.sourceToken), delete n.key, delete n.sep, this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: f, key: p, sep: y }]
                });
              } else
                u.length > 0 ? n.sep = n.sep.concat(u, this.sourceToken) : n.sep.push(this.sourceToken);
            else if (nn(n.start, "newline"))
              Object.assign(n, { key: null, sep: [this.sourceToken] });
            else {
              const f = Cn(n.start);
              this.stack.push({
                type: "block-map",
                offset: this.offset,
                indent: this.indent,
                items: [{ start: f, key: null, sep: [this.sourceToken] }]
              });
            }
          else
            n.sep ? n.value || l3 ? e.items.push({ start: u, key: null, sep: [this.sourceToken] }) : nn(n.sep, "map-value-ind") ? this.stack.push({
              type: "block-map",
              offset: this.offset,
              indent: this.indent,
              items: [{ start: [], key: null, sep: [this.sourceToken] }]
            }) : n.sep.push(this.sourceToken) : Object.assign(n, { key: null, sep: [this.sourceToken] });
          this.onKeyLine = true;
          return;
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar": {
          const f = this.flowScalar(this.type);
          l3 || n.value ? (e.items.push({ start: u, key: f, sep: [] }), this.onKeyLine = true) : n.sep ? this.stack.push(f) : (Object.assign(n, { key: f, sep: [] }), this.onKeyLine = true);
          return;
        }
        default: {
          const f = this.startBlockValue(e);
          if (f) {
            if (f.type === "block-seq") {
              if (!n.explicitKey && n.sep && !nn(n.sep, "newline")) {
                yield* this.pop({
                  type: "error",
                  offset: this.offset,
                  message: "Unexpected block-seq-ind on same line with key",
                  source: this.source
                });
                return;
              }
            } else
              a && e.items.push({ start: u });
            this.stack.push(f);
            return;
          }
        }
      }
    }
    yield* this.pop(), yield* this.step();
  }
  *blockSequence(e) {
    var r3;
    const n = e.items[e.items.length - 1];
    switch (this.type) {
      case "newline":
        if (n.value) {
          const a = "end" in n.value ? n.value.end : void 0, l3 = Array.isArray(a) ? a[a.length - 1] : void 0;
          (l3 == null ? void 0 : l3.type) === "comment" ? a == null || a.push(this.sourceToken) : e.items.push({ start: [this.sourceToken] });
        } else
          n.start.push(this.sourceToken);
        return;
      case "space":
      case "comment":
        if (n.value)
          e.items.push({ start: [this.sourceToken] });
        else {
          if (this.atIndentedComment(n.start, e.indent)) {
            const a = e.items[e.items.length - 2], l3 = (r3 = a == null ? void 0 : a.value) == null ? void 0 : r3.end;
            if (Array.isArray(l3)) {
              Array.prototype.push.apply(l3, n.start), l3.push(this.sourceToken), e.items.pop();
              return;
            }
          }
          n.start.push(this.sourceToken);
        }
        return;
      case "anchor":
      case "tag":
        if (n.value || this.indent <= e.indent)
          break;
        n.start.push(this.sourceToken);
        return;
      case "seq-item-ind":
        if (this.indent !== e.indent)
          break;
        n.value || nn(n.start, "seq-item-ind") ? e.items.push({ start: [this.sourceToken] }) : n.start.push(this.sourceToken);
        return;
    }
    if (this.indent > e.indent) {
      const a = this.startBlockValue(e);
      if (a) {
        this.stack.push(a);
        return;
      }
    }
    yield* this.pop(), yield* this.step();
  }
  *flowCollection(e) {
    const n = e.items[e.items.length - 1];
    if (this.type === "flow-error-end") {
      let r3;
      do
        yield* this.pop(), r3 = this.peek(1);
      while (r3 && r3.type === "flow-collection");
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
          const a = this.flowScalar(this.type);
          !n || n.value ? e.items.push({ start: [], key: a, sep: [] }) : n.sep ? this.stack.push(a) : Object.assign(n, { key: a, sep: [] });
          return;
        }
        case "flow-map-end":
        case "flow-seq-end":
          e.end.push(this.sourceToken);
          return;
      }
      const r3 = this.startBlockValue(e);
      r3 ? this.stack.push(r3) : (yield* this.pop(), yield* this.step());
    } else {
      const r3 = this.peek(2);
      if (r3.type === "block-map" && (this.type === "map-value-ind" && r3.indent === e.indent || this.type === "newline" && !r3.items[r3.items.length - 1].sep))
        yield* this.pop(), yield* this.step();
      else if (this.type === "map-value-ind" && r3.type !== "flow-collection") {
        const a = os(r3), l3 = Cn(a);
        pl(e);
        const u = e.end.splice(1, e.end.length);
        u.push(this.sourceToken);
        const f = {
          type: "block-map",
          offset: e.offset,
          indent: e.indent,
          items: [{ start: l3, key: e, sep: u }]
        };
        this.onKeyLine = true, this.stack[this.stack.length - 1] = f;
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
    return {
      type: e,
      offset: this.offset,
      indent: this.indent,
      source: this.source
    };
  }
  startBlockValue(e) {
    switch (this.type) {
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return this.flowScalar(this.type);
      case "block-scalar-header":
        return {
          type: "block-scalar",
          offset: this.offset,
          indent: this.indent,
          props: [this.sourceToken],
          source: ""
        };
      case "flow-map-start":
      case "flow-seq-start":
        return {
          type: "flow-collection",
          offset: this.offset,
          indent: this.indent,
          start: this.sourceToken,
          items: [],
          end: []
        };
      case "seq-item-ind":
        return {
          type: "block-seq",
          offset: this.offset,
          indent: this.indent,
          items: [{ start: [this.sourceToken] }]
        };
      case "explicit-key-ind": {
        this.onKeyLine = true;
        const n = os(e), r3 = Cn(n);
        return r3.push(this.sourceToken), {
          type: "block-map",
          offset: this.offset,
          indent: this.indent,
          items: [{ start: r3, explicitKey: true }]
        };
      }
      case "map-value-ind": {
        this.onKeyLine = true;
        const n = os(e), r3 = Cn(n);
        return {
          type: "block-map",
          offset: this.offset,
          indent: this.indent,
          items: [{ start: r3, key: null, sep: [this.sourceToken] }]
        };
      }
    }
    return null;
  }
  atIndentedComment(e, n) {
    return this.type !== "comment" || this.indent <= n ? false : e.every((r3) => r3.type === "newline" || r3.type === "space");
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
function I2(t3) {
  const e = t3.prettyErrors !== false;
  return { lineCounter: t3.lineCounter || e && new _2() || null, prettyErrors: e };
}
function z2(t3, e = {}) {
  const { lineCounter: n, prettyErrors: r3 } = I2(e), a = new C2(n == null ? void 0 : n.addNewLine), l3 = new A2(e);
  let u = null;
  for (const f of l3.compose(a.parse(t3), true, t3.length))
    if (!u)
      u = f;
    else if (u.options.logLevel !== "silent") {
      u.errors.push(new dr(f.range.slice(0, 2), "MULTIPLE_DOCS", "Source contains multiple documents; please use YAML.parseAllDocuments()"));
      break;
    }
  return r3 && n && (u.errors.forEach(ul(t3, n)), u.warnings.forEach(ul(t3, n))), u;
}
function O2(t3, e, n) {
  let r3;
  const a = z2(t3, n);
  if (!a)
    return null;
  if (a.warnings.forEach((l3) => Cc(a.options.logLevel, l3)), a.errors.length > 0) {
    if (a.options.logLevel !== "silent")
      throw a.errors[0];
    a.errors = [];
  }
  return a.toJS(Object.assign({ reviver: r3 }, n));
}
var In = {}, fs = { exports: {} }, B2 = fs.exports, gl;
function D2() {
  return gl || (gl = 1, function(t3, e) {
    (function(r3, a) {
      t3.exports = a();
    })(typeof self < "u" ? self : B2, function() {
      return (
        /******/
        function() {
          var n = {};
          (function() {
            n.d = function(i, s) {
              for (var o in s)
                n.o(s, o) && !n.o(i, o) && Object.defineProperty(i, o, { enumerable: true, get: s[o] });
            };
          })(), function() {
            n.o = function(i, s) {
              return Object.prototype.hasOwnProperty.call(i, s);
            };
          }();
          var r3 = {};
          n.d(r3, {
            default: function() {
              return (
                /* binding */
                Ch
              );
            }
          });
          class a {
            // Error start position based on passed-in Token or ParseNode.
            // Length of affected text based on passed-in Token or ParseNode.
            // The underlying error message without any context added.
            constructor(s, o) {
              this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
              let c3 = "KaTeX parse error: " + s, h3, m;
              const b = o && o.loc;
              if (b && b.start <= b.end) {
                const A = b.lexer.input;
                h3 = b.start, m = b.end, h3 === A.length ? c3 += " at end of input: " : c3 += " at position " + (h3 + 1) + ": ";
                const z = A.slice(h3, m).replace(/[^]/g, "$&̲");
                let D;
                h3 > 15 ? D = "…" + A.slice(h3 - 15, h3) : D = A.slice(0, h3);
                let L;
                m + 15 < A.length ? L = A.slice(m, m + 15) + "…" : L = A.slice(m), c3 += D + z + L;
              }
              const x = new Error(c3);
              return x.name = "ParseError", x.__proto__ = a.prototype, x.position = h3, h3 != null && m != null && (x.length = m - h3), x.rawMessage = s, x;
            }
          }
          a.prototype.__proto__ = Error.prototype;
          var l3 = a;
          const u = function(i, s) {
            return i.indexOf(s) !== -1;
          }, f = function(i, s) {
            return i === void 0 ? s : i;
          }, p = /([A-Z])/g, y = function(i) {
            return i.replace(p, "-$1").toLowerCase();
          }, v = {
            "&": "&amp;",
            ">": "&gt;",
            "<": "&lt;",
            '"': "&quot;",
            "'": "&#x27;"
          }, T = /[&><"']/g;
          function _(i) {
            return String(i).replace(T, (s) => v[s]);
          }
          const C = function(i) {
            return i.type === "ordgroup" || i.type === "color" ? i.body.length === 1 ? C(i.body[0]) : i : i.type === "font" ? C(i.body) : i;
          }, S = function(i) {
            const s = C(i);
            return s.type === "mathord" || s.type === "textord" || s.type === "atom";
          }, N = function(i) {
            if (!i)
              throw new Error("Expected non-null, but got " + String(i));
            return i;
          };
          var I3 = {
            contains: u,
            deflt: f,
            escape: _,
            hyphenate: y,
            getBaseElem: C,
            isCharacterBox: S,
            protocolFromUrl: function(i) {
              const s = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(i);
              return s ? s[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(s[1]) ? null : s[1].toLowerCase() : "_relative";
            }
          };
          const F = {
            displayMode: {
              type: "boolean",
              description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
              cli: "-d, --display-mode"
            },
            output: {
              type: {
                enum: ["htmlAndMathml", "html", "mathml"]
              },
              description: "Determines the markup language of the output.",
              cli: "-F, --format <type>"
            },
            leqno: {
              type: "boolean",
              description: "Render display math in leqno style (left-justified tags)."
            },
            fleqn: {
              type: "boolean",
              description: "Render display math flush left."
            },
            throwOnError: {
              type: "boolean",
              default: true,
              cli: "-t, --no-throw-on-error",
              cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
            },
            errorColor: {
              type: "string",
              default: "#cc0000",
              cli: "-c, --error-color <color>",
              cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
              cliProcessor: (i) => "#" + i
            },
            macros: {
              type: "object",
              cli: "-m, --macro <def>",
              cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
              cliDefault: [],
              cliProcessor: (i, s) => (s.push(i), s)
            },
            minRuleThickness: {
              type: "number",
              description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
              processor: (i) => Math.max(0, i),
              cli: "--min-rule-thickness <size>",
              cliProcessor: parseFloat
            },
            colorIsTextColor: {
              type: "boolean",
              description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
              cli: "-b, --color-is-text-color"
            },
            strict: {
              type: [{
                enum: ["warn", "ignore", "error"]
              }, "boolean", "function"],
              description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
              cli: "-S, --strict",
              cliDefault: false
            },
            trust: {
              type: ["boolean", "function"],
              description: "Trust the input, enabling all HTML features such as \\url.",
              cli: "-T, --trust"
            },
            maxSize: {
              type: "number",
              default: 1 / 0,
              description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
              processor: (i) => Math.max(0, i),
              cli: "-s, --max-size <n>",
              cliProcessor: parseInt
            },
            maxExpand: {
              type: "number",
              default: 1e3,
              description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
              processor: (i) => Math.max(0, i),
              cli: "-e, --max-expand <n>",
              cliProcessor: (i) => i === "Infinity" ? 1 / 0 : parseInt(i)
            },
            globalGroup: {
              type: "boolean",
              cli: false
            }
          };
          function H(i) {
            if (i.default)
              return i.default;
            const s = i.type, o = Array.isArray(s) ? s[0] : s;
            if (typeof o != "string")
              return o.enum[0];
            switch (o) {
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
          class j {
            constructor(s) {
              this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, s = s || {};
              for (const o in F)
                if (F.hasOwnProperty(o)) {
                  const c3 = F[o];
                  this[o] = s[o] !== void 0 ? c3.processor ? c3.processor(s[o]) : s[o] : H(c3);
                }
            }
            /**
             * Report nonstrict (non-LaTeX-compatible) input.
             * Can safely not be called if `this.strict` is false in JavaScript.
             */
            reportNonstrict(s, o, c3) {
              let h3 = this.strict;
              if (typeof h3 == "function" && (h3 = h3(s, o, c3)), !(!h3 || h3 === "ignore")) {
                if (h3 === true || h3 === "error")
                  throw new l3("LaTeX-incompatible input and strict mode is set to 'error': " + (o + " [" + s + "]"), c3);
                h3 === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (o + " [" + s + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + h3 + "': " + o + " [" + s + "]"));
              }
            }
            /**
             * Check whether to apply strict (LaTeX-adhering) behavior for unusual
             * input (like `\\`).  Unlike `nonstrict`, will not throw an error;
             * instead, "error" translates to a return value of `true`, while "ignore"
             * translates to a return value of `false`.  May still print a warning:
             * "warn" prints a warning and returns `false`.
             * This is for the second category of `errorCode`s listed in the README.
             */
            useStrictBehavior(s, o, c3) {
              let h3 = this.strict;
              if (typeof h3 == "function")
                try {
                  h3 = h3(s, o, c3);
                } catch {
                  h3 = "error";
                }
              return !h3 || h3 === "ignore" ? false : h3 === true || h3 === "error" ? true : h3 === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (o + " [" + s + "]")), false) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + h3 + "': " + o + " [" + s + "]")), false);
            }
            /**
             * Check whether to test potentially dangerous input, and return
             * `true` (trusted) or `false` (untrusted).  The sole argument `context`
             * should be an object with `command` field specifying the relevant LaTeX
             * command (as a string starting with `\`), and any other arguments, etc.
             * If `context` has a `url` field, a `protocol` field will automatically
             * get added by this function (changing the specified object).
             */
            isTrusted(s) {
              if (s.url && !s.protocol) {
                const c3 = I3.protocolFromUrl(s.url);
                if (c3 == null)
                  return false;
                s.protocol = c3;
              }
              return !!(typeof this.trust == "function" ? this.trust(s) : this.trust);
            }
          }
          class V {
            constructor(s, o, c3) {
              this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = s, this.size = o, this.cramped = c3;
            }
            /**
             * Get the style of a superscript given a base in the current style.
             */
            sup() {
              return $[se[this.id]];
            }
            /**
             * Get the style of a subscript given a base in the current style.
             */
            sub() {
              return $[J[this.id]];
            }
            /**
             * Get the style of a fraction numerator given the fraction in the current
             * style.
             */
            fracNum() {
              return $[ie[this.id]];
            }
            /**
             * Get the style of a fraction denominator given the fraction in the current
             * style.
             */
            fracDen() {
              return $[pe[this.id]];
            }
            /**
             * Get the cramped version of a style (in particular, cramping a cramped style
             * doesn't change the style).
             */
            cramp() {
              return $[ke[this.id]];
            }
            /**
             * Get a text or display version of this style.
             */
            text() {
              return $[ve[this.id]];
            }
            /**
             * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
             */
            isTight() {
              return this.size >= 2;
            }
          }
          const W = 0, ee = 1, K = 2, le = 3, Te = 4, ue = 5, ce = 6, ye = 7, $ = [new V(W, 0, false), new V(ee, 0, true), new V(K, 1, false), new V(le, 1, true), new V(Te, 2, false), new V(ue, 2, true), new V(ce, 3, false), new V(ye, 3, true)], se = [Te, ue, Te, ue, ce, ye, ce, ye], J = [ue, ue, ue, ue, ye, ye, ye, ye], ie = [K, le, Te, ue, ce, ye, ce, ye], pe = [le, le, ue, ue, ye, ye, ye, ye], ke = [ee, ee, le, le, ue, ue, ye, ye], ve = [W, ee, K, le, K, le, K, le];
          var Z = {
            DISPLAY: $[W],
            TEXT: $[K],
            SCRIPT: $[Te],
            SCRIPTSCRIPT: $[ce]
          };
          const q = [{
            // Latin characters beyond the Latin-1 characters we have metrics for.
            // Needed for Czech, Hungarian and Turkish text, for example.
            name: "latin",
            blocks: [
              [256, 591],
              // Latin Extended-A and Latin Extended-B
              [768, 879]
              // Combining Diacritical marks
            ]
          }, {
            // The Cyrillic script used by Russian and related languages.
            // A Cyrillic subset used to be supported as explicitly defined
            // symbols in symbols.js
            name: "cyrillic",
            blocks: [[1024, 1279]]
          }, {
            // Armenian
            name: "armenian",
            blocks: [[1328, 1423]]
          }, {
            // The Brahmic scripts of South and Southeast Asia
            // Devanagari (0900–097F)
            // Bengali (0980–09FF)
            // Gurmukhi (0A00–0A7F)
            // Gujarati (0A80–0AFF)
            // Oriya (0B00–0B7F)
            // Tamil (0B80–0BFF)
            // Telugu (0C00–0C7F)
            // Kannada (0C80–0CFF)
            // Malayalam (0D00–0D7F)
            // Sinhala (0D80–0DFF)
            // Thai (0E00–0E7F)
            // Lao (0E80–0EFF)
            // Tibetan (0F00–0FFF)
            // Myanmar (1000–109F)
            name: "brahmic",
            blocks: [[2304, 4255]]
          }, {
            name: "georgian",
            blocks: [[4256, 4351]]
          }, {
            // Chinese and Japanese.
            // The "k" in cjk is for Korean, but we've separated Korean out
            name: "cjk",
            blocks: [
              [12288, 12543],
              // CJK symbols and punctuation, Hiragana, Katakana
              [19968, 40879],
              // CJK ideograms
              [65280, 65376]
              // Fullwidth punctuation
              // TODO: add halfwidth Katakana and Romanji glyphs
            ]
          }, {
            // Korean
            name: "hangul",
            blocks: [[44032, 55215]]
          }];
          function ae(i) {
            for (let s = 0; s < q.length; s++) {
              const o = q[s];
              for (let c3 = 0; c3 < o.blocks.length; c3++) {
                const h3 = o.blocks[c3];
                if (i >= h3[0] && i <= h3[1])
                  return o.name;
              }
            }
            return null;
          }
          const we = [];
          q.forEach((i) => i.blocks.forEach((s) => we.push(...s)));
          function Ge(i) {
            for (let s = 0; s < we.length; s += 2)
              if (i >= we[s] && i <= we[s + 1])
                return true;
            return false;
          }
          const nt = 80, mt = function(i, s) {
            return "M95," + (622 + i + s) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + i / 2.075 + " -" + i + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + i) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + i) + " " + s + "h400000v" + (40 + i) + "h-400000z";
          }, Et = function(i, s) {
            return "M263," + (601 + i + s) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + i / 2.084 + " -" + i + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + i) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + i) + " " + s + "h400000v" + (40 + i) + "h-400000z";
          }, Wn = function(i, s) {
            return "M983 " + (10 + i + s) + `
l` + i / 3.13 + " -" + i + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + i) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + i) + " " + s + "h400000v" + (40 + i) + "h-400000z";
          }, au = function(i, s) {
            return "M424," + (2398 + i + s) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + i / 4.223 + " -" + i + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + i) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + i) + " " + s + `
h400000v` + (40 + i) + "h-400000z";
          }, ou = function(i, s) {
            return "M473," + (2713 + i + s) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + i / 5.298 + " -" + i + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + i) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + i) + " " + s + "h400000v" + (40 + i) + "H1017.7z";
          }, lu = function(i) {
            const s = i / 2;
            return "M400000 " + i + " H0 L" + s + " 0 l65 45 L145 " + (i - 80) + " H400000z";
          }, cu = function(i, s, o) {
            const c3 = o - 54 - s - i;
            return "M702 " + (i + s) + "H400000" + (40 + i) + `
H742v` + c3 + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + s + "H400000v" + (40 + i) + "H742z";
          }, uu = function(i, s, o) {
            s = 1e3 * s;
            let c3 = "";
            switch (i) {
              case "sqrtMain":
                c3 = mt(s, nt);
                break;
              case "sqrtSize1":
                c3 = Et(s, nt);
                break;
              case "sqrtSize2":
                c3 = Wn(s, nt);
                break;
              case "sqrtSize3":
                c3 = au(s, nt);
                break;
              case "sqrtSize4":
                c3 = ou(s, nt);
                break;
              case "sqrtTall":
                c3 = cu(s, nt, o);
            }
            return c3;
          }, hu = function(i, s) {
            switch (i) {
              case "⎜":
                return "M291 0 H417 V" + s + " H291z M291 0 H417 V" + s + " H291z";
              case "∣":
                return "M145 0 H188 V" + s + " H145z M145 0 H188 V" + s + " H145z";
              case "∥":
                return "M145 0 H188 V" + s + " H145z M145 0 H188 V" + s + " H145z" + ("M367 0 H410 V" + s + " H367z M367 0 H410 V" + s + " H367z");
              case "⎟":
                return "M457 0 H583 V" + s + " H457z M457 0 H583 V" + s + " H457z";
              case "⎢":
                return "M319 0 H403 V" + s + " H319z M319 0 H403 V" + s + " H319z";
              case "⎥":
                return "M263 0 H347 V" + s + " H263z M263 0 H347 V" + s + " H263z";
              case "⎪":
                return "M384 0 H504 V" + s + " H384z M384 0 H504 V" + s + " H384z";
              case "⏐":
                return "M312 0 H355 V" + s + " H312z M312 0 H355 V" + s + " H312z";
              case "‖":
                return "M257 0 H300 V" + s + " H257z M257 0 H300 V" + s + " H257z" + ("M478 0 H521 V" + s + " H478z M478 0 H521 V" + s + " H478z");
              default:
                return "";
            }
          }, J0 = {
            // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
            doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
            // doublerightarrow is from glyph U+21D2 in font KaTeX Main
            doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
            // leftarrow is from glyph U+2190 in font KaTeX Main
            leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
            // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
            leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
            leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
            // overgroup is from the MnSymbol package (public domain)
            leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
            leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
            // Harpoons are from glyph U+21BD in font KaTeX Main
            leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
            leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
            leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
            leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
            // hook is from glyph U+21A9 in font KaTeX Main
            lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
            leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
            leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
            // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
            leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
            longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
            midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
            midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
            oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
            oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
            oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
            oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
            rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
            rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
            rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
            rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
            rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
            rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
            rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
            rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
            rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
            righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
            rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
            rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
            // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
            twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
            twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
            // tilde1 is a modified version of a glyph from the MnSymbol package
            tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
            // ditto tilde2, tilde3, & tilde4
            tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
            tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
            tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
            // vec is from glyph U+20D7 in font KaTeX Main
            vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
            // widehat1 is a modified version of a glyph from the MnSymbol package
            widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
            // ditto widehat2, widehat3, & widehat4
            widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
            widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
            widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
            // widecheck paths are all inverted versions of widehat
            widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
            widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
            widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
            widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
            // The next ten paths support reaction arrows from the mhchem package.
            // Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
            // baraboveleftarrow is mostly from glyph U+2190 in font KaTeX Main
            baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
            // rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
            rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
            // The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
            // Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
            baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
            rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
            shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
            shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
          }, fu = function(i, s) {
            switch (i) {
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
            // HtmlDomNode
            // Never used; needed for satisfying interface.
            constructor(s) {
              this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = s, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
            }
            hasClass(s) {
              return I3.contains(this.classes, s);
            }
            /** Convert the fragment into a node. */
            toNode() {
              const s = document.createDocumentFragment();
              for (let o = 0; o < this.children.length; o++)
                s.appendChild(this.children[o].toNode());
              return s;
            }
            /** Convert the fragment into HTML markup. */
            toMarkup() {
              let s = "";
              for (let o = 0; o < this.children.length; o++)
                s += this.children[o].toMarkup();
              return s;
            }
            /**
             * Converts the math node into a string, similar to innerText. Applies to
             * MathDomNode's only.
             */
            toText() {
              const s = (o) => o.toText();
              return this.children.map(s).join("");
            }
          }
          var zt = {
            "AMS-Regular": {
              32: [0, 0, 0, 0, 0.25],
              65: [0, 0.68889, 0, 0, 0.72222],
              66: [0, 0.68889, 0, 0, 0.66667],
              67: [0, 0.68889, 0, 0, 0.72222],
              68: [0, 0.68889, 0, 0, 0.72222],
              69: [0, 0.68889, 0, 0, 0.66667],
              70: [0, 0.68889, 0, 0, 0.61111],
              71: [0, 0.68889, 0, 0, 0.77778],
              72: [0, 0.68889, 0, 0, 0.77778],
              73: [0, 0.68889, 0, 0, 0.38889],
              74: [0.16667, 0.68889, 0, 0, 0.5],
              75: [0, 0.68889, 0, 0, 0.77778],
              76: [0, 0.68889, 0, 0, 0.66667],
              77: [0, 0.68889, 0, 0, 0.94445],
              78: [0, 0.68889, 0, 0, 0.72222],
              79: [0.16667, 0.68889, 0, 0, 0.77778],
              80: [0, 0.68889, 0, 0, 0.61111],
              81: [0.16667, 0.68889, 0, 0, 0.77778],
              82: [0, 0.68889, 0, 0, 0.72222],
              83: [0, 0.68889, 0, 0, 0.55556],
              84: [0, 0.68889, 0, 0, 0.66667],
              85: [0, 0.68889, 0, 0, 0.72222],
              86: [0, 0.68889, 0, 0, 0.72222],
              87: [0, 0.68889, 0, 0, 1],
              88: [0, 0.68889, 0, 0, 0.72222],
              89: [0, 0.68889, 0, 0, 0.72222],
              90: [0, 0.68889, 0, 0, 0.66667],
              107: [0, 0.68889, 0, 0, 0.55556],
              160: [0, 0, 0, 0, 0.25],
              165: [0, 0.675, 0.025, 0, 0.75],
              174: [0.15559, 0.69224, 0, 0, 0.94666],
              240: [0, 0.68889, 0, 0, 0.55556],
              295: [0, 0.68889, 0, 0, 0.54028],
              710: [0, 0.825, 0, 0, 2.33334],
              732: [0, 0.9, 0, 0, 2.33334],
              770: [0, 0.825, 0, 0, 2.33334],
              771: [0, 0.9, 0, 0, 2.33334],
              989: [0.08167, 0.58167, 0, 0, 0.77778],
              1008: [0, 0.43056, 0.04028, 0, 0.66667],
              8245: [0, 0.54986, 0, 0, 0.275],
              8463: [0, 0.68889, 0, 0, 0.54028],
              8487: [0, 0.68889, 0, 0, 0.72222],
              8498: [0, 0.68889, 0, 0, 0.55556],
              8502: [0, 0.68889, 0, 0, 0.66667],
              8503: [0, 0.68889, 0, 0, 0.44445],
              8504: [0, 0.68889, 0, 0, 0.66667],
              8513: [0, 0.68889, 0, 0, 0.63889],
              8592: [-0.03598, 0.46402, 0, 0, 0.5],
              8594: [-0.03598, 0.46402, 0, 0, 0.5],
              8602: [-0.13313, 0.36687, 0, 0, 1],
              8603: [-0.13313, 0.36687, 0, 0, 1],
              8606: [0.01354, 0.52239, 0, 0, 1],
              8608: [0.01354, 0.52239, 0, 0, 1],
              8610: [0.01354, 0.52239, 0, 0, 1.11111],
              8611: [0.01354, 0.52239, 0, 0, 1.11111],
              8619: [0, 0.54986, 0, 0, 1],
              8620: [0, 0.54986, 0, 0, 1],
              8621: [-0.13313, 0.37788, 0, 0, 1.38889],
              8622: [-0.13313, 0.36687, 0, 0, 1],
              8624: [0, 0.69224, 0, 0, 0.5],
              8625: [0, 0.69224, 0, 0, 0.5],
              8630: [0, 0.43056, 0, 0, 1],
              8631: [0, 0.43056, 0, 0, 1],
              8634: [0.08198, 0.58198, 0, 0, 0.77778],
              8635: [0.08198, 0.58198, 0, 0, 0.77778],
              8638: [0.19444, 0.69224, 0, 0, 0.41667],
              8639: [0.19444, 0.69224, 0, 0, 0.41667],
              8642: [0.19444, 0.69224, 0, 0, 0.41667],
              8643: [0.19444, 0.69224, 0, 0, 0.41667],
              8644: [0.1808, 0.675, 0, 0, 1],
              8646: [0.1808, 0.675, 0, 0, 1],
              8647: [0.1808, 0.675, 0, 0, 1],
              8648: [0.19444, 0.69224, 0, 0, 0.83334],
              8649: [0.1808, 0.675, 0, 0, 1],
              8650: [0.19444, 0.69224, 0, 0, 0.83334],
              8651: [0.01354, 0.52239, 0, 0, 1],
              8652: [0.01354, 0.52239, 0, 0, 1],
              8653: [-0.13313, 0.36687, 0, 0, 1],
              8654: [-0.13313, 0.36687, 0, 0, 1],
              8655: [-0.13313, 0.36687, 0, 0, 1],
              8666: [0.13667, 0.63667, 0, 0, 1],
              8667: [0.13667, 0.63667, 0, 0, 1],
              8669: [-0.13313, 0.37788, 0, 0, 1],
              8672: [-0.064, 0.437, 0, 0, 1.334],
              8674: [-0.064, 0.437, 0, 0, 1.334],
              8705: [0, 0.825, 0, 0, 0.5],
              8708: [0, 0.68889, 0, 0, 0.55556],
              8709: [0.08167, 0.58167, 0, 0, 0.77778],
              8717: [0, 0.43056, 0, 0, 0.42917],
              8722: [-0.03598, 0.46402, 0, 0, 0.5],
              8724: [0.08198, 0.69224, 0, 0, 0.77778],
              8726: [0.08167, 0.58167, 0, 0, 0.77778],
              8733: [0, 0.69224, 0, 0, 0.77778],
              8736: [0, 0.69224, 0, 0, 0.72222],
              8737: [0, 0.69224, 0, 0, 0.72222],
              8738: [0.03517, 0.52239, 0, 0, 0.72222],
              8739: [0.08167, 0.58167, 0, 0, 0.22222],
              8740: [0.25142, 0.74111, 0, 0, 0.27778],
              8741: [0.08167, 0.58167, 0, 0, 0.38889],
              8742: [0.25142, 0.74111, 0, 0, 0.5],
              8756: [0, 0.69224, 0, 0, 0.66667],
              8757: [0, 0.69224, 0, 0, 0.66667],
              8764: [-0.13313, 0.36687, 0, 0, 0.77778],
              8765: [-0.13313, 0.37788, 0, 0, 0.77778],
              8769: [-0.13313, 0.36687, 0, 0, 0.77778],
              8770: [-0.03625, 0.46375, 0, 0, 0.77778],
              8774: [0.30274, 0.79383, 0, 0, 0.77778],
              8776: [-0.01688, 0.48312, 0, 0, 0.77778],
              8778: [0.08167, 0.58167, 0, 0, 0.77778],
              8782: [0.06062, 0.54986, 0, 0, 0.77778],
              8783: [0.06062, 0.54986, 0, 0, 0.77778],
              8785: [0.08198, 0.58198, 0, 0, 0.77778],
              8786: [0.08198, 0.58198, 0, 0, 0.77778],
              8787: [0.08198, 0.58198, 0, 0, 0.77778],
              8790: [0, 0.69224, 0, 0, 0.77778],
              8791: [0.22958, 0.72958, 0, 0, 0.77778],
              8796: [0.08198, 0.91667, 0, 0, 0.77778],
              8806: [0.25583, 0.75583, 0, 0, 0.77778],
              8807: [0.25583, 0.75583, 0, 0, 0.77778],
              8808: [0.25142, 0.75726, 0, 0, 0.77778],
              8809: [0.25142, 0.75726, 0, 0, 0.77778],
              8812: [0.25583, 0.75583, 0, 0, 0.5],
              8814: [0.20576, 0.70576, 0, 0, 0.77778],
              8815: [0.20576, 0.70576, 0, 0, 0.77778],
              8816: [0.30274, 0.79383, 0, 0, 0.77778],
              8817: [0.30274, 0.79383, 0, 0, 0.77778],
              8818: [0.22958, 0.72958, 0, 0, 0.77778],
              8819: [0.22958, 0.72958, 0, 0, 0.77778],
              8822: [0.1808, 0.675, 0, 0, 0.77778],
              8823: [0.1808, 0.675, 0, 0, 0.77778],
              8828: [0.13667, 0.63667, 0, 0, 0.77778],
              8829: [0.13667, 0.63667, 0, 0, 0.77778],
              8830: [0.22958, 0.72958, 0, 0, 0.77778],
              8831: [0.22958, 0.72958, 0, 0, 0.77778],
              8832: [0.20576, 0.70576, 0, 0, 0.77778],
              8833: [0.20576, 0.70576, 0, 0, 0.77778],
              8840: [0.30274, 0.79383, 0, 0, 0.77778],
              8841: [0.30274, 0.79383, 0, 0, 0.77778],
              8842: [0.13597, 0.63597, 0, 0, 0.77778],
              8843: [0.13597, 0.63597, 0, 0, 0.77778],
              8847: [0.03517, 0.54986, 0, 0, 0.77778],
              8848: [0.03517, 0.54986, 0, 0, 0.77778],
              8858: [0.08198, 0.58198, 0, 0, 0.77778],
              8859: [0.08198, 0.58198, 0, 0, 0.77778],
              8861: [0.08198, 0.58198, 0, 0, 0.77778],
              8862: [0, 0.675, 0, 0, 0.77778],
              8863: [0, 0.675, 0, 0, 0.77778],
              8864: [0, 0.675, 0, 0, 0.77778],
              8865: [0, 0.675, 0, 0, 0.77778],
              8872: [0, 0.69224, 0, 0, 0.61111],
              8873: [0, 0.69224, 0, 0, 0.72222],
              8874: [0, 0.69224, 0, 0, 0.88889],
              8876: [0, 0.68889, 0, 0, 0.61111],
              8877: [0, 0.68889, 0, 0, 0.61111],
              8878: [0, 0.68889, 0, 0, 0.72222],
              8879: [0, 0.68889, 0, 0, 0.72222],
              8882: [0.03517, 0.54986, 0, 0, 0.77778],
              8883: [0.03517, 0.54986, 0, 0, 0.77778],
              8884: [0.13667, 0.63667, 0, 0, 0.77778],
              8885: [0.13667, 0.63667, 0, 0, 0.77778],
              8888: [0, 0.54986, 0, 0, 1.11111],
              8890: [0.19444, 0.43056, 0, 0, 0.55556],
              8891: [0.19444, 0.69224, 0, 0, 0.61111],
              8892: [0.19444, 0.69224, 0, 0, 0.61111],
              8901: [0, 0.54986, 0, 0, 0.27778],
              8903: [0.08167, 0.58167, 0, 0, 0.77778],
              8905: [0.08167, 0.58167, 0, 0, 0.77778],
              8906: [0.08167, 0.58167, 0, 0, 0.77778],
              8907: [0, 0.69224, 0, 0, 0.77778],
              8908: [0, 0.69224, 0, 0, 0.77778],
              8909: [-0.03598, 0.46402, 0, 0, 0.77778],
              8910: [0, 0.54986, 0, 0, 0.76042],
              8911: [0, 0.54986, 0, 0, 0.76042],
              8912: [0.03517, 0.54986, 0, 0, 0.77778],
              8913: [0.03517, 0.54986, 0, 0, 0.77778],
              8914: [0, 0.54986, 0, 0, 0.66667],
              8915: [0, 0.54986, 0, 0, 0.66667],
              8916: [0, 0.69224, 0, 0, 0.66667],
              8918: [0.0391, 0.5391, 0, 0, 0.77778],
              8919: [0.0391, 0.5391, 0, 0, 0.77778],
              8920: [0.03517, 0.54986, 0, 0, 1.33334],
              8921: [0.03517, 0.54986, 0, 0, 1.33334],
              8922: [0.38569, 0.88569, 0, 0, 0.77778],
              8923: [0.38569, 0.88569, 0, 0, 0.77778],
              8926: [0.13667, 0.63667, 0, 0, 0.77778],
              8927: [0.13667, 0.63667, 0, 0, 0.77778],
              8928: [0.30274, 0.79383, 0, 0, 0.77778],
              8929: [0.30274, 0.79383, 0, 0, 0.77778],
              8934: [0.23222, 0.74111, 0, 0, 0.77778],
              8935: [0.23222, 0.74111, 0, 0, 0.77778],
              8936: [0.23222, 0.74111, 0, 0, 0.77778],
              8937: [0.23222, 0.74111, 0, 0, 0.77778],
              8938: [0.20576, 0.70576, 0, 0, 0.77778],
              8939: [0.20576, 0.70576, 0, 0, 0.77778],
              8940: [0.30274, 0.79383, 0, 0, 0.77778],
              8941: [0.30274, 0.79383, 0, 0, 0.77778],
              8994: [0.19444, 0.69224, 0, 0, 0.77778],
              8995: [0.19444, 0.69224, 0, 0, 0.77778],
              9416: [0.15559, 0.69224, 0, 0, 0.90222],
              9484: [0, 0.69224, 0, 0, 0.5],
              9488: [0, 0.69224, 0, 0, 0.5],
              9492: [0, 0.37788, 0, 0, 0.5],
              9496: [0, 0.37788, 0, 0, 0.5],
              9585: [0.19444, 0.68889, 0, 0, 0.88889],
              9586: [0.19444, 0.74111, 0, 0, 0.88889],
              9632: [0, 0.675, 0, 0, 0.77778],
              9633: [0, 0.675, 0, 0, 0.77778],
              9650: [0, 0.54986, 0, 0, 0.72222],
              9651: [0, 0.54986, 0, 0, 0.72222],
              9654: [0.03517, 0.54986, 0, 0, 0.77778],
              9660: [0, 0.54986, 0, 0, 0.72222],
              9661: [0, 0.54986, 0, 0, 0.72222],
              9664: [0.03517, 0.54986, 0, 0, 0.77778],
              9674: [0.11111, 0.69224, 0, 0, 0.66667],
              9733: [0.19444, 0.69224, 0, 0, 0.94445],
              10003: [0, 0.69224, 0, 0, 0.83334],
              10016: [0, 0.69224, 0, 0, 0.83334],
              10731: [0.11111, 0.69224, 0, 0, 0.66667],
              10846: [0.19444, 0.75583, 0, 0, 0.61111],
              10877: [0.13667, 0.63667, 0, 0, 0.77778],
              10878: [0.13667, 0.63667, 0, 0, 0.77778],
              10885: [0.25583, 0.75583, 0, 0, 0.77778],
              10886: [0.25583, 0.75583, 0, 0, 0.77778],
              10887: [0.13597, 0.63597, 0, 0, 0.77778],
              10888: [0.13597, 0.63597, 0, 0, 0.77778],
              10889: [0.26167, 0.75726, 0, 0, 0.77778],
              10890: [0.26167, 0.75726, 0, 0, 0.77778],
              10891: [0.48256, 0.98256, 0, 0, 0.77778],
              10892: [0.48256, 0.98256, 0, 0, 0.77778],
              10901: [0.13667, 0.63667, 0, 0, 0.77778],
              10902: [0.13667, 0.63667, 0, 0, 0.77778],
              10933: [0.25142, 0.75726, 0, 0, 0.77778],
              10934: [0.25142, 0.75726, 0, 0, 0.77778],
              10935: [0.26167, 0.75726, 0, 0, 0.77778],
              10936: [0.26167, 0.75726, 0, 0, 0.77778],
              10937: [0.26167, 0.75726, 0, 0, 0.77778],
              10938: [0.26167, 0.75726, 0, 0, 0.77778],
              10949: [0.25583, 0.75583, 0, 0, 0.77778],
              10950: [0.25583, 0.75583, 0, 0, 0.77778],
              10955: [0.28481, 0.79383, 0, 0, 0.77778],
              10956: [0.28481, 0.79383, 0, 0, 0.77778],
              57350: [0.08167, 0.58167, 0, 0, 0.22222],
              57351: [0.08167, 0.58167, 0, 0, 0.38889],
              57352: [0.08167, 0.58167, 0, 0, 0.77778],
              57353: [0, 0.43056, 0.04028, 0, 0.66667],
              57356: [0.25142, 0.75726, 0, 0, 0.77778],
              57357: [0.25142, 0.75726, 0, 0, 0.77778],
              57358: [0.41951, 0.91951, 0, 0, 0.77778],
              57359: [0.30274, 0.79383, 0, 0, 0.77778],
              57360: [0.30274, 0.79383, 0, 0, 0.77778],
              57361: [0.41951, 0.91951, 0, 0, 0.77778],
              57366: [0.25142, 0.75726, 0, 0, 0.77778],
              57367: [0.25142, 0.75726, 0, 0, 0.77778],
              57368: [0.25142, 0.75726, 0, 0, 0.77778],
              57369: [0.25142, 0.75726, 0, 0, 0.77778],
              57370: [0.13597, 0.63597, 0, 0, 0.77778],
              57371: [0.13597, 0.63597, 0, 0, 0.77778]
            },
            "Caligraphic-Regular": {
              32: [0, 0, 0, 0, 0.25],
              65: [0, 0.68333, 0, 0.19445, 0.79847],
              66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
              67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
              68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
              69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
              70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
              71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
              72: [0, 0.68333, 965e-5, 0.11111, 0.84452],
              73: [0, 0.68333, 0.07382, 0, 0.54452],
              74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
              75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
              76: [0, 0.68333, 0, 0.13889, 0.68972],
              77: [0, 0.68333, 0, 0.13889, 1.2009],
              78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
              79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
              80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
              81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
              82: [0, 0.68333, 0, 0.08334, 0.8475],
              83: [0, 0.68333, 0.075, 0.13889, 0.60556],
              84: [0, 0.68333, 0.25417, 0, 0.54464],
              85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
              86: [0, 0.68333, 0.08222, 0, 0.61278],
              87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
              88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
              89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
              90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
              160: [0, 0, 0, 0, 0.25]
            },
            "Fraktur-Regular": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69141, 0, 0, 0.29574],
              34: [0, 0.69141, 0, 0, 0.21471],
              38: [0, 0.69141, 0, 0, 0.73786],
              39: [0, 0.69141, 0, 0, 0.21201],
              40: [0.24982, 0.74947, 0, 0, 0.38865],
              41: [0.24982, 0.74947, 0, 0, 0.38865],
              42: [0, 0.62119, 0, 0, 0.27764],
              43: [0.08319, 0.58283, 0, 0, 0.75623],
              44: [0, 0.10803, 0, 0, 0.27764],
              45: [0.08319, 0.58283, 0, 0, 0.75623],
              46: [0, 0.10803, 0, 0, 0.27764],
              47: [0.24982, 0.74947, 0, 0, 0.50181],
              48: [0, 0.47534, 0, 0, 0.50181],
              49: [0, 0.47534, 0, 0, 0.50181],
              50: [0, 0.47534, 0, 0, 0.50181],
              51: [0.18906, 0.47534, 0, 0, 0.50181],
              52: [0.18906, 0.47534, 0, 0, 0.50181],
              53: [0.18906, 0.47534, 0, 0, 0.50181],
              54: [0, 0.69141, 0, 0, 0.50181],
              55: [0.18906, 0.47534, 0, 0, 0.50181],
              56: [0, 0.69141, 0, 0, 0.50181],
              57: [0.18906, 0.47534, 0, 0, 0.50181],
              58: [0, 0.47534, 0, 0, 0.21606],
              59: [0.12604, 0.47534, 0, 0, 0.21606],
              61: [-0.13099, 0.36866, 0, 0, 0.75623],
              63: [0, 0.69141, 0, 0, 0.36245],
              65: [0, 0.69141, 0, 0, 0.7176],
              66: [0, 0.69141, 0, 0, 0.88397],
              67: [0, 0.69141, 0, 0, 0.61254],
              68: [0, 0.69141, 0, 0, 0.83158],
              69: [0, 0.69141, 0, 0, 0.66278],
              70: [0.12604, 0.69141, 0, 0, 0.61119],
              71: [0, 0.69141, 0, 0, 0.78539],
              72: [0.06302, 0.69141, 0, 0, 0.7203],
              73: [0, 0.69141, 0, 0, 0.55448],
              74: [0.12604, 0.69141, 0, 0, 0.55231],
              75: [0, 0.69141, 0, 0, 0.66845],
              76: [0, 0.69141, 0, 0, 0.66602],
              77: [0, 0.69141, 0, 0, 1.04953],
              78: [0, 0.69141, 0, 0, 0.83212],
              79: [0, 0.69141, 0, 0, 0.82699],
              80: [0.18906, 0.69141, 0, 0, 0.82753],
              81: [0.03781, 0.69141, 0, 0, 0.82699],
              82: [0, 0.69141, 0, 0, 0.82807],
              83: [0, 0.69141, 0, 0, 0.82861],
              84: [0, 0.69141, 0, 0, 0.66899],
              85: [0, 0.69141, 0, 0, 0.64576],
              86: [0, 0.69141, 0, 0, 0.83131],
              87: [0, 0.69141, 0, 0, 1.04602],
              88: [0, 0.69141, 0, 0, 0.71922],
              89: [0.18906, 0.69141, 0, 0, 0.83293],
              90: [0.12604, 0.69141, 0, 0, 0.60201],
              91: [0.24982, 0.74947, 0, 0, 0.27764],
              93: [0.24982, 0.74947, 0, 0, 0.27764],
              94: [0, 0.69141, 0, 0, 0.49965],
              97: [0, 0.47534, 0, 0, 0.50046],
              98: [0, 0.69141, 0, 0, 0.51315],
              99: [0, 0.47534, 0, 0, 0.38946],
              100: [0, 0.62119, 0, 0, 0.49857],
              101: [0, 0.47534, 0, 0, 0.40053],
              102: [0.18906, 0.69141, 0, 0, 0.32626],
              103: [0.18906, 0.47534, 0, 0, 0.5037],
              104: [0.18906, 0.69141, 0, 0, 0.52126],
              105: [0, 0.69141, 0, 0, 0.27899],
              106: [0, 0.69141, 0, 0, 0.28088],
              107: [0, 0.69141, 0, 0, 0.38946],
              108: [0, 0.69141, 0, 0, 0.27953],
              109: [0, 0.47534, 0, 0, 0.76676],
              110: [0, 0.47534, 0, 0, 0.52666],
              111: [0, 0.47534, 0, 0, 0.48885],
              112: [0.18906, 0.52396, 0, 0, 0.50046],
              113: [0.18906, 0.47534, 0, 0, 0.48912],
              114: [0, 0.47534, 0, 0, 0.38919],
              115: [0, 0.47534, 0, 0, 0.44266],
              116: [0, 0.62119, 0, 0, 0.33301],
              117: [0, 0.47534, 0, 0, 0.5172],
              118: [0, 0.52396, 0, 0, 0.5118],
              119: [0, 0.52396, 0, 0, 0.77351],
              120: [0.18906, 0.47534, 0, 0, 0.38865],
              121: [0.18906, 0.47534, 0, 0, 0.49884],
              122: [0.18906, 0.47534, 0, 0, 0.39054],
              160: [0, 0, 0, 0, 0.25],
              8216: [0, 0.69141, 0, 0, 0.21471],
              8217: [0, 0.69141, 0, 0, 0.21471],
              58112: [0, 0.62119, 0, 0, 0.49749],
              58113: [0, 0.62119, 0, 0, 0.4983],
              58114: [0.18906, 0.69141, 0, 0, 0.33328],
              58115: [0.18906, 0.69141, 0, 0, 0.32923],
              58116: [0.18906, 0.47534, 0, 0, 0.50343],
              58117: [0, 0.69141, 0, 0, 0.33301],
              58118: [0, 0.62119, 0, 0, 0.33409],
              58119: [0, 0.47534, 0, 0, 0.50073]
            },
            "Main-Bold": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69444, 0, 0, 0.35],
              34: [0, 0.69444, 0, 0, 0.60278],
              35: [0.19444, 0.69444, 0, 0, 0.95833],
              36: [0.05556, 0.75, 0, 0, 0.575],
              37: [0.05556, 0.75, 0, 0, 0.95833],
              38: [0, 0.69444, 0, 0, 0.89444],
              39: [0, 0.69444, 0, 0, 0.31944],
              40: [0.25, 0.75, 0, 0, 0.44722],
              41: [0.25, 0.75, 0, 0, 0.44722],
              42: [0, 0.75, 0, 0, 0.575],
              43: [0.13333, 0.63333, 0, 0, 0.89444],
              44: [0.19444, 0.15556, 0, 0, 0.31944],
              45: [0, 0.44444, 0, 0, 0.38333],
              46: [0, 0.15556, 0, 0, 0.31944],
              47: [0.25, 0.75, 0, 0, 0.575],
              48: [0, 0.64444, 0, 0, 0.575],
              49: [0, 0.64444, 0, 0, 0.575],
              50: [0, 0.64444, 0, 0, 0.575],
              51: [0, 0.64444, 0, 0, 0.575],
              52: [0, 0.64444, 0, 0, 0.575],
              53: [0, 0.64444, 0, 0, 0.575],
              54: [0, 0.64444, 0, 0, 0.575],
              55: [0, 0.64444, 0, 0, 0.575],
              56: [0, 0.64444, 0, 0, 0.575],
              57: [0, 0.64444, 0, 0, 0.575],
              58: [0, 0.44444, 0, 0, 0.31944],
              59: [0.19444, 0.44444, 0, 0, 0.31944],
              60: [0.08556, 0.58556, 0, 0, 0.89444],
              61: [-0.10889, 0.39111, 0, 0, 0.89444],
              62: [0.08556, 0.58556, 0, 0, 0.89444],
              63: [0, 0.69444, 0, 0, 0.54305],
              64: [0, 0.69444, 0, 0, 0.89444],
              65: [0, 0.68611, 0, 0, 0.86944],
              66: [0, 0.68611, 0, 0, 0.81805],
              67: [0, 0.68611, 0, 0, 0.83055],
              68: [0, 0.68611, 0, 0, 0.88194],
              69: [0, 0.68611, 0, 0, 0.75555],
              70: [0, 0.68611, 0, 0, 0.72361],
              71: [0, 0.68611, 0, 0, 0.90416],
              72: [0, 0.68611, 0, 0, 0.9],
              73: [0, 0.68611, 0, 0, 0.43611],
              74: [0, 0.68611, 0, 0, 0.59444],
              75: [0, 0.68611, 0, 0, 0.90138],
              76: [0, 0.68611, 0, 0, 0.69166],
              77: [0, 0.68611, 0, 0, 1.09166],
              78: [0, 0.68611, 0, 0, 0.9],
              79: [0, 0.68611, 0, 0, 0.86388],
              80: [0, 0.68611, 0, 0, 0.78611],
              81: [0.19444, 0.68611, 0, 0, 0.86388],
              82: [0, 0.68611, 0, 0, 0.8625],
              83: [0, 0.68611, 0, 0, 0.63889],
              84: [0, 0.68611, 0, 0, 0.8],
              85: [0, 0.68611, 0, 0, 0.88472],
              86: [0, 0.68611, 0.01597, 0, 0.86944],
              87: [0, 0.68611, 0.01597, 0, 1.18888],
              88: [0, 0.68611, 0, 0, 0.86944],
              89: [0, 0.68611, 0.02875, 0, 0.86944],
              90: [0, 0.68611, 0, 0, 0.70277],
              91: [0.25, 0.75, 0, 0, 0.31944],
              92: [0.25, 0.75, 0, 0, 0.575],
              93: [0.25, 0.75, 0, 0, 0.31944],
              94: [0, 0.69444, 0, 0, 0.575],
              95: [0.31, 0.13444, 0.03194, 0, 0.575],
              97: [0, 0.44444, 0, 0, 0.55902],
              98: [0, 0.69444, 0, 0, 0.63889],
              99: [0, 0.44444, 0, 0, 0.51111],
              100: [0, 0.69444, 0, 0, 0.63889],
              101: [0, 0.44444, 0, 0, 0.52708],
              102: [0, 0.69444, 0.10903, 0, 0.35139],
              103: [0.19444, 0.44444, 0.01597, 0, 0.575],
              104: [0, 0.69444, 0, 0, 0.63889],
              105: [0, 0.69444, 0, 0, 0.31944],
              106: [0.19444, 0.69444, 0, 0, 0.35139],
              107: [0, 0.69444, 0, 0, 0.60694],
              108: [0, 0.69444, 0, 0, 0.31944],
              109: [0, 0.44444, 0, 0, 0.95833],
              110: [0, 0.44444, 0, 0, 0.63889],
              111: [0, 0.44444, 0, 0, 0.575],
              112: [0.19444, 0.44444, 0, 0, 0.63889],
              113: [0.19444, 0.44444, 0, 0, 0.60694],
              114: [0, 0.44444, 0, 0, 0.47361],
              115: [0, 0.44444, 0, 0, 0.45361],
              116: [0, 0.63492, 0, 0, 0.44722],
              117: [0, 0.44444, 0, 0, 0.63889],
              118: [0, 0.44444, 0.01597, 0, 0.60694],
              119: [0, 0.44444, 0.01597, 0, 0.83055],
              120: [0, 0.44444, 0, 0, 0.60694],
              121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
              122: [0, 0.44444, 0, 0, 0.51111],
              123: [0.25, 0.75, 0, 0, 0.575],
              124: [0.25, 0.75, 0, 0, 0.31944],
              125: [0.25, 0.75, 0, 0, 0.575],
              126: [0.35, 0.34444, 0, 0, 0.575],
              160: [0, 0, 0, 0, 0.25],
              163: [0, 0.69444, 0, 0, 0.86853],
              168: [0, 0.69444, 0, 0, 0.575],
              172: [0, 0.44444, 0, 0, 0.76666],
              176: [0, 0.69444, 0, 0, 0.86944],
              177: [0.13333, 0.63333, 0, 0, 0.89444],
              184: [0.17014, 0, 0, 0, 0.51111],
              198: [0, 0.68611, 0, 0, 1.04166],
              215: [0.13333, 0.63333, 0, 0, 0.89444],
              216: [0.04861, 0.73472, 0, 0, 0.89444],
              223: [0, 0.69444, 0, 0, 0.59722],
              230: [0, 0.44444, 0, 0, 0.83055],
              247: [0.13333, 0.63333, 0, 0, 0.89444],
              248: [0.09722, 0.54167, 0, 0, 0.575],
              305: [0, 0.44444, 0, 0, 0.31944],
              338: [0, 0.68611, 0, 0, 1.16944],
              339: [0, 0.44444, 0, 0, 0.89444],
              567: [0.19444, 0.44444, 0, 0, 0.35139],
              710: [0, 0.69444, 0, 0, 0.575],
              711: [0, 0.63194, 0, 0, 0.575],
              713: [0, 0.59611, 0, 0, 0.575],
              714: [0, 0.69444, 0, 0, 0.575],
              715: [0, 0.69444, 0, 0, 0.575],
              728: [0, 0.69444, 0, 0, 0.575],
              729: [0, 0.69444, 0, 0, 0.31944],
              730: [0, 0.69444, 0, 0, 0.86944],
              732: [0, 0.69444, 0, 0, 0.575],
              733: [0, 0.69444, 0, 0, 0.575],
              915: [0, 0.68611, 0, 0, 0.69166],
              916: [0, 0.68611, 0, 0, 0.95833],
              920: [0, 0.68611, 0, 0, 0.89444],
              923: [0, 0.68611, 0, 0, 0.80555],
              926: [0, 0.68611, 0, 0, 0.76666],
              928: [0, 0.68611, 0, 0, 0.9],
              931: [0, 0.68611, 0, 0, 0.83055],
              933: [0, 0.68611, 0, 0, 0.89444],
              934: [0, 0.68611, 0, 0, 0.83055],
              936: [0, 0.68611, 0, 0, 0.89444],
              937: [0, 0.68611, 0, 0, 0.83055],
              8211: [0, 0.44444, 0.03194, 0, 0.575],
              8212: [0, 0.44444, 0.03194, 0, 1.14999],
              8216: [0, 0.69444, 0, 0, 0.31944],
              8217: [0, 0.69444, 0, 0, 0.31944],
              8220: [0, 0.69444, 0, 0, 0.60278],
              8221: [0, 0.69444, 0, 0, 0.60278],
              8224: [0.19444, 0.69444, 0, 0, 0.51111],
              8225: [0.19444, 0.69444, 0, 0, 0.51111],
              8242: [0, 0.55556, 0, 0, 0.34444],
              8407: [0, 0.72444, 0.15486, 0, 0.575],
              8463: [0, 0.69444, 0, 0, 0.66759],
              8465: [0, 0.69444, 0, 0, 0.83055],
              8467: [0, 0.69444, 0, 0, 0.47361],
              8472: [0.19444, 0.44444, 0, 0, 0.74027],
              8476: [0, 0.69444, 0, 0, 0.83055],
              8501: [0, 0.69444, 0, 0, 0.70277],
              8592: [-0.10889, 0.39111, 0, 0, 1.14999],
              8593: [0.19444, 0.69444, 0, 0, 0.575],
              8594: [-0.10889, 0.39111, 0, 0, 1.14999],
              8595: [0.19444, 0.69444, 0, 0, 0.575],
              8596: [-0.10889, 0.39111, 0, 0, 1.14999],
              8597: [0.25, 0.75, 0, 0, 0.575],
              8598: [0.19444, 0.69444, 0, 0, 1.14999],
              8599: [0.19444, 0.69444, 0, 0, 1.14999],
              8600: [0.19444, 0.69444, 0, 0, 1.14999],
              8601: [0.19444, 0.69444, 0, 0, 1.14999],
              8636: [-0.10889, 0.39111, 0, 0, 1.14999],
              8637: [-0.10889, 0.39111, 0, 0, 1.14999],
              8640: [-0.10889, 0.39111, 0, 0, 1.14999],
              8641: [-0.10889, 0.39111, 0, 0, 1.14999],
              8656: [-0.10889, 0.39111, 0, 0, 1.14999],
              8657: [0.19444, 0.69444, 0, 0, 0.70277],
              8658: [-0.10889, 0.39111, 0, 0, 1.14999],
              8659: [0.19444, 0.69444, 0, 0, 0.70277],
              8660: [-0.10889, 0.39111, 0, 0, 1.14999],
              8661: [0.25, 0.75, 0, 0, 0.70277],
              8704: [0, 0.69444, 0, 0, 0.63889],
              8706: [0, 0.69444, 0.06389, 0, 0.62847],
              8707: [0, 0.69444, 0, 0, 0.63889],
              8709: [0.05556, 0.75, 0, 0, 0.575],
              8711: [0, 0.68611, 0, 0, 0.95833],
              8712: [0.08556, 0.58556, 0, 0, 0.76666],
              8715: [0.08556, 0.58556, 0, 0, 0.76666],
              8722: [0.13333, 0.63333, 0, 0, 0.89444],
              8723: [0.13333, 0.63333, 0, 0, 0.89444],
              8725: [0.25, 0.75, 0, 0, 0.575],
              8726: [0.25, 0.75, 0, 0, 0.575],
              8727: [-0.02778, 0.47222, 0, 0, 0.575],
              8728: [-0.02639, 0.47361, 0, 0, 0.575],
              8729: [-0.02639, 0.47361, 0, 0, 0.575],
              8730: [0.18, 0.82, 0, 0, 0.95833],
              8733: [0, 0.44444, 0, 0, 0.89444],
              8734: [0, 0.44444, 0, 0, 1.14999],
              8736: [0, 0.69224, 0, 0, 0.72222],
              8739: [0.25, 0.75, 0, 0, 0.31944],
              8741: [0.25, 0.75, 0, 0, 0.575],
              8743: [0, 0.55556, 0, 0, 0.76666],
              8744: [0, 0.55556, 0, 0, 0.76666],
              8745: [0, 0.55556, 0, 0, 0.76666],
              8746: [0, 0.55556, 0, 0, 0.76666],
              8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
              8764: [-0.10889, 0.39111, 0, 0, 0.89444],
              8768: [0.19444, 0.69444, 0, 0, 0.31944],
              8771: [222e-5, 0.50222, 0, 0, 0.89444],
              8773: [0.027, 0.638, 0, 0, 0.894],
              8776: [0.02444, 0.52444, 0, 0, 0.89444],
              8781: [222e-5, 0.50222, 0, 0, 0.89444],
              8801: [222e-5, 0.50222, 0, 0, 0.89444],
              8804: [0.19667, 0.69667, 0, 0, 0.89444],
              8805: [0.19667, 0.69667, 0, 0, 0.89444],
              8810: [0.08556, 0.58556, 0, 0, 1.14999],
              8811: [0.08556, 0.58556, 0, 0, 1.14999],
              8826: [0.08556, 0.58556, 0, 0, 0.89444],
              8827: [0.08556, 0.58556, 0, 0, 0.89444],
              8834: [0.08556, 0.58556, 0, 0, 0.89444],
              8835: [0.08556, 0.58556, 0, 0, 0.89444],
              8838: [0.19667, 0.69667, 0, 0, 0.89444],
              8839: [0.19667, 0.69667, 0, 0, 0.89444],
              8846: [0, 0.55556, 0, 0, 0.76666],
              8849: [0.19667, 0.69667, 0, 0, 0.89444],
              8850: [0.19667, 0.69667, 0, 0, 0.89444],
              8851: [0, 0.55556, 0, 0, 0.76666],
              8852: [0, 0.55556, 0, 0, 0.76666],
              8853: [0.13333, 0.63333, 0, 0, 0.89444],
              8854: [0.13333, 0.63333, 0, 0, 0.89444],
              8855: [0.13333, 0.63333, 0, 0, 0.89444],
              8856: [0.13333, 0.63333, 0, 0, 0.89444],
              8857: [0.13333, 0.63333, 0, 0, 0.89444],
              8866: [0, 0.69444, 0, 0, 0.70277],
              8867: [0, 0.69444, 0, 0, 0.70277],
              8868: [0, 0.69444, 0, 0, 0.89444],
              8869: [0, 0.69444, 0, 0, 0.89444],
              8900: [-0.02639, 0.47361, 0, 0, 0.575],
              8901: [-0.02639, 0.47361, 0, 0, 0.31944],
              8902: [-0.02778, 0.47222, 0, 0, 0.575],
              8968: [0.25, 0.75, 0, 0, 0.51111],
              8969: [0.25, 0.75, 0, 0, 0.51111],
              8970: [0.25, 0.75, 0, 0, 0.51111],
              8971: [0.25, 0.75, 0, 0, 0.51111],
              8994: [-0.13889, 0.36111, 0, 0, 1.14999],
              8995: [-0.13889, 0.36111, 0, 0, 1.14999],
              9651: [0.19444, 0.69444, 0, 0, 1.02222],
              9657: [-0.02778, 0.47222, 0, 0, 0.575],
              9661: [0.19444, 0.69444, 0, 0, 1.02222],
              9667: [-0.02778, 0.47222, 0, 0, 0.575],
              9711: [0.19444, 0.69444, 0, 0, 1.14999],
              9824: [0.12963, 0.69444, 0, 0, 0.89444],
              9825: [0.12963, 0.69444, 0, 0, 0.89444],
              9826: [0.12963, 0.69444, 0, 0, 0.89444],
              9827: [0.12963, 0.69444, 0, 0, 0.89444],
              9837: [0, 0.75, 0, 0, 0.44722],
              9838: [0.19444, 0.69444, 0, 0, 0.44722],
              9839: [0.19444, 0.69444, 0, 0, 0.44722],
              10216: [0.25, 0.75, 0, 0, 0.44722],
              10217: [0.25, 0.75, 0, 0, 0.44722],
              10815: [0, 0.68611, 0, 0, 0.9],
              10927: [0.19667, 0.69667, 0, 0, 0.89444],
              10928: [0.19667, 0.69667, 0, 0, 0.89444],
              57376: [0.19444, 0.69444, 0, 0, 0]
            },
            "Main-BoldItalic": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69444, 0.11417, 0, 0.38611],
              34: [0, 0.69444, 0.07939, 0, 0.62055],
              35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
              37: [0.05556, 0.75, 0.12861, 0, 0.94444],
              38: [0, 0.69444, 0.08528, 0, 0.88555],
              39: [0, 0.69444, 0.12945, 0, 0.35555],
              40: [0.25, 0.75, 0.15806, 0, 0.47333],
              41: [0.25, 0.75, 0.03306, 0, 0.47333],
              42: [0, 0.75, 0.14333, 0, 0.59111],
              43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
              44: [0.19444, 0.14722, 0, 0, 0.35555],
              45: [0, 0.44444, 0.02611, 0, 0.41444],
              46: [0, 0.14722, 0, 0, 0.35555],
              47: [0.25, 0.75, 0.15806, 0, 0.59111],
              48: [0, 0.64444, 0.13167, 0, 0.59111],
              49: [0, 0.64444, 0.13167, 0, 0.59111],
              50: [0, 0.64444, 0.13167, 0, 0.59111],
              51: [0, 0.64444, 0.13167, 0, 0.59111],
              52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
              53: [0, 0.64444, 0.13167, 0, 0.59111],
              54: [0, 0.64444, 0.13167, 0, 0.59111],
              55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
              56: [0, 0.64444, 0.13167, 0, 0.59111],
              57: [0, 0.64444, 0.13167, 0, 0.59111],
              58: [0, 0.44444, 0.06695, 0, 0.35555],
              59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
              61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
              63: [0, 0.69444, 0.11472, 0, 0.59111],
              64: [0, 0.69444, 0.09208, 0, 0.88555],
              65: [0, 0.68611, 0, 0, 0.86555],
              66: [0, 0.68611, 0.0992, 0, 0.81666],
              67: [0, 0.68611, 0.14208, 0, 0.82666],
              68: [0, 0.68611, 0.09062, 0, 0.87555],
              69: [0, 0.68611, 0.11431, 0, 0.75666],
              70: [0, 0.68611, 0.12903, 0, 0.72722],
              71: [0, 0.68611, 0.07347, 0, 0.89527],
              72: [0, 0.68611, 0.17208, 0, 0.8961],
              73: [0, 0.68611, 0.15681, 0, 0.47166],
              74: [0, 0.68611, 0.145, 0, 0.61055],
              75: [0, 0.68611, 0.14208, 0, 0.89499],
              76: [0, 0.68611, 0, 0, 0.69777],
              77: [0, 0.68611, 0.17208, 0, 1.07277],
              78: [0, 0.68611, 0.17208, 0, 0.8961],
              79: [0, 0.68611, 0.09062, 0, 0.85499],
              80: [0, 0.68611, 0.0992, 0, 0.78721],
              81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
              82: [0, 0.68611, 0.02559, 0, 0.85944],
              83: [0, 0.68611, 0.11264, 0, 0.64999],
              84: [0, 0.68611, 0.12903, 0, 0.7961],
              85: [0, 0.68611, 0.17208, 0, 0.88083],
              86: [0, 0.68611, 0.18625, 0, 0.86555],
              87: [0, 0.68611, 0.18625, 0, 1.15999],
              88: [0, 0.68611, 0.15681, 0, 0.86555],
              89: [0, 0.68611, 0.19803, 0, 0.86555],
              90: [0, 0.68611, 0.14208, 0, 0.70888],
              91: [0.25, 0.75, 0.1875, 0, 0.35611],
              93: [0.25, 0.75, 0.09972, 0, 0.35611],
              94: [0, 0.69444, 0.06709, 0, 0.59111],
              95: [0.31, 0.13444, 0.09811, 0, 0.59111],
              97: [0, 0.44444, 0.09426, 0, 0.59111],
              98: [0, 0.69444, 0.07861, 0, 0.53222],
              99: [0, 0.44444, 0.05222, 0, 0.53222],
              100: [0, 0.69444, 0.10861, 0, 0.59111],
              101: [0, 0.44444, 0.085, 0, 0.53222],
              102: [0.19444, 0.69444, 0.21778, 0, 0.4],
              103: [0.19444, 0.44444, 0.105, 0, 0.53222],
              104: [0, 0.69444, 0.09426, 0, 0.59111],
              105: [0, 0.69326, 0.11387, 0, 0.35555],
              106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
              107: [0, 0.69444, 0.11111, 0, 0.53222],
              108: [0, 0.69444, 0.10861, 0, 0.29666],
              109: [0, 0.44444, 0.09426, 0, 0.94444],
              110: [0, 0.44444, 0.09426, 0, 0.64999],
              111: [0, 0.44444, 0.07861, 0, 0.59111],
              112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
              113: [0.19444, 0.44444, 0.105, 0, 0.53222],
              114: [0, 0.44444, 0.11111, 0, 0.50167],
              115: [0, 0.44444, 0.08167, 0, 0.48694],
              116: [0, 0.63492, 0.09639, 0, 0.385],
              117: [0, 0.44444, 0.09426, 0, 0.62055],
              118: [0, 0.44444, 0.11111, 0, 0.53222],
              119: [0, 0.44444, 0.11111, 0, 0.76777],
              120: [0, 0.44444, 0.12583, 0, 0.56055],
              121: [0.19444, 0.44444, 0.105, 0, 0.56166],
              122: [0, 0.44444, 0.13889, 0, 0.49055],
              126: [0.35, 0.34444, 0.11472, 0, 0.59111],
              160: [0, 0, 0, 0, 0.25],
              168: [0, 0.69444, 0.11473, 0, 0.59111],
              176: [0, 0.69444, 0, 0, 0.94888],
              184: [0.17014, 0, 0, 0, 0.53222],
              198: [0, 0.68611, 0.11431, 0, 1.02277],
              216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
              223: [0.19444, 0.69444, 0.09736, 0, 0.665],
              230: [0, 0.44444, 0.085, 0, 0.82666],
              248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
              305: [0, 0.44444, 0.09426, 0, 0.35555],
              338: [0, 0.68611, 0.11431, 0, 1.14054],
              339: [0, 0.44444, 0.085, 0, 0.82666],
              567: [0.19444, 0.44444, 0.04611, 0, 0.385],
              710: [0, 0.69444, 0.06709, 0, 0.59111],
              711: [0, 0.63194, 0.08271, 0, 0.59111],
              713: [0, 0.59444, 0.10444, 0, 0.59111],
              714: [0, 0.69444, 0.08528, 0, 0.59111],
              715: [0, 0.69444, 0, 0, 0.59111],
              728: [0, 0.69444, 0.10333, 0, 0.59111],
              729: [0, 0.69444, 0.12945, 0, 0.35555],
              730: [0, 0.69444, 0, 0, 0.94888],
              732: [0, 0.69444, 0.11472, 0, 0.59111],
              733: [0, 0.69444, 0.11472, 0, 0.59111],
              915: [0, 0.68611, 0.12903, 0, 0.69777],
              916: [0, 0.68611, 0, 0, 0.94444],
              920: [0, 0.68611, 0.09062, 0, 0.88555],
              923: [0, 0.68611, 0, 0, 0.80666],
              926: [0, 0.68611, 0.15092, 0, 0.76777],
              928: [0, 0.68611, 0.17208, 0, 0.8961],
              931: [0, 0.68611, 0.11431, 0, 0.82666],
              933: [0, 0.68611, 0.10778, 0, 0.88555],
              934: [0, 0.68611, 0.05632, 0, 0.82666],
              936: [0, 0.68611, 0.10778, 0, 0.88555],
              937: [0, 0.68611, 0.0992, 0, 0.82666],
              8211: [0, 0.44444, 0.09811, 0, 0.59111],
              8212: [0, 0.44444, 0.09811, 0, 1.18221],
              8216: [0, 0.69444, 0.12945, 0, 0.35555],
              8217: [0, 0.69444, 0.12945, 0, 0.35555],
              8220: [0, 0.69444, 0.16772, 0, 0.62055],
              8221: [0, 0.69444, 0.07939, 0, 0.62055]
            },
            "Main-Italic": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69444, 0.12417, 0, 0.30667],
              34: [0, 0.69444, 0.06961, 0, 0.51444],
              35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
              37: [0.05556, 0.75, 0.13639, 0, 0.81777],
              38: [0, 0.69444, 0.09694, 0, 0.76666],
              39: [0, 0.69444, 0.12417, 0, 0.30667],
              40: [0.25, 0.75, 0.16194, 0, 0.40889],
              41: [0.25, 0.75, 0.03694, 0, 0.40889],
              42: [0, 0.75, 0.14917, 0, 0.51111],
              43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
              44: [0.19444, 0.10556, 0, 0, 0.30667],
              45: [0, 0.43056, 0.02826, 0, 0.35778],
              46: [0, 0.10556, 0, 0, 0.30667],
              47: [0.25, 0.75, 0.16194, 0, 0.51111],
              48: [0, 0.64444, 0.13556, 0, 0.51111],
              49: [0, 0.64444, 0.13556, 0, 0.51111],
              50: [0, 0.64444, 0.13556, 0, 0.51111],
              51: [0, 0.64444, 0.13556, 0, 0.51111],
              52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
              53: [0, 0.64444, 0.13556, 0, 0.51111],
              54: [0, 0.64444, 0.13556, 0, 0.51111],
              55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
              56: [0, 0.64444, 0.13556, 0, 0.51111],
              57: [0, 0.64444, 0.13556, 0, 0.51111],
              58: [0, 0.43056, 0.0582, 0, 0.30667],
              59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
              61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
              63: [0, 0.69444, 0.1225, 0, 0.51111],
              64: [0, 0.69444, 0.09597, 0, 0.76666],
              65: [0, 0.68333, 0, 0, 0.74333],
              66: [0, 0.68333, 0.10257, 0, 0.70389],
              67: [0, 0.68333, 0.14528, 0, 0.71555],
              68: [0, 0.68333, 0.09403, 0, 0.755],
              69: [0, 0.68333, 0.12028, 0, 0.67833],
              70: [0, 0.68333, 0.13305, 0, 0.65277],
              71: [0, 0.68333, 0.08722, 0, 0.77361],
              72: [0, 0.68333, 0.16389, 0, 0.74333],
              73: [0, 0.68333, 0.15806, 0, 0.38555],
              74: [0, 0.68333, 0.14028, 0, 0.525],
              75: [0, 0.68333, 0.14528, 0, 0.76888],
              76: [0, 0.68333, 0, 0, 0.62722],
              77: [0, 0.68333, 0.16389, 0, 0.89666],
              78: [0, 0.68333, 0.16389, 0, 0.74333],
              79: [0, 0.68333, 0.09403, 0, 0.76666],
              80: [0, 0.68333, 0.10257, 0, 0.67833],
              81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
              82: [0, 0.68333, 0.03868, 0, 0.72944],
              83: [0, 0.68333, 0.11972, 0, 0.56222],
              84: [0, 0.68333, 0.13305, 0, 0.71555],
              85: [0, 0.68333, 0.16389, 0, 0.74333],
              86: [0, 0.68333, 0.18361, 0, 0.74333],
              87: [0, 0.68333, 0.18361, 0, 0.99888],
              88: [0, 0.68333, 0.15806, 0, 0.74333],
              89: [0, 0.68333, 0.19383, 0, 0.74333],
              90: [0, 0.68333, 0.14528, 0, 0.61333],
              91: [0.25, 0.75, 0.1875, 0, 0.30667],
              93: [0.25, 0.75, 0.10528, 0, 0.30667],
              94: [0, 0.69444, 0.06646, 0, 0.51111],
              95: [0.31, 0.12056, 0.09208, 0, 0.51111],
              97: [0, 0.43056, 0.07671, 0, 0.51111],
              98: [0, 0.69444, 0.06312, 0, 0.46],
              99: [0, 0.43056, 0.05653, 0, 0.46],
              100: [0, 0.69444, 0.10333, 0, 0.51111],
              101: [0, 0.43056, 0.07514, 0, 0.46],
              102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
              103: [0.19444, 0.43056, 0.08847, 0, 0.46],
              104: [0, 0.69444, 0.07671, 0, 0.51111],
              105: [0, 0.65536, 0.1019, 0, 0.30667],
              106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
              107: [0, 0.69444, 0.10764, 0, 0.46],
              108: [0, 0.69444, 0.10333, 0, 0.25555],
              109: [0, 0.43056, 0.07671, 0, 0.81777],
              110: [0, 0.43056, 0.07671, 0, 0.56222],
              111: [0, 0.43056, 0.06312, 0, 0.51111],
              112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
              113: [0.19444, 0.43056, 0.08847, 0, 0.46],
              114: [0, 0.43056, 0.10764, 0, 0.42166],
              115: [0, 0.43056, 0.08208, 0, 0.40889],
              116: [0, 0.61508, 0.09486, 0, 0.33222],
              117: [0, 0.43056, 0.07671, 0, 0.53666],
              118: [0, 0.43056, 0.10764, 0, 0.46],
              119: [0, 0.43056, 0.10764, 0, 0.66444],
              120: [0, 0.43056, 0.12042, 0, 0.46389],
              121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
              122: [0, 0.43056, 0.12292, 0, 0.40889],
              126: [0.35, 0.31786, 0.11585, 0, 0.51111],
              160: [0, 0, 0, 0, 0.25],
              168: [0, 0.66786, 0.10474, 0, 0.51111],
              176: [0, 0.69444, 0, 0, 0.83129],
              184: [0.17014, 0, 0, 0, 0.46],
              198: [0, 0.68333, 0.12028, 0, 0.88277],
              216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
              223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
              230: [0, 0.43056, 0.07514, 0, 0.71555],
              248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
              338: [0, 0.68333, 0.12028, 0, 0.98499],
              339: [0, 0.43056, 0.07514, 0, 0.71555],
              710: [0, 0.69444, 0.06646, 0, 0.51111],
              711: [0, 0.62847, 0.08295, 0, 0.51111],
              713: [0, 0.56167, 0.10333, 0, 0.51111],
              714: [0, 0.69444, 0.09694, 0, 0.51111],
              715: [0, 0.69444, 0, 0, 0.51111],
              728: [0, 0.69444, 0.10806, 0, 0.51111],
              729: [0, 0.66786, 0.11752, 0, 0.30667],
              730: [0, 0.69444, 0, 0, 0.83129],
              732: [0, 0.66786, 0.11585, 0, 0.51111],
              733: [0, 0.69444, 0.1225, 0, 0.51111],
              915: [0, 0.68333, 0.13305, 0, 0.62722],
              916: [0, 0.68333, 0, 0, 0.81777],
              920: [0, 0.68333, 0.09403, 0, 0.76666],
              923: [0, 0.68333, 0, 0, 0.69222],
              926: [0, 0.68333, 0.15294, 0, 0.66444],
              928: [0, 0.68333, 0.16389, 0, 0.74333],
              931: [0, 0.68333, 0.12028, 0, 0.71555],
              933: [0, 0.68333, 0.11111, 0, 0.76666],
              934: [0, 0.68333, 0.05986, 0, 0.71555],
              936: [0, 0.68333, 0.11111, 0, 0.76666],
              937: [0, 0.68333, 0.10257, 0, 0.71555],
              8211: [0, 0.43056, 0.09208, 0, 0.51111],
              8212: [0, 0.43056, 0.09208, 0, 1.02222],
              8216: [0, 0.69444, 0.12417, 0, 0.30667],
              8217: [0, 0.69444, 0.12417, 0, 0.30667],
              8220: [0, 0.69444, 0.1685, 0, 0.51444],
              8221: [0, 0.69444, 0.06961, 0, 0.51444],
              8463: [0, 0.68889, 0, 0, 0.54028]
            },
            "Main-Regular": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69444, 0, 0, 0.27778],
              34: [0, 0.69444, 0, 0, 0.5],
              35: [0.19444, 0.69444, 0, 0, 0.83334],
              36: [0.05556, 0.75, 0, 0, 0.5],
              37: [0.05556, 0.75, 0, 0, 0.83334],
              38: [0, 0.69444, 0, 0, 0.77778],
              39: [0, 0.69444, 0, 0, 0.27778],
              40: [0.25, 0.75, 0, 0, 0.38889],
              41: [0.25, 0.75, 0, 0, 0.38889],
              42: [0, 0.75, 0, 0, 0.5],
              43: [0.08333, 0.58333, 0, 0, 0.77778],
              44: [0.19444, 0.10556, 0, 0, 0.27778],
              45: [0, 0.43056, 0, 0, 0.33333],
              46: [0, 0.10556, 0, 0, 0.27778],
              47: [0.25, 0.75, 0, 0, 0.5],
              48: [0, 0.64444, 0, 0, 0.5],
              49: [0, 0.64444, 0, 0, 0.5],
              50: [0, 0.64444, 0, 0, 0.5],
              51: [0, 0.64444, 0, 0, 0.5],
              52: [0, 0.64444, 0, 0, 0.5],
              53: [0, 0.64444, 0, 0, 0.5],
              54: [0, 0.64444, 0, 0, 0.5],
              55: [0, 0.64444, 0, 0, 0.5],
              56: [0, 0.64444, 0, 0, 0.5],
              57: [0, 0.64444, 0, 0, 0.5],
              58: [0, 0.43056, 0, 0, 0.27778],
              59: [0.19444, 0.43056, 0, 0, 0.27778],
              60: [0.0391, 0.5391, 0, 0, 0.77778],
              61: [-0.13313, 0.36687, 0, 0, 0.77778],
              62: [0.0391, 0.5391, 0, 0, 0.77778],
              63: [0, 0.69444, 0, 0, 0.47222],
              64: [0, 0.69444, 0, 0, 0.77778],
              65: [0, 0.68333, 0, 0, 0.75],
              66: [0, 0.68333, 0, 0, 0.70834],
              67: [0, 0.68333, 0, 0, 0.72222],
              68: [0, 0.68333, 0, 0, 0.76389],
              69: [0, 0.68333, 0, 0, 0.68056],
              70: [0, 0.68333, 0, 0, 0.65278],
              71: [0, 0.68333, 0, 0, 0.78472],
              72: [0, 0.68333, 0, 0, 0.75],
              73: [0, 0.68333, 0, 0, 0.36111],
              74: [0, 0.68333, 0, 0, 0.51389],
              75: [0, 0.68333, 0, 0, 0.77778],
              76: [0, 0.68333, 0, 0, 0.625],
              77: [0, 0.68333, 0, 0, 0.91667],
              78: [0, 0.68333, 0, 0, 0.75],
              79: [0, 0.68333, 0, 0, 0.77778],
              80: [0, 0.68333, 0, 0, 0.68056],
              81: [0.19444, 0.68333, 0, 0, 0.77778],
              82: [0, 0.68333, 0, 0, 0.73611],
              83: [0, 0.68333, 0, 0, 0.55556],
              84: [0, 0.68333, 0, 0, 0.72222],
              85: [0, 0.68333, 0, 0, 0.75],
              86: [0, 0.68333, 0.01389, 0, 0.75],
              87: [0, 0.68333, 0.01389, 0, 1.02778],
              88: [0, 0.68333, 0, 0, 0.75],
              89: [0, 0.68333, 0.025, 0, 0.75],
              90: [0, 0.68333, 0, 0, 0.61111],
              91: [0.25, 0.75, 0, 0, 0.27778],
              92: [0.25, 0.75, 0, 0, 0.5],
              93: [0.25, 0.75, 0, 0, 0.27778],
              94: [0, 0.69444, 0, 0, 0.5],
              95: [0.31, 0.12056, 0.02778, 0, 0.5],
              97: [0, 0.43056, 0, 0, 0.5],
              98: [0, 0.69444, 0, 0, 0.55556],
              99: [0, 0.43056, 0, 0, 0.44445],
              100: [0, 0.69444, 0, 0, 0.55556],
              101: [0, 0.43056, 0, 0, 0.44445],
              102: [0, 0.69444, 0.07778, 0, 0.30556],
              103: [0.19444, 0.43056, 0.01389, 0, 0.5],
              104: [0, 0.69444, 0, 0, 0.55556],
              105: [0, 0.66786, 0, 0, 0.27778],
              106: [0.19444, 0.66786, 0, 0, 0.30556],
              107: [0, 0.69444, 0, 0, 0.52778],
              108: [0, 0.69444, 0, 0, 0.27778],
              109: [0, 0.43056, 0, 0, 0.83334],
              110: [0, 0.43056, 0, 0, 0.55556],
              111: [0, 0.43056, 0, 0, 0.5],
              112: [0.19444, 0.43056, 0, 0, 0.55556],
              113: [0.19444, 0.43056, 0, 0, 0.52778],
              114: [0, 0.43056, 0, 0, 0.39167],
              115: [0, 0.43056, 0, 0, 0.39445],
              116: [0, 0.61508, 0, 0, 0.38889],
              117: [0, 0.43056, 0, 0, 0.55556],
              118: [0, 0.43056, 0.01389, 0, 0.52778],
              119: [0, 0.43056, 0.01389, 0, 0.72222],
              120: [0, 0.43056, 0, 0, 0.52778],
              121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
              122: [0, 0.43056, 0, 0, 0.44445],
              123: [0.25, 0.75, 0, 0, 0.5],
              124: [0.25, 0.75, 0, 0, 0.27778],
              125: [0.25, 0.75, 0, 0, 0.5],
              126: [0.35, 0.31786, 0, 0, 0.5],
              160: [0, 0, 0, 0, 0.25],
              163: [0, 0.69444, 0, 0, 0.76909],
              167: [0.19444, 0.69444, 0, 0, 0.44445],
              168: [0, 0.66786, 0, 0, 0.5],
              172: [0, 0.43056, 0, 0, 0.66667],
              176: [0, 0.69444, 0, 0, 0.75],
              177: [0.08333, 0.58333, 0, 0, 0.77778],
              182: [0.19444, 0.69444, 0, 0, 0.61111],
              184: [0.17014, 0, 0, 0, 0.44445],
              198: [0, 0.68333, 0, 0, 0.90278],
              215: [0.08333, 0.58333, 0, 0, 0.77778],
              216: [0.04861, 0.73194, 0, 0, 0.77778],
              223: [0, 0.69444, 0, 0, 0.5],
              230: [0, 0.43056, 0, 0, 0.72222],
              247: [0.08333, 0.58333, 0, 0, 0.77778],
              248: [0.09722, 0.52778, 0, 0, 0.5],
              305: [0, 0.43056, 0, 0, 0.27778],
              338: [0, 0.68333, 0, 0, 1.01389],
              339: [0, 0.43056, 0, 0, 0.77778],
              567: [0.19444, 0.43056, 0, 0, 0.30556],
              710: [0, 0.69444, 0, 0, 0.5],
              711: [0, 0.62847, 0, 0, 0.5],
              713: [0, 0.56778, 0, 0, 0.5],
              714: [0, 0.69444, 0, 0, 0.5],
              715: [0, 0.69444, 0, 0, 0.5],
              728: [0, 0.69444, 0, 0, 0.5],
              729: [0, 0.66786, 0, 0, 0.27778],
              730: [0, 0.69444, 0, 0, 0.75],
              732: [0, 0.66786, 0, 0, 0.5],
              733: [0, 0.69444, 0, 0, 0.5],
              915: [0, 0.68333, 0, 0, 0.625],
              916: [0, 0.68333, 0, 0, 0.83334],
              920: [0, 0.68333, 0, 0, 0.77778],
              923: [0, 0.68333, 0, 0, 0.69445],
              926: [0, 0.68333, 0, 0, 0.66667],
              928: [0, 0.68333, 0, 0, 0.75],
              931: [0, 0.68333, 0, 0, 0.72222],
              933: [0, 0.68333, 0, 0, 0.77778],
              934: [0, 0.68333, 0, 0, 0.72222],
              936: [0, 0.68333, 0, 0, 0.77778],
              937: [0, 0.68333, 0, 0, 0.72222],
              8211: [0, 0.43056, 0.02778, 0, 0.5],
              8212: [0, 0.43056, 0.02778, 0, 1],
              8216: [0, 0.69444, 0, 0, 0.27778],
              8217: [0, 0.69444, 0, 0, 0.27778],
              8220: [0, 0.69444, 0, 0, 0.5],
              8221: [0, 0.69444, 0, 0, 0.5],
              8224: [0.19444, 0.69444, 0, 0, 0.44445],
              8225: [0.19444, 0.69444, 0, 0, 0.44445],
              8230: [0, 0.123, 0, 0, 1.172],
              8242: [0, 0.55556, 0, 0, 0.275],
              8407: [0, 0.71444, 0.15382, 0, 0.5],
              8463: [0, 0.68889, 0, 0, 0.54028],
              8465: [0, 0.69444, 0, 0, 0.72222],
              8467: [0, 0.69444, 0, 0.11111, 0.41667],
              8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
              8476: [0, 0.69444, 0, 0, 0.72222],
              8501: [0, 0.69444, 0, 0, 0.61111],
              8592: [-0.13313, 0.36687, 0, 0, 1],
              8593: [0.19444, 0.69444, 0, 0, 0.5],
              8594: [-0.13313, 0.36687, 0, 0, 1],
              8595: [0.19444, 0.69444, 0, 0, 0.5],
              8596: [-0.13313, 0.36687, 0, 0, 1],
              8597: [0.25, 0.75, 0, 0, 0.5],
              8598: [0.19444, 0.69444, 0, 0, 1],
              8599: [0.19444, 0.69444, 0, 0, 1],
              8600: [0.19444, 0.69444, 0, 0, 1],
              8601: [0.19444, 0.69444, 0, 0, 1],
              8614: [0.011, 0.511, 0, 0, 1],
              8617: [0.011, 0.511, 0, 0, 1.126],
              8618: [0.011, 0.511, 0, 0, 1.126],
              8636: [-0.13313, 0.36687, 0, 0, 1],
              8637: [-0.13313, 0.36687, 0, 0, 1],
              8640: [-0.13313, 0.36687, 0, 0, 1],
              8641: [-0.13313, 0.36687, 0, 0, 1],
              8652: [0.011, 0.671, 0, 0, 1],
              8656: [-0.13313, 0.36687, 0, 0, 1],
              8657: [0.19444, 0.69444, 0, 0, 0.61111],
              8658: [-0.13313, 0.36687, 0, 0, 1],
              8659: [0.19444, 0.69444, 0, 0, 0.61111],
              8660: [-0.13313, 0.36687, 0, 0, 1],
              8661: [0.25, 0.75, 0, 0, 0.61111],
              8704: [0, 0.69444, 0, 0, 0.55556],
              8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
              8707: [0, 0.69444, 0, 0, 0.55556],
              8709: [0.05556, 0.75, 0, 0, 0.5],
              8711: [0, 0.68333, 0, 0, 0.83334],
              8712: [0.0391, 0.5391, 0, 0, 0.66667],
              8715: [0.0391, 0.5391, 0, 0, 0.66667],
              8722: [0.08333, 0.58333, 0, 0, 0.77778],
              8723: [0.08333, 0.58333, 0, 0, 0.77778],
              8725: [0.25, 0.75, 0, 0, 0.5],
              8726: [0.25, 0.75, 0, 0, 0.5],
              8727: [-0.03472, 0.46528, 0, 0, 0.5],
              8728: [-0.05555, 0.44445, 0, 0, 0.5],
              8729: [-0.05555, 0.44445, 0, 0, 0.5],
              8730: [0.2, 0.8, 0, 0, 0.83334],
              8733: [0, 0.43056, 0, 0, 0.77778],
              8734: [0, 0.43056, 0, 0, 1],
              8736: [0, 0.69224, 0, 0, 0.72222],
              8739: [0.25, 0.75, 0, 0, 0.27778],
              8741: [0.25, 0.75, 0, 0, 0.5],
              8743: [0, 0.55556, 0, 0, 0.66667],
              8744: [0, 0.55556, 0, 0, 0.66667],
              8745: [0, 0.55556, 0, 0, 0.66667],
              8746: [0, 0.55556, 0, 0, 0.66667],
              8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
              8764: [-0.13313, 0.36687, 0, 0, 0.77778],
              8768: [0.19444, 0.69444, 0, 0, 0.27778],
              8771: [-0.03625, 0.46375, 0, 0, 0.77778],
              8773: [-0.022, 0.589, 0, 0, 0.778],
              8776: [-0.01688, 0.48312, 0, 0, 0.77778],
              8781: [-0.03625, 0.46375, 0, 0, 0.77778],
              8784: [-0.133, 0.673, 0, 0, 0.778],
              8801: [-0.03625, 0.46375, 0, 0, 0.77778],
              8804: [0.13597, 0.63597, 0, 0, 0.77778],
              8805: [0.13597, 0.63597, 0, 0, 0.77778],
              8810: [0.0391, 0.5391, 0, 0, 1],
              8811: [0.0391, 0.5391, 0, 0, 1],
              8826: [0.0391, 0.5391, 0, 0, 0.77778],
              8827: [0.0391, 0.5391, 0, 0, 0.77778],
              8834: [0.0391, 0.5391, 0, 0, 0.77778],
              8835: [0.0391, 0.5391, 0, 0, 0.77778],
              8838: [0.13597, 0.63597, 0, 0, 0.77778],
              8839: [0.13597, 0.63597, 0, 0, 0.77778],
              8846: [0, 0.55556, 0, 0, 0.66667],
              8849: [0.13597, 0.63597, 0, 0, 0.77778],
              8850: [0.13597, 0.63597, 0, 0, 0.77778],
              8851: [0, 0.55556, 0, 0, 0.66667],
              8852: [0, 0.55556, 0, 0, 0.66667],
              8853: [0.08333, 0.58333, 0, 0, 0.77778],
              8854: [0.08333, 0.58333, 0, 0, 0.77778],
              8855: [0.08333, 0.58333, 0, 0, 0.77778],
              8856: [0.08333, 0.58333, 0, 0, 0.77778],
              8857: [0.08333, 0.58333, 0, 0, 0.77778],
              8866: [0, 0.69444, 0, 0, 0.61111],
              8867: [0, 0.69444, 0, 0, 0.61111],
              8868: [0, 0.69444, 0, 0, 0.77778],
              8869: [0, 0.69444, 0, 0, 0.77778],
              8872: [0.249, 0.75, 0, 0, 0.867],
              8900: [-0.05555, 0.44445, 0, 0, 0.5],
              8901: [-0.05555, 0.44445, 0, 0, 0.27778],
              8902: [-0.03472, 0.46528, 0, 0, 0.5],
              8904: [5e-3, 0.505, 0, 0, 0.9],
              8942: [0.03, 0.903, 0, 0, 0.278],
              8943: [-0.19, 0.313, 0, 0, 1.172],
              8945: [-0.1, 0.823, 0, 0, 1.282],
              8968: [0.25, 0.75, 0, 0, 0.44445],
              8969: [0.25, 0.75, 0, 0, 0.44445],
              8970: [0.25, 0.75, 0, 0, 0.44445],
              8971: [0.25, 0.75, 0, 0, 0.44445],
              8994: [-0.14236, 0.35764, 0, 0, 1],
              8995: [-0.14236, 0.35764, 0, 0, 1],
              9136: [0.244, 0.744, 0, 0, 0.412],
              9137: [0.244, 0.745, 0, 0, 0.412],
              9651: [0.19444, 0.69444, 0, 0, 0.88889],
              9657: [-0.03472, 0.46528, 0, 0, 0.5],
              9661: [0.19444, 0.69444, 0, 0, 0.88889],
              9667: [-0.03472, 0.46528, 0, 0, 0.5],
              9711: [0.19444, 0.69444, 0, 0, 1],
              9824: [0.12963, 0.69444, 0, 0, 0.77778],
              9825: [0.12963, 0.69444, 0, 0, 0.77778],
              9826: [0.12963, 0.69444, 0, 0, 0.77778],
              9827: [0.12963, 0.69444, 0, 0, 0.77778],
              9837: [0, 0.75, 0, 0, 0.38889],
              9838: [0.19444, 0.69444, 0, 0, 0.38889],
              9839: [0.19444, 0.69444, 0, 0, 0.38889],
              10216: [0.25, 0.75, 0, 0, 0.38889],
              10217: [0.25, 0.75, 0, 0, 0.38889],
              10222: [0.244, 0.744, 0, 0, 0.412],
              10223: [0.244, 0.745, 0, 0, 0.412],
              10229: [0.011, 0.511, 0, 0, 1.609],
              10230: [0.011, 0.511, 0, 0, 1.638],
              10231: [0.011, 0.511, 0, 0, 1.859],
              10232: [0.024, 0.525, 0, 0, 1.609],
              10233: [0.024, 0.525, 0, 0, 1.638],
              10234: [0.024, 0.525, 0, 0, 1.858],
              10236: [0.011, 0.511, 0, 0, 1.638],
              10815: [0, 0.68333, 0, 0, 0.75],
              10927: [0.13597, 0.63597, 0, 0, 0.77778],
              10928: [0.13597, 0.63597, 0, 0, 0.77778],
              57376: [0.19444, 0.69444, 0, 0, 0]
            },
            "Math-BoldItalic": {
              32: [0, 0, 0, 0, 0.25],
              48: [0, 0.44444, 0, 0, 0.575],
              49: [0, 0.44444, 0, 0, 0.575],
              50: [0, 0.44444, 0, 0, 0.575],
              51: [0.19444, 0.44444, 0, 0, 0.575],
              52: [0.19444, 0.44444, 0, 0, 0.575],
              53: [0.19444, 0.44444, 0, 0, 0.575],
              54: [0, 0.64444, 0, 0, 0.575],
              55: [0.19444, 0.44444, 0, 0, 0.575],
              56: [0, 0.64444, 0, 0, 0.575],
              57: [0.19444, 0.44444, 0, 0, 0.575],
              65: [0, 0.68611, 0, 0, 0.86944],
              66: [0, 0.68611, 0.04835, 0, 0.8664],
              67: [0, 0.68611, 0.06979, 0, 0.81694],
              68: [0, 0.68611, 0.03194, 0, 0.93812],
              69: [0, 0.68611, 0.05451, 0, 0.81007],
              70: [0, 0.68611, 0.15972, 0, 0.68889],
              71: [0, 0.68611, 0, 0, 0.88673],
              72: [0, 0.68611, 0.08229, 0, 0.98229],
              73: [0, 0.68611, 0.07778, 0, 0.51111],
              74: [0, 0.68611, 0.10069, 0, 0.63125],
              75: [0, 0.68611, 0.06979, 0, 0.97118],
              76: [0, 0.68611, 0, 0, 0.75555],
              77: [0, 0.68611, 0.11424, 0, 1.14201],
              78: [0, 0.68611, 0.11424, 0, 0.95034],
              79: [0, 0.68611, 0.03194, 0, 0.83666],
              80: [0, 0.68611, 0.15972, 0, 0.72309],
              81: [0.19444, 0.68611, 0, 0, 0.86861],
              82: [0, 0.68611, 421e-5, 0, 0.87235],
              83: [0, 0.68611, 0.05382, 0, 0.69271],
              84: [0, 0.68611, 0.15972, 0, 0.63663],
              85: [0, 0.68611, 0.11424, 0, 0.80027],
              86: [0, 0.68611, 0.25555, 0, 0.67778],
              87: [0, 0.68611, 0.15972, 0, 1.09305],
              88: [0, 0.68611, 0.07778, 0, 0.94722],
              89: [0, 0.68611, 0.25555, 0, 0.67458],
              90: [0, 0.68611, 0.06979, 0, 0.77257],
              97: [0, 0.44444, 0, 0, 0.63287],
              98: [0, 0.69444, 0, 0, 0.52083],
              99: [0, 0.44444, 0, 0, 0.51342],
              100: [0, 0.69444, 0, 0, 0.60972],
              101: [0, 0.44444, 0, 0, 0.55361],
              102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
              103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
              104: [0, 0.69444, 0, 0, 0.66759],
              105: [0, 0.69326, 0, 0, 0.4048],
              106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
              107: [0, 0.69444, 0.01852, 0, 0.6037],
              108: [0, 0.69444, 88e-4, 0, 0.34815],
              109: [0, 0.44444, 0, 0, 1.0324],
              110: [0, 0.44444, 0, 0, 0.71296],
              111: [0, 0.44444, 0, 0, 0.58472],
              112: [0.19444, 0.44444, 0, 0, 0.60092],
              113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
              114: [0, 0.44444, 0.03194, 0, 0.5287],
              115: [0, 0.44444, 0, 0, 0.53125],
              116: [0, 0.63492, 0, 0, 0.41528],
              117: [0, 0.44444, 0, 0, 0.68102],
              118: [0, 0.44444, 0.03704, 0, 0.56666],
              119: [0, 0.44444, 0.02778, 0, 0.83148],
              120: [0, 0.44444, 0, 0, 0.65903],
              121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
              122: [0, 0.44444, 0.04213, 0, 0.55509],
              160: [0, 0, 0, 0, 0.25],
              915: [0, 0.68611, 0.15972, 0, 0.65694],
              916: [0, 0.68611, 0, 0, 0.95833],
              920: [0, 0.68611, 0.03194, 0, 0.86722],
              923: [0, 0.68611, 0, 0, 0.80555],
              926: [0, 0.68611, 0.07458, 0, 0.84125],
              928: [0, 0.68611, 0.08229, 0, 0.98229],
              931: [0, 0.68611, 0.05451, 0, 0.88507],
              933: [0, 0.68611, 0.15972, 0, 0.67083],
              934: [0, 0.68611, 0, 0, 0.76666],
              936: [0, 0.68611, 0.11653, 0, 0.71402],
              937: [0, 0.68611, 0.04835, 0, 0.8789],
              945: [0, 0.44444, 0, 0, 0.76064],
              946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
              947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
              948: [0, 0.69444, 0.03819, 0, 0.52222],
              949: [0, 0.44444, 0, 0, 0.52882],
              950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
              951: [0.19444, 0.44444, 0.03704, 0, 0.6],
              952: [0, 0.69444, 0.03194, 0, 0.5618],
              953: [0, 0.44444, 0, 0, 0.41204],
              954: [0, 0.44444, 0, 0, 0.66759],
              955: [0, 0.69444, 0, 0, 0.67083],
              956: [0.19444, 0.44444, 0, 0, 0.70787],
              957: [0, 0.44444, 0.06898, 0, 0.57685],
              958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
              959: [0, 0.44444, 0, 0, 0.58472],
              960: [0, 0.44444, 0.03704, 0, 0.68241],
              961: [0.19444, 0.44444, 0, 0, 0.6118],
              962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
              963: [0, 0.44444, 0.03704, 0, 0.68588],
              964: [0, 0.44444, 0.13472, 0, 0.52083],
              965: [0, 0.44444, 0.03704, 0, 0.63055],
              966: [0.19444, 0.44444, 0, 0, 0.74722],
              967: [0.19444, 0.44444, 0, 0, 0.71805],
              968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
              969: [0, 0.44444, 0.03704, 0, 0.71782],
              977: [0, 0.69444, 0, 0, 0.69155],
              981: [0.19444, 0.69444, 0, 0, 0.7125],
              982: [0, 0.44444, 0.03194, 0, 0.975],
              1009: [0.19444, 0.44444, 0, 0, 0.6118],
              1013: [0, 0.44444, 0, 0, 0.48333],
              57649: [0, 0.44444, 0, 0, 0.39352],
              57911: [0.19444, 0.44444, 0, 0, 0.43889]
            },
            "Math-Italic": {
              32: [0, 0, 0, 0, 0.25],
              48: [0, 0.43056, 0, 0, 0.5],
              49: [0, 0.43056, 0, 0, 0.5],
              50: [0, 0.43056, 0, 0, 0.5],
              51: [0.19444, 0.43056, 0, 0, 0.5],
              52: [0.19444, 0.43056, 0, 0, 0.5],
              53: [0.19444, 0.43056, 0, 0, 0.5],
              54: [0, 0.64444, 0, 0, 0.5],
              55: [0.19444, 0.43056, 0, 0, 0.5],
              56: [0, 0.64444, 0, 0, 0.5],
              57: [0.19444, 0.43056, 0, 0, 0.5],
              65: [0, 0.68333, 0, 0.13889, 0.75],
              66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
              67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
              68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
              69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
              70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
              71: [0, 0.68333, 0, 0.08334, 0.78625],
              72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
              73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
              74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
              75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
              76: [0, 0.68333, 0, 0.02778, 0.68056],
              77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
              78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
              79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
              80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
              81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
              82: [0, 0.68333, 773e-5, 0.08334, 0.75929],
              83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
              84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
              85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
              86: [0, 0.68333, 0.22222, 0, 0.58333],
              87: [0, 0.68333, 0.13889, 0, 0.94445],
              88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
              89: [0, 0.68333, 0.22222, 0, 0.58056],
              90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
              97: [0, 0.43056, 0, 0, 0.52859],
              98: [0, 0.69444, 0, 0, 0.42917],
              99: [0, 0.43056, 0, 0.05556, 0.43276],
              100: [0, 0.69444, 0, 0.16667, 0.52049],
              101: [0, 0.43056, 0, 0.05556, 0.46563],
              102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
              103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
              104: [0, 0.69444, 0, 0, 0.57616],
              105: [0, 0.65952, 0, 0, 0.34451],
              106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
              107: [0, 0.69444, 0.03148, 0, 0.5206],
              108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
              109: [0, 0.43056, 0, 0, 0.87801],
              110: [0, 0.43056, 0, 0, 0.60023],
              111: [0, 0.43056, 0, 0.05556, 0.48472],
              112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
              113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
              114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
              115: [0, 0.43056, 0, 0.05556, 0.46875],
              116: [0, 0.61508, 0, 0.08334, 0.36111],
              117: [0, 0.43056, 0, 0.02778, 0.57246],
              118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
              119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
              120: [0, 0.43056, 0, 0.02778, 0.57153],
              121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
              122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
              160: [0, 0, 0, 0, 0.25],
              915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
              916: [0, 0.68333, 0, 0.16667, 0.83334],
              920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
              923: [0, 0.68333, 0, 0.16667, 0.69445],
              926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
              928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
              931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
              933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
              934: [0, 0.68333, 0, 0.08334, 0.66667],
              936: [0, 0.68333, 0.11, 0.05556, 0.61222],
              937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
              945: [0, 0.43056, 37e-4, 0.02778, 0.6397],
              946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
              947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
              948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
              949: [0, 0.43056, 0, 0.08334, 0.46632],
              950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
              951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
              952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
              953: [0, 0.43056, 0, 0.05556, 0.35394],
              954: [0, 0.43056, 0, 0, 0.57616],
              955: [0, 0.69444, 0, 0, 0.58334],
              956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
              957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
              958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
              959: [0, 0.43056, 0, 0.05556, 0.48472],
              960: [0, 0.43056, 0.03588, 0, 0.57003],
              961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
              962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
              963: [0, 0.43056, 0.03588, 0, 0.57141],
              964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
              965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
              966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
              967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
              968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
              969: [0, 0.43056, 0.03588, 0, 0.62245],
              977: [0, 0.69444, 0, 0.08334, 0.59144],
              981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
              982: [0, 0.43056, 0.02778, 0, 0.82813],
              1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
              1013: [0, 0.43056, 0, 0.05556, 0.4059],
              57649: [0, 0.43056, 0, 0.02778, 0.32246],
              57911: [0.19444, 0.43056, 0, 0.08334, 0.38403]
            },
            "SansSerif-Bold": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69444, 0, 0, 0.36667],
              34: [0, 0.69444, 0, 0, 0.55834],
              35: [0.19444, 0.69444, 0, 0, 0.91667],
              36: [0.05556, 0.75, 0, 0, 0.55],
              37: [0.05556, 0.75, 0, 0, 1.02912],
              38: [0, 0.69444, 0, 0, 0.83056],
              39: [0, 0.69444, 0, 0, 0.30556],
              40: [0.25, 0.75, 0, 0, 0.42778],
              41: [0.25, 0.75, 0, 0, 0.42778],
              42: [0, 0.75, 0, 0, 0.55],
              43: [0.11667, 0.61667, 0, 0, 0.85556],
              44: [0.10556, 0.13056, 0, 0, 0.30556],
              45: [0, 0.45833, 0, 0, 0.36667],
              46: [0, 0.13056, 0, 0, 0.30556],
              47: [0.25, 0.75, 0, 0, 0.55],
              48: [0, 0.69444, 0, 0, 0.55],
              49: [0, 0.69444, 0, 0, 0.55],
              50: [0, 0.69444, 0, 0, 0.55],
              51: [0, 0.69444, 0, 0, 0.55],
              52: [0, 0.69444, 0, 0, 0.55],
              53: [0, 0.69444, 0, 0, 0.55],
              54: [0, 0.69444, 0, 0, 0.55],
              55: [0, 0.69444, 0, 0, 0.55],
              56: [0, 0.69444, 0, 0, 0.55],
              57: [0, 0.69444, 0, 0, 0.55],
              58: [0, 0.45833, 0, 0, 0.30556],
              59: [0.10556, 0.45833, 0, 0, 0.30556],
              61: [-0.09375, 0.40625, 0, 0, 0.85556],
              63: [0, 0.69444, 0, 0, 0.51945],
              64: [0, 0.69444, 0, 0, 0.73334],
              65: [0, 0.69444, 0, 0, 0.73334],
              66: [0, 0.69444, 0, 0, 0.73334],
              67: [0, 0.69444, 0, 0, 0.70278],
              68: [0, 0.69444, 0, 0, 0.79445],
              69: [0, 0.69444, 0, 0, 0.64167],
              70: [0, 0.69444, 0, 0, 0.61111],
              71: [0, 0.69444, 0, 0, 0.73334],
              72: [0, 0.69444, 0, 0, 0.79445],
              73: [0, 0.69444, 0, 0, 0.33056],
              74: [0, 0.69444, 0, 0, 0.51945],
              75: [0, 0.69444, 0, 0, 0.76389],
              76: [0, 0.69444, 0, 0, 0.58056],
              77: [0, 0.69444, 0, 0, 0.97778],
              78: [0, 0.69444, 0, 0, 0.79445],
              79: [0, 0.69444, 0, 0, 0.79445],
              80: [0, 0.69444, 0, 0, 0.70278],
              81: [0.10556, 0.69444, 0, 0, 0.79445],
              82: [0, 0.69444, 0, 0, 0.70278],
              83: [0, 0.69444, 0, 0, 0.61111],
              84: [0, 0.69444, 0, 0, 0.73334],
              85: [0, 0.69444, 0, 0, 0.76389],
              86: [0, 0.69444, 0.01528, 0, 0.73334],
              87: [0, 0.69444, 0.01528, 0, 1.03889],
              88: [0, 0.69444, 0, 0, 0.73334],
              89: [0, 0.69444, 0.0275, 0, 0.73334],
              90: [0, 0.69444, 0, 0, 0.67223],
              91: [0.25, 0.75, 0, 0, 0.34306],
              93: [0.25, 0.75, 0, 0, 0.34306],
              94: [0, 0.69444, 0, 0, 0.55],
              95: [0.35, 0.10833, 0.03056, 0, 0.55],
              97: [0, 0.45833, 0, 0, 0.525],
              98: [0, 0.69444, 0, 0, 0.56111],
              99: [0, 0.45833, 0, 0, 0.48889],
              100: [0, 0.69444, 0, 0, 0.56111],
              101: [0, 0.45833, 0, 0, 0.51111],
              102: [0, 0.69444, 0.07639, 0, 0.33611],
              103: [0.19444, 0.45833, 0.01528, 0, 0.55],
              104: [0, 0.69444, 0, 0, 0.56111],
              105: [0, 0.69444, 0, 0, 0.25556],
              106: [0.19444, 0.69444, 0, 0, 0.28611],
              107: [0, 0.69444, 0, 0, 0.53056],
              108: [0, 0.69444, 0, 0, 0.25556],
              109: [0, 0.45833, 0, 0, 0.86667],
              110: [0, 0.45833, 0, 0, 0.56111],
              111: [0, 0.45833, 0, 0, 0.55],
              112: [0.19444, 0.45833, 0, 0, 0.56111],
              113: [0.19444, 0.45833, 0, 0, 0.56111],
              114: [0, 0.45833, 0.01528, 0, 0.37222],
              115: [0, 0.45833, 0, 0, 0.42167],
              116: [0, 0.58929, 0, 0, 0.40417],
              117: [0, 0.45833, 0, 0, 0.56111],
              118: [0, 0.45833, 0.01528, 0, 0.5],
              119: [0, 0.45833, 0.01528, 0, 0.74445],
              120: [0, 0.45833, 0, 0, 0.5],
              121: [0.19444, 0.45833, 0.01528, 0, 0.5],
              122: [0, 0.45833, 0, 0, 0.47639],
              126: [0.35, 0.34444, 0, 0, 0.55],
              160: [0, 0, 0, 0, 0.25],
              168: [0, 0.69444, 0, 0, 0.55],
              176: [0, 0.69444, 0, 0, 0.73334],
              180: [0, 0.69444, 0, 0, 0.55],
              184: [0.17014, 0, 0, 0, 0.48889],
              305: [0, 0.45833, 0, 0, 0.25556],
              567: [0.19444, 0.45833, 0, 0, 0.28611],
              710: [0, 0.69444, 0, 0, 0.55],
              711: [0, 0.63542, 0, 0, 0.55],
              713: [0, 0.63778, 0, 0, 0.55],
              728: [0, 0.69444, 0, 0, 0.55],
              729: [0, 0.69444, 0, 0, 0.30556],
              730: [0, 0.69444, 0, 0, 0.73334],
              732: [0, 0.69444, 0, 0, 0.55],
              733: [0, 0.69444, 0, 0, 0.55],
              915: [0, 0.69444, 0, 0, 0.58056],
              916: [0, 0.69444, 0, 0, 0.91667],
              920: [0, 0.69444, 0, 0, 0.85556],
              923: [0, 0.69444, 0, 0, 0.67223],
              926: [0, 0.69444, 0, 0, 0.73334],
              928: [0, 0.69444, 0, 0, 0.79445],
              931: [0, 0.69444, 0, 0, 0.79445],
              933: [0, 0.69444, 0, 0, 0.85556],
              934: [0, 0.69444, 0, 0, 0.79445],
              936: [0, 0.69444, 0, 0, 0.85556],
              937: [0, 0.69444, 0, 0, 0.79445],
              8211: [0, 0.45833, 0.03056, 0, 0.55],
              8212: [0, 0.45833, 0.03056, 0, 1.10001],
              8216: [0, 0.69444, 0, 0, 0.30556],
              8217: [0, 0.69444, 0, 0, 0.30556],
              8220: [0, 0.69444, 0, 0, 0.55834],
              8221: [0, 0.69444, 0, 0, 0.55834]
            },
            "SansSerif-Italic": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69444, 0.05733, 0, 0.31945],
              34: [0, 0.69444, 316e-5, 0, 0.5],
              35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
              36: [0.05556, 0.75, 0.11156, 0, 0.5],
              37: [0.05556, 0.75, 0.03126, 0, 0.83334],
              38: [0, 0.69444, 0.03058, 0, 0.75834],
              39: [0, 0.69444, 0.07816, 0, 0.27778],
              40: [0.25, 0.75, 0.13164, 0, 0.38889],
              41: [0.25, 0.75, 0.02536, 0, 0.38889],
              42: [0, 0.75, 0.11775, 0, 0.5],
              43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
              44: [0.125, 0.08333, 0, 0, 0.27778],
              45: [0, 0.44444, 0.01946, 0, 0.33333],
              46: [0, 0.08333, 0, 0, 0.27778],
              47: [0.25, 0.75, 0.13164, 0, 0.5],
              48: [0, 0.65556, 0.11156, 0, 0.5],
              49: [0, 0.65556, 0.11156, 0, 0.5],
              50: [0, 0.65556, 0.11156, 0, 0.5],
              51: [0, 0.65556, 0.11156, 0, 0.5],
              52: [0, 0.65556, 0.11156, 0, 0.5],
              53: [0, 0.65556, 0.11156, 0, 0.5],
              54: [0, 0.65556, 0.11156, 0, 0.5],
              55: [0, 0.65556, 0.11156, 0, 0.5],
              56: [0, 0.65556, 0.11156, 0, 0.5],
              57: [0, 0.65556, 0.11156, 0, 0.5],
              58: [0, 0.44444, 0.02502, 0, 0.27778],
              59: [0.125, 0.44444, 0.02502, 0, 0.27778],
              61: [-0.13, 0.37, 0.05087, 0, 0.77778],
              63: [0, 0.69444, 0.11809, 0, 0.47222],
              64: [0, 0.69444, 0.07555, 0, 0.66667],
              65: [0, 0.69444, 0, 0, 0.66667],
              66: [0, 0.69444, 0.08293, 0, 0.66667],
              67: [0, 0.69444, 0.11983, 0, 0.63889],
              68: [0, 0.69444, 0.07555, 0, 0.72223],
              69: [0, 0.69444, 0.11983, 0, 0.59722],
              70: [0, 0.69444, 0.13372, 0, 0.56945],
              71: [0, 0.69444, 0.11983, 0, 0.66667],
              72: [0, 0.69444, 0.08094, 0, 0.70834],
              73: [0, 0.69444, 0.13372, 0, 0.27778],
              74: [0, 0.69444, 0.08094, 0, 0.47222],
              75: [0, 0.69444, 0.11983, 0, 0.69445],
              76: [0, 0.69444, 0, 0, 0.54167],
              77: [0, 0.69444, 0.08094, 0, 0.875],
              78: [0, 0.69444, 0.08094, 0, 0.70834],
              79: [0, 0.69444, 0.07555, 0, 0.73611],
              80: [0, 0.69444, 0.08293, 0, 0.63889],
              81: [0.125, 0.69444, 0.07555, 0, 0.73611],
              82: [0, 0.69444, 0.08293, 0, 0.64584],
              83: [0, 0.69444, 0.09205, 0, 0.55556],
              84: [0, 0.69444, 0.13372, 0, 0.68056],
              85: [0, 0.69444, 0.08094, 0, 0.6875],
              86: [0, 0.69444, 0.1615, 0, 0.66667],
              87: [0, 0.69444, 0.1615, 0, 0.94445],
              88: [0, 0.69444, 0.13372, 0, 0.66667],
              89: [0, 0.69444, 0.17261, 0, 0.66667],
              90: [0, 0.69444, 0.11983, 0, 0.61111],
              91: [0.25, 0.75, 0.15942, 0, 0.28889],
              93: [0.25, 0.75, 0.08719, 0, 0.28889],
              94: [0, 0.69444, 0.0799, 0, 0.5],
              95: [0.35, 0.09444, 0.08616, 0, 0.5],
              97: [0, 0.44444, 981e-5, 0, 0.48056],
              98: [0, 0.69444, 0.03057, 0, 0.51667],
              99: [0, 0.44444, 0.08336, 0, 0.44445],
              100: [0, 0.69444, 0.09483, 0, 0.51667],
              101: [0, 0.44444, 0.06778, 0, 0.44445],
              102: [0, 0.69444, 0.21705, 0, 0.30556],
              103: [0.19444, 0.44444, 0.10836, 0, 0.5],
              104: [0, 0.69444, 0.01778, 0, 0.51667],
              105: [0, 0.67937, 0.09718, 0, 0.23889],
              106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
              107: [0, 0.69444, 0.08336, 0, 0.48889],
              108: [0, 0.69444, 0.09483, 0, 0.23889],
              109: [0, 0.44444, 0.01778, 0, 0.79445],
              110: [0, 0.44444, 0.01778, 0, 0.51667],
              111: [0, 0.44444, 0.06613, 0, 0.5],
              112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
              113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
              114: [0, 0.44444, 0.10836, 0, 0.34167],
              115: [0, 0.44444, 0.0778, 0, 0.38333],
              116: [0, 0.57143, 0.07225, 0, 0.36111],
              117: [0, 0.44444, 0.04169, 0, 0.51667],
              118: [0, 0.44444, 0.10836, 0, 0.46111],
              119: [0, 0.44444, 0.10836, 0, 0.68334],
              120: [0, 0.44444, 0.09169, 0, 0.46111],
              121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
              122: [0, 0.44444, 0.08752, 0, 0.43472],
              126: [0.35, 0.32659, 0.08826, 0, 0.5],
              160: [0, 0, 0, 0, 0.25],
              168: [0, 0.67937, 0.06385, 0, 0.5],
              176: [0, 0.69444, 0, 0, 0.73752],
              184: [0.17014, 0, 0, 0, 0.44445],
              305: [0, 0.44444, 0.04169, 0, 0.23889],
              567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
              710: [0, 0.69444, 0.0799, 0, 0.5],
              711: [0, 0.63194, 0.08432, 0, 0.5],
              713: [0, 0.60889, 0.08776, 0, 0.5],
              714: [0, 0.69444, 0.09205, 0, 0.5],
              715: [0, 0.69444, 0, 0, 0.5],
              728: [0, 0.69444, 0.09483, 0, 0.5],
              729: [0, 0.67937, 0.07774, 0, 0.27778],
              730: [0, 0.69444, 0, 0, 0.73752],
              732: [0, 0.67659, 0.08826, 0, 0.5],
              733: [0, 0.69444, 0.09205, 0, 0.5],
              915: [0, 0.69444, 0.13372, 0, 0.54167],
              916: [0, 0.69444, 0, 0, 0.83334],
              920: [0, 0.69444, 0.07555, 0, 0.77778],
              923: [0, 0.69444, 0, 0, 0.61111],
              926: [0, 0.69444, 0.12816, 0, 0.66667],
              928: [0, 0.69444, 0.08094, 0, 0.70834],
              931: [0, 0.69444, 0.11983, 0, 0.72222],
              933: [0, 0.69444, 0.09031, 0, 0.77778],
              934: [0, 0.69444, 0.04603, 0, 0.72222],
              936: [0, 0.69444, 0.09031, 0, 0.77778],
              937: [0, 0.69444, 0.08293, 0, 0.72222],
              8211: [0, 0.44444, 0.08616, 0, 0.5],
              8212: [0, 0.44444, 0.08616, 0, 1],
              8216: [0, 0.69444, 0.07816, 0, 0.27778],
              8217: [0, 0.69444, 0.07816, 0, 0.27778],
              8220: [0, 0.69444, 0.14205, 0, 0.5],
              8221: [0, 0.69444, 316e-5, 0, 0.5]
            },
            "SansSerif-Regular": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69444, 0, 0, 0.31945],
              34: [0, 0.69444, 0, 0, 0.5],
              35: [0.19444, 0.69444, 0, 0, 0.83334],
              36: [0.05556, 0.75, 0, 0, 0.5],
              37: [0.05556, 0.75, 0, 0, 0.83334],
              38: [0, 0.69444, 0, 0, 0.75834],
              39: [0, 0.69444, 0, 0, 0.27778],
              40: [0.25, 0.75, 0, 0, 0.38889],
              41: [0.25, 0.75, 0, 0, 0.38889],
              42: [0, 0.75, 0, 0, 0.5],
              43: [0.08333, 0.58333, 0, 0, 0.77778],
              44: [0.125, 0.08333, 0, 0, 0.27778],
              45: [0, 0.44444, 0, 0, 0.33333],
              46: [0, 0.08333, 0, 0, 0.27778],
              47: [0.25, 0.75, 0, 0, 0.5],
              48: [0, 0.65556, 0, 0, 0.5],
              49: [0, 0.65556, 0, 0, 0.5],
              50: [0, 0.65556, 0, 0, 0.5],
              51: [0, 0.65556, 0, 0, 0.5],
              52: [0, 0.65556, 0, 0, 0.5],
              53: [0, 0.65556, 0, 0, 0.5],
              54: [0, 0.65556, 0, 0, 0.5],
              55: [0, 0.65556, 0, 0, 0.5],
              56: [0, 0.65556, 0, 0, 0.5],
              57: [0, 0.65556, 0, 0, 0.5],
              58: [0, 0.44444, 0, 0, 0.27778],
              59: [0.125, 0.44444, 0, 0, 0.27778],
              61: [-0.13, 0.37, 0, 0, 0.77778],
              63: [0, 0.69444, 0, 0, 0.47222],
              64: [0, 0.69444, 0, 0, 0.66667],
              65: [0, 0.69444, 0, 0, 0.66667],
              66: [0, 0.69444, 0, 0, 0.66667],
              67: [0, 0.69444, 0, 0, 0.63889],
              68: [0, 0.69444, 0, 0, 0.72223],
              69: [0, 0.69444, 0, 0, 0.59722],
              70: [0, 0.69444, 0, 0, 0.56945],
              71: [0, 0.69444, 0, 0, 0.66667],
              72: [0, 0.69444, 0, 0, 0.70834],
              73: [0, 0.69444, 0, 0, 0.27778],
              74: [0, 0.69444, 0, 0, 0.47222],
              75: [0, 0.69444, 0, 0, 0.69445],
              76: [0, 0.69444, 0, 0, 0.54167],
              77: [0, 0.69444, 0, 0, 0.875],
              78: [0, 0.69444, 0, 0, 0.70834],
              79: [0, 0.69444, 0, 0, 0.73611],
              80: [0, 0.69444, 0, 0, 0.63889],
              81: [0.125, 0.69444, 0, 0, 0.73611],
              82: [0, 0.69444, 0, 0, 0.64584],
              83: [0, 0.69444, 0, 0, 0.55556],
              84: [0, 0.69444, 0, 0, 0.68056],
              85: [0, 0.69444, 0, 0, 0.6875],
              86: [0, 0.69444, 0.01389, 0, 0.66667],
              87: [0, 0.69444, 0.01389, 0, 0.94445],
              88: [0, 0.69444, 0, 0, 0.66667],
              89: [0, 0.69444, 0.025, 0, 0.66667],
              90: [0, 0.69444, 0, 0, 0.61111],
              91: [0.25, 0.75, 0, 0, 0.28889],
              93: [0.25, 0.75, 0, 0, 0.28889],
              94: [0, 0.69444, 0, 0, 0.5],
              95: [0.35, 0.09444, 0.02778, 0, 0.5],
              97: [0, 0.44444, 0, 0, 0.48056],
              98: [0, 0.69444, 0, 0, 0.51667],
              99: [0, 0.44444, 0, 0, 0.44445],
              100: [0, 0.69444, 0, 0, 0.51667],
              101: [0, 0.44444, 0, 0, 0.44445],
              102: [0, 0.69444, 0.06944, 0, 0.30556],
              103: [0.19444, 0.44444, 0.01389, 0, 0.5],
              104: [0, 0.69444, 0, 0, 0.51667],
              105: [0, 0.67937, 0, 0, 0.23889],
              106: [0.19444, 0.67937, 0, 0, 0.26667],
              107: [0, 0.69444, 0, 0, 0.48889],
              108: [0, 0.69444, 0, 0, 0.23889],
              109: [0, 0.44444, 0, 0, 0.79445],
              110: [0, 0.44444, 0, 0, 0.51667],
              111: [0, 0.44444, 0, 0, 0.5],
              112: [0.19444, 0.44444, 0, 0, 0.51667],
              113: [0.19444, 0.44444, 0, 0, 0.51667],
              114: [0, 0.44444, 0.01389, 0, 0.34167],
              115: [0, 0.44444, 0, 0, 0.38333],
              116: [0, 0.57143, 0, 0, 0.36111],
              117: [0, 0.44444, 0, 0, 0.51667],
              118: [0, 0.44444, 0.01389, 0, 0.46111],
              119: [0, 0.44444, 0.01389, 0, 0.68334],
              120: [0, 0.44444, 0, 0, 0.46111],
              121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
              122: [0, 0.44444, 0, 0, 0.43472],
              126: [0.35, 0.32659, 0, 0, 0.5],
              160: [0, 0, 0, 0, 0.25],
              168: [0, 0.67937, 0, 0, 0.5],
              176: [0, 0.69444, 0, 0, 0.66667],
              184: [0.17014, 0, 0, 0, 0.44445],
              305: [0, 0.44444, 0, 0, 0.23889],
              567: [0.19444, 0.44444, 0, 0, 0.26667],
              710: [0, 0.69444, 0, 0, 0.5],
              711: [0, 0.63194, 0, 0, 0.5],
              713: [0, 0.60889, 0, 0, 0.5],
              714: [0, 0.69444, 0, 0, 0.5],
              715: [0, 0.69444, 0, 0, 0.5],
              728: [0, 0.69444, 0, 0, 0.5],
              729: [0, 0.67937, 0, 0, 0.27778],
              730: [0, 0.69444, 0, 0, 0.66667],
              732: [0, 0.67659, 0, 0, 0.5],
              733: [0, 0.69444, 0, 0, 0.5],
              915: [0, 0.69444, 0, 0, 0.54167],
              916: [0, 0.69444, 0, 0, 0.83334],
              920: [0, 0.69444, 0, 0, 0.77778],
              923: [0, 0.69444, 0, 0, 0.61111],
              926: [0, 0.69444, 0, 0, 0.66667],
              928: [0, 0.69444, 0, 0, 0.70834],
              931: [0, 0.69444, 0, 0, 0.72222],
              933: [0, 0.69444, 0, 0, 0.77778],
              934: [0, 0.69444, 0, 0, 0.72222],
              936: [0, 0.69444, 0, 0, 0.77778],
              937: [0, 0.69444, 0, 0, 0.72222],
              8211: [0, 0.44444, 0.02778, 0, 0.5],
              8212: [0, 0.44444, 0.02778, 0, 1],
              8216: [0, 0.69444, 0, 0, 0.27778],
              8217: [0, 0.69444, 0, 0, 0.27778],
              8220: [0, 0.69444, 0, 0, 0.5],
              8221: [0, 0.69444, 0, 0, 0.5]
            },
            "Script-Regular": {
              32: [0, 0, 0, 0, 0.25],
              65: [0, 0.7, 0.22925, 0, 0.80253],
              66: [0, 0.7, 0.04087, 0, 0.90757],
              67: [0, 0.7, 0.1689, 0, 0.66619],
              68: [0, 0.7, 0.09371, 0, 0.77443],
              69: [0, 0.7, 0.18583, 0, 0.56162],
              70: [0, 0.7, 0.13634, 0, 0.89544],
              71: [0, 0.7, 0.17322, 0, 0.60961],
              72: [0, 0.7, 0.29694, 0, 0.96919],
              73: [0, 0.7, 0.19189, 0, 0.80907],
              74: [0.27778, 0.7, 0.19189, 0, 1.05159],
              75: [0, 0.7, 0.31259, 0, 0.91364],
              76: [0, 0.7, 0.19189, 0, 0.87373],
              77: [0, 0.7, 0.15981, 0, 1.08031],
              78: [0, 0.7, 0.3525, 0, 0.9015],
              79: [0, 0.7, 0.08078, 0, 0.73787],
              80: [0, 0.7, 0.08078, 0, 1.01262],
              81: [0, 0.7, 0.03305, 0, 0.88282],
              82: [0, 0.7, 0.06259, 0, 0.85],
              83: [0, 0.7, 0.19189, 0, 0.86767],
              84: [0, 0.7, 0.29087, 0, 0.74697],
              85: [0, 0.7, 0.25815, 0, 0.79996],
              86: [0, 0.7, 0.27523, 0, 0.62204],
              87: [0, 0.7, 0.27523, 0, 0.80532],
              88: [0, 0.7, 0.26006, 0, 0.94445],
              89: [0, 0.7, 0.2939, 0, 0.70961],
              90: [0, 0.7, 0.24037, 0, 0.8212],
              160: [0, 0, 0, 0, 0.25]
            },
            "Size1-Regular": {
              32: [0, 0, 0, 0, 0.25],
              40: [0.35001, 0.85, 0, 0, 0.45834],
              41: [0.35001, 0.85, 0, 0, 0.45834],
              47: [0.35001, 0.85, 0, 0, 0.57778],
              91: [0.35001, 0.85, 0, 0, 0.41667],
              92: [0.35001, 0.85, 0, 0, 0.57778],
              93: [0.35001, 0.85, 0, 0, 0.41667],
              123: [0.35001, 0.85, 0, 0, 0.58334],
              125: [0.35001, 0.85, 0, 0, 0.58334],
              160: [0, 0, 0, 0, 0.25],
              710: [0, 0.72222, 0, 0, 0.55556],
              732: [0, 0.72222, 0, 0, 0.55556],
              770: [0, 0.72222, 0, 0, 0.55556],
              771: [0, 0.72222, 0, 0, 0.55556],
              8214: [-99e-5, 0.601, 0, 0, 0.77778],
              8593: [1e-5, 0.6, 0, 0, 0.66667],
              8595: [1e-5, 0.6, 0, 0, 0.66667],
              8657: [1e-5, 0.6, 0, 0, 0.77778],
              8659: [1e-5, 0.6, 0, 0, 0.77778],
              8719: [0.25001, 0.75, 0, 0, 0.94445],
              8720: [0.25001, 0.75, 0, 0, 0.94445],
              8721: [0.25001, 0.75, 0, 0, 1.05556],
              8730: [0.35001, 0.85, 0, 0, 1],
              8739: [-599e-5, 0.606, 0, 0, 0.33333],
              8741: [-599e-5, 0.606, 0, 0, 0.55556],
              8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
              8748: [0.306, 0.805, 0.19445, 0, 0.47222],
              8749: [0.306, 0.805, 0.19445, 0, 0.47222],
              8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
              8896: [0.25001, 0.75, 0, 0, 0.83334],
              8897: [0.25001, 0.75, 0, 0, 0.83334],
              8898: [0.25001, 0.75, 0, 0, 0.83334],
              8899: [0.25001, 0.75, 0, 0, 0.83334],
              8968: [0.35001, 0.85, 0, 0, 0.47222],
              8969: [0.35001, 0.85, 0, 0, 0.47222],
              8970: [0.35001, 0.85, 0, 0, 0.47222],
              8971: [0.35001, 0.85, 0, 0, 0.47222],
              9168: [-99e-5, 0.601, 0, 0, 0.66667],
              10216: [0.35001, 0.85, 0, 0, 0.47222],
              10217: [0.35001, 0.85, 0, 0, 0.47222],
              10752: [0.25001, 0.75, 0, 0, 1.11111],
              10753: [0.25001, 0.75, 0, 0, 1.11111],
              10754: [0.25001, 0.75, 0, 0, 1.11111],
              10756: [0.25001, 0.75, 0, 0, 0.83334],
              10758: [0.25001, 0.75, 0, 0, 0.83334]
            },
            "Size2-Regular": {
              32: [0, 0, 0, 0, 0.25],
              40: [0.65002, 1.15, 0, 0, 0.59722],
              41: [0.65002, 1.15, 0, 0, 0.59722],
              47: [0.65002, 1.15, 0, 0, 0.81111],
              91: [0.65002, 1.15, 0, 0, 0.47222],
              92: [0.65002, 1.15, 0, 0, 0.81111],
              93: [0.65002, 1.15, 0, 0, 0.47222],
              123: [0.65002, 1.15, 0, 0, 0.66667],
              125: [0.65002, 1.15, 0, 0, 0.66667],
              160: [0, 0, 0, 0, 0.25],
              710: [0, 0.75, 0, 0, 1],
              732: [0, 0.75, 0, 0, 1],
              770: [0, 0.75, 0, 0, 1],
              771: [0, 0.75, 0, 0, 1],
              8719: [0.55001, 1.05, 0, 0, 1.27778],
              8720: [0.55001, 1.05, 0, 0, 1.27778],
              8721: [0.55001, 1.05, 0, 0, 1.44445],
              8730: [0.65002, 1.15, 0, 0, 1],
              8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
              8748: [0.862, 1.36, 0.44445, 0, 0.55556],
              8749: [0.862, 1.36, 0.44445, 0, 0.55556],
              8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
              8896: [0.55001, 1.05, 0, 0, 1.11111],
              8897: [0.55001, 1.05, 0, 0, 1.11111],
              8898: [0.55001, 1.05, 0, 0, 1.11111],
              8899: [0.55001, 1.05, 0, 0, 1.11111],
              8968: [0.65002, 1.15, 0, 0, 0.52778],
              8969: [0.65002, 1.15, 0, 0, 0.52778],
              8970: [0.65002, 1.15, 0, 0, 0.52778],
              8971: [0.65002, 1.15, 0, 0, 0.52778],
              10216: [0.65002, 1.15, 0, 0, 0.61111],
              10217: [0.65002, 1.15, 0, 0, 0.61111],
              10752: [0.55001, 1.05, 0, 0, 1.51112],
              10753: [0.55001, 1.05, 0, 0, 1.51112],
              10754: [0.55001, 1.05, 0, 0, 1.51112],
              10756: [0.55001, 1.05, 0, 0, 1.11111],
              10758: [0.55001, 1.05, 0, 0, 1.11111]
            },
            "Size3-Regular": {
              32: [0, 0, 0, 0, 0.25],
              40: [0.95003, 1.45, 0, 0, 0.73611],
              41: [0.95003, 1.45, 0, 0, 0.73611],
              47: [0.95003, 1.45, 0, 0, 1.04445],
              91: [0.95003, 1.45, 0, 0, 0.52778],
              92: [0.95003, 1.45, 0, 0, 1.04445],
              93: [0.95003, 1.45, 0, 0, 0.52778],
              123: [0.95003, 1.45, 0, 0, 0.75],
              125: [0.95003, 1.45, 0, 0, 0.75],
              160: [0, 0, 0, 0, 0.25],
              710: [0, 0.75, 0, 0, 1.44445],
              732: [0, 0.75, 0, 0, 1.44445],
              770: [0, 0.75, 0, 0, 1.44445],
              771: [0, 0.75, 0, 0, 1.44445],
              8730: [0.95003, 1.45, 0, 0, 1],
              8968: [0.95003, 1.45, 0, 0, 0.58334],
              8969: [0.95003, 1.45, 0, 0, 0.58334],
              8970: [0.95003, 1.45, 0, 0, 0.58334],
              8971: [0.95003, 1.45, 0, 0, 0.58334],
              10216: [0.95003, 1.45, 0, 0, 0.75],
              10217: [0.95003, 1.45, 0, 0, 0.75]
            },
            "Size4-Regular": {
              32: [0, 0, 0, 0, 0.25],
              40: [1.25003, 1.75, 0, 0, 0.79167],
              41: [1.25003, 1.75, 0, 0, 0.79167],
              47: [1.25003, 1.75, 0, 0, 1.27778],
              91: [1.25003, 1.75, 0, 0, 0.58334],
              92: [1.25003, 1.75, 0, 0, 1.27778],
              93: [1.25003, 1.75, 0, 0, 0.58334],
              123: [1.25003, 1.75, 0, 0, 0.80556],
              125: [1.25003, 1.75, 0, 0, 0.80556],
              160: [0, 0, 0, 0, 0.25],
              710: [0, 0.825, 0, 0, 1.8889],
              732: [0, 0.825, 0, 0, 1.8889],
              770: [0, 0.825, 0, 0, 1.8889],
              771: [0, 0.825, 0, 0, 1.8889],
              8730: [1.25003, 1.75, 0, 0, 1],
              8968: [1.25003, 1.75, 0, 0, 0.63889],
              8969: [1.25003, 1.75, 0, 0, 0.63889],
              8970: [1.25003, 1.75, 0, 0, 0.63889],
              8971: [1.25003, 1.75, 0, 0, 0.63889],
              9115: [0.64502, 1.155, 0, 0, 0.875],
              9116: [1e-5, 0.6, 0, 0, 0.875],
              9117: [0.64502, 1.155, 0, 0, 0.875],
              9118: [0.64502, 1.155, 0, 0, 0.875],
              9119: [1e-5, 0.6, 0, 0, 0.875],
              9120: [0.64502, 1.155, 0, 0, 0.875],
              9121: [0.64502, 1.155, 0, 0, 0.66667],
              9122: [-99e-5, 0.601, 0, 0, 0.66667],
              9123: [0.64502, 1.155, 0, 0, 0.66667],
              9124: [0.64502, 1.155, 0, 0, 0.66667],
              9125: [-99e-5, 0.601, 0, 0, 0.66667],
              9126: [0.64502, 1.155, 0, 0, 0.66667],
              9127: [1e-5, 0.9, 0, 0, 0.88889],
              9128: [0.65002, 1.15, 0, 0, 0.88889],
              9129: [0.90001, 0, 0, 0, 0.88889],
              9130: [0, 0.3, 0, 0, 0.88889],
              9131: [1e-5, 0.9, 0, 0, 0.88889],
              9132: [0.65002, 1.15, 0, 0, 0.88889],
              9133: [0.90001, 0, 0, 0, 0.88889],
              9143: [0.88502, 0.915, 0, 0, 1.05556],
              10216: [1.25003, 1.75, 0, 0, 0.80556],
              10217: [1.25003, 1.75, 0, 0, 0.80556],
              57344: [-499e-5, 0.605, 0, 0, 1.05556],
              57345: [-499e-5, 0.605, 0, 0, 1.05556],
              57680: [0, 0.12, 0, 0, 0.45],
              57681: [0, 0.12, 0, 0, 0.45],
              57682: [0, 0.12, 0, 0, 0.45],
              57683: [0, 0.12, 0, 0, 0.45]
            },
            "Typewriter-Regular": {
              32: [0, 0, 0, 0, 0.525],
              33: [0, 0.61111, 0, 0, 0.525],
              34: [0, 0.61111, 0, 0, 0.525],
              35: [0, 0.61111, 0, 0, 0.525],
              36: [0.08333, 0.69444, 0, 0, 0.525],
              37: [0.08333, 0.69444, 0, 0, 0.525],
              38: [0, 0.61111, 0, 0, 0.525],
              39: [0, 0.61111, 0, 0, 0.525],
              40: [0.08333, 0.69444, 0, 0, 0.525],
              41: [0.08333, 0.69444, 0, 0, 0.525],
              42: [0, 0.52083, 0, 0, 0.525],
              43: [-0.08056, 0.53055, 0, 0, 0.525],
              44: [0.13889, 0.125, 0, 0, 0.525],
              45: [-0.08056, 0.53055, 0, 0, 0.525],
              46: [0, 0.125, 0, 0, 0.525],
              47: [0.08333, 0.69444, 0, 0, 0.525],
              48: [0, 0.61111, 0, 0, 0.525],
              49: [0, 0.61111, 0, 0, 0.525],
              50: [0, 0.61111, 0, 0, 0.525],
              51: [0, 0.61111, 0, 0, 0.525],
              52: [0, 0.61111, 0, 0, 0.525],
              53: [0, 0.61111, 0, 0, 0.525],
              54: [0, 0.61111, 0, 0, 0.525],
              55: [0, 0.61111, 0, 0, 0.525],
              56: [0, 0.61111, 0, 0, 0.525],
              57: [0, 0.61111, 0, 0, 0.525],
              58: [0, 0.43056, 0, 0, 0.525],
              59: [0.13889, 0.43056, 0, 0, 0.525],
              60: [-0.05556, 0.55556, 0, 0, 0.525],
              61: [-0.19549, 0.41562, 0, 0, 0.525],
              62: [-0.05556, 0.55556, 0, 0, 0.525],
              63: [0, 0.61111, 0, 0, 0.525],
              64: [0, 0.61111, 0, 0, 0.525],
              65: [0, 0.61111, 0, 0, 0.525],
              66: [0, 0.61111, 0, 0, 0.525],
              67: [0, 0.61111, 0, 0, 0.525],
              68: [0, 0.61111, 0, 0, 0.525],
              69: [0, 0.61111, 0, 0, 0.525],
              70: [0, 0.61111, 0, 0, 0.525],
              71: [0, 0.61111, 0, 0, 0.525],
              72: [0, 0.61111, 0, 0, 0.525],
              73: [0, 0.61111, 0, 0, 0.525],
              74: [0, 0.61111, 0, 0, 0.525],
              75: [0, 0.61111, 0, 0, 0.525],
              76: [0, 0.61111, 0, 0, 0.525],
              77: [0, 0.61111, 0, 0, 0.525],
              78: [0, 0.61111, 0, 0, 0.525],
              79: [0, 0.61111, 0, 0, 0.525],
              80: [0, 0.61111, 0, 0, 0.525],
              81: [0.13889, 0.61111, 0, 0, 0.525],
              82: [0, 0.61111, 0, 0, 0.525],
              83: [0, 0.61111, 0, 0, 0.525],
              84: [0, 0.61111, 0, 0, 0.525],
              85: [0, 0.61111, 0, 0, 0.525],
              86: [0, 0.61111, 0, 0, 0.525],
              87: [0, 0.61111, 0, 0, 0.525],
              88: [0, 0.61111, 0, 0, 0.525],
              89: [0, 0.61111, 0, 0, 0.525],
              90: [0, 0.61111, 0, 0, 0.525],
              91: [0.08333, 0.69444, 0, 0, 0.525],
              92: [0.08333, 0.69444, 0, 0, 0.525],
              93: [0.08333, 0.69444, 0, 0, 0.525],
              94: [0, 0.61111, 0, 0, 0.525],
              95: [0.09514, 0, 0, 0, 0.525],
              96: [0, 0.61111, 0, 0, 0.525],
              97: [0, 0.43056, 0, 0, 0.525],
              98: [0, 0.61111, 0, 0, 0.525],
              99: [0, 0.43056, 0, 0, 0.525],
              100: [0, 0.61111, 0, 0, 0.525],
              101: [0, 0.43056, 0, 0, 0.525],
              102: [0, 0.61111, 0, 0, 0.525],
              103: [0.22222, 0.43056, 0, 0, 0.525],
              104: [0, 0.61111, 0, 0, 0.525],
              105: [0, 0.61111, 0, 0, 0.525],
              106: [0.22222, 0.61111, 0, 0, 0.525],
              107: [0, 0.61111, 0, 0, 0.525],
              108: [0, 0.61111, 0, 0, 0.525],
              109: [0, 0.43056, 0, 0, 0.525],
              110: [0, 0.43056, 0, 0, 0.525],
              111: [0, 0.43056, 0, 0, 0.525],
              112: [0.22222, 0.43056, 0, 0, 0.525],
              113: [0.22222, 0.43056, 0, 0, 0.525],
              114: [0, 0.43056, 0, 0, 0.525],
              115: [0, 0.43056, 0, 0, 0.525],
              116: [0, 0.55358, 0, 0, 0.525],
              117: [0, 0.43056, 0, 0, 0.525],
              118: [0, 0.43056, 0, 0, 0.525],
              119: [0, 0.43056, 0, 0, 0.525],
              120: [0, 0.43056, 0, 0, 0.525],
              121: [0.22222, 0.43056, 0, 0, 0.525],
              122: [0, 0.43056, 0, 0, 0.525],
              123: [0.08333, 0.69444, 0, 0, 0.525],
              124: [0.08333, 0.69444, 0, 0, 0.525],
              125: [0.08333, 0.69444, 0, 0, 0.525],
              126: [0, 0.61111, 0, 0, 0.525],
              127: [0, 0.61111, 0, 0, 0.525],
              160: [0, 0, 0, 0, 0.525],
              176: [0, 0.61111, 0, 0, 0.525],
              184: [0.19445, 0, 0, 0, 0.525],
              305: [0, 0.43056, 0, 0, 0.525],
              567: [0.22222, 0.43056, 0, 0, 0.525],
              711: [0, 0.56597, 0, 0, 0.525],
              713: [0, 0.56555, 0, 0, 0.525],
              714: [0, 0.61111, 0, 0, 0.525],
              715: [0, 0.61111, 0, 0, 0.525],
              728: [0, 0.61111, 0, 0, 0.525],
              730: [0, 0.61111, 0, 0, 0.525],
              770: [0, 0.61111, 0, 0, 0.525],
              771: [0, 0.61111, 0, 0, 0.525],
              776: [0, 0.61111, 0, 0, 0.525],
              915: [0, 0.61111, 0, 0, 0.525],
              916: [0, 0.61111, 0, 0, 0.525],
              920: [0, 0.61111, 0, 0, 0.525],
              923: [0, 0.61111, 0, 0, 0.525],
              926: [0, 0.61111, 0, 0, 0.525],
              928: [0, 0.61111, 0, 0, 0.525],
              931: [0, 0.61111, 0, 0, 0.525],
              933: [0, 0.61111, 0, 0, 0.525],
              934: [0, 0.61111, 0, 0, 0.525],
              936: [0, 0.61111, 0, 0, 0.525],
              937: [0, 0.61111, 0, 0, 0.525],
              8216: [0, 0.61111, 0, 0, 0.525],
              8217: [0, 0.61111, 0, 0, 0.525],
              8242: [0, 0.61111, 0, 0, 0.525],
              9251: [0.11111, 0.21944, 0, 0, 0.525]
            }
          };
          const zr = {
            slant: [0.25, 0.25, 0.25],
            // sigma1
            space: [0, 0, 0],
            // sigma2
            stretch: [0, 0, 0],
            // sigma3
            shrink: [0, 0, 0],
            // sigma4
            xHeight: [0.431, 0.431, 0.431],
            // sigma5
            quad: [1, 1.171, 1.472],
            // sigma6
            extraSpace: [0, 0, 0],
            // sigma7
            num1: [0.677, 0.732, 0.925],
            // sigma8
            num2: [0.394, 0.384, 0.387],
            // sigma9
            num3: [0.444, 0.471, 0.504],
            // sigma10
            denom1: [0.686, 0.752, 1.025],
            // sigma11
            denom2: [0.345, 0.344, 0.532],
            // sigma12
            sup1: [0.413, 0.503, 0.504],
            // sigma13
            sup2: [0.363, 0.431, 0.404],
            // sigma14
            sup3: [0.289, 0.286, 0.294],
            // sigma15
            sub1: [0.15, 0.143, 0.2],
            // sigma16
            sub2: [0.247, 0.286, 0.4],
            // sigma17
            supDrop: [0.386, 0.353, 0.494],
            // sigma18
            subDrop: [0.05, 0.071, 0.1],
            // sigma19
            delim1: [2.39, 1.7, 1.98],
            // sigma20
            delim2: [1.01, 1.157, 1.42],
            // sigma21
            axisHeight: [0.25, 0.25, 0.25],
            // sigma22
            // These font metrics are extracted from TeX by using tftopl on cmex10.tfm;
            // they correspond to the font parameters of the extension fonts (family 3).
            // See the TeXbook, page 441. In AMSTeX, the extension fonts scale; to
            // match cmex7, we'd use cmex7.tfm values for script and scriptscript
            // values.
            defaultRuleThickness: [0.04, 0.049, 0.049],
            // xi8; cmex7: 0.049
            bigOpSpacing1: [0.111, 0.111, 0.111],
            // xi9
            bigOpSpacing2: [0.166, 0.166, 0.166],
            // xi10
            bigOpSpacing3: [0.2, 0.2, 0.2],
            // xi11
            bigOpSpacing4: [0.6, 0.611, 0.611],
            // xi12; cmex7: 0.611
            bigOpSpacing5: [0.1, 0.143, 0.143],
            // xi13; cmex7: 0.143
            // The \sqrt rule width is taken from the height of the surd character.
            // Since we use the same font at all sizes, this thickness doesn't scale.
            sqrtRuleThickness: [0.04, 0.04, 0.04],
            // This value determines how large a pt is, for metrics which are defined
            // in terms of pts.
            // This value is also used in katex.scss; if you change it make sure the
            // values match.
            ptPerEm: [10, 10, 10],
            // The space between adjacent `|` columns in an array definition. From
            // `\showthe\doublerulesep` in LaTeX. Equals 2.0 / ptPerEm.
            doubleRuleSep: [0.2, 0.2, 0.2],
            // The width of separator lines in {array} environments. From
            // `\showthe\arrayrulewidth` in LaTeX. Equals 0.4 / ptPerEm.
            arrayRuleWidth: [0.04, 0.04, 0.04],
            // Two values from LaTeX source2e:
            fboxsep: [0.3, 0.3, 0.3],
            //        3 pt / ptPerEm
            fboxrule: [0.04, 0.04, 0.04]
            // 0.4 pt / ptPerEm
          }, Q0 = {
            // Latin-1
            Å: "A",
            Ð: "D",
            Þ: "o",
            å: "a",
            ð: "d",
            þ: "o",
            // Cyrillic
            А: "A",
            Б: "B",
            В: "B",
            Г: "F",
            Д: "A",
            Е: "E",
            Ж: "K",
            З: "3",
            И: "N",
            Й: "N",
            К: "K",
            Л: "N",
            М: "M",
            Н: "H",
            О: "O",
            П: "N",
            Р: "P",
            С: "C",
            Т: "T",
            У: "y",
            Ф: "O",
            Х: "X",
            Ц: "U",
            Ч: "h",
            Ш: "W",
            Щ: "W",
            Ъ: "B",
            Ы: "X",
            Ь: "B",
            Э: "3",
            Ю: "X",
            Я: "R",
            а: "a",
            б: "b",
            в: "a",
            г: "r",
            д: "y",
            е: "e",
            ж: "m",
            з: "e",
            и: "n",
            й: "n",
            к: "n",
            л: "n",
            м: "m",
            н: "n",
            о: "o",
            п: "n",
            р: "p",
            с: "c",
            т: "o",
            у: "y",
            ф: "b",
            х: "x",
            ц: "n",
            ч: "n",
            ш: "w",
            щ: "w",
            ъ: "a",
            ы: "m",
            ь: "a",
            э: "e",
            ю: "m",
            я: "r"
          };
          function du(i, s) {
            zt[i] = s;
          }
          function Fs(i, s, o) {
            if (!zt[s])
              throw new Error("Font metrics not found for font: " + s + ".");
            let c3 = i.charCodeAt(0), h3 = zt[s][c3];
            if (!h3 && i[0] in Q0 && (c3 = Q0[i[0]].charCodeAt(0), h3 = zt[s][c3]), !h3 && o === "text" && Ge(c3) && (h3 = zt[s][77]), h3)
              return {
                depth: h3[0],
                height: h3[1],
                italic: h3[2],
                skew: h3[3],
                width: h3[4]
              };
          }
          const Hs = {};
          function mu(i) {
            let s;
            if (i >= 5 ? s = 0 : i >= 3 ? s = 1 : s = 2, !Hs[s]) {
              const o = Hs[s] = {
                cssEmPerMu: zr.quad[s] / 18
              };
              for (const c3 in zr)
                zr.hasOwnProperty(c3) && (o[c3] = zr[c3][s]);
            }
            return Hs[s];
          }
          const pu = [
            // Each element contains [textsize, scriptsize, scriptscriptsize].
            // The size mappings are taken from TeX with \normalsize=10pt.
            [1, 1, 1],
            // size1: [5, 5, 5]              \tiny
            [2, 1, 1],
            // size2: [6, 5, 5]
            [3, 1, 1],
            // size3: [7, 5, 5]              \scriptsize
            [4, 2, 1],
            // size4: [8, 6, 5]              \footnotesize
            [5, 2, 1],
            // size5: [9, 6, 5]              \small
            [6, 3, 1],
            // size6: [10, 7, 5]             \normalsize
            [7, 4, 2],
            // size7: [12, 8, 6]             \large
            [8, 6, 3],
            // size8: [14.4, 10, 7]          \Large
            [9, 7, 6],
            // size9: [17.28, 12, 10]        \LARGE
            [10, 8, 7],
            // size10: [20.74, 14.4, 12]     \huge
            [11, 10, 9]
            // size11: [24.88, 20.74, 17.28] \HUGE
          ], Z0 = [
            // fontMetrics.js:getGlobalMetrics also uses size indexes, so if
            // you change size indexes, change that function.
            0.5,
            0.6,
            0.7,
            0.8,
            0.9,
            1,
            1.2,
            1.44,
            1.728,
            2.074,
            2.488
          ], ea = function(i, s) {
            return s.size < 2 ? i : pu[i - 1][s.size - 1];
          };
          class Pt {
            // A font family applies to a group of fonts (i.e. SansSerif), while a font
            // represents a specific font (i.e. SansSerif Bold).
            // See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
            /**
             * The base size index.
             */
            constructor(s) {
              this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = s.style, this.color = s.color, this.size = s.size || Pt.BASESIZE, this.textSize = s.textSize || this.size, this.phantom = !!s.phantom, this.font = s.font || "", this.fontFamily = s.fontFamily || "", this.fontWeight = s.fontWeight || "", this.fontShape = s.fontShape || "", this.sizeMultiplier = Z0[this.size - 1], this.maxSize = s.maxSize, this.minRuleThickness = s.minRuleThickness, this._fontMetrics = void 0;
            }
            /**
             * Returns a new options object with the same properties as "this".  Properties
             * from "extension" will be copied to the new options object.
             */
            extend(s) {
              const o = {
                style: this.style,
                size: this.size,
                textSize: this.textSize,
                color: this.color,
                phantom: this.phantom,
                font: this.font,
                fontFamily: this.fontFamily,
                fontWeight: this.fontWeight,
                fontShape: this.fontShape,
                maxSize: this.maxSize,
                minRuleThickness: this.minRuleThickness
              };
              for (const c3 in s)
                s.hasOwnProperty(c3) && (o[c3] = s[c3]);
              return new Pt(o);
            }
            /**
             * Return an options object with the given style. If `this.style === style`,
             * returns `this`.
             */
            havingStyle(s) {
              return this.style === s ? this : this.extend({
                style: s,
                size: ea(this.textSize, s)
              });
            }
            /**
             * Return an options object with a cramped version of the current style. If
             * the current style is cramped, returns `this`.
             */
            havingCrampedStyle() {
              return this.havingStyle(this.style.cramp());
            }
            /**
             * Return an options object with the given size and in at least `\textstyle`.
             * Returns `this` if appropriate.
             */
            havingSize(s) {
              return this.size === s && this.textSize === s ? this : this.extend({
                style: this.style.text(),
                size: s,
                textSize: s,
                sizeMultiplier: Z0[s - 1]
              });
            }
            /**
             * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
             * changes to at least `\textstyle`.
             */
            havingBaseStyle(s) {
              s = s || this.style.text();
              const o = ea(Pt.BASESIZE, s);
              return this.size === o && this.textSize === Pt.BASESIZE && this.style === s ? this : this.extend({
                style: s,
                size: o
              });
            }
            /**
             * Remove the effect of sizing changes such as \Huge.
             * Keep the effect of the current style, such as \scriptstyle.
             */
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
              return this.extend({
                style: this.style.text(),
                size: s
              });
            }
            /**
             * Create a new options object with the given color.
             */
            withColor(s) {
              return this.extend({
                color: s
              });
            }
            /**
             * Create a new options object with "phantom" set to true.
             */
            withPhantom() {
              return this.extend({
                phantom: true
              });
            }
            /**
             * Creates a new options object with the given math font or old text font.
             * @type {[type]}
             */
            withFont(s) {
              return this.extend({
                font: s
              });
            }
            /**
             * Create a new options objects with the given fontFamily.
             */
            withTextFontFamily(s) {
              return this.extend({
                fontFamily: s,
                font: ""
              });
            }
            /**
             * Creates a new options object with the given font weight
             */
            withTextFontWeight(s) {
              return this.extend({
                fontWeight: s,
                font: ""
              });
            }
            /**
             * Creates a new options object with the given font weight
             */
            withTextFontShape(s) {
              return this.extend({
                fontShape: s,
                font: ""
              });
            }
            /**
             * Return the CSS sizing classes required to switch from enclosing options
             * `oldOptions` to `this`. Returns an array of classes.
             */
            sizingClasses(s) {
              return s.size !== this.size ? ["sizing", "reset-size" + s.size, "size" + this.size] : [];
            }
            /**
             * Return the CSS sizing classes required to switch to the base size. Like
             * `this.havingSize(BASESIZE).sizingClasses(this)`.
             */
            baseSizingClasses() {
              return this.size !== Pt.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + Pt.BASESIZE] : [];
            }
            /**
             * Return the font metrics for this size.
             */
            fontMetrics() {
              return this._fontMetrics || (this._fontMetrics = mu(this.size)), this._fontMetrics;
            }
            /**
             * Gets the CSS color of the current options object
             */
            getColor() {
              return this.phantom ? "transparent" : this.color;
            }
          }
          Pt.BASESIZE = 6;
          var gu = Pt;
          const js = {
            // https://en.wikibooks.org/wiki/LaTeX/Lengths and
            // https://tex.stackexchange.com/a/8263
            pt: 1,
            // TeX point
            mm: 7227 / 2540,
            // millimeter
            cm: 7227 / 254,
            // centimeter
            in: 72.27,
            // inch
            bp: 803 / 800,
            // big (PostScript) points
            pc: 12,
            // pica
            dd: 1238 / 1157,
            // didot
            cc: 14856 / 1157,
            // cicero (12 didot)
            nd: 685 / 642,
            // new didot
            nc: 1370 / 107,
            // new cicero (12 new didot)
            sp: 1 / 65536,
            // scaled point (TeX's internal smallest unit)
            // https://tex.stackexchange.com/a/41371
            px: 803 / 800
            // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
          }, yu = {
            ex: true,
            em: true,
            mu: true
          }, ta = function(i) {
            return typeof i != "string" && (i = i.unit), i in js || i in yu || i === "ex";
          }, Pe = function(i, s) {
            let o;
            if (i.unit in js)
              o = js[i.unit] / s.fontMetrics().ptPerEm / s.sizeMultiplier;
            else if (i.unit === "mu")
              o = s.fontMetrics().cssEmPerMu;
            else {
              let c3;
              if (s.style.isTight() ? c3 = s.havingStyle(s.style.text()) : c3 = s, i.unit === "ex")
                o = c3.fontMetrics().xHeight;
              else if (i.unit === "em")
                o = c3.fontMetrics().quad;
              else
                throw new l3("Invalid unit: '" + i.unit + "'");
              c3 !== s && (o *= c3.sizeMultiplier / s.sizeMultiplier);
            }
            return Math.min(i.number * o, s.maxSize);
          }, Q = function(i) {
            return +i.toFixed(4) + "em";
          }, Jt = function(i) {
            return i.filter((s) => s).join(" ");
          }, na = function(i, s, o) {
            if (this.classes = i || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = o || {}, s) {
              s.style.isTight() && this.classes.push("mtight");
              const c3 = s.getColor();
              c3 && (this.style.color = c3);
            }
          }, ra = function(i) {
            const s = document.createElement(i);
            s.className = Jt(this.classes);
            for (const o in this.style)
              this.style.hasOwnProperty(o) && (s.style[o] = this.style[o]);
            for (const o in this.attributes)
              this.attributes.hasOwnProperty(o) && s.setAttribute(o, this.attributes[o]);
            for (let o = 0; o < this.children.length; o++)
              s.appendChild(this.children[o].toNode());
            return s;
          }, bu = /[\s"'>/=\x00-\x1f]/, sa = function(i) {
            let s = "<" + i;
            this.classes.length && (s += ' class="' + I3.escape(Jt(this.classes)) + '"');
            let o = "";
            for (const c3 in this.style)
              this.style.hasOwnProperty(c3) && (o += I3.hyphenate(c3) + ":" + this.style[c3] + ";");
            o && (s += ' style="' + I3.escape(o) + '"');
            for (const c3 in this.attributes)
              if (this.attributes.hasOwnProperty(c3)) {
                if (bu.test(c3))
                  throw new l3("Invalid attribute name '" + c3 + "'");
                s += " " + c3 + '="' + I3.escape(this.attributes[c3]) + '"';
              }
            s += ">";
            for (let c3 = 0; c3 < this.children.length; c3++)
              s += this.children[c3].toMarkup();
            return s += "</" + i + ">", s;
          };
          class Jn {
            constructor(s, o, c3, h3) {
              this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, na.call(this, s, c3, h3), this.children = o || [];
            }
            /**
             * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
             * all browsers support attributes the same, and having too many custom
             * attributes is probably bad.
             */
            setAttribute(s, o) {
              this.attributes[s] = o;
            }
            hasClass(s) {
              return I3.contains(this.classes, s);
            }
            toNode() {
              return ra.call(this, "span");
            }
            toMarkup() {
              return sa.call(this, "span");
            }
          }
          class Vs {
            constructor(s, o, c3, h3) {
              this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, na.call(this, o, h3), this.children = c3 || [], this.setAttribute("href", s);
            }
            setAttribute(s, o) {
              this.attributes[s] = o;
            }
            hasClass(s) {
              return I3.contains(this.classes, s);
            }
            toNode() {
              return ra.call(this, "a");
            }
            toMarkup() {
              return sa.call(this, "a");
            }
          }
          class wu {
            constructor(s, o, c3) {
              this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = o, this.src = s, this.classes = ["mord"], this.style = c3;
            }
            hasClass(s) {
              return I3.contains(this.classes, s);
            }
            toNode() {
              const s = document.createElement("img");
              s.src = this.src, s.alt = this.alt, s.className = "mord";
              for (const o in this.style)
                this.style.hasOwnProperty(o) && (s.style[o] = this.style[o]);
              return s;
            }
            toMarkup() {
              let s = '<img src="' + I3.escape(this.src) + '"' + (' alt="' + I3.escape(this.alt) + '"'), o = "";
              for (const c3 in this.style)
                this.style.hasOwnProperty(c3) && (o += I3.hyphenate(c3) + ":" + this.style[c3] + ";");
              return o && (s += ' style="' + I3.escape(o) + '"'), s += "'/>", s;
            }
          }
          const xu = {
            î: "ı̂",
            ï: "ı̈",
            í: "ı́",
            // 'ī': '\u0131\u0304', // enable when we add Extended Latin
            ì: "ı̀"
          };
          class wt {
            constructor(s, o, c3, h3, m, b, x, A) {
              this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = s, this.height = o || 0, this.depth = c3 || 0, this.italic = h3 || 0, this.skew = m || 0, this.width = b || 0, this.classes = x || [], this.style = A || {}, this.maxFontSize = 0;
              const z = ae(this.text.charCodeAt(0));
              z && this.classes.push(z + "_fallback"), /[îïíì]/.test(this.text) && (this.text = xu[this.text]);
            }
            hasClass(s) {
              return I3.contains(this.classes, s);
            }
            /**
             * Creates a text node or span from a symbol node. Note that a span is only
             * created if it is needed.
             */
            toNode() {
              const s = document.createTextNode(this.text);
              let o = null;
              this.italic > 0 && (o = document.createElement("span"), o.style.marginRight = Q(this.italic)), this.classes.length > 0 && (o = o || document.createElement("span"), o.className = Jt(this.classes));
              for (const c3 in this.style)
                this.style.hasOwnProperty(c3) && (o = o || document.createElement("span"), o.style[c3] = this.style[c3]);
              return o ? (o.appendChild(s), o) : s;
            }
            /**
             * Creates markup for a symbol node.
             */
            toMarkup() {
              let s = false, o = "<span";
              this.classes.length && (s = true, o += ' class="', o += I3.escape(Jt(this.classes)), o += '"');
              let c3 = "";
              this.italic > 0 && (c3 += "margin-right:" + this.italic + "em;");
              for (const m in this.style)
                this.style.hasOwnProperty(m) && (c3 += I3.hyphenate(m) + ":" + this.style[m] + ";");
              c3 && (s = true, o += ' style="' + I3.escape(c3) + '"');
              const h3 = I3.escape(this.text);
              return s ? (o += ">", o += h3, o += "</span>", o) : h3;
            }
          }
          class Ft {
            constructor(s, o) {
              this.children = void 0, this.attributes = void 0, this.children = s || [], this.attributes = o || {};
            }
            toNode() {
              const o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
              for (const c3 in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, c3) && o.setAttribute(c3, this.attributes[c3]);
              for (let c3 = 0; c3 < this.children.length; c3++)
                o.appendChild(this.children[c3].toNode());
              return o;
            }
            toMarkup() {
              let s = '<svg xmlns="http://www.w3.org/2000/svg"';
              for (const o in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, o) && (s += " " + o + '="' + I3.escape(this.attributes[o]) + '"');
              s += ">";
              for (let o = 0; o < this.children.length; o++)
                s += this.children[o].toMarkup();
              return s += "</svg>", s;
            }
          }
          class Qt {
            constructor(s, o) {
              this.pathName = void 0, this.alternate = void 0, this.pathName = s, this.alternate = o;
            }
            toNode() {
              const o = document.createElementNS("http://www.w3.org/2000/svg", "path");
              return this.alternate ? o.setAttribute("d", this.alternate) : o.setAttribute("d", J0[this.pathName]), o;
            }
            toMarkup() {
              return this.alternate ? '<path d="' + I3.escape(this.alternate) + '"/>' : '<path d="' + I3.escape(J0[this.pathName]) + '"/>';
            }
          }
          class Us {
            constructor(s) {
              this.attributes = void 0, this.attributes = s || {};
            }
            toNode() {
              const o = document.createElementNS("http://www.w3.org/2000/svg", "line");
              for (const c3 in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, c3) && o.setAttribute(c3, this.attributes[c3]);
              return o;
            }
            toMarkup() {
              let s = "<line";
              for (const o in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, o) && (s += " " + o + '="' + I3.escape(this.attributes[o]) + '"');
              return s += "/>", s;
            }
          }
          function ia(i) {
            if (i instanceof wt)
              return i;
            throw new Error("Expected symbolNode but got " + String(i) + ".");
          }
          function ku(i) {
            if (i instanceof Jn)
              return i;
            throw new Error("Expected span<HtmlDomNode> but got " + String(i) + ".");
          }
          const vu = {
            bin: 1,
            close: 1,
            inner: 1,
            open: 1,
            punct: 1,
            rel: 1
          }, Su = {
            "accent-token": 1,
            mathord: 1,
            "op-token": 1,
            spacing: 1,
            textord: 1
          }, Or = {
            math: {},
            text: {}
          };
          var Fe = Or;
          function d3(i, s, o, c3, h3, m) {
            Or[i][h3] = {
              font: s,
              group: o,
              replace: c3
            }, m && c3 && (Or[i][c3] = Or[i][h3]);
          }
          const g = "math", G = "text", w = "main", M = "ams", Re = "accent-token", ne = "bin", ot = "close", Tn = "inner", he = "mathord", Qe = "op-token", pt = "open", Br = "punct", E = "rel", Ht = "spacing", B = "textord";
          d3(g, w, E, "≡", "\\equiv", true), d3(g, w, E, "≺", "\\prec", true), d3(g, w, E, "≻", "\\succ", true), d3(g, w, E, "∼", "\\sim", true), d3(g, w, E, "⊥", "\\perp"), d3(g, w, E, "⪯", "\\preceq", true), d3(g, w, E, "⪰", "\\succeq", true), d3(g, w, E, "≃", "\\simeq", true), d3(g, w, E, "∣", "\\mid", true), d3(g, w, E, "≪", "\\ll", true), d3(g, w, E, "≫", "\\gg", true), d3(g, w, E, "≍", "\\asymp", true), d3(g, w, E, "∥", "\\parallel"), d3(g, w, E, "⋈", "\\bowtie", true), d3(g, w, E, "⌣", "\\smile", true), d3(g, w, E, "⊑", "\\sqsubseteq", true), d3(g, w, E, "⊒", "\\sqsupseteq", true), d3(g, w, E, "≐", "\\doteq", true), d3(g, w, E, "⌢", "\\frown", true), d3(g, w, E, "∋", "\\ni", true), d3(g, w, E, "∝", "\\propto", true), d3(g, w, E, "⊢", "\\vdash", true), d3(g, w, E, "⊣", "\\dashv", true), d3(g, w, E, "∋", "\\owns"), d3(g, w, Br, ".", "\\ldotp"), d3(g, w, Br, "⋅", "\\cdotp"), d3(g, w, B, "#", "\\#"), d3(G, w, B, "#", "\\#"), d3(g, w, B, "&", "\\&"), d3(G, w, B, "&", "\\&"), d3(g, w, B, "ℵ", "\\aleph", true), d3(g, w, B, "∀", "\\forall", true), d3(g, w, B, "ℏ", "\\hbar", true), d3(g, w, B, "∃", "\\exists", true), d3(g, w, B, "∇", "\\nabla", true), d3(g, w, B, "♭", "\\flat", true), d3(g, w, B, "ℓ", "\\ell", true), d3(g, w, B, "♮", "\\natural", true), d3(g, w, B, "♣", "\\clubsuit", true), d3(g, w, B, "℘", "\\wp", true), d3(g, w, B, "♯", "\\sharp", true), d3(g, w, B, "♢", "\\diamondsuit", true), d3(g, w, B, "ℜ", "\\Re", true), d3(g, w, B, "♡", "\\heartsuit", true), d3(g, w, B, "ℑ", "\\Im", true), d3(g, w, B, "♠", "\\spadesuit", true), d3(g, w, B, "§", "\\S", true), d3(G, w, B, "§", "\\S"), d3(g, w, B, "¶", "\\P", true), d3(G, w, B, "¶", "\\P"), d3(g, w, B, "†", "\\dag"), d3(G, w, B, "†", "\\dag"), d3(G, w, B, "†", "\\textdagger"), d3(g, w, B, "‡", "\\ddag"), d3(G, w, B, "‡", "\\ddag"), d3(G, w, B, "‡", "\\textdaggerdbl"), d3(g, w, ot, "⎱", "\\rmoustache", true), d3(g, w, pt, "⎰", "\\lmoustache", true), d3(g, w, ot, "⟯", "\\rgroup", true), d3(g, w, pt, "⟮", "\\lgroup", true), d3(g, w, ne, "∓", "\\mp", true), d3(g, w, ne, "⊖", "\\ominus", true), d3(g, w, ne, "⊎", "\\uplus", true), d3(g, w, ne, "⊓", "\\sqcap", true), d3(g, w, ne, "∗", "\\ast"), d3(g, w, ne, "⊔", "\\sqcup", true), d3(g, w, ne, "◯", "\\bigcirc", true), d3(g, w, ne, "∙", "\\bullet", true), d3(g, w, ne, "‡", "\\ddagger"), d3(g, w, ne, "≀", "\\wr", true), d3(g, w, ne, "⨿", "\\amalg"), d3(g, w, ne, "&", "\\And"), d3(g, w, E, "⟵", "\\longleftarrow", true), d3(g, w, E, "⇐", "\\Leftarrow", true), d3(g, w, E, "⟸", "\\Longleftarrow", true), d3(g, w, E, "⟶", "\\longrightarrow", true), d3(g, w, E, "⇒", "\\Rightarrow", true), d3(g, w, E, "⟹", "\\Longrightarrow", true), d3(g, w, E, "↔", "\\leftrightarrow", true), d3(g, w, E, "⟷", "\\longleftrightarrow", true), d3(g, w, E, "⇔", "\\Leftrightarrow", true), d3(g, w, E, "⟺", "\\Longleftrightarrow", true), d3(g, w, E, "↦", "\\mapsto", true), d3(g, w, E, "⟼", "\\longmapsto", true), d3(g, w, E, "↗", "\\nearrow", true), d3(g, w, E, "↩", "\\hookleftarrow", true), d3(g, w, E, "↪", "\\hookrightarrow", true), d3(g, w, E, "↘", "\\searrow", true), d3(g, w, E, "↼", "\\leftharpoonup", true), d3(g, w, E, "⇀", "\\rightharpoonup", true), d3(g, w, E, "↙", "\\swarrow", true), d3(g, w, E, "↽", "\\leftharpoondown", true), d3(g, w, E, "⇁", "\\rightharpoondown", true), d3(g, w, E, "↖", "\\nwarrow", true), d3(g, w, E, "⇌", "\\rightleftharpoons", true), d3(g, M, E, "≮", "\\nless", true), d3(g, M, E, "", "\\@nleqslant"), d3(g, M, E, "", "\\@nleqq"), d3(g, M, E, "⪇", "\\lneq", true), d3(g, M, E, "≨", "\\lneqq", true), d3(g, M, E, "", "\\@lvertneqq"), d3(g, M, E, "⋦", "\\lnsim", true), d3(g, M, E, "⪉", "\\lnapprox", true), d3(g, M, E, "⊀", "\\nprec", true), d3(g, M, E, "⋠", "\\npreceq", true), d3(g, M, E, "⋨", "\\precnsim", true), d3(g, M, E, "⪹", "\\precnapprox", true), d3(g, M, E, "≁", "\\nsim", true), d3(g, M, E, "", "\\@nshortmid"), d3(g, M, E, "∤", "\\nmid", true), d3(g, M, E, "⊬", "\\nvdash", true), d3(g, M, E, "⊭", "\\nvDash", true), d3(g, M, E, "⋪", "\\ntriangleleft"), d3(g, M, E, "⋬", "\\ntrianglelefteq", true), d3(g, M, E, "⊊", "\\subsetneq", true), d3(g, M, E, "", "\\@varsubsetneq"), d3(g, M, E, "⫋", "\\subsetneqq", true), d3(g, M, E, "", "\\@varsubsetneqq"), d3(g, M, E, "≯", "\\ngtr", true), d3(g, M, E, "", "\\@ngeqslant"), d3(g, M, E, "", "\\@ngeqq"), d3(g, M, E, "⪈", "\\gneq", true), d3(g, M, E, "≩", "\\gneqq", true), d3(g, M, E, "", "\\@gvertneqq"), d3(g, M, E, "⋧", "\\gnsim", true), d3(g, M, E, "⪊", "\\gnapprox", true), d3(g, M, E, "⊁", "\\nsucc", true), d3(g, M, E, "⋡", "\\nsucceq", true), d3(g, M, E, "⋩", "\\succnsim", true), d3(g, M, E, "⪺", "\\succnapprox", true), d3(g, M, E, "≆", "\\ncong", true), d3(g, M, E, "", "\\@nshortparallel"), d3(g, M, E, "∦", "\\nparallel", true), d3(g, M, E, "⊯", "\\nVDash", true), d3(g, M, E, "⋫", "\\ntriangleright"), d3(g, M, E, "⋭", "\\ntrianglerighteq", true), d3(g, M, E, "", "\\@nsupseteqq"), d3(g, M, E, "⊋", "\\supsetneq", true), d3(g, M, E, "", "\\@varsupsetneq"), d3(g, M, E, "⫌", "\\supsetneqq", true), d3(g, M, E, "", "\\@varsupsetneqq"), d3(g, M, E, "⊮", "\\nVdash", true), d3(g, M, E, "⪵", "\\precneqq", true), d3(g, M, E, "⪶", "\\succneqq", true), d3(g, M, E, "", "\\@nsubseteqq"), d3(g, M, ne, "⊴", "\\unlhd"), d3(g, M, ne, "⊵", "\\unrhd"), d3(g, M, E, "↚", "\\nleftarrow", true), d3(g, M, E, "↛", "\\nrightarrow", true), d3(g, M, E, "⇍", "\\nLeftarrow", true), d3(g, M, E, "⇏", "\\nRightarrow", true), d3(g, M, E, "↮", "\\nleftrightarrow", true), d3(g, M, E, "⇎", "\\nLeftrightarrow", true), d3(g, M, E, "△", "\\vartriangle"), d3(g, M, B, "ℏ", "\\hslash"), d3(g, M, B, "▽", "\\triangledown"), d3(g, M, B, "◊", "\\lozenge"), d3(g, M, B, "Ⓢ", "\\circledS"), d3(g, M, B, "®", "\\circledR"), d3(G, M, B, "®", "\\circledR"), d3(g, M, B, "∡", "\\measuredangle", true), d3(g, M, B, "∄", "\\nexists"), d3(g, M, B, "℧", "\\mho"), d3(g, M, B, "Ⅎ", "\\Finv", true), d3(g, M, B, "⅁", "\\Game", true), d3(g, M, B, "‵", "\\backprime"), d3(g, M, B, "▲", "\\blacktriangle"), d3(g, M, B, "▼", "\\blacktriangledown"), d3(g, M, B, "■", "\\blacksquare"), d3(g, M, B, "⧫", "\\blacklozenge"), d3(g, M, B, "★", "\\bigstar"), d3(g, M, B, "∢", "\\sphericalangle", true), d3(g, M, B, "∁", "\\complement", true), d3(g, M, B, "ð", "\\eth", true), d3(G, w, B, "ð", "ð"), d3(g, M, B, "╱", "\\diagup"), d3(g, M, B, "╲", "\\diagdown"), d3(g, M, B, "□", "\\square"), d3(g, M, B, "□", "\\Box"), d3(g, M, B, "◊", "\\Diamond"), d3(g, M, B, "¥", "\\yen", true), d3(G, M, B, "¥", "\\yen", true), d3(g, M, B, "✓", "\\checkmark", true), d3(G, M, B, "✓", "\\checkmark"), d3(g, M, B, "ℶ", "\\beth", true), d3(g, M, B, "ℸ", "\\daleth", true), d3(g, M, B, "ℷ", "\\gimel", true), d3(g, M, B, "ϝ", "\\digamma", true), d3(g, M, B, "ϰ", "\\varkappa"), d3(g, M, pt, "┌", "\\@ulcorner", true), d3(g, M, ot, "┐", "\\@urcorner", true), d3(g, M, pt, "└", "\\@llcorner", true), d3(g, M, ot, "┘", "\\@lrcorner", true), d3(g, M, E, "≦", "\\leqq", true), d3(g, M, E, "⩽", "\\leqslant", true), d3(g, M, E, "⪕", "\\eqslantless", true), d3(g, M, E, "≲", "\\lesssim", true), d3(g, M, E, "⪅", "\\lessapprox", true), d3(g, M, E, "≊", "\\approxeq", true), d3(g, M, ne, "⋖", "\\lessdot"), d3(g, M, E, "⋘", "\\lll", true), d3(g, M, E, "≶", "\\lessgtr", true), d3(g, M, E, "⋚", "\\lesseqgtr", true), d3(g, M, E, "⪋", "\\lesseqqgtr", true), d3(g, M, E, "≑", "\\doteqdot"), d3(g, M, E, "≓", "\\risingdotseq", true), d3(g, M, E, "≒", "\\fallingdotseq", true), d3(g, M, E, "∽", "\\backsim", true), d3(g, M, E, "⋍", "\\backsimeq", true), d3(g, M, E, "⫅", "\\subseteqq", true), d3(g, M, E, "⋐", "\\Subset", true), d3(g, M, E, "⊏", "\\sqsubset", true), d3(g, M, E, "≼", "\\preccurlyeq", true), d3(g, M, E, "⋞", "\\curlyeqprec", true), d3(g, M, E, "≾", "\\precsim", true), d3(g, M, E, "⪷", "\\precapprox", true), d3(g, M, E, "⊲", "\\vartriangleleft"), d3(g, M, E, "⊴", "\\trianglelefteq"), d3(g, M, E, "⊨", "\\vDash", true), d3(g, M, E, "⊪", "\\Vvdash", true), d3(g, M, E, "⌣", "\\smallsmile"), d3(g, M, E, "⌢", "\\smallfrown"), d3(g, M, E, "≏", "\\bumpeq", true), d3(g, M, E, "≎", "\\Bumpeq", true), d3(g, M, E, "≧", "\\geqq", true), d3(g, M, E, "⩾", "\\geqslant", true), d3(g, M, E, "⪖", "\\eqslantgtr", true), d3(g, M, E, "≳", "\\gtrsim", true), d3(g, M, E, "⪆", "\\gtrapprox", true), d3(g, M, ne, "⋗", "\\gtrdot"), d3(g, M, E, "⋙", "\\ggg", true), d3(g, M, E, "≷", "\\gtrless", true), d3(g, M, E, "⋛", "\\gtreqless", true), d3(g, M, E, "⪌", "\\gtreqqless", true), d3(g, M, E, "≖", "\\eqcirc", true), d3(g, M, E, "≗", "\\circeq", true), d3(g, M, E, "≜", "\\triangleq", true), d3(g, M, E, "∼", "\\thicksim"), d3(g, M, E, "≈", "\\thickapprox"), d3(g, M, E, "⫆", "\\supseteqq", true), d3(g, M, E, "⋑", "\\Supset", true), d3(g, M, E, "⊐", "\\sqsupset", true), d3(g, M, E, "≽", "\\succcurlyeq", true), d3(g, M, E, "⋟", "\\curlyeqsucc", true), d3(g, M, E, "≿", "\\succsim", true), d3(g, M, E, "⪸", "\\succapprox", true), d3(g, M, E, "⊳", "\\vartriangleright"), d3(g, M, E, "⊵", "\\trianglerighteq"), d3(g, M, E, "⊩", "\\Vdash", true), d3(g, M, E, "∣", "\\shortmid"), d3(g, M, E, "∥", "\\shortparallel"), d3(g, M, E, "≬", "\\between", true), d3(g, M, E, "⋔", "\\pitchfork", true), d3(g, M, E, "∝", "\\varpropto"), d3(g, M, E, "◀", "\\blacktriangleleft"), d3(g, M, E, "∴", "\\therefore", true), d3(g, M, E, "∍", "\\backepsilon"), d3(g, M, E, "▶", "\\blacktriangleright"), d3(g, M, E, "∵", "\\because", true), d3(g, M, E, "⋘", "\\llless"), d3(g, M, E, "⋙", "\\gggtr"), d3(g, M, ne, "⊲", "\\lhd"), d3(g, M, ne, "⊳", "\\rhd"), d3(g, M, E, "≂", "\\eqsim", true), d3(g, w, E, "⋈", "\\Join"), d3(g, M, E, "≑", "\\Doteq", true), d3(g, M, ne, "∔", "\\dotplus", true), d3(g, M, ne, "∖", "\\smallsetminus"), d3(g, M, ne, "⋒", "\\Cap", true), d3(g, M, ne, "⋓", "\\Cup", true), d3(g, M, ne, "⩞", "\\doublebarwedge", true), d3(g, M, ne, "⊟", "\\boxminus", true), d3(g, M, ne, "⊞", "\\boxplus", true), d3(g, M, ne, "⋇", "\\divideontimes", true), d3(g, M, ne, "⋉", "\\ltimes", true), d3(g, M, ne, "⋊", "\\rtimes", true), d3(g, M, ne, "⋋", "\\leftthreetimes", true), d3(g, M, ne, "⋌", "\\rightthreetimes", true), d3(g, M, ne, "⋏", "\\curlywedge", true), d3(g, M, ne, "⋎", "\\curlyvee", true), d3(g, M, ne, "⊝", "\\circleddash", true), d3(g, M, ne, "⊛", "\\circledast", true), d3(g, M, ne, "⋅", "\\centerdot"), d3(g, M, ne, "⊺", "\\intercal", true), d3(g, M, ne, "⋒", "\\doublecap"), d3(g, M, ne, "⋓", "\\doublecup"), d3(g, M, ne, "⊠", "\\boxtimes", true), d3(g, M, E, "⇢", "\\dashrightarrow", true), d3(g, M, E, "⇠", "\\dashleftarrow", true), d3(g, M, E, "⇇", "\\leftleftarrows", true), d3(g, M, E, "⇆", "\\leftrightarrows", true), d3(g, M, E, "⇚", "\\Lleftarrow", true), d3(g, M, E, "↞", "\\twoheadleftarrow", true), d3(g, M, E, "↢", "\\leftarrowtail", true), d3(g, M, E, "↫", "\\looparrowleft", true), d3(g, M, E, "⇋", "\\leftrightharpoons", true), d3(g, M, E, "↶", "\\curvearrowleft", true), d3(g, M, E, "↺", "\\circlearrowleft", true), d3(g, M, E, "↰", "\\Lsh", true), d3(g, M, E, "⇈", "\\upuparrows", true), d3(g, M, E, "↿", "\\upharpoonleft", true), d3(g, M, E, "⇃", "\\downharpoonleft", true), d3(g, w, E, "⊶", "\\origof", true), d3(g, w, E, "⊷", "\\imageof", true), d3(g, M, E, "⊸", "\\multimap", true), d3(g, M, E, "↭", "\\leftrightsquigarrow", true), d3(g, M, E, "⇉", "\\rightrightarrows", true), d3(g, M, E, "⇄", "\\rightleftarrows", true), d3(g, M, E, "↠", "\\twoheadrightarrow", true), d3(g, M, E, "↣", "\\rightarrowtail", true), d3(g, M, E, "↬", "\\looparrowright", true), d3(g, M, E, "↷", "\\curvearrowright", true), d3(g, M, E, "↻", "\\circlearrowright", true), d3(g, M, E, "↱", "\\Rsh", true), d3(g, M, E, "⇊", "\\downdownarrows", true), d3(g, M, E, "↾", "\\upharpoonright", true), d3(g, M, E, "⇂", "\\downharpoonright", true), d3(g, M, E, "⇝", "\\rightsquigarrow", true), d3(g, M, E, "⇝", "\\leadsto"), d3(g, M, E, "⇛", "\\Rrightarrow", true), d3(g, M, E, "↾", "\\restriction"), d3(g, w, B, "‘", "`"), d3(g, w, B, "$", "\\$"), d3(G, w, B, "$", "\\$"), d3(G, w, B, "$", "\\textdollar"), d3(g, w, B, "%", "\\%"), d3(G, w, B, "%", "\\%"), d3(g, w, B, "_", "\\_"), d3(G, w, B, "_", "\\_"), d3(G, w, B, "_", "\\textunderscore"), d3(g, w, B, "∠", "\\angle", true), d3(g, w, B, "∞", "\\infty", true), d3(g, w, B, "′", "\\prime"), d3(g, w, B, "△", "\\triangle"), d3(g, w, B, "Γ", "\\Gamma", true), d3(g, w, B, "Δ", "\\Delta", true), d3(g, w, B, "Θ", "\\Theta", true), d3(g, w, B, "Λ", "\\Lambda", true), d3(g, w, B, "Ξ", "\\Xi", true), d3(g, w, B, "Π", "\\Pi", true), d3(g, w, B, "Σ", "\\Sigma", true), d3(g, w, B, "Υ", "\\Upsilon", true), d3(g, w, B, "Φ", "\\Phi", true), d3(g, w, B, "Ψ", "\\Psi", true), d3(g, w, B, "Ω", "\\Omega", true), d3(g, w, B, "A", "Α"), d3(g, w, B, "B", "Β"), d3(g, w, B, "E", "Ε"), d3(g, w, B, "Z", "Ζ"), d3(g, w, B, "H", "Η"), d3(g, w, B, "I", "Ι"), d3(g, w, B, "K", "Κ"), d3(g, w, B, "M", "Μ"), d3(g, w, B, "N", "Ν"), d3(g, w, B, "O", "Ο"), d3(g, w, B, "P", "Ρ"), d3(g, w, B, "T", "Τ"), d3(g, w, B, "X", "Χ"), d3(g, w, B, "¬", "\\neg", true), d3(g, w, B, "¬", "\\lnot"), d3(g, w, B, "⊤", "\\top"), d3(g, w, B, "⊥", "\\bot"), d3(g, w, B, "∅", "\\emptyset"), d3(g, M, B, "∅", "\\varnothing"), d3(g, w, he, "α", "\\alpha", true), d3(g, w, he, "β", "\\beta", true), d3(g, w, he, "γ", "\\gamma", true), d3(g, w, he, "δ", "\\delta", true), d3(g, w, he, "ϵ", "\\epsilon", true), d3(g, w, he, "ζ", "\\zeta", true), d3(g, w, he, "η", "\\eta", true), d3(g, w, he, "θ", "\\theta", true), d3(g, w, he, "ι", "\\iota", true), d3(g, w, he, "κ", "\\kappa", true), d3(g, w, he, "λ", "\\lambda", true), d3(g, w, he, "μ", "\\mu", true), d3(g, w, he, "ν", "\\nu", true), d3(g, w, he, "ξ", "\\xi", true), d3(g, w, he, "ο", "\\omicron", true), d3(g, w, he, "π", "\\pi", true), d3(g, w, he, "ρ", "\\rho", true), d3(g, w, he, "σ", "\\sigma", true), d3(g, w, he, "τ", "\\tau", true), d3(g, w, he, "υ", "\\upsilon", true), d3(g, w, he, "ϕ", "\\phi", true), d3(g, w, he, "χ", "\\chi", true), d3(g, w, he, "ψ", "\\psi", true), d3(g, w, he, "ω", "\\omega", true), d3(g, w, he, "ε", "\\varepsilon", true), d3(g, w, he, "ϑ", "\\vartheta", true), d3(g, w, he, "ϖ", "\\varpi", true), d3(g, w, he, "ϱ", "\\varrho", true), d3(g, w, he, "ς", "\\varsigma", true), d3(g, w, he, "φ", "\\varphi", true), d3(g, w, ne, "∗", "*", true), d3(g, w, ne, "+", "+"), d3(g, w, ne, "−", "-", true), d3(g, w, ne, "⋅", "\\cdot", true), d3(g, w, ne, "∘", "\\circ", true), d3(g, w, ne, "÷", "\\div", true), d3(g, w, ne, "±", "\\pm", true), d3(g, w, ne, "×", "\\times", true), d3(g, w, ne, "∩", "\\cap", true), d3(g, w, ne, "∪", "\\cup", true), d3(g, w, ne, "∖", "\\setminus", true), d3(g, w, ne, "∧", "\\land"), d3(g, w, ne, "∨", "\\lor"), d3(g, w, ne, "∧", "\\wedge", true), d3(g, w, ne, "∨", "\\vee", true), d3(g, w, B, "√", "\\surd"), d3(g, w, pt, "⟨", "\\langle", true), d3(g, w, pt, "∣", "\\lvert"), d3(g, w, pt, "∥", "\\lVert"), d3(g, w, ot, "?", "?"), d3(g, w, ot, "!", "!"), d3(g, w, ot, "⟩", "\\rangle", true), d3(g, w, ot, "∣", "\\rvert"), d3(g, w, ot, "∥", "\\rVert"), d3(g, w, E, "=", "="), d3(g, w, E, ":", ":"), d3(g, w, E, "≈", "\\approx", true), d3(g, w, E, "≅", "\\cong", true), d3(g, w, E, "≥", "\\ge"), d3(g, w, E, "≥", "\\geq", true), d3(g, w, E, "←", "\\gets"), d3(g, w, E, ">", "\\gt", true), d3(g, w, E, "∈", "\\in", true), d3(g, w, E, "", "\\@not"), d3(g, w, E, "⊂", "\\subset", true), d3(g, w, E, "⊃", "\\supset", true), d3(g, w, E, "⊆", "\\subseteq", true), d3(g, w, E, "⊇", "\\supseteq", true), d3(g, M, E, "⊈", "\\nsubseteq", true), d3(g, M, E, "⊉", "\\nsupseteq", true), d3(g, w, E, "⊨", "\\models"), d3(g, w, E, "←", "\\leftarrow", true), d3(g, w, E, "≤", "\\le"), d3(g, w, E, "≤", "\\leq", true), d3(g, w, E, "<", "\\lt", true), d3(g, w, E, "→", "\\rightarrow", true), d3(g, w, E, "→", "\\to"), d3(g, M, E, "≱", "\\ngeq", true), d3(g, M, E, "≰", "\\nleq", true), d3(g, w, Ht, " ", "\\ "), d3(g, w, Ht, " ", "\\space"), d3(g, w, Ht, " ", "\\nobreakspace"), d3(G, w, Ht, " ", "\\ "), d3(G, w, Ht, " ", " "), d3(G, w, Ht, " ", "\\space"), d3(G, w, Ht, " ", "\\nobreakspace"), d3(g, w, Ht, null, "\\nobreak"), d3(g, w, Ht, null, "\\allowbreak"), d3(g, w, Br, ",", ","), d3(g, w, Br, ";", ";"), d3(g, M, ne, "⊼", "\\barwedge", true), d3(g, M, ne, "⊻", "\\veebar", true), d3(g, w, ne, "⊙", "\\odot", true), d3(g, w, ne, "⊕", "\\oplus", true), d3(g, w, ne, "⊗", "\\otimes", true), d3(g, w, B, "∂", "\\partial", true), d3(g, w, ne, "⊘", "\\oslash", true), d3(g, M, ne, "⊚", "\\circledcirc", true), d3(g, M, ne, "⊡", "\\boxdot", true), d3(g, w, ne, "△", "\\bigtriangleup"), d3(g, w, ne, "▽", "\\bigtriangledown"), d3(g, w, ne, "†", "\\dagger"), d3(g, w, ne, "⋄", "\\diamond"), d3(g, w, ne, "⋆", "\\star"), d3(g, w, ne, "◃", "\\triangleleft"), d3(g, w, ne, "▹", "\\triangleright"), d3(g, w, pt, "{", "\\{"), d3(G, w, B, "{", "\\{"), d3(G, w, B, "{", "\\textbraceleft"), d3(g, w, ot, "}", "\\}"), d3(G, w, B, "}", "\\}"), d3(G, w, B, "}", "\\textbraceright"), d3(g, w, pt, "{", "\\lbrace"), d3(g, w, ot, "}", "\\rbrace"), d3(g, w, pt, "[", "\\lbrack", true), d3(G, w, B, "[", "\\lbrack", true), d3(g, w, ot, "]", "\\rbrack", true), d3(G, w, B, "]", "\\rbrack", true), d3(g, w, pt, "(", "\\lparen", true), d3(g, w, ot, ")", "\\rparen", true), d3(G, w, B, "<", "\\textless", true), d3(G, w, B, ">", "\\textgreater", true), d3(g, w, pt, "⌊", "\\lfloor", true), d3(g, w, ot, "⌋", "\\rfloor", true), d3(g, w, pt, "⌈", "\\lceil", true), d3(g, w, ot, "⌉", "\\rceil", true), d3(g, w, B, "\\", "\\backslash"), d3(g, w, B, "∣", "|"), d3(g, w, B, "∣", "\\vert"), d3(G, w, B, "|", "\\textbar", true), d3(g, w, B, "∥", "\\|"), d3(g, w, B, "∥", "\\Vert"), d3(G, w, B, "∥", "\\textbardbl"), d3(G, w, B, "~", "\\textasciitilde"), d3(G, w, B, "\\", "\\textbackslash"), d3(G, w, B, "^", "\\textasciicircum"), d3(g, w, E, "↑", "\\uparrow", true), d3(g, w, E, "⇑", "\\Uparrow", true), d3(g, w, E, "↓", "\\downarrow", true), d3(g, w, E, "⇓", "\\Downarrow", true), d3(g, w, E, "↕", "\\updownarrow", true), d3(g, w, E, "⇕", "\\Updownarrow", true), d3(g, w, Qe, "∐", "\\coprod"), d3(g, w, Qe, "⋁", "\\bigvee"), d3(g, w, Qe, "⋀", "\\bigwedge"), d3(g, w, Qe, "⨄", "\\biguplus"), d3(g, w, Qe, "⋂", "\\bigcap"), d3(g, w, Qe, "⋃", "\\bigcup"), d3(g, w, Qe, "∫", "\\int"), d3(g, w, Qe, "∫", "\\intop"), d3(g, w, Qe, "∬", "\\iint"), d3(g, w, Qe, "∭", "\\iiint"), d3(g, w, Qe, "∏", "\\prod"), d3(g, w, Qe, "∑", "\\sum"), d3(g, w, Qe, "⨂", "\\bigotimes"), d3(g, w, Qe, "⨁", "\\bigoplus"), d3(g, w, Qe, "⨀", "\\bigodot"), d3(g, w, Qe, "∮", "\\oint"), d3(g, w, Qe, "∯", "\\oiint"), d3(g, w, Qe, "∰", "\\oiiint"), d3(g, w, Qe, "⨆", "\\bigsqcup"), d3(g, w, Qe, "∫", "\\smallint"), d3(G, w, Tn, "…", "\\textellipsis"), d3(g, w, Tn, "…", "\\mathellipsis"), d3(G, w, Tn, "…", "\\ldots", true), d3(g, w, Tn, "…", "\\ldots", true), d3(g, w, Tn, "⋯", "\\@cdots", true), d3(g, w, Tn, "⋱", "\\ddots", true), d3(g, w, B, "⋮", "\\varvdots"), d3(G, w, B, "⋮", "\\varvdots"), d3(g, w, Re, "ˊ", "\\acute"), d3(g, w, Re, "ˋ", "\\grave"), d3(g, w, Re, "¨", "\\ddot"), d3(g, w, Re, "~", "\\tilde"), d3(g, w, Re, "ˉ", "\\bar"), d3(g, w, Re, "˘", "\\breve"), d3(g, w, Re, "ˇ", "\\check"), d3(g, w, Re, "^", "\\hat"), d3(g, w, Re, "⃗", "\\vec"), d3(g, w, Re, "˙", "\\dot"), d3(g, w, Re, "˚", "\\mathring"), d3(g, w, he, "", "\\@imath"), d3(g, w, he, "", "\\@jmath"), d3(g, w, B, "ı", "ı"), d3(g, w, B, "ȷ", "ȷ"), d3(G, w, B, "ı", "\\i", true), d3(G, w, B, "ȷ", "\\j", true), d3(G, w, B, "ß", "\\ss", true), d3(G, w, B, "æ", "\\ae", true), d3(G, w, B, "œ", "\\oe", true), d3(G, w, B, "ø", "\\o", true), d3(G, w, B, "Æ", "\\AE", true), d3(G, w, B, "Œ", "\\OE", true), d3(G, w, B, "Ø", "\\O", true), d3(G, w, Re, "ˊ", "\\'"), d3(G, w, Re, "ˋ", "\\`"), d3(G, w, Re, "ˆ", "\\^"), d3(G, w, Re, "˜", "\\~"), d3(G, w, Re, "ˉ", "\\="), d3(G, w, Re, "˘", "\\u"), d3(G, w, Re, "˙", "\\."), d3(G, w, Re, "¸", "\\c"), d3(G, w, Re, "˚", "\\r"), d3(G, w, Re, "ˇ", "\\v"), d3(G, w, Re, "¨", '\\"'), d3(G, w, Re, "˝", "\\H"), d3(G, w, Re, "◯", "\\textcircled");
          const aa = {
            "--": true,
            "---": true,
            "``": true,
            "''": true
          };
          d3(G, w, B, "–", "--", true), d3(G, w, B, "–", "\\textendash"), d3(G, w, B, "—", "---", true), d3(G, w, B, "—", "\\textemdash"), d3(G, w, B, "‘", "`", true), d3(G, w, B, "‘", "\\textquoteleft"), d3(G, w, B, "’", "'", true), d3(G, w, B, "’", "\\textquoteright"), d3(G, w, B, "“", "``", true), d3(G, w, B, "“", "\\textquotedblleft"), d3(G, w, B, "”", "''", true), d3(G, w, B, "”", "\\textquotedblright"), d3(g, w, B, "°", "\\degree", true), d3(G, w, B, "°", "\\degree"), d3(G, w, B, "°", "\\textdegree", true), d3(g, w, B, "£", "\\pounds"), d3(g, w, B, "£", "\\mathsterling", true), d3(G, w, B, "£", "\\pounds"), d3(G, w, B, "£", "\\textsterling", true), d3(g, M, B, "✠", "\\maltese"), d3(G, M, B, "✠", "\\maltese");
          const oa = '0123456789/@."';
          for (let i = 0; i < oa.length; i++) {
            const s = oa.charAt(i);
            d3(g, w, B, s, s);
          }
          const la = '0123456789!@*()-=+";:?/.,';
          for (let i = 0; i < la.length; i++) {
            const s = la.charAt(i);
            d3(G, w, B, s, s);
          }
          const Dr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
          for (let i = 0; i < Dr.length; i++) {
            const s = Dr.charAt(i);
            d3(g, w, he, s, s), d3(G, w, B, s, s);
          }
          d3(g, M, B, "C", "ℂ"), d3(G, M, B, "C", "ℂ"), d3(g, M, B, "H", "ℍ"), d3(G, M, B, "H", "ℍ"), d3(g, M, B, "N", "ℕ"), d3(G, M, B, "N", "ℕ"), d3(g, M, B, "P", "ℙ"), d3(G, M, B, "P", "ℙ"), d3(g, M, B, "Q", "ℚ"), d3(G, M, B, "Q", "ℚ"), d3(g, M, B, "R", "ℝ"), d3(G, M, B, "R", "ℝ"), d3(g, M, B, "Z", "ℤ"), d3(G, M, B, "Z", "ℤ"), d3(g, w, he, "h", "ℎ"), d3(G, w, he, "h", "ℎ");
          let me = "";
          for (let i = 0; i < Dr.length; i++) {
            const s = Dr.charAt(i);
            me = String.fromCharCode(55349, 56320 + i), d3(g, w, he, s, me), d3(G, w, B, s, me), me = String.fromCharCode(55349, 56372 + i), d3(g, w, he, s, me), d3(G, w, B, s, me), me = String.fromCharCode(55349, 56424 + i), d3(g, w, he, s, me), d3(G, w, B, s, me), me = String.fromCharCode(55349, 56580 + i), d3(g, w, he, s, me), d3(G, w, B, s, me), me = String.fromCharCode(55349, 56684 + i), d3(g, w, he, s, me), d3(G, w, B, s, me), me = String.fromCharCode(55349, 56736 + i), d3(g, w, he, s, me), d3(G, w, B, s, me), me = String.fromCharCode(55349, 56788 + i), d3(g, w, he, s, me), d3(G, w, B, s, me), me = String.fromCharCode(55349, 56840 + i), d3(g, w, he, s, me), d3(G, w, B, s, me), me = String.fromCharCode(55349, 56944 + i), d3(g, w, he, s, me), d3(G, w, B, s, me), i < 26 && (me = String.fromCharCode(55349, 56632 + i), d3(g, w, he, s, me), d3(G, w, B, s, me), me = String.fromCharCode(55349, 56476 + i), d3(g, w, he, s, me), d3(G, w, B, s, me));
          }
          me = "𝕜", d3(g, w, he, "k", me), d3(G, w, B, "k", me);
          for (let i = 0; i < 10; i++) {
            const s = i.toString();
            me = String.fromCharCode(55349, 57294 + i), d3(g, w, he, s, me), d3(G, w, B, s, me), me = String.fromCharCode(55349, 57314 + i), d3(g, w, he, s, me), d3(G, w, B, s, me), me = String.fromCharCode(55349, 57324 + i), d3(g, w, he, s, me), d3(G, w, B, s, me), me = String.fromCharCode(55349, 57334 + i), d3(g, w, he, s, me), d3(G, w, B, s, me);
          }
          const Gs = "ÐÞþ";
          for (let i = 0; i < Gs.length; i++) {
            const s = Gs.charAt(i);
            d3(g, w, he, s, s), d3(G, w, B, s, s);
          }
          const Lr = [
            ["mathbf", "textbf", "Main-Bold"],
            // A-Z bold upright
            ["mathbf", "textbf", "Main-Bold"],
            // a-z bold upright
            ["mathnormal", "textit", "Math-Italic"],
            // A-Z italic
            ["mathnormal", "textit", "Math-Italic"],
            // a-z italic
            ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
            // A-Z bold italic
            ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
            // a-z bold italic
            // Map fancy A-Z letters to script, not calligraphic.
            // This aligns with unicode-math and math fonts (except Cambria Math).
            ["mathscr", "textscr", "Script-Regular"],
            // A-Z script
            ["", "", ""],
            // a-z script.  No font
            ["", "", ""],
            // A-Z bold script. No font
            ["", "", ""],
            // a-z bold script. No font
            ["mathfrak", "textfrak", "Fraktur-Regular"],
            // A-Z Fraktur
            ["mathfrak", "textfrak", "Fraktur-Regular"],
            // a-z Fraktur
            ["mathbb", "textbb", "AMS-Regular"],
            // A-Z double-struck
            ["mathbb", "textbb", "AMS-Regular"],
            // k double-struck
            // Note that we are using a bold font, but font metrics for regular Fraktur.
            ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
            // A-Z bold Fraktur
            ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
            // a-z bold Fraktur
            ["mathsf", "textsf", "SansSerif-Regular"],
            // A-Z sans-serif
            ["mathsf", "textsf", "SansSerif-Regular"],
            // a-z sans-serif
            ["mathboldsf", "textboldsf", "SansSerif-Bold"],
            // A-Z bold sans-serif
            ["mathboldsf", "textboldsf", "SansSerif-Bold"],
            // a-z bold sans-serif
            ["mathitsf", "textitsf", "SansSerif-Italic"],
            // A-Z italic sans-serif
            ["mathitsf", "textitsf", "SansSerif-Italic"],
            // a-z italic sans-serif
            ["", "", ""],
            // A-Z bold italic sans. No font
            ["", "", ""],
            // a-z bold italic sans. No font
            ["mathtt", "texttt", "Typewriter-Regular"],
            // A-Z monospace
            ["mathtt", "texttt", "Typewriter-Regular"]
            // a-z monospace
          ], ca = [
            ["mathbf", "textbf", "Main-Bold"],
            // 0-9 bold
            ["", "", ""],
            // 0-9 double-struck. No KaTeX font.
            ["mathsf", "textsf", "SansSerif-Regular"],
            // 0-9 sans-serif
            ["mathboldsf", "textboldsf", "SansSerif-Bold"],
            // 0-9 bold sans-serif
            ["mathtt", "texttt", "Typewriter-Regular"]
            // 0-9 monospace
          ], Au = function(i, s) {
            const o = i.charCodeAt(0), c3 = i.charCodeAt(1), h3 = (o - 55296) * 1024 + (c3 - 56320) + 65536, m = s === "math" ? 0 : 1;
            if (119808 <= h3 && h3 < 120484) {
              const b = Math.floor((h3 - 119808) / 26);
              return [Lr[b][2], Lr[b][m]];
            } else if (120782 <= h3 && h3 <= 120831) {
              const b = Math.floor((h3 - 120782) / 10);
              return [ca[b][2], ca[b][m]];
            } else {
              if (h3 === 120485 || h3 === 120486)
                return [Lr[0][2], Lr[0][m]];
              if (120486 < h3 && h3 < 120782)
                return ["", ""];
              throw new l3("Unsupported character: " + i);
            }
          }, qr = function(i, s, o) {
            return Fe[o][i] && Fe[o][i].replace && (i = Fe[o][i].replace), {
              value: i,
              metrics: Fs(i, s, o)
            };
          }, _t = function(i, s, o, c3, h3) {
            const m = qr(i, s, o), b = m.metrics;
            i = m.value;
            let x;
            if (b) {
              let A = b.italic;
              (o === "text" || c3 && c3.font === "mathit") && (A = 0), x = new wt(i, b.height, b.depth, A, b.skew, b.width, h3);
            } else
              typeof console < "u" && console.warn("No character metrics " + ("for '" + i + "' in style '" + s + "' and mode '" + o + "'")), x = new wt(i, 0, 0, 0, 0, 0, h3);
            if (c3) {
              x.maxFontSize = c3.sizeMultiplier, c3.style.isTight() && x.classes.push("mtight");
              const A = c3.getColor();
              A && (x.style.color = A);
            }
            return x;
          }, Tu = function(i, s, o, c3) {
            return c3 === void 0 && (c3 = []), o.font === "boldsymbol" && qr(i, "Main-Bold", s).metrics ? _t(i, "Main-Bold", s, o, c3.concat(["mathbf"])) : i === "\\" || Fe[s][i].font === "main" ? _t(i, "Main-Regular", s, o, c3) : _t(i, "AMS-Regular", s, o, c3.concat(["amsrm"]));
          }, Nu = function(i, s, o, c3, h3) {
            return h3 !== "textord" && qr(i, "Math-BoldItalic", s).metrics ? {
              fontName: "Math-BoldItalic",
              fontClass: "boldsymbol"
            } : {
              fontName: "Main-Bold",
              fontClass: "mathbf"
            };
          }, Mu = function(i, s, o) {
            const c3 = i.mode, h3 = i.text, m = ["mord"], b = c3 === "math" || c3 === "text" && s.font, x = b ? s.font : s.fontFamily;
            let A = "", z = "";
            if (h3.charCodeAt(0) === 55349 && ([A, z] = Au(h3, c3)), A.length > 0)
              return _t(h3, A, c3, s, m.concat(z));
            if (x) {
              let D, L;
              if (x === "boldsymbol") {
                const P = Nu(h3, c3, s, m, o);
                D = P.fontName, L = [P.fontClass];
              } else
                b ? (D = fa[x].fontName, L = [x]) : (D = Rr(x, s.fontWeight, s.fontShape), L = [x, s.fontWeight, s.fontShape]);
              if (qr(h3, D, c3).metrics)
                return _t(h3, D, c3, s, m.concat(L));
              if (aa.hasOwnProperty(h3) && D.slice(0, 10) === "Typewriter") {
                const P = [];
                for (let U = 0; U < h3.length; U++)
                  P.push(_t(h3[U], D, c3, s, m.concat(L)));
                return ha(P);
              }
            }
            if (o === "mathord")
              return _t(h3, "Math-Italic", c3, s, m.concat(["mathnormal"]));
            if (o === "textord") {
              const D = Fe[c3][h3] && Fe[c3][h3].font;
              if (D === "ams") {
                const L = Rr("amsrm", s.fontWeight, s.fontShape);
                return _t(h3, L, c3, s, m.concat("amsrm", s.fontWeight, s.fontShape));
              } else if (D === "main" || !D) {
                const L = Rr("textrm", s.fontWeight, s.fontShape);
                return _t(h3, L, c3, s, m.concat(s.fontWeight, s.fontShape));
              } else {
                const L = Rr(D, s.fontWeight, s.fontShape);
                return _t(h3, L, c3, s, m.concat(L, s.fontWeight, s.fontShape));
              }
            } else
              throw new Error("unexpected type: " + o + " in makeOrd");
          }, Eu = (i, s) => {
            if (Jt(i.classes) !== Jt(s.classes) || i.skew !== s.skew || i.maxFontSize !== s.maxFontSize)
              return false;
            if (i.classes.length === 1) {
              const o = i.classes[0];
              if (o === "mbin" || o === "mord")
                return false;
            }
            for (const o in i.style)
              if (i.style.hasOwnProperty(o) && i.style[o] !== s.style[o])
                return false;
            for (const o in s.style)
              if (s.style.hasOwnProperty(o) && i.style[o] !== s.style[o])
                return false;
            return true;
          }, _u = (i) => {
            for (let s = 0; s < i.length - 1; s++) {
              const o = i[s], c3 = i[s + 1];
              o instanceof wt && c3 instanceof wt && Eu(o, c3) && (o.text += c3.text, o.height = Math.max(o.height, c3.height), o.depth = Math.max(o.depth, c3.depth), o.italic = c3.italic, i.splice(s + 1, 1), s--);
            }
            return i;
          }, Ks = function(i) {
            let s = 0, o = 0, c3 = 0;
            for (let h3 = 0; h3 < i.children.length; h3++) {
              const m = i.children[h3];
              m.height > s && (s = m.height), m.depth > o && (o = m.depth), m.maxFontSize > c3 && (c3 = m.maxFontSize);
            }
            i.height = s, i.depth = o, i.maxFontSize = c3;
          }, ht = function(i, s, o, c3) {
            const h3 = new Jn(i, s, o, c3);
            return Ks(h3), h3;
          }, ua = (i, s, o, c3) => new Jn(i, s, o, c3), Cu = function(i, s, o) {
            const c3 = ht([i], [], s);
            return c3.height = Math.max(o || s.fontMetrics().defaultRuleThickness, s.minRuleThickness), c3.style.borderBottomWidth = Q(c3.height), c3.maxFontSize = 1, c3;
          }, Iu = function(i, s, o, c3) {
            const h3 = new Vs(i, s, o, c3);
            return Ks(h3), h3;
          }, ha = function(i) {
            const s = new Yn(i);
            return Ks(s), s;
          }, zu = function(i, s) {
            return i instanceof Yn ? ht([], [i], s) : i;
          }, Ou = function(i) {
            if (i.positionType === "individualShift") {
              const o = i.children, c3 = [o[0]], h3 = -o[0].shift - o[0].elem.depth;
              let m = h3;
              for (let b = 1; b < o.length; b++) {
                const x = -o[b].shift - m - o[b].elem.depth, A = x - (o[b - 1].elem.height + o[b - 1].elem.depth);
                m = m + x, c3.push({
                  type: "kern",
                  size: A
                }), c3.push(o[b]);
              }
              return {
                children: c3,
                depth: h3
              };
            }
            let s;
            if (i.positionType === "top") {
              let o = i.positionData;
              for (let c3 = 0; c3 < i.children.length; c3++) {
                const h3 = i.children[c3];
                o -= h3.type === "kern" ? h3.size : h3.elem.height + h3.elem.depth;
              }
              s = o;
            } else if (i.positionType === "bottom")
              s = -i.positionData;
            else {
              const o = i.children[0];
              if (o.type !== "elem")
                throw new Error('First child must have type "elem".');
              if (i.positionType === "shift")
                s = -o.elem.depth - i.positionData;
              else if (i.positionType === "firstBaseline")
                s = -o.elem.depth;
              else
                throw new Error("Invalid positionType " + i.positionType + ".");
            }
            return {
              children: i.children,
              depth: s
            };
          }, Bu = function(i, s) {
            const {
              children: o,
              depth: c3
            } = Ou(i);
            let h3 = 0;
            for (let U = 0; U < o.length; U++) {
              const re = o[U];
              if (re.type === "elem") {
                const oe = re.elem;
                h3 = Math.max(h3, oe.maxFontSize, oe.height);
              }
            }
            h3 += 2;
            const m = ht(["pstrut"], []);
            m.style.height = Q(h3);
            const b = [];
            let x = c3, A = c3, z = c3;
            for (let U = 0; U < o.length; U++) {
              const re = o[U];
              if (re.type === "kern")
                z += re.size;
              else {
                const oe = re.elem, Ne = re.wrapperClasses || [], Se = re.wrapperStyle || {}, Me = ht(Ne, [m, oe], void 0, Se);
                Me.style.top = Q(-h3 - z - oe.depth), re.marginLeft && (Me.style.marginLeft = re.marginLeft), re.marginRight && (Me.style.marginRight = re.marginRight), b.push(Me), z += oe.height + oe.depth;
              }
              x = Math.min(x, z), A = Math.max(A, z);
            }
            const D = ht(["vlist"], b);
            D.style.height = Q(A);
            let L;
            if (x < 0) {
              const U = ht([], []), re = ht(["vlist"], [U]);
              re.style.height = Q(-x);
              const oe = ht(["vlist-s"], [new wt("​")]);
              L = [ht(["vlist-r"], [D, oe]), ht(["vlist-r"], [re])];
            } else
              L = [ht(["vlist-r"], [D])];
            const P = ht(["vlist-t"], L);
            return L.length === 2 && P.classes.push("vlist-t2"), P.height = A, P.depth = -x, P;
          }, Du = (i, s) => {
            const o = ht(["mspace"], [], s), c3 = Pe(i, s);
            return o.style.marginRight = Q(c3), o;
          }, Rr = function(i, s, o) {
            let c3 = "";
            switch (i) {
              case "amsrm":
                c3 = "AMS";
                break;
              case "textrm":
                c3 = "Main";
                break;
              case "textsf":
                c3 = "SansSerif";
                break;
              case "texttt":
                c3 = "Typewriter";
                break;
              default:
                c3 = i;
            }
            let h3;
            return s === "textbf" && o === "textit" ? h3 = "BoldItalic" : s === "textbf" ? h3 = "Bold" : s === "textit" ? h3 = "Italic" : h3 = "Regular", c3 + "-" + h3;
          }, fa = {
            // styles
            mathbf: {
              variant: "bold",
              fontName: "Main-Bold"
            },
            mathrm: {
              variant: "normal",
              fontName: "Main-Regular"
            },
            textit: {
              variant: "italic",
              fontName: "Main-Italic"
            },
            mathit: {
              variant: "italic",
              fontName: "Main-Italic"
            },
            mathnormal: {
              variant: "italic",
              fontName: "Math-Italic"
            },
            mathsfit: {
              variant: "sans-serif-italic",
              fontName: "SansSerif-Italic"
            },
            // "boldsymbol" is missing because they require the use of multiple fonts:
            // Math-BoldItalic and Main-Bold.  This is handled by a special case in
            // makeOrd which ends up calling boldsymbol.
            // families
            mathbb: {
              variant: "double-struck",
              fontName: "AMS-Regular"
            },
            mathcal: {
              variant: "script",
              fontName: "Caligraphic-Regular"
            },
            mathfrak: {
              variant: "fraktur",
              fontName: "Fraktur-Regular"
            },
            mathscr: {
              variant: "script",
              fontName: "Script-Regular"
            },
            mathsf: {
              variant: "sans-serif",
              fontName: "SansSerif-Regular"
            },
            mathtt: {
              variant: "monospace",
              fontName: "Typewriter-Regular"
            }
          }, da = {
            //   path, width, height
            vec: ["vec", 0.471, 0.714],
            // values from the font glyph
            oiintSize1: ["oiintSize1", 0.957, 0.499],
            // oval to overlay the integrand
            oiintSize2: ["oiintSize2", 1.472, 0.659],
            oiiintSize1: ["oiiintSize1", 1.304, 0.499],
            oiiintSize2: ["oiiintSize2", 1.98, 0.659]
          };
          var R = {
            fontMap: fa,
            makeSymbol: _t,
            mathsym: Tu,
            makeSpan: ht,
            makeSvgSpan: ua,
            makeLineSpan: Cu,
            makeAnchor: Iu,
            makeFragment: ha,
            wrapFragment: zu,
            makeVList: Bu,
            makeOrd: Mu,
            makeGlue: Du,
            staticSvg: function(i, s) {
              const [o, c3, h3] = da[i], m = new Qt(o), b = new Ft([m], {
                width: Q(c3),
                height: Q(h3),
                // Override CSS rule `.katex svg { width: 100% }`
                style: "width:" + Q(c3),
                viewBox: "0 0 " + 1e3 * c3 + " " + 1e3 * h3,
                preserveAspectRatio: "xMinYMin"
              }), x = ua(["overlay"], [b], s);
              return x.height = h3, x.style.height = Q(h3), x.style.width = Q(c3), x;
            },
            svgData: da,
            tryCombineChars: _u
          };
          const He = {
            number: 3,
            unit: "mu"
          }, cn = {
            number: 4,
            unit: "mu"
          }, jt = {
            number: 5,
            unit: "mu"
          }, Lu = {
            mord: {
              mop: He,
              mbin: cn,
              mrel: jt,
              minner: He
            },
            mop: {
              mord: He,
              mop: He,
              mrel: jt,
              minner: He
            },
            mbin: {
              mord: cn,
              mop: cn,
              mopen: cn,
              minner: cn
            },
            mrel: {
              mord: jt,
              mop: jt,
              mopen: jt,
              minner: jt
            },
            mopen: {},
            mclose: {
              mop: He,
              mbin: cn,
              mrel: jt,
              minner: He
            },
            mpunct: {
              mord: He,
              mop: He,
              mrel: jt,
              mopen: He,
              mclose: He,
              mpunct: He,
              minner: He
            },
            minner: {
              mord: He,
              mop: He,
              mbin: cn,
              mrel: jt,
              mopen: He,
              mpunct: He,
              minner: He
            }
          }, qu = {
            mord: {
              mop: He
            },
            mop: {
              mord: He,
              mop: He
            },
            mbin: {},
            mrel: {},
            mopen: {},
            mclose: {
              mop: He
            },
            mpunct: {},
            minner: {
              mop: He
            }
          }, ma = {}, $r = {}, Pr = {};
          function te(i) {
            let {
              type: s,
              names: o,
              props: c3,
              handler: h3,
              htmlBuilder: m,
              mathmlBuilder: b
            } = i;
            const x = {
              type: s,
              numArgs: c3.numArgs,
              argTypes: c3.argTypes,
              allowedInArgument: !!c3.allowedInArgument,
              allowedInText: !!c3.allowedInText,
              allowedInMath: c3.allowedInMath === void 0 ? true : c3.allowedInMath,
              numOptionalArgs: c3.numOptionalArgs || 0,
              infix: !!c3.infix,
              primitive: !!c3.primitive,
              handler: h3
            };
            for (let A = 0; A < o.length; ++A)
              ma[o[A]] = x;
            s && (m && ($r[s] = m), b && (Pr[s] = b));
          }
          function un(i) {
            let {
              type: s,
              htmlBuilder: o,
              mathmlBuilder: c3
            } = i;
            te({
              type: s,
              names: [],
              props: {
                numArgs: 0
              },
              handler() {
                throw new Error("Should never be called.");
              },
              htmlBuilder: o,
              mathmlBuilder: c3
            });
          }
          const Fr = function(i) {
            return i.type === "ordgroup" && i.body.length === 1 ? i.body[0] : i;
          }, Ke = function(i) {
            return i.type === "ordgroup" ? i.body : [i];
          }, Vt2 = R.makeSpan, Ru = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], $u = ["rightmost", "mrel", "mclose", "mpunct"], Pu = {
            display: Z.DISPLAY,
            text: Z.TEXT,
            script: Z.SCRIPT,
            scriptscript: Z.SCRIPTSCRIPT
          }, Fu = {
            mord: "mord",
            mop: "mop",
            mbin: "mbin",
            mrel: "mrel",
            mopen: "mopen",
            mclose: "mclose",
            mpunct: "mpunct",
            minner: "minner"
          }, Ze = function(i, s, o, c3) {
            c3 === void 0 && (c3 = [null, null]);
            const h3 = [];
            for (let z = 0; z < i.length; z++) {
              const D = Ee(i[z], s);
              if (D instanceof Yn) {
                const L = D.children;
                h3.push(...L);
              } else
                h3.push(D);
            }
            if (R.tryCombineChars(h3), !o)
              return h3;
            let m = s;
            if (i.length === 1) {
              const z = i[0];
              z.type === "sizing" ? m = s.havingSize(z.size) : z.type === "styling" && (m = s.havingStyle(Pu[z.style]));
            }
            const b = Vt2([c3[0] || "leftmost"], [], s), x = Vt2([c3[1] || "rightmost"], [], s), A = o === "root";
            return Xs(h3, (z, D) => {
              const L = D.classes[0], P = z.classes[0];
              L === "mbin" && I3.contains($u, P) ? D.classes[0] = "mord" : P === "mbin" && I3.contains(Ru, L) && (z.classes[0] = "mord");
            }, {
              node: b
            }, x, A), Xs(h3, (z, D) => {
              const L = Ys(D), P = Ys(z), U = L && P ? z.hasClass("mtight") ? qu[L][P] : Lu[L][P] : null;
              if (U)
                return R.makeGlue(U, m);
            }, {
              node: b
            }, x, A), h3;
          }, Xs = function(i, s, o, c3, h3) {
            c3 && i.push(c3);
            let m = 0;
            for (; m < i.length; m++) {
              const b = i[m], x = pa(b);
              if (x) {
                Xs(x.children, s, o, null, h3);
                continue;
              }
              const A = !b.hasClass("mspace");
              if (A) {
                const z = s(b, o.node);
                z && (o.insertAfter ? o.insertAfter(z) : (i.unshift(z), m++));
              }
              A ? o.node = b : h3 && b.hasClass("newline") && (o.node = Vt2(["leftmost"])), o.insertAfter = /* @__PURE__ */ ((z) => (D) => {
                i.splice(z + 1, 0, D), m++;
              })(m);
            }
            c3 && i.pop();
          }, pa = function(i) {
            return i instanceof Yn || i instanceof Vs || i instanceof Jn && i.hasClass("enclosing") ? i : null;
          }, Ws = function(i, s) {
            const o = pa(i);
            if (o) {
              const c3 = o.children;
              if (c3.length) {
                if (s === "right")
                  return Ws(c3[c3.length - 1], "right");
                if (s === "left")
                  return Ws(c3[0], "left");
              }
            }
            return i;
          }, Ys = function(i, s) {
            return i ? (s && (i = Ws(i, s)), Fu[i.classes[0]] || null) : null;
          }, Qn = function(i, s) {
            const o = ["nulldelimiter"].concat(i.baseSizingClasses());
            return Vt2(s.concat(o));
          }, Ee = function(i, s, o) {
            if (!i)
              return Vt2();
            if ($r[i.type]) {
              let c3 = $r[i.type](i, s);
              if (o && s.size !== o.size) {
                c3 = Vt2(s.sizingClasses(o), [c3], s);
                const h3 = s.sizeMultiplier / o.sizeMultiplier;
                c3.height *= h3, c3.depth *= h3;
              }
              return c3;
            } else
              throw new l3("Got group of unknown type: '" + i.type + "'");
          };
          function Hr(i, s) {
            const o = Vt2(["base"], i, s), c3 = Vt2(["strut"]);
            return c3.style.height = Q(o.height + o.depth), o.depth && (c3.style.verticalAlign = Q(-o.depth)), o.children.unshift(c3), o;
          }
          function Js(i, s) {
            let o = null;
            i.length === 1 && i[0].type === "tag" && (o = i[0].tag, i = i[0].body);
            const c3 = Ze(i, s, "root");
            let h3;
            c3.length === 2 && c3[1].hasClass("tag") && (h3 = c3.pop());
            const m = [];
            let b = [];
            for (let z = 0; z < c3.length; z++)
              if (b.push(c3[z]), c3[z].hasClass("mbin") || c3[z].hasClass("mrel") || c3[z].hasClass("allowbreak")) {
                let D = false;
                for (; z < c3.length - 1 && c3[z + 1].hasClass("mspace") && !c3[z + 1].hasClass("newline"); )
                  z++, b.push(c3[z]), c3[z].hasClass("nobreak") && (D = true);
                D || (m.push(Hr(b, s)), b = []);
              } else
                c3[z].hasClass("newline") && (b.pop(), b.length > 0 && (m.push(Hr(b, s)), b = []), m.push(c3[z]));
            b.length > 0 && m.push(Hr(b, s));
            let x;
            o ? (x = Hr(Ze(o, s, true)), x.classes = ["tag"], m.push(x)) : h3 && m.push(h3);
            const A = Vt2(["katex-html"], m);
            if (A.setAttribute("aria-hidden", "true"), x) {
              const z = x.children[0];
              z.style.height = Q(A.height + A.depth), A.depth && (z.style.verticalAlign = Q(-A.depth));
            }
            return A;
          }
          function ga(i) {
            return new Yn(i);
          }
          class gt2 {
            constructor(s, o, c3) {
              this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = s, this.attributes = {}, this.children = o || [], this.classes = c3 || [];
            }
            /**
             * Sets an attribute on a MathML node. MathML depends on attributes to convey a
             * semantic content, so this is used heavily.
             */
            setAttribute(s, o) {
              this.attributes[s] = o;
            }
            /**
             * Gets an attribute on a MathML node.
             */
            getAttribute(s) {
              return this.attributes[s];
            }
            /**
             * Converts the math node into a MathML-namespaced DOM element.
             */
            toNode() {
              const s = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
              for (const o in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, o) && s.setAttribute(o, this.attributes[o]);
              this.classes.length > 0 && (s.className = Jt(this.classes));
              for (let o = 0; o < this.children.length; o++)
                if (this.children[o] instanceof Ot && this.children[o + 1] instanceof Ot) {
                  let c3 = this.children[o].toText() + this.children[++o].toText();
                  for (; this.children[o + 1] instanceof Ot; )
                    c3 += this.children[++o].toText();
                  s.appendChild(new Ot(c3).toNode());
                } else
                  s.appendChild(this.children[o].toNode());
              return s;
            }
            /**
             * Converts the math node into an HTML markup string.
             */
            toMarkup() {
              let s = "<" + this.type;
              for (const o in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, o) && (s += " " + o + '="', s += I3.escape(this.attributes[o]), s += '"');
              this.classes.length > 0 && (s += ' class ="' + I3.escape(Jt(this.classes)) + '"'), s += ">";
              for (let o = 0; o < this.children.length; o++)
                s += this.children[o].toMarkup();
              return s += "</" + this.type + ">", s;
            }
            /**
             * Converts the math node into a string, similar to innerText, but escaped.
             */
            toText() {
              return this.children.map((s) => s.toText()).join("");
            }
          }
          class Ot {
            constructor(s) {
              this.text = void 0, this.text = s;
            }
            /**
             * Converts the text node into a DOM text node.
             */
            toNode() {
              return document.createTextNode(this.text);
            }
            /**
             * Converts the text node into escaped HTML markup
             * (representing the text itself).
             */
            toMarkup() {
              return I3.escape(this.toText());
            }
            /**
             * Converts the text node into a string
             * (representing the text itself).
             */
            toText() {
              return this.text;
            }
          }
          class Hu {
            /**
             * Create a Space node with width given in CSS ems.
             */
            constructor(s) {
              this.width = void 0, this.character = void 0, this.width = s, s >= 0.05555 && s <= 0.05556 ? this.character = " " : s >= 0.1666 && s <= 0.1667 ? this.character = " " : s >= 0.2222 && s <= 0.2223 ? this.character = " " : s >= 0.2777 && s <= 0.2778 ? this.character = "  " : s >= -0.05556 && s <= -0.05555 ? this.character = " ⁣" : s >= -0.1667 && s <= -0.1666 ? this.character = " ⁣" : s >= -0.2223 && s <= -0.2222 ? this.character = " ⁣" : s >= -0.2778 && s <= -0.2777 ? this.character = " ⁣" : this.character = null;
            }
            /**
             * Converts the math node into a MathML-namespaced DOM element.
             */
            toNode() {
              if (this.character)
                return document.createTextNode(this.character);
              {
                const s = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
                return s.setAttribute("width", Q(this.width)), s;
              }
            }
            /**
             * Converts the math node into an HTML markup string.
             */
            toMarkup() {
              return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + Q(this.width) + '"/>';
            }
            /**
             * Converts the math node into a string, similar to innerText.
             */
            toText() {
              return this.character ? this.character : " ";
            }
          }
          var Y = {
            MathNode: gt2,
            TextNode: Ot,
            SpaceNode: Hu,
            newDocumentFragment: ga
          };
          const xt = function(i, s, o) {
            return Fe[s][i] && Fe[s][i].replace && i.charCodeAt(0) !== 55349 && !(aa.hasOwnProperty(i) && o && (o.fontFamily && o.fontFamily.slice(4, 6) === "tt" || o.font && o.font.slice(4, 6) === "tt")) && (i = Fe[s][i].replace), new Y.TextNode(i);
          }, Qs = function(i) {
            return i.length === 1 ? i[0] : new Y.MathNode("mrow", i);
          }, Zs = function(i, s) {
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
            const o = s.font;
            if (!o || o === "mathnormal")
              return null;
            const c3 = i.mode;
            if (o === "mathit")
              return "italic";
            if (o === "boldsymbol")
              return i.type === "textord" ? "bold" : "bold-italic";
            if (o === "mathbf")
              return "bold";
            if (o === "mathbb")
              return "double-struck";
            if (o === "mathsfit")
              return "sans-serif-italic";
            if (o === "mathfrak")
              return "fraktur";
            if (o === "mathscr" || o === "mathcal")
              return "script";
            if (o === "mathsf")
              return "sans-serif";
            if (o === "mathtt")
              return "monospace";
            let h3 = i.text;
            if (I3.contains(["\\imath", "\\jmath"], h3))
              return null;
            Fe[c3][h3] && Fe[c3][h3].replace && (h3 = Fe[c3][h3].replace);
            const m = R.fontMap[o].fontName;
            return Fs(h3, m, c3) ? R.fontMap[o].variant : null;
          };
          function ei(i) {
            if (!i)
              return false;
            if (i.type === "mi" && i.children.length === 1) {
              const s = i.children[0];
              return s instanceof Ot && s.text === ".";
            } else if (i.type === "mo" && i.children.length === 1 && i.getAttribute("separator") === "true" && i.getAttribute("lspace") === "0em" && i.getAttribute("rspace") === "0em") {
              const s = i.children[0];
              return s instanceof Ot && s.text === ",";
            } else
              return false;
          }
          const ft = function(i, s, o) {
            if (i.length === 1) {
              const m = Be(i[0], s);
              return o && m instanceof gt2 && m.type === "mo" && (m.setAttribute("lspace", "0em"), m.setAttribute("rspace", "0em")), [m];
            }
            const c3 = [];
            let h3;
            for (let m = 0; m < i.length; m++) {
              const b = Be(i[m], s);
              if (b instanceof gt2 && h3 instanceof gt2) {
                if (b.type === "mtext" && h3.type === "mtext" && b.getAttribute("mathvariant") === h3.getAttribute("mathvariant")) {
                  h3.children.push(...b.children);
                  continue;
                } else if (b.type === "mn" && h3.type === "mn") {
                  h3.children.push(...b.children);
                  continue;
                } else if (ei(b) && h3.type === "mn") {
                  h3.children.push(...b.children);
                  continue;
                } else if (b.type === "mn" && ei(h3))
                  b.children = [...h3.children, ...b.children], c3.pop();
                else if ((b.type === "msup" || b.type === "msub") && b.children.length >= 1 && (h3.type === "mn" || ei(h3))) {
                  const x = b.children[0];
                  x instanceof gt2 && x.type === "mn" && (x.children = [...h3.children, ...x.children], c3.pop());
                } else if (h3.type === "mi" && h3.children.length === 1) {
                  const x = h3.children[0];
                  if (x instanceof Ot && x.text === "̸" && (b.type === "mo" || b.type === "mi" || b.type === "mn")) {
                    const A = b.children[0];
                    A instanceof Ot && A.text.length > 0 && (A.text = A.text.slice(0, 1) + "̸" + A.text.slice(1), c3.pop());
                  }
                }
              }
              c3.push(b), h3 = b;
            }
            return c3;
          }, Zt = function(i, s, o) {
            return Qs(ft(i, s, o));
          }, Be = function(i, s) {
            if (!i)
              return new Y.MathNode("mrow");
            if (Pr[i.type])
              return Pr[i.type](i, s);
            throw new l3("Got group of unknown type: '" + i.type + "'");
          };
          function ya(i, s, o, c3, h3) {
            const m = ft(i, o);
            let b;
            m.length === 1 && m[0] instanceof gt2 && I3.contains(["mrow", "mtable"], m[0].type) ? b = m[0] : b = new Y.MathNode("mrow", m);
            const x = new Y.MathNode("annotation", [new Y.TextNode(s)]);
            x.setAttribute("encoding", "application/x-tex");
            const A = new Y.MathNode("semantics", [b, x]), z = new Y.MathNode("math", [A]);
            z.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), c3 && z.setAttribute("display", "block");
            const D = h3 ? "katex" : "katex-mathml";
            return R.makeSpan([D], [z]);
          }
          const ba = function(i) {
            return new gu({
              style: i.displayMode ? Z.DISPLAY : Z.TEXT,
              maxSize: i.maxSize,
              minRuleThickness: i.minRuleThickness
            });
          }, wa = function(i, s) {
            if (s.displayMode) {
              const o = ["katex-display"];
              s.leqno && o.push("leqno"), s.fleqn && o.push("fleqn"), i = R.makeSpan(o, [i]);
            }
            return i;
          }, ju = function(i, s, o) {
            const c3 = ba(o);
            let h3;
            if (o.output === "mathml")
              return ya(i, s, c3, o.displayMode, true);
            if (o.output === "html") {
              const m = Js(i, c3);
              h3 = R.makeSpan(["katex"], [m]);
            } else {
              const m = ya(i, s, c3, o.displayMode, false), b = Js(i, c3);
              h3 = R.makeSpan(["katex"], [m, b]);
            }
            return wa(h3, o);
          }, Vu = function(i, s, o) {
            const c3 = ba(o), h3 = Js(i, c3), m = R.makeSpan(["katex"], [h3]);
            return wa(m, o);
          }, Uu = {
            widehat: "^",
            widecheck: "ˇ",
            widetilde: "~",
            utilde: "~",
            overleftarrow: "←",
            underleftarrow: "←",
            xleftarrow: "←",
            overrightarrow: "→",
            underrightarrow: "→",
            xrightarrow: "→",
            underbrace: "⏟",
            overbrace: "⏞",
            overgroup: "⏠",
            undergroup: "⏡",
            overleftrightarrow: "↔",
            underleftrightarrow: "↔",
            xleftrightarrow: "↔",
            Overrightarrow: "⇒",
            xRightarrow: "⇒",
            overleftharpoon: "↼",
            xleftharpoonup: "↼",
            overrightharpoon: "⇀",
            xrightharpoonup: "⇀",
            xLeftarrow: "⇐",
            xLeftrightarrow: "⇔",
            xhookleftarrow: "↩",
            xhookrightarrow: "↪",
            xmapsto: "↦",
            xrightharpoondown: "⇁",
            xleftharpoondown: "↽",
            xrightleftharpoons: "⇌",
            xleftrightharpoons: "⇋",
            xtwoheadleftarrow: "↞",
            xtwoheadrightarrow: "↠",
            xlongequal: "=",
            xtofrom: "⇄",
            xrightleftarrows: "⇄",
            xrightequilibrium: "⇌",
            // Not a perfect match.
            xleftequilibrium: "⇋",
            // None better available.
            "\\cdrightarrow": "→",
            "\\cdleftarrow": "←",
            "\\cdlongequal": "="
          }, Gu = function(i) {
            const s = new Y.MathNode("mo", [new Y.TextNode(Uu[i.replace(/^\\/, "")])]);
            return s.setAttribute("stretchy", "true"), s;
          }, Ku = {
            //   path(s), minWidth, height, align
            overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
            overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
            underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
            underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
            xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
            "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
            // CD minwwidth2.5pc
            xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
            "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
            Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
            xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
            xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
            overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
            xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
            xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
            overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
            xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
            xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
            xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
            "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
            xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
            xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
            overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
            overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
            underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
            underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
            xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
            xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
            xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
            xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
            xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
            xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
            overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
            underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
            overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
            undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
            xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
            xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
            // The next three arrows are from the mhchem package.
            // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
            // document as \xrightarrow or \xrightleftharpoons. Those have
            // min-length = 1.75em, so we set min-length on these next three to match.
            xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
            xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
            xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
          }, Xu = function(i) {
            return i.type === "ordgroup" ? i.body.length : 1;
          };
          var Ut = {
            encloseSpan: function(i, s, o, c3, h3) {
              let m;
              const b = i.height + i.depth + o + c3;
              if (/fbox|color|angl/.test(s)) {
                if (m = R.makeSpan(["stretchy", s], [], h3), s === "fbox") {
                  const x = h3.color && h3.getColor();
                  x && (m.style.borderColor = x);
                }
              } else {
                const x = [];
                /^[bx]cancel$/.test(s) && x.push(new Us({
                  x1: "0",
                  y1: "0",
                  x2: "100%",
                  y2: "100%",
                  "stroke-width": "0.046em"
                })), /^x?cancel$/.test(s) && x.push(new Us({
                  x1: "0",
                  y1: "100%",
                  x2: "100%",
                  y2: "0",
                  "stroke-width": "0.046em"
                }));
                const A = new Ft(x, {
                  width: "100%",
                  height: Q(b)
                });
                m = R.makeSvgSpan([], [A], h3);
              }
              return m.height = b, m.style.height = Q(b), m;
            },
            mathMLnode: Gu,
            svgSpan: function(i, s) {
              function o() {
                let b = 4e5;
                const x = i.label.slice(1);
                if (I3.contains(["widehat", "widecheck", "widetilde", "utilde"], x)) {
                  const z = Xu(i.base);
                  let D, L, P;
                  if (z > 5)
                    x === "widehat" || x === "widecheck" ? (D = 420, b = 2364, P = 0.42, L = x + "4") : (D = 312, b = 2340, P = 0.34, L = "tilde4");
                  else {
                    const oe = [1, 1, 2, 2, 3, 3][z];
                    x === "widehat" || x === "widecheck" ? (b = [0, 1062, 2364, 2364, 2364][oe], D = [0, 239, 300, 360, 420][oe], P = [0, 0.24, 0.3, 0.3, 0.36, 0.42][oe], L = x + oe) : (b = [0, 600, 1033, 2339, 2340][oe], D = [0, 260, 286, 306, 312][oe], P = [0, 0.26, 0.286, 0.3, 0.306, 0.34][oe], L = "tilde" + oe);
                  }
                  const U = new Qt(L), re = new Ft([U], {
                    width: "100%",
                    height: Q(P),
                    viewBox: "0 0 " + b + " " + D,
                    preserveAspectRatio: "none"
                  });
                  return {
                    span: R.makeSvgSpan([], [re], s),
                    minWidth: 0,
                    height: P
                  };
                } else {
                  const A = [], z = Ku[x], [D, L, P] = z, U = P / 1e3, re = D.length;
                  let oe, Ne;
                  if (re === 1) {
                    const Se = z[3];
                    oe = ["hide-tail"], Ne = [Se];
                  } else if (re === 2)
                    oe = ["halfarrow-left", "halfarrow-right"], Ne = ["xMinYMin", "xMaxYMin"];
                  else if (re === 3)
                    oe = ["brace-left", "brace-center", "brace-right"], Ne = ["xMinYMin", "xMidYMin", "xMaxYMin"];
                  else
                    throw new Error(`Correct katexImagesData or update code here to support
                    ` + re + " children.");
                  for (let Se = 0; Se < re; Se++) {
                    const Me = new Qt(D[Se]), Ce = new Ft([Me], {
                      width: "400em",
                      height: Q(U),
                      viewBox: "0 0 " + b + " " + P,
                      preserveAspectRatio: Ne[Se] + " slice"
                    }), De = R.makeSvgSpan([oe[Se]], [Ce], s);
                    if (re === 1)
                      return {
                        span: De,
                        minWidth: L,
                        height: U
                      };
                    De.style.height = Q(U), A.push(De);
                  }
                  return {
                    span: R.makeSpan(["stretchy"], A, s),
                    minWidth: L,
                    height: U
                  };
                }
              }
              const {
                span: c3,
                minWidth: h3,
                height: m
              } = o();
              return c3.height = m, c3.style.height = Q(m), h3 > 0 && (c3.style.minWidth = Q(h3)), c3;
            }
          };
          function xe(i, s) {
            if (!i || i.type !== s)
              throw new Error("Expected node of type " + s + ", but got " + (i ? "node of type " + i.type : String(i)));
            return i;
          }
          function ti(i) {
            const s = jr(i);
            if (!s)
              throw new Error("Expected node of symbol group type, but got " + (i ? "node of type " + i.type : String(i)));
            return s;
          }
          function jr(i) {
            return i && (i.type === "atom" || Su.hasOwnProperty(i.type)) ? i : null;
          }
          const ni = (i, s) => {
            let o, c3, h3;
            i && i.type === "supsub" ? (c3 = xe(i.base, "accent"), o = c3.base, i.base = o, h3 = ku(Ee(i, s)), i.base = c3) : (c3 = xe(i, "accent"), o = c3.base);
            const m = Ee(o, s.havingCrampedStyle()), b = c3.isShifty && I3.isCharacterBox(o);
            let x = 0;
            if (b) {
              const P = I3.getBaseElem(o), U = Ee(P, s.havingCrampedStyle());
              x = ia(U).skew;
            }
            const A = c3.label === "\\c";
            let z = A ? m.height + m.depth : Math.min(m.height, s.fontMetrics().xHeight), D;
            if (c3.isStretchy)
              D = Ut.svgSpan(c3, s), D = R.makeVList({
                positionType: "firstBaseline",
                children: [{
                  type: "elem",
                  elem: m
                }, {
                  type: "elem",
                  elem: D,
                  wrapperClasses: ["svg-align"],
                  wrapperStyle: x > 0 ? {
                    width: "calc(100% - " + Q(2 * x) + ")",
                    marginLeft: Q(2 * x)
                  } : void 0
                }]
              }, s);
            else {
              let P, U;
              c3.label === "\\vec" ? (P = R.staticSvg("vec", s), U = R.svgData.vec[1]) : (P = R.makeOrd({
                mode: c3.mode,
                text: c3.label
              }, s, "textord"), P = ia(P), P.italic = 0, U = P.width, A && (z += P.depth)), D = R.makeSpan(["accent-body"], [P]);
              const re = c3.label === "\\textcircled";
              re && (D.classes.push("accent-full"), z = m.height);
              let oe = x;
              re || (oe -= U / 2), D.style.left = Q(oe), c3.label === "\\textcircled" && (D.style.top = ".2em"), D = R.makeVList({
                positionType: "firstBaseline",
                children: [{
                  type: "elem",
                  elem: m
                }, {
                  type: "kern",
                  size: -z
                }, {
                  type: "elem",
                  elem: D
                }]
              }, s);
            }
            const L = R.makeSpan(["mord", "accent"], [D], s);
            return h3 ? (h3.children[0] = L, h3.height = Math.max(L.height, h3.height), h3.classes[0] = "mord", h3) : L;
          }, xa = (i, s) => {
            const o = i.isStretchy ? Ut.mathMLnode(i.label) : new Y.MathNode("mo", [xt(i.label, i.mode)]), c3 = new Y.MathNode("mover", [Be(i.base, s), o]);
            return c3.setAttribute("accent", "true"), c3;
          }, Wu = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((i) => "\\" + i).join("|"));
          te({
            type: "accent",
            names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
            props: {
              numArgs: 1
            },
            handler: (i, s) => {
              const o = Fr(s[0]), c3 = !Wu.test(i.funcName), h3 = !c3 || i.funcName === "\\widehat" || i.funcName === "\\widetilde" || i.funcName === "\\widecheck";
              return {
                type: "accent",
                mode: i.parser.mode,
                label: i.funcName,
                isStretchy: c3,
                isShifty: h3,
                base: o
              };
            },
            htmlBuilder: ni,
            mathmlBuilder: xa
          }), te({
            type: "accent",
            names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
            props: {
              numArgs: 1,
              allowedInText: true,
              allowedInMath: true,
              // unless in strict mode
              argTypes: ["primitive"]
            },
            handler: (i, s) => {
              const o = s[0];
              let c3 = i.parser.mode;
              return c3 === "math" && (i.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + i.funcName + " works only in text mode"), c3 = "text"), {
                type: "accent",
                mode: c3,
                label: i.funcName,
                isStretchy: false,
                isShifty: true,
                base: o
              };
            },
            htmlBuilder: ni,
            mathmlBuilder: xa
          }), te({
            type: "accentUnder",
            names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
            props: {
              numArgs: 1
            },
            handler: (i, s) => {
              let {
                parser: o,
                funcName: c3
              } = i;
              const h3 = s[0];
              return {
                type: "accentUnder",
                mode: o.mode,
                label: c3,
                base: h3
              };
            },
            htmlBuilder: (i, s) => {
              const o = Ee(i.base, s), c3 = Ut.svgSpan(i, s), h3 = i.label === "\\utilde" ? 0.12 : 0, m = R.makeVList({
                positionType: "top",
                positionData: o.height,
                children: [{
                  type: "elem",
                  elem: c3,
                  wrapperClasses: ["svg-align"]
                }, {
                  type: "kern",
                  size: h3
                }, {
                  type: "elem",
                  elem: o
                }]
              }, s);
              return R.makeSpan(["mord", "accentunder"], [m], s);
            },
            mathmlBuilder: (i, s) => {
              const o = Ut.mathMLnode(i.label), c3 = new Y.MathNode("munder", [Be(i.base, s), o]);
              return c3.setAttribute("accentunder", "true"), c3;
            }
          });
          const Vr = (i) => {
            const s = new Y.MathNode("mpadded", i ? [i] : []);
            return s.setAttribute("width", "+0.6em"), s.setAttribute("lspace", "0.3em"), s;
          };
          te({
            type: "xArrow",
            names: [
              "\\xleftarrow",
              "\\xrightarrow",
              "\\xLeftarrow",
              "\\xRightarrow",
              "\\xleftrightarrow",
              "\\xLeftrightarrow",
              "\\xhookleftarrow",
              "\\xhookrightarrow",
              "\\xmapsto",
              "\\xrightharpoondown",
              "\\xrightharpoonup",
              "\\xleftharpoondown",
              "\\xleftharpoonup",
              "\\xrightleftharpoons",
              "\\xleftrightharpoons",
              "\\xlongequal",
              "\\xtwoheadrightarrow",
              "\\xtwoheadleftarrow",
              "\\xtofrom",
              // The next 3 functions are here to support the mhchem extension.
              // Direct use of these functions is discouraged and may break someday.
              "\\xrightleftarrows",
              "\\xrightequilibrium",
              "\\xleftequilibrium",
              // The next 3 functions are here only to support the {CD} environment.
              "\\\\cdrightarrow",
              "\\\\cdleftarrow",
              "\\\\cdlongequal"
            ],
            props: {
              numArgs: 1,
              numOptionalArgs: 1
            },
            handler(i, s, o) {
              let {
                parser: c3,
                funcName: h3
              } = i;
              return {
                type: "xArrow",
                mode: c3.mode,
                label: h3,
                body: s[0],
                below: o[0]
              };
            },
            // Flow is unable to correctly infer the type of `group`, even though it's
            // unambiguously determined from the passed-in `type` above.
            htmlBuilder(i, s) {
              const o = s.style;
              let c3 = s.havingStyle(o.sup());
              const h3 = R.wrapFragment(Ee(i.body, c3, s), s), m = i.label.slice(0, 2) === "\\x" ? "x" : "cd";
              h3.classes.push(m + "-arrow-pad");
              let b;
              i.below && (c3 = s.havingStyle(o.sub()), b = R.wrapFragment(Ee(i.below, c3, s), s), b.classes.push(m + "-arrow-pad"));
              const x = Ut.svgSpan(i, s), A = -s.fontMetrics().axisHeight + 0.5 * x.height;
              let z = -s.fontMetrics().axisHeight - 0.5 * x.height - 0.111;
              (h3.depth > 0.25 || i.label === "\\xleftequilibrium") && (z -= h3.depth);
              let D;
              if (b) {
                const L = -s.fontMetrics().axisHeight + b.height + 0.5 * x.height + 0.111;
                D = R.makeVList({
                  positionType: "individualShift",
                  children: [{
                    type: "elem",
                    elem: h3,
                    shift: z
                  }, {
                    type: "elem",
                    elem: x,
                    shift: A
                  }, {
                    type: "elem",
                    elem: b,
                    shift: L
                  }]
                }, s);
              } else
                D = R.makeVList({
                  positionType: "individualShift",
                  children: [{
                    type: "elem",
                    elem: h3,
                    shift: z
                  }, {
                    type: "elem",
                    elem: x,
                    shift: A
                  }]
                }, s);
              return D.children[0].children[0].children[1].classes.push("svg-align"), R.makeSpan(["mrel", "x-arrow"], [D], s);
            },
            mathmlBuilder(i, s) {
              const o = Ut.mathMLnode(i.label);
              o.setAttribute("minsize", i.label.charAt(0) === "x" ? "1.75em" : "3.0em");
              let c3;
              if (i.body) {
                const h3 = Vr(Be(i.body, s));
                if (i.below) {
                  const m = Vr(Be(i.below, s));
                  c3 = new Y.MathNode("munderover", [o, m, h3]);
                } else
                  c3 = new Y.MathNode("mover", [o, h3]);
              } else if (i.below) {
                const h3 = Vr(Be(i.below, s));
                c3 = new Y.MathNode("munder", [o, h3]);
              } else
                c3 = Vr(), c3 = new Y.MathNode("mover", [o, c3]);
              return c3;
            }
          });
          const Yu = R.makeSpan;
          function ka(i, s) {
            const o = Ze(i.body, s, true);
            return Yu([i.mclass], o, s);
          }
          function va(i, s) {
            let o;
            const c3 = ft(i.body, s);
            return i.mclass === "minner" ? o = new Y.MathNode("mpadded", c3) : i.mclass === "mord" ? i.isCharacterBox ? (o = c3[0], o.type = "mi") : o = new Y.MathNode("mi", c3) : (i.isCharacterBox ? (o = c3[0], o.type = "mo") : o = new Y.MathNode("mo", c3), i.mclass === "mbin" ? (o.attributes.lspace = "0.22em", o.attributes.rspace = "0.22em") : i.mclass === "mpunct" ? (o.attributes.lspace = "0em", o.attributes.rspace = "0.17em") : i.mclass === "mopen" || i.mclass === "mclose" ? (o.attributes.lspace = "0em", o.attributes.rspace = "0em") : i.mclass === "minner" && (o.attributes.lspace = "0.0556em", o.attributes.width = "+0.1111em")), o;
          }
          te({
            type: "mclass",
            names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
            props: {
              numArgs: 1,
              primitive: true
            },
            handler(i, s) {
              let {
                parser: o,
                funcName: c3
              } = i;
              const h3 = s[0];
              return {
                type: "mclass",
                mode: o.mode,
                mclass: "m" + c3.slice(5),
                // TODO(kevinb): don't prefix with 'm'
                body: Ke(h3),
                isCharacterBox: I3.isCharacterBox(h3)
              };
            },
            htmlBuilder: ka,
            mathmlBuilder: va
          });
          const Ur = (i) => {
            const s = i.type === "ordgroup" && i.body.length ? i.body[0] : i;
            return s.type === "atom" && (s.family === "bin" || s.family === "rel") ? "m" + s.family : "mord";
          };
          te({
            type: "mclass",
            names: ["\\@binrel"],
            props: {
              numArgs: 2
            },
            handler(i, s) {
              let {
                parser: o
              } = i;
              return {
                type: "mclass",
                mode: o.mode,
                mclass: Ur(s[0]),
                body: Ke(s[1]),
                isCharacterBox: I3.isCharacterBox(s[1])
              };
            }
          }), te({
            type: "mclass",
            names: ["\\stackrel", "\\overset", "\\underset"],
            props: {
              numArgs: 2
            },
            handler(i, s) {
              let {
                parser: o,
                funcName: c3
              } = i;
              const h3 = s[1], m = s[0];
              let b;
              c3 !== "\\stackrel" ? b = Ur(h3) : b = "mrel";
              const x = {
                type: "op",
                mode: h3.mode,
                limits: true,
                alwaysHandleSupSub: true,
                parentIsSupSub: false,
                symbol: false,
                suppressBaseShift: c3 !== "\\stackrel",
                body: Ke(h3)
              }, A = {
                type: "supsub",
                mode: m.mode,
                base: x,
                sup: c3 === "\\underset" ? null : m,
                sub: c3 === "\\underset" ? m : null
              };
              return {
                type: "mclass",
                mode: o.mode,
                mclass: b,
                body: [A],
                isCharacterBox: I3.isCharacterBox(A)
              };
            },
            htmlBuilder: ka,
            mathmlBuilder: va
          }), te({
            type: "pmb",
            names: ["\\pmb"],
            props: {
              numArgs: 1,
              allowedInText: true
            },
            handler(i, s) {
              let {
                parser: o
              } = i;
              return {
                type: "pmb",
                mode: o.mode,
                mclass: Ur(s[0]),
                body: Ke(s[0])
              };
            },
            htmlBuilder(i, s) {
              const o = Ze(i.body, s, true), c3 = R.makeSpan([i.mclass], o, s);
              return c3.style.textShadow = "0.02em 0.01em 0.04px", c3;
            },
            mathmlBuilder(i, s) {
              const o = ft(i.body, s), c3 = new Y.MathNode("mstyle", o);
              return c3.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), c3;
            }
          });
          const Ju = {
            ">": "\\\\cdrightarrow",
            "<": "\\\\cdleftarrow",
            "=": "\\\\cdlongequal",
            A: "\\uparrow",
            V: "\\downarrow",
            "|": "\\Vert",
            ".": "no arrow"
          }, Sa = () => ({
            type: "styling",
            body: [],
            mode: "math",
            style: "display"
          }), Aa = (i) => i.type === "textord" && i.text === "@", Qu = (i, s) => (i.type === "mathord" || i.type === "atom") && i.text === s;
          function Zu(i, s, o) {
            const c3 = Ju[i];
            switch (c3) {
              case "\\\\cdrightarrow":
              case "\\\\cdleftarrow":
                return o.callFunction(c3, [s[0]], [s[1]]);
              case "\\uparrow":
              case "\\downarrow": {
                const h3 = o.callFunction("\\\\cdleft", [s[0]], []), m = {
                  type: "atom",
                  text: c3,
                  mode: "math",
                  family: "rel"
                }, b = o.callFunction("\\Big", [m], []), x = o.callFunction("\\\\cdright", [s[1]], []), A = {
                  type: "ordgroup",
                  mode: "math",
                  body: [h3, b, x]
                };
                return o.callFunction("\\\\cdparent", [A], []);
              }
              case "\\\\cdlongequal":
                return o.callFunction("\\\\cdlongequal", [], []);
              case "\\Vert": {
                const h3 = {
                  type: "textord",
                  text: "\\Vert",
                  mode: "math"
                };
                return o.callFunction("\\Big", [h3], []);
              }
              default:
                return {
                  type: "textord",
                  text: " ",
                  mode: "math"
                };
            }
          }
          function eh(i) {
            const s = [];
            for (i.gullet.beginGroup(), i.gullet.macros.set("\\cr", "\\\\\\relax"), i.gullet.beginGroup(); ; ) {
              s.push(i.parseExpression(false, "\\\\")), i.gullet.endGroup(), i.gullet.beginGroup();
              const m = i.fetch().text;
              if (m === "&" || m === "\\\\")
                i.consume();
              else if (m === "\\end") {
                s[s.length - 1].length === 0 && s.pop();
                break;
              } else
                throw new l3("Expected \\\\ or \\cr or \\end", i.nextToken);
            }
            let o = [];
            const c3 = [o];
            for (let m = 0; m < s.length; m++) {
              const b = s[m];
              let x = Sa();
              for (let A = 0; A < b.length; A++)
                if (!Aa(b[A]))
                  x.body.push(b[A]);
                else {
                  o.push(x), A += 1;
                  const z = ti(b[A]).text, D = new Array(2);
                  if (D[0] = {
                    type: "ordgroup",
                    mode: "math",
                    body: []
                  }, D[1] = {
                    type: "ordgroup",
                    mode: "math",
                    body: []
                  }, !("=|.".indexOf(z) > -1))
                    if ("<>AV".indexOf(z) > -1)
                      for (let U = 0; U < 2; U++) {
                        let re = true;
                        for (let oe = A + 1; oe < b.length; oe++) {
                          if (Qu(b[oe], z)) {
                            re = false, A = oe;
                            break;
                          }
                          if (Aa(b[oe]))
                            throw new l3("Missing a " + z + " character to complete a CD arrow.", b[oe]);
                          D[U].body.push(b[oe]);
                        }
                        if (re)
                          throw new l3("Missing a " + z + " character to complete a CD arrow.", b[A]);
                      }
                    else
                      throw new l3('Expected one of "<>AV=|." after @', b[A]);
                  const P = {
                    type: "styling",
                    body: [Zu(z, D, i)],
                    mode: "math",
                    style: "display"
                    // CD is always displaystyle.
                  };
                  o.push(P), x = Sa();
                }
              m % 2 === 0 ? o.push(x) : o.shift(), o = [], c3.push(o);
            }
            i.gullet.endGroup(), i.gullet.endGroup();
            const h3 = new Array(c3[0].length).fill({
              type: "align",
              align: "c",
              pregap: 0.25,
              // CD package sets \enskip between columns.
              postgap: 0.25
              // So pre and post each get half an \enskip, i.e. 0.25em.
            });
            return {
              type: "array",
              mode: "math",
              body: c3,
              arraystretch: 1,
              addJot: true,
              rowGaps: [null],
              cols: h3,
              colSeparationType: "CD",
              hLinesBeforeRow: new Array(c3.length + 1).fill([])
            };
          }
          te({
            type: "cdlabel",
            names: ["\\\\cdleft", "\\\\cdright"],
            props: {
              numArgs: 1
            },
            handler(i, s) {
              let {
                parser: o,
                funcName: c3
              } = i;
              return {
                type: "cdlabel",
                mode: o.mode,
                side: c3.slice(4),
                label: s[0]
              };
            },
            htmlBuilder(i, s) {
              const o = s.havingStyle(s.style.sup()), c3 = R.wrapFragment(Ee(i.label, o, s), s);
              return c3.classes.push("cd-label-" + i.side), c3.style.bottom = Q(0.8 - c3.depth), c3.height = 0, c3.depth = 0, c3;
            },
            mathmlBuilder(i, s) {
              let o = new Y.MathNode("mrow", [Be(i.label, s)]);
              return o = new Y.MathNode("mpadded", [o]), o.setAttribute("width", "0"), i.side === "left" && o.setAttribute("lspace", "-1width"), o.setAttribute("voffset", "0.7em"), o = new Y.MathNode("mstyle", [o]), o.setAttribute("displaystyle", "false"), o.setAttribute("scriptlevel", "1"), o;
            }
          }), te({
            type: "cdlabelparent",
            names: ["\\\\cdparent"],
            props: {
              numArgs: 1
            },
            handler(i, s) {
              let {
                parser: o
              } = i;
              return {
                type: "cdlabelparent",
                mode: o.mode,
                fragment: s[0]
              };
            },
            htmlBuilder(i, s) {
              const o = R.wrapFragment(Ee(i.fragment, s), s);
              return o.classes.push("cd-vert-arrow"), o;
            },
            mathmlBuilder(i, s) {
              return new Y.MathNode("mrow", [Be(i.fragment, s)]);
            }
          }), te({
            type: "textord",
            names: ["\\@char"],
            props: {
              numArgs: 1,
              allowedInText: true
            },
            handler(i, s) {
              let {
                parser: o
              } = i;
              const h3 = xe(s[0], "ordgroup").body;
              let m = "";
              for (let A = 0; A < h3.length; A++) {
                const z = xe(h3[A], "textord");
                m += z.text;
              }
              let b = parseInt(m), x;
              if (isNaN(b))
                throw new l3("\\@char has non-numeric argument " + m);
              if (b < 0 || b >= 1114111)
                throw new l3("\\@char with invalid code point " + m);
              return b <= 65535 ? x = String.fromCharCode(b) : (b -= 65536, x = String.fromCharCode((b >> 10) + 55296, (b & 1023) + 56320)), {
                type: "textord",
                mode: o.mode,
                text: x
              };
            }
          });
          const Ta = (i, s) => {
            const o = Ze(i.body, s.withColor(i.color), false);
            return R.makeFragment(o);
          }, Na = (i, s) => {
            const o = ft(i.body, s.withColor(i.color)), c3 = new Y.MathNode("mstyle", o);
            return c3.setAttribute("mathcolor", i.color), c3;
          };
          te({
            type: "color",
            names: ["\\textcolor"],
            props: {
              numArgs: 2,
              allowedInText: true,
              argTypes: ["color", "original"]
            },
            handler(i, s) {
              let {
                parser: o
              } = i;
              const c3 = xe(s[0], "color-token").color, h3 = s[1];
              return {
                type: "color",
                mode: o.mode,
                color: c3,
                body: Ke(h3)
              };
            },
            htmlBuilder: Ta,
            mathmlBuilder: Na
          }), te({
            type: "color",
            names: ["\\color"],
            props: {
              numArgs: 1,
              allowedInText: true,
              argTypes: ["color"]
            },
            handler(i, s) {
              let {
                parser: o,
                breakOnTokenText: c3
              } = i;
              const h3 = xe(s[0], "color-token").color;
              o.gullet.macros.set("\\current@color", h3);
              const m = o.parseExpression(true, c3);
              return {
                type: "color",
                mode: o.mode,
                color: h3,
                body: m
              };
            },
            htmlBuilder: Ta,
            mathmlBuilder: Na
          }), te({
            type: "cr",
            names: ["\\\\"],
            props: {
              numArgs: 0,
              numOptionalArgs: 0,
              allowedInText: true
            },
            handler(i, s, o) {
              let {
                parser: c3
              } = i;
              const h3 = c3.gullet.future().text === "[" ? c3.parseSizeGroup(true) : null, m = !c3.settings.displayMode || !c3.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
              return {
                type: "cr",
                mode: c3.mode,
                newLine: m,
                size: h3 && xe(h3, "size").value
              };
            },
            // The following builders are called only at the top level,
            // not within tabular/array environments.
            htmlBuilder(i, s) {
              const o = R.makeSpan(["mspace"], [], s);
              return i.newLine && (o.classes.push("newline"), i.size && (o.style.marginTop = Q(Pe(i.size, s)))), o;
            },
            mathmlBuilder(i, s) {
              const o = new Y.MathNode("mspace");
              return i.newLine && (o.setAttribute("linebreak", "newline"), i.size && o.setAttribute("height", Q(Pe(i.size, s)))), o;
            }
          });
          const ri = {
            "\\global": "\\global",
            "\\long": "\\\\globallong",
            "\\\\globallong": "\\\\globallong",
            "\\def": "\\gdef",
            "\\gdef": "\\gdef",
            "\\edef": "\\xdef",
            "\\xdef": "\\xdef",
            "\\let": "\\\\globallet",
            "\\futurelet": "\\\\globalfuture"
          }, Ma = (i) => {
            const s = i.text;
            if (/^(?:[\\{}$&#^_]|EOF)$/.test(s))
              throw new l3("Expected a control sequence", i);
            return s;
          }, th = (i) => {
            let s = i.gullet.popToken();
            return s.text === "=" && (s = i.gullet.popToken(), s.text === " " && (s = i.gullet.popToken())), s;
          }, Ea = (i, s, o, c3) => {
            let h3 = i.gullet.macros.get(o.text);
            h3 == null && (o.noexpand = true, h3 = {
              tokens: [o],
              numArgs: 0,
              // reproduce the same behavior in expansion
              unexpandable: !i.gullet.isExpandable(o.text)
            }), i.gullet.macros.set(s, h3, c3);
          };
          te({
            type: "internal",
            names: [
              "\\global",
              "\\long",
              "\\\\globallong"
              // can’t be entered directly
            ],
            props: {
              numArgs: 0,
              allowedInText: true
            },
            handler(i) {
              let {
                parser: s,
                funcName: o
              } = i;
              s.consumeSpaces();
              const c3 = s.fetch();
              if (ri[c3.text])
                return (o === "\\global" || o === "\\\\globallong") && (c3.text = ri[c3.text]), xe(s.parseFunction(), "internal");
              throw new l3("Invalid token after macro prefix", c3);
            }
          }), te({
            type: "internal",
            names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
            props: {
              numArgs: 0,
              allowedInText: true,
              primitive: true
            },
            handler(i) {
              let {
                parser: s,
                funcName: o
              } = i, c3 = s.gullet.popToken();
              const h3 = c3.text;
              if (/^(?:[\\{}$&#^_]|EOF)$/.test(h3))
                throw new l3("Expected a control sequence", c3);
              let m = 0, b;
              const x = [[]];
              for (; s.gullet.future().text !== "{"; )
                if (c3 = s.gullet.popToken(), c3.text === "#") {
                  if (s.gullet.future().text === "{") {
                    b = s.gullet.future(), x[m].push("{");
                    break;
                  }
                  if (c3 = s.gullet.popToken(), !/^[1-9]$/.test(c3.text))
                    throw new l3('Invalid argument number "' + c3.text + '"');
                  if (parseInt(c3.text) !== m + 1)
                    throw new l3('Argument number "' + c3.text + '" out of order');
                  m++, x.push([]);
                } else {
                  if (c3.text === "EOF")
                    throw new l3("Expected a macro definition");
                  x[m].push(c3.text);
                }
              let {
                tokens: A
              } = s.gullet.consumeArg();
              return b && A.unshift(b), (o === "\\edef" || o === "\\xdef") && (A = s.gullet.expandTokens(A), A.reverse()), s.gullet.macros.set(h3, {
                tokens: A,
                numArgs: m,
                delimiters: x
              }, o === ri[o]), {
                type: "internal",
                mode: s.mode
              };
            }
          }), te({
            type: "internal",
            names: [
              "\\let",
              "\\\\globallet"
              // can’t be entered directly
            ],
            props: {
              numArgs: 0,
              allowedInText: true,
              primitive: true
            },
            handler(i) {
              let {
                parser: s,
                funcName: o
              } = i;
              const c3 = Ma(s.gullet.popToken());
              s.gullet.consumeSpaces();
              const h3 = th(s);
              return Ea(s, c3, h3, o === "\\\\globallet"), {
                type: "internal",
                mode: s.mode
              };
            }
          }), te({
            type: "internal",
            names: [
              "\\futurelet",
              "\\\\globalfuture"
              // can’t be entered directly
            ],
            props: {
              numArgs: 0,
              allowedInText: true,
              primitive: true
            },
            handler(i) {
              let {
                parser: s,
                funcName: o
              } = i;
              const c3 = Ma(s.gullet.popToken()), h3 = s.gullet.popToken(), m = s.gullet.popToken();
              return Ea(s, c3, m, o === "\\\\globalfuture"), s.gullet.pushToken(m), s.gullet.pushToken(h3), {
                type: "internal",
                mode: s.mode
              };
            }
          });
          const Zn = function(i, s, o) {
            const c3 = Fe.math[i] && Fe.math[i].replace, h3 = Fs(c3 || i, s, o);
            if (!h3)
              throw new Error("Unsupported symbol " + i + " and font size " + s + ".");
            return h3;
          }, si = function(i, s, o, c3) {
            const h3 = o.havingBaseStyle(s), m = R.makeSpan(c3.concat(h3.sizingClasses(o)), [i], o), b = h3.sizeMultiplier / o.sizeMultiplier;
            return m.height *= b, m.depth *= b, m.maxFontSize = h3.sizeMultiplier, m;
          }, _a = function(i, s, o) {
            const c3 = s.havingBaseStyle(o), h3 = (1 - s.sizeMultiplier / c3.sizeMultiplier) * s.fontMetrics().axisHeight;
            i.classes.push("delimcenter"), i.style.top = Q(h3), i.height -= h3, i.depth += h3;
          }, nh = function(i, s, o, c3, h3, m) {
            const b = R.makeSymbol(i, "Main-Regular", h3, c3), x = si(b, s, c3, m);
            return o && _a(x, c3, s), x;
          }, rh = function(i, s, o, c3) {
            return R.makeSymbol(i, "Size" + s + "-Regular", o, c3);
          }, Ca = function(i, s, o, c3, h3, m) {
            const b = rh(i, s, h3, c3), x = si(R.makeSpan(["delimsizing", "size" + s], [b], c3), Z.TEXT, c3, m);
            return o && _a(x, c3, Z.TEXT), x;
          }, ii = function(i, s, o) {
            let c3;
            return s === "Size1-Regular" ? c3 = "delim-size1" : c3 = "delim-size4", {
              type: "elem",
              elem: R.makeSpan(["delimsizinginner", c3], [R.makeSpan([], [R.makeSymbol(i, s, o)])])
            };
          }, ai = function(i, s, o) {
            const c3 = zt["Size4-Regular"][i.charCodeAt(0)] ? zt["Size4-Regular"][i.charCodeAt(0)][4] : zt["Size1-Regular"][i.charCodeAt(0)][4], h3 = new Qt("inner", hu(i, Math.round(1e3 * s))), m = new Ft([h3], {
              width: Q(c3),
              height: Q(s),
              // Override CSS rule `.katex svg { width: 100% }`
              style: "width:" + Q(c3),
              viewBox: "0 0 " + 1e3 * c3 + " " + Math.round(1e3 * s),
              preserveAspectRatio: "xMinYMin"
            }), b = R.makeSvgSpan([], [m], o);
            return b.height = s, b.style.height = Q(s), b.style.width = Q(c3), {
              type: "elem",
              elem: b
            };
          }, oi = 8e-3, Gr = {
            type: "kern",
            size: -1 * oi
          }, sh = ["|", "\\lvert", "\\rvert", "\\vert"], ih = ["\\|", "\\lVert", "\\rVert", "\\Vert"], Ia = function(i, s, o, c3, h3, m) {
            let b, x, A, z, D = "", L = 0;
            b = A = z = i, x = null;
            let P = "Size1-Regular";
            i === "\\uparrow" ? A = z = "⏐" : i === "\\Uparrow" ? A = z = "‖" : i === "\\downarrow" ? b = A = "⏐" : i === "\\Downarrow" ? b = A = "‖" : i === "\\updownarrow" ? (b = "\\uparrow", A = "⏐", z = "\\downarrow") : i === "\\Updownarrow" ? (b = "\\Uparrow", A = "‖", z = "\\Downarrow") : I3.contains(sh, i) ? (A = "∣", D = "vert", L = 333) : I3.contains(ih, i) ? (A = "∥", D = "doublevert", L = 556) : i === "[" || i === "\\lbrack" ? (b = "⎡", A = "⎢", z = "⎣", P = "Size4-Regular", D = "lbrack", L = 667) : i === "]" || i === "\\rbrack" ? (b = "⎤", A = "⎥", z = "⎦", P = "Size4-Regular", D = "rbrack", L = 667) : i === "\\lfloor" || i === "⌊" ? (A = b = "⎢", z = "⎣", P = "Size4-Regular", D = "lfloor", L = 667) : i === "\\lceil" || i === "⌈" ? (b = "⎡", A = z = "⎢", P = "Size4-Regular", D = "lceil", L = 667) : i === "\\rfloor" || i === "⌋" ? (A = b = "⎥", z = "⎦", P = "Size4-Regular", D = "rfloor", L = 667) : i === "\\rceil" || i === "⌉" ? (b = "⎤", A = z = "⎥", P = "Size4-Regular", D = "rceil", L = 667) : i === "(" || i === "\\lparen" ? (b = "⎛", A = "⎜", z = "⎝", P = "Size4-Regular", D = "lparen", L = 875) : i === ")" || i === "\\rparen" ? (b = "⎞", A = "⎟", z = "⎠", P = "Size4-Regular", D = "rparen", L = 875) : i === "\\{" || i === "\\lbrace" ? (b = "⎧", x = "⎨", z = "⎩", A = "⎪", P = "Size4-Regular") : i === "\\}" || i === "\\rbrace" ? (b = "⎫", x = "⎬", z = "⎭", A = "⎪", P = "Size4-Regular") : i === "\\lgroup" || i === "⟮" ? (b = "⎧", z = "⎩", A = "⎪", P = "Size4-Regular") : i === "\\rgroup" || i === "⟯" ? (b = "⎫", z = "⎭", A = "⎪", P = "Size4-Regular") : i === "\\lmoustache" || i === "⎰" ? (b = "⎧", z = "⎭", A = "⎪", P = "Size4-Regular") : (i === "\\rmoustache" || i === "⎱") && (b = "⎫", z = "⎩", A = "⎪", P = "Size4-Regular");
            const U = Zn(b, P, h3), re = U.height + U.depth, oe = Zn(A, P, h3), Ne = oe.height + oe.depth, Se = Zn(z, P, h3), Me = Se.height + Se.depth;
            let Ce = 0, De = 1;
            if (x !== null) {
              const Ue = Zn(x, P, h3);
              Ce = Ue.height + Ue.depth, De = 2;
            }
            const lt = re + Me + Ce, et = Math.max(0, Math.ceil((s - lt) / (De * Ne))), vt = lt + et * De * Ne;
            let Mn = c3.fontMetrics().axisHeight;
            o && (Mn *= c3.sizeMultiplier);
            const _e = vt / 2 - Mn, ze = [];
            if (D.length > 0) {
              const Ue = vt - re - Me, je = Math.round(vt * 1e3), St = fu(D, Math.round(Ue * 1e3)), Ih = new Qt(D, St), vo = (L / 1e3).toFixed(3) + "em", So = (je / 1e3).toFixed(3) + "em", zh = new Ft([Ih], {
                width: vo,
                height: So,
                viewBox: "0 0 " + L + " " + je
              }), Jr = R.makeSvgSpan([], [zh], c3);
              Jr.height = je / 1e3, Jr.style.width = vo, Jr.style.height = So, ze.push({
                type: "elem",
                elem: Jr
              });
            } else {
              if (ze.push(ii(z, P, h3)), ze.push(Gr), x === null) {
                const Ue = vt - re - Me + 2 * oi;
                ze.push(ai(A, Ue, c3));
              } else {
                const Ue = (vt - re - Me - Ce) / 2 + 2 * oi;
                ze.push(ai(A, Ue, c3)), ze.push(Gr), ze.push(ii(x, P, h3)), ze.push(Gr), ze.push(ai(A, Ue, c3));
              }
              ze.push(Gr), ze.push(ii(b, P, h3));
            }
            const qe = c3.havingBaseStyle(Z.TEXT), $e = R.makeVList({
              positionType: "bottom",
              positionData: _e,
              children: ze
            }, qe);
            return si(R.makeSpan(["delimsizing", "mult"], [$e], qe), Z.TEXT, c3, m);
          }, li = 80, ci = 0.08, ui = function(i, s, o, c3, h3) {
            const m = uu(i, c3, o), b = new Qt(i, m), x = new Ft([b], {
              // Note: 1000:1 ratio of viewBox to document em width.
              width: "400em",
              height: Q(s),
              viewBox: "0 0 400000 " + o,
              preserveAspectRatio: "xMinYMin slice"
            });
            return R.makeSvgSpan(["hide-tail"], [x], h3);
          }, ah = function(i, s) {
            const o = s.havingBaseSizing(), c3 = Da("\\surd", i * o.sizeMultiplier, Ba, o);
            let h3 = o.sizeMultiplier;
            const m = Math.max(0, s.minRuleThickness - s.fontMetrics().sqrtRuleThickness);
            let b, x = 0, A = 0, z = 0, D;
            return c3.type === "small" ? (z = 1e3 + 1e3 * m + li, i < 1 ? h3 = 1 : i < 1.4 && (h3 = 0.7), x = (1 + m + ci) / h3, A = (1 + m) / h3, b = ui("sqrtMain", x, z, m, s), b.style.minWidth = "0.853em", D = 0.833 / h3) : c3.type === "large" ? (z = (1e3 + li) * er[c3.size], A = (er[c3.size] + m) / h3, x = (er[c3.size] + m + ci) / h3, b = ui("sqrtSize" + c3.size, x, z, m, s), b.style.minWidth = "1.02em", D = 1 / h3) : (x = i + m + ci, A = i + m, z = Math.floor(1e3 * i + m) + li, b = ui("sqrtTall", x, z, m, s), b.style.minWidth = "0.742em", D = 1.056), b.height = A, b.style.height = Q(x), {
              span: b,
              advanceWidth: D,
              // Calculate the actual line width.
              // This actually should depend on the chosen font -- e.g. \boldmath
              // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
              // have thicker rules.
              ruleWidth: (s.fontMetrics().sqrtRuleThickness + m) * h3
            };
          }, za = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], oh = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], Oa = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], er = [0, 1.2, 1.8, 2.4, 3], lh = function(i, s, o, c3, h3) {
            if (i === "<" || i === "\\lt" || i === "⟨" ? i = "\\langle" : (i === ">" || i === "\\gt" || i === "⟩") && (i = "\\rangle"), I3.contains(za, i) || I3.contains(Oa, i))
              return Ca(i, s, false, o, c3, h3);
            if (I3.contains(oh, i))
              return Ia(i, er[s], false, o, c3, h3);
            throw new l3("Illegal delimiter: '" + i + "'");
          }, ch = [{
            type: "small",
            style: Z.SCRIPTSCRIPT
          }, {
            type: "small",
            style: Z.SCRIPT
          }, {
            type: "small",
            style: Z.TEXT
          }, {
            type: "large",
            size: 1
          }, {
            type: "large",
            size: 2
          }, {
            type: "large",
            size: 3
          }, {
            type: "large",
            size: 4
          }], uh = [{
            type: "small",
            style: Z.SCRIPTSCRIPT
          }, {
            type: "small",
            style: Z.SCRIPT
          }, {
            type: "small",
            style: Z.TEXT
          }, {
            type: "stack"
          }], Ba = [{
            type: "small",
            style: Z.SCRIPTSCRIPT
          }, {
            type: "small",
            style: Z.SCRIPT
          }, {
            type: "small",
            style: Z.TEXT
          }, {
            type: "large",
            size: 1
          }, {
            type: "large",
            size: 2
          }, {
            type: "large",
            size: 3
          }, {
            type: "large",
            size: 4
          }, {
            type: "stack"
          }], hh = function(i) {
            if (i.type === "small")
              return "Main-Regular";
            if (i.type === "large")
              return "Size" + i.size + "-Regular";
            if (i.type === "stack")
              return "Size4-Regular";
            throw new Error("Add support for delim type '" + i.type + "' here.");
          }, Da = function(i, s, o, c3) {
            const h3 = Math.min(2, 3 - c3.style.size);
            for (let m = h3; m < o.length && o[m].type !== "stack"; m++) {
              const b = Zn(i, hh(o[m]), "math");
              let x = b.height + b.depth;
              if (o[m].type === "small") {
                const A = c3.havingBaseStyle(o[m].style);
                x *= A.sizeMultiplier;
              }
              if (x > s)
                return o[m];
            }
            return o[o.length - 1];
          }, La = function(i, s, o, c3, h3, m) {
            i === "<" || i === "\\lt" || i === "⟨" ? i = "\\langle" : (i === ">" || i === "\\gt" || i === "⟩") && (i = "\\rangle");
            let b;
            I3.contains(Oa, i) ? b = ch : I3.contains(za, i) ? b = Ba : b = uh;
            const x = Da(i, s, b, c3);
            return x.type === "small" ? nh(i, x.style, o, c3, h3, m) : x.type === "large" ? Ca(i, x.size, o, c3, h3, m) : Ia(i, s, o, c3, h3, m);
          };
          var Gt = {
            sqrtImage: ah,
            sizedDelim: lh,
            sizeToMaxHeight: er,
            customSizedDelim: La,
            leftRightDelim: function(i, s, o, c3, h3, m) {
              const b = c3.fontMetrics().axisHeight * c3.sizeMultiplier, x = 901, A = 5 / c3.fontMetrics().ptPerEm, z = Math.max(s - b, o + b), D = Math.max(
                // In real TeX, calculations are done using integral values which are
                // 65536 per pt, or 655360 per em. So, the division here truncates in
                // TeX but doesn't here, producing different results. If we wanted to
                // exactly match TeX's calculation, we could do
                //   Math.floor(655360 * maxDistFromAxis / 500) *
                //    delimiterFactor / 655360
                // (To see the difference, compare
                //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
                // in TeX and KaTeX)
                z / 500 * x,
                2 * z - A
              );
              return La(i, D, true, c3, h3, m);
            }
          };
          const qa = {
            "\\bigl": {
              mclass: "mopen",
              size: 1
            },
            "\\Bigl": {
              mclass: "mopen",
              size: 2
            },
            "\\biggl": {
              mclass: "mopen",
              size: 3
            },
            "\\Biggl": {
              mclass: "mopen",
              size: 4
            },
            "\\bigr": {
              mclass: "mclose",
              size: 1
            },
            "\\Bigr": {
              mclass: "mclose",
              size: 2
            },
            "\\biggr": {
              mclass: "mclose",
              size: 3
            },
            "\\Biggr": {
              mclass: "mclose",
              size: 4
            },
            "\\bigm": {
              mclass: "mrel",
              size: 1
            },
            "\\Bigm": {
              mclass: "mrel",
              size: 2
            },
            "\\biggm": {
              mclass: "mrel",
              size: 3
            },
            "\\Biggm": {
              mclass: "mrel",
              size: 4
            },
            "\\big": {
              mclass: "mord",
              size: 1
            },
            "\\Big": {
              mclass: "mord",
              size: 2
            },
            "\\bigg": {
              mclass: "mord",
              size: 3
            },
            "\\Bigg": {
              mclass: "mord",
              size: 4
            }
          }, fh = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
          function Kr(i, s) {
            const o = jr(i);
            if (o && I3.contains(fh, o.text))
              return o;
            throw o ? new l3("Invalid delimiter '" + o.text + "' after '" + s.funcName + "'", i) : new l3("Invalid delimiter type '" + i.type + "'", i);
          }
          te({
            type: "delimsizing",
            names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
            props: {
              numArgs: 1,
              argTypes: ["primitive"]
            },
            handler: (i, s) => {
              const o = Kr(s[0], i);
              return {
                type: "delimsizing",
                mode: i.parser.mode,
                size: qa[i.funcName].size,
                mclass: qa[i.funcName].mclass,
                delim: o.text
              };
            },
            htmlBuilder: (i, s) => i.delim === "." ? R.makeSpan([i.mclass]) : Gt.sizedDelim(i.delim, i.size, s, i.mode, [i.mclass]),
            mathmlBuilder: (i) => {
              const s = [];
              i.delim !== "." && s.push(xt(i.delim, i.mode));
              const o = new Y.MathNode("mo", s);
              i.mclass === "mopen" || i.mclass === "mclose" ? o.setAttribute("fence", "true") : o.setAttribute("fence", "false"), o.setAttribute("stretchy", "true");
              const c3 = Q(Gt.sizeToMaxHeight[i.size]);
              return o.setAttribute("minsize", c3), o.setAttribute("maxsize", c3), o;
            }
          });
          function Ra(i) {
            if (!i.body)
              throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
          }
          te({
            type: "leftright-right",
            names: ["\\right"],
            props: {
              numArgs: 1,
              primitive: true
            },
            handler: (i, s) => {
              const o = i.parser.gullet.macros.get("\\current@color");
              if (o && typeof o != "string")
                throw new l3("\\current@color set to non-string in \\right");
              return {
                type: "leftright-right",
                mode: i.parser.mode,
                delim: Kr(s[0], i).text,
                color: o
                // undefined if not set via \color
              };
            }
          }), te({
            type: "leftright",
            names: ["\\left"],
            props: {
              numArgs: 1,
              primitive: true
            },
            handler: (i, s) => {
              const o = Kr(s[0], i), c3 = i.parser;
              ++c3.leftrightDepth;
              const h3 = c3.parseExpression(false);
              --c3.leftrightDepth, c3.expect("\\right", false);
              const m = xe(c3.parseFunction(), "leftright-right");
              return {
                type: "leftright",
                mode: c3.mode,
                body: h3,
                left: o.text,
                right: m.delim,
                rightColor: m.color
              };
            },
            htmlBuilder: (i, s) => {
              Ra(i);
              const o = Ze(i.body, s, true, ["mopen", "mclose"]);
              let c3 = 0, h3 = 0, m = false;
              for (let A = 0; A < o.length; A++)
                o[A].isMiddle ? m = true : (c3 = Math.max(o[A].height, c3), h3 = Math.max(o[A].depth, h3));
              c3 *= s.sizeMultiplier, h3 *= s.sizeMultiplier;
              let b;
              if (i.left === "." ? b = Qn(s, ["mopen"]) : b = Gt.leftRightDelim(i.left, c3, h3, s, i.mode, ["mopen"]), o.unshift(b), m)
                for (let A = 1; A < o.length; A++) {
                  const D = o[A].isMiddle;
                  D && (o[A] = Gt.leftRightDelim(D.delim, c3, h3, D.options, i.mode, []));
                }
              let x;
              if (i.right === ".")
                x = Qn(s, ["mclose"]);
              else {
                const A = i.rightColor ? s.withColor(i.rightColor) : s;
                x = Gt.leftRightDelim(i.right, c3, h3, A, i.mode, ["mclose"]);
              }
              return o.push(x), R.makeSpan(["minner"], o, s);
            },
            mathmlBuilder: (i, s) => {
              Ra(i);
              const o = ft(i.body, s);
              if (i.left !== ".") {
                const c3 = new Y.MathNode("mo", [xt(i.left, i.mode)]);
                c3.setAttribute("fence", "true"), o.unshift(c3);
              }
              if (i.right !== ".") {
                const c3 = new Y.MathNode("mo", [xt(i.right, i.mode)]);
                c3.setAttribute("fence", "true"), i.rightColor && c3.setAttribute("mathcolor", i.rightColor), o.push(c3);
              }
              return Qs(o);
            }
          }), te({
            type: "middle",
            names: ["\\middle"],
            props: {
              numArgs: 1,
              primitive: true
            },
            handler: (i, s) => {
              const o = Kr(s[0], i);
              if (!i.parser.leftrightDepth)
                throw new l3("\\middle without preceding \\left", o);
              return {
                type: "middle",
                mode: i.parser.mode,
                delim: o.text
              };
            },
            htmlBuilder: (i, s) => {
              let o;
              if (i.delim === ".")
                o = Qn(s, []);
              else {
                o = Gt.sizedDelim(i.delim, 1, s, i.mode, []);
                const c3 = {
                  delim: i.delim,
                  options: s
                };
                o.isMiddle = c3;
              }
              return o;
            },
            mathmlBuilder: (i, s) => {
              const o = i.delim === "\\vert" || i.delim === "|" ? xt("|", "text") : xt(i.delim, i.mode), c3 = new Y.MathNode("mo", [o]);
              return c3.setAttribute("fence", "true"), c3.setAttribute("lspace", "0.05em"), c3.setAttribute("rspace", "0.05em"), c3;
            }
          });
          const hi = (i, s) => {
            const o = R.wrapFragment(Ee(i.body, s), s), c3 = i.label.slice(1);
            let h3 = s.sizeMultiplier, m, b = 0;
            const x = I3.isCharacterBox(i.body);
            if (c3 === "sout")
              m = R.makeSpan(["stretchy", "sout"]), m.height = s.fontMetrics().defaultRuleThickness / h3, b = -0.5 * s.fontMetrics().xHeight;
            else if (c3 === "phase") {
              const z = Pe({
                number: 0.6,
                unit: "pt"
              }, s), D = Pe({
                number: 0.35,
                unit: "ex"
              }, s), L = s.havingBaseSizing();
              h3 = h3 / L.sizeMultiplier;
              const P = o.height + o.depth + z + D;
              o.style.paddingLeft = Q(P / 2 + z);
              const U = Math.floor(1e3 * P * h3), re = lu(U), oe = new Ft([new Qt("phase", re)], {
                width: "400em",
                height: Q(U / 1e3),
                viewBox: "0 0 400000 " + U,
                preserveAspectRatio: "xMinYMin slice"
              });
              m = R.makeSvgSpan(["hide-tail"], [oe], s), m.style.height = Q(P), b = o.depth + z + D;
            } else {
              /cancel/.test(c3) ? x || o.classes.push("cancel-pad") : c3 === "angl" ? o.classes.push("anglpad") : o.classes.push("boxpad");
              let z = 0, D = 0, L = 0;
              /box/.test(c3) ? (L = Math.max(
                s.fontMetrics().fboxrule,
                // default
                s.minRuleThickness
                // User override.
              ), z = s.fontMetrics().fboxsep + (c3 === "colorbox" ? 0 : L), D = z) : c3 === "angl" ? (L = Math.max(s.fontMetrics().defaultRuleThickness, s.minRuleThickness), z = 4 * L, D = Math.max(0, 0.25 - o.depth)) : (z = x ? 0.2 : 0, D = z), m = Ut.encloseSpan(o, c3, z, D, s), /fbox|boxed|fcolorbox/.test(c3) ? (m.style.borderStyle = "solid", m.style.borderWidth = Q(L)) : c3 === "angl" && L !== 0.049 && (m.style.borderTopWidth = Q(L), m.style.borderRightWidth = Q(L)), b = o.depth + D, i.backgroundColor && (m.style.backgroundColor = i.backgroundColor, i.borderColor && (m.style.borderColor = i.borderColor));
            }
            let A;
            if (i.backgroundColor)
              A = R.makeVList({
                positionType: "individualShift",
                children: [
                  // Put the color background behind inner;
                  {
                    type: "elem",
                    elem: m,
                    shift: b
                  },
                  {
                    type: "elem",
                    elem: o,
                    shift: 0
                  }
                ]
              }, s);
            else {
              const z = /cancel|phase/.test(c3) ? ["svg-align"] : [];
              A = R.makeVList({
                positionType: "individualShift",
                children: [
                  // Write the \cancel stroke on top of inner.
                  {
                    type: "elem",
                    elem: o,
                    shift: 0
                  },
                  {
                    type: "elem",
                    elem: m,
                    shift: b,
                    wrapperClasses: z
                  }
                ]
              }, s);
            }
            return /cancel/.test(c3) && (A.height = o.height, A.depth = o.depth), /cancel/.test(c3) && !x ? R.makeSpan(["mord", "cancel-lap"], [A], s) : R.makeSpan(["mord"], [A], s);
          }, fi = (i, s) => {
            let o = 0;
            const c3 = new Y.MathNode(i.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [Be(i.body, s)]);
            switch (i.label) {
              case "\\cancel":
                c3.setAttribute("notation", "updiagonalstrike");
                break;
              case "\\bcancel":
                c3.setAttribute("notation", "downdiagonalstrike");
                break;
              case "\\phase":
                c3.setAttribute("notation", "phasorangle");
                break;
              case "\\sout":
                c3.setAttribute("notation", "horizontalstrike");
                break;
              case "\\fbox":
                c3.setAttribute("notation", "box");
                break;
              case "\\angl":
                c3.setAttribute("notation", "actuarial");
                break;
              case "\\fcolorbox":
              case "\\colorbox":
                if (o = s.fontMetrics().fboxsep * s.fontMetrics().ptPerEm, c3.setAttribute("width", "+" + 2 * o + "pt"), c3.setAttribute("height", "+" + 2 * o + "pt"), c3.setAttribute("lspace", o + "pt"), c3.setAttribute("voffset", o + "pt"), i.label === "\\fcolorbox") {
                  const h3 = Math.max(
                    s.fontMetrics().fboxrule,
                    // default
                    s.minRuleThickness
                    // user override
                  );
                  c3.setAttribute("style", "border: " + h3 + "em solid " + String(i.borderColor));
                }
                break;
              case "\\xcancel":
                c3.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
                break;
            }
            return i.backgroundColor && c3.setAttribute("mathbackground", i.backgroundColor), c3;
          };
          te({
            type: "enclose",
            names: ["\\colorbox"],
            props: {
              numArgs: 2,
              allowedInText: true,
              argTypes: ["color", "text"]
            },
            handler(i, s, o) {
              let {
                parser: c3,
                funcName: h3
              } = i;
              const m = xe(s[0], "color-token").color, b = s[1];
              return {
                type: "enclose",
                mode: c3.mode,
                label: h3,
                backgroundColor: m,
                body: b
              };
            },
            htmlBuilder: hi,
            mathmlBuilder: fi
          }), te({
            type: "enclose",
            names: ["\\fcolorbox"],
            props: {
              numArgs: 3,
              allowedInText: true,
              argTypes: ["color", "color", "text"]
            },
            handler(i, s, o) {
              let {
                parser: c3,
                funcName: h3
              } = i;
              const m = xe(s[0], "color-token").color, b = xe(s[1], "color-token").color, x = s[2];
              return {
                type: "enclose",
                mode: c3.mode,
                label: h3,
                backgroundColor: b,
                borderColor: m,
                body: x
              };
            },
            htmlBuilder: hi,
            mathmlBuilder: fi
          }), te({
            type: "enclose",
            names: ["\\fbox"],
            props: {
              numArgs: 1,
              argTypes: ["hbox"],
              allowedInText: true
            },
            handler(i, s) {
              let {
                parser: o
              } = i;
              return {
                type: "enclose",
                mode: o.mode,
                label: "\\fbox",
                body: s[0]
              };
            }
          }), te({
            type: "enclose",
            names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
            props: {
              numArgs: 1
            },
            handler(i, s) {
              let {
                parser: o,
                funcName: c3
              } = i;
              const h3 = s[0];
              return {
                type: "enclose",
                mode: o.mode,
                label: c3,
                body: h3
              };
            },
            htmlBuilder: hi,
            mathmlBuilder: fi
          }), te({
            type: "enclose",
            names: ["\\angl"],
            props: {
              numArgs: 1,
              argTypes: ["hbox"],
              allowedInText: false
            },
            handler(i, s) {
              let {
                parser: o
              } = i;
              return {
                type: "enclose",
                mode: o.mode,
                label: "\\angl",
                body: s[0]
              };
            }
          });
          const $a = {};
          function Bt(i) {
            let {
              type: s,
              names: o,
              props: c3,
              handler: h3,
              htmlBuilder: m,
              mathmlBuilder: b
            } = i;
            const x = {
              type: s,
              numArgs: c3.numArgs || 0,
              allowedInText: false,
              numOptionalArgs: 0,
              handler: h3
            };
            for (let A = 0; A < o.length; ++A)
              $a[o[A]] = x;
            m && ($r[s] = m), b && (Pr[s] = b);
          }
          const Pa = {};
          function k(i, s) {
            Pa[i] = s;
          }
          class yt {
            // The + prefix indicates that these fields aren't writeable
            // Lexer holding the input string.
            // Start offset, zero-based inclusive.
            // End offset, zero-based exclusive.
            constructor(s, o, c3) {
              this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = s, this.start = o, this.end = c3;
            }
            /**
             * Merges two `SourceLocation`s from location providers, given they are
             * provided in order of appearance.
             * - Returns the first one's location if only the first is provided.
             * - Returns a merged range of the first and the last if both are provided
             *   and their lexers match.
             * - Otherwise, returns null.
             */
            static range(s, o) {
              return o ? !s || !s.loc || !o.loc || s.loc.lexer !== o.loc.lexer ? null : new yt(s.loc.lexer, s.loc.start, o.loc.end) : s && s.loc;
            }
          }
          class kt {
            // don't expand the token
            // used in \noexpand
            constructor(s, o) {
              this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = s, this.loc = o;
            }
            /**
             * Given a pair of tokens (this and endToken), compute a `Token` encompassing
             * the whole input range enclosed by these two.
             */
            range(s, o) {
              return new kt(o, yt.range(this, s));
            }
          }
          function Fa(i) {
            const s = [];
            i.consumeSpaces();
            let o = i.fetch().text;
            for (o === "\\relax" && (i.consume(), i.consumeSpaces(), o = i.fetch().text); o === "\\hline" || o === "\\hdashline"; )
              i.consume(), s.push(o === "\\hdashline"), i.consumeSpaces(), o = i.fetch().text;
            return s;
          }
          const Xr = (i) => {
            if (!i.parser.settings.displayMode)
              throw new l3("{" + i.envName + "} can be used only in display mode.");
          };
          function di(i) {
            if (i.indexOf("ed") === -1)
              return i.indexOf("*") === -1;
          }
          function en(i, s, o) {
            let {
              hskipBeforeAndAfter: c3,
              addJot: h3,
              cols: m,
              arraystretch: b,
              colSeparationType: x,
              autoTag: A,
              singleRow: z,
              emptySingleRow: D,
              maxNumCols: L,
              leqno: P
            } = s;
            if (i.gullet.beginGroup(), z || i.gullet.macros.set("\\cr", "\\\\\\relax"), !b) {
              const De = i.gullet.expandMacroAsText("\\arraystretch");
              if (De == null)
                b = 1;
              else if (b = parseFloat(De), !b || b < 0)
                throw new l3("Invalid \\arraystretch: " + De);
            }
            i.gullet.beginGroup();
            let U = [];
            const re = [U], oe = [], Ne = [], Se = A != null ? [] : void 0;
            function Me() {
              A && i.gullet.macros.set("\\@eqnsw", "1", true);
            }
            function Ce() {
              Se && (i.gullet.macros.get("\\df@tag") ? (Se.push(i.subparse([new kt("\\df@tag")])), i.gullet.macros.set("\\df@tag", void 0, true)) : Se.push(!!A && i.gullet.macros.get("\\@eqnsw") === "1"));
            }
            for (Me(), Ne.push(Fa(i)); ; ) {
              let De = i.parseExpression(false, z ? "\\end" : "\\\\");
              i.gullet.endGroup(), i.gullet.beginGroup(), De = {
                type: "ordgroup",
                mode: i.mode,
                body: De
              }, o && (De = {
                type: "styling",
                mode: i.mode,
                style: o,
                body: [De]
              }), U.push(De);
              const lt = i.fetch().text;
              if (lt === "&") {
                if (L && U.length === L) {
                  if (z || x)
                    throw new l3("Too many tab characters: &", i.nextToken);
                  i.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
                }
                i.consume();
              } else if (lt === "\\end") {
                Ce(), U.length === 1 && De.type === "styling" && De.body[0].body.length === 0 && (re.length > 1 || !D) && re.pop(), Ne.length < re.length + 1 && Ne.push([]);
                break;
              } else if (lt === "\\\\") {
                i.consume();
                let et;
                i.gullet.future().text !== " " && (et = i.parseSizeGroup(true)), oe.push(et ? et.value : null), Ce(), Ne.push(Fa(i)), U = [], re.push(U), Me();
              } else
                throw new l3("Expected & or \\\\ or \\cr or \\end", i.nextToken);
            }
            return i.gullet.endGroup(), i.gullet.endGroup(), {
              type: "array",
              mode: i.mode,
              addJot: h3,
              arraystretch: b,
              body: re,
              cols: m,
              rowGaps: oe,
              hskipBeforeAndAfter: c3,
              hLinesBeforeRow: Ne,
              colSeparationType: x,
              tags: Se,
              leqno: P
            };
          }
          function mi(i) {
            return i.slice(0, 1) === "d" ? "display" : "text";
          }
          const Dt = function(i, s) {
            let o, c3;
            const h3 = i.body.length, m = i.hLinesBeforeRow;
            let b = 0, x = new Array(h3);
            const A = [], z = Math.max(
              // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
              s.fontMetrics().arrayRuleWidth,
              s.minRuleThickness
              // User override.
            ), D = 1 / s.fontMetrics().ptPerEm;
            let L = 5 * D;
            i.colSeparationType && i.colSeparationType === "small" && (L = 0.2778 * (s.havingStyle(Z.SCRIPT).sizeMultiplier / s.sizeMultiplier));
            const P = i.colSeparationType === "CD" ? Pe({
              number: 3,
              unit: "ex"
            }, s) : 12 * D, U = 3 * D, re = i.arraystretch * P, oe = 0.7 * re, Ne = 0.3 * re;
            let Se = 0;
            function Me(_e) {
              for (let ze = 0; ze < _e.length; ++ze)
                ze > 0 && (Se += 0.25), A.push({
                  pos: Se,
                  isDashed: _e[ze]
                });
            }
            for (Me(m[0]), o = 0; o < i.body.length; ++o) {
              const _e = i.body[o];
              let ze = oe, qe = Ne;
              b < _e.length && (b = _e.length);
              const $e = new Array(_e.length);
              for (c3 = 0; c3 < _e.length; ++c3) {
                const St = Ee(_e[c3], s);
                qe < St.depth && (qe = St.depth), ze < St.height && (ze = St.height), $e[c3] = St;
              }
              const Ue = i.rowGaps[o];
              let je = 0;
              Ue && (je = Pe(Ue, s), je > 0 && (je += Ne, qe < je && (qe = je), je = 0)), i.addJot && (qe += U), $e.height = ze, $e.depth = qe, Se += ze, $e.pos = Se, Se += qe + je, x[o] = $e, Me(m[o + 1]);
            }
            const Ce = Se / 2 + s.fontMetrics().axisHeight, De = i.cols || [], lt = [];
            let et, vt;
            const Mn = [];
            if (i.tags && i.tags.some((_e) => _e))
              for (o = 0; o < h3; ++o) {
                const _e = x[o], ze = _e.pos - Ce, qe = i.tags[o];
                let $e;
                qe === true ? $e = R.makeSpan(["eqn-num"], [], s) : qe === false ? $e = R.makeSpan([], [], s) : $e = R.makeSpan([], Ze(qe, s, true), s), $e.depth = _e.depth, $e.height = _e.height, Mn.push({
                  type: "elem",
                  elem: $e,
                  shift: ze
                });
              }
            for (
              c3 = 0, vt = 0;
              // Continue while either there are more columns or more column
              // descriptions, so trailing separators don't get lost.
              c3 < b || vt < De.length;
              ++c3, ++vt
            ) {
              let _e = De[vt] || {}, ze = true;
              for (; _e.type === "separator"; ) {
                if (ze || (et = R.makeSpan(["arraycolsep"], []), et.style.width = Q(s.fontMetrics().doubleRuleSep), lt.push(et)), _e.separator === "|" || _e.separator === ":") {
                  const Ue = _e.separator === "|" ? "solid" : "dashed", je = R.makeSpan(["vertical-separator"], [], s);
                  je.style.height = Q(Se), je.style.borderRightWidth = Q(z), je.style.borderRightStyle = Ue, je.style.margin = "0 " + Q(-z / 2);
                  const St = Se - Ce;
                  St && (je.style.verticalAlign = Q(-St)), lt.push(je);
                } else
                  throw new l3("Invalid separator type: " + _e.separator);
                vt++, _e = De[vt] || {}, ze = false;
              }
              if (c3 >= b)
                continue;
              let qe;
              (c3 > 0 || i.hskipBeforeAndAfter) && (qe = I3.deflt(_e.pregap, L), qe !== 0 && (et = R.makeSpan(["arraycolsep"], []), et.style.width = Q(qe), lt.push(et)));
              let $e = [];
              for (o = 0; o < h3; ++o) {
                const Ue = x[o], je = Ue[c3];
                if (!je)
                  continue;
                const St = Ue.pos - Ce;
                je.depth = Ue.depth, je.height = Ue.height, $e.push({
                  type: "elem",
                  elem: je,
                  shift: St
                });
              }
              $e = R.makeVList({
                positionType: "individualShift",
                children: $e
              }, s), $e = R.makeSpan(["col-align-" + (_e.align || "c")], [$e]), lt.push($e), (c3 < b - 1 || i.hskipBeforeAndAfter) && (qe = I3.deflt(_e.postgap, L), qe !== 0 && (et = R.makeSpan(["arraycolsep"], []), et.style.width = Q(qe), lt.push(et)));
            }
            if (x = R.makeSpan(["mtable"], lt), A.length > 0) {
              const _e = R.makeLineSpan("hline", s, z), ze = R.makeLineSpan("hdashline", s, z), qe = [{
                type: "elem",
                elem: x,
                shift: 0
              }];
              for (; A.length > 0; ) {
                const $e = A.pop(), Ue = $e.pos - Ce;
                $e.isDashed ? qe.push({
                  type: "elem",
                  elem: ze,
                  shift: Ue
                }) : qe.push({
                  type: "elem",
                  elem: _e,
                  shift: Ue
                });
              }
              x = R.makeVList({
                positionType: "individualShift",
                children: qe
              }, s);
            }
            if (Mn.length === 0)
              return R.makeSpan(["mord"], [x], s);
            {
              let _e = R.makeVList({
                positionType: "individualShift",
                children: Mn
              }, s);
              return _e = R.makeSpan(["tag"], [_e], s), R.makeFragment([x, _e]);
            }
          }, dh = {
            c: "center ",
            l: "left ",
            r: "right "
          }, Lt = function(i, s) {
            const o = [], c3 = new Y.MathNode("mtd", [], ["mtr-glue"]), h3 = new Y.MathNode("mtd", [], ["mml-eqn-num"]);
            for (let L = 0; L < i.body.length; L++) {
              const P = i.body[L], U = [];
              for (let re = 0; re < P.length; re++)
                U.push(new Y.MathNode("mtd", [Be(P[re], s)]));
              i.tags && i.tags[L] && (U.unshift(c3), U.push(c3), i.leqno ? U.unshift(h3) : U.push(h3)), o.push(new Y.MathNode("mtr", U));
            }
            let m = new Y.MathNode("mtable", o);
            const b = i.arraystretch === 0.5 ? 0.1 : 0.16 + i.arraystretch - 1 + (i.addJot ? 0.09 : 0);
            m.setAttribute("rowspacing", Q(b));
            let x = "", A = "";
            if (i.cols && i.cols.length > 0) {
              const L = i.cols;
              let P = "", U = false, re = 0, oe = L.length;
              L[0].type === "separator" && (x += "top ", re = 1), L[L.length - 1].type === "separator" && (x += "bottom ", oe -= 1);
              for (let Ne = re; Ne < oe; Ne++)
                L[Ne].type === "align" ? (A += dh[L[Ne].align], U && (P += "none "), U = true) : L[Ne].type === "separator" && U && (P += L[Ne].separator === "|" ? "solid " : "dashed ", U = false);
              m.setAttribute("columnalign", A.trim()), /[sd]/.test(P) && m.setAttribute("columnlines", P.trim());
            }
            if (i.colSeparationType === "align") {
              const L = i.cols || [];
              let P = "";
              for (let U = 1; U < L.length; U++)
                P += U % 2 ? "0em " : "1em ";
              m.setAttribute("columnspacing", P.trim());
            } else
              i.colSeparationType === "alignat" || i.colSeparationType === "gather" ? m.setAttribute("columnspacing", "0em") : i.colSeparationType === "small" ? m.setAttribute("columnspacing", "0.2778em") : i.colSeparationType === "CD" ? m.setAttribute("columnspacing", "0.5em") : m.setAttribute("columnspacing", "1em");
            let z = "";
            const D = i.hLinesBeforeRow;
            x += D[0].length > 0 ? "left " : "", x += D[D.length - 1].length > 0 ? "right " : "";
            for (let L = 1; L < D.length - 1; L++)
              z += D[L].length === 0 ? "none " : D[L][0] ? "dashed " : "solid ";
            return /[sd]/.test(z) && m.setAttribute("rowlines", z.trim()), x !== "" && (m = new Y.MathNode("menclose", [m]), m.setAttribute("notation", x.trim())), i.arraystretch && i.arraystretch < 1 && (m = new Y.MathNode("mstyle", [m]), m.setAttribute("scriptlevel", "1")), m;
          }, Ha = function(i, s) {
            i.envName.indexOf("ed") === -1 && Xr(i);
            const o = [], c3 = i.envName.indexOf("at") > -1 ? "alignat" : "align", h3 = i.envName === "split", m = en(i.parser, {
              cols: o,
              addJot: true,
              autoTag: h3 ? void 0 : di(i.envName),
              emptySingleRow: true,
              colSeparationType: c3,
              maxNumCols: h3 ? 2 : void 0,
              leqno: i.parser.settings.leqno
            }, "display");
            let b, x = 0;
            const A = {
              type: "ordgroup",
              mode: i.mode,
              body: []
            };
            if (s[0] && s[0].type === "ordgroup") {
              let D = "";
              for (let L = 0; L < s[0].body.length; L++) {
                const P = xe(s[0].body[L], "textord");
                D += P.text;
              }
              b = Number(D), x = b * 2;
            }
            const z = !x;
            m.body.forEach(function(D) {
              for (let L = 1; L < D.length; L += 2) {
                const P = xe(D[L], "styling");
                xe(P.body[0], "ordgroup").body.unshift(A);
              }
              if (z)
                x < D.length && (x = D.length);
              else {
                const L = D.length / 2;
                if (b < L)
                  throw new l3("Too many math in a row: " + ("expected " + b + ", but got " + L), D[0]);
              }
            });
            for (let D = 0; D < x; ++D) {
              let L = "r", P = 0;
              D % 2 === 1 ? L = "l" : D > 0 && z && (P = 1), o[D] = {
                type: "align",
                align: L,
                pregap: P,
                postgap: 0
              };
            }
            return m.colSeparationType = z ? "align" : "alignat", m;
          };
          Bt({
            type: "array",
            names: ["array", "darray"],
            props: {
              numArgs: 1
            },
            handler(i, s) {
              const h3 = (jr(s[0]) ? [s[0]] : xe(s[0], "ordgroup").body).map(function(b) {
                const A = ti(b).text;
                if ("lcr".indexOf(A) !== -1)
                  return {
                    type: "align",
                    align: A
                  };
                if (A === "|")
                  return {
                    type: "separator",
                    separator: "|"
                  };
                if (A === ":")
                  return {
                    type: "separator",
                    separator: ":"
                  };
                throw new l3("Unknown column alignment: " + A, b);
              }), m = {
                cols: h3,
                hskipBeforeAndAfter: true,
                // \@preamble in lttab.dtx
                maxNumCols: h3.length
              };
              return en(i.parser, m, mi(i.envName));
            },
            htmlBuilder: Dt,
            mathmlBuilder: Lt
          }), Bt({
            type: "array",
            names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
            props: {
              numArgs: 0
            },
            handler(i) {
              const s = {
                matrix: null,
                pmatrix: ["(", ")"],
                bmatrix: ["[", "]"],
                Bmatrix: ["\\{", "\\}"],
                vmatrix: ["|", "|"],
                Vmatrix: ["\\Vert", "\\Vert"]
              }[i.envName.replace("*", "")];
              let o = "c";
              const c3 = {
                hskipBeforeAndAfter: false,
                cols: [{
                  type: "align",
                  align: o
                }]
              };
              if (i.envName.charAt(i.envName.length - 1) === "*") {
                const b = i.parser;
                if (b.consumeSpaces(), b.fetch().text === "[") {
                  if (b.consume(), b.consumeSpaces(), o = b.fetch().text, "lcr".indexOf(o) === -1)
                    throw new l3("Expected l or c or r", b.nextToken);
                  b.consume(), b.consumeSpaces(), b.expect("]"), b.consume(), c3.cols = [{
                    type: "align",
                    align: o
                  }];
                }
              }
              const h3 = en(i.parser, c3, mi(i.envName)), m = Math.max(0, ...h3.body.map((b) => b.length));
              return h3.cols = new Array(m).fill({
                type: "align",
                align: o
              }), s ? {
                type: "leftright",
                mode: i.mode,
                body: [h3],
                left: s[0],
                right: s[1],
                rightColor: void 0
                // \right uninfluenced by \color in array
              } : h3;
            },
            htmlBuilder: Dt,
            mathmlBuilder: Lt
          }), Bt({
            type: "array",
            names: ["smallmatrix"],
            props: {
              numArgs: 0
            },
            handler(i) {
              const s = {
                arraystretch: 0.5
              }, o = en(i.parser, s, "script");
              return o.colSeparationType = "small", o;
            },
            htmlBuilder: Dt,
            mathmlBuilder: Lt
          }), Bt({
            type: "array",
            names: ["subarray"],
            props: {
              numArgs: 1
            },
            handler(i, s) {
              const h3 = (jr(s[0]) ? [s[0]] : xe(s[0], "ordgroup").body).map(function(b) {
                const A = ti(b).text;
                if ("lc".indexOf(A) !== -1)
                  return {
                    type: "align",
                    align: A
                  };
                throw new l3("Unknown column alignment: " + A, b);
              });
              if (h3.length > 1)
                throw new l3("{subarray} can contain only one column");
              let m = {
                cols: h3,
                hskipBeforeAndAfter: false,
                arraystretch: 0.5
              };
              if (m = en(i.parser, m, "script"), m.body.length > 0 && m.body[0].length > 1)
                throw new l3("{subarray} can contain only one column");
              return m;
            },
            htmlBuilder: Dt,
            mathmlBuilder: Lt
          }), Bt({
            type: "array",
            names: ["cases", "dcases", "rcases", "drcases"],
            props: {
              numArgs: 0
            },
            handler(i) {
              const s = {
                arraystretch: 1.2,
                cols: [{
                  type: "align",
                  align: "l",
                  pregap: 0,
                  // TODO(kevinb) get the current style.
                  // For now we use the metrics for TEXT style which is what we were
                  // doing before.  Before attempting to get the current style we
                  // should look at TeX's behavior especially for \over and matrices.
                  postgap: 1
                  /* 1em quad */
                }, {
                  type: "align",
                  align: "l",
                  pregap: 0,
                  postgap: 0
                }]
              }, o = en(i.parser, s, mi(i.envName));
              return {
                type: "leftright",
                mode: i.mode,
                body: [o],
                left: i.envName.indexOf("r") > -1 ? "." : "\\{",
                right: i.envName.indexOf("r") > -1 ? "\\}" : ".",
                rightColor: void 0
              };
            },
            htmlBuilder: Dt,
            mathmlBuilder: Lt
          }), Bt({
            type: "array",
            names: ["align", "align*", "aligned", "split"],
            props: {
              numArgs: 0
            },
            handler: Ha,
            htmlBuilder: Dt,
            mathmlBuilder: Lt
          }), Bt({
            type: "array",
            names: ["gathered", "gather", "gather*"],
            props: {
              numArgs: 0
            },
            handler(i) {
              I3.contains(["gather", "gather*"], i.envName) && Xr(i);
              const s = {
                cols: [{
                  type: "align",
                  align: "c"
                }],
                addJot: true,
                colSeparationType: "gather",
                autoTag: di(i.envName),
                emptySingleRow: true,
                leqno: i.parser.settings.leqno
              };
              return en(i.parser, s, "display");
            },
            htmlBuilder: Dt,
            mathmlBuilder: Lt
          }), Bt({
            type: "array",
            names: ["alignat", "alignat*", "alignedat"],
            props: {
              numArgs: 1
            },
            handler: Ha,
            htmlBuilder: Dt,
            mathmlBuilder: Lt
          }), Bt({
            type: "array",
            names: ["equation", "equation*"],
            props: {
              numArgs: 0
            },
            handler(i) {
              Xr(i);
              const s = {
                autoTag: di(i.envName),
                emptySingleRow: true,
                singleRow: true,
                maxNumCols: 1,
                leqno: i.parser.settings.leqno
              };
              return en(i.parser, s, "display");
            },
            htmlBuilder: Dt,
            mathmlBuilder: Lt
          }), Bt({
            type: "array",
            names: ["CD"],
            props: {
              numArgs: 0
            },
            handler(i) {
              return Xr(i), eh(i.parser);
            },
            htmlBuilder: Dt,
            mathmlBuilder: Lt
          }), k("\\nonumber", "\\gdef\\@eqnsw{0}"), k("\\notag", "\\nonumber"), te({
            type: "text",
            // Doesn't matter what this is.
            names: ["\\hline", "\\hdashline"],
            props: {
              numArgs: 0,
              allowedInText: true,
              allowedInMath: true
            },
            handler(i, s) {
              throw new l3(i.funcName + " valid only within array environment");
            }
          });
          var ja = $a;
          te({
            type: "environment",
            names: ["\\begin", "\\end"],
            props: {
              numArgs: 1,
              argTypes: ["text"]
            },
            handler(i, s) {
              let {
                parser: o,
                funcName: c3
              } = i;
              const h3 = s[0];
              if (h3.type !== "ordgroup")
                throw new l3("Invalid environment name", h3);
              let m = "";
              for (let b = 0; b < h3.body.length; ++b)
                m += xe(h3.body[b], "textord").text;
              if (c3 === "\\begin") {
                if (!ja.hasOwnProperty(m))
                  throw new l3("No such environment: " + m, h3);
                const b = ja[m], {
                  args: x,
                  optArgs: A
                } = o.parseArguments("\\begin{" + m + "}", b), z = {
                  mode: o.mode,
                  envName: m,
                  parser: o
                }, D = b.handler(z, x, A);
                o.expect("\\end", false);
                const L = o.nextToken, P = xe(o.parseFunction(), "environment");
                if (P.name !== m)
                  throw new l3("Mismatch: \\begin{" + m + "} matched by \\end{" + P.name + "}", L);
                return D;
              }
              return {
                type: "environment",
                mode: o.mode,
                name: m,
                nameGroup: h3
              };
            }
          });
          const Va = (i, s) => {
            const o = i.font, c3 = s.withFont(o);
            return Ee(i.body, c3);
          }, Ua = (i, s) => {
            const o = i.font, c3 = s.withFont(o);
            return Be(i.body, c3);
          }, Ga = {
            "\\Bbb": "\\mathbb",
            "\\bold": "\\mathbf",
            "\\frak": "\\mathfrak",
            "\\bm": "\\boldsymbol"
          };
          te({
            type: "font",
            names: [
              // styles, except \boldsymbol defined below
              "\\mathrm",
              "\\mathit",
              "\\mathbf",
              "\\mathnormal",
              "\\mathsfit",
              // families
              "\\mathbb",
              "\\mathcal",
              "\\mathfrak",
              "\\mathscr",
              "\\mathsf",
              "\\mathtt",
              // aliases, except \bm defined below
              "\\Bbb",
              "\\bold",
              "\\frak"
            ],
            props: {
              numArgs: 1,
              allowedInArgument: true
            },
            handler: (i, s) => {
              let {
                parser: o,
                funcName: c3
              } = i;
              const h3 = Fr(s[0]);
              let m = c3;
              return m in Ga && (m = Ga[m]), {
                type: "font",
                mode: o.mode,
                font: m.slice(1),
                body: h3
              };
            },
            htmlBuilder: Va,
            mathmlBuilder: Ua
          }), te({
            type: "mclass",
            names: ["\\boldsymbol", "\\bm"],
            props: {
              numArgs: 1
            },
            handler: (i, s) => {
              let {
                parser: o
              } = i;
              const c3 = s[0], h3 = I3.isCharacterBox(c3);
              return {
                type: "mclass",
                mode: o.mode,
                mclass: Ur(c3),
                body: [{
                  type: "font",
                  mode: o.mode,
                  font: "boldsymbol",
                  body: c3
                }],
                isCharacterBox: h3
              };
            }
          }), te({
            type: "font",
            names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
            props: {
              numArgs: 0,
              allowedInText: true
            },
            handler: (i, s) => {
              let {
                parser: o,
                funcName: c3,
                breakOnTokenText: h3
              } = i;
              const {
                mode: m
              } = o, b = o.parseExpression(true, h3), x = "math" + c3.slice(1);
              return {
                type: "font",
                mode: m,
                font: x,
                body: {
                  type: "ordgroup",
                  mode: o.mode,
                  body: b
                }
              };
            },
            htmlBuilder: Va,
            mathmlBuilder: Ua
          });
          const Ka = (i, s) => {
            let o = s;
            return i === "display" ? o = o.id >= Z.SCRIPT.id ? o.text() : Z.DISPLAY : i === "text" && o.size === Z.DISPLAY.size ? o = Z.TEXT : i === "script" ? o = Z.SCRIPT : i === "scriptscript" && (o = Z.SCRIPTSCRIPT), o;
          }, pi = (i, s) => {
            const o = Ka(i.size, s.style), c3 = o.fracNum(), h3 = o.fracDen();
            let m;
            m = s.havingStyle(c3);
            const b = Ee(i.numer, m, s);
            if (i.continued) {
              const Me = 8.5 / s.fontMetrics().ptPerEm, Ce = 3.5 / s.fontMetrics().ptPerEm;
              b.height = b.height < Me ? Me : b.height, b.depth = b.depth < Ce ? Ce : b.depth;
            }
            m = s.havingStyle(h3);
            const x = Ee(i.denom, m, s);
            let A, z, D;
            i.hasBarLine ? (i.barSize ? (z = Pe(i.barSize, s), A = R.makeLineSpan("frac-line", s, z)) : A = R.makeLineSpan("frac-line", s), z = A.height, D = A.height) : (A = null, z = 0, D = s.fontMetrics().defaultRuleThickness);
            let L, P, U;
            o.size === Z.DISPLAY.size || i.size === "display" ? (L = s.fontMetrics().num1, z > 0 ? P = 3 * D : P = 7 * D, U = s.fontMetrics().denom1) : (z > 0 ? (L = s.fontMetrics().num2, P = D) : (L = s.fontMetrics().num3, P = 3 * D), U = s.fontMetrics().denom2);
            let re;
            if (A) {
              const Me = s.fontMetrics().axisHeight;
              L - b.depth - (Me + 0.5 * z) < P && (L += P - (L - b.depth - (Me + 0.5 * z))), Me - 0.5 * z - (x.height - U) < P && (U += P - (Me - 0.5 * z - (x.height - U)));
              const Ce = -(Me - 0.5 * z);
              re = R.makeVList({
                positionType: "individualShift",
                children: [{
                  type: "elem",
                  elem: x,
                  shift: U
                }, {
                  type: "elem",
                  elem: A,
                  shift: Ce
                }, {
                  type: "elem",
                  elem: b,
                  shift: -L
                }]
              }, s);
            } else {
              const Me = L - b.depth - (x.height - U);
              Me < P && (L += 0.5 * (P - Me), U += 0.5 * (P - Me)), re = R.makeVList({
                positionType: "individualShift",
                children: [{
                  type: "elem",
                  elem: x,
                  shift: U
                }, {
                  type: "elem",
                  elem: b,
                  shift: -L
                }]
              }, s);
            }
            m = s.havingStyle(o), re.height *= m.sizeMultiplier / s.sizeMultiplier, re.depth *= m.sizeMultiplier / s.sizeMultiplier;
            let oe;
            o.size === Z.DISPLAY.size ? oe = s.fontMetrics().delim1 : o.size === Z.SCRIPTSCRIPT.size ? oe = s.havingStyle(Z.SCRIPT).fontMetrics().delim2 : oe = s.fontMetrics().delim2;
            let Ne, Se;
            return i.leftDelim == null ? Ne = Qn(s, ["mopen"]) : Ne = Gt.customSizedDelim(i.leftDelim, oe, true, s.havingStyle(o), i.mode, ["mopen"]), i.continued ? Se = R.makeSpan([]) : i.rightDelim == null ? Se = Qn(s, ["mclose"]) : Se = Gt.customSizedDelim(i.rightDelim, oe, true, s.havingStyle(o), i.mode, ["mclose"]), R.makeSpan(["mord"].concat(m.sizingClasses(s)), [Ne, R.makeSpan(["mfrac"], [re]), Se], s);
          }, gi = (i, s) => {
            let o = new Y.MathNode("mfrac", [Be(i.numer, s), Be(i.denom, s)]);
            if (!i.hasBarLine)
              o.setAttribute("linethickness", "0px");
            else if (i.barSize) {
              const h3 = Pe(i.barSize, s);
              o.setAttribute("linethickness", Q(h3));
            }
            const c3 = Ka(i.size, s.style);
            if (c3.size !== s.style.size) {
              o = new Y.MathNode("mstyle", [o]);
              const h3 = c3.size === Z.DISPLAY.size ? "true" : "false";
              o.setAttribute("displaystyle", h3), o.setAttribute("scriptlevel", "0");
            }
            if (i.leftDelim != null || i.rightDelim != null) {
              const h3 = [];
              if (i.leftDelim != null) {
                const m = new Y.MathNode("mo", [new Y.TextNode(i.leftDelim.replace("\\", ""))]);
                m.setAttribute("fence", "true"), h3.push(m);
              }
              if (h3.push(o), i.rightDelim != null) {
                const m = new Y.MathNode("mo", [new Y.TextNode(i.rightDelim.replace("\\", ""))]);
                m.setAttribute("fence", "true"), h3.push(m);
              }
              return Qs(h3);
            }
            return o;
          };
          te({
            type: "genfrac",
            names: [
              "\\dfrac",
              "\\frac",
              "\\tfrac",
              "\\dbinom",
              "\\binom",
              "\\tbinom",
              "\\\\atopfrac",
              // can’t be entered directly
              "\\\\bracefrac",
              "\\\\brackfrac"
              // ditto
            ],
            props: {
              numArgs: 2,
              allowedInArgument: true
            },
            handler: (i, s) => {
              let {
                parser: o,
                funcName: c3
              } = i;
              const h3 = s[0], m = s[1];
              let b, x = null, A = null, z = "auto";
              switch (c3) {
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
                  b = false, x = "(", A = ")";
                  break;
                case "\\\\bracefrac":
                  b = false, x = "\\{", A = "\\}";
                  break;
                case "\\\\brackfrac":
                  b = false, x = "[", A = "]";
                  break;
                default:
                  throw new Error("Unrecognized genfrac command");
              }
              switch (c3) {
                case "\\dfrac":
                case "\\dbinom":
                  z = "display";
                  break;
                case "\\tfrac":
                case "\\tbinom":
                  z = "text";
                  break;
              }
              return {
                type: "genfrac",
                mode: o.mode,
                continued: false,
                numer: h3,
                denom: m,
                hasBarLine: b,
                leftDelim: x,
                rightDelim: A,
                size: z,
                barSize: null
              };
            },
            htmlBuilder: pi,
            mathmlBuilder: gi
          }), te({
            type: "genfrac",
            names: ["\\cfrac"],
            props: {
              numArgs: 2
            },
            handler: (i, s) => {
              let {
                parser: o,
                funcName: c3
              } = i;
              const h3 = s[0], m = s[1];
              return {
                type: "genfrac",
                mode: o.mode,
                continued: true,
                numer: h3,
                denom: m,
                hasBarLine: true,
                leftDelim: null,
                rightDelim: null,
                size: "display",
                barSize: null
              };
            }
          }), te({
            type: "infix",
            names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
            props: {
              numArgs: 0,
              infix: true
            },
            handler(i) {
              let {
                parser: s,
                funcName: o,
                token: c3
              } = i, h3;
              switch (o) {
                case "\\over":
                  h3 = "\\frac";
                  break;
                case "\\choose":
                  h3 = "\\binom";
                  break;
                case "\\atop":
                  h3 = "\\\\atopfrac";
                  break;
                case "\\brace":
                  h3 = "\\\\bracefrac";
                  break;
                case "\\brack":
                  h3 = "\\\\brackfrac";
                  break;
                default:
                  throw new Error("Unrecognized infix genfrac command");
              }
              return {
                type: "infix",
                mode: s.mode,
                replaceWith: h3,
                token: c3
              };
            }
          });
          const Xa = ["display", "text", "script", "scriptscript"], Wa = function(i) {
            let s = null;
            return i.length > 0 && (s = i, s = s === "." ? null : s), s;
          };
          te({
            type: "genfrac",
            names: ["\\genfrac"],
            props: {
              numArgs: 6,
              allowedInArgument: true,
              argTypes: ["math", "math", "size", "text", "math", "math"]
            },
            handler(i, s) {
              let {
                parser: o
              } = i;
              const c3 = s[4], h3 = s[5], m = Fr(s[0]), b = m.type === "atom" && m.family === "open" ? Wa(m.text) : null, x = Fr(s[1]), A = x.type === "atom" && x.family === "close" ? Wa(x.text) : null, z = xe(s[2], "size");
              let D, L = null;
              z.isBlank ? D = true : (L = z.value, D = L.number > 0);
              let P = "auto", U = s[3];
              if (U.type === "ordgroup") {
                if (U.body.length > 0) {
                  const re = xe(U.body[0], "textord");
                  P = Xa[Number(re.text)];
                }
              } else
                U = xe(U, "textord"), P = Xa[Number(U.text)];
              return {
                type: "genfrac",
                mode: o.mode,
                numer: c3,
                denom: h3,
                continued: false,
                hasBarLine: D,
                barSize: L,
                leftDelim: b,
                rightDelim: A,
                size: P
              };
            },
            htmlBuilder: pi,
            mathmlBuilder: gi
          }), te({
            type: "infix",
            names: ["\\above"],
            props: {
              numArgs: 1,
              argTypes: ["size"],
              infix: true
            },
            handler(i, s) {
              let {
                parser: o,
                funcName: c3,
                token: h3
              } = i;
              return {
                type: "infix",
                mode: o.mode,
                replaceWith: "\\\\abovefrac",
                size: xe(s[0], "size").value,
                token: h3
              };
            }
          }), te({
            type: "genfrac",
            names: ["\\\\abovefrac"],
            props: {
              numArgs: 3,
              argTypes: ["math", "size", "math"]
            },
            handler: (i, s) => {
              let {
                parser: o,
                funcName: c3
              } = i;
              const h3 = s[0], m = N(xe(s[1], "infix").size), b = s[2], x = m.number > 0;
              return {
                type: "genfrac",
                mode: o.mode,
                numer: h3,
                denom: b,
                continued: false,
                hasBarLine: x,
                barSize: m,
                leftDelim: null,
                rightDelim: null,
                size: "auto"
              };
            },
            htmlBuilder: pi,
            mathmlBuilder: gi
          });
          const Ya = (i, s) => {
            const o = s.style;
            let c3, h3;
            i.type === "supsub" ? (c3 = i.sup ? Ee(i.sup, s.havingStyle(o.sup()), s) : Ee(i.sub, s.havingStyle(o.sub()), s), h3 = xe(i.base, "horizBrace")) : h3 = xe(i, "horizBrace");
            const m = Ee(h3.base, s.havingBaseStyle(Z.DISPLAY)), b = Ut.svgSpan(h3, s);
            let x;
            if (h3.isOver ? (x = R.makeVList({
              positionType: "firstBaseline",
              children: [{
                type: "elem",
                elem: m
              }, {
                type: "kern",
                size: 0.1
              }, {
                type: "elem",
                elem: b
              }]
            }, s), x.children[0].children[0].children[1].classes.push("svg-align")) : (x = R.makeVList({
              positionType: "bottom",
              positionData: m.depth + 0.1 + b.height,
              children: [{
                type: "elem",
                elem: b
              }, {
                type: "kern",
                size: 0.1
              }, {
                type: "elem",
                elem: m
              }]
            }, s), x.children[0].children[0].children[0].classes.push("svg-align")), c3) {
              const A = R.makeSpan(["mord", h3.isOver ? "mover" : "munder"], [x], s);
              h3.isOver ? x = R.makeVList({
                positionType: "firstBaseline",
                children: [{
                  type: "elem",
                  elem: A
                }, {
                  type: "kern",
                  size: 0.2
                }, {
                  type: "elem",
                  elem: c3
                }]
              }, s) : x = R.makeVList({
                positionType: "bottom",
                positionData: A.depth + 0.2 + c3.height + c3.depth,
                children: [{
                  type: "elem",
                  elem: c3
                }, {
                  type: "kern",
                  size: 0.2
                }, {
                  type: "elem",
                  elem: A
                }]
              }, s);
            }
            return R.makeSpan(["mord", h3.isOver ? "mover" : "munder"], [x], s);
          };
          te({
            type: "horizBrace",
            names: ["\\overbrace", "\\underbrace"],
            props: {
              numArgs: 1
            },
            handler(i, s) {
              let {
                parser: o,
                funcName: c3
              } = i;
              return {
                type: "horizBrace",
                mode: o.mode,
                label: c3,
                isOver: /^\\over/.test(c3),
                base: s[0]
              };
            },
            htmlBuilder: Ya,
            mathmlBuilder: (i, s) => {
              const o = Ut.mathMLnode(i.label);
              return new Y.MathNode(i.isOver ? "mover" : "munder", [Be(i.base, s), o]);
            }
          }), te({
            type: "href",
            names: ["\\href"],
            props: {
              numArgs: 2,
              argTypes: ["url", "original"],
              allowedInText: true
            },
            handler: (i, s) => {
              let {
                parser: o
              } = i;
              const c3 = s[1], h3 = xe(s[0], "url").url;
              return o.settings.isTrusted({
                command: "\\href",
                url: h3
              }) ? {
                type: "href",
                mode: o.mode,
                href: h3,
                body: Ke(c3)
              } : o.formatUnsupportedCmd("\\href");
            },
            htmlBuilder: (i, s) => {
              const o = Ze(i.body, s, false);
              return R.makeAnchor(i.href, [], o, s);
            },
            mathmlBuilder: (i, s) => {
              let o = Zt(i.body, s);
              return o instanceof gt2 || (o = new gt2("mrow", [o])), o.setAttribute("href", i.href), o;
            }
          }), te({
            type: "href",
            names: ["\\url"],
            props: {
              numArgs: 1,
              argTypes: ["url"],
              allowedInText: true
            },
            handler: (i, s) => {
              let {
                parser: o
              } = i;
              const c3 = xe(s[0], "url").url;
              if (!o.settings.isTrusted({
                command: "\\url",
                url: c3
              }))
                return o.formatUnsupportedCmd("\\url");
              const h3 = [];
              for (let b = 0; b < c3.length; b++) {
                let x = c3[b];
                x === "~" && (x = "\\textasciitilde"), h3.push({
                  type: "textord",
                  mode: "text",
                  text: x
                });
              }
              const m = {
                type: "text",
                mode: o.mode,
                font: "\\texttt",
                body: h3
              };
              return {
                type: "href",
                mode: o.mode,
                href: c3,
                body: Ke(m)
              };
            }
          }), te({
            type: "hbox",
            names: ["\\hbox"],
            props: {
              numArgs: 1,
              argTypes: ["text"],
              allowedInText: true,
              primitive: true
            },
            handler(i, s) {
              let {
                parser: o
              } = i;
              return {
                type: "hbox",
                mode: o.mode,
                body: Ke(s[0])
              };
            },
            htmlBuilder(i, s) {
              const o = Ze(i.body, s, false);
              return R.makeFragment(o);
            },
            mathmlBuilder(i, s) {
              return new Y.MathNode("mrow", ft(i.body, s));
            }
          }), te({
            type: "html",
            names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
            props: {
              numArgs: 2,
              argTypes: ["raw", "original"],
              allowedInText: true
            },
            handler: (i, s) => {
              let {
                parser: o,
                funcName: c3,
                token: h3
              } = i;
              const m = xe(s[0], "raw").string, b = s[1];
              o.settings.strict && o.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
              let x;
              const A = {};
              switch (c3) {
                case "\\htmlClass":
                  A.class = m, x = {
                    command: "\\htmlClass",
                    class: m
                  };
                  break;
                case "\\htmlId":
                  A.id = m, x = {
                    command: "\\htmlId",
                    id: m
                  };
                  break;
                case "\\htmlStyle":
                  A.style = m, x = {
                    command: "\\htmlStyle",
                    style: m
                  };
                  break;
                case "\\htmlData": {
                  const z = m.split(",");
                  for (let D = 0; D < z.length; D++) {
                    const L = z[D].split("=");
                    if (L.length !== 2)
                      throw new l3("Error parsing key-value for \\htmlData");
                    A["data-" + L[0].trim()] = L[1].trim();
                  }
                  x = {
                    command: "\\htmlData",
                    attributes: A
                  };
                  break;
                }
                default:
                  throw new Error("Unrecognized html command");
              }
              return o.settings.isTrusted(x) ? {
                type: "html",
                mode: o.mode,
                attributes: A,
                body: Ke(b)
              } : o.formatUnsupportedCmd(c3);
            },
            htmlBuilder: (i, s) => {
              const o = Ze(i.body, s, false), c3 = ["enclosing"];
              i.attributes.class && c3.push(...i.attributes.class.trim().split(/\s+/));
              const h3 = R.makeSpan(c3, o, s);
              for (const m in i.attributes)
                m !== "class" && i.attributes.hasOwnProperty(m) && h3.setAttribute(m, i.attributes[m]);
              return h3;
            },
            mathmlBuilder: (i, s) => Zt(i.body, s)
          }), te({
            type: "htmlmathml",
            names: ["\\html@mathml"],
            props: {
              numArgs: 2,
              allowedInText: true
            },
            handler: (i, s) => {
              let {
                parser: o
              } = i;
              return {
                type: "htmlmathml",
                mode: o.mode,
                html: Ke(s[0]),
                mathml: Ke(s[1])
              };
            },
            htmlBuilder: (i, s) => {
              const o = Ze(i.html, s, false);
              return R.makeFragment(o);
            },
            mathmlBuilder: (i, s) => Zt(i.mathml, s)
          });
          const yi = function(i) {
            if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(i))
              return {
                number: +i,
                unit: "bp"
              };
            {
              const s = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(i);
              if (!s)
                throw new l3("Invalid size: '" + i + "' in \\includegraphics");
              const o = {
                number: +(s[1] + s[2]),
                // sign + magnitude, cast to number
                unit: s[3]
              };
              if (!ta(o))
                throw new l3("Invalid unit: '" + o.unit + "' in \\includegraphics.");
              return o;
            }
          };
          te({
            type: "includegraphics",
            names: ["\\includegraphics"],
            props: {
              numArgs: 1,
              numOptionalArgs: 1,
              argTypes: ["raw", "url"],
              allowedInText: false
            },
            handler: (i, s, o) => {
              let {
                parser: c3
              } = i, h3 = {
                number: 0,
                unit: "em"
              }, m = {
                number: 0.9,
                unit: "em"
              }, b = {
                number: 0,
                unit: "em"
              }, x = "";
              if (o[0]) {
                const D = xe(o[0], "raw").string.split(",");
                for (let L = 0; L < D.length; L++) {
                  const P = D[L].split("=");
                  if (P.length === 2) {
                    const U = P[1].trim();
                    switch (P[0].trim()) {
                      case "alt":
                        x = U;
                        break;
                      case "width":
                        h3 = yi(U);
                        break;
                      case "height":
                        m = yi(U);
                        break;
                      case "totalheight":
                        b = yi(U);
                        break;
                      default:
                        throw new l3("Invalid key: '" + P[0] + "' in \\includegraphics.");
                    }
                  }
                }
              }
              const A = xe(s[0], "url").url;
              return x === "" && (x = A, x = x.replace(/^.*[\\/]/, ""), x = x.substring(0, x.lastIndexOf("."))), c3.settings.isTrusted({
                command: "\\includegraphics",
                url: A
              }) ? {
                type: "includegraphics",
                mode: c3.mode,
                alt: x,
                width: h3,
                height: m,
                totalheight: b,
                src: A
              } : c3.formatUnsupportedCmd("\\includegraphics");
            },
            htmlBuilder: (i, s) => {
              const o = Pe(i.height, s);
              let c3 = 0;
              i.totalheight.number > 0 && (c3 = Pe(i.totalheight, s) - o);
              let h3 = 0;
              i.width.number > 0 && (h3 = Pe(i.width, s));
              const m = {
                height: Q(o + c3)
              };
              h3 > 0 && (m.width = Q(h3)), c3 > 0 && (m.verticalAlign = Q(-c3));
              const b = new wu(i.src, i.alt, m);
              return b.height = o, b.depth = c3, b;
            },
            mathmlBuilder: (i, s) => {
              const o = new Y.MathNode("mglyph", []);
              o.setAttribute("alt", i.alt);
              const c3 = Pe(i.height, s);
              let h3 = 0;
              if (i.totalheight.number > 0 && (h3 = Pe(i.totalheight, s) - c3, o.setAttribute("valign", Q(-h3))), o.setAttribute("height", Q(c3 + h3)), i.width.number > 0) {
                const m = Pe(i.width, s);
                o.setAttribute("width", Q(m));
              }
              return o.setAttribute("src", i.src), o;
            }
          }), te({
            type: "kern",
            names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
            props: {
              numArgs: 1,
              argTypes: ["size"],
              primitive: true,
              allowedInText: true
            },
            handler(i, s) {
              let {
                parser: o,
                funcName: c3
              } = i;
              const h3 = xe(s[0], "size");
              if (o.settings.strict) {
                const m = c3[1] === "m", b = h3.value.unit === "mu";
                m ? (b || o.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + c3 + " supports only mu units, " + ("not " + h3.value.unit + " units")), o.mode !== "math" && o.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + c3 + " works only in math mode")) : b && o.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + c3 + " doesn't support mu units");
              }
              return {
                type: "kern",
                mode: o.mode,
                dimension: h3.value
              };
            },
            htmlBuilder(i, s) {
              return R.makeGlue(i.dimension, s);
            },
            mathmlBuilder(i, s) {
              const o = Pe(i.dimension, s);
              return new Y.SpaceNode(o);
            }
          }), te({
            type: "lap",
            names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
            props: {
              numArgs: 1,
              allowedInText: true
            },
            handler: (i, s) => {
              let {
                parser: o,
                funcName: c3
              } = i;
              const h3 = s[0];
              return {
                type: "lap",
                mode: o.mode,
                alignment: c3.slice(5),
                body: h3
              };
            },
            htmlBuilder: (i, s) => {
              let o;
              i.alignment === "clap" ? (o = R.makeSpan([], [Ee(i.body, s)]), o = R.makeSpan(["inner"], [o], s)) : o = R.makeSpan(["inner"], [Ee(i.body, s)]);
              const c3 = R.makeSpan(["fix"], []);
              let h3 = R.makeSpan([i.alignment], [o, c3], s);
              const m = R.makeSpan(["strut"]);
              return m.style.height = Q(h3.height + h3.depth), h3.depth && (m.style.verticalAlign = Q(-h3.depth)), h3.children.unshift(m), h3 = R.makeSpan(["thinbox"], [h3], s), R.makeSpan(["mord", "vbox"], [h3], s);
            },
            mathmlBuilder: (i, s) => {
              const o = new Y.MathNode("mpadded", [Be(i.body, s)]);
              if (i.alignment !== "rlap") {
                const c3 = i.alignment === "llap" ? "-1" : "-0.5";
                o.setAttribute("lspace", c3 + "width");
              }
              return o.setAttribute("width", "0px"), o;
            }
          }), te({
            type: "styling",
            names: ["\\(", "$"],
            props: {
              numArgs: 0,
              allowedInText: true,
              allowedInMath: false
            },
            handler(i, s) {
              let {
                funcName: o,
                parser: c3
              } = i;
              const h3 = c3.mode;
              c3.switchMode("math");
              const m = o === "\\(" ? "\\)" : "$", b = c3.parseExpression(false, m);
              return c3.expect(m), c3.switchMode(h3), {
                type: "styling",
                mode: c3.mode,
                style: "text",
                body: b
              };
            }
          }), te({
            type: "text",
            // Doesn't matter what this is.
            names: ["\\)", "\\]"],
            props: {
              numArgs: 0,
              allowedInText: true,
              allowedInMath: false
            },
            handler(i, s) {
              throw new l3("Mismatched " + i.funcName);
            }
          });
          const Ja = (i, s) => {
            switch (s.style.size) {
              case Z.DISPLAY.size:
                return i.display;
              case Z.TEXT.size:
                return i.text;
              case Z.SCRIPT.size:
                return i.script;
              case Z.SCRIPTSCRIPT.size:
                return i.scriptscript;
              default:
                return i.text;
            }
          };
          te({
            type: "mathchoice",
            names: ["\\mathchoice"],
            props: {
              numArgs: 4,
              primitive: true
            },
            handler: (i, s) => {
              let {
                parser: o
              } = i;
              return {
                type: "mathchoice",
                mode: o.mode,
                display: Ke(s[0]),
                text: Ke(s[1]),
                script: Ke(s[2]),
                scriptscript: Ke(s[3])
              };
            },
            htmlBuilder: (i, s) => {
              const o = Ja(i, s), c3 = Ze(o, s, false);
              return R.makeFragment(c3);
            },
            mathmlBuilder: (i, s) => {
              const o = Ja(i, s);
              return Zt(o, s);
            }
          });
          const Qa = (i, s, o, c3, h3, m, b) => {
            i = R.makeSpan([], [i]);
            const x = o && I3.isCharacterBox(o);
            let A, z;
            if (s) {
              const P = Ee(s, c3.havingStyle(h3.sup()), c3);
              z = {
                elem: P,
                kern: Math.max(c3.fontMetrics().bigOpSpacing1, c3.fontMetrics().bigOpSpacing3 - P.depth)
              };
            }
            if (o) {
              const P = Ee(o, c3.havingStyle(h3.sub()), c3);
              A = {
                elem: P,
                kern: Math.max(c3.fontMetrics().bigOpSpacing2, c3.fontMetrics().bigOpSpacing4 - P.height)
              };
            }
            let D;
            if (z && A) {
              const P = c3.fontMetrics().bigOpSpacing5 + A.elem.height + A.elem.depth + A.kern + i.depth + b;
              D = R.makeVList({
                positionType: "bottom",
                positionData: P,
                children: [{
                  type: "kern",
                  size: c3.fontMetrics().bigOpSpacing5
                }, {
                  type: "elem",
                  elem: A.elem,
                  marginLeft: Q(-m)
                }, {
                  type: "kern",
                  size: A.kern
                }, {
                  type: "elem",
                  elem: i
                }, {
                  type: "kern",
                  size: z.kern
                }, {
                  type: "elem",
                  elem: z.elem,
                  marginLeft: Q(m)
                }, {
                  type: "kern",
                  size: c3.fontMetrics().bigOpSpacing5
                }]
              }, c3);
            } else if (A) {
              const P = i.height - b;
              D = R.makeVList({
                positionType: "top",
                positionData: P,
                children: [{
                  type: "kern",
                  size: c3.fontMetrics().bigOpSpacing5
                }, {
                  type: "elem",
                  elem: A.elem,
                  marginLeft: Q(-m)
                }, {
                  type: "kern",
                  size: A.kern
                }, {
                  type: "elem",
                  elem: i
                }]
              }, c3);
            } else if (z) {
              const P = i.depth + b;
              D = R.makeVList({
                positionType: "bottom",
                positionData: P,
                children: [{
                  type: "elem",
                  elem: i
                }, {
                  type: "kern",
                  size: z.kern
                }, {
                  type: "elem",
                  elem: z.elem,
                  marginLeft: Q(m)
                }, {
                  type: "kern",
                  size: c3.fontMetrics().bigOpSpacing5
                }]
              }, c3);
            } else
              return i;
            const L = [D];
            if (A && m !== 0 && !x) {
              const P = R.makeSpan(["mspace"], [], c3);
              P.style.marginRight = Q(m), L.unshift(P);
            }
            return R.makeSpan(["mop", "op-limits"], L, c3);
          }, Za = ["\\smallint"], Nn = (i, s) => {
            let o, c3, h3 = false, m;
            i.type === "supsub" ? (o = i.sup, c3 = i.sub, m = xe(i.base, "op"), h3 = true) : m = xe(i, "op");
            const b = s.style;
            let x = false;
            b.size === Z.DISPLAY.size && m.symbol && !I3.contains(Za, m.name) && (x = true);
            let A;
            if (m.symbol) {
              const L = x ? "Size2-Regular" : "Size1-Regular";
              let P = "";
              if ((m.name === "\\oiint" || m.name === "\\oiiint") && (P = m.name.slice(1), m.name = P === "oiint" ? "\\iint" : "\\iiint"), A = R.makeSymbol(m.name, L, "math", s, ["mop", "op-symbol", x ? "large-op" : "small-op"]), P.length > 0) {
                const U = A.italic, re = R.staticSvg(P + "Size" + (x ? "2" : "1"), s);
                A = R.makeVList({
                  positionType: "individualShift",
                  children: [{
                    type: "elem",
                    elem: A,
                    shift: 0
                  }, {
                    type: "elem",
                    elem: re,
                    shift: x ? 0.08 : 0
                  }]
                }, s), m.name = "\\" + P, A.classes.unshift("mop"), A.italic = U;
              }
            } else if (m.body) {
              const L = Ze(m.body, s, true);
              L.length === 1 && L[0] instanceof wt ? (A = L[0], A.classes[0] = "mop") : A = R.makeSpan(["mop"], L, s);
            } else {
              const L = [];
              for (let P = 1; P < m.name.length; P++)
                L.push(R.mathsym(m.name[P], m.mode, s));
              A = R.makeSpan(["mop"], L, s);
            }
            let z = 0, D = 0;
            return (A instanceof wt || m.name === "\\oiint" || m.name === "\\oiiint") && !m.suppressBaseShift && (z = (A.height - A.depth) / 2 - s.fontMetrics().axisHeight, D = A.italic), h3 ? Qa(A, o, c3, s, b, D, z) : (z && (A.style.position = "relative", A.style.top = Q(z)), A);
          }, tr = (i, s) => {
            let o;
            if (i.symbol)
              o = new gt2("mo", [xt(i.name, i.mode)]), I3.contains(Za, i.name) && o.setAttribute("largeop", "false");
            else if (i.body)
              o = new gt2("mo", ft(i.body, s));
            else {
              o = new gt2("mi", [new Ot(i.name.slice(1))]);
              const c3 = new gt2("mo", [xt("⁡", "text")]);
              i.parentIsSupSub ? o = new gt2("mrow", [o, c3]) : o = ga([o, c3]);
            }
            return o;
          }, mh = {
            "∏": "\\prod",
            "∐": "\\coprod",
            "∑": "\\sum",
            "⋀": "\\bigwedge",
            "⋁": "\\bigvee",
            "⋂": "\\bigcap",
            "⋃": "\\bigcup",
            "⨀": "\\bigodot",
            "⨁": "\\bigoplus",
            "⨂": "\\bigotimes",
            "⨄": "\\biguplus",
            "⨆": "\\bigsqcup"
          };
          te({
            type: "op",
            names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
            props: {
              numArgs: 0
            },
            handler: (i, s) => {
              let {
                parser: o,
                funcName: c3
              } = i, h3 = c3;
              return h3.length === 1 && (h3 = mh[h3]), {
                type: "op",
                mode: o.mode,
                limits: true,
                parentIsSupSub: false,
                symbol: true,
                name: h3
              };
            },
            htmlBuilder: Nn,
            mathmlBuilder: tr
          }), te({
            type: "op",
            names: ["\\mathop"],
            props: {
              numArgs: 1,
              primitive: true
            },
            handler: (i, s) => {
              let {
                parser: o
              } = i;
              const c3 = s[0];
              return {
                type: "op",
                mode: o.mode,
                limits: false,
                parentIsSupSub: false,
                symbol: false,
                body: Ke(c3)
              };
            },
            htmlBuilder: Nn,
            mathmlBuilder: tr
          });
          const ph = {
            "∫": "\\int",
            "∬": "\\iint",
            "∭": "\\iiint",
            "∮": "\\oint",
            "∯": "\\oiint",
            "∰": "\\oiiint"
          };
          te({
            type: "op",
            names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
            props: {
              numArgs: 0
            },
            handler(i) {
              let {
                parser: s,
                funcName: o
              } = i;
              return {
                type: "op",
                mode: s.mode,
                limits: false,
                parentIsSupSub: false,
                symbol: false,
                name: o
              };
            },
            htmlBuilder: Nn,
            mathmlBuilder: tr
          }), te({
            type: "op",
            names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
            props: {
              numArgs: 0
            },
            handler(i) {
              let {
                parser: s,
                funcName: o
              } = i;
              return {
                type: "op",
                mode: s.mode,
                limits: true,
                parentIsSupSub: false,
                symbol: false,
                name: o
              };
            },
            htmlBuilder: Nn,
            mathmlBuilder: tr
          }), te({
            type: "op",
            names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
            props: {
              numArgs: 0
            },
            handler(i) {
              let {
                parser: s,
                funcName: o
              } = i, c3 = o;
              return c3.length === 1 && (c3 = ph[c3]), {
                type: "op",
                mode: s.mode,
                limits: false,
                parentIsSupSub: false,
                symbol: true,
                name: c3
              };
            },
            htmlBuilder: Nn,
            mathmlBuilder: tr
          });
          const eo = (i, s) => {
            let o, c3, h3 = false, m;
            i.type === "supsub" ? (o = i.sup, c3 = i.sub, m = xe(i.base, "operatorname"), h3 = true) : m = xe(i, "operatorname");
            let b;
            if (m.body.length > 0) {
              const x = m.body.map((z) => {
                const D = z.text;
                return typeof D == "string" ? {
                  type: "textord",
                  mode: z.mode,
                  text: D
                } : z;
              }), A = Ze(x, s.withFont("mathrm"), true);
              for (let z = 0; z < A.length; z++) {
                const D = A[z];
                D instanceof wt && (D.text = D.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
              }
              b = R.makeSpan(["mop"], A, s);
            } else
              b = R.makeSpan(["mop"], [], s);
            return h3 ? Qa(b, o, c3, s, s.style, 0, 0) : b;
          };
          te({
            type: "operatorname",
            names: ["\\operatorname@", "\\operatornamewithlimits"],
            props: {
              numArgs: 1
            },
            handler: (i, s) => {
              let {
                parser: o,
                funcName: c3
              } = i;
              const h3 = s[0];
              return {
                type: "operatorname",
                mode: o.mode,
                body: Ke(h3),
                alwaysHandleSupSub: c3 === "\\operatornamewithlimits",
                limits: false,
                parentIsSupSub: false
              };
            },
            htmlBuilder: eo,
            mathmlBuilder: (i, s) => {
              let o = ft(i.body, s.withFont("mathrm")), c3 = true;
              for (let b = 0; b < o.length; b++) {
                const x = o[b];
                if (!(x instanceof Y.SpaceNode))
                  if (x instanceof Y.MathNode)
                    switch (x.type) {
                      case "mi":
                      case "mn":
                      case "ms":
                      case "mspace":
                      case "mtext":
                        break;
                      case "mo": {
                        const A = x.children[0];
                        x.children.length === 1 && A instanceof Y.TextNode ? A.text = A.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : c3 = false;
                        break;
                      }
                      default:
                        c3 = false;
                    }
                  else
                    c3 = false;
              }
              if (c3) {
                const b = o.map((x) => x.toText()).join("");
                o = [new Y.TextNode(b)];
              }
              const h3 = new Y.MathNode("mi", o);
              h3.setAttribute("mathvariant", "normal");
              const m = new Y.MathNode("mo", [xt("⁡", "text")]);
              return i.parentIsSupSub ? new Y.MathNode("mrow", [h3, m]) : Y.newDocumentFragment([h3, m]);
            }
          }), k("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@"), un({
            type: "ordgroup",
            htmlBuilder(i, s) {
              return i.semisimple ? R.makeFragment(Ze(i.body, s, false)) : R.makeSpan(["mord"], Ze(i.body, s, true), s);
            },
            mathmlBuilder(i, s) {
              return Zt(i.body, s, true);
            }
          }), te({
            type: "overline",
            names: ["\\overline"],
            props: {
              numArgs: 1
            },
            handler(i, s) {
              let {
                parser: o
              } = i;
              const c3 = s[0];
              return {
                type: "overline",
                mode: o.mode,
                body: c3
              };
            },
            htmlBuilder(i, s) {
              const o = Ee(i.body, s.havingCrampedStyle()), c3 = R.makeLineSpan("overline-line", s), h3 = s.fontMetrics().defaultRuleThickness, m = R.makeVList({
                positionType: "firstBaseline",
                children: [{
                  type: "elem",
                  elem: o
                }, {
                  type: "kern",
                  size: 3 * h3
                }, {
                  type: "elem",
                  elem: c3
                }, {
                  type: "kern",
                  size: h3
                }]
              }, s);
              return R.makeSpan(["mord", "overline"], [m], s);
            },
            mathmlBuilder(i, s) {
              const o = new Y.MathNode("mo", [new Y.TextNode("‾")]);
              o.setAttribute("stretchy", "true");
              const c3 = new Y.MathNode("mover", [Be(i.body, s), o]);
              return c3.setAttribute("accent", "true"), c3;
            }
          }), te({
            type: "phantom",
            names: ["\\phantom"],
            props: {
              numArgs: 1,
              allowedInText: true
            },
            handler: (i, s) => {
              let {
                parser: o
              } = i;
              const c3 = s[0];
              return {
                type: "phantom",
                mode: o.mode,
                body: Ke(c3)
              };
            },
            htmlBuilder: (i, s) => {
              const o = Ze(i.body, s.withPhantom(), false);
              return R.makeFragment(o);
            },
            mathmlBuilder: (i, s) => {
              const o = ft(i.body, s);
              return new Y.MathNode("mphantom", o);
            }
          }), te({
            type: "hphantom",
            names: ["\\hphantom"],
            props: {
              numArgs: 1,
              allowedInText: true
            },
            handler: (i, s) => {
              let {
                parser: o
              } = i;
              const c3 = s[0];
              return {
                type: "hphantom",
                mode: o.mode,
                body: c3
              };
            },
            htmlBuilder: (i, s) => {
              let o = R.makeSpan([], [Ee(i.body, s.withPhantom())]);
              if (o.height = 0, o.depth = 0, o.children)
                for (let c3 = 0; c3 < o.children.length; c3++)
                  o.children[c3].height = 0, o.children[c3].depth = 0;
              return o = R.makeVList({
                positionType: "firstBaseline",
                children: [{
                  type: "elem",
                  elem: o
                }]
              }, s), R.makeSpan(["mord"], [o], s);
            },
            mathmlBuilder: (i, s) => {
              const o = ft(Ke(i.body), s), c3 = new Y.MathNode("mphantom", o), h3 = new Y.MathNode("mpadded", [c3]);
              return h3.setAttribute("height", "0px"), h3.setAttribute("depth", "0px"), h3;
            }
          }), te({
            type: "vphantom",
            names: ["\\vphantom"],
            props: {
              numArgs: 1,
              allowedInText: true
            },
            handler: (i, s) => {
              let {
                parser: o
              } = i;
              const c3 = s[0];
              return {
                type: "vphantom",
                mode: o.mode,
                body: c3
              };
            },
            htmlBuilder: (i, s) => {
              const o = R.makeSpan(["inner"], [Ee(i.body, s.withPhantom())]), c3 = R.makeSpan(["fix"], []);
              return R.makeSpan(["mord", "rlap"], [o, c3], s);
            },
            mathmlBuilder: (i, s) => {
              const o = ft(Ke(i.body), s), c3 = new Y.MathNode("mphantom", o), h3 = new Y.MathNode("mpadded", [c3]);
              return h3.setAttribute("width", "0px"), h3;
            }
          }), te({
            type: "raisebox",
            names: ["\\raisebox"],
            props: {
              numArgs: 2,
              argTypes: ["size", "hbox"],
              allowedInText: true
            },
            handler(i, s) {
              let {
                parser: o
              } = i;
              const c3 = xe(s[0], "size").value, h3 = s[1];
              return {
                type: "raisebox",
                mode: o.mode,
                dy: c3,
                body: h3
              };
            },
            htmlBuilder(i, s) {
              const o = Ee(i.body, s), c3 = Pe(i.dy, s);
              return R.makeVList({
                positionType: "shift",
                positionData: -c3,
                children: [{
                  type: "elem",
                  elem: o
                }]
              }, s);
            },
            mathmlBuilder(i, s) {
              const o = new Y.MathNode("mpadded", [Be(i.body, s)]), c3 = i.dy.number + i.dy.unit;
              return o.setAttribute("voffset", c3), o;
            }
          }), te({
            type: "internal",
            names: ["\\relax"],
            props: {
              numArgs: 0,
              allowedInText: true,
              allowedInArgument: true
            },
            handler(i) {
              let {
                parser: s
              } = i;
              return {
                type: "internal",
                mode: s.mode
              };
            }
          }), te({
            type: "rule",
            names: ["\\rule"],
            props: {
              numArgs: 2,
              numOptionalArgs: 1,
              allowedInText: true,
              allowedInMath: true,
              argTypes: ["size", "size", "size"]
            },
            handler(i, s, o) {
              let {
                parser: c3
              } = i;
              const h3 = o[0], m = xe(s[0], "size"), b = xe(s[1], "size");
              return {
                type: "rule",
                mode: c3.mode,
                shift: h3 && xe(h3, "size").value,
                width: m.value,
                height: b.value
              };
            },
            htmlBuilder(i, s) {
              const o = R.makeSpan(["mord", "rule"], [], s), c3 = Pe(i.width, s), h3 = Pe(i.height, s), m = i.shift ? Pe(i.shift, s) : 0;
              return o.style.borderRightWidth = Q(c3), o.style.borderTopWidth = Q(h3), o.style.bottom = Q(m), o.width = c3, o.height = h3 + m, o.depth = -m, o.maxFontSize = h3 * 1.125 * s.sizeMultiplier, o;
            },
            mathmlBuilder(i, s) {
              const o = Pe(i.width, s), c3 = Pe(i.height, s), h3 = i.shift ? Pe(i.shift, s) : 0, m = s.color && s.getColor() || "black", b = new Y.MathNode("mspace");
              b.setAttribute("mathbackground", m), b.setAttribute("width", Q(o)), b.setAttribute("height", Q(c3));
              const x = new Y.MathNode("mpadded", [b]);
              return h3 >= 0 ? x.setAttribute("height", Q(h3)) : (x.setAttribute("height", Q(h3)), x.setAttribute("depth", Q(-h3))), x.setAttribute("voffset", Q(h3)), x;
            }
          });
          function to(i, s, o) {
            const c3 = Ze(i, s, false), h3 = s.sizeMultiplier / o.sizeMultiplier;
            for (let m = 0; m < c3.length; m++) {
              const b = c3[m].classes.indexOf("sizing");
              b < 0 ? Array.prototype.push.apply(c3[m].classes, s.sizingClasses(o)) : c3[m].classes[b + 1] === "reset-size" + s.size && (c3[m].classes[b + 1] = "reset-size" + o.size), c3[m].height *= h3, c3[m].depth *= h3;
            }
            return R.makeFragment(c3);
          }
          const no = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];
          te({
            type: "sizing",
            names: no,
            props: {
              numArgs: 0,
              allowedInText: true
            },
            handler: (i, s) => {
              let {
                breakOnTokenText: o,
                funcName: c3,
                parser: h3
              } = i;
              const m = h3.parseExpression(false, o);
              return {
                type: "sizing",
                mode: h3.mode,
                // Figure out what size to use based on the list of functions above
                size: no.indexOf(c3) + 1,
                body: m
              };
            },
            htmlBuilder: (i, s) => {
              const o = s.havingSize(i.size);
              return to(i.body, o, s);
            },
            mathmlBuilder: (i, s) => {
              const o = s.havingSize(i.size), c3 = ft(i.body, o), h3 = new Y.MathNode("mstyle", c3);
              return h3.setAttribute("mathsize", Q(o.sizeMultiplier)), h3;
            }
          }), te({
            type: "smash",
            names: ["\\smash"],
            props: {
              numArgs: 1,
              numOptionalArgs: 1,
              allowedInText: true
            },
            handler: (i, s, o) => {
              let {
                parser: c3
              } = i, h3 = false, m = false;
              const b = o[0] && xe(o[0], "ordgroup");
              if (b) {
                let A = "";
                for (let z = 0; z < b.body.length; ++z)
                  if (A = b.body[z].text, A === "t")
                    h3 = true;
                  else if (A === "b")
                    m = true;
                  else {
                    h3 = false, m = false;
                    break;
                  }
              } else
                h3 = true, m = true;
              const x = s[0];
              return {
                type: "smash",
                mode: c3.mode,
                body: x,
                smashHeight: h3,
                smashDepth: m
              };
            },
            htmlBuilder: (i, s) => {
              const o = R.makeSpan([], [Ee(i.body, s)]);
              if (!i.smashHeight && !i.smashDepth)
                return o;
              if (i.smashHeight && (o.height = 0, o.children))
                for (let h3 = 0; h3 < o.children.length; h3++)
                  o.children[h3].height = 0;
              if (i.smashDepth && (o.depth = 0, o.children))
                for (let h3 = 0; h3 < o.children.length; h3++)
                  o.children[h3].depth = 0;
              const c3 = R.makeVList({
                positionType: "firstBaseline",
                children: [{
                  type: "elem",
                  elem: o
                }]
              }, s);
              return R.makeSpan(["mord"], [c3], s);
            },
            mathmlBuilder: (i, s) => {
              const o = new Y.MathNode("mpadded", [Be(i.body, s)]);
              return i.smashHeight && o.setAttribute("height", "0px"), i.smashDepth && o.setAttribute("depth", "0px"), o;
            }
          }), te({
            type: "sqrt",
            names: ["\\sqrt"],
            props: {
              numArgs: 1,
              numOptionalArgs: 1
            },
            handler(i, s, o) {
              let {
                parser: c3
              } = i;
              const h3 = o[0], m = s[0];
              return {
                type: "sqrt",
                mode: c3.mode,
                body: m,
                index: h3
              };
            },
            htmlBuilder(i, s) {
              let o = Ee(i.body, s.havingCrampedStyle());
              o.height === 0 && (o.height = s.fontMetrics().xHeight), o = R.wrapFragment(o, s);
              const h3 = s.fontMetrics().defaultRuleThickness;
              let m = h3;
              s.style.id < Z.TEXT.id && (m = s.fontMetrics().xHeight);
              let b = h3 + m / 4;
              const x = o.height + o.depth + b + h3, {
                span: A,
                ruleWidth: z,
                advanceWidth: D
              } = Gt.sqrtImage(x, s), L = A.height - z;
              L > o.height + o.depth + b && (b = (b + L - o.height - o.depth) / 2);
              const P = A.height - o.height - b - z;
              o.style.paddingLeft = Q(D);
              const U = R.makeVList({
                positionType: "firstBaseline",
                children: [{
                  type: "elem",
                  elem: o,
                  wrapperClasses: ["svg-align"]
                }, {
                  type: "kern",
                  size: -(o.height + P)
                }, {
                  type: "elem",
                  elem: A
                }, {
                  type: "kern",
                  size: z
                }]
              }, s);
              if (i.index) {
                const re = s.havingStyle(Z.SCRIPTSCRIPT), oe = Ee(i.index, re, s), Ne = 0.6 * (U.height - U.depth), Se = R.makeVList({
                  positionType: "shift",
                  positionData: -Ne,
                  children: [{
                    type: "elem",
                    elem: oe
                  }]
                }, s), Me = R.makeSpan(["root"], [Se]);
                return R.makeSpan(["mord", "sqrt"], [Me, U], s);
              } else
                return R.makeSpan(["mord", "sqrt"], [U], s);
            },
            mathmlBuilder(i, s) {
              const {
                body: o,
                index: c3
              } = i;
              return c3 ? new Y.MathNode("mroot", [Be(o, s), Be(c3, s)]) : new Y.MathNode("msqrt", [Be(o, s)]);
            }
          });
          const ro = {
            display: Z.DISPLAY,
            text: Z.TEXT,
            script: Z.SCRIPT,
            scriptscript: Z.SCRIPTSCRIPT
          };
          te({
            type: "styling",
            names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
            props: {
              numArgs: 0,
              allowedInText: true,
              primitive: true
            },
            handler(i, s) {
              let {
                breakOnTokenText: o,
                funcName: c3,
                parser: h3
              } = i;
              const m = h3.parseExpression(true, o), b = c3.slice(1, c3.length - 5);
              return {
                type: "styling",
                mode: h3.mode,
                // Figure out what style to use by pulling out the style from
                // the function name
                style: b,
                body: m
              };
            },
            htmlBuilder(i, s) {
              const o = ro[i.style], c3 = s.havingStyle(o).withFont("");
              return to(i.body, c3, s);
            },
            mathmlBuilder(i, s) {
              const o = ro[i.style], c3 = s.havingStyle(o), h3 = ft(i.body, c3), m = new Y.MathNode("mstyle", h3), x = {
                display: ["0", "true"],
                text: ["0", "false"],
                script: ["1", "false"],
                scriptscript: ["2", "false"]
              }[i.style];
              return m.setAttribute("scriptlevel", x[0]), m.setAttribute("displaystyle", x[1]), m;
            }
          });
          const gh = function(i, s) {
            const o = i.base;
            return o ? o.type === "op" ? o.limits && (s.style.size === Z.DISPLAY.size || o.alwaysHandleSupSub) ? Nn : null : o.type === "operatorname" ? o.alwaysHandleSupSub && (s.style.size === Z.DISPLAY.size || o.limits) ? eo : null : o.type === "accent" ? I3.isCharacterBox(o.base) ? ni : null : o.type === "horizBrace" && !i.sub === o.isOver ? Ya : null : null;
          };
          un({
            type: "supsub",
            htmlBuilder(i, s) {
              const o = gh(i, s);
              if (o)
                return o(i, s);
              const {
                base: c3,
                sup: h3,
                sub: m
              } = i, b = Ee(c3, s);
              let x, A;
              const z = s.fontMetrics();
              let D = 0, L = 0;
              const P = c3 && I3.isCharacterBox(c3);
              if (h3) {
                const Ce = s.havingStyle(s.style.sup());
                x = Ee(h3, Ce, s), P || (D = b.height - Ce.fontMetrics().supDrop * Ce.sizeMultiplier / s.sizeMultiplier);
              }
              if (m) {
                const Ce = s.havingStyle(s.style.sub());
                A = Ee(m, Ce, s), P || (L = b.depth + Ce.fontMetrics().subDrop * Ce.sizeMultiplier / s.sizeMultiplier);
              }
              let U;
              s.style === Z.DISPLAY ? U = z.sup1 : s.style.cramped ? U = z.sup3 : U = z.sup2;
              const re = s.sizeMultiplier, oe = Q(0.5 / z.ptPerEm / re);
              let Ne = null;
              if (A) {
                const Ce = i.base && i.base.type === "op" && i.base.name && (i.base.name === "\\oiint" || i.base.name === "\\oiiint");
                (b instanceof wt || Ce) && (Ne = Q(-b.italic));
              }
              let Se;
              if (x && A) {
                D = Math.max(D, U, x.depth + 0.25 * z.xHeight), L = Math.max(L, z.sub2);
                const De = 4 * z.defaultRuleThickness;
                if (D - x.depth - (A.height - L) < De) {
                  L = De - (D - x.depth) + A.height;
                  const et = 0.8 * z.xHeight - (D - x.depth);
                  et > 0 && (D += et, L -= et);
                }
                const lt = [{
                  type: "elem",
                  elem: A,
                  shift: L,
                  marginRight: oe,
                  marginLeft: Ne
                }, {
                  type: "elem",
                  elem: x,
                  shift: -D,
                  marginRight: oe
                }];
                Se = R.makeVList({
                  positionType: "individualShift",
                  children: lt
                }, s);
              } else if (A) {
                L = Math.max(L, z.sub1, A.height - 0.8 * z.xHeight);
                const Ce = [{
                  type: "elem",
                  elem: A,
                  marginLeft: Ne,
                  marginRight: oe
                }];
                Se = R.makeVList({
                  positionType: "shift",
                  positionData: L,
                  children: Ce
                }, s);
              } else if (x)
                D = Math.max(D, U, x.depth + 0.25 * z.xHeight), Se = R.makeVList({
                  positionType: "shift",
                  positionData: -D,
                  children: [{
                    type: "elem",
                    elem: x,
                    marginRight: oe
                  }]
                }, s);
              else
                throw new Error("supsub must have either sup or sub.");
              const Me = Ys(b, "right") || "mord";
              return R.makeSpan([Me], [b, R.makeSpan(["msupsub"], [Se])], s);
            },
            mathmlBuilder(i, s) {
              let o = false, c3, h3;
              i.base && i.base.type === "horizBrace" && (h3 = !!i.sup, h3 === i.base.isOver && (o = true, c3 = i.base.isOver)), i.base && (i.base.type === "op" || i.base.type === "operatorname") && (i.base.parentIsSupSub = true);
              const m = [Be(i.base, s)];
              i.sub && m.push(Be(i.sub, s)), i.sup && m.push(Be(i.sup, s));
              let b;
              if (o)
                b = c3 ? "mover" : "munder";
              else if (i.sub)
                if (i.sup) {
                  const x = i.base;
                  x && x.type === "op" && x.limits && s.style === Z.DISPLAY || x && x.type === "operatorname" && x.alwaysHandleSupSub && (s.style === Z.DISPLAY || x.limits) ? b = "munderover" : b = "msubsup";
                } else {
                  const x = i.base;
                  x && x.type === "op" && x.limits && (s.style === Z.DISPLAY || x.alwaysHandleSupSub) || x && x.type === "operatorname" && x.alwaysHandleSupSub && (x.limits || s.style === Z.DISPLAY) ? b = "munder" : b = "msub";
                }
              else {
                const x = i.base;
                x && x.type === "op" && x.limits && (s.style === Z.DISPLAY || x.alwaysHandleSupSub) || x && x.type === "operatorname" && x.alwaysHandleSupSub && (x.limits || s.style === Z.DISPLAY) ? b = "mover" : b = "msup";
              }
              return new Y.MathNode(b, m);
            }
          }), un({
            type: "atom",
            htmlBuilder(i, s) {
              return R.mathsym(i.text, i.mode, s, ["m" + i.family]);
            },
            mathmlBuilder(i, s) {
              const o = new Y.MathNode("mo", [xt(i.text, i.mode)]);
              if (i.family === "bin") {
                const c3 = Zs(i, s);
                c3 === "bold-italic" && o.setAttribute("mathvariant", c3);
              } else
                i.family === "punct" ? o.setAttribute("separator", "true") : (i.family === "open" || i.family === "close") && o.setAttribute("stretchy", "false");
              return o;
            }
          });
          const so = {
            mi: "italic",
            mn: "normal",
            mtext: "normal"
          };
          un({
            type: "mathord",
            htmlBuilder(i, s) {
              return R.makeOrd(i, s, "mathord");
            },
            mathmlBuilder(i, s) {
              const o = new Y.MathNode("mi", [xt(i.text, i.mode, s)]), c3 = Zs(i, s) || "italic";
              return c3 !== so[o.type] && o.setAttribute("mathvariant", c3), o;
            }
          }), un({
            type: "textord",
            htmlBuilder(i, s) {
              return R.makeOrd(i, s, "textord");
            },
            mathmlBuilder(i, s) {
              const o = xt(i.text, i.mode, s), c3 = Zs(i, s) || "normal";
              let h3;
              return i.mode === "text" ? h3 = new Y.MathNode("mtext", [o]) : /[0-9]/.test(i.text) ? h3 = new Y.MathNode("mn", [o]) : i.text === "\\prime" ? h3 = new Y.MathNode("mo", [o]) : h3 = new Y.MathNode("mi", [o]), c3 !== so[h3.type] && h3.setAttribute("mathvariant", c3), h3;
            }
          });
          const bi = {
            "\\nobreak": "nobreak",
            "\\allowbreak": "allowbreak"
          }, wi = {
            " ": {},
            "\\ ": {},
            "~": {
              className: "nobreak"
            },
            "\\space": {},
            "\\nobreakspace": {
              className: "nobreak"
            }
          };
          un({
            type: "spacing",
            htmlBuilder(i, s) {
              if (wi.hasOwnProperty(i.text)) {
                const o = wi[i.text].className || "";
                if (i.mode === "text") {
                  const c3 = R.makeOrd(i, s, "textord");
                  return c3.classes.push(o), c3;
                } else
                  return R.makeSpan(["mspace", o], [R.mathsym(i.text, i.mode, s)], s);
              } else {
                if (bi.hasOwnProperty(i.text))
                  return R.makeSpan(["mspace", bi[i.text]], [], s);
                throw new l3('Unknown type of space "' + i.text + '"');
              }
            },
            mathmlBuilder(i, s) {
              let o;
              if (wi.hasOwnProperty(i.text))
                o = new Y.MathNode("mtext", [new Y.TextNode(" ")]);
              else {
                if (bi.hasOwnProperty(i.text))
                  return new Y.MathNode("mspace");
                throw new l3('Unknown type of space "' + i.text + '"');
              }
              return o;
            }
          });
          const io = () => {
            const i = new Y.MathNode("mtd", []);
            return i.setAttribute("width", "50%"), i;
          };
          un({
            type: "tag",
            mathmlBuilder(i, s) {
              const o = new Y.MathNode("mtable", [new Y.MathNode("mtr", [io(), new Y.MathNode("mtd", [Zt(i.body, s)]), io(), new Y.MathNode("mtd", [Zt(i.tag, s)])])]);
              return o.setAttribute("width", "100%"), o;
            }
          });
          const ao = {
            "\\text": void 0,
            "\\textrm": "textrm",
            "\\textsf": "textsf",
            "\\texttt": "texttt",
            "\\textnormal": "textrm"
          }, oo = {
            "\\textbf": "textbf",
            "\\textmd": "textmd"
          }, yh = {
            "\\textit": "textit",
            "\\textup": "textup"
          }, lo = (i, s) => {
            const o = i.font;
            if (o) {
              if (ao[o])
                return s.withTextFontFamily(ao[o]);
              if (oo[o])
                return s.withTextFontWeight(oo[o]);
              if (o === "\\emph")
                return s.fontShape === "textit" ? s.withTextFontShape("textup") : s.withTextFontShape("textit");
            } else
              return s;
            return s.withTextFontShape(yh[o]);
          };
          te({
            type: "text",
            names: [
              // Font families
              "\\text",
              "\\textrm",
              "\\textsf",
              "\\texttt",
              "\\textnormal",
              // Font weights
              "\\textbf",
              "\\textmd",
              // Font Shapes
              "\\textit",
              "\\textup",
              "\\emph"
            ],
            props: {
              numArgs: 1,
              argTypes: ["text"],
              allowedInArgument: true,
              allowedInText: true
            },
            handler(i, s) {
              let {
                parser: o,
                funcName: c3
              } = i;
              const h3 = s[0];
              return {
                type: "text",
                mode: o.mode,
                body: Ke(h3),
                font: c3
              };
            },
            htmlBuilder(i, s) {
              const o = lo(i, s), c3 = Ze(i.body, o, true);
              return R.makeSpan(["mord", "text"], c3, o);
            },
            mathmlBuilder(i, s) {
              const o = lo(i, s);
              return Zt(i.body, o);
            }
          }), te({
            type: "underline",
            names: ["\\underline"],
            props: {
              numArgs: 1,
              allowedInText: true
            },
            handler(i, s) {
              let {
                parser: o
              } = i;
              return {
                type: "underline",
                mode: o.mode,
                body: s[0]
              };
            },
            htmlBuilder(i, s) {
              const o = Ee(i.body, s), c3 = R.makeLineSpan("underline-line", s), h3 = s.fontMetrics().defaultRuleThickness, m = R.makeVList({
                positionType: "top",
                positionData: o.height,
                children: [{
                  type: "kern",
                  size: h3
                }, {
                  type: "elem",
                  elem: c3
                }, {
                  type: "kern",
                  size: 3 * h3
                }, {
                  type: "elem",
                  elem: o
                }]
              }, s);
              return R.makeSpan(["mord", "underline"], [m], s);
            },
            mathmlBuilder(i, s) {
              const o = new Y.MathNode("mo", [new Y.TextNode("‾")]);
              o.setAttribute("stretchy", "true");
              const c3 = new Y.MathNode("munder", [Be(i.body, s), o]);
              return c3.setAttribute("accentunder", "true"), c3;
            }
          }), te({
            type: "vcenter",
            names: ["\\vcenter"],
            props: {
              numArgs: 1,
              argTypes: ["original"],
              // In LaTeX, \vcenter can act only on a box.
              allowedInText: false
            },
            handler(i, s) {
              let {
                parser: o
              } = i;
              return {
                type: "vcenter",
                mode: o.mode,
                body: s[0]
              };
            },
            htmlBuilder(i, s) {
              const o = Ee(i.body, s), c3 = s.fontMetrics().axisHeight, h3 = 0.5 * (o.height - c3 - (o.depth + c3));
              return R.makeVList({
                positionType: "shift",
                positionData: h3,
                children: [{
                  type: "elem",
                  elem: o
                }]
              }, s);
            },
            mathmlBuilder(i, s) {
              return new Y.MathNode("mpadded", [Be(i.body, s)], ["vcenter"]);
            }
          }), te({
            type: "verb",
            names: ["\\verb"],
            props: {
              numArgs: 0,
              allowedInText: true
            },
            handler(i, s, o) {
              throw new l3("\\verb ended by end of line instead of matching delimiter");
            },
            htmlBuilder(i, s) {
              const o = co(i), c3 = [], h3 = s.havingStyle(s.style.text());
              for (let m = 0; m < o.length; m++) {
                let b = o[m];
                b === "~" && (b = "\\textasciitilde"), c3.push(R.makeSymbol(b, "Typewriter-Regular", i.mode, h3, ["mord", "texttt"]));
              }
              return R.makeSpan(["mord", "text"].concat(h3.sizingClasses(s)), R.tryCombineChars(c3), h3);
            },
            mathmlBuilder(i, s) {
              const o = new Y.TextNode(co(i)), c3 = new Y.MathNode("mtext", [o]);
              return c3.setAttribute("mathvariant", "monospace"), c3;
            }
          });
          const co = (i) => i.body.replace(/ /g, i.star ? "␣" : " ");
          var tn = ma;
          const uo = `[ \r
	]`, bh = "\\\\[a-zA-Z@]+", wh = "\\\\[^\uD800-\uDFFF]", xh = "(" + bh + ")" + uo + "*", kh = `\\\\(
|[ \r	]+
?)[ \r	]*`, xi = "[̀-ͯ]", vh = new RegExp(xi + "+$"), Sh = "(" + uo + "+)|" + // whitespace
          (kh + "|") + // \whitespace
          "([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
          (xi + "*") + // ...plus accents
          "|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
          (xi + "*") + // ...plus accents
          "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
          ("|" + xh) + // \macroName + spaces
          ("|" + wh + ")");
          class ho {
            // Category codes. The lexer only supports comment characters (14) for now.
            // MacroExpander additionally distinguishes active (13).
            constructor(s, o) {
              this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = s, this.settings = o, this.tokenRegex = new RegExp(Sh, "g"), this.catcodes = {
                "%": 14,
                // comment character
                "~": 13
                // active character
              };
            }
            setCatcode(s, o) {
              this.catcodes[s] = o;
            }
            /**
             * This function lexes a single token.
             */
            lex() {
              const s = this.input, o = this.tokenRegex.lastIndex;
              if (o === s.length)
                return new kt("EOF", new yt(this, o, o));
              const c3 = this.tokenRegex.exec(s);
              if (c3 === null || c3.index !== o)
                throw new l3("Unexpected character: '" + s[o] + "'", new kt(s[o], new yt(this, o, o + 1)));
              const h3 = c3[6] || c3[3] || (c3[2] ? "\\ " : " ");
              if (this.catcodes[h3] === 14) {
                const m = s.indexOf(`
`, this.tokenRegex.lastIndex);
                return m === -1 ? (this.tokenRegex.lastIndex = s.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = m + 1, this.lex();
              }
              return new kt(h3, new yt(this, o, this.tokenRegex.lastIndex));
            }
          }
          class Ah {
            /**
             * Both arguments are optional.  The first argument is an object of
             * built-in mappings which never change.  The second argument is an object
             * of initial (global-level) mappings, which will constantly change
             * according to any global/top-level `set`s done.
             */
            constructor(s, o) {
              s === void 0 && (s = {}), o === void 0 && (o = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = o, this.builtins = s, this.undefStack = [];
            }
            /**
             * Start a new nested group, affecting future local `set`s.
             */
            beginGroup() {
              this.undefStack.push({});
            }
            /**
             * End current nested group, restoring values before the group began.
             */
            endGroup() {
              if (this.undefStack.length === 0)
                throw new l3("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
              const s = this.undefStack.pop();
              for (const o in s)
                s.hasOwnProperty(o) && (s[o] == null ? delete this.current[o] : this.current[o] = s[o]);
            }
            /**
             * Ends all currently nested groups (if any), restoring values before the
             * groups began.  Useful in case of an error in the middle of parsing.
             */
            endGroups() {
              for (; this.undefStack.length > 0; )
                this.endGroup();
            }
            /**
             * Detect whether `name` has a definition.  Equivalent to
             * `get(name) != null`.
             */
            has(s) {
              return this.current.hasOwnProperty(s) || this.builtins.hasOwnProperty(s);
            }
            /**
             * Get the current value of a name, or `undefined` if there is no value.
             *
             * Note: Do not use `if (namespace.get(...))` to detect whether a macro
             * is defined, as the definition may be the empty string which evaluates
             * to `false` in JavaScript.  Use `if (namespace.get(...) != null)` or
             * `if (namespace.has(...))`.
             */
            get(s) {
              return this.current.hasOwnProperty(s) ? this.current[s] : this.builtins[s];
            }
            /**
             * Set the current value of a name, and optionally set it globally too.
             * Local set() sets the current value and (when appropriate) adds an undo
             * operation to the undo stack.  Global set() may change the undo
             * operation at every level, so takes time linear in their number.
             * A value of undefined means to delete existing definitions.
             */
            set(s, o, c3) {
              if (c3 === void 0 && (c3 = false), c3) {
                for (let h3 = 0; h3 < this.undefStack.length; h3++)
                  delete this.undefStack[h3][s];
                this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][s] = o);
              } else {
                const h3 = this.undefStack[this.undefStack.length - 1];
                h3 && !h3.hasOwnProperty(s) && (h3[s] = this.current[s]);
              }
              o == null ? delete this.current[s] : this.current[s] = o;
            }
          }
          var Th = Pa;
          k("\\noexpand", function(i) {
            const s = i.popToken();
            return i.isExpandable(s.text) && (s.noexpand = true, s.treatAsRelax = true), {
              tokens: [s],
              numArgs: 0
            };
          }), k("\\expandafter", function(i) {
            const s = i.popToken();
            return i.expandOnce(true), {
              tokens: [s],
              numArgs: 0
            };
          }), k("\\@firstoftwo", function(i) {
            return {
              tokens: i.consumeArgs(2)[0],
              numArgs: 0
            };
          }), k("\\@secondoftwo", function(i) {
            return {
              tokens: i.consumeArgs(2)[1],
              numArgs: 0
            };
          }), k("\\@ifnextchar", function(i) {
            const s = i.consumeArgs(3);
            i.consumeSpaces();
            const o = i.future();
            return s[0].length === 1 && s[0][0].text === o.text ? {
              tokens: s[1],
              numArgs: 0
            } : {
              tokens: s[2],
              numArgs: 0
            };
          }), k("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"), k("\\TextOrMath", function(i) {
            const s = i.consumeArgs(2);
            return i.mode === "text" ? {
              tokens: s[0],
              numArgs: 0
            } : {
              tokens: s[1],
              numArgs: 0
            };
          });
          const fo = {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            a: 10,
            A: 10,
            b: 11,
            B: 11,
            c: 12,
            C: 12,
            d: 13,
            D: 13,
            e: 14,
            E: 14,
            f: 15,
            F: 15
          };
          k("\\char", function(i) {
            let s = i.popToken(), o, c3 = "";
            if (s.text === "'")
              o = 8, s = i.popToken();
            else if (s.text === '"')
              o = 16, s = i.popToken();
            else if (s.text === "`")
              if (s = i.popToken(), s.text[0] === "\\")
                c3 = s.text.charCodeAt(1);
              else {
                if (s.text === "EOF")
                  throw new l3("\\char` missing argument");
                c3 = s.text.charCodeAt(0);
              }
            else
              o = 10;
            if (o) {
              if (c3 = fo[s.text], c3 == null || c3 >= o)
                throw new l3("Invalid base-" + o + " digit " + s.text);
              let h3;
              for (; (h3 = fo[i.future().text]) != null && h3 < o; )
                c3 *= o, c3 += h3, i.popToken();
            }
            return "\\@char{" + c3 + "}";
          });
          const ki = (i, s, o, c3) => {
            let h3 = i.consumeArg().tokens;
            if (h3.length !== 1)
              throw new l3("\\newcommand's first argument must be a macro name");
            const m = h3[0].text, b = i.isDefined(m);
            if (b && !s)
              throw new l3("\\newcommand{" + m + "} attempting to redefine " + (m + "; use \\renewcommand"));
            if (!b && !o)
              throw new l3("\\renewcommand{" + m + "} when command " + m + " does not yet exist; use \\newcommand");
            let x = 0;
            if (h3 = i.consumeArg().tokens, h3.length === 1 && h3[0].text === "[") {
              let A = "", z = i.expandNextToken();
              for (; z.text !== "]" && z.text !== "EOF"; )
                A += z.text, z = i.expandNextToken();
              if (!A.match(/^\s*[0-9]+\s*$/))
                throw new l3("Invalid number of arguments: " + A);
              x = parseInt(A), h3 = i.consumeArg().tokens;
            }
            return b && c3 || i.macros.set(m, {
              tokens: h3,
              numArgs: x
            }), "";
          };
          k("\\newcommand", (i) => ki(i, false, true, false)), k("\\renewcommand", (i) => ki(i, true, false, false)), k("\\providecommand", (i) => ki(i, true, true, true)), k("\\message", (i) => {
            const s = i.consumeArgs(1)[0];
            return console.log(s.reverse().map((o) => o.text).join("")), "";
          }), k("\\errmessage", (i) => {
            const s = i.consumeArgs(1)[0];
            return console.error(s.reverse().map((o) => o.text).join("")), "";
          }), k("\\show", (i) => {
            const s = i.popToken(), o = s.text;
            return console.log(s, i.macros.get(o), tn[o], Fe.math[o], Fe.text[o]), "";
          }), k("\\bgroup", "{"), k("\\egroup", "}"), k("~", "\\nobreakspace"), k("\\lq", "`"), k("\\rq", "'"), k("\\aa", "\\r a"), k("\\AA", "\\r A"), k("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}"), k("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}"), k("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}"), k("ℬ", "\\mathscr{B}"), k("ℰ", "\\mathscr{E}"), k("ℱ", "\\mathscr{F}"), k("ℋ", "\\mathscr{H}"), k("ℐ", "\\mathscr{I}"), k("ℒ", "\\mathscr{L}"), k("ℳ", "\\mathscr{M}"), k("ℛ", "\\mathscr{R}"), k("ℭ", "\\mathfrak{C}"), k("ℌ", "\\mathfrak{H}"), k("ℨ", "\\mathfrak{Z}"), k("\\Bbbk", "\\Bbb{k}"), k("·", "\\cdotp"), k("\\llap", "\\mathllap{\\textrm{#1}}"), k("\\rlap", "\\mathrlap{\\textrm{#1}}"), k("\\clap", "\\mathclap{\\textrm{#1}}"), k("\\mathstrut", "\\vphantom{(}"), k("\\underbar", "\\underline{\\text{#1}}"), k("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}'), k("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}"), k("\\ne", "\\neq"), k("≠", "\\neq"), k("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}"), k("∉", "\\notin"), k("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}"), k("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}"), k("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}"), k("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}"), k("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}"), k("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}"), k("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}"), k("⟂", "\\perp"), k("‼", "\\mathclose{!\\mkern-0.8mu!}"), k("∌", "\\notni"), k("⌜", "\\ulcorner"), k("⌝", "\\urcorner"), k("⌞", "\\llcorner"), k("⌟", "\\lrcorner"), k("©", "\\copyright"), k("®", "\\textregistered"), k("️", "\\textregistered"), k("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}'), k("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}'), k("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}'), k("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}'), k("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}"), k("⋮", "\\vdots"), k("\\varGamma", "\\mathit{\\Gamma}"), k("\\varDelta", "\\mathit{\\Delta}"), k("\\varTheta", "\\mathit{\\Theta}"), k("\\varLambda", "\\mathit{\\Lambda}"), k("\\varXi", "\\mathit{\\Xi}"), k("\\varPi", "\\mathit{\\Pi}"), k("\\varSigma", "\\mathit{\\Sigma}"), k("\\varUpsilon", "\\mathit{\\Upsilon}"), k("\\varPhi", "\\mathit{\\Phi}"), k("\\varPsi", "\\mathit{\\Psi}"), k("\\varOmega", "\\mathit{\\Omega}"), k("\\substack", "\\begin{subarray}{c}#1\\end{subarray}"), k("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax"), k("\\boxed", "\\fbox{$\\displaystyle{#1}$}"), k("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"), k("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"), k("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;"), k("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}"), k("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
          const mo = {
            ",": "\\dotsc",
            "\\not": "\\dotsb",
            // \keybin@ checks for the following:
            "+": "\\dotsb",
            "=": "\\dotsb",
            "<": "\\dotsb",
            ">": "\\dotsb",
            "-": "\\dotsb",
            "*": "\\dotsb",
            ":": "\\dotsb",
            // Symbols whose definition starts with \DOTSB:
            "\\DOTSB": "\\dotsb",
            "\\coprod": "\\dotsb",
            "\\bigvee": "\\dotsb",
            "\\bigwedge": "\\dotsb",
            "\\biguplus": "\\dotsb",
            "\\bigcap": "\\dotsb",
            "\\bigcup": "\\dotsb",
            "\\prod": "\\dotsb",
            "\\sum": "\\dotsb",
            "\\bigotimes": "\\dotsb",
            "\\bigoplus": "\\dotsb",
            "\\bigodot": "\\dotsb",
            "\\bigsqcup": "\\dotsb",
            "\\And": "\\dotsb",
            "\\longrightarrow": "\\dotsb",
            "\\Longrightarrow": "\\dotsb",
            "\\longleftarrow": "\\dotsb",
            "\\Longleftarrow": "\\dotsb",
            "\\longleftrightarrow": "\\dotsb",
            "\\Longleftrightarrow": "\\dotsb",
            "\\mapsto": "\\dotsb",
            "\\longmapsto": "\\dotsb",
            "\\hookrightarrow": "\\dotsb",
            "\\doteq": "\\dotsb",
            // Symbols whose definition starts with \mathbin:
            "\\mathbin": "\\dotsb",
            // Symbols whose definition starts with \mathrel:
            "\\mathrel": "\\dotsb",
            "\\relbar": "\\dotsb",
            "\\Relbar": "\\dotsb",
            "\\xrightarrow": "\\dotsb",
            "\\xleftarrow": "\\dotsb",
            // Symbols whose definition starts with \DOTSI:
            "\\DOTSI": "\\dotsi",
            "\\int": "\\dotsi",
            "\\oint": "\\dotsi",
            "\\iint": "\\dotsi",
            "\\iiint": "\\dotsi",
            "\\iiiint": "\\dotsi",
            "\\idotsint": "\\dotsi",
            // Symbols whose definition starts with \DOTSX:
            "\\DOTSX": "\\dotsx"
          };
          k("\\dots", function(i) {
            let s = "\\dotso";
            const o = i.expandAfterFuture().text;
            return o in mo ? s = mo[o] : (o.slice(0, 4) === "\\not" || o in Fe.math && I3.contains(["bin", "rel"], Fe.math[o].group)) && (s = "\\dotsb"), s;
          });
          const vi = {
            // \rightdelim@ checks for the following:
            ")": true,
            "]": true,
            "\\rbrack": true,
            "\\}": true,
            "\\rbrace": true,
            "\\rangle": true,
            "\\rceil": true,
            "\\rfloor": true,
            "\\rgroup": true,
            "\\rmoustache": true,
            "\\right": true,
            "\\bigr": true,
            "\\biggr": true,
            "\\Bigr": true,
            "\\Biggr": true,
            // \extra@ also tests for the following:
            $: true,
            // \extrap@ checks for the following:
            ";": true,
            ".": true,
            ",": true
          };
          k("\\dotso", function(i) {
            return i.future().text in vi ? "\\ldots\\," : "\\ldots";
          }), k("\\dotsc", function(i) {
            const s = i.future().text;
            return s in vi && s !== "," ? "\\ldots\\," : "\\ldots";
          }), k("\\cdots", function(i) {
            return i.future().text in vi ? "\\@cdots\\," : "\\@cdots";
          }), k("\\dotsb", "\\cdots"), k("\\dotsm", "\\cdots"), k("\\dotsi", "\\!\\cdots"), k("\\dotsx", "\\ldots\\,"), k("\\DOTSI", "\\relax"), k("\\DOTSB", "\\relax"), k("\\DOTSX", "\\relax"), k("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax"), k("\\,", "\\tmspace+{3mu}{.1667em}"), k("\\thinspace", "\\,"), k("\\>", "\\mskip{4mu}"), k("\\:", "\\tmspace+{4mu}{.2222em}"), k("\\medspace", "\\:"), k("\\;", "\\tmspace+{5mu}{.2777em}"), k("\\thickspace", "\\;"), k("\\!", "\\tmspace-{3mu}{.1667em}"), k("\\negthinspace", "\\!"), k("\\negmedspace", "\\tmspace-{4mu}{.2222em}"), k("\\negthickspace", "\\tmspace-{5mu}{.277em}"), k("\\enspace", "\\kern.5em "), k("\\enskip", "\\hskip.5em\\relax"), k("\\quad", "\\hskip1em\\relax"), k("\\qquad", "\\hskip2em\\relax"), k("\\tag", "\\@ifstar\\tag@literal\\tag@paren"), k("\\tag@paren", "\\tag@literal{({#1})}"), k("\\tag@literal", (i) => {
            if (i.macros.get("\\df@tag"))
              throw new l3("Multiple \\tag");
            return "\\gdef\\df@tag{\\text{#1}}";
          }), k("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"), k("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)"), k("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}"), k("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"), k("\\newline", "\\\\\\relax"), k("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
          const po = Q(zt["Main-Regular"][84][1] - 0.7 * zt["Main-Regular"][65][1]);
          k("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + po + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}"), k("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + po + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}"), k("\\hspace", "\\@ifstar\\@hspacer\\@hspace"), k("\\@hspace", "\\hskip #1\\relax"), k("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax"), k("\\ordinarycolon", ":"), k("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"), k("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}'), k("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}'), k("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}'), k("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}'), k("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}'), k("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}'), k("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}'), k("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}'), k("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}'), k("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}'), k("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}'), k("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}'), k("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}'), k("∷", "\\dblcolon"), k("∹", "\\eqcolon"), k("≔", "\\coloneqq"), k("≕", "\\eqqcolon"), k("⩴", "\\Coloneqq"), k("\\ratio", "\\vcentcolon"), k("\\coloncolon", "\\dblcolon"), k("\\colonequals", "\\coloneqq"), k("\\coloncolonequals", "\\Coloneqq"), k("\\equalscolon", "\\eqqcolon"), k("\\equalscoloncolon", "\\Eqqcolon"), k("\\colonminus", "\\coloneq"), k("\\coloncolonminus", "\\Coloneq"), k("\\minuscolon", "\\eqcolon"), k("\\minuscoloncolon", "\\Eqcolon"), k("\\coloncolonapprox", "\\Colonapprox"), k("\\coloncolonsim", "\\Colonsim"), k("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), k("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}"), k("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), k("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}"), k("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}"), k("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}"), k("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}"), k("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}"), k("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}"), k("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}"), k("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}"), k("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}"), k("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}"), k("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}"), k("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}"), k("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}"), k("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}"), k("\\nleqq", "\\html@mathml{\\@nleqq}{≰}"), k("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}"), k("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}"), k("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}"), k("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}"), k("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}"), k("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}"), k("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}"), k("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}"), k("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}"), k("\\imath", "\\html@mathml{\\@imath}{ı}"), k("\\jmath", "\\html@mathml{\\@jmath}{ȷ}"), k("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}"), k("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}"), k("⟦", "\\llbracket"), k("⟧", "\\rrbracket"), k("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}"), k("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}"), k("⦃", "\\lBrace"), k("⦄", "\\rBrace"), k("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}"), k("⦵", "\\minuso"), k("\\darr", "\\downarrow"), k("\\dArr", "\\Downarrow"), k("\\Darr", "\\Downarrow"), k("\\lang", "\\langle"), k("\\rang", "\\rangle"), k("\\uarr", "\\uparrow"), k("\\uArr", "\\Uparrow"), k("\\Uarr", "\\Uparrow"), k("\\N", "\\mathbb{N}"), k("\\R", "\\mathbb{R}"), k("\\Z", "\\mathbb{Z}"), k("\\alef", "\\aleph"), k("\\alefsym", "\\aleph"), k("\\Alpha", "\\mathrm{A}"), k("\\Beta", "\\mathrm{B}"), k("\\bull", "\\bullet"), k("\\Chi", "\\mathrm{X}"), k("\\clubs", "\\clubsuit"), k("\\cnums", "\\mathbb{C}"), k("\\Complex", "\\mathbb{C}"), k("\\Dagger", "\\ddagger"), k("\\diamonds", "\\diamondsuit"), k("\\empty", "\\emptyset"), k("\\Epsilon", "\\mathrm{E}"), k("\\Eta", "\\mathrm{H}"), k("\\exist", "\\exists"), k("\\harr", "\\leftrightarrow"), k("\\hArr", "\\Leftrightarrow"), k("\\Harr", "\\Leftrightarrow"), k("\\hearts", "\\heartsuit"), k("\\image", "\\Im"), k("\\infin", "\\infty"), k("\\Iota", "\\mathrm{I}"), k("\\isin", "\\in"), k("\\Kappa", "\\mathrm{K}"), k("\\larr", "\\leftarrow"), k("\\lArr", "\\Leftarrow"), k("\\Larr", "\\Leftarrow"), k("\\lrarr", "\\leftrightarrow"), k("\\lrArr", "\\Leftrightarrow"), k("\\Lrarr", "\\Leftrightarrow"), k("\\Mu", "\\mathrm{M}"), k("\\natnums", "\\mathbb{N}"), k("\\Nu", "\\mathrm{N}"), k("\\Omicron", "\\mathrm{O}"), k("\\plusmn", "\\pm"), k("\\rarr", "\\rightarrow"), k("\\rArr", "\\Rightarrow"), k("\\Rarr", "\\Rightarrow"), k("\\real", "\\Re"), k("\\reals", "\\mathbb{R}"), k("\\Reals", "\\mathbb{R}"), k("\\Rho", "\\mathrm{P}"), k("\\sdot", "\\cdot"), k("\\sect", "\\S"), k("\\spades", "\\spadesuit"), k("\\sub", "\\subset"), k("\\sube", "\\subseteq"), k("\\supe", "\\supseteq"), k("\\Tau", "\\mathrm{T}"), k("\\thetasym", "\\vartheta"), k("\\weierp", "\\wp"), k("\\Zeta", "\\mathrm{Z}"), k("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}"), k("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}"), k("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits"), k("\\bra", "\\mathinner{\\langle{#1}|}"), k("\\ket", "\\mathinner{|{#1}\\rangle}"), k("\\braket", "\\mathinner{\\langle{#1}\\rangle}"), k("\\Bra", "\\left\\langle#1\\right|"), k("\\Ket", "\\left|#1\\right\\rangle");
          const go = (i) => (s) => {
            const o = s.consumeArg().tokens, c3 = s.consumeArg().tokens, h3 = s.consumeArg().tokens, m = s.consumeArg().tokens, b = s.macros.get("|"), x = s.macros.get("\\|");
            s.macros.beginGroup();
            const A = (L) => (P) => {
              i && (P.macros.set("|", b), h3.length && P.macros.set("\\|", x));
              let U = L;
              return !L && h3.length && P.future().text === "|" && (P.popToken(), U = true), {
                tokens: U ? h3 : c3,
                numArgs: 0
              };
            };
            s.macros.set("|", A(false)), h3.length && s.macros.set("\\|", A(true));
            const z = s.consumeArg().tokens, D = s.expandTokens([
              ...m,
              ...z,
              ...o
              // reversed
            ]);
            return s.macros.endGroup(), {
              tokens: D.reverse(),
              numArgs: 0
            };
          };
          k("\\bra@ket", go(false)), k("\\bra@set", go(true)), k("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}"), k("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}"), k("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}"), k("\\angln", "{\\angl n}"), k("\\blue", "\\textcolor{##6495ed}{#1}"), k("\\orange", "\\textcolor{##ffa500}{#1}"), k("\\pink", "\\textcolor{##ff00af}{#1}"), k("\\red", "\\textcolor{##df0030}{#1}"), k("\\green", "\\textcolor{##28ae7b}{#1}"), k("\\gray", "\\textcolor{gray}{#1}"), k("\\purple", "\\textcolor{##9d38bd}{#1}"), k("\\blueA", "\\textcolor{##ccfaff}{#1}"), k("\\blueB", "\\textcolor{##80f6ff}{#1}"), k("\\blueC", "\\textcolor{##63d9ea}{#1}"), k("\\blueD", "\\textcolor{##11accd}{#1}"), k("\\blueE", "\\textcolor{##0c7f99}{#1}"), k("\\tealA", "\\textcolor{##94fff5}{#1}"), k("\\tealB", "\\textcolor{##26edd5}{#1}"), k("\\tealC", "\\textcolor{##01d1c1}{#1}"), k("\\tealD", "\\textcolor{##01a995}{#1}"), k("\\tealE", "\\textcolor{##208170}{#1}"), k("\\greenA", "\\textcolor{##b6ffb0}{#1}"), k("\\greenB", "\\textcolor{##8af281}{#1}"), k("\\greenC", "\\textcolor{##74cf70}{#1}"), k("\\greenD", "\\textcolor{##1fab54}{#1}"), k("\\greenE", "\\textcolor{##0d923f}{#1}"), k("\\goldA", "\\textcolor{##ffd0a9}{#1}"), k("\\goldB", "\\textcolor{##ffbb71}{#1}"), k("\\goldC", "\\textcolor{##ff9c39}{#1}"), k("\\goldD", "\\textcolor{##e07d10}{#1}"), k("\\goldE", "\\textcolor{##a75a05}{#1}"), k("\\redA", "\\textcolor{##fca9a9}{#1}"), k("\\redB", "\\textcolor{##ff8482}{#1}"), k("\\redC", "\\textcolor{##f9685d}{#1}"), k("\\redD", "\\textcolor{##e84d39}{#1}"), k("\\redE", "\\textcolor{##bc2612}{#1}"), k("\\maroonA", "\\textcolor{##ffbde0}{#1}"), k("\\maroonB", "\\textcolor{##ff92c6}{#1}"), k("\\maroonC", "\\textcolor{##ed5fa6}{#1}"), k("\\maroonD", "\\textcolor{##ca337c}{#1}"), k("\\maroonE", "\\textcolor{##9e034e}{#1}"), k("\\purpleA", "\\textcolor{##ddd7ff}{#1}"), k("\\purpleB", "\\textcolor{##c6b9fc}{#1}"), k("\\purpleC", "\\textcolor{##aa87ff}{#1}"), k("\\purpleD", "\\textcolor{##7854ab}{#1}"), k("\\purpleE", "\\textcolor{##543b78}{#1}"), k("\\mintA", "\\textcolor{##f5f9e8}{#1}"), k("\\mintB", "\\textcolor{##edf2df}{#1}"), k("\\mintC", "\\textcolor{##e0e5cc}{#1}"), k("\\grayA", "\\textcolor{##f6f7f7}{#1}"), k("\\grayB", "\\textcolor{##f0f1f2}{#1}"), k("\\grayC", "\\textcolor{##e3e5e6}{#1}"), k("\\grayD", "\\textcolor{##d6d8da}{#1}"), k("\\grayE", "\\textcolor{##babec2}{#1}"), k("\\grayF", "\\textcolor{##888d93}{#1}"), k("\\grayG", "\\textcolor{##626569}{#1}"), k("\\grayH", "\\textcolor{##3b3e40}{#1}"), k("\\grayI", "\\textcolor{##21242c}{#1}"), k("\\kaBlue", "\\textcolor{##314453}{#1}"), k("\\kaGreen", "\\textcolor{##71B307}{#1}");
          const yo = {
            "^": true,
            // Parser.js
            _: true,
            // Parser.js
            "\\limits": true,
            // Parser.js
            "\\nolimits": true
            // Parser.js
          };
          class Nh {
            constructor(s, o, c3) {
              this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = o, this.expansionCount = 0, this.feed(s), this.macros = new Ah(Th, o.macros), this.mode = c3, this.stack = [];
            }
            /**
             * Feed a new input string to the same MacroExpander
             * (with existing macros etc.).
             */
            feed(s) {
              this.lexer = new ho(s, this.settings);
            }
            /**
             * Switches between "text" and "math" modes.
             */
            switchMode(s) {
              this.mode = s;
            }
            /**
             * Start a new group nesting within all namespaces.
             */
            beginGroup() {
              this.macros.beginGroup();
            }
            /**
             * End current group nesting within all namespaces.
             */
            endGroup() {
              this.macros.endGroup();
            }
            /**
             * Ends all currently nested groups (if any), restoring values before the
             * groups began.  Useful in case of an error in the middle of parsing.
             */
            endGroups() {
              this.macros.endGroups();
            }
            /**
             * Returns the topmost token on the stack, without expanding it.
             * Similar in behavior to TeX's `\futurelet`.
             */
            future() {
              return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
            }
            /**
             * Remove and return the next unexpanded token.
             */
            popToken() {
              return this.future(), this.stack.pop();
            }
            /**
             * Add a given token to the token stack.  In particular, this get be used
             * to put back a token returned from one of the other methods.
             */
            pushToken(s) {
              this.stack.push(s);
            }
            /**
             * Append an array of tokens to the token stack.
             */
            pushTokens(s) {
              this.stack.push(...s);
            }
            /**
             * Find an macro argument without expanding tokens and append the array of
             * tokens to the token stack. Uses Token as a container for the result.
             */
            scanArgument(s) {
              let o, c3, h3;
              if (s) {
                if (this.consumeSpaces(), this.future().text !== "[")
                  return null;
                o = this.popToken(), {
                  tokens: h3,
                  end: c3
                } = this.consumeArg(["]"]);
              } else
                ({
                  tokens: h3,
                  start: o,
                  end: c3
                } = this.consumeArg());
              return this.pushToken(new kt("EOF", c3.loc)), this.pushTokens(h3), o.range(c3, "");
            }
            /**
             * Consume all following space tokens, without expansion.
             */
            consumeSpaces() {
              for (; this.future().text === " "; )
                this.stack.pop();
            }
            /**
             * Consume an argument from the token stream, and return the resulting array
             * of tokens and start/end token.
             */
            consumeArg(s) {
              const o = [], c3 = s && s.length > 0;
              c3 || this.consumeSpaces();
              const h3 = this.future();
              let m, b = 0, x = 0;
              do {
                if (m = this.popToken(), o.push(m), m.text === "{")
                  ++b;
                else if (m.text === "}") {
                  if (--b, b === -1)
                    throw new l3("Extra }", m);
                } else if (m.text === "EOF")
                  throw new l3("Unexpected end of input in a macro argument, expected '" + (s && c3 ? s[x] : "}") + "'", m);
                if (s && c3)
                  if ((b === 0 || b === 1 && s[x] === "{") && m.text === s[x]) {
                    if (++x, x === s.length) {
                      o.splice(-x, x);
                      break;
                    }
                  } else
                    x = 0;
              } while (b !== 0 || c3);
              return h3.text === "{" && o[o.length - 1].text === "}" && (o.pop(), o.shift()), o.reverse(), {
                tokens: o,
                start: h3,
                end: m
              };
            }
            /**
             * Consume the specified number of (delimited) arguments from the token
             * stream and return the resulting array of arguments.
             */
            consumeArgs(s, o) {
              if (o) {
                if (o.length !== s + 1)
                  throw new l3("The length of delimiters doesn't match the number of args!");
                const h3 = o[0];
                for (let m = 0; m < h3.length; m++) {
                  const b = this.popToken();
                  if (h3[m] !== b.text)
                    throw new l3("Use of the macro doesn't match its definition", b);
                }
              }
              const c3 = [];
              for (let h3 = 0; h3 < s; h3++)
                c3.push(this.consumeArg(o && o[h3 + 1]).tokens);
              return c3;
            }
            /**
             * Increment `expansionCount` by the specified amount.
             * Throw an error if it exceeds `maxExpand`.
             */
            countExpansion(s) {
              if (this.expansionCount += s, this.expansionCount > this.settings.maxExpand)
                throw new l3("Too many expansions: infinite loop or need to increase maxExpand setting");
            }
            /**
             * Expand the next token only once if possible.
             *
             * If the token is expanded, the resulting tokens will be pushed onto
             * the stack in reverse order, and the number of such tokens will be
             * returned.  This number might be zero or positive.
             *
             * If not, the return value is `false`, and the next token remains at the
             * top of the stack.
             *
             * In either case, the next token will be on the top of the stack,
             * or the stack will be empty (in case of empty expansion
             * and no other tokens).
             *
             * Used to implement `expandAfterFuture` and `expandNextToken`.
             *
             * If expandableOnly, only expandable tokens are expanded and
             * an undefined control sequence results in an error.
             */
            expandOnce(s) {
              const o = this.popToken(), c3 = o.text, h3 = o.noexpand ? null : this._getExpansion(c3);
              if (h3 == null || s && h3.unexpandable) {
                if (s && h3 == null && c3[0] === "\\" && !this.isDefined(c3))
                  throw new l3("Undefined control sequence: " + c3);
                return this.pushToken(o), false;
              }
              this.countExpansion(1);
              let m = h3.tokens;
              const b = this.consumeArgs(h3.numArgs, h3.delimiters);
              if (h3.numArgs) {
                m = m.slice();
                for (let x = m.length - 1; x >= 0; --x) {
                  let A = m[x];
                  if (A.text === "#") {
                    if (x === 0)
                      throw new l3("Incomplete placeholder at end of macro body", A);
                    if (A = m[--x], A.text === "#")
                      m.splice(x + 1, 1);
                    else if (/^[1-9]$/.test(A.text))
                      m.splice(x, 2, ...b[+A.text - 1]);
                    else
                      throw new l3("Not a valid argument number", A);
                  }
                }
              }
              return this.pushTokens(m), m.length;
            }
            /**
             * Expand the next token only once (if possible), and return the resulting
             * top token on the stack (without removing anything from the stack).
             * Similar in behavior to TeX's `\expandafter\futurelet`.
             * Equivalent to expandOnce() followed by future().
             */
            expandAfterFuture() {
              return this.expandOnce(), this.future();
            }
            /**
             * Recursively expand first token, then return first non-expandable token.
             */
            expandNextToken() {
              for (; ; )
                if (this.expandOnce() === false) {
                  const s = this.stack.pop();
                  return s.treatAsRelax && (s.text = "\\relax"), s;
                }
              throw new Error();
            }
            /**
             * Fully expand the given macro name and return the resulting list of
             * tokens, or return `undefined` if no such macro is defined.
             */
            expandMacro(s) {
              return this.macros.has(s) ? this.expandTokens([new kt(s)]) : void 0;
            }
            /**
             * Fully expand the given token stream and return the resulting list of
             * tokens.  Note that the input tokens are in reverse order, but the
             * output tokens are in forward order.
             */
            expandTokens(s) {
              const o = [], c3 = this.stack.length;
              for (this.pushTokens(s); this.stack.length > c3; )
                if (this.expandOnce(true) === false) {
                  const h3 = this.stack.pop();
                  h3.treatAsRelax && (h3.noexpand = false, h3.treatAsRelax = false), o.push(h3);
                }
              return this.countExpansion(o.length), o;
            }
            /**
             * Fully expand the given macro name and return the result as a string,
             * or return `undefined` if no such macro is defined.
             */
            expandMacroAsText(s) {
              const o = this.expandMacro(s);
              return o && o.map((c3) => c3.text).join("");
            }
            /**
             * Returns the expanded macro as a reversed array of tokens and a macro
             * argument count.  Or returns `null` if no such macro.
             */
            _getExpansion(s) {
              const o = this.macros.get(s);
              if (o == null)
                return o;
              if (s.length === 1) {
                const h3 = this.lexer.catcodes[s];
                if (h3 != null && h3 !== 13)
                  return;
              }
              const c3 = typeof o == "function" ? o(this) : o;
              if (typeof c3 == "string") {
                let h3 = 0;
                if (c3.indexOf("#") !== -1) {
                  const z = c3.replace(/##/g, "");
                  for (; z.indexOf("#" + (h3 + 1)) !== -1; )
                    ++h3;
                }
                const m = new ho(c3, this.settings), b = [];
                let x = m.lex();
                for (; x.text !== "EOF"; )
                  b.push(x), x = m.lex();
                return b.reverse(), {
                  tokens: b,
                  numArgs: h3
                };
              }
              return c3;
            }
            /**
             * Determine whether a command is currently "defined" (has some
             * functionality), meaning that it's a macro (in the current group),
             * a function, a symbol, or one of the special commands listed in
             * `implicitCommands`.
             */
            isDefined(s) {
              return this.macros.has(s) || tn.hasOwnProperty(s) || Fe.math.hasOwnProperty(s) || Fe.text.hasOwnProperty(s) || yo.hasOwnProperty(s);
            }
            /**
             * Determine whether a command is expandable.
             */
            isExpandable(s) {
              const o = this.macros.get(s);
              return o != null ? typeof o == "string" || typeof o == "function" || !o.unexpandable : tn.hasOwnProperty(s) && !tn[s].primitive;
            }
          }
          const bo = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, Wr = Object.freeze({
            "₊": "+",
            "₋": "-",
            "₌": "=",
            "₍": "(",
            "₎": ")",
            "₀": "0",
            "₁": "1",
            "₂": "2",
            "₃": "3",
            "₄": "4",
            "₅": "5",
            "₆": "6",
            "₇": "7",
            "₈": "8",
            "₉": "9",
            "ₐ": "a",
            "ₑ": "e",
            "ₕ": "h",
            "ᵢ": "i",
            "ⱼ": "j",
            "ₖ": "k",
            "ₗ": "l",
            "ₘ": "m",
            "ₙ": "n",
            "ₒ": "o",
            "ₚ": "p",
            "ᵣ": "r",
            "ₛ": "s",
            "ₜ": "t",
            "ᵤ": "u",
            "ᵥ": "v",
            "ₓ": "x",
            "ᵦ": "β",
            "ᵧ": "γ",
            "ᵨ": "ρ",
            "ᵩ": "ϕ",
            "ᵪ": "χ",
            "⁺": "+",
            "⁻": "-",
            "⁼": "=",
            "⁽": "(",
            "⁾": ")",
            "⁰": "0",
            "¹": "1",
            "²": "2",
            "³": "3",
            "⁴": "4",
            "⁵": "5",
            "⁶": "6",
            "⁷": "7",
            "⁸": "8",
            "⁹": "9",
            "ᴬ": "A",
            "ᴮ": "B",
            "ᴰ": "D",
            "ᴱ": "E",
            "ᴳ": "G",
            "ᴴ": "H",
            "ᴵ": "I",
            "ᴶ": "J",
            "ᴷ": "K",
            "ᴸ": "L",
            "ᴹ": "M",
            "ᴺ": "N",
            "ᴼ": "O",
            "ᴾ": "P",
            "ᴿ": "R",
            "ᵀ": "T",
            "ᵁ": "U",
            "ⱽ": "V",
            "ᵂ": "W",
            "ᵃ": "a",
            "ᵇ": "b",
            "ᶜ": "c",
            "ᵈ": "d",
            "ᵉ": "e",
            "ᶠ": "f",
            "ᵍ": "g",
            ʰ: "h",
            "ⁱ": "i",
            ʲ: "j",
            "ᵏ": "k",
            ˡ: "l",
            "ᵐ": "m",
            ⁿ: "n",
            "ᵒ": "o",
            "ᵖ": "p",
            ʳ: "r",
            ˢ: "s",
            "ᵗ": "t",
            "ᵘ": "u",
            "ᵛ": "v",
            ʷ: "w",
            ˣ: "x",
            ʸ: "y",
            "ᶻ": "z",
            "ᵝ": "β",
            "ᵞ": "γ",
            "ᵟ": "δ",
            "ᵠ": "ϕ",
            "ᵡ": "χ",
            "ᶿ": "θ"
          }), Si = {
            "́": {
              text: "\\'",
              math: "\\acute"
            },
            "̀": {
              text: "\\`",
              math: "\\grave"
            },
            "̈": {
              text: '\\"',
              math: "\\ddot"
            },
            "̃": {
              text: "\\~",
              math: "\\tilde"
            },
            "̄": {
              text: "\\=",
              math: "\\bar"
            },
            "̆": {
              text: "\\u",
              math: "\\breve"
            },
            "̌": {
              text: "\\v",
              math: "\\check"
            },
            "̂": {
              text: "\\^",
              math: "\\hat"
            },
            "̇": {
              text: "\\.",
              math: "\\dot"
            },
            "̊": {
              text: "\\r",
              math: "\\mathring"
            },
            "̋": {
              text: "\\H"
            },
            "̧": {
              text: "\\c"
            }
          }, wo = {
            á: "á",
            à: "à",
            ä: "ä",
            ǟ: "ǟ",
            ã: "ã",
            ā: "ā",
            ă: "ă",
            ắ: "ắ",
            ằ: "ằ",
            ẵ: "ẵ",
            ǎ: "ǎ",
            â: "â",
            ấ: "ấ",
            ầ: "ầ",
            ẫ: "ẫ",
            ȧ: "ȧ",
            ǡ: "ǡ",
            å: "å",
            ǻ: "ǻ",
            ḃ: "ḃ",
            ć: "ć",
            ḉ: "ḉ",
            č: "č",
            ĉ: "ĉ",
            ċ: "ċ",
            ç: "ç",
            ď: "ď",
            ḋ: "ḋ",
            ḑ: "ḑ",
            é: "é",
            è: "è",
            ë: "ë",
            ẽ: "ẽ",
            ē: "ē",
            ḗ: "ḗ",
            ḕ: "ḕ",
            ĕ: "ĕ",
            ḝ: "ḝ",
            ě: "ě",
            ê: "ê",
            ế: "ế",
            ề: "ề",
            ễ: "ễ",
            ė: "ė",
            ȩ: "ȩ",
            ḟ: "ḟ",
            ǵ: "ǵ",
            ḡ: "ḡ",
            ğ: "ğ",
            ǧ: "ǧ",
            ĝ: "ĝ",
            ġ: "ġ",
            ģ: "ģ",
            ḧ: "ḧ",
            ȟ: "ȟ",
            ĥ: "ĥ",
            ḣ: "ḣ",
            ḩ: "ḩ",
            í: "í",
            ì: "ì",
            ï: "ï",
            ḯ: "ḯ",
            ĩ: "ĩ",
            ī: "ī",
            ĭ: "ĭ",
            ǐ: "ǐ",
            î: "î",
            ǰ: "ǰ",
            ĵ: "ĵ",
            ḱ: "ḱ",
            ǩ: "ǩ",
            ķ: "ķ",
            ĺ: "ĺ",
            ľ: "ľ",
            ļ: "ļ",
            ḿ: "ḿ",
            ṁ: "ṁ",
            ń: "ń",
            ǹ: "ǹ",
            ñ: "ñ",
            ň: "ň",
            ṅ: "ṅ",
            ņ: "ņ",
            ó: "ó",
            ò: "ò",
            ö: "ö",
            ȫ: "ȫ",
            õ: "õ",
            ṍ: "ṍ",
            ṏ: "ṏ",
            ȭ: "ȭ",
            ō: "ō",
            ṓ: "ṓ",
            ṑ: "ṑ",
            ŏ: "ŏ",
            ǒ: "ǒ",
            ô: "ô",
            ố: "ố",
            ồ: "ồ",
            ỗ: "ỗ",
            ȯ: "ȯ",
            ȱ: "ȱ",
            ő: "ő",
            ṕ: "ṕ",
            ṗ: "ṗ",
            ŕ: "ŕ",
            ř: "ř",
            ṙ: "ṙ",
            ŗ: "ŗ",
            ś: "ś",
            ṥ: "ṥ",
            š: "š",
            ṧ: "ṧ",
            ŝ: "ŝ",
            ṡ: "ṡ",
            ş: "ş",
            ẗ: "ẗ",
            ť: "ť",
            ṫ: "ṫ",
            ţ: "ţ",
            ú: "ú",
            ù: "ù",
            ü: "ü",
            ǘ: "ǘ",
            ǜ: "ǜ",
            ǖ: "ǖ",
            ǚ: "ǚ",
            ũ: "ũ",
            ṹ: "ṹ",
            ū: "ū",
            ṻ: "ṻ",
            ŭ: "ŭ",
            ǔ: "ǔ",
            û: "û",
            ů: "ů",
            ű: "ű",
            ṽ: "ṽ",
            ẃ: "ẃ",
            ẁ: "ẁ",
            ẅ: "ẅ",
            ŵ: "ŵ",
            ẇ: "ẇ",
            ẘ: "ẘ",
            ẍ: "ẍ",
            ẋ: "ẋ",
            ý: "ý",
            ỳ: "ỳ",
            ÿ: "ÿ",
            ỹ: "ỹ",
            ȳ: "ȳ",
            ŷ: "ŷ",
            ẏ: "ẏ",
            ẙ: "ẙ",
            ź: "ź",
            ž: "ž",
            ẑ: "ẑ",
            ż: "ż",
            Á: "Á",
            À: "À",
            Ä: "Ä",
            Ǟ: "Ǟ",
            Ã: "Ã",
            Ā: "Ā",
            Ă: "Ă",
            Ắ: "Ắ",
            Ằ: "Ằ",
            Ẵ: "Ẵ",
            Ǎ: "Ǎ",
            Â: "Â",
            Ấ: "Ấ",
            Ầ: "Ầ",
            Ẫ: "Ẫ",
            Ȧ: "Ȧ",
            Ǡ: "Ǡ",
            Å: "Å",
            Ǻ: "Ǻ",
            Ḃ: "Ḃ",
            Ć: "Ć",
            Ḉ: "Ḉ",
            Č: "Č",
            Ĉ: "Ĉ",
            Ċ: "Ċ",
            Ç: "Ç",
            Ď: "Ď",
            Ḋ: "Ḋ",
            Ḑ: "Ḑ",
            É: "É",
            È: "È",
            Ë: "Ë",
            Ẽ: "Ẽ",
            Ē: "Ē",
            Ḗ: "Ḗ",
            Ḕ: "Ḕ",
            Ĕ: "Ĕ",
            Ḝ: "Ḝ",
            Ě: "Ě",
            Ê: "Ê",
            Ế: "Ế",
            Ề: "Ề",
            Ễ: "Ễ",
            Ė: "Ė",
            Ȩ: "Ȩ",
            Ḟ: "Ḟ",
            Ǵ: "Ǵ",
            Ḡ: "Ḡ",
            Ğ: "Ğ",
            Ǧ: "Ǧ",
            Ĝ: "Ĝ",
            Ġ: "Ġ",
            Ģ: "Ģ",
            Ḧ: "Ḧ",
            Ȟ: "Ȟ",
            Ĥ: "Ĥ",
            Ḣ: "Ḣ",
            Ḩ: "Ḩ",
            Í: "Í",
            Ì: "Ì",
            Ï: "Ï",
            Ḯ: "Ḯ",
            Ĩ: "Ĩ",
            Ī: "Ī",
            Ĭ: "Ĭ",
            Ǐ: "Ǐ",
            Î: "Î",
            İ: "İ",
            Ĵ: "Ĵ",
            Ḱ: "Ḱ",
            Ǩ: "Ǩ",
            Ķ: "Ķ",
            Ĺ: "Ĺ",
            Ľ: "Ľ",
            Ļ: "Ļ",
            Ḿ: "Ḿ",
            Ṁ: "Ṁ",
            Ń: "Ń",
            Ǹ: "Ǹ",
            Ñ: "Ñ",
            Ň: "Ň",
            Ṅ: "Ṅ",
            Ņ: "Ņ",
            Ó: "Ó",
            Ò: "Ò",
            Ö: "Ö",
            Ȫ: "Ȫ",
            Õ: "Õ",
            Ṍ: "Ṍ",
            Ṏ: "Ṏ",
            Ȭ: "Ȭ",
            Ō: "Ō",
            Ṓ: "Ṓ",
            Ṑ: "Ṑ",
            Ŏ: "Ŏ",
            Ǒ: "Ǒ",
            Ô: "Ô",
            Ố: "Ố",
            Ồ: "Ồ",
            Ỗ: "Ỗ",
            Ȯ: "Ȯ",
            Ȱ: "Ȱ",
            Ő: "Ő",
            Ṕ: "Ṕ",
            Ṗ: "Ṗ",
            Ŕ: "Ŕ",
            Ř: "Ř",
            Ṙ: "Ṙ",
            Ŗ: "Ŗ",
            Ś: "Ś",
            Ṥ: "Ṥ",
            Š: "Š",
            Ṧ: "Ṧ",
            Ŝ: "Ŝ",
            Ṡ: "Ṡ",
            Ş: "Ş",
            Ť: "Ť",
            Ṫ: "Ṫ",
            Ţ: "Ţ",
            Ú: "Ú",
            Ù: "Ù",
            Ü: "Ü",
            Ǘ: "Ǘ",
            Ǜ: "Ǜ",
            Ǖ: "Ǖ",
            Ǚ: "Ǚ",
            Ũ: "Ũ",
            Ṹ: "Ṹ",
            Ū: "Ū",
            Ṻ: "Ṻ",
            Ŭ: "Ŭ",
            Ǔ: "Ǔ",
            Û: "Û",
            Ů: "Ů",
            Ű: "Ű",
            Ṽ: "Ṽ",
            Ẃ: "Ẃ",
            Ẁ: "Ẁ",
            Ẅ: "Ẅ",
            Ŵ: "Ŵ",
            Ẇ: "Ẇ",
            Ẍ: "Ẍ",
            Ẋ: "Ẋ",
            Ý: "Ý",
            Ỳ: "Ỳ",
            Ÿ: "Ÿ",
            Ỹ: "Ỹ",
            Ȳ: "Ȳ",
            Ŷ: "Ŷ",
            Ẏ: "Ẏ",
            Ź: "Ź",
            Ž: "Ž",
            Ẑ: "Ẑ",
            Ż: "Ż",
            ά: "ά",
            ὰ: "ὰ",
            ᾱ: "ᾱ",
            ᾰ: "ᾰ",
            έ: "έ",
            ὲ: "ὲ",
            ή: "ή",
            ὴ: "ὴ",
            ί: "ί",
            ὶ: "ὶ",
            ϊ: "ϊ",
            ΐ: "ΐ",
            ῒ: "ῒ",
            ῑ: "ῑ",
            ῐ: "ῐ",
            ό: "ό",
            ὸ: "ὸ",
            ύ: "ύ",
            ὺ: "ὺ",
            ϋ: "ϋ",
            ΰ: "ΰ",
            ῢ: "ῢ",
            ῡ: "ῡ",
            ῠ: "ῠ",
            ώ: "ώ",
            ὼ: "ὼ",
            Ύ: "Ύ",
            Ὺ: "Ὺ",
            Ϋ: "Ϋ",
            Ῡ: "Ῡ",
            Ῠ: "Ῠ",
            Ώ: "Ώ",
            Ὼ: "Ὼ"
          };
          class Yr {
            constructor(s, o) {
              this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new Nh(s, o, this.mode), this.settings = o, this.leftrightDepth = 0;
            }
            /**
             * Checks a result to make sure it has the right type, and throws an
             * appropriate error otherwise.
             */
            expect(s, o) {
              if (o === void 0 && (o = true), this.fetch().text !== s)
                throw new l3("Expected '" + s + "', got '" + this.fetch().text + "'", this.fetch());
              o && this.consume();
            }
            /**
             * Discards the current lookahead token, considering it consumed.
             */
            consume() {
              this.nextToken = null;
            }
            /**
             * Return the current lookahead token, or if there isn't one (at the
             * beginning, or if the previous lookahead token was consume()d),
             * fetch the next token as the new lookahead token and return it.
             */
            fetch() {
              return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
            }
            /**
             * Switches between "text" and "math" modes.
             */
            switchMode(s) {
              this.mode = s, this.gullet.switchMode(s);
            }
            /**
             * Main parsing function, which parses an entire input.
             */
            parse() {
              this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
              try {
                const s = this.parseExpression(false);
                return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), s;
              } finally {
                this.gullet.endGroups();
              }
            }
            /**
             * Fully parse a separate sequence of tokens as a separate job.
             * Tokens should be specified in reverse order, as in a MacroDefinition.
             */
            subparse(s) {
              const o = this.nextToken;
              this.consume(), this.gullet.pushToken(new kt("}")), this.gullet.pushTokens(s);
              const c3 = this.parseExpression(false);
              return this.expect("}"), this.nextToken = o, c3;
            }
            /**
             * Parses an "expression", which is a list of atoms.
             *
             * `breakOnInfix`: Should the parsing stop when we hit infix nodes? This
             *                 happens when functions have higher precedence han infix
             *                 nodes in implicit parses.
             *
             * `breakOnTokenText`: The text of the token that the expression should end
             *                     with, or `null` if something else should end the
             *                     expression.
             */
            parseExpression(s, o) {
              const c3 = [];
              for (; ; ) {
                this.mode === "math" && this.consumeSpaces();
                const h3 = this.fetch();
                if (Yr.endOfExpression.indexOf(h3.text) !== -1 || o && h3.text === o || s && tn[h3.text] && tn[h3.text].infix)
                  break;
                const m = this.parseAtom(o);
                if (m) {
                  if (m.type === "internal")
                    continue;
                } else
                  break;
                c3.push(m);
              }
              return this.mode === "text" && this.formLigatures(c3), this.handleInfixNodes(c3);
            }
            /**
             * Rewrites infix operators such as \over with corresponding commands such
             * as \frac.
             *
             * There can only be one infix operator per group.  If there's more than one
             * then the expression is ambiguous.  This can be resolved by adding {}.
             */
            handleInfixNodes(s) {
              let o = -1, c3;
              for (let h3 = 0; h3 < s.length; h3++)
                if (s[h3].type === "infix") {
                  if (o !== -1)
                    throw new l3("only one infix operator per group", s[h3].token);
                  o = h3, c3 = s[h3].replaceWith;
                }
              if (o !== -1 && c3) {
                let h3, m;
                const b = s.slice(0, o), x = s.slice(o + 1);
                b.length === 1 && b[0].type === "ordgroup" ? h3 = b[0] : h3 = {
                  type: "ordgroup",
                  mode: this.mode,
                  body: b
                }, x.length === 1 && x[0].type === "ordgroup" ? m = x[0] : m = {
                  type: "ordgroup",
                  mode: this.mode,
                  body: x
                };
                let A;
                return c3 === "\\\\abovefrac" ? A = this.callFunction(c3, [h3, s[o], m], []) : A = this.callFunction(c3, [h3, m], []), [A];
              } else
                return s;
            }
            /**
             * Handle a subscript or superscript with nice errors.
             */
            handleSupSubscript(s) {
              const o = this.fetch(), c3 = o.text;
              this.consume(), this.consumeSpaces();
              let h3;
              do {
                var m;
                h3 = this.parseGroup(s);
              } while (((m = h3) == null ? void 0 : m.type) === "internal");
              if (!h3)
                throw new l3("Expected group after '" + c3 + "'", o);
              return h3;
            }
            /**
             * Converts the textual input of an unsupported command into a text node
             * contained within a color node whose color is determined by errorColor
             */
            formatUnsupportedCmd(s) {
              const o = [];
              for (let m = 0; m < s.length; m++)
                o.push({
                  type: "textord",
                  mode: "text",
                  text: s[m]
                });
              const c3 = {
                type: "text",
                mode: this.mode,
                body: o
              };
              return {
                type: "color",
                mode: this.mode,
                color: this.settings.errorColor,
                body: [c3]
              };
            }
            /**
             * Parses a group with optional super/subscripts.
             */
            parseAtom(s) {
              const o = this.parseGroup("atom", s);
              if ((o == null ? void 0 : o.type) === "internal" || this.mode === "text")
                return o;
              let c3, h3;
              for (; ; ) {
                this.consumeSpaces();
                const m = this.fetch();
                if (m.text === "\\limits" || m.text === "\\nolimits") {
                  if (o && o.type === "op") {
                    const b = m.text === "\\limits";
                    o.limits = b, o.alwaysHandleSupSub = true;
                  } else if (o && o.type === "operatorname")
                    o.alwaysHandleSupSub && (o.limits = m.text === "\\limits");
                  else
                    throw new l3("Limit controls must follow a math operator", m);
                  this.consume();
                } else if (m.text === "^") {
                  if (c3)
                    throw new l3("Double superscript", m);
                  c3 = this.handleSupSubscript("superscript");
                } else if (m.text === "_") {
                  if (h3)
                    throw new l3("Double subscript", m);
                  h3 = this.handleSupSubscript("subscript");
                } else if (m.text === "'") {
                  if (c3)
                    throw new l3("Double superscript", m);
                  const b = {
                    type: "textord",
                    mode: this.mode,
                    text: "\\prime"
                  }, x = [b];
                  for (this.consume(); this.fetch().text === "'"; )
                    x.push(b), this.consume();
                  this.fetch().text === "^" && x.push(this.handleSupSubscript("superscript")), c3 = {
                    type: "ordgroup",
                    mode: this.mode,
                    body: x
                  };
                } else if (Wr[m.text]) {
                  const b = bo.test(m.text), x = [];
                  for (x.push(new kt(Wr[m.text])), this.consume(); ; ) {
                    const z = this.fetch().text;
                    if (!Wr[z] || bo.test(z) !== b)
                      break;
                    x.unshift(new kt(Wr[z])), this.consume();
                  }
                  const A = this.subparse(x);
                  b ? h3 = {
                    type: "ordgroup",
                    mode: "math",
                    body: A
                  } : c3 = {
                    type: "ordgroup",
                    mode: "math",
                    body: A
                  };
                } else
                  break;
              }
              return c3 || h3 ? {
                type: "supsub",
                mode: this.mode,
                base: o,
                sup: c3,
                sub: h3
              } : o;
            }
            /**
             * Parses an entire function, including its base and all of its arguments.
             */
            parseFunction(s, o) {
              const c3 = this.fetch(), h3 = c3.text, m = tn[h3];
              if (!m)
                return null;
              if (this.consume(), o && o !== "atom" && !m.allowedInArgument)
                throw new l3("Got function '" + h3 + "' with no arguments" + (o ? " as " + o : ""), c3);
              if (this.mode === "text" && !m.allowedInText)
                throw new l3("Can't use function '" + h3 + "' in text mode", c3);
              if (this.mode === "math" && m.allowedInMath === false)
                throw new l3("Can't use function '" + h3 + "' in math mode", c3);
              const {
                args: b,
                optArgs: x
              } = this.parseArguments(h3, m);
              return this.callFunction(h3, b, x, c3, s);
            }
            /**
             * Call a function handler with a suitable context and arguments.
             */
            callFunction(s, o, c3, h3, m) {
              const b = {
                funcName: s,
                parser: this,
                token: h3,
                breakOnTokenText: m
              }, x = tn[s];
              if (x && x.handler)
                return x.handler(b, o, c3);
              throw new l3("No function handler for " + s);
            }
            /**
             * Parses the arguments of a function or environment
             */
            parseArguments(s, o) {
              const c3 = o.numArgs + o.numOptionalArgs;
              if (c3 === 0)
                return {
                  args: [],
                  optArgs: []
                };
              const h3 = [], m = [];
              for (let b = 0; b < c3; b++) {
                let x = o.argTypes && o.argTypes[b];
                const A = b < o.numOptionalArgs;
                (o.primitive && x == null || // \sqrt expands into primitive if optional argument doesn't exist
                o.type === "sqrt" && b === 1 && m[0] == null) && (x = "primitive");
                const z = this.parseGroupOfType("argument to '" + s + "'", x, A);
                if (A)
                  m.push(z);
                else if (z != null)
                  h3.push(z);
                else
                  throw new l3("Null argument, please report this as a bug");
              }
              return {
                args: h3,
                optArgs: m
              };
            }
            /**
             * Parses a group when the mode is changing.
             */
            parseGroupOfType(s, o, c3) {
              switch (o) {
                case "color":
                  return this.parseColorGroup(c3);
                case "size":
                  return this.parseSizeGroup(c3);
                case "url":
                  return this.parseUrlGroup(c3);
                case "math":
                case "text":
                  return this.parseArgumentGroup(c3, o);
                case "hbox": {
                  const h3 = this.parseArgumentGroup(c3, "text");
                  return h3 != null ? {
                    type: "styling",
                    mode: h3.mode,
                    body: [h3],
                    style: "text"
                    // simulate \textstyle
                  } : null;
                }
                case "raw": {
                  const h3 = this.parseStringGroup("raw", c3);
                  return h3 != null ? {
                    type: "raw",
                    mode: "text",
                    string: h3.text
                  } : null;
                }
                case "primitive": {
                  if (c3)
                    throw new l3("A primitive argument cannot be optional");
                  const h3 = this.parseGroup(s);
                  if (h3 == null)
                    throw new l3("Expected group as " + s, this.fetch());
                  return h3;
                }
                case "original":
                case null:
                case void 0:
                  return this.parseArgumentGroup(c3);
                default:
                  throw new l3("Unknown group type as " + s, this.fetch());
              }
            }
            /**
             * Discard any space tokens, fetching the next non-space token.
             */
            consumeSpaces() {
              for (; this.fetch().text === " "; )
                this.consume();
            }
            /**
             * Parses a group, essentially returning the string formed by the
             * brace-enclosed tokens plus some position information.
             */
            parseStringGroup(s, o) {
              const c3 = this.gullet.scanArgument(o);
              if (c3 == null)
                return null;
              let h3 = "", m;
              for (; (m = this.fetch()).text !== "EOF"; )
                h3 += m.text, this.consume();
              return this.consume(), c3.text = h3, c3;
            }
            /**
             * Parses a regex-delimited group: the largest sequence of tokens
             * whose concatenated strings match `regex`. Returns the string
             * formed by the tokens plus some position information.
             */
            parseRegexGroup(s, o) {
              const c3 = this.fetch();
              let h3 = c3, m = "", b;
              for (; (b = this.fetch()).text !== "EOF" && s.test(m + b.text); )
                h3 = b, m += h3.text, this.consume();
              if (m === "")
                throw new l3("Invalid " + o + ": '" + c3.text + "'", c3);
              return c3.range(h3, m);
            }
            /**
             * Parses a color description.
             */
            parseColorGroup(s) {
              const o = this.parseStringGroup("color", s);
              if (o == null)
                return null;
              const c3 = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(o.text);
              if (!c3)
                throw new l3("Invalid color: '" + o.text + "'", o);
              let h3 = c3[0];
              return /^[0-9a-f]{6}$/i.test(h3) && (h3 = "#" + h3), {
                type: "color-token",
                mode: this.mode,
                color: h3
              };
            }
            /**
             * Parses a size specification, consisting of magnitude and unit.
             */
            parseSizeGroup(s) {
              let o, c3 = false;
              if (this.gullet.consumeSpaces(), !s && this.gullet.future().text !== "{" ? o = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : o = this.parseStringGroup("size", s), !o)
                return null;
              !s && o.text.length === 0 && (o.text = "0pt", c3 = true);
              const h3 = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(o.text);
              if (!h3)
                throw new l3("Invalid size: '" + o.text + "'", o);
              const m = {
                number: +(h3[1] + h3[2]),
                // sign + magnitude, cast to number
                unit: h3[3]
              };
              if (!ta(m))
                throw new l3("Invalid unit: '" + m.unit + "'", o);
              return {
                type: "size",
                mode: this.mode,
                value: m,
                isBlank: c3
              };
            }
            /**
             * Parses an URL, checking escaped letters and allowed protocols,
             * and setting the catcode of % as an active character (as in \hyperref).
             */
            parseUrlGroup(s) {
              this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
              const o = this.parseStringGroup("url", s);
              if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), o == null)
                return null;
              const c3 = o.text.replace(/\\([#$%&~_^{}])/g, "$1");
              return {
                type: "url",
                mode: this.mode,
                url: c3
              };
            }
            /**
             * Parses an argument with the mode specified.
             */
            parseArgumentGroup(s, o) {
              const c3 = this.gullet.scanArgument(s);
              if (c3 == null)
                return null;
              const h3 = this.mode;
              o && this.switchMode(o), this.gullet.beginGroup();
              const m = this.parseExpression(false, "EOF");
              this.expect("EOF"), this.gullet.endGroup();
              const b = {
                type: "ordgroup",
                mode: this.mode,
                loc: c3.loc,
                body: m
              };
              return o && this.switchMode(h3), b;
            }
            /**
             * Parses an ordinary group, which is either a single nucleus (like "x")
             * or an expression in braces (like "{x+y}") or an implicit group, a group
             * that starts at the current position, and ends right before a higher explicit
             * group ends, or at EOF.
             */
            parseGroup(s, o) {
              const c3 = this.fetch(), h3 = c3.text;
              let m;
              if (h3 === "{" || h3 === "\\begingroup") {
                this.consume();
                const b = h3 === "{" ? "}" : "\\endgroup";
                this.gullet.beginGroup();
                const x = this.parseExpression(false, b), A = this.fetch();
                this.expect(b), this.gullet.endGroup(), m = {
                  type: "ordgroup",
                  mode: this.mode,
                  loc: yt.range(c3, A),
                  body: x,
                  // A group formed by \begingroup...\endgroup is a semi-simple group
                  // which doesn't affect spacing in math mode, i.e., is transparent.
                  // https://tex.stackexchange.com/questions/1930/when-should-one-
                  // use-begingroup-instead-of-bgroup
                  semisimple: h3 === "\\begingroup" || void 0
                };
              } else if (m = this.parseFunction(o, s) || this.parseSymbol(), m == null && h3[0] === "\\" && !yo.hasOwnProperty(h3)) {
                if (this.settings.throwOnError)
                  throw new l3("Undefined control sequence: " + h3, c3);
                m = this.formatUnsupportedCmd(h3), this.consume();
              }
              return m;
            }
            /**
             * Form ligature-like combinations of characters for text mode.
             * This includes inputs like "--", "---", "``" and "''".
             * The result will simply replace multiple textord nodes with a single
             * character in each value by a single textord node having multiple
             * characters in its value.  The representation is still ASCII source.
             * The group will be modified in place.
             */
            formLigatures(s) {
              let o = s.length - 1;
              for (let c3 = 0; c3 < o; ++c3) {
                const h3 = s[c3], m = h3.text;
                m === "-" && s[c3 + 1].text === "-" && (c3 + 1 < o && s[c3 + 2].text === "-" ? (s.splice(c3, 3, {
                  type: "textord",
                  mode: "text",
                  loc: yt.range(h3, s[c3 + 2]),
                  text: "---"
                }), o -= 2) : (s.splice(c3, 2, {
                  type: "textord",
                  mode: "text",
                  loc: yt.range(h3, s[c3 + 1]),
                  text: "--"
                }), o -= 1)), (m === "'" || m === "`") && s[c3 + 1].text === m && (s.splice(c3, 2, {
                  type: "textord",
                  mode: "text",
                  loc: yt.range(h3, s[c3 + 1]),
                  text: m + m
                }), o -= 1);
              }
            }
            /**
             * Parse a single symbol out of the string. Here, we handle single character
             * symbols and special functions like \verb.
             */
            parseSymbol() {
              const s = this.fetch();
              let o = s.text;
              if (/^\\verb[^a-zA-Z]/.test(o)) {
                this.consume();
                let m = o.slice(5);
                const b = m.charAt(0) === "*";
                if (b && (m = m.slice(1)), m.length < 2 || m.charAt(0) !== m.slice(-1))
                  throw new l3(`\\verb assertion failed --
                    please report what input caused this bug`);
                return m = m.slice(1, -1), {
                  type: "verb",
                  mode: "text",
                  body: m,
                  star: b
                };
              }
              wo.hasOwnProperty(o[0]) && !Fe[this.mode][o[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + o[0] + '" used in math mode', s), o = wo[o[0]] + o.slice(1));
              const c3 = vh.exec(o);
              c3 && (o = o.substring(0, c3.index), o === "i" ? o = "ı" : o === "j" && (o = "ȷ"));
              let h3;
              if (Fe[this.mode][o]) {
                this.settings.strict && this.mode === "math" && Gs.indexOf(o) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + o[0] + '" used in math mode', s);
                const m = Fe[this.mode][o].group, b = yt.range(s);
                let x;
                if (vu.hasOwnProperty(m)) {
                  const A = m;
                  x = {
                    type: "atom",
                    mode: this.mode,
                    family: A,
                    loc: b,
                    text: o
                  };
                } else
                  x = {
                    type: m,
                    mode: this.mode,
                    loc: b,
                    text: o
                  };
                h3 = x;
              } else if (o.charCodeAt(0) >= 128)
                this.settings.strict && (Ge(o.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + o[0] + '" used in math mode', s) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + o[0] + '"' + (" (" + o.charCodeAt(0) + ")"), s)), h3 = {
                  type: "textord",
                  mode: "text",
                  loc: yt.range(s),
                  text: o
                };
              else
                return null;
              if (this.consume(), c3)
                for (let m = 0; m < c3[0].length; m++) {
                  const b = c3[0][m];
                  if (!Si[b])
                    throw new l3("Unknown accent ' " + b + "'", s);
                  const x = Si[b][this.mode] || Si[b].text;
                  if (!x)
                    throw new l3("Accent " + b + " unsupported in " + this.mode + " mode", s);
                  h3 = {
                    type: "accent",
                    mode: this.mode,
                    loc: yt.range(s),
                    label: x,
                    isStretchy: false,
                    isShifty: true,
                    // $FlowFixMe
                    base: h3
                  };
                }
              return h3;
            }
          }
          Yr.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
          var Ai = function(i, s) {
            if (!(typeof i == "string" || i instanceof String))
              throw new TypeError("KaTeX can only parse string typed expression");
            const o = new Yr(i, s);
            delete o.gullet.macros.current["\\df@tag"];
            let c3 = o.parse();
            if (delete o.gullet.macros.current["\\current@color"], delete o.gullet.macros.current["\\color"], o.gullet.macros.get("\\df@tag")) {
              if (!s.displayMode)
                throw new l3("\\tag works only in display equations");
              c3 = [{
                type: "tag",
                mode: "text",
                body: c3,
                tag: o.subparse([new kt("\\df@tag")])
              }];
            }
            return c3;
          };
          let xo = function(i, s, o) {
            s.textContent = "";
            const c3 = Ti(i, o).toNode();
            s.appendChild(c3);
          };
          typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), xo = function() {
            throw new l3("KaTeX doesn't work in quirks mode.");
          });
          const Mh = function(i, s) {
            return Ti(i, s).toMarkup();
          }, Eh = function(i, s) {
            const o = new j(s);
            return Ai(i, o);
          }, ko = function(i, s, o) {
            if (o.throwOnError || !(i instanceof l3))
              throw i;
            const c3 = R.makeSpan(["katex-error"], [new wt(s)]);
            return c3.setAttribute("title", i.toString()), c3.setAttribute("style", "color:" + o.errorColor), c3;
          }, Ti = function(i, s) {
            const o = new j(s);
            try {
              const c3 = Ai(i, o);
              return ju(c3, i, o);
            } catch (c3) {
              return ko(c3, i, o);
            }
          };
          var _h = {
            /**
             * Current KaTeX version
             */
            version: "0.16.22",
            /**
             * Renders the given LaTeX into an HTML+MathML combination, and adds
             * it as a child to the specified DOM node.
             */
            render: xo,
            /**
             * Renders the given LaTeX into an HTML+MathML combination string,
             * for sending to the client.
             */
            renderToString: Mh,
            /**
             * KaTeX error, usually during parsing.
             */
            ParseError: l3,
            /**
             * The schema of Settings
             */
            SETTINGS_SCHEMA: F,
            /**
             * Parses the given LaTeX into KaTeX's internal parse tree structure,
             * without rendering to HTML or MathML.
             *
             * NOTE: This method is not currently recommended for public use.
             * The internal tree representation is unstable and is very likely
             * to change. Use at your own risk.
             */
            __parse: Eh,
            /**
             * Renders the given LaTeX into an HTML+MathML internal DOM tree
             * representation, without flattening that representation to a string.
             *
             * NOTE: This method is not currently recommended for public use.
             * The internal tree representation is unstable and is very likely
             * to change. Use at your own risk.
             */
            __renderToDomTree: Ti,
            /**
             * Renders the given LaTeX into an HTML internal DOM tree representation,
             * without MathML and without flattening that representation to a string.
             *
             * NOTE: This method is not currently recommended for public use.
             * The internal tree representation is unstable and is very likely
             * to change. Use at your own risk.
             */
            __renderToHTMLTree: function(i, s) {
              const o = new j(s);
              try {
                const c3 = Ai(i, o);
                return Vu(c3, i, o);
              } catch (c3) {
                return ko(c3, i, o);
              }
            },
            /**
             * extends internal font metrics object with a new object
             * each key in the new object represents a font name
            */
            __setFontMetrics: du,
            /**
             * adds a new symbol to builtin symbols table
             */
            __defineSymbol: d3,
            /**
             * adds a new function to builtin function list,
             * which directly produce parse tree elements
             * and have their own html/mathml builders
             */
            __defineFunction: te,
            /**
             * adds a new macro to builtin macro list
             */
            __defineMacro: k,
            /**
             * Expose the dom tree node types, which can be useful for type checking nodes.
             *
             * NOTE: These methods are not currently recommended for public use.
             * The internal tree representation is unstable and is very likely
             * to change. Use at your own risk.
             */
            __domTree: {
              Span: Jn,
              Anchor: Vs,
              SymbolNode: wt,
              SvgNode: Ft,
              PathNode: Qt,
              LineNode: Us
            }
          }, Ch = _h;
          return r3 = r3.default, r3;
        }()
      );
    });
  }(fs)), fs.exports;
}
var yl;
function L2() {
  if (yl)
    return In;
  yl = 1;
  var t3 = In && In.__importDefault || function(S) {
    return S && S.__esModule ? S : { default: S };
  };
  Object.defineProperty(In, "__esModule", { value: true });
  const e = t3(D2());
  function n(S, N) {
    const O = S.src[N - 1], I3 = S.src[N], F = S.src[N + 1];
    if (I3 !== "$")
      return { can_open: false, can_close: false };
    let H = false, j = false;
    return O !== "$" && O !== "\\" && (O === void 0 || r3(O) || !a(O)) && (H = true), F !== "$" && (F == null || r3(F) || !a(F)) && (j = true), { can_open: H, can_close: j };
  }
  function r3(S) {
    return /^\s$/u.test(S);
  }
  function a(S) {
    return /^[\w\d]$/u.test(S);
  }
  function l3(S, N) {
    const O = S.src[N - 1], I3 = S.src[N], F = S.src[N + 1], H = S.src[N + 2];
    return I3 === "$" && O !== "$" && O !== "\\" && F === "$" && H !== "$" ? { can_open: true, can_close: true } : { can_open: false, can_close: false };
  }
  function u(S, N) {
    if (S.src[S.pos] !== "$")
      return false;
    const O = S.tokens.at(-1);
    if ((O == null ? void 0 : O.type) === "html_inline" && /^<\w+.+[^/]>$/.test(O.content))
      return false;
    let I3 = n(S, S.pos);
    if (!I3.can_open)
      return N || (S.pending += "$"), S.pos += 1, true;
    let F = S.pos + 1, H = F, j;
    for (; (H = S.src.indexOf("$", H)) !== -1; ) {
      for (j = H - 1; S.src[j] === "\\"; )
        j -= 1;
      if ((H - j) % 2 == 1)
        break;
      H += 1;
    }
    if (H === -1)
      return N || (S.pending += "$"), S.pos = F, true;
    if (H - F === 0)
      return N || (S.pending += "$$"), S.pos = F + 1, true;
    if (I3 = n(S, H), !I3.can_close)
      return N || (S.pending += "$"), S.pos = F, true;
    if (!N) {
      const V = S.push("math_inline", "math", 0);
      V.markup = "$", V.content = S.src.slice(F, H);
    }
    return S.pos = H + 1, true;
  }
  function f(S, N, O, I3) {
    var F, H, j, V = false, W, ee = S.bMarks[N] + S.tShift[N], K = S.eMarks[N];
    if (ee + 2 > K || S.src.slice(ee, ee + 2) !== "$$")
      return false;
    ee += 2;
    let le = S.src.slice(ee, K);
    if (I3)
      return true;
    for (le.trim().slice(-2) === "$$" && (le = le.trim().slice(0, -2), V = true), H = N; !V && (H++, !(H >= O || (ee = S.bMarks[H] + S.tShift[H], K = S.eMarks[H], ee < K && S.tShift[H] < S.blkIndent))); )
      S.src.slice(ee, K).trim().slice(-2) === "$$" ? (j = S.src.slice(0, K).lastIndexOf("$$"), F = S.src.slice(ee, j), V = true) : S.src.slice(ee, K).trim().includes("$$") && (j = S.src.slice(0, K).trim().indexOf("$$"), F = S.src.slice(ee, j), V = true);
    return S.line = H + 1, W = S.push("math_block", "math", 0), W.block = true, W.content = (le && le.trim() ? le + `
` : "") + S.getLines(N + 1, H, S.tShift[N], true) + (F && F.trim() ? F : ""), W.map = [N, S.line], W.markup = "$$", true;
  }
  function p(S, N, O, I3) {
    const F = S.bMarks[N] + S.tShift[N], H = S.eMarks[N];
    if (!S.src.slice(F, H).match(/^\s*\\begin\s*\{([^{}]+)\}/))
      return false;
    if (N > 0) {
      const ue = S.bMarks[N - 1] + S.tShift[N - 1], ce = S.eMarks[N - 1], ye = S.src.slice(ue, ce);
      if (!/^\s*$/.test(ye))
        return false;
    }
    if (I3)
      return true;
    const W = [];
    let ee = N, K, le = false;
    e:
      for (; !le && !(ee >= O); ee++) {
        const ue = S.bMarks[ee] + S.tShift[ee], ce = S.eMarks[ee];
        if (ue < ce && S.tShift[ee] < S.blkIndent)
          break;
        const ye = S.src.slice(ue, ce);
        for (const $ of ye.matchAll(/(\\begin|\\end)\s*\{([^{}]+)\}/g))
          if ($[1] === "\\begin")
            W.push($[2].trim());
          else if ($[1] === "\\end" && (W.pop(), !W.length)) {
            K = S.src.slice(ue, ce), le = true;
            break e;
          }
      }
    S.line = ee + 1;
    const Te = S.push("math_block", "math", 0);
    return Te.block = true, Te.content = (S.getLines(N, ee, S.tShift[N], true) + (K ?? "")).trim(), Te.map = [N, S.line], Te.markup = "$$", true;
  }
  function y(S, N) {
    var O, I3, F, H, j;
    if (S.src.slice(S.pos, S.pos + 2) !== "$$")
      return false;
    if (H = l3(S, S.pos), !H.can_open)
      return N || (S.pending += "$$"), S.pos += 2, true;
    for (O = S.pos + 2, I3 = O; (I3 = S.src.indexOf("$$", I3)) !== -1; ) {
      for (j = I3 - 1; S.src[j] === "\\"; )
        j -= 1;
      if ((I3 - j) % 2 == 1)
        break;
      I3 += 2;
    }
    return I3 === -1 ? (N || (S.pending += "$$"), S.pos = O, true) : I3 - O === 0 ? (N || (S.pending += "$$$$"), S.pos = O + 2, true) : (H = l3(S, I3), H.can_close ? (N || (F = S.push("math_block", "math", 0), F.block = true, F.markup = "$$", F.content = S.src.slice(O, I3)), S.pos = I3 + 2, true) : (N || (S.pending += "$$"), S.pos = O, true));
  }
  function v(S, N) {
    const O = S.src.slice(S.pos);
    if (!/^\n\\begin/.test(O))
      return false;
    if (S.pos += 1, N)
      return true;
    const I3 = O.split(/\n/g).slice(1);
    let F;
    const H = [];
    e:
      for (var j = 0; j < I3.length; ++j) {
        const ee = I3[j];
        for (const K of ee.matchAll(/(\\begin|\\end)\s*\{([^{}]+)\}/g))
          if (K[1] === "\\begin")
            H.push(K[2].trim());
          else if (K[1] === "\\end" && (H.pop(), !H.length)) {
            F = j;
            break e;
          }
      }
    if (typeof F > "u")
      return false;
    const V = I3.slice(0, F + 1).reduce((ee, K) => ee + K.length, 0) + F + 1, W = S.push("math_inline_bare_block", "math", 0);
    return W.block = true, W.markup = "$$", W.content = O.slice(1, V), S.pos = S.pos + V, true;
  }
  function T(S, N, O, I3) {
    const F = S.tokens;
    for (let H = F.length - 1; H >= 0; H--) {
      const j = F[H], V = [];
      if (j.type !== "html_block")
        continue;
      const W = j.content;
      for (const ee of W.matchAll(I3)) {
        if (!ee.groups)
          continue;
        const K = ee.groups.html_before_math, le = ee.groups.math, Te = ee.groups.html_after_math;
        K && V.push({ ...j, type: "html_block", map: null, content: K }), le && V.push({
          ...j,
          type: N,
          map: null,
          content: le,
          markup: O,
          block: true,
          tag: "math"
        }), Te && V.push({ ...j, type: "html_block", map: null, content: Te });
      }
      V.length > 0 && F.splice(H, 1, ...V);
    }
    return true;
  }
  function _(S) {
    return S.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }
  function C(S, N) {
    const O = (N == null ? void 0 : N.katex) ?? e.default, I3 = N == null ? void 0 : N.enableBareBlocks, F = N == null ? void 0 : N.enableMathBlockInHtml, H = N == null ? void 0 : N.enableMathInlineInHtml, j = N == null ? void 0 : N.enableFencedBlocks;
    S.inline.ruler.after("escape", "math_inline", u), S.inline.ruler.after("escape", "math_inline_block", y), I3 && S.inline.ruler.before("text", "math_inline_bare_block", v), S.block.ruler.after("blockquote", "math_block", (ue, ce, ye, $) => I3 && p(ue, ce, ye, $) ? true : f(ue, ce, ye, $), {
      alt: ["paragraph", "reference", "blockquote", "list"]
    });
    const V = /(?<html_before_math>[\s\S]*?)\$\$(?<math>[\s\S]+?)\$\$(?<html_after_math>(?:(?!\$\$[\s\S]+?\$\$)[\s\S])*)/gm, W = /(?<html_before_math>[\s\S]*?)\$(?<math>.*?)\$(?<html_after_math>(?:(?!\$.*?\$)[\s\S])*)/gm;
    F && S.core.ruler.push("math_block_in_html_block", (ue) => T(ue, "math_block", "$$", V)), H && S.core.ruler.push("math_inline_in_html_block", (ue) => T(ue, "math_inline", "$", W));
    const ee = (ue) => {
      const ce = /\\begin\{(align|equation|gather|cd|alignat)\}/ig.test(ue);
      try {
        return O.renderToString(ue, { ...N, displayMode: ce });
      } catch (ye) {
        return N != null && N.throwOnError && console.log(ye), `<span class="katex-error" title="${_(ue)}">${_(ye + "")}</span>`;
      }
    }, K = (ue, ce) => {
      const ye = ue[ce].content, se = ye.length > 2 && ye[0] === "`" && ye[ye.length - 1] === "`" ? ye.slice(1, -1) : ye;
      return ee(se);
    }, le = (ue) => {
      try {
        return `<p class="katex-block">${O.renderToString(ue, { ...N, displayMode: true })}</p>`;
      } catch (ce) {
        return N != null && N.throwOnError && console.log(ce), `<p class="katex-block katex-error" title="${_(ue)}">${_(ce + "")}</p>`;
      }
    }, Te = (ue, ce) => le(ue[ce].content) + `
`;
    if (S.renderer.rules.math_inline = K, S.renderer.rules.math_inline_block = Te, S.renderer.rules.math_inline_bare_block = Te, S.renderer.rules.math_block = Te, j) {
      const ue = "math", ce = S.renderer.rules.fence;
      S.renderer.rules.fence = function(ye, $, se, J, ie) {
        const pe = ye[$];
        return pe.info.trim().toLowerCase() === ue && j ? le(pe.content) + `
` : (ce == null ? void 0 : ce.call(this, ye, $, se, J, ie)) || "";
      };
    }
  }
  return In.default = C, In;
}
var q2 = L2();
const R2 = /* @__PURE__ */ E0$1(q2);
function $2() {
  const t3 = gt({
    html: true,
    breaks: true
  });
  return t3.use(gp).use(yp).use(xp).use(Sp), t3;
}
function P2(t3) {
  return {
    transformer: t3,
    parser: new ur(),
    beforeParse: new ur(),
    afterParse: new ur(),
    retransform: new ur()
  };
}
const F2 = `<svg width="16" height="16" viewBox="0 -3 24 24"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"/></svg>
`, H2 = `<svg width="16" height="16" viewBox="0 -3 24 24"><path fill-rule="evenodd" d="M6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-5z" clip-rule="evenodd"/></svg>
`, j2 = "checkbox", bl = {
  " ": H2.trim(),
  x: F2.trim()
}, V2 = {
  name: j2,
  transform(t3) {
    return t3.parser.tap((e) => {
      e.core.ruler.before("inline", "checkbox", (n) => {
        for (let r3 = 2; r3 < n.tokens.length; r3 += 1) {
          const a = n.tokens[r3];
          if (a.type === "inline" && a.content) {
            const l3 = n.tokens[r3 - 1].type, u = n.tokens[r3 - 2].type;
            (l3 === "heading_open" || l3 === "paragraph_open" && u === "list_item_open") && (a.content = a.content.replace(
              /^\[(.)\] /,
              (f, p) => bl[p] ? `${bl[p]} ` : f
            ));
          }
        }
        return false;
      });
    }), {};
  }
}, U2 = "frontmatter", G2 = {
  name: U2,
  transform(t3) {
    return t3.beforeParse.tap((e, n) => {
      var r3;
      const { content: a } = n;
      if (!/^---\r?\n/.test(a))
        return;
      const l3 = /\n---\r?\n/.exec(a);
      if (!l3)
        return;
      const u = a.slice(4, l3.index).trimEnd();
      let f;
      try {
        f = O2(u.replace(/\r?\n|\r/g, `
`)), f != null && f.markmap && (f.markmap = K2(
          f.markmap
        ));
      } catch {
        return;
      }
      n.frontmatter = f, n.parserOptions = {
        ...n.parserOptions,
        ...(r3 = f == null ? void 0 : f.markmap) == null ? void 0 : r3.htmlParser
      }, n.frontmatterInfo = {
        lines: a.slice(0, l3.index).split(`
`).length + 1,
        offset: l3.index + l3[0].length
      };
    }), {};
  }
};
function K2(t3) {
  if (t3)
    return ["color", "extraJs", "extraCss"].forEach((e) => {
      t3[e] != null && (t3[e] = X2(t3[e]));
    }), ["duration", "maxWidth", "initialExpandLevel"].forEach((e) => {
      t3[e] != null && (t3[e] = W2(t3[e]));
    }), t3;
}
function X2(t3) {
  let e;
  return typeof t3 == "string" ? e = [t3] : Array.isArray(t3) && (e = t3.filter((n) => n && typeof n == "string")), e != null && e.length ? e : void 0;
}
function W2(t3) {
  if (!isNaN(+t3))
    return +t3;
}
function Y0(t3, e) {
  return e.type === "script" && e.data.src ? {
    ...e,
    data: {
      ...e.data,
      src: t3.getFullUrl(e.data.src)
    }
  } : e;
}
function Y2(t3, e) {
  return e.type === "stylesheet" && e.data.href ? {
    ...e,
    data: {
      ...e.data,
      href: t3.getFullUrl(e.data.href)
    }
  } : e;
}
const wl = "hljs", J2 = [
  "@highlightjs/cdn-assets@11.11.1/highlight.min.js"
].map((t3) => y0(t3)), Q2 = [
  "@highlightjs/cdn-assets@11.11.1/styles/default.min.css"
].map((t3) => Al(t3)), Z2 = {
  versions: {
    hljs: "11.11.1"
  },
  preloadScripts: J2,
  styles: Q2
}, m0 = {
  name: wl,
  config: Z2,
  transform(t3) {
    var e, n, r3;
    let a;
    const l3 = ((n = (e = m0.config) == null ? void 0 : e.preloadScripts) == null ? void 0 : n.map(
      (p) => Y0(t3.transformer.urlBuilder, p)
    )) || [], u = () => (a || (a = Sl(l3)), a);
    let f = zn;
    return t3.parser.tap((p) => {
      p.set({
        highlight: (y, v) => {
          f();
          const { hljs: T } = window;
          return T ? T.highlightAuto(y, v ? [v] : void 0).value : (u().then(() => {
            t3.retransform.call();
          }), y);
        }
      });
    }), t3.beforeParse.tap((p, y) => {
      f = () => {
        y.features[wl] = true;
      };
    }), {
      styles: (r3 = m0.config) == null ? void 0 : r3.styles
    };
  }
};
function e5(t3, e, n) {
  return t3.map((r3) => {
    if (typeof r3 == "string" && !r3.includes("://")) {
      r3.startsWith("npm:") || (r3 = `npm:${r3}`);
      const a = 4 + e.length;
      r3.startsWith(`npm:${e}/`) && (r3 = `${r3.slice(0, a)}@${n}${r3.slice(
        a
      )}`);
    }
    return r3;
  });
}
var t5 = ["katex@0.16.18/dist/fonts/KaTeX_AMS-Regular.woff2", "katex@0.16.18/dist/fonts/KaTeX_Caligraphic-Bold.woff2", "katex@0.16.18/dist/fonts/KaTeX_Caligraphic-Regular.woff2", "katex@0.16.18/dist/fonts/KaTeX_Fraktur-Bold.woff2", "katex@0.16.18/dist/fonts/KaTeX_Fraktur-Regular.woff2", "katex@0.16.18/dist/fonts/KaTeX_Main-Bold.woff2", "katex@0.16.18/dist/fonts/KaTeX_Main-BoldItalic.woff2", "katex@0.16.18/dist/fonts/KaTeX_Main-Italic.woff2", "katex@0.16.18/dist/fonts/KaTeX_Main-Regular.woff2", "katex@0.16.18/dist/fonts/KaTeX_Math-BoldItalic.woff2", "katex@0.16.18/dist/fonts/KaTeX_Math-Italic.woff2", "katex@0.16.18/dist/fonts/KaTeX_SansSerif-Bold.woff2", "katex@0.16.18/dist/fonts/KaTeX_SansSerif-Italic.woff2", "katex@0.16.18/dist/fonts/KaTeX_SansSerif-Regular.woff2", "katex@0.16.18/dist/fonts/KaTeX_Script-Regular.woff2", "katex@0.16.18/dist/fonts/KaTeX_Size1-Regular.woff2", "katex@0.16.18/dist/fonts/KaTeX_Size2-Regular.woff2", "katex@0.16.18/dist/fonts/KaTeX_Size3-Regular.woff2", "katex@0.16.18/dist/fonts/KaTeX_Size4-Regular.woff2", "katex@0.16.18/dist/fonts/KaTeX_Typewriter-Regular.woff2"];
const Wi = "katex", n5 = [
  "katex@0.16.18/dist/katex.min.js"
].map((t3) => y0(t3)), su = y0(
  "webfontloader@1.6.28/webfontloader.js"
);
su.data.defer = true;
const r5 = ["katex@0.16.18/dist/katex.min.css"].map(
  (t3) => Al(t3)
), s5 = {
  versions: {
    katex: "0.16.18",
    webfontloader: "1.6.28"
  },
  preloadScripts: n5,
  scripts: [
    {
      type: "iife",
      data: {
        fn: (t3) => {
          window.WebFontConfig = {
            custom: {
              families: [
                "KaTeX_AMS",
                "KaTeX_Caligraphic:n4,n7",
                "KaTeX_Fraktur:n4,n7",
                "KaTeX_Main:n4,n7,i4,i7",
                "KaTeX_Math:i4,i7",
                "KaTeX_Script",
                "KaTeX_SansSerif:n4,n7,i4",
                "KaTeX_Size1",
                "KaTeX_Size2",
                "KaTeX_Size3",
                "KaTeX_Size4",
                "KaTeX_Typewriter"
              ]
            },
            active: () => {
              t3().refreshHook.call();
            }
          };
        },
        getParams({ getMarkmap: t3 }) {
          return [t3];
        }
      }
    },
    su
  ],
  styles: r5,
  resources: t5
};
function i5(t3) {
  return t3.default || t3;
}
const a5 = i5(R2), mr = {
  name: Wi,
  config: s5,
  transform(t3) {
    var e, n, r3, a;
    let l3;
    const u = ((n = (e = mr.config) == null ? void 0 : e.preloadScripts) == null ? void 0 : n.map(
      (v) => Y0(t3.transformer.urlBuilder, v)
    )) || [], f = () => (l3 || (l3 = Sl(u)), l3), p = (v, T) => {
      const { katex: _ } = window;
      return _ ? _.renderToString(v, {
        displayMode: T,
        throwOnError: false
      }) : (f().then(() => {
        t3.retransform.call();
      }), v);
    };
    let y = zn;
    return t3.parser.tap((v) => {
      v.use(a5), ["math_block", "math_inline"].forEach((T) => {
        const _ = (C, S) => (y(), p(C[S].content, !!C[S].block));
        v.renderer.rules[T] = _;
      });
    }), t3.beforeParse.tap((v, T) => {
      y = () => {
        T.features[Wi] = true;
      };
    }), t3.afterParse.tap((v, T) => {
      var _;
      const C = (_ = T.frontmatter) == null ? void 0 : _.markmap;
      C && ["extraJs", "extraCss"].forEach((S) => {
        var N, O;
        const I3 = C[S];
        I3 && (C[S] = e5(
          I3,
          Wi,
          ((O = (N = mr.config) == null ? void 0 : N.versions) == null ? void 0 : O.katex) || ""
        ));
      });
    }), {
      styles: (r3 = mr.config) == null ? void 0 : r3.styles,
      scripts: (a = mr.config) == null ? void 0 : a.scripts
    };
  }
}, o5 = "npmUrl", l5 = {
  name: o5,
  transform(t3) {
    return t3.afterParse.tap((e, n) => {
      const { frontmatter: r3 } = n, a = r3 == null ? void 0 : r3.markmap;
      a && ["extraJs", "extraCss"].forEach((l3) => {
        const u = a[l3];
        u && (a[l3] = u.map((f) => f.startsWith("npm:") ? t3.transformer.urlBuilder.getFullUrl(
          f.slice(4)
        ) : f));
      });
    }), {};
  }
}, c5 = "sourceLines", u5 = {
  name: c5,
  transform(t3) {
    let e = 0;
    return t3.beforeParse.tap((n, r3) => {
      var a;
      e = ((a = r3.frontmatterInfo) == null ? void 0 : a.lines) || 0;
    }), t3.parser.tap((n) => {
      n.renderer.renderAttrs = Bo(
        n.renderer.renderAttrs,
        (r3, a) => {
          if (a.block && a.map) {
            const l3 = a.map.map((u) => u + e);
            a.attrSet("data-lines", l3.join(","));
          }
          return r3(a);
        }
      ), n.renderer.rules.fence && (n.renderer.rules.fence = Bo(
        n.renderer.rules.fence,
        (r3, a, l3, ...u) => {
          let f = r3(a, l3, ...u);
          const p = a[l3];
          if (f.startsWith("<pre>") && p.map) {
            const y = p.map.map(
              (v) => v + e
            );
            f = f.slice(0, 4) + ` data-lines="${y.join(",")}"` + f.slice(4);
          }
          return f;
        }
      ));
    }), {};
  }
}, h5 = [
  G2,
  mr,
  m0,
  l5,
  V2,
  u5
], f5 = h5;
function iu(t3) {
  for (; !t3.content && t3.children.length === 1; )
    t3 = t3.children[0];
  for (; t3.children.length === 1 && !t3.children[0].content; )
    t3 = {
      ...t3,
      children: t3.children[0].children
    };
  return {
    ...t3,
    children: t3.children.map(iu)
  };
}
class d5 {
  constructor(e = f5) {
    this.assetsMap = {}, this.urlBuilder = new k1(), this.hooks = P2(this), this.plugins = e.map(
      (a) => typeof a == "function" ? a() : a
    );
    const n = {};
    for (const { name: a, transform: l3 } of this.plugins)
      n[a] = l3(this.hooks);
    this.assetsMap = n;
    const r3 = $2();
    this.md = r3, this.hooks.parser.call(r3);
  }
  transform(e, n) {
    var r3;
    const a = {
      content: e,
      features: {},
      parserOptions: n
    };
    this.hooks.beforeParse.call(this.md, a);
    let { content: l3 } = a;
    a.frontmatterInfo && (l3 = l3.slice(a.frontmatterInfo.offset));
    const u = this.md.render(l3, {});
    this.hooks.afterParse.call(this.md, a);
    const f = iu(pp(u, a.parserOptions));
    return f.content || (f.content = `${((r3 = a.frontmatter) == null ? void 0 : r3.title) || ""}`), { ...a, root: f };
  }
  resolveJS(e) {
    return Y0(this.urlBuilder, e);
  }
  resolveCSS(e) {
    return Y2(this.urlBuilder, e);
  }
  /**
   * Get all assets from enabled plugins or filter them by plugin names as keys.
   */
  getAssets(e) {
    const n = [], r3 = [];
    e ?? (e = this.plugins.map((a) => a.name));
    for (const a of e.map((l3) => this.assetsMap[l3]))
      a && (a.styles && n.push(...a.styles), a.scripts && r3.push(...a.scripts));
    return {
      styles: n.map((a) => this.resolveCSS(a)),
      scripts: r3.map((a) => this.resolveJS(a))
    };
  }
  /**
   * Get used assets by features object returned by `transform`.
   */
  getUsedAssets(e) {
    const n = this.plugins.map((r3) => r3.name).filter((r3) => e[r3]);
    return this.getAssets(n);
  }
}
const m5 = { class: "mindmap-viewer__header" }, p5 = { class: "mindmap-viewer__tabs-container" }, g5 = { class: "mindmap-viewer__tabs" }, y5 = { class: "mindmap-viewer__actions" }, b5 = { class: "mindmap-viewer__icon" }, w5 = { class: "mindmap-viewer__icon" }, x5 = { class: "mindmap-viewer__dropdown-menu" }, k5 = { class: "mindmap-viewer__actions" }, v5 = { class: "mindmap-viewer__content" }, S5 = {
  class: "mindmap-viewer__code",
  key: "code"
}, A5 = { class: "mindmap-viewer__code-pre" }, T5 = {
  __name: "mindmap",
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  setup(t3) {
    const e = t3, n = new d5(), r$1 = ref(), a = ref(null), l3 = ref("image"), u = ref(false), f = ref(false), p = () => {
      u.value = !u.value;
    };
    let y;
    const v = async (I3) => {
      if (!y)
        return;
      const { root: F } = n.transform(I3);
      await y.setData(F), y.fit();
    }, T = () => {
      f.value = !f.value;
    }, _ = () => {
      y.rescale(1.25);
    }, C = () => {
      y.rescale(0.8);
    }, S = () => {
      r$1.value && (Gi$1(r$1.value), r.success(Dl$1.global.t("hubx.bubble.download_success")), u.value = false);
    }, N = () => {
      d(e.value), u.value = false;
    };
    watchEffect(() => {
      v(e.value);
    });
    let O;
    return onMounted(() => {
      try {
        y = w0.create(r$1.value), v(e.value);
      } catch (I3) {
        console.log(I3);
      }
      O = Ki$1(a.value, () => {
        u.value = false;
      });
    }), onUnmounted(() => {
      O == null || O.destroy();
    }), (I3, F) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["mindmap-viewer", { "mindmap-viewer--fixed": f.value }])
    }, [
      createBaseVNode("div", m5, [
        createBaseVNode("div", p5, [
          createBaseVNode("div", g5, [
            createBaseVNode("div", {
              class: normalizeClass(["mindmap-viewer__tab", { "mindmap-viewer__tab--active": l3.value === "image" }]),
              onClick: F[0] || (F[0] = (H) => l3.value = "image")
            }, toDisplayString(I3.$hubx_t("hubx.bubble.image")), 3),
            createBaseVNode("div", {
              class: normalizeClass(["mindmap-viewer__tab", { "mindmap-viewer__tab--active": l3.value === "code" }]),
              onClick: F[1] || (F[1] = (H) => l3.value = "code")
            }, toDisplayString(I3.$hubx_t("hubx.bubble.code")), 3)
          ])
        ]),
        withDirectives(createBaseVNode("div", y5, [
          createBaseVNode("div", {
            class: "mindmap-viewer__dropdown",
            ref_key: "dropdownRef",
            ref: a
          }, [
            createBaseVNode("span", {
              class: "mindmap-viewer__dropdown-trigger",
              onClick: p
            }, [
              createBaseVNode("i", b5, [
                createVNode(At$1, { name: "download" })
              ]),
              createBaseVNode("i", w5, [
                createVNode(At$1, { name: "down" })
              ])
            ]),
            withDirectives(createBaseVNode("div", x5, [
              createBaseVNode("div", {
                class: "mindmap-viewer__dropdown-item",
                onClick: S
              }, toDisplayString(I3.$hubx_t("hubx.bubble.download_image")), 1),
              createBaseVNode("div", {
                class: "mindmap-viewer__dropdown-item",
                onClick: N
              }, toDisplayString(I3.$hubx_t("hubx.bubble.copy_markdown")), 1)
            ], 512), [
              [vShow, u.value]
            ])
          ], 512),
          createBaseVNode("i", {
            class: "mindmap-viewer__icon",
            onClick: T
          }, [
            f.value ? (openBlock(), createBlock(At$1, {
              key: 0,
              name: "collapse"
            })) : (openBlock(), createBlock(At$1, {
              key: 1,
              name: "expand"
            }))
          ]),
          createBaseVNode("i", {
            class: "mindmap-viewer__icon",
            onClick: C
          }, [
            createVNode(At$1, { name: "zoom-out" })
          ]),
          createBaseVNode("i", {
            class: "mindmap-viewer__icon",
            onClick: _
          }, [
            createVNode(At$1, { name: "zoom-in" })
          ])
        ], 512), [
          [vShow, l3.value === "image"]
        ]),
        withDirectives(createBaseVNode("div", k5, [
          createBaseVNode("i", {
            class: "mindmap-viewer__icon",
            onClick: N
          }, [
            createVNode(At$1, { name: "copy" })
          ])
        ], 512), [
          [vShow, l3.value === "code"]
        ])
      ]),
      createBaseVNode("div", v5, [
        createVNode(Transition, {
          name: "slide-fade",
          mode: "out-in"
        }, {
          default: withCtx(() => [
            withDirectives((openBlock(), createElementBlock("svg", {
              style: { position: "absolute", top: "0", left: "0", width: "100%", height: "100%" },
              ref_key: "svgRef",
              ref: r$1,
              key: "image"
            }, null, 512)), [
              [vShow, l3.value === "image"]
            ])
          ]),
          _: 1
        }),
        createVNode(Transition, {
          name: "slide-fade",
          mode: "out-in"
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", S5, [
              createBaseVNode("pre", A5, toDisplayString(t3.value), 1)
            ], 512), [
              [vShow, l3.value === "code"]
            ])
          ]),
          _: 1
        })
      ])
    ], 2));
  }
}, Y5 = /* @__PURE__ */ Rn$1(T5, [["__scopeId", "data-v-1ab8bb96"]]);
export {
  Y5 as default
};
