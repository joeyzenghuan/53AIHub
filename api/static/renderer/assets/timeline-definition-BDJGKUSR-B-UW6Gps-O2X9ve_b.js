import { _ as p, A as pm, X as Vc, x as Qm, c as dt$1, l as D$1, T as Xm, U as Fi, V as G, W as it$1 } from "./mermaid-j5R1o_wi-dCQhMK9F.js";
import { L as Li } from "./helper-7WMIPux3-FiO_G2IV.js";
import { v as vn } from "./arc-6Ea6x5Wp-0EvfSE2q.js";
import "./main-zTjO05wq.js";
import "./copy-BS31ARP0-eab1H3tb.js";
var X = function() {
  var n = /* @__PURE__ */ p(function(f, i, a, d) {
    for (a = a || {}, d = f.length; d--; a[f[d]] = i)
      ;
    return a;
  }, "o"), t = [6, 8, 10, 11, 12, 14, 16, 17, 20, 21], e = [1, 9], l = [1, 10], r = [1, 11], h = [1, 12], c = [1, 13], g = [1, 16], m = [1, 17], p$1 = {
    trace: /* @__PURE__ */ p(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, start: 3, timeline: 4, document: 5, EOF: 6, line: 7, SPACE: 8, statement: 9, NEWLINE: 10, title: 11, acc_title: 12, acc_title_value: 13, acc_descr: 14, acc_descr_value: 15, acc_descr_multiline_value: 16, section: 17, period_statement: 18, event_statement: 19, period: 20, event: 21, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "timeline", 6: "EOF", 8: "SPACE", 10: "NEWLINE", 11: "title", 12: "acc_title", 13: "acc_title_value", 14: "acc_descr", 15: "acc_descr_value", 16: "acc_descr_multiline_value", 17: "section", 20: "period", 21: "event" },
    productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 1], [9, 1], [18, 1], [19, 1]],
    performAction: /* @__PURE__ */ p(function(i, a, d, u, y, o, S) {
      var k = o.length - 1;
      switch (y) {
        case 1:
          return o[k - 1];
        case 2:
          this.$ = [];
          break;
        case 3:
          o[k - 1].push(o[k]), this.$ = o[k - 1];
          break;
        case 4:
        case 5:
          this.$ = o[k];
          break;
        case 6:
        case 7:
          this.$ = [];
          break;
        case 8:
          u.getCommonDb().setDiagramTitle(o[k].substr(6)), this.$ = o[k].substr(6);
          break;
        case 9:
          this.$ = o[k].trim(), u.getCommonDb().setAccTitle(this.$);
          break;
        case 10:
        case 11:
          this.$ = o[k].trim(), u.getCommonDb().setAccDescription(this.$);
          break;
        case 12:
          u.addSection(o[k].substr(8)), this.$ = o[k].substr(8);
          break;
        case 15:
          u.addTask(o[k], 0, ""), this.$ = o[k];
          break;
        case 16:
          u.addEvent(o[k].substr(2)), this.$ = o[k];
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, n(t, [2, 2], { 5: 3 }), { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: e, 12: l, 14: r, 16: h, 17: c, 18: 14, 19: 15, 20: g, 21: m }, n(t, [2, 7], { 1: [2, 1] }), n(t, [2, 3]), { 9: 18, 11: e, 12: l, 14: r, 16: h, 17: c, 18: 14, 19: 15, 20: g, 21: m }, n(t, [2, 5]), n(t, [2, 6]), n(t, [2, 8]), { 13: [1, 19] }, { 15: [1, 20] }, n(t, [2, 11]), n(t, [2, 12]), n(t, [2, 13]), n(t, [2, 14]), n(t, [2, 15]), n(t, [2, 16]), n(t, [2, 4]), n(t, [2, 9]), n(t, [2, 10])],
    defaultActions: {},
    parseError: /* @__PURE__ */ p(function(i, a) {
      if (a.recoverable)
        this.trace(i);
      else {
        var d = new Error(i);
        throw d.hash = a, d;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ p(function(i) {
      var a = this, d = [0], u = [], y = [null], o = [], S = this.table, k = "", M = 0, A = 0, B = 2, J = 1, O = o.slice.call(arguments, 1), v = Object.create(this.lexer), E = { yy: {} };
      for (var b in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, b) && (E.yy[b] = this.yy[b]);
      v.setInput(i, E.yy), E.yy.lexer = v, E.yy.parser = this, typeof v.yylloc > "u" && (v.yylloc = {});
      var L = v.yylloc;
      o.push(L);
      var P = v.options && v.options.ranges;
      typeof E.yy.parseError == "function" ? this.parseError = E.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function R(I) {
        d.length = d.length - 2 * I, y.length = y.length - I, o.length = o.length - I;
      }
      p(R, "popStack");
      function F() {
        var I;
        return I = u.pop() || v.lex() || J, typeof I != "number" && (I instanceof Array && (u = I, I = u.pop()), I = a.symbols_[I] || I), I;
      }
      p(F, "lex");
      for (var w, C, N, K, V = {}, j, $, et, G2; ; ) {
        if (C = d[d.length - 1], this.defaultActions[C] ? N = this.defaultActions[C] : ((w === null || typeof w > "u") && (w = F()), N = S[C] && S[C][w]), typeof N > "u" || !N.length || !N[0]) {
          var Q = "";
          G2 = [];
          for (j in S[C])
            this.terminals_[j] && j > B && G2.push("'" + this.terminals_[j] + "'");
          v.showPosition ? Q = "Parse error on line " + (M + 1) + `:
` + v.showPosition() + `
Expecting ` + G2.join(", ") + ", got '" + (this.terminals_[w] || w) + "'" : Q = "Parse error on line " + (M + 1) + ": Unexpected " + (w == J ? "end of input" : "'" + (this.terminals_[w] || w) + "'"), this.parseError(Q, {
            text: v.match,
            token: this.terminals_[w] || w,
            line: v.yylineno,
            loc: L,
            expected: G2
          });
        }
        if (N[0] instanceof Array && N.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + C + ", token: " + w);
        switch (N[0]) {
          case 1:
            d.push(w), y.push(v.yytext), o.push(v.yylloc), d.push(N[1]), w = null, A = v.yyleng, k = v.yytext, M = v.yylineno, L = v.yylloc;
            break;
          case 2:
            if ($ = this.productions_[N[1]][1], V.$ = y[y.length - $], V._$ = {
              first_line: o[o.length - ($ || 1)].first_line,
              last_line: o[o.length - 1].last_line,
              first_column: o[o.length - ($ || 1)].first_column,
              last_column: o[o.length - 1].last_column
            }, P && (V._$.range = [
              o[o.length - ($ || 1)].range[0],
              o[o.length - 1].range[1]
            ]), K = this.performAction.apply(V, [
              k,
              A,
              M,
              E.yy,
              N[1],
              y,
              o
            ].concat(O)), typeof K < "u")
              return K;
            $ && (d = d.slice(0, -1 * $ * 2), y = y.slice(0, -1 * $), o = o.slice(0, -1 * $)), d.push(this.productions_[N[1]][0]), y.push(V.$), o.push(V._$), et = S[d[d.length - 2]][d[d.length - 1]], d.push(et);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, x = /* @__PURE__ */ function() {
    var f = {
      EOF: 1,
      parseError: /* @__PURE__ */ p(function(a, d) {
        if (this.yy.parser)
          this.yy.parser.parseError(a, d);
        else
          throw new Error(a);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: /* @__PURE__ */ p(function(i, a) {
        return this.yy = a || this.yy || {}, this._input = i, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
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
        var a = i.match(/(?:\r\n?|\n).*/g);
        return a ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), i;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: /* @__PURE__ */ p(function(i) {
        var a = i.length, d = i.split(/(?:\r\n?|\n)/g);
        this._input = i + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - a), this.offset -= a;
        var u = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), d.length - 1 && (this.yylineno -= d.length - 1);
        var y = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: d ? (d.length === u.length ? this.yylloc.first_column : 0) + u[u.length - d.length].length - d[0].length : this.yylloc.first_column - a
        }, this.options.ranges && (this.yylloc.range = [y[0], y[0] + this.yyleng - a]), this.yyleng = this.yytext.length, this;
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
        var i = this.pastInput(), a = new Array(i.length + 1).join("-");
        return i + this.upcomingInput() + `
` + a + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: /* @__PURE__ */ p(function(i, a) {
        var d, u, y;
        if (this.options.backtrack_lexer && (y = {
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
        }, this.options.ranges && (y.yylloc.range = this.yylloc.range.slice(0))), u = i[0].match(/(?:\r\n?|\n).*/g), u && (this.yylineno += u.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: u ? u[u.length - 1].length - u[u.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + i[0].length
        }, this.yytext += i[0], this.match += i[0], this.matches = i, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(i[0].length), this.matched += i[0], d = this.performAction.call(this, this.yy, this, a, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), d)
          return d;
        if (this._backtrack) {
          for (var o in y)
            this[o] = y[o];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: /* @__PURE__ */ p(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var i, a, d, u;
        this._more || (this.yytext = "", this.match = "");
        for (var y = this._currentRules(), o = 0; o < y.length; o++)
          if (d = this._input.match(this.rules[y[o]]), d && (!a || d[0].length > a[0].length)) {
            if (a = d, u = o, this.options.backtrack_lexer) {
              if (i = this.test_match(d, y[o]), i !== false)
                return i;
              if (this._backtrack) {
                a = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return a ? (i = this.test_match(a, y[u]), i !== false ? i : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: /* @__PURE__ */ p(function() {
        var a = this.next();
        return a || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: /* @__PURE__ */ p(function(a) {
        this.conditionStack.push(a);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: /* @__PURE__ */ p(function() {
        var a = this.conditionStack.length - 1;
        return a > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: /* @__PURE__ */ p(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: /* @__PURE__ */ p(function(a) {
        return a = this.conditionStack.length - 1 - Math.abs(a || 0), a >= 0 ? this.conditionStack[a] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: /* @__PURE__ */ p(function(a) {
        this.begin(a);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: /* @__PURE__ */ p(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: { "case-insensitive": true },
      performAction: /* @__PURE__ */ p(function(a, d, u, y) {
        switch (u) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            return 10;
          case 3:
            break;
          case 4:
            break;
          case 5:
            return 4;
          case 6:
            return 11;
          case 7:
            return this.begin("acc_title"), 12;
          case 8:
            return this.popState(), "acc_title_value";
          case 9:
            return this.begin("acc_descr"), 14;
          case 10:
            return this.popState(), "acc_descr_value";
          case 11:
            this.begin("acc_descr_multiline");
            break;
          case 12:
            this.popState();
            break;
          case 13:
            return "acc_descr_multiline_value";
          case 14:
            return 17;
          case 15:
            return 21;
          case 16:
            return 20;
          case 17:
            return 6;
          case 18:
            return "INVALID";
        }
      }, "anonymous"),
      rules: [/^(?:%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:timeline\b)/i, /^(?:title\s[^\n]+)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:section\s[^:\n]+)/i, /^(?::\s[^:\n]+)/i, /^(?:[^#:\n]+)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { acc_descr_multiline: { rules: [12, 13], inclusive: false }, acc_descr: { rules: [10], inclusive: false }, acc_title: { rules: [8], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18], inclusive: true } }
    };
    return f;
  }();
  p$1.lexer = x;
  function _() {
    this.yy = {};
  }
  return p(_, "Parser"), _.prototype = p$1, p$1.Parser = _, new _();
}();
X.parser = X;
var Tt = X, at = {};
pm(at, {
  addEvent: () => yt,
  addSection: () => ht,
  addTask: () => pt,
  addTaskOrg: () => gt,
  clear: () => ct,
  default: () => It,
  getCommonDb: () => ot,
  getSections: () => dt,
  getTasks: () => ut
});
var z = "", lt = 0, Y = [], q = [], W = [], ot = /* @__PURE__ */ p(() => Vc, "getCommonDb"), ct = /* @__PURE__ */ p(function() {
  Y.length = 0, q.length = 0, z = "", W.length = 0, Qm();
}, "clear"), ht = /* @__PURE__ */ p(function(n) {
  z = n, Y.push(n);
}, "addSection"), dt = /* @__PURE__ */ p(function() {
  return Y;
}, "getSections"), ut = /* @__PURE__ */ p(function() {
  let n = rt();
  const t = 100;
  let e = 0;
  for (; !n && e < t; )
    n = rt(), e++;
  return q.push(...W), q;
}, "getTasks"), pt = /* @__PURE__ */ p(function(n, t, e) {
  const l = {
    id: lt++,
    section: z,
    type: z,
    task: n,
    score: t || 0,
    //if event is defined, then add it the events array
    events: e ? [e] : []
  };
  W.push(l);
}, "addTask"), yt = /* @__PURE__ */ p(function(n) {
  W.find((e) => e.id === lt - 1).events.push(n);
}, "addEvent"), gt = /* @__PURE__ */ p(function(n) {
  const t = {
    section: z,
    type: z,
    description: n,
    task: n,
    classes: []
  };
  q.push(t);
}, "addTaskOrg"), rt = /* @__PURE__ */ p(function() {
  const n = /* @__PURE__ */ p(function(e) {
    return W[e].processed;
  }, "compileTask");
  let t = true;
  for (const [e, l] of W.entries())
    n(e), t = t && l.processed;
  return t;
}, "compileTasks"), It = {
  clear: ct,
  getCommonDb: ot,
  addSection: ht,
  getSections: dt,
  getTasks: ut,
  addTask: pt,
  addTaskOrg: gt,
  addEvent: yt
}, Nt = 12, Z = /* @__PURE__ */ p(function(n, t) {
  const e = n.append("rect");
  return e.attr("x", t.x), e.attr("y", t.y), e.attr("fill", t.fill), e.attr("stroke", t.stroke), e.attr("width", t.width), e.attr("height", t.height), e.attr("rx", t.rx), e.attr("ry", t.ry), t.class !== void 0 && e.attr("class", t.class), e;
}, "drawRect"), Lt = /* @__PURE__ */ p(function(n, t) {
  const l = n.append("circle").attr("cx", t.cx).attr("cy", t.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible"), r = n.append("g");
  r.append("circle").attr("cx", t.cx - 15 / 3).attr("cy", t.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666"), r.append("circle").attr("cx", t.cx + 15 / 3).attr("cy", t.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
  function h(m) {
    const p2 = vn().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
    m.append("path").attr("class", "mouth").attr("d", p2).attr("transform", "translate(" + t.cx + "," + (t.cy + 2) + ")");
  }
  p(h, "smile");
  function c(m) {
    const p2 = vn().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
    m.append("path").attr("class", "mouth").attr("d", p2).attr("transform", "translate(" + t.cx + "," + (t.cy + 7) + ")");
  }
  p(c, "sad");
  function g(m) {
    m.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", t.cx - 5).attr("y1", t.cy + 7).attr("x2", t.cx + 5).attr("y2", t.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
  }
  return p(g, "ambivalent"), t.score > 3 ? h(r) : t.score < 3 ? c(r) : g(r), l;
}, "drawFace"), Mt = /* @__PURE__ */ p(function(n, t) {
  const e = n.append("circle");
  return e.attr("cx", t.cx), e.attr("cy", t.cy), e.attr("class", "actor-" + t.pos), e.attr("fill", t.fill), e.attr("stroke", t.stroke), e.attr("r", t.r), e.class !== void 0 && e.attr("class", e.class), t.title !== void 0 && e.append("title").text(t.title), e;
}, "drawCircle"), ft = /* @__PURE__ */ p(function(n, t) {
  const e = t.text.replace(/<br\s*\/?>/gi, " "), l = n.append("text");
  l.attr("x", t.x), l.attr("y", t.y), l.attr("class", "legend"), l.style("text-anchor", t.anchor), t.class !== void 0 && l.attr("class", t.class);
  const r = l.append("tspan");
  return r.attr("x", t.x + t.textMargin * 2), r.text(e), l;
}, "drawText"), $t = /* @__PURE__ */ p(function(n, t) {
  function e(r, h, c, g, m) {
    return r + "," + h + " " + (r + c) + "," + h + " " + (r + c) + "," + (h + g - m) + " " + (r + c - m * 1.2) + "," + (h + g) + " " + r + "," + (h + g);
  }
  p(e, "genPoints");
  const l = n.append("polygon");
  l.attr("points", e(t.x, t.y, 50, 20, 7)), l.attr("class", "labelBox"), t.y = t.y + t.labelMargin, t.x = t.x + 0.5 * t.labelMargin, ft(n, t);
}, "drawLabel"), At = /* @__PURE__ */ p(function(n, t, e) {
  const l = n.append("g"), r = D();
  r.x = t.x, r.y = t.y, r.fill = t.fill, r.width = e.width, r.height = e.height, r.class = "journey-section section-type-" + t.num, r.rx = 3, r.ry = 3, Z(l, r), mt(e)(
    t.text,
    l,
    r.x,
    r.y,
    r.width,
    r.height,
    { class: "journey-section section-type-" + t.num },
    e,
    t.colour
  );
}, "drawSection"), it = -1, Pt = /* @__PURE__ */ p(function(n, t, e) {
  const l = t.x + e.width / 2, r = n.append("g");
  it++;
  const h = 300 + 5 * 30;
  r.append("line").attr("id", "task" + it).attr("x1", l).attr("y1", t.y).attr("x2", l).attr("y2", h).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666"), Lt(r, {
    cx: l,
    cy: 300 + (5 - t.score) * 30,
    score: t.score
  });
  const c = D();
  c.x = t.x, c.y = t.y, c.fill = t.fill, c.width = e.width, c.height = e.height, c.class = "task task-type-" + t.num, c.rx = 3, c.ry = 3, Z(r, c), mt(e)(
    t.task,
    r,
    c.x,
    c.y,
    c.width,
    c.height,
    { class: "task" },
    e,
    t.colour
  );
}, "drawTask"), Ct = /* @__PURE__ */ p(function(n, t) {
  Z(n, {
    x: t.startx,
    y: t.starty,
    width: t.stopx - t.startx,
    height: t.stopy - t.starty,
    fill: t.fill,
    class: "rect"
  }).lower();
}, "drawBackgroundRect"), Ht = /* @__PURE__ */ p(function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    "text-anchor": "start",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0
  };
}, "getTextObj"), D = /* @__PURE__ */ p(function() {
  return {
    x: 0,
    y: 0,
    width: 100,
    anchor: "start",
    height: 100,
    rx: 0,
    ry: 0
  };
}, "getNoteRect"), mt = /* @__PURE__ */ function() {
  function n(r, h, c, g, m, p2, x, _) {
    const f = h.append("text").attr("x", c + m / 2).attr("y", g + p2 / 2 + 5).style("font-color", _).style("text-anchor", "middle").text(r);
    l(f, x);
  }
  p(n, "byText");
  function t(r, h, c, g, m, p2, x, _, f) {
    const { taskFontSize: i, taskFontFamily: a } = _, d = r.split(/<br\s*\/?>/gi);
    for (let u = 0; u < d.length; u++) {
      const y = u * i - i * (d.length - 1) / 2, o = h.append("text").attr("x", c + m / 2).attr("y", g).attr("fill", f).style("text-anchor", "middle").style("font-size", i).style("font-family", a);
      o.append("tspan").attr("x", c + m / 2).attr("dy", y).text(d[u]), o.attr("y", g + p2 / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), l(o, x);
    }
  }
  p(t, "byTspan");
  function e(r, h, c, g, m, p2, x, _) {
    const f = h.append("switch"), a = f.append("foreignObject").attr("x", c).attr("y", g).attr("width", m).attr("height", p2).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
    a.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(r), t(r, f, c, g, m, p2, x, _), l(a, x);
  }
  p(e, "byFo");
  function l(r, h) {
    for (const c in h)
      c in h && r.attr(c, h[c]);
  }
  return p(l, "_setTextAttrs"), function(r) {
    return r.textPlacement === "fo" ? e : r.textPlacement === "old" ? n : t;
  };
}(), Rt = /* @__PURE__ */ p(function(n) {
  n.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
}, "initGraphics");
function tt(n, t) {
  n.each(function() {
    var e = Li(this), l = e.text().split(/(\s+|<br>)/).reverse(), r, h = [], c = 1.1, g = e.attr("y"), m = parseFloat(e.attr("dy")), p2 = e.text(null).append("tspan").attr("x", 0).attr("y", g).attr("dy", m + "em");
    for (let x = 0; x < l.length; x++)
      r = l[l.length - 1 - x], h.push(r), p2.text(h.join(" ").trim()), (p2.node().getComputedTextLength() > t || r === "<br>") && (h.pop(), p2.text(h.join(" ").trim()), r === "<br>" ? h = [""] : h = [r], p2 = e.append("tspan").attr("x", 0).attr("y", g).attr("dy", c + "em").text(r));
  });
}
p(tt, "wrap");
var Ft = /* @__PURE__ */ p(function(n, t, e, l) {
  var _;
  const r = e % Nt - 1, h = n.append("g");
  t.section = r, h.attr(
    "class",
    (t.class ? t.class + " " : "") + "timeline-node " + ("section-" + r)
  );
  const c = h.append("g"), g = h.append("g"), p2 = g.append("text").text(t.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(tt, t.width).node().getBBox(), x = (_ = l.fontSize) != null && _.replace ? l.fontSize.replace("px", "") : l.fontSize;
  return t.height = p2.height + x * 1.1 * 0.5 + t.padding, t.height = Math.max(t.height, t.maxHeight), t.width = t.width + 2 * t.padding, g.attr("transform", "translate(" + t.width / 2 + ", " + t.padding / 2 + ")"), zt(c, t, r, l), t;
}, "drawNode"), Vt = /* @__PURE__ */ p(function(n, t, e) {
  var g;
  const l = n.append("g"), h = l.append("text").text(t.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(tt, t.width).node().getBBox(), c = (g = e.fontSize) != null && g.replace ? e.fontSize.replace("px", "") : e.fontSize;
  return l.remove(), h.height + c * 1.1 * 0.5 + t.padding;
}, "getVirtualNodeHeight"), zt = /* @__PURE__ */ p(function(n, t, e) {
  n.append("path").attr("id", "node-" + t.id).attr("class", "node-bkg node-" + t.type).attr(
    "d",
    `M0 ${t.height - 5} v${-t.height + 2 * 5} q0,-5 5,-5 h${t.width - 2 * 5} q5,0 5,5 v${t.height - 5} H0 Z`
  ), n.append("line").attr("class", "node-line-" + e).attr("x1", 0).attr("y1", t.height).attr("x2", t.width).attr("y2", t.height);
}, "defaultBkg"), H = {
  drawRect: Z,
  drawCircle: Mt,
  drawSection: At,
  drawText: ft,
  drawLabel: $t,
  drawTask: Pt,
  drawBackgroundRect: Ct,
  getTextObj: Ht,
  getNoteRect: D,
  initGraphics: Rt,
  drawNode: Ft,
  getVirtualNodeHeight: Vt
}, Wt = /* @__PURE__ */ p(function(n, t, e, l) {
  var O, v;
  const r = dt$1(), h = r.leftMargin ?? 50;
  D$1.debug("timeline", l.db);
  const c = r.securityLevel;
  let g;
  c === "sandbox" && (g = Li("#i" + t));
  const p2 = (c === "sandbox" ? Li(g.nodes()[0].contentDocument.body) : Li("body")).select("#" + t);
  p2.append("g");
  const x = l.db.getTasks(), _ = l.db.getCommonDb().getDiagramTitle();
  D$1.debug("task", x), H.initGraphics(p2);
  const f = l.db.getSections();
  D$1.debug("sections", f);
  let i = 0, a = 0, d = 0, u = 0, y = 50 + h, o = 50;
  u = 50;
  let S = 0, k = true;
  f.forEach(function(E) {
    const b = {
      number: S,
      descr: E,
      section: S,
      width: 150,
      padding: 20,
      maxHeight: i
    }, L = H.getVirtualNodeHeight(p2, b, r);
    D$1.debug("sectionHeight before draw", L), i = Math.max(i, L + 20);
  });
  let M = 0, A = 0;
  D$1.debug("tasks.length", x.length);
  for (const [E, b] of x.entries()) {
    const L = {
      number: E,
      descr: b,
      section: b.section,
      width: 150,
      padding: 20,
      maxHeight: a
    }, P = H.getVirtualNodeHeight(p2, L, r);
    D$1.debug("taskHeight before draw", P), a = Math.max(a, P + 20), M = Math.max(M, b.events.length);
    let R = 0;
    for (const F of b.events) {
      const w = {
        descr: F,
        section: b.section,
        number: b.section,
        width: 150,
        padding: 20,
        maxHeight: 50
      };
      R += H.getVirtualNodeHeight(p2, w, r);
    }
    A = Math.max(A, R);
  }
  D$1.debug("maxSectionHeight before draw", i), D$1.debug("maxTaskHeight before draw", a), f && f.length > 0 ? f.forEach((E) => {
    const b = x.filter((F) => F.section === E), L = {
      number: S,
      descr: E,
      section: S,
      width: 200 * Math.max(b.length, 1) - 50,
      padding: 20,
      maxHeight: i
    };
    D$1.debug("sectionNode", L);
    const P = p2.append("g"), R = H.drawNode(P, L, S, r);
    D$1.debug("sectionNode output", R), P.attr("transform", `translate(${y}, ${u})`), o += i + 50, b.length > 0 && st(
      p2,
      b,
      S,
      y,
      o,
      a,
      r,
      M,
      A,
      i,
      false
    ), y += 200 * Math.max(b.length, 1), o = u, S++;
  }) : (k = false, st(
    p2,
    x,
    S,
    y,
    o,
    a,
    r,
    M,
    A,
    i,
    true
  ));
  const B = p2.node().getBBox();
  D$1.debug("bounds", B), _ && p2.append("text").text(_).attr("x", B.width / 2 - h).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 20), d = k ? i + a + 150 : a + 100, p2.append("g").attr("class", "lineWrapper").append("line").attr("x1", h).attr("y1", d).attr("x2", B.width + 3 * h).attr("y2", d).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)"), Xm(
    void 0,
    p2,
    ((O = r.timeline) == null ? void 0 : O.padding) ?? 50,
    ((v = r.timeline) == null ? void 0 : v.useMaxWidth) ?? false
  );
}, "draw"), st = /* @__PURE__ */ p(function(n, t, e, l, r, h, c, g, m, p2, x) {
  var _;
  for (const f of t) {
    const i = {
      descr: f.task,
      section: e,
      number: e,
      width: 150,
      padding: 20,
      maxHeight: h
    };
    D$1.debug("taskNode", i);
    const a = n.append("g").attr("class", "taskWrapper"), u = H.drawNode(a, i, e, c).height;
    if (D$1.debug("taskHeight after draw", u), a.attr("transform", `translate(${l}, ${r})`), h = Math.max(h, u), f.events) {
      const y = n.append("g").attr("class", "lineWrapper");
      let o = h;
      r += 100, o = o + Bt(n, f.events, e, l, r, c), r -= 100, y.append("line").attr("x1", l + 190 / 2).attr("y1", r + h).attr("x2", l + 190 / 2).attr(
        "y2",
        r + h + (x ? h : p2) + m + 120
      ).attr("stroke-width", 2).attr("stroke", "black").attr("marker-end", "url(#arrowhead)").attr("stroke-dasharray", "5,5");
    }
    l = l + 200, x && !((_ = c.timeline) != null && _.disableMulticolor) && e++;
  }
  r = r - 10;
}, "drawTasks"), Bt = /* @__PURE__ */ p(function(n, t, e, l, r, h) {
  let c = 0;
  const g = r;
  r = r + 100;
  for (const m of t) {
    const p2 = {
      descr: m,
      section: e,
      number: e,
      width: 150,
      padding: 20,
      maxHeight: 50
    };
    D$1.debug("eventNode", p2);
    const x = n.append("g").attr("class", "eventWrapper"), f = H.drawNode(x, p2, e, h).height;
    c = c + f, x.attr("transform", `translate(${l}, ${r})`), r = r + 10 + f;
  }
  return r = g, c;
}, "drawEvents"), Ot = {
  setConf: /* @__PURE__ */ p(() => {
  }, "setConf"),
  draw: Wt
}, jt = /* @__PURE__ */ p((n) => {
  let t = "";
  for (let e = 0; e < n.THEME_COLOR_LIMIT; e++)
    n["lineColor" + e] = n["lineColor" + e] || n["cScaleInv" + e], Fi(n["lineColor" + e]) ? n["lineColor" + e] = G(n["lineColor" + e], 20) : n["lineColor" + e] = it$1(n["lineColor" + e], 20);
  for (let e = 0; e < n.THEME_COLOR_LIMIT; e++) {
    const l = "" + (17 - 3 * e);
    t += `
    .section-${e - 1} rect, .section-${e - 1} path, .section-${e - 1} circle, .section-${e - 1} path  {
      fill: ${n["cScale" + e]};
    }
    .section-${e - 1} text {
     fill: ${n["cScaleLabel" + e]};
    }
    .node-icon-${e - 1} {
      font-size: 40px;
      color: ${n["cScaleLabel" + e]};
    }
    .section-edge-${e - 1}{
      stroke: ${n["cScale" + e]};
    }
    .edge-depth-${e - 1}{
      stroke-width: ${l};
    }
    .section-${e - 1} line {
      stroke: ${n["cScaleInv" + e]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${n["cScaleLabel" + e]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
  }
  return t;
}, "genSections"), Gt = /* @__PURE__ */ p((n) => `
  .edge {
    stroke-width: 3;
  }
  ${jt(n)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${n.git0};
  }
  .section-root text {
    fill: ${n.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .eventWrapper  {
   filter: brightness(120%);
  }
`, "getStyles"), Ut = Gt, Kt = {
  db: at,
  renderer: Ot,
  parser: Tt,
  styles: Ut
};
export {
  Kt as diagram
};
