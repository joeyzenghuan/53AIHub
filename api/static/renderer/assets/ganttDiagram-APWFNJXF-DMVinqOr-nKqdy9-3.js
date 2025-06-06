import { _ as p, aO as Ng, c as dt$1, b as Jm, a as ty, o as iy, p as ay, s as ey, g as ry, x as Qm, i as q0, l as D, d as Xc, j as Hr$1, u as ge$1 } from "./mermaid-j5R1o_wi-dCQhMK9F.js";
import { E as E0 } from "./main-zTjO05wq.js";
import { b as bt$1, e as en$1, g, c as U, u as ur$1, L as Li, o as on$1, D as Di$1 } from "./helper-7WMIPux3-FiO_G2IV.js";
import { Z as Zn, X as Xn, O as On, _, w as wn$1 } from "./linear-DRFqyOtL-QuynLUkH.js";
import { t as t$1 } from "./init-DjUOC4st-2EPjLC0T.js";
import { t, l } from "./min-DLf0xQMm-nalJLjBu.js";
import "./copy-BS31ARP0-eab1H3tb.js";
function Kn(t2) {
  return t2;
}
var Xt = 1, oe = 2, ke = 3, Zt = 4, He = 1e-6;
function tr(t2) {
  return "translate(" + t2 + ",0)";
}
function er(t2) {
  return "translate(0," + t2 + ")";
}
function nr(t2) {
  return (e) => +t2(e);
}
function rr(t2, e) {
  return e = Math.max(0, t2.bandwidth() - e * 2) / 2, t2.round() && (e = Math.round(e)), (n) => +t2(n) + e;
}
function ar() {
  return !this.__axis;
}
function on(t2, e) {
  var n = [], r = null, a = null, i = 6, s = 6, k = 3, M = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, T = t2 === Xt || t2 === Zt ? -1 : 1, g2 = t2 === Zt || t2 === oe ? "x" : "y", U2 = t2 === Xt || t2 === ke ? tr : er;
  function C(x) {
    var X = r ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), O = a ?? (e.tickFormat ? e.tickFormat.apply(e, n) : Kn), D2 = Math.max(i, 0) + k, I = e.range(), V = +I[0] + M, W = +I[I.length - 1] + M, q = (e.bandwidth ? rr : nr)(e.copy(), M), j = x.selection ? x.selection() : x, w = j.selectAll(".domain").data([null]), H = j.selectAll(".tick").data(X, e).order(), b = H.exit(), F = H.enter().append("g").attr("class", "tick"), _2 = H.select("line"), S = H.select("text");
    w = w.merge(w.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), H = H.merge(F), _2 = _2.merge(F.append("line").attr("stroke", "currentColor").attr(g2 + "2", T * i)), S = S.merge(F.append("text").attr("fill", "currentColor").attr(g2, T * D2).attr("dy", t2 === Xt ? "0em" : t2 === ke ? "0.71em" : "0.32em")), x !== j && (w = w.transition(x), H = H.transition(x), _2 = _2.transition(x), S = S.transition(x), b = b.transition(x).attr("opacity", He).attr("transform", function(p2) {
      return isFinite(p2 = q(p2)) ? U2(p2 + M) : this.getAttribute("transform");
    }), F.attr("opacity", He).attr("transform", function(p2) {
      var Y = this.parentNode.__axis;
      return U2((Y && isFinite(Y = Y(p2)) ? Y : q(p2)) + M);
    })), b.remove(), w.attr("d", t2 === Zt || t2 === oe ? s ? "M" + T * s + "," + V + "H" + M + "V" + W + "H" + T * s : "M" + M + "," + V + "V" + W : s ? "M" + V + "," + T * s + "V" + M + "H" + W + "V" + T * s : "M" + V + "," + M + "H" + W), H.attr("opacity", 1).attr("transform", function(p2) {
      return U2(q(p2) + M);
    }), _2.attr(g2 + "2", T * i), S.attr(g2, T * D2).text(O), j.filter(ar).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t2 === oe ? "start" : t2 === Zt ? "end" : "middle"), j.each(function() {
      this.__axis = q;
    });
  }
  return C.scale = function(x) {
    return arguments.length ? (e = x, C) : e;
  }, C.ticks = function() {
    return n = Array.from(arguments), C;
  }, C.tickArguments = function(x) {
    return arguments.length ? (n = x == null ? [] : Array.from(x), C) : n.slice();
  }, C.tickValues = function(x) {
    return arguments.length ? (r = x == null ? null : Array.from(x), C) : r && r.slice();
  }, C.tickFormat = function(x) {
    return arguments.length ? (a = x, C) : a;
  }, C.tickSize = function(x) {
    return arguments.length ? (i = s = +x, C) : i;
  }, C.tickSizeInner = function(x) {
    return arguments.length ? (i = +x, C) : i;
  }, C.tickSizeOuter = function(x) {
    return arguments.length ? (s = +x, C) : s;
  }, C.tickPadding = function(x) {
    return arguments.length ? (k = +x, C) : k;
  }, C.offset = function(x) {
    return arguments.length ? (M = +x, C) : M;
  }, C;
}
function ir(t2) {
  return on(Xt, t2);
}
function sr(t2) {
  return on(ke, t2);
}
const or = Math.PI / 180, cr = 180 / Math.PI, te = 18, cn = 0.96422, un = 1, ln = 0.82521, fn = 4 / 29, St = 6 / 29, hn = 3 * St * St, ur = St * St * St;
function dn(t2) {
  if (t2 instanceof ft)
    return new ft(t2.l, t2.a, t2.b, t2.opacity);
  if (t2 instanceof dt)
    return mn(t2);
  t2 instanceof g || (t2 = ur$1(t2));
  var e = fe(t2.r), n = fe(t2.g), r = fe(t2.b), a = ce((0.2225045 * e + 0.7168786 * n + 0.0606169 * r) / un), i, s;
  return e === n && n === r ? i = s = a : (i = ce((0.4360747 * e + 0.3850649 * n + 0.1430804 * r) / cn), s = ce((0.0139322 * e + 0.0971045 * n + 0.7141733 * r) / ln)), new ft(116 * a - 16, 500 * (i - a), 200 * (a - s), t2.opacity);
}
function lr(t2, e, n, r) {
  return arguments.length === 1 ? dn(t2) : new ft(t2, e, n, r ?? 1);
}
function ft(t2, e, n, r) {
  this.l = +t2, this.a = +e, this.b = +n, this.opacity = +r;
}
bt$1(ft, lr, en$1(U, {
  brighter(t2) {
    return new ft(this.l + te * (t2 ?? 1), this.a, this.b, this.opacity);
  },
  darker(t2) {
    return new ft(this.l - te * (t2 ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var t2 = (this.l + 16) / 116, e = isNaN(this.a) ? t2 : t2 + this.a / 500, n = isNaN(this.b) ? t2 : t2 - this.b / 200;
    return e = cn * ue(e), t2 = un * ue(t2), n = ln * ue(n), new g(
      le(3.1338561 * e - 1.6168667 * t2 - 0.4906146 * n),
      le(-0.9787684 * e + 1.9161415 * t2 + 0.033454 * n),
      le(0.0719453 * e - 0.2289914 * t2 + 1.4052427 * n),
      this.opacity
    );
  }
}));
function ce(t2) {
  return t2 > ur ? Math.pow(t2, 1 / 3) : t2 / hn + fn;
}
function ue(t2) {
  return t2 > St ? t2 * t2 * t2 : hn * (t2 - fn);
}
function le(t2) {
  return 255 * (t2 <= 31308e-7 ? 12.92 * t2 : 1.055 * Math.pow(t2, 1 / 2.4) - 0.055);
}
function fe(t2) {
  return (t2 /= 255) <= 0.04045 ? t2 / 12.92 : Math.pow((t2 + 0.055) / 1.055, 2.4);
}
function fr(t2) {
  if (t2 instanceof dt)
    return new dt(t2.h, t2.c, t2.l, t2.opacity);
  if (t2 instanceof ft || (t2 = dn(t2)), t2.a === 0 && t2.b === 0)
    return new dt(NaN, 0 < t2.l && t2.l < 100 ? 0 : NaN, t2.l, t2.opacity);
  var e = Math.atan2(t2.b, t2.a) * cr;
  return new dt(e < 0 ? e + 360 : e, Math.sqrt(t2.a * t2.a + t2.b * t2.b), t2.l, t2.opacity);
}
function pe(t2, e, n, r) {
  return arguments.length === 1 ? fr(t2) : new dt(t2, e, n, r ?? 1);
}
function dt(t2, e, n, r) {
  this.h = +t2, this.c = +e, this.l = +n, this.opacity = +r;
}
function mn(t2) {
  if (isNaN(t2.h))
    return new ft(t2.l, 0, 0, t2.opacity);
  var e = t2.h * or;
  return new ft(t2.l, Math.cos(e) * t2.c, Math.sin(e) * t2.c, t2.opacity);
}
bt$1(dt, pe, en$1(U, {
  brighter(t2) {
    return new dt(this.h, this.c, this.l + te * (t2 ?? 1), this.opacity);
  },
  darker(t2) {
    return new dt(this.h, this.c, this.l - te * (t2 ?? 1), this.opacity);
  },
  rgb() {
    return mn(this).rgb();
  }
}));
function hr(t2) {
  return function(e, n) {
    var r = t2((e = pe(e)).h, (n = pe(n)).h), a = on$1(e.c, n.c), i = on$1(e.l, n.l), s = on$1(e.opacity, n.opacity);
    return function(k) {
      return e.h = r(k), e.c = a(k), e.l = i(k), e.opacity = s(k), e + "";
    };
  };
}
const dr = hr(Di$1);
function mr(t2, e) {
  t2 = t2.slice();
  var n = 0, r = t2.length - 1, a = t2[n], i = t2[r], s;
  return i < a && (s = n, n = r, r = s, s = a, a = i, i = s), t2[n] = e.floor(a), t2[r] = e.ceil(i), t2;
}
const he = /* @__PURE__ */ new Date(), de = /* @__PURE__ */ new Date();
function et(t2, e, n, r) {
  function a(i) {
    return t2(i = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+i)), i;
  }
  return a.floor = (i) => (t2(i = /* @__PURE__ */ new Date(+i)), i), a.ceil = (i) => (t2(i = new Date(i - 1)), e(i, 1), t2(i), i), a.round = (i) => {
    const s = a(i), k = a.ceil(i);
    return i - s < k - i ? s : k;
  }, a.offset = (i, s) => (e(i = /* @__PURE__ */ new Date(+i), s == null ? 1 : Math.floor(s)), i), a.range = (i, s, k) => {
    const M = [];
    if (i = a.ceil(i), k = k == null ? 1 : Math.floor(k), !(i < s) || !(k > 0))
      return M;
    let T;
    do
      M.push(T = /* @__PURE__ */ new Date(+i)), e(i, k), t2(i);
    while (T < i && i < s);
    return M;
  }, a.filter = (i) => et((s) => {
    if (s >= s)
      for (; t2(s), !i(s); )
        s.setTime(s - 1);
  }, (s, k) => {
    if (s >= s)
      if (k < 0)
        for (; ++k <= 0; )
          for (; e(s, -1), !i(s); )
            ;
      else
        for (; --k >= 0; )
          for (; e(s, 1), !i(s); )
            ;
  }), n && (a.count = (i, s) => (he.setTime(+i), de.setTime(+s), t2(he), t2(de), Math.floor(n(he, de))), a.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? a.filter(r ? (s) => r(s) % i === 0 : (s) => a.count(0, s) % i === 0) : a)), a;
}
const Yt = et(() => {
}, (t2, e) => {
  t2.setTime(+t2 + e);
}, (t2, e) => e - t2);
Yt.every = (t2) => (t2 = Math.floor(t2), !isFinite(t2) || !(t2 > 0) ? null : t2 > 1 ? et((e) => {
  e.setTime(Math.floor(e / t2) * t2);
}, (e, n) => {
  e.setTime(+e + n * t2);
}, (e, n) => (n - e) / t2) : Yt);
Yt.range;
const mt = 1e3, ct = mt * 60, gt = ct * 60, yt = gt * 24, Ce = yt * 7, Ne = yt * 30, me = yt * 365, vt = et((t2) => {
  t2.setTime(t2 - t2.getMilliseconds());
}, (t2, e) => {
  t2.setTime(+t2 + e * mt);
}, (t2, e) => (e - t2) / mt, (t2) => t2.getUTCSeconds());
vt.range;
const Wt = et((t2) => {
  t2.setTime(t2 - t2.getMilliseconds() - t2.getSeconds() * mt);
}, (t2, e) => {
  t2.setTime(+t2 + e * ct);
}, (t2, e) => (e - t2) / ct, (t2) => t2.getMinutes());
Wt.range;
const gr = et((t2) => {
  t2.setUTCSeconds(0, 0);
}, (t2, e) => {
  t2.setTime(+t2 + e * ct);
}, (t2, e) => (e - t2) / ct, (t2) => t2.getUTCMinutes());
gr.range;
const Ot = et((t2) => {
  t2.setTime(t2 - t2.getMilliseconds() - t2.getSeconds() * mt - t2.getMinutes() * ct);
}, (t2, e) => {
  t2.setTime(+t2 + e * gt);
}, (t2, e) => (e - t2) / gt, (t2) => t2.getHours());
Ot.range;
const yr = et((t2) => {
  t2.setUTCMinutes(0, 0, 0);
}, (t2, e) => {
  t2.setTime(+t2 + e * gt);
}, (t2, e) => (e - t2) / gt, (t2) => t2.getUTCHours());
yr.range;
const Tt = et(
  (t2) => t2.setHours(0, 0, 0, 0),
  (t2, e) => t2.setDate(t2.getDate() + e),
  (t2, e) => (e - t2 - (e.getTimezoneOffset() - t2.getTimezoneOffset()) * ct) / yt,
  (t2) => t2.getDate() - 1
);
Tt.range;
const De = et((t2) => {
  t2.setUTCHours(0, 0, 0, 0);
}, (t2, e) => {
  t2.setUTCDate(t2.getUTCDate() + e);
}, (t2, e) => (e - t2) / yt, (t2) => t2.getUTCDate() - 1);
De.range;
const kr = et((t2) => {
  t2.setUTCHours(0, 0, 0, 0);
}, (t2, e) => {
  t2.setUTCDate(t2.getUTCDate() + e);
}, (t2, e) => (e - t2) / yt, (t2) => Math.floor(t2 / yt));
kr.range;
function wt(t2) {
  return et((e) => {
    e.setDate(e.getDate() - (e.getDay() + 7 - t2) % 7), e.setHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setDate(e.getDate() + n * 7);
  }, (e, n) => (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * ct) / Ce);
}
const Vt = wt(0), Ht = wt(1), gn = wt(2), yn = wt(3), xt = wt(4), kn = wt(5), pn = wt(6);
Vt.range;
Ht.range;
gn.range;
yn.range;
xt.range;
kn.range;
pn.range;
function Ct(t2) {
  return et((e) => {
    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t2) % 7), e.setUTCHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setUTCDate(e.getUTCDate() + n * 7);
  }, (e, n) => (n - e) / Ce);
}
const vn = Ct(0), ee = Ct(1), pr = Ct(2), vr = Ct(3), Ut = Ct(4), Tr = Ct(5), xr = Ct(6);
vn.range;
ee.range;
pr.range;
vr.range;
Ut.range;
Tr.range;
xr.range;
const Nt = et((t2) => {
  t2.setDate(1), t2.setHours(0, 0, 0, 0);
}, (t2, e) => {
  t2.setMonth(t2.getMonth() + e);
}, (t2, e) => e.getMonth() - t2.getMonth() + (e.getFullYear() - t2.getFullYear()) * 12, (t2) => t2.getMonth());
Nt.range;
const br = et((t2) => {
  t2.setUTCDate(1), t2.setUTCHours(0, 0, 0, 0);
}, (t2, e) => {
  t2.setUTCMonth(t2.getUTCMonth() + e);
}, (t2, e) => e.getUTCMonth() - t2.getUTCMonth() + (e.getUTCFullYear() - t2.getUTCFullYear()) * 12, (t2) => t2.getUTCMonth());
br.range;
const kt = et((t2) => {
  t2.setMonth(0, 1), t2.setHours(0, 0, 0, 0);
}, (t2, e) => {
  t2.setFullYear(t2.getFullYear() + e);
}, (t2, e) => e.getFullYear() - t2.getFullYear(), (t2) => t2.getFullYear());
kt.every = (t2) => !isFinite(t2 = Math.floor(t2)) || !(t2 > 0) ? null : et((e) => {
  e.setFullYear(Math.floor(e.getFullYear() / t2) * t2), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, n) => {
  e.setFullYear(e.getFullYear() + n * t2);
});
kt.range;
const bt = et((t2) => {
  t2.setUTCMonth(0, 1), t2.setUTCHours(0, 0, 0, 0);
}, (t2, e) => {
  t2.setUTCFullYear(t2.getUTCFullYear() + e);
}, (t2, e) => e.getUTCFullYear() - t2.getUTCFullYear(), (t2) => t2.getUTCFullYear());
bt.every = (t2) => !isFinite(t2 = Math.floor(t2)) || !(t2 > 0) ? null : et((e) => {
  e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t2) * t2), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCFullYear(e.getUTCFullYear() + n * t2);
});
bt.range;
function wr(t2, e, n, r, a, i) {
  const s = [
    [vt, 1, mt],
    [vt, 5, 5 * mt],
    [vt, 15, 15 * mt],
    [vt, 30, 30 * mt],
    [i, 1, ct],
    [i, 5, 5 * ct],
    [i, 15, 15 * ct],
    [i, 30, 30 * ct],
    [a, 1, gt],
    [a, 3, 3 * gt],
    [a, 6, 6 * gt],
    [a, 12, 12 * gt],
    [r, 1, yt],
    [r, 2, 2 * yt],
    [n, 1, Ce],
    [e, 1, Ne],
    [e, 3, 3 * Ne],
    [t2, 1, me]
  ];
  function k(T, g2, U2) {
    const C = g2 < T;
    C && ([T, g2] = [g2, T]);
    const x = U2 && typeof U2.range == "function" ? U2 : M(T, g2, U2), X = x ? x.range(T, +g2 + 1) : [];
    return C ? X.reverse() : X;
  }
  function M(T, g2, U2) {
    const C = Math.abs(g2 - T) / U2, x = _(([, , D2]) => D2).right(s, C);
    if (x === s.length)
      return t2.every(wn$1(T / me, g2 / me, U2));
    if (x === 0)
      return Yt.every(Math.max(wn$1(T, g2, U2), 1));
    const [X, O] = s[C / s[x - 1][2] < s[x][2] / C ? x - 1 : x];
    return X.every(O);
  }
  return [k, M];
}
const [Cr, Dr] = wr(kt, Nt, Vt, Tt, Ot, Wt);
function ge(t2) {
  if (0 <= t2.y && t2.y < 100) {
    var e = new Date(-1, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L);
    return e.setFullYear(t2.y), e;
  }
  return new Date(t2.y, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L);
}
function ye(t2) {
  if (0 <= t2.y && t2.y < 100) {
    var e = new Date(Date.UTC(-1, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L));
    return e.setUTCFullYear(t2.y), e;
  }
  return new Date(Date.UTC(t2.y, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L));
}
function At(t2, e, n) {
  return { y: t2, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Mr(t2) {
  var e = t2.dateTime, n = t2.date, r = t2.time, a = t2.periods, i = t2.days, s = t2.shortDays, k = t2.months, M = t2.shortMonths, T = Lt(a), g2 = It(a), U2 = Lt(i), C = It(i), x = Lt(s), X = It(s), O = Lt(k), D2 = It(k), I = Lt(M), V = It(M), W = {
    a: m,
    A: E,
    b: c,
    B: d,
    c: null,
    d: qe,
    e: qe,
    f: Qr,
    g: ia,
    G: oa,
    H: Zr,
    I: Xr,
    j: Gr,
    L: Tn,
    m: jr,
    M: $r,
    p: o,
    q: z,
    Q: Ge,
    s: Qe,
    S: Jr,
    u: Kr,
    U: ta,
    V: ea,
    w: na,
    W: ra,
    x: null,
    X: null,
    y: aa,
    Y: sa,
    Z: ca,
    "%": Xe
  }, q = {
    a: P,
    A: R,
    b: K,
    B: G,
    c: null,
    d: Ze,
    e: Ze,
    f: ha,
    g: ba,
    G: Ca,
    H: ua,
    I: la,
    j: fa,
    L: bn,
    m: da,
    M: ma,
    p: $,
    q: it,
    Q: Ge,
    s: Qe,
    S: ga,
    u: ya,
    U: ka,
    V: pa,
    w: va,
    W: Ta,
    x: null,
    X: null,
    y: xa,
    Y: wa,
    Z: Da,
    "%": Xe
  }, j = {
    a: _2,
    A: S,
    b: p2,
    B: Y,
    c: u,
    d: Re,
    e: Re,
    f: zr,
    g: ze,
    G: Pe,
    H: Be,
    I: Be,
    j: Hr,
    L: Pr,
    m: Or,
    M: Nr,
    p: F,
    q: Wr,
    Q: Br,
    s: qr,
    S: Vr,
    u: Ur,
    U: Er,
    V: Ar,
    w: Yr,
    W: Lr,
    x: f,
    X: y,
    y: ze,
    Y: Pe,
    Z: Ir,
    "%": Rr
  };
  W.x = w(n, W), W.X = w(r, W), W.c = w(e, W), q.x = w(n, q), q.X = w(r, q), q.c = w(e, q);
  function w(v, L) {
    return function(N) {
      var l2 = [], J = -1, A = 0, Q = v.length, Z, rt, st;
      for (N instanceof Date || (N = /* @__PURE__ */ new Date(+N)); ++J < Q; )
        v.charCodeAt(J) === 37 && (l2.push(v.slice(A, J)), (rt = Ve[Z = v.charAt(++J)]) != null ? Z = v.charAt(++J) : rt = Z === "e" ? " " : "0", (st = L[Z]) && (Z = st(N, rt)), l2.push(Z), A = J + 1);
      return l2.push(v.slice(A, J)), l2.join("");
    };
  }
  function H(v, L) {
    return function(N) {
      var l2 = At(1900, void 0, 1), J = b(l2, v, N += "", 0), A, Q;
      if (J != N.length)
        return null;
      if ("Q" in l2)
        return new Date(l2.Q);
      if ("s" in l2)
        return new Date(l2.s * 1e3 + ("L" in l2 ? l2.L : 0));
      if (L && !("Z" in l2) && (l2.Z = 0), "p" in l2 && (l2.H = l2.H % 12 + l2.p * 12), l2.m === void 0 && (l2.m = "q" in l2 ? l2.q : 0), "V" in l2) {
        if (l2.V < 1 || l2.V > 53)
          return null;
        "w" in l2 || (l2.w = 1), "Z" in l2 ? (A = ye(At(l2.y, 0, 1)), Q = A.getUTCDay(), A = Q > 4 || Q === 0 ? ee.ceil(A) : ee(A), A = De.offset(A, (l2.V - 1) * 7), l2.y = A.getUTCFullYear(), l2.m = A.getUTCMonth(), l2.d = A.getUTCDate() + (l2.w + 6) % 7) : (A = ge(At(l2.y, 0, 1)), Q = A.getDay(), A = Q > 4 || Q === 0 ? Ht.ceil(A) : Ht(A), A = Tt.offset(A, (l2.V - 1) * 7), l2.y = A.getFullYear(), l2.m = A.getMonth(), l2.d = A.getDate() + (l2.w + 6) % 7);
      } else
        ("W" in l2 || "U" in l2) && ("w" in l2 || (l2.w = "u" in l2 ? l2.u % 7 : "W" in l2 ? 1 : 0), Q = "Z" in l2 ? ye(At(l2.y, 0, 1)).getUTCDay() : ge(At(l2.y, 0, 1)).getDay(), l2.m = 0, l2.d = "W" in l2 ? (l2.w + 6) % 7 + l2.W * 7 - (Q + 5) % 7 : l2.w + l2.U * 7 - (Q + 6) % 7);
      return "Z" in l2 ? (l2.H += l2.Z / 100 | 0, l2.M += l2.Z % 100, ye(l2)) : ge(l2);
    };
  }
  function b(v, L, N, l2) {
    for (var J = 0, A = L.length, Q = N.length, Z, rt; J < A; ) {
      if (l2 >= Q)
        return -1;
      if (Z = L.charCodeAt(J++), Z === 37) {
        if (Z = L.charAt(J++), rt = j[Z in Ve ? L.charAt(J++) : Z], !rt || (l2 = rt(v, N, l2)) < 0)
          return -1;
      } else if (Z != N.charCodeAt(l2++))
        return -1;
    }
    return l2;
  }
  function F(v, L, N) {
    var l2 = T.exec(L.slice(N));
    return l2 ? (v.p = g2.get(l2[0].toLowerCase()), N + l2[0].length) : -1;
  }
  function _2(v, L, N) {
    var l2 = x.exec(L.slice(N));
    return l2 ? (v.w = X.get(l2[0].toLowerCase()), N + l2[0].length) : -1;
  }
  function S(v, L, N) {
    var l2 = U2.exec(L.slice(N));
    return l2 ? (v.w = C.get(l2[0].toLowerCase()), N + l2[0].length) : -1;
  }
  function p2(v, L, N) {
    var l2 = I.exec(L.slice(N));
    return l2 ? (v.m = V.get(l2[0].toLowerCase()), N + l2[0].length) : -1;
  }
  function Y(v, L, N) {
    var l2 = O.exec(L.slice(N));
    return l2 ? (v.m = D2.get(l2[0].toLowerCase()), N + l2[0].length) : -1;
  }
  function u(v, L, N) {
    return b(v, e, L, N);
  }
  function f(v, L, N) {
    return b(v, n, L, N);
  }
  function y(v, L, N) {
    return b(v, r, L, N);
  }
  function m(v) {
    return s[v.getDay()];
  }
  function E(v) {
    return i[v.getDay()];
  }
  function c(v) {
    return M[v.getMonth()];
  }
  function d(v) {
    return k[v.getMonth()];
  }
  function o(v) {
    return a[+(v.getHours() >= 12)];
  }
  function z(v) {
    return 1 + ~~(v.getMonth() / 3);
  }
  function P(v) {
    return s[v.getUTCDay()];
  }
  function R(v) {
    return i[v.getUTCDay()];
  }
  function K(v) {
    return M[v.getUTCMonth()];
  }
  function G(v) {
    return k[v.getUTCMonth()];
  }
  function $(v) {
    return a[+(v.getUTCHours() >= 12)];
  }
  function it(v) {
    return 1 + ~~(v.getUTCMonth() / 3);
  }
  return {
    format: function(v) {
      var L = w(v += "", W);
      return L.toString = function() {
        return v;
      }, L;
    },
    parse: function(v) {
      var L = H(v += "", false);
      return L.toString = function() {
        return v;
      }, L;
    },
    utcFormat: function(v) {
      var L = w(v += "", q);
      return L.toString = function() {
        return v;
      }, L;
    },
    utcParse: function(v) {
      var L = H(v += "", true);
      return L.toString = function() {
        return v;
      }, L;
    }
  };
}
var Ve = { "-": "", _: " ", 0: "0" }, nt = /^\s*\d+/, _r = /^%/, Sr = /[\\^$*+?|[\]().{}]/g;
function B(t2, e, n) {
  var r = t2 < 0 ? "-" : "", a = (r ? -t2 : t2) + "", i = a.length;
  return r + (i < n ? new Array(n - i + 1).join(e) + a : a);
}
function Fr(t2) {
  return t2.replace(Sr, "\\$&");
}
function Lt(t2) {
  return new RegExp("^(?:" + t2.map(Fr).join("|") + ")", "i");
}
function It(t2) {
  return new Map(t2.map((e, n) => [e.toLowerCase(), n]));
}
function Yr(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 1));
  return r ? (t2.w = +r[0], n + r[0].length) : -1;
}
function Ur(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 1));
  return r ? (t2.u = +r[0], n + r[0].length) : -1;
}
function Er(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t2.U = +r[0], n + r[0].length) : -1;
}
function Ar(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t2.V = +r[0], n + r[0].length) : -1;
}
function Lr(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t2.W = +r[0], n + r[0].length) : -1;
}
function Pe(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 4));
  return r ? (t2.y = +r[0], n + r[0].length) : -1;
}
function ze(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t2.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Ir(t2, e, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
  return r ? (t2.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function Wr(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 1));
  return r ? (t2.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Or(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t2.m = r[0] - 1, n + r[0].length) : -1;
}
function Re(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t2.d = +r[0], n + r[0].length) : -1;
}
function Hr(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 3));
  return r ? (t2.m = 0, t2.d = +r[0], n + r[0].length) : -1;
}
function Be(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t2.H = +r[0], n + r[0].length) : -1;
}
function Nr(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t2.M = +r[0], n + r[0].length) : -1;
}
function Vr(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 2));
  return r ? (t2.S = +r[0], n + r[0].length) : -1;
}
function Pr(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 3));
  return r ? (t2.L = +r[0], n + r[0].length) : -1;
}
function zr(t2, e, n) {
  var r = nt.exec(e.slice(n, n + 6));
  return r ? (t2.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Rr(t2, e, n) {
  var r = _r.exec(e.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function Br(t2, e, n) {
  var r = nt.exec(e.slice(n));
  return r ? (t2.Q = +r[0], n + r[0].length) : -1;
}
function qr(t2, e, n) {
  var r = nt.exec(e.slice(n));
  return r ? (t2.s = +r[0], n + r[0].length) : -1;
}
function qe(t2, e) {
  return B(t2.getDate(), e, 2);
}
function Zr(t2, e) {
  return B(t2.getHours(), e, 2);
}
function Xr(t2, e) {
  return B(t2.getHours() % 12 || 12, e, 2);
}
function Gr(t2, e) {
  return B(1 + Tt.count(kt(t2), t2), e, 3);
}
function Tn(t2, e) {
  return B(t2.getMilliseconds(), e, 3);
}
function Qr(t2, e) {
  return Tn(t2, e) + "000";
}
function jr(t2, e) {
  return B(t2.getMonth() + 1, e, 2);
}
function $r(t2, e) {
  return B(t2.getMinutes(), e, 2);
}
function Jr(t2, e) {
  return B(t2.getSeconds(), e, 2);
}
function Kr(t2) {
  var e = t2.getDay();
  return e === 0 ? 7 : e;
}
function ta(t2, e) {
  return B(Vt.count(kt(t2) - 1, t2), e, 2);
}
function xn(t2) {
  var e = t2.getDay();
  return e >= 4 || e === 0 ? xt(t2) : xt.ceil(t2);
}
function ea(t2, e) {
  return t2 = xn(t2), B(xt.count(kt(t2), t2) + (kt(t2).getDay() === 4), e, 2);
}
function na(t2) {
  return t2.getDay();
}
function ra(t2, e) {
  return B(Ht.count(kt(t2) - 1, t2), e, 2);
}
function aa(t2, e) {
  return B(t2.getFullYear() % 100, e, 2);
}
function ia(t2, e) {
  return t2 = xn(t2), B(t2.getFullYear() % 100, e, 2);
}
function sa(t2, e) {
  return B(t2.getFullYear() % 1e4, e, 4);
}
function oa(t2, e) {
  var n = t2.getDay();
  return t2 = n >= 4 || n === 0 ? xt(t2) : xt.ceil(t2), B(t2.getFullYear() % 1e4, e, 4);
}
function ca(t2) {
  var e = t2.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + B(e / 60 | 0, "0", 2) + B(e % 60, "0", 2);
}
function Ze(t2, e) {
  return B(t2.getUTCDate(), e, 2);
}
function ua(t2, e) {
  return B(t2.getUTCHours(), e, 2);
}
function la(t2, e) {
  return B(t2.getUTCHours() % 12 || 12, e, 2);
}
function fa(t2, e) {
  return B(1 + De.count(bt(t2), t2), e, 3);
}
function bn(t2, e) {
  return B(t2.getUTCMilliseconds(), e, 3);
}
function ha(t2, e) {
  return bn(t2, e) + "000";
}
function da(t2, e) {
  return B(t2.getUTCMonth() + 1, e, 2);
}
function ma(t2, e) {
  return B(t2.getUTCMinutes(), e, 2);
}
function ga(t2, e) {
  return B(t2.getUTCSeconds(), e, 2);
}
function ya(t2) {
  var e = t2.getUTCDay();
  return e === 0 ? 7 : e;
}
function ka(t2, e) {
  return B(vn.count(bt(t2) - 1, t2), e, 2);
}
function wn(t2) {
  var e = t2.getUTCDay();
  return e >= 4 || e === 0 ? Ut(t2) : Ut.ceil(t2);
}
function pa(t2, e) {
  return t2 = wn(t2), B(Ut.count(bt(t2), t2) + (bt(t2).getUTCDay() === 4), e, 2);
}
function va(t2) {
  return t2.getUTCDay();
}
function Ta(t2, e) {
  return B(ee.count(bt(t2) - 1, t2), e, 2);
}
function xa(t2, e) {
  return B(t2.getUTCFullYear() % 100, e, 2);
}
function ba(t2, e) {
  return t2 = wn(t2), B(t2.getUTCFullYear() % 100, e, 2);
}
function wa(t2, e) {
  return B(t2.getUTCFullYear() % 1e4, e, 4);
}
function Ca(t2, e) {
  var n = t2.getUTCDay();
  return t2 = n >= 4 || n === 0 ? Ut(t2) : Ut.ceil(t2), B(t2.getUTCFullYear() % 1e4, e, 4);
}
function Da() {
  return "+0000";
}
function Xe() {
  return "%";
}
function Ge(t2) {
  return +t2;
}
function Qe(t2) {
  return Math.floor(+t2 / 1e3);
}
var Mt, ne;
Ma({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Ma(t2) {
  return Mt = Mr(t2), ne = Mt.format, Mt.parse, Mt.utcFormat, Mt.utcParse, Mt;
}
function _a(t2) {
  return new Date(t2);
}
function Sa(t2) {
  return t2 instanceof Date ? +t2 : +/* @__PURE__ */ new Date(+t2);
}
function Cn(t2, e, n, r, a, i, s, k, M, T) {
  var g2 = Xn(), U2 = g2.invert, C = g2.domain, x = T(".%L"), X = T(":%S"), O = T("%I:%M"), D2 = T("%I %p"), I = T("%a %d"), V = T("%b %d"), W = T("%B"), q = T("%Y");
  function j(w) {
    return (M(w) < w ? x : k(w) < w ? X : s(w) < w ? O : i(w) < w ? D2 : r(w) < w ? a(w) < w ? I : V : n(w) < w ? W : q)(w);
  }
  return g2.invert = function(w) {
    return new Date(U2(w));
  }, g2.domain = function(w) {
    return arguments.length ? C(Array.from(w, Sa)) : C().map(_a);
  }, g2.ticks = function(w) {
    var H = C();
    return t2(H[0], H[H.length - 1], w ?? 10);
  }, g2.tickFormat = function(w, H) {
    return H == null ? j : T(H);
  }, g2.nice = function(w) {
    var H = C();
    return (!w || typeof w.range != "function") && (w = e(H[0], H[H.length - 1], w ?? 10)), w ? C(mr(H, w)) : g2;
  }, g2.copy = function() {
    return On(g2, Cn(t2, e, n, r, a, i, s, k, M, T));
  }, g2;
}
function Fa() {
  return t$1.apply(Cn(Cr, Dr, kt, Nt, Vt, Tt, Ot, Wt, vt, ne).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var Gt = { exports: {} }, Ya = Gt.exports, je;
function Ua() {
  return je || (je = 1, function(t2, e) {
    (function(n, r) {
      t2.exports = r();
    })(Ya, function() {
      var n = "day";
      return function(r, a, i) {
        var s = function(T) {
          return T.add(4 - T.isoWeekday(), n);
        }, k = a.prototype;
        k.isoWeekYear = function() {
          return s(this).year();
        }, k.isoWeek = function(T) {
          if (!this.$utils().u(T))
            return this.add(7 * (T - this.isoWeek()), n);
          var g2, U2, C, x, X = s(this), O = (g2 = this.isoWeekYear(), U2 = this.$u, C = (U2 ? i.utc : i)().year(g2).startOf("year"), x = 4 - C.isoWeekday(), C.isoWeekday() > 4 && (x += 7), C.add(x, n));
          return X.diff(O, "week") + 1;
        }, k.isoWeekday = function(T) {
          return this.$utils().u(T) ? this.day() || 7 : this.day(this.day() % 7 ? T : T - 7);
        };
        var M = k.startOf;
        k.startOf = function(T, g2) {
          var U2 = this.$utils(), C = !!U2.u(g2) || g2;
          return U2.p(T) === "isoweek" ? C ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : M.bind(this)(T, g2);
        };
      };
    });
  }(Gt)), Gt.exports;
}
var Ea = Ua();
const Aa = /* @__PURE__ */ E0(Ea);
var Qt = { exports: {} }, La = Qt.exports, $e;
function Ia() {
  return $e || ($e = 1, function(t2, e) {
    (function(n, r) {
      t2.exports = r();
    })(La, function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, a = /\d/, i = /\d\d/, s = /\d\d?/, k = /\d*[^-_:/,()\s\d]+/, M = {}, T = function(D2) {
        return (D2 = +D2) + (D2 > 68 ? 1900 : 2e3);
      }, g2 = function(D2) {
        return function(I) {
          this[D2] = +I;
        };
      }, U2 = [/[+-]\d\d:?(\d\d)?|Z/, function(D2) {
        (this.zone || (this.zone = {})).offset = function(I) {
          if (!I || I === "Z")
            return 0;
          var V = I.match(/([+-]|\d\d)/g), W = 60 * V[1] + (+V[2] || 0);
          return W === 0 ? 0 : V[0] === "+" ? -W : W;
        }(D2);
      }], C = function(D2) {
        var I = M[D2];
        return I && (I.indexOf ? I : I.s.concat(I.f));
      }, x = function(D2, I) {
        var V, W = M.meridiem;
        if (W) {
          for (var q = 1; q <= 24; q += 1)
            if (D2.indexOf(W(q, 0, I)) > -1) {
              V = q > 12;
              break;
            }
        } else
          V = D2 === (I ? "pm" : "PM");
        return V;
      }, X = { A: [k, function(D2) {
        this.afternoon = x(D2, false);
      }], a: [k, function(D2) {
        this.afternoon = x(D2, true);
      }], Q: [a, function(D2) {
        this.month = 3 * (D2 - 1) + 1;
      }], S: [a, function(D2) {
        this.milliseconds = 100 * +D2;
      }], SS: [i, function(D2) {
        this.milliseconds = 10 * +D2;
      }], SSS: [/\d{3}/, function(D2) {
        this.milliseconds = +D2;
      }], s: [s, g2("seconds")], ss: [s, g2("seconds")], m: [s, g2("minutes")], mm: [s, g2("minutes")], H: [s, g2("hours")], h: [s, g2("hours")], HH: [s, g2("hours")], hh: [s, g2("hours")], D: [s, g2("day")], DD: [i, g2("day")], Do: [k, function(D2) {
        var I = M.ordinal, V = D2.match(/\d+/);
        if (this.day = V[0], I)
          for (var W = 1; W <= 31; W += 1)
            I(W).replace(/\[|\]/g, "") === D2 && (this.day = W);
      }], w: [s, g2("week")], ww: [i, g2("week")], M: [s, g2("month")], MM: [i, g2("month")], MMM: [k, function(D2) {
        var I = C("months"), V = (C("monthsShort") || I.map(function(W) {
          return W.slice(0, 3);
        })).indexOf(D2) + 1;
        if (V < 1)
          throw new Error();
        this.month = V % 12 || V;
      }], MMMM: [k, function(D2) {
        var I = C("months").indexOf(D2) + 1;
        if (I < 1)
          throw new Error();
        this.month = I % 12 || I;
      }], Y: [/[+-]?\d+/, g2("year")], YY: [i, function(D2) {
        this.year = T(D2);
      }], YYYY: [/\d{4}/, g2("year")], Z: U2, ZZ: U2 };
      function O(D2) {
        var I, V;
        I = D2, V = M && M.formats;
        for (var W = (D2 = I.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(_2, S, p2) {
          var Y = p2 && p2.toUpperCase();
          return S || V[p2] || n[p2] || V[Y].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(u, f, y) {
            return f || y.slice(1);
          });
        })).match(r), q = W.length, j = 0; j < q; j += 1) {
          var w = W[j], H = X[w], b = H && H[0], F = H && H[1];
          W[j] = F ? { regex: b, parser: F } : w.replace(/^\[|\]$/g, "");
        }
        return function(_2) {
          for (var S = {}, p2 = 0, Y = 0; p2 < q; p2 += 1) {
            var u = W[p2];
            if (typeof u == "string")
              Y += u.length;
            else {
              var f = u.regex, y = u.parser, m = _2.slice(Y), E = f.exec(m)[0];
              y.call(S, E), _2 = _2.replace(E, "");
            }
          }
          return function(c) {
            var d = c.afternoon;
            if (d !== void 0) {
              var o = c.hours;
              d ? o < 12 && (c.hours += 12) : o === 12 && (c.hours = 0), delete c.afternoon;
            }
          }(S), S;
        };
      }
      return function(D2, I, V) {
        V.p.customParseFormat = true, D2 && D2.parseTwoDigitYear && (T = D2.parseTwoDigitYear);
        var W = I.prototype, q = W.parse;
        W.parse = function(j) {
          var w = j.date, H = j.utc, b = j.args;
          this.$u = H;
          var F = b[1];
          if (typeof F == "string") {
            var _2 = b[2] === true, S = b[3] === true, p2 = _2 || S, Y = b[2];
            S && (Y = b[2]), M = this.$locale(), !_2 && Y && (M = V.Ls[Y]), this.$d = function(m, E, c, d) {
              try {
                if (["x", "X"].indexOf(E) > -1)
                  return new Date((E === "X" ? 1e3 : 1) * m);
                var o = O(E)(m), z = o.year, P = o.month, R = o.day, K = o.hours, G = o.minutes, $ = o.seconds, it = o.milliseconds, v = o.zone, L = o.week, N = /* @__PURE__ */ new Date(), l2 = R || (z || P ? 1 : N.getDate()), J = z || N.getFullYear(), A = 0;
                z && !P || (A = P > 0 ? P - 1 : N.getMonth());
                var Q, Z = K || 0, rt = G || 0, st = $ || 0, pt = it || 0;
                return v ? new Date(Date.UTC(J, A, l2, Z, rt, st, pt + 60 * v.offset * 1e3)) : c ? new Date(Date.UTC(J, A, l2, Z, rt, st, pt)) : (Q = new Date(J, A, l2, Z, rt, st, pt), L && (Q = d(Q).week(L).toDate()), Q);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            }(w, F, H, V), this.init(), Y && Y !== true && (this.$L = this.locale(Y).$L), p2 && w != this.format(F) && (this.$d = /* @__PURE__ */ new Date("")), M = {};
          } else if (F instanceof Array)
            for (var u = F.length, f = 1; f <= u; f += 1) {
              b[1] = F[f - 1];
              var y = V.apply(this, b);
              if (y.isValid()) {
                this.$d = y.$d, this.$L = y.$L, this.init();
                break;
              }
              f === u && (this.$d = /* @__PURE__ */ new Date(""));
            }
          else
            q.call(this, j);
        };
      };
    });
  }(Qt)), Qt.exports;
}
var Wa = Ia();
const Oa = /* @__PURE__ */ E0(Wa);
var jt = { exports: {} }, Ha = jt.exports, Je;
function Na() {
  return Je || (Je = 1, function(t2, e) {
    (function(n, r) {
      t2.exports = r();
    })(Ha, function() {
      return function(n, r) {
        var a = r.prototype, i = a.format;
        a.format = function(s) {
          var k = this, M = this.$locale();
          if (!this.isValid())
            return i.bind(this)(s);
          var T = this.$utils(), g2 = (s || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(U2) {
            switch (U2) {
              case "Q":
                return Math.ceil((k.$M + 1) / 3);
              case "Do":
                return M.ordinal(k.$D);
              case "gggg":
                return k.weekYear();
              case "GGGG":
                return k.isoWeekYear();
              case "wo":
                return M.ordinal(k.week(), "W");
              case "w":
              case "ww":
                return T.s(k.week(), U2 === "w" ? 1 : 2, "0");
              case "W":
              case "WW":
                return T.s(k.isoWeek(), U2 === "W" ? 1 : 2, "0");
              case "k":
              case "kk":
                return T.s(String(k.$H === 0 ? 24 : k.$H), U2 === "k" ? 1 : 2, "0");
              case "X":
                return Math.floor(k.$d.getTime() / 1e3);
              case "x":
                return k.$d.getTime();
              case "z":
                return "[" + k.offsetName() + "]";
              case "zzz":
                return "[" + k.offsetName("long") + "]";
              default:
                return U2;
            }
          });
          return i.bind(this)(g2);
        };
      };
    });
  }(jt)), jt.exports;
}
var Va = Na();
const Pa = /* @__PURE__ */ E0(Va);
var ve = function() {
  var t2 = /* @__PURE__ */ p(function(Y, u, f, y) {
    for (f = f || {}, y = Y.length; y--; f[Y[y]] = u)
      ;
    return f;
  }, "o"), e = [6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 35, 36, 38, 40], n = [1, 26], r = [1, 27], a = [1, 28], i = [1, 29], s = [1, 30], k = [1, 31], M = [1, 32], T = [1, 33], g2 = [1, 34], U2 = [1, 9], C = [1, 10], x = [1, 11], X = [1, 12], O = [1, 13], D2 = [1, 14], I = [1, 15], V = [1, 16], W = [1, 19], q = [1, 20], j = [1, 21], w = [1, 22], H = [1, 23], b = [1, 25], F = [1, 35], _2 = {
    trace: /* @__PURE__ */ p(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, gantt: 4, document: 5, EOF: 6, line: 7, SPACE: 8, statement: 9, NL: 10, weekday: 11, weekday_monday: 12, weekday_tuesday: 13, weekday_wednesday: 14, weekday_thursday: 15, weekday_friday: 16, weekday_saturday: 17, weekday_sunday: 18, weekend: 19, weekend_friday: 20, weekend_saturday: 21, dateFormat: 22, inclusiveEndDates: 23, topAxis: 24, axisFormat: 25, tickInterval: 26, excludes: 27, includes: 28, todayMarker: 29, title: 30, acc_title: 31, acc_title_value: 32, acc_descr: 33, acc_descr_value: 34, acc_descr_multiline_value: 35, section: 36, clickStatement: 37, taskTxt: 38, taskData: 39, click: 40, callbackname: 41, callbackargs: 42, href: 43, clickStatementDebug: 44, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "gantt", 6: "EOF", 8: "SPACE", 10: "NL", 12: "weekday_monday", 13: "weekday_tuesday", 14: "weekday_wednesday", 15: "weekday_thursday", 16: "weekday_friday", 17: "weekday_saturday", 18: "weekday_sunday", 20: "weekend_friday", 21: "weekend_saturday", 22: "dateFormat", 23: "inclusiveEndDates", 24: "topAxis", 25: "axisFormat", 26: "tickInterval", 27: "excludes", 28: "includes", 29: "todayMarker", 30: "title", 31: "acc_title", 32: "acc_title_value", 33: "acc_descr", 34: "acc_descr_value", 35: "acc_descr_multiline_value", 36: "section", 38: "taskTxt", 39: "taskData", 40: "click", 41: "callbackname", 42: "callbackargs", 43: "href" },
    productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [19, 1], [19, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 1], [9, 2], [37, 2], [37, 3], [37, 3], [37, 4], [37, 3], [37, 4], [37, 2], [44, 2], [44, 3], [44, 3], [44, 4], [44, 3], [44, 4], [44, 2]],
    performAction: /* @__PURE__ */ p(function(u, f, y, m, E, c, d) {
      var o = c.length - 1;
      switch (E) {
        case 1:
          return c[o - 1];
        case 2:
          this.$ = [];
          break;
        case 3:
          c[o - 1].push(c[o]), this.$ = c[o - 1];
          break;
        case 4:
        case 5:
          this.$ = c[o];
          break;
        case 6:
        case 7:
          this.$ = [];
          break;
        case 8:
          m.setWeekday("monday");
          break;
        case 9:
          m.setWeekday("tuesday");
          break;
        case 10:
          m.setWeekday("wednesday");
          break;
        case 11:
          m.setWeekday("thursday");
          break;
        case 12:
          m.setWeekday("friday");
          break;
        case 13:
          m.setWeekday("saturday");
          break;
        case 14:
          m.setWeekday("sunday");
          break;
        case 15:
          m.setWeekend("friday");
          break;
        case 16:
          m.setWeekend("saturday");
          break;
        case 17:
          m.setDateFormat(c[o].substr(11)), this.$ = c[o].substr(11);
          break;
        case 18:
          m.enableInclusiveEndDates(), this.$ = c[o].substr(18);
          break;
        case 19:
          m.TopAxis(), this.$ = c[o].substr(8);
          break;
        case 20:
          m.setAxisFormat(c[o].substr(11)), this.$ = c[o].substr(11);
          break;
        case 21:
          m.setTickInterval(c[o].substr(13)), this.$ = c[o].substr(13);
          break;
        case 22:
          m.setExcludes(c[o].substr(9)), this.$ = c[o].substr(9);
          break;
        case 23:
          m.setIncludes(c[o].substr(9)), this.$ = c[o].substr(9);
          break;
        case 24:
          m.setTodayMarker(c[o].substr(12)), this.$ = c[o].substr(12);
          break;
        case 27:
          m.setDiagramTitle(c[o].substr(6)), this.$ = c[o].substr(6);
          break;
        case 28:
          this.$ = c[o].trim(), m.setAccTitle(this.$);
          break;
        case 29:
        case 30:
          this.$ = c[o].trim(), m.setAccDescription(this.$);
          break;
        case 31:
          m.addSection(c[o].substr(8)), this.$ = c[o].substr(8);
          break;
        case 33:
          m.addTask(c[o - 1], c[o]), this.$ = "task";
          break;
        case 34:
          this.$ = c[o - 1], m.setClickEvent(c[o - 1], c[o], null);
          break;
        case 35:
          this.$ = c[o - 2], m.setClickEvent(c[o - 2], c[o - 1], c[o]);
          break;
        case 36:
          this.$ = c[o - 2], m.setClickEvent(c[o - 2], c[o - 1], null), m.setLink(c[o - 2], c[o]);
          break;
        case 37:
          this.$ = c[o - 3], m.setClickEvent(c[o - 3], c[o - 2], c[o - 1]), m.setLink(c[o - 3], c[o]);
          break;
        case 38:
          this.$ = c[o - 2], m.setClickEvent(c[o - 2], c[o], null), m.setLink(c[o - 2], c[o - 1]);
          break;
        case 39:
          this.$ = c[o - 3], m.setClickEvent(c[o - 3], c[o - 1], c[o]), m.setLink(c[o - 3], c[o - 2]);
          break;
        case 40:
          this.$ = c[o - 1], m.setLink(c[o - 1], c[o]);
          break;
        case 41:
        case 47:
          this.$ = c[o - 1] + " " + c[o];
          break;
        case 42:
        case 43:
        case 45:
          this.$ = c[o - 2] + " " + c[o - 1] + " " + c[o];
          break;
        case 44:
        case 46:
          this.$ = c[o - 3] + " " + c[o - 2] + " " + c[o - 1] + " " + c[o];
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, t2(e, [2, 2], { 5: 3 }), { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: 17, 12: n, 13: r, 14: a, 15: i, 16: s, 17: k, 18: M, 19: 18, 20: T, 21: g2, 22: U2, 23: C, 24: x, 25: X, 26: O, 27: D2, 28: I, 29: V, 30: W, 31: q, 33: j, 35: w, 36: H, 37: 24, 38: b, 40: F }, t2(e, [2, 7], { 1: [2, 1] }), t2(e, [2, 3]), { 9: 36, 11: 17, 12: n, 13: r, 14: a, 15: i, 16: s, 17: k, 18: M, 19: 18, 20: T, 21: g2, 22: U2, 23: C, 24: x, 25: X, 26: O, 27: D2, 28: I, 29: V, 30: W, 31: q, 33: j, 35: w, 36: H, 37: 24, 38: b, 40: F }, t2(e, [2, 5]), t2(e, [2, 6]), t2(e, [2, 17]), t2(e, [2, 18]), t2(e, [2, 19]), t2(e, [2, 20]), t2(e, [2, 21]), t2(e, [2, 22]), t2(e, [2, 23]), t2(e, [2, 24]), t2(e, [2, 25]), t2(e, [2, 26]), t2(e, [2, 27]), { 32: [1, 37] }, { 34: [1, 38] }, t2(e, [2, 30]), t2(e, [2, 31]), t2(e, [2, 32]), { 39: [1, 39] }, t2(e, [2, 8]), t2(e, [2, 9]), t2(e, [2, 10]), t2(e, [2, 11]), t2(e, [2, 12]), t2(e, [2, 13]), t2(e, [2, 14]), t2(e, [2, 15]), t2(e, [2, 16]), { 41: [1, 40], 43: [1, 41] }, t2(e, [2, 4]), t2(e, [2, 28]), t2(e, [2, 29]), t2(e, [2, 33]), t2(e, [2, 34], { 42: [1, 42], 43: [1, 43] }), t2(e, [2, 40], { 41: [1, 44] }), t2(e, [2, 35], { 43: [1, 45] }), t2(e, [2, 36]), t2(e, [2, 38], { 42: [1, 46] }), t2(e, [2, 37]), t2(e, [2, 39])],
    defaultActions: {},
    parseError: /* @__PURE__ */ p(function(u, f) {
      if (f.recoverable)
        this.trace(u);
      else {
        var y = new Error(u);
        throw y.hash = f, y;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ p(function(u) {
      var f = this, y = [0], m = [], E = [null], c = [], d = this.table, o = "", z = 0, P = 0, R = 2, K = 1, G = c.slice.call(arguments, 1), $ = Object.create(this.lexer), it = { yy: {} };
      for (var v in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, v) && (it.yy[v] = this.yy[v]);
      $.setInput(u, it.yy), it.yy.lexer = $, it.yy.parser = this, typeof $.yylloc > "u" && ($.yylloc = {});
      var L = $.yylloc;
      c.push(L);
      var N = $.options && $.options.ranges;
      typeof it.yy.parseError == "function" ? this.parseError = it.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function l2(ot) {
        y.length = y.length - 2 * ot, E.length = E.length - ot, c.length = c.length - ot;
      }
      p(l2, "popStack");
      function J() {
        var ot;
        return ot = m.pop() || $.lex() || K, typeof ot != "number" && (ot instanceof Array && (m = ot, ot = m.pop()), ot = f.symbols_[ot] || ot), ot;
      }
      p(J, "lex");
      for (var A, Q, Z, rt, st = {}, pt, ut, We, Bt; ; ) {
        if (Q = y[y.length - 1], this.defaultActions[Q] ? Z = this.defaultActions[Q] : ((A === null || typeof A > "u") && (A = J()), Z = d[Q] && d[Q][A]), typeof Z > "u" || !Z.length || !Z[0]) {
          var ie = "";
          Bt = [];
          for (pt in d[Q])
            this.terminals_[pt] && pt > R && Bt.push("'" + this.terminals_[pt] + "'");
          $.showPosition ? ie = "Parse error on line " + (z + 1) + `:
` + $.showPosition() + `
Expecting ` + Bt.join(", ") + ", got '" + (this.terminals_[A] || A) + "'" : ie = "Parse error on line " + (z + 1) + ": Unexpected " + (A == K ? "end of input" : "'" + (this.terminals_[A] || A) + "'"), this.parseError(ie, {
            text: $.match,
            token: this.terminals_[A] || A,
            line: $.yylineno,
            loc: L,
            expected: Bt
          });
        }
        if (Z[0] instanceof Array && Z.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + Q + ", token: " + A);
        switch (Z[0]) {
          case 1:
            y.push(A), E.push($.yytext), c.push($.yylloc), y.push(Z[1]), A = null, P = $.yyleng, o = $.yytext, z = $.yylineno, L = $.yylloc;
            break;
          case 2:
            if (ut = this.productions_[Z[1]][1], st.$ = E[E.length - ut], st._$ = {
              first_line: c[c.length - (ut || 1)].first_line,
              last_line: c[c.length - 1].last_line,
              first_column: c[c.length - (ut || 1)].first_column,
              last_column: c[c.length - 1].last_column
            }, N && (st._$.range = [
              c[c.length - (ut || 1)].range[0],
              c[c.length - 1].range[1]
            ]), rt = this.performAction.apply(st, [
              o,
              P,
              z,
              it.yy,
              Z[1],
              E,
              c
            ].concat(G)), typeof rt < "u")
              return rt;
            ut && (y = y.slice(0, -1 * ut * 2), E = E.slice(0, -1 * ut), c = c.slice(0, -1 * ut)), y.push(this.productions_[Z[1]][0]), E.push(st.$), c.push(st._$), We = d[y[y.length - 2]][y[y.length - 1]], y.push(We);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, S = /* @__PURE__ */ function() {
    var Y = {
      EOF: 1,
      parseError: /* @__PURE__ */ p(function(f, y) {
        if (this.yy.parser)
          this.yy.parser.parseError(f, y);
        else
          throw new Error(f);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: /* @__PURE__ */ p(function(u, f) {
        return this.yy = f || this.yy || {}, this._input = u, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: /* @__PURE__ */ p(function() {
        var u = this._input[0];
        this.yytext += u, this.yyleng++, this.offset++, this.match += u, this.matched += u;
        var f = u.match(/(?:\r\n?|\n).*/g);
        return f ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), u;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: /* @__PURE__ */ p(function(u) {
        var f = u.length, y = u.split(/(?:\r\n?|\n)/g);
        this._input = u + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - f), this.offset -= f;
        var m = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), y.length - 1 && (this.yylineno -= y.length - 1);
        var E = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: y ? (y.length === m.length ? this.yylloc.first_column : 0) + m[m.length - y.length].length - y[0].length : this.yylloc.first_column - f
        }, this.options.ranges && (this.yylloc.range = [E[0], E[0] + this.yyleng - f]), this.yyleng = this.yytext.length, this;
      }, "unput"),
      // When called from action, caches matched text and appends it on next action
      more: /* @__PURE__ */ p(function() {
        return this._more = true, this;
      }, "more"),
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: /* @__PURE__ */ p(function() {
        if (this.options.backtrack_lexer)
          this._backtrack = true;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      }, "reject"),
      // retain first n characters of the match
      less: /* @__PURE__ */ p(function(u) {
        this.unput(this.match.slice(u));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: /* @__PURE__ */ p(function() {
        var u = this.matched.substr(0, this.matched.length - this.match.length);
        return (u.length > 20 ? "..." : "") + u.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: /* @__PURE__ */ p(function() {
        var u = this.match;
        return u.length < 20 && (u += this._input.substr(0, 20 - u.length)), (u.substr(0, 20) + (u.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: /* @__PURE__ */ p(function() {
        var u = this.pastInput(), f = new Array(u.length + 1).join("-");
        return u + this.upcomingInput() + `
` + f + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: /* @__PURE__ */ p(function(u, f) {
        var y, m, E;
        if (this.options.backtrack_lexer && (E = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (E.yylloc.range = this.yylloc.range.slice(0))), m = u[0].match(/(?:\r\n?|\n).*/g), m && (this.yylineno += m.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: m ? m[m.length - 1].length - m[m.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + u[0].length
        }, this.yytext += u[0], this.match += u[0], this.matches = u, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(u[0].length), this.matched += u[0], y = this.performAction.call(this, this.yy, this, f, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), y)
          return y;
        if (this._backtrack) {
          for (var c in E)
            this[c] = E[c];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: /* @__PURE__ */ p(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var u, f, y, m;
        this._more || (this.yytext = "", this.match = "");
        for (var E = this._currentRules(), c = 0; c < E.length; c++)
          if (y = this._input.match(this.rules[E[c]]), y && (!f || y[0].length > f[0].length)) {
            if (f = y, m = c, this.options.backtrack_lexer) {
              if (u = this.test_match(y, E[c]), u !== false)
                return u;
              if (this._backtrack) {
                f = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return f ? (u = this.test_match(f, E[m]), u !== false ? u : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: /* @__PURE__ */ p(function() {
        var f = this.next();
        return f || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: /* @__PURE__ */ p(function(f) {
        this.conditionStack.push(f);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: /* @__PURE__ */ p(function() {
        var f = this.conditionStack.length - 1;
        return f > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: /* @__PURE__ */ p(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: /* @__PURE__ */ p(function(f) {
        return f = this.conditionStack.length - 1 - Math.abs(f || 0), f >= 0 ? this.conditionStack[f] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: /* @__PURE__ */ p(function(f) {
        this.begin(f);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: /* @__PURE__ */ p(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: { "case-insensitive": true },
      performAction: /* @__PURE__ */ p(function(f, y, m, E) {
        switch (m) {
          case 0:
            return this.begin("open_directive"), "open_directive";
          case 1:
            return this.begin("acc_title"), 31;
          case 2:
            return this.popState(), "acc_title_value";
          case 3:
            return this.begin("acc_descr"), 33;
          case 4:
            return this.popState(), "acc_descr_value";
          case 5:
            this.begin("acc_descr_multiline");
            break;
          case 6:
            this.popState();
            break;
          case 7:
            return "acc_descr_multiline_value";
          case 8:
            break;
          case 9:
            break;
          case 10:
            break;
          case 11:
            return 10;
          case 12:
            break;
          case 13:
            break;
          case 14:
            this.begin("href");
            break;
          case 15:
            this.popState();
            break;
          case 16:
            return 43;
          case 17:
            this.begin("callbackname");
            break;
          case 18:
            this.popState();
            break;
          case 19:
            this.popState(), this.begin("callbackargs");
            break;
          case 20:
            return 41;
          case 21:
            this.popState();
            break;
          case 22:
            return 42;
          case 23:
            this.begin("click");
            break;
          case 24:
            this.popState();
            break;
          case 25:
            return 40;
          case 26:
            return 4;
          case 27:
            return 22;
          case 28:
            return 23;
          case 29:
            return 24;
          case 30:
            return 25;
          case 31:
            return 26;
          case 32:
            return 28;
          case 33:
            return 27;
          case 34:
            return 29;
          case 35:
            return 12;
          case 36:
            return 13;
          case 37:
            return 14;
          case 38:
            return 15;
          case 39:
            return 16;
          case 40:
            return 17;
          case 41:
            return 18;
          case 42:
            return 20;
          case 43:
            return 21;
          case 44:
            return "date";
          case 45:
            return 30;
          case 46:
            return "accDescription";
          case 47:
            return 36;
          case 48:
            return 38;
          case 49:
            return 39;
          case 50:
            return ":";
          case 51:
            return 6;
          case 52:
            return "INVALID";
        }
      }, "anonymous"),
      rules: [/^(?:%%\{)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:%%(?!\{)*[^\n]*)/i, /^(?:[^\}]%%*[^\n]*)/i, /^(?:%%*[^\n]*[\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:%[^\n]*)/i, /^(?:href[\s]+["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:call[\s]+)/i, /^(?:\([\s]*\))/i, /^(?:\()/i, /^(?:[^(]*)/i, /^(?:\))/i, /^(?:[^)]*)/i, /^(?:click[\s]+)/i, /^(?:[\s\n])/i, /^(?:[^\s\n]*)/i, /^(?:gantt\b)/i, /^(?:dateFormat\s[^#\n;]+)/i, /^(?:inclusiveEndDates\b)/i, /^(?:topAxis\b)/i, /^(?:axisFormat\s[^#\n;]+)/i, /^(?:tickInterval\s[^#\n;]+)/i, /^(?:includes\s[^#\n;]+)/i, /^(?:excludes\s[^#\n;]+)/i, /^(?:todayMarker\s[^\n;]+)/i, /^(?:weekday\s+monday\b)/i, /^(?:weekday\s+tuesday\b)/i, /^(?:weekday\s+wednesday\b)/i, /^(?:weekday\s+thursday\b)/i, /^(?:weekday\s+friday\b)/i, /^(?:weekday\s+saturday\b)/i, /^(?:weekday\s+sunday\b)/i, /^(?:weekend\s+friday\b)/i, /^(?:weekend\s+saturday\b)/i, /^(?:\d\d\d\d-\d\d-\d\d\b)/i, /^(?:title\s[^\n]+)/i, /^(?:accDescription\s[^#\n;]+)/i, /^(?:section\s[^\n]+)/i, /^(?:[^:\n]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { acc_descr_multiline: { rules: [6, 7], inclusive: false }, acc_descr: { rules: [4], inclusive: false }, acc_title: { rules: [2], inclusive: false }, callbackargs: { rules: [21, 22], inclusive: false }, callbackname: { rules: [18, 19, 20], inclusive: false }, href: { rules: [15, 16], inclusive: false }, click: { rules: [24, 25], inclusive: false }, INITIAL: { rules: [0, 1, 3, 5, 8, 9, 10, 11, 12, 13, 14, 17, 23, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52], inclusive: true } }
    };
    return Y;
  }();
  _2.lexer = S;
  function p$1() {
    this.yy = {};
  }
  return p(p$1, "Parser"), p$1.prototype = _2, _2.Parser = p$1, new p$1();
}();
ve.parser = ve;
var za = ve;
Ng.extend(Aa);
Ng.extend(Oa);
Ng.extend(Pa);
var Ke = { friday: 5, saturday: 6 }, lt = "", Me = "", _e = void 0, Se = "", Pt = [], zt = [], Fe = /* @__PURE__ */ new Map(), Ye = [], re = [], Et = "", Ue = "", Dn = ["active", "done", "crit", "milestone"], Ee = [], Rt = false, Ae = false, Le = "sunday", ae = "saturday", Te = 0, Ra = /* @__PURE__ */ p(function() {
  Ye = [], re = [], Et = "", Ee = [], $t = 0, be = void 0, Jt = void 0, tt = [], lt = "", Me = "", Ue = "", _e = void 0, Se = "", Pt = [], zt = [], Rt = false, Ae = false, Te = 0, Fe = /* @__PURE__ */ new Map(), Qm(), Le = "sunday", ae = "saturday";
}, "clear"), Ba = /* @__PURE__ */ p(function(t2) {
  Me = t2;
}, "setAxisFormat"), qa = /* @__PURE__ */ p(function() {
  return Me;
}, "getAxisFormat"), Za = /* @__PURE__ */ p(function(t2) {
  _e = t2;
}, "setTickInterval"), Xa = /* @__PURE__ */ p(function() {
  return _e;
}, "getTickInterval"), Ga = /* @__PURE__ */ p(function(t2) {
  Se = t2;
}, "setTodayMarker"), Qa = /* @__PURE__ */ p(function() {
  return Se;
}, "getTodayMarker"), ja = /* @__PURE__ */ p(function(t2) {
  lt = t2;
}, "setDateFormat"), $a = /* @__PURE__ */ p(function() {
  Rt = true;
}, "enableInclusiveEndDates"), Ja = /* @__PURE__ */ p(function() {
  return Rt;
}, "endDatesAreInclusive"), Ka = /* @__PURE__ */ p(function() {
  Ae = true;
}, "enableTopAxis"), ti = /* @__PURE__ */ p(function() {
  return Ae;
}, "topAxisEnabled"), ei = /* @__PURE__ */ p(function(t2) {
  Ue = t2;
}, "setDisplayMode"), ni = /* @__PURE__ */ p(function() {
  return Ue;
}, "getDisplayMode"), ri = /* @__PURE__ */ p(function() {
  return lt;
}, "getDateFormat"), ai = /* @__PURE__ */ p(function(t2) {
  Pt = t2.toLowerCase().split(/[\s,]+/);
}, "setIncludes"), ii = /* @__PURE__ */ p(function() {
  return Pt;
}, "getIncludes"), si = /* @__PURE__ */ p(function(t2) {
  zt = t2.toLowerCase().split(/[\s,]+/);
}, "setExcludes"), oi = /* @__PURE__ */ p(function() {
  return zt;
}, "getExcludes"), ci = /* @__PURE__ */ p(function() {
  return Fe;
}, "getLinks"), ui = /* @__PURE__ */ p(function(t2) {
  Et = t2, Ye.push(t2);
}, "addSection"), li = /* @__PURE__ */ p(function() {
  return Ye;
}, "getSections"), fi = /* @__PURE__ */ p(function() {
  let t2 = tn();
  const e = 10;
  let n = 0;
  for (; !t2 && n < e; )
    t2 = tn(), n++;
  return re = tt, re;
}, "getTasks"), Mn = /* @__PURE__ */ p(function(t2, e, n, r) {
  return r.includes(t2.format(e.trim())) ? false : n.includes("weekends") && (t2.isoWeekday() === Ke[ae] || t2.isoWeekday() === Ke[ae] + 1) || n.includes(t2.format("dddd").toLowerCase()) ? true : n.includes(t2.format(e.trim()));
}, "isInvalidDate"), hi = /* @__PURE__ */ p(function(t2) {
  Le = t2;
}, "setWeekday"), di = /* @__PURE__ */ p(function() {
  return Le;
}, "getWeekday"), mi = /* @__PURE__ */ p(function(t2) {
  ae = t2;
}, "setWeekend"), _n = /* @__PURE__ */ p(function(t2, e, n, r) {
  if (!n.length || t2.manualEndTime)
    return;
  let a;
  t2.startTime instanceof Date ? a = Ng(t2.startTime) : a = Ng(t2.startTime, e, true), a = a.add(1, "d");
  let i;
  t2.endTime instanceof Date ? i = Ng(t2.endTime) : i = Ng(t2.endTime, e, true);
  const [s, k] = gi(
    a,
    i,
    e,
    n,
    r
  );
  t2.endTime = s.toDate(), t2.renderEndTime = k;
}, "checkTaskDates"), gi = /* @__PURE__ */ p(function(t2, e, n, r, a) {
  let i = false, s = null;
  for (; t2 <= e; )
    i || (s = e.toDate()), i = Mn(t2, n, r, a), i && (e = e.add(1, "d")), t2 = t2.add(1, "d");
  return [e, s];
}, "fixTaskDates"), xe = /* @__PURE__ */ p(function(t2, e, n) {
  n = n.trim();
  const a = /^after\s+(?<ids>[\d\w- ]+)/.exec(n);
  if (a !== null) {
    let s = null;
    for (const M of a.groups.ids.split(" ")) {
      let T = Dt(M);
      T !== void 0 && (!s || T.endTime > s.endTime) && (s = T);
    }
    if (s)
      return s.endTime;
    const k = /* @__PURE__ */ new Date();
    return k.setHours(0, 0, 0, 0), k;
  }
  let i = Ng(n, e.trim(), true);
  if (i.isValid())
    return i.toDate();
  {
    D.debug("Invalid date:" + n), D.debug("With date format:" + e.trim());
    const s = new Date(n);
    if (s === void 0 || isNaN(s.getTime()) || // WebKit browsers can mis-parse invalid dates to be ridiculously
    // huge numbers, e.g. new Date('202304') gets parsed as January 1, 202304.
    // This can cause virtually infinite loops while rendering, so for the
    // purposes of Gantt charts we'll just treat any date beyond 10,000 AD/BC as
    // invalid.
    s.getFullYear() < -1e4 || s.getFullYear() > 1e4)
      throw new Error("Invalid date:" + n);
    return s;
  }
}, "getStartDate"), Sn = /* @__PURE__ */ p(function(t2) {
  const e = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t2.trim());
  return e !== null ? [Number.parseFloat(e[1]), e[2]] : [NaN, "ms"];
}, "parseDuration"), Fn = /* @__PURE__ */ p(function(t2, e, n, r = false) {
  n = n.trim();
  const i = /^until\s+(?<ids>[\d\w- ]+)/.exec(n);
  if (i !== null) {
    let g2 = null;
    for (const C of i.groups.ids.split(" ")) {
      let x = Dt(C);
      x !== void 0 && (!g2 || x.startTime < g2.startTime) && (g2 = x);
    }
    if (g2)
      return g2.startTime;
    const U2 = /* @__PURE__ */ new Date();
    return U2.setHours(0, 0, 0, 0), U2;
  }
  let s = Ng(n, e.trim(), true);
  if (s.isValid())
    return r && (s = s.add(1, "d")), s.toDate();
  let k = Ng(t2);
  const [M, T] = Sn(n);
  if (!Number.isNaN(M)) {
    const g2 = k.add(M, T);
    g2.isValid() && (k = g2);
  }
  return k.toDate();
}, "getEndDate"), $t = 0, Ft = /* @__PURE__ */ p(function(t2) {
  return t2 === void 0 ? ($t = $t + 1, "task" + $t) : t2;
}, "parseId"), yi = /* @__PURE__ */ p(function(t2, e) {
  let n;
  e.substr(0, 1) === ":" ? n = e.substr(1, e.length) : n = e;
  const r = n.split(","), a = {};
  Ie(r, a, Dn);
  for (let s = 0; s < r.length; s++)
    r[s] = r[s].trim();
  let i = "";
  switch (r.length) {
    case 1:
      a.id = Ft(), a.startTime = t2.endTime, i = r[0];
      break;
    case 2:
      a.id = Ft(), a.startTime = xe(void 0, lt, r[0]), i = r[1];
      break;
    case 3:
      a.id = Ft(r[0]), a.startTime = xe(void 0, lt, r[1]), i = r[2];
      break;
  }
  return i && (a.endTime = Fn(a.startTime, lt, i, Rt), a.manualEndTime = Ng(i, "YYYY-MM-DD", true).isValid(), _n(a, lt, zt, Pt)), a;
}, "compileData"), ki = /* @__PURE__ */ p(function(t2, e) {
  let n;
  e.substr(0, 1) === ":" ? n = e.substr(1, e.length) : n = e;
  const r = n.split(","), a = {};
  Ie(r, a, Dn);
  for (let i = 0; i < r.length; i++)
    r[i] = r[i].trim();
  switch (r.length) {
    case 1:
      a.id = Ft(), a.startTime = {
        type: "prevTaskEnd",
        id: t2
      }, a.endTime = {
        data: r[0]
      };
      break;
    case 2:
      a.id = Ft(), a.startTime = {
        type: "getStartDate",
        startData: r[0]
      }, a.endTime = {
        data: r[1]
      };
      break;
    case 3:
      a.id = Ft(r[0]), a.startTime = {
        type: "getStartDate",
        startData: r[1]
      }, a.endTime = {
        data: r[2]
      };
      break;
  }
  return a;
}, "parseData"), be, Jt, tt = [], Yn = {}, pi = /* @__PURE__ */ p(function(t2, e) {
  const n = {
    section: Et,
    type: Et,
    processed: false,
    manualEndTime: false,
    renderEndTime: null,
    raw: { data: e },
    task: t2,
    classes: []
  }, r = ki(Jt, e);
  n.raw.startTime = r.startTime, n.raw.endTime = r.endTime, n.id = r.id, n.prevTaskId = Jt, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, n.order = Te, Te++;
  const a = tt.push(n);
  Jt = n.id, Yn[n.id] = a - 1;
}, "addTask"), Dt = /* @__PURE__ */ p(function(t2) {
  const e = Yn[t2];
  return tt[e];
}, "findTaskById"), vi = /* @__PURE__ */ p(function(t2, e) {
  const n = {
    section: Et,
    type: Et,
    description: t2,
    task: t2,
    classes: []
  }, r = yi(be, e);
  n.startTime = r.startTime, n.endTime = r.endTime, n.id = r.id, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, be = n, re.push(n);
}, "addTaskOrg"), tn = /* @__PURE__ */ p(function() {
  const t2 = /* @__PURE__ */ p(function(n) {
    const r = tt[n];
    let a = "";
    switch (tt[n].raw.startTime.type) {
      case "prevTaskEnd": {
        const i = Dt(r.prevTaskId);
        r.startTime = i.endTime;
        break;
      }
      case "getStartDate":
        a = xe(void 0, lt, tt[n].raw.startTime.startData), a && (tt[n].startTime = a);
        break;
    }
    return tt[n].startTime && (tt[n].endTime = Fn(
      tt[n].startTime,
      lt,
      tt[n].raw.endTime.data,
      Rt
    ), tt[n].endTime && (tt[n].processed = true, tt[n].manualEndTime = Ng(
      tt[n].raw.endTime.data,
      "YYYY-MM-DD",
      true
    ).isValid(), _n(tt[n], lt, zt, Pt))), tt[n].processed;
  }, "compileTask");
  let e = true;
  for (const [n, r] of tt.entries())
    t2(n), e = e && r.processed;
  return e;
}, "compileTasks"), Ti = /* @__PURE__ */ p(function(t2, e) {
  let n = e;
  dt$1().securityLevel !== "loose" && (n = q0.sanitizeUrl(e)), t2.split(",").forEach(function(r) {
    Dt(r) !== void 0 && (En(r, () => {
      window.open(n, "_self");
    }), Fe.set(r, n));
  }), Un(t2, "clickable");
}, "setLink"), Un = /* @__PURE__ */ p(function(t2, e) {
  t2.split(",").forEach(function(n) {
    let r = Dt(n);
    r !== void 0 && r.classes.push(e);
  });
}, "setClass"), xi = /* @__PURE__ */ p(function(t2, e, n) {
  if (dt$1().securityLevel !== "loose" || e === void 0)
    return;
  let r = [];
  if (typeof n == "string") {
    r = n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    for (let i = 0; i < r.length; i++) {
      let s = r[i].trim();
      s.startsWith('"') && s.endsWith('"') && (s = s.substr(1, s.length - 2)), r[i] = s;
    }
  }
  r.length === 0 && r.push(t2), Dt(t2) !== void 0 && En(t2, () => {
    ge$1.runFunc(e, ...r);
  });
}, "setClickFun"), En = /* @__PURE__ */ p(function(t2, e) {
  Ee.push(
    function() {
      const n = document.querySelector(`[id="${t2}"]`);
      n !== null && n.addEventListener("click", function() {
        e();
      });
    },
    function() {
      const n = document.querySelector(`[id="${t2}-text"]`);
      n !== null && n.addEventListener("click", function() {
        e();
      });
    }
  );
}, "pushFun"), bi = /* @__PURE__ */ p(function(t2, e, n) {
  t2.split(",").forEach(function(r) {
    xi(r, e, n);
  }), Un(t2, "clickable");
}, "setClickEvent"), wi = /* @__PURE__ */ p(function(t2) {
  Ee.forEach(function(e) {
    e(t2);
  });
}, "bindFunctions"), Ci = {
  getConfig: /* @__PURE__ */ p(() => dt$1().gantt, "getConfig"),
  clear: Ra,
  setDateFormat: ja,
  getDateFormat: ri,
  enableInclusiveEndDates: $a,
  endDatesAreInclusive: Ja,
  enableTopAxis: Ka,
  topAxisEnabled: ti,
  setAxisFormat: Ba,
  getAxisFormat: qa,
  setTickInterval: Za,
  getTickInterval: Xa,
  setTodayMarker: Ga,
  getTodayMarker: Qa,
  setAccTitle: Jm,
  getAccTitle: ty,
  setDiagramTitle: iy,
  getDiagramTitle: ay,
  setDisplayMode: ei,
  getDisplayMode: ni,
  setAccDescription: ey,
  getAccDescription: ry,
  addSection: ui,
  getSections: li,
  getTasks: fi,
  addTask: pi,
  findTaskById: Dt,
  addTaskOrg: vi,
  setIncludes: ai,
  getIncludes: ii,
  setExcludes: si,
  getExcludes: oi,
  setClickEvent: bi,
  setLink: Ti,
  getLinks: ci,
  bindFunctions: wi,
  parseDuration: Sn,
  isInvalidDate: Mn,
  setWeekday: hi,
  getWeekday: di,
  setWeekend: mi
};
function Ie(t2, e, n) {
  let r = true;
  for (; r; )
    r = false, n.forEach(function(a) {
      const i = "^\\s*" + a + "\\s*$", s = new RegExp(i);
      t2[0].match(s) && (e[a] = true, t2.shift(1), r = true);
    });
}
p(Ie, "getTaskTags");
var Di = /* @__PURE__ */ p(function() {
  D.debug("Something is calling, setConf, remove the call");
}, "setConf"), en = {
  monday: Ht,
  tuesday: gn,
  wednesday: yn,
  thursday: xt,
  friday: kn,
  saturday: pn,
  sunday: Vt
}, Mi = /* @__PURE__ */ p((t2, e) => {
  let n = [...t2].map(() => -1 / 0), r = [...t2].sort((i, s) => i.startTime - s.startTime || i.order - s.order), a = 0;
  for (const i of r)
    for (let s = 0; s < n.length; s++)
      if (i.startTime >= n[s]) {
        n[s] = i.endTime, i.order = s + e, s > a && (a = s);
        break;
      }
  return a;
}, "getMaxIntersections"), ht, _i = /* @__PURE__ */ p(function(t$12, e, n, r) {
  const a = dt$1().gantt, i = dt$1().securityLevel;
  let s;
  i === "sandbox" && (s = Li("#i" + e));
  const k = i === "sandbox" ? Li(s.nodes()[0].contentDocument.body) : Li("body"), M = i === "sandbox" ? s.nodes()[0].contentDocument : document, T = M.getElementById(e);
  ht = T.parentElement.offsetWidth, ht === void 0 && (ht = 1200), a.useWidth !== void 0 && (ht = a.useWidth);
  const g2 = r.db.getTasks();
  let U2 = [];
  for (const b of g2)
    U2.push(b.type);
  U2 = H(U2);
  const C = {};
  let x = 2 * a.topPadding;
  if (r.db.getDisplayMode() === "compact" || a.displayMode === "compact") {
    const b = {};
    for (const _2 of g2)
      b[_2.section] === void 0 ? b[_2.section] = [_2] : b[_2.section].push(_2);
    let F = 0;
    for (const _2 of Object.keys(b)) {
      const S = Mi(b[_2], F) + 1;
      F += S, x += S * (a.barHeight + a.barGap), C[_2] = S;
    }
  } else {
    x += g2.length * (a.barHeight + a.barGap);
    for (const b of U2)
      C[b] = g2.filter((F) => F.type === b).length;
  }
  T.setAttribute("viewBox", "0 0 " + ht + " " + x);
  const X = k.select(`[id="${e}"]`), O = Fa().domain([
    t(g2, function(b) {
      return b.startTime;
    }),
    l(g2, function(b) {
      return b.endTime;
    })
  ]).rangeRound([0, ht - a.leftPadding - a.rightPadding]);
  function D$1(b, F) {
    const _2 = b.startTime, S = F.startTime;
    let p2 = 0;
    return _2 > S ? p2 = 1 : _2 < S && (p2 = -1), p2;
  }
  p(D$1, "taskCompare"), g2.sort(D$1), I(g2, ht, x), Xc(X, x, ht, a.useMaxWidth), X.append("text").text(r.db.getDiagramTitle()).attr("x", ht / 2).attr("y", a.titleTopMargin).attr("class", "titleText");
  function I(b, F, _2) {
    const S = a.barHeight, p2 = S + a.barGap, Y = a.topPadding, u = a.leftPadding, f = Zn().domain([0, U2.length]).range(["#00B9FA", "#F95002"]).interpolate(dr);
    W(
      p2,
      Y,
      u,
      F,
      _2,
      b,
      r.db.getExcludes(),
      r.db.getIncludes()
    ), q(u, Y, F, _2), V(b, p2, Y, u, S, f, F), j(p2, Y), w(u, Y, F, _2);
  }
  p(I, "makeGantt");
  function V(b, F, _2, S, p2, Y, u) {
    const y = [...new Set(b.map((d) => d.order))].map((d) => b.find((o) => o.order === d));
    X.append("g").selectAll("rect").data(y).enter().append("rect").attr("x", 0).attr("y", function(d, o) {
      return o = d.order, o * F + _2 - 2;
    }).attr("width", function() {
      return u - a.rightPadding / 2;
    }).attr("height", F).attr("class", function(d) {
      for (const [o, z] of U2.entries())
        if (d.type === z)
          return "section section" + o % a.numberSectionStyles;
      return "section section0";
    });
    const m = X.append("g").selectAll("rect").data(b).enter(), E = r.db.getLinks();
    if (m.append("rect").attr("id", function(d) {
      return d.id;
    }).attr("rx", 3).attr("ry", 3).attr("x", function(d) {
      return d.milestone ? O(d.startTime) + S + 0.5 * (O(d.endTime) - O(d.startTime)) - 0.5 * p2 : O(d.startTime) + S;
    }).attr("y", function(d, o) {
      return o = d.order, o * F + _2;
    }).attr("width", function(d) {
      return d.milestone ? p2 : O(d.renderEndTime || d.endTime) - O(d.startTime);
    }).attr("height", p2).attr("transform-origin", function(d, o) {
      return o = d.order, (O(d.startTime) + S + 0.5 * (O(d.endTime) - O(d.startTime))).toString() + "px " + (o * F + _2 + 0.5 * p2).toString() + "px";
    }).attr("class", function(d) {
      const o = "task";
      let z = "";
      d.classes.length > 0 && (z = d.classes.join(" "));
      let P = 0;
      for (const [K, G] of U2.entries())
        d.type === G && (P = K % a.numberSectionStyles);
      let R = "";
      return d.active ? d.crit ? R += " activeCrit" : R = " active" : d.done ? d.crit ? R = " doneCrit" : R = " done" : d.crit && (R += " crit"), R.length === 0 && (R = " task"), d.milestone && (R = " milestone " + R), R += P, R += " " + z, o + R;
    }), m.append("text").attr("id", function(d) {
      return d.id + "-text";
    }).text(function(d) {
      return d.task;
    }).attr("font-size", a.fontSize).attr("x", function(d) {
      let o = O(d.startTime), z = O(d.renderEndTime || d.endTime);
      d.milestone && (o += 0.5 * (O(d.endTime) - O(d.startTime)) - 0.5 * p2), d.milestone && (z = o + p2);
      const P = this.getBBox().width;
      return P > z - o ? z + P + 1.5 * a.leftPadding > u ? o + S - 5 : z + S + 5 : (z - o) / 2 + o + S;
    }).attr("y", function(d, o) {
      return o = d.order, o * F + a.barHeight / 2 + (a.fontSize / 2 - 2) + _2;
    }).attr("text-height", p2).attr("class", function(d) {
      const o = O(d.startTime);
      let z = O(d.endTime);
      d.milestone && (z = o + p2);
      const P = this.getBBox().width;
      let R = "";
      d.classes.length > 0 && (R = d.classes.join(" "));
      let K = 0;
      for (const [$, it] of U2.entries())
        d.type === it && (K = $ % a.numberSectionStyles);
      let G = "";
      return d.active && (d.crit ? G = "activeCritText" + K : G = "activeText" + K), d.done ? d.crit ? G = G + " doneCritText" + K : G = G + " doneText" + K : d.crit && (G = G + " critText" + K), d.milestone && (G += " milestoneText"), P > z - o ? z + P + 1.5 * a.leftPadding > u ? R + " taskTextOutsideLeft taskTextOutside" + K + " " + G : R + " taskTextOutsideRight taskTextOutside" + K + " " + G + " width-" + P : R + " taskText taskText" + K + " " + G + " width-" + P;
    }), dt$1().securityLevel === "sandbox") {
      let d;
      d = Li("#i" + e);
      const o = d.nodes()[0].contentDocument;
      m.filter(function(z) {
        return E.has(z.id);
      }).each(function(z) {
        var P = o.querySelector("#" + z.id), R = o.querySelector("#" + z.id + "-text");
        const K = P.parentNode;
        var G = o.createElement("a");
        G.setAttribute("xlink:href", E.get(z.id)), G.setAttribute("target", "_top"), K.appendChild(G), G.appendChild(P), G.appendChild(R);
      });
    }
  }
  p(V, "drawRects");
  function W(b, F, _2, S, p2, Y, u, f) {
    if (u.length === 0 && f.length === 0)
      return;
    let y, m;
    for (const { startTime: P, endTime: R } of Y)
      (y === void 0 || P < y) && (y = P), (m === void 0 || R > m) && (m = R);
    if (!y || !m)
      return;
    if (Ng(m).diff(Ng(y), "year") > 5) {
      D.warn(
        "The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days."
      );
      return;
    }
    const E = r.db.getDateFormat(), c = [];
    let d = null, o = Ng(y);
    for (; o.valueOf() <= m; )
      r.db.isInvalidDate(o, E, u, f) ? d ? d.end = o : d = {
        start: o,
        end: o
      } : d && (c.push(d), d = null), o = o.add(1, "d");
    X.append("g").selectAll("rect").data(c).enter().append("rect").attr("id", function(P) {
      return "exclude-" + P.start.format("YYYY-MM-DD");
    }).attr("x", function(P) {
      return O(P.start) + _2;
    }).attr("y", a.gridLineStartPadding).attr("width", function(P) {
      const R = P.end.add(1, "day");
      return O(R) - O(P.start);
    }).attr("height", p2 - F - a.gridLineStartPadding).attr("transform-origin", function(P, R) {
      return (O(P.start) + _2 + 0.5 * (O(P.end) - O(P.start))).toString() + "px " + (R * b + 0.5 * p2).toString() + "px";
    }).attr("class", "exclude-range");
  }
  p(W, "drawExcludeDays");
  function q(b, F, _2, S) {
    let p2 = sr(O).tickSize(-S + F + a.gridLineStartPadding).tickFormat(ne(r.db.getAxisFormat() || a.axisFormat || "%Y-%m-%d"));
    const u = /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(
      r.db.getTickInterval() || a.tickInterval
    );
    if (u !== null) {
      const f = u[1], y = u[2], m = r.db.getWeekday() || a.weekday;
      switch (y) {
        case "millisecond":
          p2.ticks(Yt.every(f));
          break;
        case "second":
          p2.ticks(vt.every(f));
          break;
        case "minute":
          p2.ticks(Wt.every(f));
          break;
        case "hour":
          p2.ticks(Ot.every(f));
          break;
        case "day":
          p2.ticks(Tt.every(f));
          break;
        case "week":
          p2.ticks(en[m].every(f));
          break;
        case "month":
          p2.ticks(Nt.every(f));
          break;
      }
    }
    if (X.append("g").attr("class", "grid").attr("transform", "translate(" + b + ", " + (S - 50) + ")").call(p2).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), r.db.topAxisEnabled() || a.topAxis) {
      let f = ir(O).tickSize(-S + F + a.gridLineStartPadding).tickFormat(ne(r.db.getAxisFormat() || a.axisFormat || "%Y-%m-%d"));
      if (u !== null) {
        const y = u[1], m = u[2], E = r.db.getWeekday() || a.weekday;
        switch (m) {
          case "millisecond":
            f.ticks(Yt.every(y));
            break;
          case "second":
            f.ticks(vt.every(y));
            break;
          case "minute":
            f.ticks(Wt.every(y));
            break;
          case "hour":
            f.ticks(Ot.every(y));
            break;
          case "day":
            f.ticks(Tt.every(y));
            break;
          case "week":
            f.ticks(en[E].every(y));
            break;
          case "month":
            f.ticks(Nt.every(y));
            break;
        }
      }
      X.append("g").attr("class", "grid").attr("transform", "translate(" + b + ", " + F + ")").call(f).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
    }
  }
  p(q, "makeGrid");
  function j(b, F) {
    let _2 = 0;
    const S = Object.keys(C).map((p2) => [p2, C[p2]]);
    X.append("g").selectAll("text").data(S).enter().append(function(p2) {
      const Y = p2[0].split(Hr$1.lineBreakRegex), u = -(Y.length - 1) / 2, f = M.createElementNS("http://www.w3.org/2000/svg", "text");
      f.setAttribute("dy", u + "em");
      for (const [y, m] of Y.entries()) {
        const E = M.createElementNS("http://www.w3.org/2000/svg", "tspan");
        E.setAttribute("alignment-baseline", "central"), E.setAttribute("x", "10"), y > 0 && E.setAttribute("dy", "1em"), E.textContent = m, f.appendChild(E);
      }
      return f;
    }).attr("x", 10).attr("y", function(p2, Y) {
      if (Y > 0)
        for (let u = 0; u < Y; u++)
          return _2 += S[Y - 1][1], p2[1] * b / 2 + _2 * b + F;
      else
        return p2[1] * b / 2 + F;
    }).attr("font-size", a.sectionFontSize).attr("class", function(p2) {
      for (const [Y, u] of U2.entries())
        if (p2[0] === u)
          return "sectionTitle sectionTitle" + Y % a.numberSectionStyles;
      return "sectionTitle";
    });
  }
  p(j, "vertLabels");
  function w(b, F, _2, S) {
    const p2 = r.db.getTodayMarker();
    if (p2 === "off")
      return;
    const Y = X.append("g").attr("class", "today"), u = /* @__PURE__ */ new Date(), f = Y.append("line");
    f.attr("x1", O(u) + b).attr("x2", O(u) + b).attr("y1", a.titleTopMargin).attr("y2", S - a.titleTopMargin).attr("class", "today"), p2 !== "" && f.attr("style", p2.replace(/,/g, ";"));
  }
  p(w, "drawToday");
  function H(b) {
    const F = {}, _2 = [];
    for (let S = 0, p2 = b.length; S < p2; ++S)
      Object.prototype.hasOwnProperty.call(F, b[S]) || (F[b[S]] = true, _2.push(b[S]));
    return _2;
  }
  p(H, "checkUnique");
}, "draw"), Si = {
  setConf: Di,
  draw: _i
}, Fi = /* @__PURE__ */ p((t2) => `
  .mermaid-main-font {
        font-family: ${t2.fontFamily};
  }

  .exclude-range {
    fill: ${t2.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t2.sectionBkgColor};
  }

  .section2 {
    fill: ${t2.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t2.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t2.titleColor};
  }

  .sectionTitle1 {
    fill: ${t2.titleColor};
  }

  .sectionTitle2 {
    fill: ${t2.titleColor};
  }

  .sectionTitle3 {
    fill: ${t2.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t2.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t2.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t2.fontFamily};
    fill: ${t2.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t2.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t2.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t2.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t2.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t2.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t2.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t2.taskBkgColor};
    stroke: ${t2.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t2.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t2.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t2.activeTaskBkgColor};
    stroke: ${t2.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t2.doneTaskBorderColor};
    fill: ${t2.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t2.titleColor || t2.textColor};
    font-family: ${t2.fontFamily};
  }
`, "getStyles"), Yi = Fi, Oi = {
  parser: za,
  db: Ci,
  renderer: Si,
  styles: Yi
};
export {
  Oi as diagram
};
