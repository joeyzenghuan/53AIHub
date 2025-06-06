import { _ as p, c as dt$1, a as ty, b as Jm, g as ry, s as ey, p as ay, o as iy, x as Qm, j as Hr, y as D_, T as Xm } from "./mermaid-j5R1o_wi-dCQhMK9F.js";
import { L as Li } from "./helper-7WMIPux3-FiO_G2IV.js";
import { h } from "./ordinal-DfAQgscy-u5KZJLIt.js";
import { c } from "./colors-BD7LS4qt-GuCNWxZ4.js";
import "./main-zTjO05wq.js";
import "./copy-BS31ARP0-eab1H3tb.js";
import "./init-DjUOC4st-2EPjLC0T.js";
const It = c("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function ct(t, n) {
  let s;
  if (n === void 0)
    for (const a of t)
      a != null && (s < a || s === void 0 && a >= a) && (s = a);
  else {
    let a = -1;
    for (let h2 of t)
      (h2 = n(h2, ++a, t)) != null && (s < h2 || s === void 0 && h2 >= h2) && (s = h2);
  }
  return s;
}
function pt(t, n) {
  let s;
  if (n === void 0)
    for (const a of t)
      a != null && (s > a || s === void 0 && a >= a) && (s = a);
  else {
    let a = -1;
    for (let h2 of t)
      (h2 = n(h2, ++a, t)) != null && (s > h2 || s === void 0 && h2 >= h2) && (s = h2);
  }
  return s;
}
function nt(t, n) {
  let s = 0;
  if (n === void 0)
    for (let a of t)
      (a = +a) && (s += a);
  else {
    let a = -1;
    for (let h2 of t)
      (h2 = +n(h2, ++a, t)) && (s += h2);
  }
  return s;
}
function Pt(t) {
  return t.target.depth;
}
function Ct(t) {
  return t.depth;
}
function Ot(t, n) {
  return n - 1 - t.height;
}
function mt(t, n) {
  return t.sourceLinks.length ? t.depth : n - 1;
}
function Dt(t) {
  return t.targetLinks.length ? t.depth : t.sourceLinks.length ? pt(t.sourceLinks, Pt) - 1 : 0;
}
function q(t) {
  return function() {
    return t;
  };
}
function ut(t, n) {
  return Q(t.source, n.source) || t.index - n.index;
}
function ht(t, n) {
  return Q(t.target, n.target) || t.index - n.index;
}
function Q(t, n) {
  return t.y0 - n.y0;
}
function it(t) {
  return t.value;
}
function $t(t) {
  return t.index;
}
function jt(t) {
  return t.nodes;
}
function zt(t) {
  return t.links;
}
function ft(t, n) {
  const s = t.get(n);
  if (!s)
    throw new Error("missing: " + n);
  return s;
}
function yt({ nodes: t }) {
  for (const n of t) {
    let s = n.y0, a = s;
    for (const h2 of n.sourceLinks)
      h2.y0 = s + h2.width / 2, s += h2.width;
    for (const h2 of n.targetLinks)
      h2.y1 = a + h2.width / 2, a += h2.width;
  }
}
function Bt() {
  let t = 0, n = 0, s = 1, a = 1, h2 = 24, d = 8, m, _ = $t, i = mt, o, l, x = jt, v = zt, y = 6;
  function b() {
    const e = { nodes: x.apply(null, arguments), links: v.apply(null, arguments) };
    return M(e), T(e), N(e), C(e), w(e), yt(e), e;
  }
  b.update = function(e) {
    return yt(e), e;
  }, b.nodeId = function(e) {
    return arguments.length ? (_ = typeof e == "function" ? e : q(e), b) : _;
  }, b.nodeAlign = function(e) {
    return arguments.length ? (i = typeof e == "function" ? e : q(e), b) : i;
  }, b.nodeSort = function(e) {
    return arguments.length ? (o = e, b) : o;
  }, b.nodeWidth = function(e) {
    return arguments.length ? (h2 = +e, b) : h2;
  }, b.nodePadding = function(e) {
    return arguments.length ? (d = m = +e, b) : d;
  }, b.nodes = function(e) {
    return arguments.length ? (x = typeof e == "function" ? e : q(e), b) : x;
  }, b.links = function(e) {
    return arguments.length ? (v = typeof e == "function" ? e : q(e), b) : v;
  }, b.linkSort = function(e) {
    return arguments.length ? (l = e, b) : l;
  }, b.size = function(e) {
    return arguments.length ? (t = n = 0, s = +e[0], a = +e[1], b) : [s - t, a - n];
  }, b.extent = function(e) {
    return arguments.length ? (t = +e[0][0], s = +e[1][0], n = +e[0][1], a = +e[1][1], b) : [[t, n], [s, a]];
  }, b.iterations = function(e) {
    return arguments.length ? (y = +e, b) : y;
  };
  function M({ nodes: e, links: f }) {
    for (const [c2, r] of e.entries())
      r.index = c2, r.sourceLinks = [], r.targetLinks = [];
    const u = new Map(e.map((c2, r) => [_(c2, r, e), c2]));
    for (const [c2, r] of f.entries()) {
      r.index = c2;
      let { source: k, target: S } = r;
      typeof k != "object" && (k = r.source = ft(u, k)), typeof S != "object" && (S = r.target = ft(u, S)), k.sourceLinks.push(r), S.targetLinks.push(r);
    }
    if (l != null)
      for (const { sourceLinks: c2, targetLinks: r } of e)
        c2.sort(l), r.sort(l);
  }
  function T({ nodes: e }) {
    for (const f of e)
      f.value = f.fixedValue === void 0 ? Math.max(nt(f.sourceLinks, it), nt(f.targetLinks, it)) : f.fixedValue;
  }
  function N({ nodes: e }) {
    const f = e.length;
    let u = new Set(e), c2 = /* @__PURE__ */ new Set(), r = 0;
    for (; u.size; ) {
      for (const k of u) {
        k.depth = r;
        for (const { target: S } of k.sourceLinks)
          c2.add(S);
      }
      if (++r > f)
        throw new Error("circular link");
      u = c2, c2 = /* @__PURE__ */ new Set();
    }
  }
  function C({ nodes: e }) {
    const f = e.length;
    let u = new Set(e), c2 = /* @__PURE__ */ new Set(), r = 0;
    for (; u.size; ) {
      for (const k of u) {
        k.height = r;
        for (const { source: S } of k.targetLinks)
          c2.add(S);
      }
      if (++r > f)
        throw new Error("circular link");
      u = c2, c2 = /* @__PURE__ */ new Set();
    }
  }
  function $({ nodes: e }) {
    const f = ct(e, (r) => r.depth) + 1, u = (s - t - h2) / (f - 1), c2 = new Array(f);
    for (const r of e) {
      const k = Math.max(0, Math.min(f - 1, Math.floor(i.call(null, r, f))));
      r.layer = k, r.x0 = t + k * u, r.x1 = r.x0 + h2, c2[k] ? c2[k].push(r) : c2[k] = [r];
    }
    if (o)
      for (const r of c2)
        r.sort(o);
    return c2;
  }
  function R(e) {
    const f = pt(e, (u) => (a - n - (u.length - 1) * m) / nt(u, it));
    for (const u of e) {
      let c2 = n;
      for (const r of u) {
        r.y0 = c2, r.y1 = c2 + r.value * f, c2 = r.y1 + m;
        for (const k of r.sourceLinks)
          k.width = k.value * f;
      }
      c2 = (a - c2 + m) / (u.length + 1);
      for (let r = 0; r < u.length; ++r) {
        const k = u[r];
        k.y0 += c2 * (r + 1), k.y1 += c2 * (r + 1);
      }
      A(u);
    }
  }
  function w(e) {
    const f = $(e);
    m = Math.min(d, (a - n) / (ct(f, (u) => u.length) - 1)), R(f);
    for (let u = 0; u < y; ++u) {
      const c2 = Math.pow(0.99, u), r = Math.max(1 - c2, (u + 1) / y);
      B(f, c2, r), P(f, c2, r);
    }
  }
  function P(e, f, u) {
    for (let c2 = 1, r = e.length; c2 < r; ++c2) {
      const k = e[c2];
      for (const S of k) {
        let L = 0, F = 0;
        for (const { source: Y, value: et } of S.targetLinks) {
          let H = et * (S.layer - Y.layer);
          L += j(Y, S) * H, F += H;
        }
        if (!(F > 0))
          continue;
        let G = (L / F - S.y0) * f;
        S.y0 += G, S.y1 += G, E(S);
      }
      o === void 0 && k.sort(Q), O(k, u);
    }
  }
  function B(e, f, u) {
    for (let c2 = e.length, r = c2 - 2; r >= 0; --r) {
      const k = e[r];
      for (const S of k) {
        let L = 0, F = 0;
        for (const { target: Y, value: et } of S.sourceLinks) {
          let H = et * (Y.layer - S.layer);
          L += I(S, Y) * H, F += H;
        }
        if (!(F > 0))
          continue;
        let G = (L / F - S.y0) * f;
        S.y0 += G, S.y1 += G, E(S);
      }
      o === void 0 && k.sort(Q), O(k, u);
    }
  }
  function O(e, f) {
    const u = e.length >> 1, c2 = e[u];
    g(e, c2.y0 - m, u - 1, f), D(e, c2.y1 + m, u + 1, f), g(e, a, e.length - 1, f), D(e, n, 0, f);
  }
  function D(e, f, u, c2) {
    for (; u < e.length; ++u) {
      const r = e[u], k = (f - r.y0) * c2;
      k > 1e-6 && (r.y0 += k, r.y1 += k), f = r.y1 + m;
    }
  }
  function g(e, f, u, c2) {
    for (; u >= 0; --u) {
      const r = e[u], k = (r.y1 - f) * c2;
      k > 1e-6 && (r.y0 -= k, r.y1 -= k), f = r.y0 - m;
    }
  }
  function E({ sourceLinks: e, targetLinks: f }) {
    if (l === void 0) {
      for (const { source: { sourceLinks: u } } of f)
        u.sort(ht);
      for (const { target: { targetLinks: u } } of e)
        u.sort(ut);
    }
  }
  function A(e) {
    if (l === void 0)
      for (const { sourceLinks: f, targetLinks: u } of e)
        f.sort(ht), u.sort(ut);
  }
  function j(e, f) {
    let u = e.y0 - (e.sourceLinks.length - 1) * m / 2;
    for (const { target: c2, width: r } of e.sourceLinks) {
      if (c2 === f)
        break;
      u += r + m;
    }
    for (const { source: c2, width: r } of f.targetLinks) {
      if (c2 === e)
        break;
      u -= r;
    }
    return u;
  }
  function I(e, f) {
    let u = f.y0 - (f.targetLinks.length - 1) * m / 2;
    for (const { source: c2, width: r } of f.targetLinks) {
      if (c2 === e)
        break;
      u += r + m;
    }
    for (const { target: c2, width: r } of e.sourceLinks) {
      if (c2 === f)
        break;
      u -= r;
    }
    return u;
  }
  return b;
}
var st = Math.PI, rt = 2 * st, V = 1e-6, Rt = rt - V;
function ot() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function kt() {
  return new ot();
}
ot.prototype = kt.prototype = {
  constructor: ot,
  moveTo: function(t, n) {
    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n);
  },
  closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  },
  lineTo: function(t, n) {
    this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n);
  },
  quadraticCurveTo: function(t, n, s, a) {
    this._ += "Q" + +t + "," + +n + "," + (this._x1 = +s) + "," + (this._y1 = +a);
  },
  bezierCurveTo: function(t, n, s, a, h2, d) {
    this._ += "C" + +t + "," + +n + "," + +s + "," + +a + "," + (this._x1 = +h2) + "," + (this._y1 = +d);
  },
  arcTo: function(t, n, s, a, h2) {
    t = +t, n = +n, s = +s, a = +a, h2 = +h2;
    var d = this._x1, m = this._y1, _ = s - t, i = a - n, o = d - t, l = m - n, x = o * o + l * l;
    if (h2 < 0)
      throw new Error("negative radius: " + h2);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
    else if (x > V)
      if (!(Math.abs(l * _ - i * o) > V) || !h2)
        this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
      else {
        var v = s - d, y = a - m, b = _ * _ + i * i, M = v * v + y * y, T = Math.sqrt(b), N = Math.sqrt(x), C = h2 * Math.tan((st - Math.acos((b + x - M) / (2 * T * N))) / 2), $ = C / N, R = C / T;
        Math.abs($ - 1) > V && (this._ += "L" + (t + $ * o) + "," + (n + $ * l)), this._ += "A" + h2 + "," + h2 + ",0,0," + +(l * v > o * y) + "," + (this._x1 = t + R * _) + "," + (this._y1 = n + R * i);
      }
  },
  arc: function(t, n, s, a, h2, d) {
    t = +t, n = +n, s = +s, d = !!d;
    var m = s * Math.cos(a), _ = s * Math.sin(a), i = t + m, o = n + _, l = 1 ^ d, x = d ? a - h2 : h2 - a;
    if (s < 0)
      throw new Error("negative radius: " + s);
    this._x1 === null ? this._ += "M" + i + "," + o : (Math.abs(this._x1 - i) > V || Math.abs(this._y1 - o) > V) && (this._ += "L" + i + "," + o), s && (x < 0 && (x = x % rt + rt), x > Rt ? this._ += "A" + s + "," + s + ",0,1," + l + "," + (t - m) + "," + (n - _) + "A" + s + "," + s + ",0,1," + l + "," + (this._x1 = i) + "," + (this._y1 = o) : x > V && (this._ += "A" + s + "," + s + ",0," + +(x >= st) + "," + l + "," + (this._x1 = t + s * Math.cos(h2)) + "," + (this._y1 = n + s * Math.sin(h2))));
  },
  rect: function(t, n, s, a) {
    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +s + "v" + +a + "h" + -s + "Z";
  },
  toString: function() {
    return this._;
  }
};
function dt(t) {
  return function() {
    return t;
  };
}
function Ft(t) {
  return t[0];
}
function Vt(t) {
  return t[1];
}
var Wt = Array.prototype.slice;
function Ut(t) {
  return t.source;
}
function Gt(t) {
  return t.target;
}
function Yt(t) {
  var n = Ut, s = Gt, a = Ft, h2 = Vt, d = null;
  function m() {
    var _, i = Wt.call(arguments), o = n.apply(this, i), l = s.apply(this, i);
    if (d || (d = _ = kt()), t(d, +a.apply(this, (i[0] = o, i)), +h2.apply(this, i), +a.apply(this, (i[0] = l, i)), +h2.apply(this, i)), _)
      return d = null, _ + "" || null;
  }
  return m.source = function(_) {
    return arguments.length ? (n = _, m) : n;
  }, m.target = function(_) {
    return arguments.length ? (s = _, m) : s;
  }, m.x = function(_) {
    return arguments.length ? (a = typeof _ == "function" ? _ : dt(+_), m) : a;
  }, m.y = function(_) {
    return arguments.length ? (h2 = typeof _ == "function" ? _ : dt(+_), m) : h2;
  }, m.context = function(_) {
    return arguments.length ? (d = _ ?? null, m) : d;
  }, m;
}
function Ht(t, n, s, a, h2) {
  t.moveTo(n, s), t.bezierCurveTo(n = (n + a) / 2, s, n, h2, a, h2);
}
function Xt() {
  return Yt(Ht);
}
function qt(t) {
  return [t.source.x1, t.y0];
}
function Qt(t) {
  return [t.target.x0, t.y1];
}
function Kt() {
  return Xt().source(qt).target(Qt);
}
var at = function() {
  var t = /* @__PURE__ */ p(function(_, i, o, l) {
    for (o = o || {}, l = _.length; l--; o[_[l]] = i)
      ;
    return o;
  }, "o"), n = [1, 9], s = [1, 10], a = [1, 5, 10, 12], h2 = {
    trace: /* @__PURE__ */ p(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, SANKEY: 4, NEWLINE: 5, csv: 6, opt_eof: 7, record: 8, csv_tail: 9, EOF: 10, "field[source]": 11, COMMA: 12, "field[target]": 13, "field[value]": 14, field: 15, escaped: 16, non_escaped: 17, DQUOTE: 18, ESCAPED_TEXT: 19, NON_ESCAPED_TEXT: 20, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "SANKEY", 5: "NEWLINE", 10: "EOF", 11: "field[source]", 12: "COMMA", 13: "field[target]", 14: "field[value]", 18: "DQUOTE", 19: "ESCAPED_TEXT", 20: "NON_ESCAPED_TEXT" },
    productions_: [0, [3, 4], [6, 2], [9, 2], [9, 0], [7, 1], [7, 0], [8, 5], [15, 1], [15, 1], [16, 3], [17, 1]],
    performAction: /* @__PURE__ */ p(function(i, o, l, x, v, y, b) {
      var M = y.length - 1;
      switch (v) {
        case 7:
          const T = x.findOrCreateNode(y[M - 4].trim().replaceAll('""', '"')), N = x.findOrCreateNode(y[M - 2].trim().replaceAll('""', '"')), C = parseFloat(y[M].trim());
          x.addLink(T, N, C);
          break;
        case 8:
        case 9:
        case 11:
          this.$ = y[M];
          break;
        case 10:
          this.$ = y[M - 1];
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, { 5: [1, 3] }, { 6: 4, 8: 5, 15: 6, 16: 7, 17: 8, 18: n, 20: s }, { 1: [2, 6], 7: 11, 10: [1, 12] }, t(s, [2, 4], { 9: 13, 5: [1, 14] }), { 12: [1, 15] }, t(a, [2, 8]), t(a, [2, 9]), { 19: [1, 16] }, t(a, [2, 11]), { 1: [2, 1] }, { 1: [2, 5] }, t(s, [2, 2]), { 6: 17, 8: 5, 15: 6, 16: 7, 17: 8, 18: n, 20: s }, { 15: 18, 16: 7, 17: 8, 18: n, 20: s }, { 18: [1, 19] }, t(s, [2, 3]), { 12: [1, 20] }, t(a, [2, 10]), { 15: 21, 16: 7, 17: 8, 18: n, 20: s }, t([1, 5, 10], [2, 7])],
    defaultActions: { 11: [2, 1], 12: [2, 5] },
    parseError: /* @__PURE__ */ p(function(i, o) {
      if (o.recoverable)
        this.trace(i);
      else {
        var l = new Error(i);
        throw l.hash = o, l;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ p(function(i) {
      var o = this, l = [0], x = [], v = [null], y = [], b = this.table, M = "", T = 0, N = 0, C = 2, $ = 1, R = y.slice.call(arguments, 1), w = Object.create(this.lexer), P = { yy: {} };
      for (var B in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, B) && (P.yy[B] = this.yy[B]);
      w.setInput(i, P.yy), P.yy.lexer = w, P.yy.parser = this, typeof w.yylloc > "u" && (w.yylloc = {});
      var O = w.yylloc;
      y.push(O);
      var D = w.options && w.options.ranges;
      typeof P.yy.parseError == "function" ? this.parseError = P.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function g(L) {
        l.length = l.length - 2 * L, v.length = v.length - L, y.length = y.length - L;
      }
      p(g, "popStack");
      function E() {
        var L;
        return L = x.pop() || w.lex() || $, typeof L != "number" && (L instanceof Array && (x = L, L = x.pop()), L = o.symbols_[L] || L), L;
      }
      p(E, "lex");
      for (var A, j, I, e, f = {}, u, c2, r, k; ; ) {
        if (j = l[l.length - 1], this.defaultActions[j] ? I = this.defaultActions[j] : ((A === null || typeof A > "u") && (A = E()), I = b[j] && b[j][A]), typeof I > "u" || !I.length || !I[0]) {
          var S = "";
          k = [];
          for (u in b[j])
            this.terminals_[u] && u > C && k.push("'" + this.terminals_[u] + "'");
          w.showPosition ? S = "Parse error on line " + (T + 1) + `:
` + w.showPosition() + `
Expecting ` + k.join(", ") + ", got '" + (this.terminals_[A] || A) + "'" : S = "Parse error on line " + (T + 1) + ": Unexpected " + (A == $ ? "end of input" : "'" + (this.terminals_[A] || A) + "'"), this.parseError(S, {
            text: w.match,
            token: this.terminals_[A] || A,
            line: w.yylineno,
            loc: O,
            expected: k
          });
        }
        if (I[0] instanceof Array && I.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + j + ", token: " + A);
        switch (I[0]) {
          case 1:
            l.push(A), v.push(w.yytext), y.push(w.yylloc), l.push(I[1]), A = null, N = w.yyleng, M = w.yytext, T = w.yylineno, O = w.yylloc;
            break;
          case 2:
            if (c2 = this.productions_[I[1]][1], f.$ = v[v.length - c2], f._$ = {
              first_line: y[y.length - (c2 || 1)].first_line,
              last_line: y[y.length - 1].last_line,
              first_column: y[y.length - (c2 || 1)].first_column,
              last_column: y[y.length - 1].last_column
            }, D && (f._$.range = [
              y[y.length - (c2 || 1)].range[0],
              y[y.length - 1].range[1]
            ]), e = this.performAction.apply(f, [
              M,
              N,
              T,
              P.yy,
              I[1],
              v,
              y
            ].concat(R)), typeof e < "u")
              return e;
            c2 && (l = l.slice(0, -1 * c2 * 2), v = v.slice(0, -1 * c2), y = y.slice(0, -1 * c2)), l.push(this.productions_[I[1]][0]), v.push(f.$), y.push(f._$), r = b[l[l.length - 2]][l[l.length - 1]], l.push(r);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, d = /* @__PURE__ */ function() {
    var _ = {
      EOF: 1,
      parseError: /* @__PURE__ */ p(function(o, l) {
        if (this.yy.parser)
          this.yy.parser.parseError(o, l);
        else
          throw new Error(o);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: /* @__PURE__ */ p(function(i, o) {
        return this.yy = o || this.yy || {}, this._input = i, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: /* @__PURE__ */ p(function() {
        var i = this._input[0];
        this.yytext += i, this.yyleng++, this.offset++, this.match += i, this.matched += i;
        var o = i.match(/(?:\r\n?|\n).*/g);
        return o ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), i;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: /* @__PURE__ */ p(function(i) {
        var o = i.length, l = i.split(/(?:\r\n?|\n)/g);
        this._input = i + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - o), this.offset -= o;
        var x = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), l.length - 1 && (this.yylineno -= l.length - 1);
        var v = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: l ? (l.length === x.length ? this.yylloc.first_column : 0) + x[x.length - l.length].length - l[0].length : this.yylloc.first_column - o
        }, this.options.ranges && (this.yylloc.range = [v[0], v[0] + this.yyleng - o]), this.yyleng = this.yytext.length, this;
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
      less: /* @__PURE__ */ p(function(i) {
        this.unput(this.match.slice(i));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: /* @__PURE__ */ p(function() {
        var i = this.matched.substr(0, this.matched.length - this.match.length);
        return (i.length > 20 ? "..." : "") + i.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: /* @__PURE__ */ p(function() {
        var i = this.match;
        return i.length < 20 && (i += this._input.substr(0, 20 - i.length)), (i.substr(0, 20) + (i.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: /* @__PURE__ */ p(function() {
        var i = this.pastInput(), o = new Array(i.length + 1).join("-");
        return i + this.upcomingInput() + `
` + o + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: /* @__PURE__ */ p(function(i, o) {
        var l, x, v;
        if (this.options.backtrack_lexer && (v = {
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
        }, this.options.ranges && (v.yylloc.range = this.yylloc.range.slice(0))), x = i[0].match(/(?:\r\n?|\n).*/g), x && (this.yylineno += x.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: x ? x[x.length - 1].length - x[x.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + i[0].length
        }, this.yytext += i[0], this.match += i[0], this.matches = i, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(i[0].length), this.matched += i[0], l = this.performAction.call(this, this.yy, this, o, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), l)
          return l;
        if (this._backtrack) {
          for (var y in v)
            this[y] = v[y];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: /* @__PURE__ */ p(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var i, o, l, x;
        this._more || (this.yytext = "", this.match = "");
        for (var v = this._currentRules(), y = 0; y < v.length; y++)
          if (l = this._input.match(this.rules[v[y]]), l && (!o || l[0].length > o[0].length)) {
            if (o = l, x = y, this.options.backtrack_lexer) {
              if (i = this.test_match(l, v[y]), i !== false)
                return i;
              if (this._backtrack) {
                o = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return o ? (i = this.test_match(o, v[x]), i !== false ? i : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: /* @__PURE__ */ p(function() {
        var o = this.next();
        return o || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: /* @__PURE__ */ p(function(o) {
        this.conditionStack.push(o);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: /* @__PURE__ */ p(function() {
        var o = this.conditionStack.length - 1;
        return o > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: /* @__PURE__ */ p(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: /* @__PURE__ */ p(function(o) {
        return o = this.conditionStack.length - 1 - Math.abs(o || 0), o >= 0 ? this.conditionStack[o] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: /* @__PURE__ */ p(function(o) {
        this.begin(o);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: /* @__PURE__ */ p(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: { "case-insensitive": true },
      performAction: /* @__PURE__ */ p(function(o, l, x, v) {
        switch (x) {
          case 0:
            return this.pushState("csv"), 4;
          case 1:
            return 10;
          case 2:
            return 5;
          case 3:
            return 12;
          case 4:
            return this.pushState("escaped_text"), 18;
          case 5:
            return 20;
          case 6:
            return this.popState("escaped_text"), 18;
          case 7:
            return 19;
        }
      }, "anonymous"),
      rules: [/^(?:sankey-beta\b)/i, /^(?:$)/i, /^(?:((\u000D\u000A)|(\u000A)))/i, /^(?:(\u002C))/i, /^(?:(\u0022))/i, /^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i, /^(?:(\u0022)(?!(\u0022)))/i, /^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],
      conditions: { csv: { rules: [1, 2, 3, 4, 5, 6, 7], inclusive: false }, escaped_text: { rules: [6, 7], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7], inclusive: true } }
    };
    return _;
  }();
  h2.lexer = d;
  function m() {
    this.yy = {};
  }
  return p(m, "Parser"), m.prototype = h2, h2.Parser = m, new m();
}();
at.parser = at;
var K = at, J = [], tt = [], Z = /* @__PURE__ */ new Map(), Zt = /* @__PURE__ */ p(() => {
  J = [], tt = [], Z = /* @__PURE__ */ new Map(), Qm();
}, "clear"), W, Jt = (W = class {
  constructor(n, s, a = 0) {
    this.source = n, this.target = s, this.value = a;
  }
}, p(W, "SankeyLink"), W), te = /* @__PURE__ */ p((t, n, s) => {
  J.push(new Jt(t, n, s));
}, "addLink"), U, ee = (U = class {
  constructor(n) {
    this.ID = n;
  }
}, p(U, "SankeyNode"), U), ne = /* @__PURE__ */ p((t) => {
  t = Hr.sanitizeText(t, dt$1());
  let n = Z.get(t);
  return n === void 0 && (n = new ee(t), Z.set(t, n), tt.push(n)), n;
}, "findOrCreateNode"), ie = /* @__PURE__ */ p(() => tt, "getNodes"), se = /* @__PURE__ */ p(() => J, "getLinks"), re = /* @__PURE__ */ p(() => ({
  nodes: tt.map((t) => ({ id: t.ID })),
  links: J.map((t) => ({
    source: t.source.ID,
    target: t.target.ID,
    value: t.value
  }))
}), "getGraph"), oe = {
  nodesMap: Z,
  getConfig: /* @__PURE__ */ p(() => dt$1().sankey, "getConfig"),
  getNodes: ie,
  getLinks: se,
  getGraph: re,
  addLink: te,
  findOrCreateNode: ne,
  getAccTitle: ty,
  setAccTitle: Jm,
  getAccDescription: ry,
  setAccDescription: ey,
  getDiagramTitle: ay,
  setDiagramTitle: iy,
  clear: Zt
}, z, gt = (z = class {
  static next(n) {
    return new z(n + ++z.count);
  }
  constructor(n) {
    this.id = n, this.href = `#${n}`;
  }
  toString() {
    return "url(" + this.href + ")";
  }
}, p(z, "Uid"), z.count = 0, z), ae = {
  left: Ct,
  right: Ot,
  center: Dt,
  justify: mt
}, le = /* @__PURE__ */ p(function(t, n, s, a) {
  const { securityLevel: h$1, sankey: d } = dt$1(), m = D_.sankey;
  let _;
  h$1 === "sandbox" && (_ = Li("#i" + n));
  const i = h$1 === "sandbox" ? Li(_.nodes()[0].contentDocument.body) : Li("body"), o = h$1 === "sandbox" ? i.select(`[id="${n}"]`) : Li(`[id="${n}"]`), l = (d == null ? void 0 : d.width) ?? m.width, x = (d == null ? void 0 : d.height) ?? m.width, v = (d == null ? void 0 : d.useMaxWidth) ?? m.useMaxWidth, y = (d == null ? void 0 : d.nodeAlignment) ?? m.nodeAlignment, b = (d == null ? void 0 : d.prefix) ?? m.prefix, M = (d == null ? void 0 : d.suffix) ?? m.suffix, T = (d == null ? void 0 : d.showValues) ?? m.showValues, N = a.db.getGraph(), C = ae[y];
  Bt().nodeId((g) => g.id).nodeWidth(10).nodePadding(10 + (T ? 15 : 0)).nodeAlign(C).extent([
    [0, 0],
    [l, x]
  ])(N);
  const w = h(It);
  o.append("g").attr("class", "nodes").selectAll(".node").data(N.nodes).join("g").attr("class", "node").attr("id", (g) => (g.uid = gt.next("node-")).id).attr("transform", function(g) {
    return "translate(" + g.x0 + "," + g.y0 + ")";
  }).attr("x", (g) => g.x0).attr("y", (g) => g.y0).append("rect").attr("height", (g) => g.y1 - g.y0).attr("width", (g) => g.x1 - g.x0).attr("fill", (g) => w(g.id));
  const P = /* @__PURE__ */ p(({ id: g, value: E }) => T ? `${g}
${b}${Math.round(E * 100) / 100}${M}` : g, "getText");
  o.append("g").attr("class", "node-labels").attr("font-size", 14).selectAll("text").data(N.nodes).join("text").attr("x", (g) => g.x0 < l / 2 ? g.x1 + 6 : g.x0 - 6).attr("y", (g) => (g.y1 + g.y0) / 2).attr("dy", `${T ? "0" : "0.35"}em`).attr("text-anchor", (g) => g.x0 < l / 2 ? "start" : "end").text(P);
  const B = o.append("g").attr("class", "links").attr("fill", "none").attr("stroke-opacity", 0.5).selectAll(".link").data(N.links).join("g").attr("class", "link").style("mix-blend-mode", "multiply"), O = (d == null ? void 0 : d.linkColor) ?? "gradient";
  if (O === "gradient") {
    const g = B.append("linearGradient").attr("id", (E) => (E.uid = gt.next("linearGradient-")).id).attr("gradientUnits", "userSpaceOnUse").attr("x1", (E) => E.source.x1).attr("x2", (E) => E.target.x0);
    g.append("stop").attr("offset", "0%").attr("stop-color", (E) => w(E.source.id)), g.append("stop").attr("offset", "100%").attr("stop-color", (E) => w(E.target.id));
  }
  let D;
  switch (O) {
    case "gradient":
      D = /* @__PURE__ */ p((g) => g.uid, "coloring");
      break;
    case "source":
      D = /* @__PURE__ */ p((g) => w(g.source.id), "coloring");
      break;
    case "target":
      D = /* @__PURE__ */ p((g) => w(g.target.id), "coloring");
      break;
    default:
      D = O;
  }
  B.append("path").attr("d", Kt()).attr("stroke", D).attr("stroke-width", (g) => Math.max(1, g.width)), Xm(void 0, o, 0, v);
}, "draw"), ce = {
  draw: le
}, ue = /* @__PURE__ */ p((t) => t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g, "").replaceAll(/([\n\r])+/g, `
`).trim(), "prepareTextForParsing"), he = /* @__PURE__ */ p((t) => `.label {
      font-family: ${t.fontFamily};
    }`, "getStyles"), fe = he, ye = K.parse.bind(K);
K.parse = (t) => ye(ue(t));
var ke = {
  styles: fe,
  parser: K,
  db: oe,
  renderer: ce
};
export {
  ke as diagram
};
