import { _ as p, I as km, D as Jt$1, C as go, E as Nc, aB as T2, l as D, P as H0, h as rr, p as ay, b as Jm, a as ty, o as iy, g as ry, s as ey, x as Qm, G as GC, d as Xc } from "./mermaid-j5R1o_wi-dCQhMK9F.js";
import "./helper-7WMIPux3-FiO_G2IV.js";
import { t } from "./init-DjUOC4st-2EPjLC0T.js";
import { h } from "./ordinal-DfAQgscy-u5KZJLIt.js";
import { Z as Zn } from "./linear-DRFqyOtL-QuynLUkH.js";
import "./main-zTjO05wq.js";
import "./copy-BS31ARP0-eab1H3tb.js";
function ki(e, t2, i) {
  e = +e, t2 = +t2, i = (n = arguments.length) < 2 ? (t2 = e, e = 0, 1) : n < 3 ? 1 : +i;
  for (var s = -1, n = Math.max(0, Math.ceil((t2 - e) / i)) | 0, o = new Array(n); ++s < n; )
    o[s] = e + s * i;
  return o;
}
function pt() {
  var e = h().unknown(void 0), t$1 = e.domain, i = e.range, s = 0, n = 1, o, u, f = false, p2 = 0, k = 0, R = 0.5;
  delete e.unknown;
  function w() {
    var y = t$1().length, D2 = n < s, S = D2 ? n : s, v = D2 ? s : n;
    o = (v - S) / Math.max(1, y - p2 + k * 2), f && (o = Math.floor(o)), S += (v - S - o * (y - p2)) * R, u = o * (1 - p2), f && (S = Math.round(S), u = Math.round(u));
    var m = ki(y).map(function(_) {
      return S + o * _;
    });
    return i(D2 ? m.reverse() : m);
  }
  return e.domain = function(y) {
    return arguments.length ? (t$1(y), w()) : t$1();
  }, e.range = function(y) {
    return arguments.length ? ([s, n] = y, s = +s, n = +n, w()) : [s, n];
  }, e.rangeRound = function(y) {
    return [s, n] = y, s = +s, n = +n, f = true, w();
  }, e.bandwidth = function() {
    return u;
  }, e.step = function() {
    return o;
  }, e.round = function(y) {
    return arguments.length ? (f = !!y, w()) : f;
  }, e.padding = function(y) {
    return arguments.length ? (p2 = Math.min(1, k = +y), w()) : p2;
  }, e.paddingInner = function(y) {
    return arguments.length ? (p2 = Math.min(1, y), w()) : p2;
  }, e.paddingOuter = function(y) {
    return arguments.length ? (k = +y, w()) : k;
  }, e.align = function(y) {
    return arguments.length ? (R = Math.max(0, Math.min(1, y)), w()) : R;
  }, e.copy = function() {
    return pt(t$1(), [s, n]).round(f).paddingInner(p2).paddingOuter(k).align(R);
  }, t.apply(w(), arguments);
}
var ft = function() {
  var e = /* @__PURE__ */ p(function(B, h2, c, g) {
    for (c = c || {}, g = B.length; g--; c[B[g]] = h2)
      ;
    return c;
  }, "o"), t2 = [1, 10, 12, 14, 16, 18, 19, 21, 23], i = [2, 6], s = [1, 3], n = [1, 5], o = [1, 6], u = [1, 7], f = [1, 5, 10, 12, 14, 16, 18, 19, 21, 23, 34, 35, 36], p$1 = [1, 25], k = [1, 26], R = [1, 28], w = [1, 29], y = [1, 30], D2 = [1, 31], S = [1, 32], v = [1, 33], m = [1, 34], _ = [1, 35], l = [1, 36], E = [1, 37], K = [1, 43], vt = [1, 42], Pt = [1, 47], et = [1, 50], C = [1, 10, 12, 14, 16, 18, 19, 21, 23, 34, 35, 36], lt = [1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 27, 28, 34, 35, 36], I = [1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 27, 28, 34, 35, 36, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], Lt = [1, 64], ct = {
    trace: /* @__PURE__ */ p(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, eol: 4, XYCHART: 5, chartConfig: 6, document: 7, CHART_ORIENTATION: 8, statement: 9, title: 10, text: 11, X_AXIS: 12, parseXAxis: 13, Y_AXIS: 14, parseYAxis: 15, LINE: 16, plotData: 17, BAR: 18, acc_title: 19, acc_title_value: 20, acc_descr: 21, acc_descr_value: 22, acc_descr_multiline_value: 23, SQUARE_BRACES_START: 24, commaSeparatedNumbers: 25, SQUARE_BRACES_END: 26, NUMBER_WITH_DECIMAL: 27, COMMA: 28, xAxisData: 29, bandData: 30, ARROW_DELIMITER: 31, commaSeparatedTexts: 32, yAxisData: 33, NEWLINE: 34, SEMI: 35, EOF: 36, alphaNum: 37, STR: 38, MD_STR: 39, alphaNumToken: 40, AMP: 41, NUM: 42, ALPHA: 43, PLUS: 44, EQUALS: 45, MULT: 46, DOT: 47, BRKT: 48, MINUS: 49, UNDERSCORE: 50, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 5: "XYCHART", 8: "CHART_ORIENTATION", 10: "title", 12: "X_AXIS", 14: "Y_AXIS", 16: "LINE", 18: "BAR", 19: "acc_title", 20: "acc_title_value", 21: "acc_descr", 22: "acc_descr_value", 23: "acc_descr_multiline_value", 24: "SQUARE_BRACES_START", 26: "SQUARE_BRACES_END", 27: "NUMBER_WITH_DECIMAL", 28: "COMMA", 31: "ARROW_DELIMITER", 34: "NEWLINE", 35: "SEMI", 36: "EOF", 38: "STR", 39: "MD_STR", 41: "AMP", 42: "NUM", 43: "ALPHA", 44: "PLUS", 45: "EQUALS", 46: "MULT", 47: "DOT", 48: "BRKT", 49: "MINUS", 50: "UNDERSCORE" },
    productions_: [0, [3, 2], [3, 3], [3, 2], [3, 1], [6, 1], [7, 0], [7, 2], [9, 2], [9, 2], [9, 2], [9, 2], [9, 2], [9, 3], [9, 2], [9, 3], [9, 2], [9, 2], [9, 1], [17, 3], [25, 3], [25, 1], [13, 1], [13, 2], [13, 1], [29, 1], [29, 3], [30, 3], [32, 3], [32, 1], [15, 1], [15, 2], [15, 1], [33, 3], [4, 1], [4, 1], [4, 1], [11, 1], [11, 1], [11, 1], [37, 1], [37, 2], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1]],
    performAction: /* @__PURE__ */ p(function(h2, c, g, x, A, r, Z) {
      var d = r.length - 1;
      switch (A) {
        case 5:
          x.setOrientation(r[d]);
          break;
        case 9:
          x.setDiagramTitle(r[d].text.trim());
          break;
        case 12:
          x.setLineData({ text: "", type: "text" }, r[d]);
          break;
        case 13:
          x.setLineData(r[d - 1], r[d]);
          break;
        case 14:
          x.setBarData({ text: "", type: "text" }, r[d]);
          break;
        case 15:
          x.setBarData(r[d - 1], r[d]);
          break;
        case 16:
          this.$ = r[d].trim(), x.setAccTitle(this.$);
          break;
        case 17:
        case 18:
          this.$ = r[d].trim(), x.setAccDescription(this.$);
          break;
        case 19:
          this.$ = r[d - 1];
          break;
        case 20:
          this.$ = [Number(r[d - 2]), ...r[d]];
          break;
        case 21:
          this.$ = [Number(r[d])];
          break;
        case 22:
          x.setXAxisTitle(r[d]);
          break;
        case 23:
          x.setXAxisTitle(r[d - 1]);
          break;
        case 24:
          x.setXAxisTitle({ type: "text", text: "" });
          break;
        case 25:
          x.setXAxisBand(r[d]);
          break;
        case 26:
          x.setXAxisRangeData(Number(r[d - 2]), Number(r[d]));
          break;
        case 27:
          this.$ = r[d - 1];
          break;
        case 28:
          this.$ = [r[d - 2], ...r[d]];
          break;
        case 29:
          this.$ = [r[d]];
          break;
        case 30:
          x.setYAxisTitle(r[d]);
          break;
        case 31:
          x.setYAxisTitle(r[d - 1]);
          break;
        case 32:
          x.setYAxisTitle({ type: "text", text: "" });
          break;
        case 33:
          x.setYAxisRangeData(Number(r[d - 2]), Number(r[d]));
          break;
        case 37:
          this.$ = { text: r[d], type: "text" };
          break;
        case 38:
          this.$ = { text: r[d], type: "text" };
          break;
        case 39:
          this.$ = { text: r[d], type: "markdown" };
          break;
        case 40:
          this.$ = r[d];
          break;
        case 41:
          this.$ = r[d - 1] + "" + r[d];
          break;
      }
    }, "anonymous"),
    table: [e(t2, i, { 3: 1, 4: 2, 7: 4, 5: s, 34: n, 35: o, 36: u }), { 1: [3] }, e(t2, i, { 4: 2, 7: 4, 3: 8, 5: s, 34: n, 35: o, 36: u }), e(t2, i, { 4: 2, 7: 4, 6: 9, 3: 10, 5: s, 8: [1, 11], 34: n, 35: o, 36: u }), { 1: [2, 4], 9: 12, 10: [1, 13], 12: [1, 14], 14: [1, 15], 16: [1, 16], 18: [1, 17], 19: [1, 18], 21: [1, 19], 23: [1, 20] }, e(f, [2, 34]), e(f, [2, 35]), e(f, [2, 36]), { 1: [2, 1] }, e(t2, i, { 4: 2, 7: 4, 3: 21, 5: s, 34: n, 35: o, 36: u }), { 1: [2, 3] }, e(f, [2, 5]), e(t2, [2, 7], { 4: 22, 34: n, 35: o, 36: u }), { 11: 23, 37: 24, 38: p$1, 39: k, 40: 27, 41: R, 42: w, 43: y, 44: D2, 45: S, 46: v, 47: m, 48: _, 49: l, 50: E }, { 11: 39, 13: 38, 24: K, 27: vt, 29: 40, 30: 41, 37: 24, 38: p$1, 39: k, 40: 27, 41: R, 42: w, 43: y, 44: D2, 45: S, 46: v, 47: m, 48: _, 49: l, 50: E }, { 11: 45, 15: 44, 27: Pt, 33: 46, 37: 24, 38: p$1, 39: k, 40: 27, 41: R, 42: w, 43: y, 44: D2, 45: S, 46: v, 47: m, 48: _, 49: l, 50: E }, { 11: 49, 17: 48, 24: et, 37: 24, 38: p$1, 39: k, 40: 27, 41: R, 42: w, 43: y, 44: D2, 45: S, 46: v, 47: m, 48: _, 49: l, 50: E }, { 11: 52, 17: 51, 24: et, 37: 24, 38: p$1, 39: k, 40: 27, 41: R, 42: w, 43: y, 44: D2, 45: S, 46: v, 47: m, 48: _, 49: l, 50: E }, { 20: [1, 53] }, { 22: [1, 54] }, e(C, [2, 18]), { 1: [2, 2] }, e(C, [2, 8]), e(C, [2, 9]), e(lt, [2, 37], { 40: 55, 41: R, 42: w, 43: y, 44: D2, 45: S, 46: v, 47: m, 48: _, 49: l, 50: E }), e(lt, [2, 38]), e(lt, [2, 39]), e(I, [2, 40]), e(I, [2, 42]), e(I, [2, 43]), e(I, [2, 44]), e(I, [2, 45]), e(I, [2, 46]), e(I, [2, 47]), e(I, [2, 48]), e(I, [2, 49]), e(I, [2, 50]), e(I, [2, 51]), e(C, [2, 10]), e(C, [2, 22], { 30: 41, 29: 56, 24: K, 27: vt }), e(C, [2, 24]), e(C, [2, 25]), { 31: [1, 57] }, { 11: 59, 32: 58, 37: 24, 38: p$1, 39: k, 40: 27, 41: R, 42: w, 43: y, 44: D2, 45: S, 46: v, 47: m, 48: _, 49: l, 50: E }, e(C, [2, 11]), e(C, [2, 30], { 33: 60, 27: Pt }), e(C, [2, 32]), { 31: [1, 61] }, e(C, [2, 12]), { 17: 62, 24: et }, { 25: 63, 27: Lt }, e(C, [2, 14]), { 17: 65, 24: et }, e(C, [2, 16]), e(C, [2, 17]), e(I, [2, 41]), e(C, [2, 23]), { 27: [1, 66] }, { 26: [1, 67] }, { 26: [2, 29], 28: [1, 68] }, e(C, [2, 31]), { 27: [1, 69] }, e(C, [2, 13]), { 26: [1, 70] }, { 26: [2, 21], 28: [1, 71] }, e(C, [2, 15]), e(C, [2, 26]), e(C, [2, 27]), { 11: 59, 32: 72, 37: 24, 38: p$1, 39: k, 40: 27, 41: R, 42: w, 43: y, 44: D2, 45: S, 46: v, 47: m, 48: _, 49: l, 50: E }, e(C, [2, 33]), e(C, [2, 19]), { 25: 73, 27: Lt }, { 26: [2, 28] }, { 26: [2, 20] }],
    defaultActions: { 8: [2, 1], 10: [2, 3], 21: [2, 2], 72: [2, 28], 73: [2, 20] },
    parseError: /* @__PURE__ */ p(function(h2, c) {
      if (c.recoverable)
        this.trace(h2);
      else {
        var g = new Error(h2);
        throw g.hash = c, g;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ p(function(h2) {
      var c = this, g = [0], x = [], A = [null], r = [], Z = this.table, d = "", nt = 0, Et = 0, oi = 2, It = 1, hi = r.slice.call(arguments, 1), T = Object.create(this.lexer), W = { yy: {} };
      for (var ut in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, ut) && (W.yy[ut] = this.yy[ut]);
      T.setInput(h2, W.yy), W.yy.lexer = T, W.yy.parser = this, typeof T.yylloc > "u" && (T.yylloc = {});
      var gt = T.yylloc;
      r.push(gt);
      var li = T.options && T.options.ranges;
      typeof W.yy.parseError == "function" ? this.parseError = W.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function ci(L) {
        g.length = g.length - 2 * L, A.length = A.length - L, r.length = r.length - L;
      }
      p(ci, "popStack");
      function Mt() {
        var L;
        return L = x.pop() || T.lex() || It, typeof L != "number" && (L instanceof Array && (x = L, L = x.pop()), L = c.symbols_[L] || L), L;
      }
      p(Mt, "lex");
      for (var P, O, M, xt, z = {}, at, V, Vt, rt; ; ) {
        if (O = g[g.length - 1], this.defaultActions[O] ? M = this.defaultActions[O] : ((P === null || typeof P > "u") && (P = Mt()), M = Z[O] && Z[O][P]), typeof M > "u" || !M.length || !M[0]) {
          var dt = "";
          rt = [];
          for (at in Z[O])
            this.terminals_[at] && at > oi && rt.push("'" + this.terminals_[at] + "'");
          T.showPosition ? dt = "Parse error on line " + (nt + 1) + `:
` + T.showPosition() + `
Expecting ` + rt.join(", ") + ", got '" + (this.terminals_[P] || P) + "'" : dt = "Parse error on line " + (nt + 1) + ": Unexpected " + (P == It ? "end of input" : "'" + (this.terminals_[P] || P) + "'"), this.parseError(dt, {
            text: T.match,
            token: this.terminals_[P] || P,
            line: T.yylineno,
            loc: gt,
            expected: rt
          });
        }
        if (M[0] instanceof Array && M.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + O + ", token: " + P);
        switch (M[0]) {
          case 1:
            g.push(P), A.push(T.yytext), r.push(T.yylloc), g.push(M[1]), P = null, Et = T.yyleng, d = T.yytext, nt = T.yylineno, gt = T.yylloc;
            break;
          case 2:
            if (V = this.productions_[M[1]][1], z.$ = A[A.length - V], z._$ = {
              first_line: r[r.length - (V || 1)].first_line,
              last_line: r[r.length - 1].last_line,
              first_column: r[r.length - (V || 1)].first_column,
              last_column: r[r.length - 1].last_column
            }, li && (z._$.range = [
              r[r.length - (V || 1)].range[0],
              r[r.length - 1].range[1]
            ]), xt = this.performAction.apply(z, [
              d,
              Et,
              nt,
              W.yy,
              M[1],
              A,
              r
            ].concat(hi)), typeof xt < "u")
              return xt;
            V && (g = g.slice(0, -1 * V * 2), A = A.slice(0, -1 * V), r = r.slice(0, -1 * V)), g.push(this.productions_[M[1]][0]), A.push(z.$), r.push(z._$), Vt = Z[g[g.length - 2]][g[g.length - 1]], g.push(Vt);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, ri = /* @__PURE__ */ function() {
    var B = {
      EOF: 1,
      parseError: /* @__PURE__ */ p(function(c, g) {
        if (this.yy.parser)
          this.yy.parser.parseError(c, g);
        else
          throw new Error(c);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: /* @__PURE__ */ p(function(h2, c) {
        return this.yy = c || this.yy || {}, this._input = h2, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: /* @__PURE__ */ p(function() {
        var h2 = this._input[0];
        this.yytext += h2, this.yyleng++, this.offset++, this.match += h2, this.matched += h2;
        var c = h2.match(/(?:\r\n?|\n).*/g);
        return c ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), h2;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: /* @__PURE__ */ p(function(h2) {
        var c = h2.length, g = h2.split(/(?:\r\n?|\n)/g);
        this._input = h2 + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - c), this.offset -= c;
        var x = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), g.length - 1 && (this.yylineno -= g.length - 1);
        var A = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: g ? (g.length === x.length ? this.yylloc.first_column : 0) + x[x.length - g.length].length - g[0].length : this.yylloc.first_column - c
        }, this.options.ranges && (this.yylloc.range = [A[0], A[0] + this.yyleng - c]), this.yyleng = this.yytext.length, this;
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
      less: /* @__PURE__ */ p(function(h2) {
        this.unput(this.match.slice(h2));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: /* @__PURE__ */ p(function() {
        var h2 = this.matched.substr(0, this.matched.length - this.match.length);
        return (h2.length > 20 ? "..." : "") + h2.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: /* @__PURE__ */ p(function() {
        var h2 = this.match;
        return h2.length < 20 && (h2 += this._input.substr(0, 20 - h2.length)), (h2.substr(0, 20) + (h2.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: /* @__PURE__ */ p(function() {
        var h2 = this.pastInput(), c = new Array(h2.length + 1).join("-");
        return h2 + this.upcomingInput() + `
` + c + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: /* @__PURE__ */ p(function(h2, c) {
        var g, x, A;
        if (this.options.backtrack_lexer && (A = {
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
        }, this.options.ranges && (A.yylloc.range = this.yylloc.range.slice(0))), x = h2[0].match(/(?:\r\n?|\n).*/g), x && (this.yylineno += x.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: x ? x[x.length - 1].length - x[x.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + h2[0].length
        }, this.yytext += h2[0], this.match += h2[0], this.matches = h2, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(h2[0].length), this.matched += h2[0], g = this.performAction.call(this, this.yy, this, c, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), g)
          return g;
        if (this._backtrack) {
          for (var r in A)
            this[r] = A[r];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: /* @__PURE__ */ p(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var h2, c, g, x;
        this._more || (this.yytext = "", this.match = "");
        for (var A = this._currentRules(), r = 0; r < A.length; r++)
          if (g = this._input.match(this.rules[A[r]]), g && (!c || g[0].length > c[0].length)) {
            if (c = g, x = r, this.options.backtrack_lexer) {
              if (h2 = this.test_match(g, A[r]), h2 !== false)
                return h2;
              if (this._backtrack) {
                c = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return c ? (h2 = this.test_match(c, A[x]), h2 !== false ? h2 : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: /* @__PURE__ */ p(function() {
        var c = this.next();
        return c || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: /* @__PURE__ */ p(function(c) {
        this.conditionStack.push(c);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: /* @__PURE__ */ p(function() {
        var c = this.conditionStack.length - 1;
        return c > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: /* @__PURE__ */ p(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: /* @__PURE__ */ p(function(c) {
        return c = this.conditionStack.length - 1 - Math.abs(c || 0), c >= 0 ? this.conditionStack[c] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: /* @__PURE__ */ p(function(c) {
        this.begin(c);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: /* @__PURE__ */ p(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: { "case-insensitive": true },
      performAction: /* @__PURE__ */ p(function(c, g, x, A) {
        switch (x) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            return this.popState(), 34;
          case 3:
            return this.popState(), 34;
          case 4:
            return 34;
          case 5:
            break;
          case 6:
            return 10;
          case 7:
            return this.pushState("acc_title"), 19;
          case 8:
            return this.popState(), "acc_title_value";
          case 9:
            return this.pushState("acc_descr"), 21;
          case 10:
            return this.popState(), "acc_descr_value";
          case 11:
            this.pushState("acc_descr_multiline");
            break;
          case 12:
            this.popState();
            break;
          case 13:
            return "acc_descr_multiline_value";
          case 14:
            return 5;
          case 15:
            return 8;
          case 16:
            return this.pushState("axis_data"), "X_AXIS";
          case 17:
            return this.pushState("axis_data"), "Y_AXIS";
          case 18:
            return this.pushState("axis_band_data"), 24;
          case 19:
            return 31;
          case 20:
            return this.pushState("data"), 16;
          case 21:
            return this.pushState("data"), 18;
          case 22:
            return this.pushState("data_inner"), 24;
          case 23:
            return 27;
          case 24:
            return this.popState(), 26;
          case 25:
            this.popState();
            break;
          case 26:
            this.pushState("string");
            break;
          case 27:
            this.popState();
            break;
          case 28:
            return "STR";
          case 29:
            return 24;
          case 30:
            return 26;
          case 31:
            return 43;
          case 32:
            return "COLON";
          case 33:
            return 44;
          case 34:
            return 28;
          case 35:
            return 45;
          case 36:
            return 46;
          case 37:
            return 48;
          case 38:
            return 50;
          case 39:
            return 47;
          case 40:
            return 41;
          case 41:
            return 49;
          case 42:
            return 42;
          case 43:
            break;
          case 44:
            return 35;
          case 45:
            return 36;
        }
      }, "anonymous"),
      rules: [/^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:(\r?\n))/i, /^(?:(\r?\n))/i, /^(?:[\n\r]+)/i, /^(?:%%[^\n]*)/i, /^(?:title\b)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:\{)/i, /^(?:[^\}]*)/i, /^(?:xychart-beta\b)/i, /^(?:(?:vertical|horizontal))/i, /^(?:x-axis\b)/i, /^(?:y-axis\b)/i, /^(?:\[)/i, /^(?:-->)/i, /^(?:line\b)/i, /^(?:bar\b)/i, /^(?:\[)/i, /^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i, /^(?:\])/i, /^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:\[)/i, /^(?:\])/i, /^(?:[A-Za-z]+)/i, /^(?::)/i, /^(?:\+)/i, /^(?:,)/i, /^(?:=)/i, /^(?:\*)/i, /^(?:#)/i, /^(?:[\_])/i, /^(?:\.)/i, /^(?:&)/i, /^(?:-)/i, /^(?:[0-9]+)/i, /^(?:\s+)/i, /^(?:;)/i, /^(?:$)/i],
      conditions: { data_inner: { rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 20, 21, 23, 24, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], inclusive: true }, data: { rules: [0, 1, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 20, 21, 22, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], inclusive: true }, axis_band_data: { rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 20, 21, 24, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], inclusive: true }, axis_data: { rules: [0, 1, 2, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], inclusive: true }, acc_descr_multiline: { rules: [12, 13], inclusive: false }, acc_descr: { rules: [10], inclusive: false }, acc_title: { rules: [8], inclusive: false }, title: { rules: [], inclusive: false }, md_string: { rules: [], inclusive: false }, string: { rules: [27, 28], inclusive: false }, INITIAL: { rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 20, 21, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], inclusive: true } }
    };
    return B;
  }();
  ct.lexer = ri;
  function st() {
    this.yy = {};
  }
  return p(st, "Parser"), st.prototype = ct, ct.Parser = st, new st();
}();
ft.parser = ft;
var Ri = ft;
function mt(e) {
  return e.type === "bar";
}
p(mt, "isBarPlot");
function wt(e) {
  return e.type === "band";
}
p(wt, "isBandAxisData");
function F(e) {
  return e.type === "linear";
}
p(F, "isLinearAxisData");
var X, Yt = (X = class {
  constructor(t2) {
    this.parentGroup = t2;
  }
  getMaxDimension(t2, i) {
    if (!this.parentGroup)
      return {
        width: t2.reduce((o, u) => Math.max(u.length, o), 0) * i,
        height: i
      };
    const s = {
      width: 0,
      height: 0
    }, n = this.parentGroup.append("g").attr("visibility", "hidden").attr("font-size", i);
    for (const o of t2) {
      const u = T2(n, 1, o), f = u ? u.width : o.length * i, p2 = u ? u.height : i;
      s.width = Math.max(s.width, f), s.height = Math.max(s.height, p2);
    }
    return n.remove(), s;
  }
}, p(X, "TextDimensionCalculatorWithFont"), X), Ot = 0.7, zt = 0.2, N, Ht = (N = class {
  constructor(t2, i, s, n) {
    this.axisConfig = t2, this.title = i, this.textDimensionCalculator = s, this.axisThemeConfig = n, this.boundingRect = { x: 0, y: 0, width: 0, height: 0 }, this.axisPosition = "left", this.showTitle = false, this.showLabel = false, this.showTick = false, this.showAxisLine = false, this.outerPadding = 0, this.titleTextHeight = 0, this.labelTextHeight = 0, this.range = [0, 10], this.boundingRect = { x: 0, y: 0, width: 0, height: 0 }, this.axisPosition = "left";
  }
  setRange(t2) {
    this.range = t2, this.axisPosition === "left" || this.axisPosition === "right" ? this.boundingRect.height = t2[1] - t2[0] : this.boundingRect.width = t2[1] - t2[0], this.recalculateScale();
  }
  getRange() {
    return [this.range[0] + this.outerPadding, this.range[1] - this.outerPadding];
  }
  setAxisPosition(t2) {
    this.axisPosition = t2, this.setRange(this.range);
  }
  getTickDistance() {
    const t2 = this.getRange();
    return Math.abs(t2[0] - t2[1]) / this.getTickValues().length;
  }
  getAxisOuterPadding() {
    return this.outerPadding;
  }
  getLabelDimension() {
    return this.textDimensionCalculator.getMaxDimension(
      this.getTickValues().map((t2) => t2.toString()),
      this.axisConfig.labelFontSize
    );
  }
  recalculateOuterPaddingToDrawBar() {
    Ot * this.getTickDistance() > this.outerPadding * 2 && (this.outerPadding = Math.floor(Ot * this.getTickDistance() / 2)), this.recalculateScale();
  }
  calculateSpaceIfDrawnHorizontally(t2) {
    let i = t2.height;
    if (this.axisConfig.showAxisLine && i > this.axisConfig.axisLineWidth && (i -= this.axisConfig.axisLineWidth, this.showAxisLine = true), this.axisConfig.showLabel) {
      const s = this.getLabelDimension(), n = zt * t2.width;
      this.outerPadding = Math.min(s.width / 2, n);
      const o = s.height + this.axisConfig.labelPadding * 2;
      this.labelTextHeight = s.height, o <= i && (i -= o, this.showLabel = true);
    }
    if (this.axisConfig.showTick && i >= this.axisConfig.tickLength && (this.showTick = true, i -= this.axisConfig.tickLength), this.axisConfig.showTitle && this.title) {
      const s = this.textDimensionCalculator.getMaxDimension(
        [this.title],
        this.axisConfig.titleFontSize
      ), n = s.height + this.axisConfig.titlePadding * 2;
      this.titleTextHeight = s.height, n <= i && (i -= n, this.showTitle = true);
    }
    this.boundingRect.width = t2.width, this.boundingRect.height = t2.height - i;
  }
  calculateSpaceIfDrawnVertical(t2) {
    let i = t2.width;
    if (this.axisConfig.showAxisLine && i > this.axisConfig.axisLineWidth && (i -= this.axisConfig.axisLineWidth, this.showAxisLine = true), this.axisConfig.showLabel) {
      const s = this.getLabelDimension(), n = zt * t2.height;
      this.outerPadding = Math.min(s.height / 2, n);
      const o = s.width + this.axisConfig.labelPadding * 2;
      o <= i && (i -= o, this.showLabel = true);
    }
    if (this.axisConfig.showTick && i >= this.axisConfig.tickLength && (this.showTick = true, i -= this.axisConfig.tickLength), this.axisConfig.showTitle && this.title) {
      const s = this.textDimensionCalculator.getMaxDimension(
        [this.title],
        this.axisConfig.titleFontSize
      ), n = s.height + this.axisConfig.titlePadding * 2;
      this.titleTextHeight = s.height, n <= i && (i -= n, this.showTitle = true);
    }
    this.boundingRect.width = t2.width - i, this.boundingRect.height = t2.height;
  }
  calculateSpace(t2) {
    return this.axisPosition === "left" || this.axisPosition === "right" ? this.calculateSpaceIfDrawnVertical(t2) : this.calculateSpaceIfDrawnHorizontally(t2), this.recalculateScale(), {
      width: this.boundingRect.width,
      height: this.boundingRect.height
    };
  }
  setBoundingBoxXY(t2) {
    this.boundingRect.x = t2.x, this.boundingRect.y = t2.y;
  }
  getDrawableElementsForLeftAxis() {
    const t2 = [];
    if (this.showAxisLine) {
      const i = this.boundingRect.x + this.boundingRect.width - this.axisConfig.axisLineWidth / 2;
      t2.push({
        type: "path",
        groupTexts: ["left-axis", "axisl-line"],
        data: [
          {
            path: `M ${i},${this.boundingRect.y} L ${i},${this.boundingRect.y + this.boundingRect.height} `,
            strokeFill: this.axisThemeConfig.axisLineColor,
            strokeWidth: this.axisConfig.axisLineWidth
          }
        ]
      });
    }
    if (this.showLabel && t2.push({
      type: "text",
      groupTexts: ["left-axis", "label"],
      data: this.getTickValues().map((i) => ({
        text: i.toString(),
        x: this.boundingRect.x + this.boundingRect.width - (this.showLabel ? this.axisConfig.labelPadding : 0) - (this.showTick ? this.axisConfig.tickLength : 0) - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0),
        y: this.getScaleValue(i),
        fill: this.axisThemeConfig.labelColor,
        fontSize: this.axisConfig.labelFontSize,
        rotation: 0,
        verticalPos: "middle",
        horizontalPos: "right"
      }))
    }), this.showTick) {
      const i = this.boundingRect.x + this.boundingRect.width - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
      t2.push({
        type: "path",
        groupTexts: ["left-axis", "ticks"],
        data: this.getTickValues().map((s) => ({
          path: `M ${i},${this.getScaleValue(s)} L ${i - this.axisConfig.tickLength},${this.getScaleValue(s)}`,
          strokeFill: this.axisThemeConfig.tickColor,
          strokeWidth: this.axisConfig.tickWidth
        }))
      });
    }
    return this.showTitle && t2.push({
      type: "text",
      groupTexts: ["left-axis", "title"],
      data: [
        {
          text: this.title,
          x: this.boundingRect.x + this.axisConfig.titlePadding,
          y: this.boundingRect.y + this.boundingRect.height / 2,
          fill: this.axisThemeConfig.titleColor,
          fontSize: this.axisConfig.titleFontSize,
          rotation: 270,
          verticalPos: "top",
          horizontalPos: "center"
        }
      ]
    }), t2;
  }
  getDrawableElementsForBottomAxis() {
    const t2 = [];
    if (this.showAxisLine) {
      const i = this.boundingRect.y + this.axisConfig.axisLineWidth / 2;
      t2.push({
        type: "path",
        groupTexts: ["bottom-axis", "axis-line"],
        data: [
          {
            path: `M ${this.boundingRect.x},${i} L ${this.boundingRect.x + this.boundingRect.width},${i}`,
            strokeFill: this.axisThemeConfig.axisLineColor,
            strokeWidth: this.axisConfig.axisLineWidth
          }
        ]
      });
    }
    if (this.showLabel && t2.push({
      type: "text",
      groupTexts: ["bottom-axis", "label"],
      data: this.getTickValues().map((i) => ({
        text: i.toString(),
        x: this.getScaleValue(i),
        y: this.boundingRect.y + this.axisConfig.labelPadding + (this.showTick ? this.axisConfig.tickLength : 0) + (this.showAxisLine ? this.axisConfig.axisLineWidth : 0),
        fill: this.axisThemeConfig.labelColor,
        fontSize: this.axisConfig.labelFontSize,
        rotation: 0,
        verticalPos: "top",
        horizontalPos: "center"
      }))
    }), this.showTick) {
      const i = this.boundingRect.y + (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
      t2.push({
        type: "path",
        groupTexts: ["bottom-axis", "ticks"],
        data: this.getTickValues().map((s) => ({
          path: `M ${this.getScaleValue(s)},${i} L ${this.getScaleValue(s)},${i + this.axisConfig.tickLength}`,
          strokeFill: this.axisThemeConfig.tickColor,
          strokeWidth: this.axisConfig.tickWidth
        }))
      });
    }
    return this.showTitle && t2.push({
      type: "text",
      groupTexts: ["bottom-axis", "title"],
      data: [
        {
          text: this.title,
          x: this.range[0] + (this.range[1] - this.range[0]) / 2,
          y: this.boundingRect.y + this.boundingRect.height - this.axisConfig.titlePadding - this.titleTextHeight,
          fill: this.axisThemeConfig.titleColor,
          fontSize: this.axisConfig.titleFontSize,
          rotation: 0,
          verticalPos: "top",
          horizontalPos: "center"
        }
      ]
    }), t2;
  }
  getDrawableElementsForTopAxis() {
    const t2 = [];
    if (this.showAxisLine) {
      const i = this.boundingRect.y + this.boundingRect.height - this.axisConfig.axisLineWidth / 2;
      t2.push({
        type: "path",
        groupTexts: ["top-axis", "axis-line"],
        data: [
          {
            path: `M ${this.boundingRect.x},${i} L ${this.boundingRect.x + this.boundingRect.width},${i}`,
            strokeFill: this.axisThemeConfig.axisLineColor,
            strokeWidth: this.axisConfig.axisLineWidth
          }
        ]
      });
    }
    if (this.showLabel && t2.push({
      type: "text",
      groupTexts: ["top-axis", "label"],
      data: this.getTickValues().map((i) => ({
        text: i.toString(),
        x: this.getScaleValue(i),
        y: this.boundingRect.y + (this.showTitle ? this.titleTextHeight + this.axisConfig.titlePadding * 2 : 0) + this.axisConfig.labelPadding,
        fill: this.axisThemeConfig.labelColor,
        fontSize: this.axisConfig.labelFontSize,
        rotation: 0,
        verticalPos: "top",
        horizontalPos: "center"
      }))
    }), this.showTick) {
      const i = this.boundingRect.y;
      t2.push({
        type: "path",
        groupTexts: ["top-axis", "ticks"],
        data: this.getTickValues().map((s) => ({
          path: `M ${this.getScaleValue(s)},${i + this.boundingRect.height - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)} L ${this.getScaleValue(s)},${i + this.boundingRect.height - this.axisConfig.tickLength - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)}`,
          strokeFill: this.axisThemeConfig.tickColor,
          strokeWidth: this.axisConfig.tickWidth
        }))
      });
    }
    return this.showTitle && t2.push({
      type: "text",
      groupTexts: ["top-axis", "title"],
      data: [
        {
          text: this.title,
          x: this.boundingRect.x + this.boundingRect.width / 2,
          y: this.boundingRect.y + this.axisConfig.titlePadding,
          fill: this.axisThemeConfig.titleColor,
          fontSize: this.axisConfig.titleFontSize,
          rotation: 0,
          verticalPos: "top",
          horizontalPos: "center"
        }
      ]
    }), t2;
  }
  getDrawableElements() {
    if (this.axisPosition === "left")
      return this.getDrawableElementsForLeftAxis();
    if (this.axisPosition === "right")
      throw Error("Drawing of right axis is not implemented");
    return this.axisPosition === "bottom" ? this.getDrawableElementsForBottomAxis() : this.axisPosition === "top" ? this.getDrawableElementsForTopAxis() : [];
  }
}, p(N, "BaseAxis"), N), Y, Ti = (Y = class extends Ht {
  constructor(t2, i, s, n, o) {
    super(t2, n, o, i), this.categories = s, this.scale = pt().domain(this.categories).range(this.getRange());
  }
  setRange(t2) {
    super.setRange(t2);
  }
  recalculateScale() {
    this.scale = pt().domain(this.categories).range(this.getRange()).paddingInner(1).paddingOuter(0).align(0.5), D.trace("BandAxis axis final categories, range: ", this.categories, this.getRange());
  }
  getTickValues() {
    return this.categories;
  }
  getScaleValue(t2) {
    return this.scale(t2) ?? this.getRange()[0];
  }
}, p(Y, "BandAxis"), Y), H, Di = (H = class extends Ht {
  constructor(t2, i, s, n, o) {
    super(t2, n, o, i), this.domain = s, this.scale = Zn().domain(this.domain).range(this.getRange());
  }
  getTickValues() {
    return this.scale.ticks();
  }
  recalculateScale() {
    const t2 = [...this.domain];
    this.axisPosition === "left" && t2.reverse(), this.scale = Zn().domain(t2).range(this.getRange());
  }
  getScaleValue(t2) {
    return this.scale(t2);
  }
}, p(H, "LinearAxis"), H);
function yt(e, t2, i, s) {
  const n = new Yt(s);
  return wt(e) ? new Ti(
    t2,
    i,
    e.categories,
    e.title,
    n
  ) : new Di(
    t2,
    i,
    [e.min, e.max],
    e.title,
    n
  );
}
p(yt, "getAxis");
var U, vi = (U = class {
  constructor(t2, i, s, n) {
    this.textDimensionCalculator = t2, this.chartConfig = i, this.chartData = s, this.chartThemeConfig = n, this.boundingRect = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }, this.showChartTitle = false;
  }
  setBoundingBoxXY(t2) {
    this.boundingRect.x = t2.x, this.boundingRect.y = t2.y;
  }
  calculateSpace(t2) {
    const i = this.textDimensionCalculator.getMaxDimension(
      [this.chartData.title],
      this.chartConfig.titleFontSize
    ), s = Math.max(i.width, t2.width), n = i.height + 2 * this.chartConfig.titlePadding;
    return i.width <= s && i.height <= n && this.chartConfig.showTitle && this.chartData.title && (this.boundingRect.width = s, this.boundingRect.height = n, this.showChartTitle = true), {
      width: this.boundingRect.width,
      height: this.boundingRect.height
    };
  }
  getDrawableElements() {
    const t2 = [];
    return this.showChartTitle && t2.push({
      groupTexts: ["chart-title"],
      type: "text",
      data: [
        {
          fontSize: this.chartConfig.titleFontSize,
          text: this.chartData.title,
          verticalPos: "middle",
          horizontalPos: "center",
          x: this.boundingRect.x + this.boundingRect.width / 2,
          y: this.boundingRect.y + this.boundingRect.height / 2,
          fill: this.chartThemeConfig.titleColor,
          rotation: 0
        }
      ]
    }), t2;
  }
}, p(U, "ChartTitle"), U);
function Ut(e, t2, i, s) {
  const n = new Yt(s);
  return new vi(n, e, t2, i);
}
p(Ut, "getChartTitleComponent");
var $, Pi = ($ = class {
  constructor(t2, i, s, n, o) {
    this.plotData = t2, this.xAxis = i, this.yAxis = s, this.orientation = n, this.plotIndex = o;
  }
  getDrawableElement() {
    const t2 = this.plotData.data.map((s) => [
      this.xAxis.getScaleValue(s[0]),
      this.yAxis.getScaleValue(s[1])
    ]);
    let i;
    return this.orientation === "horizontal" ? i = H0().y((s) => s[0]).x((s) => s[1])(t2) : i = H0().x((s) => s[0]).y((s) => s[1])(t2), i ? [
      {
        groupTexts: ["plot", `line-plot-${this.plotIndex}`],
        type: "path",
        data: [
          {
            path: i,
            strokeFill: this.plotData.strokeFill,
            strokeWidth: this.plotData.strokeWidth
          }
        ]
      }
    ] : [];
  }
}, p($, "LinePlot"), $), G, Li = (G = class {
  constructor(t2, i, s, n, o, u) {
    this.barData = t2, this.boundingRect = i, this.xAxis = s, this.yAxis = n, this.orientation = o, this.plotIndex = u;
  }
  getDrawableElement() {
    const t2 = this.barData.data.map((o) => [
      this.xAxis.getScaleValue(o[0]),
      this.yAxis.getScaleValue(o[1])
    ]), s = Math.min(this.xAxis.getAxisOuterPadding() * 2, this.xAxis.getTickDistance()) * (1 - 0.05), n = s / 2;
    return this.orientation === "horizontal" ? [
      {
        groupTexts: ["plot", `bar-plot-${this.plotIndex}`],
        type: "rect",
        data: t2.map((o) => ({
          x: this.boundingRect.x,
          y: o[0] - n,
          height: s,
          width: o[1] - this.boundingRect.x,
          fill: this.barData.fill,
          strokeWidth: 0,
          strokeFill: this.barData.fill
        }))
      }
    ] : [
      {
        groupTexts: ["plot", `bar-plot-${this.plotIndex}`],
        type: "rect",
        data: t2.map((o) => ({
          x: o[0] - n,
          y: o[1],
          width: s,
          height: this.boundingRect.y + this.boundingRect.height - o[1],
          fill: this.barData.fill,
          strokeWidth: 0,
          strokeFill: this.barData.fill
        }))
      }
    ];
  }
}, p(G, "BarPlot"), G), q, Ei = (q = class {
  constructor(t2, i, s) {
    this.chartConfig = t2, this.chartData = i, this.chartThemeConfig = s, this.boundingRect = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
  setAxes(t2, i) {
    this.xAxis = t2, this.yAxis = i;
  }
  setBoundingBoxXY(t2) {
    this.boundingRect.x = t2.x, this.boundingRect.y = t2.y;
  }
  calculateSpace(t2) {
    return this.boundingRect.width = t2.width, this.boundingRect.height = t2.height, {
      width: this.boundingRect.width,
      height: this.boundingRect.height
    };
  }
  getDrawableElements() {
    if (!(this.xAxis && this.yAxis))
      throw Error("Axes must be passed to render Plots");
    const t2 = [];
    for (const [i, s] of this.chartData.plots.entries())
      switch (s.type) {
        case "line":
          {
            const n = new Pi(
              s,
              this.xAxis,
              this.yAxis,
              this.chartConfig.chartOrientation,
              i
            );
            t2.push(...n.getDrawableElement());
          }
          break;
        case "bar":
          {
            const n = new Li(
              s,
              this.boundingRect,
              this.xAxis,
              this.yAxis,
              this.chartConfig.chartOrientation,
              i
            );
            t2.push(...n.getDrawableElement());
          }
          break;
      }
    return t2;
  }
}, p(q, "BasePlot"), q);
function $t(e, t2, i) {
  return new Ei(e, t2, i);
}
p($t, "getPlotComponent");
var j, Ii = (j = class {
  constructor(t2, i, s, n) {
    this.chartConfig = t2, this.chartData = i, this.componentStore = {
      title: Ut(t2, i, s, n),
      plot: $t(t2, i, s),
      xAxis: yt(
        i.xAxis,
        t2.xAxis,
        {
          titleColor: s.xAxisTitleColor,
          labelColor: s.xAxisLabelColor,
          tickColor: s.xAxisTickColor,
          axisLineColor: s.xAxisLineColor
        },
        n
      ),
      yAxis: yt(
        i.yAxis,
        t2.yAxis,
        {
          titleColor: s.yAxisTitleColor,
          labelColor: s.yAxisLabelColor,
          tickColor: s.yAxisTickColor,
          axisLineColor: s.yAxisLineColor
        },
        n
      )
    };
  }
  calculateVerticalSpace() {
    let t2 = this.chartConfig.width, i = this.chartConfig.height, s = 0, n = 0, o = Math.floor(t2 * this.chartConfig.plotReservedSpacePercent / 100), u = Math.floor(
      i * this.chartConfig.plotReservedSpacePercent / 100
    ), f = this.componentStore.plot.calculateSpace({
      width: o,
      height: u
    });
    t2 -= f.width, i -= f.height, f = this.componentStore.title.calculateSpace({
      width: this.chartConfig.width,
      height: i
    }), n = f.height, i -= f.height, this.componentStore.xAxis.setAxisPosition("bottom"), f = this.componentStore.xAxis.calculateSpace({
      width: t2,
      height: i
    }), i -= f.height, this.componentStore.yAxis.setAxisPosition("left"), f = this.componentStore.yAxis.calculateSpace({
      width: t2,
      height: i
    }), s = f.width, t2 -= f.width, t2 > 0 && (o += t2, t2 = 0), i > 0 && (u += i, i = 0), this.componentStore.plot.calculateSpace({
      width: o,
      height: u
    }), this.componentStore.plot.setBoundingBoxXY({ x: s, y: n }), this.componentStore.xAxis.setRange([s, s + o]), this.componentStore.xAxis.setBoundingBoxXY({ x: s, y: n + u }), this.componentStore.yAxis.setRange([n, n + u]), this.componentStore.yAxis.setBoundingBoxXY({ x: 0, y: n }), this.chartData.plots.some((p2) => mt(p2)) && this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
  }
  calculateHorizontalSpace() {
    let t2 = this.chartConfig.width, i = this.chartConfig.height, s = 0, n = 0, o = 0, u = Math.floor(t2 * this.chartConfig.plotReservedSpacePercent / 100), f = Math.floor(
      i * this.chartConfig.plotReservedSpacePercent / 100
    ), p2 = this.componentStore.plot.calculateSpace({
      width: u,
      height: f
    });
    t2 -= p2.width, i -= p2.height, p2 = this.componentStore.title.calculateSpace({
      width: this.chartConfig.width,
      height: i
    }), s = p2.height, i -= p2.height, this.componentStore.xAxis.setAxisPosition("left"), p2 = this.componentStore.xAxis.calculateSpace({
      width: t2,
      height: i
    }), t2 -= p2.width, n = p2.width, this.componentStore.yAxis.setAxisPosition("top"), p2 = this.componentStore.yAxis.calculateSpace({
      width: t2,
      height: i
    }), i -= p2.height, o = s + p2.height, t2 > 0 && (u += t2, t2 = 0), i > 0 && (f += i, i = 0), this.componentStore.plot.calculateSpace({
      width: u,
      height: f
    }), this.componentStore.plot.setBoundingBoxXY({ x: n, y: o }), this.componentStore.yAxis.setRange([n, n + u]), this.componentStore.yAxis.setBoundingBoxXY({ x: n, y: s }), this.componentStore.xAxis.setRange([o, o + f]), this.componentStore.xAxis.setBoundingBoxXY({ x: 0, y: o }), this.chartData.plots.some((k) => mt(k)) && this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
  }
  calculateSpace() {
    this.chartConfig.chartOrientation === "horizontal" ? this.calculateHorizontalSpace() : this.calculateVerticalSpace();
  }
  getDrawableElement() {
    this.calculateSpace();
    const t2 = [];
    this.componentStore.plot.setAxes(this.componentStore.xAxis, this.componentStore.yAxis);
    for (const i of Object.values(this.componentStore))
      t2.push(...i.getDrawableElements());
    return t2;
  }
}, p(j, "Orchestrator"), j), Q, Mi = (Q = class {
  static build(t2, i, s, n) {
    return new Ii(t2, i, s, n).getDrawableElement();
  }
}, p(Q, "XYChartBuilder"), Q), J = 0, Gt, tt = _t(), it = St(), b = kt(), bt = it.plotColorPalette.split(",").map((e) => e.trim()), ot = false, Ct = false;
function St() {
  const e = km(), t2 = Jt$1();
  return go(e.xyChart, t2.themeVariables.xyChart);
}
p(St, "getChartDefaultThemeConfig");
function _t() {
  const e = Jt$1();
  return go(
    Nc.xyChart,
    e.xyChart
  );
}
p(_t, "getChartDefaultConfig");
function kt() {
  return {
    yAxis: {
      type: "linear",
      title: "",
      min: 1 / 0,
      max: -1 / 0
    },
    xAxis: {
      type: "band",
      title: "",
      categories: []
    },
    title: "",
    plots: []
  };
}
p(kt, "getChartDefaultData");
function ht(e) {
  const t2 = Jt$1();
  return rr(e.trim(), t2);
}
p(ht, "textSanitizer");
function qt(e) {
  Gt = e;
}
p(qt, "setTmpSVGG");
function jt(e) {
  e === "horizontal" ? tt.chartOrientation = "horizontal" : tt.chartOrientation = "vertical";
}
p(jt, "setOrientation");
function Qt(e) {
  b.xAxis.title = ht(e.text);
}
p(Qt, "setXAxisTitle");
function Rt(e, t2) {
  b.xAxis = { type: "linear", title: b.xAxis.title, min: e, max: t2 }, ot = true;
}
p(Rt, "setXAxisRangeData");
function Kt(e) {
  b.xAxis = {
    type: "band",
    title: b.xAxis.title,
    categories: e.map((t2) => ht(t2.text))
  }, ot = true;
}
p(Kt, "setXAxisBand");
function Zt(e) {
  b.yAxis.title = ht(e.text);
}
p(Zt, "setYAxisTitle");
function Jt(e, t2) {
  b.yAxis = { type: "linear", title: b.yAxis.title, min: e, max: t2 }, Ct = true;
}
p(Jt, "setYAxisRangeData");
function ti(e) {
  const t2 = Math.min(...e), i = Math.max(...e), s = F(b.yAxis) ? b.yAxis.min : 1 / 0, n = F(b.yAxis) ? b.yAxis.max : -1 / 0;
  b.yAxis = {
    type: "linear",
    title: b.yAxis.title,
    min: Math.min(s, t2),
    max: Math.max(n, i)
  };
}
p(ti, "setYAxisRangeFromPlotData");
function Tt(e) {
  let t2 = [];
  if (e.length === 0)
    return t2;
  if (!ot) {
    const i = F(b.xAxis) ? b.xAxis.min : 1 / 0, s = F(b.xAxis) ? b.xAxis.max : -1 / 0;
    Rt(Math.min(i, 1), Math.max(s, e.length));
  }
  if (Ct || ti(e), wt(b.xAxis) && (t2 = b.xAxis.categories.map((i, s) => [i, e[s]])), F(b.xAxis)) {
    const i = b.xAxis.min, s = b.xAxis.max, n = (s - i) / (e.length - 1), o = [];
    for (let u = i; u <= s; u += n)
      o.push(`${u}`);
    t2 = o.map((u, f) => [u, e[f]]);
  }
  return t2;
}
p(Tt, "transformDataWithoutCategory");
function Dt(e) {
  return bt[e === 0 ? 0 : e % bt.length];
}
p(Dt, "getPlotColorFromPalette");
function ii(e, t2) {
  const i = Tt(t2);
  b.plots.push({
    type: "line",
    strokeFill: Dt(J),
    strokeWidth: 2,
    data: i
  }), J++;
}
p(ii, "setLineData");
function ei(e, t2) {
  const i = Tt(t2);
  b.plots.push({
    type: "bar",
    fill: Dt(J),
    data: i
  }), J++;
}
p(ei, "setBarData");
function si() {
  if (b.plots.length === 0)
    throw Error("No Plot to render, please provide a plot with some data");
  return b.title = ay(), Mi.build(tt, b, it, Gt);
}
p(si, "getDrawableElem");
function ni() {
  return it;
}
p(ni, "getChartThemeConfig");
function ai() {
  return tt;
}
p(ai, "getChartConfig");
var Vi = /* @__PURE__ */ p(function() {
  Qm(), J = 0, tt = _t(), b = kt(), it = St(), bt = it.plotColorPalette.split(",").map((e) => e.trim()), ot = false, Ct = false;
}, "clear"), Bi = {
  getDrawableElem: si,
  clear: Vi,
  setAccTitle: Jm,
  getAccTitle: ty,
  setDiagramTitle: iy,
  getDiagramTitle: ay,
  getAccDescription: ry,
  setAccDescription: ey,
  setOrientation: jt,
  setXAxisTitle: Qt,
  setXAxisRangeData: Rt,
  setXAxisBand: Kt,
  setYAxisTitle: Zt,
  setYAxisRangeData: Jt,
  setLineData: ii,
  setBarData: ei,
  setTmpSVGG: qt,
  getChartThemeConfig: ni,
  getChartConfig: ai
}, Wi = /* @__PURE__ */ p((e, t2, i, s) => {
  const n = s.db, o = n.getChartThemeConfig(), u = n.getChartConfig();
  function f(m) {
    return m === "top" ? "text-before-edge" : "middle";
  }
  p(f, "getDominantBaseLine");
  function p$1(m) {
    return m === "left" ? "start" : m === "right" ? "end" : "middle";
  }
  p(p$1, "getTextAnchor");
  function k(m) {
    return `translate(${m.x}, ${m.y}) rotate(${m.rotation || 0})`;
  }
  p(k, "getTextTransformation"), D.debug(`Rendering xychart chart
` + e);
  const R = GC(t2), w = R.append("g").attr("class", "main"), y = w.append("rect").attr("width", u.width).attr("height", u.height).attr("class", "background");
  Xc(R, u.height, u.width, true), R.attr("viewBox", `0 0 ${u.width} ${u.height}`), y.attr("fill", o.backgroundColor), n.setTmpSVGG(R.append("g").attr("class", "mermaid-tmp-group"));
  const D$1 = n.getDrawableElem(), S = {};
  function v(m) {
    let _ = w, l = "";
    for (const [E] of m.entries()) {
      let K = w;
      E > 0 && S[l] && (K = S[l]), l += m[E], _ = S[l], _ || (_ = S[l] = K.append("g").attr("class", m[E]));
    }
    return _;
  }
  p(v, "getGroup");
  for (const m of D$1) {
    if (m.data.length === 0)
      continue;
    const _ = v(m.groupTexts);
    switch (m.type) {
      case "rect":
        _.selectAll("rect").data(m.data).enter().append("rect").attr("x", (l) => l.x).attr("y", (l) => l.y).attr("width", (l) => l.width).attr("height", (l) => l.height).attr("fill", (l) => l.fill).attr("stroke", (l) => l.strokeFill).attr("stroke-width", (l) => l.strokeWidth);
        break;
      case "text":
        _.selectAll("text").data(m.data).enter().append("text").attr("x", 0).attr("y", 0).attr("fill", (l) => l.fill).attr("font-size", (l) => l.fontSize).attr("dominant-baseline", (l) => f(l.verticalPos)).attr("text-anchor", (l) => p$1(l.horizontalPos)).attr("transform", (l) => k(l)).text((l) => l.text);
        break;
      case "path":
        _.selectAll("path").data(m.data).enter().append("path").attr("d", (l) => l.path).attr("fill", (l) => l.fill ? l.fill : "none").attr("stroke", (l) => l.strokeFill).attr("stroke-width", (l) => l.strokeWidth);
        break;
    }
  }
}, "draw"), Oi = {
  draw: Wi
}, Hi = {
  parser: Ri,
  db: Bi,
  renderer: Oi
};
export {
  Hi as diagram
};
