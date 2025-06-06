import { b as ie, B as re } from "./chunk-RZ5BOZE2-mpnkmZCx-e825e09e.js";
import { _ as h, l as T, R as ne, c as $, j as M, x as ae, r as oe, u as le, a as ce, b as he, g as de, s as ue, o as pe, p as ye } from "./mermaid-j5R1o_wi-141fd499.js";
var ge = Object.defineProperty, me = (t, e, o) => e in t ? ge(t, e, { enumerable: true, configurable: true, writable: true, value: o }) : t[e] = o, k = (t, e, o) => me(t, typeof e != "symbol" ? e + "" : e, o), kt = function() {
  var t = h(function(I, r, n, y) {
    for (n = n || {}, y = I.length; y--; n[I[y]] = r)
      ;
    return n;
  }, "o"), e = [1, 2], o = [1, 3], a = [1, 4], i = [2, 4], c = [1, 9], p = [1, 11], m = [1, 16], d = [1, 17], S = [1, 18], b = [1, 19], L = [1, 32], X = [1, 20], F = [1, 21], A = [1, 22], u = [1, 23], x = [1, 24], w = [1, 26], P = [1, 27], Y = [1, 28], R = [1, 29], N = [1, 30], Z = [1, 31], tt = [1, 34], et = [1, 35], st = [1, 36], it = [1, 37], U = [1, 33], g = [1, 4, 5, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 42, 45, 48, 49, 50, 51, 54], rt = [1, 4, 5, 14, 15, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 42, 45, 48, 49, 50, 51, 54], $t = [4, 5, 16, 17, 19, 21, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 42, 45, 48, 49, 50, 51, 54], yt = { trace: h(function() {
  }, "trace"), yy: {}, symbols_: { error: 2, start: 3, SPACE: 4, NL: 5, SD: 6, document: 7, line: 8, statement: 9, classDefStatement: 10, styleStatement: 11, cssClassStatement: 12, idStatement: 13, DESCR: 14, "-->": 15, HIDE_EMPTY: 16, scale: 17, WIDTH: 18, COMPOSIT_STATE: 19, STRUCT_START: 20, STRUCT_STOP: 21, STATE_DESCR: 22, AS: 23, ID: 24, FORK: 25, JOIN: 26, CHOICE: 27, CONCURRENT: 28, note: 29, notePosition: 30, NOTE_TEXT: 31, direction: 32, acc_title: 33, acc_title_value: 34, acc_descr: 35, acc_descr_value: 36, acc_descr_multiline_value: 37, classDef: 38, CLASSDEF_ID: 39, CLASSDEF_STYLEOPTS: 40, DEFAULT: 41, style: 42, STYLE_IDS: 43, STYLEDEF_STYLEOPTS: 44, class: 45, CLASSENTITY_IDS: 46, STYLECLASS: 47, direction_tb: 48, direction_bt: 49, direction_rl: 50, direction_lr: 51, eol: 52, ";": 53, EDGE_STATE: 54, STYLE_SEPARATOR: 55, left_of: 56, right_of: 57, $accept: 0, $end: 1 }, terminals_: { 2: "error", 4: "SPACE", 5: "NL", 6: "SD", 14: "DESCR", 15: "-->", 16: "HIDE_EMPTY", 17: "scale", 18: "WIDTH", 19: "COMPOSIT_STATE", 20: "STRUCT_START", 21: "STRUCT_STOP", 22: "STATE_DESCR", 23: "AS", 24: "ID", 25: "FORK", 26: "JOIN", 27: "CHOICE", 28: "CONCURRENT", 29: "note", 31: "NOTE_TEXT", 33: "acc_title", 34: "acc_title_value", 35: "acc_descr", 36: "acc_descr_value", 37: "acc_descr_multiline_value", 38: "classDef", 39: "CLASSDEF_ID", 40: "CLASSDEF_STYLEOPTS", 41: "DEFAULT", 42: "style", 43: "STYLE_IDS", 44: "STYLEDEF_STYLEOPTS", 45: "class", 46: "CLASSENTITY_IDS", 47: "STYLECLASS", 48: "direction_tb", 49: "direction_bt", 50: "direction_rl", 51: "direction_lr", 53: ";", 54: "EDGE_STATE", 55: "STYLE_SEPARATOR", 56: "left_of", 57: "right_of" }, productions_: [0, [3, 2], [3, 2], [3, 2], [7, 0], [7, 2], [8, 2], [8, 1], [8, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 2], [9, 3], [9, 4], [9, 1], [9, 2], [9, 1], [9, 4], [9, 3], [9, 6], [9, 1], [9, 1], [9, 1], [9, 1], [9, 4], [9, 4], [9, 1], [9, 2], [9, 2], [9, 1], [10, 3], [10, 3], [11, 3], [12, 3], [32, 1], [32, 1], [32, 1], [32, 1], [52, 1], [52, 1], [13, 1], [13, 1], [13, 3], [13, 3], [30, 1], [30, 1]], performAction: h(function(I, r, n, y, f, s, E) {
    var l = s.length - 1;
    switch (f) {
      case 3:
        return y.setRootDoc(s[l]), s[l];
      case 4:
        this.$ = [];
        break;
      case 5:
        s[l] != "nl" && (s[l - 1].push(s[l]), this.$ = s[l - 1]);
        break;
      case 6:
      case 7:
        this.$ = s[l];
        break;
      case 8:
        this.$ = "nl";
        break;
      case 12:
        this.$ = s[l];
        break;
      case 13:
        const K = s[l - 1];
        K.description = y.trimColon(s[l]), this.$ = K;
        break;
      case 14:
        this.$ = { stmt: "relation", state1: s[l - 2], state2: s[l] };
        break;
      case 15:
        const gt = y.trimColon(s[l]);
        this.$ = { stmt: "relation", state1: s[l - 3], state2: s[l - 1], description: gt };
        break;
      case 19:
        this.$ = { stmt: "state", id: s[l - 3], type: "default", description: "", doc: s[l - 1] };
        break;
      case 20:
        var G = s[l], J = s[l - 2].trim();
        if (s[l].match(":")) {
          var at = s[l].split(":");
          G = at[0], J = [J, at[1]];
        }
        this.$ = { stmt: "state", id: G, type: "default", description: J };
        break;
      case 21:
        this.$ = { stmt: "state", id: s[l - 3], type: "default", description: s[l - 5], doc: s[l - 1] };
        break;
      case 22:
        this.$ = { stmt: "state", id: s[l], type: "fork" };
        break;
      case 23:
        this.$ = { stmt: "state", id: s[l], type: "join" };
        break;
      case 24:
        this.$ = { stmt: "state", id: s[l], type: "choice" };
        break;
      case 25:
        this.$ = { stmt: "state", id: y.getDividerId(), type: "divider" };
        break;
      case 26:
        this.$ = { stmt: "state", id: s[l - 1].trim(), note: { position: s[l - 2].trim(), text: s[l].trim() } };
        break;
      case 29:
        this.$ = s[l].trim(), y.setAccTitle(this.$);
        break;
      case 30:
      case 31:
        this.$ = s[l].trim(), y.setAccDescription(this.$);
        break;
      case 32:
      case 33:
        this.$ = { stmt: "classDef", id: s[l - 1].trim(), classes: s[l].trim() };
        break;
      case 34:
        this.$ = { stmt: "style", id: s[l - 1].trim(), styleClass: s[l].trim() };
        break;
      case 35:
        this.$ = { stmt: "applyClass", id: s[l - 1].trim(), styleClass: s[l].trim() };
        break;
      case 36:
        y.setDirection("TB"), this.$ = { stmt: "dir", value: "TB" };
        break;
      case 37:
        y.setDirection("BT"), this.$ = { stmt: "dir", value: "BT" };
        break;
      case 38:
        y.setDirection("RL"), this.$ = { stmt: "dir", value: "RL" };
        break;
      case 39:
        y.setDirection("LR"), this.$ = { stmt: "dir", value: "LR" };
        break;
      case 42:
      case 43:
        this.$ = { stmt: "state", id: s[l].trim(), type: "default", description: "" };
        break;
      case 44:
        this.$ = { stmt: "state", id: s[l - 2].trim(), classes: [s[l].trim()], type: "default", description: "" };
        break;
      case 45:
        this.$ = { stmt: "state", id: s[l - 2].trim(), classes: [s[l].trim()], type: "default", description: "" };
        break;
    }
  }, "anonymous"), table: [{ 3: 1, 4: e, 5: o, 6: a }, { 1: [3] }, { 3: 5, 4: e, 5: o, 6: a }, { 3: 6, 4: e, 5: o, 6: a }, t([1, 4, 5, 16, 17, 19, 22, 24, 25, 26, 27, 28, 29, 33, 35, 37, 38, 42, 45, 48, 49, 50, 51, 54], i, { 7: 7 }), { 1: [2, 1] }, { 1: [2, 2] }, { 1: [2, 3], 4: c, 5: p, 8: 8, 9: 10, 10: 12, 11: 13, 12: 14, 13: 15, 16: m, 17: d, 19: S, 22: b, 24: L, 25: X, 26: F, 27: A, 28: u, 29: x, 32: 25, 33: w, 35: P, 37: Y, 38: R, 42: N, 45: Z, 48: tt, 49: et, 50: st, 51: it, 54: U }, t(g, [2, 5]), { 9: 38, 10: 12, 11: 13, 12: 14, 13: 15, 16: m, 17: d, 19: S, 22: b, 24: L, 25: X, 26: F, 27: A, 28: u, 29: x, 32: 25, 33: w, 35: P, 37: Y, 38: R, 42: N, 45: Z, 48: tt, 49: et, 50: st, 51: it, 54: U }, t(g, [2, 7]), t(g, [2, 8]), t(g, [2, 9]), t(g, [2, 10]), t(g, [2, 11]), t(g, [2, 12], { 14: [1, 39], 15: [1, 40] }), t(g, [2, 16]), { 18: [1, 41] }, t(g, [2, 18], { 20: [1, 42] }), { 23: [1, 43] }, t(g, [2, 22]), t(g, [2, 23]), t(g, [2, 24]), t(g, [2, 25]), { 30: 44, 31: [1, 45], 56: [1, 46], 57: [1, 47] }, t(g, [2, 28]), { 34: [1, 48] }, { 36: [1, 49] }, t(g, [2, 31]), { 39: [1, 50], 41: [1, 51] }, { 43: [1, 52] }, { 46: [1, 53] }, t(rt, [2, 42], { 55: [1, 54] }), t(rt, [2, 43], { 55: [1, 55] }), t(g, [2, 36]), t(g, [2, 37]), t(g, [2, 38]), t(g, [2, 39]), t(g, [2, 6]), t(g, [2, 13]), { 13: 56, 24: L, 54: U }, t(g, [2, 17]), t($t, i, { 7: 57 }), { 24: [1, 58] }, { 24: [1, 59] }, { 23: [1, 60] }, { 24: [2, 46] }, { 24: [2, 47] }, t(g, [2, 29]), t(g, [2, 30]), { 40: [1, 61] }, { 40: [1, 62] }, { 44: [1, 63] }, { 47: [1, 64] }, { 24: [1, 65] }, { 24: [1, 66] }, t(g, [2, 14], { 14: [1, 67] }), { 4: c, 5: p, 8: 8, 9: 10, 10: 12, 11: 13, 12: 14, 13: 15, 16: m, 17: d, 19: S, 21: [1, 68], 22: b, 24: L, 25: X, 26: F, 27: A, 28: u, 29: x, 32: 25, 33: w, 35: P, 37: Y, 38: R, 42: N, 45: Z, 48: tt, 49: et, 50: st, 51: it, 54: U }, t(g, [2, 20], { 20: [1, 69] }), { 31: [1, 70] }, { 24: [1, 71] }, t(g, [2, 32]), t(g, [2, 33]), t(g, [2, 34]), t(g, [2, 35]), t(rt, [2, 44]), t(rt, [2, 45]), t(g, [2, 15]), t(g, [2, 19]), t($t, i, { 7: 72 }), t(g, [2, 26]), t(g, [2, 27]), { 4: c, 5: p, 8: 8, 9: 10, 10: 12, 11: 13, 12: 14, 13: 15, 16: m, 17: d, 19: S, 21: [1, 73], 22: b, 24: L, 25: X, 26: F, 27: A, 28: u, 29: x, 32: 25, 33: w, 35: P, 37: Y, 38: R, 42: N, 45: Z, 48: tt, 49: et, 50: st, 51: it, 54: U }, t(g, [2, 21])], defaultActions: { 5: [2, 1], 6: [2, 2], 46: [2, 46], 47: [2, 47] }, parseError: h(function(I, r) {
    if (r.recoverable)
      this.trace(I);
    else {
      var n = new Error(I);
      throw n.hash = r, n;
    }
  }, "parseError"), parse: h(function(I) {
    var r = this, n = [0], y = [], f = [null], s = [], E = this.table, l = "", G = 0, J = 0, at = 2, K = 1, gt = s.slice.call(arguments, 1), _ = Object.create(this.lexer), j = { yy: {} };
    for (var mt in this.yy)
      Object.prototype.hasOwnProperty.call(this.yy, mt) && (j.yy[mt] = this.yy[mt]);
    _.setInput(I, j.yy), j.yy.lexer = _, j.yy.parser = this, typeof _.yylloc > "u" && (_.yylloc = {});
    var St = _.yylloc;
    s.push(St);
    var ee = _.options && _.options.ranges;
    typeof j.yy.parseError == "function" ? this.parseError = j.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
    function se(v) {
      n.length = n.length - 2 * v, f.length = f.length - v, s.length = s.length - v;
    }
    h(se, "popStack");
    function xt() {
      var v;
      return v = y.pop() || _.lex() || K, typeof v != "number" && (v instanceof Array && (y = v, v = y.pop()), v = r.symbols_[v] || v), v;
    }
    h(xt, "lex");
    for (var D, z, C, ft, H = {}, ot, O, It, lt; ; ) {
      if (z = n[n.length - 1], this.defaultActions[z] ? C = this.defaultActions[z] : ((D === null || typeof D > "u") && (D = xt()), C = E[z] && E[z][D]), typeof C > "u" || !C.length || !C[0]) {
        var bt = "";
        lt = [];
        for (ot in E[z])
          this.terminals_[ot] && ot > at && lt.push("'" + this.terminals_[ot] + "'");
        _.showPosition ? bt = "Parse error on line " + (G + 1) + `:
` + _.showPosition() + `
Expecting ` + lt.join(", ") + ", got '" + (this.terminals_[D] || D) + "'" : bt = "Parse error on line " + (G + 1) + ": Unexpected " + (D == K ? "end of input" : "'" + (this.terminals_[D] || D) + "'"), this.parseError(bt, { text: _.match, token: this.terminals_[D] || D, line: _.yylineno, loc: St, expected: lt });
      }
      if (C[0] instanceof Array && C.length > 1)
        throw new Error("Parse Error: multiple actions possible at state: " + z + ", token: " + D);
      switch (C[0]) {
        case 1:
          n.push(D), f.push(_.yytext), s.push(_.yylloc), n.push(C[1]), D = null, J = _.yyleng, l = _.yytext, G = _.yylineno, St = _.yylloc;
          break;
        case 2:
          if (O = this.productions_[C[1]][1], H.$ = f[f.length - O], H._$ = { first_line: s[s.length - (O || 1)].first_line, last_line: s[s.length - 1].last_line, first_column: s[s.length - (O || 1)].first_column, last_column: s[s.length - 1].last_column }, ee && (H._$.range = [s[s.length - (O || 1)].range[0], s[s.length - 1].range[1]]), ft = this.performAction.apply(H, [l, J, G, j.yy, C[1], f, s].concat(gt)), typeof ft < "u")
            return ft;
          O && (n = n.slice(0, -1 * O * 2), f = f.slice(0, -1 * O), s = s.slice(0, -1 * O)), n.push(this.productions_[C[1]][0]), f.push(H.$), s.push(H._$), It = E[n[n.length - 2]][n[n.length - 1]], n.push(It);
          break;
        case 3:
          return true;
      }
    }
    return true;
  }, "parse") }, te = function() {
    var I = { EOF: 1, parseError: h(function(r, n) {
      if (this.yy.parser)
        this.yy.parser.parseError(r, n);
      else
        throw new Error(r);
    }, "parseError"), setInput: h(function(r, n) {
      return this.yy = n || this.yy || {}, this._input = r, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
    }, "setInput"), input: h(function() {
      var r = this._input[0];
      this.yytext += r, this.yyleng++, this.offset++, this.match += r, this.matched += r;
      var n = r.match(/(?:\r\n?|\n).*/g);
      return n ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), r;
    }, "input"), unput: h(function(r) {
      var n = r.length, y = r.split(/(?:\r\n?|\n)/g);
      this._input = r + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - n), this.offset -= n;
      var f = this.match.split(/(?:\r\n?|\n)/g);
      this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), y.length - 1 && (this.yylineno -= y.length - 1);
      var s = this.yylloc.range;
      return this.yylloc = { first_line: this.yylloc.first_line, last_line: this.yylineno + 1, first_column: this.yylloc.first_column, last_column: y ? (y.length === f.length ? this.yylloc.first_column : 0) + f[f.length - y.length].length - y[0].length : this.yylloc.first_column - n }, this.options.ranges && (this.yylloc.range = [s[0], s[0] + this.yyleng - n]), this.yyleng = this.yytext.length, this;
    }, "unput"), more: h(function() {
      return this._more = true, this;
    }, "more"), reject: h(function() {
      if (this.options.backtrack_lexer)
        this._backtrack = true;
      else
        return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
      return this;
    }, "reject"), less: h(function(r) {
      this.unput(this.match.slice(r));
    }, "less"), pastInput: h(function() {
      var r = this.matched.substr(0, this.matched.length - this.match.length);
      return (r.length > 20 ? "..." : "") + r.substr(-20).replace(/\n/g, "");
    }, "pastInput"), upcomingInput: h(function() {
      var r = this.match;
      return r.length < 20 && (r += this._input.substr(0, 20 - r.length)), (r.substr(0, 20) + (r.length > 20 ? "..." : "")).replace(/\n/g, "");
    }, "upcomingInput"), showPosition: h(function() {
      var r = this.pastInput(), n = new Array(r.length + 1).join("-");
      return r + this.upcomingInput() + `
` + n + "^";
    }, "showPosition"), test_match: h(function(r, n) {
      var y, f, s;
      if (this.options.backtrack_lexer && (s = { yylineno: this.yylineno, yylloc: { first_line: this.yylloc.first_line, last_line: this.last_line, first_column: this.yylloc.first_column, last_column: this.yylloc.last_column }, yytext: this.yytext, match: this.match, matches: this.matches, matched: this.matched, yyleng: this.yyleng, offset: this.offset, _more: this._more, _input: this._input, yy: this.yy, conditionStack: this.conditionStack.slice(0), done: this.done }, this.options.ranges && (s.yylloc.range = this.yylloc.range.slice(0))), f = r[0].match(/(?:\r\n?|\n).*/g), f && (this.yylineno += f.length), this.yylloc = { first_line: this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: f ? f[f.length - 1].length - f[f.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + r[0].length }, this.yytext += r[0], this.match += r[0], this.matches = r, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(r[0].length), this.matched += r[0], y = this.performAction.call(this, this.yy, this, n, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), y)
        return y;
      if (this._backtrack) {
        for (var E in s)
          this[E] = s[E];
        return false;
      }
      return false;
    }, "test_match"), next: h(function() {
      if (this.done)
        return this.EOF;
      this._input || (this.done = true);
      var r, n, y, f;
      this._more || (this.yytext = "", this.match = "");
      for (var s = this._currentRules(), E = 0; E < s.length; E++)
        if (y = this._input.match(this.rules[s[E]]), y && (!n || y[0].length > n[0].length)) {
          if (n = y, f = E, this.options.backtrack_lexer) {
            if (r = this.test_match(y, s[E]), r !== false)
              return r;
            if (this._backtrack) {
              n = false;
              continue;
            } else
              return false;
          } else if (!this.options.flex)
            break;
        }
      return n ? (r = this.test_match(n, s[f]), r !== false ? r : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
    }, "next"), lex: h(function() {
      var r = this.next();
      return r || this.lex();
    }, "lex"), begin: h(function(r) {
      this.conditionStack.push(r);
    }, "begin"), popState: h(function() {
      var r = this.conditionStack.length - 1;
      return r > 0 ? this.conditionStack.pop() : this.conditionStack[0];
    }, "popState"), _currentRules: h(function() {
      return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
    }, "_currentRules"), topState: h(function(r) {
      return r = this.conditionStack.length - 1 - Math.abs(r || 0), r >= 0 ? this.conditionStack[r] : "INITIAL";
    }, "topState"), pushState: h(function(r) {
      this.begin(r);
    }, "pushState"), stateStackSize: h(function() {
      return this.conditionStack.length;
    }, "stateStackSize"), options: { "case-insensitive": true }, performAction: h(function(r, n, y, f) {
      switch (y) {
        case 0:
          return 41;
        case 1:
          return 48;
        case 2:
          return 49;
        case 3:
          return 50;
        case 4:
          return 51;
        case 5:
          break;
        case 6:
          break;
        case 7:
          return 5;
        case 8:
          break;
        case 9:
          break;
        case 10:
          break;
        case 11:
          break;
        case 12:
          return this.pushState("SCALE"), 17;
        case 13:
          return 18;
        case 14:
          this.popState();
          break;
        case 15:
          return this.begin("acc_title"), 33;
        case 16:
          return this.popState(), "acc_title_value";
        case 17:
          return this.begin("acc_descr"), 35;
        case 18:
          return this.popState(), "acc_descr_value";
        case 19:
          this.begin("acc_descr_multiline");
          break;
        case 20:
          this.popState();
          break;
        case 21:
          return "acc_descr_multiline_value";
        case 22:
          return this.pushState("CLASSDEF"), 38;
        case 23:
          return this.popState(), this.pushState("CLASSDEFID"), "DEFAULT_CLASSDEF_ID";
        case 24:
          return this.popState(), this.pushState("CLASSDEFID"), 39;
        case 25:
          return this.popState(), 40;
        case 26:
          return this.pushState("CLASS"), 45;
        case 27:
          return this.popState(), this.pushState("CLASS_STYLE"), 46;
        case 28:
          return this.popState(), 47;
        case 29:
          return this.pushState("STYLE"), 42;
        case 30:
          return this.popState(), this.pushState("STYLEDEF_STYLES"), 43;
        case 31:
          return this.popState(), 44;
        case 32:
          return this.pushState("SCALE"), 17;
        case 33:
          return 18;
        case 34:
          this.popState();
          break;
        case 35:
          this.pushState("STATE");
          break;
        case 36:
          return this.popState(), n.yytext = n.yytext.slice(0, -8).trim(), 25;
        case 37:
          return this.popState(), n.yytext = n.yytext.slice(0, -8).trim(), 26;
        case 38:
          return this.popState(), n.yytext = n.yytext.slice(0, -10).trim(), 27;
        case 39:
          return this.popState(), n.yytext = n.yytext.slice(0, -8).trim(), 25;
        case 40:
          return this.popState(), n.yytext = n.yytext.slice(0, -8).trim(), 26;
        case 41:
          return this.popState(), n.yytext = n.yytext.slice(0, -10).trim(), 27;
        case 42:
          return 48;
        case 43:
          return 49;
        case 44:
          return 50;
        case 45:
          return 51;
        case 46:
          this.pushState("STATE_STRING");
          break;
        case 47:
          return this.pushState("STATE_ID"), "AS";
        case 48:
          return this.popState(), "ID";
        case 49:
          this.popState();
          break;
        case 50:
          return "STATE_DESCR";
        case 51:
          return 19;
        case 52:
          this.popState();
          break;
        case 53:
          return this.popState(), this.pushState("struct"), 20;
        case 54:
          break;
        case 55:
          return this.popState(), 21;
        case 56:
          break;
        case 57:
          return this.begin("NOTE"), 29;
        case 58:
          return this.popState(), this.pushState("NOTE_ID"), 56;
        case 59:
          return this.popState(), this.pushState("NOTE_ID"), 57;
        case 60:
          this.popState(), this.pushState("FLOATING_NOTE");
          break;
        case 61:
          return this.popState(), this.pushState("FLOATING_NOTE_ID"), "AS";
        case 62:
          break;
        case 63:
          return "NOTE_TEXT";
        case 64:
          return this.popState(), "ID";
        case 65:
          return this.popState(), this.pushState("NOTE_TEXT"), 24;
        case 66:
          return this.popState(), n.yytext = n.yytext.substr(2).trim(), 31;
        case 67:
          return this.popState(), n.yytext = n.yytext.slice(0, -8).trim(), 31;
        case 68:
          return 6;
        case 69:
          return 6;
        case 70:
          return 16;
        case 71:
          return 54;
        case 72:
          return 24;
        case 73:
          return n.yytext = n.yytext.trim(), 14;
        case 74:
          return 15;
        case 75:
          return 28;
        case 76:
          return 55;
        case 77:
          return 5;
        case 78:
          return "INVALID";
      }
    }, "anonymous"), rules: [/^(?:default\b)/i, /^(?:.*direction\s+TB[^\n]*)/i, /^(?:.*direction\s+BT[^\n]*)/i, /^(?:.*direction\s+RL[^\n]*)/i, /^(?:.*direction\s+LR[^\n]*)/i, /^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[\n]+)/i, /^(?:[\s]+)/i, /^(?:((?!\n)\s)+)/i, /^(?:#[^\n]*)/i, /^(?:%[^\n]*)/i, /^(?:scale\s+)/i, /^(?:\d+)/i, /^(?:\s+width\b)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:classDef\s+)/i, /^(?:DEFAULT\s+)/i, /^(?:\w+\s+)/i, /^(?:[^\n]*)/i, /^(?:class\s+)/i, /^(?:(\w+)+((,\s*\w+)*))/i, /^(?:[^\n]*)/i, /^(?:style\s+)/i, /^(?:[\w,]+\s+)/i, /^(?:[^\n]*)/i, /^(?:scale\s+)/i, /^(?:\d+)/i, /^(?:\s+width\b)/i, /^(?:state\s+)/i, /^(?:.*<<fork>>)/i, /^(?:.*<<join>>)/i, /^(?:.*<<choice>>)/i, /^(?:.*\[\[fork\]\])/i, /^(?:.*\[\[join\]\])/i, /^(?:.*\[\[choice\]\])/i, /^(?:.*direction\s+TB[^\n]*)/i, /^(?:.*direction\s+BT[^\n]*)/i, /^(?:.*direction\s+RL[^\n]*)/i, /^(?:.*direction\s+LR[^\n]*)/i, /^(?:["])/i, /^(?:\s*as\s+)/i, /^(?:[^\n\{]*)/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:[^\n\s\{]+)/i, /^(?:\n)/i, /^(?:\{)/i, /^(?:%%(?!\{)[^\n]*)/i, /^(?:\})/i, /^(?:[\n])/i, /^(?:note\s+)/i, /^(?:left of\b)/i, /^(?:right of\b)/i, /^(?:")/i, /^(?:\s*as\s*)/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:[^\n]*)/i, /^(?:\s*[^:\n\s\-]+)/i, /^(?:\s*:[^:\n;]+)/i, /^(?:[\s\S]*?end note\b)/i, /^(?:stateDiagram\s+)/i, /^(?:stateDiagram-v2\s+)/i, /^(?:hide empty description\b)/i, /^(?:\[\*\])/i, /^(?:[^:\n\s\-\{]+)/i, /^(?:\s*:[^:\n;]+)/i, /^(?:-->)/i, /^(?:--)/i, /^(?::::)/i, /^(?:$)/i, /^(?:.)/i], conditions: { LINE: { rules: [9, 10], inclusive: false }, struct: { rules: [9, 10, 22, 26, 29, 35, 42, 43, 44, 45, 54, 55, 56, 57, 71, 72, 73, 74, 75], inclusive: false }, FLOATING_NOTE_ID: { rules: [64], inclusive: false }, FLOATING_NOTE: { rules: [61, 62, 63], inclusive: false }, NOTE_TEXT: { rules: [66, 67], inclusive: false }, NOTE_ID: { rules: [65], inclusive: false }, NOTE: { rules: [58, 59, 60], inclusive: false }, STYLEDEF_STYLEOPTS: { rules: [], inclusive: false }, STYLEDEF_STYLES: { rules: [31], inclusive: false }, STYLE_IDS: { rules: [], inclusive: false }, STYLE: { rules: [30], inclusive: false }, CLASS_STYLE: { rules: [28], inclusive: false }, CLASS: { rules: [27], inclusive: false }, CLASSDEFID: { rules: [25], inclusive: false }, CLASSDEF: { rules: [23, 24], inclusive: false }, acc_descr_multiline: { rules: [20, 21], inclusive: false }, acc_descr: { rules: [18], inclusive: false }, acc_title: { rules: [16], inclusive: false }, SCALE: { rules: [13, 14, 33, 34], inclusive: false }, ALIAS: { rules: [], inclusive: false }, STATE_ID: { rules: [48], inclusive: false }, STATE_STRING: { rules: [49, 50], inclusive: false }, FORK_STATE: { rules: [], inclusive: false }, STATE: { rules: [9, 10, 36, 37, 38, 39, 40, 41, 46, 47, 51, 52, 53], inclusive: false }, ID: { rules: [9, 10], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 15, 17, 19, 22, 26, 29, 32, 35, 53, 57, 68, 69, 70, 71, 72, 73, 74, 76, 77, 78], inclusive: true } } };
    return I;
  }();
  yt.lexer = te;
  function nt() {
    this.yy = {};
  }
  return h(nt, "Parser"), nt.prototype = yt, yt.Parser = nt, new nt();
}();
kt.parser = kt;
var He = kt, Se = "TB", jt = "TB", Lt = "dir", dt = "state", Et = "relation", fe = "classDef", be = "style", _e = "applyClass", Q = "default", zt = "divider", Mt = "fill:none", Xt = "fill: #333", Jt = "c", Ht = "text", Ut = "normal", _t = "rect", Tt = "rectWithTitle", Te = "stateStart", ke = "stateEnd", At = "divider", wt = "roundedWithTitle", Ee = "note", De = "noteGroup", W = "statediagram", ve = "state", Ce = `${W}-${ve}`, Kt = "transition", $e = "note", xe = "note-edge", Ie = `${Kt} ${xe}`, Le = `${W}-${$e}`, Ae = "cluster", we = `${W}-${Ae}`, Oe = "cluster-alt", Re = `${W}-${Oe}`, Vt = "parent", qt = "note", Ne = "state", Ct = "----", Be = `${Ct}${qt}`, Ot = `${Ct}${Vt}`, Qt = h((t, e = jt) => {
  if (!t.doc)
    return e;
  let o = e;
  for (const a of t.doc)
    a.stmt === "dir" && (o = a.value);
  return o;
}, "getDir"), Fe = h(function(t, e) {
  return e.db.getClasses();
}, "getClasses"), Pe = h(async function(t, e, o, a) {
  T.info("REF0:"), T.info("Drawing state diagram (v2)", e);
  const { securityLevel: i, state: c, layout: p } = $();
  a.db.extract(a.db.getRootDocV2());
  const m = a.db.getData(), d = ie(e, i);
  m.type = a.type, m.layoutAlgorithm = p, m.nodeSpacing = (c == null ? void 0 : c.nodeSpacing) || 50, m.rankSpacing = (c == null ? void 0 : c.rankSpacing) || 50, m.markers = ["barb"], m.diagramId = e, await oe(m, d);
  const S = 8;
  le.insertTitle(d, "statediagramTitleText", (c == null ? void 0 : c.titleTopMargin) ?? 25, a.db.getDiagramTitle()), re(d, S, W, (c == null ? void 0 : c.useMaxWidth) ?? true);
}, "draw"), Ue = { getClasses: Fe, draw: Pe, getDir: Qt }, ut = /* @__PURE__ */ new Map(), B = 0;
function pt(t = "", e = 0, o = "", a = Ct) {
  const i = o !== null && o.length > 0 ? `${a}${o}` : "";
  return `${Ne}-${t}${i}-${e}`;
}
h(pt, "stateDomId");
var Ye = h((t, e, o, a, i, c, p, m) => {
  T.trace("items", e), e.forEach((d) => {
    switch (d.stmt) {
      case dt:
        q(t, d, o, a, i, c, p, m);
        break;
      case Q:
        q(t, d, o, a, i, c, p, m);
        break;
      case Et:
        {
          q(t, d.state1, o, a, i, c, p, m), q(t, d.state2, o, a, i, c, p, m);
          const S = { id: "edge" + B, start: d.state1.id, end: d.state2.id, arrowhead: "normal", arrowTypeEnd: "arrow_barb", style: Mt, labelStyle: "", label: M.sanitizeText(d.description, $()), arrowheadStyle: Xt, labelpos: Jt, labelType: Ht, thickness: Ut, classes: Kt, look: p };
          i.push(S), B++;
        }
        break;
    }
  });
}, "setupDoc"), Rt = h((t, e = jt) => {
  let o = e;
  if (t.doc)
    for (const a of t.doc)
      a.stmt === "dir" && (o = a.value);
  return o;
}, "getDir");
function V(t, e, o) {
  if (!e.id || e.id === "</join></fork>" || e.id === "</choice>")
    return;
  e.cssClasses && (Array.isArray(e.cssCompiledStyles) || (e.cssCompiledStyles = []), e.cssClasses.split(" ").forEach((i) => {
    if (o.get(i)) {
      const c = o.get(i);
      e.cssCompiledStyles = [...e.cssCompiledStyles, ...c.styles];
    }
  }));
  const a = t.find((i) => i.id === e.id);
  a ? Object.assign(a, e) : t.push(e);
}
h(V, "insertOrUpdateNode");
function Wt(t) {
  var e;
  return ((e = t == null ? void 0 : t.classes) == null ? void 0 : e.join(" ")) ?? "";
}
h(Wt, "getClassesFromDbInfo");
function Zt(t) {
  return (t == null ? void 0 : t.styles) ?? [];
}
h(Zt, "getStylesFromDbInfo");
var q = h((t, e, o, a, i, c, p, m) => {
  var d, S;
  const b = e.id, L = o.get(b), X = Wt(L), F = Zt(L);
  if (T.info("dataFetcher parsedItem", e, L, F), b !== "root") {
    let A = _t;
    e.start === true ? A = Te : e.start === false && (A = ke), e.type !== Q && (A = e.type), ut.get(b) || ut.set(b, { id: b, shape: A, description: M.sanitizeText(b, $()), cssClasses: `${X} ${Ce}`, cssStyles: F });
    const u = ut.get(b);
    e.description && (Array.isArray(u.description) ? (u.shape = Tt, u.description.push(e.description)) : ((d = u.description) == null ? void 0 : d.length) > 0 ? (u.shape = Tt, u.description === b ? u.description = [e.description] : u.description = [u.description, e.description]) : (u.shape = _t, u.description = e.description), u.description = M.sanitizeTextOrArray(u.description, $())), ((S = u.description) == null ? void 0 : S.length) === 1 && u.shape === Tt && (u.type === "group" ? u.shape = wt : u.shape = _t), !u.type && e.doc && (T.info("Setting cluster for XCX", b, Rt(e)), u.type = "group", u.isGroup = true, u.dir = Rt(e), u.shape = e.type === zt ? At : wt, u.cssClasses = `${u.cssClasses} ${we} ${c ? Re : ""}`);
    const x = { labelStyle: "", shape: u.shape, label: u.description, cssClasses: u.cssClasses, cssCompiledStyles: [], cssStyles: u.cssStyles, id: b, dir: u.dir, domId: pt(b, B), type: u.type, isGroup: u.type === "group", padding: 8, rx: 10, ry: 10, look: p };
    if (x.shape === At && (x.label = ""), t && t.id !== "root" && (T.trace("Setting node ", b, " to be child of its parent ", t.id), x.parentId = t.id), x.centerLabel = true, e.note) {
      const w = { labelStyle: "", shape: Ee, label: e.note.text, cssClasses: Le, cssStyles: [], cssCompilesStyles: [], id: b + Be + "-" + B, domId: pt(b, B, qt), type: u.type, isGroup: u.type === "group", padding: $().flowchart.padding, look: p, position: e.note.position }, P = b + Ot, Y = { labelStyle: "", shape: De, label: e.note.text, cssClasses: u.cssClasses, cssStyles: [], id: b + Ot, domId: pt(b, B, Vt), type: "group", isGroup: true, padding: 16, look: p, position: e.note.position };
      B++, Y.id = P, w.parentId = P, V(a, Y, m), V(a, w, m), V(a, x, m);
      let R = b, N = w.id;
      e.note.position === "left of" && (R = w.id, N = b), i.push({ id: R + "-" + N, start: R, end: N, arrowhead: "none", arrowTypeEnd: "", style: Mt, labelStyle: "", classes: Ie, arrowheadStyle: Xt, labelpos: Jt, labelType: Ht, thickness: Ut, look: p });
    } else
      V(a, x, m);
  }
  e.doc && (T.trace("Adding nodes children "), Ye(e, e.doc, o, a, i, !c, p, m));
}, "dataFetcher"), Ge = h(() => {
  ut.clear(), B = 0;
}, "reset"), Dt = "[*]", Nt = "start", Bt = Dt, Ft = "end", Pt = "color", Yt = "fill", je = "bgFill", ze = ",";
function vt() {
  return /* @__PURE__ */ new Map();
}
h(vt, "newClassesList");
var Gt = h(() => ({ relations: [], states: /* @__PURE__ */ new Map(), documents: {} }), "newDoc"), ct = h((t) => JSON.parse(JSON.stringify(t)), "clone"), ht, Ke = (ht = class {
  constructor(t) {
    k(this, "version"), k(this, "nodes", []), k(this, "edges", []), k(this, "rootDoc", []), k(this, "classes", vt()), k(this, "documents", { root: Gt() }), k(this, "currentDocument", this.documents.root), k(this, "startEndCount", 0), k(this, "dividerCnt", 0), k(this, "getAccTitle", ce), k(this, "setAccTitle", he), k(this, "getAccDescription", de), k(this, "setAccDescription", ue), k(this, "setDiagramTitle", pe), k(this, "getDiagramTitle", ye), this.clear(), this.version = t, this.setRootDoc = this.setRootDoc.bind(this), this.getDividerId = this.getDividerId.bind(this), this.setDirection = this.setDirection.bind(this), this.trimColon = this.trimColon.bind(this);
  }
  setRootDoc(t) {
    T.info("Setting root doc", t), this.rootDoc = t, this.version === 1 ? this.extract(t) : this.extract(this.getRootDocV2());
  }
  getRootDoc() {
    return this.rootDoc;
  }
  docTranslator(t, e, o) {
    if (e.stmt === Et)
      this.docTranslator(t, e.state1, true), this.docTranslator(t, e.state2, false);
    else if (e.stmt === dt && (e.id === "[*]" ? (e.id = o ? t.id + "_start" : t.id + "_end", e.start = o) : e.id = e.id.trim()), e.doc) {
      const a = [];
      let i = [], c;
      for (c = 0; c < e.doc.length; c++)
        if (e.doc[c].type === zt) {
          const p = ct(e.doc[c]);
          p.doc = ct(i), a.push(p), i = [];
        } else
          i.push(e.doc[c]);
      if (a.length > 0 && i.length > 0) {
        const p = { stmt: dt, id: ne(), type: "divider", doc: ct(i) };
        a.push(ct(p)), e.doc = a;
      }
      e.doc.forEach((p) => this.docTranslator(e, p, true));
    }
  }
  getRootDocV2() {
    return this.docTranslator({ id: "root" }, { id: "root", doc: this.rootDoc }, true), { id: "root", doc: this.rootDoc };
  }
  extract(t) {
    let e;
    t.doc ? e = t.doc : e = t, T.info(e), this.clear(true), T.info("Extract initial document:", e), e.forEach((i) => {
      switch (T.warn("Statement", i.stmt), i.stmt) {
        case dt:
          this.addState(i.id.trim(), i.type, i.doc, i.description, i.note, i.classes, i.styles, i.textStyles);
          break;
        case Et:
          this.addRelation(i.state1, i.state2, i.description);
          break;
        case fe:
          this.addStyleClass(i.id.trim(), i.classes);
          break;
        case be:
          {
            const c = i.id.trim().split(","), p = i.styleClass.split(",");
            c.forEach((m) => {
              let d = this.getState(m);
              if (d === void 0) {
                const S = m.trim();
                this.addState(S), d = this.getState(S);
              }
              d.styles = p.map((S) => {
                var b;
                return (b = S.replace(/;/g, "")) == null ? void 0 : b.trim();
              });
            });
          }
          break;
        case _e:
          this.setCssClass(i.id.trim(), i.styleClass);
          break;
      }
    });
    const o = this.getStates(), a = $().look;
    Ge(), q(void 0, this.getRootDocV2(), o, this.nodes, this.edges, true, a, this.classes), this.nodes.forEach((i) => {
      if (Array.isArray(i.label)) {
        if (i.description = i.label.slice(1), i.isGroup && i.description.length > 0)
          throw new Error("Group nodes can only have label. Remove the additional description for node [" + i.id + "]");
        i.label = i.label[0];
      }
    });
  }
  addState(t, e = Q, o = null, a = null, i = null, c = null, p = null, m = null) {
    const d = t == null ? void 0 : t.trim();
    if (this.currentDocument.states.has(d) ? (this.currentDocument.states.get(d).doc || (this.currentDocument.states.get(d).doc = o), this.currentDocument.states.get(d).type || (this.currentDocument.states.get(d).type = e)) : (T.info("Adding state ", d, a), this.currentDocument.states.set(d, { id: d, descriptions: [], type: e, doc: o, note: i, classes: [], styles: [], textStyles: [] })), a && (T.info("Setting state description", d, a), typeof a == "string" && this.addDescription(d, a.trim()), typeof a == "object" && a.forEach((S) => this.addDescription(d, S.trim()))), i) {
      const S = this.currentDocument.states.get(d);
      S.note = i, S.note.text = M.sanitizeText(S.note.text, $());
    }
    c && (T.info("Setting state classes", d, c), (typeof c == "string" ? [c] : c).forEach((S) => this.setCssClass(d, S.trim()))), p && (T.info("Setting state styles", d, p), (typeof p == "string" ? [p] : p).forEach((S) => this.setStyle(d, S.trim()))), m && (T.info("Setting state styles", d, p), (typeof m == "string" ? [m] : m).forEach((S) => this.setTextStyle(d, S.trim())));
  }
  clear(t) {
    this.nodes = [], this.edges = [], this.documents = { root: Gt() }, this.currentDocument = this.documents.root, this.startEndCount = 0, this.classes = vt(), t || ae();
  }
  getState(t) {
    return this.currentDocument.states.get(t);
  }
  getStates() {
    return this.currentDocument.states;
  }
  logDocuments() {
    T.info("Documents = ", this.documents);
  }
  getRelations() {
    return this.currentDocument.relations;
  }
  startIdIfNeeded(t = "") {
    let e = t;
    return t === Dt && (this.startEndCount++, e = `${Nt}${this.startEndCount}`), e;
  }
  startTypeIfNeeded(t = "", e = Q) {
    return t === Dt ? Nt : e;
  }
  endIdIfNeeded(t = "") {
    let e = t;
    return t === Bt && (this.startEndCount++, e = `${Ft}${this.startEndCount}`), e;
  }
  endTypeIfNeeded(t = "", e = Q) {
    return t === Bt ? Ft : e;
  }
  addRelationObjs(t, e, o) {
    let a = this.startIdIfNeeded(t.id.trim()), i = this.startTypeIfNeeded(t.id.trim(), t.type), c = this.startIdIfNeeded(e.id.trim()), p = this.startTypeIfNeeded(e.id.trim(), e.type);
    this.addState(a, i, t.doc, t.description, t.note, t.classes, t.styles, t.textStyles), this.addState(c, p, e.doc, e.description, e.note, e.classes, e.styles, e.textStyles), this.currentDocument.relations.push({ id1: a, id2: c, relationTitle: M.sanitizeText(o, $()) });
  }
  addRelation(t, e, o) {
    if (typeof t == "object")
      this.addRelationObjs(t, e, o);
    else {
      const a = this.startIdIfNeeded(t.trim()), i = this.startTypeIfNeeded(t), c = this.endIdIfNeeded(e.trim()), p = this.endTypeIfNeeded(e);
      this.addState(a, i), this.addState(c, p), this.currentDocument.relations.push({ id1: a, id2: c, title: M.sanitizeText(o, $()) });
    }
  }
  addDescription(t, e) {
    const o = this.currentDocument.states.get(t), a = e.startsWith(":") ? e.replace(":", "").trim() : e;
    o.descriptions.push(M.sanitizeText(a, $()));
  }
  cleanupLabel(t) {
    return t.substring(0, 1) === ":" ? t.substr(2).trim() : t.trim();
  }
  getDividerId() {
    return this.dividerCnt++, "divider-id-" + this.dividerCnt;
  }
  addStyleClass(t, e = "") {
    this.classes.has(t) || this.classes.set(t, { id: t, styles: [], textStyles: [] });
    const o = this.classes.get(t);
    e == null ? void 0 : e.split(ze).forEach((a) => {
      const i = a.replace(/([^;]*);/, "$1").trim();
      if (RegExp(Pt).exec(a)) {
        const c = i.replace(Yt, je).replace(Pt, Yt);
        o.textStyles.push(c);
      }
      o.styles.push(i);
    });
  }
  getClasses() {
    return this.classes;
  }
  setCssClass(t, e) {
    t.split(",").forEach((o) => {
      let a = this.getState(o);
      if (a === void 0) {
        const i = o.trim();
        this.addState(i), a = this.getState(i);
      }
      a.classes.push(e);
    });
  }
  setStyle(t, e) {
    const o = this.getState(t);
    o !== void 0 && o.styles.push(e);
  }
  setTextStyle(t, e) {
    const o = this.getState(t);
    o !== void 0 && o.textStyles.push(e);
  }
  getDirectionStatement() {
    return this.rootDoc.find((t) => t.stmt === Lt);
  }
  getDirection() {
    var t;
    return ((t = this.getDirectionStatement()) == null ? void 0 : t.value) ?? Se;
  }
  setDirection(t) {
    const e = this.getDirectionStatement();
    e ? e.value = t : this.rootDoc.unshift({ stmt: Lt, value: t });
  }
  trimColon(t) {
    return t && t[0] === ":" ? t.substr(1).trim() : t.trim();
  }
  getData() {
    const t = $();
    return { nodes: this.nodes, edges: this.edges, other: {}, config: t, direction: Qt(this.getRootDocV2()) };
  }
  getConfig() {
    return $().state;
  }
}, h(ht, "StateDB"), k(ht, "relationType", { AGGREGATION: 0, EXTENSION: 1, COMPOSITION: 2, DEPENDENCY: 3 }), ht), Me = h((t) => `
defs #statediagram-barbEnd {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${t.edgeLabelBackground};
  p {
    background-color: ${t.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${t.edgeLabelBackground};
    fill: ${t.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor || t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor || t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground || t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg || t.mainBkg};
  stroke: ${t.stateBorder || t.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder || t.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder || t.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder || t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground || t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground ? t.altBackground : "#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground ? t.altBackground : "#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
`, "getStyles"), Ve = Me;
export {
  Ke as J,
  Ue as K,
  He as X,
  Ve as q
};
