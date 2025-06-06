import { X as sn, H as D } from "./helper-7WMIPux3-736d9956.js";
import { a1 as an, a2 as l, a3 as un, $ as X, a0 as z, a5 as E, a6 as rn, Y as cn, a4 as b, a7 as y, a8 as on, aa as yn, a9 as en } from "./mermaid-j5R1o_wi-141fd499.js";
function fn(s) {
  return s.innerRadius;
}
function ln(s) {
  return s.outerRadius;
}
function mn(s) {
  return s.startAngle;
}
function pn(s) {
  return s.endAngle;
}
function gn(s) {
  return s && s.padAngle;
}
function xn(s, v, q, B, _, d, F, a) {
  var I = q - s, i = B - v, n = F - _, p = a - d, r = p * I - n * i;
  if (!(r * r < l))
    return r = (n * (v - d) - p * (s - _)) / r, [s + r * I, v + r * i];
}
function Z(s, v, q, B, _, d, F) {
  var a = s - q, I = v - B, i = (F ? d : -d) / b(a * a + I * I), n = i * I, p = -i * a, r = s + n, o = v + p, e = q + n, f = B + p, J = (r + e) / 2, u = (o + f) / 2, g = e - r, m = f - o, T = g * g + m * m, A = _ - d, R = r * f - e * o, P = (m < 0 ? -1 : 1) * b(en(0, A * A * T - R * R)), U = (R * m - g * P) / T, Y = (-R * g - m * P) / T, O = (R * m + g * P) / T, x = (-R * g + m * P) / T, h = U - J, t = Y - u, c = O - J, S = x - u;
  return h * h + t * t > c * c + S * S && (U = O, Y = x), { cx: U, cy: Y, x01: -n, y01: -p, x11: U * (_ / A - 1), y11: Y * (_ / A - 1) };
}
function _n() {
  var s = fn, v = ln, q = D(0), B = null, _ = mn, d = pn, F = gn, a = null, I = sn(i);
  function i() {
    var n, p, r = +s.apply(this, arguments), o = +v.apply(this, arguments), e = _.apply(this, arguments) - an, f = d.apply(this, arguments) - an, J = rn(f - e), u = f > e;
    if (a || (a = n = I()), o < r && (p = o, o = r, r = p), !(o > l))
      a.moveTo(0, 0);
    else if (J > un - l)
      a.moveTo(o * X(e), o * z(e)), a.arc(0, 0, o, e, f, !u), r > l && (a.moveTo(r * X(f), r * z(f)), a.arc(0, 0, r, f, e, u));
    else {
      var g = e, m = f, T = e, A = f, R = J, P = J, U = F.apply(this, arguments) / 2, Y = U > l && (B ? +B.apply(this, arguments) : b(r * r + o * o)), O = E(rn(o - r) / 2, +q.apply(this, arguments)), x = O, h = O, t, c;
      if (Y > l) {
        var S = on(Y / r * z(U)), k = on(Y / o * z(U));
        (R -= S * 2) > l ? (S *= u ? 1 : -1, T += S, A -= S) : (R = 0, T = A = (e + f) / 2), (P -= k * 2) > l ? (k *= u ? 1 : -1, g += k, m -= k) : (P = 0, g = m = (e + f) / 2);
      }
      var $ = o * X(g), W = o * z(g), C = r * X(A), H = r * z(A);
      if (O > l) {
        var N = o * X(m), V = o * z(m), K = r * X(T), L = r * z(T), j;
        if (J < cn)
          if (j = xn($, W, K, L, N, V, C, H)) {
            var M = $ - j[0], Q = W - j[1], w = N - j[0], G = V - j[1], nn = 1 / z(yn((M * w + Q * G) / (b(M * M + Q * Q) * b(w * w + G * G))) / 2), tn = b(j[0] * j[0] + j[1] * j[1]);
            x = E(O, (r - tn) / (nn - 1)), h = E(O, (o - tn) / (nn + 1));
          } else
            x = h = 0;
      }
      P > l ? h > l ? (t = Z(K, L, $, W, o, h, u), c = Z(N, V, C, H, o, h, u), a.moveTo(t.cx + t.x01, t.cy + t.y01), h < O ? a.arc(t.cx, t.cy, h, y(t.y01, t.x01), y(c.y01, c.x01), !u) : (a.arc(t.cx, t.cy, h, y(t.y01, t.x01), y(t.y11, t.x11), !u), a.arc(0, 0, o, y(t.cy + t.y11, t.cx + t.x11), y(c.cy + c.y11, c.cx + c.x11), !u), a.arc(c.cx, c.cy, h, y(c.y11, c.x11), y(c.y01, c.x01), !u))) : (a.moveTo($, W), a.arc(0, 0, o, g, m, !u)) : a.moveTo($, W), !(r > l) || !(R > l) ? a.lineTo(C, H) : x > l ? (t = Z(C, H, N, V, r, -x, u), c = Z($, W, K, L, r, -x, u), a.lineTo(t.cx + t.x01, t.cy + t.y01), x < O ? a.arc(t.cx, t.cy, x, y(t.y01, t.x01), y(c.y01, c.x01), !u) : (a.arc(t.cx, t.cy, x, y(t.y01, t.x01), y(t.y11, t.x11), !u), a.arc(0, 0, r, y(t.cy + t.y11, t.cx + t.x11), y(c.cy + c.y11, c.cx + c.x11), u), a.arc(c.cx, c.cy, x, y(c.y11, c.x11), y(c.y01, c.x01), !u))) : a.arc(0, 0, r, A, T, u);
    }
    if (a.closePath(), n)
      return a = null, n + "" || null;
  }
  return i.centroid = function() {
    var n = (+s.apply(this, arguments) + +v.apply(this, arguments)) / 2, p = (+_.apply(this, arguments) + +d.apply(this, arguments)) / 2 - cn / 2;
    return [X(p) * n, z(p) * n];
  }, i.innerRadius = function(n) {
    return arguments.length ? (s = typeof n == "function" ? n : D(+n), i) : s;
  }, i.outerRadius = function(n) {
    return arguments.length ? (v = typeof n == "function" ? n : D(+n), i) : v;
  }, i.cornerRadius = function(n) {
    return arguments.length ? (q = typeof n == "function" ? n : D(+n), i) : q;
  }, i.padRadius = function(n) {
    return arguments.length ? (B = n == null ? null : typeof n == "function" ? n : D(+n), i) : B;
  }, i.startAngle = function(n) {
    return arguments.length ? (_ = typeof n == "function" ? n : D(+n), i) : _;
  }, i.endAngle = function(n) {
    return arguments.length ? (d = typeof n == "function" ? n : D(+n), i) : d;
  }, i.padAngle = function(n) {
    return arguments.length ? (F = typeof n == "function" ? n : D(+n), i) : F;
  }, i.context = function(n) {
    return arguments.length ? (a = n ?? null, i) : a;
  }, i;
}
export {
  _n as v
};
