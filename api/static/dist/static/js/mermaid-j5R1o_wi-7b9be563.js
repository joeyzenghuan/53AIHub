import { E as kf, _ as mt, R as Cf, r as Ue, w as Qs, o as vf, a as wf, b as fa, c as _f, d as vt, n as ma, t as Wr, g as Hr, v as Yr, f as Ve, A as Ge, h as Ks, i as Js, T as tl, D as Sf, __tla as __tla_0 } from "./index-7b696e01.js";
import { X as Tf, L as lt, H as xr, V as Bf, B as Lf, z as Mf, U as vh, Y as wh, K as Af, G as Ff } from "./helper-7WMIPux3-736d9956.js";
import { d as $f, r as Ef } from "./copy-BS31ARP0-68b0a49d.js";
let I_, g0, om, gs, Kt, zh, D1, Vk, oh, v0, gy, Ar, F_, Qn, No, pl, Wy, tn, O1, _i, G0, wi, G, rt, Gh, ts, T1, g, tm, Sn, R_, _l, wl, q_, N_, z_, O_, D_, W_, P_, gh, T2, Wn, zy, Py, sr, w1, lu, Un, Zn, Tn, cu, su, Jb, Rf, C1, g1, eb, os, Xb, S1, Bi, Ir, wn, o1, gC, Ti, j_, J2, ug, G_, my, Mt, We, Jo, Nu, cr, mu, at, me, Hk, V_, X_, Y_, J, U_, Tk, vk, Ck, v1, gb, f1, as, J0, t1, eu, nb, ab, Qe, Rl, ob, ss, ib, hb, Pr, je, Ol, ls, iu, Eo, _1, Xn, K_, dt, Vh, It, Fe, rm, rr, jy, Dr, xu, D, $_, Q_, im, nm, fy, Z_, em, xk, fe, H_, z1, K0, E_, hi;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var Of = Object.defineProperty, Df = (e, t, r) => t in e ? Of(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: r
  }) : e[t] = r, yt = (e, t, r) => Df(e, typeof t != "symbol" ? t + "" : t, r), Ga = {
    exports: {}
  }, If = Ga.exports, el;
  function Pf() {
    return el || (el = 1, function(e, t) {
      (function(r, i) {
        e.exports = i();
      })(If, function() {
        var r = 1e3, i = 6e4, n = 36e5, a = "millisecond", s = "second", o = "minute", l = "hour", h = "day", c = "week", d = "month", u = "quarter", p = "year", f = "date", m = "Invalid Date", y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, x = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = {
          name: "en",
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          ordinal: function(L) {
            var M = [
              "th",
              "st",
              "nd",
              "rd"
            ], T = L % 100;
            return "[" + L + (M[(T - 20) % 10] || M[T] || M[0]) + "]";
          }
        }, C = function(L, M, T) {
          var E = String(L);
          return !E || E.length >= M ? L : "" + Array(M + 1 - E.length).join(T) + L;
        }, S = {
          s: C,
          z: function(L) {
            var M = -L.utcOffset(), T = Math.abs(M), E = Math.floor(T / 60), A = T % 60;
            return (M <= 0 ? "+" : "-") + C(E, 2, "0") + ":" + C(A, 2, "0");
          },
          m: function L(M, T) {
            if (M.date() < T.date())
              return -L(T, M);
            var E = 12 * (T.year() - M.year()) + (T.month() - M.month()), A = M.clone().add(E, d), F = T - A < 0, I = M.clone().add(E + (F ? -1 : 1), d);
            return +(-(E + (T - A) / (F ? A - I : I - A)) || 0);
          },
          a: function(L) {
            return L < 0 ? Math.ceil(L) || 0 : Math.floor(L);
          },
          p: function(L) {
            return {
              M: d,
              y: p,
              w: c,
              d: h,
              D: f,
              h: l,
              m: o,
              s,
              ms: a,
              Q: u
            }[L] || String(L || "").toLowerCase().replace(/s$/, "");
          },
          u: function(L) {
            return L === void 0;
          }
        }, k = "en", w = {};
        w[k] = b;
        var B = "$isDayjsObject", N = function(L) {
          return L instanceof W || !(!L || !L[B]);
        }, j = function L(M, T, E) {
          var A;
          if (!M)
            return k;
          if (typeof M == "string") {
            var F = M.toLowerCase();
            w[F] && (A = F), T && (w[F] = T, A = F);
            var I = M.split("-");
            if (!A && I.length > 1)
              return L(I[0]);
          } else {
            var R = M.name;
            w[R] = M, A = R;
          }
          return !E && A && (k = A), A || !E && k;
        }, O = function(L, M) {
          if (N(L))
            return L.clone();
          var T = typeof M == "object" ? M : {};
          return T.date = L, T.args = arguments, new W(T);
        }, $ = S;
        $.l = j, $.i = N, $.w = function(L, M) {
          return O(L, {
            locale: M.$L,
            utc: M.$u,
            x: M.$x,
            $offset: M.$offset
          });
        };
        var W = function() {
          function L(T) {
            this.$L = j(T.locale, null, true), this.parse(T), this.$x = this.$x || T.x || {}, this[B] = true;
          }
          var M = L.prototype;
          return M.parse = function(T) {
            this.$d = function(E) {
              var A = E.date, F = E.utc;
              if (A === null)
                return /* @__PURE__ */ new Date(NaN);
              if ($.u(A))
                return /* @__PURE__ */ new Date();
              if (A instanceof Date)
                return new Date(A);
              if (typeof A == "string" && !/Z$/i.test(A)) {
                var I = A.match(y);
                if (I) {
                  var R = I[2] - 1 || 0, H = (I[7] || "0").substring(0, 3);
                  return F ? new Date(Date.UTC(I[1], R, I[3] || 1, I[4] || 0, I[5] || 0, I[6] || 0, H)) : new Date(I[1], R, I[3] || 1, I[4] || 0, I[5] || 0, I[6] || 0, H);
                }
              }
              return new Date(A);
            }(T), this.init();
          }, M.init = function() {
            var T = this.$d;
            this.$y = T.getFullYear(), this.$M = T.getMonth(), this.$D = T.getDate(), this.$W = T.getDay(), this.$H = T.getHours(), this.$m = T.getMinutes(), this.$s = T.getSeconds(), this.$ms = T.getMilliseconds();
          }, M.$utils = function() {
            return $;
          }, M.isValid = function() {
            return this.$d.toString() !== m;
          }, M.isSame = function(T, E) {
            var A = O(T);
            return this.startOf(E) <= A && A <= this.endOf(E);
          }, M.isAfter = function(T, E) {
            return O(T) < this.startOf(E);
          }, M.isBefore = function(T, E) {
            return this.endOf(E) < O(T);
          }, M.$g = function(T, E, A) {
            return $.u(T) ? this[E] : this.set(A, T);
          }, M.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, M.valueOf = function() {
            return this.$d.getTime();
          }, M.startOf = function(T, E) {
            var A = this, F = !!$.u(E) || E, I = $.p(T), R = function(wt, xt) {
              var Tt = $.w(A.$u ? Date.UTC(A.$y, xt, wt) : new Date(A.$y, xt, wt), A);
              return F ? Tt : Tt.endOf(h);
            }, H = function(wt, xt) {
              return $.w(A.toDate()[wt].apply(A.toDate("s"), (F ? [
                0,
                0,
                0,
                0
              ] : [
                23,
                59,
                59,
                999
              ]).slice(xt)), A);
            }, z = this.$W, Z = this.$M, q = this.$D, ct = "set" + (this.$u ? "UTC" : "");
            switch (I) {
              case p:
                return F ? R(1, 0) : R(31, 11);
              case d:
                return F ? R(1, Z) : R(0, Z + 1);
              case c:
                var ft = this.$locale().weekStart || 0, $t = (z < ft ? z + 7 : z) - ft;
                return R(F ? q - $t : q + (6 - $t), Z);
              case h:
              case f:
                return H(ct + "Hours", 0);
              case l:
                return H(ct + "Minutes", 1);
              case o:
                return H(ct + "Seconds", 2);
              case s:
                return H(ct + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, M.endOf = function(T) {
            return this.startOf(T, false);
          }, M.$set = function(T, E) {
            var A, F = $.p(T), I = "set" + (this.$u ? "UTC" : ""), R = (A = {}, A[h] = I + "Date", A[f] = I + "Date", A[d] = I + "Month", A[p] = I + "FullYear", A[l] = I + "Hours", A[o] = I + "Minutes", A[s] = I + "Seconds", A[a] = I + "Milliseconds", A)[F], H = F === h ? this.$D + (E - this.$W) : E;
            if (F === d || F === p) {
              var z = this.clone().set(f, 1);
              z.$d[R](H), z.init(), this.$d = z.set(f, Math.min(this.$D, z.daysInMonth())).$d;
            } else
              R && this.$d[R](H);
            return this.init(), this;
          }, M.set = function(T, E) {
            return this.clone().$set(T, E);
          }, M.get = function(T) {
            return this[$.p(T)]();
          }, M.add = function(T, E) {
            var A, F = this;
            T = Number(T);
            var I = $.p(E), R = function(Z) {
              var q = O(F);
              return $.w(q.date(q.date() + Math.round(Z * T)), F);
            };
            if (I === d)
              return this.set(d, this.$M + T);
            if (I === p)
              return this.set(p, this.$y + T);
            if (I === h)
              return R(1);
            if (I === c)
              return R(7);
            var H = (A = {}, A[o] = i, A[l] = n, A[s] = r, A)[I] || 1, z = this.$d.getTime() + T * H;
            return $.w(z, this);
          }, M.subtract = function(T, E) {
            return this.add(-1 * T, E);
          }, M.format = function(T) {
            var E = this, A = this.$locale();
            if (!this.isValid())
              return A.invalidDate || m;
            var F = T || "YYYY-MM-DDTHH:mm:ssZ", I = $.z(this), R = this.$H, H = this.$m, z = this.$M, Z = A.weekdays, q = A.months, ct = A.meridiem, ft = function(xt, Tt, Pt, Jt) {
              return xt && (xt[Tt] || xt(E, F)) || Pt[Tt].slice(0, Jt);
            }, $t = function(xt) {
              return $.s(R % 12 || 12, xt, "0");
            }, wt = ct || function(xt, Tt, Pt) {
              var Jt = xt < 12 ? "AM" : "PM";
              return Pt ? Jt.toLowerCase() : Jt;
            };
            return F.replace(x, function(xt, Tt) {
              return Tt || function(Pt) {
                switch (Pt) {
                  case "YY":
                    return String(E.$y).slice(-2);
                  case "YYYY":
                    return $.s(E.$y, 4, "0");
                  case "M":
                    return z + 1;
                  case "MM":
                    return $.s(z + 1, 2, "0");
                  case "MMM":
                    return ft(A.monthsShort, z, q, 3);
                  case "MMMM":
                    return ft(q, z);
                  case "D":
                    return E.$D;
                  case "DD":
                    return $.s(E.$D, 2, "0");
                  case "d":
                    return String(E.$W);
                  case "dd":
                    return ft(A.weekdaysMin, E.$W, Z, 2);
                  case "ddd":
                    return ft(A.weekdaysShort, E.$W, Z, 3);
                  case "dddd":
                    return Z[E.$W];
                  case "H":
                    return String(R);
                  case "HH":
                    return $.s(R, 2, "0");
                  case "h":
                    return $t(1);
                  case "hh":
                    return $t(2);
                  case "a":
                    return wt(R, H, true);
                  case "A":
                    return wt(R, H, false);
                  case "m":
                    return String(H);
                  case "mm":
                    return $.s(H, 2, "0");
                  case "s":
                    return String(E.$s);
                  case "ss":
                    return $.s(E.$s, 2, "0");
                  case "SSS":
                    return $.s(E.$ms, 3, "0");
                  case "Z":
                    return I;
                }
                return null;
              }(xt) || I.replace(":", "");
            });
          }, M.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, M.diff = function(T, E, A) {
            var F, I = this, R = $.p(E), H = O(T), z = (H.utcOffset() - this.utcOffset()) * i, Z = this - H, q = function() {
              return $.m(I, H);
            };
            switch (R) {
              case p:
                F = q() / 12;
                break;
              case d:
                F = q();
                break;
              case u:
                F = q() / 3;
                break;
              case c:
                F = (Z - z) / 6048e5;
                break;
              case h:
                F = (Z - z) / 864e5;
                break;
              case l:
                F = Z / n;
                break;
              case o:
                F = Z / i;
                break;
              case s:
                F = Z / r;
                break;
              default:
                F = Z;
            }
            return A ? F : $.a(F);
          }, M.daysInMonth = function() {
            return this.endOf(d).$D;
          }, M.$locale = function() {
            return w[this.$L];
          }, M.locale = function(T, E) {
            if (!T)
              return this.$L;
            var A = this.clone(), F = j(T, E, true);
            return F && (A.$L = F), A;
          }, M.clone = function() {
            return $.w(this.$d, this);
          }, M.toDate = function() {
            return new Date(this.valueOf());
          }, M.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, M.toISOString = function() {
            return this.$d.toISOString();
          }, M.toString = function() {
            return this.$d.toUTCString();
          }, L;
        }(), P = W.prototype;
        return O.prototype = P, [
          [
            "$ms",
            a
          ],
          [
            "$s",
            s
          ],
          [
            "$m",
            o
          ],
          [
            "$H",
            l
          ],
          [
            "$W",
            h
          ],
          [
            "$M",
            d
          ],
          [
            "$y",
            p
          ],
          [
            "$D",
            f
          ]
        ].forEach(function(L) {
          P[L[1]] = function(M) {
            return this.$g(M, L[0], L[1]);
          };
        }), O.extend = function(L, M) {
          return L.$i || (L(M, W, O), L.$i = true), O;
        }, O.locale = j, O.isDayjs = N, O.unix = function(L) {
          return O(1e3 * L);
        }, O.en = w[k], O.Ls = w, O.p = {}, O;
      });
    }(Ga)), Ga.exports;
  }
  var zf = Pf();
  let Xi, Nf, qf, De;
  Rf = kf(zf);
  Xi = {
    min: {
      r: 0,
      g: 0,
      b: 0,
      s: 0,
      l: 0,
      a: 0
    },
    max: {
      r: 255,
      g: 255,
      b: 255,
      h: 360,
      s: 100,
      l: 100,
      a: 1
    },
    clamp: {
      r: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
      g: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
      b: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
      h: (e) => e % 360,
      s: (e) => e >= 100 ? 100 : e < 0 ? 0 : e,
      l: (e) => e >= 100 ? 100 : e < 0 ? 0 : e,
      a: (e) => e >= 1 ? 1 : e < 0 ? 0 : e
    },
    toLinear: (e) => {
      const t = e / 255;
      return e > 0.03928 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92;
    },
    hue2rgb: (e, t, r) => (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e),
    hsl2rgb: ({ h: e, s: t, l: r }, i) => {
      if (!t)
        return r * 2.55;
      e /= 360, t /= 100, r /= 100;
      const n = r < 0.5 ? r * (1 + t) : r + t - r * t, a = 2 * r - n;
      switch (i) {
        case "r":
          return Xi.hue2rgb(a, n, e + 1 / 3) * 255;
        case "g":
          return Xi.hue2rgb(a, n, e) * 255;
        case "b":
          return Xi.hue2rgb(a, n, e - 1 / 3) * 255;
      }
    },
    rgb2hsl: ({ r: e, g: t, b: r }, i) => {
      e /= 255, t /= 255, r /= 255;
      const n = Math.max(e, t, r), a = Math.min(e, t, r), s = (n + a) / 2;
      if (i === "l")
        return s * 100;
      if (n === a)
        return 0;
      const o = n - a, l = s > 0.5 ? o / (2 - n - a) : o / (n + a);
      if (i === "s")
        return l * 100;
      switch (n) {
        case e:
          return ((t - r) / o + (t < r ? 6 : 0)) * 60;
        case t:
          return ((r - e) / o + 2) * 60;
        case r:
          return ((e - t) / o + 4) * 60;
        default:
          return -1;
      }
    }
  };
  Nf = {
    clamp: (e, t, r) => t > r ? Math.min(t, Math.max(r, e)) : Math.min(r, Math.max(t, e)),
    round: (e) => Math.round(e * 1e10) / 1e10
  };
  qf = {
    dec2hex: (e) => {
      const t = Math.round(e).toString(16);
      return t.length > 1 ? t : `0${t}`;
    }
  };
  at = {
    channel: Xi,
    lang: Nf,
    unit: qf
  };
  De = {};
  for (let e = 0; e <= 255; e++)
    De[e] = at.unit.dec2hex(e);
  const Rt = {
    ALL: 0,
    RGB: 1,
    HSL: 2
  };
  class jf {
    constructor() {
      this.type = Rt.ALL;
    }
    get() {
      return this.type;
    }
    set(t) {
      if (this.type && this.type !== t)
        throw new Error("Cannot change both RGB and HSL channels at the same time");
      this.type = t;
    }
    reset() {
      this.type = Rt.ALL;
    }
    is(t) {
      return this.type === t;
    }
  }
  class Wf {
    constructor(t, r) {
      this.color = r, this.changed = false, this.data = t, this.type = new jf();
    }
    set(t, r) {
      return this.color = r, this.changed = false, this.data = t, this.type.type = Rt.ALL, this;
    }
    _ensureHSL() {
      const t = this.data, { h: r, s: i, l: n } = t;
      r === void 0 && (t.h = at.channel.rgb2hsl(t, "h")), i === void 0 && (t.s = at.channel.rgb2hsl(t, "s")), n === void 0 && (t.l = at.channel.rgb2hsl(t, "l"));
    }
    _ensureRGB() {
      const t = this.data, { r, g: i, b: n } = t;
      r === void 0 && (t.r = at.channel.hsl2rgb(t, "r")), i === void 0 && (t.g = at.channel.hsl2rgb(t, "g")), n === void 0 && (t.b = at.channel.hsl2rgb(t, "b"));
    }
    get r() {
      const t = this.data, r = t.r;
      return !this.type.is(Rt.HSL) && r !== void 0 ? r : (this._ensureHSL(), at.channel.hsl2rgb(t, "r"));
    }
    get g() {
      const t = this.data, r = t.g;
      return !this.type.is(Rt.HSL) && r !== void 0 ? r : (this._ensureHSL(), at.channel.hsl2rgb(t, "g"));
    }
    get b() {
      const t = this.data, r = t.b;
      return !this.type.is(Rt.HSL) && r !== void 0 ? r : (this._ensureHSL(), at.channel.hsl2rgb(t, "b"));
    }
    get h() {
      const t = this.data, r = t.h;
      return !this.type.is(Rt.RGB) && r !== void 0 ? r : (this._ensureRGB(), at.channel.rgb2hsl(t, "h"));
    }
    get s() {
      const t = this.data, r = t.s;
      return !this.type.is(Rt.RGB) && r !== void 0 ? r : (this._ensureRGB(), at.channel.rgb2hsl(t, "s"));
    }
    get l() {
      const t = this.data, r = t.l;
      return !this.type.is(Rt.RGB) && r !== void 0 ? r : (this._ensureRGB(), at.channel.rgb2hsl(t, "l"));
    }
    get a() {
      return this.data.a;
    }
    set r(t) {
      this.type.set(Rt.RGB), this.changed = true, this.data.r = t;
    }
    set g(t) {
      this.type.set(Rt.RGB), this.changed = true, this.data.g = t;
    }
    set b(t) {
      this.type.set(Rt.RGB), this.changed = true, this.data.b = t;
    }
    set h(t) {
      this.type.set(Rt.HSL), this.changed = true, this.data.h = t;
    }
    set s(t) {
      this.type.set(Rt.HSL), this.changed = true, this.data.s = t;
    }
    set l(t) {
      this.type.set(Rt.HSL), this.changed = true, this.data.l = t;
    }
    set a(t) {
      this.changed = true, this.data.a = t;
    }
  }
  let Pn, _r, Ke, li, ni, _h, Hf, Yf, Sh, _, Uf, U;
  Pn = new Wf({
    r: 0,
    g: 0,
    b: 0,
    a: 0
  }, "transparent");
  _r = {
    re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
    parse: (e) => {
      if (e.charCodeAt(0) !== 35)
        return;
      const t = e.match(_r.re);
      if (!t)
        return;
      const r = t[1], i = parseInt(r, 16), n = r.length, a = n % 4 === 0, s = n > 4, o = s ? 1 : 17, l = s ? 8 : 4, h = a ? 0 : -1, c = s ? 255 : 15;
      return Pn.set({
        r: (i >> l * (h + 3) & c) * o,
        g: (i >> l * (h + 2) & c) * o,
        b: (i >> l * (h + 1) & c) * o,
        a: a ? (i & c) * o / 255 : 1
      }, e);
    },
    stringify: (e) => {
      const { r: t, g: r, b: i, a: n } = e;
      return n < 1 ? `#${De[Math.round(t)]}${De[Math.round(r)]}${De[Math.round(i)]}${De[Math.round(n * 255)]}` : `#${De[Math.round(t)]}${De[Math.round(r)]}${De[Math.round(i)]}`;
    }
  };
  Ke = {
    re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
    hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
    _hue2deg: (e) => {
      const t = e.match(Ke.hueRe);
      if (t) {
        const [, r, i] = t;
        switch (i) {
          case "grad":
            return at.channel.clamp.h(parseFloat(r) * 0.9);
          case "rad":
            return at.channel.clamp.h(parseFloat(r) * 180 / Math.PI);
          case "turn":
            return at.channel.clamp.h(parseFloat(r) * 360);
        }
      }
      return at.channel.clamp.h(parseFloat(e));
    },
    parse: (e) => {
      const t = e.charCodeAt(0);
      if (t !== 104 && t !== 72)
        return;
      const r = e.match(Ke.re);
      if (!r)
        return;
      const [, i, n, a, s, o] = r;
      return Pn.set({
        h: Ke._hue2deg(i),
        s: at.channel.clamp.s(parseFloat(n)),
        l: at.channel.clamp.l(parseFloat(a)),
        a: s ? at.channel.clamp.a(o ? parseFloat(s) / 100 : parseFloat(s)) : 1
      }, e);
    },
    stringify: (e) => {
      const { h: t, s: r, l: i, a: n } = e;
      return n < 1 ? `hsla(${at.lang.round(t)}, ${at.lang.round(r)}%, ${at.lang.round(i)}%, ${n})` : `hsl(${at.lang.round(t)}, ${at.lang.round(r)}%, ${at.lang.round(i)}%)`;
    }
  };
  li = {
    colors: {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyanaqua: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      transparent: "#00000000",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    },
    parse: (e) => {
      e = e.toLowerCase();
      const t = li.colors[e];
      if (t)
        return _r.parse(t);
    },
    stringify: (e) => {
      const t = _r.stringify(e);
      for (const r in li.colors)
        if (li.colors[r] === t)
          return r;
    }
  };
  ni = {
    re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
    parse: (e) => {
      const t = e.charCodeAt(0);
      if (t !== 114 && t !== 82)
        return;
      const r = e.match(ni.re);
      if (!r)
        return;
      const [, i, n, a, s, o, l, h, c] = r;
      return Pn.set({
        r: at.channel.clamp.r(n ? parseFloat(i) * 2.55 : parseFloat(i)),
        g: at.channel.clamp.g(s ? parseFloat(a) * 2.55 : parseFloat(a)),
        b: at.channel.clamp.b(l ? parseFloat(o) * 2.55 : parseFloat(o)),
        a: h ? at.channel.clamp.a(c ? parseFloat(h) / 100 : parseFloat(h)) : 1
      }, e);
    },
    stringify: (e) => {
      const { r: t, g: r, b: i, a: n } = e;
      return n < 1 ? `rgba(${at.lang.round(t)}, ${at.lang.round(r)}, ${at.lang.round(i)}, ${at.lang.round(n)})` : `rgb(${at.lang.round(t)}, ${at.lang.round(r)}, ${at.lang.round(i)})`;
    }
  };
  me = {
    format: {
      keyword: li,
      hex: _r,
      rgb: ni,
      rgba: ni,
      hsl: Ke,
      hsla: Ke
    },
    parse: (e) => {
      if (typeof e != "string")
        return e;
      const t = _r.parse(e) || ni.parse(e) || Ke.parse(e) || li.parse(e);
      if (t)
        return t;
      throw new Error(`Unsupported color format: "${e}"`);
    },
    stringify: (e) => !e.changed && e.color ? e.color : e.type.is(Rt.HSL) || e.data.r === void 0 ? Ke.stringify(e) : e.a < 1 || !Number.isInteger(e.r) || !Number.isInteger(e.g) || !Number.isInteger(e.b) ? ni.stringify(e) : _r.stringify(e)
  };
  _h = (e, t) => {
    const r = me.parse(e);
    for (const i in t)
      r[i] = at.channel.clamp[i](t[i]);
    return me.stringify(r);
  };
  hi = (e, t, r = 0, i = 1) => {
    if (typeof e != "number")
      return _h(e, {
        a: t
      });
    const n = Pn.set({
      r: at.channel.clamp.r(e),
      g: at.channel.clamp.g(t),
      b: at.channel.clamp.b(r),
      a: at.channel.clamp.a(i)
    });
    return me.stringify(n);
  };
  Hf = (e) => {
    const { r: t, g: r, b: i } = me.parse(e), n = 0.2126 * at.channel.toLinear(t) + 0.7152 * at.channel.toLinear(r) + 0.0722 * at.channel.toLinear(i);
    return at.lang.round(n);
  };
  Yf = (e) => Hf(e) >= 0.5;
  wi = (e) => !Yf(e);
  Sh = (e, t, r) => {
    const i = me.parse(e), n = i[t], a = at.channel.clamp[t](n + r);
    return n !== a && (i[t] = a), me.stringify(i);
  };
  G = (e, t) => Sh(e, "l", t);
  rt = (e, t) => Sh(e, "l", -t);
  _ = (e, t) => {
    const r = me.parse(e), i = {};
    for (const n in t)
      t[n] && (i[n] = r[n] + t[n]);
    return _h(e, i);
  };
  Uf = (e, t, r = 50) => {
    const { r: i, g: n, b: a, a: s } = me.parse(e), { r: o, g: l, b: h, a: c } = me.parse(t), d = r / 100, u = d * 2 - 1, p = s - c, f = ((u * p === -1 ? u : (u + p) / (1 + u * p)) + 1) / 2, m = 1 - f, y = i * f + o * m, x = n * f + l * m, b = a * f + h * m, C = s * d + c * (1 - d);
    return hi(y, x, b, C);
  };
  U = (e, t = 100) => {
    const r = me.parse(e);
    return r.r = 255 - r.r, r.g = 255 - r.g, r.b = 255 - r.b, Uf(r, e, t);
  };
  const { entries: Th, setPrototypeOf: rl, isFrozen: Vf, getPrototypeOf: Gf, getOwnPropertyDescriptor: Xf } = Object;
  let { freeze: Vt, seal: ie, create: Bh } = Object, { apply: Xa, construct: Za } = typeof Reflect < "u" && Reflect;
  Vt || (Vt = function(e) {
    return e;
  });
  ie || (ie = function(e) {
    return e;
  });
  Xa || (Xa = function(e, t, r) {
    return e.apply(t, r);
  });
  Za || (Za = function(e, t) {
    return new e(...t);
  });
  const Pi = Gt(Array.prototype.forEach), Zf = Gt(Array.prototype.lastIndexOf), il = Gt(Array.prototype.pop), Ur = Gt(Array.prototype.push), Qf = Gt(Array.prototype.splice), Zi = Gt(String.prototype.toLowerCase), ya = Gt(String.prototype.toString), nl = Gt(String.prototype.match), Vr = Gt(String.prototype.replace), Kf = Gt(String.prototype.indexOf), Jf = Gt(String.prototype.trim), se = Gt(Object.prototype.hasOwnProperty), jt = Gt(RegExp.prototype.test), Gr = t0(TypeError);
  function Gt(e) {
    return function(t) {
      t instanceof RegExp && (t.lastIndex = 0);
      for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
        i[n - 1] = arguments[n];
      return Xa(e, t, i);
    };
  }
  function t0(e) {
    return function() {
      for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
        r[i] = arguments[i];
      return Za(e, r);
    };
  }
  function st(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Zi;
    rl && rl(e, null);
    let i = t.length;
    for (; i--; ) {
      let n = t[i];
      if (typeof n == "string") {
        const a = r(n);
        a !== n && (Vf(t) || (t[i] = a), n = a);
      }
      e[n] = true;
    }
    return e;
  }
  function e0(e) {
    for (let t = 0; t < e.length; t++)
      se(e, t) || (e[t] = null);
    return e;
  }
  function _e(e) {
    const t = Bh(null);
    for (const [r, i] of Th(e))
      se(e, r) && (Array.isArray(i) ? t[r] = e0(i) : i && typeof i == "object" && i.constructor === Object ? t[r] = _e(i) : t[r] = i);
    return t;
  }
  function Xr(e, t) {
    for (; e !== null; ) {
      const i = Xf(e, t);
      if (i) {
        if (i.get)
          return Gt(i.get);
        if (typeof i.value == "function")
          return Gt(i.value);
      }
      e = Gf(e);
    }
    function r() {
      return null;
    }
    return r;
  }
  const al = Vt([
    "a",
    "abbr",
    "acronym",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "bdi",
    "bdo",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "content",
    "data",
    "datalist",
    "dd",
    "decorator",
    "del",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meter",
    "nav",
    "nobr",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "section",
    "select",
    "shadow",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr"
  ]), xa = Vt([
    "svg",
    "a",
    "altglyph",
    "altglyphdef",
    "altglyphitem",
    "animatecolor",
    "animatemotion",
    "animatetransform",
    "circle",
    "clippath",
    "defs",
    "desc",
    "ellipse",
    "filter",
    "font",
    "g",
    "glyph",
    "glyphref",
    "hkern",
    "image",
    "line",
    "lineargradient",
    "marker",
    "mask",
    "metadata",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialgradient",
    "rect",
    "stop",
    "style",
    "switch",
    "symbol",
    "text",
    "textpath",
    "title",
    "tref",
    "tspan",
    "view",
    "vkern"
  ]), ba = Vt([
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
    "feTurbulence"
  ]), r0 = Vt([
    "animate",
    "color-profile",
    "cursor",
    "discard",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignobject",
    "hatch",
    "hatchpath",
    "mesh",
    "meshgradient",
    "meshpatch",
    "meshrow",
    "missing-glyph",
    "script",
    "set",
    "solidcolor",
    "unknown",
    "use"
  ]), ka = Vt([
    "math",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mglyph",
    "mi",
    "mlabeledtr",
    "mmultiscripts",
    "mn",
    "mo",
    "mover",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "ms",
    "mspace",
    "msqrt",
    "mstyle",
    "msub",
    "msup",
    "msubsup",
    "mtable",
    "mtd",
    "mtext",
    "mtr",
    "munder",
    "munderover",
    "mprescripts"
  ]), i0 = Vt([
    "maction",
    "maligngroup",
    "malignmark",
    "mlongdiv",
    "mscarries",
    "mscarry",
    "msgroup",
    "mstack",
    "msline",
    "msrow",
    "semantics",
    "annotation",
    "annotation-xml",
    "mprescripts",
    "none"
  ]), ol = Vt([
    "#text"
  ]), sl = Vt([
    "accept",
    "action",
    "align",
    "alt",
    "autocapitalize",
    "autocomplete",
    "autopictureinpicture",
    "autoplay",
    "background",
    "bgcolor",
    "border",
    "capture",
    "cellpadding",
    "cellspacing",
    "checked",
    "cite",
    "class",
    "clear",
    "color",
    "cols",
    "colspan",
    "controls",
    "controlslist",
    "coords",
    "crossorigin",
    "datetime",
    "decoding",
    "default",
    "dir",
    "disabled",
    "disablepictureinpicture",
    "disableremoteplayback",
    "download",
    "draggable",
    "enctype",
    "enterkeyhint",
    "face",
    "for",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hreflang",
    "id",
    "inputmode",
    "integrity",
    "ismap",
    "kind",
    "label",
    "lang",
    "list",
    "loading",
    "loop",
    "low",
    "max",
    "maxlength",
    "media",
    "method",
    "min",
    "minlength",
    "multiple",
    "muted",
    "name",
    "nonce",
    "noshade",
    "novalidate",
    "nowrap",
    "open",
    "optimum",
    "pattern",
    "placeholder",
    "playsinline",
    "popover",
    "popovertarget",
    "popovertargetaction",
    "poster",
    "preload",
    "pubdate",
    "radiogroup",
    "readonly",
    "rel",
    "required",
    "rev",
    "reversed",
    "role",
    "rows",
    "rowspan",
    "spellcheck",
    "scope",
    "selected",
    "shape",
    "size",
    "sizes",
    "span",
    "srclang",
    "start",
    "src",
    "srcset",
    "step",
    "style",
    "summary",
    "tabindex",
    "title",
    "translate",
    "type",
    "usemap",
    "valign",
    "value",
    "width",
    "wrap",
    "xmlns",
    "slot"
  ]), Ca = Vt([
    "accent-height",
    "accumulate",
    "additive",
    "alignment-baseline",
    "amplitude",
    "ascent",
    "attributename",
    "attributetype",
    "azimuth",
    "basefrequency",
    "baseline-shift",
    "begin",
    "bias",
    "by",
    "class",
    "clip",
    "clippathunits",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "cx",
    "cy",
    "d",
    "dx",
    "dy",
    "diffuseconstant",
    "direction",
    "display",
    "divisor",
    "dur",
    "edgemode",
    "elevation",
    "end",
    "exponent",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "filterunits",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyph-name",
    "glyphref",
    "gradientunits",
    "gradienttransform",
    "height",
    "href",
    "id",
    "image-rendering",
    "in",
    "in2",
    "intercept",
    "k",
    "k1",
    "k2",
    "k3",
    "k4",
    "kerning",
    "keypoints",
    "keysplines",
    "keytimes",
    "lang",
    "lengthadjust",
    "letter-spacing",
    "kernelmatrix",
    "kernelunitlength",
    "lighting-color",
    "local",
    "marker-end",
    "marker-mid",
    "marker-start",
    "markerheight",
    "markerunits",
    "markerwidth",
    "maskcontentunits",
    "maskunits",
    "max",
    "mask",
    "media",
    "method",
    "mode",
    "min",
    "name",
    "numoctaves",
    "offset",
    "operator",
    "opacity",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "paint-order",
    "path",
    "pathlength",
    "patterncontentunits",
    "patterntransform",
    "patternunits",
    "points",
    "preservealpha",
    "preserveaspectratio",
    "primitiveunits",
    "r",
    "rx",
    "ry",
    "radius",
    "refx",
    "refy",
    "repeatcount",
    "repeatdur",
    "restart",
    "result",
    "rotate",
    "scale",
    "seed",
    "shape-rendering",
    "slope",
    "specularconstant",
    "specularexponent",
    "spreadmethod",
    "startoffset",
    "stddeviation",
    "stitchtiles",
    "stop-color",
    "stop-opacity",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke",
    "stroke-width",
    "style",
    "surfacescale",
    "systemlanguage",
    "tabindex",
    "tablevalues",
    "targetx",
    "targety",
    "transform",
    "transform-origin",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "textlength",
    "type",
    "u1",
    "u2",
    "unicode",
    "values",
    "viewbox",
    "visibility",
    "version",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "width",
    "word-spacing",
    "wrap",
    "writing-mode",
    "xchannelselector",
    "ychannelselector",
    "x",
    "x1",
    "x2",
    "xmlns",
    "y",
    "y1",
    "y2",
    "z",
    "zoomandpan"
  ]), ll = Vt([
    "accent",
    "accentunder",
    "align",
    "bevelled",
    "close",
    "columnsalign",
    "columnlines",
    "columnspan",
    "denomalign",
    "depth",
    "dir",
    "display",
    "displaystyle",
    "encoding",
    "fence",
    "frame",
    "height",
    "href",
    "id",
    "largeop",
    "length",
    "linethickness",
    "lspace",
    "lquote",
    "mathbackground",
    "mathcolor",
    "mathsize",
    "mathvariant",
    "maxsize",
    "minsize",
    "movablelimits",
    "notation",
    "numalign",
    "open",
    "rowalign",
    "rowlines",
    "rowspacing",
    "rowspan",
    "rspace",
    "rquote",
    "scriptlevel",
    "scriptminsize",
    "scriptsizemultiplier",
    "selection",
    "separator",
    "separators",
    "stretchy",
    "subscriptshift",
    "supscriptshift",
    "symmetric",
    "voffset",
    "width",
    "xmlns"
  ]), zi = Vt([
    "xlink:href",
    "xml:id",
    "xlink:title",
    "xml:space",
    "xmlns:xlink"
  ]), n0 = ie(/\{\{[\w\W]*|[\w\W]*\}\}/gm), a0 = ie(/<%[\w\W]*|[\w\W]*%>/gm), o0 = ie(/\$\{[\w\W]*/gm), s0 = ie(/^data-[\-\w.\u00B7-\uFFFF]+$/), l0 = ie(/^aria-[\-\w]+$/), Lh = ie(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), h0 = ie(/^(?:\w+script|data):/i), c0 = ie(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Mh = ie(/^html$/i), d0 = ie(/^[a-z][.\w]*(-[.\w]+)+$/i);
  var hl = Object.freeze({
    __proto__: null,
    ARIA_ATTR: l0,
    ATTR_WHITESPACE: c0,
    CUSTOM_ELEMENT: d0,
    DATA_ATTR: s0,
    DOCTYPE_NAME: Mh,
    ERB_EXPR: a0,
    IS_ALLOWED_URI: Lh,
    IS_SCRIPT_OR_DATA: h0,
    MUSTACHE_EXPR: n0,
    TMPLIT_EXPR: o0
  });
  const Zr = {
    element: 1,
    text: 3,
    progressingInstruction: 7,
    comment: 8,
    document: 9
  }, u0 = function() {
    return typeof window > "u" ? null : window;
  }, p0 = function(e, t) {
    if (typeof e != "object" || typeof e.createPolicy != "function")
      return null;
    let r = null;
    const i = "data-tt-policy-suffix";
    t && t.hasAttribute(i) && (r = t.getAttribute(i));
    const n = "dompurify" + (r ? "#" + r : "");
    try {
      return e.createPolicy(n, {
        createHTML(a) {
          return a;
        },
        createScriptURL(a) {
          return a;
        }
      });
    } catch {
      return console.warn("TrustedTypes policy " + n + " could not be created."), null;
    }
  }, cl = function() {
    return {
      afterSanitizeAttributes: [],
      afterSanitizeElements: [],
      afterSanitizeShadowDOM: [],
      beforeSanitizeAttributes: [],
      beforeSanitizeElements: [],
      beforeSanitizeShadowDOM: [],
      uponSanitizeAttribute: [],
      uponSanitizeElement: [],
      uponSanitizeShadowNode: []
    };
  };
  function Ah() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : u0();
    const t = (v) => Ah(v);
    if (t.version = "3.2.6", t.removed = [], !e || !e.document || e.document.nodeType !== Zr.document || !e.Element)
      return t.isSupported = false, t;
    let { document: r } = e;
    const i = r, n = i.currentScript, { DocumentFragment: a, HTMLTemplateElement: s, Node: o, Element: l, NodeFilter: h, NamedNodeMap: c = e.NamedNodeMap || e.MozNamedAttrMap, HTMLFormElement: d, DOMParser: u, trustedTypes: p } = e, f = l.prototype, m = Xr(f, "cloneNode"), y = Xr(f, "remove"), x = Xr(f, "nextSibling"), b = Xr(f, "childNodes"), C = Xr(f, "parentNode");
    if (typeof s == "function") {
      const v = r.createElement("template");
      v.content && v.content.ownerDocument && (r = v.content.ownerDocument);
    }
    let S, k = "";
    const { implementation: w, createNodeIterator: B, createDocumentFragment: N, getElementsByTagName: j } = r, { importNode: O } = i;
    let $ = cl();
    t.isSupported = typeof Th == "function" && typeof C == "function" && w && w.createHTMLDocument !== void 0;
    const { MUSTACHE_EXPR: W, ERB_EXPR: P, TMPLIT_EXPR: L, DATA_ATTR: M, ARIA_ATTR: T, IS_SCRIPT_OR_DATA: E, ATTR_WHITESPACE: A, CUSTOM_ELEMENT: F } = hl;
    let { IS_ALLOWED_URI: I } = hl, R = null;
    const H = st({}, [
      ...al,
      ...xa,
      ...ba,
      ...ka,
      ...ol
    ]);
    let z = null;
    const Z = st({}, [
      ...sl,
      ...Ca,
      ...ll,
      ...zi
    ]);
    let q = Object.seal(Bh(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    })), ct = null, ft = null, $t = true, wt = true, xt = false, Tt = true, Pt = false, Jt = true, ae = false, He = false, sa = false, ur = false, Fi = false, $i = false, Os = true, Ds = false;
    const df = "user-content-";
    let la = true, qr = false, pr = {}, gr = null;
    const Is = st({}, [
      "annotation-xml",
      "audio",
      "colgroup",
      "desc",
      "foreignobject",
      "head",
      "iframe",
      "math",
      "mi",
      "mn",
      "mo",
      "ms",
      "mtext",
      "noembed",
      "noframes",
      "noscript",
      "plaintext",
      "script",
      "style",
      "svg",
      "template",
      "thead",
      "title",
      "video",
      "xmp"
    ]);
    let Ps = null;
    const zs = st({}, [
      "audio",
      "video",
      "img",
      "source",
      "image",
      "track"
    ]);
    let ha = null;
    const Rs = st({}, [
      "alt",
      "class",
      "for",
      "id",
      "label",
      "name",
      "pattern",
      "placeholder",
      "role",
      "summary",
      "title",
      "value",
      "style",
      "xmlns"
    ]), Ei = "http://www.w3.org/1998/Math/MathML", Oi = "http://www.w3.org/2000/svg", be = "http://www.w3.org/1999/xhtml";
    let fr = be, ca = false, da = null;
    const uf = st({}, [
      Ei,
      Oi,
      be
    ], ya);
    let Di = st({}, [
      "mi",
      "mo",
      "mn",
      "ms",
      "mtext"
    ]), Ii = st({}, [
      "annotation-xml"
    ]);
    const pf = st({}, [
      "title",
      "style",
      "font",
      "a",
      "script"
    ]);
    let jr = null;
    const gf = [
      "application/xhtml+xml",
      "text/html"
    ], ff = "text/html";
    let At = null, mr = null;
    const mf = r.createElement("form"), Ns = function(v) {
      return v instanceof RegExp || v instanceof Function;
    }, ua = function() {
      let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!(mr && mr === v)) {
        if ((!v || typeof v != "object") && (v = {}), v = _e(v), jr = gf.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? ff : v.PARSER_MEDIA_TYPE, At = jr === "application/xhtml+xml" ? ya : Zi, R = se(v, "ALLOWED_TAGS") ? st({}, v.ALLOWED_TAGS, At) : H, z = se(v, "ALLOWED_ATTR") ? st({}, v.ALLOWED_ATTR, At) : Z, da = se(v, "ALLOWED_NAMESPACES") ? st({}, v.ALLOWED_NAMESPACES, ya) : uf, ha = se(v, "ADD_URI_SAFE_ATTR") ? st(_e(Rs), v.ADD_URI_SAFE_ATTR, At) : Rs, Ps = se(v, "ADD_DATA_URI_TAGS") ? st(_e(zs), v.ADD_DATA_URI_TAGS, At) : zs, gr = se(v, "FORBID_CONTENTS") ? st({}, v.FORBID_CONTENTS, At) : Is, ct = se(v, "FORBID_TAGS") ? st({}, v.FORBID_TAGS, At) : _e({}), ft = se(v, "FORBID_ATTR") ? st({}, v.FORBID_ATTR, At) : _e({}), pr = se(v, "USE_PROFILES") ? v.USE_PROFILES : false, $t = v.ALLOW_ARIA_ATTR !== false, wt = v.ALLOW_DATA_ATTR !== false, xt = v.ALLOW_UNKNOWN_PROTOCOLS || false, Tt = v.ALLOW_SELF_CLOSE_IN_ATTR !== false, Pt = v.SAFE_FOR_TEMPLATES || false, Jt = v.SAFE_FOR_XML !== false, ae = v.WHOLE_DOCUMENT || false, ur = v.RETURN_DOM || false, Fi = v.RETURN_DOM_FRAGMENT || false, $i = v.RETURN_TRUSTED_TYPE || false, sa = v.FORCE_BODY || false, Os = v.SANITIZE_DOM !== false, Ds = v.SANITIZE_NAMED_PROPS || false, la = v.KEEP_CONTENT !== false, qr = v.IN_PLACE || false, I = v.ALLOWED_URI_REGEXP || Lh, fr = v.NAMESPACE || be, Di = v.MATHML_TEXT_INTEGRATION_POINTS || Di, Ii = v.HTML_INTEGRATION_POINTS || Ii, q = v.CUSTOM_ELEMENT_HANDLING || {}, v.CUSTOM_ELEMENT_HANDLING && Ns(v.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (q.tagNameCheck = v.CUSTOM_ELEMENT_HANDLING.tagNameCheck), v.CUSTOM_ELEMENT_HANDLING && Ns(v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (q.attributeNameCheck = v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (q.allowCustomizedBuiltInElements = v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Pt && (wt = false), Fi && (ur = true), pr && (R = st({}, ol), z = [], pr.html === true && (st(R, al), st(z, sl)), pr.svg === true && (st(R, xa), st(z, Ca), st(z, zi)), pr.svgFilters === true && (st(R, ba), st(z, Ca), st(z, zi)), pr.mathMl === true && (st(R, ka), st(z, ll), st(z, zi))), v.ADD_TAGS && (R === H && (R = _e(R)), st(R, v.ADD_TAGS, At)), v.ADD_ATTR && (z === Z && (z = _e(z)), st(z, v.ADD_ATTR, At)), v.ADD_URI_SAFE_ATTR && st(ha, v.ADD_URI_SAFE_ATTR, At), v.FORBID_CONTENTS && (gr === Is && (gr = _e(gr)), st(gr, v.FORBID_CONTENTS, At)), la && (R["#text"] = true), ae && st(R, [
          "html",
          "head",
          "body"
        ]), R.table && (st(R, [
          "tbody"
        ]), delete ct.tbody), v.TRUSTED_TYPES_POLICY) {
          if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
            throw Gr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
          if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
            throw Gr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
          S = v.TRUSTED_TYPES_POLICY, k = S.createHTML("");
        } else
          S === void 0 && (S = p0(p, n)), S !== null && typeof k == "string" && (k = S.createHTML(""));
        Vt && Vt(v), mr = v;
      }
    }, qs = st({}, [
      ...xa,
      ...ba,
      ...r0
    ]), js = st({}, [
      ...ka,
      ...i0
    ]), yf = function(v) {
      let V = C(v);
      (!V || !V.tagName) && (V = {
        namespaceURI: fr,
        tagName: "template"
      });
      const Y = Zi(v.tagName), gt = Zi(V.tagName);
      return da[v.namespaceURI] ? v.namespaceURI === Oi ? V.namespaceURI === be ? Y === "svg" : V.namespaceURI === Ei ? Y === "svg" && (gt === "annotation-xml" || Di[gt]) : !!qs[Y] : v.namespaceURI === Ei ? V.namespaceURI === be ? Y === "math" : V.namespaceURI === Oi ? Y === "math" && Ii[gt] : !!js[Y] : v.namespaceURI === be ? V.namespaceURI === Oi && !Ii[gt] || V.namespaceURI === Ei && !Di[gt] ? false : !js[Y] && (pf[Y] || !qs[Y]) : !!(jr === "application/xhtml+xml" && da[v.namespaceURI]) : false;
    }, Ye = function(v) {
      Ur(t.removed, {
        element: v
      });
      try {
        C(v).removeChild(v);
      } catch {
        y(v);
      }
    }, yr = function(v, V) {
      try {
        Ur(t.removed, {
          attribute: V.getAttributeNode(v),
          from: V
        });
      } catch {
        Ur(t.removed, {
          attribute: null,
          from: V
        });
      }
      if (V.removeAttribute(v), v === "is")
        if (ur || Fi)
          try {
            Ye(V);
          } catch {
          }
        else
          try {
            V.setAttribute(v, "");
          } catch {
          }
    }, Ws = function(v) {
      let V = null, Y = null;
      if (sa)
        v = "<remove></remove>" + v;
      else {
        const Ct = nl(v, /^[\r\n\t ]+/);
        Y = Ct && Ct[0];
      }
      jr === "application/xhtml+xml" && fr === be && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
      const gt = S ? S.createHTML(v) : v;
      if (fr === be)
        try {
          V = new u().parseFromString(gt, jr);
        } catch {
        }
      if (!V || !V.documentElement) {
        V = w.createDocument(fr, "template", null);
        try {
          V.documentElement.innerHTML = ca ? k : gt;
        } catch {
        }
      }
      const Et = V.body || V.documentElement;
      return v && Y && Et.insertBefore(r.createTextNode(Y), Et.childNodes[0] || null), fr === be ? j.call(V, ae ? "html" : "body")[0] : ae ? V.documentElement : Et;
    }, Hs = function(v) {
      return B.call(v.ownerDocument || v, v, h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION, null);
    }, pa = function(v) {
      return v instanceof d && (typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || !(v.attributes instanceof c) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function");
    }, Ys = function(v) {
      return typeof o == "function" && v instanceof o;
    };
    function ke(v, V, Y) {
      Pi(v, (gt) => {
        gt.call(t, V, Y, mr);
      });
    }
    const Us = function(v) {
      let V = null;
      if (ke($.beforeSanitizeElements, v, null), pa(v))
        return Ye(v), true;
      const Y = At(v.nodeName);
      if (ke($.uponSanitizeElement, v, {
        tagName: Y,
        allowedTags: R
      }), Jt && v.hasChildNodes() && !Ys(v.firstElementChild) && jt(/<[/\w!]/g, v.innerHTML) && jt(/<[/\w!]/g, v.textContent) || v.nodeType === Zr.progressingInstruction || Jt && v.nodeType === Zr.comment && jt(/<[/\w]/g, v.data))
        return Ye(v), true;
      if (!R[Y] || ct[Y]) {
        if (!ct[Y] && Gs(Y) && (q.tagNameCheck instanceof RegExp && jt(q.tagNameCheck, Y) || q.tagNameCheck instanceof Function && q.tagNameCheck(Y)))
          return false;
        if (la && !gr[Y]) {
          const gt = C(v) || v.parentNode, Et = b(v) || v.childNodes;
          if (Et && gt) {
            const Ct = Et.length;
            for (let Ce = Ct - 1; Ce >= 0; --Ce) {
              const oe = m(Et[Ce], true);
              oe.__removalCount = (v.__removalCount || 0) + 1, gt.insertBefore(oe, x(v));
            }
          }
        }
        return Ye(v), true;
      }
      return v instanceof l && !yf(v) || (Y === "noscript" || Y === "noembed" || Y === "noframes") && jt(/<\/no(script|embed|frames)/i, v.innerHTML) ? (Ye(v), true) : (Pt && v.nodeType === Zr.text && (V = v.textContent, Pi([
        W,
        P,
        L
      ], (gt) => {
        V = Vr(V, gt, " ");
      }), v.textContent !== V && (Ur(t.removed, {
        element: v.cloneNode()
      }), v.textContent = V)), ke($.afterSanitizeElements, v, null), false);
    }, Vs = function(v, V, Y) {
      if (Os && (V === "id" || V === "name") && (Y in r || Y in mf))
        return false;
      if (!(wt && !ft[V] && jt(M, V)) && !($t && jt(T, V))) {
        if (!z[V] || ft[V]) {
          if (!(Gs(v) && (q.tagNameCheck instanceof RegExp && jt(q.tagNameCheck, v) || q.tagNameCheck instanceof Function && q.tagNameCheck(v)) && (q.attributeNameCheck instanceof RegExp && jt(q.attributeNameCheck, V) || q.attributeNameCheck instanceof Function && q.attributeNameCheck(V)) || V === "is" && q.allowCustomizedBuiltInElements && (q.tagNameCheck instanceof RegExp && jt(q.tagNameCheck, Y) || q.tagNameCheck instanceof Function && q.tagNameCheck(Y))))
            return false;
        } else if (!ha[V] && !jt(I, Vr(Y, A, "")) && !((V === "src" || V === "xlink:href" || V === "href") && v !== "script" && Kf(Y, "data:") === 0 && Ps[v]) && !(xt && !jt(E, Vr(Y, A, ""))) && Y)
          return false;
      }
      return true;
    }, Gs = function(v) {
      return v !== "annotation-xml" && nl(v, F);
    }, Xs = function(v) {
      ke($.beforeSanitizeAttributes, v, null);
      const { attributes: V } = v;
      if (!V || pa(v))
        return;
      const Y = {
        attrName: "",
        attrValue: "",
        keepAttr: true,
        allowedAttributes: z,
        forceKeepAttr: void 0
      };
      let gt = V.length;
      for (; gt--; ) {
        const Et = V[gt], { name: Ct, namespaceURI: Ce, value: oe } = Et, de = At(Ct), ga = oe;
        let zt = Ct === "value" ? ga : Jf(ga);
        if (Y.attrName = de, Y.attrValue = zt, Y.keepAttr = true, Y.forceKeepAttr = void 0, ke($.uponSanitizeAttribute, v, Y), zt = Y.attrValue, Ds && (de === "id" || de === "name") && (yr(Ct, v), zt = df + zt), Jt && jt(/((--!?|])>)|<\/(style|title)/i, zt)) {
          yr(Ct, v);
          continue;
        }
        if (Y.forceKeepAttr)
          continue;
        if (!Y.keepAttr) {
          yr(Ct, v);
          continue;
        }
        if (!Tt && jt(/\/>/i, zt)) {
          yr(Ct, v);
          continue;
        }
        Pt && Pi([
          W,
          P,
          L
        ], (bf) => {
          zt = Vr(zt, bf, " ");
        });
        const Zs = At(v.nodeName);
        if (!Vs(Zs, de, zt)) {
          yr(Ct, v);
          continue;
        }
        if (S && typeof p == "object" && typeof p.getAttributeType == "function" && !Ce)
          switch (p.getAttributeType(Zs, de)) {
            case "TrustedHTML": {
              zt = S.createHTML(zt);
              break;
            }
            case "TrustedScriptURL": {
              zt = S.createScriptURL(zt);
              break;
            }
          }
        if (zt !== ga)
          try {
            Ce ? v.setAttributeNS(Ce, Ct, zt) : v.setAttribute(Ct, zt), pa(v) ? Ye(v) : il(t.removed);
          } catch {
            yr(Ct, v);
          }
      }
      ke($.afterSanitizeAttributes, v, null);
    }, xf = function v(V) {
      let Y = null;
      const gt = Hs(V);
      for (ke($.beforeSanitizeShadowDOM, V, null); Y = gt.nextNode(); )
        ke($.uponSanitizeShadowNode, Y, null), Us(Y), Xs(Y), Y.content instanceof a && v(Y.content);
      ke($.afterSanitizeShadowDOM, V, null);
    };
    return t.sanitize = function(v) {
      let V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Y = null, gt = null, Et = null, Ct = null;
      if (ca = !v, ca && (v = "<!-->"), typeof v != "string" && !Ys(v))
        if (typeof v.toString == "function") {
          if (v = v.toString(), typeof v != "string")
            throw Gr("dirty is not a string, aborting");
        } else
          throw Gr("toString is not a function");
      if (!t.isSupported)
        return v;
      if (He || ua(V), t.removed = [], typeof v == "string" && (qr = false), qr) {
        if (v.nodeName) {
          const de = At(v.nodeName);
          if (!R[de] || ct[de])
            throw Gr("root node is forbidden and cannot be sanitized in-place");
        }
      } else if (v instanceof o)
        Y = Ws("<!---->"), gt = Y.ownerDocument.importNode(v, true), gt.nodeType === Zr.element && gt.nodeName === "BODY" || gt.nodeName === "HTML" ? Y = gt : Y.appendChild(gt);
      else {
        if (!ur && !Pt && !ae && v.indexOf("<") === -1)
          return S && $i ? S.createHTML(v) : v;
        if (Y = Ws(v), !Y)
          return ur ? null : $i ? k : "";
      }
      Y && sa && Ye(Y.firstChild);
      const Ce = Hs(qr ? v : Y);
      for (; Et = Ce.nextNode(); )
        Us(Et), Xs(Et), Et.content instanceof a && xf(Et.content);
      if (qr)
        return v;
      if (ur) {
        if (Fi)
          for (Ct = N.call(Y.ownerDocument); Y.firstChild; )
            Ct.appendChild(Y.firstChild);
        else
          Ct = Y;
        return (z.shadowroot || z.shadowrootmode) && (Ct = O.call(i, Ct, true)), Ct;
      }
      let oe = ae ? Y.outerHTML : Y.innerHTML;
      return ae && R["!doctype"] && Y.ownerDocument && Y.ownerDocument.doctype && Y.ownerDocument.doctype.name && jt(Mh, Y.ownerDocument.doctype.name) && (oe = "<!DOCTYPE " + Y.ownerDocument.doctype.name + `>
` + oe), Pt && Pi([
        W,
        P,
        L
      ], (de) => {
        oe = Vr(oe, de, " ");
      }), S && $i ? S.createHTML(oe) : oe;
    }, t.setConfig = function() {
      let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      ua(v), He = true;
    }, t.clearConfig = function() {
      mr = null, He = false;
    }, t.isValidAttribute = function(v, V, Y) {
      mr || ua({});
      const gt = At(v), Et = At(V);
      return Vs(gt, Et, Y);
    }, t.addHook = function(v, V) {
      typeof V == "function" && Ur($[v], V);
    }, t.removeHook = function(v, V) {
      if (V !== void 0) {
        const Y = Zf($[v], V);
        return Y === -1 ? void 0 : Qf($[v], Y, 1)[0];
      }
      return il($[v]);
    }, t.removeHooks = function(v) {
      $[v] = [];
    }, t.removeAllHooks = function() {
      $ = cl();
    }, t;
  }
  let Tr, Fh, ve, zo, ee, $h, ci, f0, va, Eh, Br, Ro, Oh, Dh, m0, Qa, zn, Rn, Wt, wa, y0, x0, _a, b0, k0, Sa, C0, Ta, w0, _0, Ba, S0, T0, Me, we, Ih, Ph, B0, ln, L0, Lr, Zt, Rh, Mr, di, Nn, M0, A0, F0, Nh, qh, jh, $0, hn, E0, dl, O0, Wh, D0, I0;
  Tr = Ah();
  Fh = Object.defineProperty;
  g = (e, t) => Fh(e, "name", {
    value: t,
    configurable: true
  });
  g0 = (e, t) => {
    for (var r in t)
      Fh(e, r, {
        get: t[r],
        enumerable: true
      });
  };
  ve = {
    trace: 0,
    debug: 1,
    info: 2,
    warn: 3,
    error: 4,
    fatal: 5
  };
  D = {
    trace: g((...e) => {
    }, "trace"),
    debug: g((...e) => {
    }, "debug"),
    info: g((...e) => {
    }, "info"),
    warn: g((...e) => {
    }, "warn"),
    error: g((...e) => {
    }, "error"),
    fatal: g((...e) => {
    }, "fatal")
  };
  zo = g(function(e = "fatal") {
    let t = ve.fatal;
    typeof e == "string" ? e.toLowerCase() in ve && (t = ve[e]) : typeof e == "number" && (t = e), D.trace = () => {
    }, D.debug = () => {
    }, D.info = () => {
    }, D.warn = () => {
    }, D.error = () => {
    }, D.fatal = () => {
    }, t <= ve.fatal && (D.fatal = console.error ? console.error.bind(console, ee("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", ee("FATAL"))), t <= ve.error && (D.error = console.error ? console.error.bind(console, ee("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", ee("ERROR"))), t <= ve.warn && (D.warn = console.warn ? console.warn.bind(console, ee("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", ee("WARN"))), t <= ve.info && (D.info = console.info ? console.info.bind(console, ee("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", ee("INFO"))), t <= ve.debug && (D.debug = console.debug ? console.debug.bind(console, ee("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", ee("DEBUG"))), t <= ve.trace && (D.trace = console.debug ? console.debug.bind(console, ee("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", ee("TRACE")));
  }, "setLogLevel");
  ee = g((e) => `%c${Rf().format("ss.SSS")} : ${e} : `, "format");
  $h = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s;
  ci = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
  f0 = /\s*%%.*\n/gm;
  Eh = (va = class extends Error {
    constructor(e) {
      super(e), this.name = "UnknownDiagramError";
    }
  }, g(va, "UnknownDiagramError"), va);
  Br = {};
  Ro = g(function(e, t) {
    e = e.replace($h, "").replace(ci, "").replace(f0, `
`);
    for (const [r, { detector: i }] of Object.entries(Br))
      if (i(e, t))
        return r;
    throw new Eh(`No diagram type detected matching given configuration for text: ${e}`);
  }, "detectType");
  Oh = g((...e) => {
    for (const { id: t, detector: r, loader: i } of e)
      Dh(t, r, i);
  }, "registerLazyLoadedDiagrams");
  Dh = g((e, t, r) => {
    Br[e] && D.warn(`Detector with key ${e} already exists. Overwriting.`), Br[e] = {
      detector: t,
      loader: r
    }, D.debug(`Detector with key ${e} added${r ? " with loader" : ""}`);
  }, "addDetector");
  m0 = g((e) => Br[e].loader, "getDiagramLoader");
  Qa = g((e, t, { depth: r = 2, clobber: i = false } = {}) => {
    const n = {
      depth: r,
      clobber: i
    };
    return Array.isArray(t) && !Array.isArray(e) ? (t.forEach((a) => Qa(e, a, n)), e) : Array.isArray(t) && Array.isArray(e) ? (t.forEach((a) => {
      e.includes(a) || e.push(a);
    }), e) : e === void 0 || r <= 0 ? e != null && typeof e == "object" && typeof t == "object" ? Object.assign(e, t) : t : (t !== void 0 && typeof e == "object" && typeof t == "object" && Object.keys(t).forEach((a) => {
      typeof t[a] == "object" && (e[a] === void 0 || typeof e[a] == "object") ? (e[a] === void 0 && (e[a] = Array.isArray(t[a]) ? [] : {}), e[a] = Qa(e[a], t[a], {
        depth: r - 1,
        clobber: i
      })) : (i || typeof e[a] != "object" && typeof t[a] != "object") && (e[a] = t[a]);
    }), e);
  }, "assignWithDepth");
  It = Qa;
  zn = "#ffffff";
  Rn = "#f2f2f2";
  Wt = g((e, t) => t ? _(e, {
    s: -40,
    l: 10
  }) : _(e, {
    s: -40,
    l: -10
  }), "mkBorder");
  y0 = (wa = class {
    constructor() {
      this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px";
    }
    updateColors() {
      var e, t, r, i, n, a, s, o, l, h, c, d, u, p, f, m, y, x, b, C, S;
      if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || _(this.primaryColor, {
        h: -120
      }), this.tertiaryColor = this.tertiaryColor || _(this.primaryColor, {
        h: 180,
        l: 5
      }), this.primaryBorderColor = this.primaryBorderColor || Wt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || Wt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || Wt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || Wt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || U(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || U(this.tertiaryColor), this.lineColor = this.lineColor || U(this.background), this.arrowheadColor = this.arrowheadColor || U(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? rt(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || rt(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || U(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || G(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.darkMode ? (this.rowOdd = this.rowOdd || rt(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || rt(this.mainBkg, 10)) : (this.rowOdd = this.rowOdd || G(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || G(this.mainBkg, 5)), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || _(this.primaryColor, {
        h: 30
      }), this.cScale4 = this.cScale4 || _(this.primaryColor, {
        h: 60
      }), this.cScale5 = this.cScale5 || _(this.primaryColor, {
        h: 90
      }), this.cScale6 = this.cScale6 || _(this.primaryColor, {
        h: 120
      }), this.cScale7 = this.cScale7 || _(this.primaryColor, {
        h: 150
      }), this.cScale8 = this.cScale8 || _(this.primaryColor, {
        h: 210,
        l: 150
      }), this.cScale9 = this.cScale9 || _(this.primaryColor, {
        h: 270
      }), this.cScale10 = this.cScale10 || _(this.primaryColor, {
        h: 300
      }), this.cScale11 = this.cScale11 || _(this.primaryColor, {
        h: 330
      }), this.darkMode)
        for (let w = 0; w < this.THEME_COLOR_LIMIT; w++)
          this["cScale" + w] = rt(this["cScale" + w], 75);
      else
        for (let w = 0; w < this.THEME_COLOR_LIMIT; w++)
          this["cScale" + w] = rt(this["cScale" + w], 25);
      for (let w = 0; w < this.THEME_COLOR_LIMIT; w++)
        this["cScaleInv" + w] = this["cScaleInv" + w] || U(this["cScale" + w]);
      for (let w = 0; w < this.THEME_COLOR_LIMIT; w++)
        this.darkMode ? this["cScalePeer" + w] = this["cScalePeer" + w] || G(this["cScale" + w], 10) : this["cScalePeer" + w] = this["cScalePeer" + w] || rt(this["cScale" + w], 10);
      this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
      for (let w = 0; w < this.THEME_COLOR_LIMIT; w++)
        this["cScaleLabel" + w] = this["cScaleLabel" + w] || this.scaleLabelColor;
      const k = this.darkMode ? -4 : -1;
      for (let w = 0; w < 5; w++)
        this["surface" + w] = this["surface" + w] || _(this.mainBkg, {
          h: 180,
          s: -15,
          l: k * (5 + w * 3)
        }), this["surfacePeer" + w] = this["surfacePeer" + w] || _(this.mainBkg, {
          h: 180,
          s: -15,
          l: k * (8 + w * 3)
        });
      this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || _(this.primaryColor, {
        h: 64
      }), this.fillType3 = this.fillType3 || _(this.secondaryColor, {
        h: 64
      }), this.fillType4 = this.fillType4 || _(this.primaryColor, {
        h: -64
      }), this.fillType5 = this.fillType5 || _(this.secondaryColor, {
        h: -64
      }), this.fillType6 = this.fillType6 || _(this.primaryColor, {
        h: 128
      }), this.fillType7 = this.fillType7 || _(this.secondaryColor, {
        h: 128
      }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || _(this.primaryColor, {
        l: -10
      }), this.pie5 = this.pie5 || _(this.secondaryColor, {
        l: -10
      }), this.pie6 = this.pie6 || _(this.tertiaryColor, {
        l: -10
      }), this.pie7 = this.pie7 || _(this.primaryColor, {
        h: 60,
        l: -10
      }), this.pie8 = this.pie8 || _(this.primaryColor, {
        h: -60,
        l: -10
      }), this.pie9 = this.pie9 || _(this.primaryColor, {
        h: 120,
        l: 0
      }), this.pie10 = this.pie10 || _(this.primaryColor, {
        h: 60,
        l: -20
      }), this.pie11 = this.pie11 || _(this.primaryColor, {
        h: -60,
        l: -20
      }), this.pie12 = this.pie12 || _(this.primaryColor, {
        h: 120,
        l: -10
      }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.radar = {
        axisColor: ((e = this.radar) == null ? void 0 : e.axisColor) || this.lineColor,
        axisStrokeWidth: ((t = this.radar) == null ? void 0 : t.axisStrokeWidth) || 2,
        axisLabelFontSize: ((r = this.radar) == null ? void 0 : r.axisLabelFontSize) || 12,
        curveOpacity: ((i = this.radar) == null ? void 0 : i.curveOpacity) || 0.5,
        curveStrokeWidth: ((n = this.radar) == null ? void 0 : n.curveStrokeWidth) || 2,
        graticuleColor: ((a = this.radar) == null ? void 0 : a.graticuleColor) || "#DEDEDE",
        graticuleStrokeWidth: ((s = this.radar) == null ? void 0 : s.graticuleStrokeWidth) || 1,
        graticuleOpacity: ((o = this.radar) == null ? void 0 : o.graticuleOpacity) || 0.3,
        legendBoxSize: ((l = this.radar) == null ? void 0 : l.legendBoxSize) || 12,
        legendFontSize: ((h = this.radar) == null ? void 0 : h.legendFontSize) || 12
      }, this.archEdgeColor = this.archEdgeColor || "#777", this.archEdgeArrowColor = this.archEdgeArrowColor || "#777", this.archEdgeWidth = this.archEdgeWidth || "3", this.archGroupBorderColor = this.archGroupBorderColor || "#000", this.archGroupBorderWidth = this.archGroupBorderWidth || "2px", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || _(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      }), this.quadrant3Fill = this.quadrant3Fill || _(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      }), this.quadrant4Fill = this.quadrant4Fill || _(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || _(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      }), this.quadrant3TextFill = this.quadrant3TextFill || _(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      }), this.quadrant4TextFill = this.quadrant4TextFill || _(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      }), this.quadrantPointFill = this.quadrantPointFill || wi(this.quadrant1Fill) ? G(this.quadrant1Fill) : rt(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
        backgroundColor: ((c = this.xyChart) == null ? void 0 : c.backgroundColor) || this.background,
        titleColor: ((d = this.xyChart) == null ? void 0 : d.titleColor) || this.primaryTextColor,
        xAxisTitleColor: ((u = this.xyChart) == null ? void 0 : u.xAxisTitleColor) || this.primaryTextColor,
        xAxisLabelColor: ((p = this.xyChart) == null ? void 0 : p.xAxisLabelColor) || this.primaryTextColor,
        xAxisTickColor: ((f = this.xyChart) == null ? void 0 : f.xAxisTickColor) || this.primaryTextColor,
        xAxisLineColor: ((m = this.xyChart) == null ? void 0 : m.xAxisLineColor) || this.primaryTextColor,
        yAxisTitleColor: ((y = this.xyChart) == null ? void 0 : y.yAxisTitleColor) || this.primaryTextColor,
        yAxisLabelColor: ((x = this.xyChart) == null ? void 0 : x.yAxisLabelColor) || this.primaryTextColor,
        yAxisTickColor: ((b = this.xyChart) == null ? void 0 : b.yAxisTickColor) || this.primaryTextColor,
        yAxisLineColor: ((C = this.xyChart) == null ? void 0 : C.yAxisLineColor) || this.primaryTextColor,
        plotColorPalette: ((S = this.xyChart) == null ? void 0 : S.plotColorPalette) || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
      }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? rt(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || _(this.primaryColor, {
        h: -30
      }), this.git4 = this.git4 || _(this.primaryColor, {
        h: -60
      }), this.git5 = this.git5 || _(this.primaryColor, {
        h: -90
      }), this.git6 = this.git6 || _(this.primaryColor, {
        h: 60
      }), this.git7 = this.git7 || _(this.primaryColor, {
        h: 120
      }), this.darkMode ? (this.git0 = G(this.git0, 25), this.git1 = G(this.git1, 25), this.git2 = G(this.git2, 25), this.git3 = G(this.git3, 25), this.git4 = G(this.git4, 25), this.git5 = G(this.git5, 25), this.git6 = G(this.git6, 25), this.git7 = G(this.git7, 25)) : (this.git0 = rt(this.git0, 25), this.git1 = rt(this.git1, 25), this.git2 = rt(this.git2, 25), this.git3 = rt(this.git3, 25), this.git4 = rt(this.git4, 25), this.git5 = rt(this.git5, 25), this.git6 = rt(this.git6, 25), this.git7 = rt(this.git7, 25)), this.gitInv0 = this.gitInv0 || U(this.git0), this.gitInv1 = this.gitInv1 || U(this.git1), this.gitInv2 = this.gitInv2 || U(this.git2), this.gitInv3 = this.gitInv3 || U(this.git3), this.gitInv4 = this.gitInv4 || U(this.git4), this.gitInv5 = this.gitInv5 || U(this.git5), this.gitInv6 = this.gitInv6 || U(this.git6), this.gitInv7 = this.gitInv7 || U(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || zn, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Rn;
    }
    calculate(e) {
      if (typeof e != "object") {
        this.updateColors();
        return;
      }
      const t = Object.keys(e);
      t.forEach((r) => {
        this[r] = e[r];
      }), this.updateColors(), t.forEach((r) => {
        this[r] = e[r];
      });
    }
  }, g(wa, "Theme"), wa);
  x0 = g((e) => {
    const t = new y0();
    return t.calculate(e), t;
  }, "getThemeVariables");
  b0 = (_a = class {
    constructor() {
      this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = G(this.primaryColor, 16), this.tertiaryColor = _(this.primaryColor, {
        h: -160
      }), this.primaryBorderColor = U(this.background), this.secondaryBorderColor = Wt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Wt(this.tertiaryColor, this.darkMode), this.primaryTextColor = U(this.primaryColor), this.secondaryTextColor = U(this.secondaryColor), this.tertiaryTextColor = U(this.tertiaryColor), this.lineColor = U(this.background), this.textColor = U(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = G(U("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#ccc", this.border2 = hi(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = rt("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = rt(this.sectionBkgColor, 10), this.taskBorderColor = hi(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = hi(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || G(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || rt(this.mainBkg, 10), this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
    }
    updateColors() {
      var e, t, r, i, n, a, s, o, l, h, c, d, u, p, f, m, y, x, b, C, S;
      this.secondBkg = G(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = G(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.actorBorder, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = G(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = _(this.primaryColor, {
        h: 64
      }), this.fillType3 = _(this.secondaryColor, {
        h: 64
      }), this.fillType4 = _(this.primaryColor, {
        h: -64
      }), this.fillType5 = _(this.secondaryColor, {
        h: -64
      }), this.fillType6 = _(this.primaryColor, {
        h: 128
      }), this.fillType7 = _(this.secondaryColor, {
        h: 128
      }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || _(this.primaryColor, {
        h: 30
      }), this.cScale4 = this.cScale4 || _(this.primaryColor, {
        h: 60
      }), this.cScale5 = this.cScale5 || _(this.primaryColor, {
        h: 90
      }), this.cScale6 = this.cScale6 || _(this.primaryColor, {
        h: 120
      }), this.cScale7 = this.cScale7 || _(this.primaryColor, {
        h: 150
      }), this.cScale8 = this.cScale8 || _(this.primaryColor, {
        h: 210
      }), this.cScale9 = this.cScale9 || _(this.primaryColor, {
        h: 270
      }), this.cScale10 = this.cScale10 || _(this.primaryColor, {
        h: 300
      }), this.cScale11 = this.cScale11 || _(this.primaryColor, {
        h: 330
      });
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["cScaleInv" + k] = this["cScaleInv" + k] || U(this["cScale" + k]);
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["cScalePeer" + k] = this["cScalePeer" + k] || G(this["cScale" + k], 10);
      for (let k = 0; k < 5; k++)
        this["surface" + k] = this["surface" + k] || _(this.mainBkg, {
          h: 30,
          s: -30,
          l: -(-10 + k * 4)
        }), this["surfacePeer" + k] = this["surfacePeer" + k] || _(this.mainBkg, {
          h: 30,
          s: -30,
          l: -(-7 + k * 4)
        });
      this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["cScaleLabel" + k] = this["cScaleLabel" + k] || this.scaleLabelColor;
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["pie" + k] = this["cScale" + k];
      this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || _(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      }), this.quadrant3Fill = this.quadrant3Fill || _(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      }), this.quadrant4Fill = this.quadrant4Fill || _(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || _(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      }), this.quadrant3TextFill = this.quadrant3TextFill || _(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      }), this.quadrant4TextFill = this.quadrant4TextFill || _(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      }), this.quadrantPointFill = this.quadrantPointFill || wi(this.quadrant1Fill) ? G(this.quadrant1Fill) : rt(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
        backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
        titleColor: ((t = this.xyChart) == null ? void 0 : t.titleColor) || this.primaryTextColor,
        xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
        xAxisLabelColor: ((i = this.xyChart) == null ? void 0 : i.xAxisLabelColor) || this.primaryTextColor,
        xAxisTickColor: ((n = this.xyChart) == null ? void 0 : n.xAxisTickColor) || this.primaryTextColor,
        xAxisLineColor: ((a = this.xyChart) == null ? void 0 : a.xAxisLineColor) || this.primaryTextColor,
        yAxisTitleColor: ((s = this.xyChart) == null ? void 0 : s.yAxisTitleColor) || this.primaryTextColor,
        yAxisLabelColor: ((o = this.xyChart) == null ? void 0 : o.yAxisLabelColor) || this.primaryTextColor,
        yAxisTickColor: ((l = this.xyChart) == null ? void 0 : l.yAxisTickColor) || this.primaryTextColor,
        yAxisLineColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLineColor) || this.primaryTextColor,
        plotColorPalette: ((c = this.xyChart) == null ? void 0 : c.plotColorPalette) || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
      }, this.packet = {
        startByteColor: this.primaryTextColor,
        endByteColor: this.primaryTextColor,
        labelColor: this.primaryTextColor,
        titleColor: this.primaryTextColor,
        blockStrokeColor: this.primaryTextColor,
        blockFillColor: this.background
      }, this.radar = {
        axisColor: ((d = this.radar) == null ? void 0 : d.axisColor) || this.lineColor,
        axisStrokeWidth: ((u = this.radar) == null ? void 0 : u.axisStrokeWidth) || 2,
        axisLabelFontSize: ((p = this.radar) == null ? void 0 : p.axisLabelFontSize) || 12,
        curveOpacity: ((f = this.radar) == null ? void 0 : f.curveOpacity) || 0.5,
        curveStrokeWidth: ((m = this.radar) == null ? void 0 : m.curveStrokeWidth) || 2,
        graticuleColor: ((y = this.radar) == null ? void 0 : y.graticuleColor) || "#DEDEDE",
        graticuleStrokeWidth: ((x = this.radar) == null ? void 0 : x.graticuleStrokeWidth) || 1,
        graticuleOpacity: ((b = this.radar) == null ? void 0 : b.graticuleOpacity) || 0.3,
        legendBoxSize: ((C = this.radar) == null ? void 0 : C.legendBoxSize) || 12,
        legendFontSize: ((S = this.radar) == null ? void 0 : S.legendFontSize) || 12
      }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? rt(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = G(this.secondaryColor, 20), this.git1 = G(this.pie2 || this.secondaryColor, 20), this.git2 = G(this.pie3 || this.tertiaryColor, 20), this.git3 = G(this.pie4 || _(this.primaryColor, {
        h: -30
      }), 20), this.git4 = G(this.pie5 || _(this.primaryColor, {
        h: -60
      }), 20), this.git5 = G(this.pie6 || _(this.primaryColor, {
        h: -90
      }), 10), this.git6 = G(this.pie7 || _(this.primaryColor, {
        h: 60
      }), 10), this.git7 = G(this.pie8 || _(this.primaryColor, {
        h: 120
      }), 20), this.gitInv0 = this.gitInv0 || U(this.git0), this.gitInv1 = this.gitInv1 || U(this.git1), this.gitInv2 = this.gitInv2 || U(this.git2), this.gitInv3 = this.gitInv3 || U(this.git3), this.gitInv4 = this.gitInv4 || U(this.git4), this.gitInv5 = this.gitInv5 || U(this.git5), this.gitInv6 = this.gitInv6 || U(this.git6), this.gitInv7 = this.gitInv7 || U(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || U(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || U(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || G(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || G(this.background, 2), this.nodeBorder = this.nodeBorder || "#999";
    }
    calculate(e) {
      if (typeof e != "object") {
        this.updateColors();
        return;
      }
      const t = Object.keys(e);
      t.forEach((r) => {
        this[r] = e[r];
      }), this.updateColors(), t.forEach((r) => {
        this[r] = e[r];
      });
    }
  }, g(_a, "Theme"), _a);
  k0 = g((e) => {
    const t = new b0();
    return t.calculate(e), t;
  }, "getThemeVariables");
  C0 = (Sa = class {
    constructor() {
      this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = _(this.primaryColor, {
        h: 120
      }), this.secondaryColor = "#ffffde", this.tertiaryColor = _(this.primaryColor, {
        h: -160
      }), this.primaryBorderColor = Wt(this.primaryColor, this.darkMode), this.secondaryBorderColor = Wt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Wt(this.tertiaryColor, this.darkMode), this.primaryTextColor = U(this.primaryColor), this.secondaryTextColor = U(this.secondaryColor), this.tertiaryTextColor = U(this.tertiaryColor), this.lineColor = U(this.background), this.textColor = U(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "rgba(232,232,232, 0.8)", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.sectionBkgColor = hi(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = "calculated", this.rowEven = "calculated", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
    }
    updateColors() {
      var e, t, r, i, n, a, s, o, l, h, c, d, u, p, f, m, y, x, b, C, S;
      this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || _(this.primaryColor, {
        h: 30
      }), this.cScale4 = this.cScale4 || _(this.primaryColor, {
        h: 60
      }), this.cScale5 = this.cScale5 || _(this.primaryColor, {
        h: 90
      }), this.cScale6 = this.cScale6 || _(this.primaryColor, {
        h: 120
      }), this.cScale7 = this.cScale7 || _(this.primaryColor, {
        h: 150
      }), this.cScale8 = this.cScale8 || _(this.primaryColor, {
        h: 210
      }), this.cScale9 = this.cScale9 || _(this.primaryColor, {
        h: 270
      }), this.cScale10 = this.cScale10 || _(this.primaryColor, {
        h: 300
      }), this.cScale11 = this.cScale11 || _(this.primaryColor, {
        h: 330
      }), this.cScalePeer1 = this.cScalePeer1 || rt(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || rt(this.tertiaryColor, 40);
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["cScale" + k] = rt(this["cScale" + k], 10), this["cScalePeer" + k] = this["cScalePeer" + k] || rt(this["cScale" + k], 25);
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["cScaleInv" + k] = this["cScaleInv" + k] || _(this["cScale" + k], {
          h: 180
        });
      for (let k = 0; k < 5; k++)
        this["surface" + k] = this["surface" + k] || _(this.mainBkg, {
          h: 30,
          l: -(5 + k * 5)
        }), this["surfacePeer" + k] = this["surfacePeer" + k] || _(this.mainBkg, {
          h: 30,
          l: -(7 + k * 5)
        });
      if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
        this.cScaleLabel0 = this.cScaleLabel0 || U(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || U(this.labelTextColor);
        for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
          this["cScaleLabel" + k] = this["cScaleLabel" + k] || this.labelTextColor;
      }
      this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = G(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || G(this.primaryColor, 75) || "#ffffff", this.rowEven = this.rowEven || G(this.primaryColor, 1), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = _(this.primaryColor, {
        h: 64
      }), this.fillType3 = _(this.secondaryColor, {
        h: 64
      }), this.fillType4 = _(this.primaryColor, {
        h: -64
      }), this.fillType5 = _(this.secondaryColor, {
        h: -64
      }), this.fillType6 = _(this.primaryColor, {
        h: 128
      }), this.fillType7 = _(this.secondaryColor, {
        h: 128
      }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || _(this.tertiaryColor, {
        l: -40
      }), this.pie4 = this.pie4 || _(this.primaryColor, {
        l: -10
      }), this.pie5 = this.pie5 || _(this.secondaryColor, {
        l: -30
      }), this.pie6 = this.pie6 || _(this.tertiaryColor, {
        l: -20
      }), this.pie7 = this.pie7 || _(this.primaryColor, {
        h: 60,
        l: -20
      }), this.pie8 = this.pie8 || _(this.primaryColor, {
        h: -60,
        l: -40
      }), this.pie9 = this.pie9 || _(this.primaryColor, {
        h: 120,
        l: -40
      }), this.pie10 = this.pie10 || _(this.primaryColor, {
        h: 60,
        l: -40
      }), this.pie11 = this.pie11 || _(this.primaryColor, {
        h: -90,
        l: -40
      }), this.pie12 = this.pie12 || _(this.primaryColor, {
        h: 120,
        l: -30
      }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || _(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      }), this.quadrant3Fill = this.quadrant3Fill || _(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      }), this.quadrant4Fill = this.quadrant4Fill || _(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || _(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      }), this.quadrant3TextFill = this.quadrant3TextFill || _(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      }), this.quadrant4TextFill = this.quadrant4TextFill || _(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      }), this.quadrantPointFill = this.quadrantPointFill || wi(this.quadrant1Fill) ? G(this.quadrant1Fill) : rt(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.radar = {
        axisColor: ((e = this.radar) == null ? void 0 : e.axisColor) || this.lineColor,
        axisStrokeWidth: ((t = this.radar) == null ? void 0 : t.axisStrokeWidth) || 2,
        axisLabelFontSize: ((r = this.radar) == null ? void 0 : r.axisLabelFontSize) || 12,
        curveOpacity: ((i = this.radar) == null ? void 0 : i.curveOpacity) || 0.5,
        curveStrokeWidth: ((n = this.radar) == null ? void 0 : n.curveStrokeWidth) || 2,
        graticuleColor: ((a = this.radar) == null ? void 0 : a.graticuleColor) || "#DEDEDE",
        graticuleStrokeWidth: ((s = this.radar) == null ? void 0 : s.graticuleStrokeWidth) || 1,
        graticuleOpacity: ((o = this.radar) == null ? void 0 : o.graticuleOpacity) || 0.3,
        legendBoxSize: ((l = this.radar) == null ? void 0 : l.legendBoxSize) || 12,
        legendFontSize: ((h = this.radar) == null ? void 0 : h.legendFontSize) || 12
      }, this.xyChart = {
        backgroundColor: ((c = this.xyChart) == null ? void 0 : c.backgroundColor) || this.background,
        titleColor: ((d = this.xyChart) == null ? void 0 : d.titleColor) || this.primaryTextColor,
        xAxisTitleColor: ((u = this.xyChart) == null ? void 0 : u.xAxisTitleColor) || this.primaryTextColor,
        xAxisLabelColor: ((p = this.xyChart) == null ? void 0 : p.xAxisLabelColor) || this.primaryTextColor,
        xAxisTickColor: ((f = this.xyChart) == null ? void 0 : f.xAxisTickColor) || this.primaryTextColor,
        xAxisLineColor: ((m = this.xyChart) == null ? void 0 : m.xAxisLineColor) || this.primaryTextColor,
        yAxisTitleColor: ((y = this.xyChart) == null ? void 0 : y.yAxisTitleColor) || this.primaryTextColor,
        yAxisLabelColor: ((x = this.xyChart) == null ? void 0 : x.yAxisLabelColor) || this.primaryTextColor,
        yAxisTickColor: ((b = this.xyChart) == null ? void 0 : b.yAxisTickColor) || this.primaryTextColor,
        yAxisLineColor: ((C = this.xyChart) == null ? void 0 : C.yAxisLineColor) || this.primaryTextColor,
        plotColorPalette: ((S = this.xyChart) == null ? void 0 : S.plotColorPalette) || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
      }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || _(this.primaryColor, {
        h: -30
      }), this.git4 = this.git4 || _(this.primaryColor, {
        h: -60
      }), this.git5 = this.git5 || _(this.primaryColor, {
        h: -90
      }), this.git6 = this.git6 || _(this.primaryColor, {
        h: 60
      }), this.git7 = this.git7 || _(this.primaryColor, {
        h: 120
      }), this.darkMode ? (this.git0 = G(this.git0, 25), this.git1 = G(this.git1, 25), this.git2 = G(this.git2, 25), this.git3 = G(this.git3, 25), this.git4 = G(this.git4, 25), this.git5 = G(this.git5, 25), this.git6 = G(this.git6, 25), this.git7 = G(this.git7, 25)) : (this.git0 = rt(this.git0, 25), this.git1 = rt(this.git1, 25), this.git2 = rt(this.git2, 25), this.git3 = rt(this.git3, 25), this.git4 = rt(this.git4, 25), this.git5 = rt(this.git5, 25), this.git6 = rt(this.git6, 25), this.git7 = rt(this.git7, 25)), this.gitInv0 = this.gitInv0 || rt(U(this.git0), 25), this.gitInv1 = this.gitInv1 || U(this.git1), this.gitInv2 = this.gitInv2 || U(this.git2), this.gitInv3 = this.gitInv3 || U(this.git3), this.gitInv4 = this.gitInv4 || U(this.git4), this.gitInv5 = this.gitInv5 || U(this.git5), this.gitInv6 = this.gitInv6 || U(this.git6), this.gitInv7 = this.gitInv7 || U(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || U(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || U(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || zn, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Rn;
    }
    calculate(e) {
      if (Object.keys(this).forEach((r) => {
        this[r] === "calculated" && (this[r] = void 0);
      }), typeof e != "object") {
        this.updateColors();
        return;
      }
      const t = Object.keys(e);
      t.forEach((r) => {
        this[r] = e[r];
      }), this.updateColors(), t.forEach((r) => {
        this[r] = e[r];
      });
    }
  }, g(Sa, "Theme"), Sa);
  v0 = g((e) => {
    const t = new C0();
    return t.calculate(e), t;
  }, "getThemeVariables");
  w0 = (Ta = class {
    constructor() {
      this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = G("#cde498", 10), this.primaryBorderColor = Wt(this.primaryColor, this.darkMode), this.secondaryBorderColor = Wt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Wt(this.tertiaryColor, this.darkMode), this.primaryTextColor = U(this.primaryColor), this.secondaryTextColor = U(this.secondaryColor), this.tertiaryTextColor = U(this.primaryColor), this.lineColor = U(this.background), this.textColor = U(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
    }
    updateColors() {
      var e, t, r, i, n, a, s, o, l, h, c, d, u, p, f, m, y, x, b, C, S;
      this.actorBorder = rt(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || _(this.primaryColor, {
        h: 30
      }), this.cScale4 = this.cScale4 || _(this.primaryColor, {
        h: 60
      }), this.cScale5 = this.cScale5 || _(this.primaryColor, {
        h: 90
      }), this.cScale6 = this.cScale6 || _(this.primaryColor, {
        h: 120
      }), this.cScale7 = this.cScale7 || _(this.primaryColor, {
        h: 150
      }), this.cScale8 = this.cScale8 || _(this.primaryColor, {
        h: 210
      }), this.cScale9 = this.cScale9 || _(this.primaryColor, {
        h: 270
      }), this.cScale10 = this.cScale10 || _(this.primaryColor, {
        h: 300
      }), this.cScale11 = this.cScale11 || _(this.primaryColor, {
        h: 330
      }), this.cScalePeer1 = this.cScalePeer1 || rt(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || rt(this.tertiaryColor, 40);
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["cScale" + k] = rt(this["cScale" + k], 10), this["cScalePeer" + k] = this["cScalePeer" + k] || rt(this["cScale" + k], 25);
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["cScaleInv" + k] = this["cScaleInv" + k] || _(this["cScale" + k], {
          h: 180
        });
      this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["cScaleLabel" + k] = this["cScaleLabel" + k] || this.scaleLabelColor;
      for (let k = 0; k < 5; k++)
        this["surface" + k] = this["surface" + k] || _(this.mainBkg, {
          h: 30,
          s: -30,
          l: -(5 + k * 5)
        }), this["surfacePeer" + k] = this["surfacePeer" + k] || _(this.mainBkg, {
          h: 30,
          s: -30,
          l: -(8 + k * 5)
        });
      this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || G(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || G(this.mainBkg, 20), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = _(this.primaryColor, {
        h: 64
      }), this.fillType3 = _(this.secondaryColor, {
        h: 64
      }), this.fillType4 = _(this.primaryColor, {
        h: -64
      }), this.fillType5 = _(this.secondaryColor, {
        h: -64
      }), this.fillType6 = _(this.primaryColor, {
        h: 128
      }), this.fillType7 = _(this.secondaryColor, {
        h: 128
      }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || _(this.primaryColor, {
        l: -30
      }), this.pie5 = this.pie5 || _(this.secondaryColor, {
        l: -30
      }), this.pie6 = this.pie6 || _(this.tertiaryColor, {
        h: 40,
        l: -40
      }), this.pie7 = this.pie7 || _(this.primaryColor, {
        h: 60,
        l: -10
      }), this.pie8 = this.pie8 || _(this.primaryColor, {
        h: -60,
        l: -10
      }), this.pie9 = this.pie9 || _(this.primaryColor, {
        h: 120,
        l: 0
      }), this.pie10 = this.pie10 || _(this.primaryColor, {
        h: 60,
        l: -50
      }), this.pie11 = this.pie11 || _(this.primaryColor, {
        h: -60,
        l: -50
      }), this.pie12 = this.pie12 || _(this.primaryColor, {
        h: 120,
        l: -50
      }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || _(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      }), this.quadrant3Fill = this.quadrant3Fill || _(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      }), this.quadrant4Fill = this.quadrant4Fill || _(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || _(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      }), this.quadrant3TextFill = this.quadrant3TextFill || _(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      }), this.quadrant4TextFill = this.quadrant4TextFill || _(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      }), this.quadrantPointFill = this.quadrantPointFill || wi(this.quadrant1Fill) ? G(this.quadrant1Fill) : rt(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.packet = {
        startByteColor: this.primaryTextColor,
        endByteColor: this.primaryTextColor,
        labelColor: this.primaryTextColor,
        titleColor: this.primaryTextColor,
        blockStrokeColor: this.primaryTextColor,
        blockFillColor: this.mainBkg
      }, this.radar = {
        axisColor: ((e = this.radar) == null ? void 0 : e.axisColor) || this.lineColor,
        axisStrokeWidth: ((t = this.radar) == null ? void 0 : t.axisStrokeWidth) || 2,
        axisLabelFontSize: ((r = this.radar) == null ? void 0 : r.axisLabelFontSize) || 12,
        curveOpacity: ((i = this.radar) == null ? void 0 : i.curveOpacity) || 0.5,
        curveStrokeWidth: ((n = this.radar) == null ? void 0 : n.curveStrokeWidth) || 2,
        graticuleColor: ((a = this.radar) == null ? void 0 : a.graticuleColor) || "#DEDEDE",
        graticuleStrokeWidth: ((s = this.radar) == null ? void 0 : s.graticuleStrokeWidth) || 1,
        graticuleOpacity: ((o = this.radar) == null ? void 0 : o.graticuleOpacity) || 0.3,
        legendBoxSize: ((l = this.radar) == null ? void 0 : l.legendBoxSize) || 12,
        legendFontSize: ((h = this.radar) == null ? void 0 : h.legendFontSize) || 12
      }, this.xyChart = {
        backgroundColor: ((c = this.xyChart) == null ? void 0 : c.backgroundColor) || this.background,
        titleColor: ((d = this.xyChart) == null ? void 0 : d.titleColor) || this.primaryTextColor,
        xAxisTitleColor: ((u = this.xyChart) == null ? void 0 : u.xAxisTitleColor) || this.primaryTextColor,
        xAxisLabelColor: ((p = this.xyChart) == null ? void 0 : p.xAxisLabelColor) || this.primaryTextColor,
        xAxisTickColor: ((f = this.xyChart) == null ? void 0 : f.xAxisTickColor) || this.primaryTextColor,
        xAxisLineColor: ((m = this.xyChart) == null ? void 0 : m.xAxisLineColor) || this.primaryTextColor,
        yAxisTitleColor: ((y = this.xyChart) == null ? void 0 : y.yAxisTitleColor) || this.primaryTextColor,
        yAxisLabelColor: ((x = this.xyChart) == null ? void 0 : x.yAxisLabelColor) || this.primaryTextColor,
        yAxisTickColor: ((b = this.xyChart) == null ? void 0 : b.yAxisTickColor) || this.primaryTextColor,
        yAxisLineColor: ((C = this.xyChart) == null ? void 0 : C.yAxisLineColor) || this.primaryTextColor,
        plotColorPalette: ((S = this.xyChart) == null ? void 0 : S.plotColorPalette) || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
      }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || _(this.primaryColor, {
        h: -30
      }), this.git4 = this.git4 || _(this.primaryColor, {
        h: -60
      }), this.git5 = this.git5 || _(this.primaryColor, {
        h: -90
      }), this.git6 = this.git6 || _(this.primaryColor, {
        h: 60
      }), this.git7 = this.git7 || _(this.primaryColor, {
        h: 120
      }), this.darkMode ? (this.git0 = G(this.git0, 25), this.git1 = G(this.git1, 25), this.git2 = G(this.git2, 25), this.git3 = G(this.git3, 25), this.git4 = G(this.git4, 25), this.git5 = G(this.git5, 25), this.git6 = G(this.git6, 25), this.git7 = G(this.git7, 25)) : (this.git0 = rt(this.git0, 25), this.git1 = rt(this.git1, 25), this.git2 = rt(this.git2, 25), this.git3 = rt(this.git3, 25), this.git4 = rt(this.git4, 25), this.git5 = rt(this.git5, 25), this.git6 = rt(this.git6, 25), this.git7 = rt(this.git7, 25)), this.gitInv0 = this.gitInv0 || U(this.git0), this.gitInv1 = this.gitInv1 || U(this.git1), this.gitInv2 = this.gitInv2 || U(this.git2), this.gitInv3 = this.gitInv3 || U(this.git3), this.gitInv4 = this.gitInv4 || U(this.git4), this.gitInv5 = this.gitInv5 || U(this.git5), this.gitInv6 = this.gitInv6 || U(this.git6), this.gitInv7 = this.gitInv7 || U(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || U(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || U(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || zn, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Rn;
    }
    calculate(e) {
      if (typeof e != "object") {
        this.updateColors();
        return;
      }
      const t = Object.keys(e);
      t.forEach((r) => {
        this[r] = e[r];
      }), this.updateColors(), t.forEach((r) => {
        this[r] = e[r];
      });
    }
  }, g(Ta, "Theme"), Ta);
  _0 = g((e) => {
    const t = new w0();
    return t.calculate(e), t;
  }, "getThemeVariables");
  S0 = (Ba = class {
    constructor() {
      this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = G(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = _(this.primaryColor, {
        h: -160
      }), this.primaryBorderColor = Wt(this.primaryColor, this.darkMode), this.secondaryBorderColor = Wt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Wt(this.tertiaryColor, this.darkMode), this.primaryTextColor = U(this.primaryColor), this.secondaryTextColor = U(this.secondaryColor), this.tertiaryTextColor = U(this.tertiaryColor), this.lineColor = U(this.background), this.textColor = U(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = this.actorBorder, this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || G(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || "#f4f4f4", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
    }
    updateColors() {
      var e, t, r, i, n, a, s, o, l, h, c, d, u, p, f, m, y, x, b, C, S;
      this.secondBkg = G(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = G(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.actorBorder, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["cScaleInv" + k] = this["cScaleInv" + k] || U(this["cScale" + k]);
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this.darkMode ? this["cScalePeer" + k] = this["cScalePeer" + k] || G(this["cScale" + k], 10) : this["cScalePeer" + k] = this["cScalePeer" + k] || rt(this["cScale" + k], 10);
      this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["cScaleLabel" + k] = this["cScaleLabel" + k] || this.scaleLabelColor;
      for (let k = 0; k < 5; k++)
        this["surface" + k] = this["surface" + k] || _(this.mainBkg, {
          l: -(5 + k * 5)
        }), this["surfacePeer" + k] = this["surfacePeer" + k] || _(this.mainBkg, {
          l: -(8 + k * 5)
        });
      this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = G(this.contrast, 30), this.sectionBkgColor2 = G(this.contrast, 30), this.taskBorderColor = rt(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = G(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = rt(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = _(this.primaryColor, {
        h: 64
      }), this.fillType3 = _(this.secondaryColor, {
        h: 64
      }), this.fillType4 = _(this.primaryColor, {
        h: -64
      }), this.fillType5 = _(this.secondaryColor, {
        h: -64
      }), this.fillType6 = _(this.primaryColor, {
        h: 128
      }), this.fillType7 = _(this.secondaryColor, {
        h: 128
      });
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["pie" + k] = this["cScale" + k];
      this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || _(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      }), this.quadrant3Fill = this.quadrant3Fill || _(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      }), this.quadrant4Fill = this.quadrant4Fill || _(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || _(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      }), this.quadrant3TextFill = this.quadrant3TextFill || _(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      }), this.quadrant4TextFill = this.quadrant4TextFill || _(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      }), this.quadrantPointFill = this.quadrantPointFill || wi(this.quadrant1Fill) ? G(this.quadrant1Fill) : rt(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
        backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
        titleColor: ((t = this.xyChart) == null ? void 0 : t.titleColor) || this.primaryTextColor,
        xAxisTitleColor: ((r = this.xyChart) == null ? void 0 : r.xAxisTitleColor) || this.primaryTextColor,
        xAxisLabelColor: ((i = this.xyChart) == null ? void 0 : i.xAxisLabelColor) || this.primaryTextColor,
        xAxisTickColor: ((n = this.xyChart) == null ? void 0 : n.xAxisTickColor) || this.primaryTextColor,
        xAxisLineColor: ((a = this.xyChart) == null ? void 0 : a.xAxisLineColor) || this.primaryTextColor,
        yAxisTitleColor: ((s = this.xyChart) == null ? void 0 : s.yAxisTitleColor) || this.primaryTextColor,
        yAxisLabelColor: ((o = this.xyChart) == null ? void 0 : o.yAxisLabelColor) || this.primaryTextColor,
        yAxisTickColor: ((l = this.xyChart) == null ? void 0 : l.yAxisTickColor) || this.primaryTextColor,
        yAxisLineColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLineColor) || this.primaryTextColor,
        plotColorPalette: ((c = this.xyChart) == null ? void 0 : c.plotColorPalette) || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
      }, this.radar = {
        axisColor: ((d = this.radar) == null ? void 0 : d.axisColor) || this.lineColor,
        axisStrokeWidth: ((u = this.radar) == null ? void 0 : u.axisStrokeWidth) || 2,
        axisLabelFontSize: ((p = this.radar) == null ? void 0 : p.axisLabelFontSize) || 12,
        curveOpacity: ((f = this.radar) == null ? void 0 : f.curveOpacity) || 0.5,
        curveStrokeWidth: ((m = this.radar) == null ? void 0 : m.curveStrokeWidth) || 2,
        graticuleColor: ((y = this.radar) == null ? void 0 : y.graticuleColor) || "#DEDEDE",
        graticuleStrokeWidth: ((x = this.radar) == null ? void 0 : x.graticuleStrokeWidth) || 1,
        graticuleOpacity: ((b = this.radar) == null ? void 0 : b.graticuleOpacity) || 0.3,
        legendBoxSize: ((C = this.radar) == null ? void 0 : C.legendBoxSize) || 12,
        legendFontSize: ((S = this.radar) == null ? void 0 : S.legendFontSize) || 12
      }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = rt(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || _(this.primaryColor, {
        h: -30
      }), this.git4 = this.pie5 || _(this.primaryColor, {
        h: -60
      }), this.git5 = this.pie6 || _(this.primaryColor, {
        h: -90
      }), this.git6 = this.pie7 || _(this.primaryColor, {
        h: 60
      }), this.git7 = this.pie8 || _(this.primaryColor, {
        h: 120
      }), this.gitInv0 = this.gitInv0 || U(this.git0), this.gitInv1 = this.gitInv1 || U(this.git1), this.gitInv2 = this.gitInv2 || U(this.git2), this.gitInv3 = this.gitInv3 || U(this.git3), this.gitInv4 = this.gitInv4 || U(this.git4), this.gitInv5 = this.gitInv5 || U(this.git5), this.gitInv6 = this.gitInv6 || U(this.git6), this.gitInv7 = this.gitInv7 || U(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || zn, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Rn;
    }
    calculate(e) {
      if (typeof e != "object") {
        this.updateColors();
        return;
      }
      const t = Object.keys(e);
      t.forEach((r) => {
        this[r] = e[r];
      }), this.updateColors(), t.forEach((r) => {
        this[r] = e[r];
      });
    }
  }, g(Ba, "Theme"), Ba);
  T0 = g((e) => {
    const t = new S0();
    return t.calculate(e), t;
  }, "getThemeVariables");
  Me = {
    base: {
      getThemeVariables: x0
    },
    dark: {
      getThemeVariables: k0
    },
    default: {
      getThemeVariables: v0
    },
    forest: {
      getThemeVariables: _0
    },
    neutral: {
      getThemeVariables: T0
    }
  };
  we = {
    flowchart: {
      useMaxWidth: true,
      titleTopMargin: 25,
      subGraphTitleMargin: {
        top: 0,
        bottom: 0
      },
      diagramPadding: 8,
      htmlLabels: true,
      nodeSpacing: 50,
      rankSpacing: 50,
      curve: "basis",
      padding: 15,
      defaultRenderer: "dagre-wrapper",
      wrappingWidth: 200
    },
    sequence: {
      useMaxWidth: true,
      hideUnusedParticipants: false,
      activationWidth: 10,
      diagramMarginX: 50,
      diagramMarginY: 10,
      actorMargin: 50,
      width: 150,
      height: 65,
      boxMargin: 10,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35,
      messageAlign: "center",
      mirrorActors: true,
      forceMenus: false,
      bottomMarginAdj: 1,
      rightAngles: false,
      showSequenceNumbers: false,
      actorFontSize: 14,
      actorFontFamily: '"Open Sans", sans-serif',
      actorFontWeight: 400,
      noteFontSize: 14,
      noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
      noteFontWeight: 400,
      noteAlign: "center",
      messageFontSize: 16,
      messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
      messageFontWeight: 400,
      wrap: false,
      wrapPadding: 10,
      labelBoxWidth: 50,
      labelBoxHeight: 20
    },
    gantt: {
      useMaxWidth: true,
      titleTopMargin: 25,
      barHeight: 20,
      barGap: 4,
      topPadding: 50,
      rightPadding: 75,
      leftPadding: 75,
      gridLineStartPadding: 35,
      fontSize: 11,
      sectionFontSize: 11,
      numberSectionStyles: 4,
      axisFormat: "%Y-%m-%d",
      topAxis: false,
      displayMode: "",
      weekday: "sunday"
    },
    journey: {
      useMaxWidth: true,
      diagramMarginX: 50,
      diagramMarginY: 10,
      leftMargin: 150,
      width: 150,
      height: 50,
      boxMargin: 10,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35,
      messageAlign: "center",
      bottomMarginAdj: 1,
      rightAngles: false,
      taskFontSize: 14,
      taskFontFamily: '"Open Sans", sans-serif',
      taskMargin: 50,
      activationWidth: 10,
      textPlacement: "fo",
      actorColours: [
        "#8FBC8F",
        "#7CFC00",
        "#00FFFF",
        "#20B2AA",
        "#B0E0E6",
        "#FFFFE0"
      ],
      sectionFills: [
        "#191970",
        "#8B008B",
        "#4B0082",
        "#2F4F4F",
        "#800000",
        "#8B4513",
        "#00008B"
      ],
      sectionColours: [
        "#fff"
      ]
    },
    class: {
      useMaxWidth: true,
      titleTopMargin: 25,
      arrowMarkerAbsolute: false,
      dividerMargin: 10,
      padding: 5,
      textHeight: 10,
      defaultRenderer: "dagre-wrapper",
      htmlLabels: false,
      hideEmptyMembersBox: false
    },
    state: {
      useMaxWidth: true,
      titleTopMargin: 25,
      dividerMargin: 10,
      sizeUnit: 5,
      padding: 8,
      textHeight: 10,
      titleShift: -15,
      noteMargin: 10,
      forkWidth: 70,
      forkHeight: 7,
      miniPadding: 2,
      fontSizeFactor: 5.02,
      fontSize: 24,
      labelHeight: 16,
      edgeLengthFactor: "20",
      compositTitleSize: 35,
      radius: 5,
      defaultRenderer: "dagre-wrapper"
    },
    er: {
      useMaxWidth: true,
      titleTopMargin: 25,
      diagramPadding: 20,
      layoutDirection: "TB",
      minEntityWidth: 100,
      minEntityHeight: 75,
      entityPadding: 15,
      nodeSpacing: 140,
      rankSpacing: 80,
      stroke: "gray",
      fill: "honeydew",
      fontSize: 12
    },
    pie: {
      useMaxWidth: true,
      textPosition: 0.75
    },
    quadrantChart: {
      useMaxWidth: true,
      chartWidth: 500,
      chartHeight: 500,
      titleFontSize: 20,
      titlePadding: 10,
      quadrantPadding: 5,
      xAxisLabelPadding: 5,
      yAxisLabelPadding: 5,
      xAxisLabelFontSize: 16,
      yAxisLabelFontSize: 16,
      quadrantLabelFontSize: 16,
      quadrantTextTopPadding: 5,
      pointTextPadding: 5,
      pointLabelFontSize: 12,
      pointRadius: 5,
      xAxisPosition: "top",
      yAxisPosition: "left",
      quadrantInternalBorderStrokeWidth: 1,
      quadrantExternalBorderStrokeWidth: 2
    },
    xyChart: {
      useMaxWidth: true,
      width: 700,
      height: 500,
      titleFontSize: 20,
      titlePadding: 10,
      showTitle: true,
      xAxis: {
        $ref: "#/$defs/XYChartAxisConfig",
        showLabel: true,
        labelFontSize: 14,
        labelPadding: 5,
        showTitle: true,
        titleFontSize: 16,
        titlePadding: 5,
        showTick: true,
        tickLength: 5,
        tickWidth: 2,
        showAxisLine: true,
        axisLineWidth: 2
      },
      yAxis: {
        $ref: "#/$defs/XYChartAxisConfig",
        showLabel: true,
        labelFontSize: 14,
        labelPadding: 5,
        showTitle: true,
        titleFontSize: 16,
        titlePadding: 5,
        showTick: true,
        tickLength: 5,
        tickWidth: 2,
        showAxisLine: true,
        axisLineWidth: 2
      },
      chartOrientation: "vertical",
      plotReservedSpacePercent: 50
    },
    requirement: {
      useMaxWidth: true,
      rect_fill: "#f9f9f9",
      text_color: "#333",
      rect_border_size: "0.5px",
      rect_border_color: "#bbb",
      rect_min_width: 200,
      rect_min_height: 200,
      fontSize: 14,
      rect_padding: 10,
      line_height: 20
    },
    mindmap: {
      useMaxWidth: true,
      padding: 10,
      maxNodeWidth: 200
    },
    kanban: {
      useMaxWidth: true,
      padding: 8,
      sectionWidth: 200,
      ticketBaseUrl: ""
    },
    timeline: {
      useMaxWidth: true,
      diagramMarginX: 50,
      diagramMarginY: 10,
      leftMargin: 150,
      width: 150,
      height: 50,
      boxMargin: 10,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35,
      messageAlign: "center",
      bottomMarginAdj: 1,
      rightAngles: false,
      taskFontSize: 14,
      taskFontFamily: '"Open Sans", sans-serif',
      taskMargin: 50,
      activationWidth: 10,
      textPlacement: "fo",
      actorColours: [
        "#8FBC8F",
        "#7CFC00",
        "#00FFFF",
        "#20B2AA",
        "#B0E0E6",
        "#FFFFE0"
      ],
      sectionFills: [
        "#191970",
        "#8B008B",
        "#4B0082",
        "#2F4F4F",
        "#800000",
        "#8B4513",
        "#00008B"
      ],
      sectionColours: [
        "#fff"
      ],
      disableMulticolor: false
    },
    gitGraph: {
      useMaxWidth: true,
      titleTopMargin: 25,
      diagramPadding: 8,
      nodeLabel: {
        width: 75,
        height: 100,
        x: -25,
        y: 0
      },
      mainBranchName: "main",
      mainBranchOrder: 0,
      showCommitLabel: true,
      showBranches: true,
      rotateCommitLabel: true,
      parallelCommits: false,
      arrowMarkerAbsolute: false
    },
    c4: {
      useMaxWidth: true,
      diagramMarginX: 50,
      diagramMarginY: 10,
      c4ShapeMargin: 50,
      c4ShapePadding: 20,
      width: 216,
      height: 60,
      boxMargin: 10,
      c4ShapeInRow: 4,
      nextLinePaddingX: 0,
      c4BoundaryInRow: 2,
      personFontSize: 14,
      personFontFamily: '"Open Sans", sans-serif',
      personFontWeight: "normal",
      external_personFontSize: 14,
      external_personFontFamily: '"Open Sans", sans-serif',
      external_personFontWeight: "normal",
      systemFontSize: 14,
      systemFontFamily: '"Open Sans", sans-serif',
      systemFontWeight: "normal",
      external_systemFontSize: 14,
      external_systemFontFamily: '"Open Sans", sans-serif',
      external_systemFontWeight: "normal",
      system_dbFontSize: 14,
      system_dbFontFamily: '"Open Sans", sans-serif',
      system_dbFontWeight: "normal",
      external_system_dbFontSize: 14,
      external_system_dbFontFamily: '"Open Sans", sans-serif',
      external_system_dbFontWeight: "normal",
      system_queueFontSize: 14,
      system_queueFontFamily: '"Open Sans", sans-serif',
      system_queueFontWeight: "normal",
      external_system_queueFontSize: 14,
      external_system_queueFontFamily: '"Open Sans", sans-serif',
      external_system_queueFontWeight: "normal",
      boundaryFontSize: 14,
      boundaryFontFamily: '"Open Sans", sans-serif',
      boundaryFontWeight: "normal",
      messageFontSize: 12,
      messageFontFamily: '"Open Sans", sans-serif',
      messageFontWeight: "normal",
      containerFontSize: 14,
      containerFontFamily: '"Open Sans", sans-serif',
      containerFontWeight: "normal",
      external_containerFontSize: 14,
      external_containerFontFamily: '"Open Sans", sans-serif',
      external_containerFontWeight: "normal",
      container_dbFontSize: 14,
      container_dbFontFamily: '"Open Sans", sans-serif',
      container_dbFontWeight: "normal",
      external_container_dbFontSize: 14,
      external_container_dbFontFamily: '"Open Sans", sans-serif',
      external_container_dbFontWeight: "normal",
      container_queueFontSize: 14,
      container_queueFontFamily: '"Open Sans", sans-serif',
      container_queueFontWeight: "normal",
      external_container_queueFontSize: 14,
      external_container_queueFontFamily: '"Open Sans", sans-serif',
      external_container_queueFontWeight: "normal",
      componentFontSize: 14,
      componentFontFamily: '"Open Sans", sans-serif',
      componentFontWeight: "normal",
      external_componentFontSize: 14,
      external_componentFontFamily: '"Open Sans", sans-serif',
      external_componentFontWeight: "normal",
      component_dbFontSize: 14,
      component_dbFontFamily: '"Open Sans", sans-serif',
      component_dbFontWeight: "normal",
      external_component_dbFontSize: 14,
      external_component_dbFontFamily: '"Open Sans", sans-serif',
      external_component_dbFontWeight: "normal",
      component_queueFontSize: 14,
      component_queueFontFamily: '"Open Sans", sans-serif',
      component_queueFontWeight: "normal",
      external_component_queueFontSize: 14,
      external_component_queueFontFamily: '"Open Sans", sans-serif',
      external_component_queueFontWeight: "normal",
      wrap: true,
      wrapPadding: 10,
      person_bg_color: "#08427B",
      person_border_color: "#073B6F",
      external_person_bg_color: "#686868",
      external_person_border_color: "#8A8A8A",
      system_bg_color: "#1168BD",
      system_border_color: "#3C7FC0",
      system_db_bg_color: "#1168BD",
      system_db_border_color: "#3C7FC0",
      system_queue_bg_color: "#1168BD",
      system_queue_border_color: "#3C7FC0",
      external_system_bg_color: "#999999",
      external_system_border_color: "#8A8A8A",
      external_system_db_bg_color: "#999999",
      external_system_db_border_color: "#8A8A8A",
      external_system_queue_bg_color: "#999999",
      external_system_queue_border_color: "#8A8A8A",
      container_bg_color: "#438DD5",
      container_border_color: "#3C7FC0",
      container_db_bg_color: "#438DD5",
      container_db_border_color: "#3C7FC0",
      container_queue_bg_color: "#438DD5",
      container_queue_border_color: "#3C7FC0",
      external_container_bg_color: "#B3B3B3",
      external_container_border_color: "#A6A6A6",
      external_container_db_bg_color: "#B3B3B3",
      external_container_db_border_color: "#A6A6A6",
      external_container_queue_bg_color: "#B3B3B3",
      external_container_queue_border_color: "#A6A6A6",
      component_bg_color: "#85BBF0",
      component_border_color: "#78A8D8",
      component_db_bg_color: "#85BBF0",
      component_db_border_color: "#78A8D8",
      component_queue_bg_color: "#85BBF0",
      component_queue_border_color: "#78A8D8",
      external_component_bg_color: "#CCCCCC",
      external_component_border_color: "#BFBFBF",
      external_component_db_bg_color: "#CCCCCC",
      external_component_db_border_color: "#BFBFBF",
      external_component_queue_bg_color: "#CCCCCC",
      external_component_queue_border_color: "#BFBFBF"
    },
    sankey: {
      useMaxWidth: true,
      width: 600,
      height: 400,
      linkColor: "gradient",
      nodeAlignment: "justify",
      showValues: true,
      prefix: "",
      suffix: ""
    },
    block: {
      useMaxWidth: true,
      padding: 8
    },
    packet: {
      useMaxWidth: true,
      rowHeight: 32,
      bitWidth: 32,
      bitsPerRow: 32,
      showBits: true,
      paddingX: 5,
      paddingY: 5
    },
    architecture: {
      useMaxWidth: true,
      padding: 40,
      iconSize: 80,
      fontSize: 16
    },
    radar: {
      useMaxWidth: true,
      width: 600,
      height: 600,
      marginTop: 50,
      marginRight: 50,
      marginBottom: 50,
      marginLeft: 50,
      axisScaleFactor: 1,
      axisLabelFactor: 1.05,
      curveTension: 0.17
    },
    theme: "default",
    look: "classic",
    handDrawnSeed: 0,
    layout: "dagre",
    maxTextSize: 5e4,
    maxEdges: 500,
    darkMode: false,
    fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
    logLevel: 5,
    securityLevel: "strict",
    startOnLoad: true,
    arrowMarkerAbsolute: false,
    secure: [
      "secure",
      "securityLevel",
      "startOnLoad",
      "maxTextSize",
      "suppressErrorRendering",
      "maxEdges"
    ],
    legacyMathML: false,
    forceLegacyMathML: false,
    deterministicIds: false,
    fontSize: 16,
    markdownAutoWrap: true,
    suppressErrorRendering: false
  };
  Ih = {
    ...we,
    deterministicIDSeed: void 0,
    elk: {
      mergeEdges: false,
      nodePlacementStrategy: "BRANDES_KOEPF"
    },
    themeCSS: void 0,
    themeVariables: Me.default.getThemeVariables(),
    sequence: {
      ...we.sequence,
      messageFont: g(function() {
        return {
          fontFamily: this.messageFontFamily,
          fontSize: this.messageFontSize,
          fontWeight: this.messageFontWeight
        };
      }, "messageFont"),
      noteFont: g(function() {
        return {
          fontFamily: this.noteFontFamily,
          fontSize: this.noteFontSize,
          fontWeight: this.noteFontWeight
        };
      }, "noteFont"),
      actorFont: g(function() {
        return {
          fontFamily: this.actorFontFamily,
          fontSize: this.actorFontSize,
          fontWeight: this.actorFontWeight
        };
      }, "actorFont")
    },
    class: {
      hideEmptyMembersBox: false
    },
    gantt: {
      ...we.gantt,
      tickInterval: void 0,
      useWidth: void 0
    },
    c4: {
      ...we.c4,
      useWidth: void 0,
      personFont: g(function() {
        return {
          fontFamily: this.personFontFamily,
          fontSize: this.personFontSize,
          fontWeight: this.personFontWeight
        };
      }, "personFont"),
      external_personFont: g(function() {
        return {
          fontFamily: this.external_personFontFamily,
          fontSize: this.external_personFontSize,
          fontWeight: this.external_personFontWeight
        };
      }, "external_personFont"),
      systemFont: g(function() {
        return {
          fontFamily: this.systemFontFamily,
          fontSize: this.systemFontSize,
          fontWeight: this.systemFontWeight
        };
      }, "systemFont"),
      external_systemFont: g(function() {
        return {
          fontFamily: this.external_systemFontFamily,
          fontSize: this.external_systemFontSize,
          fontWeight: this.external_systemFontWeight
        };
      }, "external_systemFont"),
      system_dbFont: g(function() {
        return {
          fontFamily: this.system_dbFontFamily,
          fontSize: this.system_dbFontSize,
          fontWeight: this.system_dbFontWeight
        };
      }, "system_dbFont"),
      external_system_dbFont: g(function() {
        return {
          fontFamily: this.external_system_dbFontFamily,
          fontSize: this.external_system_dbFontSize,
          fontWeight: this.external_system_dbFontWeight
        };
      }, "external_system_dbFont"),
      system_queueFont: g(function() {
        return {
          fontFamily: this.system_queueFontFamily,
          fontSize: this.system_queueFontSize,
          fontWeight: this.system_queueFontWeight
        };
      }, "system_queueFont"),
      external_system_queueFont: g(function() {
        return {
          fontFamily: this.external_system_queueFontFamily,
          fontSize: this.external_system_queueFontSize,
          fontWeight: this.external_system_queueFontWeight
        };
      }, "external_system_queueFont"),
      containerFont: g(function() {
        return {
          fontFamily: this.containerFontFamily,
          fontSize: this.containerFontSize,
          fontWeight: this.containerFontWeight
        };
      }, "containerFont"),
      external_containerFont: g(function() {
        return {
          fontFamily: this.external_containerFontFamily,
          fontSize: this.external_containerFontSize,
          fontWeight: this.external_containerFontWeight
        };
      }, "external_containerFont"),
      container_dbFont: g(function() {
        return {
          fontFamily: this.container_dbFontFamily,
          fontSize: this.container_dbFontSize,
          fontWeight: this.container_dbFontWeight
        };
      }, "container_dbFont"),
      external_container_dbFont: g(function() {
        return {
          fontFamily: this.external_container_dbFontFamily,
          fontSize: this.external_container_dbFontSize,
          fontWeight: this.external_container_dbFontWeight
        };
      }, "external_container_dbFont"),
      container_queueFont: g(function() {
        return {
          fontFamily: this.container_queueFontFamily,
          fontSize: this.container_queueFontSize,
          fontWeight: this.container_queueFontWeight
        };
      }, "container_queueFont"),
      external_container_queueFont: g(function() {
        return {
          fontFamily: this.external_container_queueFontFamily,
          fontSize: this.external_container_queueFontSize,
          fontWeight: this.external_container_queueFontWeight
        };
      }, "external_container_queueFont"),
      componentFont: g(function() {
        return {
          fontFamily: this.componentFontFamily,
          fontSize: this.componentFontSize,
          fontWeight: this.componentFontWeight
        };
      }, "componentFont"),
      external_componentFont: g(function() {
        return {
          fontFamily: this.external_componentFontFamily,
          fontSize: this.external_componentFontSize,
          fontWeight: this.external_componentFontWeight
        };
      }, "external_componentFont"),
      component_dbFont: g(function() {
        return {
          fontFamily: this.component_dbFontFamily,
          fontSize: this.component_dbFontSize,
          fontWeight: this.component_dbFontWeight
        };
      }, "component_dbFont"),
      external_component_dbFont: g(function() {
        return {
          fontFamily: this.external_component_dbFontFamily,
          fontSize: this.external_component_dbFontSize,
          fontWeight: this.external_component_dbFontWeight
        };
      }, "external_component_dbFont"),
      component_queueFont: g(function() {
        return {
          fontFamily: this.component_queueFontFamily,
          fontSize: this.component_queueFontSize,
          fontWeight: this.component_queueFontWeight
        };
      }, "component_queueFont"),
      external_component_queueFont: g(function() {
        return {
          fontFamily: this.external_component_queueFontFamily,
          fontSize: this.external_component_queueFontSize,
          fontWeight: this.external_component_queueFontWeight
        };
      }, "external_component_queueFont"),
      boundaryFont: g(function() {
        return {
          fontFamily: this.boundaryFontFamily,
          fontSize: this.boundaryFontSize,
          fontWeight: this.boundaryFontWeight
        };
      }, "boundaryFont"),
      messageFont: g(function() {
        return {
          fontFamily: this.messageFontFamily,
          fontSize: this.messageFontSize,
          fontWeight: this.messageFontWeight
        };
      }, "messageFont")
    },
    pie: {
      ...we.pie,
      useWidth: 984
    },
    xyChart: {
      ...we.xyChart,
      useWidth: void 0
    },
    requirement: {
      ...we.requirement,
      useWidth: void 0
    },
    packet: {
      ...we.packet
    },
    radar: {
      ...we.radar
    }
  };
  Ph = g((e, t = "") => Object.keys(e).reduce((r, i) => Array.isArray(e[i]) ? r : typeof e[i] == "object" && e[i] !== null ? [
    ...r,
    t + i,
    ...Ph(e[i], "")
  ] : [
    ...r,
    t + i
  ], []), "keyify");
  B0 = new Set(Ph(Ih, ""));
  zh = Ih;
  ln = g((e) => {
    if (D.debug("sanitizeDirective called with", e), !(typeof e != "object" || e == null)) {
      if (Array.isArray(e)) {
        e.forEach((t) => ln(t));
        return;
      }
      for (const t of Object.keys(e)) {
        if (D.debug("Checking key", t), t.startsWith("__") || t.includes("proto") || t.includes("constr") || !B0.has(t) || e[t] == null) {
          D.debug("sanitize deleting key: ", t), delete e[t];
          continue;
        }
        if (typeof e[t] == "object") {
          D.debug("sanitizing object", t), ln(e[t]);
          continue;
        }
        const r = [
          "themeCSS",
          "fontFamily",
          "altFontFamily"
        ];
        for (const i of r)
          t.includes(i) && (D.debug("sanitizing css option", t), e[t] = L0(e[t]));
      }
      if (e.themeVariables)
        for (const t of Object.keys(e.themeVariables)) {
          const r = e.themeVariables[t];
          r != null && r.match && !r.match(/^[\d "#%(),.;A-Za-z]+$/) && (e.themeVariables[t] = "");
        }
      D.debug("After sanitization", e);
    }
  }, "sanitizeDirective");
  L0 = g((e) => {
    let t = 0, r = 0;
    for (const i of e) {
      if (t < r)
        return "{ /* ERROR: Unbalanced CSS */ }";
      i === "{" ? t++ : i === "}" && r++;
    }
    return t !== r ? "{ /* ERROR: Unbalanced CSS */ }" : e;
  }, "sanitizeCss");
  Lr = Object.freeze(zh);
  Zt = It({}, Lr);
  Mr = [];
  di = It({}, Lr);
  Nn = g((e, t) => {
    let r = It({}, e), i = {};
    for (const n of t)
      jh(n), i = It(i, n);
    if (r = It(r, i), i.theme && i.theme in Me) {
      const n = It({}, Rh), a = It(n.themeVariables || {}, i.themeVariables);
      r.theme && r.theme in Me && (r.themeVariables = Me[r.theme].getThemeVariables(a));
    }
    return di = r, Wh(di), di;
  }, "updateCurrentConfig");
  M0 = g((e) => (Zt = It({}, Lr), Zt = It(Zt, e), e.theme && Me[e.theme] && (Zt.themeVariables = Me[e.theme].getThemeVariables(e.themeVariables)), Nn(Zt, Mr), Zt), "setSiteConfig");
  A0 = g((e) => {
    Rh = It({}, e);
  }, "saveConfigFromInitialize");
  F0 = g((e) => (Zt = It(Zt, e), Nn(Zt, Mr), Zt), "updateSiteConfig");
  Nh = g(() => It({}, Zt), "getSiteConfig");
  qh = g((e) => (Wh(e), It(di, e), Kt()), "setConfig");
  Kt = g(() => It({}, di), "getConfig");
  jh = g((e) => {
    e && ([
      "secure",
      ...Zt.secure ?? []
    ].forEach((t) => {
      Object.hasOwn(e, t) && (D.debug(`Denied attempt to modify a secure key ${t}`, e[t]), delete e[t]);
    }), Object.keys(e).forEach((t) => {
      t.startsWith("__") && delete e[t];
    }), Object.keys(e).forEach((t) => {
      typeof e[t] == "string" && (e[t].includes("<") || e[t].includes(">") || e[t].includes("url(data:")) && delete e[t], typeof e[t] == "object" && jh(e[t]);
    }));
  }, "sanitize");
  $0 = g((e) => {
    var t;
    ln(e), e.fontFamily && !((t = e.themeVariables) != null && t.fontFamily) && (e.themeVariables = {
      ...e.themeVariables,
      fontFamily: e.fontFamily
    }), Mr.push(e), Nn(Zt, Mr);
  }, "addDirective");
  hn = g((e = Zt) => {
    Mr = [], Nn(e, Mr);
  }, "reset");
  E0 = {
    LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
  };
  dl = {};
  O0 = g((e) => {
    dl[e] || (D.warn(E0[e]), dl[e] = true);
  }, "issueWarning");
  Wh = g((e) => {
    e && (e.lazyLoadedDiagrams || e.loadExternalDiagramsAtStartup) && O0("LAZY_LOAD_DEPRECATED");
  }, "checkConfig");
  _i = /<br\s*\/?>/gi;
  D0 = g((e) => e ? Uh(e).replace(/\\n/g, "#br#").split("#br#") : [
    ""
  ], "getRows");
  I0 = (() => {
    let e = false;
    return () => {
      e || (Hh(), e = true);
    };
  })();
  function Hh() {
    const e = "data-temp-href-target";
    Tr.addHook("beforeSanitizeAttributes", (t) => {
      t instanceof Element && t.tagName === "A" && t.hasAttribute("target") && t.setAttribute(e, t.getAttribute("target") ?? "");
    }), Tr.addHook("afterSanitizeAttributes", (t) => {
      t instanceof Element && t.tagName === "A" && t.hasAttribute(e) && (t.setAttribute("target", t.getAttribute(e) ?? ""), t.removeAttribute(e), t.getAttribute("target") === "_blank" && t.setAttribute("rel", "noopener"));
    });
  }
  g(Hh, "setupDompurifyHooks");
  let Yh, ul, P0, z0, R0, N0, Uh, q0, j0, W0, Ka, H0, Y0, gl, Ja, U0, V0, Qi, X0, Z0, Q0;
  Yh = g((e) => (I0(), Tr.sanitize(e)), "removeScript");
  ul = g((e, t) => {
    var r;
    if (((r = t.flowchart) == null ? void 0 : r.htmlLabels) !== false) {
      const i = t.securityLevel;
      i === "antiscript" || i === "strict" ? e = Yh(e) : i !== "loose" && (e = Uh(e), e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;"), e = e.replace(/=/g, "&equals;"), e = N0(e));
    }
    return e;
  }, "sanitizeMore");
  rr = g((e, t) => e && (t.dompurifyConfig ? e = Tr.sanitize(ul(e, t), t.dompurifyConfig).toString() : e = Tr.sanitize(ul(e, t), {
    FORBID_TAGS: [
      "style"
    ]
  }).toString(), e), "sanitizeText");
  P0 = g((e, t) => typeof e == "string" ? rr(e, t) : e.flat().map((r) => rr(r, t)), "sanitizeTextOrArray");
  z0 = g((e) => _i.test(e), "hasBreaks");
  R0 = g((e) => e.split(_i), "splitBreaks");
  N0 = g((e) => e.replace(/#br#/g, "<br/>"), "placeholderToBreak");
  Uh = g((e) => e.replace(_i, "#br#"), "breakToPlaceholder");
  q0 = g((e) => {
    let t = "";
    return e && (t = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, t = t.replaceAll(/\(/g, "\\("), t = t.replaceAll(/\)/g, "\\)")), t;
  }, "getUrl");
  Mt = g((e) => !(e === false || [
    "false",
    "null",
    "0"
  ].includes(String(e).trim().toLowerCase())), "evaluate");
  j0 = g(function(...e) {
    const t = e.filter((r) => !isNaN(r));
    return Math.max(...t);
  }, "getMax");
  W0 = g(function(...e) {
    const t = e.filter((r) => !isNaN(r));
    return Math.min(...t);
  }, "getMin");
  pl = g(function(e) {
    const t = e.split(/(,)/), r = [];
    for (let i = 0; i < t.length; i++) {
      let n = t[i];
      if (n === "," && i > 0 && i + 1 < t.length) {
        const a = t[i - 1], s = t[i + 1];
        H0(a, s) && (n = a + "," + s, i++, r.pop());
      }
      r.push(Y0(n));
    }
    return r.join("");
  }, "parseGenericTypes");
  Ka = g((e, t) => Math.max(0, e.split(t).length - 1), "countOccurrence");
  H0 = g((e, t) => {
    const r = Ka(e, "~"), i = Ka(t, "~");
    return r === 1 && i === 1;
  }, "shouldCombineSets");
  Y0 = g((e) => {
    const t = Ka(e, "~");
    let r = false;
    if (t <= 1)
      return e;
    t % 2 !== 0 && e.startsWith("~") && (e = e.substring(1), r = true);
    const i = [
      ...e
    ];
    let n = i.indexOf("~"), a = i.lastIndexOf("~");
    for (; n !== -1 && a !== -1 && n !== a; )
      i[n] = "<", i[a] = ">", n = i.indexOf("~"), a = i.lastIndexOf("~");
    return r && i.unshift("~"), i.join("");
  }, "processSet");
  gl = g(() => window.MathMLElement !== void 0, "isMathMLSupported");
  Ja = /\$\$(.*)\$\$/g;
  Ar = g((e) => {
    var t;
    return (((t = e.match(Ja)) == null ? void 0 : t.length) ?? 0) > 0;
  }, "hasKatex");
  F_ = g(async (e, t) => {
    e = await No(e, t);
    const r = document.createElement("div");
    r.innerHTML = e, r.id = "katex-temp", r.style.visibility = "hidden", r.style.position = "absolute", r.style.top = "0";
    const i = document.querySelector("body");
    i == null ? void 0 : i.insertAdjacentElement("beforeend", r);
    const n = {
      width: r.clientWidth,
      height: r.clientHeight
    };
    return r.remove(), n;
  }, "calculateMathMLDimensions");
  No = g(async (e, t) => {
    if (!Ar(e))
      return e;
    if (!(gl() || t.legacyMathML || t.forceLegacyMathML))
      return e.replace(Ja, "MathML is unsupported in this environment.");
    const { default: r } = await mt(() => import("./katex-9tX9hjoM-650ee6bf.js"), []), i = t.forceLegacyMathML || !gl() && t.legacyMathML ? "htmlAndMathml" : "mathml";
    return e.split(_i).map((n) => Ar(n) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${n}</div>` : `<div>${n}</div>`).join("").replace(Ja, (n, a) => r.renderToString(a, {
      throwOnError: true,
      displayMode: true,
      output: i
    }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, ""));
  }, "renderKatex");
  Dr = {
    getRows: D0,
    sanitizeText: rr,
    sanitizeTextOrArray: P0,
    hasBreaks: z0,
    splitBreaks: R0,
    lineBreakRegex: _i,
    removeScript: Yh,
    getUrl: q0,
    evaluate: Mt,
    getMax: j0,
    getMin: W0
  };
  U0 = g(function(e, t) {
    for (let r of t)
      e.attr(r[0], r[1]);
  }, "d3Attrs");
  V0 = g(function(e, t, r) {
    let i = /* @__PURE__ */ new Map();
    return r ? (i.set("width", "100%"), i.set("style", `max-width: ${t}px;`)) : (i.set("height", e), i.set("width", t)), i;
  }, "calculateSvgSizeAttrs");
  Vh = g(function(e, t, r, i) {
    const n = V0(t, r, i);
    U0(e, n);
  }, "configureSvgSize");
  G0 = g(function(e, t, r, i) {
    const n = t.node().getBBox(), a = n.width, s = n.height;
    D.info(`SVG bounds: ${a}x${s}`, n);
    let o = 0, l = 0;
    D.info(`Graph bounds: ${o}x${l}`, e), o = a + r * 2, l = s + r * 2, D.info(`Calculated bounds: ${o}x${l}`), Vh(t, l, o, i);
    const h = `${n.x - r} ${n.y - r} ${n.width + 2 * r} ${n.height + 2 * r}`;
    t.attr("viewBox", h);
  }, "setupGraphViewbox");
  Qi = {};
  X0 = g((e, t, r) => {
    let i = "";
    return e in Qi && Qi[e] ? i = Qi[e](r) : D.warn(`No theme found for ${e}`), ` & {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
    fill: ${r.textColor}
  }
  @keyframes edge-animation-frame {
    from {
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  & .edge-animation-slow {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 50s linear infinite;
    stroke-linecap: round;
  }
  & .edge-animation-fast {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 20s linear infinite;
    stroke-linecap: round;
  }
  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${r.errorBkgColor};
  }
  & .error-text {
    fill: ${r.errorTextColor};
    stroke: ${r.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 1px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }
  & .edge-thickness-invisible {
    stroke-width: 0;
    fill: none;
  }
  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${r.lineColor};
    stroke: ${r.lineColor};
  }
  & .marker.cross {
    stroke: ${r.lineColor};
  }

  & svg {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
  }
   & p {
    margin: 0
   }

  ${i}

  ${t}
`;
  }, "getStyles");
  Z0 = g((e, t) => {
    t !== void 0 && (Qi[e] = t);
  }, "addStylesForDiagram");
  Q0 = X0;
  Gh = {};
  g0(Gh, {
    clear: () => K0,
    getAccDescription: () => rm,
    getAccTitle: () => tm,
    getDiagramTitle: () => nm,
    setAccDescription: () => em,
    setAccTitle: () => J0,
    setDiagramTitle: () => im
  });
  let qo, jo, Wo, Ho, fl, am, Yo, sm, cn, dn, to, La, lm;
  qo = "";
  jo = "";
  Wo = "";
  Ho = g((e) => rr(e, Kt()), "sanitizeText");
  K0 = g(() => {
    qo = "", Wo = "", jo = "";
  }, "clear");
  J0 = g((e) => {
    qo = Ho(e).replace(/^\s+/g, "");
  }, "setAccTitle");
  tm = g(() => qo, "getAccTitle");
  em = g((e) => {
    Wo = Ho(e).replace(/\n\s+/g, `
`);
  }, "setAccDescription");
  rm = g(() => Wo, "getAccDescription");
  im = g((e) => {
    jo = Ho(e);
  }, "setDiagramTitle");
  nm = g(() => jo, "getDiagramTitle");
  fl = D;
  am = zo;
  dt = Kt;
  $_ = qh;
  E_ = Lr;
  Yo = g((e) => rr(e, dt()), "sanitizeText");
  om = G0;
  sm = g(() => Gh, "getCommonDb");
  cn = {};
  dn = g((e, t, r) => {
    var i;
    cn[e] && fl.warn(`Diagram with id ${e} already registered. Overwriting.`), cn[e] = t, r && Dh(e, r), Z0(e, t.styles), (i = t.injectUtils) == null || i.call(t, fl, am, dt, Yo, om, sm(), () => {
    });
  }, "registerDiagram");
  to = g((e) => {
    if (e in cn)
      return cn[e];
    throw new lm(e);
  }, "getDiagram");
  lm = (La = class extends Error {
    constructor(e) {
      super(`Diagram ${e} not found.`);
    }
  }, g(La, "DiagramNotFoundError"), La);
  function Uo(e) {
    return typeof e > "u" || e === null;
  }
  g(Uo, "isNothing");
  function Xh(e) {
    return typeof e == "object" && e !== null;
  }
  g(Xh, "isObject");
  function Zh(e) {
    return Array.isArray(e) ? e : Uo(e) ? [] : [
      e
    ];
  }
  g(Zh, "toArray");
  function Qh(e, t) {
    var r, i, n, a;
    if (t)
      for (a = Object.keys(t), r = 0, i = a.length; r < i; r += 1)
        n = a[r], e[n] = t[n];
    return e;
  }
  g(Qh, "extend");
  function Kh(e, t) {
    var r = "", i;
    for (i = 0; i < t; i += 1)
      r += e;
    return r;
  }
  g(Kh, "repeat");
  function Jh(e) {
    return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
  }
  g(Jh, "isNegativeZero");
  var hm = Uo, cm = Xh, dm = Zh, um = Kh, pm = Jh, gm = Qh, Lt = {
    isNothing: hm,
    isObject: cm,
    toArray: dm,
    repeat: um,
    isNegativeZero: pm,
    extend: gm
  };
  function Vo(e, t) {
    var r = "", i = e.reason || "(unknown reason)";
    return e.mark ? (e.mark.name && (r += 'in "' + e.mark.name + '" '), r += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !t && e.mark.snippet && (r += `

` + e.mark.snippet), i + " " + r) : i;
  }
  g(Vo, "formatError");
  function Fr(e, t) {
    Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = t, this.message = Vo(this, false), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
  }
  g(Fr, "YAMLException$1");
  Fr.prototype = Object.create(Error.prototype);
  Fr.prototype.constructor = Fr;
  Fr.prototype.toString = g(function(e) {
    return this.name + ": " + Vo(this, e);
  }, "toString");
  var Qt = Fr;
  function Ki(e, t, r, i, n) {
    var a = "", s = "", o = Math.floor(n / 2) - 1;
    return i - t > o && (a = " ... ", t = i - o + a.length), r - i > o && (s = " ...", r = i + o - s.length), {
      str: a + e.slice(t, r).replace(/\t/g, "\u2192") + s,
      pos: i - t + a.length
    };
  }
  g(Ki, "getLine");
  function Ji(e, t) {
    return Lt.repeat(" ", t - e.length) + e;
  }
  g(Ji, "padStart");
  function tc(e, t) {
    if (t = Object.create(t || null), !e.buffer)
      return null;
    t.maxLength || (t.maxLength = 79), typeof t.indent != "number" && (t.indent = 1), typeof t.linesBefore != "number" && (t.linesBefore = 3), typeof t.linesAfter != "number" && (t.linesAfter = 2);
    for (var r = /\r?\n|\r|\0/g, i = [
      0
    ], n = [], a, s = -1; a = r.exec(e.buffer); )
      n.push(a.index), i.push(a.index + a[0].length), e.position <= a.index && s < 0 && (s = i.length - 2);
    s < 0 && (s = i.length - 1);
    var o = "", l, h, c = Math.min(e.line + t.linesAfter, n.length).toString().length, d = t.maxLength - (t.indent + c + 3);
    for (l = 1; l <= t.linesBefore && !(s - l < 0); l++)
      h = Ki(e.buffer, i[s - l], n[s - l], e.position - (i[s] - i[s - l]), d), o = Lt.repeat(" ", t.indent) + Ji((e.line - l + 1).toString(), c) + " | " + h.str + `
` + o;
    for (h = Ki(e.buffer, i[s], n[s], e.position, d), o += Lt.repeat(" ", t.indent) + Ji((e.line + 1).toString(), c) + " | " + h.str + `
`, o += Lt.repeat("-", t.indent + c + 3 + h.pos) + `^
`, l = 1; l <= t.linesAfter && !(s + l >= n.length); l++)
      h = Ki(e.buffer, i[s + l], n[s + l], e.position - (i[s] - i[s + l]), d), o += Lt.repeat(" ", t.indent) + Ji((e.line + l + 1).toString(), c) + " | " + h.str + `
`;
    return o.replace(/\n$/, "");
  }
  g(tc, "makeSnippet");
  var fm = tc, mm = [
    "kind",
    "multi",
    "resolve",
    "construct",
    "instanceOf",
    "predicate",
    "represent",
    "representName",
    "defaultStyle",
    "styleAliases"
  ], ym = [
    "scalar",
    "sequence",
    "mapping"
  ];
  function ec(e) {
    var t = {};
    return e !== null && Object.keys(e).forEach(function(r) {
      e[r].forEach(function(i) {
        t[String(i)] = r;
      });
    }), t;
  }
  g(ec, "compileStyleAliases");
  function rc(e, t) {
    if (t = t || {}, Object.keys(t).forEach(function(r) {
      if (mm.indexOf(r) === -1)
        throw new Qt('Unknown option "' + r + '" is met in definition of "' + e + '" YAML type.');
    }), this.options = t, this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function() {
      return true;
    }, this.construct = t.construct || function(r) {
      return r;
    }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.representName = t.representName || null, this.defaultStyle = t.defaultStyle || null, this.multi = t.multi || false, this.styleAliases = ec(t.styleAliases || null), ym.indexOf(this.kind) === -1)
      throw new Qt('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
  }
  g(rc, "Type$1");
  var Nt = rc;
  function eo(e, t) {
    var r = [];
    return e[t].forEach(function(i) {
      var n = r.length;
      r.forEach(function(a, s) {
        a.tag === i.tag && a.kind === i.kind && a.multi === i.multi && (n = s);
      }), r[n] = i;
    }), r;
  }
  g(eo, "compileList");
  function ic() {
    var e = {
      scalar: {},
      sequence: {},
      mapping: {},
      fallback: {},
      multi: {
        scalar: [],
        sequence: [],
        mapping: [],
        fallback: []
      }
    }, t, r;
    function i(n) {
      n.multi ? (e.multi[n.kind].push(n), e.multi.fallback.push(n)) : e[n.kind][n.tag] = e.fallback[n.tag] = n;
    }
    for (g(i, "collectType"), t = 0, r = arguments.length; t < r; t += 1)
      arguments[t].forEach(i);
    return e;
  }
  g(ic, "compileMap");
  function un(e) {
    return this.extend(e);
  }
  g(un, "Schema$1");
  un.prototype.extend = g(function(e) {
    var t = [], r = [];
    if (e instanceof Nt)
      r.push(e);
    else if (Array.isArray(e))
      r = r.concat(e);
    else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
      e.implicit && (t = t.concat(e.implicit)), e.explicit && (r = r.concat(e.explicit));
    else
      throw new Qt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
    t.forEach(function(n) {
      if (!(n instanceof Nt))
        throw new Qt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      if (n.loadKind && n.loadKind !== "scalar")
        throw new Qt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
      if (n.multi)
        throw new Qt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
    }), r.forEach(function(n) {
      if (!(n instanceof Nt))
        throw new Qt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    });
    var i = Object.create(un.prototype);
    return i.implicit = (this.implicit || []).concat(t), i.explicit = (this.explicit || []).concat(r), i.compiledImplicit = eo(i, "implicit"), i.compiledExplicit = eo(i, "explicit"), i.compiledTypeMap = ic(i.compiledImplicit, i.compiledExplicit), i;
  }, "extend");
  var xm = un, bm = new Nt("tag:yaml.org,2002:str", {
    kind: "scalar",
    construct: g(function(e) {
      return e !== null ? e : "";
    }, "construct")
  }), km = new Nt("tag:yaml.org,2002:seq", {
    kind: "sequence",
    construct: g(function(e) {
      return e !== null ? e : [];
    }, "construct")
  }), Cm = new Nt("tag:yaml.org,2002:map", {
    kind: "mapping",
    construct: g(function(e) {
      return e !== null ? e : {};
    }, "construct")
  }), vm = new xm({
    explicit: [
      bm,
      km,
      Cm
    ]
  });
  function nc(e) {
    if (e === null)
      return true;
    var t = e.length;
    return t === 1 && e === "~" || t === 4 && (e === "null" || e === "Null" || e === "NULL");
  }
  g(nc, "resolveYamlNull");
  function ac() {
    return null;
  }
  g(ac, "constructYamlNull");
  function oc(e) {
    return e === null;
  }
  g(oc, "isNull");
  var wm = new Nt("tag:yaml.org,2002:null", {
    kind: "scalar",
    resolve: nc,
    construct: ac,
    predicate: oc,
    represent: {
      canonical: g(function() {
        return "~";
      }, "canonical"),
      lowercase: g(function() {
        return "null";
      }, "lowercase"),
      uppercase: g(function() {
        return "NULL";
      }, "uppercase"),
      camelcase: g(function() {
        return "Null";
      }, "camelcase"),
      empty: g(function() {
        return "";
      }, "empty")
    },
    defaultStyle: "lowercase"
  });
  function sc(e) {
    if (e === null)
      return false;
    var t = e.length;
    return t === 4 && (e === "true" || e === "True" || e === "TRUE") || t === 5 && (e === "false" || e === "False" || e === "FALSE");
  }
  g(sc, "resolveYamlBoolean");
  function lc(e) {
    return e === "true" || e === "True" || e === "TRUE";
  }
  g(lc, "constructYamlBoolean");
  function hc(e) {
    return Object.prototype.toString.call(e) === "[object Boolean]";
  }
  g(hc, "isBoolean");
  var _m = new Nt("tag:yaml.org,2002:bool", {
    kind: "scalar",
    resolve: sc,
    construct: lc,
    predicate: hc,
    represent: {
      lowercase: g(function(e) {
        return e ? "true" : "false";
      }, "lowercase"),
      uppercase: g(function(e) {
        return e ? "TRUE" : "FALSE";
      }, "uppercase"),
      camelcase: g(function(e) {
        return e ? "True" : "False";
      }, "camelcase")
    },
    defaultStyle: "lowercase"
  });
  function cc(e) {
    return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
  }
  g(cc, "isHexCode");
  function dc(e) {
    return 48 <= e && e <= 55;
  }
  g(dc, "isOctCode");
  function uc(e) {
    return 48 <= e && e <= 57;
  }
  g(uc, "isDecCode");
  function pc(e) {
    if (e === null)
      return false;
    var t = e.length, r = 0, i = false, n;
    if (!t)
      return false;
    if (n = e[r], (n === "-" || n === "+") && (n = e[++r]), n === "0") {
      if (r + 1 === t)
        return true;
      if (n = e[++r], n === "b") {
        for (r++; r < t; r++)
          if (n = e[r], n !== "_") {
            if (n !== "0" && n !== "1")
              return false;
            i = true;
          }
        return i && n !== "_";
      }
      if (n === "x") {
        for (r++; r < t; r++)
          if (n = e[r], n !== "_") {
            if (!cc(e.charCodeAt(r)))
              return false;
            i = true;
          }
        return i && n !== "_";
      }
      if (n === "o") {
        for (r++; r < t; r++)
          if (n = e[r], n !== "_") {
            if (!dc(e.charCodeAt(r)))
              return false;
            i = true;
          }
        return i && n !== "_";
      }
    }
    if (n === "_")
      return false;
    for (; r < t; r++)
      if (n = e[r], n !== "_") {
        if (!uc(e.charCodeAt(r)))
          return false;
        i = true;
      }
    return !(!i || n === "_");
  }
  g(pc, "resolveYamlInteger");
  function gc(e) {
    var t = e, r = 1, i;
    if (t.indexOf("_") !== -1 && (t = t.replace(/_/g, "")), i = t[0], (i === "-" || i === "+") && (i === "-" && (r = -1), t = t.slice(1), i = t[0]), t === "0")
      return 0;
    if (i === "0") {
      if (t[1] === "b")
        return r * parseInt(t.slice(2), 2);
      if (t[1] === "x")
        return r * parseInt(t.slice(2), 16);
      if (t[1] === "o")
        return r * parseInt(t.slice(2), 8);
    }
    return r * parseInt(t, 10);
  }
  g(gc, "constructYamlInteger");
  function fc(e) {
    return Object.prototype.toString.call(e) === "[object Number]" && e % 1 === 0 && !Lt.isNegativeZero(e);
  }
  g(fc, "isInteger");
  var Sm = new Nt("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: pc,
    construct: gc,
    predicate: fc,
    represent: {
      binary: g(function(e) {
        return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
      }, "binary"),
      octal: g(function(e) {
        return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
      }, "octal"),
      decimal: g(function(e) {
        return e.toString(10);
      }, "decimal"),
      hexadecimal: g(function(e) {
        return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1);
      }, "hexadecimal")
    },
    defaultStyle: "decimal",
    styleAliases: {
      binary: [
        2,
        "bin"
      ],
      octal: [
        8,
        "oct"
      ],
      decimal: [
        10,
        "dec"
      ],
      hexadecimal: [
        16,
        "hex"
      ]
    }
  }), Tm = new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
  function mc(e) {
    return !(e === null || !Tm.test(e) || e[e.length - 1] === "_");
  }
  g(mc, "resolveYamlFloat");
  function yc(e) {
    var t, r;
    return t = e.replace(/_/g, "").toLowerCase(), r = t[0] === "-" ? -1 : 1, "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), t === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : t === ".nan" ? NaN : r * parseFloat(t, 10);
  }
  g(yc, "constructYamlFloat");
  var Bm = /^[-+]?[0-9]+e/;
  function xc(e, t) {
    var r;
    if (isNaN(e))
      switch (t) {
        case "lowercase":
          return ".nan";
        case "uppercase":
          return ".NAN";
        case "camelcase":
          return ".NaN";
      }
    else if (Number.POSITIVE_INFINITY === e)
      switch (t) {
        case "lowercase":
          return ".inf";
        case "uppercase":
          return ".INF";
        case "camelcase":
          return ".Inf";
      }
    else if (Number.NEGATIVE_INFINITY === e)
      switch (t) {
        case "lowercase":
          return "-.inf";
        case "uppercase":
          return "-.INF";
        case "camelcase":
          return "-.Inf";
      }
    else if (Lt.isNegativeZero(e))
      return "-0.0";
    return r = e.toString(10), Bm.test(r) ? r.replace("e", ".e") : r;
  }
  g(xc, "representYamlFloat");
  function bc(e) {
    return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || Lt.isNegativeZero(e));
  }
  g(bc, "isFloat");
  var Lm = new Nt("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: mc,
    construct: yc,
    predicate: bc,
    represent: xc,
    defaultStyle: "lowercase"
  }), kc = vm.extend({
    implicit: [
      wm,
      _m,
      Sm,
      Lm
    ]
  }), Mm = kc, Cc = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), vc = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
  function wc(e) {
    return e === null ? false : Cc.exec(e) !== null || vc.exec(e) !== null;
  }
  g(wc, "resolveYamlTimestamp");
  function _c(e) {
    var t, r, i, n, a, s, o, l = 0, h = null, c, d, u;
    if (t = Cc.exec(e), t === null && (t = vc.exec(e)), t === null)
      throw new Error("Date resolve error");
    if (r = +t[1], i = +t[2] - 1, n = +t[3], !t[4])
      return new Date(Date.UTC(r, i, n));
    if (a = +t[4], s = +t[5], o = +t[6], t[7]) {
      for (l = t[7].slice(0, 3); l.length < 3; )
        l += "0";
      l = +l;
    }
    return t[9] && (c = +t[10], d = +(t[11] || 0), h = (c * 60 + d) * 6e4, t[9] === "-" && (h = -h)), u = new Date(Date.UTC(r, i, n, a, s, o, l)), h && u.setTime(u.getTime() - h), u;
  }
  g(_c, "constructYamlTimestamp");
  function Sc(e) {
    return e.toISOString();
  }
  g(Sc, "representYamlTimestamp");
  var Am = new Nt("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: wc,
    construct: _c,
    instanceOf: Date,
    represent: Sc
  });
  function Tc(e) {
    return e === "<<" || e === null;
  }
  g(Tc, "resolveYamlMerge");
  var Fm = new Nt("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: Tc
  }), Go = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
  function Bc(e) {
    if (e === null)
      return false;
    var t, r, i = 0, n = e.length, a = Go;
    for (r = 0; r < n; r++)
      if (t = a.indexOf(e.charAt(r)), !(t > 64)) {
        if (t < 0)
          return false;
        i += 6;
      }
    return i % 8 === 0;
  }
  g(Bc, "resolveYamlBinary");
  function Lc(e) {
    var t, r, i = e.replace(/[\r\n=]/g, ""), n = i.length, a = Go, s = 0, o = [];
    for (t = 0; t < n; t++)
      t % 4 === 0 && t && (o.push(s >> 16 & 255), o.push(s >> 8 & 255), o.push(s & 255)), s = s << 6 | a.indexOf(i.charAt(t));
    return r = n % 4 * 6, r === 0 ? (o.push(s >> 16 & 255), o.push(s >> 8 & 255), o.push(s & 255)) : r === 18 ? (o.push(s >> 10 & 255), o.push(s >> 2 & 255)) : r === 12 && o.push(s >> 4 & 255), new Uint8Array(o);
  }
  g(Lc, "constructYamlBinary");
  function Mc(e) {
    var t = "", r = 0, i, n, a = e.length, s = Go;
    for (i = 0; i < a; i++)
      i % 3 === 0 && i && (t += s[r >> 18 & 63], t += s[r >> 12 & 63], t += s[r >> 6 & 63], t += s[r & 63]), r = (r << 8) + e[i];
    return n = a % 3, n === 0 ? (t += s[r >> 18 & 63], t += s[r >> 12 & 63], t += s[r >> 6 & 63], t += s[r & 63]) : n === 2 ? (t += s[r >> 10 & 63], t += s[r >> 4 & 63], t += s[r << 2 & 63], t += s[64]) : n === 1 && (t += s[r >> 2 & 63], t += s[r << 4 & 63], t += s[64], t += s[64]), t;
  }
  g(Mc, "representYamlBinary");
  function Ac(e) {
    return Object.prototype.toString.call(e) === "[object Uint8Array]";
  }
  g(Ac, "isBinary");
  var $m = new Nt("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: Bc,
    construct: Lc,
    predicate: Ac,
    represent: Mc
  }), Em = Object.prototype.hasOwnProperty, Om = Object.prototype.toString;
  function Fc(e) {
    if (e === null)
      return true;
    var t = [], r, i, n, a, s, o = e;
    for (r = 0, i = o.length; r < i; r += 1) {
      if (n = o[r], s = false, Om.call(n) !== "[object Object]")
        return false;
      for (a in n)
        if (Em.call(n, a))
          if (!s)
            s = true;
          else
            return false;
      if (!s)
        return false;
      if (t.indexOf(a) === -1)
        t.push(a);
      else
        return false;
    }
    return true;
  }
  g(Fc, "resolveYamlOmap");
  function $c(e) {
    return e !== null ? e : [];
  }
  g($c, "constructYamlOmap");
  var Dm = new Nt("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: Fc,
    construct: $c
  }), Im = Object.prototype.toString;
  function Ec(e) {
    if (e === null)
      return true;
    var t, r, i, n, a, s = e;
    for (a = new Array(s.length), t = 0, r = s.length; t < r; t += 1) {
      if (i = s[t], Im.call(i) !== "[object Object]" || (n = Object.keys(i), n.length !== 1))
        return false;
      a[t] = [
        n[0],
        i[n[0]]
      ];
    }
    return true;
  }
  g(Ec, "resolveYamlPairs");
  function Oc(e) {
    if (e === null)
      return [];
    var t, r, i, n, a, s = e;
    for (a = new Array(s.length), t = 0, r = s.length; t < r; t += 1)
      i = s[t], n = Object.keys(i), a[t] = [
        n[0],
        i[n[0]]
      ];
    return a;
  }
  g(Oc, "constructYamlPairs");
  var Pm = new Nt("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: Ec,
    construct: Oc
  }), zm = Object.prototype.hasOwnProperty;
  function Dc(e) {
    if (e === null)
      return true;
    var t, r = e;
    for (t in r)
      if (zm.call(r, t) && r[t] !== null)
        return false;
    return true;
  }
  g(Dc, "resolveYamlSet");
  function Ic(e) {
    return e !== null ? e : {};
  }
  g(Ic, "constructYamlSet");
  var Rm = new Nt("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: Dc,
    construct: Ic
  }), Pc = Mm.extend({
    implicit: [
      Am,
      Fm
    ],
    explicit: [
      $m,
      Dm,
      Pm,
      Rm
    ]
  }), ze = Object.prototype.hasOwnProperty, pn = 1, zc = 2, Rc = 3, gn = 4, Ma = 1, Nm = 2, ml = 3, qm = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, jm = /[\x85\u2028\u2029]/, Wm = /[,\[\]\{\}]/, Nc = /^(?:!|!!|![a-z\-]+!)$/i, qc = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
  function ro(e) {
    return Object.prototype.toString.call(e);
  }
  g(ro, "_class");
  function le(e) {
    return e === 10 || e === 13;
  }
  g(le, "is_EOL");
  function Pe(e) {
    return e === 9 || e === 32;
  }
  g(Pe, "is_WHITE_SPACE");
  function Ht(e) {
    return e === 9 || e === 32 || e === 10 || e === 13;
  }
  g(Ht, "is_WS_OR_EOL");
  function Je(e) {
    return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
  }
  g(Je, "is_FLOW_INDICATOR");
  function jc(e) {
    var t;
    return 48 <= e && e <= 57 ? e - 48 : (t = e | 32, 97 <= t && t <= 102 ? t - 97 + 10 : -1);
  }
  g(jc, "fromHexCode");
  function Wc(e) {
    return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
  }
  g(Wc, "escapedHexLen");
  function Hc(e) {
    return 48 <= e && e <= 57 ? e - 48 : -1;
  }
  g(Hc, "fromDecimalCode");
  function io(e) {
    return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "\x85" : e === 95 ? "\xA0" : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
  }
  g(io, "simpleEscapeSequence");
  function Yc(e) {
    return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode((e - 65536 >> 10) + 55296, (e - 65536 & 1023) + 56320);
  }
  g(Yc, "charFromCodepoint");
  var Uc = new Array(256), Vc = new Array(256);
  for (Xe = 0; Xe < 256; Xe++)
    Uc[Xe] = io(Xe) ? 1 : 0, Vc[Xe] = io(Xe);
  var Xe;
  function Gc(e, t) {
    this.input = e, this.filename = t.filename || null, this.schema = t.schema || Pc, this.onWarning = t.onWarning || null, this.legacy = t.legacy || false, this.json = t.json || false, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
  }
  g(Gc, "State$1");
  function Xo(e, t) {
    var r = {
      name: e.filename,
      buffer: e.input.slice(0, -1),
      position: e.position,
      line: e.line,
      column: e.position - e.lineStart
    };
    return r.snippet = fm(r), new Qt(t, r);
  }
  g(Xo, "generateError");
  function et(e, t) {
    throw Xo(e, t);
  }
  g(et, "throwError");
  function gi(e, t) {
    e.onWarning && e.onWarning.call(null, Xo(e, t));
  }
  g(gi, "throwWarning");
  var yl = {
    YAML: g(function(e, t, r) {
      var i, n, a;
      e.version !== null && et(e, "duplication of %YAML directive"), r.length !== 1 && et(e, "YAML directive accepts exactly one argument"), i = /^([0-9]+)\.([0-9]+)$/.exec(r[0]), i === null && et(e, "ill-formed argument of the YAML directive"), n = parseInt(i[1], 10), a = parseInt(i[2], 10), n !== 1 && et(e, "unacceptable YAML version of the document"), e.version = r[0], e.checkLineBreaks = a < 2, a !== 1 && a !== 2 && gi(e, "unsupported YAML version of the document");
    }, "handleYamlDirective"),
    TAG: g(function(e, t, r) {
      var i, n;
      r.length !== 2 && et(e, "TAG directive accepts exactly two arguments"), i = r[0], n = r[1], Nc.test(i) || et(e, "ill-formed tag handle (first argument) of the TAG directive"), ze.call(e.tagMap, i) && et(e, 'there is a previously declared suffix for "' + i + '" tag handle'), qc.test(n) || et(e, "ill-formed tag prefix (second argument) of the TAG directive");
      try {
        n = decodeURIComponent(n);
      } catch {
        et(e, "tag prefix is malformed: " + n);
      }
      e.tagMap[i] = n;
    }, "handleTagDirective")
  };
  function Ae(e, t, r, i) {
    var n, a, s, o;
    if (t < r) {
      if (o = e.input.slice(t, r), i)
        for (n = 0, a = o.length; n < a; n += 1)
          s = o.charCodeAt(n), s === 9 || 32 <= s && s <= 1114111 || et(e, "expected valid JSON character");
      else
        qm.test(o) && et(e, "the stream contains non-printable characters");
      e.result += o;
    }
  }
  g(Ae, "captureSegment");
  function no(e, t, r, i) {
    var n, a, s, o;
    for (Lt.isObject(r) || et(e, "cannot merge mappings; the provided source object is unacceptable"), n = Object.keys(r), s = 0, o = n.length; s < o; s += 1)
      a = n[s], ze.call(t, a) || (t[a] = r[a], i[a] = true);
  }
  g(no, "mergeMappings");
  function tr(e, t, r, i, n, a, s, o, l) {
    var h, c;
    if (Array.isArray(n))
      for (n = Array.prototype.slice.call(n), h = 0, c = n.length; h < c; h += 1)
        Array.isArray(n[h]) && et(e, "nested arrays are not supported inside keys"), typeof n == "object" && ro(n[h]) === "[object Object]" && (n[h] = "[object Object]");
    if (typeof n == "object" && ro(n) === "[object Object]" && (n = "[object Object]"), n = String(n), t === null && (t = {}), i === "tag:yaml.org,2002:merge")
      if (Array.isArray(a))
        for (h = 0, c = a.length; h < c; h += 1)
          no(e, t, a[h], r);
      else
        no(e, t, a, r);
    else
      !e.json && !ze.call(r, n) && ze.call(t, n) && (e.line = s || e.line, e.lineStart = o || e.lineStart, e.position = l || e.position, et(e, "duplicated mapping key")), n === "__proto__" ? Object.defineProperty(t, n, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: a
      }) : t[n] = a, delete r[n];
    return t;
  }
  g(tr, "storeMappingPair");
  function qn(e) {
    var t;
    t = e.input.charCodeAt(e.position), t === 10 ? e.position++ : t === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : et(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
  }
  g(qn, "readLineBreak");
  function _t(e, t, r) {
    for (var i = 0, n = e.input.charCodeAt(e.position); n !== 0; ) {
      for (; Pe(n); )
        n === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), n = e.input.charCodeAt(++e.position);
      if (t && n === 35)
        do
          n = e.input.charCodeAt(++e.position);
        while (n !== 10 && n !== 13 && n !== 0);
      if (le(n))
        for (qn(e), n = e.input.charCodeAt(e.position), i++, e.lineIndent = 0; n === 32; )
          e.lineIndent++, n = e.input.charCodeAt(++e.position);
      else
        break;
    }
    return r !== -1 && i !== 0 && e.lineIndent < r && gi(e, "deficient indentation"), i;
  }
  g(_t, "skipSeparationSpace");
  function Si(e) {
    var t = e.position, r;
    return r = e.input.charCodeAt(t), !!((r === 45 || r === 46) && r === e.input.charCodeAt(t + 1) && r === e.input.charCodeAt(t + 2) && (t += 3, r = e.input.charCodeAt(t), r === 0 || Ht(r)));
  }
  g(Si, "testDocumentSeparator");
  function jn(e, t) {
    t === 1 ? e.result += " " : t > 1 && (e.result += Lt.repeat(`
`, t - 1));
  }
  g(jn, "writeFoldedLines");
  function Xc(e, t, r) {
    var i, n, a, s, o, l, h, c, d = e.kind, u = e.result, p;
    if (p = e.input.charCodeAt(e.position), Ht(p) || Je(p) || p === 35 || p === 38 || p === 42 || p === 33 || p === 124 || p === 62 || p === 39 || p === 34 || p === 37 || p === 64 || p === 96 || (p === 63 || p === 45) && (n = e.input.charCodeAt(e.position + 1), Ht(n) || r && Je(n)))
      return false;
    for (e.kind = "scalar", e.result = "", a = s = e.position, o = false; p !== 0; ) {
      if (p === 58) {
        if (n = e.input.charCodeAt(e.position + 1), Ht(n) || r && Je(n))
          break;
      } else if (p === 35) {
        if (i = e.input.charCodeAt(e.position - 1), Ht(i))
          break;
      } else {
        if (e.position === e.lineStart && Si(e) || r && Je(p))
          break;
        if (le(p))
          if (l = e.line, h = e.lineStart, c = e.lineIndent, _t(e, false, -1), e.lineIndent >= t) {
            o = true, p = e.input.charCodeAt(e.position);
            continue;
          } else {
            e.position = s, e.line = l, e.lineStart = h, e.lineIndent = c;
            break;
          }
      }
      o && (Ae(e, a, s, false), jn(e, e.line - l), a = s = e.position, o = false), Pe(p) || (s = e.position + 1), p = e.input.charCodeAt(++e.position);
    }
    return Ae(e, a, s, false), e.result ? true : (e.kind = d, e.result = u, false);
  }
  g(Xc, "readPlainScalar");
  function Zc(e, t) {
    var r, i, n;
    if (r = e.input.charCodeAt(e.position), r !== 39)
      return false;
    for (e.kind = "scalar", e.result = "", e.position++, i = n = e.position; (r = e.input.charCodeAt(e.position)) !== 0; )
      if (r === 39)
        if (Ae(e, i, e.position, true), r = e.input.charCodeAt(++e.position), r === 39)
          i = e.position, e.position++, n = e.position;
        else
          return true;
      else
        le(r) ? (Ae(e, i, n, true), jn(e, _t(e, false, t)), i = n = e.position) : e.position === e.lineStart && Si(e) ? et(e, "unexpected end of the document within a single quoted scalar") : (e.position++, n = e.position);
    et(e, "unexpected end of the stream within a single quoted scalar");
  }
  g(Zc, "readSingleQuotedScalar");
  function Qc(e, t) {
    var r, i, n, a, s, o;
    if (o = e.input.charCodeAt(e.position), o !== 34)
      return false;
    for (e.kind = "scalar", e.result = "", e.position++, r = i = e.position; (o = e.input.charCodeAt(e.position)) !== 0; ) {
      if (o === 34)
        return Ae(e, r, e.position, true), e.position++, true;
      if (o === 92) {
        if (Ae(e, r, e.position, true), o = e.input.charCodeAt(++e.position), le(o))
          _t(e, false, t);
        else if (o < 256 && Uc[o])
          e.result += Vc[o], e.position++;
        else if ((s = Wc(o)) > 0) {
          for (n = s, a = 0; n > 0; n--)
            o = e.input.charCodeAt(++e.position), (s = jc(o)) >= 0 ? a = (a << 4) + s : et(e, "expected hexadecimal character");
          e.result += Yc(a), e.position++;
        } else
          et(e, "unknown escape sequence");
        r = i = e.position;
      } else
        le(o) ? (Ae(e, r, i, true), jn(e, _t(e, false, t)), r = i = e.position) : e.position === e.lineStart && Si(e) ? et(e, "unexpected end of the document within a double quoted scalar") : (e.position++, i = e.position);
    }
    et(e, "unexpected end of the stream within a double quoted scalar");
  }
  g(Qc, "readDoubleQuotedScalar");
  function Kc(e, t) {
    var r = true, i, n, a, s = e.tag, o, l = e.anchor, h, c, d, u, p, f = /* @__PURE__ */ Object.create(null), m, y, x, b;
    if (b = e.input.charCodeAt(e.position), b === 91)
      c = 93, p = false, o = [];
    else if (b === 123)
      c = 125, p = true, o = {};
    else
      return false;
    for (e.anchor !== null && (e.anchorMap[e.anchor] = o), b = e.input.charCodeAt(++e.position); b !== 0; ) {
      if (_t(e, true, t), b = e.input.charCodeAt(e.position), b === c)
        return e.position++, e.tag = s, e.anchor = l, e.kind = p ? "mapping" : "sequence", e.result = o, true;
      r ? b === 44 && et(e, "expected the node content, but found ','") : et(e, "missed comma between flow collection entries"), y = m = x = null, d = u = false, b === 63 && (h = e.input.charCodeAt(e.position + 1), Ht(h) && (d = u = true, e.position++, _t(e, true, t))), i = e.line, n = e.lineStart, a = e.position, ir(e, t, pn, false, true), y = e.tag, m = e.result, _t(e, true, t), b = e.input.charCodeAt(e.position), (u || e.line === i) && b === 58 && (d = true, b = e.input.charCodeAt(++e.position), _t(e, true, t), ir(e, t, pn, false, true), x = e.result), p ? tr(e, o, f, y, m, x, i, n, a) : d ? o.push(tr(e, null, f, y, m, x, i, n, a)) : o.push(m), _t(e, true, t), b = e.input.charCodeAt(e.position), b === 44 ? (r = true, b = e.input.charCodeAt(++e.position)) : r = false;
    }
    et(e, "unexpected end of the stream within a flow collection");
  }
  g(Kc, "readFlowCollection");
  function Jc(e, t) {
    var r, i, n = Ma, a = false, s = false, o = t, l = 0, h = false, c, d;
    if (d = e.input.charCodeAt(e.position), d === 124)
      i = false;
    else if (d === 62)
      i = true;
    else
      return false;
    for (e.kind = "scalar", e.result = ""; d !== 0; )
      if (d = e.input.charCodeAt(++e.position), d === 43 || d === 45)
        Ma === n ? n = d === 43 ? ml : Nm : et(e, "repeat of a chomping mode identifier");
      else if ((c = Hc(d)) >= 0)
        c === 0 ? et(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : s ? et(e, "repeat of an indentation width identifier") : (o = t + c - 1, s = true);
      else
        break;
    if (Pe(d)) {
      do
        d = e.input.charCodeAt(++e.position);
      while (Pe(d));
      if (d === 35)
        do
          d = e.input.charCodeAt(++e.position);
        while (!le(d) && d !== 0);
    }
    for (; d !== 0; ) {
      for (qn(e), e.lineIndent = 0, d = e.input.charCodeAt(e.position); (!s || e.lineIndent < o) && d === 32; )
        e.lineIndent++, d = e.input.charCodeAt(++e.position);
      if (!s && e.lineIndent > o && (o = e.lineIndent), le(d)) {
        l++;
        continue;
      }
      if (e.lineIndent < o) {
        n === ml ? e.result += Lt.repeat(`
`, a ? 1 + l : l) : n === Ma && a && (e.result += `
`);
        break;
      }
      for (i ? Pe(d) ? (h = true, e.result += Lt.repeat(`
`, a ? 1 + l : l)) : h ? (h = false, e.result += Lt.repeat(`
`, l + 1)) : l === 0 ? a && (e.result += " ") : e.result += Lt.repeat(`
`, l) : e.result += Lt.repeat(`
`, a ? 1 + l : l), a = true, s = true, l = 0, r = e.position; !le(d) && d !== 0; )
        d = e.input.charCodeAt(++e.position);
      Ae(e, r, e.position, false);
    }
    return true;
  }
  g(Jc, "readBlockScalar");
  function ao(e, t) {
    var r, i = e.tag, n = e.anchor, a = [], s, o = false, l;
    if (e.firstTabInLine !== -1)
      return false;
    for (e.anchor !== null && (e.anchorMap[e.anchor] = a), l = e.input.charCodeAt(e.position); l !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, et(e, "tab characters must not be used in indentation")), !(l !== 45 || (s = e.input.charCodeAt(e.position + 1), !Ht(s)))); ) {
      if (o = true, e.position++, _t(e, true, -1) && e.lineIndent <= t) {
        a.push(null), l = e.input.charCodeAt(e.position);
        continue;
      }
      if (r = e.line, ir(e, t, Rc, false, true), a.push(e.result), _t(e, true, -1), l = e.input.charCodeAt(e.position), (e.line === r || e.lineIndent > t) && l !== 0)
        et(e, "bad indentation of a sequence entry");
      else if (e.lineIndent < t)
        break;
    }
    return o ? (e.tag = i, e.anchor = n, e.kind = "sequence", e.result = a, true) : false;
  }
  g(ao, "readBlockSequence");
  function td(e, t, r) {
    var i, n, a, s, o, l, h = e.tag, c = e.anchor, d = {}, u = /* @__PURE__ */ Object.create(null), p = null, f = null, m = null, y = false, x = false, b;
    if (e.firstTabInLine !== -1)
      return false;
    for (e.anchor !== null && (e.anchorMap[e.anchor] = d), b = e.input.charCodeAt(e.position); b !== 0; ) {
      if (!y && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, et(e, "tab characters must not be used in indentation")), i = e.input.charCodeAt(e.position + 1), a = e.line, (b === 63 || b === 58) && Ht(i))
        b === 63 ? (y && (tr(e, d, u, p, f, null, s, o, l), p = f = m = null), x = true, y = true, n = true) : y ? (y = false, n = true) : et(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, b = i;
      else {
        if (s = e.line, o = e.lineStart, l = e.position, !ir(e, r, zc, false, true))
          break;
        if (e.line === a) {
          for (b = e.input.charCodeAt(e.position); Pe(b); )
            b = e.input.charCodeAt(++e.position);
          if (b === 58)
            b = e.input.charCodeAt(++e.position), Ht(b) || et(e, "a whitespace character is expected after the key-value separator within a block mapping"), y && (tr(e, d, u, p, f, null, s, o, l), p = f = m = null), x = true, y = false, n = false, p = e.tag, f = e.result;
          else if (x)
            et(e, "can not read an implicit mapping pair; a colon is missed");
          else
            return e.tag = h, e.anchor = c, true;
        } else if (x)
          et(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
        else
          return e.tag = h, e.anchor = c, true;
      }
      if ((e.line === a || e.lineIndent > t) && (y && (s = e.line, o = e.lineStart, l = e.position), ir(e, t, gn, true, n) && (y ? f = e.result : m = e.result), y || (tr(e, d, u, p, f, m, s, o, l), p = f = m = null), _t(e, true, -1), b = e.input.charCodeAt(e.position)), (e.line === a || e.lineIndent > t) && b !== 0)
        et(e, "bad indentation of a mapping entry");
      else if (e.lineIndent < t)
        break;
    }
    return y && tr(e, d, u, p, f, null, s, o, l), x && (e.tag = h, e.anchor = c, e.kind = "mapping", e.result = d), x;
  }
  g(td, "readBlockMapping");
  function ed(e) {
    var t, r = false, i = false, n, a, s;
    if (s = e.input.charCodeAt(e.position), s !== 33)
      return false;
    if (e.tag !== null && et(e, "duplication of a tag property"), s = e.input.charCodeAt(++e.position), s === 60 ? (r = true, s = e.input.charCodeAt(++e.position)) : s === 33 ? (i = true, n = "!!", s = e.input.charCodeAt(++e.position)) : n = "!", t = e.position, r) {
      do
        s = e.input.charCodeAt(++e.position);
      while (s !== 0 && s !== 62);
      e.position < e.length ? (a = e.input.slice(t, e.position), s = e.input.charCodeAt(++e.position)) : et(e, "unexpected end of the stream within a verbatim tag");
    } else {
      for (; s !== 0 && !Ht(s); )
        s === 33 && (i ? et(e, "tag suffix cannot contain exclamation marks") : (n = e.input.slice(t - 1, e.position + 1), Nc.test(n) || et(e, "named tag handle cannot contain such characters"), i = true, t = e.position + 1)), s = e.input.charCodeAt(++e.position);
      a = e.input.slice(t, e.position), Wm.test(a) && et(e, "tag suffix cannot contain flow indicator characters");
    }
    a && !qc.test(a) && et(e, "tag name cannot contain such characters: " + a);
    try {
      a = decodeURIComponent(a);
    } catch {
      et(e, "tag name is malformed: " + a);
    }
    return r ? e.tag = a : ze.call(e.tagMap, n) ? e.tag = e.tagMap[n] + a : n === "!" ? e.tag = "!" + a : n === "!!" ? e.tag = "tag:yaml.org,2002:" + a : et(e, 'undeclared tag handle "' + n + '"'), true;
  }
  g(ed, "readTagProperty");
  function rd(e) {
    var t, r;
    if (r = e.input.charCodeAt(e.position), r !== 38)
      return false;
    for (e.anchor !== null && et(e, "duplication of an anchor property"), r = e.input.charCodeAt(++e.position), t = e.position; r !== 0 && !Ht(r) && !Je(r); )
      r = e.input.charCodeAt(++e.position);
    return e.position === t && et(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), true;
  }
  g(rd, "readAnchorProperty");
  function id(e) {
    var t, r, i;
    if (i = e.input.charCodeAt(e.position), i !== 42)
      return false;
    for (i = e.input.charCodeAt(++e.position), t = e.position; i !== 0 && !Ht(i) && !Je(i); )
      i = e.input.charCodeAt(++e.position);
    return e.position === t && et(e, "name of an alias node must contain at least one character"), r = e.input.slice(t, e.position), ze.call(e.anchorMap, r) || et(e, 'unidentified alias "' + r + '"'), e.result = e.anchorMap[r], _t(e, true, -1), true;
  }
  g(id, "readAlias");
  function ir(e, t, r, i, n) {
    var a, s, o, l = 1, h = false, c = false, d, u, p, f, m, y;
    if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, a = s = o = gn === r || Rc === r, i && _t(e, true, -1) && (h = true, e.lineIndent > t ? l = 1 : e.lineIndent === t ? l = 0 : e.lineIndent < t && (l = -1)), l === 1)
      for (; ed(e) || rd(e); )
        _t(e, true, -1) ? (h = true, o = a, e.lineIndent > t ? l = 1 : e.lineIndent === t ? l = 0 : e.lineIndent < t && (l = -1)) : o = false;
    if (o && (o = h || n), (l === 1 || gn === r) && (pn === r || zc === r ? m = t : m = t + 1, y = e.position - e.lineStart, l === 1 ? o && (ao(e, y) || td(e, y, m)) || Kc(e, m) ? c = true : (s && Jc(e, m) || Zc(e, m) || Qc(e, m) ? c = true : id(e) ? (c = true, (e.tag !== null || e.anchor !== null) && et(e, "alias node should not have any properties")) : Xc(e, m, pn === r) && (c = true, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : l === 0 && (c = o && ao(e, y))), e.tag === null)
      e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
    else if (e.tag === "?") {
      for (e.result !== null && e.kind !== "scalar" && et(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), d = 0, u = e.implicitTypes.length; d < u; d += 1)
        if (f = e.implicitTypes[d], f.resolve(e.result)) {
          e.result = f.construct(e.result), e.tag = f.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
          break;
        }
    } else if (e.tag !== "!") {
      if (ze.call(e.typeMap[e.kind || "fallback"], e.tag))
        f = e.typeMap[e.kind || "fallback"][e.tag];
      else
        for (f = null, p = e.typeMap.multi[e.kind || "fallback"], d = 0, u = p.length; d < u; d += 1)
          if (e.tag.slice(0, p[d].tag.length) === p[d].tag) {
            f = p[d];
            break;
          }
      f || et(e, "unknown tag !<" + e.tag + ">"), e.result !== null && f.kind !== e.kind && et(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + f.kind + '", not "' + e.kind + '"'), f.resolve(e.result, e.tag) ? (e.result = f.construct(e.result, e.tag), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : et(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
    }
    return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || c;
  }
  g(ir, "composeNode");
  function nd(e) {
    var t = e.position, r, i, n, a = false, s;
    for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = /* @__PURE__ */ Object.create(null), e.anchorMap = /* @__PURE__ */ Object.create(null); (s = e.input.charCodeAt(e.position)) !== 0 && (_t(e, true, -1), s = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || s !== 37)); ) {
      for (a = true, s = e.input.charCodeAt(++e.position), r = e.position; s !== 0 && !Ht(s); )
        s = e.input.charCodeAt(++e.position);
      for (i = e.input.slice(r, e.position), n = [], i.length < 1 && et(e, "directive name must not be less than one character in length"); s !== 0; ) {
        for (; Pe(s); )
          s = e.input.charCodeAt(++e.position);
        if (s === 35) {
          do
            s = e.input.charCodeAt(++e.position);
          while (s !== 0 && !le(s));
          break;
        }
        if (le(s))
          break;
        for (r = e.position; s !== 0 && !Ht(s); )
          s = e.input.charCodeAt(++e.position);
        n.push(e.input.slice(r, e.position));
      }
      s !== 0 && qn(e), ze.call(yl, i) ? yl[i](e, i, n) : gi(e, 'unknown document directive "' + i + '"');
    }
    if (_t(e, true, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, _t(e, true, -1)) : a && et(e, "directives end mark is expected"), ir(e, e.lineIndent - 1, gn, false, true), _t(e, true, -1), e.checkLineBreaks && jm.test(e.input.slice(t, e.position)) && gi(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && Si(e)) {
      e.input.charCodeAt(e.position) === 46 && (e.position += 3, _t(e, true, -1));
      return;
    }
    if (e.position < e.length - 1)
      et(e, "end of the stream or a document separator is expected");
    else
      return;
  }
  g(nd, "readDocument");
  function Zo(e, t) {
    e = String(e), t = t || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
    var r = new Gc(e, t), i = e.indexOf("\0");
    for (i !== -1 && (r.position = i, et(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
      r.lineIndent += 1, r.position += 1;
    for (; r.position < r.length - 1; )
      nd(r);
    return r.documents;
  }
  g(Zo, "loadDocuments");
  function Hm(e, t, r) {
    t !== null && typeof t == "object" && typeof r > "u" && (r = t, t = null);
    var i = Zo(e, r);
    if (typeof t != "function")
      return i;
    for (var n = 0, a = i.length; n < a; n += 1)
      t(i[n]);
  }
  g(Hm, "loadAll$1");
  function ad(e, t) {
    var r = Zo(e, t);
    if (r.length !== 0) {
      if (r.length === 1)
        return r[0];
      throw new Qt("expected a single document in the stream, but found more");
    }
  }
  g(ad, "load$1");
  var Ym = ad, Um = {
    load: Ym
  }, od = Object.prototype.toString, sd = Object.prototype.hasOwnProperty, Qo = 65279, Vm = 9, fi = 10, Gm = 13, Xm = 32, Zm = 33, Qm = 34, oo = 35, Km = 37, Jm = 38, ty = 39, ey = 42, ld = 44, ry = 45, fn = 58, iy = 61, ny = 62, ay = 63, oy = 64, hd = 91, cd = 93, sy = 96, dd = 123, ly = 124, ud = 125, qt = {};
  qt[0] = "\\0";
  qt[7] = "\\a";
  qt[8] = "\\b";
  qt[9] = "\\t";
  qt[10] = "\\n";
  qt[11] = "\\v";
  qt[12] = "\\f";
  qt[13] = "\\r";
  qt[27] = "\\e";
  qt[34] = '\\"';
  qt[92] = "\\\\";
  qt[133] = "\\N";
  qt[160] = "\\_";
  qt[8232] = "\\L";
  qt[8233] = "\\P";
  var hy = [
    "y",
    "Y",
    "yes",
    "Yes",
    "YES",
    "on",
    "On",
    "ON",
    "n",
    "N",
    "no",
    "No",
    "NO",
    "off",
    "Off",
    "OFF"
  ], cy = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
  function pd(e, t) {
    var r, i, n, a, s, o, l;
    if (t === null)
      return {};
    for (r = {}, i = Object.keys(t), n = 0, a = i.length; n < a; n += 1)
      s = i[n], o = String(t[s]), s.slice(0, 2) === "!!" && (s = "tag:yaml.org,2002:" + s.slice(2)), l = e.compiledTypeMap.fallback[s], l && sd.call(l.styleAliases, o) && (o = l.styleAliases[o]), r[s] = o;
    return r;
  }
  g(pd, "compileStyleMap");
  function gd(e) {
    var t, r, i;
    if (t = e.toString(16).toUpperCase(), e <= 255)
      r = "x", i = 2;
    else if (e <= 65535)
      r = "u", i = 4;
    else if (e <= 4294967295)
      r = "U", i = 8;
    else
      throw new Qt("code point within a string may not be greater than 0xFFFFFFFF");
    return "\\" + r + Lt.repeat("0", i - t.length) + t;
  }
  g(gd, "encodeHex");
  var dy = 1, mi = 2;
  function fd(e) {
    this.schema = e.schema || Pc, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || false, this.skipInvalid = e.skipInvalid || false, this.flowLevel = Lt.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = pd(this.schema, e.styles || null), this.sortKeys = e.sortKeys || false, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || false, this.noCompatMode = e.noCompatMode || false, this.condenseFlow = e.condenseFlow || false, this.quotingType = e.quotingType === '"' ? mi : dy, this.forceQuotes = e.forceQuotes || false, this.replacer = typeof e.replacer == "function" ? e.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
  }
  g(fd, "State");
  function so(e, t) {
    for (var r = Lt.repeat(" ", t), i = 0, n = -1, a = "", s, o = e.length; i < o; )
      n = e.indexOf(`
`, i), n === -1 ? (s = e.slice(i), i = o) : (s = e.slice(i, n + 1), i = n + 1), s.length && s !== `
` && (a += r), a += s;
    return a;
  }
  g(so, "indentString");
  function mn(e, t) {
    return `
` + Lt.repeat(" ", e.indent * t);
  }
  g(mn, "generateNextLine");
  function md(e, t) {
    var r, i, n;
    for (r = 0, i = e.implicitTypes.length; r < i; r += 1)
      if (n = e.implicitTypes[r], n.resolve(t))
        return true;
    return false;
  }
  g(md, "testImplicitResolving");
  function yi(e) {
    return e === Xm || e === Vm;
  }
  g(yi, "isWhitespace");
  function $r(e) {
    return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && e !== 8232 && e !== 8233 || 57344 <= e && e <= 65533 && e !== Qo || 65536 <= e && e <= 1114111;
  }
  g($r, "isPrintable");
  function lo(e) {
    return $r(e) && e !== Qo && e !== Gm && e !== fi;
  }
  g(lo, "isNsCharOrWhitespace");
  function ho(e, t, r) {
    var i = lo(e), n = i && !yi(e);
    return (r ? i : i && e !== ld && e !== hd && e !== cd && e !== dd && e !== ud) && e !== oo && !(t === fn && !n) || lo(t) && !yi(t) && e === oo || t === fn && n;
  }
  g(ho, "isPlainSafe");
  function yd(e) {
    return $r(e) && e !== Qo && !yi(e) && e !== ry && e !== ay && e !== fn && e !== ld && e !== hd && e !== cd && e !== dd && e !== ud && e !== oo && e !== Jm && e !== ey && e !== Zm && e !== ly && e !== iy && e !== ny && e !== ty && e !== Qm && e !== Km && e !== oy && e !== sy;
  }
  g(yd, "isPlainSafeFirst");
  function xd(e) {
    return !yi(e) && e !== fn;
  }
  g(xd, "isPlainSafeLast");
  function vr(e, t) {
    var r = e.charCodeAt(t), i;
    return r >= 55296 && r <= 56319 && t + 1 < e.length && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
  }
  g(vr, "codePointAt");
  function Ko(e) {
    var t = /^\n* /;
    return t.test(e);
  }
  g(Ko, "needIndentIndicator");
  var bd = 1, co = 2, kd = 3, Cd = 4, kr = 5;
  function vd(e, t, r, i, n, a, s, o) {
    var l, h = 0, c = null, d = false, u = false, p = i !== -1, f = -1, m = yd(vr(e, 0)) && xd(vr(e, e.length - 1));
    if (t || s)
      for (l = 0; l < e.length; h >= 65536 ? l += 2 : l++) {
        if (h = vr(e, l), !$r(h))
          return kr;
        m = m && ho(h, c, o), c = h;
      }
    else {
      for (l = 0; l < e.length; h >= 65536 ? l += 2 : l++) {
        if (h = vr(e, l), h === fi)
          d = true, p && (u = u || l - f - 1 > i && e[f + 1] !== " ", f = l);
        else if (!$r(h))
          return kr;
        m = m && ho(h, c, o), c = h;
      }
      u = u || p && l - f - 1 > i && e[f + 1] !== " ";
    }
    return !d && !u ? m && !s && !n(e) ? bd : a === mi ? kr : co : r > 9 && Ko(e) ? kr : s ? a === mi ? kr : co : u ? Cd : kd;
  }
  g(vd, "chooseScalarStyle");
  function wd(e, t, r, i, n) {
    e.dump = function() {
      if (t.length === 0)
        return e.quotingType === mi ? '""' : "''";
      if (!e.noCompatMode && (hy.indexOf(t) !== -1 || cy.test(t)))
        return e.quotingType === mi ? '"' + t + '"' : "'" + t + "'";
      var a = e.indent * Math.max(1, r), s = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - a), o = i || e.flowLevel > -1 && r >= e.flowLevel;
      function l(h) {
        return md(e, h);
      }
      switch (g(l, "testAmbiguity"), vd(t, o, e.indent, s, l, e.quotingType, e.forceQuotes && !i, n)) {
        case bd:
          return t;
        case co:
          return "'" + t.replace(/'/g, "''") + "'";
        case kd:
          return "|" + uo(t, e.indent) + po(so(t, a));
        case Cd:
          return ">" + uo(t, e.indent) + po(so(_d(t, s), a));
        case kr:
          return '"' + Sd(t) + '"';
        default:
          throw new Qt("impossible error: invalid scalar style");
      }
    }();
  }
  g(wd, "writeScalar");
  function uo(e, t) {
    var r = Ko(e) ? String(t) : "", i = e[e.length - 1] === `
`, n = i && (e[e.length - 2] === `
` || e === `
`), a = n ? "+" : i ? "" : "-";
    return r + a + `
`;
  }
  g(uo, "blockHeader");
  function po(e) {
    return e[e.length - 1] === `
` ? e.slice(0, -1) : e;
  }
  g(po, "dropEndingNewline");
  function _d(e, t) {
    for (var r = /(\n+)([^\n]*)/g, i = function() {
      var h = e.indexOf(`
`);
      return h = h !== -1 ? h : e.length, r.lastIndex = h, go(e.slice(0, h), t);
    }(), n = e[0] === `
` || e[0] === " ", a, s; s = r.exec(e); ) {
      var o = s[1], l = s[2];
      a = l[0] === " ", i += o + (!n && !a && l !== "" ? `
` : "") + go(l, t), n = a;
    }
    return i;
  }
  g(_d, "foldString");
  function go(e, t) {
    if (e === "" || e[0] === " ")
      return e;
    for (var r = / [^ ]/g, i, n = 0, a, s = 0, o = 0, l = ""; i = r.exec(e); )
      o = i.index, o - n > t && (a = s > n ? s : o, l += `
` + e.slice(n, a), n = a + 1), s = o;
    return l += `
`, e.length - n > t && s > n ? l += e.slice(n, s) + `
` + e.slice(s + 1) : l += e.slice(n), l.slice(1);
  }
  g(go, "foldLine");
  function Sd(e) {
    for (var t = "", r = 0, i, n = 0; n < e.length; r >= 65536 ? n += 2 : n++)
      r = vr(e, n), i = qt[r], !i && $r(r) ? (t += e[n], r >= 65536 && (t += e[n + 1])) : t += i || gd(r);
    return t;
  }
  g(Sd, "escapeString");
  function Td(e, t, r) {
    var i = "", n = e.tag, a, s, o;
    for (a = 0, s = r.length; a < s; a += 1)
      o = r[a], e.replacer && (o = e.replacer.call(r, String(a), o)), (ye(e, t, o, false, false) || typeof o > "u" && ye(e, t, null, false, false)) && (i !== "" && (i += "," + (e.condenseFlow ? "" : " ")), i += e.dump);
    e.tag = n, e.dump = "[" + i + "]";
  }
  g(Td, "writeFlowSequence");
  function fo(e, t, r, i) {
    var n = "", a = e.tag, s, o, l;
    for (s = 0, o = r.length; s < o; s += 1)
      l = r[s], e.replacer && (l = e.replacer.call(r, String(s), l)), (ye(e, t + 1, l, true, true, false, true) || typeof l > "u" && ye(e, t + 1, null, true, true, false, true)) && ((!i || n !== "") && (n += mn(e, t)), e.dump && fi === e.dump.charCodeAt(0) ? n += "-" : n += "- ", n += e.dump);
    e.tag = a, e.dump = n || "[]";
  }
  g(fo, "writeBlockSequence");
  function Bd(e, t, r) {
    var i = "", n = e.tag, a = Object.keys(r), s, o, l, h, c;
    for (s = 0, o = a.length; s < o; s += 1)
      c = "", i !== "" && (c += ", "), e.condenseFlow && (c += '"'), l = a[s], h = r[l], e.replacer && (h = e.replacer.call(r, l, h)), ye(e, t, l, false, false) && (e.dump.length > 1024 && (c += "? "), c += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), ye(e, t, h, false, false) && (c += e.dump, i += c));
    e.tag = n, e.dump = "{" + i + "}";
  }
  g(Bd, "writeFlowMapping");
  function Ld(e, t, r, i) {
    var n = "", a = e.tag, s = Object.keys(r), o, l, h, c, d, u;
    if (e.sortKeys === true)
      s.sort();
    else if (typeof e.sortKeys == "function")
      s.sort(e.sortKeys);
    else if (e.sortKeys)
      throw new Qt("sortKeys must be a boolean or a function");
    for (o = 0, l = s.length; o < l; o += 1)
      u = "", (!i || n !== "") && (u += mn(e, t)), h = s[o], c = r[h], e.replacer && (c = e.replacer.call(r, h, c)), ye(e, t + 1, h, true, true, true) && (d = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024, d && (e.dump && fi === e.dump.charCodeAt(0) ? u += "?" : u += "? "), u += e.dump, d && (u += mn(e, t)), ye(e, t + 1, c, true, d) && (e.dump && fi === e.dump.charCodeAt(0) ? u += ":" : u += ": ", u += e.dump, n += u));
    e.tag = a, e.dump = n || "{}";
  }
  g(Ld, "writeBlockMapping");
  function mo(e, t, r) {
    var i, n, a, s, o, l;
    for (n = r ? e.explicitTypes : e.implicitTypes, a = 0, s = n.length; a < s; a += 1)
      if (o = n[a], (o.instanceOf || o.predicate) && (!o.instanceOf || typeof t == "object" && t instanceof o.instanceOf) && (!o.predicate || o.predicate(t))) {
        if (r ? o.multi && o.representName ? e.tag = o.representName(t) : e.tag = o.tag : e.tag = "?", o.represent) {
          if (l = e.styleMap[o.tag] || o.defaultStyle, od.call(o.represent) === "[object Function]")
            i = o.represent(t, l);
          else if (sd.call(o.represent, l))
            i = o.represent[l](t, l);
          else
            throw new Qt("!<" + o.tag + '> tag resolver accepts not "' + l + '" style');
          e.dump = i;
        }
        return true;
      }
    return false;
  }
  g(mo, "detectType");
  function ye(e, t, r, i, n, a, s) {
    e.tag = null, e.dump = r, mo(e, r, false) || mo(e, r, true);
    var o = od.call(e.dump), l = i, h;
    i && (i = e.flowLevel < 0 || e.flowLevel > t);
    var c = o === "[object Object]" || o === "[object Array]", d, u;
    if (c && (d = e.duplicates.indexOf(r), u = d !== -1), (e.tag !== null && e.tag !== "?" || u || e.indent !== 2 && t > 0) && (n = false), u && e.usedDuplicates[d])
      e.dump = "*ref_" + d;
    else {
      if (c && u && !e.usedDuplicates[d] && (e.usedDuplicates[d] = true), o === "[object Object]")
        i && Object.keys(e.dump).length !== 0 ? (Ld(e, t, e.dump, n), u && (e.dump = "&ref_" + d + e.dump)) : (Bd(e, t, e.dump), u && (e.dump = "&ref_" + d + " " + e.dump));
      else if (o === "[object Array]")
        i && e.dump.length !== 0 ? (e.noArrayIndent && !s && t > 0 ? fo(e, t - 1, e.dump, n) : fo(e, t, e.dump, n), u && (e.dump = "&ref_" + d + e.dump)) : (Td(e, t, e.dump), u && (e.dump = "&ref_" + d + " " + e.dump));
      else if (o === "[object String]")
        e.tag !== "?" && wd(e, e.dump, t, a, l);
      else {
        if (o === "[object Undefined]" || e.skipInvalid)
          return false;
        throw new Qt("unacceptable kind of an object to dump " + o);
      }
      e.tag !== null && e.tag !== "?" && (h = encodeURI(e.tag[0] === "!" ? e.tag.slice(1) : e.tag).replace(/!/g, "%21"), e.tag[0] === "!" ? h = "!" + h : h.slice(0, 18) === "tag:yaml.org,2002:" ? h = "!!" + h.slice(18) : h = "!<" + h + ">", e.dump = h + " " + e.dump);
    }
    return true;
  }
  g(ye, "writeNode");
  function Md(e, t) {
    var r = [], i = [], n, a;
    for (yn(e, r, i), n = 0, a = i.length; n < a; n += 1)
      t.duplicates.push(r[i[n]]);
    t.usedDuplicates = new Array(a);
  }
  g(Md, "getDuplicateReferences");
  function yn(e, t, r) {
    var i, n, a;
    if (e !== null && typeof e == "object")
      if (n = t.indexOf(e), n !== -1)
        r.indexOf(n) === -1 && r.push(n);
      else if (t.push(e), Array.isArray(e))
        for (n = 0, a = e.length; n < a; n += 1)
          yn(e[n], t, r);
      else
        for (i = Object.keys(e), n = 0, a = i.length; n < a; n += 1)
          yn(e[i[n]], t, r);
  }
  g(yn, "inspectNode");
  function uy(e, t) {
    t = t || {};
    var r = new fd(t);
    r.noRefs || Md(e, r);
    var i = e;
    return r.replacer && (i = r.replacer.call({
      "": i
    }, "", i)), ye(r, 0, i, true, true) ? r.dump + `
` : "";
  }
  g(uy, "dump$1");
  function py(e, t) {
    return function() {
      throw new Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
    };
  }
  g(py, "renamed");
  gy = kc;
  fy = Um.load;
  var re = {
    aggregation: 18,
    extension: 18,
    composition: 18,
    dependency: 6,
    lollipop: 13.5,
    arrow_point: 4
  };
  function ai(e, t) {
    if (e === void 0 || t === void 0)
      return {
        angle: 0,
        deltaX: 0,
        deltaY: 0
      };
    e = kt(e), t = kt(t);
    const [r, i] = [
      e.x,
      e.y
    ], [n, a] = [
      t.x,
      t.y
    ], s = n - r, o = a - i;
    return {
      angle: Math.atan(o / s),
      deltaX: s,
      deltaY: o
    };
  }
  g(ai, "calculateDeltaAndAngle");
  let kt;
  kt = g((e) => Array.isArray(e) ? {
    x: e[0],
    y: e[1]
  } : e, "pointTransformer");
  my = g((e) => ({
    x: g(function(t, r, i) {
      let n = 0;
      const a = kt(i[0]).x < kt(i[i.length - 1]).x ? "left" : "right";
      if (r === 0 && Object.hasOwn(re, e.arrowTypeStart)) {
        const { angle: p, deltaX: f } = ai(i[0], i[1]);
        n = re[e.arrowTypeStart] * Math.cos(p) * (f >= 0 ? 1 : -1);
      } else if (r === i.length - 1 && Object.hasOwn(re, e.arrowTypeEnd)) {
        const { angle: p, deltaX: f } = ai(i[i.length - 1], i[i.length - 2]);
        n = re[e.arrowTypeEnd] * Math.cos(p) * (f >= 0 ? 1 : -1);
      }
      const s = Math.abs(kt(t).x - kt(i[i.length - 1]).x), o = Math.abs(kt(t).y - kt(i[i.length - 1]).y), l = Math.abs(kt(t).x - kt(i[0]).x), h = Math.abs(kt(t).y - kt(i[0]).y), c = re[e.arrowTypeStart], d = re[e.arrowTypeEnd], u = 1;
      if (s < d && s > 0 && o < d) {
        let p = d + u - s;
        p *= a === "right" ? -1 : 1, n -= p;
      }
      if (l < c && l > 0 && h < c) {
        let p = c + u - l;
        p *= a === "right" ? -1 : 1, n += p;
      }
      return kt(t).x + n;
    }, "x"),
    y: g(function(t, r, i) {
      let n = 0;
      const a = kt(i[0]).y < kt(i[i.length - 1]).y ? "down" : "up";
      if (r === 0 && Object.hasOwn(re, e.arrowTypeStart)) {
        const { angle: p, deltaY: f } = ai(i[0], i[1]);
        n = re[e.arrowTypeStart] * Math.abs(Math.sin(p)) * (f >= 0 ? 1 : -1);
      } else if (r === i.length - 1 && Object.hasOwn(re, e.arrowTypeEnd)) {
        const { angle: p, deltaY: f } = ai(i[i.length - 1], i[i.length - 2]);
        n = re[e.arrowTypeEnd] * Math.abs(Math.sin(p)) * (f >= 0 ? 1 : -1);
      }
      const s = Math.abs(kt(t).y - kt(i[i.length - 1]).y), o = Math.abs(kt(t).x - kt(i[i.length - 1]).x), l = Math.abs(kt(t).y - kt(i[0]).y), h = Math.abs(kt(t).x - kt(i[0]).x), c = re[e.arrowTypeStart], d = re[e.arrowTypeEnd], u = 1;
      if (s < d && s > 0 && o < d) {
        let p = d + u - s;
        p *= a === "up" ? -1 : 1, n -= p;
      }
      if (l < c && l > 0 && h < c) {
        let p = c + u - l;
        p *= a === "up" ? -1 : 1, n += p;
      }
      return kt(t).y + n;
    }, "y")
  }), "getLineFunctionsWithOffset");
  Jo = g(({ flowchart: e }) => {
    var t, r;
    const i = ((t = e == null ? void 0 : e.subGraphTitleMargin) == null ? void 0 : t.top) ?? 0, n = ((r = e == null ? void 0 : e.subGraphTitleMargin) == null ? void 0 : r.bottom) ?? 0, a = i + n;
    return {
      subGraphTitleTopMargin: i,
      subGraphTitleBottomMargin: n,
      subGraphTitleTotalMargin: a
    };
  }, "getSubGraphTitleMargins");
  const yy = Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }), xn = Object.freeze({
    rotate: 0,
    vFlip: false,
    hFlip: false
  }), Ad = Object.freeze({
    ...yy,
    ...xn
  }), xy = Object.freeze({
    ...Ad,
    body: "",
    hidden: false
  }), by = Object.freeze({
    width: null,
    height: null
  }), ky = Object.freeze({
    ...by,
    ...xn
  }), Cy = (e, t, r, i = "") => {
    const n = e.split(":");
    if (e.slice(0, 1) === "@") {
      if (n.length < 2 || n.length > 3)
        return null;
      i = n.shift().slice(1);
    }
    if (n.length > 3 || !n.length)
      return null;
    if (n.length > 1) {
      const o = n.pop(), l = n.pop(), h = {
        provider: n.length > 0 ? n[0] : i,
        prefix: l,
        name: o
      };
      return Aa(h) ? h : null;
    }
    const a = n[0], s = a.split("-");
    if (s.length > 1) {
      const o = {
        provider: i,
        prefix: s.shift(),
        name: s.join("-")
      };
      return Aa(o) ? o : null;
    }
    if (r && i === "") {
      const o = {
        provider: i,
        prefix: "",
        name: a
      };
      return Aa(o, r) ? o : null;
    }
    return null;
  }, Aa = (e, t) => e ? !!((t && e.prefix === "" || e.prefix) && e.name) : false;
  function vy(e, t) {
    const r = {};
    !e.hFlip != !t.hFlip && (r.hFlip = true), !e.vFlip != !t.vFlip && (r.vFlip = true);
    const i = ((e.rotate || 0) + (t.rotate || 0)) % 4;
    return i && (r.rotate = i), r;
  }
  function xl(e, t) {
    const r = vy(e, t);
    for (const i in xy)
      i in xn ? i in e && !(i in r) && (r[i] = xn[i]) : i in t ? r[i] = t[i] : i in e && (r[i] = e[i]);
    return r;
  }
  function wy(e, t) {
    const r = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
    function a(s) {
      if (r[s])
        return n[s] = [];
      if (!(s in n)) {
        n[s] = null;
        const o = i[s] && i[s].parent, l = o && a(o);
        l && (n[s] = [
          o
        ].concat(l));
      }
      return n[s];
    }
    return (t || Object.keys(r).concat(Object.keys(i))).forEach(a), n;
  }
  function bl(e, t, r) {
    const i = e.icons, n = e.aliases || /* @__PURE__ */ Object.create(null);
    let a = {};
    function s(o) {
      a = xl(i[o] || n[o], a);
    }
    return s(t), r.forEach(s), xl(e, a);
  }
  function _y(e, t) {
    if (e.icons[t])
      return bl(e, t, []);
    const r = wy(e, [
      t
    ])[t];
    return r ? bl(e, t, r) : null;
  }
  const Sy = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Ty = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
  function kl(e, t, r) {
    if (t === 1)
      return e;
    if (r = r || 100, typeof e == "number")
      return Math.ceil(e * t * r) / r;
    if (typeof e != "string")
      return e;
    const i = e.split(Sy);
    if (i === null || !i.length)
      return e;
    const n = [];
    let a = i.shift(), s = Ty.test(a);
    for (; ; ) {
      if (s) {
        const o = parseFloat(a);
        isNaN(o) ? n.push(a) : n.push(Math.ceil(o * t * r) / r);
      } else
        n.push(a);
      if (a = i.shift(), a === void 0)
        return n.join("");
      s = !s;
    }
  }
  function By(e, t = "defs") {
    let r = "";
    const i = e.indexOf("<" + t);
    for (; i >= 0; ) {
      const n = e.indexOf(">", i), a = e.indexOf("</" + t);
      if (n === -1 || a === -1)
        break;
      const s = e.indexOf(">", a);
      if (s === -1)
        break;
      r += e.slice(n + 1, a).trim(), e = e.slice(0, i).trim() + e.slice(s + 1);
    }
    return {
      defs: r,
      content: e
    };
  }
  function Ly(e, t) {
    return e ? "<defs>" + e + "</defs>" + t : t;
  }
  function My(e, t, r) {
    const i = By(e);
    return Ly(i.defs, t + i.content + r);
  }
  const Ay = (e) => e === "unset" || e === "undefined" || e === "none";
  function Fy(e, t) {
    const r = {
      ...Ad,
      ...e
    }, i = {
      ...ky,
      ...t
    }, n = {
      left: r.left,
      top: r.top,
      width: r.width,
      height: r.height
    };
    let a = r.body;
    [
      r,
      i
    ].forEach((m) => {
      const y = [], x = m.hFlip, b = m.vFlip;
      let C = m.rotate;
      x ? b ? C += 2 : (y.push("translate(" + (n.width + n.left).toString() + " " + (0 - n.top).toString() + ")"), y.push("scale(-1 1)"), n.top = n.left = 0) : b && (y.push("translate(" + (0 - n.left).toString() + " " + (n.height + n.top).toString() + ")"), y.push("scale(1 -1)"), n.top = n.left = 0);
      let S;
      switch (C < 0 && (C -= Math.floor(C / 4) * 4), C = C % 4, C) {
        case 1:
          S = n.height / 2 + n.top, y.unshift("rotate(90 " + S.toString() + " " + S.toString() + ")");
          break;
        case 2:
          y.unshift("rotate(180 " + (n.width / 2 + n.left).toString() + " " + (n.height / 2 + n.top).toString() + ")");
          break;
        case 3:
          S = n.width / 2 + n.left, y.unshift("rotate(-90 " + S.toString() + " " + S.toString() + ")");
          break;
      }
      C % 2 === 1 && (n.left !== n.top && (S = n.left, n.left = n.top, n.top = S), n.width !== n.height && (S = n.width, n.width = n.height, n.height = S)), y.length && (a = My(a, '<g transform="' + y.join(" ") + '">', "</g>"));
    });
    const s = i.width, o = i.height, l = n.width, h = n.height;
    let c, d;
    s === null ? (d = o === null ? "1em" : o === "auto" ? h : o, c = kl(d, l / h)) : (c = s === "auto" ? l : s, d = o === null ? kl(c, h / l) : o === "auto" ? h : o);
    const u = {}, p = (m, y) => {
      Ay(y) || (u[m] = y.toString());
    };
    p("width", c), p("height", d);
    const f = [
      n.left,
      n.top,
      l,
      h
    ];
    return u.viewBox = f.join(" "), {
      attributes: u,
      viewBox: f,
      body: a
    };
  }
  const $y = /\sid="(\S+)"/g, Ey = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
  let Oy = 0;
  function Dy(e, t = Ey) {
    const r = [];
    let i;
    for (; i = $y.exec(e); )
      r.push(i[1]);
    if (!r.length)
      return e;
    const n = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
    return r.forEach((a) => {
      const s = typeof t == "function" ? t(a) : t + (Oy++).toString(), o = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      e = e.replace(new RegExp('([#;"])(' + o + ')([")]|\\.[a-z])', "g"), "$1" + s + n + "$3");
    }), e = e.replace(new RegExp(n, "g"), ""), e;
  }
  function Iy(e, t) {
    let r = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for (const i in t)
      r += " " + i + '="' + t[i] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + r + ">" + e + "</svg>";
  }
  let yo, Fd, Ry, Qr, Ft, Cl;
  Py = {
    body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
    height: 80,
    width: 80
  };
  yo = /* @__PURE__ */ new Map();
  Fd = /* @__PURE__ */ new Map();
  zy = g((e) => {
    for (const t of e) {
      if (!t.name)
        throw new Error('Invalid icon loader. Must have a "name" property with non-empty string value.');
      if (D.debug("Registering icon pack:", t.name), "loader" in t)
        Fd.set(t.name, t.loader);
      else if ("icons" in t)
        yo.set(t.name, t.icons);
      else
        throw D.error("Invalid icon loader:", t), new Error('Invalid icon loader. Must have either "icons" or "loader" property.');
    }
  }, "registerIconPacks");
  Ry = g(async (e, t) => {
    const r = Cy(e, true, t !== void 0);
    if (!r)
      throw new Error(`Invalid icon name: ${e}`);
    const i = r.prefix || t;
    if (!i)
      throw new Error(`Icon name must contain a prefix: ${e}`);
    let n = yo.get(i);
    if (!n) {
      const s = Fd.get(i);
      if (!s)
        throw new Error(`Icon set not found: ${r.prefix}`);
      try {
        n = {
          ...await s(),
          prefix: i
        }, yo.set(i, n);
      } catch (o) {
        throw D.error(o), new Error(`Failed to load icon set: ${r.prefix}`);
      }
    }
    const a = _y(n, r.name);
    if (!a)
      throw new Error(`Icon not found: ${e}`);
    return a;
  }, "getRegisteredIconData");
  Wn = g(async (e, t) => {
    let r;
    try {
      r = await Ry(e, t == null ? void 0 : t.fallbackPrefix);
    } catch (n) {
      D.error(n), r = Py;
    }
    const i = Fy(r, t);
    return Iy(Dy(i.body), i.attributes);
  }, "getIconSVG");
  Qr = {};
  Ft = {};
  function Ny() {
    return Cl || (Cl = 1, Object.defineProperty(Ft, "__esModule", {
      value: true
    }), Ft.BLANK_URL = Ft.relativeFirstCharacters = Ft.whitespaceEscapeCharsRegex = Ft.urlSchemeRegex = Ft.ctrlCharactersRegex = Ft.htmlCtrlEntityRegex = Ft.htmlEntitiesRegex = Ft.invalidProtocolRegex = void 0, Ft.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im, Ft.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g, Ft.htmlCtrlEntityRegex = /&(newline|tab);/gi, Ft.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, Ft.urlSchemeRegex = /^.+(:|&colon;)/gim, Ft.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g, Ft.relativeFirstCharacters = [
      ".",
      "/"
    ], Ft.BLANK_URL = "about:blank"), Ft;
  }
  var vl;
  function qy() {
    if (vl)
      return Qr;
    vl = 1, Object.defineProperty(Qr, "__esModule", {
      value: true
    }), Qr.sanitizeUrl = void 0;
    var e = Ny();
    function t(s) {
      return e.relativeFirstCharacters.indexOf(s[0]) > -1;
    }
    function r(s) {
      var o = s.replace(e.ctrlCharactersRegex, "");
      return o.replace(e.htmlEntitiesRegex, function(l, h) {
        return String.fromCharCode(h);
      });
    }
    function i(s) {
      return URL.canParse(s);
    }
    function n(s) {
      try {
        return decodeURIComponent(s);
      } catch {
        return s;
      }
    }
    function a(s) {
      if (!s)
        return e.BLANK_URL;
      var o, l = n(s.trim());
      do
        l = r(l).replace(e.htmlCtrlEntityRegex, "").replace(e.ctrlCharactersRegex, "").replace(e.whitespaceEscapeCharsRegex, "").trim(), l = n(l), o = l.match(e.ctrlCharactersRegex) || l.match(e.htmlEntitiesRegex) || l.match(e.htmlCtrlEntityRegex) || l.match(e.whitespaceEscapeCharsRegex);
      while (o && o.length > 0);
      var h = l;
      if (!h)
        return e.BLANK_URL;
      if (t(h))
        return h;
      var c = h.trimStart(), d = c.match(e.urlSchemeRegex);
      if (!d)
        return h;
      var u = d[0].toLowerCase().trim();
      if (e.invalidProtocolRegex.test(u))
        return e.BLANK_URL;
      var p = c.replace(/\\/g, "/");
      if (u === "mailto:" || u.includes("://"))
        return p;
      if (u === "http:" || u === "https:") {
        if (!i(p))
          return e.BLANK_URL;
        var f = new URL(p);
        return f.protocol = f.protocol.toLowerCase(), f.hostname = f.hostname.toLowerCase(), f.toString();
      }
      return p;
    }
    return Qr.sanitizeUrl = a, Qr;
  }
  jy = qy();
  O_ = Math.abs;
  D_ = Math.atan2;
  I_ = Math.cos;
  P_ = Math.max;
  z_ = Math.min;
  R_ = Math.sin;
  N_ = Math.sqrt;
  wl = 1e-12;
  ts = Math.PI;
  _l = ts / 2;
  q_ = 2 * ts;
  j_ = function(e) {
    return e > 1 ? 0 : e < -1 ? ts : Math.acos(e);
  };
  W_ = function(e) {
    return e >= 1 ? _l : e <= -1 ? -_l : Math.asin(e);
  };
  function $d(e) {
    this._context = e;
  }
  $d.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function(e, t) {
      switch (e = +e, t = +t, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
        default:
          this._context.lineTo(e, t);
          break;
      }
    }
  };
  function bn(e) {
    return new $d(e);
  }
  Wy = function(e, t) {
    var r = xr(true), i = null, n = bn, a = null, s = Tf(o);
    e = typeof e == "function" ? e : e === void 0 ? Bf : xr(e), t = typeof t == "function" ? t : t === void 0 ? Lf : xr(t);
    function o(l) {
      var h, c = (l = Mf(l)).length, d, u = false, p;
      for (i == null && (a = n(p = s())), h = 0; h <= c; ++h)
        !(h < c && r(d = l[h], h, l)) === u && ((u = !u) ? a.lineStart() : a.lineEnd()), u && a.point(+e(d, h, l), +t(d, h, l));
      if (p)
        return a = null, p + "" || null;
    }
    return o.x = function(l) {
      return arguments.length ? (e = typeof l == "function" ? l : xr(+l), o) : e;
    }, o.y = function(l) {
      return arguments.length ? (t = typeof l == "function" ? l : xr(+l), o) : t;
    }, o.defined = function(l) {
      return arguments.length ? (r = typeof l == "function" ? l : xr(!!l), o) : r;
    }, o.curve = function(l) {
      return arguments.length ? (n = l, i != null && (a = n(i)), o) : n;
    }, o.context = function(l) {
      return arguments.length ? (l == null ? i = a = null : a = n(i = l), o) : i;
    }, o;
  };
  function Re() {
  }
  function kn(e, t, r) {
    e._context.bezierCurveTo((2 * e._x0 + e._x1) / 3, (2 * e._y0 + e._y1) / 3, (e._x0 + 2 * e._x1) / 3, (e._y0 + 2 * e._y1) / 3, (e._x0 + 4 * e._x1 + t) / 6, (e._y0 + 4 * e._y1 + r) / 6);
  }
  function Hn(e) {
    this._context = e;
  }
  Hn.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 3:
          kn(this, this._x1, this._y1);
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
      }
      (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function(e, t) {
      switch (e = +e, t = +t, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
        default:
          kn(this, e, t);
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
    }
  };
  tn = function(e) {
    return new Hn(e);
  };
  function Ed(e) {
    this._context = e;
  }
  Ed.prototype = {
    areaStart: Re,
    areaEnd: Re,
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 1: {
          this._context.moveTo(this._x2, this._y2), this._context.closePath();
          break;
        }
        case 2: {
          this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
          break;
        }
      }
    },
    point: function(e, t) {
      switch (e = +e, t = +t, this._point) {
        case 0:
          this._point = 1, this._x2 = e, this._y2 = t;
          break;
        case 1:
          this._point = 2, this._x3 = e, this._y3 = t;
          break;
        case 2:
          this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
          break;
        default:
          kn(this, e, t);
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
    }
  };
  function Hy(e) {
    return new Ed(e);
  }
  function Od(e) {
    this._context = e;
  }
  Od.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
    },
    lineEnd: function() {
      (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function(e, t) {
      switch (e = +e, t = +t, this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          var r = (this._x0 + 4 * this._x1 + e) / 6, i = (this._y0 + 4 * this._y1 + t) / 6;
          this._line ? this._context.lineTo(r, i) : this._context.moveTo(r, i);
          break;
        case 3:
          this._point = 4;
        default:
          kn(this, e, t);
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
    }
  };
  function Yy(e) {
    return new Od(e);
  }
  function Dd(e, t) {
    this._basis = new Hn(e), this._beta = t;
  }
  Dd.prototype = {
    lineStart: function() {
      this._x = [], this._y = [], this._basis.lineStart();
    },
    lineEnd: function() {
      var e = this._x, t = this._y, r = e.length - 1;
      if (r > 0)
        for (var i = e[0], n = t[0], a = e[r] - i, s = t[r] - n, o = -1, l; ++o <= r; )
          l = o / r, this._basis.point(this._beta * e[o] + (1 - this._beta) * (i + l * a), this._beta * t[o] + (1 - this._beta) * (n + l * s));
      this._x = this._y = null, this._basis.lineEnd();
    },
    point: function(e, t) {
      this._x.push(+e), this._y.push(+t);
    }
  };
  const Uy = function e(t) {
    function r(i) {
      return t === 1 ? new Hn(i) : new Dd(i, t);
    }
    return r.beta = function(i) {
      return e(+i);
    }, r;
  }(0.85);
  function Cn(e, t, r) {
    e._context.bezierCurveTo(e._x1 + e._k * (e._x2 - e._x0), e._y1 + e._k * (e._y2 - e._y0), e._x2 + e._k * (e._x1 - t), e._y2 + e._k * (e._y1 - r), e._x2, e._y2);
  }
  function es(e, t) {
    this._context = e, this._k = (1 - t) / 6;
  }
  es.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          Cn(this, this._x1, this._y1);
          break;
      }
      (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function(e, t) {
      switch (e = +e, t = +t, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2, this._x1 = e, this._y1 = t;
          break;
        case 2:
          this._point = 3;
        default:
          Cn(this, e, t);
          break;
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
    }
  };
  const Id = function e(t) {
    function r(i) {
      return new es(i, t);
    }
    return r.tension = function(i) {
      return e(+i);
    }, r;
  }(0);
  function rs(e, t) {
    this._context = e, this._k = (1 - t) / 6;
  }
  rs.prototype = {
    areaStart: Re,
    areaEnd: Re,
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 1: {
          this._context.moveTo(this._x3, this._y3), this._context.closePath();
          break;
        }
        case 2: {
          this._context.lineTo(this._x3, this._y3), this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
          break;
        }
      }
    },
    point: function(e, t) {
      switch (e = +e, t = +t, this._point) {
        case 0:
          this._point = 1, this._x3 = e, this._y3 = t;
          break;
        case 1:
          this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
          break;
        case 2:
          this._point = 3, this._x5 = e, this._y5 = t;
          break;
        default:
          Cn(this, e, t);
          break;
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
    }
  };
  const Vy = function e(t) {
    function r(i) {
      return new rs(i, t);
    }
    return r.tension = function(i) {
      return e(+i);
    }, r;
  }(0);
  function is(e, t) {
    this._context = e, this._k = (1 - t) / 6;
  }
  is.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
    },
    lineEnd: function() {
      (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function(e, t) {
      switch (e = +e, t = +t, this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
          break;
        case 3:
          this._point = 4;
        default:
          Cn(this, e, t);
          break;
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
    }
  };
  const Gy = function e(t) {
    function r(i) {
      return new is(i, t);
    }
    return r.tension = function(i) {
      return e(+i);
    }, r;
  }(0);
  function ns(e, t, r) {
    var i = e._x1, n = e._y1, a = e._x2, s = e._y2;
    if (e._l01_a > wl) {
      var o = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, l = 3 * e._l01_a * (e._l01_a + e._l12_a);
      i = (i * o - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / l, n = (n * o - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / l;
    }
    if (e._l23_a > wl) {
      var h = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, c = 3 * e._l23_a * (e._l23_a + e._l12_a);
      a = (a * h + e._x1 * e._l23_2a - t * e._l12_2a) / c, s = (s * h + e._y1 * e._l23_2a - r * e._l12_2a) / c;
    }
    e._context.bezierCurveTo(i, n, a, s, e._x2, e._y2);
  }
  function Pd(e, t) {
    this._context = e, this._alpha = t;
  }
  Pd.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          this.point(this._x2, this._y2);
          break;
      }
      (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function(e, t) {
      if (e = +e, t = +t, this._point) {
        var r = this._x2 - e, i = this._y2 - t;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
      }
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
        default:
          ns(this, e, t);
          break;
      }
      this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
    }
  };
  const zd = function e(t) {
    function r(i) {
      return t ? new Pd(i, t) : new es(i, 0);
    }
    return r.alpha = function(i) {
      return e(+i);
    }, r;
  }(0.5);
  function Rd(e, t) {
    this._context = e, this._alpha = t;
  }
  Rd.prototype = {
    areaStart: Re,
    areaEnd: Re,
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 1: {
          this._context.moveTo(this._x3, this._y3), this._context.closePath();
          break;
        }
        case 2: {
          this._context.lineTo(this._x3, this._y3), this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
          break;
        }
      }
    },
    point: function(e, t) {
      if (e = +e, t = +t, this._point) {
        var r = this._x2 - e, i = this._y2 - t;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
      }
      switch (this._point) {
        case 0:
          this._point = 1, this._x3 = e, this._y3 = t;
          break;
        case 1:
          this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
          break;
        case 2:
          this._point = 3, this._x5 = e, this._y5 = t;
          break;
        default:
          ns(this, e, t);
          break;
      }
      this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
    }
  };
  const Xy = function e(t) {
    function r(i) {
      return t ? new Rd(i, t) : new rs(i, 0);
    }
    return r.alpha = function(i) {
      return e(+i);
    }, r;
  }(0.5);
  function Nd(e, t) {
    this._context = e, this._alpha = t;
  }
  Nd.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
      (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function(e, t) {
      if (e = +e, t = +t, this._point) {
        var r = this._x2 - e, i = this._y2 - t;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
      }
      switch (this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
          break;
        case 3:
          this._point = 4;
        default:
          ns(this, e, t);
          break;
      }
      this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
    }
  };
  const Zy = function e(t) {
    function r(i) {
      return t ? new Nd(i, t) : new is(i, 0);
    }
    return r.alpha = function(i) {
      return e(+i);
    }, r;
  }(0.5);
  function qd(e) {
    this._context = e;
  }
  qd.prototype = {
    areaStart: Re,
    areaEnd: Re,
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      this._point && this._context.closePath();
    },
    point: function(e, t) {
      e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
    }
  };
  function Qy(e) {
    return new qd(e);
  }
  function Sl(e) {
    return e < 0 ? -1 : 1;
  }
  function Tl(e, t, r) {
    var i = e._x1 - e._x0, n = t - e._x1, a = (e._y1 - e._y0) / (i || n < 0 && -0), s = (r - e._y1) / (n || i < 0 && -0), o = (a * n + s * i) / (i + n);
    return (Sl(a) + Sl(s)) * Math.min(Math.abs(a), Math.abs(s), 0.5 * Math.abs(o)) || 0;
  }
  function Bl(e, t) {
    var r = e._x1 - e._x0;
    return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
  }
  function Fa(e, t, r) {
    var i = e._x0, n = e._y0, a = e._x1, s = e._y1, o = (a - i) / 3;
    e._context.bezierCurveTo(i + o, n + o * t, a - o, s - o * r, a, s);
  }
  function vn(e) {
    this._context = e;
  }
  vn.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
        case 3:
          Fa(this, this._t0, Bl(this, this._t0));
          break;
      }
      (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function(e, t) {
      var r = NaN;
      if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
        switch (this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, Fa(this, Bl(this, r = Tl(this, e, t)), r);
            break;
          default:
            Fa(this, this._t0, r = Tl(this, e, t));
            break;
        }
        this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
      }
    }
  };
  function jd(e) {
    this._context = new Wd(e);
  }
  (jd.prototype = Object.create(vn.prototype)).point = function(e, t) {
    vn.prototype.point.call(this, t, e);
  };
  function Wd(e) {
    this._context = e;
  }
  Wd.prototype = {
    moveTo: function(e, t) {
      this._context.moveTo(t, e);
    },
    closePath: function() {
      this._context.closePath();
    },
    lineTo: function(e, t) {
      this._context.lineTo(t, e);
    },
    bezierCurveTo: function(e, t, r, i, n, a) {
      this._context.bezierCurveTo(t, e, i, r, a, n);
    }
  };
  function Hd(e) {
    return new vn(e);
  }
  function Yd(e) {
    return new jd(e);
  }
  function Ud(e) {
    this._context = e;
  }
  Ud.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x = [], this._y = [];
    },
    lineEnd: function() {
      var e = this._x, t = this._y, r = e.length;
      if (r)
        if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
          this._context.lineTo(e[1], t[1]);
        else
          for (var i = Ll(e), n = Ll(t), a = 0, s = 1; s < r; ++a, ++s)
            this._context.bezierCurveTo(i[0][a], n[0][a], i[1][a], n[1][a], e[s], t[s]);
      (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
    },
    point: function(e, t) {
      this._x.push(+e), this._y.push(+t);
    }
  };
  function Ll(e) {
    var t, r = e.length - 1, i, n = new Array(r), a = new Array(r), s = new Array(r);
    for (n[0] = 0, a[0] = 2, s[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
      n[t] = 1, a[t] = 4, s[t] = 4 * e[t] + 2 * e[t + 1];
    for (n[r - 1] = 2, a[r - 1] = 7, s[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t)
      i = n[t] / a[t - 1], a[t] -= i, s[t] -= i * s[t - 1];
    for (n[r - 1] = s[r - 1] / a[r - 1], t = r - 2; t >= 0; --t)
      n[t] = (s[t] - n[t + 1]) / a[t];
    for (a[r - 1] = (e[r] + n[r - 1]) / 2, t = 0; t < r - 1; ++t)
      a[t] = 2 * e[t + 1] - n[t + 1];
    return [
      n,
      a
    ];
  }
  function Vd(e) {
    return new Ud(e);
  }
  function Yn(e, t) {
    this._context = e, this._t = t;
  }
  Yn.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x = this._y = NaN, this._point = 0;
    },
    lineEnd: function() {
      0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
    },
    point: function(e, t) {
      switch (e = +e, t = +t, this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
        default: {
          if (this._t <= 0)
            this._context.lineTo(this._x, t), this._context.lineTo(e, t);
          else {
            var r = this._x * (1 - this._t) + e * this._t;
            this._context.lineTo(r, this._y), this._context.lineTo(r, t);
          }
          break;
        }
      }
      this._x = e, this._y = t;
    }
  };
  function Gd(e) {
    return new Yn(e, 0.5);
  }
  function Xd(e) {
    return new Yn(e, 0);
  }
  function Zd(e) {
    return new Yn(e, 1);
  }
  let Qd, Ky, xe, Kd, Jy, tx, Kr;
  Qd = typeof global == "object" && global && global.Object === Object && global;
  Ky = typeof self == "object" && self && self.Object === Object && self;
  xe = Qd || Ky || Function("return this")();
  wn = xe.Symbol;
  Kd = Object.prototype;
  Jy = Kd.hasOwnProperty;
  tx = Kd.toString;
  Kr = wn ? wn.toStringTag : void 0;
  function ex(e) {
    var t = Jy.call(e, Kr), r = e[Kr];
    try {
      e[Kr] = void 0;
      var i = true;
    } catch {
    }
    var n = tx.call(e);
    return i && (t ? e[Kr] = r : delete e[Kr]), n;
  }
  var rx = Object.prototype, ix = rx.toString;
  function nx(e) {
    return ix.call(e);
  }
  var ax = "[object Null]", ox = "[object Undefined]", Ml = wn ? wn.toStringTag : void 0;
  Ir = function(e) {
    return e == null ? e === void 0 ? ox : ax : Ml && Ml in Object(e) ? ex(e) : nx(e);
  };
  sr = function(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  };
  var sx = "[object AsyncFunction]", lx = "[object Function]", hx = "[object GeneratorFunction]", cx = "[object Proxy]";
  as = function(e) {
    if (!sr(e))
      return false;
    var t = Ir(e);
    return t == lx || t == hx || t == sx || t == cx;
  };
  var $a = xe["__core-js_shared__"], Al = function() {
    var e = /[^.]+$/.exec($a && $a.keys && $a.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  }();
  function dx(e) {
    return !!Al && Al in e;
  }
  var ux = Function.prototype, px = ux.toString;
  function lr(e) {
    if (e != null) {
      try {
        return px.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var gx = /[\\^$.*+?()[\]{}|]/g, fx = /^\[object .+?Constructor\]$/, mx = Function.prototype, yx = Object.prototype, xx = mx.toString, bx = yx.hasOwnProperty, kx = RegExp("^" + xx.call(bx).replace(gx, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function Cx(e) {
    if (!sr(e) || dx(e))
      return false;
    var t = as(e) ? kx : fx;
    return t.test(lr(e));
  }
  function vx(e, t) {
    return e == null ? void 0 : e[t];
  }
  function hr(e, t) {
    var r = vx(e, t);
    return Cx(r) ? r : void 0;
  }
  var xi = hr(Object, "create");
  function wx() {
    this.__data__ = xi ? xi(null) : {}, this.size = 0;
  }
  function _x(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var Sx = "__lodash_hash_undefined__", Tx = Object.prototype, Bx = Tx.hasOwnProperty;
  function Lx(e) {
    var t = this.__data__;
    if (xi) {
      var r = t[e];
      return r === Sx ? void 0 : r;
    }
    return Bx.call(t, e) ? t[e] : void 0;
  }
  var Mx = Object.prototype, Ax = Mx.hasOwnProperty;
  function Fx(e) {
    var t = this.__data__;
    return xi ? t[e] !== void 0 : Ax.call(t, e);
  }
  var $x = "__lodash_hash_undefined__";
  function Ex(e, t) {
    var r = this.__data__;
    return this.size += this.has(e) ? 0 : 1, r[e] = xi && t === void 0 ? $x : t, this;
  }
  function nr(e) {
    var t = -1, r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  nr.prototype.clear = wx;
  nr.prototype.delete = _x;
  nr.prototype.get = Lx;
  nr.prototype.has = Fx;
  nr.prototype.set = Ex;
  function Ox() {
    this.__data__ = [], this.size = 0;
  }
  Un = function(e, t) {
    return e === t || e !== e && t !== t;
  };
  function Vn(e, t) {
    for (var r = e.length; r--; )
      if (Un(e[r][0], t))
        return r;
    return -1;
  }
  var Dx = Array.prototype, Ix = Dx.splice;
  function Px(e) {
    var t = this.__data__, r = Vn(t, e);
    if (r < 0)
      return false;
    var i = t.length - 1;
    return r == i ? t.pop() : Ix.call(t, r, 1), --this.size, true;
  }
  function zx(e) {
    var t = this.__data__, r = Vn(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  function Rx(e) {
    return Vn(this.__data__, e) > -1;
  }
  function Nx(e, t) {
    var r = this.__data__, i = Vn(r, e);
    return i < 0 ? (++this.size, r.push([
      e,
      t
    ])) : r[i][1] = t, this;
  }
  function $e(e) {
    var t = -1, r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  $e.prototype.clear = Ox;
  $e.prototype.delete = Px;
  $e.prototype.get = zx;
  $e.prototype.has = Rx;
  $e.prototype.set = Nx;
  var bi = hr(xe, "Map");
  function qx() {
    this.size = 0, this.__data__ = {
      hash: new nr(),
      map: new (bi || $e)(),
      string: new nr()
    };
  }
  function jx(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function Gn(e, t) {
    var r = e.__data__;
    return jx(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
  }
  function Wx(e) {
    var t = Gn(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function Hx(e) {
    return Gn(this, e).get(e);
  }
  function Yx(e) {
    return Gn(this, e).has(e);
  }
  function Ux(e, t) {
    var r = Gn(this, e), i = r.size;
    return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
  }
  je = function(e) {
    var t = -1, r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  };
  je.prototype.clear = qx;
  je.prototype.delete = Wx;
  je.prototype.get = Hx;
  je.prototype.has = Yx;
  je.prototype.set = Ux;
  var Vx = "Expected a function";
  Ti = function(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function")
      throw new TypeError(Vx);
    var r = function() {
      var i = arguments, n = t ? t.apply(this, i) : i[0], a = r.cache;
      if (a.has(n))
        return a.get(n);
      var s = e.apply(this, i);
      return r.cache = a.set(n, s) || a, s;
    };
    return r.cache = new (Ti.Cache || je)(), r;
  };
  Ti.Cache = je;
  function Gx() {
    this.__data__ = new $e(), this.size = 0;
  }
  function Xx(e) {
    var t = this.__data__, r = t.delete(e);
    return this.size = t.size, r;
  }
  function Zx(e) {
    return this.__data__.get(e);
  }
  function Qx(e) {
    return this.__data__.has(e);
  }
  var Kx = 200;
  function Jx(e, t) {
    var r = this.__data__;
    if (r instanceof $e) {
      var i = r.__data__;
      if (!bi || i.length < Kx - 1)
        return i.push([
          e,
          t
        ]), this.size = ++r.size, this;
      r = this.__data__ = new je(i);
    }
    return r.set(e, t), this.size = r.size, this;
  }
  Pr = function(e) {
    var t = this.__data__ = new $e(e);
    this.size = t.size;
  };
  Pr.prototype.clear = Gx;
  Pr.prototype.delete = Xx;
  Pr.prototype.get = Zx;
  Pr.prototype.has = Qx;
  Pr.prototype.set = Jx;
  var _n = function() {
    try {
      var e = hr(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  }();
  os = function(e, t, r) {
    t == "__proto__" && _n ? _n(e, t, {
      configurable: true,
      enumerable: true,
      value: r,
      writable: true
    }) : e[t] = r;
  };
  function xo(e, t, r) {
    (r !== void 0 && !Un(e[t], r) || r === void 0 && !(t in e)) && os(e, t, r);
  }
  function tb(e) {
    return function(t, r, i) {
      for (var n = -1, a = Object(t), s = i(t), o = s.length; o--; ) {
        var l = s[++n];
        if (r(a[l], l, a) === false)
          break;
      }
      return t;
    };
  }
  let Jd, Fl, rb, $l, El;
  eb = tb();
  Jd = typeof exports == "object" && exports && !exports.nodeType && exports;
  Fl = Jd && typeof module == "object" && module && !module.nodeType && module;
  rb = Fl && Fl.exports === Jd;
  $l = rb ? xe.Buffer : void 0;
  El = $l ? $l.allocUnsafe : void 0;
  ib = function(e, t) {
    if (t)
      return e.slice();
    var r = e.length, i = El ? El(r) : new e.constructor(r);
    return e.copy(i), i;
  };
  Ol = xe.Uint8Array;
  nb = function(e) {
    var t = new e.constructor(e.byteLength);
    return new Ol(t).set(new Ol(e)), t;
  };
  ab = function(e, t) {
    var r = t ? nb(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.length);
  };
  ob = function(e, t) {
    var r = -1, i = e.length;
    for (t || (t = Array(i)); ++r < i; )
      t[r] = e[r];
    return t;
  };
  var Dl = Object.create, sb = function() {
    function e() {
    }
    return function(t) {
      if (!sr(t))
        return {};
      if (Dl)
        return Dl(t);
      e.prototype = t;
      var r = new e();
      return e.prototype = void 0, r;
    };
  }();
  function tu(e, t) {
    return function(r) {
      return e(t(r));
    };
  }
  let lb;
  eu = tu(Object.getPrototypeOf, Object);
  lb = Object.prototype;
  Xn = function(e) {
    var t = e && e.constructor, r = typeof t == "function" && t.prototype || lb;
    return e === r;
  };
  hb = function(e) {
    return typeof e.constructor == "function" && !Xn(e) ? sb(eu(e)) : {};
  };
  Bi = function(e) {
    return e != null && typeof e == "object";
  };
  var cb = "[object Arguments]";
  function Il(e) {
    return Bi(e) && Ir(e) == cb;
  }
  let ru, db, ub, pb;
  ru = Object.prototype;
  db = ru.hasOwnProperty;
  ub = ru.propertyIsEnumerable;
  Sn = Il(function() {
    return arguments;
  }()) ? Il : function(e) {
    return Bi(e) && db.call(e, "callee") && !ub.call(e, "callee");
  };
  Tn = Array.isArray;
  pb = 9007199254740991;
  iu = function(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= pb;
  };
  Zn = function(e) {
    return e != null && iu(e.length) && !as(e);
  };
  gb = function(e) {
    return Bi(e) && Zn(e);
  };
  function fb() {
    return false;
  }
  let nu, Pl, mb, zl, yb, xb, bb, kb, au, Cb, vb;
  nu = typeof exports == "object" && exports && !exports.nodeType && exports;
  Pl = nu && typeof module == "object" && module && !module.nodeType && module;
  mb = Pl && Pl.exports === nu;
  zl = mb ? xe.Buffer : void 0;
  yb = zl ? zl.isBuffer : void 0;
  ss = yb || fb;
  xb = "[object Object]";
  bb = Function.prototype;
  kb = Object.prototype;
  au = bb.toString;
  Cb = kb.hasOwnProperty;
  vb = au.call(Object);
  function wb(e) {
    if (!Bi(e) || Ir(e) != xb)
      return false;
    var t = eu(e);
    if (t === null)
      return true;
    var r = Cb.call(t, "constructor") && t.constructor;
    return typeof r == "function" && r instanceof r && au.call(r) == vb;
  }
  var _b = "[object Arguments]", Sb = "[object Array]", Tb = "[object Boolean]", Bb = "[object Date]", Lb = "[object Error]", Mb = "[object Function]", Ab = "[object Map]", Fb = "[object Number]", $b = "[object Object]", Eb = "[object RegExp]", Ob = "[object Set]", Db = "[object String]", Ib = "[object WeakMap]", Pb = "[object ArrayBuffer]", zb = "[object DataView]", Rb = "[object Float32Array]", Nb = "[object Float64Array]", qb = "[object Int8Array]", jb = "[object Int16Array]", Wb = "[object Int32Array]", Hb = "[object Uint8Array]", Yb = "[object Uint8ClampedArray]", Ub = "[object Uint16Array]", Vb = "[object Uint32Array]", bt = {};
  bt[Rb] = bt[Nb] = bt[qb] = bt[jb] = bt[Wb] = bt[Hb] = bt[Yb] = bt[Ub] = bt[Vb] = true;
  bt[_b] = bt[Sb] = bt[Pb] = bt[Tb] = bt[zb] = bt[Bb] = bt[Lb] = bt[Mb] = bt[Ab] = bt[Fb] = bt[$b] = bt[Eb] = bt[Ob] = bt[Db] = bt[Ib] = false;
  function Gb(e) {
    return Bi(e) && iu(e.length) && !!bt[Ir(e)];
  }
  Xb = function(e) {
    return function(t) {
      return e(t);
    };
  };
  let ou, ui, Zb, Ea, Nl;
  ou = typeof exports == "object" && exports && !exports.nodeType && exports;
  ui = ou && typeof module == "object" && module && !module.nodeType && module;
  Zb = ui && ui.exports === ou;
  Ea = Zb && Qd.process;
  Rl = function() {
    try {
      var e = ui && ui.require && ui.require("util").types;
      return e || Ea && Ea.binding && Ea.binding("util");
    } catch {
    }
  }();
  Nl = Rl && Rl.isTypedArray;
  ls = Nl ? Xb(Nl) : Gb;
  function bo(e, t) {
    if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
      return e[t];
  }
  var Qb = Object.prototype, Kb = Qb.hasOwnProperty;
  Jb = function(e, t, r) {
    var i = e[t];
    (!(Kb.call(e, t) && Un(i, r)) || r === void 0 && !(t in e)) && os(e, t, r);
  };
  t1 = function(e, t, r, i) {
    var n = !r;
    r || (r = {});
    for (var a = -1, s = t.length; ++a < s; ) {
      var o = t[a], l = void 0;
      l === void 0 && (l = e[o]), n ? os(r, o, l) : Jb(r, o, l);
    }
    return r;
  };
  function e1(e, t) {
    for (var r = -1, i = Array(e); ++r < e; )
      i[r] = t(r);
    return i;
  }
  var r1 = 9007199254740991, i1 = /^(?:0|[1-9]\d*)$/;
  su = function(e, t) {
    var r = typeof e;
    return t = t ?? r1, !!t && (r == "number" || r != "symbol" && i1.test(e)) && e > -1 && e % 1 == 0 && e < t;
  };
  var n1 = Object.prototype, a1 = n1.hasOwnProperty;
  o1 = function(e, t) {
    var r = Tn(e), i = !r && Sn(e), n = !r && !i && ss(e), a = !r && !i && !n && ls(e), s = r || i || n || a, o = s ? e1(e.length, String) : [], l = o.length;
    for (var h in e)
      (t || a1.call(e, h)) && !(s && (h == "length" || n && (h == "offset" || h == "parent") || a && (h == "buffer" || h == "byteLength" || h == "byteOffset") || su(h, l))) && o.push(h);
    return o;
  };
  function s1(e) {
    var t = [];
    if (e != null)
      for (var r in Object(e))
        t.push(r);
    return t;
  }
  var l1 = Object.prototype, h1 = l1.hasOwnProperty;
  function c1(e) {
    if (!sr(e))
      return s1(e);
    var t = Xn(e), r = [];
    for (var i in e)
      i == "constructor" && (t || !h1.call(e, i)) || r.push(i);
    return r;
  }
  lu = function(e) {
    return Zn(e) ? o1(e, true) : c1(e);
  };
  function d1(e) {
    return t1(e, lu(e));
  }
  function u1(e, t, r, i, n, a, s) {
    var o = bo(e, r), l = bo(t, r), h = s.get(l);
    if (h) {
      xo(e, r, h);
      return;
    }
    var c = a ? a(o, l, r + "", e, t, s) : void 0, d = c === void 0;
    if (d) {
      var u = Tn(l), p = !u && ss(l), f = !u && !p && ls(l);
      c = l, u || p || f ? Tn(o) ? c = o : gb(o) ? c = ob(o) : p ? (d = false, c = ib(l, true)) : f ? (d = false, c = ab(l, true)) : c = [] : wb(l) || Sn(l) ? (c = o, Sn(o) ? c = d1(o) : (!sr(o) || as(o)) && (c = hb(l))) : d = false;
    }
    d && (s.set(l, c), n(c, l, i, a, s), s.delete(l)), xo(e, r, c);
  }
  function hu(e, t, r, i, n) {
    e !== t && eb(t, function(a, s) {
      if (n || (n = new Pr()), sr(a))
        u1(e, t, s, r, hu, i, n);
      else {
        var o = i ? i(bo(e, s), a, s + "", e, t, n) : void 0;
        o === void 0 && (o = a), xo(e, s, o);
      }
    }, lu);
  }
  cu = function(e) {
    return e;
  };
  function p1(e, t, r) {
    switch (r.length) {
      case 0:
        return e.call(t);
      case 1:
        return e.call(t, r[0]);
      case 2:
        return e.call(t, r[0], r[1]);
      case 3:
        return e.call(t, r[0], r[1], r[2]);
    }
    return e.apply(t, r);
  }
  var ql = Math.max;
  g1 = function(e, t, r) {
    return t = ql(t === void 0 ? e.length - 1 : t, 0), function() {
      for (var i = arguments, n = -1, a = ql(i.length - t, 0), s = Array(a); ++n < a; )
        s[n] = i[t + n];
      n = -1;
      for (var o = Array(t + 1); ++n < t; )
        o[n] = i[n];
      return o[t] = r(s), p1(e, this, o);
    };
  };
  f1 = function(e) {
    return function() {
      return e;
    };
  };
  var m1 = _n ? function(e, t) {
    return _n(e, "toString", {
      configurable: true,
      enumerable: false,
      value: f1(t),
      writable: true
    });
  } : cu, y1 = 800, x1 = 16, b1 = Date.now;
  function k1(e) {
    var t = 0, r = 0;
    return function() {
      var i = b1(), n = x1 - (i - r);
      if (r = i, n > 0) {
        if (++t >= y1)
          return arguments[0];
      } else
        t = 0;
      return e.apply(void 0, arguments);
    };
  }
  C1 = k1(m1);
  v1 = function(e, t) {
    return C1(g1(e, t, cu), e + "");
  };
  w1 = function(e, t, r) {
    if (!sr(r))
      return false;
    var i = typeof t;
    return (i == "number" ? Zn(r) && su(t, r.length) : i == "string" && t in r) ? Un(r[t], e) : false;
  };
  _1 = function(e) {
    return v1(function(t, r) {
      var i = -1, n = r.length, a = n > 1 ? r[n - 1] : void 0, s = n > 2 ? r[2] : void 0;
      for (a = e.length > 3 && typeof a == "function" ? (n--, a) : void 0, s && w1(r[0], r[1], s) && (a = n < 3 ? void 0 : a, n = 1), t = Object(t); ++i < n; ) {
        var o = r[i];
        o && e(t, o, i, a);
      }
      return t;
    });
  };
  let B1, L1, M1, du, A1, F1;
  S1 = _1(function(e, t, r) {
    hu(e, t, r);
  });
  T1 = "\u200B";
  B1 = {
    curveBasis: tn,
    curveBasisClosed: Hy,
    curveBasisOpen: Yy,
    curveBumpX: wh,
    curveBumpY: vh,
    curveBundle: Uy,
    curveCardinalClosed: Vy,
    curveCardinalOpen: Gy,
    curveCardinal: Id,
    curveCatmullRomClosed: Xy,
    curveCatmullRomOpen: Zy,
    curveCatmullRom: zd,
    curveLinear: bn,
    curveLinearClosed: Qy,
    curveMonotoneX: Hd,
    curveMonotoneY: Yd,
    curveNatural: Vd,
    curveStep: Gd,
    curveStepAfter: Zd,
    curveStepBefore: Xd
  };
  L1 = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
  M1 = g(function(e, t) {
    const r = du(e, /(?:init\b)|(?:initialize\b)/);
    let i = {};
    if (Array.isArray(r)) {
      const s = r.map((o) => o.args);
      ln(s), i = It(i, [
        ...s
      ]);
    } else
      i = r.args;
    if (!i)
      return;
    let n = Ro(e, t);
    const a = "config";
    return i[a] !== void 0 && (n === "flowchart-v2" && (n = "flowchart"), i[n] = i[a], delete i[a]), i;
  }, "detectInit");
  du = g(function(e, t = null) {
    var r, i;
    try {
      const n = new RegExp(`[%]{2}(?![{]${L1.source})(?=[}][%]{2}).*
`, "ig");
      e = e.trim().replace(n, "").replace(/'/gm, '"'), D.debug(`Detecting diagram directive${t !== null ? " type:" + t : ""} based on the text:${e}`);
      let a;
      const s = [];
      for (; (a = ci.exec(e)) !== null; )
        if (a.index === ci.lastIndex && ci.lastIndex++, a && !t || t && (r = a[1]) != null && r.match(t) || t && (i = a[2]) != null && i.match(t)) {
          const o = a[1] ? a[1] : a[2], l = a[3] ? a[3].trim() : a[4] ? JSON.parse(a[4].trim()) : null;
          s.push({
            type: o,
            args: l
          });
        }
      return s.length === 0 ? {
        type: e,
        args: null
      } : s.length === 1 ? s[0] : s;
    } catch (n) {
      return D.error(`ERROR: ${n.message} - Unable to parse directive type: '${t}' based on the text: '${e}'`), {
        type: void 0,
        args: null
      };
    }
  }, "detectDirective");
  A1 = g(function(e) {
    return e.replace(ci, "");
  }, "removeDirectives");
  F1 = g(function(e, t) {
    for (const [r, i] of t.entries())
      if (i.match(e))
        return r;
    return -1;
  }, "isSubstringInArray");
  function hs(e, t) {
    if (!e)
      return t;
    const r = `curve${e.charAt(0).toUpperCase() + e.slice(1)}`;
    return B1[r] ?? t;
  }
  g(hs, "interpolateToCurve");
  function uu(e, t) {
    const r = e.trim();
    if (r)
      return t.securityLevel !== "loose" ? jy.sanitizeUrl(r) : r;
  }
  g(uu, "formatUrl");
  var $1 = g((e, ...t) => {
    const r = e.split("."), i = r.length - 1, n = r[i];
    let a = window;
    for (let s = 0; s < i; s++)
      if (a = a[r[s]], !a) {
        D.error(`Function name: ${e} not found in window`);
        return;
      }
    a[n](...t);
  }, "runFunc");
  function cs(e, t) {
    return !e || !t ? 0 : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
  }
  g(cs, "distance");
  function pu(e) {
    let t, r = 0;
    e.forEach((n) => {
      r += cs(n, t), t = n;
    });
    const i = r / 2;
    return ds(e, i);
  }
  g(pu, "traverseEdge");
  function gu(e) {
    return e.length === 1 ? e[0] : pu(e);
  }
  g(gu, "calcLabelPosition");
  var jl = g((e, t = 2) => {
    const r = Math.pow(10, t);
    return Math.round(e * r) / r;
  }, "roundNumber"), ds = g((e, t) => {
    let r, i = t;
    for (const n of e) {
      if (r) {
        const a = cs(n, r);
        if (a === 0)
          return r;
        if (a < i)
          i -= a;
        else {
          const s = i / a;
          if (s <= 0)
            return r;
          if (s >= 1)
            return {
              x: n.x,
              y: n.y
            };
          if (s > 0 && s < 1)
            return {
              x: jl((1 - s) * r.x + s * n.x, 5),
              y: jl((1 - s) * r.y + s * n.y, 5)
            };
        }
      }
      r = n;
    }
    throw new Error("Could not find a suitable point for the given distance");
  }, "calculatePoint"), E1 = g((e, t, r) => {
    D.info(`our points ${JSON.stringify(t)}`), t[0] !== r && (t = t.reverse());
    const i = ds(t, 25), n = e ? 10 : 5, a = Math.atan2(t[0].y - i.y, t[0].x - i.x), s = {
      x: 0,
      y: 0
    };
    return s.x = Math.sin(a) * n + (t[0].x + i.x) / 2, s.y = -Math.cos(a) * n + (t[0].y + i.y) / 2, s;
  }, "calcCardinalityPosition");
  function fu(e, t, r) {
    const i = structuredClone(r);
    D.info("our points", i), t !== "start_left" && t !== "start_right" && i.reverse();
    const n = 25 + e, a = ds(i, n), s = 10 + e * 0.5, o = Math.atan2(i[0].y - a.y, i[0].x - a.x), l = {
      x: 0,
      y: 0
    };
    return t === "start_left" ? (l.x = Math.sin(o + Math.PI) * s + (i[0].x + a.x) / 2, l.y = -Math.cos(o + Math.PI) * s + (i[0].y + a.y) / 2) : t === "end_right" ? (l.x = Math.sin(o - Math.PI) * s + (i[0].x + a.x) / 2 - 5, l.y = -Math.cos(o - Math.PI) * s + (i[0].y + a.y) / 2 - 5) : t === "end_left" ? (l.x = Math.sin(o) * s + (i[0].x + a.x) / 2 - 5, l.y = -Math.cos(o) * s + (i[0].y + a.y) / 2 - 5) : (l.x = Math.sin(o) * s + (i[0].x + a.x) / 2, l.y = -Math.cos(o) * s + (i[0].y + a.y) / 2), l;
  }
  g(fu, "calcTerminalLabelPosition");
  mu = function(e) {
    let t = "", r = "";
    for (const i of e)
      i !== void 0 && (i.startsWith("color:") || i.startsWith("text-align:") ? r = r + i + ";" : t = t + i + ";");
    return {
      style: t,
      labelStyle: r
    };
  };
  g(mu, "getStylesFromArray");
  let Wl;
  Wl = 0;
  O1 = g(() => (Wl++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + Wl), "generateId");
  function yu(e) {
    let t = "";
    const r = "0123456789abcdef", i = r.length;
    for (let n = 0; n < e; n++)
      t += r.charAt(Math.floor(Math.random() * i));
    return t;
  }
  g(yu, "makeRandomHex");
  let I1, P1, R1;
  D1 = g((e) => yu(e.length), "random");
  I1 = g(function() {
    return {
      x: 0,
      y: 0,
      fill: void 0,
      anchor: "start",
      style: "#666",
      width: 100,
      height: 100,
      textMargin: 0,
      rx: 0,
      ry: 0,
      valign: void 0,
      text: ""
    };
  }, "getTextObj");
  P1 = g(function(e, t) {
    const r = t.text.replace(Dr.lineBreakRegex, " "), [, i] = Qn(t.fontSize), n = e.append("text");
    n.attr("x", t.x), n.attr("y", t.y), n.style("text-anchor", t.anchor), n.style("font-family", t.fontFamily), n.style("font-size", i), n.style("font-weight", t.fontWeight), n.attr("fill", t.fill), t.class !== void 0 && n.attr("class", t.class);
    const a = n.append("tspan");
    return a.attr("x", t.x + t.textMargin * 2), a.attr("fill", t.fill), a.text(r), n;
  }, "drawSimpleText");
  z1 = Ti((e, t, r) => {
    if (!e || (r = Object.assign({
      fontSize: 12,
      fontWeight: 400,
      fontFamily: "Arial",
      joinWith: "<br/>"
    }, r), Dr.lineBreakRegex.test(e)))
      return e;
    const i = e.split(" ").filter(Boolean), n = [];
    let a = "";
    return i.forEach((s, o) => {
      const l = Fe(`${s} `, r), h = Fe(a, r);
      if (l > t) {
        const { hyphenatedStrings: c, remainingWord: d } = R1(s, t, "-", r);
        n.push(a, ...c), a = d;
      } else
        h + l >= t ? (n.push(a), a = s) : a = [
          a,
          s
        ].filter(Boolean).join(" ");
      o + 1 === i.length && n.push(a);
    }), n.filter((s) => s !== "").join(r.joinWith);
  }, (e, t, r) => `${e}${t}${r.fontSize}${r.fontWeight}${r.fontFamily}${r.joinWith}`);
  R1 = Ti((e, t, r = "-", i) => {
    i = Object.assign({
      fontSize: 12,
      fontWeight: 400,
      fontFamily: "Arial",
      margin: 0
    }, i);
    const n = [
      ...e
    ], a = [];
    let s = "";
    return n.forEach((o, l) => {
      const h = `${s}${o}`;
      if (Fe(h, i) >= t) {
        const c = l + 1, d = n.length === c, u = `${h}${r}`;
        a.push(d ? h : u), s = "";
      } else
        s = h;
    }), {
      hyphenatedStrings: a,
      remainingWord: s
    };
  }, (e, t, r = "-", i) => `${e}${t}${r}${i.fontSize}${i.fontWeight}${i.fontFamily}`);
  xu = function(e, t) {
    return us(e, t).height;
  };
  g(xu, "calculateTextHeight");
  Fe = function(e, t) {
    return us(e, t).width;
  };
  g(Fe, "calculateTextWidth");
  var us = Ti((e, t) => {
    const { fontSize: r = 12, fontFamily: i = "Arial", fontWeight: n = 400 } = t;
    if (!e)
      return {
        width: 0,
        height: 0
      };
    const [, a] = Qn(r), s = [
      "sans-serif",
      i
    ], o = e.split(Dr.lineBreakRegex), l = [], h = lt("body");
    if (!h.remove)
      return {
        width: 0,
        height: 0,
        lineHeight: 0
      };
    const c = h.append("svg");
    for (const u of s) {
      let p = 0;
      const f = {
        width: 0,
        height: 0,
        lineHeight: 0
      };
      for (const m of o) {
        const y = I1();
        y.text = m || T1;
        const x = P1(c, y).style("font-size", a).style("font-weight", n).style("font-family", u), b = (x._groups || x)[0][0].getBBox();
        if (b.width === 0 && b.height === 0)
          throw new Error("svg element not in render tree");
        f.width = Math.round(Math.max(f.width, b.width)), p = Math.round(b.height), f.height += p, f.lineHeight = Math.round(Math.max(f.lineHeight, p));
      }
      l.push(f);
    }
    c.remove();
    const d = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[d];
  }, (e, t) => `${e}${t.fontSize}${t.fontWeight}${t.fontFamily}`), Oa, N1 = (Oa = class {
    constructor(e = false, t) {
      this.count = 0, this.count = t ? t.length : 0, this.next = e ? () => this.count++ : () => Date.now();
    }
  }, g(Oa, "InitIDGenerator"), Oa), Ri, q1 = g(function(e) {
    return Ri = Ri || document.createElement("div"), e = escape(e).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), Ri.innerHTML = e, unescape(Ri.textContent);
  }, "entityDecode");
  function ps(e) {
    return "str" in e;
  }
  g(ps, "isDetailedError");
  let j1;
  j1 = g((e, t, r, i) => {
    var n;
    if (!i)
      return;
    const a = (n = e.node()) == null ? void 0 : n.getBBox();
    a && e.append("text").text(i).attr("text-anchor", "middle").attr("x", a.x + a.width / 2).attr("y", -r).attr("class", t);
  }, "insertTitle");
  Qn = g((e) => {
    if (typeof e == "number")
      return [
        e,
        e + "px"
      ];
    const t = parseInt(e ?? "", 10);
    return Number.isNaN(t) ? [
      void 0,
      void 0
    ] : e === String(t) ? [
      t,
      e + "px"
    ] : [
      t,
      e
    ];
  }, "parseFontSize");
  gs = function(e, t) {
    return S1({}, e, t);
  };
  g(gs, "cleanAndMerge");
  let W1;
  fe = {
    assignWithDepth: It,
    wrapLabel: z1,
    calculateTextHeight: xu,
    calculateTextWidth: Fe,
    calculateTextDimensions: us,
    cleanAndMerge: gs,
    detectInit: M1,
    detectDirective: du,
    isSubstringInArray: F1,
    interpolateToCurve: hs,
    calcLabelPosition: gu,
    calcCardinalityPosition: E1,
    calcTerminalLabelPosition: fu,
    formatUrl: uu,
    getStylesFromArray: mu,
    generateId: O1,
    random: D1,
    runFunc: $1,
    entityDecode: q1,
    insertTitle: j1,
    parseFontSize: Qn,
    InitIDGenerator: N1
  };
  W1 = g(function(e) {
    let t = e;
    return t = t.replace(/style.*:\S*#.*;/g, function(r) {
      return r.substring(0, r.length - 1);
    }), t = t.replace(/classDef.*:\S*#.*;/g, function(r) {
      return r.substring(0, r.length - 1);
    }), t = t.replace(/#\w+;/g, function(r) {
      const i = r.substring(1, r.length - 1);
      return /^\+?\d+$/.test(i) ? "\uFB02\xB0\xB0" + i + "\xB6\xDF" : "\uFB02\xB0" + i + "\xB6\xDF";
    }), t;
  }, "encodeEntities");
  cr = g(function(e) {
    return e.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
  }, "decodeEntities");
  H_ = g((e, t, { counter: r = 0, prefix: i, suffix: n }, a) => a || `${i ? `${i}_` : ""}${e}_${t}_${r}${n ? `_${n}` : ""}`, "getEdgeId");
  function Ut(e) {
    return e ?? null;
  }
  g(Ut, "handleUndefinedAttr");
  function fs() {
    return {
      async: false,
      breaks: false,
      extensions: null,
      gfm: true,
      hooks: null,
      pedantic: false,
      renderer: null,
      silent: false,
      tokenizer: null,
      walkTokens: null
    };
  }
  var dr = fs();
  function bu(e) {
    dr = e;
  }
  var pi = {
    exec: () => null
  };
  function pt(e, t = "") {
    let r = typeof e == "string" ? e : e.source;
    const i = {
      replace: (n, a) => {
        let s = typeof a == "string" ? a : a.source;
        return s = s.replace(Yt.caret, "$1"), r = r.replace(n, s), i;
      },
      getRegex: () => new RegExp(r, t)
    };
    return i;
  }
  var Yt = {
    codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
    outputLinkReplace: /\\([\[\]])/g,
    indentCodeCompensation: /^(\s+)(?:```)/,
    beginningSpace: /^\s+/,
    endingHash: /#$/,
    startingSpaceChar: /^ /,
    endingSpaceChar: / $/,
    nonSpaceChar: /[^ ]/,
    newLineCharGlobal: /\n/g,
    tabCharGlobal: /\t/g,
    multipleSpaceGlobal: /\s+/g,
    blankLine: /^[ \t]*$/,
    doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
    blockquoteStart: /^ {0,3}>/,
    blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
    blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
    listReplaceTabs: /^\t+/,
    listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
    listIsTask: /^\[[ xX]\] /,
    listReplaceTask: /^\[[ xX]\] +/,
    anyLine: /\n.*\n/,
    hrefBrackets: /^<(.*)>$/,
    tableDelimiter: /[:|]/,
    tableAlignChars: /^\||\| *$/g,
    tableRowBlankLine: /\n[ \t]*$/,
    tableAlignRight: /^ *-+: *$/,
    tableAlignCenter: /^ *:-+: *$/,
    tableAlignLeft: /^ *:-+ *$/,
    startATag: /^<a /i,
    endATag: /^<\/a>/i,
    startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
    endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
    startAngleBracket: /^</,
    endAngleBracket: />$/,
    pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
    unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
    escapeTest: /[&<>"']/,
    escapeReplace: /[&<>"']/g,
    escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
    unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
    caret: /(^|[^\[])\^/g,
    percentDecode: /%25/g,
    findPipe: /\|/g,
    splitPipe: / \|/,
    slashPipe: /\\\|/g,
    carriageReturn: /\r\n|\r/g,
    spaceLine: /^ +$/gm,
    notSpaceStart: /^\S*/,
    endingNewline: /\n$/,
    listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
    nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
    hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
    fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
    headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
    htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i")
  }, H1 = /^(?:[ \t]*(?:\n|$))+/, Y1 = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, U1 = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Li = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, V1 = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, ms = /(?:[*+-]|\d{1,9}[.)])/, ku = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Cu = pt(ku).replace(/bull/g, ms).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), G1 = pt(ku).replace(/bull/g, ms).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), ys = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, X1 = /^[^\n]+/, xs = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Z1 = pt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", xs).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Q1 = pt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, ms).getRegex(), Kn = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", bs = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, K1 = pt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", bs).replace("tag", Kn).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), vu = pt(ys).replace("hr", Li).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Kn).getRegex(), J1 = pt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", vu).getRegex(), ks = {
    blockquote: J1,
    code: Y1,
    def: Z1,
    fences: U1,
    heading: V1,
    hr: Li,
    html: K1,
    lheading: Cu,
    list: Q1,
    newline: H1,
    paragraph: vu,
    table: pi,
    text: X1
  }, Hl = pt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Li).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Kn).getRegex(), t2 = {
    ...ks,
    lheading: G1,
    table: Hl,
    paragraph: pt(ys).replace("hr", Li).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Hl).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Kn).getRegex()
  }, e2 = {
    ...ks,
    html: pt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", bs).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: pi,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: pt(ys).replace("hr", Li).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Cu).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
  }, r2 = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, i2 = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, wu = /^( {2,}|\\)\n(?!\s*$)/, n2 = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Jn = /[\p{P}\p{S}]/u, Cs = /[\s\p{P}\p{S}]/u, _u = /[^\s\p{P}\p{S}]/u, a2 = pt(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Cs).getRegex(), Su = /(?!~)[\p{P}\p{S}]/u, o2 = /(?!~)[\s\p{P}\p{S}]/u, s2 = /(?:[^\s\p{P}\p{S}]|~)/u, l2 = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, Tu = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, h2 = pt(Tu, "u").replace(/punct/g, Jn).getRegex(), c2 = pt(Tu, "u").replace(/punct/g, Su).getRegex(), Bu = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", d2 = pt(Bu, "gu").replace(/notPunctSpace/g, _u).replace(/punctSpace/g, Cs).replace(/punct/g, Jn).getRegex(), u2 = pt(Bu, "gu").replace(/notPunctSpace/g, s2).replace(/punctSpace/g, o2).replace(/punct/g, Su).getRegex(), p2 = pt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, _u).replace(/punctSpace/g, Cs).replace(/punct/g, Jn).getRegex(), g2 = pt(/\\(punct)/, "gu").replace(/punct/g, Jn).getRegex(), f2 = pt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), m2 = pt(bs).replace("(?:-->|$)", "-->").getRegex(), y2 = pt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", m2).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Bn = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, x2 = pt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Bn).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Lu = pt(/^!?\[(label)\]\[(ref)\]/).replace("label", Bn).replace("ref", xs).getRegex(), Mu = pt(/^!?\[(ref)\](?:\[\])?/).replace("ref", xs).getRegex(), b2 = pt("reflink|nolink(?!\\()", "g").replace("reflink", Lu).replace("nolink", Mu).getRegex(), vs = {
    _backpedal: pi,
    anyPunctuation: g2,
    autolink: f2,
    blockSkip: l2,
    br: wu,
    code: i2,
    del: pi,
    emStrongLDelim: h2,
    emStrongRDelimAst: d2,
    emStrongRDelimUnd: p2,
    escape: r2,
    link: x2,
    nolink: Mu,
    punctuation: a2,
    reflink: Lu,
    reflinkSearch: b2,
    tag: y2,
    text: n2,
    url: pi
  }, k2 = {
    ...vs,
    link: pt(/^!?\[(label)\]\((.*?)\)/).replace("label", Bn).getRegex(),
    reflink: pt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Bn).getRegex()
  }, ko = {
    ...vs,
    emStrongRDelimAst: u2,
    emStrongLDelim: c2,
    url: pt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
  }, C2 = {
    ...ko,
    br: pt(wu).replace("{2,}", "*").getRegex(),
    text: pt(ko.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
  }, Ni = {
    normal: ks,
    gfm: t2,
    pedantic: e2
  }, Jr = {
    normal: vs,
    gfm: ko,
    breaks: C2,
    pedantic: k2
  }, v2 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }, Yl = (e) => v2[e];
  function ue(e, t) {
    if (t) {
      if (Yt.escapeTest.test(e))
        return e.replace(Yt.escapeReplace, Yl);
    } else if (Yt.escapeTestNoEncode.test(e))
      return e.replace(Yt.escapeReplaceNoEncode, Yl);
    return e;
  }
  function Ul(e) {
    try {
      e = encodeURI(e).replace(Yt.percentDecode, "%");
    } catch {
      return null;
    }
    return e;
  }
  function Vl(e, t) {
    var r;
    const i = e.replace(Yt.findPipe, (s, o, l) => {
      let h = false, c = o;
      for (; --c >= 0 && l[c] === "\\"; )
        h = !h;
      return h ? "|" : " |";
    }), n = i.split(Yt.splitPipe);
    let a = 0;
    if (n[0].trim() || n.shift(), n.length > 0 && !((r = n.at(-1)) != null && r.trim()) && n.pop(), t)
      if (n.length > t)
        n.splice(t);
      else
        for (; n.length < t; )
          n.push("");
    for (; a < n.length; a++)
      n[a] = n[a].trim().replace(Yt.slashPipe, "|");
    return n;
  }
  function ti(e, t, r) {
    const i = e.length;
    if (i === 0)
      return "";
    let n = 0;
    for (; n < i && e.charAt(i - n - 1) === t; )
      n++;
    return e.slice(0, i - n);
  }
  function w2(e, t) {
    if (e.indexOf(t[1]) === -1)
      return -1;
    let r = 0;
    for (let i = 0; i < e.length; i++)
      if (e[i] === "\\")
        i++;
      else if (e[i] === t[0])
        r++;
      else if (e[i] === t[1] && (r--, r < 0))
        return i;
    return r > 0 ? -2 : -1;
  }
  function Gl(e, t, r, i, n) {
    const a = t.href, s = t.title || null, o = e[1].replace(n.other.outputLinkReplace, "$1");
    i.state.inLink = true;
    const l = {
      type: e[0].charAt(0) === "!" ? "image" : "link",
      raw: r,
      href: a,
      title: s,
      text: o,
      tokens: i.inlineTokens(o)
    };
    return i.state.inLink = false, l;
  }
  function _2(e, t, r) {
    const i = e.match(r.other.indentCodeCompensation);
    if (i === null)
      return t;
    const n = i[1];
    return t.split(`
`).map((a) => {
      const s = a.match(r.other.beginningSpace);
      if (s === null)
        return a;
      const [o] = s;
      return o.length >= n.length ? a.slice(n.length) : a;
    }).join(`
`);
  }
  var Ln = class {
    constructor(e) {
      yt(this, "options"), yt(this, "rules"), yt(this, "lexer"), this.options = e || dr;
    }
    space(e) {
      const t = this.rules.block.newline.exec(e);
      if (t && t[0].length > 0)
        return {
          type: "space",
          raw: t[0]
        };
    }
    code(e) {
      const t = this.rules.block.code.exec(e);
      if (t) {
        const r = t[0].replace(this.rules.other.codeRemoveIndent, "");
        return {
          type: "code",
          raw: t[0],
          codeBlockStyle: "indented",
          text: this.options.pedantic ? r : ti(r, `
`)
        };
      }
    }
    fences(e) {
      const t = this.rules.block.fences.exec(e);
      if (t) {
        const r = t[0], i = _2(r, t[3] || "", this.rules);
        return {
          type: "code",
          raw: r,
          lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
          text: i
        };
      }
    }
    heading(e) {
      const t = this.rules.block.heading.exec(e);
      if (t) {
        let r = t[2].trim();
        if (this.rules.other.endingHash.test(r)) {
          const i = ti(r, "#");
          (this.options.pedantic || !i || this.rules.other.endingSpaceChar.test(i)) && (r = i.trim());
        }
        return {
          type: "heading",
          raw: t[0],
          depth: t[1].length,
          text: r,
          tokens: this.lexer.inline(r)
        };
      }
    }
    hr(e) {
      const t = this.rules.block.hr.exec(e);
      if (t)
        return {
          type: "hr",
          raw: ti(t[0], `
`)
        };
    }
    blockquote(e) {
      const t = this.rules.block.blockquote.exec(e);
      if (t) {
        let r = ti(t[0], `
`).split(`
`), i = "", n = "";
        const a = [];
        for (; r.length > 0; ) {
          let s = false;
          const o = [];
          let l;
          for (l = 0; l < r.length; l++)
            if (this.rules.other.blockquoteStart.test(r[l]))
              o.push(r[l]), s = true;
            else if (!s)
              o.push(r[l]);
            else
              break;
          r = r.slice(l);
          const h = o.join(`
`), c = h.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
          i = i ? `${i}
${h}` : h, n = n ? `${n}
${c}` : c;
          const d = this.lexer.state.top;
          if (this.lexer.state.top = true, this.lexer.blockTokens(c, a, true), this.lexer.state.top = d, r.length === 0)
            break;
          const u = a.at(-1);
          if ((u == null ? void 0 : u.type) === "code")
            break;
          if ((u == null ? void 0 : u.type) === "blockquote") {
            const p = u, f = p.raw + `
` + r.join(`
`), m = this.blockquote(f);
            a[a.length - 1] = m, i = i.substring(0, i.length - p.raw.length) + m.raw, n = n.substring(0, n.length - p.text.length) + m.text;
            break;
          } else if ((u == null ? void 0 : u.type) === "list") {
            const p = u, f = p.raw + `
` + r.join(`
`), m = this.list(f);
            a[a.length - 1] = m, i = i.substring(0, i.length - u.raw.length) + m.raw, n = n.substring(0, n.length - p.raw.length) + m.raw, r = f.substring(a.at(-1).raw.length).split(`
`);
            continue;
          }
        }
        return {
          type: "blockquote",
          raw: i,
          tokens: a,
          text: n
        };
      }
    }
    list(e) {
      let t = this.rules.block.list.exec(e);
      if (t) {
        let r = t[1].trim();
        const i = r.length > 1, n = {
          type: "list",
          raw: "",
          ordered: i,
          start: i ? +r.slice(0, -1) : "",
          loose: false,
          items: []
        };
        r = i ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = i ? r : "[*+-]");
        const a = this.rules.other.listItemRegex(r);
        let s = false;
        for (; e; ) {
          let l = false, h = "", c = "";
          if (!(t = a.exec(e)) || this.rules.block.hr.test(e))
            break;
          h = t[0], e = e.substring(h.length);
          let d = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (x) => " ".repeat(3 * x.length)), u = e.split(`
`, 1)[0], p = !d.trim(), f = 0;
          if (this.options.pedantic ? (f = 2, c = d.trimStart()) : p ? f = t[1].length + 1 : (f = t[2].search(this.rules.other.nonSpaceChar), f = f > 4 ? 1 : f, c = d.slice(f), f += t[1].length), p && this.rules.other.blankLine.test(u) && (h += u + `
`, e = e.substring(u.length + 1), l = true), !l) {
            const x = this.rules.other.nextBulletRegex(f), b = this.rules.other.hrRegex(f), C = this.rules.other.fencesBeginRegex(f), S = this.rules.other.headingBeginRegex(f), k = this.rules.other.htmlBeginRegex(f);
            for (; e; ) {
              const w = e.split(`
`, 1)[0];
              let B;
              if (u = w, this.options.pedantic ? (u = u.replace(this.rules.other.listReplaceNesting, "  "), B = u) : B = u.replace(this.rules.other.tabCharGlobal, "    "), C.test(u) || S.test(u) || k.test(u) || x.test(u) || b.test(u))
                break;
              if (B.search(this.rules.other.nonSpaceChar) >= f || !u.trim())
                c += `
` + B.slice(f);
              else {
                if (p || d.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || C.test(d) || S.test(d) || b.test(d))
                  break;
                c += `
` + u;
              }
              !p && !u.trim() && (p = true), h += w + `
`, e = e.substring(w.length + 1), d = B.slice(f);
            }
          }
          n.loose || (s ? n.loose = true : this.rules.other.doubleBlankLine.test(h) && (s = true));
          let m = null, y;
          this.options.gfm && (m = this.rules.other.listIsTask.exec(c), m && (y = m[0] !== "[ ] ", c = c.replace(this.rules.other.listReplaceTask, ""))), n.items.push({
            type: "list_item",
            raw: h,
            task: !!m,
            checked: y,
            loose: false,
            text: c,
            tokens: []
          }), n.raw += h;
        }
        const o = n.items.at(-1);
        if (o)
          o.raw = o.raw.trimEnd(), o.text = o.text.trimEnd();
        else
          return;
        n.raw = n.raw.trimEnd();
        for (let l = 0; l < n.items.length; l++)
          if (this.lexer.state.top = false, n.items[l].tokens = this.lexer.blockTokens(n.items[l].text, []), !n.loose) {
            const h = n.items[l].tokens.filter((d) => d.type === "space"), c = h.length > 0 && h.some((d) => this.rules.other.anyLine.test(d.raw));
            n.loose = c;
          }
        if (n.loose)
          for (let l = 0; l < n.items.length; l++)
            n.items[l].loose = true;
        return n;
      }
    }
    html(e) {
      const t = this.rules.block.html.exec(e);
      if (t)
        return {
          type: "html",
          block: true,
          raw: t[0],
          pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
          text: t[0]
        };
    }
    def(e) {
      const t = this.rules.block.def.exec(e);
      if (t) {
        const r = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), i = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", n = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
        return {
          type: "def",
          tag: r,
          raw: t[0],
          href: i,
          title: n
        };
      }
    }
    table(e) {
      var t;
      const r = this.rules.block.table.exec(e);
      if (!r || !this.rules.other.tableDelimiter.test(r[2]))
        return;
      const i = Vl(r[1]), n = r[2].replace(this.rules.other.tableAlignChars, "").split("|"), a = (t = r[3]) != null && t.trim() ? r[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = {
        type: "table",
        raw: r[0],
        header: [],
        align: [],
        rows: []
      };
      if (i.length === n.length) {
        for (const o of n)
          this.rules.other.tableAlignRight.test(o) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? s.align.push("left") : s.align.push(null);
        for (let o = 0; o < i.length; o++)
          s.header.push({
            text: i[o],
            tokens: this.lexer.inline(i[o]),
            header: true,
            align: s.align[o]
          });
        for (const o of a)
          s.rows.push(Vl(o, s.header.length).map((l, h) => ({
            text: l,
            tokens: this.lexer.inline(l),
            header: false,
            align: s.align[h]
          })));
        return s;
      }
    }
    lheading(e) {
      const t = this.rules.block.lheading.exec(e);
      if (t)
        return {
          type: "heading",
          raw: t[0],
          depth: t[2].charAt(0) === "=" ? 1 : 2,
          text: t[1],
          tokens: this.lexer.inline(t[1])
        };
    }
    paragraph(e) {
      const t = this.rules.block.paragraph.exec(e);
      if (t) {
        const r = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
        return {
          type: "paragraph",
          raw: t[0],
          text: r,
          tokens: this.lexer.inline(r)
        };
      }
    }
    text(e) {
      const t = this.rules.block.text.exec(e);
      if (t)
        return {
          type: "text",
          raw: t[0],
          text: t[0],
          tokens: this.lexer.inline(t[0])
        };
    }
    escape(e) {
      const t = this.rules.inline.escape.exec(e);
      if (t)
        return {
          type: "escape",
          raw: t[0],
          text: t[1]
        };
    }
    tag(e) {
      const t = this.rules.inline.tag.exec(e);
      if (t)
        return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = false), {
          type: "html",
          raw: t[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          block: false,
          text: t[0]
        };
    }
    link(e) {
      const t = this.rules.inline.link.exec(e);
      if (t) {
        const r = t[2].trim();
        if (!this.options.pedantic && this.rules.other.startAngleBracket.test(r)) {
          if (!this.rules.other.endAngleBracket.test(r))
            return;
          const a = ti(r.slice(0, -1), "\\");
          if ((r.length - a.length) % 2 === 0)
            return;
        } else {
          const a = w2(t[2], "()");
          if (a === -2)
            return;
          if (a > -1) {
            const s = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + a;
            t[2] = t[2].substring(0, a), t[0] = t[0].substring(0, s).trim(), t[3] = "";
          }
        }
        let i = t[2], n = "";
        if (this.options.pedantic) {
          const a = this.rules.other.pedanticHrefTitle.exec(i);
          a && (i = a[1], n = a[3]);
        } else
          n = t[3] ? t[3].slice(1, -1) : "";
        return i = i.trim(), this.rules.other.startAngleBracket.test(i) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(r) ? i = i.slice(1) : i = i.slice(1, -1)), Gl(t, {
          href: i && i.replace(this.rules.inline.anyPunctuation, "$1"),
          title: n && n.replace(this.rules.inline.anyPunctuation, "$1")
        }, t[0], this.lexer, this.rules);
      }
    }
    reflink(e, t) {
      let r;
      if ((r = this.rules.inline.reflink.exec(e)) || (r = this.rules.inline.nolink.exec(e))) {
        const i = (r[2] || r[1]).replace(this.rules.other.multipleSpaceGlobal, " "), n = t[i.toLowerCase()];
        if (!n) {
          const a = r[0].charAt(0);
          return {
            type: "text",
            raw: a,
            text: a
          };
        }
        return Gl(r, n, r[0], this.lexer, this.rules);
      }
    }
    emStrong(e, t, r = "") {
      let i = this.rules.inline.emStrongLDelim.exec(e);
      if (!(!i || i[3] && r.match(this.rules.other.unicodeAlphaNumeric)) && (!(i[1] || i[2]) || !r || this.rules.inline.punctuation.exec(r))) {
        const n = [
          ...i[0]
        ].length - 1;
        let a, s, o = n, l = 0;
        const h = i[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
        for (h.lastIndex = 0, t = t.slice(-1 * e.length + n); (i = h.exec(t)) != null; ) {
          if (a = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !a)
            continue;
          if (s = [
            ...a
          ].length, i[3] || i[4]) {
            o += s;
            continue;
          } else if ((i[5] || i[6]) && n % 3 && !((n + s) % 3)) {
            l += s;
            continue;
          }
          if (o -= s, o > 0)
            continue;
          s = Math.min(s, s + o + l);
          const c = [
            ...i[0]
          ][0].length, d = e.slice(0, n + i.index + c + s);
          if (Math.min(n, s) % 2) {
            const p = d.slice(1, -1);
            return {
              type: "em",
              raw: d,
              text: p,
              tokens: this.lexer.inlineTokens(p)
            };
          }
          const u = d.slice(2, -2);
          return {
            type: "strong",
            raw: d,
            text: u,
            tokens: this.lexer.inlineTokens(u)
          };
        }
      }
    }
    codespan(e) {
      const t = this.rules.inline.code.exec(e);
      if (t) {
        let r = t[2].replace(this.rules.other.newLineCharGlobal, " ");
        const i = this.rules.other.nonSpaceChar.test(r), n = this.rules.other.startingSpaceChar.test(r) && this.rules.other.endingSpaceChar.test(r);
        return i && n && (r = r.substring(1, r.length - 1)), {
          type: "codespan",
          raw: t[0],
          text: r
        };
      }
    }
    br(e) {
      const t = this.rules.inline.br.exec(e);
      if (t)
        return {
          type: "br",
          raw: t[0]
        };
    }
    del(e) {
      const t = this.rules.inline.del.exec(e);
      if (t)
        return {
          type: "del",
          raw: t[0],
          text: t[2],
          tokens: this.lexer.inlineTokens(t[2])
        };
    }
    autolink(e) {
      const t = this.rules.inline.autolink.exec(e);
      if (t) {
        let r, i;
        return t[2] === "@" ? (r = t[1], i = "mailto:" + r) : (r = t[1], i = r), {
          type: "link",
          raw: t[0],
          text: r,
          href: i,
          tokens: [
            {
              type: "text",
              raw: r,
              text: r
            }
          ]
        };
      }
    }
    url(e) {
      var t;
      let r;
      if (r = this.rules.inline.url.exec(e)) {
        let i, n;
        if (r[2] === "@")
          i = r[0], n = "mailto:" + i;
        else {
          let a;
          do
            a = r[0], r[0] = ((t = this.rules.inline._backpedal.exec(r[0])) == null ? void 0 : t[0]) ?? "";
          while (a !== r[0]);
          i = r[0], r[1] === "www." ? n = "http://" + r[0] : n = r[0];
        }
        return {
          type: "link",
          raw: r[0],
          text: i,
          href: n,
          tokens: [
            {
              type: "text",
              raw: i,
              text: i
            }
          ]
        };
      }
    }
    inlineText(e) {
      const t = this.rules.inline.text.exec(e);
      if (t) {
        const r = this.lexer.state.inRawBlock;
        return {
          type: "text",
          raw: t[0],
          text: t[0],
          escaped: r
        };
      }
    }
  }, Be = class Co {
    constructor(t) {
      yt(this, "tokens"), yt(this, "options"), yt(this, "state"), yt(this, "tokenizer"), yt(this, "inlineQueue"), this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || dr, this.options.tokenizer = this.options.tokenizer || new Ln(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
        inLink: false,
        inRawBlock: false,
        top: true
      };
      const r = {
        other: Yt,
        block: Ni.normal,
        inline: Jr.normal
      };
      this.options.pedantic ? (r.block = Ni.pedantic, r.inline = Jr.pedantic) : this.options.gfm && (r.block = Ni.gfm, this.options.breaks ? r.inline = Jr.breaks : r.inline = Jr.gfm), this.tokenizer.rules = r;
    }
    static get rules() {
      return {
        block: Ni,
        inline: Jr
      };
    }
    static lex(t, r) {
      return new Co(r).lex(t);
    }
    static lexInline(t, r) {
      return new Co(r).inlineTokens(t);
    }
    lex(t) {
      t = t.replace(Yt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
      for (let r = 0; r < this.inlineQueue.length; r++) {
        const i = this.inlineQueue[r];
        this.inlineTokens(i.src, i.tokens);
      }
      return this.inlineQueue = [], this.tokens;
    }
    blockTokens(t, r = [], i = false) {
      var n, a, s;
      for (this.options.pedantic && (t = t.replace(Yt.tabCharGlobal, "    ").replace(Yt.spaceLine, "")); t; ) {
        let o;
        if ((a = (n = this.options.extensions) == null ? void 0 : n.block) != null && a.some((h) => (o = h.call({
          lexer: this
        }, t, r)) ? (t = t.substring(o.raw.length), r.push(o), true) : false))
          continue;
        if (o = this.tokenizer.space(t)) {
          t = t.substring(o.raw.length);
          const h = r.at(-1);
          o.raw.length === 1 && h !== void 0 ? h.raw += `
` : r.push(o);
          continue;
        }
        if (o = this.tokenizer.code(t)) {
          t = t.substring(o.raw.length);
          const h = r.at(-1);
          (h == null ? void 0 : h.type) === "paragraph" || (h == null ? void 0 : h.type) === "text" ? (h.raw += `
` + o.raw, h.text += `
` + o.text, this.inlineQueue.at(-1).src = h.text) : r.push(o);
          continue;
        }
        if (o = this.tokenizer.fences(t)) {
          t = t.substring(o.raw.length), r.push(o);
          continue;
        }
        if (o = this.tokenizer.heading(t)) {
          t = t.substring(o.raw.length), r.push(o);
          continue;
        }
        if (o = this.tokenizer.hr(t)) {
          t = t.substring(o.raw.length), r.push(o);
          continue;
        }
        if (o = this.tokenizer.blockquote(t)) {
          t = t.substring(o.raw.length), r.push(o);
          continue;
        }
        if (o = this.tokenizer.list(t)) {
          t = t.substring(o.raw.length), r.push(o);
          continue;
        }
        if (o = this.tokenizer.html(t)) {
          t = t.substring(o.raw.length), r.push(o);
          continue;
        }
        if (o = this.tokenizer.def(t)) {
          t = t.substring(o.raw.length);
          const h = r.at(-1);
          (h == null ? void 0 : h.type) === "paragraph" || (h == null ? void 0 : h.type) === "text" ? (h.raw += `
` + o.raw, h.text += `
` + o.raw, this.inlineQueue.at(-1).src = h.text) : this.tokens.links[o.tag] || (this.tokens.links[o.tag] = {
            href: o.href,
            title: o.title
          });
          continue;
        }
        if (o = this.tokenizer.table(t)) {
          t = t.substring(o.raw.length), r.push(o);
          continue;
        }
        if (o = this.tokenizer.lheading(t)) {
          t = t.substring(o.raw.length), r.push(o);
          continue;
        }
        let l = t;
        if ((s = this.options.extensions) != null && s.startBlock) {
          let h = 1 / 0;
          const c = t.slice(1);
          let d;
          this.options.extensions.startBlock.forEach((u) => {
            d = u.call({
              lexer: this
            }, c), typeof d == "number" && d >= 0 && (h = Math.min(h, d));
          }), h < 1 / 0 && h >= 0 && (l = t.substring(0, h + 1));
        }
        if (this.state.top && (o = this.tokenizer.paragraph(l))) {
          const h = r.at(-1);
          i && (h == null ? void 0 : h.type) === "paragraph" ? (h.raw += `
` + o.raw, h.text += `
` + o.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = h.text) : r.push(o), i = l.length !== t.length, t = t.substring(o.raw.length);
          continue;
        }
        if (o = this.tokenizer.text(t)) {
          t = t.substring(o.raw.length);
          const h = r.at(-1);
          (h == null ? void 0 : h.type) === "text" ? (h.raw += `
` + o.raw, h.text += `
` + o.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = h.text) : r.push(o);
          continue;
        }
        if (t) {
          const h = "Infinite loop on byte: " + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(h);
            break;
          } else
            throw new Error(h);
        }
      }
      return this.state.top = true, r;
    }
    inline(t, r = []) {
      return this.inlineQueue.push({
        src: t,
        tokens: r
      }), r;
    }
    inlineTokens(t, r = []) {
      var i, n, a;
      let s = t, o = null;
      if (this.tokens.links) {
        const c = Object.keys(this.tokens.links);
        if (c.length > 0)
          for (; (o = this.tokenizer.rules.inline.reflinkSearch.exec(s)) != null; )
            c.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) && (s = s.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
      }
      for (; (o = this.tokenizer.rules.inline.anyPunctuation.exec(s)) != null; )
        s = s.slice(0, o.index) + "++" + s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
      for (; (o = this.tokenizer.rules.inline.blockSkip.exec(s)) != null; )
        s = s.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      let l = false, h = "";
      for (; t; ) {
        l || (h = ""), l = false;
        let c;
        if ((n = (i = this.options.extensions) == null ? void 0 : i.inline) != null && n.some((u) => (c = u.call({
          lexer: this
        }, t, r)) ? (t = t.substring(c.raw.length), r.push(c), true) : false))
          continue;
        if (c = this.tokenizer.escape(t)) {
          t = t.substring(c.raw.length), r.push(c);
          continue;
        }
        if (c = this.tokenizer.tag(t)) {
          t = t.substring(c.raw.length), r.push(c);
          continue;
        }
        if (c = this.tokenizer.link(t)) {
          t = t.substring(c.raw.length), r.push(c);
          continue;
        }
        if (c = this.tokenizer.reflink(t, this.tokens.links)) {
          t = t.substring(c.raw.length);
          const u = r.at(-1);
          c.type === "text" && (u == null ? void 0 : u.type) === "text" ? (u.raw += c.raw, u.text += c.text) : r.push(c);
          continue;
        }
        if (c = this.tokenizer.emStrong(t, s, h)) {
          t = t.substring(c.raw.length), r.push(c);
          continue;
        }
        if (c = this.tokenizer.codespan(t)) {
          t = t.substring(c.raw.length), r.push(c);
          continue;
        }
        if (c = this.tokenizer.br(t)) {
          t = t.substring(c.raw.length), r.push(c);
          continue;
        }
        if (c = this.tokenizer.del(t)) {
          t = t.substring(c.raw.length), r.push(c);
          continue;
        }
        if (c = this.tokenizer.autolink(t)) {
          t = t.substring(c.raw.length), r.push(c);
          continue;
        }
        if (!this.state.inLink && (c = this.tokenizer.url(t))) {
          t = t.substring(c.raw.length), r.push(c);
          continue;
        }
        let d = t;
        if ((a = this.options.extensions) != null && a.startInline) {
          let u = 1 / 0;
          const p = t.slice(1);
          let f;
          this.options.extensions.startInline.forEach((m) => {
            f = m.call({
              lexer: this
            }, p), typeof f == "number" && f >= 0 && (u = Math.min(u, f));
          }), u < 1 / 0 && u >= 0 && (d = t.substring(0, u + 1));
        }
        if (c = this.tokenizer.inlineText(d)) {
          t = t.substring(c.raw.length), c.raw.slice(-1) !== "_" && (h = c.raw.slice(-1)), l = true;
          const u = r.at(-1);
          (u == null ? void 0 : u.type) === "text" ? (u.raw += c.raw, u.text += c.text) : r.push(c);
          continue;
        }
        if (t) {
          const u = "Infinite loop on byte: " + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(u);
            break;
          } else
            throw new Error(u);
        }
      }
      return r;
    }
  }, Mn = class {
    constructor(e) {
      yt(this, "options"), yt(this, "parser"), this.options = e || dr;
    }
    space(e) {
      return "";
    }
    code({ text: e, lang: t, escaped: r }) {
      var i;
      const n = (i = (t || "").match(Yt.notSpaceStart)) == null ? void 0 : i[0], a = e.replace(Yt.endingNewline, "") + `
`;
      return n ? '<pre><code class="language-' + ue(n) + '">' + (r ? a : ue(a, true)) + `</code></pre>
` : "<pre><code>" + (r ? a : ue(a, true)) + `</code></pre>
`;
    }
    blockquote({ tokens: e }) {
      return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
    }
    html({ text: e }) {
      return e;
    }
    heading({ tokens: e, depth: t }) {
      return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
    }
    hr(e) {
      return `<hr>
`;
    }
    list(e) {
      const t = e.ordered, r = e.start;
      let i = "";
      for (let s = 0; s < e.items.length; s++) {
        const o = e.items[s];
        i += this.listitem(o);
      }
      const n = t ? "ol" : "ul", a = t && r !== 1 ? ' start="' + r + '"' : "";
      return "<" + n + a + `>
` + i + "</" + n + `>
`;
    }
    listitem(e) {
      var t;
      let r = "";
      if (e.task) {
        const i = this.checkbox({
          checked: !!e.checked
        });
        e.loose ? ((t = e.tokens[0]) == null ? void 0 : t.type) === "paragraph" ? (e.tokens[0].text = i + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = i + " " + ue(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = true)) : e.tokens.unshift({
          type: "text",
          raw: i + " ",
          text: i + " ",
          escaped: true
        }) : r += i + " ";
      }
      return r += this.parser.parse(e.tokens, !!e.loose), `<li>${r}</li>
`;
    }
    checkbox({ checked: e }) {
      return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
    }
    paragraph({ tokens: e }) {
      return `<p>${this.parser.parseInline(e)}</p>
`;
    }
    table(e) {
      let t = "", r = "";
      for (let n = 0; n < e.header.length; n++)
        r += this.tablecell(e.header[n]);
      t += this.tablerow({
        text: r
      });
      let i = "";
      for (let n = 0; n < e.rows.length; n++) {
        const a = e.rows[n];
        r = "";
        for (let s = 0; s < a.length; s++)
          r += this.tablecell(a[s]);
        i += this.tablerow({
          text: r
        });
      }
      return i && (i = `<tbody>${i}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + i + `</table>
`;
    }
    tablerow({ text: e }) {
      return `<tr>
${e}</tr>
`;
    }
    tablecell(e) {
      const t = this.parser.parseInline(e.tokens), r = e.header ? "th" : "td";
      return (e.align ? `<${r} align="${e.align}">` : `<${r}>`) + t + `</${r}>
`;
    }
    strong({ tokens: e }) {
      return `<strong>${this.parser.parseInline(e)}</strong>`;
    }
    em({ tokens: e }) {
      return `<em>${this.parser.parseInline(e)}</em>`;
    }
    codespan({ text: e }) {
      return `<code>${ue(e, true)}</code>`;
    }
    br(e) {
      return "<br>";
    }
    del({ tokens: e }) {
      return `<del>${this.parser.parseInline(e)}</del>`;
    }
    link({ href: e, title: t, tokens: r }) {
      const i = this.parser.parseInline(r), n = Ul(e);
      if (n === null)
        return i;
      e = n;
      let a = '<a href="' + e + '"';
      return t && (a += ' title="' + ue(t) + '"'), a += ">" + i + "</a>", a;
    }
    image({ href: e, title: t, text: r, tokens: i }) {
      i && (r = this.parser.parseInline(i, this.parser.textRenderer));
      const n = Ul(e);
      if (n === null)
        return ue(r);
      e = n;
      let a = `<img src="${e}" alt="${r}"`;
      return t && (a += ` title="${ue(t)}"`), a += ">", a;
    }
    text(e) {
      return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : ue(e.text);
    }
  }, ws = class {
    strong({ text: e }) {
      return e;
    }
    em({ text: e }) {
      return e;
    }
    codespan({ text: e }) {
      return e;
    }
    del({ text: e }) {
      return e;
    }
    html({ text: e }) {
      return e;
    }
    text({ text: e }) {
      return e;
    }
    link({ text: e }) {
      return "" + e;
    }
    image({ text: e }) {
      return "" + e;
    }
    br() {
      return "";
    }
  }, Le = class vo {
    constructor(t) {
      yt(this, "options"), yt(this, "renderer"), yt(this, "textRenderer"), this.options = t || dr, this.options.renderer = this.options.renderer || new Mn(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new ws();
    }
    static parse(t, r) {
      return new vo(r).parse(t);
    }
    static parseInline(t, r) {
      return new vo(r).parseInline(t);
    }
    parse(t, r = true) {
      var i, n;
      let a = "";
      for (let s = 0; s < t.length; s++) {
        const o = t[s];
        if ((n = (i = this.options.extensions) == null ? void 0 : i.renderers) != null && n[o.type]) {
          const h = o, c = this.options.extensions.renderers[h.type].call({
            parser: this
          }, h);
          if (c !== false || ![
            "space",
            "hr",
            "heading",
            "code",
            "table",
            "blockquote",
            "list",
            "html",
            "paragraph",
            "text"
          ].includes(h.type)) {
            a += c || "";
            continue;
          }
        }
        const l = o;
        switch (l.type) {
          case "space": {
            a += this.renderer.space(l);
            continue;
          }
          case "hr": {
            a += this.renderer.hr(l);
            continue;
          }
          case "heading": {
            a += this.renderer.heading(l);
            continue;
          }
          case "code": {
            a += this.renderer.code(l);
            continue;
          }
          case "table": {
            a += this.renderer.table(l);
            continue;
          }
          case "blockquote": {
            a += this.renderer.blockquote(l);
            continue;
          }
          case "list": {
            a += this.renderer.list(l);
            continue;
          }
          case "html": {
            a += this.renderer.html(l);
            continue;
          }
          case "paragraph": {
            a += this.renderer.paragraph(l);
            continue;
          }
          case "text": {
            let h = l, c = this.renderer.text(h);
            for (; s + 1 < t.length && t[s + 1].type === "text"; )
              h = t[++s], c += `
` + this.renderer.text(h);
            r ? a += this.renderer.paragraph({
              type: "paragraph",
              raw: c,
              text: c,
              tokens: [
                {
                  type: "text",
                  raw: c,
                  text: c,
                  escaped: true
                }
              ]
            }) : a += c;
            continue;
          }
          default: {
            const h = 'Token with "' + l.type + '" type was not found.';
            if (this.options.silent)
              return console.error(h), "";
            throw new Error(h);
          }
        }
      }
      return a;
    }
    parseInline(t, r = this.renderer) {
      var i, n;
      let a = "";
      for (let s = 0; s < t.length; s++) {
        const o = t[s];
        if ((n = (i = this.options.extensions) == null ? void 0 : i.renderers) != null && n[o.type]) {
          const h = this.options.extensions.renderers[o.type].call({
            parser: this
          }, o);
          if (h !== false || ![
            "escape",
            "html",
            "link",
            "image",
            "strong",
            "em",
            "codespan",
            "br",
            "del",
            "text"
          ].includes(o.type)) {
            a += h || "";
            continue;
          }
        }
        const l = o;
        switch (l.type) {
          case "escape": {
            a += r.text(l);
            break;
          }
          case "html": {
            a += r.html(l);
            break;
          }
          case "link": {
            a += r.link(l);
            break;
          }
          case "image": {
            a += r.image(l);
            break;
          }
          case "strong": {
            a += r.strong(l);
            break;
          }
          case "em": {
            a += r.em(l);
            break;
          }
          case "codespan": {
            a += r.codespan(l);
            break;
          }
          case "br": {
            a += r.br(l);
            break;
          }
          case "del": {
            a += r.del(l);
            break;
          }
          case "text": {
            a += r.text(l);
            break;
          }
          default: {
            const h = 'Token with "' + l.type + '" type was not found.';
            if (this.options.silent)
              return console.error(h), "";
            throw new Error(h);
          }
        }
      }
      return a;
    }
  }, Da, en = (Da = class {
    constructor(e) {
      yt(this, "options"), yt(this, "block"), this.options = e || dr;
    }
    preprocess(e) {
      return e;
    }
    postprocess(e) {
      return e;
    }
    processAllTokens(e) {
      return e;
    }
    provideLexer() {
      return this.block ? Be.lex : Be.lexInline;
    }
    provideParser() {
      return this.block ? Le.parse : Le.parseInline;
    }
  }, yt(Da, "passThroughHooks", /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess",
    "processAllTokens"
  ])), Da), S2 = class {
    constructor(...e) {
      yt(this, "defaults", fs()), yt(this, "options", this.setOptions), yt(this, "parse", this.parseMarkdown(true)), yt(this, "parseInline", this.parseMarkdown(false)), yt(this, "Parser", Le), yt(this, "Renderer", Mn), yt(this, "TextRenderer", ws), yt(this, "Lexer", Be), yt(this, "Tokenizer", Ln), yt(this, "Hooks", en), this.use(...e);
    }
    walkTokens(e, t) {
      var r, i;
      let n = [];
      for (const a of e)
        switch (n = n.concat(t.call(this, a)), a.type) {
          case "table": {
            const s = a;
            for (const o of s.header)
              n = n.concat(this.walkTokens(o.tokens, t));
            for (const o of s.rows)
              for (const l of o)
                n = n.concat(this.walkTokens(l.tokens, t));
            break;
          }
          case "list": {
            const s = a;
            n = n.concat(this.walkTokens(s.items, t));
            break;
          }
          default: {
            const s = a;
            (i = (r = this.defaults.extensions) == null ? void 0 : r.childTokens) != null && i[s.type] ? this.defaults.extensions.childTokens[s.type].forEach((o) => {
              const l = s[o].flat(1 / 0);
              n = n.concat(this.walkTokens(l, t));
            }) : s.tokens && (n = n.concat(this.walkTokens(s.tokens, t)));
          }
        }
      return n;
    }
    use(...e) {
      const t = this.defaults.extensions || {
        renderers: {},
        childTokens: {}
      };
      return e.forEach((r) => {
        const i = {
          ...r
        };
        if (i.async = this.defaults.async || i.async || false, r.extensions && (r.extensions.forEach((n) => {
          if (!n.name)
            throw new Error("extension name required");
          if ("renderer" in n) {
            const a = t.renderers[n.name];
            a ? t.renderers[n.name] = function(...s) {
              let o = n.renderer.apply(this, s);
              return o === false && (o = a.apply(this, s)), o;
            } : t.renderers[n.name] = n.renderer;
          }
          if ("tokenizer" in n) {
            if (!n.level || n.level !== "block" && n.level !== "inline")
              throw new Error("extension level must be 'block' or 'inline'");
            const a = t[n.level];
            a ? a.unshift(n.tokenizer) : t[n.level] = [
              n.tokenizer
            ], n.start && (n.level === "block" ? t.startBlock ? t.startBlock.push(n.start) : t.startBlock = [
              n.start
            ] : n.level === "inline" && (t.startInline ? t.startInline.push(n.start) : t.startInline = [
              n.start
            ]));
          }
          "childTokens" in n && n.childTokens && (t.childTokens[n.name] = n.childTokens);
        }), i.extensions = t), r.renderer) {
          const n = this.defaults.renderer || new Mn(this.defaults);
          for (const a in r.renderer) {
            if (!(a in n))
              throw new Error(`renderer '${a}' does not exist`);
            if ([
              "options",
              "parser"
            ].includes(a))
              continue;
            const s = a, o = r.renderer[s], l = n[s];
            n[s] = (...h) => {
              let c = o.apply(n, h);
              return c === false && (c = l.apply(n, h)), c || "";
            };
          }
          i.renderer = n;
        }
        if (r.tokenizer) {
          const n = this.defaults.tokenizer || new Ln(this.defaults);
          for (const a in r.tokenizer) {
            if (!(a in n))
              throw new Error(`tokenizer '${a}' does not exist`);
            if ([
              "options",
              "rules",
              "lexer"
            ].includes(a))
              continue;
            const s = a, o = r.tokenizer[s], l = n[s];
            n[s] = (...h) => {
              let c = o.apply(n, h);
              return c === false && (c = l.apply(n, h)), c;
            };
          }
          i.tokenizer = n;
        }
        if (r.hooks) {
          const n = this.defaults.hooks || new en();
          for (const a in r.hooks) {
            if (!(a in n))
              throw new Error(`hook '${a}' does not exist`);
            if ([
              "options",
              "block"
            ].includes(a))
              continue;
            const s = a, o = r.hooks[s], l = n[s];
            en.passThroughHooks.has(a) ? n[s] = (h) => {
              if (this.defaults.async)
                return Promise.resolve(o.call(n, h)).then((d) => l.call(n, d));
              const c = o.call(n, h);
              return l.call(n, c);
            } : n[s] = (...h) => {
              let c = o.apply(n, h);
              return c === false && (c = l.apply(n, h)), c;
            };
          }
          i.hooks = n;
        }
        if (r.walkTokens) {
          const n = this.defaults.walkTokens, a = r.walkTokens;
          i.walkTokens = function(s) {
            let o = [];
            return o.push(a.call(this, s)), n && (o = o.concat(n.call(this, s))), o;
          };
        }
        this.defaults = {
          ...this.defaults,
          ...i
        };
      }), this;
    }
    setOptions(e) {
      return this.defaults = {
        ...this.defaults,
        ...e
      }, this;
    }
    lexer(e, t) {
      return Be.lex(e, t ?? this.defaults);
    }
    parser(e, t) {
      return Le.parse(e, t ?? this.defaults);
    }
    parseMarkdown(e) {
      return (t, r) => {
        const i = {
          ...r
        }, n = {
          ...this.defaults,
          ...i
        }, a = this.onError(!!n.silent, !!n.async);
        if (this.defaults.async === true && i.async === false)
          return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
        if (typeof t > "u" || t === null)
          return a(new Error("marked(): input parameter is undefined or null"));
        if (typeof t != "string")
          return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
        n.hooks && (n.hooks.options = n, n.hooks.block = e);
        const s = n.hooks ? n.hooks.provideLexer() : e ? Be.lex : Be.lexInline, o = n.hooks ? n.hooks.provideParser() : e ? Le.parse : Le.parseInline;
        if (n.async)
          return Promise.resolve(n.hooks ? n.hooks.preprocess(t) : t).then((l) => s(l, n)).then((l) => n.hooks ? n.hooks.processAllTokens(l) : l).then((l) => n.walkTokens ? Promise.all(this.walkTokens(l, n.walkTokens)).then(() => l) : l).then((l) => o(l, n)).then((l) => n.hooks ? n.hooks.postprocess(l) : l).catch(a);
        try {
          n.hooks && (t = n.hooks.preprocess(t));
          let l = s(t, n);
          n.hooks && (l = n.hooks.processAllTokens(l)), n.walkTokens && this.walkTokens(l, n.walkTokens);
          let h = o(l, n);
          return n.hooks && (h = n.hooks.postprocess(h)), h;
        } catch (l) {
          return a(l);
        }
      };
    }
    onError(e, t) {
      return (r) => {
        if (r.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
          const i = "<p>An error occurred:</p><pre>" + ue(r.message + "", true) + "</pre>";
          return t ? Promise.resolve(i) : i;
        }
        if (t)
          return Promise.reject(r);
        throw r;
      };
    }
  }, ar = new S2();
  function ut(e, t) {
    return ar.parse(e, t);
  }
  ut.options = ut.setOptions = function(e) {
    return ar.setOptions(e), ut.defaults = ar.defaults, bu(ut.defaults), ut;
  };
  ut.getDefaults = fs;
  ut.defaults = dr;
  ut.use = function(...e) {
    return ar.use(...e), ut.defaults = ar.defaults, bu(ut.defaults), ut;
  };
  ut.walkTokens = function(e, t) {
    return ar.walkTokens(e, t);
  };
  ut.parseInline = ar.parseInline;
  ut.Parser = Le;
  ut.parser = Le.parse;
  ut.Renderer = Mn;
  ut.TextRenderer = ws;
  ut.Lexer = Be;
  ut.lexer = Be.lex;
  ut.Tokenizer = Ln;
  ut.Hooks = en;
  ut.parse = ut;
  ut.options;
  ut.setOptions;
  ut.use;
  ut.walkTokens;
  ut.parseInline;
  Le.parse;
  Be.lex;
  function Au(e) {
    for (var t = [], r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
    var i = Array.from(typeof e == "string" ? [
      e
    ] : e);
    i[i.length - 1] = i[i.length - 1].replace(/\r?\n([\t ]*)$/, "");
    var n = i.reduce(function(o, l) {
      var h = l.match(/\n([\t ]+|(?!\s).)/g);
      return h ? o.concat(h.map(function(c) {
        var d, u;
        return (u = (d = c.match(/[\t ]/g)) === null || d === void 0 ? void 0 : d.length) !== null && u !== void 0 ? u : 0;
      })) : o;
    }, []);
    if (n.length) {
      var a = new RegExp(`
[	 ]{` + Math.min.apply(Math, n) + "}", "g");
      i = i.map(function(o) {
        return o.replace(a, `
`);
      });
    }
    i[0] = i[0].replace(/^\r?\n/, "");
    var s = i[0];
    return t.forEach(function(o, l) {
      var h = s.match(/(?:^|\n)( *)$/), c = h ? h[1] : "", d = o;
      typeof o == "string" && o.includes(`
`) && (d = String(o).split(`
`).map(function(u, p) {
        return p === 0 ? u : "" + c + u;
      }).join(`
`)), s += d + i[l + 1];
    }), s;
  }
  function Fu(e, { markdownAutoWrap: t }) {
    const r = e.replace(/<br\/>/g, `
`).replace(/\n{2,}/g, `
`), i = Au(r);
    return t === false ? i.replace(/ /g, "&nbsp;") : i;
  }
  g(Fu, "preprocessMarkdown");
  function $u(e, t = {}) {
    const r = Fu(e, t), i = ut.lexer(r), n = [
      []
    ];
    let a = 0;
    function s(o, l = "normal") {
      o.type === "text" ? o.text.split(`
`).forEach((h, c) => {
        c !== 0 && (a++, n.push([])), h.split(" ").forEach((d) => {
          d = d.replace(/&#39;/g, "'"), d && n[a].push({
            content: d,
            type: l
          });
        });
      }) : o.type === "strong" || o.type === "em" ? o.tokens.forEach((h) => {
        s(h, o.type);
      }) : o.type === "html" && n[a].push({
        content: o.text,
        type: "normal"
      });
    }
    return g(s, "processNode"), i.forEach((o) => {
      var l;
      o.type === "paragraph" ? (l = o.tokens) == null || l.forEach((h) => {
        s(h);
      }) : o.type === "html" && n[a].push({
        content: o.text,
        type: "normal"
      });
    }), n;
  }
  g($u, "markdownToLines");
  function Eu(e, { markdownAutoWrap: t } = {}) {
    const r = ut.lexer(e);
    function i(n) {
      var a, s, o;
      return n.type === "text" ? t === false ? n.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : n.text.replace(/\n */g, "<br/>") : n.type === "strong" ? `<strong>${(a = n.tokens) == null ? void 0 : a.map(i).join("")}</strong>` : n.type === "em" ? `<em>${(s = n.tokens) == null ? void 0 : s.map(i).join("")}</em>` : n.type === "paragraph" ? `<p>${(o = n.tokens) == null ? void 0 : o.map(i).join("")}</p>` : n.type === "space" ? "" : n.type === "html" ? `${n.text}` : n.type === "escape" ? n.text : `Unsupported markdown: ${n.type}`;
    }
    return g(i, "output"), r.map(i).join("");
  }
  g(Eu, "markdownToHTML");
  function Ou(e) {
    return Intl.Segmenter ? [
      ...new Intl.Segmenter().segment(e)
    ].map((t) => t.segment) : [
      ...e
    ];
  }
  g(Ou, "splitTextToChars");
  function Du(e, t) {
    const r = Ou(t.content);
    return _s(e, [], r, t.type);
  }
  g(Du, "splitWordToFitWidth");
  function _s(e, t, r, i) {
    if (r.length === 0)
      return [
        {
          content: t.join(""),
          type: i
        },
        {
          content: "",
          type: i
        }
      ];
    const [n, ...a] = r, s = [
      ...t,
      n
    ];
    return e([
      {
        content: s.join(""),
        type: i
      }
    ]) ? _s(e, s, a, i) : (t.length === 0 && n && (t.push(n), r.shift()), [
      {
        content: t.join(""),
        type: i
      },
      {
        content: r.join(""),
        type: i
      }
    ]);
  }
  g(_s, "splitWordToFitWidthRecursion");
  function Iu(e, t) {
    if (e.some(({ content: r }) => r.includes(`
`)))
      throw new Error("splitLineToFitWidth does not support newlines in the line");
    return An(e, t);
  }
  g(Iu, "splitLineToFitWidth");
  function An(e, t, r = [], i = []) {
    if (e.length === 0)
      return i.length > 0 && r.push(i), r.length > 0 ? r : [];
    let n = "";
    e[0].content === " " && (n = " ", e.shift());
    const a = e.shift() ?? {
      content: " ",
      type: "normal"
    }, s = [
      ...i
    ];
    if (n !== "" && s.push({
      content: n,
      type: "normal"
    }), s.push(a), t(s))
      return An(e, t, r, s);
    if (i.length > 0)
      r.push(i), e.unshift(a);
    else if (a.content) {
      const [o, l] = Du(t, a);
      r.push([
        o
      ]), l.content && e.unshift(l);
    }
    return An(e, t, r);
  }
  g(An, "splitLineToFitWidthRecursion");
  function wo(e, t) {
    t && e.attr("style", t);
  }
  g(wo, "applyStyle");
  async function Pu(e, t, r, i, n = false) {
    const a = e.append("foreignObject");
    a.attr("width", `${10 * r}px`), a.attr("height", `${10 * r}px`);
    const s = a.append("xhtml:div");
    let o = t.label;
    t.label && Ar(t.label) && (o = await No(t.label.replace(Dr.lineBreakRegex, `
`), dt()));
    const l = t.isNode ? "nodeLabel" : "edgeLabel", h = s.append("span");
    h.html(o), wo(h, t.labelStyle), h.attr("class", `${l} ${i}`), wo(s, t.labelStyle), s.style("display", "table-cell"), s.style("white-space", "nowrap"), s.style("line-height", "1.5"), s.style("max-width", r + "px"), s.style("text-align", "center"), s.attr("xmlns", "http://www.w3.org/1999/xhtml"), n && s.attr("class", "labelBkg");
    let c = s.node().getBoundingClientRect();
    return c.width === r && (s.style("display", "table"), s.style("white-space", "break-spaces"), s.style("width", r + "px"), c = s.node().getBoundingClientRect()), a.node();
  }
  g(Pu, "addHtmlSpan");
  function ta(e, t, r) {
    return e.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", t * r - 0.1 + "em").attr("dy", r + "em");
  }
  g(ta, "createTspan");
  function zu(e, t, r) {
    const i = e.append("text"), n = ta(i, 1, t);
    ea(n, r);
    const a = n.node().getComputedTextLength();
    return i.remove(), a;
  }
  g(zu, "computeWidthOfText");
  T2 = function(e, t, r) {
    var i;
    const n = e.append("text"), a = ta(n, 1, t);
    ea(a, [
      {
        content: r,
        type: "normal"
      }
    ]);
    const s = (i = a.node()) == null ? void 0 : i.getBoundingClientRect();
    return s && n.remove(), s;
  };
  g(T2, "computeDimensionOfText");
  function Ru(e, t, r, i = false) {
    const n = t.append("g"), a = n.insert("rect").attr("class", "background").attr("style", "stroke: none"), s = n.append("text").attr("y", "-10.1");
    let o = 0;
    for (const l of r) {
      const h = g((d) => zu(n, 1.1, d) <= e, "checkWidth"), c = h(l) ? [
        l
      ] : Iu(l, h);
      for (const d of c) {
        const u = ta(s, o, 1.1);
        ea(u, d), o++;
      }
    }
    if (i) {
      const l = s.node().getBBox(), h = 2;
      return a.attr("x", l.x - h).attr("y", l.y - h).attr("width", l.width + 2 * h).attr("height", l.height + 2 * h), n.node();
    } else
      return s.node();
  }
  g(Ru, "createFormattedText");
  function ea(e, t) {
    e.text(""), t.forEach((r, i) => {
      const n = e.append("tspan").attr("font-style", r.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", r.type === "strong" ? "bold" : "normal");
      i === 0 ? n.text(r.content) : n.text(" " + r.content);
    });
  }
  g(ea, "updateTextContentAndStyles");
  Nu = function(e) {
    return e.replace(/fa[bklrs]?:fa-[\w-]+/g, (t) => `<i class='${t.replace(":", " ")}'></i>`);
  };
  g(Nu, "replaceIconSubstring");
  We = g(async (e, t = "", { style: r = "", isTitle: i = false, classes: n = "", useHtmlLabels: a = true, isNode: s = true, width: o = 200, addSvgBackground: l = false } = {}, h) => {
    if (D.debug("XYZ createText", t, r, i, n, a, s, "addSvgBackground: ", l), a) {
      const c = Eu(t, h), d = Nu(cr(c)), u = t.replace(/\\\\/g, "\\"), p = {
        isNode: s,
        label: Ar(t) ? u : d,
        labelStyle: r.replace("fill:", "color:")
      };
      return await Pu(e, p, o, n, l);
    } else {
      const c = t.replace(/<br\s*\/?>/g, "<br/>"), d = $u(c.replace("<br>", "<br/>"), h), u = Ru(o, e, d, t ? l : false);
      if (s) {
        /stroke:/.exec(r) && (r = r.replace("stroke:", "lineColor:"));
        const p = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
        lt(u).attr("style", p);
      } else {
        const p = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
        lt(u).select("rect").attr("style", p.replace(/background:/g, "fill:"));
        const f = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
        lt(u).select("text").attr("style", f);
      }
      return u;
    }
  }, "createText");
  function Ia(e, t, r) {
    if (e && e.length) {
      const [i, n] = t, a = Math.PI / 180 * r, s = Math.cos(a), o = Math.sin(a);
      for (const l of e) {
        const [h, c] = l;
        l[0] = (h - i) * s - (c - n) * o + i, l[1] = (h - i) * o + (c - n) * s + n;
      }
    }
  }
  function B2(e, t) {
    return e[0] === t[0] && e[1] === t[1];
  }
  function L2(e, t, r, i = 1) {
    const n = r, a = Math.max(t, 0.1), s = e[0] && e[0][0] && typeof e[0][0] == "number" ? [
      e
    ] : e, o = [
      0,
      0
    ];
    if (n)
      for (const h of s)
        Ia(h, o, n);
    const l = function(h, c, d) {
      const u = [];
      for (const b of h) {
        const C = [
          ...b
        ];
        B2(C[0], C[C.length - 1]) || C.push([
          C[0][0],
          C[0][1]
        ]), C.length > 2 && u.push(C);
      }
      const p = [];
      c = Math.max(c, 0.1);
      const f = [];
      for (const b of u)
        for (let C = 0; C < b.length - 1; C++) {
          const S = b[C], k = b[C + 1];
          if (S[1] !== k[1]) {
            const w = Math.min(S[1], k[1]);
            f.push({
              ymin: w,
              ymax: Math.max(S[1], k[1]),
              x: w === S[1] ? S[0] : k[0],
              islope: (k[0] - S[0]) / (k[1] - S[1])
            });
          }
        }
      if (f.sort((b, C) => b.ymin < C.ymin ? -1 : b.ymin > C.ymin ? 1 : b.x < C.x ? -1 : b.x > C.x ? 1 : b.ymax === C.ymax ? 0 : (b.ymax - C.ymax) / Math.abs(b.ymax - C.ymax)), !f.length)
        return p;
      let m = [], y = f[0].ymin, x = 0;
      for (; m.length || f.length; ) {
        if (f.length) {
          let b = -1;
          for (let C = 0; C < f.length && !(f[C].ymin > y); C++)
            b = C;
          f.splice(0, b + 1).forEach((C) => {
            m.push({
              s: y,
              edge: C
            });
          });
        }
        if (m = m.filter((b) => !(b.edge.ymax <= y)), m.sort((b, C) => b.edge.x === C.edge.x ? 0 : (b.edge.x - C.edge.x) / Math.abs(b.edge.x - C.edge.x)), (d !== 1 || x % c == 0) && m.length > 1)
          for (let b = 0; b < m.length; b += 2) {
            const C = b + 1;
            if (C >= m.length)
              break;
            const S = m[b].edge, k = m[C].edge;
            p.push([
              [
                Math.round(S.x),
                y
              ],
              [
                Math.round(k.x),
                y
              ]
            ]);
          }
        y += d, m.forEach((b) => {
          b.edge.x = b.edge.x + d * b.edge.islope;
        }), x++;
      }
      return p;
    }(s, a, i);
    if (n) {
      for (const h of s)
        Ia(h, o, -n);
      (function(h, c, d) {
        const u = [];
        h.forEach((p) => u.push(...p)), Ia(u, c, d);
      })(l, o, -n);
    }
    return l;
  }
  function Mi(e, t) {
    var r;
    const i = t.hachureAngle + 90;
    let n = t.hachureGap;
    n < 0 && (n = 4 * t.strokeWidth), n = Math.round(Math.max(n, 0.1));
    let a = 1;
    return t.roughness >= 1 && (((r = t.randomizer) === null || r === void 0 ? void 0 : r.next()) || Math.random()) > 0.7 && (a = n), L2(e, n, i, a || 1);
  }
  class Ss {
    constructor(t) {
      this.helper = t;
    }
    fillPolygons(t, r) {
      return this._fillPolygons(t, r);
    }
    _fillPolygons(t, r) {
      const i = Mi(t, r);
      return {
        type: "fillSketch",
        ops: this.renderLines(i, r)
      };
    }
    renderLines(t, r) {
      const i = [];
      for (const n of t)
        i.push(...this.helper.doubleLineOps(n[0][0], n[0][1], n[1][0], n[1][1], r));
      return i;
    }
  }
  function ra(e) {
    const t = e[0], r = e[1];
    return Math.sqrt(Math.pow(t[0] - r[0], 2) + Math.pow(t[1] - r[1], 2));
  }
  class M2 extends Ss {
    fillPolygons(t, r) {
      let i = r.hachureGap;
      i < 0 && (i = 4 * r.strokeWidth), i = Math.max(i, 0.1);
      const n = Mi(t, Object.assign({}, r, {
        hachureGap: i
      })), a = Math.PI / 180 * r.hachureAngle, s = [], o = 0.5 * i * Math.cos(a), l = 0.5 * i * Math.sin(a);
      for (const [h, c] of n)
        ra([
          h,
          c
        ]) && s.push([
          [
            h[0] - o,
            h[1] + l
          ],
          [
            ...c
          ]
        ], [
          [
            h[0] + o,
            h[1] - l
          ],
          [
            ...c
          ]
        ]);
      return {
        type: "fillSketch",
        ops: this.renderLines(s, r)
      };
    }
  }
  class A2 extends Ss {
    fillPolygons(t, r) {
      const i = this._fillPolygons(t, r), n = Object.assign({}, r, {
        hachureAngle: r.hachureAngle + 90
      }), a = this._fillPolygons(t, n);
      return i.ops = i.ops.concat(a.ops), i;
    }
  }
  class F2 {
    constructor(t) {
      this.helper = t;
    }
    fillPolygons(t, r) {
      const i = Mi(t, r = Object.assign({}, r, {
        hachureAngle: 0
      }));
      return this.dotsOnLines(i, r);
    }
    dotsOnLines(t, r) {
      const i = [];
      let n = r.hachureGap;
      n < 0 && (n = 4 * r.strokeWidth), n = Math.max(n, 0.1);
      let a = r.fillWeight;
      a < 0 && (a = r.strokeWidth / 2);
      const s = n / 4;
      for (const o of t) {
        const l = ra(o), h = l / n, c = Math.ceil(h) - 1, d = l - c * n, u = (o[0][0] + o[1][0]) / 2 - n / 4, p = Math.min(o[0][1], o[1][1]);
        for (let f = 0; f < c; f++) {
          const m = p + d + f * n, y = u - s + 2 * Math.random() * s, x = m - s + 2 * Math.random() * s, b = this.helper.ellipse(y, x, a, a, r);
          i.push(...b.ops);
        }
      }
      return {
        type: "fillSketch",
        ops: i
      };
    }
  }
  class $2 {
    constructor(t) {
      this.helper = t;
    }
    fillPolygons(t, r) {
      const i = Mi(t, r);
      return {
        type: "fillSketch",
        ops: this.dashedLine(i, r)
      };
    }
    dashedLine(t, r) {
      const i = r.dashOffset < 0 ? r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap : r.dashOffset, n = r.dashGap < 0 ? r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap : r.dashGap, a = [];
      return t.forEach((s) => {
        const o = ra(s), l = Math.floor(o / (i + n)), h = (o + n - l * (i + n)) / 2;
        let c = s[0], d = s[1];
        c[0] > d[0] && (c = s[1], d = s[0]);
        const u = Math.atan((d[1] - c[1]) / (d[0] - c[0]));
        for (let p = 0; p < l; p++) {
          const f = p * (i + n), m = f + i, y = [
            c[0] + f * Math.cos(u) + h * Math.cos(u),
            c[1] + f * Math.sin(u) + h * Math.sin(u)
          ], x = [
            c[0] + m * Math.cos(u) + h * Math.cos(u),
            c[1] + m * Math.sin(u) + h * Math.sin(u)
          ];
          a.push(...this.helper.doubleLineOps(y[0], y[1], x[0], x[1], r));
        }
      }), a;
    }
  }
  class E2 {
    constructor(t) {
      this.helper = t;
    }
    fillPolygons(t, r) {
      const i = r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap, n = r.zigzagOffset < 0 ? i : r.zigzagOffset, a = Mi(t, r = Object.assign({}, r, {
        hachureGap: i + n
      }));
      return {
        type: "fillSketch",
        ops: this.zigzagLines(a, n, r)
      };
    }
    zigzagLines(t, r, i) {
      const n = [];
      return t.forEach((a) => {
        const s = ra(a), o = Math.round(s / (2 * r));
        let l = a[0], h = a[1];
        l[0] > h[0] && (l = a[1], h = a[0]);
        const c = Math.atan((h[1] - l[1]) / (h[0] - l[0]));
        for (let d = 0; d < o; d++) {
          const u = 2 * d * r, p = 2 * (d + 1) * r, f = Math.sqrt(2 * Math.pow(r, 2)), m = [
            l[0] + u * Math.cos(c),
            l[1] + u * Math.sin(c)
          ], y = [
            l[0] + p * Math.cos(c),
            l[1] + p * Math.sin(c)
          ], x = [
            m[0] + f * Math.cos(c + Math.PI / 4),
            m[1] + f * Math.sin(c + Math.PI / 4)
          ];
          n.push(...this.helper.doubleLineOps(m[0], m[1], x[0], x[1], i), ...this.helper.doubleLineOps(x[0], x[1], y[0], y[1], i));
        }
      }), n;
    }
  }
  const Xt = {};
  class O2 {
    constructor(t) {
      this.seed = t;
    }
    next() {
      return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
    }
  }
  const D2 = 0, Pa = 1, Xl = 2, qi = {
    A: 7,
    a: 7,
    C: 6,
    c: 6,
    H: 1,
    h: 1,
    L: 2,
    l: 2,
    M: 2,
    m: 2,
    Q: 4,
    q: 4,
    S: 4,
    s: 4,
    T: 2,
    t: 2,
    V: 1,
    v: 1,
    Z: 0,
    z: 0
  };
  function za(e, t) {
    return e.type === t;
  }
  function Ts(e) {
    const t = [], r = function(s) {
      const o = new Array();
      for (; s !== ""; )
        if (s.match(/^([ \t\r\n,]+)/))
          s = s.substr(RegExp.$1.length);
        else if (s.match(/^([aAcChHlLmMqQsStTvVzZ])/))
          o[o.length] = {
            type: D2,
            text: RegExp.$1
          }, s = s.substr(RegExp.$1.length);
        else {
          if (!s.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))
            return [];
          o[o.length] = {
            type: Pa,
            text: `${parseFloat(RegExp.$1)}`
          }, s = s.substr(RegExp.$1.length);
        }
      return o[o.length] = {
        type: Xl,
        text: ""
      }, o;
    }(e);
    let i = "BOD", n = 0, a = r[n];
    for (; !za(a, Xl); ) {
      let s = 0;
      const o = [];
      if (i === "BOD") {
        if (a.text !== "M" && a.text !== "m")
          return Ts("M0,0" + e);
        n++, s = qi[a.text], i = a.text;
      } else
        za(a, Pa) ? s = qi[i] : (n++, s = qi[a.text], i = a.text);
      if (!(n + s < r.length))
        throw new Error("Path data ended short");
      for (let l = n; l < n + s; l++) {
        const h = r[l];
        if (!za(h, Pa))
          throw new Error("Param not a number: " + i + "," + h.text);
        o[o.length] = +h.text;
      }
      if (typeof qi[i] != "number")
        throw new Error("Bad segment: " + i);
      {
        const l = {
          key: i,
          data: o
        };
        t.push(l), n += s, a = r[n], i === "M" && (i = "L"), i === "m" && (i = "l");
      }
    }
    return t;
  }
  function qu(e) {
    let t = 0, r = 0, i = 0, n = 0;
    const a = [];
    for (const { key: s, data: o } of e)
      switch (s) {
        case "M":
          a.push({
            key: "M",
            data: [
              ...o
            ]
          }), [t, r] = o, [i, n] = o;
          break;
        case "m":
          t += o[0], r += o[1], a.push({
            key: "M",
            data: [
              t,
              r
            ]
          }), i = t, n = r;
          break;
        case "L":
          a.push({
            key: "L",
            data: [
              ...o
            ]
          }), [t, r] = o;
          break;
        case "l":
          t += o[0], r += o[1], a.push({
            key: "L",
            data: [
              t,
              r
            ]
          });
          break;
        case "C":
          a.push({
            key: "C",
            data: [
              ...o
            ]
          }), t = o[4], r = o[5];
          break;
        case "c": {
          const l = o.map((h, c) => c % 2 ? h + r : h + t);
          a.push({
            key: "C",
            data: l
          }), t = l[4], r = l[5];
          break;
        }
        case "Q":
          a.push({
            key: "Q",
            data: [
              ...o
            ]
          }), t = o[2], r = o[3];
          break;
        case "q": {
          const l = o.map((h, c) => c % 2 ? h + r : h + t);
          a.push({
            key: "Q",
            data: l
          }), t = l[2], r = l[3];
          break;
        }
        case "A":
          a.push({
            key: "A",
            data: [
              ...o
            ]
          }), t = o[5], r = o[6];
          break;
        case "a":
          t += o[5], r += o[6], a.push({
            key: "A",
            data: [
              o[0],
              o[1],
              o[2],
              o[3],
              o[4],
              t,
              r
            ]
          });
          break;
        case "H":
          a.push({
            key: "H",
            data: [
              ...o
            ]
          }), t = o[0];
          break;
        case "h":
          t += o[0], a.push({
            key: "H",
            data: [
              t
            ]
          });
          break;
        case "V":
          a.push({
            key: "V",
            data: [
              ...o
            ]
          }), r = o[0];
          break;
        case "v":
          r += o[0], a.push({
            key: "V",
            data: [
              r
            ]
          });
          break;
        case "S":
          a.push({
            key: "S",
            data: [
              ...o
            ]
          }), t = o[2], r = o[3];
          break;
        case "s": {
          const l = o.map((h, c) => c % 2 ? h + r : h + t);
          a.push({
            key: "S",
            data: l
          }), t = l[2], r = l[3];
          break;
        }
        case "T":
          a.push({
            key: "T",
            data: [
              ...o
            ]
          }), t = o[0], r = o[1];
          break;
        case "t":
          t += o[0], r += o[1], a.push({
            key: "T",
            data: [
              t,
              r
            ]
          });
          break;
        case "Z":
        case "z":
          a.push({
            key: "Z",
            data: []
          }), t = i, r = n;
      }
    return a;
  }
  function ju(e) {
    const t = [];
    let r = "", i = 0, n = 0, a = 0, s = 0, o = 0, l = 0;
    for (const { key: h, data: c } of e) {
      switch (h) {
        case "M":
          t.push({
            key: "M",
            data: [
              ...c
            ]
          }), [i, n] = c, [a, s] = c;
          break;
        case "C":
          t.push({
            key: "C",
            data: [
              ...c
            ]
          }), i = c[4], n = c[5], o = c[2], l = c[3];
          break;
        case "L":
          t.push({
            key: "L",
            data: [
              ...c
            ]
          }), [i, n] = c;
          break;
        case "H":
          i = c[0], t.push({
            key: "L",
            data: [
              i,
              n
            ]
          });
          break;
        case "V":
          n = c[0], t.push({
            key: "L",
            data: [
              i,
              n
            ]
          });
          break;
        case "S": {
          let d = 0, u = 0;
          r === "C" || r === "S" ? (d = i + (i - o), u = n + (n - l)) : (d = i, u = n), t.push({
            key: "C",
            data: [
              d,
              u,
              ...c
            ]
          }), o = c[0], l = c[1], i = c[2], n = c[3];
          break;
        }
        case "T": {
          const [d, u] = c;
          let p = 0, f = 0;
          r === "Q" || r === "T" ? (p = i + (i - o), f = n + (n - l)) : (p = i, f = n);
          const m = i + 2 * (p - i) / 3, y = n + 2 * (f - n) / 3, x = d + 2 * (p - d) / 3, b = u + 2 * (f - u) / 3;
          t.push({
            key: "C",
            data: [
              m,
              y,
              x,
              b,
              d,
              u
            ]
          }), o = p, l = f, i = d, n = u;
          break;
        }
        case "Q": {
          const [d, u, p, f] = c, m = i + 2 * (d - i) / 3, y = n + 2 * (u - n) / 3, x = p + 2 * (d - p) / 3, b = f + 2 * (u - f) / 3;
          t.push({
            key: "C",
            data: [
              m,
              y,
              x,
              b,
              p,
              f
            ]
          }), o = d, l = u, i = p, n = f;
          break;
        }
        case "A": {
          const d = Math.abs(c[0]), u = Math.abs(c[1]), p = c[2], f = c[3], m = c[4], y = c[5], x = c[6];
          d === 0 || u === 0 ? (t.push({
            key: "C",
            data: [
              i,
              n,
              y,
              x,
              y,
              x
            ]
          }), i = y, n = x) : (i !== y || n !== x) && (Wu(i, n, y, x, d, u, p, f, m).forEach(function(b) {
            t.push({
              key: "C",
              data: b
            });
          }), i = y, n = x);
          break;
        }
        case "Z":
          t.push({
            key: "Z",
            data: []
          }), i = a, n = s;
      }
      r = h;
    }
    return t;
  }
  function ei(e, t, r) {
    return [
      e * Math.cos(r) - t * Math.sin(r),
      e * Math.sin(r) + t * Math.cos(r)
    ];
  }
  function Wu(e, t, r, i, n, a, s, o, l, h) {
    const c = (d = s, Math.PI * d / 180);
    var d;
    let u = [], p = 0, f = 0, m = 0, y = 0;
    if (h)
      [p, f, m, y] = h;
    else {
      [e, t] = ei(e, t, -c), [r, i] = ei(r, i, -c);
      const P = (e - r) / 2, L = (t - i) / 2;
      let M = P * P / (n * n) + L * L / (a * a);
      M > 1 && (M = Math.sqrt(M), n *= M, a *= M);
      const T = n * n, E = a * a, A = T * E - T * L * L - E * P * P, F = T * L * L + E * P * P, I = (o === l ? -1 : 1) * Math.sqrt(Math.abs(A / F));
      m = I * n * L / a + (e + r) / 2, y = I * -a * P / n + (t + i) / 2, p = Math.asin(parseFloat(((t - y) / a).toFixed(9))), f = Math.asin(parseFloat(((i - y) / a).toFixed(9))), e < m && (p = Math.PI - p), r < m && (f = Math.PI - f), p < 0 && (p = 2 * Math.PI + p), f < 0 && (f = 2 * Math.PI + f), l && p > f && (p -= 2 * Math.PI), !l && f > p && (f -= 2 * Math.PI);
    }
    let x = f - p;
    if (Math.abs(x) > 120 * Math.PI / 180) {
      const P = f, L = r, M = i;
      f = l && f > p ? p + 120 * Math.PI / 180 * 1 : p + 120 * Math.PI / 180 * -1, u = Wu(r = m + n * Math.cos(f), i = y + a * Math.sin(f), L, M, n, a, s, 0, l, [
        f,
        P,
        m,
        y
      ]);
    }
    x = f - p;
    const b = Math.cos(p), C = Math.sin(p), S = Math.cos(f), k = Math.sin(f), w = Math.tan(x / 4), B = 4 / 3 * n * w, N = 4 / 3 * a * w, j = [
      e,
      t
    ], O = [
      e + B * C,
      t - N * b
    ], $ = [
      r + B * k,
      i - N * S
    ], W = [
      r,
      i
    ];
    if (O[0] = 2 * j[0] - O[0], O[1] = 2 * j[1] - O[1], h)
      return [
        O,
        $,
        W
      ].concat(u);
    {
      u = [
        O,
        $,
        W
      ].concat(u);
      const P = [];
      for (let L = 0; L < u.length; L += 3) {
        const M = ei(u[L][0], u[L][1], c), T = ei(u[L + 1][0], u[L + 1][1], c), E = ei(u[L + 2][0], u[L + 2][1], c);
        P.push([
          M[0],
          M[1],
          T[0],
          T[1],
          E[0],
          E[1]
        ]);
      }
      return P;
    }
  }
  const I2 = {
    randOffset: function(e, t) {
      return it(e, t);
    },
    randOffsetWithRange: function(e, t, r) {
      return Fn(e, t, r);
    },
    ellipse: function(e, t, r, i, n) {
      const a = Yu(r, i, n);
      return _o(e, t, n, a).opset;
    },
    doubleLineOps: function(e, t, r, i, n) {
      return Ne(e, t, r, i, n, true);
    }
  };
  function Hu(e, t, r, i, n) {
    return {
      type: "path",
      ops: Ne(e, t, r, i, n)
    };
  }
  function rn(e, t, r) {
    const i = (e || []).length;
    if (i > 2) {
      const n = [];
      for (let a = 0; a < i - 1; a++)
        n.push(...Ne(e[a][0], e[a][1], e[a + 1][0], e[a + 1][1], r));
      return t && n.push(...Ne(e[i - 1][0], e[i - 1][1], e[0][0], e[0][1], r)), {
        type: "path",
        ops: n
      };
    }
    return i === 2 ? Hu(e[0][0], e[0][1], e[1][0], e[1][1], r) : {
      type: "path",
      ops: []
    };
  }
  function P2(e, t, r, i, n) {
    return function(a, s) {
      return rn(a, true, s);
    }([
      [
        e,
        t
      ],
      [
        e + r,
        t
      ],
      [
        e + r,
        t + i
      ],
      [
        e,
        t + i
      ]
    ], n);
  }
  function Zl(e, t) {
    if (e.length) {
      const r = typeof e[0][0] == "number" ? [
        e
      ] : e, i = ji(r[0], 1 * (1 + 0.2 * t.roughness), t), n = t.disableMultiStroke ? [] : ji(r[0], 1.5 * (1 + 0.22 * t.roughness), Jl(t));
      for (let a = 1; a < r.length; a++) {
        const s = r[a];
        if (s.length) {
          const o = ji(s, 1 * (1 + 0.2 * t.roughness), t), l = t.disableMultiStroke ? [] : ji(s, 1.5 * (1 + 0.22 * t.roughness), Jl(t));
          for (const h of o)
            h.op !== "move" && i.push(h);
          for (const h of l)
            h.op !== "move" && n.push(h);
        }
      }
      return {
        type: "path",
        ops: i.concat(n)
      };
    }
    return {
      type: "path",
      ops: []
    };
  }
  function Yu(e, t, r) {
    const i = Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(e / 2, 2) + Math.pow(t / 2, 2)) / 2)), n = Math.ceil(Math.max(r.curveStepCount, r.curveStepCount / Math.sqrt(200) * i)), a = 2 * Math.PI / n;
    let s = Math.abs(e / 2), o = Math.abs(t / 2);
    const l = 1 - r.curveFitting;
    return s += it(s * l, r), o += it(o * l, r), {
      increment: a,
      rx: s,
      ry: o
    };
  }
  function _o(e, t, r, i) {
    const [n, a] = th(i.increment, e, t, i.rx, i.ry, 1, i.increment * Fn(0.1, Fn(0.4, 1, r), r), r);
    let s = $n(n, null, r);
    if (!r.disableMultiStroke && r.roughness !== 0) {
      const [o] = th(i.increment, e, t, i.rx, i.ry, 1.5, 0, r), l = $n(o, null, r);
      s = s.concat(l);
    }
    return {
      estimatedPoints: a,
      opset: {
        type: "path",
        ops: s
      }
    };
  }
  function Ql(e, t, r, i, n, a, s, o, l) {
    const h = e, c = t;
    let d = Math.abs(r / 2), u = Math.abs(i / 2);
    d += it(0.01 * d, l), u += it(0.01 * u, l);
    let p = n, f = a;
    for (; p < 0; )
      p += 2 * Math.PI, f += 2 * Math.PI;
    f - p > 2 * Math.PI && (p = 0, f = 2 * Math.PI);
    const m = 2 * Math.PI / l.curveStepCount, y = Math.min(m / 2, (f - p) / 2), x = eh(y, h, c, d, u, p, f, 1, l);
    if (!l.disableMultiStroke) {
      const b = eh(y, h, c, d, u, p, f, 1.5, l);
      x.push(...b);
    }
    return s && (o ? x.push(...Ne(h, c, h + d * Math.cos(p), c + u * Math.sin(p), l), ...Ne(h, c, h + d * Math.cos(f), c + u * Math.sin(f), l)) : x.push({
      op: "lineTo",
      data: [
        h,
        c
      ]
    }, {
      op: "lineTo",
      data: [
        h + d * Math.cos(p),
        c + u * Math.sin(p)
      ]
    })), {
      type: "path",
      ops: x
    };
  }
  function Kl(e, t) {
    const r = ju(qu(Ts(e))), i = [];
    let n = [
      0,
      0
    ], a = [
      0,
      0
    ];
    for (const { key: s, data: o } of r)
      switch (s) {
        case "M":
          a = [
            o[0],
            o[1]
          ], n = [
            o[0],
            o[1]
          ];
          break;
        case "L":
          i.push(...Ne(a[0], a[1], o[0], o[1], t)), a = [
            o[0],
            o[1]
          ];
          break;
        case "C": {
          const [l, h, c, d, u, p] = o;
          i.push(...z2(l, h, c, d, u, p, a, t)), a = [
            u,
            p
          ];
          break;
        }
        case "Z":
          i.push(...Ne(a[0], a[1], n[0], n[1], t)), a = [
            n[0],
            n[1]
          ];
      }
    return {
      type: "path",
      ops: i
    };
  }
  function Ra(e, t) {
    const r = [];
    for (const i of e)
      if (i.length) {
        const n = t.maxRandomnessOffset || 0, a = i.length;
        if (a > 2) {
          r.push({
            op: "move",
            data: [
              i[0][0] + it(n, t),
              i[0][1] + it(n, t)
            ]
          });
          for (let s = 1; s < a; s++)
            r.push({
              op: "lineTo",
              data: [
                i[s][0] + it(n, t),
                i[s][1] + it(n, t)
              ]
            });
        }
      }
    return {
      type: "fillPath",
      ops: r
    };
  }
  function br(e, t) {
    return function(r, i) {
      let n = r.fillStyle || "hachure";
      if (!Xt[n])
        switch (n) {
          case "zigzag":
            Xt[n] || (Xt[n] = new M2(i));
            break;
          case "cross-hatch":
            Xt[n] || (Xt[n] = new A2(i));
            break;
          case "dots":
            Xt[n] || (Xt[n] = new F2(i));
            break;
          case "dashed":
            Xt[n] || (Xt[n] = new $2(i));
            break;
          case "zigzag-line":
            Xt[n] || (Xt[n] = new E2(i));
            break;
          default:
            n = "hachure", Xt[n] || (Xt[n] = new Ss(i));
        }
      return Xt[n];
    }(t, I2).fillPolygons(e, t);
  }
  function Jl(e) {
    const t = Object.assign({}, e);
    return t.randomizer = void 0, e.seed && (t.seed = e.seed + 1), t;
  }
  function Uu(e) {
    return e.randomizer || (e.randomizer = new O2(e.seed || 0)), e.randomizer.next();
  }
  function Fn(e, t, r, i = 1) {
    return r.roughness * i * (Uu(r) * (t - e) + e);
  }
  function it(e, t, r = 1) {
    return Fn(-e, e, t, r);
  }
  function Ne(e, t, r, i, n, a = false) {
    const s = a ? n.disableMultiStrokeFill : n.disableMultiStroke, o = So(e, t, r, i, n, true, false);
    if (s)
      return o;
    const l = So(e, t, r, i, n, true, true);
    return o.concat(l);
  }
  function So(e, t, r, i, n, a, s) {
    const o = Math.pow(e - r, 2) + Math.pow(t - i, 2), l = Math.sqrt(o);
    let h = 1;
    h = l < 200 ? 1 : l > 500 ? 0.4 : -16668e-7 * l + 1.233334;
    let c = n.maxRandomnessOffset || 0;
    c * c * 100 > o && (c = l / 10);
    const d = c / 2, u = 0.2 + 0.2 * Uu(n);
    let p = n.bowing * n.maxRandomnessOffset * (i - t) / 200, f = n.bowing * n.maxRandomnessOffset * (e - r) / 200;
    p = it(p, n, h), f = it(f, n, h);
    const m = [], y = () => it(d, n, h), x = () => it(c, n, h), b = n.preserveVertices;
    return s ? m.push({
      op: "move",
      data: [
        e + (b ? 0 : y()),
        t + (b ? 0 : y())
      ]
    }) : m.push({
      op: "move",
      data: [
        e + (b ? 0 : it(c, n, h)),
        t + (b ? 0 : it(c, n, h))
      ]
    }), s ? m.push({
      op: "bcurveTo",
      data: [
        p + e + (r - e) * u + y(),
        f + t + (i - t) * u + y(),
        p + e + 2 * (r - e) * u + y(),
        f + t + 2 * (i - t) * u + y(),
        r + (b ? 0 : y()),
        i + (b ? 0 : y())
      ]
    }) : m.push({
      op: "bcurveTo",
      data: [
        p + e + (r - e) * u + x(),
        f + t + (i - t) * u + x(),
        p + e + 2 * (r - e) * u + x(),
        f + t + 2 * (i - t) * u + x(),
        r + (b ? 0 : x()),
        i + (b ? 0 : x())
      ]
    }), m;
  }
  function ji(e, t, r) {
    if (!e.length)
      return [];
    const i = [];
    i.push([
      e[0][0] + it(t, r),
      e[0][1] + it(t, r)
    ]), i.push([
      e[0][0] + it(t, r),
      e[0][1] + it(t, r)
    ]);
    for (let n = 1; n < e.length; n++)
      i.push([
        e[n][0] + it(t, r),
        e[n][1] + it(t, r)
      ]), n === e.length - 1 && i.push([
        e[n][0] + it(t, r),
        e[n][1] + it(t, r)
      ]);
    return $n(i, null, r);
  }
  function $n(e, t, r) {
    const i = e.length, n = [];
    if (i > 3) {
      const a = [], s = 1 - r.curveTightness;
      n.push({
        op: "move",
        data: [
          e[1][0],
          e[1][1]
        ]
      });
      for (let o = 1; o + 2 < i; o++) {
        const l = e[o];
        a[0] = [
          l[0],
          l[1]
        ], a[1] = [
          l[0] + (s * e[o + 1][0] - s * e[o - 1][0]) / 6,
          l[1] + (s * e[o + 1][1] - s * e[o - 1][1]) / 6
        ], a[2] = [
          e[o + 1][0] + (s * e[o][0] - s * e[o + 2][0]) / 6,
          e[o + 1][1] + (s * e[o][1] - s * e[o + 2][1]) / 6
        ], a[3] = [
          e[o + 1][0],
          e[o + 1][1]
        ], n.push({
          op: "bcurveTo",
          data: [
            a[1][0],
            a[1][1],
            a[2][0],
            a[2][1],
            a[3][0],
            a[3][1]
          ]
        });
      }
    } else
      i === 3 ? (n.push({
        op: "move",
        data: [
          e[1][0],
          e[1][1]
        ]
      }), n.push({
        op: "bcurveTo",
        data: [
          e[1][0],
          e[1][1],
          e[2][0],
          e[2][1],
          e[2][0],
          e[2][1]
        ]
      })) : i === 2 && n.push(...So(e[0][0], e[0][1], e[1][0], e[1][1], r, true, true));
    return n;
  }
  function th(e, t, r, i, n, a, s, o) {
    const l = [], h = [];
    if (o.roughness === 0) {
      e /= 4, h.push([
        t + i * Math.cos(-e),
        r + n * Math.sin(-e)
      ]);
      for (let c = 0; c <= 2 * Math.PI; c += e) {
        const d = [
          t + i * Math.cos(c),
          r + n * Math.sin(c)
        ];
        l.push(d), h.push(d);
      }
      h.push([
        t + i * Math.cos(0),
        r + n * Math.sin(0)
      ]), h.push([
        t + i * Math.cos(e),
        r + n * Math.sin(e)
      ]);
    } else {
      const c = it(0.5, o) - Math.PI / 2;
      h.push([
        it(a, o) + t + 0.9 * i * Math.cos(c - e),
        it(a, o) + r + 0.9 * n * Math.sin(c - e)
      ]);
      const d = 2 * Math.PI + c - 0.01;
      for (let u = c; u < d; u += e) {
        const p = [
          it(a, o) + t + i * Math.cos(u),
          it(a, o) + r + n * Math.sin(u)
        ];
        l.push(p), h.push(p);
      }
      h.push([
        it(a, o) + t + i * Math.cos(c + 2 * Math.PI + 0.5 * s),
        it(a, o) + r + n * Math.sin(c + 2 * Math.PI + 0.5 * s)
      ]), h.push([
        it(a, o) + t + 0.98 * i * Math.cos(c + s),
        it(a, o) + r + 0.98 * n * Math.sin(c + s)
      ]), h.push([
        it(a, o) + t + 0.9 * i * Math.cos(c + 0.5 * s),
        it(a, o) + r + 0.9 * n * Math.sin(c + 0.5 * s)
      ]);
    }
    return [
      h,
      l
    ];
  }
  function eh(e, t, r, i, n, a, s, o, l) {
    const h = a + it(0.1, l), c = [];
    c.push([
      it(o, l) + t + 0.9 * i * Math.cos(h - e),
      it(o, l) + r + 0.9 * n * Math.sin(h - e)
    ]);
    for (let d = h; d <= s; d += e)
      c.push([
        it(o, l) + t + i * Math.cos(d),
        it(o, l) + r + n * Math.sin(d)
      ]);
    return c.push([
      t + i * Math.cos(s),
      r + n * Math.sin(s)
    ]), c.push([
      t + i * Math.cos(s),
      r + n * Math.sin(s)
    ]), $n(c, null, l);
  }
  function z2(e, t, r, i, n, a, s, o) {
    const l = [], h = [
      o.maxRandomnessOffset || 1,
      (o.maxRandomnessOffset || 1) + 0.3
    ];
    let c = [
      0,
      0
    ];
    const d = o.disableMultiStroke ? 1 : 2, u = o.preserveVertices;
    for (let p = 0; p < d; p++)
      p === 0 ? l.push({
        op: "move",
        data: [
          s[0],
          s[1]
        ]
      }) : l.push({
        op: "move",
        data: [
          s[0] + (u ? 0 : it(h[0], o)),
          s[1] + (u ? 0 : it(h[0], o))
        ]
      }), c = u ? [
        n,
        a
      ] : [
        n + it(h[p], o),
        a + it(h[p], o)
      ], l.push({
        op: "bcurveTo",
        data: [
          e + it(h[p], o),
          t + it(h[p], o),
          r + it(h[p], o),
          i + it(h[p], o),
          c[0],
          c[1]
        ]
      });
    return l;
  }
  function ri(e) {
    return [
      ...e
    ];
  }
  function rh(e, t = 0) {
    const r = e.length;
    if (r < 3)
      throw new Error("A curve must have at least three points.");
    const i = [];
    if (r === 3)
      i.push(ri(e[0]), ri(e[1]), ri(e[2]), ri(e[2]));
    else {
      const n = [];
      n.push(e[0], e[0]);
      for (let o = 1; o < e.length; o++)
        n.push(e[o]), o === e.length - 1 && n.push(e[o]);
      const a = [], s = 1 - t;
      i.push(ri(n[0]));
      for (let o = 1; o + 2 < n.length; o++) {
        const l = n[o];
        a[0] = [
          l[0],
          l[1]
        ], a[1] = [
          l[0] + (s * n[o + 1][0] - s * n[o - 1][0]) / 6,
          l[1] + (s * n[o + 1][1] - s * n[o - 1][1]) / 6
        ], a[2] = [
          n[o + 1][0] + (s * n[o][0] - s * n[o + 2][0]) / 6,
          n[o + 1][1] + (s * n[o][1] - s * n[o + 2][1]) / 6
        ], a[3] = [
          n[o + 1][0],
          n[o + 1][1]
        ], i.push(a[1], a[2], a[3]);
      }
    }
    return i;
  }
  function nn(e, t) {
    return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2);
  }
  function R2(e, t, r) {
    const i = nn(t, r);
    if (i === 0)
      return nn(e, t);
    let n = ((e[0] - t[0]) * (r[0] - t[0]) + (e[1] - t[1]) * (r[1] - t[1])) / i;
    return n = Math.max(0, Math.min(1, n)), nn(e, Ze(t, r, n));
  }
  function Ze(e, t, r) {
    return [
      e[0] + (t[0] - e[0]) * r,
      e[1] + (t[1] - e[1]) * r
    ];
  }
  function To(e, t, r, i) {
    const n = i || [];
    if (function(o, l) {
      const h = o[l + 0], c = o[l + 1], d = o[l + 2], u = o[l + 3];
      let p = 3 * c[0] - 2 * h[0] - u[0];
      p *= p;
      let f = 3 * c[1] - 2 * h[1] - u[1];
      f *= f;
      let m = 3 * d[0] - 2 * u[0] - h[0];
      m *= m;
      let y = 3 * d[1] - 2 * u[1] - h[1];
      return y *= y, p < m && (p = m), f < y && (f = y), p + f;
    }(e, t) < r) {
      const o = e[t + 0];
      n.length ? (a = n[n.length - 1], s = o, Math.sqrt(nn(a, s)) > 1 && n.push(o)) : n.push(o), n.push(e[t + 3]);
    } else {
      const o = e[t + 0], l = e[t + 1], h = e[t + 2], c = e[t + 3], d = Ze(o, l, 0.5), u = Ze(l, h, 0.5), p = Ze(h, c, 0.5), f = Ze(d, u, 0.5), m = Ze(u, p, 0.5), y = Ze(f, m, 0.5);
      To([
        o,
        d,
        f,
        y
      ], 0, r, n), To([
        y,
        m,
        p,
        c
      ], 0, r, n);
    }
    var a, s;
    return n;
  }
  function N2(e, t) {
    return En(e, 0, e.length, t);
  }
  function En(e, t, r, i, n) {
    const a = n || [], s = e[t], o = e[r - 1];
    let l = 0, h = 1;
    for (let c = t + 1; c < r - 1; ++c) {
      const d = R2(e[c], s, o);
      d > l && (l = d, h = c);
    }
    return Math.sqrt(l) > i ? (En(e, t, h + 1, i, a), En(e, h, r, i, a)) : (a.length || a.push(s), a.push(o)), a;
  }
  function Na(e, t = 0.15, r) {
    const i = [], n = (e.length - 1) / 3;
    for (let a = 0; a < n; a++)
      To(e, 3 * a, t, i);
    return r && r > 0 ? En(i, 0, i.length, r) : i;
  }
  const te = "none";
  class On {
    constructor(t) {
      this.defaultOptions = {
        maxRandomnessOffset: 2,
        roughness: 1,
        bowing: 1,
        stroke: "#000",
        strokeWidth: 1,
        curveTightness: 0,
        curveFitting: 0.95,
        curveStepCount: 9,
        fillStyle: "hachure",
        fillWeight: -1,
        hachureAngle: -41,
        hachureGap: -1,
        dashOffset: -1,
        dashGap: -1,
        zigzagOffset: -1,
        seed: 0,
        disableMultiStroke: false,
        disableMultiStrokeFill: false,
        preserveVertices: false,
        fillShapeRoughnessGain: 0.8
      }, this.config = t || {}, this.config.options && (this.defaultOptions = this._o(this.config.options));
    }
    static newSeed() {
      return Math.floor(Math.random() * 2 ** 31);
    }
    _o(t) {
      return t ? Object.assign({}, this.defaultOptions, t) : this.defaultOptions;
    }
    _d(t, r, i) {
      return {
        shape: t,
        sets: r || [],
        options: i || this.defaultOptions
      };
    }
    line(t, r, i, n, a) {
      const s = this._o(a);
      return this._d("line", [
        Hu(t, r, i, n, s)
      ], s);
    }
    rectangle(t, r, i, n, a) {
      const s = this._o(a), o = [], l = P2(t, r, i, n, s);
      if (s.fill) {
        const h = [
          [
            t,
            r
          ],
          [
            t + i,
            r
          ],
          [
            t + i,
            r + n
          ],
          [
            t,
            r + n
          ]
        ];
        s.fillStyle === "solid" ? o.push(Ra([
          h
        ], s)) : o.push(br([
          h
        ], s));
      }
      return s.stroke !== te && o.push(l), this._d("rectangle", o, s);
    }
    ellipse(t, r, i, n, a) {
      const s = this._o(a), o = [], l = Yu(i, n, s), h = _o(t, r, s, l);
      if (s.fill)
        if (s.fillStyle === "solid") {
          const c = _o(t, r, s, l).opset;
          c.type = "fillPath", o.push(c);
        } else
          o.push(br([
            h.estimatedPoints
          ], s));
      return s.stroke !== te && o.push(h.opset), this._d("ellipse", o, s);
    }
    circle(t, r, i, n) {
      const a = this.ellipse(t, r, i, i, n);
      return a.shape = "circle", a;
    }
    linearPath(t, r) {
      const i = this._o(r);
      return this._d("linearPath", [
        rn(t, false, i)
      ], i);
    }
    arc(t, r, i, n, a, s, o = false, l) {
      const h = this._o(l), c = [], d = Ql(t, r, i, n, a, s, o, true, h);
      if (o && h.fill)
        if (h.fillStyle === "solid") {
          const u = Object.assign({}, h);
          u.disableMultiStroke = true;
          const p = Ql(t, r, i, n, a, s, true, false, u);
          p.type = "fillPath", c.push(p);
        } else
          c.push(function(u, p, f, m, y, x, b) {
            const C = u, S = p;
            let k = Math.abs(f / 2), w = Math.abs(m / 2);
            k += it(0.01 * k, b), w += it(0.01 * w, b);
            let B = y, N = x;
            for (; B < 0; )
              B += 2 * Math.PI, N += 2 * Math.PI;
            N - B > 2 * Math.PI && (B = 0, N = 2 * Math.PI);
            const j = (N - B) / b.curveStepCount, O = [];
            for (let $ = B; $ <= N; $ += j)
              O.push([
                C + k * Math.cos($),
                S + w * Math.sin($)
              ]);
            return O.push([
              C + k * Math.cos(N),
              S + w * Math.sin(N)
            ]), O.push([
              C,
              S
            ]), br([
              O
            ], b);
          }(t, r, i, n, a, s, h));
      return h.stroke !== te && c.push(d), this._d("arc", c, h);
    }
    curve(t, r) {
      const i = this._o(r), n = [], a = Zl(t, i);
      if (i.fill && i.fill !== te)
        if (i.fillStyle === "solid") {
          const s = Zl(t, Object.assign(Object.assign({}, i), {
            disableMultiStroke: true,
            roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0
          }));
          n.push({
            type: "fillPath",
            ops: this._mergedShape(s.ops)
          });
        } else {
          const s = [], o = t;
          if (o.length) {
            const l = typeof o[0][0] == "number" ? [
              o
            ] : o;
            for (const h of l)
              h.length < 3 ? s.push(...h) : h.length === 3 ? s.push(...Na(rh([
                h[0],
                h[0],
                h[1],
                h[2]
              ]), 10, (1 + i.roughness) / 2)) : s.push(...Na(rh(h), 10, (1 + i.roughness) / 2));
          }
          s.length && n.push(br([
            s
          ], i));
        }
      return i.stroke !== te && n.push(a), this._d("curve", n, i);
    }
    polygon(t, r) {
      const i = this._o(r), n = [], a = rn(t, true, i);
      return i.fill && (i.fillStyle === "solid" ? n.push(Ra([
        t
      ], i)) : n.push(br([
        t
      ], i))), i.stroke !== te && n.push(a), this._d("polygon", n, i);
    }
    path(t, r) {
      const i = this._o(r), n = [];
      if (!t)
        return this._d("path", n, i);
      t = (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
      const a = i.fill && i.fill !== "transparent" && i.fill !== te, s = i.stroke !== te, o = !!(i.simplification && i.simplification < 1), l = function(c, d, u) {
        const p = ju(qu(Ts(c))), f = [];
        let m = [], y = [
          0,
          0
        ], x = [];
        const b = () => {
          x.length >= 4 && m.push(...Na(x, d)), x = [];
        }, C = () => {
          b(), m.length && (f.push(m), m = []);
        };
        for (const { key: k, data: w } of p)
          switch (k) {
            case "M":
              C(), y = [
                w[0],
                w[1]
              ], m.push(y);
              break;
            case "L":
              b(), m.push([
                w[0],
                w[1]
              ]);
              break;
            case "C":
              if (!x.length) {
                const B = m.length ? m[m.length - 1] : y;
                x.push([
                  B[0],
                  B[1]
                ]);
              }
              x.push([
                w[0],
                w[1]
              ]), x.push([
                w[2],
                w[3]
              ]), x.push([
                w[4],
                w[5]
              ]);
              break;
            case "Z":
              b(), m.push([
                y[0],
                y[1]
              ]);
          }
        if (C(), !u)
          return f;
        const S = [];
        for (const k of f) {
          const w = N2(k, u);
          w.length && S.push(w);
        }
        return S;
      }(t, 1, o ? 4 - 4 * (i.simplification || 1) : (1 + i.roughness) / 2), h = Kl(t, i);
      if (a)
        if (i.fillStyle === "solid")
          if (l.length === 1) {
            const c = Kl(t, Object.assign(Object.assign({}, i), {
              disableMultiStroke: true,
              roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0
            }));
            n.push({
              type: "fillPath",
              ops: this._mergedShape(c.ops)
            });
          } else
            n.push(Ra(l, i));
        else
          n.push(br(l, i));
      return s && (o ? l.forEach((c) => {
        n.push(rn(c, false, i));
      }) : n.push(h)), this._d("path", n, i);
    }
    opsToPath(t, r) {
      let i = "";
      for (const n of t.ops) {
        const a = typeof r == "number" && r >= 0 ? n.data.map((s) => +s.toFixed(r)) : n.data;
        switch (n.op) {
          case "move":
            i += `M${a[0]} ${a[1]} `;
            break;
          case "bcurveTo":
            i += `C${a[0]} ${a[1]}, ${a[2]} ${a[3]}, ${a[4]} ${a[5]} `;
            break;
          case "lineTo":
            i += `L${a[0]} ${a[1]} `;
        }
      }
      return i.trim();
    }
    toPaths(t) {
      const r = t.sets || [], i = t.options || this.defaultOptions, n = [];
      for (const a of r) {
        let s = null;
        switch (a.type) {
          case "path":
            s = {
              d: this.opsToPath(a),
              stroke: i.stroke,
              strokeWidth: i.strokeWidth,
              fill: te
            };
            break;
          case "fillPath":
            s = {
              d: this.opsToPath(a),
              stroke: te,
              strokeWidth: 0,
              fill: i.fill || te
            };
            break;
          case "fillSketch":
            s = this.fillSketch(a, i);
        }
        s && n.push(s);
      }
      return n;
    }
    fillSketch(t, r) {
      let i = r.fillWeight;
      return i < 0 && (i = r.strokeWidth / 2), {
        d: this.opsToPath(t),
        stroke: r.fill || te,
        strokeWidth: i,
        fill: te
      };
    }
    _mergedShape(t) {
      return t.filter((r, i) => i === 0 || r.op !== "move");
    }
  }
  class q2 {
    constructor(t, r) {
      this.canvas = t, this.ctx = this.canvas.getContext("2d"), this.gen = new On(r);
    }
    draw(t) {
      const r = t.sets || [], i = t.options || this.getDefaultOptions(), n = this.ctx, a = t.options.fixedDecimalPlaceDigits;
      for (const s of r)
        switch (s.type) {
          case "path":
            n.save(), n.strokeStyle = i.stroke === "none" ? "transparent" : i.stroke, n.lineWidth = i.strokeWidth, i.strokeLineDash && n.setLineDash(i.strokeLineDash), i.strokeLineDashOffset && (n.lineDashOffset = i.strokeLineDashOffset), this._drawToContext(n, s, a), n.restore();
            break;
          case "fillPath": {
            n.save(), n.fillStyle = i.fill || "";
            const o = t.shape === "curve" || t.shape === "polygon" || t.shape === "path" ? "evenodd" : "nonzero";
            this._drawToContext(n, s, a, o), n.restore();
            break;
          }
          case "fillSketch":
            this.fillSketch(n, s, i);
        }
    }
    fillSketch(t, r, i) {
      let n = i.fillWeight;
      n < 0 && (n = i.strokeWidth / 2), t.save(), i.fillLineDash && t.setLineDash(i.fillLineDash), i.fillLineDashOffset && (t.lineDashOffset = i.fillLineDashOffset), t.strokeStyle = i.fill || "", t.lineWidth = n, this._drawToContext(t, r, i.fixedDecimalPlaceDigits), t.restore();
    }
    _drawToContext(t, r, i, n = "nonzero") {
      t.beginPath();
      for (const a of r.ops) {
        const s = typeof i == "number" && i >= 0 ? a.data.map((o) => +o.toFixed(i)) : a.data;
        switch (a.op) {
          case "move":
            t.moveTo(s[0], s[1]);
            break;
          case "bcurveTo":
            t.bezierCurveTo(s[0], s[1], s[2], s[3], s[4], s[5]);
            break;
          case "lineTo":
            t.lineTo(s[0], s[1]);
        }
      }
      r.type === "fillPath" ? t.fill(n) : t.stroke();
    }
    get generator() {
      return this.gen;
    }
    getDefaultOptions() {
      return this.gen.defaultOptions;
    }
    line(t, r, i, n, a) {
      const s = this.gen.line(t, r, i, n, a);
      return this.draw(s), s;
    }
    rectangle(t, r, i, n, a) {
      const s = this.gen.rectangle(t, r, i, n, a);
      return this.draw(s), s;
    }
    ellipse(t, r, i, n, a) {
      const s = this.gen.ellipse(t, r, i, n, a);
      return this.draw(s), s;
    }
    circle(t, r, i, n) {
      const a = this.gen.circle(t, r, i, n);
      return this.draw(a), a;
    }
    linearPath(t, r) {
      const i = this.gen.linearPath(t, r);
      return this.draw(i), i;
    }
    polygon(t, r) {
      const i = this.gen.polygon(t, r);
      return this.draw(i), i;
    }
    arc(t, r, i, n, a, s, o = false, l) {
      const h = this.gen.arc(t, r, i, n, a, s, o, l);
      return this.draw(h), h;
    }
    curve(t, r) {
      const i = this.gen.curve(t, r);
      return this.draw(i), i;
    }
    path(t, r) {
      const i = this.gen.path(t, r);
      return this.draw(i), i;
    }
  }
  const Wi = "http://www.w3.org/2000/svg";
  class j2 {
    constructor(t, r) {
      this.svg = t, this.gen = new On(r);
    }
    draw(t) {
      const r = t.sets || [], i = t.options || this.getDefaultOptions(), n = this.svg.ownerDocument || window.document, a = n.createElementNS(Wi, "g"), s = t.options.fixedDecimalPlaceDigits;
      for (const o of r) {
        let l = null;
        switch (o.type) {
          case "path":
            l = n.createElementNS(Wi, "path"), l.setAttribute("d", this.opsToPath(o, s)), l.setAttribute("stroke", i.stroke), l.setAttribute("stroke-width", i.strokeWidth + ""), l.setAttribute("fill", "none"), i.strokeLineDash && l.setAttribute("stroke-dasharray", i.strokeLineDash.join(" ").trim()), i.strokeLineDashOffset && l.setAttribute("stroke-dashoffset", `${i.strokeLineDashOffset}`);
            break;
          case "fillPath":
            l = n.createElementNS(Wi, "path"), l.setAttribute("d", this.opsToPath(o, s)), l.setAttribute("stroke", "none"), l.setAttribute("stroke-width", "0"), l.setAttribute("fill", i.fill || ""), t.shape !== "curve" && t.shape !== "polygon" || l.setAttribute("fill-rule", "evenodd");
            break;
          case "fillSketch":
            l = this.fillSketch(n, o, i);
        }
        l && a.appendChild(l);
      }
      return a;
    }
    fillSketch(t, r, i) {
      let n = i.fillWeight;
      n < 0 && (n = i.strokeWidth / 2);
      const a = t.createElementNS(Wi, "path");
      return a.setAttribute("d", this.opsToPath(r, i.fixedDecimalPlaceDigits)), a.setAttribute("stroke", i.fill || ""), a.setAttribute("stroke-width", n + ""), a.setAttribute("fill", "none"), i.fillLineDash && a.setAttribute("stroke-dasharray", i.fillLineDash.join(" ").trim()), i.fillLineDashOffset && a.setAttribute("stroke-dashoffset", `${i.fillLineDashOffset}`), a;
    }
    get generator() {
      return this.gen;
    }
    getDefaultOptions() {
      return this.gen.defaultOptions;
    }
    opsToPath(t, r) {
      return this.gen.opsToPath(t, r);
    }
    line(t, r, i, n, a) {
      const s = this.gen.line(t, r, i, n, a);
      return this.draw(s);
    }
    rectangle(t, r, i, n, a) {
      const s = this.gen.rectangle(t, r, i, n, a);
      return this.draw(s);
    }
    ellipse(t, r, i, n, a) {
      const s = this.gen.ellipse(t, r, i, n, a);
      return this.draw(s);
    }
    circle(t, r, i, n) {
      const a = this.gen.circle(t, r, i, n);
      return this.draw(a);
    }
    linearPath(t, r) {
      const i = this.gen.linearPath(t, r);
      return this.draw(i);
    }
    polygon(t, r) {
      const i = this.gen.polygon(t, r);
      return this.draw(i);
    }
    arc(t, r, i, n, a, s, o = false, l) {
      const h = this.gen.arc(t, r, i, n, a, s, o, l);
      return this.draw(h);
    }
    curve(t, r) {
      const i = this.gen.curve(t, r);
      return this.draw(i);
    }
    path(t, r) {
      const i = this.gen.path(t, r);
      return this.draw(i);
    }
  }
  let Q, ot, qa, nt;
  Q = {
    canvas: (e, t) => new q2(e, t),
    svg: (e, t) => new j2(e, t),
    generator: (e) => new On(e),
    newSeed: () => On.newSeed()
  };
  ot = g(async (e, t, r) => {
    var i, n;
    let a;
    const s = t.useHtmlLabels || Mt((i = dt()) == null ? void 0 : i.htmlLabels);
    r ? a = r : a = "node default";
    const o = e.insert("g").attr("class", a).attr("id", t.domId || t.id), l = o.insert("g").attr("class", "label").attr("style", Ut(t.labelStyle));
    let h;
    t.label === void 0 ? h = "" : h = typeof t.label == "string" ? t.label : t.label[0];
    const c = await We(l, rr(cr(h), dt()), {
      useHtmlLabels: s,
      width: t.width || ((n = dt().flowchart) == null ? void 0 : n.wrappingWidth),
      cssClasses: "markdown-node-label",
      style: t.labelStyle,
      addSvgBackground: !!t.icon || !!t.img
    });
    let d = c.getBBox();
    const u = ((t == null ? void 0 : t.padding) ?? 0) / 2;
    if (s) {
      const p = c.children[0], f = lt(c), m = p.getElementsByTagName("img");
      if (m) {
        const y = h.replace(/<img[^>]*>/g, "").trim() === "";
        await Promise.all([
          ...m
        ].map((x) => new Promise((b) => {
          function C() {
            if (x.style.display = "flex", x.style.flexDirection = "column", y) {
              const S = dt().fontSize ? dt().fontSize : window.getComputedStyle(document.body).fontSize, k = 5, [w = zh.fontSize] = Qn(S), B = w * k + "px";
              x.style.minWidth = B, x.style.maxWidth = B;
            } else
              x.style.width = "100%";
            b(x);
          }
          g(C, "setupImage"), setTimeout(() => {
            x.complete && C();
          }), x.addEventListener("error", C), x.addEventListener("load", C);
        })));
      }
      d = p.getBoundingClientRect(), f.attr("width", d.width), f.attr("height", d.height);
    }
    return s ? l.attr("transform", "translate(" + -d.width / 2 + ", " + -d.height / 2 + ")") : l.attr("transform", "translate(0, " + -d.height / 2 + ")"), t.centerLabel && l.attr("transform", "translate(" + -d.width / 2 + ", " + -d.height / 2 + ")"), l.insert("rect", ":first-child"), {
      shapeSvg: o,
      bbox: d,
      halfPadding: u,
      label: l
    };
  }, "labelHelper");
  qa = g(async (e, t, r) => {
    var i, n, a, s, o, l;
    const h = r.useHtmlLabels || Mt((n = (i = dt()) == null ? void 0 : i.flowchart) == null ? void 0 : n.htmlLabels), c = e.insert("g").attr("class", "label").attr("style", r.labelStyle || ""), d = await We(c, rr(cr(t), dt()), {
      useHtmlLabels: h,
      width: r.width || ((s = (a = dt()) == null ? void 0 : a.flowchart) == null ? void 0 : s.wrappingWidth),
      style: r.labelStyle,
      addSvgBackground: !!r.icon || !!r.img
    });
    let u = d.getBBox();
    const p = r.padding / 2;
    if (Mt((l = (o = dt()) == null ? void 0 : o.flowchart) == null ? void 0 : l.htmlLabels)) {
      const f = d.children[0], m = lt(d);
      u = f.getBoundingClientRect(), m.attr("width", u.width), m.attr("height", u.height);
    }
    return h ? c.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")") : c.attr("transform", "translate(0, " + -u.height / 2 + ")"), r.centerLabel && c.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")"), c.insert("rect", ":first-child"), {
      shapeSvg: e,
      bbox: u,
      halfPadding: p,
      label: c
    };
  }, "insertLabel");
  J = g((e, t) => {
    const r = t.node().getBBox();
    e.width = r.width, e.height = r.height;
  }, "updateNodeBounds");
  nt = g((e, t) => (e.look === "handDrawn" ? "rough-node" : "node") + " " + e.cssClasses + " " + (t || ""), "getNodeClasses");
  function ht(e) {
    const t = e.map((r, i) => `${i === 0 ? "M" : "L"}${r.x},${r.y}`);
    return t.push("Z"), t.join(" ");
  }
  g(ht, "createPathFromPoints");
  function qe(e, t, r, i, n, a) {
    const s = [], o = r - e, l = i - t, h = o / a, c = 2 * Math.PI / h, d = t + l / 2;
    for (let u = 0; u <= 50; u++) {
      const p = u / 50, f = e + p * o, m = d + n * Math.sin(c * (f - e));
      s.push({
        x: f,
        y: m
      });
    }
    return s;
  }
  g(qe, "generateFullSineWavePoints");
  function Bs(e, t, r, i, n, a) {
    const s = [], o = n * Math.PI / 180, l = (a * Math.PI / 180 - o) / (i - 1);
    for (let h = 0; h < i; h++) {
      const c = o + h * l, d = e + r * Math.cos(c), u = t + r * Math.sin(c);
      s.push({
        x: -d,
        y: -u
      });
    }
    return s;
  }
  g(Bs, "generateCirclePoints");
  var W2 = g((e, t) => {
    var r = e.x, i = e.y, n = t.x - r, a = t.y - i, s = e.width / 2, o = e.height / 2, l, h;
    return Math.abs(a) * s > Math.abs(n) * o ? (a < 0 && (o = -o), l = a === 0 ? 0 : o * n / a, h = o) : (n < 0 && (s = -s), l = s, h = n === 0 ? 0 : s * a / n), {
      x: r + l,
      y: i + h
    };
  }, "intersectRect"), zr = W2;
  function Vu(e, t) {
    t && e.attr("style", t);
  }
  g(Vu, "applyStyle");
  async function Gu(e) {
    const t = lt(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), r = t.append("xhtml:div");
    let i = e.label;
    e.label && Ar(e.label) && (i = await No(e.label.replace(Dr.lineBreakRegex, `
`), dt()));
    const n = e.isNode ? "nodeLabel" : "edgeLabel";
    return r.html('<span class="' + n + '" ' + (e.labelStyle ? 'style="' + e.labelStyle + '"' : "") + ">" + i + "</span>"), Vu(r, e.labelStyle), r.style("display", "inline-block"), r.style("padding-right", "1px"), r.style("white-space", "nowrap"), r.attr("xmlns", "http://www.w3.org/1999/xhtml"), t.node();
  }
  g(Gu, "addHtmlLabel");
  let H2, er, Ee, Y2, Rr, U2, Xu, tt, K, Zu, V2, G2, X2, Z2, Q2, K2, Qu;
  H2 = g(async (e, t, r, i) => {
    let n = e || "";
    if (typeof n == "object" && (n = n[0]), Mt(dt().flowchart.htmlLabels)) {
      n = n.replace(/\\n|\n/g, "<br />"), D.info("vertexText" + n);
      const a = {
        isNode: i,
        label: cr(n).replace(/fa[blrs]?:fa-[\w-]+/g, (s) => `<i class='${s.replace(":", " ")}'></i>`),
        labelStyle: t && t.replace("fill:", "color:")
      };
      return await Gu(a);
    } else {
      const a = document.createElementNS("http://www.w3.org/2000/svg", "text");
      a.setAttribute("style", t.replace("color:", "fill:"));
      let s = [];
      typeof n == "string" ? s = n.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(n) ? s = n : s = [];
      for (const o of s) {
        const l = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), l.setAttribute("dy", "1em"), l.setAttribute("x", "0"), r ? l.setAttribute("class", "title-row") : l.setAttribute("class", "row"), l.textContent = o.trim(), a.appendChild(l);
      }
      return a;
    }
  }, "createLabel");
  er = H2;
  Ee = g((e, t, r, i, n) => [
    "M",
    e + n,
    t,
    "H",
    e + r - n,
    "A",
    n,
    n,
    0,
    0,
    1,
    e + r,
    t + n,
    "V",
    t + i - n,
    "A",
    n,
    n,
    0,
    0,
    1,
    e + r - n,
    t + i,
    "H",
    e + n,
    "A",
    n,
    n,
    0,
    0,
    1,
    e,
    t + i - n,
    "V",
    t + n,
    "A",
    n,
    n,
    0,
    0,
    1,
    e + n,
    t,
    "Z"
  ].join(" "), "createRoundedRectPathD");
  Y2 = g((e) => {
    const { handDrawnSeed: t } = dt();
    return {
      fill: e,
      hachureAngle: 120,
      hachureGap: 4,
      fillWeight: 2,
      roughness: 0.7,
      stroke: e,
      seed: t
    };
  }, "solidStateFill");
  Rr = g((e) => {
    const t = U2([
      ...e.cssCompiledStyles || [],
      ...e.cssStyles || []
    ]);
    return {
      stylesMap: t,
      stylesArray: [
        ...t
      ]
    };
  }, "compileStyles");
  U2 = g((e) => {
    const t = /* @__PURE__ */ new Map();
    return e.forEach((r) => {
      const [i, n] = r.split(":");
      t.set(i.trim(), n == null ? void 0 : n.trim());
    }), t;
  }, "styles2Map");
  Xu = g((e) => e === "color" || e === "font-size" || e === "font-family" || e === "font-weight" || e === "font-style" || e === "text-decoration" || e === "text-align" || e === "text-transform" || e === "line-height" || e === "letter-spacing" || e === "word-spacing" || e === "text-shadow" || e === "text-overflow" || e === "white-space" || e === "word-wrap" || e === "word-break" || e === "overflow-wrap" || e === "hyphens", "isLabelStyle");
  tt = g((e) => {
    const { stylesArray: t } = Rr(e), r = [], i = [], n = [], a = [];
    return t.forEach((s) => {
      const o = s[0];
      Xu(o) ? r.push(s.join(":") + " !important") : (i.push(s.join(":") + " !important"), o.includes("stroke") && n.push(s.join(":") + " !important"), o === "fill" && a.push(s.join(":") + " !important"));
    }), {
      labelStyles: r.join(";"),
      nodeStyles: i.join(";"),
      stylesArray: t,
      borderStyles: n,
      backgroundStyles: a
    };
  }, "styles2String");
  K = g((e, t) => {
    var r;
    const { themeVariables: i, handDrawnSeed: n } = dt(), { nodeBorder: a, mainBkg: s } = i, { stylesMap: o } = Rr(e);
    return Object.assign({
      roughness: 0.7,
      fill: o.get("fill") || s,
      fillStyle: "hachure",
      fillWeight: 4,
      hachureGap: 5.2,
      stroke: o.get("stroke") || a,
      seed: n,
      strokeWidth: ((r = o.get("stroke-width")) == null ? void 0 : r.replace("px", "")) || 1.3,
      fillLineDash: [
        0,
        0
      ]
    }, t);
  }, "userNodeOverrides");
  Zu = g(async (e, t) => {
    D.info("Creating subgraph rect for ", t.id, t);
    const r = dt(), { themeVariables: i, handDrawnSeed: n } = r, { clusterBkg: a, clusterBorder: s } = i, { labelStyles: o, nodeStyles: l, borderStyles: h, backgroundStyles: c } = tt(t), d = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), u = Mt(r.flowchart.htmlLabels), p = d.insert("g").attr("class", "cluster-label "), f = await We(p, t.label, {
      style: t.labelStyle,
      useHtmlLabels: u,
      isNode: true
    });
    let m = f.getBBox();
    if (Mt(r.flowchart.htmlLabels)) {
      const B = f.children[0], N = lt(f);
      m = B.getBoundingClientRect(), N.attr("width", m.width), N.attr("height", m.height);
    }
    const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
    t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
    const x = t.height, b = t.x - y / 2, C = t.y - x / 2;
    D.trace("Data ", t, JSON.stringify(t));
    let S;
    if (t.look === "handDrawn") {
      const B = Q.svg(d), N = K(t, {
        roughness: 0.7,
        fill: a,
        stroke: s,
        fillWeight: 3,
        seed: n
      }), j = B.path(Ee(b, C, y, x, 0), N);
      S = d.insert(() => (D.debug("Rough node insert CXC", j), j), ":first-child"), S.select("path:nth-child(2)").attr("style", h.join(";")), S.select("path").attr("style", c.join(";").replace("fill", "stroke"));
    } else
      S = d.insert("rect", ":first-child"), S.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", C).attr("width", y).attr("height", x);
    const { subGraphTitleTopMargin: k } = Jo(r);
    if (p.attr("transform", `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + k})`), o) {
      const B = p.select("span");
      B && B.attr("style", o);
    }
    const w = S.node().getBBox();
    return t.offsetX = 0, t.width = w.width, t.height = w.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(B) {
      return zr(t, B);
    }, {
      cluster: d,
      labelBBox: m
    };
  }, "rect");
  V2 = g((e, t) => {
    const r = e.insert("g").attr("class", "note-cluster").attr("id", t.id), i = r.insert("rect", ":first-child"), n = 0 * t.padding, a = n / 2;
    i.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - a).attr("y", t.y - t.height / 2 - a).attr("width", t.width + n).attr("height", t.height + n).attr("fill", "none");
    const s = i.node().getBBox();
    return t.width = s.width, t.height = s.height, t.intersect = function(o) {
      return zr(t, o);
    }, {
      cluster: r,
      labelBBox: {
        width: 0,
        height: 0
      }
    };
  }, "noteGroup");
  G2 = g(async (e, t) => {
    const r = dt(), { themeVariables: i, handDrawnSeed: n } = r, { altBackground: a, compositeBackground: s, compositeTitleBackground: o, nodeBorder: l } = i, h = e.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-id", t.id).attr("data-look", t.look), c = h.insert("g", ":first-child"), d = h.insert("g").attr("class", "cluster-label");
    let u = h.append("rect");
    const p = d.node().appendChild(await er(t.label, t.labelStyle, void 0, true));
    let f = p.getBBox();
    if (Mt(r.flowchart.htmlLabels)) {
      const j = p.children[0], O = lt(p);
      f = j.getBoundingClientRect(), O.attr("width", f.width), O.attr("height", f.height);
    }
    const m = 0 * t.padding, y = m / 2, x = (t.width <= f.width + t.padding ? f.width + t.padding : t.width) + m;
    t.width <= f.width + t.padding ? t.diff = (x - t.width) / 2 - t.padding : t.diff = -t.padding;
    const b = t.height + m, C = t.height + m - f.height - 6, S = t.x - x / 2, k = t.y - b / 2;
    t.width = x;
    const w = t.y - t.height / 2 - y + f.height + 2;
    let B;
    if (t.look === "handDrawn") {
      const j = t.cssClasses.includes("statediagram-cluster-alt"), O = Q.svg(h), $ = t.rx || t.ry ? O.path(Ee(S, k, x, b, 10), {
        roughness: 0.7,
        fill: o,
        fillStyle: "solid",
        stroke: l,
        seed: n
      }) : O.rectangle(S, k, x, b, {
        seed: n
      });
      B = h.insert(() => $, ":first-child");
      const W = O.rectangle(S, w, x, C, {
        fill: j ? a : s,
        fillStyle: j ? "hachure" : "solid",
        stroke: l,
        seed: n
      });
      B = h.insert(() => $, ":first-child"), u = h.insert(() => W);
    } else
      B = c.insert("rect", ":first-child"), B.attr("class", "outer").attr("x", S).attr("y", k).attr("width", x).attr("height", b).attr("data-look", t.look), u.attr("class", "inner").attr("x", S).attr("y", w).attr("width", x).attr("height", C);
    d.attr("transform", `translate(${t.x - f.width / 2}, ${k + 1 - (Mt(r.flowchart.htmlLabels) ? 0 : 3)})`);
    const N = B.node().getBBox();
    return t.height = N.height, t.offsetX = 0, t.offsetY = f.height - t.padding / 2, t.labelBBox = f, t.intersect = function(j) {
      return zr(t, j);
    }, {
      cluster: h,
      labelBBox: f
    };
  }, "roundedWithTitle");
  X2 = g(async (e, t) => {
    D.info("Creating subgraph rect for ", t.id, t);
    const r = dt(), { themeVariables: i, handDrawnSeed: n } = r, { clusterBkg: a, clusterBorder: s } = i, { labelStyles: o, nodeStyles: l, borderStyles: h, backgroundStyles: c } = tt(t), d = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), u = Mt(r.flowchart.htmlLabels), p = d.insert("g").attr("class", "cluster-label "), f = await We(p, t.label, {
      style: t.labelStyle,
      useHtmlLabels: u,
      isNode: true,
      width: t.width
    });
    let m = f.getBBox();
    if (Mt(r.flowchart.htmlLabels)) {
      const B = f.children[0], N = lt(f);
      m = B.getBoundingClientRect(), N.attr("width", m.width), N.attr("height", m.height);
    }
    const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
    t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
    const x = t.height, b = t.x - y / 2, C = t.y - x / 2;
    D.trace("Data ", t, JSON.stringify(t));
    let S;
    if (t.look === "handDrawn") {
      const B = Q.svg(d), N = K(t, {
        roughness: 0.7,
        fill: a,
        stroke: s,
        fillWeight: 4,
        seed: n
      }), j = B.path(Ee(b, C, y, x, t.rx), N);
      S = d.insert(() => (D.debug("Rough node insert CXC", j), j), ":first-child"), S.select("path:nth-child(2)").attr("style", h.join(";")), S.select("path").attr("style", c.join(";").replace("fill", "stroke"));
    } else
      S = d.insert("rect", ":first-child"), S.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", C).attr("width", y).attr("height", x);
    const { subGraphTitleTopMargin: k } = Jo(r);
    if (p.attr("transform", `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + k})`), o) {
      const B = p.select("span");
      B && B.attr("style", o);
    }
    const w = S.node().getBBox();
    return t.offsetX = 0, t.width = w.width, t.height = w.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(B) {
      return zr(t, B);
    }, {
      cluster: d,
      labelBBox: m
    };
  }, "kanbanSection");
  Z2 = g((e, t) => {
    const r = dt(), { themeVariables: i, handDrawnSeed: n } = r, { nodeBorder: a } = i, s = e.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-look", t.look), o = s.insert("g", ":first-child"), l = 0 * t.padding, h = t.width + l;
    t.diff = -t.padding;
    const c = t.height + l, d = t.x - h / 2, u = t.y - c / 2;
    t.width = h;
    let p;
    if (t.look === "handDrawn") {
      const m = Q.svg(s).rectangle(d, u, h, c, {
        fill: "lightgrey",
        roughness: 0.5,
        strokeLineDash: [
          5
        ],
        stroke: a,
        seed: n
      });
      p = s.insert(() => m, ":first-child");
    } else
      p = o.insert("rect", ":first-child"), p.attr("class", "divider").attr("x", d).attr("y", u).attr("width", h).attr("height", c).attr("data-look", t.look);
    const f = p.node().getBBox();
    return t.height = f.height, t.offsetX = 0, t.offsetY = 0, t.intersect = function(m) {
      return zr(t, m);
    }, {
      cluster: s,
      labelBBox: {}
    };
  }, "divider");
  Q2 = Zu;
  K2 = {
    rect: Zu,
    squareRect: Q2,
    roundedWithTitle: G2,
    noteGroup: V2,
    divider: Z2,
    kanbanSection: X2
  };
  Qu = /* @__PURE__ */ new Map();
  J2 = g(async (e, t) => {
    const r = t.shape || "rect", i = await K2[r](e, t);
    return Qu.set(t.id, i), i;
  }, "insertCluster");
  Y_ = g(() => {
    Qu = /* @__PURE__ */ new Map();
  }, "clear");
  function Ku(e, t) {
    return e.intersect(t);
  }
  g(Ku, "intersectNode");
  var tk = Ku;
  function Ju(e, t, r, i) {
    var n = e.x, a = e.y, s = n - i.x, o = a - i.y, l = Math.sqrt(t * t * o * o + r * r * s * s), h = Math.abs(t * r * s / l);
    i.x < n && (h = -h);
    var c = Math.abs(t * r * o / l);
    return i.y < a && (c = -c), {
      x: n + h,
      y: a + c
    };
  }
  g(Ju, "intersectEllipse");
  var tp = Ju;
  function ep(e, t, r) {
    return tp(e, t, t, r);
  }
  g(ep, "intersectCircle");
  var ek = ep;
  function rp(e, t, r, i) {
    var n, a, s, o, l, h, c, d, u, p, f, m, y, x, b;
    if (n = t.y - e.y, s = e.x - t.x, l = t.x * e.y - e.x * t.y, u = n * r.x + s * r.y + l, p = n * i.x + s * i.y + l, !(u !== 0 && p !== 0 && Bo(u, p)) && (a = i.y - r.y, o = r.x - i.x, h = i.x * r.y - r.x * i.y, c = a * e.x + o * e.y + h, d = a * t.x + o * t.y + h, !(c !== 0 && d !== 0 && Bo(c, d)) && (f = n * o - a * s, f !== 0)))
      return m = Math.abs(f / 2), y = s * h - o * l, x = y < 0 ? (y - m) / f : (y + m) / f, y = a * l - n * h, b = y < 0 ? (y - m) / f : (y + m) / f, {
        x,
        y: b
      };
  }
  g(rp, "intersectLine");
  function Bo(e, t) {
    return e * t > 0;
  }
  g(Bo, "sameSign");
  var rk = rp;
  function ip(e, t, r) {
    let i = e.x, n = e.y, a = [], s = Number.POSITIVE_INFINITY, o = Number.POSITIVE_INFINITY;
    typeof t.forEach == "function" ? t.forEach(function(c) {
      s = Math.min(s, c.x), o = Math.min(o, c.y);
    }) : (s = Math.min(s, t.x), o = Math.min(o, t.y));
    let l = i - e.width / 2 - s, h = n - e.height / 2 - o;
    for (let c = 0; c < t.length; c++) {
      let d = t[c], u = t[c < t.length - 1 ? c + 1 : 0], p = rk(e, r, {
        x: l + d.x,
        y: h + d.y
      }, {
        x: l + u.x,
        y: h + u.y
      });
      p && a.push(p);
    }
    return a.length ? (a.length > 1 && a.sort(function(c, d) {
      let u = c.x - r.x, p = c.y - r.y, f = Math.sqrt(u * u + p * p), m = d.x - r.x, y = d.y - r.y, x = Math.sqrt(m * m + y * y);
      return f < x ? -1 : f === x ? 0 : 1;
    }), a[0]) : e;
  }
  g(ip, "intersectPolygon");
  var ik = ip, X = {
    node: tk,
    circle: ek,
    ellipse: tp,
    polygon: ik,
    rect: zr
  };
  function np(e, t) {
    const { labelStyles: r } = tt(t);
    t.labelStyle = r;
    const i = nt(t);
    let n = i;
    i || (n = "anchor");
    const a = e.insert("g").attr("class", n).attr("id", t.domId || t.id), s = 1, { cssStyles: o } = t, l = Q.svg(a), h = K(t, {
      fill: "black",
      stroke: "none",
      fillStyle: "solid"
    });
    t.look !== "handDrawn" && (h.roughness = 0);
    const c = l.circle(0, 0, s * 2, h), d = a.insert(() => c, ":first-child");
    return d.attr("class", "anchor").attr("style", Ut(o)), J(t, d), t.intersect = function(u) {
      return D.info("Circle intersect", t, s, u), X.circle(t, s, u);
    }, a;
  }
  g(np, "anchor");
  function Lo(e, t, r, i, n, a, s) {
    const o = (e + r) / 2, l = (t + i) / 2, h = Math.atan2(i - t, r - e), c = (r - e) / 2, d = (i - t) / 2, u = c / n, p = d / a, f = Math.sqrt(u ** 2 + p ** 2);
    if (f > 1)
      throw new Error("The given radii are too small to create an arc between the points.");
    const m = Math.sqrt(1 - f ** 2), y = o + m * a * Math.sin(h) * (s ? -1 : 1), x = l - m * n * Math.cos(h) * (s ? -1 : 1), b = Math.atan2((t - x) / a, (e - y) / n);
    let C = Math.atan2((i - x) / a, (r - y) / n) - b;
    s && C < 0 && (C += 2 * Math.PI), !s && C > 0 && (C -= 2 * Math.PI);
    const S = [];
    for (let k = 0; k < 20; k++) {
      const w = k / 19, B = b + w * C, N = y + n * Math.cos(B), j = x + a * Math.sin(B);
      S.push({
        x: N,
        y: j
      });
    }
    return S;
  }
  g(Lo, "generateArcPoints");
  async function ap(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a } = await ot(e, t, nt(t)), s = a.width + t.padding + 20, o = a.height + t.padding, l = o / 2, h = l / (2.5 + o / 50), { cssStyles: c } = t, d = [
      {
        x: s / 2,
        y: -o / 2
      },
      {
        x: -s / 2,
        y: -o / 2
      },
      ...Lo(-s / 2, -o / 2, -s / 2, o / 2, h, l, false),
      {
        x: s / 2,
        y: o / 2
      },
      ...Lo(s / 2, o / 2, s / 2, -o / 2, h, l, true)
    ], u = Q.svg(n), p = K(t, {});
    t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
    const f = ht(d), m = u.path(f, p), y = n.insert(() => m, ":first-child");
    return y.attr("class", "basic label-container"), c && t.look !== "handDrawn" && y.selectAll("path").attr("style", c), i && t.look !== "handDrawn" && y.selectAll("path").attr("style", i), y.attr("transform", `translate(${h / 2}, 0)`), J(t, y), t.intersect = function(x) {
      return X.polygon(t, d, x);
    }, n;
  }
  g(ap, "bowTieRect");
  function Oe(e, t, r, i) {
    return e.insert("polygon", ":first-child").attr("points", i.map(function(n) {
      return n.x + "," + n.y;
    }).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + r / 2 + ")");
  }
  g(Oe, "insertPolygonShape");
  async function op(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a } = await ot(e, t, nt(t)), s = a.height + t.padding, o = 12, l = a.width + t.padding + o, h = 0, c = l, d = -s, u = 0, p = [
      {
        x: h + o,
        y: d
      },
      {
        x: c,
        y: d
      },
      {
        x: c,
        y: u
      },
      {
        x: h,
        y: u
      },
      {
        x: h,
        y: d + o
      },
      {
        x: h + o,
        y: d
      }
    ];
    let f;
    const { cssStyles: m } = t;
    if (t.look === "handDrawn") {
      const y = Q.svg(n), x = K(t, {}), b = ht(p), C = y.path(b, x);
      f = n.insert(() => C, ":first-child").attr("transform", `translate(${-l / 2}, ${s / 2})`), m && f.attr("style", m);
    } else
      f = Oe(n, l, s, p);
    return i && f.attr("style", i), J(t, f), t.intersect = function(y) {
      return X.polygon(t, p, y);
    }, n;
  }
  g(op, "card");
  function sp(e, t) {
    const { nodeStyles: r } = tt(t);
    t.label = "";
    const i = e.insert("g").attr("class", nt(t)).attr("id", t.domId ?? t.id), { cssStyles: n } = t, a = Math.max(28, t.width ?? 0), s = [
      {
        x: 0,
        y: a / 2
      },
      {
        x: a / 2,
        y: 0
      },
      {
        x: 0,
        y: -a / 2
      },
      {
        x: -a / 2,
        y: 0
      }
    ], o = Q.svg(i), l = K(t, {});
    t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
    const h = ht(s), c = o.path(h, l), d = i.insert(() => c, ":first-child");
    return n && t.look !== "handDrawn" && d.selectAll("path").attr("style", n), r && t.look !== "handDrawn" && d.selectAll("path").attr("style", r), t.width = 28, t.height = 28, t.intersect = function(u) {
      return X.polygon(t, s, u);
    }, i;
  }
  g(sp, "choice");
  async function lp(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a, halfPadding: s } = await ot(e, t, nt(t)), o = a.width / 2 + s;
    let l;
    const { cssStyles: h } = t;
    if (t.look === "handDrawn") {
      const c = Q.svg(n), d = K(t, {}), u = c.circle(0, 0, o * 2, d);
      l = n.insert(() => u, ":first-child"), l.attr("class", "basic label-container").attr("style", Ut(h));
    } else
      l = n.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", i).attr("r", o).attr("cx", 0).attr("cy", 0);
    return J(t, l), t.intersect = function(c) {
      return D.info("Circle intersect", t, o, c), X.circle(t, o, c);
    }, n;
  }
  g(lp, "circle");
  function hp(e) {
    const t = Math.cos(Math.PI / 4), r = Math.sin(Math.PI / 4), i = e * 2, n = {
      x: i / 2 * t,
      y: i / 2 * r
    }, a = {
      x: -(i / 2) * t,
      y: i / 2 * r
    }, s = {
      x: -(i / 2) * t,
      y: -(i / 2) * r
    }, o = {
      x: i / 2 * t,
      y: -(i / 2) * r
    };
    return `M ${a.x},${a.y} L ${o.x},${o.y}
                   M ${n.x},${n.y} L ${s.x},${s.y}`;
  }
  g(hp, "createLine");
  function cp(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r, t.label = "";
    const n = e.insert("g").attr("class", nt(t)).attr("id", t.domId ?? t.id), a = Math.max(30, (t == null ? void 0 : t.width) ?? 0), { cssStyles: s } = t, o = Q.svg(n), l = K(t, {});
    t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
    const h = o.circle(0, 0, a * 2, l), c = hp(a), d = o.path(c, l), u = n.insert(() => h, ":first-child");
    return u.insert(() => d), s && t.look !== "handDrawn" && u.selectAll("path").attr("style", s), i && t.look !== "handDrawn" && u.selectAll("path").attr("style", i), J(t, u), t.intersect = function(p) {
      return D.info("crossedCircle intersect", t, {
        radius: a,
        point: p
      }), X.circle(t, a, p);
    }, n;
  }
  g(cp, "crossedCircle");
  function Se(e, t, r, i = 100, n = 0, a = 180) {
    const s = [], o = n * Math.PI / 180, l = (a * Math.PI / 180 - o) / (i - 1);
    for (let h = 0; h < i; h++) {
      const c = o + h * l, d = e + r * Math.cos(c), u = t + r * Math.sin(c);
      s.push({
        x: -d,
        y: -u
      });
    }
    return s;
  }
  g(Se, "generateCirclePoints");
  async function dp(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a, label: s } = await ot(e, t, nt(t)), o = a.width + (t.padding ?? 0), l = a.height + (t.padding ?? 0), h = Math.max(5, l * 0.1), { cssStyles: c } = t, d = [
      ...Se(o / 2, -l / 2, h, 30, -90, 0),
      {
        x: -o / 2 - h,
        y: h
      },
      ...Se(o / 2 + h * 2, -h, h, 20, -180, -270),
      ...Se(o / 2 + h * 2, h, h, 20, -90, -180),
      {
        x: -o / 2 - h,
        y: -l / 2
      },
      ...Se(o / 2, l / 2, h, 20, 0, 90)
    ], u = [
      {
        x: o / 2,
        y: -l / 2 - h
      },
      {
        x: -o / 2,
        y: -l / 2 - h
      },
      ...Se(o / 2, -l / 2, h, 20, -90, 0),
      {
        x: -o / 2 - h,
        y: -h
      },
      ...Se(o / 2 + o * 0.1, -h, h, 20, -180, -270),
      ...Se(o / 2 + o * 0.1, h, h, 20, -90, -180),
      {
        x: -o / 2 - h,
        y: l / 2
      },
      ...Se(o / 2, l / 2, h, 20, 0, 90),
      {
        x: -o / 2,
        y: l / 2 + h
      },
      {
        x: o / 2,
        y: l / 2 + h
      }
    ], p = Q.svg(n), f = K(t, {
      fill: "none"
    });
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    const m = ht(d).replace("Z", ""), y = p.path(m, f), x = ht(u), b = p.path(x, {
      ...f
    }), C = n.insert("g", ":first-child");
    return C.insert(() => b, ":first-child").attr("stroke-opacity", 0), C.insert(() => y, ":first-child"), C.attr("class", "text"), c && t.look !== "handDrawn" && C.selectAll("path").attr("style", c), i && t.look !== "handDrawn" && C.selectAll("path").attr("style", i), C.attr("transform", `translate(${h}, 0)`), s.attr("transform", `translate(${-o / 2 + h - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), J(t, C), t.intersect = function(S) {
      return X.polygon(t, u, S);
    }, n;
  }
  g(dp, "curlyBraceLeft");
  function Te(e, t, r, i = 100, n = 0, a = 180) {
    const s = [], o = n * Math.PI / 180, l = (a * Math.PI / 180 - o) / (i - 1);
    for (let h = 0; h < i; h++) {
      const c = o + h * l, d = e + r * Math.cos(c), u = t + r * Math.sin(c);
      s.push({
        x: d,
        y: u
      });
    }
    return s;
  }
  g(Te, "generateCirclePoints");
  async function up(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a, label: s } = await ot(e, t, nt(t)), o = a.width + (t.padding ?? 0), l = a.height + (t.padding ?? 0), h = Math.max(5, l * 0.1), { cssStyles: c } = t, d = [
      ...Te(o / 2, -l / 2, h, 20, -90, 0),
      {
        x: o / 2 + h,
        y: -h
      },
      ...Te(o / 2 + h * 2, -h, h, 20, -180, -270),
      ...Te(o / 2 + h * 2, h, h, 20, -90, -180),
      {
        x: o / 2 + h,
        y: l / 2
      },
      ...Te(o / 2, l / 2, h, 20, 0, 90)
    ], u = [
      {
        x: -o / 2,
        y: -l / 2 - h
      },
      {
        x: o / 2,
        y: -l / 2 - h
      },
      ...Te(o / 2, -l / 2, h, 20, -90, 0),
      {
        x: o / 2 + h,
        y: -h
      },
      ...Te(o / 2 + h * 2, -h, h, 20, -180, -270),
      ...Te(o / 2 + h * 2, h, h, 20, -90, -180),
      {
        x: o / 2 + h,
        y: l / 2
      },
      ...Te(o / 2, l / 2, h, 20, 0, 90),
      {
        x: o / 2,
        y: l / 2 + h
      },
      {
        x: -o / 2,
        y: l / 2 + h
      }
    ], p = Q.svg(n), f = K(t, {
      fill: "none"
    });
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    const m = ht(d).replace("Z", ""), y = p.path(m, f), x = ht(u), b = p.path(x, {
      ...f
    }), C = n.insert("g", ":first-child");
    return C.insert(() => b, ":first-child").attr("stroke-opacity", 0), C.insert(() => y, ":first-child"), C.attr("class", "text"), c && t.look !== "handDrawn" && C.selectAll("path").attr("style", c), i && t.look !== "handDrawn" && C.selectAll("path").attr("style", i), C.attr("transform", `translate(${-h}, 0)`), s.attr("transform", `translate(${-o / 2 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), J(t, C), t.intersect = function(S) {
      return X.polygon(t, u, S);
    }, n;
  }
  g(up, "curlyBraceRight");
  function Ot(e, t, r, i = 100, n = 0, a = 180) {
    const s = [], o = n * Math.PI / 180, l = (a * Math.PI / 180 - o) / (i - 1);
    for (let h = 0; h < i; h++) {
      const c = o + h * l, d = e + r * Math.cos(c), u = t + r * Math.sin(c);
      s.push({
        x: -d,
        y: -u
      });
    }
    return s;
  }
  g(Ot, "generateCirclePoints");
  async function pp(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a, label: s } = await ot(e, t, nt(t)), o = a.width + (t.padding ?? 0), l = a.height + (t.padding ?? 0), h = Math.max(5, l * 0.1), { cssStyles: c } = t, d = [
      ...Ot(o / 2, -l / 2, h, 30, -90, 0),
      {
        x: -o / 2 - h,
        y: h
      },
      ...Ot(o / 2 + h * 2, -h, h, 20, -180, -270),
      ...Ot(o / 2 + h * 2, h, h, 20, -90, -180),
      {
        x: -o / 2 - h,
        y: -l / 2
      },
      ...Ot(o / 2, l / 2, h, 20, 0, 90)
    ], u = [
      ...Ot(-o / 2 + h + h / 2, -l / 2, h, 20, -90, -180),
      {
        x: o / 2 - h / 2,
        y: h
      },
      ...Ot(-o / 2 - h / 2, -h, h, 20, 0, 90),
      ...Ot(-o / 2 - h / 2, h, h, 20, -90, 0),
      {
        x: o / 2 - h / 2,
        y: -h
      },
      ...Ot(-o / 2 + h + h / 2, l / 2, h, 30, -180, -270)
    ], p = [
      {
        x: o / 2,
        y: -l / 2 - h
      },
      {
        x: -o / 2,
        y: -l / 2 - h
      },
      ...Ot(o / 2, -l / 2, h, 20, -90, 0),
      {
        x: -o / 2 - h,
        y: -h
      },
      ...Ot(o / 2 + h * 2, -h, h, 20, -180, -270),
      ...Ot(o / 2 + h * 2, h, h, 20, -90, -180),
      {
        x: -o / 2 - h,
        y: l / 2
      },
      ...Ot(o / 2, l / 2, h, 20, 0, 90),
      {
        x: -o / 2,
        y: l / 2 + h
      },
      {
        x: o / 2 - h - h / 2,
        y: l / 2 + h
      },
      ...Ot(-o / 2 + h + h / 2, -l / 2, h, 20, -90, -180),
      {
        x: o / 2 - h / 2,
        y: h
      },
      ...Ot(-o / 2 - h / 2, -h, h, 20, 0, 90),
      ...Ot(-o / 2 - h / 2, h, h, 20, -90, 0),
      {
        x: o / 2 - h / 2,
        y: -h
      },
      ...Ot(-o / 2 + h + h / 2, l / 2, h, 30, -180, -270)
    ], f = Q.svg(n), m = K(t, {
      fill: "none"
    });
    t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
    const y = ht(d).replace("Z", ""), x = f.path(y, m), b = ht(u).replace("Z", ""), C = f.path(b, m), S = ht(p), k = f.path(S, {
      ...m
    }), w = n.insert("g", ":first-child");
    return w.insert(() => k, ":first-child").attr("stroke-opacity", 0), w.insert(() => x, ":first-child"), w.insert(() => C, ":first-child"), w.attr("class", "text"), c && t.look !== "handDrawn" && w.selectAll("path").attr("style", c), i && t.look !== "handDrawn" && w.selectAll("path").attr("style", i), w.attr("transform", `translate(${h - h / 4}, 0)`), s.attr("transform", `translate(${-o / 2 + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), J(t, w), t.intersect = function(B) {
      return X.polygon(t, p, B);
    }, n;
  }
  g(pp, "curlyBraces");
  async function gp(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a } = await ot(e, t, nt(t)), s = 80, o = 20, l = Math.max(s, (a.width + (t.padding ?? 0) * 2) * 1.25, (t == null ? void 0 : t.width) ?? 0), h = Math.max(o, a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = h / 2, { cssStyles: d } = t, u = Q.svg(n), p = K(t, {});
    t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
    const f = l, m = h, y = f - c, x = m / 4, b = [
      {
        x: y,
        y: 0
      },
      {
        x,
        y: 0
      },
      {
        x: 0,
        y: m / 2
      },
      {
        x,
        y: m
      },
      {
        x: y,
        y: m
      },
      ...Bs(-y, -m / 2, c, 50, 270, 90)
    ], C = ht(b), S = u.path(C, p), k = n.insert(() => S, ":first-child");
    return k.attr("class", "basic label-container"), d && t.look !== "handDrawn" && k.selectChildren("path").attr("style", d), i && t.look !== "handDrawn" && k.selectChildren("path").attr("style", i), k.attr("transform", `translate(${-l / 2}, ${-h / 2})`), J(t, k), t.intersect = function(w) {
      return X.polygon(t, b, w);
    }, n;
  }
  g(gp, "curvedTrapezoid");
  var nk = g((e, t, r, i, n, a) => [
    `M${e},${t + a}`,
    `a${n},${a} 0,0,0 ${r},0`,
    `a${n},${a} 0,0,0 ${-r},0`,
    `l0,${i}`,
    `a${n},${a} 0,0,0 ${r},0`,
    `l0,${-i}`
  ].join(" "), "createCylinderPathD"), ak = g((e, t, r, i, n, a) => [
    `M${e},${t + a}`,
    `M${e + r},${t + a}`,
    `a${n},${a} 0,0,0 ${-r},0`,
    `l0,${i}`,
    `a${n},${a} 0,0,0 ${r},0`,
    `l0,${-i}`
  ].join(" "), "createOuterCylinderPathD"), ok = g((e, t, r, i, n, a) => [
    `M${e - r / 2},${-i / 2}`,
    `a${n},${a} 0,0,0 ${r},0`
  ].join(" "), "createInnerCylinderPathD");
  async function fp(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a, label: s } = await ot(e, t, nt(t)), o = Math.max(a.width + t.padding, t.width ?? 0), l = o / 2, h = l / (2.5 + o / 50), c = Math.max(a.height + h + t.padding, t.height ?? 0);
    let d;
    const { cssStyles: u } = t;
    if (t.look === "handDrawn") {
      const p = Q.svg(n), f = ak(0, 0, o, c, l, h), m = ok(0, h, o, c, l, h), y = p.path(f, K(t, {})), x = p.path(m, K(t, {
        fill: "none"
      }));
      d = n.insert(() => x, ":first-child"), d = n.insert(() => y, ":first-child"), d.attr("class", "basic label-container"), u && d.attr("style", u);
    } else {
      const p = nk(0, 0, o, c, l, h);
      d = n.insert("path", ":first-child").attr("d", p).attr("class", "basic label-container").attr("style", Ut(u)).attr("style", i);
    }
    return d.attr("label-offset-y", h), d.attr("transform", `translate(${-o / 2}, ${-(c / 2 + h)})`), J(t, d), s.attr("transform", `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + (t.padding ?? 0) / 1.5 - (a.y - (a.top ?? 0))})`), t.intersect = function(p) {
      const f = X.rect(t, p), m = f.x - (t.x ?? 0);
      if (l != 0 && (Math.abs(m) < (t.width ?? 0) / 2 || Math.abs(m) == (t.width ?? 0) / 2 && Math.abs(f.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - h)) {
        let y = h * h * (1 - m * m / (l * l));
        y > 0 && (y = Math.sqrt(y)), y = h - y, p.y - (t.y ?? 0) > 0 && (y = -y), f.y += y;
      }
      return f;
    }, n;
  }
  g(fp, "cylinder");
  async function mp(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a, label: s } = await ot(e, t, nt(t)), o = a.width + t.padding, l = a.height + t.padding, h = l * 0.2, c = -o / 2, d = -l / 2 - h / 2, { cssStyles: u } = t, p = Q.svg(n), f = K(t, {});
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    const m = [
      {
        x: c,
        y: d + h
      },
      {
        x: -c,
        y: d + h
      },
      {
        x: -c,
        y: -d
      },
      {
        x: c,
        y: -d
      },
      {
        x: c,
        y: d
      },
      {
        x: -c,
        y: d
      },
      {
        x: -c,
        y: d + h
      }
    ], y = p.polygon(m.map((b) => [
      b.x,
      b.y
    ]), f), x = n.insert(() => y, ":first-child");
    return x.attr("class", "basic label-container"), u && t.look !== "handDrawn" && x.selectAll("path").attr("style", u), i && t.look !== "handDrawn" && x.selectAll("path").attr("style", i), s.attr("transform", `translate(${c + (t.padding ?? 0) / 2 - (a.x - (a.left ?? 0))}, ${d + h + (t.padding ?? 0) / 2 - (a.y - (a.top ?? 0))})`), J(t, x), t.intersect = function(b) {
      return X.rect(t, b);
    }, n;
  }
  g(mp, "dividedRectangle");
  async function yp(e, t) {
    var r, i;
    const { labelStyles: n, nodeStyles: a } = tt(t);
    t.labelStyle = n;
    const { shapeSvg: s, bbox: o, halfPadding: l } = await ot(e, t, nt(t)), h = o.width / 2 + l + 5, c = o.width / 2 + l;
    let d;
    const { cssStyles: u } = t;
    if (t.look === "handDrawn") {
      const p = Q.svg(s), f = K(t, {
        roughness: 0.2,
        strokeWidth: 2.5
      }), m = K(t, {
        roughness: 0.2,
        strokeWidth: 1.5
      }), y = p.circle(0, 0, h * 2, f), x = p.circle(0, 0, c * 2, m);
      d = s.insert("g", ":first-child"), d.attr("class", Ut(t.cssClasses)).attr("style", Ut(u)), (r = d.node()) == null || r.appendChild(y), (i = d.node()) == null || i.appendChild(x);
    } else {
      d = s.insert("g", ":first-child");
      const p = d.insert("circle", ":first-child"), f = d.insert("circle");
      d.attr("class", "basic label-container").attr("style", a), p.attr("class", "outer-circle").attr("style", a).attr("r", h).attr("cx", 0).attr("cy", 0), f.attr("class", "inner-circle").attr("style", a).attr("r", c).attr("cx", 0).attr("cy", 0);
    }
    return J(t, d), t.intersect = function(p) {
      return D.info("DoubleCircle intersect", t, h, p), X.circle(t, h, p);
    }, s;
  }
  g(yp, "doublecircle");
  function xp(e, t, { config: { themeVariables: r } }) {
    const { labelStyles: i, nodeStyles: n } = tt(t);
    t.label = "", t.labelStyle = i;
    const a = e.insert("g").attr("class", nt(t)).attr("id", t.domId ?? t.id), s = 7, { cssStyles: o } = t, l = Q.svg(a), { nodeBorder: h } = r, c = K(t, {
      fillStyle: "solid"
    });
    t.look !== "handDrawn" && (c.roughness = 0);
    const d = l.circle(0, 0, s * 2, c), u = a.insert(() => d, ":first-child");
    return u.selectAll("path").attr("style", `fill: ${h} !important;`), o && o.length > 0 && t.look !== "handDrawn" && u.selectAll("path").attr("style", o), n && t.look !== "handDrawn" && u.selectAll("path").attr("style", n), J(t, u), t.intersect = function(p) {
      return D.info("filledCircle intersect", t, {
        radius: s,
        point: p
      }), X.circle(t, s, p);
    }, a;
  }
  g(xp, "filledCircle");
  async function bp(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a, label: s } = await ot(e, t, nt(t)), o = a.width + (t.padding ?? 0), l = o + a.height, h = o + a.height, c = [
      {
        x: 0,
        y: -l
      },
      {
        x: h,
        y: -l
      },
      {
        x: h / 2,
        y: 0
      }
    ], { cssStyles: d } = t, u = Q.svg(n), p = K(t, {});
    t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
    const f = ht(c), m = u.path(f, p), y = n.insert(() => m, ":first-child").attr("transform", `translate(${-l / 2}, ${l / 2})`);
    return d && t.look !== "handDrawn" && y.selectChildren("path").attr("style", d), i && t.look !== "handDrawn" && y.selectChildren("path").attr("style", i), t.width = o, t.height = l, J(t, y), s.attr("transform", `translate(${-a.width / 2 - (a.x - (a.left ?? 0))}, ${-l / 2 + (t.padding ?? 0) / 2 + (a.y - (a.top ?? 0))})`), t.intersect = function(x) {
      return D.info("Triangle intersect", t, c, x), X.polygon(t, c, x);
    }, n;
  }
  g(bp, "flippedTriangle");
  function kp(e, t, { dir: r, config: { state: i, themeVariables: n } }) {
    const { nodeStyles: a } = tt(t);
    t.label = "";
    const s = e.insert("g").attr("class", nt(t)).attr("id", t.domId ?? t.id), { cssStyles: o } = t;
    let l = Math.max(70, (t == null ? void 0 : t.width) ?? 0), h = Math.max(10, (t == null ? void 0 : t.height) ?? 0);
    r === "LR" && (l = Math.max(10, (t == null ? void 0 : t.width) ?? 0), h = Math.max(70, (t == null ? void 0 : t.height) ?? 0));
    const c = -1 * l / 2, d = -1 * h / 2, u = Q.svg(s), p = K(t, {
      stroke: n.lineColor,
      fill: n.lineColor
    });
    t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
    const f = u.rectangle(c, d, l, h, p), m = s.insert(() => f, ":first-child");
    o && t.look !== "handDrawn" && m.selectAll("path").attr("style", o), a && t.look !== "handDrawn" && m.selectAll("path").attr("style", a), J(t, m);
    const y = (i == null ? void 0 : i.padding) ?? 0;
    return t.width && t.height && (t.width += y / 2 || 0, t.height += y / 2 || 0), t.intersect = function(x) {
      return X.rect(t, x);
    }, s;
  }
  g(kp, "forkJoin");
  async function Cp(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const n = 80, a = 50, { shapeSvg: s, bbox: o } = await ot(e, t, nt(t)), l = Math.max(n, o.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), h = Math.max(a, o.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = h / 2, { cssStyles: d } = t, u = Q.svg(s), p = K(t, {});
    t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
    const f = [
      {
        x: -l / 2,
        y: -h / 2
      },
      {
        x: l / 2 - c,
        y: -h / 2
      },
      ...Bs(-l / 2 + c, 0, c, 50, 90, 270),
      {
        x: l / 2 - c,
        y: h / 2
      },
      {
        x: -l / 2,
        y: h / 2
      }
    ], m = ht(f), y = u.path(m, p), x = s.insert(() => y, ":first-child");
    return x.attr("class", "basic label-container"), d && t.look !== "handDrawn" && x.selectChildren("path").attr("style", d), i && t.look !== "handDrawn" && x.selectChildren("path").attr("style", i), J(t, x), t.intersect = function(b) {
      return D.info("Pill intersect", t, {
        radius: c,
        point: b
      }), X.polygon(t, f, b);
    }, s;
  }
  g(Cp, "halfRoundedRectangle");
  var sk = g((e, t, r, i, n) => [
    `M${e + n},${t}`,
    `L${e + r - n},${t}`,
    `L${e + r},${t - i / 2}`,
    `L${e + r - n},${t - i}`,
    `L${e + n},${t - i}`,
    `L${e},${t - i / 2}`,
    "Z"
  ].join(" "), "createHexagonPathD");
  async function vp(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a } = await ot(e, t, nt(t)), s = 4, o = a.height + t.padding, l = o / s, h = a.width + 2 * l + t.padding, c = [
      {
        x: l,
        y: 0
      },
      {
        x: h - l,
        y: 0
      },
      {
        x: h,
        y: -o / 2
      },
      {
        x: h - l,
        y: -o
      },
      {
        x: l,
        y: -o
      },
      {
        x: 0,
        y: -o / 2
      }
    ];
    let d;
    const { cssStyles: u } = t;
    if (t.look === "handDrawn") {
      const p = Q.svg(n), f = K(t, {}), m = sk(0, 0, h, o, l), y = p.path(m, f);
      d = n.insert(() => y, ":first-child").attr("transform", `translate(${-h / 2}, ${o / 2})`), u && d.attr("style", u);
    } else
      d = Oe(n, h, o, c);
    return i && d.attr("style", i), t.width = h, t.height = o, J(t, d), t.intersect = function(p) {
      return X.polygon(t, c, p);
    }, n;
  }
  g(vp, "hexagon");
  async function wp(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.label = "", t.labelStyle = r;
    const { shapeSvg: n } = await ot(e, t, nt(t)), a = Math.max(30, (t == null ? void 0 : t.width) ?? 0), s = Math.max(30, (t == null ? void 0 : t.height) ?? 0), { cssStyles: o } = t, l = Q.svg(n), h = K(t, {});
    t.look !== "handDrawn" && (h.roughness = 0, h.fillStyle = "solid");
    const c = [
      {
        x: 0,
        y: 0
      },
      {
        x: a,
        y: 0
      },
      {
        x: 0,
        y: s
      },
      {
        x: a,
        y: s
      }
    ], d = ht(c), u = l.path(d, h), p = n.insert(() => u, ":first-child");
    return p.attr("class", "basic label-container"), o && t.look !== "handDrawn" && p.selectChildren("path").attr("style", o), i && t.look !== "handDrawn" && p.selectChildren("path").attr("style", i), p.attr("transform", `translate(${-a / 2}, ${-s / 2})`), J(t, p), t.intersect = function(f) {
      return D.info("Pill intersect", t, {
        points: c
      }), X.polygon(t, c, f);
    }, n;
  }
  g(wp, "hourglass");
  async function _p(e, t, { config: { themeVariables: r, flowchart: i } }) {
    const { labelStyles: n } = tt(t);
    t.labelStyle = n;
    const a = t.assetHeight ?? 48, s = t.assetWidth ?? 48, o = Math.max(a, s), l = i == null ? void 0 : i.wrappingWidth;
    t.width = Math.max(o, l ?? 0);
    const { shapeSvg: h, bbox: c, label: d } = await ot(e, t, "icon-shape default"), u = t.pos === "t", p = o, f = o, { nodeBorder: m } = r, { stylesMap: y } = Rr(t), x = -f / 2, b = -p / 2, C = t.label ? 8 : 0, S = Q.svg(h), k = K(t, {
      stroke: "none",
      fill: "none"
    });
    t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
    const w = S.rectangle(x, b, f, p, k), B = Math.max(f, c.width), N = p + c.height + C, j = S.rectangle(-B / 2, -N / 2, B, N, {
      ...k,
      fill: "transparent",
      stroke: "none"
    }), O = h.insert(() => w, ":first-child"), $ = h.insert(() => j);
    if (t.icon) {
      const W = h.append("g");
      W.html(`<g>${await Wn(t.icon, {
        height: o,
        width: o,
        fallbackPrefix: ""
      })}</g>`);
      const P = W.node().getBBox(), L = P.width, M = P.height, T = P.x, E = P.y;
      W.attr("transform", `translate(${-L / 2 - T},${u ? c.height / 2 + C / 2 - M / 2 - E : -c.height / 2 - C / 2 - M / 2 - E})`), W.attr("style", `color: ${y.get("stroke") ?? m};`);
    }
    return d.attr("transform", `translate(${-c.width / 2 - (c.x - (c.left ?? 0))},${u ? -N / 2 : N / 2 - c.height})`), O.attr("transform", `translate(0,${u ? c.height / 2 + C / 2 : -c.height / 2 - C / 2})`), J(t, $), t.intersect = function(W) {
      if (D.info("iconSquare intersect", t, W), !t.label)
        return X.rect(t, W);
      const P = t.x ?? 0, L = t.y ?? 0, M = t.height ?? 0;
      let T = [];
      return u ? T = [
        {
          x: P - c.width / 2,
          y: L - M / 2
        },
        {
          x: P + c.width / 2,
          y: L - M / 2
        },
        {
          x: P + c.width / 2,
          y: L - M / 2 + c.height + C
        },
        {
          x: P + f / 2,
          y: L - M / 2 + c.height + C
        },
        {
          x: P + f / 2,
          y: L + M / 2
        },
        {
          x: P - f / 2,
          y: L + M / 2
        },
        {
          x: P - f / 2,
          y: L - M / 2 + c.height + C
        },
        {
          x: P - c.width / 2,
          y: L - M / 2 + c.height + C
        }
      ] : T = [
        {
          x: P - f / 2,
          y: L - M / 2
        },
        {
          x: P + f / 2,
          y: L - M / 2
        },
        {
          x: P + f / 2,
          y: L - M / 2 + p
        },
        {
          x: P + c.width / 2,
          y: L - M / 2 + p
        },
        {
          x: P + c.width / 2 / 2,
          y: L + M / 2
        },
        {
          x: P - c.width / 2,
          y: L + M / 2
        },
        {
          x: P - c.width / 2,
          y: L - M / 2 + p
        },
        {
          x: P - f / 2,
          y: L - M / 2 + p
        }
      ], X.polygon(t, T, W);
    }, h;
  }
  g(_p, "icon");
  async function Sp(e, t, { config: { themeVariables: r, flowchart: i } }) {
    const { labelStyles: n } = tt(t);
    t.labelStyle = n;
    const a = t.assetHeight ?? 48, s = t.assetWidth ?? 48, o = Math.max(a, s), l = i == null ? void 0 : i.wrappingWidth;
    t.width = Math.max(o, l ?? 0);
    const { shapeSvg: h, bbox: c, label: d } = await ot(e, t, "icon-shape default"), u = 20, p = t.label ? 8 : 0, f = t.pos === "t", { nodeBorder: m, mainBkg: y } = r, { stylesMap: x } = Rr(t), b = Q.svg(h), C = K(t, {});
    t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
    const S = x.get("fill");
    C.stroke = S ?? y;
    const k = h.append("g");
    t.icon && k.html(`<g>${await Wn(t.icon, {
      height: o,
      width: o,
      fallbackPrefix: ""
    })}</g>`);
    const w = k.node().getBBox(), B = w.width, N = w.height, j = w.x, O = w.y, $ = Math.max(B, N) * Math.SQRT2 + u * 2, W = b.circle(0, 0, $, C), P = Math.max($, c.width), L = $ + c.height + p, M = b.rectangle(-P / 2, -L / 2, P, L, {
      ...C,
      fill: "transparent",
      stroke: "none"
    }), T = h.insert(() => W, ":first-child"), E = h.insert(() => M);
    return k.attr("transform", `translate(${-B / 2 - j},${f ? c.height / 2 + p / 2 - N / 2 - O : -c.height / 2 - p / 2 - N / 2 - O})`), k.attr("style", `color: ${x.get("stroke") ?? m};`), d.attr("transform", `translate(${-c.width / 2 - (c.x - (c.left ?? 0))},${f ? -L / 2 : L / 2 - c.height})`), T.attr("transform", `translate(0,${f ? c.height / 2 + p / 2 : -c.height / 2 - p / 2})`), J(t, E), t.intersect = function(A) {
      return D.info("iconSquare intersect", t, A), X.rect(t, A);
    }, h;
  }
  g(Sp, "iconCircle");
  async function Tp(e, t, { config: { themeVariables: r, flowchart: i } }) {
    const { labelStyles: n } = tt(t);
    t.labelStyle = n;
    const a = t.assetHeight ?? 48, s = t.assetWidth ?? 48, o = Math.max(a, s), l = i == null ? void 0 : i.wrappingWidth;
    t.width = Math.max(o, l ?? 0);
    const { shapeSvg: h, bbox: c, halfPadding: d, label: u } = await ot(e, t, "icon-shape default"), p = t.pos === "t", f = o + d * 2, m = o + d * 2, { nodeBorder: y, mainBkg: x } = r, { stylesMap: b } = Rr(t), C = -m / 2, S = -f / 2, k = t.label ? 8 : 0, w = Q.svg(h), B = K(t, {});
    t.look !== "handDrawn" && (B.roughness = 0, B.fillStyle = "solid");
    const N = b.get("fill");
    B.stroke = N ?? x;
    const j = w.path(Ee(C, S, m, f, 5), B), O = Math.max(m, c.width), $ = f + c.height + k, W = w.rectangle(-O / 2, -$ / 2, O, $, {
      ...B,
      fill: "transparent",
      stroke: "none"
    }), P = h.insert(() => j, ":first-child").attr("class", "icon-shape2"), L = h.insert(() => W);
    if (t.icon) {
      const M = h.append("g");
      M.html(`<g>${await Wn(t.icon, {
        height: o,
        width: o,
        fallbackPrefix: ""
      })}</g>`);
      const T = M.node().getBBox(), E = T.width, A = T.height, F = T.x, I = T.y;
      M.attr("transform", `translate(${-E / 2 - F},${p ? c.height / 2 + k / 2 - A / 2 - I : -c.height / 2 - k / 2 - A / 2 - I})`), M.attr("style", `color: ${b.get("stroke") ?? y};`);
    }
    return u.attr("transform", `translate(${-c.width / 2 - (c.x - (c.left ?? 0))},${p ? -$ / 2 : $ / 2 - c.height})`), P.attr("transform", `translate(0,${p ? c.height / 2 + k / 2 : -c.height / 2 - k / 2})`), J(t, L), t.intersect = function(M) {
      if (D.info("iconSquare intersect", t, M), !t.label)
        return X.rect(t, M);
      const T = t.x ?? 0, E = t.y ?? 0, A = t.height ?? 0;
      let F = [];
      return p ? F = [
        {
          x: T - c.width / 2,
          y: E - A / 2
        },
        {
          x: T + c.width / 2,
          y: E - A / 2
        },
        {
          x: T + c.width / 2,
          y: E - A / 2 + c.height + k
        },
        {
          x: T + m / 2,
          y: E - A / 2 + c.height + k
        },
        {
          x: T + m / 2,
          y: E + A / 2
        },
        {
          x: T - m / 2,
          y: E + A / 2
        },
        {
          x: T - m / 2,
          y: E - A / 2 + c.height + k
        },
        {
          x: T - c.width / 2,
          y: E - A / 2 + c.height + k
        }
      ] : F = [
        {
          x: T - m / 2,
          y: E - A / 2
        },
        {
          x: T + m / 2,
          y: E - A / 2
        },
        {
          x: T + m / 2,
          y: E - A / 2 + f
        },
        {
          x: T + c.width / 2,
          y: E - A / 2 + f
        },
        {
          x: T + c.width / 2 / 2,
          y: E + A / 2
        },
        {
          x: T - c.width / 2,
          y: E + A / 2
        },
        {
          x: T - c.width / 2,
          y: E - A / 2 + f
        },
        {
          x: T - m / 2,
          y: E - A / 2 + f
        }
      ], X.polygon(t, F, M);
    }, h;
  }
  g(Tp, "iconRounded");
  async function Bp(e, t, { config: { themeVariables: r, flowchart: i } }) {
    const { labelStyles: n } = tt(t);
    t.labelStyle = n;
    const a = t.assetHeight ?? 48, s = t.assetWidth ?? 48, o = Math.max(a, s), l = i == null ? void 0 : i.wrappingWidth;
    t.width = Math.max(o, l ?? 0);
    const { shapeSvg: h, bbox: c, halfPadding: d, label: u } = await ot(e, t, "icon-shape default"), p = t.pos === "t", f = o + d * 2, m = o + d * 2, { nodeBorder: y, mainBkg: x } = r, { stylesMap: b } = Rr(t), C = -m / 2, S = -f / 2, k = t.label ? 8 : 0, w = Q.svg(h), B = K(t, {});
    t.look !== "handDrawn" && (B.roughness = 0, B.fillStyle = "solid");
    const N = b.get("fill");
    B.stroke = N ?? x;
    const j = w.path(Ee(C, S, m, f, 0.1), B), O = Math.max(m, c.width), $ = f + c.height + k, W = w.rectangle(-O / 2, -$ / 2, O, $, {
      ...B,
      fill: "transparent",
      stroke: "none"
    }), P = h.insert(() => j, ":first-child"), L = h.insert(() => W);
    if (t.icon) {
      const M = h.append("g");
      M.html(`<g>${await Wn(t.icon, {
        height: o,
        width: o,
        fallbackPrefix: ""
      })}</g>`);
      const T = M.node().getBBox(), E = T.width, A = T.height, F = T.x, I = T.y;
      M.attr("transform", `translate(${-E / 2 - F},${p ? c.height / 2 + k / 2 - A / 2 - I : -c.height / 2 - k / 2 - A / 2 - I})`), M.attr("style", `color: ${b.get("stroke") ?? y};`);
    }
    return u.attr("transform", `translate(${-c.width / 2 - (c.x - (c.left ?? 0))},${p ? -$ / 2 : $ / 2 - c.height})`), P.attr("transform", `translate(0,${p ? c.height / 2 + k / 2 : -c.height / 2 - k / 2})`), J(t, L), t.intersect = function(M) {
      if (D.info("iconSquare intersect", t, M), !t.label)
        return X.rect(t, M);
      const T = t.x ?? 0, E = t.y ?? 0, A = t.height ?? 0;
      let F = [];
      return p ? F = [
        {
          x: T - c.width / 2,
          y: E - A / 2
        },
        {
          x: T + c.width / 2,
          y: E - A / 2
        },
        {
          x: T + c.width / 2,
          y: E - A / 2 + c.height + k
        },
        {
          x: T + m / 2,
          y: E - A / 2 + c.height + k
        },
        {
          x: T + m / 2,
          y: E + A / 2
        },
        {
          x: T - m / 2,
          y: E + A / 2
        },
        {
          x: T - m / 2,
          y: E - A / 2 + c.height + k
        },
        {
          x: T - c.width / 2,
          y: E - A / 2 + c.height + k
        }
      ] : F = [
        {
          x: T - m / 2,
          y: E - A / 2
        },
        {
          x: T + m / 2,
          y: E - A / 2
        },
        {
          x: T + m / 2,
          y: E - A / 2 + f
        },
        {
          x: T + c.width / 2,
          y: E - A / 2 + f
        },
        {
          x: T + c.width / 2 / 2,
          y: E + A / 2
        },
        {
          x: T - c.width / 2,
          y: E + A / 2
        },
        {
          x: T - c.width / 2,
          y: E - A / 2 + f
        },
        {
          x: T - m / 2,
          y: E - A / 2 + f
        }
      ], X.polygon(t, F, M);
    }, h;
  }
  g(Bp, "iconSquare");
  async function Lp(e, t, { config: { flowchart: r } }) {
    const i = new Image();
    i.src = (t == null ? void 0 : t.img) ?? "", await i.decode();
    const n = Number(i.naturalWidth.toString().replace("px", "")), a = Number(i.naturalHeight.toString().replace("px", ""));
    t.imageAspectRatio = n / a;
    const { labelStyles: s } = tt(t);
    t.labelStyle = s;
    const o = r == null ? void 0 : r.wrappingWidth;
    t.defaultWidth = r == null ? void 0 : r.wrappingWidth;
    const l = Math.max(t.label ? o ?? 0 : 0, (t == null ? void 0 : t.assetWidth) ?? n), h = t.constraint === "on" && t != null && t.assetHeight ? t.assetHeight * t.imageAspectRatio : l, c = t.constraint === "on" ? h / t.imageAspectRatio : (t == null ? void 0 : t.assetHeight) ?? a;
    t.width = Math.max(h, o ?? 0);
    const { shapeSvg: d, bbox: u, label: p } = await ot(e, t, "image-shape default"), f = t.pos === "t", m = -h / 2, y = -c / 2, x = t.label ? 8 : 0, b = Q.svg(d), C = K(t, {});
    t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
    const S = b.rectangle(m, y, h, c, C), k = Math.max(h, u.width), w = c + u.height + x, B = b.rectangle(-k / 2, -w / 2, k, w, {
      ...C,
      fill: "none",
      stroke: "none"
    }), N = d.insert(() => S, ":first-child"), j = d.insert(() => B);
    if (t.img) {
      const O = d.append("image");
      O.attr("href", t.img), O.attr("width", h), O.attr("height", c), O.attr("preserveAspectRatio", "none"), O.attr("transform", `translate(${-h / 2},${f ? w / 2 - c : -w / 2})`);
    }
    return p.attr("transform", `translate(${-u.width / 2 - (u.x - (u.left ?? 0))},${f ? -c / 2 - u.height / 2 - x / 2 : c / 2 - u.height / 2 + x / 2})`), N.attr("transform", `translate(0,${f ? u.height / 2 + x / 2 : -u.height / 2 - x / 2})`), J(t, j), t.intersect = function(O) {
      if (D.info("iconSquare intersect", t, O), !t.label)
        return X.rect(t, O);
      const $ = t.x ?? 0, W = t.y ?? 0, P = t.height ?? 0;
      let L = [];
      return f ? L = [
        {
          x: $ - u.width / 2,
          y: W - P / 2
        },
        {
          x: $ + u.width / 2,
          y: W - P / 2
        },
        {
          x: $ + u.width / 2,
          y: W - P / 2 + u.height + x
        },
        {
          x: $ + h / 2,
          y: W - P / 2 + u.height + x
        },
        {
          x: $ + h / 2,
          y: W + P / 2
        },
        {
          x: $ - h / 2,
          y: W + P / 2
        },
        {
          x: $ - h / 2,
          y: W - P / 2 + u.height + x
        },
        {
          x: $ - u.width / 2,
          y: W - P / 2 + u.height + x
        }
      ] : L = [
        {
          x: $ - h / 2,
          y: W - P / 2
        },
        {
          x: $ + h / 2,
          y: W - P / 2
        },
        {
          x: $ + h / 2,
          y: W - P / 2 + c
        },
        {
          x: $ + u.width / 2,
          y: W - P / 2 + c
        },
        {
          x: $ + u.width / 2 / 2,
          y: W + P / 2
        },
        {
          x: $ - u.width / 2,
          y: W + P / 2
        },
        {
          x: $ - u.width / 2,
          y: W - P / 2 + c
        },
        {
          x: $ - h / 2,
          y: W - P / 2 + c
        }
      ], X.polygon(t, L, O);
    }, d;
  }
  g(Lp, "imageSquare");
  async function Mp(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a } = await ot(e, t, nt(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), o = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), l = [
      {
        x: 0,
        y: 0
      },
      {
        x: s,
        y: 0
      },
      {
        x: s + 3 * o / 6,
        y: -o
      },
      {
        x: -3 * o / 6,
        y: -o
      }
    ];
    let h;
    const { cssStyles: c } = t;
    if (t.look === "handDrawn") {
      const d = Q.svg(n), u = K(t, {}), p = ht(l), f = d.path(p, u);
      h = n.insert(() => f, ":first-child").attr("transform", `translate(${-s / 2}, ${o / 2})`), c && h.attr("style", c);
    } else
      h = Oe(n, s, o, l);
    return i && h.attr("style", i), t.width = s, t.height = o, J(t, h), t.intersect = function(d) {
      return X.polygon(t, l, d);
    }, n;
  }
  g(Mp, "inv_trapezoid");
  async function Ai(e, t, r) {
    const { labelStyles: i, nodeStyles: n } = tt(t);
    t.labelStyle = i;
    const { shapeSvg: a, bbox: s } = await ot(e, t, nt(t)), o = Math.max(s.width + r.labelPaddingX * 2, (t == null ? void 0 : t.width) || 0), l = Math.max(s.height + r.labelPaddingY * 2, (t == null ? void 0 : t.height) || 0), h = -o / 2, c = -l / 2;
    let d, { rx: u, ry: p } = t;
    const { cssStyles: f } = t;
    if (r != null && r.rx && r.ry && (u = r.rx, p = r.ry), t.look === "handDrawn") {
      const m = Q.svg(a), y = K(t, {}), x = u || p ? m.path(Ee(h, c, o, l, u || 0), y) : m.rectangle(h, c, o, l, y);
      d = a.insert(() => x, ":first-child"), d.attr("class", "basic label-container").attr("style", Ut(f));
    } else
      d = a.insert("rect", ":first-child"), d.attr("class", "basic label-container").attr("style", n).attr("rx", Ut(u)).attr("ry", Ut(p)).attr("x", h).attr("y", c).attr("width", o).attr("height", l);
    return J(t, d), t.intersect = function(m) {
      return X.rect(t, m);
    }, a;
  }
  g(Ai, "drawRect");
  async function Ap(e, t) {
    const { shapeSvg: r, bbox: i, label: n } = await ot(e, t, "label"), a = r.insert("rect", ":first-child");
    return a.attr("width", 0.1).attr("height", 0.1), r.attr("class", "label edgeLabel"), n.attr("transform", `translate(${-(i.width / 2) - (i.x - (i.left ?? 0))}, ${-(i.height / 2) - (i.y - (i.top ?? 0))})`), J(t, a), t.intersect = function(s) {
      return X.rect(t, s);
    }, r;
  }
  g(Ap, "labelRect");
  async function Fp(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a } = await ot(e, t, nt(t)), s = Math.max(a.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), o = Math.max(a.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), l = [
      {
        x: 0,
        y: 0
      },
      {
        x: s + 3 * o / 6,
        y: 0
      },
      {
        x: s,
        y: -o
      },
      {
        x: -(3 * o) / 6,
        y: -o
      }
    ];
    let h;
    const { cssStyles: c } = t;
    if (t.look === "handDrawn") {
      const d = Q.svg(n), u = K(t, {}), p = ht(l), f = d.path(p, u);
      h = n.insert(() => f, ":first-child").attr("transform", `translate(${-s / 2}, ${o / 2})`), c && h.attr("style", c);
    } else
      h = Oe(n, s, o, l);
    return i && h.attr("style", i), t.width = s, t.height = o, J(t, h), t.intersect = function(d) {
      return X.polygon(t, l, d);
    }, n;
  }
  g(Fp, "lean_left");
  async function $p(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a } = await ot(e, t, nt(t)), s = Math.max(a.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), o = Math.max(a.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), l = [
      {
        x: -3 * o / 6,
        y: 0
      },
      {
        x: s,
        y: 0
      },
      {
        x: s + 3 * o / 6,
        y: -o
      },
      {
        x: 0,
        y: -o
      }
    ];
    let h;
    const { cssStyles: c } = t;
    if (t.look === "handDrawn") {
      const d = Q.svg(n), u = K(t, {}), p = ht(l), f = d.path(p, u);
      h = n.insert(() => f, ":first-child").attr("transform", `translate(${-s / 2}, ${o / 2})`), c && h.attr("style", c);
    } else
      h = Oe(n, s, o, l);
    return i && h.attr("style", i), t.width = s, t.height = o, J(t, h), t.intersect = function(d) {
      return X.polygon(t, l, d);
    }, n;
  }
  g($p, "lean_right");
  function Ep(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.label = "", t.labelStyle = r;
    const n = e.insert("g").attr("class", nt(t)).attr("id", t.domId ?? t.id), { cssStyles: a } = t, s = Math.max(35, (t == null ? void 0 : t.width) ?? 0), o = Math.max(35, (t == null ? void 0 : t.height) ?? 0), l = 7, h = [
      {
        x: s,
        y: 0
      },
      {
        x: 0,
        y: o + l / 2
      },
      {
        x: s - 2 * l,
        y: o + l / 2
      },
      {
        x: 0,
        y: 2 * o
      },
      {
        x: s,
        y: o - l / 2
      },
      {
        x: 2 * l,
        y: o - l / 2
      }
    ], c = Q.svg(n), d = K(t, {});
    t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
    const u = ht(h), p = c.path(u, d), f = n.insert(() => p, ":first-child");
    return a && t.look !== "handDrawn" && f.selectAll("path").attr("style", a), i && t.look !== "handDrawn" && f.selectAll("path").attr("style", i), f.attr("transform", `translate(-${s / 2},${-o})`), J(t, f), t.intersect = function(m) {
      return D.info("lightningBolt intersect", t, m), X.polygon(t, h, m);
    }, n;
  }
  g(Ep, "lightningBolt");
  var lk = g((e, t, r, i, n, a, s) => [
    `M${e},${t + a}`,
    `a${n},${a} 0,0,0 ${r},0`,
    `a${n},${a} 0,0,0 ${-r},0`,
    `l0,${i}`,
    `a${n},${a} 0,0,0 ${r},0`,
    `l0,${-i}`,
    `M${e},${t + a + s}`,
    `a${n},${a} 0,0,0 ${r},0`
  ].join(" "), "createCylinderPathD"), hk = g((e, t, r, i, n, a, s) => [
    `M${e},${t + a}`,
    `M${e + r},${t + a}`,
    `a${n},${a} 0,0,0 ${-r},0`,
    `l0,${i}`,
    `a${n},${a} 0,0,0 ${r},0`,
    `l0,${-i}`,
    `M${e},${t + a + s}`,
    `a${n},${a} 0,0,0 ${r},0`
  ].join(" "), "createOuterCylinderPathD"), ck = g((e, t, r, i, n, a) => [
    `M${e - r / 2},${-i / 2}`,
    `a${n},${a} 0,0,0 ${r},0`
  ].join(" "), "createInnerCylinderPathD");
  async function Op(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a, label: s } = await ot(e, t, nt(t)), o = Math.max(a.width + (t.padding ?? 0), t.width ?? 0), l = o / 2, h = l / (2.5 + o / 50), c = Math.max(a.height + h + (t.padding ?? 0), t.height ?? 0), d = c * 0.1;
    let u;
    const { cssStyles: p } = t;
    if (t.look === "handDrawn") {
      const f = Q.svg(n), m = hk(0, 0, o, c, l, h, d), y = ck(0, h, o, c, l, h), x = K(t, {}), b = f.path(m, x), C = f.path(y, x);
      n.insert(() => C, ":first-child").attr("class", "line"), u = n.insert(() => b, ":first-child"), u.attr("class", "basic label-container"), p && u.attr("style", p);
    } else {
      const f = lk(0, 0, o, c, l, h, d);
      u = n.insert("path", ":first-child").attr("d", f).attr("class", "basic label-container").attr("style", Ut(p)).attr("style", i);
    }
    return u.attr("label-offset-y", h), u.attr("transform", `translate(${-o / 2}, ${-(c / 2 + h)})`), J(t, u), s.attr("transform", `translate(${-(a.width / 2) - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + h - (a.y - (a.top ?? 0))})`), t.intersect = function(f) {
      const m = X.rect(t, f), y = m.x - (t.x ?? 0);
      if (l != 0 && (Math.abs(y) < (t.width ?? 0) / 2 || Math.abs(y) == (t.width ?? 0) / 2 && Math.abs(m.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - h)) {
        let x = h * h * (1 - y * y / (l * l));
        x > 0 && (x = Math.sqrt(x)), x = h - x, f.y - (t.y ?? 0) > 0 && (x = -x), m.y += x;
      }
      return m;
    }, n;
  }
  g(Op, "linedCylinder");
  async function Dp(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a, label: s } = await ot(e, t, nt(t)), o = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = l / 4, c = l + h, { cssStyles: d } = t, u = Q.svg(n), p = K(t, {});
    t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
    const f = [
      {
        x: -o / 2 - o / 2 * 0.1,
        y: -c / 2
      },
      {
        x: -o / 2 - o / 2 * 0.1,
        y: c / 2
      },
      ...qe(-o / 2 - o / 2 * 0.1, c / 2, o / 2 + o / 2 * 0.1, c / 2, h, 0.8),
      {
        x: o / 2 + o / 2 * 0.1,
        y: -c / 2
      },
      {
        x: -o / 2 - o / 2 * 0.1,
        y: -c / 2
      },
      {
        x: -o / 2,
        y: -c / 2
      },
      {
        x: -o / 2,
        y: c / 2 * 1.1
      },
      {
        x: -o / 2,
        y: -c / 2
      }
    ], m = u.polygon(f.map((x) => [
      x.x,
      x.y
    ]), p), y = n.insert(() => m, ":first-child");
    return y.attr("class", "basic label-container"), d && t.look !== "handDrawn" && y.selectAll("path").attr("style", d), i && t.look !== "handDrawn" && y.selectAll("path").attr("style", i), y.attr("transform", `translate(0,${-h / 2})`), s.attr("transform", `translate(${-o / 2 + (t.padding ?? 0) + o / 2 * 0.1 / 2 - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) - h / 2 - (a.y - (a.top ?? 0))})`), J(t, y), t.intersect = function(x) {
      return X.polygon(t, f, x);
    }, n;
  }
  g(Dp, "linedWaveEdgedRect");
  async function Ip(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a, label: s } = await ot(e, t, nt(t)), o = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = 5, c = -o / 2, d = -l / 2, { cssStyles: u } = t, p = Q.svg(n), f = K(t, {}), m = [
      {
        x: c - h,
        y: d + h
      },
      {
        x: c - h,
        y: d + l + h
      },
      {
        x: c + o - h,
        y: d + l + h
      },
      {
        x: c + o - h,
        y: d + l
      },
      {
        x: c + o,
        y: d + l
      },
      {
        x: c + o,
        y: d + l - h
      },
      {
        x: c + o + h,
        y: d + l - h
      },
      {
        x: c + o + h,
        y: d - h
      },
      {
        x: c + h,
        y: d - h
      },
      {
        x: c + h,
        y: d
      },
      {
        x: c,
        y: d
      },
      {
        x: c,
        y: d + h
      }
    ], y = [
      {
        x: c,
        y: d + h
      },
      {
        x: c + o - h,
        y: d + h
      },
      {
        x: c + o - h,
        y: d + l
      },
      {
        x: c + o,
        y: d + l
      },
      {
        x: c + o,
        y: d
      },
      {
        x: c,
        y: d
      }
    ];
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    const x = ht(m), b = p.path(x, f), C = ht(y), S = p.path(C, {
      ...f,
      fill: "none"
    }), k = n.insert(() => S, ":first-child");
    return k.insert(() => b, ":first-child"), k.attr("class", "basic label-container"), u && t.look !== "handDrawn" && k.selectAll("path").attr("style", u), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), s.attr("transform", `translate(${-(a.width / 2) - h - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + h - (a.y - (a.top ?? 0))})`), J(t, k), t.intersect = function(w) {
      return X.polygon(t, m, w);
    }, n;
  }
  g(Ip, "multiRect");
  async function Pp(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a, label: s } = await ot(e, t, nt(t)), o = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = l / 4, c = l + h, d = -o / 2, u = -c / 2, p = 5, { cssStyles: f } = t, m = qe(d - p, u + c + p, d + o - p, u + c + p, h, 0.8), y = m == null ? void 0 : m[m.length - 1], x = [
      {
        x: d - p,
        y: u + p
      },
      {
        x: d - p,
        y: u + c + p
      },
      ...m,
      {
        x: d + o - p,
        y: y.y - p
      },
      {
        x: d + o,
        y: y.y - p
      },
      {
        x: d + o,
        y: y.y - 2 * p
      },
      {
        x: d + o + p,
        y: y.y - 2 * p
      },
      {
        x: d + o + p,
        y: u - p
      },
      {
        x: d + p,
        y: u - p
      },
      {
        x: d + p,
        y: u
      },
      {
        x: d,
        y: u
      },
      {
        x: d,
        y: u + p
      }
    ], b = [
      {
        x: d,
        y: u + p
      },
      {
        x: d + o - p,
        y: u + p
      },
      {
        x: d + o - p,
        y: y.y - p
      },
      {
        x: d + o,
        y: y.y - p
      },
      {
        x: d + o,
        y: u
      },
      {
        x: d,
        y: u
      }
    ], C = Q.svg(n), S = K(t, {});
    t.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
    const k = ht(x), w = C.path(k, S), B = ht(b), N = C.path(B, S), j = n.insert(() => w, ":first-child");
    return j.insert(() => N), j.attr("class", "basic label-container"), f && t.look !== "handDrawn" && j.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && j.selectAll("path").attr("style", i), j.attr("transform", `translate(0,${-h / 2})`), s.attr("transform", `translate(${-(a.width / 2) - p - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + p - h / 2 - (a.y - (a.top ?? 0))})`), J(t, j), t.intersect = function(O) {
      return X.polygon(t, x, O);
    }, n;
  }
  g(Pp, "multiWaveEdgedRectangle");
  async function zp(e, t, { config: { themeVariables: r } }) {
    var i;
    const { labelStyles: n, nodeStyles: a } = tt(t);
    t.labelStyle = n, t.useHtmlLabels || ((i = Kt().flowchart) == null ? void 0 : i.htmlLabels) !== false || (t.centerLabel = true);
    const { shapeSvg: s, bbox: o } = await ot(e, t, nt(t)), l = Math.max(o.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), h = Math.max(o.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = -l / 2, d = -h / 2, { cssStyles: u } = t, p = Q.svg(s), f = K(t, {
      fill: r.noteBkgColor,
      stroke: r.noteBorderColor
    });
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    const m = p.rectangle(c, d, l, h, f), y = s.insert(() => m, ":first-child");
    return y.attr("class", "basic label-container"), u && t.look !== "handDrawn" && y.selectAll("path").attr("style", u), a && t.look !== "handDrawn" && y.selectAll("path").attr("style", a), J(t, y), t.intersect = function(x) {
      return X.rect(t, x);
    }, s;
  }
  g(zp, "note");
  var dk = g((e, t, r) => [
    `M${e + r / 2},${t}`,
    `L${e + r},${t - r / 2}`,
    `L${e + r / 2},${t - r}`,
    `L${e},${t - r / 2}`,
    "Z"
  ].join(" "), "createDecisionBoxPathD");
  async function Rp(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a } = await ot(e, t, nt(t)), s = a.width + t.padding, o = a.height + t.padding, l = s + o, h = [
      {
        x: l / 2,
        y: 0
      },
      {
        x: l,
        y: -l / 2
      },
      {
        x: l / 2,
        y: -l
      },
      {
        x: 0,
        y: -l / 2
      }
    ];
    let c;
    const { cssStyles: d } = t;
    if (t.look === "handDrawn") {
      const u = Q.svg(n), p = K(t, {}), f = dk(0, 0, l), m = u.path(f, p);
      c = n.insert(() => m, ":first-child").attr("transform", `translate(${-l / 2}, ${l / 2})`), d && c.attr("style", d);
    } else
      c = Oe(n, l, l, h);
    return i && c.attr("style", i), J(t, c), t.intersect = function(u) {
      return D.debug(`APA12 Intersect called SPLIT
point:`, u, `
node:
`, t, `
res:`, X.polygon(t, h, u)), X.polygon(t, h, u);
    }, n;
  }
  g(Rp, "question");
  async function Np(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a, label: s } = await ot(e, t, nt(t)), o = Math.max(a.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), h = -o / 2, c = -l / 2, d = c / 2, u = [
      {
        x: h + d,
        y: c
      },
      {
        x: h,
        y: 0
      },
      {
        x: h + d,
        y: -c
      },
      {
        x: -h,
        y: -c
      },
      {
        x: -h,
        y: c
      }
    ], { cssStyles: p } = t, f = Q.svg(n), m = K(t, {});
    t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
    const y = ht(u), x = f.path(y, m), b = n.insert(() => x, ":first-child");
    return b.attr("class", "basic label-container"), p && t.look !== "handDrawn" && b.selectAll("path").attr("style", p), i && t.look !== "handDrawn" && b.selectAll("path").attr("style", i), b.attr("transform", `translate(${-d / 2},0)`), s.attr("transform", `translate(${-d / 2 - a.width / 2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) - (a.y - (a.top ?? 0))})`), J(t, b), t.intersect = function(C) {
      return X.polygon(t, u, C);
    }, n;
  }
  g(Np, "rect_left_inv_arrow");
  async function qp(e, t) {
    var r, i;
    const { labelStyles: n, nodeStyles: a } = tt(t);
    t.labelStyle = n;
    let s;
    t.cssClasses ? s = "node " + t.cssClasses : s = "node default";
    const o = e.insert("g").attr("class", s).attr("id", t.domId || t.id), l = o.insert("g"), h = o.insert("g").attr("class", "label").attr("style", a), c = t.description, d = t.label, u = h.node().appendChild(await er(d, t.labelStyle, true, true));
    let p = {
      width: 0,
      height: 0
    };
    if (Mt((i = (r = dt()) == null ? void 0 : r.flowchart) == null ? void 0 : i.htmlLabels)) {
      const O = u.children[0], $ = lt(u);
      p = O.getBoundingClientRect(), $.attr("width", p.width), $.attr("height", p.height);
    }
    D.info("Text 2", c);
    const f = c || [], m = u.getBBox(), y = h.node().appendChild(await er(f.join ? f.join("<br/>") : f, t.labelStyle, true, true)), x = y.children[0], b = lt(y);
    p = x.getBoundingClientRect(), b.attr("width", p.width), b.attr("height", p.height);
    const C = (t.padding || 0) / 2;
    lt(y).attr("transform", "translate( " + (p.width > m.width ? 0 : (m.width - p.width) / 2) + ", " + (m.height + C + 5) + ")"), lt(u).attr("transform", "translate( " + (p.width < m.width ? 0 : -(m.width - p.width) / 2) + ", 0)"), p = h.node().getBBox(), h.attr("transform", "translate(" + -p.width / 2 + ", " + (-p.height / 2 - C + 3) + ")");
    const S = p.width + (t.padding || 0), k = p.height + (t.padding || 0), w = -p.width / 2 - C, B = -p.height / 2 - C;
    let N, j;
    if (t.look === "handDrawn") {
      const O = Q.svg(o), $ = K(t, {}), W = O.path(Ee(w, B, S, k, t.rx || 0), $), P = O.line(-p.width / 2 - C, -p.height / 2 - C + m.height + C, p.width / 2 + C, -p.height / 2 - C + m.height + C, $);
      j = o.insert(() => (D.debug("Rough node insert CXC", W), P), ":first-child"), N = o.insert(() => (D.debug("Rough node insert CXC", W), W), ":first-child");
    } else
      N = l.insert("rect", ":first-child"), j = l.insert("line"), N.attr("class", "outer title-state").attr("style", a).attr("x", -p.width / 2 - C).attr("y", -p.height / 2 - C).attr("width", p.width + (t.padding || 0)).attr("height", p.height + (t.padding || 0)), j.attr("class", "divider").attr("x1", -p.width / 2 - C).attr("x2", p.width / 2 + C).attr("y1", -p.height / 2 - C + m.height + C).attr("y2", -p.height / 2 - C + m.height + C);
    return J(t, N), t.intersect = function(O) {
      return X.rect(t, O);
    }, o;
  }
  g(qp, "rectWithTitle");
  async function jp(e, t) {
    const r = {
      rx: 5,
      ry: 5,
      labelPaddingX: ((t == null ? void 0 : t.padding) || 0) * 1,
      labelPaddingY: ((t == null ? void 0 : t.padding) || 0) * 1
    };
    return Ai(e, t, r);
  }
  g(jp, "roundedRect");
  async function Wp(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a, label: s } = await ot(e, t, nt(t)), o = (t == null ? void 0 : t.padding) ?? 0, l = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), h = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = -a.width / 2 - o, d = -a.height / 2 - o, { cssStyles: u } = t, p = Q.svg(n), f = K(t, {});
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    const m = [
      {
        x: c,
        y: d
      },
      {
        x: c + l + 8,
        y: d
      },
      {
        x: c + l + 8,
        y: d + h
      },
      {
        x: c - 8,
        y: d + h
      },
      {
        x: c - 8,
        y: d
      },
      {
        x: c,
        y: d
      },
      {
        x: c,
        y: d + h
      }
    ], y = p.polygon(m.map((b) => [
      b.x,
      b.y
    ]), f), x = n.insert(() => y, ":first-child");
    return x.attr("class", "basic label-container").attr("style", Ut(u)), i && t.look !== "handDrawn" && x.selectAll("path").attr("style", i), u && t.look !== "handDrawn" && x.selectAll("path").attr("style", i), s.attr("transform", `translate(${-l / 2 + 4 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-h / 2 + (t.padding ?? 0) - (a.y - (a.top ?? 0))})`), J(t, x), t.intersect = function(b) {
      return X.rect(t, b);
    }, n;
  }
  g(Wp, "shadedProcess");
  async function Hp(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a, label: s } = await ot(e, t, nt(t)), o = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = -o / 2, c = -l / 2, { cssStyles: d } = t, u = Q.svg(n), p = K(t, {});
    t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
    const f = [
      {
        x: h,
        y: c
      },
      {
        x: h,
        y: c + l
      },
      {
        x: h + o,
        y: c + l
      },
      {
        x: h + o,
        y: c - l / 2
      }
    ], m = ht(f), y = u.path(m, p), x = n.insert(() => y, ":first-child");
    return x.attr("class", "basic label-container"), d && t.look !== "handDrawn" && x.selectChildren("path").attr("style", d), i && t.look !== "handDrawn" && x.selectChildren("path").attr("style", i), x.attr("transform", `translate(0, ${l / 4})`), s.attr("transform", `translate(${-o / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))}, ${-l / 4 + (t.padding ?? 0) - (a.y - (a.top ?? 0))})`), J(t, x), t.intersect = function(b) {
      return X.polygon(t, f, b);
    }, n;
  }
  g(Hp, "slopedRect");
  async function Yp(e, t) {
    const r = {
      rx: 0,
      ry: 0,
      labelPaddingX: ((t == null ? void 0 : t.padding) || 0) * 2,
      labelPaddingY: ((t == null ? void 0 : t.padding) || 0) * 1
    };
    return Ai(e, t, r);
  }
  g(Yp, "squareRect");
  async function Up(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a } = await ot(e, t, nt(t)), s = a.height + t.padding, o = a.width + s / 4 + t.padding;
    let l;
    const { cssStyles: h } = t;
    if (t.look === "handDrawn") {
      const c = Q.svg(n), d = K(t, {}), u = Ee(-o / 2, -s / 2, o, s, s / 2), p = c.path(u, d);
      l = n.insert(() => p, ":first-child"), l.attr("class", "basic label-container").attr("style", Ut(h));
    } else
      l = n.insert("rect", ":first-child"), l.attr("class", "basic label-container").attr("style", i).attr("rx", s / 2).attr("ry", s / 2).attr("x", -o / 2).attr("y", -s / 2).attr("width", o).attr("height", s);
    return J(t, l), t.intersect = function(c) {
      return X.rect(t, c);
    }, n;
  }
  g(Up, "stadium");
  async function Vp(e, t) {
    return Ai(e, t, {
      rx: 5,
      ry: 5
    });
  }
  g(Vp, "state");
  function Gp(e, t, { config: { themeVariables: r } }) {
    const { labelStyles: i, nodeStyles: n } = tt(t);
    t.labelStyle = i;
    const { cssStyles: a } = t, { lineColor: s, stateBorder: o, nodeBorder: l } = r, h = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id), c = Q.svg(h), d = K(t, {});
    t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
    const u = c.circle(0, 0, 14, {
      ...d,
      stroke: s,
      strokeWidth: 2
    }), p = o ?? l, f = c.circle(0, 0, 5, {
      ...d,
      fill: p,
      stroke: p,
      strokeWidth: 2,
      fillStyle: "solid"
    }), m = h.insert(() => u, ":first-child");
    return m.insert(() => f), a && m.selectAll("path").attr("style", a), n && m.selectAll("path").attr("style", n), J(t, m), t.intersect = function(y) {
      return X.circle(t, 7, y);
    }, h;
  }
  g(Gp, "stateEnd");
  function Xp(e, t, { config: { themeVariables: r } }) {
    const { lineColor: i } = r, n = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id);
    let a;
    if (t.look === "handDrawn") {
      const s = Q.svg(n).circle(0, 0, 14, Y2(i));
      a = n.insert(() => s), a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
    } else
      a = n.insert("circle", ":first-child"), a.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
    return J(t, a), t.intersect = function(s) {
      return X.circle(t, 7, s);
    }, n;
  }
  g(Xp, "stateStart");
  async function Zp(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a } = await ot(e, t, nt(t)), s = ((t == null ? void 0 : t.padding) || 0) / 2, o = a.width + t.padding, l = a.height + t.padding, h = -a.width / 2 - s, c = -a.height / 2 - s, d = [
      {
        x: 0,
        y: 0
      },
      {
        x: o,
        y: 0
      },
      {
        x: o,
        y: -l
      },
      {
        x: 0,
        y: -l
      },
      {
        x: 0,
        y: 0
      },
      {
        x: -8,
        y: 0
      },
      {
        x: o + 8,
        y: 0
      },
      {
        x: o + 8,
        y: -l
      },
      {
        x: -8,
        y: -l
      },
      {
        x: -8,
        y: 0
      }
    ];
    if (t.look === "handDrawn") {
      const u = Q.svg(n), p = K(t, {}), f = u.rectangle(h - 8, c, o + 16, l, p), m = u.line(h, c, h, c + l, p), y = u.line(h + o, c, h + o, c + l, p);
      n.insert(() => m, ":first-child"), n.insert(() => y, ":first-child");
      const x = n.insert(() => f, ":first-child"), { cssStyles: b } = t;
      x.attr("class", "basic label-container").attr("style", Ut(b)), J(t, x);
    } else {
      const u = Oe(n, o, l, d);
      i && u.attr("style", i), J(t, u);
    }
    return t.intersect = function(u) {
      return X.polygon(t, d, u);
    }, n;
  }
  g(Zp, "subroutine");
  async function Qp(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a } = await ot(e, t, nt(t)), s = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), o = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), l = -s / 2, h = -o / 2, c = 0.2 * o, d = 0.2 * o, { cssStyles: u } = t, p = Q.svg(n), f = K(t, {}), m = [
      {
        x: l - c / 2,
        y: h
      },
      {
        x: l + s + c / 2,
        y: h
      },
      {
        x: l + s + c / 2,
        y: h + o
      },
      {
        x: l - c / 2,
        y: h + o
      }
    ], y = [
      {
        x: l + s - c / 2,
        y: h + o
      },
      {
        x: l + s + c / 2,
        y: h + o
      },
      {
        x: l + s + c / 2,
        y: h + o - d
      }
    ];
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    const x = ht(m), b = p.path(x, f), C = ht(y), S = p.path(C, {
      ...f,
      fillStyle: "solid"
    }), k = n.insert(() => S, ":first-child");
    return k.insert(() => b, ":first-child"), k.attr("class", "basic label-container"), u && t.look !== "handDrawn" && k.selectAll("path").attr("style", u), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), J(t, k), t.intersect = function(w) {
      return X.polygon(t, m, w);
    }, n;
  }
  g(Qp, "taggedRect");
  async function Kp(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a, label: s } = await ot(e, t, nt(t)), o = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = l / 4, c = 0.2 * o, d = 0.2 * l, u = l + h, { cssStyles: p } = t, f = Q.svg(n), m = K(t, {});
    t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
    const y = [
      {
        x: -o / 2 - o / 2 * 0.1,
        y: u / 2
      },
      ...qe(-o / 2 - o / 2 * 0.1, u / 2, o / 2 + o / 2 * 0.1, u / 2, h, 0.8),
      {
        x: o / 2 + o / 2 * 0.1,
        y: -u / 2
      },
      {
        x: -o / 2 - o / 2 * 0.1,
        y: -u / 2
      }
    ], x = -o / 2 + o / 2 * 0.1, b = -u / 2 - d * 0.4, C = [
      {
        x: x + o - c,
        y: (b + l) * 1.4
      },
      {
        x: x + o,
        y: b + l - d
      },
      {
        x: x + o,
        y: (b + l) * 0.9
      },
      ...qe(x + o, (b + l) * 1.3, x + o - c, (b + l) * 1.5, -l * 0.03, 0.5)
    ], S = ht(y), k = f.path(S, m), w = ht(C), B = f.path(w, {
      ...m,
      fillStyle: "solid"
    }), N = n.insert(() => B, ":first-child");
    return N.insert(() => k, ":first-child"), N.attr("class", "basic label-container"), p && t.look !== "handDrawn" && N.selectAll("path").attr("style", p), i && t.look !== "handDrawn" && N.selectAll("path").attr("style", i), N.attr("transform", `translate(0,${-h / 2})`), s.attr("transform", `translate(${-o / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) - h / 2 - (a.y - (a.top ?? 0))})`), J(t, N), t.intersect = function(j) {
      return X.polygon(t, y, j);
    }, n;
  }
  g(Kp, "taggedWaveEdgedRectangle");
  async function Jp(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a } = await ot(e, t, nt(t)), s = Math.max(a.width + t.padding, (t == null ? void 0 : t.width) || 0), o = Math.max(a.height + t.padding, (t == null ? void 0 : t.height) || 0), l = -s / 2, h = -o / 2, c = n.insert("rect", ":first-child");
    return c.attr("class", "text").attr("style", i).attr("rx", 0).attr("ry", 0).attr("x", l).attr("y", h).attr("width", s).attr("height", o), J(t, c), t.intersect = function(d) {
      return X.rect(t, d);
    }, n;
  }
  g(Jp, "text");
  var uk = g((e, t, r, i, n, a) => `M${e},${t}
    a${n},${a} 0,0,1 0,${-i}
    l${r},0
    a${n},${a} 0,0,1 0,${i}
    M${r},${-i}
    a${n},${a} 0,0,0 0,${i}
    l${-r},0`, "createCylinderPathD"), pk = g((e, t, r, i, n, a) => [
    `M${e},${t}`,
    `M${e + r},${t}`,
    `a${n},${a} 0,0,0 0,${-i}`,
    `l${-r},0`,
    `a${n},${a} 0,0,0 0,${i}`,
    `l${r},0`
  ].join(" "), "createOuterCylinderPathD"), gk = g((e, t, r, i, n, a) => [
    `M${e + r / 2},${-i / 2}`,
    `a${n},${a} 0,0,0 0,${i}`
  ].join(" "), "createInnerCylinderPathD");
  async function tg(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a, label: s, halfPadding: o } = await ot(e, t, nt(t)), l = t.look === "neo" ? o * 2 : o, h = a.height + l, c = h / 2, d = c / (2.5 + h / 50), u = a.width + d + l, { cssStyles: p } = t;
    let f;
    if (t.look === "handDrawn") {
      const m = Q.svg(n), y = pk(0, 0, u, h, d, c), x = gk(0, 0, u, h, d, c), b = m.path(y, K(t, {})), C = m.path(x, K(t, {
        fill: "none"
      }));
      f = n.insert(() => C, ":first-child"), f = n.insert(() => b, ":first-child"), f.attr("class", "basic label-container"), p && f.attr("style", p);
    } else {
      const m = uk(0, 0, u, h, d, c);
      f = n.insert("path", ":first-child").attr("d", m).attr("class", "basic label-container").attr("style", Ut(p)).attr("style", i), f.attr("class", "basic label-container"), p && f.selectAll("path").attr("style", p), i && f.selectAll("path").attr("style", i);
    }
    return f.attr("label-offset-x", d), f.attr("transform", `translate(${-u / 2}, ${h / 2} )`), s.attr("transform", `translate(${-(a.width / 2) - d - (a.x - (a.left ?? 0))}, ${-(a.height / 2) - (a.y - (a.top ?? 0))})`), J(t, f), t.intersect = function(m) {
      const y = X.rect(t, m), x = y.y - (t.y ?? 0);
      if (c != 0 && (Math.abs(x) < (t.height ?? 0) / 2 || Math.abs(x) == (t.height ?? 0) / 2 && Math.abs(y.x - (t.x ?? 0)) > (t.width ?? 0) / 2 - d)) {
        let b = d * d * (1 - x * x / (c * c));
        b != 0 && (b = Math.sqrt(Math.abs(b))), b = d - b, m.x - (t.x ?? 0) > 0 && (b = -b), y.x += b;
      }
      return y;
    }, n;
  }
  g(tg, "tiltedCylinder");
  async function eg(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a } = await ot(e, t, nt(t)), s = a.width + t.padding, o = a.height + t.padding, l = [
      {
        x: -3 * o / 6,
        y: 0
      },
      {
        x: s + 3 * o / 6,
        y: 0
      },
      {
        x: s,
        y: -o
      },
      {
        x: 0,
        y: -o
      }
    ];
    let h;
    const { cssStyles: c } = t;
    if (t.look === "handDrawn") {
      const d = Q.svg(n), u = K(t, {}), p = ht(l), f = d.path(p, u);
      h = n.insert(() => f, ":first-child").attr("transform", `translate(${-s / 2}, ${o / 2})`), c && h.attr("style", c);
    } else
      h = Oe(n, s, o, l);
    return i && h.attr("style", i), t.width = s, t.height = o, J(t, h), t.intersect = function(d) {
      return X.polygon(t, l, d);
    }, n;
  }
  g(eg, "trapezoid");
  async function rg(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a } = await ot(e, t, nt(t)), s = 60, o = 20, l = Math.max(s, a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), h = Math.max(o, a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), { cssStyles: c } = t, d = Q.svg(n), u = K(t, {});
    t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
    const p = [
      {
        x: -l / 2 * 0.8,
        y: -h / 2
      },
      {
        x: l / 2 * 0.8,
        y: -h / 2
      },
      {
        x: l / 2,
        y: -h / 2 * 0.6
      },
      {
        x: l / 2,
        y: h / 2
      },
      {
        x: -l / 2,
        y: h / 2
      },
      {
        x: -l / 2,
        y: -h / 2 * 0.6
      }
    ], f = ht(p), m = d.path(f, u), y = n.insert(() => m, ":first-child");
    return y.attr("class", "basic label-container"), c && t.look !== "handDrawn" && y.selectChildren("path").attr("style", c), i && t.look !== "handDrawn" && y.selectChildren("path").attr("style", i), J(t, y), t.intersect = function(x) {
      return X.polygon(t, p, x);
    }, n;
  }
  g(rg, "trapezoidalPentagon");
  async function ig(e, t) {
    var r;
    const { labelStyles: i, nodeStyles: n } = tt(t);
    t.labelStyle = i;
    const { shapeSvg: a, bbox: s, label: o } = await ot(e, t, nt(t)), l = Mt((r = dt().flowchart) == null ? void 0 : r.htmlLabels), h = s.width + (t.padding ?? 0), c = h + s.height, d = h + s.height, u = [
      {
        x: 0,
        y: 0
      },
      {
        x: d,
        y: 0
      },
      {
        x: d / 2,
        y: -c
      }
    ], { cssStyles: p } = t, f = Q.svg(a), m = K(t, {});
    t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
    const y = ht(u), x = f.path(y, m), b = a.insert(() => x, ":first-child").attr("transform", `translate(${-c / 2}, ${c / 2})`);
    return p && t.look !== "handDrawn" && b.selectChildren("path").attr("style", p), n && t.look !== "handDrawn" && b.selectChildren("path").attr("style", n), t.width = h, t.height = c, J(t, b), o.attr("transform", `translate(${-s.width / 2 - (s.x - (s.left ?? 0))}, ${c / 2 - (s.height + (t.padding ?? 0) / (l ? 2 : 1) - (s.y - (s.top ?? 0)))})`), t.intersect = function(C) {
      return D.info("Triangle intersect", t, u, C), X.polygon(t, u, C);
    }, a;
  }
  g(ig, "triangle");
  async function ng(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a, label: s } = await ot(e, t, nt(t)), o = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = l / 8, c = l + h, { cssStyles: d } = t, u = 70 - o, p = u > 0 ? u / 2 : 0, f = Q.svg(n), m = K(t, {});
    t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
    const y = [
      {
        x: -o / 2 - p,
        y: c / 2
      },
      ...qe(-o / 2 - p, c / 2, o / 2 + p, c / 2, h, 0.8),
      {
        x: o / 2 + p,
        y: -c / 2
      },
      {
        x: -o / 2 - p,
        y: -c / 2
      }
    ], x = ht(y), b = f.path(x, m), C = n.insert(() => b, ":first-child");
    return C.attr("class", "basic label-container"), d && t.look !== "handDrawn" && C.selectAll("path").attr("style", d), i && t.look !== "handDrawn" && C.selectAll("path").attr("style", i), C.attr("transform", `translate(0,${-h / 2})`), s.attr("transform", `translate(${-o / 2 + (t.padding ?? 0) - (a.x - (a.left ?? 0))},${-l / 2 + (t.padding ?? 0) - h - (a.y - (a.top ?? 0))})`), J(t, C), t.intersect = function(S) {
      return X.polygon(t, y, S);
    }, n;
  }
  g(ng, "waveEdgedRectangle");
  async function ag(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a } = await ot(e, t, nt(t)), s = 100, o = 50, l = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), h = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = l / h;
    let d = l, u = h;
    d > u * c ? u = d / c : d = u * c, d = Math.max(d, s), u = Math.max(u, o);
    const p = Math.min(u * 0.2, u / 4), f = u + p * 2, { cssStyles: m } = t, y = Q.svg(n), x = K(t, {});
    t.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
    const b = [
      {
        x: -d / 2,
        y: f / 2
      },
      ...qe(-d / 2, f / 2, d / 2, f / 2, p, 1),
      {
        x: d / 2,
        y: -f / 2
      },
      ...qe(d / 2, -f / 2, -d / 2, -f / 2, p, -1)
    ], C = ht(b), S = y.path(C, x), k = n.insert(() => S, ":first-child");
    return k.attr("class", "basic label-container"), m && t.look !== "handDrawn" && k.selectAll("path").attr("style", m), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), J(t, k), t.intersect = function(w) {
      return X.polygon(t, b, w);
    }, n;
  }
  g(ag, "waveRectangle");
  async function og(e, t) {
    const { labelStyles: r, nodeStyles: i } = tt(t);
    t.labelStyle = r;
    const { shapeSvg: n, bbox: a, label: s } = await ot(e, t, nt(t)), o = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = 5, c = -o / 2, d = -l / 2, { cssStyles: u } = t, p = Q.svg(n), f = K(t, {}), m = [
      {
        x: c - h,
        y: d - h
      },
      {
        x: c - h,
        y: d + l
      },
      {
        x: c + o,
        y: d + l
      },
      {
        x: c + o,
        y: d - h
      }
    ], y = `M${c - h},${d - h} L${c + o},${d - h} L${c + o},${d + l} L${c - h},${d + l} L${c - h},${d - h}
                M${c - h},${d} L${c + o},${d}
                M${c},${d - h} L${c},${d + l}`;
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    const x = p.path(y, f), b = n.insert(() => x, ":first-child");
    return b.attr("transform", `translate(${h / 2}, ${h / 2})`), b.attr("class", "basic label-container"), u && t.look !== "handDrawn" && b.selectAll("path").attr("style", u), i && t.look !== "handDrawn" && b.selectAll("path").attr("style", i), s.attr("transform", `translate(${-(a.width / 2) + h / 2 - (a.x - (a.left ?? 0))}, ${-(a.height / 2) + h / 2 - (a.y - (a.top ?? 0))})`), J(t, b), t.intersect = function(C) {
      return X.polygon(t, m, C);
    }, n;
  }
  g(og, "windowPane");
  async function Ls(e, t) {
    var r, i, n;
    const a = t;
    if (a.alias && (t.label = a.alias), t.look === "handDrawn") {
      const { themeVariables: H } = Kt(), { background: z } = H, Z = {
        ...t,
        id: t.id + "-background",
        look: "default",
        cssStyles: [
          "stroke: none",
          `fill: ${z}`
        ]
      };
      await Ls(e, Z);
    }
    const s = Kt();
    t.useHtmlLabels = s.htmlLabels;
    let o = ((r = s.er) == null ? void 0 : r.diagramPadding) ?? 10, l = ((i = s.er) == null ? void 0 : i.entityPadding) ?? 6;
    const { cssStyles: h } = t, { labelStyles: c } = tt(t);
    if (a.attributes.length === 0 && t.label) {
      const H = {
        rx: 0,
        ry: 0,
        labelPaddingX: o,
        labelPaddingY: o * 1.5
      };
      Fe(t.label, s) + H.labelPaddingX * 2 < s.er.minEntityWidth && (t.width = s.er.minEntityWidth);
      const z = await Ai(e, t, H);
      if (!Mt(s.htmlLabels)) {
        const Z = z.select("text"), q = (n = Z.node()) == null ? void 0 : n.getBBox();
        Z.attr("transform", `translate(${-q.width / 2}, 0)`);
      }
      return z;
    }
    s.htmlLabels || (o *= 1.25, l *= 1.25);
    let d = nt(t);
    d || (d = "node default");
    const u = e.insert("g").attr("class", d).attr("id", t.domId || t.id), p = await Cr(u, t.label ?? "", s, 0, 0, [
      "name"
    ], c);
    p.height += l;
    let f = 0;
    const m = [];
    let y = 0, x = 0, b = 0, C = 0, S = true, k = true;
    for (const H of a.attributes) {
      const z = await Cr(u, H.type, s, 0, f, [
        "attribute-type"
      ], c);
      y = Math.max(y, z.width + o);
      const Z = await Cr(u, H.name, s, 0, f, [
        "attribute-name"
      ], c);
      x = Math.max(x, Z.width + o);
      const q = await Cr(u, H.keys.join(), s, 0, f, [
        "attribute-keys"
      ], c);
      b = Math.max(b, q.width + o);
      const ct = await Cr(u, H.comment, s, 0, f, [
        "attribute-comment"
      ], c);
      C = Math.max(C, ct.width + o), f += Math.max(z.height, Z.height, q.height, ct.height) + l, m.push(f);
    }
    m.pop();
    let w = 4;
    b <= o && (S = false, b = 0, w--), C <= o && (k = false, C = 0, w--);
    const B = u.node().getBBox();
    if (p.width + o * 2 - (y + x + b + C) > 0) {
      const H = p.width + o * 2 - (y + x + b + C);
      y += H / w, x += H / w, b > 0 && (b += H / w), C > 0 && (C += H / w);
    }
    const N = y + x + b + C, j = Q.svg(u), O = K(t, {});
    t.look !== "handDrawn" && (O.roughness = 0, O.fillStyle = "solid");
    const $ = Math.max(B.width + o * 2, (t == null ? void 0 : t.width) || 0, N), W = Math.max(B.height + (m[0] || f) + l, (t == null ? void 0 : t.height) || 0), P = -$ / 2, L = -W / 2;
    u.selectAll("g:not(:first-child)").each((H, z, Z) => {
      const q = lt(Z[z]), ct = q.attr("transform");
      let ft = 0, $t = 0;
      if (ct) {
        const wt = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(ct);
        wt && (ft = parseFloat(wt[1]), $t = parseFloat(wt[2]), q.attr("class").includes("attribute-name") ? ft += y : q.attr("class").includes("attribute-keys") ? ft += y + x : q.attr("class").includes("attribute-comment") && (ft += y + x + b));
      }
      q.attr("transform", `translate(${P + o / 2 + ft}, ${$t + L + p.height + l / 2})`);
    }), u.select(".name").attr("transform", "translate(" + -p.width / 2 + ", " + (L + l / 2) + ")");
    const M = j.rectangle(P, L, $, W, O), T = u.insert(() => M, ":first-child").attr("style", h.join("")), { themeVariables: E } = Kt(), { rowEven: A, rowOdd: F, nodeBorder: I } = E;
    m.push(0);
    for (const [H, z] of m.entries()) {
      if (H === 0 && m.length > 1)
        continue;
      const Z = H % 2 === 0 && z !== 0, q = j.rectangle(P, p.height + L + z, $, p.height, {
        ...O,
        fill: Z ? A : F,
        stroke: I
      });
      u.insert(() => q, "g.label").attr("style", h.join("")).attr("class", `row-rect-${H % 2 === 0 ? "even" : "odd"}`);
    }
    let R = j.line(P, p.height + L, $ + P, p.height + L, O);
    u.insert(() => R).attr("class", "divider"), R = j.line(y + P, p.height + L, y + P, W + L, O), u.insert(() => R).attr("class", "divider"), S && (R = j.line(y + x + P, p.height + L, y + x + P, W + L, O), u.insert(() => R).attr("class", "divider")), k && (R = j.line(y + x + b + P, p.height + L, y + x + b + P, W + L, O), u.insert(() => R).attr("class", "divider"));
    for (const H of m)
      R = j.line(P, p.height + L + H, $ + P, p.height + L + H, O), u.insert(() => R).attr("class", "divider");
    return J(t, T), t.intersect = function(H) {
      return X.rect(t, H);
    }, u;
  }
  g(Ls, "erBox");
  async function Cr(e, t, r, i = 0, n = 0, a = [], s = "") {
    const o = e.insert("g").attr("class", `label ${a.join(" ")}`).attr("transform", `translate(${i}, ${n})`).attr("style", s);
    t !== pl(t) && (t = pl(t), t = t.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
    const l = o.node().appendChild(await We(o, t, {
      width: Fe(t, r) + 100,
      style: s,
      useHtmlLabels: r.htmlLabels
    }, r));
    if (t.includes("&lt;") || t.includes("&gt;")) {
      let c = l.children[0];
      for (c.textContent = c.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">"); c.childNodes[0]; )
        c = c.childNodes[0], c.textContent = c.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
    }
    let h = l.getBBox();
    if (Mt(r.htmlLabels)) {
      const c = l.children[0];
      c.style.textAlign = "start";
      const d = lt(l);
      h = c.getBoundingClientRect(), d.attr("width", h.width), d.attr("height", h.height);
    }
    return h;
  }
  g(Cr, "addText");
  async function sg(e, t, r, i, n = r.class.padding ?? 12) {
    const a = i ? 0 : 3, s = e.insert("g").attr("class", nt(t)).attr("id", t.domId || t.id);
    let o = null, l = null, h = null, c = null, d = 0, u = 0, p = 0;
    if (o = s.insert("g").attr("class", "annotation-group text"), t.annotations.length > 0) {
      const b = t.annotations[0];
      await oi(o, {
        text: `\xAB${b}\xBB`
      }, 0), d = o.node().getBBox().height;
    }
    l = s.insert("g").attr("class", "label-group text"), await oi(l, t, 0, [
      "font-weight: bolder"
    ]);
    const f = l.node().getBBox();
    u = f.height, h = s.insert("g").attr("class", "members-group text");
    let m = 0;
    for (const b of t.members) {
      const C = await oi(h, b, m, [
        b.parseClassifier()
      ]);
      m += C + a;
    }
    p = h.node().getBBox().height, p <= 0 && (p = n / 2), c = s.insert("g").attr("class", "methods-group text");
    let y = 0;
    for (const b of t.methods) {
      const C = await oi(c, b, y, [
        b.parseClassifier()
      ]);
      y += C + a;
    }
    let x = s.node().getBBox();
    if (o !== null) {
      const b = o.node().getBBox();
      o.attr("transform", `translate(${-b.width / 2})`);
    }
    return l.attr("transform", `translate(${-f.width / 2}, ${d})`), x = s.node().getBBox(), h.attr("transform", `translate(0, ${d + u + n * 2})`), x = s.node().getBBox(), c.attr("transform", `translate(0, ${d + u + (p ? p + n * 4 : n * 2)})`), x = s.node().getBBox(), {
      shapeSvg: s,
      bbox: x
    };
  }
  g(sg, "textHelper");
  async function oi(e, t, r, i = []) {
    const n = e.insert("g").attr("class", "label").attr("style", i.join("; ")), a = Kt();
    let s = "useHtmlLabels" in t ? t.useHtmlLabels : Mt(a.htmlLabels) ?? true, o = "";
    "text" in t ? o = t.text : o = t.label, !s && o.startsWith("\\") && (o = o.substring(1)), Ar(o) && (s = true);
    const l = await We(n, Yo(cr(o)), {
      width: Fe(o, a) + 50,
      classes: "markdown-node-label",
      useHtmlLabels: s
    }, a);
    let h, c = 1;
    if (s) {
      const d = l.children[0], u = lt(l);
      c = d.innerHTML.split("<br>").length, d.innerHTML.includes("</math>") && (c += d.innerHTML.split("<mrow>").length - 1);
      const p = d.getElementsByTagName("img");
      if (p) {
        const f = o.replace(/<img[^>]*>/g, "").trim() === "";
        await Promise.all([
          ...p
        ].map((m) => new Promise((y) => {
          function x() {
            var b;
            if (m.style.display = "flex", m.style.flexDirection = "column", f) {
              const C = ((b = a.fontSize) == null ? void 0 : b.toString()) ?? window.getComputedStyle(document.body).fontSize, S = parseInt(C, 10) * 5 + "px";
              m.style.minWidth = S, m.style.maxWidth = S;
            } else
              m.style.width = "100%";
            y(m);
          }
          g(x, "setupImage"), setTimeout(() => {
            m.complete && x();
          }), m.addEventListener("error", x), m.addEventListener("load", x);
        })));
      }
      h = d.getBoundingClientRect(), u.attr("width", h.width), u.attr("height", h.height);
    } else {
      i.includes("font-weight: bolder") && lt(l).selectAll("tspan").attr("font-weight", ""), c = l.children.length;
      const d = l.children[0];
      (l.textContent === "" || l.textContent.includes("&gt")) && (d.textContent = o[0] + o.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), o[1] === " " && (d.textContent = d.textContent[0] + " " + d.textContent.substring(1))), d.textContent === "undefined" && (d.textContent = ""), h = l.getBBox();
    }
    return n.attr("transform", "translate(0," + (-h.height / (2 * c) + r) + ")"), h.height;
  }
  g(oi, "addText");
  async function lg(e, t) {
    var r, i;
    const n = dt(), a = n.class.padding ?? 12, s = a, o = t.useHtmlLabels ?? Mt(n.htmlLabels) ?? true, l = t;
    l.annotations = l.annotations ?? [], l.members = l.members ?? [], l.methods = l.methods ?? [];
    const { shapeSvg: h, bbox: c } = await sg(e, t, n, o, s), { labelStyles: d, nodeStyles: u } = tt(t);
    t.labelStyle = d, t.cssStyles = l.styles || "";
    const p = ((r = l.styles) == null ? void 0 : r.join(";")) || u || "";
    t.cssStyles || (t.cssStyles = p.replaceAll("!important", "").split(";"));
    const f = l.members.length === 0 && l.methods.length === 0 && !((i = n.class) != null && i.hideEmptyMembersBox), m = Q.svg(h), y = K(t, {});
    t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
    const x = c.width;
    let b = c.height;
    l.members.length === 0 && l.methods.length === 0 ? b += s : l.members.length > 0 && l.methods.length === 0 && (b += s * 2);
    const C = -x / 2, S = -b / 2, k = m.rectangle(C - a, S - a - (f ? a : l.members.length === 0 && l.methods.length === 0 ? -a / 2 : 0), x + 2 * a, b + 2 * a + (f ? a * 2 : l.members.length === 0 && l.methods.length === 0 ? -a : 0), y), w = h.insert(() => k, ":first-child");
    w.attr("class", "basic label-container");
    const B = w.node().getBBox();
    h.selectAll(".text").each(($, W, P) => {
      var L;
      const M = lt(P[W]), T = M.attr("transform");
      let E = 0;
      if (T) {
        const I = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(T);
        I && (E = parseFloat(I[2]));
      }
      let A = E + S + a - (f ? a : l.members.length === 0 && l.methods.length === 0 ? -a / 2 : 0);
      o || (A -= 4);
      let F = C;
      (M.attr("class").includes("label-group") || M.attr("class").includes("annotation-group")) && (F = -((L = M.node()) == null ? void 0 : L.getBBox().width) / 2 || 0, h.selectAll("text").each(function(I, R, H) {
        window.getComputedStyle(H[R]).textAnchor === "middle" && (F = 0);
      })), M.attr("transform", `translate(${F}, ${A})`);
    });
    const N = h.select(".annotation-group").node().getBBox().height - (f ? a / 2 : 0) || 0, j = h.select(".label-group").node().getBBox().height - (f ? a / 2 : 0) || 0, O = h.select(".members-group").node().getBBox().height - (f ? a / 2 : 0) || 0;
    if (l.members.length > 0 || l.methods.length > 0 || f) {
      const $ = m.line(B.x, N + j + S + a, B.x + B.width, N + j + S + a, y);
      h.insert(() => $).attr("class", "divider").attr("style", p);
    }
    if (f || l.members.length > 0 || l.methods.length > 0) {
      const $ = m.line(B.x, N + j + O + S + s * 2 + a, B.x + B.width, N + j + O + S + a + s * 2, y);
      h.insert(() => $).attr("class", "divider").attr("style", p);
    }
    if (l.look !== "handDrawn" && h.selectAll("path").attr("style", p), w.select(":nth-child(2)").attr("style", p), h.selectAll(".divider").select("path").attr("style", p), t.labelStyle ? h.selectAll("span").attr("style", t.labelStyle) : h.selectAll("span").attr("style", p), !o) {
      const $ = RegExp(/color\s*:\s*([^;]*)/), W = $.exec(p);
      if (W) {
        const P = W[0].replace("color", "fill");
        h.selectAll("tspan").attr("style", P);
      } else if (d) {
        const P = $.exec(d);
        if (P) {
          const L = P[0].replace("color", "fill");
          h.selectAll("tspan").attr("style", L);
        }
      }
    }
    return J(t, w), t.intersect = function($) {
      return X.rect(t, $);
    }, h;
  }
  g(lg, "classBox");
  async function hg(e, t) {
    var r, i;
    const { labelStyles: n, nodeStyles: a } = tt(t);
    t.labelStyle = n;
    const s = t, o = t, l = 20, h = 20, c = "verifyMethod" in t, d = nt(t), u = e.insert("g").attr("class", d).attr("id", t.domId ?? t.id);
    let p;
    c ? p = await pe(u, `&lt;&lt;${s.type}&gt;&gt;`, 0, t.labelStyle) : p = await pe(u, "&lt;&lt;Element&gt;&gt;", 0, t.labelStyle);
    let f = p;
    const m = await pe(u, s.name, f, t.labelStyle + "; font-weight: bold;");
    if (f += m + h, c) {
      const N = await pe(u, `${s.requirementId ? `Id: ${s.requirementId}` : ""}`, f, t.labelStyle);
      f += N;
      const j = await pe(u, `${s.text ? `Text: ${s.text}` : ""}`, f, t.labelStyle);
      f += j;
      const O = await pe(u, `${s.risk ? `Risk: ${s.risk}` : ""}`, f, t.labelStyle);
      f += O, await pe(u, `${s.verifyMethod ? `Verification: ${s.verifyMethod}` : ""}`, f, t.labelStyle);
    } else {
      const N = await pe(u, `${o.type ? `Type: ${o.type}` : ""}`, f, t.labelStyle);
      f += N, await pe(u, `${o.docRef ? `Doc Ref: ${o.docRef}` : ""}`, f, t.labelStyle);
    }
    const y = (((r = u.node()) == null ? void 0 : r.getBBox().width) ?? 200) + l, x = (((i = u.node()) == null ? void 0 : i.getBBox().height) ?? 200) + l, b = -y / 2, C = -x / 2, S = Q.svg(u), k = K(t, {});
    t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
    const w = S.rectangle(b, C, y, x, k), B = u.insert(() => w, ":first-child");
    if (B.attr("class", "basic label-container").attr("style", a), u.selectAll(".label").each((N, j, O) => {
      const $ = lt(O[j]), W = $.attr("transform");
      let P = 0, L = 0;
      if (W) {
        const E = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(W);
        E && (P = parseFloat(E[1]), L = parseFloat(E[2]));
      }
      const M = L - x / 2;
      let T = b + l / 2;
      (j === 0 || j === 1) && (T = P), $.attr("transform", `translate(${T}, ${M + l})`);
    }), f > p + m + h) {
      const N = S.line(b, C + p + m + h, b + y, C + p + m + h, k);
      u.insert(() => N).attr("style", a);
    }
    return J(t, B), t.intersect = function(N) {
      return X.rect(t, N);
    }, u;
  }
  g(hg, "requirementBox");
  async function pe(e, t, r, i = "") {
    if (t === "")
      return 0;
    const n = e.insert("g").attr("class", "label").attr("style", i), a = dt(), s = a.htmlLabels ?? true, o = await We(n, Yo(cr(t)), {
      width: Fe(t, a) + 50,
      classes: "markdown-node-label",
      useHtmlLabels: s,
      style: i
    }, a);
    let l;
    if (s) {
      const h = o.children[0], c = lt(o);
      l = h.getBoundingClientRect(), c.attr("width", l.width), c.attr("height", l.height);
    } else {
      const h = o.children[0];
      for (const c of h.children)
        c.textContent = c.textContent.replaceAll("&gt;", ">").replaceAll("&lt;", "<"), i && c.setAttribute("style", i);
      l = o.getBBox(), l.height += 6;
    }
    return n.attr("transform", `translate(${-l.width / 2},${-l.height / 2 + r})`), l.height;
  }
  g(pe, "addText");
  var fk = g((e) => {
    switch (e) {
      case "Very High":
        return "red";
      case "High":
        return "orange";
      case "Medium":
        return null;
      case "Low":
        return "blue";
      case "Very Low":
        return "lightblue";
    }
  }, "colorFromPriority");
  async function cg(e, t, { config: r }) {
    var i, n;
    const { labelStyles: a, nodeStyles: s } = tt(t);
    t.labelStyle = a || "";
    const o = 10, l = t.width;
    t.width = (t.width ?? 200) - 10;
    const { shapeSvg: h, bbox: c, label: d } = await ot(e, t, nt(t)), u = t.padding || 10;
    let p = "", f;
    "ticket" in t && t.ticket && (i = r == null ? void 0 : r.kanban) != null && i.ticketBaseUrl && (p = (n = r == null ? void 0 : r.kanban) == null ? void 0 : n.ticketBaseUrl.replace("#TICKET#", t.ticket), f = h.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", p).attr("target", "_blank"));
    const m = {
      useHtmlLabels: t.useHtmlLabels,
      labelStyle: t.labelStyle || "",
      width: t.width,
      img: t.img,
      padding: t.padding || 8,
      centerLabel: false
    };
    let y, x;
    f ? { label: y, bbox: x } = await qa(f, "ticket" in t && t.ticket || "", m) : { label: y, bbox: x } = await qa(h, "ticket" in t && t.ticket || "", m);
    const { label: b, bbox: C } = await qa(h, "assigned" in t && t.assigned || "", m);
    t.width = l;
    const S = 10, k = (t == null ? void 0 : t.width) || 0, w = Math.max(x.height, C.height) / 2, B = Math.max(c.height + S * 2, (t == null ? void 0 : t.height) || 0) + w, N = -k / 2, j = -B / 2;
    d.attr("transform", "translate(" + (u - k / 2) + ", " + (-w - c.height / 2) + ")"), y.attr("transform", "translate(" + (u - k / 2) + ", " + (-w + c.height / 2) + ")"), b.attr("transform", "translate(" + (u + k / 2 - C.width - 2 * o) + ", " + (-w + c.height / 2) + ")");
    let O;
    const { rx: $, ry: W } = t, { cssStyles: P } = t;
    if (t.look === "handDrawn") {
      const L = Q.svg(h), M = K(t, {}), T = $ || W ? L.path(Ee(N, j, k, B, $ || 0), M) : L.rectangle(N, j, k, B, M);
      O = h.insert(() => T, ":first-child"), O.attr("class", "basic label-container").attr("style", P || null);
    } else {
      O = h.insert("rect", ":first-child"), O.attr("class", "basic label-container __APA__").attr("style", s).attr("rx", $ ?? 5).attr("ry", W ?? 5).attr("x", N).attr("y", j).attr("width", k).attr("height", B);
      const L = "priority" in t && t.priority;
      if (L) {
        const M = h.append("line"), T = N + 2, E = j + Math.floor(($ ?? 0) / 2), A = j + B - Math.floor(($ ?? 0) / 2);
        M.attr("x1", T).attr("y1", E).attr("x2", T).attr("y2", A).attr("stroke-width", "4").attr("stroke", fk(L));
      }
    }
    return J(t, O), t.height = B, t.intersect = function(L) {
      return X.rect(t, L);
    }, h;
  }
  g(cg, "kanbanItem");
  var mk = [
    {
      semanticName: "Process",
      name: "Rectangle",
      shortName: "rect",
      description: "Standard process shape",
      aliases: [
        "proc",
        "process",
        "rectangle"
      ],
      internalAliases: [
        "squareRect"
      ],
      handler: Yp
    },
    {
      semanticName: "Event",
      name: "Rounded Rectangle",
      shortName: "rounded",
      description: "Represents an event",
      aliases: [
        "event"
      ],
      internalAliases: [
        "roundedRect"
      ],
      handler: jp
    },
    {
      semanticName: "Terminal Point",
      name: "Stadium",
      shortName: "stadium",
      description: "Terminal point",
      aliases: [
        "terminal",
        "pill"
      ],
      handler: Up
    },
    {
      semanticName: "Subprocess",
      name: "Framed Rectangle",
      shortName: "fr-rect",
      description: "Subprocess",
      aliases: [
        "subprocess",
        "subproc",
        "framed-rectangle",
        "subroutine"
      ],
      handler: Zp
    },
    {
      semanticName: "Database",
      name: "Cylinder",
      shortName: "cyl",
      description: "Database storage",
      aliases: [
        "db",
        "database",
        "cylinder"
      ],
      handler: fp
    },
    {
      semanticName: "Start",
      name: "Circle",
      shortName: "circle",
      description: "Starting point",
      aliases: [
        "circ"
      ],
      handler: lp
    },
    {
      semanticName: "Decision",
      name: "Diamond",
      shortName: "diam",
      description: "Decision-making step",
      aliases: [
        "decision",
        "diamond",
        "question"
      ],
      handler: Rp
    },
    {
      semanticName: "Prepare Conditional",
      name: "Hexagon",
      shortName: "hex",
      description: "Preparation or condition step",
      aliases: [
        "hexagon",
        "prepare"
      ],
      handler: vp
    },
    {
      semanticName: "Data Input/Output",
      name: "Lean Right",
      shortName: "lean-r",
      description: "Represents input or output",
      aliases: [
        "lean-right",
        "in-out"
      ],
      internalAliases: [
        "lean_right"
      ],
      handler: $p
    },
    {
      semanticName: "Data Input/Output",
      name: "Lean Left",
      shortName: "lean-l",
      description: "Represents output or input",
      aliases: [
        "lean-left",
        "out-in"
      ],
      internalAliases: [
        "lean_left"
      ],
      handler: Fp
    },
    {
      semanticName: "Priority Action",
      name: "Trapezoid Base Bottom",
      shortName: "trap-b",
      description: "Priority action",
      aliases: [
        "priority",
        "trapezoid-bottom",
        "trapezoid"
      ],
      handler: eg
    },
    {
      semanticName: "Manual Operation",
      name: "Trapezoid Base Top",
      shortName: "trap-t",
      description: "Represents a manual task",
      aliases: [
        "manual",
        "trapezoid-top",
        "inv-trapezoid"
      ],
      internalAliases: [
        "inv_trapezoid"
      ],
      handler: Mp
    },
    {
      semanticName: "Stop",
      name: "Double Circle",
      shortName: "dbl-circ",
      description: "Represents a stop point",
      aliases: [
        "double-circle"
      ],
      internalAliases: [
        "doublecircle"
      ],
      handler: yp
    },
    {
      semanticName: "Text Block",
      name: "Text Block",
      shortName: "text",
      description: "Text block",
      handler: Jp
    },
    {
      semanticName: "Card",
      name: "Notched Rectangle",
      shortName: "notch-rect",
      description: "Represents a card",
      aliases: [
        "card",
        "notched-rectangle"
      ],
      handler: op
    },
    {
      semanticName: "Lined/Shaded Process",
      name: "Lined Rectangle",
      shortName: "lin-rect",
      description: "Lined process shape",
      aliases: [
        "lined-rectangle",
        "lined-process",
        "lin-proc",
        "shaded-process"
      ],
      handler: Wp
    },
    {
      semanticName: "Start",
      name: "Small Circle",
      shortName: "sm-circ",
      description: "Small starting point",
      aliases: [
        "start",
        "small-circle"
      ],
      internalAliases: [
        "stateStart"
      ],
      handler: Xp
    },
    {
      semanticName: "Stop",
      name: "Framed Circle",
      shortName: "fr-circ",
      description: "Stop point",
      aliases: [
        "stop",
        "framed-circle"
      ],
      internalAliases: [
        "stateEnd"
      ],
      handler: Gp
    },
    {
      semanticName: "Fork/Join",
      name: "Filled Rectangle",
      shortName: "fork",
      description: "Fork or join in process flow",
      aliases: [
        "join"
      ],
      internalAliases: [
        "forkJoin"
      ],
      handler: kp
    },
    {
      semanticName: "Collate",
      name: "Hourglass",
      shortName: "hourglass",
      description: "Represents a collate operation",
      aliases: [
        "hourglass",
        "collate"
      ],
      handler: wp
    },
    {
      semanticName: "Comment",
      name: "Curly Brace",
      shortName: "brace",
      description: "Adds a comment",
      aliases: [
        "comment",
        "brace-l"
      ],
      handler: dp
    },
    {
      semanticName: "Comment Right",
      name: "Curly Brace",
      shortName: "brace-r",
      description: "Adds a comment",
      handler: up
    },
    {
      semanticName: "Comment with braces on both sides",
      name: "Curly Braces",
      shortName: "braces",
      description: "Adds a comment",
      handler: pp
    },
    {
      semanticName: "Com Link",
      name: "Lightning Bolt",
      shortName: "bolt",
      description: "Communication link",
      aliases: [
        "com-link",
        "lightning-bolt"
      ],
      handler: Ep
    },
    {
      semanticName: "Document",
      name: "Document",
      shortName: "doc",
      description: "Represents a document",
      aliases: [
        "doc",
        "document"
      ],
      handler: ng
    },
    {
      semanticName: "Delay",
      name: "Half-Rounded Rectangle",
      shortName: "delay",
      description: "Represents a delay",
      aliases: [
        "half-rounded-rectangle"
      ],
      handler: Cp
    },
    {
      semanticName: "Direct Access Storage",
      name: "Horizontal Cylinder",
      shortName: "h-cyl",
      description: "Direct access storage",
      aliases: [
        "das",
        "horizontal-cylinder"
      ],
      handler: tg
    },
    {
      semanticName: "Disk Storage",
      name: "Lined Cylinder",
      shortName: "lin-cyl",
      description: "Disk storage",
      aliases: [
        "disk",
        "lined-cylinder"
      ],
      handler: Op
    },
    {
      semanticName: "Display",
      name: "Curved Trapezoid",
      shortName: "curv-trap",
      description: "Represents a display",
      aliases: [
        "curved-trapezoid",
        "display"
      ],
      handler: gp
    },
    {
      semanticName: "Divided Process",
      name: "Divided Rectangle",
      shortName: "div-rect",
      description: "Divided process shape",
      aliases: [
        "div-proc",
        "divided-rectangle",
        "divided-process"
      ],
      handler: mp
    },
    {
      semanticName: "Extract",
      name: "Triangle",
      shortName: "tri",
      description: "Extraction process",
      aliases: [
        "extract",
        "triangle"
      ],
      handler: ig
    },
    {
      semanticName: "Internal Storage",
      name: "Window Pane",
      shortName: "win-pane",
      description: "Internal storage",
      aliases: [
        "internal-storage",
        "window-pane"
      ],
      handler: og
    },
    {
      semanticName: "Junction",
      name: "Filled Circle",
      shortName: "f-circ",
      description: "Junction point",
      aliases: [
        "junction",
        "filled-circle"
      ],
      handler: xp
    },
    {
      semanticName: "Loop Limit",
      name: "Trapezoidal Pentagon",
      shortName: "notch-pent",
      description: "Loop limit step",
      aliases: [
        "loop-limit",
        "notched-pentagon"
      ],
      handler: rg
    },
    {
      semanticName: "Manual File",
      name: "Flipped Triangle",
      shortName: "flip-tri",
      description: "Manual file operation",
      aliases: [
        "manual-file",
        "flipped-triangle"
      ],
      handler: bp
    },
    {
      semanticName: "Manual Input",
      name: "Sloped Rectangle",
      shortName: "sl-rect",
      description: "Manual input step",
      aliases: [
        "manual-input",
        "sloped-rectangle"
      ],
      handler: Hp
    },
    {
      semanticName: "Multi-Document",
      name: "Stacked Document",
      shortName: "docs",
      description: "Multiple documents",
      aliases: [
        "documents",
        "st-doc",
        "stacked-document"
      ],
      handler: Pp
    },
    {
      semanticName: "Multi-Process",
      name: "Stacked Rectangle",
      shortName: "st-rect",
      description: "Multiple processes",
      aliases: [
        "procs",
        "processes",
        "stacked-rectangle"
      ],
      handler: Ip
    },
    {
      semanticName: "Stored Data",
      name: "Bow Tie Rectangle",
      shortName: "bow-rect",
      description: "Stored data",
      aliases: [
        "stored-data",
        "bow-tie-rectangle"
      ],
      handler: ap
    },
    {
      semanticName: "Summary",
      name: "Crossed Circle",
      shortName: "cross-circ",
      description: "Summary",
      aliases: [
        "summary",
        "crossed-circle"
      ],
      handler: cp
    },
    {
      semanticName: "Tagged Document",
      name: "Tagged Document",
      shortName: "tag-doc",
      description: "Tagged document",
      aliases: [
        "tag-doc",
        "tagged-document"
      ],
      handler: Kp
    },
    {
      semanticName: "Tagged Process",
      name: "Tagged Rectangle",
      shortName: "tag-rect",
      description: "Tagged process",
      aliases: [
        "tagged-rectangle",
        "tag-proc",
        "tagged-process"
      ],
      handler: Qp
    },
    {
      semanticName: "Paper Tape",
      name: "Flag",
      shortName: "flag",
      description: "Paper tape",
      aliases: [
        "paper-tape"
      ],
      handler: ag
    },
    {
      semanticName: "Odd",
      name: "Odd",
      shortName: "odd",
      description: "Odd shape",
      internalAliases: [
        "rect_left_inv_arrow"
      ],
      handler: Np
    },
    {
      semanticName: "Lined Document",
      name: "Lined Document",
      shortName: "lin-doc",
      description: "Lined document",
      aliases: [
        "lined-document"
      ],
      handler: Dp
    }
  ], yk = g(() => {
    const e = [
      ...Object.entries({
        state: Vp,
        choice: sp,
        note: zp,
        rectWithTitle: qp,
        labelRect: Ap,
        iconSquare: Bp,
        iconCircle: Sp,
        icon: _p,
        iconRounded: Tp,
        imageSquare: Lp,
        anchor: np,
        kanbanItem: cg,
        classBox: lg,
        erBox: Ls,
        requirementBox: hg
      }),
      ...mk.flatMap((t) => [
        t.shortName,
        ..."aliases" in t ? t.aliases : [],
        ..."internalAliases" in t ? t.internalAliases : []
      ].map((r) => [
        r,
        t.handler
      ]))
    ];
    return Object.fromEntries(e);
  }, "generateShapeMap"), dg = yk();
  xk = function(e) {
    return e in dg;
  };
  g(xk, "isValidShape");
  var ia = /* @__PURE__ */ new Map();
  ug = async function(e, t, r) {
    let i, n;
    t.shape === "rect" && (t.rx && t.ry ? t.shape = "roundedRect" : t.shape = "squareRect");
    const a = t.shape ? dg[t.shape] : void 0;
    if (!a)
      throw new Error(`No such shape: ${t.shape}. Please check your syntax.`);
    if (t.link) {
      let s;
      r.config.securityLevel === "sandbox" ? s = "_top" : t.linkTarget && (s = t.linkTarget || "_blank"), i = e.insert("svg:a").attr("xlink:href", t.link).attr("target", s ?? null), n = await a(i, t, r);
    } else
      n = await a(e, t, r), i = n;
    return t.tooltip && n.attr("title", t.tooltip), ia.set(t.id, i), t.haveCallback && i.attr("class", i.attr("class") + " clickable"), i;
  };
  g(ug, "insertNode");
  let bk, kk, ih, Dn, Dt, ii;
  U_ = g((e, t) => {
    ia.set(t.id, e);
  }, "setNodeElem");
  V_ = g(() => {
    ia.clear();
  }, "clear");
  G_ = g((e) => {
    const t = ia.get(e.id);
    D.trace("Transforming node", e.diff, e, "translate(" + (e.x - e.width / 2 - 5) + ", " + e.width / 2 + ")");
    const r = 8, i = e.diff || 0;
    return e.clusterNode ? t.attr("transform", "translate(" + (e.x + i - e.width / 2) + ", " + (e.y - e.height / 2 - r) + ")") : t.attr("transform", "translate(" + e.x + ", " + e.y + ")"), i;
  }, "positionNode");
  bk = g((e, t, r, i, n, a) => {
    t.arrowTypeStart && ih(e, "start", t.arrowTypeStart, r, i, n, a), t.arrowTypeEnd && ih(e, "end", t.arrowTypeEnd, r, i, n, a);
  }, "addEdgeMarkers");
  kk = {
    arrow_cross: {
      type: "cross",
      fill: false
    },
    arrow_point: {
      type: "point",
      fill: true
    },
    arrow_barb: {
      type: "barb",
      fill: true
    },
    arrow_circle: {
      type: "circle",
      fill: false
    },
    aggregation: {
      type: "aggregation",
      fill: false
    },
    extension: {
      type: "extension",
      fill: false
    },
    composition: {
      type: "composition",
      fill: true
    },
    dependency: {
      type: "dependency",
      fill: true
    },
    lollipop: {
      type: "lollipop",
      fill: false
    },
    only_one: {
      type: "onlyOne",
      fill: false
    },
    zero_or_one: {
      type: "zeroOrOne",
      fill: false
    },
    one_or_more: {
      type: "oneOrMore",
      fill: false
    },
    zero_or_more: {
      type: "zeroOrMore",
      fill: false
    },
    requirement_arrow: {
      type: "requirement_arrow",
      fill: false
    },
    requirement_contains: {
      type: "requirement_contains",
      fill: false
    }
  };
  ih = g((e, t, r, i, n, a, s) => {
    var o;
    const l = kk[r];
    if (!l) {
      D.warn(`Unknown arrow type: ${r}`);
      return;
    }
    const h = l.type, c = `${n}_${a}-${h}${t === "start" ? "Start" : "End"}`;
    if (s && s.trim() !== "") {
      const d = s.replace(/[^\dA-Za-z]/g, "_"), u = `${c}_${d}`;
      if (!document.getElementById(u)) {
        const p = document.getElementById(c);
        if (p) {
          const f = p.cloneNode(true);
          f.id = u, f.querySelectorAll("path, circle, line").forEach((m) => {
            m.setAttribute("stroke", s), l.fill && m.setAttribute("fill", s);
          }), (o = p.parentNode) == null || o.appendChild(f);
        }
      }
      e.attr(`marker-${t}`, `url(${i}#${u})`);
    } else
      e.attr(`marker-${t}`, `url(${i}#${c})`);
  }, "addEdgeMarker");
  Dn = /* @__PURE__ */ new Map();
  Dt = /* @__PURE__ */ new Map();
  X_ = g(() => {
    Dn.clear(), Dt.clear();
  }, "clear");
  ii = g((e) => e ? e.reduce((t, r) => t + ";" + r, "") : "", "getLabelStyles");
  Ck = g(async (e, t) => {
    let r = Mt(dt().flowchart.htmlLabels);
    const i = await We(e, t.label, {
      style: ii(t.labelStyle),
      useHtmlLabels: r,
      addSvgBackground: true,
      isNode: false
    });
    D.info("abc82", t, t.labelType);
    const n = e.insert("g").attr("class", "edgeLabel"), a = n.insert("g").attr("class", "label");
    a.node().appendChild(i);
    let s = i.getBBox();
    if (r) {
      const l = i.children[0], h = lt(i);
      s = l.getBoundingClientRect(), h.attr("width", s.width), h.attr("height", s.height);
    }
    a.attr("transform", "translate(" + -s.width / 2 + ", " + -s.height / 2 + ")"), Dn.set(t.id, n), t.width = s.width, t.height = s.height;
    let o;
    if (t.startLabelLeft) {
      const l = await er(t.startLabelLeft, ii(t.labelStyle)), h = e.insert("g").attr("class", "edgeTerminals"), c = h.insert("g").attr("class", "inner");
      o = c.node().appendChild(l);
      const d = l.getBBox();
      c.attr("transform", "translate(" + -d.width / 2 + ", " + -d.height / 2 + ")"), Dt.get(t.id) || Dt.set(t.id, {}), Dt.get(t.id).startLeft = h, si(o, t.startLabelLeft);
    }
    if (t.startLabelRight) {
      const l = await er(t.startLabelRight, ii(t.labelStyle)), h = e.insert("g").attr("class", "edgeTerminals"), c = h.insert("g").attr("class", "inner");
      o = h.node().appendChild(l), c.node().appendChild(l);
      const d = l.getBBox();
      c.attr("transform", "translate(" + -d.width / 2 + ", " + -d.height / 2 + ")"), Dt.get(t.id) || Dt.set(t.id, {}), Dt.get(t.id).startRight = h, si(o, t.startLabelRight);
    }
    if (t.endLabelLeft) {
      const l = await er(t.endLabelLeft, ii(t.labelStyle)), h = e.insert("g").attr("class", "edgeTerminals"), c = h.insert("g").attr("class", "inner");
      o = c.node().appendChild(l);
      const d = l.getBBox();
      c.attr("transform", "translate(" + -d.width / 2 + ", " + -d.height / 2 + ")"), h.node().appendChild(l), Dt.get(t.id) || Dt.set(t.id, {}), Dt.get(t.id).endLeft = h, si(o, t.endLabelLeft);
    }
    if (t.endLabelRight) {
      const l = await er(t.endLabelRight, ii(t.labelStyle)), h = e.insert("g").attr("class", "edgeTerminals"), c = h.insert("g").attr("class", "inner");
      o = c.node().appendChild(l);
      const d = l.getBBox();
      c.attr("transform", "translate(" + -d.width / 2 + ", " + -d.height / 2 + ")"), h.node().appendChild(l), Dt.get(t.id) || Dt.set(t.id, {}), Dt.get(t.id).endRight = h, si(o, t.endLabelRight);
    }
    return i;
  }, "insertEdgeLabel");
  function si(e, t) {
    dt().flowchart.htmlLabels && e && (e.style.width = t.length * 9 + "px", e.style.height = "12px");
  }
  g(si, "setTerminalWidth");
  let wk, _k, nh;
  vk = g((e, t) => {
    D.debug("Moving label abc88 ", e.id, e.label, Dn.get(e.id), t);
    let r = t.updatedPath ? t.updatedPath : t.originalPath;
    const i = dt(), { subGraphTitleTotalMargin: n } = Jo(i);
    if (e.label) {
      const a = Dn.get(e.id);
      let s = e.x, o = e.y;
      if (r) {
        const l = fe.calcLabelPosition(r);
        D.debug("Moving label " + e.label + " from (", s, ",", o, ") to (", l.x, ",", l.y, ") abc88"), t.updatedPath && (s = l.x, o = l.y);
      }
      a.attr("transform", `translate(${s}, ${o + n / 2})`);
    }
    if (e.startLabelLeft) {
      const a = Dt.get(e.id).startLeft;
      let s = e.x, o = e.y;
      if (r) {
        const l = fe.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_left", r);
        s = l.x, o = l.y;
      }
      a.attr("transform", `translate(${s}, ${o})`);
    }
    if (e.startLabelRight) {
      const a = Dt.get(e.id).startRight;
      let s = e.x, o = e.y;
      if (r) {
        const l = fe.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_right", r);
        s = l.x, o = l.y;
      }
      a.attr("transform", `translate(${s}, ${o})`);
    }
    if (e.endLabelLeft) {
      const a = Dt.get(e.id).endLeft;
      let s = e.x, o = e.y;
      if (r) {
        const l = fe.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_left", r);
        s = l.x, o = l.y;
      }
      a.attr("transform", `translate(${s}, ${o})`);
    }
    if (e.endLabelRight) {
      const a = Dt.get(e.id).endRight;
      let s = e.x, o = e.y;
      if (r) {
        const l = fe.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_right", r);
        s = l.x, o = l.y;
      }
      a.attr("transform", `translate(${s}, ${o})`);
    }
  }, "positionEdgeLabel");
  wk = g((e, t) => {
    const r = e.x, i = e.y, n = Math.abs(t.x - r), a = Math.abs(t.y - i), s = e.width / 2, o = e.height / 2;
    return n >= s || a >= o;
  }, "outsideNode");
  _k = g((e, t, r) => {
    D.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);
    const i = e.x, n = e.y, a = Math.abs(i - r.x), s = e.width / 2;
    let o = r.x < t.x ? s - a : s + a;
    const l = e.height / 2, h = Math.abs(t.y - r.y), c = Math.abs(t.x - r.x);
    if (Math.abs(n - t.y) * s > Math.abs(i - t.x) * l) {
      let d = r.y < t.y ? t.y - l - n : n - l - t.y;
      o = c * d / h;
      const u = {
        x: r.x < t.x ? r.x + o : r.x - c + o,
        y: r.y < t.y ? r.y + h - d : r.y - h + d
      };
      return o === 0 && (u.x = t.x, u.y = t.y), c === 0 && (u.x = t.x), h === 0 && (u.y = t.y), D.debug(`abc89 top/bottom calc, Q ${h}, q ${d}, R ${c}, r ${o}`, u), u;
    } else {
      r.x < t.x ? o = t.x - s - i : o = i - s - t.x;
      let d = h * o / c, u = r.x < t.x ? r.x + c - o : r.x - c + o, p = r.y < t.y ? r.y + d : r.y - d;
      return D.debug(`sides calc abc89, Q ${h}, q ${d}, R ${c}, r ${o}`, {
        _x: u,
        _y: p
      }), o === 0 && (u = t.x, p = t.y), c === 0 && (u = t.x), h === 0 && (p = t.y), {
        x: u,
        y: p
      };
    }
  }, "intersection");
  nh = g((e, t) => {
    D.warn("abc88 cutPathAtIntersect", e, t);
    let r = [], i = e[0], n = false;
    return e.forEach((a) => {
      if (D.info("abc88 checking point", a, t), !wk(t, a) && !n) {
        const s = _k(t, i, a);
        D.debug("abc88 inside", a, i, s), D.debug("abc88 intersection", s, t);
        let o = false;
        r.forEach((l) => {
          o = o || l.x === s.x && l.y === s.y;
        }), r.some((l) => l.x === s.x && l.y === s.y) ? D.warn("abc88 no intersect", s, r) : r.push(s), n = true;
      } else
        D.warn("abc88 outside", a, i), i = a, n || r.push(a);
    }), D.debug("returning points", r), r;
  }, "cutPathAtIntersect");
  function pg(e) {
    const t = [], r = [];
    for (let i = 1; i < e.length - 1; i++) {
      const n = e[i - 1], a = e[i], s = e[i + 1];
      (n.x === a.x && a.y === s.y && Math.abs(a.x - s.x) > 5 && Math.abs(a.y - n.y) > 5 || n.y === a.y && a.x === s.x && Math.abs(a.x - n.x) > 5 && Math.abs(a.y - s.y) > 5) && (t.push(a), r.push(i));
    }
    return {
      cornerPoints: t,
      cornerPointPositions: r
    };
  }
  g(pg, "extractCornerPoints");
  let ah, Sk, Bk, Lk, Mk, Ak, Fk, $k, Ek, Ok, Dk, Ik, Pk, zk, Rk, Nk, qk, jk, Wk, Yk, ki, gg, Uk;
  ah = g(function(e, t, r) {
    const i = t.x - e.x, n = t.y - e.y, a = Math.sqrt(i * i + n * n), s = r / a;
    return {
      x: t.x - s * i,
      y: t.y - s * n
    };
  }, "findAdjacentPoint");
  Sk = g(function(e) {
    const { cornerPointPositions: t } = pg(e), r = [];
    for (let i = 0; i < e.length; i++)
      if (t.includes(i)) {
        const n = e[i - 1], a = e[i + 1], s = e[i], o = ah(n, s, 5), l = ah(a, s, 5), h = l.x - o.x, c = l.y - o.y;
        r.push(o);
        const d = Math.sqrt(2) * 2;
        let u = {
          x: s.x,
          y: s.y
        };
        if (Math.abs(a.x - n.x) > 10 && Math.abs(a.y - n.y) >= 10) {
          D.debug("Corner point fixing", Math.abs(a.x - n.x), Math.abs(a.y - n.y));
          const p = 5;
          s.x === o.x ? u = {
            x: h < 0 ? o.x - p + d : o.x + p - d,
            y: c < 0 ? o.y - d : o.y + d
          } : u = {
            x: h < 0 ? o.x - d : o.x + d,
            y: c < 0 ? o.y - p + d : o.y + p - d
          };
        } else
          D.debug("Corner point skipping fixing", Math.abs(a.x - n.x), Math.abs(a.y - n.y));
        r.push(u, l);
      } else
        r.push(e[i]);
    return r;
  }, "fixCorners");
  Tk = g(function(e, t, r, i, n, a, s) {
    var o;
    const { handDrawnSeed: l } = dt();
    let h = t.points, c = false;
    const d = n;
    var u = a;
    const p = [];
    for (const O in t.cssCompiledStyles)
      Xu(O) || p.push(t.cssCompiledStyles[O]);
    u.intersect && d.intersect && (h = h.slice(1, t.points.length - 1), h.unshift(d.intersect(h[0])), D.debug("Last point APA12", t.start, "-->", t.end, h[h.length - 1], u, u.intersect(h[h.length - 1])), h.push(u.intersect(h[h.length - 1]))), t.toCluster && (D.info("to cluster abc88", r.get(t.toCluster)), h = nh(t.points, r.get(t.toCluster).node), c = true), t.fromCluster && (D.debug("from cluster abc88", r.get(t.fromCluster), JSON.stringify(h, null, 2)), h = nh(h.reverse(), r.get(t.fromCluster).node).reverse(), c = true);
    let f = h.filter((O) => !Number.isNaN(O.y));
    f = Sk(f);
    let m = tn;
    switch (m = bn, t.curve) {
      case "linear":
        m = bn;
        break;
      case "basis":
        m = tn;
        break;
      case "cardinal":
        m = Id;
        break;
      case "bumpX":
        m = wh;
        break;
      case "bumpY":
        m = vh;
        break;
      case "catmullRom":
        m = zd;
        break;
      case "monotoneX":
        m = Hd;
        break;
      case "monotoneY":
        m = Yd;
        break;
      case "natural":
        m = Vd;
        break;
      case "step":
        m = Gd;
        break;
      case "stepAfter":
        m = Zd;
        break;
      case "stepBefore":
        m = Xd;
        break;
      default:
        m = tn;
    }
    const { x: y, y: x } = my(t), b = Wy().x(y).y(x).curve(m);
    let C;
    switch (t.thickness) {
      case "normal":
        C = "edge-thickness-normal";
        break;
      case "thick":
        C = "edge-thickness-thick";
        break;
      case "invisible":
        C = "edge-thickness-invisible";
        break;
      default:
        C = "edge-thickness-normal";
    }
    switch (t.pattern) {
      case "solid":
        C += " edge-pattern-solid";
        break;
      case "dotted":
        C += " edge-pattern-dotted";
        break;
      case "dashed":
        C += " edge-pattern-dashed";
        break;
      default:
        C += " edge-pattern-solid";
    }
    let S, k = b(f);
    const w = Array.isArray(t.style) ? t.style : [
      t.style
    ];
    let B = w.find((O) => O == null ? void 0 : O.startsWith("stroke:"));
    if (t.look === "handDrawn") {
      const O = Q.svg(e);
      Object.assign([], f);
      const $ = O.path(k, {
        roughness: 0.3,
        seed: l
      });
      C += " transition", S = lt($).select("path").attr("id", t.id).attr("class", " " + C + (t.classes ? " " + t.classes : "")).attr("style", w ? w.reduce((P, L) => P + ";" + L, "") : "");
      let W = S.attr("d");
      S.attr("d", W), e.node().appendChild(S.node());
    } else {
      const O = p.join(";"), $ = w ? w.reduce((L, M) => L + M + ";", "") : "";
      let W = "";
      t.animate && (W = " edge-animation-fast"), t.animation && (W = " edge-animation-" + t.animation);
      const P = O ? O + ";" + $ + ";" : $;
      S = e.append("path").attr("d", k).attr("id", t.id).attr("class", " " + C + (t.classes ? " " + t.classes : "") + (W ?? "")).attr("style", P), B = (o = P.match(/stroke:([^;]+)/)) == null ? void 0 : o[1];
    }
    let N = "";
    (dt().flowchart.arrowMarkerAbsolute || dt().state.arrowMarkerAbsolute) && (N = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, N = N.replace(/\(/g, "\\(").replace(/\)/g, "\\)")), D.info("arrowTypeStart", t.arrowTypeStart), D.info("arrowTypeEnd", t.arrowTypeEnd), bk(S, t, N, s, i, B);
    let j = {};
    return c && (j.updatedPath = h), j.originalPath = t.points, j;
  }, "insertEdge");
  Bk = g((e, t, r, i) => {
    t.forEach((n) => {
      Wk[n](e, r, i);
    });
  }, "insertMarkers");
  Lk = g((e, t, r) => {
    D.trace("Making markers for ", r), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
  }, "extension");
  Mk = g((e, t, r) => {
    e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  }, "composition");
  Ak = g((e, t, r) => {
    e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  }, "aggregation");
  Fk = g((e, t, r) => {
    e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
  }, "dependency");
  $k = g((e, t, r) => {
    e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopEnd").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
  }, "lollipop");
  Ek = g((e, t, r) => {
    e.append("marker").attr("id", r + "_" + t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  }, "point");
  Ok = g((e, t, r) => {
    e.append("marker").attr("id", r + "_" + t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  }, "circle");
  Dk = g((e, t, r) => {
    e.append("marker").attr("id", r + "_" + t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
  }, "cross");
  Ik = g((e, t, r) => {
    e.append("defs").append("marker").attr("id", r + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
  }, "barb");
  Pk = g((e, t, r) => {
    e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18"), e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18");
  }, "only_one");
  zk = g((e, t, r) => {
    const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
    i.append("circle").attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6), i.append("path").attr("d", "M9,0 L9,18");
    const n = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
    n.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6), n.append("path").attr("d", "M21,0 L21,18");
  }, "zero_or_one");
  Rk = g((e, t, r) => {
    e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"), e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
  }, "one_or_more");
  Nk = g((e, t, r) => {
    const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
    i.append("circle").attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6), i.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
    const n = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
    n.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6), n.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
  }, "zero_or_more");
  qk = g((e, t, r) => {
    e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("path").attr("d", `M0,0
      L20,10
      M20,10
      L0,20`);
  }, "requirement_arrow");
  jk = g((e, t, r) => {
    const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("g");
    i.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), i.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), i.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10);
  }, "requirement_contains");
  Wk = {
    extension: Lk,
    composition: Mk,
    aggregation: Ak,
    dependency: Fk,
    lollipop: $k,
    point: Ek,
    circle: Ok,
    cross: Dk,
    barb: Ik,
    only_one: Pk,
    zero_or_one: zk,
    one_or_more: Rk,
    zero_or_more: Nk,
    requirement_arrow: qk,
    requirement_contains: jk
  };
  Hk = Bk;
  Yk = {
    common: Dr,
    getConfig: Kt,
    insertCluster: J2,
    insertEdge: Tk,
    insertEdgeLabel: Ck,
    insertMarkers: Hk,
    insertNode: ug,
    interpolateToCurve: hs,
    labelHelper: ot,
    log: D,
    positionEdgeLabel: vk
  };
  ki = {};
  gg = g((e) => {
    for (const t of e)
      ki[t.name] = t;
  }, "registerLayoutLoaders");
  Uk = g(() => {
    gg([
      {
        name: "dagre",
        loader: g(async () => await mt(() => import("./dagre-OKDRZEBW-BhBZ1LpX-e8353d97.js"), ["static/js/dagre-OKDRZEBW-BhBZ1LpX-e8353d97.js","static/js/graph-BlpFl8hT-e0a32f35.js","static/js/_baseUniq-Bc4pAwPa-445a590c.js","static/js/layout-DnRVtZaa-7d7f0f8d.js","static/js/_basePickBy-sC4qhKfT-705bdb8e.js","static/js/clone-CawhnH1Z-8867395a.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/helper-7WMIPux3-736d9956.js","static/js/copy-BS31ARP0-68b0a49d.js"]), "loader")
      }
    ]);
  }, "registerDefaultLayoutLoaders");
  Uk();
  let fg, mg, yg, Gk, Xk, Zk, Qk, xg, Ms;
  Z_ = g(async (e, t) => {
    if (!(e.layoutAlgorithm in ki))
      throw new Error(`Unknown layout algorithm: ${e.layoutAlgorithm}`);
    const r = ki[e.layoutAlgorithm];
    return (await r.loader()).render(e, t, Yk, {
      algorithm: r.algorithm
    });
  }, "render");
  Q_ = g((e = "", { fallback: t = "dagre" } = {}) => {
    if (e in ki)
      return e;
    if (t in ki)
      return D.warn(`Layout algorithm ${e} is not registered. Using ${t} as fallback.`), t;
    throw new Error(`Both layout algorithms ${e} and ${t} are not registered.`);
  }, "getRegisteredLayoutAlgorithm");
  oh = {
    name: "mermaid",
    version: "11.6.0",
    description: "Markdown-ish syntax for generating flowcharts, mindmaps, sequence diagrams, class diagrams, gantt charts, git graphs and more.",
    type: "module",
    module: "./dist/mermaid.core.mjs",
    types: "./dist/mermaid.d.ts",
    exports: {
      ".": {
        types: "./dist/mermaid.d.ts",
        import: "./dist/mermaid.core.mjs",
        default: "./dist/mermaid.core.mjs"
      },
      "./*": "./*"
    },
    keywords: [
      "diagram",
      "markdown",
      "flowchart",
      "sequence diagram",
      "gantt",
      "class diagram",
      "git graph",
      "mindmap",
      "packet diagram",
      "c4 diagram",
      "er diagram",
      "pie chart",
      "pie diagram",
      "quadrant chart",
      "requirement diagram",
      "graph"
    ],
    scripts: {
      clean: "rimraf dist",
      dev: "pnpm -w dev",
      "docs:code": "typedoc src/defaultConfig.ts src/config.ts src/mermaid.ts && prettier --write ./src/docs/config/setup",
      "docs:build": "rimraf ../../docs && pnpm docs:code && pnpm docs:spellcheck && tsx scripts/docs.cli.mts",
      "docs:verify": "pnpm docs:code && pnpm docs:spellcheck && tsx scripts/docs.cli.mts --verify",
      "docs:pre:vitepress": "pnpm --filter ./src/docs prefetch && rimraf src/vitepress && pnpm docs:code && tsx scripts/docs.cli.mts --vitepress && pnpm --filter ./src/vitepress install --no-frozen-lockfile --ignore-scripts",
      "docs:build:vitepress": "pnpm docs:pre:vitepress && (cd src/vitepress && pnpm run build) && cpy --flat src/docs/landing/ ./src/vitepress/.vitepress/dist/landing",
      "docs:dev": 'pnpm docs:pre:vitepress && concurrently "pnpm --filter ./src/vitepress dev" "tsx scripts/docs.cli.mts --watch --vitepress"',
      "docs:dev:docker": 'pnpm docs:pre:vitepress && concurrently "pnpm --filter ./src/vitepress dev:docker" "tsx scripts/docs.cli.mts --watch --vitepress"',
      "docs:serve": "pnpm docs:build:vitepress && vitepress serve src/vitepress",
      "docs:spellcheck": 'cspell "src/docs/**/*.md"',
      "docs:release-version": "tsx scripts/update-release-version.mts",
      "docs:verify-version": "tsx scripts/update-release-version.mts --verify",
      "types:build-config": "tsx scripts/create-types-from-json-schema.mts",
      "types:verify-config": "tsx scripts/create-types-from-json-schema.mts --verify",
      checkCircle: "npx madge --circular ./src",
      prepublishOnly: "pnpm docs:verify-version"
    },
    repository: {
      type: "git",
      url: "https://github.com/mermaid-js/mermaid"
    },
    author: "Knut Sveidqvist",
    license: "MIT",
    standard: {
      ignore: [
        "**/parser/*.js",
        "dist/**/*.js",
        "cypress/**/*.js"
      ],
      globals: [
        "page"
      ]
    },
    dependencies: {
      "@braintree/sanitize-url": "^7.0.4",
      "@iconify/utils": "^2.1.33",
      "@mermaid-js/parser": "workspace:^",
      "@types/d3": "^7.4.3",
      cytoscape: "^3.29.3",
      "cytoscape-cose-bilkent": "^4.1.0",
      "cytoscape-fcose": "^2.2.0",
      d3: "^7.9.0",
      "d3-sankey": "^0.12.3",
      "dagre-d3-es": "7.0.11",
      dayjs: "^1.11.13",
      dompurify: "^3.2.4",
      katex: "^0.16.9",
      khroma: "^2.1.0",
      "lodash-es": "^4.17.21",
      marked: "^15.0.7",
      roughjs: "^4.6.6",
      stylis: "^4.3.6",
      "ts-dedent": "^2.2.0",
      uuid: "^11.1.0"
    },
    devDependencies: {
      "@adobe/jsonschema2md": "^8.0.2",
      "@iconify/types": "^2.0.0",
      "@types/cytoscape": "^3.21.9",
      "@types/cytoscape-fcose": "^2.2.4",
      "@types/d3-sankey": "^0.12.4",
      "@types/d3-scale": "^4.0.9",
      "@types/d3-scale-chromatic": "^3.1.0",
      "@types/d3-selection": "^3.0.11",
      "@types/d3-shape": "^3.1.7",
      "@types/jsdom": "^21.1.7",
      "@types/katex": "^0.16.7",
      "@types/lodash-es": "^4.17.12",
      "@types/micromatch": "^4.0.9",
      "@types/stylis": "^4.2.7",
      "@types/uuid": "^10.0.0",
      ajv: "^8.17.1",
      chokidar: "^4.0.3",
      concurrently: "^9.1.2",
      "csstree-validator": "^4.0.1",
      globby: "^14.0.2",
      jison: "^0.4.18",
      "js-base64": "^3.7.7",
      jsdom: "^26.0.0",
      "json-schema-to-typescript": "^15.0.4",
      micromatch: "^4.0.8",
      "path-browserify": "^1.0.1",
      prettier: "^3.5.2",
      remark: "^15.0.1",
      "remark-frontmatter": "^5.0.0",
      "remark-gfm": "^4.0.1",
      rimraf: "^6.0.1",
      "start-server-and-test": "^2.0.10",
      "type-fest": "^4.35.0",
      typedoc: "^0.27.8",
      "typedoc-plugin-markdown": "^4.4.2",
      typescript: "~5.7.3",
      "unist-util-flatmap": "^1.0.0",
      "unist-util-visit": "^5.0.0",
      vitepress: "^1.0.2",
      "vitepress-plugin-search": "1.0.4-alpha.22"
    },
    files: [
      "dist/",
      "README.md"
    ],
    publishConfig: {
      access: "public"
    }
  };
  Vk = g((e) => {
    var t;
    const { securityLevel: r } = dt();
    let i = lt("body");
    if (r === "sandbox") {
      const n = ((t = lt(`#i${e}`).node()) == null ? void 0 : t.contentDocument) ?? document;
      i = lt(n.body);
    }
    return i.select(`#${e}`);
  }, "selectSvgElement");
  fg = "comm";
  mg = "rule";
  yg = "decl";
  Gk = "@import";
  Xk = "@namespace";
  Zk = "@keyframes";
  Qk = "@layer";
  xg = Math.abs;
  Ms = String.fromCharCode;
  function bg(e) {
    return e.trim();
  }
  function an(e, t, r) {
    return e.replace(t, r);
  }
  function Kk(e, t, r) {
    return e.indexOf(t, r);
  }
  function Sr(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function Er(e, t, r) {
    return e.slice(t, r);
  }
  function ge(e) {
    return e.length;
  }
  function Jk(e) {
    return e.length;
  }
  function Hi(e, t) {
    return t.push(e), e;
  }
  var na = 1, Or = 1, kg = 0, ne = 0, St = 0, Nr = "";
  function As(e, t, r, i, n, a, s, o) {
    return {
      value: e,
      root: t,
      parent: r,
      type: i,
      props: n,
      children: a,
      line: na,
      column: Or,
      length: s,
      return: "",
      siblings: o
    };
  }
  function tC() {
    return St;
  }
  function eC() {
    return St = ne > 0 ? Sr(Nr, --ne) : 0, Or--, St === 10 && (Or = 1, na--), St;
  }
  function he() {
    return St = ne < kg ? Sr(Nr, ne++) : 0, Or++, St === 10 && (Or = 1, na++), St;
  }
  function Ie() {
    return Sr(Nr, ne);
  }
  function on() {
    return ne;
  }
  function aa(e, t) {
    return Er(Nr, e, t);
  }
  function Ci(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function rC(e) {
    return na = Or = 1, kg = ge(Nr = e), ne = 0, [];
  }
  function iC(e) {
    return Nr = "", e;
  }
  function ja(e) {
    return bg(aa(ne - 1, Mo(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function nC(e) {
    for (; (St = Ie()) && St < 33; )
      he();
    return Ci(e) > 2 || Ci(St) > 3 ? "" : " ";
  }
  function aC(e, t) {
    for (; --t && he() && !(St < 48 || St > 102 || St > 57 && St < 65 || St > 70 && St < 97); )
      ;
    return aa(e, on() + (t < 6 && Ie() == 32 && he() == 32));
  }
  function Mo(e) {
    for (; he(); )
      switch (St) {
        case e:
          return ne;
        case 34:
        case 39:
          e !== 34 && e !== 39 && Mo(St);
          break;
        case 40:
          e === 41 && Mo(e);
          break;
        case 92:
          he();
          break;
      }
    return ne;
  }
  function oC(e, t) {
    for (; he() && e + St !== 57 && !(e + St === 84 && Ie() === 47); )
      ;
    return "/*" + aa(t, ne - 1) + "*" + Ms(e === 47 ? e : he());
  }
  function sC(e) {
    for (; !Ci(Ie()); )
      he();
    return aa(e, ne);
  }
  function lC(e) {
    return iC(sn("", null, null, null, [
      ""
    ], e = rC(e), 0, [
      0
    ], e));
  }
  function sn(e, t, r, i, n, a, s, o, l) {
    for (var h = 0, c = 0, d = s, u = 0, p = 0, f = 0, m = 1, y = 1, x = 1, b = 0, C = "", S = n, k = a, w = i, B = C; y; )
      switch (f = b, b = he()) {
        case 40:
          if (f != 108 && Sr(B, d - 1) == 58) {
            Kk(B += an(ja(b), "&", "&\f"), "&\f", xg(h ? o[h - 1] : 0)) != -1 && (x = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          B += ja(b);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          B += nC(f);
          break;
        case 92:
          B += aC(on() - 1, 7);
          continue;
        case 47:
          switch (Ie()) {
            case 42:
            case 47:
              Hi(hC(oC(he(), on()), t, r, l), l), (Ci(f || 1) == 5 || Ci(Ie() || 1) == 5) && ge(B) && Er(B, -1, void 0) !== " " && (B += " ");
              break;
            default:
              B += "/";
          }
          break;
        case 123 * m:
          o[h++] = ge(B) * x;
        case 125 * m:
        case 59:
        case 0:
          switch (b) {
            case 0:
            case 125:
              y = 0;
            case 59 + c:
              x == -1 && (B = an(B, /\f/g, "")), p > 0 && (ge(B) - d || m === 0 && f === 47) && Hi(p > 32 ? lh(B + ";", i, r, d - 1, l) : lh(an(B, " ", "") + ";", i, r, d - 2, l), l);
              break;
            case 59:
              B += ";";
            default:
              if (Hi(w = sh(B, t, r, h, c, n, o, C, S = [], k = [], d, a), a), b === 123)
                if (c === 0)
                  sn(B, t, w, w, S, a, d, o, k);
                else {
                  switch (u) {
                    case 99:
                      if (Sr(B, 3) === 110)
                        break;
                    case 108:
                      if (Sr(B, 2) === 97)
                        break;
                    default:
                      c = 0;
                    case 100:
                    case 109:
                    case 115:
                  }
                  c ? sn(e, w, w, i && Hi(sh(e, w, w, 0, 0, n, o, C, n, S = [], d, k), k), n, k, d, o, i ? S : k) : sn(B, w, w, w, [
                    ""
                  ], k, 0, o, k);
                }
          }
          h = c = p = 0, m = x = 1, C = B = "", d = s;
          break;
        case 58:
          d = 1 + ge(B), p = f;
        default:
          if (m < 1) {
            if (b == 123)
              --m;
            else if (b == 125 && m++ == 0 && eC() == 125)
              continue;
          }
          switch (B += Ms(b), b * m) {
            case 38:
              x = c > 0 ? 1 : (B += "\f", -1);
              break;
            case 44:
              o[h++] = (ge(B) - 1) * x, x = 1;
              break;
            case 64:
              Ie() === 45 && (B += ja(he())), u = Ie(), c = d = ge(C = B += sC(on())), b++;
              break;
            case 45:
              f === 45 && ge(B) == 2 && (m = 0);
          }
      }
    return a;
  }
  function sh(e, t, r, i, n, a, s, o, l, h, c, d) {
    for (var u = n - 1, p = n === 0 ? a : [
      ""
    ], f = Jk(p), m = 0, y = 0, x = 0; m < i; ++m)
      for (var b = 0, C = Er(e, u + 1, u = xg(y = s[m])), S = e; b < f; ++b)
        (S = bg(y > 0 ? p[b] + " " + C : an(C, /&\f/g, p[b]))) && (l[x++] = S);
    return As(e, t, r, n === 0 ? mg : o, l, h, c, d);
  }
  function hC(e, t, r, i) {
    return As(e, t, r, fg, Ms(tC()), Er(e, 2, -2), 0, i);
  }
  function lh(e, t, r, i, n) {
    return As(e, t, r, yg, Er(e, 0, i), Er(e, i + 1, -1), i, n);
  }
  function Ao(e, t) {
    for (var r = "", i = 0; i < e.length; i++)
      r += t(e[i], i, e, t) || "";
    return r;
  }
  function cC(e, t, r, i) {
    switch (e.type) {
      case Qk:
        if (e.children.length)
          break;
      case Gk:
      case Xk:
      case yg:
        return e.return = e.return || e.value;
      case fg:
        return "";
      case Zk:
        return e.return = e.value + "{" + Ao(e.children, i) + "}";
      case mg:
        if (!ge(e.value = e.props.join(",")))
          return "";
    }
    return ge(r = Ao(e.children, i)) ? e.return = e.value + "{" + r + "}" : "";
  }
  var dC = tu(Object.keys, Object), uC = Object.prototype, pC = uC.hasOwnProperty;
  gC = function(e) {
    if (!Xn(e))
      return dC(e);
    var t = [];
    for (var r in Object(e))
      pC.call(e, r) && r != "constructor" && t.push(r);
    return t;
  };
  let Fo, $o, Oo, hh, fC, ch, dh, uh, ph, mC, yC, xC, bC, kC;
  Fo = hr(xe, "DataView");
  $o = hr(xe, "Promise");
  Eo = hr(xe, "Set");
  Oo = hr(xe, "WeakMap");
  hh = "[object Map]";
  fC = "[object Object]";
  ch = "[object Promise]";
  dh = "[object Set]";
  uh = "[object WeakMap]";
  ph = "[object DataView]";
  mC = lr(Fo);
  yC = lr(bi);
  xC = lr($o);
  bC = lr(Eo);
  kC = lr(Oo);
  Qe = Ir;
  (Fo && Qe(new Fo(new ArrayBuffer(1))) != ph || bi && Qe(new bi()) != hh || $o && Qe($o.resolve()) != ch || Eo && Qe(new Eo()) != dh || Oo && Qe(new Oo()) != uh) && (Qe = function(e) {
    var t = Ir(e), r = t == fC ? e.constructor : void 0, i = r ? lr(r) : "";
    if (i)
      switch (i) {
        case mC:
          return ph;
        case yC:
          return hh;
        case xC:
          return ch;
        case bC:
          return dh;
        case kC:
          return uh;
      }
    return t;
  });
  var CC = "[object Map]", vC = "[object Set]", wC = Object.prototype, _C = wC.hasOwnProperty;
  gh = function(e) {
    if (e == null)
      return true;
    if (Zn(e) && (Tn(e) || typeof e == "string" || typeof e.splice == "function" || ss(e) || ls(e) || Sn(e)))
      return !e.length;
    var t = Qe(e);
    if (t == CC || t == vC)
      return !e.size;
    if (Xn(e))
      return !gC(e).length;
    for (var r in e)
      if (_C.call(e, r))
        return false;
    return true;
  };
  var Cg = "c4", SC = g((e) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e), "detector"), TC = g(async () => {
    const { diagram: e } = await mt(() => import("./c4Diagram-VJAJSXHY-Cfp79fMA-721cb99d.js"), ["static/js/c4Diagram-VJAJSXHY-Cfp79fMA-721cb99d.js","static/js/chunk-D6G4REZN-AYZPaegw-e36902a4.js","static/js/helper-7WMIPux3-736d9956.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: Cg,
      diagram: e
    };
  }, "loader"), BC = {
    id: Cg,
    detector: SC,
    loader: TC
  }, LC = BC, vg = "flowchart", MC = g((e, t) => {
    var r, i;
    return ((r = t == null ? void 0 : t.flowchart) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" || ((i = t == null ? void 0 : t.flowchart) == null ? void 0 : i.defaultRenderer) === "elk" ? false : /^\s*graph/.test(e);
  }, "detector"), AC = g(async () => {
    const { diagram: e } = await mt(() => import("./flowDiagram-4HSFHLVR-CKX8T_JP-e63787b1.js"), ["static/js/flowDiagram-4HSFHLVR-CKX8T_JP-e63787b1.js","static/js/chunk-RZ5BOZE2-mpnkmZCx-b889ba51.js","static/js/helper-7WMIPux3-736d9956.js","static/js/channel-BY04PUnR-6d826dde.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: vg,
      diagram: e
    };
  }, "loader"), FC = {
    id: vg,
    detector: MC,
    loader: AC
  }, $C = FC, wg = "flowchart-v2", EC = g((e, t) => {
    var r, i, n;
    return ((r = t == null ? void 0 : t.flowchart) == null ? void 0 : r.defaultRenderer) === "dagre-d3" ? false : (((i = t == null ? void 0 : t.flowchart) == null ? void 0 : i.defaultRenderer) === "elk" && (t.layout = "elk"), /^\s*graph/.test(e) && ((n = t == null ? void 0 : t.flowchart) == null ? void 0 : n.defaultRenderer) === "dagre-wrapper" ? true : /^\s*flowchart/.test(e));
  }, "detector"), OC = g(async () => {
    const { diagram: e } = await mt(() => import("./flowDiagram-4HSFHLVR-CKX8T_JP-e63787b1.js"), ["static/js/flowDiagram-4HSFHLVR-CKX8T_JP-e63787b1.js","static/js/chunk-RZ5BOZE2-mpnkmZCx-b889ba51.js","static/js/helper-7WMIPux3-736d9956.js","static/js/channel-BY04PUnR-6d826dde.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: wg,
      diagram: e
    };
  }, "loader"), DC = {
    id: wg,
    detector: EC,
    loader: OC
  }, IC = DC, _g = "er", PC = g((e) => /^\s*erDiagram/.test(e), "detector"), zC = g(async () => {
    const { diagram: e } = await mt(() => import("./erDiagram-Q7BY3M3F-CQ8Lz__E-98d908af.js"), ["static/js/erDiagram-Q7BY3M3F-CQ8Lz__E-98d908af.js","static/js/chunk-RZ5BOZE2-mpnkmZCx-b889ba51.js","static/js/helper-7WMIPux3-736d9956.js","static/js/channel-BY04PUnR-6d826dde.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: _g,
      diagram: e
    };
  }, "loader"), RC = {
    id: _g,
    detector: PC,
    loader: zC
  }, NC = RC, Sg = "gitGraph", qC = g((e) => /^\s*gitGraph/.test(e), "detector"), jC = g(async () => {
    const { diagram: e } = await mt(() => import("./gitGraphDiagram-7IBYFJ6S-3GXB7T1a-35ebbf6f.js"), ["static/js/gitGraphDiagram-7IBYFJ6S-3GXB7T1a-35ebbf6f.js","static/js/chunk-4BMEZGHF-Bo7Lw3Zg-cc1263d3.js","static/js/chunk-XZIHB7SX-BpJ6eI-3-681631a4.js","static/js/mermaid-parser.core-CNGL96jf-268968b7.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/_baseUniq-Bc4pAwPa-445a590c.js","static/js/_basePickBy-sC4qhKfT-705bdb8e.js","static/js/clone-CawhnH1Z-8867395a.js","static/js/helper-7WMIPux3-736d9956.js","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: Sg,
      diagram: e
    };
  }, "loader"), WC = {
    id: Sg,
    detector: qC,
    loader: jC
  }, HC = WC, Tg = "gantt", YC = g((e) => /^\s*gantt/.test(e), "detector"), UC = g(async () => {
    const { diagram: e } = await mt(() => import("./ganttDiagram-APWFNJXF-DMVinqOr-96652813.js"), ["static/js/ganttDiagram-APWFNJXF-DMVinqOr-96652813.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/helper-7WMIPux3-736d9956.js","static/js/linear-DRFqyOtL-feda5bd6.js","static/js/init-DjUOC4st-cac434d1.js","static/js/min-DLf0xQMm-9aab427e.js","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: Tg,
      diagram: e
    };
  }, "loader"), VC = {
    id: Tg,
    detector: YC,
    loader: UC
  }, GC = VC, Bg = "info", XC = g((e) => /^\s*info/.test(e), "detector"), ZC = g(async () => {
    const { diagram: e } = await mt(() => import("./infoDiagram-PH2N3AL5-CmIz_rS6-74d26ec8.js"), ["static/js/infoDiagram-PH2N3AL5-CmIz_rS6-74d26ec8.js","static/js/mermaid-parser.core-CNGL96jf-268968b7.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/_baseUniq-Bc4pAwPa-445a590c.js","static/js/_basePickBy-sC4qhKfT-705bdb8e.js","static/js/clone-CawhnH1Z-8867395a.js","static/js/helper-7WMIPux3-736d9956.js","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: Bg,
      diagram: e
    };
  }, "loader"), QC = {
    id: Bg,
    detector: XC,
    loader: ZC
  }, Lg = "pie", KC = g((e) => /^\s*pie/.test(e), "detector"), JC = g(async () => {
    const { diagram: e } = await mt(() => import("./pieDiagram-IB7DONF6-B9a8I_kR-cad590dd.js"), ["static/js/pieDiagram-IB7DONF6-B9a8I_kR-cad590dd.js","static/js/chunk-4BMEZGHF-Bo7Lw3Zg-cc1263d3.js","static/js/mermaid-parser.core-CNGL96jf-268968b7.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/_baseUniq-Bc4pAwPa-445a590c.js","static/js/_basePickBy-sC4qhKfT-705bdb8e.js","static/js/clone-CawhnH1Z-8867395a.js","static/js/helper-7WMIPux3-736d9956.js","static/js/arc-6Ea6x5Wp-3ffaeddb.js","static/js/ordinal-DfAQgscy-dbc3c131.js","static/js/init-DjUOC4st-cac434d1.js","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: Lg,
      diagram: e
    };
  }, "loader"), tv = {
    id: Lg,
    detector: KC,
    loader: JC
  }, Mg = "quadrantChart", ev = g((e) => /^\s*quadrantChart/.test(e), "detector"), rv = g(async () => {
    const { diagram: e } = await mt(() => import("./quadrantDiagram-7GDLP6J5-DdYK6qWC-aacf5ea6.js"), ["static/js/quadrantDiagram-7GDLP6J5-DdYK6qWC-aacf5ea6.js","static/js/helper-7WMIPux3-736d9956.js","static/js/linear-DRFqyOtL-feda5bd6.js","static/js/init-DjUOC4st-cac434d1.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: Mg,
      diagram: e
    };
  }, "loader"), iv = {
    id: Mg,
    detector: ev,
    loader: rv
  }, nv = iv, Ag = "xychart", av = g((e) => /^\s*xychart-beta/.test(e), "detector"), ov = g(async () => {
    const { diagram: e } = await mt(() => import("./xychartDiagram-VJFVF3MP-BYAU5rlp-6a802800.js"), ["static/js/xychartDiagram-VJFVF3MP-BYAU5rlp-6a802800.js","static/js/helper-7WMIPux3-736d9956.js","static/js/init-DjUOC4st-cac434d1.js","static/js/ordinal-DfAQgscy-dbc3c131.js","static/js/linear-DRFqyOtL-feda5bd6.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: Ag,
      diagram: e
    };
  }, "loader"), sv = {
    id: Ag,
    detector: av,
    loader: ov
  }, lv = sv, Fg = "requirement", hv = g((e) => /^\s*requirement(Diagram)?/.test(e), "detector"), cv = g(async () => {
    const { diagram: e } = await mt(() => import("./requirementDiagram-KVF5MWMF-ByvHGzIT-abd6df16.js"), ["static/js/requirementDiagram-KVF5MWMF-ByvHGzIT-abd6df16.js","static/js/chunk-RZ5BOZE2-mpnkmZCx-b889ba51.js","static/js/helper-7WMIPux3-736d9956.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: Fg,
      diagram: e
    };
  }, "loader"), dv = {
    id: Fg,
    detector: hv,
    loader: cv
  }, uv = dv, $g = "sequence", pv = g((e) => /^\s*sequenceDiagram/.test(e), "detector"), gv = g(async () => {
    const { diagram: e } = await mt(() => import("./sequenceDiagram-X6HHIX6F-Cqm_WHRg-54742608.js"), ["static/js/sequenceDiagram-X6HHIX6F-Cqm_WHRg-54742608.js","static/js/chunk-D6G4REZN-AYZPaegw-e36902a4.js","static/js/chunk-XZIHB7SX-BpJ6eI-3-681631a4.js","static/js/helper-7WMIPux3-736d9956.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: $g,
      diagram: e
    };
  }, "loader"), fv = {
    id: $g,
    detector: pv,
    loader: gv
  }, mv = fv, Eg = "class", yv = g((e, t) => {
    var r;
    return ((r = t == null ? void 0 : t.class) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" ? false : /^\s*classDiagram/.test(e);
  }, "detector"), xv = g(async () => {
    const { diagram: e } = await mt(() => import("./classDiagram-GIVACNV2-BeOe6uk8-9402bdb1.js"), ["static/js/classDiagram-GIVACNV2-BeOe6uk8-9402bdb1.js","static/js/chunk-A2AXSNBT-CnAdYFlN-08fade91.js","static/js/chunk-RZ5BOZE2-mpnkmZCx-b889ba51.js","static/js/helper-7WMIPux3-736d9956.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: Eg,
      diagram: e
    };
  }, "loader"), bv = {
    id: Eg,
    detector: yv,
    loader: xv
  }, kv = bv, Og = "classDiagram", Cv = g((e, t) => {
    var r;
    return /^\s*classDiagram/.test(e) && ((r = t == null ? void 0 : t.class) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" ? true : /^\s*classDiagram-v2/.test(e);
  }, "detector"), vv = g(async () => {
    const { diagram: e } = await mt(() => import("./classDiagram-v2-COTLJTTW-BeOe6uk8-9402bdb1.js"), ["static/js/classDiagram-v2-COTLJTTW-BeOe6uk8-9402bdb1.js","static/js/chunk-A2AXSNBT-CnAdYFlN-08fade91.js","static/js/chunk-RZ5BOZE2-mpnkmZCx-b889ba51.js","static/js/helper-7WMIPux3-736d9956.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: Og,
      diagram: e
    };
  }, "loader"), wv = {
    id: Og,
    detector: Cv,
    loader: vv
  }, _v = wv, Dg = "state", Sv = g((e, t) => {
    var r;
    return ((r = t == null ? void 0 : t.state) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper" ? false : /^\s*stateDiagram/.test(e);
  }, "detector"), Tv = g(async () => {
    const { diagram: e } = await mt(() => import("./stateDiagram-DGXRK772-ii8DucS0-862ad63d.js"), ["static/js/stateDiagram-DGXRK772-ii8DucS0-862ad63d.js","static/js/chunk-AEK57VVT-BRLTIX_x-30dbbfd9.js","static/js/chunk-RZ5BOZE2-mpnkmZCx-b889ba51.js","static/js/helper-7WMIPux3-736d9956.js","static/js/graph-BlpFl8hT-e0a32f35.js","static/js/_baseUniq-Bc4pAwPa-445a590c.js","static/js/layout-DnRVtZaa-7d7f0f8d.js","static/js/_basePickBy-sC4qhKfT-705bdb8e.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: Dg,
      diagram: e
    };
  }, "loader"), Bv = {
    id: Dg,
    detector: Sv,
    loader: Tv
  }, Lv = Bv, Ig = "stateDiagram", Mv = g((e, t) => {
    var r;
    return !!(/^\s*stateDiagram-v2/.test(e) || /^\s*stateDiagram/.test(e) && ((r = t == null ? void 0 : t.state) == null ? void 0 : r.defaultRenderer) === "dagre-wrapper");
  }, "detector"), Av = g(async () => {
    const { diagram: e } = await mt(() => import("./stateDiagram-v2-YXO3MK2T-H0pi9OYg-bff965b3.js"), ["static/js/stateDiagram-v2-YXO3MK2T-H0pi9OYg-bff965b3.js","static/js/chunk-AEK57VVT-BRLTIX_x-30dbbfd9.js","static/js/chunk-RZ5BOZE2-mpnkmZCx-b889ba51.js","static/js/helper-7WMIPux3-736d9956.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: Ig,
      diagram: e
    };
  }, "loader"), Fv = {
    id: Ig,
    detector: Mv,
    loader: Av
  }, $v = Fv, Pg = "journey", Ev = g((e) => /^\s*journey/.test(e), "detector"), Ov = g(async () => {
    const { diagram: e } = await mt(() => import("./journeyDiagram-U35MCT3I-Aqt3_X0t-e0c64261.js"), ["static/js/journeyDiagram-U35MCT3I-Aqt3_X0t-e0c64261.js","static/js/chunk-D6G4REZN-AYZPaegw-e36902a4.js","static/js/helper-7WMIPux3-736d9956.js","static/js/arc-6Ea6x5Wp-3ffaeddb.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: Pg,
      diagram: e
    };
  }, "loader"), Dv = {
    id: Pg,
    detector: Ev,
    loader: Ov
  }, Iv = Dv, Pv = g((e, t, r) => {
    D.debug(`rendering svg for syntax error
`);
    const i = Vk(t), n = i.append("g");
    i.attr("viewBox", "0 0 2412 512"), Vh(i, 100, 512, true), n.append("path").attr("class", "error-icon").attr("d", "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"), n.append("path").attr("class", "error-icon").attr("d", "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"), n.append("path").attr("class", "error-icon").attr("d", "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"), n.append("path").attr("class", "error-icon").attr("d", "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"), n.append("path").attr("class", "error-icon").attr("d", "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"), n.append("path").attr("class", "error-icon").attr("d", "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"), n.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), n.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${r}`);
  }, "draw"), zg = {
    draw: Pv
  }, zv = zg, Rv = {
    db: {},
    renderer: zg,
    parser: {
      parse: g(() => {
      }, "parse")
    }
  }, Nv = Rv, Rg = "flowchart-elk", qv = g((e, t = {}) => {
    var r;
    return /^\s*flowchart-elk/.test(e) || /^\s*flowchart|graph/.test(e) && ((r = t == null ? void 0 : t.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? (t.layout = "elk", true) : false;
  }, "detector"), jv = g(async () => {
    const { diagram: e } = await mt(() => import("./flowDiagram-4HSFHLVR-CKX8T_JP-e63787b1.js"), ["static/js/flowDiagram-4HSFHLVR-CKX8T_JP-e63787b1.js","static/js/chunk-RZ5BOZE2-mpnkmZCx-b889ba51.js","static/js/helper-7WMIPux3-736d9956.js","static/js/channel-BY04PUnR-6d826dde.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: Rg,
      diagram: e
    };
  }, "loader"), Wv = {
    id: Rg,
    detector: qv,
    loader: jv
  }, Hv = Wv, Ng = "timeline", Yv = g((e) => /^\s*timeline/.test(e), "detector"), Uv = g(async () => {
    const { diagram: e } = await mt(() => import("./timeline-definition-BDJGKUSR-B-UW6Gps-9c00dab2.js"), ["static/js/timeline-definition-BDJGKUSR-B-UW6Gps-9c00dab2.js","static/js/helper-7WMIPux3-736d9956.js","static/js/arc-6Ea6x5Wp-3ffaeddb.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: Ng,
      diagram: e
    };
  }, "loader"), Vv = {
    id: Ng,
    detector: Yv,
    loader: Uv
  }, Gv = Vv, qg = "mindmap", Xv = g((e) => /^\s*mindmap/.test(e), "detector"), Zv = g(async () => {
    const { diagram: e } = await mt(() => import("./mindmap-definition-ALO5MXBD-DUhYmv1v-f320fec9.js"), ["static/js/mindmap-definition-ALO5MXBD-DUhYmv1v-f320fec9.js","static/js/cytoscape.esm-Swd9B-1A-1060bb3e.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/helper-7WMIPux3-736d9956.js","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: qg,
      diagram: e
    };
  }, "loader"), Qv = {
    id: qg,
    detector: Xv,
    loader: Zv
  }, Kv = Qv, jg = "kanban", Jv = g((e) => /^\s*kanban/.test(e), "detector"), tw = g(async () => {
    const { diagram: e } = await mt(() => import("./kanban-definition-NDS4AKOZ-4OHb06Bt-09601992.js"), ["static/js/kanban-definition-NDS4AKOZ-4OHb06Bt-09601992.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/helper-7WMIPux3-736d9956.js","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: jg,
      diagram: e
    };
  }, "loader"), ew = {
    id: jg,
    detector: Jv,
    loader: tw
  }, rw = ew, Wg = "sankey", iw = g((e) => /^\s*sankey-beta/.test(e), "detector"), nw = g(async () => {
    const { diagram: e } = await mt(() => import("./sankeyDiagram-QLVOVGJD-lixt867K-5fe0025e.js"), ["static/js/sankeyDiagram-QLVOVGJD-lixt867K-5fe0025e.js","static/js/helper-7WMIPux3-736d9956.js","static/js/ordinal-DfAQgscy-dbc3c131.js","static/js/init-DjUOC4st-cac434d1.js","static/js/colors-BD7LS4qt-ca223d59.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: Wg,
      diagram: e
    };
  }, "loader"), aw = {
    id: Wg,
    detector: iw,
    loader: nw
  }, ow = aw, Hg = "packet", sw = g((e) => /^\s*packet-beta/.test(e), "detector"), lw = g(async () => {
    const { diagram: e } = await mt(() => import("./diagram-VNBRO52H-B6wDDMHH-9d69727f.js"), ["static/js/diagram-VNBRO52H-B6wDDMHH-9d69727f.js","static/js/chunk-4BMEZGHF-Bo7Lw3Zg-cc1263d3.js","static/js/mermaid-parser.core-CNGL96jf-268968b7.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/_baseUniq-Bc4pAwPa-445a590c.js","static/js/_basePickBy-sC4qhKfT-705bdb8e.js","static/js/clone-CawhnH1Z-8867395a.js","static/js/helper-7WMIPux3-736d9956.js","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: Hg,
      diagram: e
    };
  }, "loader"), hw = {
    id: Hg,
    detector: sw,
    loader: lw
  }, Yg = "radar", cw = g((e) => /^\s*radar-beta/.test(e), "detector"), dw = g(async () => {
    const { diagram: e } = await mt(() => import("./diagram-SSKATNLV-BxTOMe4J-874d3b55.js"), ["static/js/diagram-SSKATNLV-BxTOMe4J-874d3b55.js","static/js/chunk-4BMEZGHF-Bo7Lw3Zg-cc1263d3.js","static/js/mermaid-parser.core-CNGL96jf-268968b7.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/_baseUniq-Bc4pAwPa-445a590c.js","static/js/_basePickBy-sC4qhKfT-705bdb8e.js","static/js/clone-CawhnH1Z-8867395a.js","static/js/helper-7WMIPux3-736d9956.js","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: Yg,
      diagram: e
    };
  }, "loader"), uw = {
    id: Yg,
    detector: cw,
    loader: dw
  }, Ug = "block", pw = g((e) => /^\s*block-beta/.test(e), "detector"), gw = g(async () => {
    const { diagram: e } = await mt(() => import("./blockDiagram-JOT3LUYC-BX5yKVBz-119f0fa1.js"), ["static/js/blockDiagram-JOT3LUYC-BX5yKVBz-119f0fa1.js","static/js/clone-CawhnH1Z-8867395a.js","static/js/_baseUniq-Bc4pAwPa-445a590c.js","static/js/helper-7WMIPux3-736d9956.js","static/js/graph-BlpFl8hT-e0a32f35.js","static/js/channel-BY04PUnR-6d826dde.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: Ug,
      diagram: e
    };
  }, "loader"), fw = {
    id: Ug,
    detector: pw,
    loader: gw
  }, mw = fw, Vg = "architecture", yw = g((e) => /^\s*architecture/.test(e), "detector"), xw = g(async () => {
    const { diagram: e } = await mt(() => import("./architectureDiagram-IEHRJDOE-7A4i_-7k-45a144c0.js"), ["static/js/architectureDiagram-IEHRJDOE-7A4i_-7k-45a144c0.js","static/js/chunk-4BMEZGHF-Bo7Lw3Zg-cc1263d3.js","static/js/chunk-XZIHB7SX-BpJ6eI-3-681631a4.js","static/js/mermaid-parser.core-CNGL96jf-268968b7.js","static/js/index-7b696e01.js","static/css/index-b325ff0f.css","static/js/_baseUniq-Bc4pAwPa-445a590c.js","static/js/_basePickBy-sC4qhKfT-705bdb8e.js","static/js/clone-CawhnH1Z-8867395a.js","static/js/cytoscape.esm-Swd9B-1A-1060bb3e.js","static/js/helper-7WMIPux3-736d9956.js","static/js/copy-BS31ARP0-68b0a49d.js"]);
    return {
      id: Vg,
      diagram: e
    };
  }, "loader"), bw = {
    id: Vg,
    detector: yw,
    loader: xw
  }, kw = bw, fh = false, oa = g(() => {
    fh || (fh = true, dn("error", Nv, (e) => e.toLowerCase().trim() === "error"), dn("---", {
      db: {
        clear: g(() => {
        }, "clear")
      },
      styles: {},
      renderer: {
        draw: g(() => {
        }, "draw")
      },
      parser: {
        parse: g(() => {
          throw new Error("Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks");
        }, "parse")
      },
      init: g(() => null, "init")
    }, (e) => e.toLowerCase().trimStart().startsWith("---")), Oh(LC, rw, _v, kv, NC, GC, QC, tv, uv, mv, Hv, IC, $C, Kv, Gv, HC, $v, Lv, Iv, nv, ow, hw, lv, mw, kw, uw));
  }, "addDiagrams"), Cw = g(async () => {
    D.debug("Loading registered diagrams");
    const e = (await Promise.allSettled(Object.entries(Br).map(async ([t, { detector: r, loader: i }]) => {
      if (i)
        try {
          to(t);
        } catch {
          try {
            const { diagram: n, id: a } = await i();
            dn(a, n, r);
          } catch (n) {
            throw D.error(`Failed to load external diagram with key ${t}. Removing from detectors.`), delete Br[t], n;
          }
        }
    }))).filter((t) => t.status === "rejected");
    if (e.length > 0) {
      D.error(`Failed to load ${e.length} external diagrams`);
      for (const t of e)
        D.error(t);
      throw new Error(`Failed to load ${e.length} external diagrams`);
    }
  }, "loadRegisteredDiagrams"), vw = "graphics-document document";
  function Gg(e, t) {
    e.attr("role", vw), t !== "" && e.attr("aria-roledescription", t);
  }
  g(Gg, "setA11yDiagramInfo");
  function Xg(e, t, r, i) {
    if (e.insert !== void 0) {
      if (r) {
        const n = `chart-desc-${i}`;
        e.attr("aria-describedby", n), e.insert("desc", ":first-child").attr("id", n).text(r);
      }
      if (t) {
        const n = `chart-title-${i}`;
        e.attr("aria-labelledby", n), e.insert("title", ":first-child").attr("id", n).text(t);
      }
    }
  }
  g(Xg, "addSVGa11yTitleDescription");
  var Yi, Do = (Yi = class {
    constructor(e, t, r, i, n) {
      this.type = e, this.text = t, this.db = r, this.parser = i, this.renderer = n;
    }
    static async fromText(e, t = {}) {
      var r, i;
      const n = Kt(), a = Ro(e, n);
      e = W1(e) + `
`;
      try {
        to(a);
      } catch {
        const c = m0(a);
        if (!c)
          throw new Eh(`Diagram ${a} not found.`);
        const { id: d, diagram: u } = await c();
        dn(d, u);
      }
      const { db: s, parser: o, renderer: l, init: h } = to(a);
      return o.parser && (o.parser.yy = s), (r = s.clear) == null || r.call(s), h == null ? void 0 : h(n), t.title && ((i = s.setDiagramTitle) == null || i.call(s, t.title)), await o.parse(e), new Yi(a, e, s, o, l);
    }
    async render(e, t) {
      await this.renderer.draw(this.text, e, t, this);
    }
    getParser() {
      return this.parser;
    }
    getType() {
      return this.type;
    }
  }, g(Yi, "Diagram"), Yi), mh = [], ww = g(() => {
    mh.forEach((e) => {
      e();
    }), mh = [];
  }, "attachFunctions"), _w = g((e) => e.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(), "cleanupComments");
  function Zg(e) {
    const t = e.match($h);
    if (!t)
      return {
        text: e,
        metadata: {}
      };
    let r = fy(t[1], {
      schema: gy
    }) ?? {};
    r = typeof r == "object" && !Array.isArray(r) ? r : {};
    const i = {};
    return r.displayMode && (i.displayMode = r.displayMode.toString()), r.title && (i.title = r.title.toString()), r.config && (i.config = r.config), {
      text: e.slice(t[0].length),
      metadata: i
    };
  }
  g(Zg, "extractFrontMatter");
  var Sw = g((e) => e.replace(/\r\n?/g, `
`).replace(/<(\w+)([^>]*)>/g, (t, r, i) => "<" + r + i.replace(/="([^"]*)"/g, "='$1'") + ">"), "cleanupText"), Tw = g((e) => {
    const { text: t, metadata: r } = Zg(e), { displayMode: i, title: n, config: a = {} } = r;
    return i && (a.gantt || (a.gantt = {}), a.gantt.displayMode = i), {
      title: n,
      config: a,
      text: t
    };
  }, "processFrontmatter"), Bw = g((e) => {
    const t = fe.detectInit(e) ?? {}, r = fe.detectDirective(e, "wrap");
    return Array.isArray(r) ? t.wrap = r.some(({ type: i }) => i === "wrap") : (r == null ? void 0 : r.type) === "wrap" && (t.wrap = true), {
      text: A1(e),
      directive: t
    };
  }, "processDirectives");
  function Fs(e) {
    const t = Sw(e), r = Tw(t), i = Bw(r.text), n = gs(r.config, i.directive);
    return e = _w(i.text), {
      code: e,
      title: r.title,
      config: n
    };
  }
  g(Fs, "preprocessDiagram");
  function Qg(e) {
    const t = new TextEncoder().encode(e), r = Array.from(t, (i) => String.fromCodePoint(i)).join("");
    return btoa(r);
  }
  g(Qg, "toBase64");
  var Lw = 5e4, Mw = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", Aw = "sandbox", Fw = "loose", $w = "http://www.w3.org/2000/svg", Ew = "http://www.w3.org/1999/xlink", Ow = "http://www.w3.org/1999/xhtml", Dw = "100%", Iw = "100%", Pw = "border:0;margin:0;", zw = "margin:0", Rw = "allow-top-navigation-by-user-activation allow-popups", Nw = 'The "iframe" tag is not supported by your browser.', qw = [
    "foreignobject"
  ], jw = [
    "dominant-baseline"
  ];
  function $s(e) {
    const t = Fs(e);
    return hn(), $0(t.config ?? {}), t;
  }
  g($s, "processAndSetConfigs");
  async function Kg(e, t) {
    oa();
    try {
      const { code: r, config: i } = $s(e);
      return {
        diagramType: (await tf(r)).type,
        config: i
      };
    } catch (r) {
      if (t != null && t.suppressErrors)
        return false;
      throw r;
    }
  }
  g(Kg, "parse");
  var yh = g((e, t, r = []) => `
.${e} ${t} { ${r.join(" !important; ")} !important; }`, "cssImportantStyles"), Ww = g((e, t = /* @__PURE__ */ new Map()) => {
    var r;
    let i = "";
    if (e.themeCSS !== void 0 && (i += `
${e.themeCSS}`), e.fontFamily !== void 0 && (i += `
:root { --mermaid-font-family: ${e.fontFamily}}`), e.altFontFamily !== void 0 && (i += `
:root { --mermaid-alt-font-family: ${e.altFontFamily}}`), t instanceof Map) {
      const n = e.htmlLabels ?? ((r = e.flowchart) == null ? void 0 : r.htmlLabels) ? [
        "> *",
        "span"
      ] : [
        "rect",
        "polygon",
        "ellipse",
        "circle",
        "path"
      ];
      t.forEach((a) => {
        gh(a.styles) || n.forEach((s) => {
          i += yh(a.id, s, a.styles);
        }), gh(a.textStyles) || (i += yh(a.id, "tspan", ((a == null ? void 0 : a.textStyles) || []).map((s) => s.replace("color", "fill"))));
      });
    }
    return i;
  }, "createCssStyles"), Hw = g((e, t, r, i) => {
    const n = Ww(e, r), a = Q0(t, n, e.themeVariables);
    return Ao(lC(`${i}{${a}}`), cC);
  }, "createUserStyles"), Yw = g((e = "", t, r) => {
    let i = e;
    return !r && !t && (i = i.replace(/marker-end="url\([\d+./:=?A-Za-z-]*?#/g, 'marker-end="url(#')), i = cr(i), i = i.replace(/<br>/g, "<br/>"), i;
  }, "cleanUpSvgCode"), Uw = g((e = "", t) => {
    var r, i;
    const n = (i = (r = t == null ? void 0 : t.viewBox) == null ? void 0 : r.baseVal) != null && i.height ? t.viewBox.baseVal.height + "px" : Iw, a = Qg(`<body style="${zw}">${e}</body>`);
    return `<iframe style="width:${Dw};height:${n};${Pw}" src="data:text/html;charset=UTF-8;base64,${a}" sandbox="${Rw}">
  ${Nw}
</iframe>`;
  }, "putIntoIFrame"), xh = g((e, t, r, i, n) => {
    const a = e.append("div");
    a.attr("id", r), i && a.attr("style", i);
    const s = a.append("svg").attr("id", t).attr("width", "100%").attr("xmlns", $w);
    return n && s.attr("xmlns:xlink", n), s.append("g"), e;
  }, "appendDivSvgG");
  function Io(e, t) {
    return e.append("iframe").attr("id", t).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
  }
  g(Io, "sandboxedIframe");
  var Vw = g((e, t, r, i) => {
    var n, a, s;
    (n = e.getElementById(t)) == null || n.remove(), (a = e.getElementById(r)) == null || a.remove(), (s = e.getElementById(i)) == null || s.remove();
  }, "removeExistingElements"), Gw = g(async function(e, t, r) {
    var i, n, a, s, o, l;
    oa();
    const h = $s(t);
    t = h.code;
    const c = Kt();
    D.debug(c), t.length > ((c == null ? void 0 : c.maxTextSize) ?? Lw) && (t = Mw);
    const d = "#" + e, u = "i" + e, p = "#" + u, f = "d" + e, m = "#" + f, y = g(() => {
      const A = lt(b ? p : m).node();
      A && "remove" in A && A.remove();
    }, "removeTempElements");
    let x = lt("body");
    const b = c.securityLevel === Aw, C = c.securityLevel === Fw, S = c.fontFamily;
    if (r !== void 0) {
      if (r && (r.innerHTML = ""), b) {
        const A = Io(lt(r), u);
        x = lt(A.nodes()[0].contentDocument.body), x.node().style.margin = 0;
      } else
        x = lt(r);
      xh(x, e, f, `font-family: ${S}`, Ew);
    } else {
      if (Vw(document, e, f, u), b) {
        const A = Io(lt("body"), u);
        x = lt(A.nodes()[0].contentDocument.body), x.node().style.margin = 0;
      } else
        x = lt("body");
      xh(x, e, f);
    }
    let k, w;
    try {
      k = await Do.fromText(t, {
        title: h.title
      });
    } catch (A) {
      if (c.suppressErrorRendering)
        throw y(), A;
      k = await Do.fromText("error"), w = A;
    }
    const B = x.select(m).node(), N = k.type, j = B.firstChild, O = j.firstChild, $ = (n = (i = k.renderer).getClasses) == null ? void 0 : n.call(i, t, k), W = Hw(c, N, $, d), P = document.createElement("style");
    P.innerHTML = W, j.insertBefore(P, O);
    try {
      await k.renderer.draw(t, e, oh.version, k);
    } catch (A) {
      throw c.suppressErrorRendering ? y() : zv.draw(t, e, oh.version), A;
    }
    const L = x.select(`${m} svg`), M = (s = (a = k.db).getAccTitle) == null ? void 0 : s.call(a), T = (l = (o = k.db).getAccDescription) == null ? void 0 : l.call(o);
    ef(N, L, M, T), x.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns", Ow);
    let E = x.select(m).node().innerHTML;
    if (D.debug("config.arrowMarkerAbsolute", c.arrowMarkerAbsolute), E = Yw(E, b, Mt(c.arrowMarkerAbsolute)), b) {
      const A = x.select(m + " svg").node();
      E = Uw(E, A);
    } else
      C || (E = Tr.sanitize(E, {
        ADD_TAGS: qw,
        ADD_ATTR: jw,
        HTML_INTEGRATION_POINTS: {
          foreignobject: true
        }
      }));
    if (ww(), w)
      throw w;
    return y(), {
      diagramType: N,
      svg: E,
      bindFunctions: k.db.bindFunctions
    };
  }, "render");
  function Jg(e = {}) {
    var t;
    const r = It({}, e);
    r != null && r.fontFamily && !((t = r.themeVariables) != null && t.fontFamily) && (r.themeVariables || (r.themeVariables = {}), r.themeVariables.fontFamily = r.fontFamily), A0(r), r != null && r.theme && r.theme in Me ? r.themeVariables = Me[r.theme].getThemeVariables(r.themeVariables) : r && (r.themeVariables = Me.default.getThemeVariables(r.themeVariables));
    const i = typeof r == "object" ? M0(r) : Nh();
    zo(i.logLevel), oa();
  }
  g(Jg, "initialize");
  var tf = g((e, t = {}) => {
    const { code: r } = Fs(e);
    return Do.fromText(r, t);
  }, "getDiagramFromText");
  function ef(e, t, r, i) {
    Gg(t, e), Xg(t, r, i, t.attr("id"));
  }
  g(ef, "addA11yInfo");
  var or = Object.freeze({
    render: Gw,
    parse: Kg,
    getDiagramFromText: tf,
    initialize: Jg,
    getConfig: Kt,
    setConfig: qh,
    getSiteConfig: Nh,
    updateSiteConfig: F0,
    reset: g(() => {
      hn();
    }, "reset"),
    globalReset: g(() => {
      hn(Lr);
    }, "globalReset"),
    defaultConfig: Lr
  });
  zo(Kt().logLevel);
  hn(Kt());
  var Xw = g((e, t, r) => {
    D.warn(e), ps(e) ? (r && r(e.str, e.hash), t.push({
      ...e,
      message: e.str,
      error: e
    })) : (r && r(e), e instanceof Error && t.push({
      str: e.message,
      message: e.message,
      hash: e.name,
      error: e
    }));
  }, "handleError"), rf = g(async function(e = {
    querySelector: ".mermaid"
  }) {
    try {
      await Zw(e);
    } catch (t) {
      if (ps(t) && D.error(t.str), ce.parseError && ce.parseError(t), !e.suppressErrors)
        throw D.error("Use the suppressErrors option to suppress these errors"), t;
    }
  }, "run"), Zw = g(async function({ postRenderCallback: e, querySelector: t, nodes: r } = {
    querySelector: ".mermaid"
  }) {
    const i = or.getConfig();
    D.debug(`${e ? "" : "No "}Callback function found`);
    let n;
    if (r)
      n = r;
    else if (t)
      n = document.querySelectorAll(t);
    else
      throw new Error("Nodes and querySelector are both undefined");
    D.debug(`Found ${n.length} diagrams`), (i == null ? void 0 : i.startOnLoad) !== void 0 && (D.debug("Start On Load: " + (i == null ? void 0 : i.startOnLoad)), or.updateSiteConfig({
      startOnLoad: i == null ? void 0 : i.startOnLoad
    }));
    const a = new fe.InitIDGenerator(i.deterministicIds, i.deterministicIDSeed);
    let s;
    const o = [];
    for (const l of Array.from(n)) {
      if (D.info("Rendering diagram: " + l.id), l.getAttribute("data-processed"))
        continue;
      l.setAttribute("data-processed", "true");
      const h = `mermaid-${a.next()}`;
      s = l.innerHTML, s = Au(fe.entityDecode(s)).trim().replace(/<br\s*\/?>/gi, "<br/>");
      const c = fe.detectInit(s);
      c && D.debug("Detected early reinit: ", c);
      try {
        const { svg: d, bindFunctions: u } = await sf(h, s, l);
        l.innerHTML = d, e && await e(h), u && u(l);
      } catch (d) {
        Xw(d, o, ce.parseError);
      }
    }
    if (o.length > 0)
      throw o[0];
  }, "runThrowsErrors"), nf = g(function(e) {
    or.initialize(e);
  }, "initialize"), Qw = g(async function(e, t, r) {
    D.warn("mermaid.init is deprecated. Please use run instead."), e && nf(e);
    const i = {
      postRenderCallback: r,
      querySelector: ".mermaid"
    };
    typeof t == "string" ? i.querySelector = t : t && (t instanceof HTMLElement ? i.nodes = [
      t
    ] : i.nodes = t), await rf(i);
  }, "init"), Kw = g(async (e, { lazyLoad: t = true } = {}) => {
    oa(), Oh(...e), t === false && await Cw();
  }, "registerExternalDiagrams"), af = g(function() {
    if (ce.startOnLoad) {
      const { startOnLoad: e } = or.getConfig();
      e && ce.run().catch((t) => D.error("Mermaid failed to initialize", t));
    }
  }, "contentLoaded");
  typeof document < "u" && window.addEventListener("load", af, false);
  var Jw = g(function(e) {
    ce.parseError = e;
  }, "setParseErrorHandler"), In = [], Wa = false, of = g(async () => {
    if (!Wa) {
      for (Wa = true; In.length > 0; ) {
        const e = In.shift();
        if (e)
          try {
            await e();
          } catch (t) {
            D.error("Error executing queue", t);
          }
      }
      Wa = false;
    }
  }, "executeQueue"), t_ = g(async (e, t) => new Promise((r, i) => {
    const n = g(() => new Promise((a, s) => {
      or.parse(e, t).then((o) => {
        a(o), r(o);
      }, (o) => {
        var l;
        D.error("Error parsing", o), (l = ce.parseError) == null || l.call(ce, o), s(o), i(o);
      });
    }), "performCall");
    In.push(n), of().catch(i);
  }), "parse"), sf = g((e, t, r) => new Promise((i, n) => {
    const a = g(() => new Promise((s, o) => {
      or.render(e, t, r).then((l) => {
        s(l), i(l);
      }, (l) => {
        var h;
        D.error("Error parsing", l), (h = ce.parseError) == null || h.call(ce, l), o(l), n(l);
      });
    }), "performCall");
    In.push(a), of().catch(n);
  }), "render"), ce = {
    startOnLoad: true,
    mermaidAPI: or,
    parse: t_,
    render: sf,
    init: Qw,
    run: rf,
    registerExternalDiagrams: Kw,
    registerLayoutLoaders: gg,
    initialize: nf,
    parseError: void 0,
    contentLoaded: af,
    setParseErrorHandler: Jw,
    detectType: Ro,
    registerIconPacks: zy
  }, e_ = ce;
  var Bt = function() {
    return Bt = Object.assign || function(e) {
      for (var t, r = 1, i = arguments.length; r < i; r++) {
        t = arguments[r];
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
      return e;
    }, Bt.apply(this, arguments);
  };
  typeof window < "u" && (window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), typeof window.CustomEvent != "function" && (window.CustomEvent = function(e, t) {
    t = t || {
      bubbles: false,
      cancelable: false,
      detail: null
    };
    var r = document.createEvent("CustomEvent");
    return r.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), r;
  }));
  var r_ = typeof document < "u" && !!document.documentMode, bh;
  function i_() {
    return bh || (bh = document.createElement("div").style);
  }
  var kh = [
    "webkit",
    "moz",
    "ms"
  ], Ui = {};
  function Es(e) {
    if (Ui[e])
      return Ui[e];
    var t = i_();
    if (e in t)
      return Ui[e] = e;
    for (var r = e[0].toUpperCase() + e.slice(1), i = kh.length; i--; ) {
      var n = "".concat(kh[i]).concat(r);
      if (n in t)
        return Ui[e] = n;
    }
  }
  function Vi(e, t) {
    return parseFloat(t[Es(e)]) || 0;
  }
  function Gi(e, t, r) {
    r === void 0 && (r = window.getComputedStyle(e));
    var i = t === "border" ? "Width" : "";
    return {
      left: Vi("".concat(t, "Left").concat(i), r),
      right: Vi("".concat(t, "Right").concat(i), r),
      top: Vi("".concat(t, "Top").concat(i), r),
      bottom: Vi("".concat(t, "Bottom").concat(i), r)
    };
  }
  function wr(e, t, r) {
    e.style[Es(t)] = r;
  }
  function n_(e, t) {
    var r = Es("transform");
    wr(e, "transition", "".concat(r, " ").concat(t.duration, "ms ").concat(t.easing));
  }
  function a_(e, t, r) {
    var i = t.x, n = t.y, a = t.scale, s = t.isSVG;
    if (wr(e, "transform", "scale(".concat(a, ") translate(").concat(i, "px, ").concat(n, "px)")), s && r_) {
      var o = window.getComputedStyle(e).getPropertyValue("transform");
      e.setAttribute("transform", o);
    }
  }
  function Ha(e) {
    var t = e.parentNode, r = window.getComputedStyle(e), i = window.getComputedStyle(t), n = e.getBoundingClientRect(), a = t.getBoundingClientRect();
    return {
      elem: {
        style: r,
        width: n.width,
        height: n.height,
        top: n.top,
        bottom: n.bottom,
        left: n.left,
        right: n.right,
        margin: Gi(e, "margin", r),
        border: Gi(e, "border", r)
      },
      parent: {
        style: i,
        width: a.width,
        height: a.height,
        top: a.top,
        bottom: a.bottom,
        left: a.left,
        right: a.right,
        padding: Gi(t, "padding", i),
        border: Gi(t, "border", i)
      }
    };
  }
  var vi = {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup mouseleave"
  };
  typeof window < "u" && (typeof window.PointerEvent == "function" ? vi = {
    down: "pointerdown",
    move: "pointermove",
    up: "pointerup pointerleave pointercancel"
  } : typeof window.TouchEvent == "function" && (vi = {
    down: "touchstart",
    move: "touchmove",
    up: "touchend touchcancel"
  }));
  function Ya(e, t, r, i) {
    vi[e].split(" ").forEach(function(n) {
      t.addEventListener(n, r, i);
    });
  }
  function Ua(e, t, r) {
    vi[e].split(" ").forEach(function(i) {
      t.removeEventListener(i, r);
    });
  }
  function lf(e, t) {
    for (var r = e.length; r--; )
      if (e[r].pointerId === t.pointerId)
        return r;
    return -1;
  }
  function Po(e, t) {
    var r;
    if (t.touches) {
      r = 0;
      for (var i = 0, n = t.touches; i < n.length; i++) {
        var a = n[i];
        a.pointerId = r++, Po(e, a);
      }
      return;
    }
    r = lf(e, t), r > -1 && e.splice(r, 1), e.push(t);
  }
  function o_(e, t) {
    if (t.touches) {
      for (; e.length; )
        e.pop();
      return;
    }
    var r = lf(e, t);
    r > -1 && e.splice(r, 1);
  }
  function Ch(e) {
    e = e.slice(0);
    for (var t = e.pop(), r; r = e.pop(); )
      t = {
        clientX: (r.clientX - t.clientX) / 2 + t.clientX,
        clientY: (r.clientY - t.clientY) / 2 + t.clientY
      };
    return t;
  }
  function Va(e) {
    if (e.length < 2)
      return 0;
    var t = e[0], r = e[1];
    return Math.sqrt(Math.pow(Math.abs(r.clientX - t.clientX), 2) + Math.pow(Math.abs(r.clientY - t.clientY), 2));
  }
  function s_(e) {
    for (var t = e; t && t.parentNode; ) {
      if (t.parentNode === document)
        return true;
      t = t.parentNode instanceof ShadowRoot ? t.parentNode.host : t.parentNode;
    }
    return false;
  }
  function l_(e) {
    return (e.getAttribute("class") || "").trim();
  }
  function h_(e, t) {
    return e.nodeType === 1 && " ".concat(l_(e), " ").indexOf(" ".concat(t, " ")) > -1;
  }
  function c_(e, t) {
    for (var r = e; r != null; r = r.parentNode)
      if (h_(r, t.excludeClass) || t.exclude.indexOf(r) > -1)
        return true;
    return false;
  }
  var d_ = /^http:[\w\.\/]+svg$/;
  function u_(e) {
    return d_.test(e.namespaceURI) && e.nodeName.toLowerCase() !== "svg";
  }
  function p_(e) {
    var t = {};
    for (var r in e)
      e.hasOwnProperty(r) && (t[r] = e[r]);
    return t;
  }
  var hf = {
    animate: false,
    canvas: false,
    cursor: "move",
    disablePan: false,
    disableZoom: false,
    disableXAxis: false,
    disableYAxis: false,
    duration: 200,
    easing: "ease-in-out",
    exclude: [],
    excludeClass: "panzoom-exclude",
    handleStartEvent: function(e) {
      e.preventDefault(), e.stopPropagation();
    },
    maxScale: 4,
    minScale: 0.125,
    overflow: "hidden",
    panOnlyWhenZoomed: false,
    pinchAndPan: false,
    relative: false,
    setTransform: a_,
    startX: 0,
    startY: 0,
    startScale: 1,
    step: 0.3,
    touchAction: "none"
  };
  function cf(e, t) {
    if (!e)
      throw new Error("Panzoom requires an element as an argument");
    if (e.nodeType !== 1)
      throw new Error("Panzoom requires an element with a nodeType of 1");
    if (!s_(e))
      throw new Error("Panzoom should be called on elements that have been attached to the DOM");
    t = Bt(Bt({}, hf), t);
    var r = u_(e), i = e.parentNode;
    i.style.overflow = t.overflow, i.style.userSelect = "none", i.style.touchAction = t.touchAction, (t.canvas ? i : e).style.cursor = t.cursor, e.style.userSelect = "none", e.style.touchAction = t.touchAction, wr(e, "transformOrigin", typeof t.origin == "string" ? t.origin : r ? "0 0" : "50% 50%");
    function n() {
      i.style.overflow = "", i.style.userSelect = "", i.style.touchAction = "", i.style.cursor = "", e.style.cursor = "", e.style.userSelect = "", e.style.touchAction = "", wr(e, "transformOrigin", "");
    }
    function a(F) {
      F === void 0 && (F = {});
      for (var I in F)
        F.hasOwnProperty(I) && (t[I] = F[I]);
      (F.hasOwnProperty("cursor") || F.hasOwnProperty("canvas")) && (i.style.cursor = e.style.cursor = "", (t.canvas ? i : e).style.cursor = t.cursor), F.hasOwnProperty("overflow") && (i.style.overflow = F.overflow), F.hasOwnProperty("touchAction") && (i.style.touchAction = F.touchAction, e.style.touchAction = F.touchAction);
    }
    var s = 0, o = 0, l = 1, h = false;
    m(t.startScale, {
      animate: false,
      force: true
    }), setTimeout(function() {
      f(t.startX, t.startY, {
        animate: false,
        force: true
      });
    });
    function c(F, I, R) {
      if (!R.silent) {
        var H = new CustomEvent(F, {
          detail: I
        });
        e.dispatchEvent(H);
      }
    }
    function d(F, I, R) {
      var H = {
        x: s,
        y: o,
        scale: l,
        isSVG: r,
        originalEvent: R
      };
      return requestAnimationFrame(function() {
        typeof I.animate == "boolean" && (I.animate ? n_(e, I) : wr(e, "transition", "none")), I.setTransform(e, H, I), c(F, H, I), c("panzoomchange", H, I);
      }), H;
    }
    function u(F, I, R, H) {
      var z = Bt(Bt({}, t), H), Z = {
        x: s,
        y: o,
        opts: z
      };
      if (!z.force && (z.disablePan || z.panOnlyWhenZoomed && l === z.startScale))
        return Z;
      if (F = parseFloat(F), I = parseFloat(I), z.disableXAxis || (Z.x = (z.relative ? s : 0) + F), z.disableYAxis || (Z.y = (z.relative ? o : 0) + I), z.contain) {
        var q = Ha(e), ct = q.elem.width / l, ft = q.elem.height / l, $t = ct * R, wt = ft * R, xt = ($t - ct) / 2, Tt = (wt - ft) / 2;
        if (z.contain === "inside") {
          var Pt = (-q.elem.margin.left - q.parent.padding.left + xt) / R, Jt = (q.parent.width - $t - q.parent.padding.left - q.elem.margin.left - q.parent.border.left - q.parent.border.right + xt) / R;
          Z.x = Math.max(Math.min(Z.x, Jt), Pt);
          var ae = (-q.elem.margin.top - q.parent.padding.top + Tt) / R, He = (q.parent.height - wt - q.parent.padding.top - q.elem.margin.top - q.parent.border.top - q.parent.border.bottom + Tt) / R;
          Z.y = Math.max(Math.min(Z.y, He), ae);
        } else if (z.contain === "outside") {
          var Pt = (-($t - q.parent.width) - q.parent.padding.left - q.parent.border.left - q.parent.border.right + xt) / R, Jt = (xt - q.parent.padding.left) / R;
          Z.x = Math.max(Math.min(Z.x, Jt), Pt);
          var ae = (-(wt - q.parent.height) - q.parent.padding.top - q.parent.border.top - q.parent.border.bottom + Tt) / R, He = (Tt - q.parent.padding.top) / R;
          Z.y = Math.max(Math.min(Z.y, He), ae);
        }
      }
      return z.roundPixels && (Z.x = Math.round(Z.x), Z.y = Math.round(Z.y)), Z;
    }
    function p(F, I) {
      var R = Bt(Bt({}, t), I), H = {
        scale: l,
        opts: R
      };
      if (!R.force && R.disableZoom)
        return H;
      var z = t.minScale, Z = t.maxScale;
      if (R.contain) {
        var q = Ha(e), ct = q.elem.width / l, ft = q.elem.height / l;
        if (ct > 1 && ft > 1) {
          var $t = q.parent.width - q.parent.border.left - q.parent.border.right, wt = q.parent.height - q.parent.border.top - q.parent.border.bottom, xt = $t / ct, Tt = wt / ft;
          t.contain === "inside" ? Z = Math.min(Z, xt, Tt) : t.contain === "outside" && (z = Math.max(z, xt, Tt));
        }
      }
      return H.scale = Math.min(Math.max(F, z), Z), H;
    }
    function f(F, I, R, H) {
      var z = u(F, I, l, R);
      return s !== z.x || o !== z.y ? (s = z.x, o = z.y, d("panzoompan", z.opts, H)) : {
        x: s,
        y: o,
        scale: l,
        isSVG: r,
        originalEvent: H
      };
    }
    function m(F, I, R) {
      var H = p(F, I), z = H.opts;
      if (!(!z.force && z.disableZoom)) {
        F = H.scale;
        var Z = s, q = o;
        if (z.focal) {
          var ct = z.focal;
          Z = (ct.x / F - ct.x / l + s * F) / F, q = (ct.y / F - ct.y / l + o * F) / F;
        }
        var ft = u(Z, q, F, {
          relative: false,
          force: true
        });
        return s = ft.x, o = ft.y, l = F, d("panzoomzoom", z, R);
      }
    }
    function y(F, I) {
      var R = Bt(Bt(Bt({}, t), {
        animate: true
      }), I);
      return m(l * Math.exp((F ? 1 : -1) * R.step), R);
    }
    function x(F) {
      return y(true, F);
    }
    function b(F) {
      return y(false, F);
    }
    function C(F, I, R, H) {
      var z = Ha(e), Z = {
        width: z.parent.width - z.parent.padding.left - z.parent.padding.right - z.parent.border.left - z.parent.border.right,
        height: z.parent.height - z.parent.padding.top - z.parent.padding.bottom - z.parent.border.top - z.parent.border.bottom
      }, q = I.clientX - z.parent.left - z.parent.padding.left - z.parent.border.left - z.elem.margin.left, ct = I.clientY - z.parent.top - z.parent.padding.top - z.parent.border.top - z.elem.margin.top;
      r || (q -= z.elem.width / l / 2, ct -= z.elem.height / l / 2);
      var ft = {
        x: q / Z.width * (Z.width * F),
        y: ct / Z.height * (Z.height * F)
      };
      return m(F, Bt(Bt({}, R), {
        animate: false,
        focal: ft
      }), H);
    }
    function S(F, I) {
      F.preventDefault();
      var R = Bt(Bt(Bt({}, t), I), {
        animate: false
      }), H = F.deltaY === 0 && F.deltaX ? F.deltaX : F.deltaY, z = H < 0 ? 1 : -1, Z = p(l * Math.exp(z * R.step / 3), R).scale;
      return C(Z, F, R, F);
    }
    function k(F) {
      var I = Bt(Bt(Bt({}, t), {
        animate: true,
        force: true
      }), F);
      l = p(I.startScale, I).scale;
      var R = u(I.startX, I.startY, l, I);
      return s = R.x, o = R.y, d("panzoomreset", I);
    }
    var w, B, N, j, O, $, W = [];
    function P(F) {
      if (!c_(F.target, t)) {
        Po(W, F), h = true, t.handleStartEvent(F), w = s, B = o, c("panzoomstart", {
          x: s,
          y: o,
          scale: l,
          isSVG: r,
          originalEvent: F
        }, t);
        var I = Ch(W);
        N = I.clientX, j = I.clientY, O = l, $ = Va(W);
      }
    }
    function L(F) {
      if (!(!h || w === void 0 || B === void 0 || N === void 0 || j === void 0)) {
        Po(W, F);
        var I = Ch(W), R = W.length > 1, H = l;
        if (R) {
          $ === 0 && ($ = Va(W));
          var z = Va(W) - $;
          H = p(z * t.step / 80 + O).scale, C(H, I, {
            animate: false
          }, F);
        }
        (!R || t.pinchAndPan) && f(w + (I.clientX - N) / H, B + (I.clientY - j) / H, {
          animate: false
        }, F);
      }
    }
    function M(F) {
      W.length === 1 && c("panzoomend", {
        x: s,
        y: o,
        scale: l,
        isSVG: r,
        originalEvent: F
      }, t), o_(W, F), h && (h = false, w = B = N = j = void 0);
    }
    var T = false;
    function E() {
      T || (T = true, Ya("down", t.canvas ? i : e, P), Ya("move", document, L, {
        passive: true
      }), Ya("up", document, M, {
        passive: true
      }));
    }
    function A() {
      T = false, Ua("down", t.canvas ? i : e, P), Ua("move", document, L), Ua("up", document, M);
    }
    return t.noBind || E(), {
      bind: E,
      destroy: A,
      eventNames: vi,
      getPan: function() {
        return {
          x: s,
          y: o
        };
      },
      getScale: function() {
        return l;
      },
      getOptions: function() {
        return p_(t);
      },
      handleDown: P,
      handleMove: L,
      handleUp: M,
      pan: f,
      reset: k,
      resetStyle: n,
      setOptions: a,
      setStyle: function(F, I) {
        return wr(e, F, I);
      },
      zoom: m,
      zoomIn: x,
      zoomOut: b,
      zoomToPoint: C,
      zoomWithWheel: S
    };
  }
  cf.defaultOptions = hf;
  let g_, f_, m_, y_, x_, b_, k_, C_, v_, w_, __, S_, T_, B_;
  g_ = {
    class: "mermaid-viewer__header"
  };
  f_ = {
    class: "mermaid-viewer__tabs-container"
  };
  m_ = {
    class: "mermaid-viewer__tabs"
  };
  y_ = {
    class: "mermaid-viewer__actions"
  };
  x_ = {
    class: "mermaid-viewer__icon"
  };
  b_ = {
    class: "mermaid-viewer__icon"
  };
  k_ = {
    class: "mermaid-viewer__dropdown-menu"
  };
  C_ = {
    class: "mermaid-viewer__actions"
  };
  v_ = {
    class: "mermaid-viewer__content"
  };
  w_ = [
    "innerHTML"
  ];
  __ = {
    class: "mermaid-viewer__code",
    key: "code"
  };
  S_ = {
    class: "mermaid-viewer__code-pre"
  };
  T_ = {
    __name: "mermaid",
    props: {
      value: {
        type: String,
        default: ""
      },
      streaming: {
        type: Boolean,
        default: false
      }
    },
    setup(e) {
      const t = e, r = "mermaid-" + Date.now(), i = Ue(), n = Ue(), a = Ue(null), s = Ue("image"), o = Ue(""), l = Ue(false), h = Ue(false);
      let c = null;
      const d = () => {
        l.value = !l.value;
      }, u = () => {
        c == null ? void 0 : c.zoomIn();
      }, p = () => {
        h.value = !h.value;
      }, f = () => {
        c == null ? void 0 : c.zoomOut();
      }, m = (k) => {
        c == null ? void 0 : c.zoomWithWheel(k);
      }, y = () => {
        $f(t.value).then(() => {
          l.value = false;
        });
      }, x = async () => {
        Ff(i.value), Ef.success(Sf.global.t("hubx.bubble.download_success")), l.value = false;
      };
      let b = null, C = null;
      Qs(() => {
        clearTimeout(b), clearTimeout(C);
        const k = t.value;
        b = setTimeout(() => {
          e_.render(r, k).then((w) => {
            n.value.innerHTML = w.svg, i.value = n.value.querySelector("svg");
          });
        }, 600);
      });
      let S;
      return vf(() => {
        S = Af(a.value, () => {
          l.value = false;
        });
      }), wf(() => {
        c == null ? void 0 : c.destroy(), S == null ? void 0 : S.destroy();
      }), Qs(() => {
        i.value && !c && (c = cf(i.value, {}));
      }), (k, w) => (fa(), _f("div", {
        class: ma([
          "mermaid-viewer",
          {
            "mermaid-viewer--fixed": h.value
          }
        ])
      }, [
        vt("div", g_, [
          vt("div", f_, [
            vt("div", m_, [
              vt("div", {
                class: ma([
                  "mermaid-viewer__tab",
                  {
                    "mermaid-viewer__tab--active": s.value === "image"
                  }
                ]),
                onClick: w[0] || (w[0] = (B) => s.value = "image")
              }, Wr(k.$hubx_t("hubx.bubble.image")), 3),
              vt("div", {
                class: ma([
                  "mermaid-viewer__tab",
                  {
                    "mermaid-viewer__tab--active": s.value === "code"
                  }
                ]),
                onClick: w[1] || (w[1] = (B) => s.value = "code")
              }, Wr(k.$hubx_t("hubx.bubble.code")), 3)
            ])
          ]),
          Hr(vt("div", y_, [
            vt("div", {
              class: "mermaid-viewer__dropdown",
              ref_key: "dropdownRef",
              ref: a
            }, [
              vt("span", {
                class: "mermaid-viewer__dropdown-trigger",
                onClick: d
              }, [
                vt("i", x_, [
                  Ve(Ge, {
                    name: "download"
                  })
                ]),
                vt("i", b_, [
                  Ve(Ge, {
                    name: "down"
                  })
                ])
              ]),
              Hr(vt("div", k_, [
                vt("div", {
                  class: "mermaid-viewer__dropdown-item",
                  onClick: x
                }, Wr(k.$hubx_t("hubx.bubble.download_image")), 1),
                vt("div", {
                  class: "mermaid-viewer__dropdown-item",
                  onClick: y
                }, Wr(k.$hubx_t("hubx.bubble.copy_markdown")), 1)
              ], 512), [
                [
                  Yr,
                  l.value
                ]
              ])
            ], 512),
            vt("i", {
              class: "mermaid-viewer__icon",
              onClick: p
            }, [
              h.value ? (fa(), Ks(Ge, {
                key: 0,
                name: "collapse"
              })) : (fa(), Ks(Ge, {
                key: 1,
                name: "expand"
              }))
            ]),
            vt("i", {
              class: "mermaid-viewer__icon",
              onClick: f
            }, [
              Ve(Ge, {
                name: "zoom-out"
              })
            ]),
            vt("i", {
              class: "mermaid-viewer__icon",
              onClick: u
            }, [
              Ve(Ge, {
                name: "zoom-in"
              })
            ])
          ], 512), [
            [
              Yr,
              s.value === "image"
            ]
          ]),
          Hr(vt("div", C_, [
            vt("i", {
              class: "mermaid-viewer__icon",
              onClick: y
            }, [
              Ve(Ge, {
                name: "copy"
              })
            ])
          ], 512), [
            [
              Yr,
              s.value === "code"
            ]
          ])
        ]),
        vt("div", v_, [
          Ve(tl, {
            name: "slide-fade",
            mode: "out-in"
          }, {
            default: Js(() => [
              Hr(vt("div", {
                ref_key: "contentRef",
                ref: n,
                class: "mermaid-viewer__diagram",
                onWheel: m,
                innerHTML: o.value
              }, null, 40, w_), [
                [
                  Yr,
                  s.value === "image"
                ]
              ])
            ]),
            _: 1
          }),
          Ve(tl, {
            name: "slide-fade",
            mode: "out-in"
          }, {
            default: Js(() => [
              Hr(vt("div", __, [
                vt("pre", S_, Wr(e.value), 1)
              ], 512), [
                [
                  Yr,
                  s.value === "code"
                ]
              ])
            ]),
            _: 1
          })
        ])
      ], 2));
    }
  };
  B_ = Cf(T_, [
    [
      "__scopeId",
      "data-v-e66d0996"
    ]
  ]);
  K_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: B_
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  I_ as $,
  g0 as A,
  om as B,
  gs as C,
  Kt as D,
  zh as E,
  D1 as F,
  Vk as G,
  oh as H,
  v0 as I,
  gy as J,
  Ar as K,
  F_ as L,
  Qn as M,
  No as N,
  pl as O,
  Wy as P,
  tn as Q,
  O1 as R,
  _i as S,
  G0 as T,
  wi as U,
  G as V,
  rt as W,
  Gh as X,
  ts as Y,
  T1 as Z,
  g as _,
  __tla,
  tm as a,
  Sn as a$,
  R_ as a0,
  _l as a1,
  wl as a2,
  q_ as a3,
  N_ as a4,
  z_ as a5,
  O_ as a6,
  D_ as a7,
  W_ as a8,
  P_ as a9,
  gh as aA,
  T2 as aB,
  Wn as aC,
  zy as aD,
  Py as aE,
  sr as aF,
  w1 as aG,
  lu as aH,
  Un as aI,
  Zn as aJ,
  Tn as aK,
  cu as aL,
  su as aM,
  Jb as aN,
  Rf as aO,
  C1 as aP,
  g1 as aQ,
  eb as aR,
  os as aS,
  Xb as aT,
  S1 as aU,
  Bi as aV,
  Ir as aW,
  wn as aX,
  o1 as aY,
  gC as aZ,
  Ti as a_,
  j_ as aa,
  J2 as ab,
  ug as ac,
  G_ as ad,
  my as ae,
  Mt as af,
  We as ag,
  Jo as ah,
  Nu as ai,
  cr as aj,
  mu as ak,
  at as al,
  me as am,
  Hk as an,
  V_ as ao,
  X_ as ap,
  Y_ as aq,
  J as ar,
  U_ as as,
  Tk as at,
  vk as au,
  Ck as av,
  v1 as aw,
  gb as ax,
  f1 as ay,
  as as az,
  J0 as b,
  t1 as b0,
  eu as b1,
  nb as b2,
  ab as b3,
  Qe as b4,
  Rl as b5,
  ob as b6,
  ss as b7,
  ib as b8,
  hb as b9,
  Pr as ba,
  je as bb,
  Ol as bc,
  ls as bd,
  iu as be,
  Eo as bf,
  _1 as bg,
  Xn as bh,
  K_ as bi,
  dt as c,
  Vh as d,
  It as e,
  Fe as f,
  rm as g,
  rr as h,
  jy as i,
  Dr as j,
  xu as k,
  D as l,
  $_ as m,
  Q_ as n,
  im as o,
  nm as p,
  fy as q,
  Z_ as r,
  em as s,
  xk as t,
  fe as u,
  H_ as v,
  z1 as w,
  K0 as x,
  E_ as y,
  hi as z
};
