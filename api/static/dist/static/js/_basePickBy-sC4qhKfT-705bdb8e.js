import { O as b, Z as $, L as s, b as d, y as m, A as h, M as j, t as J, U as g, $ as w, J as A } from "./_baseUniq-Bc4pAwPa-445a590c.js";
import { aw as L, aG as _, aH as x, aI as M, aJ as y, aK as N, aF as c, aM as U, aN as Z, aL as k } from "./mermaid-j5R1o_wi-7b9be563.js";
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
var p = NaN, P = /^[-+]0x[0-9a-f]+$/i, q = /^0b[01]+$/i, z = /^0o[0-7]+$/i, C = parseInt;
function D(r) {
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
  var a = q.test(r);
  return a || z.test(r) ? C(r.slice(2), a ? 2 : 8) : P.test(r) ? p : +r;
}
var F = 1 / 0, Q = 17976931348623157e292;
function R(r) {
  if (!r)
    return r === 0 ? r : 0;
  if (r = D(r), r === F || r === -1 / 0) {
    var t = r < 0 ? -1 : 1;
    return t * Q;
  }
  return r === r ? r : 0;
}
function S(r) {
  var t = R(r), a = t % 1;
  return t === t ? a ? t - a : t : 0;
}
function ur(r) {
  var t = r == null ? 0 : r.length;
  return t ? b(r) : [];
}
var O = Object.prototype, V = O.hasOwnProperty, fr = L(function(r, t) {
  r = Object(r);
  var a = -1, o = t.length, e = o > 2 ? t[2] : void 0;
  for (e && _(t[0], t[1], e) && (o = 1); ++a < o; )
    for (var f = t[a], n = x(f), u = -1, v = n.length; ++u < v; ) {
      var i = n[u], l = r[i];
      (l === void 0 || M(l, O[i]) && !V.call(r, i)) && (r[i] = f[i]);
    }
  return r;
});
function vr(r) {
  var t = r == null ? 0 : r.length;
  return t ? r[t - 1] : void 0;
}
function W(r) {
  return function(t, a, o) {
    var e = Object(t);
    if (!y(t)) {
      var f = s(a);
      t = w(t), a = function(u) {
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
  var e = a == null ? 0 : S(a);
  return e < 0 && (e = X(o + e, 0)), A(r, s(t), e);
}
var ir = W(Y);
function B(r, t) {
  var a = -1, o = y(r) ? Array(r.length) : [];
  return $(r, function(e, f, n) {
    o[++a] = t(e, f, n);
  }), o;
}
function lr(r, t) {
  var a = N(r) ? d : B;
  return a(r, s(t));
}
var E = Object.prototype, T = E.hasOwnProperty;
function rr(r, t) {
  return r != null && T.call(r, t);
}
function cr(r, t) {
  return r != null && J(r, t, rr);
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
  return r && r.length ? ar(r, k, tr) : void 0;
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
      i = void 0, i === void 0 && (i = c(l) ? l : U(t[e + 1]) ? [] : {});
    }
    Z(u, v, i), u = u[v];
  }
  return r;
}
function pr(r, t, a) {
  for (var o = -1, e = t.length, f = {}; ++o < e; ) {
    var n = t[o], u = m(r, n);
    a(u, n) && er(f, h(n, r), u);
  }
  return f;
}
export {
  B as V,
  R as X,
  S as Y,
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
