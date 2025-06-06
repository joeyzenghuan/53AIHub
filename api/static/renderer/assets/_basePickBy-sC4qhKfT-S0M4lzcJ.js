import { O as Ot, Z as Z$1, L as Ln, b as bn, y as yn, A as An, M, t as tt, U as U$1, c as $, J as Jn } from "./_baseUniq-Bc4pAwPa-4Vti29BH.js";
import { aw as k1, aG as w1, aH as cd, aI as tn$1, aJ as nn$1, aK as $a, aF as or, aM as ld, aN as Jb, aL as ud } from "./mermaid-j5R1o_wi-dCQhMK9F.js";
var G = /\s/;
function H(n) {
  for (var r = n.length; r-- && G.test(n.charAt(r)); )
    ;
  return r;
}
var L = /^\s+/;
function S(n) {
  return n && n.slice(0, H(n) + 1).replace(L, "");
}
var o = NaN, K = /^[-+]0x[0-9a-f]+$/i, R = /^0b[01]+$/i, q = /^0o[0-7]+$/i, z = parseInt;
function C(n) {
  if (typeof n == "number")
    return n;
  if (U$1(n))
    return o;
  if (or(n)) {
    var r = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = or(r) ? r + "" : r;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = S(n);
  var t = R.test(n);
  return t || q.test(n) ? z(n.slice(2), t ? 2 : 8) : K.test(n) ? o : +n;
}
var J = 1 / 0, W = 17976931348623157e292;
function X(n) {
  if (!n)
    return n === 0 ? n : 0;
  if (n = C(n), n === J || n === -1 / 0) {
    var r = n < 0 ? -1 : 1;
    return r * W;
  }
  return n === n ? n : 0;
}
function Y(n) {
  var r = X(n), t = r % 1;
  return r === r ? t ? r - t : r : 0;
}
function fn(n) {
  var r = n == null ? 0 : n.length;
  return r ? Ot(n) : [];
}
var l = Object.prototype, D = l.hasOwnProperty, dn = k1(function(n, r) {
  n = Object(n);
  var t = -1, e = r.length, a = e > 2 ? r[2] : void 0;
  for (a && w1(r[0], r[1], a) && (e = 1); ++t < e; )
    for (var f = r[t], i = cd(f), s = -1, d = i.length; ++s < d; ) {
      var u = i[s], h = n[u];
      (h === void 0 || tn$1(h, l[u]) && !D.call(n, u)) && (n[u] = f[u]);
    }
  return n;
});
function un(n) {
  var r = n == null ? 0 : n.length;
  return r ? n[r - 1] : void 0;
}
function Q(n) {
  return function(r, t, e) {
    var a = Object(r);
    if (!nn$1(r)) {
      var f = Ln(t);
      r = $(r), t = function(s) {
        return f(a[s], s, a);
      };
    }
    var i = n(r, t, e);
    return i > -1 ? a[f ? r[i] : i] : void 0;
  };
}
var U = Math.max;
function Z(n, r, t) {
  var e = n == null ? 0 : n.length;
  if (!e)
    return -1;
  var a = t == null ? 0 : Y(t);
  return a < 0 && (a = U(e + a, 0)), Jn(n, Ln(r), a);
}
var hn = Q(Z);
function V(n, r) {
  var t = -1, e = nn$1(n) ? Array(n.length) : [];
  return Z$1(n, function(a, f, i) {
    e[++t] = r(a, f, i);
  }), e;
}
function gn(n, r) {
  var t = $a(n) ? bn : V;
  return t(n, Ln(r));
}
var j = Object.prototype, k = j.hasOwnProperty;
function nn(n, r) {
  return n != null && k.call(n, r);
}
function mn(n, r) {
  return n != null && tt(n, r, nn);
}
function rn(n, r) {
  return n < r;
}
function tn(n, r, t) {
  for (var e = -1, a = n.length; ++e < a; ) {
    var f = n[e], i = r(f);
    if (i != null && (s === void 0 ? i === i && !U$1(i) : t(i, s)))
      var s = i, d = f;
  }
  return d;
}
function on(n) {
  return n && n.length ? tn(n, ud, rn) : void 0;
}
function an(n, r, t, e) {
  if (!or(n))
    return n;
  r = An(r, n);
  for (var a = -1, f = r.length, i = f - 1, s = n; s != null && ++a < f; ) {
    var d = M(r[a]), u = t;
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return n;
    if (a != i) {
      var h = s[d];
      u = void 0, u === void 0 && (u = or(h) ? h : ld(r[a + 1]) ? [] : {});
    }
    Jb(s, d, u), s = s[d];
  }
  return n;
}
function vn(n, r, t) {
  for (var e = -1, a = r.length, f = {}; ++e < a; ) {
    var i = r[e], s = yn(n, i);
    t(s, i) && an(f, An(i, n), s);
  }
  return f;
}
export {
  V,
  X,
  Y,
  dn as d,
  fn as f,
  gn as g,
  hn as h,
  mn as m,
  on as o,
  rn as r,
  tn as t,
  un as u,
  vn as v
};
