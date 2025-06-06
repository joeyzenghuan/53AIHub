import { _ as p, c as dt$1, l as D, ak as yd, D as Jt$1, af as At$1, ag as He$1, ah as Js, u as ge, ae as m0, P as H0, d as Xc, x as Qm, z as xi, Q as ca, ai as Wd, aj as hr$1, j as Hr$1, h as rr$1 } from "./mermaid-j5R1o_wi-dCQhMK9F.js";
import { a } from "./clone-CawhnH1Z-cPfa3Ped.js";
import { L as Li } from "./helper-7WMIPux3-FiO_G2IV.js";
import { L } from "./graph-BlpFl8hT-X3F-3Ykt.js";
import { l } from "./channel-BY04PUnR-tZWP7nEQ.js";
import "./main-zTjO05wq.js";
import "./copy-BS31ARP0-eab1H3tb.js";
import "./_baseUniq-Bc4pAwPa-4Vti29BH.js";
var yt = function() {
  var e = /* @__PURE__ */ p(function(N, x, g, u) {
    for (g = g || {}, u = N.length; u--; g[N[u]] = x)
      ;
    return g;
  }, "o"), t = [1, 7], r = [1, 13], n = [1, 14], i = [1, 15], a2 = [1, 19], s = [1, 16], l2 = [1, 17], o = [1, 18], f = [8, 30], h = [8, 21, 28, 29, 30, 31, 32, 40, 44, 47], y = [1, 23], b = [1, 24], m = [8, 15, 16, 21, 28, 29, 30, 31, 32, 40, 44, 47], E = [8, 15, 16, 21, 27, 28, 29, 30, 31, 32, 40, 44, 47], D2 = [1, 49], v = {
    trace: /* @__PURE__ */ p(function() {
    }, "trace"),
    yy: {},
    symbols_: { error: 2, spaceLines: 3, SPACELINE: 4, NL: 5, separator: 6, SPACE: 7, EOF: 8, start: 9, BLOCK_DIAGRAM_KEY: 10, document: 11, stop: 12, statement: 13, link: 14, LINK: 15, START_LINK: 16, LINK_LABEL: 17, STR: 18, nodeStatement: 19, columnsStatement: 20, SPACE_BLOCK: 21, blockStatement: 22, classDefStatement: 23, cssClassStatement: 24, styleStatement: 25, node: 26, SIZE: 27, COLUMNS: 28, "id-block": 29, end: 30, block: 31, NODE_ID: 32, nodeShapeNLabel: 33, dirList: 34, DIR: 35, NODE_DSTART: 36, NODE_DEND: 37, BLOCK_ARROW_START: 38, BLOCK_ARROW_END: 39, classDef: 40, CLASSDEF_ID: 41, CLASSDEF_STYLEOPTS: 42, DEFAULT: 43, class: 44, CLASSENTITY_IDS: 45, STYLECLASS: 46, style: 47, STYLE_ENTITY_IDS: 48, STYLE_DEFINITION_DATA: 49, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "SPACELINE", 5: "NL", 7: "SPACE", 8: "EOF", 10: "BLOCK_DIAGRAM_KEY", 15: "LINK", 16: "START_LINK", 17: "LINK_LABEL", 18: "STR", 21: "SPACE_BLOCK", 27: "SIZE", 28: "COLUMNS", 29: "id-block", 30: "end", 31: "block", 32: "NODE_ID", 35: "DIR", 36: "NODE_DSTART", 37: "NODE_DEND", 38: "BLOCK_ARROW_START", 39: "BLOCK_ARROW_END", 40: "classDef", 41: "CLASSDEF_ID", 42: "CLASSDEF_STYLEOPTS", 43: "DEFAULT", 44: "class", 45: "CLASSENTITY_IDS", 46: "STYLECLASS", 47: "style", 48: "STYLE_ENTITY_IDS", 49: "STYLE_DEFINITION_DATA" },
    productions_: [0, [3, 1], [3, 2], [3, 2], [6, 1], [6, 1], [6, 1], [9, 3], [12, 1], [12, 1], [12, 2], [12, 2], [11, 1], [11, 2], [14, 1], [14, 4], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [19, 3], [19, 2], [19, 1], [20, 1], [22, 4], [22, 3], [26, 1], [26, 2], [34, 1], [34, 2], [33, 3], [33, 4], [23, 3], [23, 3], [24, 3], [25, 3]],
    performAction: /* @__PURE__ */ p(function(x, g, u, w, S, c, _) {
      var p2 = c.length - 1;
      switch (S) {
        case 4:
          w.getLogger().debug("Rule: separator (NL) ");
          break;
        case 5:
          w.getLogger().debug("Rule: separator (Space) ");
          break;
        case 6:
          w.getLogger().debug("Rule: separator (EOF) ");
          break;
        case 7:
          w.getLogger().debug("Rule: hierarchy: ", c[p2 - 1]), w.setHierarchy(c[p2 - 1]);
          break;
        case 8:
          w.getLogger().debug("Stop NL ");
          break;
        case 9:
          w.getLogger().debug("Stop EOF ");
          break;
        case 10:
          w.getLogger().debug("Stop NL2 ");
          break;
        case 11:
          w.getLogger().debug("Stop EOF2 ");
          break;
        case 12:
          w.getLogger().debug("Rule: statement: ", c[p2]), typeof c[p2].length == "number" ? this.$ = c[p2] : this.$ = [c[p2]];
          break;
        case 13:
          w.getLogger().debug("Rule: statement #2: ", c[p2 - 1]), this.$ = [c[p2 - 1]].concat(c[p2]);
          break;
        case 14:
          w.getLogger().debug("Rule: link: ", c[p2], x), this.$ = { edgeTypeStr: c[p2], label: "" };
          break;
        case 15:
          w.getLogger().debug("Rule: LABEL link: ", c[p2 - 3], c[p2 - 1], c[p2]), this.$ = { edgeTypeStr: c[p2], label: c[p2 - 1] };
          break;
        case 18:
          const A = parseInt(c[p2]), O = w.generateId();
          this.$ = { id: O, type: "space", label: "", width: A, children: [] };
          break;
        case 23:
          w.getLogger().debug("Rule: (nodeStatement link node) ", c[p2 - 2], c[p2 - 1], c[p2], " typestr: ", c[p2 - 1].edgeTypeStr);
          const X = w.edgeStrToEdgeData(c[p2 - 1].edgeTypeStr);
          this.$ = [
            { id: c[p2 - 2].id, label: c[p2 - 2].label, type: c[p2 - 2].type, directions: c[p2 - 2].directions },
            { id: c[p2 - 2].id + "-" + c[p2].id, start: c[p2 - 2].id, end: c[p2].id, label: c[p2 - 1].label, type: "edge", directions: c[p2].directions, arrowTypeEnd: X, arrowTypeStart: "arrow_open" },
            { id: c[p2].id, label: c[p2].label, type: w.typeStr2Type(c[p2].typeStr), directions: c[p2].directions }
          ];
          break;
        case 24:
          w.getLogger().debug("Rule: nodeStatement (abc88 node size) ", c[p2 - 1], c[p2]), this.$ = { id: c[p2 - 1].id, label: c[p2 - 1].label, type: w.typeStr2Type(c[p2 - 1].typeStr), directions: c[p2 - 1].directions, widthInColumns: parseInt(c[p2], 10) };
          break;
        case 25:
          w.getLogger().debug("Rule: nodeStatement (node) ", c[p2]), this.$ = { id: c[p2].id, label: c[p2].label, type: w.typeStr2Type(c[p2].typeStr), directions: c[p2].directions, widthInColumns: 1 };
          break;
        case 26:
          w.getLogger().debug("APA123", this ? this : "na"), w.getLogger().debug("COLUMNS: ", c[p2]), this.$ = { type: "column-setting", columns: c[p2] === "auto" ? -1 : parseInt(c[p2]) };
          break;
        case 27:
          w.getLogger().debug("Rule: id-block statement : ", c[p2 - 2], c[p2 - 1]), w.generateId(), this.$ = { ...c[p2 - 2], type: "composite", children: c[p2 - 1] };
          break;
        case 28:
          w.getLogger().debug("Rule: blockStatement : ", c[p2 - 2], c[p2 - 1], c[p2]);
          const W = w.generateId();
          this.$ = { id: W, type: "composite", label: "", children: c[p2 - 1] };
          break;
        case 29:
          w.getLogger().debug("Rule: node (NODE_ID separator): ", c[p2]), this.$ = { id: c[p2] };
          break;
        case 30:
          w.getLogger().debug("Rule: node (NODE_ID nodeShapeNLabel separator): ", c[p2 - 1], c[p2]), this.$ = { id: c[p2 - 1], label: c[p2].label, typeStr: c[p2].typeStr, directions: c[p2].directions };
          break;
        case 31:
          w.getLogger().debug("Rule: dirList: ", c[p2]), this.$ = [c[p2]];
          break;
        case 32:
          w.getLogger().debug("Rule: dirList: ", c[p2 - 1], c[p2]), this.$ = [c[p2 - 1]].concat(c[p2]);
          break;
        case 33:
          w.getLogger().debug("Rule: nodeShapeNLabel: ", c[p2 - 2], c[p2 - 1], c[p2]), this.$ = { typeStr: c[p2 - 2] + c[p2], label: c[p2 - 1] };
          break;
        case 34:
          w.getLogger().debug("Rule: BLOCK_ARROW nodeShapeNLabel: ", c[p2 - 3], c[p2 - 2], " #3:", c[p2 - 1], c[p2]), this.$ = { typeStr: c[p2 - 3] + c[p2], label: c[p2 - 2], directions: c[p2 - 1] };
          break;
        case 35:
        case 36:
          this.$ = { type: "classDef", id: c[p2 - 1].trim(), css: c[p2].trim() };
          break;
        case 37:
          this.$ = { type: "applyClass", id: c[p2 - 1].trim(), styleClass: c[p2].trim() };
          break;
        case 38:
          this.$ = { type: "applyStyles", id: c[p2 - 1].trim(), stylesStr: c[p2].trim() };
          break;
      }
    }, "anonymous"),
    table: [{ 9: 1, 10: [1, 2] }, { 1: [3] }, { 11: 3, 13: 4, 19: 5, 20: 6, 21: t, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 28: r, 29: n, 31: i, 32: a2, 40: s, 44: l2, 47: o }, { 8: [1, 20] }, e(f, [2, 12], { 13: 4, 19: 5, 20: 6, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 11: 21, 21: t, 28: r, 29: n, 31: i, 32: a2, 40: s, 44: l2, 47: o }), e(h, [2, 16], { 14: 22, 15: y, 16: b }), e(h, [2, 17]), e(h, [2, 18]), e(h, [2, 19]), e(h, [2, 20]), e(h, [2, 21]), e(h, [2, 22]), e(m, [2, 25], { 27: [1, 25] }), e(h, [2, 26]), { 19: 26, 26: 12, 32: a2 }, { 11: 27, 13: 4, 19: 5, 20: 6, 21: t, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 28: r, 29: n, 31: i, 32: a2, 40: s, 44: l2, 47: o }, { 41: [1, 28], 43: [1, 29] }, { 45: [1, 30] }, { 48: [1, 31] }, e(E, [2, 29], { 33: 32, 36: [1, 33], 38: [1, 34] }), { 1: [2, 7] }, e(f, [2, 13]), { 26: 35, 32: a2 }, { 32: [2, 14] }, { 17: [1, 36] }, e(m, [2, 24]), { 11: 37, 13: 4, 14: 22, 15: y, 16: b, 19: 5, 20: 6, 21: t, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 28: r, 29: n, 31: i, 32: a2, 40: s, 44: l2, 47: o }, { 30: [1, 38] }, { 42: [1, 39] }, { 42: [1, 40] }, { 46: [1, 41] }, { 49: [1, 42] }, e(E, [2, 30]), { 18: [1, 43] }, { 18: [1, 44] }, e(m, [2, 23]), { 18: [1, 45] }, { 30: [1, 46] }, e(h, [2, 28]), e(h, [2, 35]), e(h, [2, 36]), e(h, [2, 37]), e(h, [2, 38]), { 37: [1, 47] }, { 34: 48, 35: D2 }, { 15: [1, 50] }, e(h, [2, 27]), e(E, [2, 33]), { 39: [1, 51] }, { 34: 52, 35: D2, 39: [2, 31] }, { 32: [2, 15] }, e(E, [2, 34]), { 39: [2, 32] }],
    defaultActions: { 20: [2, 7], 23: [2, 14], 50: [2, 15], 52: [2, 32] },
    parseError: /* @__PURE__ */ p(function(x, g) {
      if (g.recoverable)
        this.trace(x);
      else {
        var u = new Error(x);
        throw u.hash = g, u;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ p(function(x) {
      var g = this, u = [0], w = [], S = [null], c = [], _ = this.table, p$1 = "", A = 0, O = 0, X = 2, W = 1, ce = c.slice.call(arguments, 1), M = Object.create(this.lexer), J = { yy: {} };
      for (var gt in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, gt) && (J.yy[gt] = this.yy[gt]);
      M.setInput(x, J.yy), J.yy.lexer = M, J.yy.parser = this, typeof M.yylloc > "u" && (M.yylloc = {});
      var ut = M.yylloc;
      c.push(ut);
      var oe = M.options && M.options.ranges;
      typeof J.yy.parseError == "function" ? this.parseError = J.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function he(H) {
        u.length = u.length - 2 * H, S.length = S.length - H, c.length = c.length - H;
      }
      p(he, "popStack");
      function Dt() {
        var H;
        return H = w.pop() || M.lex() || W, typeof H != "number" && (H instanceof Array && (w = H, H = w.pop()), H = g.symbols_[H] || H), H;
      }
      p(Dt, "lex");
      for (var Y, Q, U, pt, $ = {}, st, q, Nt, it; ; ) {
        if (Q = u[u.length - 1], this.defaultActions[Q] ? U = this.defaultActions[Q] : ((Y === null || typeof Y > "u") && (Y = Dt()), U = _[Q] && _[Q][Y]), typeof U > "u" || !U.length || !U[0]) {
          var ft = "";
          it = [];
          for (st in _[Q])
            this.terminals_[st] && st > X && it.push("'" + this.terminals_[st] + "'");
          M.showPosition ? ft = "Parse error on line " + (A + 1) + `:
` + M.showPosition() + `
Expecting ` + it.join(", ") + ", got '" + (this.terminals_[Y] || Y) + "'" : ft = "Parse error on line " + (A + 1) + ": Unexpected " + (Y == W ? "end of input" : "'" + (this.terminals_[Y] || Y) + "'"), this.parseError(ft, {
            text: M.match,
            token: this.terminals_[Y] || Y,
            line: M.yylineno,
            loc: ut,
            expected: it
          });
        }
        if (U[0] instanceof Array && U.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + Q + ", token: " + Y);
        switch (U[0]) {
          case 1:
            u.push(Y), S.push(M.yytext), c.push(M.yylloc), u.push(U[1]), Y = null, O = M.yyleng, p$1 = M.yytext, A = M.yylineno, ut = M.yylloc;
            break;
          case 2:
            if (q = this.productions_[U[1]][1], $.$ = S[S.length - q], $._$ = {
              first_line: c[c.length - (q || 1)].first_line,
              last_line: c[c.length - 1].last_line,
              first_column: c[c.length - (q || 1)].first_column,
              last_column: c[c.length - 1].last_column
            }, oe && ($._$.range = [
              c[c.length - (q || 1)].range[0],
              c[c.length - 1].range[1]
            ]), pt = this.performAction.apply($, [
              p$1,
              O,
              A,
              J.yy,
              U[1],
              S,
              c
            ].concat(ce)), typeof pt < "u")
              return pt;
            q && (u = u.slice(0, -1 * q * 2), S = S.slice(0, -1 * q), c = c.slice(0, -1 * q)), u.push(this.productions_[U[1]][0]), S.push($.$), c.push($._$), Nt = _[u[u.length - 2]][u[u.length - 1]], u.push(Nt);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  }, T = /* @__PURE__ */ function() {
    var N = {
      EOF: 1,
      parseError: /* @__PURE__ */ p(function(g, u) {
        if (this.yy.parser)
          this.yy.parser.parseError(g, u);
        else
          throw new Error(g);
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: /* @__PURE__ */ p(function(x, g) {
        return this.yy = g || this.yy || {}, this._input = x, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: /* @__PURE__ */ p(function() {
        var x = this._input[0];
        this.yytext += x, this.yyleng++, this.offset++, this.match += x, this.matched += x;
        var g = x.match(/(?:\r\n?|\n).*/g);
        return g ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), x;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: /* @__PURE__ */ p(function(x) {
        var g = x.length, u = x.split(/(?:\r\n?|\n)/g);
        this._input = x + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - g), this.offset -= g;
        var w = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), u.length - 1 && (this.yylineno -= u.length - 1);
        var S = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: u ? (u.length === w.length ? this.yylloc.first_column : 0) + w[w.length - u.length].length - u[0].length : this.yylloc.first_column - g
        }, this.options.ranges && (this.yylloc.range = [S[0], S[0] + this.yyleng - g]), this.yyleng = this.yytext.length, this;
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
      less: /* @__PURE__ */ p(function(x) {
        this.unput(this.match.slice(x));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: /* @__PURE__ */ p(function() {
        var x = this.matched.substr(0, this.matched.length - this.match.length);
        return (x.length > 20 ? "..." : "") + x.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: /* @__PURE__ */ p(function() {
        var x = this.match;
        return x.length < 20 && (x += this._input.substr(0, 20 - x.length)), (x.substr(0, 20) + (x.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: /* @__PURE__ */ p(function() {
        var x = this.pastInput(), g = new Array(x.length + 1).join("-");
        return x + this.upcomingInput() + `
` + g + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: /* @__PURE__ */ p(function(x, g) {
        var u, w, S;
        if (this.options.backtrack_lexer && (S = {
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
        }, this.options.ranges && (S.yylloc.range = this.yylloc.range.slice(0))), w = x[0].match(/(?:\r\n?|\n).*/g), w && (this.yylineno += w.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: w ? w[w.length - 1].length - w[w.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + x[0].length
        }, this.yytext += x[0], this.match += x[0], this.matches = x, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(x[0].length), this.matched += x[0], u = this.performAction.call(this, this.yy, this, g, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), u)
          return u;
        if (this._backtrack) {
          for (var c in S)
            this[c] = S[c];
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: /* @__PURE__ */ p(function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var x, g, u, w;
        this._more || (this.yytext = "", this.match = "");
        for (var S = this._currentRules(), c = 0; c < S.length; c++)
          if (u = this._input.match(this.rules[S[c]]), u && (!g || u[0].length > g[0].length)) {
            if (g = u, w = c, this.options.backtrack_lexer) {
              if (x = this.test_match(u, S[c]), x !== false)
                return x;
              if (this._backtrack) {
                g = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return g ? (x = this.test_match(g, S[w]), x !== false ? x : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }, "next"),
      // return next match that has a token
      lex: /* @__PURE__ */ p(function() {
        var g = this.next();
        return g || this.lex();
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: /* @__PURE__ */ p(function(g) {
        this.conditionStack.push(g);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: /* @__PURE__ */ p(function() {
        var g = this.conditionStack.length - 1;
        return g > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: /* @__PURE__ */ p(function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: /* @__PURE__ */ p(function(g) {
        return g = this.conditionStack.length - 1 - Math.abs(g || 0), g >= 0 ? this.conditionStack[g] : "INITIAL";
      }, "topState"),
      // alias for begin(condition)
      pushState: /* @__PURE__ */ p(function(g) {
        this.begin(g);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: /* @__PURE__ */ p(function() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {},
      performAction: /* @__PURE__ */ p(function(g, u, w, S) {
        switch (w) {
          case 0:
            return 10;
          case 1:
            return g.getLogger().debug("Found space-block"), 31;
          case 2:
            return g.getLogger().debug("Found nl-block"), 31;
          case 3:
            return g.getLogger().debug("Found space-block"), 29;
          case 4:
            g.getLogger().debug(".", u.yytext);
            break;
          case 5:
            g.getLogger().debug("_", u.yytext);
            break;
          case 6:
            return 5;
          case 7:
            return u.yytext = -1, 28;
          case 8:
            return u.yytext = u.yytext.replace(/columns\s+/, ""), g.getLogger().debug("COLUMNS (LEX)", u.yytext), 28;
          case 9:
            this.pushState("md_string");
            break;
          case 10:
            return "MD_STR";
          case 11:
            this.popState();
            break;
          case 12:
            this.pushState("string");
            break;
          case 13:
            g.getLogger().debug("LEX: POPPING STR:", u.yytext), this.popState();
            break;
          case 14:
            return g.getLogger().debug("LEX: STR end:", u.yytext), "STR";
          case 15:
            return u.yytext = u.yytext.replace(/space\:/, ""), g.getLogger().debug("SPACE NUM (LEX)", u.yytext), 21;
          case 16:
            return u.yytext = "1", g.getLogger().debug("COLUMNS (LEX)", u.yytext), 21;
          case 17:
            return 43;
          case 18:
            return "LINKSTYLE";
          case 19:
            return "INTERPOLATE";
          case 20:
            return this.pushState("CLASSDEF"), 40;
          case 21:
            return this.popState(), this.pushState("CLASSDEFID"), "DEFAULT_CLASSDEF_ID";
          case 22:
            return this.popState(), this.pushState("CLASSDEFID"), 41;
          case 23:
            return this.popState(), 42;
          case 24:
            return this.pushState("CLASS"), 44;
          case 25:
            return this.popState(), this.pushState("CLASS_STYLE"), 45;
          case 26:
            return this.popState(), 46;
          case 27:
            return this.pushState("STYLE_STMNT"), 47;
          case 28:
            return this.popState(), this.pushState("STYLE_DEFINITION"), 48;
          case 29:
            return this.popState(), 49;
          case 30:
            return this.pushState("acc_title"), "acc_title";
          case 31:
            return this.popState(), "acc_title_value";
          case 32:
            return this.pushState("acc_descr"), "acc_descr";
          case 33:
            return this.popState(), "acc_descr_value";
          case 34:
            this.pushState("acc_descr_multiline");
            break;
          case 35:
            this.popState();
            break;
          case 36:
            return "acc_descr_multiline_value";
          case 37:
            return 30;
          case 38:
            return this.popState(), g.getLogger().debug("Lex: (("), "NODE_DEND";
          case 39:
            return this.popState(), g.getLogger().debug("Lex: (("), "NODE_DEND";
          case 40:
            return this.popState(), g.getLogger().debug("Lex: ))"), "NODE_DEND";
          case 41:
            return this.popState(), g.getLogger().debug("Lex: (("), "NODE_DEND";
          case 42:
            return this.popState(), g.getLogger().debug("Lex: (("), "NODE_DEND";
          case 43:
            return this.popState(), g.getLogger().debug("Lex: (-"), "NODE_DEND";
          case 44:
            return this.popState(), g.getLogger().debug("Lex: -)"), "NODE_DEND";
          case 45:
            return this.popState(), g.getLogger().debug("Lex: (("), "NODE_DEND";
          case 46:
            return this.popState(), g.getLogger().debug("Lex: ]]"), "NODE_DEND";
          case 47:
            return this.popState(), g.getLogger().debug("Lex: ("), "NODE_DEND";
          case 48:
            return this.popState(), g.getLogger().debug("Lex: ])"), "NODE_DEND";
          case 49:
            return this.popState(), g.getLogger().debug("Lex: /]"), "NODE_DEND";
          case 50:
            return this.popState(), g.getLogger().debug("Lex: /]"), "NODE_DEND";
          case 51:
            return this.popState(), g.getLogger().debug("Lex: )]"), "NODE_DEND";
          case 52:
            return this.popState(), g.getLogger().debug("Lex: )"), "NODE_DEND";
          case 53:
            return this.popState(), g.getLogger().debug("Lex: ]>"), "NODE_DEND";
          case 54:
            return this.popState(), g.getLogger().debug("Lex: ]"), "NODE_DEND";
          case 55:
            return g.getLogger().debug("Lexa: -)"), this.pushState("NODE"), 36;
          case 56:
            return g.getLogger().debug("Lexa: (-"), this.pushState("NODE"), 36;
          case 57:
            return g.getLogger().debug("Lexa: ))"), this.pushState("NODE"), 36;
          case 58:
            return g.getLogger().debug("Lexa: )"), this.pushState("NODE"), 36;
          case 59:
            return g.getLogger().debug("Lex: ((("), this.pushState("NODE"), 36;
          case 60:
            return g.getLogger().debug("Lexa: )"), this.pushState("NODE"), 36;
          case 61:
            return g.getLogger().debug("Lexa: )"), this.pushState("NODE"), 36;
          case 62:
            return g.getLogger().debug("Lexa: )"), this.pushState("NODE"), 36;
          case 63:
            return g.getLogger().debug("Lexc: >"), this.pushState("NODE"), 36;
          case 64:
            return g.getLogger().debug("Lexa: (["), this.pushState("NODE"), 36;
          case 65:
            return g.getLogger().debug("Lexa: )"), this.pushState("NODE"), 36;
          case 66:
            return this.pushState("NODE"), 36;
          case 67:
            return this.pushState("NODE"), 36;
          case 68:
            return this.pushState("NODE"), 36;
          case 69:
            return this.pushState("NODE"), 36;
          case 70:
            return this.pushState("NODE"), 36;
          case 71:
            return this.pushState("NODE"), 36;
          case 72:
            return this.pushState("NODE"), 36;
          case 73:
            return g.getLogger().debug("Lexa: ["), this.pushState("NODE"), 36;
          case 74:
            return this.pushState("BLOCK_ARROW"), g.getLogger().debug("LEX ARR START"), 38;
          case 75:
            return g.getLogger().debug("Lex: NODE_ID", u.yytext), 32;
          case 76:
            return g.getLogger().debug("Lex: EOF", u.yytext), 8;
          case 77:
            this.pushState("md_string");
            break;
          case 78:
            this.pushState("md_string");
            break;
          case 79:
            return "NODE_DESCR";
          case 80:
            this.popState();
            break;
          case 81:
            g.getLogger().debug("Lex: Starting string"), this.pushState("string");
            break;
          case 82:
            g.getLogger().debug("LEX ARR: Starting string"), this.pushState("string");
            break;
          case 83:
            return g.getLogger().debug("LEX: NODE_DESCR:", u.yytext), "NODE_DESCR";
          case 84:
            g.getLogger().debug("LEX POPPING"), this.popState();
            break;
          case 85:
            g.getLogger().debug("Lex: =>BAE"), this.pushState("ARROW_DIR");
            break;
          case 86:
            return u.yytext = u.yytext.replace(/^,\s*/, ""), g.getLogger().debug("Lex (right): dir:", u.yytext), "DIR";
          case 87:
            return u.yytext = u.yytext.replace(/^,\s*/, ""), g.getLogger().debug("Lex (left):", u.yytext), "DIR";
          case 88:
            return u.yytext = u.yytext.replace(/^,\s*/, ""), g.getLogger().debug("Lex (x):", u.yytext), "DIR";
          case 89:
            return u.yytext = u.yytext.replace(/^,\s*/, ""), g.getLogger().debug("Lex (y):", u.yytext), "DIR";
          case 90:
            return u.yytext = u.yytext.replace(/^,\s*/, ""), g.getLogger().debug("Lex (up):", u.yytext), "DIR";
          case 91:
            return u.yytext = u.yytext.replace(/^,\s*/, ""), g.getLogger().debug("Lex (down):", u.yytext), "DIR";
          case 92:
            return u.yytext = "]>", g.getLogger().debug("Lex (ARROW_DIR end):", u.yytext), this.popState(), this.popState(), "BLOCK_ARROW_END";
          case 93:
            return g.getLogger().debug("Lex: LINK", "#" + u.yytext + "#"), 15;
          case 94:
            return g.getLogger().debug("Lex: LINK", u.yytext), 15;
          case 95:
            return g.getLogger().debug("Lex: LINK", u.yytext), 15;
          case 96:
            return g.getLogger().debug("Lex: LINK", u.yytext), 15;
          case 97:
            return g.getLogger().debug("Lex: START_LINK", u.yytext), this.pushState("LLABEL"), 16;
          case 98:
            return g.getLogger().debug("Lex: START_LINK", u.yytext), this.pushState("LLABEL"), 16;
          case 99:
            return g.getLogger().debug("Lex: START_LINK", u.yytext), this.pushState("LLABEL"), 16;
          case 100:
            this.pushState("md_string");
            break;
          case 101:
            return g.getLogger().debug("Lex: Starting string"), this.pushState("string"), "LINK_LABEL";
          case 102:
            return this.popState(), g.getLogger().debug("Lex: LINK", "#" + u.yytext + "#"), 15;
          case 103:
            return this.popState(), g.getLogger().debug("Lex: LINK", u.yytext), 15;
          case 104:
            return this.popState(), g.getLogger().debug("Lex: LINK", u.yytext), 15;
          case 105:
            return g.getLogger().debug("Lex: COLON", u.yytext), u.yytext = u.yytext.slice(1), 27;
        }
      }, "anonymous"),
      rules: [/^(?:block-beta\b)/, /^(?:block\s+)/, /^(?:block\n+)/, /^(?:block:)/, /^(?:[\s]+)/, /^(?:[\n]+)/, /^(?:((\u000D\u000A)|(\u000A)))/, /^(?:columns\s+auto\b)/, /^(?:columns\s+[\d]+)/, /^(?:["][`])/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["])/, /^(?:["])/, /^(?:[^"]*)/, /^(?:space[:]\d+)/, /^(?:space\b)/, /^(?:default\b)/, /^(?:linkStyle\b)/, /^(?:interpolate\b)/, /^(?:classDef\s+)/, /^(?:DEFAULT\s+)/, /^(?:\w+\s+)/, /^(?:[^\n]*)/, /^(?:class\s+)/, /^(?:(\w+)+((,\s*\w+)*))/, /^(?:[^\n]*)/, /^(?:style\s+)/, /^(?:(\w+)+((,\s*\w+)*))/, /^(?:[^\n]*)/, /^(?:accTitle\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*\{\s*)/, /^(?:[\}])/, /^(?:[^\}]*)/, /^(?:end\b\s*)/, /^(?:\(\(\()/, /^(?:\)\)\))/, /^(?:[\)]\))/, /^(?:\}\})/, /^(?:\})/, /^(?:\(-)/, /^(?:-\))/, /^(?:\(\()/, /^(?:\]\])/, /^(?:\()/, /^(?:\]\))/, /^(?:\\\])/, /^(?:\/\])/, /^(?:\)\])/, /^(?:[\)])/, /^(?:\]>)/, /^(?:[\]])/, /^(?:-\))/, /^(?:\(-)/, /^(?:\)\))/, /^(?:\))/, /^(?:\(\(\()/, /^(?:\(\()/, /^(?:\{\{)/, /^(?:\{)/, /^(?:>)/, /^(?:\(\[)/, /^(?:\()/, /^(?:\[\[)/, /^(?:\[\|)/, /^(?:\[\()/, /^(?:\)\)\))/, /^(?:\[\\)/, /^(?:\[\/)/, /^(?:\[\\)/, /^(?:\[)/, /^(?:<\[)/, /^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/, /^(?:$)/, /^(?:["][`])/, /^(?:["][`])/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["])/, /^(?:["])/, /^(?:[^"]+)/, /^(?:["])/, /^(?:\]>\s*\()/, /^(?:,?\s*right\s*)/, /^(?:,?\s*left\s*)/, /^(?:,?\s*x\s*)/, /^(?:,?\s*y\s*)/, /^(?:,?\s*up\s*)/, /^(?:,?\s*down\s*)/, /^(?:\)\s*)/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?:\s*~~[\~]+\s*)/, /^(?:\s*[xo<]?--\s*)/, /^(?:\s*[xo<]?==\s*)/, /^(?:\s*[xo<]?-\.\s*)/, /^(?:["][`])/, /^(?:["])/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?::\d+)/],
      conditions: { STYLE_DEFINITION: { rules: [29], inclusive: false }, STYLE_STMNT: { rules: [28], inclusive: false }, CLASSDEFID: { rules: [23], inclusive: false }, CLASSDEF: { rules: [21, 22], inclusive: false }, CLASS_STYLE: { rules: [26], inclusive: false }, CLASS: { rules: [25], inclusive: false }, LLABEL: { rules: [100, 101, 102, 103, 104], inclusive: false }, ARROW_DIR: { rules: [86, 87, 88, 89, 90, 91, 92], inclusive: false }, BLOCK_ARROW: { rules: [77, 82, 85], inclusive: false }, NODE: { rules: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 78, 81], inclusive: false }, md_string: { rules: [10, 11, 79, 80], inclusive: false }, space: { rules: [], inclusive: false }, string: { rules: [13, 14, 83, 84], inclusive: false }, acc_descr_multiline: { rules: [35, 36], inclusive: false }, acc_descr: { rules: [33], inclusive: false }, acc_title: { rules: [31], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 17, 18, 19, 20, 24, 27, 30, 32, 34, 37, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 93, 94, 95, 96, 97, 98, 99, 105], inclusive: true } }
    };
    return N;
  }();
  v.lexer = T;
  function k() {
    this.yy = {};
  }
  return p(k, "Parser"), k.prototype = v, v.Parser = k, new k();
}();
yt.parser = yt;
var Ee = yt, V = /* @__PURE__ */ new Map(), St = [], bt = /* @__PURE__ */ new Map(), Ct = "color", Bt = "fill", _e = "bgFill", Ht = ",", ke = dt$1(), ct = /* @__PURE__ */ new Map(), De = /* @__PURE__ */ p((e) => Hr$1.sanitizeText(e, ke), "sanitizeText"), Ne = /* @__PURE__ */ p(function(e, t = "") {
  let r = ct.get(e);
  r || (r = { id: e, styles: [], textStyles: [] }, ct.set(e, r)), t != null && t.split(Ht).forEach((n) => {
    const i = n.replace(/([^;]*);/, "$1").trim();
    if (RegExp(Ct).exec(n)) {
      const s = i.replace(Bt, _e).replace(Ct, Bt);
      r.textStyles.push(s);
    }
    r.styles.push(i);
  });
}, "addStyleClass"), Te = /* @__PURE__ */ p(function(e, t = "") {
  const r = V.get(e);
  t != null && (r.styles = t.split(Ht));
}, "addStyle2Node"), Ce = /* @__PURE__ */ p(function(e, t) {
  e.split(",").forEach(function(r) {
    let n = V.get(r);
    if (n === void 0) {
      const i = r.trim();
      n = { id: i, type: "na", children: [] }, V.set(i, n);
    }
    n.classes || (n.classes = []), n.classes.push(t);
  });
}, "setCssClass"), Kt = /* @__PURE__ */ p((e, t) => {
  const r = e.flat(), n = [];
  for (const i of r) {
    if (i.label && (i.label = De(i.label)), i.type === "classDef") {
      Ne(i.id, i.css);
      continue;
    }
    if (i.type === "applyClass") {
      Ce(i.id, (i == null ? void 0 : i.styleClass) ?? "");
      continue;
    }
    if (i.type === "applyStyles") {
      i != null && i.stylesStr && Te(i.id, i == null ? void 0 : i.stylesStr);
      continue;
    }
    if (i.type === "column-setting")
      t.columns = i.columns ?? -1;
    else if (i.type === "edge") {
      const a2 = (bt.get(i.id) ?? 0) + 1;
      bt.set(i.id, a2), i.id = a2 + "-" + i.id, St.push(i);
    } else {
      i.label || (i.type === "composite" ? i.label = "" : i.label = i.id);
      const a$1 = V.get(i.id);
      if (a$1 === void 0 ? V.set(i.id, i) : (i.type !== "na" && (a$1.type = i.type), i.label !== i.id && (a$1.label = i.label)), i.children && Kt(i.children, i), i.type === "space") {
        const s = i.width ?? 1;
        for (let l2 = 0; l2 < s; l2++) {
          const o = a(i);
          o.id = o.id + "-" + l2, V.set(o.id, o), n.push(o);
        }
      } else
        a$1 === void 0 && n.push(i);
    }
  }
  t.children = n;
}, "populateBlockDatabase"), vt = [], rt = { id: "root", type: "composite", children: [], columns: -1 }, Be = /* @__PURE__ */ p(() => {
  D.debug("Clear called"), Qm(), rt = { id: "root", type: "composite", children: [], columns: -1 }, V = /* @__PURE__ */ new Map([["root", rt]]), vt = [], ct = /* @__PURE__ */ new Map(), St = [], bt = /* @__PURE__ */ new Map();
}, "clear");
function Xt(e) {
  switch (D.debug("typeStr2Type", e), e) {
    case "[]":
      return "square";
    case "()":
      return D.debug("we have a round"), "round";
    case "(())":
      return "circle";
    case ">]":
      return "rect_left_inv_arrow";
    case "{}":
      return "diamond";
    case "{{}}":
      return "hexagon";
    case "([])":
      return "stadium";
    case "[[]]":
      return "subroutine";
    case "[()]":
      return "cylinder";
    case "((()))":
      return "doublecircle";
    case "[//]":
      return "lean_right";
    case "[\\\\]":
      return "lean_left";
    case "[/\\]":
      return "trapezoid";
    case "[\\/]":
      return "inv_trapezoid";
    case "<[]>":
      return "block_arrow";
    default:
      return "na";
  }
}
p(Xt, "typeStr2Type");
function Ut(e) {
  switch (D.debug("typeStr2Type", e), e) {
    case "==":
      return "thick";
    default:
      return "normal";
  }
}
p(Ut, "edgeTypeStr2Type");
function jt(e) {
  switch (e.trim()) {
    case "--x":
      return "arrow_cross";
    case "--o":
      return "arrow_circle";
    default:
      return "arrow_point";
  }
}
p(jt, "edgeStrToEdgeData");
var It = 0, Ie = /* @__PURE__ */ p(() => (It++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + It), "generateId"), Oe = /* @__PURE__ */ p((e) => {
  rt.children = e, Kt(e, rt), vt = rt.children;
}, "setHierarchy"), Re = /* @__PURE__ */ p((e) => {
  const t = V.get(e);
  return t ? t.columns ? t.columns : t.children ? t.children.length : -1 : -1;
}, "getColumns"), ze = /* @__PURE__ */ p(() => [...V.values()], "getBlocksFlat"), Ae = /* @__PURE__ */ p(() => vt || [], "getBlocks"), Me = /* @__PURE__ */ p(() => St, "getEdges"), Fe = /* @__PURE__ */ p((e) => V.get(e), "getBlock"), We = /* @__PURE__ */ p((e) => {
  V.set(e.id, e);
}, "setBlock"), Pe = /* @__PURE__ */ p(() => console, "getLogger"), Ye = /* @__PURE__ */ p(function() {
  return ct;
}, "getClasses"), He = {
  getConfig: /* @__PURE__ */ p(() => Jt$1().block, "getConfig"),
  typeStr2Type: Xt,
  edgeTypeStr2Type: Ut,
  edgeStrToEdgeData: jt,
  getLogger: Pe,
  getBlocksFlat: ze,
  getBlocks: Ae,
  getEdges: Me,
  setHierarchy: Oe,
  getBlock: Fe,
  setBlock: We,
  getColumns: Re,
  getClasses: Ye,
  clear: Be,
  generateId: Ie
}, Ke = He, nt = /* @__PURE__ */ p((e, t) => {
  const r = l, n = r(e, "r"), i = r(e, "g"), a2 = r(e, "b");
  return xi(n, i, a2, t);
}, "fade"), Xe = /* @__PURE__ */ p((e) => `.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor || e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }



  .label text,span,p {
    fill: ${e.nodeTextColor || e.textColor};
    color: ${e.nodeTextColor || e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${nt(e.edgeLabelBackground, 0.5)};
    // background-color:
  }

  .node .cluster {
    // fill: ${nt(e.mainBkg, 0.5)};
    fill: ${nt(e.clusterBkg, 0.5)};
    stroke: ${nt(e.clusterBorder, 0.2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`, "getStyles"), Ue = Xe, je = /* @__PURE__ */ p((e, t, r, n) => {
  t.forEach((i) => {
    rr[i](e, r, n);
  });
}, "insertMarkers"), Ve = /* @__PURE__ */ p((e, t, r) => {
  D.trace("Making markers for ", r), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
}, "extension"), Ge = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "composition"), Ze = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "aggregation"), qe = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "dependency"), Je = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopEnd").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
}, "lollipop"), Qe = /* @__PURE__ */ p((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 6).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "point"), $e = /* @__PURE__ */ p((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
}, "circle"), tr = /* @__PURE__ */ p((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
}, "cross"), er = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "barb"), rr = {
  extension: Ve,
  composition: Ge,
  aggregation: Ze,
  dependency: qe,
  lollipop: Je,
  point: Qe,
  circle: $e,
  cross: tr,
  barb: er
}, ar = je, Wt, Pt, I = ((Pt = (Wt = dt$1()) == null ? void 0 : Wt.block) == null ? void 0 : Pt.padding) ?? 8;
function Vt(e, t) {
  if (e === 0 || !Number.isInteger(e))
    throw new Error("Columns must be an integer !== 0.");
  if (t < 0 || !Number.isInteger(t))
    throw new Error("Position must be a non-negative integer." + t);
  if (e < 0)
    return { px: t, py: 0 };
  if (e === 1)
    return { px: 0, py: t };
  const r = t % e, n = Math.floor(t / e);
  return { px: r, py: n };
}
p(Vt, "calculateBlockPosition");
var sr = /* @__PURE__ */ p((e) => {
  let t = 0, r = 0;
  for (const n of e.children) {
    const { width: i, height: a2, x: s, y: l2 } = n.size ?? { width: 0, height: 0, x: 0, y: 0 };
    D.debug(
      "getMaxChildSize abc95 child:",
      n.id,
      "width:",
      i,
      "height:",
      a2,
      "x:",
      s,
      "y:",
      l2,
      n.type
    ), n.type !== "space" && (i > t && (t = i / (e.widthInColumns ?? 1)), a2 > r && (r = a2));
  }
  return { width: t, height: r };
}, "getMaxChildSize");
function ot(e, t, r = 0, n = 0) {
  var s, l2, o, f, h, y, b, m, E, D$1, v;
  D.debug(
    "setBlockSizes abc95 (start)",
    e.id,
    (s = e == null ? void 0 : e.size) == null ? void 0 : s.x,
    "block width =",
    e == null ? void 0 : e.size,
    "sieblingWidth",
    r
  ), (l2 = e == null ? void 0 : e.size) != null && l2.width || (e.size = {
    width: r,
    height: n,
    x: 0,
    y: 0
  });
  let i = 0, a2 = 0;
  if (((o = e.children) == null ? void 0 : o.length) > 0) {
    for (const S of e.children)
      ot(S, t);
    const T = sr(e);
    i = T.width, a2 = T.height, D.debug("setBlockSizes abc95 maxWidth of", e.id, ":s children is ", i, a2);
    for (const S of e.children)
      S.size && (D.debug(
        `abc95 Setting size of children of ${e.id} id=${S.id} ${i} ${a2} ${JSON.stringify(S.size)}`
      ), S.size.width = i * (S.widthInColumns ?? 1) + I * ((S.widthInColumns ?? 1) - 1), S.size.height = a2, S.size.x = 0, S.size.y = 0, D.debug(
        `abc95 updating size of ${e.id} children child:${S.id} maxWidth:${i} maxHeight:${a2}`
      ));
    for (const S of e.children)
      ot(S, t, i, a2);
    const k = e.columns ?? -1;
    let N = 0;
    for (const S of e.children)
      N += S.widthInColumns ?? 1;
    let x = e.children.length;
    k > 0 && k < N && (x = k);
    const g = Math.ceil(N / x);
    let u = x * (i + I) + I, w = g * (a2 + I) + I;
    if (u < r) {
      D.debug(
        `Detected to small siebling: abc95 ${e.id} sieblingWidth ${r} sieblingHeight ${n} width ${u}`
      ), u = r, w = n;
      const S = (r - x * I - I) / x, c = (n - g * I - I) / g;
      D.debug("Size indata abc88", e.id, "childWidth", S, "maxWidth", i), D.debug("Size indata abc88", e.id, "childHeight", c, "maxHeight", a2), D.debug("Size indata abc88 xSize", x, "padding", I);
      for (const _ of e.children)
        _.size && (_.size.width = S, _.size.height = c, _.size.x = 0, _.size.y = 0);
    }
    if (D.debug(
      `abc95 (finale calc) ${e.id} xSize ${x} ySize ${g} columns ${k}${e.children.length} width=${Math.max(u, ((f = e.size) == null ? void 0 : f.width) || 0)}`
    ), u < (((h = e == null ? void 0 : e.size) == null ? void 0 : h.width) || 0)) {
      u = ((y = e == null ? void 0 : e.size) == null ? void 0 : y.width) || 0;
      const S = k > 0 ? Math.min(e.children.length, k) : e.children.length;
      if (S > 0) {
        const c = (u - S * I - I) / S;
        D.debug("abc95 (growing to fit) width", e.id, u, (b = e.size) == null ? void 0 : b.width, c);
        for (const _ of e.children)
          _.size && (_.size.width = c);
      }
    }
    e.size = {
      width: u,
      height: w,
      x: 0,
      y: 0
    };
  }
  D.debug(
    "setBlockSizes abc94 (done)",
    e.id,
    (m = e == null ? void 0 : e.size) == null ? void 0 : m.x,
    (E = e == null ? void 0 : e.size) == null ? void 0 : E.width,
    (D$1 = e == null ? void 0 : e.size) == null ? void 0 : D$1.y,
    (v = e == null ? void 0 : e.size) == null ? void 0 : v.height
  );
}
p(ot, "setBlockSizes");
function Et(e, t) {
  var n, i, a2, s, l2, o, f, h, y, b, m, E, D$1, v, T, k, N;
  D.debug(
    `abc85 layout blocks (=>layoutBlocks) ${e.id} x: ${(n = e == null ? void 0 : e.size) == null ? void 0 : n.x} y: ${(i = e == null ? void 0 : e.size) == null ? void 0 : i.y} width: ${(a2 = e == null ? void 0 : e.size) == null ? void 0 : a2.width}`
  );
  const r = e.columns ?? -1;
  if (D.debug("layoutBlocks columns abc95", e.id, "=>", r, e), e.children && // find max width of children
  e.children.length > 0) {
    const x = ((l2 = (s = e == null ? void 0 : e.children[0]) == null ? void 0 : s.size) == null ? void 0 : l2.width) ?? 0, g = e.children.length * x + (e.children.length - 1) * I;
    D.debug("widthOfChildren 88", g, "posX");
    let u = 0;
    D.debug("abc91 block?.size?.x", e.id, (o = e == null ? void 0 : e.size) == null ? void 0 : o.x);
    let w = (f = e == null ? void 0 : e.size) != null && f.x ? ((h = e == null ? void 0 : e.size) == null ? void 0 : h.x) + (-((y = e == null ? void 0 : e.size) == null ? void 0 : y.width) / 2 || 0) : -I, S = 0;
    for (const c of e.children) {
      const _ = e;
      if (!c.size)
        continue;
      const { width: p2, height: A } = c.size, { px: O, py: X } = Vt(r, u);
      if (X != S && (S = X, w = (b = e == null ? void 0 : e.size) != null && b.x ? ((m = e == null ? void 0 : e.size) == null ? void 0 : m.x) + (-((E = e == null ? void 0 : e.size) == null ? void 0 : E.width) / 2 || 0) : -I, D.debug("New row in layout for block", e.id, " and child ", c.id, S)), D.debug(
        `abc89 layout blocks (child) id: ${c.id} Pos: ${u} (px, py) ${O},${X} (${(D$1 = _ == null ? void 0 : _.size) == null ? void 0 : D$1.x},${(v = _ == null ? void 0 : _.size) == null ? void 0 : v.y}) parent: ${_.id} width: ${p2}${I}`
      ), _.size) {
        const W = p2 / 2;
        c.size.x = w + I + W, D.debug(
          `abc91 layout blocks (calc) px, pyid:${c.id} startingPos=X${w} new startingPosX${c.size.x} ${W} padding=${I} width=${p2} halfWidth=${W} => x:${c.size.x} y:${c.size.y} ${c.widthInColumns} (width * (child?.w || 1)) / 2 ${p2 * ((c == null ? void 0 : c.widthInColumns) ?? 1) / 2}`
        ), w = c.size.x + W, c.size.y = _.size.y - _.size.height / 2 + X * (A + I) + A / 2 + I, D.debug(
          `abc88 layout blocks (calc) px, pyid:${c.id}startingPosX${w}${I}${W}=>x:${c.size.x}y:${c.size.y}${c.widthInColumns}(width * (child?.w || 1)) / 2${p2 * ((c == null ? void 0 : c.widthInColumns) ?? 1) / 2}`
        );
      }
      c.children && Et(c), u += (c == null ? void 0 : c.widthInColumns) ?? 1, D.debug("abc88 columnsPos", c, u);
    }
  }
  D.debug(
    `layout blocks (<==layoutBlocks) ${e.id} x: ${(T = e == null ? void 0 : e.size) == null ? void 0 : T.x} y: ${(k = e == null ? void 0 : e.size) == null ? void 0 : k.y} width: ${(N = e == null ? void 0 : e.size) == null ? void 0 : N.width}`
  );
}
p(Et, "layoutBlocks");
function _t(e, { minX: t, minY: r, maxX: n, maxY: i } = { minX: 0, minY: 0, maxX: 0, maxY: 0 }) {
  if (e.size && e.id !== "root") {
    const { x: a2, y: s, width: l2, height: o } = e.size;
    a2 - l2 / 2 < t && (t = a2 - l2 / 2), s - o / 2 < r && (r = s - o / 2), a2 + l2 / 2 > n && (n = a2 + l2 / 2), s + o / 2 > i && (i = s + o / 2);
  }
  if (e.children)
    for (const a2 of e.children)
      ({ minX: t, minY: r, maxX: n, maxY: i } = _t(a2, { minX: t, minY: r, maxX: n, maxY: i }));
  return { minX: t, minY: r, maxX: n, maxY: i };
}
p(_t, "findBounds");
function Gt(e) {
  const t = e.getBlock("root");
  if (!t)
    return;
  ot(t, e, 0, 0), Et(t), D.debug("getBlocks", JSON.stringify(t, null, 2));
  const { minX: r, minY: n, maxX: i, maxY: a2 } = _t(t), s = a2 - n, l2 = i - r;
  return { x: r, y: n, width: l2, height: s };
}
p(Gt, "layout");
function wt(e, t) {
  t && e.attr("style", t);
}
p(wt, "applyStyle");
function Zt(e) {
  const t = Li(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), r = t.append("xhtml:div"), n = e.label, i = e.isNode ? "nodeLabel" : "edgeLabel", a2 = r.append("span");
  return a2.html(n), wt(a2, e.labelStyle), a2.attr("class", i), wt(r, e.labelStyle), r.style("display", "inline-block"), r.style("white-space", "nowrap"), r.attr("xmlns", "http://www.w3.org/1999/xhtml"), t.node();
}
p(Zt, "addHtmlLabel");
var ir = /* @__PURE__ */ p((e, t, r, n) => {
  let i = e || "";
  if (typeof i == "object" && (i = i[0]), At$1(dt$1().flowchart.htmlLabels)) {
    i = i.replace(/\\n|\n/g, "<br />"), D.debug("vertexText" + i);
    const a2 = {
      isNode: n,
      label: Wd(hr$1(i)),
      labelStyle: t.replace("fill:", "color:")
    };
    return Zt(a2);
  } else {
    const a2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
    a2.setAttribute("style", t.replace("color:", "fill:"));
    let s = [];
    typeof i == "string" ? s = i.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(i) ? s = i : s = [];
    for (const l2 of s) {
      const o = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), o.setAttribute("dy", "1em"), o.setAttribute("x", "0"), r ? o.setAttribute("class", "title-row") : o.setAttribute("class", "row"), o.textContent = l2.trim(), a2.appendChild(o);
    }
    return a2;
  }
}, "createLabel"), j = ir, nr = /* @__PURE__ */ p((e, t, r, n, i) => {
  t.arrowTypeStart && Ot(e, "start", t.arrowTypeStart, r, n, i), t.arrowTypeEnd && Ot(e, "end", t.arrowTypeEnd, r, n, i);
}, "addEdgeMarkers"), lr = {
  arrow_cross: "cross",
  arrow_point: "point",
  arrow_barb: "barb",
  arrow_circle: "circle",
  aggregation: "aggregation",
  extension: "extension",
  composition: "composition",
  dependency: "dependency",
  lollipop: "lollipop"
}, Ot = /* @__PURE__ */ p((e, t, r, n, i, a2) => {
  const s = lr[r];
  if (!s) {
    D.warn(`Unknown arrow type: ${r}`);
    return;
  }
  const l2 = t === "start" ? "Start" : "End";
  e.attr(`marker-${t}`, `url(${n}#${i}_${a2}-${s}${l2})`);
}, "addEdgeMarker"), mt = {}, P = {}, cr = /* @__PURE__ */ p((e, t) => {
  const r = dt$1(), n = At$1(r.flowchart.htmlLabels), i = t.labelType === "markdown" ? He$1(
    e,
    t.label,
    {
      style: t.labelStyle,
      useHtmlLabels: n,
      addSvgBackground: true
    },
    r
  ) : j(t.label, t.labelStyle), a2 = e.insert("g").attr("class", "edgeLabel"), s = a2.insert("g").attr("class", "label");
  s.node().appendChild(i);
  let l2 = i.getBBox();
  if (n) {
    const f = i.children[0], h = Li(i);
    l2 = f.getBoundingClientRect(), h.attr("width", l2.width), h.attr("height", l2.height);
  }
  s.attr("transform", "translate(" + -l2.width / 2 + ", " + -l2.height / 2 + ")"), mt[t.id] = a2, t.width = l2.width, t.height = l2.height;
  let o;
  if (t.startLabelLeft) {
    const f = j(t.startLabelLeft, t.labelStyle), h = e.insert("g").attr("class", "edgeTerminals"), y = h.insert("g").attr("class", "inner");
    o = y.node().appendChild(f);
    const b = f.getBBox();
    y.attr("transform", "translate(" + -b.width / 2 + ", " + -b.height / 2 + ")"), P[t.id] || (P[t.id] = {}), P[t.id].startLeft = h, et(o, t.startLabelLeft);
  }
  if (t.startLabelRight) {
    const f = j(t.startLabelRight, t.labelStyle), h = e.insert("g").attr("class", "edgeTerminals"), y = h.insert("g").attr("class", "inner");
    o = h.node().appendChild(f), y.node().appendChild(f);
    const b = f.getBBox();
    y.attr("transform", "translate(" + -b.width / 2 + ", " + -b.height / 2 + ")"), P[t.id] || (P[t.id] = {}), P[t.id].startRight = h, et(o, t.startLabelRight);
  }
  if (t.endLabelLeft) {
    const f = j(t.endLabelLeft, t.labelStyle), h = e.insert("g").attr("class", "edgeTerminals"), y = h.insert("g").attr("class", "inner");
    o = y.node().appendChild(f);
    const b = f.getBBox();
    y.attr("transform", "translate(" + -b.width / 2 + ", " + -b.height / 2 + ")"), h.node().appendChild(f), P[t.id] || (P[t.id] = {}), P[t.id].endLeft = h, et(o, t.endLabelLeft);
  }
  if (t.endLabelRight) {
    const f = j(t.endLabelRight, t.labelStyle), h = e.insert("g").attr("class", "edgeTerminals"), y = h.insert("g").attr("class", "inner");
    o = y.node().appendChild(f);
    const b = f.getBBox();
    y.attr("transform", "translate(" + -b.width / 2 + ", " + -b.height / 2 + ")"), h.node().appendChild(f), P[t.id] || (P[t.id] = {}), P[t.id].endRight = h, et(o, t.endLabelRight);
  }
  return i;
}, "insertEdgeLabel");
function et(e, t) {
  dt$1().flowchart.htmlLabels && e && (e.style.width = t.length * 9 + "px", e.style.height = "12px");
}
p(et, "setTerminalWidth");
var or = /* @__PURE__ */ p((e, t) => {
  D.debug("Moving label abc88 ", e.id, e.label, mt[e.id], t);
  let r = t.updatedPath ? t.updatedPath : t.originalPath;
  const n = dt$1(), { subGraphTitleTotalMargin: i } = Js(n);
  if (e.label) {
    const a2 = mt[e.id];
    let s = e.x, l2 = e.y;
    if (r) {
      const o = ge.calcLabelPosition(r);
      D.debug(
        "Moving label " + e.label + " from (",
        s,
        ",",
        l2,
        ") to (",
        o.x,
        ",",
        o.y,
        ") abc88"
      ), t.updatedPath && (s = o.x, l2 = o.y);
    }
    a2.attr("transform", `translate(${s}, ${l2 + i / 2})`);
  }
  if (e.startLabelLeft) {
    const a2 = P[e.id].startLeft;
    let s = e.x, l2 = e.y;
    if (r) {
      const o = ge.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_left", r);
      s = o.x, l2 = o.y;
    }
    a2.attr("transform", `translate(${s}, ${l2})`);
  }
  if (e.startLabelRight) {
    const a2 = P[e.id].startRight;
    let s = e.x, l2 = e.y;
    if (r) {
      const o = ge.calcTerminalLabelPosition(
        e.arrowTypeStart ? 10 : 0,
        "start_right",
        r
      );
      s = o.x, l2 = o.y;
    }
    a2.attr("transform", `translate(${s}, ${l2})`);
  }
  if (e.endLabelLeft) {
    const a2 = P[e.id].endLeft;
    let s = e.x, l2 = e.y;
    if (r) {
      const o = ge.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_left", r);
      s = o.x, l2 = o.y;
    }
    a2.attr("transform", `translate(${s}, ${l2})`);
  }
  if (e.endLabelRight) {
    const a2 = P[e.id].endRight;
    let s = e.x, l2 = e.y;
    if (r) {
      const o = ge.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_right", r);
      s = o.x, l2 = o.y;
    }
    a2.attr("transform", `translate(${s}, ${l2})`);
  }
}, "positionEdgeLabel"), hr = /* @__PURE__ */ p((e, t) => {
  const r = e.x, n = e.y, i = Math.abs(t.x - r), a2 = Math.abs(t.y - n), s = e.width / 2, l2 = e.height / 2;
  return i >= s || a2 >= l2;
}, "outsideNode"), dr = /* @__PURE__ */ p((e, t, r) => {
  D.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);
  const n = e.x, i = e.y, a2 = Math.abs(n - r.x), s = e.width / 2;
  let l2 = r.x < t.x ? s - a2 : s + a2;
  const o = e.height / 2, f = Math.abs(t.y - r.y), h = Math.abs(t.x - r.x);
  if (Math.abs(i - t.y) * s > Math.abs(n - t.x) * o) {
    let y = r.y < t.y ? t.y - o - i : i - o - t.y;
    l2 = h * y / f;
    const b = {
      x: r.x < t.x ? r.x + l2 : r.x - h + l2,
      y: r.y < t.y ? r.y + f - y : r.y - f + y
    };
    return l2 === 0 && (b.x = t.x, b.y = t.y), h === 0 && (b.x = t.x), f === 0 && (b.y = t.y), D.debug(`abc89 topp/bott calc, Q ${f}, q ${y}, R ${h}, r ${l2}`, b), b;
  } else {
    r.x < t.x ? l2 = t.x - s - n : l2 = n - s - t.x;
    let y = f * l2 / h, b = r.x < t.x ? r.x + h - l2 : r.x - h + l2, m = r.y < t.y ? r.y + y : r.y - y;
    return D.debug(`sides calc abc89, Q ${f}, q ${y}, R ${h}, r ${l2}`, { _x: b, _y: m }), l2 === 0 && (b = t.x, m = t.y), h === 0 && (b = t.x), f === 0 && (m = t.y), { x: b, y: m };
  }
}, "intersection"), Rt = /* @__PURE__ */ p((e, t) => {
  D.debug("abc88 cutPathAtIntersect", e, t);
  let r = [], n = e[0], i = false;
  return e.forEach((a2) => {
    if (!hr(t, a2) && !i) {
      const s = dr(t, n, a2);
      let l2 = false;
      r.forEach((o) => {
        l2 = l2 || o.x === s.x && o.y === s.y;
      }), r.some((o) => o.x === s.x && o.y === s.y) || r.push(s), i = true;
    } else
      n = a2, i || r.push(a2);
  }), r;
}, "cutPathAtIntersect"), gr = /* @__PURE__ */ p(function(e, t, r, n, i, a2, s) {
  let l2 = r.points;
  D.debug("abc88 InsertEdge: edge=", r, "e=", t);
  let o = false;
  const f = a2.node(t.v);
  var h = a2.node(t.w);
  h != null && h.intersect && (f != null && f.intersect) && (l2 = l2.slice(1, r.points.length - 1), l2.unshift(f.intersect(l2[0])), l2.push(h.intersect(l2[l2.length - 1]))), r.toCluster && (D.debug("to cluster abc88", n[r.toCluster]), l2 = Rt(r.points, n[r.toCluster].node), o = true), r.fromCluster && (D.debug("from cluster abc88", n[r.fromCluster]), l2 = Rt(l2.reverse(), n[r.fromCluster].node).reverse(), o = true);
  const y = l2.filter((x) => !Number.isNaN(x.y));
  let b = ca;
  r.curve && (i === "graph" || i === "flowchart") && (b = r.curve);
  const { x: m, y: E } = m0(r), D$1 = H0().x(m).y(E).curve(b);
  let v;
  switch (r.thickness) {
    case "normal":
      v = "edge-thickness-normal";
      break;
    case "thick":
      v = "edge-thickness-thick";
      break;
    case "invisible":
      v = "edge-thickness-thick";
      break;
    default:
      v = "";
  }
  switch (r.pattern) {
    case "solid":
      v += " edge-pattern-solid";
      break;
    case "dotted":
      v += " edge-pattern-dotted";
      break;
    case "dashed":
      v += " edge-pattern-dashed";
      break;
  }
  const T = e.append("path").attr("d", D$1(y)).attr("id", r.id).attr("class", " " + v + (r.classes ? " " + r.classes : "")).attr("style", r.style);
  let k = "";
  (dt$1().flowchart.arrowMarkerAbsolute || dt$1().state.arrowMarkerAbsolute) && (k = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, k = k.replace(/\(/g, "\\("), k = k.replace(/\)/g, "\\)")), nr(T, r, k, s, i);
  let N = {};
  return o && (N.updatedPath = l2), N.originalPath = r.points, N;
}, "insertEdge"), ur = /* @__PURE__ */ p((e) => {
  const t = /* @__PURE__ */ new Set();
  for (const r of e)
    switch (r) {
      case "x":
        t.add("right"), t.add("left");
        break;
      case "y":
        t.add("up"), t.add("down");
        break;
      default:
        t.add(r);
        break;
    }
  return t;
}, "expandAndDeduplicateDirections"), pr = /* @__PURE__ */ p((e, t, r) => {
  const n = ur(e), i = 2, a2 = t.height + 2 * r.padding, s = a2 / i, l2 = t.width + 2 * s + r.padding, o = r.padding / 2;
  return n.has("right") && n.has("left") && n.has("up") && n.has("down") ? [
    // Bottom
    { x: 0, y: 0 },
    { x: s, y: 0 },
    { x: l2 / 2, y: 2 * o },
    { x: l2 - s, y: 0 },
    { x: l2, y: 0 },
    // Right
    { x: l2, y: -a2 / 3 },
    { x: l2 + 2 * o, y: -a2 / 2 },
    { x: l2, y: -2 * a2 / 3 },
    { x: l2, y: -a2 },
    // Top
    { x: l2 - s, y: -a2 },
    { x: l2 / 2, y: -a2 - 2 * o },
    { x: s, y: -a2 },
    // Left
    { x: 0, y: -a2 },
    { x: 0, y: -2 * a2 / 3 },
    { x: -2 * o, y: -a2 / 2 },
    { x: 0, y: -a2 / 3 }
  ] : n.has("right") && n.has("left") && n.has("up") ? [
    { x: s, y: 0 },
    { x: l2 - s, y: 0 },
    { x: l2, y: -a2 / 2 },
    { x: l2 - s, y: -a2 },
    { x: s, y: -a2 },
    { x: 0, y: -a2 / 2 }
  ] : n.has("right") && n.has("left") && n.has("down") ? [
    { x: 0, y: 0 },
    { x: s, y: -a2 },
    { x: l2 - s, y: -a2 },
    { x: l2, y: 0 }
  ] : n.has("right") && n.has("up") && n.has("down") ? [
    { x: 0, y: 0 },
    { x: l2, y: -s },
    { x: l2, y: -a2 + s },
    { x: 0, y: -a2 }
  ] : n.has("left") && n.has("up") && n.has("down") ? [
    { x: l2, y: 0 },
    { x: 0, y: -s },
    { x: 0, y: -a2 + s },
    { x: l2, y: -a2 }
  ] : n.has("right") && n.has("left") ? [
    { x: s, y: 0 },
    { x: s, y: -o },
    { x: l2 - s, y: -o },
    { x: l2 - s, y: 0 },
    { x: l2, y: -a2 / 2 },
    { x: l2 - s, y: -a2 },
    { x: l2 - s, y: -a2 + o },
    { x: s, y: -a2 + o },
    { x: s, y: -a2 },
    { x: 0, y: -a2 / 2 }
  ] : n.has("up") && n.has("down") ? [
    // Bottom center
    { x: l2 / 2, y: 0 },
    // Left pont of bottom arrow
    { x: 0, y: -o },
    { x: s, y: -o },
    // Left top over vertical section
    { x: s, y: -a2 + o },
    { x: 0, y: -a2 + o },
    // Top of arrow
    { x: l2 / 2, y: -a2 },
    { x: l2, y: -a2 + o },
    // Top of right vertical bar
    { x: l2 - s, y: -a2 + o },
    { x: l2 - s, y: -o },
    { x: l2, y: -o }
  ] : n.has("right") && n.has("up") ? [
    { x: 0, y: 0 },
    { x: l2, y: -s },
    { x: 0, y: -a2 }
  ] : n.has("right") && n.has("down") ? [
    { x: 0, y: 0 },
    { x: l2, y: 0 },
    { x: 0, y: -a2 }
  ] : n.has("left") && n.has("up") ? [
    { x: l2, y: 0 },
    { x: 0, y: -s },
    { x: l2, y: -a2 }
  ] : n.has("left") && n.has("down") ? [
    { x: l2, y: 0 },
    { x: 0, y: 0 },
    { x: l2, y: -a2 }
  ] : n.has("right") ? [
    { x: s, y: -o },
    { x: s, y: -o },
    { x: l2 - s, y: -o },
    { x: l2 - s, y: 0 },
    { x: l2, y: -a2 / 2 },
    { x: l2 - s, y: -a2 },
    { x: l2 - s, y: -a2 + o },
    // top left corner of arrow
    { x: s, y: -a2 + o },
    { x: s, y: -a2 + o }
  ] : n.has("left") ? [
    { x: s, y: 0 },
    { x: s, y: -o },
    // Two points, the right corners
    { x: l2 - s, y: -o },
    { x: l2 - s, y: -a2 + o },
    { x: s, y: -a2 + o },
    { x: s, y: -a2 },
    { x: 0, y: -a2 / 2 }
  ] : n.has("up") ? [
    // Bottom center
    { x: s, y: -o },
    // Left top over vertical section
    { x: s, y: -a2 + o },
    { x: 0, y: -a2 + o },
    // Top of arrow
    { x: l2 / 2, y: -a2 },
    { x: l2, y: -a2 + o },
    // Top of right vertical bar
    { x: l2 - s, y: -a2 + o },
    { x: l2 - s, y: -o }
  ] : n.has("down") ? [
    // Bottom center
    { x: l2 / 2, y: 0 },
    // Left pont of bottom arrow
    { x: 0, y: -o },
    { x: s, y: -o },
    // Left top over vertical section
    { x: s, y: -a2 + o },
    { x: l2 - s, y: -a2 + o },
    { x: l2 - s, y: -o },
    { x: l2, y: -o }
  ] : [{ x: 0, y: 0 }];
}, "getArrowPoints");
function qt(e, t) {
  return e.intersect(t);
}
p(qt, "intersectNode");
var fr = qt;
function Jt(e, t, r, n) {
  var i = e.x, a2 = e.y, s = i - n.x, l2 = a2 - n.y, o = Math.sqrt(t * t * l2 * l2 + r * r * s * s), f = Math.abs(t * r * s / o);
  n.x < i && (f = -f);
  var h = Math.abs(t * r * l2 / o);
  return n.y < a2 && (h = -h), { x: i + f, y: a2 + h };
}
p(Jt, "intersectEllipse");
var Qt = Jt;
function $t(e, t, r) {
  return Qt(e, t, t, r);
}
p($t, "intersectCircle");
var xr = $t;
function te(e, t, r, n) {
  var i, a2, s, l2, o, f, h, y, b, m, E, D2, v, T, k;
  if (i = t.y - e.y, s = e.x - t.x, o = t.x * e.y - e.x * t.y, b = i * r.x + s * r.y + o, m = i * n.x + s * n.y + o, !(b !== 0 && m !== 0 && Lt(b, m)) && (a2 = n.y - r.y, l2 = r.x - n.x, f = n.x * r.y - r.x * n.y, h = a2 * e.x + l2 * e.y + f, y = a2 * t.x + l2 * t.y + f, !(h !== 0 && y !== 0 && Lt(h, y)) && (E = i * l2 - a2 * s, E !== 0)))
    return D2 = Math.abs(E / 2), v = s * f - l2 * o, T = v < 0 ? (v - D2) / E : (v + D2) / E, v = a2 * o - i * f, k = v < 0 ? (v - D2) / E : (v + D2) / E, { x: T, y: k };
}
p(te, "intersectLine");
function Lt(e, t) {
  return e * t > 0;
}
p(Lt, "sameSign");
var yr = te, br = ee;
function ee(e, t, r) {
  var n = e.x, i = e.y, a2 = [], s = Number.POSITIVE_INFINITY, l2 = Number.POSITIVE_INFINITY;
  typeof t.forEach == "function" ? t.forEach(function(E) {
    s = Math.min(s, E.x), l2 = Math.min(l2, E.y);
  }) : (s = Math.min(s, t.x), l2 = Math.min(l2, t.y));
  for (var o = n - e.width / 2 - s, f = i - e.height / 2 - l2, h = 0; h < t.length; h++) {
    var y = t[h], b = t[h < t.length - 1 ? h + 1 : 0], m = yr(
      e,
      r,
      { x: o + y.x, y: f + y.y },
      { x: o + b.x, y: f + b.y }
    );
    m && a2.push(m);
  }
  return a2.length ? (a2.length > 1 && a2.sort(function(E, D2) {
    var v = E.x - r.x, T = E.y - r.y, k = Math.sqrt(v * v + T * T), N = D2.x - r.x, x = D2.y - r.y, g = Math.sqrt(N * N + x * x);
    return k < g ? -1 : k === g ? 0 : 1;
  }), a2[0]) : e;
}
p(ee, "intersectPolygon");
var wr = /* @__PURE__ */ p((e, t) => {
  var r = e.x, n = e.y, i = t.x - r, a2 = t.y - n, s = e.width / 2, l2 = e.height / 2, o, f;
  return Math.abs(a2) * s > Math.abs(i) * l2 ? (a2 < 0 && (l2 = -l2), o = a2 === 0 ? 0 : l2 * i / a2, f = l2) : (i < 0 && (s = -s), o = s, f = i === 0 ? 0 : s * a2 / i), { x: r + o, y: n + f };
}, "intersectRect"), mr = wr, C = {
  node: fr,
  circle: xr,
  ellipse: Qt,
  polygon: br,
  rect: mr
}, F = /* @__PURE__ */ p(async (e, t, r, n) => {
  const i = dt$1();
  let a2;
  const s = t.useHtmlLabels || At$1(i.flowchart.htmlLabels);
  r ? a2 = r : a2 = "node default";
  const l2 = e.insert("g").attr("class", a2).attr("id", t.domId || t.id), o = l2.insert("g").attr("class", "label").attr("style", t.labelStyle);
  let f;
  t.labelText === void 0 ? f = "" : f = typeof t.labelText == "string" ? t.labelText : t.labelText[0];
  const h = o.node();
  let y;
  t.labelType === "markdown" ? y = He$1(
    o,
    rr$1(hr$1(f), i),
    {
      useHtmlLabels: s,
      width: t.width || i.flowchart.wrappingWidth,
      classes: "markdown-node-label"
    },
    i
  ) : y = h.appendChild(
    j(rr$1(hr$1(f), i), t.labelStyle, false, n)
  );
  let b = y.getBBox();
  const m = t.padding / 2;
  if (At$1(i.flowchart.htmlLabels)) {
    const E = y.children[0], D2 = Li(y), v = E.getElementsByTagName("img");
    if (v) {
      const T = f.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...v].map(
          (k) => new Promise((N) => {
            function x() {
              if (k.style.display = "flex", k.style.flexDirection = "column", T) {
                const g = i.fontSize ? i.fontSize : window.getComputedStyle(document.body).fontSize, w = parseInt(g, 10) * 5 + "px";
                k.style.minWidth = w, k.style.maxWidth = w;
              } else
                k.style.width = "100%";
              N(k);
            }
            p(x, "setupImage"), setTimeout(() => {
              k.complete && x();
            }), k.addEventListener("error", x), k.addEventListener("load", x);
          })
        )
      );
    }
    b = E.getBoundingClientRect(), D2.attr("width", b.width), D2.attr("height", b.height);
  }
  return s ? o.attr("transform", "translate(" + -b.width / 2 + ", " + -b.height / 2 + ")") : o.attr("transform", "translate(0, " + -b.height / 2 + ")"), t.centerLabel && o.attr("transform", "translate(" + -b.width / 2 + ", " + -b.height / 2 + ")"), o.insert("rect", ":first-child"), { shapeSvg: l2, bbox: b, halfPadding: m, label: o };
}, "labelHelper"), B = /* @__PURE__ */ p((e, t) => {
  const r = t.node().getBBox();
  e.width = r.width, e.height = r.height;
}, "updateNodeBounds");
function G(e, t, r, n) {
  return e.insert("polygon", ":first-child").attr(
    "points",
    n.map(function(i) {
      return i.x + "," + i.y;
    }).join(" ")
  ).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + r / 2 + ")");
}
p(G, "insertPolygonShape");
var Lr = /* @__PURE__ */ p(async (e, t) => {
  t.useHtmlLabels || dt$1().flowchart.htmlLabels || (t.centerLabel = true);
  const { shapeSvg: n, bbox: i, halfPadding: a2 } = await F(
    e,
    t,
    "node " + t.classes,
    true
  );
  D.info("Classes = ", t.classes);
  const s = n.insert("rect", ":first-child");
  return s.attr("rx", t.rx).attr("ry", t.ry).attr("x", -i.width / 2 - a2).attr("y", -i.height / 2 - a2).attr("width", i.width + t.padding).attr("height", i.height + t.padding), B(t, s), t.intersect = function(l2) {
    return C.rect(t, l2);
  }, n;
}, "note"), Sr = Lr, zt = /* @__PURE__ */ p((e) => e ? " " + e : "", "formatClass"), K = /* @__PURE__ */ p((e, t) => `${t || "node default"}${zt(e.classes)} ${zt(
  e.class
)}`, "getClassesFromNode"), At = /* @__PURE__ */ p(async (e, t) => {
  const { shapeSvg: r, bbox: n } = await F(
    e,
    t,
    K(t, void 0),
    true
  ), i = n.width + t.padding, a2 = n.height + t.padding, s = i + a2, l2 = [
    { x: s / 2, y: 0 },
    { x: s, y: -s / 2 },
    { x: s / 2, y: -s },
    { x: 0, y: -s / 2 }
  ];
  D.info("Question main (Circle)");
  const o = G(r, s, s, l2);
  return o.attr("style", t.style), B(t, o), t.intersect = function(f) {
    return D.warn("Intersect called"), C.polygon(t, l2, f);
  }, r;
}, "question"), vr = /* @__PURE__ */ p((e, t) => {
  const r = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id), n = 28, i = [
    { x: 0, y: n / 2 },
    { x: n / 2, y: 0 },
    { x: 0, y: -28 / 2 },
    { x: -28 / 2, y: 0 }
  ];
  return r.insert("polygon", ":first-child").attr(
    "points",
    i.map(function(s) {
      return s.x + "," + s.y;
    }).join(" ")
  ).attr("class", "state-start").attr("r", 7).attr("width", 28).attr("height", 28), t.width = 28, t.height = 28, t.intersect = function(s) {
    return C.circle(t, 14, s);
  }, r;
}, "choice"), Er = /* @__PURE__ */ p(async (e, t) => {
  const { shapeSvg: r, bbox: n } = await F(
    e,
    t,
    K(t, void 0),
    true
  ), i = 4, a2 = n.height + t.padding, s = a2 / i, l2 = n.width + 2 * s + t.padding, o = [
    { x: s, y: 0 },
    { x: l2 - s, y: 0 },
    { x: l2, y: -a2 / 2 },
    { x: l2 - s, y: -a2 },
    { x: s, y: -a2 },
    { x: 0, y: -a2 / 2 }
  ], f = G(r, l2, a2, o);
  return f.attr("style", t.style), B(t, f), t.intersect = function(h) {
    return C.polygon(t, o, h);
  }, r;
}, "hexagon"), _r = /* @__PURE__ */ p(async (e, t) => {
  const { shapeSvg: r, bbox: n } = await F(e, t, void 0, true), i = 2, a2 = n.height + 2 * t.padding, s = a2 / i, l2 = n.width + 2 * s + t.padding, o = pr(t.directions, n, t), f = G(r, l2, a2, o);
  return f.attr("style", t.style), B(t, f), t.intersect = function(h) {
    return C.polygon(t, o, h);
  }, r;
}, "block_arrow"), kr = /* @__PURE__ */ p(async (e, t) => {
  const { shapeSvg: r, bbox: n } = await F(
    e,
    t,
    K(t, void 0),
    true
  ), i = n.width + t.padding, a2 = n.height + t.padding, s = [
    { x: -a2 / 2, y: 0 },
    { x: i, y: 0 },
    { x: i, y: -a2 },
    { x: -a2 / 2, y: -a2 },
    { x: 0, y: -a2 / 2 }
  ];
  return G(r, i, a2, s).attr("style", t.style), t.width = i + a2, t.height = a2, t.intersect = function(o) {
    return C.polygon(t, s, o);
  }, r;
}, "rect_left_inv_arrow"), Dr = /* @__PURE__ */ p(async (e, t) => {
  const { shapeSvg: r, bbox: n } = await F(e, t, K(t), true), i = n.width + t.padding, a2 = n.height + t.padding, s = [
    { x: -2 * a2 / 6, y: 0 },
    { x: i - a2 / 6, y: 0 },
    { x: i + 2 * a2 / 6, y: -a2 },
    { x: a2 / 6, y: -a2 }
  ], l2 = G(r, i, a2, s);
  return l2.attr("style", t.style), B(t, l2), t.intersect = function(o) {
    return C.polygon(t, s, o);
  }, r;
}, "lean_right"), Nr = /* @__PURE__ */ p(async (e, t) => {
  const { shapeSvg: r, bbox: n } = await F(
    e,
    t,
    K(t, void 0),
    true
  ), i = n.width + t.padding, a2 = n.height + t.padding, s = [
    { x: 2 * a2 / 6, y: 0 },
    { x: i + a2 / 6, y: 0 },
    { x: i - 2 * a2 / 6, y: -a2 },
    { x: -a2 / 6, y: -a2 }
  ], l2 = G(r, i, a2, s);
  return l2.attr("style", t.style), B(t, l2), t.intersect = function(o) {
    return C.polygon(t, s, o);
  }, r;
}, "lean_left"), Tr = /* @__PURE__ */ p(async (e, t) => {
  const { shapeSvg: r, bbox: n } = await F(
    e,
    t,
    K(t, void 0),
    true
  ), i = n.width + t.padding, a2 = n.height + t.padding, s = [
    { x: -2 * a2 / 6, y: 0 },
    { x: i + 2 * a2 / 6, y: 0 },
    { x: i - a2 / 6, y: -a2 },
    { x: a2 / 6, y: -a2 }
  ], l2 = G(r, i, a2, s);
  return l2.attr("style", t.style), B(t, l2), t.intersect = function(o) {
    return C.polygon(t, s, o);
  }, r;
}, "trapezoid"), Cr = /* @__PURE__ */ p(async (e, t) => {
  const { shapeSvg: r, bbox: n } = await F(
    e,
    t,
    K(t, void 0),
    true
  ), i = n.width + t.padding, a2 = n.height + t.padding, s = [
    { x: a2 / 6, y: 0 },
    { x: i - a2 / 6, y: 0 },
    { x: i + 2 * a2 / 6, y: -a2 },
    { x: -2 * a2 / 6, y: -a2 }
  ], l2 = G(r, i, a2, s);
  return l2.attr("style", t.style), B(t, l2), t.intersect = function(o) {
    return C.polygon(t, s, o);
  }, r;
}, "inv_trapezoid"), Br = /* @__PURE__ */ p(async (e, t) => {
  const { shapeSvg: r, bbox: n } = await F(
    e,
    t,
    K(t, void 0),
    true
  ), i = n.width + t.padding, a2 = n.height + t.padding, s = [
    { x: 0, y: 0 },
    { x: i + a2 / 2, y: 0 },
    { x: i, y: -a2 / 2 },
    { x: i + a2 / 2, y: -a2 },
    { x: 0, y: -a2 }
  ], l2 = G(r, i, a2, s);
  return l2.attr("style", t.style), B(t, l2), t.intersect = function(o) {
    return C.polygon(t, s, o);
  }, r;
}, "rect_right_inv_arrow"), Ir = /* @__PURE__ */ p(async (e, t) => {
  const { shapeSvg: r, bbox: n } = await F(
    e,
    t,
    K(t, void 0),
    true
  ), i = n.width + t.padding, a2 = i / 2, s = a2 / (2.5 + i / 50), l2 = n.height + s + t.padding, o = "M 0," + s + " a " + a2 + "," + s + " 0,0,0 " + i + " 0 a " + a2 + "," + s + " 0,0,0 " + -i + " 0 l 0," + l2 + " a " + a2 + "," + s + " 0,0,0 " + i + " 0 l 0," + -l2, f = r.attr("label-offset-y", s).insert("path", ":first-child").attr("style", t.style).attr("d", o).attr("transform", "translate(" + -i / 2 + "," + -(l2 / 2 + s) + ")");
  return B(t, f), t.intersect = function(h) {
    const y = C.rect(t, h), b = y.x - t.x;
    if (a2 != 0 && (Math.abs(b) < t.width / 2 || Math.abs(b) == t.width / 2 && Math.abs(y.y - t.y) > t.height / 2 - s)) {
      let m = s * s * (1 - b * b / (a2 * a2));
      m != 0 && (m = Math.sqrt(m)), m = s - m, h.y - t.y > 0 && (m = -m), y.y += m;
    }
    return y;
  }, r;
}, "cylinder"), Or = /* @__PURE__ */ p(async (e, t) => {
  const { shapeSvg: r, bbox: n, halfPadding: i } = await F(
    e,
    t,
    "node " + t.classes + " " + t.class,
    true
  ), a2 = r.insert("rect", ":first-child"), s = t.positioned ? t.width : n.width + t.padding, l2 = t.positioned ? t.height : n.height + t.padding, o = t.positioned ? -s / 2 : -n.width / 2 - i, f = t.positioned ? -l2 / 2 : -n.height / 2 - i;
  if (a2.attr("class", "basic label-container").attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("x", o).attr("y", f).attr("width", s).attr("height", l2), t.props) {
    const h = new Set(Object.keys(t.props));
    t.props.borders && (ht(a2, t.props.borders, s, l2), h.delete("borders")), h.forEach((y) => {
      D.warn(`Unknown node property ${y}`);
    });
  }
  return B(t, a2), t.intersect = function(h) {
    return C.rect(t, h);
  }, r;
}, "rect"), Rr = /* @__PURE__ */ p(async (e, t) => {
  const { shapeSvg: r, bbox: n, halfPadding: i } = await F(
    e,
    t,
    "node " + t.classes,
    true
  ), a2 = r.insert("rect", ":first-child"), s = t.positioned ? t.width : n.width + t.padding, l2 = t.positioned ? t.height : n.height + t.padding, o = t.positioned ? -s / 2 : -n.width / 2 - i, f = t.positioned ? -l2 / 2 : -n.height / 2 - i;
  if (a2.attr("class", "basic cluster composite label-container").attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("x", o).attr("y", f).attr("width", s).attr("height", l2), t.props) {
    const h = new Set(Object.keys(t.props));
    t.props.borders && (ht(a2, t.props.borders, s, l2), h.delete("borders")), h.forEach((y) => {
      D.warn(`Unknown node property ${y}`);
    });
  }
  return B(t, a2), t.intersect = function(h) {
    return C.rect(t, h);
  }, r;
}, "composite"), zr = /* @__PURE__ */ p(async (e, t) => {
  const { shapeSvg: r } = await F(e, t, "label", true);
  D.trace("Classes = ", t.class);
  const n = r.insert("rect", ":first-child"), i = 0, a2 = 0;
  if (n.attr("width", i).attr("height", a2), r.attr("class", "label edgeLabel"), t.props) {
    const s = new Set(Object.keys(t.props));
    t.props.borders && (ht(n, t.props.borders, i, a2), s.delete("borders")), s.forEach((l2) => {
      D.warn(`Unknown node property ${l2}`);
    });
  }
  return B(t, n), t.intersect = function(s) {
    return C.rect(t, s);
  }, r;
}, "labelRect");
function ht(e, t, r, n) {
  const i = [], a2 = /* @__PURE__ */ p((l2) => {
    i.push(l2, 0);
  }, "addBorder"), s = /* @__PURE__ */ p((l2) => {
    i.push(0, l2);
  }, "skipBorder");
  t.includes("t") ? (D.debug("add top border"), a2(r)) : s(r), t.includes("r") ? (D.debug("add right border"), a2(n)) : s(n), t.includes("b") ? (D.debug("add bottom border"), a2(r)) : s(r), t.includes("l") ? (D.debug("add left border"), a2(n)) : s(n), e.attr("stroke-dasharray", i.join(" "));
}
p(ht, "applyNodePropertyBorders");
var Ar = /* @__PURE__ */ p((e, t) => {
  let r;
  t.classes ? r = "node " + t.classes : r = "node default";
  const n = e.insert("g").attr("class", r).attr("id", t.domId || t.id), i = n.insert("rect", ":first-child"), a2 = n.insert("line"), s = n.insert("g").attr("class", "label"), l2 = t.labelText.flat ? t.labelText.flat() : t.labelText;
  let o = "";
  typeof l2 == "object" ? o = l2[0] : o = l2, D.info("Label text abc79", o, l2, typeof l2 == "object");
  const f = s.node().appendChild(j(o, t.labelStyle, true, true));
  let h = { width: 0, height: 0 };
  if (At$1(dt$1().flowchart.htmlLabels)) {
    const D2 = f.children[0], v = Li(f);
    h = D2.getBoundingClientRect(), v.attr("width", h.width), v.attr("height", h.height);
  }
  D.info("Text 2", l2);
  const y = l2.slice(1, l2.length);
  let b = f.getBBox();
  const m = s.node().appendChild(
    j(y.join ? y.join("<br/>") : y, t.labelStyle, true, true)
  );
  if (At$1(dt$1().flowchart.htmlLabels)) {
    const D2 = m.children[0], v = Li(m);
    h = D2.getBoundingClientRect(), v.attr("width", h.width), v.attr("height", h.height);
  }
  const E = t.padding / 2;
  return Li(m).attr(
    "transform",
    "translate( " + // (titleBox.width - bbox.width) / 2 +
    (h.width > b.width ? 0 : (b.width - h.width) / 2) + ", " + (b.height + E + 5) + ")"
  ), Li(f).attr(
    "transform",
    "translate( " + // (titleBox.width - bbox.width) / 2 +
    (h.width < b.width ? 0 : -(b.width - h.width) / 2) + ", 0)"
  ), h = s.node().getBBox(), s.attr(
    "transform",
    "translate(" + -h.width / 2 + ", " + (-h.height / 2 - E + 3) + ")"
  ), i.attr("class", "outer title-state").attr("x", -h.width / 2 - E).attr("y", -h.height / 2 - E).attr("width", h.width + t.padding).attr("height", h.height + t.padding), a2.attr("class", "divider").attr("x1", -h.width / 2 - E).attr("x2", h.width / 2 + E).attr("y1", -h.height / 2 - E + b.height + E).attr("y2", -h.height / 2 - E + b.height + E), B(t, i), t.intersect = function(D2) {
    return C.rect(t, D2);
  }, n;
}, "rectWithTitle"), Mr = /* @__PURE__ */ p(async (e, t) => {
  const { shapeSvg: r, bbox: n } = await F(
    e,
    t,
    K(t, void 0),
    true
  ), i = n.height + t.padding, a2 = n.width + i / 4 + t.padding, s = r.insert("rect", ":first-child").attr("style", t.style).attr("rx", i / 2).attr("ry", i / 2).attr("x", -a2 / 2).attr("y", -i / 2).attr("width", a2).attr("height", i);
  return B(t, s), t.intersect = function(l2) {
    return C.rect(t, l2);
  }, r;
}, "stadium"), Fr = /* @__PURE__ */ p(async (e, t) => {
  const { shapeSvg: r, bbox: n, halfPadding: i } = await F(
    e,
    t,
    K(t, void 0),
    true
  ), a2 = r.insert("circle", ":first-child");
  return a2.attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("r", n.width / 2 + i).attr("width", n.width + t.padding).attr("height", n.height + t.padding), D.info("Circle main"), B(t, a2), t.intersect = function(s) {
    return D.info("Circle intersect", t, n.width / 2 + i, s), C.circle(t, n.width / 2 + i, s);
  }, r;
}, "circle"), Wr = /* @__PURE__ */ p(async (e, t) => {
  const { shapeSvg: r, bbox: n, halfPadding: i } = await F(
    e,
    t,
    K(t, void 0),
    true
  ), a2 = 5, s = r.insert("g", ":first-child"), l2 = s.insert("circle"), o = s.insert("circle");
  return s.attr("class", t.class), l2.attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("r", n.width / 2 + i + a2).attr("width", n.width + t.padding + a2 * 2).attr("height", n.height + t.padding + a2 * 2), o.attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("r", n.width / 2 + i).attr("width", n.width + t.padding).attr("height", n.height + t.padding), D.info("DoubleCircle main"), B(t, l2), t.intersect = function(f) {
    return D.info("DoubleCircle intersect", t, n.width / 2 + i + a2, f), C.circle(t, n.width / 2 + i + a2, f);
  }, r;
}, "doublecircle"), Pr = /* @__PURE__ */ p(async (e, t) => {
  const { shapeSvg: r, bbox: n } = await F(
    e,
    t,
    K(t, void 0),
    true
  ), i = n.width + t.padding, a2 = n.height + t.padding, s = [
    { x: 0, y: 0 },
    { x: i, y: 0 },
    { x: i, y: -a2 },
    { x: 0, y: -a2 },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: i + 8, y: 0 },
    { x: i + 8, y: -a2 },
    { x: -8, y: -a2 },
    { x: -8, y: 0 }
  ], l2 = G(r, i, a2, s);
  return l2.attr("style", t.style), B(t, l2), t.intersect = function(o) {
    return C.polygon(t, s, o);
  }, r;
}, "subroutine"), Yr = /* @__PURE__ */ p((e, t) => {
  const r = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id), n = r.insert("circle", ":first-child");
  return n.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14), B(t, n), t.intersect = function(i) {
    return C.circle(t, 7, i);
  }, r;
}, "start"), Mt = /* @__PURE__ */ p((e, t, r) => {
  const n = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id);
  let i = 70, a2 = 10;
  r === "LR" && (i = 10, a2 = 70);
  const s = n.append("rect").attr("x", -1 * i / 2).attr("y", -1 * a2 / 2).attr("width", i).attr("height", a2).attr("class", "fork-join");
  return B(t, s), t.height = t.height + t.padding / 2, t.width = t.width + t.padding / 2, t.intersect = function(l2) {
    return C.rect(t, l2);
  }, n;
}, "forkJoin"), Hr = /* @__PURE__ */ p((e, t) => {
  const r = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id), n = r.insert("circle", ":first-child"), i = r.insert("circle", ":first-child");
  return i.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14), n.attr("class", "state-end").attr("r", 5).attr("width", 10).attr("height", 10), B(t, i), t.intersect = function(a2) {
    return C.circle(t, 7, a2);
  }, r;
}, "end"), Kr = /* @__PURE__ */ p((e, t) => {
  var S;
  const r = t.padding / 2, n = 4, i = 8;
  let a2;
  t.classes ? a2 = "node " + t.classes : a2 = "node default";
  const s = e.insert("g").attr("class", a2).attr("id", t.domId || t.id), l2 = s.insert("rect", ":first-child"), o = s.insert("line"), f = s.insert("line");
  let h = 0, y = n;
  const b = s.insert("g").attr("class", "label");
  let m = 0;
  const E = (S = t.classData.annotations) == null ? void 0 : S[0], D2 = t.classData.annotations[0] ? "«" + t.classData.annotations[0] + "»" : "", v = b.node().appendChild(j(D2, t.labelStyle, true, true));
  let T = v.getBBox();
  if (At$1(dt$1().flowchart.htmlLabels)) {
    const c = v.children[0], _ = Li(v);
    T = c.getBoundingClientRect(), _.attr("width", T.width), _.attr("height", T.height);
  }
  t.classData.annotations[0] && (y += T.height + n, h += T.width);
  let k = t.classData.label;
  t.classData.type !== void 0 && t.classData.type !== "" && (dt$1().flowchart.htmlLabels ? k += "&lt;" + t.classData.type + "&gt;" : k += "<" + t.classData.type + ">");
  const N = b.node().appendChild(j(k, t.labelStyle, true, true));
  Li(N).attr("class", "classTitle");
  let x = N.getBBox();
  if (At$1(dt$1().flowchart.htmlLabels)) {
    const c = N.children[0], _ = Li(N);
    x = c.getBoundingClientRect(), _.attr("width", x.width), _.attr("height", x.height);
  }
  y += x.height + n, x.width > h && (h = x.width);
  const g = [];
  t.classData.members.forEach((c) => {
    const _ = c.getDisplayDetails();
    let p2 = _.displayText;
    dt$1().flowchart.htmlLabels && (p2 = p2.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    const A = b.node().appendChild(
      j(
        p2,
        _.cssStyle ? _.cssStyle : t.labelStyle,
        true,
        true
      )
    );
    let O = A.getBBox();
    if (At$1(dt$1().flowchart.htmlLabels)) {
      const X = A.children[0], W = Li(A);
      O = X.getBoundingClientRect(), W.attr("width", O.width), W.attr("height", O.height);
    }
    O.width > h && (h = O.width), y += O.height + n, g.push(A);
  }), y += i;
  const u = [];
  if (t.classData.methods.forEach((c) => {
    const _ = c.getDisplayDetails();
    let p2 = _.displayText;
    dt$1().flowchart.htmlLabels && (p2 = p2.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    const A = b.node().appendChild(
      j(
        p2,
        _.cssStyle ? _.cssStyle : t.labelStyle,
        true,
        true
      )
    );
    let O = A.getBBox();
    if (At$1(dt$1().flowchart.htmlLabels)) {
      const X = A.children[0], W = Li(A);
      O = X.getBoundingClientRect(), W.attr("width", O.width), W.attr("height", O.height);
    }
    O.width > h && (h = O.width), y += O.height + n, u.push(A);
  }), y += i, E) {
    let c = (h - T.width) / 2;
    Li(v).attr(
      "transform",
      "translate( " + (-1 * h / 2 + c) + ", " + -1 * y / 2 + ")"
    ), m = T.height + n;
  }
  let w = (h - x.width) / 2;
  return Li(N).attr(
    "transform",
    "translate( " + (-1 * h / 2 + w) + ", " + (-1 * y / 2 + m) + ")"
  ), m += x.height + n, o.attr("class", "divider").attr("x1", -h / 2 - r).attr("x2", h / 2 + r).attr("y1", -y / 2 - r + i + m).attr("y2", -y / 2 - r + i + m), m += i, g.forEach((c) => {
    Li(c).attr(
      "transform",
      "translate( " + -h / 2 + ", " + (-1 * y / 2 + m + i / 2) + ")"
    );
    const _ = c == null ? void 0 : c.getBBox();
    m += ((_ == null ? void 0 : _.height) ?? 0) + n;
  }), m += i, f.attr("class", "divider").attr("x1", -h / 2 - r).attr("x2", h / 2 + r).attr("y1", -y / 2 - r + i + m).attr("y2", -y / 2 - r + i + m), m += i, u.forEach((c) => {
    Li(c).attr(
      "transform",
      "translate( " + -h / 2 + ", " + (-1 * y / 2 + m) + ")"
    );
    const _ = c == null ? void 0 : c.getBBox();
    m += ((_ == null ? void 0 : _.height) ?? 0) + n;
  }), l2.attr("style", t.style).attr("class", "outer title-state").attr("x", -h / 2 - r).attr("y", -(y / 2) - r).attr("width", h + t.padding).attr("height", y + t.padding), B(t, l2), t.intersect = function(c) {
    return C.rect(t, c);
  }, s;
}, "class_box"), Ft = {
  rhombus: At,
  composite: Rr,
  question: At,
  rect: Or,
  labelRect: zr,
  rectWithTitle: Ar,
  choice: vr,
  circle: Fr,
  doublecircle: Wr,
  stadium: Mr,
  hexagon: Er,
  block_arrow: _r,
  rect_left_inv_arrow: kr,
  lean_right: Dr,
  lean_left: Nr,
  trapezoid: Tr,
  inv_trapezoid: Cr,
  rect_right_inv_arrow: Br,
  cylinder: Ir,
  start: Yr,
  end: Hr,
  note: Sr,
  subroutine: Pr,
  fork: Mt,
  join: Mt,
  class_box: Kr
}, lt = {}, re = /* @__PURE__ */ p(async (e, t, r) => {
  let n, i;
  if (t.link) {
    let a2;
    dt$1().securityLevel === "sandbox" ? a2 = "_top" : t.linkTarget && (a2 = t.linkTarget || "_blank"), n = e.insert("svg:a").attr("xlink:href", t.link).attr("target", a2), i = await Ft[t.shape](n, t, r);
  } else
    i = await Ft[t.shape](e, t, r), n = i;
  return t.tooltip && i.attr("title", t.tooltip), t.class && i.attr("class", "node default " + t.class), lt[t.id] = n, t.haveCallback && lt[t.id].attr("class", lt[t.id].attr("class") + " clickable"), n;
}, "insertNode"), Xr = /* @__PURE__ */ p((e) => {
  const t = lt[e.id];
  D.trace(
    "Transforming node",
    e.diff,
    e,
    "translate(" + (e.x - e.width / 2 - 5) + ", " + e.width / 2 + ")"
  );
  const r = 8, n = e.diff || 0;
  return e.clusterNode ? t.attr(
    "transform",
    "translate(" + (e.x + n - e.width / 2) + ", " + (e.y - e.height / 2 - r) + ")"
  ) : t.attr("transform", "translate(" + e.x + ", " + e.y + ")"), n;
}, "positionNode");
function kt(e, t, r = false) {
  var b, m, E;
  const n = e;
  let i = "default";
  (((b = n == null ? void 0 : n.classes) == null ? void 0 : b.length) || 0) > 0 && (i = ((n == null ? void 0 : n.classes) ?? []).join(" ")), i = i + " flowchart-label";
  let a2 = 0, s = "", l2;
  switch (n.type) {
    case "round":
      a2 = 5, s = "rect";
      break;
    case "composite":
      a2 = 0, s = "composite", l2 = 0;
      break;
    case "square":
      s = "rect";
      break;
    case "diamond":
      s = "question";
      break;
    case "hexagon":
      s = "hexagon";
      break;
    case "block_arrow":
      s = "block_arrow";
      break;
    case "odd":
      s = "rect_left_inv_arrow";
      break;
    case "lean_right":
      s = "lean_right";
      break;
    case "lean_left":
      s = "lean_left";
      break;
    case "trapezoid":
      s = "trapezoid";
      break;
    case "inv_trapezoid":
      s = "inv_trapezoid";
      break;
    case "rect_left_inv_arrow":
      s = "rect_left_inv_arrow";
      break;
    case "circle":
      s = "circle";
      break;
    case "ellipse":
      s = "ellipse";
      break;
    case "stadium":
      s = "stadium";
      break;
    case "subroutine":
      s = "subroutine";
      break;
    case "cylinder":
      s = "cylinder";
      break;
    case "group":
      s = "rect";
      break;
    case "doublecircle":
      s = "doublecircle";
      break;
    default:
      s = "rect";
  }
  const o = yd((n == null ? void 0 : n.styles) ?? []), f = n.label, h = n.size ?? { width: 0, height: 0, x: 0, y: 0 };
  return {
    labelStyle: o.labelStyle,
    shape: s,
    labelText: f,
    rx: a2,
    ry: a2,
    class: i,
    style: o.style,
    id: n.id,
    directions: n.directions,
    width: h.width,
    height: h.height,
    x: h.x,
    y: h.y,
    positioned: r,
    intersect: void 0,
    type: n.type,
    padding: l2 ?? ((E = (m = Jt$1()) == null ? void 0 : m.block) == null ? void 0 : E.padding) ?? 0
  };
}
p(kt, "getNodeFromBlock");
async function ae(e, t, r) {
  const n = kt(t, r, false);
  if (n.type === "group")
    return;
  const i = Jt$1(), a2 = await re(e, n, { config: i }), s = a2.node().getBBox(), l2 = r.getBlock(n.id);
  l2.size = { width: s.width, height: s.height, x: 0, y: 0, node: a2 }, r.setBlock(l2), a2.remove();
}
p(ae, "calculateBlockSize");
async function se(e, t, r) {
  const n = kt(t, r, true);
  if (r.getBlock(n.id).type !== "space") {
    const a2 = Jt$1();
    await re(e, n, { config: a2 }), t.intersect = n == null ? void 0 : n.intersect, Xr(n);
  }
}
p(se, "insertBlockPositioned");
async function dt(e, t, r, n) {
  for (const i of t)
    await n(e, i, r), i.children && await dt(e, i.children, r, n);
}
p(dt, "performOperations");
async function ie(e, t, r) {
  await dt(e, t, r, ae);
}
p(ie, "calculateBlockSizes");
async function ne(e, t, r) {
  await dt(e, t, r, se);
}
p(ne, "insertBlocks");
async function le(e, t, r, n, i) {
  const a2 = new L({
    multigraph: true,
    compound: true
  });
  a2.setGraph({
    rankdir: "TB",
    nodesep: 10,
    ranksep: 10,
    marginx: 8,
    marginy: 8
  });
  for (const s of r)
    s.size && a2.setNode(s.id, {
      width: s.size.width,
      height: s.size.height,
      intersect: s.intersect
    });
  for (const s of t)
    if (s.start && s.end) {
      const l2 = n.getBlock(s.start), o = n.getBlock(s.end);
      if (l2 != null && l2.size && (o != null && o.size)) {
        const f = l2.size, h = o.size, y = [
          { x: f.x, y: f.y },
          { x: f.x + (h.x - f.x) / 2, y: f.y + (h.y - f.y) / 2 },
          { x: h.x, y: h.y }
        ];
        gr(
          e,
          { v: s.start, w: s.end, name: s.id },
          {
            ...s,
            arrowTypeEnd: s.arrowTypeEnd,
            arrowTypeStart: s.arrowTypeStart,
            points: y,
            classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"
          },
          void 0,
          "block",
          a2,
          i
        ), s.label && (await cr(e, {
          ...s,
          label: s.label,
          labelStyle: "stroke: #333; stroke-width: 1.5px;fill:none;",
          arrowTypeEnd: s.arrowTypeEnd,
          arrowTypeStart: s.arrowTypeStart,
          points: y,
          classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"
        }), or(
          { ...s, x: y[1].x, y: y[1].y },
          {
            originalPath: y
          }
        ));
      }
    }
}
p(le, "insertEdges");
var Ur = /* @__PURE__ */ p(function(e, t) {
  return t.db.getClasses();
}, "getClasses"), jr = /* @__PURE__ */ p(async function(e, t, r, n) {
  const { securityLevel: i, block: a2 } = Jt$1(), s = n.db;
  let l2;
  i === "sandbox" && (l2 = Li("#i" + t));
  const o = i === "sandbox" ? Li(l2.nodes()[0].contentDocument.body) : Li("body"), f = i === "sandbox" ? o.select(`[id="${t}"]`) : Li(`[id="${t}"]`);
  ar(f, ["point", "circle", "cross"], n.type, t);
  const y = s.getBlocks(), b = s.getBlocksFlat(), m = s.getEdges(), E = f.insert("g").attr("class", "block");
  await ie(E, y, s);
  const D$1 = Gt(s);
  if (await ne(E, y, s), await le(E, m, b, s, t), D$1) {
    const v = D$1, T = Math.max(1, Math.round(0.125 * (v.width / v.height))), k = v.height + T + 10, N = v.width + 10, { useMaxWidth: x } = a2;
    Xc(f, k, N, !!x), D.debug("Here Bounds", D$1, v), f.attr(
      "viewBox",
      `${v.x - 5} ${v.y - 5} ${v.width + 10} ${v.height + 10}`
    );
  }
}, "draw"), Vr = {
  draw: jr,
  getClasses: Ur
}, $r = {
  parser: Ee,
  db: Ke,
  renderer: Vr,
  styles: Ue
};
export {
  $r as diagram
};
