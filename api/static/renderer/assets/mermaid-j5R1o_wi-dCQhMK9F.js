import { E as E0$1, _ as __vitePreload, R as Rn$1, r as ref, w as watchEffect, o as onMounted, a as onUnmounted, b as openBlock, c as createElementBlock, d as createBaseVNode, n as normalizeClass, t as toDisplayString, g as withDirectives, v as vShow, f as createVNode, A as At$1, h as createBlock, i as withCtx, T as Transition, D as Dl$1 } from "./main-zTjO05wq.js";
import { X as Xi$1, L as Li$1, H as Hi, V as Vi$1, B as Bi$1, z as zi, U as Ui$1, Y as Yi, K as Ki$1, G as Gi$1 } from "./helper-7WMIPux3-FiO_G2IV.js";
import { d, r } from "./copy-BS31ARP0-eab1H3tb.js";
var Cg = Object.defineProperty;
var vg = (e8, t, r3) => t in e8 ? Cg(e8, t, { enumerable: true, configurable: true, writable: true, value: r3 }) : e8[t] = r3;
var yt = (e8, t, r3) => vg(e8, typeof t != "symbol" ? t + "" : t, r3);
var ia = { exports: {} }, Rg = ia.exports, il;
function Ig() {
  return il || (il = 1, function(e8, t) {
    (function(r3, i) {
      e8.exports = i();
    })(Rg, function() {
      var r3 = 1e3, i = 6e4, a = 36e5, n = "millisecond", o = "second", s = "minute", l = "hour", c = "day", h = "week", u = "month", d3 = "quarter", f = "year", g = "date", m = "Invalid Date", y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, x = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(F) {
        var M = ["th", "st", "nd", "rd"], B = F % 100;
        return "[" + F + (M[(B - 20) % 10] || M[B] || M[0]) + "]";
      } }, v = function(F, M, B) {
        var O = String(F);
        return !O || O.length >= M ? F : "" + Array(M + 1 - O.length).join(B) + F;
      }, S = { s: v, z: function(F) {
        var M = -F.utcOffset(), B = Math.abs(M), O = Math.floor(B / 60), L = B % 60;
        return (M <= 0 ? "+" : "-") + v(O, 2, "0") + ":" + v(L, 2, "0");
      }, m: function F(M, B) {
        if (M.date() < B.date())
          return -F(B, M);
        var O = 12 * (B.year() - M.year()) + (B.month() - M.month()), L = M.clone().add(O, u), E = B - L < 0, R = M.clone().add(O + (E ? -1 : 1), u);
        return +(-(O + (B - L) / (E ? L - R : R - L)) || 0);
      }, a: function(F) {
        return F < 0 ? Math.ceil(F) || 0 : Math.floor(F);
      }, p: function(F) {
        return { M: u, y: f, w: h, d: c, D: g, h: l, m: s, s: o, ms: n, Q: d3 }[F] || String(F || "").toLowerCase().replace(/s$/, "");
      }, u: function(F) {
        return F === void 0;
      } }, _ = "en", C = {};
      C[_] = b;
      var k = "$isDayjsObject", P = function(F) {
        return F instanceof j || !(!F || !F[k]);
      }, H = function F(M, B, O) {
        var L;
        if (!M)
          return _;
        if (typeof M == "string") {
          var E = M.toLowerCase();
          C[E] && (L = E), B && (C[E] = B, L = E);
          var R = M.split("-");
          if (!L && R.length > 1)
            return F(R[0]);
        } else {
          var z = M.name;
          C[z] = M, L = z;
        }
        return !O && L && (_ = L), L || !O && _;
      }, $ = function(F, M) {
        if (P(F))
          return F.clone();
        var B = typeof M == "object" ? M : {};
        return B.date = F, B.args = arguments, new j(B);
      }, A = S;
      A.l = H, A.i = P, A.w = function(F, M) {
        return $(F, { locale: M.$L, utc: M.$u, x: M.$x, $offset: M.$offset });
      };
      var j = function() {
        function F(B) {
          this.$L = H(B.locale, null, true), this.parse(B), this.$x = this.$x || B.x || {}, this[k] = true;
        }
        var M = F.prototype;
        return M.parse = function(B) {
          this.$d = function(O) {
            var L = O.date, E = O.utc;
            if (L === null)
              return /* @__PURE__ */ new Date(NaN);
            if (A.u(L))
              return /* @__PURE__ */ new Date();
            if (L instanceof Date)
              return new Date(L);
            if (typeof L == "string" && !/Z$/i.test(L)) {
              var R = L.match(y);
              if (R) {
                var z = R[2] - 1 || 0, Y = (R[7] || "0").substring(0, 3);
                return E ? new Date(Date.UTC(R[1], z, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, Y)) : new Date(R[1], z, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, Y);
              }
            }
            return new Date(L);
          }(B), this.init();
        }, M.init = function() {
          var B = this.$d;
          this.$y = B.getFullYear(), this.$M = B.getMonth(), this.$D = B.getDate(), this.$W = B.getDay(), this.$H = B.getHours(), this.$m = B.getMinutes(), this.$s = B.getSeconds(), this.$ms = B.getMilliseconds();
        }, M.$utils = function() {
          return A;
        }, M.isValid = function() {
          return this.$d.toString() !== m;
        }, M.isSame = function(B, O) {
          var L = $(B);
          return this.startOf(O) <= L && L <= this.endOf(O);
        }, M.isAfter = function(B, O) {
          return $(B) < this.startOf(O);
        }, M.isBefore = function(B, O) {
          return this.endOf(O) < $(B);
        }, M.$g = function(B, O, L) {
          return A.u(B) ? this[O] : this.set(L, B);
        }, M.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, M.valueOf = function() {
          return this.$d.getTime();
        }, M.startOf = function(B, O) {
          var L = this, E = !!A.u(O) || O, R = A.p(B), z = function(Mt, gt) {
            var _t = A.w(L.$u ? Date.UTC(L.$y, gt, Mt) : new Date(L.$y, gt, Mt), L);
            return E ? _t : _t.endOf(c);
          }, Y = function(Mt, gt) {
            return A.w(L.toDate()[Mt].apply(L.toDate("s"), (E ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(gt)), L);
          }, I = this.$W, V = this.$M, W = this.$D, ut = "set" + (this.$u ? "UTC" : "");
          switch (R) {
            case f:
              return E ? z(1, 0) : z(31, 11);
            case u:
              return E ? z(1, V) : z(0, V + 1);
            case h:
              var mt = this.$locale().weekStart || 0, Ft = (I < mt ? I + 7 : I) - mt;
              return z(E ? W - Ft : W + (6 - Ft), V);
            case c:
            case g:
              return Y(ut + "Hours", 0);
            case l:
              return Y(ut + "Minutes", 1);
            case s:
              return Y(ut + "Seconds", 2);
            case o:
              return Y(ut + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, M.endOf = function(B) {
          return this.startOf(B, false);
        }, M.$set = function(B, O) {
          var L, E = A.p(B), R = "set" + (this.$u ? "UTC" : ""), z = (L = {}, L[c] = R + "Date", L[g] = R + "Date", L[u] = R + "Month", L[f] = R + "FullYear", L[l] = R + "Hours", L[s] = R + "Minutes", L[o] = R + "Seconds", L[n] = R + "Milliseconds", L)[E], Y = E === c ? this.$D + (O - this.$W) : O;
          if (E === u || E === f) {
            var I = this.clone().set(g, 1);
            I.$d[z](Y), I.init(), this.$d = I.set(g, Math.min(this.$D, I.daysInMonth())).$d;
          } else
            z && this.$d[z](Y);
          return this.init(), this;
        }, M.set = function(B, O) {
          return this.clone().$set(B, O);
        }, M.get = function(B) {
          return this[A.p(B)]();
        }, M.add = function(B, O) {
          var L, E = this;
          B = Number(B);
          var R = A.p(O), z = function(V) {
            var W = $(E);
            return A.w(W.date(W.date() + Math.round(V * B)), E);
          };
          if (R === u)
            return this.set(u, this.$M + B);
          if (R === f)
            return this.set(f, this.$y + B);
          if (R === c)
            return z(1);
          if (R === h)
            return z(7);
          var Y = (L = {}, L[s] = i, L[l] = a, L[o] = r3, L)[R] || 1, I = this.$d.getTime() + B * Y;
          return A.w(I, this);
        }, M.subtract = function(B, O) {
          return this.add(-1 * B, O);
        }, M.format = function(B) {
          var O = this, L = this.$locale();
          if (!this.isValid())
            return L.invalidDate || m;
          var E = B || "YYYY-MM-DDTHH:mm:ssZ", R = A.z(this), z = this.$H, Y = this.$m, I = this.$M, V = L.weekdays, W = L.months, ut = L.meridiem, mt = function(gt, _t, Rt, te) {
            return gt && (gt[_t] || gt(O, E)) || Rt[_t].slice(0, te);
          }, Ft = function(gt) {
            return A.s(z % 12 || 12, gt, "0");
          }, Mt = ut || function(gt, _t, Rt) {
            var te = gt < 12 ? "AM" : "PM";
            return Rt ? te.toLowerCase() : te;
          };
          return E.replace(x, function(gt, _t) {
            return _t || function(Rt) {
              switch (Rt) {
                case "YY":
                  return String(O.$y).slice(-2);
                case "YYYY":
                  return A.s(O.$y, 4, "0");
                case "M":
                  return I + 1;
                case "MM":
                  return A.s(I + 1, 2, "0");
                case "MMM":
                  return mt(L.monthsShort, I, W, 3);
                case "MMMM":
                  return mt(W, I);
                case "D":
                  return O.$D;
                case "DD":
                  return A.s(O.$D, 2, "0");
                case "d":
                  return String(O.$W);
                case "dd":
                  return mt(L.weekdaysMin, O.$W, V, 2);
                case "ddd":
                  return mt(L.weekdaysShort, O.$W, V, 3);
                case "dddd":
                  return V[O.$W];
                case "H":
                  return String(z);
                case "HH":
                  return A.s(z, 2, "0");
                case "h":
                  return Ft(1);
                case "hh":
                  return Ft(2);
                case "a":
                  return Mt(z, Y, true);
                case "A":
                  return Mt(z, Y, false);
                case "m":
                  return String(Y);
                case "mm":
                  return A.s(Y, 2, "0");
                case "s":
                  return String(O.$s);
                case "ss":
                  return A.s(O.$s, 2, "0");
                case "SSS":
                  return A.s(O.$ms, 3, "0");
                case "Z":
                  return R;
              }
              return null;
            }(gt) || R.replace(":", "");
          });
        }, M.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, M.diff = function(B, O, L) {
          var E, R = this, z = A.p(O), Y = $(B), I = (Y.utcOffset() - this.utcOffset()) * i, V = this - Y, W = function() {
            return A.m(R, Y);
          };
          switch (z) {
            case f:
              E = W() / 12;
              break;
            case u:
              E = W();
              break;
            case d3:
              E = W() / 3;
              break;
            case h:
              E = (V - I) / 6048e5;
              break;
            case c:
              E = (V - I) / 864e5;
              break;
            case l:
              E = V / a;
              break;
            case s:
              E = V / i;
              break;
            case o:
              E = V / r3;
              break;
            default:
              E = V;
          }
          return L ? E : A.a(E);
        }, M.daysInMonth = function() {
          return this.endOf(u).$D;
        }, M.$locale = function() {
          return C[this.$L];
        }, M.locale = function(B, O) {
          if (!B)
            return this.$L;
          var L = this.clone(), E = H(B, O, true);
          return E && (L.$L = E), L;
        }, M.clone = function() {
          return A.w(this.$d, this);
        }, M.toDate = function() {
          return new Date(this.valueOf());
        }, M.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, M.toISOString = function() {
          return this.$d.toISOString();
        }, M.toString = function() {
          return this.$d.toUTCString();
        }, F;
      }(), N = j.prototype;
      return $.prototype = N, [["$ms", n], ["$s", o], ["$m", s], ["$H", l], ["$W", c], ["$M", u], ["$y", f], ["$D", g]].forEach(function(F) {
        N[F[1]] = function(M) {
          return this.$g(M, F[0], F[1]);
        };
      }), $.extend = function(F, M) {
        return F.$i || (F(M, j, $), F.$i = true), $;
      }, $.locale = H, $.isDayjs = P, $.unix = function(F) {
        return $(1e3 * F);
      }, $.en = C[_], $.Ls = C, $.p = {}, $;
    });
  }(ia)), ia.exports;
}
var Pg = Ig();
const Ng = /* @__PURE__ */ E0$1(Pg), aa = {
  /* CLAMP */
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
    r: (e8) => e8 >= 255 ? 255 : e8 < 0 ? 0 : e8,
    g: (e8) => e8 >= 255 ? 255 : e8 < 0 ? 0 : e8,
    b: (e8) => e8 >= 255 ? 255 : e8 < 0 ? 0 : e8,
    h: (e8) => e8 % 360,
    s: (e8) => e8 >= 100 ? 100 : e8 < 0 ? 0 : e8,
    l: (e8) => e8 >= 100 ? 100 : e8 < 0 ? 0 : e8,
    a: (e8) => e8 >= 1 ? 1 : e8 < 0 ? 0 : e8
  },
  /* CONVERSION */
  //SOURCE: https://planetcalc.com/7779
  toLinear: (e8) => {
    const t = e8 / 255;
    return e8 > 0.03928 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92;
  },
  //SOURCE: https://gist.github.com/mjackson/5311256
  hue2rgb: (e8, t, r3) => (r3 < 0 && (r3 += 1), r3 > 1 && (r3 -= 1), r3 < 1 / 6 ? e8 + (t - e8) * 6 * r3 : r3 < 1 / 2 ? t : r3 < 2 / 3 ? e8 + (t - e8) * (2 / 3 - r3) * 6 : e8),
  hsl2rgb: ({ h: e8, s: t, l: r3 }, i) => {
    if (!t)
      return r3 * 2.55;
    e8 /= 360, t /= 100, r3 /= 100;
    const a = r3 < 0.5 ? r3 * (1 + t) : r3 + t - r3 * t, n = 2 * r3 - a;
    switch (i) {
      case "r":
        return aa.hue2rgb(n, a, e8 + 1 / 3) * 255;
      case "g":
        return aa.hue2rgb(n, a, e8) * 255;
      case "b":
        return aa.hue2rgb(n, a, e8 - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r: e8, g: t, b: r3 }, i) => {
    e8 /= 255, t /= 255, r3 /= 255;
    const a = Math.max(e8, t, r3), n = Math.min(e8, t, r3), o = (a + n) / 2;
    if (i === "l")
      return o * 100;
    if (a === n)
      return 0;
    const s = a - n, l = o > 0.5 ? s / (2 - a - n) : s / (a + n);
    if (i === "s")
      return l * 100;
    switch (a) {
      case e8:
        return ((t - r3) / s + (t < r3 ? 6 : 0)) * 60;
      case t:
        return ((r3 - e8) / s + 2) * 60;
      case r3:
        return ((e8 - t) / s + 4) * 60;
      default:
        return -1;
    }
  }
}, zg = {
  /* API */
  clamp: (e8, t, r3) => t > r3 ? Math.min(t, Math.max(r3, e8)) : Math.min(r3, Math.max(t, e8)),
  round: (e8) => Math.round(e8 * 1e10) / 1e10
}, Wg = {
  /* API */
  dec2hex: (e8) => {
    const t = Math.round(e8).toString(16);
    return t.length > 1 ? t : `0${t}`;
  }
}, st = {
  channel: aa,
  lang: zg,
  unit: Wg
}, De = {};
for (let e8 = 0; e8 <= 255; e8++)
  De[e8] = st.unit.dec2hex(e8);
const Nt = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
class qg {
  constructor() {
    this.type = Nt.ALL;
  }
  /* API */
  get() {
    return this.type;
  }
  set(t) {
    if (this.type && this.type !== t)
      throw new Error("Cannot change both RGB and HSL channels at the same time");
    this.type = t;
  }
  reset() {
    this.type = Nt.ALL;
  }
  is(t) {
    return this.type === t;
  }
}
class Hg {
  /* CONSTRUCTOR */
  constructor(t, r3) {
    this.color = r3, this.changed = false, this.data = t, this.type = new qg();
  }
  /* API */
  set(t, r3) {
    return this.color = r3, this.changed = false, this.data = t, this.type.type = Nt.ALL, this;
  }
  /* HELPERS */
  _ensureHSL() {
    const t = this.data, { h: r3, s: i, l: a } = t;
    r3 === void 0 && (t.h = st.channel.rgb2hsl(t, "h")), i === void 0 && (t.s = st.channel.rgb2hsl(t, "s")), a === void 0 && (t.l = st.channel.rgb2hsl(t, "l"));
  }
  _ensureRGB() {
    const t = this.data, { r: r3, g: i, b: a } = t;
    r3 === void 0 && (t.r = st.channel.hsl2rgb(t, "r")), i === void 0 && (t.g = st.channel.hsl2rgb(t, "g")), a === void 0 && (t.b = st.channel.hsl2rgb(t, "b"));
  }
  /* GETTERS */
  get r() {
    const t = this.data, r3 = t.r;
    return !this.type.is(Nt.HSL) && r3 !== void 0 ? r3 : (this._ensureHSL(), st.channel.hsl2rgb(t, "r"));
  }
  get g() {
    const t = this.data, r3 = t.g;
    return !this.type.is(Nt.HSL) && r3 !== void 0 ? r3 : (this._ensureHSL(), st.channel.hsl2rgb(t, "g"));
  }
  get b() {
    const t = this.data, r3 = t.b;
    return !this.type.is(Nt.HSL) && r3 !== void 0 ? r3 : (this._ensureHSL(), st.channel.hsl2rgb(t, "b"));
  }
  get h() {
    const t = this.data, r3 = t.h;
    return !this.type.is(Nt.RGB) && r3 !== void 0 ? r3 : (this._ensureRGB(), st.channel.rgb2hsl(t, "h"));
  }
  get s() {
    const t = this.data, r3 = t.s;
    return !this.type.is(Nt.RGB) && r3 !== void 0 ? r3 : (this._ensureRGB(), st.channel.rgb2hsl(t, "s"));
  }
  get l() {
    const t = this.data, r3 = t.l;
    return !this.type.is(Nt.RGB) && r3 !== void 0 ? r3 : (this._ensureRGB(), st.channel.rgb2hsl(t, "l"));
  }
  get a() {
    return this.data.a;
  }
  /* SETTERS */
  set r(t) {
    this.type.set(Nt.RGB), this.changed = true, this.data.r = t;
  }
  set g(t) {
    this.type.set(Nt.RGB), this.changed = true, this.data.g = t;
  }
  set b(t) {
    this.type.set(Nt.RGB), this.changed = true, this.data.b = t;
  }
  set h(t) {
    this.type.set(Nt.HSL), this.changed = true, this.data.h = t;
  }
  set s(t) {
    this.type.set(Nt.HSL), this.changed = true, this.data.s = t;
  }
  set l(t) {
    this.type.set(Nt.HSL), this.changed = true, this.data.l = t;
  }
  set a(t) {
    this.changed = true, this.data.a = t;
  }
}
const Ya = new Hg({ r: 0, g: 0, b: 0, a: 0 }, "transparent"), _r = {
  /* VARIABLES */
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  /* API */
  parse: (e8) => {
    if (e8.charCodeAt(0) !== 35)
      return;
    const t = e8.match(_r.re);
    if (!t)
      return;
    const r3 = t[1], i = parseInt(r3, 16), a = r3.length, n = a % 4 === 0, o = a > 4, s = o ? 1 : 17, l = o ? 8 : 4, c = n ? 0 : -1, h = o ? 255 : 15;
    return Ya.set({
      r: (i >> l * (c + 3) & h) * s,
      g: (i >> l * (c + 2) & h) * s,
      b: (i >> l * (c + 1) & h) * s,
      a: n ? (i & h) * s / 255 : 1
    }, e8);
  },
  stringify: (e8) => {
    const { r: t, g: r3, b: i, a } = e8;
    return a < 1 ? `#${De[Math.round(t)]}${De[Math.round(r3)]}${De[Math.round(i)]}${De[Math.round(a * 255)]}` : `#${De[Math.round(t)]}${De[Math.round(r3)]}${De[Math.round(i)]}`;
  }
}, Ke = {
  /* VARIABLES */
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  /* HELPERS */
  _hue2deg: (e8) => {
    const t = e8.match(Ke.hueRe);
    if (t) {
      const [, r3, i] = t;
      switch (i) {
        case "grad":
          return st.channel.clamp.h(parseFloat(r3) * 0.9);
        case "rad":
          return st.channel.clamp.h(parseFloat(r3) * 180 / Math.PI);
        case "turn":
          return st.channel.clamp.h(parseFloat(r3) * 360);
      }
    }
    return st.channel.clamp.h(parseFloat(e8));
  },
  /* API */
  parse: (e8) => {
    const t = e8.charCodeAt(0);
    if (t !== 104 && t !== 72)
      return;
    const r3 = e8.match(Ke.re);
    if (!r3)
      return;
    const [, i, a, n, o, s] = r3;
    return Ya.set({
      h: Ke._hue2deg(i),
      s: st.channel.clamp.s(parseFloat(a)),
      l: st.channel.clamp.l(parseFloat(n)),
      a: o ? st.channel.clamp.a(s ? parseFloat(o) / 100 : parseFloat(o)) : 1
    }, e8);
  },
  stringify: (e8) => {
    const { h: t, s: r3, l: i, a } = e8;
    return a < 1 ? `hsla(${st.lang.round(t)}, ${st.lang.round(r3)}%, ${st.lang.round(i)}%, ${a})` : `hsl(${st.lang.round(t)}, ${st.lang.round(r3)}%, ${st.lang.round(i)}%)`;
  }
}, yi = {
  /* VARIABLES */
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
  /* API */
  parse: (e8) => {
    e8 = e8.toLowerCase();
    const t = yi.colors[e8];
    if (t)
      return _r.parse(t);
  },
  stringify: (e8) => {
    const t = _r.stringify(e8);
    for (const r3 in yi.colors)
      if (yi.colors[r3] === t)
        return r3;
  }
}, fi = {
  /* VARIABLES */
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  /* API */
  parse: (e8) => {
    const t = e8.charCodeAt(0);
    if (t !== 114 && t !== 82)
      return;
    const r3 = e8.match(fi.re);
    if (!r3)
      return;
    const [, i, a, n, o, s, l, c, h] = r3;
    return Ya.set({
      r: st.channel.clamp.r(a ? parseFloat(i) * 2.55 : parseFloat(i)),
      g: st.channel.clamp.g(o ? parseFloat(n) * 2.55 : parseFloat(n)),
      b: st.channel.clamp.b(l ? parseFloat(s) * 2.55 : parseFloat(s)),
      a: c ? st.channel.clamp.a(h ? parseFloat(c) / 100 : parseFloat(c)) : 1
    }, e8);
  },
  stringify: (e8) => {
    const { r: t, g: r3, b: i, a } = e8;
    return a < 1 ? `rgba(${st.lang.round(t)}, ${st.lang.round(r3)}, ${st.lang.round(i)}, ${st.lang.round(a)})` : `rgb(${st.lang.round(t)}, ${st.lang.round(r3)}, ${st.lang.round(i)})`;
  }
}, me = {
  /* VARIABLES */
  format: {
    keyword: yi,
    hex: _r,
    rgb: fi,
    rgba: fi,
    hsl: Ke,
    hsla: Ke
  },
  /* API */
  parse: (e8) => {
    if (typeof e8 != "string")
      return e8;
    const t = _r.parse(e8) || fi.parse(e8) || Ke.parse(e8) || yi.parse(e8);
    if (t)
      return t;
    throw new Error(`Unsupported color format: "${e8}"`);
  },
  stringify: (e8) => !e8.changed && e8.color ? e8.color : e8.type.is(Nt.HSL) || e8.data.r === void 0 ? Ke.stringify(e8) : e8.a < 1 || !Number.isInteger(e8.r) || !Number.isInteger(e8.g) || !Number.isInteger(e8.b) ? fi.stringify(e8) : _r.stringify(e8)
}, Sc = (e8, t) => {
  const r3 = me.parse(e8);
  for (const i in t)
    r3[i] = st.channel.clamp[i](t[i]);
  return me.stringify(r3);
}, xi = (e8, t, r3 = 0, i = 1) => {
  if (typeof e8 != "number")
    return Sc(e8, { a: t });
  const a = Ya.set({
    r: st.channel.clamp.r(e8),
    g: st.channel.clamp.g(t),
    b: st.channel.clamp.b(r3),
    a: st.channel.clamp.a(i)
  });
  return me.stringify(a);
}, jg = (e8) => {
  const { r: t, g: r3, b: i } = me.parse(e8), a = 0.2126 * st.channel.toLinear(t) + 0.7152 * st.channel.toLinear(r3) + 0.0722 * st.channel.toLinear(i);
  return st.lang.round(a);
}, Yg = (e8) => jg(e8) >= 0.5, Fi = (e8) => !Yg(e8), Tc = (e8, t, r3) => {
  const i = me.parse(e8), a = i[t], n = st.channel.clamp[t](a + r3);
  return a !== n && (i[t] = n), me.stringify(i);
}, G = (e8, t) => Tc(e8, "l", t), it = (e8, t) => Tc(e8, "l", -t), T = (e8, t) => {
  const r3 = me.parse(e8), i = {};
  for (const a in t)
    t[a] && (i[a] = r3[a] + t[a]);
  return Sc(e8, i);
}, Ug = (e8, t, r3 = 50) => {
  const { r: i, g: a, b: n, a: o } = me.parse(e8), { r: s, g: l, b: c, a: h } = me.parse(t), u = r3 / 100, d3 = u * 2 - 1, f = o - h, m = ((d3 * f === -1 ? d3 : (d3 + f) / (1 + d3 * f)) + 1) / 2, y = 1 - m, x = i * m + s * y, b = a * m + l * y, v = n * m + c * y, S = o * u + h * (1 - u);
  return xi(x, b, v, S);
}, U = (e8, t = 100) => {
  const r3 = me.parse(e8);
  return r3.r = 255 - r3.r, r3.g = 255 - r3.g, r3.b = 255 - r3.b, Ug(r3, e8, t);
};
/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
const {
  entries: Bc,
  setPrototypeOf: al,
  isFrozen: Gg,
  getPrototypeOf: Xg,
  getOwnPropertyDescriptor: Vg
} = Object;
let {
  freeze: Gt,
  seal: ne,
  create: Lc
} = Object, {
  apply: Zn,
  construct: Kn
} = typeof Reflect < "u" && Reflect;
Gt || (Gt = function(t) {
  return t;
});
ne || (ne = function(t) {
  return t;
});
Zn || (Zn = function(t, r3, i) {
  return t.apply(r3, i);
});
Kn || (Kn = function(t, r3) {
  return new t(...r3);
});
const Ui = Xt(Array.prototype.forEach), Zg = Xt(Array.prototype.lastIndexOf), nl = Xt(Array.prototype.pop), ei = Xt(Array.prototype.push), Kg = Xt(Array.prototype.splice), na = Xt(String.prototype.toLowerCase), Tn = Xt(String.prototype.toString), sl = Xt(String.prototype.match), ri = Xt(String.prototype.replace), Qg = Xt(String.prototype.indexOf), Jg = Xt(String.prototype.trim), le = Xt(Object.prototype.hasOwnProperty), qt = Xt(RegExp.prototype.test), ii = tm(TypeError);
function Xt(e8) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r3 = arguments.length, i = new Array(r3 > 1 ? r3 - 1 : 0), a = 1; a < r3; a++)
      i[a - 1] = arguments[a];
    return Zn(e8, t, i);
  };
}
function tm(e8) {
  return function() {
    for (var t = arguments.length, r3 = new Array(t), i = 0; i < t; i++)
      r3[i] = arguments[i];
    return Kn(e8, r3);
  };
}
function lt(e8, t) {
  let r3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : na;
  al && al(e8, null);
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const n = r3(a);
      n !== a && (Gg(t) || (t[i] = n), a = n);
    }
    e8[a] = true;
  }
  return e8;
}
function em(e8) {
  for (let t = 0; t < e8.length; t++)
    le(e8, t) || (e8[t] = null);
  return e8;
}
function _e(e8) {
  const t = Lc(null);
  for (const [r3, i] of Bc(e8))
    le(e8, r3) && (Array.isArray(i) ? t[r3] = em(i) : i && typeof i == "object" && i.constructor === Object ? t[r3] = _e(i) : t[r3] = i);
  return t;
}
function ai(e8, t) {
  for (; e8 !== null; ) {
    const i = Vg(e8, t);
    if (i) {
      if (i.get)
        return Xt(i.get);
      if (typeof i.value == "function")
        return Xt(i.value);
    }
    e8 = Xg(e8);
  }
  function r3() {
    return null;
  }
  return r3;
}
const ol = Gt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Bn = Gt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ln = Gt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), rm = Gt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), An = Gt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), im = Gt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ll = Gt(["#text"]), cl = Gt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Mn = Gt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), hl = Gt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Gi = Gt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), am = ne(/\{\{[\w\W]*|[\w\W]*\}\}/gm), nm = ne(/<%[\w\W]*|[\w\W]*%>/gm), sm = ne(/\$\{[\w\W]*/gm), om = ne(/^data-[\-\w.\u00B7-\uFFFF]+$/), lm = ne(/^aria-[\-\w]+$/), Ac = ne(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), cm = ne(/^(?:\w+script|data):/i), hm = ne(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Mc = ne(/^html$/i), um = ne(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ul = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: lm,
  ATTR_WHITESPACE: hm,
  CUSTOM_ELEMENT: um,
  DATA_ATTR: om,
  DOCTYPE_NAME: Mc,
  ERB_EXPR: nm,
  IS_ALLOWED_URI: Ac,
  IS_SCRIPT_OR_DATA: cm,
  MUSTACHE_EXPR: am,
  TMPLIT_EXPR: sm
});
const ni = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, dm = function() {
  return typeof window > "u" ? null : window;
}, fm = function(t, r3) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let i = null;
  const a = "data-tt-policy-suffix";
  r3 && r3.hasAttribute(a) && (i = r3.getAttribute(a));
  const n = "dompurify" + (i ? "#" + i : "");
  try {
    return t.createPolicy(n, {
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
}, dl = function() {
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
function Ec() {
  let e8 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : dm();
  const t = (rt) => Ec(rt);
  if (t.version = "3.2.6", t.removed = [], !e8 || !e8.document || e8.document.nodeType !== ni.document || !e8.Element)
    return t.isSupported = false, t;
  let {
    document: r3
  } = e8;
  const i = r3, a = i.currentScript, {
    DocumentFragment: n,
    HTMLTemplateElement: o,
    Node: s,
    Element: l,
    NodeFilter: c,
    NamedNodeMap: h = e8.NamedNodeMap || e8.MozNamedAttrMap,
    HTMLFormElement: u,
    DOMParser: d3,
    trustedTypes: f
  } = e8, g = l.prototype, m = ai(g, "cloneNode"), y = ai(g, "remove"), x = ai(g, "nextSibling"), b = ai(g, "childNodes"), v = ai(g, "parentNode");
  if (typeof o == "function") {
    const rt = r3.createElement("template");
    rt.content && rt.content.ownerDocument && (r3 = rt.content.ownerDocument);
  }
  let S, _ = "";
  const {
    implementation: C,
    createNodeIterator: k,
    createDocumentFragment: P,
    getElementsByTagName: H
  } = r3, {
    importNode: $
  } = i;
  let A = dl();
  t.isSupported = typeof Bc == "function" && typeof v == "function" && C && C.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: j,
    ERB_EXPR: N,
    TMPLIT_EXPR: F,
    DATA_ATTR: M,
    ARIA_ATTR: B,
    IS_SCRIPT_OR_DATA: O,
    ATTR_WHITESPACE: L,
    CUSTOM_ELEMENT: E
  } = ul;
  let {
    IS_ALLOWED_URI: R
  } = ul, z = null;
  const Y = lt({}, [...ol, ...Bn, ...Ln, ...An, ...ll]);
  let I = null;
  const V = lt({}, [...cl, ...Mn, ...hl, ...Gi]);
  let W = Object.seal(Lc(null, {
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
  })), ut = null, mt = null, Ft = true, Mt = true, gt = false, _t = true, Rt = false, te = true, oe = false, je = false, mn = false, dr = false, zi2 = false, Wi = false, Do = true, Ro = false;
  const dg = "user-content-";
  let yn = true, Vr = false, fr = {}, pr = null;
  const Io = lt({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Po = null;
  const No = lt({}, ["audio", "video", "img", "source", "image", "track"]);
  let xn = null;
  const zo = lt({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), qi = "http://www.w3.org/1998/Math/MathML", Hi2 = "http://www.w3.org/2000/svg", be = "http://www.w3.org/1999/xhtml";
  let gr = be, bn = false, Cn = null;
  const fg = lt({}, [qi, Hi2, be], Tn);
  let ji = lt({}, ["mi", "mo", "mn", "ms", "mtext"]), Yi2 = lt({}, ["annotation-xml"]);
  const pg = lt({}, ["title", "style", "font", "a", "script"]);
  let Zr = null;
  const gg = ["application/xhtml+xml", "text/html"], mg = "text/html";
  let Et = null, mr = null;
  const yg = r3.createElement("form"), Wo = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, vn = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(mr && mr === w)) {
      if ((!w || typeof w != "object") && (w = {}), w = _e(w), Zr = // eslint-disable-next-line unicorn/prefer-includes
      gg.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? mg : w.PARSER_MEDIA_TYPE, Et = Zr === "application/xhtml+xml" ? Tn : na, z = le(w, "ALLOWED_TAGS") ? lt({}, w.ALLOWED_TAGS, Et) : Y, I = le(w, "ALLOWED_ATTR") ? lt({}, w.ALLOWED_ATTR, Et) : V, Cn = le(w, "ALLOWED_NAMESPACES") ? lt({}, w.ALLOWED_NAMESPACES, Tn) : fg, xn = le(w, "ADD_URI_SAFE_ATTR") ? lt(_e(zo), w.ADD_URI_SAFE_ATTR, Et) : zo, Po = le(w, "ADD_DATA_URI_TAGS") ? lt(_e(No), w.ADD_DATA_URI_TAGS, Et) : No, pr = le(w, "FORBID_CONTENTS") ? lt({}, w.FORBID_CONTENTS, Et) : Io, ut = le(w, "FORBID_TAGS") ? lt({}, w.FORBID_TAGS, Et) : _e({}), mt = le(w, "FORBID_ATTR") ? lt({}, w.FORBID_ATTR, Et) : _e({}), fr = le(w, "USE_PROFILES") ? w.USE_PROFILES : false, Ft = w.ALLOW_ARIA_ATTR !== false, Mt = w.ALLOW_DATA_ATTR !== false, gt = w.ALLOW_UNKNOWN_PROTOCOLS || false, _t = w.ALLOW_SELF_CLOSE_IN_ATTR !== false, Rt = w.SAFE_FOR_TEMPLATES || false, te = w.SAFE_FOR_XML !== false, oe = w.WHOLE_DOCUMENT || false, dr = w.RETURN_DOM || false, zi2 = w.RETURN_DOM_FRAGMENT || false, Wi = w.RETURN_TRUSTED_TYPE || false, mn = w.FORCE_BODY || false, Do = w.SANITIZE_DOM !== false, Ro = w.SANITIZE_NAMED_PROPS || false, yn = w.KEEP_CONTENT !== false, Vr = w.IN_PLACE || false, R = w.ALLOWED_URI_REGEXP || Ac, gr = w.NAMESPACE || be, ji = w.MATHML_TEXT_INTEGRATION_POINTS || ji, Yi2 = w.HTML_INTEGRATION_POINTS || Yi2, W = w.CUSTOM_ELEMENT_HANDLING || {}, w.CUSTOM_ELEMENT_HANDLING && Wo(w.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (W.tagNameCheck = w.CUSTOM_ELEMENT_HANDLING.tagNameCheck), w.CUSTOM_ELEMENT_HANDLING && Wo(w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (W.attributeNameCheck = w.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (W.allowCustomizedBuiltInElements = w.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Rt && (Mt = false), zi2 && (dr = true), fr && (z = lt({}, ll), I = [], fr.html === true && (lt(z, ol), lt(I, cl)), fr.svg === true && (lt(z, Bn), lt(I, Mn), lt(I, Gi)), fr.svgFilters === true && (lt(z, Ln), lt(I, Mn), lt(I, Gi)), fr.mathMl === true && (lt(z, An), lt(I, hl), lt(I, Gi))), w.ADD_TAGS && (z === Y && (z = _e(z)), lt(z, w.ADD_TAGS, Et)), w.ADD_ATTR && (I === V && (I = _e(I)), lt(I, w.ADD_ATTR, Et)), w.ADD_URI_SAFE_ATTR && lt(xn, w.ADD_URI_SAFE_ATTR, Et), w.FORBID_CONTENTS && (pr === Io && (pr = _e(pr)), lt(pr, w.FORBID_CONTENTS, Et)), yn && (z["#text"] = true), oe && lt(z, ["html", "head", "body"]), z.table && (lt(z, ["tbody"]), delete ut.tbody), w.TRUSTED_TYPES_POLICY) {
        if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw ii('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw ii('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        S = w.TRUSTED_TYPES_POLICY, _ = S.createHTML("");
      } else
        S === void 0 && (S = fm(f, a)), S !== null && typeof _ == "string" && (_ = S.createHTML(""));
      Gt && Gt(w), mr = w;
    }
  }, qo = lt({}, [...Bn, ...Ln, ...rm]), Ho = lt({}, [...An, ...im]), xg = function(w) {
    let q = v(w);
    (!q || !q.tagName) && (q = {
      namespaceURI: gr,
      tagName: "template"
    });
    const K = na(w.tagName), bt = na(q.tagName);
    return Cn[w.namespaceURI] ? w.namespaceURI === Hi2 ? q.namespaceURI === be ? K === "svg" : q.namespaceURI === qi ? K === "svg" && (bt === "annotation-xml" || ji[bt]) : !!qo[K] : w.namespaceURI === qi ? q.namespaceURI === be ? K === "math" : q.namespaceURI === Hi2 ? K === "math" && Yi2[bt] : !!Ho[K] : w.namespaceURI === be ? q.namespaceURI === Hi2 && !Yi2[bt] || q.namespaceURI === qi && !ji[bt] ? false : !Ho[K] && (pg[K] || !qo[K]) : !!(Zr === "application/xhtml+xml" && Cn[w.namespaceURI]) : false;
  }, ue = function(w) {
    ei(t.removed, {
      element: w
    });
    try {
      v(w).removeChild(w);
    } catch {
      y(w);
    }
  }, yr = function(w, q) {
    try {
      ei(t.removed, {
        attribute: q.getAttributeNode(w),
        from: q
      });
    } catch {
      ei(t.removed, {
        attribute: null,
        from: q
      });
    }
    if (q.removeAttribute(w), w === "is")
      if (dr || zi2)
        try {
          ue(q);
        } catch {
        }
      else
        try {
          q.setAttribute(w, "");
        } catch {
        }
  }, jo = function(w) {
    let q = null, K = null;
    if (mn)
      w = "<remove></remove>" + w;
    else {
      const St = sl(w, /^[\r\n\t ]+/);
      K = St && St[0];
    }
    Zr === "application/xhtml+xml" && gr === be && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const bt = S ? S.createHTML(w) : w;
    if (gr === be)
      try {
        q = new d3().parseFromString(bt, Zr);
      } catch {
      }
    if (!q || !q.documentElement) {
      q = C.createDocument(gr, "template", null);
      try {
        q.documentElement.innerHTML = bn ? _ : bt;
      } catch {
      }
    }
    const It = q.body || q.documentElement;
    return w && K && It.insertBefore(r3.createTextNode(K), It.childNodes[0] || null), gr === be ? H.call(q, oe ? "html" : "body")[0] : oe ? q.documentElement : It;
  }, Yo = function(w) {
    return k.call(
      w.ownerDocument || w,
      w,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, kn = function(w) {
    return w instanceof u && (typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || !(w.attributes instanceof h) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function");
  }, Uo = function(w) {
    return typeof s == "function" && w instanceof s;
  };
  function Ce(rt, w, q) {
    Ui(rt, (K) => {
      K.call(t, w, q, mr);
    });
  }
  const Go = function(w) {
    let q = null;
    if (Ce(A.beforeSanitizeElements, w, null), kn(w))
      return ue(w), true;
    const K = Et(w.nodeName);
    if (Ce(A.uponSanitizeElement, w, {
      tagName: K,
      allowedTags: z
    }), te && w.hasChildNodes() && !Uo(w.firstElementChild) && qt(/<[/\w!]/g, w.innerHTML) && qt(/<[/\w!]/g, w.textContent) || w.nodeType === ni.progressingInstruction || te && w.nodeType === ni.comment && qt(/<[/\w]/g, w.data))
      return ue(w), true;
    if (!z[K] || ut[K]) {
      if (!ut[K] && Vo(K) && (W.tagNameCheck instanceof RegExp && qt(W.tagNameCheck, K) || W.tagNameCheck instanceof Function && W.tagNameCheck(K)))
        return false;
      if (yn && !pr[K]) {
        const bt = v(w) || w.parentNode, It = b(w) || w.childNodes;
        if (It && bt) {
          const St = It.length;
          for (let Vt = St - 1; Vt >= 0; --Vt) {
            const ve = m(It[Vt], true);
            ve.__removalCount = (w.__removalCount || 0) + 1, bt.insertBefore(ve, x(w));
          }
        }
      }
      return ue(w), true;
    }
    return w instanceof l && !xg(w) || (K === "noscript" || K === "noembed" || K === "noframes") && qt(/<\/no(script|embed|frames)/i, w.innerHTML) ? (ue(w), true) : (Rt && w.nodeType === ni.text && (q = w.textContent, Ui([j, N, F], (bt) => {
      q = ri(q, bt, " ");
    }), w.textContent !== q && (ei(t.removed, {
      element: w.cloneNode()
    }), w.textContent = q)), Ce(A.afterSanitizeElements, w, null), false);
  }, Xo = function(w, q, K) {
    if (Do && (q === "id" || q === "name") && (K in r3 || K in yg))
      return false;
    if (!(Mt && !mt[q] && qt(M, q))) {
      if (!(Ft && qt(B, q))) {
        if (!I[q] || mt[q]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Vo(w) && (W.tagNameCheck instanceof RegExp && qt(W.tagNameCheck, w) || W.tagNameCheck instanceof Function && W.tagNameCheck(w)) && (W.attributeNameCheck instanceof RegExp && qt(W.attributeNameCheck, q) || W.attributeNameCheck instanceof Function && W.attributeNameCheck(q)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            q === "is" && W.allowCustomizedBuiltInElements && (W.tagNameCheck instanceof RegExp && qt(W.tagNameCheck, K) || W.tagNameCheck instanceof Function && W.tagNameCheck(K)))
          )
            return false;
        } else if (!xn[q]) {
          if (!qt(R, ri(K, L, ""))) {
            if (!((q === "src" || q === "xlink:href" || q === "href") && w !== "script" && Qg(K, "data:") === 0 && Po[w])) {
              if (!(gt && !qt(O, ri(K, L, "")))) {
                if (K)
                  return false;
              }
            }
          }
        }
      }
    }
    return true;
  }, Vo = function(w) {
    return w !== "annotation-xml" && sl(w, E);
  }, Zo = function(w) {
    Ce(A.beforeSanitizeAttributes, w, null);
    const {
      attributes: q
    } = w;
    if (!q || kn(w))
      return;
    const K = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: I,
      forceKeepAttr: void 0
    };
    let bt = q.length;
    for (; bt--; ) {
      const It = q[bt], {
        name: St,
        namespaceURI: Vt,
        value: ve
      } = It, Kr = Et(St), wn = ve;
      let Pt = St === "value" ? wn : Jg(wn);
      if (K.attrName = Kr, K.attrValue = Pt, K.keepAttr = true, K.forceKeepAttr = void 0, Ce(A.uponSanitizeAttribute, w, K), Pt = K.attrValue, Ro && (Kr === "id" || Kr === "name") && (yr(St, w), Pt = dg + Pt), te && qt(/((--!?|])>)|<\/(style|title)/i, Pt)) {
        yr(St, w);
        continue;
      }
      if (K.forceKeepAttr)
        continue;
      if (!K.keepAttr) {
        yr(St, w);
        continue;
      }
      if (!_t && qt(/\/>/i, Pt)) {
        yr(St, w);
        continue;
      }
      Rt && Ui([j, N, F], (Qo) => {
        Pt = ri(Pt, Qo, " ");
      });
      const Ko = Et(w.nodeName);
      if (!Xo(Ko, Kr, Pt)) {
        yr(St, w);
        continue;
      }
      if (S && typeof f == "object" && typeof f.getAttributeType == "function" && !Vt)
        switch (f.getAttributeType(Ko, Kr)) {
          case "TrustedHTML": {
            Pt = S.createHTML(Pt);
            break;
          }
          case "TrustedScriptURL": {
            Pt = S.createScriptURL(Pt);
            break;
          }
        }
      if (Pt !== wn)
        try {
          Vt ? w.setAttributeNS(Vt, St, Pt) : w.setAttribute(St, Pt), kn(w) ? ue(w) : nl(t.removed);
        } catch {
          yr(St, w);
        }
    }
    Ce(A.afterSanitizeAttributes, w, null);
  }, bg = function rt(w) {
    let q = null;
    const K = Yo(w);
    for (Ce(A.beforeSanitizeShadowDOM, w, null); q = K.nextNode(); )
      Ce(A.uponSanitizeShadowNode, q, null), Go(q), Zo(q), q.content instanceof n && rt(q.content);
    Ce(A.afterSanitizeShadowDOM, w, null);
  };
  return t.sanitize = function(rt) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, q = null, K = null, bt = null, It = null;
    if (bn = !rt, bn && (rt = "<!-->"), typeof rt != "string" && !Uo(rt))
      if (typeof rt.toString == "function") {
        if (rt = rt.toString(), typeof rt != "string")
          throw ii("dirty is not a string, aborting");
      } else
        throw ii("toString is not a function");
    if (!t.isSupported)
      return rt;
    if (je || vn(w), t.removed = [], typeof rt == "string" && (Vr = false), Vr) {
      if (rt.nodeName) {
        const ve = Et(rt.nodeName);
        if (!z[ve] || ut[ve])
          throw ii("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (rt instanceof s)
      q = jo("<!---->"), K = q.ownerDocument.importNode(rt, true), K.nodeType === ni.element && K.nodeName === "BODY" || K.nodeName === "HTML" ? q = K : q.appendChild(K);
    else {
      if (!dr && !Rt && !oe && // eslint-disable-next-line unicorn/prefer-includes
      rt.indexOf("<") === -1)
        return S && Wi ? S.createHTML(rt) : rt;
      if (q = jo(rt), !q)
        return dr ? null : Wi ? _ : "";
    }
    q && mn && ue(q.firstChild);
    const St = Yo(Vr ? rt : q);
    for (; bt = St.nextNode(); )
      Go(bt), Zo(bt), bt.content instanceof n && bg(bt.content);
    if (Vr)
      return rt;
    if (dr) {
      if (zi2)
        for (It = P.call(q.ownerDocument); q.firstChild; )
          It.appendChild(q.firstChild);
      else
        It = q;
      return (I.shadowroot || I.shadowrootmode) && (It = $.call(i, It, true)), It;
    }
    let Vt = oe ? q.outerHTML : q.innerHTML;
    return oe && z["!doctype"] && q.ownerDocument && q.ownerDocument.doctype && q.ownerDocument.doctype.name && qt(Mc, q.ownerDocument.doctype.name) && (Vt = "<!DOCTYPE " + q.ownerDocument.doctype.name + `>
` + Vt), Rt && Ui([j, N, F], (ve) => {
      Vt = ri(Vt, ve, " ");
    }), S && Wi ? S.createHTML(Vt) : Vt;
  }, t.setConfig = function() {
    let rt = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    vn(rt), je = true;
  }, t.clearConfig = function() {
    mr = null, je = false;
  }, t.isValidAttribute = function(rt, w, q) {
    mr || vn({});
    const K = Et(rt), bt = Et(w);
    return Xo(K, bt, q);
  }, t.addHook = function(rt, w) {
    typeof w == "function" && ei(A[rt], w);
  }, t.removeHook = function(rt, w) {
    if (w !== void 0) {
      const q = Zg(A[rt], w);
      return q === -1 ? void 0 : Kg(A[rt], q, 1)[0];
    }
    return nl(A[rt]);
  }, t.removeHooks = function(rt) {
    A[rt] = [];
  }, t.removeAllHooks = function() {
    A = dl();
  }, t;
}
var $r = Ec(), Fc = Object.defineProperty, p = (e8, t) => Fc(e8, "name", { value: t, configurable: true }), pm = (e8, t) => {
  for (var r3 in t)
    Fc(e8, r3, { get: t[r3], enumerable: true });
}, ke = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
}, D = {
  trace: /* @__PURE__ */ p((...e8) => {
  }, "trace"),
  debug: /* @__PURE__ */ p((...e8) => {
  }, "debug"),
  info: /* @__PURE__ */ p((...e8) => {
  }, "info"),
  warn: /* @__PURE__ */ p((...e8) => {
  }, "warn"),
  error: /* @__PURE__ */ p((...e8) => {
  }, "error"),
  fatal: /* @__PURE__ */ p((...e8) => {
  }, "fatal")
}, Ps = /* @__PURE__ */ p(function(e8 = "fatal") {
  let t = ke.fatal;
  typeof e8 == "string" ? e8.toLowerCase() in ke && (t = ke[e8]) : typeof e8 == "number" && (t = e8), D.trace = () => {
  }, D.debug = () => {
  }, D.info = () => {
  }, D.warn = () => {
  }, D.error = () => {
  }, D.fatal = () => {
  }, t <= ke.fatal && (D.fatal = console.error ? console.error.bind(console, ie("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", ie("FATAL"))), t <= ke.error && (D.error = console.error ? console.error.bind(console, ie("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", ie("ERROR"))), t <= ke.warn && (D.warn = console.warn ? console.warn.bind(console, ie("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", ie("WARN"))), t <= ke.info && (D.info = console.info ? console.info.bind(console, ie("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", ie("INFO"))), t <= ke.debug && (D.debug = console.debug ? console.debug.bind(console, ie("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", ie("DEBUG"))), t <= ke.trace && (D.trace = console.debug ? console.debug.bind(console, ie("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", ie("TRACE")));
}, "setLogLevel"), ie = /* @__PURE__ */ p((e8) => `%c${Ng().format("ss.SSS")} : ${e8} : `, "format"), Oc = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s, bi = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, gm = /\s*%%.*\n/gm, Tr, $c = (Tr = class extends Error {
  constructor(t) {
    super(t), this.name = "UnknownDiagramError";
  }
}, p(Tr, "UnknownDiagramError"), Tr), Dr = {}, Ns = /* @__PURE__ */ p(function(e8, t) {
  e8 = e8.replace(Oc, "").replace(bi, "").replace(gm, `
`);
  for (const [r3, { detector: i }] of Object.entries(Dr))
    if (i(e8, t))
      return r3;
  throw new $c(
    `No diagram type detected matching given configuration for text: ${e8}`
  );
}, "detectType"), Dc = /* @__PURE__ */ p((...e8) => {
  for (const { id: t, detector: r3, loader: i } of e8)
    Rc(t, r3, i);
}, "registerLazyLoadedDiagrams"), Rc = /* @__PURE__ */ p((e8, t, r3) => {
  Dr[e8] && D.warn(`Detector with key ${e8} already exists. Overwriting.`), Dr[e8] = { detector: t, loader: r3 }, D.debug(`Detector with key ${e8} added${r3 ? " with loader" : ""}`);
}, "addDetector"), mm = /* @__PURE__ */ p((e8) => Dr[e8].loader, "getDiagramLoader"), Qn = /* @__PURE__ */ p((e8, t, { depth: r3 = 2, clobber: i = false } = {}) => {
  const a = { depth: r3, clobber: i };
  return Array.isArray(t) && !Array.isArray(e8) ? (t.forEach((n) => Qn(e8, n, a)), e8) : Array.isArray(t) && Array.isArray(e8) ? (t.forEach((n) => {
    e8.includes(n) || e8.push(n);
  }), e8) : e8 === void 0 || r3 <= 0 ? e8 != null && typeof e8 == "object" && typeof t == "object" ? Object.assign(e8, t) : t : (t !== void 0 && typeof e8 == "object" && typeof t == "object" && Object.keys(t).forEach((n) => {
    typeof t[n] == "object" && (e8[n] === void 0 || typeof e8[n] == "object") ? (e8[n] === void 0 && (e8[n] = Array.isArray(t[n]) ? [] : {}), e8[n] = Qn(e8[n], t[n], { depth: r3 - 1, clobber: i })) : (i || typeof e8[n] != "object" && typeof t[n] != "object") && (e8[n] = t[n]);
  }), e8);
}, "assignWithDepth"), Dt = Qn, Ua = "#ffffff", Ga = "#f2f2f2", Ht = /* @__PURE__ */ p((e8, t) => t ? T(e8, { s: -40, l: 10 }) : T(e8, { s: -40, l: -10 }), "mkBorder"), Br, ym = (Br = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px";
  }
  updateColors() {
    var r3, i, a, n, o, s, l, c, h, u, d3, f, g, m, y, x, b, v, S, _, C;
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || T(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || T(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || Ht(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || Ht(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || Ht(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || Ht(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || U(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || U(this.tertiaryColor), this.lineColor = this.lineColor || U(this.background), this.arrowheadColor = this.arrowheadColor || U(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? it(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || it(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || U(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || G(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.darkMode ? (this.rowOdd = this.rowOdd || it(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || it(this.mainBkg, 10)) : (this.rowOdd = this.rowOdd || G(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || G(this.mainBkg, 5)), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || T(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || T(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || T(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || T(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || T(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || T(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || T(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || T(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || T(this.primaryColor, { h: 330 }), this.darkMode)
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["cScale" + k] = it(this["cScale" + k], 75);
    else
      for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
        this["cScale" + k] = it(this["cScale" + k], 25);
    for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
      this["cScaleInv" + k] = this["cScaleInv" + k] || U(this["cScale" + k]);
    for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
      this.darkMode ? this["cScalePeer" + k] = this["cScalePeer" + k] || G(this["cScale" + k], 10) : this["cScalePeer" + k] = this["cScalePeer" + k] || it(this["cScale" + k], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let k = 0; k < this.THEME_COLOR_LIMIT; k++)
      this["cScaleLabel" + k] = this["cScaleLabel" + k] || this.scaleLabelColor;
    const t = this.darkMode ? -4 : -1;
    for (let k = 0; k < 5; k++)
      this["surface" + k] = this["surface" + k] || T(this.mainBkg, { h: 180, s: -15, l: t * (5 + k * 3) }), this["surfacePeer" + k] = this["surfacePeer" + k] || T(this.mainBkg, { h: 180, s: -15, l: t * (8 + k * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || T(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || T(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || T(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || T(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || T(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || T(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || T(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || T(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || T(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || T(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || T(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || T(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || T(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || T(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || T(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.radar = {
      axisColor: ((r3 = this.radar) == null ? void 0 : r3.axisColor) || this.lineColor,
      axisStrokeWidth: ((i = this.radar) == null ? void 0 : i.axisStrokeWidth) || 2,
      axisLabelFontSize: ((a = this.radar) == null ? void 0 : a.axisLabelFontSize) || 12,
      curveOpacity: ((n = this.radar) == null ? void 0 : n.curveOpacity) || 0.5,
      curveStrokeWidth: ((o = this.radar) == null ? void 0 : o.curveStrokeWidth) || 2,
      graticuleColor: ((s = this.radar) == null ? void 0 : s.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: ((l = this.radar) == null ? void 0 : l.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((c = this.radar) == null ? void 0 : c.graticuleOpacity) || 0.3,
      legendBoxSize: ((h = this.radar) == null ? void 0 : h.legendBoxSize) || 12,
      legendFontSize: ((u = this.radar) == null ? void 0 : u.legendFontSize) || 12
    }, this.archEdgeColor = this.archEdgeColor || "#777", this.archEdgeArrowColor = this.archEdgeArrowColor || "#777", this.archEdgeWidth = this.archEdgeWidth || "3", this.archGroupBorderColor = this.archGroupBorderColor || "#000", this.archGroupBorderWidth = this.archGroupBorderWidth || "2px", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || T(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || T(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || T(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || T(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || T(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || T(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Fi(this.quadrant1Fill) ? G(this.quadrant1Fill) : it(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((d3 = this.xyChart) == null ? void 0 : d3.backgroundColor) || this.background,
      titleColor: ((f = this.xyChart) == null ? void 0 : f.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((g = this.xyChart) == null ? void 0 : g.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((m = this.xyChart) == null ? void 0 : m.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((y = this.xyChart) == null ? void 0 : y.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((x = this.xyChart) == null ? void 0 : x.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((b = this.xyChart) == null ? void 0 : b.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((v = this.xyChart) == null ? void 0 : v.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((S = this.xyChart) == null ? void 0 : S.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((_ = this.xyChart) == null ? void 0 : _.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((C = this.xyChart) == null ? void 0 : C.plotColorPalette) || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? it(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || T(this.primaryColor, { h: -30 }), this.git4 = this.git4 || T(this.primaryColor, { h: -60 }), this.git5 = this.git5 || T(this.primaryColor, { h: -90 }), this.git6 = this.git6 || T(this.primaryColor, { h: 60 }), this.git7 = this.git7 || T(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = G(this.git0, 25), this.git1 = G(this.git1, 25), this.git2 = G(this.git2, 25), this.git3 = G(this.git3, 25), this.git4 = G(this.git4, 25), this.git5 = G(this.git5, 25), this.git6 = G(this.git6, 25), this.git7 = G(this.git7, 25)) : (this.git0 = it(this.git0, 25), this.git1 = it(this.git1, 25), this.git2 = it(this.git2, 25), this.git3 = it(this.git3, 25), this.git4 = it(this.git4, 25), this.git5 = it(this.git5, 25), this.git6 = it(this.git6, 25), this.git7 = it(this.git7, 25)), this.gitInv0 = this.gitInv0 || U(this.git0), this.gitInv1 = this.gitInv1 || U(this.git1), this.gitInv2 = this.gitInv2 || U(this.git2), this.gitInv3 = this.gitInv3 || U(this.git3), this.gitInv4 = this.gitInv4 || U(this.git4), this.gitInv5 = this.gitInv5 || U(this.git5), this.gitInv6 = this.gitInv6 || U(this.git6), this.gitInv7 = this.gitInv7 || U(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ua, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Ga;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r3 = Object.keys(t);
    r3.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r3.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(Br, "Theme"), Br), xm = /* @__PURE__ */ p((e8) => {
  const t = new ym();
  return t.calculate(e8), t;
}, "getThemeVariables"), Lr, bm = (Lr = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = G(this.primaryColor, 16), this.tertiaryColor = T(this.primaryColor, { h: -160 }), this.primaryBorderColor = U(this.background), this.secondaryBorderColor = Ht(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Ht(this.tertiaryColor, this.darkMode), this.primaryTextColor = U(this.primaryColor), this.secondaryTextColor = U(this.secondaryColor), this.tertiaryTextColor = U(this.tertiaryColor), this.lineColor = U(this.background), this.textColor = U(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = G(U("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#ccc", this.border2 = xi(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = it("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = it(this.sectionBkgColor, 10), this.taskBorderColor = xi(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = xi(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || G(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || it(this.mainBkg, 10), this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
  }
  updateColors() {
    var t, r3, i, a, n, o, s, l, c, h, u, d3, f, g, m, y, x, b, v, S, _;
    this.secondBkg = G(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = G(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.actorBorder, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = G(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = T(this.primaryColor, { h: 64 }), this.fillType3 = T(this.secondaryColor, { h: 64 }), this.fillType4 = T(this.primaryColor, { h: -64 }), this.fillType5 = T(this.secondaryColor, { h: -64 }), this.fillType6 = T(this.primaryColor, { h: 128 }), this.fillType7 = T(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || T(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || T(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || T(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || T(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || T(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || T(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || T(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || T(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || T(this.primaryColor, { h: 330 });
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScaleInv" + C] = this["cScaleInv" + C] || U(this["cScale" + C]);
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScalePeer" + C] = this["cScalePeer" + C] || G(this["cScale" + C], 10);
    for (let C = 0; C < 5; C++)
      this["surface" + C] = this["surface" + C] || T(this.mainBkg, { h: 30, s: -30, l: -(-10 + C * 4) }), this["surfacePeer" + C] = this["surfacePeer" + C] || T(this.mainBkg, { h: 30, s: -30, l: -(-7 + C * 4) });
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScaleLabel" + C] = this["cScaleLabel" + C] || this.scaleLabelColor;
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["pie" + C] = this["cScale" + C];
    this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || T(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || T(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || T(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || T(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || T(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || T(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Fi(this.quadrant1Fill) ? G(this.quadrant1Fill) : it(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((t = this.xyChart) == null ? void 0 : t.backgroundColor) || this.background,
      titleColor: ((r3 = this.xyChart) == null ? void 0 : r3.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((i = this.xyChart) == null ? void 0 : i.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((a = this.xyChart) == null ? void 0 : a.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((n = this.xyChart) == null ? void 0 : n.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((s = this.xyChart) == null ? void 0 : s.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((u = this.xyChart) == null ? void 0 : u.plotColorPalette) || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
    }, this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.background
    }, this.radar = {
      axisColor: ((d3 = this.radar) == null ? void 0 : d3.axisColor) || this.lineColor,
      axisStrokeWidth: ((f = this.radar) == null ? void 0 : f.axisStrokeWidth) || 2,
      axisLabelFontSize: ((g = this.radar) == null ? void 0 : g.axisLabelFontSize) || 12,
      curveOpacity: ((m = this.radar) == null ? void 0 : m.curveOpacity) || 0.5,
      curveStrokeWidth: ((y = this.radar) == null ? void 0 : y.curveStrokeWidth) || 2,
      graticuleColor: ((x = this.radar) == null ? void 0 : x.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: ((b = this.radar) == null ? void 0 : b.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((v = this.radar) == null ? void 0 : v.graticuleOpacity) || 0.3,
      legendBoxSize: ((S = this.radar) == null ? void 0 : S.legendBoxSize) || 12,
      legendFontSize: ((_ = this.radar) == null ? void 0 : _.legendFontSize) || 12
    }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? it(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = G(this.secondaryColor, 20), this.git1 = G(this.pie2 || this.secondaryColor, 20), this.git2 = G(this.pie3 || this.tertiaryColor, 20), this.git3 = G(this.pie4 || T(this.primaryColor, { h: -30 }), 20), this.git4 = G(this.pie5 || T(this.primaryColor, { h: -60 }), 20), this.git5 = G(this.pie6 || T(this.primaryColor, { h: -90 }), 10), this.git6 = G(this.pie7 || T(this.primaryColor, { h: 60 }), 10), this.git7 = G(this.pie8 || T(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || U(this.git0), this.gitInv1 = this.gitInv1 || U(this.git1), this.gitInv2 = this.gitInv2 || U(this.git2), this.gitInv3 = this.gitInv3 || U(this.git3), this.gitInv4 = this.gitInv4 || U(this.git4), this.gitInv5 = this.gitInv5 || U(this.git5), this.gitInv6 = this.gitInv6 || U(this.git6), this.gitInv7 = this.gitInv7 || U(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || U(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || U(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || G(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || G(this.background, 2), this.nodeBorder = this.nodeBorder || "#999";
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r3 = Object.keys(t);
    r3.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r3.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(Lr, "Theme"), Lr), Cm = /* @__PURE__ */ p((e8) => {
  const t = new bm();
  return t.calculate(e8), t;
}, "getThemeVariables"), Ar, vm = (Ar = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = T(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = T(this.primaryColor, { h: -160 }), this.primaryBorderColor = Ht(this.primaryColor, this.darkMode), this.secondaryBorderColor = Ht(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Ht(this.tertiaryColor, this.darkMode), this.primaryTextColor = U(this.primaryColor), this.secondaryTextColor = U(this.secondaryColor), this.tertiaryTextColor = U(this.tertiaryColor), this.lineColor = U(this.background), this.textColor = U(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "rgba(232,232,232, 0.8)", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.sectionBkgColor = xi(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = "calculated", this.rowEven = "calculated", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
  }
  updateColors() {
    var t, r3, i, a, n, o, s, l, c, h, u, d3, f, g, m, y, x, b, v, S, _;
    this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || T(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || T(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || T(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || T(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || T(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || T(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || T(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || T(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || T(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || it(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || it(this.tertiaryColor, 40);
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScale" + C] = it(this["cScale" + C], 10), this["cScalePeer" + C] = this["cScalePeer" + C] || it(this["cScale" + C], 25);
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScaleInv" + C] = this["cScaleInv" + C] || T(this["cScale" + C], { h: 180 });
    for (let C = 0; C < 5; C++)
      this["surface" + C] = this["surface" + C] || T(this.mainBkg, { h: 30, l: -(5 + C * 5) }), this["surfacePeer" + C] = this["surfacePeer" + C] || T(this.mainBkg, { h: 30, l: -(7 + C * 5) });
    if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || U(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || U(this.labelTextColor);
      for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
        this["cScaleLabel" + C] = this["cScaleLabel" + C] || this.labelTextColor;
    }
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = G(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || G(this.primaryColor, 75) || "#ffffff", this.rowEven = this.rowEven || G(this.primaryColor, 1), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = T(this.primaryColor, { h: 64 }), this.fillType3 = T(this.secondaryColor, { h: 64 }), this.fillType4 = T(this.primaryColor, { h: -64 }), this.fillType5 = T(this.secondaryColor, { h: -64 }), this.fillType6 = T(this.primaryColor, { h: 128 }), this.fillType7 = T(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || T(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || T(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || T(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || T(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || T(this.primaryColor, { h: 60, l: -20 }), this.pie8 = this.pie8 || T(this.primaryColor, { h: -60, l: -40 }), this.pie9 = this.pie9 || T(this.primaryColor, { h: 120, l: -40 }), this.pie10 = this.pie10 || T(this.primaryColor, { h: 60, l: -40 }), this.pie11 = this.pie11 || T(this.primaryColor, { h: -90, l: -40 }), this.pie12 = this.pie12 || T(this.primaryColor, { h: 120, l: -30 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || T(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || T(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || T(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || T(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || T(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || T(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Fi(this.quadrant1Fill) ? G(this.quadrant1Fill) : it(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.radar = {
      axisColor: ((t = this.radar) == null ? void 0 : t.axisColor) || this.lineColor,
      axisStrokeWidth: ((r3 = this.radar) == null ? void 0 : r3.axisStrokeWidth) || 2,
      axisLabelFontSize: ((i = this.radar) == null ? void 0 : i.axisLabelFontSize) || 12,
      curveOpacity: ((a = this.radar) == null ? void 0 : a.curveOpacity) || 0.5,
      curveStrokeWidth: ((n = this.radar) == null ? void 0 : n.curveStrokeWidth) || 2,
      graticuleColor: ((o = this.radar) == null ? void 0 : o.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: ((s = this.radar) == null ? void 0 : s.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((l = this.radar) == null ? void 0 : l.graticuleOpacity) || 0.3,
      legendBoxSize: ((c = this.radar) == null ? void 0 : c.legendBoxSize) || 12,
      legendFontSize: ((h = this.radar) == null ? void 0 : h.legendFontSize) || 12
    }, this.xyChart = {
      backgroundColor: ((u = this.xyChart) == null ? void 0 : u.backgroundColor) || this.background,
      titleColor: ((d3 = this.xyChart) == null ? void 0 : d3.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((f = this.xyChart) == null ? void 0 : f.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((g = this.xyChart) == null ? void 0 : g.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((m = this.xyChart) == null ? void 0 : m.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((y = this.xyChart) == null ? void 0 : y.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((x = this.xyChart) == null ? void 0 : x.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((b = this.xyChart) == null ? void 0 : b.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((v = this.xyChart) == null ? void 0 : v.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((S = this.xyChart) == null ? void 0 : S.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((_ = this.xyChart) == null ? void 0 : _.plotColorPalette) || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || T(this.primaryColor, { h: -30 }), this.git4 = this.git4 || T(this.primaryColor, { h: -60 }), this.git5 = this.git5 || T(this.primaryColor, { h: -90 }), this.git6 = this.git6 || T(this.primaryColor, { h: 60 }), this.git7 = this.git7 || T(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = G(this.git0, 25), this.git1 = G(this.git1, 25), this.git2 = G(this.git2, 25), this.git3 = G(this.git3, 25), this.git4 = G(this.git4, 25), this.git5 = G(this.git5, 25), this.git6 = G(this.git6, 25), this.git7 = G(this.git7, 25)) : (this.git0 = it(this.git0, 25), this.git1 = it(this.git1, 25), this.git2 = it(this.git2, 25), this.git3 = it(this.git3, 25), this.git4 = it(this.git4, 25), this.git5 = it(this.git5, 25), this.git6 = it(this.git6, 25), this.git7 = it(this.git7, 25)), this.gitInv0 = this.gitInv0 || it(U(this.git0), 25), this.gitInv1 = this.gitInv1 || U(this.git1), this.gitInv2 = this.gitInv2 || U(this.git2), this.gitInv3 = this.gitInv3 || U(this.git3), this.gitInv4 = this.gitInv4 || U(this.git4), this.gitInv5 = this.gitInv5 || U(this.git5), this.gitInv6 = this.gitInv6 || U(this.git6), this.gitInv7 = this.gitInv7 || U(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || U(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || U(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ua, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Ga;
  }
  calculate(t) {
    if (Object.keys(this).forEach((i) => {
      this[i] === "calculated" && (this[i] = void 0);
    }), typeof t != "object") {
      this.updateColors();
      return;
    }
    const r3 = Object.keys(t);
    r3.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r3.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(Ar, "Theme"), Ar), km = /* @__PURE__ */ p((e8) => {
  const t = new vm();
  return t.calculate(e8), t;
}, "getThemeVariables"), Mr, wm = (Mr = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = G("#cde498", 10), this.primaryBorderColor = Ht(this.primaryColor, this.darkMode), this.secondaryBorderColor = Ht(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Ht(this.tertiaryColor, this.darkMode), this.primaryTextColor = U(this.primaryColor), this.secondaryTextColor = U(this.secondaryColor), this.tertiaryTextColor = U(this.primaryColor), this.lineColor = U(this.background), this.textColor = U(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    var t, r3, i, a, n, o, s, l, c, h, u, d3, f, g, m, y, x, b, v, S, _;
    this.actorBorder = it(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || T(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || T(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || T(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || T(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || T(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || T(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || T(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || T(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || T(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || it(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || it(this.tertiaryColor, 40);
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScale" + C] = it(this["cScale" + C], 10), this["cScalePeer" + C] = this["cScalePeer" + C] || it(this["cScale" + C], 25);
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScaleInv" + C] = this["cScaleInv" + C] || T(this["cScale" + C], { h: 180 });
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScaleLabel" + C] = this["cScaleLabel" + C] || this.scaleLabelColor;
    for (let C = 0; C < 5; C++)
      this["surface" + C] = this["surface" + C] || T(this.mainBkg, { h: 30, s: -30, l: -(5 + C * 5) }), this["surfacePeer" + C] = this["surfacePeer" + C] || T(this.mainBkg, { h: 30, s: -30, l: -(8 + C * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || G(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || G(this.mainBkg, 20), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = T(this.primaryColor, { h: 64 }), this.fillType3 = T(this.secondaryColor, { h: 64 }), this.fillType4 = T(this.primaryColor, { h: -64 }), this.fillType5 = T(this.secondaryColor, { h: -64 }), this.fillType6 = T(this.primaryColor, { h: 128 }), this.fillType7 = T(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || T(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || T(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || T(this.tertiaryColor, { h: 40, l: -40 }), this.pie7 = this.pie7 || T(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || T(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || T(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || T(this.primaryColor, { h: 60, l: -50 }), this.pie11 = this.pie11 || T(this.primaryColor, { h: -60, l: -50 }), this.pie12 = this.pie12 || T(this.primaryColor, { h: 120, l: -50 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || T(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || T(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || T(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || T(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || T(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || T(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Fi(this.quadrant1Fill) ? G(this.quadrant1Fill) : it(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.mainBkg
    }, this.radar = {
      axisColor: ((t = this.radar) == null ? void 0 : t.axisColor) || this.lineColor,
      axisStrokeWidth: ((r3 = this.radar) == null ? void 0 : r3.axisStrokeWidth) || 2,
      axisLabelFontSize: ((i = this.radar) == null ? void 0 : i.axisLabelFontSize) || 12,
      curveOpacity: ((a = this.radar) == null ? void 0 : a.curveOpacity) || 0.5,
      curveStrokeWidth: ((n = this.radar) == null ? void 0 : n.curveStrokeWidth) || 2,
      graticuleColor: ((o = this.radar) == null ? void 0 : o.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: ((s = this.radar) == null ? void 0 : s.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((l = this.radar) == null ? void 0 : l.graticuleOpacity) || 0.3,
      legendBoxSize: ((c = this.radar) == null ? void 0 : c.legendBoxSize) || 12,
      legendFontSize: ((h = this.radar) == null ? void 0 : h.legendFontSize) || 12
    }, this.xyChart = {
      backgroundColor: ((u = this.xyChart) == null ? void 0 : u.backgroundColor) || this.background,
      titleColor: ((d3 = this.xyChart) == null ? void 0 : d3.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((f = this.xyChart) == null ? void 0 : f.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((g = this.xyChart) == null ? void 0 : g.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((m = this.xyChart) == null ? void 0 : m.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((y = this.xyChart) == null ? void 0 : y.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((x = this.xyChart) == null ? void 0 : x.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((b = this.xyChart) == null ? void 0 : b.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((v = this.xyChart) == null ? void 0 : v.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((S = this.xyChart) == null ? void 0 : S.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((_ = this.xyChart) == null ? void 0 : _.plotColorPalette) || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || T(this.primaryColor, { h: -30 }), this.git4 = this.git4 || T(this.primaryColor, { h: -60 }), this.git5 = this.git5 || T(this.primaryColor, { h: -90 }), this.git6 = this.git6 || T(this.primaryColor, { h: 60 }), this.git7 = this.git7 || T(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = G(this.git0, 25), this.git1 = G(this.git1, 25), this.git2 = G(this.git2, 25), this.git3 = G(this.git3, 25), this.git4 = G(this.git4, 25), this.git5 = G(this.git5, 25), this.git6 = G(this.git6, 25), this.git7 = G(this.git7, 25)) : (this.git0 = it(this.git0, 25), this.git1 = it(this.git1, 25), this.git2 = it(this.git2, 25), this.git3 = it(this.git3, 25), this.git4 = it(this.git4, 25), this.git5 = it(this.git5, 25), this.git6 = it(this.git6, 25), this.git7 = it(this.git7, 25)), this.gitInv0 = this.gitInv0 || U(this.git0), this.gitInv1 = this.gitInv1 || U(this.git1), this.gitInv2 = this.gitInv2 || U(this.git2), this.gitInv3 = this.gitInv3 || U(this.git3), this.gitInv4 = this.gitInv4 || U(this.git4), this.gitInv5 = this.gitInv5 || U(this.git5), this.gitInv6 = this.gitInv6 || U(this.git6), this.gitInv7 = this.gitInv7 || U(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || U(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || U(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ua, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Ga;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r3 = Object.keys(t);
    r3.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r3.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(Mr, "Theme"), Mr), _m = /* @__PURE__ */ p((e8) => {
  const t = new wm();
  return t.calculate(e8), t;
}, "getThemeVariables"), Er, Sm = (Er = class {
  constructor() {
    this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = G(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = T(this.primaryColor, { h: -160 }), this.primaryBorderColor = Ht(this.primaryColor, this.darkMode), this.secondaryBorderColor = Ht(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = Ht(this.tertiaryColor, this.darkMode), this.primaryTextColor = U(this.primaryColor), this.secondaryTextColor = U(this.secondaryColor), this.tertiaryTextColor = U(this.tertiaryColor), this.lineColor = U(this.background), this.textColor = U(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = this.actorBorder, this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || G(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || "#f4f4f4", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    var t, r3, i, a, n, o, s, l, c, h, u, d3, f, g, m, y, x, b, v, S, _;
    this.secondBkg = G(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = G(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.actorBorder, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScaleInv" + C] = this["cScaleInv" + C] || U(this["cScale" + C]);
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this.darkMode ? this["cScalePeer" + C] = this["cScalePeer" + C] || G(this["cScale" + C], 10) : this["cScalePeer" + C] = this["cScalePeer" + C] || it(this["cScale" + C], 10);
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["cScaleLabel" + C] = this["cScaleLabel" + C] || this.scaleLabelColor;
    for (let C = 0; C < 5; C++)
      this["surface" + C] = this["surface" + C] || T(this.mainBkg, { l: -(5 + C * 5) }), this["surfacePeer" + C] = this["surfacePeer" + C] || T(this.mainBkg, { l: -(8 + C * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = G(this.contrast, 30), this.sectionBkgColor2 = G(this.contrast, 30), this.taskBorderColor = it(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = G(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = it(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = T(this.primaryColor, { h: 64 }), this.fillType3 = T(this.secondaryColor, { h: 64 }), this.fillType4 = T(this.primaryColor, { h: -64 }), this.fillType5 = T(this.secondaryColor, { h: -64 }), this.fillType6 = T(this.primaryColor, { h: 128 }), this.fillType7 = T(this.secondaryColor, { h: 128 });
    for (let C = 0; C < this.THEME_COLOR_LIMIT; C++)
      this["pie" + C] = this["cScale" + C];
    this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || T(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || T(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || T(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || T(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || T(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || T(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Fi(this.quadrant1Fill) ? G(this.quadrant1Fill) : it(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: ((t = this.xyChart) == null ? void 0 : t.backgroundColor) || this.background,
      titleColor: ((r3 = this.xyChart) == null ? void 0 : r3.titleColor) || this.primaryTextColor,
      xAxisTitleColor: ((i = this.xyChart) == null ? void 0 : i.xAxisTitleColor) || this.primaryTextColor,
      xAxisLabelColor: ((a = this.xyChart) == null ? void 0 : a.xAxisLabelColor) || this.primaryTextColor,
      xAxisTickColor: ((n = this.xyChart) == null ? void 0 : n.xAxisTickColor) || this.primaryTextColor,
      xAxisLineColor: ((o = this.xyChart) == null ? void 0 : o.xAxisLineColor) || this.primaryTextColor,
      yAxisTitleColor: ((s = this.xyChart) == null ? void 0 : s.yAxisTitleColor) || this.primaryTextColor,
      yAxisLabelColor: ((l = this.xyChart) == null ? void 0 : l.yAxisLabelColor) || this.primaryTextColor,
      yAxisTickColor: ((c = this.xyChart) == null ? void 0 : c.yAxisTickColor) || this.primaryTextColor,
      yAxisLineColor: ((h = this.xyChart) == null ? void 0 : h.yAxisLineColor) || this.primaryTextColor,
      plotColorPalette: ((u = this.xyChart) == null ? void 0 : u.plotColorPalette) || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
    }, this.radar = {
      axisColor: ((d3 = this.radar) == null ? void 0 : d3.axisColor) || this.lineColor,
      axisStrokeWidth: ((f = this.radar) == null ? void 0 : f.axisStrokeWidth) || 2,
      axisLabelFontSize: ((g = this.radar) == null ? void 0 : g.axisLabelFontSize) || 12,
      curveOpacity: ((m = this.radar) == null ? void 0 : m.curveOpacity) || 0.5,
      curveStrokeWidth: ((y = this.radar) == null ? void 0 : y.curveStrokeWidth) || 2,
      graticuleColor: ((x = this.radar) == null ? void 0 : x.graticuleColor) || "#DEDEDE",
      graticuleStrokeWidth: ((b = this.radar) == null ? void 0 : b.graticuleStrokeWidth) || 1,
      graticuleOpacity: ((v = this.radar) == null ? void 0 : v.graticuleOpacity) || 0.3,
      legendBoxSize: ((S = this.radar) == null ? void 0 : S.legendBoxSize) || 12,
      legendFontSize: ((_ = this.radar) == null ? void 0 : _.legendFontSize) || 12
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = it(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || T(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || T(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || T(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || T(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || T(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || U(this.git0), this.gitInv1 = this.gitInv1 || U(this.git1), this.gitInv2 = this.gitInv2 || U(this.git2), this.gitInv3 = this.gitInv3 || U(this.git3), this.gitInv4 = this.gitInv4 || U(this.git4), this.gitInv5 = this.gitInv5 || U(this.git5), this.gitInv6 = this.gitInv6 || U(this.git6), this.gitInv7 = this.gitInv7 || U(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ua, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Ga;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r3 = Object.keys(t);
    r3.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r3.forEach((i) => {
      this[i] = t[i];
    });
  }
}, p(Er, "Theme"), Er), Tm = /* @__PURE__ */ p((e8) => {
  const t = new Sm();
  return t.calculate(e8), t;
}, "getThemeVariables"), Ae = {
  base: {
    getThemeVariables: xm
  },
  dark: {
    getThemeVariables: Cm
  },
  default: {
    getThemeVariables: km
  },
  forest: {
    getThemeVariables: _m
  },
  neutral: {
    getThemeVariables: Tm
  }
}, we = {
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
}, Ic = {
  ...we,
  // Set, even though they're `undefined` so that `configKeys` finds these keys
  // TODO: Should we replace these with `null` so that they can go in the JSON Schema?
  deterministicIDSeed: void 0,
  elk: {
    // mergeEdges is needed here to be considered
    mergeEdges: false,
    nodePlacementStrategy: "BRANDES_KOEPF"
  },
  themeCSS: void 0,
  // add non-JSON default config values
  themeVariables: Ae.default.getThemeVariables(),
  sequence: {
    ...we.sequence,
    messageFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }, "messageFont"),
    noteFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.noteFontFamily,
        fontSize: this.noteFontSize,
        fontWeight: this.noteFontWeight
      };
    }, "noteFont"),
    actorFont: /* @__PURE__ */ p(function() {
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
    // can probably be removed since `configKeys` already includes this
  },
  c4: {
    ...we.c4,
    useWidth: void 0,
    personFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.personFontFamily,
        fontSize: this.personFontSize,
        fontWeight: this.personFontWeight
      };
    }, "personFont"),
    external_personFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_personFontFamily,
        fontSize: this.external_personFontSize,
        fontWeight: this.external_personFontWeight
      };
    }, "external_personFont"),
    systemFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.systemFontFamily,
        fontSize: this.systemFontSize,
        fontWeight: this.systemFontWeight
      };
    }, "systemFont"),
    external_systemFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_systemFontFamily,
        fontSize: this.external_systemFontSize,
        fontWeight: this.external_systemFontWeight
      };
    }, "external_systemFont"),
    system_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.system_dbFontFamily,
        fontSize: this.system_dbFontSize,
        fontWeight: this.system_dbFontWeight
      };
    }, "system_dbFont"),
    external_system_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_system_dbFontFamily,
        fontSize: this.external_system_dbFontSize,
        fontWeight: this.external_system_dbFontWeight
      };
    }, "external_system_dbFont"),
    system_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.system_queueFontFamily,
        fontSize: this.system_queueFontSize,
        fontWeight: this.system_queueFontWeight
      };
    }, "system_queueFont"),
    external_system_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_system_queueFontFamily,
        fontSize: this.external_system_queueFontSize,
        fontWeight: this.external_system_queueFontWeight
      };
    }, "external_system_queueFont"),
    containerFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.containerFontFamily,
        fontSize: this.containerFontSize,
        fontWeight: this.containerFontWeight
      };
    }, "containerFont"),
    external_containerFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_containerFontFamily,
        fontSize: this.external_containerFontSize,
        fontWeight: this.external_containerFontWeight
      };
    }, "external_containerFont"),
    container_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.container_dbFontFamily,
        fontSize: this.container_dbFontSize,
        fontWeight: this.container_dbFontWeight
      };
    }, "container_dbFont"),
    external_container_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_container_dbFontFamily,
        fontSize: this.external_container_dbFontSize,
        fontWeight: this.external_container_dbFontWeight
      };
    }, "external_container_dbFont"),
    container_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.container_queueFontFamily,
        fontSize: this.container_queueFontSize,
        fontWeight: this.container_queueFontWeight
      };
    }, "container_queueFont"),
    external_container_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_container_queueFontFamily,
        fontSize: this.external_container_queueFontSize,
        fontWeight: this.external_container_queueFontWeight
      };
    }, "external_container_queueFont"),
    componentFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.componentFontFamily,
        fontSize: this.componentFontSize,
        fontWeight: this.componentFontWeight
      };
    }, "componentFont"),
    external_componentFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_componentFontFamily,
        fontSize: this.external_componentFontSize,
        fontWeight: this.external_componentFontWeight
      };
    }, "external_componentFont"),
    component_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.component_dbFontFamily,
        fontSize: this.component_dbFontSize,
        fontWeight: this.component_dbFontWeight
      };
    }, "component_dbFont"),
    external_component_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_component_dbFontFamily,
        fontSize: this.external_component_dbFontSize,
        fontWeight: this.external_component_dbFontWeight
      };
    }, "external_component_dbFont"),
    component_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.component_queueFontFamily,
        fontSize: this.component_queueFontSize,
        fontWeight: this.component_queueFontWeight
      };
    }, "component_queueFont"),
    external_component_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_component_queueFontFamily,
        fontSize: this.external_component_queueFontSize,
        fontWeight: this.external_component_queueFontWeight
      };
    }, "external_component_queueFont"),
    boundaryFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.boundaryFontFamily,
        fontSize: this.boundaryFontSize,
        fontWeight: this.boundaryFontWeight
      };
    }, "boundaryFont"),
    messageFont: /* @__PURE__ */ p(function() {
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
}, Pc = /* @__PURE__ */ p((e8, t = "") => Object.keys(e8).reduce((r3, i) => Array.isArray(e8[i]) ? r3 : typeof e8[i] == "object" && e8[i] !== null ? [...r3, t + i, ...Pc(e8[i], "")] : [...r3, t + i], []), "keyify"), Bm = new Set(Pc(Ic, "")), Nc = Ic, ma = /* @__PURE__ */ p((e8) => {
  if (D.debug("sanitizeDirective called with", e8), !(typeof e8 != "object" || e8 == null)) {
    if (Array.isArray(e8)) {
      e8.forEach((t) => ma(t));
      return;
    }
    for (const t of Object.keys(e8)) {
      if (D.debug("Checking key", t), t.startsWith("__") || t.includes("proto") || t.includes("constr") || !Bm.has(t) || e8[t] == null) {
        D.debug("sanitize deleting key: ", t), delete e8[t];
        continue;
      }
      if (typeof e8[t] == "object") {
        D.debug("sanitizing object", t), ma(e8[t]);
        continue;
      }
      const r3 = ["themeCSS", "fontFamily", "altFontFamily"];
      for (const i of r3)
        t.includes(i) && (D.debug("sanitizing css option", t), e8[t] = Lm(e8[t]));
    }
    if (e8.themeVariables)
      for (const t of Object.keys(e8.themeVariables)) {
        const r3 = e8.themeVariables[t];
        r3 != null && r3.match && !r3.match(/^[\d "#%(),.;A-Za-z]+$/) && (e8.themeVariables[t] = "");
      }
    D.debug("After sanitization", e8);
  }
}, "sanitizeDirective"), Lm = /* @__PURE__ */ p((e8) => {
  let t = 0, r3 = 0;
  for (const i of e8) {
    if (t < r3)
      return "{ /* ERROR: Unbalanced CSS */ }";
    i === "{" ? t++ : i === "}" && r3++;
  }
  return t !== r3 ? "{ /* ERROR: Unbalanced CSS */ }" : e8;
}, "sanitizeCss"), Rr = Object.freeze(Nc), Kt = Dt({}, Rr), zc, Ir = [], Ci = Dt({}, Rr), Xa = /* @__PURE__ */ p((e8, t) => {
  let r3 = Dt({}, e8), i = {};
  for (const a of t)
    Hc(a), i = Dt(i, a);
  if (r3 = Dt(r3, i), i.theme && i.theme in Ae) {
    const a = Dt({}, zc), n = Dt(
      a.themeVariables || {},
      i.themeVariables
    );
    r3.theme && r3.theme in Ae && (r3.themeVariables = Ae[r3.theme].getThemeVariables(n));
  }
  return Ci = r3, jc(Ci), Ci;
}, "updateCurrentConfig"), Am = /* @__PURE__ */ p((e8) => (Kt = Dt({}, Rr), Kt = Dt(Kt, e8), e8.theme && Ae[e8.theme] && (Kt.themeVariables = Ae[e8.theme].getThemeVariables(e8.themeVariables)), Xa(Kt, Ir), Kt), "setSiteConfig"), Mm = /* @__PURE__ */ p((e8) => {
  zc = Dt({}, e8);
}, "saveConfigFromInitialize"), Em = /* @__PURE__ */ p((e8) => (Kt = Dt(Kt, e8), Xa(Kt, Ir), Kt), "updateSiteConfig"), Wc = /* @__PURE__ */ p(() => Dt({}, Kt), "getSiteConfig"), qc = /* @__PURE__ */ p((e8) => (jc(e8), Dt(Ci, e8), Jt()), "setConfig"), Jt = /* @__PURE__ */ p(() => Dt({}, Ci), "getConfig"), Hc = /* @__PURE__ */ p((e8) => {
  e8 && (["secure", ...Kt.secure ?? []].forEach((t) => {
    Object.hasOwn(e8, t) && (D.debug(`Denied attempt to modify a secure key ${t}`, e8[t]), delete e8[t]);
  }), Object.keys(e8).forEach((t) => {
    t.startsWith("__") && delete e8[t];
  }), Object.keys(e8).forEach((t) => {
    typeof e8[t] == "string" && (e8[t].includes("<") || e8[t].includes(">") || e8[t].includes("url(data:")) && delete e8[t], typeof e8[t] == "object" && Hc(e8[t]);
  }));
}, "sanitize"), Fm = /* @__PURE__ */ p((e8) => {
  var t;
  ma(e8), e8.fontFamily && !((t = e8.themeVariables) != null && t.fontFamily) && (e8.themeVariables = {
    ...e8.themeVariables,
    fontFamily: e8.fontFamily
  }), Ir.push(e8), Xa(Kt, Ir);
}, "addDirective"), ya = /* @__PURE__ */ p((e8 = Kt) => {
  Ir = [], Xa(e8, Ir);
}, "reset"), Om = {
  LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
}, fl = {}, $m = /* @__PURE__ */ p((e8) => {
  fl[e8] || (D.warn(Om[e8]), fl[e8] = true);
}, "issueWarning"), jc = /* @__PURE__ */ p((e8) => {
  e8 && (e8.lazyLoadedDiagrams || e8.loadExternalDiagramsAtStartup) && $m("LAZY_LOAD_DEPRECATED");
}, "checkConfig"), Oi = /<br\s*\/?>/gi, Dm = /* @__PURE__ */ p((e8) => e8 ? Gc(e8).replace(/\\n/g, "#br#").split("#br#") : [""], "getRows"), Rm = /* @__PURE__ */ (() => {
  let e8 = false;
  return () => {
    e8 || (Yc(), e8 = true);
  };
})();
function Yc() {
  const e8 = "data-temp-href-target";
  $r.addHook("beforeSanitizeAttributes", (t) => {
    t instanceof Element && t.tagName === "A" && t.hasAttribute("target") && t.setAttribute(e8, t.getAttribute("target") ?? "");
  }), $r.addHook("afterSanitizeAttributes", (t) => {
    t instanceof Element && t.tagName === "A" && t.hasAttribute(e8) && (t.setAttribute("target", t.getAttribute(e8) ?? ""), t.removeAttribute(e8), t.getAttribute("target") === "_blank" && t.setAttribute("rel", "noopener"));
  });
}
p(Yc, "setupDompurifyHooks");
var Uc = /* @__PURE__ */ p((e8) => (Rm(), $r.sanitize(e8)), "removeScript"), pl = /* @__PURE__ */ p((e8, t) => {
  var r3;
  if (((r3 = t.flowchart) == null ? void 0 : r3.htmlLabels) !== false) {
    const i = t.securityLevel;
    i === "antiscript" || i === "strict" ? e8 = Uc(e8) : i !== "loose" && (e8 = Gc(e8), e8 = e8.replace(/</g, "&lt;").replace(/>/g, "&gt;"), e8 = e8.replace(/=/g, "&equals;"), e8 = zm(e8));
  }
  return e8;
}, "sanitizeMore"), rr = /* @__PURE__ */ p((e8, t) => e8 && (t.dompurifyConfig ? e8 = $r.sanitize(pl(e8, t), t.dompurifyConfig).toString() : e8 = $r.sanitize(pl(e8, t), {
  FORBID_TAGS: ["style"]
}).toString(), e8), "sanitizeText"), Im = /* @__PURE__ */ p((e8, t) => typeof e8 == "string" ? rr(e8, t) : e8.flat().map((r3) => rr(r3, t)), "sanitizeTextOrArray"), Pm = /* @__PURE__ */ p((e8) => Oi.test(e8), "hasBreaks"), Nm = /* @__PURE__ */ p((e8) => e8.split(Oi), "splitBreaks"), zm = /* @__PURE__ */ p((e8) => e8.replace(/#br#/g, "<br/>"), "placeholderToBreak"), Gc = /* @__PURE__ */ p((e8) => e8.replace(Oi, "#br#"), "breakToPlaceholder"), Wm = /* @__PURE__ */ p((e8) => {
  let t = "";
  return e8 && (t = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, t = t.replaceAll(/\(/g, "\\("), t = t.replaceAll(/\)/g, "\\)")), t;
}, "getUrl"), At = /* @__PURE__ */ p((e8) => !(e8 === false || ["false", "null", "0"].includes(String(e8).trim().toLowerCase())), "evaluate"), qm = /* @__PURE__ */ p(function(...e8) {
  const t = e8.filter((r3) => !isNaN(r3));
  return Math.max(...t);
}, "getMax"), Hm = /* @__PURE__ */ p(function(...e8) {
  const t = e8.filter((r3) => !isNaN(r3));
  return Math.min(...t);
}, "getMin"), gl = /* @__PURE__ */ p(function(e8) {
  const t = e8.split(/(,)/), r3 = [];
  for (let i = 0; i < t.length; i++) {
    let a = t[i];
    if (a === "," && i > 0 && i + 1 < t.length) {
      const n = t[i - 1], o = t[i + 1];
      jm(n, o) && (a = n + "," + o, i++, r3.pop());
    }
    r3.push(Ym(a));
  }
  return r3.join("");
}, "parseGenericTypes"), Jn = /* @__PURE__ */ p((e8, t) => Math.max(0, e8.split(t).length - 1), "countOccurrence"), jm = /* @__PURE__ */ p((e8, t) => {
  const r3 = Jn(e8, "~"), i = Jn(t, "~");
  return r3 === 1 && i === 1;
}, "shouldCombineSets"), Ym = /* @__PURE__ */ p((e8) => {
  const t = Jn(e8, "~");
  let r3 = false;
  if (t <= 1)
    return e8;
  t % 2 !== 0 && e8.startsWith("~") && (e8 = e8.substring(1), r3 = true);
  const i = [...e8];
  let a = i.indexOf("~"), n = i.lastIndexOf("~");
  for (; a !== -1 && n !== -1 && a !== n; )
    i[a] = "<", i[n] = ">", a = i.indexOf("~"), n = i.lastIndexOf("~");
  return r3 && i.unshift("~"), i.join("");
}, "processSet"), ml = /* @__PURE__ */ p(() => window.MathMLElement !== void 0, "isMathMLSupported"), ts = /\$\$(.*)\$\$/g, Pr = /* @__PURE__ */ p((e8) => {
  var t;
  return (((t = e8.match(ts)) == null ? void 0 : t.length) ?? 0) > 0;
}, "hasKatex"), O_ = /* @__PURE__ */ p(async (e8, t) => {
  e8 = await zs(e8, t);
  const r3 = document.createElement("div");
  r3.innerHTML = e8, r3.id = "katex-temp", r3.style.visibility = "hidden", r3.style.position = "absolute", r3.style.top = "0";
  const i = document.querySelector("body");
  i == null || i.insertAdjacentElement("beforeend", r3);
  const a = { width: r3.clientWidth, height: r3.clientHeight };
  return r3.remove(), a;
}, "calculateMathMLDimensions"), zs = /* @__PURE__ */ p(async (e8, t) => {
  if (!Pr(e8))
    return e8;
  if (!(ml() || t.legacyMathML || t.forceLegacyMathML))
    return e8.replace(ts, "MathML is unsupported in this environment.");
  const { default: r3 } = await __vitePreload(() => import("./katex-9tX9hjoM-ijs6yOqW.js"), true ? __vite__mapDeps([]) : void 0, import.meta.url), i = t.forceLegacyMathML || !ml() && t.legacyMathML ? "htmlAndMathml" : "mathml";
  return e8.split(Oi).map(
    (a) => Pr(a) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${a}</div>` : `<div>${a}</div>`
  ).join("").replace(
    ts,
    (a, n) => r3.renderToString(n, {
      throwOnError: true,
      displayMode: true,
      output: i
    }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, "")
  );
}, "renderKatex"), Hr = {
  getRows: Dm,
  sanitizeText: rr,
  sanitizeTextOrArray: Im,
  hasBreaks: Pm,
  splitBreaks: Nm,
  lineBreakRegex: Oi,
  removeScript: Uc,
  getUrl: Wm,
  evaluate: At,
  getMax: qm,
  getMin: Hm
}, Um = /* @__PURE__ */ p(function(e8, t) {
  for (let r3 of t)
    e8.attr(r3[0], r3[1]);
}, "d3Attrs"), Gm = /* @__PURE__ */ p(function(e8, t, r3) {
  let i = /* @__PURE__ */ new Map();
  return r3 ? (i.set("width", "100%"), i.set("style", `max-width: ${t}px;`)) : (i.set("height", e8), i.set("width", t)), i;
}, "calculateSvgSizeAttrs"), Xc = /* @__PURE__ */ p(function(e8, t, r3, i) {
  const a = Gm(t, r3, i);
  Um(e8, a);
}, "configureSvgSize"), Xm = /* @__PURE__ */ p(function(e8, t, r3, i) {
  const a = t.node().getBBox(), n = a.width, o = a.height;
  D.info(`SVG bounds: ${n}x${o}`, a);
  let s = 0, l = 0;
  D.info(`Graph bounds: ${s}x${l}`, e8), s = n + r3 * 2, l = o + r3 * 2, D.info(`Calculated bounds: ${s}x${l}`), Xc(t, l, s, i);
  const c = `${a.x - r3} ${a.y - r3} ${a.width + 2 * r3} ${a.height + 2 * r3}`;
  t.attr("viewBox", c);
}, "setupGraphViewbox"), sa = {}, Vm = /* @__PURE__ */ p((e8, t, r3) => {
  let i = "";
  return e8 in sa && sa[e8] ? i = sa[e8](r3) : D.warn(`No theme found for ${e8}`), ` & {
    font-family: ${r3.fontFamily};
    font-size: ${r3.fontSize};
    fill: ${r3.textColor}
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
    fill: ${r3.errorBkgColor};
  }
  & .error-text {
    fill: ${r3.errorTextColor};
    stroke: ${r3.errorTextColor};
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
    fill: ${r3.lineColor};
    stroke: ${r3.lineColor};
  }
  & .marker.cross {
    stroke: ${r3.lineColor};
  }

  & svg {
    font-family: ${r3.fontFamily};
    font-size: ${r3.fontSize};
  }
   & p {
    margin: 0
   }

  ${i}

  ${t}
`;
}, "getStyles"), Zm = /* @__PURE__ */ p((e8, t) => {
  t !== void 0 && (sa[e8] = t);
}, "addStylesForDiagram"), Km = Vm, Vc = {};
pm(Vc, {
  clear: () => Qm,
  getAccDescription: () => ry,
  getAccTitle: () => ty,
  getDiagramTitle: () => ay,
  setAccDescription: () => ey,
  setAccTitle: () => Jm,
  setDiagramTitle: () => iy
});
var Ws = "", qs = "", Hs = "", js = /* @__PURE__ */ p((e8) => rr(e8, Jt()), "sanitizeText"), Qm = /* @__PURE__ */ p(() => {
  Ws = "", Hs = "", qs = "";
}, "clear"), Jm = /* @__PURE__ */ p((e8) => {
  Ws = js(e8).replace(/^\s+/g, "");
}, "setAccTitle"), ty = /* @__PURE__ */ p(() => Ws, "getAccTitle"), ey = /* @__PURE__ */ p((e8) => {
  Hs = js(e8).replace(/\n\s+/g, `
`);
}, "setAccDescription"), ry = /* @__PURE__ */ p(() => Hs, "getAccDescription"), iy = /* @__PURE__ */ p((e8) => {
  qs = js(e8);
}, "setDiagramTitle"), ay = /* @__PURE__ */ p(() => qs, "getDiagramTitle"), yl = D, ny = Ps, dt = Jt, $_ = qc, D_ = Rr, Ys = /* @__PURE__ */ p((e8) => rr(e8, dt()), "sanitizeText"), sy = Xm, oy = /* @__PURE__ */ p(() => Vc, "getCommonDb"), xa = {}, ba = /* @__PURE__ */ p((e8, t, r3) => {
  var i;
  xa[e8] && yl.warn(`Diagram with id ${e8} already registered. Overwriting.`), xa[e8] = t, r3 && Rc(e8, r3), Zm(e8, t.styles), (i = t.injectUtils) == null || i.call(
    t,
    yl,
    ny,
    dt,
    Ys,
    sy,
    oy(),
    () => {
    }
  );
}, "registerDiagram"), es = /* @__PURE__ */ p((e8) => {
  if (e8 in xa)
    return xa[e8];
  throw new ly(e8);
}, "getDiagram"), Fr, ly = (Fr = class extends Error {
  constructor(t) {
    super(`Diagram ${t} not found.`);
  }
}, p(Fr, "DiagramNotFoundError"), Fr);
function Us(e8) {
  return typeof e8 > "u" || e8 === null;
}
p(Us, "isNothing");
function Zc(e8) {
  return typeof e8 == "object" && e8 !== null;
}
p(Zc, "isObject");
function Kc(e8) {
  return Array.isArray(e8) ? e8 : Us(e8) ? [] : [e8];
}
p(Kc, "toArray");
function Qc(e8, t) {
  var r3, i, a, n;
  if (t)
    for (n = Object.keys(t), r3 = 0, i = n.length; r3 < i; r3 += 1)
      a = n[r3], e8[a] = t[a];
  return e8;
}
p(Qc, "extend");
function Jc(e8, t) {
  var r3 = "", i;
  for (i = 0; i < t; i += 1)
    r3 += e8;
  return r3;
}
p(Jc, "repeat");
function th(e8) {
  return e8 === 0 && Number.NEGATIVE_INFINITY === 1 / e8;
}
p(th, "isNegativeZero");
var cy = Us, hy = Zc, uy = Kc, dy = Jc, fy = th, py = Qc, Lt = {
  isNothing: cy,
  isObject: hy,
  toArray: uy,
  repeat: dy,
  isNegativeZero: fy,
  extend: py
};
function Gs(e8, t) {
  var r3 = "", i = e8.reason || "(unknown reason)";
  return e8.mark ? (e8.mark.name && (r3 += 'in "' + e8.mark.name + '" '), r3 += "(" + (e8.mark.line + 1) + ":" + (e8.mark.column + 1) + ")", !t && e8.mark.snippet && (r3 += `

` + e8.mark.snippet), i + " " + r3) : i;
}
p(Gs, "formatError");
function Nr(e8, t) {
  Error.call(this), this.name = "YAMLException", this.reason = e8, this.mark = t, this.message = Gs(this, false), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
p(Nr, "YAMLException$1");
Nr.prototype = Object.create(Error.prototype);
Nr.prototype.constructor = Nr;
Nr.prototype.toString = /* @__PURE__ */ p(function(t) {
  return this.name + ": " + Gs(this, t);
}, "toString");
var Qt = Nr;
function oa(e8, t, r3, i, a) {
  var n = "", o = "", s = Math.floor(a / 2) - 1;
  return i - t > s && (n = " ... ", t = i - s + n.length), r3 - i > s && (o = " ...", r3 = i + s - o.length), {
    str: n + e8.slice(t, r3).replace(/\t/g, "→") + o,
    pos: i - t + n.length
    // relative position
  };
}
p(oa, "getLine");
function la(e8, t) {
  return Lt.repeat(" ", t - e8.length) + e8;
}
p(la, "padStart");
function eh(e8, t) {
  if (t = Object.create(t || null), !e8.buffer)
    return null;
  t.maxLength || (t.maxLength = 79), typeof t.indent != "number" && (t.indent = 1), typeof t.linesBefore != "number" && (t.linesBefore = 3), typeof t.linesAfter != "number" && (t.linesAfter = 2);
  for (var r3 = /\r?\n|\r|\0/g, i = [0], a = [], n, o = -1; n = r3.exec(e8.buffer); )
    a.push(n.index), i.push(n.index + n[0].length), e8.position <= n.index && o < 0 && (o = i.length - 2);
  o < 0 && (o = i.length - 1);
  var s = "", l, c, h = Math.min(e8.line + t.linesAfter, a.length).toString().length, u = t.maxLength - (t.indent + h + 3);
  for (l = 1; l <= t.linesBefore && !(o - l < 0); l++)
    c = oa(
      e8.buffer,
      i[o - l],
      a[o - l],
      e8.position - (i[o] - i[o - l]),
      u
    ), s = Lt.repeat(" ", t.indent) + la((e8.line - l + 1).toString(), h) + " | " + c.str + `
` + s;
  for (c = oa(e8.buffer, i[o], a[o], e8.position, u), s += Lt.repeat(" ", t.indent) + la((e8.line + 1).toString(), h) + " | " + c.str + `
`, s += Lt.repeat("-", t.indent + h + 3 + c.pos) + `^
`, l = 1; l <= t.linesAfter && !(o + l >= a.length); l++)
    c = oa(
      e8.buffer,
      i[o + l],
      a[o + l],
      e8.position - (i[o] - i[o + l]),
      u
    ), s += Lt.repeat(" ", t.indent) + la((e8.line + l + 1).toString(), h) + " | " + c.str + `
`;
  return s.replace(/\n$/, "");
}
p(eh, "makeSnippet");
var gy = eh, my = [
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
], yy = [
  "scalar",
  "sequence",
  "mapping"
];
function rh(e8) {
  var t = {};
  return e8 !== null && Object.keys(e8).forEach(function(r3) {
    e8[r3].forEach(function(i) {
      t[String(i)] = r3;
    });
  }), t;
}
p(rh, "compileStyleAliases");
function ih(e8, t) {
  if (t = t || {}, Object.keys(t).forEach(function(r3) {
    if (my.indexOf(r3) === -1)
      throw new Qt('Unknown option "' + r3 + '" is met in definition of "' + e8 + '" YAML type.');
  }), this.options = t, this.tag = e8, this.kind = t.kind || null, this.resolve = t.resolve || function() {
    return true;
  }, this.construct = t.construct || function(r3) {
    return r3;
  }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.representName = t.representName || null, this.defaultStyle = t.defaultStyle || null, this.multi = t.multi || false, this.styleAliases = rh(t.styleAliases || null), yy.indexOf(this.kind) === -1)
    throw new Qt('Unknown kind "' + this.kind + '" is specified for "' + e8 + '" YAML type.');
}
p(ih, "Type$1");
var zt = ih;
function rs(e8, t) {
  var r3 = [];
  return e8[t].forEach(function(i) {
    var a = r3.length;
    r3.forEach(function(n, o) {
      n.tag === i.tag && n.kind === i.kind && n.multi === i.multi && (a = o);
    }), r3[a] = i;
  }), r3;
}
p(rs, "compileList");
function ah() {
  var e8 = {
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
  }, t, r3;
  function i(a) {
    a.multi ? (e8.multi[a.kind].push(a), e8.multi.fallback.push(a)) : e8[a.kind][a.tag] = e8.fallback[a.tag] = a;
  }
  for (p(i, "collectType"), t = 0, r3 = arguments.length; t < r3; t += 1)
    arguments[t].forEach(i);
  return e8;
}
p(ah, "compileMap");
function Ca(e8) {
  return this.extend(e8);
}
p(Ca, "Schema$1");
Ca.prototype.extend = /* @__PURE__ */ p(function(t) {
  var r3 = [], i = [];
  if (t instanceof zt)
    i.push(t);
  else if (Array.isArray(t))
    i = i.concat(t);
  else if (t && (Array.isArray(t.implicit) || Array.isArray(t.explicit)))
    t.implicit && (r3 = r3.concat(t.implicit)), t.explicit && (i = i.concat(t.explicit));
  else
    throw new Qt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r3.forEach(function(n) {
    if (!(n instanceof zt))
      throw new Qt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (n.loadKind && n.loadKind !== "scalar")
      throw new Qt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (n.multi)
      throw new Qt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), i.forEach(function(n) {
    if (!(n instanceof zt))
      throw new Qt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var a = Object.create(Ca.prototype);
  return a.implicit = (this.implicit || []).concat(r3), a.explicit = (this.explicit || []).concat(i), a.compiledImplicit = rs(a, "implicit"), a.compiledExplicit = rs(a, "explicit"), a.compiledTypeMap = ah(a.compiledImplicit, a.compiledExplicit), a;
}, "extend");
var xy = Ca, by = new zt("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: /* @__PURE__ */ p(function(e8) {
    return e8 !== null ? e8 : "";
  }, "construct")
}), Cy = new zt("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: /* @__PURE__ */ p(function(e8) {
    return e8 !== null ? e8 : [];
  }, "construct")
}), vy = new zt("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: /* @__PURE__ */ p(function(e8) {
    return e8 !== null ? e8 : {};
  }, "construct")
}), ky = new xy({
  explicit: [
    by,
    Cy,
    vy
  ]
});
function nh(e8) {
  if (e8 === null)
    return true;
  var t = e8.length;
  return t === 1 && e8 === "~" || t === 4 && (e8 === "null" || e8 === "Null" || e8 === "NULL");
}
p(nh, "resolveYamlNull");
function sh() {
  return null;
}
p(sh, "constructYamlNull");
function oh(e8) {
  return e8 === null;
}
p(oh, "isNull");
var wy = new zt("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: nh,
  construct: sh,
  predicate: oh,
  represent: {
    canonical: /* @__PURE__ */ p(function() {
      return "~";
    }, "canonical"),
    lowercase: /* @__PURE__ */ p(function() {
      return "null";
    }, "lowercase"),
    uppercase: /* @__PURE__ */ p(function() {
      return "NULL";
    }, "uppercase"),
    camelcase: /* @__PURE__ */ p(function() {
      return "Null";
    }, "camelcase"),
    empty: /* @__PURE__ */ p(function() {
      return "";
    }, "empty")
  },
  defaultStyle: "lowercase"
});
function lh(e8) {
  if (e8 === null)
    return false;
  var t = e8.length;
  return t === 4 && (e8 === "true" || e8 === "True" || e8 === "TRUE") || t === 5 && (e8 === "false" || e8 === "False" || e8 === "FALSE");
}
p(lh, "resolveYamlBoolean");
function ch(e8) {
  return e8 === "true" || e8 === "True" || e8 === "TRUE";
}
p(ch, "constructYamlBoolean");
function hh(e8) {
  return Object.prototype.toString.call(e8) === "[object Boolean]";
}
p(hh, "isBoolean");
var _y = new zt("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: lh,
  construct: ch,
  predicate: hh,
  represent: {
    lowercase: /* @__PURE__ */ p(function(e8) {
      return e8 ? "true" : "false";
    }, "lowercase"),
    uppercase: /* @__PURE__ */ p(function(e8) {
      return e8 ? "TRUE" : "FALSE";
    }, "uppercase"),
    camelcase: /* @__PURE__ */ p(function(e8) {
      return e8 ? "True" : "False";
    }, "camelcase")
  },
  defaultStyle: "lowercase"
});
function uh(e8) {
  return 48 <= e8 && e8 <= 57 || 65 <= e8 && e8 <= 70 || 97 <= e8 && e8 <= 102;
}
p(uh, "isHexCode");
function dh(e8) {
  return 48 <= e8 && e8 <= 55;
}
p(dh, "isOctCode");
function fh(e8) {
  return 48 <= e8 && e8 <= 57;
}
p(fh, "isDecCode");
function ph(e8) {
  if (e8 === null)
    return false;
  var t = e8.length, r3 = 0, i = false, a;
  if (!t)
    return false;
  if (a = e8[r3], (a === "-" || a === "+") && (a = e8[++r3]), a === "0") {
    if (r3 + 1 === t)
      return true;
    if (a = e8[++r3], a === "b") {
      for (r3++; r3 < t; r3++)
        if (a = e8[r3], a !== "_") {
          if (a !== "0" && a !== "1")
            return false;
          i = true;
        }
      return i && a !== "_";
    }
    if (a === "x") {
      for (r3++; r3 < t; r3++)
        if (a = e8[r3], a !== "_") {
          if (!uh(e8.charCodeAt(r3)))
            return false;
          i = true;
        }
      return i && a !== "_";
    }
    if (a === "o") {
      for (r3++; r3 < t; r3++)
        if (a = e8[r3], a !== "_") {
          if (!dh(e8.charCodeAt(r3)))
            return false;
          i = true;
        }
      return i && a !== "_";
    }
  }
  if (a === "_")
    return false;
  for (; r3 < t; r3++)
    if (a = e8[r3], a !== "_") {
      if (!fh(e8.charCodeAt(r3)))
        return false;
      i = true;
    }
  return !(!i || a === "_");
}
p(ph, "resolveYamlInteger");
function gh(e8) {
  var t = e8, r3 = 1, i;
  if (t.indexOf("_") !== -1 && (t = t.replace(/_/g, "")), i = t[0], (i === "-" || i === "+") && (i === "-" && (r3 = -1), t = t.slice(1), i = t[0]), t === "0")
    return 0;
  if (i === "0") {
    if (t[1] === "b")
      return r3 * parseInt(t.slice(2), 2);
    if (t[1] === "x")
      return r3 * parseInt(t.slice(2), 16);
    if (t[1] === "o")
      return r3 * parseInt(t.slice(2), 8);
  }
  return r3 * parseInt(t, 10);
}
p(gh, "constructYamlInteger");
function mh(e8) {
  return Object.prototype.toString.call(e8) === "[object Number]" && e8 % 1 === 0 && !Lt.isNegativeZero(e8);
}
p(mh, "isInteger");
var Sy = new zt("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: ph,
  construct: gh,
  predicate: mh,
  represent: {
    binary: /* @__PURE__ */ p(function(e8) {
      return e8 >= 0 ? "0b" + e8.toString(2) : "-0b" + e8.toString(2).slice(1);
    }, "binary"),
    octal: /* @__PURE__ */ p(function(e8) {
      return e8 >= 0 ? "0o" + e8.toString(8) : "-0o" + e8.toString(8).slice(1);
    }, "octal"),
    decimal: /* @__PURE__ */ p(function(e8) {
      return e8.toString(10);
    }, "decimal"),
    /* eslint-disable max-len */
    hexadecimal: /* @__PURE__ */ p(function(e8) {
      return e8 >= 0 ? "0x" + e8.toString(16).toUpperCase() : "-0x" + e8.toString(16).toUpperCase().slice(1);
    }, "hexadecimal")
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
}), Ty = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function yh(e8) {
  return !(e8 === null || !Ty.test(e8) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  e8[e8.length - 1] === "_");
}
p(yh, "resolveYamlFloat");
function xh(e8) {
  var t, r3;
  return t = e8.replace(/_/g, "").toLowerCase(), r3 = t[0] === "-" ? -1 : 1, "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), t === ".inf" ? r3 === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : t === ".nan" ? NaN : r3 * parseFloat(t, 10);
}
p(xh, "constructYamlFloat");
var By = /^[-+]?[0-9]+e/;
function bh(e8, t) {
  var r3;
  if (isNaN(e8))
    switch (t) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === e8)
    switch (t) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === e8)
    switch (t) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (Lt.isNegativeZero(e8))
    return "-0.0";
  return r3 = e8.toString(10), By.test(r3) ? r3.replace("e", ".e") : r3;
}
p(bh, "representYamlFloat");
function Ch(e8) {
  return Object.prototype.toString.call(e8) === "[object Number]" && (e8 % 1 !== 0 || Lt.isNegativeZero(e8));
}
p(Ch, "isFloat");
var Ly = new zt("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: yh,
  construct: xh,
  predicate: Ch,
  represent: bh,
  defaultStyle: "lowercase"
}), vh = ky.extend({
  implicit: [
    wy,
    _y,
    Sy,
    Ly
  ]
}), Ay = vh, kh = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), wh = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function _h(e8) {
  return e8 === null ? false : kh.exec(e8) !== null || wh.exec(e8) !== null;
}
p(_h, "resolveYamlTimestamp");
function Sh(e8) {
  var t, r3, i, a, n, o, s, l = 0, c = null, h, u, d3;
  if (t = kh.exec(e8), t === null && (t = wh.exec(e8)), t === null)
    throw new Error("Date resolve error");
  if (r3 = +t[1], i = +t[2] - 1, a = +t[3], !t[4])
    return new Date(Date.UTC(r3, i, a));
  if (n = +t[4], o = +t[5], s = +t[6], t[7]) {
    for (l = t[7].slice(0, 3); l.length < 3; )
      l += "0";
    l = +l;
  }
  return t[9] && (h = +t[10], u = +(t[11] || 0), c = (h * 60 + u) * 6e4, t[9] === "-" && (c = -c)), d3 = new Date(Date.UTC(r3, i, a, n, o, s, l)), c && d3.setTime(d3.getTime() - c), d3;
}
p(Sh, "constructYamlTimestamp");
function Th(e8) {
  return e8.toISOString();
}
p(Th, "representYamlTimestamp");
var My = new zt("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: _h,
  construct: Sh,
  instanceOf: Date,
  represent: Th
});
function Bh(e8) {
  return e8 === "<<" || e8 === null;
}
p(Bh, "resolveYamlMerge");
var Ey = new zt("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: Bh
}), Xs = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function Lh(e8) {
  if (e8 === null)
    return false;
  var t, r3, i = 0, a = e8.length, n = Xs;
  for (r3 = 0; r3 < a; r3++)
    if (t = n.indexOf(e8.charAt(r3)), !(t > 64)) {
      if (t < 0)
        return false;
      i += 6;
    }
  return i % 8 === 0;
}
p(Lh, "resolveYamlBinary");
function Ah(e8) {
  var t, r3, i = e8.replace(/[\r\n=]/g, ""), a = i.length, n = Xs, o = 0, s = [];
  for (t = 0; t < a; t++)
    t % 4 === 0 && t && (s.push(o >> 16 & 255), s.push(o >> 8 & 255), s.push(o & 255)), o = o << 6 | n.indexOf(i.charAt(t));
  return r3 = a % 4 * 6, r3 === 0 ? (s.push(o >> 16 & 255), s.push(o >> 8 & 255), s.push(o & 255)) : r3 === 18 ? (s.push(o >> 10 & 255), s.push(o >> 2 & 255)) : r3 === 12 && s.push(o >> 4 & 255), new Uint8Array(s);
}
p(Ah, "constructYamlBinary");
function Mh(e8) {
  var t = "", r3 = 0, i, a, n = e8.length, o = Xs;
  for (i = 0; i < n; i++)
    i % 3 === 0 && i && (t += o[r3 >> 18 & 63], t += o[r3 >> 12 & 63], t += o[r3 >> 6 & 63], t += o[r3 & 63]), r3 = (r3 << 8) + e8[i];
  return a = n % 3, a === 0 ? (t += o[r3 >> 18 & 63], t += o[r3 >> 12 & 63], t += o[r3 >> 6 & 63], t += o[r3 & 63]) : a === 2 ? (t += o[r3 >> 10 & 63], t += o[r3 >> 4 & 63], t += o[r3 << 2 & 63], t += o[64]) : a === 1 && (t += o[r3 >> 2 & 63], t += o[r3 << 4 & 63], t += o[64], t += o[64]), t;
}
p(Mh, "representYamlBinary");
function Eh(e8) {
  return Object.prototype.toString.call(e8) === "[object Uint8Array]";
}
p(Eh, "isBinary");
var Fy = new zt("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: Lh,
  construct: Ah,
  predicate: Eh,
  represent: Mh
}), Oy = Object.prototype.hasOwnProperty, $y = Object.prototype.toString;
function Fh(e8) {
  if (e8 === null)
    return true;
  var t = [], r3, i, a, n, o, s = e8;
  for (r3 = 0, i = s.length; r3 < i; r3 += 1) {
    if (a = s[r3], o = false, $y.call(a) !== "[object Object]")
      return false;
    for (n in a)
      if (Oy.call(a, n))
        if (!o)
          o = true;
        else
          return false;
    if (!o)
      return false;
    if (t.indexOf(n) === -1)
      t.push(n);
    else
      return false;
  }
  return true;
}
p(Fh, "resolveYamlOmap");
function Oh(e8) {
  return e8 !== null ? e8 : [];
}
p(Oh, "constructYamlOmap");
var Dy = new zt("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: Fh,
  construct: Oh
}), Ry = Object.prototype.toString;
function $h(e8) {
  if (e8 === null)
    return true;
  var t, r3, i, a, n, o = e8;
  for (n = new Array(o.length), t = 0, r3 = o.length; t < r3; t += 1) {
    if (i = o[t], Ry.call(i) !== "[object Object]" || (a = Object.keys(i), a.length !== 1))
      return false;
    n[t] = [a[0], i[a[0]]];
  }
  return true;
}
p($h, "resolveYamlPairs");
function Dh(e8) {
  if (e8 === null)
    return [];
  var t, r3, i, a, n, o = e8;
  for (n = new Array(o.length), t = 0, r3 = o.length; t < r3; t += 1)
    i = o[t], a = Object.keys(i), n[t] = [a[0], i[a[0]]];
  return n;
}
p(Dh, "constructYamlPairs");
var Iy = new zt("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: $h,
  construct: Dh
}), Py = Object.prototype.hasOwnProperty;
function Rh(e8) {
  if (e8 === null)
    return true;
  var t, r3 = e8;
  for (t in r3)
    if (Py.call(r3, t) && r3[t] !== null)
      return false;
  return true;
}
p(Rh, "resolveYamlSet");
function Ih(e8) {
  return e8 !== null ? e8 : {};
}
p(Ih, "constructYamlSet");
var Ny = new zt("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: Rh,
  construct: Ih
}), Ph = Ay.extend({
  implicit: [
    My,
    Ey
  ],
  explicit: [
    Fy,
    Dy,
    Iy,
    Ny
  ]
}), Pe = Object.prototype.hasOwnProperty, va = 1, Nh = 2, zh = 3, ka = 4, En = 1, zy = 2, xl = 3, Wy = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, qy = /[\x85\u2028\u2029]/, Hy = /[,\[\]\{\}]/, Wh = /^(?:!|!!|![a-z\-]+!)$/i, qh = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function is(e8) {
  return Object.prototype.toString.call(e8);
}
p(is, "_class");
function ce(e8) {
  return e8 === 10 || e8 === 13;
}
p(ce, "is_EOL");
function Ie(e8) {
  return e8 === 9 || e8 === 32;
}
p(Ie, "is_WHITE_SPACE");
function jt(e8) {
  return e8 === 9 || e8 === 32 || e8 === 10 || e8 === 13;
}
p(jt, "is_WS_OR_EOL");
function Qe(e8) {
  return e8 === 44 || e8 === 91 || e8 === 93 || e8 === 123 || e8 === 125;
}
p(Qe, "is_FLOW_INDICATOR");
function Hh(e8) {
  var t;
  return 48 <= e8 && e8 <= 57 ? e8 - 48 : (t = e8 | 32, 97 <= t && t <= 102 ? t - 97 + 10 : -1);
}
p(Hh, "fromHexCode");
function jh(e8) {
  return e8 === 120 ? 2 : e8 === 117 ? 4 : e8 === 85 ? 8 : 0;
}
p(jh, "escapedHexLen");
function Yh(e8) {
  return 48 <= e8 && e8 <= 57 ? e8 - 48 : -1;
}
p(Yh, "fromDecimalCode");
function as(e8) {
  return e8 === 48 ? "\0" : e8 === 97 ? "\x07" : e8 === 98 ? "\b" : e8 === 116 || e8 === 9 ? "	" : e8 === 110 ? `
` : e8 === 118 ? "\v" : e8 === 102 ? "\f" : e8 === 114 ? "\r" : e8 === 101 ? "\x1B" : e8 === 32 ? " " : e8 === 34 ? '"' : e8 === 47 ? "/" : e8 === 92 ? "\\" : e8 === 78 ? "" : e8 === 95 ? " " : e8 === 76 ? "\u2028" : e8 === 80 ? "\u2029" : "";
}
p(as, "simpleEscapeSequence");
function Uh(e8) {
  return e8 <= 65535 ? String.fromCharCode(e8) : String.fromCharCode(
    (e8 - 65536 >> 10) + 55296,
    (e8 - 65536 & 1023) + 56320
  );
}
p(Uh, "charFromCodepoint");
var Gh = new Array(256), Xh = new Array(256);
for (Xe = 0; Xe < 256; Xe++)
  Gh[Xe] = as(Xe) ? 1 : 0, Xh[Xe] = as(Xe);
var Xe;
function Vh(e8, t) {
  this.input = e8, this.filename = t.filename || null, this.schema = t.schema || Ph, this.onWarning = t.onWarning || null, this.legacy = t.legacy || false, this.json = t.json || false, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e8.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
p(Vh, "State$1");
function Vs(e8, t) {
  var r3 = {
    name: e8.filename,
    buffer: e8.input.slice(0, -1),
    // omit trailing \0
    position: e8.position,
    line: e8.line,
    column: e8.position - e8.lineStart
  };
  return r3.snippet = gy(r3), new Qt(t, r3);
}
p(Vs, "generateError");
function et(e8, t) {
  throw Vs(e8, t);
}
p(et, "throwError");
function wi(e8, t) {
  e8.onWarning && e8.onWarning.call(null, Vs(e8, t));
}
p(wi, "throwWarning");
var bl = {
  YAML: /* @__PURE__ */ p(function(t, r3, i) {
    var a, n, o;
    t.version !== null && et(t, "duplication of %YAML directive"), i.length !== 1 && et(t, "YAML directive accepts exactly one argument"), a = /^([0-9]+)\.([0-9]+)$/.exec(i[0]), a === null && et(t, "ill-formed argument of the YAML directive"), n = parseInt(a[1], 10), o = parseInt(a[2], 10), n !== 1 && et(t, "unacceptable YAML version of the document"), t.version = i[0], t.checkLineBreaks = o < 2, o !== 1 && o !== 2 && wi(t, "unsupported YAML version of the document");
  }, "handleYamlDirective"),
  TAG: /* @__PURE__ */ p(function(t, r3, i) {
    var a, n;
    i.length !== 2 && et(t, "TAG directive accepts exactly two arguments"), a = i[0], n = i[1], Wh.test(a) || et(t, "ill-formed tag handle (first argument) of the TAG directive"), Pe.call(t.tagMap, a) && et(t, 'there is a previously declared suffix for "' + a + '" tag handle'), qh.test(n) || et(t, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      n = decodeURIComponent(n);
    } catch {
      et(t, "tag prefix is malformed: " + n);
    }
    t.tagMap[a] = n;
  }, "handleTagDirective")
};
function Me(e8, t, r3, i) {
  var a, n, o, s;
  if (t < r3) {
    if (s = e8.input.slice(t, r3), i)
      for (a = 0, n = s.length; a < n; a += 1)
        o = s.charCodeAt(a), o === 9 || 32 <= o && o <= 1114111 || et(e8, "expected valid JSON character");
    else
      Wy.test(s) && et(e8, "the stream contains non-printable characters");
    e8.result += s;
  }
}
p(Me, "captureSegment");
function ns(e8, t, r3, i) {
  var a, n, o, s;
  for (Lt.isObject(r3) || et(e8, "cannot merge mappings; the provided source object is unacceptable"), a = Object.keys(r3), o = 0, s = a.length; o < s; o += 1)
    n = a[o], Pe.call(t, n) || (t[n] = r3[n], i[n] = true);
}
p(ns, "mergeMappings");
function Je(e8, t, r3, i, a, n, o, s, l) {
  var c, h;
  if (Array.isArray(a))
    for (a = Array.prototype.slice.call(a), c = 0, h = a.length; c < h; c += 1)
      Array.isArray(a[c]) && et(e8, "nested arrays are not supported inside keys"), typeof a == "object" && is(a[c]) === "[object Object]" && (a[c] = "[object Object]");
  if (typeof a == "object" && is(a) === "[object Object]" && (a = "[object Object]"), a = String(a), t === null && (t = {}), i === "tag:yaml.org,2002:merge")
    if (Array.isArray(n))
      for (c = 0, h = n.length; c < h; c += 1)
        ns(e8, t, n[c], r3);
    else
      ns(e8, t, n, r3);
  else
    !e8.json && !Pe.call(r3, a) && Pe.call(t, a) && (e8.line = o || e8.line, e8.lineStart = s || e8.lineStart, e8.position = l || e8.position, et(e8, "duplicated mapping key")), a === "__proto__" ? Object.defineProperty(t, a, {
      configurable: true,
      enumerable: true,
      writable: true,
      value: n
    }) : t[a] = n, delete r3[a];
  return t;
}
p(Je, "storeMappingPair");
function Va(e8) {
  var t;
  t = e8.input.charCodeAt(e8.position), t === 10 ? e8.position++ : t === 13 ? (e8.position++, e8.input.charCodeAt(e8.position) === 10 && e8.position++) : et(e8, "a line break is expected"), e8.line += 1, e8.lineStart = e8.position, e8.firstTabInLine = -1;
}
p(Va, "readLineBreak");
function kt(e8, t, r3) {
  for (var i = 0, a = e8.input.charCodeAt(e8.position); a !== 0; ) {
    for (; Ie(a); )
      a === 9 && e8.firstTabInLine === -1 && (e8.firstTabInLine = e8.position), a = e8.input.charCodeAt(++e8.position);
    if (t && a === 35)
      do
        a = e8.input.charCodeAt(++e8.position);
      while (a !== 10 && a !== 13 && a !== 0);
    if (ce(a))
      for (Va(e8), a = e8.input.charCodeAt(e8.position), i++, e8.lineIndent = 0; a === 32; )
        e8.lineIndent++, a = e8.input.charCodeAt(++e8.position);
    else
      break;
  }
  return r3 !== -1 && i !== 0 && e8.lineIndent < r3 && wi(e8, "deficient indentation"), i;
}
p(kt, "skipSeparationSpace");
function $i(e8) {
  var t = e8.position, r3;
  return r3 = e8.input.charCodeAt(t), !!((r3 === 45 || r3 === 46) && r3 === e8.input.charCodeAt(t + 1) && r3 === e8.input.charCodeAt(t + 2) && (t += 3, r3 = e8.input.charCodeAt(t), r3 === 0 || jt(r3)));
}
p($i, "testDocumentSeparator");
function Za(e8, t) {
  t === 1 ? e8.result += " " : t > 1 && (e8.result += Lt.repeat(`
`, t - 1));
}
p(Za, "writeFoldedLines");
function Zh(e8, t, r3) {
  var i, a, n, o, s, l, c, h, u = e8.kind, d3 = e8.result, f;
  if (f = e8.input.charCodeAt(e8.position), jt(f) || Qe(f) || f === 35 || f === 38 || f === 42 || f === 33 || f === 124 || f === 62 || f === 39 || f === 34 || f === 37 || f === 64 || f === 96 || (f === 63 || f === 45) && (a = e8.input.charCodeAt(e8.position + 1), jt(a) || r3 && Qe(a)))
    return false;
  for (e8.kind = "scalar", e8.result = "", n = o = e8.position, s = false; f !== 0; ) {
    if (f === 58) {
      if (a = e8.input.charCodeAt(e8.position + 1), jt(a) || r3 && Qe(a))
        break;
    } else if (f === 35) {
      if (i = e8.input.charCodeAt(e8.position - 1), jt(i))
        break;
    } else {
      if (e8.position === e8.lineStart && $i(e8) || r3 && Qe(f))
        break;
      if (ce(f))
        if (l = e8.line, c = e8.lineStart, h = e8.lineIndent, kt(e8, false, -1), e8.lineIndent >= t) {
          s = true, f = e8.input.charCodeAt(e8.position);
          continue;
        } else {
          e8.position = o, e8.line = l, e8.lineStart = c, e8.lineIndent = h;
          break;
        }
    }
    s && (Me(e8, n, o, false), Za(e8, e8.line - l), n = o = e8.position, s = false), Ie(f) || (o = e8.position + 1), f = e8.input.charCodeAt(++e8.position);
  }
  return Me(e8, n, o, false), e8.result ? true : (e8.kind = u, e8.result = d3, false);
}
p(Zh, "readPlainScalar");
function Kh(e8, t) {
  var r3, i, a;
  if (r3 = e8.input.charCodeAt(e8.position), r3 !== 39)
    return false;
  for (e8.kind = "scalar", e8.result = "", e8.position++, i = a = e8.position; (r3 = e8.input.charCodeAt(e8.position)) !== 0; )
    if (r3 === 39)
      if (Me(e8, i, e8.position, true), r3 = e8.input.charCodeAt(++e8.position), r3 === 39)
        i = e8.position, e8.position++, a = e8.position;
      else
        return true;
    else
      ce(r3) ? (Me(e8, i, a, true), Za(e8, kt(e8, false, t)), i = a = e8.position) : e8.position === e8.lineStart && $i(e8) ? et(e8, "unexpected end of the document within a single quoted scalar") : (e8.position++, a = e8.position);
  et(e8, "unexpected end of the stream within a single quoted scalar");
}
p(Kh, "readSingleQuotedScalar");
function Qh(e8, t) {
  var r3, i, a, n, o, s;
  if (s = e8.input.charCodeAt(e8.position), s !== 34)
    return false;
  for (e8.kind = "scalar", e8.result = "", e8.position++, r3 = i = e8.position; (s = e8.input.charCodeAt(e8.position)) !== 0; ) {
    if (s === 34)
      return Me(e8, r3, e8.position, true), e8.position++, true;
    if (s === 92) {
      if (Me(e8, r3, e8.position, true), s = e8.input.charCodeAt(++e8.position), ce(s))
        kt(e8, false, t);
      else if (s < 256 && Gh[s])
        e8.result += Xh[s], e8.position++;
      else if ((o = jh(s)) > 0) {
        for (a = o, n = 0; a > 0; a--)
          s = e8.input.charCodeAt(++e8.position), (o = Hh(s)) >= 0 ? n = (n << 4) + o : et(e8, "expected hexadecimal character");
        e8.result += Uh(n), e8.position++;
      } else
        et(e8, "unknown escape sequence");
      r3 = i = e8.position;
    } else
      ce(s) ? (Me(e8, r3, i, true), Za(e8, kt(e8, false, t)), r3 = i = e8.position) : e8.position === e8.lineStart && $i(e8) ? et(e8, "unexpected end of the document within a double quoted scalar") : (e8.position++, i = e8.position);
  }
  et(e8, "unexpected end of the stream within a double quoted scalar");
}
p(Qh, "readDoubleQuotedScalar");
function Jh(e8, t) {
  var r3 = true, i, a, n, o = e8.tag, s, l = e8.anchor, c, h, u, d3, f, g = /* @__PURE__ */ Object.create(null), m, y, x, b;
  if (b = e8.input.charCodeAt(e8.position), b === 91)
    h = 93, f = false, s = [];
  else if (b === 123)
    h = 125, f = true, s = {};
  else
    return false;
  for (e8.anchor !== null && (e8.anchorMap[e8.anchor] = s), b = e8.input.charCodeAt(++e8.position); b !== 0; ) {
    if (kt(e8, true, t), b = e8.input.charCodeAt(e8.position), b === h)
      return e8.position++, e8.tag = o, e8.anchor = l, e8.kind = f ? "mapping" : "sequence", e8.result = s, true;
    r3 ? b === 44 && et(e8, "expected the node content, but found ','") : et(e8, "missed comma between flow collection entries"), y = m = x = null, u = d3 = false, b === 63 && (c = e8.input.charCodeAt(e8.position + 1), jt(c) && (u = d3 = true, e8.position++, kt(e8, true, t))), i = e8.line, a = e8.lineStart, n = e8.position, ir(e8, t, va, false, true), y = e8.tag, m = e8.result, kt(e8, true, t), b = e8.input.charCodeAt(e8.position), (d3 || e8.line === i) && b === 58 && (u = true, b = e8.input.charCodeAt(++e8.position), kt(e8, true, t), ir(e8, t, va, false, true), x = e8.result), f ? Je(e8, s, g, y, m, x, i, a, n) : u ? s.push(Je(e8, null, g, y, m, x, i, a, n)) : s.push(m), kt(e8, true, t), b = e8.input.charCodeAt(e8.position), b === 44 ? (r3 = true, b = e8.input.charCodeAt(++e8.position)) : r3 = false;
  }
  et(e8, "unexpected end of the stream within a flow collection");
}
p(Jh, "readFlowCollection");
function tu(e8, t) {
  var r3, i, a = En, n = false, o = false, s = t, l = 0, c = false, h, u;
  if (u = e8.input.charCodeAt(e8.position), u === 124)
    i = false;
  else if (u === 62)
    i = true;
  else
    return false;
  for (e8.kind = "scalar", e8.result = ""; u !== 0; )
    if (u = e8.input.charCodeAt(++e8.position), u === 43 || u === 45)
      En === a ? a = u === 43 ? xl : zy : et(e8, "repeat of a chomping mode identifier");
    else if ((h = Yh(u)) >= 0)
      h === 0 ? et(e8, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? et(e8, "repeat of an indentation width identifier") : (s = t + h - 1, o = true);
    else
      break;
  if (Ie(u)) {
    do
      u = e8.input.charCodeAt(++e8.position);
    while (Ie(u));
    if (u === 35)
      do
        u = e8.input.charCodeAt(++e8.position);
      while (!ce(u) && u !== 0);
  }
  for (; u !== 0; ) {
    for (Va(e8), e8.lineIndent = 0, u = e8.input.charCodeAt(e8.position); (!o || e8.lineIndent < s) && u === 32; )
      e8.lineIndent++, u = e8.input.charCodeAt(++e8.position);
    if (!o && e8.lineIndent > s && (s = e8.lineIndent), ce(u)) {
      l++;
      continue;
    }
    if (e8.lineIndent < s) {
      a === xl ? e8.result += Lt.repeat(`
`, n ? 1 + l : l) : a === En && n && (e8.result += `
`);
      break;
    }
    for (i ? Ie(u) ? (c = true, e8.result += Lt.repeat(`
`, n ? 1 + l : l)) : c ? (c = false, e8.result += Lt.repeat(`
`, l + 1)) : l === 0 ? n && (e8.result += " ") : e8.result += Lt.repeat(`
`, l) : e8.result += Lt.repeat(`
`, n ? 1 + l : l), n = true, o = true, l = 0, r3 = e8.position; !ce(u) && u !== 0; )
      u = e8.input.charCodeAt(++e8.position);
    Me(e8, r3, e8.position, false);
  }
  return true;
}
p(tu, "readBlockScalar");
function ss(e8, t) {
  var r3, i = e8.tag, a = e8.anchor, n = [], o, s = false, l;
  if (e8.firstTabInLine !== -1)
    return false;
  for (e8.anchor !== null && (e8.anchorMap[e8.anchor] = n), l = e8.input.charCodeAt(e8.position); l !== 0 && (e8.firstTabInLine !== -1 && (e8.position = e8.firstTabInLine, et(e8, "tab characters must not be used in indentation")), !(l !== 45 || (o = e8.input.charCodeAt(e8.position + 1), !jt(o)))); ) {
    if (s = true, e8.position++, kt(e8, true, -1) && e8.lineIndent <= t) {
      n.push(null), l = e8.input.charCodeAt(e8.position);
      continue;
    }
    if (r3 = e8.line, ir(e8, t, zh, false, true), n.push(e8.result), kt(e8, true, -1), l = e8.input.charCodeAt(e8.position), (e8.line === r3 || e8.lineIndent > t) && l !== 0)
      et(e8, "bad indentation of a sequence entry");
    else if (e8.lineIndent < t)
      break;
  }
  return s ? (e8.tag = i, e8.anchor = a, e8.kind = "sequence", e8.result = n, true) : false;
}
p(ss, "readBlockSequence");
function eu(e8, t, r3) {
  var i, a, n, o, s, l, c = e8.tag, h = e8.anchor, u = {}, d3 = /* @__PURE__ */ Object.create(null), f = null, g = null, m = null, y = false, x = false, b;
  if (e8.firstTabInLine !== -1)
    return false;
  for (e8.anchor !== null && (e8.anchorMap[e8.anchor] = u), b = e8.input.charCodeAt(e8.position); b !== 0; ) {
    if (!y && e8.firstTabInLine !== -1 && (e8.position = e8.firstTabInLine, et(e8, "tab characters must not be used in indentation")), i = e8.input.charCodeAt(e8.position + 1), n = e8.line, (b === 63 || b === 58) && jt(i))
      b === 63 ? (y && (Je(e8, u, d3, f, g, null, o, s, l), f = g = m = null), x = true, y = true, a = true) : y ? (y = false, a = true) : et(e8, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e8.position += 1, b = i;
    else {
      if (o = e8.line, s = e8.lineStart, l = e8.position, !ir(e8, r3, Nh, false, true))
        break;
      if (e8.line === n) {
        for (b = e8.input.charCodeAt(e8.position); Ie(b); )
          b = e8.input.charCodeAt(++e8.position);
        if (b === 58)
          b = e8.input.charCodeAt(++e8.position), jt(b) || et(e8, "a whitespace character is expected after the key-value separator within a block mapping"), y && (Je(e8, u, d3, f, g, null, o, s, l), f = g = m = null), x = true, y = false, a = false, f = e8.tag, g = e8.result;
        else if (x)
          et(e8, "can not read an implicit mapping pair; a colon is missed");
        else
          return e8.tag = c, e8.anchor = h, true;
      } else if (x)
        et(e8, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return e8.tag = c, e8.anchor = h, true;
    }
    if ((e8.line === n || e8.lineIndent > t) && (y && (o = e8.line, s = e8.lineStart, l = e8.position), ir(e8, t, ka, true, a) && (y ? g = e8.result : m = e8.result), y || (Je(e8, u, d3, f, g, m, o, s, l), f = g = m = null), kt(e8, true, -1), b = e8.input.charCodeAt(e8.position)), (e8.line === n || e8.lineIndent > t) && b !== 0)
      et(e8, "bad indentation of a mapping entry");
    else if (e8.lineIndent < t)
      break;
  }
  return y && Je(e8, u, d3, f, g, null, o, s, l), x && (e8.tag = c, e8.anchor = h, e8.kind = "mapping", e8.result = u), x;
}
p(eu, "readBlockMapping");
function ru(e8) {
  var t, r3 = false, i = false, a, n, o;
  if (o = e8.input.charCodeAt(e8.position), o !== 33)
    return false;
  if (e8.tag !== null && et(e8, "duplication of a tag property"), o = e8.input.charCodeAt(++e8.position), o === 60 ? (r3 = true, o = e8.input.charCodeAt(++e8.position)) : o === 33 ? (i = true, a = "!!", o = e8.input.charCodeAt(++e8.position)) : a = "!", t = e8.position, r3) {
    do
      o = e8.input.charCodeAt(++e8.position);
    while (o !== 0 && o !== 62);
    e8.position < e8.length ? (n = e8.input.slice(t, e8.position), o = e8.input.charCodeAt(++e8.position)) : et(e8, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !jt(o); )
      o === 33 && (i ? et(e8, "tag suffix cannot contain exclamation marks") : (a = e8.input.slice(t - 1, e8.position + 1), Wh.test(a) || et(e8, "named tag handle cannot contain such characters"), i = true, t = e8.position + 1)), o = e8.input.charCodeAt(++e8.position);
    n = e8.input.slice(t, e8.position), Hy.test(n) && et(e8, "tag suffix cannot contain flow indicator characters");
  }
  n && !qh.test(n) && et(e8, "tag name cannot contain such characters: " + n);
  try {
    n = decodeURIComponent(n);
  } catch {
    et(e8, "tag name is malformed: " + n);
  }
  return r3 ? e8.tag = n : Pe.call(e8.tagMap, a) ? e8.tag = e8.tagMap[a] + n : a === "!" ? e8.tag = "!" + n : a === "!!" ? e8.tag = "tag:yaml.org,2002:" + n : et(e8, 'undeclared tag handle "' + a + '"'), true;
}
p(ru, "readTagProperty");
function iu(e8) {
  var t, r3;
  if (r3 = e8.input.charCodeAt(e8.position), r3 !== 38)
    return false;
  for (e8.anchor !== null && et(e8, "duplication of an anchor property"), r3 = e8.input.charCodeAt(++e8.position), t = e8.position; r3 !== 0 && !jt(r3) && !Qe(r3); )
    r3 = e8.input.charCodeAt(++e8.position);
  return e8.position === t && et(e8, "name of an anchor node must contain at least one character"), e8.anchor = e8.input.slice(t, e8.position), true;
}
p(iu, "readAnchorProperty");
function au(e8) {
  var t, r3, i;
  if (i = e8.input.charCodeAt(e8.position), i !== 42)
    return false;
  for (i = e8.input.charCodeAt(++e8.position), t = e8.position; i !== 0 && !jt(i) && !Qe(i); )
    i = e8.input.charCodeAt(++e8.position);
  return e8.position === t && et(e8, "name of an alias node must contain at least one character"), r3 = e8.input.slice(t, e8.position), Pe.call(e8.anchorMap, r3) || et(e8, 'unidentified alias "' + r3 + '"'), e8.result = e8.anchorMap[r3], kt(e8, true, -1), true;
}
p(au, "readAlias");
function ir(e8, t, r3, i, a) {
  var n, o, s, l = 1, c = false, h = false, u, d3, f, g, m, y;
  if (e8.listener !== null && e8.listener("open", e8), e8.tag = null, e8.anchor = null, e8.kind = null, e8.result = null, n = o = s = ka === r3 || zh === r3, i && kt(e8, true, -1) && (c = true, e8.lineIndent > t ? l = 1 : e8.lineIndent === t ? l = 0 : e8.lineIndent < t && (l = -1)), l === 1)
    for (; ru(e8) || iu(e8); )
      kt(e8, true, -1) ? (c = true, s = n, e8.lineIndent > t ? l = 1 : e8.lineIndent === t ? l = 0 : e8.lineIndent < t && (l = -1)) : s = false;
  if (s && (s = c || a), (l === 1 || ka === r3) && (va === r3 || Nh === r3 ? m = t : m = t + 1, y = e8.position - e8.lineStart, l === 1 ? s && (ss(e8, y) || eu(e8, y, m)) || Jh(e8, m) ? h = true : (o && tu(e8, m) || Kh(e8, m) || Qh(e8, m) ? h = true : au(e8) ? (h = true, (e8.tag !== null || e8.anchor !== null) && et(e8, "alias node should not have any properties")) : Zh(e8, m, va === r3) && (h = true, e8.tag === null && (e8.tag = "?")), e8.anchor !== null && (e8.anchorMap[e8.anchor] = e8.result)) : l === 0 && (h = s && ss(e8, y))), e8.tag === null)
    e8.anchor !== null && (e8.anchorMap[e8.anchor] = e8.result);
  else if (e8.tag === "?") {
    for (e8.result !== null && e8.kind !== "scalar" && et(e8, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e8.kind + '"'), u = 0, d3 = e8.implicitTypes.length; u < d3; u += 1)
      if (g = e8.implicitTypes[u], g.resolve(e8.result)) {
        e8.result = g.construct(e8.result), e8.tag = g.tag, e8.anchor !== null && (e8.anchorMap[e8.anchor] = e8.result);
        break;
      }
  } else if (e8.tag !== "!") {
    if (Pe.call(e8.typeMap[e8.kind || "fallback"], e8.tag))
      g = e8.typeMap[e8.kind || "fallback"][e8.tag];
    else
      for (g = null, f = e8.typeMap.multi[e8.kind || "fallback"], u = 0, d3 = f.length; u < d3; u += 1)
        if (e8.tag.slice(0, f[u].tag.length) === f[u].tag) {
          g = f[u];
          break;
        }
    g || et(e8, "unknown tag !<" + e8.tag + ">"), e8.result !== null && g.kind !== e8.kind && et(e8, "unacceptable node kind for !<" + e8.tag + '> tag; it should be "' + g.kind + '", not "' + e8.kind + '"'), g.resolve(e8.result, e8.tag) ? (e8.result = g.construct(e8.result, e8.tag), e8.anchor !== null && (e8.anchorMap[e8.anchor] = e8.result)) : et(e8, "cannot resolve a node with !<" + e8.tag + "> explicit tag");
  }
  return e8.listener !== null && e8.listener("close", e8), e8.tag !== null || e8.anchor !== null || h;
}
p(ir, "composeNode");
function nu(e8) {
  var t = e8.position, r3, i, a, n = false, o;
  for (e8.version = null, e8.checkLineBreaks = e8.legacy, e8.tagMap = /* @__PURE__ */ Object.create(null), e8.anchorMap = /* @__PURE__ */ Object.create(null); (o = e8.input.charCodeAt(e8.position)) !== 0 && (kt(e8, true, -1), o = e8.input.charCodeAt(e8.position), !(e8.lineIndent > 0 || o !== 37)); ) {
    for (n = true, o = e8.input.charCodeAt(++e8.position), r3 = e8.position; o !== 0 && !jt(o); )
      o = e8.input.charCodeAt(++e8.position);
    for (i = e8.input.slice(r3, e8.position), a = [], i.length < 1 && et(e8, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; Ie(o); )
        o = e8.input.charCodeAt(++e8.position);
      if (o === 35) {
        do
          o = e8.input.charCodeAt(++e8.position);
        while (o !== 0 && !ce(o));
        break;
      }
      if (ce(o))
        break;
      for (r3 = e8.position; o !== 0 && !jt(o); )
        o = e8.input.charCodeAt(++e8.position);
      a.push(e8.input.slice(r3, e8.position));
    }
    o !== 0 && Va(e8), Pe.call(bl, i) ? bl[i](e8, i, a) : wi(e8, 'unknown document directive "' + i + '"');
  }
  if (kt(e8, true, -1), e8.lineIndent === 0 && e8.input.charCodeAt(e8.position) === 45 && e8.input.charCodeAt(e8.position + 1) === 45 && e8.input.charCodeAt(e8.position + 2) === 45 ? (e8.position += 3, kt(e8, true, -1)) : n && et(e8, "directives end mark is expected"), ir(e8, e8.lineIndent - 1, ka, false, true), kt(e8, true, -1), e8.checkLineBreaks && qy.test(e8.input.slice(t, e8.position)) && wi(e8, "non-ASCII line breaks are interpreted as content"), e8.documents.push(e8.result), e8.position === e8.lineStart && $i(e8)) {
    e8.input.charCodeAt(e8.position) === 46 && (e8.position += 3, kt(e8, true, -1));
    return;
  }
  if (e8.position < e8.length - 1)
    et(e8, "end of the stream or a document separator is expected");
  else
    return;
}
p(nu, "readDocument");
function Zs(e8, t) {
  e8 = String(e8), t = t || {}, e8.length !== 0 && (e8.charCodeAt(e8.length - 1) !== 10 && e8.charCodeAt(e8.length - 1) !== 13 && (e8 += `
`), e8.charCodeAt(0) === 65279 && (e8 = e8.slice(1)));
  var r3 = new Vh(e8, t), i = e8.indexOf("\0");
  for (i !== -1 && (r3.position = i, et(r3, "null byte is not allowed in input")), r3.input += "\0"; r3.input.charCodeAt(r3.position) === 32; )
    r3.lineIndent += 1, r3.position += 1;
  for (; r3.position < r3.length - 1; )
    nu(r3);
  return r3.documents;
}
p(Zs, "loadDocuments");
function jy(e8, t, r3) {
  t !== null && typeof t == "object" && typeof r3 > "u" && (r3 = t, t = null);
  var i = Zs(e8, r3);
  if (typeof t != "function")
    return i;
  for (var a = 0, n = i.length; a < n; a += 1)
    t(i[a]);
}
p(jy, "loadAll$1");
function su(e8, t) {
  var r3 = Zs(e8, t);
  if (r3.length !== 0) {
    if (r3.length === 1)
      return r3[0];
    throw new Qt("expected a single document in the stream, but found more");
  }
}
p(su, "load$1");
var Yy = su, Uy = {
  load: Yy
}, ou = Object.prototype.toString, lu = Object.prototype.hasOwnProperty, Ks = 65279, Gy = 9, _i = 10, Xy = 13, Vy = 32, Zy = 33, Ky = 34, os = 35, Qy = 37, Jy = 38, t0 = 39, e0 = 42, cu = 44, r0 = 45, wa = 58, i0 = 61, a0 = 62, n0 = 63, s0 = 64, hu = 91, uu = 93, o0 = 96, du = 123, l0 = 124, fu = 125, Wt = {};
Wt[0] = "\\0";
Wt[7] = "\\a";
Wt[8] = "\\b";
Wt[9] = "\\t";
Wt[10] = "\\n";
Wt[11] = "\\v";
Wt[12] = "\\f";
Wt[13] = "\\r";
Wt[27] = "\\e";
Wt[34] = '\\"';
Wt[92] = "\\\\";
Wt[133] = "\\N";
Wt[160] = "\\_";
Wt[8232] = "\\L";
Wt[8233] = "\\P";
var c0 = [
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
], h0 = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function pu(e8, t) {
  var r3, i, a, n, o, s, l;
  if (t === null)
    return {};
  for (r3 = {}, i = Object.keys(t), a = 0, n = i.length; a < n; a += 1)
    o = i[a], s = String(t[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), l = e8.compiledTypeMap.fallback[o], l && lu.call(l.styleAliases, s) && (s = l.styleAliases[s]), r3[o] = s;
  return r3;
}
p(pu, "compileStyleMap");
function gu(e8) {
  var t, r3, i;
  if (t = e8.toString(16).toUpperCase(), e8 <= 255)
    r3 = "x", i = 2;
  else if (e8 <= 65535)
    r3 = "u", i = 4;
  else if (e8 <= 4294967295)
    r3 = "U", i = 8;
  else
    throw new Qt("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r3 + Lt.repeat("0", i - t.length) + t;
}
p(gu, "encodeHex");
var u0 = 1, Si = 2;
function mu(e8) {
  this.schema = e8.schema || Ph, this.indent = Math.max(1, e8.indent || 2), this.noArrayIndent = e8.noArrayIndent || false, this.skipInvalid = e8.skipInvalid || false, this.flowLevel = Lt.isNothing(e8.flowLevel) ? -1 : e8.flowLevel, this.styleMap = pu(this.schema, e8.styles || null), this.sortKeys = e8.sortKeys || false, this.lineWidth = e8.lineWidth || 80, this.noRefs = e8.noRefs || false, this.noCompatMode = e8.noCompatMode || false, this.condenseFlow = e8.condenseFlow || false, this.quotingType = e8.quotingType === '"' ? Si : u0, this.forceQuotes = e8.forceQuotes || false, this.replacer = typeof e8.replacer == "function" ? e8.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
p(mu, "State");
function ls(e8, t) {
  for (var r3 = Lt.repeat(" ", t), i = 0, a = -1, n = "", o, s = e8.length; i < s; )
    a = e8.indexOf(`
`, i), a === -1 ? (o = e8.slice(i), i = s) : (o = e8.slice(i, a + 1), i = a + 1), o.length && o !== `
` && (n += r3), n += o;
  return n;
}
p(ls, "indentString");
function _a(e8, t) {
  return `
` + Lt.repeat(" ", e8.indent * t);
}
p(_a, "generateNextLine");
function yu(e8, t) {
  var r3, i, a;
  for (r3 = 0, i = e8.implicitTypes.length; r3 < i; r3 += 1)
    if (a = e8.implicitTypes[r3], a.resolve(t))
      return true;
  return false;
}
p(yu, "testImplicitResolving");
function Ti(e8) {
  return e8 === Vy || e8 === Gy;
}
p(Ti, "isWhitespace");
function zr(e8) {
  return 32 <= e8 && e8 <= 126 || 161 <= e8 && e8 <= 55295 && e8 !== 8232 && e8 !== 8233 || 57344 <= e8 && e8 <= 65533 && e8 !== Ks || 65536 <= e8 && e8 <= 1114111;
}
p(zr, "isPrintable");
function cs(e8) {
  return zr(e8) && e8 !== Ks && e8 !== Xy && e8 !== _i;
}
p(cs, "isNsCharOrWhitespace");
function hs(e8, t, r3) {
  var i = cs(e8), a = i && !Ti(e8);
  return (
    // ns-plain-safe
    (r3 ? (
      // c = flow-in
      i
    ) : i && e8 !== cu && e8 !== hu && e8 !== uu && e8 !== du && e8 !== fu) && e8 !== os && !(t === wa && !a) || cs(t) && !Ti(t) && e8 === os || t === wa && a
  );
}
p(hs, "isPlainSafe");
function xu(e8) {
  return zr(e8) && e8 !== Ks && !Ti(e8) && e8 !== r0 && e8 !== n0 && e8 !== wa && e8 !== cu && e8 !== hu && e8 !== uu && e8 !== du && e8 !== fu && e8 !== os && e8 !== Jy && e8 !== e0 && e8 !== Zy && e8 !== l0 && e8 !== i0 && e8 !== a0 && e8 !== t0 && e8 !== Ky && e8 !== Qy && e8 !== s0 && e8 !== o0;
}
p(xu, "isPlainSafeFirst");
function bu(e8) {
  return !Ti(e8) && e8 !== wa;
}
p(bu, "isPlainSafeLast");
function kr(e8, t) {
  var r3 = e8.charCodeAt(t), i;
  return r3 >= 55296 && r3 <= 56319 && t + 1 < e8.length && (i = e8.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r3 - 55296) * 1024 + i - 56320 + 65536 : r3;
}
p(kr, "codePointAt");
function Qs(e8) {
  var t = /^\n* /;
  return t.test(e8);
}
p(Qs, "needIndentIndicator");
var Cu = 1, us = 2, vu = 3, ku = 4, Cr = 5;
function wu(e8, t, r3, i, a, n, o, s) {
  var l, c = 0, h = null, u = false, d3 = false, f = i !== -1, g = -1, m = xu(kr(e8, 0)) && bu(kr(e8, e8.length - 1));
  if (t || o)
    for (l = 0; l < e8.length; c >= 65536 ? l += 2 : l++) {
      if (c = kr(e8, l), !zr(c))
        return Cr;
      m = m && hs(c, h, s), h = c;
    }
  else {
    for (l = 0; l < e8.length; c >= 65536 ? l += 2 : l++) {
      if (c = kr(e8, l), c === _i)
        u = true, f && (d3 = d3 || // Foldable line = too long, and not more-indented.
        l - g - 1 > i && e8[g + 1] !== " ", g = l);
      else if (!zr(c))
        return Cr;
      m = m && hs(c, h, s), h = c;
    }
    d3 = d3 || f && l - g - 1 > i && e8[g + 1] !== " ";
  }
  return !u && !d3 ? m && !o && !a(e8) ? Cu : n === Si ? Cr : us : r3 > 9 && Qs(e8) ? Cr : o ? n === Si ? Cr : us : d3 ? ku : vu;
}
p(wu, "chooseScalarStyle");
function _u(e8, t, r3, i, a) {
  e8.dump = function() {
    if (t.length === 0)
      return e8.quotingType === Si ? '""' : "''";
    if (!e8.noCompatMode && (c0.indexOf(t) !== -1 || h0.test(t)))
      return e8.quotingType === Si ? '"' + t + '"' : "'" + t + "'";
    var n = e8.indent * Math.max(1, r3), o = e8.lineWidth === -1 ? -1 : Math.max(Math.min(e8.lineWidth, 40), e8.lineWidth - n), s = i || e8.flowLevel > -1 && r3 >= e8.flowLevel;
    function l(c) {
      return yu(e8, c);
    }
    switch (p(l, "testAmbiguity"), wu(
      t,
      s,
      e8.indent,
      o,
      l,
      e8.quotingType,
      e8.forceQuotes && !i,
      a
    )) {
      case Cu:
        return t;
      case us:
        return "'" + t.replace(/'/g, "''") + "'";
      case vu:
        return "|" + ds(t, e8.indent) + fs(ls(t, n));
      case ku:
        return ">" + ds(t, e8.indent) + fs(ls(Su(t, o), n));
      case Cr:
        return '"' + Tu(t) + '"';
      default:
        throw new Qt("impossible error: invalid scalar style");
    }
  }();
}
p(_u, "writeScalar");
function ds(e8, t) {
  var r3 = Qs(e8) ? String(t) : "", i = e8[e8.length - 1] === `
`, a = i && (e8[e8.length - 2] === `
` || e8 === `
`), n = a ? "+" : i ? "" : "-";
  return r3 + n + `
`;
}
p(ds, "blockHeader");
function fs(e8) {
  return e8[e8.length - 1] === `
` ? e8.slice(0, -1) : e8;
}
p(fs, "dropEndingNewline");
function Su(e8, t) {
  for (var r3 = /(\n+)([^\n]*)/g, i = function() {
    var c = e8.indexOf(`
`);
    return c = c !== -1 ? c : e8.length, r3.lastIndex = c, ps(e8.slice(0, c), t);
  }(), a = e8[0] === `
` || e8[0] === " ", n, o; o = r3.exec(e8); ) {
    var s = o[1], l = o[2];
    n = l[0] === " ", i += s + (!a && !n && l !== "" ? `
` : "") + ps(l, t), a = n;
  }
  return i;
}
p(Su, "foldString");
function ps(e8, t) {
  if (e8 === "" || e8[0] === " ")
    return e8;
  for (var r3 = / [^ ]/g, i, a = 0, n, o = 0, s = 0, l = ""; i = r3.exec(e8); )
    s = i.index, s - a > t && (n = o > a ? o : s, l += `
` + e8.slice(a, n), a = n + 1), o = s;
  return l += `
`, e8.length - a > t && o > a ? l += e8.slice(a, o) + `
` + e8.slice(o + 1) : l += e8.slice(a), l.slice(1);
}
p(ps, "foldLine");
function Tu(e8) {
  for (var t = "", r3 = 0, i, a = 0; a < e8.length; r3 >= 65536 ? a += 2 : a++)
    r3 = kr(e8, a), i = Wt[r3], !i && zr(r3) ? (t += e8[a], r3 >= 65536 && (t += e8[a + 1])) : t += i || gu(r3);
  return t;
}
p(Tu, "escapeString");
function Bu(e8, t, r3) {
  var i = "", a = e8.tag, n, o, s;
  for (n = 0, o = r3.length; n < o; n += 1)
    s = r3[n], e8.replacer && (s = e8.replacer.call(r3, String(n), s)), (ye(e8, t, s, false, false) || typeof s > "u" && ye(e8, t, null, false, false)) && (i !== "" && (i += "," + (e8.condenseFlow ? "" : " ")), i += e8.dump);
  e8.tag = a, e8.dump = "[" + i + "]";
}
p(Bu, "writeFlowSequence");
function gs(e8, t, r3, i) {
  var a = "", n = e8.tag, o, s, l;
  for (o = 0, s = r3.length; o < s; o += 1)
    l = r3[o], e8.replacer && (l = e8.replacer.call(r3, String(o), l)), (ye(e8, t + 1, l, true, true, false, true) || typeof l > "u" && ye(e8, t + 1, null, true, true, false, true)) && ((!i || a !== "") && (a += _a(e8, t)), e8.dump && _i === e8.dump.charCodeAt(0) ? a += "-" : a += "- ", a += e8.dump);
  e8.tag = n, e8.dump = a || "[]";
}
p(gs, "writeBlockSequence");
function Lu(e8, t, r3) {
  var i = "", a = e8.tag, n = Object.keys(r3), o, s, l, c, h;
  for (o = 0, s = n.length; o < s; o += 1)
    h = "", i !== "" && (h += ", "), e8.condenseFlow && (h += '"'), l = n[o], c = r3[l], e8.replacer && (c = e8.replacer.call(r3, l, c)), ye(e8, t, l, false, false) && (e8.dump.length > 1024 && (h += "? "), h += e8.dump + (e8.condenseFlow ? '"' : "") + ":" + (e8.condenseFlow ? "" : " "), ye(e8, t, c, false, false) && (h += e8.dump, i += h));
  e8.tag = a, e8.dump = "{" + i + "}";
}
p(Lu, "writeFlowMapping");
function Au(e8, t, r3, i) {
  var a = "", n = e8.tag, o = Object.keys(r3), s, l, c, h, u, d3;
  if (e8.sortKeys === true)
    o.sort();
  else if (typeof e8.sortKeys == "function")
    o.sort(e8.sortKeys);
  else if (e8.sortKeys)
    throw new Qt("sortKeys must be a boolean or a function");
  for (s = 0, l = o.length; s < l; s += 1)
    d3 = "", (!i || a !== "") && (d3 += _a(e8, t)), c = o[s], h = r3[c], e8.replacer && (h = e8.replacer.call(r3, c, h)), ye(e8, t + 1, c, true, true, true) && (u = e8.tag !== null && e8.tag !== "?" || e8.dump && e8.dump.length > 1024, u && (e8.dump && _i === e8.dump.charCodeAt(0) ? d3 += "?" : d3 += "? "), d3 += e8.dump, u && (d3 += _a(e8, t)), ye(e8, t + 1, h, true, u) && (e8.dump && _i === e8.dump.charCodeAt(0) ? d3 += ":" : d3 += ": ", d3 += e8.dump, a += d3));
  e8.tag = n, e8.dump = a || "{}";
}
p(Au, "writeBlockMapping");
function ms(e8, t, r3) {
  var i, a, n, o, s, l;
  for (a = r3 ? e8.explicitTypes : e8.implicitTypes, n = 0, o = a.length; n < o; n += 1)
    if (s = a[n], (s.instanceOf || s.predicate) && (!s.instanceOf || typeof t == "object" && t instanceof s.instanceOf) && (!s.predicate || s.predicate(t))) {
      if (r3 ? s.multi && s.representName ? e8.tag = s.representName(t) : e8.tag = s.tag : e8.tag = "?", s.represent) {
        if (l = e8.styleMap[s.tag] || s.defaultStyle, ou.call(s.represent) === "[object Function]")
          i = s.represent(t, l);
        else if (lu.call(s.represent, l))
          i = s.represent[l](t, l);
        else
          throw new Qt("!<" + s.tag + '> tag resolver accepts not "' + l + '" style');
        e8.dump = i;
      }
      return true;
    }
  return false;
}
p(ms, "detectType");
function ye(e8, t, r3, i, a, n, o) {
  e8.tag = null, e8.dump = r3, ms(e8, r3, false) || ms(e8, r3, true);
  var s = ou.call(e8.dump), l = i, c;
  i && (i = e8.flowLevel < 0 || e8.flowLevel > t);
  var h = s === "[object Object]" || s === "[object Array]", u, d3;
  if (h && (u = e8.duplicates.indexOf(r3), d3 = u !== -1), (e8.tag !== null && e8.tag !== "?" || d3 || e8.indent !== 2 && t > 0) && (a = false), d3 && e8.usedDuplicates[u])
    e8.dump = "*ref_" + u;
  else {
    if (h && d3 && !e8.usedDuplicates[u] && (e8.usedDuplicates[u] = true), s === "[object Object]")
      i && Object.keys(e8.dump).length !== 0 ? (Au(e8, t, e8.dump, a), d3 && (e8.dump = "&ref_" + u + e8.dump)) : (Lu(e8, t, e8.dump), d3 && (e8.dump = "&ref_" + u + " " + e8.dump));
    else if (s === "[object Array]")
      i && e8.dump.length !== 0 ? (e8.noArrayIndent && !o && t > 0 ? gs(e8, t - 1, e8.dump, a) : gs(e8, t, e8.dump, a), d3 && (e8.dump = "&ref_" + u + e8.dump)) : (Bu(e8, t, e8.dump), d3 && (e8.dump = "&ref_" + u + " " + e8.dump));
    else if (s === "[object String]")
      e8.tag !== "?" && _u(e8, e8.dump, t, n, l);
    else {
      if (s === "[object Undefined]")
        return false;
      if (e8.skipInvalid)
        return false;
      throw new Qt("unacceptable kind of an object to dump " + s);
    }
    e8.tag !== null && e8.tag !== "?" && (c = encodeURI(
      e8.tag[0] === "!" ? e8.tag.slice(1) : e8.tag
    ).replace(/!/g, "%21"), e8.tag[0] === "!" ? c = "!" + c : c.slice(0, 18) === "tag:yaml.org,2002:" ? c = "!!" + c.slice(18) : c = "!<" + c + ">", e8.dump = c + " " + e8.dump);
  }
  return true;
}
p(ye, "writeNode");
function Mu(e8, t) {
  var r3 = [], i = [], a, n;
  for (Sa(e8, r3, i), a = 0, n = i.length; a < n; a += 1)
    t.duplicates.push(r3[i[a]]);
  t.usedDuplicates = new Array(n);
}
p(Mu, "getDuplicateReferences");
function Sa(e8, t, r3) {
  var i, a, n;
  if (e8 !== null && typeof e8 == "object")
    if (a = t.indexOf(e8), a !== -1)
      r3.indexOf(a) === -1 && r3.push(a);
    else if (t.push(e8), Array.isArray(e8))
      for (a = 0, n = e8.length; a < n; a += 1)
        Sa(e8[a], t, r3);
    else
      for (i = Object.keys(e8), a = 0, n = i.length; a < n; a += 1)
        Sa(e8[i[a]], t, r3);
}
p(Sa, "inspectNode");
function d0(e8, t) {
  t = t || {};
  var r3 = new mu(t);
  r3.noRefs || Mu(e8, r3);
  var i = e8;
  return r3.replacer && (i = r3.replacer.call({ "": i }, "", i)), ye(r3, 0, i, true, true) ? r3.dump + `
` : "";
}
p(d0, "dump$1");
function f0(e8, t) {
  return function() {
    throw new Error("Function yaml." + e8 + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
  };
}
p(f0, "renamed");
var p0 = vh, g0 = Uy.load;
/*! Bundled license information:

js-yaml/dist/js-yaml.mjs:
  (*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT *)
*/
var ae = {
  aggregation: 18,
  extension: 18,
  composition: 18,
  dependency: 6,
  lollipop: 13.5,
  arrow_point: 4
};
function pi(e8, t) {
  if (e8 === void 0 || t === void 0)
    return { angle: 0, deltaX: 0, deltaY: 0 };
  e8 = Ct(e8), t = Ct(t);
  const [r3, i] = [e8.x, e8.y], [a, n] = [t.x, t.y], o = a - r3, s = n - i;
  return { angle: Math.atan(s / o), deltaX: o, deltaY: s };
}
p(pi, "calculateDeltaAndAngle");
var Ct = /* @__PURE__ */ p((e8) => Array.isArray(e8) ? { x: e8[0], y: e8[1] } : e8, "pointTransformer"), m0 = /* @__PURE__ */ p((e8) => ({
  x: /* @__PURE__ */ p(function(t, r3, i) {
    let a = 0;
    const n = Ct(i[0]).x < Ct(i[i.length - 1]).x ? "left" : "right";
    if (r3 === 0 && Object.hasOwn(ae, e8.arrowTypeStart)) {
      const { angle: f, deltaX: g } = pi(i[0], i[1]);
      a = ae[e8.arrowTypeStart] * Math.cos(f) * (g >= 0 ? 1 : -1);
    } else if (r3 === i.length - 1 && Object.hasOwn(ae, e8.arrowTypeEnd)) {
      const { angle: f, deltaX: g } = pi(
        i[i.length - 1],
        i[i.length - 2]
      );
      a = ae[e8.arrowTypeEnd] * Math.cos(f) * (g >= 0 ? 1 : -1);
    }
    const o = Math.abs(
      Ct(t).x - Ct(i[i.length - 1]).x
    ), s = Math.abs(
      Ct(t).y - Ct(i[i.length - 1]).y
    ), l = Math.abs(Ct(t).x - Ct(i[0]).x), c = Math.abs(Ct(t).y - Ct(i[0]).y), h = ae[e8.arrowTypeStart], u = ae[e8.arrowTypeEnd], d3 = 1;
    if (o < u && o > 0 && s < u) {
      let f = u + d3 - o;
      f *= n === "right" ? -1 : 1, a -= f;
    }
    if (l < h && l > 0 && c < h) {
      let f = h + d3 - l;
      f *= n === "right" ? -1 : 1, a += f;
    }
    return Ct(t).x + a;
  }, "x"),
  y: /* @__PURE__ */ p(function(t, r3, i) {
    let a = 0;
    const n = Ct(i[0]).y < Ct(i[i.length - 1]).y ? "down" : "up";
    if (r3 === 0 && Object.hasOwn(ae, e8.arrowTypeStart)) {
      const { angle: f, deltaY: g } = pi(i[0], i[1]);
      a = ae[e8.arrowTypeStart] * Math.abs(Math.sin(f)) * (g >= 0 ? 1 : -1);
    } else if (r3 === i.length - 1 && Object.hasOwn(ae, e8.arrowTypeEnd)) {
      const { angle: f, deltaY: g } = pi(
        i[i.length - 1],
        i[i.length - 2]
      );
      a = ae[e8.arrowTypeEnd] * Math.abs(Math.sin(f)) * (g >= 0 ? 1 : -1);
    }
    const o = Math.abs(
      Ct(t).y - Ct(i[i.length - 1]).y
    ), s = Math.abs(
      Ct(t).x - Ct(i[i.length - 1]).x
    ), l = Math.abs(Ct(t).y - Ct(i[0]).y), c = Math.abs(Ct(t).x - Ct(i[0]).x), h = ae[e8.arrowTypeStart], u = ae[e8.arrowTypeEnd], d3 = 1;
    if (o < u && o > 0 && s < u) {
      let f = u + d3 - o;
      f *= n === "up" ? -1 : 1, a -= f;
    }
    if (l < h && l > 0 && c < h) {
      let f = h + d3 - l;
      f *= n === "up" ? -1 : 1, a += f;
    }
    return Ct(t).y + a;
  }, "y")
}), "getLineFunctionsWithOffset"), Js = /* @__PURE__ */ p(({
  flowchart: e8
}) => {
  var a, n;
  const t = ((a = e8 == null ? void 0 : e8.subGraphTitleMargin) == null ? void 0 : a.top) ?? 0, r3 = ((n = e8 == null ? void 0 : e8.subGraphTitleMargin) == null ? void 0 : n.bottom) ?? 0, i = t + r3;
  return {
    subGraphTitleTopMargin: t,
    subGraphTitleBottomMargin: r3,
    subGraphTitleTotalMargin: i
  };
}, "getSubGraphTitleMargins");
const y0 = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Ta = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
}), Eu = Object.freeze({
  ...y0,
  ...Ta
}), x0 = Object.freeze({
  ...Eu,
  body: "",
  hidden: false
}), b0 = Object.freeze({
  width: null,
  height: null
}), C0 = Object.freeze({
  // Dimensions
  ...b0,
  // Transformations
  ...Ta
}), v0 = (e8, t, r3, i = "") => {
  const a = e8.split(":");
  if (e8.slice(0, 1) === "@") {
    if (a.length < 2 || a.length > 3)
      return null;
    i = a.shift().slice(1);
  }
  if (a.length > 3 || !a.length)
    return null;
  if (a.length > 1) {
    const s = a.pop(), l = a.pop(), c = {
      // Allow provider without '@': "provider:prefix:name"
      provider: a.length > 0 ? a[0] : i,
      prefix: l,
      name: s
    };
    return Fn(c) ? c : null;
  }
  const n = a[0], o = n.split("-");
  if (o.length > 1) {
    const s = {
      provider: i,
      prefix: o.shift(),
      name: o.join("-")
    };
    return Fn(s) ? s : null;
  }
  if (r3 && i === "") {
    const s = {
      provider: i,
      prefix: "",
      name: n
    };
    return Fn(s, r3) ? s : null;
  }
  return null;
}, Fn = (e8, t) => e8 ? !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
// Check name: cannot be empty
((t && e8.prefix === "" || e8.prefix) && e8.name) : false;
function k0(e8, t) {
  const r3 = {};
  !e8.hFlip != !t.hFlip && (r3.hFlip = true), !e8.vFlip != !t.vFlip && (r3.vFlip = true);
  const i = ((e8.rotate || 0) + (t.rotate || 0)) % 4;
  return i && (r3.rotate = i), r3;
}
function Cl(e8, t) {
  const r3 = k0(e8, t);
  for (const i in x0)
    i in Ta ? i in e8 && !(i in r3) && (r3[i] = Ta[i]) : i in t ? r3[i] = t[i] : i in e8 && (r3[i] = e8[i]);
  return r3;
}
function w0(e8, t) {
  const r3 = e8.icons, i = e8.aliases || /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  function n(o) {
    if (r3[o])
      return a[o] = [];
    if (!(o in a)) {
      a[o] = null;
      const s = i[o] && i[o].parent, l = s && n(s);
      l && (a[o] = [s].concat(l));
    }
    return a[o];
  }
  return (t || Object.keys(r3).concat(Object.keys(i))).forEach(n), a;
}
function vl(e8, t, r3) {
  const i = e8.icons, a = e8.aliases || /* @__PURE__ */ Object.create(null);
  let n = {};
  function o(s) {
    n = Cl(
      i[s] || a[s],
      n
    );
  }
  return o(t), r3.forEach(o), Cl(e8, n);
}
function _0(e8, t) {
  if (e8.icons[t])
    return vl(e8, t, []);
  const r3 = w0(e8, [t])[t];
  return r3 ? vl(e8, t, r3) : null;
}
const S0 = /(-?[0-9.]*[0-9]+[0-9.]*)/g, T0 = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function kl(e8, t, r3) {
  if (t === 1)
    return e8;
  if (r3 = r3 || 100, typeof e8 == "number")
    return Math.ceil(e8 * t * r3) / r3;
  if (typeof e8 != "string")
    return e8;
  const i = e8.split(S0);
  if (i === null || !i.length)
    return e8;
  const a = [];
  let n = i.shift(), o = T0.test(n);
  for (; ; ) {
    if (o) {
      const s = parseFloat(n);
      isNaN(s) ? a.push(n) : a.push(Math.ceil(s * t * r3) / r3);
    } else
      a.push(n);
    if (n = i.shift(), n === void 0)
      return a.join("");
    o = !o;
  }
}
function B0(e8, t = "defs") {
  let r3 = "";
  const i = e8.indexOf("<" + t);
  for (; i >= 0; ) {
    const a = e8.indexOf(">", i), n = e8.indexOf("</" + t);
    if (a === -1 || n === -1)
      break;
    const o = e8.indexOf(">", n);
    if (o === -1)
      break;
    r3 += e8.slice(a + 1, n).trim(), e8 = e8.slice(0, i).trim() + e8.slice(o + 1);
  }
  return {
    defs: r3,
    content: e8
  };
}
function L0(e8, t) {
  return e8 ? "<defs>" + e8 + "</defs>" + t : t;
}
function A0(e8, t, r3) {
  const i = B0(e8);
  return L0(i.defs, t + i.content + r3);
}
const M0 = (e8) => e8 === "unset" || e8 === "undefined" || e8 === "none";
function E0(e8, t) {
  const r3 = {
    ...Eu,
    ...e8
  }, i = {
    ...C0,
    ...t
  }, a = {
    left: r3.left,
    top: r3.top,
    width: r3.width,
    height: r3.height
  };
  let n = r3.body;
  [r3, i].forEach((m) => {
    const y = [], x = m.hFlip, b = m.vFlip;
    let v = m.rotate;
    x ? b ? v += 2 : (y.push(
      "translate(" + (a.width + a.left).toString() + " " + (0 - a.top).toString() + ")"
    ), y.push("scale(-1 1)"), a.top = a.left = 0) : b && (y.push(
      "translate(" + (0 - a.left).toString() + " " + (a.height + a.top).toString() + ")"
    ), y.push("scale(1 -1)"), a.top = a.left = 0);
    let S;
    switch (v < 0 && (v -= Math.floor(v / 4) * 4), v = v % 4, v) {
      case 1:
        S = a.height / 2 + a.top, y.unshift(
          "rotate(90 " + S.toString() + " " + S.toString() + ")"
        );
        break;
      case 2:
        y.unshift(
          "rotate(180 " + (a.width / 2 + a.left).toString() + " " + (a.height / 2 + a.top).toString() + ")"
        );
        break;
      case 3:
        S = a.width / 2 + a.left, y.unshift(
          "rotate(-90 " + S.toString() + " " + S.toString() + ")"
        );
        break;
    }
    v % 2 === 1 && (a.left !== a.top && (S = a.left, a.left = a.top, a.top = S), a.width !== a.height && (S = a.width, a.width = a.height, a.height = S)), y.length && (n = A0(
      n,
      '<g transform="' + y.join(" ") + '">',
      "</g>"
    ));
  });
  const o = i.width, s = i.height, l = a.width, c = a.height;
  let h, u;
  o === null ? (u = s === null ? "1em" : s === "auto" ? c : s, h = kl(u, l / c)) : (h = o === "auto" ? l : o, u = s === null ? kl(h, c / l) : s === "auto" ? c : s);
  const d3 = {}, f = (m, y) => {
    M0(y) || (d3[m] = y.toString());
  };
  f("width", h), f("height", u);
  const g = [a.left, a.top, l, c];
  return d3.viewBox = g.join(" "), {
    attributes: d3,
    viewBox: g,
    body: n
  };
}
const F0 = /\sid="(\S+)"/g, O0 = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let $0 = 0;
function D0(e8, t = O0) {
  const r3 = [];
  let i;
  for (; i = F0.exec(e8); )
    r3.push(i[1]);
  if (!r3.length)
    return e8;
  const a = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return r3.forEach((n) => {
    const o = typeof t == "function" ? t(n) : t + ($0++).toString(), s = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e8 = e8.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + s + ')([")]|\\.[a-z])', "g"),
      "$1" + o + a + "$3"
    );
  }), e8 = e8.replace(new RegExp(a, "g"), ""), e8;
}
function R0(e8, t) {
  let r3 = e8.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in t)
    r3 += " " + i + '="' + t[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + r3 + ">" + e8 + "</svg>";
}
var I0 = {
  body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
  height: 80,
  width: 80
}, ys = /* @__PURE__ */ new Map(), Fu = /* @__PURE__ */ new Map(), P0 = /* @__PURE__ */ p((e8) => {
  for (const t of e8) {
    if (!t.name)
      throw new Error(
        'Invalid icon loader. Must have a "name" property with non-empty string value.'
      );
    if (D.debug("Registering icon pack:", t.name), "loader" in t)
      Fu.set(t.name, t.loader);
    else if ("icons" in t)
      ys.set(t.name, t.icons);
    else
      throw D.error("Invalid icon loader:", t), new Error('Invalid icon loader. Must have either "icons" or "loader" property.');
  }
}, "registerIconPacks"), N0 = /* @__PURE__ */ p(async (e8, t) => {
  const r3 = v0(e8, true, t !== void 0);
  if (!r3)
    throw new Error(`Invalid icon name: ${e8}`);
  const i = r3.prefix || t;
  if (!i)
    throw new Error(`Icon name must contain a prefix: ${e8}`);
  let a = ys.get(i);
  if (!a) {
    const o = Fu.get(i);
    if (!o)
      throw new Error(`Icon set not found: ${r3.prefix}`);
    try {
      a = { ...await o(), prefix: i }, ys.set(i, a);
    } catch (s) {
      throw D.error(s), new Error(`Failed to load icon set: ${r3.prefix}`);
    }
  }
  const n = _0(a, r3.name);
  if (!n)
    throw new Error(`Icon not found: ${e8}`);
  return n;
}, "getRegisteredIconData"), Ka = /* @__PURE__ */ p(async (e8, t) => {
  let r3;
  try {
    r3 = await N0(e8, t == null ? void 0 : t.fallbackPrefix);
  } catch (n) {
    D.error(n), r3 = I0;
  }
  const i = E0(r3, t);
  return R0(D0(i.body), i.attributes);
}, "getIconSVG"), si = {}, Tt = {}, wl;
function z0() {
  return wl || (wl = 1, Object.defineProperty(Tt, "__esModule", { value: true }), Tt.BLANK_URL = Tt.relativeFirstCharacters = Tt.whitespaceEscapeCharsRegex = Tt.urlSchemeRegex = Tt.ctrlCharactersRegex = Tt.htmlCtrlEntityRegex = Tt.htmlEntitiesRegex = Tt.invalidProtocolRegex = void 0, Tt.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im, Tt.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g, Tt.htmlCtrlEntityRegex = /&(newline|tab);/gi, Tt.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, Tt.urlSchemeRegex = /^.+(:|&colon;)/gim, Tt.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g, Tt.relativeFirstCharacters = [".", "/"], Tt.BLANK_URL = "about:blank"), Tt;
}
var _l;
function W0() {
  if (_l)
    return si;
  _l = 1, Object.defineProperty(si, "__esModule", { value: true }), si.sanitizeUrl = void 0;
  var e8 = z0();
  function t(o) {
    return e8.relativeFirstCharacters.indexOf(o[0]) > -1;
  }
  function r3(o) {
    var s = o.replace(e8.ctrlCharactersRegex, "");
    return s.replace(e8.htmlEntitiesRegex, function(l, c) {
      return String.fromCharCode(c);
    });
  }
  function i(o) {
    return URL.canParse(o);
  }
  function a(o) {
    try {
      return decodeURIComponent(o);
    } catch {
      return o;
    }
  }
  function n(o) {
    if (!o)
      return e8.BLANK_URL;
    var s, l = a(o.trim());
    do
      l = r3(l).replace(e8.htmlCtrlEntityRegex, "").replace(e8.ctrlCharactersRegex, "").replace(e8.whitespaceEscapeCharsRegex, "").trim(), l = a(l), s = l.match(e8.ctrlCharactersRegex) || l.match(e8.htmlEntitiesRegex) || l.match(e8.htmlCtrlEntityRegex) || l.match(e8.whitespaceEscapeCharsRegex);
    while (s && s.length > 0);
    var c = l;
    if (!c)
      return e8.BLANK_URL;
    if (t(c))
      return c;
    var h = c.trimStart(), u = h.match(e8.urlSchemeRegex);
    if (!u)
      return c;
    var d3 = u[0].toLowerCase().trim();
    if (e8.invalidProtocolRegex.test(d3))
      return e8.BLANK_URL;
    var f = h.replace(/\\/g, "/");
    if (d3 === "mailto:" || d3.includes("://"))
      return f;
    if (d3 === "http:" || d3 === "https:") {
      if (!i(f))
        return e8.BLANK_URL;
      var g = new URL(f);
      return g.protocol = g.protocol.toLowerCase(), g.hostname = g.hostname.toLowerCase(), g.toString();
    }
    return f;
  }
  return si.sanitizeUrl = n, si;
}
var q0 = W0();
const R_ = Math.abs, I_ = Math.atan2, P_ = Math.cos, N_ = Math.max, z_ = Math.min, W_ = Math.sin, q_ = Math.sqrt, Sl = 1e-12, to = Math.PI, Tl = to / 2, H_ = 2 * to;
function j_(e8) {
  return e8 > 1 ? 0 : e8 < -1 ? to : Math.acos(e8);
}
function Y_(e8) {
  return e8 >= 1 ? Tl : e8 <= -1 ? -Tl : Math.asin(e8);
}
function Ou(e8) {
  this._context = e8;
}
Ou.prototype = {
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
  point: function(e8, t) {
    switch (e8 = +e8, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e8, t) : this._context.moveTo(e8, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e8, t);
        break;
    }
  }
};
function Ba(e8) {
  return new Ou(e8);
}
function H0(e8, t) {
  var r3 = Hi(true), i = null, a = Ba, n = null, o = Xi$1(s);
  e8 = typeof e8 == "function" ? e8 : e8 === void 0 ? Vi$1 : Hi(e8), t = typeof t == "function" ? t : t === void 0 ? Bi$1 : Hi(t);
  function s(l) {
    var c, h = (l = zi(l)).length, u, d3 = false, f;
    for (i == null && (n = a(f = o())), c = 0; c <= h; ++c)
      !(c < h && r3(u = l[c], c, l)) === d3 && ((d3 = !d3) ? n.lineStart() : n.lineEnd()), d3 && n.point(+e8(u, c, l), +t(u, c, l));
    if (f)
      return n = null, f + "" || null;
  }
  return s.x = function(l) {
    return arguments.length ? (e8 = typeof l == "function" ? l : Hi(+l), s) : e8;
  }, s.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Hi(+l), s) : t;
  }, s.defined = function(l) {
    return arguments.length ? (r3 = typeof l == "function" ? l : Hi(!!l), s) : r3;
  }, s.curve = function(l) {
    return arguments.length ? (a = l, i != null && (n = a(i)), s) : a;
  }, s.context = function(l) {
    return arguments.length ? (l == null ? i = n = null : n = a(i = l), s) : i;
  }, s;
}
function Ne() {
}
function La(e8, t, r3) {
  e8._context.bezierCurveTo(
    (2 * e8._x0 + e8._x1) / 3,
    (2 * e8._y0 + e8._y1) / 3,
    (e8._x0 + 2 * e8._x1) / 3,
    (e8._y0 + 2 * e8._y1) / 3,
    (e8._x0 + 4 * e8._x1 + t) / 6,
    (e8._y0 + 4 * e8._y1 + r3) / 6
  );
}
function Qa(e8) {
  this._context = e8;
}
Qa.prototype = {
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
        La(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e8, t) {
    switch (e8 = +e8, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e8, t) : this._context.moveTo(e8, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        La(this, e8, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e8, this._y0 = this._y1, this._y1 = t;
  }
};
function ca(e8) {
  return new Qa(e8);
}
function $u(e8) {
  this._context = e8;
}
$u.prototype = {
  areaStart: Ne,
  areaEnd: Ne,
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
  point: function(e8, t) {
    switch (e8 = +e8, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e8, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e8, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e8, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e8) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        La(this, e8, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e8, this._y0 = this._y1, this._y1 = t;
  }
};
function j0(e8) {
  return new $u(e8);
}
function Du(e8) {
  this._context = e8;
}
Du.prototype = {
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
  point: function(e8, t) {
    switch (e8 = +e8, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r3 = (this._x0 + 4 * this._x1 + e8) / 6, i = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r3, i) : this._context.moveTo(r3, i);
        break;
      case 3:
        this._point = 4;
      default:
        La(this, e8, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e8, this._y0 = this._y1, this._y1 = t;
  }
};
function Y0(e8) {
  return new Du(e8);
}
function Ru(e8, t) {
  this._basis = new Qa(e8), this._beta = t;
}
Ru.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e8 = this._x, t = this._y, r3 = e8.length - 1;
    if (r3 > 0)
      for (var i = e8[0], a = t[0], n = e8[r3] - i, o = t[r3] - a, s = -1, l; ++s <= r3; )
        l = s / r3, this._basis.point(
          this._beta * e8[s] + (1 - this._beta) * (i + l * n),
          this._beta * t[s] + (1 - this._beta) * (a + l * o)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e8, t) {
    this._x.push(+e8), this._y.push(+t);
  }
};
const U0 = function e(t) {
  function r3(i) {
    return t === 1 ? new Qa(i) : new Ru(i, t);
  }
  return r3.beta = function(i) {
    return e(+i);
  }, r3;
}(0.85);
function Aa(e8, t, r3) {
  e8._context.bezierCurveTo(
    e8._x1 + e8._k * (e8._x2 - e8._x0),
    e8._y1 + e8._k * (e8._y2 - e8._y0),
    e8._x2 + e8._k * (e8._x1 - t),
    e8._y2 + e8._k * (e8._y1 - r3),
    e8._x2,
    e8._y2
  );
}
function eo(e8, t) {
  this._context = e8, this._k = (1 - t) / 6;
}
eo.prototype = {
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
        Aa(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e8, t) {
    switch (e8 = +e8, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e8, t) : this._context.moveTo(e8, t);
        break;
      case 1:
        this._point = 2, this._x1 = e8, this._y1 = t;
        break;
      case 2:
        this._point = 3;
      default:
        Aa(this, e8, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Iu = function e2(t) {
  function r3(i) {
    return new eo(i, t);
  }
  return r3.tension = function(i) {
    return e2(+i);
  }, r3;
}(0);
function ro(e8, t) {
  this._context = e8, this._k = (1 - t) / 6;
}
ro.prototype = {
  areaStart: Ne,
  areaEnd: Ne,
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
  point: function(e8, t) {
    switch (e8 = +e8, t = +t, this._point) {
      case 0:
        this._point = 1, this._x3 = e8, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e8, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e8, this._y5 = t;
        break;
      default:
        Aa(this, e8, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const G0 = function e3(t) {
  function r3(i) {
    return new ro(i, t);
  }
  return r3.tension = function(i) {
    return e3(+i);
  }, r3;
}(0);
function io(e8, t) {
  this._context = e8, this._k = (1 - t) / 6;
}
io.prototype = {
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
  point: function(e8, t) {
    switch (e8 = +e8, t = +t, this._point) {
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
        Aa(this, e8, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const X0 = function e4(t) {
  function r3(i) {
    return new io(i, t);
  }
  return r3.tension = function(i) {
    return e4(+i);
  }, r3;
}(0);
function ao(e8, t, r3) {
  var i = e8._x1, a = e8._y1, n = e8._x2, o = e8._y2;
  if (e8._l01_a > Sl) {
    var s = 2 * e8._l01_2a + 3 * e8._l01_a * e8._l12_a + e8._l12_2a, l = 3 * e8._l01_a * (e8._l01_a + e8._l12_a);
    i = (i * s - e8._x0 * e8._l12_2a + e8._x2 * e8._l01_2a) / l, a = (a * s - e8._y0 * e8._l12_2a + e8._y2 * e8._l01_2a) / l;
  }
  if (e8._l23_a > Sl) {
    var c = 2 * e8._l23_2a + 3 * e8._l23_a * e8._l12_a + e8._l12_2a, h = 3 * e8._l23_a * (e8._l23_a + e8._l12_a);
    n = (n * c + e8._x1 * e8._l23_2a - t * e8._l12_2a) / h, o = (o * c + e8._y1 * e8._l23_2a - r3 * e8._l12_2a) / h;
  }
  e8._context.bezierCurveTo(i, a, n, o, e8._x2, e8._y2);
}
function Pu(e8, t) {
  this._context = e8, this._alpha = t;
}
Pu.prototype = {
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
  point: function(e8, t) {
    if (e8 = +e8, t = +t, this._point) {
      var r3 = this._x2 - e8, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r3 * r3 + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e8, t) : this._context.moveTo(e8, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        ao(this, e8, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Nu = function e5(t) {
  function r3(i) {
    return t ? new Pu(i, t) : new eo(i, 0);
  }
  return r3.alpha = function(i) {
    return e5(+i);
  }, r3;
}(0.5);
function zu(e8, t) {
  this._context = e8, this._alpha = t;
}
zu.prototype = {
  areaStart: Ne,
  areaEnd: Ne,
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
  point: function(e8, t) {
    if (e8 = +e8, t = +t, this._point) {
      var r3 = this._x2 - e8, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r3 * r3 + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = e8, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e8, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e8, this._y5 = t;
        break;
      default:
        ao(this, e8, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const V0 = function e6(t) {
  function r3(i) {
    return t ? new zu(i, t) : new ro(i, 0);
  }
  return r3.alpha = function(i) {
    return e6(+i);
  }, r3;
}(0.5);
function Wu(e8, t) {
  this._context = e8, this._alpha = t;
}
Wu.prototype = {
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
  point: function(e8, t) {
    if (e8 = +e8, t = +t, this._point) {
      var r3 = this._x2 - e8, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r3 * r3 + i * i, this._alpha));
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
        ao(this, e8, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e8, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Z0 = function e7(t) {
  function r3(i) {
    return t ? new Wu(i, t) : new io(i, 0);
  }
  return r3.alpha = function(i) {
    return e7(+i);
  }, r3;
}(0.5);
function qu(e8) {
  this._context = e8;
}
qu.prototype = {
  areaStart: Ne,
  areaEnd: Ne,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e8, t) {
    e8 = +e8, t = +t, this._point ? this._context.lineTo(e8, t) : (this._point = 1, this._context.moveTo(e8, t));
  }
};
function K0(e8) {
  return new qu(e8);
}
function Bl(e8) {
  return e8 < 0 ? -1 : 1;
}
function Ll(e8, t, r3) {
  var i = e8._x1 - e8._x0, a = t - e8._x1, n = (e8._y1 - e8._y0) / (i || a < 0 && -0), o = (r3 - e8._y1) / (a || i < 0 && -0), s = (n * a + o * i) / (i + a);
  return (Bl(n) + Bl(o)) * Math.min(Math.abs(n), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function Al(e8, t) {
  var r3 = e8._x1 - e8._x0;
  return r3 ? (3 * (e8._y1 - e8._y0) / r3 - t) / 2 : t;
}
function On(e8, t, r3) {
  var i = e8._x0, a = e8._y0, n = e8._x1, o = e8._y1, s = (n - i) / 3;
  e8._context.bezierCurveTo(i + s, a + s * t, n - s, o - s * r3, n, o);
}
function Ma(e8) {
  this._context = e8;
}
Ma.prototype = {
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
        On(this, this._t0, Al(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e8, t) {
    var r3 = NaN;
    if (e8 = +e8, t = +t, !(e8 === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e8, t) : this._context.moveTo(e8, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, On(this, Al(this, r3 = Ll(this, e8, t)), r3);
          break;
        default:
          On(this, this._t0, r3 = Ll(this, e8, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e8, this._y0 = this._y1, this._y1 = t, this._t0 = r3;
    }
  }
};
function Hu(e8) {
  this._context = new ju(e8);
}
(Hu.prototype = Object.create(Ma.prototype)).point = function(e8, t) {
  Ma.prototype.point.call(this, t, e8);
};
function ju(e8) {
  this._context = e8;
}
ju.prototype = {
  moveTo: function(e8, t) {
    this._context.moveTo(t, e8);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e8, t) {
    this._context.lineTo(t, e8);
  },
  bezierCurveTo: function(e8, t, r3, i, a, n) {
    this._context.bezierCurveTo(t, e8, i, r3, n, a);
  }
};
function Yu(e8) {
  return new Ma(e8);
}
function Uu(e8) {
  return new Hu(e8);
}
function Gu(e8) {
  this._context = e8;
}
Gu.prototype = {
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
    var e8 = this._x, t = this._y, r3 = e8.length;
    if (r3)
      if (this._line ? this._context.lineTo(e8[0], t[0]) : this._context.moveTo(e8[0], t[0]), r3 === 2)
        this._context.lineTo(e8[1], t[1]);
      else
        for (var i = Ml(e8), a = Ml(t), n = 0, o = 1; o < r3; ++n, ++o)
          this._context.bezierCurveTo(i[0][n], a[0][n], i[1][n], a[1][n], e8[o], t[o]);
    (this._line || this._line !== 0 && r3 === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e8, t) {
    this._x.push(+e8), this._y.push(+t);
  }
};
function Ml(e8) {
  var t, r3 = e8.length - 1, i, a = new Array(r3), n = new Array(r3), o = new Array(r3);
  for (a[0] = 0, n[0] = 2, o[0] = e8[0] + 2 * e8[1], t = 1; t < r3 - 1; ++t)
    a[t] = 1, n[t] = 4, o[t] = 4 * e8[t] + 2 * e8[t + 1];
  for (a[r3 - 1] = 2, n[r3 - 1] = 7, o[r3 - 1] = 8 * e8[r3 - 1] + e8[r3], t = 1; t < r3; ++t)
    i = a[t] / n[t - 1], n[t] -= i, o[t] -= i * o[t - 1];
  for (a[r3 - 1] = o[r3 - 1] / n[r3 - 1], t = r3 - 2; t >= 0; --t)
    a[t] = (o[t] - a[t + 1]) / n[t];
  for (n[r3 - 1] = (e8[r3] + a[r3 - 1]) / 2, t = 0; t < r3 - 1; ++t)
    n[t] = 2 * e8[t + 1] - a[t + 1];
  return [a, n];
}
function Xu(e8) {
  return new Gu(e8);
}
function Ja(e8, t) {
  this._context = e8, this._t = t;
}
Ja.prototype = {
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
  point: function(e8, t) {
    switch (e8 = +e8, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e8, t) : this._context.moveTo(e8, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e8, t);
        else {
          var r3 = this._x * (1 - this._t) + e8 * this._t;
          this._context.lineTo(r3, this._y), this._context.lineTo(r3, t);
        }
        break;
      }
    }
    this._x = e8, this._y = t;
  }
};
function Vu(e8) {
  return new Ja(e8, 0.5);
}
function Zu(e8) {
  return new Ja(e8, 0);
}
function Ku(e8) {
  return new Ja(e8, 1);
}
var Qu = typeof global == "object" && global && global.Object === Object && global, Q0 = typeof self == "object" && self && self.Object === Object && self, xe = Qu || Q0 || Function("return this")(), Ea = xe.Symbol, Ju = Object.prototype, J0 = Ju.hasOwnProperty, tx = Ju.toString, oi = Ea ? Ea.toStringTag : void 0;
function ex(e8) {
  var t = J0.call(e8, oi), r3 = e8[oi];
  try {
    e8[oi] = void 0;
    var i = true;
  } catch {
  }
  var a = tx.call(e8);
  return i && (t ? e8[oi] = r3 : delete e8[oi]), a;
}
var rx = Object.prototype, ix = rx.toString;
function ax(e8) {
  return ix.call(e8);
}
var nx = "[object Null]", sx = "[object Undefined]", El = Ea ? Ea.toStringTag : void 0;
function jr(e8) {
  return e8 == null ? e8 === void 0 ? sx : nx : El && El in Object(e8) ? ex(e8) : ax(e8);
}
function or(e8) {
  var t = typeof e8;
  return e8 != null && (t == "object" || t == "function");
}
var ox = "[object AsyncFunction]", lx = "[object Function]", cx = "[object GeneratorFunction]", hx = "[object Proxy]";
function no(e8) {
  if (!or(e8))
    return false;
  var t = jr(e8);
  return t == lx || t == cx || t == ox || t == hx;
}
var $n = xe["__core-js_shared__"], Fl = function() {
  var e8 = /[^.]+$/.exec($n && $n.keys && $n.keys.IE_PROTO || "");
  return e8 ? "Symbol(src)_1." + e8 : "";
}();
function ux(e8) {
  return !!Fl && Fl in e8;
}
var dx = Function.prototype, fx = dx.toString;
function lr(e8) {
  if (e8 != null) {
    try {
      return fx.call(e8);
    } catch {
    }
    try {
      return e8 + "";
    } catch {
    }
  }
  return "";
}
var px = /[\\^$.*+?()[\]{}|]/g, gx = /^\[object .+?Constructor\]$/, mx = Function.prototype, yx = Object.prototype, xx = mx.toString, bx = yx.hasOwnProperty, Cx = RegExp(
  "^" + xx.call(bx).replace(px, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function vx(e8) {
  if (!or(e8) || ux(e8))
    return false;
  var t = no(e8) ? Cx : gx;
  return t.test(lr(e8));
}
function kx(e8, t) {
  return e8 == null ? void 0 : e8[t];
}
function cr(e8, t) {
  var r3 = kx(e8, t);
  return vx(r3) ? r3 : void 0;
}
var Bi = cr(Object, "create");
function wx() {
  this.__data__ = Bi ? Bi(null) : {}, this.size = 0;
}
function _x(e8) {
  var t = this.has(e8) && delete this.__data__[e8];
  return this.size -= t ? 1 : 0, t;
}
var Sx = "__lodash_hash_undefined__", Tx = Object.prototype, Bx = Tx.hasOwnProperty;
function Lx(e8) {
  var t = this.__data__;
  if (Bi) {
    var r3 = t[e8];
    return r3 === Sx ? void 0 : r3;
  }
  return Bx.call(t, e8) ? t[e8] : void 0;
}
var Ax = Object.prototype, Mx = Ax.hasOwnProperty;
function Ex(e8) {
  var t = this.__data__;
  return Bi ? t[e8] !== void 0 : Mx.call(t, e8);
}
var Fx = "__lodash_hash_undefined__";
function Ox(e8, t) {
  var r3 = this.__data__;
  return this.size += this.has(e8) ? 0 : 1, r3[e8] = Bi && t === void 0 ? Fx : t, this;
}
function ar(e8) {
  var t = -1, r3 = e8 == null ? 0 : e8.length;
  for (this.clear(); ++t < r3; ) {
    var i = e8[t];
    this.set(i[0], i[1]);
  }
}
ar.prototype.clear = wx;
ar.prototype.delete = _x;
ar.prototype.get = Lx;
ar.prototype.has = Ex;
ar.prototype.set = Ox;
function $x() {
  this.__data__ = [], this.size = 0;
}
function tn(e8, t) {
  return e8 === t || e8 !== e8 && t !== t;
}
function en(e8, t) {
  for (var r3 = e8.length; r3--; )
    if (tn(e8[r3][0], t))
      return r3;
  return -1;
}
var Dx = Array.prototype, Rx = Dx.splice;
function Ix(e8) {
  var t = this.__data__, r3 = en(t, e8);
  if (r3 < 0)
    return false;
  var i = t.length - 1;
  return r3 == i ? t.pop() : Rx.call(t, r3, 1), --this.size, true;
}
function Px(e8) {
  var t = this.__data__, r3 = en(t, e8);
  return r3 < 0 ? void 0 : t[r3][1];
}
function Nx(e8) {
  return en(this.__data__, e8) > -1;
}
function zx(e8, t) {
  var r3 = this.__data__, i = en(r3, e8);
  return i < 0 ? (++this.size, r3.push([e8, t])) : r3[i][1] = t, this;
}
function Fe(e8) {
  var t = -1, r3 = e8 == null ? 0 : e8.length;
  for (this.clear(); ++t < r3; ) {
    var i = e8[t];
    this.set(i[0], i[1]);
  }
}
Fe.prototype.clear = $x;
Fe.prototype.delete = Ix;
Fe.prototype.get = Px;
Fe.prototype.has = Nx;
Fe.prototype.set = zx;
var Li = cr(xe, "Map");
function Wx() {
  this.size = 0, this.__data__ = {
    hash: new ar(),
    map: new (Li || Fe)(),
    string: new ar()
  };
}
function qx(e8) {
  var t = typeof e8;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e8 !== "__proto__" : e8 === null;
}
function rn(e8, t) {
  var r3 = e8.__data__;
  return qx(t) ? r3[typeof t == "string" ? "string" : "hash"] : r3.map;
}
function Hx(e8) {
  var t = rn(this, e8).delete(e8);
  return this.size -= t ? 1 : 0, t;
}
function jx(e8) {
  return rn(this, e8).get(e8);
}
function Yx(e8) {
  return rn(this, e8).has(e8);
}
function Ux(e8, t) {
  var r3 = rn(this, e8), i = r3.size;
  return r3.set(e8, t), this.size += r3.size == i ? 0 : 1, this;
}
function qe(e8) {
  var t = -1, r3 = e8 == null ? 0 : e8.length;
  for (this.clear(); ++t < r3; ) {
    var i = e8[t];
    this.set(i[0], i[1]);
  }
}
qe.prototype.clear = Wx;
qe.prototype.delete = Hx;
qe.prototype.get = jx;
qe.prototype.has = Yx;
qe.prototype.set = Ux;
var Gx = "Expected a function";
function Di(e8, t) {
  if (typeof e8 != "function" || t != null && typeof t != "function")
    throw new TypeError(Gx);
  var r3 = function() {
    var i = arguments, a = t ? t.apply(this, i) : i[0], n = r3.cache;
    if (n.has(a))
      return n.get(a);
    var o = e8.apply(this, i);
    return r3.cache = n.set(a, o) || n, o;
  };
  return r3.cache = new (Di.Cache || qe)(), r3;
}
Di.Cache = qe;
function Xx() {
  this.__data__ = new Fe(), this.size = 0;
}
function Vx(e8) {
  var t = this.__data__, r3 = t.delete(e8);
  return this.size = t.size, r3;
}
function Zx(e8) {
  return this.__data__.get(e8);
}
function Kx(e8) {
  return this.__data__.has(e8);
}
var Qx = 200;
function Jx(e8, t) {
  var r3 = this.__data__;
  if (r3 instanceof Fe) {
    var i = r3.__data__;
    if (!Li || i.length < Qx - 1)
      return i.push([e8, t]), this.size = ++r3.size, this;
    r3 = this.__data__ = new qe(i);
  }
  return r3.set(e8, t), this.size = r3.size, this;
}
function Yr(e8) {
  var t = this.__data__ = new Fe(e8);
  this.size = t.size;
}
Yr.prototype.clear = Xx;
Yr.prototype.delete = Vx;
Yr.prototype.get = Zx;
Yr.prototype.has = Kx;
Yr.prototype.set = Jx;
var Fa = function() {
  try {
    var e8 = cr(Object, "defineProperty");
    return e8({}, "", {}), e8;
  } catch {
  }
}();
function so(e8, t, r3) {
  t == "__proto__" && Fa ? Fa(e8, t, {
    configurable: true,
    enumerable: true,
    value: r3,
    writable: true
  }) : e8[t] = r3;
}
function xs(e8, t, r3) {
  (r3 !== void 0 && !tn(e8[t], r3) || r3 === void 0 && !(t in e8)) && so(e8, t, r3);
}
function tb(e8) {
  return function(t, r3, i) {
    for (var a = -1, n = Object(t), o = i(t), s = o.length; s--; ) {
      var l = o[++a];
      if (r3(n[l], l, n) === false)
        break;
    }
    return t;
  };
}
var eb = tb(), td = typeof exports == "object" && exports && !exports.nodeType && exports, Ol = td && typeof module == "object" && module && !module.nodeType && module, rb = Ol && Ol.exports === td, $l = rb ? xe.Buffer : void 0, Dl = $l ? $l.allocUnsafe : void 0;
function ib(e8, t) {
  if (t)
    return e8.slice();
  var r3 = e8.length, i = Dl ? Dl(r3) : new e8.constructor(r3);
  return e8.copy(i), i;
}
var Rl = xe.Uint8Array;
function ab(e8) {
  var t = new e8.constructor(e8.byteLength);
  return new Rl(t).set(new Rl(e8)), t;
}
function nb(e8, t) {
  var r3 = t ? ab(e8.buffer) : e8.buffer;
  return new e8.constructor(r3, e8.byteOffset, e8.length);
}
function sb(e8, t) {
  var r3 = -1, i = e8.length;
  for (t || (t = Array(i)); ++r3 < i; )
    t[r3] = e8[r3];
  return t;
}
var Il = Object.create, ob = /* @__PURE__ */ function() {
  function e8() {
  }
  return function(t) {
    if (!or(t))
      return {};
    if (Il)
      return Il(t);
    e8.prototype = t;
    var r3 = new e8();
    return e8.prototype = void 0, r3;
  };
}();
function ed(e8, t) {
  return function(r3) {
    return e8(t(r3));
  };
}
var rd = ed(Object.getPrototypeOf, Object), lb = Object.prototype;
function an(e8) {
  var t = e8 && e8.constructor, r3 = typeof t == "function" && t.prototype || lb;
  return e8 === r3;
}
function cb(e8) {
  return typeof e8.constructor == "function" && !an(e8) ? ob(rd(e8)) : {};
}
function Ri(e8) {
  return e8 != null && typeof e8 == "object";
}
var hb = "[object Arguments]";
function Pl(e8) {
  return Ri(e8) && jr(e8) == hb;
}
var id = Object.prototype, ub = id.hasOwnProperty, db = id.propertyIsEnumerable, Oa = Pl(/* @__PURE__ */ function() {
  return arguments;
}()) ? Pl : function(e8) {
  return Ri(e8) && ub.call(e8, "callee") && !db.call(e8, "callee");
}, $a = Array.isArray, fb = 9007199254740991;
function ad(e8) {
  return typeof e8 == "number" && e8 > -1 && e8 % 1 == 0 && e8 <= fb;
}
function nn(e8) {
  return e8 != null && ad(e8.length) && !no(e8);
}
function pb(e8) {
  return Ri(e8) && nn(e8);
}
function gb() {
  return false;
}
var nd = typeof exports == "object" && exports && !exports.nodeType && exports, Nl = nd && typeof module == "object" && module && !module.nodeType && module, mb = Nl && Nl.exports === nd, zl = mb ? xe.Buffer : void 0, yb = zl ? zl.isBuffer : void 0, oo = yb || gb, xb = "[object Object]", bb = Function.prototype, Cb = Object.prototype, sd = bb.toString, vb = Cb.hasOwnProperty, kb = sd.call(Object);
function wb(e8) {
  if (!Ri(e8) || jr(e8) != xb)
    return false;
  var t = rd(e8);
  if (t === null)
    return true;
  var r3 = vb.call(t, "constructor") && t.constructor;
  return typeof r3 == "function" && r3 instanceof r3 && sd.call(r3) == kb;
}
var _b = "[object Arguments]", Sb = "[object Array]", Tb = "[object Boolean]", Bb = "[object Date]", Lb = "[object Error]", Ab = "[object Function]", Mb = "[object Map]", Eb = "[object Number]", Fb = "[object Object]", Ob = "[object RegExp]", $b = "[object Set]", Db = "[object String]", Rb = "[object WeakMap]", Ib = "[object ArrayBuffer]", Pb = "[object DataView]", Nb = "[object Float32Array]", zb = "[object Float64Array]", Wb = "[object Int8Array]", qb = "[object Int16Array]", Hb = "[object Int32Array]", jb = "[object Uint8Array]", Yb = "[object Uint8ClampedArray]", Ub = "[object Uint16Array]", Gb = "[object Uint32Array]", xt = {};
xt[Nb] = xt[zb] = xt[Wb] = xt[qb] = xt[Hb] = xt[jb] = xt[Yb] = xt[Ub] = xt[Gb] = true;
xt[_b] = xt[Sb] = xt[Ib] = xt[Tb] = xt[Pb] = xt[Bb] = xt[Lb] = xt[Ab] = xt[Mb] = xt[Eb] = xt[Fb] = xt[Ob] = xt[$b] = xt[Db] = xt[Rb] = false;
function Xb(e8) {
  return Ri(e8) && ad(e8.length) && !!xt[jr(e8)];
}
function Vb(e8) {
  return function(t) {
    return e8(t);
  };
}
var od = typeof exports == "object" && exports && !exports.nodeType && exports, vi = od && typeof module == "object" && module && !module.nodeType && module, Zb = vi && vi.exports === od, Dn = Zb && Qu.process, Wl = function() {
  try {
    var e8 = vi && vi.require && vi.require("util").types;
    return e8 || Dn && Dn.binding && Dn.binding("util");
  } catch {
  }
}(), ql = Wl && Wl.isTypedArray, lo = ql ? Vb(ql) : Xb;
function bs(e8, t) {
  if (!(t === "constructor" && typeof e8[t] == "function") && t != "__proto__")
    return e8[t];
}
var Kb = Object.prototype, Qb = Kb.hasOwnProperty;
function Jb(e8, t, r3) {
  var i = e8[t];
  (!(Qb.call(e8, t) && tn(i, r3)) || r3 === void 0 && !(t in e8)) && so(e8, t, r3);
}
function t1(e8, t, r3, i) {
  var a = !r3;
  r3 || (r3 = {});
  for (var n = -1, o = t.length; ++n < o; ) {
    var s = t[n], l = void 0;
    l === void 0 && (l = e8[s]), a ? so(r3, s, l) : Jb(r3, s, l);
  }
  return r3;
}
function e1(e8, t) {
  for (var r3 = -1, i = Array(e8); ++r3 < e8; )
    i[r3] = t(r3);
  return i;
}
var r1 = 9007199254740991, i1 = /^(?:0|[1-9]\d*)$/;
function ld(e8, t) {
  var r3 = typeof e8;
  return t = t ?? r1, !!t && (r3 == "number" || r3 != "symbol" && i1.test(e8)) && e8 > -1 && e8 % 1 == 0 && e8 < t;
}
var a1 = Object.prototype, n1 = a1.hasOwnProperty;
function s1(e8, t) {
  var r3 = $a(e8), i = !r3 && Oa(e8), a = !r3 && !i && oo(e8), n = !r3 && !i && !a && lo(e8), o = r3 || i || a || n, s = o ? e1(e8.length, String) : [], l = s.length;
  for (var c in e8)
    (t || n1.call(e8, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    ld(c, l))) && s.push(c);
  return s;
}
function o1(e8) {
  var t = [];
  if (e8 != null)
    for (var r3 in Object(e8))
      t.push(r3);
  return t;
}
var l1 = Object.prototype, c1 = l1.hasOwnProperty;
function h1(e8) {
  if (!or(e8))
    return o1(e8);
  var t = an(e8), r3 = [];
  for (var i in e8)
    i == "constructor" && (t || !c1.call(e8, i)) || r3.push(i);
  return r3;
}
function cd(e8) {
  return nn(e8) ? s1(e8, true) : h1(e8);
}
function u1(e8) {
  return t1(e8, cd(e8));
}
function d1(e8, t, r3, i, a, n, o) {
  var s = bs(e8, r3), l = bs(t, r3), c = o.get(l);
  if (c) {
    xs(e8, r3, c);
    return;
  }
  var h = n ? n(s, l, r3 + "", e8, t, o) : void 0, u = h === void 0;
  if (u) {
    var d3 = $a(l), f = !d3 && oo(l), g = !d3 && !f && lo(l);
    h = l, d3 || f || g ? $a(s) ? h = s : pb(s) ? h = sb(s) : f ? (u = false, h = ib(l, true)) : g ? (u = false, h = nb(l, true)) : h = [] : wb(l) || Oa(l) ? (h = s, Oa(s) ? h = u1(s) : (!or(s) || no(s)) && (h = cb(l))) : u = false;
  }
  u && (o.set(l, h), a(h, l, i, n, o), o.delete(l)), xs(e8, r3, h);
}
function hd(e8, t, r3, i, a) {
  e8 !== t && eb(t, function(n, o) {
    if (a || (a = new Yr()), or(n))
      d1(e8, t, o, r3, hd, i, a);
    else {
      var s = i ? i(bs(e8, o), n, o + "", e8, t, a) : void 0;
      s === void 0 && (s = n), xs(e8, o, s);
    }
  }, cd);
}
function ud(e8) {
  return e8;
}
function f1(e8, t, r3) {
  switch (r3.length) {
    case 0:
      return e8.call(t);
    case 1:
      return e8.call(t, r3[0]);
    case 2:
      return e8.call(t, r3[0], r3[1]);
    case 3:
      return e8.call(t, r3[0], r3[1], r3[2]);
  }
  return e8.apply(t, r3);
}
var Hl = Math.max;
function p1(e8, t, r3) {
  return t = Hl(t === void 0 ? e8.length - 1 : t, 0), function() {
    for (var i = arguments, a = -1, n = Hl(i.length - t, 0), o = Array(n); ++a < n; )
      o[a] = i[t + a];
    a = -1;
    for (var s = Array(t + 1); ++a < t; )
      s[a] = i[a];
    return s[t] = r3(o), f1(e8, this, s);
  };
}
function g1(e8) {
  return function() {
    return e8;
  };
}
var m1 = Fa ? function(e8, t) {
  return Fa(e8, "toString", {
    configurable: true,
    enumerable: false,
    value: g1(t),
    writable: true
  });
} : ud, y1 = 800, x1 = 16, b1 = Date.now;
function C1(e8) {
  var t = 0, r3 = 0;
  return function() {
    var i = b1(), a = x1 - (i - r3);
    if (r3 = i, a > 0) {
      if (++t >= y1)
        return arguments[0];
    } else
      t = 0;
    return e8.apply(void 0, arguments);
  };
}
var v1 = C1(m1);
function k1(e8, t) {
  return v1(p1(e8, t, ud), e8 + "");
}
function w1(e8, t, r3) {
  if (!or(r3))
    return false;
  var i = typeof t;
  return (i == "number" ? nn(r3) && ld(t, r3.length) : i == "string" && t in r3) ? tn(r3[t], e8) : false;
}
function _1(e8) {
  return k1(function(t, r3) {
    var i = -1, a = r3.length, n = a > 1 ? r3[a - 1] : void 0, o = a > 2 ? r3[2] : void 0;
    for (n = e8.length > 3 && typeof n == "function" ? (a--, n) : void 0, o && w1(r3[0], r3[1], o) && (n = a < 3 ? void 0 : n, a = 1), t = Object(t); ++i < a; ) {
      var s = r3[i];
      s && e8(t, s, i, n);
    }
    return t;
  });
}
var S1 = _1(function(e8, t, r3) {
  hd(e8, t, r3);
}), T1 = "​", B1 = {
  curveBasis: ca,
  curveBasisClosed: j0,
  curveBasisOpen: Y0,
  curveBumpX: Yi,
  curveBumpY: Ui$1,
  curveBundle: U0,
  curveCardinalClosed: G0,
  curveCardinalOpen: X0,
  curveCardinal: Iu,
  curveCatmullRomClosed: V0,
  curveCatmullRomOpen: Z0,
  curveCatmullRom: Nu,
  curveLinear: Ba,
  curveLinearClosed: K0,
  curveMonotoneX: Yu,
  curveMonotoneY: Uu,
  curveNatural: Xu,
  curveStep: Vu,
  curveStepAfter: Ku,
  curveStepBefore: Zu
}, L1 = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, A1 = /* @__PURE__ */ p(function(e8, t) {
  const r3 = dd(e8, /(?:init\b)|(?:initialize\b)/);
  let i = {};
  if (Array.isArray(r3)) {
    const o = r3.map((s) => s.args);
    ma(o), i = Dt(i, [...o]);
  } else
    i = r3.args;
  if (!i)
    return;
  let a = Ns(e8, t);
  const n = "config";
  return i[n] !== void 0 && (a === "flowchart-v2" && (a = "flowchart"), i[a] = i[n], delete i[n]), i;
}, "detectInit"), dd = /* @__PURE__ */ p(function(e8, t = null) {
  var r3, i;
  try {
    const a = new RegExp(
      `[%]{2}(?![{]${L1.source})(?=[}][%]{2}).*
`,
      "ig"
    );
    e8 = e8.trim().replace(a, "").replace(/'/gm, '"'), D.debug(
      `Detecting diagram directive${t !== null ? " type:" + t : ""} based on the text:${e8}`
    );
    let n;
    const o = [];
    for (; (n = bi.exec(e8)) !== null; )
      if (n.index === bi.lastIndex && bi.lastIndex++, n && !t || t && ((r3 = n[1]) != null && r3.match(t)) || t && ((i = n[2]) != null && i.match(t))) {
        const s = n[1] ? n[1] : n[2], l = n[3] ? n[3].trim() : n[4] ? JSON.parse(n[4].trim()) : null;
        o.push({ type: s, args: l });
      }
    return o.length === 0 ? { type: e8, args: null } : o.length === 1 ? o[0] : o;
  } catch (a) {
    return D.error(
      `ERROR: ${a.message} - Unable to parse directive type: '${t}' based on the text: '${e8}'`
    ), { type: void 0, args: null };
  }
}, "detectDirective"), M1 = /* @__PURE__ */ p(function(e8) {
  return e8.replace(bi, "");
}, "removeDirectives"), E1 = /* @__PURE__ */ p(function(e8, t) {
  for (const [r3, i] of t.entries())
    if (i.match(e8))
      return r3;
  return -1;
}, "isSubstringInArray");
function co(e8, t) {
  if (!e8)
    return t;
  const r3 = `curve${e8.charAt(0).toUpperCase() + e8.slice(1)}`;
  return B1[r3] ?? t;
}
p(co, "interpolateToCurve");
function fd(e8, t) {
  const r3 = e8.trim();
  if (r3)
    return t.securityLevel !== "loose" ? q0.sanitizeUrl(r3) : r3;
}
p(fd, "formatUrl");
var F1 = /* @__PURE__ */ p((e8, ...t) => {
  const r3 = e8.split("."), i = r3.length - 1, a = r3[i];
  let n = window;
  for (let o = 0; o < i; o++)
    if (n = n[r3[o]], !n) {
      D.error(`Function name: ${e8} not found in window`);
      return;
    }
  n[a](...t);
}, "runFunc");
function ho(e8, t) {
  return !e8 || !t ? 0 : Math.sqrt(Math.pow(t.x - e8.x, 2) + Math.pow(t.y - e8.y, 2));
}
p(ho, "distance");
function pd(e8) {
  let t, r3 = 0;
  e8.forEach((a) => {
    r3 += ho(a, t), t = a;
  });
  const i = r3 / 2;
  return uo(e8, i);
}
p(pd, "traverseEdge");
function gd(e8) {
  return e8.length === 1 ? e8[0] : pd(e8);
}
p(gd, "calcLabelPosition");
var jl = /* @__PURE__ */ p((e8, t = 2) => {
  const r3 = Math.pow(10, t);
  return Math.round(e8 * r3) / r3;
}, "roundNumber"), uo = /* @__PURE__ */ p((e8, t) => {
  let r3, i = t;
  for (const a of e8) {
    if (r3) {
      const n = ho(a, r3);
      if (n === 0)
        return r3;
      if (n < i)
        i -= n;
      else {
        const o = i / n;
        if (o <= 0)
          return r3;
        if (o >= 1)
          return { x: a.x, y: a.y };
        if (o > 0 && o < 1)
          return {
            x: jl((1 - o) * r3.x + o * a.x, 5),
            y: jl((1 - o) * r3.y + o * a.y, 5)
          };
      }
    }
    r3 = a;
  }
  throw new Error("Could not find a suitable point for the given distance");
}, "calculatePoint"), O1 = /* @__PURE__ */ p((e8, t, r3) => {
  D.info(`our points ${JSON.stringify(t)}`), t[0] !== r3 && (t = t.reverse());
  const a = uo(t, 25), n = e8 ? 10 : 5, o = Math.atan2(t[0].y - a.y, t[0].x - a.x), s = { x: 0, y: 0 };
  return s.x = Math.sin(o) * n + (t[0].x + a.x) / 2, s.y = -Math.cos(o) * n + (t[0].y + a.y) / 2, s;
}, "calcCardinalityPosition");
function md(e8, t, r3) {
  const i = structuredClone(r3);
  D.info("our points", i), t !== "start_left" && t !== "start_right" && i.reverse();
  const a = 25 + e8, n = uo(i, a), o = 10 + e8 * 0.5, s = Math.atan2(i[0].y - n.y, i[0].x - n.x), l = { x: 0, y: 0 };
  return t === "start_left" ? (l.x = Math.sin(s + Math.PI) * o + (i[0].x + n.x) / 2, l.y = -Math.cos(s + Math.PI) * o + (i[0].y + n.y) / 2) : t === "end_right" ? (l.x = Math.sin(s - Math.PI) * o + (i[0].x + n.x) / 2 - 5, l.y = -Math.cos(s - Math.PI) * o + (i[0].y + n.y) / 2 - 5) : t === "end_left" ? (l.x = Math.sin(s) * o + (i[0].x + n.x) / 2 - 5, l.y = -Math.cos(s) * o + (i[0].y + n.y) / 2 - 5) : (l.x = Math.sin(s) * o + (i[0].x + n.x) / 2, l.y = -Math.cos(s) * o + (i[0].y + n.y) / 2), l;
}
p(md, "calcTerminalLabelPosition");
function yd(e8) {
  let t = "", r3 = "";
  for (const i of e8)
    i !== void 0 && (i.startsWith("color:") || i.startsWith("text-align:") ? r3 = r3 + i + ";" : t = t + i + ";");
  return { style: t, labelStyle: r3 };
}
p(yd, "getStylesFromArray");
var Yl = 0, $1 = /* @__PURE__ */ p(() => (Yl++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + Yl), "generateId");
function xd(e8) {
  let t = "";
  const r3 = "0123456789abcdef", i = r3.length;
  for (let a = 0; a < e8; a++)
    t += r3.charAt(Math.floor(Math.random() * i));
  return t;
}
p(xd, "makeRandomHex");
var D1 = /* @__PURE__ */ p((e8) => xd(e8.length), "random"), R1 = /* @__PURE__ */ p(function() {
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
}, "getTextObj"), I1 = /* @__PURE__ */ p(function(e8, t) {
  const r3 = t.text.replace(Hr.lineBreakRegex, " "), [, i] = sn(t.fontSize), a = e8.append("text");
  a.attr("x", t.x), a.attr("y", t.y), a.style("text-anchor", t.anchor), a.style("font-family", t.fontFamily), a.style("font-size", i), a.style("font-weight", t.fontWeight), a.attr("fill", t.fill), t.class !== void 0 && a.attr("class", t.class);
  const n = a.append("tspan");
  return n.attr("x", t.x + t.textMargin * 2), n.attr("fill", t.fill), n.text(r3), a;
}, "drawSimpleText"), P1 = Di(
  (e8, t, r3) => {
    if (!e8 || (r3 = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" },
      r3
    ), Hr.lineBreakRegex.test(e8)))
      return e8;
    const i = e8.split(" ").filter(Boolean), a = [];
    let n = "";
    return i.forEach((o, s) => {
      const l = Ee(`${o} `, r3), c = Ee(n, r3);
      if (l > t) {
        const { hyphenatedStrings: d3, remainingWord: f } = N1(o, t, "-", r3);
        a.push(n, ...d3), n = f;
      } else
        c + l >= t ? (a.push(n), n = o) : n = [n, o].filter(Boolean).join(" ");
      s + 1 === i.length && a.push(n);
    }), a.filter((o) => o !== "").join(r3.joinWith);
  },
  (e8, t, r3) => `${e8}${t}${r3.fontSize}${r3.fontWeight}${r3.fontFamily}${r3.joinWith}`
), N1 = Di(
  (e8, t, r3 = "-", i) => {
    i = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
      i
    );
    const a = [...e8], n = [];
    let o = "";
    return a.forEach((s, l) => {
      const c = `${o}${s}`;
      if (Ee(c, i) >= t) {
        const u = l + 1, d3 = a.length === u, f = `${c}${r3}`;
        n.push(d3 ? c : f), o = "";
      } else
        o = c;
    }), { hyphenatedStrings: n, remainingWord: o };
  },
  (e8, t, r3 = "-", i) => `${e8}${t}${r3}${i.fontSize}${i.fontWeight}${i.fontFamily}`
);
function bd(e8, t) {
  return fo(e8, t).height;
}
p(bd, "calculateTextHeight");
function Ee(e8, t) {
  return fo(e8, t).width;
}
p(Ee, "calculateTextWidth");
var fo = Di(
  (e8, t) => {
    const { fontSize: r3 = 12, fontFamily: i = "Arial", fontWeight: a = 400 } = t;
    if (!e8)
      return { width: 0, height: 0 };
    const [, n] = sn(r3), o = ["sans-serif", i], s = e8.split(Hr.lineBreakRegex), l = [], c = Li$1("body");
    if (!c.remove)
      return { width: 0, height: 0, lineHeight: 0 };
    const h = c.append("svg");
    for (const d3 of o) {
      let f = 0;
      const g = { width: 0, height: 0, lineHeight: 0 };
      for (const m of s) {
        const y = R1();
        y.text = m || T1;
        const x = I1(h, y).style("font-size", n).style("font-weight", a).style("font-family", d3), b = (x._groups || x)[0][0].getBBox();
        if (b.width === 0 && b.height === 0)
          throw new Error("svg element not in render tree");
        g.width = Math.round(Math.max(g.width, b.width)), f = Math.round(b.height), g.height += f, g.lineHeight = Math.round(Math.max(g.lineHeight, f));
      }
      l.push(g);
    }
    h.remove();
    const u = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[u];
  },
  (e8, t) => `${e8}${t.fontSize}${t.fontWeight}${t.fontFamily}`
), Or, z1 = (Or = class {
  constructor(t = false, r3) {
    this.count = 0, this.count = r3 ? r3.length : 0, this.next = t ? () => this.count++ : () => Date.now();
  }
}, p(Or, "InitIDGenerator"), Or), Xi, W1 = /* @__PURE__ */ p(function(e8) {
  return Xi = Xi || document.createElement("div"), e8 = escape(e8).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), Xi.innerHTML = e8, unescape(Xi.textContent);
}, "entityDecode");
function po(e8) {
  return "str" in e8;
}
p(po, "isDetailedError");
var q1 = /* @__PURE__ */ p((e8, t, r3, i) => {
  var n;
  if (!i)
    return;
  const a = (n = e8.node()) == null ? void 0 : n.getBBox();
  a && e8.append("text").text(i).attr("text-anchor", "middle").attr("x", a.x + a.width / 2).attr("y", -r3).attr("class", t);
}, "insertTitle"), sn = /* @__PURE__ */ p((e8) => {
  if (typeof e8 == "number")
    return [e8, e8 + "px"];
  const t = parseInt(e8 ?? "", 10);
  return Number.isNaN(t) ? [void 0, void 0] : e8 === String(t) ? [t, e8 + "px"] : [t, e8];
}, "parseFontSize");
function go(e8, t) {
  return S1({}, e8, t);
}
p(go, "cleanAndMerge");
var ge = {
  assignWithDepth: Dt,
  wrapLabel: P1,
  calculateTextHeight: bd,
  calculateTextWidth: Ee,
  calculateTextDimensions: fo,
  cleanAndMerge: go,
  detectInit: A1,
  detectDirective: dd,
  isSubstringInArray: E1,
  interpolateToCurve: co,
  calcLabelPosition: gd,
  calcCardinalityPosition: O1,
  calcTerminalLabelPosition: md,
  formatUrl: fd,
  getStylesFromArray: yd,
  generateId: $1,
  random: D1,
  runFunc: F1,
  entityDecode: W1,
  insertTitle: q1,
  parseFontSize: sn,
  InitIDGenerator: z1
}, H1 = /* @__PURE__ */ p(function(e8) {
  let t = e8;
  return t = t.replace(/style.*:\S*#.*;/g, function(r3) {
    return r3.substring(0, r3.length - 1);
  }), t = t.replace(/classDef.*:\S*#.*;/g, function(r3) {
    return r3.substring(0, r3.length - 1);
  }), t = t.replace(/#\w+;/g, function(r3) {
    const i = r3.substring(1, r3.length - 1);
    return /^\+?\d+$/.test(i) ? "ﬂ°°" + i + "¶ß" : "ﬂ°" + i + "¶ß";
  }), t;
}, "encodeEntities"), hr = /* @__PURE__ */ p(function(e8) {
  return e8.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, "decodeEntities"), U_ = /* @__PURE__ */ p((e8, t, {
  counter: r3 = 0,
  prefix: i,
  suffix: a
}, n) => n || `${i ? `${i}_` : ""}${e8}_${t}_${r3}${a ? `_${a}` : ""}`, "getEdgeId");
function Ut(e8) {
  return e8 ?? null;
}
p(Ut, "handleUndefinedAttr");
function mo() {
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
var ur = mo();
function Cd(e8) {
  ur = e8;
}
var ki = { exec: () => null };
function pt(e8, t = "") {
  let r3 = typeof e8 == "string" ? e8 : e8.source;
  const i = {
    replace: (a, n) => {
      let o = typeof n == "string" ? n : n.source;
      return o = o.replace(Yt.caret, "$1"), r3 = r3.replace(a, o), i;
    },
    getRegex: () => new RegExp(r3, t)
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
  listItemRegex: (e8) => new RegExp(`^( {0,3}${e8})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: (e8) => new RegExp(`^ {0,${Math.min(3, e8 - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: (e8) => new RegExp(`^ {0,${Math.min(3, e8 - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: (e8) => new RegExp(`^ {0,${Math.min(3, e8 - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: (e8) => new RegExp(`^ {0,${Math.min(3, e8 - 1)}}#`),
  htmlBeginRegex: (e8) => new RegExp(`^ {0,${Math.min(3, e8 - 1)}}<(?:[a-z].*>|!--)`, "i")
}, j1 = /^(?:[ \t]*(?:\n|$))+/, Y1 = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, U1 = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Ii = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, G1 = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, yo = /(?:[*+-]|\d{1,9}[.)])/, vd = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, kd = pt(vd).replace(/bull/g, yo).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), X1 = pt(vd).replace(/bull/g, yo).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), xo = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, V1 = /^[^\n]+/, bo = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Z1 = pt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", bo).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), K1 = pt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, yo).getRegex(), on = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Co = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Q1 = pt(
  "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
  "i"
).replace("comment", Co).replace("tag", on).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), wd = pt(xo).replace("hr", Ii).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", on).getRegex(), J1 = pt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", wd).getRegex(), vo = {
  blockquote: J1,
  code: Y1,
  def: Z1,
  fences: U1,
  heading: G1,
  hr: Ii,
  html: Q1,
  lheading: kd,
  list: K1,
  newline: j1,
  paragraph: wd,
  table: ki,
  text: V1
}, Ul = pt(
  "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
).replace("hr", Ii).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", on).getRegex(), t2 = {
  ...vo,
  lheading: X1,
  table: Ul,
  paragraph: pt(xo).replace("hr", Ii).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Ul).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", on).getRegex()
}, e22 = {
  ...vo,
  html: pt(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", Co).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: ki,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: pt(xo).replace("hr", Ii).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", kd).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, r2 = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, i2 = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, _d = /^( {2,}|\\)\n(?!\s*$)/, a2 = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ln = /[\p{P}\p{S}]/u, ko = /[\s\p{P}\p{S}]/u, Sd = /[^\s\p{P}\p{S}]/u, n2 = pt(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, ko).getRegex(), Td = /(?!~)[\p{P}\p{S}]/u, s2 = /(?!~)[\s\p{P}\p{S}]/u, o2 = /(?:[^\s\p{P}\p{S}]|~)/u, l2 = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, Bd = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, c2 = pt(Bd, "u").replace(/punct/g, ln).getRegex(), h2 = pt(Bd, "u").replace(/punct/g, Td).getRegex(), Ld = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", u2 = pt(Ld, "gu").replace(/notPunctSpace/g, Sd).replace(/punctSpace/g, ko).replace(/punct/g, ln).getRegex(), d2 = pt(Ld, "gu").replace(/notPunctSpace/g, o2).replace(/punctSpace/g, s2).replace(/punct/g, Td).getRegex(), f2 = pt(
  "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
  "gu"
).replace(/notPunctSpace/g, Sd).replace(/punctSpace/g, ko).replace(/punct/g, ln).getRegex(), p2 = pt(/\\(punct)/, "gu").replace(/punct/g, ln).getRegex(), g2 = pt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), m2 = pt(Co).replace("(?:-->|$)", "-->").getRegex(), y2 = pt(
  "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
).replace("comment", m2).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Da = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, x2 = pt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Da).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ad = pt(/^!?\[(label)\]\[(ref)\]/).replace("label", Da).replace("ref", bo).getRegex(), Md = pt(/^!?\[(ref)\](?:\[\])?/).replace("ref", bo).getRegex(), b2 = pt("reflink|nolink(?!\\()", "g").replace("reflink", Ad).replace("nolink", Md).getRegex(), wo = {
  _backpedal: ki,
  // only used for GFM url
  anyPunctuation: p2,
  autolink: g2,
  blockSkip: l2,
  br: _d,
  code: i2,
  del: ki,
  emStrongLDelim: c2,
  emStrongRDelimAst: u2,
  emStrongRDelimUnd: f2,
  escape: r2,
  link: x2,
  nolink: Md,
  punctuation: n2,
  reflink: Ad,
  reflinkSearch: b2,
  tag: y2,
  text: a2,
  url: ki
}, C2 = {
  ...wo,
  link: pt(/^!?\[(label)\]\((.*?)\)/).replace("label", Da).getRegex(),
  reflink: pt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Da).getRegex()
}, Cs = {
  ...wo,
  emStrongRDelimAst: d2,
  emStrongLDelim: h2,
  url: pt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, v2 = {
  ...Cs,
  br: pt(_d).replace("{2,}", "*").getRegex(),
  text: pt(Cs.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Vi = {
  normal: vo,
  gfm: t2,
  pedantic: e22
}, li = {
  normal: wo,
  gfm: Cs,
  breaks: v2,
  pedantic: C2
}, k2 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Gl = (e8) => k2[e8];
function de(e8, t) {
  if (t) {
    if (Yt.escapeTest.test(e8))
      return e8.replace(Yt.escapeReplace, Gl);
  } else if (Yt.escapeTestNoEncode.test(e8))
    return e8.replace(Yt.escapeReplaceNoEncode, Gl);
  return e8;
}
function Xl(e8) {
  try {
    e8 = encodeURI(e8).replace(Yt.percentDecode, "%");
  } catch {
    return null;
  }
  return e8;
}
function Vl(e8, t) {
  var n;
  const r3 = e8.replace(Yt.findPipe, (o, s, l) => {
    let c = false, h = s;
    for (; --h >= 0 && l[h] === "\\"; )
      c = !c;
    return c ? "|" : " |";
  }), i = r3.split(Yt.splitPipe);
  let a = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !((n = i.at(-1)) != null && n.trim()) && i.pop(), t)
    if (i.length > t)
      i.splice(t);
    else
      for (; i.length < t; )
        i.push("");
  for (; a < i.length; a++)
    i[a] = i[a].trim().replace(Yt.slashPipe, "|");
  return i;
}
function ci(e8, t, r3) {
  const i = e8.length;
  if (i === 0)
    return "";
  let a = 0;
  for (; a < i && e8.charAt(i - a - 1) === t; )
    a++;
  return e8.slice(0, i - a);
}
function w2(e8, t) {
  if (e8.indexOf(t[1]) === -1)
    return -1;
  let r3 = 0;
  for (let i = 0; i < e8.length; i++)
    if (e8[i] === "\\")
      i++;
    else if (e8[i] === t[0])
      r3++;
    else if (e8[i] === t[1] && (r3--, r3 < 0))
      return i;
  return r3 > 0 ? -2 : -1;
}
function Zl(e8, t, r3, i, a) {
  const n = t.href, o = t.title || null, s = e8[1].replace(a.other.outputLinkReplace, "$1");
  i.state.inLink = true;
  const l = {
    type: e8[0].charAt(0) === "!" ? "image" : "link",
    raw: r3,
    href: n,
    title: o,
    text: s,
    tokens: i.inlineTokens(s)
  };
  return i.state.inLink = false, l;
}
function _2(e8, t, r3) {
  const i = e8.match(r3.other.indentCodeCompensation);
  if (i === null)
    return t;
  const a = i[1];
  return t.split(`
`).map((n) => {
    const o = n.match(r3.other.beginningSpace);
    if (o === null)
      return n;
    const [s] = o;
    return s.length >= a.length ? n.slice(a.length) : n;
  }).join(`
`);
}
var Ra = class {
  // set by the lexer
  constructor(e8) {
    yt(this, "options");
    yt(this, "rules");
    yt(this, "lexer");
    this.options = e8 || ur;
  }
  space(e8) {
    const t = this.rules.block.newline.exec(e8);
    if (t && t[0].length > 0)
      return {
        type: "space",
        raw: t[0]
      };
  }
  code(e8) {
    const t = this.rules.block.code.exec(e8);
    if (t) {
      const r3 = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? r3 : ci(r3, `
`)
      };
    }
  }
  fences(e8) {
    const t = this.rules.block.fences.exec(e8);
    if (t) {
      const r3 = t[0], i = _2(r3, t[3] || "", this.rules);
      return {
        type: "code",
        raw: r3,
        lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
        text: i
      };
    }
  }
  heading(e8) {
    const t = this.rules.block.heading.exec(e8);
    if (t) {
      let r3 = t[2].trim();
      if (this.rules.other.endingHash.test(r3)) {
        const i = ci(r3, "#");
        (this.options.pedantic || !i || this.rules.other.endingSpaceChar.test(i)) && (r3 = i.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: r3,
        tokens: this.lexer.inline(r3)
      };
    }
  }
  hr(e8) {
    const t = this.rules.block.hr.exec(e8);
    if (t)
      return {
        type: "hr",
        raw: ci(t[0], `
`)
      };
  }
  blockquote(e8) {
    const t = this.rules.block.blockquote.exec(e8);
    if (t) {
      let r3 = ci(t[0], `
`).split(`
`), i = "", a = "";
      const n = [];
      for (; r3.length > 0; ) {
        let o = false;
        const s = [];
        let l;
        for (l = 0; l < r3.length; l++)
          if (this.rules.other.blockquoteStart.test(r3[l]))
            s.push(r3[l]), o = true;
          else if (!o)
            s.push(r3[l]);
          else
            break;
        r3 = r3.slice(l);
        const c = s.join(`
`), h = c.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        i = i ? `${i}
${c}` : c, a = a ? `${a}
${h}` : h;
        const u = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(h, n, true), this.lexer.state.top = u, r3.length === 0)
          break;
        const d3 = n.at(-1);
        if ((d3 == null ? void 0 : d3.type) === "code")
          break;
        if ((d3 == null ? void 0 : d3.type) === "blockquote") {
          const f = d3, g = f.raw + `
` + r3.join(`
`), m = this.blockquote(g);
          n[n.length - 1] = m, i = i.substring(0, i.length - f.raw.length) + m.raw, a = a.substring(0, a.length - f.text.length) + m.text;
          break;
        } else if ((d3 == null ? void 0 : d3.type) === "list") {
          const f = d3, g = f.raw + `
` + r3.join(`
`), m = this.list(g);
          n[n.length - 1] = m, i = i.substring(0, i.length - d3.raw.length) + m.raw, a = a.substring(0, a.length - f.raw.length) + m.raw, r3 = g.substring(n.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw: i,
        tokens: n,
        text: a
      };
    }
  }
  list(e8) {
    let t = this.rules.block.list.exec(e8);
    if (t) {
      let r3 = t[1].trim();
      const i = r3.length > 1, a = {
        type: "list",
        raw: "",
        ordered: i,
        start: i ? +r3.slice(0, -1) : "",
        loose: false,
        items: []
      };
      r3 = i ? `\\d{1,9}\\${r3.slice(-1)}` : `\\${r3}`, this.options.pedantic && (r3 = i ? r3 : "[*+-]");
      const n = this.rules.other.listItemRegex(r3);
      let o = false;
      for (; e8; ) {
        let l = false, c = "", h = "";
        if (!(t = n.exec(e8)) || this.rules.block.hr.test(e8))
          break;
        c = t[0], e8 = e8.substring(c.length);
        let u = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (x) => " ".repeat(3 * x.length)), d3 = e8.split(`
`, 1)[0], f = !u.trim(), g = 0;
        if (this.options.pedantic ? (g = 2, h = u.trimStart()) : f ? g = t[1].length + 1 : (g = t[2].search(this.rules.other.nonSpaceChar), g = g > 4 ? 1 : g, h = u.slice(g), g += t[1].length), f && this.rules.other.blankLine.test(d3) && (c += d3 + `
`, e8 = e8.substring(d3.length + 1), l = true), !l) {
          const x = this.rules.other.nextBulletRegex(g), b = this.rules.other.hrRegex(g), v = this.rules.other.fencesBeginRegex(g), S = this.rules.other.headingBeginRegex(g), _ = this.rules.other.htmlBeginRegex(g);
          for (; e8; ) {
            const C = e8.split(`
`, 1)[0];
            let k;
            if (d3 = C, this.options.pedantic ? (d3 = d3.replace(this.rules.other.listReplaceNesting, "  "), k = d3) : k = d3.replace(this.rules.other.tabCharGlobal, "    "), v.test(d3) || S.test(d3) || _.test(d3) || x.test(d3) || b.test(d3))
              break;
            if (k.search(this.rules.other.nonSpaceChar) >= g || !d3.trim())
              h += `
` + k.slice(g);
            else {
              if (f || u.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || v.test(u) || S.test(u) || b.test(u))
                break;
              h += `
` + d3;
            }
            !f && !d3.trim() && (f = true), c += C + `
`, e8 = e8.substring(C.length + 1), u = k.slice(g);
          }
        }
        a.loose || (o ? a.loose = true : this.rules.other.doubleBlankLine.test(c) && (o = true));
        let m = null, y;
        this.options.gfm && (m = this.rules.other.listIsTask.exec(h), m && (y = m[0] !== "[ ] ", h = h.replace(this.rules.other.listReplaceTask, ""))), a.items.push({
          type: "list_item",
          raw: c,
          task: !!m,
          checked: y,
          loose: false,
          text: h,
          tokens: []
        }), a.raw += c;
      }
      const s = a.items.at(-1);
      if (s)
        s.raw = s.raw.trimEnd(), s.text = s.text.trimEnd();
      else
        return;
      a.raw = a.raw.trimEnd();
      for (let l = 0; l < a.items.length; l++)
        if (this.lexer.state.top = false, a.items[l].tokens = this.lexer.blockTokens(a.items[l].text, []), !a.loose) {
          const c = a.items[l].tokens.filter((u) => u.type === "space"), h = c.length > 0 && c.some((u) => this.rules.other.anyLine.test(u.raw));
          a.loose = h;
        }
      if (a.loose)
        for (let l = 0; l < a.items.length; l++)
          a.items[l].loose = true;
      return a;
    }
  }
  html(e8) {
    const t = this.rules.block.html.exec(e8);
    if (t)
      return {
        type: "html",
        block: true,
        raw: t[0],
        pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
        text: t[0]
      };
  }
  def(e8) {
    const t = this.rules.block.def.exec(e8);
    if (t) {
      const r3 = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), i = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", a = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return {
        type: "def",
        tag: r3,
        raw: t[0],
        href: i,
        title: a
      };
    }
  }
  table(e8) {
    var o;
    const t = this.rules.block.table.exec(e8);
    if (!t || !this.rules.other.tableDelimiter.test(t[2]))
      return;
    const r3 = Vl(t[1]), i = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), a = (o = t[3]) != null && o.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], n = {
      type: "table",
      raw: t[0],
      header: [],
      align: [],
      rows: []
    };
    if (r3.length === i.length) {
      for (const s of i)
        this.rules.other.tableAlignRight.test(s) ? n.align.push("right") : this.rules.other.tableAlignCenter.test(s) ? n.align.push("center") : this.rules.other.tableAlignLeft.test(s) ? n.align.push("left") : n.align.push(null);
      for (let s = 0; s < r3.length; s++)
        n.header.push({
          text: r3[s],
          tokens: this.lexer.inline(r3[s]),
          header: true,
          align: n.align[s]
        });
      for (const s of a)
        n.rows.push(Vl(s, n.header.length).map((l, c) => ({
          text: l,
          tokens: this.lexer.inline(l),
          header: false,
          align: n.align[c]
        })));
      return n;
    }
  }
  lheading(e8) {
    const t = this.rules.block.lheading.exec(e8);
    if (t)
      return {
        type: "heading",
        raw: t[0],
        depth: t[2].charAt(0) === "=" ? 1 : 2,
        text: t[1],
        tokens: this.lexer.inline(t[1])
      };
  }
  paragraph(e8) {
    const t = this.rules.block.paragraph.exec(e8);
    if (t) {
      const r3 = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: r3,
        tokens: this.lexer.inline(r3)
      };
    }
  }
  text(e8) {
    const t = this.rules.block.text.exec(e8);
    if (t)
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        tokens: this.lexer.inline(t[0])
      };
  }
  escape(e8) {
    const t = this.rules.inline.escape.exec(e8);
    if (t)
      return {
        type: "escape",
        raw: t[0],
        text: t[1]
      };
  }
  tag(e8) {
    const t = this.rules.inline.tag.exec(e8);
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
  link(e8) {
    const t = this.rules.inline.link.exec(e8);
    if (t) {
      const r3 = t[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(r3)) {
        if (!this.rules.other.endAngleBracket.test(r3))
          return;
        const n = ci(r3.slice(0, -1), "\\");
        if ((r3.length - n.length) % 2 === 0)
          return;
      } else {
        const n = w2(t[2], "()");
        if (n === -2)
          return;
        if (n > -1) {
          const s = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + n;
          t[2] = t[2].substring(0, n), t[0] = t[0].substring(0, s).trim(), t[3] = "";
        }
      }
      let i = t[2], a = "";
      if (this.options.pedantic) {
        const n = this.rules.other.pedanticHrefTitle.exec(i);
        n && (i = n[1], a = n[3]);
      } else
        a = t[3] ? t[3].slice(1, -1) : "";
      return i = i.trim(), this.rules.other.startAngleBracket.test(i) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(r3) ? i = i.slice(1) : i = i.slice(1, -1)), Zl(t, {
        href: i && i.replace(this.rules.inline.anyPunctuation, "$1"),
        title: a && a.replace(this.rules.inline.anyPunctuation, "$1")
      }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e8, t) {
    let r3;
    if ((r3 = this.rules.inline.reflink.exec(e8)) || (r3 = this.rules.inline.nolink.exec(e8))) {
      const i = (r3[2] || r3[1]).replace(this.rules.other.multipleSpaceGlobal, " "), a = t[i.toLowerCase()];
      if (!a) {
        const n = r3[0].charAt(0);
        return {
          type: "text",
          raw: n,
          text: n
        };
      }
      return Zl(r3, a, r3[0], this.lexer, this.rules);
    }
  }
  emStrong(e8, t, r3 = "") {
    let i = this.rules.inline.emStrongLDelim.exec(e8);
    if (!i || i[3] && r3.match(this.rules.other.unicodeAlphaNumeric))
      return;
    if (!(i[1] || i[2] || "") || !r3 || this.rules.inline.punctuation.exec(r3)) {
      const n = [...i[0]].length - 1;
      let o, s, l = n, c = 0;
      const h = i[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (h.lastIndex = 0, t = t.slice(-1 * e8.length + n); (i = h.exec(t)) != null; ) {
        if (o = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !o)
          continue;
        if (s = [...o].length, i[3] || i[4]) {
          l += s;
          continue;
        } else if ((i[5] || i[6]) && n % 3 && !((n + s) % 3)) {
          c += s;
          continue;
        }
        if (l -= s, l > 0)
          continue;
        s = Math.min(s, s + l + c);
        const u = [...i[0]][0].length, d3 = e8.slice(0, n + i.index + u + s);
        if (Math.min(n, s) % 2) {
          const g = d3.slice(1, -1);
          return {
            type: "em",
            raw: d3,
            text: g,
            tokens: this.lexer.inlineTokens(g)
          };
        }
        const f = d3.slice(2, -2);
        return {
          type: "strong",
          raw: d3,
          text: f,
          tokens: this.lexer.inlineTokens(f)
        };
      }
    }
  }
  codespan(e8) {
    const t = this.rules.inline.code.exec(e8);
    if (t) {
      let r3 = t[2].replace(this.rules.other.newLineCharGlobal, " ");
      const i = this.rules.other.nonSpaceChar.test(r3), a = this.rules.other.startingSpaceChar.test(r3) && this.rules.other.endingSpaceChar.test(r3);
      return i && a && (r3 = r3.substring(1, r3.length - 1)), {
        type: "codespan",
        raw: t[0],
        text: r3
      };
    }
  }
  br(e8) {
    const t = this.rules.inline.br.exec(e8);
    if (t)
      return {
        type: "br",
        raw: t[0]
      };
  }
  del(e8) {
    const t = this.rules.inline.del.exec(e8);
    if (t)
      return {
        type: "del",
        raw: t[0],
        text: t[2],
        tokens: this.lexer.inlineTokens(t[2])
      };
  }
  autolink(e8) {
    const t = this.rules.inline.autolink.exec(e8);
    if (t) {
      let r3, i;
      return t[2] === "@" ? (r3 = t[1], i = "mailto:" + r3) : (r3 = t[1], i = r3), {
        type: "link",
        raw: t[0],
        text: r3,
        href: i,
        tokens: [
          {
            type: "text",
            raw: r3,
            text: r3
          }
        ]
      };
    }
  }
  url(e8) {
    var r3;
    let t;
    if (t = this.rules.inline.url.exec(e8)) {
      let i, a;
      if (t[2] === "@")
        i = t[0], a = "mailto:" + i;
      else {
        let n;
        do
          n = t[0], t[0] = ((r3 = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : r3[0]) ?? "";
        while (n !== t[0]);
        i = t[0], t[1] === "www." ? a = "http://" + t[0] : a = t[0];
      }
      return {
        type: "link",
        raw: t[0],
        text: i,
        href: a,
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
  inlineText(e8) {
    const t = this.rules.inline.text.exec(e8);
    if (t) {
      const r3 = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        escaped: r3
      };
    }
  }
}, Be = class vs {
  constructor(t) {
    yt(this, "tokens");
    yt(this, "options");
    yt(this, "state");
    yt(this, "tokenizer");
    yt(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || ur, this.options.tokenizer = this.options.tokenizer || new Ra(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const r3 = {
      other: Yt,
      block: Vi.normal,
      inline: li.normal
    };
    this.options.pedantic ? (r3.block = Vi.pedantic, r3.inline = li.pedantic) : this.options.gfm && (r3.block = Vi.gfm, this.options.breaks ? r3.inline = li.breaks : r3.inline = li.gfm), this.tokenizer.rules = r3;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Vi,
      inline: li
    };
  }
  /**
   * Static Lex Method
   */
  static lex(t, r3) {
    return new vs(r3).lex(t);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(t, r3) {
    return new vs(r3).inlineTokens(t);
  }
  /**
   * Preprocessing
   */
  lex(t) {
    t = t.replace(Yt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let r3 = 0; r3 < this.inlineQueue.length; r3++) {
      const i = this.inlineQueue[r3];
      this.inlineTokens(i.src, i.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, r3 = [], i = false) {
    var a, n, o;
    for (this.options.pedantic && (t = t.replace(Yt.tabCharGlobal, "    ").replace(Yt.spaceLine, "")); t; ) {
      let s;
      if ((n = (a = this.options.extensions) == null ? void 0 : a.block) != null && n.some((c) => (s = c.call({ lexer: this }, t, r3)) ? (t = t.substring(s.raw.length), r3.push(s), true) : false))
        continue;
      if (s = this.tokenizer.space(t)) {
        t = t.substring(s.raw.length);
        const c = r3.at(-1);
        s.raw.length === 1 && c !== void 0 ? c.raw += `
` : r3.push(s);
        continue;
      }
      if (s = this.tokenizer.code(t)) {
        t = t.substring(s.raw.length);
        const c = r3.at(-1);
        (c == null ? void 0 : c.type) === "paragraph" || (c == null ? void 0 : c.type) === "text" ? (c.raw += `
` + s.raw, c.text += `
` + s.text, this.inlineQueue.at(-1).src = c.text) : r3.push(s);
        continue;
      }
      if (s = this.tokenizer.fences(t)) {
        t = t.substring(s.raw.length), r3.push(s);
        continue;
      }
      if (s = this.tokenizer.heading(t)) {
        t = t.substring(s.raw.length), r3.push(s);
        continue;
      }
      if (s = this.tokenizer.hr(t)) {
        t = t.substring(s.raw.length), r3.push(s);
        continue;
      }
      if (s = this.tokenizer.blockquote(t)) {
        t = t.substring(s.raw.length), r3.push(s);
        continue;
      }
      if (s = this.tokenizer.list(t)) {
        t = t.substring(s.raw.length), r3.push(s);
        continue;
      }
      if (s = this.tokenizer.html(t)) {
        t = t.substring(s.raw.length), r3.push(s);
        continue;
      }
      if (s = this.tokenizer.def(t)) {
        t = t.substring(s.raw.length);
        const c = r3.at(-1);
        (c == null ? void 0 : c.type) === "paragraph" || (c == null ? void 0 : c.type) === "text" ? (c.raw += `
` + s.raw, c.text += `
` + s.raw, this.inlineQueue.at(-1).src = c.text) : this.tokens.links[s.tag] || (this.tokens.links[s.tag] = {
          href: s.href,
          title: s.title
        });
        continue;
      }
      if (s = this.tokenizer.table(t)) {
        t = t.substring(s.raw.length), r3.push(s);
        continue;
      }
      if (s = this.tokenizer.lheading(t)) {
        t = t.substring(s.raw.length), r3.push(s);
        continue;
      }
      let l = t;
      if ((o = this.options.extensions) != null && o.startBlock) {
        let c = 1 / 0;
        const h = t.slice(1);
        let u;
        this.options.extensions.startBlock.forEach((d3) => {
          u = d3.call({ lexer: this }, h), typeof u == "number" && u >= 0 && (c = Math.min(c, u));
        }), c < 1 / 0 && c >= 0 && (l = t.substring(0, c + 1));
      }
      if (this.state.top && (s = this.tokenizer.paragraph(l))) {
        const c = r3.at(-1);
        i && (c == null ? void 0 : c.type) === "paragraph" ? (c.raw += `
` + s.raw, c.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = c.text) : r3.push(s), i = l.length !== t.length, t = t.substring(s.raw.length);
        continue;
      }
      if (s = this.tokenizer.text(t)) {
        t = t.substring(s.raw.length);
        const c = r3.at(-1);
        (c == null ? void 0 : c.type) === "text" ? (c.raw += `
` + s.raw, c.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = c.text) : r3.push(s);
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
    return this.state.top = true, r3;
  }
  inline(t, r3 = []) {
    return this.inlineQueue.push({ src: t, tokens: r3 }), r3;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(t, r3 = []) {
    var s, l, c;
    let i = t, a = null;
    if (this.tokens.links) {
      const h = Object.keys(this.tokens.links);
      if (h.length > 0)
        for (; (a = this.tokenizer.rules.inline.reflinkSearch.exec(i)) != null; )
          h.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (i = i.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (a = this.tokenizer.rules.inline.anyPunctuation.exec(i)) != null; )
      i = i.slice(0, a.index) + "++" + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (a = this.tokenizer.rules.inline.blockSkip.exec(i)) != null; )
      i = i.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let n = false, o = "";
    for (; t; ) {
      n || (o = ""), n = false;
      let h;
      if ((l = (s = this.options.extensions) == null ? void 0 : s.inline) != null && l.some((d3) => (h = d3.call({ lexer: this }, t, r3)) ? (t = t.substring(h.raw.length), r3.push(h), true) : false))
        continue;
      if (h = this.tokenizer.escape(t)) {
        t = t.substring(h.raw.length), r3.push(h);
        continue;
      }
      if (h = this.tokenizer.tag(t)) {
        t = t.substring(h.raw.length), r3.push(h);
        continue;
      }
      if (h = this.tokenizer.link(t)) {
        t = t.substring(h.raw.length), r3.push(h);
        continue;
      }
      if (h = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(h.raw.length);
        const d3 = r3.at(-1);
        h.type === "text" && (d3 == null ? void 0 : d3.type) === "text" ? (d3.raw += h.raw, d3.text += h.text) : r3.push(h);
        continue;
      }
      if (h = this.tokenizer.emStrong(t, i, o)) {
        t = t.substring(h.raw.length), r3.push(h);
        continue;
      }
      if (h = this.tokenizer.codespan(t)) {
        t = t.substring(h.raw.length), r3.push(h);
        continue;
      }
      if (h = this.tokenizer.br(t)) {
        t = t.substring(h.raw.length), r3.push(h);
        continue;
      }
      if (h = this.tokenizer.del(t)) {
        t = t.substring(h.raw.length), r3.push(h);
        continue;
      }
      if (h = this.tokenizer.autolink(t)) {
        t = t.substring(h.raw.length), r3.push(h);
        continue;
      }
      if (!this.state.inLink && (h = this.tokenizer.url(t))) {
        t = t.substring(h.raw.length), r3.push(h);
        continue;
      }
      let u = t;
      if ((c = this.options.extensions) != null && c.startInline) {
        let d3 = 1 / 0;
        const f = t.slice(1);
        let g;
        this.options.extensions.startInline.forEach((m) => {
          g = m.call({ lexer: this }, f), typeof g == "number" && g >= 0 && (d3 = Math.min(d3, g));
        }), d3 < 1 / 0 && d3 >= 0 && (u = t.substring(0, d3 + 1));
      }
      if (h = this.tokenizer.inlineText(u)) {
        t = t.substring(h.raw.length), h.raw.slice(-1) !== "_" && (o = h.raw.slice(-1)), n = true;
        const d3 = r3.at(-1);
        (d3 == null ? void 0 : d3.type) === "text" ? (d3.raw += h.raw, d3.text += h.text) : r3.push(h);
        continue;
      }
      if (t) {
        const d3 = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(d3);
          break;
        } else
          throw new Error(d3);
      }
    }
    return r3;
  }
}, Ia = class {
  // set by the parser
  constructor(e8) {
    yt(this, "options");
    yt(this, "parser");
    this.options = e8 || ur;
  }
  space(e8) {
    return "";
  }
  code({ text: e8, lang: t, escaped: r3 }) {
    var n;
    const i = (n = (t || "").match(Yt.notSpaceStart)) == null ? void 0 : n[0], a = e8.replace(Yt.endingNewline, "") + `
`;
    return i ? '<pre><code class="language-' + de(i) + '">' + (r3 ? a : de(a, true)) + `</code></pre>
` : "<pre><code>" + (r3 ? a : de(a, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: e8 }) {
    return `<blockquote>
${this.parser.parse(e8)}</blockquote>
`;
  }
  html({ text: e8 }) {
    return e8;
  }
  heading({ tokens: e8, depth: t }) {
    return `<h${t}>${this.parser.parseInline(e8)}</h${t}>
`;
  }
  hr(e8) {
    return `<hr>
`;
  }
  list(e8) {
    const t = e8.ordered, r3 = e8.start;
    let i = "";
    for (let o = 0; o < e8.items.length; o++) {
      const s = e8.items[o];
      i += this.listitem(s);
    }
    const a = t ? "ol" : "ul", n = t && r3 !== 1 ? ' start="' + r3 + '"' : "";
    return "<" + a + n + `>
` + i + "</" + a + `>
`;
  }
  listitem(e8) {
    var r3;
    let t = "";
    if (e8.task) {
      const i = this.checkbox({ checked: !!e8.checked });
      e8.loose ? ((r3 = e8.tokens[0]) == null ? void 0 : r3.type) === "paragraph" ? (e8.tokens[0].text = i + " " + e8.tokens[0].text, e8.tokens[0].tokens && e8.tokens[0].tokens.length > 0 && e8.tokens[0].tokens[0].type === "text" && (e8.tokens[0].tokens[0].text = i + " " + de(e8.tokens[0].tokens[0].text), e8.tokens[0].tokens[0].escaped = true)) : e8.tokens.unshift({
        type: "text",
        raw: i + " ",
        text: i + " ",
        escaped: true
      }) : t += i + " ";
    }
    return t += this.parser.parse(e8.tokens, !!e8.loose), `<li>${t}</li>
`;
  }
  checkbox({ checked: e8 }) {
    return "<input " + (e8 ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: e8 }) {
    return `<p>${this.parser.parseInline(e8)}</p>
`;
  }
  table(e8) {
    let t = "", r3 = "";
    for (let a = 0; a < e8.header.length; a++)
      r3 += this.tablecell(e8.header[a]);
    t += this.tablerow({ text: r3 });
    let i = "";
    for (let a = 0; a < e8.rows.length; a++) {
      const n = e8.rows[a];
      r3 = "";
      for (let o = 0; o < n.length; o++)
        r3 += this.tablecell(n[o]);
      i += this.tablerow({ text: r3 });
    }
    return i && (i = `<tbody>${i}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + i + `</table>
`;
  }
  tablerow({ text: e8 }) {
    return `<tr>
${e8}</tr>
`;
  }
  tablecell(e8) {
    const t = this.parser.parseInline(e8.tokens), r3 = e8.header ? "th" : "td";
    return (e8.align ? `<${r3} align="${e8.align}">` : `<${r3}>`) + t + `</${r3}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens: e8 }) {
    return `<strong>${this.parser.parseInline(e8)}</strong>`;
  }
  em({ tokens: e8 }) {
    return `<em>${this.parser.parseInline(e8)}</em>`;
  }
  codespan({ text: e8 }) {
    return `<code>${de(e8, true)}</code>`;
  }
  br(e8) {
    return "<br>";
  }
  del({ tokens: e8 }) {
    return `<del>${this.parser.parseInline(e8)}</del>`;
  }
  link({ href: e8, title: t, tokens: r3 }) {
    const i = this.parser.parseInline(r3), a = Xl(e8);
    if (a === null)
      return i;
    e8 = a;
    let n = '<a href="' + e8 + '"';
    return t && (n += ' title="' + de(t) + '"'), n += ">" + i + "</a>", n;
  }
  image({ href: e8, title: t, text: r3, tokens: i }) {
    i && (r3 = this.parser.parseInline(i, this.parser.textRenderer));
    const a = Xl(e8);
    if (a === null)
      return de(r3);
    e8 = a;
    let n = `<img src="${e8}" alt="${r3}"`;
    return t && (n += ` title="${de(t)}"`), n += ">", n;
  }
  text(e8) {
    return "tokens" in e8 && e8.tokens ? this.parser.parseInline(e8.tokens) : "escaped" in e8 && e8.escaped ? e8.text : de(e8.text);
  }
}, _o = class {
  // no need for block level renderers
  strong({ text: e8 }) {
    return e8;
  }
  em({ text: e8 }) {
    return e8;
  }
  codespan({ text: e8 }) {
    return e8;
  }
  del({ text: e8 }) {
    return e8;
  }
  html({ text: e8 }) {
    return e8;
  }
  text({ text: e8 }) {
    return e8;
  }
  link({ text: e8 }) {
    return "" + e8;
  }
  image({ text: e8 }) {
    return "" + e8;
  }
  br() {
    return "";
  }
}, Le = class ks {
  constructor(t) {
    yt(this, "options");
    yt(this, "renderer");
    yt(this, "textRenderer");
    this.options = t || ur, this.options.renderer = this.options.renderer || new Ia(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new _o();
  }
  /**
   * Static Parse Method
   */
  static parse(t, r3) {
    return new ks(r3).parse(t);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(t, r3) {
    return new ks(r3).parseInline(t);
  }
  /**
   * Parse Loop
   */
  parse(t, r3 = true) {
    var a, n;
    let i = "";
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      if ((n = (a = this.options.extensions) == null ? void 0 : a.renderers) != null && n[s.type]) {
        const c = s, h = this.options.extensions.renderers[c.type].call({ parser: this }, c);
        if (h !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(c.type)) {
          i += h || "";
          continue;
        }
      }
      const l = s;
      switch (l.type) {
        case "space": {
          i += this.renderer.space(l);
          continue;
        }
        case "hr": {
          i += this.renderer.hr(l);
          continue;
        }
        case "heading": {
          i += this.renderer.heading(l);
          continue;
        }
        case "code": {
          i += this.renderer.code(l);
          continue;
        }
        case "table": {
          i += this.renderer.table(l);
          continue;
        }
        case "blockquote": {
          i += this.renderer.blockquote(l);
          continue;
        }
        case "list": {
          i += this.renderer.list(l);
          continue;
        }
        case "html": {
          i += this.renderer.html(l);
          continue;
        }
        case "paragraph": {
          i += this.renderer.paragraph(l);
          continue;
        }
        case "text": {
          let c = l, h = this.renderer.text(c);
          for (; o + 1 < t.length && t[o + 1].type === "text"; )
            c = t[++o], h += `
` + this.renderer.text(c);
          r3 ? i += this.renderer.paragraph({
            type: "paragraph",
            raw: h,
            text: h,
            tokens: [{ type: "text", raw: h, text: h, escaped: true }]
          }) : i += h;
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
    return i;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(t, r3 = this.renderer) {
    var a, n;
    let i = "";
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      if ((n = (a = this.options.extensions) == null ? void 0 : a.renderers) != null && n[s.type]) {
        const c = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (c !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
          i += c || "";
          continue;
        }
      }
      const l = s;
      switch (l.type) {
        case "escape": {
          i += r3.text(l);
          break;
        }
        case "html": {
          i += r3.html(l);
          break;
        }
        case "link": {
          i += r3.link(l);
          break;
        }
        case "image": {
          i += r3.image(l);
          break;
        }
        case "strong": {
          i += r3.strong(l);
          break;
        }
        case "em": {
          i += r3.em(l);
          break;
        }
        case "codespan": {
          i += r3.codespan(l);
          break;
        }
        case "br": {
          i += r3.br(l);
          break;
        }
        case "del": {
          i += r3.del(l);
          break;
        }
        case "text": {
          i += r3.text(l);
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
    return i;
  }
}, Vn, ha = (Vn = class {
  constructor(e8) {
    yt(this, "options");
    yt(this, "block");
    this.options = e8 || ur;
  }
  /**
   * Process markdown before marked
   */
  preprocess(e8) {
    return e8;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(e8) {
    return e8;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(e8) {
    return e8;
  }
  /**
   * Provide function to tokenize markdown
   */
  provideLexer() {
    return this.block ? Be.lex : Be.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? Le.parse : Le.parseInline;
  }
}, yt(Vn, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
])), Vn), S2 = class {
  constructor(...e8) {
    yt(this, "defaults", mo());
    yt(this, "options", this.setOptions);
    yt(this, "parse", this.parseMarkdown(true));
    yt(this, "parseInline", this.parseMarkdown(false));
    yt(this, "Parser", Le);
    yt(this, "Renderer", Ia);
    yt(this, "TextRenderer", _o);
    yt(this, "Lexer", Be);
    yt(this, "Tokenizer", Ra);
    yt(this, "Hooks", ha);
    this.use(...e8);
  }
  /**
   * Run callback for every token
   */
  walkTokens(e8, t) {
    var i, a;
    let r3 = [];
    for (const n of e8)
      switch (r3 = r3.concat(t.call(this, n)), n.type) {
        case "table": {
          const o = n;
          for (const s of o.header)
            r3 = r3.concat(this.walkTokens(s.tokens, t));
          for (const s of o.rows)
            for (const l of s)
              r3 = r3.concat(this.walkTokens(l.tokens, t));
          break;
        }
        case "list": {
          const o = n;
          r3 = r3.concat(this.walkTokens(o.items, t));
          break;
        }
        default: {
          const o = n;
          (a = (i = this.defaults.extensions) == null ? void 0 : i.childTokens) != null && a[o.type] ? this.defaults.extensions.childTokens[o.type].forEach((s) => {
            const l = o[s].flat(1 / 0);
            r3 = r3.concat(this.walkTokens(l, t));
          }) : o.tokens && (r3 = r3.concat(this.walkTokens(o.tokens, t)));
        }
      }
    return r3;
  }
  use(...e8) {
    const t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e8.forEach((r3) => {
      const i = { ...r3 };
      if (i.async = this.defaults.async || i.async || false, r3.extensions && (r3.extensions.forEach((a) => {
        if (!a.name)
          throw new Error("extension name required");
        if ("renderer" in a) {
          const n = t.renderers[a.name];
          n ? t.renderers[a.name] = function(...o) {
            let s = a.renderer.apply(this, o);
            return s === false && (s = n.apply(this, o)), s;
          } : t.renderers[a.name] = a.renderer;
        }
        if ("tokenizer" in a) {
          if (!a.level || a.level !== "block" && a.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const n = t[a.level];
          n ? n.unshift(a.tokenizer) : t[a.level] = [a.tokenizer], a.start && (a.level === "block" ? t.startBlock ? t.startBlock.push(a.start) : t.startBlock = [a.start] : a.level === "inline" && (t.startInline ? t.startInline.push(a.start) : t.startInline = [a.start]));
        }
        "childTokens" in a && a.childTokens && (t.childTokens[a.name] = a.childTokens);
      }), i.extensions = t), r3.renderer) {
        const a = this.defaults.renderer || new Ia(this.defaults);
        for (const n in r3.renderer) {
          if (!(n in a))
            throw new Error(`renderer '${n}' does not exist`);
          if (["options", "parser"].includes(n))
            continue;
          const o = n, s = r3.renderer[o], l = a[o];
          a[o] = (...c) => {
            let h = s.apply(a, c);
            return h === false && (h = l.apply(a, c)), h || "";
          };
        }
        i.renderer = a;
      }
      if (r3.tokenizer) {
        const a = this.defaults.tokenizer || new Ra(this.defaults);
        for (const n in r3.tokenizer) {
          if (!(n in a))
            throw new Error(`tokenizer '${n}' does not exist`);
          if (["options", "rules", "lexer"].includes(n))
            continue;
          const o = n, s = r3.tokenizer[o], l = a[o];
          a[o] = (...c) => {
            let h = s.apply(a, c);
            return h === false && (h = l.apply(a, c)), h;
          };
        }
        i.tokenizer = a;
      }
      if (r3.hooks) {
        const a = this.defaults.hooks || new ha();
        for (const n in r3.hooks) {
          if (!(n in a))
            throw new Error(`hook '${n}' does not exist`);
          if (["options", "block"].includes(n))
            continue;
          const o = n, s = r3.hooks[o], l = a[o];
          ha.passThroughHooks.has(n) ? a[o] = (c) => {
            if (this.defaults.async)
              return Promise.resolve(s.call(a, c)).then((u) => l.call(a, u));
            const h = s.call(a, c);
            return l.call(a, h);
          } : a[o] = (...c) => {
            let h = s.apply(a, c);
            return h === false && (h = l.apply(a, c)), h;
          };
        }
        i.hooks = a;
      }
      if (r3.walkTokens) {
        const a = this.defaults.walkTokens, n = r3.walkTokens;
        i.walkTokens = function(o) {
          let s = [];
          return s.push(n.call(this, o)), a && (s = s.concat(a.call(this, o))), s;
        };
      }
      this.defaults = { ...this.defaults, ...i };
    }), this;
  }
  setOptions(e8) {
    return this.defaults = { ...this.defaults, ...e8 }, this;
  }
  lexer(e8, t) {
    return Be.lex(e8, t ?? this.defaults);
  }
  parser(e8, t) {
    return Le.parse(e8, t ?? this.defaults);
  }
  parseMarkdown(e8) {
    return (r3, i) => {
      const a = { ...i }, n = { ...this.defaults, ...a }, o = this.onError(!!n.silent, !!n.async);
      if (this.defaults.async === true && a.async === false)
        return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof r3 > "u" || r3 === null)
        return o(new Error("marked(): input parameter is undefined or null"));
      if (typeof r3 != "string")
        return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r3) + ", string expected"));
      n.hooks && (n.hooks.options = n, n.hooks.block = e8);
      const s = n.hooks ? n.hooks.provideLexer() : e8 ? Be.lex : Be.lexInline, l = n.hooks ? n.hooks.provideParser() : e8 ? Le.parse : Le.parseInline;
      if (n.async)
        return Promise.resolve(n.hooks ? n.hooks.preprocess(r3) : r3).then((c) => s(c, n)).then((c) => n.hooks ? n.hooks.processAllTokens(c) : c).then((c) => n.walkTokens ? Promise.all(this.walkTokens(c, n.walkTokens)).then(() => c) : c).then((c) => l(c, n)).then((c) => n.hooks ? n.hooks.postprocess(c) : c).catch(o);
      try {
        n.hooks && (r3 = n.hooks.preprocess(r3));
        let c = s(r3, n);
        n.hooks && (c = n.hooks.processAllTokens(c)), n.walkTokens && this.walkTokens(c, n.walkTokens);
        let h = l(c, n);
        return n.hooks && (h = n.hooks.postprocess(h)), h;
      } catch (c) {
        return o(c);
      }
    };
  }
  onError(e8, t) {
    return (r3) => {
      if (r3.message += `
Please report this to https://github.com/markedjs/marked.`, e8) {
        const i = "<p>An error occurred:</p><pre>" + de(r3.message + "", true) + "</pre>";
        return t ? Promise.resolve(i) : i;
      }
      if (t)
        return Promise.reject(r3);
      throw r3;
    };
  }
}, nr = new S2();
function ft(e8, t) {
  return nr.parse(e8, t);
}
ft.options = ft.setOptions = function(e8) {
  return nr.setOptions(e8), ft.defaults = nr.defaults, Cd(ft.defaults), ft;
};
ft.getDefaults = mo;
ft.defaults = ur;
ft.use = function(...e8) {
  return nr.use(...e8), ft.defaults = nr.defaults, Cd(ft.defaults), ft;
};
ft.walkTokens = function(e8, t) {
  return nr.walkTokens(e8, t);
};
ft.parseInline = nr.parseInline;
ft.Parser = Le;
ft.parser = Le.parse;
ft.Renderer = Ia;
ft.TextRenderer = _o;
ft.Lexer = Be;
ft.lexer = Be.lex;
ft.Tokenizer = Ra;
ft.Hooks = ha;
ft.parse = ft;
ft.options;
ft.setOptions;
ft.use;
ft.walkTokens;
ft.parseInline;
Le.parse;
Be.lex;
function Ed(e8) {
  for (var t = [], r3 = 1; r3 < arguments.length; r3++)
    t[r3 - 1] = arguments[r3];
  var i = Array.from(typeof e8 == "string" ? [e8] : e8);
  i[i.length - 1] = i[i.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var a = i.reduce(function(s, l) {
    var c = l.match(/\n([\t ]+|(?!\s).)/g);
    return c ? s.concat(c.map(function(h) {
      var u, d3;
      return (d3 = (u = h.match(/[\t ]/g)) === null || u === void 0 ? void 0 : u.length) !== null && d3 !== void 0 ? d3 : 0;
    })) : s;
  }, []);
  if (a.length) {
    var n = new RegExp(`
[	 ]{` + Math.min.apply(Math, a) + "}", "g");
    i = i.map(function(s) {
      return s.replace(n, `
`);
    });
  }
  i[0] = i[0].replace(/^\r?\n/, "");
  var o = i[0];
  return t.forEach(function(s, l) {
    var c = o.match(/(?:^|\n)( *)$/), h = c ? c[1] : "", u = s;
    typeof s == "string" && s.includes(`
`) && (u = String(s).split(`
`).map(function(d3, f) {
      return f === 0 ? d3 : "" + h + d3;
    }).join(`
`)), o += u + i[l + 1];
  }), o;
}
function Fd(e8, { markdownAutoWrap: t }) {
  const i = e8.replace(/<br\/>/g, `
`).replace(/\n{2,}/g, `
`), a = Ed(i);
  return t === false ? a.replace(/ /g, "&nbsp;") : a;
}
p(Fd, "preprocessMarkdown");
function Od(e8, t = {}) {
  const r3 = Fd(e8, t), i = ft.lexer(r3), a = [[]];
  let n = 0;
  function o(s, l = "normal") {
    s.type === "text" ? s.text.split(`
`).forEach((h, u) => {
      u !== 0 && (n++, a.push([])), h.split(" ").forEach((d3) => {
        d3 = d3.replace(/&#39;/g, "'"), d3 && a[n].push({ content: d3, type: l });
      });
    }) : s.type === "strong" || s.type === "em" ? s.tokens.forEach((c) => {
      o(c, s.type);
    }) : s.type === "html" && a[n].push({ content: s.text, type: "normal" });
  }
  return p(o, "processNode"), i.forEach((s) => {
    var l;
    s.type === "paragraph" ? (l = s.tokens) == null || l.forEach((c) => {
      o(c);
    }) : s.type === "html" && a[n].push({ content: s.text, type: "normal" });
  }), a;
}
p(Od, "markdownToLines");
function $d(e8, { markdownAutoWrap: t } = {}) {
  const r3 = ft.lexer(e8);
  function i(a) {
    var n, o, s;
    return a.type === "text" ? t === false ? a.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : a.text.replace(/\n */g, "<br/>") : a.type === "strong" ? `<strong>${(n = a.tokens) == null ? void 0 : n.map(i).join("")}</strong>` : a.type === "em" ? `<em>${(o = a.tokens) == null ? void 0 : o.map(i).join("")}</em>` : a.type === "paragraph" ? `<p>${(s = a.tokens) == null ? void 0 : s.map(i).join("")}</p>` : a.type === "space" ? "" : a.type === "html" ? `${a.text}` : a.type === "escape" ? a.text : `Unsupported markdown: ${a.type}`;
  }
  return p(i, "output"), r3.map(i).join("");
}
p($d, "markdownToHTML");
function Dd(e8) {
  return Intl.Segmenter ? [...new Intl.Segmenter().segment(e8)].map((t) => t.segment) : [...e8];
}
p(Dd, "splitTextToChars");
function Rd(e8, t) {
  const r3 = Dd(t.content);
  return So(e8, [], r3, t.type);
}
p(Rd, "splitWordToFitWidth");
function So(e8, t, r3, i) {
  if (r3.length === 0)
    return [
      { content: t.join(""), type: i },
      { content: "", type: i }
    ];
  const [a, ...n] = r3, o = [...t, a];
  return e8([{ content: o.join(""), type: i }]) ? So(e8, o, n, i) : (t.length === 0 && a && (t.push(a), r3.shift()), [
    { content: t.join(""), type: i },
    { content: r3.join(""), type: i }
  ]);
}
p(So, "splitWordToFitWidthRecursion");
function Id(e8, t) {
  if (e8.some(({ content: r3 }) => r3.includes(`
`)))
    throw new Error("splitLineToFitWidth does not support newlines in the line");
  return Pa(e8, t);
}
p(Id, "splitLineToFitWidth");
function Pa(e8, t, r3 = [], i = []) {
  if (e8.length === 0)
    return i.length > 0 && r3.push(i), r3.length > 0 ? r3 : [];
  let a = "";
  e8[0].content === " " && (a = " ", e8.shift());
  const n = e8.shift() ?? { content: " ", type: "normal" }, o = [...i];
  if (a !== "" && o.push({ content: a, type: "normal" }), o.push(n), t(o))
    return Pa(e8, t, r3, o);
  if (i.length > 0)
    r3.push(i), e8.unshift(n);
  else if (n.content) {
    const [s, l] = Rd(t, n);
    r3.push([s]), l.content && e8.unshift(l);
  }
  return Pa(e8, t, r3);
}
p(Pa, "splitLineToFitWidthRecursion");
function ws(e8, t) {
  t && e8.attr("style", t);
}
p(ws, "applyStyle");
async function Pd(e8, t, r3, i, a = false) {
  const n = e8.append("foreignObject");
  n.attr("width", `${10 * r3}px`), n.attr("height", `${10 * r3}px`);
  const o = n.append("xhtml:div");
  let s = t.label;
  t.label && Pr(t.label) && (s = await zs(t.label.replace(Hr.lineBreakRegex, `
`), dt()));
  const l = t.isNode ? "nodeLabel" : "edgeLabel", c = o.append("span");
  c.html(s), ws(c, t.labelStyle), c.attr("class", `${l} ${i}`), ws(o, t.labelStyle), o.style("display", "table-cell"), o.style("white-space", "nowrap"), o.style("line-height", "1.5"), o.style("max-width", r3 + "px"), o.style("text-align", "center"), o.attr("xmlns", "http://www.w3.org/1999/xhtml"), a && o.attr("class", "labelBkg");
  let h = o.node().getBoundingClientRect();
  return h.width === r3 && (o.style("display", "table"), o.style("white-space", "break-spaces"), o.style("width", r3 + "px"), h = o.node().getBoundingClientRect()), n.node();
}
p(Pd, "addHtmlSpan");
function cn(e8, t, r3) {
  return e8.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", t * r3 - 0.1 + "em").attr("dy", r3 + "em");
}
p(cn, "createTspan");
function Nd(e8, t, r3) {
  const i = e8.append("text"), a = cn(i, 1, t);
  hn(a, r3);
  const n = a.node().getComputedTextLength();
  return i.remove(), n;
}
p(Nd, "computeWidthOfText");
function T2(e8, t, r3) {
  var o;
  const i = e8.append("text"), a = cn(i, 1, t);
  hn(a, [{ content: r3, type: "normal" }]);
  const n = (o = a.node()) == null ? void 0 : o.getBoundingClientRect();
  return n && i.remove(), n;
}
p(T2, "computeDimensionOfText");
function zd(e8, t, r3, i = false) {
  const n = t.append("g"), o = n.insert("rect").attr("class", "background").attr("style", "stroke: none"), s = n.append("text").attr("y", "-10.1");
  let l = 0;
  for (const c of r3) {
    const h = /* @__PURE__ */ p((d3) => Nd(n, 1.1, d3) <= e8, "checkWidth"), u = h(c) ? [c] : Id(c, h);
    for (const d3 of u) {
      const f = cn(s, l, 1.1);
      hn(f, d3), l++;
    }
  }
  if (i) {
    const c = s.node().getBBox(), h = 2;
    return o.attr("x", c.x - h).attr("y", c.y - h).attr("width", c.width + 2 * h).attr("height", c.height + 2 * h), n.node();
  } else
    return s.node();
}
p(zd, "createFormattedText");
function hn(e8, t) {
  e8.text(""), t.forEach((r3, i) => {
    const a = e8.append("tspan").attr("font-style", r3.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", r3.type === "strong" ? "bold" : "normal");
    i === 0 ? a.text(r3.content) : a.text(" " + r3.content);
  });
}
p(hn, "updateTextContentAndStyles");
function Wd(e8) {
  return e8.replace(
    /fa[bklrs]?:fa-[\w-]+/g,
    // cspell: disable-line
    (t) => `<i class='${t.replace(":", " ")}'></i>`
  );
}
p(Wd, "replaceIconSubstring");
var He = /* @__PURE__ */ p(async (e8, t = "", {
  style: r3 = "",
  isTitle: i = false,
  classes: a = "",
  useHtmlLabels: n = true,
  isNode: o = true,
  width: s = 200,
  addSvgBackground: l = false
} = {}, c) => {
  if (D.debug(
    "XYZ createText",
    t,
    r3,
    i,
    a,
    n,
    o,
    "addSvgBackground: ",
    l
  ), n) {
    const h = $d(t, c), u = Wd(hr(h)), d3 = t.replace(/\\\\/g, "\\"), f = {
      isNode: o,
      label: Pr(t) ? d3 : u,
      labelStyle: r3.replace("fill:", "color:")
    };
    return await Pd(e8, f, s, a, l);
  } else {
    const h = t.replace(/<br\s*\/?>/g, "<br/>"), u = Od(h.replace("<br>", "<br/>"), c), d3 = zd(
      s,
      e8,
      u,
      t ? l : false
    );
    if (o) {
      /stroke:/.exec(r3) && (r3 = r3.replace("stroke:", "lineColor:"));
      const f = r3.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      Li$1(d3).attr("style", f);
    } else {
      const f = r3.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
      Li$1(d3).select("rect").attr("style", f.replace(/background:/g, "fill:"));
      const g = r3.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      Li$1(d3).select("text").attr("style", g);
    }
    return d3;
  }
}, "createText");
function Rn(e8, t, r3) {
  if (e8 && e8.length) {
    const [i, a] = t, n = Math.PI / 180 * r3, o = Math.cos(n), s = Math.sin(n);
    for (const l of e8) {
      const [c, h] = l;
      l[0] = (c - i) * o - (h - a) * s + i, l[1] = (c - i) * s + (h - a) * o + a;
    }
  }
}
function B2(e8, t) {
  return e8[0] === t[0] && e8[1] === t[1];
}
function L2(e8, t, r3, i = 1) {
  const a = r3, n = Math.max(t, 0.1), o = e8[0] && e8[0][0] && typeof e8[0][0] == "number" ? [e8] : e8, s = [0, 0];
  if (a)
    for (const c of o)
      Rn(c, s, a);
  const l = function(c, h, u) {
    const d3 = [];
    for (const b of c) {
      const v = [...b];
      B2(v[0], v[v.length - 1]) || v.push([v[0][0], v[0][1]]), v.length > 2 && d3.push(v);
    }
    const f = [];
    h = Math.max(h, 0.1);
    const g = [];
    for (const b of d3)
      for (let v = 0; v < b.length - 1; v++) {
        const S = b[v], _ = b[v + 1];
        if (S[1] !== _[1]) {
          const C = Math.min(S[1], _[1]);
          g.push({ ymin: C, ymax: Math.max(S[1], _[1]), x: C === S[1] ? S[0] : _[0], islope: (_[0] - S[0]) / (_[1] - S[1]) });
        }
      }
    if (g.sort((b, v) => b.ymin < v.ymin ? -1 : b.ymin > v.ymin ? 1 : b.x < v.x ? -1 : b.x > v.x ? 1 : b.ymax === v.ymax ? 0 : (b.ymax - v.ymax) / Math.abs(b.ymax - v.ymax)), !g.length)
      return f;
    let m = [], y = g[0].ymin, x = 0;
    for (; m.length || g.length; ) {
      if (g.length) {
        let b = -1;
        for (let v = 0; v < g.length && !(g[v].ymin > y); v++)
          b = v;
        g.splice(0, b + 1).forEach((v) => {
          m.push({ s: y, edge: v });
        });
      }
      if (m = m.filter((b) => !(b.edge.ymax <= y)), m.sort((b, v) => b.edge.x === v.edge.x ? 0 : (b.edge.x - v.edge.x) / Math.abs(b.edge.x - v.edge.x)), (u !== 1 || x % h == 0) && m.length > 1)
        for (let b = 0; b < m.length; b += 2) {
          const v = b + 1;
          if (v >= m.length)
            break;
          const S = m[b].edge, _ = m[v].edge;
          f.push([[Math.round(S.x), y], [Math.round(_.x), y]]);
        }
      y += u, m.forEach((b) => {
        b.edge.x = b.edge.x + u * b.edge.islope;
      }), x++;
    }
    return f;
  }(o, n, i);
  if (a) {
    for (const c of o)
      Rn(c, s, -a);
    (function(c, h, u) {
      const d3 = [];
      c.forEach((f) => d3.push(...f)), Rn(d3, h, u);
    })(l, s, -a);
  }
  return l;
}
function Pi(e8, t) {
  var r3;
  const i = t.hachureAngle + 90;
  let a = t.hachureGap;
  a < 0 && (a = 4 * t.strokeWidth), a = Math.round(Math.max(a, 0.1));
  let n = 1;
  return t.roughness >= 1 && (((r3 = t.randomizer) === null || r3 === void 0 ? void 0 : r3.next()) || Math.random()) > 0.7 && (n = a), L2(e8, a, i, n || 1);
}
class To {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r3) {
    return this._fillPolygons(t, r3);
  }
  _fillPolygons(t, r3) {
    const i = Pi(t, r3);
    return { type: "fillSketch", ops: this.renderLines(i, r3) };
  }
  renderLines(t, r3) {
    const i = [];
    for (const a of t)
      i.push(...this.helper.doubleLineOps(a[0][0], a[0][1], a[1][0], a[1][1], r3));
    return i;
  }
}
function un(e8) {
  const t = e8[0], r3 = e8[1];
  return Math.sqrt(Math.pow(t[0] - r3[0], 2) + Math.pow(t[1] - r3[1], 2));
}
class A2 extends To {
  fillPolygons(t, r3) {
    let i = r3.hachureGap;
    i < 0 && (i = 4 * r3.strokeWidth), i = Math.max(i, 0.1);
    const a = Pi(t, Object.assign({}, r3, { hachureGap: i })), n = Math.PI / 180 * r3.hachureAngle, o = [], s = 0.5 * i * Math.cos(n), l = 0.5 * i * Math.sin(n);
    for (const [c, h] of a)
      un([c, h]) && o.push([[c[0] - s, c[1] + l], [...h]], [[c[0] + s, c[1] - l], [...h]]);
    return { type: "fillSketch", ops: this.renderLines(o, r3) };
  }
}
class M2 extends To {
  fillPolygons(t, r3) {
    const i = this._fillPolygons(t, r3), a = Object.assign({}, r3, { hachureAngle: r3.hachureAngle + 90 }), n = this._fillPolygons(t, a);
    return i.ops = i.ops.concat(n.ops), i;
  }
}
class E2 {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r3) {
    const i = Pi(t, r3 = Object.assign({}, r3, { hachureAngle: 0 }));
    return this.dotsOnLines(i, r3);
  }
  dotsOnLines(t, r3) {
    const i = [];
    let a = r3.hachureGap;
    a < 0 && (a = 4 * r3.strokeWidth), a = Math.max(a, 0.1);
    let n = r3.fillWeight;
    n < 0 && (n = r3.strokeWidth / 2);
    const o = a / 4;
    for (const s of t) {
      const l = un(s), c = l / a, h = Math.ceil(c) - 1, u = l - h * a, d3 = (s[0][0] + s[1][0]) / 2 - a / 4, f = Math.min(s[0][1], s[1][1]);
      for (let g = 0; g < h; g++) {
        const m = f + u + g * a, y = d3 - o + 2 * Math.random() * o, x = m - o + 2 * Math.random() * o, b = this.helper.ellipse(y, x, n, n, r3);
        i.push(...b.ops);
      }
    }
    return { type: "fillSketch", ops: i };
  }
}
class F2 {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r3) {
    const i = Pi(t, r3);
    return { type: "fillSketch", ops: this.dashedLine(i, r3) };
  }
  dashedLine(t, r3) {
    const i = r3.dashOffset < 0 ? r3.hachureGap < 0 ? 4 * r3.strokeWidth : r3.hachureGap : r3.dashOffset, a = r3.dashGap < 0 ? r3.hachureGap < 0 ? 4 * r3.strokeWidth : r3.hachureGap : r3.dashGap, n = [];
    return t.forEach((o) => {
      const s = un(o), l = Math.floor(s / (i + a)), c = (s + a - l * (i + a)) / 2;
      let h = o[0], u = o[1];
      h[0] > u[0] && (h = o[1], u = o[0]);
      const d3 = Math.atan((u[1] - h[1]) / (u[0] - h[0]));
      for (let f = 0; f < l; f++) {
        const g = f * (i + a), m = g + i, y = [h[0] + g * Math.cos(d3) + c * Math.cos(d3), h[1] + g * Math.sin(d3) + c * Math.sin(d3)], x = [h[0] + m * Math.cos(d3) + c * Math.cos(d3), h[1] + m * Math.sin(d3) + c * Math.sin(d3)];
        n.push(...this.helper.doubleLineOps(y[0], y[1], x[0], x[1], r3));
      }
    }), n;
  }
}
class O2 {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r3) {
    const i = r3.hachureGap < 0 ? 4 * r3.strokeWidth : r3.hachureGap, a = r3.zigzagOffset < 0 ? i : r3.zigzagOffset, n = Pi(t, r3 = Object.assign({}, r3, { hachureGap: i + a }));
    return { type: "fillSketch", ops: this.zigzagLines(n, a, r3) };
  }
  zigzagLines(t, r3, i) {
    const a = [];
    return t.forEach((n) => {
      const o = un(n), s = Math.round(o / (2 * r3));
      let l = n[0], c = n[1];
      l[0] > c[0] && (l = n[1], c = n[0]);
      const h = Math.atan((c[1] - l[1]) / (c[0] - l[0]));
      for (let u = 0; u < s; u++) {
        const d3 = 2 * u * r3, f = 2 * (u + 1) * r3, g = Math.sqrt(2 * Math.pow(r3, 2)), m = [l[0] + d3 * Math.cos(h), l[1] + d3 * Math.sin(h)], y = [l[0] + f * Math.cos(h), l[1] + f * Math.sin(h)], x = [m[0] + g * Math.cos(h + Math.PI / 4), m[1] + g * Math.sin(h + Math.PI / 4)];
        a.push(...this.helper.doubleLineOps(m[0], m[1], x[0], x[1], i), ...this.helper.doubleLineOps(x[0], x[1], y[0], y[1], i));
      }
    }), a;
  }
}
const Zt = {};
class $2 {
  constructor(t) {
    this.seed = t;
  }
  next() {
    return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
}
const D2 = 0, In = 1, Kl = 2, Zi = { A: 7, a: 7, C: 6, c: 6, H: 1, h: 1, L: 2, l: 2, M: 2, m: 2, Q: 4, q: 4, S: 4, s: 4, T: 2, t: 2, V: 1, v: 1, Z: 0, z: 0 };
function Pn(e8, t) {
  return e8.type === t;
}
function Bo(e8) {
  const t = [], r3 = function(o) {
    const s = new Array();
    for (; o !== ""; )
      if (o.match(/^([ \t\r\n,]+)/))
        o = o.substr(RegExp.$1.length);
      else if (o.match(/^([aAcChHlLmMqQsStTvVzZ])/))
        s[s.length] = { type: D2, text: RegExp.$1 }, o = o.substr(RegExp.$1.length);
      else {
        if (!o.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))
          return [];
        s[s.length] = { type: In, text: `${parseFloat(RegExp.$1)}` }, o = o.substr(RegExp.$1.length);
      }
    return s[s.length] = { type: Kl, text: "" }, s;
  }(e8);
  let i = "BOD", a = 0, n = r3[a];
  for (; !Pn(n, Kl); ) {
    let o = 0;
    const s = [];
    if (i === "BOD") {
      if (n.text !== "M" && n.text !== "m")
        return Bo("M0,0" + e8);
      a++, o = Zi[n.text], i = n.text;
    } else
      Pn(n, In) ? o = Zi[i] : (a++, o = Zi[n.text], i = n.text);
    if (!(a + o < r3.length))
      throw new Error("Path data ended short");
    for (let l = a; l < a + o; l++) {
      const c = r3[l];
      if (!Pn(c, In))
        throw new Error("Param not a number: " + i + "," + c.text);
      s[s.length] = +c.text;
    }
    if (typeof Zi[i] != "number")
      throw new Error("Bad segment: " + i);
    {
      const l = { key: i, data: s };
      t.push(l), a += o, n = r3[a], i === "M" && (i = "L"), i === "m" && (i = "l");
    }
  }
  return t;
}
function qd(e8) {
  let t = 0, r3 = 0, i = 0, a = 0;
  const n = [];
  for (const { key: o, data: s } of e8)
    switch (o) {
      case "M":
        n.push({ key: "M", data: [...s] }), [t, r3] = s, [i, a] = s;
        break;
      case "m":
        t += s[0], r3 += s[1], n.push({ key: "M", data: [t, r3] }), i = t, a = r3;
        break;
      case "L":
        n.push({ key: "L", data: [...s] }), [t, r3] = s;
        break;
      case "l":
        t += s[0], r3 += s[1], n.push({ key: "L", data: [t, r3] });
        break;
      case "C":
        n.push({ key: "C", data: [...s] }), t = s[4], r3 = s[5];
        break;
      case "c": {
        const l = s.map((c, h) => h % 2 ? c + r3 : c + t);
        n.push({ key: "C", data: l }), t = l[4], r3 = l[5];
        break;
      }
      case "Q":
        n.push({ key: "Q", data: [...s] }), t = s[2], r3 = s[3];
        break;
      case "q": {
        const l = s.map((c, h) => h % 2 ? c + r3 : c + t);
        n.push({ key: "Q", data: l }), t = l[2], r3 = l[3];
        break;
      }
      case "A":
        n.push({ key: "A", data: [...s] }), t = s[5], r3 = s[6];
        break;
      case "a":
        t += s[5], r3 += s[6], n.push({ key: "A", data: [s[0], s[1], s[2], s[3], s[4], t, r3] });
        break;
      case "H":
        n.push({ key: "H", data: [...s] }), t = s[0];
        break;
      case "h":
        t += s[0], n.push({ key: "H", data: [t] });
        break;
      case "V":
        n.push({ key: "V", data: [...s] }), r3 = s[0];
        break;
      case "v":
        r3 += s[0], n.push({ key: "V", data: [r3] });
        break;
      case "S":
        n.push({ key: "S", data: [...s] }), t = s[2], r3 = s[3];
        break;
      case "s": {
        const l = s.map((c, h) => h % 2 ? c + r3 : c + t);
        n.push({ key: "S", data: l }), t = l[2], r3 = l[3];
        break;
      }
      case "T":
        n.push({ key: "T", data: [...s] }), t = s[0], r3 = s[1];
        break;
      case "t":
        t += s[0], r3 += s[1], n.push({ key: "T", data: [t, r3] });
        break;
      case "Z":
      case "z":
        n.push({ key: "Z", data: [] }), t = i, r3 = a;
    }
  return n;
}
function Hd(e8) {
  const t = [];
  let r3 = "", i = 0, a = 0, n = 0, o = 0, s = 0, l = 0;
  for (const { key: c, data: h } of e8) {
    switch (c) {
      case "M":
        t.push({ key: "M", data: [...h] }), [i, a] = h, [n, o] = h;
        break;
      case "C":
        t.push({ key: "C", data: [...h] }), i = h[4], a = h[5], s = h[2], l = h[3];
        break;
      case "L":
        t.push({ key: "L", data: [...h] }), [i, a] = h;
        break;
      case "H":
        i = h[0], t.push({ key: "L", data: [i, a] });
        break;
      case "V":
        a = h[0], t.push({ key: "L", data: [i, a] });
        break;
      case "S": {
        let u = 0, d3 = 0;
        r3 === "C" || r3 === "S" ? (u = i + (i - s), d3 = a + (a - l)) : (u = i, d3 = a), t.push({ key: "C", data: [u, d3, ...h] }), s = h[0], l = h[1], i = h[2], a = h[3];
        break;
      }
      case "T": {
        const [u, d3] = h;
        let f = 0, g = 0;
        r3 === "Q" || r3 === "T" ? (f = i + (i - s), g = a + (a - l)) : (f = i, g = a);
        const m = i + 2 * (f - i) / 3, y = a + 2 * (g - a) / 3, x = u + 2 * (f - u) / 3, b = d3 + 2 * (g - d3) / 3;
        t.push({ key: "C", data: [m, y, x, b, u, d3] }), s = f, l = g, i = u, a = d3;
        break;
      }
      case "Q": {
        const [u, d3, f, g] = h, m = i + 2 * (u - i) / 3, y = a + 2 * (d3 - a) / 3, x = f + 2 * (u - f) / 3, b = g + 2 * (d3 - g) / 3;
        t.push({ key: "C", data: [m, y, x, b, f, g] }), s = u, l = d3, i = f, a = g;
        break;
      }
      case "A": {
        const u = Math.abs(h[0]), d3 = Math.abs(h[1]), f = h[2], g = h[3], m = h[4], y = h[5], x = h[6];
        u === 0 || d3 === 0 ? (t.push({ key: "C", data: [i, a, y, x, y, x] }), i = y, a = x) : (i !== y || a !== x) && (jd(i, a, y, x, u, d3, f, g, m).forEach(function(b) {
          t.push({ key: "C", data: b });
        }), i = y, a = x);
        break;
      }
      case "Z":
        t.push({ key: "Z", data: [] }), i = n, a = o;
    }
    r3 = c;
  }
  return t;
}
function hi(e8, t, r3) {
  return [e8 * Math.cos(r3) - t * Math.sin(r3), e8 * Math.sin(r3) + t * Math.cos(r3)];
}
function jd(e8, t, r3, i, a, n, o, s, l, c) {
  const h = (u = o, Math.PI * u / 180);
  var u;
  let d3 = [], f = 0, g = 0, m = 0, y = 0;
  if (c)
    [f, g, m, y] = c;
  else {
    [e8, t] = hi(e8, t, -h), [r3, i] = hi(r3, i, -h);
    const N = (e8 - r3) / 2, F = (t - i) / 2;
    let M = N * N / (a * a) + F * F / (n * n);
    M > 1 && (M = Math.sqrt(M), a *= M, n *= M);
    const B = a * a, O = n * n, L = B * O - B * F * F - O * N * N, E = B * F * F + O * N * N, R = (s === l ? -1 : 1) * Math.sqrt(Math.abs(L / E));
    m = R * a * F / n + (e8 + r3) / 2, y = R * -n * N / a + (t + i) / 2, f = Math.asin(parseFloat(((t - y) / n).toFixed(9))), g = Math.asin(parseFloat(((i - y) / n).toFixed(9))), e8 < m && (f = Math.PI - f), r3 < m && (g = Math.PI - g), f < 0 && (f = 2 * Math.PI + f), g < 0 && (g = 2 * Math.PI + g), l && f > g && (f -= 2 * Math.PI), !l && g > f && (g -= 2 * Math.PI);
  }
  let x = g - f;
  if (Math.abs(x) > 120 * Math.PI / 180) {
    const N = g, F = r3, M = i;
    g = l && g > f ? f + 120 * Math.PI / 180 * 1 : f + 120 * Math.PI / 180 * -1, d3 = jd(r3 = m + a * Math.cos(g), i = y + n * Math.sin(g), F, M, a, n, o, 0, l, [g, N, m, y]);
  }
  x = g - f;
  const b = Math.cos(f), v = Math.sin(f), S = Math.cos(g), _ = Math.sin(g), C = Math.tan(x / 4), k = 4 / 3 * a * C, P = 4 / 3 * n * C, H = [e8, t], $ = [e8 + k * v, t - P * b], A = [r3 + k * _, i - P * S], j = [r3, i];
  if ($[0] = 2 * H[0] - $[0], $[1] = 2 * H[1] - $[1], c)
    return [$, A, j].concat(d3);
  {
    d3 = [$, A, j].concat(d3);
    const N = [];
    for (let F = 0; F < d3.length; F += 3) {
      const M = hi(d3[F][0], d3[F][1], h), B = hi(d3[F + 1][0], d3[F + 1][1], h), O = hi(d3[F + 2][0], d3[F + 2][1], h);
      N.push([M[0], M[1], B[0], B[1], O[0], O[1]]);
    }
    return N;
  }
}
const R2 = { randOffset: function(e8, t) {
  return at(e8, t);
}, randOffsetWithRange: function(e8, t, r3) {
  return Na(e8, t, r3);
}, ellipse: function(e8, t, r3, i, a) {
  const n = Ud(r3, i, a);
  return _s(e8, t, a, n).opset;
}, doubleLineOps: function(e8, t, r3, i, a) {
  return ze(e8, t, r3, i, a, true);
} };
function Yd(e8, t, r3, i, a) {
  return { type: "path", ops: ze(e8, t, r3, i, a) };
}
function ua(e8, t, r3) {
  const i = (e8 || []).length;
  if (i > 2) {
    const a = [];
    for (let n = 0; n < i - 1; n++)
      a.push(...ze(e8[n][0], e8[n][1], e8[n + 1][0], e8[n + 1][1], r3));
    return t && a.push(...ze(e8[i - 1][0], e8[i - 1][1], e8[0][0], e8[0][1], r3)), { type: "path", ops: a };
  }
  return i === 2 ? Yd(e8[0][0], e8[0][1], e8[1][0], e8[1][1], r3) : { type: "path", ops: [] };
}
function I2(e8, t, r3, i, a) {
  return function(n, o) {
    return ua(n, true, o);
  }([[e8, t], [e8 + r3, t], [e8 + r3, t + i], [e8, t + i]], a);
}
function Ql(e8, t) {
  if (e8.length) {
    const r3 = typeof e8[0][0] == "number" ? [e8] : e8, i = Ki(r3[0], 1 * (1 + 0.2 * t.roughness), t), a = t.disableMultiStroke ? [] : Ki(r3[0], 1.5 * (1 + 0.22 * t.roughness), ec(t));
    for (let n = 1; n < r3.length; n++) {
      const o = r3[n];
      if (o.length) {
        const s = Ki(o, 1 * (1 + 0.2 * t.roughness), t), l = t.disableMultiStroke ? [] : Ki(o, 1.5 * (1 + 0.22 * t.roughness), ec(t));
        for (const c of s)
          c.op !== "move" && i.push(c);
        for (const c of l)
          c.op !== "move" && a.push(c);
      }
    }
    return { type: "path", ops: i.concat(a) };
  }
  return { type: "path", ops: [] };
}
function Ud(e8, t, r3) {
  const i = Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(e8 / 2, 2) + Math.pow(t / 2, 2)) / 2)), a = Math.ceil(Math.max(r3.curveStepCount, r3.curveStepCount / Math.sqrt(200) * i)), n = 2 * Math.PI / a;
  let o = Math.abs(e8 / 2), s = Math.abs(t / 2);
  const l = 1 - r3.curveFitting;
  return o += at(o * l, r3), s += at(s * l, r3), { increment: n, rx: o, ry: s };
}
function _s(e8, t, r3, i) {
  const [a, n] = rc(i.increment, e8, t, i.rx, i.ry, 1, i.increment * Na(0.1, Na(0.4, 1, r3), r3), r3);
  let o = za(a, null, r3);
  if (!r3.disableMultiStroke && r3.roughness !== 0) {
    const [s] = rc(i.increment, e8, t, i.rx, i.ry, 1.5, 0, r3), l = za(s, null, r3);
    o = o.concat(l);
  }
  return { estimatedPoints: n, opset: { type: "path", ops: o } };
}
function Jl(e8, t, r3, i, a, n, o, s, l) {
  const c = e8, h = t;
  let u = Math.abs(r3 / 2), d3 = Math.abs(i / 2);
  u += at(0.01 * u, l), d3 += at(0.01 * d3, l);
  let f = a, g = n;
  for (; f < 0; )
    f += 2 * Math.PI, g += 2 * Math.PI;
  g - f > 2 * Math.PI && (f = 0, g = 2 * Math.PI);
  const m = 2 * Math.PI / l.curveStepCount, y = Math.min(m / 2, (g - f) / 2), x = ic(y, c, h, u, d3, f, g, 1, l);
  if (!l.disableMultiStroke) {
    const b = ic(y, c, h, u, d3, f, g, 1.5, l);
    x.push(...b);
  }
  return o && (s ? x.push(...ze(c, h, c + u * Math.cos(f), h + d3 * Math.sin(f), l), ...ze(c, h, c + u * Math.cos(g), h + d3 * Math.sin(g), l)) : x.push({ op: "lineTo", data: [c, h] }, { op: "lineTo", data: [c + u * Math.cos(f), h + d3 * Math.sin(f)] })), { type: "path", ops: x };
}
function tc(e8, t) {
  const r3 = Hd(qd(Bo(e8))), i = [];
  let a = [0, 0], n = [0, 0];
  for (const { key: o, data: s } of r3)
    switch (o) {
      case "M":
        n = [s[0], s[1]], a = [s[0], s[1]];
        break;
      case "L":
        i.push(...ze(n[0], n[1], s[0], s[1], t)), n = [s[0], s[1]];
        break;
      case "C": {
        const [l, c, h, u, d3, f] = s;
        i.push(...P2(l, c, h, u, d3, f, n, t)), n = [d3, f];
        break;
      }
      case "Z":
        i.push(...ze(n[0], n[1], a[0], a[1], t)), n = [a[0], a[1]];
    }
  return { type: "path", ops: i };
}
function Nn(e8, t) {
  const r3 = [];
  for (const i of e8)
    if (i.length) {
      const a = t.maxRandomnessOffset || 0, n = i.length;
      if (n > 2) {
        r3.push({ op: "move", data: [i[0][0] + at(a, t), i[0][1] + at(a, t)] });
        for (let o = 1; o < n; o++)
          r3.push({ op: "lineTo", data: [i[o][0] + at(a, t), i[o][1] + at(a, t)] });
      }
    }
  return { type: "fillPath", ops: r3 };
}
function br(e8, t) {
  return function(r3, i) {
    let a = r3.fillStyle || "hachure";
    if (!Zt[a])
      switch (a) {
        case "zigzag":
          Zt[a] || (Zt[a] = new A2(i));
          break;
        case "cross-hatch":
          Zt[a] || (Zt[a] = new M2(i));
          break;
        case "dots":
          Zt[a] || (Zt[a] = new E2(i));
          break;
        case "dashed":
          Zt[a] || (Zt[a] = new F2(i));
          break;
        case "zigzag-line":
          Zt[a] || (Zt[a] = new O2(i));
          break;
        default:
          a = "hachure", Zt[a] || (Zt[a] = new To(i));
      }
    return Zt[a];
  }(t, R2).fillPolygons(e8, t);
}
function ec(e8) {
  const t = Object.assign({}, e8);
  return t.randomizer = void 0, e8.seed && (t.seed = e8.seed + 1), t;
}
function Gd(e8) {
  return e8.randomizer || (e8.randomizer = new $2(e8.seed || 0)), e8.randomizer.next();
}
function Na(e8, t, r3, i = 1) {
  return r3.roughness * i * (Gd(r3) * (t - e8) + e8);
}
function at(e8, t, r3 = 1) {
  return Na(-e8, e8, t, r3);
}
function ze(e8, t, r3, i, a, n = false) {
  const o = n ? a.disableMultiStrokeFill : a.disableMultiStroke, s = Ss(e8, t, r3, i, a, true, false);
  if (o)
    return s;
  const l = Ss(e8, t, r3, i, a, true, true);
  return s.concat(l);
}
function Ss(e8, t, r3, i, a, n, o) {
  const s = Math.pow(e8 - r3, 2) + Math.pow(t - i, 2), l = Math.sqrt(s);
  let c = 1;
  c = l < 200 ? 1 : l > 500 ? 0.4 : -16668e-7 * l + 1.233334;
  let h = a.maxRandomnessOffset || 0;
  h * h * 100 > s && (h = l / 10);
  const u = h / 2, d3 = 0.2 + 0.2 * Gd(a);
  let f = a.bowing * a.maxRandomnessOffset * (i - t) / 200, g = a.bowing * a.maxRandomnessOffset * (e8 - r3) / 200;
  f = at(f, a, c), g = at(g, a, c);
  const m = [], y = () => at(u, a, c), x = () => at(h, a, c), b = a.preserveVertices;
  return o ? m.push({ op: "move", data: [e8 + (b ? 0 : y()), t + (b ? 0 : y())] }) : m.push({ op: "move", data: [e8 + (b ? 0 : at(h, a, c)), t + (b ? 0 : at(h, a, c))] }), o ? m.push({ op: "bcurveTo", data: [f + e8 + (r3 - e8) * d3 + y(), g + t + (i - t) * d3 + y(), f + e8 + 2 * (r3 - e8) * d3 + y(), g + t + 2 * (i - t) * d3 + y(), r3 + (b ? 0 : y()), i + (b ? 0 : y())] }) : m.push({ op: "bcurveTo", data: [f + e8 + (r3 - e8) * d3 + x(), g + t + (i - t) * d3 + x(), f + e8 + 2 * (r3 - e8) * d3 + x(), g + t + 2 * (i - t) * d3 + x(), r3 + (b ? 0 : x()), i + (b ? 0 : x())] }), m;
}
function Ki(e8, t, r3) {
  if (!e8.length)
    return [];
  const i = [];
  i.push([e8[0][0] + at(t, r3), e8[0][1] + at(t, r3)]), i.push([e8[0][0] + at(t, r3), e8[0][1] + at(t, r3)]);
  for (let a = 1; a < e8.length; a++)
    i.push([e8[a][0] + at(t, r3), e8[a][1] + at(t, r3)]), a === e8.length - 1 && i.push([e8[a][0] + at(t, r3), e8[a][1] + at(t, r3)]);
  return za(i, null, r3);
}
function za(e8, t, r3) {
  const i = e8.length, a = [];
  if (i > 3) {
    const n = [], o = 1 - r3.curveTightness;
    a.push({ op: "move", data: [e8[1][0], e8[1][1]] });
    for (let s = 1; s + 2 < i; s++) {
      const l = e8[s];
      n[0] = [l[0], l[1]], n[1] = [l[0] + (o * e8[s + 1][0] - o * e8[s - 1][0]) / 6, l[1] + (o * e8[s + 1][1] - o * e8[s - 1][1]) / 6], n[2] = [e8[s + 1][0] + (o * e8[s][0] - o * e8[s + 2][0]) / 6, e8[s + 1][1] + (o * e8[s][1] - o * e8[s + 2][1]) / 6], n[3] = [e8[s + 1][0], e8[s + 1][1]], a.push({ op: "bcurveTo", data: [n[1][0], n[1][1], n[2][0], n[2][1], n[3][0], n[3][1]] });
    }
  } else
    i === 3 ? (a.push({ op: "move", data: [e8[1][0], e8[1][1]] }), a.push({ op: "bcurveTo", data: [e8[1][0], e8[1][1], e8[2][0], e8[2][1], e8[2][0], e8[2][1]] })) : i === 2 && a.push(...Ss(e8[0][0], e8[0][1], e8[1][0], e8[1][1], r3, true, true));
  return a;
}
function rc(e8, t, r3, i, a, n, o, s) {
  const l = [], c = [];
  if (s.roughness === 0) {
    e8 /= 4, c.push([t + i * Math.cos(-e8), r3 + a * Math.sin(-e8)]);
    for (let h = 0; h <= 2 * Math.PI; h += e8) {
      const u = [t + i * Math.cos(h), r3 + a * Math.sin(h)];
      l.push(u), c.push(u);
    }
    c.push([t + i * Math.cos(0), r3 + a * Math.sin(0)]), c.push([t + i * Math.cos(e8), r3 + a * Math.sin(e8)]);
  } else {
    const h = at(0.5, s) - Math.PI / 2;
    c.push([at(n, s) + t + 0.9 * i * Math.cos(h - e8), at(n, s) + r3 + 0.9 * a * Math.sin(h - e8)]);
    const u = 2 * Math.PI + h - 0.01;
    for (let d3 = h; d3 < u; d3 += e8) {
      const f = [at(n, s) + t + i * Math.cos(d3), at(n, s) + r3 + a * Math.sin(d3)];
      l.push(f), c.push(f);
    }
    c.push([at(n, s) + t + i * Math.cos(h + 2 * Math.PI + 0.5 * o), at(n, s) + r3 + a * Math.sin(h + 2 * Math.PI + 0.5 * o)]), c.push([at(n, s) + t + 0.98 * i * Math.cos(h + o), at(n, s) + r3 + 0.98 * a * Math.sin(h + o)]), c.push([at(n, s) + t + 0.9 * i * Math.cos(h + 0.5 * o), at(n, s) + r3 + 0.9 * a * Math.sin(h + 0.5 * o)]);
  }
  return [c, l];
}
function ic(e8, t, r3, i, a, n, o, s, l) {
  const c = n + at(0.1, l), h = [];
  h.push([at(s, l) + t + 0.9 * i * Math.cos(c - e8), at(s, l) + r3 + 0.9 * a * Math.sin(c - e8)]);
  for (let u = c; u <= o; u += e8)
    h.push([at(s, l) + t + i * Math.cos(u), at(s, l) + r3 + a * Math.sin(u)]);
  return h.push([t + i * Math.cos(o), r3 + a * Math.sin(o)]), h.push([t + i * Math.cos(o), r3 + a * Math.sin(o)]), za(h, null, l);
}
function P2(e8, t, r3, i, a, n, o, s) {
  const l = [], c = [s.maxRandomnessOffset || 1, (s.maxRandomnessOffset || 1) + 0.3];
  let h = [0, 0];
  const u = s.disableMultiStroke ? 1 : 2, d3 = s.preserveVertices;
  for (let f = 0; f < u; f++)
    f === 0 ? l.push({ op: "move", data: [o[0], o[1]] }) : l.push({ op: "move", data: [o[0] + (d3 ? 0 : at(c[0], s)), o[1] + (d3 ? 0 : at(c[0], s))] }), h = d3 ? [a, n] : [a + at(c[f], s), n + at(c[f], s)], l.push({ op: "bcurveTo", data: [e8 + at(c[f], s), t + at(c[f], s), r3 + at(c[f], s), i + at(c[f], s), h[0], h[1]] });
  return l;
}
function ui(e8) {
  return [...e8];
}
function ac(e8, t = 0) {
  const r3 = e8.length;
  if (r3 < 3)
    throw new Error("A curve must have at least three points.");
  const i = [];
  if (r3 === 3)
    i.push(ui(e8[0]), ui(e8[1]), ui(e8[2]), ui(e8[2]));
  else {
    const a = [];
    a.push(e8[0], e8[0]);
    for (let s = 1; s < e8.length; s++)
      a.push(e8[s]), s === e8.length - 1 && a.push(e8[s]);
    const n = [], o = 1 - t;
    i.push(ui(a[0]));
    for (let s = 1; s + 2 < a.length; s++) {
      const l = a[s];
      n[0] = [l[0], l[1]], n[1] = [l[0] + (o * a[s + 1][0] - o * a[s - 1][0]) / 6, l[1] + (o * a[s + 1][1] - o * a[s - 1][1]) / 6], n[2] = [a[s + 1][0] + (o * a[s][0] - o * a[s + 2][0]) / 6, a[s + 1][1] + (o * a[s][1] - o * a[s + 2][1]) / 6], n[3] = [a[s + 1][0], a[s + 1][1]], i.push(n[1], n[2], n[3]);
    }
  }
  return i;
}
function da(e8, t) {
  return Math.pow(e8[0] - t[0], 2) + Math.pow(e8[1] - t[1], 2);
}
function N2(e8, t, r3) {
  const i = da(t, r3);
  if (i === 0)
    return da(e8, t);
  let a = ((e8[0] - t[0]) * (r3[0] - t[0]) + (e8[1] - t[1]) * (r3[1] - t[1])) / i;
  return a = Math.max(0, Math.min(1, a)), da(e8, Ve(t, r3, a));
}
function Ve(e8, t, r3) {
  return [e8[0] + (t[0] - e8[0]) * r3, e8[1] + (t[1] - e8[1]) * r3];
}
function Ts(e8, t, r3, i) {
  const a = i || [];
  if (function(s, l) {
    const c = s[l + 0], h = s[l + 1], u = s[l + 2], d3 = s[l + 3];
    let f = 3 * h[0] - 2 * c[0] - d3[0];
    f *= f;
    let g = 3 * h[1] - 2 * c[1] - d3[1];
    g *= g;
    let m = 3 * u[0] - 2 * d3[0] - c[0];
    m *= m;
    let y = 3 * u[1] - 2 * d3[1] - c[1];
    return y *= y, f < m && (f = m), g < y && (g = y), f + g;
  }(e8, t) < r3) {
    const s = e8[t + 0];
    a.length ? (n = a[a.length - 1], o = s, Math.sqrt(da(n, o)) > 1 && a.push(s)) : a.push(s), a.push(e8[t + 3]);
  } else {
    const l = e8[t + 0], c = e8[t + 1], h = e8[t + 2], u = e8[t + 3], d3 = Ve(l, c, 0.5), f = Ve(c, h, 0.5), g = Ve(h, u, 0.5), m = Ve(d3, f, 0.5), y = Ve(f, g, 0.5), x = Ve(m, y, 0.5);
    Ts([l, d3, m, x], 0, r3, a), Ts([x, y, g, u], 0, r3, a);
  }
  var n, o;
  return a;
}
function z2(e8, t) {
  return Wa(e8, 0, e8.length, t);
}
function Wa(e8, t, r3, i, a) {
  const n = a || [], o = e8[t], s = e8[r3 - 1];
  let l = 0, c = 1;
  for (let h = t + 1; h < r3 - 1; ++h) {
    const u = N2(e8[h], o, s);
    u > l && (l = u, c = h);
  }
  return Math.sqrt(l) > i ? (Wa(e8, t, c + 1, i, n), Wa(e8, c, r3, i, n)) : (n.length || n.push(o), n.push(s)), n;
}
function zn(e8, t = 0.15, r3) {
  const i = [], a = (e8.length - 1) / 3;
  for (let n = 0; n < a; n++)
    Ts(e8, 3 * n, t, i);
  return r3 && r3 > 0 ? Wa(i, 0, i.length, r3) : i;
}
const ee = "none";
class qa {
  constructor(t) {
    this.defaultOptions = { maxRandomnessOffset: 2, roughness: 1, bowing: 1, stroke: "#000", strokeWidth: 1, curveTightness: 0, curveFitting: 0.95, curveStepCount: 9, fillStyle: "hachure", fillWeight: -1, hachureAngle: -41, hachureGap: -1, dashOffset: -1, dashGap: -1, zigzagOffset: -1, seed: 0, disableMultiStroke: false, disableMultiStrokeFill: false, preserveVertices: false, fillShapeRoughnessGain: 0.8 }, this.config = t || {}, this.config.options && (this.defaultOptions = this._o(this.config.options));
  }
  static newSeed() {
    return Math.floor(Math.random() * 2 ** 31);
  }
  _o(t) {
    return t ? Object.assign({}, this.defaultOptions, t) : this.defaultOptions;
  }
  _d(t, r3, i) {
    return { shape: t, sets: r3 || [], options: i || this.defaultOptions };
  }
  line(t, r3, i, a, n) {
    const o = this._o(n);
    return this._d("line", [Yd(t, r3, i, a, o)], o);
  }
  rectangle(t, r3, i, a, n) {
    const o = this._o(n), s = [], l = I2(t, r3, i, a, o);
    if (o.fill) {
      const c = [[t, r3], [t + i, r3], [t + i, r3 + a], [t, r3 + a]];
      o.fillStyle === "solid" ? s.push(Nn([c], o)) : s.push(br([c], o));
    }
    return o.stroke !== ee && s.push(l), this._d("rectangle", s, o);
  }
  ellipse(t, r3, i, a, n) {
    const o = this._o(n), s = [], l = Ud(i, a, o), c = _s(t, r3, o, l);
    if (o.fill)
      if (o.fillStyle === "solid") {
        const h = _s(t, r3, o, l).opset;
        h.type = "fillPath", s.push(h);
      } else
        s.push(br([c.estimatedPoints], o));
    return o.stroke !== ee && s.push(c.opset), this._d("ellipse", s, o);
  }
  circle(t, r3, i, a) {
    const n = this.ellipse(t, r3, i, i, a);
    return n.shape = "circle", n;
  }
  linearPath(t, r3) {
    const i = this._o(r3);
    return this._d("linearPath", [ua(t, false, i)], i);
  }
  arc(t, r3, i, a, n, o, s = false, l) {
    const c = this._o(l), h = [], u = Jl(t, r3, i, a, n, o, s, true, c);
    if (s && c.fill)
      if (c.fillStyle === "solid") {
        const d3 = Object.assign({}, c);
        d3.disableMultiStroke = true;
        const f = Jl(t, r3, i, a, n, o, true, false, d3);
        f.type = "fillPath", h.push(f);
      } else
        h.push(function(d3, f, g, m, y, x, b) {
          const v = d3, S = f;
          let _ = Math.abs(g / 2), C = Math.abs(m / 2);
          _ += at(0.01 * _, b), C += at(0.01 * C, b);
          let k = y, P = x;
          for (; k < 0; )
            k += 2 * Math.PI, P += 2 * Math.PI;
          P - k > 2 * Math.PI && (k = 0, P = 2 * Math.PI);
          const H = (P - k) / b.curveStepCount, $ = [];
          for (let A = k; A <= P; A += H)
            $.push([v + _ * Math.cos(A), S + C * Math.sin(A)]);
          return $.push([v + _ * Math.cos(P), S + C * Math.sin(P)]), $.push([v, S]), br([$], b);
        }(t, r3, i, a, n, o, c));
    return c.stroke !== ee && h.push(u), this._d("arc", h, c);
  }
  curve(t, r3) {
    const i = this._o(r3), a = [], n = Ql(t, i);
    if (i.fill && i.fill !== ee)
      if (i.fillStyle === "solid") {
        const o = Ql(t, Object.assign(Object.assign({}, i), { disableMultiStroke: true, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
        a.push({ type: "fillPath", ops: this._mergedShape(o.ops) });
      } else {
        const o = [], s = t;
        if (s.length) {
          const l = typeof s[0][0] == "number" ? [s] : s;
          for (const c of l)
            c.length < 3 ? o.push(...c) : c.length === 3 ? o.push(...zn(ac([c[0], c[0], c[1], c[2]]), 10, (1 + i.roughness) / 2)) : o.push(...zn(ac(c), 10, (1 + i.roughness) / 2));
        }
        o.length && a.push(br([o], i));
      }
    return i.stroke !== ee && a.push(n), this._d("curve", a, i);
  }
  polygon(t, r3) {
    const i = this._o(r3), a = [], n = ua(t, true, i);
    return i.fill && (i.fillStyle === "solid" ? a.push(Nn([t], i)) : a.push(br([t], i))), i.stroke !== ee && a.push(n), this._d("polygon", a, i);
  }
  path(t, r3) {
    const i = this._o(r3), a = [];
    if (!t)
      return this._d("path", a, i);
    t = (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
    const n = i.fill && i.fill !== "transparent" && i.fill !== ee, o = i.stroke !== ee, s = !!(i.simplification && i.simplification < 1), l = function(h, u, d3) {
      const f = Hd(qd(Bo(h))), g = [];
      let m = [], y = [0, 0], x = [];
      const b = () => {
        x.length >= 4 && m.push(...zn(x, u)), x = [];
      }, v = () => {
        b(), m.length && (g.push(m), m = []);
      };
      for (const { key: _, data: C } of f)
        switch (_) {
          case "M":
            v(), y = [C[0], C[1]], m.push(y);
            break;
          case "L":
            b(), m.push([C[0], C[1]]);
            break;
          case "C":
            if (!x.length) {
              const k = m.length ? m[m.length - 1] : y;
              x.push([k[0], k[1]]);
            }
            x.push([C[0], C[1]]), x.push([C[2], C[3]]), x.push([C[4], C[5]]);
            break;
          case "Z":
            b(), m.push([y[0], y[1]]);
        }
      if (v(), !d3)
        return g;
      const S = [];
      for (const _ of g) {
        const C = z2(_, d3);
        C.length && S.push(C);
      }
      return S;
    }(t, 1, s ? 4 - 4 * (i.simplification || 1) : (1 + i.roughness) / 2), c = tc(t, i);
    if (n)
      if (i.fillStyle === "solid")
        if (l.length === 1) {
          const h = tc(t, Object.assign(Object.assign({}, i), { disableMultiStroke: true, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
          a.push({ type: "fillPath", ops: this._mergedShape(h.ops) });
        } else
          a.push(Nn(l, i));
      else
        a.push(br(l, i));
    return o && (s ? l.forEach((h) => {
      a.push(ua(h, false, i));
    }) : a.push(c)), this._d("path", a, i);
  }
  opsToPath(t, r3) {
    let i = "";
    for (const a of t.ops) {
      const n = typeof r3 == "number" && r3 >= 0 ? a.data.map((o) => +o.toFixed(r3)) : a.data;
      switch (a.op) {
        case "move":
          i += `M${n[0]} ${n[1]} `;
          break;
        case "bcurveTo":
          i += `C${n[0]} ${n[1]}, ${n[2]} ${n[3]}, ${n[4]} ${n[5]} `;
          break;
        case "lineTo":
          i += `L${n[0]} ${n[1]} `;
      }
    }
    return i.trim();
  }
  toPaths(t) {
    const r3 = t.sets || [], i = t.options || this.defaultOptions, a = [];
    for (const n of r3) {
      let o = null;
      switch (n.type) {
        case "path":
          o = { d: this.opsToPath(n), stroke: i.stroke, strokeWidth: i.strokeWidth, fill: ee };
          break;
        case "fillPath":
          o = { d: this.opsToPath(n), stroke: ee, strokeWidth: 0, fill: i.fill || ee };
          break;
        case "fillSketch":
          o = this.fillSketch(n, i);
      }
      o && a.push(o);
    }
    return a;
  }
  fillSketch(t, r3) {
    let i = r3.fillWeight;
    return i < 0 && (i = r3.strokeWidth / 2), { d: this.opsToPath(t), stroke: r3.fill || ee, strokeWidth: i, fill: ee };
  }
  _mergedShape(t) {
    return t.filter((r3, i) => i === 0 || r3.op !== "move");
  }
}
class W2 {
  constructor(t, r3) {
    this.canvas = t, this.ctx = this.canvas.getContext("2d"), this.gen = new qa(r3);
  }
  draw(t) {
    const r3 = t.sets || [], i = t.options || this.getDefaultOptions(), a = this.ctx, n = t.options.fixedDecimalPlaceDigits;
    for (const o of r3)
      switch (o.type) {
        case "path":
          a.save(), a.strokeStyle = i.stroke === "none" ? "transparent" : i.stroke, a.lineWidth = i.strokeWidth, i.strokeLineDash && a.setLineDash(i.strokeLineDash), i.strokeLineDashOffset && (a.lineDashOffset = i.strokeLineDashOffset), this._drawToContext(a, o, n), a.restore();
          break;
        case "fillPath": {
          a.save(), a.fillStyle = i.fill || "";
          const s = t.shape === "curve" || t.shape === "polygon" || t.shape === "path" ? "evenodd" : "nonzero";
          this._drawToContext(a, o, n, s), a.restore();
          break;
        }
        case "fillSketch":
          this.fillSketch(a, o, i);
      }
  }
  fillSketch(t, r3, i) {
    let a = i.fillWeight;
    a < 0 && (a = i.strokeWidth / 2), t.save(), i.fillLineDash && t.setLineDash(i.fillLineDash), i.fillLineDashOffset && (t.lineDashOffset = i.fillLineDashOffset), t.strokeStyle = i.fill || "", t.lineWidth = a, this._drawToContext(t, r3, i.fixedDecimalPlaceDigits), t.restore();
  }
  _drawToContext(t, r3, i, a = "nonzero") {
    t.beginPath();
    for (const n of r3.ops) {
      const o = typeof i == "number" && i >= 0 ? n.data.map((s) => +s.toFixed(i)) : n.data;
      switch (n.op) {
        case "move":
          t.moveTo(o[0], o[1]);
          break;
        case "bcurveTo":
          t.bezierCurveTo(o[0], o[1], o[2], o[3], o[4], o[5]);
          break;
        case "lineTo":
          t.lineTo(o[0], o[1]);
      }
    }
    r3.type === "fillPath" ? t.fill(a) : t.stroke();
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(t, r3, i, a, n) {
    const o = this.gen.line(t, r3, i, a, n);
    return this.draw(o), o;
  }
  rectangle(t, r3, i, a, n) {
    const o = this.gen.rectangle(t, r3, i, a, n);
    return this.draw(o), o;
  }
  ellipse(t, r3, i, a, n) {
    const o = this.gen.ellipse(t, r3, i, a, n);
    return this.draw(o), o;
  }
  circle(t, r3, i, a) {
    const n = this.gen.circle(t, r3, i, a);
    return this.draw(n), n;
  }
  linearPath(t, r3) {
    const i = this.gen.linearPath(t, r3);
    return this.draw(i), i;
  }
  polygon(t, r3) {
    const i = this.gen.polygon(t, r3);
    return this.draw(i), i;
  }
  arc(t, r3, i, a, n, o, s = false, l) {
    const c = this.gen.arc(t, r3, i, a, n, o, s, l);
    return this.draw(c), c;
  }
  curve(t, r3) {
    const i = this.gen.curve(t, r3);
    return this.draw(i), i;
  }
  path(t, r3) {
    const i = this.gen.path(t, r3);
    return this.draw(i), i;
  }
}
const Qi = "http://www.w3.org/2000/svg";
class q2 {
  constructor(t, r3) {
    this.svg = t, this.gen = new qa(r3);
  }
  draw(t) {
    const r3 = t.sets || [], i = t.options || this.getDefaultOptions(), a = this.svg.ownerDocument || window.document, n = a.createElementNS(Qi, "g"), o = t.options.fixedDecimalPlaceDigits;
    for (const s of r3) {
      let l = null;
      switch (s.type) {
        case "path":
          l = a.createElementNS(Qi, "path"), l.setAttribute("d", this.opsToPath(s, o)), l.setAttribute("stroke", i.stroke), l.setAttribute("stroke-width", i.strokeWidth + ""), l.setAttribute("fill", "none"), i.strokeLineDash && l.setAttribute("stroke-dasharray", i.strokeLineDash.join(" ").trim()), i.strokeLineDashOffset && l.setAttribute("stroke-dashoffset", `${i.strokeLineDashOffset}`);
          break;
        case "fillPath":
          l = a.createElementNS(Qi, "path"), l.setAttribute("d", this.opsToPath(s, o)), l.setAttribute("stroke", "none"), l.setAttribute("stroke-width", "0"), l.setAttribute("fill", i.fill || ""), t.shape !== "curve" && t.shape !== "polygon" || l.setAttribute("fill-rule", "evenodd");
          break;
        case "fillSketch":
          l = this.fillSketch(a, s, i);
      }
      l && n.appendChild(l);
    }
    return n;
  }
  fillSketch(t, r3, i) {
    let a = i.fillWeight;
    a < 0 && (a = i.strokeWidth / 2);
    const n = t.createElementNS(Qi, "path");
    return n.setAttribute("d", this.opsToPath(r3, i.fixedDecimalPlaceDigits)), n.setAttribute("stroke", i.fill || ""), n.setAttribute("stroke-width", a + ""), n.setAttribute("fill", "none"), i.fillLineDash && n.setAttribute("stroke-dasharray", i.fillLineDash.join(" ").trim()), i.fillLineDashOffset && n.setAttribute("stroke-dashoffset", `${i.fillLineDashOffset}`), n;
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  opsToPath(t, r3) {
    return this.gen.opsToPath(t, r3);
  }
  line(t, r3, i, a, n) {
    const o = this.gen.line(t, r3, i, a, n);
    return this.draw(o);
  }
  rectangle(t, r3, i, a, n) {
    const o = this.gen.rectangle(t, r3, i, a, n);
    return this.draw(o);
  }
  ellipse(t, r3, i, a, n) {
    const o = this.gen.ellipse(t, r3, i, a, n);
    return this.draw(o);
  }
  circle(t, r3, i, a) {
    const n = this.gen.circle(t, r3, i, a);
    return this.draw(n);
  }
  linearPath(t, r3) {
    const i = this.gen.linearPath(t, r3);
    return this.draw(i);
  }
  polygon(t, r3) {
    const i = this.gen.polygon(t, r3);
    return this.draw(i);
  }
  arc(t, r3, i, a, n, o, s = false, l) {
    const c = this.gen.arc(t, r3, i, a, n, o, s, l);
    return this.draw(c);
  }
  curve(t, r3) {
    const i = this.gen.curve(t, r3);
    return this.draw(i);
  }
  path(t, r3) {
    const i = this.gen.path(t, r3);
    return this.draw(i);
  }
}
var Z = { canvas: (e8, t) => new W2(e8, t), svg: (e8, t) => new q2(e8, t), generator: (e8) => new qa(e8), newSeed: () => qa.newSeed() }, ot = /* @__PURE__ */ p(async (e8, t, r3) => {
  var u, d3;
  let i;
  const a = t.useHtmlLabels || At((u = dt()) == null ? void 0 : u.htmlLabels);
  r3 ? i = r3 : i = "node default";
  const n = e8.insert("g").attr("class", i).attr("id", t.domId || t.id), o = n.insert("g").attr("class", "label").attr("style", Ut(t.labelStyle));
  let s;
  t.label === void 0 ? s = "" : s = typeof t.label == "string" ? t.label : t.label[0];
  const l = await He(o, rr(hr(s), dt()), {
    useHtmlLabels: a,
    width: t.width || ((d3 = dt().flowchart) == null ? void 0 : d3.wrappingWidth),
    // @ts-expect-error -- This is currently not used. Should this be `classes` instead?
    cssClasses: "markdown-node-label",
    style: t.labelStyle,
    addSvgBackground: !!t.icon || !!t.img
  });
  let c = l.getBBox();
  const h = ((t == null ? void 0 : t.padding) ?? 0) / 2;
  if (a) {
    const f = l.children[0], g = Li$1(l), m = f.getElementsByTagName("img");
    if (m) {
      const y = s.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...m].map(
          (x) => new Promise((b) => {
            function v() {
              if (x.style.display = "flex", x.style.flexDirection = "column", y) {
                const S = dt().fontSize ? dt().fontSize : window.getComputedStyle(document.body).fontSize, _ = 5, [C = Nc.fontSize] = sn(S), k = C * _ + "px";
                x.style.minWidth = k, x.style.maxWidth = k;
              } else
                x.style.width = "100%";
              b(x);
            }
            p(v, "setupImage"), setTimeout(() => {
              x.complete && v();
            }), x.addEventListener("error", v), x.addEventListener("load", v);
          })
        )
      );
    }
    c = f.getBoundingClientRect(), g.attr("width", c.width), g.attr("height", c.height);
  }
  return a ? o.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")") : o.attr("transform", "translate(0, " + -c.height / 2 + ")"), t.centerLabel && o.attr("transform", "translate(" + -c.width / 2 + ", " + -c.height / 2 + ")"), o.insert("rect", ":first-child"), { shapeSvg: n, bbox: c, halfPadding: h, label: o };
}, "labelHelper"), Wn = /* @__PURE__ */ p(async (e8, t, r3) => {
  var l, c, h, u, d3, f;
  const i = r3.useHtmlLabels || At((c = (l = dt()) == null ? void 0 : l.flowchart) == null ? void 0 : c.htmlLabels), a = e8.insert("g").attr("class", "label").attr("style", r3.labelStyle || ""), n = await He(a, rr(hr(t), dt()), {
    useHtmlLabels: i,
    width: r3.width || ((u = (h = dt()) == null ? void 0 : h.flowchart) == null ? void 0 : u.wrappingWidth),
    style: r3.labelStyle,
    addSvgBackground: !!r3.icon || !!r3.img
  });
  let o = n.getBBox();
  const s = r3.padding / 2;
  if (At((f = (d3 = dt()) == null ? void 0 : d3.flowchart) == null ? void 0 : f.htmlLabels)) {
    const g = n.children[0], m = Li$1(n);
    o = g.getBoundingClientRect(), m.attr("width", o.width), m.attr("height", o.height);
  }
  return i ? a.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")") : a.attr("transform", "translate(0, " + -o.height / 2 + ")"), r3.centerLabel && a.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")"), a.insert("rect", ":first-child"), { shapeSvg: e8, bbox: o, halfPadding: s, label: a };
}, "insertLabel"), J = /* @__PURE__ */ p((e8, t) => {
  const r3 = t.node().getBBox();
  e8.width = r3.width, e8.height = r3.height;
}, "updateNodeBounds"), nt = /* @__PURE__ */ p((e8, t) => (e8.look === "handDrawn" ? "rough-node" : "node") + " " + e8.cssClasses + " " + (t || ""), "getNodeClasses");
function ht(e8) {
  const t = e8.map((r3, i) => `${i === 0 ? "M" : "L"}${r3.x},${r3.y}`);
  return t.push("Z"), t.join(" ");
}
p(ht, "createPathFromPoints");
function We(e8, t, r3, i, a, n) {
  const o = [], l = r3 - e8, c = i - t, h = l / n, u = 2 * Math.PI / h, d3 = t + c / 2;
  for (let f = 0; f <= 50; f++) {
    const g = f / 50, m = e8 + g * l, y = d3 + a * Math.sin(u * (m - e8));
    o.push({ x: m, y });
  }
  return o;
}
p(We, "generateFullSineWavePoints");
function Lo(e8, t, r3, i, a, n) {
  const o = [], s = a * Math.PI / 180, h = (n * Math.PI / 180 - s) / (i - 1);
  for (let u = 0; u < i; u++) {
    const d3 = s + u * h, f = e8 + r3 * Math.cos(d3), g = t + r3 * Math.sin(d3);
    o.push({ x: -f, y: -g });
  }
  return o;
}
p(Lo, "generateCirclePoints");
var H2 = /* @__PURE__ */ p((e8, t) => {
  var r3 = e8.x, i = e8.y, a = t.x - r3, n = t.y - i, o = e8.width / 2, s = e8.height / 2, l, c;
  return Math.abs(n) * o > Math.abs(a) * s ? (n < 0 && (s = -s), l = n === 0 ? 0 : s * a / n, c = s) : (a < 0 && (o = -o), l = o, c = a === 0 ? 0 : o * n / a), { x: r3 + l, y: i + c };
}, "intersectRect"), Ur = H2;
function Xd(e8, t) {
  t && e8.attr("style", t);
}
p(Xd, "applyStyle");
async function Vd(e8) {
  const t = Li$1(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), r3 = t.append("xhtml:div");
  let i = e8.label;
  e8.label && Pr(e8.label) && (i = await zs(e8.label.replace(Hr.lineBreakRegex, `
`), dt()));
  const a = e8.isNode ? "nodeLabel" : "edgeLabel";
  return r3.html(
    '<span class="' + a + '" ' + (e8.labelStyle ? 'style="' + e8.labelStyle + '"' : "") + // codeql [js/html-constructed-from-input] : false positive
    ">" + i + "</span>"
  ), Xd(r3, e8.labelStyle), r3.style("display", "inline-block"), r3.style("padding-right", "1px"), r3.style("white-space", "nowrap"), r3.attr("xmlns", "http://www.w3.org/1999/xhtml"), t.node();
}
p(Vd, "addHtmlLabel");
var j2 = /* @__PURE__ */ p(async (e8, t, r3, i) => {
  let a = e8 || "";
  if (typeof a == "object" && (a = a[0]), At(dt().flowchart.htmlLabels)) {
    a = a.replace(/\\n|\n/g, "<br />"), D.info("vertexText" + a);
    const n = {
      isNode: i,
      label: hr(a).replace(
        /fa[blrs]?:fa-[\w-]+/g,
        (s) => `<i class='${s.replace(":", " ")}'></i>`
      ),
      labelStyle: t && t.replace("fill:", "color:")
    };
    return await Vd(n);
  } else {
    const n = document.createElementNS("http://www.w3.org/2000/svg", "text");
    n.setAttribute("style", t.replace("color:", "fill:"));
    let o = [];
    typeof a == "string" ? o = a.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(a) ? o = a : o = [];
    for (const s of o) {
      const l = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), l.setAttribute("dy", "1em"), l.setAttribute("x", "0"), r3 ? l.setAttribute("class", "title-row") : l.setAttribute("class", "row"), l.textContent = s.trim(), n.appendChild(l);
    }
    return n;
  }
}, "createLabel"), tr = j2, Oe = /* @__PURE__ */ p((e8, t, r3, i, a) => [
  "M",
  e8 + a,
  t,
  // Move to the first point
  "H",
  e8 + r3 - a,
  // Draw horizontal line to the beginning of the right corner
  "A",
  a,
  a,
  0,
  0,
  1,
  e8 + r3,
  t + a,
  // Draw arc to the right top corner
  "V",
  t + i - a,
  // Draw vertical line down to the beginning of the right bottom corner
  "A",
  a,
  a,
  0,
  0,
  1,
  e8 + r3 - a,
  t + i,
  // Draw arc to the right bottom corner
  "H",
  e8 + a,
  // Draw horizontal line to the beginning of the left bottom corner
  "A",
  a,
  a,
  0,
  0,
  1,
  e8,
  t + i - a,
  // Draw arc to the left bottom corner
  "V",
  t + a,
  // Draw vertical line up to the beginning of the left top corner
  "A",
  a,
  a,
  0,
  0,
  1,
  e8 + a,
  t,
  // Draw arc to the left top corner
  "Z"
  // Close the path
].join(" "), "createRoundedRectPathD"), Y2 = /* @__PURE__ */ p((e8) => {
  const { handDrawnSeed: t } = dt();
  return {
    fill: e8,
    hachureAngle: 120,
    // angle of hachure,
    hachureGap: 4,
    fillWeight: 2,
    roughness: 0.7,
    stroke: e8,
    seed: t
  };
}, "solidStateFill"), Gr = /* @__PURE__ */ p((e8) => {
  const t = U2([...e8.cssCompiledStyles || [], ...e8.cssStyles || []]);
  return { stylesMap: t, stylesArray: [...t] };
}, "compileStyles"), U2 = /* @__PURE__ */ p((e8) => {
  const t = /* @__PURE__ */ new Map();
  return e8.forEach((r3) => {
    const [i, a] = r3.split(":");
    t.set(i.trim(), a == null ? void 0 : a.trim());
  }), t;
}, "styles2Map"), Zd = /* @__PURE__ */ p((e8) => e8 === "color" || e8 === "font-size" || e8 === "font-family" || e8 === "font-weight" || e8 === "font-style" || e8 === "text-decoration" || e8 === "text-align" || e8 === "text-transform" || e8 === "line-height" || e8 === "letter-spacing" || e8 === "word-spacing" || e8 === "text-shadow" || e8 === "text-overflow" || e8 === "white-space" || e8 === "word-wrap" || e8 === "word-break" || e8 === "overflow-wrap" || e8 === "hyphens", "isLabelStyle"), tt = /* @__PURE__ */ p((e8) => {
  const { stylesArray: t } = Gr(e8), r3 = [], i = [], a = [], n = [];
  return t.forEach((o) => {
    const s = o[0];
    Zd(s) ? r3.push(o.join(":") + " !important") : (i.push(o.join(":") + " !important"), s.includes("stroke") && a.push(o.join(":") + " !important"), s === "fill" && n.push(o.join(":") + " !important"));
  }), {
    labelStyles: r3.join(";"),
    nodeStyles: i.join(";"),
    stylesArray: t,
    borderStyles: a,
    backgroundStyles: n
  };
}, "styles2String"), Q = /* @__PURE__ */ p((e8, t) => {
  var l;
  const { themeVariables: r3, handDrawnSeed: i } = dt(), { nodeBorder: a, mainBkg: n } = r3, { stylesMap: o } = Gr(e8);
  return Object.assign(
    {
      roughness: 0.7,
      fill: o.get("fill") || n,
      fillStyle: "hachure",
      // solid fill
      fillWeight: 4,
      hachureGap: 5.2,
      stroke: o.get("stroke") || a,
      seed: i,
      strokeWidth: ((l = o.get("stroke-width")) == null ? void 0 : l.replace("px", "")) || 1.3,
      fillLineDash: [0, 0]
    },
    t
  );
}, "userNodeOverrides"), Kd = /* @__PURE__ */ p(async (e8, t) => {
  D.info("Creating subgraph rect for ", t.id, t);
  const r3 = dt(), { themeVariables: i, handDrawnSeed: a } = r3, { clusterBkg: n, clusterBorder: o } = i, { labelStyles: s, nodeStyles: l, borderStyles: c, backgroundStyles: h } = tt(t), u = e8.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), d3 = At(r3.flowchart.htmlLabels), f = u.insert("g").attr("class", "cluster-label "), g = await He(f, t.label, {
    style: t.labelStyle,
    useHtmlLabels: d3,
    isNode: true
  });
  let m = g.getBBox();
  if (At(r3.flowchart.htmlLabels)) {
    const k = g.children[0], P = Li$1(g);
    m = k.getBoundingClientRect(), P.attr("width", m.width), P.attr("height", m.height);
  }
  const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
  t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
  const x = t.height, b = t.x - y / 2, v = t.y - x / 2;
  D.trace("Data ", t, JSON.stringify(t));
  let S;
  if (t.look === "handDrawn") {
    const k = Z.svg(u), P = Q(t, {
      roughness: 0.7,
      fill: n,
      // fill: 'red',
      stroke: o,
      fillWeight: 3,
      seed: a
    }), H = k.path(Oe(b, v, y, x, 0), P);
    S = u.insert(() => (D.debug("Rough node insert CXC", H), H), ":first-child"), S.select("path:nth-child(2)").attr("style", c.join(";")), S.select("path").attr("style", h.join(";").replace("fill", "stroke"));
  } else
    S = u.insert("rect", ":first-child"), S.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", v).attr("width", y).attr("height", x);
  const { subGraphTitleTopMargin: _ } = Js(r3);
  if (f.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + _})`
  ), s) {
    const k = f.select("span");
    k && k.attr("style", s);
  }
  const C = S.node().getBBox();
  return t.offsetX = 0, t.width = C.width, t.height = C.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(k) {
    return Ur(t, k);
  }, { cluster: u, labelBBox: m };
}, "rect"), G2 = /* @__PURE__ */ p((e8, t) => {
  const r3 = e8.insert("g").attr("class", "note-cluster").attr("id", t.id), i = r3.insert("rect", ":first-child"), a = 0 * t.padding, n = a / 2;
  i.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - n).attr("y", t.y - t.height / 2 - n).attr("width", t.width + a).attr("height", t.height + a).attr("fill", "none");
  const o = i.node().getBBox();
  return t.width = o.width, t.height = o.height, t.intersect = function(s) {
    return Ur(t, s);
  }, { cluster: r3, labelBBox: { width: 0, height: 0 } };
}, "noteGroup"), X2 = /* @__PURE__ */ p(async (e8, t) => {
  const r3 = dt(), { themeVariables: i, handDrawnSeed: a } = r3, { altBackground: n, compositeBackground: o, compositeTitleBackground: s, nodeBorder: l } = i, c = e8.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-id", t.id).attr("data-look", t.look), h = c.insert("g", ":first-child"), u = c.insert("g").attr("class", "cluster-label");
  let d3 = c.append("rect");
  const f = u.node().appendChild(await tr(t.label, t.labelStyle, void 0, true));
  let g = f.getBBox();
  if (At(r3.flowchart.htmlLabels)) {
    const H = f.children[0], $ = Li$1(f);
    g = H.getBoundingClientRect(), $.attr("width", g.width), $.attr("height", g.height);
  }
  const m = 0 * t.padding, y = m / 2, x = (t.width <= g.width + t.padding ? g.width + t.padding : t.width) + m;
  t.width <= g.width + t.padding ? t.diff = (x - t.width) / 2 - t.padding : t.diff = -t.padding;
  const b = t.height + m, v = t.height + m - g.height - 6, S = t.x - x / 2, _ = t.y - b / 2;
  t.width = x;
  const C = t.y - t.height / 2 - y + g.height + 2;
  let k;
  if (t.look === "handDrawn") {
    const H = t.cssClasses.includes("statediagram-cluster-alt"), $ = Z.svg(c), A = t.rx || t.ry ? $.path(Oe(S, _, x, b, 10), {
      roughness: 0.7,
      fill: s,
      fillStyle: "solid",
      stroke: l,
      seed: a
    }) : $.rectangle(S, _, x, b, { seed: a });
    k = c.insert(() => A, ":first-child");
    const j = $.rectangle(S, C, x, v, {
      fill: H ? n : o,
      fillStyle: H ? "hachure" : "solid",
      stroke: l,
      seed: a
    });
    k = c.insert(() => A, ":first-child"), d3 = c.insert(() => j);
  } else
    k = h.insert("rect", ":first-child"), k.attr("class", "outer").attr("x", S).attr("y", _).attr("width", x).attr("height", b).attr("data-look", t.look), d3.attr("class", "inner").attr("x", S).attr("y", C).attr("width", x).attr("height", v);
  u.attr(
    "transform",
    `translate(${t.x - g.width / 2}, ${_ + 1 - (At(r3.flowchart.htmlLabels) ? 0 : 3)})`
  );
  const P = k.node().getBBox();
  return t.height = P.height, t.offsetX = 0, t.offsetY = g.height - t.padding / 2, t.labelBBox = g, t.intersect = function(H) {
    return Ur(t, H);
  }, { cluster: c, labelBBox: g };
}, "roundedWithTitle"), V2 = /* @__PURE__ */ p(async (e8, t) => {
  D.info("Creating subgraph rect for ", t.id, t);
  const r3 = dt(), { themeVariables: i, handDrawnSeed: a } = r3, { clusterBkg: n, clusterBorder: o } = i, { labelStyles: s, nodeStyles: l, borderStyles: c, backgroundStyles: h } = tt(t), u = e8.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.id).attr("data-look", t.look), d3 = At(r3.flowchart.htmlLabels), f = u.insert("g").attr("class", "cluster-label "), g = await He(f, t.label, {
    style: t.labelStyle,
    useHtmlLabels: d3,
    isNode: true,
    width: t.width
  });
  let m = g.getBBox();
  if (At(r3.flowchart.htmlLabels)) {
    const k = g.children[0], P = Li$1(g);
    m = k.getBoundingClientRect(), P.attr("width", m.width), P.attr("height", m.height);
  }
  const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
  t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
  const x = t.height, b = t.x - y / 2, v = t.y - x / 2;
  D.trace("Data ", t, JSON.stringify(t));
  let S;
  if (t.look === "handDrawn") {
    const k = Z.svg(u), P = Q(t, {
      roughness: 0.7,
      fill: n,
      // fill: 'red',
      stroke: o,
      fillWeight: 4,
      seed: a
    }), H = k.path(Oe(b, v, y, x, t.rx), P);
    S = u.insert(() => (D.debug("Rough node insert CXC", H), H), ":first-child"), S.select("path:nth-child(2)").attr("style", c.join(";")), S.select("path").attr("style", h.join(";").replace("fill", "stroke"));
  } else
    S = u.insert("rect", ":first-child"), S.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", v).attr("width", y).attr("height", x);
  const { subGraphTitleTopMargin: _ } = Js(r3);
  if (f.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + _})`
  ), s) {
    const k = f.select("span");
    k && k.attr("style", s);
  }
  const C = S.node().getBBox();
  return t.offsetX = 0, t.width = C.width, t.height = C.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(k) {
    return Ur(t, k);
  }, { cluster: u, labelBBox: m };
}, "kanbanSection"), Z2 = /* @__PURE__ */ p((e8, t) => {
  const r3 = dt(), { themeVariables: i, handDrawnSeed: a } = r3, { nodeBorder: n } = i, o = e8.insert("g").attr("class", t.cssClasses).attr("id", t.id).attr("data-look", t.look), s = o.insert("g", ":first-child"), l = 0 * t.padding, c = t.width + l;
  t.diff = -t.padding;
  const h = t.height + l, u = t.x - c / 2, d3 = t.y - h / 2;
  t.width = c;
  let f;
  if (t.look === "handDrawn") {
    const y = Z.svg(o).rectangle(u, d3, c, h, {
      fill: "lightgrey",
      roughness: 0.5,
      strokeLineDash: [5],
      stroke: n,
      seed: a
    });
    f = o.insert(() => y, ":first-child");
  } else
    f = s.insert("rect", ":first-child"), f.attr("class", "divider").attr("x", u).attr("y", d3).attr("width", c).attr("height", h).attr("data-look", t.look);
  const g = f.node().getBBox();
  return t.height = g.height, t.offsetX = 0, t.offsetY = 0, t.intersect = function(m) {
    return Ur(t, m);
  }, { cluster: o, labelBBox: {} };
}, "divider"), K2 = Kd, Q2 = {
  rect: Kd,
  squareRect: K2,
  roundedWithTitle: X2,
  noteGroup: G2,
  divider: Z2,
  kanbanSection: V2
}, Qd = /* @__PURE__ */ new Map(), J2 = /* @__PURE__ */ p(async (e8, t) => {
  const r3 = t.shape || "rect", i = await Q2[r3](e8, t);
  return Qd.set(t.id, i), i;
}, "insertCluster"), G_ = /* @__PURE__ */ p(() => {
  Qd = /* @__PURE__ */ new Map();
}, "clear");
function Jd(e8, t) {
  return e8.intersect(t);
}
p(Jd, "intersectNode");
var tC = Jd;
function tf(e8, t, r3, i) {
  var a = e8.x, n = e8.y, o = a - i.x, s = n - i.y, l = Math.sqrt(t * t * s * s + r3 * r3 * o * o), c = Math.abs(t * r3 * o / l);
  i.x < a && (c = -c);
  var h = Math.abs(t * r3 * s / l);
  return i.y < n && (h = -h), { x: a + c, y: n + h };
}
p(tf, "intersectEllipse");
var ef = tf;
function rf(e8, t, r3) {
  return ef(e8, t, t, r3);
}
p(rf, "intersectCircle");
var eC = rf;
function af(e8, t, r3, i) {
  var a, n, o, s, l, c, h, u, d3, f, g, m, y, x, b;
  if (a = t.y - e8.y, o = e8.x - t.x, l = t.x * e8.y - e8.x * t.y, d3 = a * r3.x + o * r3.y + l, f = a * i.x + o * i.y + l, !(d3 !== 0 && f !== 0 && Bs(d3, f)) && (n = i.y - r3.y, s = r3.x - i.x, c = i.x * r3.y - r3.x * i.y, h = n * e8.x + s * e8.y + c, u = n * t.x + s * t.y + c, !(h !== 0 && u !== 0 && Bs(h, u)) && (g = a * s - n * o, g !== 0)))
    return m = Math.abs(g / 2), y = o * c - s * l, x = y < 0 ? (y - m) / g : (y + m) / g, y = n * l - a * c, b = y < 0 ? (y - m) / g : (y + m) / g, { x, y: b };
}
p(af, "intersectLine");
function Bs(e8, t) {
  return e8 * t > 0;
}
p(Bs, "sameSign");
var rC = af;
function nf(e8, t, r3) {
  let i = e8.x, a = e8.y, n = [], o = Number.POSITIVE_INFINITY, s = Number.POSITIVE_INFINITY;
  typeof t.forEach == "function" ? t.forEach(function(h) {
    o = Math.min(o, h.x), s = Math.min(s, h.y);
  }) : (o = Math.min(o, t.x), s = Math.min(s, t.y));
  let l = i - e8.width / 2 - o, c = a - e8.height / 2 - s;
  for (let h = 0; h < t.length; h++) {
    let u = t[h], d3 = t[h < t.length - 1 ? h + 1 : 0], f = rC(
      e8,
      r3,
      { x: l + u.x, y: c + u.y },
      { x: l + d3.x, y: c + d3.y }
    );
    f && n.push(f);
  }
  return n.length ? (n.length > 1 && n.sort(function(h, u) {
    let d3 = h.x - r3.x, f = h.y - r3.y, g = Math.sqrt(d3 * d3 + f * f), m = u.x - r3.x, y = u.y - r3.y, x = Math.sqrt(m * m + y * y);
    return g < x ? -1 : g === x ? 0 : 1;
  }), n[0]) : e8;
}
p(nf, "intersectPolygon");
var iC = nf, X = {
  node: tC,
  circle: eC,
  ellipse: ef,
  polygon: iC,
  rect: Ur
};
function sf(e8, t) {
  const { labelStyles: r3 } = tt(t);
  t.labelStyle = r3;
  const i = nt(t);
  let a = i;
  i || (a = "anchor");
  const n = e8.insert("g").attr("class", a).attr("id", t.domId || t.id), o = 1, { cssStyles: s } = t, l = Z.svg(n), c = Q(t, { fill: "black", stroke: "none", fillStyle: "solid" });
  t.look !== "handDrawn" && (c.roughness = 0);
  const h = l.circle(0, 0, o * 2, c), u = n.insert(() => h, ":first-child");
  return u.attr("class", "anchor").attr("style", Ut(s)), J(t, u), t.intersect = function(d3) {
    return D.info("Circle intersect", t, o, d3), X.circle(t, o, d3);
  }, n;
}
p(sf, "anchor");
function Ls(e8, t, r3, i, a, n, o) {
  const l = (e8 + r3) / 2, c = (t + i) / 2, h = Math.atan2(i - t, r3 - e8), u = (r3 - e8) / 2, d3 = (i - t) / 2, f = u / a, g = d3 / n, m = Math.sqrt(f ** 2 + g ** 2);
  if (m > 1)
    throw new Error("The given radii are too small to create an arc between the points.");
  const y = Math.sqrt(1 - m ** 2), x = l + y * n * Math.sin(h) * (o ? -1 : 1), b = c - y * a * Math.cos(h) * (o ? -1 : 1), v = Math.atan2((t - b) / n, (e8 - x) / a);
  let _ = Math.atan2((i - b) / n, (r3 - x) / a) - v;
  o && _ < 0 && (_ += 2 * Math.PI), !o && _ > 0 && (_ -= 2 * Math.PI);
  const C = [];
  for (let k = 0; k < 20; k++) {
    const P = k / 19, H = v + P * _, $ = x + a * Math.cos(H), A = b + n * Math.sin(H);
    C.push({ x: $, y: A });
  }
  return C;
}
p(Ls, "generateArcPoints");
async function of(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n } = await ot(e8, t, nt(t)), o = n.width + t.padding + 20, s = n.height + t.padding, l = s / 2, c = l / (2.5 + s / 50), { cssStyles: h } = t, u = [
    { x: o / 2, y: -s / 2 },
    { x: -o / 2, y: -s / 2 },
    ...Ls(-o / 2, -s / 2, -o / 2, s / 2, c, l, false),
    { x: o / 2, y: s / 2 },
    ...Ls(o / 2, s / 2, o / 2, -s / 2, c, l, true)
  ], d3 = Z.svg(a), f = Q(t, {});
  t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
  const g = ht(u), m = d3.path(g, f), y = a.insert(() => m, ":first-child");
  return y.attr("class", "basic label-container"), h && t.look !== "handDrawn" && y.selectAll("path").attr("style", h), i && t.look !== "handDrawn" && y.selectAll("path").attr("style", i), y.attr("transform", `translate(${c / 2}, 0)`), J(t, y), t.intersect = function(x) {
    return X.polygon(t, u, x);
  }, a;
}
p(of, "bowTieRect");
function $e(e8, t, r3, i) {
  return e8.insert("polygon", ":first-child").attr(
    "points",
    i.map(function(a) {
      return a.x + "," + a.y;
    }).join(" ")
  ).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + r3 / 2 + ")");
}
p($e, "insertPolygonShape");
async function lf(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n } = await ot(e8, t, nt(t)), o = n.height + t.padding, s = 12, l = n.width + t.padding + s, c = 0, h = l, u = -o, d3 = 0, f = [
    { x: c + s, y: u },
    { x: h, y: u },
    { x: h, y: d3 },
    { x: c, y: d3 },
    { x: c, y: u + s },
    { x: c + s, y: u }
  ];
  let g;
  const { cssStyles: m } = t;
  if (t.look === "handDrawn") {
    const y = Z.svg(a), x = Q(t, {}), b = ht(f), v = y.path(b, x);
    g = a.insert(() => v, ":first-child").attr("transform", `translate(${-l / 2}, ${o / 2})`), m && g.attr("style", m);
  } else
    g = $e(a, l, o, f);
  return i && g.attr("style", i), J(t, g), t.intersect = function(y) {
    return X.polygon(t, f, y);
  }, a;
}
p(lf, "card");
function cf(e8, t) {
  const { nodeStyles: r3 } = tt(t);
  t.label = "";
  const i = e8.insert("g").attr("class", nt(t)).attr("id", t.domId ?? t.id), { cssStyles: a } = t, n = Math.max(28, t.width ?? 0), o = [
    { x: 0, y: n / 2 },
    { x: n / 2, y: 0 },
    { x: 0, y: -n / 2 },
    { x: -n / 2, y: 0 }
  ], s = Z.svg(i), l = Q(t, {});
  t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
  const c = ht(o), h = s.path(c, l), u = i.insert(() => h, ":first-child");
  return a && t.look !== "handDrawn" && u.selectAll("path").attr("style", a), r3 && t.look !== "handDrawn" && u.selectAll("path").attr("style", r3), t.width = 28, t.height = 28, t.intersect = function(d3) {
    return X.polygon(t, o, d3);
  }, i;
}
p(cf, "choice");
async function hf(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n, halfPadding: o } = await ot(e8, t, nt(t)), s = n.width / 2 + o;
  let l;
  const { cssStyles: c } = t;
  if (t.look === "handDrawn") {
    const h = Z.svg(a), u = Q(t, {}), d3 = h.circle(0, 0, s * 2, u);
    l = a.insert(() => d3, ":first-child"), l.attr("class", "basic label-container").attr("style", Ut(c));
  } else
    l = a.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", i).attr("r", s).attr("cx", 0).attr("cy", 0);
  return J(t, l), t.intersect = function(h) {
    return D.info("Circle intersect", t, s, h), X.circle(t, s, h);
  }, a;
}
p(hf, "circle");
function uf(e8) {
  const t = Math.cos(Math.PI / 4), r3 = Math.sin(Math.PI / 4), i = e8 * 2, a = { x: i / 2 * t, y: i / 2 * r3 }, n = { x: -(i / 2) * t, y: i / 2 * r3 }, o = { x: -(i / 2) * t, y: -(i / 2) * r3 }, s = { x: i / 2 * t, y: -(i / 2) * r3 };
  return `M ${n.x},${n.y} L ${s.x},${s.y}
                   M ${a.x},${a.y} L ${o.x},${o.y}`;
}
p(uf, "createLine");
function df(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3, t.label = "";
  const a = e8.insert("g").attr("class", nt(t)).attr("id", t.domId ?? t.id), n = Math.max(30, (t == null ? void 0 : t.width) ?? 0), { cssStyles: o } = t, s = Z.svg(a), l = Q(t, {});
  t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
  const c = s.circle(0, 0, n * 2, l), h = uf(n), u = s.path(h, l), d3 = a.insert(() => c, ":first-child");
  return d3.insert(() => u), o && t.look !== "handDrawn" && d3.selectAll("path").attr("style", o), i && t.look !== "handDrawn" && d3.selectAll("path").attr("style", i), J(t, d3), t.intersect = function(f) {
    return D.info("crossedCircle intersect", t, { radius: n, point: f }), X.circle(t, n, f);
  }, a;
}
p(df, "crossedCircle");
function Se(e8, t, r3, i = 100, a = 0, n = 180) {
  const o = [], s = a * Math.PI / 180, h = (n * Math.PI / 180 - s) / (i - 1);
  for (let u = 0; u < i; u++) {
    const d3 = s + u * h, f = e8 + r3 * Math.cos(d3), g = t + r3 * Math.sin(d3);
    o.push({ x: -f, y: -g });
  }
  return o;
}
p(Se, "generateCirclePoints");
async function ff(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n, label: o } = await ot(e8, t, nt(t)), s = n.width + (t.padding ?? 0), l = n.height + (t.padding ?? 0), c = Math.max(5, l * 0.1), { cssStyles: h } = t, u = [
    ...Se(s / 2, -l / 2, c, 30, -90, 0),
    { x: -s / 2 - c, y: c },
    ...Se(s / 2 + c * 2, -c, c, 20, -180, -270),
    ...Se(s / 2 + c * 2, c, c, 20, -90, -180),
    { x: -s / 2 - c, y: -l / 2 },
    ...Se(s / 2, l / 2, c, 20, 0, 90)
  ], d3 = [
    { x: s / 2, y: -l / 2 - c },
    { x: -s / 2, y: -l / 2 - c },
    ...Se(s / 2, -l / 2, c, 20, -90, 0),
    { x: -s / 2 - c, y: -c },
    ...Se(s / 2 + s * 0.1, -c, c, 20, -180, -270),
    ...Se(s / 2 + s * 0.1, c, c, 20, -90, -180),
    { x: -s / 2 - c, y: l / 2 },
    ...Se(s / 2, l / 2, c, 20, 0, 90),
    { x: -s / 2, y: l / 2 + c },
    { x: s / 2, y: l / 2 + c }
  ], f = Z.svg(a), g = Q(t, { fill: "none" });
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const y = ht(u).replace("Z", ""), x = f.path(y, g), b = ht(d3), v = f.path(b, { ...g }), S = a.insert("g", ":first-child");
  return S.insert(() => v, ":first-child").attr("stroke-opacity", 0), S.insert(() => x, ":first-child"), S.attr("class", "text"), h && t.look !== "handDrawn" && S.selectAll("path").attr("style", h), i && t.look !== "handDrawn" && S.selectAll("path").attr("style", i), S.attr("transform", `translate(${c}, 0)`), o.attr(
    "transform",
    `translate(${-s / 2 + c - (n.x - (n.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (n.y - (n.top ?? 0))})`
  ), J(t, S), t.intersect = function(_) {
    return X.polygon(t, d3, _);
  }, a;
}
p(ff, "curlyBraceLeft");
function Te(e8, t, r3, i = 100, a = 0, n = 180) {
  const o = [], s = a * Math.PI / 180, h = (n * Math.PI / 180 - s) / (i - 1);
  for (let u = 0; u < i; u++) {
    const d3 = s + u * h, f = e8 + r3 * Math.cos(d3), g = t + r3 * Math.sin(d3);
    o.push({ x: f, y: g });
  }
  return o;
}
p(Te, "generateCirclePoints");
async function pf(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n, label: o } = await ot(e8, t, nt(t)), s = n.width + (t.padding ?? 0), l = n.height + (t.padding ?? 0), c = Math.max(5, l * 0.1), { cssStyles: h } = t, u = [
    ...Te(s / 2, -l / 2, c, 20, -90, 0),
    { x: s / 2 + c, y: -c },
    ...Te(s / 2 + c * 2, -c, c, 20, -180, -270),
    ...Te(s / 2 + c * 2, c, c, 20, -90, -180),
    { x: s / 2 + c, y: l / 2 },
    ...Te(s / 2, l / 2, c, 20, 0, 90)
  ], d3 = [
    { x: -s / 2, y: -l / 2 - c },
    { x: s / 2, y: -l / 2 - c },
    ...Te(s / 2, -l / 2, c, 20, -90, 0),
    { x: s / 2 + c, y: -c },
    ...Te(s / 2 + c * 2, -c, c, 20, -180, -270),
    ...Te(s / 2 + c * 2, c, c, 20, -90, -180),
    { x: s / 2 + c, y: l / 2 },
    ...Te(s / 2, l / 2, c, 20, 0, 90),
    { x: s / 2, y: l / 2 + c },
    { x: -s / 2, y: l / 2 + c }
  ], f = Z.svg(a), g = Q(t, { fill: "none" });
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const y = ht(u).replace("Z", ""), x = f.path(y, g), b = ht(d3), v = f.path(b, { ...g }), S = a.insert("g", ":first-child");
  return S.insert(() => v, ":first-child").attr("stroke-opacity", 0), S.insert(() => x, ":first-child"), S.attr("class", "text"), h && t.look !== "handDrawn" && S.selectAll("path").attr("style", h), i && t.look !== "handDrawn" && S.selectAll("path").attr("style", i), S.attr("transform", `translate(${-c}, 0)`), o.attr(
    "transform",
    `translate(${-s / 2 + (t.padding ?? 0) / 2 - (n.x - (n.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (n.y - (n.top ?? 0))})`
  ), J(t, S), t.intersect = function(_) {
    return X.polygon(t, d3, _);
  }, a;
}
p(pf, "curlyBraceRight");
function Ot(e8, t, r3, i = 100, a = 0, n = 180) {
  const o = [], s = a * Math.PI / 180, h = (n * Math.PI / 180 - s) / (i - 1);
  for (let u = 0; u < i; u++) {
    const d3 = s + u * h, f = e8 + r3 * Math.cos(d3), g = t + r3 * Math.sin(d3);
    o.push({ x: -f, y: -g });
  }
  return o;
}
p(Ot, "generateCirclePoints");
async function gf(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n, label: o } = await ot(e8, t, nt(t)), s = n.width + (t.padding ?? 0), l = n.height + (t.padding ?? 0), c = Math.max(5, l * 0.1), { cssStyles: h } = t, u = [
    ...Ot(s / 2, -l / 2, c, 30, -90, 0),
    { x: -s / 2 - c, y: c },
    ...Ot(s / 2 + c * 2, -c, c, 20, -180, -270),
    ...Ot(s / 2 + c * 2, c, c, 20, -90, -180),
    { x: -s / 2 - c, y: -l / 2 },
    ...Ot(s / 2, l / 2, c, 20, 0, 90)
  ], d3 = [
    ...Ot(-s / 2 + c + c / 2, -l / 2, c, 20, -90, -180),
    { x: s / 2 - c / 2, y: c },
    ...Ot(-s / 2 - c / 2, -c, c, 20, 0, 90),
    ...Ot(-s / 2 - c / 2, c, c, 20, -90, 0),
    { x: s / 2 - c / 2, y: -c },
    ...Ot(-s / 2 + c + c / 2, l / 2, c, 30, -180, -270)
  ], f = [
    { x: s / 2, y: -l / 2 - c },
    { x: -s / 2, y: -l / 2 - c },
    ...Ot(s / 2, -l / 2, c, 20, -90, 0),
    { x: -s / 2 - c, y: -c },
    ...Ot(s / 2 + c * 2, -c, c, 20, -180, -270),
    ...Ot(s / 2 + c * 2, c, c, 20, -90, -180),
    { x: -s / 2 - c, y: l / 2 },
    ...Ot(s / 2, l / 2, c, 20, 0, 90),
    { x: -s / 2, y: l / 2 + c },
    { x: s / 2 - c - c / 2, y: l / 2 + c },
    ...Ot(-s / 2 + c + c / 2, -l / 2, c, 20, -90, -180),
    { x: s / 2 - c / 2, y: c },
    ...Ot(-s / 2 - c / 2, -c, c, 20, 0, 90),
    ...Ot(-s / 2 - c / 2, c, c, 20, -90, 0),
    { x: s / 2 - c / 2, y: -c },
    ...Ot(-s / 2 + c + c / 2, l / 2, c, 30, -180, -270)
  ], g = Z.svg(a), m = Q(t, { fill: "none" });
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const x = ht(u).replace("Z", ""), b = g.path(x, m), S = ht(d3).replace("Z", ""), _ = g.path(S, m), C = ht(f), k = g.path(C, { ...m }), P = a.insert("g", ":first-child");
  return P.insert(() => k, ":first-child").attr("stroke-opacity", 0), P.insert(() => b, ":first-child"), P.insert(() => _, ":first-child"), P.attr("class", "text"), h && t.look !== "handDrawn" && P.selectAll("path").attr("style", h), i && t.look !== "handDrawn" && P.selectAll("path").attr("style", i), P.attr("transform", `translate(${c - c / 4}, 0)`), o.attr(
    "transform",
    `translate(${-s / 2 + (t.padding ?? 0) / 2 - (n.x - (n.left ?? 0))},${-l / 2 + (t.padding ?? 0) / 2 - (n.y - (n.top ?? 0))})`
  ), J(t, P), t.intersect = function(H) {
    return X.polygon(t, f, H);
  }, a;
}
p(gf, "curlyBraces");
async function mf(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n } = await ot(e8, t, nt(t)), o = 80, s = 20, l = Math.max(o, (n.width + (t.padding ?? 0) * 2) * 1.25, (t == null ? void 0 : t.width) ?? 0), c = Math.max(s, n.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = c / 2, { cssStyles: u } = t, d3 = Z.svg(a), f = Q(t, {});
  t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
  const g = l, m = c, y = g - h, x = m / 4, b = [
    { x: y, y: 0 },
    { x, y: 0 },
    { x: 0, y: m / 2 },
    { x, y: m },
    { x: y, y: m },
    ...Lo(-y, -m / 2, h, 50, 270, 90)
  ], v = ht(b), S = d3.path(v, f), _ = a.insert(() => S, ":first-child");
  return _.attr("class", "basic label-container"), u && t.look !== "handDrawn" && _.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && _.selectChildren("path").attr("style", i), _.attr("transform", `translate(${-l / 2}, ${-c / 2})`), J(t, _), t.intersect = function(C) {
    return X.polygon(t, b, C);
  }, a;
}
p(mf, "curvedTrapezoid");
var aC = /* @__PURE__ */ p((e8, t, r3, i, a, n) => [
  `M${e8},${t + n}`,
  `a${a},${n} 0,0,0 ${r3},0`,
  `a${a},${n} 0,0,0 ${-r3},0`,
  `l0,${i}`,
  `a${a},${n} 0,0,0 ${r3},0`,
  `l0,${-i}`
].join(" "), "createCylinderPathD"), nC = /* @__PURE__ */ p((e8, t, r3, i, a, n) => [
  `M${e8},${t + n}`,
  `M${e8 + r3},${t + n}`,
  `a${a},${n} 0,0,0 ${-r3},0`,
  `l0,${i}`,
  `a${a},${n} 0,0,0 ${r3},0`,
  `l0,${-i}`
].join(" "), "createOuterCylinderPathD"), sC = /* @__PURE__ */ p((e8, t, r3, i, a, n) => [`M${e8 - r3 / 2},${-i / 2}`, `a${a},${n} 0,0,0 ${r3},0`].join(" "), "createInnerCylinderPathD");
async function yf(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n, label: o } = await ot(e8, t, nt(t)), s = Math.max(n.width + t.padding, t.width ?? 0), l = s / 2, c = l / (2.5 + s / 50), h = Math.max(n.height + c + t.padding, t.height ?? 0);
  let u;
  const { cssStyles: d3 } = t;
  if (t.look === "handDrawn") {
    const f = Z.svg(a), g = nC(0, 0, s, h, l, c), m = sC(0, c, s, h, l, c), y = f.path(g, Q(t, {})), x = f.path(m, Q(t, { fill: "none" }));
    u = a.insert(() => x, ":first-child"), u = a.insert(() => y, ":first-child"), u.attr("class", "basic label-container"), d3 && u.attr("style", d3);
  } else {
    const f = aC(0, 0, s, h, l, c);
    u = a.insert("path", ":first-child").attr("d", f).attr("class", "basic label-container").attr("style", Ut(d3)).attr("style", i);
  }
  return u.attr("label-offset-y", c), u.attr("transform", `translate(${-s / 2}, ${-(h / 2 + c)})`), J(t, u), o.attr(
    "transform",
    `translate(${-(n.width / 2) - (n.x - (n.left ?? 0))}, ${-(n.height / 2) + (t.padding ?? 0) / 1.5 - (n.y - (n.top ?? 0))})`
  ), t.intersect = function(f) {
    const g = X.rect(t, f), m = g.x - (t.x ?? 0);
    if (l != 0 && (Math.abs(m) < (t.width ?? 0) / 2 || Math.abs(m) == (t.width ?? 0) / 2 && Math.abs(g.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - c)) {
      let y = c * c * (1 - m * m / (l * l));
      y > 0 && (y = Math.sqrt(y)), y = c - y, f.y - (t.y ?? 0) > 0 && (y = -y), g.y += y;
    }
    return g;
  }, a;
}
p(yf, "cylinder");
async function xf(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n, label: o } = await ot(e8, t, nt(t)), s = n.width + t.padding, l = n.height + t.padding, c = l * 0.2, h = -s / 2, u = -l / 2 - c / 2, { cssStyles: d3 } = t, f = Z.svg(a), g = Q(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = [
    { x: h, y: u + c },
    { x: -h, y: u + c },
    { x: -h, y: -u },
    { x: h, y: -u },
    { x: h, y: u },
    { x: -h, y: u },
    { x: -h, y: u + c }
  ], y = f.polygon(
    m.map((b) => [b.x, b.y]),
    g
  ), x = a.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container"), d3 && t.look !== "handDrawn" && x.selectAll("path").attr("style", d3), i && t.look !== "handDrawn" && x.selectAll("path").attr("style", i), o.attr(
    "transform",
    `translate(${h + (t.padding ?? 0) / 2 - (n.x - (n.left ?? 0))}, ${u + c + (t.padding ?? 0) / 2 - (n.y - (n.top ?? 0))})`
  ), J(t, x), t.intersect = function(b) {
    return X.rect(t, b);
  }, a;
}
p(xf, "dividedRectangle");
async function bf(e8, t) {
  var d3, f;
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n, halfPadding: o } = await ot(e8, t, nt(t)), l = n.width / 2 + o + 5, c = n.width / 2 + o;
  let h;
  const { cssStyles: u } = t;
  if (t.look === "handDrawn") {
    const g = Z.svg(a), m = Q(t, { roughness: 0.2, strokeWidth: 2.5 }), y = Q(t, { roughness: 0.2, strokeWidth: 1.5 }), x = g.circle(0, 0, l * 2, m), b = g.circle(0, 0, c * 2, y);
    h = a.insert("g", ":first-child"), h.attr("class", Ut(t.cssClasses)).attr("style", Ut(u)), (d3 = h.node()) == null || d3.appendChild(x), (f = h.node()) == null || f.appendChild(b);
  } else {
    h = a.insert("g", ":first-child");
    const g = h.insert("circle", ":first-child"), m = h.insert("circle");
    h.attr("class", "basic label-container").attr("style", i), g.attr("class", "outer-circle").attr("style", i).attr("r", l).attr("cx", 0).attr("cy", 0), m.attr("class", "inner-circle").attr("style", i).attr("r", c).attr("cx", 0).attr("cy", 0);
  }
  return J(t, h), t.intersect = function(g) {
    return D.info("DoubleCircle intersect", t, l, g), X.circle(t, l, g);
  }, a;
}
p(bf, "doublecircle");
function Cf(e8, t, { config: { themeVariables: r3 } }) {
  const { labelStyles: i, nodeStyles: a } = tt(t);
  t.label = "", t.labelStyle = i;
  const n = e8.insert("g").attr("class", nt(t)).attr("id", t.domId ?? t.id), o = 7, { cssStyles: s } = t, l = Z.svg(n), { nodeBorder: c } = r3, h = Q(t, { fillStyle: "solid" });
  t.look !== "handDrawn" && (h.roughness = 0);
  const u = l.circle(0, 0, o * 2, h), d3 = n.insert(() => u, ":first-child");
  return d3.selectAll("path").attr("style", `fill: ${c} !important;`), s && s.length > 0 && t.look !== "handDrawn" && d3.selectAll("path").attr("style", s), a && t.look !== "handDrawn" && d3.selectAll("path").attr("style", a), J(t, d3), t.intersect = function(f) {
    return D.info("filledCircle intersect", t, { radius: o, point: f }), X.circle(t, o, f);
  }, n;
}
p(Cf, "filledCircle");
async function vf(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n, label: o } = await ot(e8, t, nt(t)), s = n.width + (t.padding ?? 0), l = s + n.height, c = s + n.height, h = [
    { x: 0, y: -l },
    { x: c, y: -l },
    { x: c / 2, y: 0 }
  ], { cssStyles: u } = t, d3 = Z.svg(a), f = Q(t, {});
  t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
  const g = ht(h), m = d3.path(g, f), y = a.insert(() => m, ":first-child").attr("transform", `translate(${-l / 2}, ${l / 2})`);
  return u && t.look !== "handDrawn" && y.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && y.selectChildren("path").attr("style", i), t.width = s, t.height = l, J(t, y), o.attr(
    "transform",
    `translate(${-n.width / 2 - (n.x - (n.left ?? 0))}, ${-l / 2 + (t.padding ?? 0) / 2 + (n.y - (n.top ?? 0))})`
  ), t.intersect = function(x) {
    return D.info("Triangle intersect", t, h, x), X.polygon(t, h, x);
  }, a;
}
p(vf, "flippedTriangle");
function kf(e8, t, { dir: r3, config: { state: i, themeVariables: a } }) {
  const { nodeStyles: n } = tt(t);
  t.label = "";
  const o = e8.insert("g").attr("class", nt(t)).attr("id", t.domId ?? t.id), { cssStyles: s } = t;
  let l = Math.max(70, (t == null ? void 0 : t.width) ?? 0), c = Math.max(10, (t == null ? void 0 : t.height) ?? 0);
  r3 === "LR" && (l = Math.max(10, (t == null ? void 0 : t.width) ?? 0), c = Math.max(70, (t == null ? void 0 : t.height) ?? 0));
  const h = -1 * l / 2, u = -1 * c / 2, d3 = Z.svg(o), f = Q(t, {
    stroke: a.lineColor,
    fill: a.lineColor
  });
  t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
  const g = d3.rectangle(h, u, l, c, f), m = o.insert(() => g, ":first-child");
  s && t.look !== "handDrawn" && m.selectAll("path").attr("style", s), n && t.look !== "handDrawn" && m.selectAll("path").attr("style", n), J(t, m);
  const y = (i == null ? void 0 : i.padding) ?? 0;
  return t.width && t.height && (t.width += y / 2 || 0, t.height += y / 2 || 0), t.intersect = function(x) {
    return X.rect(t, x);
  }, o;
}
p(kf, "forkJoin");
async function wf(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const a = 80, n = 50, { shapeSvg: o, bbox: s } = await ot(e8, t, nt(t)), l = Math.max(a, s.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(n, s.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = c / 2, { cssStyles: u } = t, d3 = Z.svg(o), f = Q(t, {});
  t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
  const g = [
    { x: -l / 2, y: -c / 2 },
    { x: l / 2 - h, y: -c / 2 },
    ...Lo(-l / 2 + h, 0, h, 50, 90, 270),
    { x: l / 2 - h, y: c / 2 },
    { x: -l / 2, y: c / 2 }
  ], m = ht(g), y = d3.path(m, f), x = o.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container"), u && t.look !== "handDrawn" && x.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && x.selectChildren("path").attr("style", i), J(t, x), t.intersect = function(b) {
    return D.info("Pill intersect", t, { radius: h, point: b }), X.polygon(t, g, b);
  }, o;
}
p(wf, "halfRoundedRectangle");
var oC = /* @__PURE__ */ p((e8, t, r3, i, a) => [
  `M${e8 + a},${t}`,
  `L${e8 + r3 - a},${t}`,
  `L${e8 + r3},${t - i / 2}`,
  `L${e8 + r3 - a},${t - i}`,
  `L${e8 + a},${t - i}`,
  `L${e8},${t - i / 2}`,
  "Z"
].join(" "), "createHexagonPathD");
async function _f(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n } = await ot(e8, t, nt(t)), o = 4, s = n.height + t.padding, l = s / o, c = n.width + 2 * l + t.padding, h = [
    { x: l, y: 0 },
    { x: c - l, y: 0 },
    { x: c, y: -s / 2 },
    { x: c - l, y: -s },
    { x: l, y: -s },
    { x: 0, y: -s / 2 }
  ];
  let u;
  const { cssStyles: d3 } = t;
  if (t.look === "handDrawn") {
    const f = Z.svg(a), g = Q(t, {}), m = oC(0, 0, c, s, l), y = f.path(m, g);
    u = a.insert(() => y, ":first-child").attr("transform", `translate(${-c / 2}, ${s / 2})`), d3 && u.attr("style", d3);
  } else
    u = $e(a, c, s, h);
  return i && u.attr("style", i), t.width = c, t.height = s, J(t, u), t.intersect = function(f) {
    return X.polygon(t, h, f);
  }, a;
}
p(_f, "hexagon");
async function Sf(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.label = "", t.labelStyle = r3;
  const { shapeSvg: a } = await ot(e8, t, nt(t)), n = Math.max(30, (t == null ? void 0 : t.width) ?? 0), o = Math.max(30, (t == null ? void 0 : t.height) ?? 0), { cssStyles: s } = t, l = Z.svg(a), c = Q(t, {});
  t.look !== "handDrawn" && (c.roughness = 0, c.fillStyle = "solid");
  const h = [
    { x: 0, y: 0 },
    { x: n, y: 0 },
    { x: 0, y: o },
    { x: n, y: o }
  ], u = ht(h), d3 = l.path(u, c), f = a.insert(() => d3, ":first-child");
  return f.attr("class", "basic label-container"), s && t.look !== "handDrawn" && f.selectChildren("path").attr("style", s), i && t.look !== "handDrawn" && f.selectChildren("path").attr("style", i), f.attr("transform", `translate(${-n / 2}, ${-o / 2})`), J(t, f), t.intersect = function(g) {
    return D.info("Pill intersect", t, { points: h }), X.polygon(t, h, g);
  }, a;
}
p(Sf, "hourglass");
async function Tf(e8, t, { config: { themeVariables: r3, flowchart: i } }) {
  const { labelStyles: a } = tt(t);
  t.labelStyle = a;
  const n = t.assetHeight ?? 48, o = t.assetWidth ?? 48, s = Math.max(n, o), l = i == null ? void 0 : i.wrappingWidth;
  t.width = Math.max(s, l ?? 0);
  const { shapeSvg: c, bbox: h, label: u } = await ot(e8, t, "icon-shape default"), d3 = t.pos === "t", f = s, g = s, { nodeBorder: m } = r3, { stylesMap: y } = Gr(t), x = -g / 2, b = -f / 2, v = t.label ? 8 : 0, S = Z.svg(c), _ = Q(t, { stroke: "none", fill: "none" });
  t.look !== "handDrawn" && (_.roughness = 0, _.fillStyle = "solid");
  const C = S.rectangle(x, b, g, f, _), k = Math.max(g, h.width), P = f + h.height + v, H = S.rectangle(-k / 2, -P / 2, k, P, {
    ..._,
    fill: "transparent",
    stroke: "none"
  }), $ = c.insert(() => C, ":first-child"), A = c.insert(() => H);
  if (t.icon) {
    const j = c.append("g");
    j.html(
      `<g>${await Ka(t.icon, {
        height: s,
        width: s,
        fallbackPrefix: ""
      })}</g>`
    );
    const N = j.node().getBBox(), F = N.width, M = N.height, B = N.x, O = N.y;
    j.attr(
      "transform",
      `translate(${-F / 2 - B},${d3 ? h.height / 2 + v / 2 - M / 2 - O : -h.height / 2 - v / 2 - M / 2 - O})`
    ), j.attr("style", `color: ${y.get("stroke") ?? m};`);
  }
  return u.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${d3 ? -P / 2 : P / 2 - h.height})`
  ), $.attr(
    "transform",
    `translate(0,${d3 ? h.height / 2 + v / 2 : -h.height / 2 - v / 2})`
  ), J(t, A), t.intersect = function(j) {
    if (D.info("iconSquare intersect", t, j), !t.label)
      return X.rect(t, j);
    const N = t.x ?? 0, F = t.y ?? 0, M = t.height ?? 0;
    let B = [];
    return d3 ? B = [
      { x: N - h.width / 2, y: F - M / 2 },
      { x: N + h.width / 2, y: F - M / 2 },
      { x: N + h.width / 2, y: F - M / 2 + h.height + v },
      { x: N + g / 2, y: F - M / 2 + h.height + v },
      { x: N + g / 2, y: F + M / 2 },
      { x: N - g / 2, y: F + M / 2 },
      { x: N - g / 2, y: F - M / 2 + h.height + v },
      { x: N - h.width / 2, y: F - M / 2 + h.height + v }
    ] : B = [
      { x: N - g / 2, y: F - M / 2 },
      { x: N + g / 2, y: F - M / 2 },
      { x: N + g / 2, y: F - M / 2 + f },
      { x: N + h.width / 2, y: F - M / 2 + f },
      { x: N + h.width / 2 / 2, y: F + M / 2 },
      { x: N - h.width / 2, y: F + M / 2 },
      { x: N - h.width / 2, y: F - M / 2 + f },
      { x: N - g / 2, y: F - M / 2 + f }
    ], X.polygon(t, B, j);
  }, c;
}
p(Tf, "icon");
async function Bf(e8, t, { config: { themeVariables: r3, flowchart: i } }) {
  const { labelStyles: a } = tt(t);
  t.labelStyle = a;
  const n = t.assetHeight ?? 48, o = t.assetWidth ?? 48, s = Math.max(n, o), l = i == null ? void 0 : i.wrappingWidth;
  t.width = Math.max(s, l ?? 0);
  const { shapeSvg: c, bbox: h, label: u } = await ot(e8, t, "icon-shape default"), d3 = 20, f = t.label ? 8 : 0, g = t.pos === "t", { nodeBorder: m, mainBkg: y } = r3, { stylesMap: x } = Gr(t), b = Z.svg(c), v = Q(t, {});
  t.look !== "handDrawn" && (v.roughness = 0, v.fillStyle = "solid");
  const S = x.get("fill");
  v.stroke = S ?? y;
  const _ = c.append("g");
  t.icon && _.html(
    `<g>${await Ka(t.icon, {
      height: s,
      width: s,
      fallbackPrefix: ""
    })}</g>`
  );
  const C = _.node().getBBox(), k = C.width, P = C.height, H = C.x, $ = C.y, A = Math.max(k, P) * Math.SQRT2 + d3 * 2, j = b.circle(0, 0, A, v), N = Math.max(A, h.width), F = A + h.height + f, M = b.rectangle(-N / 2, -F / 2, N, F, {
    ...v,
    fill: "transparent",
    stroke: "none"
  }), B = c.insert(() => j, ":first-child"), O = c.insert(() => M);
  return _.attr(
    "transform",
    `translate(${-k / 2 - H},${g ? h.height / 2 + f / 2 - P / 2 - $ : -h.height / 2 - f / 2 - P / 2 - $})`
  ), _.attr("style", `color: ${x.get("stroke") ?? m};`), u.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${g ? -F / 2 : F / 2 - h.height})`
  ), B.attr(
    "transform",
    `translate(0,${g ? h.height / 2 + f / 2 : -h.height / 2 - f / 2})`
  ), J(t, O), t.intersect = function(L) {
    return D.info("iconSquare intersect", t, L), X.rect(t, L);
  }, c;
}
p(Bf, "iconCircle");
async function Lf(e8, t, { config: { themeVariables: r3, flowchart: i } }) {
  const { labelStyles: a } = tt(t);
  t.labelStyle = a;
  const n = t.assetHeight ?? 48, o = t.assetWidth ?? 48, s = Math.max(n, o), l = i == null ? void 0 : i.wrappingWidth;
  t.width = Math.max(s, l ?? 0);
  const { shapeSvg: c, bbox: h, halfPadding: u, label: d3 } = await ot(
    e8,
    t,
    "icon-shape default"
  ), f = t.pos === "t", g = s + u * 2, m = s + u * 2, { nodeBorder: y, mainBkg: x } = r3, { stylesMap: b } = Gr(t), v = -m / 2, S = -g / 2, _ = t.label ? 8 : 0, C = Z.svg(c), k = Q(t, {});
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  const P = b.get("fill");
  k.stroke = P ?? x;
  const H = C.path(Oe(v, S, m, g, 5), k), $ = Math.max(m, h.width), A = g + h.height + _, j = C.rectangle(-$ / 2, -A / 2, $, A, {
    ...k,
    fill: "transparent",
    stroke: "none"
  }), N = c.insert(() => H, ":first-child").attr("class", "icon-shape2"), F = c.insert(() => j);
  if (t.icon) {
    const M = c.append("g");
    M.html(
      `<g>${await Ka(t.icon, {
        height: s,
        width: s,
        fallbackPrefix: ""
      })}</g>`
    );
    const B = M.node().getBBox(), O = B.width, L = B.height, E = B.x, R = B.y;
    M.attr(
      "transform",
      `translate(${-O / 2 - E},${f ? h.height / 2 + _ / 2 - L / 2 - R : -h.height / 2 - _ / 2 - L / 2 - R})`
    ), M.attr("style", `color: ${b.get("stroke") ?? y};`);
  }
  return d3.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${f ? -A / 2 : A / 2 - h.height})`
  ), N.attr(
    "transform",
    `translate(0,${f ? h.height / 2 + _ / 2 : -h.height / 2 - _ / 2})`
  ), J(t, F), t.intersect = function(M) {
    if (D.info("iconSquare intersect", t, M), !t.label)
      return X.rect(t, M);
    const B = t.x ?? 0, O = t.y ?? 0, L = t.height ?? 0;
    let E = [];
    return f ? E = [
      { x: B - h.width / 2, y: O - L / 2 },
      { x: B + h.width / 2, y: O - L / 2 },
      { x: B + h.width / 2, y: O - L / 2 + h.height + _ },
      { x: B + m / 2, y: O - L / 2 + h.height + _ },
      { x: B + m / 2, y: O + L / 2 },
      { x: B - m / 2, y: O + L / 2 },
      { x: B - m / 2, y: O - L / 2 + h.height + _ },
      { x: B - h.width / 2, y: O - L / 2 + h.height + _ }
    ] : E = [
      { x: B - m / 2, y: O - L / 2 },
      { x: B + m / 2, y: O - L / 2 },
      { x: B + m / 2, y: O - L / 2 + g },
      { x: B + h.width / 2, y: O - L / 2 + g },
      { x: B + h.width / 2 / 2, y: O + L / 2 },
      { x: B - h.width / 2, y: O + L / 2 },
      { x: B - h.width / 2, y: O - L / 2 + g },
      { x: B - m / 2, y: O - L / 2 + g }
    ], X.polygon(t, E, M);
  }, c;
}
p(Lf, "iconRounded");
async function Af(e8, t, { config: { themeVariables: r3, flowchart: i } }) {
  const { labelStyles: a } = tt(t);
  t.labelStyle = a;
  const n = t.assetHeight ?? 48, o = t.assetWidth ?? 48, s = Math.max(n, o), l = i == null ? void 0 : i.wrappingWidth;
  t.width = Math.max(s, l ?? 0);
  const { shapeSvg: c, bbox: h, halfPadding: u, label: d3 } = await ot(
    e8,
    t,
    "icon-shape default"
  ), f = t.pos === "t", g = s + u * 2, m = s + u * 2, { nodeBorder: y, mainBkg: x } = r3, { stylesMap: b } = Gr(t), v = -m / 2, S = -g / 2, _ = t.label ? 8 : 0, C = Z.svg(c), k = Q(t, {});
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  const P = b.get("fill");
  k.stroke = P ?? x;
  const H = C.path(Oe(v, S, m, g, 0.1), k), $ = Math.max(m, h.width), A = g + h.height + _, j = C.rectangle(-$ / 2, -A / 2, $, A, {
    ...k,
    fill: "transparent",
    stroke: "none"
  }), N = c.insert(() => H, ":first-child"), F = c.insert(() => j);
  if (t.icon) {
    const M = c.append("g");
    M.html(
      `<g>${await Ka(t.icon, {
        height: s,
        width: s,
        fallbackPrefix: ""
      })}</g>`
    );
    const B = M.node().getBBox(), O = B.width, L = B.height, E = B.x, R = B.y;
    M.attr(
      "transform",
      `translate(${-O / 2 - E},${f ? h.height / 2 + _ / 2 - L / 2 - R : -h.height / 2 - _ / 2 - L / 2 - R})`
    ), M.attr("style", `color: ${b.get("stroke") ?? y};`);
  }
  return d3.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${f ? -A / 2 : A / 2 - h.height})`
  ), N.attr(
    "transform",
    `translate(0,${f ? h.height / 2 + _ / 2 : -h.height / 2 - _ / 2})`
  ), J(t, F), t.intersect = function(M) {
    if (D.info("iconSquare intersect", t, M), !t.label)
      return X.rect(t, M);
    const B = t.x ?? 0, O = t.y ?? 0, L = t.height ?? 0;
    let E = [];
    return f ? E = [
      { x: B - h.width / 2, y: O - L / 2 },
      { x: B + h.width / 2, y: O - L / 2 },
      { x: B + h.width / 2, y: O - L / 2 + h.height + _ },
      { x: B + m / 2, y: O - L / 2 + h.height + _ },
      { x: B + m / 2, y: O + L / 2 },
      { x: B - m / 2, y: O + L / 2 },
      { x: B - m / 2, y: O - L / 2 + h.height + _ },
      { x: B - h.width / 2, y: O - L / 2 + h.height + _ }
    ] : E = [
      { x: B - m / 2, y: O - L / 2 },
      { x: B + m / 2, y: O - L / 2 },
      { x: B + m / 2, y: O - L / 2 + g },
      { x: B + h.width / 2, y: O - L / 2 + g },
      { x: B + h.width / 2 / 2, y: O + L / 2 },
      { x: B - h.width / 2, y: O + L / 2 },
      { x: B - h.width / 2, y: O - L / 2 + g },
      { x: B - m / 2, y: O - L / 2 + g }
    ], X.polygon(t, E, M);
  }, c;
}
p(Af, "iconSquare");
async function Mf(e8, t, { config: { flowchart: r3 } }) {
  const i = new Image();
  i.src = (t == null ? void 0 : t.img) ?? "", await i.decode();
  const a = Number(i.naturalWidth.toString().replace("px", "")), n = Number(i.naturalHeight.toString().replace("px", ""));
  t.imageAspectRatio = a / n;
  const { labelStyles: o } = tt(t);
  t.labelStyle = o;
  const s = r3 == null ? void 0 : r3.wrappingWidth;
  t.defaultWidth = r3 == null ? void 0 : r3.wrappingWidth;
  const l = Math.max(
    t.label ? s ?? 0 : 0,
    (t == null ? void 0 : t.assetWidth) ?? a
  ), c = t.constraint === "on" && t != null && t.assetHeight ? t.assetHeight * t.imageAspectRatio : l, h = t.constraint === "on" ? c / t.imageAspectRatio : (t == null ? void 0 : t.assetHeight) ?? n;
  t.width = Math.max(c, s ?? 0);
  const { shapeSvg: u, bbox: d3, label: f } = await ot(e8, t, "image-shape default"), g = t.pos === "t", m = -c / 2, y = -h / 2, x = t.label ? 8 : 0, b = Z.svg(u), v = Q(t, {});
  t.look !== "handDrawn" && (v.roughness = 0, v.fillStyle = "solid");
  const S = b.rectangle(m, y, c, h, v), _ = Math.max(c, d3.width), C = h + d3.height + x, k = b.rectangle(-_ / 2, -C / 2, _, C, {
    ...v,
    fill: "none",
    stroke: "none"
  }), P = u.insert(() => S, ":first-child"), H = u.insert(() => k);
  if (t.img) {
    const $ = u.append("image");
    $.attr("href", t.img), $.attr("width", c), $.attr("height", h), $.attr("preserveAspectRatio", "none"), $.attr(
      "transform",
      `translate(${-c / 2},${g ? C / 2 - h : -C / 2})`
    );
  }
  return f.attr(
    "transform",
    `translate(${-d3.width / 2 - (d3.x - (d3.left ?? 0))},${g ? -h / 2 - d3.height / 2 - x / 2 : h / 2 - d3.height / 2 + x / 2})`
  ), P.attr(
    "transform",
    `translate(0,${g ? d3.height / 2 + x / 2 : -d3.height / 2 - x / 2})`
  ), J(t, H), t.intersect = function($) {
    if (D.info("iconSquare intersect", t, $), !t.label)
      return X.rect(t, $);
    const A = t.x ?? 0, j = t.y ?? 0, N = t.height ?? 0;
    let F = [];
    return g ? F = [
      { x: A - d3.width / 2, y: j - N / 2 },
      { x: A + d3.width / 2, y: j - N / 2 },
      { x: A + d3.width / 2, y: j - N / 2 + d3.height + x },
      { x: A + c / 2, y: j - N / 2 + d3.height + x },
      { x: A + c / 2, y: j + N / 2 },
      { x: A - c / 2, y: j + N / 2 },
      { x: A - c / 2, y: j - N / 2 + d3.height + x },
      { x: A - d3.width / 2, y: j - N / 2 + d3.height + x }
    ] : F = [
      { x: A - c / 2, y: j - N / 2 },
      { x: A + c / 2, y: j - N / 2 },
      { x: A + c / 2, y: j - N / 2 + h },
      { x: A + d3.width / 2, y: j - N / 2 + h },
      { x: A + d3.width / 2 / 2, y: j + N / 2 },
      { x: A - d3.width / 2, y: j + N / 2 },
      { x: A - d3.width / 2, y: j - N / 2 + h },
      { x: A - c / 2, y: j - N / 2 + h }
    ], X.polygon(t, F, $);
  }, u;
}
p(Mf, "imageSquare");
async function Ef(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n } = await ot(e8, t, nt(t)), o = Math.max(n.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), s = Math.max(n.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), l = [
    { x: 0, y: 0 },
    { x: o, y: 0 },
    { x: o + 3 * s / 6, y: -s },
    { x: -3 * s / 6, y: -s }
  ];
  let c;
  const { cssStyles: h } = t;
  if (t.look === "handDrawn") {
    const u = Z.svg(a), d3 = Q(t, {}), f = ht(l), g = u.path(f, d3);
    c = a.insert(() => g, ":first-child").attr("transform", `translate(${-o / 2}, ${s / 2})`), h && c.attr("style", h);
  } else
    c = $e(a, o, s, l);
  return i && c.attr("style", i), t.width = o, t.height = s, J(t, c), t.intersect = function(u) {
    return X.polygon(t, l, u);
  }, a;
}
p(Ef, "inv_trapezoid");
async function Ni(e8, t, r3) {
  const { labelStyles: i, nodeStyles: a } = tt(t);
  t.labelStyle = i;
  const { shapeSvg: n, bbox: o } = await ot(e8, t, nt(t)), s = Math.max(o.width + r3.labelPaddingX * 2, (t == null ? void 0 : t.width) || 0), l = Math.max(o.height + r3.labelPaddingY * 2, (t == null ? void 0 : t.height) || 0), c = -s / 2, h = -l / 2;
  let u, { rx: d3, ry: f } = t;
  const { cssStyles: g } = t;
  if (r3 != null && r3.rx && r3.ry && (d3 = r3.rx, f = r3.ry), t.look === "handDrawn") {
    const m = Z.svg(n), y = Q(t, {}), x = d3 || f ? m.path(Oe(c, h, s, l, d3 || 0), y) : m.rectangle(c, h, s, l, y);
    u = n.insert(() => x, ":first-child"), u.attr("class", "basic label-container").attr("style", Ut(g));
  } else
    u = n.insert("rect", ":first-child"), u.attr("class", "basic label-container").attr("style", a).attr("rx", Ut(d3)).attr("ry", Ut(f)).attr("x", c).attr("y", h).attr("width", s).attr("height", l);
  return J(t, u), t.intersect = function(m) {
    return X.rect(t, m);
  }, n;
}
p(Ni, "drawRect");
async function Ff(e8, t) {
  const { shapeSvg: r3, bbox: i, label: a } = await ot(e8, t, "label"), n = r3.insert("rect", ":first-child");
  return n.attr("width", 0.1).attr("height", 0.1), r3.attr("class", "label edgeLabel"), a.attr(
    "transform",
    `translate(${-(i.width / 2) - (i.x - (i.left ?? 0))}, ${-(i.height / 2) - (i.y - (i.top ?? 0))})`
  ), J(t, n), t.intersect = function(l) {
    return X.rect(t, l);
  }, r3;
}
p(Ff, "labelRect");
async function Of(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n } = await ot(e8, t, nt(t)), o = Math.max(n.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), s = Math.max(n.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), l = [
    { x: 0, y: 0 },
    { x: o + 3 * s / 6, y: 0 },
    { x: o, y: -s },
    { x: -(3 * s) / 6, y: -s }
  ];
  let c;
  const { cssStyles: h } = t;
  if (t.look === "handDrawn") {
    const u = Z.svg(a), d3 = Q(t, {}), f = ht(l), g = u.path(f, d3);
    c = a.insert(() => g, ":first-child").attr("transform", `translate(${-o / 2}, ${s / 2})`), h && c.attr("style", h);
  } else
    c = $e(a, o, s, l);
  return i && c.attr("style", i), t.width = o, t.height = s, J(t, c), t.intersect = function(u) {
    return X.polygon(t, l, u);
  }, a;
}
p(Of, "lean_left");
async function $f(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n } = await ot(e8, t, nt(t)), o = Math.max(n.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), s = Math.max(n.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), l = [
    { x: -3 * s / 6, y: 0 },
    { x: o, y: 0 },
    { x: o + 3 * s / 6, y: -s },
    { x: 0, y: -s }
  ];
  let c;
  const { cssStyles: h } = t;
  if (t.look === "handDrawn") {
    const u = Z.svg(a), d3 = Q(t, {}), f = ht(l), g = u.path(f, d3);
    c = a.insert(() => g, ":first-child").attr("transform", `translate(${-o / 2}, ${s / 2})`), h && c.attr("style", h);
  } else
    c = $e(a, o, s, l);
  return i && c.attr("style", i), t.width = o, t.height = s, J(t, c), t.intersect = function(u) {
    return X.polygon(t, l, u);
  }, a;
}
p($f, "lean_right");
function Df(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.label = "", t.labelStyle = r3;
  const a = e8.insert("g").attr("class", nt(t)).attr("id", t.domId ?? t.id), { cssStyles: n } = t, o = Math.max(35, (t == null ? void 0 : t.width) ?? 0), s = Math.max(35, (t == null ? void 0 : t.height) ?? 0), l = 7, c = [
    { x: o, y: 0 },
    { x: 0, y: s + l / 2 },
    { x: o - 2 * l, y: s + l / 2 },
    { x: 0, y: 2 * s },
    { x: o, y: s - l / 2 },
    { x: 2 * l, y: s - l / 2 }
  ], h = Z.svg(a), u = Q(t, {});
  t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
  const d3 = ht(c), f = h.path(d3, u), g = a.insert(() => f, ":first-child");
  return n && t.look !== "handDrawn" && g.selectAll("path").attr("style", n), i && t.look !== "handDrawn" && g.selectAll("path").attr("style", i), g.attr("transform", `translate(-${o / 2},${-s})`), J(t, g), t.intersect = function(m) {
    return D.info("lightningBolt intersect", t, m), X.polygon(t, c, m);
  }, a;
}
p(Df, "lightningBolt");
var lC = /* @__PURE__ */ p((e8, t, r3, i, a, n, o) => [
  `M${e8},${t + n}`,
  `a${a},${n} 0,0,0 ${r3},0`,
  `a${a},${n} 0,0,0 ${-r3},0`,
  `l0,${i}`,
  `a${a},${n} 0,0,0 ${r3},0`,
  `l0,${-i}`,
  `M${e8},${t + n + o}`,
  `a${a},${n} 0,0,0 ${r3},0`
].join(" "), "createCylinderPathD"), cC = /* @__PURE__ */ p((e8, t, r3, i, a, n, o) => [
  `M${e8},${t + n}`,
  `M${e8 + r3},${t + n}`,
  `a${a},${n} 0,0,0 ${-r3},0`,
  `l0,${i}`,
  `a${a},${n} 0,0,0 ${r3},0`,
  `l0,${-i}`,
  `M${e8},${t + n + o}`,
  `a${a},${n} 0,0,0 ${r3},0`
].join(" "), "createOuterCylinderPathD"), hC = /* @__PURE__ */ p((e8, t, r3, i, a, n) => [`M${e8 - r3 / 2},${-i / 2}`, `a${a},${n} 0,0,0 ${r3},0`].join(" "), "createInnerCylinderPathD");
async function Rf(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n, label: o } = await ot(e8, t, nt(t)), s = Math.max(n.width + (t.padding ?? 0), t.width ?? 0), l = s / 2, c = l / (2.5 + s / 50), h = Math.max(n.height + c + (t.padding ?? 0), t.height ?? 0), u = h * 0.1;
  let d3;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const g = Z.svg(a), m = cC(0, 0, s, h, l, c, u), y = hC(0, c, s, h, l, c), x = Q(t, {}), b = g.path(m, x), v = g.path(y, x);
    a.insert(() => v, ":first-child").attr("class", "line"), d3 = a.insert(() => b, ":first-child"), d3.attr("class", "basic label-container"), f && d3.attr("style", f);
  } else {
    const g = lC(0, 0, s, h, l, c, u);
    d3 = a.insert("path", ":first-child").attr("d", g).attr("class", "basic label-container").attr("style", Ut(f)).attr("style", i);
  }
  return d3.attr("label-offset-y", c), d3.attr("transform", `translate(${-s / 2}, ${-(h / 2 + c)})`), J(t, d3), o.attr(
    "transform",
    `translate(${-(n.width / 2) - (n.x - (n.left ?? 0))}, ${-(n.height / 2) + c - (n.y - (n.top ?? 0))})`
  ), t.intersect = function(g) {
    const m = X.rect(t, g), y = m.x - (t.x ?? 0);
    if (l != 0 && (Math.abs(y) < (t.width ?? 0) / 2 || Math.abs(y) == (t.width ?? 0) / 2 && Math.abs(m.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - c)) {
      let x = c * c * (1 - y * y / (l * l));
      x > 0 && (x = Math.sqrt(x)), x = c - x, g.y - (t.y ?? 0) > 0 && (x = -x), m.y += x;
    }
    return m;
  }, a;
}
p(Rf, "linedCylinder");
async function If(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n, label: o } = await ot(e8, t, nt(t)), s = Math.max(n.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(n.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = l / 4, h = l + c, { cssStyles: u } = t, d3 = Z.svg(a), f = Q(t, {});
  t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
  const g = [
    { x: -s / 2 - s / 2 * 0.1, y: -h / 2 },
    { x: -s / 2 - s / 2 * 0.1, y: h / 2 },
    ...We(
      -s / 2 - s / 2 * 0.1,
      h / 2,
      s / 2 + s / 2 * 0.1,
      h / 2,
      c,
      0.8
    ),
    { x: s / 2 + s / 2 * 0.1, y: -h / 2 },
    { x: -s / 2 - s / 2 * 0.1, y: -h / 2 },
    { x: -s / 2, y: -h / 2 },
    { x: -s / 2, y: h / 2 * 1.1 },
    { x: -s / 2, y: -h / 2 }
  ], m = d3.polygon(
    g.map((x) => [x.x, x.y]),
    f
  ), y = a.insert(() => m, ":first-child");
  return y.attr("class", "basic label-container"), u && t.look !== "handDrawn" && y.selectAll("path").attr("style", u), i && t.look !== "handDrawn" && y.selectAll("path").attr("style", i), y.attr("transform", `translate(0,${-c / 2})`), o.attr(
    "transform",
    `translate(${-s / 2 + (t.padding ?? 0) + s / 2 * 0.1 / 2 - (n.x - (n.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c / 2 - (n.y - (n.top ?? 0))})`
  ), J(t, y), t.intersect = function(x) {
    return X.polygon(t, g, x);
  }, a;
}
p(If, "linedWaveEdgedRect");
async function Pf(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n, label: o } = await ot(e8, t, nt(t)), s = Math.max(n.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(n.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = 5, h = -s / 2, u = -l / 2, { cssStyles: d3 } = t, f = Z.svg(a), g = Q(t, {}), m = [
    { x: h - c, y: u + c },
    { x: h - c, y: u + l + c },
    { x: h + s - c, y: u + l + c },
    { x: h + s - c, y: u + l },
    { x: h + s, y: u + l },
    { x: h + s, y: u + l - c },
    { x: h + s + c, y: u + l - c },
    { x: h + s + c, y: u - c },
    { x: h + c, y: u - c },
    { x: h + c, y: u },
    { x: h, y: u },
    { x: h, y: u + c }
  ], y = [
    { x: h, y: u + c },
    { x: h + s - c, y: u + c },
    { x: h + s - c, y: u + l },
    { x: h + s, y: u + l },
    { x: h + s, y: u },
    { x: h, y: u }
  ];
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const x = ht(m), b = f.path(x, g), v = ht(y), S = f.path(v, { ...g, fill: "none" }), _ = a.insert(() => S, ":first-child");
  return _.insert(() => b, ":first-child"), _.attr("class", "basic label-container"), d3 && t.look !== "handDrawn" && _.selectAll("path").attr("style", d3), i && t.look !== "handDrawn" && _.selectAll("path").attr("style", i), o.attr(
    "transform",
    `translate(${-(n.width / 2) - c - (n.x - (n.left ?? 0))}, ${-(n.height / 2) + c - (n.y - (n.top ?? 0))})`
  ), J(t, _), t.intersect = function(C) {
    return X.polygon(t, m, C);
  }, a;
}
p(Pf, "multiRect");
async function Nf(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n, label: o } = await ot(e8, t, nt(t)), s = Math.max(n.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(n.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = l / 4, h = l + c, u = -s / 2, d3 = -h / 2, f = 5, { cssStyles: g } = t, m = We(
    u - f,
    d3 + h + f,
    u + s - f,
    d3 + h + f,
    c,
    0.8
  ), y = m == null ? void 0 : m[m.length - 1], x = [
    { x: u - f, y: d3 + f },
    { x: u - f, y: d3 + h + f },
    ...m,
    { x: u + s - f, y: y.y - f },
    { x: u + s, y: y.y - f },
    { x: u + s, y: y.y - 2 * f },
    { x: u + s + f, y: y.y - 2 * f },
    { x: u + s + f, y: d3 - f },
    { x: u + f, y: d3 - f },
    { x: u + f, y: d3 },
    { x: u, y: d3 },
    { x: u, y: d3 + f }
  ], b = [
    { x: u, y: d3 + f },
    { x: u + s - f, y: d3 + f },
    { x: u + s - f, y: y.y - f },
    { x: u + s, y: y.y - f },
    { x: u + s, y: d3 },
    { x: u, y: d3 }
  ], v = Z.svg(a), S = Q(t, {});
  t.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
  const _ = ht(x), C = v.path(_, S), k = ht(b), P = v.path(k, S), H = a.insert(() => C, ":first-child");
  return H.insert(() => P), H.attr("class", "basic label-container"), g && t.look !== "handDrawn" && H.selectAll("path").attr("style", g), i && t.look !== "handDrawn" && H.selectAll("path").attr("style", i), H.attr("transform", `translate(0,${-c / 2})`), o.attr(
    "transform",
    `translate(${-(n.width / 2) - f - (n.x - (n.left ?? 0))}, ${-(n.height / 2) + f - c / 2 - (n.y - (n.top ?? 0))})`
  ), J(t, H), t.intersect = function($) {
    return X.polygon(t, x, $);
  }, a;
}
p(Nf, "multiWaveEdgedRectangle");
async function zf(e8, t, { config: { themeVariables: r3 } }) {
  var x;
  const { labelStyles: i, nodeStyles: a } = tt(t);
  t.labelStyle = i, t.useHtmlLabels || ((x = Jt().flowchart) == null ? void 0 : x.htmlLabels) !== false || (t.centerLabel = true);
  const { shapeSvg: o, bbox: s } = await ot(e8, t, nt(t)), l = Math.max(s.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(s.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = -l / 2, u = -c / 2, { cssStyles: d3 } = t, f = Z.svg(o), g = Q(t, {
    fill: r3.noteBkgColor,
    stroke: r3.noteBorderColor
  });
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = f.rectangle(h, u, l, c, g), y = o.insert(() => m, ":first-child");
  return y.attr("class", "basic label-container"), d3 && t.look !== "handDrawn" && y.selectAll("path").attr("style", d3), a && t.look !== "handDrawn" && y.selectAll("path").attr("style", a), J(t, y), t.intersect = function(b) {
    return X.rect(t, b);
  }, o;
}
p(zf, "note");
var uC = /* @__PURE__ */ p((e8, t, r3) => [
  `M${e8 + r3 / 2},${t}`,
  `L${e8 + r3},${t - r3 / 2}`,
  `L${e8 + r3 / 2},${t - r3}`,
  `L${e8},${t - r3 / 2}`,
  "Z"
].join(" "), "createDecisionBoxPathD");
async function Wf(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n } = await ot(e8, t, nt(t)), o = n.width + t.padding, s = n.height + t.padding, l = o + s, c = [
    { x: l / 2, y: 0 },
    { x: l, y: -l / 2 },
    { x: l / 2, y: -l },
    { x: 0, y: -l / 2 }
  ];
  let h;
  const { cssStyles: u } = t;
  if (t.look === "handDrawn") {
    const d3 = Z.svg(a), f = Q(t, {}), g = uC(0, 0, l), m = d3.path(g, f);
    h = a.insert(() => m, ":first-child").attr("transform", `translate(${-l / 2}, ${l / 2})`), u && h.attr("style", u);
  } else
    h = $e(a, l, l, c);
  return i && h.attr("style", i), J(t, h), t.intersect = function(d3) {
    return D.debug(
      `APA12 Intersect called SPLIT
point:`,
      d3,
      `
node:
`,
      t,
      `
res:`,
      X.polygon(t, c, d3)
    ), X.polygon(t, c, d3);
  }, a;
}
p(Wf, "question");
async function qf(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n, label: o } = await ot(e8, t, nt(t)), s = Math.max(n.width + (t.padding ?? 0), (t == null ? void 0 : t.width) ?? 0), l = Math.max(n.height + (t.padding ?? 0), (t == null ? void 0 : t.height) ?? 0), c = -s / 2, h = -l / 2, u = h / 2, d3 = [
    { x: c + u, y: h },
    { x: c, y: 0 },
    { x: c + u, y: -h },
    { x: -c, y: -h },
    { x: -c, y: h }
  ], { cssStyles: f } = t, g = Z.svg(a), m = Q(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = ht(d3), x = g.path(y, m), b = a.insert(() => x, ":first-child");
  return b.attr("class", "basic label-container"), f && t.look !== "handDrawn" && b.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && b.selectAll("path").attr("style", i), b.attr("transform", `translate(${-u / 2},0)`), o.attr(
    "transform",
    `translate(${-u / 2 - n.width / 2 - (n.x - (n.left ?? 0))}, ${-(n.height / 2) - (n.y - (n.top ?? 0))})`
  ), J(t, b), t.intersect = function(v) {
    return X.polygon(t, d3, v);
  }, a;
}
p(qf, "rect_left_inv_arrow");
async function Hf(e8, t) {
  var P, H;
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  let a;
  t.cssClasses ? a = "node " + t.cssClasses : a = "node default";
  const n = e8.insert("g").attr("class", a).attr("id", t.domId || t.id), o = n.insert("g"), s = n.insert("g").attr("class", "label").attr("style", i), l = t.description, c = t.label, h = s.node().appendChild(await tr(c, t.labelStyle, true, true));
  let u = { width: 0, height: 0 };
  if (At((H = (P = dt()) == null ? void 0 : P.flowchart) == null ? void 0 : H.htmlLabels)) {
    const $ = h.children[0], A = Li$1(h);
    u = $.getBoundingClientRect(), A.attr("width", u.width), A.attr("height", u.height);
  }
  D.info("Text 2", l);
  const d3 = l || [], f = h.getBBox(), g = s.node().appendChild(
    await tr(
      d3.join ? d3.join("<br/>") : d3,
      t.labelStyle,
      true,
      true
    )
  ), m = g.children[0], y = Li$1(g);
  u = m.getBoundingClientRect(), y.attr("width", u.width), y.attr("height", u.height);
  const x = (t.padding || 0) / 2;
  Li$1(g).attr(
    "transform",
    "translate( " + (u.width > f.width ? 0 : (f.width - u.width) / 2) + ", " + (f.height + x + 5) + ")"
  ), Li$1(h).attr(
    "transform",
    "translate( " + (u.width < f.width ? 0 : -(f.width - u.width) / 2) + ", 0)"
  ), u = s.node().getBBox(), s.attr(
    "transform",
    "translate(" + -u.width / 2 + ", " + (-u.height / 2 - x + 3) + ")"
  );
  const b = u.width + (t.padding || 0), v = u.height + (t.padding || 0), S = -u.width / 2 - x, _ = -u.height / 2 - x;
  let C, k;
  if (t.look === "handDrawn") {
    const $ = Z.svg(n), A = Q(t, {}), j = $.path(
      Oe(S, _, b, v, t.rx || 0),
      A
    ), N = $.line(
      -u.width / 2 - x,
      -u.height / 2 - x + f.height + x,
      u.width / 2 + x,
      -u.height / 2 - x + f.height + x,
      A
    );
    k = n.insert(() => (D.debug("Rough node insert CXC", j), N), ":first-child"), C = n.insert(() => (D.debug("Rough node insert CXC", j), j), ":first-child");
  } else
    C = o.insert("rect", ":first-child"), k = o.insert("line"), C.attr("class", "outer title-state").attr("style", i).attr("x", -u.width / 2 - x).attr("y", -u.height / 2 - x).attr("width", u.width + (t.padding || 0)).attr("height", u.height + (t.padding || 0)), k.attr("class", "divider").attr("x1", -u.width / 2 - x).attr("x2", u.width / 2 + x).attr("y1", -u.height / 2 - x + f.height + x).attr("y2", -u.height / 2 - x + f.height + x);
  return J(t, C), t.intersect = function($) {
    return X.rect(t, $);
  }, n;
}
p(Hf, "rectWithTitle");
async function jf(e8, t) {
  const r3 = {
    rx: 5,
    ry: 5,
    labelPaddingX: ((t == null ? void 0 : t.padding) || 0) * 1,
    labelPaddingY: ((t == null ? void 0 : t.padding) || 0) * 1
  };
  return Ni(e8, t, r3);
}
p(jf, "roundedRect");
async function Yf(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n, label: o } = await ot(e8, t, nt(t)), s = (t == null ? void 0 : t.padding) ?? 0, l = Math.max(n.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(n.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = -n.width / 2 - s, u = -n.height / 2 - s, { cssStyles: d3 } = t, f = Z.svg(a), g = Q(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = [
    { x: h, y: u },
    { x: h + l + 8, y: u },
    { x: h + l + 8, y: u + c },
    { x: h - 8, y: u + c },
    { x: h - 8, y: u },
    { x: h, y: u },
    { x: h, y: u + c }
  ], y = f.polygon(
    m.map((b) => [b.x, b.y]),
    g
  ), x = a.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container").attr("style", Ut(d3)), i && t.look !== "handDrawn" && x.selectAll("path").attr("style", i), d3 && t.look !== "handDrawn" && x.selectAll("path").attr("style", i), o.attr(
    "transform",
    `translate(${-l / 2 + 4 + (t.padding ?? 0) - (n.x - (n.left ?? 0))},${-c / 2 + (t.padding ?? 0) - (n.y - (n.top ?? 0))})`
  ), J(t, x), t.intersect = function(b) {
    return X.rect(t, b);
  }, a;
}
p(Yf, "shadedProcess");
async function Uf(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n, label: o } = await ot(e8, t, nt(t)), s = Math.max(n.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(n.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = -s / 2, h = -l / 2, { cssStyles: u } = t, d3 = Z.svg(a), f = Q(t, {});
  t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
  const g = [
    { x: c, y: h },
    { x: c, y: h + l },
    { x: c + s, y: h + l },
    { x: c + s, y: h - l / 2 }
  ], m = ht(g), y = d3.path(m, f), x = a.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container"), u && t.look !== "handDrawn" && x.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && x.selectChildren("path").attr("style", i), x.attr("transform", `translate(0, ${l / 4})`), o.attr(
    "transform",
    `translate(${-s / 2 + (t.padding ?? 0) - (n.x - (n.left ?? 0))}, ${-l / 4 + (t.padding ?? 0) - (n.y - (n.top ?? 0))})`
  ), J(t, x), t.intersect = function(b) {
    return X.polygon(t, g, b);
  }, a;
}
p(Uf, "slopedRect");
async function Gf(e8, t) {
  const r3 = {
    rx: 0,
    ry: 0,
    labelPaddingX: ((t == null ? void 0 : t.padding) || 0) * 2,
    labelPaddingY: ((t == null ? void 0 : t.padding) || 0) * 1
  };
  return Ni(e8, t, r3);
}
p(Gf, "squareRect");
async function Xf(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n } = await ot(e8, t, nt(t)), o = n.height + t.padding, s = n.width + o / 4 + t.padding;
  let l;
  const { cssStyles: c } = t;
  if (t.look === "handDrawn") {
    const h = Z.svg(a), u = Q(t, {}), d3 = Oe(-s / 2, -o / 2, s, o, o / 2), f = h.path(d3, u);
    l = a.insert(() => f, ":first-child"), l.attr("class", "basic label-container").attr("style", Ut(c));
  } else
    l = a.insert("rect", ":first-child"), l.attr("class", "basic label-container").attr("style", i).attr("rx", o / 2).attr("ry", o / 2).attr("x", -s / 2).attr("y", -o / 2).attr("width", s).attr("height", o);
  return J(t, l), t.intersect = function(h) {
    return X.rect(t, h);
  }, a;
}
p(Xf, "stadium");
async function Vf(e8, t) {
  return Ni(e8, t, {
    rx: 5,
    ry: 5
  });
}
p(Vf, "state");
function Zf(e8, t, { config: { themeVariables: r3 } }) {
  const { labelStyles: i, nodeStyles: a } = tt(t);
  t.labelStyle = i;
  const { cssStyles: n } = t, { lineColor: o, stateBorder: s, nodeBorder: l } = r3, c = e8.insert("g").attr("class", "node default").attr("id", t.domId || t.id), h = Z.svg(c), u = Q(t, {});
  t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
  const d3 = h.circle(0, 0, 14, {
    ...u,
    stroke: o,
    strokeWidth: 2
  }), f = s ?? l, g = h.circle(0, 0, 5, {
    ...u,
    fill: f,
    stroke: f,
    strokeWidth: 2,
    fillStyle: "solid"
  }), m = c.insert(() => d3, ":first-child");
  return m.insert(() => g), n && m.selectAll("path").attr("style", n), a && m.selectAll("path").attr("style", a), J(t, m), t.intersect = function(y) {
    return X.circle(t, 7, y);
  }, c;
}
p(Zf, "stateEnd");
function Kf(e8, t, { config: { themeVariables: r3 } }) {
  const { lineColor: i } = r3, a = e8.insert("g").attr("class", "node default").attr("id", t.domId || t.id);
  let n;
  if (t.look === "handDrawn") {
    const s = Z.svg(a).circle(0, 0, 14, Y2(i));
    n = a.insert(() => s), n.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  } else
    n = a.insert("circle", ":first-child"), n.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  return J(t, n), t.intersect = function(o) {
    return X.circle(t, 7, o);
  }, a;
}
p(Kf, "stateStart");
async function Qf(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n } = await ot(e8, t, nt(t)), o = ((t == null ? void 0 : t.padding) || 0) / 2, s = n.width + t.padding, l = n.height + t.padding, c = -n.width / 2 - o, h = -n.height / 2 - o, u = [
    { x: 0, y: 0 },
    { x: s, y: 0 },
    { x: s, y: -l },
    { x: 0, y: -l },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: s + 8, y: 0 },
    { x: s + 8, y: -l },
    { x: -8, y: -l },
    { x: -8, y: 0 }
  ];
  if (t.look === "handDrawn") {
    const d3 = Z.svg(a), f = Q(t, {}), g = d3.rectangle(c - 8, h, s + 16, l, f), m = d3.line(c, h, c, h + l, f), y = d3.line(c + s, h, c + s, h + l, f);
    a.insert(() => m, ":first-child"), a.insert(() => y, ":first-child");
    const x = a.insert(() => g, ":first-child"), { cssStyles: b } = t;
    x.attr("class", "basic label-container").attr("style", Ut(b)), J(t, x);
  } else {
    const d3 = $e(a, s, l, u);
    i && d3.attr("style", i), J(t, d3);
  }
  return t.intersect = function(d3) {
    return X.polygon(t, u, d3);
  }, a;
}
p(Qf, "subroutine");
async function Jf(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n } = await ot(e8, t, nt(t)), o = Math.max(n.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), s = Math.max(n.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), l = -o / 2, c = -s / 2, h = 0.2 * s, u = 0.2 * s, { cssStyles: d3 } = t, f = Z.svg(a), g = Q(t, {}), m = [
    { x: l - h / 2, y: c },
    { x: l + o + h / 2, y: c },
    { x: l + o + h / 2, y: c + s },
    { x: l - h / 2, y: c + s }
  ], y = [
    { x: l + o - h / 2, y: c + s },
    { x: l + o + h / 2, y: c + s },
    { x: l + o + h / 2, y: c + s - u }
  ];
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const x = ht(m), b = f.path(x, g), v = ht(y), S = f.path(v, { ...g, fillStyle: "solid" }), _ = a.insert(() => S, ":first-child");
  return _.insert(() => b, ":first-child"), _.attr("class", "basic label-container"), d3 && t.look !== "handDrawn" && _.selectAll("path").attr("style", d3), i && t.look !== "handDrawn" && _.selectAll("path").attr("style", i), J(t, _), t.intersect = function(C) {
    return X.polygon(t, m, C);
  }, a;
}
p(Jf, "taggedRect");
async function tp(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n, label: o } = await ot(e8, t, nt(t)), s = Math.max(n.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(n.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = l / 4, h = 0.2 * s, u = 0.2 * l, d3 = l + c, { cssStyles: f } = t, g = Z.svg(a), m = Q(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = [
    { x: -s / 2 - s / 2 * 0.1, y: d3 / 2 },
    ...We(
      -s / 2 - s / 2 * 0.1,
      d3 / 2,
      s / 2 + s / 2 * 0.1,
      d3 / 2,
      c,
      0.8
    ),
    { x: s / 2 + s / 2 * 0.1, y: -d3 / 2 },
    { x: -s / 2 - s / 2 * 0.1, y: -d3 / 2 }
  ], x = -s / 2 + s / 2 * 0.1, b = -d3 / 2 - u * 0.4, v = [
    { x: x + s - h, y: (b + l) * 1.4 },
    { x: x + s, y: b + l - u },
    { x: x + s, y: (b + l) * 0.9 },
    ...We(
      x + s,
      (b + l) * 1.3,
      x + s - h,
      (b + l) * 1.5,
      -l * 0.03,
      0.5
    )
  ], S = ht(y), _ = g.path(S, m), C = ht(v), k = g.path(C, {
    ...m,
    fillStyle: "solid"
  }), P = a.insert(() => k, ":first-child");
  return P.insert(() => _, ":first-child"), P.attr("class", "basic label-container"), f && t.look !== "handDrawn" && P.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && P.selectAll("path").attr("style", i), P.attr("transform", `translate(0,${-c / 2})`), o.attr(
    "transform",
    `translate(${-s / 2 + (t.padding ?? 0) - (n.x - (n.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c / 2 - (n.y - (n.top ?? 0))})`
  ), J(t, P), t.intersect = function(H) {
    return X.polygon(t, y, H);
  }, a;
}
p(tp, "taggedWaveEdgedRectangle");
async function ep(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n } = await ot(e8, t, nt(t)), o = Math.max(n.width + t.padding, (t == null ? void 0 : t.width) || 0), s = Math.max(n.height + t.padding, (t == null ? void 0 : t.height) || 0), l = -o / 2, c = -s / 2, h = a.insert("rect", ":first-child");
  return h.attr("class", "text").attr("style", i).attr("rx", 0).attr("ry", 0).attr("x", l).attr("y", c).attr("width", o).attr("height", s), J(t, h), t.intersect = function(u) {
    return X.rect(t, u);
  }, a;
}
p(ep, "text");
var dC = /* @__PURE__ */ p((e8, t, r3, i, a, n) => `M${e8},${t}
    a${a},${n} 0,0,1 0,${-i}
    l${r3},0
    a${a},${n} 0,0,1 0,${i}
    M${r3},${-i}
    a${a},${n} 0,0,0 0,${i}
    l${-r3},0`, "createCylinderPathD"), fC = /* @__PURE__ */ p((e8, t, r3, i, a, n) => [
  `M${e8},${t}`,
  `M${e8 + r3},${t}`,
  `a${a},${n} 0,0,0 0,${-i}`,
  `l${-r3},0`,
  `a${a},${n} 0,0,0 0,${i}`,
  `l${r3},0`
].join(" "), "createOuterCylinderPathD"), pC = /* @__PURE__ */ p((e8, t, r3, i, a, n) => [`M${e8 + r3 / 2},${-i / 2}`, `a${a},${n} 0,0,0 0,${i}`].join(" "), "createInnerCylinderPathD");
async function rp(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n, label: o, halfPadding: s } = await ot(
    e8,
    t,
    nt(t)
  ), l = t.look === "neo" ? s * 2 : s, c = n.height + l, h = c / 2, u = h / (2.5 + c / 50), d3 = n.width + u + l, { cssStyles: f } = t;
  let g;
  if (t.look === "handDrawn") {
    const m = Z.svg(a), y = fC(0, 0, d3, c, u, h), x = pC(0, 0, d3, c, u, h), b = m.path(y, Q(t, {})), v = m.path(x, Q(t, { fill: "none" }));
    g = a.insert(() => v, ":first-child"), g = a.insert(() => b, ":first-child"), g.attr("class", "basic label-container"), f && g.attr("style", f);
  } else {
    const m = dC(0, 0, d3, c, u, h);
    g = a.insert("path", ":first-child").attr("d", m).attr("class", "basic label-container").attr("style", Ut(f)).attr("style", i), g.attr("class", "basic label-container"), f && g.selectAll("path").attr("style", f), i && g.selectAll("path").attr("style", i);
  }
  return g.attr("label-offset-x", u), g.attr("transform", `translate(${-d3 / 2}, ${c / 2} )`), o.attr(
    "transform",
    `translate(${-(n.width / 2) - u - (n.x - (n.left ?? 0))}, ${-(n.height / 2) - (n.y - (n.top ?? 0))})`
  ), J(t, g), t.intersect = function(m) {
    const y = X.rect(t, m), x = y.y - (t.y ?? 0);
    if (h != 0 && (Math.abs(x) < (t.height ?? 0) / 2 || Math.abs(x) == (t.height ?? 0) / 2 && Math.abs(y.x - (t.x ?? 0)) > (t.width ?? 0) / 2 - u)) {
      let b = u * u * (1 - x * x / (h * h));
      b != 0 && (b = Math.sqrt(Math.abs(b))), b = u - b, m.x - (t.x ?? 0) > 0 && (b = -b), y.x += b;
    }
    return y;
  }, a;
}
p(rp, "tiltedCylinder");
async function ip(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n } = await ot(e8, t, nt(t)), o = n.width + t.padding, s = n.height + t.padding, l = [
    { x: -3 * s / 6, y: 0 },
    { x: o + 3 * s / 6, y: 0 },
    { x: o, y: -s },
    { x: 0, y: -s }
  ];
  let c;
  const { cssStyles: h } = t;
  if (t.look === "handDrawn") {
    const u = Z.svg(a), d3 = Q(t, {}), f = ht(l), g = u.path(f, d3);
    c = a.insert(() => g, ":first-child").attr("transform", `translate(${-o / 2}, ${s / 2})`), h && c.attr("style", h);
  } else
    c = $e(a, o, s, l);
  return i && c.attr("style", i), t.width = o, t.height = s, J(t, c), t.intersect = function(u) {
    return X.polygon(t, l, u);
  }, a;
}
p(ip, "trapezoid");
async function ap(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n } = await ot(e8, t, nt(t)), o = 60, s = 20, l = Math.max(o, n.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(s, n.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), { cssStyles: h } = t, u = Z.svg(a), d3 = Q(t, {});
  t.look !== "handDrawn" && (d3.roughness = 0, d3.fillStyle = "solid");
  const f = [
    { x: -l / 2 * 0.8, y: -c / 2 },
    { x: l / 2 * 0.8, y: -c / 2 },
    { x: l / 2, y: -c / 2 * 0.6 },
    { x: l / 2, y: c / 2 },
    { x: -l / 2, y: c / 2 },
    { x: -l / 2, y: -c / 2 * 0.6 }
  ], g = ht(f), m = u.path(g, d3), y = a.insert(() => m, ":first-child");
  return y.attr("class", "basic label-container"), h && t.look !== "handDrawn" && y.selectChildren("path").attr("style", h), i && t.look !== "handDrawn" && y.selectChildren("path").attr("style", i), J(t, y), t.intersect = function(x) {
    return X.polygon(t, f, x);
  }, a;
}
p(ap, "trapezoidalPentagon");
async function np(e8, t) {
  var b;
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n, label: o } = await ot(e8, t, nt(t)), s = At((b = dt().flowchart) == null ? void 0 : b.htmlLabels), l = n.width + (t.padding ?? 0), c = l + n.height, h = l + n.height, u = [
    { x: 0, y: 0 },
    { x: h, y: 0 },
    { x: h / 2, y: -c }
  ], { cssStyles: d3 } = t, f = Z.svg(a), g = Q(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = ht(u), y = f.path(m, g), x = a.insert(() => y, ":first-child").attr("transform", `translate(${-c / 2}, ${c / 2})`);
  return d3 && t.look !== "handDrawn" && x.selectChildren("path").attr("style", d3), i && t.look !== "handDrawn" && x.selectChildren("path").attr("style", i), t.width = l, t.height = c, J(t, x), o.attr(
    "transform",
    `translate(${-n.width / 2 - (n.x - (n.left ?? 0))}, ${c / 2 - (n.height + (t.padding ?? 0) / (s ? 2 : 1) - (n.y - (n.top ?? 0)))})`
  ), t.intersect = function(v) {
    return D.info("Triangle intersect", t, u, v), X.polygon(t, u, v);
  }, a;
}
p(np, "triangle");
async function sp(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n, label: o } = await ot(e8, t, nt(t)), s = Math.max(n.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(n.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = l / 8, h = l + c, { cssStyles: u } = t, f = 70 - s, g = f > 0 ? f / 2 : 0, m = Z.svg(a), y = Q(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const x = [
    { x: -s / 2 - g, y: h / 2 },
    ...We(
      -s / 2 - g,
      h / 2,
      s / 2 + g,
      h / 2,
      c,
      0.8
    ),
    { x: s / 2 + g, y: -h / 2 },
    { x: -s / 2 - g, y: -h / 2 }
  ], b = ht(x), v = m.path(b, y), S = a.insert(() => v, ":first-child");
  return S.attr("class", "basic label-container"), u && t.look !== "handDrawn" && S.selectAll("path").attr("style", u), i && t.look !== "handDrawn" && S.selectAll("path").attr("style", i), S.attr("transform", `translate(0,${-c / 2})`), o.attr(
    "transform",
    `translate(${-s / 2 + (t.padding ?? 0) - (n.x - (n.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c - (n.y - (n.top ?? 0))})`
  ), J(t, S), t.intersect = function(_) {
    return X.polygon(t, x, _);
  }, a;
}
p(sp, "waveEdgedRectangle");
async function op(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n } = await ot(e8, t, nt(t)), o = 100, s = 50, l = Math.max(n.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), c = Math.max(n.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), h = l / c;
  let u = l, d3 = c;
  u > d3 * h ? d3 = u / h : u = d3 * h, u = Math.max(u, o), d3 = Math.max(d3, s);
  const f = Math.min(d3 * 0.2, d3 / 4), g = d3 + f * 2, { cssStyles: m } = t, y = Z.svg(a), x = Q(t, {});
  t.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
  const b = [
    { x: -u / 2, y: g / 2 },
    ...We(-u / 2, g / 2, u / 2, g / 2, f, 1),
    { x: u / 2, y: -g / 2 },
    ...We(u / 2, -g / 2, -u / 2, -g / 2, f, -1)
  ], v = ht(b), S = y.path(v, x), _ = a.insert(() => S, ":first-child");
  return _.attr("class", "basic label-container"), m && t.look !== "handDrawn" && _.selectAll("path").attr("style", m), i && t.look !== "handDrawn" && _.selectAll("path").attr("style", i), J(t, _), t.intersect = function(C) {
    return X.polygon(t, b, C);
  }, a;
}
p(op, "waveRectangle");
async function lp(e8, t) {
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const { shapeSvg: a, bbox: n, label: o } = await ot(e8, t, nt(t)), s = Math.max(n.width + (t.padding ?? 0) * 2, (t == null ? void 0 : t.width) ?? 0), l = Math.max(n.height + (t.padding ?? 0) * 2, (t == null ? void 0 : t.height) ?? 0), c = 5, h = -s / 2, u = -l / 2, { cssStyles: d3 } = t, f = Z.svg(a), g = Q(t, {}), m = [
    { x: h - c, y: u - c },
    { x: h - c, y: u + l },
    { x: h + s, y: u + l },
    { x: h + s, y: u - c }
  ], y = `M${h - c},${u - c} L${h + s},${u - c} L${h + s},${u + l} L${h - c},${u + l} L${h - c},${u - c}
                M${h - c},${u} L${h + s},${u}
                M${h},${u - c} L${h},${u + l}`;
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const x = f.path(y, g), b = a.insert(() => x, ":first-child");
  return b.attr("transform", `translate(${c / 2}, ${c / 2})`), b.attr("class", "basic label-container"), d3 && t.look !== "handDrawn" && b.selectAll("path").attr("style", d3), i && t.look !== "handDrawn" && b.selectAll("path").attr("style", i), o.attr(
    "transform",
    `translate(${-(n.width / 2) + c / 2 - (n.x - (n.left ?? 0))}, ${-(n.height / 2) + c / 2 - (n.y - (n.top ?? 0))})`
  ), J(t, b), t.intersect = function(v) {
    return X.polygon(t, m, v);
  }, a;
}
p(lp, "windowPane");
async function Ao(e8, t) {
  var E, R, z;
  const r3 = t;
  if (r3.alias && (t.label = r3.alias), t.look === "handDrawn") {
    const { themeVariables: Y } = Jt(), { background: I } = Y, V = {
      ...t,
      id: t.id + "-background",
      look: "default",
      cssStyles: ["stroke: none", `fill: ${I}`]
    };
    await Ao(e8, V);
  }
  const i = Jt();
  t.useHtmlLabels = i.htmlLabels;
  let a = ((E = i.er) == null ? void 0 : E.diagramPadding) ?? 10, n = ((R = i.er) == null ? void 0 : R.entityPadding) ?? 6;
  const { cssStyles: o } = t, { labelStyles: s } = tt(t);
  if (r3.attributes.length === 0 && t.label) {
    const Y = {
      rx: 0,
      ry: 0,
      labelPaddingX: a,
      labelPaddingY: a * 1.5
    };
    Ee(t.label, i) + Y.labelPaddingX * 2 < i.er.minEntityWidth && (t.width = i.er.minEntityWidth);
    const I = await Ni(e8, t, Y);
    if (!At(i.htmlLabels)) {
      const V = I.select("text"), W = (z = V.node()) == null ? void 0 : z.getBBox();
      V.attr("transform", `translate(${-W.width / 2}, 0)`);
    }
    return I;
  }
  i.htmlLabels || (a *= 1.25, n *= 1.25);
  let l = nt(t);
  l || (l = "node default");
  const c = e8.insert("g").attr("class", l).attr("id", t.domId || t.id), h = await vr(c, t.label ?? "", i, 0, 0, ["name"], s);
  h.height += n;
  let u = 0;
  const d3 = [];
  let f = 0, g = 0, m = 0, y = 0, x = true, b = true;
  for (const Y of r3.attributes) {
    const I = await vr(
      c,
      Y.type,
      i,
      0,
      u,
      ["attribute-type"],
      s
    );
    f = Math.max(f, I.width + a);
    const V = await vr(
      c,
      Y.name,
      i,
      0,
      u,
      ["attribute-name"],
      s
    );
    g = Math.max(g, V.width + a);
    const W = await vr(
      c,
      Y.keys.join(),
      i,
      0,
      u,
      ["attribute-keys"],
      s
    );
    m = Math.max(m, W.width + a);
    const ut = await vr(
      c,
      Y.comment,
      i,
      0,
      u,
      ["attribute-comment"],
      s
    );
    y = Math.max(y, ut.width + a), u += Math.max(I.height, V.height, W.height, ut.height) + n, d3.push(u);
  }
  d3.pop();
  let v = 4;
  m <= a && (x = false, m = 0, v--), y <= a && (b = false, y = 0, v--);
  const S = c.node().getBBox();
  if (h.width + a * 2 - (f + g + m + y) > 0) {
    const Y = h.width + a * 2 - (f + g + m + y);
    f += Y / v, g += Y / v, m > 0 && (m += Y / v), y > 0 && (y += Y / v);
  }
  const _ = f + g + m + y, C = Z.svg(c), k = Q(t, {});
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  const P = Math.max(S.width + a * 2, (t == null ? void 0 : t.width) || 0, _), H = Math.max(S.height + (d3[0] || u) + n, (t == null ? void 0 : t.height) || 0), $ = -P / 2, A = -H / 2;
  c.selectAll("g:not(:first-child)").each((Y, I, V) => {
    const W = Li$1(V[I]), ut = W.attr("transform");
    let mt = 0, Ft = 0;
    if (ut) {
      const gt = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(ut);
      gt && (mt = parseFloat(gt[1]), Ft = parseFloat(gt[2]), W.attr("class").includes("attribute-name") ? mt += f : W.attr("class").includes("attribute-keys") ? mt += f + g : W.attr("class").includes("attribute-comment") && (mt += f + g + m));
    }
    W.attr(
      "transform",
      `translate(${$ + a / 2 + mt}, ${Ft + A + h.height + n / 2})`
    );
  }), c.select(".name").attr("transform", "translate(" + -h.width / 2 + ", " + (A + n / 2) + ")");
  const j = C.rectangle($, A, P, H, k), N = c.insert(() => j, ":first-child").attr("style", o.join("")), { themeVariables: F } = Jt(), { rowEven: M, rowOdd: B, nodeBorder: O } = F;
  d3.push(0);
  for (const [Y, I] of d3.entries()) {
    if (Y === 0 && d3.length > 1)
      continue;
    const V = Y % 2 === 0 && I !== 0, W = C.rectangle($, h.height + A + I, P, h.height, {
      ...k,
      fill: V ? M : B,
      stroke: O
    });
    c.insert(() => W, "g.label").attr("style", o.join("")).attr("class", `row-rect-${Y % 2 === 0 ? "even" : "odd"}`);
  }
  let L = C.line($, h.height + A, P + $, h.height + A, k);
  c.insert(() => L).attr("class", "divider"), L = C.line(f + $, h.height + A, f + $, H + A, k), c.insert(() => L).attr("class", "divider"), x && (L = C.line(
    f + g + $,
    h.height + A,
    f + g + $,
    H + A,
    k
  ), c.insert(() => L).attr("class", "divider")), b && (L = C.line(
    f + g + m + $,
    h.height + A,
    f + g + m + $,
    H + A,
    k
  ), c.insert(() => L).attr("class", "divider"));
  for (const Y of d3)
    L = C.line(
      $,
      h.height + A + Y,
      P + $,
      h.height + A + Y,
      k
    ), c.insert(() => L).attr("class", "divider");
  return J(t, N), t.intersect = function(Y) {
    return X.rect(t, Y);
  }, c;
}
p(Ao, "erBox");
async function vr(e8, t, r3, i = 0, a = 0, n = [], o = "") {
  const s = e8.insert("g").attr("class", `label ${n.join(" ")}`).attr("transform", `translate(${i}, ${a})`).attr("style", o);
  t !== gl(t) && (t = gl(t), t = t.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
  const l = s.node().appendChild(
    await He(
      s,
      t,
      {
        width: Ee(t, r3) + 100,
        style: o,
        useHtmlLabels: r3.htmlLabels
      },
      r3
    )
  );
  if (t.includes("&lt;") || t.includes("&gt;")) {
    let h = l.children[0];
    for (h.textContent = h.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">"); h.childNodes[0]; )
      h = h.childNodes[0], h.textContent = h.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
  }
  let c = l.getBBox();
  if (At(r3.htmlLabels)) {
    const h = l.children[0];
    h.style.textAlign = "start";
    const u = Li$1(l);
    c = h.getBoundingClientRect(), u.attr("width", c.width), u.attr("height", c.height);
  }
  return c;
}
p(vr, "addText");
async function cp(e8, t, r3, i, a = r3.class.padding ?? 12) {
  const n = i ? 0 : 3, o = e8.insert("g").attr("class", nt(t)).attr("id", t.domId || t.id);
  let s = null, l = null, c = null, h = null, u = 0, d3 = 0, f = 0;
  if (s = o.insert("g").attr("class", "annotation-group text"), t.annotations.length > 0) {
    const b = t.annotations[0];
    await gi(s, { text: `«${b}»` }, 0), u = s.node().getBBox().height;
  }
  l = o.insert("g").attr("class", "label-group text"), await gi(l, t, 0, ["font-weight: bolder"]);
  const g = l.node().getBBox();
  d3 = g.height, c = o.insert("g").attr("class", "members-group text");
  let m = 0;
  for (const b of t.members) {
    const v = await gi(c, b, m, [b.parseClassifier()]);
    m += v + n;
  }
  f = c.node().getBBox().height, f <= 0 && (f = a / 2), h = o.insert("g").attr("class", "methods-group text");
  let y = 0;
  for (const b of t.methods) {
    const v = await gi(h, b, y, [b.parseClassifier()]);
    y += v + n;
  }
  let x = o.node().getBBox();
  if (s !== null) {
    const b = s.node().getBBox();
    s.attr("transform", `translate(${-b.width / 2})`);
  }
  return l.attr("transform", `translate(${-g.width / 2}, ${u})`), x = o.node().getBBox(), c.attr(
    "transform",
    `translate(0, ${u + d3 + a * 2})`
  ), x = o.node().getBBox(), h.attr(
    "transform",
    `translate(0, ${u + d3 + (f ? f + a * 4 : a * 2)})`
  ), x = o.node().getBBox(), { shapeSvg: o, bbox: x };
}
p(cp, "textHelper");
async function gi(e8, t, r3, i = []) {
  const a = e8.insert("g").attr("class", "label").attr("style", i.join("; ")), n = Jt();
  let o = "useHtmlLabels" in t ? t.useHtmlLabels : At(n.htmlLabels) ?? true, s = "";
  "text" in t ? s = t.text : s = t.label, !o && s.startsWith("\\") && (s = s.substring(1)), Pr(s) && (o = true);
  const l = await He(
    a,
    Ys(hr(s)),
    {
      width: Ee(s, n) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels: o
    },
    n
  );
  let c, h = 1;
  if (o) {
    const u = l.children[0], d3 = Li$1(l);
    h = u.innerHTML.split("<br>").length, u.innerHTML.includes("</math>") && (h += u.innerHTML.split("<mrow>").length - 1);
    const f = u.getElementsByTagName("img");
    if (f) {
      const g = s.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...f].map(
          (m) => new Promise((y) => {
            function x() {
              var b;
              if (m.style.display = "flex", m.style.flexDirection = "column", g) {
                const v = ((b = n.fontSize) == null ? void 0 : b.toString()) ?? window.getComputedStyle(document.body).fontSize, _ = parseInt(v, 10) * 5 + "px";
                m.style.minWidth = _, m.style.maxWidth = _;
              } else
                m.style.width = "100%";
              y(m);
            }
            p(x, "setupImage"), setTimeout(() => {
              m.complete && x();
            }), m.addEventListener("error", x), m.addEventListener("load", x);
          })
        )
      );
    }
    c = u.getBoundingClientRect(), d3.attr("width", c.width), d3.attr("height", c.height);
  } else {
    i.includes("font-weight: bolder") && Li$1(l).selectAll("tspan").attr("font-weight", ""), h = l.children.length;
    const u = l.children[0];
    (l.textContent === "" || l.textContent.includes("&gt")) && (u.textContent = s[0] + s.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), s[1] === " " && (u.textContent = u.textContent[0] + " " + u.textContent.substring(1))), u.textContent === "undefined" && (u.textContent = ""), c = l.getBBox();
  }
  return a.attr("transform", "translate(0," + (-c.height / (2 * h) + r3) + ")"), c.height;
}
p(gi, "addText");
async function hp(e8, t) {
  var H, $;
  const r3 = dt(), i = r3.class.padding ?? 12, a = i, n = t.useHtmlLabels ?? At(r3.htmlLabels) ?? true, o = t;
  o.annotations = o.annotations ?? [], o.members = o.members ?? [], o.methods = o.methods ?? [];
  const { shapeSvg: s, bbox: l } = await cp(e8, t, r3, n, a), { labelStyles: c, nodeStyles: h } = tt(t);
  t.labelStyle = c, t.cssStyles = o.styles || "";
  const u = ((H = o.styles) == null ? void 0 : H.join(";")) || h || "";
  t.cssStyles || (t.cssStyles = u.replaceAll("!important", "").split(";"));
  const d3 = o.members.length === 0 && o.methods.length === 0 && !(($ = r3.class) != null && $.hideEmptyMembersBox), f = Z.svg(s), g = Q(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = l.width;
  let y = l.height;
  o.members.length === 0 && o.methods.length === 0 ? y += a : o.members.length > 0 && o.methods.length === 0 && (y += a * 2);
  const x = -m / 2, b = -y / 2, v = f.rectangle(
    x - i,
    b - i - (d3 ? i : o.members.length === 0 && o.methods.length === 0 ? -i / 2 : 0),
    m + 2 * i,
    y + 2 * i + (d3 ? i * 2 : o.members.length === 0 && o.methods.length === 0 ? -i : 0),
    g
  ), S = s.insert(() => v, ":first-child");
  S.attr("class", "basic label-container");
  const _ = S.node().getBBox();
  s.selectAll(".text").each((A, j, N) => {
    var E;
    const F = Li$1(N[j]), M = F.attr("transform");
    let B = 0;
    if (M) {
      const z = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(M);
      z && (B = parseFloat(z[2]));
    }
    let O = B + b + i - (d3 ? i : o.members.length === 0 && o.methods.length === 0 ? -i / 2 : 0);
    n || (O -= 4);
    let L = x;
    (F.attr("class").includes("label-group") || F.attr("class").includes("annotation-group")) && (L = -((E = F.node()) == null ? void 0 : E.getBBox().width) / 2 || 0, s.selectAll("text").each(function(R, z, Y) {
      window.getComputedStyle(Y[z]).textAnchor === "middle" && (L = 0);
    })), F.attr("transform", `translate(${L}, ${O})`);
  });
  const C = s.select(".annotation-group").node().getBBox().height - (d3 ? i / 2 : 0) || 0, k = s.select(".label-group").node().getBBox().height - (d3 ? i / 2 : 0) || 0, P = s.select(".members-group").node().getBBox().height - (d3 ? i / 2 : 0) || 0;
  if (o.members.length > 0 || o.methods.length > 0 || d3) {
    const A = f.line(
      _.x,
      C + k + b + i,
      _.x + _.width,
      C + k + b + i,
      g
    );
    s.insert(() => A).attr("class", "divider").attr("style", u);
  }
  if (d3 || o.members.length > 0 || o.methods.length > 0) {
    const A = f.line(
      _.x,
      C + k + P + b + a * 2 + i,
      _.x + _.width,
      C + k + P + b + i + a * 2,
      g
    );
    s.insert(() => A).attr("class", "divider").attr("style", u);
  }
  if (o.look !== "handDrawn" && s.selectAll("path").attr("style", u), S.select(":nth-child(2)").attr("style", u), s.selectAll(".divider").select("path").attr("style", u), t.labelStyle ? s.selectAll("span").attr("style", t.labelStyle) : s.selectAll("span").attr("style", u), !n) {
    const A = RegExp(/color\s*:\s*([^;]*)/), j = A.exec(u);
    if (j) {
      const N = j[0].replace("color", "fill");
      s.selectAll("tspan").attr("style", N);
    } else if (c) {
      const N = A.exec(c);
      if (N) {
        const F = N[0].replace("color", "fill");
        s.selectAll("tspan").attr("style", F);
      }
    }
  }
  return J(t, S), t.intersect = function(A) {
    return X.rect(t, A);
  }, s;
}
p(hp, "classBox");
async function up(e8, t) {
  var C, k;
  const { labelStyles: r3, nodeStyles: i } = tt(t);
  t.labelStyle = r3;
  const a = t, n = t, o = 20, s = 20, l = "verifyMethod" in t, c = nt(t), h = e8.insert("g").attr("class", c).attr("id", t.domId ?? t.id);
  let u;
  l ? u = await fe(
    h,
    `&lt;&lt;${a.type}&gt;&gt;`,
    0,
    t.labelStyle
  ) : u = await fe(h, "&lt;&lt;Element&gt;&gt;", 0, t.labelStyle);
  let d3 = u;
  const f = await fe(
    h,
    a.name,
    d3,
    t.labelStyle + "; font-weight: bold;"
  );
  if (d3 += f + s, l) {
    const P = await fe(
      h,
      `${a.requirementId ? `Id: ${a.requirementId}` : ""}`,
      d3,
      t.labelStyle
    );
    d3 += P;
    const H = await fe(
      h,
      `${a.text ? `Text: ${a.text}` : ""}`,
      d3,
      t.labelStyle
    );
    d3 += H;
    const $ = await fe(
      h,
      `${a.risk ? `Risk: ${a.risk}` : ""}`,
      d3,
      t.labelStyle
    );
    d3 += $, await fe(
      h,
      `${a.verifyMethod ? `Verification: ${a.verifyMethod}` : ""}`,
      d3,
      t.labelStyle
    );
  } else {
    const P = await fe(
      h,
      `${n.type ? `Type: ${n.type}` : ""}`,
      d3,
      t.labelStyle
    );
    d3 += P, await fe(
      h,
      `${n.docRef ? `Doc Ref: ${n.docRef}` : ""}`,
      d3,
      t.labelStyle
    );
  }
  const g = (((C = h.node()) == null ? void 0 : C.getBBox().width) ?? 200) + o, m = (((k = h.node()) == null ? void 0 : k.getBBox().height) ?? 200) + o, y = -g / 2, x = -m / 2, b = Z.svg(h), v = Q(t, {});
  t.look !== "handDrawn" && (v.roughness = 0, v.fillStyle = "solid");
  const S = b.rectangle(y, x, g, m, v), _ = h.insert(() => S, ":first-child");
  if (_.attr("class", "basic label-container").attr("style", i), h.selectAll(".label").each((P, H, $) => {
    const A = Li$1($[H]), j = A.attr("transform");
    let N = 0, F = 0;
    if (j) {
      const L = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(j);
      L && (N = parseFloat(L[1]), F = parseFloat(L[2]));
    }
    const M = F - m / 2;
    let B = y + o / 2;
    (H === 0 || H === 1) && (B = N), A.attr("transform", `translate(${B}, ${M + o})`);
  }), d3 > u + f + s) {
    const P = b.line(
      y,
      x + u + f + s,
      y + g,
      x + u + f + s,
      v
    );
    h.insert(() => P).attr("style", i);
  }
  return J(t, _), t.intersect = function(P) {
    return X.rect(t, P);
  }, h;
}
p(up, "requirementBox");
async function fe(e8, t, r3, i = "") {
  if (t === "")
    return 0;
  const a = e8.insert("g").attr("class", "label").attr("style", i), n = dt(), o = n.htmlLabels ?? true, s = await He(
    a,
    Ys(hr(t)),
    {
      width: Ee(t, n) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels: o,
      style: i
    },
    n
  );
  let l;
  if (o) {
    const c = s.children[0], h = Li$1(s);
    l = c.getBoundingClientRect(), h.attr("width", l.width), h.attr("height", l.height);
  } else {
    const c = s.children[0];
    for (const h of c.children)
      h.textContent = h.textContent.replaceAll("&gt;", ">").replaceAll("&lt;", "<"), i && h.setAttribute("style", i);
    l = s.getBBox(), l.height += 6;
  }
  return a.attr("transform", `translate(${-l.width / 2},${-l.height / 2 + r3})`), l.height;
}
p(fe, "addText");
var gC = /* @__PURE__ */ p((e8) => {
  switch (e8) {
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
async function dp(e8, t, { config: r3 }) {
  var j, N;
  const { labelStyles: i, nodeStyles: a } = tt(t);
  t.labelStyle = i || "";
  const n = 10, o = t.width;
  t.width = (t.width ?? 200) - 10;
  const {
    shapeSvg: s,
    bbox: l,
    label: c
  } = await ot(e8, t, nt(t)), h = t.padding || 10;
  let u = "", d3;
  "ticket" in t && t.ticket && ((j = r3 == null ? void 0 : r3.kanban) != null && j.ticketBaseUrl) && (u = (N = r3 == null ? void 0 : r3.kanban) == null ? void 0 : N.ticketBaseUrl.replace("#TICKET#", t.ticket), d3 = s.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", u).attr("target", "_blank"));
  const f = {
    useHtmlLabels: t.useHtmlLabels,
    labelStyle: t.labelStyle || "",
    width: t.width,
    img: t.img,
    padding: t.padding || 8,
    centerLabel: false
  };
  let g, m;
  d3 ? { label: g, bbox: m } = await Wn(
    d3,
    "ticket" in t && t.ticket || "",
    f
  ) : { label: g, bbox: m } = await Wn(
    s,
    "ticket" in t && t.ticket || "",
    f
  );
  const { label: y, bbox: x } = await Wn(
    s,
    "assigned" in t && t.assigned || "",
    f
  );
  t.width = o;
  const b = 10, v = (t == null ? void 0 : t.width) || 0, S = Math.max(m.height, x.height) / 2, _ = Math.max(l.height + b * 2, (t == null ? void 0 : t.height) || 0) + S, C = -v / 2, k = -_ / 2;
  c.attr(
    "transform",
    "translate(" + (h - v / 2) + ", " + (-S - l.height / 2) + ")"
  ), g.attr(
    "transform",
    "translate(" + (h - v / 2) + ", " + (-S + l.height / 2) + ")"
  ), y.attr(
    "transform",
    "translate(" + (h + v / 2 - x.width - 2 * n) + ", " + (-S + l.height / 2) + ")"
  );
  let P;
  const { rx: H, ry: $ } = t, { cssStyles: A } = t;
  if (t.look === "handDrawn") {
    const F = Z.svg(s), M = Q(t, {}), B = H || $ ? F.path(Oe(C, k, v, _, H || 0), M) : F.rectangle(C, k, v, _, M);
    P = s.insert(() => B, ":first-child"), P.attr("class", "basic label-container").attr("style", A || null);
  } else {
    P = s.insert("rect", ":first-child"), P.attr("class", "basic label-container __APA__").attr("style", a).attr("rx", H ?? 5).attr("ry", $ ?? 5).attr("x", C).attr("y", k).attr("width", v).attr("height", _);
    const F = "priority" in t && t.priority;
    if (F) {
      const M = s.append("line"), B = C + 2, O = k + Math.floor((H ?? 0) / 2), L = k + _ - Math.floor((H ?? 0) / 2);
      M.attr("x1", B).attr("y1", O).attr("x2", B).attr("y2", L).attr("stroke-width", "4").attr("stroke", gC(F));
    }
  }
  return J(t, P), t.height = _, t.intersect = function(F) {
    return X.rect(t, F);
  }, s;
}
p(dp, "kanbanItem");
var mC = [
  {
    semanticName: "Process",
    name: "Rectangle",
    shortName: "rect",
    description: "Standard process shape",
    aliases: ["proc", "process", "rectangle"],
    internalAliases: ["squareRect"],
    handler: Gf
  },
  {
    semanticName: "Event",
    name: "Rounded Rectangle",
    shortName: "rounded",
    description: "Represents an event",
    aliases: ["event"],
    internalAliases: ["roundedRect"],
    handler: jf
  },
  {
    semanticName: "Terminal Point",
    name: "Stadium",
    shortName: "stadium",
    description: "Terminal point",
    aliases: ["terminal", "pill"],
    handler: Xf
  },
  {
    semanticName: "Subprocess",
    name: "Framed Rectangle",
    shortName: "fr-rect",
    description: "Subprocess",
    aliases: ["subprocess", "subproc", "framed-rectangle", "subroutine"],
    handler: Qf
  },
  {
    semanticName: "Database",
    name: "Cylinder",
    shortName: "cyl",
    description: "Database storage",
    aliases: ["db", "database", "cylinder"],
    handler: yf
  },
  {
    semanticName: "Start",
    name: "Circle",
    shortName: "circle",
    description: "Starting point",
    aliases: ["circ"],
    handler: hf
  },
  {
    semanticName: "Decision",
    name: "Diamond",
    shortName: "diam",
    description: "Decision-making step",
    aliases: ["decision", "diamond", "question"],
    handler: Wf
  },
  {
    semanticName: "Prepare Conditional",
    name: "Hexagon",
    shortName: "hex",
    description: "Preparation or condition step",
    aliases: ["hexagon", "prepare"],
    handler: _f
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Right",
    shortName: "lean-r",
    description: "Represents input or output",
    aliases: ["lean-right", "in-out"],
    internalAliases: ["lean_right"],
    handler: $f
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Left",
    shortName: "lean-l",
    description: "Represents output or input",
    aliases: ["lean-left", "out-in"],
    internalAliases: ["lean_left"],
    handler: Of
  },
  {
    semanticName: "Priority Action",
    name: "Trapezoid Base Bottom",
    shortName: "trap-b",
    description: "Priority action",
    aliases: ["priority", "trapezoid-bottom", "trapezoid"],
    handler: ip
  },
  {
    semanticName: "Manual Operation",
    name: "Trapezoid Base Top",
    shortName: "trap-t",
    description: "Represents a manual task",
    aliases: ["manual", "trapezoid-top", "inv-trapezoid"],
    internalAliases: ["inv_trapezoid"],
    handler: Ef
  },
  {
    semanticName: "Stop",
    name: "Double Circle",
    shortName: "dbl-circ",
    description: "Represents a stop point",
    aliases: ["double-circle"],
    internalAliases: ["doublecircle"],
    handler: bf
  },
  {
    semanticName: "Text Block",
    name: "Text Block",
    shortName: "text",
    description: "Text block",
    handler: ep
  },
  {
    semanticName: "Card",
    name: "Notched Rectangle",
    shortName: "notch-rect",
    description: "Represents a card",
    aliases: ["card", "notched-rectangle"],
    handler: lf
  },
  {
    semanticName: "Lined/Shaded Process",
    name: "Lined Rectangle",
    shortName: "lin-rect",
    description: "Lined process shape",
    aliases: ["lined-rectangle", "lined-process", "lin-proc", "shaded-process"],
    handler: Yf
  },
  {
    semanticName: "Start",
    name: "Small Circle",
    shortName: "sm-circ",
    description: "Small starting point",
    aliases: ["start", "small-circle"],
    internalAliases: ["stateStart"],
    handler: Kf
  },
  {
    semanticName: "Stop",
    name: "Framed Circle",
    shortName: "fr-circ",
    description: "Stop point",
    aliases: ["stop", "framed-circle"],
    internalAliases: ["stateEnd"],
    handler: Zf
  },
  {
    semanticName: "Fork/Join",
    name: "Filled Rectangle",
    shortName: "fork",
    description: "Fork or join in process flow",
    aliases: ["join"],
    internalAliases: ["forkJoin"],
    handler: kf
  },
  {
    semanticName: "Collate",
    name: "Hourglass",
    shortName: "hourglass",
    description: "Represents a collate operation",
    aliases: ["hourglass", "collate"],
    handler: Sf
  },
  {
    semanticName: "Comment",
    name: "Curly Brace",
    shortName: "brace",
    description: "Adds a comment",
    aliases: ["comment", "brace-l"],
    handler: ff
  },
  {
    semanticName: "Comment Right",
    name: "Curly Brace",
    shortName: "brace-r",
    description: "Adds a comment",
    handler: pf
  },
  {
    semanticName: "Comment with braces on both sides",
    name: "Curly Braces",
    shortName: "braces",
    description: "Adds a comment",
    handler: gf
  },
  {
    semanticName: "Com Link",
    name: "Lightning Bolt",
    shortName: "bolt",
    description: "Communication link",
    aliases: ["com-link", "lightning-bolt"],
    handler: Df
  },
  {
    semanticName: "Document",
    name: "Document",
    shortName: "doc",
    description: "Represents a document",
    aliases: ["doc", "document"],
    handler: sp
  },
  {
    semanticName: "Delay",
    name: "Half-Rounded Rectangle",
    shortName: "delay",
    description: "Represents a delay",
    aliases: ["half-rounded-rectangle"],
    handler: wf
  },
  {
    semanticName: "Direct Access Storage",
    name: "Horizontal Cylinder",
    shortName: "h-cyl",
    description: "Direct access storage",
    aliases: ["das", "horizontal-cylinder"],
    handler: rp
  },
  {
    semanticName: "Disk Storage",
    name: "Lined Cylinder",
    shortName: "lin-cyl",
    description: "Disk storage",
    aliases: ["disk", "lined-cylinder"],
    handler: Rf
  },
  {
    semanticName: "Display",
    name: "Curved Trapezoid",
    shortName: "curv-trap",
    description: "Represents a display",
    aliases: ["curved-trapezoid", "display"],
    handler: mf
  },
  {
    semanticName: "Divided Process",
    name: "Divided Rectangle",
    shortName: "div-rect",
    description: "Divided process shape",
    aliases: ["div-proc", "divided-rectangle", "divided-process"],
    handler: xf
  },
  {
    semanticName: "Extract",
    name: "Triangle",
    shortName: "tri",
    description: "Extraction process",
    aliases: ["extract", "triangle"],
    handler: np
  },
  {
    semanticName: "Internal Storage",
    name: "Window Pane",
    shortName: "win-pane",
    description: "Internal storage",
    aliases: ["internal-storage", "window-pane"],
    handler: lp
  },
  {
    semanticName: "Junction",
    name: "Filled Circle",
    shortName: "f-circ",
    description: "Junction point",
    aliases: ["junction", "filled-circle"],
    handler: Cf
  },
  {
    semanticName: "Loop Limit",
    name: "Trapezoidal Pentagon",
    shortName: "notch-pent",
    description: "Loop limit step",
    aliases: ["loop-limit", "notched-pentagon"],
    handler: ap
  },
  {
    semanticName: "Manual File",
    name: "Flipped Triangle",
    shortName: "flip-tri",
    description: "Manual file operation",
    aliases: ["manual-file", "flipped-triangle"],
    handler: vf
  },
  {
    semanticName: "Manual Input",
    name: "Sloped Rectangle",
    shortName: "sl-rect",
    description: "Manual input step",
    aliases: ["manual-input", "sloped-rectangle"],
    handler: Uf
  },
  {
    semanticName: "Multi-Document",
    name: "Stacked Document",
    shortName: "docs",
    description: "Multiple documents",
    aliases: ["documents", "st-doc", "stacked-document"],
    handler: Nf
  },
  {
    semanticName: "Multi-Process",
    name: "Stacked Rectangle",
    shortName: "st-rect",
    description: "Multiple processes",
    aliases: ["procs", "processes", "stacked-rectangle"],
    handler: Pf
  },
  {
    semanticName: "Stored Data",
    name: "Bow Tie Rectangle",
    shortName: "bow-rect",
    description: "Stored data",
    aliases: ["stored-data", "bow-tie-rectangle"],
    handler: of
  },
  {
    semanticName: "Summary",
    name: "Crossed Circle",
    shortName: "cross-circ",
    description: "Summary",
    aliases: ["summary", "crossed-circle"],
    handler: df
  },
  {
    semanticName: "Tagged Document",
    name: "Tagged Document",
    shortName: "tag-doc",
    description: "Tagged document",
    aliases: ["tag-doc", "tagged-document"],
    handler: tp
  },
  {
    semanticName: "Tagged Process",
    name: "Tagged Rectangle",
    shortName: "tag-rect",
    description: "Tagged process",
    aliases: ["tagged-rectangle", "tag-proc", "tagged-process"],
    handler: Jf
  },
  {
    semanticName: "Paper Tape",
    name: "Flag",
    shortName: "flag",
    description: "Paper tape",
    aliases: ["paper-tape"],
    handler: op
  },
  {
    semanticName: "Odd",
    name: "Odd",
    shortName: "odd",
    description: "Odd shape",
    internalAliases: ["rect_left_inv_arrow"],
    handler: qf
  },
  {
    semanticName: "Lined Document",
    name: "Lined Document",
    shortName: "lin-doc",
    description: "Lined document",
    aliases: ["lined-document"],
    handler: If
  }
], yC = /* @__PURE__ */ p(() => {
  const t = [
    ...Object.entries({
      // States
      state: Vf,
      choice: cf,
      note: zf,
      // Rectangles
      rectWithTitle: Hf,
      labelRect: Ff,
      // Icons
      iconSquare: Af,
      iconCircle: Bf,
      icon: Tf,
      iconRounded: Lf,
      imageSquare: Mf,
      anchor: sf,
      // Kanban diagram
      kanbanItem: dp,
      // class diagram
      classBox: hp,
      // er diagram
      erBox: Ao,
      // Requirement diagram
      requirementBox: up
    }),
    ...mC.flatMap((r3) => [
      r3.shortName,
      ..."aliases" in r3 ? r3.aliases : [],
      ..."internalAliases" in r3 ? r3.internalAliases : []
    ].map((a) => [a, r3.handler]))
  ];
  return Object.fromEntries(t);
}, "generateShapeMap"), fp = yC();
function xC(e8) {
  return e8 in fp;
}
p(xC, "isValidShape");
var dn = /* @__PURE__ */ new Map();
async function pp(e8, t, r3) {
  let i, a;
  t.shape === "rect" && (t.rx && t.ry ? t.shape = "roundedRect" : t.shape = "squareRect");
  const n = t.shape ? fp[t.shape] : void 0;
  if (!n)
    throw new Error(`No such shape: ${t.shape}. Please check your syntax.`);
  if (t.link) {
    let o;
    r3.config.securityLevel === "sandbox" ? o = "_top" : t.linkTarget && (o = t.linkTarget || "_blank"), i = e8.insert("svg:a").attr("xlink:href", t.link).attr("target", o ?? null), a = await n(i, t, r3);
  } else
    a = await n(e8, t, r3), i = a;
  return t.tooltip && a.attr("title", t.tooltip), dn.set(t.id, i), t.haveCallback && i.attr("class", i.attr("class") + " clickable"), i;
}
p(pp, "insertNode");
var X_ = /* @__PURE__ */ p((e8, t) => {
  dn.set(t.id, e8);
}, "setNodeElem"), V_ = /* @__PURE__ */ p(() => {
  dn.clear();
}, "clear"), Z_ = /* @__PURE__ */ p((e8) => {
  const t = dn.get(e8.id);
  D.trace(
    "Transforming node",
    e8.diff,
    e8,
    "translate(" + (e8.x - e8.width / 2 - 5) + ", " + e8.width / 2 + ")"
  );
  const r3 = 8, i = e8.diff || 0;
  return e8.clusterNode ? t.attr(
    "transform",
    "translate(" + (e8.x + i - e8.width / 2) + ", " + (e8.y - e8.height / 2 - r3) + ")"
  ) : t.attr("transform", "translate(" + e8.x + ", " + e8.y + ")"), i;
}, "positionNode"), bC = /* @__PURE__ */ p((e8, t, r3, i, a, n) => {
  t.arrowTypeStart && nc(e8, "start", t.arrowTypeStart, r3, i, a, n), t.arrowTypeEnd && nc(e8, "end", t.arrowTypeEnd, r3, i, a, n);
}, "addEdgeMarkers"), CC = {
  arrow_cross: { type: "cross", fill: false },
  arrow_point: { type: "point", fill: true },
  arrow_barb: { type: "barb", fill: true },
  arrow_circle: { type: "circle", fill: false },
  aggregation: { type: "aggregation", fill: false },
  extension: { type: "extension", fill: false },
  composition: { type: "composition", fill: true },
  dependency: { type: "dependency", fill: true },
  lollipop: { type: "lollipop", fill: false },
  only_one: { type: "onlyOne", fill: false },
  zero_or_one: { type: "zeroOrOne", fill: false },
  one_or_more: { type: "oneOrMore", fill: false },
  zero_or_more: { type: "zeroOrMore", fill: false },
  requirement_arrow: { type: "requirement_arrow", fill: false },
  requirement_contains: { type: "requirement_contains", fill: false }
}, nc = /* @__PURE__ */ p((e8, t, r3, i, a, n, o) => {
  var u;
  const s = CC[r3];
  if (!s) {
    D.warn(`Unknown arrow type: ${r3}`);
    return;
  }
  const l = s.type, h = `${a}_${n}-${l}${t === "start" ? "Start" : "End"}`;
  if (o && o.trim() !== "") {
    const d3 = o.replace(/[^\dA-Za-z]/g, "_"), f = `${h}_${d3}`;
    if (!document.getElementById(f)) {
      const g = document.getElementById(h);
      if (g) {
        const m = g.cloneNode(true);
        m.id = f, m.querySelectorAll("path, circle, line").forEach((x) => {
          x.setAttribute("stroke", o), s.fill && x.setAttribute("fill", o);
        }), (u = g.parentNode) == null || u.appendChild(m);
      }
    }
    e8.attr(`marker-${t}`, `url(${i}#${f})`);
  } else
    e8.attr(`marker-${t}`, `url(${i}#${h})`);
}, "addEdgeMarker"), Ha = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map(), K_ = /* @__PURE__ */ p(() => {
  Ha.clear(), $t.clear();
}, "clear"), di = /* @__PURE__ */ p((e8) => e8 ? e8.reduce((r3, i) => r3 + ";" + i, "") : "", "getLabelStyles"), vC = /* @__PURE__ */ p(async (e8, t) => {
  let r3 = At(dt().flowchart.htmlLabels);
  const i = await He(e8, t.label, {
    style: di(t.labelStyle),
    useHtmlLabels: r3,
    addSvgBackground: true,
    isNode: false
  });
  D.info("abc82", t, t.labelType);
  const a = e8.insert("g").attr("class", "edgeLabel"), n = a.insert("g").attr("class", "label");
  n.node().appendChild(i);
  let o = i.getBBox();
  if (r3) {
    const l = i.children[0], c = Li$1(i);
    o = l.getBoundingClientRect(), c.attr("width", o.width), c.attr("height", o.height);
  }
  n.attr("transform", "translate(" + -o.width / 2 + ", " + -o.height / 2 + ")"), Ha.set(t.id, a), t.width = o.width, t.height = o.height;
  let s;
  if (t.startLabelLeft) {
    const l = await tr(
      t.startLabelLeft,
      di(t.labelStyle)
    ), c = e8.insert("g").attr("class", "edgeTerminals"), h = c.insert("g").attr("class", "inner");
    s = h.node().appendChild(l);
    const u = l.getBBox();
    h.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")"), $t.get(t.id) || $t.set(t.id, {}), $t.get(t.id).startLeft = c, mi(s, t.startLabelLeft);
  }
  if (t.startLabelRight) {
    const l = await tr(
      t.startLabelRight,
      di(t.labelStyle)
    ), c = e8.insert("g").attr("class", "edgeTerminals"), h = c.insert("g").attr("class", "inner");
    s = c.node().appendChild(l), h.node().appendChild(l);
    const u = l.getBBox();
    h.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")"), $t.get(t.id) || $t.set(t.id, {}), $t.get(t.id).startRight = c, mi(s, t.startLabelRight);
  }
  if (t.endLabelLeft) {
    const l = await tr(t.endLabelLeft, di(t.labelStyle)), c = e8.insert("g").attr("class", "edgeTerminals"), h = c.insert("g").attr("class", "inner");
    s = h.node().appendChild(l);
    const u = l.getBBox();
    h.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")"), c.node().appendChild(l), $t.get(t.id) || $t.set(t.id, {}), $t.get(t.id).endLeft = c, mi(s, t.endLabelLeft);
  }
  if (t.endLabelRight) {
    const l = await tr(t.endLabelRight, di(t.labelStyle)), c = e8.insert("g").attr("class", "edgeTerminals"), h = c.insert("g").attr("class", "inner");
    s = h.node().appendChild(l);
    const u = l.getBBox();
    h.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")"), c.node().appendChild(l), $t.get(t.id) || $t.set(t.id, {}), $t.get(t.id).endRight = c, mi(s, t.endLabelRight);
  }
  return i;
}, "insertEdgeLabel");
function mi(e8, t) {
  dt().flowchart.htmlLabels && e8 && (e8.style.width = t.length * 9 + "px", e8.style.height = "12px");
}
p(mi, "setTerminalWidth");
var kC = /* @__PURE__ */ p((e8, t) => {
  D.debug("Moving label abc88 ", e8.id, e8.label, Ha.get(e8.id), t);
  let r3 = t.updatedPath ? t.updatedPath : t.originalPath;
  const i = dt(), { subGraphTitleTotalMargin: a } = Js(i);
  if (e8.label) {
    const n = Ha.get(e8.id);
    let o = e8.x, s = e8.y;
    if (r3) {
      const l = ge.calcLabelPosition(r3);
      D.debug(
        "Moving label " + e8.label + " from (",
        o,
        ",",
        s,
        ") to (",
        l.x,
        ",",
        l.y,
        ") abc88"
      ), t.updatedPath && (o = l.x, s = l.y);
    }
    n.attr("transform", `translate(${o}, ${s + a / 2})`);
  }
  if (e8.startLabelLeft) {
    const n = $t.get(e8.id).startLeft;
    let o = e8.x, s = e8.y;
    if (r3) {
      const l = ge.calcTerminalLabelPosition(e8.arrowTypeStart ? 10 : 0, "start_left", r3);
      o = l.x, s = l.y;
    }
    n.attr("transform", `translate(${o}, ${s})`);
  }
  if (e8.startLabelRight) {
    const n = $t.get(e8.id).startRight;
    let o = e8.x, s = e8.y;
    if (r3) {
      const l = ge.calcTerminalLabelPosition(
        e8.arrowTypeStart ? 10 : 0,
        "start_right",
        r3
      );
      o = l.x, s = l.y;
    }
    n.attr("transform", `translate(${o}, ${s})`);
  }
  if (e8.endLabelLeft) {
    const n = $t.get(e8.id).endLeft;
    let o = e8.x, s = e8.y;
    if (r3) {
      const l = ge.calcTerminalLabelPosition(e8.arrowTypeEnd ? 10 : 0, "end_left", r3);
      o = l.x, s = l.y;
    }
    n.attr("transform", `translate(${o}, ${s})`);
  }
  if (e8.endLabelRight) {
    const n = $t.get(e8.id).endRight;
    let o = e8.x, s = e8.y;
    if (r3) {
      const l = ge.calcTerminalLabelPosition(e8.arrowTypeEnd ? 10 : 0, "end_right", r3);
      o = l.x, s = l.y;
    }
    n.attr("transform", `translate(${o}, ${s})`);
  }
}, "positionEdgeLabel"), wC = /* @__PURE__ */ p((e8, t) => {
  const r3 = e8.x, i = e8.y, a = Math.abs(t.x - r3), n = Math.abs(t.y - i), o = e8.width / 2, s = e8.height / 2;
  return a >= o || n >= s;
}, "outsideNode"), _C = /* @__PURE__ */ p((e8, t, r3) => {
  D.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(r3)}
  node        : x:${e8.x} y:${e8.y} w:${e8.width} h:${e8.height}`);
  const i = e8.x, a = e8.y, n = Math.abs(i - r3.x), o = e8.width / 2;
  let s = r3.x < t.x ? o - n : o + n;
  const l = e8.height / 2, c = Math.abs(t.y - r3.y), h = Math.abs(t.x - r3.x);
  if (Math.abs(a - t.y) * o > Math.abs(i - t.x) * l) {
    let u = r3.y < t.y ? t.y - l - a : a - l - t.y;
    s = h * u / c;
    const d3 = {
      x: r3.x < t.x ? r3.x + s : r3.x - h + s,
      y: r3.y < t.y ? r3.y + c - u : r3.y - c + u
    };
    return s === 0 && (d3.x = t.x, d3.y = t.y), h === 0 && (d3.x = t.x), c === 0 && (d3.y = t.y), D.debug(`abc89 top/bottom calc, Q ${c}, q ${u}, R ${h}, r ${s}`, d3), d3;
  } else {
    r3.x < t.x ? s = t.x - o - i : s = i - o - t.x;
    let u = c * s / h, d3 = r3.x < t.x ? r3.x + h - s : r3.x - h + s, f = r3.y < t.y ? r3.y + u : r3.y - u;
    return D.debug(`sides calc abc89, Q ${c}, q ${u}, R ${h}, r ${s}`, { _x: d3, _y: f }), s === 0 && (d3 = t.x, f = t.y), h === 0 && (d3 = t.x), c === 0 && (f = t.y), { x: d3, y: f };
  }
}, "intersection"), sc = /* @__PURE__ */ p((e8, t) => {
  D.warn("abc88 cutPathAtIntersect", e8, t);
  let r3 = [], i = e8[0], a = false;
  return e8.forEach((n) => {
    if (D.info("abc88 checking point", n, t), !wC(t, n) && !a) {
      const o = _C(t, i, n);
      D.debug("abc88 inside", n, i, o), D.debug("abc88 intersection", o, t);
      let s = false;
      r3.forEach((l) => {
        s = s || l.x === o.x && l.y === o.y;
      }), r3.some((l) => l.x === o.x && l.y === o.y) ? D.warn("abc88 no intersect", o, r3) : r3.push(o), a = true;
    } else
      D.warn("abc88 outside", n, i), i = n, a || r3.push(n);
  }), D.debug("returning points", r3), r3;
}, "cutPathAtIntersect");
function gp(e8) {
  const t = [], r3 = [];
  for (let i = 1; i < e8.length - 1; i++) {
    const a = e8[i - 1], n = e8[i], o = e8[i + 1];
    (a.x === n.x && n.y === o.y && Math.abs(n.x - o.x) > 5 && Math.abs(n.y - a.y) > 5 || a.y === n.y && n.x === o.x && Math.abs(n.x - a.x) > 5 && Math.abs(n.y - o.y) > 5) && (t.push(n), r3.push(i));
  }
  return { cornerPoints: t, cornerPointPositions: r3 };
}
p(gp, "extractCornerPoints");
var oc = /* @__PURE__ */ p(function(e8, t, r3) {
  const i = t.x - e8.x, a = t.y - e8.y, n = Math.sqrt(i * i + a * a), o = r3 / n;
  return { x: t.x - o * i, y: t.y - o * a };
}, "findAdjacentPoint"), SC = /* @__PURE__ */ p(function(e8) {
  const { cornerPointPositions: t } = gp(e8), r3 = [];
  for (let i = 0; i < e8.length; i++)
    if (t.includes(i)) {
      const a = e8[i - 1], n = e8[i + 1], o = e8[i], s = oc(a, o, 5), l = oc(n, o, 5), c = l.x - s.x, h = l.y - s.y;
      r3.push(s);
      const u = Math.sqrt(2) * 2;
      let d3 = { x: o.x, y: o.y };
      if (Math.abs(n.x - a.x) > 10 && Math.abs(n.y - a.y) >= 10) {
        D.debug(
          "Corner point fixing",
          Math.abs(n.x - a.x),
          Math.abs(n.y - a.y)
        );
        const f = 5;
        o.x === s.x ? d3 = {
          x: c < 0 ? s.x - f + u : s.x + f - u,
          y: h < 0 ? s.y - u : s.y + u
        } : d3 = {
          x: c < 0 ? s.x - u : s.x + u,
          y: h < 0 ? s.y - f + u : s.y + f - u
        };
      } else
        D.debug(
          "Corner point skipping fixing",
          Math.abs(n.x - a.x),
          Math.abs(n.y - a.y)
        );
      r3.push(d3, l);
    } else
      r3.push(e8[i]);
  return r3;
}, "fixCorners"), TC = /* @__PURE__ */ p(function(e8, t, r3, i, a, n, o) {
  var H;
  const { handDrawnSeed: s } = dt();
  let l = t.points, c = false;
  const h = a;
  var u = n;
  const d3 = [];
  for (const $ in t.cssCompiledStyles)
    Zd($) || d3.push(t.cssCompiledStyles[$]);
  u.intersect && h.intersect && (l = l.slice(1, t.points.length - 1), l.unshift(h.intersect(l[0])), D.debug(
    "Last point APA12",
    t.start,
    "-->",
    t.end,
    l[l.length - 1],
    u,
    u.intersect(l[l.length - 1])
  ), l.push(u.intersect(l[l.length - 1]))), t.toCluster && (D.info("to cluster abc88", r3.get(t.toCluster)), l = sc(t.points, r3.get(t.toCluster).node), c = true), t.fromCluster && (D.debug(
    "from cluster abc88",
    r3.get(t.fromCluster),
    JSON.stringify(l, null, 2)
  ), l = sc(l.reverse(), r3.get(t.fromCluster).node).reverse(), c = true);
  let f = l.filter(($) => !Number.isNaN($.y));
  f = SC(f);
  let g = ca;
  switch (g = Ba, t.curve) {
    case "linear":
      g = Ba;
      break;
    case "basis":
      g = ca;
      break;
    case "cardinal":
      g = Iu;
      break;
    case "bumpX":
      g = Yi;
      break;
    case "bumpY":
      g = Ui$1;
      break;
    case "catmullRom":
      g = Nu;
      break;
    case "monotoneX":
      g = Yu;
      break;
    case "monotoneY":
      g = Uu;
      break;
    case "natural":
      g = Xu;
      break;
    case "step":
      g = Vu;
      break;
    case "stepAfter":
      g = Ku;
      break;
    case "stepBefore":
      g = Zu;
      break;
    default:
      g = ca;
  }
  const { x: m, y } = m0(t), x = H0().x(m).y(y).curve(g);
  let b;
  switch (t.thickness) {
    case "normal":
      b = "edge-thickness-normal";
      break;
    case "thick":
      b = "edge-thickness-thick";
      break;
    case "invisible":
      b = "edge-thickness-invisible";
      break;
    default:
      b = "edge-thickness-normal";
  }
  switch (t.pattern) {
    case "solid":
      b += " edge-pattern-solid";
      break;
    case "dotted":
      b += " edge-pattern-dotted";
      break;
    case "dashed":
      b += " edge-pattern-dashed";
      break;
    default:
      b += " edge-pattern-solid";
  }
  let v, S = x(f);
  const _ = Array.isArray(t.style) ? t.style : [t.style];
  let C = _.find(($) => $ == null ? void 0 : $.startsWith("stroke:"));
  if (t.look === "handDrawn") {
    const $ = Z.svg(e8);
    Object.assign([], f);
    const A = $.path(S, {
      roughness: 0.3,
      seed: s
    });
    b += " transition", v = Li$1(A).select("path").attr("id", t.id).attr("class", " " + b + (t.classes ? " " + t.classes : "")).attr("style", _ ? _.reduce((N, F) => N + ";" + F, "") : "");
    let j = v.attr("d");
    v.attr("d", j), e8.node().appendChild(v.node());
  } else {
    const $ = d3.join(";"), A = _ ? _.reduce((F, M) => F + M + ";", "") : "";
    let j = "";
    t.animate && (j = " edge-animation-fast"), t.animation && (j = " edge-animation-" + t.animation);
    const N = $ ? $ + ";" + A + ";" : A;
    v = e8.append("path").attr("d", S).attr("id", t.id).attr(
      "class",
      " " + b + (t.classes ? " " + t.classes : "") + (j ?? "")
    ).attr("style", N), C = (H = N.match(/stroke:([^;]+)/)) == null ? void 0 : H[1];
  }
  let k = "";
  (dt().flowchart.arrowMarkerAbsolute || dt().state.arrowMarkerAbsolute) && (k = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, k = k.replace(/\(/g, "\\(").replace(/\)/g, "\\)")), D.info("arrowTypeStart", t.arrowTypeStart), D.info("arrowTypeEnd", t.arrowTypeEnd), bC(v, t, k, o, i, C);
  let P = {};
  return c && (P.updatedPath = l), P.originalPath = t.points, P;
}, "insertEdge"), BC = /* @__PURE__ */ p((e8, t, r3, i) => {
  t.forEach((a) => {
    HC[a](e8, r3, i);
  });
}, "insertMarkers"), LC = /* @__PURE__ */ p((e8, t, r3) => {
  D.trace("Making markers for ", r3), e8.append("defs").append("marker").attr("id", r3 + "_" + t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e8.append("defs").append("marker").attr("id", r3 + "_" + t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
}, "extension"), AC = /* @__PURE__ */ p((e8, t, r3) => {
  e8.append("defs").append("marker").attr("id", r3 + "_" + t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e8.append("defs").append("marker").attr("id", r3 + "_" + t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "composition"), MC = /* @__PURE__ */ p((e8, t, r3) => {
  e8.append("defs").append("marker").attr("id", r3 + "_" + t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e8.append("defs").append("marker").attr("id", r3 + "_" + t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "aggregation"), EC = /* @__PURE__ */ p((e8, t, r3) => {
  e8.append("defs").append("marker").attr("id", r3 + "_" + t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e8.append("defs").append("marker").attr("id", r3 + "_" + t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "dependency"), FC = /* @__PURE__ */ p((e8, t, r3) => {
  e8.append("defs").append("marker").attr("id", r3 + "_" + t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e8.append("defs").append("marker").attr("id", r3 + "_" + t + "-lollipopEnd").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
}, "lollipop"), OC = /* @__PURE__ */ p((e8, t, r3) => {
  e8.append("marker").attr("id", r3 + "_" + t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e8.append("marker").attr("id", r3 + "_" + t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "point"), $C = /* @__PURE__ */ p((e8, t, r3) => {
  e8.append("marker").attr("id", r3 + "_" + t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e8.append("marker").attr("id", r3 + "_" + t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "circle"), DC = /* @__PURE__ */ p((e8, t, r3) => {
  e8.append("marker").attr("id", r3 + "_" + t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e8.append("marker").attr("id", r3 + "_" + t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
}, "cross"), RC = /* @__PURE__ */ p((e8, t, r3) => {
  e8.append("defs").append("marker").attr("id", r3 + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "barb"), IC = /* @__PURE__ */ p((e8, t, r3) => {
  e8.append("defs").append("marker").attr("id", r3 + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18"), e8.append("defs").append("marker").attr("id", r3 + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18");
}, "only_one"), PC = /* @__PURE__ */ p((e8, t, r3) => {
  const i = e8.append("defs").append("marker").attr("id", r3 + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  i.append("circle").attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6), i.append("path").attr("d", "M9,0 L9,18");
  const a = e8.append("defs").append("marker").attr("id", r3 + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  a.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6), a.append("path").attr("d", "M21,0 L21,18");
}, "zero_or_one"), NC = /* @__PURE__ */ p((e8, t, r3) => {
  e8.append("defs").append("marker").attr("id", r3 + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"), e8.append("defs").append("marker").attr("id", r3 + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
}, "one_or_more"), zC = /* @__PURE__ */ p((e8, t, r3) => {
  const i = e8.append("defs").append("marker").attr("id", r3 + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  i.append("circle").attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6), i.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
  const a = e8.append("defs").append("marker").attr("id", r3 + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  a.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6), a.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
}, "zero_or_more"), WC = /* @__PURE__ */ p((e8, t, r3) => {
  e8.append("defs").append("marker").attr("id", r3 + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("path").attr(
    "d",
    `M0,0
      L20,10
      M20,10
      L0,20`
  );
}, "requirement_arrow"), qC = /* @__PURE__ */ p((e8, t, r3) => {
  const i = e8.append("defs").append("marker").attr("id", r3 + "_" + t + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("g");
  i.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), i.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), i.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10);
}, "requirement_contains"), HC = {
  extension: LC,
  composition: AC,
  aggregation: MC,
  dependency: EC,
  lollipop: FC,
  point: OC,
  circle: $C,
  cross: DC,
  barb: RC,
  only_one: IC,
  zero_or_one: PC,
  one_or_more: NC,
  zero_or_more: zC,
  requirement_arrow: WC,
  requirement_contains: qC
}, jC = BC, YC = {
  common: Hr,
  getConfig: Jt,
  insertCluster: J2,
  insertEdge: TC,
  insertEdgeLabel: vC,
  insertMarkers: jC,
  insertNode: pp,
  interpolateToCurve: co,
  labelHelper: ot,
  log: D,
  positionEdgeLabel: kC
}, Ai = {}, mp = /* @__PURE__ */ p((e8) => {
  for (const t of e8)
    Ai[t.name] = t;
}, "registerLayoutLoaders"), UC = /* @__PURE__ */ p(() => {
  mp([
    {
      name: "dagre",
      loader: /* @__PURE__ */ p(async () => await __vitePreload(() => import("./dagre-OKDRZEBW-BhBZ1LpX-txWuJrh_.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0, import.meta.url), "loader")
    }
  ]);
}, "registerDefaultLayoutLoaders");
UC();
var Q_ = /* @__PURE__ */ p(async (e8, t) => {
  if (!(e8.layoutAlgorithm in Ai))
    throw new Error(`Unknown layout algorithm: ${e8.layoutAlgorithm}`);
  const r3 = Ai[e8.layoutAlgorithm];
  return (await r3.loader()).render(e8, t, YC, {
    algorithm: r3.algorithm
  });
}, "render"), J_ = /* @__PURE__ */ p((e8 = "", { fallback: t = "dagre" } = {}) => {
  if (e8 in Ai)
    return e8;
  if (t in Ai)
    return D.warn(`Layout algorithm ${e8} is not registered. Using ${t} as fallback.`), t;
  throw new Error(`Both layout algorithms ${e8} and ${t} are not registered.`);
}, "getRegisteredLayoutAlgorithm"), lc = {
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
}, GC = /* @__PURE__ */ p((e8) => {
  var a;
  const { securityLevel: t } = dt();
  let r3 = Li$1("body");
  if (t === "sandbox") {
    const o = ((a = Li$1(`#i${e8}`).node()) == null ? void 0 : a.contentDocument) ?? document;
    r3 = Li$1(o.body);
  }
  return r3.select(`#${e8}`);
}, "selectSvgElement"), yp = "comm", xp = "rule", bp = "decl", XC = "@import", VC = "@namespace", ZC = "@keyframes", KC = "@layer", Cp = Math.abs, Mo = String.fromCharCode;
function vp(e8) {
  return e8.trim();
}
function fa(e8, t, r3) {
  return e8.replace(t, r3);
}
function QC(e8, t, r3) {
  return e8.indexOf(t, r3);
}
function Sr(e8, t) {
  return e8.charCodeAt(t) | 0;
}
function Wr(e8, t, r3) {
  return e8.slice(t, r3);
}
function pe(e8) {
  return e8.length;
}
function JC(e8) {
  return e8.length;
}
function Ji(e8, t) {
  return t.push(e8), e8;
}
var fn = 1, qr = 1, kp = 0, se = 0, wt = 0, Xr = "";
function Eo(e8, t, r3, i, a, n, o, s) {
  return { value: e8, root: t, parent: r3, type: i, props: a, children: n, line: fn, column: qr, length: o, return: "", siblings: s };
}
function tv() {
  return wt;
}
function ev() {
  return wt = se > 0 ? Sr(Xr, --se) : 0, qr--, wt === 10 && (qr = 1, fn--), wt;
}
function he() {
  return wt = se < kp ? Sr(Xr, se++) : 0, qr++, wt === 10 && (qr = 1, fn++), wt;
}
function Re() {
  return Sr(Xr, se);
}
function pa() {
  return se;
}
function pn(e8, t) {
  return Wr(Xr, e8, t);
}
function Mi(e8) {
  switch (e8) {
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
function rv(e8) {
  return fn = qr = 1, kp = pe(Xr = e8), se = 0, [];
}
function iv(e8) {
  return Xr = "", e8;
}
function qn(e8) {
  return vp(pn(se - 1, As(e8 === 91 ? e8 + 2 : e8 === 40 ? e8 + 1 : e8)));
}
function av(e8) {
  for (; (wt = Re()) && wt < 33; )
    he();
  return Mi(e8) > 2 || Mi(wt) > 3 ? "" : " ";
}
function nv(e8, t) {
  for (; --t && he() && !(wt < 48 || wt > 102 || wt > 57 && wt < 65 || wt > 70 && wt < 97); )
    ;
  return pn(e8, pa() + (t < 6 && Re() == 32 && he() == 32));
}
function As(e8) {
  for (; he(); )
    switch (wt) {
      case e8:
        return se;
      case 34:
      case 39:
        e8 !== 34 && e8 !== 39 && As(wt);
        break;
      case 40:
        e8 === 41 && As(e8);
        break;
      case 92:
        he();
        break;
    }
  return se;
}
function sv(e8, t) {
  for (; he() && e8 + wt !== 57; )
    if (e8 + wt === 84 && Re() === 47)
      break;
  return "/*" + pn(t, se - 1) + "*" + Mo(e8 === 47 ? e8 : he());
}
function ov(e8) {
  for (; !Mi(Re()); )
    he();
  return pn(e8, se);
}
function lv(e8) {
  return iv(ga("", null, null, null, [""], e8 = rv(e8), 0, [0], e8));
}
function ga(e8, t, r3, i, a, n, o, s, l) {
  for (var c = 0, h = 0, u = o, d3 = 0, f = 0, g = 0, m = 1, y = 1, x = 1, b = 0, v = "", S = a, _ = n, C = i, k = v; y; )
    switch (g = b, b = he()) {
      case 40:
        if (g != 108 && Sr(k, u - 1) == 58) {
          QC(k += fa(qn(b), "&", "&\f"), "&\f", Cp(c ? s[c - 1] : 0)) != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += qn(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += av(g);
        break;
      case 92:
        k += nv(pa() - 1, 7);
        continue;
      case 47:
        switch (Re()) {
          case 42:
          case 47:
            Ji(cv(sv(he(), pa()), t, r3, l), l), (Mi(g || 1) == 5 || Mi(Re() || 1) == 5) && pe(k) && Wr(k, -1, void 0) !== " " && (k += " ");
            break;
          default:
            k += "/";
        }
        break;
      case 123 * m:
        s[c++] = pe(k) * x;
      case 125 * m:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            y = 0;
          case 59 + h:
            x == -1 && (k = fa(k, /\f/g, "")), f > 0 && (pe(k) - u || m === 0 && g === 47) && Ji(f > 32 ? hc(k + ";", i, r3, u - 1, l) : hc(fa(k, " ", "") + ";", i, r3, u - 2, l), l);
            break;
          case 59:
            k += ";";
          default:
            if (Ji(C = cc(k, t, r3, c, h, a, s, v, S = [], _ = [], u, n), n), b === 123)
              if (h === 0)
                ga(k, t, C, C, S, n, u, s, _);
              else {
                switch (d3) {
                  case 99:
                    if (Sr(k, 3) === 110)
                      break;
                  case 108:
                    if (Sr(k, 2) === 97)
                      break;
                  default:
                    h = 0;
                  case 100:
                  case 109:
                  case 115:
                }
                h ? ga(e8, C, C, i && Ji(cc(e8, C, C, 0, 0, a, s, v, a, S = [], u, _), _), a, _, u, s, i ? S : _) : ga(k, C, C, C, [""], _, 0, s, _);
              }
        }
        c = h = f = 0, m = x = 1, v = k = "", u = o;
        break;
      case 58:
        u = 1 + pe(k), f = g;
      default:
        if (m < 1) {
          if (b == 123)
            --m;
          else if (b == 125 && m++ == 0 && ev() == 125)
            continue;
        }
        switch (k += Mo(b), b * m) {
          case 38:
            x = h > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            s[c++] = (pe(k) - 1) * x, x = 1;
            break;
          case 64:
            Re() === 45 && (k += qn(he())), d3 = Re(), h = u = pe(v = k += ov(pa())), b++;
            break;
          case 45:
            g === 45 && pe(k) == 2 && (m = 0);
        }
    }
  return n;
}
function cc(e8, t, r3, i, a, n, o, s, l, c, h, u) {
  for (var d3 = a - 1, f = a === 0 ? n : [""], g = JC(f), m = 0, y = 0, x = 0; m < i; ++m)
    for (var b = 0, v = Wr(e8, d3 + 1, d3 = Cp(y = o[m])), S = e8; b < g; ++b)
      (S = vp(y > 0 ? f[b] + " " + v : fa(v, /&\f/g, f[b]))) && (l[x++] = S);
  return Eo(e8, t, r3, a === 0 ? xp : s, l, c, h, u);
}
function cv(e8, t, r3, i) {
  return Eo(e8, t, r3, yp, Mo(tv()), Wr(e8, 2, -2), 0, i);
}
function hc(e8, t, r3, i, a) {
  return Eo(e8, t, r3, bp, Wr(e8, 0, i), Wr(e8, i + 1, -1), i, a);
}
function Ms(e8, t) {
  for (var r3 = "", i = 0; i < e8.length; i++)
    r3 += t(e8[i], i, e8, t) || "";
  return r3;
}
function hv(e8, t, r3, i) {
  switch (e8.type) {
    case KC:
      if (e8.children.length)
        break;
    case XC:
    case VC:
    case bp:
      return e8.return = e8.return || e8.value;
    case yp:
      return "";
    case ZC:
      return e8.return = e8.value + "{" + Ms(e8.children, i) + "}";
    case xp:
      if (!pe(e8.value = e8.props.join(",")))
        return "";
  }
  return pe(r3 = Ms(e8.children, i)) ? e8.return = e8.value + "{" + r3 + "}" : "";
}
var uv = ed(Object.keys, Object), dv = Object.prototype, fv = dv.hasOwnProperty;
function pv(e8) {
  if (!an(e8))
    return uv(e8);
  var t = [];
  for (var r3 in Object(e8))
    fv.call(e8, r3) && r3 != "constructor" && t.push(r3);
  return t;
}
var Es = cr(xe, "DataView"), Fs = cr(xe, "Promise"), Os = cr(xe, "Set"), $s = cr(xe, "WeakMap"), uc = "[object Map]", gv = "[object Object]", dc = "[object Promise]", fc = "[object Set]", pc = "[object WeakMap]", gc = "[object DataView]", mv = lr(Es), yv = lr(Li), xv = lr(Fs), bv = lr(Os), Cv = lr($s), Ze = jr;
(Es && Ze(new Es(new ArrayBuffer(1))) != gc || Li && Ze(new Li()) != uc || Fs && Ze(Fs.resolve()) != dc || Os && Ze(new Os()) != fc || $s && Ze(new $s()) != pc) && (Ze = function(e8) {
  var t = jr(e8), r3 = t == gv ? e8.constructor : void 0, i = r3 ? lr(r3) : "";
  if (i)
    switch (i) {
      case mv:
        return gc;
      case yv:
        return uc;
      case xv:
        return dc;
      case bv:
        return fc;
      case Cv:
        return pc;
    }
  return t;
});
var vv = "[object Map]", kv = "[object Set]", wv = Object.prototype, _v = wv.hasOwnProperty;
function mc(e8) {
  if (e8 == null)
    return true;
  if (nn(e8) && ($a(e8) || typeof e8 == "string" || typeof e8.splice == "function" || oo(e8) || lo(e8) || Oa(e8)))
    return !e8.length;
  var t = Ze(e8);
  if (t == vv || t == kv)
    return !e8.size;
  if (an(e8))
    return !pv(e8).length;
  for (var r3 in e8)
    if (_v.call(e8, r3))
      return false;
  return true;
}
var wp = "c4", Sv = /* @__PURE__ */ p((e8) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e8), "detector"), Tv = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./c4Diagram-VJAJSXHY-Cfp79fMA-OccV301Z.js"), true ? __vite__mapDeps([10,11,8,6,7,9]) : void 0, import.meta.url);
  return { id: wp, diagram: e8 };
}, "loader"), Bv = {
  id: wp,
  detector: Sv,
  loader: Tv
}, Lv = Bv, _p = "flowchart", Av = /* @__PURE__ */ p((e8, t) => {
  var r3, i;
  return ((r3 = t == null ? void 0 : t.flowchart) == null ? void 0 : r3.defaultRenderer) === "dagre-wrapper" || ((i = t == null ? void 0 : t.flowchart) == null ? void 0 : i.defaultRenderer) === "elk" ? false : /^\s*graph/.test(e8);
}, "detector"), Mv = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./flowDiagram-4HSFHLVR-CKX8T_JP-QADPa4my.js"), true ? __vite__mapDeps([12,13,8,14,6,7,9]) : void 0, import.meta.url);
  return { id: _p, diagram: e8 };
}, "loader"), Ev = {
  id: _p,
  detector: Av,
  loader: Mv
}, Fv = Ev, Sp = "flowchart-v2", Ov = /* @__PURE__ */ p((e8, t) => {
  var r3, i, a;
  return ((r3 = t == null ? void 0 : t.flowchart) == null ? void 0 : r3.defaultRenderer) === "dagre-d3" ? false : (((i = t == null ? void 0 : t.flowchart) == null ? void 0 : i.defaultRenderer) === "elk" && (t.layout = "elk"), /^\s*graph/.test(e8) && ((a = t == null ? void 0 : t.flowchart) == null ? void 0 : a.defaultRenderer) === "dagre-wrapper" ? true : /^\s*flowchart/.test(e8));
}, "detector"), $v = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./flowDiagram-4HSFHLVR-CKX8T_JP-QADPa4my.js"), true ? __vite__mapDeps([12,13,8,14,6,7,9]) : void 0, import.meta.url);
  return { id: Sp, diagram: e8 };
}, "loader"), Dv = {
  id: Sp,
  detector: Ov,
  loader: $v
}, Rv = Dv, Tp = "er", Iv = /* @__PURE__ */ p((e8) => /^\s*erDiagram/.test(e8), "detector"), Pv = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./erDiagram-Q7BY3M3F-CQ8Lz__E-8hQyLO77.js"), true ? __vite__mapDeps([15,13,8,14,6,7,9]) : void 0, import.meta.url);
  return { id: Tp, diagram: e8 };
}, "loader"), Nv = {
  id: Tp,
  detector: Iv,
  loader: Pv
}, zv = Nv, Bp = "gitGraph", Wv = /* @__PURE__ */ p((e8) => /^\s*gitGraph/.test(e8), "detector"), qv = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./gitGraphDiagram-7IBYFJ6S-3GXB7T1a-8H6aGSop.js"), true ? __vite__mapDeps([16,17,18,19,6,7,2,4,5,8,9]) : void 0, import.meta.url);
  return { id: Bp, diagram: e8 };
}, "loader"), Hv = {
  id: Bp,
  detector: Wv,
  loader: qv
}, jv = Hv, Lp = "gantt", Yv = /* @__PURE__ */ p((e8) => /^\s*gantt/.test(e8), "detector"), Uv = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./ganttDiagram-APWFNJXF-DMVinqOr-nKqdy9-3.js"), true ? __vite__mapDeps([20,6,7,8,21,22,23,9]) : void 0, import.meta.url);
  return { id: Lp, diagram: e8 };
}, "loader"), Gv = {
  id: Lp,
  detector: Yv,
  loader: Uv
}, Xv = Gv, Ap = "info", Vv = /* @__PURE__ */ p((e8) => /^\s*info/.test(e8), "detector"), Zv = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./infoDiagram-PH2N3AL5-CmIz_rS6-AL_wcXT1.js"), true ? __vite__mapDeps([24,19,6,7,2,4,5,8,9]) : void 0, import.meta.url);
  return { id: Ap, diagram: e8 };
}, "loader"), Kv = {
  id: Ap,
  detector: Vv,
  loader: Zv
}, Mp = "pie", Qv = /* @__PURE__ */ p((e8) => /^\s*pie/.test(e8), "detector"), Jv = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./pieDiagram-IB7DONF6-B9a8I_kR-OAUW9cos.js"), true ? __vite__mapDeps([25,17,19,6,7,2,4,5,8,26,27,22,9]) : void 0, import.meta.url);
  return { id: Mp, diagram: e8 };
}, "loader"), tk = {
  id: Mp,
  detector: Qv,
  loader: Jv
}, Ep = "quadrantChart", ek = /* @__PURE__ */ p((e8) => /^\s*quadrantChart/.test(e8), "detector"), rk = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./quadrantDiagram-7GDLP6J5-DdYK6qWC-dANT7nla.js"), true ? __vite__mapDeps([28,8,21,22,6,7,9]) : void 0, import.meta.url);
  return { id: Ep, diagram: e8 };
}, "loader"), ik = {
  id: Ep,
  detector: ek,
  loader: rk
}, ak = ik, Fp = "xychart", nk = /* @__PURE__ */ p((e8) => /^\s*xychart-beta/.test(e8), "detector"), sk = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./xychartDiagram-VJFVF3MP-BYAU5rlp-BUqxVjns.js"), true ? __vite__mapDeps([29,8,22,27,21,6,7,9]) : void 0, import.meta.url);
  return { id: Fp, diagram: e8 };
}, "loader"), ok = {
  id: Fp,
  detector: nk,
  loader: sk
}, lk = ok, Op = "requirement", ck = /* @__PURE__ */ p((e8) => /^\s*requirement(Diagram)?/.test(e8), "detector"), hk = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./requirementDiagram-KVF5MWMF-ByvHGzIT-bVGLG4B7.js"), true ? __vite__mapDeps([30,13,8,6,7,9]) : void 0, import.meta.url);
  return { id: Op, diagram: e8 };
}, "loader"), uk = {
  id: Op,
  detector: ck,
  loader: hk
}, dk = uk, $p = "sequence", fk = /* @__PURE__ */ p((e8) => /^\s*sequenceDiagram/.test(e8), "detector"), pk = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./sequenceDiagram-X6HHIX6F-Cqm_WHRg-91kFLHNx.js"), true ? __vite__mapDeps([31,11,18,8,6,7,9]) : void 0, import.meta.url);
  return { id: $p, diagram: e8 };
}, "loader"), gk = {
  id: $p,
  detector: fk,
  loader: pk
}, mk = gk, Dp = "class", yk = /* @__PURE__ */ p((e8, t) => {
  var r3;
  return ((r3 = t == null ? void 0 : t.class) == null ? void 0 : r3.defaultRenderer) === "dagre-wrapper" ? false : /^\s*classDiagram/.test(e8);
}, "detector"), xk = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./classDiagram-GIVACNV2-BeOe6uk8-vCo1EQwC.js"), true ? __vite__mapDeps([32,33,13,8,6,7,9]) : void 0, import.meta.url);
  return { id: Dp, diagram: e8 };
}, "loader"), bk = {
  id: Dp,
  detector: yk,
  loader: xk
}, Ck = bk, Rp = "classDiagram", vk = /* @__PURE__ */ p((e8, t) => {
  var r3;
  return /^\s*classDiagram/.test(e8) && ((r3 = t == null ? void 0 : t.class) == null ? void 0 : r3.defaultRenderer) === "dagre-wrapper" ? true : /^\s*classDiagram-v2/.test(e8);
}, "detector"), kk = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./classDiagram-v2-COTLJTTW-BeOe6uk8-vCo1EQwC.js"), true ? __vite__mapDeps([34,33,13,8,6,7,9]) : void 0, import.meta.url);
  return { id: Rp, diagram: e8 };
}, "loader"), wk = {
  id: Rp,
  detector: vk,
  loader: kk
}, _k = wk, Ip = "state", Sk = /* @__PURE__ */ p((e8, t) => {
  var r3;
  return ((r3 = t == null ? void 0 : t.state) == null ? void 0 : r3.defaultRenderer) === "dagre-wrapper" ? false : /^\s*stateDiagram/.test(e8);
}, "detector"), Tk = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./stateDiagram-DGXRK772-ii8DucS0-wJ3R1ARC.js"), true ? __vite__mapDeps([35,36,13,8,1,2,3,4,6,7,9]) : void 0, import.meta.url);
  return { id: Ip, diagram: e8 };
}, "loader"), Bk = {
  id: Ip,
  detector: Sk,
  loader: Tk
}, Lk = Bk, Pp = "stateDiagram", Ak = /* @__PURE__ */ p((e8, t) => {
  var r3;
  return !!(/^\s*stateDiagram-v2/.test(e8) || /^\s*stateDiagram/.test(e8) && ((r3 = t == null ? void 0 : t.state) == null ? void 0 : r3.defaultRenderer) === "dagre-wrapper");
}, "detector"), Mk = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./stateDiagram-v2-YXO3MK2T-H0pi9OYg-IJT7p2bH.js"), true ? __vite__mapDeps([37,36,13,8,6,7,9]) : void 0, import.meta.url);
  return { id: Pp, diagram: e8 };
}, "loader"), Ek = {
  id: Pp,
  detector: Ak,
  loader: Mk
}, Fk = Ek, Np = "journey", Ok = /* @__PURE__ */ p((e8) => /^\s*journey/.test(e8), "detector"), $k = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./journeyDiagram-U35MCT3I-Aqt3_X0t-645Mc91G.js"), true ? __vite__mapDeps([38,11,8,26,6,7,9]) : void 0, import.meta.url);
  return { id: Np, diagram: e8 };
}, "loader"), Dk = {
  id: Np,
  detector: Ok,
  loader: $k
}, Rk = Dk, Ik = /* @__PURE__ */ p((e8, t, r3) => {
  D.debug(`rendering svg for syntax error
`);
  const i = GC(t), a = i.append("g");
  i.attr("viewBox", "0 0 2412 512"), Xc(i, 100, 512, true), a.append("path").attr("class", "error-icon").attr(
    "d",
    "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
  ), a.append("path").attr("class", "error-icon").attr(
    "d",
    "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
  ), a.append("path").attr("class", "error-icon").attr(
    "d",
    "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
  ), a.append("path").attr("class", "error-icon").attr(
    "d",
    "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
  ), a.append("path").attr("class", "error-icon").attr(
    "d",
    "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
  ), a.append("path").attr("class", "error-icon").attr(
    "d",
    "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
  ), a.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), a.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${r3}`);
}, "draw"), zp = { draw: Ik }, Pk = zp, Nk = {
  db: {},
  renderer: zp,
  parser: {
    parse: /* @__PURE__ */ p(() => {
    }, "parse")
  }
}, zk = Nk, Wp = "flowchart-elk", Wk = /* @__PURE__ */ p((e8, t = {}) => {
  var r3;
  return (
    // If diagram explicitly states flowchart-elk
    /^\s*flowchart-elk/.test(e8) || // If a flowchart/graph diagram has their default renderer set to elk
    /^\s*flowchart|graph/.test(e8) && ((r3 = t == null ? void 0 : t.flowchart) == null ? void 0 : r3.defaultRenderer) === "elk" ? (t.layout = "elk", true) : false
  );
}, "detector"), qk = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./flowDiagram-4HSFHLVR-CKX8T_JP-QADPa4my.js"), true ? __vite__mapDeps([12,13,8,14,6,7,9]) : void 0, import.meta.url);
  return { id: Wp, diagram: e8 };
}, "loader"), Hk = {
  id: Wp,
  detector: Wk,
  loader: qk
}, jk = Hk, qp = "timeline", Yk = /* @__PURE__ */ p((e8) => /^\s*timeline/.test(e8), "detector"), Uk = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./timeline-definition-BDJGKUSR-B-UW6Gps-O2X9ve_b.js"), true ? __vite__mapDeps([39,8,26,6,7,9]) : void 0, import.meta.url);
  return { id: qp, diagram: e8 };
}, "loader"), Gk = {
  id: qp,
  detector: Yk,
  loader: Uk
}, Xk = Gk, Hp = "mindmap", Vk = /* @__PURE__ */ p((e8) => /^\s*mindmap/.test(e8), "detector"), Zk = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./mindmap-definition-ALO5MXBD-DUhYmv1v-5gCQLroC.js"), true ? __vite__mapDeps([40,41,6,7,8,9]) : void 0, import.meta.url);
  return { id: Hp, diagram: e8 };
}, "loader"), Kk = {
  id: Hp,
  detector: Vk,
  loader: Zk
}, Qk = Kk, jp = "kanban", Jk = /* @__PURE__ */ p((e8) => /^\s*kanban/.test(e8), "detector"), tw = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./kanban-definition-NDS4AKOZ-4OHb06Bt-nD8Aoyp4.js"), true ? __vite__mapDeps([42,6,7,8,9]) : void 0, import.meta.url);
  return { id: jp, diagram: e8 };
}, "loader"), ew = {
  id: jp,
  detector: Jk,
  loader: tw
}, rw = ew, Yp = "sankey", iw = /* @__PURE__ */ p((e8) => /^\s*sankey-beta/.test(e8), "detector"), aw = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./sankeyDiagram-QLVOVGJD-lixt867K-jpvjv8kO.js"), true ? __vite__mapDeps([43,8,27,22,44,6,7,9]) : void 0, import.meta.url);
  return { id: Yp, diagram: e8 };
}, "loader"), nw = {
  id: Yp,
  detector: iw,
  loader: aw
}, sw = nw, Up = "packet", ow = /* @__PURE__ */ p((e8) => /^\s*packet-beta/.test(e8), "detector"), lw = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./diagram-VNBRO52H-B6wDDMHH-Tn4JmQoq.js"), true ? __vite__mapDeps([45,17,19,6,7,2,4,5,8,9]) : void 0, import.meta.url);
  return { id: Up, diagram: e8 };
}, "loader"), cw = {
  id: Up,
  detector: ow,
  loader: lw
}, Gp = "radar", hw = /* @__PURE__ */ p((e8) => /^\s*radar-beta/.test(e8), "detector"), uw = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./diagram-SSKATNLV-BxTOMe4J-7OXYLKs4.js"), true ? __vite__mapDeps([46,17,19,6,7,2,4,5,8,9]) : void 0, import.meta.url);
  return { id: Gp, diagram: e8 };
}, "loader"), dw = {
  id: Gp,
  detector: hw,
  loader: uw
}, Xp = "block", fw = /* @__PURE__ */ p((e8) => /^\s*block-beta/.test(e8), "detector"), pw = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./blockDiagram-JOT3LUYC-BX5yKVBz-EwzGUEyL.js"), true ? __vite__mapDeps([47,5,2,8,1,14,6,7,9]) : void 0, import.meta.url);
  return { id: Xp, diagram: e8 };
}, "loader"), gw = {
  id: Xp,
  detector: fw,
  loader: pw
}, mw = gw, Vp = "architecture", yw = /* @__PURE__ */ p((e8) => /^\s*architecture/.test(e8), "detector"), xw = /* @__PURE__ */ p(async () => {
  const { diagram: e8 } = await __vitePreload(() => import("./architectureDiagram-IEHRJDOE-7A4i_-7k-8O_bU46j.js"), true ? __vite__mapDeps([48,17,18,19,6,7,2,4,5,41,8,9]) : void 0, import.meta.url);
  return { id: Vp, diagram: e8 };
}, "loader"), bw = {
  id: Vp,
  detector: yw,
  loader: xw
}, Cw = bw, yc = false, gn = /* @__PURE__ */ p(() => {
  yc || (yc = true, ba("error", zk, (e8) => e8.toLowerCase().trim() === "error"), ba(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: /* @__PURE__ */ p(() => {
        }, "clear")
      },
      styles: {},
      // should never be used
      renderer: {
        draw: /* @__PURE__ */ p(() => {
        }, "draw")
      },
      parser: {
        parse: /* @__PURE__ */ p(() => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }, "parse")
      },
      init: /* @__PURE__ */ p(() => null, "init")
      // no op
    },
    (e8) => e8.toLowerCase().trimStart().startsWith("---")
  ), Dc(
    Lv,
    rw,
    _k,
    Ck,
    zv,
    Xv,
    Kv,
    tk,
    dk,
    mk,
    jk,
    Rv,
    Fv,
    Qk,
    Xk,
    jv,
    Fk,
    Lk,
    Rk,
    ak,
    sw,
    cw,
    lk,
    mw,
    Cw,
    dw
  ));
}, "addDiagrams"), vw = /* @__PURE__ */ p(async () => {
  D.debug("Loading registered diagrams");
  const t = (await Promise.allSettled(
    Object.entries(Dr).map(async ([r3, { detector: i, loader: a }]) => {
      if (a)
        try {
          es(r3);
        } catch {
          try {
            const { diagram: n, id: o } = await a();
            ba(o, n, i);
          } catch (n) {
            throw D.error(`Failed to load external diagram with key ${r3}. Removing from detectors.`), delete Dr[r3], n;
          }
        }
    })
  )).filter((r3) => r3.status === "rejected");
  if (t.length > 0) {
    D.error(`Failed to load ${t.length} external diagrams`);
    for (const r3 of t)
      D.error(r3);
    throw new Error(`Failed to load ${t.length} external diagrams`);
  }
}, "loadRegisteredDiagrams"), kw = "graphics-document document";
function Zp(e8, t) {
  e8.attr("role", kw), t !== "" && e8.attr("aria-roledescription", t);
}
p(Zp, "setA11yDiagramInfo");
function Kp(e8, t, r3, i) {
  if (e8.insert !== void 0) {
    if (r3) {
      const a = `chart-desc-${i}`;
      e8.attr("aria-describedby", a), e8.insert("desc", ":first-child").attr("id", a).text(r3);
    }
    if (t) {
      const a = `chart-title-${i}`;
      e8.attr("aria-labelledby", a), e8.insert("title", ":first-child").attr("id", a).text(t);
    }
  }
}
p(Kp, "addSVGa11yTitleDescription");
var er, Ds = (er = class {
  constructor(t, r3, i, a, n) {
    this.type = t, this.text = r3, this.db = i, this.parser = a, this.renderer = n;
  }
  static async fromText(t, r3 = {}) {
    var c, h;
    const i = Jt(), a = Ns(t, i);
    t = H1(t) + `
`;
    try {
      es(a);
    } catch {
      const u = mm(a);
      if (!u)
        throw new $c(`Diagram ${a} not found.`);
      const { id: d3, diagram: f } = await u();
      ba(d3, f);
    }
    const { db: n, parser: o, renderer: s, init: l } = es(a);
    return o.parser && (o.parser.yy = n), (c = n.clear) == null || c.call(n), l == null || l(i), r3.title && ((h = n.setDiagramTitle) == null || h.call(n, r3.title)), await o.parse(t), new er(a, t, n, o, s);
  }
  async render(t, r3) {
    await this.renderer.draw(this.text, t, r3, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
}, p(er, "Diagram"), er), xc = [], ww = /* @__PURE__ */ p(() => {
  xc.forEach((e8) => {
    e8();
  }), xc = [];
}, "attachFunctions"), _w = /* @__PURE__ */ p((e8) => e8.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(), "cleanupComments");
function Qp(e8) {
  const t = e8.match(Oc);
  if (!t)
    return {
      text: e8,
      metadata: {}
    };
  let r3 = g0(t[1], {
    // To support config, we need JSON schema.
    // https://www.yaml.org/spec/1.2/spec.html#id2803231
    schema: p0
  }) ?? {};
  r3 = typeof r3 == "object" && !Array.isArray(r3) ? r3 : {};
  const i = {};
  return r3.displayMode && (i.displayMode = r3.displayMode.toString()), r3.title && (i.title = r3.title.toString()), r3.config && (i.config = r3.config), {
    text: e8.slice(t[0].length),
    metadata: i
  };
}
p(Qp, "extractFrontMatter");
var Sw = /* @__PURE__ */ p((e8) => e8.replace(/\r\n?/g, `
`).replace(
  /<(\w+)([^>]*)>/g,
  (t, r3, i) => "<" + r3 + i.replace(/="([^"]*)"/g, "='$1'") + ">"
), "cleanupText"), Tw = /* @__PURE__ */ p((e8) => {
  const { text: t, metadata: r3 } = Qp(e8), { displayMode: i, title: a, config: n = {} } = r3;
  return i && (n.gantt || (n.gantt = {}), n.gantt.displayMode = i), { title: a, config: n, text: t };
}, "processFrontmatter"), Bw = /* @__PURE__ */ p((e8) => {
  const t = ge.detectInit(e8) ?? {}, r3 = ge.detectDirective(e8, "wrap");
  return Array.isArray(r3) ? t.wrap = r3.some(({ type: i }) => i === "wrap") : (r3 == null ? void 0 : r3.type) === "wrap" && (t.wrap = true), {
    text: M1(e8),
    directive: t
  };
}, "processDirectives");
function Fo(e8) {
  const t = Sw(e8), r3 = Tw(t), i = Bw(r3.text), a = go(r3.config, i.directive);
  return e8 = _w(i.text), {
    code: e8,
    title: r3.title,
    config: a
  };
}
p(Fo, "preprocessDiagram");
function Jp(e8) {
  const t = new TextEncoder().encode(e8), r3 = Array.from(t, (i) => String.fromCodePoint(i)).join("");
  return btoa(r3);
}
p(Jp, "toBase64");
var Lw = 5e4, Aw = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", Mw = "sandbox", Ew = "loose", Fw = "http://www.w3.org/2000/svg", Ow = "http://www.w3.org/1999/xlink", $w = "http://www.w3.org/1999/xhtml", Dw = "100%", Rw = "100%", Iw = "border:0;margin:0;", Pw = "margin:0", Nw = "allow-top-navigation-by-user-activation allow-popups", zw = 'The "iframe" tag is not supported by your browser.', Ww = ["foreignobject"], qw = ["dominant-baseline"];
function Oo(e8) {
  const t = Fo(e8);
  return ya(), Fm(t.config ?? {}), t;
}
p(Oo, "processAndSetConfigs");
async function tg(e8, t) {
  gn();
  try {
    const { code: r3, config: i } = Oo(e8);
    return { diagramType: (await rg(r3)).type, config: i };
  } catch (r3) {
    if (t != null && t.suppressErrors)
      return false;
    throw r3;
  }
}
p(tg, "parse");
var bc = /* @__PURE__ */ p((e8, t, r3 = []) => `
.${e8} ${t} { ${r3.join(" !important; ")} !important; }`, "cssImportantStyles"), Hw = /* @__PURE__ */ p((e8, t = /* @__PURE__ */ new Map()) => {
  var i;
  let r3 = "";
  if (e8.themeCSS !== void 0 && (r3 += `
${e8.themeCSS}`), e8.fontFamily !== void 0 && (r3 += `
:root { --mermaid-font-family: ${e8.fontFamily}}`), e8.altFontFamily !== void 0 && (r3 += `
:root { --mermaid-alt-font-family: ${e8.altFontFamily}}`), t instanceof Map) {
    const s = e8.htmlLabels ?? ((i = e8.flowchart) == null ? void 0 : i.htmlLabels) ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    t.forEach((l) => {
      mc(l.styles) || s.forEach((c) => {
        r3 += bc(l.id, c, l.styles);
      }), mc(l.textStyles) || (r3 += bc(
        l.id,
        "tspan",
        ((l == null ? void 0 : l.textStyles) || []).map((c) => c.replace("color", "fill"))
      ));
    });
  }
  return r3;
}, "createCssStyles"), jw = /* @__PURE__ */ p((e8, t, r3, i) => {
  const a = Hw(e8, r3), n = Km(t, a, e8.themeVariables);
  return Ms(lv(`${i}{${n}}`), hv);
}, "createUserStyles"), Yw = /* @__PURE__ */ p((e8 = "", t, r3) => {
  let i = e8;
  return !r3 && !t && (i = i.replace(
    /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
    'marker-end="url(#'
  )), i = hr(i), i = i.replace(/<br>/g, "<br/>"), i;
}, "cleanUpSvgCode"), Uw = /* @__PURE__ */ p((e8 = "", t) => {
  var a, n;
  const r3 = (n = (a = t == null ? void 0 : t.viewBox) == null ? void 0 : a.baseVal) != null && n.height ? t.viewBox.baseVal.height + "px" : Rw, i = Jp(`<body style="${Pw}">${e8}</body>`);
  return `<iframe style="width:${Dw};height:${r3};${Iw}" src="data:text/html;charset=UTF-8;base64,${i}" sandbox="${Nw}">
  ${zw}
</iframe>`;
}, "putIntoIFrame"), Cc = /* @__PURE__ */ p((e8, t, r3, i, a) => {
  const n = e8.append("div");
  n.attr("id", r3), i && n.attr("style", i);
  const o = n.append("svg").attr("id", t).attr("width", "100%").attr("xmlns", Fw);
  return a && o.attr("xmlns:xlink", a), o.append("g"), e8;
}, "appendDivSvgG");
function Rs(e8, t) {
  return e8.append("iframe").attr("id", t).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
p(Rs, "sandboxedIframe");
var Gw = /* @__PURE__ */ p((e8, t, r3, i) => {
  var a, n, o;
  (a = e8.getElementById(t)) == null || a.remove(), (n = e8.getElementById(r3)) == null || n.remove(), (o = e8.getElementById(i)) == null || o.remove();
}, "removeExistingElements"), Xw = /* @__PURE__ */ p(async function(e8, t, r3) {
  var j, N, F, M, B, O;
  gn();
  const i = Oo(t);
  t = i.code;
  const a = Jt();
  D.debug(a), t.length > ((a == null ? void 0 : a.maxTextSize) ?? Lw) && (t = Aw);
  const n = "#" + e8, o = "i" + e8, s = "#" + o, l = "d" + e8, c = "#" + l, h = /* @__PURE__ */ p(() => {
    const E = Li$1(d3 ? s : c).node();
    E && "remove" in E && E.remove();
  }, "removeTempElements");
  let u = Li$1("body");
  const d3 = a.securityLevel === Mw, f = a.securityLevel === Ew, g = a.fontFamily;
  if (r3 !== void 0) {
    if (r3 && (r3.innerHTML = ""), d3) {
      const L = Rs(Li$1(r3), o);
      u = Li$1(L.nodes()[0].contentDocument.body), u.node().style.margin = 0;
    } else
      u = Li$1(r3);
    Cc(u, e8, l, `font-family: ${g}`, Ow);
  } else {
    if (Gw(document, e8, l, o), d3) {
      const L = Rs(Li$1("body"), o);
      u = Li$1(L.nodes()[0].contentDocument.body), u.node().style.margin = 0;
    } else
      u = Li$1("body");
    Cc(u, e8, l);
  }
  let m, y;
  try {
    m = await Ds.fromText(t, { title: i.title });
  } catch (L) {
    if (a.suppressErrorRendering)
      throw h(), L;
    m = await Ds.fromText("error"), y = L;
  }
  const x = u.select(c).node(), b = m.type, v = x.firstChild, S = v.firstChild, _ = (N = (j = m.renderer).getClasses) == null ? void 0 : N.call(j, t, m), C = jw(a, b, _, n), k = document.createElement("style");
  k.innerHTML = C, v.insertBefore(k, S);
  try {
    await m.renderer.draw(t, e8, lc.version, m);
  } catch (L) {
    throw a.suppressErrorRendering ? h() : Pk.draw(t, e8, lc.version), L;
  }
  const P = u.select(`${c} svg`), H = (M = (F = m.db).getAccTitle) == null ? void 0 : M.call(F), $ = (O = (B = m.db).getAccDescription) == null ? void 0 : O.call(B);
  ig(b, P, H, $), u.select(`[id="${e8}"]`).selectAll("foreignobject > *").attr("xmlns", $w);
  let A = u.select(c).node().innerHTML;
  if (D.debug("config.arrowMarkerAbsolute", a.arrowMarkerAbsolute), A = Yw(A, d3, At(a.arrowMarkerAbsolute)), d3) {
    const L = u.select(c + " svg").node();
    A = Uw(A, L);
  } else
    f || (A = $r.sanitize(A, {
      ADD_TAGS: Ww,
      ADD_ATTR: qw,
      HTML_INTEGRATION_POINTS: { foreignobject: true }
    }));
  if (ww(), y)
    throw y;
  return h(), {
    diagramType: b,
    svg: A,
    bindFunctions: m.db.bindFunctions
  };
}, "render");
function eg(e8 = {}) {
  var i;
  const t = Dt({}, e8);
  t != null && t.fontFamily && !((i = t.themeVariables) != null && i.fontFamily) && (t.themeVariables || (t.themeVariables = {}), t.themeVariables.fontFamily = t.fontFamily), Mm(t), t != null && t.theme && t.theme in Ae ? t.themeVariables = Ae[t.theme].getThemeVariables(
    t.themeVariables
  ) : t && (t.themeVariables = Ae.default.getThemeVariables(t.themeVariables));
  const r3 = typeof t == "object" ? Am(t) : Wc();
  Ps(r3.logLevel), gn();
}
p(eg, "initialize");
var rg = /* @__PURE__ */ p((e8, t = {}) => {
  const { code: r3 } = Fo(e8);
  return Ds.fromText(r3, t);
}, "getDiagramFromText");
function ig(e8, t, r3, i) {
  Zp(t, e8), Kp(t, r3, i, t.attr("id"));
}
p(ig, "addA11yInfo");
var sr = Object.freeze({
  render: Xw,
  parse: tg,
  getDiagramFromText: rg,
  initialize: eg,
  getConfig: Jt,
  setConfig: qc,
  getSiteConfig: Wc,
  updateSiteConfig: Em,
  reset: /* @__PURE__ */ p(() => {
    ya();
  }, "reset"),
  globalReset: /* @__PURE__ */ p(() => {
    ya(Rr);
  }, "globalReset"),
  defaultConfig: Rr
});
Ps(Jt().logLevel);
ya(Jt());
var Vw = /* @__PURE__ */ p((e8, t, r3) => {
  D.warn(e8), po(e8) ? (r3 && r3(e8.str, e8.hash), t.push({ ...e8, message: e8.str, error: e8 })) : (r3 && r3(e8), e8 instanceof Error && t.push({
    str: e8.message,
    message: e8.message,
    hash: e8.name,
    error: e8
  }));
}, "handleError"), ag = /* @__PURE__ */ p(async function(e8 = {
  querySelector: ".mermaid"
}) {
  try {
    await Zw(e8);
  } catch (t) {
    if (po(t) && D.error(t.str), re.parseError && re.parseError(t), !e8.suppressErrors)
      throw D.error("Use the suppressErrors option to suppress these errors"), t;
  }
}, "run"), Zw = /* @__PURE__ */ p(async function({ postRenderCallback: e8, querySelector: t, nodes: r3 } = {
  querySelector: ".mermaid"
}) {
  const i = sr.getConfig();
  D.debug(`${e8 ? "" : "No "}Callback function found`);
  let a;
  if (r3)
    a = r3;
  else if (t)
    a = document.querySelectorAll(t);
  else
    throw new Error("Nodes and querySelector are both undefined");
  D.debug(`Found ${a.length} diagrams`), (i == null ? void 0 : i.startOnLoad) !== void 0 && (D.debug("Start On Load: " + (i == null ? void 0 : i.startOnLoad)), sr.updateSiteConfig({ startOnLoad: i == null ? void 0 : i.startOnLoad }));
  const n = new ge.InitIDGenerator(i.deterministicIds, i.deterministicIDSeed);
  let o;
  const s = [];
  for (const l of Array.from(a)) {
    if (D.info("Rendering diagram: " + l.id), l.getAttribute("data-processed"))
      continue;
    l.setAttribute("data-processed", "true");
    const c = `mermaid-${n.next()}`;
    o = l.innerHTML, o = Ed(ge.entityDecode(o)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const h = ge.detectInit(o);
    h && D.debug("Detected early reinit: ", h);
    try {
      const { svg: u, bindFunctions: d3 } = await lg(c, o, l);
      l.innerHTML = u, e8 && await e8(c), d3 && d3(l);
    } catch (u) {
      Vw(u, s, re.parseError);
    }
  }
  if (s.length > 0)
    throw s[0];
}, "runThrowsErrors"), ng = /* @__PURE__ */ p(function(e8) {
  sr.initialize(e8);
}, "initialize"), Kw = /* @__PURE__ */ p(async function(e8, t, r3) {
  D.warn("mermaid.init is deprecated. Please use run instead."), e8 && ng(e8);
  const i = { postRenderCallback: r3, querySelector: ".mermaid" };
  typeof t == "string" ? i.querySelector = t : t && (t instanceof HTMLElement ? i.nodes = [t] : i.nodes = t), await ag(i);
}, "init"), Qw = /* @__PURE__ */ p(async (e8, {
  lazyLoad: t = true
} = {}) => {
  gn(), Dc(...e8), t === false && await vw();
}, "registerExternalDiagrams"), sg = /* @__PURE__ */ p(function() {
  if (re.startOnLoad) {
    const { startOnLoad: e8 } = sr.getConfig();
    e8 && re.run().catch((t) => D.error("Mermaid failed to initialize", t));
  }
}, "contentLoaded");
typeof document < "u" && window.addEventListener("load", sg, false);
var Jw = /* @__PURE__ */ p(function(e8) {
  re.parseError = e8;
}, "setParseErrorHandler"), ja = [], Hn = false, og = /* @__PURE__ */ p(async () => {
  if (!Hn) {
    for (Hn = true; ja.length > 0; ) {
      const e8 = ja.shift();
      if (e8)
        try {
          await e8();
        } catch (t) {
          D.error("Error executing queue", t);
        }
    }
    Hn = false;
  }
}, "executeQueue"), t_ = /* @__PURE__ */ p(async (e8, t) => new Promise((r3, i) => {
  const a = /* @__PURE__ */ p(() => new Promise((n, o) => {
    sr.parse(e8, t).then(
      (s) => {
        n(s), r3(s);
      },
      (s) => {
        var l;
        D.error("Error parsing", s), (l = re.parseError) == null || l.call(re, s), o(s), i(s);
      }
    );
  }), "performCall");
  ja.push(a), og().catch(i);
}), "parse"), lg = /* @__PURE__ */ p((e8, t, r3) => new Promise((i, a) => {
  const n = /* @__PURE__ */ p(() => new Promise((o, s) => {
    sr.render(e8, t, r3).then(
      (l) => {
        o(l), i(l);
      },
      (l) => {
        var c;
        D.error("Error parsing", l), (c = re.parseError) == null || c.call(re, l), s(l), a(l);
      }
    );
  }), "performCall");
  ja.push(n), og().catch(a);
}), "render"), re = {
  startOnLoad: true,
  mermaidAPI: sr,
  parse: t_,
  render: lg,
  init: Kw,
  run: ag,
  registerExternalDiagrams: Qw,
  registerLayoutLoaders: mp,
  initialize: ng,
  parseError: void 0,
  contentLoaded: sg,
  setParseErrorHandler: Jw,
  detectType: Ns,
  registerIconPacks: P0
}, e_ = re;
/*! Check if previously processed */
/*!
 * Wait for document loaded before starting the execution
 */
var Bt = function() {
  return Bt = Object.assign || function(t) {
    for (var r3, i = 1, a = arguments.length; i < a; i++) {
      r3 = arguments[i];
      for (var n in r3)
        Object.prototype.hasOwnProperty.call(r3, n) && (t[n] = r3[n]);
    }
    return t;
  }, Bt.apply(this, arguments);
};
typeof window < "u" && (window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), typeof window.CustomEvent != "function" && (window.CustomEvent = function(t, r3) {
  r3 = r3 || { bubbles: false, cancelable: false, detail: null };
  var i = document.createEvent("CustomEvent");
  return i.initCustomEvent(t, r3.bubbles, r3.cancelable, r3.detail), i;
}));
var r_ = typeof document < "u" && !!document.documentMode, jn;
function i_() {
  return jn || (jn = document.createElement("div").style);
}
var vc = ["webkit", "moz", "ms"], ta = {};
function $o(e8) {
  if (ta[e8])
    return ta[e8];
  var t = i_();
  if (e8 in t)
    return ta[e8] = e8;
  for (var r3 = e8[0].toUpperCase() + e8.slice(1), i = vc.length; i--; ) {
    var a = "".concat(vc[i]).concat(r3);
    if (a in t)
      return ta[e8] = a;
  }
}
function ea(e8, t) {
  return parseFloat(t[$o(e8)]) || 0;
}
function ra(e8, t, r3) {
  r3 === void 0 && (r3 = window.getComputedStyle(e8));
  var i = t === "border" ? "Width" : "";
  return {
    left: ea("".concat(t, "Left").concat(i), r3),
    right: ea("".concat(t, "Right").concat(i), r3),
    top: ea("".concat(t, "Top").concat(i), r3),
    bottom: ea("".concat(t, "Bottom").concat(i), r3)
  };
}
function wr(e8, t, r3) {
  e8.style[$o(t)] = r3;
}
function a_(e8, t) {
  var r3 = $o("transform");
  wr(e8, "transition", "".concat(r3, " ").concat(t.duration, "ms ").concat(t.easing));
}
function n_(e8, t, r3) {
  var i = t.x, a = t.y, n = t.scale, o = t.isSVG;
  if (wr(e8, "transform", "scale(".concat(n, ") translate(").concat(i, "px, ").concat(a, "px)")), o && r_) {
    var s = window.getComputedStyle(e8).getPropertyValue("transform");
    e8.setAttribute("transform", s);
  }
}
function Yn(e8) {
  var t = e8.parentNode, r3 = window.getComputedStyle(e8), i = window.getComputedStyle(t), a = e8.getBoundingClientRect(), n = t.getBoundingClientRect();
  return {
    elem: {
      style: r3,
      width: a.width,
      height: a.height,
      top: a.top,
      bottom: a.bottom,
      left: a.left,
      right: a.right,
      margin: ra(e8, "margin", r3),
      border: ra(e8, "border", r3)
    },
    parent: {
      style: i,
      width: n.width,
      height: n.height,
      top: n.top,
      bottom: n.bottom,
      left: n.left,
      right: n.right,
      padding: ra(t, "padding", i),
      border: ra(t, "border", i)
    }
  };
}
var Ei = {
  down: "mousedown",
  move: "mousemove",
  up: "mouseup mouseleave"
};
typeof window < "u" && (typeof window.PointerEvent == "function" ? Ei = {
  down: "pointerdown",
  move: "pointermove",
  up: "pointerup pointerleave pointercancel"
} : typeof window.TouchEvent == "function" && (Ei = {
  down: "touchstart",
  move: "touchmove",
  up: "touchend touchcancel"
}));
function Un(e8, t, r3, i) {
  Ei[e8].split(" ").forEach(function(a) {
    t.addEventListener(a, r3, i);
  });
}
function Gn(e8, t, r3) {
  Ei[e8].split(" ").forEach(function(i) {
    t.removeEventListener(i, r3);
  });
}
function cg(e8, t) {
  for (var r3 = e8.length; r3--; )
    if (e8[r3].pointerId === t.pointerId)
      return r3;
  return -1;
}
function Is(e8, t) {
  var r3;
  if (t.touches) {
    r3 = 0;
    for (var i = 0, a = t.touches; i < a.length; i++) {
      var n = a[i];
      n.pointerId = r3++, Is(e8, n);
    }
    return;
  }
  r3 = cg(e8, t), r3 > -1 && e8.splice(r3, 1), e8.push(t);
}
function s_(e8, t) {
  if (t.touches) {
    for (; e8.length; )
      e8.pop();
    return;
  }
  var r3 = cg(e8, t);
  r3 > -1 && e8.splice(r3, 1);
}
function kc(e8) {
  e8 = e8.slice(0);
  for (var t = e8.pop(), r3; r3 = e8.pop(); )
    t = {
      clientX: (r3.clientX - t.clientX) / 2 + t.clientX,
      clientY: (r3.clientY - t.clientY) / 2 + t.clientY
    };
  return t;
}
function Xn(e8) {
  if (e8.length < 2)
    return 0;
  var t = e8[0], r3 = e8[1];
  return Math.sqrt(Math.pow(Math.abs(r3.clientX - t.clientX), 2) + Math.pow(Math.abs(r3.clientY - t.clientY), 2));
}
function o_(e8) {
  for (var t = e8; t && t.parentNode; ) {
    if (t.parentNode === document)
      return true;
    t = t.parentNode instanceof ShadowRoot ? t.parentNode.host : t.parentNode;
  }
  return false;
}
function l_(e8) {
  return (e8.getAttribute("class") || "").trim();
}
function c_(e8, t) {
  return e8.nodeType === 1 && " ".concat(l_(e8), " ").indexOf(" ".concat(t, " ")) > -1;
}
function h_(e8, t) {
  for (var r3 = e8; r3 != null; r3 = r3.parentNode)
    if (c_(r3, t.excludeClass) || t.exclude.indexOf(r3) > -1)
      return true;
  return false;
}
var u_ = /^http:[\w\.\/]+svg$/;
function d_(e8) {
  return u_.test(e8.namespaceURI) && e8.nodeName.toLowerCase() !== "svg";
}
function f_(e8) {
  var t = {};
  for (var r3 in e8)
    e8.hasOwnProperty(r3) && (t[r3] = e8[r3]);
  return t;
}
var hg = {
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
  handleStartEvent: function(e8) {
    e8.preventDefault(), e8.stopPropagation();
  },
  maxScale: 4,
  minScale: 0.125,
  overflow: "hidden",
  panOnlyWhenZoomed: false,
  pinchAndPan: false,
  relative: false,
  setTransform: n_,
  startX: 0,
  startY: 0,
  startScale: 1,
  step: 0.3,
  touchAction: "none"
};
function ug(e8, t) {
  if (!e8)
    throw new Error("Panzoom requires an element as an argument");
  if (e8.nodeType !== 1)
    throw new Error("Panzoom requires an element with a nodeType of 1");
  if (!o_(e8))
    throw new Error("Panzoom should be called on elements that have been attached to the DOM");
  t = Bt(Bt({}, hg), t);
  var r3 = d_(e8), i = e8.parentNode;
  i.style.overflow = t.overflow, i.style.userSelect = "none", i.style.touchAction = t.touchAction, (t.canvas ? i : e8).style.cursor = t.cursor, e8.style.userSelect = "none", e8.style.touchAction = t.touchAction, wr(e8, "transformOrigin", typeof t.origin == "string" ? t.origin : r3 ? "0 0" : "50% 50%");
  function a() {
    i.style.overflow = "", i.style.userSelect = "", i.style.touchAction = "", i.style.cursor = "", e8.style.cursor = "", e8.style.userSelect = "", e8.style.touchAction = "", wr(e8, "transformOrigin", "");
  }
  function n(E) {
    E === void 0 && (E = {});
    for (var R in E)
      E.hasOwnProperty(R) && (t[R] = E[R]);
    (E.hasOwnProperty("cursor") || E.hasOwnProperty("canvas")) && (i.style.cursor = e8.style.cursor = "", (t.canvas ? i : e8).style.cursor = t.cursor), E.hasOwnProperty("overflow") && (i.style.overflow = E.overflow), E.hasOwnProperty("touchAction") && (i.style.touchAction = E.touchAction, e8.style.touchAction = E.touchAction);
  }
  var o = 0, s = 0, l = 1, c = false;
  m(t.startScale, { animate: false, force: true }), setTimeout(function() {
    g(t.startX, t.startY, { animate: false, force: true });
  });
  function h(E, R, z) {
    if (!z.silent) {
      var Y = new CustomEvent(E, { detail: R });
      e8.dispatchEvent(Y);
    }
  }
  function u(E, R, z) {
    var Y = { x: o, y: s, scale: l, isSVG: r3, originalEvent: z };
    return requestAnimationFrame(function() {
      typeof R.animate == "boolean" && (R.animate ? a_(e8, R) : wr(e8, "transition", "none")), R.setTransform(e8, Y, R), h(E, Y, R), h("panzoomchange", Y, R);
    }), Y;
  }
  function d3(E, R, z, Y) {
    var I = Bt(Bt({}, t), Y), V = { x: o, y: s, opts: I };
    if (!I.force && (I.disablePan || I.panOnlyWhenZoomed && l === I.startScale))
      return V;
    if (E = parseFloat(E), R = parseFloat(R), I.disableXAxis || (V.x = (I.relative ? o : 0) + E), I.disableYAxis || (V.y = (I.relative ? s : 0) + R), I.contain) {
      var W = Yn(e8), ut = W.elem.width / l, mt = W.elem.height / l, Ft = ut * z, Mt = mt * z, gt = (Ft - ut) / 2, _t = (Mt - mt) / 2;
      if (I.contain === "inside") {
        var Rt = (-W.elem.margin.left - W.parent.padding.left + gt) / z, te = (W.parent.width - Ft - W.parent.padding.left - W.elem.margin.left - W.parent.border.left - W.parent.border.right + gt) / z;
        V.x = Math.max(Math.min(V.x, te), Rt);
        var oe = (-W.elem.margin.top - W.parent.padding.top + _t) / z, je = (W.parent.height - Mt - W.parent.padding.top - W.elem.margin.top - W.parent.border.top - W.parent.border.bottom + _t) / z;
        V.y = Math.max(Math.min(V.y, je), oe);
      } else if (I.contain === "outside") {
        var Rt = (-(Ft - W.parent.width) - W.parent.padding.left - W.parent.border.left - W.parent.border.right + gt) / z, te = (gt - W.parent.padding.left) / z;
        V.x = Math.max(Math.min(V.x, te), Rt);
        var oe = (-(Mt - W.parent.height) - W.parent.padding.top - W.parent.border.top - W.parent.border.bottom + _t) / z, je = (_t - W.parent.padding.top) / z;
        V.y = Math.max(Math.min(V.y, je), oe);
      }
    }
    return I.roundPixels && (V.x = Math.round(V.x), V.y = Math.round(V.y)), V;
  }
  function f(E, R) {
    var z = Bt(Bt({}, t), R), Y = { scale: l, opts: z };
    if (!z.force && z.disableZoom)
      return Y;
    var I = t.minScale, V = t.maxScale;
    if (z.contain) {
      var W = Yn(e8), ut = W.elem.width / l, mt = W.elem.height / l;
      if (ut > 1 && mt > 1) {
        var Ft = W.parent.width - W.parent.border.left - W.parent.border.right, Mt = W.parent.height - W.parent.border.top - W.parent.border.bottom, gt = Ft / ut, _t = Mt / mt;
        t.contain === "inside" ? V = Math.min(V, gt, _t) : t.contain === "outside" && (I = Math.max(I, gt, _t));
      }
    }
    return Y.scale = Math.min(Math.max(E, I), V), Y;
  }
  function g(E, R, z, Y) {
    var I = d3(E, R, l, z);
    return o !== I.x || s !== I.y ? (o = I.x, s = I.y, u("panzoompan", I.opts, Y)) : { x: o, y: s, scale: l, isSVG: r3, originalEvent: Y };
  }
  function m(E, R, z) {
    var Y = f(E, R), I = Y.opts;
    if (!(!I.force && I.disableZoom)) {
      E = Y.scale;
      var V = o, W = s;
      if (I.focal) {
        var ut = I.focal;
        V = (ut.x / E - ut.x / l + o * E) / E, W = (ut.y / E - ut.y / l + s * E) / E;
      }
      var mt = d3(V, W, E, { relative: false, force: true });
      return o = mt.x, s = mt.y, l = E, u("panzoomzoom", I, z);
    }
  }
  function y(E, R) {
    var z = Bt(Bt(Bt({}, t), { animate: true }), R);
    return m(l * Math.exp((E ? 1 : -1) * z.step), z);
  }
  function x(E) {
    return y(true, E);
  }
  function b(E) {
    return y(false, E);
  }
  function v(E, R, z, Y) {
    var I = Yn(e8), V = {
      width: I.parent.width - I.parent.padding.left - I.parent.padding.right - I.parent.border.left - I.parent.border.right,
      height: I.parent.height - I.parent.padding.top - I.parent.padding.bottom - I.parent.border.top - I.parent.border.bottom
    }, W = R.clientX - I.parent.left - I.parent.padding.left - I.parent.border.left - I.elem.margin.left, ut = R.clientY - I.parent.top - I.parent.padding.top - I.parent.border.top - I.elem.margin.top;
    r3 || (W -= I.elem.width / l / 2, ut -= I.elem.height / l / 2);
    var mt = {
      x: W / V.width * (V.width * E),
      y: ut / V.height * (V.height * E)
    };
    return m(E, Bt(Bt({}, z), { animate: false, focal: mt }), Y);
  }
  function S(E, R) {
    E.preventDefault();
    var z = Bt(Bt(Bt({}, t), R), { animate: false }), Y = E.deltaY === 0 && E.deltaX ? E.deltaX : E.deltaY, I = Y < 0 ? 1 : -1, V = f(l * Math.exp(I * z.step / 3), z).scale;
    return v(V, E, z, E);
  }
  function _(E) {
    var R = Bt(Bt(Bt({}, t), { animate: true, force: true }), E);
    l = f(R.startScale, R).scale;
    var z = d3(R.startX, R.startY, l, R);
    return o = z.x, s = z.y, u("panzoomreset", R);
  }
  var C, k, P, H, $, A, j = [];
  function N(E) {
    if (!h_(E.target, t)) {
      Is(j, E), c = true, t.handleStartEvent(E), C = o, k = s, h("panzoomstart", { x: o, y: s, scale: l, isSVG: r3, originalEvent: E }, t);
      var R = kc(j);
      P = R.clientX, H = R.clientY, $ = l, A = Xn(j);
    }
  }
  function F(E) {
    if (!(!c || C === void 0 || k === void 0 || P === void 0 || H === void 0)) {
      Is(j, E);
      var R = kc(j), z = j.length > 1, Y = l;
      if (z) {
        A === 0 && (A = Xn(j));
        var I = Xn(j) - A;
        Y = f(I * t.step / 80 + $).scale, v(Y, R, { animate: false }, E);
      }
      (!z || t.pinchAndPan) && g(C + (R.clientX - P) / Y, k + (R.clientY - H) / Y, {
        animate: false
      }, E);
    }
  }
  function M(E) {
    j.length === 1 && h("panzoomend", { x: o, y: s, scale: l, isSVG: r3, originalEvent: E }, t), s_(j, E), c && (c = false, C = k = P = H = void 0);
  }
  var B = false;
  function O() {
    B || (B = true, Un("down", t.canvas ? i : e8, N), Un("move", document, F, { passive: true }), Un("up", document, M, { passive: true }));
  }
  function L() {
    B = false, Gn("down", t.canvas ? i : e8, N), Gn("move", document, F), Gn("up", document, M);
  }
  return t.noBind || O(), {
    bind: O,
    destroy: L,
    eventNames: Ei,
    getPan: function() {
      return { x: o, y: s };
    },
    getScale: function() {
      return l;
    },
    getOptions: function() {
      return f_(t);
    },
    handleDown: N,
    handleMove: F,
    handleUp: M,
    pan: g,
    reset: _,
    resetStyle: a,
    setOptions: n,
    setStyle: function(E, R) {
      return wr(e8, E, R);
    },
    zoom: m,
    zoomIn: x,
    zoomOut: b,
    zoomToPoint: v,
    zoomWithWheel: S
  };
}
ug.defaultOptions = hg;
const p_ = { class: "mermaid-viewer__header" }, g_ = { class: "mermaid-viewer__tabs-container" }, m_ = { class: "mermaid-viewer__tabs" }, y_ = { class: "mermaid-viewer__actions" }, x_ = { class: "mermaid-viewer__icon" }, b_ = { class: "mermaid-viewer__icon" }, C_ = { class: "mermaid-viewer__dropdown-menu" }, v_ = { class: "mermaid-viewer__actions" }, k_ = { class: "mermaid-viewer__content" }, w_ = ["innerHTML"], __ = {
  class: "mermaid-viewer__code",
  key: "code"
}, S_ = { class: "mermaid-viewer__code-pre" }, T_ = {
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
  setup(e8) {
    const t = e8, r$1 = "mermaid-" + Date.now(), i = ref(), a = ref(), n = ref(null), o = ref("image"), s = ref(""), l = ref(false), c = ref(false);
    let h = null;
    const u = () => {
      l.value = !l.value;
    }, d$1 = () => {
      h == null || h.zoomIn();
    }, f = () => {
      c.value = !c.value;
    }, g = () => {
      h == null || h.zoomOut();
    }, m = (_) => {
      h == null || h.zoomWithWheel(_);
    }, y = () => {
      d(t.value).then(() => {
        l.value = false;
      });
    }, x = async () => {
      Gi$1(i.value), r.success(Dl$1.global.t("hubx.bubble.download_success")), l.value = false;
    };
    let b = null, v = null;
    watchEffect(() => {
      clearTimeout(b), clearTimeout(v);
      const _ = t.value;
      b = setTimeout(() => {
        e_.render(r$1, _).then((C) => {
          a.value.innerHTML = C.svg, i.value = a.value.querySelector("svg");
        });
      }, 600);
    });
    let S;
    return onMounted(() => {
      S = Ki$1(n.value, () => {
        l.value = false;
      });
    }), onUnmounted(() => {
      h == null || h.destroy(), S == null || S.destroy();
    }), watchEffect(() => {
      i.value && !h && (h = ug(i.value, {}));
    }), (_, C) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["mermaid-viewer", { "mermaid-viewer--fixed": c.value }])
    }, [
      createBaseVNode("div", p_, [
        createBaseVNode("div", g_, [
          createBaseVNode("div", m_, [
            createBaseVNode("div", {
              class: normalizeClass(["mermaid-viewer__tab", { "mermaid-viewer__tab--active": o.value === "image" }]),
              onClick: C[0] || (C[0] = (k) => o.value = "image")
            }, toDisplayString(_.$hubx_t("hubx.bubble.image")), 3),
            createBaseVNode("div", {
              class: normalizeClass(["mermaid-viewer__tab", { "mermaid-viewer__tab--active": o.value === "code" }]),
              onClick: C[1] || (C[1] = (k) => o.value = "code")
            }, toDisplayString(_.$hubx_t("hubx.bubble.code")), 3)
          ])
        ]),
        withDirectives(createBaseVNode("div", y_, [
          createBaseVNode("div", {
            class: "mermaid-viewer__dropdown",
            ref_key: "dropdownRef",
            ref: n
          }, [
            createBaseVNode("span", {
              class: "mermaid-viewer__dropdown-trigger",
              onClick: u
            }, [
              createBaseVNode("i", x_, [
                createVNode(At$1, { name: "download" })
              ]),
              createBaseVNode("i", b_, [
                createVNode(At$1, { name: "down" })
              ])
            ]),
            withDirectives(createBaseVNode("div", C_, [
              createBaseVNode("div", {
                class: "mermaid-viewer__dropdown-item",
                onClick: x
              }, toDisplayString(_.$hubx_t("hubx.bubble.download_image")), 1),
              createBaseVNode("div", {
                class: "mermaid-viewer__dropdown-item",
                onClick: y
              }, toDisplayString(_.$hubx_t("hubx.bubble.copy_markdown")), 1)
            ], 512), [
              [vShow, l.value]
            ])
          ], 512),
          createBaseVNode("i", {
            class: "mermaid-viewer__icon",
            onClick: f
          }, [
            c.value ? (openBlock(), createBlock(At$1, {
              key: 0,
              name: "collapse"
            })) : (openBlock(), createBlock(At$1, {
              key: 1,
              name: "expand"
            }))
          ]),
          createBaseVNode("i", {
            class: "mermaid-viewer__icon",
            onClick: g
          }, [
            createVNode(At$1, { name: "zoom-out" })
          ]),
          createBaseVNode("i", {
            class: "mermaid-viewer__icon",
            onClick: d$1
          }, [
            createVNode(At$1, { name: "zoom-in" })
          ])
        ], 512), [
          [vShow, o.value === "image"]
        ]),
        withDirectives(createBaseVNode("div", v_, [
          createBaseVNode("i", {
            class: "mermaid-viewer__icon",
            onClick: y
          }, [
            createVNode(At$1, { name: "copy" })
          ])
        ], 512), [
          [vShow, o.value === "code"]
        ])
      ]),
      createBaseVNode("div", k_, [
        createVNode(Transition, {
          name: "slide-fade",
          mode: "out-in"
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", {
              ref_key: "contentRef",
              ref: a,
              class: "mermaid-viewer__diagram",
              onWheel: m,
              innerHTML: s.value
            }, null, 40, w_), [
              [vShow, o.value === "image"]
            ])
          ]),
          _: 1
        }),
        createVNode(Transition, {
          name: "slide-fade",
          mode: "out-in"
        }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("div", __, [
              createBaseVNode("pre", S_, toDisplayString(e8.value), 1)
            ], 512), [
              [vShow, o.value === "code"]
            ])
          ]),
          _: 1
        })
      ])
    ], 2));
  }
}, B_ = /* @__PURE__ */ Rn$1(T_, [["__scopeId", "data-v-e66d0996"]]), tS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: B_
}, Symbol.toStringTag, { value: "Module" }));
export {
  P_ as $,
  pm as A,
  sy as B,
  go as C,
  Jt as D,
  Nc as E,
  D1 as F,
  GC as G,
  lc as H,
  km as I,
  p0 as J,
  Pr as K,
  O_ as L,
  sn as M,
  zs as N,
  gl as O,
  H0 as P,
  ca as Q,
  $1 as R,
  Oi as S,
  Xm as T,
  Fi as U,
  G as V,
  it as W,
  Vc as X,
  to as Y,
  T1 as Z,
  p as _,
  ty as a,
  Oa as a$,
  W_ as a0,
  Tl as a1,
  Sl as a2,
  H_ as a3,
  q_ as a4,
  z_ as a5,
  R_ as a6,
  I_ as a7,
  Y_ as a8,
  N_ as a9,
  mc as aA,
  T2 as aB,
  Ka as aC,
  P0 as aD,
  I0 as aE,
  or as aF,
  w1 as aG,
  cd as aH,
  tn as aI,
  nn as aJ,
  $a as aK,
  ud as aL,
  ld as aM,
  Jb as aN,
  Ng as aO,
  v1 as aP,
  p1 as aQ,
  eb as aR,
  so as aS,
  Vb as aT,
  S1 as aU,
  Ri as aV,
  jr as aW,
  Ea as aX,
  s1 as aY,
  pv as aZ,
  Di as a_,
  j_ as aa,
  J2 as ab,
  pp as ac,
  Z_ as ad,
  m0 as ae,
  At as af,
  He as ag,
  Js as ah,
  Wd as ai,
  hr as aj,
  yd as ak,
  st as al,
  me as am,
  jC as an,
  V_ as ao,
  K_ as ap,
  G_ as aq,
  J as ar,
  X_ as as,
  TC as at,
  kC as au,
  vC as av,
  k1 as aw,
  pb as ax,
  g1 as ay,
  no as az,
  Jm as b,
  t1 as b0,
  rd as b1,
  ab as b2,
  nb as b3,
  Ze as b4,
  Wl as b5,
  sb as b6,
  oo as b7,
  ib as b8,
  cb as b9,
  Yr as ba,
  qe as bb,
  Rl as bc,
  lo as bd,
  ad as be,
  Os as bf,
  _1 as bg,
  an as bh,
  tS as bi,
  dt as c,
  Xc as d,
  Dt as e,
  Ee as f,
  ry as g,
  rr as h,
  q0 as i,
  Hr as j,
  bd as k,
  D as l,
  $_ as m,
  J_ as n,
  iy as o,
  ay as p,
  g0 as q,
  Q_ as r,
  ey as s,
  xC as t,
  ge as u,
  U_ as v,
  P1 as w,
  Qm as x,
  D_ as y,
  xi as z
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./dagre-OKDRZEBW-BhBZ1LpX-txWuJrh_.js","./graph-BlpFl8hT-X3F-3Ykt.js","./_baseUniq-Bc4pAwPa-4Vti29BH.js","./layout-DnRVtZaa-Z0rygkHC.js","./_basePickBy-sC4qhKfT-S0M4lzcJ.js","./clone-CawhnH1Z-cPfa3Ped.js","./main-zTjO05wq.js","./main-hmm0JC4y.css","./helper-7WMIPux3-FiO_G2IV.js","./copy-BS31ARP0-eab1H3tb.js","./c4Diagram-VJAJSXHY-Cfp79fMA-OccV301Z.js","./chunk-D6G4REZN-AYZPaegw-F1L0DfyQ.js","./flowDiagram-4HSFHLVR-CKX8T_JP-QADPa4my.js","./chunk-RZ5BOZE2-mpnkmZCx-SD7v2Mwj.js","./channel-BY04PUnR-tZWP7nEQ.js","./erDiagram-Q7BY3M3F-CQ8Lz__E-8hQyLO77.js","./gitGraphDiagram-7IBYFJ6S-3GXB7T1a-8H6aGSop.js","./chunk-4BMEZGHF-Bo7Lw3Zg-VPv0jNBt.js","./chunk-XZIHB7SX-BpJ6eI-3-rAghqn91.js","./radar-MK3ICKWK-Dci9lSdR-4pP8dac_.js","./ganttDiagram-APWFNJXF-DMVinqOr-nKqdy9-3.js","./linear-DRFqyOtL-QuynLUkH.js","./init-DjUOC4st-2EPjLC0T.js","./min-DLf0xQMm-nalJLjBu.js","./infoDiagram-PH2N3AL5-CmIz_rS6-AL_wcXT1.js","./pieDiagram-IB7DONF6-B9a8I_kR-OAUW9cos.js","./arc-6Ea6x5Wp-0EvfSE2q.js","./ordinal-DfAQgscy-u5KZJLIt.js","./quadrantDiagram-7GDLP6J5-DdYK6qWC-dANT7nla.js","./xychartDiagram-VJFVF3MP-BYAU5rlp-BUqxVjns.js","./requirementDiagram-KVF5MWMF-ByvHGzIT-bVGLG4B7.js","./sequenceDiagram-X6HHIX6F-Cqm_WHRg-91kFLHNx.js","./classDiagram-GIVACNV2-BeOe6uk8-vCo1EQwC.js","./chunk-A2AXSNBT-CnAdYFlN-ZpopVqKL.js","./classDiagram-v2-COTLJTTW-BeOe6uk8-vCo1EQwC.js","./stateDiagram-DGXRK772-ii8DucS0-wJ3R1ARC.js","./chunk-AEK57VVT-BRLTIX_x-JW-8jT-u.js","./stateDiagram-v2-YXO3MK2T-H0pi9OYg-IJT7p2bH.js","./journeyDiagram-U35MCT3I-Aqt3_X0t-645Mc91G.js","./timeline-definition-BDJGKUSR-B-UW6Gps-O2X9ve_b.js","./mindmap-definition-ALO5MXBD-DUhYmv1v-5gCQLroC.js","./cytoscape.esm-Swd9B-1A-ug9Omo3W.js","./kanban-definition-NDS4AKOZ-4OHb06Bt-nD8Aoyp4.js","./sankeyDiagram-QLVOVGJD-lixt867K-jpvjv8kO.js","./colors-BD7LS4qt-GuCNWxZ4.js","./diagram-VNBRO52H-B6wDDMHH-Tn4JmQoq.js","./diagram-SSKATNLV-BxTOMe4J-7OXYLKs4.js","./blockDiagram-JOT3LUYC-BX5yKVBz-EwzGUEyL.js","./architectureDiagram-IEHRJDOE-7A4i_-7k-8O_bU46j.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
