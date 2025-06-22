import { g as ph, _ as gt, v as cf, r as ro, h as df, i as Ps, a as uf, b as pf, j as gf, w as ff, d as mf, n as yf, O as Rs, S as Ns, __tla as __tla_0 } from "./index-8579fe4a.js";
import { D as xf, F as st, q as ui, X as bf, O as kf, P as Cf, B as gh, V as fh, Y as vf } from "./viewer-DpLhQV_x-5cf483f8.js";
import "./copy-NOBrwKqN-54f5154b.js";
let d_, r0, G0, ts, Ut, Ah, _1, Ik, Vl, d0, ry, wi, a_, Pn, Ta, Ks, Ey, qr, w1, gr, z0, pr, W, J, Nh, Na, f1, g, j0, un, g_, cl, hl, m_, f_, p_, h_, c_, x_, u_, th, f2, An, By, Ty, ei, u1, tu, $n, zn, pn, iu, Kd, Wb, Mf, c1, r1, Hx, Va, Pb, g1, yr, Li, cn, Gb, rC, mr, y_, W2, ng, w_, oy, vt, Ne, Ra, Eu, ni, lu, nt, ue, $k, v_, __, k_, Y, C_, fk, dk, ck, d1, rb, n1, Za, W0, jb, Ud, Ux, Yx, Ze, Sl, Gx, Ua, Vx, Jx, Ai, Re, kl, Ya, Gd, ka, p1, In, B_, ct, Rh, Ft, Me, Z0, Xe, Fy, Mi, cu, $, s_, T_, V0, U0, ny, S_, H0, sk, de, b_, B1, q0, l_, tr;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var wf = Object.defineProperty, _f = (e, t, i) => t in e ? wf(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: i
  }) : e[t] = i, ft = (e, t, i) => _f(e, typeof t != "symbol" ? t + "" : t, i), Io = {
    exports: {}
  }, Sf = Io.exports, qs;
  function Tf() {
    return qs || (qs = 1, function(e, t) {
      (function(i, r) {
        e.exports = r();
      })(Sf, function() {
        var i = 1e3, r = 6e4, n = 36e5, o = "millisecond", s = "second", a = "minute", l = "hour", c = "day", h = "week", d = "month", u = "quarter", p = "year", f = "date", m = "Invalid Date", y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, x = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = {
          name: "en",
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          ordinal: function(M) {
            var L = [
              "th",
              "st",
              "nd",
              "rd"
            ], T = M % 100;
            return "[" + M + (L[(T - 20) % 10] || L[T] || L[0]) + "]";
          }
        }, C = function(M, L, T) {
          var E = String(M);
          return !E || E.length >= L ? M : "" + Array(L + 1 - E.length).join(T) + M;
        }, w = {
          s: C,
          z: function(M) {
            var L = -M.utcOffset(), T = Math.abs(L), E = Math.floor(T / 60), A = T % 60;
            return (L <= 0 ? "+" : "-") + C(E, 2, "0") + ":" + C(A, 2, "0");
          },
          m: function M(L, T) {
            if (L.date() < T.date())
              return -M(T, L);
            var E = 12 * (T.year() - L.year()) + (T.month() - L.month()), A = L.clone().add(E, d), j = T - A < 0, U = L.clone().add(E + (j ? -1 : 1), d);
            return +(-(E + (T - A) / (j ? A - U : U - A)) || 0);
          },
          a: function(M) {
            return M < 0 ? Math.ceil(M) || 0 : Math.floor(M);
          },
          p: function(M) {
            return {
              M: d,
              y: p,
              w: h,
              d: c,
              D: f,
              h: l,
              m: a,
              s,
              ms: o,
              Q: u
            }[M] || String(M || "").toLowerCase().replace(/s$/, "");
          },
          u: function(M) {
            return M === void 0;
          }
        }, k = "en", _ = {};
        _[k] = b;
        var B = "$isDayjsObject", I = function(M) {
          return M instanceof N || !(!M || !M[B]);
        }, z = function M(L, T, E) {
          var A;
          if (!L)
            return k;
          if (typeof L == "string") {
            var j = L.toLowerCase();
            _[j] && (A = j), T && (_[j] = T, A = j);
            var U = L.split("-");
            if (!A && U.length > 1)
              return M(U[0]);
          } else {
            var X = L.name;
            _[X] = L, A = X;
          }
          return !E && A && (k = A), A || !E && k;
        }, O = function(M, L) {
          if (I(M))
            return M.clone();
          var T = typeof L == "object" ? L : {};
          return T.date = M, T.args = arguments, new N(T);
        }, F = w;
        F.l = z, F.i = I, F.w = function(M, L) {
          return O(M, {
            locale: L.$L,
            utc: L.$u,
            x: L.$x,
            $offset: L.$offset
          });
        };
        var N = function() {
          function M(T) {
            this.$L = z(T.locale, null, true), this.parse(T), this.$x = this.$x || T.x || {}, this[B] = true;
          }
          var L = M.prototype;
          return L.parse = function(T) {
            this.$d = function(E) {
              var A = E.date, j = E.utc;
              if (A === null)
                return /* @__PURE__ */ new Date(NaN);
              if (F.u(A))
                return /* @__PURE__ */ new Date();
              if (A instanceof Date)
                return new Date(A);
              if (typeof A == "string" && !/Z$/i.test(A)) {
                var U = A.match(y);
                if (U) {
                  var X = U[2] - 1 || 0, K = (U[7] || "0").substring(0, 3);
                  return j ? new Date(Date.UTC(U[1], X, U[3] || 1, U[4] || 0, U[5] || 0, U[6] || 0, K)) : new Date(U[1], X, U[3] || 1, U[4] || 0, U[5] || 0, U[6] || 0, K);
                }
              }
              return new Date(A);
            }(T), this.init();
          }, L.init = function() {
            var T = this.$d;
            this.$y = T.getFullYear(), this.$M = T.getMonth(), this.$D = T.getDate(), this.$W = T.getDay(), this.$H = T.getHours(), this.$m = T.getMinutes(), this.$s = T.getSeconds(), this.$ms = T.getMilliseconds();
          }, L.$utils = function() {
            return F;
          }, L.isValid = function() {
            return this.$d.toString() !== m;
          }, L.isSame = function(T, E) {
            var A = O(T);
            return this.startOf(E) <= A && A <= this.endOf(E);
          }, L.isAfter = function(T, E) {
            return O(T) < this.startOf(E);
          }, L.isBefore = function(T, E) {
            return this.endOf(E) < O(T);
          }, L.$g = function(T, E, A) {
            return F.u(T) ? this[E] : this.set(A, T);
          }, L.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, L.valueOf = function() {
            return this.$d.getTime();
          }, L.startOf = function(T, E) {
            var A = this, j = !!F.u(E) || E, U = F.p(T), X = function(It, Bt) {
              var ee = F.w(A.$u ? Date.UTC(A.$y, Bt, It) : new Date(A.$y, Bt, It), A);
              return j ? ee : ee.endOf(c);
            }, K = function(It, Bt) {
              return F.w(A.toDate()[It].apply(A.toDate("s"), (j ? [
                0,
                0,
                0,
                0
              ] : [
                23,
                59,
                59,
                999
              ]).slice(Bt)), A);
            }, tt = this.$W, ht = this.$M, rt = this.$D, wt = "set" + (this.$u ? "UTC" : "");
            switch (U) {
              case p:
                return j ? X(1, 0) : X(31, 11);
              case d:
                return j ? X(1, ht) : X(0, ht + 1);
              case h:
                var Tt = this.$locale().weekStart || 0, te = (tt < Tt ? tt + 7 : tt) - Tt;
                return X(j ? rt - te : rt + (6 - te), ht);
              case c:
              case f:
                return K(wt + "Hours", 0);
              case l:
                return K(wt + "Minutes", 1);
              case a:
                return K(wt + "Seconds", 2);
              case s:
                return K(wt + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, L.endOf = function(T) {
            return this.startOf(T, false);
          }, L.$set = function(T, E) {
            var A, j = F.p(T), U = "set" + (this.$u ? "UTC" : ""), X = (A = {}, A[c] = U + "Date", A[f] = U + "Date", A[d] = U + "Month", A[p] = U + "FullYear", A[l] = U + "Hours", A[a] = U + "Minutes", A[s] = U + "Seconds", A[o] = U + "Milliseconds", A)[j], K = j === c ? this.$D + (E - this.$W) : E;
            if (j === d || j === p) {
              var tt = this.clone().set(f, 1);
              tt.$d[X](K), tt.init(), this.$d = tt.set(f, Math.min(this.$D, tt.daysInMonth())).$d;
            } else
              X && this.$d[X](K);
            return this.init(), this;
          }, L.set = function(T, E) {
            return this.clone().$set(T, E);
          }, L.get = function(T) {
            return this[F.p(T)]();
          }, L.add = function(T, E) {
            var A, j = this;
            T = Number(T);
            var U = F.p(E), X = function(ht) {
              var rt = O(j);
              return F.w(rt.date(rt.date() + Math.round(ht * T)), j);
            };
            if (U === d)
              return this.set(d, this.$M + T);
            if (U === p)
              return this.set(p, this.$y + T);
            if (U === c)
              return X(1);
            if (U === h)
              return X(7);
            var K = (A = {}, A[a] = r, A[l] = n, A[s] = i, A)[U] || 1, tt = this.$d.getTime() + T * K;
            return F.w(tt, this);
          }, L.subtract = function(T, E) {
            return this.add(-1 * T, E);
          }, L.format = function(T) {
            var E = this, A = this.$locale();
            if (!this.isValid())
              return A.invalidDate || m;
            var j = T || "YYYY-MM-DDTHH:mm:ssZ", U = F.z(this), X = this.$H, K = this.$m, tt = this.$M, ht = A.weekdays, rt = A.months, wt = A.meridiem, Tt = function(Bt, ee, Gt, fe) {
              return Bt && (Bt[ee] || Bt(E, j)) || Gt[ee].slice(0, fe);
            }, te = function(Bt) {
              return F.s(X % 12 || 12, Bt, "0");
            }, It = wt || function(Bt, ee, Gt) {
              var fe = Bt < 12 ? "AM" : "PM";
              return Gt ? fe.toLowerCase() : fe;
            };
            return j.replace(x, function(Bt, ee) {
              return ee || function(Gt) {
                switch (Gt) {
                  case "YY":
                    return String(E.$y).slice(-2);
                  case "YYYY":
                    return F.s(E.$y, 4, "0");
                  case "M":
                    return tt + 1;
                  case "MM":
                    return F.s(tt + 1, 2, "0");
                  case "MMM":
                    return Tt(A.monthsShort, tt, rt, 3);
                  case "MMMM":
                    return Tt(rt, tt);
                  case "D":
                    return E.$D;
                  case "DD":
                    return F.s(E.$D, 2, "0");
                  case "d":
                    return String(E.$W);
                  case "dd":
                    return Tt(A.weekdaysMin, E.$W, ht, 2);
                  case "ddd":
                    return Tt(A.weekdaysShort, E.$W, ht, 3);
                  case "dddd":
                    return ht[E.$W];
                  case "H":
                    return String(X);
                  case "HH":
                    return F.s(X, 2, "0");
                  case "h":
                    return te(1);
                  case "hh":
                    return te(2);
                  case "a":
                    return It(X, K, true);
                  case "A":
                    return It(X, K, false);
                  case "m":
                    return String(K);
                  case "mm":
                    return F.s(K, 2, "0");
                  case "s":
                    return String(E.$s);
                  case "ss":
                    return F.s(E.$s, 2, "0");
                  case "SSS":
                    return F.s(E.$ms, 3, "0");
                  case "Z":
                    return U;
                }
                return null;
              }(Bt) || U.replace(":", "");
            });
          }, L.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, L.diff = function(T, E, A) {
            var j, U = this, X = F.p(E), K = O(T), tt = (K.utcOffset() - this.utcOffset()) * r, ht = this - K, rt = function() {
              return F.m(U, K);
            };
            switch (X) {
              case p:
                j = rt() / 12;
                break;
              case d:
                j = rt();
                break;
              case u:
                j = rt() / 3;
                break;
              case h:
                j = (ht - tt) / 6048e5;
                break;
              case c:
                j = (ht - tt) / 864e5;
                break;
              case l:
                j = ht / n;
                break;
              case a:
                j = ht / r;
                break;
              case s:
                j = ht / i;
                break;
              default:
                j = ht;
            }
            return A ? j : F.a(j);
          }, L.daysInMonth = function() {
            return this.endOf(d).$D;
          }, L.$locale = function() {
            return _[this.$L];
          }, L.locale = function(T, E) {
            if (!T)
              return this.$L;
            var A = this.clone(), j = z(T, E, true);
            return j && (A.$L = j), A;
          }, L.clone = function() {
            return F.w(this.$d, this);
          }, L.toDate = function() {
            return new Date(this.valueOf());
          }, L.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, L.toISOString = function() {
            return this.$d.toISOString();
          }, L.toString = function() {
            return this.$d.toUTCString();
          }, M;
        }(), D = N.prototype;
        return O.prototype = D, [
          [
            "$ms",
            o
          ],
          [
            "$s",
            s
          ],
          [
            "$m",
            a
          ],
          [
            "$H",
            l
          ],
          [
            "$W",
            c
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
        ].forEach(function(M) {
          D[M[1]] = function(L) {
            return this.$g(L, M[0], M[1]);
          };
        }), O.extend = function(M, L) {
          return M.$i || (M(L, N, O), M.$i = true), O;
        }, O.locale = z, O.isDayjs = I, O.unix = function(M) {
          return O(1e3 * M);
        }, O.en = _[k], O.Ls = _, O.p = {}, O;
      });
    }(Io)), Io.exports;
  }
  var Bf = Tf();
  let Ir, Lf, Af, Ee;
  Mf = ph(Bf);
  Ir = {
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
    hue2rgb: (e, t, i) => (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? e + (t - e) * 6 * i : i < 1 / 2 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e),
    hsl2rgb: ({ h: e, s: t, l: i }, r) => {
      if (!t)
        return i * 2.55;
      e /= 360, t /= 100, i /= 100;
      const n = i < 0.5 ? i * (1 + t) : i + t - i * t, o = 2 * i - n;
      switch (r) {
        case "r":
          return Ir.hue2rgb(o, n, e + 1 / 3) * 255;
        case "g":
          return Ir.hue2rgb(o, n, e) * 255;
        case "b":
          return Ir.hue2rgb(o, n, e - 1 / 3) * 255;
      }
    },
    rgb2hsl: ({ r: e, g: t, b: i }, r) => {
      e /= 255, t /= 255, i /= 255;
      const n = Math.max(e, t, i), o = Math.min(e, t, i), s = (n + o) / 2;
      if (r === "l")
        return s * 100;
      if (n === o)
        return 0;
      const a = n - o, l = s > 0.5 ? a / (2 - n - o) : a / (n + o);
      if (r === "s")
        return l * 100;
      switch (n) {
        case e:
          return ((t - i) / a + (t < i ? 6 : 0)) * 60;
        case t:
          return ((i - e) / a + 2) * 60;
        case i:
          return ((e - t) / a + 4) * 60;
        default:
          return -1;
      }
    }
  };
  Lf = {
    clamp: (e, t, i) => t > i ? Math.min(t, Math.max(i, e)) : Math.min(i, Math.max(t, e)),
    round: (e) => Math.round(e * 1e10) / 1e10
  };
  Af = {
    dec2hex: (e) => {
      const t = Math.round(e).toString(16);
      return t.length > 1 ? t : `0${t}`;
    }
  };
  nt = {
    channel: Ir,
    lang: Lf,
    unit: Af
  };
  Ee = {};
  for (let e = 0; e <= 255; e++)
    Ee[e] = nt.unit.dec2hex(e);
  const $t = {
    ALL: 0,
    RGB: 1,
    HSL: 2
  };
  class Ff {
    constructor() {
      this.type = $t.ALL;
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
      this.type = $t.ALL;
    }
    is(t) {
      return this.type === t;
    }
  }
  class Ef {
    constructor(t, i) {
      this.color = i, this.changed = false, this.data = t, this.type = new Ff();
    }
    set(t, i) {
      return this.color = i, this.changed = false, this.data = t, this.type.type = $t.ALL, this;
    }
    _ensureHSL() {
      const t = this.data, { h: i, s: r, l: n } = t;
      i === void 0 && (t.h = nt.channel.rgb2hsl(t, "h")), r === void 0 && (t.s = nt.channel.rgb2hsl(t, "s")), n === void 0 && (t.l = nt.channel.rgb2hsl(t, "l"));
    }
    _ensureRGB() {
      const t = this.data, { r: i, g: r, b: n } = t;
      i === void 0 && (t.r = nt.channel.hsl2rgb(t, "r")), r === void 0 && (t.g = nt.channel.hsl2rgb(t, "g")), n === void 0 && (t.b = nt.channel.hsl2rgb(t, "b"));
    }
    get r() {
      const t = this.data, i = t.r;
      return !this.type.is($t.HSL) && i !== void 0 ? i : (this._ensureHSL(), nt.channel.hsl2rgb(t, "r"));
    }
    get g() {
      const t = this.data, i = t.g;
      return !this.type.is($t.HSL) && i !== void 0 ? i : (this._ensureHSL(), nt.channel.hsl2rgb(t, "g"));
    }
    get b() {
      const t = this.data, i = t.b;
      return !this.type.is($t.HSL) && i !== void 0 ? i : (this._ensureHSL(), nt.channel.hsl2rgb(t, "b"));
    }
    get h() {
      const t = this.data, i = t.h;
      return !this.type.is($t.RGB) && i !== void 0 ? i : (this._ensureRGB(), nt.channel.rgb2hsl(t, "h"));
    }
    get s() {
      const t = this.data, i = t.s;
      return !this.type.is($t.RGB) && i !== void 0 ? i : (this._ensureRGB(), nt.channel.rgb2hsl(t, "s"));
    }
    get l() {
      const t = this.data, i = t.l;
      return !this.type.is($t.RGB) && i !== void 0 ? i : (this._ensureRGB(), nt.channel.rgb2hsl(t, "l"));
    }
    get a() {
      return this.data.a;
    }
    set r(t) {
      this.type.set($t.RGB), this.changed = true, this.data.r = t;
    }
    set g(t) {
      this.type.set($t.RGB), this.changed = true, this.data.g = t;
    }
    set b(t) {
      this.type.set($t.RGB), this.changed = true, this.data.b = t;
    }
    set h(t) {
      this.type.set($t.HSL), this.changed = true, this.data.h = t;
    }
    set s(t) {
      this.type.set($t.HSL), this.changed = true, this.data.s = t;
    }
    set l(t) {
      this.type.set($t.HSL), this.changed = true, this.data.l = t;
    }
    set a(t) {
      this.changed = true, this.data.a = t;
    }
  }
  let _n, yi, Ve, Ki, Gi, mh, $f, Of, yh, S, Df, R;
  _n = new Ef({
    r: 0,
    g: 0,
    b: 0,
    a: 0
  }, "transparent");
  yi = {
    re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
    parse: (e) => {
      if (e.charCodeAt(0) !== 35)
        return;
      const t = e.match(yi.re);
      if (!t)
        return;
      const i = t[1], r = parseInt(i, 16), n = i.length, o = n % 4 === 0, s = n > 4, a = s ? 1 : 17, l = s ? 8 : 4, c = o ? 0 : -1, h = s ? 255 : 15;
      return _n.set({
        r: (r >> l * (c + 3) & h) * a,
        g: (r >> l * (c + 2) & h) * a,
        b: (r >> l * (c + 1) & h) * a,
        a: o ? (r & h) * a / 255 : 1
      }, e);
    },
    stringify: (e) => {
      const { r: t, g: i, b: r, a: n } = e;
      return n < 1 ? `#${Ee[Math.round(t)]}${Ee[Math.round(i)]}${Ee[Math.round(r)]}${Ee[Math.round(n * 255)]}` : `#${Ee[Math.round(t)]}${Ee[Math.round(i)]}${Ee[Math.round(r)]}`;
    }
  };
  Ve = {
    re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
    hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
    _hue2deg: (e) => {
      const t = e.match(Ve.hueRe);
      if (t) {
        const [, i, r] = t;
        switch (r) {
          case "grad":
            return nt.channel.clamp.h(parseFloat(i) * 0.9);
          case "rad":
            return nt.channel.clamp.h(parseFloat(i) * 180 / Math.PI);
          case "turn":
            return nt.channel.clamp.h(parseFloat(i) * 360);
        }
      }
      return nt.channel.clamp.h(parseFloat(e));
    },
    parse: (e) => {
      const t = e.charCodeAt(0);
      if (t !== 104 && t !== 72)
        return;
      const i = e.match(Ve.re);
      if (!i)
        return;
      const [, r, n, o, s, a] = i;
      return _n.set({
        h: Ve._hue2deg(r),
        s: nt.channel.clamp.s(parseFloat(n)),
        l: nt.channel.clamp.l(parseFloat(o)),
        a: s ? nt.channel.clamp.a(a ? parseFloat(s) / 100 : parseFloat(s)) : 1
      }, e);
    },
    stringify: (e) => {
      const { h: t, s: i, l: r, a: n } = e;
      return n < 1 ? `hsla(${nt.lang.round(t)}, ${nt.lang.round(i)}%, ${nt.lang.round(r)}%, ${n})` : `hsl(${nt.lang.round(t)}, ${nt.lang.round(i)}%, ${nt.lang.round(r)}%)`;
    }
  };
  Ki = {
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
      const t = Ki.colors[e];
      if (t)
        return yi.parse(t);
    },
    stringify: (e) => {
      const t = yi.stringify(e);
      for (const i in Ki.colors)
        if (Ki.colors[i] === t)
          return i;
    }
  };
  Gi = {
    re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
    parse: (e) => {
      const t = e.charCodeAt(0);
      if (t !== 114 && t !== 82)
        return;
      const i = e.match(Gi.re);
      if (!i)
        return;
      const [, r, n, o, s, a, l, c, h] = i;
      return _n.set({
        r: nt.channel.clamp.r(n ? parseFloat(r) * 2.55 : parseFloat(r)),
        g: nt.channel.clamp.g(s ? parseFloat(o) * 2.55 : parseFloat(o)),
        b: nt.channel.clamp.b(l ? parseFloat(a) * 2.55 : parseFloat(a)),
        a: c ? nt.channel.clamp.a(h ? parseFloat(c) / 100 : parseFloat(c)) : 1
      }, e);
    },
    stringify: (e) => {
      const { r: t, g: i, b: r, a: n } = e;
      return n < 1 ? `rgba(${nt.lang.round(t)}, ${nt.lang.round(i)}, ${nt.lang.round(r)}, ${nt.lang.round(n)})` : `rgb(${nt.lang.round(t)}, ${nt.lang.round(i)}, ${nt.lang.round(r)})`;
    }
  };
  ue = {
    format: {
      keyword: Ki,
      hex: yi,
      rgb: Gi,
      rgba: Gi,
      hsl: Ve,
      hsla: Ve
    },
    parse: (e) => {
      if (typeof e != "string")
        return e;
      const t = yi.parse(e) || Gi.parse(e) || Ve.parse(e) || Ki.parse(e);
      if (t)
        return t;
      throw new Error(`Unsupported color format: "${e}"`);
    },
    stringify: (e) => !e.changed && e.color ? e.color : e.type.is($t.HSL) || e.data.r === void 0 ? Ve.stringify(e) : e.a < 1 || !Number.isInteger(e.r) || !Number.isInteger(e.g) || !Number.isInteger(e.b) ? Gi.stringify(e) : yi.stringify(e)
  };
  mh = (e, t) => {
    const i = ue.parse(e);
    for (const r in t)
      i[r] = nt.channel.clamp[r](t[r]);
    return ue.stringify(i);
  };
  tr = (e, t, i = 0, r = 1) => {
    if (typeof e != "number")
      return mh(e, {
        a: t
      });
    const n = _n.set({
      r: nt.channel.clamp.r(e),
      g: nt.channel.clamp.g(t),
      b: nt.channel.clamp.b(i),
      a: nt.channel.clamp.a(r)
    });
    return ue.stringify(n);
  };
  $f = (e) => {
    const { r: t, g: i, b: r } = ue.parse(e), n = 0.2126 * nt.channel.toLinear(t) + 0.7152 * nt.channel.toLinear(i) + 0.0722 * nt.channel.toLinear(r);
    return nt.lang.round(n);
  };
  Of = (e) => $f(e) >= 0.5;
  pr = (e) => !Of(e);
  yh = (e, t, i) => {
    const r = ue.parse(e), n = r[t], o = nt.channel.clamp[t](n + i);
    return n !== o && (r[t] = o), ue.stringify(r);
  };
  W = (e, t) => yh(e, "l", t);
  J = (e, t) => yh(e, "l", -t);
  S = (e, t) => {
    const i = ue.parse(e), r = {};
    for (const n in t)
      t[n] && (r[n] = i[n] + t[n]);
    return mh(e, r);
  };
  Df = (e, t, i = 50) => {
    const { r, g: n, b: o, a: s } = ue.parse(e), { r: a, g: l, b: c, a: h } = ue.parse(t), d = i / 100, u = d * 2 - 1, p = s - h, f = ((u * p === -1 ? u : (u + p) / (1 + u * p)) + 1) / 2, m = 1 - f, y = r * f + a * m, x = n * f + l * m, b = o * f + c * m, C = s * d + h * (1 - d);
    return tr(y, x, b, C);
  };
  R = (e, t = 100) => {
    const i = ue.parse(e);
    return i.r = 255 - i.r, i.g = 255 - i.g, i.b = 255 - i.b, Df(i, e, t);
  };
  const { entries: xh, setPrototypeOf: Ws, isFrozen: If, getPrototypeOf: zf, getOwnPropertyDescriptor: Pf } = Object;
  let { freeze: Wt, seal: Jt, create: bh } = Object, { apply: zo, construct: Po } = typeof Reflect < "u" && Reflect;
  Wt || (Wt = function(e) {
    return e;
  });
  Jt || (Jt = function(e) {
    return e;
  });
  zo || (zo = function(e, t, i) {
    return e.apply(t, i);
  });
  Po || (Po = function(e, t) {
    return new e(...t);
  });
  const Br = jt(Array.prototype.forEach), Rf = jt(Array.prototype.lastIndexOf), js = jt(Array.prototype.pop), Ii = jt(Array.prototype.push), Nf = jt(Array.prototype.splice), zr = jt(String.prototype.toLowerCase), no = jt(String.prototype.toString), Hs = jt(String.prototype.match), zi = jt(String.prototype.replace), qf = jt(String.prototype.indexOf), Wf = jt(String.prototype.trim), re = jt(Object.prototype.hasOwnProperty), zt = jt(RegExp.prototype.test), Pi = jf(TypeError);
  function jt(e) {
    return function(t) {
      t instanceof RegExp && (t.lastIndex = 0);
      for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
        r[n - 1] = arguments[n];
      return zo(e, t, r);
    };
  }
  function jf(e) {
    return function() {
      for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
        i[r] = arguments[r];
      return Po(e, i);
    };
  }
  function at(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : zr;
    Ws && Ws(e, null);
    let r = t.length;
    for (; r--; ) {
      let n = t[r];
      if (typeof n == "string") {
        const o = i(n);
        o !== n && (If(t) || (t[r] = o), n = o);
      }
      e[n] = true;
    }
    return e;
  }
  function Hf(e) {
    for (let t = 0; t < e.length; t++)
      re(e, t) || (e[t] = null);
    return e;
  }
  function Ce(e) {
    const t = bh(null);
    for (const [i, r] of xh(e))
      re(e, i) && (Array.isArray(r) ? t[i] = Hf(r) : r && typeof r == "object" && r.constructor === Object ? t[i] = Ce(r) : t[i] = r);
    return t;
  }
  function Ri(e, t) {
    for (; e !== null; ) {
      const r = Pf(e, t);
      if (r) {
        if (r.get)
          return jt(r.get);
        if (typeof r.value == "function")
          return jt(r.value);
      }
      e = zf(e);
    }
    function i() {
      return null;
    }
    return i;
  }
  const Zs = Wt([
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
  ]), oo = Wt([
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
  ]), ao = Wt([
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
  ]), Zf = Wt([
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
  ]), so = Wt([
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
  ]), Vf = Wt([
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
  ]), Vs = Wt([
    "#text"
  ]), Us = Wt([
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
  ]), lo = Wt([
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
  ]), Ys = Wt([
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
  ]), Mr = Wt([
    "xlink:href",
    "xml:id",
    "xlink:title",
    "xml:space",
    "xmlns:xlink"
  ]), Uf = Jt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Yf = Jt(/<%[\w\W]*|[\w\W]*%>/gm), Gf = Jt(/\$\{[\w\W]*/gm), Xf = Jt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Qf = Jt(/^aria-[\-\w]+$/), kh = Jt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Jf = Jt(/^(?:\w+script|data):/i), Kf = Jt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Ch = Jt(/^html$/i), t0 = Jt(/^[a-z][.\w]*(-[.\w]+)+$/i);
  var Gs = Object.freeze({
    __proto__: null,
    ARIA_ATTR: Qf,
    ATTR_WHITESPACE: Kf,
    CUSTOM_ELEMENT: t0,
    DATA_ATTR: Xf,
    DOCTYPE_NAME: Ch,
    ERB_EXPR: Yf,
    IS_ALLOWED_URI: kh,
    IS_SCRIPT_OR_DATA: Jf,
    MUSTACHE_EXPR: Uf,
    TMPLIT_EXPR: Gf
  });
  const Ni = {
    element: 1,
    text: 3,
    progressingInstruction: 7,
    comment: 8,
    document: 9
  }, e0 = function() {
    return typeof window > "u" ? null : window;
  }, i0 = function(e, t) {
    if (typeof e != "object" || typeof e.createPolicy != "function")
      return null;
    let i = null;
    const r = "data-tt-policy-suffix";
    t && t.hasAttribute(r) && (i = t.getAttribute(r));
    const n = "dompurify" + (i ? "#" + i : "");
    try {
      return e.createPolicy(n, {
        createHTML(o) {
          return o;
        },
        createScriptURL(o) {
          return o;
        }
      });
    } catch {
      return console.warn("TrustedTypes policy " + n + " could not be created."), null;
    }
  }, Xs = function() {
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
  function vh() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e0();
    const t = (v) => vh(v);
    if (t.version = "3.2.6", t.removed = [], !e || !e.document || e.document.nodeType !== Ni.document || !e.Element)
      return t.isSupported = false, t;
    let { document: i } = e;
    const r = i, n = r.currentScript, { DocumentFragment: o, HTMLTemplateElement: s, Node: a, Element: l, NodeFilter: c, NamedNodeMap: h = e.NamedNodeMap || e.MozNamedAttrMap, HTMLFormElement: d, DOMParser: u, trustedTypes: p } = e, f = l.prototype, m = Ri(f, "cloneNode"), y = Ri(f, "remove"), x = Ri(f, "nextSibling"), b = Ri(f, "childNodes"), C = Ri(f, "parentNode");
    if (typeof s == "function") {
      const v = i.createElement("template");
      v.content && v.content.ownerDocument && (i = v.content.ownerDocument);
    }
    let w, k = "";
    const { implementation: _, createNodeIterator: B, createDocumentFragment: I, getElementsByTagName: z } = i, { importNode: O } = r;
    let F = Xs();
    t.isSupported = typeof xh == "function" && typeof C == "function" && _ && _.createHTMLDocument !== void 0;
    const { MUSTACHE_EXPR: N, ERB_EXPR: D, TMPLIT_EXPR: M, DATA_ATTR: L, ARIA_ATTR: T, IS_SCRIPT_OR_DATA: E, ATTR_WHITESPACE: A, CUSTOM_ELEMENT: j } = Gs;
    let { IS_ALLOWED_URI: U } = Gs, X = null;
    const K = at({}, [
      ...Zs,
      ...oo,
      ...ao,
      ...so,
      ...Vs
    ]);
    let tt = null;
    const ht = at({}, [
      ...Us,
      ...lo,
      ...Ys,
      ...Mr
    ]);
    let rt = Object.seal(bh(null, {
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
    })), wt = null, Tt = null, te = true, It = true, Bt = false, ee = true, Gt = false, fe = true, qe = false, Yn = false, Gn = false, ai = false, Cr = false, vr = false, Cs = true, vs = false;
    const tf = "user-content-";
    let Xn = true, Oi = false, si = {}, li = null;
    const ws = at({}, [
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
    let _s = null;
    const Ss = at({}, [
      "audio",
      "video",
      "img",
      "source",
      "image",
      "track"
    ]);
    let Qn = null;
    const Ts = at({}, [
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
    ]), wr = "http://www.w3.org/1998/Math/MathML", _r = "http://www.w3.org/2000/svg", me = "http://www.w3.org/1999/xhtml";
    let hi = me, Jn = false, Kn = null;
    const ef = at({}, [
      wr,
      _r,
      me
    ], no);
    let Sr = at({}, [
      "mi",
      "mo",
      "mn",
      "ms",
      "mtext"
    ]), Tr = at({}, [
      "annotation-xml"
    ]);
    const rf = at({}, [
      "title",
      "style",
      "font",
      "a",
      "script"
    ]);
    let Di = null;
    const nf = [
      "application/xhtml+xml",
      "text/html"
    ], of = "text/html";
    let _t = null, ci = null;
    const af = i.createElement("form"), Bs = function(v) {
      return v instanceof RegExp || v instanceof Function;
    }, to = function() {
      let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!(ci && ci === v)) {
        if ((!v || typeof v != "object") && (v = {}), v = Ce(v), Di = nf.indexOf(v.PARSER_MEDIA_TYPE) === -1 ? of : v.PARSER_MEDIA_TYPE, _t = Di === "application/xhtml+xml" ? no : zr, X = re(v, "ALLOWED_TAGS") ? at({}, v.ALLOWED_TAGS, _t) : K, tt = re(v, "ALLOWED_ATTR") ? at({}, v.ALLOWED_ATTR, _t) : ht, Kn = re(v, "ALLOWED_NAMESPACES") ? at({}, v.ALLOWED_NAMESPACES, no) : ef, Qn = re(v, "ADD_URI_SAFE_ATTR") ? at(Ce(Ts), v.ADD_URI_SAFE_ATTR, _t) : Ts, _s = re(v, "ADD_DATA_URI_TAGS") ? at(Ce(Ss), v.ADD_DATA_URI_TAGS, _t) : Ss, li = re(v, "FORBID_CONTENTS") ? at({}, v.FORBID_CONTENTS, _t) : ws, wt = re(v, "FORBID_TAGS") ? at({}, v.FORBID_TAGS, _t) : Ce({}), Tt = re(v, "FORBID_ATTR") ? at({}, v.FORBID_ATTR, _t) : Ce({}), si = re(v, "USE_PROFILES") ? v.USE_PROFILES : false, te = v.ALLOW_ARIA_ATTR !== false, It = v.ALLOW_DATA_ATTR !== false, Bt = v.ALLOW_UNKNOWN_PROTOCOLS || false, ee = v.ALLOW_SELF_CLOSE_IN_ATTR !== false, Gt = v.SAFE_FOR_TEMPLATES || false, fe = v.SAFE_FOR_XML !== false, qe = v.WHOLE_DOCUMENT || false, ai = v.RETURN_DOM || false, Cr = v.RETURN_DOM_FRAGMENT || false, vr = v.RETURN_TRUSTED_TYPE || false, Gn = v.FORCE_BODY || false, Cs = v.SANITIZE_DOM !== false, vs = v.SANITIZE_NAMED_PROPS || false, Xn = v.KEEP_CONTENT !== false, Oi = v.IN_PLACE || false, U = v.ALLOWED_URI_REGEXP || kh, hi = v.NAMESPACE || me, Sr = v.MATHML_TEXT_INTEGRATION_POINTS || Sr, Tr = v.HTML_INTEGRATION_POINTS || Tr, rt = v.CUSTOM_ELEMENT_HANDLING || {}, v.CUSTOM_ELEMENT_HANDLING && Bs(v.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (rt.tagNameCheck = v.CUSTOM_ELEMENT_HANDLING.tagNameCheck), v.CUSTOM_ELEMENT_HANDLING && Bs(v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (rt.attributeNameCheck = v.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), v.CUSTOM_ELEMENT_HANDLING && typeof v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (rt.allowCustomizedBuiltInElements = v.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Gt && (It = false), Cr && (ai = true), si && (X = at({}, Vs), tt = [], si.html === true && (at(X, Zs), at(tt, Us)), si.svg === true && (at(X, oo), at(tt, lo), at(tt, Mr)), si.svgFilters === true && (at(X, ao), at(tt, lo), at(tt, Mr)), si.mathMl === true && (at(X, so), at(tt, Ys), at(tt, Mr))), v.ADD_TAGS && (X === K && (X = Ce(X)), at(X, v.ADD_TAGS, _t)), v.ADD_ATTR && (tt === ht && (tt = Ce(tt)), at(tt, v.ADD_ATTR, _t)), v.ADD_URI_SAFE_ATTR && at(Qn, v.ADD_URI_SAFE_ATTR, _t), v.FORBID_CONTENTS && (li === ws && (li = Ce(li)), at(li, v.FORBID_CONTENTS, _t)), Xn && (X["#text"] = true), qe && at(X, [
          "html",
          "head",
          "body"
        ]), X.table && (at(X, [
          "tbody"
        ]), delete wt.tbody), v.TRUSTED_TYPES_POLICY) {
          if (typeof v.TRUSTED_TYPES_POLICY.createHTML != "function")
            throw Pi('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
          if (typeof v.TRUSTED_TYPES_POLICY.createScriptURL != "function")
            throw Pi('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
          w = v.TRUSTED_TYPES_POLICY, k = w.createHTML("");
        } else
          w === void 0 && (w = i0(p, n)), w !== null && typeof k == "string" && (k = w.createHTML(""));
        Wt && Wt(v), ci = v;
      }
    }, Ms = at({}, [
      ...oo,
      ...ao,
      ...Zf
    ]), Ls = at({}, [
      ...so,
      ...Vf
    ]), sf = function(v) {
      let q = C(v);
      (!q || !q.tagName) && (q = {
        namespaceURI: hi,
        tagName: "template"
      });
      const P = zr(v.tagName), pt = zr(q.tagName);
      return Kn[v.namespaceURI] ? v.namespaceURI === _r ? q.namespaceURI === me ? P === "svg" : q.namespaceURI === wr ? P === "svg" && (pt === "annotation-xml" || Sr[pt]) : !!Ms[P] : v.namespaceURI === wr ? q.namespaceURI === me ? P === "math" : q.namespaceURI === _r ? P === "math" && Tr[pt] : !!Ls[P] : v.namespaceURI === me ? q.namespaceURI === _r && !Tr[pt] || q.namespaceURI === wr && !Sr[pt] ? false : !Ls[P] && (rf[P] || !Ms[P]) : !!(Di === "application/xhtml+xml" && Kn[v.namespaceURI]) : false;
    }, We = function(v) {
      Ii(t.removed, {
        element: v
      });
      try {
        C(v).removeChild(v);
      } catch {
        y(v);
      }
    }, di = function(v, q) {
      try {
        Ii(t.removed, {
          attribute: q.getAttributeNode(v),
          from: q
        });
      } catch {
        Ii(t.removed, {
          attribute: null,
          from: q
        });
      }
      if (q.removeAttribute(v), v === "is")
        if (ai || Cr)
          try {
            We(q);
          } catch {
          }
        else
          try {
            q.setAttribute(v, "");
          } catch {
          }
    }, As = function(v) {
      let q = null, P = null;
      if (Gn)
        v = "<remove></remove>" + v;
      else {
        const xt = Hs(v, /^[\r\n\t ]+/);
        P = xt && xt[0];
      }
      Di === "application/xhtml+xml" && hi === me && (v = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + v + "</body></html>");
      const pt = w ? w.createHTML(v) : v;
      if (hi === me)
        try {
          q = new u().parseFromString(pt, Di);
        } catch {
        }
      if (!q || !q.documentElement) {
        q = _.createDocument(hi, "template", null);
        try {
          q.documentElement.innerHTML = Jn ? k : pt;
        } catch {
        }
      }
      const Mt = q.body || q.documentElement;
      return v && P && Mt.insertBefore(i.createTextNode(P), Mt.childNodes[0] || null), hi === me ? z.call(q, qe ? "html" : "body")[0] : qe ? q.documentElement : Mt;
    }, Fs = function(v) {
      return B.call(v.ownerDocument || v, v, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION, null);
    }, eo = function(v) {
      return v instanceof d && (typeof v.nodeName != "string" || typeof v.textContent != "string" || typeof v.removeChild != "function" || !(v.attributes instanceof h) || typeof v.removeAttribute != "function" || typeof v.setAttribute != "function" || typeof v.namespaceURI != "string" || typeof v.insertBefore != "function" || typeof v.hasChildNodes != "function");
    }, Es = function(v) {
      return typeof a == "function" && v instanceof a;
    };
    function ye(v, q, P) {
      Br(v, (pt) => {
        pt.call(t, q, P, ci);
      });
    }
    const $s = function(v) {
      let q = null;
      if (ye(F.beforeSanitizeElements, v, null), eo(v))
        return We(v), true;
      const P = _t(v.nodeName);
      if (ye(F.uponSanitizeElement, v, {
        tagName: P,
        allowedTags: X
      }), fe && v.hasChildNodes() && !Es(v.firstElementChild) && zt(/<[/\w!]/g, v.innerHTML) && zt(/<[/\w!]/g, v.textContent) || v.nodeType === Ni.progressingInstruction || fe && v.nodeType === Ni.comment && zt(/<[/\w]/g, v.data))
        return We(v), true;
      if (!X[P] || wt[P]) {
        if (!wt[P] && Ds(P) && (rt.tagNameCheck instanceof RegExp && zt(rt.tagNameCheck, P) || rt.tagNameCheck instanceof Function && rt.tagNameCheck(P)))
          return false;
        if (Xn && !li[P]) {
          const pt = C(v) || v.parentNode, Mt = b(v) || v.childNodes;
          if (Mt && pt) {
            const xt = Mt.length;
            for (let xe = xt - 1; xe >= 0; --xe) {
              const ie = m(Mt[xe], true);
              ie.__removalCount = (v.__removalCount || 0) + 1, pt.insertBefore(ie, x(v));
            }
          }
        }
        return We(v), true;
      }
      return v instanceof l && !sf(v) || (P === "noscript" || P === "noembed" || P === "noframes") && zt(/<\/no(script|embed|frames)/i, v.innerHTML) ? (We(v), true) : (Gt && v.nodeType === Ni.text && (q = v.textContent, Br([
        N,
        D,
        M
      ], (pt) => {
        q = zi(q, pt, " ");
      }), v.textContent !== q && (Ii(t.removed, {
        element: v.cloneNode()
      }), v.textContent = q)), ye(F.afterSanitizeElements, v, null), false);
    }, Os = function(v, q, P) {
      if (Cs && (q === "id" || q === "name") && (P in i || P in af))
        return false;
      if (!(It && !Tt[q] && zt(L, q)) && !(te && zt(T, q))) {
        if (!tt[q] || Tt[q]) {
          if (!(Ds(v) && (rt.tagNameCheck instanceof RegExp && zt(rt.tagNameCheck, v) || rt.tagNameCheck instanceof Function && rt.tagNameCheck(v)) && (rt.attributeNameCheck instanceof RegExp && zt(rt.attributeNameCheck, q) || rt.attributeNameCheck instanceof Function && rt.attributeNameCheck(q)) || q === "is" && rt.allowCustomizedBuiltInElements && (rt.tagNameCheck instanceof RegExp && zt(rt.tagNameCheck, P) || rt.tagNameCheck instanceof Function && rt.tagNameCheck(P))))
            return false;
        } else if (!Qn[q] && !zt(U, zi(P, A, "")) && !((q === "src" || q === "xlink:href" || q === "href") && v !== "script" && qf(P, "data:") === 0 && _s[v]) && !(Bt && !zt(E, zi(P, A, ""))) && P)
          return false;
      }
      return true;
    }, Ds = function(v) {
      return v !== "annotation-xml" && Hs(v, j);
    }, Is = function(v) {
      ye(F.beforeSanitizeAttributes, v, null);
      const { attributes: q } = v;
      if (!q || eo(v))
        return;
      const P = {
        attrName: "",
        attrValue: "",
        keepAttr: true,
        allowedAttributes: tt,
        forceKeepAttr: void 0
      };
      let pt = q.length;
      for (; pt--; ) {
        const Mt = q[pt], { name: xt, namespaceURI: xe, value: ie } = Mt, se = _t(xt), io = ie;
        let Et = xt === "value" ? io : Wf(io);
        if (P.attrName = se, P.attrValue = Et, P.keepAttr = true, P.forceKeepAttr = void 0, ye(F.uponSanitizeAttribute, v, P), Et = P.attrValue, vs && (se === "id" || se === "name") && (di(xt, v), Et = tf + Et), fe && zt(/((--!?|])>)|<\/(style|title)/i, Et)) {
          di(xt, v);
          continue;
        }
        if (P.forceKeepAttr)
          continue;
        if (!P.keepAttr) {
          di(xt, v);
          continue;
        }
        if (!ee && zt(/\/>/i, Et)) {
          di(xt, v);
          continue;
        }
        Gt && Br([
          N,
          D,
          M
        ], (hf) => {
          Et = zi(Et, hf, " ");
        });
        const zs = _t(v.nodeName);
        if (!Os(zs, se, Et)) {
          di(xt, v);
          continue;
        }
        if (w && typeof p == "object" && typeof p.getAttributeType == "function" && !xe)
          switch (p.getAttributeType(zs, se)) {
            case "TrustedHTML": {
              Et = w.createHTML(Et);
              break;
            }
            case "TrustedScriptURL": {
              Et = w.createScriptURL(Et);
              break;
            }
          }
        if (Et !== io)
          try {
            xe ? v.setAttributeNS(xe, xt, Et) : v.setAttribute(xt, Et), eo(v) ? We(v) : js(t.removed);
          } catch {
            di(xt, v);
          }
      }
      ye(F.afterSanitizeAttributes, v, null);
    }, lf = function v(q) {
      let P = null;
      const pt = Fs(q);
      for (ye(F.beforeSanitizeShadowDOM, q, null); P = pt.nextNode(); )
        ye(F.uponSanitizeShadowNode, P, null), $s(P), Is(P), P.content instanceof o && v(P.content);
      ye(F.afterSanitizeShadowDOM, q, null);
    };
    return t.sanitize = function(v) {
      let q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, P = null, pt = null, Mt = null, xt = null;
      if (Jn = !v, Jn && (v = "<!-->"), typeof v != "string" && !Es(v))
        if (typeof v.toString == "function") {
          if (v = v.toString(), typeof v != "string")
            throw Pi("dirty is not a string, aborting");
        } else
          throw Pi("toString is not a function");
      if (!t.isSupported)
        return v;
      if (Yn || to(q), t.removed = [], typeof v == "string" && (Oi = false), Oi) {
        if (v.nodeName) {
          const se = _t(v.nodeName);
          if (!X[se] || wt[se])
            throw Pi("root node is forbidden and cannot be sanitized in-place");
        }
      } else if (v instanceof a)
        P = As("<!---->"), pt = P.ownerDocument.importNode(v, true), pt.nodeType === Ni.element && pt.nodeName === "BODY" || pt.nodeName === "HTML" ? P = pt : P.appendChild(pt);
      else {
        if (!ai && !Gt && !qe && v.indexOf("<") === -1)
          return w && vr ? w.createHTML(v) : v;
        if (P = As(v), !P)
          return ai ? null : vr ? k : "";
      }
      P && Gn && We(P.firstChild);
      const xe = Fs(Oi ? v : P);
      for (; Mt = xe.nextNode(); )
        $s(Mt), Is(Mt), Mt.content instanceof o && lf(Mt.content);
      if (Oi)
        return v;
      if (ai) {
        if (Cr)
          for (xt = I.call(P.ownerDocument); P.firstChild; )
            xt.appendChild(P.firstChild);
        else
          xt = P;
        return (tt.shadowroot || tt.shadowrootmode) && (xt = O.call(r, xt, true)), xt;
      }
      let ie = qe ? P.outerHTML : P.innerHTML;
      return qe && X["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && zt(Ch, P.ownerDocument.doctype.name) && (ie = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + ie), Gt && Br([
        N,
        D,
        M
      ], (se) => {
        ie = zi(ie, se, " ");
      }), w && vr ? w.createHTML(ie) : ie;
    }, t.setConfig = function() {
      let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      to(v), Yn = true;
    }, t.clearConfig = function() {
      ci = null, Yn = false;
    }, t.isValidAttribute = function(v, q, P) {
      ci || to({});
      const pt = _t(v), Mt = _t(q);
      return Os(pt, Mt, P);
    }, t.addHook = function(v, q) {
      typeof q == "function" && Ii(F[v], q);
    }, t.removeHook = function(v, q) {
      if (q !== void 0) {
        const P = Rf(F[v], q);
        return P === -1 ? void 0 : Nf(F[v], P, 1)[0];
      }
      return js(F[v]);
    }, t.removeHooks = function(v) {
      F[v] = [];
    }, t.removeAllHooks = function() {
      F = Xs();
    }, t;
  }
  let bi, wh, be, _a, Xt, _h, er, n0, ho, Sh, ki, Sa, Th, Bh, o0, Ro, Sn, Tn, Pt, co, a0, s0, uo, l0, h0, po, c0, go, u0, p0, fo, g0, f0, Te, ke, Mh, Lh, m0, Yr, y0, Ci, Zt, Fh, vi, ir, Bn, x0, b0, k0, Eh, $h, Oh, C0, Gr, v0, Qs, w0, Dh, _0, S0;
  bi = vh();
  wh = Object.defineProperty;
  g = (e, t) => wh(e, "name", {
    value: t,
    configurable: true
  });
  r0 = (e, t) => {
    for (var i in t)
      wh(e, i, {
        get: t[i],
        enumerable: true
      });
  };
  be = {
    trace: 0,
    debug: 1,
    info: 2,
    warn: 3,
    error: 4,
    fatal: 5
  };
  $ = {
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
  _a = g(function(e = "fatal") {
    let t = be.fatal;
    typeof e == "string" ? e.toLowerCase() in be && (t = be[e]) : typeof e == "number" && (t = e), $.trace = () => {
    }, $.debug = () => {
    }, $.info = () => {
    }, $.warn = () => {
    }, $.error = () => {
    }, $.fatal = () => {
    }, t <= be.fatal && ($.fatal = console.error ? console.error.bind(console, Xt("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", Xt("FATAL"))), t <= be.error && ($.error = console.error ? console.error.bind(console, Xt("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", Xt("ERROR"))), t <= be.warn && ($.warn = console.warn ? console.warn.bind(console, Xt("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", Xt("WARN"))), t <= be.info && ($.info = console.info ? console.info.bind(console, Xt("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", Xt("INFO"))), t <= be.debug && ($.debug = console.debug ? console.debug.bind(console, Xt("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", Xt("DEBUG"))), t <= be.trace && ($.trace = console.debug ? console.debug.bind(console, Xt("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", Xt("TRACE")));
  }, "setLogLevel");
  Xt = g((e) => `%c${Mf().format("ss.SSS")} : ${e} : `, "format");
  _h = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s;
  er = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
  n0 = /\s*%%.*\n/gm;
  Sh = (ho = class extends Error {
    constructor(e) {
      super(e), this.name = "UnknownDiagramError";
    }
  }, g(ho, "UnknownDiagramError"), ho);
  ki = {};
  Sa = g(function(e, t) {
    e = e.replace(_h, "").replace(er, "").replace(n0, `
`);
    for (const [i, { detector: r }] of Object.entries(ki))
      if (r(e, t))
        return i;
    throw new Sh(`No diagram type detected matching given configuration for text: ${e}`);
  }, "detectType");
  Th = g((...e) => {
    for (const { id: t, detector: i, loader: r } of e)
      Bh(t, i, r);
  }, "registerLazyLoadedDiagrams");
  Bh = g((e, t, i) => {
    ki[e] && $.warn(`Detector with key ${e} already exists. Overwriting.`), ki[e] = {
      detector: t,
      loader: i
    }, $.debug(`Detector with key ${e} added${i ? " with loader" : ""}`);
  }, "addDetector");
  o0 = g((e) => ki[e].loader, "getDiagramLoader");
  Ro = g((e, t, { depth: i = 2, clobber: r = false } = {}) => {
    const n = {
      depth: i,
      clobber: r
    };
    return Array.isArray(t) && !Array.isArray(e) ? (t.forEach((o) => Ro(e, o, n)), e) : Array.isArray(t) && Array.isArray(e) ? (t.forEach((o) => {
      e.includes(o) || e.push(o);
    }), e) : e === void 0 || i <= 0 ? e != null && typeof e == "object" && typeof t == "object" ? Object.assign(e, t) : t : (t !== void 0 && typeof e == "object" && typeof t == "object" && Object.keys(t).forEach((o) => {
      typeof t[o] == "object" && (e[o] === void 0 || typeof e[o] == "object") ? (e[o] === void 0 && (e[o] = Array.isArray(t[o]) ? [] : {}), e[o] = Ro(e[o], t[o], {
        depth: i - 1,
        clobber: r
      })) : (r || typeof e[o] != "object" && typeof t[o] != "object") && (e[o] = t[o]);
    }), e);
  }, "assignWithDepth");
  Ft = Ro;
  Sn = "#ffffff";
  Tn = "#f2f2f2";
  Pt = g((e, t) => t ? S(e, {
    s: -40,
    l: 10
  }) : S(e, {
    s: -40,
    l: -10
  }), "mkBorder");
  a0 = (co = class {
    constructor() {
      this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px";
    }
    updateColors() {
      var e, t, i, r, n, o, s, a, l, c, h, d, u, p, f, m, y, x, b, C, w;
      if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || S(this.primaryColor, {
        h: -120
      }), this.tertiaryColor = this.tertiaryColor || S(this.primaryColor, {
        h: 180,
        l: 5
      }), this.primaryBorderColor = this.primaryBorderColor || Pt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || Pt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || Pt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || Pt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || R(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || R(this.tertiaryColor), this.lineColor = this.lineColor || R(this.background), this.arrowheadColor = this.arrowheadColor || R(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? J(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || J(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || R(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || W(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.darkMode ? (this.rowOdd = this.rowOdd || J(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || J(this.mainBkg, 10)) : (this.rowOdd = this.rowOdd || W(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || W(this.mainBkg, 5)), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || S(this.primaryColor, {
        h: 30
      }), this.cScale4 = this.cScale4 || S(this.primaryColor, {
        h: 60
      }), this.cScale5 = this.cScale5 || S(this.primaryColor, {
        h: 90
      }), this.cScale6 = this.cScale6 || S(this.primaryColor, {
        h: 120
      }), this.cScale7 = this.cScale7 || S(this.primaryColor, {
        h: 150
      }), this.cScale8 = this.cScale8 || S(this.primaryColor, {
        h: 210,
        l: 150
      }), this.cScale9 = this.cScale9 || S(this.primaryColor, {
        h: 270
      }), this.cScale10 = this.cScale10 || S(this.primaryColor, {
        h: 300
      }), this.cScale11 = this.cScale11 || S(this.primaryColor, {
        h: 330
      }), this.darkMode)
        for (let _ = 0; _ < this.THEME_COLOR_LIMIT; _++)
          this["cScale" + _] = J(this["cScale" + _], 75);
      else
        for (let _ = 0; _ < this.THEME_COLOR_LIMIT; _++)
          this["cScale" + _] = J(this["cScale" + _], 25);
      for (let _ = 0; _ < this.THEME_COLOR_LIMIT; _++)
        this["cScaleInv" + _] = this["cScaleInv" + _] || R(this["cScale" + _]);
      for (let _ = 0; _ < this.THEME_COLOR_LIMIT; _++)
        this.darkMode ? this["cScalePeer" + _] = this["cScalePeer" + _] || W(this["cScale" + _], 10) : this["cScalePeer" + _] = this["cScalePeer" + _] || J(this["cScale" + _], 10);
      this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
      for (let _ = 0; _ < this.THEME_COLOR_LIMIT; _++)
        this["cScaleLabel" + _] = this["cScaleLabel" + _] || this.scaleLabelColor;
      const k = this.darkMode ? -4 : -1;
      for (let _ = 0; _ < 5; _++)
        this["surface" + _] = this["surface" + _] || S(this.mainBkg, {
          h: 180,
          s: -15,
          l: k * (5 + _ * 3)
        }), this["surfacePeer" + _] = this["surfacePeer" + _] || S(this.mainBkg, {
          h: 180,
          s: -15,
          l: k * (8 + _ * 3)
        });
      this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || S(this.primaryColor, {
        h: 64
      }), this.fillType3 = this.fillType3 || S(this.secondaryColor, {
        h: 64
      }), this.fillType4 = this.fillType4 || S(this.primaryColor, {
        h: -64
      }), this.fillType5 = this.fillType5 || S(this.secondaryColor, {
        h: -64
      }), this.fillType6 = this.fillType6 || S(this.primaryColor, {
        h: 128
      }), this.fillType7 = this.fillType7 || S(this.secondaryColor, {
        h: 128
      }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || S(this.primaryColor, {
        l: -10
      }), this.pie5 = this.pie5 || S(this.secondaryColor, {
        l: -10
      }), this.pie6 = this.pie6 || S(this.tertiaryColor, {
        l: -10
      }), this.pie7 = this.pie7 || S(this.primaryColor, {
        h: 60,
        l: -10
      }), this.pie8 = this.pie8 || S(this.primaryColor, {
        h: -60,
        l: -10
      }), this.pie9 = this.pie9 || S(this.primaryColor, {
        h: 120,
        l: 0
      }), this.pie10 = this.pie10 || S(this.primaryColor, {
        h: 60,
        l: -20
      }), this.pie11 = this.pie11 || S(this.primaryColor, {
        h: -60,
        l: -20
      }), this.pie12 = this.pie12 || S(this.primaryColor, {
        h: 120,
        l: -10
      }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.radar = {
        axisColor: ((e = this.radar) == null ? void 0 : e.axisColor) || this.lineColor,
        axisStrokeWidth: ((t = this.radar) == null ? void 0 : t.axisStrokeWidth) || 2,
        axisLabelFontSize: ((i = this.radar) == null ? void 0 : i.axisLabelFontSize) || 12,
        curveOpacity: ((r = this.radar) == null ? void 0 : r.curveOpacity) || 0.5,
        curveStrokeWidth: ((n = this.radar) == null ? void 0 : n.curveStrokeWidth) || 2,
        graticuleColor: ((o = this.radar) == null ? void 0 : o.graticuleColor) || "#DEDEDE",
        graticuleStrokeWidth: ((s = this.radar) == null ? void 0 : s.graticuleStrokeWidth) || 1,
        graticuleOpacity: ((a = this.radar) == null ? void 0 : a.graticuleOpacity) || 0.3,
        legendBoxSize: ((l = this.radar) == null ? void 0 : l.legendBoxSize) || 12,
        legendFontSize: ((c = this.radar) == null ? void 0 : c.legendFontSize) || 12
      }, this.archEdgeColor = this.archEdgeColor || "#777", this.archEdgeArrowColor = this.archEdgeArrowColor || "#777", this.archEdgeWidth = this.archEdgeWidth || "3", this.archGroupBorderColor = this.archGroupBorderColor || "#000", this.archGroupBorderWidth = this.archGroupBorderWidth || "2px", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || S(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      }), this.quadrant3Fill = this.quadrant3Fill || S(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      }), this.quadrant4Fill = this.quadrant4Fill || S(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || S(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      }), this.quadrant3TextFill = this.quadrant3TextFill || S(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      }), this.quadrant4TextFill = this.quadrant4TextFill || S(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      }), this.quadrantPointFill = this.quadrantPointFill || pr(this.quadrant1Fill) ? W(this.quadrant1Fill) : J(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
        backgroundColor: ((h = this.xyChart) == null ? void 0 : h.backgroundColor) || this.background,
        titleColor: ((d = this.xyChart) == null ? void 0 : d.titleColor) || this.primaryTextColor,
        xAxisTitleColor: ((u = this.xyChart) == null ? void 0 : u.xAxisTitleColor) || this.primaryTextColor,
        xAxisLabelColor: ((p = this.xyChart) == null ? void 0 : p.xAxisLabelColor) || this.primaryTextColor,
        xAxisTickColor: ((f = this.xyChart) == null ? void 0 : f.xAxisTickColor) || this.primaryTextColor,
        xAxisLineColor: ((m = this.xyChart) == null ? void 0 : m.xAxisLineColor) || this.primaryTextColor,
        yAxisTitleColor: ((y = this.xyChart) == null ? void 0 : y.yAxisTitleColor) || this.primaryTextColor,
        yAxisLabelColor: ((x = this.xyChart) == null ? void 0 : x.yAxisLabelColor) || this.primaryTextColor,
        yAxisTickColor: ((b = this.xyChart) == null ? void 0 : b.yAxisTickColor) || this.primaryTextColor,
        yAxisLineColor: ((C = this.xyChart) == null ? void 0 : C.yAxisLineColor) || this.primaryTextColor,
        plotColorPalette: ((w = this.xyChart) == null ? void 0 : w.plotColorPalette) || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
      }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? J(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || S(this.primaryColor, {
        h: -30
      }), this.git4 = this.git4 || S(this.primaryColor, {
        h: -60
      }), this.git5 = this.git5 || S(this.primaryColor, {
        h: -90
      }), this.git6 = this.git6 || S(this.primaryColor, {
        h: 60
      }), this.git7 = this.git7 || S(this.primaryColor, {
        h: 120
      }), this.darkMode ? (this.git0 = W(this.git0, 25), this.git1 = W(this.git1, 25), this.git2 = W(this.git2, 25), this.git3 = W(this.git3, 25), this.git4 = W(this.git4, 25), this.git5 = W(this.git5, 25), this.git6 = W(this.git6, 25), this.git7 = W(this.git7, 25)) : (this.git0 = J(this.git0, 25), this.git1 = J(this.git1, 25), this.git2 = J(this.git2, 25), this.git3 = J(this.git3, 25), this.git4 = J(this.git4, 25), this.git5 = J(this.git5, 25), this.git6 = J(this.git6, 25), this.git7 = J(this.git7, 25)), this.gitInv0 = this.gitInv0 || R(this.git0), this.gitInv1 = this.gitInv1 || R(this.git1), this.gitInv2 = this.gitInv2 || R(this.git2), this.gitInv3 = this.gitInv3 || R(this.git3), this.gitInv4 = this.gitInv4 || R(this.git4), this.gitInv5 = this.gitInv5 || R(this.git5), this.gitInv6 = this.gitInv6 || R(this.git6), this.gitInv7 = this.gitInv7 || R(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Sn, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Tn;
    }
    calculate(e) {
      if (typeof e != "object") {
        this.updateColors();
        return;
      }
      const t = Object.keys(e);
      t.forEach((i) => {
        this[i] = e[i];
      }), this.updateColors(), t.forEach((i) => {
        this[i] = e[i];
      });
    }
  }, g(co, "Theme"), co);
  s0 = g((e) => {
    const t = new a0();
    return t.calculate(e), t;
  }, "getThemeVariables");
  l0 = (uo = class {
    constructor() {
      this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = W(this.primaryColor, 16), this.tertiaryColor = S(this.primaryColor, {
        h: -160
      }), this.primaryBorderColor = R(this.background), this.secondaryBorderColor = Pt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Pt(this.tertiaryColor, this.darkMode), this.primaryTextColor = R(this.primaryColor), this.secondaryTextColor = R(this.secondaryColor), this.tertiaryTextColor = R(this.tertiaryColor), this.lineColor = R(this.background), this.textColor = R(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = W(R("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#ccc", this.border2 = tr(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = J("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = J(this.sectionBkgColor, 10), this.taskBorderColor = tr(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = tr(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || W(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || J(this.mainBkg, 10), this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
    }
    updateColors() {
      var e, t, i, r, n, o, s, a, l, c, h, d, u, p, f, m, y, x, b, C, w;
      this.secondBkg = W(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = W(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.actorBorder, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = W(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = S(this.primaryColor, {
        h: 64
      }), this.fillType3 = S(this.secondaryColor, {
        h: 64
      }), this.fillType4 = S(this.primaryColor, {
        h: -64
      }), this.fillType5 = S(this.secondaryColor, {
        h: -64
      }), this.fillType6 = S(this.primaryColor, {
        h: 128
      }), this.fillType7 = S(this.secondaryColor, {
        h: 128
      }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || S(this.primaryColor, {
        h: 30
      }), this.cScale4 = this.cScale4 || S(this.primaryColor, {
        h: 60
      }), this.cScale5 = this.cScale5 || S(this.primaryColor, {
        h: 90
      }), this.cScale6 = this.cScale6 || S(this.primaryColor, {
        h: 120
      }), this.cScale7 = this.cScale7 || S(this.primaryColor, {
        h: 150
      }), this.cScale8 = this.cScale8 || S(this.primaryColor, {
        h: 210
      }), this.cScale9 = this.cScale9 || S(this.primaryColor, {
        h: 270
      }), this.cScale10 = this.cScale10 || S(this.primaryColor, {
        h: 300
      }), this.cScale11 = this.cScale11 || S(this.primaryColor, {
        h: 330
      });
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["cScaleInv" + k] = this["cScaleInv" + k] || R(this["cScale" + k]);
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["cScalePeer" + k] = this["cScalePeer" + k] || W(this["cScale" + k], 10);
      for (let k = 0; k < 5; k++)
        this["surface" + k] = this["surface" + k] || S(this.mainBkg, {
          h: 30,
          s: -30,
          l: -(-10 + k * 4)
        }), this["surfacePeer" + k] = this["surfacePeer" + k] || S(this.mainBkg, {
          h: 30,
          s: -30,
          l: -(-7 + k * 4)
        });
      this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["cScaleLabel" + k] = this["cScaleLabel" + k] || this.scaleLabelColor;
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["pie" + k] = this["cScale" + k];
      this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || S(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      }), this.quadrant3Fill = this.quadrant3Fill || S(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      }), this.quadrant4Fill = this.quadrant4Fill || S(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || S(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      }), this.quadrant3TextFill = this.quadrant3TextFill || S(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      }), this.quadrant4TextFill = this.quadrant4TextFill || S(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      }), this.quadrantPointFill = this.quadrantPointFill || pr(this.quadrant1Fill) ? W(this.quadrant1Fill) : J(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
        backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
        titleColor: ((t = this.xyChart) == null ? void 0 : t.titleColor) || this.primaryTextColor,
        xAxisTitleColor: ((i = this.xyChart) == null ? void 0 : i.xAxisTitleColor) || this.primaryTextColor,
        xAxisLabelColor: ((r = this.xyChart) == null ? void 0 : r.xAxisLabelColor) || this.primaryTextColor,
        xAxisTickColor: ((n = this.xyChart) == null ? void 0 : n.xAxisTickColor) || this.primaryTextColor,
        xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
        yAxisTitleColor: ((s = this.xyChart) == null ? void 0 : s.yAxisTitleColor) || this.primaryTextColor,
        yAxisLabelColor: ((a = this.xyChart) == null ? void 0 : a.yAxisLabelColor) || this.primaryTextColor,
        yAxisTickColor: ((l = this.xyChart) == null ? void 0 : l.yAxisTickColor) || this.primaryTextColor,
        yAxisLineColor: ((c = this.xyChart) == null ? void 0 : c.yAxisLineColor) || this.primaryTextColor,
        plotColorPalette: ((h = this.xyChart) == null ? void 0 : h.plotColorPalette) || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
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
        legendFontSize: ((w = this.radar) == null ? void 0 : w.legendFontSize) || 12
      }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? J(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = W(this.secondaryColor, 20), this.git1 = W(this.pie2 || this.secondaryColor, 20), this.git2 = W(this.pie3 || this.tertiaryColor, 20), this.git3 = W(this.pie4 || S(this.primaryColor, {
        h: -30
      }), 20), this.git4 = W(this.pie5 || S(this.primaryColor, {
        h: -60
      }), 20), this.git5 = W(this.pie6 || S(this.primaryColor, {
        h: -90
      }), 10), this.git6 = W(this.pie7 || S(this.primaryColor, {
        h: 60
      }), 10), this.git7 = W(this.pie8 || S(this.primaryColor, {
        h: 120
      }), 20), this.gitInv0 = this.gitInv0 || R(this.git0), this.gitInv1 = this.gitInv1 || R(this.git1), this.gitInv2 = this.gitInv2 || R(this.git2), this.gitInv3 = this.gitInv3 || R(this.git3), this.gitInv4 = this.gitInv4 || R(this.git4), this.gitInv5 = this.gitInv5 || R(this.git5), this.gitInv6 = this.gitInv6 || R(this.git6), this.gitInv7 = this.gitInv7 || R(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || R(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || R(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || W(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || W(this.background, 2), this.nodeBorder = this.nodeBorder || "#999";
    }
    calculate(e) {
      if (typeof e != "object") {
        this.updateColors();
        return;
      }
      const t = Object.keys(e);
      t.forEach((i) => {
        this[i] = e[i];
      }), this.updateColors(), t.forEach((i) => {
        this[i] = e[i];
      });
    }
  }, g(uo, "Theme"), uo);
  h0 = g((e) => {
    const t = new l0();
    return t.calculate(e), t;
  }, "getThemeVariables");
  c0 = (po = class {
    constructor() {
      this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = S(this.primaryColor, {
        h: 120
      }), this.secondaryColor = "#ffffde", this.tertiaryColor = S(this.primaryColor, {
        h: -160
      }), this.primaryBorderColor = Pt(this.primaryColor, this.darkMode), this.secondaryBorderColor = Pt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Pt(this.tertiaryColor, this.darkMode), this.primaryTextColor = R(this.primaryColor), this.secondaryTextColor = R(this.secondaryColor), this.tertiaryTextColor = R(this.tertiaryColor), this.lineColor = R(this.background), this.textColor = R(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "rgba(232,232,232, 0.8)", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.sectionBkgColor = tr(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = "calculated", this.rowEven = "calculated", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
    }
    updateColors() {
      var e, t, i, r, n, o, s, a, l, c, h, d, u, p, f, m, y, x, b, C, w;
      this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || S(this.primaryColor, {
        h: 30
      }), this.cScale4 = this.cScale4 || S(this.primaryColor, {
        h: 60
      }), this.cScale5 = this.cScale5 || S(this.primaryColor, {
        h: 90
      }), this.cScale6 = this.cScale6 || S(this.primaryColor, {
        h: 120
      }), this.cScale7 = this.cScale7 || S(this.primaryColor, {
        h: 150
      }), this.cScale8 = this.cScale8 || S(this.primaryColor, {
        h: 210
      }), this.cScale9 = this.cScale9 || S(this.primaryColor, {
        h: 270
      }), this.cScale10 = this.cScale10 || S(this.primaryColor, {
        h: 300
      }), this.cScale11 = this.cScale11 || S(this.primaryColor, {
        h: 330
      }), this.cScalePeer1 = this.cScalePeer1 || J(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || J(this.tertiaryColor, 40);
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["cScale" + k] = J(this["cScale" + k], 10), this["cScalePeer" + k] = this["cScalePeer" + k] || J(this["cScale" + k], 25);
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["cScaleInv" + k] = this["cScaleInv" + k] || S(this["cScale" + k], {
          h: 180
        });
      for (let k = 0; k < 5; k++)
        this["surface" + k] = this["surface" + k] || S(this.mainBkg, {
          h: 30,
          l: -(5 + k * 5)
        }), this["surfacePeer" + k] = this["surfacePeer" + k] || S(this.mainBkg, {
          h: 30,
          l: -(7 + k * 5)
        });
      if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
        this.cScaleLabel0 = this.cScaleLabel0 || R(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || R(this.labelTextColor);
        for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
          this["cScaleLabel" + k] = this["cScaleLabel" + k] || this.labelTextColor;
      }
      this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = W(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || W(this.primaryColor, 75) || "#ffffff", this.rowEven = this.rowEven || W(this.primaryColor, 1), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = S(this.primaryColor, {
        h: 64
      }), this.fillType3 = S(this.secondaryColor, {
        h: 64
      }), this.fillType4 = S(this.primaryColor, {
        h: -64
      }), this.fillType5 = S(this.secondaryColor, {
        h: -64
      }), this.fillType6 = S(this.primaryColor, {
        h: 128
      }), this.fillType7 = S(this.secondaryColor, {
        h: 128
      }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || S(this.tertiaryColor, {
        l: -40
      }), this.pie4 = this.pie4 || S(this.primaryColor, {
        l: -10
      }), this.pie5 = this.pie5 || S(this.secondaryColor, {
        l: -30
      }), this.pie6 = this.pie6 || S(this.tertiaryColor, {
        l: -20
      }), this.pie7 = this.pie7 || S(this.primaryColor, {
        h: 60,
        l: -20
      }), this.pie8 = this.pie8 || S(this.primaryColor, {
        h: -60,
        l: -40
      }), this.pie9 = this.pie9 || S(this.primaryColor, {
        h: 120,
        l: -40
      }), this.pie10 = this.pie10 || S(this.primaryColor, {
        h: 60,
        l: -40
      }), this.pie11 = this.pie11 || S(this.primaryColor, {
        h: -90,
        l: -40
      }), this.pie12 = this.pie12 || S(this.primaryColor, {
        h: 120,
        l: -30
      }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || S(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      }), this.quadrant3Fill = this.quadrant3Fill || S(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      }), this.quadrant4Fill = this.quadrant4Fill || S(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || S(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      }), this.quadrant3TextFill = this.quadrant3TextFill || S(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      }), this.quadrant4TextFill = this.quadrant4TextFill || S(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      }), this.quadrantPointFill = this.quadrantPointFill || pr(this.quadrant1Fill) ? W(this.quadrant1Fill) : J(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.radar = {
        axisColor: ((e = this.radar) == null ? void 0 : e.axisColor) || this.lineColor,
        axisStrokeWidth: ((t = this.radar) == null ? void 0 : t.axisStrokeWidth) || 2,
        axisLabelFontSize: ((i = this.radar) == null ? void 0 : i.axisLabelFontSize) || 12,
        curveOpacity: ((r = this.radar) == null ? void 0 : r.curveOpacity) || 0.5,
        curveStrokeWidth: ((n = this.radar) == null ? void 0 : n.curveStrokeWidth) || 2,
        graticuleColor: ((o = this.radar) == null ? void 0 : o.graticuleColor) || "#DEDEDE",
        graticuleStrokeWidth: ((s = this.radar) == null ? void 0 : s.graticuleStrokeWidth) || 1,
        graticuleOpacity: ((a = this.radar) == null ? void 0 : a.graticuleOpacity) || 0.3,
        legendBoxSize: ((l = this.radar) == null ? void 0 : l.legendBoxSize) || 12,
        legendFontSize: ((c = this.radar) == null ? void 0 : c.legendFontSize) || 12
      }, this.xyChart = {
        backgroundColor: ((h = this.xyChart) == null ? void 0 : h.backgroundColor) || this.background,
        titleColor: ((d = this.xyChart) == null ? void 0 : d.titleColor) || this.primaryTextColor,
        xAxisTitleColor: ((u = this.xyChart) == null ? void 0 : u.xAxisTitleColor) || this.primaryTextColor,
        xAxisLabelColor: ((p = this.xyChart) == null ? void 0 : p.xAxisLabelColor) || this.primaryTextColor,
        xAxisTickColor: ((f = this.xyChart) == null ? void 0 : f.xAxisTickColor) || this.primaryTextColor,
        xAxisLineColor: ((m = this.xyChart) == null ? void 0 : m.xAxisLineColor) || this.primaryTextColor,
        yAxisTitleColor: ((y = this.xyChart) == null ? void 0 : y.yAxisTitleColor) || this.primaryTextColor,
        yAxisLabelColor: ((x = this.xyChart) == null ? void 0 : x.yAxisLabelColor) || this.primaryTextColor,
        yAxisTickColor: ((b = this.xyChart) == null ? void 0 : b.yAxisTickColor) || this.primaryTextColor,
        yAxisLineColor: ((C = this.xyChart) == null ? void 0 : C.yAxisLineColor) || this.primaryTextColor,
        plotColorPalette: ((w = this.xyChart) == null ? void 0 : w.plotColorPalette) || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
      }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || S(this.primaryColor, {
        h: -30
      }), this.git4 = this.git4 || S(this.primaryColor, {
        h: -60
      }), this.git5 = this.git5 || S(this.primaryColor, {
        h: -90
      }), this.git6 = this.git6 || S(this.primaryColor, {
        h: 60
      }), this.git7 = this.git7 || S(this.primaryColor, {
        h: 120
      }), this.darkMode ? (this.git0 = W(this.git0, 25), this.git1 = W(this.git1, 25), this.git2 = W(this.git2, 25), this.git3 = W(this.git3, 25), this.git4 = W(this.git4, 25), this.git5 = W(this.git5, 25), this.git6 = W(this.git6, 25), this.git7 = W(this.git7, 25)) : (this.git0 = J(this.git0, 25), this.git1 = J(this.git1, 25), this.git2 = J(this.git2, 25), this.git3 = J(this.git3, 25), this.git4 = J(this.git4, 25), this.git5 = J(this.git5, 25), this.git6 = J(this.git6, 25), this.git7 = J(this.git7, 25)), this.gitInv0 = this.gitInv0 || J(R(this.git0), 25), this.gitInv1 = this.gitInv1 || R(this.git1), this.gitInv2 = this.gitInv2 || R(this.git2), this.gitInv3 = this.gitInv3 || R(this.git3), this.gitInv4 = this.gitInv4 || R(this.git4), this.gitInv5 = this.gitInv5 || R(this.git5), this.gitInv6 = this.gitInv6 || R(this.git6), this.gitInv7 = this.gitInv7 || R(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || R(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || R(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Sn, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Tn;
    }
    calculate(e) {
      if (Object.keys(this).forEach((i) => {
        this[i] === "calculated" && (this[i] = void 0);
      }), typeof e != "object") {
        this.updateColors();
        return;
      }
      const t = Object.keys(e);
      t.forEach((i) => {
        this[i] = e[i];
      }), this.updateColors(), t.forEach((i) => {
        this[i] = e[i];
      });
    }
  }, g(po, "Theme"), po);
  d0 = g((e) => {
    const t = new c0();
    return t.calculate(e), t;
  }, "getThemeVariables");
  u0 = (go = class {
    constructor() {
      this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = W("#cde498", 10), this.primaryBorderColor = Pt(this.primaryColor, this.darkMode), this.secondaryBorderColor = Pt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Pt(this.tertiaryColor, this.darkMode), this.primaryTextColor = R(this.primaryColor), this.secondaryTextColor = R(this.secondaryColor), this.tertiaryTextColor = R(this.primaryColor), this.lineColor = R(this.background), this.textColor = R(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
    }
    updateColors() {
      var e, t, i, r, n, o, s, a, l, c, h, d, u, p, f, m, y, x, b, C, w;
      this.actorBorder = J(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || S(this.primaryColor, {
        h: 30
      }), this.cScale4 = this.cScale4 || S(this.primaryColor, {
        h: 60
      }), this.cScale5 = this.cScale5 || S(this.primaryColor, {
        h: 90
      }), this.cScale6 = this.cScale6 || S(this.primaryColor, {
        h: 120
      }), this.cScale7 = this.cScale7 || S(this.primaryColor, {
        h: 150
      }), this.cScale8 = this.cScale8 || S(this.primaryColor, {
        h: 210
      }), this.cScale9 = this.cScale9 || S(this.primaryColor, {
        h: 270
      }), this.cScale10 = this.cScale10 || S(this.primaryColor, {
        h: 300
      }), this.cScale11 = this.cScale11 || S(this.primaryColor, {
        h: 330
      }), this.cScalePeer1 = this.cScalePeer1 || J(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || J(this.tertiaryColor, 40);
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["cScale" + k] = J(this["cScale" + k], 10), this["cScalePeer" + k] = this["cScalePeer" + k] || J(this["cScale" + k], 25);
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["cScaleInv" + k] = this["cScaleInv" + k] || S(this["cScale" + k], {
          h: 180
        });
      this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["cScaleLabel" + k] = this["cScaleLabel" + k] || this.scaleLabelColor;
      for (let k = 0; k < 5; k++)
        this["surface" + k] = this["surface" + k] || S(this.mainBkg, {
          h: 30,
          s: -30,
          l: -(5 + k * 5)
        }), this["surfacePeer" + k] = this["surfacePeer" + k] || S(this.mainBkg, {
          h: 30,
          s: -30,
          l: -(8 + k * 5)
        });
      this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || W(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || W(this.mainBkg, 20), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = S(this.primaryColor, {
        h: 64
      }), this.fillType3 = S(this.secondaryColor, {
        h: 64
      }), this.fillType4 = S(this.primaryColor, {
        h: -64
      }), this.fillType5 = S(this.secondaryColor, {
        h: -64
      }), this.fillType6 = S(this.primaryColor, {
        h: 128
      }), this.fillType7 = S(this.secondaryColor, {
        h: 128
      }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || S(this.primaryColor, {
        l: -30
      }), this.pie5 = this.pie5 || S(this.secondaryColor, {
        l: -30
      }), this.pie6 = this.pie6 || S(this.tertiaryColor, {
        h: 40,
        l: -40
      }), this.pie7 = this.pie7 || S(this.primaryColor, {
        h: 60,
        l: -10
      }), this.pie8 = this.pie8 || S(this.primaryColor, {
        h: -60,
        l: -10
      }), this.pie9 = this.pie9 || S(this.primaryColor, {
        h: 120,
        l: 0
      }), this.pie10 = this.pie10 || S(this.primaryColor, {
        h: 60,
        l: -50
      }), this.pie11 = this.pie11 || S(this.primaryColor, {
        h: -60,
        l: -50
      }), this.pie12 = this.pie12 || S(this.primaryColor, {
        h: 120,
        l: -50
      }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || S(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      }), this.quadrant3Fill = this.quadrant3Fill || S(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      }), this.quadrant4Fill = this.quadrant4Fill || S(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || S(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      }), this.quadrant3TextFill = this.quadrant3TextFill || S(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      }), this.quadrant4TextFill = this.quadrant4TextFill || S(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      }), this.quadrantPointFill = this.quadrantPointFill || pr(this.quadrant1Fill) ? W(this.quadrant1Fill) : J(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.packet = {
        startByteColor: this.primaryTextColor,
        endByteColor: this.primaryTextColor,
        labelColor: this.primaryTextColor,
        titleColor: this.primaryTextColor,
        blockStrokeColor: this.primaryTextColor,
        blockFillColor: this.mainBkg
      }, this.radar = {
        axisColor: ((e = this.radar) == null ? void 0 : e.axisColor) || this.lineColor,
        axisStrokeWidth: ((t = this.radar) == null ? void 0 : t.axisStrokeWidth) || 2,
        axisLabelFontSize: ((i = this.radar) == null ? void 0 : i.axisLabelFontSize) || 12,
        curveOpacity: ((r = this.radar) == null ? void 0 : r.curveOpacity) || 0.5,
        curveStrokeWidth: ((n = this.radar) == null ? void 0 : n.curveStrokeWidth) || 2,
        graticuleColor: ((o = this.radar) == null ? void 0 : o.graticuleColor) || "#DEDEDE",
        graticuleStrokeWidth: ((s = this.radar) == null ? void 0 : s.graticuleStrokeWidth) || 1,
        graticuleOpacity: ((a = this.radar) == null ? void 0 : a.graticuleOpacity) || 0.3,
        legendBoxSize: ((l = this.radar) == null ? void 0 : l.legendBoxSize) || 12,
        legendFontSize: ((c = this.radar) == null ? void 0 : c.legendFontSize) || 12
      }, this.xyChart = {
        backgroundColor: ((h = this.xyChart) == null ? void 0 : h.backgroundColor) || this.background,
        titleColor: ((d = this.xyChart) == null ? void 0 : d.titleColor) || this.primaryTextColor,
        xAxisTitleColor: ((u = this.xyChart) == null ? void 0 : u.xAxisTitleColor) || this.primaryTextColor,
        xAxisLabelColor: ((p = this.xyChart) == null ? void 0 : p.xAxisLabelColor) || this.primaryTextColor,
        xAxisTickColor: ((f = this.xyChart) == null ? void 0 : f.xAxisTickColor) || this.primaryTextColor,
        xAxisLineColor: ((m = this.xyChart) == null ? void 0 : m.xAxisLineColor) || this.primaryTextColor,
        yAxisTitleColor: ((y = this.xyChart) == null ? void 0 : y.yAxisTitleColor) || this.primaryTextColor,
        yAxisLabelColor: ((x = this.xyChart) == null ? void 0 : x.yAxisLabelColor) || this.primaryTextColor,
        yAxisTickColor: ((b = this.xyChart) == null ? void 0 : b.yAxisTickColor) || this.primaryTextColor,
        yAxisLineColor: ((C = this.xyChart) == null ? void 0 : C.yAxisLineColor) || this.primaryTextColor,
        plotColorPalette: ((w = this.xyChart) == null ? void 0 : w.plotColorPalette) || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
      }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || S(this.primaryColor, {
        h: -30
      }), this.git4 = this.git4 || S(this.primaryColor, {
        h: -60
      }), this.git5 = this.git5 || S(this.primaryColor, {
        h: -90
      }), this.git6 = this.git6 || S(this.primaryColor, {
        h: 60
      }), this.git7 = this.git7 || S(this.primaryColor, {
        h: 120
      }), this.darkMode ? (this.git0 = W(this.git0, 25), this.git1 = W(this.git1, 25), this.git2 = W(this.git2, 25), this.git3 = W(this.git3, 25), this.git4 = W(this.git4, 25), this.git5 = W(this.git5, 25), this.git6 = W(this.git6, 25), this.git7 = W(this.git7, 25)) : (this.git0 = J(this.git0, 25), this.git1 = J(this.git1, 25), this.git2 = J(this.git2, 25), this.git3 = J(this.git3, 25), this.git4 = J(this.git4, 25), this.git5 = J(this.git5, 25), this.git6 = J(this.git6, 25), this.git7 = J(this.git7, 25)), this.gitInv0 = this.gitInv0 || R(this.git0), this.gitInv1 = this.gitInv1 || R(this.git1), this.gitInv2 = this.gitInv2 || R(this.git2), this.gitInv3 = this.gitInv3 || R(this.git3), this.gitInv4 = this.gitInv4 || R(this.git4), this.gitInv5 = this.gitInv5 || R(this.git5), this.gitInv6 = this.gitInv6 || R(this.git6), this.gitInv7 = this.gitInv7 || R(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || R(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || R(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Sn, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Tn;
    }
    calculate(e) {
      if (typeof e != "object") {
        this.updateColors();
        return;
      }
      const t = Object.keys(e);
      t.forEach((i) => {
        this[i] = e[i];
      }), this.updateColors(), t.forEach((i) => {
        this[i] = e[i];
      });
    }
  }, g(go, "Theme"), go);
  p0 = g((e) => {
    const t = new u0();
    return t.calculate(e), t;
  }, "getThemeVariables");
  g0 = (fo = class {
    constructor() {
      this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = W(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = S(this.primaryColor, {
        h: -160
      }), this.primaryBorderColor = Pt(this.primaryColor, this.darkMode), this.secondaryBorderColor = Pt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Pt(this.tertiaryColor, this.darkMode), this.primaryTextColor = R(this.primaryColor), this.secondaryTextColor = R(this.secondaryColor), this.tertiaryTextColor = R(this.tertiaryColor), this.lineColor = R(this.background), this.textColor = R(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = this.actorBorder, this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || W(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || "#f4f4f4", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
    }
    updateColors() {
      var e, t, i, r, n, o, s, a, l, c, h, d, u, p, f, m, y, x, b, C, w;
      this.secondBkg = W(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = W(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.actorBorder, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["cScaleInv" + k] = this["cScaleInv" + k] || R(this["cScale" + k]);
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this.darkMode ? this["cScalePeer" + k] = this["cScalePeer" + k] || W(this["cScale" + k], 10) : this["cScalePeer" + k] = this["cScalePeer" + k] || J(this["cScale" + k], 10);
      this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["cScaleLabel" + k] = this["cScaleLabel" + k] || this.scaleLabelColor;
      for (let k = 0; k < 5; k++)
        this["surface" + k] = this["surface" + k] || S(this.mainBkg, {
          l: -(5 + k * 5)
        }), this["surfacePeer" + k] = this["surfacePeer" + k] || S(this.mainBkg, {
          l: -(8 + k * 5)
        });
      this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = W(this.contrast, 30), this.sectionBkgColor2 = W(this.contrast, 30), this.taskBorderColor = J(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = W(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = J(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = S(this.primaryColor, {
        h: 64
      }), this.fillType3 = S(this.secondaryColor, {
        h: 64
      }), this.fillType4 = S(this.primaryColor, {
        h: -64
      }), this.fillType5 = S(this.secondaryColor, {
        h: -64
      }), this.fillType6 = S(this.primaryColor, {
        h: 128
      }), this.fillType7 = S(this.secondaryColor, {
        h: 128
      });
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["pie" + k] = this["cScale" + k];
      this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || S(this.primaryColor, {
        r: 5,
        g: 5,
        b: 5
      }), this.quadrant3Fill = this.quadrant3Fill || S(this.primaryColor, {
        r: 10,
        g: 10,
        b: 10
      }), this.quadrant4Fill = this.quadrant4Fill || S(this.primaryColor, {
        r: 15,
        g: 15,
        b: 15
      }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || S(this.primaryTextColor, {
        r: -5,
        g: -5,
        b: -5
      }), this.quadrant3TextFill = this.quadrant3TextFill || S(this.primaryTextColor, {
        r: -10,
        g: -10,
        b: -10
      }), this.quadrant4TextFill = this.quadrant4TextFill || S(this.primaryTextColor, {
        r: -15,
        g: -15,
        b: -15
      }), this.quadrantPointFill = this.quadrantPointFill || pr(this.quadrant1Fill) ? W(this.quadrant1Fill) : J(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
        backgroundColor: ((e = this.xyChart) == null ? void 0 : e.backgroundColor) || this.background,
        titleColor: ((t = this.xyChart) == null ? void 0 : t.titleColor) || this.primaryTextColor,
        xAxisTitleColor: ((i = this.xyChart) == null ? void 0 : i.xAxisTitleColor) || this.primaryTextColor,
        xAxisLabelColor: ((r = this.xyChart) == null ? void 0 : r.xAxisLabelColor) || this.primaryTextColor,
        xAxisTickColor: ((n = this.xyChart) == null ? void 0 : n.xAxisTickColor) || this.primaryTextColor,
        xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
        yAxisTitleColor: ((s = this.xyChart) == null ? void 0 : s.yAxisTitleColor) || this.primaryTextColor,
        yAxisLabelColor: ((a = this.xyChart) == null ? void 0 : a.yAxisLabelColor) || this.primaryTextColor,
        yAxisTickColor: ((l = this.xyChart) == null ? void 0 : l.yAxisTickColor) || this.primaryTextColor,
        yAxisLineColor: ((c = this.xyChart) == null ? void 0 : c.yAxisLineColor) || this.primaryTextColor,
        plotColorPalette: ((h = this.xyChart) == null ? void 0 : h.plotColorPalette) || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
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
        legendFontSize: ((w = this.radar) == null ? void 0 : w.legendFontSize) || 12
      }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = J(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || S(this.primaryColor, {
        h: -30
      }), this.git4 = this.pie5 || S(this.primaryColor, {
        h: -60
      }), this.git5 = this.pie6 || S(this.primaryColor, {
        h: -90
      }), this.git6 = this.pie7 || S(this.primaryColor, {
        h: 60
      }), this.git7 = this.pie8 || S(this.primaryColor, {
        h: 120
      }), this.gitInv0 = this.gitInv0 || R(this.git0), this.gitInv1 = this.gitInv1 || R(this.git1), this.gitInv2 = this.gitInv2 || R(this.git2), this.gitInv3 = this.gitInv3 || R(this.git3), this.gitInv4 = this.gitInv4 || R(this.git4), this.gitInv5 = this.gitInv5 || R(this.git5), this.gitInv6 = this.gitInv6 || R(this.git6), this.gitInv7 = this.gitInv7 || R(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Sn, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Tn;
    }
    calculate(e) {
      if (typeof e != "object") {
        this.updateColors();
        return;
      }
      const t = Object.keys(e);
      t.forEach((i) => {
        this[i] = e[i];
      }), this.updateColors(), t.forEach((i) => {
        this[i] = e[i];
      });
    }
  }, g(fo, "Theme"), fo);
  f0 = g((e) => {
    const t = new g0();
    return t.calculate(e), t;
  }, "getThemeVariables");
  Te = {
    base: {
      getThemeVariables: s0
    },
    dark: {
      getThemeVariables: h0
    },
    default: {
      getThemeVariables: d0
    },
    forest: {
      getThemeVariables: p0
    },
    neutral: {
      getThemeVariables: f0
    }
  };
  ke = {
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
  Mh = {
    ...ke,
    deterministicIDSeed: void 0,
    elk: {
      mergeEdges: false,
      nodePlacementStrategy: "BRANDES_KOEPF"
    },
    themeCSS: void 0,
    themeVariables: Te.default.getThemeVariables(),
    sequence: {
      ...ke.sequence,
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
      ...ke.gantt,
      tickInterval: void 0,
      useWidth: void 0
    },
    c4: {
      ...ke.c4,
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
      ...ke.pie,
      useWidth: 984
    },
    xyChart: {
      ...ke.xyChart,
      useWidth: void 0
    },
    requirement: {
      ...ke.requirement,
      useWidth: void 0
    },
    packet: {
      ...ke.packet
    },
    radar: {
      ...ke.radar
    }
  };
  Lh = g((e, t = "") => Object.keys(e).reduce((i, r) => Array.isArray(e[r]) ? i : typeof e[r] == "object" && e[r] !== null ? [
    ...i,
    t + r,
    ...Lh(e[r], "")
  ] : [
    ...i,
    t + r
  ], []), "keyify");
  m0 = new Set(Lh(Mh, ""));
  Ah = Mh;
  Yr = g((e) => {
    if ($.debug("sanitizeDirective called with", e), !(typeof e != "object" || e == null)) {
      if (Array.isArray(e)) {
        e.forEach((t) => Yr(t));
        return;
      }
      for (const t of Object.keys(e)) {
        if ($.debug("Checking key", t), t.startsWith("__") || t.includes("proto") || t.includes("constr") || !m0.has(t) || e[t] == null) {
          $.debug("sanitize deleting key: ", t), delete e[t];
          continue;
        }
        if (typeof e[t] == "object") {
          $.debug("sanitizing object", t), Yr(e[t]);
          continue;
        }
        const i = [
          "themeCSS",
          "fontFamily",
          "altFontFamily"
        ];
        for (const r of i)
          t.includes(r) && ($.debug("sanitizing css option", t), e[t] = y0(e[t]));
      }
      if (e.themeVariables)
        for (const t of Object.keys(e.themeVariables)) {
          const i = e.themeVariables[t];
          i != null && i.match && !i.match(/^[\d "#%(),.;A-Za-z]+$/) && (e.themeVariables[t] = "");
        }
      $.debug("After sanitization", e);
    }
  }, "sanitizeDirective");
  y0 = g((e) => {
    let t = 0, i = 0;
    for (const r of e) {
      if (t < i)
        return "{ /* ERROR: Unbalanced CSS */ }";
      r === "{" ? t++ : r === "}" && i++;
    }
    return t !== i ? "{ /* ERROR: Unbalanced CSS */ }" : e;
  }, "sanitizeCss");
  Ci = Object.freeze(Ah);
  Zt = Ft({}, Ci);
  vi = [];
  ir = Ft({}, Ci);
  Bn = g((e, t) => {
    let i = Ft({}, e), r = {};
    for (const n of t)
      Oh(n), r = Ft(r, n);
    if (i = Ft(i, r), r.theme && r.theme in Te) {
      const n = Ft({}, Fh), o = Ft(n.themeVariables || {}, r.themeVariables);
      i.theme && i.theme in Te && (i.themeVariables = Te[i.theme].getThemeVariables(o));
    }
    return ir = i, Dh(ir), ir;
  }, "updateCurrentConfig");
  x0 = g((e) => (Zt = Ft({}, Ci), Zt = Ft(Zt, e), e.theme && Te[e.theme] && (Zt.themeVariables = Te[e.theme].getThemeVariables(e.themeVariables)), Bn(Zt, vi), Zt), "setSiteConfig");
  b0 = g((e) => {
    Fh = Ft({}, e);
  }, "saveConfigFromInitialize");
  k0 = g((e) => (Zt = Ft(Zt, e), Bn(Zt, vi), Zt), "updateSiteConfig");
  Eh = g(() => Ft({}, Zt), "getSiteConfig");
  $h = g((e) => (Dh(e), Ft(ir, e), Ut()), "setConfig");
  Ut = g(() => Ft({}, ir), "getConfig");
  Oh = g((e) => {
    e && ([
      "secure",
      ...Zt.secure ?? []
    ].forEach((t) => {
      Object.hasOwn(e, t) && ($.debug(`Denied attempt to modify a secure key ${t}`, e[t]), delete e[t]);
    }), Object.keys(e).forEach((t) => {
      t.startsWith("__") && delete e[t];
    }), Object.keys(e).forEach((t) => {
      typeof e[t] == "string" && (e[t].includes("<") || e[t].includes(">") || e[t].includes("url(data:")) && delete e[t], typeof e[t] == "object" && Oh(e[t]);
    }));
  }, "sanitize");
  C0 = g((e) => {
    var t;
    Yr(e), e.fontFamily && !((t = e.themeVariables) != null && t.fontFamily) && (e.themeVariables = {
      ...e.themeVariables,
      fontFamily: e.fontFamily
    }), vi.push(e), Bn(Zt, vi);
  }, "addDirective");
  Gr = g((e = Zt) => {
    vi = [], Bn(e, vi);
  }, "reset");
  v0 = {
    LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
  };
  Qs = {};
  w0 = g((e) => {
    Qs[e] || ($.warn(v0[e]), Qs[e] = true);
  }, "issueWarning");
  Dh = g((e) => {
    e && (e.lazyLoadedDiagrams || e.loadExternalDiagramsAtStartup) && w0("LAZY_LOAD_DEPRECATED");
  }, "checkConfig");
  gr = /<br\s*\/?>/gi;
  _0 = g((e) => e ? Ph(e).replace(/\\n/g, "#br#").split("#br#") : [
    ""
  ], "getRows");
  S0 = (() => {
    let e = false;
    return () => {
      e || (Ih(), e = true);
    };
  })();
  function Ih() {
    const e = "data-temp-href-target";
    bi.addHook("beforeSanitizeAttributes", (t) => {
      t instanceof Element && t.tagName === "A" && t.hasAttribute("target") && t.setAttribute(e, t.getAttribute("target") ?? "");
    }), bi.addHook("afterSanitizeAttributes", (t) => {
      t instanceof Element && t.tagName === "A" && t.hasAttribute(e) && (t.setAttribute("target", t.getAttribute(e) ?? ""), t.removeAttribute(e), t.getAttribute("target") === "_blank" && t.setAttribute("rel", "noopener"));
    });
  }
  g(Ih, "setupDompurifyHooks");
  let zh, Js, T0, B0, M0, L0, Ph, A0, F0, E0, No, $0, O0, tl, qo, D0, I0, Pr, P0, R0, N0;
  zh = g((e) => (S0(), bi.sanitize(e)), "removeScript");
  Js = g((e, t) => {
    var i;
    if (((i = t.flowchart) == null ? void 0 : i.htmlLabels) !== false) {
      const r = t.securityLevel;
      r === "antiscript" || r === "strict" ? e = zh(e) : r !== "loose" && (e = Ph(e), e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;"), e = e.replace(/=/g, "&equals;"), e = L0(e));
    }
    return e;
  }, "sanitizeMore");
  Xe = g((e, t) => e && (t.dompurifyConfig ? e = bi.sanitize(Js(e, t), t.dompurifyConfig).toString() : e = bi.sanitize(Js(e, t), {
    FORBID_TAGS: [
      "style"
    ]
  }).toString(), e), "sanitizeText");
  T0 = g((e, t) => typeof e == "string" ? Xe(e, t) : e.flat().map((i) => Xe(i, t)), "sanitizeTextOrArray");
  B0 = g((e) => gr.test(e), "hasBreaks");
  M0 = g((e) => e.split(gr), "splitBreaks");
  L0 = g((e) => e.replace(/#br#/g, "<br/>"), "placeholderToBreak");
  Ph = g((e) => e.replace(gr, "#br#"), "breakToPlaceholder");
  A0 = g((e) => {
    let t = "";
    return e && (t = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, t = t.replaceAll(/\(/g, "\\("), t = t.replaceAll(/\)/g, "\\)")), t;
  }, "getUrl");
  vt = g((e) => !(e === false || [
    "false",
    "null",
    "0"
  ].includes(String(e).trim().toLowerCase())), "evaluate");
  F0 = g(function(...e) {
    const t = e.filter((i) => !isNaN(i));
    return Math.max(...t);
  }, "getMax");
  E0 = g(function(...e) {
    const t = e.filter((i) => !isNaN(i));
    return Math.min(...t);
  }, "getMin");
  Ks = g(function(e) {
    const t = e.split(/(,)/), i = [];
    for (let r = 0; r < t.length; r++) {
      let n = t[r];
      if (n === "," && r > 0 && r + 1 < t.length) {
        const o = t[r - 1], s = t[r + 1];
        $0(o, s) && (n = o + "," + s, r++, i.pop());
      }
      i.push(O0(n));
    }
    return i.join("");
  }, "parseGenericTypes");
  No = g((e, t) => Math.max(0, e.split(t).length - 1), "countOccurrence");
  $0 = g((e, t) => {
    const i = No(e, "~"), r = No(t, "~");
    return i === 1 && r === 1;
  }, "shouldCombineSets");
  O0 = g((e) => {
    const t = No(e, "~");
    let i = false;
    if (t <= 1)
      return e;
    t % 2 !== 0 && e.startsWith("~") && (e = e.substring(1), i = true);
    const r = [
      ...e
    ];
    let n = r.indexOf("~"), o = r.lastIndexOf("~");
    for (; n !== -1 && o !== -1 && n !== o; )
      r[n] = "<", r[o] = ">", n = r.indexOf("~"), o = r.lastIndexOf("~");
    return i && r.unshift("~"), r.join("");
  }, "processSet");
  tl = g(() => window.MathMLElement !== void 0, "isMathMLSupported");
  qo = /\$\$(.*)\$\$/g;
  wi = g((e) => {
    var t;
    return (((t = e.match(qo)) == null ? void 0 : t.length) ?? 0) > 0;
  }, "hasKatex");
  a_ = g(async (e, t) => {
    e = await Ta(e, t);
    const i = document.createElement("div");
    i.innerHTML = e, i.id = "katex-temp", i.style.visibility = "hidden", i.style.position = "absolute", i.style.top = "0";
    const r = document.querySelector("body");
    r == null ? void 0 : r.insertAdjacentElement("beforeend", i);
    const n = {
      width: i.clientWidth,
      height: i.clientHeight
    };
    return i.remove(), n;
  }, "calculateMathMLDimensions");
  Ta = g(async (e, t) => {
    if (!wi(e))
      return e;
    if (!(tl() || t.legacyMathML || t.forceLegacyMathML))
      return e.replace(qo, "MathML is unsupported in this environment.");
    const { default: i } = await gt(() => import("./katex-9tX9hjoM-650ee6bf.js"), []), r = t.forceLegacyMathML || !tl() && t.legacyMathML ? "htmlAndMathml" : "mathml";
    return e.split(gr).map((n) => wi(n) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${n}</div>` : `<div>${n}</div>`).join("").replace(qo, (n, o) => i.renderToString(o, {
      throwOnError: true,
      displayMode: true,
      output: r
    }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, ""));
  }, "renderKatex");
  Mi = {
    getRows: _0,
    sanitizeText: Xe,
    sanitizeTextOrArray: T0,
    hasBreaks: B0,
    splitBreaks: M0,
    lineBreakRegex: gr,
    removeScript: zh,
    getUrl: A0,
    evaluate: vt,
    getMax: F0,
    getMin: E0
  };
  D0 = g(function(e, t) {
    for (let i of t)
      e.attr(i[0], i[1]);
  }, "d3Attrs");
  I0 = g(function(e, t, i) {
    let r = /* @__PURE__ */ new Map();
    return i ? (r.set("width", "100%"), r.set("style", `max-width: ${t}px;`)) : (r.set("height", e), r.set("width", t)), r;
  }, "calculateSvgSizeAttrs");
  Rh = g(function(e, t, i, r) {
    const n = I0(t, i, r);
    D0(e, n);
  }, "configureSvgSize");
  z0 = g(function(e, t, i, r) {
    const n = t.node().getBBox(), o = n.width, s = n.height;
    $.info(`SVG bounds: ${o}x${s}`, n);
    let a = 0, l = 0;
    $.info(`Graph bounds: ${a}x${l}`, e), a = o + i * 2, l = s + i * 2, $.info(`Calculated bounds: ${a}x${l}`), Rh(t, l, a, r);
    const c = `${n.x - i} ${n.y - i} ${n.width + 2 * i} ${n.height + 2 * i}`;
    t.attr("viewBox", c);
  }, "setupGraphViewbox");
  Pr = {};
  P0 = g((e, t, i) => {
    let r = "";
    return e in Pr && Pr[e] ? r = Pr[e](i) : $.warn(`No theme found for ${e}`), ` & {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
    fill: ${i.textColor}
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
    fill: ${i.errorBkgColor};
  }
  & .error-text {
    fill: ${i.errorTextColor};
    stroke: ${i.errorTextColor};
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
    fill: ${i.lineColor};
    stroke: ${i.lineColor};
  }
  & .marker.cross {
    stroke: ${i.lineColor};
  }

  & svg {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
  }
   & p {
    margin: 0
   }

  ${r}

  ${t}
`;
  }, "getStyles");
  R0 = g((e, t) => {
    t !== void 0 && (Pr[e] = t);
  }, "addStylesForDiagram");
  N0 = P0;
  Nh = {};
  r0(Nh, {
    clear: () => q0,
    getAccDescription: () => Z0,
    getAccTitle: () => j0,
    getDiagramTitle: () => U0,
    setAccDescription: () => H0,
    setAccTitle: () => W0,
    setDiagramTitle: () => V0
  });
  let Ba, Ma, La, Aa, el, Y0, Fa, X0, Xr, Qr, Wo, mo, Q0;
  Ba = "";
  Ma = "";
  La = "";
  Aa = g((e) => Xe(e, Ut()), "sanitizeText");
  q0 = g(() => {
    Ba = "", La = "", Ma = "";
  }, "clear");
  W0 = g((e) => {
    Ba = Aa(e).replace(/^\s+/g, "");
  }, "setAccTitle");
  j0 = g(() => Ba, "getAccTitle");
  H0 = g((e) => {
    La = Aa(e).replace(/\n\s+/g, `
`);
  }, "setAccDescription");
  Z0 = g(() => La, "getAccDescription");
  V0 = g((e) => {
    Ma = Aa(e);
  }, "setDiagramTitle");
  U0 = g(() => Ma, "getDiagramTitle");
  el = $;
  Y0 = _a;
  ct = Ut;
  s_ = $h;
  l_ = Ci;
  Fa = g((e) => Xe(e, ct()), "sanitizeText");
  G0 = z0;
  X0 = g(() => Nh, "getCommonDb");
  Xr = {};
  Qr = g((e, t, i) => {
    var r;
    Xr[e] && el.warn(`Diagram with id ${e} already registered. Overwriting.`), Xr[e] = t, i && Bh(e, i), R0(e, t.styles), (r = t.injectUtils) == null || r.call(t, el, Y0, ct, Fa, G0, X0(), () => {
    });
  }, "registerDiagram");
  Wo = g((e) => {
    if (e in Xr)
      return Xr[e];
    throw new Q0(e);
  }, "getDiagram");
  Q0 = (mo = class extends Error {
    constructor(e) {
      super(`Diagram ${e} not found.`);
    }
  }, g(mo, "DiagramNotFoundError"), mo);
  function Ea(e) {
    return typeof e > "u" || e === null;
  }
  g(Ea, "isNothing");
  function qh(e) {
    return typeof e == "object" && e !== null;
  }
  g(qh, "isObject");
  function Wh(e) {
    return Array.isArray(e) ? e : Ea(e) ? [] : [
      e
    ];
  }
  g(Wh, "toArray");
  function jh(e, t) {
    var i, r, n, o;
    if (t)
      for (o = Object.keys(t), i = 0, r = o.length; i < r; i += 1)
        n = o[i], e[n] = t[n];
    return e;
  }
  g(jh, "extend");
  function Hh(e, t) {
    var i = "", r;
    for (r = 0; r < t; r += 1)
      i += e;
    return i;
  }
  g(Hh, "repeat");
  function Zh(e) {
    return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
  }
  g(Zh, "isNegativeZero");
  var J0 = Ea, K0 = qh, tm = Wh, em = Hh, im = Zh, rm = jh, Ct = {
    isNothing: J0,
    isObject: K0,
    toArray: tm,
    repeat: em,
    isNegativeZero: im,
    extend: rm
  };
  function $a(e, t) {
    var i = "", r = e.reason || "(unknown reason)";
    return e.mark ? (e.mark.name && (i += 'in "' + e.mark.name + '" '), i += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !t && e.mark.snippet && (i += `

` + e.mark.snippet), r + " " + i) : r;
  }
  g($a, "formatError");
  function _i(e, t) {
    Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = t, this.message = $a(this, false), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
  }
  g(_i, "YAMLException$1");
  _i.prototype = Object.create(Error.prototype);
  _i.prototype.constructor = _i;
  _i.prototype.toString = g(function(e) {
    return this.name + ": " + $a(this, e);
  }, "toString");
  var Vt = _i;
  function Rr(e, t, i, r, n) {
    var o = "", s = "", a = Math.floor(n / 2) - 1;
    return r - t > a && (o = " ... ", t = r - a + o.length), i - r > a && (s = " ...", i = r + a - s.length), {
      str: o + e.slice(t, i).replace(/\t/g, "\u2192") + s,
      pos: r - t + o.length
    };
  }
  g(Rr, "getLine");
  function Nr(e, t) {
    return Ct.repeat(" ", t - e.length) + e;
  }
  g(Nr, "padStart");
  function Vh(e, t) {
    if (t = Object.create(t || null), !e.buffer)
      return null;
    t.maxLength || (t.maxLength = 79), typeof t.indent != "number" && (t.indent = 1), typeof t.linesBefore != "number" && (t.linesBefore = 3), typeof t.linesAfter != "number" && (t.linesAfter = 2);
    for (var i = /\r?\n|\r|\0/g, r = [
      0
    ], n = [], o, s = -1; o = i.exec(e.buffer); )
      n.push(o.index), r.push(o.index + o[0].length), e.position <= o.index && s < 0 && (s = r.length - 2);
    s < 0 && (s = r.length - 1);
    var a = "", l, c, h = Math.min(e.line + t.linesAfter, n.length).toString().length, d = t.maxLength - (t.indent + h + 3);
    for (l = 1; l <= t.linesBefore && !(s - l < 0); l++)
      c = Rr(e.buffer, r[s - l], n[s - l], e.position - (r[s] - r[s - l]), d), a = Ct.repeat(" ", t.indent) + Nr((e.line - l + 1).toString(), h) + " | " + c.str + `
` + a;
    for (c = Rr(e.buffer, r[s], n[s], e.position, d), a += Ct.repeat(" ", t.indent) + Nr((e.line + 1).toString(), h) + " | " + c.str + `
`, a += Ct.repeat("-", t.indent + h + 3 + c.pos) + `^
`, l = 1; l <= t.linesAfter && !(s + l >= n.length); l++)
      c = Rr(e.buffer, r[s + l], n[s + l], e.position - (r[s] - r[s + l]), d), a += Ct.repeat(" ", t.indent) + Nr((e.line + l + 1).toString(), h) + " | " + c.str + `
`;
    return a.replace(/\n$/, "");
  }
  g(Vh, "makeSnippet");
  var nm = Vh, om = [
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
  ], am = [
    "scalar",
    "sequence",
    "mapping"
  ];
  function Uh(e) {
    var t = {};
    return e !== null && Object.keys(e).forEach(function(i) {
      e[i].forEach(function(r) {
        t[String(r)] = i;
      });
    }), t;
  }
  g(Uh, "compileStyleAliases");
  function Yh(e, t) {
    if (t = t || {}, Object.keys(t).forEach(function(i) {
      if (om.indexOf(i) === -1)
        throw new Vt('Unknown option "' + i + '" is met in definition of "' + e + '" YAML type.');
    }), this.options = t, this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function() {
      return true;
    }, this.construct = t.construct || function(i) {
      return i;
    }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.representName = t.representName || null, this.defaultStyle = t.defaultStyle || null, this.multi = t.multi || false, this.styleAliases = Uh(t.styleAliases || null), am.indexOf(this.kind) === -1)
      throw new Vt('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
  }
  g(Yh, "Type$1");
  var Ot = Yh;
  function jo(e, t) {
    var i = [];
    return e[t].forEach(function(r) {
      var n = i.length;
      i.forEach(function(o, s) {
        o.tag === r.tag && o.kind === r.kind && o.multi === r.multi && (n = s);
      }), i[n] = r;
    }), i;
  }
  g(jo, "compileList");
  function Gh() {
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
    }, t, i;
    function r(n) {
      n.multi ? (e.multi[n.kind].push(n), e.multi.fallback.push(n)) : e[n.kind][n.tag] = e.fallback[n.tag] = n;
    }
    for (g(r, "collectType"), t = 0, i = arguments.length; t < i; t += 1)
      arguments[t].forEach(r);
    return e;
  }
  g(Gh, "compileMap");
  function Jr(e) {
    return this.extend(e);
  }
  g(Jr, "Schema$1");
  Jr.prototype.extend = g(function(e) {
    var t = [], i = [];
    if (e instanceof Ot)
      i.push(e);
    else if (Array.isArray(e))
      i = i.concat(e);
    else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
      e.implicit && (t = t.concat(e.implicit)), e.explicit && (i = i.concat(e.explicit));
    else
      throw new Vt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
    t.forEach(function(n) {
      if (!(n instanceof Ot))
        throw new Vt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      if (n.loadKind && n.loadKind !== "scalar")
        throw new Vt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
      if (n.multi)
        throw new Vt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
    }), i.forEach(function(n) {
      if (!(n instanceof Ot))
        throw new Vt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    });
    var r = Object.create(Jr.prototype);
    return r.implicit = (this.implicit || []).concat(t), r.explicit = (this.explicit || []).concat(i), r.compiledImplicit = jo(r, "implicit"), r.compiledExplicit = jo(r, "explicit"), r.compiledTypeMap = Gh(r.compiledImplicit, r.compiledExplicit), r;
  }, "extend");
  var sm = Jr, lm = new Ot("tag:yaml.org,2002:str", {
    kind: "scalar",
    construct: g(function(e) {
      return e !== null ? e : "";
    }, "construct")
  }), hm = new Ot("tag:yaml.org,2002:seq", {
    kind: "sequence",
    construct: g(function(e) {
      return e !== null ? e : [];
    }, "construct")
  }), cm = new Ot("tag:yaml.org,2002:map", {
    kind: "mapping",
    construct: g(function(e) {
      return e !== null ? e : {};
    }, "construct")
  }), dm = new sm({
    explicit: [
      lm,
      hm,
      cm
    ]
  });
  function Xh(e) {
    if (e === null)
      return true;
    var t = e.length;
    return t === 1 && e === "~" || t === 4 && (e === "null" || e === "Null" || e === "NULL");
  }
  g(Xh, "resolveYamlNull");
  function Qh() {
    return null;
  }
  g(Qh, "constructYamlNull");
  function Jh(e) {
    return e === null;
  }
  g(Jh, "isNull");
  var um = new Ot("tag:yaml.org,2002:null", {
    kind: "scalar",
    resolve: Xh,
    construct: Qh,
    predicate: Jh,
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
  function Kh(e) {
    if (e === null)
      return false;
    var t = e.length;
    return t === 4 && (e === "true" || e === "True" || e === "TRUE") || t === 5 && (e === "false" || e === "False" || e === "FALSE");
  }
  g(Kh, "resolveYamlBoolean");
  function tc(e) {
    return e === "true" || e === "True" || e === "TRUE";
  }
  g(tc, "constructYamlBoolean");
  function ec(e) {
    return Object.prototype.toString.call(e) === "[object Boolean]";
  }
  g(ec, "isBoolean");
  var pm = new Ot("tag:yaml.org,2002:bool", {
    kind: "scalar",
    resolve: Kh,
    construct: tc,
    predicate: ec,
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
  function ic(e) {
    return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
  }
  g(ic, "isHexCode");
  function rc(e) {
    return 48 <= e && e <= 55;
  }
  g(rc, "isOctCode");
  function nc(e) {
    return 48 <= e && e <= 57;
  }
  g(nc, "isDecCode");
  function oc(e) {
    if (e === null)
      return false;
    var t = e.length, i = 0, r = false, n;
    if (!t)
      return false;
    if (n = e[i], (n === "-" || n === "+") && (n = e[++i]), n === "0") {
      if (i + 1 === t)
        return true;
      if (n = e[++i], n === "b") {
        for (i++; i < t; i++)
          if (n = e[i], n !== "_") {
            if (n !== "0" && n !== "1")
              return false;
            r = true;
          }
        return r && n !== "_";
      }
      if (n === "x") {
        for (i++; i < t; i++)
          if (n = e[i], n !== "_") {
            if (!ic(e.charCodeAt(i)))
              return false;
            r = true;
          }
        return r && n !== "_";
      }
      if (n === "o") {
        for (i++; i < t; i++)
          if (n = e[i], n !== "_") {
            if (!rc(e.charCodeAt(i)))
              return false;
            r = true;
          }
        return r && n !== "_";
      }
    }
    if (n === "_")
      return false;
    for (; i < t; i++)
      if (n = e[i], n !== "_") {
        if (!nc(e.charCodeAt(i)))
          return false;
        r = true;
      }
    return !(!r || n === "_");
  }
  g(oc, "resolveYamlInteger");
  function ac(e) {
    var t = e, i = 1, r;
    if (t.indexOf("_") !== -1 && (t = t.replace(/_/g, "")), r = t[0], (r === "-" || r === "+") && (r === "-" && (i = -1), t = t.slice(1), r = t[0]), t === "0")
      return 0;
    if (r === "0") {
      if (t[1] === "b")
        return i * parseInt(t.slice(2), 2);
      if (t[1] === "x")
        return i * parseInt(t.slice(2), 16);
      if (t[1] === "o")
        return i * parseInt(t.slice(2), 8);
    }
    return i * parseInt(t, 10);
  }
  g(ac, "constructYamlInteger");
  function sc(e) {
    return Object.prototype.toString.call(e) === "[object Number]" && e % 1 === 0 && !Ct.isNegativeZero(e);
  }
  g(sc, "isInteger");
  var gm = new Ot("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: oc,
    construct: ac,
    predicate: sc,
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
  }), fm = new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
  function lc(e) {
    return !(e === null || !fm.test(e) || e[e.length - 1] === "_");
  }
  g(lc, "resolveYamlFloat");
  function hc(e) {
    var t, i;
    return t = e.replace(/_/g, "").toLowerCase(), i = t[0] === "-" ? -1 : 1, "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), t === ".inf" ? i === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : t === ".nan" ? NaN : i * parseFloat(t, 10);
  }
  g(hc, "constructYamlFloat");
  var mm = /^[-+]?[0-9]+e/;
  function cc(e, t) {
    var i;
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
    else if (Ct.isNegativeZero(e))
      return "-0.0";
    return i = e.toString(10), mm.test(i) ? i.replace("e", ".e") : i;
  }
  g(cc, "representYamlFloat");
  function dc(e) {
    return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || Ct.isNegativeZero(e));
  }
  g(dc, "isFloat");
  var ym = new Ot("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: lc,
    construct: hc,
    predicate: dc,
    represent: cc,
    defaultStyle: "lowercase"
  }), uc = dm.extend({
    implicit: [
      um,
      pm,
      gm,
      ym
    ]
  }), xm = uc, pc = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), gc = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
  function fc(e) {
    return e === null ? false : pc.exec(e) !== null || gc.exec(e) !== null;
  }
  g(fc, "resolveYamlTimestamp");
  function mc(e) {
    var t, i, r, n, o, s, a, l = 0, c = null, h, d, u;
    if (t = pc.exec(e), t === null && (t = gc.exec(e)), t === null)
      throw new Error("Date resolve error");
    if (i = +t[1], r = +t[2] - 1, n = +t[3], !t[4])
      return new Date(Date.UTC(i, r, n));
    if (o = +t[4], s = +t[5], a = +t[6], t[7]) {
      for (l = t[7].slice(0, 3); l.length < 3; )
        l += "0";
      l = +l;
    }
    return t[9] && (h = +t[10], d = +(t[11] || 0), c = (h * 60 + d) * 6e4, t[9] === "-" && (c = -c)), u = new Date(Date.UTC(i, r, n, o, s, a, l)), c && u.setTime(u.getTime() - c), u;
  }
  g(mc, "constructYamlTimestamp");
  function yc(e) {
    return e.toISOString();
  }
  g(yc, "representYamlTimestamp");
  var bm = new Ot("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: fc,
    construct: mc,
    instanceOf: Date,
    represent: yc
  });
  function xc(e) {
    return e === "<<" || e === null;
  }
  g(xc, "resolveYamlMerge");
  var km = new Ot("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: xc
  }), Oa = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
  function bc(e) {
    if (e === null)
      return false;
    var t, i, r = 0, n = e.length, o = Oa;
    for (i = 0; i < n; i++)
      if (t = o.indexOf(e.charAt(i)), !(t > 64)) {
        if (t < 0)
          return false;
        r += 6;
      }
    return r % 8 === 0;
  }
  g(bc, "resolveYamlBinary");
  function kc(e) {
    var t, i, r = e.replace(/[\r\n=]/g, ""), n = r.length, o = Oa, s = 0, a = [];
    for (t = 0; t < n; t++)
      t % 4 === 0 && t && (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(s & 255)), s = s << 6 | o.indexOf(r.charAt(t));
    return i = n % 4 * 6, i === 0 ? (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(s & 255)) : i === 18 ? (a.push(s >> 10 & 255), a.push(s >> 2 & 255)) : i === 12 && a.push(s >> 4 & 255), new Uint8Array(a);
  }
  g(kc, "constructYamlBinary");
  function Cc(e) {
    var t = "", i = 0, r, n, o = e.length, s = Oa;
    for (r = 0; r < o; r++)
      r % 3 === 0 && r && (t += s[i >> 18 & 63], t += s[i >> 12 & 63], t += s[i >> 6 & 63], t += s[i & 63]), i = (i << 8) + e[r];
    return n = o % 3, n === 0 ? (t += s[i >> 18 & 63], t += s[i >> 12 & 63], t += s[i >> 6 & 63], t += s[i & 63]) : n === 2 ? (t += s[i >> 10 & 63], t += s[i >> 4 & 63], t += s[i << 2 & 63], t += s[64]) : n === 1 && (t += s[i >> 2 & 63], t += s[i << 4 & 63], t += s[64], t += s[64]), t;
  }
  g(Cc, "representYamlBinary");
  function vc(e) {
    return Object.prototype.toString.call(e) === "[object Uint8Array]";
  }
  g(vc, "isBinary");
  var Cm = new Ot("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: bc,
    construct: kc,
    predicate: vc,
    represent: Cc
  }), vm = Object.prototype.hasOwnProperty, wm = Object.prototype.toString;
  function wc(e) {
    if (e === null)
      return true;
    var t = [], i, r, n, o, s, a = e;
    for (i = 0, r = a.length; i < r; i += 1) {
      if (n = a[i], s = false, wm.call(n) !== "[object Object]")
        return false;
      for (o in n)
        if (vm.call(n, o))
          if (!s)
            s = true;
          else
            return false;
      if (!s)
        return false;
      if (t.indexOf(o) === -1)
        t.push(o);
      else
        return false;
    }
    return true;
  }
  g(wc, "resolveYamlOmap");
  function _c(e) {
    return e !== null ? e : [];
  }
  g(_c, "constructYamlOmap");
  var _m = new Ot("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: wc,
    construct: _c
  }), Sm = Object.prototype.toString;
  function Sc(e) {
    if (e === null)
      return true;
    var t, i, r, n, o, s = e;
    for (o = new Array(s.length), t = 0, i = s.length; t < i; t += 1) {
      if (r = s[t], Sm.call(r) !== "[object Object]" || (n = Object.keys(r), n.length !== 1))
        return false;
      o[t] = [
        n[0],
        r[n[0]]
      ];
    }
    return true;
  }
  g(Sc, "resolveYamlPairs");
  function Tc(e) {
    if (e === null)
      return [];
    var t, i, r, n, o, s = e;
    for (o = new Array(s.length), t = 0, i = s.length; t < i; t += 1)
      r = s[t], n = Object.keys(r), o[t] = [
        n[0],
        r[n[0]]
      ];
    return o;
  }
  g(Tc, "constructYamlPairs");
  var Tm = new Ot("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: Sc,
    construct: Tc
  }), Bm = Object.prototype.hasOwnProperty;
  function Bc(e) {
    if (e === null)
      return true;
    var t, i = e;
    for (t in i)
      if (Bm.call(i, t) && i[t] !== null)
        return false;
    return true;
  }
  g(Bc, "resolveYamlSet");
  function Mc(e) {
    return e !== null ? e : {};
  }
  g(Mc, "constructYamlSet");
  var Mm = new Ot("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: Bc,
    construct: Mc
  }), Lc = xm.extend({
    implicit: [
      bm,
      km
    ],
    explicit: [
      Cm,
      _m,
      Tm,
      Mm
    ]
  }), De = Object.prototype.hasOwnProperty, Kr = 1, Ac = 2, Fc = 3, tn = 4, yo = 1, Lm = 2, il = 3, Am = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Fm = /[\x85\u2028\u2029]/, Em = /[,\[\]\{\}]/, Ec = /^(?:!|!!|![a-z\-]+!)$/i, $c = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
  function Ho(e) {
    return Object.prototype.toString.call(e);
  }
  g(Ho, "_class");
  function ne(e) {
    return e === 10 || e === 13;
  }
  g(ne, "is_EOL");
  function Oe(e) {
    return e === 9 || e === 32;
  }
  g(Oe, "is_WHITE_SPACE");
  function Rt(e) {
    return e === 9 || e === 32 || e === 10 || e === 13;
  }
  g(Rt, "is_WS_OR_EOL");
  function Ue(e) {
    return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
  }
  g(Ue, "is_FLOW_INDICATOR");
  function Oc(e) {
    var t;
    return 48 <= e && e <= 57 ? e - 48 : (t = e | 32, 97 <= t && t <= 102 ? t - 97 + 10 : -1);
  }
  g(Oc, "fromHexCode");
  function Dc(e) {
    return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
  }
  g(Dc, "escapedHexLen");
  function Ic(e) {
    return 48 <= e && e <= 57 ? e - 48 : -1;
  }
  g(Ic, "fromDecimalCode");
  function Zo(e) {
    return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "\x85" : e === 95 ? "\xA0" : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
  }
  g(Zo, "simpleEscapeSequence");
  function zc(e) {
    return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode((e - 65536 >> 10) + 55296, (e - 65536 & 1023) + 56320);
  }
  g(zc, "charFromCodepoint");
  var Pc = new Array(256), Rc = new Array(256);
  for (je = 0; je < 256; je++)
    Pc[je] = Zo(je) ? 1 : 0, Rc[je] = Zo(je);
  var je;
  function Nc(e, t) {
    this.input = e, this.filename = t.filename || null, this.schema = t.schema || Lc, this.onWarning = t.onWarning || null, this.legacy = t.legacy || false, this.json = t.json || false, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
  }
  g(Nc, "State$1");
  function Da(e, t) {
    var i = {
      name: e.filename,
      buffer: e.input.slice(0, -1),
      position: e.position,
      line: e.line,
      column: e.position - e.lineStart
    };
    return i.snippet = nm(i), new Vt(t, i);
  }
  g(Da, "generateError");
  function Q(e, t) {
    throw Da(e, t);
  }
  g(Q, "throwError");
  function or(e, t) {
    e.onWarning && e.onWarning.call(null, Da(e, t));
  }
  g(or, "throwWarning");
  var rl = {
    YAML: g(function(e, t, i) {
      var r, n, o;
      e.version !== null && Q(e, "duplication of %YAML directive"), i.length !== 1 && Q(e, "YAML directive accepts exactly one argument"), r = /^([0-9]+)\.([0-9]+)$/.exec(i[0]), r === null && Q(e, "ill-formed argument of the YAML directive"), n = parseInt(r[1], 10), o = parseInt(r[2], 10), n !== 1 && Q(e, "unacceptable YAML version of the document"), e.version = i[0], e.checkLineBreaks = o < 2, o !== 1 && o !== 2 && or(e, "unsupported YAML version of the document");
    }, "handleYamlDirective"),
    TAG: g(function(e, t, i) {
      var r, n;
      i.length !== 2 && Q(e, "TAG directive accepts exactly two arguments"), r = i[0], n = i[1], Ec.test(r) || Q(e, "ill-formed tag handle (first argument) of the TAG directive"), De.call(e.tagMap, r) && Q(e, 'there is a previously declared suffix for "' + r + '" tag handle'), $c.test(n) || Q(e, "ill-formed tag prefix (second argument) of the TAG directive");
      try {
        n = decodeURIComponent(n);
      } catch {
        Q(e, "tag prefix is malformed: " + n);
      }
      e.tagMap[r] = n;
    }, "handleTagDirective")
  };
  function Be(e, t, i, r) {
    var n, o, s, a;
    if (t < i) {
      if (a = e.input.slice(t, i), r)
        for (n = 0, o = a.length; n < o; n += 1)
          s = a.charCodeAt(n), s === 9 || 32 <= s && s <= 1114111 || Q(e, "expected valid JSON character");
      else
        Am.test(a) && Q(e, "the stream contains non-printable characters");
      e.result += a;
    }
  }
  g(Be, "captureSegment");
  function Vo(e, t, i, r) {
    var n, o, s, a;
    for (Ct.isObject(i) || Q(e, "cannot merge mappings; the provided source object is unacceptable"), n = Object.keys(i), s = 0, a = n.length; s < a; s += 1)
      o = n[s], De.call(t, o) || (t[o] = i[o], r[o] = true);
  }
  g(Vo, "mergeMappings");
  function Ye(e, t, i, r, n, o, s, a, l) {
    var c, h;
    if (Array.isArray(n))
      for (n = Array.prototype.slice.call(n), c = 0, h = n.length; c < h; c += 1)
        Array.isArray(n[c]) && Q(e, "nested arrays are not supported inside keys"), typeof n == "object" && Ho(n[c]) === "[object Object]" && (n[c] = "[object Object]");
    if (typeof n == "object" && Ho(n) === "[object Object]" && (n = "[object Object]"), n = String(n), t === null && (t = {}), r === "tag:yaml.org,2002:merge")
      if (Array.isArray(o))
        for (c = 0, h = o.length; c < h; c += 1)
          Vo(e, t, o[c], i);
      else
        Vo(e, t, o, i);
    else
      !e.json && !De.call(i, n) && De.call(t, n) && (e.line = s || e.line, e.lineStart = a || e.lineStart, e.position = l || e.position, Q(e, "duplicated mapping key")), n === "__proto__" ? Object.defineProperty(t, n, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: o
      }) : t[n] = o, delete i[n];
    return t;
  }
  g(Ye, "storeMappingPair");
  function Mn(e) {
    var t;
    t = e.input.charCodeAt(e.position), t === 10 ? e.position++ : t === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : Q(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
  }
  g(Mn, "readLineBreak");
  function bt(e, t, i) {
    for (var r = 0, n = e.input.charCodeAt(e.position); n !== 0; ) {
      for (; Oe(n); )
        n === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), n = e.input.charCodeAt(++e.position);
      if (t && n === 35)
        do
          n = e.input.charCodeAt(++e.position);
        while (n !== 10 && n !== 13 && n !== 0);
      if (ne(n))
        for (Mn(e), n = e.input.charCodeAt(e.position), r++, e.lineIndent = 0; n === 32; )
          e.lineIndent++, n = e.input.charCodeAt(++e.position);
      else
        break;
    }
    return i !== -1 && r !== 0 && e.lineIndent < i && or(e, "deficient indentation"), r;
  }
  g(bt, "skipSeparationSpace");
  function fr(e) {
    var t = e.position, i;
    return i = e.input.charCodeAt(t), !!((i === 45 || i === 46) && i === e.input.charCodeAt(t + 1) && i === e.input.charCodeAt(t + 2) && (t += 3, i = e.input.charCodeAt(t), i === 0 || Rt(i)));
  }
  g(fr, "testDocumentSeparator");
  function Ln(e, t) {
    t === 1 ? e.result += " " : t > 1 && (e.result += Ct.repeat(`
`, t - 1));
  }
  g(Ln, "writeFoldedLines");
  function qc(e, t, i) {
    var r, n, o, s, a, l, c, h, d = e.kind, u = e.result, p;
    if (p = e.input.charCodeAt(e.position), Rt(p) || Ue(p) || p === 35 || p === 38 || p === 42 || p === 33 || p === 124 || p === 62 || p === 39 || p === 34 || p === 37 || p === 64 || p === 96 || (p === 63 || p === 45) && (n = e.input.charCodeAt(e.position + 1), Rt(n) || i && Ue(n)))
      return false;
    for (e.kind = "scalar", e.result = "", o = s = e.position, a = false; p !== 0; ) {
      if (p === 58) {
        if (n = e.input.charCodeAt(e.position + 1), Rt(n) || i && Ue(n))
          break;
      } else if (p === 35) {
        if (r = e.input.charCodeAt(e.position - 1), Rt(r))
          break;
      } else {
        if (e.position === e.lineStart && fr(e) || i && Ue(p))
          break;
        if (ne(p))
          if (l = e.line, c = e.lineStart, h = e.lineIndent, bt(e, false, -1), e.lineIndent >= t) {
            a = true, p = e.input.charCodeAt(e.position);
            continue;
          } else {
            e.position = s, e.line = l, e.lineStart = c, e.lineIndent = h;
            break;
          }
      }
      a && (Be(e, o, s, false), Ln(e, e.line - l), o = s = e.position, a = false), Oe(p) || (s = e.position + 1), p = e.input.charCodeAt(++e.position);
    }
    return Be(e, o, s, false), e.result ? true : (e.kind = d, e.result = u, false);
  }
  g(qc, "readPlainScalar");
  function Wc(e, t) {
    var i, r, n;
    if (i = e.input.charCodeAt(e.position), i !== 39)
      return false;
    for (e.kind = "scalar", e.result = "", e.position++, r = n = e.position; (i = e.input.charCodeAt(e.position)) !== 0; )
      if (i === 39)
        if (Be(e, r, e.position, true), i = e.input.charCodeAt(++e.position), i === 39)
          r = e.position, e.position++, n = e.position;
        else
          return true;
      else
        ne(i) ? (Be(e, r, n, true), Ln(e, bt(e, false, t)), r = n = e.position) : e.position === e.lineStart && fr(e) ? Q(e, "unexpected end of the document within a single quoted scalar") : (e.position++, n = e.position);
    Q(e, "unexpected end of the stream within a single quoted scalar");
  }
  g(Wc, "readSingleQuotedScalar");
  function jc(e, t) {
    var i, r, n, o, s, a;
    if (a = e.input.charCodeAt(e.position), a !== 34)
      return false;
    for (e.kind = "scalar", e.result = "", e.position++, i = r = e.position; (a = e.input.charCodeAt(e.position)) !== 0; ) {
      if (a === 34)
        return Be(e, i, e.position, true), e.position++, true;
      if (a === 92) {
        if (Be(e, i, e.position, true), a = e.input.charCodeAt(++e.position), ne(a))
          bt(e, false, t);
        else if (a < 256 && Pc[a])
          e.result += Rc[a], e.position++;
        else if ((s = Dc(a)) > 0) {
          for (n = s, o = 0; n > 0; n--)
            a = e.input.charCodeAt(++e.position), (s = Oc(a)) >= 0 ? o = (o << 4) + s : Q(e, "expected hexadecimal character");
          e.result += zc(o), e.position++;
        } else
          Q(e, "unknown escape sequence");
        i = r = e.position;
      } else
        ne(a) ? (Be(e, i, r, true), Ln(e, bt(e, false, t)), i = r = e.position) : e.position === e.lineStart && fr(e) ? Q(e, "unexpected end of the document within a double quoted scalar") : (e.position++, r = e.position);
    }
    Q(e, "unexpected end of the stream within a double quoted scalar");
  }
  g(jc, "readDoubleQuotedScalar");
  function Hc(e, t) {
    var i = true, r, n, o, s = e.tag, a, l = e.anchor, c, h, d, u, p, f = /* @__PURE__ */ Object.create(null), m, y, x, b;
    if (b = e.input.charCodeAt(e.position), b === 91)
      h = 93, p = false, a = [];
    else if (b === 123)
      h = 125, p = true, a = {};
    else
      return false;
    for (e.anchor !== null && (e.anchorMap[e.anchor] = a), b = e.input.charCodeAt(++e.position); b !== 0; ) {
      if (bt(e, true, t), b = e.input.charCodeAt(e.position), b === h)
        return e.position++, e.tag = s, e.anchor = l, e.kind = p ? "mapping" : "sequence", e.result = a, true;
      i ? b === 44 && Q(e, "expected the node content, but found ','") : Q(e, "missed comma between flow collection entries"), y = m = x = null, d = u = false, b === 63 && (c = e.input.charCodeAt(e.position + 1), Rt(c) && (d = u = true, e.position++, bt(e, true, t))), r = e.line, n = e.lineStart, o = e.position, Qe(e, t, Kr, false, true), y = e.tag, m = e.result, bt(e, true, t), b = e.input.charCodeAt(e.position), (u || e.line === r) && b === 58 && (d = true, b = e.input.charCodeAt(++e.position), bt(e, true, t), Qe(e, t, Kr, false, true), x = e.result), p ? Ye(e, a, f, y, m, x, r, n, o) : d ? a.push(Ye(e, null, f, y, m, x, r, n, o)) : a.push(m), bt(e, true, t), b = e.input.charCodeAt(e.position), b === 44 ? (i = true, b = e.input.charCodeAt(++e.position)) : i = false;
    }
    Q(e, "unexpected end of the stream within a flow collection");
  }
  g(Hc, "readFlowCollection");
  function Zc(e, t) {
    var i, r, n = yo, o = false, s = false, a = t, l = 0, c = false, h, d;
    if (d = e.input.charCodeAt(e.position), d === 124)
      r = false;
    else if (d === 62)
      r = true;
    else
      return false;
    for (e.kind = "scalar", e.result = ""; d !== 0; )
      if (d = e.input.charCodeAt(++e.position), d === 43 || d === 45)
        yo === n ? n = d === 43 ? il : Lm : Q(e, "repeat of a chomping mode identifier");
      else if ((h = Ic(d)) >= 0)
        h === 0 ? Q(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : s ? Q(e, "repeat of an indentation width identifier") : (a = t + h - 1, s = true);
      else
        break;
    if (Oe(d)) {
      do
        d = e.input.charCodeAt(++e.position);
      while (Oe(d));
      if (d === 35)
        do
          d = e.input.charCodeAt(++e.position);
        while (!ne(d) && d !== 0);
    }
    for (; d !== 0; ) {
      for (Mn(e), e.lineIndent = 0, d = e.input.charCodeAt(e.position); (!s || e.lineIndent < a) && d === 32; )
        e.lineIndent++, d = e.input.charCodeAt(++e.position);
      if (!s && e.lineIndent > a && (a = e.lineIndent), ne(d)) {
        l++;
        continue;
      }
      if (e.lineIndent < a) {
        n === il ? e.result += Ct.repeat(`
`, o ? 1 + l : l) : n === yo && o && (e.result += `
`);
        break;
      }
      for (r ? Oe(d) ? (c = true, e.result += Ct.repeat(`
`, o ? 1 + l : l)) : c ? (c = false, e.result += Ct.repeat(`
`, l + 1)) : l === 0 ? o && (e.result += " ") : e.result += Ct.repeat(`
`, l) : e.result += Ct.repeat(`
`, o ? 1 + l : l), o = true, s = true, l = 0, i = e.position; !ne(d) && d !== 0; )
        d = e.input.charCodeAt(++e.position);
      Be(e, i, e.position, false);
    }
    return true;
  }
  g(Zc, "readBlockScalar");
  function Uo(e, t) {
    var i, r = e.tag, n = e.anchor, o = [], s, a = false, l;
    if (e.firstTabInLine !== -1)
      return false;
    for (e.anchor !== null && (e.anchorMap[e.anchor] = o), l = e.input.charCodeAt(e.position); l !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, Q(e, "tab characters must not be used in indentation")), !(l !== 45 || (s = e.input.charCodeAt(e.position + 1), !Rt(s)))); ) {
      if (a = true, e.position++, bt(e, true, -1) && e.lineIndent <= t) {
        o.push(null), l = e.input.charCodeAt(e.position);
        continue;
      }
      if (i = e.line, Qe(e, t, Fc, false, true), o.push(e.result), bt(e, true, -1), l = e.input.charCodeAt(e.position), (e.line === i || e.lineIndent > t) && l !== 0)
        Q(e, "bad indentation of a sequence entry");
      else if (e.lineIndent < t)
        break;
    }
    return a ? (e.tag = r, e.anchor = n, e.kind = "sequence", e.result = o, true) : false;
  }
  g(Uo, "readBlockSequence");
  function Vc(e, t, i) {
    var r, n, o, s, a, l, c = e.tag, h = e.anchor, d = {}, u = /* @__PURE__ */ Object.create(null), p = null, f = null, m = null, y = false, x = false, b;
    if (e.firstTabInLine !== -1)
      return false;
    for (e.anchor !== null && (e.anchorMap[e.anchor] = d), b = e.input.charCodeAt(e.position); b !== 0; ) {
      if (!y && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, Q(e, "tab characters must not be used in indentation")), r = e.input.charCodeAt(e.position + 1), o = e.line, (b === 63 || b === 58) && Rt(r))
        b === 63 ? (y && (Ye(e, d, u, p, f, null, s, a, l), p = f = m = null), x = true, y = true, n = true) : y ? (y = false, n = true) : Q(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, b = r;
      else {
        if (s = e.line, a = e.lineStart, l = e.position, !Qe(e, i, Ac, false, true))
          break;
        if (e.line === o) {
          for (b = e.input.charCodeAt(e.position); Oe(b); )
            b = e.input.charCodeAt(++e.position);
          if (b === 58)
            b = e.input.charCodeAt(++e.position), Rt(b) || Q(e, "a whitespace character is expected after the key-value separator within a block mapping"), y && (Ye(e, d, u, p, f, null, s, a, l), p = f = m = null), x = true, y = false, n = false, p = e.tag, f = e.result;
          else if (x)
            Q(e, "can not read an implicit mapping pair; a colon is missed");
          else
            return e.tag = c, e.anchor = h, true;
        } else if (x)
          Q(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
        else
          return e.tag = c, e.anchor = h, true;
      }
      if ((e.line === o || e.lineIndent > t) && (y && (s = e.line, a = e.lineStart, l = e.position), Qe(e, t, tn, true, n) && (y ? f = e.result : m = e.result), y || (Ye(e, d, u, p, f, m, s, a, l), p = f = m = null), bt(e, true, -1), b = e.input.charCodeAt(e.position)), (e.line === o || e.lineIndent > t) && b !== 0)
        Q(e, "bad indentation of a mapping entry");
      else if (e.lineIndent < t)
        break;
    }
    return y && Ye(e, d, u, p, f, null, s, a, l), x && (e.tag = c, e.anchor = h, e.kind = "mapping", e.result = d), x;
  }
  g(Vc, "readBlockMapping");
  function Uc(e) {
    var t, i = false, r = false, n, o, s;
    if (s = e.input.charCodeAt(e.position), s !== 33)
      return false;
    if (e.tag !== null && Q(e, "duplication of a tag property"), s = e.input.charCodeAt(++e.position), s === 60 ? (i = true, s = e.input.charCodeAt(++e.position)) : s === 33 ? (r = true, n = "!!", s = e.input.charCodeAt(++e.position)) : n = "!", t = e.position, i) {
      do
        s = e.input.charCodeAt(++e.position);
      while (s !== 0 && s !== 62);
      e.position < e.length ? (o = e.input.slice(t, e.position), s = e.input.charCodeAt(++e.position)) : Q(e, "unexpected end of the stream within a verbatim tag");
    } else {
      for (; s !== 0 && !Rt(s); )
        s === 33 && (r ? Q(e, "tag suffix cannot contain exclamation marks") : (n = e.input.slice(t - 1, e.position + 1), Ec.test(n) || Q(e, "named tag handle cannot contain such characters"), r = true, t = e.position + 1)), s = e.input.charCodeAt(++e.position);
      o = e.input.slice(t, e.position), Em.test(o) && Q(e, "tag suffix cannot contain flow indicator characters");
    }
    o && !$c.test(o) && Q(e, "tag name cannot contain such characters: " + o);
    try {
      o = decodeURIComponent(o);
    } catch {
      Q(e, "tag name is malformed: " + o);
    }
    return i ? e.tag = o : De.call(e.tagMap, n) ? e.tag = e.tagMap[n] + o : n === "!" ? e.tag = "!" + o : n === "!!" ? e.tag = "tag:yaml.org,2002:" + o : Q(e, 'undeclared tag handle "' + n + '"'), true;
  }
  g(Uc, "readTagProperty");
  function Yc(e) {
    var t, i;
    if (i = e.input.charCodeAt(e.position), i !== 38)
      return false;
    for (e.anchor !== null && Q(e, "duplication of an anchor property"), i = e.input.charCodeAt(++e.position), t = e.position; i !== 0 && !Rt(i) && !Ue(i); )
      i = e.input.charCodeAt(++e.position);
    return e.position === t && Q(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), true;
  }
  g(Yc, "readAnchorProperty");
  function Gc(e) {
    var t, i, r;
    if (r = e.input.charCodeAt(e.position), r !== 42)
      return false;
    for (r = e.input.charCodeAt(++e.position), t = e.position; r !== 0 && !Rt(r) && !Ue(r); )
      r = e.input.charCodeAt(++e.position);
    return e.position === t && Q(e, "name of an alias node must contain at least one character"), i = e.input.slice(t, e.position), De.call(e.anchorMap, i) || Q(e, 'unidentified alias "' + i + '"'), e.result = e.anchorMap[i], bt(e, true, -1), true;
  }
  g(Gc, "readAlias");
  function Qe(e, t, i, r, n) {
    var o, s, a, l = 1, c = false, h = false, d, u, p, f, m, y;
    if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, o = s = a = tn === i || Fc === i, r && bt(e, true, -1) && (c = true, e.lineIndent > t ? l = 1 : e.lineIndent === t ? l = 0 : e.lineIndent < t && (l = -1)), l === 1)
      for (; Uc(e) || Yc(e); )
        bt(e, true, -1) ? (c = true, a = o, e.lineIndent > t ? l = 1 : e.lineIndent === t ? l = 0 : e.lineIndent < t && (l = -1)) : a = false;
    if (a && (a = c || n), (l === 1 || tn === i) && (Kr === i || Ac === i ? m = t : m = t + 1, y = e.position - e.lineStart, l === 1 ? a && (Uo(e, y) || Vc(e, y, m)) || Hc(e, m) ? h = true : (s && Zc(e, m) || Wc(e, m) || jc(e, m) ? h = true : Gc(e) ? (h = true, (e.tag !== null || e.anchor !== null) && Q(e, "alias node should not have any properties")) : qc(e, m, Kr === i) && (h = true, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : l === 0 && (h = a && Uo(e, y))), e.tag === null)
      e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
    else if (e.tag === "?") {
      for (e.result !== null && e.kind !== "scalar" && Q(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), d = 0, u = e.implicitTypes.length; d < u; d += 1)
        if (f = e.implicitTypes[d], f.resolve(e.result)) {
          e.result = f.construct(e.result), e.tag = f.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
          break;
        }
    } else if (e.tag !== "!") {
      if (De.call(e.typeMap[e.kind || "fallback"], e.tag))
        f = e.typeMap[e.kind || "fallback"][e.tag];
      else
        for (f = null, p = e.typeMap.multi[e.kind || "fallback"], d = 0, u = p.length; d < u; d += 1)
          if (e.tag.slice(0, p[d].tag.length) === p[d].tag) {
            f = p[d];
            break;
          }
      f || Q(e, "unknown tag !<" + e.tag + ">"), e.result !== null && f.kind !== e.kind && Q(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + f.kind + '", not "' + e.kind + '"'), f.resolve(e.result, e.tag) ? (e.result = f.construct(e.result, e.tag), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : Q(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
    }
    return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || h;
  }
  g(Qe, "composeNode");
  function Xc(e) {
    var t = e.position, i, r, n, o = false, s;
    for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = /* @__PURE__ */ Object.create(null), e.anchorMap = /* @__PURE__ */ Object.create(null); (s = e.input.charCodeAt(e.position)) !== 0 && (bt(e, true, -1), s = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || s !== 37)); ) {
      for (o = true, s = e.input.charCodeAt(++e.position), i = e.position; s !== 0 && !Rt(s); )
        s = e.input.charCodeAt(++e.position);
      for (r = e.input.slice(i, e.position), n = [], r.length < 1 && Q(e, "directive name must not be less than one character in length"); s !== 0; ) {
        for (; Oe(s); )
          s = e.input.charCodeAt(++e.position);
        if (s === 35) {
          do
            s = e.input.charCodeAt(++e.position);
          while (s !== 0 && !ne(s));
          break;
        }
        if (ne(s))
          break;
        for (i = e.position; s !== 0 && !Rt(s); )
          s = e.input.charCodeAt(++e.position);
        n.push(e.input.slice(i, e.position));
      }
      s !== 0 && Mn(e), De.call(rl, r) ? rl[r](e, r, n) : or(e, 'unknown document directive "' + r + '"');
    }
    if (bt(e, true, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, bt(e, true, -1)) : o && Q(e, "directives end mark is expected"), Qe(e, e.lineIndent - 1, tn, false, true), bt(e, true, -1), e.checkLineBreaks && Fm.test(e.input.slice(t, e.position)) && or(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && fr(e)) {
      e.input.charCodeAt(e.position) === 46 && (e.position += 3, bt(e, true, -1));
      return;
    }
    if (e.position < e.length - 1)
      Q(e, "end of the stream or a document separator is expected");
    else
      return;
  }
  g(Xc, "readDocument");
  function Ia(e, t) {
    e = String(e), t = t || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
    var i = new Nc(e, t), r = e.indexOf("\0");
    for (r !== -1 && (i.position = r, Q(i, "null byte is not allowed in input")), i.input += "\0"; i.input.charCodeAt(i.position) === 32; )
      i.lineIndent += 1, i.position += 1;
    for (; i.position < i.length - 1; )
      Xc(i);
    return i.documents;
  }
  g(Ia, "loadDocuments");
  function $m(e, t, i) {
    t !== null && typeof t == "object" && typeof i > "u" && (i = t, t = null);
    var r = Ia(e, i);
    if (typeof t != "function")
      return r;
    for (var n = 0, o = r.length; n < o; n += 1)
      t(r[n]);
  }
  g($m, "loadAll$1");
  function Qc(e, t) {
    var i = Ia(e, t);
    if (i.length !== 0) {
      if (i.length === 1)
        return i[0];
      throw new Vt("expected a single document in the stream, but found more");
    }
  }
  g(Qc, "load$1");
  var Om = Qc, Dm = {
    load: Om
  }, Jc = Object.prototype.toString, Kc = Object.prototype.hasOwnProperty, za = 65279, Im = 9, ar = 10, zm = 13, Pm = 32, Rm = 33, Nm = 34, Yo = 35, qm = 37, Wm = 38, jm = 39, Hm = 42, td = 44, Zm = 45, en = 58, Vm = 61, Um = 62, Ym = 63, Gm = 64, ed = 91, id = 93, Xm = 96, rd = 123, Qm = 124, nd = 125, Dt = {};
  Dt[0] = "\\0";
  Dt[7] = "\\a";
  Dt[8] = "\\b";
  Dt[9] = "\\t";
  Dt[10] = "\\n";
  Dt[11] = "\\v";
  Dt[12] = "\\f";
  Dt[13] = "\\r";
  Dt[27] = "\\e";
  Dt[34] = '\\"';
  Dt[92] = "\\\\";
  Dt[133] = "\\N";
  Dt[160] = "\\_";
  Dt[8232] = "\\L";
  Dt[8233] = "\\P";
  var Jm = [
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
  ], Km = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
  function od(e, t) {
    var i, r, n, o, s, a, l;
    if (t === null)
      return {};
    for (i = {}, r = Object.keys(t), n = 0, o = r.length; n < o; n += 1)
      s = r[n], a = String(t[s]), s.slice(0, 2) === "!!" && (s = "tag:yaml.org,2002:" + s.slice(2)), l = e.compiledTypeMap.fallback[s], l && Kc.call(l.styleAliases, a) && (a = l.styleAliases[a]), i[s] = a;
    return i;
  }
  g(od, "compileStyleMap");
  function ad(e) {
    var t, i, r;
    if (t = e.toString(16).toUpperCase(), e <= 255)
      i = "x", r = 2;
    else if (e <= 65535)
      i = "u", r = 4;
    else if (e <= 4294967295)
      i = "U", r = 8;
    else
      throw new Vt("code point within a string may not be greater than 0xFFFFFFFF");
    return "\\" + i + Ct.repeat("0", r - t.length) + t;
  }
  g(ad, "encodeHex");
  var ty = 1, sr = 2;
  function sd(e) {
    this.schema = e.schema || Lc, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || false, this.skipInvalid = e.skipInvalid || false, this.flowLevel = Ct.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = od(this.schema, e.styles || null), this.sortKeys = e.sortKeys || false, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || false, this.noCompatMode = e.noCompatMode || false, this.condenseFlow = e.condenseFlow || false, this.quotingType = e.quotingType === '"' ? sr : ty, this.forceQuotes = e.forceQuotes || false, this.replacer = typeof e.replacer == "function" ? e.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
  }
  g(sd, "State");
  function Go(e, t) {
    for (var i = Ct.repeat(" ", t), r = 0, n = -1, o = "", s, a = e.length; r < a; )
      n = e.indexOf(`
`, r), n === -1 ? (s = e.slice(r), r = a) : (s = e.slice(r, n + 1), r = n + 1), s.length && s !== `
` && (o += i), o += s;
    return o;
  }
  g(Go, "indentString");
  function rn(e, t) {
    return `
` + Ct.repeat(" ", e.indent * t);
  }
  g(rn, "generateNextLine");
  function ld(e, t) {
    var i, r, n;
    for (i = 0, r = e.implicitTypes.length; i < r; i += 1)
      if (n = e.implicitTypes[i], n.resolve(t))
        return true;
    return false;
  }
  g(ld, "testImplicitResolving");
  function lr(e) {
    return e === Pm || e === Im;
  }
  g(lr, "isWhitespace");
  function Si(e) {
    return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && e !== 8232 && e !== 8233 || 57344 <= e && e <= 65533 && e !== za || 65536 <= e && e <= 1114111;
  }
  g(Si, "isPrintable");
  function Xo(e) {
    return Si(e) && e !== za && e !== zm && e !== ar;
  }
  g(Xo, "isNsCharOrWhitespace");
  function Qo(e, t, i) {
    var r = Xo(e), n = r && !lr(e);
    return (i ? r : r && e !== td && e !== ed && e !== id && e !== rd && e !== nd) && e !== Yo && !(t === en && !n) || Xo(t) && !lr(t) && e === Yo || t === en && n;
  }
  g(Qo, "isPlainSafe");
  function hd(e) {
    return Si(e) && e !== za && !lr(e) && e !== Zm && e !== Ym && e !== en && e !== td && e !== ed && e !== id && e !== rd && e !== nd && e !== Yo && e !== Wm && e !== Hm && e !== Rm && e !== Qm && e !== Vm && e !== Um && e !== jm && e !== Nm && e !== qm && e !== Gm && e !== Xm;
  }
  g(hd, "isPlainSafeFirst");
  function cd(e) {
    return !lr(e) && e !== en;
  }
  g(cd, "isPlainSafeLast");
  function mi(e, t) {
    var i = e.charCodeAt(t), r;
    return i >= 55296 && i <= 56319 && t + 1 < e.length && (r = e.charCodeAt(t + 1), r >= 56320 && r <= 57343) ? (i - 55296) * 1024 + r - 56320 + 65536 : i;
  }
  g(mi, "codePointAt");
  function Pa(e) {
    var t = /^\n* /;
    return t.test(e);
  }
  g(Pa, "needIndentIndicator");
  var dd = 1, Jo = 2, ud = 3, pd = 4, gi = 5;
  function gd(e, t, i, r, n, o, s, a) {
    var l, c = 0, h = null, d = false, u = false, p = r !== -1, f = -1, m = hd(mi(e, 0)) && cd(mi(e, e.length - 1));
    if (t || s)
      for (l = 0; l < e.length; c >= 65536 ? l += 2 : l++) {
        if (c = mi(e, l), !Si(c))
          return gi;
        m = m && Qo(c, h, a), h = c;
      }
    else {
      for (l = 0; l < e.length; c >= 65536 ? l += 2 : l++) {
        if (c = mi(e, l), c === ar)
          d = true, p && (u = u || l - f - 1 > r && e[f + 1] !== " ", f = l);
        else if (!Si(c))
          return gi;
        m = m && Qo(c, h, a), h = c;
      }
      u = u || p && l - f - 1 > r && e[f + 1] !== " ";
    }
    return !d && !u ? m && !s && !n(e) ? dd : o === sr ? gi : Jo : i > 9 && Pa(e) ? gi : s ? o === sr ? gi : Jo : u ? pd : ud;
  }
  g(gd, "chooseScalarStyle");
  function fd(e, t, i, r, n) {
    e.dump = function() {
      if (t.length === 0)
        return e.quotingType === sr ? '""' : "''";
      if (!e.noCompatMode && (Jm.indexOf(t) !== -1 || Km.test(t)))
        return e.quotingType === sr ? '"' + t + '"' : "'" + t + "'";
      var o = e.indent * Math.max(1, i), s = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - o), a = r || e.flowLevel > -1 && i >= e.flowLevel;
      function l(c) {
        return ld(e, c);
      }
      switch (g(l, "testAmbiguity"), gd(t, a, e.indent, s, l, e.quotingType, e.forceQuotes && !r, n)) {
        case dd:
          return t;
        case Jo:
          return "'" + t.replace(/'/g, "''") + "'";
        case ud:
          return "|" + Ko(t, e.indent) + ta(Go(t, o));
        case pd:
          return ">" + Ko(t, e.indent) + ta(Go(md(t, s), o));
        case gi:
          return '"' + yd(t) + '"';
        default:
          throw new Vt("impossible error: invalid scalar style");
      }
    }();
  }
  g(fd, "writeScalar");
  function Ko(e, t) {
    var i = Pa(e) ? String(t) : "", r = e[e.length - 1] === `
`, n = r && (e[e.length - 2] === `
` || e === `
`), o = n ? "+" : r ? "" : "-";
    return i + o + `
`;
  }
  g(Ko, "blockHeader");
  function ta(e) {
    return e[e.length - 1] === `
` ? e.slice(0, -1) : e;
  }
  g(ta, "dropEndingNewline");
  function md(e, t) {
    for (var i = /(\n+)([^\n]*)/g, r = function() {
      var c = e.indexOf(`
`);
      return c = c !== -1 ? c : e.length, i.lastIndex = c, ea(e.slice(0, c), t);
    }(), n = e[0] === `
` || e[0] === " ", o, s; s = i.exec(e); ) {
      var a = s[1], l = s[2];
      o = l[0] === " ", r += a + (!n && !o && l !== "" ? `
` : "") + ea(l, t), n = o;
    }
    return r;
  }
  g(md, "foldString");
  function ea(e, t) {
    if (e === "" || e[0] === " ")
      return e;
    for (var i = / [^ ]/g, r, n = 0, o, s = 0, a = 0, l = ""; r = i.exec(e); )
      a = r.index, a - n > t && (o = s > n ? s : a, l += `
` + e.slice(n, o), n = o + 1), s = a;
    return l += `
`, e.length - n > t && s > n ? l += e.slice(n, s) + `
` + e.slice(s + 1) : l += e.slice(n), l.slice(1);
  }
  g(ea, "foldLine");
  function yd(e) {
    for (var t = "", i = 0, r, n = 0; n < e.length; i >= 65536 ? n += 2 : n++)
      i = mi(e, n), r = Dt[i], !r && Si(i) ? (t += e[n], i >= 65536 && (t += e[n + 1])) : t += r || ad(i);
    return t;
  }
  g(yd, "escapeString");
  function xd(e, t, i) {
    var r = "", n = e.tag, o, s, a;
    for (o = 0, s = i.length; o < s; o += 1)
      a = i[o], e.replacer && (a = e.replacer.call(i, String(o), a)), (pe(e, t, a, false, false) || typeof a > "u" && pe(e, t, null, false, false)) && (r !== "" && (r += "," + (e.condenseFlow ? "" : " ")), r += e.dump);
    e.tag = n, e.dump = "[" + r + "]";
  }
  g(xd, "writeFlowSequence");
  function ia(e, t, i, r) {
    var n = "", o = e.tag, s, a, l;
    for (s = 0, a = i.length; s < a; s += 1)
      l = i[s], e.replacer && (l = e.replacer.call(i, String(s), l)), (pe(e, t + 1, l, true, true, false, true) || typeof l > "u" && pe(e, t + 1, null, true, true, false, true)) && ((!r || n !== "") && (n += rn(e, t)), e.dump && ar === e.dump.charCodeAt(0) ? n += "-" : n += "- ", n += e.dump);
    e.tag = o, e.dump = n || "[]";
  }
  g(ia, "writeBlockSequence");
  function bd(e, t, i) {
    var r = "", n = e.tag, o = Object.keys(i), s, a, l, c, h;
    for (s = 0, a = o.length; s < a; s += 1)
      h = "", r !== "" && (h += ", "), e.condenseFlow && (h += '"'), l = o[s], c = i[l], e.replacer && (c = e.replacer.call(i, l, c)), pe(e, t, l, false, false) && (e.dump.length > 1024 && (h += "? "), h += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), pe(e, t, c, false, false) && (h += e.dump, r += h));
    e.tag = n, e.dump = "{" + r + "}";
  }
  g(bd, "writeFlowMapping");
  function kd(e, t, i, r) {
    var n = "", o = e.tag, s = Object.keys(i), a, l, c, h, d, u;
    if (e.sortKeys === true)
      s.sort();
    else if (typeof e.sortKeys == "function")
      s.sort(e.sortKeys);
    else if (e.sortKeys)
      throw new Vt("sortKeys must be a boolean or a function");
    for (a = 0, l = s.length; a < l; a += 1)
      u = "", (!r || n !== "") && (u += rn(e, t)), c = s[a], h = i[c], e.replacer && (h = e.replacer.call(i, c, h)), pe(e, t + 1, c, true, true, true) && (d = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024, d && (e.dump && ar === e.dump.charCodeAt(0) ? u += "?" : u += "? "), u += e.dump, d && (u += rn(e, t)), pe(e, t + 1, h, true, d) && (e.dump && ar === e.dump.charCodeAt(0) ? u += ":" : u += ": ", u += e.dump, n += u));
    e.tag = o, e.dump = n || "{}";
  }
  g(kd, "writeBlockMapping");
  function ra(e, t, i) {
    var r, n, o, s, a, l;
    for (n = i ? e.explicitTypes : e.implicitTypes, o = 0, s = n.length; o < s; o += 1)
      if (a = n[o], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof t == "object" && t instanceof a.instanceOf) && (!a.predicate || a.predicate(t))) {
        if (i ? a.multi && a.representName ? e.tag = a.representName(t) : e.tag = a.tag : e.tag = "?", a.represent) {
          if (l = e.styleMap[a.tag] || a.defaultStyle, Jc.call(a.represent) === "[object Function]")
            r = a.represent(t, l);
          else if (Kc.call(a.represent, l))
            r = a.represent[l](t, l);
          else
            throw new Vt("!<" + a.tag + '> tag resolver accepts not "' + l + '" style');
          e.dump = r;
        }
        return true;
      }
    return false;
  }
  g(ra, "detectType");
  function pe(e, t, i, r, n, o, s) {
    e.tag = null, e.dump = i, ra(e, i, false) || ra(e, i, true);
    var a = Jc.call(e.dump), l = r, c;
    r && (r = e.flowLevel < 0 || e.flowLevel > t);
    var h = a === "[object Object]" || a === "[object Array]", d, u;
    if (h && (d = e.duplicates.indexOf(i), u = d !== -1), (e.tag !== null && e.tag !== "?" || u || e.indent !== 2 && t > 0) && (n = false), u && e.usedDuplicates[d])
      e.dump = "*ref_" + d;
    else {
      if (h && u && !e.usedDuplicates[d] && (e.usedDuplicates[d] = true), a === "[object Object]")
        r && Object.keys(e.dump).length !== 0 ? (kd(e, t, e.dump, n), u && (e.dump = "&ref_" + d + e.dump)) : (bd(e, t, e.dump), u && (e.dump = "&ref_" + d + " " + e.dump));
      else if (a === "[object Array]")
        r && e.dump.length !== 0 ? (e.noArrayIndent && !s && t > 0 ? ia(e, t - 1, e.dump, n) : ia(e, t, e.dump, n), u && (e.dump = "&ref_" + d + e.dump)) : (xd(e, t, e.dump), u && (e.dump = "&ref_" + d + " " + e.dump));
      else if (a === "[object String]")
        e.tag !== "?" && fd(e, e.dump, t, o, l);
      else {
        if (a === "[object Undefined]" || e.skipInvalid)
          return false;
        throw new Vt("unacceptable kind of an object to dump " + a);
      }
      e.tag !== null && e.tag !== "?" && (c = encodeURI(e.tag[0] === "!" ? e.tag.slice(1) : e.tag).replace(/!/g, "%21"), e.tag[0] === "!" ? c = "!" + c : c.slice(0, 18) === "tag:yaml.org,2002:" ? c = "!!" + c.slice(18) : c = "!<" + c + ">", e.dump = c + " " + e.dump);
    }
    return true;
  }
  g(pe, "writeNode");
  function Cd(e, t) {
    var i = [], r = [], n, o;
    for (nn(e, i, r), n = 0, o = r.length; n < o; n += 1)
      t.duplicates.push(i[r[n]]);
    t.usedDuplicates = new Array(o);
  }
  g(Cd, "getDuplicateReferences");
  function nn(e, t, i) {
    var r, n, o;
    if (e !== null && typeof e == "object")
      if (n = t.indexOf(e), n !== -1)
        i.indexOf(n) === -1 && i.push(n);
      else if (t.push(e), Array.isArray(e))
        for (n = 0, o = e.length; n < o; n += 1)
          nn(e[n], t, i);
      else
        for (r = Object.keys(e), n = 0, o = r.length; n < o; n += 1)
          nn(e[r[n]], t, i);
  }
  g(nn, "inspectNode");
  function ey(e, t) {
    t = t || {};
    var i = new sd(t);
    i.noRefs || Cd(e, i);
    var r = e;
    return i.replacer && (r = i.replacer.call({
      "": r
    }, "", r)), pe(i, 0, r, true, true) ? i.dump + `
` : "";
  }
  g(ey, "dump$1");
  function iy(e, t) {
    return function() {
      throw new Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
    };
  }
  g(iy, "renamed");
  ry = uc;
  ny = Dm.load;
  var Qt = {
    aggregation: 18,
    extension: 18,
    composition: 18,
    dependency: 6,
    lollipop: 13.5,
    arrow_point: 4
  };
  function Xi(e, t) {
    if (e === void 0 || t === void 0)
      return {
        angle: 0,
        deltaX: 0,
        deltaY: 0
      };
    e = yt(e), t = yt(t);
    const [i, r] = [
      e.x,
      e.y
    ], [n, o] = [
      t.x,
      t.y
    ], s = n - i, a = o - r;
    return {
      angle: Math.atan(a / s),
      deltaX: s,
      deltaY: a
    };
  }
  g(Xi, "calculateDeltaAndAngle");
  let yt;
  yt = g((e) => Array.isArray(e) ? {
    x: e[0],
    y: e[1]
  } : e, "pointTransformer");
  oy = g((e) => ({
    x: g(function(t, i, r) {
      let n = 0;
      const o = yt(r[0]).x < yt(r[r.length - 1]).x ? "left" : "right";
      if (i === 0 && Object.hasOwn(Qt, e.arrowTypeStart)) {
        const { angle: p, deltaX: f } = Xi(r[0], r[1]);
        n = Qt[e.arrowTypeStart] * Math.cos(p) * (f >= 0 ? 1 : -1);
      } else if (i === r.length - 1 && Object.hasOwn(Qt, e.arrowTypeEnd)) {
        const { angle: p, deltaX: f } = Xi(r[r.length - 1], r[r.length - 2]);
        n = Qt[e.arrowTypeEnd] * Math.cos(p) * (f >= 0 ? 1 : -1);
      }
      const s = Math.abs(yt(t).x - yt(r[r.length - 1]).x), a = Math.abs(yt(t).y - yt(r[r.length - 1]).y), l = Math.abs(yt(t).x - yt(r[0]).x), c = Math.abs(yt(t).y - yt(r[0]).y), h = Qt[e.arrowTypeStart], d = Qt[e.arrowTypeEnd], u = 1;
      if (s < d && s > 0 && a < d) {
        let p = d + u - s;
        p *= o === "right" ? -1 : 1, n -= p;
      }
      if (l < h && l > 0 && c < h) {
        let p = h + u - l;
        p *= o === "right" ? -1 : 1, n += p;
      }
      return yt(t).x + n;
    }, "x"),
    y: g(function(t, i, r) {
      let n = 0;
      const o = yt(r[0]).y < yt(r[r.length - 1]).y ? "down" : "up";
      if (i === 0 && Object.hasOwn(Qt, e.arrowTypeStart)) {
        const { angle: p, deltaY: f } = Xi(r[0], r[1]);
        n = Qt[e.arrowTypeStart] * Math.abs(Math.sin(p)) * (f >= 0 ? 1 : -1);
      } else if (i === r.length - 1 && Object.hasOwn(Qt, e.arrowTypeEnd)) {
        const { angle: p, deltaY: f } = Xi(r[r.length - 1], r[r.length - 2]);
        n = Qt[e.arrowTypeEnd] * Math.abs(Math.sin(p)) * (f >= 0 ? 1 : -1);
      }
      const s = Math.abs(yt(t).y - yt(r[r.length - 1]).y), a = Math.abs(yt(t).x - yt(r[r.length - 1]).x), l = Math.abs(yt(t).y - yt(r[0]).y), c = Math.abs(yt(t).x - yt(r[0]).x), h = Qt[e.arrowTypeStart], d = Qt[e.arrowTypeEnd], u = 1;
      if (s < d && s > 0 && a < d) {
        let p = d + u - s;
        p *= o === "up" ? -1 : 1, n -= p;
      }
      if (l < h && l > 0 && c < h) {
        let p = h + u - l;
        p *= o === "up" ? -1 : 1, n += p;
      }
      return yt(t).y + n;
    }, "y")
  }), "getLineFunctionsWithOffset");
  Ra = g(({ flowchart: e }) => {
    var t, i;
    const r = ((t = e == null ? void 0 : e.subGraphTitleMargin) == null ? void 0 : t.top) ?? 0, n = ((i = e == null ? void 0 : e.subGraphTitleMargin) == null ? void 0 : i.bottom) ?? 0, o = r + n;
    return {
      subGraphTitleTopMargin: r,
      subGraphTitleBottomMargin: n,
      subGraphTitleTotalMargin: o
    };
  }, "getSubGraphTitleMargins");
  const ay = Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }), on = Object.freeze({
    rotate: 0,
    vFlip: false,
    hFlip: false
  }), vd = Object.freeze({
    ...ay,
    ...on
  }), sy = Object.freeze({
    ...vd,
    body: "",
    hidden: false
  }), ly = Object.freeze({
    width: null,
    height: null
  }), hy = Object.freeze({
    ...ly,
    ...on
  }), cy = (e, t, i, r = "") => {
    const n = e.split(":");
    if (e.slice(0, 1) === "@") {
      if (n.length < 2 || n.length > 3)
        return null;
      r = n.shift().slice(1);
    }
    if (n.length > 3 || !n.length)
      return null;
    if (n.length > 1) {
      const a = n.pop(), l = n.pop(), c = {
        provider: n.length > 0 ? n[0] : r,
        prefix: l,
        name: a
      };
      return xo(c) ? c : null;
    }
    const o = n[0], s = o.split("-");
    if (s.length > 1) {
      const a = {
        provider: r,
        prefix: s.shift(),
        name: s.join("-")
      };
      return xo(a) ? a : null;
    }
    if (i && r === "") {
      const a = {
        provider: r,
        prefix: "",
        name: o
      };
      return xo(a, i) ? a : null;
    }
    return null;
  }, xo = (e, t) => e ? !!((t && e.prefix === "" || e.prefix) && e.name) : false;
  function dy(e, t) {
    const i = {};
    !e.hFlip != !t.hFlip && (i.hFlip = true), !e.vFlip != !t.vFlip && (i.vFlip = true);
    const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
    return r && (i.rotate = r), i;
  }
  function nl(e, t) {
    const i = dy(e, t);
    for (const r in sy)
      r in on ? r in e && !(r in i) && (i[r] = on[r]) : r in t ? i[r] = t[r] : r in e && (i[r] = e[r]);
    return i;
  }
  function uy(e, t) {
    const i = e.icons, r = e.aliases || /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
    function o(s) {
      if (i[s])
        return n[s] = [];
      if (!(s in n)) {
        n[s] = null;
        const a = r[s] && r[s].parent, l = a && o(a);
        l && (n[s] = [
          a
        ].concat(l));
      }
      return n[s];
    }
    return (t || Object.keys(i).concat(Object.keys(r))).forEach(o), n;
  }
  function ol(e, t, i) {
    const r = e.icons, n = e.aliases || /* @__PURE__ */ Object.create(null);
    let o = {};
    function s(a) {
      o = nl(r[a] || n[a], o);
    }
    return s(t), i.forEach(s), nl(e, o);
  }
  function py(e, t) {
    if (e.icons[t])
      return ol(e, t, []);
    const i = uy(e, [
      t
    ])[t];
    return i ? ol(e, t, i) : null;
  }
  const gy = /(-?[0-9.]*[0-9]+[0-9.]*)/g, fy = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
  function al(e, t, i) {
    if (t === 1)
      return e;
    if (i = i || 100, typeof e == "number")
      return Math.ceil(e * t * i) / i;
    if (typeof e != "string")
      return e;
    const r = e.split(gy);
    if (r === null || !r.length)
      return e;
    const n = [];
    let o = r.shift(), s = fy.test(o);
    for (; ; ) {
      if (s) {
        const a = parseFloat(o);
        isNaN(a) ? n.push(o) : n.push(Math.ceil(a * t * i) / i);
      } else
        n.push(o);
      if (o = r.shift(), o === void 0)
        return n.join("");
      s = !s;
    }
  }
  function my(e, t = "defs") {
    let i = "";
    const r = e.indexOf("<" + t);
    for (; r >= 0; ) {
      const n = e.indexOf(">", r), o = e.indexOf("</" + t);
      if (n === -1 || o === -1)
        break;
      const s = e.indexOf(">", o);
      if (s === -1)
        break;
      i += e.slice(n + 1, o).trim(), e = e.slice(0, r).trim() + e.slice(s + 1);
    }
    return {
      defs: i,
      content: e
    };
  }
  function yy(e, t) {
    return e ? "<defs>" + e + "</defs>" + t : t;
  }
  function xy(e, t, i) {
    const r = my(e);
    return yy(r.defs, t + r.content + i);
  }
  const by = (e) => e === "unset" || e === "undefined" || e === "none";
  function ky(e, t) {
    const i = {
      ...vd,
      ...e
    }, r = {
      ...hy,
      ...t
    }, n = {
      left: i.left,
      top: i.top,
      width: i.width,
      height: i.height
    };
    let o = i.body;
    [
      i,
      r
    ].forEach((m) => {
      const y = [], x = m.hFlip, b = m.vFlip;
      let C = m.rotate;
      x ? b ? C += 2 : (y.push("translate(" + (n.width + n.left).toString() + " " + (0 - n.top).toString() + ")"), y.push("scale(-1 1)"), n.top = n.left = 0) : b && (y.push("translate(" + (0 - n.left).toString() + " " + (n.height + n.top).toString() + ")"), y.push("scale(1 -1)"), n.top = n.left = 0);
      let w;
      switch (C < 0 && (C -= Math.floor(C / 4) * 4), C = C % 4, C) {
        case 1:
          w = n.height / 2 + n.top, y.unshift("rotate(90 " + w.toString() + " " + w.toString() + ")");
          break;
        case 2:
          y.unshift("rotate(180 " + (n.width / 2 + n.left).toString() + " " + (n.height / 2 + n.top).toString() + ")");
          break;
        case 3:
          w = n.width / 2 + n.left, y.unshift("rotate(-90 " + w.toString() + " " + w.toString() + ")");
          break;
      }
      C % 2 === 1 && (n.left !== n.top && (w = n.left, n.left = n.top, n.top = w), n.width !== n.height && (w = n.width, n.width = n.height, n.height = w)), y.length && (o = xy(o, '<g transform="' + y.join(" ") + '">', "</g>"));
    });
    const s = r.width, a = r.height, l = n.width, c = n.height;
    let h, d;
    s === null ? (d = a === null ? "1em" : a === "auto" ? c : a, h = al(d, l / c)) : (h = s === "auto" ? l : s, d = a === null ? al(h, c / l) : a === "auto" ? c : a);
    const u = {}, p = (m, y) => {
      by(y) || (u[m] = y.toString());
    };
    p("width", h), p("height", d);
    const f = [
      n.left,
      n.top,
      l,
      c
    ];
    return u.viewBox = f.join(" "), {
      attributes: u,
      viewBox: f,
      body: o
    };
  }
  const Cy = /\sid="(\S+)"/g, vy = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
  let wy = 0;
  function _y(e, t = vy) {
    const i = [];
    let r;
    for (; r = Cy.exec(e); )
      i.push(r[1]);
    if (!i.length)
      return e;
    const n = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
    return i.forEach((o) => {
      const s = typeof t == "function" ? t(o) : t + (wy++).toString(), a = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      e = e.replace(new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"), "$1" + s + n + "$3");
    }), e = e.replace(new RegExp(n, "g"), ""), e;
  }
  function Sy(e, t) {
    let i = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for (const r in t)
      i += " " + r + '="' + t[r] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + i + ">" + e + "</svg>";
  }
  let na, wd, My, qi, St, sl;
  Ty = {
    body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
    height: 80,
    width: 80
  };
  na = /* @__PURE__ */ new Map();
  wd = /* @__PURE__ */ new Map();
  By = g((e) => {
    for (const t of e) {
      if (!t.name)
        throw new Error('Invalid icon loader. Must have a "name" property with non-empty string value.');
      if ($.debug("Registering icon pack:", t.name), "loader" in t)
        wd.set(t.name, t.loader);
      else if ("icons" in t)
        na.set(t.name, t.icons);
      else
        throw $.error("Invalid icon loader:", t), new Error('Invalid icon loader. Must have either "icons" or "loader" property.');
    }
  }, "registerIconPacks");
  My = g(async (e, t) => {
    const i = cy(e, true, t !== void 0);
    if (!i)
      throw new Error(`Invalid icon name: ${e}`);
    const r = i.prefix || t;
    if (!r)
      throw new Error(`Icon name must contain a prefix: ${e}`);
    let n = na.get(r);
    if (!n) {
      const s = wd.get(r);
      if (!s)
        throw new Error(`Icon set not found: ${i.prefix}`);
      try {
        n = {
          ...await s(),
          prefix: r
        }, na.set(r, n);
      } catch (a) {
        throw $.error(a), new Error(`Failed to load icon set: ${i.prefix}`);
      }
    }
    const o = py(n, i.name);
    if (!o)
      throw new Error(`Icon not found: ${e}`);
    return o;
  }, "getRegisteredIconData");
  An = g(async (e, t) => {
    let i;
    try {
      i = await My(e, t == null ? void 0 : t.fallbackPrefix);
    } catch (n) {
      $.error(n), i = Ty;
    }
    const r = ky(i, t);
    return Sy(_y(r.body), r.attributes);
  }, "getIconSVG");
  qi = {};
  St = {};
  function Ly() {
    return sl || (sl = 1, Object.defineProperty(St, "__esModule", {
      value: true
    }), St.BLANK_URL = St.relativeFirstCharacters = St.whitespaceEscapeCharsRegex = St.urlSchemeRegex = St.ctrlCharactersRegex = St.htmlCtrlEntityRegex = St.htmlEntitiesRegex = St.invalidProtocolRegex = void 0, St.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im, St.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g, St.htmlCtrlEntityRegex = /&(newline|tab);/gi, St.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, St.urlSchemeRegex = /^.+(:|&colon;)/gim, St.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g, St.relativeFirstCharacters = [
      ".",
      "/"
    ], St.BLANK_URL = "about:blank"), St;
  }
  var ll;
  function Ay() {
    if (ll)
      return qi;
    ll = 1, Object.defineProperty(qi, "__esModule", {
      value: true
    }), qi.sanitizeUrl = void 0;
    var e = Ly();
    function t(s) {
      return e.relativeFirstCharacters.indexOf(s[0]) > -1;
    }
    function i(s) {
      var a = s.replace(e.ctrlCharactersRegex, "");
      return a.replace(e.htmlEntitiesRegex, function(l, c) {
        return String.fromCharCode(c);
      });
    }
    function r(s) {
      return URL.canParse(s);
    }
    function n(s) {
      try {
        return decodeURIComponent(s);
      } catch {
        return s;
      }
    }
    function o(s) {
      if (!s)
        return e.BLANK_URL;
      var a, l = n(s.trim());
      do
        l = i(l).replace(e.htmlCtrlEntityRegex, "").replace(e.ctrlCharactersRegex, "").replace(e.whitespaceEscapeCharsRegex, "").trim(), l = n(l), a = l.match(e.ctrlCharactersRegex) || l.match(e.htmlEntitiesRegex) || l.match(e.htmlCtrlEntityRegex) || l.match(e.whitespaceEscapeCharsRegex);
      while (a && a.length > 0);
      var c = l;
      if (!c)
        return e.BLANK_URL;
      if (t(c))
        return c;
      var h = c.trimStart(), d = h.match(e.urlSchemeRegex);
      if (!d)
        return c;
      var u = d[0].toLowerCase().trim();
      if (e.invalidProtocolRegex.test(u))
        return e.BLANK_URL;
      var p = h.replace(/\\/g, "/");
      if (u === "mailto:" || u.includes("://"))
        return p;
      if (u === "http:" || u === "https:") {
        if (!r(p))
          return e.BLANK_URL;
        var f = new URL(p);
        return f.protocol = f.protocol.toLowerCase(), f.hostname = f.hostname.toLowerCase(), f.toString();
      }
      return p;
    }
    return qi.sanitizeUrl = o, qi;
  }
  Fy = Ay();
  h_ = Math.abs;
  c_ = Math.atan2;
  d_ = Math.cos;
  u_ = Math.max;
  p_ = Math.min;
  g_ = Math.sin;
  f_ = Math.sqrt;
  hl = 1e-12;
  Na = Math.PI;
  cl = Na / 2;
  m_ = 2 * Na;
  y_ = function(e) {
    return e > 1 ? 0 : e < -1 ? Na : Math.acos(e);
  };
  x_ = function(e) {
    return e >= 1 ? cl : e <= -1 ? -cl : Math.asin(e);
  };
  function _d(e) {
    this._context = e;
  }
  _d.prototype = {
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
  function an(e) {
    return new _d(e);
  }
  Ey = function(e, t) {
    var i = ui(true), r = null, n = an, o = null, s = xf(a);
    e = typeof e == "function" ? e : e === void 0 ? bf : ui(e), t = typeof t == "function" ? t : t === void 0 ? kf : ui(t);
    function a(l) {
      var c, h = (l = Cf(l)).length, d, u = false, p;
      for (r == null && (o = n(p = s())), c = 0; c <= h; ++c)
        !(c < h && i(d = l[c], c, l)) === u && ((u = !u) ? o.lineStart() : o.lineEnd()), u && o.point(+e(d, c, l), +t(d, c, l));
      if (p)
        return o = null, p + "" || null;
    }
    return a.x = function(l) {
      return arguments.length ? (e = typeof l == "function" ? l : ui(+l), a) : e;
    }, a.y = function(l) {
      return arguments.length ? (t = typeof l == "function" ? l : ui(+l), a) : t;
    }, a.defined = function(l) {
      return arguments.length ? (i = typeof l == "function" ? l : ui(!!l), a) : i;
    }, a.curve = function(l) {
      return arguments.length ? (n = l, r != null && (o = n(r)), a) : n;
    }, a.context = function(l) {
      return arguments.length ? (l == null ? r = o = null : o = n(r = l), a) : r;
    }, a;
  };
  function Ie() {
  }
  function sn(e, t, i) {
    e._context.bezierCurveTo((2 * e._x0 + e._x1) / 3, (2 * e._y0 + e._y1) / 3, (e._x0 + 2 * e._x1) / 3, (e._y0 + 2 * e._y1) / 3, (e._x0 + 4 * e._x1 + t) / 6, (e._y0 + 4 * e._y1 + i) / 6);
  }
  function Fn(e) {
    this._context = e;
  }
  Fn.prototype = {
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
          sn(this, this._x1, this._y1);
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
          sn(this, e, t);
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
    }
  };
  qr = function(e) {
    return new Fn(e);
  };
  function Sd(e) {
    this._context = e;
  }
  Sd.prototype = {
    areaStart: Ie,
    areaEnd: Ie,
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
          sn(this, e, t);
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
    }
  };
  function $y(e) {
    return new Sd(e);
  }
  function Td(e) {
    this._context = e;
  }
  Td.prototype = {
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
          var i = (this._x0 + 4 * this._x1 + e) / 6, r = (this._y0 + 4 * this._y1 + t) / 6;
          this._line ? this._context.lineTo(i, r) : this._context.moveTo(i, r);
          break;
        case 3:
          this._point = 4;
        default:
          sn(this, e, t);
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
    }
  };
  function Oy(e) {
    return new Td(e);
  }
  function Bd(e, t) {
    this._basis = new Fn(e), this._beta = t;
  }
  Bd.prototype = {
    lineStart: function() {
      this._x = [], this._y = [], this._basis.lineStart();
    },
    lineEnd: function() {
      var e = this._x, t = this._y, i = e.length - 1;
      if (i > 0)
        for (var r = e[0], n = t[0], o = e[i] - r, s = t[i] - n, a = -1, l; ++a <= i; )
          l = a / i, this._basis.point(this._beta * e[a] + (1 - this._beta) * (r + l * o), this._beta * t[a] + (1 - this._beta) * (n + l * s));
      this._x = this._y = null, this._basis.lineEnd();
    },
    point: function(e, t) {
      this._x.push(+e), this._y.push(+t);
    }
  };
  const Dy = function e(t) {
    function i(r) {
      return t === 1 ? new Fn(r) : new Bd(r, t);
    }
    return i.beta = function(r) {
      return e(+r);
    }, i;
  }(0.85);
  function ln(e, t, i) {
    e._context.bezierCurveTo(e._x1 + e._k * (e._x2 - e._x0), e._y1 + e._k * (e._y2 - e._y0), e._x2 + e._k * (e._x1 - t), e._y2 + e._k * (e._y1 - i), e._x2, e._y2);
  }
  function qa(e, t) {
    this._context = e, this._k = (1 - t) / 6;
  }
  qa.prototype = {
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
          ln(this, this._x1, this._y1);
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
          ln(this, e, t);
          break;
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
    }
  };
  const Md = function e(t) {
    function i(r) {
      return new qa(r, t);
    }
    return i.tension = function(r) {
      return e(+r);
    }, i;
  }(0);
  function Wa(e, t) {
    this._context = e, this._k = (1 - t) / 6;
  }
  Wa.prototype = {
    areaStart: Ie,
    areaEnd: Ie,
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
          ln(this, e, t);
          break;
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
    }
  };
  const Iy = function e(t) {
    function i(r) {
      return new Wa(r, t);
    }
    return i.tension = function(r) {
      return e(+r);
    }, i;
  }(0);
  function ja(e, t) {
    this._context = e, this._k = (1 - t) / 6;
  }
  ja.prototype = {
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
          ln(this, e, t);
          break;
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
    }
  };
  const zy = function e(t) {
    function i(r) {
      return new ja(r, t);
    }
    return i.tension = function(r) {
      return e(+r);
    }, i;
  }(0);
  function Ha(e, t, i) {
    var r = e._x1, n = e._y1, o = e._x2, s = e._y2;
    if (e._l01_a > hl) {
      var a = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, l = 3 * e._l01_a * (e._l01_a + e._l12_a);
      r = (r * a - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / l, n = (n * a - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / l;
    }
    if (e._l23_a > hl) {
      var c = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, h = 3 * e._l23_a * (e._l23_a + e._l12_a);
      o = (o * c + e._x1 * e._l23_2a - t * e._l12_2a) / h, s = (s * c + e._y1 * e._l23_2a - i * e._l12_2a) / h;
    }
    e._context.bezierCurveTo(r, n, o, s, e._x2, e._y2);
  }
  function Ld(e, t) {
    this._context = e, this._alpha = t;
  }
  Ld.prototype = {
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
        var i = this._x2 - e, r = this._y2 - t;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
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
          Ha(this, e, t);
          break;
      }
      this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
    }
  };
  const Ad = function e(t) {
    function i(r) {
      return t ? new Ld(r, t) : new qa(r, 0);
    }
    return i.alpha = function(r) {
      return e(+r);
    }, i;
  }(0.5);
  function Fd(e, t) {
    this._context = e, this._alpha = t;
  }
  Fd.prototype = {
    areaStart: Ie,
    areaEnd: Ie,
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
        var i = this._x2 - e, r = this._y2 - t;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
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
          Ha(this, e, t);
          break;
      }
      this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
    }
  };
  const Py = function e(t) {
    function i(r) {
      return t ? new Fd(r, t) : new Wa(r, 0);
    }
    return i.alpha = function(r) {
      return e(+r);
    }, i;
  }(0.5);
  function Ed(e, t) {
    this._context = e, this._alpha = t;
  }
  Ed.prototype = {
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
        var i = this._x2 - e, r = this._y2 - t;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
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
          Ha(this, e, t);
          break;
      }
      this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
    }
  };
  const Ry = function e(t) {
    function i(r) {
      return t ? new Ed(r, t) : new ja(r, 0);
    }
    return i.alpha = function(r) {
      return e(+r);
    }, i;
  }(0.5);
  function $d(e) {
    this._context = e;
  }
  $d.prototype = {
    areaStart: Ie,
    areaEnd: Ie,
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
  function Ny(e) {
    return new $d(e);
  }
  function dl(e) {
    return e < 0 ? -1 : 1;
  }
  function ul(e, t, i) {
    var r = e._x1 - e._x0, n = t - e._x1, o = (e._y1 - e._y0) / (r || n < 0 && -0), s = (i - e._y1) / (n || r < 0 && -0), a = (o * n + s * r) / (r + n);
    return (dl(o) + dl(s)) * Math.min(Math.abs(o), Math.abs(s), 0.5 * Math.abs(a)) || 0;
  }
  function pl(e, t) {
    var i = e._x1 - e._x0;
    return i ? (3 * (e._y1 - e._y0) / i - t) / 2 : t;
  }
  function bo(e, t, i) {
    var r = e._x0, n = e._y0, o = e._x1, s = e._y1, a = (o - r) / 3;
    e._context.bezierCurveTo(r + a, n + a * t, o - a, s - a * i, o, s);
  }
  function hn(e) {
    this._context = e;
  }
  hn.prototype = {
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
          bo(this, this._t0, pl(this, this._t0));
          break;
      }
      (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
    },
    point: function(e, t) {
      var i = NaN;
      if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
        switch (this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, bo(this, pl(this, i = ul(this, e, t)), i);
            break;
          default:
            bo(this, this._t0, i = ul(this, e, t));
            break;
        }
        this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = i;
      }
    }
  };
  function Od(e) {
    this._context = new Dd(e);
  }
  (Od.prototype = Object.create(hn.prototype)).point = function(e, t) {
    hn.prototype.point.call(this, t, e);
  };
  function Dd(e) {
    this._context = e;
  }
  Dd.prototype = {
    moveTo: function(e, t) {
      this._context.moveTo(t, e);
    },
    closePath: function() {
      this._context.closePath();
    },
    lineTo: function(e, t) {
      this._context.lineTo(t, e);
    },
    bezierCurveTo: function(e, t, i, r, n, o) {
      this._context.bezierCurveTo(t, e, r, i, o, n);
    }
  };
  function Id(e) {
    return new hn(e);
  }
  function zd(e) {
    return new Od(e);
  }
  function Pd(e) {
    this._context = e;
  }
  Pd.prototype = {
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
      var e = this._x, t = this._y, i = e.length;
      if (i)
        if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), i === 2)
          this._context.lineTo(e[1], t[1]);
        else
          for (var r = gl(e), n = gl(t), o = 0, s = 1; s < i; ++o, ++s)
            this._context.bezierCurveTo(r[0][o], n[0][o], r[1][o], n[1][o], e[s], t[s]);
      (this._line || this._line !== 0 && i === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
    },
    point: function(e, t) {
      this._x.push(+e), this._y.push(+t);
    }
  };
  function gl(e) {
    var t, i = e.length - 1, r, n = new Array(i), o = new Array(i), s = new Array(i);
    for (n[0] = 0, o[0] = 2, s[0] = e[0] + 2 * e[1], t = 1; t < i - 1; ++t)
      n[t] = 1, o[t] = 4, s[t] = 4 * e[t] + 2 * e[t + 1];
    for (n[i - 1] = 2, o[i - 1] = 7, s[i - 1] = 8 * e[i - 1] + e[i], t = 1; t < i; ++t)
      r = n[t] / o[t - 1], o[t] -= r, s[t] -= r * s[t - 1];
    for (n[i - 1] = s[i - 1] / o[i - 1], t = i - 2; t >= 0; --t)
      n[t] = (s[t] - n[t + 1]) / o[t];
    for (o[i - 1] = (e[i] + n[i - 1]) / 2, t = 0; t < i - 1; ++t)
      o[t] = 2 * e[t + 1] - n[t + 1];
    return [
      n,
      o
    ];
  }
  function Rd(e) {
    return new Pd(e);
  }
  function En(e, t) {
    this._context = e, this._t = t;
  }
  En.prototype = {
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
            var i = this._x * (1 - this._t) + e * this._t;
            this._context.lineTo(i, this._y), this._context.lineTo(i, t);
          }
          break;
        }
      }
      this._x = e, this._y = t;
    }
  };
  function Nd(e) {
    return new En(e, 0.5);
  }
  function qd(e) {
    return new En(e, 0);
  }
  function Wd(e) {
    return new En(e, 1);
  }
  let jd, qy, ge, Hd, Wy, jy, Wi;
  jd = typeof global == "object" && global && global.Object === Object && global;
  qy = typeof self == "object" && self && self.Object === Object && self;
  ge = jd || qy || Function("return this")();
  cn = ge.Symbol;
  Hd = Object.prototype;
  Wy = Hd.hasOwnProperty;
  jy = Hd.toString;
  Wi = cn ? cn.toStringTag : void 0;
  function Hy(e) {
    var t = Wy.call(e, Wi), i = e[Wi];
    try {
      e[Wi] = void 0;
      var r = true;
    } catch {
    }
    var n = jy.call(e);
    return r && (t ? e[Wi] = i : delete e[Wi]), n;
  }
  var Zy = Object.prototype, Vy = Zy.toString;
  function Uy(e) {
    return Vy.call(e);
  }
  var Yy = "[object Null]", Gy = "[object Undefined]", fl = cn ? cn.toStringTag : void 0;
  Li = function(e) {
    return e == null ? e === void 0 ? Gy : Yy : fl && fl in Object(e) ? Hy(e) : Uy(e);
  };
  ei = function(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  };
  var Xy = "[object AsyncFunction]", Qy = "[object Function]", Jy = "[object GeneratorFunction]", Ky = "[object Proxy]";
  Za = function(e) {
    if (!ei(e))
      return false;
    var t = Li(e);
    return t == Qy || t == Jy || t == Xy || t == Ky;
  };
  var ko = ge["__core-js_shared__"], ml = function() {
    var e = /[^.]+$/.exec(ko && ko.keys && ko.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  }();
  function tx(e) {
    return !!ml && ml in e;
  }
  var ex = Function.prototype, ix = ex.toString;
  function ii(e) {
    if (e != null) {
      try {
        return ix.call(e);
      } catch {
      }
      try {
        return e + "";
      } catch {
      }
    }
    return "";
  }
  var rx = /[\\^$.*+?()[\]{}|]/g, nx = /^\[object .+?Constructor\]$/, ox = Function.prototype, ax = Object.prototype, sx = ox.toString, lx = ax.hasOwnProperty, hx = RegExp("^" + sx.call(lx).replace(rx, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function cx(e) {
    if (!ei(e) || tx(e))
      return false;
    var t = Za(e) ? hx : nx;
    return t.test(ii(e));
  }
  function dx(e, t) {
    return e == null ? void 0 : e[t];
  }
  function ri(e, t) {
    var i = dx(e, t);
    return cx(i) ? i : void 0;
  }
  var hr = ri(Object, "create");
  function ux() {
    this.__data__ = hr ? hr(null) : {}, this.size = 0;
  }
  function px(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var gx = "__lodash_hash_undefined__", fx = Object.prototype, mx = fx.hasOwnProperty;
  function yx(e) {
    var t = this.__data__;
    if (hr) {
      var i = t[e];
      return i === gx ? void 0 : i;
    }
    return mx.call(t, e) ? t[e] : void 0;
  }
  var xx = Object.prototype, bx = xx.hasOwnProperty;
  function kx(e) {
    var t = this.__data__;
    return hr ? t[e] !== void 0 : bx.call(t, e);
  }
  var Cx = "__lodash_hash_undefined__";
  function vx(e, t) {
    var i = this.__data__;
    return this.size += this.has(e) ? 0 : 1, i[e] = hr && t === void 0 ? Cx : t, this;
  }
  function Je(e) {
    var t = -1, i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Je.prototype.clear = ux;
  Je.prototype.delete = px;
  Je.prototype.get = yx;
  Je.prototype.has = kx;
  Je.prototype.set = vx;
  function wx() {
    this.__data__ = [], this.size = 0;
  }
  $n = function(e, t) {
    return e === t || e !== e && t !== t;
  };
  function On(e, t) {
    for (var i = e.length; i--; )
      if ($n(e[i][0], t))
        return i;
    return -1;
  }
  var _x = Array.prototype, Sx = _x.splice;
  function Tx(e) {
    var t = this.__data__, i = On(t, e);
    if (i < 0)
      return false;
    var r = t.length - 1;
    return i == r ? t.pop() : Sx.call(t, i, 1), --this.size, true;
  }
  function Bx(e) {
    var t = this.__data__, i = On(t, e);
    return i < 0 ? void 0 : t[i][1];
  }
  function Mx(e) {
    return On(this.__data__, e) > -1;
  }
  function Lx(e, t) {
    var i = this.__data__, r = On(i, e);
    return r < 0 ? (++this.size, i.push([
      e,
      t
    ])) : i[r][1] = t, this;
  }
  function Le(e) {
    var t = -1, i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Le.prototype.clear = wx;
  Le.prototype.delete = Tx;
  Le.prototype.get = Bx;
  Le.prototype.has = Mx;
  Le.prototype.set = Lx;
  var cr = ri(ge, "Map");
  function Ax() {
    this.size = 0, this.__data__ = {
      hash: new Je(),
      map: new (cr || Le)(),
      string: new Je()
    };
  }
  function Fx(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  function Dn(e, t) {
    var i = e.__data__;
    return Fx(t) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
  }
  function Ex(e) {
    var t = Dn(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  function $x(e) {
    return Dn(this, e).get(e);
  }
  function Ox(e) {
    return Dn(this, e).has(e);
  }
  function Dx(e, t) {
    var i = Dn(this, e), r = i.size;
    return i.set(e, t), this.size += i.size == r ? 0 : 1, this;
  }
  Re = function(e) {
    var t = -1, i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  };
  Re.prototype.clear = Ax;
  Re.prototype.delete = Ex;
  Re.prototype.get = $x;
  Re.prototype.has = Ox;
  Re.prototype.set = Dx;
  var Ix = "Expected a function";
  mr = function(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function")
      throw new TypeError(Ix);
    var i = function() {
      var r = arguments, n = t ? t.apply(this, r) : r[0], o = i.cache;
      if (o.has(n))
        return o.get(n);
      var s = e.apply(this, r);
      return i.cache = o.set(n, s) || o, s;
    };
    return i.cache = new (mr.Cache || Re)(), i;
  };
  mr.Cache = Re;
  function zx() {
    this.__data__ = new Le(), this.size = 0;
  }
  function Px(e) {
    var t = this.__data__, i = t.delete(e);
    return this.size = t.size, i;
  }
  function Rx(e) {
    return this.__data__.get(e);
  }
  function Nx(e) {
    return this.__data__.has(e);
  }
  var qx = 200;
  function Wx(e, t) {
    var i = this.__data__;
    if (i instanceof Le) {
      var r = i.__data__;
      if (!cr || r.length < qx - 1)
        return r.push([
          e,
          t
        ]), this.size = ++i.size, this;
      i = this.__data__ = new Re(r);
    }
    return i.set(e, t), this.size = i.size, this;
  }
  Ai = function(e) {
    var t = this.__data__ = new Le(e);
    this.size = t.size;
  };
  Ai.prototype.clear = zx;
  Ai.prototype.delete = Px;
  Ai.prototype.get = Rx;
  Ai.prototype.has = Nx;
  Ai.prototype.set = Wx;
  var dn = function() {
    try {
      var e = ri(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {
    }
  }();
  Va = function(e, t, i) {
    t == "__proto__" && dn ? dn(e, t, {
      configurable: true,
      enumerable: true,
      value: i,
      writable: true
    }) : e[t] = i;
  };
  function oa(e, t, i) {
    (i !== void 0 && !$n(e[t], i) || i === void 0 && !(t in e)) && Va(e, t, i);
  }
  function jx(e) {
    return function(t, i, r) {
      for (var n = -1, o = Object(t), s = r(t), a = s.length; a--; ) {
        var l = s[++n];
        if (i(o[l], l, o) === false)
          break;
      }
      return t;
    };
  }
  let Zd, yl, Zx, xl, bl;
  Hx = jx();
  Zd = typeof exports == "object" && exports && !exports.nodeType && exports;
  yl = Zd && typeof module == "object" && module && !module.nodeType && module;
  Zx = yl && yl.exports === Zd;
  xl = Zx ? ge.Buffer : void 0;
  bl = xl ? xl.allocUnsafe : void 0;
  Vx = function(e, t) {
    if (t)
      return e.slice();
    var i = e.length, r = bl ? bl(i) : new e.constructor(i);
    return e.copy(r), r;
  };
  kl = ge.Uint8Array;
  Ux = function(e) {
    var t = new e.constructor(e.byteLength);
    return new kl(t).set(new kl(e)), t;
  };
  Yx = function(e, t) {
    var i = t ? Ux(e.buffer) : e.buffer;
    return new e.constructor(i, e.byteOffset, e.length);
  };
  Gx = function(e, t) {
    var i = -1, r = e.length;
    for (t || (t = Array(r)); ++i < r; )
      t[i] = e[i];
    return t;
  };
  var Cl = Object.create, Xx = function() {
    function e() {
    }
    return function(t) {
      if (!ei(t))
        return {};
      if (Cl)
        return Cl(t);
      e.prototype = t;
      var i = new e();
      return e.prototype = void 0, i;
    };
  }();
  function Vd(e, t) {
    return function(i) {
      return e(t(i));
    };
  }
  let Qx;
  Ud = Vd(Object.getPrototypeOf, Object);
  Qx = Object.prototype;
  In = function(e) {
    var t = e && e.constructor, i = typeof t == "function" && t.prototype || Qx;
    return e === i;
  };
  Jx = function(e) {
    return typeof e.constructor == "function" && !In(e) ? Xx(Ud(e)) : {};
  };
  yr = function(e) {
    return e != null && typeof e == "object";
  };
  var Kx = "[object Arguments]";
  function vl(e) {
    return yr(e) && Li(e) == Kx;
  }
  let Yd, tb, eb, ib;
  Yd = Object.prototype;
  tb = Yd.hasOwnProperty;
  eb = Yd.propertyIsEnumerable;
  un = vl(function() {
    return arguments;
  }()) ? vl : function(e) {
    return yr(e) && tb.call(e, "callee") && !eb.call(e, "callee");
  };
  pn = Array.isArray;
  ib = 9007199254740991;
  Gd = function(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ib;
  };
  zn = function(e) {
    return e != null && Gd(e.length) && !Za(e);
  };
  rb = function(e) {
    return yr(e) && zn(e);
  };
  function nb() {
    return false;
  }
  let Xd, wl, ob, _l, ab, sb, lb, hb, Qd, cb, db;
  Xd = typeof exports == "object" && exports && !exports.nodeType && exports;
  wl = Xd && typeof module == "object" && module && !module.nodeType && module;
  ob = wl && wl.exports === Xd;
  _l = ob ? ge.Buffer : void 0;
  ab = _l ? _l.isBuffer : void 0;
  Ua = ab || nb;
  sb = "[object Object]";
  lb = Function.prototype;
  hb = Object.prototype;
  Qd = lb.toString;
  cb = hb.hasOwnProperty;
  db = Qd.call(Object);
  function ub(e) {
    if (!yr(e) || Li(e) != sb)
      return false;
    var t = Ud(e);
    if (t === null)
      return true;
    var i = cb.call(t, "constructor") && t.constructor;
    return typeof i == "function" && i instanceof i && Qd.call(i) == db;
  }
  var pb = "[object Arguments]", gb = "[object Array]", fb = "[object Boolean]", mb = "[object Date]", yb = "[object Error]", xb = "[object Function]", bb = "[object Map]", kb = "[object Number]", Cb = "[object Object]", vb = "[object RegExp]", wb = "[object Set]", _b = "[object String]", Sb = "[object WeakMap]", Tb = "[object ArrayBuffer]", Bb = "[object DataView]", Mb = "[object Float32Array]", Lb = "[object Float64Array]", Ab = "[object Int8Array]", Fb = "[object Int16Array]", Eb = "[object Int32Array]", $b = "[object Uint8Array]", Ob = "[object Uint8ClampedArray]", Db = "[object Uint16Array]", Ib = "[object Uint32Array]", mt = {};
  mt[Mb] = mt[Lb] = mt[Ab] = mt[Fb] = mt[Eb] = mt[$b] = mt[Ob] = mt[Db] = mt[Ib] = true;
  mt[pb] = mt[gb] = mt[Tb] = mt[fb] = mt[Bb] = mt[mb] = mt[yb] = mt[xb] = mt[bb] = mt[kb] = mt[Cb] = mt[vb] = mt[wb] = mt[_b] = mt[Sb] = false;
  function zb(e) {
    return yr(e) && Gd(e.length) && !!mt[Li(e)];
  }
  Pb = function(e) {
    return function(t) {
      return e(t);
    };
  };
  let Jd, rr, Rb, Co, Tl;
  Jd = typeof exports == "object" && exports && !exports.nodeType && exports;
  rr = Jd && typeof module == "object" && module && !module.nodeType && module;
  Rb = rr && rr.exports === Jd;
  Co = Rb && jd.process;
  Sl = function() {
    try {
      var e = rr && rr.require && rr.require("util").types;
      return e || Co && Co.binding && Co.binding("util");
    } catch {
    }
  }();
  Tl = Sl && Sl.isTypedArray;
  Ya = Tl ? Pb(Tl) : zb;
  function aa(e, t) {
    if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
      return e[t];
  }
  var Nb = Object.prototype, qb = Nb.hasOwnProperty;
  Wb = function(e, t, i) {
    var r = e[t];
    (!(qb.call(e, t) && $n(r, i)) || i === void 0 && !(t in e)) && Va(e, t, i);
  };
  jb = function(e, t, i, r) {
    var n = !i;
    i || (i = {});
    for (var o = -1, s = t.length; ++o < s; ) {
      var a = t[o], l = void 0;
      l === void 0 && (l = e[a]), n ? Va(i, a, l) : Wb(i, a, l);
    }
    return i;
  };
  function Hb(e, t) {
    for (var i = -1, r = Array(e); ++i < e; )
      r[i] = t(i);
    return r;
  }
  var Zb = 9007199254740991, Vb = /^(?:0|[1-9]\d*)$/;
  Kd = function(e, t) {
    var i = typeof e;
    return t = t ?? Zb, !!t && (i == "number" || i != "symbol" && Vb.test(e)) && e > -1 && e % 1 == 0 && e < t;
  };
  var Ub = Object.prototype, Yb = Ub.hasOwnProperty;
  Gb = function(e, t) {
    var i = pn(e), r = !i && un(e), n = !i && !r && Ua(e), o = !i && !r && !n && Ya(e), s = i || r || n || o, a = s ? Hb(e.length, String) : [], l = a.length;
    for (var c in e)
      (t || Yb.call(e, c)) && !(s && (c == "length" || n && (c == "offset" || c == "parent") || o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || Kd(c, l))) && a.push(c);
    return a;
  };
  function Xb(e) {
    var t = [];
    if (e != null)
      for (var i in Object(e))
        t.push(i);
    return t;
  }
  var Qb = Object.prototype, Jb = Qb.hasOwnProperty;
  function Kb(e) {
    if (!ei(e))
      return Xb(e);
    var t = In(e), i = [];
    for (var r in e)
      r == "constructor" && (t || !Jb.call(e, r)) || i.push(r);
    return i;
  }
  tu = function(e) {
    return zn(e) ? Gb(e, true) : Kb(e);
  };
  function t1(e) {
    return jb(e, tu(e));
  }
  function e1(e, t, i, r, n, o, s) {
    var a = aa(e, i), l = aa(t, i), c = s.get(l);
    if (c) {
      oa(e, i, c);
      return;
    }
    var h = o ? o(a, l, i + "", e, t, s) : void 0, d = h === void 0;
    if (d) {
      var u = pn(l), p = !u && Ua(l), f = !u && !p && Ya(l);
      h = l, u || p || f ? pn(a) ? h = a : rb(a) ? h = Gx(a) : p ? (d = false, h = Vx(l, true)) : f ? (d = false, h = Yx(l, true)) : h = [] : ub(l) || un(l) ? (h = a, un(a) ? h = t1(a) : (!ei(a) || Za(a)) && (h = Jx(l))) : d = false;
    }
    d && (s.set(l, h), n(h, l, r, o, s), s.delete(l)), oa(e, i, h);
  }
  function eu(e, t, i, r, n) {
    e !== t && Hx(t, function(o, s) {
      if (n || (n = new Ai()), ei(o))
        e1(e, t, s, i, eu, r, n);
      else {
        var a = r ? r(aa(e, s), o, s + "", e, t, n) : void 0;
        a === void 0 && (a = o), oa(e, s, a);
      }
    }, tu);
  }
  iu = function(e) {
    return e;
  };
  function i1(e, t, i) {
    switch (i.length) {
      case 0:
        return e.call(t);
      case 1:
        return e.call(t, i[0]);
      case 2:
        return e.call(t, i[0], i[1]);
      case 3:
        return e.call(t, i[0], i[1], i[2]);
    }
    return e.apply(t, i);
  }
  var Bl = Math.max;
  r1 = function(e, t, i) {
    return t = Bl(t === void 0 ? e.length - 1 : t, 0), function() {
      for (var r = arguments, n = -1, o = Bl(r.length - t, 0), s = Array(o); ++n < o; )
        s[n] = r[t + n];
      n = -1;
      for (var a = Array(t + 1); ++n < t; )
        a[n] = r[n];
      return a[t] = i(s), i1(e, this, a);
    };
  };
  n1 = function(e) {
    return function() {
      return e;
    };
  };
  var o1 = dn ? function(e, t) {
    return dn(e, "toString", {
      configurable: true,
      enumerable: false,
      value: n1(t),
      writable: true
    });
  } : iu, a1 = 800, s1 = 16, l1 = Date.now;
  function h1(e) {
    var t = 0, i = 0;
    return function() {
      var r = l1(), n = s1 - (r - i);
      if (i = r, n > 0) {
        if (++t >= a1)
          return arguments[0];
      } else
        t = 0;
      return e.apply(void 0, arguments);
    };
  }
  c1 = h1(o1);
  d1 = function(e, t) {
    return c1(r1(e, t, iu), e + "");
  };
  u1 = function(e, t, i) {
    if (!ei(i))
      return false;
    var r = typeof t;
    return (r == "number" ? zn(i) && Kd(t, i.length) : r == "string" && t in i) ? $n(i[t], e) : false;
  };
  p1 = function(e) {
    return d1(function(t, i) {
      var r = -1, n = i.length, o = n > 1 ? i[n - 1] : void 0, s = n > 2 ? i[2] : void 0;
      for (o = e.length > 3 && typeof o == "function" ? (n--, o) : void 0, s && u1(i[0], i[1], s) && (o = n < 3 ? void 0 : o, n = 1), t = Object(t); ++r < n; ) {
        var a = i[r];
        a && e(t, a, r, o);
      }
      return t;
    });
  };
  let m1, y1, x1, ru, b1, k1;
  g1 = p1(function(e, t, i) {
    eu(e, t, i);
  });
  f1 = "\u200B";
  m1 = {
    curveBasis: qr,
    curveBasisClosed: $y,
    curveBasisOpen: Oy,
    curveBumpX: fh,
    curveBumpY: gh,
    curveBundle: Dy,
    curveCardinalClosed: Iy,
    curveCardinalOpen: zy,
    curveCardinal: Md,
    curveCatmullRomClosed: Py,
    curveCatmullRomOpen: Ry,
    curveCatmullRom: Ad,
    curveLinear: an,
    curveLinearClosed: Ny,
    curveMonotoneX: Id,
    curveMonotoneY: zd,
    curveNatural: Rd,
    curveStep: Nd,
    curveStepAfter: Wd,
    curveStepBefore: qd
  };
  y1 = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
  x1 = g(function(e, t) {
    const i = ru(e, /(?:init\b)|(?:initialize\b)/);
    let r = {};
    if (Array.isArray(i)) {
      const s = i.map((a) => a.args);
      Yr(s), r = Ft(r, [
        ...s
      ]);
    } else
      r = i.args;
    if (!r)
      return;
    let n = Sa(e, t);
    const o = "config";
    return r[o] !== void 0 && (n === "flowchart-v2" && (n = "flowchart"), r[n] = r[o], delete r[o]), r;
  }, "detectInit");
  ru = g(function(e, t = null) {
    var i, r;
    try {
      const n = new RegExp(`[%]{2}(?![{]${y1.source})(?=[}][%]{2}).*
`, "ig");
      e = e.trim().replace(n, "").replace(/'/gm, '"'), $.debug(`Detecting diagram directive${t !== null ? " type:" + t : ""} based on the text:${e}`);
      let o;
      const s = [];
      for (; (o = er.exec(e)) !== null; )
        if (o.index === er.lastIndex && er.lastIndex++, o && !t || t && (i = o[1]) != null && i.match(t) || t && (r = o[2]) != null && r.match(t)) {
          const a = o[1] ? o[1] : o[2], l = o[3] ? o[3].trim() : o[4] ? JSON.parse(o[4].trim()) : null;
          s.push({
            type: a,
            args: l
          });
        }
      return s.length === 0 ? {
        type: e,
        args: null
      } : s.length === 1 ? s[0] : s;
    } catch (n) {
      return $.error(`ERROR: ${n.message} - Unable to parse directive type: '${t}' based on the text: '${e}'`), {
        type: void 0,
        args: null
      };
    }
  }, "detectDirective");
  b1 = g(function(e) {
    return e.replace(er, "");
  }, "removeDirectives");
  k1 = g(function(e, t) {
    for (const [i, r] of t.entries())
      if (r.match(e))
        return i;
    return -1;
  }, "isSubstringInArray");
  function Ga(e, t) {
    if (!e)
      return t;
    const i = `curve${e.charAt(0).toUpperCase() + e.slice(1)}`;
    return m1[i] ?? t;
  }
  g(Ga, "interpolateToCurve");
  function nu(e, t) {
    const i = e.trim();
    if (i)
      return t.securityLevel !== "loose" ? Fy.sanitizeUrl(i) : i;
  }
  g(nu, "formatUrl");
  var C1 = g((e, ...t) => {
    const i = e.split("."), r = i.length - 1, n = i[r];
    let o = window;
    for (let s = 0; s < r; s++)
      if (o = o[i[s]], !o) {
        $.error(`Function name: ${e} not found in window`);
        return;
      }
    o[n](...t);
  }, "runFunc");
  function Xa(e, t) {
    return !e || !t ? 0 : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
  }
  g(Xa, "distance");
  function ou(e) {
    let t, i = 0;
    e.forEach((n) => {
      i += Xa(n, t), t = n;
    });
    const r = i / 2;
    return Qa(e, r);
  }
  g(ou, "traverseEdge");
  function au(e) {
    return e.length === 1 ? e[0] : ou(e);
  }
  g(au, "calcLabelPosition");
  var Ml = g((e, t = 2) => {
    const i = Math.pow(10, t);
    return Math.round(e * i) / i;
  }, "roundNumber"), Qa = g((e, t) => {
    let i, r = t;
    for (const n of e) {
      if (i) {
        const o = Xa(n, i);
        if (o === 0)
          return i;
        if (o < r)
          r -= o;
        else {
          const s = r / o;
          if (s <= 0)
            return i;
          if (s >= 1)
            return {
              x: n.x,
              y: n.y
            };
          if (s > 0 && s < 1)
            return {
              x: Ml((1 - s) * i.x + s * n.x, 5),
              y: Ml((1 - s) * i.y + s * n.y, 5)
            };
        }
      }
      i = n;
    }
    throw new Error("Could not find a suitable point for the given distance");
  }, "calculatePoint"), v1 = g((e, t, i) => {
    $.info(`our points ${JSON.stringify(t)}`), t[0] !== i && (t = t.reverse());
    const r = Qa(t, 25), n = e ? 10 : 5, o = Math.atan2(t[0].y - r.y, t[0].x - r.x), s = {
      x: 0,
      y: 0
    };
    return s.x = Math.sin(o) * n + (t[0].x + r.x) / 2, s.y = -Math.cos(o) * n + (t[0].y + r.y) / 2, s;
  }, "calcCardinalityPosition");
  function su(e, t, i) {
    const r = structuredClone(i);
    $.info("our points", r), t !== "start_left" && t !== "start_right" && r.reverse();
    const n = 25 + e, o = Qa(r, n), s = 10 + e * 0.5, a = Math.atan2(r[0].y - o.y, r[0].x - o.x), l = {
      x: 0,
      y: 0
    };
    return t === "start_left" ? (l.x = Math.sin(a + Math.PI) * s + (r[0].x + o.x) / 2, l.y = -Math.cos(a + Math.PI) * s + (r[0].y + o.y) / 2) : t === "end_right" ? (l.x = Math.sin(a - Math.PI) * s + (r[0].x + o.x) / 2 - 5, l.y = -Math.cos(a - Math.PI) * s + (r[0].y + o.y) / 2 - 5) : t === "end_left" ? (l.x = Math.sin(a) * s + (r[0].x + o.x) / 2 - 5, l.y = -Math.cos(a) * s + (r[0].y + o.y) / 2 - 5) : (l.x = Math.sin(a) * s + (r[0].x + o.x) / 2, l.y = -Math.cos(a) * s + (r[0].y + o.y) / 2), l;
  }
  g(su, "calcTerminalLabelPosition");
  lu = function(e) {
    let t = "", i = "";
    for (const r of e)
      r !== void 0 && (r.startsWith("color:") || r.startsWith("text-align:") ? i = i + r + ";" : t = t + r + ";");
    return {
      style: t,
      labelStyle: i
    };
  };
  g(lu, "getStylesFromArray");
  let Ll;
  Ll = 0;
  w1 = g(() => (Ll++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + Ll), "generateId");
  function hu(e) {
    let t = "";
    const i = "0123456789abcdef", r = i.length;
    for (let n = 0; n < e; n++)
      t += i.charAt(Math.floor(Math.random() * r));
    return t;
  }
  g(hu, "makeRandomHex");
  let S1, T1, M1;
  _1 = g((e) => hu(e.length), "random");
  S1 = g(function() {
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
  T1 = g(function(e, t) {
    const i = t.text.replace(Mi.lineBreakRegex, " "), [, r] = Pn(t.fontSize), n = e.append("text");
    n.attr("x", t.x), n.attr("y", t.y), n.style("text-anchor", t.anchor), n.style("font-family", t.fontFamily), n.style("font-size", r), n.style("font-weight", t.fontWeight), n.attr("fill", t.fill), t.class !== void 0 && n.attr("class", t.class);
    const o = n.append("tspan");
    return o.attr("x", t.x + t.textMargin * 2), o.attr("fill", t.fill), o.text(i), n;
  }, "drawSimpleText");
  B1 = mr((e, t, i) => {
    if (!e || (i = Object.assign({
      fontSize: 12,
      fontWeight: 400,
      fontFamily: "Arial",
      joinWith: "<br/>"
    }, i), Mi.lineBreakRegex.test(e)))
      return e;
    const r = e.split(" ").filter(Boolean), n = [];
    let o = "";
    return r.forEach((s, a) => {
      const l = Me(`${s} `, i), c = Me(o, i);
      if (l > t) {
        const { hyphenatedStrings: h, remainingWord: d } = M1(s, t, "-", i);
        n.push(o, ...h), o = d;
      } else
        c + l >= t ? (n.push(o), o = s) : o = [
          o,
          s
        ].filter(Boolean).join(" ");
      a + 1 === r.length && n.push(o);
    }), n.filter((s) => s !== "").join(i.joinWith);
  }, (e, t, i) => `${e}${t}${i.fontSize}${i.fontWeight}${i.fontFamily}${i.joinWith}`);
  M1 = mr((e, t, i = "-", r) => {
    r = Object.assign({
      fontSize: 12,
      fontWeight: 400,
      fontFamily: "Arial",
      margin: 0
    }, r);
    const n = [
      ...e
    ], o = [];
    let s = "";
    return n.forEach((a, l) => {
      const c = `${s}${a}`;
      if (Me(c, r) >= t) {
        const h = l + 1, d = n.length === h, u = `${c}${i}`;
        o.push(d ? c : u), s = "";
      } else
        s = c;
    }), {
      hyphenatedStrings: o,
      remainingWord: s
    };
  }, (e, t, i = "-", r) => `${e}${t}${i}${r.fontSize}${r.fontWeight}${r.fontFamily}`);
  cu = function(e, t) {
    return Ja(e, t).height;
  };
  g(cu, "calculateTextHeight");
  Me = function(e, t) {
    return Ja(e, t).width;
  };
  g(Me, "calculateTextWidth");
  var Ja = mr((e, t) => {
    const { fontSize: i = 12, fontFamily: r = "Arial", fontWeight: n = 400 } = t;
    if (!e)
      return {
        width: 0,
        height: 0
      };
    const [, o] = Pn(i), s = [
      "sans-serif",
      r
    ], a = e.split(Mi.lineBreakRegex), l = [], c = st("body");
    if (!c.remove)
      return {
        width: 0,
        height: 0,
        lineHeight: 0
      };
    const h = c.append("svg");
    for (const u of s) {
      let p = 0;
      const f = {
        width: 0,
        height: 0,
        lineHeight: 0
      };
      for (const m of a) {
        const y = S1();
        y.text = m || f1;
        const x = T1(h, y).style("font-size", o).style("font-weight", n).style("font-family", u), b = (x._groups || x)[0][0].getBBox();
        if (b.width === 0 && b.height === 0)
          throw new Error("svg element not in render tree");
        f.width = Math.round(Math.max(f.width, b.width)), p = Math.round(b.height), f.height += p, f.lineHeight = Math.round(Math.max(f.lineHeight, p));
      }
      l.push(f);
    }
    h.remove();
    const d = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[d];
  }, (e, t) => `${e}${t.fontSize}${t.fontWeight}${t.fontFamily}`), vo, L1 = (vo = class {
    constructor(e = false, t) {
      this.count = 0, this.count = t ? t.length : 0, this.next = e ? () => this.count++ : () => Date.now();
    }
  }, g(vo, "InitIDGenerator"), vo), Lr, A1 = g(function(e) {
    return Lr = Lr || document.createElement("div"), e = escape(e).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), Lr.innerHTML = e, unescape(Lr.textContent);
  }, "entityDecode");
  function Ka(e) {
    return "str" in e;
  }
  g(Ka, "isDetailedError");
  let F1;
  F1 = g((e, t, i, r) => {
    var n;
    if (!r)
      return;
    const o = (n = e.node()) == null ? void 0 : n.getBBox();
    o && e.append("text").text(r).attr("text-anchor", "middle").attr("x", o.x + o.width / 2).attr("y", -i).attr("class", t);
  }, "insertTitle");
  Pn = g((e) => {
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
  ts = function(e, t) {
    return g1({}, e, t);
  };
  g(ts, "cleanAndMerge");
  let E1;
  de = {
    assignWithDepth: Ft,
    wrapLabel: B1,
    calculateTextHeight: cu,
    calculateTextWidth: Me,
    calculateTextDimensions: Ja,
    cleanAndMerge: ts,
    detectInit: x1,
    detectDirective: ru,
    isSubstringInArray: k1,
    interpolateToCurve: Ga,
    calcLabelPosition: au,
    calcCardinalityPosition: v1,
    calcTerminalLabelPosition: su,
    formatUrl: nu,
    getStylesFromArray: lu,
    generateId: w1,
    random: _1,
    runFunc: C1,
    entityDecode: A1,
    insertTitle: F1,
    parseFontSize: Pn,
    InitIDGenerator: L1
  };
  E1 = g(function(e) {
    let t = e;
    return t = t.replace(/style.*:\S*#.*;/g, function(i) {
      return i.substring(0, i.length - 1);
    }), t = t.replace(/classDef.*:\S*#.*;/g, function(i) {
      return i.substring(0, i.length - 1);
    }), t = t.replace(/#\w+;/g, function(i) {
      const r = i.substring(1, i.length - 1);
      return /^\+?\d+$/.test(r) ? "\uFB02\xB0\xB0" + r + "\xB6\xDF" : "\uFB02\xB0" + r + "\xB6\xDF";
    }), t;
  }, "encodeEntities");
  ni = g(function(e) {
    return e.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
  }, "decodeEntities");
  b_ = g((e, t, { counter: i = 0, prefix: r, suffix: n }, o) => o || `${r ? `${r}_` : ""}${e}_${t}_${i}${n ? `_${n}` : ""}`, "getEdgeId");
  function qt(e) {
    return e ?? null;
  }
  g(qt, "handleUndefinedAttr");
  function es() {
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
  var oi = es();
  function du(e) {
    oi = e;
  }
  var nr = {
    exec: () => null
  };
  function ut(e, t = "") {
    let i = typeof e == "string" ? e : e.source;
    const r = {
      replace: (n, o) => {
        let s = typeof o == "string" ? o : o.source;
        return s = s.replace(Nt.caret, "$1"), i = i.replace(n, s), r;
      },
      getRegex: () => new RegExp(i, t)
    };
    return r;
  }
  var Nt = {
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
  }, $1 = /^(?:[ \t]*(?:\n|$))+/, O1 = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, D1 = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, xr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, I1 = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, is = /(?:[*+-]|\d{1,9}[.)])/, uu = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, pu = ut(uu).replace(/bull/g, is).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), z1 = ut(uu).replace(/bull/g, is).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), rs = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, P1 = /^[^\n]+/, ns = /(?!\s*\])(?:\\.|[^\[\]\\])+/, R1 = ut(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", ns).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), N1 = ut(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, is).getRegex(), Rn = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", os = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, q1 = ut("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", os).replace("tag", Rn).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), gu = ut(rs).replace("hr", xr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Rn).getRegex(), W1 = ut(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", gu).getRegex(), as = {
    blockquote: W1,
    code: O1,
    def: R1,
    fences: D1,
    heading: I1,
    hr: xr,
    html: q1,
    lheading: pu,
    list: N1,
    newline: $1,
    paragraph: gu,
    table: nr,
    text: P1
  }, Al = ut("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", xr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Rn).getRegex(), j1 = {
    ...as,
    lheading: z1,
    table: Al,
    paragraph: ut(rs).replace("hr", xr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Al).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Rn).getRegex()
  }, H1 = {
    ...as,
    html: ut(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", os).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: nr,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: ut(rs).replace("hr", xr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", pu).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
  }, Z1 = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, V1 = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, fu = /^( {2,}|\\)\n(?!\s*$)/, U1 = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Nn = /[\p{P}\p{S}]/u, ss = /[\s\p{P}\p{S}]/u, mu = /[^\s\p{P}\p{S}]/u, Y1 = ut(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, ss).getRegex(), yu = /(?!~)[\p{P}\p{S}]/u, G1 = /(?!~)[\s\p{P}\p{S}]/u, X1 = /(?:[^\s\p{P}\p{S}]|~)/u, Q1 = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, xu = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, J1 = ut(xu, "u").replace(/punct/g, Nn).getRegex(), K1 = ut(xu, "u").replace(/punct/g, yu).getRegex(), bu = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", t2 = ut(bu, "gu").replace(/notPunctSpace/g, mu).replace(/punctSpace/g, ss).replace(/punct/g, Nn).getRegex(), e2 = ut(bu, "gu").replace(/notPunctSpace/g, X1).replace(/punctSpace/g, G1).replace(/punct/g, yu).getRegex(), i2 = ut("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, mu).replace(/punctSpace/g, ss).replace(/punct/g, Nn).getRegex(), r2 = ut(/\\(punct)/, "gu").replace(/punct/g, Nn).getRegex(), n2 = ut(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), o2 = ut(os).replace("(?:-->|$)", "-->").getRegex(), a2 = ut("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", o2).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), gn = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, s2 = ut(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", gn).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ku = ut(/^!?\[(label)\]\[(ref)\]/).replace("label", gn).replace("ref", ns).getRegex(), Cu = ut(/^!?\[(ref)\](?:\[\])?/).replace("ref", ns).getRegex(), l2 = ut("reflink|nolink(?!\\()", "g").replace("reflink", ku).replace("nolink", Cu).getRegex(), ls = {
    _backpedal: nr,
    anyPunctuation: r2,
    autolink: n2,
    blockSkip: Q1,
    br: fu,
    code: V1,
    del: nr,
    emStrongLDelim: J1,
    emStrongRDelimAst: t2,
    emStrongRDelimUnd: i2,
    escape: Z1,
    link: s2,
    nolink: Cu,
    punctuation: Y1,
    reflink: ku,
    reflinkSearch: l2,
    tag: a2,
    text: U1,
    url: nr
  }, h2 = {
    ...ls,
    link: ut(/^!?\[(label)\]\((.*?)\)/).replace("label", gn).getRegex(),
    reflink: ut(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", gn).getRegex()
  }, sa = {
    ...ls,
    emStrongRDelimAst: e2,
    emStrongLDelim: K1,
    url: ut(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
  }, c2 = {
    ...sa,
    br: ut(fu).replace("{2,}", "*").getRegex(),
    text: ut(sa.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
  }, Ar = {
    normal: as,
    gfm: j1,
    pedantic: H1
  }, ji = {
    normal: ls,
    gfm: sa,
    breaks: c2,
    pedantic: h2
  }, d2 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }, Fl = (e) => d2[e];
  function le(e, t) {
    if (t) {
      if (Nt.escapeTest.test(e))
        return e.replace(Nt.escapeReplace, Fl);
    } else if (Nt.escapeTestNoEncode.test(e))
      return e.replace(Nt.escapeReplaceNoEncode, Fl);
    return e;
  }
  function El(e) {
    try {
      e = encodeURI(e).replace(Nt.percentDecode, "%");
    } catch {
      return null;
    }
    return e;
  }
  function $l(e, t) {
    var i;
    const r = e.replace(Nt.findPipe, (s, a, l) => {
      let c = false, h = a;
      for (; --h >= 0 && l[h] === "\\"; )
        c = !c;
      return c ? "|" : " |";
    }), n = r.split(Nt.splitPipe);
    let o = 0;
    if (n[0].trim() || n.shift(), n.length > 0 && !((i = n.at(-1)) != null && i.trim()) && n.pop(), t)
      if (n.length > t)
        n.splice(t);
      else
        for (; n.length < t; )
          n.push("");
    for (; o < n.length; o++)
      n[o] = n[o].trim().replace(Nt.slashPipe, "|");
    return n;
  }
  function Hi(e, t, i) {
    const r = e.length;
    if (r === 0)
      return "";
    let n = 0;
    for (; n < r && e.charAt(r - n - 1) === t; )
      n++;
    return e.slice(0, r - n);
  }
  function u2(e, t) {
    if (e.indexOf(t[1]) === -1)
      return -1;
    let i = 0;
    for (let r = 0; r < e.length; r++)
      if (e[r] === "\\")
        r++;
      else if (e[r] === t[0])
        i++;
      else if (e[r] === t[1] && (i--, i < 0))
        return r;
    return i > 0 ? -2 : -1;
  }
  function Ol(e, t, i, r, n) {
    const o = t.href, s = t.title || null, a = e[1].replace(n.other.outputLinkReplace, "$1");
    r.state.inLink = true;
    const l = {
      type: e[0].charAt(0) === "!" ? "image" : "link",
      raw: i,
      href: o,
      title: s,
      text: a,
      tokens: r.inlineTokens(a)
    };
    return r.state.inLink = false, l;
  }
  function p2(e, t, i) {
    const r = e.match(i.other.indentCodeCompensation);
    if (r === null)
      return t;
    const n = r[1];
    return t.split(`
`).map((o) => {
      const s = o.match(i.other.beginningSpace);
      if (s === null)
        return o;
      const [a] = s;
      return a.length >= n.length ? o.slice(n.length) : o;
    }).join(`
`);
  }
  var fn = class {
    constructor(e) {
      ft(this, "options"), ft(this, "rules"), ft(this, "lexer"), this.options = e || oi;
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
        const i = t[0].replace(this.rules.other.codeRemoveIndent, "");
        return {
          type: "code",
          raw: t[0],
          codeBlockStyle: "indented",
          text: this.options.pedantic ? i : Hi(i, `
`)
        };
      }
    }
    fences(e) {
      const t = this.rules.block.fences.exec(e);
      if (t) {
        const i = t[0], r = p2(i, t[3] || "", this.rules);
        return {
          type: "code",
          raw: i,
          lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
          text: r
        };
      }
    }
    heading(e) {
      const t = this.rules.block.heading.exec(e);
      if (t) {
        let i = t[2].trim();
        if (this.rules.other.endingHash.test(i)) {
          const r = Hi(i, "#");
          (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (i = r.trim());
        }
        return {
          type: "heading",
          raw: t[0],
          depth: t[1].length,
          text: i,
          tokens: this.lexer.inline(i)
        };
      }
    }
    hr(e) {
      const t = this.rules.block.hr.exec(e);
      if (t)
        return {
          type: "hr",
          raw: Hi(t[0], `
`)
        };
    }
    blockquote(e) {
      const t = this.rules.block.blockquote.exec(e);
      if (t) {
        let i = Hi(t[0], `
`).split(`
`), r = "", n = "";
        const o = [];
        for (; i.length > 0; ) {
          let s = false;
          const a = [];
          let l;
          for (l = 0; l < i.length; l++)
            if (this.rules.other.blockquoteStart.test(i[l]))
              a.push(i[l]), s = true;
            else if (!s)
              a.push(i[l]);
            else
              break;
          i = i.slice(l);
          const c = a.join(`
`), h = c.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
          r = r ? `${r}
${c}` : c, n = n ? `${n}
${h}` : h;
          const d = this.lexer.state.top;
          if (this.lexer.state.top = true, this.lexer.blockTokens(h, o, true), this.lexer.state.top = d, i.length === 0)
            break;
          const u = o.at(-1);
          if ((u == null ? void 0 : u.type) === "code")
            break;
          if ((u == null ? void 0 : u.type) === "blockquote") {
            const p = u, f = p.raw + `
` + i.join(`
`), m = this.blockquote(f);
            o[o.length - 1] = m, r = r.substring(0, r.length - p.raw.length) + m.raw, n = n.substring(0, n.length - p.text.length) + m.text;
            break;
          } else if ((u == null ? void 0 : u.type) === "list") {
            const p = u, f = p.raw + `
` + i.join(`
`), m = this.list(f);
            o[o.length - 1] = m, r = r.substring(0, r.length - u.raw.length) + m.raw, n = n.substring(0, n.length - p.raw.length) + m.raw, i = f.substring(o.at(-1).raw.length).split(`
`);
            continue;
          }
        }
        return {
          type: "blockquote",
          raw: r,
          tokens: o,
          text: n
        };
      }
    }
    list(e) {
      let t = this.rules.block.list.exec(e);
      if (t) {
        let i = t[1].trim();
        const r = i.length > 1, n = {
          type: "list",
          raw: "",
          ordered: r,
          start: r ? +i.slice(0, -1) : "",
          loose: false,
          items: []
        };
        i = r ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = r ? i : "[*+-]");
        const o = this.rules.other.listItemRegex(i);
        let s = false;
        for (; e; ) {
          let l = false, c = "", h = "";
          if (!(t = o.exec(e)) || this.rules.block.hr.test(e))
            break;
          c = t[0], e = e.substring(c.length);
          let d = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (x) => " ".repeat(3 * x.length)), u = e.split(`
`, 1)[0], p = !d.trim(), f = 0;
          if (this.options.pedantic ? (f = 2, h = d.trimStart()) : p ? f = t[1].length + 1 : (f = t[2].search(this.rules.other.nonSpaceChar), f = f > 4 ? 1 : f, h = d.slice(f), f += t[1].length), p && this.rules.other.blankLine.test(u) && (c += u + `
`, e = e.substring(u.length + 1), l = true), !l) {
            const x = this.rules.other.nextBulletRegex(f), b = this.rules.other.hrRegex(f), C = this.rules.other.fencesBeginRegex(f), w = this.rules.other.headingBeginRegex(f), k = this.rules.other.htmlBeginRegex(f);
            for (; e; ) {
              const _ = e.split(`
`, 1)[0];
              let B;
              if (u = _, this.options.pedantic ? (u = u.replace(this.rules.other.listReplaceNesting, "  "), B = u) : B = u.replace(this.rules.other.tabCharGlobal, "    "), C.test(u) || w.test(u) || k.test(u) || x.test(u) || b.test(u))
                break;
              if (B.search(this.rules.other.nonSpaceChar) >= f || !u.trim())
                h += `
` + B.slice(f);
              else {
                if (p || d.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || C.test(d) || w.test(d) || b.test(d))
                  break;
                h += `
` + u;
              }
              !p && !u.trim() && (p = true), c += _ + `
`, e = e.substring(_.length + 1), d = B.slice(f);
            }
          }
          n.loose || (s ? n.loose = true : this.rules.other.doubleBlankLine.test(c) && (s = true));
          let m = null, y;
          this.options.gfm && (m = this.rules.other.listIsTask.exec(h), m && (y = m[0] !== "[ ] ", h = h.replace(this.rules.other.listReplaceTask, ""))), n.items.push({
            type: "list_item",
            raw: c,
            task: !!m,
            checked: y,
            loose: false,
            text: h,
            tokens: []
          }), n.raw += c;
        }
        const a = n.items.at(-1);
        if (a)
          a.raw = a.raw.trimEnd(), a.text = a.text.trimEnd();
        else
          return;
        n.raw = n.raw.trimEnd();
        for (let l = 0; l < n.items.length; l++)
          if (this.lexer.state.top = false, n.items[l].tokens = this.lexer.blockTokens(n.items[l].text, []), !n.loose) {
            const c = n.items[l].tokens.filter((d) => d.type === "space"), h = c.length > 0 && c.some((d) => this.rules.other.anyLine.test(d.raw));
            n.loose = h;
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
        const i = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", n = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
        return {
          type: "def",
          tag: i,
          raw: t[0],
          href: r,
          title: n
        };
      }
    }
    table(e) {
      var t;
      const i = this.rules.block.table.exec(e);
      if (!i || !this.rules.other.tableDelimiter.test(i[2]))
        return;
      const r = $l(i[1]), n = i[2].replace(this.rules.other.tableAlignChars, "").split("|"), o = (t = i[3]) != null && t.trim() ? i[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = {
        type: "table",
        raw: i[0],
        header: [],
        align: [],
        rows: []
      };
      if (r.length === n.length) {
        for (const a of n)
          this.rules.other.tableAlignRight.test(a) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? s.align.push("left") : s.align.push(null);
        for (let a = 0; a < r.length; a++)
          s.header.push({
            text: r[a],
            tokens: this.lexer.inline(r[a]),
            header: true,
            align: s.align[a]
          });
        for (const a of o)
          s.rows.push($l(a, s.header.length).map((l, c) => ({
            text: l,
            tokens: this.lexer.inline(l),
            header: false,
            align: s.align[c]
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
        const i = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
        return {
          type: "paragraph",
          raw: t[0],
          text: i,
          tokens: this.lexer.inline(i)
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
        const i = t[2].trim();
        if (!this.options.pedantic && this.rules.other.startAngleBracket.test(i)) {
          if (!this.rules.other.endAngleBracket.test(i))
            return;
          const o = Hi(i.slice(0, -1), "\\");
          if ((i.length - o.length) % 2 === 0)
            return;
        } else {
          const o = u2(t[2], "()");
          if (o === -2)
            return;
          if (o > -1) {
            const s = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + o;
            t[2] = t[2].substring(0, o), t[0] = t[0].substring(0, s).trim(), t[3] = "";
          }
        }
        let r = t[2], n = "";
        if (this.options.pedantic) {
          const o = this.rules.other.pedanticHrefTitle.exec(r);
          o && (r = o[1], n = o[3]);
        } else
          n = t[3] ? t[3].slice(1, -1) : "";
        return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(i) ? r = r.slice(1) : r = r.slice(1, -1)), Ol(t, {
          href: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
          title: n && n.replace(this.rules.inline.anyPunctuation, "$1")
        }, t[0], this.lexer, this.rules);
      }
    }
    reflink(e, t) {
      let i;
      if ((i = this.rules.inline.reflink.exec(e)) || (i = this.rules.inline.nolink.exec(e))) {
        const r = (i[2] || i[1]).replace(this.rules.other.multipleSpaceGlobal, " "), n = t[r.toLowerCase()];
        if (!n) {
          const o = i[0].charAt(0);
          return {
            type: "text",
            raw: o,
            text: o
          };
        }
        return Ol(i, n, i[0], this.lexer, this.rules);
      }
    }
    emStrong(e, t, i = "") {
      let r = this.rules.inline.emStrongLDelim.exec(e);
      if (!(!r || r[3] && i.match(this.rules.other.unicodeAlphaNumeric)) && (!(r[1] || r[2]) || !i || this.rules.inline.punctuation.exec(i))) {
        const n = [
          ...r[0]
        ].length - 1;
        let o, s, a = n, l = 0;
        const c = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
        for (c.lastIndex = 0, t = t.slice(-1 * e.length + n); (r = c.exec(t)) != null; ) {
          if (o = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !o)
            continue;
          if (s = [
            ...o
          ].length, r[3] || r[4]) {
            a += s;
            continue;
          } else if ((r[5] || r[6]) && n % 3 && !((n + s) % 3)) {
            l += s;
            continue;
          }
          if (a -= s, a > 0)
            continue;
          s = Math.min(s, s + a + l);
          const h = [
            ...r[0]
          ][0].length, d = e.slice(0, n + r.index + h + s);
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
        let i = t[2].replace(this.rules.other.newLineCharGlobal, " ");
        const r = this.rules.other.nonSpaceChar.test(i), n = this.rules.other.startingSpaceChar.test(i) && this.rules.other.endingSpaceChar.test(i);
        return r && n && (i = i.substring(1, i.length - 1)), {
          type: "codespan",
          raw: t[0],
          text: i
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
        let i, r;
        return t[2] === "@" ? (i = t[1], r = "mailto:" + i) : (i = t[1], r = i), {
          type: "link",
          raw: t[0],
          text: i,
          href: r,
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
    url(e) {
      var t;
      let i;
      if (i = this.rules.inline.url.exec(e)) {
        let r, n;
        if (i[2] === "@")
          r = i[0], n = "mailto:" + r;
        else {
          let o;
          do
            o = i[0], i[0] = ((t = this.rules.inline._backpedal.exec(i[0])) == null ? void 0 : t[0]) ?? "";
          while (o !== i[0]);
          r = i[0], i[1] === "www." ? n = "http://" + i[0] : n = i[0];
        }
        return {
          type: "link",
          raw: i[0],
          text: r,
          href: n,
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
    inlineText(e) {
      const t = this.rules.inline.text.exec(e);
      if (t) {
        const i = this.lexer.state.inRawBlock;
        return {
          type: "text",
          raw: t[0],
          text: t[0],
          escaped: i
        };
      }
    }
  }, _e = class la {
    constructor(t) {
      ft(this, "tokens"), ft(this, "options"), ft(this, "state"), ft(this, "tokenizer"), ft(this, "inlineQueue"), this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || oi, this.options.tokenizer = this.options.tokenizer || new fn(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
        inLink: false,
        inRawBlock: false,
        top: true
      };
      const i = {
        other: Nt,
        block: Ar.normal,
        inline: ji.normal
      };
      this.options.pedantic ? (i.block = Ar.pedantic, i.inline = ji.pedantic) : this.options.gfm && (i.block = Ar.gfm, this.options.breaks ? i.inline = ji.breaks : i.inline = ji.gfm), this.tokenizer.rules = i;
    }
    static get rules() {
      return {
        block: Ar,
        inline: ji
      };
    }
    static lex(t, i) {
      return new la(i).lex(t);
    }
    static lexInline(t, i) {
      return new la(i).inlineTokens(t);
    }
    lex(t) {
      t = t.replace(Nt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
      for (let i = 0; i < this.inlineQueue.length; i++) {
        const r = this.inlineQueue[i];
        this.inlineTokens(r.src, r.tokens);
      }
      return this.inlineQueue = [], this.tokens;
    }
    blockTokens(t, i = [], r = false) {
      var n, o, s;
      for (this.options.pedantic && (t = t.replace(Nt.tabCharGlobal, "    ").replace(Nt.spaceLine, "")); t; ) {
        let a;
        if ((o = (n = this.options.extensions) == null ? void 0 : n.block) != null && o.some((c) => (a = c.call({
          lexer: this
        }, t, i)) ? (t = t.substring(a.raw.length), i.push(a), true) : false))
          continue;
        if (a = this.tokenizer.space(t)) {
          t = t.substring(a.raw.length);
          const c = i.at(-1);
          a.raw.length === 1 && c !== void 0 ? c.raw += `
` : i.push(a);
          continue;
        }
        if (a = this.tokenizer.code(t)) {
          t = t.substring(a.raw.length);
          const c = i.at(-1);
          (c == null ? void 0 : c.type) === "paragraph" || (c == null ? void 0 : c.type) === "text" ? (c.raw += `
` + a.raw, c.text += `
` + a.text, this.inlineQueue.at(-1).src = c.text) : i.push(a);
          continue;
        }
        if (a = this.tokenizer.fences(t)) {
          t = t.substring(a.raw.length), i.push(a);
          continue;
        }
        if (a = this.tokenizer.heading(t)) {
          t = t.substring(a.raw.length), i.push(a);
          continue;
        }
        if (a = this.tokenizer.hr(t)) {
          t = t.substring(a.raw.length), i.push(a);
          continue;
        }
        if (a = this.tokenizer.blockquote(t)) {
          t = t.substring(a.raw.length), i.push(a);
          continue;
        }
        if (a = this.tokenizer.list(t)) {
          t = t.substring(a.raw.length), i.push(a);
          continue;
        }
        if (a = this.tokenizer.html(t)) {
          t = t.substring(a.raw.length), i.push(a);
          continue;
        }
        if (a = this.tokenizer.def(t)) {
          t = t.substring(a.raw.length);
          const c = i.at(-1);
          (c == null ? void 0 : c.type) === "paragraph" || (c == null ? void 0 : c.type) === "text" ? (c.raw += `
` + a.raw, c.text += `
` + a.raw, this.inlineQueue.at(-1).src = c.text) : this.tokens.links[a.tag] || (this.tokens.links[a.tag] = {
            href: a.href,
            title: a.title
          });
          continue;
        }
        if (a = this.tokenizer.table(t)) {
          t = t.substring(a.raw.length), i.push(a);
          continue;
        }
        if (a = this.tokenizer.lheading(t)) {
          t = t.substring(a.raw.length), i.push(a);
          continue;
        }
        let l = t;
        if ((s = this.options.extensions) != null && s.startBlock) {
          let c = 1 / 0;
          const h = t.slice(1);
          let d;
          this.options.extensions.startBlock.forEach((u) => {
            d = u.call({
              lexer: this
            }, h), typeof d == "number" && d >= 0 && (c = Math.min(c, d));
          }), c < 1 / 0 && c >= 0 && (l = t.substring(0, c + 1));
        }
        if (this.state.top && (a = this.tokenizer.paragraph(l))) {
          const c = i.at(-1);
          r && (c == null ? void 0 : c.type) === "paragraph" ? (c.raw += `
` + a.raw, c.text += `
` + a.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = c.text) : i.push(a), r = l.length !== t.length, t = t.substring(a.raw.length);
          continue;
        }
        if (a = this.tokenizer.text(t)) {
          t = t.substring(a.raw.length);
          const c = i.at(-1);
          (c == null ? void 0 : c.type) === "text" ? (c.raw += `
` + a.raw, c.text += `
` + a.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = c.text) : i.push(a);
          continue;
        }
        if (t) {
          const c = "Infinite loop on byte: " + t.charCodeAt(0);
          if (this.options.silent) {
            console.error(c);
            break;
          } else
            throw new Error(c);
        }
      }
      return this.state.top = true, i;
    }
    inline(t, i = []) {
      return this.inlineQueue.push({
        src: t,
        tokens: i
      }), i;
    }
    inlineTokens(t, i = []) {
      var r, n, o;
      let s = t, a = null;
      if (this.tokens.links) {
        const h = Object.keys(this.tokens.links);
        if (h.length > 0)
          for (; (a = this.tokenizer.rules.inline.reflinkSearch.exec(s)) != null; )
            h.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (s = s.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
      }
      for (; (a = this.tokenizer.rules.inline.anyPunctuation.exec(s)) != null; )
        s = s.slice(0, a.index) + "++" + s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
      for (; (a = this.tokenizer.rules.inline.blockSkip.exec(s)) != null; )
        s = s.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      let l = false, c = "";
      for (; t; ) {
        l || (c = ""), l = false;
        let h;
        if ((n = (r = this.options.extensions) == null ? void 0 : r.inline) != null && n.some((u) => (h = u.call({
          lexer: this
        }, t, i)) ? (t = t.substring(h.raw.length), i.push(h), true) : false))
          continue;
        if (h = this.tokenizer.escape(t)) {
          t = t.substring(h.raw.length), i.push(h);
          continue;
        }
        if (h = this.tokenizer.tag(t)) {
          t = t.substring(h.raw.length), i.push(h);
          continue;
        }
        if (h = this.tokenizer.link(t)) {
          t = t.substring(h.raw.length), i.push(h);
          continue;
        }
        if (h = this.tokenizer.reflink(t, this.tokens.links)) {
          t = t.substring(h.raw.length);
          const u = i.at(-1);
          h.type === "text" && (u == null ? void 0 : u.type) === "text" ? (u.raw += h.raw, u.text += h.text) : i.push(h);
          continue;
        }
        if (h = this.tokenizer.emStrong(t, s, c)) {
          t = t.substring(h.raw.length), i.push(h);
          continue;
        }
        if (h = this.tokenizer.codespan(t)) {
          t = t.substring(h.raw.length), i.push(h);
          continue;
        }
        if (h = this.tokenizer.br(t)) {
          t = t.substring(h.raw.length), i.push(h);
          continue;
        }
        if (h = this.tokenizer.del(t)) {
          t = t.substring(h.raw.length), i.push(h);
          continue;
        }
        if (h = this.tokenizer.autolink(t)) {
          t = t.substring(h.raw.length), i.push(h);
          continue;
        }
        if (!this.state.inLink && (h = this.tokenizer.url(t))) {
          t = t.substring(h.raw.length), i.push(h);
          continue;
        }
        let d = t;
        if ((o = this.options.extensions) != null && o.startInline) {
          let u = 1 / 0;
          const p = t.slice(1);
          let f;
          this.options.extensions.startInline.forEach((m) => {
            f = m.call({
              lexer: this
            }, p), typeof f == "number" && f >= 0 && (u = Math.min(u, f));
          }), u < 1 / 0 && u >= 0 && (d = t.substring(0, u + 1));
        }
        if (h = this.tokenizer.inlineText(d)) {
          t = t.substring(h.raw.length), h.raw.slice(-1) !== "_" && (c = h.raw.slice(-1)), l = true;
          const u = i.at(-1);
          (u == null ? void 0 : u.type) === "text" ? (u.raw += h.raw, u.text += h.text) : i.push(h);
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
      return i;
    }
  }, mn = class {
    constructor(e) {
      ft(this, "options"), ft(this, "parser"), this.options = e || oi;
    }
    space(e) {
      return "";
    }
    code({ text: e, lang: t, escaped: i }) {
      var r;
      const n = (r = (t || "").match(Nt.notSpaceStart)) == null ? void 0 : r[0], o = e.replace(Nt.endingNewline, "") + `
`;
      return n ? '<pre><code class="language-' + le(n) + '">' + (i ? o : le(o, true)) + `</code></pre>
` : "<pre><code>" + (i ? o : le(o, true)) + `</code></pre>
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
      const t = e.ordered, i = e.start;
      let r = "";
      for (let s = 0; s < e.items.length; s++) {
        const a = e.items[s];
        r += this.listitem(a);
      }
      const n = t ? "ol" : "ul", o = t && i !== 1 ? ' start="' + i + '"' : "";
      return "<" + n + o + `>
` + r + "</" + n + `>
`;
    }
    listitem(e) {
      var t;
      let i = "";
      if (e.task) {
        const r = this.checkbox({
          checked: !!e.checked
        });
        e.loose ? ((t = e.tokens[0]) == null ? void 0 : t.type) === "paragraph" ? (e.tokens[0].text = r + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = r + " " + le(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = true)) : e.tokens.unshift({
          type: "text",
          raw: r + " ",
          text: r + " ",
          escaped: true
        }) : i += r + " ";
      }
      return i += this.parser.parse(e.tokens, !!e.loose), `<li>${i}</li>
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
      let t = "", i = "";
      for (let n = 0; n < e.header.length; n++)
        i += this.tablecell(e.header[n]);
      t += this.tablerow({
        text: i
      });
      let r = "";
      for (let n = 0; n < e.rows.length; n++) {
        const o = e.rows[n];
        i = "";
        for (let s = 0; s < o.length; s++)
          i += this.tablecell(o[s]);
        r += this.tablerow({
          text: i
        });
      }
      return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + r + `</table>
`;
    }
    tablerow({ text: e }) {
      return `<tr>
${e}</tr>
`;
    }
    tablecell(e) {
      const t = this.parser.parseInline(e.tokens), i = e.header ? "th" : "td";
      return (e.align ? `<${i} align="${e.align}">` : `<${i}>`) + t + `</${i}>
`;
    }
    strong({ tokens: e }) {
      return `<strong>${this.parser.parseInline(e)}</strong>`;
    }
    em({ tokens: e }) {
      return `<em>${this.parser.parseInline(e)}</em>`;
    }
    codespan({ text: e }) {
      return `<code>${le(e, true)}</code>`;
    }
    br(e) {
      return "<br>";
    }
    del({ tokens: e }) {
      return `<del>${this.parser.parseInline(e)}</del>`;
    }
    link({ href: e, title: t, tokens: i }) {
      const r = this.parser.parseInline(i), n = El(e);
      if (n === null)
        return r;
      e = n;
      let o = '<a href="' + e + '"';
      return t && (o += ' title="' + le(t) + '"'), o += ">" + r + "</a>", o;
    }
    image({ href: e, title: t, text: i, tokens: r }) {
      r && (i = this.parser.parseInline(r, this.parser.textRenderer));
      const n = El(e);
      if (n === null)
        return le(i);
      e = n;
      let o = `<img src="${e}" alt="${i}"`;
      return t && (o += ` title="${le(t)}"`), o += ">", o;
    }
    text(e) {
      return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : le(e.text);
    }
  }, hs = class {
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
  }, Se = class ha {
    constructor(t) {
      ft(this, "options"), ft(this, "renderer"), ft(this, "textRenderer"), this.options = t || oi, this.options.renderer = this.options.renderer || new mn(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new hs();
    }
    static parse(t, i) {
      return new ha(i).parse(t);
    }
    static parseInline(t, i) {
      return new ha(i).parseInline(t);
    }
    parse(t, i = true) {
      var r, n;
      let o = "";
      for (let s = 0; s < t.length; s++) {
        const a = t[s];
        if ((n = (r = this.options.extensions) == null ? void 0 : r.renderers) != null && n[a.type]) {
          const c = a, h = this.options.extensions.renderers[c.type].call({
            parser: this
          }, c);
          if (h !== false || ![
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
          ].includes(c.type)) {
            o += h || "";
            continue;
          }
        }
        const l = a;
        switch (l.type) {
          case "space": {
            o += this.renderer.space(l);
            continue;
          }
          case "hr": {
            o += this.renderer.hr(l);
            continue;
          }
          case "heading": {
            o += this.renderer.heading(l);
            continue;
          }
          case "code": {
            o += this.renderer.code(l);
            continue;
          }
          case "table": {
            o += this.renderer.table(l);
            continue;
          }
          case "blockquote": {
            o += this.renderer.blockquote(l);
            continue;
          }
          case "list": {
            o += this.renderer.list(l);
            continue;
          }
          case "html": {
            o += this.renderer.html(l);
            continue;
          }
          case "paragraph": {
            o += this.renderer.paragraph(l);
            continue;
          }
          case "text": {
            let c = l, h = this.renderer.text(c);
            for (; s + 1 < t.length && t[s + 1].type === "text"; )
              c = t[++s], h += `
` + this.renderer.text(c);
            i ? o += this.renderer.paragraph({
              type: "paragraph",
              raw: h,
              text: h,
              tokens: [
                {
                  type: "text",
                  raw: h,
                  text: h,
                  escaped: true
                }
              ]
            }) : o += h;
            continue;
          }
          default: {
            const c = 'Token with "' + l.type + '" type was not found.';
            if (this.options.silent)
              return console.error(c), "";
            throw new Error(c);
          }
        }
      }
      return o;
    }
    parseInline(t, i = this.renderer) {
      var r, n;
      let o = "";
      for (let s = 0; s < t.length; s++) {
        const a = t[s];
        if ((n = (r = this.options.extensions) == null ? void 0 : r.renderers) != null && n[a.type]) {
          const c = this.options.extensions.renderers[a.type].call({
            parser: this
          }, a);
          if (c !== false || ![
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
          ].includes(a.type)) {
            o += c || "";
            continue;
          }
        }
        const l = a;
        switch (l.type) {
          case "escape": {
            o += i.text(l);
            break;
          }
          case "html": {
            o += i.html(l);
            break;
          }
          case "link": {
            o += i.link(l);
            break;
          }
          case "image": {
            o += i.image(l);
            break;
          }
          case "strong": {
            o += i.strong(l);
            break;
          }
          case "em": {
            o += i.em(l);
            break;
          }
          case "codespan": {
            o += i.codespan(l);
            break;
          }
          case "br": {
            o += i.br(l);
            break;
          }
          case "del": {
            o += i.del(l);
            break;
          }
          case "text": {
            o += i.text(l);
            break;
          }
          default: {
            const c = 'Token with "' + l.type + '" type was not found.';
            if (this.options.silent)
              return console.error(c), "";
            throw new Error(c);
          }
        }
      }
      return o;
    }
  }, wo, Wr = (wo = class {
    constructor(e) {
      ft(this, "options"), ft(this, "block"), this.options = e || oi;
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
      return this.block ? _e.lex : _e.lexInline;
    }
    provideParser() {
      return this.block ? Se.parse : Se.parseInline;
    }
  }, ft(wo, "passThroughHooks", /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess",
    "processAllTokens"
  ])), wo), g2 = class {
    constructor(...e) {
      ft(this, "defaults", es()), ft(this, "options", this.setOptions), ft(this, "parse", this.parseMarkdown(true)), ft(this, "parseInline", this.parseMarkdown(false)), ft(this, "Parser", Se), ft(this, "Renderer", mn), ft(this, "TextRenderer", hs), ft(this, "Lexer", _e), ft(this, "Tokenizer", fn), ft(this, "Hooks", Wr), this.use(...e);
    }
    walkTokens(e, t) {
      var i, r;
      let n = [];
      for (const o of e)
        switch (n = n.concat(t.call(this, o)), o.type) {
          case "table": {
            const s = o;
            for (const a of s.header)
              n = n.concat(this.walkTokens(a.tokens, t));
            for (const a of s.rows)
              for (const l of a)
                n = n.concat(this.walkTokens(l.tokens, t));
            break;
          }
          case "list": {
            const s = o;
            n = n.concat(this.walkTokens(s.items, t));
            break;
          }
          default: {
            const s = o;
            (r = (i = this.defaults.extensions) == null ? void 0 : i.childTokens) != null && r[s.type] ? this.defaults.extensions.childTokens[s.type].forEach((a) => {
              const l = s[a].flat(1 / 0);
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
      return e.forEach((i) => {
        const r = {
          ...i
        };
        if (r.async = this.defaults.async || r.async || false, i.extensions && (i.extensions.forEach((n) => {
          if (!n.name)
            throw new Error("extension name required");
          if ("renderer" in n) {
            const o = t.renderers[n.name];
            o ? t.renderers[n.name] = function(...s) {
              let a = n.renderer.apply(this, s);
              return a === false && (a = o.apply(this, s)), a;
            } : t.renderers[n.name] = n.renderer;
          }
          if ("tokenizer" in n) {
            if (!n.level || n.level !== "block" && n.level !== "inline")
              throw new Error("extension level must be 'block' or 'inline'");
            const o = t[n.level];
            o ? o.unshift(n.tokenizer) : t[n.level] = [
              n.tokenizer
            ], n.start && (n.level === "block" ? t.startBlock ? t.startBlock.push(n.start) : t.startBlock = [
              n.start
            ] : n.level === "inline" && (t.startInline ? t.startInline.push(n.start) : t.startInline = [
              n.start
            ]));
          }
          "childTokens" in n && n.childTokens && (t.childTokens[n.name] = n.childTokens);
        }), r.extensions = t), i.renderer) {
          const n = this.defaults.renderer || new mn(this.defaults);
          for (const o in i.renderer) {
            if (!(o in n))
              throw new Error(`renderer '${o}' does not exist`);
            if ([
              "options",
              "parser"
            ].includes(o))
              continue;
            const s = o, a = i.renderer[s], l = n[s];
            n[s] = (...c) => {
              let h = a.apply(n, c);
              return h === false && (h = l.apply(n, c)), h || "";
            };
          }
          r.renderer = n;
        }
        if (i.tokenizer) {
          const n = this.defaults.tokenizer || new fn(this.defaults);
          for (const o in i.tokenizer) {
            if (!(o in n))
              throw new Error(`tokenizer '${o}' does not exist`);
            if ([
              "options",
              "rules",
              "lexer"
            ].includes(o))
              continue;
            const s = o, a = i.tokenizer[s], l = n[s];
            n[s] = (...c) => {
              let h = a.apply(n, c);
              return h === false && (h = l.apply(n, c)), h;
            };
          }
          r.tokenizer = n;
        }
        if (i.hooks) {
          const n = this.defaults.hooks || new Wr();
          for (const o in i.hooks) {
            if (!(o in n))
              throw new Error(`hook '${o}' does not exist`);
            if ([
              "options",
              "block"
            ].includes(o))
              continue;
            const s = o, a = i.hooks[s], l = n[s];
            Wr.passThroughHooks.has(o) ? n[s] = (c) => {
              if (this.defaults.async)
                return Promise.resolve(a.call(n, c)).then((d) => l.call(n, d));
              const h = a.call(n, c);
              return l.call(n, h);
            } : n[s] = (...c) => {
              let h = a.apply(n, c);
              return h === false && (h = l.apply(n, c)), h;
            };
          }
          r.hooks = n;
        }
        if (i.walkTokens) {
          const n = this.defaults.walkTokens, o = i.walkTokens;
          r.walkTokens = function(s) {
            let a = [];
            return a.push(o.call(this, s)), n && (a = a.concat(n.call(this, s))), a;
          };
        }
        this.defaults = {
          ...this.defaults,
          ...r
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
      return _e.lex(e, t ?? this.defaults);
    }
    parser(e, t) {
      return Se.parse(e, t ?? this.defaults);
    }
    parseMarkdown(e) {
      return (t, i) => {
        const r = {
          ...i
        }, n = {
          ...this.defaults,
          ...r
        }, o = this.onError(!!n.silent, !!n.async);
        if (this.defaults.async === true && r.async === false)
          return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
        if (typeof t > "u" || t === null)
          return o(new Error("marked(): input parameter is undefined or null"));
        if (typeof t != "string")
          return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
        n.hooks && (n.hooks.options = n, n.hooks.block = e);
        const s = n.hooks ? n.hooks.provideLexer() : e ? _e.lex : _e.lexInline, a = n.hooks ? n.hooks.provideParser() : e ? Se.parse : Se.parseInline;
        if (n.async)
          return Promise.resolve(n.hooks ? n.hooks.preprocess(t) : t).then((l) => s(l, n)).then((l) => n.hooks ? n.hooks.processAllTokens(l) : l).then((l) => n.walkTokens ? Promise.all(this.walkTokens(l, n.walkTokens)).then(() => l) : l).then((l) => a(l, n)).then((l) => n.hooks ? n.hooks.postprocess(l) : l).catch(o);
        try {
          n.hooks && (t = n.hooks.preprocess(t));
          let l = s(t, n);
          n.hooks && (l = n.hooks.processAllTokens(l)), n.walkTokens && this.walkTokens(l, n.walkTokens);
          let c = a(l, n);
          return n.hooks && (c = n.hooks.postprocess(c)), c;
        } catch (l) {
          return o(l);
        }
      };
    }
    onError(e, t) {
      return (i) => {
        if (i.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
          const r = "<p>An error occurred:</p><pre>" + le(i.message + "", true) + "</pre>";
          return t ? Promise.resolve(r) : r;
        }
        if (t)
          return Promise.reject(i);
        throw i;
      };
    }
  }, Ke = new g2();
  function dt(e, t) {
    return Ke.parse(e, t);
  }
  dt.options = dt.setOptions = function(e) {
    return Ke.setOptions(e), dt.defaults = Ke.defaults, du(dt.defaults), dt;
  };
  dt.getDefaults = es;
  dt.defaults = oi;
  dt.use = function(...e) {
    return Ke.use(...e), dt.defaults = Ke.defaults, du(dt.defaults), dt;
  };
  dt.walkTokens = function(e, t) {
    return Ke.walkTokens(e, t);
  };
  dt.parseInline = Ke.parseInline;
  dt.Parser = Se;
  dt.parser = Se.parse;
  dt.Renderer = mn;
  dt.TextRenderer = hs;
  dt.Lexer = _e;
  dt.lexer = _e.lex;
  dt.Tokenizer = fn;
  dt.Hooks = Wr;
  dt.parse = dt;
  dt.options;
  dt.setOptions;
  dt.use;
  dt.walkTokens;
  dt.parseInline;
  Se.parse;
  _e.lex;
  function vu(e) {
    for (var t = [], i = 1; i < arguments.length; i++)
      t[i - 1] = arguments[i];
    var r = Array.from(typeof e == "string" ? [
      e
    ] : e);
    r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, "");
    var n = r.reduce(function(a, l) {
      var c = l.match(/\n([\t ]+|(?!\s).)/g);
      return c ? a.concat(c.map(function(h) {
        var d, u;
        return (u = (d = h.match(/[\t ]/g)) === null || d === void 0 ? void 0 : d.length) !== null && u !== void 0 ? u : 0;
      })) : a;
    }, []);
    if (n.length) {
      var o = new RegExp(`
[	 ]{` + Math.min.apply(Math, n) + "}", "g");
      r = r.map(function(a) {
        return a.replace(o, `
`);
      });
    }
    r[0] = r[0].replace(/^\r?\n/, "");
    var s = r[0];
    return t.forEach(function(a, l) {
      var c = s.match(/(?:^|\n)( *)$/), h = c ? c[1] : "", d = a;
      typeof a == "string" && a.includes(`
`) && (d = String(a).split(`
`).map(function(u, p) {
        return p === 0 ? u : "" + h + u;
      }).join(`
`)), s += d + r[l + 1];
    }), s;
  }
  function wu(e, { markdownAutoWrap: t }) {
    const i = e.replace(/<br\/>/g, `
`).replace(/\n{2,}/g, `
`), r = vu(i);
    return t === false ? r.replace(/ /g, "&nbsp;") : r;
  }
  g(wu, "preprocessMarkdown");
  function _u(e, t = {}) {
    const i = wu(e, t), r = dt.lexer(i), n = [
      []
    ];
    let o = 0;
    function s(a, l = "normal") {
      a.type === "text" ? a.text.split(`
`).forEach((c, h) => {
        h !== 0 && (o++, n.push([])), c.split(" ").forEach((d) => {
          d = d.replace(/&#39;/g, "'"), d && n[o].push({
            content: d,
            type: l
          });
        });
      }) : a.type === "strong" || a.type === "em" ? a.tokens.forEach((c) => {
        s(c, a.type);
      }) : a.type === "html" && n[o].push({
        content: a.text,
        type: "normal"
      });
    }
    return g(s, "processNode"), r.forEach((a) => {
      var l;
      a.type === "paragraph" ? (l = a.tokens) == null || l.forEach((c) => {
        s(c);
      }) : a.type === "html" && n[o].push({
        content: a.text,
        type: "normal"
      });
    }), n;
  }
  g(_u, "markdownToLines");
  function Su(e, { markdownAutoWrap: t } = {}) {
    const i = dt.lexer(e);
    function r(n) {
      var o, s, a;
      return n.type === "text" ? t === false ? n.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : n.text.replace(/\n */g, "<br/>") : n.type === "strong" ? `<strong>${(o = n.tokens) == null ? void 0 : o.map(r).join("")}</strong>` : n.type === "em" ? `<em>${(s = n.tokens) == null ? void 0 : s.map(r).join("")}</em>` : n.type === "paragraph" ? `<p>${(a = n.tokens) == null ? void 0 : a.map(r).join("")}</p>` : n.type === "space" ? "" : n.type === "html" ? `${n.text}` : n.type === "escape" ? n.text : `Unsupported markdown: ${n.type}`;
    }
    return g(r, "output"), i.map(r).join("");
  }
  g(Su, "markdownToHTML");
  function Tu(e) {
    return Intl.Segmenter ? [
      ...new Intl.Segmenter().segment(e)
    ].map((t) => t.segment) : [
      ...e
    ];
  }
  g(Tu, "splitTextToChars");
  function Bu(e, t) {
    const i = Tu(t.content);
    return cs(e, [], i, t.type);
  }
  g(Bu, "splitWordToFitWidth");
  function cs(e, t, i, r) {
    if (i.length === 0)
      return [
        {
          content: t.join(""),
          type: r
        },
        {
          content: "",
          type: r
        }
      ];
    const [n, ...o] = i, s = [
      ...t,
      n
    ];
    return e([
      {
        content: s.join(""),
        type: r
      }
    ]) ? cs(e, s, o, r) : (t.length === 0 && n && (t.push(n), i.shift()), [
      {
        content: t.join(""),
        type: r
      },
      {
        content: i.join(""),
        type: r
      }
    ]);
  }
  g(cs, "splitWordToFitWidthRecursion");
  function Mu(e, t) {
    if (e.some(({ content: i }) => i.includes(`
`)))
      throw new Error("splitLineToFitWidth does not support newlines in the line");
    return yn(e, t);
  }
  g(Mu, "splitLineToFitWidth");
  function yn(e, t, i = [], r = []) {
    if (e.length === 0)
      return r.length > 0 && i.push(r), i.length > 0 ? i : [];
    let n = "";
    e[0].content === " " && (n = " ", e.shift());
    const o = e.shift() ?? {
      content: " ",
      type: "normal"
    }, s = [
      ...r
    ];
    if (n !== "" && s.push({
      content: n,
      type: "normal"
    }), s.push(o), t(s))
      return yn(e, t, i, s);
    if (r.length > 0)
      i.push(r), e.unshift(o);
    else if (o.content) {
      const [a, l] = Bu(t, o);
      i.push([
        a
      ]), l.content && e.unshift(l);
    }
    return yn(e, t, i);
  }
  g(yn, "splitLineToFitWidthRecursion");
  function ca(e, t) {
    t && e.attr("style", t);
  }
  g(ca, "applyStyle");
  async function Lu(e, t, i, r, n = false) {
    const o = e.append("foreignObject");
    o.attr("width", `${10 * i}px`), o.attr("height", `${10 * i}px`);
    const s = o.append("xhtml:div");
    let a = t.label;
    t.label && wi(t.label) && (a = await Ta(t.label.replace(Mi.lineBreakRegex, `
`), ct()));
    const l = t.isNode ? "nodeLabel" : "edgeLabel", c = s.append("span");
    c.html(a), ca(c, t.labelStyle), c.attr("class", `${l} ${r}`), ca(s, t.labelStyle), s.style("display", "table-cell"), s.style("white-space", "nowrap"), s.style("line-height", "1.5"), s.style("max-width", i + "px"), s.style("text-align", "center"), s.attr("xmlns", "http://www.w3.org/1999/xhtml"), n && s.attr("class", "labelBkg");
    let h = s.node().getBoundingClientRect();
    return h.width === i && (s.style("display", "table"), s.style("white-space", "break-spaces"), s.style("width", i + "px"), h = s.node().getBoundingClientRect()), o.node();
  }
  g(Lu, "addHtmlSpan");
  function qn(e, t, i) {
    return e.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", t * i - 0.1 + "em").attr("dy", i + "em");
  }
  g(qn, "createTspan");
  function Au(e, t, i) {
    const r = e.append("text"), n = qn(r, 1, t);
    Wn(n, i);
    const o = n.node().getComputedTextLength();
    return r.remove(), o;
  }
  g(Au, "computeWidthOfText");
  f2 = function(e, t, i) {
    var r;
    const n = e.append("text"), o = qn(n, 1, t);
    Wn(o, [
      {
        content: i,
        type: "normal"
      }
    ]);
    const s = (r = o.node()) == null ? void 0 : r.getBoundingClientRect();
    return s && n.remove(), s;
  };
  g(f2, "computeDimensionOfText");
  function Fu(e, t, i, r = false) {
    const n = t.append("g"), o = n.insert("rect").attr("class", "background").attr("style", "stroke: none"), s = n.append("text").attr("y", "-10.1");
    let a = 0;
    for (const l of i) {
      const c = g((d) => Au(n, 1.1, d) <= e, "checkWidth"), h = c(l) ? [
        l
      ] : Mu(l, c);
      for (const d of h) {
        const u = qn(s, a, 1.1);
        Wn(u, d), a++;
      }
    }
    if (r) {
      const l = s.node().getBBox(), c = 2;
      return o.attr("x", l.x - c).attr("y", l.y - c).attr("width", l.width + 2 * c).attr("height", l.height + 2 * c), n.node();
    } else
      return s.node();
  }
  g(Fu, "createFormattedText");
  function Wn(e, t) {
    e.text(""), t.forEach((i, r) => {
      const n = e.append("tspan").attr("font-style", i.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", i.type === "strong" ? "bold" : "normal");
      r === 0 ? n.text(i.content) : n.text(" " + i.content);
    });
  }
  g(Wn, "updateTextContentAndStyles");
  Eu = function(e) {
    return e.replace(/fa[bklrs]?:fa-[\w-]+/g, (t) => `<i class='${t.replace(":", " ")}'></i>`);
  };
  g(Eu, "replaceIconSubstring");
  Ne = g(async (e, t = "", { style: i = "", isTitle: r = false, classes: n = "", useHtmlLabels: o = true, isNode: s = true, width: a = 200, addSvgBackground: l = false } = {}, c) => {
    if ($.debug("XYZ createText", t, i, r, n, o, s, "addSvgBackground: ", l), o) {
      const h = Su(t, c), d = Eu(ni(h)), u = t.replace(/\\\\/g, "\\"), p = {
        isNode: s,
        label: wi(t) ? u : d,
        labelStyle: i.replace("fill:", "color:")
      };
      return await Lu(e, p, a, n, l);
    } else {
      const h = t.replace(/<br\s*\/?>/g, "<br/>"), d = _u(h.replace("<br>", "<br/>"), c), u = Fu(a, e, d, t ? l : false);
      if (s) {
        /stroke:/.exec(i) && (i = i.replace("stroke:", "lineColor:"));
        const p = i.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
        st(u).attr("style", p);
      } else {
        const p = i.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
        st(u).select("rect").attr("style", p.replace(/background:/g, "fill:"));
        const f = i.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
        st(u).select("text").attr("style", f);
      }
      return u;
    }
  }, "createText");
  function _o(e, t, i) {
    if (e && e.length) {
      const [r, n] = t, o = Math.PI / 180 * i, s = Math.cos(o), a = Math.sin(o);
      for (const l of e) {
        const [c, h] = l;
        l[0] = (c - r) * s - (h - n) * a + r, l[1] = (c - r) * a + (h - n) * s + n;
      }
    }
  }
  function m2(e, t) {
    return e[0] === t[0] && e[1] === t[1];
  }
  function y2(e, t, i, r = 1) {
    const n = i, o = Math.max(t, 0.1), s = e[0] && e[0][0] && typeof e[0][0] == "number" ? [
      e
    ] : e, a = [
      0,
      0
    ];
    if (n)
      for (const c of s)
        _o(c, a, n);
    const l = function(c, h, d) {
      const u = [];
      for (const b of c) {
        const C = [
          ...b
        ];
        m2(C[0], C[C.length - 1]) || C.push([
          C[0][0],
          C[0][1]
        ]), C.length > 2 && u.push(C);
      }
      const p = [];
      h = Math.max(h, 0.1);
      const f = [];
      for (const b of u)
        for (let C = 0; C < b.length - 1; C++) {
          const w = b[C], k = b[C + 1];
          if (w[1] !== k[1]) {
            const _ = Math.min(w[1], k[1]);
            f.push({
              ymin: _,
              ymax: Math.max(w[1], k[1]),
              x: _ === w[1] ? w[0] : k[0],
              islope: (k[0] - w[0]) / (k[1] - w[1])
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
        if (m = m.filter((b) => !(b.edge.ymax <= y)), m.sort((b, C) => b.edge.x === C.edge.x ? 0 : (b.edge.x - C.edge.x) / Math.abs(b.edge.x - C.edge.x)), (d !== 1 || x % h == 0) && m.length > 1)
          for (let b = 0; b < m.length; b += 2) {
            const C = b + 1;
            if (C >= m.length)
              break;
            const w = m[b].edge, k = m[C].edge;
            p.push([
              [
                Math.round(w.x),
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
    }(s, o, r);
    if (n) {
      for (const c of s)
        _o(c, a, -n);
      (function(c, h, d) {
        const u = [];
        c.forEach((p) => u.push(...p)), _o(u, h, d);
      })(l, a, -n);
    }
    return l;
  }
  function br(e, t) {
    var i;
    const r = t.hachureAngle + 90;
    let n = t.hachureGap;
    n < 0 && (n = 4 * t.strokeWidth), n = Math.round(Math.max(n, 0.1));
    let o = 1;
    return t.roughness >= 1 && (((i = t.randomizer) === null || i === void 0 ? void 0 : i.next()) || Math.random()) > 0.7 && (o = n), y2(e, n, r, o || 1);
  }
  class ds {
    constructor(t) {
      this.helper = t;
    }
    fillPolygons(t, i) {
      return this._fillPolygons(t, i);
    }
    _fillPolygons(t, i) {
      const r = br(t, i);
      return {
        type: "fillSketch",
        ops: this.renderLines(r, i)
      };
    }
    renderLines(t, i) {
      const r = [];
      for (const n of t)
        r.push(...this.helper.doubleLineOps(n[0][0], n[0][1], n[1][0], n[1][1], i));
      return r;
    }
  }
  function jn(e) {
    const t = e[0], i = e[1];
    return Math.sqrt(Math.pow(t[0] - i[0], 2) + Math.pow(t[1] - i[1], 2));
  }
  class x2 extends ds {
    fillPolygons(t, i) {
      let r = i.hachureGap;
      r < 0 && (r = 4 * i.strokeWidth), r = Math.max(r, 0.1);
      const n = br(t, Object.assign({}, i, {
        hachureGap: r
      })), o = Math.PI / 180 * i.hachureAngle, s = [], a = 0.5 * r * Math.cos(o), l = 0.5 * r * Math.sin(o);
      for (const [c, h] of n)
        jn([
          c,
          h
        ]) && s.push([
          [
            c[0] - a,
            c[1] + l
          ],
          [
            ...h
          ]
        ], [
          [
            c[0] + a,
            c[1] - l
          ],
          [
            ...h
          ]
        ]);
      return {
        type: "fillSketch",
        ops: this.renderLines(s, i)
      };
    }
  }
  class b2 extends ds {
    fillPolygons(t, i) {
      const r = this._fillPolygons(t, i), n = Object.assign({}, i, {
        hachureAngle: i.hachureAngle + 90
      }), o = this._fillPolygons(t, n);
      return r.ops = r.ops.concat(o.ops), r;
    }
  }
  class k2 {
    constructor(t) {
      this.helper = t;
    }
    fillPolygons(t, i) {
      const r = br(t, i = Object.assign({}, i, {
        hachureAngle: 0
      }));
      return this.dotsOnLines(r, i);
    }
    dotsOnLines(t, i) {
      const r = [];
      let n = i.hachureGap;
      n < 0 && (n = 4 * i.strokeWidth), n = Math.max(n, 0.1);
      let o = i.fillWeight;
      o < 0 && (o = i.strokeWidth / 2);
      const s = n / 4;
      for (const a of t) {
        const l = jn(a), c = l / n, h = Math.ceil(c) - 1, d = l - h * n, u = (a[0][0] + a[1][0]) / 2 - n / 4, p = Math.min(a[0][1], a[1][1]);
        for (let f = 0; f < h; f++) {
          const m = p + d + f * n, y = u - s + 2 * Math.random() * s, x = m - s + 2 * Math.random() * s, b = this.helper.ellipse(y, x, o, o, i);
          r.push(...b.ops);
        }
      }
      return {
        type: "fillSketch",
        ops: r
      };
    }
  }
  class C2 {
    constructor(t) {
      this.helper = t;
    }
    fillPolygons(t, i) {
      const r = br(t, i);
      return {
        type: "fillSketch",
        ops: this.dashedLine(r, i)
      };
    }
    dashedLine(t, i) {
      const r = i.dashOffset < 0 ? i.hachureGap < 0 ? 4 * i.strokeWidth : i.hachureGap : i.dashOffset, n = i.dashGap < 0 ? i.hachureGap < 0 ? 4 * i.strokeWidth : i.hachureGap : i.dashGap, o = [];
      return t.forEach((s) => {
        const a = jn(s), l = Math.floor(a / (r + n)), c = (a + n - l * (r + n)) / 2;
        let h = s[0], d = s[1];
        h[0] > d[0] && (h = s[1], d = s[0]);
        const u = Math.atan((d[1] - h[1]) / (d[0] - h[0]));
        for (let p = 0; p < l; p++) {
          const f = p * (r + n), m = f + r, y = [
            h[0] + f * Math.cos(u) + c * Math.cos(u),
            h[1] + f * Math.sin(u) + c * Math.sin(u)
          ], x = [
            h[0] + m * Math.cos(u) + c * Math.cos(u),
            h[1] + m * Math.sin(u) + c * Math.sin(u)
          ];
          o.push(...this.helper.doubleLineOps(y[0], y[1], x[0], x[1], i));
        }
      }), o;
    }
  }
  class v2 {
    constructor(t) {
      this.helper = t;
    }
    fillPolygons(t, i) {
      const r = i.hachureGap < 0 ? 4 * i.strokeWidth : i.hachureGap, n = i.zigzagOffset < 0 ? r : i.zigzagOffset, o = br(t, i = Object.assign({}, i, {
        hachureGap: r + n
      }));
      return {
        type: "fillSketch",
        ops: this.zigzagLines(o, n, i)
      };
    }
    zigzagLines(t, i, r) {
      const n = [];
      return t.forEach((o) => {
        const s = jn(o), a = Math.round(s / (2 * i));
        let l = o[0], c = o[1];
        l[0] > c[0] && (l = o[1], c = o[0]);
        const h = Math.atan((c[1] - l[1]) / (c[0] - l[0]));
        for (let d = 0; d < a; d++) {
          const u = 2 * d * i, p = 2 * (d + 1) * i, f = Math.sqrt(2 * Math.pow(i, 2)), m = [
            l[0] + u * Math.cos(h),
            l[1] + u * Math.sin(h)
          ], y = [
            l[0] + p * Math.cos(h),
            l[1] + p * Math.sin(h)
          ], x = [
            m[0] + f * Math.cos(h + Math.PI / 4),
            m[1] + f * Math.sin(h + Math.PI / 4)
          ];
          n.push(...this.helper.doubleLineOps(m[0], m[1], x[0], x[1], r), ...this.helper.doubleLineOps(x[0], x[1], y[0], y[1], r));
        }
      }), n;
    }
  }
  const Ht = {};
  class w2 {
    constructor(t) {
      this.seed = t;
    }
    next() {
      return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
    }
  }
  const _2 = 0, So = 1, Dl = 2, Fr = {
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
  function To(e, t) {
    return e.type === t;
  }
  function us(e) {
    const t = [], i = function(s) {
      const a = new Array();
      for (; s !== ""; )
        if (s.match(/^([ \t\r\n,]+)/))
          s = s.substr(RegExp.$1.length);
        else if (s.match(/^([aAcChHlLmMqQsStTvVzZ])/))
          a[a.length] = {
            type: _2,
            text: RegExp.$1
          }, s = s.substr(RegExp.$1.length);
        else {
          if (!s.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))
            return [];
          a[a.length] = {
            type: So,
            text: `${parseFloat(RegExp.$1)}`
          }, s = s.substr(RegExp.$1.length);
        }
      return a[a.length] = {
        type: Dl,
        text: ""
      }, a;
    }(e);
    let r = "BOD", n = 0, o = i[n];
    for (; !To(o, Dl); ) {
      let s = 0;
      const a = [];
      if (r === "BOD") {
        if (o.text !== "M" && o.text !== "m")
          return us("M0,0" + e);
        n++, s = Fr[o.text], r = o.text;
      } else
        To(o, So) ? s = Fr[r] : (n++, s = Fr[o.text], r = o.text);
      if (!(n + s < i.length))
        throw new Error("Path data ended short");
      for (let l = n; l < n + s; l++) {
        const c = i[l];
        if (!To(c, So))
          throw new Error("Param not a number: " + r + "," + c.text);
        a[a.length] = +c.text;
      }
      if (typeof Fr[r] != "number")
        throw new Error("Bad segment: " + r);
      {
        const l = {
          key: r,
          data: a
        };
        t.push(l), n += s, o = i[n], r === "M" && (r = "L"), r === "m" && (r = "l");
      }
    }
    return t;
  }
  function $u(e) {
    let t = 0, i = 0, r = 0, n = 0;
    const o = [];
    for (const { key: s, data: a } of e)
      switch (s) {
        case "M":
          o.push({
            key: "M",
            data: [
              ...a
            ]
          }), [t, i] = a, [r, n] = a;
          break;
        case "m":
          t += a[0], i += a[1], o.push({
            key: "M",
            data: [
              t,
              i
            ]
          }), r = t, n = i;
          break;
        case "L":
          o.push({
            key: "L",
            data: [
              ...a
            ]
          }), [t, i] = a;
          break;
        case "l":
          t += a[0], i += a[1], o.push({
            key: "L",
            data: [
              t,
              i
            ]
          });
          break;
        case "C":
          o.push({
            key: "C",
            data: [
              ...a
            ]
          }), t = a[4], i = a[5];
          break;
        case "c": {
          const l = a.map((c, h) => h % 2 ? c + i : c + t);
          o.push({
            key: "C",
            data: l
          }), t = l[4], i = l[5];
          break;
        }
        case "Q":
          o.push({
            key: "Q",
            data: [
              ...a
            ]
          }), t = a[2], i = a[3];
          break;
        case "q": {
          const l = a.map((c, h) => h % 2 ? c + i : c + t);
          o.push({
            key: "Q",
            data: l
          }), t = l[2], i = l[3];
          break;
        }
        case "A":
          o.push({
            key: "A",
            data: [
              ...a
            ]
          }), t = a[5], i = a[6];
          break;
        case "a":
          t += a[5], i += a[6], o.push({
            key: "A",
            data: [
              a[0],
              a[1],
              a[2],
              a[3],
              a[4],
              t,
              i
            ]
          });
          break;
        case "H":
          o.push({
            key: "H",
            data: [
              ...a
            ]
          }), t = a[0];
          break;
        case "h":
          t += a[0], o.push({
            key: "H",
            data: [
              t
            ]
          });
          break;
        case "V":
          o.push({
            key: "V",
            data: [
              ...a
            ]
          }), i = a[0];
          break;
        case "v":
          i += a[0], o.push({
            key: "V",
            data: [
              i
            ]
          });
          break;
        case "S":
          o.push({
            key: "S",
            data: [
              ...a
            ]
          }), t = a[2], i = a[3];
          break;
        case "s": {
          const l = a.map((c, h) => h % 2 ? c + i : c + t);
          o.push({
            key: "S",
            data: l
          }), t = l[2], i = l[3];
          break;
        }
        case "T":
          o.push({
            key: "T",
            data: [
              ...a
            ]
          }), t = a[0], i = a[1];
          break;
        case "t":
          t += a[0], i += a[1], o.push({
            key: "T",
            data: [
              t,
              i
            ]
          });
          break;
        case "Z":
        case "z":
          o.push({
            key: "Z",
            data: []
          }), t = r, i = n;
      }
    return o;
  }
  function Ou(e) {
    const t = [];
    let i = "", r = 0, n = 0, o = 0, s = 0, a = 0, l = 0;
    for (const { key: c, data: h } of e) {
      switch (c) {
        case "M":
          t.push({
            key: "M",
            data: [
              ...h
            ]
          }), [r, n] = h, [o, s] = h;
          break;
        case "C":
          t.push({
            key: "C",
            data: [
              ...h
            ]
          }), r = h[4], n = h[5], a = h[2], l = h[3];
          break;
        case "L":
          t.push({
            key: "L",
            data: [
              ...h
            ]
          }), [r, n] = h;
          break;
        case "H":
          r = h[0], t.push({
            key: "L",
            data: [
              r,
              n
            ]
          });
          break;
        case "V":
          n = h[0], t.push({
            key: "L",
            data: [
              r,
              n
            ]
          });
          break;
        case "S": {
          let d = 0, u = 0;
          i === "C" || i === "S" ? (d = r + (r - a), u = n + (n - l)) : (d = r, u = n), t.push({
            key: "C",
            data: [
              d,
              u,
              ...h
            ]
          }), a = h[0], l = h[1], r = h[2], n = h[3];
          break;
        }
        case "T": {
          const [d, u] = h;
          let p = 0, f = 0;
          i === "Q" || i === "T" ? (p = r + (r - a), f = n + (n - l)) : (p = r, f = n);
          const m = r + 2 * (p - r) / 3, y = n + 2 * (f - n) / 3, x = d + 2 * (p - d) / 3, b = u + 2 * (f - u) / 3;
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
          }), a = p, l = f, r = d, n = u;
          break;
        }
        case "Q": {
          const [d, u, p, f] = h, m = r + 2 * (d - r) / 3, y = n + 2 * (u - n) / 3, x = p + 2 * (d - p) / 3, b = f + 2 * (u - f) / 3;
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
          }), a = d, l = u, r = p, n = f;
          break;
        }
        case "A": {
          const d = Math.abs(h[0]), u = Math.abs(h[1]), p = h[2], f = h[3], m = h[4], y = h[5], x = h[6];
          d === 0 || u === 0 ? (t.push({
            key: "C",
            data: [
              r,
              n,
              y,
              x,
              y,
              x
            ]
          }), r = y, n = x) : (r !== y || n !== x) && (Du(r, n, y, x, d, u, p, f, m).forEach(function(b) {
            t.push({
              key: "C",
              data: b
            });
          }), r = y, n = x);
          break;
        }
        case "Z":
          t.push({
            key: "Z",
            data: []
          }), r = o, n = s;
      }
      i = c;
    }
    return t;
  }
  function Zi(e, t, i) {
    return [
      e * Math.cos(i) - t * Math.sin(i),
      e * Math.sin(i) + t * Math.cos(i)
    ];
  }
  function Du(e, t, i, r, n, o, s, a, l, c) {
    const h = (d = s, Math.PI * d / 180);
    var d;
    let u = [], p = 0, f = 0, m = 0, y = 0;
    if (c)
      [p, f, m, y] = c;
    else {
      [e, t] = Zi(e, t, -h), [i, r] = Zi(i, r, -h);
      const D = (e - i) / 2, M = (t - r) / 2;
      let L = D * D / (n * n) + M * M / (o * o);
      L > 1 && (L = Math.sqrt(L), n *= L, o *= L);
      const T = n * n, E = o * o, A = T * E - T * M * M - E * D * D, j = T * M * M + E * D * D, U = (a === l ? -1 : 1) * Math.sqrt(Math.abs(A / j));
      m = U * n * M / o + (e + i) / 2, y = U * -o * D / n + (t + r) / 2, p = Math.asin(parseFloat(((t - y) / o).toFixed(9))), f = Math.asin(parseFloat(((r - y) / o).toFixed(9))), e < m && (p = Math.PI - p), i < m && (f = Math.PI - f), p < 0 && (p = 2 * Math.PI + p), f < 0 && (f = 2 * Math.PI + f), l && p > f && (p -= 2 * Math.PI), !l && f > p && (f -= 2 * Math.PI);
    }
    let x = f - p;
    if (Math.abs(x) > 120 * Math.PI / 180) {
      const D = f, M = i, L = r;
      f = l && f > p ? p + 120 * Math.PI / 180 * 1 : p + 120 * Math.PI / 180 * -1, u = Du(i = m + n * Math.cos(f), r = y + o * Math.sin(f), M, L, n, o, s, 0, l, [
        f,
        D,
        m,
        y
      ]);
    }
    x = f - p;
    const b = Math.cos(p), C = Math.sin(p), w = Math.cos(f), k = Math.sin(f), _ = Math.tan(x / 4), B = 4 / 3 * n * _, I = 4 / 3 * o * _, z = [
      e,
      t
    ], O = [
      e + B * C,
      t - I * b
    ], F = [
      i + B * k,
      r - I * w
    ], N = [
      i,
      r
    ];
    if (O[0] = 2 * z[0] - O[0], O[1] = 2 * z[1] - O[1], c)
      return [
        O,
        F,
        N
      ].concat(u);
    {
      u = [
        O,
        F,
        N
      ].concat(u);
      const D = [];
      for (let M = 0; M < u.length; M += 3) {
        const L = Zi(u[M][0], u[M][1], h), T = Zi(u[M + 1][0], u[M + 1][1], h), E = Zi(u[M + 2][0], u[M + 2][1], h);
        D.push([
          L[0],
          L[1],
          T[0],
          T[1],
          E[0],
          E[1]
        ]);
      }
      return D;
    }
  }
  const S2 = {
    randOffset: function(e, t) {
      return et(e, t);
    },
    randOffsetWithRange: function(e, t, i) {
      return xn(e, t, i);
    },
    ellipse: function(e, t, i, r, n) {
      const o = zu(i, r, n);
      return da(e, t, n, o).opset;
    },
    doubleLineOps: function(e, t, i, r, n) {
      return ze(e, t, i, r, n, true);
    }
  };
  function Iu(e, t, i, r, n) {
    return {
      type: "path",
      ops: ze(e, t, i, r, n)
    };
  }
  function jr(e, t, i) {
    const r = (e || []).length;
    if (r > 2) {
      const n = [];
      for (let o = 0; o < r - 1; o++)
        n.push(...ze(e[o][0], e[o][1], e[o + 1][0], e[o + 1][1], i));
      return t && n.push(...ze(e[r - 1][0], e[r - 1][1], e[0][0], e[0][1], i)), {
        type: "path",
        ops: n
      };
    }
    return r === 2 ? Iu(e[0][0], e[0][1], e[1][0], e[1][1], i) : {
      type: "path",
      ops: []
    };
  }
  function T2(e, t, i, r, n) {
    return function(o, s) {
      return jr(o, true, s);
    }([
      [
        e,
        t
      ],
      [
        e + i,
        t
      ],
      [
        e + i,
        t + r
      ],
      [
        e,
        t + r
      ]
    ], n);
  }
  function Il(e, t) {
    if (e.length) {
      const i = typeof e[0][0] == "number" ? [
        e
      ] : e, r = Er(i[0], 1 * (1 + 0.2 * t.roughness), t), n = t.disableMultiStroke ? [] : Er(i[0], 1.5 * (1 + 0.22 * t.roughness), Rl(t));
      for (let o = 1; o < i.length; o++) {
        const s = i[o];
        if (s.length) {
          const a = Er(s, 1 * (1 + 0.2 * t.roughness), t), l = t.disableMultiStroke ? [] : Er(s, 1.5 * (1 + 0.22 * t.roughness), Rl(t));
          for (const c of a)
            c.op !== "move" && r.push(c);
          for (const c of l)
            c.op !== "move" && n.push(c);
        }
      }
      return {
        type: "path",
        ops: r.concat(n)
      };
    }
    return {
      type: "path",
      ops: []
    };
  }
  function zu(e, t, i) {
    const r = Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(e / 2, 2) + Math.pow(t / 2, 2)) / 2)), n = Math.ceil(Math.max(i.curveStepCount, i.curveStepCount / Math.sqrt(200) * r)), o = 2 * Math.PI / n;
    let s = Math.abs(e / 2), a = Math.abs(t / 2);
    const l = 1 - i.curveFitting;
    return s += et(s * l, i), a += et(a * l, i), {
      increment: o,
      rx: s,
      ry: a
    };
  }
  function da(e, t, i, r) {
    const [n, o] = Nl(r.increment, e, t, r.rx, r.ry, 1, r.increment * xn(0.1, xn(0.4, 1, i), i), i);
    let s = bn(n, null, i);
    if (!i.disableMultiStroke && i.roughness !== 0) {
      const [a] = Nl(r.increment, e, t, r.rx, r.ry, 1.5, 0, i), l = bn(a, null, i);
      s = s.concat(l);
    }
    return {
      estimatedPoints: o,
      opset: {
        type: "path",
        ops: s
      }
    };
  }
  function zl(e, t, i, r, n, o, s, a, l) {
    const c = e, h = t;
    let d = Math.abs(i / 2), u = Math.abs(r / 2);
    d += et(0.01 * d, l), u += et(0.01 * u, l);
    let p = n, f = o;
    for (; p < 0; )
      p += 2 * Math.PI, f += 2 * Math.PI;
    f - p > 2 * Math.PI && (p = 0, f = 2 * Math.PI);
    const m = 2 * Math.PI / l.curveStepCount, y = Math.min(m / 2, (f - p) / 2), x = ql(y, c, h, d, u, p, f, 1, l);
    if (!l.disableMultiStroke) {
      const b = ql(y, c, h, d, u, p, f, 1.5, l);
      x.push(...b);
    }
    return s && (a ? x.push(...ze(c, h, c + d * Math.cos(p), h + u * Math.sin(p), l), ...ze(c, h, c + d * Math.cos(f), h + u * Math.sin(f), l)) : x.push({
      op: "lineTo",
      data: [
        c,
        h
      ]
    }, {
      op: "lineTo",
      data: [
        c + d * Math.cos(p),
        h + u * Math.sin(p)
      ]
    })), {
      type: "path",
      ops: x
    };
  }
  function Pl(e, t) {
    const i = Ou($u(us(e))), r = [];
    let n = [
      0,
      0
    ], o = [
      0,
      0
    ];
    for (const { key: s, data: a } of i)
      switch (s) {
        case "M":
          o = [
            a[0],
            a[1]
          ], n = [
            a[0],
            a[1]
          ];
          break;
        case "L":
          r.push(...ze(o[0], o[1], a[0], a[1], t)), o = [
            a[0],
            a[1]
          ];
          break;
        case "C": {
          const [l, c, h, d, u, p] = a;
          r.push(...B2(l, c, h, d, u, p, o, t)), o = [
            u,
            p
          ];
          break;
        }
        case "Z":
          r.push(...ze(o[0], o[1], n[0], n[1], t)), o = [
            n[0],
            n[1]
          ];
      }
    return {
      type: "path",
      ops: r
    };
  }
  function Bo(e, t) {
    const i = [];
    for (const r of e)
      if (r.length) {
        const n = t.maxRandomnessOffset || 0, o = r.length;
        if (o > 2) {
          i.push({
            op: "move",
            data: [
              r[0][0] + et(n, t),
              r[0][1] + et(n, t)
            ]
          });
          for (let s = 1; s < o; s++)
            i.push({
              op: "lineTo",
              data: [
                r[s][0] + et(n, t),
                r[s][1] + et(n, t)
              ]
            });
        }
      }
    return {
      type: "fillPath",
      ops: i
    };
  }
  function pi(e, t) {
    return function(i, r) {
      let n = i.fillStyle || "hachure";
      if (!Ht[n])
        switch (n) {
          case "zigzag":
            Ht[n] || (Ht[n] = new x2(r));
            break;
          case "cross-hatch":
            Ht[n] || (Ht[n] = new b2(r));
            break;
          case "dots":
            Ht[n] || (Ht[n] = new k2(r));
            break;
          case "dashed":
            Ht[n] || (Ht[n] = new C2(r));
            break;
          case "zigzag-line":
            Ht[n] || (Ht[n] = new v2(r));
            break;
          default:
            n = "hachure", Ht[n] || (Ht[n] = new ds(r));
        }
      return Ht[n];
    }(t, S2).fillPolygons(e, t);
  }
  function Rl(e) {
    const t = Object.assign({}, e);
    return t.randomizer = void 0, e.seed && (t.seed = e.seed + 1), t;
  }
  function Pu(e) {
    return e.randomizer || (e.randomizer = new w2(e.seed || 0)), e.randomizer.next();
  }
  function xn(e, t, i, r = 1) {
    return i.roughness * r * (Pu(i) * (t - e) + e);
  }
  function et(e, t, i = 1) {
    return xn(-e, e, t, i);
  }
  function ze(e, t, i, r, n, o = false) {
    const s = o ? n.disableMultiStrokeFill : n.disableMultiStroke, a = ua(e, t, i, r, n, true, false);
    if (s)
      return a;
    const l = ua(e, t, i, r, n, true, true);
    return a.concat(l);
  }
  function ua(e, t, i, r, n, o, s) {
    const a = Math.pow(e - i, 2) + Math.pow(t - r, 2), l = Math.sqrt(a);
    let c = 1;
    c = l < 200 ? 1 : l > 500 ? 0.4 : -16668e-7 * l + 1.233334;
    let h = n.maxRandomnessOffset || 0;
    h * h * 100 > a && (h = l / 10);
    const d = h / 2, u = 0.2 + 0.2 * Pu(n);
    let p = n.bowing * n.maxRandomnessOffset * (r - t) / 200, f = n.bowing * n.maxRandomnessOffset * (e - i) / 200;
    p = et(p, n, c), f = et(f, n, c);
    const m = [], y = () => et(d, n, c), x = () => et(h, n, c), b = n.preserveVertices;
    return s ? m.push({
      op: "move",
      data: [
        e + (b ? 0 : y()),
        t + (b ? 0 : y())
      ]
    }) : m.push({
      op: "move",
      data: [
        e + (b ? 0 : et(h, n, c)),
        t + (b ? 0 : et(h, n, c))
      ]
    }), s ? m.push({
      op: "bcurveTo",
      data: [
        p + e + (i - e) * u + y(),
        f + t + (r - t) * u + y(),
        p + e + 2 * (i - e) * u + y(),
        f + t + 2 * (r - t) * u + y(),
        i + (b ? 0 : y()),
        r + (b ? 0 : y())
      ]
    }) : m.push({
      op: "bcurveTo",
      data: [
        p + e + (i - e) * u + x(),
        f + t + (r - t) * u + x(),
        p + e + 2 * (i - e) * u + x(),
        f + t + 2 * (r - t) * u + x(),
        i + (b ? 0 : x()),
        r + (b ? 0 : x())
      ]
    }), m;
  }
  function Er(e, t, i) {
    if (!e.length)
      return [];
    const r = [];
    r.push([
      e[0][0] + et(t, i),
      e[0][1] + et(t, i)
    ]), r.push([
      e[0][0] + et(t, i),
      e[0][1] + et(t, i)
    ]);
    for (let n = 1; n < e.length; n++)
      r.push([
        e[n][0] + et(t, i),
        e[n][1] + et(t, i)
      ]), n === e.length - 1 && r.push([
        e[n][0] + et(t, i),
        e[n][1] + et(t, i)
      ]);
    return bn(r, null, i);
  }
  function bn(e, t, i) {
    const r = e.length, n = [];
    if (r > 3) {
      const o = [], s = 1 - i.curveTightness;
      n.push({
        op: "move",
        data: [
          e[1][0],
          e[1][1]
        ]
      });
      for (let a = 1; a + 2 < r; a++) {
        const l = e[a];
        o[0] = [
          l[0],
          l[1]
        ], o[1] = [
          l[0] + (s * e[a + 1][0] - s * e[a - 1][0]) / 6,
          l[1] + (s * e[a + 1][1] - s * e[a - 1][1]) / 6
        ], o[2] = [
          e[a + 1][0] + (s * e[a][0] - s * e[a + 2][0]) / 6,
          e[a + 1][1] + (s * e[a][1] - s * e[a + 2][1]) / 6
        ], o[3] = [
          e[a + 1][0],
          e[a + 1][1]
        ], n.push({
          op: "bcurveTo",
          data: [
            o[1][0],
            o[1][1],
            o[2][0],
            o[2][1],
            o[3][0],
            o[3][1]
          ]
        });
      }
    } else
      r === 3 ? (n.push({
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
      })) : r === 2 && n.push(...ua(e[0][0], e[0][1], e[1][0], e[1][1], i, true, true));
    return n;
  }
  function Nl(e, t, i, r, n, o, s, a) {
    const l = [], c = [];
    if (a.roughness === 0) {
      e /= 4, c.push([
        t + r * Math.cos(-e),
        i + n * Math.sin(-e)
      ]);
      for (let h = 0; h <= 2 * Math.PI; h += e) {
        const d = [
          t + r * Math.cos(h),
          i + n * Math.sin(h)
        ];
        l.push(d), c.push(d);
      }
      c.push([
        t + r * Math.cos(0),
        i + n * Math.sin(0)
      ]), c.push([
        t + r * Math.cos(e),
        i + n * Math.sin(e)
      ]);
    } else {
      const h = et(0.5, a) - Math.PI / 2;
      c.push([
        et(o, a) + t + 0.9 * r * Math.cos(h - e),
        et(o, a) + i + 0.9 * n * Math.sin(h - e)
      ]);
      const d = 2 * Math.PI + h - 0.01;
      for (let u = h; u < d; u += e) {
        const p = [
          et(o, a) + t + r * Math.cos(u),
          et(o, a) + i + n * Math.sin(u)
        ];
        l.push(p), c.push(p);
      }
      c.push([
        et(o, a) + t + r * Math.cos(h + 2 * Math.PI + 0.5 * s),
        et(o, a) + i + n * Math.sin(h + 2 * Math.PI + 0.5 * s)
      ]), c.push([
        et(o, a) + t + 0.98 * r * Math.cos(h + s),
        et(o, a) + i + 0.98 * n * Math.sin(h + s)
      ]), c.push([
        et(o, a) + t + 0.9 * r * Math.cos(h + 0.5 * s),
        et(o, a) + i + 0.9 * n * Math.sin(h + 0.5 * s)
      ]);
    }
    return [
      c,
      l
    ];
  }
  function ql(e, t, i, r, n, o, s, a, l) {
    const c = o + et(0.1, l), h = [];
    h.push([
      et(a, l) + t + 0.9 * r * Math.cos(c - e),
      et(a, l) + i + 0.9 * n * Math.sin(c - e)
    ]);
    for (let d = c; d <= s; d += e)
      h.push([
        et(a, l) + t + r * Math.cos(d),
        et(a, l) + i + n * Math.sin(d)
      ]);
    return h.push([
      t + r * Math.cos(s),
      i + n * Math.sin(s)
    ]), h.push([
      t + r * Math.cos(s),
      i + n * Math.sin(s)
    ]), bn(h, null, l);
  }
  function B2(e, t, i, r, n, o, s, a) {
    const l = [], c = [
      a.maxRandomnessOffset || 1,
      (a.maxRandomnessOffset || 1) + 0.3
    ];
    let h = [
      0,
      0
    ];
    const d = a.disableMultiStroke ? 1 : 2, u = a.preserveVertices;
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
          s[0] + (u ? 0 : et(c[0], a)),
          s[1] + (u ? 0 : et(c[0], a))
        ]
      }), h = u ? [
        n,
        o
      ] : [
        n + et(c[p], a),
        o + et(c[p], a)
      ], l.push({
        op: "bcurveTo",
        data: [
          e + et(c[p], a),
          t + et(c[p], a),
          i + et(c[p], a),
          r + et(c[p], a),
          h[0],
          h[1]
        ]
      });
    return l;
  }
  function Vi(e) {
    return [
      ...e
    ];
  }
  function Wl(e, t = 0) {
    const i = e.length;
    if (i < 3)
      throw new Error("A curve must have at least three points.");
    const r = [];
    if (i === 3)
      r.push(Vi(e[0]), Vi(e[1]), Vi(e[2]), Vi(e[2]));
    else {
      const n = [];
      n.push(e[0], e[0]);
      for (let a = 1; a < e.length; a++)
        n.push(e[a]), a === e.length - 1 && n.push(e[a]);
      const o = [], s = 1 - t;
      r.push(Vi(n[0]));
      for (let a = 1; a + 2 < n.length; a++) {
        const l = n[a];
        o[0] = [
          l[0],
          l[1]
        ], o[1] = [
          l[0] + (s * n[a + 1][0] - s * n[a - 1][0]) / 6,
          l[1] + (s * n[a + 1][1] - s * n[a - 1][1]) / 6
        ], o[2] = [
          n[a + 1][0] + (s * n[a][0] - s * n[a + 2][0]) / 6,
          n[a + 1][1] + (s * n[a][1] - s * n[a + 2][1]) / 6
        ], o[3] = [
          n[a + 1][0],
          n[a + 1][1]
        ], r.push(o[1], o[2], o[3]);
      }
    }
    return r;
  }
  function Hr(e, t) {
    return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2);
  }
  function M2(e, t, i) {
    const r = Hr(t, i);
    if (r === 0)
      return Hr(e, t);
    let n = ((e[0] - t[0]) * (i[0] - t[0]) + (e[1] - t[1]) * (i[1] - t[1])) / r;
    return n = Math.max(0, Math.min(1, n)), Hr(e, He(t, i, n));
  }
  function He(e, t, i) {
    return [
      e[0] + (t[0] - e[0]) * i,
      e[1] + (t[1] - e[1]) * i
    ];
  }
  function pa(e, t, i, r) {
    const n = r || [];
    if (function(a, l) {
      const c = a[l + 0], h = a[l + 1], d = a[l + 2], u = a[l + 3];
      let p = 3 * h[0] - 2 * c[0] - u[0];
      p *= p;
      let f = 3 * h[1] - 2 * c[1] - u[1];
      f *= f;
      let m = 3 * d[0] - 2 * u[0] - c[0];
      m *= m;
      let y = 3 * d[1] - 2 * u[1] - c[1];
      return y *= y, p < m && (p = m), f < y && (f = y), p + f;
    }(e, t) < i) {
      const a = e[t + 0];
      n.length ? (o = n[n.length - 1], s = a, Math.sqrt(Hr(o, s)) > 1 && n.push(a)) : n.push(a), n.push(e[t + 3]);
    } else {
      const a = e[t + 0], l = e[t + 1], c = e[t + 2], h = e[t + 3], d = He(a, l, 0.5), u = He(l, c, 0.5), p = He(c, h, 0.5), f = He(d, u, 0.5), m = He(u, p, 0.5), y = He(f, m, 0.5);
      pa([
        a,
        d,
        f,
        y
      ], 0, i, n), pa([
        y,
        m,
        p,
        h
      ], 0, i, n);
    }
    var o, s;
    return n;
  }
  function L2(e, t) {
    return kn(e, 0, e.length, t);
  }
  function kn(e, t, i, r, n) {
    const o = n || [], s = e[t], a = e[i - 1];
    let l = 0, c = 1;
    for (let h = t + 1; h < i - 1; ++h) {
      const d = M2(e[h], s, a);
      d > l && (l = d, c = h);
    }
    return Math.sqrt(l) > r ? (kn(e, t, c + 1, r, o), kn(e, c, i, r, o)) : (o.length || o.push(s), o.push(a)), o;
  }
  function Mo(e, t = 0.15, i) {
    const r = [], n = (e.length - 1) / 3;
    for (let o = 0; o < n; o++)
      pa(e, 3 * o, t, r);
    return i && i > 0 ? kn(r, 0, r.length, i) : r;
  }
  const Yt = "none";
  class Cn {
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
    _d(t, i, r) {
      return {
        shape: t,
        sets: i || [],
        options: r || this.defaultOptions
      };
    }
    line(t, i, r, n, o) {
      const s = this._o(o);
      return this._d("line", [
        Iu(t, i, r, n, s)
      ], s);
    }
    rectangle(t, i, r, n, o) {
      const s = this._o(o), a = [], l = T2(t, i, r, n, s);
      if (s.fill) {
        const c = [
          [
            t,
            i
          ],
          [
            t + r,
            i
          ],
          [
            t + r,
            i + n
          ],
          [
            t,
            i + n
          ]
        ];
        s.fillStyle === "solid" ? a.push(Bo([
          c
        ], s)) : a.push(pi([
          c
        ], s));
      }
      return s.stroke !== Yt && a.push(l), this._d("rectangle", a, s);
    }
    ellipse(t, i, r, n, o) {
      const s = this._o(o), a = [], l = zu(r, n, s), c = da(t, i, s, l);
      if (s.fill)
        if (s.fillStyle === "solid") {
          const h = da(t, i, s, l).opset;
          h.type = "fillPath", a.push(h);
        } else
          a.push(pi([
            c.estimatedPoints
          ], s));
      return s.stroke !== Yt && a.push(c.opset), this._d("ellipse", a, s);
    }
    circle(t, i, r, n) {
      const o = this.ellipse(t, i, r, r, n);
      return o.shape = "circle", o;
    }
    linearPath(t, i) {
      const r = this._o(i);
      return this._d("linearPath", [
        jr(t, false, r)
      ], r);
    }
    arc(t, i, r, n, o, s, a = false, l) {
      const c = this._o(l), h = [], d = zl(t, i, r, n, o, s, a, true, c);
      if (a && c.fill)
        if (c.fillStyle === "solid") {
          const u = Object.assign({}, c);
          u.disableMultiStroke = true;
          const p = zl(t, i, r, n, o, s, true, false, u);
          p.type = "fillPath", h.push(p);
        } else
          h.push(function(u, p, f, m, y, x, b) {
            const C = u, w = p;
            let k = Math.abs(f / 2), _ = Math.abs(m / 2);
            k += et(0.01 * k, b), _ += et(0.01 * _, b);
            let B = y, I = x;
            for (; B < 0; )
              B += 2 * Math.PI, I += 2 * Math.PI;
            I - B > 2 * Math.PI && (B = 0, I = 2 * Math.PI);
            const z = (I - B) / b.curveStepCount, O = [];
            for (let F = B; F <= I; F += z)
              O.push([
                C + k * Math.cos(F),
                w + _ * Math.sin(F)
              ]);
            return O.push([
              C + k * Math.cos(I),
              w + _ * Math.sin(I)
            ]), O.push([
              C,
              w
            ]), pi([
              O
            ], b);
          }(t, i, r, n, o, s, c));
      return c.stroke !== Yt && h.push(d), this._d("arc", h, c);
    }
    curve(t, i) {
      const r = this._o(i), n = [], o = Il(t, r);
      if (r.fill && r.fill !== Yt)
        if (r.fillStyle === "solid") {
          const s = Il(t, Object.assign(Object.assign({}, r), {
            disableMultiStroke: true,
            roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0
          }));
          n.push({
            type: "fillPath",
            ops: this._mergedShape(s.ops)
          });
        } else {
          const s = [], a = t;
          if (a.length) {
            const l = typeof a[0][0] == "number" ? [
              a
            ] : a;
            for (const c of l)
              c.length < 3 ? s.push(...c) : c.length === 3 ? s.push(...Mo(Wl([
                c[0],
                c[0],
                c[1],
                c[2]
              ]), 10, (1 + r.roughness) / 2)) : s.push(...Mo(Wl(c), 10, (1 + r.roughness) / 2));
          }
          s.length && n.push(pi([
            s
          ], r));
        }
      return r.stroke !== Yt && n.push(o), this._d("curve", n, r);
    }
    polygon(t, i) {
      const r = this._o(i), n = [], o = jr(t, true, r);
      return r.fill && (r.fillStyle === "solid" ? n.push(Bo([
        t
      ], r)) : n.push(pi([
        t
      ], r))), r.stroke !== Yt && n.push(o), this._d("polygon", n, r);
    }
    path(t, i) {
      const r = this._o(i), n = [];
      if (!t)
        return this._d("path", n, r);
      t = (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
      const o = r.fill && r.fill !== "transparent" && r.fill !== Yt, s = r.stroke !== Yt, a = !!(r.simplification && r.simplification < 1), l = function(h, d, u) {
        const p = Ou($u(us(h))), f = [];
        let m = [], y = [
          0,
          0
        ], x = [];
        const b = () => {
          x.length >= 4 && m.push(...Mo(x, d)), x = [];
        }, C = () => {
          b(), m.length && (f.push(m), m = []);
        };
        for (const { key: k, data: _ } of p)
          switch (k) {
            case "M":
              C(), y = [
                _[0],
                _[1]
              ], m.push(y);
              break;
            case "L":
              b(), m.push([
                _[0],
                _[1]
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
                _[0],
                _[1]
              ]), x.push([
                _[2],
                _[3]
              ]), x.push([
                _[4],
                _[5]
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
        const w = [];
        for (const k of f) {
          const _ = L2(k, u);
          _.length && w.push(_);
        }
        return w;
      }(t, 1, a ? 4 - 4 * (r.simplification || 1) : (1 + r.roughness) / 2), c = Pl(t, r);
      if (o)
        if (r.fillStyle === "solid")
          if (l.length === 1) {
            const h = Pl(t, Object.assign(Object.assign({}, r), {
              disableMultiStroke: true,
              roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0
            }));
            n.push({
              type: "fillPath",
              ops: this._mergedShape(h.ops)
            });
          } else
            n.push(Bo(l, r));
        else
          n.push(pi(l, r));
      return s && (a ? l.forEach((h) => {
        n.push(jr(h, false, r));
      }) : n.push(c)), this._d("path", n, r);
    }
    opsToPath(t, i) {
      let r = "";
      for (const n of t.ops) {
        const o = typeof i == "number" && i >= 0 ? n.data.map((s) => +s.toFixed(i)) : n.data;
        switch (n.op) {
          case "move":
            r += `M${o[0]} ${o[1]} `;
            break;
          case "bcurveTo":
            r += `C${o[0]} ${o[1]}, ${o[2]} ${o[3]}, ${o[4]} ${o[5]} `;
            break;
          case "lineTo":
            r += `L${o[0]} ${o[1]} `;
        }
      }
      return r.trim();
    }
    toPaths(t) {
      const i = t.sets || [], r = t.options || this.defaultOptions, n = [];
      for (const o of i) {
        let s = null;
        switch (o.type) {
          case "path":
            s = {
              d: this.opsToPath(o),
              stroke: r.stroke,
              strokeWidth: r.strokeWidth,
              fill: Yt
            };
            break;
          case "fillPath":
            s = {
              d: this.opsToPath(o),
              stroke: Yt,
              strokeWidth: 0,
              fill: r.fill || Yt
            };
            break;
          case "fillSketch":
            s = this.fillSketch(o, r);
        }
        s && n.push(s);
      }
      return n;
    }
    fillSketch(t, i) {
      let r = i.fillWeight;
      return r < 0 && (r = i.strokeWidth / 2), {
        d: this.opsToPath(t),
        stroke: i.fill || Yt,
        strokeWidth: r,
        fill: Yt
      };
    }
    _mergedShape(t) {
      return t.filter((i, r) => r === 0 || i.op !== "move");
    }
  }
  class A2 {
    constructor(t, i) {
      this.canvas = t, this.ctx = this.canvas.getContext("2d"), this.gen = new Cn(i);
    }
    draw(t) {
      const i = t.sets || [], r = t.options || this.getDefaultOptions(), n = this.ctx, o = t.options.fixedDecimalPlaceDigits;
      for (const s of i)
        switch (s.type) {
          case "path":
            n.save(), n.strokeStyle = r.stroke === "none" ? "transparent" : r.stroke, n.lineWidth = r.strokeWidth, r.strokeLineDash && n.setLineDash(r.strokeLineDash), r.strokeLineDashOffset && (n.lineDashOffset = r.strokeLineDashOffset), this._drawToContext(n, s, o), n.restore();
            break;
          case "fillPath": {
            n.save(), n.fillStyle = r.fill || "";
            const a = t.shape === "curve" || t.shape === "polygon" || t.shape === "path" ? "evenodd" : "nonzero";
            this._drawToContext(n, s, o, a), n.restore();
            break;
          }
          case "fillSketch":
            this.fillSketch(n, s, r);
        }
    }
    fillSketch(t, i, r) {
      let n = r.fillWeight;
      n < 0 && (n = r.strokeWidth / 2), t.save(), r.fillLineDash && t.setLineDash(r.fillLineDash), r.fillLineDashOffset && (t.lineDashOffset = r.fillLineDashOffset), t.strokeStyle = r.fill || "", t.lineWidth = n, this._drawToContext(t, i, r.fixedDecimalPlaceDigits), t.restore();
    }
    _drawToContext(t, i, r, n = "nonzero") {
      t.beginPath();
      for (const o of i.ops) {
        const s = typeof r == "number" && r >= 0 ? o.data.map((a) => +a.toFixed(r)) : o.data;
        switch (o.op) {
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
      i.type === "fillPath" ? t.fill(n) : t.stroke();
    }
    get generator() {
      return this.gen;
    }
    getDefaultOptions() {
      return this.gen.defaultOptions;
    }
    line(t, i, r, n, o) {
      const s = this.gen.line(t, i, r, n, o);
      return this.draw(s), s;
    }
    rectangle(t, i, r, n, o) {
      const s = this.gen.rectangle(t, i, r, n, o);
      return this.draw(s), s;
    }
    ellipse(t, i, r, n, o) {
      const s = this.gen.ellipse(t, i, r, n, o);
      return this.draw(s), s;
    }
    circle(t, i, r, n) {
      const o = this.gen.circle(t, i, r, n);
      return this.draw(o), o;
    }
    linearPath(t, i) {
      const r = this.gen.linearPath(t, i);
      return this.draw(r), r;
    }
    polygon(t, i) {
      const r = this.gen.polygon(t, i);
      return this.draw(r), r;
    }
    arc(t, i, r, n, o, s, a = false, l) {
      const c = this.gen.arc(t, i, r, n, o, s, a, l);
      return this.draw(c), c;
    }
    curve(t, i) {
      const r = this.gen.curve(t, i);
      return this.draw(r), r;
    }
    path(t, i) {
      const r = this.gen.path(t, i);
      return this.draw(r), r;
    }
  }
  const $r = "http://www.w3.org/2000/svg";
  class F2 {
    constructor(t, i) {
      this.svg = t, this.gen = new Cn(i);
    }
    draw(t) {
      const i = t.sets || [], r = t.options || this.getDefaultOptions(), n = this.svg.ownerDocument || window.document, o = n.createElementNS($r, "g"), s = t.options.fixedDecimalPlaceDigits;
      for (const a of i) {
        let l = null;
        switch (a.type) {
          case "path":
            l = n.createElementNS($r, "path"), l.setAttribute("d", this.opsToPath(a, s)), l.setAttribute("stroke", r.stroke), l.setAttribute("stroke-width", r.strokeWidth + ""), l.setAttribute("fill", "none"), r.strokeLineDash && l.setAttribute("stroke-dasharray", r.strokeLineDash.join(" ").trim()), r.strokeLineDashOffset && l.setAttribute("stroke-dashoffset", `${r.strokeLineDashOffset}`);
            break;
          case "fillPath":
            l = n.createElementNS($r, "path"), l.setAttribute("d", this.opsToPath(a, s)), l.setAttribute("stroke", "none"), l.setAttribute("stroke-width", "0"), l.setAttribute("fill", r.fill || ""), t.shape !== "curve" && t.shape !== "polygon" || l.setAttribute("fill-rule", "evenodd");
            break;
          case "fillSketch":
            l = this.fillSketch(n, a, r);
        }
        l && o.appendChild(l);
      }
      return o;
    }
    fillSketch(t, i, r) {
      let n = r.fillWeight;
      n < 0 && (n = r.strokeWidth / 2);
      const o = t.createElementNS($r, "path");
      return o.setAttribute("d", this.opsToPath(i, r.fixedDecimalPlaceDigits)), o.setAttribute("stroke", r.fill || ""), o.setAttribute("stroke-width", n + ""), o.setAttribute("fill", "none"), r.fillLineDash && o.setAttribute("stroke-dasharray", r.fillLineDash.join(" ").trim()), r.fillLineDashOffset && o.setAttribute("stroke-dashoffset", `${r.fillLineDashOffset}`), o;
    }
    get generator() {
      return this.gen;
    }
    getDefaultOptions() {
      return this.gen.defaultOptions;
    }
    opsToPath(t, i) {
      return this.gen.opsToPath(t, i);
    }
    line(t, i, r, n, o) {
      const s = this.gen.line(t, i, r, n, o);
      return this.draw(s);
    }
    rectangle(t, i, r, n, o) {
      const s = this.gen.rectangle(t, i, r, n, o);
      return this.draw(s);
    }
    ellipse(t, i, r, n, o) {
      const s = this.gen.ellipse(t, i, r, n, o);
      return this.draw(s);
    }
    circle(t, i, r, n) {
      const o = this.gen.circle(t, i, r, n);
      return this.draw(o);
    }
    linearPath(t, i) {
      const r = this.gen.linearPath(t, i);
      return this.draw(r);
    }
    polygon(t, i) {
      const r = this.gen.polygon(t, i);
      return this.draw(r);
    }
    arc(t, i, r, n, o, s, a = false, l) {
      const c = this.gen.arc(t, i, r, n, o, s, a, l);
      return this.draw(c);
    }
    curve(t, i) {
      const r = this.gen.curve(t, i);
      return this.draw(r);
    }
    path(t, i) {
      const r = this.gen.path(t, i);
      return this.draw(r);
    }
  }
  let Z, ot, Lo, it;
  Z = {
    canvas: (e, t) => new A2(e, t),
    svg: (e, t) => new F2(e, t),
    generator: (e) => new Cn(e),
    newSeed: () => Cn.newSeed()
  };
  ot = g(async (e, t, i) => {
    var r, n;
    let o;
    const s = t.useHtmlLabels || vt((r = ct()) == null ? void 0 : r.htmlLabels);
    i ? o = i : o = "node default";
    const a = e.insert("g").attr("class", o).attr("id", t.domId || t.id), l = a.insert("g").attr("class", "label").attr("style", qt(t.labelStyle));
    let c;
    t.label === void 0 ? c = "" : c = typeof t.label == "string" ? t.label : t.label[0];
    const h = await Ne(l, Xe(ni(c), ct()), {
      useHtmlLabels: s,
      width: t.width || ((n = ct().flowchart) == null ? void 0 : n.wrappingWidth),
      cssClasses: "markdown-node-label",
      style: t.labelStyle,
      addSvgBackground: !!t.icon || !!t.img
    });
    let d = h.getBBox();
    const u = ((t == null ? void 0 : t.padding) ?? 0) / 2;
    if (s) {
      const p = h.children[0], f = st(h), m = p.getElementsByTagName("img");
      if (m) {
        const y = c.replace(/<img[^>]*>/g, "").trim() === "";
        await Promise.all([
          ...m
        ].map((x) => new Promise((b) => {
          function C() {
            if (x.style.display = "flex", x.style.flexDirection = "column", y) {
              const w = ct().fontSize ? ct().fontSize : window.getComputedStyle(document.body).fontSize, k = 5, [_ = Ah.fontSize] = Pn(w), B = _ * k + "px";
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
      shapeSvg: a,
      bbox: d,
      halfPadding: u,
      label: l
    };
  }, "labelHelper");
  Lo = g(async (e, t, i) => {
    var r, n, o, s, a, l;
    const c = i.useHtmlLabels || vt((n = (r = ct()) == null ? void 0 : r.flowchart) == null ? void 0 : n.htmlLabels), h = e.insert("g").attr("class", "label").attr("style", i.labelStyle || ""), d = await Ne(h, Xe(ni(t), ct()), {
      useHtmlLabels: c,
      width: i.width || ((s = (o = ct()) == null ? void 0 : o.flowchart) == null ? void 0 : s.wrappingWidth),
      style: i.labelStyle,
      addSvgBackground: !!i.icon || !!i.img
    });
    let u = d.getBBox();
    const p = i.padding / 2;
    if (vt((l = (a = ct()) == null ? void 0 : a.flowchart) == null ? void 0 : l.htmlLabels)) {
      const f = d.children[0], m = st(d);
      u = f.getBoundingClientRect(), m.attr("width", u.width), m.attr("height", u.height);
    }
    return c ? h.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")") : h.attr("transform", "translate(0, " + -u.height / 2 + ")"), i.centerLabel && h.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")"), h.insert("rect", ":first-child"), {
      shapeSvg: e,
      bbox: u,
      halfPadding: p,
      label: h
    };
  }, "insertLabel");
  Y = g((e, t) => {
    const i = t.node().getBBox();
    e.width = i.width, e.height = i.height;
  }, "updateNodeBounds");
  it = g((e, t) => (e.look === "handDrawn" ? "rough-node" : "node") + " " + e.cssClasses + " " + (t || ""), "getNodeClasses");
  function lt(e) {
    const t = e.map((i, r) => `${r === 0 ? "M" : "L"}${i.x},${i.y}`);
    return t.push("Z"), t.join(" ");
  }
  g(lt, "createPathFromPoints");
  function Pe(e, t, i, r, n, o) {
    const s = [], a = i - e, l = r - t, c = a / o, h = 2 * Math.PI / c, d = t + l / 2;
    for (let u = 0; u <= 50; u++) {
      const p = u / 50, f = e + p * a, m = d + n * Math.sin(h * (f - e));
      s.push({
        x: f,
        y: m
      });
    }
    return s;
  }
  g(Pe, "generateFullSineWavePoints");
  function ps(e, t, i, r, n, o) {
    const s = [], a = n * Math.PI / 180, l = (o * Math.PI / 180 - a) / (r - 1);
    for (let c = 0; c < r; c++) {
      const h = a + c * l, d = e + i * Math.cos(h), u = t + i * Math.sin(h);
      s.push({
        x: -d,
        y: -u
      });
    }
    return s;
  }
  g(ps, "generateCirclePoints");
  var E2 = g((e, t) => {
    var i = e.x, r = e.y, n = t.x - i, o = t.y - r, s = e.width / 2, a = e.height / 2, l, c;
    return Math.abs(o) * s > Math.abs(n) * a ? (o < 0 && (a = -a), l = o === 0 ? 0 : a * n / o, c = a) : (n < 0 && (s = -s), l = s, c = n === 0 ? 0 : s * o / n), {
      x: i + l,
      y: r + c
    };
  }, "intersectRect"), Fi = E2;
  function Ru(e, t) {
    t && e.attr("style", t);
  }
  g(Ru, "applyStyle");
  async function Nu(e) {
    const t = st(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), i = t.append("xhtml:div");
    let r = e.label;
    e.label && wi(e.label) && (r = await Ta(e.label.replace(Mi.lineBreakRegex, `
`), ct()));
    const n = e.isNode ? "nodeLabel" : "edgeLabel";
    return i.html('<span class="' + n + '" ' + (e.labelStyle ? 'style="' + e.labelStyle + '"' : "") + ">" + r + "</span>"), Ru(i, e.labelStyle), i.style("display", "inline-block"), i.style("padding-right", "1px"), i.style("white-space", "nowrap"), i.attr("xmlns", "http://www.w3.org/1999/xhtml"), t.node();
  }
  g(Nu, "addHtmlLabel");
  let $2, Ge, Ae, O2, Ei, D2, qu, G, V, Wu, I2, z2, P2, R2, N2, q2, ju;
  $2 = g(async (e, t, i, r) => {
    let n = e || "";
    if (typeof n == "object" && (n = n[0]), vt(ct().flowchart.htmlLabels)) {
      n = n.replace(/\\n|\n/g, "<br />"), $.info("vertexText" + n);
      const o = {
        isNode: r,
        label: ni(n).replace(/fa[blrs]?:fa-[\w-]+/g, (s) => `<i class='${s.replace(":", " ")}'></i>`),
        labelStyle: t && t.replace("fill:", "color:")
      };
      return await Nu(o);
    } else {
      const o = document.createElementNS("http://www.w3.org/2000/svg", "text");
      o.setAttribute("style", t.replace("color:", "fill:"));
      let s = [];
      typeof n == "string" ? s = n.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(n) ? s = n : s = [];
      for (const a of s) {
        const l = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), l.setAttribute("dy", "1em"), l.setAttribute("x", "0"), i ? l.setAttribute("class", "title-row") : l.setAttribute("class", "row"), l.textContent = a.trim(), o.appendChild(l);
      }
      return o;
    }
  }, "createLabel");
  Ge = $2;
  Ae = g((e, t, i, r, n) => [
    "M",
    e + n,
    t,
    "H",
    e + i - n,
    "A",
    n,
    n,
    0,
    0,
    1,
    e + i,
    t + n,
    "V",
    t + r - n,
    "A",
    n,
    n,
    0,
    0,
    1,
    e + i - n,
    t + r,
    "H",
    e + n,
    "A",
    n,
    n,
    0,
    0,
    1,
    e,
    t + r - n,
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
  O2 = g((e) => {
    const { handDrawnSeed: t } = ct();
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
  Ei = g((e) => {
    const t = D2([
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
  D2 = g((e) => {
    const t = /* @__PURE__ */ new Map();
    return e.forEach((i) => {
      const [r, n] = i.split(":");
      t.set(r.trim(), n == null ? void 0 : n.trim());
    }), t;
  }, "styles2Map");
  qu = g((e) => e === "color" || e === "font-size" || e === "font-family" || e === "font-weight" || e === "font-style" || e === "text-decoration" || e === "text-align" || e === "text-transform" || e === "line-height" || e === "letter-spacing" || e === "word-spacing" || e === "text-shadow" || e === "text-overflow" || e === "white-space" || e === "word-wrap" || e === "word-break" || e === "overflow-wrap" || e === "hyphens", "isLabelStyle");
  G = g((e) => {
    const { stylesArray: t } = Ei(e), i = [], r = [], n = [], o = [];
    return t.forEach((s) => {
      const a = s[0];
      qu(a) ? i.push(s.join(":") + " !important") : (r.push(s.join(":") + " !important"), a.includes("stroke") && n.push(s.join(":") + " !important"), a === "fill" && o.push(s.join(":") + " !important"));
    }), {
      labelStyles: i.join(";"),
      nodeStyles: r.join(";"),
      stylesArray: t,
      borderStyles: n,
      backgroundStyles: o
    };
  }, "styles2String");
  V = g((e, t) => {
    var i;
    const { themeVariables: r, handDrawnSeed: n } = ct(), { nodeBorder: o, mainBkg: s } = r, { stylesMap: a } = Ei(e);
    return Object.assign({
      roughness: 0.7,
      fill: a.get("fill") || s,
      fillStyle: "hachure",
      fillWeight: 4,
      hachureGap: 5.2,
      stroke: a.get("stroke") || o,
      seed: n,
      strokeWidth: ((i = a.get("stroke-width")) == null ? void 0 : i.replace("px", "")) || 1.3,
      fillLineDash: [
        0,
        0
      ]
    }, t);
  }, "userNodeOverrides");
  Wu = g(async (e, t) => {
    $.info("Creating subgraph rect for ", t.id, t);
    const i = ct(), { themeVariables: r, handDrawnSeed: n } = i, { clusterBkg: o, clusterBorder: s } = r, { labelStyles: a, nodeStyles: l, borderStyles: c, backgroundStyles: h } = G(t), d = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), u = vt(i.flowchart.htmlLabels), p = d.insert("g").attr("class", "cluster-label "), f = await Ne(p, t.label, {
      style: t.labelStyle,
      useHtmlLabels: u,
      isNode: true
    });
    let m = f.getBBox();
    if (vt(i.flowchart.htmlLabels)) {
      const B = f.children[0], I = st(f);
      m = B.getBoundingClientRect(), I.attr("width", m.width), I.attr("height", m.height);
    }
    const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
    t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
    const x = t.height, b = t.x - y / 2, C = t.y - x / 2;
    $.trace("Data ", t, JSON.stringify(t));
    let w;
    if (t.look === "handDrawn") {
      const B = Z.svg(d), I = V(t, {
        roughness: 0.7,
        fill: o,
        stroke: s,
        fillWeight: 3,
        seed: n
      }), z = B.path(Ae(b, C, y, x, 0), I);
      w = d.insert(() => ($.debug("Rough node insert CXC", z), z), ":first-child"), w.select("path:nth-child(2)").attr("style", c.join(";")), w.select("path").attr("style", h.join(";").replace("fill", "stroke"));
    } else
      w = d.insert("rect", ":first-child"), w.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", C).attr("width", y).attr("height", x);
    const { subGraphTitleTopMargin: k } = Ra(i);
    if (p.attr("transform", `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + k})`), a) {
      const B = p.select("span");
      B && B.attr("style", a);
    }
    const _ = w.node().getBBox();
    return t.offsetX = 0, t.width = _.width, t.height = _.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(B) {
      return Fi(t, B);
    }, {
      cluster: d,
      labelBBox: m
    };
  }, "rect");
  I2 = g((e, t) => {
    const i = e.insert("g").attr("class", "note-cluster").attr("id", t.id), r = i.insert("rect", ":first-child"), n = 0 * t.padding, o = n / 2;
    r.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - o).attr("y", t.y - t.height / 2 - o).attr("width", t.width + n).attr("height", t.height + n).attr("fill", "none");
    const s = r.node().getBBox();
    return t.width = s.width, t.height = s.height, t.intersect = function(a) {
      return Fi(t, a);
    }, {
      cluster: i,
      labelBBox: {
        width: 0,
        height: 0
      }
    };
  }, "noteGroup");
  z2 = g(async (e, t) => {
    const i = ct(), { themeVariables: r, handDrawnSeed: n } = i, { altBackground: o, compositeBackground: s, compositeTitleBackground: a, nodeBorder: l } = r, c = e.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-id", t.id).attr("data-look", t.look), h = c.insert("g", ":first-child"), d = c.insert("g").attr("class", "cluster-label");
    let u = c.append("rect");
    const p = d.node().appendChild(await Ge(t.label, t.labelStyle, void 0, true));
    let f = p.getBBox();
    if (vt(i.flowchart.htmlLabels)) {
      const z = p.children[0], O = st(p);
      f = z.getBoundingClientRect(), O.attr("width", f.width), O.attr("height", f.height);
    }
    const m = 0 * t.padding, y = m / 2, x = (t.width <= f.width + t.padding ? f.width + t.padding : t.width) + m;
    t.width <= f.width + t.padding ? t.diff = (x - t.width) / 2 - t.padding : t.diff = -t.padding;
    const b = t.height + m, C = t.height + m - f.height - 6, w = t.x - x / 2, k = t.y - b / 2;
    t.width = x;
    const _ = t.y - t.height / 2 - y + f.height + 2;
    let B;
    if (t.look === "handDrawn") {
      const z = t.cssClasses.includes("statediagram-cluster-alt"), O = Z.svg(c), F = t.rx || t.ry ? O.path(Ae(w, k, x, b, 10), {
        roughness: 0.7,
        fill: a,
        fillStyle: "solid",
        stroke: l,
        seed: n
      }) : O.rectangle(w, k, x, b, {
        seed: n
      });
      B = c.insert(() => F, ":first-child");
      const N = O.rectangle(w, _, x, C, {
        fill: z ? o : s,
        fillStyle: z ? "hachure" : "solid",
        stroke: l,
        seed: n
      });
      B = c.insert(() => F, ":first-child"), u = c.insert(() => N);
    } else
      B = h.insert("rect", ":first-child"), B.attr("class", "outer").attr("x", w).attr("y", k).attr("width", x).attr("height", b).attr("data-look", t.look), u.attr("class", "inner").attr("x", w).attr("y", _).attr("width", x).attr("height", C);
    d.attr("transform", `translate(${t.x - f.width / 2}, ${k + 1 - (vt(i.flowchart.htmlLabels) ? 0 : 3)})`);
    const I = B.node().getBBox();
    return t.height = I.height, t.offsetX = 0, t.offsetY = f.height - t.padding / 2, t.labelBBox = f, t.intersect = function(z) {
      return Fi(t, z);
    }, {
      cluster: c,
      labelBBox: f
    };
  }, "roundedWithTitle");
  P2 = g(async (e, t) => {
    $.info("Creating subgraph rect for ", t.id, t);
    const i = ct(), { themeVariables: r, handDrawnSeed: n } = i, { clusterBkg: o, clusterBorder: s } = r, { labelStyles: a, nodeStyles: l, borderStyles: c, backgroundStyles: h } = G(t), d = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), u = vt(i.flowchart.htmlLabels), p = d.insert("g").attr("class", "cluster-label "), f = await Ne(p, t.label, {
      style: t.labelStyle,
      useHtmlLabels: u,
      isNode: true,
      width: t.width
    });
    let m = f.getBBox();
    if (vt(i.flowchart.htmlLabels)) {
      const B = f.children[0], I = st(f);
      m = B.getBoundingClientRect(), I.attr("width", m.width), I.attr("height", m.height);
    }
    const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
    t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
    const x = t.height, b = t.x - y / 2, C = t.y - x / 2;
    $.trace("Data ", t, JSON.stringify(t));
    let w;
    if (t.look === "handDrawn") {
      const B = Z.svg(d), I = V(t, {
        roughness: 0.7,
        fill: o,
        stroke: s,
        fillWeight: 4,
        seed: n
      }), z = B.path(Ae(b, C, y, x, t.rx), I);
      w = d.insert(() => ($.debug("Rough node insert CXC", z), z), ":first-child"), w.select("path:nth-child(2)").attr("style", c.join(";")), w.select("path").attr("style", h.join(";").replace("fill", "stroke"));
    } else
      w = d.insert("rect", ":first-child"), w.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", C).attr("width", y).attr("height", x);
    const { subGraphTitleTopMargin: k } = Ra(i);
    if (p.attr("transform", `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + k})`), a) {
      const B = p.select("span");
      B && B.attr("style", a);
    }
    const _ = w.node().getBBox();
    return t.offsetX = 0, t.width = _.width, t.height = _.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(B) {
      return Fi(t, B);
    }, {
      cluster: d,
      labelBBox: m
    };
  }, "kanbanSection");
  R2 = g((e, t) => {
    const i = ct(), { themeVariables: r, handDrawnSeed: n } = i, { nodeBorder: o } = r, s = e.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-look", t.look), a = s.insert("g", ":first-child"), l = 0 * t.padding, c = t.width + l;
    t.diff = -t.padding;
    const h = t.height + l, d = t.x - c / 2, u = t.y - h / 2;
    t.width = c;
    let p;
    if (t.look === "handDrawn") {
      const m = Z.svg(s).rectangle(d, u, c, h, {
        fill: "lightgrey",
        roughness: 0.5,
        strokeLineDash: [
          5
        ],
        stroke: o,
        seed: n
      });
      p = s.insert(() => m, ":first-child");
    } else
      p = a.insert("rect", ":first-child"), p.attr("class", "divider").attr("x", d).attr("y", u).attr("width", c).attr("height", h).attr("data-look", t.look);
    const f = p.node().getBBox();
    return t.height = f.height, t.offsetX = 0, t.offsetY = 0, t.intersect = function(m) {
      return Fi(t, m);
    }, {
      cluster: s,
      labelBBox: {}
    };
  }, "divider");
  N2 = Wu;
  q2 = {
    rect: Wu,
    squareRect: N2,
    roundedWithTitle: z2,
    noteGroup: I2,
    divider: R2,
    kanbanSection: P2
  };
  ju = /* @__PURE__ */ new Map();
  W2 = g(async (e, t) => {
    const i = t.shape || "rect", r = await q2[i](e, t);
    return ju.set(t.id, r), r;
  }, "insertCluster");
  k_ = g(() => {
    ju = /* @__PURE__ */ new Map();
  }, "clear");
  function Hu(e, t) {
    return e.intersect(t);
  }
  g(Hu, "intersectNode");
  var j2 = Hu;
  function Zu(e, t, i, r) {
    var n = e.x, o = e.y, s = n - r.x, a = o - r.y, l = Math.sqrt(t * t * a * a + i * i * s * s), c = Math.abs(t * i * s / l);
    r.x < n && (c = -c);
    var h = Math.abs(t * i * a / l);
    return r.y < o && (h = -h), {
      x: n + c,
      y: o + h
    };
  }
  g(Zu, "intersectEllipse");
  var Vu = Zu;
  function Uu(e, t, i) {
    return Vu(e, t, t, i);
  }
  g(Uu, "intersectCircle");
  var H2 = Uu;
  function Yu(e, t, i, r) {
    var n, o, s, a, l, c, h, d, u, p, f, m, y, x, b;
    if (n = t.y - e.y, s = e.x - t.x, l = t.x * e.y - e.x * t.y, u = n * i.x + s * i.y + l, p = n * r.x + s * r.y + l, !(u !== 0 && p !== 0 && ga(u, p)) && (o = r.y - i.y, a = i.x - r.x, c = r.x * i.y - i.x * r.y, h = o * e.x + a * e.y + c, d = o * t.x + a * t.y + c, !(h !== 0 && d !== 0 && ga(h, d)) && (f = n * a - o * s, f !== 0)))
      return m = Math.abs(f / 2), y = s * c - a * l, x = y < 0 ? (y - m) / f : (y + m) / f, y = o * l - n * c, b = y < 0 ? (y - m) / f : (y + m) / f, {
        x,
        y: b
      };
  }
  g(Yu, "intersectLine");
  function ga(e, t) {
    return e * t > 0;
  }
  g(ga, "sameSign");
  var Z2 = Yu;
  function Gu(e, t, i) {
    let r = e.x, n = e.y, o = [], s = Number.POSITIVE_INFINITY, a = Number.POSITIVE_INFINITY;
    typeof t.forEach == "function" ? t.forEach(function(h) {
      s = Math.min(s, h.x), a = Math.min(a, h.y);
    }) : (s = Math.min(s, t.x), a = Math.min(a, t.y));
    let l = r - e.width / 2 - s, c = n - e.height / 2 - a;
    for (let h = 0; h < t.length; h++) {
      let d = t[h], u = t[h < t.length - 1 ? h + 1 : 0], p = Z2(e, i, {
        x: l + d.x,
        y: c + d.y
      }, {
        x: l + u.x,
        y: c + u.y
      });
      p && o.push(p);
    }
    return o.length ? (o.length > 1 && o.sort(function(h, d) {
      let u = h.x - i.x, p = h.y - i.y, f = Math.sqrt(u * u + p * p), m = d.x - i.x, y = d.y - i.y, x = Math.sqrt(m * m + y * y);
      return f < x ? -1 : f === x ? 0 : 1;
    }), o[0]) : e;
  }
  g(Gu, "intersectPolygon");
  var V2 = Gu, H = {
    node: j2,
    circle: H2,
    ellipse: Vu,
    polygon: V2,
    rect: Fi
  };
  function Xu(e, t) {
    const { labelStyles: i } = G(t);
    t.labelStyle = i;
    const r = it(t);
    let n = r;
    r || (n = "anchor");
    const o = e.insert("g").attr("class", n).attr("id", t.domId || t.id), s = 1, { cssStyles: a } = t, l = Z.svg(o), c = V(t, {
      fill: "black",
      stroke: "none",
      fillStyle: "solid"
    });
    t.look !== "handDrawn" && (c.roughness = 0);
    const h = l.circle(0, 0, s * 2, c), d = o.insert(() => h, ":first-child");
    return d.attr("class", "anchor").attr("style", qt(a)), Y(t, d), t.intersect = function(u) {
      return $.info("Circle intersect", t, s, u), H.circle(t, s, u);
    }, o;
  }
  g(Xu, "anchor");
  function fa(e, t, i, r, n, o, s) {
    const a = (e + i) / 2, l = (t + r) / 2, c = Math.atan2(r - t, i - e), h = (i - e) / 2, d = (r - t) / 2, u = h / n, p = d / o, f = Math.sqrt(u ** 2 + p ** 2);
    if (f > 1)
      throw new Error("The given radii are too small to create an arc between the points.");
    const m = Math.sqrt(1 - f ** 2), y = a + m * o * Math.sin(c) * (s ? -1 : 1), x = l - m * n * Math.cos(c) * (s ? -1 : 1), b = Math.atan2((t - x) / o, (e - y) / n);
    let C = Math.atan2((r - x) / o, (i - y) / n) - b;
    s && C < 0 && (C += 2 * Math.PI), !s && C > 0 && (C -= 2 * Math.PI);
    const w = [];
    for (let k = 0; k < 20; k++) {
      const _ = k / 19, B = b + _ * C, I = y + n * Math.cos(B), z = x + o * Math.sin(B);
      w.push({
        x: I,
        y: z
      });
    }
    return w;
  }
  g(fa, "generateArcPoints");
  async function Qu(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o } = await ot(e, t, it(t)), s = o.width + t.padding + 20, a = o.height + t.padding, l = a / 2, c = l / (2.5 + a / 50), { cssStyles: h } = t, d = [
      {
        x: s / 2,
        y: -a / 2
      },
      {
        x: -s / 2,
        y: -a / 2
      },
      ...fa(-s / 2, -a / 2, -s / 2, a / 2, c, l, false),
      {
        x: s / 2,
        y: a / 2
      },
      ...fa(s / 2, a / 2, s / 2, -a / 2, c, l, true)
    ], u = Z.svg(n), p = V(t, {});
    t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
    const f = lt(d), m = u.path(f, p), y = n.insert(() => m, ":first-child");
    return y.attr("class", "basic label-container"), h && t.look !== "handDrawn" && y.selectAll("path").attr("style", h), r && t.look !== "handDrawn" && y.selectAll("path").attr("style", r), y.attr("transform", `translate(${c / 2}, 0)`), Y(t, y), t.intersect = function(x) {
      return H.polygon(t, d, x);
    }, n;
  }
  g(Qu, "bowTieRect");
  function Fe(e, t, i, r) {
    return e.insert("polygon", ":first-child").attr("points", r.map(function(n) {
      return n.x + "," + n.y;
    }).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + i / 2 + ")");
  }
  g(Fe, "insertPolygonShape");
  async function Ju(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o } = await ot(e, t, it(t)), s = o.height + t.padding, a = 12, l = o.width + t.padding + a, c = 0, h = l, d = -s, u = 0, p = [
      {
        x: c + a,
        y: d
      },
      {
        x: h,
        y: d
      },
      {
        x: h,
        y: u
      },
      {
        x: c,
        y: u
      },
      {
        x: c,
        y: d + a
      },
      {
        x: c + a,
        y: d
      }
    ];
    let f;
    const { cssStyles: m } = t;
    if (t.look === "handDrawn") {
      const y = Z.svg(n), x = V(t, {}), b = lt(p), C = y.path(b, x);
      f = n.insert(() => C, ":first-child").attr("transform", `translate(${-l / 2}, ${s / 2})`), m && f.attr("style", m);
    } else
      f = Fe(n, l, s, p);
    return r && f.attr("style", r), Y(t, f), t.intersect = function(y) {
      return H.polygon(t, p, y);
    }, n;
  }
  g(Ju, "card");
  function Ku(e, t) {
    const { nodeStyles: i } = G(t);
    t.label = "";
    const r = e.insert("g").attr("class", it(t)).attr("id", t.domId ?? t.id), { cssStyles: n } = t, o = Math.max(28, t.width ?? 0), s = [
      {
        x: 0,
        y: o / 2
      },
      {
        x: o / 2,
        y: 0
      },
      {
        x: 0,
        y: -o / 2
      },
      {
        x: -o / 2,
        y: 0
      }
    ], a = Z.svg(r), l = V(t, {});
    t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
    const c = lt(s), h = a.path(c, l), d = r.insert(() => h, ":first-child");
    return n && t.look !== "handDrawn" && d.selectAll("path").attr("style", n), i && t.look !== "handDrawn" && d.selectAll("path").attr("style", i), t.width = 28, t.height = 28, t.intersect = function(u) {
      return H.polygon(t, s, u);
    }, r;
  }
  g(Ku, "choice");
  async function tp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o, halfPadding: s } = await ot(e, t, it(t)), a = o.width / 2 + s;
    let l;
    const { cssStyles: c } = t;
    if (t.look === "handDrawn") {
      const h = Z.svg(n), d = V(t, {}), u = h.circle(0, 0, a * 2, d);
      l = n.insert(() => u, ":first-child"), l.attr("class", "basic label-container").attr("style", qt(c));
    } else
      l = n.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", r).attr("r", a).attr("cx", 0).attr("cy", 0);
    return Y(t, l), t.intersect = function(h) {
      return $.info("Circle intersect", t, a, h), H.circle(t, a, h);
    }, n;
  }
  g(tp, "circle");
  function ep(e) {
    const t = Math.cos(Math.PI / 4), i = Math.sin(Math.PI / 4), r = e * 2, n = {
      x: r / 2 * t,
      y: r / 2 * i
    }, o = {
      x: -(r / 2) * t,
      y: r / 2 * i
    }, s = {
      x: -(r / 2) * t,
      y: -(r / 2) * i
    }, a = {
      x: r / 2 * t,
      y: -(r / 2) * i
    };
    return `M ${o.x},${o.y} L ${a.x},${a.y}
                   M ${n.x},${n.y} L ${s.x},${s.y}`;
  }
  g(ep, "createLine");
  function ip(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i, t.label = "";
    const n = e.insert("g").attr("class", it(t)).attr("id", t.domId ?? t.id), o = Math.max(30, (t == null ? void 0 : t.width) ?? 0), { cssStyles: s } = t, a = Z.svg(n), l = V(t, {});
    t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
    const c = a.circle(0, 0, o * 2, l), h = ep(o), d = a.path(h, l), u = n.insert(() => c, ":first-child");
    return u.insert(() => d), s && t.look !== "handDrawn" && u.selectAll("path").attr("style", s), r && t.look !== "handDrawn" && u.selectAll("path").attr("style", r), Y(t, u), t.intersect = function(p) {
      return $.info("crossedCircle intersect", t, {
        radius: o,
        point: p
      }), H.circle(t, o, p);
    }, n;
  }
  g(ip, "crossedCircle");
  function ve(e, t, i, r = 100, n = 0, o = 180) {
    const s = [], a = n * Math.PI / 180, l = (o * Math.PI / 180 - a) / (r - 1);
    for (let c = 0; c < r; c++) {
      const h = a + c * l, d = e + i * Math.cos(h), u = t + i * Math.sin(h);
      s.push({
        x: -d,
        y: -u
      });
    }
    return s;
  }
  g(ve, "generateCirclePoints");
  async function rp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o, label: s } = await ot(e, t, it(t)), a = o.width + (t.padding ?? 0), l = o.height + (t.padding ?? 0), c = Math.max(5, l * 0.1), { cssStyles: h } = t, d = [
      ...ve(a / 2, -l / 2, c, 30, -90, 0),
      {
        x: -a / 2 - c,
        y: c
      },
      ...ve(a / 2 + c * 2, -c, c, 20, -180, -270),
      ...ve(a / 2 + c * 2, c, c, 20, -90, -180),
      {
        x: -a / 2 - c,
        y: -l / 2
      },
      ...ve(a / 2, l / 2, c, 20, 0, 90)
    ], u = [
      {
        x: a / 2,
        y: -l / 2 - c
      },
      {
        x: -a / 2,
        y: -l / 2 - c
      },
      ...ve(a / 2, -l / 2, c, 20, -90, 0),
      {
        x: -a / 2 - c,
        y: -c
      },
      ...ve(a / 2 + a * 0.1, -c, c, 20, -180, -270),
      ...ve(a / 2 + a * 0.1, c, c, 20, -90, -180),
      {
        x: -a / 2 - c,
        y: l / 2
      },
      ...ve(a / 2, l / 2, c, 20, 0, 90),
      {
        x: -a / 2,
        y: l / 2 + c
      },
      {
        x: a / 2,
        y: l / 2 + c
      }
    ], p = Z.svg(n), f = V(t, {
      fill: "none"
    });
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    const m = lt(d).replace("Z", ""), y = p.path(m, f), x = lt(u), b = p.path(x, {
      ...f
    }), C = n.insert("g", ":first-child");
    return C.insert(() => b, ":first-child").attr("stroke-opacity", 0), C.insert(() => y, ":first-child"), C.attr("class", "text"), h && t.look !== "handDrawn" && C.selectAll("path").attr("style", h), r && t.look !== "handDrawn" && C.selectAll("path").attr("style", r), C.attr("transform", `translate(${c}, 0)`), s.attr("transform", `translate(${-a / 2 + c - (o.x - (o.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (o.y - (o.top ?? 0))})`), Y(t, C), t.intersect = function(w) {
      return H.polygon(t, u, w);
    }, n;
  }
  g(rp, "curlyBraceLeft");
  function we(e, t, i, r = 100, n = 0, o = 180) {
    const s = [], a = n * Math.PI / 180, l = (o * Math.PI / 180 - a) / (r - 1);
    for (let c = 0; c < r; c++) {
      const h = a + c * l, d = e + i * Math.cos(h), u = t + i * Math.sin(h);
      s.push({
        x: d,
        y: u
      });
    }
    return s;
  }
  g(we, "generateCirclePoints");
  async function np(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o, label: s } = await ot(e, t, it(t)), a = o.width + (t.padding ?? 0), l = o.height + (t.padding ?? 0), c = Math.max(5, l * 0.1), { cssStyles: h } = t, d = [
      ...we(a / 2, -l / 2, c, 20, -90, 0),
      {
        x: a / 2 + c,
        y: -c
      },
      ...we(a / 2 + c * 2, -c, c, 20, -180, -270),
      ...we(a / 2 + c * 2, c, c, 20, -90, -180),
      {
        x: a / 2 + c,
        y: l / 2
      },
      ...we(a / 2, l / 2, c, 20, 0, 90)
    ], u = [
      {
        x: -a / 2,
        y: -l / 2 - c
      },
      {
        x: a / 2,
        y: -l / 2 - c
      },
      ...we(a / 2, -l / 2, c, 20, -90, 0),
      {
        x: a / 2 + c,
        y: -c
      },
      ...we(a / 2 + c * 2, -c, c, 20, -180, -270),
      ...we(a / 2 + c * 2, c, c, 20, -90, -180),
      {
        x: a / 2 + c,
        y: l / 2
      },
      ...we(a / 2, l / 2, c, 20, 0, 90),
      {
        x: a / 2,
        y: l / 2 + c
      },
      {
        x: -a / 2,
        y: l / 2 + c
      }
    ], p = Z.svg(n), f = V(t, {
      fill: "none"
    });
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    const m = lt(d).replace("Z", ""), y = p.path(m, f), x = lt(u), b = p.path(x, {
      ...f
    }), C = n.insert("g", ":first-child");
    return C.insert(() => b, ":first-child").attr("stroke-opacity", 0), C.insert(() => y, ":first-child"), C.attr("class", "text"), h && t.look !== "handDrawn" && C.selectAll("path").attr("style", h), r && t.look !== "handDrawn" && C.selectAll("path").attr("style", r), C.attr("transform", `translate(${-c}, 0)`), s.attr("transform", `translate(${-a / 2 + (t.padding ?? 0) / 2 - (o.x - (o.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (o.y - (o.top ?? 0))})`), Y(t, C), t.intersect = function(w) {
      return H.polygon(t, u, w);
    }, n;
  }
  g(np, "curlyBraceRight");
  function Lt(e, t, i, r = 100, n = 0, o = 180) {
    const s = [], a = n * Math.PI / 180, l = (o * Math.PI / 180 - a) / (r - 1);
    for (let c = 0; c < r; c++) {
      const h = a + c * l, d = e + i * Math.cos(h), u = t + i * Math.sin(h);
      s.push({
        x: -d,
        y: -u
      });
    }
    return s;
  }
  g(Lt, "generateCirclePoints");
  async function op(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o, label: s } = await ot(e, t, it(t)), a = o.width + (t.padding ?? 0), l = o.height + (t.padding ?? 0), c = Math.max(5, l * 0.1), { cssStyles: h } = t, d = [
      ...Lt(a / 2, -l / 2, c, 30, -90, 0),
      {
        x: -a / 2 - c,
        y: c
      },
      ...Lt(a / 2 + c * 2, -c, c, 20, -180, -270),
      ...Lt(a / 2 + c * 2, c, c, 20, -90, -180),
      {
        x: -a / 2 - c,
        y: -l / 2
      },
      ...Lt(a / 2, l / 2, c, 20, 0, 90)
    ], u = [
      ...Lt(-a / 2 + c + c / 2, -l / 2, c, 20, -90, -180),
      {
        x: a / 2 - c / 2,
        y: c
      },
      ...Lt(-a / 2 - c / 2, -c, c, 20, 0, 90),
      ...Lt(-a / 2 - c / 2, c, c, 20, -90, 0),
      {
        x: a / 2 - c / 2,
        y: -c
      },
      ...Lt(-a / 2 + c + c / 2, l / 2, c, 30, -180, -270)
    ], p = [
      {
        x: a / 2,
        y: -l / 2 - c
      },
      {
        x: -a / 2,
        y: -l / 2 - c
      },
      ...Lt(a / 2, -l / 2, c, 20, -90, 0),
      {
        x: -a / 2 - c,
        y: -c
      },
      ...Lt(a / 2 + c * 2, -c, c, 20, -180, -270),
      ...Lt(a / 2 + c * 2, c, c, 20, -90, -180),
      {
        x: -a / 2 - c,
        y: l / 2
      },
      ...Lt(a / 2, l / 2, c, 20, 0, 90),
      {
        x: -a / 2,
        y: l / 2 + c
      },
      {
        x: a / 2 - c - c / 2,
        y: l / 2 + c
      },
      ...Lt(-a / 2 + c + c / 2, -l / 2, c, 20, -90, -180),
      {
        x: a / 2 - c / 2,
        y: c
      },
      ...Lt(-a / 2 - c / 2, -c, c, 20, 0, 90),
      ...Lt(-a / 2 - c / 2, c, c, 20, -90, 0),
      {
        x: a / 2 - c / 2,
        y: -c
      },
      ...Lt(-a / 2 + c + c / 2, l / 2, c, 30, -180, -270)
    ], f = Z.svg(n), m = V(t, {
      fill: "none"
    });
    t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
    const y = lt(d).replace("Z", ""), x = f.path(y, m), b = lt(u).replace("Z", ""), C = f.path(b, m), w = lt(p), k = f.path(w, {
      ...m
    }), _ = n.insert("g", ":first-child");
    return _.insert(() => k, ":first-child").attr("stroke-opacity", 0), _.insert(() => x, ":first-child"), _.insert(() => C, ":first-child"), _.attr("class", "text"), h && t.look !== "handDrawn" && _.selectAll("path").attr("style", h), r && t.look !== "handDrawn" && _.selectAll("path").attr("style", r), _.attr("transform", `translate(${c - c / 4}, 0)`), s.attr("transform", `translate(${-a / 2 + (t.padding ?? 0) / 2 - (o.x - (o.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (o.y - (o.top ?? 0))})`), Y(t, _), t.intersect = function(B) {
      return H.polygon(t, p, B);
    }, n;
  }
  g(op, "curlyBraces");
  async function ap(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o } = await ot(e, t, it(t)), s = 80, a = 20, l = Math.max(s, (o.width + (t.padding ?? 0) * 2) * 1.25, (t == null ? void 0 : t.width) ?? 0), c = Math.max(a, o.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = c / 2, { cssStyles: d } = t, u = Z.svg(n), p = V(t, {});
    t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
    const f = l, m = c, y = f - h, x = m / 4, b = [
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
      ...ps(-y, -m / 2, h, 50, 270, 90)
    ], C = lt(b), w = u.path(C, p), k = n.insert(() => w, ":first-child");
    return k.attr("class", "basic label-container"), d && t.look !== "handDrawn" && k.selectChildren("path").attr("style", d), r && t.look !== "handDrawn" && k.selectChildren("path").attr("style", r), k.attr("transform", `translate(${-l / 2}, ${-c / 2})`), Y(t, k), t.intersect = function(_) {
      return H.polygon(t, b, _);
    }, n;
  }
  g(ap, "curvedTrapezoid");
  var U2 = g((e, t, i, r, n, o) => [
    `M${e},${t + o}`,
    `a${n},${o} 0,0,0 ${i},0`,
    `a${n},${o} 0,0,0 ${-i},0`,
    `l0,${r}`,
    `a${n},${o} 0,0,0 ${i},0`,
    `l0,${-r}`
  ].join(" "), "createCylinderPathD"), Y2 = g((e, t, i, r, n, o) => [
    `M${e},${t + o}`,
    `M${e + i},${t + o}`,
    `a${n},${o} 0,0,0 ${-i},0`,
    `l0,${r}`,
    `a${n},${o} 0,0,0 ${i},0`,
    `l0,${-r}`
  ].join(" "), "createOuterCylinderPathD"), G2 = g((e, t, i, r, n, o) => [
    `M${e - i / 2},${-r / 2}`,
    `a${n},${o} 0,0,0 ${i},0`
  ].join(" "), "createInnerCylinderPathD");
  async function sp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o, label: s } = await ot(e, t, it(t)), a = Math.max(o.width + t.padding, t.width ?? 0), l = a / 2, c = l / (2.5 + a / 50), h = Math.max(o.height + c + t.padding, t.height ?? 0);
    let d;
    const { cssStyles: u } = t;
    if (t.look === "handDrawn") {
      const p = Z.svg(n), f = Y2(0, 0, a, h, l, c), m = G2(0, c, a, h, l, c), y = p.path(f, V(t, {})), x = p.path(m, V(t, {
        fill: "none"
      }));
      d = n.insert(() => x, ":first-child"), d = n.insert(() => y, ":first-child"), d.attr("class", "basic label-container"), u && d.attr("style", u);
    } else {
      const p = U2(0, 0, a, h, l, c);
      d = n.insert("path", ":first-child").attr("d", p).attr("class", "basic label-container").attr("style", qt(u)).attr("style", r);
    }
    return d.attr("label-offset-y", c), d.attr("transform", `translate(${-a / 2}, ${-(h / 2 + c)})`), Y(t, d), s.attr("transform", `translate(${-(o.width / 2) - (o.x - (o.left ?? 0))}, ${-(o.height / 2) + (t.padding ?? 0) / 1.5 - (o.y - (o.top ?? 0))})`), t.intersect = function(p) {
      const f = H.rect(t, p), m = f.x - (t.x ?? 0);
      if (l != 0 && (Math.abs(m) < (t.width ?? 0) / 2 || Math.abs(m) == (t.width ?? 0) / 2 && Math.abs(f.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - c)) {
        let y = c * c * (1 - m * m / (l * l));
        y > 0 && (y = Math.sqrt(y)), y = c - y, p.y - (t.y ?? 0) > 0 && (y = -y), f.y += y;
      }
      return f;
    }, n;
  }
  g(sp, "cylinder");
  async function lp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o, label: s } = await ot(e, t, it(t)), a = o.width + t.padding, l = o.height + t.padding, c = l * 0.2, h = -a / 2, d = -l / 2 - c / 2, { cssStyles: u } = t, p = Z.svg(n), f = V(t, {});
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    const m = [
      {
        x: h,
        y: d + c
      },
      {
        x: -h,
        y: d + c
      },
      {
        x: -h,
        y: -d
      },
      {
        x: h,
        y: -d
      },
      {
        x: h,
        y: d
      },
      {
        x: -h,
        y: d
      },
      {
        x: -h,
        y: d + c
      }
    ], y = p.polygon(m.map((b) => [
      b.x,
      b.y
    ]), f), x = n.insert(() => y, ":first-child");
    return x.attr("class", "basic label-container"), u && t.look !== "handDrawn" && x.selectAll("path").attr("style", u), r && t.look !== "handDrawn" && x.selectAll("path").attr("style", r), s.attr("transform", `translate(${h + (t.padding ?? 0) / 2 - (o.x - (o.left ?? 0))}, ${d + c + (t.padding ?? 0) / 2 - (o.y - (o.top ?? 0))})`), Y(t, x), t.intersect = function(b) {
      return H.rect(t, b);
    }, n;
  }
  g(lp, "dividedRectangle");
  async function hp(e, t) {
    var i, r;
    const { labelStyles: n, nodeStyles: o } = G(t);
    t.labelStyle = n;
    const { shapeSvg: s, bbox: a, halfPadding: l } = await ot(e, t, it(t)), c = a.width / 2 + l + 5, h = a.width / 2 + l;
    let d;
    const { cssStyles: u } = t;
    if (t.look === "handDrawn") {
      const p = Z.svg(s), f = V(t, {
        roughness: 0.2,
        strokeWidth: 2.5
      }), m = V(t, {
        roughness: 0.2,
        strokeWidth: 1.5
      }), y = p.circle(0, 0, c * 2, f), x = p.circle(0, 0, h * 2, m);
      d = s.insert("g", ":first-child"), d.attr("class", qt(t.cssClasses)).attr("style", qt(u)), (i = d.node()) == null || i.appendChild(y), (r = d.node()) == null || r.appendChild(x);
    } else {
      d = s.insert("g", ":first-child");
      const p = d.insert("circle", ":first-child"), f = d.insert("circle");
      d.attr("class", "basic label-container").attr("style", o), p.attr("class", "outer-circle").attr("style", o).attr("r", c).attr("cx", 0).attr("cy", 0), f.attr("class", "inner-circle").attr("style", o).attr("r", h).attr("cx", 0).attr("cy", 0);
    }
    return Y(t, d), t.intersect = function(p) {
      return $.info("DoubleCircle intersect", t, c, p), H.circle(t, c, p);
    }, s;
  }
  g(hp, "doublecircle");
  function cp(e, t, { config: { themeVariables: i } }) {
    const { labelStyles: r, nodeStyles: n } = G(t);
    t.label = "", t.labelStyle = r;
    const o = e.insert("g").attr("class", it(t)).attr("id", t.domId ?? t.id), s = 7, { cssStyles: a } = t, l = Z.svg(o), { nodeBorder: c } = i, h = V(t, {
      fillStyle: "solid"
    });
    t.look !== "handDrawn" && (h.roughness = 0);
    const d = l.circle(0, 0, s * 2, h), u = o.insert(() => d, ":first-child");
    return u.selectAll("path").attr("style", `fill: ${c} !important;`), a && a.length > 0 && t.look !== "handDrawn" && u.selectAll("path").attr("style", a), n && t.look !== "handDrawn" && u.selectAll("path").attr("style", n), Y(t, u), t.intersect = function(p) {
      return $.info("filledCircle intersect", t, {
        radius: s,
        point: p
      }), H.circle(t, s, p);
    }, o;
  }
  g(cp, "filledCircle");
  async function dp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o, label: s } = await ot(e, t, it(t)), a = o.width + (t.padding ?? 0), l = a + o.height, c = a + o.height, h = [
      {
        x: 0,
        y: -l
      },
      {
        x: c,
        y: -l
      },
      {
        x: c / 2,
        y: 0
      }
    ], { cssStyles: d } = t, u = Z.svg(n), p = V(t, {});
    t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
    const f = lt(h), m = u.path(f, p), y = n.insert(() => m, ":first-child").attr("transform", `translate(${-l / 2}, ${l / 2})`);
    return d && t.look !== "handDrawn" && y.selectChildren("path").attr("style", d), r && t.look !== "handDrawn" && y.selectChildren("path").attr("style", r), t.width = a, t.height = l, Y(t, y), s.attr("transform", `translate(${-o.width / 2 - (o.x - (o.left ?? 0))}, ${-l / 2 + (t.padding ?? 0) / 2 + (o.y - (o.top ?? 0))})`), t.intersect = function(x) {
      return $.info("Triangle intersect", t, h, x), H.polygon(t, h, x);
    }, n;
  }
  g(dp, "flippedTriangle");
  function up(e, t, { dir: i, config: { state: r, themeVariables: n } }) {
    const { nodeStyles: o } = G(t);
    t.label = "";
    const s = e.insert("g").attr("class", it(t)).attr("id", t.domId ?? t.id), { cssStyles: a } = t;
    let l = Math.max(70, (t == null ? void 0 : t.width) ?? 0), c = Math.max(10, (t == null ? void 0 : t.height) ?? 0);
    i === "LR" && (l = Math.max(10, (t == null ? void 0 : t.width) ?? 0), c = Math.max(70, (t == null ? void 0 : t.height) ?? 0));
    const h = -1 * l / 2, d = -1 * c / 2, u = Z.svg(s), p = V(t, {
      stroke: n.lineColor,
      fill: n.lineColor
    });
    t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
    const f = u.rectangle(h, d, l, c, p), m = s.insert(() => f, ":first-child");
    a && t.look !== "handDrawn" && m.selectAll("path").attr("style", a), o && t.look !== "handDrawn" && m.selectAll("path").attr("style", o), Y(t, m);
    const y = (r == null ? void 0 : r.padding) ?? 0;
    return t.width && t.height && (t.width += y / 2 || 0, t.height += y / 2 || 0), t.intersect = function(x) {
      return H.rect(t, x);
    }, s;
  }
  g(up, "forkJoin");
  async function pp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const n = 80, o = 50, { shapeSvg: s, bbox: a } = await ot(e, t, it(t)), l = Math.max(n, a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(o, a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = c / 2, { cssStyles: d } = t, u = Z.svg(s), p = V(t, {});
    t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
    const f = [
      {
        x: -l / 2,
        y: -c / 2
      },
      {
        x: l / 2 - h,
        y: -c / 2
      },
      ...ps(-l / 2 + h, 0, h, 50, 90, 270),
      {
        x: l / 2 - h,
        y: c / 2
      },
      {
        x: -l / 2,
        y: c / 2
      }
    ], m = lt(f), y = u.path(m, p), x = s.insert(() => y, ":first-child");
    return x.attr("class", "basic label-container"), d && t.look !== "handDrawn" && x.selectChildren("path").attr("style", d), r && t.look !== "handDrawn" && x.selectChildren("path").attr("style", r), Y(t, x), t.intersect = function(b) {
      return $.info("Pill intersect", t, {
        radius: h,
        point: b
      }), H.polygon(t, f, b);
    }, s;
  }
  g(pp, "halfRoundedRectangle");
  var X2 = g((e, t, i, r, n) => [
    `M${e + n},${t}`,
    `L${e + i - n},${t}`,
    `L${e + i},${t - r / 2}`,
    `L${e + i - n},${t - r}`,
    `L${e + n},${t - r}`,
    `L${e},${t - r / 2}`,
    "Z"
  ].join(" "), "createHexagonPathD");
  async function gp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o } = await ot(e, t, it(t)), s = 4, a = o.height + t.padding, l = a / s, c = o.width + 2 * l + t.padding, h = [
      {
        x: l,
        y: 0
      },
      {
        x: c - l,
        y: 0
      },
      {
        x: c,
        y: -a / 2
      },
      {
        x: c - l,
        y: -a
      },
      {
        x: l,
        y: -a
      },
      {
        x: 0,
        y: -a / 2
      }
    ];
    let d;
    const { cssStyles: u } = t;
    if (t.look === "handDrawn") {
      const p = Z.svg(n), f = V(t, {}), m = X2(0, 0, c, a, l), y = p.path(m, f);
      d = n.insert(() => y, ":first-child").attr("transform", `translate(${-c / 2}, ${a / 2})`), u && d.attr("style", u);
    } else
      d = Fe(n, c, a, h);
    return r && d.attr("style", r), t.width = c, t.height = a, Y(t, d), t.intersect = function(p) {
      return H.polygon(t, h, p);
    }, n;
  }
  g(gp, "hexagon");
  async function fp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.label = "", t.labelStyle = i;
    const { shapeSvg: n } = await ot(e, t, it(t)), o = Math.max(30, (t == null ? void 0 : t.width) ?? 0), s = Math.max(30, (t == null ? void 0 : t.height) ?? 0), { cssStyles: a } = t, l = Z.svg(n), c = V(t, {});
    t.look !== "handDrawn" && (c.roughness = 0, c.fillStyle = "solid");
    const h = [
      {
        x: 0,
        y: 0
      },
      {
        x: o,
        y: 0
      },
      {
        x: 0,
        y: s
      },
      {
        x: o,
        y: s
      }
    ], d = lt(h), u = l.path(d, c), p = n.insert(() => u, ":first-child");
    return p.attr("class", "basic label-container"), a && t.look !== "handDrawn" && p.selectChildren("path").attr("style", a), r && t.look !== "handDrawn" && p.selectChildren("path").attr("style", r), p.attr("transform", `translate(${-o / 2}, ${-s / 2})`), Y(t, p), t.intersect = function(f) {
      return $.info("Pill intersect", t, {
        points: h
      }), H.polygon(t, h, f);
    }, n;
  }
  g(fp, "hourglass");
  async function mp(e, t, { config: { themeVariables: i, flowchart: r } }) {
    const { labelStyles: n } = G(t);
    t.labelStyle = n;
    const o = t.assetHeight ?? 48, s = t.assetWidth ?? 48, a = Math.max(o, s), l = r == null ? void 0 : r.wrappingWidth;
    t.width = Math.max(a, l ?? 0);
    const { shapeSvg: c, bbox: h, label: d } = await ot(e, t, "icon-shape default"), u = t.pos === "t", p = a, f = a, { nodeBorder: m } = i, { stylesMap: y } = Ei(t), x = -f / 2, b = -p / 2, C = t.label ? 8 : 0, w = Z.svg(c), k = V(t, {
      stroke: "none",
      fill: "none"
    });
    t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
    const _ = w.rectangle(x, b, f, p, k), B = Math.max(f, h.width), I = p + h.height + C, z = w.rectangle(-B / 2, -I / 2, B, I, {
      ...k,
      fill: "transparent",
      stroke: "none"
    }), O = c.insert(() => _, ":first-child"), F = c.insert(() => z);
    if (t.icon) {
      const N = c.append("g");
      N.html(`<g>${await An(t.icon, {
        height: a,
        width: a,
        fallbackPrefix: ""
      })}</g>`);
      const D = N.node().getBBox(), M = D.width, L = D.height, T = D.x, E = D.y;
      N.attr("transform", `translate(${-M / 2 - T},${u ? h.height / 2 + C / 2 - L / 2 - E : -h.height / 2 - C / 2 - L / 2 - E})`), N.attr("style", `color: ${y.get("stroke") ?? m};`);
    }
    return d.attr("transform", `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${u ? -I / 2 : I / 2 - h.height})`), O.attr("transform", `translate(0,${u ? h.height / 2 + C / 2 : -h.height / 2 - C / 2})`), Y(t, F), t.intersect = function(N) {
      if ($.info("iconSquare intersect", t, N), !t.label)
        return H.rect(t, N);
      const D = t.x ?? 0, M = t.y ?? 0, L = t.height ?? 0;
      let T = [];
      return u ? T = [
        {
          x: D - h.width / 2,
          y: M - L / 2
        },
        {
          x: D + h.width / 2,
          y: M - L / 2
        },
        {
          x: D + h.width / 2,
          y: M - L / 2 + h.height + C
        },
        {
          x: D + f / 2,
          y: M - L / 2 + h.height + C
        },
        {
          x: D + f / 2,
          y: M + L / 2
        },
        {
          x: D - f / 2,
          y: M + L / 2
        },
        {
          x: D - f / 2,
          y: M - L / 2 + h.height + C
        },
        {
          x: D - h.width / 2,
          y: M - L / 2 + h.height + C
        }
      ] : T = [
        {
          x: D - f / 2,
          y: M - L / 2
        },
        {
          x: D + f / 2,
          y: M - L / 2
        },
        {
          x: D + f / 2,
          y: M - L / 2 + p
        },
        {
          x: D + h.width / 2,
          y: M - L / 2 + p
        },
        {
          x: D + h.width / 2 / 2,
          y: M + L / 2
        },
        {
          x: D - h.width / 2,
          y: M + L / 2
        },
        {
          x: D - h.width / 2,
          y: M - L / 2 + p
        },
        {
          x: D - f / 2,
          y: M - L / 2 + p
        }
      ], H.polygon(t, T, N);
    }, c;
  }
  g(mp, "icon");
  async function yp(e, t, { config: { themeVariables: i, flowchart: r } }) {
    const { labelStyles: n } = G(t);
    t.labelStyle = n;
    const o = t.assetHeight ?? 48, s = t.assetWidth ?? 48, a = Math.max(o, s), l = r == null ? void 0 : r.wrappingWidth;
    t.width = Math.max(a, l ?? 0);
    const { shapeSvg: c, bbox: h, label: d } = await ot(e, t, "icon-shape default"), u = 20, p = t.label ? 8 : 0, f = t.pos === "t", { nodeBorder: m, mainBkg: y } = i, { stylesMap: x } = Ei(t), b = Z.svg(c), C = V(t, {});
    t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
    const w = x.get("fill");
    C.stroke = w ?? y;
    const k = c.append("g");
    t.icon && k.html(`<g>${await An(t.icon, {
      height: a,
      width: a,
      fallbackPrefix: ""
    })}</g>`);
    const _ = k.node().getBBox(), B = _.width, I = _.height, z = _.x, O = _.y, F = Math.max(B, I) * Math.SQRT2 + u * 2, N = b.circle(0, 0, F, C), D = Math.max(F, h.width), M = F + h.height + p, L = b.rectangle(-D / 2, -M / 2, D, M, {
      ...C,
      fill: "transparent",
      stroke: "none"
    }), T = c.insert(() => N, ":first-child"), E = c.insert(() => L);
    return k.attr("transform", `translate(${-B / 2 - z},${f ? h.height / 2 + p / 2 - I / 2 - O : -h.height / 2 - p / 2 - I / 2 - O})`), k.attr("style", `color: ${x.get("stroke") ?? m};`), d.attr("transform", `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${f ? -M / 2 : M / 2 - h.height})`), T.attr("transform", `translate(0,${f ? h.height / 2 + p / 2 : -h.height / 2 - p / 2})`), Y(t, E), t.intersect = function(A) {
      return $.info("iconSquare intersect", t, A), H.rect(t, A);
    }, c;
  }
  g(yp, "iconCircle");
  async function xp(e, t, { config: { themeVariables: i, flowchart: r } }) {
    const { labelStyles: n } = G(t);
    t.labelStyle = n;
    const o = t.assetHeight ?? 48, s = t.assetWidth ?? 48, a = Math.max(o, s), l = r == null ? void 0 : r.wrappingWidth;
    t.width = Math.max(a, l ?? 0);
    const { shapeSvg: c, bbox: h, halfPadding: d, label: u } = await ot(e, t, "icon-shape default"), p = t.pos === "t", f = a + d * 2, m = a + d * 2, { nodeBorder: y, mainBkg: x } = i, { stylesMap: b } = Ei(t), C = -m / 2, w = -f / 2, k = t.label ? 8 : 0, _ = Z.svg(c), B = V(t, {});
    t.look !== "handDrawn" && (B.roughness = 0, B.fillStyle = "solid");
    const I = b.get("fill");
    B.stroke = I ?? x;
    const z = _.path(Ae(C, w, m, f, 5), B), O = Math.max(m, h.width), F = f + h.height + k, N = _.rectangle(-O / 2, -F / 2, O, F, {
      ...B,
      fill: "transparent",
      stroke: "none"
    }), D = c.insert(() => z, ":first-child").attr("class", "icon-shape2"), M = c.insert(() => N);
    if (t.icon) {
      const L = c.append("g");
      L.html(`<g>${await An(t.icon, {
        height: a,
        width: a,
        fallbackPrefix: ""
      })}</g>`);
      const T = L.node().getBBox(), E = T.width, A = T.height, j = T.x, U = T.y;
      L.attr("transform", `translate(${-E / 2 - j},${p ? h.height / 2 + k / 2 - A / 2 - U : -h.height / 2 - k / 2 - A / 2 - U})`), L.attr("style", `color: ${b.get("stroke") ?? y};`);
    }
    return u.attr("transform", `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${p ? -F / 2 : F / 2 - h.height})`), D.attr("transform", `translate(0,${p ? h.height / 2 + k / 2 : -h.height / 2 - k / 2})`), Y(t, M), t.intersect = function(L) {
      if ($.info("iconSquare intersect", t, L), !t.label)
        return H.rect(t, L);
      const T = t.x ?? 0, E = t.y ?? 0, A = t.height ?? 0;
      let j = [];
      return p ? j = [
        {
          x: T - h.width / 2,
          y: E - A / 2
        },
        {
          x: T + h.width / 2,
          y: E - A / 2
        },
        {
          x: T + h.width / 2,
          y: E - A / 2 + h.height + k
        },
        {
          x: T + m / 2,
          y: E - A / 2 + h.height + k
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
          y: E - A / 2 + h.height + k
        },
        {
          x: T - h.width / 2,
          y: E - A / 2 + h.height + k
        }
      ] : j = [
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
          x: T + h.width / 2,
          y: E - A / 2 + f
        },
        {
          x: T + h.width / 2 / 2,
          y: E + A / 2
        },
        {
          x: T - h.width / 2,
          y: E + A / 2
        },
        {
          x: T - h.width / 2,
          y: E - A / 2 + f
        },
        {
          x: T - m / 2,
          y: E - A / 2 + f
        }
      ], H.polygon(t, j, L);
    }, c;
  }
  g(xp, "iconRounded");
  async function bp(e, t, { config: { themeVariables: i, flowchart: r } }) {
    const { labelStyles: n } = G(t);
    t.labelStyle = n;
    const o = t.assetHeight ?? 48, s = t.assetWidth ?? 48, a = Math.max(o, s), l = r == null ? void 0 : r.wrappingWidth;
    t.width = Math.max(a, l ?? 0);
    const { shapeSvg: c, bbox: h, halfPadding: d, label: u } = await ot(e, t, "icon-shape default"), p = t.pos === "t", f = a + d * 2, m = a + d * 2, { nodeBorder: y, mainBkg: x } = i, { stylesMap: b } = Ei(t), C = -m / 2, w = -f / 2, k = t.label ? 8 : 0, _ = Z.svg(c), B = V(t, {});
    t.look !== "handDrawn" && (B.roughness = 0, B.fillStyle = "solid");
    const I = b.get("fill");
    B.stroke = I ?? x;
    const z = _.path(Ae(C, w, m, f, 0.1), B), O = Math.max(m, h.width), F = f + h.height + k, N = _.rectangle(-O / 2, -F / 2, O, F, {
      ...B,
      fill: "transparent",
      stroke: "none"
    }), D = c.insert(() => z, ":first-child"), M = c.insert(() => N);
    if (t.icon) {
      const L = c.append("g");
      L.html(`<g>${await An(t.icon, {
        height: a,
        width: a,
        fallbackPrefix: ""
      })}</g>`);
      const T = L.node().getBBox(), E = T.width, A = T.height, j = T.x, U = T.y;
      L.attr("transform", `translate(${-E / 2 - j},${p ? h.height / 2 + k / 2 - A / 2 - U : -h.height / 2 - k / 2 - A / 2 - U})`), L.attr("style", `color: ${b.get("stroke") ?? y};`);
    }
    return u.attr("transform", `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${p ? -F / 2 : F / 2 - h.height})`), D.attr("transform", `translate(0,${p ? h.height / 2 + k / 2 : -h.height / 2 - k / 2})`), Y(t, M), t.intersect = function(L) {
      if ($.info("iconSquare intersect", t, L), !t.label)
        return H.rect(t, L);
      const T = t.x ?? 0, E = t.y ?? 0, A = t.height ?? 0;
      let j = [];
      return p ? j = [
        {
          x: T - h.width / 2,
          y: E - A / 2
        },
        {
          x: T + h.width / 2,
          y: E - A / 2
        },
        {
          x: T + h.width / 2,
          y: E - A / 2 + h.height + k
        },
        {
          x: T + m / 2,
          y: E - A / 2 + h.height + k
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
          y: E - A / 2 + h.height + k
        },
        {
          x: T - h.width / 2,
          y: E - A / 2 + h.height + k
        }
      ] : j = [
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
          x: T + h.width / 2,
          y: E - A / 2 + f
        },
        {
          x: T + h.width / 2 / 2,
          y: E + A / 2
        },
        {
          x: T - h.width / 2,
          y: E + A / 2
        },
        {
          x: T - h.width / 2,
          y: E - A / 2 + f
        },
        {
          x: T - m / 2,
          y: E - A / 2 + f
        }
      ], H.polygon(t, j, L);
    }, c;
  }
  g(bp, "iconSquare");
  async function kp(e, t, { config: { flowchart: i } }) {
    const r = new Image();
    r.src = (t == null ? void 0 : t.img) ?? "", await r.decode();
    const n = Number(r.naturalWidth.toString().replace("px", "")), o = Number(r.naturalHeight.toString().replace("px", ""));
    t.imageAspectRatio = n / o;
    const { labelStyles: s } = G(t);
    t.labelStyle = s;
    const a = i == null ? void 0 : i.wrappingWidth;
    t.defaultWidth = i == null ? void 0 : i.wrappingWidth;
    const l = Math.max(t.label ? a ?? 0 : 0, (t == null ? void 0 : t.assetWidth) ?? n), c = t.constraint === "on" && t != null && t.assetHeight ? t.assetHeight * t.imageAspectRatio : l, h = t.constraint === "on" ? c / t.imageAspectRatio : (t == null ? void 0 : t.assetHeight) ?? o;
    t.width = Math.max(c, a ?? 0);
    const { shapeSvg: d, bbox: u, label: p } = await ot(e, t, "image-shape default"), f = t.pos === "t", m = -c / 2, y = -h / 2, x = t.label ? 8 : 0, b = Z.svg(d), C = V(t, {});
    t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
    const w = b.rectangle(m, y, c, h, C), k = Math.max(c, u.width), _ = h + u.height + x, B = b.rectangle(-k / 2, -_ / 2, k, _, {
      ...C,
      fill: "none",
      stroke: "none"
    }), I = d.insert(() => w, ":first-child"), z = d.insert(() => B);
    if (t.img) {
      const O = d.append("image");
      O.attr("href", t.img), O.attr("width", c), O.attr("height", h), O.attr("preserveAspectRatio", "none"), O.attr("transform", `translate(${-c / 2},${f ? _ / 2 - h : -_ / 2})`);
    }
    return p.attr("transform", `translate(${-u.width / 2 - (u.x - (u.left ?? 0))},${f ? -h / 2 - u.height / 2 - x / 2 : h / 2 - u.height / 2 + x / 2})`), I.attr("transform", `translate(0,${f ? u.height / 2 + x / 2 : -u.height / 2 - x / 2})`), Y(t, z), t.intersect = function(O) {
      if ($.info("iconSquare intersect", t, O), !t.label)
        return H.rect(t, O);
      const F = t.x ?? 0, N = t.y ?? 0, D = t.height ?? 0;
      let M = [];
      return f ? M = [
        {
          x: F - u.width / 2,
          y: N - D / 2
        },
        {
          x: F + u.width / 2,
          y: N - D / 2
        },
        {
          x: F + u.width / 2,
          y: N - D / 2 + u.height + x
        },
        {
          x: F + c / 2,
          y: N - D / 2 + u.height + x
        },
        {
          x: F + c / 2,
          y: N + D / 2
        },
        {
          x: F - c / 2,
          y: N + D / 2
        },
        {
          x: F - c / 2,
          y: N - D / 2 + u.height + x
        },
        {
          x: F - u.width / 2,
          y: N - D / 2 + u.height + x
        }
      ] : M = [
        {
          x: F - c / 2,
          y: N - D / 2
        },
        {
          x: F + c / 2,
          y: N - D / 2
        },
        {
          x: F + c / 2,
          y: N - D / 2 + h
        },
        {
          x: F + u.width / 2,
          y: N - D / 2 + h
        },
        {
          x: F + u.width / 2 / 2,
          y: N + D / 2
        },
        {
          x: F - u.width / 2,
          y: N + D / 2
        },
        {
          x: F - u.width / 2,
          y: N - D / 2 + h
        },
        {
          x: F - c / 2,
          y: N - D / 2 + h
        }
      ], H.polygon(t, M, O);
    }, d;
  }
  g(kp, "imageSquare");
  async function Cp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o } = await ot(e, t, it(t)), s = Math.max(o.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), a = Math.max(o.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), l = [
      {
        x: 0,
        y: 0
      },
      {
        x: s,
        y: 0
      },
      {
        x: s + 3 * a / 6,
        y: -a
      },
      {
        x: -3 * a / 6,
        y: -a
      }
    ];
    let c;
    const { cssStyles: h } = t;
    if (t.look === "handDrawn") {
      const d = Z.svg(n), u = V(t, {}), p = lt(l), f = d.path(p, u);
      c = n.insert(() => f, ":first-child").attr("transform", `translate(${-s / 2}, ${a / 2})`), h && c.attr("style", h);
    } else
      c = Fe(n, s, a, l);
    return r && c.attr("style", r), t.width = s, t.height = a, Y(t, c), t.intersect = function(d) {
      return H.polygon(t, l, d);
    }, n;
  }
  g(Cp, "inv_trapezoid");
  async function kr(e, t, i) {
    const { labelStyles: r, nodeStyles: n } = G(t);
    t.labelStyle = r;
    const { shapeSvg: o, bbox: s } = await ot(e, t, it(t)), a = Math.max(s.width + i.labelPaddingX * 2, (t == null ? void 0 : t.width) || 0), l = Math.max(s.height + i.labelPaddingY * 2, (t == null ? void 0 : t.height) || 0), c = -a / 2, h = -l / 2;
    let d, { rx: u, ry: p } = t;
    const { cssStyles: f } = t;
    if (i != null && i.rx && i.ry && (u = i.rx, p = i.ry), t.look === "handDrawn") {
      const m = Z.svg(o), y = V(t, {}), x = u || p ? m.path(Ae(c, h, a, l, u || 0), y) : m.rectangle(c, h, a, l, y);
      d = o.insert(() => x, ":first-child"), d.attr("class", "basic label-container").attr("style", qt(f));
    } else
      d = o.insert("rect", ":first-child"), d.attr("class", "basic label-container").attr("style", n).attr("rx", qt(u)).attr("ry", qt(p)).attr("x", c).attr("y", h).attr("width", a).attr("height", l);
    return Y(t, d), t.intersect = function(m) {
      return H.rect(t, m);
    }, o;
  }
  g(kr, "drawRect");
  async function vp(e, t) {
    const { shapeSvg: i, bbox: r, label: n } = await ot(e, t, "label"), o = i.insert("rect", ":first-child");
    return o.attr("width", 0.1).attr("height", 0.1), i.attr("class", "label edgeLabel"), n.attr("transform", `translate(${-(r.width / 2) - (r.x - (r.left ?? 0))}, ${-(r.height / 2) - (r.y - (r.top ?? 0))})`), Y(t, o), t.intersect = function(s) {
      return H.rect(t, s);
    }, i;
  }
  g(vp, "labelRect");
  async function wp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o } = await ot(e, t, it(t)), s = Math.max(o.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), a = Math.max(o.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), l = [
      {
        x: 0,
        y: 0
      },
      {
        x: s + 3 * a / 6,
        y: 0
      },
      {
        x: s,
        y: -a
      },
      {
        x: -(3 * a) / 6,
        y: -a
      }
    ];
    let c;
    const { cssStyles: h } = t;
    if (t.look === "handDrawn") {
      const d = Z.svg(n), u = V(t, {}), p = lt(l), f = d.path(p, u);
      c = n.insert(() => f, ":first-child").attr("transform", `translate(${-s / 2}, ${a / 2})`), h && c.attr("style", h);
    } else
      c = Fe(n, s, a, l);
    return r && c.attr("style", r), t.width = s, t.height = a, Y(t, c), t.intersect = function(d) {
      return H.polygon(t, l, d);
    }, n;
  }
  g(wp, "lean_left");
  async function _p(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o } = await ot(e, t, it(t)), s = Math.max(o.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), a = Math.max(o.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), l = [
      {
        x: -3 * a / 6,
        y: 0
      },
      {
        x: s,
        y: 0
      },
      {
        x: s + 3 * a / 6,
        y: -a
      },
      {
        x: 0,
        y: -a
      }
    ];
    let c;
    const { cssStyles: h } = t;
    if (t.look === "handDrawn") {
      const d = Z.svg(n), u = V(t, {}), p = lt(l), f = d.path(p, u);
      c = n.insert(() => f, ":first-child").attr("transform", `translate(${-s / 2}, ${a / 2})`), h && c.attr("style", h);
    } else
      c = Fe(n, s, a, l);
    return r && c.attr("style", r), t.width = s, t.height = a, Y(t, c), t.intersect = function(d) {
      return H.polygon(t, l, d);
    }, n;
  }
  g(_p, "lean_right");
  function Sp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.label = "", t.labelStyle = i;
    const n = e.insert("g").attr("class", it(t)).attr("id", t.domId ?? t.id), { cssStyles: o } = t, s = Math.max(35, (t == null ? void 0 : t.width) ?? 0), a = Math.max(35, (t == null ? void 0 : t.height) ?? 0), l = 7, c = [
      {
        x: s,
        y: 0
      },
      {
        x: 0,
        y: a + l / 2
      },
      {
        x: s - 2 * l,
        y: a + l / 2
      },
      {
        x: 0,
        y: 2 * a
      },
      {
        x: s,
        y: a - l / 2
      },
      {
        x: 2 * l,
        y: a - l / 2
      }
    ], h = Z.svg(n), d = V(t, {});
    t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
    const u = lt(c), p = h.path(u, d), f = n.insert(() => p, ":first-child");
    return o && t.look !== "handDrawn" && f.selectAll("path").attr("style", o), r && t.look !== "handDrawn" && f.selectAll("path").attr("style", r), f.attr("transform", `translate(-${s / 2},${-a})`), Y(t, f), t.intersect = function(m) {
      return $.info("lightningBolt intersect", t, m), H.polygon(t, c, m);
    }, n;
  }
  g(Sp, "lightningBolt");
  var Q2 = g((e, t, i, r, n, o, s) => [
    `M${e},${t + o}`,
    `a${n},${o} 0,0,0 ${i},0`,
    `a${n},${o} 0,0,0 ${-i},0`,
    `l0,${r}`,
    `a${n},${o} 0,0,0 ${i},0`,
    `l0,${-r}`,
    `M${e},${t + o + s}`,
    `a${n},${o} 0,0,0 ${i},0`
  ].join(" "), "createCylinderPathD"), J2 = g((e, t, i, r, n, o, s) => [
    `M${e},${t + o}`,
    `M${e + i},${t + o}`,
    `a${n},${o} 0,0,0 ${-i},0`,
    `l0,${r}`,
    `a${n},${o} 0,0,0 ${i},0`,
    `l0,${-r}`,
    `M${e},${t + o + s}`,
    `a${n},${o} 0,0,0 ${i},0`
  ].join(" "), "createOuterCylinderPathD"), K2 = g((e, t, i, r, n, o) => [
    `M${e - i / 2},${-r / 2}`,
    `a${n},${o} 0,0,0 ${i},0`
  ].join(" "), "createInnerCylinderPathD");
  async function Tp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o, label: s } = await ot(e, t, it(t)), a = Math.max(o.width + (t.padding ?? 0), t.width ?? 0), l = a / 2, c = l / (2.5 + a / 50), h = Math.max(o.height + c + (t.padding ?? 0), t.height ?? 0), d = h * 0.1;
    let u;
    const { cssStyles: p } = t;
    if (t.look === "handDrawn") {
      const f = Z.svg(n), m = J2(0, 0, a, h, l, c, d), y = K2(0, c, a, h, l, c), x = V(t, {}), b = f.path(m, x), C = f.path(y, x);
      n.insert(() => C, ":first-child").attr("class", "line"), u = n.insert(() => b, ":first-child"), u.attr("class", "basic label-container"), p && u.attr("style", p);
    } else {
      const f = Q2(0, 0, a, h, l, c, d);
      u = n.insert("path", ":first-child").attr("d", f).attr("class", "basic label-container").attr("style", qt(p)).attr("style", r);
    }
    return u.attr("label-offset-y", c), u.attr("transform", `translate(${-a / 2}, ${-(h / 2 + c)})`), Y(t, u), s.attr("transform", `translate(${-(o.width / 2) - (o.x - (o.left ?? 0))}, ${-(o.height / 2) + c - (o.y - (o.top ?? 0))})`), t.intersect = function(f) {
      const m = H.rect(t, f), y = m.x - (t.x ?? 0);
      if (l != 0 && (Math.abs(y) < (t.width ?? 0) / 2 || Math.abs(y) == (t.width ?? 0) / 2 && Math.abs(m.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - c)) {
        let x = c * c * (1 - y * y / (l * l));
        x > 0 && (x = Math.sqrt(x)), x = c - x, f.y - (t.y ?? 0) > 0 && (x = -x), m.y += x;
      }
      return m;
    }, n;
  }
  g(Tp, "linedCylinder");
  async function Bp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o, label: s } = await ot(e, t, it(t)), a = Math.max(o.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(o.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = l / 4, h = l + c, { cssStyles: d } = t, u = Z.svg(n), p = V(t, {});
    t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
    const f = [
      {
        x: -a / 2 - a / 2 * 0.1,
        y: -h / 2
      },
      {
        x: -a / 2 - a / 2 * 0.1,
        y: h / 2
      },
      ...Pe(-a / 2 - a / 2 * 0.1, h / 2, a / 2 + a / 2 * 0.1, h / 2, c, 0.8),
      {
        x: a / 2 + a / 2 * 0.1,
        y: -h / 2
      },
      {
        x: -a / 2 - a / 2 * 0.1,
        y: -h / 2
      },
      {
        x: -a / 2,
        y: -h / 2
      },
      {
        x: -a / 2,
        y: h / 2 * 1.1
      },
      {
        x: -a / 2,
        y: -h / 2
      }
    ], m = u.polygon(f.map((x) => [
      x.x,
      x.y
    ]), p), y = n.insert(() => m, ":first-child");
    return y.attr("class", "basic label-container"), d && t.look !== "handDrawn" && y.selectAll("path").attr("style", d), r && t.look !== "handDrawn" && y.selectAll("path").attr("style", r), y.attr("transform", `translate(0,${-c / 2})`), s.attr("transform", `translate(${-a / 2 + (t.padding ?? 0) + a / 2 * 0.1 / 2 - (o.x - (o.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c / 2 - (o.y - (o.top ?? 0))})`), Y(t, y), t.intersect = function(x) {
      return H.polygon(t, f, x);
    }, n;
  }
  g(Bp, "linedWaveEdgedRect");
  async function Mp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o, label: s } = await ot(e, t, it(t)), a = Math.max(o.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(o.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = 5, h = -a / 2, d = -l / 2, { cssStyles: u } = t, p = Z.svg(n), f = V(t, {}), m = [
      {
        x: h - c,
        y: d + c
      },
      {
        x: h - c,
        y: d + l + c
      },
      {
        x: h + a - c,
        y: d + l + c
      },
      {
        x: h + a - c,
        y: d + l
      },
      {
        x: h + a,
        y: d + l
      },
      {
        x: h + a,
        y: d + l - c
      },
      {
        x: h + a + c,
        y: d + l - c
      },
      {
        x: h + a + c,
        y: d - c
      },
      {
        x: h + c,
        y: d - c
      },
      {
        x: h + c,
        y: d
      },
      {
        x: h,
        y: d
      },
      {
        x: h,
        y: d + c
      }
    ], y = [
      {
        x: h,
        y: d + c
      },
      {
        x: h + a - c,
        y: d + c
      },
      {
        x: h + a - c,
        y: d + l
      },
      {
        x: h + a,
        y: d + l
      },
      {
        x: h + a,
        y: d
      },
      {
        x: h,
        y: d
      }
    ];
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    const x = lt(m), b = p.path(x, f), C = lt(y), w = p.path(C, {
      ...f,
      fill: "none"
    }), k = n.insert(() => w, ":first-child");
    return k.insert(() => b, ":first-child"), k.attr("class", "basic label-container"), u && t.look !== "handDrawn" && k.selectAll("path").attr("style", u), r && t.look !== "handDrawn" && k.selectAll("path").attr("style", r), s.attr("transform", `translate(${-(o.width / 2) - c - (o.x - (o.left ?? 0))}, ${-(o.height / 2) + c - (o.y - (o.top ?? 0))})`), Y(t, k), t.intersect = function(_) {
      return H.polygon(t, m, _);
    }, n;
  }
  g(Mp, "multiRect");
  async function Lp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o, label: s } = await ot(e, t, it(t)), a = Math.max(o.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(o.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = l / 4, h = l + c, d = -a / 2, u = -h / 2, p = 5, { cssStyles: f } = t, m = Pe(d - p, u + h + p, d + a - p, u + h + p, c, 0.8), y = m == null ? void 0 : m[m.length - 1], x = [
      {
        x: d - p,
        y: u + p
      },
      {
        x: d - p,
        y: u + h + p
      },
      ...m,
      {
        x: d + a - p,
        y: y.y - p
      },
      {
        x: d + a,
        y: y.y - p
      },
      {
        x: d + a,
        y: y.y - 2 * p
      },
      {
        x: d + a + p,
        y: y.y - 2 * p
      },
      {
        x: d + a + p,
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
        x: d + a - p,
        y: u + p
      },
      {
        x: d + a - p,
        y: y.y - p
      },
      {
        x: d + a,
        y: y.y - p
      },
      {
        x: d + a,
        y: u
      },
      {
        x: d,
        y: u
      }
    ], C = Z.svg(n), w = V(t, {});
    t.look !== "handDrawn" && (w.roughness = 0, w.fillStyle = "solid");
    const k = lt(x), _ = C.path(k, w), B = lt(b), I = C.path(B, w), z = n.insert(() => _, ":first-child");
    return z.insert(() => I), z.attr("class", "basic label-container"), f && t.look !== "handDrawn" && z.selectAll("path").attr("style", f), r && t.look !== "handDrawn" && z.selectAll("path").attr("style", r), z.attr("transform", `translate(0,${-c / 2})`), s.attr("transform", `translate(${-(o.width / 2) - p - (o.x - (o.left ?? 0))}, ${-(o.height / 2) + p - c / 2 - (o.y - (o.top ?? 0))})`), Y(t, z), t.intersect = function(O) {
      return H.polygon(t, x, O);
    }, n;
  }
  g(Lp, "multiWaveEdgedRectangle");
  async function Ap(e, t, { config: { themeVariables: i } }) {
    var r;
    const { labelStyles: n, nodeStyles: o } = G(t);
    t.labelStyle = n, t.useHtmlLabels || ((r = Ut().flowchart) == null ? void 0 : r.htmlLabels) !== false || (t.centerLabel = true);
    const { shapeSvg: s, bbox: a } = await ot(e, t, it(t)), l = Math.max(a.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(a.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = -l / 2, d = -c / 2, { cssStyles: u } = t, p = Z.svg(s), f = V(t, {
      fill: i.noteBkgColor,
      stroke: i.noteBorderColor
    });
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    const m = p.rectangle(h, d, l, c, f), y = s.insert(() => m, ":first-child");
    return y.attr("class", "basic label-container"), u && t.look !== "handDrawn" && y.selectAll("path").attr("style", u), o && t.look !== "handDrawn" && y.selectAll("path").attr("style", o), Y(t, y), t.intersect = function(x) {
      return H.rect(t, x);
    }, s;
  }
  g(Ap, "note");
  var tk = g((e, t, i) => [
    `M${e + i / 2},${t}`,
    `L${e + i},${t - i / 2}`,
    `L${e + i / 2},${t - i}`,
    `L${e},${t - i / 2}`,
    "Z"
  ].join(" "), "createDecisionBoxPathD");
  async function Fp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o } = await ot(e, t, it(t)), s = o.width + t.padding, a = o.height + t.padding, l = s + a, c = [
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
    let h;
    const { cssStyles: d } = t;
    if (t.look === "handDrawn") {
      const u = Z.svg(n), p = V(t, {}), f = tk(0, 0, l), m = u.path(f, p);
      h = n.insert(() => m, ":first-child").attr("transform", `translate(${-l / 2}, ${l / 2})`), d && h.attr("style", d);
    } else
      h = Fe(n, l, l, c);
    return r && h.attr("style", r), Y(t, h), t.intersect = function(u) {
      return $.debug(`APA12 Intersect called SPLIT
point:`, u, `
node:
`, t, `
res:`, H.polygon(t, c, u)), H.polygon(t, c, u);
    }, n;
  }
  g(Fp, "question");
  async function Ep(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o, label: s } = await ot(e, t, it(t)), a = Math.max(o.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), l = Math.max(o.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), c = -a / 2, h = -l / 2, d = h / 2, u = [
      {
        x: c + d,
        y: h
      },
      {
        x: c,
        y: 0
      },
      {
        x: c + d,
        y: -h
      },
      {
        x: -c,
        y: -h
      },
      {
        x: -c,
        y: h
      }
    ], { cssStyles: p } = t, f = Z.svg(n), m = V(t, {});
    t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
    const y = lt(u), x = f.path(y, m), b = n.insert(() => x, ":first-child");
    return b.attr("class", "basic label-container"), p && t.look !== "handDrawn" && b.selectAll("path").attr("style", p), r && t.look !== "handDrawn" && b.selectAll("path").attr("style", r), b.attr("transform", `translate(${-d / 2},0)`), s.attr("transform", `translate(${-d / 2 - o.width / 2 - (o.x - (o.left ?? 0))}, ${-(o.height / 2) - (o.y - (o.top ?? 0))})`), Y(t, b), t.intersect = function(C) {
      return H.polygon(t, u, C);
    }, n;
  }
  g(Ep, "rect_left_inv_arrow");
  async function $p(e, t) {
    var i, r;
    const { labelStyles: n, nodeStyles: o } = G(t);
    t.labelStyle = n;
    let s;
    t.cssClasses ? s = "node " + t.cssClasses : s = "node default";
    const a = e.insert("g").attr("class", s).attr("id", t.domId || t.id), l = a.insert("g"), c = a.insert("g").attr("class", "label").attr("style", o), h = t.description, d = t.label, u = c.node().appendChild(await Ge(d, t.labelStyle, true, true));
    let p = {
      width: 0,
      height: 0
    };
    if (vt((r = (i = ct()) == null ? void 0 : i.flowchart) == null ? void 0 : r.htmlLabels)) {
      const O = u.children[0], F = st(u);
      p = O.getBoundingClientRect(), F.attr("width", p.width), F.attr("height", p.height);
    }
    $.info("Text 2", h);
    const f = h || [], m = u.getBBox(), y = c.node().appendChild(await Ge(f.join ? f.join("<br/>") : f, t.labelStyle, true, true)), x = y.children[0], b = st(y);
    p = x.getBoundingClientRect(), b.attr("width", p.width), b.attr("height", p.height);
    const C = (t.padding || 0) / 2;
    st(y).attr("transform", "translate( " + (p.width > m.width ? 0 : (m.width - p.width) / 2) + ", " + (m.height + C + 5) + ")"), st(u).attr("transform", "translate( " + (p.width < m.width ? 0 : -(m.width - p.width) / 2) + ", 0)"), p = c.node().getBBox(), c.attr("transform", "translate(" + -p.width / 2 + ", " + (-p.height / 2 - C + 3) + ")");
    const w = p.width + (t.padding || 0), k = p.height + (t.padding || 0), _ = -p.width / 2 - C, B = -p.height / 2 - C;
    let I, z;
    if (t.look === "handDrawn") {
      const O = Z.svg(a), F = V(t, {}), N = O.path(Ae(_, B, w, k, t.rx || 0), F), D = O.line(-p.width / 2 - C, -p.height / 2 - C + m.height + C, p.width / 2 + C, -p.height / 2 - C + m.height + C, F);
      z = a.insert(() => ($.debug("Rough node insert CXC", N), D), ":first-child"), I = a.insert(() => ($.debug("Rough node insert CXC", N), N), ":first-child");
    } else
      I = l.insert("rect", ":first-child"), z = l.insert("line"), I.attr("class", "outer title-state").attr("style", o).attr("x", -p.width / 2 - C).attr("y", -p.height / 2 - C).attr("width", p.width + (t.padding || 0)).attr("height", p.height + (t.padding || 0)), z.attr("class", "divider").attr("x1", -p.width / 2 - C).attr("x2", p.width / 2 + C).attr("y1", -p.height / 2 - C + m.height + C).attr("y2", -p.height / 2 - C + m.height + C);
    return Y(t, I), t.intersect = function(O) {
      return H.rect(t, O);
    }, a;
  }
  g($p, "rectWithTitle");
  async function Op(e, t) {
    const i = {
      rx: 5,
      ry: 5,
      labelPaddingX: ((t == null ? void 0 : t.padding) || 0) * 1,
      labelPaddingY: ((t == null ? void 0 : t.padding) || 0) * 1
    };
    return kr(e, t, i);
  }
  g(Op, "roundedRect");
  async function Dp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o, label: s } = await ot(e, t, it(t)), a = (t == null ? void 0 : t.padding) ?? 0, l = Math.max(o.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(o.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = -o.width / 2 - a, d = -o.height / 2 - a, { cssStyles: u } = t, p = Z.svg(n), f = V(t, {});
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    const m = [
      {
        x: h,
        y: d
      },
      {
        x: h + l + 8,
        y: d
      },
      {
        x: h + l + 8,
        y: d + c
      },
      {
        x: h - 8,
        y: d + c
      },
      {
        x: h - 8,
        y: d
      },
      {
        x: h,
        y: d
      },
      {
        x: h,
        y: d + c
      }
    ], y = p.polygon(m.map((b) => [
      b.x,
      b.y
    ]), f), x = n.insert(() => y, ":first-child");
    return x.attr("class", "basic label-container").attr("style", qt(u)), r && t.look !== "handDrawn" && x.selectAll("path").attr("style", r), u && t.look !== "handDrawn" && x.selectAll("path").attr("style", r), s.attr("transform", `translate(${-l / 2 + 4 + (t.padding ?? 0) - (o.x - (o.left ?? 0))},${-c / 2 + (t.padding ?? 0) - (o.y - (o.top ?? 0))})`), Y(t, x), t.intersect = function(b) {
      return H.rect(t, b);
    }, n;
  }
  g(Dp, "shadedProcess");
  async function Ip(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o, label: s } = await ot(e, t, it(t)), a = Math.max(o.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(o.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = -a / 2, h = -l / 2, { cssStyles: d } = t, u = Z.svg(n), p = V(t, {});
    t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
    const f = [
      {
        x: c,
        y: h
      },
      {
        x: c,
        y: h + l
      },
      {
        x: c + a,
        y: h + l
      },
      {
        x: c + a,
        y: h - l / 2
      }
    ], m = lt(f), y = u.path(m, p), x = n.insert(() => y, ":first-child");
    return x.attr("class", "basic label-container"), d && t.look !== "handDrawn" && x.selectChildren("path").attr("style", d), r && t.look !== "handDrawn" && x.selectChildren("path").attr("style", r), x.attr("transform", `translate(0, ${l / 4})`), s.attr("transform", `translate(${-a / 2 + (t.padding ?? 0) - (o.x - (o.left ?? 0))}, ${-l / 4 + (t.padding ?? 0) - (o.y - (o.top ?? 0))})`), Y(t, x), t.intersect = function(b) {
      return H.polygon(t, f, b);
    }, n;
  }
  g(Ip, "slopedRect");
  async function zp(e, t) {
    const i = {
      rx: 0,
      ry: 0,
      labelPaddingX: ((t == null ? void 0 : t.padding) || 0) * 2,
      labelPaddingY: ((t == null ? void 0 : t.padding) || 0) * 1
    };
    return kr(e, t, i);
  }
  g(zp, "squareRect");
  async function Pp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o } = await ot(e, t, it(t)), s = o.height + t.padding, a = o.width + s / 4 + t.padding;
    let l;
    const { cssStyles: c } = t;
    if (t.look === "handDrawn") {
      const h = Z.svg(n), d = V(t, {}), u = Ae(-a / 2, -s / 2, a, s, s / 2), p = h.path(u, d);
      l = n.insert(() => p, ":first-child"), l.attr("class", "basic label-container").attr("style", qt(c));
    } else
      l = n.insert("rect", ":first-child"), l.attr("class", "basic label-container").attr("style", r).attr("rx", s / 2).attr("ry", s / 2).attr("x", -a / 2).attr("y", -s / 2).attr("width", a).attr("height", s);
    return Y(t, l), t.intersect = function(h) {
      return H.rect(t, h);
    }, n;
  }
  g(Pp, "stadium");
  async function Rp(e, t) {
    return kr(e, t, {
      rx: 5,
      ry: 5
    });
  }
  g(Rp, "state");
  function Np(e, t, { config: { themeVariables: i } }) {
    const { labelStyles: r, nodeStyles: n } = G(t);
    t.labelStyle = r;
    const { cssStyles: o } = t, { lineColor: s, stateBorder: a, nodeBorder: l } = i, c = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id), h = Z.svg(c), d = V(t, {});
    t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
    const u = h.circle(0, 0, 14, {
      ...d,
      stroke: s,
      strokeWidth: 2
    }), p = a ?? l, f = h.circle(0, 0, 5, {
      ...d,
      fill: p,
      stroke: p,
      strokeWidth: 2,
      fillStyle: "solid"
    }), m = c.insert(() => u, ":first-child");
    return m.insert(() => f), o && m.selectAll("path").attr("style", o), n && m.selectAll("path").attr("style", n), Y(t, m), t.intersect = function(y) {
      return H.circle(t, 7, y);
    }, c;
  }
  g(Np, "stateEnd");
  function qp(e, t, { config: { themeVariables: i } }) {
    const { lineColor: r } = i, n = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id);
    let o;
    if (t.look === "handDrawn") {
      const s = Z.svg(n).circle(0, 0, 14, O2(r));
      o = n.insert(() => s), o.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
    } else
      o = n.insert("circle", ":first-child"), o.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
    return Y(t, o), t.intersect = function(s) {
      return H.circle(t, 7, s);
    }, n;
  }
  g(qp, "stateStart");
  async function Wp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o } = await ot(e, t, it(t)), s = ((t == null ? void 0 : t.padding) || 0) / 2, a = o.width + t.padding, l = o.height + t.padding, c = -o.width / 2 - s, h = -o.height / 2 - s, d = [
      {
        x: 0,
        y: 0
      },
      {
        x: a,
        y: 0
      },
      {
        x: a,
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
        x: a + 8,
        y: 0
      },
      {
        x: a + 8,
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
      const u = Z.svg(n), p = V(t, {}), f = u.rectangle(c - 8, h, a + 16, l, p), m = u.line(c, h, c, h + l, p), y = u.line(c + a, h, c + a, h + l, p);
      n.insert(() => m, ":first-child"), n.insert(() => y, ":first-child");
      const x = n.insert(() => f, ":first-child"), { cssStyles: b } = t;
      x.attr("class", "basic label-container").attr("style", qt(b)), Y(t, x);
    } else {
      const u = Fe(n, a, l, d);
      r && u.attr("style", r), Y(t, u);
    }
    return t.intersect = function(u) {
      return H.polygon(t, d, u);
    }, n;
  }
  g(Wp, "subroutine");
  async function jp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o } = await ot(e, t, it(t)), s = Math.max(o.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), a = Math.max(o.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), l = -s / 2, c = -a / 2, h = 0.2 * a, d = 0.2 * a, { cssStyles: u } = t, p = Z.svg(n), f = V(t, {}), m = [
      {
        x: l - h / 2,
        y: c
      },
      {
        x: l + s + h / 2,
        y: c
      },
      {
        x: l + s + h / 2,
        y: c + a
      },
      {
        x: l - h / 2,
        y: c + a
      }
    ], y = [
      {
        x: l + s - h / 2,
        y: c + a
      },
      {
        x: l + s + h / 2,
        y: c + a
      },
      {
        x: l + s + h / 2,
        y: c + a - d
      }
    ];
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    const x = lt(m), b = p.path(x, f), C = lt(y), w = p.path(C, {
      ...f,
      fillStyle: "solid"
    }), k = n.insert(() => w, ":first-child");
    return k.insert(() => b, ":first-child"), k.attr("class", "basic label-container"), u && t.look !== "handDrawn" && k.selectAll("path").attr("style", u), r && t.look !== "handDrawn" && k.selectAll("path").attr("style", r), Y(t, k), t.intersect = function(_) {
      return H.polygon(t, m, _);
    }, n;
  }
  g(jp, "taggedRect");
  async function Hp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o, label: s } = await ot(e, t, it(t)), a = Math.max(o.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(o.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = l / 4, h = 0.2 * a, d = 0.2 * l, u = l + c, { cssStyles: p } = t, f = Z.svg(n), m = V(t, {});
    t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
    const y = [
      {
        x: -a / 2 - a / 2 * 0.1,
        y: u / 2
      },
      ...Pe(-a / 2 - a / 2 * 0.1, u / 2, a / 2 + a / 2 * 0.1, u / 2, c, 0.8),
      {
        x: a / 2 + a / 2 * 0.1,
        y: -u / 2
      },
      {
        x: -a / 2 - a / 2 * 0.1,
        y: -u / 2
      }
    ], x = -a / 2 + a / 2 * 0.1, b = -u / 2 - d * 0.4, C = [
      {
        x: x + a - h,
        y: (b + l) * 1.4
      },
      {
        x: x + a,
        y: b + l - d
      },
      {
        x: x + a,
        y: (b + l) * 0.9
      },
      ...Pe(x + a, (b + l) * 1.3, x + a - h, (b + l) * 1.5, -l * 0.03, 0.5)
    ], w = lt(y), k = f.path(w, m), _ = lt(C), B = f.path(_, {
      ...m,
      fillStyle: "solid"
    }), I = n.insert(() => B, ":first-child");
    return I.insert(() => k, ":first-child"), I.attr("class", "basic label-container"), p && t.look !== "handDrawn" && I.selectAll("path").attr("style", p), r && t.look !== "handDrawn" && I.selectAll("path").attr("style", r), I.attr("transform", `translate(0,${-c / 2})`), s.attr("transform", `translate(${-a / 2 + (t.padding ?? 0) - (o.x - (o.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c / 2 - (o.y - (o.top ?? 0))})`), Y(t, I), t.intersect = function(z) {
      return H.polygon(t, y, z);
    }, n;
  }
  g(Hp, "taggedWaveEdgedRectangle");
  async function Zp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o } = await ot(e, t, it(t)), s = Math.max(o.width + t.padding, (t == null ? void 0 : t.width) || 0), a = Math.max(o.height + t.padding, (t == null ? void 0 : t.height) || 0), l = -s / 2, c = -a / 2, h = n.insert("rect", ":first-child");
    return h.attr("class", "text").attr("style", r).attr("rx", 0).attr("ry", 0).attr("x", l).attr("y", c).attr("width", s).attr("height", a), Y(t, h), t.intersect = function(d) {
      return H.rect(t, d);
    }, n;
  }
  g(Zp, "text");
  var ek = g((e, t, i, r, n, o) => `M${e},${t}
    a${n},${o} 0,0,1 0,${-r}
    l${i},0
    a${n},${o} 0,0,1 0,${r}
    M${i},${-r}
    a${n},${o} 0,0,0 0,${r}
    l${-i},0`, "createCylinderPathD"), ik = g((e, t, i, r, n, o) => [
    `M${e},${t}`,
    `M${e + i},${t}`,
    `a${n},${o} 0,0,0 0,${-r}`,
    `l${-i},0`,
    `a${n},${o} 0,0,0 0,${r}`,
    `l${i},0`
  ].join(" "), "createOuterCylinderPathD"), rk = g((e, t, i, r, n, o) => [
    `M${e + i / 2},${-r / 2}`,
    `a${n},${o} 0,0,0 0,${r}`
  ].join(" "), "createInnerCylinderPathD");
  async function Vp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o, label: s, halfPadding: a } = await ot(e, t, it(t)), l = t.look === "neo" ? a * 2 : a, c = o.height + l, h = c / 2, d = h / (2.5 + c / 50), u = o.width + d + l, { cssStyles: p } = t;
    let f;
    if (t.look === "handDrawn") {
      const m = Z.svg(n), y = ik(0, 0, u, c, d, h), x = rk(0, 0, u, c, d, h), b = m.path(y, V(t, {})), C = m.path(x, V(t, {
        fill: "none"
      }));
      f = n.insert(() => C, ":first-child"), f = n.insert(() => b, ":first-child"), f.attr("class", "basic label-container"), p && f.attr("style", p);
    } else {
      const m = ek(0, 0, u, c, d, h);
      f = n.insert("path", ":first-child").attr("d", m).attr("class", "basic label-container").attr("style", qt(p)).attr("style", r), f.attr("class", "basic label-container"), p && f.selectAll("path").attr("style", p), r && f.selectAll("path").attr("style", r);
    }
    return f.attr("label-offset-x", d), f.attr("transform", `translate(${-u / 2}, ${c / 2} )`), s.attr("transform", `translate(${-(o.width / 2) - d - (o.x - (o.left ?? 0))}, ${-(o.height / 2) - (o.y - (o.top ?? 0))})`), Y(t, f), t.intersect = function(m) {
      const y = H.rect(t, m), x = y.y - (t.y ?? 0);
      if (h != 0 && (Math.abs(x) < (t.height ?? 0) / 2 || Math.abs(x) == (t.height ?? 0) / 2 && Math.abs(y.x - (t.x ?? 0)) > (t.width ?? 0) / 2 - d)) {
        let b = d * d * (1 - x * x / (h * h));
        b != 0 && (b = Math.sqrt(Math.abs(b))), b = d - b, m.x - (t.x ?? 0) > 0 && (b = -b), y.x += b;
      }
      return y;
    }, n;
  }
  g(Vp, "tiltedCylinder");
  async function Up(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o } = await ot(e, t, it(t)), s = o.width + t.padding, a = o.height + t.padding, l = [
      {
        x: -3 * a / 6,
        y: 0
      },
      {
        x: s + 3 * a / 6,
        y: 0
      },
      {
        x: s,
        y: -a
      },
      {
        x: 0,
        y: -a
      }
    ];
    let c;
    const { cssStyles: h } = t;
    if (t.look === "handDrawn") {
      const d = Z.svg(n), u = V(t, {}), p = lt(l), f = d.path(p, u);
      c = n.insert(() => f, ":first-child").attr("transform", `translate(${-s / 2}, ${a / 2})`), h && c.attr("style", h);
    } else
      c = Fe(n, s, a, l);
    return r && c.attr("style", r), t.width = s, t.height = a, Y(t, c), t.intersect = function(d) {
      return H.polygon(t, l, d);
    }, n;
  }
  g(Up, "trapezoid");
  async function Yp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o } = await ot(e, t, it(t)), s = 60, a = 20, l = Math.max(s, o.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(a, o.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), { cssStyles: h } = t, d = Z.svg(n), u = V(t, {});
    t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
    const p = [
      {
        x: -l / 2 * 0.8,
        y: -c / 2
      },
      {
        x: l / 2 * 0.8,
        y: -c / 2
      },
      {
        x: l / 2,
        y: -c / 2 * 0.6
      },
      {
        x: l / 2,
        y: c / 2
      },
      {
        x: -l / 2,
        y: c / 2
      },
      {
        x: -l / 2,
        y: -c / 2 * 0.6
      }
    ], f = lt(p), m = d.path(f, u), y = n.insert(() => m, ":first-child");
    return y.attr("class", "basic label-container"), h && t.look !== "handDrawn" && y.selectChildren("path").attr("style", h), r && t.look !== "handDrawn" && y.selectChildren("path").attr("style", r), Y(t, y), t.intersect = function(x) {
      return H.polygon(t, p, x);
    }, n;
  }
  g(Yp, "trapezoidalPentagon");
  async function Gp(e, t) {
    var i;
    const { labelStyles: r, nodeStyles: n } = G(t);
    t.labelStyle = r;
    const { shapeSvg: o, bbox: s, label: a } = await ot(e, t, it(t)), l = vt((i = ct().flowchart) == null ? void 0 : i.htmlLabels), c = s.width + (t.padding ?? 0), h = c + s.height, d = c + s.height, u = [
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
        y: -h
      }
    ], { cssStyles: p } = t, f = Z.svg(o), m = V(t, {});
    t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
    const y = lt(u), x = f.path(y, m), b = o.insert(() => x, ":first-child").attr("transform", `translate(${-h / 2}, ${h / 2})`);
    return p && t.look !== "handDrawn" && b.selectChildren("path").attr("style", p), n && t.look !== "handDrawn" && b.selectChildren("path").attr("style", n), t.width = c, t.height = h, Y(t, b), a.attr("transform", `translate(${-s.width / 2 - (s.x - (s.left ?? 0))}, ${h / 2 - (s.height + (t.padding ?? 0) / (l ? 2 : 1) - (s.y - (s.top ?? 0)))})`), t.intersect = function(C) {
      return $.info("Triangle intersect", t, u, C), H.polygon(t, u, C);
    }, o;
  }
  g(Gp, "triangle");
  async function Xp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o, label: s } = await ot(e, t, it(t)), a = Math.max(o.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(o.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = l / 8, h = l + c, { cssStyles: d } = t, u = 70 - a, p = u > 0 ? u / 2 : 0, f = Z.svg(n), m = V(t, {});
    t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
    const y = [
      {
        x: -a / 2 - p,
        y: h / 2
      },
      ...Pe(-a / 2 - p, h / 2, a / 2 + p, h / 2, c, 0.8),
      {
        x: a / 2 + p,
        y: -h / 2
      },
      {
        x: -a / 2 - p,
        y: -h / 2
      }
    ], x = lt(y), b = f.path(x, m), C = n.insert(() => b, ":first-child");
    return C.attr("class", "basic label-container"), d && t.look !== "handDrawn" && C.selectAll("path").attr("style", d), r && t.look !== "handDrawn" && C.selectAll("path").attr("style", r), C.attr("transform", `translate(0,${-c / 2})`), s.attr("transform", `translate(${-a / 2 + (t.padding ?? 0) - (o.x - (o.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c - (o.y - (o.top ?? 0))})`), Y(t, C), t.intersect = function(w) {
      return H.polygon(t, y, w);
    }, n;
  }
  g(Xp, "waveEdgedRectangle");
  async function Qp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o } = await ot(e, t, it(t)), s = 100, a = 50, l = Math.max(o.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(o.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = l / c;
    let d = l, u = c;
    d > u * h ? u = d / h : d = u * h, d = Math.max(d, s), u = Math.max(u, a);
    const p = Math.min(u * 0.2, u / 4), f = u + p * 2, { cssStyles: m } = t, y = Z.svg(n), x = V(t, {});
    t.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
    const b = [
      {
        x: -d / 2,
        y: f / 2
      },
      ...Pe(-d / 2, f / 2, d / 2, f / 2, p, 1),
      {
        x: d / 2,
        y: -f / 2
      },
      ...Pe(d / 2, -f / 2, -d / 2, -f / 2, p, -1)
    ], C = lt(b), w = y.path(C, x), k = n.insert(() => w, ":first-child");
    return k.attr("class", "basic label-container"), m && t.look !== "handDrawn" && k.selectAll("path").attr("style", m), r && t.look !== "handDrawn" && k.selectAll("path").attr("style", r), Y(t, k), t.intersect = function(_) {
      return H.polygon(t, b, _);
    }, n;
  }
  g(Qp, "waveRectangle");
  async function Jp(e, t) {
    const { labelStyles: i, nodeStyles: r } = G(t);
    t.labelStyle = i;
    const { shapeSvg: n, bbox: o, label: s } = await ot(e, t, it(t)), a = Math.max(o.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(o.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = 5, h = -a / 2, d = -l / 2, { cssStyles: u } = t, p = Z.svg(n), f = V(t, {}), m = [
      {
        x: h - c,
        y: d - c
      },
      {
        x: h - c,
        y: d + l
      },
      {
        x: h + a,
        y: d + l
      },
      {
        x: h + a,
        y: d - c
      }
    ], y = `M${h - c},${d - c} L${h + a},${d - c} L${h + a},${d + l} L${h - c},${d + l} L${h - c},${d - c}
                M${h - c},${d} L${h + a},${d}
                M${h},${d - c} L${h},${d + l}`;
    t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
    const x = p.path(y, f), b = n.insert(() => x, ":first-child");
    return b.attr("transform", `translate(${c / 2}, ${c / 2})`), b.attr("class", "basic label-container"), u && t.look !== "handDrawn" && b.selectAll("path").attr("style", u), r && t.look !== "handDrawn" && b.selectAll("path").attr("style", r), s.attr("transform", `translate(${-(o.width / 2) + c / 2 - (o.x - (o.left ?? 0))}, ${-(o.height / 2) + c / 2 - (o.y - (o.top ?? 0))})`), Y(t, b), t.intersect = function(C) {
      return H.polygon(t, m, C);
    }, n;
  }
  g(Jp, "windowPane");
  async function gs(e, t) {
    var i, r, n;
    const o = t;
    if (o.alias && (t.label = o.alias), t.look === "handDrawn") {
      const { themeVariables: K } = Ut(), { background: tt } = K, ht = {
        ...t,
        id: t.id + "-background",
        look: "default",
        cssStyles: [
          "stroke: none",
          `fill: ${tt}`
        ]
      };
      await gs(e, ht);
    }
    const s = Ut();
    t.useHtmlLabels = s.htmlLabels;
    let a = ((i = s.er) == null ? void 0 : i.diagramPadding) ?? 10, l = ((r = s.er) == null ? void 0 : r.entityPadding) ?? 6;
    const { cssStyles: c } = t, { labelStyles: h } = G(t);
    if (o.attributes.length === 0 && t.label) {
      const K = {
        rx: 0,
        ry: 0,
        labelPaddingX: a,
        labelPaddingY: a * 1.5
      };
      Me(t.label, s) + K.labelPaddingX * 2 < s.er.minEntityWidth && (t.width = s.er.minEntityWidth);
      const tt = await kr(e, t, K);
      if (!vt(s.htmlLabels)) {
        const ht = tt.select("text"), rt = (n = ht.node()) == null ? void 0 : n.getBBox();
        ht.attr("transform", `translate(${-rt.width / 2}, 0)`);
      }
      return tt;
    }
    s.htmlLabels || (a *= 1.25, l *= 1.25);
    let d = it(t);
    d || (d = "node default");
    const u = e.insert("g").attr("class", d).attr("id", t.domId || t.id), p = await fi(u, t.label ?? "", s, 0, 0, [
      "name"
    ], h);
    p.height += l;
    let f = 0;
    const m = [];
    let y = 0, x = 0, b = 0, C = 0, w = true, k = true;
    for (const K of o.attributes) {
      const tt = await fi(u, K.type, s, 0, f, [
        "attribute-type"
      ], h);
      y = Math.max(y, tt.width + a);
      const ht = await fi(u, K.name, s, 0, f, [
        "attribute-name"
      ], h);
      x = Math.max(x, ht.width + a);
      const rt = await fi(u, K.keys.join(), s, 0, f, [
        "attribute-keys"
      ], h);
      b = Math.max(b, rt.width + a);
      const wt = await fi(u, K.comment, s, 0, f, [
        "attribute-comment"
      ], h);
      C = Math.max(C, wt.width + a), f += Math.max(tt.height, ht.height, rt.height, wt.height) + l, m.push(f);
    }
    m.pop();
    let _ = 4;
    b <= a && (w = false, b = 0, _--), C <= a && (k = false, C = 0, _--);
    const B = u.node().getBBox();
    if (p.width + a * 2 - (y + x + b + C) > 0) {
      const K = p.width + a * 2 - (y + x + b + C);
      y += K / _, x += K / _, b > 0 && (b += K / _), C > 0 && (C += K / _);
    }
    const I = y + x + b + C, z = Z.svg(u), O = V(t, {});
    t.look !== "handDrawn" && (O.roughness = 0, O.fillStyle = "solid");
    const F = Math.max(B.width + a * 2, (t == null ? void 0 : t.width) || 0, I), N = Math.max(B.height + (m[0] || f) + l, (t == null ? void 0 : t.height) || 0), D = -F / 2, M = -N / 2;
    u.selectAll("g:not(:first-child)").each((K, tt, ht) => {
      const rt = st(ht[tt]), wt = rt.attr("transform");
      let Tt = 0, te = 0;
      if (wt) {
        const It = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(wt);
        It && (Tt = parseFloat(It[1]), te = parseFloat(It[2]), rt.attr("class").includes("attribute-name") ? Tt += y : rt.attr("class").includes("attribute-keys") ? Tt += y + x : rt.attr("class").includes("attribute-comment") && (Tt += y + x + b));
      }
      rt.attr("transform", `translate(${D + a / 2 + Tt}, ${te + M + p.height + l / 2})`);
    }), u.select(".name").attr("transform", "translate(" + -p.width / 2 + ", " + (M + l / 2) + ")");
    const L = z.rectangle(D, M, F, N, O), T = u.insert(() => L, ":first-child").attr("style", c.join("")), { themeVariables: E } = Ut(), { rowEven: A, rowOdd: j, nodeBorder: U } = E;
    m.push(0);
    for (const [K, tt] of m.entries()) {
      if (K === 0 && m.length > 1)
        continue;
      const ht = K % 2 === 0 && tt !== 0, rt = z.rectangle(D, p.height + M + tt, F, p.height, {
        ...O,
        fill: ht ? A : j,
        stroke: U
      });
      u.insert(() => rt, "g.label").attr("style", c.join("")).attr("class", `row-rect-${K % 2 === 0 ? "even" : "odd"}`);
    }
    let X = z.line(D, p.height + M, F + D, p.height + M, O);
    u.insert(() => X).attr("class", "divider"), X = z.line(y + D, p.height + M, y + D, N + M, O), u.insert(() => X).attr("class", "divider"), w && (X = z.line(y + x + D, p.height + M, y + x + D, N + M, O), u.insert(() => X).attr("class", "divider")), k && (X = z.line(y + x + b + D, p.height + M, y + x + b + D, N + M, O), u.insert(() => X).attr("class", "divider"));
    for (const K of m)
      X = z.line(D, p.height + M + K, F + D, p.height + M + K, O), u.insert(() => X).attr("class", "divider");
    return Y(t, T), t.intersect = function(K) {
      return H.rect(t, K);
    }, u;
  }
  g(gs, "erBox");
  async function fi(e, t, i, r = 0, n = 0, o = [], s = "") {
    const a = e.insert("g").attr("class", `label ${o.join(" ")}`).attr("transform", `translate(${r}, ${n})`).attr("style", s);
    t !== Ks(t) && (t = Ks(t), t = t.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
    const l = a.node().appendChild(await Ne(a, t, {
      width: Me(t, i) + 100,
      style: s,
      useHtmlLabels: i.htmlLabels
    }, i));
    if (t.includes("&lt;") || t.includes("&gt;")) {
      let h = l.children[0];
      for (h.textContent = h.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">"); h.childNodes[0]; )
        h = h.childNodes[0], h.textContent = h.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
    }
    let c = l.getBBox();
    if (vt(i.htmlLabels)) {
      const h = l.children[0];
      h.style.textAlign = "start";
      const d = st(l);
      c = h.getBoundingClientRect(), d.attr("width", c.width), d.attr("height", c.height);
    }
    return c;
  }
  g(fi, "addText");
  async function Kp(e, t, i, r, n = i.class.padding ?? 12) {
    const o = r ? 0 : 3, s = e.insert("g").attr("class", it(t)).attr("id", t.domId || t.id);
    let a = null, l = null, c = null, h = null, d = 0, u = 0, p = 0;
    if (a = s.insert("g").attr("class", "annotation-group text"), t.annotations.length > 0) {
      const b = t.annotations[0];
      await Qi(a, {
        text: `\xAB${b}\xBB`
      }, 0), d = a.node().getBBox().height;
    }
    l = s.insert("g").attr("class", "label-group text"), await Qi(l, t, 0, [
      "font-weight: bolder"
    ]);
    const f = l.node().getBBox();
    u = f.height, c = s.insert("g").attr("class", "members-group text");
    let m = 0;
    for (const b of t.members) {
      const C = await Qi(c, b, m, [
        b.parseClassifier()
      ]);
      m += C + o;
    }
    p = c.node().getBBox().height, p <= 0 && (p = n / 2), h = s.insert("g").attr("class", "methods-group text");
    let y = 0;
    for (const b of t.methods) {
      const C = await Qi(h, b, y, [
        b.parseClassifier()
      ]);
      y += C + o;
    }
    let x = s.node().getBBox();
    if (a !== null) {
      const b = a.node().getBBox();
      a.attr("transform", `translate(${-b.width / 2})`);
    }
    return l.attr("transform", `translate(${-f.width / 2}, ${d})`), x = s.node().getBBox(), c.attr("transform", `translate(0, ${d + u + n * 2})`), x = s.node().getBBox(), h.attr("transform", `translate(0, ${d + u + (p ? p + n * 4 : n * 2)})`), x = s.node().getBBox(), {
      shapeSvg: s,
      bbox: x
    };
  }
  g(Kp, "textHelper");
  async function Qi(e, t, i, r = []) {
    const n = e.insert("g").attr("class", "label").attr("style", r.join("; ")), o = Ut();
    let s = "useHtmlLabels" in t ? t.useHtmlLabels : vt(o.htmlLabels) ?? true, a = "";
    "text" in t ? a = t.text : a = t.label, !s && a.startsWith("\\") && (a = a.substring(1)), wi(a) && (s = true);
    const l = await Ne(n, Fa(ni(a)), {
      width: Me(a, o) + 50,
      classes: "markdown-node-label",
      useHtmlLabels: s
    }, o);
    let c, h = 1;
    if (s) {
      const d = l.children[0], u = st(l);
      h = d.innerHTML.split("<br>").length, d.innerHTML.includes("</math>") && (h += d.innerHTML.split("<mrow>").length - 1);
      const p = d.getElementsByTagName("img");
      if (p) {
        const f = a.replace(/<img[^>]*>/g, "").trim() === "";
        await Promise.all([
          ...p
        ].map((m) => new Promise((y) => {
          function x() {
            var b;
            if (m.style.display = "flex", m.style.flexDirection = "column", f) {
              const C = ((b = o.fontSize) == null ? void 0 : b.toString()) ?? window.getComputedStyle(document.body).fontSize, w = parseInt(C, 10) * 5 + "px";
              m.style.minWidth = w, m.style.maxWidth = w;
            } else
              m.style.width = "100%";
            y(m);
          }
          g(x, "setupImage"), setTimeout(() => {
            m.complete && x();
          }), m.addEventListener("error", x), m.addEventListener("load", x);
        })));
      }
      c = d.getBoundingClientRect(), u.attr("width", c.width), u.attr("height", c.height);
    } else {
      r.includes("font-weight: bolder") && st(l).selectAll("tspan").attr("font-weight", ""), h = l.children.length;
      const d = l.children[0];
      (l.textContent === "" || l.textContent.includes("&gt")) && (d.textContent = a[0] + a.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), a[1] === " " && (d.textContent = d.textContent[0] + " " + d.textContent.substring(1))), d.textContent === "undefined" && (d.textContent = ""), c = l.getBBox();
    }
    return n.attr("transform", "translate(0," + (-c.height / (2 * h) + i) + ")"), c.height;
  }
  g(Qi, "addText");
  async function tg(e, t) {
    var i, r;
    const n = ct(), o = n.class.padding ?? 12, s = o, a = t.useHtmlLabels ?? vt(n.htmlLabels) ?? true, l = t;
    l.annotations = l.annotations ?? [], l.members = l.members ?? [], l.methods = l.methods ?? [];
    const { shapeSvg: c, bbox: h } = await Kp(e, t, n, a, s), { labelStyles: d, nodeStyles: u } = G(t);
    t.labelStyle = d, t.cssStyles = l.styles || "";
    const p = ((i = l.styles) == null ? void 0 : i.join(";")) || u || "";
    t.cssStyles || (t.cssStyles = p.replaceAll("!important", "").split(";"));
    const f = l.members.length === 0 && l.methods.length === 0 && !((r = n.class) != null && r.hideEmptyMembersBox), m = Z.svg(c), y = V(t, {});
    t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
    const x = h.width;
    let b = h.height;
    l.members.length === 0 && l.methods.length === 0 ? b += s : l.members.length > 0 && l.methods.length === 0 && (b += s * 2);
    const C = -x / 2, w = -b / 2, k = m.rectangle(C - o, w - o - (f ? o : l.members.length === 0 && l.methods.length === 0 ? -o / 2 : 0), x + 2 * o, b + 2 * o + (f ? o * 2 : l.members.length === 0 && l.methods.length === 0 ? -o : 0), y), _ = c.insert(() => k, ":first-child");
    _.attr("class", "basic label-container");
    const B = _.node().getBBox();
    c.selectAll(".text").each((F, N, D) => {
      var M;
      const L = st(D[N]), T = L.attr("transform");
      let E = 0;
      if (T) {
        const U = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(T);
        U && (E = parseFloat(U[2]));
      }
      let A = E + w + o - (f ? o : l.members.length === 0 && l.methods.length === 0 ? -o / 2 : 0);
      a || (A -= 4);
      let j = C;
      (L.attr("class").includes("label-group") || L.attr("class").includes("annotation-group")) && (j = -((M = L.node()) == null ? void 0 : M.getBBox().width) / 2 || 0, c.selectAll("text").each(function(U, X, K) {
        window.getComputedStyle(K[X]).textAnchor === "middle" && (j = 0);
      })), L.attr("transform", `translate(${j}, ${A})`);
    });
    const I = c.select(".annotation-group").node().getBBox().height - (f ? o / 2 : 0) || 0, z = c.select(".label-group").node().getBBox().height - (f ? o / 2 : 0) || 0, O = c.select(".members-group").node().getBBox().height - (f ? o / 2 : 0) || 0;
    if (l.members.length > 0 || l.methods.length > 0 || f) {
      const F = m.line(B.x, I + z + w + o, B.x + B.width, I + z + w + o, y);
      c.insert(() => F).attr("class", "divider").attr("style", p);
    }
    if (f || l.members.length > 0 || l.methods.length > 0) {
      const F = m.line(B.x, I + z + O + w + s * 2 + o, B.x + B.width, I + z + O + w + o + s * 2, y);
      c.insert(() => F).attr("class", "divider").attr("style", p);
    }
    if (l.look !== "handDrawn" && c.selectAll("path").attr("style", p), _.select(":nth-child(2)").attr("style", p), c.selectAll(".divider").select("path").attr("style", p), t.labelStyle ? c.selectAll("span").attr("style", t.labelStyle) : c.selectAll("span").attr("style", p), !a) {
      const F = RegExp(/color\s*:\s*([^;]*)/), N = F.exec(p);
      if (N) {
        const D = N[0].replace("color", "fill");
        c.selectAll("tspan").attr("style", D);
      } else if (d) {
        const D = F.exec(d);
        if (D) {
          const M = D[0].replace("color", "fill");
          c.selectAll("tspan").attr("style", M);
        }
      }
    }
    return Y(t, _), t.intersect = function(F) {
      return H.rect(t, F);
    }, c;
  }
  g(tg, "classBox");
  async function eg(e, t) {
    var i, r;
    const { labelStyles: n, nodeStyles: o } = G(t);
    t.labelStyle = n;
    const s = t, a = t, l = 20, c = 20, h = "verifyMethod" in t, d = it(t), u = e.insert("g").attr("class", d).attr("id", t.domId ?? t.id);
    let p;
    h ? p = await he(u, `&lt;&lt;${s.type}&gt;&gt;`, 0, t.labelStyle) : p = await he(u, "&lt;&lt;Element&gt;&gt;", 0, t.labelStyle);
    let f = p;
    const m = await he(u, s.name, f, t.labelStyle + "; font-weight: bold;");
    if (f += m + c, h) {
      const I = await he(u, `${s.requirementId ? `Id: ${s.requirementId}` : ""}`, f, t.labelStyle);
      f += I;
      const z = await he(u, `${s.text ? `Text: ${s.text}` : ""}`, f, t.labelStyle);
      f += z;
      const O = await he(u, `${s.risk ? `Risk: ${s.risk}` : ""}`, f, t.labelStyle);
      f += O, await he(u, `${s.verifyMethod ? `Verification: ${s.verifyMethod}` : ""}`, f, t.labelStyle);
    } else {
      const I = await he(u, `${a.type ? `Type: ${a.type}` : ""}`, f, t.labelStyle);
      f += I, await he(u, `${a.docRef ? `Doc Ref: ${a.docRef}` : ""}`, f, t.labelStyle);
    }
    const y = (((i = u.node()) == null ? void 0 : i.getBBox().width) ?? 200) + l, x = (((r = u.node()) == null ? void 0 : r.getBBox().height) ?? 200) + l, b = -y / 2, C = -x / 2, w = Z.svg(u), k = V(t, {});
    t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
    const _ = w.rectangle(b, C, y, x, k), B = u.insert(() => _, ":first-child");
    if (B.attr("class", "basic label-container").attr("style", o), u.selectAll(".label").each((I, z, O) => {
      const F = st(O[z]), N = F.attr("transform");
      let D = 0, M = 0;
      if (N) {
        const E = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(N);
        E && (D = parseFloat(E[1]), M = parseFloat(E[2]));
      }
      const L = M - x / 2;
      let T = b + l / 2;
      (z === 0 || z === 1) && (T = D), F.attr("transform", `translate(${T}, ${L + l})`);
    }), f > p + m + c) {
      const I = w.line(b, C + p + m + c, b + y, C + p + m + c, k);
      u.insert(() => I).attr("style", o);
    }
    return Y(t, B), t.intersect = function(I) {
      return H.rect(t, I);
    }, u;
  }
  g(eg, "requirementBox");
  async function he(e, t, i, r = "") {
    if (t === "")
      return 0;
    const n = e.insert("g").attr("class", "label").attr("style", r), o = ct(), s = o.htmlLabels ?? true, a = await Ne(n, Fa(ni(t)), {
      width: Me(t, o) + 50,
      classes: "markdown-node-label",
      useHtmlLabels: s,
      style: r
    }, o);
    let l;
    if (s) {
      const c = a.children[0], h = st(a);
      l = c.getBoundingClientRect(), h.attr("width", l.width), h.attr("height", l.height);
    } else {
      const c = a.children[0];
      for (const h of c.children)
        h.textContent = h.textContent.replaceAll("&gt;", ">").replaceAll("&lt;", "<"), r && h.setAttribute("style", r);
      l = a.getBBox(), l.height += 6;
    }
    return n.attr("transform", `translate(${-l.width / 2},${-l.height / 2 + i})`), l.height;
  }
  g(he, "addText");
  var nk = g((e) => {
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
  async function ig(e, t, { config: i }) {
    var r, n;
    const { labelStyles: o, nodeStyles: s } = G(t);
    t.labelStyle = o || "";
    const a = 10, l = t.width;
    t.width = (t.width ?? 200) - 10;
    const { shapeSvg: c, bbox: h, label: d } = await ot(e, t, it(t)), u = t.padding || 10;
    let p = "", f;
    "ticket" in t && t.ticket && (r = i == null ? void 0 : i.kanban) != null && r.ticketBaseUrl && (p = (n = i == null ? void 0 : i.kanban) == null ? void 0 : n.ticketBaseUrl.replace("#TICKET#", t.ticket), f = c.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", p).attr("target", "_blank"));
    const m = {
      useHtmlLabels: t.useHtmlLabels,
      labelStyle: t.labelStyle || "",
      width: t.width,
      img: t.img,
      padding: t.padding || 8,
      centerLabel: false
    };
    let y, x;
    f ? { label: y, bbox: x } = await Lo(f, "ticket" in t && t.ticket || "", m) : { label: y, bbox: x } = await Lo(c, "ticket" in t && t.ticket || "", m);
    const { label: b, bbox: C } = await Lo(c, "assigned" in t && t.assigned || "", m);
    t.width = l;
    const w = 10, k = (t == null ? void 0 : t.width) || 0, _ = Math.max(x.height, C.height) / 2, B = Math.max(h.height + w * 2, (t == null ? void 0 : t.height) || 0) + _, I = -k / 2, z = -B / 2;
    d.attr("transform", "translate(" + (u - k / 2) + ", " + (-_ - h.height / 2) + ")"), y.attr("transform", "translate(" + (u - k / 2) + ", " + (-_ + h.height / 2) + ")"), b.attr("transform", "translate(" + (u + k / 2 - C.width - 2 * a) + ", " + (-_ + h.height / 2) + ")");
    let O;
    const { rx: F, ry: N } = t, { cssStyles: D } = t;
    if (t.look === "handDrawn") {
      const M = Z.svg(c), L = V(t, {}), T = F || N ? M.path(Ae(I, z, k, B, F || 0), L) : M.rectangle(I, z, k, B, L);
      O = c.insert(() => T, ":first-child"), O.attr("class", "basic label-container").attr("style", D || null);
    } else {
      O = c.insert("rect", ":first-child"), O.attr("class", "basic label-container __APA__").attr("style", s).attr("rx", F ?? 5).attr("ry", N ?? 5).attr("x", I).attr("y", z).attr("width", k).attr("height", B);
      const M = "priority" in t && t.priority;
      if (M) {
        const L = c.append("line"), T = I + 2, E = z + Math.floor((F ?? 0) / 2), A = z + B - Math.floor((F ?? 0) / 2);
        L.attr("x1", T).attr("y1", E).attr("x2", T).attr("y2", A).attr("stroke-width", "4").attr("stroke", nk(M));
      }
    }
    return Y(t, O), t.height = B, t.intersect = function(M) {
      return H.rect(t, M);
    }, c;
  }
  g(ig, "kanbanItem");
  var ok = [
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
      handler: zp
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
      handler: Op
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
      handler: Pp
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
      handler: Wp
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
      handler: sp
    },
    {
      semanticName: "Start",
      name: "Circle",
      shortName: "circle",
      description: "Starting point",
      aliases: [
        "circ"
      ],
      handler: tp
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
      handler: Fp
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
      handler: gp
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
      handler: _p
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
      handler: wp
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
      handler: Up
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
      handler: Cp
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
      handler: hp
    },
    {
      semanticName: "Text Block",
      name: "Text Block",
      shortName: "text",
      description: "Text block",
      handler: Zp
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
      handler: Ju
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
      handler: Dp
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
      handler: qp
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
      handler: Np
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
      handler: up
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
      handler: fp
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
      handler: rp
    },
    {
      semanticName: "Comment Right",
      name: "Curly Brace",
      shortName: "brace-r",
      description: "Adds a comment",
      handler: np
    },
    {
      semanticName: "Comment with braces on both sides",
      name: "Curly Braces",
      shortName: "braces",
      description: "Adds a comment",
      handler: op
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
      handler: Sp
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
      handler: Xp
    },
    {
      semanticName: "Delay",
      name: "Half-Rounded Rectangle",
      shortName: "delay",
      description: "Represents a delay",
      aliases: [
        "half-rounded-rectangle"
      ],
      handler: pp
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
      handler: Vp
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
      handler: Tp
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
      handler: ap
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
      handler: lp
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
      handler: Gp
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
      handler: Jp
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
      handler: cp
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
      handler: Yp
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
      handler: dp
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
      handler: Ip
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
      handler: Lp
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
      handler: Mp
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
      handler: Qu
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
      handler: ip
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
      handler: Hp
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
      handler: jp
    },
    {
      semanticName: "Paper Tape",
      name: "Flag",
      shortName: "flag",
      description: "Paper tape",
      aliases: [
        "paper-tape"
      ],
      handler: Qp
    },
    {
      semanticName: "Odd",
      name: "Odd",
      shortName: "odd",
      description: "Odd shape",
      internalAliases: [
        "rect_left_inv_arrow"
      ],
      handler: Ep
    },
    {
      semanticName: "Lined Document",
      name: "Lined Document",
      shortName: "lin-doc",
      description: "Lined document",
      aliases: [
        "lined-document"
      ],
      handler: Bp
    }
  ], ak = g(() => {
    const e = [
      ...Object.entries({
        state: Rp,
        choice: Ku,
        note: Ap,
        rectWithTitle: $p,
        labelRect: vp,
        iconSquare: bp,
        iconCircle: yp,
        icon: mp,
        iconRounded: xp,
        imageSquare: kp,
        anchor: Xu,
        kanbanItem: ig,
        classBox: tg,
        erBox: gs,
        requirementBox: eg
      }),
      ...ok.flatMap((t) => [
        t.shortName,
        ..."aliases" in t ? t.aliases : [],
        ..."internalAliases" in t ? t.internalAliases : []
      ].map((i) => [
        i,
        t.handler
      ]))
    ];
    return Object.fromEntries(e);
  }, "generateShapeMap"), rg = ak();
  sk = function(e) {
    return e in rg;
  };
  g(sk, "isValidShape");
  var Hn = /* @__PURE__ */ new Map();
  ng = async function(e, t, i) {
    let r, n;
    t.shape === "rect" && (t.rx && t.ry ? t.shape = "roundedRect" : t.shape = "squareRect");
    const o = t.shape ? rg[t.shape] : void 0;
    if (!o)
      throw new Error(`No such shape: ${t.shape}. Please check your syntax.`);
    if (t.link) {
      let s;
      i.config.securityLevel === "sandbox" ? s = "_top" : t.linkTarget && (s = t.linkTarget || "_blank"), r = e.insert("svg:a").attr("xlink:href", t.link).attr("target", s ?? null), n = await o(r, t, i);
    } else
      n = await o(e, t, i), r = n;
    return t.tooltip && n.attr("title", t.tooltip), Hn.set(t.id, r), t.haveCallback && r.attr("class", r.attr("class") + " clickable"), r;
  };
  g(ng, "insertNode");
  let lk, hk, jl, vn, At, Ui;
  C_ = g((e, t) => {
    Hn.set(t.id, e);
  }, "setNodeElem");
  v_ = g(() => {
    Hn.clear();
  }, "clear");
  w_ = g((e) => {
    const t = Hn.get(e.id);
    $.trace("Transforming node", e.diff, e, "translate(" + (e.x - e.width / 2 - 5) + ", " + e.width / 2 + ")");
    const i = 8, r = e.diff || 0;
    return e.clusterNode ? t.attr("transform", "translate(" + (e.x + r - e.width / 2) + ", " + (e.y - e.height / 2 - i) + ")") : t.attr("transform", "translate(" + e.x + ", " + e.y + ")"), r;
  }, "positionNode");
  lk = g((e, t, i, r, n, o) => {
    t.arrowTypeStart && jl(e, "start", t.arrowTypeStart, i, r, n, o), t.arrowTypeEnd && jl(e, "end", t.arrowTypeEnd, i, r, n, o);
  }, "addEdgeMarkers");
  hk = {
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
  jl = g((e, t, i, r, n, o, s) => {
    var a;
    const l = hk[i];
    if (!l) {
      $.warn(`Unknown arrow type: ${i}`);
      return;
    }
    const c = l.type, h = `${n}_${o}-${c}${t === "start" ? "Start" : "End"}`;
    if (s && s.trim() !== "") {
      const d = s.replace(/[^\dA-Za-z]/g, "_"), u = `${h}_${d}`;
      if (!document.getElementById(u)) {
        const p = document.getElementById(h);
        if (p) {
          const f = p.cloneNode(true);
          f.id = u, f.querySelectorAll("path, circle, line").forEach((m) => {
            m.setAttribute("stroke", s), l.fill && m.setAttribute("fill", s);
          }), (a = p.parentNode) == null || a.appendChild(f);
        }
      }
      e.attr(`marker-${t}`, `url(${r}#${u})`);
    } else
      e.attr(`marker-${t}`, `url(${r}#${h})`);
  }, "addEdgeMarker");
  vn = /* @__PURE__ */ new Map();
  At = /* @__PURE__ */ new Map();
  __ = g(() => {
    vn.clear(), At.clear();
  }, "clear");
  Ui = g((e) => e ? e.reduce((t, i) => t + ";" + i, "") : "", "getLabelStyles");
  ck = g(async (e, t) => {
    let i = vt(ct().flowchart.htmlLabels);
    const r = await Ne(e, t.label, {
      style: Ui(t.labelStyle),
      useHtmlLabels: i,
      addSvgBackground: true,
      isNode: false
    });
    $.info("abc82", t, t.labelType);
    const n = e.insert("g").attr("class", "edgeLabel"), o = n.insert("g").attr("class", "label");
    o.node().appendChild(r);
    let s = r.getBBox();
    if (i) {
      const l = r.children[0], c = st(r);
      s = l.getBoundingClientRect(), c.attr("width", s.width), c.attr("height", s.height);
    }
    o.attr("transform", "translate(" + -s.width / 2 + ", " + -s.height / 2 + ")"), vn.set(t.id, n), t.width = s.width, t.height = s.height;
    let a;
    if (t.startLabelLeft) {
      const l = await Ge(t.startLabelLeft, Ui(t.labelStyle)), c = e.insert("g").attr("class", "edgeTerminals"), h = c.insert("g").attr("class", "inner");
      a = h.node().appendChild(l);
      const d = l.getBBox();
      h.attr("transform", "translate(" + -d.width / 2 + ", " + -d.height / 2 + ")"), At.get(t.id) || At.set(t.id, {}), At.get(t.id).startLeft = c, Ji(a, t.startLabelLeft);
    }
    if (t.startLabelRight) {
      const l = await Ge(t.startLabelRight, Ui(t.labelStyle)), c = e.insert("g").attr("class", "edgeTerminals"), h = c.insert("g").attr("class", "inner");
      a = c.node().appendChild(l), h.node().appendChild(l);
      const d = l.getBBox();
      h.attr("transform", "translate(" + -d.width / 2 + ", " + -d.height / 2 + ")"), At.get(t.id) || At.set(t.id, {}), At.get(t.id).startRight = c, Ji(a, t.startLabelRight);
    }
    if (t.endLabelLeft) {
      const l = await Ge(t.endLabelLeft, Ui(t.labelStyle)), c = e.insert("g").attr("class", "edgeTerminals"), h = c.insert("g").attr("class", "inner");
      a = h.node().appendChild(l);
      const d = l.getBBox();
      h.attr("transform", "translate(" + -d.width / 2 + ", " + -d.height / 2 + ")"), c.node().appendChild(l), At.get(t.id) || At.set(t.id, {}), At.get(t.id).endLeft = c, Ji(a, t.endLabelLeft);
    }
    if (t.endLabelRight) {
      const l = await Ge(t.endLabelRight, Ui(t.labelStyle)), c = e.insert("g").attr("class", "edgeTerminals"), h = c.insert("g").attr("class", "inner");
      a = h.node().appendChild(l);
      const d = l.getBBox();
      h.attr("transform", "translate(" + -d.width / 2 + ", " + -d.height / 2 + ")"), c.node().appendChild(l), At.get(t.id) || At.set(t.id, {}), At.get(t.id).endRight = c, Ji(a, t.endLabelRight);
    }
    return r;
  }, "insertEdgeLabel");
  function Ji(e, t) {
    ct().flowchart.htmlLabels && e && (e.style.width = t.length * 9 + "px", e.style.height = "12px");
  }
  g(Ji, "setTerminalWidth");
  let uk, pk, Hl;
  dk = g((e, t) => {
    $.debug("Moving label abc88 ", e.id, e.label, vn.get(e.id), t);
    let i = t.updatedPath ? t.updatedPath : t.originalPath;
    const r = ct(), { subGraphTitleTotalMargin: n } = Ra(r);
    if (e.label) {
      const o = vn.get(e.id);
      let s = e.x, a = e.y;
      if (i) {
        const l = de.calcLabelPosition(i);
        $.debug("Moving label " + e.label + " from (", s, ",", a, ") to (", l.x, ",", l.y, ") abc88"), t.updatedPath && (s = l.x, a = l.y);
      }
      o.attr("transform", `translate(${s}, ${a + n / 2})`);
    }
    if (e.startLabelLeft) {
      const o = At.get(e.id).startLeft;
      let s = e.x, a = e.y;
      if (i) {
        const l = de.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_left", i);
        s = l.x, a = l.y;
      }
      o.attr("transform", `translate(${s}, ${a})`);
    }
    if (e.startLabelRight) {
      const o = At.get(e.id).startRight;
      let s = e.x, a = e.y;
      if (i) {
        const l = de.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_right", i);
        s = l.x, a = l.y;
      }
      o.attr("transform", `translate(${s}, ${a})`);
    }
    if (e.endLabelLeft) {
      const o = At.get(e.id).endLeft;
      let s = e.x, a = e.y;
      if (i) {
        const l = de.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_left", i);
        s = l.x, a = l.y;
      }
      o.attr("transform", `translate(${s}, ${a})`);
    }
    if (e.endLabelRight) {
      const o = At.get(e.id).endRight;
      let s = e.x, a = e.y;
      if (i) {
        const l = de.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_right", i);
        s = l.x, a = l.y;
      }
      o.attr("transform", `translate(${s}, ${a})`);
    }
  }, "positionEdgeLabel");
  uk = g((e, t) => {
    const i = e.x, r = e.y, n = Math.abs(t.x - i), o = Math.abs(t.y - r), s = e.width / 2, a = e.height / 2;
    return n >= s || o >= a;
  }, "outsideNode");
  pk = g((e, t, i) => {
    $.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(i)}
  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);
    const r = e.x, n = e.y, o = Math.abs(r - i.x), s = e.width / 2;
    let a = i.x < t.x ? s - o : s + o;
    const l = e.height / 2, c = Math.abs(t.y - i.y), h = Math.abs(t.x - i.x);
    if (Math.abs(n - t.y) * s > Math.abs(r - t.x) * l) {
      let d = i.y < t.y ? t.y - l - n : n - l - t.y;
      a = h * d / c;
      const u = {
        x: i.x < t.x ? i.x + a : i.x - h + a,
        y: i.y < t.y ? i.y + c - d : i.y - c + d
      };
      return a === 0 && (u.x = t.x, u.y = t.y), h === 0 && (u.x = t.x), c === 0 && (u.y = t.y), $.debug(`abc89 top/bottom calc, Q ${c}, q ${d}, R ${h}, r ${a}`, u), u;
    } else {
      i.x < t.x ? a = t.x - s - r : a = r - s - t.x;
      let d = c * a / h, u = i.x < t.x ? i.x + h - a : i.x - h + a, p = i.y < t.y ? i.y + d : i.y - d;
      return $.debug(`sides calc abc89, Q ${c}, q ${d}, R ${h}, r ${a}`, {
        _x: u,
        _y: p
      }), a === 0 && (u = t.x, p = t.y), h === 0 && (u = t.x), c === 0 && (p = t.y), {
        x: u,
        y: p
      };
    }
  }, "intersection");
  Hl = g((e, t) => {
    $.warn("abc88 cutPathAtIntersect", e, t);
    let i = [], r = e[0], n = false;
    return e.forEach((o) => {
      if ($.info("abc88 checking point", o, t), !uk(t, o) && !n) {
        const s = pk(t, r, o);
        $.debug("abc88 inside", o, r, s), $.debug("abc88 intersection", s, t);
        let a = false;
        i.forEach((l) => {
          a = a || l.x === s.x && l.y === s.y;
        }), i.some((l) => l.x === s.x && l.y === s.y) ? $.warn("abc88 no intersect", s, i) : i.push(s), n = true;
      } else
        $.warn("abc88 outside", o, r), r = o, n || i.push(o);
    }), $.debug("returning points", i), i;
  }, "cutPathAtIntersect");
  function og(e) {
    const t = [], i = [];
    for (let r = 1; r < e.length - 1; r++) {
      const n = e[r - 1], o = e[r], s = e[r + 1];
      (n.x === o.x && o.y === s.y && Math.abs(o.x - s.x) > 5 && Math.abs(o.y - n.y) > 5 || n.y === o.y && o.x === s.x && Math.abs(o.x - n.x) > 5 && Math.abs(o.y - s.y) > 5) && (t.push(o), i.push(r));
    }
    return {
      cornerPoints: t,
      cornerPointPositions: i
    };
  }
  g(og, "extractCornerPoints");
  let Zl, gk, mk, yk, xk, bk, kk, Ck, vk, wk, _k, Sk, Tk, Bk, Mk, Lk, Ak, Fk, Ek, Ok, dr, ag, Dk;
  Zl = g(function(e, t, i) {
    const r = t.x - e.x, n = t.y - e.y, o = Math.sqrt(r * r + n * n), s = i / o;
    return {
      x: t.x - s * r,
      y: t.y - s * n
    };
  }, "findAdjacentPoint");
  gk = g(function(e) {
    const { cornerPointPositions: t } = og(e), i = [];
    for (let r = 0; r < e.length; r++)
      if (t.includes(r)) {
        const n = e[r - 1], o = e[r + 1], s = e[r], a = Zl(n, s, 5), l = Zl(o, s, 5), c = l.x - a.x, h = l.y - a.y;
        i.push(a);
        const d = Math.sqrt(2) * 2;
        let u = {
          x: s.x,
          y: s.y
        };
        if (Math.abs(o.x - n.x) > 10 && Math.abs(o.y - n.y) >= 10) {
          $.debug("Corner point fixing", Math.abs(o.x - n.x), Math.abs(o.y - n.y));
          const p = 5;
          s.x === a.x ? u = {
            x: c < 0 ? a.x - p + d : a.x + p - d,
            y: h < 0 ? a.y - d : a.y + d
          } : u = {
            x: c < 0 ? a.x - d : a.x + d,
            y: h < 0 ? a.y - p + d : a.y + p - d
          };
        } else
          $.debug("Corner point skipping fixing", Math.abs(o.x - n.x), Math.abs(o.y - n.y));
        i.push(u, l);
      } else
        i.push(e[r]);
    return i;
  }, "fixCorners");
  fk = g(function(e, t, i, r, n, o, s) {
    var a;
    const { handDrawnSeed: l } = ct();
    let c = t.points, h = false;
    const d = n;
    var u = o;
    const p = [];
    for (const O in t.cssCompiledStyles)
      qu(O) || p.push(t.cssCompiledStyles[O]);
    u.intersect && d.intersect && (c = c.slice(1, t.points.length - 1), c.unshift(d.intersect(c[0])), $.debug("Last point APA12", t.start, "-->", t.end, c[c.length - 1], u, u.intersect(c[c.length - 1])), c.push(u.intersect(c[c.length - 1]))), t.toCluster && ($.info("to cluster abc88", i.get(t.toCluster)), c = Hl(t.points, i.get(t.toCluster).node), h = true), t.fromCluster && ($.debug("from cluster abc88", i.get(t.fromCluster), JSON.stringify(c, null, 2)), c = Hl(c.reverse(), i.get(t.fromCluster).node).reverse(), h = true);
    let f = c.filter((O) => !Number.isNaN(O.y));
    f = gk(f);
    let m = qr;
    switch (m = an, t.curve) {
      case "linear":
        m = an;
        break;
      case "basis":
        m = qr;
        break;
      case "cardinal":
        m = Md;
        break;
      case "bumpX":
        m = fh;
        break;
      case "bumpY":
        m = gh;
        break;
      case "catmullRom":
        m = Ad;
        break;
      case "monotoneX":
        m = Id;
        break;
      case "monotoneY":
        m = zd;
        break;
      case "natural":
        m = Rd;
        break;
      case "step":
        m = Nd;
        break;
      case "stepAfter":
        m = Wd;
        break;
      case "stepBefore":
        m = qd;
        break;
      default:
        m = qr;
    }
    const { x: y, y: x } = oy(t), b = Ey().x(y).y(x).curve(m);
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
    let w, k = b(f);
    const _ = Array.isArray(t.style) ? t.style : [
      t.style
    ];
    let B = _.find((O) => O == null ? void 0 : O.startsWith("stroke:"));
    if (t.look === "handDrawn") {
      const O = Z.svg(e);
      Object.assign([], f);
      const F = O.path(k, {
        roughness: 0.3,
        seed: l
      });
      C += " transition", w = st(F).select("path").attr("id", t.id).attr("class", " " + C + (t.classes ? " " + t.classes : "")).attr("style", _ ? _.reduce((D, M) => D + ";" + M, "") : "");
      let N = w.attr("d");
      w.attr("d", N), e.node().appendChild(w.node());
    } else {
      const O = p.join(";"), F = _ ? _.reduce((M, L) => M + L + ";", "") : "";
      let N = "";
      t.animate && (N = " edge-animation-fast"), t.animation && (N = " edge-animation-" + t.animation);
      const D = O ? O + ";" + F + ";" : F;
      w = e.append("path").attr("d", k).attr("id", t.id).attr("class", " " + C + (t.classes ? " " + t.classes : "") + (N ?? "")).attr("style", D), B = (a = D.match(/stroke:([^;]+)/)) == null ? void 0 : a[1];
    }
    let I = "";
    (ct().flowchart.arrowMarkerAbsolute || ct().state.arrowMarkerAbsolute) && (I = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, I = I.replace(/\(/g, "\\(").replace(/\)/g, "\\)")), $.info("arrowTypeStart", t.arrowTypeStart), $.info("arrowTypeEnd", t.arrowTypeEnd), lk(w, t, I, s, r, B);
    let z = {};
    return h && (z.updatedPath = c), z.originalPath = t.points, z;
  }, "insertEdge");
  mk = g((e, t, i, r) => {
    t.forEach((n) => {
      Ek[n](e, i, r);
    });
  }, "insertMarkers");
  yk = g((e, t, i) => {
    $.trace("Making markers for ", i), e.append("defs").append("marker").attr("id", i + "_" + t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e.append("defs").append("marker").attr("id", i + "_" + t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
  }, "extension");
  xk = g((e, t, i) => {
    e.append("defs").append("marker").attr("id", i + "_" + t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", i + "_" + t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  }, "composition");
  bk = g((e, t, i) => {
    e.append("defs").append("marker").attr("id", i + "_" + t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", i + "_" + t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
  }, "aggregation");
  kk = g((e, t, i) => {
    e.append("defs").append("marker").attr("id", i + "_" + t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", i + "_" + t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
  }, "dependency");
  Ck = g((e, t, i) => {
    e.append("defs").append("marker").attr("id", i + "_" + t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", i + "_" + t + "-lollipopEnd").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
  }, "lollipop");
  vk = g((e, t, i) => {
    e.append("marker").attr("id", i + "_" + t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", i + "_" + t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  }, "point");
  wk = g((e, t, i) => {
    e.append("marker").attr("id", i + "_" + t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", i + "_" + t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
  }, "circle");
  _k = g((e, t, i) => {
    e.append("marker").attr("id", i + "_" + t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", i + "_" + t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
  }, "cross");
  Sk = g((e, t, i) => {
    e.append("defs").append("marker").attr("id", i + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
  }, "barb");
  Tk = g((e, t, i) => {
    e.append("defs").append("marker").attr("id", i + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18"), e.append("defs").append("marker").attr("id", i + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18");
  }, "only_one");
  Bk = g((e, t, i) => {
    const r = e.append("defs").append("marker").attr("id", i + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
    r.append("circle").attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6), r.append("path").attr("d", "M9,0 L9,18");
    const n = e.append("defs").append("marker").attr("id", i + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
    n.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6), n.append("path").attr("d", "M21,0 L21,18");
  }, "zero_or_one");
  Mk = g((e, t, i) => {
    e.append("defs").append("marker").attr("id", i + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"), e.append("defs").append("marker").attr("id", i + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
  }, "one_or_more");
  Lk = g((e, t, i) => {
    const r = e.append("defs").append("marker").attr("id", i + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
    r.append("circle").attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6), r.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
    const n = e.append("defs").append("marker").attr("id", i + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
    n.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6), n.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
  }, "zero_or_more");
  Ak = g((e, t, i) => {
    e.append("defs").append("marker").attr("id", i + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("path").attr("d", `M0,0
      L20,10
      M20,10
      L0,20`);
  }, "requirement_arrow");
  Fk = g((e, t, i) => {
    const r = e.append("defs").append("marker").attr("id", i + "_" + t + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("g");
    r.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), r.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), r.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10);
  }, "requirement_contains");
  Ek = {
    extension: yk,
    composition: xk,
    aggregation: bk,
    dependency: kk,
    lollipop: Ck,
    point: vk,
    circle: wk,
    cross: _k,
    barb: Sk,
    only_one: Tk,
    zero_or_one: Bk,
    one_or_more: Mk,
    zero_or_more: Lk,
    requirement_arrow: Ak,
    requirement_contains: Fk
  };
  $k = mk;
  Ok = {
    common: Mi,
    getConfig: Ut,
    insertCluster: W2,
    insertEdge: fk,
    insertEdgeLabel: ck,
    insertMarkers: $k,
    insertNode: ng,
    interpolateToCurve: Ga,
    labelHelper: ot,
    log: $,
    positionEdgeLabel: dk
  };
  dr = {};
  ag = g((e) => {
    for (const t of e)
      dr[t.name] = t;
  }, "registerLayoutLoaders");
  Dk = g(() => {
    ag([
      {
        name: "dagre",
        loader: g(async () => await gt(() => import("./dagre-OKDRZEBW-BCbVXwiA-c9e083f7.js"), ["static/js/dagre-OKDRZEBW-BCbVXwiA-c9e083f7.js","static/js/graph-S7kq1CHN-26cf87d4.js","static/js/_baseUniq-DmAMCrPp-6d586603.js","static/js/layout-4labnYEG-b2dd9f73.js","static/js/_basePickBy-9qJ8CywS-494a5f5d.js","static/js/clone-DhFCwC0s-7a31c97a.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/copy-NOBrwKqN-54f5154b.js"]), "loader")
      }
    ]);
  }, "registerDefaultLayoutLoaders");
  Dk();
  let sg, lg, hg, zk, Pk, Rk, Nk, cg, fs;
  S_ = g(async (e, t) => {
    if (!(e.layoutAlgorithm in dr))
      throw new Error(`Unknown layout algorithm: ${e.layoutAlgorithm}`);
    const i = dr[e.layoutAlgorithm];
    return (await i.loader()).render(e, t, Ok, {
      algorithm: i.algorithm
    });
  }, "render");
  T_ = g((e = "", { fallback: t = "dagre" } = {}) => {
    if (e in dr)
      return e;
    if (t in dr)
      return $.warn(`Layout algorithm ${e} is not registered. Using ${t} as fallback.`), t;
    throw new Error(`Both layout algorithms ${e} and ${t} are not registered.`);
  }, "getRegisteredLayoutAlgorithm");
  Vl = {
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
  Ik = g((e) => {
    var t;
    const { securityLevel: i } = ct();
    let r = st("body");
    if (i === "sandbox") {
      const n = ((t = st(`#i${e}`).node()) == null ? void 0 : t.contentDocument) ?? document;
      r = st(n.body);
    }
    return r.select(`#${e}`);
  }, "selectSvgElement");
  sg = "comm";
  lg = "rule";
  hg = "decl";
  zk = "@import";
  Pk = "@namespace";
  Rk = "@keyframes";
  Nk = "@layer";
  cg = Math.abs;
  fs = String.fromCharCode;
  function dg(e) {
    return e.trim();
  }
  function Zr(e, t, i) {
    return e.replace(t, i);
  }
  function qk(e, t, i) {
    return e.indexOf(t, i);
  }
  function xi(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function Ti(e, t, i) {
    return e.slice(t, i);
  }
  function ce(e) {
    return e.length;
  }
  function Wk(e) {
    return e.length;
  }
  function Or(e, t) {
    return t.push(e), e;
  }
  var Zn = 1, Bi = 1, ug = 0, Kt = 0, kt = 0, $i = "";
  function ms(e, t, i, r, n, o, s, a) {
    return {
      value: e,
      root: t,
      parent: i,
      type: r,
      props: n,
      children: o,
      line: Zn,
      column: Bi,
      length: s,
      return: "",
      siblings: a
    };
  }
  function jk() {
    return kt;
  }
  function Hk() {
    return kt = Kt > 0 ? xi($i, --Kt) : 0, Bi--, kt === 10 && (Bi = 1, Zn--), kt;
  }
  function oe() {
    return kt = Kt < ug ? xi($i, Kt++) : 0, Bi++, kt === 10 && (Bi = 1, Zn++), kt;
  }
  function $e() {
    return xi($i, Kt);
  }
  function Vr() {
    return Kt;
  }
  function Vn(e, t) {
    return Ti($i, e, t);
  }
  function ur(e) {
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
  function Zk(e) {
    return Zn = Bi = 1, ug = ce($i = e), Kt = 0, [];
  }
  function Vk(e) {
    return $i = "", e;
  }
  function Ao(e) {
    return dg(Vn(Kt - 1, ma(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function Uk(e) {
    for (; (kt = $e()) && kt < 33; )
      oe();
    return ur(e) > 2 || ur(kt) > 3 ? "" : " ";
  }
  function Yk(e, t) {
    for (; --t && oe() && !(kt < 48 || kt > 102 || kt > 57 && kt < 65 || kt > 70 && kt < 97); )
      ;
    return Vn(e, Vr() + (t < 6 && $e() == 32 && oe() == 32));
  }
  function ma(e) {
    for (; oe(); )
      switch (kt) {
        case e:
          return Kt;
        case 34:
        case 39:
          e !== 34 && e !== 39 && ma(kt);
          break;
        case 40:
          e === 41 && ma(e);
          break;
        case 92:
          oe();
          break;
      }
    return Kt;
  }
  function Gk(e, t) {
    for (; oe() && e + kt !== 57 && !(e + kt === 84 && $e() === 47); )
      ;
    return "/*" + Vn(t, Kt - 1) + "*" + fs(e === 47 ? e : oe());
  }
  function Xk(e) {
    for (; !ur($e()); )
      oe();
    return Vn(e, Kt);
  }
  function Qk(e) {
    return Vk(Ur("", null, null, null, [
      ""
    ], e = Zk(e), 0, [
      0
    ], e));
  }
  function Ur(e, t, i, r, n, o, s, a, l) {
    for (var c = 0, h = 0, d = s, u = 0, p = 0, f = 0, m = 1, y = 1, x = 1, b = 0, C = "", w = n, k = o, _ = r, B = C; y; )
      switch (f = b, b = oe()) {
        case 40:
          if (f != 108 && xi(B, d - 1) == 58) {
            qk(B += Zr(Ao(b), "&", "&\f"), "&\f", cg(c ? a[c - 1] : 0)) != -1 && (x = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          B += Ao(b);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          B += Uk(f);
          break;
        case 92:
          B += Yk(Vr() - 1, 7);
          continue;
        case 47:
          switch ($e()) {
            case 42:
            case 47:
              Or(Jk(Gk(oe(), Vr()), t, i, l), l), (ur(f || 1) == 5 || ur($e() || 1) == 5) && ce(B) && Ti(B, -1, void 0) !== " " && (B += " ");
              break;
            default:
              B += "/";
          }
          break;
        case 123 * m:
          a[c++] = ce(B) * x;
        case 125 * m:
        case 59:
        case 0:
          switch (b) {
            case 0:
            case 125:
              y = 0;
            case 59 + h:
              x == -1 && (B = Zr(B, /\f/g, "")), p > 0 && (ce(B) - d || m === 0 && f === 47) && Or(p > 32 ? Yl(B + ";", r, i, d - 1, l) : Yl(Zr(B, " ", "") + ";", r, i, d - 2, l), l);
              break;
            case 59:
              B += ";";
            default:
              if (Or(_ = Ul(B, t, i, c, h, n, a, C, w = [], k = [], d, o), o), b === 123)
                if (h === 0)
                  Ur(B, t, _, _, w, o, d, a, k);
                else {
                  switch (u) {
                    case 99:
                      if (xi(B, 3) === 110)
                        break;
                    case 108:
                      if (xi(B, 2) === 97)
                        break;
                    default:
                      h = 0;
                    case 100:
                    case 109:
                    case 115:
                  }
                  h ? Ur(e, _, _, r && Or(Ul(e, _, _, 0, 0, n, a, C, n, w = [], d, k), k), n, k, d, a, r ? w : k) : Ur(B, _, _, _, [
                    ""
                  ], k, 0, a, k);
                }
          }
          c = h = p = 0, m = x = 1, C = B = "", d = s;
          break;
        case 58:
          d = 1 + ce(B), p = f;
        default:
          if (m < 1) {
            if (b == 123)
              --m;
            else if (b == 125 && m++ == 0 && Hk() == 125)
              continue;
          }
          switch (B += fs(b), b * m) {
            case 38:
              x = h > 0 ? 1 : (B += "\f", -1);
              break;
            case 44:
              a[c++] = (ce(B) - 1) * x, x = 1;
              break;
            case 64:
              $e() === 45 && (B += Ao(oe())), u = $e(), h = d = ce(C = B += Xk(Vr())), b++;
              break;
            case 45:
              f === 45 && ce(B) == 2 && (m = 0);
          }
      }
    return o;
  }
  function Ul(e, t, i, r, n, o, s, a, l, c, h, d) {
    for (var u = n - 1, p = n === 0 ? o : [
      ""
    ], f = Wk(p), m = 0, y = 0, x = 0; m < r; ++m)
      for (var b = 0, C = Ti(e, u + 1, u = cg(y = s[m])), w = e; b < f; ++b)
        (w = dg(y > 0 ? p[b] + " " + C : Zr(C, /&\f/g, p[b]))) && (l[x++] = w);
    return ms(e, t, i, n === 0 ? lg : a, l, c, h, d);
  }
  function Jk(e, t, i, r) {
    return ms(e, t, i, sg, fs(jk()), Ti(e, 2, -2), 0, r);
  }
  function Yl(e, t, i, r, n) {
    return ms(e, t, i, hg, Ti(e, 0, r), Ti(e, r + 1, -1), r, n);
  }
  function ya(e, t) {
    for (var i = "", r = 0; r < e.length; r++)
      i += t(e[r], r, e, t) || "";
    return i;
  }
  function Kk(e, t, i, r) {
    switch (e.type) {
      case Nk:
        if (e.children.length)
          break;
      case zk:
      case Pk:
      case hg:
        return e.return = e.return || e.value;
      case sg:
        return "";
      case Rk:
        return e.return = e.value + "{" + ya(e.children, r) + "}";
      case lg:
        if (!ce(e.value = e.props.join(",")))
          return "";
    }
    return ce(i = ya(e.children, r)) ? e.return = e.value + "{" + i + "}" : "";
  }
  var tC = Vd(Object.keys, Object), eC = Object.prototype, iC = eC.hasOwnProperty;
  rC = function(e) {
    if (!In(e))
      return tC(e);
    var t = [];
    for (var i in Object(e))
      iC.call(e, i) && i != "constructor" && t.push(i);
    return t;
  };
  let xa, ba, Ca, Gl, nC, Xl, Ql, Jl, Kl, oC, aC, sC, lC, hC;
  xa = ri(ge, "DataView");
  ba = ri(ge, "Promise");
  ka = ri(ge, "Set");
  Ca = ri(ge, "WeakMap");
  Gl = "[object Map]";
  nC = "[object Object]";
  Xl = "[object Promise]";
  Ql = "[object Set]";
  Jl = "[object WeakMap]";
  Kl = "[object DataView]";
  oC = ii(xa);
  aC = ii(cr);
  sC = ii(ba);
  lC = ii(ka);
  hC = ii(Ca);
  Ze = Li;
  (xa && Ze(new xa(new ArrayBuffer(1))) != Kl || cr && Ze(new cr()) != Gl || ba && Ze(ba.resolve()) != Xl || ka && Ze(new ka()) != Ql || Ca && Ze(new Ca()) != Jl) && (Ze = function(e) {
    var t = Li(e), i = t == nC ? e.constructor : void 0, r = i ? ii(i) : "";
    if (r)
      switch (r) {
        case oC:
          return Kl;
        case aC:
          return Gl;
        case sC:
          return Xl;
        case lC:
          return Ql;
        case hC:
          return Jl;
      }
    return t;
  });
  var cC = "[object Map]", dC = "[object Set]", uC = Object.prototype, pC = uC.hasOwnProperty;
  th = function(e) {
    if (e == null)
      return true;
    if (zn(e) && (pn(e) || typeof e == "string" || typeof e.splice == "function" || Ua(e) || Ya(e) || un(e)))
      return !e.length;
    var t = Ze(e);
    if (t == cC || t == dC)
      return !e.size;
    if (In(e))
      return !rC(e).length;
    for (var i in e)
      if (pC.call(e, i))
        return false;
    return true;
  };
  var pg = "c4", gC = g((e) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e), "detector"), fC = g(async () => {
    const { diagram: e } = await gt(() => import("./c4Diagram-VJAJSXHY-DD5Ng5as-ed1369fd.js"), ["static/js/c4Diagram-VJAJSXHY-DD5Ng5as-ed1369fd.js","static/js/chunk-D6G4REZN-DCNwFAb5-ecd5c109.js","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/copy-NOBrwKqN-54f5154b.js"]);
    return {
      id: pg,
      diagram: e
    };
  }, "loader"), mC = {
    id: pg,
    detector: gC,
    loader: fC
  }, yC = mC, gg = "flowchart", xC = g((e, t) => {
    var i, r;
    return ((i = t == null ? void 0 : t.flowchart) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" || ((r = t == null ? void 0 : t.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? false : /^\s*graph/.test(e);
  }, "detector"), bC = g(async () => {
    const { diagram: e } = await gt(() => import("./flowDiagram-4HSFHLVR-CbFzULLR-5cd73613.js"), ["static/js/flowDiagram-4HSFHLVR-CbFzULLR-5cd73613.js","static/js/chunk-RZ5BOZE2-D7vSOP4k-fa3f167d.js","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/copy-NOBrwKqN-54f5154b.js","static/js/channel-CjSQKY6b-473d2e61.js"]);
    return {
      id: gg,
      diagram: e
    };
  }, "loader"), kC = {
    id: gg,
    detector: xC,
    loader: bC
  }, CC = kC, fg = "flowchart-v2", vC = g((e, t) => {
    var i, r, n;
    return ((i = t == null ? void 0 : t.flowchart) == null ? void 0 : i.defaultRenderer) === "dagre-d3" ? false : (((r = t == null ? void 0 : t.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" && (t.layout = "elk"), /^\s*graph/.test(e) && ((n = t == null ? void 0 : t.flowchart) == null ? void 0 : n.defaultRenderer) === "dagre-wrapper" ? true : /^\s*flowchart/.test(e));
  }, "detector"), wC = g(async () => {
    const { diagram: e } = await gt(() => import("./flowDiagram-4HSFHLVR-CbFzULLR-5cd73613.js"), ["static/js/flowDiagram-4HSFHLVR-CbFzULLR-5cd73613.js","static/js/chunk-RZ5BOZE2-D7vSOP4k-fa3f167d.js","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/copy-NOBrwKqN-54f5154b.js","static/js/channel-CjSQKY6b-473d2e61.js"]);
    return {
      id: fg,
      diagram: e
    };
  }, "loader"), _C = {
    id: fg,
    detector: vC,
    loader: wC
  }, SC = _C, mg = "er", TC = g((e) => /^\s*erDiagram/.test(e), "detector"), BC = g(async () => {
    const { diagram: e } = await gt(() => import("./erDiagram-Q7BY3M3F-BVKqtVXb-b816aecb.js"), ["static/js/erDiagram-Q7BY3M3F-BVKqtVXb-b816aecb.js","static/js/chunk-RZ5BOZE2-D7vSOP4k-fa3f167d.js","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/copy-NOBrwKqN-54f5154b.js","static/js/channel-CjSQKY6b-473d2e61.js"]);
    return {
      id: mg,
      diagram: e
    };
  }, "loader"), MC = {
    id: mg,
    detector: TC,
    loader: BC
  }, LC = MC, yg = "gitGraph", AC = g((e) => /^\s*gitGraph/.test(e), "detector"), FC = g(async () => {
    const { diagram: e } = await gt(() => import("./gitGraphDiagram-7IBYFJ6S-CyU1_ZyL-e9c8c55a.js"), ["static/js/gitGraphDiagram-7IBYFJ6S-CyU1_ZyL-e9c8c55a.js","static/js/chunk-4BMEZGHF-BCJ74EV_-576729df.js","static/js/chunk-XZIHB7SX-BnGAXmV_-c74ccf68.js","static/js/mermaid-parser.core-DZwaOB10-cee09aad.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/_baseUniq-DmAMCrPp-6d586603.js","static/js/_basePickBy-9qJ8CywS-494a5f5d.js","static/js/clone-DhFCwC0s-7a31c97a.js","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/copy-NOBrwKqN-54f5154b.js"]);
    return {
      id: yg,
      diagram: e
    };
  }, "loader"), EC = {
    id: yg,
    detector: AC,
    loader: FC
  }, $C = EC, xg = "gantt", OC = g((e) => /^\s*gantt/.test(e), "detector"), DC = g(async () => {
    const { diagram: e } = await gt(() => import("./ganttDiagram-APWFNJXF-DM_ojKvL-ae2c1925.js"), ["static/js/ganttDiagram-APWFNJXF-DM_ojKvL-ae2c1925.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/copy-NOBrwKqN-54f5154b.js","static/js/linear-C9c85zMl-77e2a922.js","static/js/init-DjUOC4st-cac434d1.js","static/js/min-DLf0xQMm-9aab427e.js"]);
    return {
      id: xg,
      diagram: e
    };
  }, "loader"), IC = {
    id: xg,
    detector: OC,
    loader: DC
  }, zC = IC, bg = "info", PC = g((e) => /^\s*info/.test(e), "detector"), RC = g(async () => {
    const { diagram: e } = await gt(() => import("./infoDiagram-PH2N3AL5-DzDLh8nh-bb5c65d0.js"), ["static/js/infoDiagram-PH2N3AL5-DzDLh8nh-bb5c65d0.js","static/js/mermaid-parser.core-DZwaOB10-cee09aad.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/_baseUniq-DmAMCrPp-6d586603.js","static/js/_basePickBy-9qJ8CywS-494a5f5d.js","static/js/clone-DhFCwC0s-7a31c97a.js","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/copy-NOBrwKqN-54f5154b.js"]);
    return {
      id: bg,
      diagram: e
    };
  }, "loader"), NC = {
    id: bg,
    detector: PC,
    loader: RC
  }, kg = "pie", qC = g((e) => /^\s*pie/.test(e), "detector"), WC = g(async () => {
    const { diagram: e } = await gt(() => import("./pieDiagram-IB7DONF6-DAxiiaU6-fcef0f50.js"), ["static/js/pieDiagram-IB7DONF6-DAxiiaU6-fcef0f50.js","static/js/chunk-4BMEZGHF-BCJ74EV_-576729df.js","static/js/mermaid-parser.core-DZwaOB10-cee09aad.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/_baseUniq-DmAMCrPp-6d586603.js","static/js/_basePickBy-9qJ8CywS-494a5f5d.js","static/js/clone-DhFCwC0s-7a31c97a.js","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/copy-NOBrwKqN-54f5154b.js","static/js/arc-DRAgoghf-34b8a53f.js","static/js/ordinal-DfAQgscy-dbc3c131.js","static/js/init-DjUOC4st-cac434d1.js"]);
    return {
      id: kg,
      diagram: e
    };
  }, "loader"), jC = {
    id: kg,
    detector: qC,
    loader: WC
  }, Cg = "quadrantChart", HC = g((e) => /^\s*quadrantChart/.test(e), "detector"), ZC = g(async () => {
    const { diagram: e } = await gt(() => import("./quadrantDiagram-7GDLP6J5-CdcDDICc-536a34b5.js"), ["static/js/quadrantDiagram-7GDLP6J5-CdcDDICc-536a34b5.js","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/copy-NOBrwKqN-54f5154b.js","static/js/linear-C9c85zMl-77e2a922.js","static/js/init-DjUOC4st-cac434d1.js"]);
    return {
      id: Cg,
      diagram: e
    };
  }, "loader"), VC = {
    id: Cg,
    detector: HC,
    loader: ZC
  }, UC = VC, vg = "xychart", YC = g((e) => /^\s*xychart-beta/.test(e), "detector"), GC = g(async () => {
    const { diagram: e } = await gt(() => import("./xychartDiagram-VJFVF3MP-BpD00wFs-4d96ecf4.js"), ["static/js/xychartDiagram-VJFVF3MP-BpD00wFs-4d96ecf4.js","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/copy-NOBrwKqN-54f5154b.js","static/js/init-DjUOC4st-cac434d1.js","static/js/ordinal-DfAQgscy-dbc3c131.js","static/js/linear-C9c85zMl-77e2a922.js"]);
    return {
      id: vg,
      diagram: e
    };
  }, "loader"), XC = {
    id: vg,
    detector: YC,
    loader: GC
  }, QC = XC, wg = "requirement", JC = g((e) => /^\s*requirement(Diagram)?/.test(e), "detector"), KC = g(async () => {
    const { diagram: e } = await gt(() => import("./requirementDiagram-KVF5MWMF-DjHi9oP_-57678468.js"), ["static/js/requirementDiagram-KVF5MWMF-DjHi9oP_-57678468.js","static/js/chunk-RZ5BOZE2-D7vSOP4k-fa3f167d.js","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/copy-NOBrwKqN-54f5154b.js"]);
    return {
      id: wg,
      diagram: e
    };
  }, "loader"), tv = {
    id: wg,
    detector: JC,
    loader: KC
  }, ev = tv, _g = "sequence", iv = g((e) => /^\s*sequenceDiagram/.test(e), "detector"), rv = g(async () => {
    const { diagram: e } = await gt(() => import("./sequenceDiagram-X6HHIX6F-D0OTQWL7-e2d2a7ae.js"), ["static/js/sequenceDiagram-X6HHIX6F-D0OTQWL7-e2d2a7ae.js","static/js/chunk-D6G4REZN-DCNwFAb5-ecd5c109.js","static/js/chunk-XZIHB7SX-BnGAXmV_-c74ccf68.js","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/copy-NOBrwKqN-54f5154b.js"]);
    return {
      id: _g,
      diagram: e
    };
  }, "loader"), nv = {
    id: _g,
    detector: iv,
    loader: rv
  }, ov = nv, Sg = "class", av = g((e, t) => {
    var i;
    return ((i = t == null ? void 0 : t.class) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? false : /^\s*classDiagram/.test(e);
  }, "detector"), sv = g(async () => {
    const { diagram: e } = await gt(() => import("./classDiagram-GIVACNV2-DABNz8Ze-1459198a.js"), ["static/js/classDiagram-GIVACNV2-DABNz8Ze-1459198a.js","static/js/chunk-A2AXSNBT-992XbarD-8a6247ea.js","static/js/chunk-RZ5BOZE2-D7vSOP4k-fa3f167d.js","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/copy-NOBrwKqN-54f5154b.js"]);
    return {
      id: Sg,
      diagram: e
    };
  }, "loader"), lv = {
    id: Sg,
    detector: av,
    loader: sv
  }, hv = lv, Tg = "classDiagram", cv = g((e, t) => {
    var i;
    return /^\s*classDiagram/.test(e) && ((i = t == null ? void 0 : t.class) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? true : /^\s*classDiagram-v2/.test(e);
  }, "detector"), dv = g(async () => {
    const { diagram: e } = await gt(() => import("./classDiagram-v2-COTLJTTW-DABNz8Ze-1459198a.js"), ["static/js/classDiagram-v2-COTLJTTW-DABNz8Ze-1459198a.js","static/js/chunk-A2AXSNBT-992XbarD-8a6247ea.js","static/js/chunk-RZ5BOZE2-D7vSOP4k-fa3f167d.js","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/copy-NOBrwKqN-54f5154b.js"]);
    return {
      id: Tg,
      diagram: e
    };
  }, "loader"), uv = {
    id: Tg,
    detector: cv,
    loader: dv
  }, pv = uv, Bg = "state", gv = g((e, t) => {
    var i;
    return ((i = t == null ? void 0 : t.state) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? false : /^\s*stateDiagram/.test(e);
  }, "detector"), fv = g(async () => {
    const { diagram: e } = await gt(() => import("./stateDiagram-DGXRK772-Cga61Oy0-0931c5f8.js"), ["static/js/stateDiagram-DGXRK772-Cga61Oy0-0931c5f8.js","static/js/chunk-AEK57VVT-BGHUhwEk-239c44b3.js","static/js/chunk-RZ5BOZE2-D7vSOP4k-fa3f167d.js","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/copy-NOBrwKqN-54f5154b.js","static/js/graph-S7kq1CHN-26cf87d4.js","static/js/_baseUniq-DmAMCrPp-6d586603.js","static/js/layout-4labnYEG-b2dd9f73.js","static/js/_basePickBy-9qJ8CywS-494a5f5d.js"]);
    return {
      id: Bg,
      diagram: e
    };
  }, "loader"), mv = {
    id: Bg,
    detector: gv,
    loader: fv
  }, yv = mv, Mg = "stateDiagram", xv = g((e, t) => {
    var i;
    return !!(/^\s*stateDiagram-v2/.test(e) || /^\s*stateDiagram/.test(e) && ((i = t == null ? void 0 : t.state) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper");
  }, "detector"), bv = g(async () => {
    const { diagram: e } = await gt(() => import("./stateDiagram-v2-YXO3MK2T-CGCK18Ym-55b3d8a5.js"), ["static/js/stateDiagram-v2-YXO3MK2T-CGCK18Ym-55b3d8a5.js","static/js/chunk-AEK57VVT-BGHUhwEk-239c44b3.js","static/js/chunk-RZ5BOZE2-D7vSOP4k-fa3f167d.js","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/copy-NOBrwKqN-54f5154b.js"]);
    return {
      id: Mg,
      diagram: e
    };
  }, "loader"), kv = {
    id: Mg,
    detector: xv,
    loader: bv
  }, Cv = kv, Lg = "journey", vv = g((e) => /^\s*journey/.test(e), "detector"), wv = g(async () => {
    const { diagram: e } = await gt(() => import("./journeyDiagram-U35MCT3I-BB_UWnB0-5a7b9b1e.js"), ["static/js/journeyDiagram-U35MCT3I-BB_UWnB0-5a7b9b1e.js","static/js/chunk-D6G4REZN-DCNwFAb5-ecd5c109.js","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/copy-NOBrwKqN-54f5154b.js","static/js/arc-DRAgoghf-34b8a53f.js"]);
    return {
      id: Lg,
      diagram: e
    };
  }, "loader"), _v = {
    id: Lg,
    detector: vv,
    loader: wv
  }, Sv = _v, Tv = g((e, t, i) => {
    $.debug(`rendering svg for syntax error
`);
    const r = Ik(t), n = r.append("g");
    r.attr("viewBox", "0 0 2412 512"), Rh(r, 100, 512, true), n.append("path").attr("class", "error-icon").attr("d", "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"), n.append("path").attr("class", "error-icon").attr("d", "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"), n.append("path").attr("class", "error-icon").attr("d", "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"), n.append("path").attr("class", "error-icon").attr("d", "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"), n.append("path").attr("class", "error-icon").attr("d", "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"), n.append("path").attr("class", "error-icon").attr("d", "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"), n.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), n.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${i}`);
  }, "draw"), Ag = {
    draw: Tv
  }, Bv = Ag, Mv = {
    db: {},
    renderer: Ag,
    parser: {
      parse: g(() => {
      }, "parse")
    }
  }, Lv = Mv, Fg = "flowchart-elk", Av = g((e, t = {}) => {
    var i;
    return /^\s*flowchart-elk/.test(e) || /^\s*flowchart|graph/.test(e) && ((i = t == null ? void 0 : t.flowchart) == null ? void 0 : i.defaultRenderer) === "elk" ? (t.layout = "elk", true) : false;
  }, "detector"), Fv = g(async () => {
    const { diagram: e } = await gt(() => import("./flowDiagram-4HSFHLVR-CbFzULLR-5cd73613.js"), ["static/js/flowDiagram-4HSFHLVR-CbFzULLR-5cd73613.js","static/js/chunk-RZ5BOZE2-D7vSOP4k-fa3f167d.js","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/copy-NOBrwKqN-54f5154b.js","static/js/channel-CjSQKY6b-473d2e61.js"]);
    return {
      id: Fg,
      diagram: e
    };
  }, "loader"), Ev = {
    id: Fg,
    detector: Av,
    loader: Fv
  }, $v = Ev, Eg = "timeline", Ov = g((e) => /^\s*timeline/.test(e), "detector"), Dv = g(async () => {
    const { diagram: e } = await gt(() => import("./timeline-definition-BDJGKUSR-D7ttvBQz-7d27ac85.js"), ["static/js/timeline-definition-BDJGKUSR-D7ttvBQz-7d27ac85.js","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/copy-NOBrwKqN-54f5154b.js","static/js/arc-DRAgoghf-34b8a53f.js"]);
    return {
      id: Eg,
      diagram: e
    };
  }, "loader"), Iv = {
    id: Eg,
    detector: Ov,
    loader: Dv
  }, zv = Iv, $g = "mindmap", Pv = g((e) => /^\s*mindmap/.test(e), "detector"), Rv = g(async () => {
    const { diagram: e } = await gt(() => import("./mindmap-definition-ALO5MXBD-CxVnjMXW-db0d9a49.js"), ["static/js/mindmap-definition-ALO5MXBD-CxVnjMXW-db0d9a49.js","static/js/cytoscape.esm-Swd9B-1A-1060bb3e.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/copy-NOBrwKqN-54f5154b.js"]);
    return {
      id: $g,
      diagram: e
    };
  }, "loader"), Nv = {
    id: $g,
    detector: Pv,
    loader: Rv
  }, qv = Nv, Og = "kanban", Wv = g((e) => /^\s*kanban/.test(e), "detector"), jv = g(async () => {
    const { diagram: e } = await gt(() => import("./kanban-definition-NDS4AKOZ-CfwQ3xAT-e92a876e.js"), ["static/js/kanban-definition-NDS4AKOZ-CfwQ3xAT-e92a876e.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/copy-NOBrwKqN-54f5154b.js"]);
    return {
      id: Og,
      diagram: e
    };
  }, "loader"), Hv = {
    id: Og,
    detector: Wv,
    loader: jv
  }, Zv = Hv, Dg = "sankey", Vv = g((e) => /^\s*sankey-beta/.test(e), "detector"), Uv = g(async () => {
    const { diagram: e } = await gt(() => import("./sankeyDiagram-QLVOVGJD-XSeKx5Me-de2da31f.js"), ["static/js/sankeyDiagram-QLVOVGJD-XSeKx5Me-de2da31f.js","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/copy-NOBrwKqN-54f5154b.js","static/js/ordinal-DfAQgscy-dbc3c131.js","static/js/init-DjUOC4st-cac434d1.js","static/js/colors-BD7LS4qt-ca223d59.js"]);
    return {
      id: Dg,
      diagram: e
    };
  }, "loader"), Yv = {
    id: Dg,
    detector: Vv,
    loader: Uv
  }, Gv = Yv, Ig = "packet", Xv = g((e) => /^\s*packet-beta/.test(e), "detector"), Qv = g(async () => {
    const { diagram: e } = await gt(() => import("./diagram-VNBRO52H-BN3qsF-7-f069ecca.js"), ["static/js/diagram-VNBRO52H-BN3qsF-7-f069ecca.js","static/js/chunk-4BMEZGHF-BCJ74EV_-576729df.js","static/js/mermaid-parser.core-DZwaOB10-cee09aad.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/_baseUniq-DmAMCrPp-6d586603.js","static/js/_basePickBy-9qJ8CywS-494a5f5d.js","static/js/clone-DhFCwC0s-7a31c97a.js","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/copy-NOBrwKqN-54f5154b.js"]);
    return {
      id: Ig,
      diagram: e
    };
  }, "loader"), Jv = {
    id: Ig,
    detector: Xv,
    loader: Qv
  }, zg = "radar", Kv = g((e) => /^\s*radar-beta/.test(e), "detector"), tw = g(async () => {
    const { diagram: e } = await gt(() => import("./diagram-SSKATNLV-Bsw9Xbtx-b6c377c4.js"), ["static/js/diagram-SSKATNLV-Bsw9Xbtx-b6c377c4.js","static/js/chunk-4BMEZGHF-BCJ74EV_-576729df.js","static/js/mermaid-parser.core-DZwaOB10-cee09aad.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/_baseUniq-DmAMCrPp-6d586603.js","static/js/_basePickBy-9qJ8CywS-494a5f5d.js","static/js/clone-DhFCwC0s-7a31c97a.js","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/copy-NOBrwKqN-54f5154b.js"]);
    return {
      id: zg,
      diagram: e
    };
  }, "loader"), ew = {
    id: zg,
    detector: Kv,
    loader: tw
  }, Pg = "block", iw = g((e) => /^\s*block-beta/.test(e), "detector"), rw = g(async () => {
    const { diagram: e } = await gt(() => import("./blockDiagram-JOT3LUYC-Lz_p-JMt-7a4b4021.js"), ["static/js/blockDiagram-JOT3LUYC-Lz_p-JMt-7a4b4021.js","static/js/clone-DhFCwC0s-7a31c97a.js","static/js/_baseUniq-DmAMCrPp-6d586603.js","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/copy-NOBrwKqN-54f5154b.js","static/js/graph-S7kq1CHN-26cf87d4.js","static/js/channel-CjSQKY6b-473d2e61.js"]);
    return {
      id: Pg,
      diagram: e
    };
  }, "loader"), nw = {
    id: Pg,
    detector: iw,
    loader: rw
  }, ow = nw, Rg = "architecture", aw = g((e) => /^\s*architecture/.test(e), "detector"), sw = g(async () => {
    const { diagram: e } = await gt(() => import("./architectureDiagram-IEHRJDOE-CgvqrEnL-ab6c1055.js"), ["static/js/architectureDiagram-IEHRJDOE-CgvqrEnL-ab6c1055.js","static/js/chunk-4BMEZGHF-BCJ74EV_-576729df.js","static/js/chunk-XZIHB7SX-BnGAXmV_-c74ccf68.js","static/js/mermaid-parser.core-DZwaOB10-cee09aad.js","static/js/index-8579fe4a.js","static/css/index-9fbc43a0.css","static/js/_baseUniq-DmAMCrPp-6d586603.js","static/js/_basePickBy-9qJ8CywS-494a5f5d.js","static/js/clone-DhFCwC0s-7a31c97a.js","static/js/cytoscape.esm-Swd9B-1A-1060bb3e.js","static/js/viewer-DpLhQV_x-5cf483f8.js","static/js/copy-NOBrwKqN-54f5154b.js"]);
    return {
      id: Rg,
      diagram: e
    };
  }, "loader"), lw = {
    id: Rg,
    detector: aw,
    loader: sw
  }, hw = lw, eh = false, Un = g(() => {
    eh || (eh = true, Qr("error", Lv, (e) => e.toLowerCase().trim() === "error"), Qr("---", {
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
    }, (e) => e.toLowerCase().trimStart().startsWith("---")), Th(yC, Zv, pv, hv, LC, zC, NC, jC, ev, ov, $v, SC, CC, qv, zv, $C, Cv, yv, Sv, UC, Gv, Jv, QC, ow, hw, ew));
  }, "addDiagrams"), cw = g(async () => {
    $.debug("Loading registered diagrams");
    const e = (await Promise.allSettled(Object.entries(ki).map(async ([t, { detector: i, loader: r }]) => {
      if (r)
        try {
          Wo(t);
        } catch {
          try {
            const { diagram: n, id: o } = await r();
            Qr(o, n, i);
          } catch (n) {
            throw $.error(`Failed to load external diagram with key ${t}. Removing from detectors.`), delete ki[t], n;
          }
        }
    }))).filter((t) => t.status === "rejected");
    if (e.length > 0) {
      $.error(`Failed to load ${e.length} external diagrams`);
      for (const t of e)
        $.error(t);
      throw new Error(`Failed to load ${e.length} external diagrams`);
    }
  }, "loadRegisteredDiagrams"), dw = "graphics-document document";
  function Ng(e, t) {
    e.attr("role", dw), t !== "" && e.attr("aria-roledescription", t);
  }
  g(Ng, "setA11yDiagramInfo");
  function qg(e, t, i, r) {
    if (e.insert !== void 0) {
      if (i) {
        const n = `chart-desc-${r}`;
        e.attr("aria-describedby", n), e.insert("desc", ":first-child").attr("id", n).text(i);
      }
      if (t) {
        const n = `chart-title-${r}`;
        e.attr("aria-labelledby", n), e.insert("title", ":first-child").attr("id", n).text(t);
      }
    }
  }
  g(qg, "addSVGa11yTitleDescription");
  var Dr, va = (Dr = class {
    constructor(e, t, i, r, n) {
      this.type = e, this.text = t, this.db = i, this.parser = r, this.renderer = n;
    }
    static async fromText(e, t = {}) {
      var i, r;
      const n = Ut(), o = Sa(e, n);
      e = E1(e) + `
`;
      try {
        Wo(o);
      } catch {
        const h = o0(o);
        if (!h)
          throw new Sh(`Diagram ${o} not found.`);
        const { id: d, diagram: u } = await h();
        Qr(d, u);
      }
      const { db: s, parser: a, renderer: l, init: c } = Wo(o);
      return a.parser && (a.parser.yy = s), (i = s.clear) == null || i.call(s), c == null ? void 0 : c(n), t.title && ((r = s.setDiagramTitle) == null || r.call(s, t.title)), await a.parse(e), new Dr(o, e, s, a, l);
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
  }, g(Dr, "Diagram"), Dr), ih = [], uw = g(() => {
    ih.forEach((e) => {
      e();
    }), ih = [];
  }, "attachFunctions"), pw = g((e) => e.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(), "cleanupComments");
  function Wg(e) {
    const t = e.match(_h);
    if (!t)
      return {
        text: e,
        metadata: {}
      };
    let i = ny(t[1], {
      schema: ry
    }) ?? {};
    i = typeof i == "object" && !Array.isArray(i) ? i : {};
    const r = {};
    return i.displayMode && (r.displayMode = i.displayMode.toString()), i.title && (r.title = i.title.toString()), i.config && (r.config = i.config), {
      text: e.slice(t[0].length),
      metadata: r
    };
  }
  g(Wg, "extractFrontMatter");
  var gw = g((e) => e.replace(/\r\n?/g, `
`).replace(/<(\w+)([^>]*)>/g, (t, i, r) => "<" + i + r.replace(/="([^"]*)"/g, "='$1'") + ">"), "cleanupText"), fw = g((e) => {
    const { text: t, metadata: i } = Wg(e), { displayMode: r, title: n, config: o = {} } = i;
    return r && (o.gantt || (o.gantt = {}), o.gantt.displayMode = r), {
      title: n,
      config: o,
      text: t
    };
  }, "processFrontmatter"), mw = g((e) => {
    const t = de.detectInit(e) ?? {}, i = de.detectDirective(e, "wrap");
    return Array.isArray(i) ? t.wrap = i.some(({ type: r }) => r === "wrap") : (i == null ? void 0 : i.type) === "wrap" && (t.wrap = true), {
      text: b1(e),
      directive: t
    };
  }, "processDirectives");
  function ys(e) {
    const t = gw(e), i = fw(t), r = mw(i.text), n = ts(i.config, r.directive);
    return e = pw(r.text), {
      code: e,
      title: i.title,
      config: n
    };
  }
  g(ys, "preprocessDiagram");
  function jg(e) {
    const t = new TextEncoder().encode(e), i = Array.from(t, (r) => String.fromCodePoint(r)).join("");
    return btoa(i);
  }
  g(jg, "toBase64");
  var yw = 5e4, xw = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", bw = "sandbox", kw = "loose", Cw = "http://www.w3.org/2000/svg", vw = "http://www.w3.org/1999/xlink", ww = "http://www.w3.org/1999/xhtml", _w = "100%", Sw = "100%", Tw = "border:0;margin:0;", Bw = "margin:0", Mw = "allow-top-navigation-by-user-activation allow-popups", Lw = 'The "iframe" tag is not supported by your browser.', Aw = [
    "foreignobject"
  ], Fw = [
    "dominant-baseline"
  ];
  function xs(e) {
    const t = ys(e);
    return Gr(), C0(t.config ?? {}), t;
  }
  g(xs, "processAndSetConfigs");
  async function Hg(e, t) {
    Un();
    try {
      const { code: i, config: r } = xs(e);
      return {
        diagramType: (await Vg(i)).type,
        config: r
      };
    } catch (i) {
      if (t != null && t.suppressErrors)
        return false;
      throw i;
    }
  }
  g(Hg, "parse");
  var rh = g((e, t, i = []) => `
.${e} ${t} { ${i.join(" !important; ")} !important; }`, "cssImportantStyles"), Ew = g((e, t = /* @__PURE__ */ new Map()) => {
    var i;
    let r = "";
    if (e.themeCSS !== void 0 && (r += `
${e.themeCSS}`), e.fontFamily !== void 0 && (r += `
:root { --mermaid-font-family: ${e.fontFamily}}`), e.altFontFamily !== void 0 && (r += `
:root { --mermaid-alt-font-family: ${e.altFontFamily}}`), t instanceof Map) {
      const n = e.htmlLabels ?? ((i = e.flowchart) == null ? void 0 : i.htmlLabels) ? [
        "> *",
        "span"
      ] : [
        "rect",
        "polygon",
        "ellipse",
        "circle",
        "path"
      ];
      t.forEach((o) => {
        th(o.styles) || n.forEach((s) => {
          r += rh(o.id, s, o.styles);
        }), th(o.textStyles) || (r += rh(o.id, "tspan", ((o == null ? void 0 : o.textStyles) || []).map((s) => s.replace("color", "fill"))));
      });
    }
    return r;
  }, "createCssStyles"), $w = g((e, t, i, r) => {
    const n = Ew(e, i), o = N0(t, n, e.themeVariables);
    return ya(Qk(`${r}{${o}}`), Kk);
  }, "createUserStyles"), Ow = g((e = "", t, i) => {
    let r = e;
    return !i && !t && (r = r.replace(/marker-end="url\([\d+./:=?A-Za-z-]*?#/g, 'marker-end="url(#')), r = ni(r), r = r.replace(/<br>/g, "<br/>"), r;
  }, "cleanUpSvgCode"), Dw = g((e = "", t) => {
    var i, r;
    const n = (r = (i = t == null ? void 0 : t.viewBox) == null ? void 0 : i.baseVal) != null && r.height ? t.viewBox.baseVal.height + "px" : Sw, o = jg(`<body style="${Bw}">${e}</body>`);
    return `<iframe style="width:${_w};height:${n};${Tw}" src="data:text/html;charset=UTF-8;base64,${o}" sandbox="${Mw}">
  ${Lw}
</iframe>`;
  }, "putIntoIFrame"), nh = g((e, t, i, r, n) => {
    const o = e.append("div");
    o.attr("id", i), r && o.attr("style", r);
    const s = o.append("svg").attr("id", t).attr("width", "100%").attr("xmlns", Cw);
    return n && s.attr("xmlns:xlink", n), s.append("g"), e;
  }, "appendDivSvgG");
  function wa(e, t) {
    return e.append("iframe").attr("id", t).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
  }
  g(wa, "sandboxedIframe");
  var Iw = g((e, t, i, r) => {
    var n, o, s;
    (n = e.getElementById(t)) == null || n.remove(), (o = e.getElementById(i)) == null || o.remove(), (s = e.getElementById(r)) == null || s.remove();
  }, "removeExistingElements"), zw = g(async function(e, t, i) {
    var r, n, o, s, a, l;
    Un();
    const c = xs(t);
    t = c.code;
    const h = Ut();
    $.debug(h), t.length > ((h == null ? void 0 : h.maxTextSize) ?? yw) && (t = xw);
    const d = "#" + e, u = "i" + e, p = "#" + u, f = "d" + e, m = "#" + f, y = g(() => {
      const A = st(b ? p : m).node();
      A && "remove" in A && A.remove();
    }, "removeTempElements");
    let x = st("body");
    const b = h.securityLevel === bw, C = h.securityLevel === kw, w = h.fontFamily;
    if (i !== void 0) {
      if (i && (i.innerHTML = ""), b) {
        const A = wa(st(i), u);
        x = st(A.nodes()[0].contentDocument.body), x.node().style.margin = 0;
      } else
        x = st(i);
      nh(x, e, f, `font-family: ${w}`, vw);
    } else {
      if (Iw(document, e, f, u), b) {
        const A = wa(st("body"), u);
        x = st(A.nodes()[0].contentDocument.body), x.node().style.margin = 0;
      } else
        x = st("body");
      nh(x, e, f);
    }
    let k, _;
    try {
      k = await va.fromText(t, {
        title: c.title
      });
    } catch (A) {
      if (h.suppressErrorRendering)
        throw y(), A;
      k = await va.fromText("error"), _ = A;
    }
    const B = x.select(m).node(), I = k.type, z = B.firstChild, O = z.firstChild, F = (n = (r = k.renderer).getClasses) == null ? void 0 : n.call(r, t, k), N = $w(h, I, F, d), D = document.createElement("style");
    D.innerHTML = N, z.insertBefore(D, O);
    try {
      await k.renderer.draw(t, e, Vl.version, k);
    } catch (A) {
      throw h.suppressErrorRendering ? y() : Bv.draw(t, e, Vl.version), A;
    }
    const M = x.select(`${m} svg`), L = (s = (o = k.db).getAccTitle) == null ? void 0 : s.call(o), T = (l = (a = k.db).getAccDescription) == null ? void 0 : l.call(a);
    Ug(I, M, L, T), x.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns", ww);
    let E = x.select(m).node().innerHTML;
    if ($.debug("config.arrowMarkerAbsolute", h.arrowMarkerAbsolute), E = Ow(E, b, vt(h.arrowMarkerAbsolute)), b) {
      const A = x.select(m + " svg").node();
      E = Dw(E, A);
    } else
      C || (E = bi.sanitize(E, {
        ADD_TAGS: Aw,
        ADD_ATTR: Fw,
        HTML_INTEGRATION_POINTS: {
          foreignobject: true
        }
      }));
    if (uw(), _)
      throw _;
    return y(), {
      diagramType: I,
      svg: E,
      bindFunctions: k.db.bindFunctions
    };
  }, "render");
  function Zg(e = {}) {
    var t;
    const i = Ft({}, e);
    i != null && i.fontFamily && !((t = i.themeVariables) != null && t.fontFamily) && (i.themeVariables || (i.themeVariables = {}), i.themeVariables.fontFamily = i.fontFamily), b0(i), i != null && i.theme && i.theme in Te ? i.themeVariables = Te[i.theme].getThemeVariables(i.themeVariables) : i && (i.themeVariables = Te.default.getThemeVariables(i.themeVariables));
    const r = typeof i == "object" ? x0(i) : Eh();
    _a(r.logLevel), Un();
  }
  g(Zg, "initialize");
  var Vg = g((e, t = {}) => {
    const { code: i } = ys(e);
    return va.fromText(i, t);
  }, "getDiagramFromText");
  function Ug(e, t, i, r) {
    Ng(t, e), qg(t, i, r, t.attr("id"));
  }
  g(Ug, "addA11yInfo");
  var ti = Object.freeze({
    render: zw,
    parse: Hg,
    getDiagramFromText: Vg,
    initialize: Zg,
    getConfig: Ut,
    setConfig: $h,
    getSiteConfig: Eh,
    updateSiteConfig: k0,
    reset: g(() => {
      Gr();
    }, "reset"),
    globalReset: g(() => {
      Gr(Ci);
    }, "globalReset"),
    defaultConfig: Ci
  });
  _a(Ut().logLevel);
  Gr(Ut());
  var Pw = g((e, t, i) => {
    $.warn(e), Ka(e) ? (i && i(e.str, e.hash), t.push({
      ...e,
      message: e.str,
      error: e
    })) : (i && i(e), e instanceof Error && t.push({
      str: e.message,
      message: e.message,
      hash: e.name,
      error: e
    }));
  }, "handleError"), Yg = g(async function(e = {
    querySelector: ".mermaid"
  }) {
    try {
      await Rw(e);
    } catch (t) {
      if (Ka(t) && $.error(t.str), ae.parseError && ae.parseError(t), !e.suppressErrors)
        throw $.error("Use the suppressErrors option to suppress these errors"), t;
    }
  }, "run"), Rw = g(async function({ postRenderCallback: e, querySelector: t, nodes: i } = {
    querySelector: ".mermaid"
  }) {
    const r = ti.getConfig();
    $.debug(`${e ? "" : "No "}Callback function found`);
    let n;
    if (i)
      n = i;
    else if (t)
      n = document.querySelectorAll(t);
    else
      throw new Error("Nodes and querySelector are both undefined");
    $.debug(`Found ${n.length} diagrams`), (r == null ? void 0 : r.startOnLoad) !== void 0 && ($.debug("Start On Load: " + (r == null ? void 0 : r.startOnLoad)), ti.updateSiteConfig({
      startOnLoad: r == null ? void 0 : r.startOnLoad
    }));
    const o = new de.InitIDGenerator(r.deterministicIds, r.deterministicIDSeed);
    let s;
    const a = [];
    for (const l of Array.from(n)) {
      if ($.info("Rendering diagram: " + l.id), l.getAttribute("data-processed"))
        continue;
      l.setAttribute("data-processed", "true");
      const c = `mermaid-${o.next()}`;
      s = l.innerHTML, s = vu(de.entityDecode(s)).trim().replace(/<br\s*\/?>/gi, "<br/>");
      const h = de.detectInit(s);
      h && $.debug("Detected early reinit: ", h);
      try {
        const { svg: d, bindFunctions: u } = await Jg(c, s, l);
        l.innerHTML = d, e && await e(c), u && u(l);
      } catch (d) {
        Pw(d, a, ae.parseError);
      }
    }
    if (a.length > 0)
      throw a[0];
  }, "runThrowsErrors"), Gg = g(function(e) {
    ti.initialize(e);
  }, "initialize"), Nw = g(async function(e, t, i) {
    $.warn("mermaid.init is deprecated. Please use run instead."), e && Gg(e);
    const r = {
      postRenderCallback: i,
      querySelector: ".mermaid"
    };
    typeof t == "string" ? r.querySelector = t : t && (t instanceof HTMLElement ? r.nodes = [
      t
    ] : r.nodes = t), await Yg(r);
  }, "init"), qw = g(async (e, { lazyLoad: t = true } = {}) => {
    Un(), Th(...e), t === false && await cw();
  }, "registerExternalDiagrams"), Xg = g(function() {
    if (ae.startOnLoad) {
      const { startOnLoad: e } = ti.getConfig();
      e && ae.run().catch((t) => $.error("Mermaid failed to initialize", t));
    }
  }, "contentLoaded");
  typeof document < "u" && window.addEventListener("load", Xg, false);
  var Ww = g(function(e) {
    ae.parseError = e;
  }, "setParseErrorHandler"), wn = [], Fo = false, Qg = g(async () => {
    if (!Fo) {
      for (Fo = true; wn.length > 0; ) {
        const e = wn.shift();
        if (e)
          try {
            await e();
          } catch (t) {
            $.error("Error executing queue", t);
          }
      }
      Fo = false;
    }
  }, "executeQueue"), jw = g(async (e, t) => new Promise((i, r) => {
    const n = g(() => new Promise((o, s) => {
      ti.parse(e, t).then((a) => {
        o(a), i(a);
      }, (a) => {
        var l;
        $.error("Error parsing", a), (l = ae.parseError) == null || l.call(ae, a), s(a), r(a);
      });
    }), "performCall");
    wn.push(n), Qg().catch(r);
  }), "parse"), Jg = g((e, t, i) => new Promise((r, n) => {
    const o = g(() => new Promise((s, a) => {
      ti.render(e, t, i).then((l) => {
        s(l), r(l);
      }, (l) => {
        var c;
        $.error("Error parsing", l), (c = ae.parseError) == null || c.call(ae, l), a(l), n(l);
      });
    }), "performCall");
    wn.push(o), Qg().catch(n);
  }), "render"), ae = {
    startOnLoad: true,
    mermaidAPI: ti,
    parse: jw,
    render: Jg,
    init: Nw,
    run: Yg,
    registerExternalDiagrams: qw,
    registerLayoutLoaders: ag,
    initialize: Gg,
    parseError: void 0,
    contentLoaded: Xg,
    setParseErrorHandler: Ww,
    detectType: Sa,
    registerIconPacks: By
  }, oh = ae;
  var ah, sh;
  function Hw() {
    return sh || (sh = 1, ah = function() {
      var e = "", t, i, r, n = [], o = {
        passive: true
      }, s = {
        passive: false
      };
      window.addEventListener ? (t = "addEventListener", i = "removeEventListener") : (t = "attachEvent", i = "detachEvent", e = "on"), r = "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll";
      function a(f, m) {
        var y = function(x) {
          !x && (x = window.event);
          var b = {
            originalEvent: x,
            target: x.target || x.srcElement,
            type: "wheel",
            deltaMode: x.type == "MozMousePixelScroll" ? 0 : 1,
            deltaX: 0,
            delatZ: 0,
            preventDefault: function() {
              x.preventDefault ? x.preventDefault() : x.returnValue = false;
            }
          };
          return r == "mousewheel" ? (b.deltaY = -0.025 * x.wheelDelta, x.wheelDeltaX && (b.deltaX = -0.025 * x.wheelDeltaX)) : b.deltaY = x.detail, m(b);
        };
        return n.push({
          element: f,
          fn: y
        }), y;
      }
      function l(f) {
        for (var m = 0; m < n.length; m++)
          if (n[m].element === f)
            return n[m].fn;
        return function() {
        };
      }
      function c(f) {
        for (var m = 0; m < n.length; m++)
          if (n[m].element === f)
            return n.splice(m, 1);
      }
      function h(f, m, y, x) {
        var b;
        r === "wheel" ? b = y : b = a(f, y), f[t](e + m, b, x ? o : s);
      }
      function d(f, m, y, x) {
        var b;
        r === "wheel" ? b = y : b = l(f), f[i](e + m, b, x ? o : s), c(f);
      }
      function u(f, m, y) {
        h(f, r, m, y), r == "DOMMouseScroll" && h(f, "MozMousePixelScroll", m, y);
      }
      function p(f, m, y) {
        d(f, r, m, y), r == "DOMMouseScroll" && d(f, "MozMousePixelScroll", m, y);
      }
      return {
        on: u,
        off: p
      };
    }()), ah;
  }
  var Eo, lh;
  function bs() {
    if (lh)
      return Eo;
    lh = 1, Eo = {
      extend: function(t, i) {
        t = t || {};
        for (var r in i)
          this.isObject(i[r]) ? t[r] = this.extend(t[r], i[r]) : t[r] = i[r];
        return t;
      },
      isElement: function(t) {
        return t instanceof HTMLElement || t instanceof SVGElement || t instanceof SVGSVGElement || t && typeof t == "object" && t !== null && t.nodeType === 1 && typeof t.nodeName == "string";
      },
      isObject: function(t) {
        return Object.prototype.toString.call(t) === "[object Object]";
      },
      isNumber: function(t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
      },
      getSvg: function(t) {
        var i, r;
        if (this.isElement(t))
          i = t;
        else if (typeof t == "string" || t instanceof String) {
          if (i = document.querySelector(t), !i)
            throw new Error("Provided selector did not find any elements. Selector: " + t);
        } else
          throw new Error("Provided selector is not an HTML object nor String");
        if (i.tagName.toLowerCase() === "svg")
          r = i;
        else if (i.tagName.toLowerCase() === "object")
          r = i.contentDocument.documentElement;
        else if (i.tagName.toLowerCase() === "embed")
          r = i.getSVGDocument().documentElement;
        else
          throw i.tagName.toLowerCase() === "img" ? new Error('Cannot script an SVG in an "img" element. Please use an "object" element or an in-line SVG.') : new Error("Cannot get SVG.");
        return r;
      },
      proxy: function(t, i) {
        return function() {
          return t.apply(i, arguments);
        };
      },
      getType: function(t) {
        return Object.prototype.toString.apply(t).replace(/^\[object\s/, "").replace(/\]$/, "");
      },
      mouseAndTouchNormalize: function(t, i) {
        if (t.clientX === void 0 || t.clientX === null)
          if (t.clientX = 0, t.clientY = 0, t.touches !== void 0 && t.touches.length) {
            if (t.touches[0].clientX !== void 0)
              t.clientX = t.touches[0].clientX, t.clientY = t.touches[0].clientY;
            else if (t.touches[0].pageX !== void 0) {
              var r = i.getBoundingClientRect();
              t.clientX = t.touches[0].pageX - r.left, t.clientY = t.touches[0].pageY - r.top;
            }
          } else
            t.originalEvent !== void 0 && t.originalEvent.clientX !== void 0 && (t.clientX = t.originalEvent.clientX, t.clientY = t.originalEvent.clientY);
      },
      isDblClick: function(t, i) {
        if (t.detail === 2)
          return true;
        if (i != null) {
          var r = t.timeStamp - i.timeStamp, n = Math.sqrt(Math.pow(t.clientX - i.clientX, 2) + Math.pow(t.clientY - i.clientY, 2));
          return r < 250 && n < 10;
        }
        return false;
      },
      now: Date.now || function() {
        return (/* @__PURE__ */ new Date()).getTime();
      },
      throttle: function(t, i, r) {
        var n = this, o, s, a, l = null, c = 0;
        r || (r = {});
        var h = function() {
          c = r.leading === false ? 0 : n.now(), l = null, a = t.apply(o, s), l || (o = s = null);
        };
        return function() {
          var d = n.now();
          !c && r.leading === false && (c = d);
          var u = i - (d - c);
          return o = this, s = arguments, u <= 0 || u > i ? (clearTimeout(l), l = null, c = d, a = t.apply(o, s), l || (o = s = null)) : !l && r.trailing !== false && (l = setTimeout(h, u)), a;
        };
      },
      createRequestAnimationFrame: function(t) {
        var i = null;
        return t !== "auto" && t < 60 && t > 1 && (i = Math.floor(1e3 / t)), i === null ? window.requestAnimationFrame || e(33) : e(i);
      }
    };
    function e(t) {
      return function(i) {
        window.setTimeout(i, t);
      };
    }
    return Eo;
  }
  var Yi, hh;
  function ks() {
    if (hh)
      return Yi;
    hh = 1;
    var e = bs(), t = "unknown";
    return document.documentMode && (t = "ie"), Yi = {
      svgNS: "http://www.w3.org/2000/svg",
      xmlNS: "http://www.w3.org/XML/1998/namespace",
      xmlnsNS: "http://www.w3.org/2000/xmlns/",
      xlinkNS: "http://www.w3.org/1999/xlink",
      evNS: "http://www.w3.org/2001/xml-events",
      getBoundingClientRectNormalized: function(i) {
        if (i.clientWidth && i.clientHeight)
          return {
            width: i.clientWidth,
            height: i.clientHeight
          };
        if (i.getBoundingClientRect())
          return i.getBoundingClientRect();
        throw new Error("Cannot get BoundingClientRect for SVG.");
      },
      getOrCreateViewport: function(i, r) {
        var n = null;
        if (e.isElement(r) ? n = r : n = i.querySelector(r), !n) {
          var o = Array.prototype.slice.call(i.childNodes || i.children).filter(function(h) {
            return h.nodeName !== "defs" && h.nodeName !== "#text";
          });
          o.length === 1 && o[0].nodeName === "g" && o[0].getAttribute("transform") === null && (n = o[0]);
        }
        if (!n) {
          var s = "viewport-" + (/* @__PURE__ */ new Date()).toISOString().replace(/\D/g, "");
          n = document.createElementNS(this.svgNS, "g"), n.setAttribute("id", s);
          var a = i.childNodes || i.children;
          if (a && a.length > 0)
            for (var l = a.length; l > 0; l--)
              a[a.length - l].nodeName !== "defs" && n.appendChild(a[a.length - l]);
          i.appendChild(n);
        }
        var c = [];
        return n.getAttribute("class") && (c = n.getAttribute("class").split(" ")), ~c.indexOf("svg-pan-zoom_viewport") || (c.push("svg-pan-zoom_viewport"), n.setAttribute("class", c.join(" "))), n;
      },
      setupSvgAttributes: function(i) {
        if (i.setAttribute("xmlns", this.svgNS), i.setAttributeNS(this.xmlnsNS, "xmlns:xlink", this.xlinkNS), i.setAttributeNS(this.xmlnsNS, "xmlns:ev", this.evNS), i.parentNode !== null) {
          var r = i.getAttribute("style") || "";
          r.toLowerCase().indexOf("overflow") === -1 && i.setAttribute("style", "overflow: hidden; " + r);
        }
      },
      internetExplorerRedisplayInterval: 300,
      refreshDefsGlobal: e.throttle(function() {
        for (var i = document.querySelectorAll("defs"), r = i.length, n = 0; n < r; n++) {
          var o = i[n];
          o.parentNode.insertBefore(o, o);
        }
      }, Yi ? Yi.internetExplorerRedisplayInterval : null),
      setCTM: function(i, r, n) {
        var o = this, s = "matrix(" + r.a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")";
        i.setAttributeNS(null, "transform", s), "transform" in i.style ? i.style.transform = s : "-ms-transform" in i.style ? i.style["-ms-transform"] = s : "-webkit-transform" in i.style && (i.style["-webkit-transform"] = s), t === "ie" && n && (n.parentNode.insertBefore(n, n), window.setTimeout(function() {
          o.refreshDefsGlobal();
        }, o.internetExplorerRedisplayInterval));
      },
      getEventPoint: function(i, r) {
        var n = r.createSVGPoint();
        return e.mouseAndTouchNormalize(i, r), n.x = i.clientX, n.y = i.clientY, n;
      },
      getSvgCenterPoint: function(i, r, n) {
        return this.createSVGPoint(i, r / 2, n / 2);
      },
      createSVGPoint: function(i, r, n) {
        var o = i.createSVGPoint();
        return o.x = r, o.y = n, o;
      }
    }, Yi;
  }
  var $o, ch;
  function Zw() {
    if (ch)
      return $o;
    ch = 1;
    var e = ks();
    return $o = {
      enable: function(t) {
        var i = t.svg.querySelector("defs");
        i || (i = document.createElementNS(e.svgNS, "defs"), t.svg.appendChild(i));
        var r = i.querySelector("style#svg-pan-zoom-controls-styles");
        if (!r) {
          var n = document.createElementNS(e.svgNS, "style");
          n.setAttribute("id", "svg-pan-zoom-controls-styles"), n.setAttribute("type", "text/css"), n.textContent = ".svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }", i.appendChild(n);
        }
        var o = document.createElementNS(e.svgNS, "g");
        o.setAttribute("id", "svg-pan-zoom-controls"), o.setAttribute("transform", "translate(" + (t.width - 70) + " " + (t.height - 76) + ") scale(0.75)"), o.setAttribute("class", "svg-pan-zoom-control"), o.appendChild(this._createZoomIn(t)), o.appendChild(this._createZoomReset(t)), o.appendChild(this._createZoomOut(t)), t.svg.appendChild(o), t.controlIcons = o;
      },
      _createZoomIn: function(t) {
        var i = document.createElementNS(e.svgNS, "g");
        i.setAttribute("id", "svg-pan-zoom-zoom-in"), i.setAttribute("transform", "translate(30.5 5) scale(0.015)"), i.setAttribute("class", "svg-pan-zoom-control"), i.addEventListener("click", function() {
          t.getPublicInstance().zoomIn();
        }, false), i.addEventListener("touchstart", function() {
          t.getPublicInstance().zoomIn();
        }, false);
        var r = document.createElementNS(e.svgNS, "rect");
        r.setAttribute("x", "0"), r.setAttribute("y", "0"), r.setAttribute("width", "1500"), r.setAttribute("height", "1400"), r.setAttribute("class", "svg-pan-zoom-control-background"), i.appendChild(r);
        var n = document.createElementNS(e.svgNS, "path");
        return n.setAttribute("d", "M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"), n.setAttribute("class", "svg-pan-zoom-control-element"), i.appendChild(n), i;
      },
      _createZoomReset: function(t) {
        var i = document.createElementNS(e.svgNS, "g");
        i.setAttribute("id", "svg-pan-zoom-reset-pan-zoom"), i.setAttribute("transform", "translate(5 35) scale(0.4)"), i.setAttribute("class", "svg-pan-zoom-control"), i.addEventListener("click", function() {
          t.getPublicInstance().reset();
        }, false), i.addEventListener("touchstart", function() {
          t.getPublicInstance().reset();
        }, false);
        var r = document.createElementNS(e.svgNS, "rect");
        r.setAttribute("x", "2"), r.setAttribute("y", "2"), r.setAttribute("width", "182"), r.setAttribute("height", "58"), r.setAttribute("class", "svg-pan-zoom-control-background"), i.appendChild(r);
        var n = document.createElementNS(e.svgNS, "path");
        n.setAttribute("d", "M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z"), n.setAttribute("class", "svg-pan-zoom-control-element"), i.appendChild(n);
        var o = document.createElementNS(e.svgNS, "path");
        return o.setAttribute("d", "M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z"), o.setAttribute("class", "svg-pan-zoom-control-element"), i.appendChild(o), i;
      },
      _createZoomOut: function(t) {
        var i = document.createElementNS(e.svgNS, "g");
        i.setAttribute("id", "svg-pan-zoom-zoom-out"), i.setAttribute("transform", "translate(30.5 70) scale(0.015)"), i.setAttribute("class", "svg-pan-zoom-control"), i.addEventListener("click", function() {
          t.getPublicInstance().zoomOut();
        }, false), i.addEventListener("touchstart", function() {
          t.getPublicInstance().zoomOut();
        }, false);
        var r = document.createElementNS(e.svgNS, "rect");
        r.setAttribute("x", "0"), r.setAttribute("y", "0"), r.setAttribute("width", "1500"), r.setAttribute("height", "1400"), r.setAttribute("class", "svg-pan-zoom-control-background"), i.appendChild(r);
        var n = document.createElementNS(e.svgNS, "path");
        return n.setAttribute("d", "M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z"), n.setAttribute("class", "svg-pan-zoom-control-element"), i.appendChild(n), i;
      },
      disable: function(t) {
        t.controlIcons && (t.controlIcons.parentNode.removeChild(t.controlIcons), t.controlIcons = null);
      }
    }, $o;
  }
  var Oo, dh;
  function Vw() {
    if (dh)
      return Oo;
    dh = 1;
    var e = ks(), t = bs(), i = function(r, n) {
      this.init(r, n);
    };
    return i.prototype.init = function(r, n) {
      this.viewport = r, this.options = n, this.originalState = {
        zoom: 1,
        x: 0,
        y: 0
      }, this.activeState = {
        zoom: 1,
        x: 0,
        y: 0
      }, this.updateCTMCached = t.proxy(this.updateCTM, this), this.requestAnimationFrame = t.createRequestAnimationFrame(this.options.refreshRate), this.viewBox = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }, this.cacheViewBox();
      var o = this.processCTM();
      this.setCTM(o), this.updateCTM();
    }, i.prototype.cacheViewBox = function() {
      var r = this.options.svg.getAttribute("viewBox");
      if (r) {
        var n = r.split(/[\s\,]/).filter(function(s) {
          return s;
        }).map(parseFloat);
        this.viewBox.x = n[0], this.viewBox.y = n[1], this.viewBox.width = n[2], this.viewBox.height = n[3];
        var o = Math.min(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height);
        this.activeState.zoom = o, this.activeState.x = (this.options.width - this.viewBox.width * o) / 2, this.activeState.y = (this.options.height - this.viewBox.height * o) / 2, this.updateCTMOnNextFrame(), this.options.svg.removeAttribute("viewBox");
      } else
        this.simpleViewBoxCache();
    }, i.prototype.simpleViewBoxCache = function() {
      var r = this.viewport.getBBox();
      this.viewBox.x = r.x, this.viewBox.y = r.y, this.viewBox.width = r.width, this.viewBox.height = r.height;
    }, i.prototype.getViewBox = function() {
      return t.extend({}, this.viewBox);
    }, i.prototype.processCTM = function() {
      var r = this.getCTM();
      if (this.options.fit || this.options.contain) {
        var n;
        this.options.fit ? n = Math.min(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height) : n = Math.max(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height), r.a = n, r.d = n, r.e = -this.viewBox.x * n, r.f = -this.viewBox.y * n;
      }
      if (this.options.center) {
        var o = (this.options.width - (this.viewBox.width + this.viewBox.x * 2) * r.a) * 0.5, s = (this.options.height - (this.viewBox.height + this.viewBox.y * 2) * r.a) * 0.5;
        r.e = o, r.f = s;
      }
      return this.originalState.zoom = r.a, this.originalState.x = r.e, this.originalState.y = r.f, r;
    }, i.prototype.getOriginalState = function() {
      return t.extend({}, this.originalState);
    }, i.prototype.getState = function() {
      return t.extend({}, this.activeState);
    }, i.prototype.getZoom = function() {
      return this.activeState.zoom;
    }, i.prototype.getRelativeZoom = function() {
      return this.activeState.zoom / this.originalState.zoom;
    }, i.prototype.computeRelativeZoom = function(r) {
      return r / this.originalState.zoom;
    }, i.prototype.getPan = function() {
      return {
        x: this.activeState.x,
        y: this.activeState.y
      };
    }, i.prototype.getCTM = function() {
      var r = this.options.svg.createSVGMatrix();
      return r.a = this.activeState.zoom, r.b = 0, r.c = 0, r.d = this.activeState.zoom, r.e = this.activeState.x, r.f = this.activeState.y, r;
    }, i.prototype.setCTM = function(r) {
      var n = this.isZoomDifferent(r), o = this.isPanDifferent(r);
      if (n || o) {
        if (n && (this.options.beforeZoom(this.getRelativeZoom(), this.computeRelativeZoom(r.a)) === false ? (r.a = r.d = this.activeState.zoom, n = false) : (this.updateCache(r), this.options.onZoom(this.getRelativeZoom()))), o) {
          var s = this.options.beforePan(this.getPan(), {
            x: r.e,
            y: r.f
          }), a = false, l = false;
          s === false ? (r.e = this.getPan().x, r.f = this.getPan().y, a = l = true) : t.isObject(s) && (s.x === false ? (r.e = this.getPan().x, a = true) : t.isNumber(s.x) && (r.e = s.x), s.y === false ? (r.f = this.getPan().y, l = true) : t.isNumber(s.y) && (r.f = s.y)), a && l || !this.isPanDifferent(r) ? o = false : (this.updateCache(r), this.options.onPan(this.getPan()));
        }
        (n || o) && this.updateCTMOnNextFrame();
      }
    }, i.prototype.isZoomDifferent = function(r) {
      return this.activeState.zoom !== r.a;
    }, i.prototype.isPanDifferent = function(r) {
      return this.activeState.x !== r.e || this.activeState.y !== r.f;
    }, i.prototype.updateCache = function(r) {
      this.activeState.zoom = r.a, this.activeState.x = r.e, this.activeState.y = r.f;
    }, i.prototype.pendingUpdate = false, i.prototype.updateCTMOnNextFrame = function() {
      this.pendingUpdate || (this.pendingUpdate = true, this.requestAnimationFrame.call(window, this.updateCTMCached));
    }, i.prototype.updateCTM = function() {
      var r = this.getCTM();
      e.setCTM(this.viewport, r, this.defs), this.pendingUpdate = false, this.options.onUpdatedCTM && this.options.onUpdatedCTM(r);
    }, Oo = function(r, n) {
      return new i(r, n);
    }, Oo;
  }
  var Do, uh;
  function Uw() {
    if (uh)
      return Do;
    uh = 1;
    var e = Hw(), t = Zw(), i = bs(), r = ks(), n = Vw(), o = function(h, d) {
      this.init(h, d);
    }, s = {
      viewportSelector: ".svg-pan-zoom_viewport",
      panEnabled: true,
      controlIconsEnabled: false,
      zoomEnabled: true,
      dblClickZoomEnabled: true,
      mouseWheelZoomEnabled: true,
      preventMouseEventsDefault: true,
      zoomScaleSensitivity: 0.1,
      minZoom: 0.5,
      maxZoom: 10,
      fit: true,
      contain: false,
      center: true,
      refreshRate: "auto",
      beforeZoom: null,
      onZoom: null,
      beforePan: null,
      onPan: null,
      customEventsHandler: null,
      eventsListenerElement: null,
      onUpdatedCTM: null
    }, a = {
      passive: true
    };
    o.prototype.init = function(h, d) {
      var u = this;
      this.svg = h, this.defs = h.querySelector("defs"), r.setupSvgAttributes(this.svg), this.options = i.extend(i.extend({}, s), d), this.state = "none";
      var p = r.getBoundingClientRectNormalized(h);
      this.width = p.width, this.height = p.height, this.viewport = n(r.getOrCreateViewport(this.svg, this.options.viewportSelector), {
        svg: this.svg,
        width: this.width,
        height: this.height,
        fit: this.options.fit,
        contain: this.options.contain,
        center: this.options.center,
        refreshRate: this.options.refreshRate,
        beforeZoom: function(m, y) {
          if (u.viewport && u.options.beforeZoom)
            return u.options.beforeZoom(m, y);
        },
        onZoom: function(m) {
          if (u.viewport && u.options.onZoom)
            return u.options.onZoom(m);
        },
        beforePan: function(m, y) {
          if (u.viewport && u.options.beforePan)
            return u.options.beforePan(m, y);
        },
        onPan: function(m) {
          if (u.viewport && u.options.onPan)
            return u.options.onPan(m);
        },
        onUpdatedCTM: function(m) {
          if (u.viewport && u.options.onUpdatedCTM)
            return u.options.onUpdatedCTM(m);
        }
      });
      var f = this.getPublicInstance();
      f.setBeforeZoom(this.options.beforeZoom), f.setOnZoom(this.options.onZoom), f.setBeforePan(this.options.beforePan), f.setOnPan(this.options.onPan), f.setOnUpdatedCTM(this.options.onUpdatedCTM), this.options.controlIconsEnabled && t.enable(this), this.lastMouseWheelEventTime = Date.now(), this.setupHandlers();
    }, o.prototype.setupHandlers = function() {
      var h = this, d = null;
      if (this.eventListeners = {
        mousedown: function(m) {
          var y = h.handleMouseDown(m, d);
          return d = m, y;
        },
        touchstart: function(m) {
          var y = h.handleMouseDown(m, d);
          return d = m, y;
        },
        mouseup: function(m) {
          return h.handleMouseUp(m);
        },
        touchend: function(m) {
          return h.handleMouseUp(m);
        },
        mousemove: function(m) {
          return h.handleMouseMove(m);
        },
        touchmove: function(m) {
          return h.handleMouseMove(m);
        },
        mouseleave: function(m) {
          return h.handleMouseUp(m);
        },
        touchleave: function(m) {
          return h.handleMouseUp(m);
        },
        touchcancel: function(m) {
          return h.handleMouseUp(m);
        }
      }, this.options.customEventsHandler != null) {
        this.options.customEventsHandler.init({
          svgElement: this.svg,
          eventsListenerElement: this.options.eventsListenerElement,
          instance: this.getPublicInstance()
        });
        var u = this.options.customEventsHandler.haltEventListeners;
        if (u && u.length)
          for (var p = u.length - 1; p >= 0; p--)
            this.eventListeners.hasOwnProperty(u[p]) && delete this.eventListeners[u[p]];
      }
      for (var f in this.eventListeners)
        (this.options.eventsListenerElement || this.svg).addEventListener(f, this.eventListeners[f], this.options.preventMouseEventsDefault ? false : a);
      this.options.mouseWheelZoomEnabled && (this.options.mouseWheelZoomEnabled = false, this.enableMouseWheelZoom());
    }, o.prototype.enableMouseWheelZoom = function() {
      if (!this.options.mouseWheelZoomEnabled) {
        var h = this;
        this.wheelListener = function(u) {
          return h.handleMouseWheel(u);
        };
        var d = !this.options.preventMouseEventsDefault;
        e.on(this.options.eventsListenerElement || this.svg, this.wheelListener, d), this.options.mouseWheelZoomEnabled = true;
      }
    }, o.prototype.disableMouseWheelZoom = function() {
      if (this.options.mouseWheelZoomEnabled) {
        var h = !this.options.preventMouseEventsDefault;
        e.off(this.options.eventsListenerElement || this.svg, this.wheelListener, h), this.options.mouseWheelZoomEnabled = false;
      }
    }, o.prototype.handleMouseWheel = function(h) {
      if (!(!this.options.zoomEnabled || this.state !== "none")) {
        this.options.preventMouseEventsDefault && (h.preventDefault ? h.preventDefault() : h.returnValue = false);
        var d = h.deltaY || 1, u = Date.now() - this.lastMouseWheelEventTime, p = 3 + Math.max(0, 30 - u);
        this.lastMouseWheelEventTime = Date.now(), "deltaMode" in h && h.deltaMode === 0 && h.wheelDelta && (d = h.deltaY === 0 ? 0 : Math.abs(h.wheelDelta) / h.deltaY), d = -0.3 < d && d < 0.3 ? d : (d > 0 ? 1 : -1) * Math.log(Math.abs(d) + 10) / p;
        var f = this.svg.getScreenCTM().inverse(), m = r.getEventPoint(h, this.svg).matrixTransform(f), y = Math.pow(1 + this.options.zoomScaleSensitivity, -1 * d);
        this.zoomAtPoint(y, m);
      }
    }, o.prototype.zoomAtPoint = function(h, d, u) {
      var p = this.viewport.getOriginalState();
      u ? (h = Math.max(this.options.minZoom * p.zoom, Math.min(this.options.maxZoom * p.zoom, h)), h = h / this.getZoom()) : this.getZoom() * h < this.options.minZoom * p.zoom ? h = this.options.minZoom * p.zoom / this.getZoom() : this.getZoom() * h > this.options.maxZoom * p.zoom && (h = this.options.maxZoom * p.zoom / this.getZoom());
      var f = this.viewport.getCTM(), m = d.matrixTransform(f.inverse()), y = this.svg.createSVGMatrix().translate(m.x, m.y).scale(h).translate(-m.x, -m.y), x = f.multiply(y);
      x.a !== f.a && this.viewport.setCTM(x);
    }, o.prototype.zoom = function(h, d) {
      this.zoomAtPoint(h, r.getSvgCenterPoint(this.svg, this.width, this.height), d);
    }, o.prototype.publicZoom = function(h, d) {
      d && (h = this.computeFromRelativeZoom(h)), this.zoom(h, d);
    }, o.prototype.publicZoomAtPoint = function(h, d, u) {
      if (u && (h = this.computeFromRelativeZoom(h)), i.getType(d) !== "SVGPoint")
        if ("x" in d && "y" in d)
          d = r.createSVGPoint(this.svg, d.x, d.y);
        else
          throw new Error("Given point is invalid");
      this.zoomAtPoint(h, d, u);
    }, o.prototype.getZoom = function() {
      return this.viewport.getZoom();
    }, o.prototype.getRelativeZoom = function() {
      return this.viewport.getRelativeZoom();
    }, o.prototype.computeFromRelativeZoom = function(h) {
      return h * this.viewport.getOriginalState().zoom;
    }, o.prototype.resetZoom = function() {
      var h = this.viewport.getOriginalState();
      this.zoom(h.zoom, true);
    }, o.prototype.resetPan = function() {
      this.pan(this.viewport.getOriginalState());
    }, o.prototype.reset = function() {
      this.resetZoom(), this.resetPan();
    }, o.prototype.handleDblClick = function(h) {
      if (this.options.preventMouseEventsDefault && (h.preventDefault ? h.preventDefault() : h.returnValue = false), this.options.controlIconsEnabled) {
        var d = h.target.getAttribute("class") || "";
        if (d.indexOf("svg-pan-zoom-control") > -1)
          return false;
      }
      var u;
      h.shiftKey ? u = 1 / ((1 + this.options.zoomScaleSensitivity) * 2) : u = (1 + this.options.zoomScaleSensitivity) * 2;
      var p = r.getEventPoint(h, this.svg).matrixTransform(this.svg.getScreenCTM().inverse());
      this.zoomAtPoint(u, p);
    }, o.prototype.handleMouseDown = function(h, d) {
      this.options.preventMouseEventsDefault && (h.preventDefault ? h.preventDefault() : h.returnValue = false), i.mouseAndTouchNormalize(h, this.svg), this.options.dblClickZoomEnabled && i.isDblClick(h, d) ? this.handleDblClick(h) : (this.state = "pan", this.firstEventCTM = this.viewport.getCTM(), this.stateOrigin = r.getEventPoint(h, this.svg).matrixTransform(this.firstEventCTM.inverse()));
    }, o.prototype.handleMouseMove = function(h) {
      if (this.options.preventMouseEventsDefault && (h.preventDefault ? h.preventDefault() : h.returnValue = false), this.state === "pan" && this.options.panEnabled) {
        var d = r.getEventPoint(h, this.svg).matrixTransform(this.firstEventCTM.inverse()), u = this.firstEventCTM.translate(d.x - this.stateOrigin.x, d.y - this.stateOrigin.y);
        this.viewport.setCTM(u);
      }
    }, o.prototype.handleMouseUp = function(h) {
      this.options.preventMouseEventsDefault && (h.preventDefault ? h.preventDefault() : h.returnValue = false), this.state === "pan" && (this.state = "none");
    }, o.prototype.fit = function() {
      var h = this.viewport.getViewBox(), d = Math.min(this.width / h.width, this.height / h.height);
      this.zoom(d, true);
    }, o.prototype.contain = function() {
      var h = this.viewport.getViewBox(), d = Math.max(this.width / h.width, this.height / h.height);
      this.zoom(d, true);
    }, o.prototype.center = function() {
      var h = this.viewport.getViewBox(), d = (this.width - (h.width + h.x * 2) * this.getZoom()) * 0.5, u = (this.height - (h.height + h.y * 2) * this.getZoom()) * 0.5;
      this.getPublicInstance().pan({
        x: d,
        y: u
      });
    }, o.prototype.updateBBox = function() {
      this.viewport.simpleViewBoxCache();
    }, o.prototype.pan = function(h) {
      var d = this.viewport.getCTM();
      d.e = h.x, d.f = h.y, this.viewport.setCTM(d);
    }, o.prototype.panBy = function(h) {
      var d = this.viewport.getCTM();
      d.e += h.x, d.f += h.y, this.viewport.setCTM(d);
    }, o.prototype.getPan = function() {
      var h = this.viewport.getState();
      return {
        x: h.x,
        y: h.y
      };
    }, o.prototype.resize = function() {
      var h = r.getBoundingClientRectNormalized(this.svg);
      this.width = h.width, this.height = h.height;
      var d = this.viewport;
      d.options.width = this.width, d.options.height = this.height, d.processCTM(), this.options.controlIconsEnabled && (this.getPublicInstance().disableControlIcons(), this.getPublicInstance().enableControlIcons());
    }, o.prototype.destroy = function() {
      var h = this;
      this.beforeZoom = null, this.onZoom = null, this.beforePan = null, this.onPan = null, this.onUpdatedCTM = null, this.options.customEventsHandler != null && this.options.customEventsHandler.destroy({
        svgElement: this.svg,
        eventsListenerElement: this.options.eventsListenerElement,
        instance: this.getPublicInstance()
      });
      for (var d in this.eventListeners)
        (this.options.eventsListenerElement || this.svg).removeEventListener(d, this.eventListeners[d], this.options.preventMouseEventsDefault ? false : a);
      this.disableMouseWheelZoom(), this.getPublicInstance().disableControlIcons(), this.reset(), l = l.filter(function(u) {
        return u.svg !== h.svg;
      }), delete this.options, delete this.viewport, delete this.publicInstance, delete this.pi, this.getPublicInstance = function() {
        return null;
      };
    }, o.prototype.getPublicInstance = function() {
      var h = this;
      return this.publicInstance || (this.publicInstance = this.pi = {
        enablePan: function() {
          return h.options.panEnabled = true, h.pi;
        },
        disablePan: function() {
          return h.options.panEnabled = false, h.pi;
        },
        isPanEnabled: function() {
          return !!h.options.panEnabled;
        },
        pan: function(d) {
          return h.pan(d), h.pi;
        },
        panBy: function(d) {
          return h.panBy(d), h.pi;
        },
        getPan: function() {
          return h.getPan();
        },
        setBeforePan: function(d) {
          return h.options.beforePan = d === null ? null : i.proxy(d, h.publicInstance), h.pi;
        },
        setOnPan: function(d) {
          return h.options.onPan = d === null ? null : i.proxy(d, h.publicInstance), h.pi;
        },
        enableZoom: function() {
          return h.options.zoomEnabled = true, h.pi;
        },
        disableZoom: function() {
          return h.options.zoomEnabled = false, h.pi;
        },
        isZoomEnabled: function() {
          return !!h.options.zoomEnabled;
        },
        enableControlIcons: function() {
          return h.options.controlIconsEnabled || (h.options.controlIconsEnabled = true, t.enable(h)), h.pi;
        },
        disableControlIcons: function() {
          return h.options.controlIconsEnabled && (h.options.controlIconsEnabled = false, t.disable(h)), h.pi;
        },
        isControlIconsEnabled: function() {
          return !!h.options.controlIconsEnabled;
        },
        enableDblClickZoom: function() {
          return h.options.dblClickZoomEnabled = true, h.pi;
        },
        disableDblClickZoom: function() {
          return h.options.dblClickZoomEnabled = false, h.pi;
        },
        isDblClickZoomEnabled: function() {
          return !!h.options.dblClickZoomEnabled;
        },
        enableMouseWheelZoom: function() {
          return h.enableMouseWheelZoom(), h.pi;
        },
        disableMouseWheelZoom: function() {
          return h.disableMouseWheelZoom(), h.pi;
        },
        isMouseWheelZoomEnabled: function() {
          return !!h.options.mouseWheelZoomEnabled;
        },
        setZoomScaleSensitivity: function(d) {
          return h.options.zoomScaleSensitivity = d, h.pi;
        },
        setMinZoom: function(d) {
          return h.options.minZoom = d, h.pi;
        },
        setMaxZoom: function(d) {
          return h.options.maxZoom = d, h.pi;
        },
        setBeforeZoom: function(d) {
          return h.options.beforeZoom = d === null ? null : i.proxy(d, h.publicInstance), h.pi;
        },
        setOnZoom: function(d) {
          return h.options.onZoom = d === null ? null : i.proxy(d, h.publicInstance), h.pi;
        },
        zoom: function(d) {
          return h.publicZoom(d, true), h.pi;
        },
        zoomBy: function(d) {
          return h.publicZoom(d, false), h.pi;
        },
        zoomAtPoint: function(d, u) {
          return h.publicZoomAtPoint(d, u, true), h.pi;
        },
        zoomAtPointBy: function(d, u) {
          return h.publicZoomAtPoint(d, u, false), h.pi;
        },
        zoomIn: function() {
          return this.zoomBy(1 + h.options.zoomScaleSensitivity), h.pi;
        },
        zoomOut: function() {
          return this.zoomBy(1 / (1 + h.options.zoomScaleSensitivity)), h.pi;
        },
        getZoom: function() {
          return h.getRelativeZoom();
        },
        setOnUpdatedCTM: function(d) {
          return h.options.onUpdatedCTM = d === null ? null : i.proxy(d, h.publicInstance), h.pi;
        },
        resetZoom: function() {
          return h.resetZoom(), h.pi;
        },
        resetPan: function() {
          return h.resetPan(), h.pi;
        },
        reset: function() {
          return h.reset(), h.pi;
        },
        fit: function() {
          return h.fit(), h.pi;
        },
        contain: function() {
          return h.contain(), h.pi;
        },
        center: function() {
          return h.center(), h.pi;
        },
        updateBBox: function() {
          return h.updateBBox(), h.pi;
        },
        resize: function() {
          return h.resize(), h.pi;
        },
        getSizes: function() {
          return {
            width: h.width,
            height: h.height,
            realZoom: h.getZoom(),
            viewBox: h.viewport.getViewBox()
          };
        },
        destroy: function() {
          return h.destroy(), h.pi;
        }
      }), this.publicInstance;
    };
    var l = [], c = function(h, d) {
      var u = i.getSvg(h);
      if (u === null)
        return null;
      for (var p = l.length - 1; p >= 0; p--)
        if (l[p].svg === u)
          return l[p].instance.getPublicInstance();
      return l.push({
        svg: u,
        instance: new o(u, d)
      }), l[l.length - 1].instance.getPublicInstance();
    };
    return Do = c, Do;
  }
  var Yw = Uw();
  const Gw = ph(Yw), Kg = async (e, t) => {
    const i = e.getBoundingClientRect(), r = Math.round(i.width), n = Math.round(i.height);
    if (r === 0 || n === 0)
      throw new Error("SVG\u5C3A\u5BF8\u65E0\u6548");
    const o = document.createElement("canvas"), s = o.getContext("2d"), a = 2;
    if (o.width = r * a, o.height = n * a, !s)
      throw new Error("\u65E0\u6CD5\u83B7\u53D6Canvas\u4E0A\u4E0B\u6587");
    s.fillStyle = "#ffffff", s.fillRect(0, 0, o.width, o.height);
    const l = t || e.cloneNode(true);
    l.setAttribute("width", String(r * a)), l.setAttribute("height", String(n * a)), l.setAttribute("viewBox", `0 0 ${r} ${n}`);
    const c = new XMLSerializer().serializeToString(l), h = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(c)))}`, d = new Image();
    return await new Promise((u, p) => {
      d.onload = u, d.onerror = () => p(new Error("\u56FE\u7247\u52A0\u8F7D\u5931\u8D25")), d.src = h;
    }), s.drawImage(d, 0, 0, o.width, o.height), o.toDataURL("image/png");
  }, Xw = (e, t) => {
    const i = document.createElement("a");
    i.href = e, i.download = t, document.body.appendChild(i), i.click(), document.body.removeChild(i);
  }, Qw = async (e, t, i = Date.now() + ".png") => {
    try {
      const r = await Kg(e, t);
      Xw(r, i);
    } catch (r) {
      console.error("SVG\u8F6CPNG\u4E0B\u8F7D\u5931\u8D25:", r);
    }
  }, Jw = async (e, t) => {
    try {
      const i = await Kg(e, t);
      if (typeof ClipboardItem < "u") {
        const r = new ClipboardItem({
          "image/png": Kw(i)
        });
        await navigator.clipboard.write([
          r
        ]);
      } else {
        const r = document.createElement("textarea");
        r.value = i, document.body.appendChild(r), r.select();
        try {
          document.execCommand("copy"), console.log("\u56FE\u7247\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F\uFF08\u964D\u7EA7\u65B9\u6848\uFF09");
        } catch (n) {
          console.error("\u590D\u5236\u5931\u8D25:", n);
        }
        document.body.removeChild(r);
      }
    } catch (i) {
      throw console.error("\u590D\u5236SVG\u5230PNG\u5931\u8D25:", i), i;
    }
  };
  function Kw(e) {
    var t;
    const i = e.split(","), r = ((t = i[0].match(/:(.*?);/)) == null ? void 0 : t[1]) || "image/png", n = atob(i[1]);
    let o = n.length;
    const s = new Uint8Array(o);
    for (; o--; )
      s[o] = n.charCodeAt(o);
    return new Blob([
      s
    ], {
      type: r
    });
  }
  let t_, e_, i_;
  t_ = [
    "innerHTML"
  ];
  e_ = {
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
    emits: [
      "refresh",
      "zoomIn",
      "zoomOut",
      "fullscreen",
      "zoomChange",
      "select",
      "unselect"
    ],
    setup(e, { emit: t }) {
      const i = e, r = "mermaid-" + Date.now(), n = ro(), o = ro(), s = ro("");
      let a = null;
      const l = t;
      df();
      function c(w) {
        if (l("zoomChange", w), o.value) {
          const k = new CustomEvent("zoomChange", {
            detail: w,
            bubbles: true
          });
          o.value.dispatchEvent(k);
        }
      }
      const h = () => {
        a == null ? void 0 : a.enablePan(), a == null ? void 0 : a.enableZoom();
      }, d = () => {
        a == null ? void 0 : a.disablePan(), a == null ? void 0 : a.disableZoom();
      }, u = () => (a == null ? void 0 : a.destroy(), a = null, oh.render(r, i.value).then((w) => {
        o.value.innerHTML = w.svg, n.value = o.value.querySelector("svg"), a && c(a.getZoom());
      })), p = () => {
        a == null ? void 0 : a.zoomIn(), a && c(a.getZoom());
      }, f = () => {
        a == null ? void 0 : a.zoomOut(), a && c(a.getZoom());
      };
      let m = null;
      const y = (w) => {
        yf(() => {
          u().then(() => {
            m = n.value.cloneNode(true), w && (a == null ? void 0 : a.enablePan(), a == null ? void 0 : a.enableZoom());
          });
        });
      }, x = () => {
        const w = document.querySelector(".diagram-viewer__content svg");
        w && (Jw(w, m), Rs.success(Ns.global.t("hubx.bubble.copied")));
      }, b = () => {
        const w = document.querySelector(".diagram-viewer__content svg");
        w && (Qw(w, m), Rs.success(Ns.global.t("hubx.bubble.download_success")));
      };
      let C = null;
      return Ps(() => {
        clearTimeout(C);
        const w = i.value;
        C = setTimeout(() => {
          oh.render(r, w).then((k) => {
            o.value.innerHTML = k.svg, n.value = o.value.querySelector("svg");
          });
        }, 600);
      }), Ps(() => {
        n.value && !a && (a = Gw(n.value, {
          center: true,
          fit: true,
          maxZoom: 12,
          minZoom: 0.2
        }), a.disablePan(), a.disableZoom(), a.disableDblClickZoom(), a.setOnZoom(() => {
          c(a.getZoom());
        }));
      }), uf(() => {
        a == null ? void 0 : a.destroy();
      }), (w, k) => (pf(), gf(vf, {
        value: e.value,
        onRefresh: u,
        onZoomIn: p,
        onZoomOut: f,
        onFullscreen: y,
        onSelect: h,
        onUnselect: d,
        onDownloadImage: b,
        onCopyImage: x
      }, {
        "image-content": ff(() => [
          mf("div", {
            ref_key: "contentRef",
            ref: o,
            class: "mermaid-viewer__diagram",
            innerHTML: s.value
          }, null, 8, t_)
        ]),
        _: 1
      }, 8, [
        "value"
      ]));
    }
  };
  i_ = cf(e_, [
    [
      "__scopeId",
      "data-v-64aa908e"
    ]
  ]);
  B_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: i_
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  d_ as $,
  r0 as A,
  G0 as B,
  ts as C,
  Ut as D,
  Ah as E,
  _1 as F,
  Ik as G,
  Vl as H,
  d0 as I,
  ry as J,
  wi as K,
  a_ as L,
  Pn as M,
  Ta as N,
  Ks as O,
  Ey as P,
  qr as Q,
  w1 as R,
  gr as S,
  z0 as T,
  pr as U,
  W as V,
  J as W,
  Nh as X,
  Na as Y,
  f1 as Z,
  g as _,
  __tla,
  j0 as a,
  un as a$,
  g_ as a0,
  cl as a1,
  hl as a2,
  m_ as a3,
  f_ as a4,
  p_ as a5,
  h_ as a6,
  c_ as a7,
  x_ as a8,
  u_ as a9,
  th as aA,
  f2 as aB,
  An as aC,
  By as aD,
  Ty as aE,
  ei as aF,
  u1 as aG,
  tu as aH,
  $n as aI,
  zn as aJ,
  pn as aK,
  iu as aL,
  Kd as aM,
  Wb as aN,
  Mf as aO,
  c1 as aP,
  r1 as aQ,
  Hx as aR,
  Va as aS,
  Pb as aT,
  g1 as aU,
  yr as aV,
  Li as aW,
  cn as aX,
  Gb as aY,
  rC as aZ,
  mr as a_,
  y_ as aa,
  W2 as ab,
  ng as ac,
  w_ as ad,
  oy as ae,
  vt as af,
  Ne as ag,
  Ra as ah,
  Eu as ai,
  ni as aj,
  lu as ak,
  nt as al,
  ue as am,
  $k as an,
  v_ as ao,
  __ as ap,
  k_ as aq,
  Y as ar,
  C_ as as,
  fk as at,
  dk as au,
  ck as av,
  d1 as aw,
  rb as ax,
  n1 as ay,
  Za as az,
  W0 as b,
  jb as b0,
  Ud as b1,
  Ux as b2,
  Yx as b3,
  Ze as b4,
  Sl as b5,
  Gx as b6,
  Ua as b7,
  Vx as b8,
  Jx as b9,
  Ai as ba,
  Re as bb,
  kl as bc,
  Ya as bd,
  Gd as be,
  ka as bf,
  p1 as bg,
  In as bh,
  B_ as bi,
  ct as c,
  Rh as d,
  Ft as e,
  Me as f,
  Z0 as g,
  Xe as h,
  Fy as i,
  Mi as j,
  cu as k,
  $ as l,
  s_ as m,
  T_ as n,
  V0 as o,
  U0 as p,
  ny as q,
  S_ as r,
  H0 as s,
  sk as t,
  de as u,
  b_ as v,
  B1 as w,
  q0 as x,
  l_ as y,
  tr as z
};
