import { O as b, Z as m, L as s, b as $, y as d, A as h, M as j, t as A, U as g, $ as J, J as L } from "./_baseUniq-DmAMCrPp-6d586603.js";
import { aw as U, aG as _, aH as w, aI as x, aJ as y, aK as M, aF as c, aM as N, aN as Z, aL as q } from "./mermaid-CI9Xz-tl-06ae91ae.js";
var G = /\s/;
function H(r) {
  for (var t = r.length; t-- && G.test(r.charAt(t)); )
    ;
  return t;
}
var I = /^\s+/;
function K(r) {
  return r && r.slice(0, H(r) + 1).replace(I, "");
}
var p = NaN, P = /^[-+]0x[0-9a-f]+$/i, W = /^0b[01]+$/i, k = /^0o[0-7]+$/i, z = parseInt;
function C(r) {
  if (typeof r == "number")
    return r;
  if (g(r))
    return p;
  if (c(r)) {
    var t = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = c(t) ? t + "" : t;
  }
  if (typeof r != "string")
    return r === 0 ? r : +r;
  r = K(r);
  var a = W.test(r);
  return a || k.test(r) ? z(r.slice(2), a ? 2 : 8) : P.test(r) ? p : +r;
}
var D = 1 / 0, F = 17976931348623157e292;
function Q(r) {
  if (!r)
    return r === 0 ? r : 0;
  if (r = C(r), r === D || r === -1 / 0) {
    var t = r < 0 ? -1 : 1;
    return t * F;
  }
  return r === r ? r : 0;
}
function R(r) {
  var t = Q(r), a = t % 1;
  return t === t ? a ? t - a : t : 0;
}
function ur(r) {
  var t = r == null ? 0 : r.length;
  return t ? b(r) : [];
}
var O = Object.prototype, S = O.hasOwnProperty, fr = U(function(r, t) {
  r = Object(r);
  var a = -1, o = t.length, e = o > 2 ? t[2] : void 0;
  for (e && _(t[0], t[1], e) && (o = 1); ++a < o; )
    for (var f = t[a], n = w(f), u = -1, v = n.length; ++u < v; ) {
      var i = n[u], l = r[i];
      (l === void 0 || x(l, O[i]) && !S.call(r, i)) && (r[i] = f[i]);
    }
  return r;
});
function vr(r) {
  var t = r == null ? 0 : r.length;
  return t ? r[t - 1] : void 0;
}
function V(r) {
  return function(t, a, o) {
    var e = Object(t);
    if (!y(t)) {
      var f = s(a);
      t = J(t), a = function(u) {
        return f(e[u], u, e);
      };
    }
    var n = r(t, a, o);
    return n > -1 ? e[f ? t[n] : n] : void 0;
  };
}
var X = Math.max;
function Y(r, t, a) {
  var o = r == null ? 0 : r.length;
  if (!o)
    return -1;
  var e = a == null ? 0 : R(a);
  return e < 0 && (e = X(o + e, 0)), L(r, s(t), e);
}
var ir = V(Y);
function B(r, t) {
  var a = -1, o = y(r) ? Array(r.length) : [];
  return m(r, function(e, f, n) {
    o[++a] = t(e, f, n);
  }), o;
}
function lr(r, t) {
  var a = M(r) ? $ : B;
  return a(r, s(t));
}
var E = Object.prototype, T = E.hasOwnProperty;
function rr(r, t) {
  return r != null && T.call(r, t);
}
function cr(r, t) {
  return r != null && A(r, t, rr);
}
function tr(r, t) {
  return r < t;
}
function ar(r, t, a) {
  for (var o = -1, e = r.length; ++o < e; ) {
    var f = r[o], n = t(f);
    if (n != null && (u === void 0 ? n === n && !g(n) : a(n, u)))
      var u = n, v = f;
  }
  return v;
}
function sr(r) {
  return r && r.length ? ar(r, q, tr) : void 0;
}
function er(r, t, a, o) {
  if (!c(r))
    return r;
  t = h(t, r);
  for (var e = -1, f = t.length, n = f - 1, u = r; u != null && ++e < f; ) {
    var v = j(t[e]), i = a;
    if (v === "__proto__" || v === "constructor" || v === "prototype")
      return r;
    if (e != n) {
      var l = u[v];
      i = void 0, i === void 0 && (i = c(l) ? l : N(t[e + 1]) ? [] : {});
    }
    Z(u, v, i), u = u[v];
  }
  return r;
}
function pr(r, t, a) {
  for (var o = -1, e = t.length, f = {}; ++o < e; ) {
    var n = t[o], u = d(r, n);
    a(u, n) && er(f, h(n, r), u);
  }
  return f;
}
export {
  B as V,
  Q as X,
  R as Y,
  fr as d,
  ur as f,
  lr as g,
  ir as h,
  cr as m,
  sr as o,
  tr as r,
  ar as t,
  vr as u,
  pr as v
};
