import { X as Xi, H as Hi } from "./helper-7WMIPux3-FiO_G2IV.js";
import { a1 as Tl, a2 as Sl, a3 as H_, $ as P_, a0 as W_, a5 as z_, a6 as R_, Y as to, a4 as q_, a7 as I_, a8 as Y_, aa as j_, a9 as N_ } from "./mermaid-j5R1o_wi-dCQhMK9F.js";
function cn(l) {
  return l.innerRadius;
}
function yn(l) {
  return l.outerRadius;
}
function gn(l) {
  return l.startAngle;
}
function mn(l) {
  return l.endAngle;
}
function pn(l) {
  return l && l.padAngle;
}
function dn(l, h, I, D, v, A, z, a) {
  var O = I - l, i = D - h, n = z - v, m = a - A, r = m * O - n * i;
  if (!(r * r < Sl))
    return r = (n * (h - A) - m * (l - v)) / r, [l + r * O, h + r * i];
}
function U(l, h, I, D, v, A, z) {
  var a = l - I, O = h - D, i = (z ? A : -A) / q_(a * a + O * O), n = i * O, m = -i * a, r = l + n, s = h + m, f = I + n, c = D + m, B = (r + f) / 2, o = (s + c) / 2, p = f - r, g = c - s, R = p * p + g * g, T = v - A, P = r * c - f * s, S = (g < 0 ? -1 : 1) * q_(N_(0, T * T * R - P * P)), Y = (P * g - p * S) / R, $ = (-P * p - g * S) / R, w = (P * g + p * S) / R, d = (-P * p + g * S) / R, x = Y - B, e = $ - o, u = w - B, C = d - o;
  return x * x + e * e > u * u + C * C && (Y = w, $ = d), {
    cx: Y,
    cy: $,
    x01: -n,
    y01: -m,
    x11: Y * (v / T - 1),
    y11: $ * (v / T - 1)
  };
}
function vn() {
  var l = cn, h = yn, I = Hi(0), D = null, v = gn, A = mn, z = pn, a = null, O = Xi(i);
  function i() {
    var n, m, r = +l.apply(this, arguments), s = +h.apply(this, arguments), f = v.apply(this, arguments) - Tl, c = A.apply(this, arguments) - Tl, B = R_(c - f), o = c > f;
    if (a || (a = n = O()), s < r && (m = s, s = r, r = m), !(s > Sl))
      a.moveTo(0, 0);
    else if (B > H_ - Sl)
      a.moveTo(s * P_(f), s * W_(f)), a.arc(0, 0, s, f, c, !o), r > Sl && (a.moveTo(r * P_(c), r * W_(c)), a.arc(0, 0, r, c, f, o));
    else {
      var p = f, g = c, R = f, T = c, P = B, S = B, Y = z.apply(this, arguments) / 2, $ = Y > Sl && (D ? +D.apply(this, arguments) : q_(r * r + s * s)), w = z_(R_(s - r) / 2, +I.apply(this, arguments)), d = w, x = w, e, u;
      if ($ > Sl) {
        var C = Y_($ / r * W_(Y)), K = Y_($ / s * W_(Y));
        (P -= C * 2) > Sl ? (C *= o ? 1 : -1, R += C, T -= C) : (P = 0, R = T = (f + c) / 2), (S -= K * 2) > Sl ? (K *= o ? 1 : -1, p += K, g -= K) : (S = 0, p = g = (f + c) / 2);
      }
      var G = s * P_(p), H = s * W_(p), L = r * P_(T), M = r * W_(T);
      if (w > Sl) {
        var N = s * P_(g), Q = s * W_(g), V = r * P_(R), W = r * W_(R), E;
        if (B < to)
          if (E = dn(G, H, V, W, N, Q, L, M)) {
            var X = G - E[0], Z = H - E[1], k = N - E[0], b = Q - E[1], nn = 1 / W_(j_((X * k + Z * b) / (q_(X * X + Z * Z) * q_(k * k + b * b))) / 2), en = q_(E[0] * E[0] + E[1] * E[1]);
            d = z_(w, (r - en) / (nn - 1)), x = z_(w, (s - en) / (nn + 1));
          } else
            d = x = 0;
      }
      S > Sl ? x > Sl ? (e = U(V, W, G, H, s, x, o), u = U(N, Q, L, M, s, x, o), a.moveTo(e.cx + e.x01, e.cy + e.y01), x < w ? a.arc(e.cx, e.cy, x, I_(e.y01, e.x01), I_(u.y01, u.x01), !o) : (a.arc(e.cx, e.cy, x, I_(e.y01, e.x01), I_(e.y11, e.x11), !o), a.arc(0, 0, s, I_(e.cy + e.y11, e.cx + e.x11), I_(u.cy + u.y11, u.cx + u.x11), !o), a.arc(u.cx, u.cy, x, I_(u.y11, u.x11), I_(u.y01, u.x01), !o))) : (a.moveTo(G, H), a.arc(0, 0, s, p, g, !o)) : a.moveTo(G, H), !(r > Sl) || !(P > Sl) ? a.lineTo(L, M) : d > Sl ? (e = U(L, M, N, Q, r, -d, o), u = U(G, H, V, W, r, -d, o), a.lineTo(e.cx + e.x01, e.cy + e.y01), d < w ? a.arc(e.cx, e.cy, d, I_(e.y01, e.x01), I_(u.y01, u.x01), !o) : (a.arc(e.cx, e.cy, d, I_(e.y01, e.x01), I_(e.y11, e.x11), !o), a.arc(0, 0, r, I_(e.cy + e.y11, e.cx + e.x11), I_(u.cy + u.y11, u.cx + u.x11), o), a.arc(u.cx, u.cy, d, I_(u.y11, u.x11), I_(u.y01, u.x01), !o))) : a.arc(0, 0, r, T, R, o);
    }
    if (a.closePath(), n)
      return a = null, n + "" || null;
  }
  return i.centroid = function() {
    var n = (+l.apply(this, arguments) + +h.apply(this, arguments)) / 2, m = (+v.apply(this, arguments) + +A.apply(this, arguments)) / 2 - to / 2;
    return [P_(m) * n, W_(m) * n];
  }, i.innerRadius = function(n) {
    return arguments.length ? (l = typeof n == "function" ? n : Hi(+n), i) : l;
  }, i.outerRadius = function(n) {
    return arguments.length ? (h = typeof n == "function" ? n : Hi(+n), i) : h;
  }, i.cornerRadius = function(n) {
    return arguments.length ? (I = typeof n == "function" ? n : Hi(+n), i) : I;
  }, i.padRadius = function(n) {
    return arguments.length ? (D = n == null ? null : typeof n == "function" ? n : Hi(+n), i) : D;
  }, i.startAngle = function(n) {
    return arguments.length ? (v = typeof n == "function" ? n : Hi(+n), i) : v;
  }, i.endAngle = function(n) {
    return arguments.length ? (A = typeof n == "function" ? n : Hi(+n), i) : A;
  }, i.padAngle = function(n) {
    return arguments.length ? (z = typeof n == "function" ? n : Hi(+n), i) : z;
  }, i.context = function(n) {
    return arguments.length ? (a = n ?? null, i) : a;
  }, i;
}
export {
  vn as v
};
