import { _ as __vitePreload } from "./main-zTjO05wq.js";
import { bg as _1, bh as an$1, aJ as nn$1, b0 as t1, aN as Jb, aw as k1, ax as pb, b5 as Wl$1, aA as mc$1, aK as $a$1, aF as or$1, az as no$1, aV as Ri$1, aW as jr$1, aL as ud$1, aT as Vb, aS as so$1 } from "./mermaid-j5R1o_wi-dCQhMK9F.js";
import { c as $, O as Ot$1, d as I, $ as $t$1, E as Et$1, V as Vn$1, e as En$1, S as St, z as zn$1, X as Xn$1, I as It$1, L as Ln$1, P as Pt$1, b as bn$1, g as yr$1, h as Ie$1, _ as _t$1, Z as Z$1, T as Tn$1, j as dt$1 } from "./_baseUniq-Bc4pAwPa-4Vti29BH.js";
import { f as fn$1, g as gn$1, m as mn$1, Y, h as hn$1, u as un$1, d as dn$1, v as vn$1, o as on$1 } from "./_basePickBy-sC4qhKfT-S0M4lzcJ.js";
import { a } from "./clone-CawhnH1Z-cPfa3Ped.js";
var au = Object.defineProperty;
var ou = (n, e, t) => e in n ? au(n, e, { enumerable: true, configurable: true, writable: true, value: t }) : n[e] = t;
var Qe = (n, e, t) => ou(n, typeof e != "symbol" ? e + "" : e, t);
var Iu = Object.prototype, Cu = Iu.hasOwnProperty, ke = _1(function(n, e) {
  if (an$1(e) || nn$1(e)) {
    t1(e, $(e), n);
    return;
  }
  for (var t in e)
    Cu.call(e, t) && Jb(n, t, e[t]);
});
function El(n, e, t) {
  var r = -1, i = n.length;
  e < 0 && (e = -e > i ? 0 : i + e), t = t > i ? i : t, t < 0 && (t += i), i = e > t ? 0 : t - e >>> 0, e >>>= 0;
  for (var s = Array(i); ++r < i; )
    s[r] = n[r + e];
  return s;
}
function Xn(n) {
  for (var e = -1, t = n == null ? 0 : n.length, r = 0, i = []; ++e < t; ) {
    var s = n[e];
    s && (i[r++] = s);
  }
  return i;
}
function $u(n, e, t, r) {
  for (var i = -1, s = n == null ? 0 : n.length; ++i < s; ) {
    var a2 = n[i];
    e(r, a2, t(a2), n);
  }
  return r;
}
function Nu(n, e, t, r) {
  return Z$1(n, function(i, s, a2) {
    e(r, i, t(i), a2);
  }), r;
}
function wu(n, e) {
  return function(t, r) {
    var i = $a$1(t) ? $u : Nu, s = e ? e() : {};
    return i(t, n, Ln$1(r), s);
  };
}
var _u = 200;
function Lu(n, e, t, r) {
  var i = -1, s = Vn$1, a2 = true, o = n.length, l = [], c = e.length;
  if (!o)
    return l;
  e.length >= _u && (s = En$1, a2 = false, e = new I(e));
  e:
    for (; ++i < o; ) {
      var u = n[i], d = u;
      if (u = u !== 0 ? u : 0, a2 && d === d) {
        for (var h = c; h--; )
          if (e[h] === d)
            continue e;
        l.push(u);
      } else
        s(e, d, r) || l.push(u);
    }
  return l;
}
var oi = k1(function(n, e) {
  return pb(n) ? Lu(n, Ot$1(e, 1, pb, true)) : [];
});
function Q(n, e, t) {
  var r = n == null ? 0 : n.length;
  return r ? (e = e === void 0 ? 1 : Y(e), El(n, e < 0 ? 0 : e, r)) : [];
}
function jn(n, e, t) {
  var r = n == null ? 0 : n.length;
  return r ? (e = e === void 0 ? 1 : Y(e), e = r - e, El(n, 0, e < 0 ? 0 : e)) : [];
}
function Ou(n, e) {
  for (var t = -1, r = n == null ? 0 : n.length; ++t < r; )
    if (!e(n[t], t, n))
      return false;
  return true;
}
function bu(n, e) {
  var t = true;
  return Z$1(n, function(r, i, s) {
    return t = !!e(r, i, s), t;
  }), t;
}
function be(n, e, t) {
  var r = $a$1(n) ? Ou : bu;
  return r(n, Ln$1(e));
}
function Pe(n) {
  return n && n.length ? n[0] : void 0;
}
function Ee(n, e) {
  return Ot$1(gn$1(n, e));
}
var Pu = Object.prototype, Mu = Pu.hasOwnProperty, Du = wu(function(n, e, t) {
  Mu.call(n, t) ? n[t].push(e) : so$1(n, t, [e]);
}), Fu = "[object String]";
function fe(n) {
  return typeof n == "string" || !$a$1(n) && Ri$1(n) && jr$1(n) == Fu;
}
var Gu = Math.max;
function ue(n, e, t, r) {
  n = nn$1(n) ? n : St(n), t = t ? Y(t) : 0;
  var i = n.length;
  return t < 0 && (t = Gu(i + t, 0)), fe(n) ? t <= i && n.indexOf(e, t) > -1 : !!i && zn$1(n, e, t) > -1;
}
function da(n, e, t) {
  var r = n == null ? 0 : n.length;
  if (!r)
    return -1;
  var i = 0;
  return zn$1(n, e, i);
}
var Uu = "[object RegExp]";
function Bu(n) {
  return Ri$1(n) && jr$1(n) == Uu;
}
var fa = Wl$1 && Wl$1.isRegExp, Ye = fa ? Vb(fa) : Bu, Vu = "Expected a function";
function Wu(n) {
  if (typeof n != "function")
    throw new TypeError(Vu);
  return function() {
    var e = arguments;
    switch (e.length) {
      case 0:
        return !n.call(this);
      case 1:
        return !n.call(this, e[0]);
      case 2:
        return !n.call(this, e[0], e[1]);
      case 3:
        return !n.call(this, e[0], e[1], e[2]);
    }
    return !n.apply(this, e);
  };
}
function Me(n, e) {
  if (n == null)
    return {};
  var t = bn$1(yr$1(n), function(r) {
    return [r];
  });
  return e = Ln$1(e), vn$1(n, t, function(r, i) {
    return e(r, i[0]);
  });
}
function li(n, e) {
  var t = $a$1(n) ? Tn$1 : dt$1;
  return t(n, Wu(Ln$1(e)));
}
function Ku(n, e) {
  var t;
  return Z$1(n, function(r, i, s) {
    return t = e(r, i, s), !t;
  }), !!t;
}
function kl(n, e, t) {
  var r = $a$1(n) ? Ie$1 : Ku;
  return r(n, Ln$1(e));
}
function bs(n) {
  return n && n.length ? Pt$1(n) : [];
}
function Hu(n, e) {
  return n && n.length ? Pt$1(n, Ln$1(e)) : [];
}
function ae(n) {
  return typeof n == "object" && n !== null && typeof n.$type == "string";
}
function Ue(n) {
  return typeof n == "object" && n !== null && typeof n.$refText == "string";
}
function ju(n) {
  return typeof n == "object" && n !== null && typeof n.name == "string" && typeof n.type == "string" && typeof n.path == "string";
}
function kr(n) {
  return typeof n == "object" && n !== null && ae(n.container) && Ue(n.reference) && typeof n.message == "string";
}
class xl {
  constructor() {
    this.subtypes = {}, this.allSubtypes = {};
  }
  isInstance(e, t) {
    return ae(e) && this.isSubtype(e.$type, t);
  }
  isSubtype(e, t) {
    if (e === t)
      return true;
    let r = this.subtypes[e];
    r || (r = this.subtypes[e] = {});
    const i = r[t];
    if (i !== void 0)
      return i;
    {
      const s = this.computeIsSubtype(e, t);
      return r[t] = s, s;
    }
  }
  getAllSubTypes(e) {
    const t = this.allSubtypes[e];
    if (t)
      return t;
    {
      const r = this.getAllTypes(), i = [];
      for (const s of r)
        this.isSubtype(s, e) && i.push(s);
      return this.allSubtypes[e] = i, i;
    }
  }
}
function zn(n) {
  return typeof n == "object" && n !== null && Array.isArray(n.content);
}
function Sl(n) {
  return typeof n == "object" && n !== null && typeof n.tokenType == "object";
}
function Il(n) {
  return zn(n) && typeof n.fullText == "string";
}
class Z {
  constructor(e, t) {
    this.startFn = e, this.nextFn = t;
  }
  iterator() {
    const e = {
      state: this.startFn(),
      next: () => this.nextFn(e.state),
      [Symbol.iterator]: () => e
    };
    return e;
  }
  [Symbol.iterator]() {
    return this.iterator();
  }
  isEmpty() {
    return !!this.iterator().next().done;
  }
  count() {
    const e = this.iterator();
    let t = 0, r = e.next();
    for (; !r.done; )
      t++, r = e.next();
    return t;
  }
  toArray() {
    const e = [], t = this.iterator();
    let r;
    do
      r = t.next(), r.value !== void 0 && e.push(r.value);
    while (!r.done);
    return e;
  }
  toSet() {
    return new Set(this);
  }
  toMap(e, t) {
    const r = this.map((i) => [
      e ? e(i) : i,
      t ? t(i) : i
    ]);
    return new Map(r);
  }
  toString() {
    return this.join();
  }
  concat(e) {
    return new Z(() => ({ first: this.startFn(), firstDone: false, iterator: e[Symbol.iterator]() }), (t) => {
      let r;
      if (!t.firstDone) {
        do
          if (r = this.nextFn(t.first), !r.done)
            return r;
        while (!r.done);
        t.firstDone = true;
      }
      do
        if (r = t.iterator.next(), !r.done)
          return r;
      while (!r.done);
      return ve;
    });
  }
  join(e = ",") {
    const t = this.iterator();
    let r = "", i, s = false;
    do
      i = t.next(), i.done || (s && (r += e), r += zu(i.value)), s = true;
    while (!i.done);
    return r;
  }
  indexOf(e, t = 0) {
    const r = this.iterator();
    let i = 0, s = r.next();
    for (; !s.done; ) {
      if (i >= t && s.value === e)
        return i;
      s = r.next(), i++;
    }
    return -1;
  }
  every(e) {
    const t = this.iterator();
    let r = t.next();
    for (; !r.done; ) {
      if (!e(r.value))
        return false;
      r = t.next();
    }
    return true;
  }
  some(e) {
    const t = this.iterator();
    let r = t.next();
    for (; !r.done; ) {
      if (e(r.value))
        return true;
      r = t.next();
    }
    return false;
  }
  forEach(e) {
    const t = this.iterator();
    let r = 0, i = t.next();
    for (; !i.done; )
      e(i.value, r), i = t.next(), r++;
  }
  map(e) {
    return new Z(this.startFn, (t) => {
      const { done: r, value: i } = this.nextFn(t);
      return r ? ve : { done: false, value: e(i) };
    });
  }
  filter(e) {
    return new Z(this.startFn, (t) => {
      let r;
      do
        if (r = this.nextFn(t), !r.done && e(r.value))
          return r;
      while (!r.done);
      return ve;
    });
  }
  nonNullable() {
    return this.filter((e) => e != null);
  }
  reduce(e, t) {
    const r = this.iterator();
    let i = t, s = r.next();
    for (; !s.done; )
      i === void 0 ? i = s.value : i = e(i, s.value), s = r.next();
    return i;
  }
  reduceRight(e, t) {
    return this.recursiveReduce(this.iterator(), e, t);
  }
  recursiveReduce(e, t, r) {
    const i = e.next();
    if (i.done)
      return r;
    const s = this.recursiveReduce(e, t, r);
    return s === void 0 ? i.value : t(s, i.value);
  }
  find(e) {
    const t = this.iterator();
    let r = t.next();
    for (; !r.done; ) {
      if (e(r.value))
        return r.value;
      r = t.next();
    }
  }
  findIndex(e) {
    const t = this.iterator();
    let r = 0, i = t.next();
    for (; !i.done; ) {
      if (e(i.value))
        return r;
      i = t.next(), r++;
    }
    return -1;
  }
  includes(e) {
    const t = this.iterator();
    let r = t.next();
    for (; !r.done; ) {
      if (r.value === e)
        return true;
      r = t.next();
    }
    return false;
  }
  flatMap(e) {
    return new Z(() => ({ this: this.startFn() }), (t) => {
      do {
        if (t.iterator) {
          const s = t.iterator.next();
          if (s.done)
            t.iterator = void 0;
          else
            return s;
        }
        const { done: r, value: i } = this.nextFn(t.this);
        if (!r) {
          const s = e(i);
          if (Fr(s))
            t.iterator = s[Symbol.iterator]();
          else
            return { done: false, value: s };
        }
      } while (t.iterator);
      return ve;
    });
  }
  flat(e) {
    if (e === void 0 && (e = 1), e <= 0)
      return this;
    const t = e > 1 ? this.flat(e - 1) : this;
    return new Z(() => ({ this: t.startFn() }), (r) => {
      do {
        if (r.iterator) {
          const a2 = r.iterator.next();
          if (a2.done)
            r.iterator = void 0;
          else
            return a2;
        }
        const { done: i, value: s } = t.nextFn(r.this);
        if (!i)
          if (Fr(s))
            r.iterator = s[Symbol.iterator]();
          else
            return { done: false, value: s };
      } while (r.iterator);
      return ve;
    });
  }
  head() {
    const t = this.iterator().next();
    if (!t.done)
      return t.value;
  }
  tail(e = 1) {
    return new Z(() => {
      const t = this.startFn();
      for (let r = 0; r < e; r++)
        if (this.nextFn(t).done)
          return t;
      return t;
    }, this.nextFn);
  }
  limit(e) {
    return new Z(() => ({ size: 0, state: this.startFn() }), (t) => (t.size++, t.size > e ? ve : this.nextFn(t.state)));
  }
  distinct(e) {
    return new Z(() => ({ set: /* @__PURE__ */ new Set(), internalState: this.startFn() }), (t) => {
      let r;
      do
        if (r = this.nextFn(t.internalState), !r.done) {
          const i = e ? e(r.value) : r.value;
          if (!t.set.has(i))
            return t.set.add(i), r;
        }
      while (!r.done);
      return ve;
    });
  }
  exclude(e, t) {
    const r = /* @__PURE__ */ new Set();
    for (const i of e) {
      const s = t ? t(i) : i;
      r.add(s);
    }
    return this.filter((i) => {
      const s = t ? t(i) : i;
      return !r.has(s);
    });
  }
}
function zu(n) {
  return typeof n == "string" ? n : typeof n > "u" ? "undefined" : typeof n.toString == "function" ? n.toString() : Object.prototype.toString.call(n);
}
function Fr(n) {
  return !!n && typeof n[Symbol.iterator] == "function";
}
const qu = new Z(() => {
}, () => ve), ve = Object.freeze({ done: true, value: void 0 });
function ee(...n) {
  if (n.length === 1) {
    const e = n[0];
    if (e instanceof Z)
      return e;
    if (Fr(e))
      return new Z(() => e[Symbol.iterator](), (t) => t.next());
    if (typeof e.length == "number")
      return new Z(() => ({ index: 0 }), (t) => t.index < e.length ? { done: false, value: e[t.index++] } : ve);
  }
  return n.length > 1 ? new Z(() => ({ collIndex: 0, arrIndex: 0 }), (e) => {
    do {
      if (e.iterator) {
        const t = e.iterator.next();
        if (!t.done)
          return t;
        e.iterator = void 0;
      }
      if (e.array) {
        if (e.arrIndex < e.array.length)
          return { done: false, value: e.array[e.arrIndex++] };
        e.array = void 0, e.arrIndex = 0;
      }
      if (e.collIndex < n.length) {
        const t = n[e.collIndex++];
        Fr(t) ? e.iterator = t[Symbol.iterator]() : t && typeof t.length == "number" && (e.array = t);
      }
    } while (e.iterator || e.array || e.collIndex < n.length);
    return ve;
  }) : qu;
}
class Ps extends Z {
  constructor(e, t, r) {
    super(() => ({
      iterators: r != null && r.includeRoot ? [[e][Symbol.iterator]()] : [t(e)[Symbol.iterator]()],
      pruned: false
    }), (i) => {
      for (i.pruned && (i.iterators.pop(), i.pruned = false); i.iterators.length > 0; ) {
        const a2 = i.iterators[i.iterators.length - 1].next();
        if (a2.done)
          i.iterators.pop();
        else
          return i.iterators.push(t(a2.value)[Symbol.iterator]()), a2;
      }
      return ve;
    });
  }
  iterator() {
    const e = {
      state: this.startFn(),
      next: () => this.nextFn(e.state),
      prune: () => {
        e.state.pruned = true;
      },
      [Symbol.iterator]: () => e
    };
    return e;
  }
}
var Yi;
(function(n) {
  function e(s) {
    return s.reduce((a2, o) => a2 + o, 0);
  }
  n.sum = e;
  function t(s) {
    return s.reduce((a2, o) => a2 * o, 0);
  }
  n.product = t;
  function r(s) {
    return s.reduce((a2, o) => Math.min(a2, o));
  }
  n.min = r;
  function i(s) {
    return s.reduce((a2, o) => Math.max(a2, o));
  }
  n.max = i;
})(Yi || (Yi = {}));
function Xi(n) {
  return new Ps(n, (e) => zn(e) ? e.content : [], { includeRoot: true });
}
function Yu(n, e) {
  for (; n.container; )
    if (n = n.container, n === e)
      return true;
  return false;
}
function Ji(n) {
  return {
    start: {
      character: n.startColumn - 1,
      line: n.startLine - 1
    },
    end: {
      character: n.endColumn,
      // endColumn uses the correct index
      line: n.endLine - 1
    }
  };
}
function Gr(n) {
  if (!n)
    return;
  const { offset: e, end: t, range: r } = n;
  return {
    range: r,
    offset: e,
    end: t,
    length: t - e
  };
}
var He;
(function(n) {
  n[n.Before = 0] = "Before", n[n.After = 1] = "After", n[n.OverlapFront = 2] = "OverlapFront", n[n.OverlapBack = 3] = "OverlapBack", n[n.Inside = 4] = "Inside", n[n.Outside = 5] = "Outside";
})(He || (He = {}));
function Xu(n, e) {
  if (n.end.line < e.start.line || n.end.line === e.start.line && n.end.character <= e.start.character)
    return He.Before;
  if (n.start.line > e.end.line || n.start.line === e.end.line && n.start.character >= e.end.character)
    return He.After;
  const t = n.start.line > e.start.line || n.start.line === e.start.line && n.start.character >= e.start.character, r = n.end.line < e.end.line || n.end.line === e.end.line && n.end.character <= e.end.character;
  return t && r ? He.Inside : t ? He.OverlapBack : r ? He.OverlapFront : He.Outside;
}
function Ju(n, e) {
  return Xu(n, e) > He.After;
}
const Qu = /^[\w\p{L}]$/u;
function Zu(n, e) {
  if (n) {
    const t = ed(n, true);
    if (t && ha(t, e))
      return t;
    if (Il(n)) {
      const r = n.content.findIndex((i) => !i.hidden);
      for (let i = r - 1; i >= 0; i--) {
        const s = n.content[i];
        if (ha(s, e))
          return s;
      }
    }
  }
}
function ha(n, e) {
  return Sl(n) && e.includes(n.tokenType.name);
}
function ed(n, e = true) {
  for (; n.container; ) {
    const t = n.container;
    let r = t.content.indexOf(n);
    for (; r > 0; ) {
      r--;
      const i = t.content[r];
      if (e || !i.hidden)
        return i;
    }
    n = t;
  }
}
class Cl extends Error {
  constructor(e, t) {
    super(e ? `${t} at ${e.range.start.line}:${e.range.start.character}` : t);
  }
}
function Jn(n) {
  throw new Error("Error! The input value was not handled.");
}
const ir = "AbstractRule", sr = "AbstractType", ki = "Condition", pa = "TypeDefinition", xi = "ValueLiteral", cn = "AbstractElement";
function td(n) {
  return M.isInstance(n, cn);
}
const ar = "ArrayLiteral", or = "ArrayType", un = "BooleanLiteral";
function nd(n) {
  return M.isInstance(n, un);
}
const dn = "Conjunction";
function rd(n) {
  return M.isInstance(n, dn);
}
const fn = "Disjunction";
function id(n) {
  return M.isInstance(n, fn);
}
const lr = "Grammar", Si = "GrammarImport", hn = "InferredType";
function $l(n) {
  return M.isInstance(n, hn);
}
const pn = "Interface";
function Nl(n) {
  return M.isInstance(n, pn);
}
const Ii = "NamedArgument", mn = "Negation";
function sd(n) {
  return M.isInstance(n, mn);
}
const cr = "NumberLiteral", ur = "Parameter", gn = "ParameterReference";
function ad(n) {
  return M.isInstance(n, gn);
}
const yn = "ParserRule";
function we(n) {
  return M.isInstance(n, yn);
}
const dr = "ReferenceType", xr = "ReturnType";
function od(n) {
  return M.isInstance(n, xr);
}
const Tn = "SimpleType";
function ld(n) {
  return M.isInstance(n, Tn);
}
const fr = "StringLiteral", Ct = "TerminalRule";
function Rt(n) {
  return M.isInstance(n, Ct);
}
const Rn = "Type";
function wl(n) {
  return M.isInstance(n, Rn);
}
const Ci = "TypeAttribute", hr = "UnionType", vn = "Action";
function ci(n) {
  return M.isInstance(n, vn);
}
const An = "Alternatives";
function _l(n) {
  return M.isInstance(n, An);
}
const En = "Assignment";
function ft(n) {
  return M.isInstance(n, En);
}
const kn = "CharacterRange";
function cd(n) {
  return M.isInstance(n, kn);
}
const xn = "CrossReference";
function Ms(n) {
  return M.isInstance(n, xn);
}
const Sn = "EndOfFile";
function ud(n) {
  return M.isInstance(n, Sn);
}
const In = "Group";
function Ds(n) {
  return M.isInstance(n, In);
}
const Cn = "Keyword";
function ht(n) {
  return M.isInstance(n, Cn);
}
const $n = "NegatedToken";
function dd(n) {
  return M.isInstance(n, $n);
}
const Nn = "RegexToken";
function fd(n) {
  return M.isInstance(n, Nn);
}
const wn = "RuleCall";
function pt(n) {
  return M.isInstance(n, wn);
}
const _n = "TerminalAlternatives";
function hd(n) {
  return M.isInstance(n, _n);
}
const Ln = "TerminalGroup";
function pd(n) {
  return M.isInstance(n, Ln);
}
const On = "TerminalRuleCall";
function md(n) {
  return M.isInstance(n, On);
}
const bn = "UnorderedGroup";
function Ll(n) {
  return M.isInstance(n, bn);
}
const Pn = "UntilToken";
function gd(n) {
  return M.isInstance(n, Pn);
}
const Mn = "Wildcard";
function yd(n) {
  return M.isInstance(n, Mn);
}
class Ol extends xl {
  getAllTypes() {
    return [cn, ir, sr, vn, An, ar, or, En, un, kn, ki, dn, xn, fn, Sn, lr, Si, In, hn, pn, Cn, Ii, $n, mn, cr, ur, gn, yn, dr, Nn, xr, wn, Tn, fr, _n, Ln, Ct, On, Rn, Ci, pa, hr, bn, Pn, xi, Mn];
  }
  computeIsSubtype(e, t) {
    switch (e) {
      case vn:
      case An:
      case En:
      case kn:
      case xn:
      case Sn:
      case In:
      case Cn:
      case $n:
      case Nn:
      case wn:
      case _n:
      case Ln:
      case On:
      case bn:
      case Pn:
      case Mn:
        return this.isSubtype(cn, t);
      case ar:
      case cr:
      case fr:
        return this.isSubtype(xi, t);
      case or:
      case dr:
      case Tn:
      case hr:
        return this.isSubtype(pa, t);
      case un:
        return this.isSubtype(ki, t) || this.isSubtype(xi, t);
      case dn:
      case fn:
      case mn:
      case gn:
        return this.isSubtype(ki, t);
      case hn:
      case pn:
      case Rn:
        return this.isSubtype(sr, t);
      case yn:
        return this.isSubtype(ir, t) || this.isSubtype(sr, t);
      case Ct:
        return this.isSubtype(ir, t);
      default:
        return false;
    }
  }
  getReferenceType(e) {
    const t = `${e.container.$type}:${e.property}`;
    switch (t) {
      case "Action:type":
      case "CrossReference:type":
      case "Interface:superTypes":
      case "ParserRule:returnType":
      case "SimpleType:typeRef":
        return sr;
      case "Grammar:hiddenTokens":
      case "ParserRule:hiddenTokens":
      case "RuleCall:rule":
        return ir;
      case "Grammar:usedGrammars":
        return lr;
      case "NamedArgument:parameter":
      case "ParameterReference:parameter":
        return ur;
      case "TerminalRuleCall:rule":
        return Ct;
      default:
        throw new Error(`${t} is not a valid reference id.`);
    }
  }
  getTypeMetaData(e) {
    switch (e) {
      case cn:
        return {
          name: cn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      case ar:
        return {
          name: ar,
          properties: [
            { name: "elements", defaultValue: [] }
          ]
        };
      case or:
        return {
          name: or,
          properties: [
            { name: "elementType" }
          ]
        };
      case un:
        return {
          name: un,
          properties: [
            { name: "true", defaultValue: false }
          ]
        };
      case dn:
        return {
          name: dn,
          properties: [
            { name: "left" },
            { name: "right" }
          ]
        };
      case fn:
        return {
          name: fn,
          properties: [
            { name: "left" },
            { name: "right" }
          ]
        };
      case lr:
        return {
          name: lr,
          properties: [
            { name: "definesHiddenTokens", defaultValue: false },
            { name: "hiddenTokens", defaultValue: [] },
            { name: "imports", defaultValue: [] },
            { name: "interfaces", defaultValue: [] },
            { name: "isDeclared", defaultValue: false },
            { name: "name" },
            { name: "rules", defaultValue: [] },
            { name: "types", defaultValue: [] },
            { name: "usedGrammars", defaultValue: [] }
          ]
        };
      case Si:
        return {
          name: Si,
          properties: [
            { name: "path" }
          ]
        };
      case hn:
        return {
          name: hn,
          properties: [
            { name: "name" }
          ]
        };
      case pn:
        return {
          name: pn,
          properties: [
            { name: "attributes", defaultValue: [] },
            { name: "name" },
            { name: "superTypes", defaultValue: [] }
          ]
        };
      case Ii:
        return {
          name: Ii,
          properties: [
            { name: "calledByName", defaultValue: false },
            { name: "parameter" },
            { name: "value" }
          ]
        };
      case mn:
        return {
          name: mn,
          properties: [
            { name: "value" }
          ]
        };
      case cr:
        return {
          name: cr,
          properties: [
            { name: "value" }
          ]
        };
      case ur:
        return {
          name: ur,
          properties: [
            { name: "name" }
          ]
        };
      case gn:
        return {
          name: gn,
          properties: [
            { name: "parameter" }
          ]
        };
      case yn:
        return {
          name: yn,
          properties: [
            { name: "dataType" },
            { name: "definesHiddenTokens", defaultValue: false },
            { name: "definition" },
            { name: "entry", defaultValue: false },
            { name: "fragment", defaultValue: false },
            { name: "hiddenTokens", defaultValue: [] },
            { name: "inferredType" },
            { name: "name" },
            { name: "parameters", defaultValue: [] },
            { name: "returnType" },
            { name: "wildcard", defaultValue: false }
          ]
        };
      case dr:
        return {
          name: dr,
          properties: [
            { name: "referenceType" }
          ]
        };
      case xr:
        return {
          name: xr,
          properties: [
            { name: "name" }
          ]
        };
      case Tn:
        return {
          name: Tn,
          properties: [
            { name: "primitiveType" },
            { name: "stringType" },
            { name: "typeRef" }
          ]
        };
      case fr:
        return {
          name: fr,
          properties: [
            { name: "value" }
          ]
        };
      case Ct:
        return {
          name: Ct,
          properties: [
            { name: "definition" },
            { name: "fragment", defaultValue: false },
            { name: "hidden", defaultValue: false },
            { name: "name" },
            { name: "type" }
          ]
        };
      case Rn:
        return {
          name: Rn,
          properties: [
            { name: "name" },
            { name: "type" }
          ]
        };
      case Ci:
        return {
          name: Ci,
          properties: [
            { name: "defaultValue" },
            { name: "isOptional", defaultValue: false },
            { name: "name" },
            { name: "type" }
          ]
        };
      case hr:
        return {
          name: hr,
          properties: [
            { name: "types", defaultValue: [] }
          ]
        };
      case vn:
        return {
          name: vn,
          properties: [
            { name: "cardinality" },
            { name: "feature" },
            { name: "inferredType" },
            { name: "lookahead" },
            { name: "operator" },
            { name: "type" }
          ]
        };
      case An:
        return {
          name: An,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case En:
        return {
          name: En,
          properties: [
            { name: "cardinality" },
            { name: "feature" },
            { name: "lookahead" },
            { name: "operator" },
            { name: "terminal" }
          ]
        };
      case kn:
        return {
          name: kn,
          properties: [
            { name: "cardinality" },
            { name: "left" },
            { name: "lookahead" },
            { name: "right" }
          ]
        };
      case xn:
        return {
          name: xn,
          properties: [
            { name: "cardinality" },
            { name: "deprecatedSyntax", defaultValue: false },
            { name: "lookahead" },
            { name: "terminal" },
            { name: "type" }
          ]
        };
      case Sn:
        return {
          name: Sn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      case In:
        return {
          name: In,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "guardCondition" },
            { name: "lookahead" }
          ]
        };
      case Cn:
        return {
          name: Cn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "value" }
          ]
        };
      case $n:
        return {
          name: $n,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "terminal" }
          ]
        };
      case Nn:
        return {
          name: Nn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "regex" }
          ]
        };
      case wn:
        return {
          name: wn,
          properties: [
            { name: "arguments", defaultValue: [] },
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "rule" }
          ]
        };
      case _n:
        return {
          name: _n,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case Ln:
        return {
          name: Ln,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case On:
        return {
          name: On,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "rule" }
          ]
        };
      case bn:
        return {
          name: bn,
          properties: [
            { name: "cardinality" },
            { name: "elements", defaultValue: [] },
            { name: "lookahead" }
          ]
        };
      case Pn:
        return {
          name: Pn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" },
            { name: "terminal" }
          ]
        };
      case Mn:
        return {
          name: Mn,
          properties: [
            { name: "cardinality" },
            { name: "lookahead" }
          ]
        };
      default:
        return {
          name: e,
          properties: []
        };
    }
  }
}
const M = new Ol();
function Td(n) {
  for (const [e, t] of Object.entries(n))
    e.startsWith("$") || (Array.isArray(t) ? t.forEach((r, i) => {
      ae(r) && (r.$container = n, r.$containerProperty = e, r.$containerIndex = i);
    }) : ae(t) && (t.$container = n, t.$containerProperty = e));
}
function ui(n, e) {
  let t = n;
  for (; t; ) {
    if (e(t))
      return t;
    t = t.$container;
  }
}
function et(n) {
  const t = Qi(n).$document;
  if (!t)
    throw new Error("AST node has no document.");
  return t;
}
function Qi(n) {
  for (; n.$container; )
    n = n.$container;
  return n;
}
function Fs(n, e) {
  if (!n)
    throw new Error("Node must be an AstNode.");
  const t = e == null ? void 0 : e.range;
  return new Z(() => ({
    keys: Object.keys(n),
    keyIndex: 0,
    arrayIndex: 0
  }), (r) => {
    for (; r.keyIndex < r.keys.length; ) {
      const i = r.keys[r.keyIndex];
      if (!i.startsWith("$")) {
        const s = n[i];
        if (ae(s)) {
          if (r.keyIndex++, ma(s, t))
            return { done: false, value: s };
        } else if (Array.isArray(s)) {
          for (; r.arrayIndex < s.length; ) {
            const a2 = r.arrayIndex++, o = s[a2];
            if (ae(o) && ma(o, t))
              return { done: false, value: o };
          }
          r.arrayIndex = 0;
        }
      }
      r.keyIndex++;
    }
    return ve;
  });
}
function Qn(n, e) {
  if (!n)
    throw new Error("Root node must be an AstNode.");
  return new Ps(n, (t) => Fs(t, e));
}
function Nt(n, e) {
  if (!n)
    throw new Error("Root node must be an AstNode.");
  return new Ps(n, (t) => Fs(t, e), { includeRoot: true });
}
function ma(n, e) {
  var t;
  if (!e)
    return true;
  const r = (t = n.$cstNode) === null || t === void 0 ? void 0 : t.range;
  return r ? Ju(r, e) : false;
}
function bl(n) {
  return new Z(() => ({
    keys: Object.keys(n),
    keyIndex: 0,
    arrayIndex: 0
  }), (e) => {
    for (; e.keyIndex < e.keys.length; ) {
      const t = e.keys[e.keyIndex];
      if (!t.startsWith("$")) {
        const r = n[t];
        if (Ue(r))
          return e.keyIndex++, { done: false, value: { reference: r, container: n, property: t } };
        if (Array.isArray(r)) {
          for (; e.arrayIndex < r.length; ) {
            const i = e.arrayIndex++, s = r[i];
            if (Ue(s))
              return { done: false, value: { reference: s, container: n, property: t, index: i } };
          }
          e.arrayIndex = 0;
        }
      }
      e.keyIndex++;
    }
    return ve;
  });
}
function Rd(n, e) {
  const t = n.getTypeMetaData(e.$type), r = e;
  for (const i of t.properties)
    i.defaultValue !== void 0 && r[i.name] === void 0 && (r[i.name] = Pl(i.defaultValue));
}
function Pl(n) {
  return Array.isArray(n) ? [...n.map(Pl)] : n;
}
function w(n) {
  return n.charCodeAt(0);
}
function $i(n, e) {
  Array.isArray(n) ? n.forEach(function(t) {
    e.push(t);
  }) : e.push(n);
}
function an(n, e) {
  if (n[e] === true)
    throw "duplicate flag " + e;
  n[e], n[e] = true;
}
function It(n) {
  if (n === void 0)
    throw Error("Internal Error - Should never get here!");
  return true;
}
function vd() {
  throw Error("Internal Error - Should never get here!");
}
function ga(n) {
  return n.type === "Character";
}
const Ur = [];
for (let n = w("0"); n <= w("9"); n++)
  Ur.push(n);
const Br = [w("_")].concat(Ur);
for (let n = w("a"); n <= w("z"); n++)
  Br.push(n);
for (let n = w("A"); n <= w("Z"); n++)
  Br.push(n);
const ya = [
  w(" "),
  w("\f"),
  w(`
`),
  w("\r"),
  w("	"),
  w("\v"),
  w("	"),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w(" "),
  w("\u2028"),
  w("\u2029"),
  w(" "),
  w(" "),
  w("　"),
  w("\uFEFF")
], Ad = /[0-9a-fA-F]/, pr = /[0-9]/, Ed = /[1-9]/;
class Ml {
  constructor() {
    this.idx = 0, this.input = "", this.groupIdx = 0;
  }
  saveState() {
    return {
      idx: this.idx,
      input: this.input,
      groupIdx: this.groupIdx
    };
  }
  restoreState(e) {
    this.idx = e.idx, this.input = e.input, this.groupIdx = e.groupIdx;
  }
  pattern(e) {
    this.idx = 0, this.input = e, this.groupIdx = 0, this.consumeChar("/");
    const t = this.disjunction();
    this.consumeChar("/");
    const r = {
      type: "Flags",
      loc: { begin: this.idx, end: e.length },
      global: false,
      ignoreCase: false,
      multiLine: false,
      unicode: false,
      sticky: false
    };
    for (; this.isRegExpFlag(); )
      switch (this.popChar()) {
        case "g":
          an(r, "global");
          break;
        case "i":
          an(r, "ignoreCase");
          break;
        case "m":
          an(r, "multiLine");
          break;
        case "u":
          an(r, "unicode");
          break;
        case "y":
          an(r, "sticky");
          break;
      }
    if (this.idx !== this.input.length)
      throw Error("Redundant input: " + this.input.substring(this.idx));
    return {
      type: "Pattern",
      flags: r,
      value: t,
      loc: this.loc(0)
    };
  }
  disjunction() {
    const e = [], t = this.idx;
    for (e.push(this.alternative()); this.peekChar() === "|"; )
      this.consumeChar("|"), e.push(this.alternative());
    return { type: "Disjunction", value: e, loc: this.loc(t) };
  }
  alternative() {
    const e = [], t = this.idx;
    for (; this.isTerm(); )
      e.push(this.term());
    return { type: "Alternative", value: e, loc: this.loc(t) };
  }
  term() {
    return this.isAssertion() ? this.assertion() : this.atom();
  }
  assertion() {
    const e = this.idx;
    switch (this.popChar()) {
      case "^":
        return {
          type: "StartAnchor",
          loc: this.loc(e)
        };
      case "$":
        return { type: "EndAnchor", loc: this.loc(e) };
      case "\\":
        switch (this.popChar()) {
          case "b":
            return {
              type: "WordBoundary",
              loc: this.loc(e)
            };
          case "B":
            return {
              type: "NonWordBoundary",
              loc: this.loc(e)
            };
        }
        throw Error("Invalid Assertion Escape");
      case "(":
        this.consumeChar("?");
        let t;
        switch (this.popChar()) {
          case "=":
            t = "Lookahead";
            break;
          case "!":
            t = "NegativeLookahead";
            break;
        }
        It(t);
        const r = this.disjunction();
        return this.consumeChar(")"), {
          type: t,
          value: r,
          loc: this.loc(e)
        };
    }
    return vd();
  }
  quantifier(e = false) {
    let t;
    const r = this.idx;
    switch (this.popChar()) {
      case "*":
        t = {
          atLeast: 0,
          atMost: 1 / 0
        };
        break;
      case "+":
        t = {
          atLeast: 1,
          atMost: 1 / 0
        };
        break;
      case "?":
        t = {
          atLeast: 0,
          atMost: 1
        };
        break;
      case "{":
        const i = this.integerIncludingZero();
        switch (this.popChar()) {
          case "}":
            t = {
              atLeast: i,
              atMost: i
            };
            break;
          case ",":
            let s;
            this.isDigit() ? (s = this.integerIncludingZero(), t = {
              atLeast: i,
              atMost: s
            }) : t = {
              atLeast: i,
              atMost: 1 / 0
            }, this.consumeChar("}");
            break;
        }
        if (e === true && t === void 0)
          return;
        It(t);
        break;
    }
    if (!(e === true && t === void 0) && It(t))
      return this.peekChar(0) === "?" ? (this.consumeChar("?"), t.greedy = false) : t.greedy = true, t.type = "Quantifier", t.loc = this.loc(r), t;
  }
  atom() {
    let e;
    const t = this.idx;
    switch (this.peekChar()) {
      case ".":
        e = this.dotAll();
        break;
      case "\\":
        e = this.atomEscape();
        break;
      case "[":
        e = this.characterClass();
        break;
      case "(":
        e = this.group();
        break;
    }
    if (e === void 0 && this.isPatternCharacter() && (e = this.patternCharacter()), It(e))
      return e.loc = this.loc(t), this.isQuantifier() && (e.quantifier = this.quantifier()), e;
  }
  dotAll() {
    return this.consumeChar("."), {
      type: "Set",
      complement: true,
      value: [w(`
`), w("\r"), w("\u2028"), w("\u2029")]
    };
  }
  atomEscape() {
    switch (this.consumeChar("\\"), this.peekChar()) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        return this.decimalEscapeAtom();
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  decimalEscapeAtom() {
    return { type: "GroupBackReference", value: this.positiveInteger() };
  }
  characterClassEscape() {
    let e, t = false;
    switch (this.popChar()) {
      case "d":
        e = Ur;
        break;
      case "D":
        e = Ur, t = true;
        break;
      case "s":
        e = ya;
        break;
      case "S":
        e = ya, t = true;
        break;
      case "w":
        e = Br;
        break;
      case "W":
        e = Br, t = true;
        break;
    }
    if (It(e))
      return { type: "Set", value: e, complement: t };
  }
  controlEscapeAtom() {
    let e;
    switch (this.popChar()) {
      case "f":
        e = w("\f");
        break;
      case "n":
        e = w(`
`);
        break;
      case "r":
        e = w("\r");
        break;
      case "t":
        e = w("	");
        break;
      case "v":
        e = w("\v");
        break;
    }
    if (It(e))
      return { type: "Character", value: e };
  }
  controlLetterEscapeAtom() {
    this.consumeChar("c");
    const e = this.popChar();
    if (/[a-zA-Z]/.test(e) === false)
      throw Error("Invalid ");
    return { type: "Character", value: e.toUpperCase().charCodeAt(0) - 64 };
  }
  nulCharacterAtom() {
    return this.consumeChar("0"), { type: "Character", value: w("\0") };
  }
  hexEscapeSequenceAtom() {
    return this.consumeChar("x"), this.parseHexDigits(2);
  }
  regExpUnicodeEscapeSequenceAtom() {
    return this.consumeChar("u"), this.parseHexDigits(4);
  }
  identityEscapeAtom() {
    const e = this.popChar();
    return { type: "Character", value: w(e) };
  }
  classPatternCharacterAtom() {
    switch (this.peekChar()) {
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
      case "\\":
      case "]":
        throw Error("TBD");
      default:
        const e = this.popChar();
        return { type: "Character", value: w(e) };
    }
  }
  characterClass() {
    const e = [];
    let t = false;
    for (this.consumeChar("["), this.peekChar(0) === "^" && (this.consumeChar("^"), t = true); this.isClassAtom(); ) {
      const r = this.classAtom();
      if (r.type, ga(r) && this.isRangeDash()) {
        this.consumeChar("-");
        const i = this.classAtom();
        if (i.type, ga(i)) {
          if (i.value < r.value)
            throw Error("Range out of order in character class");
          e.push({ from: r.value, to: i.value });
        } else
          $i(r.value, e), e.push(w("-")), $i(i.value, e);
      } else
        $i(r.value, e);
    }
    return this.consumeChar("]"), { type: "Set", complement: t, value: e };
  }
  classAtom() {
    switch (this.peekChar()) {
      case "]":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        throw Error("TBD");
      case "\\":
        return this.classEscape();
      default:
        return this.classPatternCharacterAtom();
    }
  }
  classEscape() {
    switch (this.consumeChar("\\"), this.peekChar()) {
      case "b":
        return this.consumeChar("b"), { type: "Character", value: w("\b") };
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  group() {
    let e = true;
    switch (this.consumeChar("("), this.peekChar(0)) {
      case "?":
        this.consumeChar("?"), this.consumeChar(":"), e = false;
        break;
      default:
        this.groupIdx++;
        break;
    }
    const t = this.disjunction();
    this.consumeChar(")");
    const r = {
      type: "Group",
      capturing: e,
      value: t
    };
    return e && (r.idx = this.groupIdx), r;
  }
  positiveInteger() {
    let e = this.popChar();
    if (Ed.test(e) === false)
      throw Error("Expecting a positive integer");
    for (; pr.test(this.peekChar(0)); )
      e += this.popChar();
    return parseInt(e, 10);
  }
  integerIncludingZero() {
    let e = this.popChar();
    if (pr.test(e) === false)
      throw Error("Expecting an integer");
    for (; pr.test(this.peekChar(0)); )
      e += this.popChar();
    return parseInt(e, 10);
  }
  patternCharacter() {
    const e = this.popChar();
    switch (e) {
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
      case "^":
      case "$":
      case "\\":
      case ".":
      case "*":
      case "+":
      case "?":
      case "(":
      case ")":
      case "[":
      case "|":
        throw Error("TBD");
      default:
        return { type: "Character", value: w(e) };
    }
  }
  isRegExpFlag() {
    switch (this.peekChar(0)) {
      case "g":
      case "i":
      case "m":
      case "u":
      case "y":
        return true;
      default:
        return false;
    }
  }
  isRangeDash() {
    return this.peekChar() === "-" && this.isClassAtom(1);
  }
  isDigit() {
    return pr.test(this.peekChar(0));
  }
  isClassAtom(e = 0) {
    switch (this.peekChar(e)) {
      case "]":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        return false;
      default:
        return true;
    }
  }
  isTerm() {
    return this.isAtom() || this.isAssertion();
  }
  isAtom() {
    if (this.isPatternCharacter())
      return true;
    switch (this.peekChar(0)) {
      case ".":
      case "\\":
      case "[":
      case "(":
        return true;
      default:
        return false;
    }
  }
  isAssertion() {
    switch (this.peekChar(0)) {
      case "^":
      case "$":
        return true;
      case "\\":
        switch (this.peekChar(1)) {
          case "b":
          case "B":
            return true;
          default:
            return false;
        }
      case "(":
        return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!");
      default:
        return false;
    }
  }
  isQuantifier() {
    const e = this.saveState();
    try {
      return this.quantifier(true) !== void 0;
    } catch {
      return false;
    } finally {
      this.restoreState(e);
    }
  }
  isPatternCharacter() {
    switch (this.peekChar()) {
      case "^":
      case "$":
      case "\\":
      case ".":
      case "*":
      case "+":
      case "?":
      case "(":
      case ")":
      case "[":
      case "|":
      case "/":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        return false;
      default:
        return true;
    }
  }
  parseHexDigits(e) {
    let t = "";
    for (let i = 0; i < e; i++) {
      const s = this.popChar();
      if (Ad.test(s) === false)
        throw Error("Expecting a HexDecimal digits");
      t += s;
    }
    return { type: "Character", value: parseInt(t, 16) };
  }
  peekChar(e = 0) {
    return this.input[this.idx + e];
  }
  popChar() {
    const e = this.peekChar(0);
    return this.consumeChar(void 0), e;
  }
  consumeChar(e) {
    if (e !== void 0 && this.input[this.idx] !== e)
      throw Error("Expected: '" + e + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
    if (this.idx >= this.input.length)
      throw Error("Unexpected end of input");
    this.idx++;
  }
  loc(e) {
    return { begin: e, end: this.idx };
  }
}
class di {
  visitChildren(e) {
    for (const t in e) {
      const r = e[t];
      e.hasOwnProperty(t) && (r.type !== void 0 ? this.visit(r) : Array.isArray(r) && r.forEach((i) => {
        this.visit(i);
      }, this));
    }
  }
  visit(e) {
    switch (e.type) {
      case "Pattern":
        this.visitPattern(e);
        break;
      case "Flags":
        this.visitFlags(e);
        break;
      case "Disjunction":
        this.visitDisjunction(e);
        break;
      case "Alternative":
        this.visitAlternative(e);
        break;
      case "StartAnchor":
        this.visitStartAnchor(e);
        break;
      case "EndAnchor":
        this.visitEndAnchor(e);
        break;
      case "WordBoundary":
        this.visitWordBoundary(e);
        break;
      case "NonWordBoundary":
        this.visitNonWordBoundary(e);
        break;
      case "Lookahead":
        this.visitLookahead(e);
        break;
      case "NegativeLookahead":
        this.visitNegativeLookahead(e);
        break;
      case "Character":
        this.visitCharacter(e);
        break;
      case "Set":
        this.visitSet(e);
        break;
      case "Group":
        this.visitGroup(e);
        break;
      case "GroupBackReference":
        this.visitGroupBackReference(e);
        break;
      case "Quantifier":
        this.visitQuantifier(e);
        break;
    }
    this.visitChildren(e);
  }
  visitPattern(e) {
  }
  visitFlags(e) {
  }
  visitDisjunction(e) {
  }
  visitAlternative(e) {
  }
  // Assertion
  visitStartAnchor(e) {
  }
  visitEndAnchor(e) {
  }
  visitWordBoundary(e) {
  }
  visitNonWordBoundary(e) {
  }
  visitLookahead(e) {
  }
  visitNegativeLookahead(e) {
  }
  // atoms
  visitCharacter(e) {
  }
  visitSet(e) {
  }
  visitGroup(e) {
  }
  visitGroupBackReference(e) {
  }
  visitQuantifier(e) {
  }
}
const kd = /\r?\n/gm, xd = new Ml();
class Sd extends di {
  constructor() {
    super(...arguments), this.isStarting = true, this.endRegexpStack = [], this.multiline = false;
  }
  get endRegex() {
    return this.endRegexpStack.join("");
  }
  reset(e) {
    this.multiline = false, this.regex = e, this.startRegexp = "", this.isStarting = true, this.endRegexpStack = [];
  }
  visitGroup(e) {
    e.quantifier && (this.isStarting = false, this.endRegexpStack = []);
  }
  visitCharacter(e) {
    const t = String.fromCharCode(e.value);
    if (!this.multiline && t === `
` && (this.multiline = true), e.quantifier)
      this.isStarting = false, this.endRegexpStack = [];
    else {
      const r = fi(t);
      this.endRegexpStack.push(r), this.isStarting && (this.startRegexp += r);
    }
  }
  visitSet(e) {
    if (!this.multiline) {
      const t = this.regex.substring(e.loc.begin, e.loc.end), r = new RegExp(t);
      this.multiline = !!`
`.match(r);
    }
    if (e.quantifier)
      this.isStarting = false, this.endRegexpStack = [];
    else {
      const t = this.regex.substring(e.loc.begin, e.loc.end);
      this.endRegexpStack.push(t), this.isStarting && (this.startRegexp += t);
    }
  }
  visitChildren(e) {
    e.type === "Group" && e.quantifier || super.visitChildren(e);
  }
}
const Ni = new Sd();
function Id(n) {
  try {
    return typeof n == "string" && (n = new RegExp(n)), n = n.toString(), Ni.reset(n), Ni.visit(xd.pattern(n)), Ni.multiline;
  } catch {
    return false;
  }
}
const Cd = `\f
\r	\v              \u2028\u2029  　\uFEFF`.split("");
function Zi(n) {
  const e = typeof n == "string" ? new RegExp(n) : n;
  return Cd.some((t) => e.test(t));
}
function fi(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function $d(n) {
  return Array.prototype.map.call(n, (e) => /\w/.test(e) ? `[${e.toLowerCase()}${e.toUpperCase()}]` : fi(e)).join("");
}
function Nd(n, e) {
  const t = wd(n), r = e.match(t);
  return !!r && r[0].length > 0;
}
function wd(n) {
  typeof n == "string" && (n = new RegExp(n));
  const e = n, t = n.source;
  let r = 0;
  function i() {
    let s = "", a2;
    function o(c) {
      s += t.substr(r, c), r += c;
    }
    function l(c) {
      s += "(?:" + t.substr(r, c) + "|$)", r += c;
    }
    for (; r < t.length; )
      switch (t[r]) {
        case "\\":
          switch (t[r + 1]) {
            case "c":
              l(3);
              break;
            case "x":
              l(4);
              break;
            case "u":
              e.unicode ? t[r + 2] === "{" ? l(t.indexOf("}", r) - r + 1) : l(6) : l(2);
              break;
            case "p":
            case "P":
              e.unicode ? l(t.indexOf("}", r) - r + 1) : l(2);
              break;
            case "k":
              l(t.indexOf(">", r) - r + 1);
              break;
            default:
              l(2);
              break;
          }
          break;
        case "[":
          a2 = /\[(?:\\.|.)*?\]/g, a2.lastIndex = r, a2 = a2.exec(t) || [], l(a2[0].length);
          break;
        case "|":
        case "^":
        case "$":
        case "*":
        case "+":
        case "?":
          o(1);
          break;
        case "{":
          a2 = /\{\d+,?\d*\}/g, a2.lastIndex = r, a2 = a2.exec(t), a2 ? o(a2[0].length) : l(1);
          break;
        case "(":
          if (t[r + 1] === "?")
            switch (t[r + 2]) {
              case ":":
                s += "(?:", r += 3, s += i() + "|$)";
                break;
              case "=":
                s += "(?=", r += 3, s += i() + ")";
                break;
              case "!":
                a2 = r, r += 3, i(), s += t.substr(a2, r - a2);
                break;
              case "<":
                switch (t[r + 3]) {
                  case "=":
                  case "!":
                    a2 = r, r += 4, i(), s += t.substr(a2, r - a2);
                    break;
                  default:
                    o(t.indexOf(">", r) - r + 1), s += i() + "|$)";
                    break;
                }
                break;
            }
          else
            o(1), s += i() + "|$)";
          break;
        case ")":
          return ++r, s;
        default:
          l(1);
          break;
      }
    return s;
  }
  return new RegExp(i(), n.flags);
}
function _d(n) {
  return n.rules.find((e) => we(e) && e.entry);
}
function Ld(n) {
  return n.rules.filter((e) => Rt(e) && e.hidden);
}
function Dl(n, e) {
  const t = /* @__PURE__ */ new Set(), r = _d(n);
  if (!r)
    return new Set(n.rules);
  const i = [r].concat(Ld(n));
  for (const a2 of i)
    Fl(a2, t, e);
  const s = /* @__PURE__ */ new Set();
  for (const a2 of n.rules)
    (t.has(a2.name) || Rt(a2) && a2.hidden) && s.add(a2);
  return s;
}
function Fl(n, e, t) {
  e.add(n.name), Qn(n).forEach((r) => {
    if (pt(r) || t) {
      const i = r.rule.ref;
      i && !e.has(i.name) && Fl(i, e, t);
    }
  });
}
function Od(n) {
  if (n.terminal)
    return n.terminal;
  if (n.type.ref) {
    const e = Ul(n.type.ref);
    return e == null ? void 0 : e.terminal;
  }
}
function bd(n) {
  return n.hidden && !Zi(Vs(n));
}
function Pd(n, e) {
  return !n || !e ? [] : Gs(n, e, n.astNode, true);
}
function Gl(n, e, t) {
  if (!n || !e)
    return;
  const r = Gs(n, e, n.astNode, true);
  if (r.length !== 0)
    return t !== void 0 ? t = Math.max(0, Math.min(t, r.length - 1)) : t = 0, r[t];
}
function Gs(n, e, t, r) {
  if (!r) {
    const i = ui(n.grammarSource, ft);
    if (i && i.feature === e)
      return [n];
  }
  return zn(n) && n.astNode === t ? n.content.flatMap((i) => Gs(i, e, t, false)) : [];
}
function Md(n, e, t) {
  if (!n)
    return;
  const r = Dd(n, e, n == null ? void 0 : n.astNode);
  if (r.length !== 0)
    return t !== void 0 ? t = Math.max(0, Math.min(t, r.length - 1)) : t = 0, r[t];
}
function Dd(n, e, t) {
  if (n.astNode !== t)
    return [];
  if (ht(n.grammarSource) && n.grammarSource.value === e)
    return [n];
  const r = Xi(n).iterator();
  let i;
  const s = [];
  do
    if (i = r.next(), !i.done) {
      const a2 = i.value;
      a2.astNode === t ? ht(a2.grammarSource) && a2.grammarSource.value === e && s.push(a2) : r.prune();
    }
  while (!i.done);
  return s;
}
function Fd(n) {
  var e;
  const t = n.astNode;
  for (; t === ((e = n.container) === null || e === void 0 ? void 0 : e.astNode); ) {
    const r = ui(n.grammarSource, ft);
    if (r)
      return r;
    n = n.container;
  }
}
function Ul(n) {
  let e = n;
  return $l(e) && (ci(e.$container) ? e = e.$container.$container : we(e.$container) ? e = e.$container : Jn(e.$container)), Bl(n, e, /* @__PURE__ */ new Map());
}
function Bl(n, e, t) {
  var r;
  function i(s, a2) {
    let o;
    return ui(s, ft) || (o = Bl(a2, a2, t)), t.set(n, o), o;
  }
  if (t.has(n))
    return t.get(n);
  t.set(n, void 0);
  for (const s of Qn(e)) {
    if (ft(s) && s.feature.toLowerCase() === "name")
      return t.set(n, s), s;
    if (pt(s) && we(s.rule.ref))
      return i(s, s.rule.ref);
    if (ld(s) && (!((r = s.typeRef) === null || r === void 0) && r.ref))
      return i(s, s.typeRef.ref);
  }
}
function Vl(n) {
  return Wl(n, /* @__PURE__ */ new Set());
}
function Wl(n, e) {
  if (e.has(n))
    return true;
  e.add(n);
  for (const t of Qn(n))
    if (pt(t)) {
      if (!t.rule.ref || we(t.rule.ref) && !Wl(t.rule.ref, e))
        return false;
    } else {
      if (ft(t))
        return false;
      if (ci(t))
        return false;
    }
  return !!n.definition;
}
function Us(n) {
  if (n.inferredType)
    return n.inferredType.name;
  if (n.dataType)
    return n.dataType;
  if (n.returnType) {
    const e = n.returnType.ref;
    if (e) {
      if (we(e))
        return e.name;
      if (Nl(e) || wl(e))
        return e.name;
    }
  }
}
function Bs(n) {
  var e;
  if (we(n))
    return Vl(n) ? n.name : (e = Us(n)) !== null && e !== void 0 ? e : n.name;
  if (Nl(n) || wl(n) || od(n))
    return n.name;
  if (ci(n)) {
    const t = Gd(n);
    if (t)
      return t;
  } else if ($l(n))
    return n.name;
  throw new Error("Cannot get name of Unknown Type");
}
function Gd(n) {
  var e;
  if (n.inferredType)
    return n.inferredType.name;
  if (!((e = n.type) === null || e === void 0) && e.ref)
    return Bs(n.type.ref);
}
function Ud(n) {
  var e, t, r;
  return Rt(n) ? (t = (e = n.type) === null || e === void 0 ? void 0 : e.name) !== null && t !== void 0 ? t : "string" : (r = Us(n)) !== null && r !== void 0 ? r : n.name;
}
function Vs(n) {
  const e = {
    s: false,
    i: false,
    u: false
  }, t = Zt(n.definition, e), r = Object.entries(e).filter(([, i]) => i).map(([i]) => i).join("");
  return new RegExp(t, r);
}
const Ws = /[\s\S]/.source;
function Zt(n, e) {
  if (hd(n))
    return Bd(n);
  if (pd(n))
    return Vd(n);
  if (cd(n))
    return Hd(n);
  if (md(n)) {
    const t = n.rule.ref;
    if (!t)
      throw new Error("Missing rule reference.");
    return ze(Zt(t.definition), {
      cardinality: n.cardinality,
      lookahead: n.lookahead
    });
  } else {
    if (dd(n))
      return Kd(n);
    if (gd(n))
      return Wd(n);
    if (fd(n)) {
      const t = n.regex.lastIndexOf("/"), r = n.regex.substring(1, t), i = n.regex.substring(t + 1);
      return e && (e.i = i.includes("i"), e.s = i.includes("s"), e.u = i.includes("u")), ze(r, {
        cardinality: n.cardinality,
        lookahead: n.lookahead,
        wrap: false
      });
    } else {
      if (yd(n))
        return ze(Ws, {
          cardinality: n.cardinality,
          lookahead: n.lookahead
        });
      throw new Error(`Invalid terminal element: ${n == null ? void 0 : n.$type}`);
    }
  }
}
function Bd(n) {
  return ze(n.elements.map((e) => Zt(e)).join("|"), {
    cardinality: n.cardinality,
    lookahead: n.lookahead
  });
}
function Vd(n) {
  return ze(n.elements.map((e) => Zt(e)).join(""), {
    cardinality: n.cardinality,
    lookahead: n.lookahead
  });
}
function Wd(n) {
  return ze(`${Ws}*?${Zt(n.terminal)}`, {
    cardinality: n.cardinality,
    lookahead: n.lookahead
  });
}
function Kd(n) {
  return ze(`(?!${Zt(n.terminal)})${Ws}*?`, {
    cardinality: n.cardinality,
    lookahead: n.lookahead
  });
}
function Hd(n) {
  return n.right ? ze(`[${wi(n.left)}-${wi(n.right)}]`, {
    cardinality: n.cardinality,
    lookahead: n.lookahead,
    wrap: false
  }) : ze(wi(n.left), {
    cardinality: n.cardinality,
    lookahead: n.lookahead,
    wrap: false
  });
}
function wi(n) {
  return fi(n.value);
}
function ze(n, e) {
  var t;
  return (e.wrap !== false || e.lookahead) && (n = `(${(t = e.lookahead) !== null && t !== void 0 ? t : ""}${n})`), e.cardinality ? `${n}${e.cardinality}` : n;
}
function jd(n) {
  const e = [], t = n.Grammar;
  for (const r of t.rules)
    Rt(r) && bd(r) && Id(Vs(r)) && e.push(r.name);
  return {
    multilineCommentRules: e,
    nameRegexp: Qu
  };
}
function es(n) {
  console && console.error && console.error(`Error: ${n}`);
}
function Kl(n) {
  console && console.warn && console.warn(`Warning: ${n}`);
}
function Hl(n) {
  const e = (/* @__PURE__ */ new Date()).getTime(), t = n();
  return { time: (/* @__PURE__ */ new Date()).getTime() - e, value: t };
}
function jl(n) {
  function e() {
  }
  e.prototype = n;
  const t = new e();
  function r() {
    return typeof t.bar;
  }
  return r(), r(), n;
}
function zd(n) {
  return qd(n) ? n.LABEL : n.name;
}
function qd(n) {
  return fe(n.LABEL) && n.LABEL !== "";
}
class Be {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    this._definition = e;
  }
  accept(e) {
    e.visit(this), $t$1(this.definition, (t) => {
      t.accept(e);
    });
  }
}
class le extends Be {
  constructor(e) {
    super([]), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
  set definition(e) {
  }
  get definition() {
    return this.referencedRule !== void 0 ? this.referencedRule.definition : [];
  }
  accept(e) {
    e.visit(this);
  }
}
class en extends Be {
  constructor(e) {
    super(e.definition), this.orgText = "", ke(this, Me(e, (t) => t !== void 0));
  }
}
class he extends Be {
  constructor(e) {
    super(e.definition), this.ignoreAmbiguities = false, ke(this, Me(e, (t) => t !== void 0));
  }
}
let ne = class extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
};
class Se extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
}
class Ie extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
}
class K extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
}
class me extends Be {
  constructor(e) {
    super(e.definition), this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
}
class ge extends Be {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    super(e.definition), this.idx = 1, this.ignoreAmbiguities = false, this.hasPredicates = false, ke(this, Me(e, (t) => t !== void 0));
  }
}
class G {
  constructor(e) {
    this.idx = 1, ke(this, Me(e, (t) => t !== void 0));
  }
  accept(e) {
    e.visit(this);
  }
}
function Yd(n) {
  return gn$1(n, Sr);
}
function Sr(n) {
  function e(t) {
    return gn$1(t, Sr);
  }
  if (n instanceof le) {
    const t = {
      type: "NonTerminal",
      name: n.nonTerminalName,
      idx: n.idx
    };
    return fe(n.label) && (t.label = n.label), t;
  } else {
    if (n instanceof he)
      return {
        type: "Alternative",
        definition: e(n.definition)
      };
    if (n instanceof ne)
      return {
        type: "Option",
        idx: n.idx,
        definition: e(n.definition)
      };
    if (n instanceof Se)
      return {
        type: "RepetitionMandatory",
        idx: n.idx,
        definition: e(n.definition)
      };
    if (n instanceof Ie)
      return {
        type: "RepetitionMandatoryWithSeparator",
        idx: n.idx,
        separator: Sr(new G({ terminalType: n.separator })),
        definition: e(n.definition)
      };
    if (n instanceof me)
      return {
        type: "RepetitionWithSeparator",
        idx: n.idx,
        separator: Sr(new G({ terminalType: n.separator })),
        definition: e(n.definition)
      };
    if (n instanceof K)
      return {
        type: "Repetition",
        idx: n.idx,
        definition: e(n.definition)
      };
    if (n instanceof ge)
      return {
        type: "Alternation",
        idx: n.idx,
        definition: e(n.definition)
      };
    if (n instanceof G) {
      const t = {
        type: "Terminal",
        name: n.terminalType.name,
        label: zd(n.terminalType),
        idx: n.idx
      };
      fe(n.label) && (t.terminalLabel = n.label);
      const r = n.terminalType.PATTERN;
      return n.terminalType.PATTERN && (t.pattern = Ye(r) ? r.source : r), t;
    } else {
      if (n instanceof en)
        return {
          type: "Rule",
          name: n.name,
          orgText: n.orgText,
          definition: e(n.definition)
        };
      throw Error("non exhaustive match");
    }
  }
}
class tn {
  visit(e) {
    const t = e;
    switch (t.constructor) {
      case le:
        return this.visitNonTerminal(t);
      case he:
        return this.visitAlternative(t);
      case ne:
        return this.visitOption(t);
      case Se:
        return this.visitRepetitionMandatory(t);
      case Ie:
        return this.visitRepetitionMandatoryWithSeparator(t);
      case me:
        return this.visitRepetitionWithSeparator(t);
      case K:
        return this.visitRepetition(t);
      case ge:
        return this.visitAlternation(t);
      case G:
        return this.visitTerminal(t);
      case en:
        return this.visitRule(t);
      default:
        throw Error("non exhaustive match");
    }
  }
  /* c8 ignore next */
  visitNonTerminal(e) {
  }
  /* c8 ignore next */
  visitAlternative(e) {
  }
  /* c8 ignore next */
  visitOption(e) {
  }
  /* c8 ignore next */
  visitRepetition(e) {
  }
  /* c8 ignore next */
  visitRepetitionMandatory(e) {
  }
  /* c8 ignore next 3 */
  visitRepetitionMandatoryWithSeparator(e) {
  }
  /* c8 ignore next */
  visitRepetitionWithSeparator(e) {
  }
  /* c8 ignore next */
  visitAlternation(e) {
  }
  /* c8 ignore next */
  visitTerminal(e) {
  }
  /* c8 ignore next */
  visitRule(e) {
  }
}
function Xd(n) {
  return n instanceof he || n instanceof ne || n instanceof K || n instanceof Se || n instanceof Ie || n instanceof me || n instanceof G || n instanceof en;
}
function Vr(n, e = []) {
  return n instanceof ne || n instanceof K || n instanceof me ? true : n instanceof ge ? kl(n.definition, (r) => Vr(r, e)) : n instanceof le && ue(e, n) ? false : n instanceof Be ? (n instanceof le && e.push(n), be(n.definition, (r) => Vr(r, e))) : false;
}
function Jd(n) {
  return n instanceof ge;
}
function Ge(n) {
  if (n instanceof le)
    return "SUBRULE";
  if (n instanceof ne)
    return "OPTION";
  if (n instanceof ge)
    return "OR";
  if (n instanceof Se)
    return "AT_LEAST_ONE";
  if (n instanceof Ie)
    return "AT_LEAST_ONE_SEP";
  if (n instanceof me)
    return "MANY_SEP";
  if (n instanceof K)
    return "MANY";
  if (n instanceof G)
    return "CONSUME";
  throw Error("non exhaustive match");
}
class hi {
  walk(e, t = []) {
    $t$1(e.definition, (r, i) => {
      const s = Q(e.definition, i + 1);
      if (r instanceof le)
        this.walkProdRef(r, s, t);
      else if (r instanceof G)
        this.walkTerminal(r, s, t);
      else if (r instanceof he)
        this.walkFlat(r, s, t);
      else if (r instanceof ne)
        this.walkOption(r, s, t);
      else if (r instanceof Se)
        this.walkAtLeastOne(r, s, t);
      else if (r instanceof Ie)
        this.walkAtLeastOneSep(r, s, t);
      else if (r instanceof me)
        this.walkManySep(r, s, t);
      else if (r instanceof K)
        this.walkMany(r, s, t);
      else if (r instanceof ge)
        this.walkOr(r, s, t);
      else
        throw Error("non exhaustive match");
    });
  }
  walkTerminal(e, t, r) {
  }
  walkProdRef(e, t, r) {
  }
  walkFlat(e, t, r) {
    const i = t.concat(r);
    this.walk(e, i);
  }
  walkOption(e, t, r) {
    const i = t.concat(r);
    this.walk(e, i);
  }
  walkAtLeastOne(e, t, r) {
    const i = [
      new ne({ definition: e.definition })
    ].concat(t, r);
    this.walk(e, i);
  }
  walkAtLeastOneSep(e, t, r) {
    const i = Ta(e, t, r);
    this.walk(e, i);
  }
  walkMany(e, t, r) {
    const i = [
      new ne({ definition: e.definition })
    ].concat(t, r);
    this.walk(e, i);
  }
  walkManySep(e, t, r) {
    const i = Ta(e, t, r);
    this.walk(e, i);
  }
  walkOr(e, t, r) {
    const i = t.concat(r);
    $t$1(e.definition, (s) => {
      const a2 = new he({ definition: [s] });
      this.walk(a2, i);
    });
  }
}
function Ta(n, e, t) {
  return [
    new ne({
      definition: [
        new G({ terminalType: n.separator })
      ].concat(n.definition)
    })
  ].concat(e, t);
}
function Zn(n) {
  if (n instanceof le)
    return Zn(n.referencedRule);
  if (n instanceof G)
    return ef(n);
  if (Xd(n))
    return Qd(n);
  if (Jd(n))
    return Zd(n);
  throw Error("non exhaustive match");
}
function Qd(n) {
  let e = [];
  const t = n.definition;
  let r = 0, i = t.length > r, s, a2 = true;
  for (; i && a2; )
    s = t[r], a2 = Vr(s), e = e.concat(Zn(s)), r = r + 1, i = t.length > r;
  return bs(e);
}
function Zd(n) {
  const e = gn$1(n.definition, (t) => Zn(t));
  return bs(fn$1(e));
}
function ef(n) {
  return [n.terminalType];
}
const zl = "_~IN~_";
class tf extends hi {
  constructor(e) {
    super(), this.topProd = e, this.follows = {};
  }
  startWalking() {
    return this.walk(this.topProd), this.follows;
  }
  walkTerminal(e, t, r) {
  }
  walkProdRef(e, t, r) {
    const i = rf(e.referencedRule, e.idx) + this.topProd.name, s = t.concat(r), a2 = new he({ definition: s }), o = Zn(a2);
    this.follows[i] = o;
  }
}
function nf(n) {
  const e = {};
  return $t$1(n, (t) => {
    const r = new tf(t).startWalking();
    ke(e, r);
  }), e;
}
function rf(n, e) {
  return n.name + e + zl;
}
let Ir = {};
const sf = new Ml();
function pi(n) {
  const e = n.toString();
  if (Ir.hasOwnProperty(e))
    return Ir[e];
  {
    const t = sf.pattern(e);
    return Ir[e] = t, t;
  }
}
function af() {
  Ir = {};
}
const ql = "Complement Sets are not supported for first char optimization", Wr = `Unable to use "first char" lexer optimizations:
`;
function of(n, e = false) {
  try {
    const t = pi(n);
    return ts(t.value, {}, t.flags.ignoreCase);
  } catch (t) {
    if (t.message === ql)
      e && Kl(`${Wr}	Unable to optimize: < ${n.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
    else {
      let r = "";
      e && (r = `
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`), es(`${Wr}
	Failed parsing: < ${n.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + r);
    }
  }
  return [];
}
function ts(n, e, t) {
  switch (n.type) {
    case "Disjunction":
      for (let i = 0; i < n.value.length; i++)
        ts(n.value[i], e, t);
      break;
    case "Alternative":
      const r = n.value;
      for (let i = 0; i < r.length; i++) {
        const s = r[i];
        switch (s.type) {
          case "EndAnchor":
          case "GroupBackReference":
          case "Lookahead":
          case "NegativeLookahead":
          case "StartAnchor":
          case "WordBoundary":
          case "NonWordBoundary":
            continue;
        }
        const a2 = s;
        switch (a2.type) {
          case "Character":
            mr(a2.value, e, t);
            break;
          case "Set":
            if (a2.complement === true)
              throw Error(ql);
            $t$1(a2.value, (l) => {
              if (typeof l == "number")
                mr(l, e, t);
              else {
                const c = l;
                if (t === true)
                  for (let u = c.from; u <= c.to; u++)
                    mr(u, e, t);
                else {
                  for (let u = c.from; u <= c.to && u < Fn; u++)
                    mr(u, e, t);
                  if (c.to >= Fn) {
                    const u = c.from >= Fn ? c.from : Fn, d = c.to, h = tt(u), f = tt(d);
                    for (let m = h; m <= f; m++)
                      e[m] = m;
                  }
                }
              }
            });
            break;
          case "Group":
            ts(a2.value, e, t);
            break;
          default:
            throw Error("Non Exhaustive Match");
        }
        const o = a2.quantifier !== void 0 && a2.quantifier.atLeast === 0;
        if (
          // A group may be optional due to empty contents /(?:)/
          // or if everything inside it is optional /((a)?)/
          a2.type === "Group" && ns(a2) === false || // If this term is not a group it may only be optional if it has an optional quantifier
          a2.type !== "Group" && o === false
        )
          break;
      }
      break;
    default:
      throw Error("non exhaustive match!");
  }
  return St(e);
}
function mr(n, e, t) {
  const r = tt(n);
  e[r] = r, t === true && lf(n, e);
}
function lf(n, e) {
  const t = String.fromCharCode(n), r = t.toUpperCase();
  if (r !== t) {
    const i = tt(r.charCodeAt(0));
    e[i] = i;
  } else {
    const i = t.toLowerCase();
    if (i !== t) {
      const s = tt(i.charCodeAt(0));
      e[s] = s;
    }
  }
}
function Ra(n, e) {
  return hn$1(n.value, (t) => {
    if (typeof t == "number")
      return ue(e, t);
    {
      const r = t;
      return hn$1(e, (i) => r.from <= i && i <= r.to) !== void 0;
    }
  });
}
function ns(n) {
  const e = n.quantifier;
  return e && e.atLeast === 0 ? true : n.value ? $a$1(n.value) ? be(n.value, ns) : ns(n.value) : false;
}
class cf extends di {
  constructor(e) {
    super(), this.targetCharCodes = e, this.found = false;
  }
  visitChildren(e) {
    if (this.found !== true) {
      switch (e.type) {
        case "Lookahead":
          this.visitLookahead(e);
          return;
        case "NegativeLookahead":
          this.visitNegativeLookahead(e);
          return;
      }
      super.visitChildren(e);
    }
  }
  visitCharacter(e) {
    ue(this.targetCharCodes, e.value) && (this.found = true);
  }
  visitSet(e) {
    e.complement ? Ra(e, this.targetCharCodes) === void 0 && (this.found = true) : Ra(e, this.targetCharCodes) !== void 0 && (this.found = true);
  }
}
function Ks(n, e) {
  if (e instanceof RegExp) {
    const t = pi(e), r = new cf(n);
    return r.visit(t), r.found;
  } else
    return hn$1(e, (t) => ue(n, t.charCodeAt(0))) !== void 0;
}
const mt = "PATTERN", Dn = "defaultMode", gr = "modes";
let Yl = typeof new RegExp("(?:)").sticky == "boolean";
function uf(n, e) {
  e = dn$1(e, {
    useSticky: Yl,
    debug: false,
    safeMode: false,
    positionTracking: "full",
    lineTerminatorCharacters: ["\r", `
`],
    tracer: (A, R) => R()
  });
  const t = e.tracer;
  t("initCharCodeToOptimizedIndexMap", () => {
    Of();
  });
  let r;
  t("Reject Lexer.NA", () => {
    r = li(n, (A) => A[mt] === de.NA);
  });
  let i = false, s;
  t("Transform Patterns", () => {
    i = false, s = gn$1(r, (A) => {
      const R = A[mt];
      if (Ye(R)) {
        const C = R.source;
        return C.length === 1 && // only these regExp meta characters which can appear in a length one regExp
        C !== "^" && C !== "$" && C !== "." && !R.ignoreCase ? C : C.length === 2 && C[0] === "\\" && // not a meta character
        !ue([
          "d",
          "D",
          "s",
          "S",
          "t",
          "r",
          "n",
          "t",
          "0",
          "c",
          "b",
          "B",
          "f",
          "v",
          "w",
          "W"
        ], C[1]) ? C[1] : e.useSticky ? Aa(R) : va(R);
      } else {
        if (no$1(R))
          return i = true, { exec: R };
        if (typeof R == "object")
          return i = true, R;
        if (typeof R == "string") {
          if (R.length === 1)
            return R;
          {
            const C = R.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"), F = new RegExp(C);
            return e.useSticky ? Aa(F) : va(F);
          }
        } else
          throw Error("non exhaustive match");
      }
    });
  });
  let a2, o, l, c, u;
  t("misc mapping", () => {
    a2 = gn$1(r, (A) => A.tokenTypeIdx), o = gn$1(r, (A) => {
      const R = A.GROUP;
      if (R !== de.SKIPPED) {
        if (fe(R))
          return R;
        if (Et$1(R))
          return false;
        throw Error("non exhaustive match");
      }
    }), l = gn$1(r, (A) => {
      const R = A.LONGER_ALT;
      if (R)
        return $a$1(R) ? gn$1(R, (F) => da(r, F)) : [da(r, R)];
    }), c = gn$1(r, (A) => A.PUSH_MODE), u = gn$1(r, (A) => mn$1(A, "POP_MODE"));
  });
  let d;
  t("Line Terminator Handling", () => {
    const A = Ql(e.lineTerminatorCharacters);
    d = gn$1(r, (R) => false), e.positionTracking !== "onlyOffset" && (d = gn$1(r, (R) => mn$1(R, "LINE_BREAKS") ? !!R.LINE_BREAKS : Jl(R, A) === false && Ks(A, R.PATTERN)));
  });
  let h, f, m, g;
  t("Misc Mapping #2", () => {
    h = gn$1(r, Xl), f = gn$1(s, wf), m = It$1(r, (A, R) => {
      const C = R.GROUP;
      return fe(C) && C !== de.SKIPPED && (A[C] = []), A;
    }, {}), g = gn$1(s, (A, R) => ({
      pattern: s[R],
      longerAlt: l[R],
      canLineTerminator: d[R],
      isCustom: h[R],
      short: f[R],
      group: o[R],
      push: c[R],
      pop: u[R],
      tokenTypeIdx: a2[R],
      tokenType: r[R]
    }));
  });
  let v = true, y = [];
  return e.safeMode || t("First Char Optimization", () => {
    y = It$1(r, (A, R, C) => {
      if (typeof R.PATTERN == "string") {
        const F = R.PATTERN.charCodeAt(0), ie = tt(F);
        _i(A, ie, g[C]);
      } else if ($a$1(R.START_CHARS_HINT)) {
        let F;
        $t$1(R.START_CHARS_HINT, (ie) => {
          const _e = typeof ie == "string" ? ie.charCodeAt(0) : ie, ye = tt(_e);
          F !== ye && (F = ye, _i(A, ye, g[C]));
        });
      } else if (Ye(R.PATTERN))
        if (R.PATTERN.unicode)
          v = false, e.ensureOptimizations && es(`${Wr}	Unable to analyze < ${R.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
        else {
          const F = of(R.PATTERN, e.ensureOptimizations);
          mc$1(F) && (v = false), $t$1(F, (ie) => {
            _i(A, ie, g[C]);
          });
        }
      else
        e.ensureOptimizations && es(`${Wr}	TokenType: <${R.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`), v = false;
      return A;
    }, []);
  }), {
    emptyGroups: m,
    patternIdxToConfig: g,
    charCodeToPatternIdxToConfig: y,
    hasCustom: i,
    canBeOptimized: v
  };
}
function df(n, e) {
  let t = [];
  const r = hf(n);
  t = t.concat(r.errors);
  const i = pf(r.valid), s = i.valid;
  return t = t.concat(i.errors), t = t.concat(ff(s)), t = t.concat(Ef(s)), t = t.concat(kf(s, e)), t = t.concat(xf(s)), t;
}
function ff(n) {
  let e = [];
  const t = _t$1(n, (r) => Ye(r[mt]));
  return e = e.concat(gf(t)), e = e.concat(Rf(t)), e = e.concat(vf(t)), e = e.concat(Af(t)), e = e.concat(yf(t)), e;
}
function hf(n) {
  const e = _t$1(n, (i) => !mn$1(i, mt)), t = gn$1(e, (i) => ({
    message: "Token Type: ->" + i.name + "<- missing static 'PATTERN' property",
    type: H.MISSING_PATTERN,
    tokenTypes: [i]
  })), r = oi(n, e);
  return { errors: t, valid: r };
}
function pf(n) {
  const e = _t$1(n, (i) => {
    const s = i[mt];
    return !Ye(s) && !no$1(s) && !mn$1(s, "exec") && !fe(s);
  }), t = gn$1(e, (i) => ({
    message: "Token Type: ->" + i.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
    type: H.INVALID_PATTERN,
    tokenTypes: [i]
  })), r = oi(n, e);
  return { errors: t, valid: r };
}
const mf = /[^\\][$]/;
function gf(n) {
  class e extends di {
    constructor() {
      super(...arguments), this.found = false;
    }
    visitEndAnchor(s) {
      this.found = true;
    }
  }
  const t = _t$1(n, (i) => {
    const s = i.PATTERN;
    try {
      const a2 = pi(s), o = new e();
      return o.visit(a2), o.found;
    } catch {
      return mf.test(s.source);
    }
  });
  return gn$1(t, (i) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: H.EOI_ANCHOR_FOUND,
    tokenTypes: [i]
  }));
}
function yf(n) {
  const e = _t$1(n, (r) => r.PATTERN.test(""));
  return gn$1(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'PATTERN' must not match an empty string",
    type: H.EMPTY_MATCH_PATTERN,
    tokenTypes: [r]
  }));
}
const Tf = /[^\\[][\^]|^\^/;
function Rf(n) {
  class e extends di {
    constructor() {
      super(...arguments), this.found = false;
    }
    visitStartAnchor(s) {
      this.found = true;
    }
  }
  const t = _t$1(n, (i) => {
    const s = i.PATTERN;
    try {
      const a2 = pi(s), o = new e();
      return o.visit(a2), o.found;
    } catch {
      return Tf.test(s.source);
    }
  });
  return gn$1(t, (i) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: H.SOI_ANCHOR_FOUND,
    tokenTypes: [i]
  }));
}
function vf(n) {
  const e = _t$1(n, (r) => {
    const i = r[mt];
    return i instanceof RegExp && (i.multiline || i.global);
  });
  return gn$1(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
    type: H.UNSUPPORTED_FLAGS_FOUND,
    tokenTypes: [r]
  }));
}
function Af(n) {
  const e = [];
  let t = gn$1(n, (s) => It$1(n, (a2, o) => (s.PATTERN.source === o.PATTERN.source && !ue(e, o) && o.PATTERN !== de.NA && (e.push(o), a2.push(o)), a2), []));
  t = Xn(t);
  const r = _t$1(t, (s) => s.length > 1);
  return gn$1(r, (s) => {
    const a2 = gn$1(s, (l) => l.name);
    return {
      message: `The same RegExp pattern ->${Pe(s).PATTERN}<-has been used in all of the following Token Types: ${a2.join(", ")} <-`,
      type: H.DUPLICATE_PATTERNS_FOUND,
      tokenTypes: s
    };
  });
}
function Ef(n) {
  const e = _t$1(n, (r) => {
    if (!mn$1(r, "GROUP"))
      return false;
    const i = r.GROUP;
    return i !== de.SKIPPED && i !== de.NA && !fe(i);
  });
  return gn$1(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
    type: H.INVALID_GROUP_TYPE_FOUND,
    tokenTypes: [r]
  }));
}
function kf(n, e) {
  const t = _t$1(n, (i) => i.PUSH_MODE !== void 0 && !ue(e, i.PUSH_MODE));
  return gn$1(t, (i) => ({
    message: `Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,
    type: H.PUSH_MODE_DOES_NOT_EXIST,
    tokenTypes: [i]
  }));
}
function xf(n) {
  const e = [], t = It$1(n, (r, i, s) => {
    const a2 = i.PATTERN;
    return a2 === de.NA || (fe(a2) ? r.push({ str: a2, idx: s, tokenType: i }) : Ye(a2) && If(a2) && r.push({ str: a2.source, idx: s, tokenType: i })), r;
  }, []);
  return $t$1(n, (r, i) => {
    $t$1(t, ({ str: s, idx: a2, tokenType: o }) => {
      if (i < a2 && Sf(s, r.PATTERN)) {
        const l = `Token: ->${o.name}<- can never be matched.
Because it appears AFTER the Token Type ->${r.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
        e.push({
          message: l,
          type: H.UNREACHABLE_PATTERN,
          tokenTypes: [r, o]
        });
      }
    });
  }), e;
}
function Sf(n, e) {
  if (Ye(e)) {
    const t = e.exec(n);
    return t !== null && t.index === 0;
  } else {
    if (no$1(e))
      return e(n, 0, [], {});
    if (mn$1(e, "exec"))
      return e.exec(n, 0, [], {});
    if (typeof e == "string")
      return e === n;
    throw Error("non exhaustive match");
  }
}
function If(n) {
  return hn$1([
    ".",
    "\\",
    "[",
    "]",
    "|",
    "^",
    "$",
    "(",
    ")",
    "?",
    "*",
    "+",
    "{"
  ], (t) => n.source.indexOf(t) !== -1) === void 0;
}
function va(n) {
  const e = n.ignoreCase ? "i" : "";
  return new RegExp(`^(?:${n.source})`, e);
}
function Aa(n) {
  const e = n.ignoreCase ? "iy" : "y";
  return new RegExp(`${n.source}`, e);
}
function Cf(n, e, t) {
  const r = [];
  return mn$1(n, Dn) || r.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + Dn + `> property in its definition
`,
    type: H.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
  }), mn$1(n, gr) || r.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + gr + `> property in its definition
`,
    type: H.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
  }), mn$1(n, gr) && mn$1(n, Dn) && !mn$1(n.modes, n.defaultMode) && r.push({
    message: `A MultiMode Lexer cannot be initialized with a ${Dn}: <${n.defaultMode}>which does not exist
`,
    type: H.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
  }), mn$1(n, gr) && $t$1(n.modes, (i, s) => {
    $t$1(i, (a2, o) => {
      if (Et$1(a2))
        r.push({
          message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${s}> at index: <${o}>
`,
          type: H.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
        });
      else if (mn$1(a2, "LONGER_ALT")) {
        const l = $a$1(a2.LONGER_ALT) ? a2.LONGER_ALT : [a2.LONGER_ALT];
        $t$1(l, (c) => {
          !Et$1(c) && !ue(i, c) && r.push({
            message: `A MultiMode Lexer cannot be initialized with a longer_alt <${c.name}> on token <${a2.name}> outside of mode <${s}>
`,
            type: H.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
          });
        });
      }
    });
  }), r;
}
function $f(n, e, t) {
  const r = [];
  let i = false;
  const s = Xn(fn$1(St(n.modes))), a2 = li(s, (l) => l[mt] === de.NA), o = Ql(t);
  return e && $t$1(a2, (l) => {
    const c = Jl(l, o);
    if (c !== false) {
      const d = {
        message: Lf(l, c),
        type: c.issue,
        tokenType: l
      };
      r.push(d);
    } else
      mn$1(l, "LINE_BREAKS") ? l.LINE_BREAKS === true && (i = true) : Ks(o, l.PATTERN) && (i = true);
  }), e && !i && r.push({
    message: `Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,
    type: H.NO_LINE_BREAKS_FLAGS
  }), r;
}
function Nf(n) {
  const e = {}, t = $(n);
  return $t$1(t, (r) => {
    const i = n[r];
    if ($a$1(i))
      e[r] = [];
    else
      throw Error("non exhaustive match");
  }), e;
}
function Xl(n) {
  const e = n.PATTERN;
  if (Ye(e))
    return false;
  if (no$1(e))
    return true;
  if (mn$1(e, "exec"))
    return true;
  if (fe(e))
    return false;
  throw Error("non exhaustive match");
}
function wf(n) {
  return fe(n) && n.length === 1 ? n.charCodeAt(0) : false;
}
const _f = {
  // implements /\n|\r\n?/g.test
  test: function(n) {
    const e = n.length;
    for (let t = this.lastIndex; t < e; t++) {
      const r = n.charCodeAt(t);
      if (r === 10)
        return this.lastIndex = t + 1, true;
      if (r === 13)
        return n.charCodeAt(t + 1) === 10 ? this.lastIndex = t + 2 : this.lastIndex = t + 1, true;
    }
    return false;
  },
  lastIndex: 0
};
function Jl(n, e) {
  if (mn$1(n, "LINE_BREAKS"))
    return false;
  if (Ye(n.PATTERN)) {
    try {
      Ks(e, n.PATTERN);
    } catch (t) {
      return {
        issue: H.IDENTIFY_TERMINATOR,
        errMsg: t.message
      };
    }
    return false;
  } else {
    if (fe(n.PATTERN))
      return false;
    if (Xl(n))
      return { issue: H.CUSTOM_LINE_BREAK };
    throw Error("non exhaustive match");
  }
}
function Lf(n, e) {
  if (e.issue === H.IDENTIFY_TERMINATOR)
    return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${n.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
  if (e.issue === H.CUSTOM_LINE_BREAK)
    return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${n.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
  throw Error("non exhaustive match");
}
function Ql(n) {
  return gn$1(n, (t) => fe(t) ? t.charCodeAt(0) : t);
}
function _i(n, e, t) {
  n[e] === void 0 ? n[e] = [t] : n[e].push(t);
}
const Fn = 256;
let Cr = [];
function tt(n) {
  return n < Fn ? n : Cr[n];
}
function Of() {
  if (mc$1(Cr)) {
    Cr = new Array(65536);
    for (let n = 0; n < 65536; n++)
      Cr[n] = n > 255 ? 255 + ~~(n / 255) : n;
  }
}
function er(n, e) {
  const t = n.tokenTypeIdx;
  return t === e.tokenTypeIdx ? true : e.isParent === true && e.categoryMatchesMap[t] === true;
}
function Kr(n, e) {
  return n.tokenTypeIdx === e.tokenTypeIdx;
}
let Ea = 1;
const Zl = {};
function tr(n) {
  const e = bf(n);
  Pf(e), Df(e), Mf(e), $t$1(e, (t) => {
    t.isParent = t.categoryMatches.length > 0;
  });
}
function bf(n) {
  let e = a(n), t = n, r = true;
  for (; r; ) {
    t = Xn(fn$1(gn$1(t, (s) => s.CATEGORIES)));
    const i = oi(t, e);
    e = e.concat(i), mc$1(i) ? r = false : t = i;
  }
  return e;
}
function Pf(n) {
  $t$1(n, (e) => {
    tc(e) || (Zl[Ea] = e, e.tokenTypeIdx = Ea++), ka(e) && !$a$1(e.CATEGORIES) && (e.CATEGORIES = [e.CATEGORIES]), ka(e) || (e.CATEGORIES = []), Ff(e) || (e.categoryMatches = []), Gf(e) || (e.categoryMatchesMap = {});
  });
}
function Mf(n) {
  $t$1(n, (e) => {
    e.categoryMatches = [], $t$1(e.categoryMatchesMap, (t, r) => {
      e.categoryMatches.push(Zl[r].tokenTypeIdx);
    });
  });
}
function Df(n) {
  $t$1(n, (e) => {
    ec([], e);
  });
}
function ec(n, e) {
  $t$1(n, (t) => {
    e.categoryMatchesMap[t.tokenTypeIdx] = true;
  }), $t$1(e.CATEGORIES, (t) => {
    const r = n.concat(e);
    ue(r, t) || ec(r, t);
  });
}
function tc(n) {
  return mn$1(n, "tokenTypeIdx");
}
function ka(n) {
  return mn$1(n, "CATEGORIES");
}
function Ff(n) {
  return mn$1(n, "categoryMatches");
}
function Gf(n) {
  return mn$1(n, "categoryMatchesMap");
}
function Uf(n) {
  return mn$1(n, "tokenTypeIdx");
}
const rs = {
  buildUnableToPopLexerModeMessage(n) {
    return `Unable to pop Lexer Mode after encountering Token ->${n.image}<- The Mode Stack is empty`;
  },
  buildUnexpectedCharactersMessage(n, e, t, r, i) {
    return `unexpected character: ->${n.charAt(e)}<- at offset: ${e}, skipped ${t} characters.`;
  }
};
var H;
(function(n) {
  n[n.MISSING_PATTERN = 0] = "MISSING_PATTERN", n[n.INVALID_PATTERN = 1] = "INVALID_PATTERN", n[n.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND", n[n.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND", n[n.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND", n[n.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND", n[n.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST", n[n.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE", n[n.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY", n[n.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST", n[n.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED", n[n.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND", n[n.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN", n[n.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS", n[n.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN", n[n.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR", n[n.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK", n[n.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(H || (H = {}));
const Gn = {
  deferDefinitionErrorsHandling: false,
  positionTracking: "full",
  lineTerminatorsPattern: /\n|\r\n?/g,
  lineTerminatorCharacters: [`
`, "\r"],
  ensureOptimizations: false,
  safeMode: false,
  errorMessageProvider: rs,
  traceInitPerf: false,
  skipValidations: false,
  recoveryEnabled: true
};
Object.freeze(Gn);
class de {
  constructor(e, t = Gn) {
    if (this.lexerDefinition = e, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.trackStartLines = true, this.trackEndLines = true, this.hasCustom = false, this.canModeBeOptimized = {}, this.TRACE_INIT = (i, s) => {
      if (this.traceInitPerf === true) {
        this.traceInitIndent++;
        const a2 = new Array(this.traceInitIndent + 1).join("	");
        this.traceInitIndent < this.traceInitMaxIdent && console.log(`${a2}--> <${i}>`);
        const { time: o, value: l } = Hl(s), c = o > 10 ? console.warn : console.log;
        return this.traceInitIndent < this.traceInitMaxIdent && c(`${a2}<-- <${i}> time: ${o}ms`), this.traceInitIndent--, l;
      } else
        return s();
    }, typeof t == "boolean")
      throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);
    this.config = ke({}, Gn, t);
    const r = this.config.traceInitPerf;
    r === true ? (this.traceInitMaxIdent = 1 / 0, this.traceInitPerf = true) : typeof r == "number" && (this.traceInitMaxIdent = r, this.traceInitPerf = true), this.traceInitIndent = -1, this.TRACE_INIT("Lexer Constructor", () => {
      let i, s = true;
      this.TRACE_INIT("Lexer Config handling", () => {
        if (this.config.lineTerminatorsPattern === Gn.lineTerminatorsPattern)
          this.config.lineTerminatorsPattern = _f;
        else if (this.config.lineTerminatorCharacters === Gn.lineTerminatorCharacters)
          throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);
        if (t.safeMode && t.ensureOptimizations)
          throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
        this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking), this.trackEndLines = /full/i.test(this.config.positionTracking), $a$1(e) ? i = {
          modes: { defaultMode: a(e) },
          defaultMode: Dn
        } : (s = false, i = a(e));
      }), this.config.skipValidations === false && (this.TRACE_INIT("performRuntimeChecks", () => {
        this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(Cf(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      }), this.TRACE_INIT("performWarningRuntimeChecks", () => {
        this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat($f(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      })), i.modes = i.modes ? i.modes : {}, $t$1(i.modes, (o, l) => {
        i.modes[l] = li(o, (c) => Et$1(c));
      });
      const a$1 = $(i.modes);
      if ($t$1(i.modes, (o, l) => {
        this.TRACE_INIT(`Mode: <${l}> processing`, () => {
          if (this.modes.push(l), this.config.skipValidations === false && this.TRACE_INIT("validatePatterns", () => {
            this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(df(o, a$1));
          }), mc$1(this.lexerDefinitionErrors)) {
            tr(o);
            let c;
            this.TRACE_INIT("analyzeTokenTypes", () => {
              c = uf(o, {
                lineTerminatorCharacters: this.config.lineTerminatorCharacters,
                positionTracking: t.positionTracking,
                ensureOptimizations: t.ensureOptimizations,
                safeMode: t.safeMode,
                tracer: this.TRACE_INIT
              });
            }), this.patternIdxToConfig[l] = c.patternIdxToConfig, this.charCodeToPatternIdxToConfig[l] = c.charCodeToPatternIdxToConfig, this.emptyGroups = ke({}, this.emptyGroups, c.emptyGroups), this.hasCustom = c.hasCustom || this.hasCustom, this.canModeBeOptimized[l] = c.canBeOptimized;
          }
        });
      }), this.defaultMode = i.defaultMode, !mc$1(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
        const l = gn$1(this.lexerDefinitionErrors, (c) => c.message).join(`-----------------------
`);
        throw new Error(`Errors detected in definition of Lexer:
` + l);
      }
      $t$1(this.lexerDefinitionWarning, (o) => {
        Kl(o.message);
      }), this.TRACE_INIT("Choosing sub-methods implementations", () => {
        if (Yl ? (this.chopInput = ud$1, this.match = this.matchWithTest) : (this.updateLastIndex = Xn$1, this.match = this.matchWithExec), s && (this.handleModes = Xn$1), this.trackStartLines === false && (this.computeNewColumn = ud$1), this.trackEndLines === false && (this.updateTokenEndLineColumnLocation = Xn$1), /full/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createFullToken;
        else if (/onlyStart/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createStartOnlyToken;
        else if (/onlyOffset/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createOffsetOnlyToken;
        else
          throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
        this.hasCustom ? (this.addToken = this.addTokenUsingPush, this.handlePayload = this.handlePayloadWithCustom) : (this.addToken = this.addTokenUsingMemberAccess, this.handlePayload = this.handlePayloadNoCustom);
      }), this.TRACE_INIT("Failed Optimization Warnings", () => {
        const o = It$1(this.canModeBeOptimized, (l, c, u) => (c === false && l.push(u), l), []);
        if (t.ensureOptimizations && !mc$1(o))
          throw Error(`Lexer Modes: < ${o.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
      }), this.TRACE_INIT("clearRegExpParserCache", () => {
        af();
      }), this.TRACE_INIT("toFastProperties", () => {
        jl(this);
      });
    });
  }
  tokenize(e, t = this.defaultMode) {
    if (!mc$1(this.lexerDefinitionErrors)) {
      const i = gn$1(this.lexerDefinitionErrors, (s) => s.message).join(`-----------------------
`);
      throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
` + i);
    }
    return this.tokenizeInternal(e, t);
  }
  // There is quite a bit of duplication between this and "tokenizeInternalLazy"
  // This is intentional due to performance considerations.
  // this method also used quite a bit of `!` none null assertions because it is too optimized
  // for `tsc` to always understand it is "safe"
  tokenizeInternal(e, t) {
    let r, i, s, a2, o, l, c, u, d, h, f, m, g, v, y;
    const A = e, R = A.length;
    let C = 0, F = 0;
    const ie = this.hasCustom ? 0 : Math.floor(e.length / 10), _e = new Array(ie), ye = [];
    let Fe = this.trackStartLines ? 1 : void 0, Ce = this.trackStartLines ? 1 : void 0;
    const x = Nf(this.emptyGroups), T = this.trackStartLines, E = this.config.lineTerminatorsPattern;
    let I2 = 0, O = [], L = [];
    const _ = [], Te = [];
    Object.freeze(Te);
    let q;
    function W() {
      return O;
    }
    function ot(se) {
      const $e = tt(se), St2 = L[$e];
      return St2 === void 0 ? Te : St2;
    }
    const su = (se) => {
      if (_.length === 1 && // if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
      // So no error should occur.
      se.tokenType.PUSH_MODE === void 0) {
        const $e = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(se);
        ye.push({
          offset: se.startOffset,
          line: se.startLine,
          column: se.startColumn,
          length: se.image.length,
          message: $e
        });
      } else {
        _.pop();
        const $e = un$1(_);
        O = this.patternIdxToConfig[$e], L = this.charCodeToPatternIdxToConfig[$e], I2 = O.length;
        const St2 = this.canModeBeOptimized[$e] && this.config.safeMode === false;
        L && St2 ? q = ot : q = W;
      }
    };
    function sa(se) {
      _.push(se), L = this.charCodeToPatternIdxToConfig[se], O = this.patternIdxToConfig[se], I2 = O.length, I2 = O.length;
      const $e = this.canModeBeOptimized[se] && this.config.safeMode === false;
      L && $e ? q = ot : q = W;
    }
    sa.call(this, t);
    let Le;
    const aa = this.config.recoveryEnabled;
    for (; C < R; ) {
      l = null;
      const se = A.charCodeAt(C), $e = q(se), St2 = $e.length;
      for (r = 0; r < St2; r++) {
        Le = $e[r];
        const Re = Le.pattern;
        c = null;
        const Ve = Le.short;
        if (Ve !== false ? se === Ve && (l = Re) : Le.isCustom === true ? (y = Re.exec(A, C, _e, x), y !== null ? (l = y[0], y.payload !== void 0 && (c = y.payload)) : l = null) : (this.updateLastIndex(Re, C), l = this.match(Re, e, C)), l !== null) {
          if (o = Le.longerAlt, o !== void 0) {
            const Je = o.length;
            for (s = 0; s < Je; s++) {
              const We = O[o[s]], lt = We.pattern;
              if (u = null, We.isCustom === true ? (y = lt.exec(A, C, _e, x), y !== null ? (a2 = y[0], y.payload !== void 0 && (u = y.payload)) : a2 = null) : (this.updateLastIndex(lt, C), a2 = this.match(lt, e, C)), a2 && a2.length > l.length) {
                l = a2, c = u, Le = We;
                break;
              }
            }
          }
          break;
        }
      }
      if (l !== null) {
        if (d = l.length, h = Le.group, h !== void 0 && (f = Le.tokenTypeIdx, m = this.createTokenInstance(l, C, f, Le.tokenType, Fe, Ce, d), this.handlePayload(m, c), h === false ? F = this.addToken(_e, F, m) : x[h].push(m)), e = this.chopInput(e, d), C = C + d, Ce = this.computeNewColumn(Ce, d), T === true && Le.canLineTerminator === true) {
          let Re = 0, Ve, Je;
          E.lastIndex = 0;
          do
            Ve = E.test(l), Ve === true && (Je = E.lastIndex - 1, Re++);
          while (Ve === true);
          Re !== 0 && (Fe = Fe + Re, Ce = d - Je, this.updateTokenEndLineColumnLocation(m, h, Je, Re, Fe, Ce, d));
        }
        this.handleModes(Le, su, sa, m);
      } else {
        const Re = C, Ve = Fe, Je = Ce;
        let We = aa === false;
        for (; We === false && C < R; )
          for (e = this.chopInput(e, 1), C++, i = 0; i < I2; i++) {
            const lt = O[i], Ei = lt.pattern, oa = lt.short;
            if (oa !== false ? A.charCodeAt(C) === oa && (We = true) : lt.isCustom === true ? We = Ei.exec(A, C, _e, x) !== null : (this.updateLastIndex(Ei, C), We = Ei.exec(e) !== null), We === true)
              break;
          }
        if (g = C - Re, Ce = this.computeNewColumn(Ce, g), v = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(A, Re, g, Ve, Je), ye.push({
          offset: Re,
          line: Ve,
          column: Je,
          length: g,
          message: v
        }), aa === false)
          break;
      }
    }
    return this.hasCustom || (_e.length = F), {
      tokens: _e,
      groups: x,
      errors: ye
    };
  }
  handleModes(e, t, r, i) {
    if (e.pop === true) {
      const s = e.push;
      t(i), s !== void 0 && r.call(this, s);
    } else
      e.push !== void 0 && r.call(this, e.push);
  }
  chopInput(e, t) {
    return e.substring(t);
  }
  updateLastIndex(e, t) {
    e.lastIndex = t;
  }
  // TODO: decrease this under 600 characters? inspect stripping comments option in TSC compiler
  updateTokenEndLineColumnLocation(e, t, r, i, s, a2, o) {
    let l, c;
    t !== void 0 && (l = r === o - 1, c = l ? -1 : 0, i === 1 && l === true || (e.endLine = s + c, e.endColumn = a2 - 1 + -c));
  }
  computeNewColumn(e, t) {
    return e + t;
  }
  createOffsetOnlyToken(e, t, r, i) {
    return {
      image: e,
      startOffset: t,
      tokenTypeIdx: r,
      tokenType: i
    };
  }
  createStartOnlyToken(e, t, r, i, s, a2) {
    return {
      image: e,
      startOffset: t,
      startLine: s,
      startColumn: a2,
      tokenTypeIdx: r,
      tokenType: i
    };
  }
  createFullToken(e, t, r, i, s, a2, o) {
    return {
      image: e,
      startOffset: t,
      endOffset: t + o - 1,
      startLine: s,
      endLine: s,
      startColumn: a2,
      endColumn: a2 + o - 1,
      tokenTypeIdx: r,
      tokenType: i
    };
  }
  addTokenUsingPush(e, t, r) {
    return e.push(r), t;
  }
  addTokenUsingMemberAccess(e, t, r) {
    return e[t] = r, t++, t;
  }
  handlePayloadNoCustom(e, t) {
  }
  handlePayloadWithCustom(e, t) {
    t !== null && (e.payload = t);
  }
  matchWithTest(e, t, r) {
    return e.test(t) === true ? t.substring(r, e.lastIndex) : null;
  }
  matchWithExec(e, t) {
    const r = e.exec(t);
    return r !== null ? r[0] : null;
  }
}
de.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
de.NA = /NOT_APPLICABLE/;
function wt(n) {
  return nc(n) ? n.LABEL : n.name;
}
function nc(n) {
  return fe(n.LABEL) && n.LABEL !== "";
}
const Bf = "parent", xa = "categories", Sa = "label", Ia = "group", Ca = "push_mode", $a = "pop_mode", Na = "longer_alt", wa = "line_breaks", _a = "start_chars_hint";
function rc(n) {
  return Vf(n);
}
function Vf(n) {
  const e = n.pattern, t = {};
  if (t.name = n.name, Et$1(e) || (t.PATTERN = e), mn$1(n, Bf))
    throw `The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;
  return mn$1(n, xa) && (t.CATEGORIES = n[xa]), tr([t]), mn$1(n, Sa) && (t.LABEL = n[Sa]), mn$1(n, Ia) && (t.GROUP = n[Ia]), mn$1(n, $a) && (t.POP_MODE = n[$a]), mn$1(n, Ca) && (t.PUSH_MODE = n[Ca]), mn$1(n, Na) && (t.LONGER_ALT = n[Na]), mn$1(n, wa) && (t.LINE_BREAKS = n[wa]), mn$1(n, _a) && (t.START_CHARS_HINT = n[_a]), t;
}
const nt = rc({ name: "EOF", pattern: de.NA });
tr([nt]);
function Hs(n, e, t, r, i, s, a2, o) {
  return {
    image: e,
    startOffset: t,
    endOffset: r,
    startLine: i,
    endLine: s,
    startColumn: a2,
    endColumn: o,
    tokenTypeIdx: n.tokenTypeIdx,
    tokenType: n
  };
}
function ic(n, e) {
  return er(n, e);
}
const $t = {
  buildMismatchTokenMessage({ expected: n, actual: e, previous: t, ruleName: r }) {
    return `Expecting ${nc(n) ? `--> ${wt(n)} <--` : `token of type --> ${n.name} <--`} but found --> '${e.image}' <--`;
  },
  buildNotAllInputParsedMessage({ firstRedundant: n, ruleName: e }) {
    return "Redundant input, expecting EOF but found: " + n.image;
  },
  buildNoViableAltMessage({ expectedPathsPerAlt: n, actual: e, previous: t, customUserDescription: r, ruleName: i }) {
    const s = "Expecting: ", o = `
but found: '` + Pe(e).image + "'";
    if (r)
      return s + r + o;
    {
      const l = It$1(n, (h, f) => h.concat(f), []), c = gn$1(l, (h) => `[${gn$1(h, (f) => wt(f)).join(", ")}]`), d = `one of these possible Token sequences:
${gn$1(c, (h, f) => `  ${f + 1}. ${h}`).join(`
`)}`;
      return s + d + o;
    }
  },
  buildEarlyExitMessage({ expectedIterationPaths: n, actual: e, customUserDescription: t, ruleName: r }) {
    const i = "Expecting: ", a2 = `
but found: '` + Pe(e).image + "'";
    if (t)
      return i + t + a2;
    {
      const l = `expecting at least one iteration which starts with one of these possible Token sequences::
  <${gn$1(n, (c) => `[${gn$1(c, (u) => wt(u)).join(",")}]`).join(" ,")}>`;
      return i + l + a2;
    }
  }
};
Object.freeze($t);
const Wf = {
  buildRuleNotFoundError(n, e) {
    return "Invalid grammar, reference to a rule which is not defined: ->" + e.nonTerminalName + `<-
inside top level rule: ->` + n.name + "<-";
  }
}, dt = {
  buildDuplicateFoundError(n, e) {
    function t(u) {
      return u instanceof G ? u.terminalType.name : u instanceof le ? u.nonTerminalName : "";
    }
    const r = n.name, i = Pe(e), s = i.idx, a2 = Ge(i), o = t(i), l = s > 0;
    let c = `->${a2}${l ? s : ""}<- ${o ? `with argument: ->${o}<-` : ""}
                  appears more than once (${e.length} times) in the top level rule: ->${r}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
    return c = c.replace(/[ \t]+/g, " "), c = c.replace(/\s\s+/g, `
`), c;
  },
  buildNamespaceConflictError(n) {
    return `Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${n.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;
  },
  buildAlternationPrefixAmbiguityError(n) {
    const e = gn$1(n.prefixPath, (i) => wt(i)).join(", "), t = n.alternation.idx === 0 ? "" : n.alternation.idx;
    return `Ambiguous alternatives: <${n.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${t}> inside <${n.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
  },
  buildAlternationAmbiguityError(n) {
    const e = gn$1(n.prefixPath, (i) => wt(i)).join(", "), t = n.alternation.idx === 0 ? "" : n.alternation.idx;
    let r = `Ambiguous Alternatives Detected: <${n.ambiguityIndices.join(" ,")}> in <OR${t}> inside <${n.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
    return r = r + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, r;
  },
  buildEmptyRepetitionError(n) {
    let e = Ge(n.repetition);
    return n.repetition.idx !== 0 && (e += n.repetition.idx), `The repetition <${e}> within Rule <${n.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildTokenNameError(n) {
    return "deprecated";
  },
  buildEmptyAlternationError(n) {
    return `Ambiguous empty alternative: <${n.emptyChoiceIdx + 1}> in <OR${n.alternation.idx}> inside <${n.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`;
  },
  buildTooManyAlternativesError(n) {
    return `An Alternation cannot have more than 256 alternatives:
<OR${n.alternation.idx}> inside <${n.topLevelRule.name}> Rule.
 has ${n.alternation.definition.length + 1} alternatives.`;
  },
  buildLeftRecursionError(n) {
    const e = n.topLevelRule.name, t = gn$1(n.leftRecursionPath, (s) => s.name), r = `${e} --> ${t.concat([e]).join(" --> ")}`;
    return `Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${r}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildInvalidRuleNameError(n) {
    return "deprecated";
  },
  buildDuplicateRuleNameError(n) {
    let e;
    return n.topLevelRule instanceof en ? e = n.topLevelRule.name : e = n.topLevelRule, `Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${n.grammarName}<-`;
  }
};
function Kf(n, e) {
  const t = new Hf(n, e);
  return t.resolveRefs(), t.errors;
}
class Hf extends tn {
  constructor(e, t) {
    super(), this.nameToTopRule = e, this.errMsgProvider = t, this.errors = [];
  }
  resolveRefs() {
    $t$1(St(this.nameToTopRule), (e) => {
      this.currTopLevel = e, e.accept(this);
    });
  }
  visitNonTerminal(e) {
    const t = this.nameToTopRule[e.nonTerminalName];
    if (t)
      e.referencedRule = t;
    else {
      const r = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, e);
      this.errors.push({
        message: r,
        type: ce.UNRESOLVED_SUBRULE_REF,
        ruleName: this.currTopLevel.name,
        unresolvedRefName: e.nonTerminalName
      });
    }
  }
}
class jf extends hi {
  constructor(e, t) {
    super(), this.topProd = e, this.path = t, this.possibleTokTypes = [], this.nextProductionName = "", this.nextProductionOccurrence = 0, this.found = false, this.isAtEndOfPath = false;
  }
  startWalking() {
    if (this.found = false, this.path.ruleStack[0] !== this.topProd.name)
      throw Error("The path does not start with the walker's top Rule!");
    return this.ruleStack = a(this.path.ruleStack).reverse(), this.occurrenceStack = a(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
  }
  walk(e, t = []) {
    this.found || super.walk(e, t);
  }
  walkProdRef(e, t, r) {
    if (e.referencedRule.name === this.nextProductionName && e.idx === this.nextProductionOccurrence) {
      const i = t.concat(r);
      this.updateExpectedNext(), this.walk(e.referencedRule, i);
    }
  }
  updateExpectedNext() {
    mc$1(this.ruleStack) ? (this.nextProductionName = "", this.nextProductionOccurrence = 0, this.isAtEndOfPath = true) : (this.nextProductionName = this.ruleStack.pop(), this.nextProductionOccurrence = this.occurrenceStack.pop());
  }
}
class zf extends jf {
  constructor(e, t) {
    super(e, t), this.path = t, this.nextTerminalName = "", this.nextTerminalOccurrence = 0, this.nextTerminalName = this.path.lastTok.name, this.nextTerminalOccurrence = this.path.lastTokOccurrence;
  }
  walkTerminal(e, t, r) {
    if (this.isAtEndOfPath && e.terminalType.name === this.nextTerminalName && e.idx === this.nextTerminalOccurrence && !this.found) {
      const i = t.concat(r), s = new he({ definition: i });
      this.possibleTokTypes = Zn(s), this.found = true;
    }
  }
}
class mi extends hi {
  constructor(e, t) {
    super(), this.topRule = e, this.occurrence = t, this.result = {
      token: void 0,
      occurrence: void 0,
      isEndOfRule: void 0
    };
  }
  startWalking() {
    return this.walk(this.topRule), this.result;
  }
}
class qf extends mi {
  walkMany(e, t, r) {
    if (e.idx === this.occurrence) {
      const i = Pe(t.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof G && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkMany(e, t, r);
  }
}
class La extends mi {
  walkManySep(e, t, r) {
    if (e.idx === this.occurrence) {
      const i = Pe(t.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof G && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkManySep(e, t, r);
  }
}
class Yf extends mi {
  walkAtLeastOne(e, t, r) {
    if (e.idx === this.occurrence) {
      const i = Pe(t.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof G && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkAtLeastOne(e, t, r);
  }
}
class Oa extends mi {
  walkAtLeastOneSep(e, t, r) {
    if (e.idx === this.occurrence) {
      const i = Pe(t.concat(r));
      this.result.isEndOfRule = i === void 0, i instanceof G && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkAtLeastOneSep(e, t, r);
  }
}
function is(n, e, t = []) {
  t = a(t);
  let r = [], i = 0;
  function s(o) {
    return o.concat(Q(n, i + 1));
  }
  function a$1(o) {
    const l = is(s(o), e, t);
    return r.concat(l);
  }
  for (; t.length < e && i < n.length; ) {
    const o = n[i];
    if (o instanceof he)
      return a$1(o.definition);
    if (o instanceof le)
      return a$1(o.definition);
    if (o instanceof ne)
      r = a$1(o.definition);
    else if (o instanceof Se) {
      const l = o.definition.concat([
        new K({
          definition: o.definition
        })
      ]);
      return a$1(l);
    } else if (o instanceof Ie) {
      const l = [
        new he({ definition: o.definition }),
        new K({
          definition: [new G({ terminalType: o.separator })].concat(o.definition)
        })
      ];
      return a$1(l);
    } else if (o instanceof me) {
      const l = o.definition.concat([
        new K({
          definition: [new G({ terminalType: o.separator })].concat(o.definition)
        })
      ]);
      r = a$1(l);
    } else if (o instanceof K) {
      const l = o.definition.concat([
        new K({
          definition: o.definition
        })
      ]);
      r = a$1(l);
    } else {
      if (o instanceof ge)
        return $t$1(o.definition, (l) => {
          mc$1(l.definition) === false && (r = a$1(l.definition));
        }), r;
      if (o instanceof G)
        t.push(o.terminalType);
      else
        throw Error("non exhaustive match");
    }
    i++;
  }
  return r.push({
    partialPath: t,
    suffixDef: Q(n, i)
  }), r;
}
function sc(n, e, t, r) {
  const i = "EXIT_NONE_TERMINAL", s = [i], a$1 = "EXIT_ALTERNATIVE";
  let o = false;
  const l = e.length, c = l - r - 1, u = [], d = [];
  for (d.push({
    idx: -1,
    def: n,
    ruleStack: [],
    occurrenceStack: []
  }); !mc$1(d); ) {
    const h = d.pop();
    if (h === a$1) {
      o && un$1(d).idx <= c && d.pop();
      continue;
    }
    const f = h.def, m = h.idx, g = h.ruleStack, v = h.occurrenceStack;
    if (mc$1(f))
      continue;
    const y = f[0];
    if (y === i) {
      const A = {
        idx: m,
        def: Q(f),
        ruleStack: jn(g),
        occurrenceStack: jn(v)
      };
      d.push(A);
    } else if (y instanceof G)
      if (m < l - 1) {
        const A = m + 1, R = e[A];
        if (t(R, y.terminalType)) {
          const C = {
            idx: A,
            def: Q(f),
            ruleStack: g,
            occurrenceStack: v
          };
          d.push(C);
        }
      } else if (m === l - 1)
        u.push({
          nextTokenType: y.terminalType,
          nextTokenOccurrence: y.idx,
          ruleStack: g,
          occurrenceStack: v
        }), o = true;
      else
        throw Error("non exhaustive match");
    else if (y instanceof le) {
      const A = a(g);
      A.push(y.nonTerminalName);
      const R = a(v);
      R.push(y.idx);
      const C = {
        idx: m,
        def: y.definition.concat(s, Q(f)),
        ruleStack: A,
        occurrenceStack: R
      };
      d.push(C);
    } else if (y instanceof ne) {
      const A = {
        idx: m,
        def: Q(f),
        ruleStack: g,
        occurrenceStack: v
      };
      d.push(A), d.push(a$1);
      const R = {
        idx: m,
        def: y.definition.concat(Q(f)),
        ruleStack: g,
        occurrenceStack: v
      };
      d.push(R);
    } else if (y instanceof Se) {
      const A = new K({
        definition: y.definition,
        idx: y.idx
      }), R = y.definition.concat([A], Q(f)), C = {
        idx: m,
        def: R,
        ruleStack: g,
        occurrenceStack: v
      };
      d.push(C);
    } else if (y instanceof Ie) {
      const A = new G({
        terminalType: y.separator
      }), R = new K({
        definition: [A].concat(y.definition),
        idx: y.idx
      }), C = y.definition.concat([R], Q(f)), F = {
        idx: m,
        def: C,
        ruleStack: g,
        occurrenceStack: v
      };
      d.push(F);
    } else if (y instanceof me) {
      const A = {
        idx: m,
        def: Q(f),
        ruleStack: g,
        occurrenceStack: v
      };
      d.push(A), d.push(a$1);
      const R = new G({
        terminalType: y.separator
      }), C = new K({
        definition: [R].concat(y.definition),
        idx: y.idx
      }), F = y.definition.concat([C], Q(f)), ie = {
        idx: m,
        def: F,
        ruleStack: g,
        occurrenceStack: v
      };
      d.push(ie);
    } else if (y instanceof K) {
      const A = {
        idx: m,
        def: Q(f),
        ruleStack: g,
        occurrenceStack: v
      };
      d.push(A), d.push(a$1);
      const R = new K({
        definition: y.definition,
        idx: y.idx
      }), C = y.definition.concat([R], Q(f)), F = {
        idx: m,
        def: C,
        ruleStack: g,
        occurrenceStack: v
      };
      d.push(F);
    } else if (y instanceof ge)
      for (let A = y.definition.length - 1; A >= 0; A--) {
        const R = y.definition[A], C = {
          idx: m,
          def: R.definition.concat(Q(f)),
          ruleStack: g,
          occurrenceStack: v
        };
        d.push(C), d.push(a$1);
      }
    else if (y instanceof he)
      d.push({
        idx: m,
        def: y.definition.concat(Q(f)),
        ruleStack: g,
        occurrenceStack: v
      });
    else if (y instanceof en)
      d.push(Xf(y, m, g, v));
    else
      throw Error("non exhaustive match");
  }
  return u;
}
function Xf(n, e, t, r) {
  const i = a(t);
  i.push(n.name);
  const s = a(r);
  return s.push(1), {
    idx: e,
    def: n.definition,
    ruleStack: i,
    occurrenceStack: s
  };
}
var B;
(function(n) {
  n[n.OPTION = 0] = "OPTION", n[n.REPETITION = 1] = "REPETITION", n[n.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY", n[n.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR", n[n.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR", n[n.ALTERNATION = 5] = "ALTERNATION";
})(B || (B = {}));
function js(n) {
  if (n instanceof ne || n === "Option")
    return B.OPTION;
  if (n instanceof K || n === "Repetition")
    return B.REPETITION;
  if (n instanceof Se || n === "RepetitionMandatory")
    return B.REPETITION_MANDATORY;
  if (n instanceof Ie || n === "RepetitionMandatoryWithSeparator")
    return B.REPETITION_MANDATORY_WITH_SEPARATOR;
  if (n instanceof me || n === "RepetitionWithSeparator")
    return B.REPETITION_WITH_SEPARATOR;
  if (n instanceof ge || n === "Alternation")
    return B.ALTERNATION;
  throw Error("non exhaustive match");
}
function ba(n) {
  const { occurrence: e, rule: t, prodType: r, maxLookahead: i } = n, s = js(r);
  return s === B.ALTERNATION ? gi(e, t, i) : yi(e, t, s, i);
}
function Jf(n, e, t, r, i, s) {
  const a2 = gi(n, e, t), o = lc(a2) ? Kr : er;
  return s(a2, r, o, i);
}
function Qf(n, e, t, r, i, s) {
  const a2 = yi(n, e, i, t), o = lc(a2) ? Kr : er;
  return s(a2[0], o, r);
}
function Zf(n, e, t, r) {
  const i = n.length, s = be(n, (a2) => be(a2, (o) => o.length === 1));
  if (e)
    return function(a2) {
      const o = gn$1(a2, (l) => l.GATE);
      for (let l = 0; l < i; l++) {
        const c = n[l], u = c.length, d = o[l];
        if (!(d !== void 0 && d.call(this) === false))
          e:
            for (let h = 0; h < u; h++) {
              const f = c[h], m = f.length;
              for (let g = 0; g < m; g++) {
                const v = this.LA(g + 1);
                if (t(v, f[g]) === false)
                  continue e;
              }
              return l;
            }
      }
    };
  if (s && !r) {
    const a2 = gn$1(n, (l) => fn$1(l)), o = It$1(a2, (l, c, u) => ($t$1(c, (d) => {
      mn$1(l, d.tokenTypeIdx) || (l[d.tokenTypeIdx] = u), $t$1(d.categoryMatches, (h) => {
        mn$1(l, h) || (l[h] = u);
      });
    }), l), {});
    return function() {
      const l = this.LA(1);
      return o[l.tokenTypeIdx];
    };
  } else
    return function() {
      for (let a2 = 0; a2 < i; a2++) {
        const o = n[a2], l = o.length;
        e:
          for (let c = 0; c < l; c++) {
            const u = o[c], d = u.length;
            for (let h = 0; h < d; h++) {
              const f = this.LA(h + 1);
              if (t(f, u[h]) === false)
                continue e;
            }
            return a2;
          }
      }
    };
}
function eh(n, e, t) {
  const r = be(n, (s) => s.length === 1), i = n.length;
  if (r && !t) {
    const s = fn$1(n);
    if (s.length === 1 && mc$1(s[0].categoryMatches)) {
      const o = s[0].tokenTypeIdx;
      return function() {
        return this.LA(1).tokenTypeIdx === o;
      };
    } else {
      const a2 = It$1(s, (o, l, c) => (o[l.tokenTypeIdx] = true, $t$1(l.categoryMatches, (u) => {
        o[u] = true;
      }), o), []);
      return function() {
        const o = this.LA(1);
        return a2[o.tokenTypeIdx] === true;
      };
    }
  } else
    return function() {
      e:
        for (let s = 0; s < i; s++) {
          const a2 = n[s], o = a2.length;
          for (let l = 0; l < o; l++) {
            const c = this.LA(l + 1);
            if (e(c, a2[l]) === false)
              continue e;
          }
          return true;
        }
      return false;
    };
}
class th extends hi {
  constructor(e, t, r) {
    super(), this.topProd = e, this.targetOccurrence = t, this.targetProdType = r;
  }
  startWalking() {
    return this.walk(this.topProd), this.restDef;
  }
  checkIsTarget(e, t, r, i) {
    return e.idx === this.targetOccurrence && this.targetProdType === t ? (this.restDef = r.concat(i), true) : false;
  }
  walkOption(e, t, r) {
    this.checkIsTarget(e, B.OPTION, t, r) || super.walkOption(e, t, r);
  }
  walkAtLeastOne(e, t, r) {
    this.checkIsTarget(e, B.REPETITION_MANDATORY, t, r) || super.walkOption(e, t, r);
  }
  walkAtLeastOneSep(e, t, r) {
    this.checkIsTarget(e, B.REPETITION_MANDATORY_WITH_SEPARATOR, t, r) || super.walkOption(e, t, r);
  }
  walkMany(e, t, r) {
    this.checkIsTarget(e, B.REPETITION, t, r) || super.walkOption(e, t, r);
  }
  walkManySep(e, t, r) {
    this.checkIsTarget(e, B.REPETITION_WITH_SEPARATOR, t, r) || super.walkOption(e, t, r);
  }
}
class ac extends tn {
  constructor(e, t, r) {
    super(), this.targetOccurrence = e, this.targetProdType = t, this.targetRef = r, this.result = [];
  }
  checkIsTarget(e, t) {
    e.idx === this.targetOccurrence && this.targetProdType === t && (this.targetRef === void 0 || e === this.targetRef) && (this.result = e.definition);
  }
  visitOption(e) {
    this.checkIsTarget(e, B.OPTION);
  }
  visitRepetition(e) {
    this.checkIsTarget(e, B.REPETITION);
  }
  visitRepetitionMandatory(e) {
    this.checkIsTarget(e, B.REPETITION_MANDATORY);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.checkIsTarget(e, B.REPETITION_MANDATORY_WITH_SEPARATOR);
  }
  visitRepetitionWithSeparator(e) {
    this.checkIsTarget(e, B.REPETITION_WITH_SEPARATOR);
  }
  visitAlternation(e) {
    this.checkIsTarget(e, B.ALTERNATION);
  }
}
function Pa(n) {
  const e = new Array(n);
  for (let t = 0; t < n; t++)
    e[t] = [];
  return e;
}
function Li(n) {
  let e = [""];
  for (let t = 0; t < n.length; t++) {
    const r = n[t], i = [];
    for (let s = 0; s < e.length; s++) {
      const a2 = e[s];
      i.push(a2 + "_" + r.tokenTypeIdx);
      for (let o = 0; o < r.categoryMatches.length; o++) {
        const l = "_" + r.categoryMatches[o];
        i.push(a2 + l);
      }
    }
    e = i;
  }
  return e;
}
function nh(n, e, t) {
  for (let r = 0; r < n.length; r++) {
    if (r === t)
      continue;
    const i = n[r];
    for (let s = 0; s < e.length; s++) {
      const a2 = e[s];
      if (i[a2] === true)
        return false;
    }
  }
  return true;
}
function oc(n, e) {
  const t = gn$1(n, (a2) => is([a2], 1)), r = Pa(t.length), i = gn$1(t, (a2) => {
    const o = {};
    return $t$1(a2, (l) => {
      const c = Li(l.partialPath);
      $t$1(c, (u) => {
        o[u] = true;
      });
    }), o;
  });
  let s = t;
  for (let a2 = 1; a2 <= e; a2++) {
    const o = s;
    s = Pa(o.length);
    for (let l = 0; l < o.length; l++) {
      const c = o[l];
      for (let u = 0; u < c.length; u++) {
        const d = c[u].partialPath, h = c[u].suffixDef, f = Li(d);
        if (nh(i, f, l) || mc$1(h) || d.length === e) {
          const g = r[l];
          if (ss(g, d) === false) {
            g.push(d);
            for (let v = 0; v < f.length; v++) {
              const y = f[v];
              i[l][y] = true;
            }
          }
        } else {
          const g = is(h, a2 + 1, d);
          s[l] = s[l].concat(g), $t$1(g, (v) => {
            const y = Li(v.partialPath);
            $t$1(y, (A) => {
              i[l][A] = true;
            });
          });
        }
      }
    }
  }
  return r;
}
function gi(n, e, t, r) {
  const i = new ac(n, B.ALTERNATION, r);
  return e.accept(i), oc(i.result, t);
}
function yi(n, e, t, r) {
  const i = new ac(n, t);
  e.accept(i);
  const s = i.result, o = new th(e, n, t).startWalking(), l = new he({ definition: s }), c = new he({ definition: o });
  return oc([l, c], r);
}
function ss(n, e) {
  e:
    for (let t = 0; t < n.length; t++) {
      const r = n[t];
      if (r.length === e.length) {
        for (let i = 0; i < r.length; i++) {
          const s = e[i], a2 = r[i];
          if ((s === a2 || a2.categoryMatchesMap[s.tokenTypeIdx] !== void 0) === false)
            continue e;
        }
        return true;
      }
    }
  return false;
}
function rh(n, e) {
  return n.length < e.length && be(n, (t, r) => {
    const i = e[r];
    return t === i || i.categoryMatchesMap[t.tokenTypeIdx];
  });
}
function lc(n) {
  return be(n, (e) => be(e, (t) => be(t, (r) => mc$1(r.categoryMatches))));
}
function ih(n) {
  const e = n.lookaheadStrategy.validate({
    rules: n.rules,
    tokenTypes: n.tokenTypes,
    grammarName: n.grammarName
  });
  return gn$1(e, (t) => Object.assign({ type: ce.CUSTOM_LOOKAHEAD_VALIDATION }, t));
}
function sh(n, e, t, r) {
  const i = Ee(n, (l) => ah(l, t)), s = Th(n, e, t), a2 = Ee(n, (l) => ph(l, t)), o = Ee(n, (l) => ch(l, n, r, t));
  return i.concat(s, a2, o);
}
function ah(n, e) {
  const t = new lh();
  n.accept(t);
  const r = t.allProductions, i = Du(r, oh), s = Me(i, (o) => o.length > 1);
  return gn$1(St(s), (o) => {
    const l = Pe(o), c = e.buildDuplicateFoundError(n, o), u = Ge(l), d = {
      message: c,
      type: ce.DUPLICATE_PRODUCTIONS,
      ruleName: n.name,
      dslName: u,
      occurrence: l.idx
    }, h = cc(l);
    return h && (d.parameter = h), d;
  });
}
function oh(n) {
  return `${Ge(n)}_#_${n.idx}_#_${cc(n)}`;
}
function cc(n) {
  return n instanceof G ? n.terminalType.name : n instanceof le ? n.nonTerminalName : "";
}
class lh extends tn {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitNonTerminal(e) {
    this.allProductions.push(e);
  }
  visitOption(e) {
    this.allProductions.push(e);
  }
  visitRepetitionWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatory(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetition(e) {
    this.allProductions.push(e);
  }
  visitAlternation(e) {
    this.allProductions.push(e);
  }
  visitTerminal(e) {
    this.allProductions.push(e);
  }
}
function ch(n, e, t, r) {
  const i = [];
  if (It$1(e, (a2, o) => o.name === n.name ? a2 + 1 : a2, 0) > 1) {
    const a2 = r.buildDuplicateRuleNameError({
      topLevelRule: n,
      grammarName: t
    });
    i.push({
      message: a2,
      type: ce.DUPLICATE_RULE_NAME,
      ruleName: n.name
    });
  }
  return i;
}
function uh(n, e, t) {
  const r = [];
  let i;
  return ue(e, n) || (i = `Invalid rule override, rule: ->${n}<- cannot be overridden in the grammar: ->${t}<-as it is not defined in any of the super grammars `, r.push({
    message: i,
    type: ce.INVALID_RULE_OVERRIDE,
    ruleName: n
  })), r;
}
function uc(n, e, t, r = []) {
  const i = [], s = $r(e.definition);
  if (mc$1(s))
    return [];
  {
    const a$1 = n.name;
    ue(s, n) && i.push({
      message: t.buildLeftRecursionError({
        topLevelRule: n,
        leftRecursionPath: r
      }),
      type: ce.LEFT_RECURSION,
      ruleName: a$1
    });
    const l = oi(s, r.concat([n])), c = Ee(l, (u) => {
      const d = a(r);
      return d.push(u), uc(n, u, t, d);
    });
    return i.concat(c);
  }
}
function $r(n) {
  let e = [];
  if (mc$1(n))
    return e;
  const t = Pe(n);
  if (t instanceof le)
    e.push(t.referencedRule);
  else if (t instanceof he || t instanceof ne || t instanceof Se || t instanceof Ie || t instanceof me || t instanceof K)
    e = e.concat($r(t.definition));
  else if (t instanceof ge)
    e = fn$1(gn$1(t.definition, (s) => $r(s.definition)));
  else if (!(t instanceof G))
    throw Error("non exhaustive match");
  const r = Vr(t), i = n.length > 1;
  if (r && i) {
    const s = Q(n);
    return e.concat($r(s));
  } else
    return e;
}
class zs extends tn {
  constructor() {
    super(...arguments), this.alternations = [];
  }
  visitAlternation(e) {
    this.alternations.push(e);
  }
}
function dh(n, e) {
  const t = new zs();
  n.accept(t);
  const r = t.alternations;
  return Ee(r, (s) => {
    const a2 = jn(s.definition);
    return Ee(a2, (o, l) => {
      const c = sc([o], [], er, 1);
      return mc$1(c) ? [
        {
          message: e.buildEmptyAlternationError({
            topLevelRule: n,
            alternation: s,
            emptyChoiceIdx: l
          }),
          type: ce.NONE_LAST_EMPTY_ALT,
          ruleName: n.name,
          occurrence: s.idx,
          alternative: l + 1
        }
      ] : [];
    });
  });
}
function fh(n, e, t) {
  const r = new zs();
  n.accept(r);
  let i = r.alternations;
  return i = li(i, (a2) => a2.ignoreAmbiguities === true), Ee(i, (a2) => {
    const o = a2.idx, l = a2.maxLookahead || e, c = gi(o, n, l, a2), u = gh(c, a2, n, t), d = yh(c, a2, n, t);
    return u.concat(d);
  });
}
class hh extends tn {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitRepetitionWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatory(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetition(e) {
    this.allProductions.push(e);
  }
}
function ph(n, e) {
  const t = new zs();
  n.accept(t);
  const r = t.alternations;
  return Ee(r, (s) => s.definition.length > 255 ? [
    {
      message: e.buildTooManyAlternativesError({
        topLevelRule: n,
        alternation: s
      }),
      type: ce.TOO_MANY_ALTS,
      ruleName: n.name,
      occurrence: s.idx
    }
  ] : []);
}
function mh(n, e, t) {
  const r = [];
  return $t$1(n, (i) => {
    const s = new hh();
    i.accept(s);
    const a2 = s.allProductions;
    $t$1(a2, (o) => {
      const l = js(o), c = o.maxLookahead || e, u = o.idx, h = yi(u, i, l, c)[0];
      if (mc$1(fn$1(h))) {
        const f = t.buildEmptyRepetitionError({
          topLevelRule: i,
          repetition: o
        });
        r.push({
          message: f,
          type: ce.NO_NON_EMPTY_LOOKAHEAD,
          ruleName: i.name
        });
      }
    });
  }), r;
}
function gh(n, e, t, r) {
  const i = [], s = It$1(n, (o, l, c) => (e.definition[c].ignoreAmbiguities === true || $t$1(l, (u) => {
    const d = [c];
    $t$1(n, (h, f) => {
      c !== f && ss(h, u) && // ignore (skip) ambiguities with this "other" alternative
      e.definition[f].ignoreAmbiguities !== true && d.push(f);
    }), d.length > 1 && !ss(i, u) && (i.push(u), o.push({
      alts: d,
      path: u
    }));
  }), o), []);
  return gn$1(s, (o) => {
    const l = gn$1(o.alts, (u) => u + 1);
    return {
      message: r.buildAlternationAmbiguityError({
        topLevelRule: t,
        alternation: e,
        ambiguityIndices: l,
        prefixPath: o.path
      }),
      type: ce.AMBIGUOUS_ALTS,
      ruleName: t.name,
      occurrence: e.idx,
      alternatives: o.alts
    };
  });
}
function yh(n, e, t, r) {
  const i = It$1(n, (a2, o, l) => {
    const c = gn$1(o, (u) => ({ idx: l, path: u }));
    return a2.concat(c);
  }, []);
  return Xn(Ee(i, (a2) => {
    if (e.definition[a2.idx].ignoreAmbiguities === true)
      return [];
    const l = a2.idx, c = a2.path, u = _t$1(i, (h) => (
      // ignore (skip) ambiguities with this "other" alternative
      e.definition[h.idx].ignoreAmbiguities !== true && h.idx < l && // checking for strict prefix because identical lookaheads
      // will be be detected using a different validation.
      rh(h.path, c)
    ));
    return gn$1(u, (h) => {
      const f = [h.idx + 1, l + 1], m = e.idx === 0 ? "" : e.idx;
      return {
        message: r.buildAlternationPrefixAmbiguityError({
          topLevelRule: t,
          alternation: e,
          ambiguityIndices: f,
          prefixPath: h.path
        }),
        type: ce.AMBIGUOUS_PREFIX_ALTS,
        ruleName: t.name,
        occurrence: m,
        alternatives: f
      };
    });
  }));
}
function Th(n, e, t) {
  const r = [], i = gn$1(e, (s) => s.name);
  return $t$1(n, (s) => {
    const a2 = s.name;
    if (ue(i, a2)) {
      const o = t.buildNamespaceConflictError(s);
      r.push({
        message: o,
        type: ce.CONFLICT_TOKENS_RULES_NAMESPACE,
        ruleName: a2
      });
    }
  }), r;
}
function Rh(n) {
  const e = dn$1(n, {
    errMsgProvider: Wf
  }), t = {};
  return $t$1(n.rules, (r) => {
    t[r.name] = r;
  }), Kf(t, e.errMsgProvider);
}
function vh(n) {
  return n = dn$1(n, {
    errMsgProvider: dt
  }), sh(n.rules, n.tokenTypes, n.errMsgProvider, n.grammarName);
}
const dc = "MismatchedTokenException", fc = "NoViableAltException", hc = "EarlyExitException", pc = "NotAllInputParsedException", mc = [
  dc,
  fc,
  hc,
  pc
];
Object.freeze(mc);
function Hr(n) {
  return ue(mc, n.name);
}
class Ti extends Error {
  constructor(e, t) {
    super(e), this.token = t, this.resyncedTokens = [], Object.setPrototypeOf(this, new.target.prototype), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}
class gc extends Ti {
  constructor(e, t, r) {
    super(e, t), this.previousToken = r, this.name = dc;
  }
}
class Ah extends Ti {
  constructor(e, t, r) {
    super(e, t), this.previousToken = r, this.name = fc;
  }
}
class Eh extends Ti {
  constructor(e, t) {
    super(e, t), this.name = pc;
  }
}
class kh extends Ti {
  constructor(e, t, r) {
    super(e, t), this.previousToken = r, this.name = hc;
  }
}
const Oi = {}, yc = "InRuleRecoveryException";
class xh extends Error {
  constructor(e) {
    super(e), this.name = yc;
  }
}
class Sh {
  initRecoverable(e) {
    this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = mn$1(e, "recoveryEnabled") ? e.recoveryEnabled : Xe.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = Ih);
  }
  getTokenToInsert(e) {
    const t = Hs(e, "", NaN, NaN, NaN, NaN, NaN, NaN);
    return t.isInsertedInRecovery = true, t;
  }
  canTokenTypeBeInsertedInRecovery(e) {
    return true;
  }
  canTokenTypeBeDeletedInRecovery(e) {
    return true;
  }
  tryInRepetitionRecovery(e, t, r, i) {
    const s = this.findReSyncTokenType(), a2 = this.exportLexerState(), o = [];
    let l = false;
    const c = this.LA(1);
    let u = this.LA(1);
    const d = () => {
      const h = this.LA(0), f = this.errorMessageProvider.buildMismatchTokenMessage({
        expected: i,
        actual: c,
        previous: h,
        ruleName: this.getCurrRuleFullName()
      }), m = new gc(f, c, this.LA(0));
      m.resyncedTokens = jn(o), this.SAVE_ERROR(m);
    };
    for (; !l; )
      if (this.tokenMatcher(u, i)) {
        d();
        return;
      } else if (r.call(this)) {
        d(), e.apply(this, t);
        return;
      } else
        this.tokenMatcher(u, s) ? l = true : (u = this.SKIP_TOKEN(), this.addToResyncTokens(u, o));
    this.importLexerState(a2);
  }
  shouldInRepetitionRecoveryBeTried(e, t, r) {
    return !(r === false || this.tokenMatcher(this.LA(1), e) || this.isBackTracking() || this.canPerformInRuleRecovery(e, this.getFollowsForInRuleRecovery(e, t)));
  }
  // Error Recovery functionality
  getFollowsForInRuleRecovery(e, t) {
    const r = this.getCurrentGrammarPath(e, t);
    return this.getNextPossibleTokenTypes(r);
  }
  tryInRuleRecovery(e, t) {
    if (this.canRecoverWithSingleTokenInsertion(e, t))
      return this.getTokenToInsert(e);
    if (this.canRecoverWithSingleTokenDeletion(e)) {
      const r = this.SKIP_TOKEN();
      return this.consumeToken(), r;
    }
    throw new xh("sad sad panda");
  }
  canPerformInRuleRecovery(e, t) {
    return this.canRecoverWithSingleTokenInsertion(e, t) || this.canRecoverWithSingleTokenDeletion(e);
  }
  canRecoverWithSingleTokenInsertion(e, t) {
    if (!this.canTokenTypeBeInsertedInRecovery(e) || mc$1(t))
      return false;
    const r = this.LA(1);
    return hn$1(t, (s) => this.tokenMatcher(r, s)) !== void 0;
  }
  canRecoverWithSingleTokenDeletion(e) {
    return this.canTokenTypeBeDeletedInRecovery(e) ? this.tokenMatcher(this.LA(2), e) : false;
  }
  isInCurrentRuleReSyncSet(e) {
    const t = this.getCurrFollowKey(), r = this.getFollowSetFromFollowKey(t);
    return ue(r, e);
  }
  findReSyncTokenType() {
    const e = this.flattenFollowSet();
    let t = this.LA(1), r = 2;
    for (; ; ) {
      const i = hn$1(e, (s) => ic(t, s));
      if (i !== void 0)
        return i;
      t = this.LA(r), r++;
    }
  }
  getCurrFollowKey() {
    if (this.RULE_STACK.length === 1)
      return Oi;
    const e = this.getLastExplicitRuleShortName(), t = this.getLastExplicitRuleOccurrenceIndex(), r = this.getPreviousExplicitRuleShortName();
    return {
      ruleName: this.shortRuleNameToFullName(e),
      idxInCallingRule: t,
      inRule: this.shortRuleNameToFullName(r)
    };
  }
  buildFullFollowKeyStack() {
    const e = this.RULE_STACK, t = this.RULE_OCCURRENCE_STACK;
    return gn$1(e, (r, i) => i === 0 ? Oi : {
      ruleName: this.shortRuleNameToFullName(r),
      idxInCallingRule: t[i],
      inRule: this.shortRuleNameToFullName(e[i - 1])
    });
  }
  flattenFollowSet() {
    const e = gn$1(this.buildFullFollowKeyStack(), (t) => this.getFollowSetFromFollowKey(t));
    return fn$1(e);
  }
  getFollowSetFromFollowKey(e) {
    if (e === Oi)
      return [nt];
    const t = e.ruleName + e.idxInCallingRule + zl + e.inRule;
    return this.resyncFollows[t];
  }
  // It does not make any sense to include a virtual EOF token in the list of resynced tokens
  // as EOF does not really exist and thus does not contain any useful information (line/column numbers)
  addToResyncTokens(e, t) {
    return this.tokenMatcher(e, nt) || t.push(e), t;
  }
  reSyncTo(e) {
    const t = [];
    let r = this.LA(1);
    for (; this.tokenMatcher(r, e) === false; )
      r = this.SKIP_TOKEN(), this.addToResyncTokens(r, t);
    return jn(t);
  }
  attemptInRepetitionRecovery(e, t, r, i, s, a2, o) {
  }
  getCurrentGrammarPath(e, t) {
    const r = this.getHumanReadableRuleStack(), i = a(this.RULE_OCCURRENCE_STACK);
    return {
      ruleStack: r,
      occurrenceStack: i,
      lastTok: e,
      lastTokOccurrence: t
    };
  }
  getHumanReadableRuleStack() {
    return gn$1(this.RULE_STACK, (e) => this.shortRuleNameToFullName(e));
  }
}
function Ih(n, e, t, r, i, s, a2) {
  const o = this.getKeyForAutomaticLookahead(r, i);
  let l = this.firstAfterRepMap[o];
  if (l === void 0) {
    const h = this.getCurrRuleFullName(), f = this.getGAstProductions()[h];
    l = new s(f, i).startWalking(), this.firstAfterRepMap[o] = l;
  }
  let c = l.token, u = l.occurrence;
  const d = l.isEndOfRule;
  this.RULE_STACK.length === 1 && d && c === void 0 && (c = nt, u = 1), !(c === void 0 || u === void 0) && this.shouldInRepetitionRecoveryBeTried(c, u, a2) && this.tryInRepetitionRecovery(n, e, t, c);
}
const Ch = 4, st = 8, Tc = 1 << st, Rc = 2 << st, as = 3 << st, os = 4 << st, ls = 5 << st, Nr = 6 << st;
function bi(n, e, t) {
  return t | e | n;
}
class qs {
  constructor(e) {
    var t;
    this.maxLookahead = (t = e == null ? void 0 : e.maxLookahead) !== null && t !== void 0 ? t : Xe.maxLookahead;
  }
  validate(e) {
    const t = this.validateNoLeftRecursion(e.rules);
    if (mc$1(t)) {
      const r = this.validateEmptyOrAlternatives(e.rules), i = this.validateAmbiguousAlternationAlternatives(e.rules, this.maxLookahead), s = this.validateSomeNonEmptyLookaheadPath(e.rules, this.maxLookahead);
      return [
        ...t,
        ...r,
        ...i,
        ...s
      ];
    }
    return t;
  }
  validateNoLeftRecursion(e) {
    return Ee(e, (t) => uc(t, t, dt));
  }
  validateEmptyOrAlternatives(e) {
    return Ee(e, (t) => dh(t, dt));
  }
  validateAmbiguousAlternationAlternatives(e, t) {
    return Ee(e, (r) => fh(r, t, dt));
  }
  validateSomeNonEmptyLookaheadPath(e, t) {
    return mh(e, t, dt);
  }
  buildLookaheadForAlternation(e) {
    return Jf(e.prodOccurrence, e.rule, e.maxLookahead, e.hasPredicates, e.dynamicTokensEnabled, Zf);
  }
  buildLookaheadForOptional(e) {
    return Qf(e.prodOccurrence, e.rule, e.maxLookahead, e.dynamicTokensEnabled, js(e.prodType), eh);
  }
}
class $h {
  initLooksAhead(e) {
    this.dynamicTokensEnabled = mn$1(e, "dynamicTokensEnabled") ? e.dynamicTokensEnabled : Xe.dynamicTokensEnabled, this.maxLookahead = mn$1(e, "maxLookahead") ? e.maxLookahead : Xe.maxLookahead, this.lookaheadStrategy = mn$1(e, "lookaheadStrategy") ? e.lookaheadStrategy : new qs({ maxLookahead: this.maxLookahead }), this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
  }
  preComputeLookaheadFunctions(e) {
    $t$1(e, (t) => {
      this.TRACE_INIT(`${t.name} Rule Lookahead`, () => {
        const { alternation: r, repetition: i, option: s, repetitionMandatory: a2, repetitionMandatoryWithSeparator: o, repetitionWithSeparator: l } = wh(t);
        $t$1(r, (c) => {
          const u = c.idx === 0 ? "" : c.idx;
          this.TRACE_INIT(`${Ge(c)}${u}`, () => {
            const d = this.lookaheadStrategy.buildLookaheadForAlternation({
              prodOccurrence: c.idx,
              rule: t,
              maxLookahead: c.maxLookahead || this.maxLookahead,
              hasPredicates: c.hasPredicates,
              dynamicTokensEnabled: this.dynamicTokensEnabled
            }), h = bi(this.fullRuleNameToShort[t.name], Tc, c.idx);
            this.setLaFuncCache(h, d);
          });
        }), $t$1(i, (c) => {
          this.computeLookaheadFunc(t, c.idx, as, "Repetition", c.maxLookahead, Ge(c));
        }), $t$1(s, (c) => {
          this.computeLookaheadFunc(t, c.idx, Rc, "Option", c.maxLookahead, Ge(c));
        }), $t$1(a2, (c) => {
          this.computeLookaheadFunc(t, c.idx, os, "RepetitionMandatory", c.maxLookahead, Ge(c));
        }), $t$1(o, (c) => {
          this.computeLookaheadFunc(t, c.idx, Nr, "RepetitionMandatoryWithSeparator", c.maxLookahead, Ge(c));
        }), $t$1(l, (c) => {
          this.computeLookaheadFunc(t, c.idx, ls, "RepetitionWithSeparator", c.maxLookahead, Ge(c));
        });
      });
    });
  }
  computeLookaheadFunc(e, t, r, i, s, a2) {
    this.TRACE_INIT(`${a2}${t === 0 ? "" : t}`, () => {
      const o = this.lookaheadStrategy.buildLookaheadForOptional({
        prodOccurrence: t,
        rule: e,
        maxLookahead: s || this.maxLookahead,
        dynamicTokensEnabled: this.dynamicTokensEnabled,
        prodType: i
      }), l = bi(this.fullRuleNameToShort[e.name], r, t);
      this.setLaFuncCache(l, o);
    });
  }
  // this actually returns a number, but it is always used as a string (object prop key)
  getKeyForAutomaticLookahead(e, t) {
    const r = this.getLastExplicitRuleShortName();
    return bi(r, e, t);
  }
  getLaFuncFromCache(e) {
    return this.lookAheadFuncsCache.get(e);
  }
  /* istanbul ignore next */
  setLaFuncCache(e, t) {
    this.lookAheadFuncsCache.set(e, t);
  }
}
class Nh extends tn {
  constructor() {
    super(...arguments), this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  reset() {
    this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  visitOption(e) {
    this.dslMethods.option.push(e);
  }
  visitRepetitionWithSeparator(e) {
    this.dslMethods.repetitionWithSeparator.push(e);
  }
  visitRepetitionMandatory(e) {
    this.dslMethods.repetitionMandatory.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.dslMethods.repetitionMandatoryWithSeparator.push(e);
  }
  visitRepetition(e) {
    this.dslMethods.repetition.push(e);
  }
  visitAlternation(e) {
    this.dslMethods.alternation.push(e);
  }
}
const yr = new Nh();
function wh(n) {
  yr.reset(), n.accept(yr);
  const e = yr.dslMethods;
  return yr.reset(), e;
}
function Ma(n, e) {
  isNaN(n.startOffset) === true ? (n.startOffset = e.startOffset, n.endOffset = e.endOffset) : n.endOffset < e.endOffset && (n.endOffset = e.endOffset);
}
function Da(n, e) {
  isNaN(n.startOffset) === true ? (n.startOffset = e.startOffset, n.startColumn = e.startColumn, n.startLine = e.startLine, n.endOffset = e.endOffset, n.endColumn = e.endColumn, n.endLine = e.endLine) : n.endOffset < e.endOffset && (n.endOffset = e.endOffset, n.endColumn = e.endColumn, n.endLine = e.endLine);
}
function _h(n, e, t) {
  n.children[t] === void 0 ? n.children[t] = [e] : n.children[t].push(e);
}
function Lh(n, e, t) {
  n.children[e] === void 0 ? n.children[e] = [t] : n.children[e].push(t);
}
const Oh = "name";
function vc(n, e) {
  Object.defineProperty(n, Oh, {
    enumerable: false,
    configurable: true,
    writable: false,
    value: e
  });
}
function bh(n, e) {
  const t = $(n), r = t.length;
  for (let i = 0; i < r; i++) {
    const s = t[i], a2 = n[s], o = a2.length;
    for (let l = 0; l < o; l++) {
      const c = a2[l];
      c.tokenTypeIdx === void 0 && this[c.name](c.children, e);
    }
  }
}
function Ph(n, e) {
  const t = function() {
  };
  vc(t, n + "BaseSemantics");
  const r = {
    visit: function(i, s) {
      if ($a$1(i) && (i = i[0]), !Et$1(i))
        return this[i.name](i.children, s);
    },
    validateVisitor: function() {
      const i = Dh(this, e);
      if (!mc$1(i)) {
        const s = gn$1(i, (a2) => a2.msg);
        throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${s.join(`

`).replace(/\n/g, `
	`)}`);
      }
    }
  };
  return t.prototype = r, t.prototype.constructor = t, t._RULE_NAMES = e, t;
}
function Mh(n, e, t) {
  const r = function() {
  };
  vc(r, n + "BaseSemanticsWithDefaults");
  const i = Object.create(t.prototype);
  return $t$1(e, (s) => {
    i[s] = bh;
  }), r.prototype = i, r.prototype.constructor = r, r;
}
var cs;
(function(n) {
  n[n.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD", n[n.MISSING_METHOD = 1] = "MISSING_METHOD";
})(cs || (cs = {}));
function Dh(n, e) {
  return Fh(n, e);
}
function Fh(n, e) {
  const t = _t$1(e, (i) => no$1(n[i]) === false), r = gn$1(t, (i) => ({
    msg: `Missing visitor method: <${i}> on ${n.constructor.name} CST Visitor.`,
    type: cs.MISSING_METHOD,
    methodName: i
  }));
  return Xn(r);
}
class Gh {
  initTreeBuilder(e) {
    if (this.CST_STACK = [], this.outputCst = e.outputCst, this.nodeLocationTracking = mn$1(e, "nodeLocationTracking") ? e.nodeLocationTracking : Xe.nodeLocationTracking, !this.outputCst)
      this.cstInvocationStateUpdate = Xn$1, this.cstFinallyStateUpdate = Xn$1, this.cstPostTerminal = Xn$1, this.cstPostNonTerminal = Xn$1, this.cstPostRule = Xn$1;
    else if (/full/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = Da, this.setNodeLocationFromNode = Da, this.cstPostRule = Xn$1, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = Xn$1, this.setNodeLocationFromNode = Xn$1, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
    else if (/onlyOffset/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = Ma, this.setNodeLocationFromNode = Ma, this.cstPostRule = Xn$1, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = Xn$1, this.setNodeLocationFromNode = Xn$1, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
    else if (/none/i.test(this.nodeLocationTracking))
      this.setNodeLocationFromToken = Xn$1, this.setNodeLocationFromNode = Xn$1, this.cstPostRule = Xn$1, this.setInitialNodeLocation = Xn$1;
    else
      throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`);
  }
  setInitialNodeLocationOnlyOffsetRecovery(e) {
    e.location = {
      startOffset: NaN,
      endOffset: NaN
    };
  }
  setInitialNodeLocationOnlyOffsetRegular(e) {
    e.location = {
      // without error recovery the starting Location of a new CstNode is guaranteed
      // To be the next Token's startOffset (for valid inputs).
      // For invalid inputs there won't be any CSTOutput so this potential
      // inaccuracy does not matter
      startOffset: this.LA(1).startOffset,
      endOffset: NaN
    };
  }
  setInitialNodeLocationFullRecovery(e) {
    e.location = {
      startOffset: NaN,
      startLine: NaN,
      startColumn: NaN,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  /**
       *  @see setInitialNodeLocationOnlyOffsetRegular for explanation why this work
  
       * @param cstNode
       */
  setInitialNodeLocationFullRegular(e) {
    const t = this.LA(1);
    e.location = {
      startOffset: t.startOffset,
      startLine: t.startLine,
      startColumn: t.startColumn,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  cstInvocationStateUpdate(e) {
    const t = {
      name: e,
      children: /* @__PURE__ */ Object.create(null)
    };
    this.setInitialNodeLocation(t), this.CST_STACK.push(t);
  }
  cstFinallyStateUpdate() {
    this.CST_STACK.pop();
  }
  cstPostRuleFull(e) {
    const t = this.LA(0), r = e.location;
    r.startOffset <= t.startOffset ? (r.endOffset = t.endOffset, r.endLine = t.endLine, r.endColumn = t.endColumn) : (r.startOffset = NaN, r.startLine = NaN, r.startColumn = NaN);
  }
  cstPostRuleOnlyOffset(e) {
    const t = this.LA(0), r = e.location;
    r.startOffset <= t.startOffset ? r.endOffset = t.endOffset : r.startOffset = NaN;
  }
  cstPostTerminal(e, t) {
    const r = this.CST_STACK[this.CST_STACK.length - 1];
    _h(r, t, e), this.setNodeLocationFromToken(r.location, t);
  }
  cstPostNonTerminal(e, t) {
    const r = this.CST_STACK[this.CST_STACK.length - 1];
    Lh(r, t, e), this.setNodeLocationFromNode(r.location, e.location);
  }
  getBaseCstVisitorConstructor() {
    if (Et$1(this.baseCstVisitorConstructor)) {
      const e = Ph(this.className, $(this.gastProductionsCache));
      return this.baseCstVisitorConstructor = e, e;
    }
    return this.baseCstVisitorConstructor;
  }
  getBaseCstVisitorConstructorWithDefaults() {
    if (Et$1(this.baseCstVisitorWithDefaultsConstructor)) {
      const e = Mh(this.className, $(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
      return this.baseCstVisitorWithDefaultsConstructor = e, e;
    }
    return this.baseCstVisitorWithDefaultsConstructor;
  }
  getLastExplicitRuleShortName() {
    const e = this.RULE_STACK;
    return e[e.length - 1];
  }
  getPreviousExplicitRuleShortName() {
    const e = this.RULE_STACK;
    return e[e.length - 2];
  }
  getLastExplicitRuleOccurrenceIndex() {
    const e = this.RULE_OCCURRENCE_STACK;
    return e[e.length - 1];
  }
}
class Uh {
  initLexerAdapter() {
    this.tokVector = [], this.tokVectorLength = 0, this.currIdx = -1;
  }
  set input(e) {
    if (this.selfAnalysisDone !== true)
      throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
    this.reset(), this.tokVector = e, this.tokVectorLength = e.length;
  }
  get input() {
    return this.tokVector;
  }
  // skips a token and returns the next token
  SKIP_TOKEN() {
    return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : zr;
  }
  // Lexer (accessing Token vector) related methods which can be overridden to implement lazy lexers
  // or lexers dependent on parser context.
  LA(e) {
    const t = this.currIdx + e;
    return t < 0 || this.tokVectorLength <= t ? zr : this.tokVector[t];
  }
  consumeToken() {
    this.currIdx++;
  }
  exportLexerState() {
    return this.currIdx;
  }
  importLexerState(e) {
    this.currIdx = e;
  }
  resetLexerState() {
    this.currIdx = -1;
  }
  moveToTerminatedState() {
    this.currIdx = this.tokVector.length - 1;
  }
  getLexerPosition() {
    return this.exportLexerState();
  }
}
class Bh {
  ACTION(e) {
    return e.call(this);
  }
  consume(e, t, r) {
    return this.consumeInternal(t, e, r);
  }
  subrule(e, t, r) {
    return this.subruleInternal(t, e, r);
  }
  option(e, t) {
    return this.optionInternal(t, e);
  }
  or(e, t) {
    return this.orInternal(t, e);
  }
  many(e, t) {
    return this.manyInternal(e, t);
  }
  atLeastOne(e, t) {
    return this.atLeastOneInternal(e, t);
  }
  CONSUME(e, t) {
    return this.consumeInternal(e, 0, t);
  }
  CONSUME1(e, t) {
    return this.consumeInternal(e, 1, t);
  }
  CONSUME2(e, t) {
    return this.consumeInternal(e, 2, t);
  }
  CONSUME3(e, t) {
    return this.consumeInternal(e, 3, t);
  }
  CONSUME4(e, t) {
    return this.consumeInternal(e, 4, t);
  }
  CONSUME5(e, t) {
    return this.consumeInternal(e, 5, t);
  }
  CONSUME6(e, t) {
    return this.consumeInternal(e, 6, t);
  }
  CONSUME7(e, t) {
    return this.consumeInternal(e, 7, t);
  }
  CONSUME8(e, t) {
    return this.consumeInternal(e, 8, t);
  }
  CONSUME9(e, t) {
    return this.consumeInternal(e, 9, t);
  }
  SUBRULE(e, t) {
    return this.subruleInternal(e, 0, t);
  }
  SUBRULE1(e, t) {
    return this.subruleInternal(e, 1, t);
  }
  SUBRULE2(e, t) {
    return this.subruleInternal(e, 2, t);
  }
  SUBRULE3(e, t) {
    return this.subruleInternal(e, 3, t);
  }
  SUBRULE4(e, t) {
    return this.subruleInternal(e, 4, t);
  }
  SUBRULE5(e, t) {
    return this.subruleInternal(e, 5, t);
  }
  SUBRULE6(e, t) {
    return this.subruleInternal(e, 6, t);
  }
  SUBRULE7(e, t) {
    return this.subruleInternal(e, 7, t);
  }
  SUBRULE8(e, t) {
    return this.subruleInternal(e, 8, t);
  }
  SUBRULE9(e, t) {
    return this.subruleInternal(e, 9, t);
  }
  OPTION(e) {
    return this.optionInternal(e, 0);
  }
  OPTION1(e) {
    return this.optionInternal(e, 1);
  }
  OPTION2(e) {
    return this.optionInternal(e, 2);
  }
  OPTION3(e) {
    return this.optionInternal(e, 3);
  }
  OPTION4(e) {
    return this.optionInternal(e, 4);
  }
  OPTION5(e) {
    return this.optionInternal(e, 5);
  }
  OPTION6(e) {
    return this.optionInternal(e, 6);
  }
  OPTION7(e) {
    return this.optionInternal(e, 7);
  }
  OPTION8(e) {
    return this.optionInternal(e, 8);
  }
  OPTION9(e) {
    return this.optionInternal(e, 9);
  }
  OR(e) {
    return this.orInternal(e, 0);
  }
  OR1(e) {
    return this.orInternal(e, 1);
  }
  OR2(e) {
    return this.orInternal(e, 2);
  }
  OR3(e) {
    return this.orInternal(e, 3);
  }
  OR4(e) {
    return this.orInternal(e, 4);
  }
  OR5(e) {
    return this.orInternal(e, 5);
  }
  OR6(e) {
    return this.orInternal(e, 6);
  }
  OR7(e) {
    return this.orInternal(e, 7);
  }
  OR8(e) {
    return this.orInternal(e, 8);
  }
  OR9(e) {
    return this.orInternal(e, 9);
  }
  MANY(e) {
    this.manyInternal(0, e);
  }
  MANY1(e) {
    this.manyInternal(1, e);
  }
  MANY2(e) {
    this.manyInternal(2, e);
  }
  MANY3(e) {
    this.manyInternal(3, e);
  }
  MANY4(e) {
    this.manyInternal(4, e);
  }
  MANY5(e) {
    this.manyInternal(5, e);
  }
  MANY6(e) {
    this.manyInternal(6, e);
  }
  MANY7(e) {
    this.manyInternal(7, e);
  }
  MANY8(e) {
    this.manyInternal(8, e);
  }
  MANY9(e) {
    this.manyInternal(9, e);
  }
  MANY_SEP(e) {
    this.manySepFirstInternal(0, e);
  }
  MANY_SEP1(e) {
    this.manySepFirstInternal(1, e);
  }
  MANY_SEP2(e) {
    this.manySepFirstInternal(2, e);
  }
  MANY_SEP3(e) {
    this.manySepFirstInternal(3, e);
  }
  MANY_SEP4(e) {
    this.manySepFirstInternal(4, e);
  }
  MANY_SEP5(e) {
    this.manySepFirstInternal(5, e);
  }
  MANY_SEP6(e) {
    this.manySepFirstInternal(6, e);
  }
  MANY_SEP7(e) {
    this.manySepFirstInternal(7, e);
  }
  MANY_SEP8(e) {
    this.manySepFirstInternal(8, e);
  }
  MANY_SEP9(e) {
    this.manySepFirstInternal(9, e);
  }
  AT_LEAST_ONE(e) {
    this.atLeastOneInternal(0, e);
  }
  AT_LEAST_ONE1(e) {
    return this.atLeastOneInternal(1, e);
  }
  AT_LEAST_ONE2(e) {
    this.atLeastOneInternal(2, e);
  }
  AT_LEAST_ONE3(e) {
    this.atLeastOneInternal(3, e);
  }
  AT_LEAST_ONE4(e) {
    this.atLeastOneInternal(4, e);
  }
  AT_LEAST_ONE5(e) {
    this.atLeastOneInternal(5, e);
  }
  AT_LEAST_ONE6(e) {
    this.atLeastOneInternal(6, e);
  }
  AT_LEAST_ONE7(e) {
    this.atLeastOneInternal(7, e);
  }
  AT_LEAST_ONE8(e) {
    this.atLeastOneInternal(8, e);
  }
  AT_LEAST_ONE9(e) {
    this.atLeastOneInternal(9, e);
  }
  AT_LEAST_ONE_SEP(e) {
    this.atLeastOneSepFirstInternal(0, e);
  }
  AT_LEAST_ONE_SEP1(e) {
    this.atLeastOneSepFirstInternal(1, e);
  }
  AT_LEAST_ONE_SEP2(e) {
    this.atLeastOneSepFirstInternal(2, e);
  }
  AT_LEAST_ONE_SEP3(e) {
    this.atLeastOneSepFirstInternal(3, e);
  }
  AT_LEAST_ONE_SEP4(e) {
    this.atLeastOneSepFirstInternal(4, e);
  }
  AT_LEAST_ONE_SEP5(e) {
    this.atLeastOneSepFirstInternal(5, e);
  }
  AT_LEAST_ONE_SEP6(e) {
    this.atLeastOneSepFirstInternal(6, e);
  }
  AT_LEAST_ONE_SEP7(e) {
    this.atLeastOneSepFirstInternal(7, e);
  }
  AT_LEAST_ONE_SEP8(e) {
    this.atLeastOneSepFirstInternal(8, e);
  }
  AT_LEAST_ONE_SEP9(e) {
    this.atLeastOneSepFirstInternal(9, e);
  }
  RULE(e, t, r = qr) {
    if (ue(this.definedRulesNames, e)) {
      const a2 = {
        message: dt.buildDuplicateRuleNameError({
          topLevelRule: e,
          grammarName: this.className
        }),
        type: ce.DUPLICATE_RULE_NAME,
        ruleName: e
      };
      this.definitionErrors.push(a2);
    }
    this.definedRulesNames.push(e);
    const i = this.defineRule(e, t, r);
    return this[e] = i, i;
  }
  OVERRIDE_RULE(e, t, r = qr) {
    const i = uh(e, this.definedRulesNames, this.className);
    this.definitionErrors = this.definitionErrors.concat(i);
    const s = this.defineRule(e, t, r);
    return this[e] = s, s;
  }
  BACKTRACK(e, t) {
    return function() {
      this.isBackTrackingStack.push(1);
      const r = this.saveRecogState();
      try {
        return e.apply(this, t), true;
      } catch (i) {
        if (Hr(i))
          return false;
        throw i;
      } finally {
        this.reloadRecogState(r), this.isBackTrackingStack.pop();
      }
    };
  }
  // GAST export APIs
  getGAstProductions() {
    return this.gastProductionsCache;
  }
  getSerializedGastProductions() {
    return Yd(St(this.gastProductionsCache));
  }
}
class Vh {
  initRecognizerEngine(e, t) {
    if (this.className = this.constructor.name, this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = Kr, this.subruleIdx = 0, this.definedRulesNames = [], this.tokensMap = {}, this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, mn$1(t, "serializedGrammar"))
      throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);
    if ($a$1(e)) {
      if (mc$1(e))
        throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);
      if (typeof e[0].startOffset == "number")
        throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`);
    }
    if ($a$1(e))
      this.tokensMap = It$1(e, (s, a2) => (s[a2.name] = a2, s), {});
    else if (mn$1(e, "modes") && be(fn$1(St(e.modes)), Uf)) {
      const s = fn$1(St(e.modes)), a2 = bs(s);
      this.tokensMap = It$1(a2, (o, l) => (o[l.name] = l, o), {});
    } else if (or$1(e))
      this.tokensMap = a(e);
    else
      throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
    this.tokensMap.EOF = nt;
    const r = mn$1(e, "modes") ? fn$1(St(e.modes)) : St(e), i = be(r, (s) => mc$1(s.categoryMatches));
    this.tokenMatcher = i ? Kr : er, tr(St(this.tokensMap));
  }
  defineRule(e, t, r) {
    if (this.selfAnalysisDone)
      throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
    const i = mn$1(r, "resyncEnabled") ? r.resyncEnabled : qr.resyncEnabled, s = mn$1(r, "recoveryValueFunc") ? r.recoveryValueFunc : qr.recoveryValueFunc, a2 = this.ruleShortNameIdx << Ch + st;
    this.ruleShortNameIdx++, this.shortRuleNameToFull[a2] = e, this.fullRuleNameToShort[e] = a2;
    let o;
    return this.outputCst === true ? o = function(...u) {
      try {
        this.ruleInvocationStateUpdate(a2, e, this.subruleIdx), t.apply(this, u);
        const d = this.CST_STACK[this.CST_STACK.length - 1];
        return this.cstPostRule(d), d;
      } catch (d) {
        return this.invokeRuleCatch(d, i, s);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    } : o = function(...u) {
      try {
        return this.ruleInvocationStateUpdate(a2, e, this.subruleIdx), t.apply(this, u);
      } catch (d) {
        return this.invokeRuleCatch(d, i, s);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    }, Object.assign(o, { ruleName: e, originalGrammarAction: t });
  }
  invokeRuleCatch(e, t, r) {
    const i = this.RULE_STACK.length === 1, s = t && !this.isBackTracking() && this.recoveryEnabled;
    if (Hr(e)) {
      const a2 = e;
      if (s) {
        const o = this.findReSyncTokenType();
        if (this.isInCurrentRuleReSyncSet(o))
          if (a2.resyncedTokens = this.reSyncTo(o), this.outputCst) {
            const l = this.CST_STACK[this.CST_STACK.length - 1];
            return l.recoveredNode = true, l;
          } else
            return r(e);
        else {
          if (this.outputCst) {
            const l = this.CST_STACK[this.CST_STACK.length - 1];
            l.recoveredNode = true, a2.partialCstResult = l;
          }
          throw a2;
        }
      } else {
        if (i)
          return this.moveToTerminatedState(), r(e);
        throw a2;
      }
    } else
      throw e;
  }
  // Implementation of parsing DSL
  optionInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(Rc, t);
    return this.optionInternalLogic(e, t, r);
  }
  optionInternalLogic(e, t, r) {
    let i = this.getLaFuncFromCache(r), s;
    if (typeof e != "function") {
      s = e.DEF;
      const a2 = e.GATE;
      if (a2 !== void 0) {
        const o = i;
        i = () => a2.call(this) && o.call(this);
      }
    } else
      s = e;
    if (i.call(this) === true)
      return s.call(this);
  }
  atLeastOneInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(os, e);
    return this.atLeastOneInternalLogic(e, t, r);
  }
  atLeastOneInternalLogic(e, t, r) {
    let i = this.getLaFuncFromCache(r), s;
    if (typeof t != "function") {
      s = t.DEF;
      const a2 = t.GATE;
      if (a2 !== void 0) {
        const o = i;
        i = () => a2.call(this) && o.call(this);
      }
    } else
      s = t;
    if (i.call(this) === true) {
      let a2 = this.doSingleRepetition(s);
      for (; i.call(this) === true && a2 === true; )
        a2 = this.doSingleRepetition(s);
    } else
      throw this.raiseEarlyExitException(e, B.REPETITION_MANDATORY, t.ERR_MSG);
    this.attemptInRepetitionRecovery(this.atLeastOneInternal, [e, t], i, os, e, Yf);
  }
  atLeastOneSepFirstInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(Nr, e);
    this.atLeastOneSepFirstInternalLogic(e, t, r);
  }
  atLeastOneSepFirstInternalLogic(e, t, r) {
    const i = t.DEF, s = t.SEP;
    if (this.getLaFuncFromCache(r).call(this) === true) {
      i.call(this);
      const o = () => this.tokenMatcher(this.LA(1), s);
      for (; this.tokenMatcher(this.LA(1), s) === true; )
        this.CONSUME(s), i.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        s,
        o,
        i,
        Oa
      ], o, Nr, e, Oa);
    } else
      throw this.raiseEarlyExitException(e, B.REPETITION_MANDATORY_WITH_SEPARATOR, t.ERR_MSG);
  }
  manyInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(as, e);
    return this.manyInternalLogic(e, t, r);
  }
  manyInternalLogic(e, t, r) {
    let i = this.getLaFuncFromCache(r), s;
    if (typeof t != "function") {
      s = t.DEF;
      const o = t.GATE;
      if (o !== void 0) {
        const l = i;
        i = () => o.call(this) && l.call(this);
      }
    } else
      s = t;
    let a2 = true;
    for (; i.call(this) === true && a2 === true; )
      a2 = this.doSingleRepetition(s);
    this.attemptInRepetitionRecovery(
      this.manyInternal,
      [e, t],
      i,
      as,
      e,
      qf,
      // The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
      // is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
      // An infinite loop cannot occur as:
      // - Either the lookahead is guaranteed to consume something (Single Token Separator)
      // - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
      a2
    );
  }
  manySepFirstInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(ls, e);
    this.manySepFirstInternalLogic(e, t, r);
  }
  manySepFirstInternalLogic(e, t, r) {
    const i = t.DEF, s = t.SEP;
    if (this.getLaFuncFromCache(r).call(this) === true) {
      i.call(this);
      const o = () => this.tokenMatcher(this.LA(1), s);
      for (; this.tokenMatcher(this.LA(1), s) === true; )
        this.CONSUME(s), i.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        s,
        o,
        i,
        La
      ], o, ls, e, La);
    }
  }
  repetitionSepSecondInternal(e, t, r, i, s) {
    for (; r(); )
      this.CONSUME(t), i.call(this);
    this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
      e,
      t,
      r,
      i,
      s
    ], r, Nr, e, s);
  }
  doSingleRepetition(e) {
    const t = this.getLexerPosition();
    return e.call(this), this.getLexerPosition() > t;
  }
  orInternal(e, t) {
    const r = this.getKeyForAutomaticLookahead(Tc, t), i = $a$1(e) ? e : e.DEF, a2 = this.getLaFuncFromCache(r).call(this, i);
    if (a2 !== void 0)
      return i[a2].ALT.call(this);
    this.raiseNoAltException(t, e.ERR_MSG);
  }
  ruleFinallyStateUpdate() {
    if (this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstFinallyStateUpdate(), this.RULE_STACK.length === 0 && this.isAtEndOfInput() === false) {
      const e = this.LA(1), t = this.errorMessageProvider.buildNotAllInputParsedMessage({
        firstRedundant: e,
        ruleName: this.getCurrRuleFullName()
      });
      this.SAVE_ERROR(new Eh(t, e));
    }
  }
  subruleInternal(e, t, r) {
    let i;
    try {
      const s = r !== void 0 ? r.ARGS : void 0;
      return this.subruleIdx = t, i = e.apply(this, s), this.cstPostNonTerminal(i, r !== void 0 && r.LABEL !== void 0 ? r.LABEL : e.ruleName), i;
    } catch (s) {
      throw this.subruleInternalError(s, r, e.ruleName);
    }
  }
  subruleInternalError(e, t, r) {
    throw Hr(e) && e.partialCstResult !== void 0 && (this.cstPostNonTerminal(e.partialCstResult, t !== void 0 && t.LABEL !== void 0 ? t.LABEL : r), delete e.partialCstResult), e;
  }
  consumeInternal(e, t, r) {
    let i;
    try {
      const s = this.LA(1);
      this.tokenMatcher(s, e) === true ? (this.consumeToken(), i = s) : this.consumeInternalError(e, s, r);
    } catch (s) {
      i = this.consumeInternalRecovery(e, t, s);
    }
    return this.cstPostTerminal(r !== void 0 && r.LABEL !== void 0 ? r.LABEL : e.name, i), i;
  }
  consumeInternalError(e, t, r) {
    let i;
    const s = this.LA(0);
    throw r !== void 0 && r.ERR_MSG ? i = r.ERR_MSG : i = this.errorMessageProvider.buildMismatchTokenMessage({
      expected: e,
      actual: t,
      previous: s,
      ruleName: this.getCurrRuleFullName()
    }), this.SAVE_ERROR(new gc(i, t, s));
  }
  consumeInternalRecovery(e, t, r) {
    if (this.recoveryEnabled && // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
    r.name === "MismatchedTokenException" && !this.isBackTracking()) {
      const i = this.getFollowsForInRuleRecovery(e, t);
      try {
        return this.tryInRuleRecovery(e, i);
      } catch (s) {
        throw s.name === yc ? r : s;
      }
    } else
      throw r;
  }
  saveRecogState() {
    const e = this.errors, t = a(this.RULE_STACK);
    return {
      errors: e,
      lexerState: this.exportLexerState(),
      RULE_STACK: t,
      CST_STACK: this.CST_STACK
    };
  }
  reloadRecogState(e) {
    this.errors = e.errors, this.importLexerState(e.lexerState), this.RULE_STACK = e.RULE_STACK;
  }
  ruleInvocationStateUpdate(e, t, r) {
    this.RULE_OCCURRENCE_STACK.push(r), this.RULE_STACK.push(e), this.cstInvocationStateUpdate(t);
  }
  isBackTracking() {
    return this.isBackTrackingStack.length !== 0;
  }
  getCurrRuleFullName() {
    const e = this.getLastExplicitRuleShortName();
    return this.shortRuleNameToFull[e];
  }
  shortRuleNameToFullName(e) {
    return this.shortRuleNameToFull[e];
  }
  isAtEndOfInput() {
    return this.tokenMatcher(this.LA(1), nt);
  }
  reset() {
    this.resetLexerState(), this.subruleIdx = 0, this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = [];
  }
}
class Wh {
  initErrorHandler(e) {
    this._errors = [], this.errorMessageProvider = mn$1(e, "errorMessageProvider") ? e.errorMessageProvider : Xe.errorMessageProvider;
  }
  SAVE_ERROR(e) {
    if (Hr(e))
      return e.context = {
        ruleStack: this.getHumanReadableRuleStack(),
        ruleOccurrenceStack: a(this.RULE_OCCURRENCE_STACK)
      }, this._errors.push(e), e;
    throw Error("Trying to save an Error which is not a RecognitionException");
  }
  get errors() {
    return a(this._errors);
  }
  set errors(e) {
    this._errors = e;
  }
  // TODO: consider caching the error message computed information
  raiseEarlyExitException(e, t, r) {
    const i = this.getCurrRuleFullName(), s = this.getGAstProductions()[i], o = yi(e, s, t, this.maxLookahead)[0], l = [];
    for (let u = 1; u <= this.maxLookahead; u++)
      l.push(this.LA(u));
    const c = this.errorMessageProvider.buildEarlyExitMessage({
      expectedIterationPaths: o,
      actual: l,
      previous: this.LA(0),
      customUserDescription: r,
      ruleName: i
    });
    throw this.SAVE_ERROR(new kh(c, this.LA(1), this.LA(0)));
  }
  // TODO: consider caching the error message computed information
  raiseNoAltException(e, t) {
    const r = this.getCurrRuleFullName(), i = this.getGAstProductions()[r], s = gi(e, i, this.maxLookahead), a2 = [];
    for (let c = 1; c <= this.maxLookahead; c++)
      a2.push(this.LA(c));
    const o = this.LA(0), l = this.errorMessageProvider.buildNoViableAltMessage({
      expectedPathsPerAlt: s,
      actual: a2,
      previous: o,
      customUserDescription: t,
      ruleName: this.getCurrRuleFullName()
    });
    throw this.SAVE_ERROR(new Ah(l, this.LA(1), o));
  }
}
class Kh {
  initContentAssist() {
  }
  computeContentAssist(e, t) {
    const r = this.gastProductionsCache[e];
    if (Et$1(r))
      throw Error(`Rule ->${e}<- does not exist in this grammar.`);
    return sc([r], t, this.tokenMatcher, this.maxLookahead);
  }
  // TODO: should this be a member method or a utility? it does not have any state or usage of 'this'...
  // TODO: should this be more explicitly part of the public API?
  getNextPossibleTokenTypes(e) {
    const t = Pe(e.ruleStack), i = this.getGAstProductions()[t];
    return new zf(i, e).startWalking();
  }
}
const Ri = {
  description: "This Object indicates the Parser is during Recording Phase"
};
Object.freeze(Ri);
const Fa = true, Ga = Math.pow(2, st) - 1, Ac = rc({ name: "RECORDING_PHASE_TOKEN", pattern: de.NA });
tr([Ac]);
const Ec = Hs(
  Ac,
  `This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  // Using "-1" instead of NaN (as in EOF) because an actual number is less likely to
  // cause errors if the output of LA or CONSUME would be (incorrectly) used during the recording phase.
  -1,
  -1,
  -1,
  -1,
  -1,
  -1
);
Object.freeze(Ec);
const Hh = {
  name: `This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  children: {}
};
class jh {
  initGastRecorder(e) {
    this.recordingProdStack = [], this.RECORDING_PHASE = false;
  }
  enableRecording() {
    this.RECORDING_PHASE = true, this.TRACE_INIT("Enable Recording", () => {
      for (let e = 0; e < 10; e++) {
        const t = e > 0 ? e : "";
        this[`CONSUME${t}`] = function(r, i) {
          return this.consumeInternalRecord(r, e, i);
        }, this[`SUBRULE${t}`] = function(r, i) {
          return this.subruleInternalRecord(r, e, i);
        }, this[`OPTION${t}`] = function(r) {
          return this.optionInternalRecord(r, e);
        }, this[`OR${t}`] = function(r) {
          return this.orInternalRecord(r, e);
        }, this[`MANY${t}`] = function(r) {
          this.manyInternalRecord(e, r);
        }, this[`MANY_SEP${t}`] = function(r) {
          this.manySepFirstInternalRecord(e, r);
        }, this[`AT_LEAST_ONE${t}`] = function(r) {
          this.atLeastOneInternalRecord(e, r);
        }, this[`AT_LEAST_ONE_SEP${t}`] = function(r) {
          this.atLeastOneSepFirstInternalRecord(e, r);
        };
      }
      this.consume = function(e, t, r) {
        return this.consumeInternalRecord(t, e, r);
      }, this.subrule = function(e, t, r) {
        return this.subruleInternalRecord(t, e, r);
      }, this.option = function(e, t) {
        return this.optionInternalRecord(t, e);
      }, this.or = function(e, t) {
        return this.orInternalRecord(t, e);
      }, this.many = function(e, t) {
        this.manyInternalRecord(e, t);
      }, this.atLeastOne = function(e, t) {
        this.atLeastOneInternalRecord(e, t);
      }, this.ACTION = this.ACTION_RECORD, this.BACKTRACK = this.BACKTRACK_RECORD, this.LA = this.LA_RECORD;
    });
  }
  disableRecording() {
    this.RECORDING_PHASE = false, this.TRACE_INIT("Deleting Recording methods", () => {
      const e = this;
      for (let t = 0; t < 10; t++) {
        const r = t > 0 ? t : "";
        delete e[`CONSUME${r}`], delete e[`SUBRULE${r}`], delete e[`OPTION${r}`], delete e[`OR${r}`], delete e[`MANY${r}`], delete e[`MANY_SEP${r}`], delete e[`AT_LEAST_ONE${r}`], delete e[`AT_LEAST_ONE_SEP${r}`];
      }
      delete e.consume, delete e.subrule, delete e.option, delete e.or, delete e.many, delete e.atLeastOne, delete e.ACTION, delete e.BACKTRACK, delete e.LA;
    });
  }
  //   Parser methods are called inside an ACTION?
  //   Maybe try/catch/finally on ACTIONS while disabling the recorders state changes?
  // @ts-expect-error -- noop place holder
  ACTION_RECORD(e) {
  }
  // Executing backtracking logic will break our recording logic assumptions
  BACKTRACK_RECORD(e, t) {
    return () => true;
  }
  // LA is part of the official API and may be used for custom lookahead logic
  // by end users who may forget to wrap it in ACTION or inside a GATE
  LA_RECORD(e) {
    return zr;
  }
  topLevelRuleRecord(e, t) {
    try {
      const r = new en({ definition: [], name: e });
      return r.name = e, this.recordingProdStack.push(r), t.call(this), this.recordingProdStack.pop(), r;
    } catch (r) {
      if (r.KNOWN_RECORDER_ERROR !== true)
        try {
          r.message = r.message + `
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`;
        } catch {
          throw r;
        }
      throw r;
    }
  }
  // Implementation of parsing DSL
  optionInternalRecord(e, t) {
    return on.call(this, ne, e, t);
  }
  atLeastOneInternalRecord(e, t) {
    on.call(this, Se, t, e);
  }
  atLeastOneSepFirstInternalRecord(e, t) {
    on.call(this, Ie, t, e, Fa);
  }
  manyInternalRecord(e, t) {
    on.call(this, K, t, e);
  }
  manySepFirstInternalRecord(e, t) {
    on.call(this, me, t, e, Fa);
  }
  orInternalRecord(e, t) {
    return zh.call(this, e, t);
  }
  subruleInternalRecord(e, t, r) {
    if (jr(t), !e || mn$1(e, "ruleName") === false) {
      const o = new Error(`<SUBRULE${Ua(t)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw o.KNOWN_RECORDER_ERROR = true, o;
    }
    const i = un$1(this.recordingProdStack), s = e.ruleName, a2 = new le({
      idx: t,
      nonTerminalName: s,
      label: r == null ? void 0 : r.LABEL,
      // The resolving of the `referencedRule` property will be done once all the Rule's GASTs have been created
      referencedRule: void 0
    });
    return i.definition.push(a2), this.outputCst ? Hh : Ri;
  }
  consumeInternalRecord(e, t, r) {
    if (jr(t), !tc(e)) {
      const a2 = new Error(`<CONSUME${Ua(t)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw a2.KNOWN_RECORDER_ERROR = true, a2;
    }
    const i = un$1(this.recordingProdStack), s = new G({
      idx: t,
      terminalType: e,
      label: r == null ? void 0 : r.LABEL
    });
    return i.definition.push(s), Ec;
  }
}
function on(n, e, t, r = false) {
  jr(t);
  const i = un$1(this.recordingProdStack), s = no$1(e) ? e : e.DEF, a2 = new n({ definition: [], idx: t });
  return r && (a2.separator = e.SEP), mn$1(e, "MAX_LOOKAHEAD") && (a2.maxLookahead = e.MAX_LOOKAHEAD), this.recordingProdStack.push(a2), s.call(this), i.definition.push(a2), this.recordingProdStack.pop(), Ri;
}
function zh(n, e) {
  jr(e);
  const t = un$1(this.recordingProdStack), r = $a$1(n) === false, i = r === false ? n : n.DEF, s = new ge({
    definition: [],
    idx: e,
    ignoreAmbiguities: r && n.IGNORE_AMBIGUITIES === true
  });
  mn$1(n, "MAX_LOOKAHEAD") && (s.maxLookahead = n.MAX_LOOKAHEAD);
  const a2 = kl(i, (o) => no$1(o.GATE));
  return s.hasPredicates = a2, t.definition.push(s), $t$1(i, (o) => {
    const l = new he({ definition: [] });
    s.definition.push(l), mn$1(o, "IGNORE_AMBIGUITIES") ? l.ignoreAmbiguities = o.IGNORE_AMBIGUITIES : mn$1(o, "GATE") && (l.ignoreAmbiguities = true), this.recordingProdStack.push(l), o.ALT.call(this), this.recordingProdStack.pop();
  }), Ri;
}
function Ua(n) {
  return n === 0 ? "" : `${n}`;
}
function jr(n) {
  if (n < 0 || n > Ga) {
    const e = new Error(
      // The stack trace will contain all the needed details
      `Invalid DSL Method idx value: <${n}>
	Idx value must be a none negative value smaller than ${Ga + 1}`
    );
    throw e.KNOWN_RECORDER_ERROR = true, e;
  }
}
class qh {
  initPerformanceTracer(e) {
    if (mn$1(e, "traceInitPerf")) {
      const t = e.traceInitPerf, r = typeof t == "number";
      this.traceInitMaxIdent = r ? t : 1 / 0, this.traceInitPerf = r ? t > 0 : t;
    } else
      this.traceInitMaxIdent = 0, this.traceInitPerf = Xe.traceInitPerf;
    this.traceInitIndent = -1;
  }
  TRACE_INIT(e, t) {
    if (this.traceInitPerf === true) {
      this.traceInitIndent++;
      const r = new Array(this.traceInitIndent + 1).join("	");
      this.traceInitIndent < this.traceInitMaxIdent && console.log(`${r}--> <${e}>`);
      const { time: i, value: s } = Hl(t), a2 = i > 10 ? console.warn : console.log;
      return this.traceInitIndent < this.traceInitMaxIdent && a2(`${r}<-- <${e}> time: ${i}ms`), this.traceInitIndent--, s;
    } else
      return t();
  }
}
function Yh(n, e) {
  e.forEach((t) => {
    const r = t.prototype;
    Object.getOwnPropertyNames(r).forEach((i) => {
      if (i === "constructor")
        return;
      const s = Object.getOwnPropertyDescriptor(r, i);
      s && (s.get || s.set) ? Object.defineProperty(n.prototype, i, s) : n.prototype[i] = t.prototype[i];
    });
  });
}
const zr = Hs(nt, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(zr);
const Xe = Object.freeze({
  recoveryEnabled: false,
  maxLookahead: 3,
  dynamicTokensEnabled: false,
  outputCst: true,
  errorMessageProvider: $t,
  nodeLocationTracking: "none",
  traceInitPerf: false,
  skipValidations: false
}), qr = Object.freeze({
  recoveryValueFunc: () => {
  },
  resyncEnabled: true
});
var ce;
(function(n) {
  n[n.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME", n[n.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME", n[n.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE", n[n.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS", n[n.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF", n[n.LEFT_RECURSION = 5] = "LEFT_RECURSION", n[n.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT", n[n.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS", n[n.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE", n[n.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME", n[n.NO_NON_EMPTY_LOOKAHEAD = 10] = "NO_NON_EMPTY_LOOKAHEAD", n[n.AMBIGUOUS_PREFIX_ALTS = 11] = "AMBIGUOUS_PREFIX_ALTS", n[n.TOO_MANY_ALTS = 12] = "TOO_MANY_ALTS", n[n.CUSTOM_LOOKAHEAD_VALIDATION = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(ce || (ce = {}));
function Ba(n = void 0) {
  return function() {
    return n;
  };
}
class nr {
  /**
   *  @deprecated use the **instance** method with the same name instead
   */
  static performSelfAnalysis(e) {
    throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
  }
  performSelfAnalysis() {
    this.TRACE_INIT("performSelfAnalysis", () => {
      let e;
      this.selfAnalysisDone = true;
      const t = this.className;
      this.TRACE_INIT("toFastProps", () => {
        jl(this);
      }), this.TRACE_INIT("Grammar Recording", () => {
        try {
          this.enableRecording(), $t$1(this.definedRulesNames, (i) => {
            const a2 = this[i].originalGrammarAction;
            let o;
            this.TRACE_INIT(`${i} Rule`, () => {
              o = this.topLevelRuleRecord(i, a2);
            }), this.gastProductionsCache[i] = o;
          });
        } finally {
          this.disableRecording();
        }
      });
      let r = [];
      if (this.TRACE_INIT("Grammar Resolving", () => {
        r = Rh({
          rules: St(this.gastProductionsCache)
        }), this.definitionErrors = this.definitionErrors.concat(r);
      }), this.TRACE_INIT("Grammar Validations", () => {
        if (mc$1(r) && this.skipValidations === false) {
          const i = vh({
            rules: St(this.gastProductionsCache),
            tokenTypes: St(this.tokensMap),
            errMsgProvider: dt,
            grammarName: t
          }), s = ih({
            lookaheadStrategy: this.lookaheadStrategy,
            rules: St(this.gastProductionsCache),
            tokenTypes: St(this.tokensMap),
            grammarName: t
          });
          this.definitionErrors = this.definitionErrors.concat(i, s);
        }
      }), mc$1(this.definitionErrors) && (this.recoveryEnabled && this.TRACE_INIT("computeAllProdsFollows", () => {
        const i = nf(St(this.gastProductionsCache));
        this.resyncFollows = i;
      }), this.TRACE_INIT("ComputeLookaheadFunctions", () => {
        var i, s;
        (s = (i = this.lookaheadStrategy).initialize) === null || s === void 0 || s.call(i, {
          rules: St(this.gastProductionsCache)
        }), this.preComputeLookaheadFunctions(St(this.gastProductionsCache));
      })), !nr.DEFER_DEFINITION_ERRORS_HANDLING && !mc$1(this.definitionErrors))
        throw e = gn$1(this.definitionErrors, (i) => i.message), new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`);
    });
  }
  constructor(e, t) {
    this.definitionErrors = [], this.selfAnalysisDone = false;
    const r = this;
    if (r.initErrorHandler(t), r.initLexerAdapter(), r.initLooksAhead(t), r.initRecognizerEngine(e, t), r.initRecoverable(t), r.initTreeBuilder(t), r.initContentAssist(), r.initGastRecorder(t), r.initPerformanceTracer(t), mn$1(t, "ignoredIssues"))
      throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);
    this.skipValidations = mn$1(t, "skipValidations") ? t.skipValidations : Xe.skipValidations;
  }
}
nr.DEFER_DEFINITION_ERRORS_HANDLING = false;
Yh(nr, [
  Sh,
  $h,
  Gh,
  Uh,
  Vh,
  Bh,
  Wh,
  Kh,
  jh,
  qh
]);
class Xh extends nr {
  constructor(e, t = Xe) {
    const r = a(t);
    r.outputCst = false, super(e, r);
  }
}
function qt(n, e, t) {
  return `${n.name}_${e}_${t}`;
}
const rt = 1, Jh = 2, kc = 4, xc = 5, rr = 7, Qh = 8, Zh = 9, ep = 10, tp = 11, Sc = 12;
class Ys {
  constructor(e) {
    this.target = e;
  }
  isEpsilon() {
    return false;
  }
}
class Xs extends Ys {
  constructor(e, t) {
    super(e), this.tokenType = t;
  }
}
class Ic extends Ys {
  constructor(e) {
    super(e);
  }
  isEpsilon() {
    return true;
  }
}
class Js extends Ys {
  constructor(e, t, r) {
    super(e), this.rule = t, this.followState = r;
  }
  isEpsilon() {
    return true;
  }
}
function np(n) {
  const e = {
    decisionMap: {},
    decisionStates: [],
    ruleToStartState: /* @__PURE__ */ new Map(),
    ruleToStopState: /* @__PURE__ */ new Map(),
    states: []
  };
  rp(e, n);
  const t = n.length;
  for (let r = 0; r < t; r++) {
    const i = n[r], s = vt(e, i, i);
    s !== void 0 && pp(e, i, s);
  }
  return e;
}
function rp(n, e) {
  const t = e.length;
  for (let r = 0; r < t; r++) {
    const i = e[r], s = X(n, i, void 0, {
      type: Jh
    }), a2 = X(n, i, void 0, {
      type: rr
    });
    s.stop = a2, n.ruleToStartState.set(i, s), n.ruleToStopState.set(i, a2);
  }
}
function Cc(n, e, t) {
  return t instanceof G ? Qs(n, e, t.terminalType, t) : t instanceof le ? hp(n, e, t) : t instanceof ge ? lp(n, e, t) : t instanceof ne ? cp(n, e, t) : t instanceof K ? ip(n, e, t) : t instanceof me ? sp(n, e, t) : t instanceof Se ? ap(n, e, t) : t instanceof Ie ? op(n, e, t) : vt(n, e, t);
}
function ip(n, e, t) {
  const r = X(n, e, t, {
    type: xc
  });
  at(n, r);
  const i = nn(n, e, r, t, vt(n, e, t));
  return Nc(n, e, t, i);
}
function sp(n, e, t) {
  const r = X(n, e, t, {
    type: xc
  });
  at(n, r);
  const i = nn(n, e, r, t, vt(n, e, t)), s = Qs(n, e, t.separator, t);
  return Nc(n, e, t, i, s);
}
function ap(n, e, t) {
  const r = X(n, e, t, {
    type: kc
  });
  at(n, r);
  const i = nn(n, e, r, t, vt(n, e, t));
  return $c(n, e, t, i);
}
function op(n, e, t) {
  const r = X(n, e, t, {
    type: kc
  });
  at(n, r);
  const i = nn(n, e, r, t, vt(n, e, t)), s = Qs(n, e, t.separator, t);
  return $c(n, e, t, i, s);
}
function lp(n, e, t) {
  const r = X(n, e, t, {
    type: rt
  });
  at(n, r);
  const i = gn$1(t.definition, (a2) => Cc(n, e, a2));
  return nn(n, e, r, t, ...i);
}
function cp(n, e, t) {
  const r = X(n, e, t, {
    type: rt
  });
  at(n, r);
  const i = nn(n, e, r, t, vt(n, e, t));
  return up(n, e, t, i);
}
function vt(n, e, t) {
  const r = _t$1(gn$1(t.definition, (i) => Cc(n, e, i)), (i) => i !== void 0);
  return r.length === 1 ? r[0] : r.length === 0 ? void 0 : fp(n, r);
}
function $c(n, e, t, r, i) {
  const s = r.left, a2 = r.right, o = X(n, e, t, {
    type: tp
  });
  at(n, o);
  const l = X(n, e, t, {
    type: Sc
  });
  return s.loopback = o, l.loopback = o, n.decisionMap[qt(e, i ? "RepetitionMandatoryWithSeparator" : "RepetitionMandatory", t.idx)] = o, j(a2, o), i === void 0 ? (j(o, s), j(o, l)) : (j(o, l), j(o, i.left), j(i.right, s)), {
    left: s,
    right: l
  };
}
function Nc(n, e, t, r, i) {
  const s = r.left, a2 = r.right, o = X(n, e, t, {
    type: ep
  });
  at(n, o);
  const l = X(n, e, t, {
    type: Sc
  }), c = X(n, e, t, {
    type: Zh
  });
  return o.loopback = c, l.loopback = c, j(o, s), j(o, l), j(a2, c), i !== void 0 ? (j(c, l), j(c, i.left), j(i.right, s)) : j(c, o), n.decisionMap[qt(e, i ? "RepetitionWithSeparator" : "Repetition", t.idx)] = o, {
    left: o,
    right: l
  };
}
function up(n, e, t, r) {
  const i = r.left, s = r.right;
  return j(i, s), n.decisionMap[qt(e, "Option", t.idx)] = i, r;
}
function at(n, e) {
  return n.decisionStates.push(e), e.decision = n.decisionStates.length - 1, e.decision;
}
function nn(n, e, t, r, ...i) {
  const s = X(n, e, r, {
    type: Qh,
    start: t
  });
  t.end = s;
  for (const o of i)
    o !== void 0 ? (j(t, o.left), j(o.right, s)) : j(t, s);
  const a2 = {
    left: t,
    right: s
  };
  return n.decisionMap[qt(e, dp(r), r.idx)] = t, a2;
}
function dp(n) {
  if (n instanceof ge)
    return "Alternation";
  if (n instanceof ne)
    return "Option";
  if (n instanceof K)
    return "Repetition";
  if (n instanceof me)
    return "RepetitionWithSeparator";
  if (n instanceof Se)
    return "RepetitionMandatory";
  if (n instanceof Ie)
    return "RepetitionMandatoryWithSeparator";
  throw new Error("Invalid production type encountered");
}
function fp(n, e) {
  const t = e.length;
  for (let s = 0; s < t - 1; s++) {
    const a2 = e[s];
    let o;
    a2.left.transitions.length === 1 && (o = a2.left.transitions[0]);
    const l = o instanceof Js, c = o, u = e[s + 1].left;
    a2.left.type === rt && a2.right.type === rt && o !== void 0 && (l && c.followState === a2.right || o.target === a2.right) ? (l ? c.followState = u : o.target = u, mp(n, a2.right)) : j(a2.right, u);
  }
  const r = e[0], i = e[t - 1];
  return {
    left: r.left,
    right: i.right
  };
}
function Qs(n, e, t, r) {
  const i = X(n, e, r, {
    type: rt
  }), s = X(n, e, r, {
    type: rt
  });
  return Zs(i, new Xs(s, t)), {
    left: i,
    right: s
  };
}
function hp(n, e, t) {
  const r = t.referencedRule, i = n.ruleToStartState.get(r), s = X(n, e, t, {
    type: rt
  }), a2 = X(n, e, t, {
    type: rt
  }), o = new Js(i, r, a2);
  return Zs(s, o), {
    left: s,
    right: a2
  };
}
function pp(n, e, t) {
  const r = n.ruleToStartState.get(e);
  j(r, t.left);
  const i = n.ruleToStopState.get(e);
  return j(t.right, i), {
    left: r,
    right: i
  };
}
function j(n, e) {
  const t = new Ic(e);
  Zs(n, t);
}
function X(n, e, t, r) {
  const i = Object.assign({
    atn: n,
    production: t,
    epsilonOnlyTransitions: false,
    rule: e,
    transitions: [],
    nextTokenWithinRule: [],
    stateNumber: n.states.length
  }, r);
  return n.states.push(i), i;
}
function Zs(n, e) {
  n.transitions.length === 0 && (n.epsilonOnlyTransitions = e.isEpsilon()), n.transitions.push(e);
}
function mp(n, e) {
  n.states.splice(n.states.indexOf(e), 1);
}
const Yr = {};
class us {
  constructor() {
    this.map = {}, this.configs = [];
  }
  get size() {
    return this.configs.length;
  }
  finalize() {
    this.map = {};
  }
  add(e) {
    const t = wc(e);
    t in this.map || (this.map[t] = this.configs.length, this.configs.push(e));
  }
  get elements() {
    return this.configs;
  }
  get alts() {
    return gn$1(this.configs, (e) => e.alt);
  }
  get key() {
    let e = "";
    for (const t in this.map)
      e += t + ":";
    return e;
  }
}
function wc(n, e = true) {
  return `${e ? `a${n.alt}` : ""}s${n.state.stateNumber}:${n.stack.map((t) => t.stateNumber.toString()).join("_")}`;
}
function gp(n, e) {
  const t = {};
  return (r) => {
    const i = r.toString();
    let s = t[i];
    return s !== void 0 || (s = {
      atnStartState: n,
      decision: e,
      states: {}
    }, t[i] = s), s;
  };
}
class _c {
  constructor() {
    this.predicates = [];
  }
  is(e) {
    return e >= this.predicates.length || this.predicates[e];
  }
  set(e, t) {
    this.predicates[e] = t;
  }
  toString() {
    let e = "";
    const t = this.predicates.length;
    for (let r = 0; r < t; r++)
      e += this.predicates[r] === true ? "1" : "0";
    return e;
  }
}
const Va = new _c();
class yp extends qs {
  constructor(e) {
    var t;
    super(), this.logging = (t = e == null ? void 0 : e.logging) !== null && t !== void 0 ? t : (r) => console.log(r);
  }
  initialize(e) {
    this.atn = np(e.rules), this.dfas = Tp(this.atn);
  }
  validateAmbiguousAlternationAlternatives() {
    return [];
  }
  validateEmptyOrAlternatives() {
    return [];
  }
  buildLookaheadForAlternation(e) {
    const { prodOccurrence: t, rule: r, hasPredicates: i, dynamicTokensEnabled: s } = e, a2 = this.dfas, o = this.logging, l = qt(r, "Alternation", t), u = this.atn.decisionMap[l].decision, d = gn$1(ba({
      maxLookahead: 1,
      occurrence: t,
      prodType: "Alternation",
      rule: r
    }), (h) => gn$1(h, (f) => f[0]));
    if (Wa(d, false) && !s) {
      const h = It$1(d, (f, m, g) => ($t$1(m, (v) => {
        v && (f[v.tokenTypeIdx] = g, $t$1(v.categoryMatches, (y) => {
          f[y] = g;
        }));
      }), f), {});
      return i ? function(f) {
        var m;
        const g = this.LA(1), v = h[g.tokenTypeIdx];
        if (f !== void 0 && v !== void 0) {
          const y = (m = f[v]) === null || m === void 0 ? void 0 : m.GATE;
          if (y !== void 0 && y.call(this) === false)
            return;
        }
        return v;
      } : function() {
        const f = this.LA(1);
        return h[f.tokenTypeIdx];
      };
    } else
      return i ? function(h) {
        const f = new _c(), m = h === void 0 ? 0 : h.length;
        for (let v = 0; v < m; v++) {
          const y = h == null ? void 0 : h[v].GATE;
          f.set(v, y === void 0 || y.call(this));
        }
        const g = Pi.call(this, a2, u, f, o);
        return typeof g == "number" ? g : void 0;
      } : function() {
        const h = Pi.call(this, a2, u, Va, o);
        return typeof h == "number" ? h : void 0;
      };
  }
  buildLookaheadForOptional(e) {
    const { prodOccurrence: t, rule: r, prodType: i, dynamicTokensEnabled: s } = e, a2 = this.dfas, o = this.logging, l = qt(r, i, t), u = this.atn.decisionMap[l].decision, d = gn$1(ba({
      maxLookahead: 1,
      occurrence: t,
      prodType: i,
      rule: r
    }), (h) => gn$1(h, (f) => f[0]));
    if (Wa(d) && d[0][0] && !s) {
      const h = d[0], f = fn$1(h);
      if (f.length === 1 && mc$1(f[0].categoryMatches)) {
        const g = f[0].tokenTypeIdx;
        return function() {
          return this.LA(1).tokenTypeIdx === g;
        };
      } else {
        const m = It$1(f, (g, v) => (v !== void 0 && (g[v.tokenTypeIdx] = true, $t$1(v.categoryMatches, (y) => {
          g[y] = true;
        })), g), {});
        return function() {
          const g = this.LA(1);
          return m[g.tokenTypeIdx] === true;
        };
      }
    }
    return function() {
      const h = Pi.call(this, a2, u, Va, o);
      return typeof h == "object" ? false : h === 0;
    };
  }
}
function Wa(n, e = true) {
  const t = /* @__PURE__ */ new Set();
  for (const r of n) {
    const i = /* @__PURE__ */ new Set();
    for (const s of r) {
      if (s === void 0) {
        if (e)
          break;
        return false;
      }
      const a2 = [s.tokenTypeIdx].concat(s.categoryMatches);
      for (const o of a2)
        if (t.has(o)) {
          if (!i.has(o))
            return false;
        } else
          t.add(o), i.add(o);
    }
  }
  return true;
}
function Tp(n) {
  const e = n.decisionStates.length, t = Array(e);
  for (let r = 0; r < e; r++)
    t[r] = gp(n.decisionStates[r], r);
  return t;
}
function Pi(n, e, t, r) {
  const i = n[e](t);
  let s = i.start;
  if (s === void 0) {
    const o = Np(i.atnStartState);
    s = Oc(i, Lc(o)), i.start = s;
  }
  return Rp.apply(this, [i, s, t, r]);
}
function Rp(n, e, t, r) {
  let i = e, s = 1;
  const a2 = [];
  let o = this.LA(s++);
  for (; ; ) {
    let l = Sp(i, o);
    if (l === void 0 && (l = vp.apply(this, [n, i, o, s, t, r])), l === Yr)
      return xp(a2, i, o);
    if (l.isAcceptState === true)
      return l.prediction;
    i = l, a2.push(o), o = this.LA(s++);
  }
}
function vp(n, e, t, r, i, s) {
  const a2 = Ip(e.configs, t, i);
  if (a2.size === 0)
    return Ka(n, e, t, Yr), Yr;
  let o = Lc(a2);
  const l = $p(a2, i);
  if (l !== void 0)
    o.isAcceptState = true, o.prediction = l, o.configs.uniqueAlt = l;
  else if (Op(a2)) {
    const c = on$1(a2.alts);
    o.isAcceptState = true, o.prediction = c, o.configs.uniqueAlt = c, Ap.apply(this, [n, r, a2.alts, s]);
  }
  return o = Ka(n, e, t, o), o;
}
function Ap(n, e, t, r) {
  const i = [];
  for (let c = 1; c <= e; c++)
    i.push(this.LA(c).tokenType);
  const s = n.atnStartState, a2 = s.rule, o = s.production, l = Ep({
    topLevelRule: a2,
    ambiguityIndices: t,
    production: o,
    prefixPath: i
  });
  r(l);
}
function Ep(n) {
  const e = gn$1(n.prefixPath, (i) => wt(i)).join(", "), t = n.production.idx === 0 ? "" : n.production.idx;
  let r = `Ambiguous Alternatives Detected: <${n.ambiguityIndices.join(", ")}> in <${kp(n.production)}${t}> inside <${n.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
  return r = r + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, r;
}
function kp(n) {
  if (n instanceof le)
    return "SUBRULE";
  if (n instanceof ne)
    return "OPTION";
  if (n instanceof ge)
    return "OR";
  if (n instanceof Se)
    return "AT_LEAST_ONE";
  if (n instanceof Ie)
    return "AT_LEAST_ONE_SEP";
  if (n instanceof me)
    return "MANY_SEP";
  if (n instanceof K)
    return "MANY";
  if (n instanceof G)
    return "CONSUME";
  throw Error("non exhaustive match");
}
function xp(n, e, t) {
  const r = Ee(e.configs.elements, (s) => s.state.transitions), i = Hu(r.filter((s) => s instanceof Xs).map((s) => s.tokenType), (s) => s.tokenTypeIdx);
  return {
    actualToken: t,
    possibleTokenTypes: i,
    tokenPath: n
  };
}
function Sp(n, e) {
  return n.edges[e.tokenTypeIdx];
}
function Ip(n, e, t) {
  const r = new us(), i = [];
  for (const a2 of n.elements) {
    if (t.is(a2.alt) === false)
      continue;
    if (a2.state.type === rr) {
      i.push(a2);
      continue;
    }
    const o = a2.state.transitions.length;
    for (let l = 0; l < o; l++) {
      const c = a2.state.transitions[l], u = Cp(c, e);
      u !== void 0 && r.add({
        state: u,
        alt: a2.alt,
        stack: a2.stack
      });
    }
  }
  let s;
  if (i.length === 0 && r.size === 1 && (s = r), s === void 0) {
    s = new us();
    for (const a2 of r.elements)
      Xr(a2, s);
  }
  if (i.length > 0 && !_p(s))
    for (const a2 of i)
      s.add(a2);
  return s;
}
function Cp(n, e) {
  if (n instanceof Xs && ic(e, n.tokenType))
    return n.target;
}
function $p(n, e) {
  let t;
  for (const r of n.elements)
    if (e.is(r.alt) === true) {
      if (t === void 0)
        t = r.alt;
      else if (t !== r.alt)
        return;
    }
  return t;
}
function Lc(n) {
  return {
    configs: n,
    edges: {},
    isAcceptState: false,
    prediction: -1
  };
}
function Ka(n, e, t, r) {
  return r = Oc(n, r), e.edges[t.tokenTypeIdx] = r, r;
}
function Oc(n, e) {
  if (e === Yr)
    return e;
  const t = e.configs.key, r = n.states[t];
  return r !== void 0 ? r : (e.configs.finalize(), n.states[t] = e, e);
}
function Np(n) {
  const e = new us(), t = n.transitions.length;
  for (let r = 0; r < t; r++) {
    const s = {
      state: n.transitions[r].target,
      alt: r,
      stack: []
    };
    Xr(s, e);
  }
  return e;
}
function Xr(n, e) {
  const t = n.state;
  if (t.type === rr) {
    if (n.stack.length > 0) {
      const i = [...n.stack], a2 = {
        state: i.pop(),
        alt: n.alt,
        stack: i
      };
      Xr(a2, e);
    } else
      e.add(n);
    return;
  }
  t.epsilonOnlyTransitions || e.add(n);
  const r = t.transitions.length;
  for (let i = 0; i < r; i++) {
    const s = t.transitions[i], a2 = wp(n, s);
    a2 !== void 0 && Xr(a2, e);
  }
}
function wp(n, e) {
  if (e instanceof Ic)
    return {
      state: e.target,
      alt: n.alt,
      stack: n.stack
    };
  if (e instanceof Js) {
    const t = [...n.stack, e.followState];
    return {
      state: e.target,
      alt: n.alt,
      stack: t
    };
  }
}
function _p(n) {
  for (const e of n.elements)
    if (e.state.type === rr)
      return true;
  return false;
}
function Lp(n) {
  for (const e of n.elements)
    if (e.state.type !== rr)
      return false;
  return true;
}
function Op(n) {
  if (Lp(n))
    return true;
  const e = bp(n.elements);
  return Pp(e) && !Mp(e);
}
function bp(n) {
  const e = /* @__PURE__ */ new Map();
  for (const t of n) {
    const r = wc(t, false);
    let i = e.get(r);
    i === void 0 && (i = {}, e.set(r, i)), i[t.alt] = true;
  }
  return e;
}
function Pp(n) {
  for (const e of Array.from(n.values()))
    if (Object.keys(e).length > 1)
      return true;
  return false;
}
function Mp(n) {
  for (const e of Array.from(n.values()))
    if (Object.keys(e).length === 1)
      return true;
  return false;
}
var Ha;
(function(n) {
  function e(t) {
    return typeof t == "string";
  }
  n.is = e;
})(Ha || (Ha = {}));
var ds;
(function(n) {
  function e(t) {
    return typeof t == "string";
  }
  n.is = e;
})(ds || (ds = {}));
var ja;
(function(n) {
  n.MIN_VALUE = -2147483648, n.MAX_VALUE = 2147483647;
  function e(t) {
    return typeof t == "number" && n.MIN_VALUE <= t && t <= n.MAX_VALUE;
  }
  n.is = e;
})(ja || (ja = {}));
var Jr;
(function(n) {
  n.MIN_VALUE = 0, n.MAX_VALUE = 2147483647;
  function e(t) {
    return typeof t == "number" && n.MIN_VALUE <= t && t <= n.MAX_VALUE;
  }
  n.is = e;
})(Jr || (Jr = {}));
var P;
(function(n) {
  function e(r, i) {
    return r === Number.MAX_VALUE && (r = Jr.MAX_VALUE), i === Number.MAX_VALUE && (i = Jr.MAX_VALUE), { line: r, character: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.objectLiteral(i) && p.uinteger(i.line) && p.uinteger(i.character);
  }
  n.is = t;
})(P || (P = {}));
var b;
(function(n) {
  function e(r, i, s, a2) {
    if (p.uinteger(r) && p.uinteger(i) && p.uinteger(s) && p.uinteger(a2))
      return { start: P.create(r, i), end: P.create(s, a2) };
    if (P.is(r) && P.is(i))
      return { start: r, end: i };
    throw new Error(`Range#create called with invalid arguments[${r}, ${i}, ${s}, ${a2}]`);
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.objectLiteral(i) && P.is(i.start) && P.is(i.end);
  }
  n.is = t;
})(b || (b = {}));
var Qr;
(function(n) {
  function e(r, i) {
    return { uri: r, range: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.objectLiteral(i) && b.is(i.range) && (p.string(i.uri) || p.undefined(i.uri));
  }
  n.is = t;
})(Qr || (Qr = {}));
var za;
(function(n) {
  function e(r, i, s, a2) {
    return { targetUri: r, targetRange: i, targetSelectionRange: s, originSelectionRange: a2 };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.objectLiteral(i) && b.is(i.targetRange) && p.string(i.targetUri) && b.is(i.targetSelectionRange) && (b.is(i.originSelectionRange) || p.undefined(i.originSelectionRange));
  }
  n.is = t;
})(za || (za = {}));
var fs;
(function(n) {
  function e(r, i, s, a2) {
    return {
      red: r,
      green: i,
      blue: s,
      alpha: a2
    };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && p.numberRange(i.red, 0, 1) && p.numberRange(i.green, 0, 1) && p.numberRange(i.blue, 0, 1) && p.numberRange(i.alpha, 0, 1);
  }
  n.is = t;
})(fs || (fs = {}));
var qa;
(function(n) {
  function e(r, i) {
    return {
      range: r,
      color: i
    };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && b.is(i.range) && fs.is(i.color);
  }
  n.is = t;
})(qa || (qa = {}));
var Ya;
(function(n) {
  function e(r, i, s) {
    return {
      label: r,
      textEdit: i,
      additionalTextEdits: s
    };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && p.string(i.label) && (p.undefined(i.textEdit) || Xt.is(i)) && (p.undefined(i.additionalTextEdits) || p.typedArray(i.additionalTextEdits, Xt.is));
  }
  n.is = t;
})(Ya || (Ya = {}));
var Xa;
(function(n) {
  n.Comment = "comment", n.Imports = "imports", n.Region = "region";
})(Xa || (Xa = {}));
var Ja;
(function(n) {
  function e(r, i, s, a2, o, l) {
    const c = {
      startLine: r,
      endLine: i
    };
    return p.defined(s) && (c.startCharacter = s), p.defined(a2) && (c.endCharacter = a2), p.defined(o) && (c.kind = o), p.defined(l) && (c.collapsedText = l), c;
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && p.uinteger(i.startLine) && p.uinteger(i.startLine) && (p.undefined(i.startCharacter) || p.uinteger(i.startCharacter)) && (p.undefined(i.endCharacter) || p.uinteger(i.endCharacter)) && (p.undefined(i.kind) || p.string(i.kind));
  }
  n.is = t;
})(Ja || (Ja = {}));
var hs;
(function(n) {
  function e(r, i) {
    return {
      location: r,
      message: i
    };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && Qr.is(i.location) && p.string(i.message);
  }
  n.is = t;
})(hs || (hs = {}));
var Qa;
(function(n) {
  n.Error = 1, n.Warning = 2, n.Information = 3, n.Hint = 4;
})(Qa || (Qa = {}));
var Za;
(function(n) {
  n.Unnecessary = 1, n.Deprecated = 2;
})(Za || (Za = {}));
var eo;
(function(n) {
  function e(t) {
    const r = t;
    return p.objectLiteral(r) && p.string(r.href);
  }
  n.is = e;
})(eo || (eo = {}));
var Zr;
(function(n) {
  function e(r, i, s, a2, o, l) {
    let c = { range: r, message: i };
    return p.defined(s) && (c.severity = s), p.defined(a2) && (c.code = a2), p.defined(o) && (c.source = o), p.defined(l) && (c.relatedInformation = l), c;
  }
  n.create = e;
  function t(r) {
    var i;
    let s = r;
    return p.defined(s) && b.is(s.range) && p.string(s.message) && (p.number(s.severity) || p.undefined(s.severity)) && (p.integer(s.code) || p.string(s.code) || p.undefined(s.code)) && (p.undefined(s.codeDescription) || p.string((i = s.codeDescription) === null || i === void 0 ? void 0 : i.href)) && (p.string(s.source) || p.undefined(s.source)) && (p.undefined(s.relatedInformation) || p.typedArray(s.relatedInformation, hs.is));
  }
  n.is = t;
})(Zr || (Zr = {}));
var Yt;
(function(n) {
  function e(r, i, ...s) {
    let a2 = { title: r, command: i };
    return p.defined(s) && s.length > 0 && (a2.arguments = s), a2;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.string(i.title) && p.string(i.command);
  }
  n.is = t;
})(Yt || (Yt = {}));
var Xt;
(function(n) {
  function e(s, a2) {
    return { range: s, newText: a2 };
  }
  n.replace = e;
  function t(s, a2) {
    return { range: { start: s, end: s }, newText: a2 };
  }
  n.insert = t;
  function r(s) {
    return { range: s, newText: "" };
  }
  n.del = r;
  function i(s) {
    const a2 = s;
    return p.objectLiteral(a2) && p.string(a2.newText) && b.is(a2.range);
  }
  n.is = i;
})(Xt || (Xt = {}));
var ps;
(function(n) {
  function e(r, i, s) {
    const a2 = { label: r };
    return i !== void 0 && (a2.needsConfirmation = i), s !== void 0 && (a2.description = s), a2;
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && p.string(i.label) && (p.boolean(i.needsConfirmation) || i.needsConfirmation === void 0) && (p.string(i.description) || i.description === void 0);
  }
  n.is = t;
})(ps || (ps = {}));
var Jt;
(function(n) {
  function e(t) {
    const r = t;
    return p.string(r);
  }
  n.is = e;
})(Jt || (Jt = {}));
var to;
(function(n) {
  function e(s, a2, o) {
    return { range: s, newText: a2, annotationId: o };
  }
  n.replace = e;
  function t(s, a2, o) {
    return { range: { start: s, end: s }, newText: a2, annotationId: o };
  }
  n.insert = t;
  function r(s, a2) {
    return { range: s, newText: "", annotationId: a2 };
  }
  n.del = r;
  function i(s) {
    const a2 = s;
    return Xt.is(a2) && (ps.is(a2.annotationId) || Jt.is(a2.annotationId));
  }
  n.is = i;
})(to || (to = {}));
var ms;
(function(n) {
  function e(r, i) {
    return { textDocument: r, edits: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && vs.is(i.textDocument) && Array.isArray(i.edits);
  }
  n.is = t;
})(ms || (ms = {}));
var gs;
(function(n) {
  function e(r, i, s) {
    let a2 = {
      kind: "create",
      uri: r
    };
    return i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (a2.options = i), s !== void 0 && (a2.annotationId = s), a2;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return i && i.kind === "create" && p.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || p.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || p.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Jt.is(i.annotationId));
  }
  n.is = t;
})(gs || (gs = {}));
var ys;
(function(n) {
  function e(r, i, s, a2) {
    let o = {
      kind: "rename",
      oldUri: r,
      newUri: i
    };
    return s !== void 0 && (s.overwrite !== void 0 || s.ignoreIfExists !== void 0) && (o.options = s), a2 !== void 0 && (o.annotationId = a2), o;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return i && i.kind === "rename" && p.string(i.oldUri) && p.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || p.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || p.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Jt.is(i.annotationId));
  }
  n.is = t;
})(ys || (ys = {}));
var Ts;
(function(n) {
  function e(r, i, s) {
    let a2 = {
      kind: "delete",
      uri: r
    };
    return i !== void 0 && (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) && (a2.options = i), s !== void 0 && (a2.annotationId = s), a2;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return i && i.kind === "delete" && p.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || p.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || p.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || Jt.is(i.annotationId));
  }
  n.is = t;
})(Ts || (Ts = {}));
var Rs;
(function(n) {
  function e(t) {
    let r = t;
    return r && (r.changes !== void 0 || r.documentChanges !== void 0) && (r.documentChanges === void 0 || r.documentChanges.every((i) => p.string(i.kind) ? gs.is(i) || ys.is(i) || Ts.is(i) : ms.is(i)));
  }
  n.is = e;
})(Rs || (Rs = {}));
var no;
(function(n) {
  function e(r) {
    return { uri: r };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri);
  }
  n.is = t;
})(no || (no = {}));
var ro;
(function(n) {
  function e(r, i) {
    return { uri: r, version: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri) && p.integer(i.version);
  }
  n.is = t;
})(ro || (ro = {}));
var vs;
(function(n) {
  function e(r, i) {
    return { uri: r, version: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri) && (i.version === null || p.integer(i.version));
  }
  n.is = t;
})(vs || (vs = {}));
var io;
(function(n) {
  function e(r, i, s, a2) {
    return { uri: r, languageId: i, version: s, text: a2 };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.string(i.uri) && p.string(i.languageId) && p.integer(i.version) && p.string(i.text);
  }
  n.is = t;
})(io || (io = {}));
var As;
(function(n) {
  n.PlainText = "plaintext", n.Markdown = "markdown";
  function e(t) {
    const r = t;
    return r === n.PlainText || r === n.Markdown;
  }
  n.is = e;
})(As || (As = {}));
var qn;
(function(n) {
  function e(t) {
    const r = t;
    return p.objectLiteral(t) && As.is(r.kind) && p.string(r.value);
  }
  n.is = e;
})(qn || (qn = {}));
var so;
(function(n) {
  n.Text = 1, n.Method = 2, n.Function = 3, n.Constructor = 4, n.Field = 5, n.Variable = 6, n.Class = 7, n.Interface = 8, n.Module = 9, n.Property = 10, n.Unit = 11, n.Value = 12, n.Enum = 13, n.Keyword = 14, n.Snippet = 15, n.Color = 16, n.File = 17, n.Reference = 18, n.Folder = 19, n.EnumMember = 20, n.Constant = 21, n.Struct = 22, n.Event = 23, n.Operator = 24, n.TypeParameter = 25;
})(so || (so = {}));
var ao;
(function(n) {
  n.PlainText = 1, n.Snippet = 2;
})(ao || (ao = {}));
var oo;
(function(n) {
  n.Deprecated = 1;
})(oo || (oo = {}));
var lo;
(function(n) {
  function e(r, i, s) {
    return { newText: r, insert: i, replace: s };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return i && p.string(i.newText) && b.is(i.insert) && b.is(i.replace);
  }
  n.is = t;
})(lo || (lo = {}));
var co;
(function(n) {
  n.asIs = 1, n.adjustIndentation = 2;
})(co || (co = {}));
var uo;
(function(n) {
  function e(t) {
    const r = t;
    return r && (p.string(r.detail) || r.detail === void 0) && (p.string(r.description) || r.description === void 0);
  }
  n.is = e;
})(uo || (uo = {}));
var fo;
(function(n) {
  function e(t) {
    return { label: t };
  }
  n.create = e;
})(fo || (fo = {}));
var ho;
(function(n) {
  function e(t, r) {
    return { items: t || [], isIncomplete: !!r };
  }
  n.create = e;
})(ho || (ho = {}));
var ei;
(function(n) {
  function e(r) {
    return r.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
  }
  n.fromPlainText = e;
  function t(r) {
    const i = r;
    return p.string(i) || p.objectLiteral(i) && p.string(i.language) && p.string(i.value);
  }
  n.is = t;
})(ei || (ei = {}));
var po;
(function(n) {
  function e(t) {
    let r = t;
    return !!r && p.objectLiteral(r) && (qn.is(r.contents) || ei.is(r.contents) || p.typedArray(r.contents, ei.is)) && (t.range === void 0 || b.is(t.range));
  }
  n.is = e;
})(po || (po = {}));
var mo;
(function(n) {
  function e(t, r) {
    return r ? { label: t, documentation: r } : { label: t };
  }
  n.create = e;
})(mo || (mo = {}));
var go;
(function(n) {
  function e(t, r, ...i) {
    let s = { label: t };
    return p.defined(r) && (s.documentation = r), p.defined(i) ? s.parameters = i : s.parameters = [], s;
  }
  n.create = e;
})(go || (go = {}));
var yo;
(function(n) {
  n.Text = 1, n.Read = 2, n.Write = 3;
})(yo || (yo = {}));
var To;
(function(n) {
  function e(t, r) {
    let i = { range: t };
    return p.number(r) && (i.kind = r), i;
  }
  n.create = e;
})(To || (To = {}));
var Ro;
(function(n) {
  n.File = 1, n.Module = 2, n.Namespace = 3, n.Package = 4, n.Class = 5, n.Method = 6, n.Property = 7, n.Field = 8, n.Constructor = 9, n.Enum = 10, n.Interface = 11, n.Function = 12, n.Variable = 13, n.Constant = 14, n.String = 15, n.Number = 16, n.Boolean = 17, n.Array = 18, n.Object = 19, n.Key = 20, n.Null = 21, n.EnumMember = 22, n.Struct = 23, n.Event = 24, n.Operator = 25, n.TypeParameter = 26;
})(Ro || (Ro = {}));
var vo;
(function(n) {
  n.Deprecated = 1;
})(vo || (vo = {}));
var Ao;
(function(n) {
  function e(t, r, i, s, a2) {
    let o = {
      name: t,
      kind: r,
      location: { uri: s, range: i }
    };
    return a2 && (o.containerName = a2), o;
  }
  n.create = e;
})(Ao || (Ao = {}));
var Eo;
(function(n) {
  function e(t, r, i, s) {
    return s !== void 0 ? { name: t, kind: r, location: { uri: i, range: s } } : { name: t, kind: r, location: { uri: i } };
  }
  n.create = e;
})(Eo || (Eo = {}));
var ko;
(function(n) {
  function e(r, i, s, a2, o, l) {
    let c = {
      name: r,
      detail: i,
      kind: s,
      range: a2,
      selectionRange: o
    };
    return l !== void 0 && (c.children = l), c;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return i && p.string(i.name) && p.number(i.kind) && b.is(i.range) && b.is(i.selectionRange) && (i.detail === void 0 || p.string(i.detail)) && (i.deprecated === void 0 || p.boolean(i.deprecated)) && (i.children === void 0 || Array.isArray(i.children)) && (i.tags === void 0 || Array.isArray(i.tags));
  }
  n.is = t;
})(ko || (ko = {}));
var xo;
(function(n) {
  n.Empty = "", n.QuickFix = "quickfix", n.Refactor = "refactor", n.RefactorExtract = "refactor.extract", n.RefactorInline = "refactor.inline", n.RefactorRewrite = "refactor.rewrite", n.Source = "source", n.SourceOrganizeImports = "source.organizeImports", n.SourceFixAll = "source.fixAll";
})(xo || (xo = {}));
var ti;
(function(n) {
  n.Invoked = 1, n.Automatic = 2;
})(ti || (ti = {}));
var So;
(function(n) {
  function e(r, i, s) {
    let a2 = { diagnostics: r };
    return i != null && (a2.only = i), s != null && (a2.triggerKind = s), a2;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.typedArray(i.diagnostics, Zr.is) && (i.only === void 0 || p.typedArray(i.only, p.string)) && (i.triggerKind === void 0 || i.triggerKind === ti.Invoked || i.triggerKind === ti.Automatic);
  }
  n.is = t;
})(So || (So = {}));
var Io;
(function(n) {
  function e(r, i, s) {
    let a2 = { title: r }, o = true;
    return typeof i == "string" ? (o = false, a2.kind = i) : Yt.is(i) ? a2.command = i : a2.edit = i, o && s !== void 0 && (a2.kind = s), a2;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return i && p.string(i.title) && (i.diagnostics === void 0 || p.typedArray(i.diagnostics, Zr.is)) && (i.kind === void 0 || p.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || Yt.is(i.command)) && (i.isPreferred === void 0 || p.boolean(i.isPreferred)) && (i.edit === void 0 || Rs.is(i.edit));
  }
  n.is = t;
})(Io || (Io = {}));
var Co;
(function(n) {
  function e(r, i) {
    let s = { range: r };
    return p.defined(i) && (s.data = i), s;
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && b.is(i.range) && (p.undefined(i.command) || Yt.is(i.command));
  }
  n.is = t;
})(Co || (Co = {}));
var $o;
(function(n) {
  function e(r, i) {
    return { tabSize: r, insertSpaces: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && p.uinteger(i.tabSize) && p.boolean(i.insertSpaces);
  }
  n.is = t;
})($o || ($o = {}));
var No;
(function(n) {
  function e(r, i, s) {
    return { range: r, target: i, data: s };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.defined(i) && b.is(i.range) && (p.undefined(i.target) || p.string(i.target));
  }
  n.is = t;
})(No || (No = {}));
var wo;
(function(n) {
  function e(r, i) {
    return { range: r, parent: i };
  }
  n.create = e;
  function t(r) {
    let i = r;
    return p.objectLiteral(i) && b.is(i.range) && (i.parent === void 0 || n.is(i.parent));
  }
  n.is = t;
})(wo || (wo = {}));
var _o;
(function(n) {
  n.namespace = "namespace", n.type = "type", n.class = "class", n.enum = "enum", n.interface = "interface", n.struct = "struct", n.typeParameter = "typeParameter", n.parameter = "parameter", n.variable = "variable", n.property = "property", n.enumMember = "enumMember", n.event = "event", n.function = "function", n.method = "method", n.macro = "macro", n.keyword = "keyword", n.modifier = "modifier", n.comment = "comment", n.string = "string", n.number = "number", n.regexp = "regexp", n.operator = "operator", n.decorator = "decorator";
})(_o || (_o = {}));
var Lo;
(function(n) {
  n.declaration = "declaration", n.definition = "definition", n.readonly = "readonly", n.static = "static", n.deprecated = "deprecated", n.abstract = "abstract", n.async = "async", n.modification = "modification", n.documentation = "documentation", n.defaultLibrary = "defaultLibrary";
})(Lo || (Lo = {}));
var Oo;
(function(n) {
  function e(t) {
    const r = t;
    return p.objectLiteral(r) && (r.resultId === void 0 || typeof r.resultId == "string") && Array.isArray(r.data) && (r.data.length === 0 || typeof r.data[0] == "number");
  }
  n.is = e;
})(Oo || (Oo = {}));
var bo;
(function(n) {
  function e(r, i) {
    return { range: r, text: i };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return i != null && b.is(i.range) && p.string(i.text);
  }
  n.is = t;
})(bo || (bo = {}));
var Po;
(function(n) {
  function e(r, i, s) {
    return { range: r, variableName: i, caseSensitiveLookup: s };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return i != null && b.is(i.range) && p.boolean(i.caseSensitiveLookup) && (p.string(i.variableName) || i.variableName === void 0);
  }
  n.is = t;
})(Po || (Po = {}));
var Mo;
(function(n) {
  function e(r, i) {
    return { range: r, expression: i };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return i != null && b.is(i.range) && (p.string(i.expression) || i.expression === void 0);
  }
  n.is = t;
})(Mo || (Mo = {}));
var Do;
(function(n) {
  function e(r, i) {
    return { frameId: r, stoppedLocation: i };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.defined(i) && b.is(r.stoppedLocation);
  }
  n.is = t;
})(Do || (Do = {}));
var Es;
(function(n) {
  n.Type = 1, n.Parameter = 2;
  function e(t) {
    return t === 1 || t === 2;
  }
  n.is = e;
})(Es || (Es = {}));
var ks;
(function(n) {
  function e(r) {
    return { value: r };
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && (i.tooltip === void 0 || p.string(i.tooltip) || qn.is(i.tooltip)) && (i.location === void 0 || Qr.is(i.location)) && (i.command === void 0 || Yt.is(i.command));
  }
  n.is = t;
})(ks || (ks = {}));
var Fo;
(function(n) {
  function e(r, i, s) {
    const a2 = { position: r, label: i };
    return s !== void 0 && (a2.kind = s), a2;
  }
  n.create = e;
  function t(r) {
    const i = r;
    return p.objectLiteral(i) && P.is(i.position) && (p.string(i.label) || p.typedArray(i.label, ks.is)) && (i.kind === void 0 || Es.is(i.kind)) && i.textEdits === void 0 || p.typedArray(i.textEdits, Xt.is) && (i.tooltip === void 0 || p.string(i.tooltip) || qn.is(i.tooltip)) && (i.paddingLeft === void 0 || p.boolean(i.paddingLeft)) && (i.paddingRight === void 0 || p.boolean(i.paddingRight));
  }
  n.is = t;
})(Fo || (Fo = {}));
var Go;
(function(n) {
  function e(t) {
    return { kind: "snippet", value: t };
  }
  n.createSnippet = e;
})(Go || (Go = {}));
var Uo;
(function(n) {
  function e(t, r, i, s) {
    return { insertText: t, filterText: r, range: i, command: s };
  }
  n.create = e;
})(Uo || (Uo = {}));
var Bo;
(function(n) {
  function e(t) {
    return { items: t };
  }
  n.create = e;
})(Bo || (Bo = {}));
var Vo;
(function(n) {
  n.Invoked = 0, n.Automatic = 1;
})(Vo || (Vo = {}));
var Wo;
(function(n) {
  function e(t, r) {
    return { range: t, text: r };
  }
  n.create = e;
})(Wo || (Wo = {}));
var Ko;
(function(n) {
  function e(t, r) {
    return { triggerKind: t, selectedCompletionInfo: r };
  }
  n.create = e;
})(Ko || (Ko = {}));
var Ho;
(function(n) {
  function e(t) {
    const r = t;
    return p.objectLiteral(r) && ds.is(r.uri) && p.string(r.name);
  }
  n.is = e;
})(Ho || (Ho = {}));
var jo;
(function(n) {
  function e(s, a2, o, l) {
    return new Dp(s, a2, o, l);
  }
  n.create = e;
  function t(s) {
    let a2 = s;
    return !!(p.defined(a2) && p.string(a2.uri) && (p.undefined(a2.languageId) || p.string(a2.languageId)) && p.uinteger(a2.lineCount) && p.func(a2.getText) && p.func(a2.positionAt) && p.func(a2.offsetAt));
  }
  n.is = t;
  function r(s, a2) {
    let o = s.getText(), l = i(a2, (u, d) => {
      let h = u.range.start.line - d.range.start.line;
      return h === 0 ? u.range.start.character - d.range.start.character : h;
    }), c = o.length;
    for (let u = l.length - 1; u >= 0; u--) {
      let d = l[u], h = s.offsetAt(d.range.start), f = s.offsetAt(d.range.end);
      if (f <= c)
        o = o.substring(0, h) + d.newText + o.substring(f, o.length);
      else
        throw new Error("Overlapping edit");
      c = h;
    }
    return o;
  }
  n.applyEdits = r;
  function i(s, a2) {
    if (s.length <= 1)
      return s;
    const o = s.length / 2 | 0, l = s.slice(0, o), c = s.slice(o);
    i(l, a2), i(c, a2);
    let u = 0, d = 0, h = 0;
    for (; u < l.length && d < c.length; )
      a2(l[u], c[d]) <= 0 ? s[h++] = l[u++] : s[h++] = c[d++];
    for (; u < l.length; )
      s[h++] = l[u++];
    for (; d < c.length; )
      s[h++] = c[d++];
    return s;
  }
})(jo || (jo = {}));
let Dp = class {
  constructor(e, t, r, i) {
    this._uri = e, this._languageId = t, this._version = r, this._content = i, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(e) {
    if (e) {
      let t = this.offsetAt(e.start), r = this.offsetAt(e.end);
      return this._content.substring(t, r);
    }
    return this._content;
  }
  update(e, t) {
    this._content = e.text, this._version = t, this._lineOffsets = void 0;
  }
  getLineOffsets() {
    if (this._lineOffsets === void 0) {
      let e = [], t = this._content, r = true;
      for (let i = 0; i < t.length; i++) {
        r && (e.push(i), r = false);
        let s = t.charAt(i);
        r = s === "\r" || s === `
`, s === "\r" && i + 1 < t.length && t.charAt(i + 1) === `
` && i++;
      }
      r && t.length > 0 && e.push(t.length), this._lineOffsets = e;
    }
    return this._lineOffsets;
  }
  positionAt(e) {
    e = Math.max(Math.min(e, this._content.length), 0);
    let t = this.getLineOffsets(), r = 0, i = t.length;
    if (i === 0)
      return P.create(0, e);
    for (; r < i; ) {
      let a2 = Math.floor((r + i) / 2);
      t[a2] > e ? i = a2 : r = a2 + 1;
    }
    let s = r - 1;
    return P.create(s, e - t[s]);
  }
  offsetAt(e) {
    let t = this.getLineOffsets();
    if (e.line >= t.length)
      return this._content.length;
    if (e.line < 0)
      return 0;
    let r = t[e.line], i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
    return Math.max(Math.min(r + e.character, i), r);
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
};
var p;
(function(n) {
  const e = Object.prototype.toString;
  function t(f) {
    return typeof f < "u";
  }
  n.defined = t;
  function r(f) {
    return typeof f > "u";
  }
  n.undefined = r;
  function i(f) {
    return f === true || f === false;
  }
  n.boolean = i;
  function s(f) {
    return e.call(f) === "[object String]";
  }
  n.string = s;
  function a2(f) {
    return e.call(f) === "[object Number]";
  }
  n.number = a2;
  function o(f, m, g) {
    return e.call(f) === "[object Number]" && m <= f && f <= g;
  }
  n.numberRange = o;
  function l(f) {
    return e.call(f) === "[object Number]" && -2147483648 <= f && f <= 2147483647;
  }
  n.integer = l;
  function c(f) {
    return e.call(f) === "[object Number]" && 0 <= f && f <= 2147483647;
  }
  n.uinteger = c;
  function u(f) {
    return e.call(f) === "[object Function]";
  }
  n.func = u;
  function d(f) {
    return f !== null && typeof f == "object";
  }
  n.objectLiteral = d;
  function h(f, m) {
    return Array.isArray(f) && f.every(m);
  }
  n.typedArray = h;
})(p || (p = {}));
class Fp {
  constructor() {
    this.nodeStack = [];
  }
  get current() {
    var e;
    return (e = this.nodeStack[this.nodeStack.length - 1]) !== null && e !== void 0 ? e : this.rootNode;
  }
  buildRootNode(e) {
    return this.rootNode = new Pc(e), this.rootNode.root = this.rootNode, this.nodeStack = [this.rootNode], this.rootNode;
  }
  buildCompositeNode(e) {
    const t = new ea();
    return t.grammarSource = e, t.root = this.rootNode, this.current.content.push(t), this.nodeStack.push(t), t;
  }
  buildLeafNode(e, t) {
    const r = new xs(e.startOffset, e.image.length, Ji(e), e.tokenType, !t);
    return r.grammarSource = t, r.root = this.rootNode, this.current.content.push(r), r;
  }
  removeNode(e) {
    const t = e.container;
    if (t) {
      const r = t.content.indexOf(e);
      r >= 0 && t.content.splice(r, 1);
    }
  }
  addHiddenNodes(e) {
    const t = [];
    for (const s of e) {
      const a2 = new xs(s.startOffset, s.image.length, Ji(s), s.tokenType, true);
      a2.root = this.rootNode, t.push(a2);
    }
    let r = this.current, i = false;
    if (r.content.length > 0) {
      r.content.push(...t);
      return;
    }
    for (; r.container; ) {
      const s = r.container.content.indexOf(r);
      if (s > 0) {
        r.container.content.splice(s, 0, ...t), i = true;
        break;
      }
      r = r.container;
    }
    i || this.rootNode.content.unshift(...t);
  }
  construct(e) {
    const t = this.current;
    typeof e.$type == "string" && (this.current.astNode = e), e.$cstNode = t;
    const r = this.nodeStack.pop();
    (r == null ? void 0 : r.content.length) === 0 && this.removeNode(r);
  }
}
class bc {
  /** @deprecated use `container` instead. */
  get parent() {
    return this.container;
  }
  /** @deprecated use `grammarSource` instead. */
  get feature() {
    return this.grammarSource;
  }
  get hidden() {
    return false;
  }
  get astNode() {
    var e, t;
    const r = typeof ((e = this._astNode) === null || e === void 0 ? void 0 : e.$type) == "string" ? this._astNode : (t = this.container) === null || t === void 0 ? void 0 : t.astNode;
    if (!r)
      throw new Error("This node has no associated AST element");
    return r;
  }
  set astNode(e) {
    this._astNode = e;
  }
  /** @deprecated use `astNode` instead. */
  get element() {
    return this.astNode;
  }
  get text() {
    return this.root.fullText.substring(this.offset, this.end);
  }
}
class xs extends bc {
  get offset() {
    return this._offset;
  }
  get length() {
    return this._length;
  }
  get end() {
    return this._offset + this._length;
  }
  get hidden() {
    return this._hidden;
  }
  get tokenType() {
    return this._tokenType;
  }
  get range() {
    return this._range;
  }
  constructor(e, t, r, i, s = false) {
    super(), this._hidden = s, this._offset = e, this._tokenType = i, this._length = t, this._range = r;
  }
}
class ea extends bc {
  constructor() {
    super(...arguments), this.content = new ta(this);
  }
  /** @deprecated use `content` instead. */
  get children() {
    return this.content;
  }
  get offset() {
    var e, t;
    return (t = (e = this.firstNonHiddenNode) === null || e === void 0 ? void 0 : e.offset) !== null && t !== void 0 ? t : 0;
  }
  get length() {
    return this.end - this.offset;
  }
  get end() {
    var e, t;
    return (t = (e = this.lastNonHiddenNode) === null || e === void 0 ? void 0 : e.end) !== null && t !== void 0 ? t : 0;
  }
  get range() {
    const e = this.firstNonHiddenNode, t = this.lastNonHiddenNode;
    if (e && t) {
      if (this._rangeCache === void 0) {
        const { range: r } = e, { range: i } = t;
        this._rangeCache = { start: r.start, end: i.end.line < r.start.line ? r.start : i.end };
      }
      return this._rangeCache;
    } else
      return { start: P.create(0, 0), end: P.create(0, 0) };
  }
  get firstNonHiddenNode() {
    for (const e of this.content)
      if (!e.hidden)
        return e;
    return this.content[0];
  }
  get lastNonHiddenNode() {
    for (let e = this.content.length - 1; e >= 0; e--) {
      const t = this.content[e];
      if (!t.hidden)
        return t;
    }
    return this.content[this.content.length - 1];
  }
}
class ta extends Array {
  constructor(e) {
    super(), this.parent = e, Object.setPrototypeOf(this, ta.prototype);
  }
  push(...e) {
    return this.addParents(e), super.push(...e);
  }
  unshift(...e) {
    return this.addParents(e), super.unshift(...e);
  }
  splice(e, t, ...r) {
    return this.addParents(r), super.splice(e, t, ...r);
  }
  addParents(e) {
    for (const t of e)
      t.container = this.parent;
  }
}
class Pc extends ea {
  get text() {
    return this._text.substring(this.offset, this.end);
  }
  get fullText() {
    return this._text;
  }
  constructor(e) {
    super(), this._text = "", this._text = e ?? "";
  }
}
const Ss = Symbol("Datatype");
function Mi(n) {
  return n.$type === Ss;
}
const zo = "​", Mc = (n) => n.endsWith(zo) ? n : n + zo;
class Dc {
  constructor(e) {
    this._unorderedGroups = /* @__PURE__ */ new Map(), this.allRules = /* @__PURE__ */ new Map(), this.lexer = e.parser.Lexer;
    const t = this.lexer.definition, r = e.LanguageMetaData.mode === "production";
    this.wrapper = new Wp(t, Object.assign(Object.assign({}, e.parser.ParserConfig), { skipValidations: r, errorMessageProvider: e.parser.ParserErrorMessageProvider }));
  }
  alternatives(e, t) {
    this.wrapper.wrapOr(e, t);
  }
  optional(e, t) {
    this.wrapper.wrapOption(e, t);
  }
  many(e, t) {
    this.wrapper.wrapMany(e, t);
  }
  atLeastOne(e, t) {
    this.wrapper.wrapAtLeastOne(e, t);
  }
  getRule(e) {
    return this.allRules.get(e);
  }
  isRecording() {
    return this.wrapper.IS_RECORDING;
  }
  get unorderedGroups() {
    return this._unorderedGroups;
  }
  getRuleStack() {
    return this.wrapper.RULE_STACK;
  }
  finalize() {
    this.wrapper.wrapSelfAnalysis();
  }
}
class Gp extends Dc {
  get current() {
    return this.stack[this.stack.length - 1];
  }
  constructor(e) {
    super(e), this.nodeBuilder = new Fp(), this.stack = [], this.assignmentMap = /* @__PURE__ */ new Map(), this.linker = e.references.Linker, this.converter = e.parser.ValueConverter, this.astReflection = e.shared.AstReflection;
  }
  rule(e, t) {
    const r = this.computeRuleType(e), i = this.wrapper.DEFINE_RULE(Mc(e.name), this.startImplementation(r, t).bind(this));
    return this.allRules.set(e.name, i), e.entry && (this.mainRule = i), i;
  }
  computeRuleType(e) {
    if (!e.fragment) {
      if (Vl(e))
        return Ss;
      {
        const t = Us(e);
        return t ?? e.name;
      }
    }
  }
  parse(e, t = {}) {
    this.nodeBuilder.buildRootNode(e);
    const r = this.lexerResult = this.lexer.tokenize(e);
    this.wrapper.input = r.tokens;
    const i = t.rule ? this.allRules.get(t.rule) : this.mainRule;
    if (!i)
      throw new Error(t.rule ? `No rule found with name '${t.rule}'` : "No main rule available.");
    const s = i.call(this.wrapper, {});
    return this.nodeBuilder.addHiddenNodes(r.hidden), this.unorderedGroups.clear(), this.lexerResult = void 0, {
      value: s,
      lexerErrors: r.errors,
      lexerReport: r.report,
      parserErrors: this.wrapper.errors
    };
  }
  startImplementation(e, t) {
    return (r) => {
      const i = !this.isRecording() && e !== void 0;
      if (i) {
        const a2 = { $type: e };
        this.stack.push(a2), e === Ss && (a2.value = "");
      }
      let s;
      try {
        s = t(r);
      } catch {
        s = void 0;
      }
      return s === void 0 && i && (s = this.construct()), s;
    };
  }
  extractHiddenTokens(e) {
    const t = this.lexerResult.hidden;
    if (!t.length)
      return [];
    const r = e.startOffset;
    for (let i = 0; i < t.length; i++)
      if (t[i].startOffset > r)
        return t.splice(0, i);
    return t.splice(0, t.length);
  }
  consume(e, t, r) {
    const i = this.wrapper.wrapConsume(e, t);
    if (!this.isRecording() && this.isValidToken(i)) {
      const s = this.extractHiddenTokens(i);
      this.nodeBuilder.addHiddenNodes(s);
      const a2 = this.nodeBuilder.buildLeafNode(i, r), { assignment: o, isCrossRef: l } = this.getAssignment(r), c = this.current;
      if (o) {
        const u = ht(r) ? i.image : this.converter.convert(i.image, a2);
        this.assign(o.operator, o.feature, u, a2, l);
      } else if (Mi(c)) {
        let u = i.image;
        ht(r) || (u = this.converter.convert(u, a2).toString()), c.value += u;
      }
    }
  }
  /**
   * Most consumed parser tokens are valid. However there are two cases in which they are not valid:
   *
   * 1. They were inserted during error recovery by the parser. These tokens don't really exist and should not be further processed
   * 2. They contain invalid token ranges. This might include the special EOF token, or other tokens produced by invalid token builders.
   */
  isValidToken(e) {
    return !e.isInsertedInRecovery && !isNaN(e.startOffset) && typeof e.endOffset == "number" && !isNaN(e.endOffset);
  }
  subrule(e, t, r, i, s) {
    let a2;
    !this.isRecording() && !r && (a2 = this.nodeBuilder.buildCompositeNode(i));
    const o = this.wrapper.wrapSubrule(e, t, s);
    !this.isRecording() && a2 && a2.length > 0 && this.performSubruleAssignment(o, i, a2);
  }
  performSubruleAssignment(e, t, r) {
    const { assignment: i, isCrossRef: s } = this.getAssignment(t);
    if (i)
      this.assign(i.operator, i.feature, e, r, s);
    else if (!i) {
      const a2 = this.current;
      if (Mi(a2))
        a2.value += e.toString();
      else if (typeof e == "object" && e) {
        const l = this.assignWithoutOverride(e, a2);
        this.stack.pop(), this.stack.push(l);
      }
    }
  }
  action(e, t) {
    if (!this.isRecording()) {
      let r = this.current;
      if (t.feature && t.operator) {
        r = this.construct(), this.nodeBuilder.removeNode(r.$cstNode), this.nodeBuilder.buildCompositeNode(t).content.push(r.$cstNode);
        const s = { $type: e };
        this.stack.push(s), this.assign(t.operator, t.feature, r, r.$cstNode, false);
      } else
        r.$type = e;
    }
  }
  construct() {
    if (this.isRecording())
      return;
    const e = this.current;
    return Td(e), this.nodeBuilder.construct(e), this.stack.pop(), Mi(e) ? this.converter.convert(e.value, e.$cstNode) : (Rd(this.astReflection, e), e);
  }
  getAssignment(e) {
    if (!this.assignmentMap.has(e)) {
      const t = ui(e, ft);
      this.assignmentMap.set(e, {
        assignment: t,
        isCrossRef: t ? Ms(t.terminal) : false
      });
    }
    return this.assignmentMap.get(e);
  }
  assign(e, t, r, i, s) {
    const a2 = this.current;
    let o;
    switch (s && typeof r == "string" ? o = this.linker.buildReference(a2, t, i, r) : o = r, e) {
      case "=": {
        a2[t] = o;
        break;
      }
      case "?=": {
        a2[t] = true;
        break;
      }
      case "+=":
        Array.isArray(a2[t]) || (a2[t] = []), a2[t].push(o);
    }
  }
  assignWithoutOverride(e, t) {
    for (const [i, s] of Object.entries(t)) {
      const a2 = e[i];
      a2 === void 0 ? e[i] = s : Array.isArray(a2) && Array.isArray(s) && (s.push(...a2), e[i] = s);
    }
    const r = e.$cstNode;
    return r && (r.astNode = void 0, e.$cstNode = void 0), e;
  }
  get definitionErrors() {
    return this.wrapper.definitionErrors;
  }
}
class Up {
  buildMismatchTokenMessage(e) {
    return $t.buildMismatchTokenMessage(e);
  }
  buildNotAllInputParsedMessage(e) {
    return $t.buildNotAllInputParsedMessage(e);
  }
  buildNoViableAltMessage(e) {
    return $t.buildNoViableAltMessage(e);
  }
  buildEarlyExitMessage(e) {
    return $t.buildEarlyExitMessage(e);
  }
}
class Fc extends Up {
  buildMismatchTokenMessage({ expected: e, actual: t }) {
    return `Expecting ${e.LABEL ? "`" + e.LABEL + "`" : e.name.endsWith(":KW") ? `keyword '${e.name.substring(0, e.name.length - 3)}'` : `token of type '${e.name}'`} but found \`${t.image}\`.`;
  }
  buildNotAllInputParsedMessage({ firstRedundant: e }) {
    return `Expecting end of file but found \`${e.image}\`.`;
  }
}
class Bp extends Dc {
  constructor() {
    super(...arguments), this.tokens = [], this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
  }
  action() {
  }
  construct() {
  }
  parse(e) {
    this.resetState();
    const t = this.lexer.tokenize(e, { mode: "partial" });
    return this.tokens = t.tokens, this.wrapper.input = [...this.tokens], this.mainRule.call(this.wrapper, {}), this.unorderedGroups.clear(), {
      tokens: this.tokens,
      elementStack: [...this.lastElementStack],
      tokenIndex: this.nextTokenIndex
    };
  }
  rule(e, t) {
    const r = this.wrapper.DEFINE_RULE(Mc(e.name), this.startImplementation(t).bind(this));
    return this.allRules.set(e.name, r), e.entry && (this.mainRule = r), r;
  }
  resetState() {
    this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
  }
  startImplementation(e) {
    return (t) => {
      const r = this.keepStackSize();
      try {
        e(t);
      } finally {
        this.resetStackSize(r);
      }
    };
  }
  removeUnexpectedElements() {
    this.elementStack.splice(this.stackSize);
  }
  keepStackSize() {
    const e = this.elementStack.length;
    return this.stackSize = e, e;
  }
  resetStackSize(e) {
    this.removeUnexpectedElements(), this.stackSize = e;
  }
  consume(e, t, r) {
    this.wrapper.wrapConsume(e, t), this.isRecording() || (this.lastElementStack = [...this.elementStack, r], this.nextTokenIndex = this.currIdx + 1);
  }
  subrule(e, t, r, i, s) {
    this.before(i), this.wrapper.wrapSubrule(e, t, s), this.after(i);
  }
  before(e) {
    this.isRecording() || this.elementStack.push(e);
  }
  after(e) {
    if (!this.isRecording()) {
      const t = this.elementStack.lastIndexOf(e);
      t >= 0 && this.elementStack.splice(t);
    }
  }
  get currIdx() {
    return this.wrapper.currIdx;
  }
}
const Vp = {
  recoveryEnabled: true,
  nodeLocationTracking: "full",
  skipValidations: true,
  errorMessageProvider: new Fc()
};
class Wp extends Xh {
  constructor(e, t) {
    const r = t && "maxLookahead" in t;
    super(e, Object.assign(Object.assign(Object.assign({}, Vp), { lookaheadStrategy: r ? new qs({ maxLookahead: t.maxLookahead }) : new yp({
      // If validations are skipped, don't log the lookahead warnings
      logging: t.skipValidations ? () => {
      } : void 0
    }) }), t));
  }
  get IS_RECORDING() {
    return this.RECORDING_PHASE;
  }
  DEFINE_RULE(e, t) {
    return this.RULE(e, t);
  }
  wrapSelfAnalysis() {
    this.performSelfAnalysis();
  }
  wrapConsume(e, t) {
    return this.consume(e, t);
  }
  wrapSubrule(e, t, r) {
    return this.subrule(e, t, {
      ARGS: [r]
    });
  }
  wrapOr(e, t) {
    this.or(e, t);
  }
  wrapOption(e, t) {
    this.option(e, t);
  }
  wrapMany(e, t) {
    this.many(e, t);
  }
  wrapAtLeastOne(e, t) {
    this.atLeastOne(e, t);
  }
}
function Gc(n, e, t) {
  return Kp({
    parser: e,
    tokens: t,
    ruleNames: /* @__PURE__ */ new Map()
  }, n), e;
}
function Kp(n, e) {
  const t = Dl(e, false), r = ee(e.rules).filter(we).filter((i) => t.has(i));
  for (const i of r) {
    const s = Object.assign(Object.assign({}, n), { consume: 1, optional: 1, subrule: 1, many: 1, or: 1 });
    n.parser.rule(i, gt(s, i.definition));
  }
}
function gt(n, e, t = false) {
  let r;
  if (ht(e))
    r = Jp(n, e);
  else if (ci(e))
    r = Hp(n, e);
  else if (ft(e))
    r = gt(n, e.terminal);
  else if (Ms(e))
    r = Uc(n, e);
  else if (pt(e))
    r = jp(n, e);
  else if (_l(e))
    r = qp(n, e);
  else if (Ll(e))
    r = Yp(n, e);
  else if (Ds(e))
    r = Xp(n, e);
  else if (ud(e)) {
    const i = n.consume++;
    r = () => n.parser.consume(i, nt, e);
  } else
    throw new Cl(e.$cstNode, `Unexpected element type: ${e.$type}`);
  return Bc(n, t ? void 0 : ni(e), r, e.cardinality);
}
function Hp(n, e) {
  const t = Bs(e);
  return () => n.parser.action(t, e);
}
function jp(n, e) {
  const t = e.rule.ref;
  if (we(t)) {
    const r = n.subrule++, i = t.fragment, s = e.arguments.length > 0 ? zp(t, e.arguments) : () => ({});
    return (a2) => n.parser.subrule(r, Vc(n, t), i, e, s(a2));
  } else if (Rt(t)) {
    const r = n.consume++, i = Is(n, t.name);
    return () => n.parser.consume(r, i, e);
  } else if (t)
    Jn();
  else
    throw new Cl(e.$cstNode, `Undefined rule: ${e.rule.$refText}`);
}
function zp(n, e) {
  const t = e.map((r) => je(r.value));
  return (r) => {
    const i = {};
    for (let s = 0; s < t.length; s++) {
      const a2 = n.parameters[s], o = t[s];
      i[a2.name] = o(r);
    }
    return i;
  };
}
function je(n) {
  if (id(n)) {
    const e = je(n.left), t = je(n.right);
    return (r) => e(r) || t(r);
  } else if (rd(n)) {
    const e = je(n.left), t = je(n.right);
    return (r) => e(r) && t(r);
  } else if (sd(n)) {
    const e = je(n.value);
    return (t) => !e(t);
  } else if (ad(n)) {
    const e = n.parameter.ref.name;
    return (t) => t !== void 0 && t[e] === true;
  } else if (nd(n)) {
    const e = !!n.true;
    return () => e;
  }
  Jn();
}
function qp(n, e) {
  if (e.elements.length === 1)
    return gt(n, e.elements[0]);
  {
    const t = [];
    for (const i of e.elements) {
      const s = {
        // Since we handle the guard condition in the alternative already
        // We can ignore the group guard condition inside
        ALT: gt(n, i, true)
      }, a2 = ni(i);
      a2 && (s.GATE = je(a2)), t.push(s);
    }
    const r = n.or++;
    return (i) => n.parser.alternatives(r, t.map((s) => {
      const a2 = {
        ALT: () => s.ALT(i)
      }, o = s.GATE;
      return o && (a2.GATE = () => o(i)), a2;
    }));
  }
}
function Yp(n, e) {
  if (e.elements.length === 1)
    return gt(n, e.elements[0]);
  const t = [];
  for (const o of e.elements) {
    const l = {
      // Since we handle the guard condition in the alternative already
      // We can ignore the group guard condition inside
      ALT: gt(n, o, true)
    }, c = ni(o);
    c && (l.GATE = je(c)), t.push(l);
  }
  const r = n.or++, i = (o, l) => {
    const c = l.getRuleStack().join("-");
    return `uGroup_${o}_${c}`;
  }, s = (o) => n.parser.alternatives(r, t.map((l, c) => {
    const u = { ALT: () => true }, d = n.parser;
    u.ALT = () => {
      if (l.ALT(o), !d.isRecording()) {
        const f = i(r, d);
        d.unorderedGroups.get(f) || d.unorderedGroups.set(f, []);
        const m = d.unorderedGroups.get(f);
        typeof (m == null ? void 0 : m[c]) > "u" && (m[c] = true);
      }
    };
    const h = l.GATE;
    return h ? u.GATE = () => h(o) : u.GATE = () => {
      const f = d.unorderedGroups.get(i(r, d));
      return !(f != null && f[c]);
    }, u;
  })), a2 = Bc(n, ni(e), s, "*");
  return (o) => {
    a2(o), n.parser.isRecording() || n.parser.unorderedGroups.delete(i(r, n.parser));
  };
}
function Xp(n, e) {
  const t = e.elements.map((r) => gt(n, r));
  return (r) => t.forEach((i) => i(r));
}
function ni(n) {
  if (Ds(n))
    return n.guardCondition;
}
function Uc(n, e, t = e.terminal) {
  if (t)
    if (pt(t) && we(t.rule.ref)) {
      const r = t.rule.ref, i = n.subrule++;
      return (s) => n.parser.subrule(i, Vc(n, r), false, e, s);
    } else if (pt(t) && Rt(t.rule.ref)) {
      const r = n.consume++, i = Is(n, t.rule.ref.name);
      return () => n.parser.consume(r, i, e);
    } else if (ht(t)) {
      const r = n.consume++, i = Is(n, t.value);
      return () => n.parser.consume(r, i, e);
    } else
      throw new Error("Could not build cross reference parser");
  else {
    if (!e.type.ref)
      throw new Error("Could not resolve reference to type: " + e.type.$refText);
    const r = Ul(e.type.ref), i = r == null ? void 0 : r.terminal;
    if (!i)
      throw new Error("Could not find name assignment for type: " + Bs(e.type.ref));
    return Uc(n, e, i);
  }
}
function Jp(n, e) {
  const t = n.consume++, r = n.tokens[e.value];
  if (!r)
    throw new Error("Could not find token for keyword: " + e.value);
  return () => n.parser.consume(t, r, e);
}
function Bc(n, e, t, r) {
  const i = e && je(e);
  if (!r)
    if (i) {
      const s = n.or++;
      return (a2) => n.parser.alternatives(s, [
        {
          ALT: () => t(a2),
          GATE: () => i(a2)
        },
        {
          ALT: Ba(),
          GATE: () => !i(a2)
        }
      ]);
    } else
      return t;
  if (r === "*") {
    const s = n.many++;
    return (a2) => n.parser.many(s, {
      DEF: () => t(a2),
      GATE: i ? () => i(a2) : void 0
    });
  } else if (r === "+") {
    const s = n.many++;
    if (i) {
      const a2 = n.or++;
      return (o) => n.parser.alternatives(a2, [
        {
          ALT: () => n.parser.atLeastOne(s, {
            DEF: () => t(o)
          }),
          GATE: () => i(o)
        },
        {
          ALT: Ba(),
          GATE: () => !i(o)
        }
      ]);
    } else
      return (a2) => n.parser.atLeastOne(s, {
        DEF: () => t(a2)
      });
  } else if (r === "?") {
    const s = n.optional++;
    return (a2) => n.parser.optional(s, {
      DEF: () => t(a2),
      GATE: i ? () => i(a2) : void 0
    });
  } else
    Jn();
}
function Vc(n, e) {
  const t = Qp(n, e), r = n.parser.getRule(t);
  if (!r)
    throw new Error(`Rule "${t}" not found."`);
  return r;
}
function Qp(n, e) {
  if (we(e))
    return e.name;
  if (n.ruleNames.has(e))
    return n.ruleNames.get(e);
  {
    let t = e, r = t.$container, i = e.$type;
    for (; !we(r); )
      (Ds(r) || _l(r) || Ll(r)) && (i = r.elements.indexOf(t).toString() + ":" + i), t = r, r = r.$container;
    return i = r.name + ":" + i, n.ruleNames.set(e, i), i;
  }
}
function Is(n, e) {
  const t = n.tokens[e];
  if (!t)
    throw new Error(`Token "${e}" not found."`);
  return t;
}
function Zp(n) {
  const e = n.Grammar, t = n.parser.Lexer, r = new Bp(n);
  return Gc(e, r, t.definition), r.finalize(), r;
}
function em(n) {
  const e = tm(n);
  return e.finalize(), e;
}
function tm(n) {
  const e = n.Grammar, t = n.parser.Lexer, r = new Gp(n);
  return Gc(e, r, t.definition);
}
class Wc {
  constructor() {
    this.diagnostics = [];
  }
  buildTokens(e, t) {
    const r = ee(Dl(e, false)), i = this.buildTerminalTokens(r), s = this.buildKeywordTokens(r, i, t);
    return i.forEach((a2) => {
      const o = a2.PATTERN;
      typeof o == "object" && o && "test" in o && Zi(o) ? s.unshift(a2) : s.push(a2);
    }), s;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  flushLexingReport(e) {
    return { diagnostics: this.popDiagnostics() };
  }
  popDiagnostics() {
    const e = [...this.diagnostics];
    return this.diagnostics = [], e;
  }
  buildTerminalTokens(e) {
    return e.filter(Rt).filter((t) => !t.fragment).map((t) => this.buildTerminalToken(t)).toArray();
  }
  buildTerminalToken(e) {
    const t = Vs(e), r = this.requiresCustomPattern(t) ? this.regexPatternFunction(t) : t, i = {
      name: e.name,
      PATTERN: r
    };
    return typeof r == "function" && (i.LINE_BREAKS = true), e.hidden && (i.GROUP = Zi(t) ? de.SKIPPED : "hidden"), i;
  }
  requiresCustomPattern(e) {
    return e.flags.includes("u") || e.flags.includes("s") ? true : !!(e.source.includes("?<=") || e.source.includes("?<!"));
  }
  regexPatternFunction(e) {
    const t = new RegExp(e, e.flags + "y");
    return (r, i) => (t.lastIndex = i, t.exec(r));
  }
  buildKeywordTokens(e, t, r) {
    return e.filter(we).flatMap((i) => Qn(i).filter(ht)).distinct((i) => i.value).toArray().sort((i, s) => s.value.length - i.value.length).map((i) => this.buildKeywordToken(i, t, !!(r != null && r.caseInsensitive)));
  }
  buildKeywordToken(e, t, r) {
    const i = this.buildKeywordPattern(e, r), s = {
      name: e.value,
      PATTERN: i,
      LONGER_ALT: this.findLongerAlt(e, t)
    };
    return typeof i == "function" && (s.LINE_BREAKS = true), s;
  }
  buildKeywordPattern(e, t) {
    return t ? new RegExp($d(e.value)) : e.value;
  }
  findLongerAlt(e, t) {
    return t.reduce((r, i) => {
      const s = i == null ? void 0 : i.PATTERN;
      return s != null && s.source && Nd("^" + s.source + "$", e.value) && r.push(i), r;
    }, []);
  }
}
class Kc {
  convert(e, t) {
    let r = t.grammarSource;
    if (Ms(r) && (r = Od(r)), pt(r)) {
      const i = r.rule.ref;
      if (!i)
        throw new Error("This cst node was not parsed by a rule.");
      return this.runConverter(i, e, t);
    }
    return e;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  runConverter(e, t, r) {
    var i;
    switch (e.name.toUpperCase()) {
      case "INT":
        return Ke.convertInt(t);
      case "STRING":
        return Ke.convertString(t);
      case "ID":
        return Ke.convertID(t);
    }
    switch ((i = Ud(e)) === null || i === void 0 ? void 0 : i.toLowerCase()) {
      case "number":
        return Ke.convertNumber(t);
      case "boolean":
        return Ke.convertBoolean(t);
      case "bigint":
        return Ke.convertBigint(t);
      case "date":
        return Ke.convertDate(t);
      default:
        return t;
    }
  }
}
var Ke;
(function(n) {
  function e(c) {
    let u = "";
    for (let d = 1; d < c.length - 1; d++) {
      const h = c.charAt(d);
      if (h === "\\") {
        const f = c.charAt(++d);
        u += t(f);
      } else
        u += h;
    }
    return u;
  }
  n.convertString = e;
  function t(c) {
    switch (c) {
      case "b":
        return "\b";
      case "f":
        return "\f";
      case "n":
        return `
`;
      case "r":
        return "\r";
      case "t":
        return "	";
      case "v":
        return "\v";
      case "0":
        return "\0";
      default:
        return c;
    }
  }
  function r(c) {
    return c.charAt(0) === "^" ? c.substring(1) : c;
  }
  n.convertID = r;
  function i(c) {
    return parseInt(c);
  }
  n.convertInt = i;
  function s(c) {
    return BigInt(c);
  }
  n.convertBigint = s;
  function a2(c) {
    return new Date(c);
  }
  n.convertDate = a2;
  function o(c) {
    return Number(c);
  }
  n.convertNumber = o;
  function l(c) {
    return c.toLowerCase() === "true";
  }
  n.convertBoolean = l;
})(Ke || (Ke = {}));
var ct = {}, Tr = {}, qo;
function Hc() {
  if (qo)
    return Tr;
  qo = 1, Object.defineProperty(Tr, "__esModule", { value: true });
  let n;
  function e() {
    if (n === void 0)
      throw new Error("No runtime abstraction layer installed");
    return n;
  }
  return function(t) {
    function r(i) {
      if (i === void 0)
        throw new Error("No runtime abstraction layer provided");
      n = i;
    }
    t.install = r;
  }(e || (e = {})), Tr.default = e, Tr;
}
var J = {}, Yo;
function nm() {
  if (Yo)
    return J;
  Yo = 1, Object.defineProperty(J, "__esModule", { value: true }), J.stringArray = J.array = J.func = J.error = J.number = J.string = J.boolean = void 0;
  function n(o) {
    return o === true || o === false;
  }
  J.boolean = n;
  function e(o) {
    return typeof o == "string" || o instanceof String;
  }
  J.string = e;
  function t(o) {
    return typeof o == "number" || o instanceof Number;
  }
  J.number = t;
  function r(o) {
    return o instanceof Error;
  }
  J.error = r;
  function i(o) {
    return typeof o == "function";
  }
  J.func = i;
  function s(o) {
    return Array.isArray(o);
  }
  J.array = s;
  function a2(o) {
    return s(o) && o.every((l) => e(l));
  }
  return J.stringArray = a2, J;
}
var ut = {}, Xo;
function jc() {
  if (Xo)
    return ut;
  Xo = 1, Object.defineProperty(ut, "__esModule", { value: true }), ut.Emitter = ut.Event = void 0;
  const n = Hc();
  var e;
  (function(i) {
    const s = { dispose() {
    } };
    i.None = function() {
      return s;
    };
  })(e || (ut.Event = e = {}));
  class t {
    add(s, a2 = null, o) {
      this._callbacks || (this._callbacks = [], this._contexts = []), this._callbacks.push(s), this._contexts.push(a2), Array.isArray(o) && o.push({ dispose: () => this.remove(s, a2) });
    }
    remove(s, a2 = null) {
      if (!this._callbacks)
        return;
      let o = false;
      for (let l = 0, c = this._callbacks.length; l < c; l++)
        if (this._callbacks[l] === s)
          if (this._contexts[l] === a2) {
            this._callbacks.splice(l, 1), this._contexts.splice(l, 1);
            return;
          } else
            o = true;
      if (o)
        throw new Error("When adding a listener with a context, you should remove it with the same context");
    }
    invoke(...s) {
      if (!this._callbacks)
        return [];
      const a2 = [], o = this._callbacks.slice(0), l = this._contexts.slice(0);
      for (let c = 0, u = o.length; c < u; c++)
        try {
          a2.push(o[c].apply(l[c], s));
        } catch (d) {
          (0, n.default)().console.error(d);
        }
      return a2;
    }
    isEmpty() {
      return !this._callbacks || this._callbacks.length === 0;
    }
    dispose() {
      this._callbacks = void 0, this._contexts = void 0;
    }
  }
  class r {
    constructor(s) {
      this._options = s;
    }
    /**
     * For the public to allow to subscribe
     * to events from this Emitter
     */
    get event() {
      return this._event || (this._event = (s, a2, o) => {
        this._callbacks || (this._callbacks = new t()), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(s, a2);
        const l = {
          dispose: () => {
            this._callbacks && (this._callbacks.remove(s, a2), l.dispose = r._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty() && this._options.onLastListenerRemove(this));
          }
        };
        return Array.isArray(o) && o.push(l), l;
      }), this._event;
    }
    /**
     * To be kept private to fire an event to
     * subscribers
     */
    fire(s) {
      this._callbacks && this._callbacks.invoke.call(this._callbacks, s);
    }
    dispose() {
      this._callbacks && (this._callbacks.dispose(), this._callbacks = void 0);
    }
  }
  return ut.Emitter = r, r._noop = function() {
  }, ut;
}
var Jo;
function rm() {
  if (Jo)
    return ct;
  Jo = 1, Object.defineProperty(ct, "__esModule", { value: true }), ct.CancellationTokenSource = ct.CancellationToken = void 0;
  const n = Hc(), e = nm(), t = jc();
  var r;
  (function(o) {
    o.None = Object.freeze({
      isCancellationRequested: false,
      onCancellationRequested: t.Event.None
    }), o.Cancelled = Object.freeze({
      isCancellationRequested: true,
      onCancellationRequested: t.Event.None
    });
    function l(c) {
      const u = c;
      return u && (u === o.None || u === o.Cancelled || e.boolean(u.isCancellationRequested) && !!u.onCancellationRequested);
    }
    o.is = l;
  })(r || (ct.CancellationToken = r = {}));
  const i = Object.freeze(function(o, l) {
    const c = (0, n.default)().timer.setTimeout(o.bind(l), 0);
    return { dispose() {
      c.dispose();
    } };
  });
  class s {
    constructor() {
      this._isCancelled = false;
    }
    cancel() {
      this._isCancelled || (this._isCancelled = true, this._emitter && (this._emitter.fire(void 0), this.dispose()));
    }
    get isCancellationRequested() {
      return this._isCancelled;
    }
    get onCancellationRequested() {
      return this._isCancelled ? i : (this._emitter || (this._emitter = new t.Emitter()), this._emitter.event);
    }
    dispose() {
      this._emitter && (this._emitter.dispose(), this._emitter = void 0);
    }
  }
  class a2 {
    get token() {
      return this._token || (this._token = new s()), this._token;
    }
    cancel() {
      this._token ? this._token.cancel() : this._token = r.Cancelled;
    }
    dispose() {
      this._token ? this._token instanceof s && this._token.dispose() : this._token = r.None;
    }
  }
  return ct.CancellationTokenSource = a2, ct;
}
var V = rm();
function im() {
  return new Promise((n) => {
    typeof setImmediate > "u" ? setTimeout(n, 0) : setImmediate(n);
  });
}
let wr = 0, sm = 10;
function am() {
  return wr = performance.now(), new V.CancellationTokenSource();
}
const ri = Symbol("OperationCancelled");
function vi(n) {
  return n === ri;
}
async function Ae(n) {
  if (n === V.CancellationToken.None)
    return;
  const e = performance.now();
  if (e - wr >= sm && (wr = e, await im(), wr = performance.now()), n.isCancellationRequested)
    throw ri;
}
class na {
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = (r) => (e(r), this), this.reject = (r) => (t(r), this);
    });
  }
}
class Yn {
  constructor(e, t, r, i) {
    this._uri = e, this._languageId = t, this._version = r, this._content = i, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(e) {
    if (e) {
      const t = this.offsetAt(e.start), r = this.offsetAt(e.end);
      return this._content.substring(t, r);
    }
    return this._content;
  }
  update(e, t) {
    for (const r of e)
      if (Yn.isIncremental(r)) {
        const i = qc(r.range), s = this.offsetAt(i.start), a2 = this.offsetAt(i.end);
        this._content = this._content.substring(0, s) + r.text + this._content.substring(a2, this._content.length);
        const o = Math.max(i.start.line, 0), l = Math.max(i.end.line, 0);
        let c = this._lineOffsets;
        const u = Qo(r.text, false, s);
        if (l - o === u.length)
          for (let h = 0, f = u.length; h < f; h++)
            c[h + o + 1] = u[h];
        else
          u.length < 1e4 ? c.splice(o + 1, l - o, ...u) : this._lineOffsets = c = c.slice(0, o + 1).concat(u, c.slice(l + 1));
        const d = r.text.length - (a2 - s);
        if (d !== 0)
          for (let h = o + 1 + u.length, f = c.length; h < f; h++)
            c[h] = c[h] + d;
      } else if (Yn.isFull(r))
        this._content = r.text, this._lineOffsets = void 0;
      else
        throw new Error("Unknown change event received");
    this._version = t;
  }
  getLineOffsets() {
    return this._lineOffsets === void 0 && (this._lineOffsets = Qo(this._content, true)), this._lineOffsets;
  }
  positionAt(e) {
    e = Math.max(Math.min(e, this._content.length), 0);
    const t = this.getLineOffsets();
    let r = 0, i = t.length;
    if (i === 0)
      return { line: 0, character: e };
    for (; r < i; ) {
      const a2 = Math.floor((r + i) / 2);
      t[a2] > e ? i = a2 : r = a2 + 1;
    }
    const s = r - 1;
    return e = this.ensureBeforeEOL(e, t[s]), { line: s, character: e - t[s] };
  }
  offsetAt(e) {
    const t = this.getLineOffsets();
    if (e.line >= t.length)
      return this._content.length;
    if (e.line < 0)
      return 0;
    const r = t[e.line];
    if (e.character <= 0)
      return r;
    const i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length, s = Math.min(r + e.character, i);
    return this.ensureBeforeEOL(s, r);
  }
  ensureBeforeEOL(e, t) {
    for (; e > t && zc(this._content.charCodeAt(e - 1)); )
      e--;
    return e;
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
  static isIncremental(e) {
    const t = e;
    return t != null && typeof t.text == "string" && t.range !== void 0 && (t.rangeLength === void 0 || typeof t.rangeLength == "number");
  }
  static isFull(e) {
    const t = e;
    return t != null && typeof t.text == "string" && t.range === void 0 && t.rangeLength === void 0;
  }
}
var Cs;
(function(n) {
  function e(i, s, a2, o) {
    return new Yn(i, s, a2, o);
  }
  n.create = e;
  function t(i, s, a2) {
    if (i instanceof Yn)
      return i.update(s, a2), i;
    throw new Error("TextDocument.update: document must be created by TextDocument.create");
  }
  n.update = t;
  function r(i, s) {
    const a2 = i.getText(), o = $s(s.map(om), (u, d) => {
      const h = u.range.start.line - d.range.start.line;
      return h === 0 ? u.range.start.character - d.range.start.character : h;
    });
    let l = 0;
    const c = [];
    for (const u of o) {
      const d = i.offsetAt(u.range.start);
      if (d < l)
        throw new Error("Overlapping edit");
      d > l && c.push(a2.substring(l, d)), u.newText.length && c.push(u.newText), l = i.offsetAt(u.range.end);
    }
    return c.push(a2.substr(l)), c.join("");
  }
  n.applyEdits = r;
})(Cs || (Cs = {}));
function $s(n, e) {
  if (n.length <= 1)
    return n;
  const t = n.length / 2 | 0, r = n.slice(0, t), i = n.slice(t);
  $s(r, e), $s(i, e);
  let s = 0, a2 = 0, o = 0;
  for (; s < r.length && a2 < i.length; )
    e(r[s], i[a2]) <= 0 ? n[o++] = r[s++] : n[o++] = i[a2++];
  for (; s < r.length; )
    n[o++] = r[s++];
  for (; a2 < i.length; )
    n[o++] = i[a2++];
  return n;
}
function Qo(n, e, t = 0) {
  const r = e ? [t] : [];
  for (let i = 0; i < n.length; i++) {
    const s = n.charCodeAt(i);
    zc(s) && (s === 13 && i + 1 < n.length && n.charCodeAt(i + 1) === 10 && i++, r.push(t + i + 1));
  }
  return r;
}
function zc(n) {
  return n === 13 || n === 10;
}
function qc(n) {
  const e = n.start, t = n.end;
  return e.line > t.line || e.line === t.line && e.character > t.character ? { start: t, end: e } : n;
}
function om(n) {
  const e = qc(n.range);
  return e !== n.range ? { newText: n.newText, range: e } : n;
}
var Yc;
(() => {
  var n = { 470: (i) => {
    function s(l) {
      if (typeof l != "string")
        throw new TypeError("Path must be a string. Received " + JSON.stringify(l));
    }
    function a2(l, c) {
      for (var u, d = "", h = 0, f = -1, m = 0, g = 0; g <= l.length; ++g) {
        if (g < l.length)
          u = l.charCodeAt(g);
        else {
          if (u === 47)
            break;
          u = 47;
        }
        if (u === 47) {
          if (!(f === g - 1 || m === 1))
            if (f !== g - 1 && m === 2) {
              if (d.length < 2 || h !== 2 || d.charCodeAt(d.length - 1) !== 46 || d.charCodeAt(d.length - 2) !== 46) {
                if (d.length > 2) {
                  var v = d.lastIndexOf("/");
                  if (v !== d.length - 1) {
                    v === -1 ? (d = "", h = 0) : h = (d = d.slice(0, v)).length - 1 - d.lastIndexOf("/"), f = g, m = 0;
                    continue;
                  }
                } else if (d.length === 2 || d.length === 1) {
                  d = "", h = 0, f = g, m = 0;
                  continue;
                }
              }
              c && (d.length > 0 ? d += "/.." : d = "..", h = 2);
            } else
              d.length > 0 ? d += "/" + l.slice(f + 1, g) : d = l.slice(f + 1, g), h = g - f - 1;
          f = g, m = 0;
        } else
          u === 46 && m !== -1 ? ++m : m = -1;
      }
      return d;
    }
    var o = { resolve: function() {
      for (var l, c = "", u = false, d = arguments.length - 1; d >= -1 && !u; d--) {
        var h;
        d >= 0 ? h = arguments[d] : (l === void 0 && (l = process.cwd()), h = l), s(h), h.length !== 0 && (c = h + "/" + c, u = h.charCodeAt(0) === 47);
      }
      return c = a2(c, !u), u ? c.length > 0 ? "/" + c : "/" : c.length > 0 ? c : ".";
    }, normalize: function(l) {
      if (s(l), l.length === 0)
        return ".";
      var c = l.charCodeAt(0) === 47, u = l.charCodeAt(l.length - 1) === 47;
      return (l = a2(l, !c)).length !== 0 || c || (l = "."), l.length > 0 && u && (l += "/"), c ? "/" + l : l;
    }, isAbsolute: function(l) {
      return s(l), l.length > 0 && l.charCodeAt(0) === 47;
    }, join: function() {
      if (arguments.length === 0)
        return ".";
      for (var l, c = 0; c < arguments.length; ++c) {
        var u = arguments[c];
        s(u), u.length > 0 && (l === void 0 ? l = u : l += "/" + u);
      }
      return l === void 0 ? "." : o.normalize(l);
    }, relative: function(l, c) {
      if (s(l), s(c), l === c || (l = o.resolve(l)) === (c = o.resolve(c)))
        return "";
      for (var u = 1; u < l.length && l.charCodeAt(u) === 47; ++u)
        ;
      for (var d = l.length, h = d - u, f = 1; f < c.length && c.charCodeAt(f) === 47; ++f)
        ;
      for (var m = c.length - f, g = h < m ? h : m, v = -1, y = 0; y <= g; ++y) {
        if (y === g) {
          if (m > g) {
            if (c.charCodeAt(f + y) === 47)
              return c.slice(f + y + 1);
            if (y === 0)
              return c.slice(f + y);
          } else
            h > g && (l.charCodeAt(u + y) === 47 ? v = y : y === 0 && (v = 0));
          break;
        }
        var A = l.charCodeAt(u + y);
        if (A !== c.charCodeAt(f + y))
          break;
        A === 47 && (v = y);
      }
      var R = "";
      for (y = u + v + 1; y <= d; ++y)
        y !== d && l.charCodeAt(y) !== 47 || (R.length === 0 ? R += ".." : R += "/..");
      return R.length > 0 ? R + c.slice(f + v) : (f += v, c.charCodeAt(f) === 47 && ++f, c.slice(f));
    }, _makeLong: function(l) {
      return l;
    }, dirname: function(l) {
      if (s(l), l.length === 0)
        return ".";
      for (var c = l.charCodeAt(0), u = c === 47, d = -1, h = true, f = l.length - 1; f >= 1; --f)
        if ((c = l.charCodeAt(f)) === 47) {
          if (!h) {
            d = f;
            break;
          }
        } else
          h = false;
      return d === -1 ? u ? "/" : "." : u && d === 1 ? "//" : l.slice(0, d);
    }, basename: function(l, c) {
      if (c !== void 0 && typeof c != "string")
        throw new TypeError('"ext" argument must be a string');
      s(l);
      var u, d = 0, h = -1, f = true;
      if (c !== void 0 && c.length > 0 && c.length <= l.length) {
        if (c.length === l.length && c === l)
          return "";
        var m = c.length - 1, g = -1;
        for (u = l.length - 1; u >= 0; --u) {
          var v = l.charCodeAt(u);
          if (v === 47) {
            if (!f) {
              d = u + 1;
              break;
            }
          } else
            g === -1 && (f = false, g = u + 1), m >= 0 && (v === c.charCodeAt(m) ? --m == -1 && (h = u) : (m = -1, h = g));
        }
        return d === h ? h = g : h === -1 && (h = l.length), l.slice(d, h);
      }
      for (u = l.length - 1; u >= 0; --u)
        if (l.charCodeAt(u) === 47) {
          if (!f) {
            d = u + 1;
            break;
          }
        } else
          h === -1 && (f = false, h = u + 1);
      return h === -1 ? "" : l.slice(d, h);
    }, extname: function(l) {
      s(l);
      for (var c = -1, u = 0, d = -1, h = true, f = 0, m = l.length - 1; m >= 0; --m) {
        var g = l.charCodeAt(m);
        if (g !== 47)
          d === -1 && (h = false, d = m + 1), g === 46 ? c === -1 ? c = m : f !== 1 && (f = 1) : c !== -1 && (f = -1);
        else if (!h) {
          u = m + 1;
          break;
        }
      }
      return c === -1 || d === -1 || f === 0 || f === 1 && c === d - 1 && c === u + 1 ? "" : l.slice(c, d);
    }, format: function(l) {
      if (l === null || typeof l != "object")
        throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof l);
      return function(c, u) {
        var d = u.dir || u.root, h = u.base || (u.name || "") + (u.ext || "");
        return d ? d === u.root ? d + h : d + "/" + h : h;
      }(0, l);
    }, parse: function(l) {
      s(l);
      var c = { root: "", dir: "", base: "", ext: "", name: "" };
      if (l.length === 0)
        return c;
      var u, d = l.charCodeAt(0), h = d === 47;
      h ? (c.root = "/", u = 1) : u = 0;
      for (var f = -1, m = 0, g = -1, v = true, y = l.length - 1, A = 0; y >= u; --y)
        if ((d = l.charCodeAt(y)) !== 47)
          g === -1 && (v = false, g = y + 1), d === 46 ? f === -1 ? f = y : A !== 1 && (A = 1) : f !== -1 && (A = -1);
        else if (!v) {
          m = y + 1;
          break;
        }
      return f === -1 || g === -1 || A === 0 || A === 1 && f === g - 1 && f === m + 1 ? g !== -1 && (c.base = c.name = m === 0 && h ? l.slice(1, g) : l.slice(m, g)) : (m === 0 && h ? (c.name = l.slice(1, f), c.base = l.slice(1, g)) : (c.name = l.slice(m, f), c.base = l.slice(m, g)), c.ext = l.slice(f, g)), m > 0 ? c.dir = l.slice(0, m - 1) : h && (c.dir = "/"), c;
    }, sep: "/", delimiter: ":", win32: null, posix: null };
    o.posix = o, i.exports = o;
  } }, e = {};
  function t(i) {
    var s = e[i];
    if (s !== void 0)
      return s.exports;
    var a2 = e[i] = { exports: {} };
    return n[i](a2, a2.exports, t), a2.exports;
  }
  t.d = (i, s) => {
    for (var a2 in s)
      t.o(s, a2) && !t.o(i, a2) && Object.defineProperty(i, a2, { enumerable: true, get: s[a2] });
  }, t.o = (i, s) => Object.prototype.hasOwnProperty.call(i, s), t.r = (i) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: true });
  };
  var r = {};
  (() => {
    let i;
    t.r(r), t.d(r, { URI: () => h, Utils: () => Ce }), typeof process == "object" ? i = process.platform === "win32" : typeof navigator == "object" && (i = navigator.userAgent.indexOf("Windows") >= 0);
    const s = /^\w[\w\d+.-]*$/, a2 = /^\//, o = /^\/\//;
    function l(x, T) {
      if (!x.scheme && T)
        throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${x.authority}", path: "${x.path}", query: "${x.query}", fragment: "${x.fragment}"}`);
      if (x.scheme && !s.test(x.scheme))
        throw new Error("[UriError]: Scheme contains illegal characters.");
      if (x.path) {
        if (x.authority) {
          if (!a2.test(x.path))
            throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (o.test(x.path))
          throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }
    }
    const c = "", u = "/", d = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    class h {
      constructor(T, E, I2, O, L, _ = false) {
        Qe(this, "scheme");
        Qe(this, "authority");
        Qe(this, "path");
        Qe(this, "query");
        Qe(this, "fragment");
        typeof T == "object" ? (this.scheme = T.scheme || c, this.authority = T.authority || c, this.path = T.path || c, this.query = T.query || c, this.fragment = T.fragment || c) : (this.scheme = /* @__PURE__ */ function(Te, q) {
          return Te || q ? Te : "file";
        }(T, _), this.authority = E || c, this.path = function(Te, q) {
          switch (Te) {
            case "https":
            case "http":
            case "file":
              q ? q[0] !== u && (q = u + q) : q = u;
          }
          return q;
        }(this.scheme, I2 || c), this.query = O || c, this.fragment = L || c, l(this, _));
      }
      static isUri(T) {
        return T instanceof h || !!T && typeof T.authority == "string" && typeof T.fragment == "string" && typeof T.path == "string" && typeof T.query == "string" && typeof T.scheme == "string" && typeof T.fsPath == "string" && typeof T.with == "function" && typeof T.toString == "function";
      }
      get fsPath() {
        return A(this);
      }
      with(T) {
        if (!T)
          return this;
        let { scheme: E, authority: I2, path: O, query: L, fragment: _ } = T;
        return E === void 0 ? E = this.scheme : E === null && (E = c), I2 === void 0 ? I2 = this.authority : I2 === null && (I2 = c), O === void 0 ? O = this.path : O === null && (O = c), L === void 0 ? L = this.query : L === null && (L = c), _ === void 0 ? _ = this.fragment : _ === null && (_ = c), E === this.scheme && I2 === this.authority && O === this.path && L === this.query && _ === this.fragment ? this : new m(E, I2, O, L, _);
      }
      static parse(T, E = false) {
        const I2 = d.exec(T);
        return I2 ? new m(I2[2] || c, ie(I2[4] || c), ie(I2[5] || c), ie(I2[7] || c), ie(I2[9] || c), E) : new m(c, c, c, c, c);
      }
      static file(T) {
        let E = c;
        if (i && (T = T.replace(/\\/g, u)), T[0] === u && T[1] === u) {
          const I2 = T.indexOf(u, 2);
          I2 === -1 ? (E = T.substring(2), T = u) : (E = T.substring(2, I2), T = T.substring(I2) || u);
        }
        return new m("file", E, T, c, c);
      }
      static from(T) {
        const E = new m(T.scheme, T.authority, T.path, T.query, T.fragment);
        return l(E, true), E;
      }
      toString(T = false) {
        return R(this, T);
      }
      toJSON() {
        return this;
      }
      static revive(T) {
        if (T) {
          if (T instanceof h)
            return T;
          {
            const E = new m(T);
            return E._formatted = T.external, E._fsPath = T._sep === f ? T.fsPath : null, E;
          }
        }
        return T;
      }
    }
    const f = i ? 1 : void 0;
    class m extends h {
      constructor() {
        super(...arguments);
        Qe(this, "_formatted", null);
        Qe(this, "_fsPath", null);
      }
      get fsPath() {
        return this._fsPath || (this._fsPath = A(this)), this._fsPath;
      }
      toString(E = false) {
        return E ? R(this, true) : (this._formatted || (this._formatted = R(this, false)), this._formatted);
      }
      toJSON() {
        const E = { $mid: 1 };
        return this._fsPath && (E.fsPath = this._fsPath, E._sep = f), this._formatted && (E.external = this._formatted), this.path && (E.path = this.path), this.scheme && (E.scheme = this.scheme), this.authority && (E.authority = this.authority), this.query && (E.query = this.query), this.fragment && (E.fragment = this.fragment), E;
      }
    }
    const g = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
    function v(x, T, E) {
      let I2, O = -1;
      for (let L = 0; L < x.length; L++) {
        const _ = x.charCodeAt(L);
        if (_ >= 97 && _ <= 122 || _ >= 65 && _ <= 90 || _ >= 48 && _ <= 57 || _ === 45 || _ === 46 || _ === 95 || _ === 126 || T && _ === 47 || E && _ === 91 || E && _ === 93 || E && _ === 58)
          O !== -1 && (I2 += encodeURIComponent(x.substring(O, L)), O = -1), I2 !== void 0 && (I2 += x.charAt(L));
        else {
          I2 === void 0 && (I2 = x.substr(0, L));
          const Te = g[_];
          Te !== void 0 ? (O !== -1 && (I2 += encodeURIComponent(x.substring(O, L)), O = -1), I2 += Te) : O === -1 && (O = L);
        }
      }
      return O !== -1 && (I2 += encodeURIComponent(x.substring(O))), I2 !== void 0 ? I2 : x;
    }
    function y(x) {
      let T;
      for (let E = 0; E < x.length; E++) {
        const I2 = x.charCodeAt(E);
        I2 === 35 || I2 === 63 ? (T === void 0 && (T = x.substr(0, E)), T += g[I2]) : T !== void 0 && (T += x[E]);
      }
      return T !== void 0 ? T : x;
    }
    function A(x, T) {
      let E;
      return E = x.authority && x.path.length > 1 && x.scheme === "file" ? `//${x.authority}${x.path}` : x.path.charCodeAt(0) === 47 && (x.path.charCodeAt(1) >= 65 && x.path.charCodeAt(1) <= 90 || x.path.charCodeAt(1) >= 97 && x.path.charCodeAt(1) <= 122) && x.path.charCodeAt(2) === 58 ? x.path[1].toLowerCase() + x.path.substr(2) : x.path, i && (E = E.replace(/\//g, "\\")), E;
    }
    function R(x, T) {
      const E = T ? y : v;
      let I2 = "", { scheme: O, authority: L, path: _, query: Te, fragment: q } = x;
      if (O && (I2 += O, I2 += ":"), (L || O === "file") && (I2 += u, I2 += u), L) {
        let W = L.indexOf("@");
        if (W !== -1) {
          const ot = L.substr(0, W);
          L = L.substr(W + 1), W = ot.lastIndexOf(":"), W === -1 ? I2 += E(ot, false, false) : (I2 += E(ot.substr(0, W), false, false), I2 += ":", I2 += E(ot.substr(W + 1), false, true)), I2 += "@";
        }
        L = L.toLowerCase(), W = L.lastIndexOf(":"), W === -1 ? I2 += E(L, false, true) : (I2 += E(L.substr(0, W), false, true), I2 += L.substr(W));
      }
      if (_) {
        if (_.length >= 3 && _.charCodeAt(0) === 47 && _.charCodeAt(2) === 58) {
          const W = _.charCodeAt(1);
          W >= 65 && W <= 90 && (_ = `/${String.fromCharCode(W + 32)}:${_.substr(3)}`);
        } else if (_.length >= 2 && _.charCodeAt(1) === 58) {
          const W = _.charCodeAt(0);
          W >= 65 && W <= 90 && (_ = `${String.fromCharCode(W + 32)}:${_.substr(2)}`);
        }
        I2 += E(_, true, false);
      }
      return Te && (I2 += "?", I2 += E(Te, false, false)), q && (I2 += "#", I2 += T ? q : v(q, false, false)), I2;
    }
    function C(x) {
      try {
        return decodeURIComponent(x);
      } catch {
        return x.length > 3 ? x.substr(0, 3) + C(x.substr(3)) : x;
      }
    }
    const F = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function ie(x) {
      return x.match(F) ? x.replace(F, (T) => C(T)) : x;
    }
    var _e = t(470);
    const ye = _e.posix || _e, Fe = "/";
    var Ce;
    (function(x) {
      x.joinPath = function(T, ...E) {
        return T.with({ path: ye.join(T.path, ...E) });
      }, x.resolvePath = function(T, ...E) {
        let I2 = T.path, O = false;
        I2[0] !== Fe && (I2 = Fe + I2, O = true);
        let L = ye.resolve(I2, ...E);
        return O && L[0] === Fe && !T.authority && (L = L.substring(1)), T.with({ path: L });
      }, x.dirname = function(T) {
        if (T.path.length === 0 || T.path === Fe)
          return T;
        let E = ye.dirname(T.path);
        return E.length === 1 && E.charCodeAt(0) === 46 && (E = ""), T.with({ path: E });
      }, x.basename = function(T) {
        return ye.basename(T.path);
      }, x.extname = function(T) {
        return ye.extname(T.path);
      };
    })(Ce || (Ce = {}));
  })(), Yc = r;
})();
const { URI: yt, Utils: ln } = Yc;
var it;
(function(n) {
  n.basename = ln.basename, n.dirname = ln.dirname, n.extname = ln.extname, n.joinPath = ln.joinPath, n.resolvePath = ln.resolvePath;
  function e(i, s) {
    return (i == null ? void 0 : i.toString()) === (s == null ? void 0 : s.toString());
  }
  n.equals = e;
  function t(i, s) {
    const a2 = typeof i == "string" ? i : i.path, o = typeof s == "string" ? s : s.path, l = a2.split("/").filter((f) => f.length > 0), c = o.split("/").filter((f) => f.length > 0);
    let u = 0;
    for (; u < l.length && l[u] === c[u]; u++)
      ;
    const d = "../".repeat(l.length - u), h = c.slice(u).join("/");
    return d + h;
  }
  n.relative = t;
  function r(i) {
    return yt.parse(i.toString()).toString();
  }
  n.normalize = r;
})(it || (it = {}));
var U;
(function(n) {
  n[n.Changed = 0] = "Changed", n[n.Parsed = 1] = "Parsed", n[n.IndexedContent = 2] = "IndexedContent", n[n.ComputedScopes = 3] = "ComputedScopes", n[n.Linked = 4] = "Linked", n[n.IndexedReferences = 5] = "IndexedReferences", n[n.Validated = 6] = "Validated";
})(U || (U = {}));
class lm {
  constructor(e) {
    this.serviceRegistry = e.ServiceRegistry, this.textDocuments = e.workspace.TextDocuments, this.fileSystemProvider = e.workspace.FileSystemProvider;
  }
  async fromUri(e, t = V.CancellationToken.None) {
    const r = await this.fileSystemProvider.readFile(e);
    return this.createAsync(e, r, t);
  }
  fromTextDocument(e, t, r) {
    return t = t ?? yt.parse(e.uri), V.CancellationToken.is(r) ? this.createAsync(t, e, r) : this.create(t, e, r);
  }
  fromString(e, t, r) {
    return V.CancellationToken.is(r) ? this.createAsync(t, e, r) : this.create(t, e, r);
  }
  fromModel(e, t) {
    return this.create(t, { $model: e });
  }
  create(e, t, r) {
    if (typeof t == "string") {
      const i = this.parse(e, t, r);
      return this.createLangiumDocument(i, e, void 0, t);
    } else if ("$model" in t) {
      const i = { value: t.$model, parserErrors: [], lexerErrors: [] };
      return this.createLangiumDocument(i, e);
    } else {
      const i = this.parse(e, t.getText(), r);
      return this.createLangiumDocument(i, e, t);
    }
  }
  async createAsync(e, t, r) {
    if (typeof t == "string") {
      const i = await this.parseAsync(e, t, r);
      return this.createLangiumDocument(i, e, void 0, t);
    } else {
      const i = await this.parseAsync(e, t.getText(), r);
      return this.createLangiumDocument(i, e, t);
    }
  }
  /**
   * Create a LangiumDocument from a given parse result.
   *
   * A TextDocument is created on demand if it is not provided as argument here. Usually this
   * should not be necessary because the main purpose of the TextDocument is to convert between
   * text ranges and offsets, which is done solely in LSP request handling.
   *
   * With the introduction of {@link update} below this method is supposed to be mainly called
   * during workspace initialization and on addition/recognition of new files, while changes in
   * existing documents are processed via {@link update}.
   */
  createLangiumDocument(e, t, r, i) {
    let s;
    if (r)
      s = {
        parseResult: e,
        uri: t,
        state: U.Parsed,
        references: [],
        textDocument: r
      };
    else {
      const a2 = this.createTextDocumentGetter(t, i);
      s = {
        parseResult: e,
        uri: t,
        state: U.Parsed,
        references: [],
        get textDocument() {
          return a2();
        }
      };
    }
    return e.value.$document = s, s;
  }
  async update(e, t) {
    var r, i;
    const s = (r = e.parseResult.value.$cstNode) === null || r === void 0 ? void 0 : r.root.fullText, a2 = (i = this.textDocuments) === null || i === void 0 ? void 0 : i.get(e.uri.toString()), o = a2 ? a2.getText() : await this.fileSystemProvider.readFile(e.uri);
    if (a2)
      Object.defineProperty(e, "textDocument", {
        value: a2
      });
    else {
      const l = this.createTextDocumentGetter(e.uri, o);
      Object.defineProperty(e, "textDocument", {
        get: l
      });
    }
    return s !== o && (e.parseResult = await this.parseAsync(e.uri, o, t), e.parseResult.value.$document = e), e.state = U.Parsed, e;
  }
  parse(e, t, r) {
    return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(t, r);
  }
  parseAsync(e, t, r) {
    return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(t, r);
  }
  createTextDocumentGetter(e, t) {
    const r = this.serviceRegistry;
    let i;
    return () => i ?? (i = Cs.create(e.toString(), r.getServices(e).LanguageMetaData.languageId, 0, t ?? ""));
  }
}
class cm {
  constructor(e) {
    this.documentMap = /* @__PURE__ */ new Map(), this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.serviceRegistry = e.ServiceRegistry;
  }
  get all() {
    return ee(this.documentMap.values());
  }
  addDocument(e) {
    const t = e.uri.toString();
    if (this.documentMap.has(t))
      throw new Error(`A document with the URI '${t}' is already present.`);
    this.documentMap.set(t, e);
  }
  getDocument(e) {
    const t = e.toString();
    return this.documentMap.get(t);
  }
  async getOrCreateDocument(e, t) {
    let r = this.getDocument(e);
    return r || (r = await this.langiumDocumentFactory.fromUri(e, t), this.addDocument(r), r);
  }
  createDocument(e, t, r) {
    if (r)
      return this.langiumDocumentFactory.fromString(t, e, r).then((i) => (this.addDocument(i), i));
    {
      const i = this.langiumDocumentFactory.fromString(t, e);
      return this.addDocument(i), i;
    }
  }
  hasDocument(e) {
    return this.documentMap.has(e.toString());
  }
  invalidateDocument(e) {
    const t = e.toString(), r = this.documentMap.get(t);
    return r && (this.serviceRegistry.getServices(e).references.Linker.unlink(r), r.state = U.Changed, r.precomputedScopes = void 0, r.diagnostics = void 0), r;
  }
  deleteDocument(e) {
    const t = e.toString(), r = this.documentMap.get(t);
    return r && (r.state = U.Changed, this.documentMap.delete(t)), r;
  }
}
const Di = Symbol("ref_resolving");
class um {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.langiumDocuments = () => e.shared.workspace.LangiumDocuments, this.scopeProvider = e.references.ScopeProvider, this.astNodeLocator = e.workspace.AstNodeLocator;
  }
  async link(e, t = V.CancellationToken.None) {
    for (const r of Nt(e.parseResult.value))
      await Ae(t), bl(r).forEach((i) => this.doLink(i, e));
  }
  doLink(e, t) {
    var r;
    const i = e.reference;
    if (i._ref === void 0) {
      i._ref = Di;
      try {
        const s = this.getCandidate(e);
        if (kr(s))
          i._ref = s;
        else if (i._nodeDescription = s, this.langiumDocuments().hasDocument(s.documentUri)) {
          const a2 = this.loadAstNode(s);
          i._ref = a2 ?? this.createLinkingError(e, s);
        } else
          i._ref = void 0;
      } catch (s) {
        console.error(`An error occurred while resolving reference to '${i.$refText}':`, s);
        const a2 = (r = s.message) !== null && r !== void 0 ? r : String(s);
        i._ref = Object.assign(Object.assign({}, e), { message: `An error occurred while resolving reference to '${i.$refText}': ${a2}` });
      }
      t.references.push(i);
    }
  }
  unlink(e) {
    for (const t of e.references)
      delete t._ref, delete t._nodeDescription;
    e.references = [];
  }
  getCandidate(e) {
    const r = this.scopeProvider.getScope(e).getElement(e.reference.$refText);
    return r ?? this.createLinkingError(e);
  }
  buildReference(e, t, r, i) {
    const s = this, a2 = {
      $refNode: r,
      $refText: i,
      get ref() {
        var o;
        if (ae(this._ref))
          return this._ref;
        if (ju(this._nodeDescription)) {
          const l = s.loadAstNode(this._nodeDescription);
          this._ref = l ?? s.createLinkingError({ reference: a2, container: e, property: t }, this._nodeDescription);
        } else if (this._ref === void 0) {
          this._ref = Di;
          const l = Qi(e).$document, c = s.getLinkedNode({ reference: a2, container: e, property: t });
          if (c.error && l && l.state < U.ComputedScopes)
            return this._ref = void 0;
          this._ref = (o = c.node) !== null && o !== void 0 ? o : c.error, this._nodeDescription = c.descr, l == null || l.references.push(this);
        } else if (this._ref === Di)
          throw new Error(`Cyclic reference resolution detected: ${s.astNodeLocator.getAstNodePath(e)}/${t} (symbol '${i}')`);
        return ae(this._ref) ? this._ref : void 0;
      },
      get $nodeDescription() {
        return this._nodeDescription;
      },
      get error() {
        return kr(this._ref) ? this._ref : void 0;
      }
    };
    return a2;
  }
  getLinkedNode(e) {
    var t;
    try {
      const r = this.getCandidate(e);
      if (kr(r))
        return { error: r };
      const i = this.loadAstNode(r);
      return i ? { node: i, descr: r } : {
        descr: r,
        error: this.createLinkingError(e, r)
      };
    } catch (r) {
      console.error(`An error occurred while resolving reference to '${e.reference.$refText}':`, r);
      const i = (t = r.message) !== null && t !== void 0 ? t : String(r);
      return {
        error: Object.assign(Object.assign({}, e), { message: `An error occurred while resolving reference to '${e.reference.$refText}': ${i}` })
      };
    }
  }
  loadAstNode(e) {
    if (e.node)
      return e.node;
    const t = this.langiumDocuments().getDocument(e.documentUri);
    if (t)
      return this.astNodeLocator.getAstNode(t.parseResult.value, e.path);
  }
  createLinkingError(e, t) {
    const r = Qi(e.container).$document;
    r && r.state < U.ComputedScopes && console.warn(`Attempted reference resolution before document reached ComputedScopes state (${r.uri}).`);
    const i = this.reflection.getReferenceType(e);
    return Object.assign(Object.assign({}, e), { message: `Could not resolve reference to ${i} named '${e.reference.$refText}'.`, targetDescription: t });
  }
}
function dm(n) {
  return typeof n.name == "string";
}
class fm {
  getName(e) {
    if (dm(e))
      return e.name;
  }
  getNameNode(e) {
    return Gl(e.$cstNode, "name");
  }
}
class hm {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.index = e.shared.workspace.IndexManager, this.nodeLocator = e.workspace.AstNodeLocator;
  }
  findDeclaration(e) {
    if (e) {
      const t = Fd(e), r = e.astNode;
      if (t && r) {
        const i = r[t.feature];
        if (Ue(i))
          return i.ref;
        if (Array.isArray(i)) {
          for (const s of i)
            if (Ue(s) && s.$refNode && s.$refNode.offset <= e.offset && s.$refNode.end >= e.end)
              return s.ref;
        }
      }
      if (r) {
        const i = this.nameProvider.getNameNode(r);
        if (i && (i === e || Yu(e, i)))
          return r;
      }
    }
  }
  findDeclarationNode(e) {
    const t = this.findDeclaration(e);
    if (t != null && t.$cstNode) {
      const r = this.nameProvider.getNameNode(t);
      return r ?? t.$cstNode;
    }
  }
  findReferences(e, t) {
    const r = [];
    if (t.includeDeclaration) {
      const s = this.getReferenceToSelf(e);
      s && r.push(s);
    }
    let i = this.index.findAllReferences(e, this.nodeLocator.getAstNodePath(e));
    return t.documentUri && (i = i.filter((s) => it.equals(s.sourceUri, t.documentUri))), r.push(...i), ee(r);
  }
  getReferenceToSelf(e) {
    const t = this.nameProvider.getNameNode(e);
    if (t) {
      const r = et(e), i = this.nodeLocator.getAstNodePath(e);
      return {
        sourceUri: r.uri,
        sourcePath: i,
        targetUri: r.uri,
        targetPath: i,
        segment: Gr(t),
        local: true
      };
    }
  }
}
class ii {
  constructor(e) {
    if (this.map = /* @__PURE__ */ new Map(), e)
      for (const [t, r] of e)
        this.add(t, r);
  }
  /**
   * The total number of values in the multimap.
   */
  get size() {
    return Yi.sum(ee(this.map.values()).map((e) => e.length));
  }
  /**
   * Clear all entries in the multimap.
   */
  clear() {
    this.map.clear();
  }
  /**
   * Operates differently depending on whether a `value` is given:
   *  * With a value, this method deletes the specific key / value pair from the multimap.
   *  * Without a value, all values associated with the given key are deleted.
   *
   * @returns `true` if a value existed and has been removed, or `false` if the specified
   *     key / value does not exist.
   */
  delete(e, t) {
    if (t === void 0)
      return this.map.delete(e);
    {
      const r = this.map.get(e);
      if (r) {
        const i = r.indexOf(t);
        if (i >= 0)
          return r.length === 1 ? this.map.delete(e) : r.splice(i, 1), true;
      }
      return false;
    }
  }
  /**
   * Returns an array of all values associated with the given key. If no value exists,
   * an empty array is returned.
   *
   * _Note:_ The returned array is assumed not to be modified. Use the `set` method to add a
   * value and `delete` to remove a value from the multimap.
   */
  get(e) {
    var t;
    return (t = this.map.get(e)) !== null && t !== void 0 ? t : [];
  }
  /**
   * Operates differently depending on whether a `value` is given:
   *  * With a value, this method returns `true` if the specific key / value pair is present in the multimap.
   *  * Without a value, this method returns `true` if the given key is present in the multimap.
   */
  has(e, t) {
    if (t === void 0)
      return this.map.has(e);
    {
      const r = this.map.get(e);
      return r ? r.indexOf(t) >= 0 : false;
    }
  }
  /**
   * Add the given key / value pair to the multimap.
   */
  add(e, t) {
    return this.map.has(e) ? this.map.get(e).push(t) : this.map.set(e, [t]), this;
  }
  /**
   * Add the given set of key / value pairs to the multimap.
   */
  addAll(e, t) {
    return this.map.has(e) ? this.map.get(e).push(...t) : this.map.set(e, Array.from(t)), this;
  }
  /**
   * Invokes the given callback function for every key / value pair in the multimap.
   */
  forEach(e) {
    this.map.forEach((t, r) => t.forEach((i) => e(i, r, this)));
  }
  /**
   * Returns an iterator of key, value pairs for every entry in the map.
   */
  [Symbol.iterator]() {
    return this.entries().iterator();
  }
  /**
   * Returns a stream of key, value pairs for every entry in the map.
   */
  entries() {
    return ee(this.map.entries()).flatMap(([e, t]) => t.map((r) => [e, r]));
  }
  /**
   * Returns a stream of keys in the map.
   */
  keys() {
    return ee(this.map.keys());
  }
  /**
   * Returns a stream of values in the map.
   */
  values() {
    return ee(this.map.values()).flat();
  }
  /**
   * Returns a stream of key, value set pairs for every key in the map.
   */
  entriesGroupedByKey() {
    return ee(this.map.entries());
  }
}
class Zo {
  get size() {
    return this.map.size;
  }
  constructor(e) {
    if (this.map = /* @__PURE__ */ new Map(), this.inverse = /* @__PURE__ */ new Map(), e)
      for (const [t, r] of e)
        this.set(t, r);
  }
  clear() {
    this.map.clear(), this.inverse.clear();
  }
  set(e, t) {
    return this.map.set(e, t), this.inverse.set(t, e), this;
  }
  get(e) {
    return this.map.get(e);
  }
  getKey(e) {
    return this.inverse.get(e);
  }
  delete(e) {
    const t = this.map.get(e);
    return t !== void 0 ? (this.map.delete(e), this.inverse.delete(t), true) : false;
  }
}
class pm {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider;
  }
  async computeExports(e, t = V.CancellationToken.None) {
    return this.computeExportsForNode(e.parseResult.value, e, void 0, t);
  }
  /**
   * Creates {@link AstNodeDescription AstNodeDescriptions} for the given {@link AstNode parentNode} and its children.
   * The list of children to be considered is determined by the function parameter {@link children}.
   * By default only the direct children of {@link parentNode} are visited, nested nodes are not exported.
   *
   * @param parentNode AST node to be exported, i.e., of which an {@link AstNodeDescription} shall be added to the returned list.
   * @param document The document containing the AST node to be exported.
   * @param children A function called with {@link parentNode} as single argument and returning an {@link Iterable} supplying the children to be visited, which must be directly or transitively contained in {@link parentNode}.
   * @param cancelToken Indicates when to cancel the current operation.
   * @throws `OperationCancelled` if a user action occurs during execution.
   * @returns A list of {@link AstNodeDescription AstNodeDescriptions} to be published to index.
   */
  async computeExportsForNode(e, t, r = Fs, i = V.CancellationToken.None) {
    const s = [];
    this.exportNode(e, s, t);
    for (const a2 of r(e))
      await Ae(i), this.exportNode(a2, s, t);
    return s;
  }
  /**
   * Add a single node to the list of exports if it has a name. Override this method to change how
   * symbols are exported, e.g. by modifying their exported name.
   */
  exportNode(e, t, r) {
    const i = this.nameProvider.getName(e);
    i && t.push(this.descriptions.createDescription(e, i, r));
  }
  async computeLocalScopes(e, t = V.CancellationToken.None) {
    const r = e.parseResult.value, i = new ii();
    for (const s of Qn(r))
      await Ae(t), this.processNode(s, e, i);
    return i;
  }
  /**
   * Process a single node during scopes computation. The default implementation makes the node visible
   * in the subtree of its container (if the node has a name). Override this method to change this,
   * e.g. by increasing the visibility to a higher level in the AST.
   */
  processNode(e, t, r) {
    const i = e.$container;
    if (i) {
      const s = this.nameProvider.getName(e);
      s && r.add(i, this.descriptions.createDescription(e, s, t));
    }
  }
}
class el {
  constructor(e, t, r) {
    var i;
    this.elements = e, this.outerScope = t, this.caseInsensitive = (i = r == null ? void 0 : r.caseInsensitive) !== null && i !== void 0 ? i : false;
  }
  getAllElements() {
    return this.outerScope ? this.elements.concat(this.outerScope.getAllElements()) : this.elements;
  }
  getElement(e) {
    const t = this.caseInsensitive ? this.elements.find((r) => r.name.toLowerCase() === e.toLowerCase()) : this.elements.find((r) => r.name === e);
    if (t)
      return t;
    if (this.outerScope)
      return this.outerScope.getElement(e);
  }
}
class mm {
  constructor(e, t, r) {
    var i;
    this.elements = /* @__PURE__ */ new Map(), this.caseInsensitive = (i = r == null ? void 0 : r.caseInsensitive) !== null && i !== void 0 ? i : false;
    for (const s of e) {
      const a2 = this.caseInsensitive ? s.name.toLowerCase() : s.name;
      this.elements.set(a2, s);
    }
    this.outerScope = t;
  }
  getElement(e) {
    const t = this.caseInsensitive ? e.toLowerCase() : e, r = this.elements.get(t);
    if (r)
      return r;
    if (this.outerScope)
      return this.outerScope.getElement(e);
  }
  getAllElements() {
    let e = ee(this.elements.values());
    return this.outerScope && (e = e.concat(this.outerScope.getAllElements())), e;
  }
}
class Xc {
  constructor() {
    this.toDispose = [], this.isDisposed = false;
  }
  onDispose(e) {
    this.toDispose.push(e);
  }
  dispose() {
    this.throwIfDisposed(), this.clear(), this.isDisposed = true, this.toDispose.forEach((e) => e.dispose());
  }
  throwIfDisposed() {
    if (this.isDisposed)
      throw new Error("This cache has already been disposed");
  }
}
class gm extends Xc {
  constructor() {
    super(...arguments), this.cache = /* @__PURE__ */ new Map();
  }
  has(e) {
    return this.throwIfDisposed(), this.cache.has(e);
  }
  set(e, t) {
    this.throwIfDisposed(), this.cache.set(e, t);
  }
  get(e, t) {
    if (this.throwIfDisposed(), this.cache.has(e))
      return this.cache.get(e);
    if (t) {
      const r = t();
      return this.cache.set(e, r), r;
    } else
      return;
  }
  delete(e) {
    return this.throwIfDisposed(), this.cache.delete(e);
  }
  clear() {
    this.throwIfDisposed(), this.cache.clear();
  }
}
class ym extends Xc {
  constructor(e) {
    super(), this.cache = /* @__PURE__ */ new Map(), this.converter = e ?? ((t) => t);
  }
  has(e, t) {
    return this.throwIfDisposed(), this.cacheForContext(e).has(t);
  }
  set(e, t, r) {
    this.throwIfDisposed(), this.cacheForContext(e).set(t, r);
  }
  get(e, t, r) {
    this.throwIfDisposed();
    const i = this.cacheForContext(e);
    if (i.has(t))
      return i.get(t);
    if (r) {
      const s = r();
      return i.set(t, s), s;
    } else
      return;
  }
  delete(e, t) {
    return this.throwIfDisposed(), this.cacheForContext(e).delete(t);
  }
  clear(e) {
    if (this.throwIfDisposed(), e) {
      const t = this.converter(e);
      this.cache.delete(t);
    } else
      this.cache.clear();
  }
  cacheForContext(e) {
    const t = this.converter(e);
    let r = this.cache.get(t);
    return r || (r = /* @__PURE__ */ new Map(), this.cache.set(t, r)), r;
  }
}
class Tm extends gm {
  /**
   * Creates a new workspace cache.
   *
   * @param sharedServices Service container instance to hook into document lifecycle events.
   * @param state Optional document state on which the cache should evict.
   * If not provided, the cache will evict on `DocumentBuilder#onUpdate`.
   * *Deleted* documents are considered in both cases.
   */
  constructor(e, t) {
    super(), t ? (this.toDispose.push(e.workspace.DocumentBuilder.onBuildPhase(t, () => {
      this.clear();
    })), this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((r, i) => {
      i.length > 0 && this.clear();
    }))) : this.toDispose.push(e.workspace.DocumentBuilder.onUpdate(() => {
      this.clear();
    }));
  }
}
class Rm {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider, this.indexManager = e.shared.workspace.IndexManager, this.globalScopeCache = new Tm(e.shared);
  }
  getScope(e) {
    const t = [], r = this.reflection.getReferenceType(e), i = et(e.container).precomputedScopes;
    if (i) {
      let a2 = e.container;
      do {
        const o = i.get(a2);
        o.length > 0 && t.push(ee(o).filter((l) => this.reflection.isSubtype(l.type, r))), a2 = a2.$container;
      } while (a2);
    }
    let s = this.getGlobalScope(r, e);
    for (let a2 = t.length - 1; a2 >= 0; a2--)
      s = this.createScope(t[a2], s);
    return s;
  }
  /**
   * Create a scope for the given collection of AST node descriptions.
   */
  createScope(e, t, r) {
    return new el(ee(e), t, r);
  }
  /**
   * Create a scope for the given collection of AST nodes, which need to be transformed into respective
   * descriptions first. This is done using the `NameProvider` and `AstNodeDescriptionProvider` services.
   */
  createScopeForNodes(e, t, r) {
    const i = ee(e).map((s) => {
      const a2 = this.nameProvider.getName(s);
      if (a2)
        return this.descriptions.createDescription(s, a2);
    }).nonNullable();
    return new el(i, t, r);
  }
  /**
   * Create a global scope filtered for the given reference type.
   */
  getGlobalScope(e, t) {
    return this.globalScopeCache.get(e, () => new mm(this.indexManager.allElements(e)));
  }
}
function vm(n) {
  return typeof n.$comment == "string";
}
function tl(n) {
  return typeof n == "object" && !!n && ("$ref" in n || "$error" in n);
}
class Am {
  constructor(e) {
    this.ignoreProperties = /* @__PURE__ */ new Set(["$container", "$containerProperty", "$containerIndex", "$document", "$cstNode"]), this.langiumDocuments = e.shared.workspace.LangiumDocuments, this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider, this.commentProvider = e.documentation.CommentProvider;
  }
  serialize(e, t) {
    const r = t ?? {}, i = t == null ? void 0 : t.replacer, s = (o, l) => this.replacer(o, l, r), a2 = i ? (o, l) => i(o, l, s) : s;
    try {
      return this.currentDocument = et(e), JSON.stringify(e, a2, t == null ? void 0 : t.space);
    } finally {
      this.currentDocument = void 0;
    }
  }
  deserialize(e, t) {
    const r = t ?? {}, i = JSON.parse(e);
    return this.linkNode(i, i, r), i;
  }
  replacer(e, t, { refText: r, sourceText: i, textRegions: s, comments: a2, uriConverter: o }) {
    var l, c, u, d;
    if (!this.ignoreProperties.has(e))
      if (Ue(t)) {
        const h = t.ref, f = r ? t.$refText : void 0;
        if (h) {
          const m = et(h);
          let g = "";
          this.currentDocument && this.currentDocument !== m && (o ? g = o(m.uri, t) : g = m.uri.toString());
          const v = this.astNodeLocator.getAstNodePath(h);
          return {
            $ref: `${g}#${v}`,
            $refText: f
          };
        } else
          return {
            $error: (c = (l = t.error) === null || l === void 0 ? void 0 : l.message) !== null && c !== void 0 ? c : "Could not resolve reference",
            $refText: f
          };
      } else if (ae(t)) {
        let h;
        if (s && (h = this.addAstNodeRegionWithAssignmentsTo(Object.assign({}, t)), (!e || t.$document) && (h != null && h.$textRegion) && (h.$textRegion.documentURI = (u = this.currentDocument) === null || u === void 0 ? void 0 : u.uri.toString())), i && !e && (h ?? (h = Object.assign({}, t)), h.$sourceText = (d = t.$cstNode) === null || d === void 0 ? void 0 : d.text), a2) {
          h ?? (h = Object.assign({}, t));
          const f = this.commentProvider.getComment(t);
          f && (h.$comment = f.replace(/\r/g, ""));
        }
        return h ?? t;
      } else
        return t;
  }
  addAstNodeRegionWithAssignmentsTo(e) {
    const t = (r) => ({
      offset: r.offset,
      end: r.end,
      length: r.length,
      range: r.range
    });
    if (e.$cstNode) {
      const r = e.$textRegion = t(e.$cstNode), i = r.assignments = {};
      return Object.keys(e).filter((s) => !s.startsWith("$")).forEach((s) => {
        const a2 = Pd(e.$cstNode, s).map(t);
        a2.length !== 0 && (i[s] = a2);
      }), e;
    }
  }
  linkNode(e, t, r, i, s, a2) {
    for (const [l, c] of Object.entries(e))
      if (Array.isArray(c))
        for (let u = 0; u < c.length; u++) {
          const d = c[u];
          tl(d) ? c[u] = this.reviveReference(e, l, t, d, r) : ae(d) && this.linkNode(d, t, r, e, l, u);
        }
      else
        tl(c) ? e[l] = this.reviveReference(e, l, t, c, r) : ae(c) && this.linkNode(c, t, r, e, l);
    const o = e;
    o.$container = i, o.$containerProperty = s, o.$containerIndex = a2;
  }
  reviveReference(e, t, r, i, s) {
    let a2 = i.$refText, o = i.$error;
    if (i.$ref) {
      const l = this.getRefNode(r, i.$ref, s.uriConverter);
      if (ae(l))
        return a2 || (a2 = this.nameProvider.getName(l)), {
          $refText: a2 ?? "",
          ref: l
        };
      o = l;
    }
    if (o) {
      const l = {
        $refText: a2 ?? ""
      };
      return l.error = {
        container: e,
        property: t,
        message: o,
        reference: l
      }, l;
    } else
      return;
  }
  getRefNode(e, t, r) {
    try {
      const i = t.indexOf("#");
      if (i === 0) {
        const l = this.astNodeLocator.getAstNode(e, t.substring(1));
        return l || "Could not resolve path: " + t;
      }
      if (i < 0) {
        const l = r ? r(t) : yt.parse(t), c = this.langiumDocuments.getDocument(l);
        return c ? c.parseResult.value : "Could not find document for URI: " + t;
      }
      const s = r ? r(t.substring(0, i)) : yt.parse(t.substring(0, i)), a2 = this.langiumDocuments.getDocument(s);
      if (!a2)
        return "Could not find document for URI: " + t;
      if (i === t.length - 1)
        return a2.parseResult.value;
      const o = this.astNodeLocator.getAstNode(a2.parseResult.value, t.substring(i + 1));
      return o || "Could not resolve URI: " + t;
    } catch (i) {
      return String(i);
    }
  }
}
class Em {
  /**
   * @deprecated Use the new `fileExtensionMap` (or `languageIdMap`) property instead.
   */
  get map() {
    return this.fileExtensionMap;
  }
  constructor(e) {
    this.languageIdMap = /* @__PURE__ */ new Map(), this.fileExtensionMap = /* @__PURE__ */ new Map(), this.textDocuments = e == null ? void 0 : e.workspace.TextDocuments;
  }
  register(e) {
    const t = e.LanguageMetaData;
    for (const r of t.fileExtensions)
      this.fileExtensionMap.has(r) && console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${t.languageId}'.`), this.fileExtensionMap.set(r, e);
    this.languageIdMap.set(t.languageId, e), this.languageIdMap.size === 1 ? this.singleton = e : this.singleton = void 0;
  }
  getServices(e) {
    var t, r;
    if (this.singleton !== void 0)
      return this.singleton;
    if (this.languageIdMap.size === 0)
      throw new Error("The service registry is empty. Use `register` to register the services of a language.");
    const i = (r = (t = this.textDocuments) === null || t === void 0 ? void 0 : t.get(e)) === null || r === void 0 ? void 0 : r.languageId;
    if (i !== void 0) {
      const o = this.languageIdMap.get(i);
      if (o)
        return o;
    }
    const s = it.extname(e), a2 = this.fileExtensionMap.get(s);
    if (!a2)
      throw i ? new Error(`The service registry contains no services for the extension '${s}' for language '${i}'.`) : new Error(`The service registry contains no services for the extension '${s}'.`);
    return a2;
  }
  hasServices(e) {
    try {
      return this.getServices(e), true;
    } catch {
      return false;
    }
  }
  get all() {
    return Array.from(this.languageIdMap.values());
  }
}
function Un(n) {
  return { code: n };
}
var si;
(function(n) {
  n.all = ["fast", "slow", "built-in"];
})(si || (si = {}));
class km {
  constructor(e) {
    this.entries = new ii(), this.entriesBefore = [], this.entriesAfter = [], this.reflection = e.shared.AstReflection;
  }
  /**
   * Register a set of validation checks. Each value in the record can be either a single validation check (i.e. a function)
   * or an array of validation checks.
   *
   * @param checksRecord Set of validation checks to register.
   * @param category Optional category for the validation checks (defaults to `'fast'`).
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  register(e, t = this, r = "fast") {
    if (r === "built-in")
      throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");
    for (const [i, s] of Object.entries(e)) {
      const a2 = s;
      if (Array.isArray(a2))
        for (const o of a2) {
          const l = {
            check: this.wrapValidationException(o, t),
            category: r
          };
          this.addEntry(i, l);
        }
      else if (typeof a2 == "function") {
        const o = {
          check: this.wrapValidationException(a2, t),
          category: r
        };
        this.addEntry(i, o);
      } else
        Jn();
    }
  }
  wrapValidationException(e, t) {
    return async (r, i, s) => {
      await this.handleException(() => e.call(t, r, i, s), "An error occurred during validation", i, r);
    };
  }
  async handleException(e, t, r, i) {
    try {
      await e();
    } catch (s) {
      if (vi(s))
        throw s;
      console.error(`${t}:`, s), s instanceof Error && s.stack && console.error(s.stack);
      const a2 = s instanceof Error ? s.message : String(s);
      r("error", `${t}: ${a2}`, { node: i });
    }
  }
  addEntry(e, t) {
    if (e === "AstNode") {
      this.entries.add("AstNode", t);
      return;
    }
    for (const r of this.reflection.getAllSubTypes(e))
      this.entries.add(r, t);
  }
  getChecks(e, t) {
    let r = ee(this.entries.get(e)).concat(this.entries.get("AstNode"));
    return t && (r = r.filter((i) => t.includes(i.category))), r.map((i) => i.check);
  }
  /**
   * Register logic which will be executed once before validating all the nodes of an AST/Langium document.
   * This helps to prepare or initialize some information which are required or reusable for the following checks on the AstNodes.
   *
   * As an example, for validating unique fully-qualified names of nodes in the AST,
   * here the map for mapping names to nodes could be established.
   * During the usual checks on the nodes, they are put into this map with their name.
   *
   * Note that this approach makes validations stateful, which is relevant e.g. when cancelling the validation.
   * Therefore it is recommended to clear stored information
   * _before_ validating an AST to validate each AST unaffected from other ASTs
   * AND _after_ validating the AST to free memory by information which are no longer used.
   *
   * @param checkBefore a set-up function which will be called once before actually validating an AST
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  registerBeforeDocument(e, t = this) {
    this.entriesBefore.push(this.wrapPreparationException(e, "An error occurred during set-up of the validation", t));
  }
  /**
   * Register logic which will be executed once after validating all the nodes of an AST/Langium document.
   * This helps to finally evaluate information which are collected during the checks on the AstNodes.
   *
   * As an example, for validating unique fully-qualified names of nodes in the AST,
   * here the map with all the collected nodes and their names is checked
   * and validation hints are created for all nodes with the same name.
   *
   * Note that this approach makes validations stateful, which is relevant e.g. when cancelling the validation.
   * Therefore it is recommended to clear stored information
   * _before_ validating an AST to validate each AST unaffected from other ASTs
   * AND _after_ validating the AST to free memory by information which are no longer used.
   *
   * @param checkBefore a set-up function which will be called once before actually validating an AST
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  registerAfterDocument(e, t = this) {
    this.entriesAfter.push(this.wrapPreparationException(e, "An error occurred during tear-down of the validation", t));
  }
  wrapPreparationException(e, t, r) {
    return async (i, s, a2, o) => {
      await this.handleException(() => e.call(r, i, s, a2, o), t, s, i);
    };
  }
  get checksBefore() {
    return this.entriesBefore;
  }
  get checksAfter() {
    return this.entriesAfter;
  }
}
class xm {
  constructor(e) {
    this.validationRegistry = e.validation.ValidationRegistry, this.metadata = e.LanguageMetaData;
  }
  async validateDocument(e, t = {}, r = V.CancellationToken.None) {
    const i = e.parseResult, s = [];
    if (await Ae(r), (!t.categories || t.categories.includes("built-in")) && (this.processLexingErrors(i, s, t), t.stopAfterLexingErrors && s.some((a2) => {
      var o;
      return ((o = a2.data) === null || o === void 0 ? void 0 : o.code) === Oe.LexingError;
    }) || (this.processParsingErrors(i, s, t), t.stopAfterParsingErrors && s.some((a2) => {
      var o;
      return ((o = a2.data) === null || o === void 0 ? void 0 : o.code) === Oe.ParsingError;
    })) || (this.processLinkingErrors(e, s, t), t.stopAfterLinkingErrors && s.some((a2) => {
      var o;
      return ((o = a2.data) === null || o === void 0 ? void 0 : o.code) === Oe.LinkingError;
    }))))
      return s;
    try {
      s.push(...await this.validateAst(i.value, t, r));
    } catch (a2) {
      if (vi(a2))
        throw a2;
      console.error("An error occurred during validation:", a2);
    }
    return await Ae(r), s;
  }
  processLexingErrors(e, t, r) {
    var i, s, a2;
    const o = [...e.lexerErrors, ...(s = (i = e.lexerReport) === null || i === void 0 ? void 0 : i.diagnostics) !== null && s !== void 0 ? s : []];
    for (const l of o) {
      const c = (a2 = l.severity) !== null && a2 !== void 0 ? a2 : "error", u = {
        severity: Fi(c),
        range: {
          start: {
            line: l.line - 1,
            character: l.column - 1
          },
          end: {
            line: l.line - 1,
            character: l.column + l.length - 1
          }
        },
        message: l.message,
        data: Im(c),
        source: this.getSource()
      };
      t.push(u);
    }
  }
  processParsingErrors(e, t, r) {
    for (const i of e.parserErrors) {
      let s;
      if (isNaN(i.token.startOffset)) {
        if ("previousToken" in i) {
          const a2 = i.previousToken;
          if (isNaN(a2.startOffset)) {
            const o = { line: 0, character: 0 };
            s = { start: o, end: o };
          } else {
            const o = { line: a2.endLine - 1, character: a2.endColumn };
            s = { start: o, end: o };
          }
        }
      } else
        s = Ji(i.token);
      if (s) {
        const a2 = {
          severity: Fi("error"),
          range: s,
          message: i.message,
          data: Un(Oe.ParsingError),
          source: this.getSource()
        };
        t.push(a2);
      }
    }
  }
  processLinkingErrors(e, t, r) {
    for (const i of e.references) {
      const s = i.error;
      if (s) {
        const a2 = {
          node: s.container,
          property: s.property,
          index: s.index,
          data: {
            code: Oe.LinkingError,
            containerType: s.container.$type,
            property: s.property,
            refText: s.reference.$refText
          }
        };
        t.push(this.toDiagnostic("error", s.message, a2));
      }
    }
  }
  async validateAst(e, t, r = V.CancellationToken.None) {
    const i = [], s = (a2, o, l) => {
      i.push(this.toDiagnostic(a2, o, l));
    };
    return await this.validateAstBefore(e, t, s, r), await this.validateAstNodes(e, t, s, r), await this.validateAstAfter(e, t, s, r), i;
  }
  async validateAstBefore(e, t, r, i = V.CancellationToken.None) {
    var s;
    const a2 = this.validationRegistry.checksBefore;
    for (const o of a2)
      await Ae(i), await o(e, r, (s = t.categories) !== null && s !== void 0 ? s : [], i);
  }
  async validateAstNodes(e, t, r, i = V.CancellationToken.None) {
    await Promise.all(Nt(e).map(async (s) => {
      await Ae(i);
      const a2 = this.validationRegistry.getChecks(s.$type, t.categories);
      for (const o of a2)
        await o(s, r, i);
    }));
  }
  async validateAstAfter(e, t, r, i = V.CancellationToken.None) {
    var s;
    const a2 = this.validationRegistry.checksAfter;
    for (const o of a2)
      await Ae(i), await o(e, r, (s = t.categories) !== null && s !== void 0 ? s : [], i);
  }
  toDiagnostic(e, t, r) {
    return {
      message: t,
      range: Sm(r),
      severity: Fi(e),
      code: r.code,
      codeDescription: r.codeDescription,
      tags: r.tags,
      relatedInformation: r.relatedInformation,
      data: r.data,
      source: this.getSource()
    };
  }
  getSource() {
    return this.metadata.languageId;
  }
}
function Sm(n) {
  if (n.range)
    return n.range;
  let e;
  return typeof n.property == "string" ? e = Gl(n.node.$cstNode, n.property, n.index) : typeof n.keyword == "string" && (e = Md(n.node.$cstNode, n.keyword, n.index)), e ?? (e = n.node.$cstNode), e ? e.range : {
    start: { line: 0, character: 0 },
    end: { line: 0, character: 0 }
  };
}
function Fi(n) {
  switch (n) {
    case "error":
      return 1;
    case "warning":
      return 2;
    case "info":
      return 3;
    case "hint":
      return 4;
    default:
      throw new Error("Invalid diagnostic severity: " + n);
  }
}
function Im(n) {
  switch (n) {
    case "error":
      return Un(Oe.LexingError);
    case "warning":
      return Un(Oe.LexingWarning);
    case "info":
      return Un(Oe.LexingInfo);
    case "hint":
      return Un(Oe.LexingHint);
    default:
      throw new Error("Invalid diagnostic severity: " + n);
  }
}
var Oe;
(function(n) {
  n.LexingError = "lexing-error", n.LexingWarning = "lexing-warning", n.LexingInfo = "lexing-info", n.LexingHint = "lexing-hint", n.ParsingError = "parsing-error", n.LinkingError = "linking-error";
})(Oe || (Oe = {}));
class Cm {
  constructor(e) {
    this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider;
  }
  createDescription(e, t, r) {
    const i = r ?? et(e);
    t ?? (t = this.nameProvider.getName(e));
    const s = this.astNodeLocator.getAstNodePath(e);
    if (!t)
      throw new Error(`Node at path ${s} has no name.`);
    let a2;
    const o = () => {
      var l;
      return a2 ?? (a2 = Gr((l = this.nameProvider.getNameNode(e)) !== null && l !== void 0 ? l : e.$cstNode));
    };
    return {
      node: e,
      name: t,
      get nameSegment() {
        return o();
      },
      selectionSegment: Gr(e.$cstNode),
      type: e.$type,
      documentUri: i.uri,
      path: s
    };
  }
}
class $m {
  constructor(e) {
    this.nodeLocator = e.workspace.AstNodeLocator;
  }
  async createDescriptions(e, t = V.CancellationToken.None) {
    const r = [], i = e.parseResult.value;
    for (const s of Nt(i))
      await Ae(t), bl(s).filter((a2) => !kr(a2)).forEach((a2) => {
        const o = this.createDescription(a2);
        o && r.push(o);
      });
    return r;
  }
  createDescription(e) {
    const t = e.reference.$nodeDescription, r = e.reference.$refNode;
    if (!t || !r)
      return;
    const i = et(e.container).uri;
    return {
      sourceUri: i,
      sourcePath: this.nodeLocator.getAstNodePath(e.container),
      targetUri: t.documentUri,
      targetPath: t.path,
      segment: Gr(r),
      local: it.equals(t.documentUri, i)
    };
  }
}
class Nm {
  constructor() {
    this.segmentSeparator = "/", this.indexSeparator = "@";
  }
  getAstNodePath(e) {
    if (e.$container) {
      const t = this.getAstNodePath(e.$container), r = this.getPathSegment(e);
      return t + this.segmentSeparator + r;
    }
    return "";
  }
  getPathSegment({ $containerProperty: e, $containerIndex: t }) {
    if (!e)
      throw new Error("Missing '$containerProperty' in AST node.");
    return t !== void 0 ? e + this.indexSeparator + t : e;
  }
  getAstNode(e, t) {
    return t.split(this.segmentSeparator).reduce((i, s) => {
      if (!i || s.length === 0)
        return i;
      const a2 = s.indexOf(this.indexSeparator);
      if (a2 > 0) {
        const o = s.substring(0, a2), l = parseInt(s.substring(a2 + 1)), c = i[o];
        return c == null ? void 0 : c[l];
      }
      return i[s];
    }, e);
  }
}
var wm = jc();
class _m {
  constructor(e) {
    this._ready = new na(), this.settings = {}, this.workspaceConfig = false, this.onConfigurationSectionUpdateEmitter = new wm.Emitter(), this.serviceRegistry = e.ServiceRegistry;
  }
  get ready() {
    return this._ready.promise;
  }
  initialize(e) {
    var t, r;
    this.workspaceConfig = (r = (t = e.capabilities.workspace) === null || t === void 0 ? void 0 : t.configuration) !== null && r !== void 0 ? r : false;
  }
  async initialized(e) {
    if (this.workspaceConfig) {
      if (e.register) {
        const t = this.serviceRegistry.all;
        e.register({
          // Listen to configuration changes for all languages
          section: t.map((r) => this.toSectionName(r.LanguageMetaData.languageId))
        });
      }
      if (e.fetchConfiguration) {
        const t = this.serviceRegistry.all.map((i) => ({
          // Fetch the configuration changes for all languages
          section: this.toSectionName(i.LanguageMetaData.languageId)
        })), r = await e.fetchConfiguration(t);
        t.forEach((i, s) => {
          this.updateSectionConfiguration(i.section, r[s]);
        });
      }
    }
    this._ready.resolve();
  }
  /**
   *  Updates the cached configurations using the `change` notification parameters.
   *
   * @param change The parameters of a change configuration notification.
   * `settings` property of the change object could be expressed as `Record<string, Record<string, any>>`
   */
  updateConfiguration(e) {
    e.settings && Object.keys(e.settings).forEach((t) => {
      const r = e.settings[t];
      this.updateSectionConfiguration(t, r), this.onConfigurationSectionUpdateEmitter.fire({ section: t, configuration: r });
    });
  }
  updateSectionConfiguration(e, t) {
    this.settings[e] = t;
  }
  /**
  * Returns a configuration value stored for the given language.
  *
  * @param language The language id
  * @param configuration Configuration name
  */
  async getConfiguration(e, t) {
    await this.ready;
    const r = this.toSectionName(e);
    if (this.settings[r])
      return this.settings[r][t];
  }
  toSectionName(e) {
    return `${e}`;
  }
  get onConfigurationSectionUpdate() {
    return this.onConfigurationSectionUpdateEmitter.event;
  }
}
var Hn;
(function(n) {
  function e(t) {
    return {
      dispose: async () => await t()
    };
  }
  n.create = e;
})(Hn || (Hn = {}));
class Lm {
  constructor(e) {
    this.updateBuildOptions = {
      // Default: run only the built-in validation checks and those in the _fast_ category (includes those without category)
      validation: {
        categories: ["built-in", "fast"]
      }
    }, this.updateListeners = [], this.buildPhaseListeners = new ii(), this.documentPhaseListeners = new ii(), this.buildState = /* @__PURE__ */ new Map(), this.documentBuildWaiters = /* @__PURE__ */ new Map(), this.currentState = U.Changed, this.langiumDocuments = e.workspace.LangiumDocuments, this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.textDocuments = e.workspace.TextDocuments, this.indexManager = e.workspace.IndexManager, this.serviceRegistry = e.ServiceRegistry;
  }
  async build(e, t = {}, r = V.CancellationToken.None) {
    var i, s;
    for (const a2 of e) {
      const o = a2.uri.toString();
      if (a2.state === U.Validated) {
        if (typeof t.validation == "boolean" && t.validation)
          a2.state = U.IndexedReferences, a2.diagnostics = void 0, this.buildState.delete(o);
        else if (typeof t.validation == "object") {
          const l = this.buildState.get(o), c = (i = l == null ? void 0 : l.result) === null || i === void 0 ? void 0 : i.validationChecks;
          if (c) {
            const d = ((s = t.validation.categories) !== null && s !== void 0 ? s : si.all).filter((h) => !c.includes(h));
            d.length > 0 && (this.buildState.set(o, {
              completed: false,
              options: {
                validation: Object.assign(Object.assign({}, t.validation), { categories: d })
              },
              result: l.result
            }), a2.state = U.IndexedReferences);
          }
        }
      } else
        this.buildState.delete(o);
    }
    this.currentState = U.Changed, await this.emitUpdate(e.map((a2) => a2.uri), []), await this.buildDocuments(e, t, r);
  }
  async update(e, t, r = V.CancellationToken.None) {
    this.currentState = U.Changed;
    for (const a2 of t)
      this.langiumDocuments.deleteDocument(a2), this.buildState.delete(a2.toString()), this.indexManager.remove(a2);
    for (const a2 of e) {
      if (!this.langiumDocuments.invalidateDocument(a2)) {
        const l = this.langiumDocumentFactory.fromModel({ $type: "INVALID" }, a2);
        l.state = U.Changed, this.langiumDocuments.addDocument(l);
      }
      this.buildState.delete(a2.toString());
    }
    const i = ee(e).concat(t).map((a2) => a2.toString()).toSet();
    this.langiumDocuments.all.filter((a2) => !i.has(a2.uri.toString()) && this.shouldRelink(a2, i)).forEach((a2) => {
      this.serviceRegistry.getServices(a2.uri).references.Linker.unlink(a2), a2.state = Math.min(a2.state, U.ComputedScopes), a2.diagnostics = void 0;
    }), await this.emitUpdate(e, t), await Ae(r);
    const s = this.sortDocuments(this.langiumDocuments.all.filter((a2) => {
      var o;
      return a2.state < U.Linked || !(!((o = this.buildState.get(a2.uri.toString())) === null || o === void 0) && o.completed);
    }).toArray());
    await this.buildDocuments(s, this.updateBuildOptions, r);
  }
  async emitUpdate(e, t) {
    await Promise.all(this.updateListeners.map((r) => r(e, t)));
  }
  /**
   * Sort the given documents by priority. By default, documents with an open text document are prioritized.
   * This is useful to ensure that visible documents show their diagnostics before all other documents.
   *
   * This improves the responsiveness in large workspaces as users usually don't care about diagnostics
   * in files that are currently not opened in the editor.
   */
  sortDocuments(e) {
    let t = 0, r = e.length - 1;
    for (; t < r; ) {
      for (; t < e.length && this.hasTextDocument(e[t]); )
        t++;
      for (; r >= 0 && !this.hasTextDocument(e[r]); )
        r--;
      t < r && ([e[t], e[r]] = [e[r], e[t]]);
    }
    return e;
  }
  hasTextDocument(e) {
    var t;
    return !!(!((t = this.textDocuments) === null || t === void 0) && t.get(e.uri));
  }
  /**
   * Check whether the given document should be relinked after changes were found in the given URIs.
   */
  shouldRelink(e, t) {
    return e.references.some((r) => r.error !== void 0) ? true : this.indexManager.isAffected(e, t);
  }
  onUpdate(e) {
    return this.updateListeners.push(e), Hn.create(() => {
      const t = this.updateListeners.indexOf(e);
      t >= 0 && this.updateListeners.splice(t, 1);
    });
  }
  /**
   * Build the given documents by stepping through all build phases. If a document's state indicates
   * that a certain build phase is already done, the phase is skipped for that document.
   *
   * @param documents The documents to build.
   * @param options the {@link BuildOptions} to use.
   * @param cancelToken A cancellation token that can be used to cancel the build.
   * @returns A promise that resolves when the build is done.
   */
  async buildDocuments(e, t, r) {
    this.prepareBuild(e, t), await this.runCancelable(e, U.Parsed, r, (s) => this.langiumDocumentFactory.update(s, r)), await this.runCancelable(e, U.IndexedContent, r, (s) => this.indexManager.updateContent(s, r)), await this.runCancelable(e, U.ComputedScopes, r, async (s) => {
      const a2 = this.serviceRegistry.getServices(s.uri).references.ScopeComputation;
      s.precomputedScopes = await a2.computeLocalScopes(s, r);
    }), await this.runCancelable(e, U.Linked, r, (s) => this.serviceRegistry.getServices(s.uri).references.Linker.link(s, r)), await this.runCancelable(e, U.IndexedReferences, r, (s) => this.indexManager.updateReferences(s, r));
    const i = e.filter((s) => this.shouldValidate(s));
    await this.runCancelable(i, U.Validated, r, (s) => this.validate(s, r));
    for (const s of e) {
      const a2 = this.buildState.get(s.uri.toString());
      a2 && (a2.completed = true);
    }
  }
  /**
   * Runs prior to beginning the build process to update the {@link DocumentBuildState} for each document
   *
   * @param documents collection of documents to be built
   * @param options the {@link BuildOptions} to use
   */
  prepareBuild(e, t) {
    for (const r of e) {
      const i = r.uri.toString(), s = this.buildState.get(i);
      (!s || s.completed) && this.buildState.set(i, {
        completed: false,
        options: t,
        result: s == null ? void 0 : s.result
      });
    }
  }
  /**
   * Runs a cancelable operation on a set of documents to bring them to a specified {@link DocumentState}.
   *
   * @param documents The array of documents to process.
   * @param targetState The target {@link DocumentState} to bring the documents to.
   * @param cancelToken A token that can be used to cancel the operation.
   * @param callback A function to be called for each document.
   * @returns A promise that resolves when all documents have been processed or the operation is canceled.
   * @throws Will throw `OperationCancelled` if the operation is canceled via a `CancellationToken`.
   */
  async runCancelable(e, t, r, i) {
    const s = e.filter((o) => o.state < t);
    for (const o of s)
      await Ae(r), await i(o), o.state = t, await this.notifyDocumentPhase(o, t, r);
    const a2 = e.filter((o) => o.state === t);
    await this.notifyBuildPhase(a2, t, r), this.currentState = t;
  }
  onBuildPhase(e, t) {
    return this.buildPhaseListeners.add(e, t), Hn.create(() => {
      this.buildPhaseListeners.delete(e, t);
    });
  }
  onDocumentPhase(e, t) {
    return this.documentPhaseListeners.add(e, t), Hn.create(() => {
      this.documentPhaseListeners.delete(e, t);
    });
  }
  waitUntil(e, t, r) {
    let i;
    if (t && "path" in t ? i = t : r = t, r ?? (r = V.CancellationToken.None), i) {
      const s = this.langiumDocuments.getDocument(i);
      if (s && s.state > e)
        return Promise.resolve(i);
    }
    return this.currentState >= e ? Promise.resolve(void 0) : r.isCancellationRequested ? Promise.reject(ri) : new Promise((s, a2) => {
      const o = this.onBuildPhase(e, () => {
        if (o.dispose(), l.dispose(), i) {
          const c = this.langiumDocuments.getDocument(i);
          s(c == null ? void 0 : c.uri);
        } else
          s(void 0);
      }), l = r.onCancellationRequested(() => {
        o.dispose(), l.dispose(), a2(ri);
      });
    });
  }
  async notifyDocumentPhase(e, t, r) {
    const s = this.documentPhaseListeners.get(t).slice();
    for (const a2 of s)
      try {
        await a2(e, r);
      } catch (o) {
        if (!vi(o))
          throw o;
      }
  }
  async notifyBuildPhase(e, t, r) {
    if (e.length === 0)
      return;
    const s = this.buildPhaseListeners.get(t).slice();
    for (const a2 of s)
      await Ae(r), await a2(e, r);
  }
  /**
   * Determine whether the given document should be validated during a build. The default
   * implementation checks the `validation` property of the build options. If it's set to `true`
   * or a `ValidationOptions` object, the document is included in the validation phase.
   */
  shouldValidate(e) {
    return !!this.getBuildOptions(e).validation;
  }
  /**
   * Run validation checks on the given document and store the resulting diagnostics in the document.
   * If the document already contains diagnostics, the new ones are added to the list.
   */
  async validate(e, t) {
    var r, i;
    const s = this.serviceRegistry.getServices(e.uri).validation.DocumentValidator, a2 = this.getBuildOptions(e).validation, o = typeof a2 == "object" ? a2 : void 0, l = await s.validateDocument(e, o, t);
    e.diagnostics ? e.diagnostics.push(...l) : e.diagnostics = l;
    const c = this.buildState.get(e.uri.toString());
    if (c) {
      (r = c.result) !== null && r !== void 0 || (c.result = {});
      const u = (i = o == null ? void 0 : o.categories) !== null && i !== void 0 ? i : si.all;
      c.result.validationChecks ? c.result.validationChecks.push(...u) : c.result.validationChecks = [...u];
    }
  }
  getBuildOptions(e) {
    var t, r;
    return (r = (t = this.buildState.get(e.uri.toString())) === null || t === void 0 ? void 0 : t.options) !== null && r !== void 0 ? r : {};
  }
}
class Om {
  constructor(e) {
    this.symbolIndex = /* @__PURE__ */ new Map(), this.symbolByTypeIndex = new ym(), this.referenceIndex = /* @__PURE__ */ new Map(), this.documents = e.workspace.LangiumDocuments, this.serviceRegistry = e.ServiceRegistry, this.astReflection = e.AstReflection;
  }
  findAllReferences(e, t) {
    const r = et(e).uri, i = [];
    return this.referenceIndex.forEach((s) => {
      s.forEach((a2) => {
        it.equals(a2.targetUri, r) && a2.targetPath === t && i.push(a2);
      });
    }), ee(i);
  }
  allElements(e, t) {
    let r = ee(this.symbolIndex.keys());
    return t && (r = r.filter((i) => !t || t.has(i))), r.map((i) => this.getFileDescriptions(i, e)).flat();
  }
  getFileDescriptions(e, t) {
    var r;
    return t ? this.symbolByTypeIndex.get(e, t, () => {
      var s;
      return ((s = this.symbolIndex.get(e)) !== null && s !== void 0 ? s : []).filter((o) => this.astReflection.isSubtype(o.type, t));
    }) : (r = this.symbolIndex.get(e)) !== null && r !== void 0 ? r : [];
  }
  remove(e) {
    const t = e.toString();
    this.symbolIndex.delete(t), this.symbolByTypeIndex.clear(t), this.referenceIndex.delete(t);
  }
  async updateContent(e, t = V.CancellationToken.None) {
    const i = await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e, t), s = e.uri.toString();
    this.symbolIndex.set(s, i), this.symbolByTypeIndex.clear(s);
  }
  async updateReferences(e, t = V.CancellationToken.None) {
    const i = await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e, t);
    this.referenceIndex.set(e.uri.toString(), i);
  }
  isAffected(e, t) {
    const r = this.referenceIndex.get(e.uri.toString());
    return r ? r.some((i) => !i.local && t.has(i.targetUri.toString())) : false;
  }
}
class bm {
  constructor(e) {
    this.initialBuildOptions = {}, this._ready = new na(), this.serviceRegistry = e.ServiceRegistry, this.langiumDocuments = e.workspace.LangiumDocuments, this.documentBuilder = e.workspace.DocumentBuilder, this.fileSystemProvider = e.workspace.FileSystemProvider, this.mutex = e.workspace.WorkspaceLock;
  }
  get ready() {
    return this._ready.promise;
  }
  get workspaceFolders() {
    return this.folders;
  }
  initialize(e) {
    var t;
    this.folders = (t = e.workspaceFolders) !== null && t !== void 0 ? t : void 0;
  }
  initialized(e) {
    return this.mutex.write((t) => {
      var r;
      return this.initializeWorkspace((r = this.folders) !== null && r !== void 0 ? r : [], t);
    });
  }
  async initializeWorkspace(e, t = V.CancellationToken.None) {
    const r = await this.performStartup(e);
    await Ae(t), await this.documentBuilder.build(r, this.initialBuildOptions, t);
  }
  /**
   * Performs the uninterruptable startup sequence of the workspace manager.
   * This methods loads all documents in the workspace and other documents and returns them.
   */
  async performStartup(e) {
    const t = this.serviceRegistry.all.flatMap((s) => s.LanguageMetaData.fileExtensions), r = [], i = (s) => {
      r.push(s), this.langiumDocuments.hasDocument(s.uri) || this.langiumDocuments.addDocument(s);
    };
    return await this.loadAdditionalDocuments(e, i), await Promise.all(e.map((s) => [s, this.getRootFolder(s)]).map(async (s) => this.traverseFolder(...s, t, i))), this._ready.resolve(), r;
  }
  /**
   * Load all additional documents that shall be visible in the context of the given workspace
   * folders and add them to the collector. This can be used to include built-in libraries of
   * your language, which can be either loaded from provided files or constructed in memory.
   */
  loadAdditionalDocuments(e, t) {
    return Promise.resolve();
  }
  /**
   * Determine the root folder of the source documents in the given workspace folder.
   * The default implementation returns the URI of the workspace folder, but you can override
   * this to return a subfolder like `src` instead.
   */
  getRootFolder(e) {
    return yt.parse(e.uri);
  }
  /**
   * Traverse the file system folder identified by the given URI and its subfolders. All
   * contained files that match the file extensions are added to the collector.
   */
  async traverseFolder(e, t, r, i) {
    const s = await this.fileSystemProvider.readDirectory(t);
    await Promise.all(s.map(async (a2) => {
      if (this.includeEntry(e, a2, r)) {
        if (a2.isDirectory)
          await this.traverseFolder(e, a2.uri, r, i);
        else if (a2.isFile) {
          const o = await this.langiumDocuments.getOrCreateDocument(a2.uri);
          i(o);
        }
      }
    }));
  }
  /**
   * Determine whether the given folder entry shall be included while indexing the workspace.
   */
  includeEntry(e, t, r) {
    const i = it.basename(t.uri);
    if (i.startsWith("."))
      return false;
    if (t.isDirectory)
      return i !== "node_modules" && i !== "out";
    if (t.isFile) {
      const s = it.extname(t.uri);
      return r.includes(s);
    }
    return false;
  }
}
class Pm {
  buildUnexpectedCharactersMessage(e, t, r, i, s) {
    return rs.buildUnexpectedCharactersMessage(e, t, r, i, s);
  }
  buildUnableToPopLexerModeMessage(e) {
    return rs.buildUnableToPopLexerModeMessage(e);
  }
}
const Mm = { mode: "full" };
class Dm {
  constructor(e) {
    this.errorMessageProvider = e.parser.LexerErrorMessageProvider, this.tokenBuilder = e.parser.TokenBuilder;
    const t = this.tokenBuilder.buildTokens(e.Grammar, {
      caseInsensitive: e.LanguageMetaData.caseInsensitive
    });
    this.tokenTypes = this.toTokenTypeDictionary(t);
    const r = nl(t) ? Object.values(t) : t, i = e.LanguageMetaData.mode === "production";
    this.chevrotainLexer = new de(r, {
      positionTracking: "full",
      skipValidations: i,
      errorMessageProvider: this.errorMessageProvider
    });
  }
  get definition() {
    return this.tokenTypes;
  }
  tokenize(e, t = Mm) {
    var r, i, s;
    const a2 = this.chevrotainLexer.tokenize(e);
    return {
      tokens: a2.tokens,
      errors: a2.errors,
      hidden: (r = a2.groups.hidden) !== null && r !== void 0 ? r : [],
      report: (s = (i = this.tokenBuilder).flushLexingReport) === null || s === void 0 ? void 0 : s.call(i, e)
    };
  }
  toTokenTypeDictionary(e) {
    if (nl(e))
      return e;
    const t = Jc(e) ? Object.values(e.modes).flat() : e, r = {};
    return t.forEach((i) => r[i.name] = i), r;
  }
}
function Fm(n) {
  return Array.isArray(n) && (n.length === 0 || "name" in n[0]);
}
function Jc(n) {
  return n && "modes" in n && "defaultMode" in n;
}
function nl(n) {
  return !Fm(n) && !Jc(n);
}
function Gm(n, e, t) {
  let r, i;
  typeof n == "string" ? (i = e, r = t) : (i = n.range.start, r = e), i || (i = P.create(0, 0));
  const s = Qc(n), a2 = ra(r), o = Vm({
    lines: s,
    position: i,
    options: a2
  });
  return zm({
    index: 0,
    tokens: o,
    position: i
  });
}
function Um(n, e) {
  const t = ra(e), r = Qc(n);
  if (r.length === 0)
    return false;
  const i = r[0], s = r[r.length - 1], a2 = t.start, o = t.end;
  return !!(a2 != null && a2.exec(i)) && !!(o != null && o.exec(s));
}
function Qc(n) {
  let e = "";
  return typeof n == "string" ? e = n : e = n.text, e.split(kd);
}
const rl = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy, Bm = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
function Vm(n) {
  var e, t, r;
  const i = [];
  let s = n.position.line, a2 = n.position.character;
  for (let o = 0; o < n.lines.length; o++) {
    const l = o === 0, c = o === n.lines.length - 1;
    let u = n.lines[o], d = 0;
    if (l && n.options.start) {
      const f = (e = n.options.start) === null || e === void 0 ? void 0 : e.exec(u);
      f && (d = f.index + f[0].length);
    } else {
      const f = (t = n.options.line) === null || t === void 0 ? void 0 : t.exec(u);
      f && (d = f.index + f[0].length);
    }
    if (c) {
      const f = (r = n.options.end) === null || r === void 0 ? void 0 : r.exec(u);
      f && (u = u.substring(0, f.index));
    }
    if (u = u.substring(0, jm(u)), Ns(u, d) >= u.length) {
      if (i.length > 0) {
        const f = P.create(s, a2);
        i.push({
          type: "break",
          content: "",
          range: b.create(f, f)
        });
      }
    } else {
      rl.lastIndex = d;
      const f = rl.exec(u);
      if (f) {
        const m = f[0], g = f[1], v = P.create(s, a2 + d), y = P.create(s, a2 + d + m.length);
        i.push({
          type: "tag",
          content: g,
          range: b.create(v, y)
        }), d += m.length, d = Ns(u, d);
      }
      if (d < u.length) {
        const m = u.substring(d), g = Array.from(m.matchAll(Bm));
        i.push(...Wm(g, m, s, a2 + d));
      }
    }
    s++, a2 = 0;
  }
  return i.length > 0 && i[i.length - 1].type === "break" ? i.slice(0, -1) : i;
}
function Wm(n, e, t, r) {
  const i = [];
  if (n.length === 0) {
    const s = P.create(t, r), a2 = P.create(t, r + e.length);
    i.push({
      type: "text",
      content: e,
      range: b.create(s, a2)
    });
  } else {
    let s = 0;
    for (const o of n) {
      const l = o.index, c = e.substring(s, l);
      c.length > 0 && i.push({
        type: "text",
        content: e.substring(s, l),
        range: b.create(P.create(t, s + r), P.create(t, l + r))
      });
      let u = c.length + 1;
      const d = o[1];
      if (i.push({
        type: "inline-tag",
        content: d,
        range: b.create(P.create(t, s + u + r), P.create(t, s + u + d.length + r))
      }), u += d.length, o.length === 4) {
        u += o[2].length;
        const h = o[3];
        i.push({
          type: "text",
          content: h,
          range: b.create(P.create(t, s + u + r), P.create(t, s + u + h.length + r))
        });
      } else
        i.push({
          type: "text",
          content: "",
          range: b.create(P.create(t, s + u + r), P.create(t, s + u + r))
        });
      s = l + o[0].length;
    }
    const a2 = e.substring(s);
    a2.length > 0 && i.push({
      type: "text",
      content: a2,
      range: b.create(P.create(t, s + r), P.create(t, s + r + a2.length))
    });
  }
  return i;
}
const Km = /\S/, Hm = /\s*$/;
function Ns(n, e) {
  const t = n.substring(e).match(Km);
  return t ? e + t.index : n.length;
}
function jm(n) {
  const e = n.match(Hm);
  if (e && typeof e.index == "number")
    return e.index;
}
function zm(n) {
  var e, t, r, i;
  const s = P.create(n.position.line, n.position.character);
  if (n.tokens.length === 0)
    return new il([], b.create(s, s));
  const a2 = [];
  for (; n.index < n.tokens.length; ) {
    const c = qm(n, a2[a2.length - 1]);
    c && a2.push(c);
  }
  const o = (t = (e = a2[0]) === null || e === void 0 ? void 0 : e.range.start) !== null && t !== void 0 ? t : s, l = (i = (r = a2[a2.length - 1]) === null || r === void 0 ? void 0 : r.range.end) !== null && i !== void 0 ? i : s;
  return new il(a2, b.create(o, l));
}
function qm(n, e) {
  const t = n.tokens[n.index];
  if (t.type === "tag")
    return eu(n, false);
  if (t.type === "text" || t.type === "inline-tag")
    return Zc(n);
  Ym(t, e), n.index++;
}
function Ym(n, e) {
  if (e) {
    const t = new nu("", n.range);
    "inlines" in e ? e.inlines.push(t) : e.content.inlines.push(t);
  }
}
function Zc(n) {
  let e = n.tokens[n.index];
  const t = e;
  let r = e;
  const i = [];
  for (; e && e.type !== "break" && e.type !== "tag"; )
    i.push(Xm(n)), r = e, e = n.tokens[n.index];
  return new ws(i, b.create(t.range.start, r.range.end));
}
function Xm(n) {
  return n.tokens[n.index].type === "inline-tag" ? eu(n, true) : tu(n);
}
function eu(n, e) {
  const t = n.tokens[n.index++], r = t.content.substring(1), i = n.tokens[n.index];
  if ((i == null ? void 0 : i.type) === "text")
    if (e) {
      const s = tu(n);
      return new Ui(r, new ws([s], s.range), e, b.create(t.range.start, s.range.end));
    } else {
      const s = Zc(n);
      return new Ui(r, s, e, b.create(t.range.start, s.range.end));
    }
  else {
    const s = t.range;
    return new Ui(r, new ws([], s), e, s);
  }
}
function tu(n) {
  const e = n.tokens[n.index++];
  return new nu(e.content, e.range);
}
function ra(n) {
  if (!n)
    return ra({
      start: "/**",
      end: "*/",
      line: "*"
    });
  const { start: e, end: t, line: r } = n;
  return {
    start: Gi(e, true),
    end: Gi(t, false),
    line: Gi(r, true)
  };
}
function Gi(n, e) {
  if (typeof n == "string" || typeof n == "object") {
    const t = typeof n == "string" ? fi(n) : n.source;
    return e ? new RegExp(`^\\s*${t}`) : new RegExp(`\\s*${t}\\s*$`);
  } else
    return n;
}
class il {
  constructor(e, t) {
    this.elements = e, this.range = t;
  }
  getTag(e) {
    return this.getAllTags().find((t) => t.name === e);
  }
  getTags(e) {
    return this.getAllTags().filter((t) => t.name === e);
  }
  getAllTags() {
    return this.elements.filter((e) => "name" in e);
  }
  toString() {
    let e = "";
    for (const t of this.elements)
      if (e.length === 0)
        e = t.toString();
      else {
        const r = t.toString();
        e += sl(e) + r;
      }
    return e.trim();
  }
  toMarkdown(e) {
    let t = "";
    for (const r of this.elements)
      if (t.length === 0)
        t = r.toMarkdown(e);
      else {
        const i = r.toMarkdown(e);
        t += sl(t) + i;
      }
    return t.trim();
  }
}
class Ui {
  constructor(e, t, r, i) {
    this.name = e, this.content = t, this.inline = r, this.range = i;
  }
  toString() {
    let e = `@${this.name}`;
    const t = this.content.toString();
    return this.content.inlines.length === 1 ? e = `${e} ${t}` : this.content.inlines.length > 1 && (e = `${e}
${t}`), this.inline ? `{${e}}` : e;
  }
  toMarkdown(e) {
    var t, r;
    return (r = (t = e == null ? void 0 : e.renderTag) === null || t === void 0 ? void 0 : t.call(e, this)) !== null && r !== void 0 ? r : this.toMarkdownDefault(e);
  }
  toMarkdownDefault(e) {
    const t = this.content.toMarkdown(e);
    if (this.inline) {
      const s = Jm(this.name, t, e ?? {});
      if (typeof s == "string")
        return s;
    }
    let r = "";
    (e == null ? void 0 : e.tag) === "italic" || (e == null ? void 0 : e.tag) === void 0 ? r = "*" : (e == null ? void 0 : e.tag) === "bold" ? r = "**" : (e == null ? void 0 : e.tag) === "bold-italic" && (r = "***");
    let i = `${r}@${this.name}${r}`;
    return this.content.inlines.length === 1 ? i = `${i} — ${t}` : this.content.inlines.length > 1 && (i = `${i}
${t}`), this.inline ? `{${i}}` : i;
  }
}
function Jm(n, e, t) {
  var r, i;
  if (n === "linkplain" || n === "linkcode" || n === "link") {
    const s = e.indexOf(" ");
    let a2 = e;
    if (s > 0) {
      const l = Ns(e, s);
      a2 = e.substring(l), e = e.substring(0, s);
    }
    return (n === "linkcode" || n === "link" && t.link === "code") && (a2 = `\`${a2}\``), (i = (r = t.renderLink) === null || r === void 0 ? void 0 : r.call(t, e, a2)) !== null && i !== void 0 ? i : Qm(e, a2);
  }
}
function Qm(n, e) {
  try {
    return yt.parse(n, true), `[${e}](${n})`;
  } catch {
    return n;
  }
}
class ws {
  constructor(e, t) {
    this.inlines = e, this.range = t;
  }
  toString() {
    let e = "";
    for (let t = 0; t < this.inlines.length; t++) {
      const r = this.inlines[t], i = this.inlines[t + 1];
      e += r.toString(), i && i.range.start.line > r.range.start.line && (e += `
`);
    }
    return e;
  }
  toMarkdown(e) {
    let t = "";
    for (let r = 0; r < this.inlines.length; r++) {
      const i = this.inlines[r], s = this.inlines[r + 1];
      t += i.toMarkdown(e), s && s.range.start.line > i.range.start.line && (t += `
`);
    }
    return t;
  }
}
class nu {
  constructor(e, t) {
    this.text = e, this.range = t;
  }
  toString() {
    return this.text;
  }
  toMarkdown() {
    return this.text;
  }
}
function sl(n) {
  return n.endsWith(`
`) ? `
` : `

`;
}
class Zm {
  constructor(e) {
    this.indexManager = e.shared.workspace.IndexManager, this.commentProvider = e.documentation.CommentProvider;
  }
  getDocumentation(e) {
    const t = this.commentProvider.getComment(e);
    if (t && Um(t))
      return Gm(t).toMarkdown({
        renderLink: (i, s) => this.documentationLinkRenderer(e, i, s),
        renderTag: (i) => this.documentationTagRenderer(e, i)
      });
  }
  documentationLinkRenderer(e, t, r) {
    var i;
    const s = (i = this.findNameInPrecomputedScopes(e, t)) !== null && i !== void 0 ? i : this.findNameInGlobalScope(e, t);
    if (s && s.nameSegment) {
      const a2 = s.nameSegment.range.start.line + 1, o = s.nameSegment.range.start.character + 1, l = s.documentUri.with({ fragment: `L${a2},${o}` });
      return `[${r}](${l.toString()})`;
    } else
      return;
  }
  documentationTagRenderer(e, t) {
  }
  findNameInPrecomputedScopes(e, t) {
    const i = et(e).precomputedScopes;
    if (!i)
      return;
    let s = e;
    do {
      const o = i.get(s).find((l) => l.name === t);
      if (o)
        return o;
      s = s.$container;
    } while (s);
  }
  findNameInGlobalScope(e, t) {
    return this.indexManager.allElements().find((i) => i.name === t);
  }
}
class eg {
  constructor(e) {
    this.grammarConfig = () => e.parser.GrammarConfig;
  }
  getComment(e) {
    var t;
    return vm(e) ? e.$comment : (t = Zu(e.$cstNode, this.grammarConfig().multilineCommentRules)) === null || t === void 0 ? void 0 : t.text;
  }
}
class tg {
  constructor(e) {
    this.syncParser = e.parser.LangiumParser;
  }
  parse(e, t) {
    return Promise.resolve(this.syncParser.parse(e));
  }
}
class ng {
  constructor() {
    this.previousTokenSource = new V.CancellationTokenSource(), this.writeQueue = [], this.readQueue = [], this.done = true;
  }
  write(e) {
    this.cancelWrite();
    const t = am();
    return this.previousTokenSource = t, this.enqueue(this.writeQueue, e, t.token);
  }
  read(e) {
    return this.enqueue(this.readQueue, e);
  }
  enqueue(e, t, r = V.CancellationToken.None) {
    const i = new na(), s = {
      action: t,
      deferred: i,
      cancellationToken: r
    };
    return e.push(s), this.performNextOperation(), i.promise;
  }
  async performNextOperation() {
    if (!this.done)
      return;
    const e = [];
    if (this.writeQueue.length > 0)
      e.push(this.writeQueue.shift());
    else if (this.readQueue.length > 0)
      e.push(...this.readQueue.splice(0, this.readQueue.length));
    else
      return;
    this.done = false, await Promise.all(e.map(async ({ action: t, deferred: r, cancellationToken: i }) => {
      try {
        const s = await Promise.resolve().then(() => t(i));
        r.resolve(s);
      } catch (s) {
        vi(s) ? r.resolve(void 0) : r.reject(s);
      }
    })), this.done = true, this.performNextOperation();
  }
  cancelWrite() {
    this.previousTokenSource.cancel();
  }
}
class rg {
  constructor(e) {
    this.grammarElementIdMap = new Zo(), this.tokenTypeIdMap = new Zo(), this.grammar = e.Grammar, this.lexer = e.parser.Lexer, this.linker = e.references.Linker;
  }
  dehydrate(e) {
    return {
      lexerErrors: e.lexerErrors,
      lexerReport: e.lexerReport ? this.dehydrateLexerReport(e.lexerReport) : void 0,
      // We need to create shallow copies of the errors
      // The original errors inherit from the `Error` class, which is not transferable across worker threads
      parserErrors: e.parserErrors.map((t) => Object.assign(Object.assign({}, t), { message: t.message })),
      value: this.dehydrateAstNode(e.value, this.createDehyrationContext(e.value))
    };
  }
  dehydrateLexerReport(e) {
    return e;
  }
  createDehyrationContext(e) {
    const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    for (const i of Nt(e))
      t.set(i, {});
    if (e.$cstNode)
      for (const i of Xi(e.$cstNode))
        r.set(i, {});
    return {
      astNodes: t,
      cstNodes: r
    };
  }
  dehydrateAstNode(e, t) {
    const r = t.astNodes.get(e);
    r.$type = e.$type, r.$containerIndex = e.$containerIndex, r.$containerProperty = e.$containerProperty, e.$cstNode !== void 0 && (r.$cstNode = this.dehydrateCstNode(e.$cstNode, t));
    for (const [i, s] of Object.entries(e))
      if (!i.startsWith("$"))
        if (Array.isArray(s)) {
          const a2 = [];
          r[i] = a2;
          for (const o of s)
            ae(o) ? a2.push(this.dehydrateAstNode(o, t)) : Ue(o) ? a2.push(this.dehydrateReference(o, t)) : a2.push(o);
        } else
          ae(s) ? r[i] = this.dehydrateAstNode(s, t) : Ue(s) ? r[i] = this.dehydrateReference(s, t) : s !== void 0 && (r[i] = s);
    return r;
  }
  dehydrateReference(e, t) {
    const r = {};
    return r.$refText = e.$refText, e.$refNode && (r.$refNode = t.cstNodes.get(e.$refNode)), r;
  }
  dehydrateCstNode(e, t) {
    const r = t.cstNodes.get(e);
    return Il(e) ? r.fullText = e.fullText : r.grammarSource = this.getGrammarElementId(e.grammarSource), r.hidden = e.hidden, r.astNode = t.astNodes.get(e.astNode), zn(e) ? r.content = e.content.map((i) => this.dehydrateCstNode(i, t)) : Sl(e) && (r.tokenType = e.tokenType.name, r.offset = e.offset, r.length = e.length, r.startLine = e.range.start.line, r.startColumn = e.range.start.character, r.endLine = e.range.end.line, r.endColumn = e.range.end.character), r;
  }
  hydrate(e) {
    const t = e.value, r = this.createHydrationContext(t);
    return "$cstNode" in t && this.hydrateCstNode(t.$cstNode, r), {
      lexerErrors: e.lexerErrors,
      lexerReport: e.lexerReport,
      parserErrors: e.parserErrors,
      value: this.hydrateAstNode(t, r)
    };
  }
  createHydrationContext(e) {
    const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    for (const s of Nt(e))
      t.set(s, {});
    let i;
    if (e.$cstNode)
      for (const s of Xi(e.$cstNode)) {
        let a2;
        "fullText" in s ? (a2 = new Pc(s.fullText), i = a2) : "content" in s ? a2 = new ea() : "tokenType" in s && (a2 = this.hydrateCstLeafNode(s)), a2 && (r.set(s, a2), a2.root = i);
      }
    return {
      astNodes: t,
      cstNodes: r
    };
  }
  hydrateAstNode(e, t) {
    const r = t.astNodes.get(e);
    r.$type = e.$type, r.$containerIndex = e.$containerIndex, r.$containerProperty = e.$containerProperty, e.$cstNode && (r.$cstNode = t.cstNodes.get(e.$cstNode));
    for (const [i, s] of Object.entries(e))
      if (!i.startsWith("$"))
        if (Array.isArray(s)) {
          const a2 = [];
          r[i] = a2;
          for (const o of s)
            ae(o) ? a2.push(this.setParent(this.hydrateAstNode(o, t), r)) : Ue(o) ? a2.push(this.hydrateReference(o, r, i, t)) : a2.push(o);
        } else
          ae(s) ? r[i] = this.setParent(this.hydrateAstNode(s, t), r) : Ue(s) ? r[i] = this.hydrateReference(s, r, i, t) : s !== void 0 && (r[i] = s);
    return r;
  }
  setParent(e, t) {
    return e.$container = t, e;
  }
  hydrateReference(e, t, r, i) {
    return this.linker.buildReference(t, r, i.cstNodes.get(e.$refNode), e.$refText);
  }
  hydrateCstNode(e, t, r = 0) {
    const i = t.cstNodes.get(e);
    if (typeof e.grammarSource == "number" && (i.grammarSource = this.getGrammarElement(e.grammarSource)), i.astNode = t.astNodes.get(e.astNode), zn(i))
      for (const s of e.content) {
        const a2 = this.hydrateCstNode(s, t, r++);
        i.content.push(a2);
      }
    return i;
  }
  hydrateCstLeafNode(e) {
    const t = this.getTokenType(e.tokenType), r = e.offset, i = e.length, s = e.startLine, a2 = e.startColumn, o = e.endLine, l = e.endColumn, c = e.hidden;
    return new xs(r, i, {
      start: {
        line: s,
        character: a2
      },
      end: {
        line: o,
        character: l
      }
    }, t, c);
  }
  getTokenType(e) {
    return this.lexer.definition[e];
  }
  getGrammarElementId(e) {
    if (e)
      return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.get(e);
  }
  getGrammarElement(e) {
    return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.getKey(e);
  }
  createGrammarElementIdMap() {
    let e = 0;
    for (const t of Nt(this.grammar))
      td(t) && this.grammarElementIdMap.set(t, e++);
  }
}
function At(n) {
  return {
    documentation: {
      CommentProvider: (e) => new eg(e),
      DocumentationProvider: (e) => new Zm(e)
    },
    parser: {
      AsyncParser: (e) => new tg(e),
      GrammarConfig: (e) => jd(e),
      LangiumParser: (e) => em(e),
      CompletionParser: (e) => Zp(e),
      ValueConverter: () => new Kc(),
      TokenBuilder: () => new Wc(),
      Lexer: (e) => new Dm(e),
      ParserErrorMessageProvider: () => new Fc(),
      LexerErrorMessageProvider: () => new Pm()
    },
    workspace: {
      AstNodeLocator: () => new Nm(),
      AstNodeDescriptionProvider: (e) => new Cm(e),
      ReferenceDescriptionProvider: (e) => new $m(e)
    },
    references: {
      Linker: (e) => new um(e),
      NameProvider: () => new fm(),
      ScopeProvider: (e) => new Rm(e),
      ScopeComputation: (e) => new pm(e),
      References: (e) => new hm(e)
    },
    serializer: {
      Hydrator: (e) => new rg(e),
      JsonSerializer: (e) => new Am(e)
    },
    validation: {
      DocumentValidator: (e) => new xm(e),
      ValidationRegistry: (e) => new km(e)
    },
    shared: () => n.shared
  };
}
function Et(n) {
  return {
    ServiceRegistry: (e) => new Em(e),
    workspace: {
      LangiumDocuments: (e) => new cm(e),
      LangiumDocumentFactory: (e) => new lm(e),
      DocumentBuilder: (e) => new Lm(e),
      IndexManager: (e) => new Om(e),
      WorkspaceManager: (e) => new bm(e),
      FileSystemProvider: (e) => n.fileSystemProvider(e),
      WorkspaceLock: () => new ng(),
      ConfigurationProvider: (e) => new _m(e)
    }
  };
}
var al;
(function(n) {
  n.merge = (e, t) => ai(ai({}, e), t);
})(al || (al = {}));
function pe(n, e, t, r, i, s, a2, o, l) {
  const c = [n, e, t, r, i, s, a2, o, l].reduce(ai, {});
  return ru(c);
}
const ig = Symbol("isProxy");
function ru(n, e) {
  const t = new Proxy({}, {
    deleteProperty: () => false,
    set: () => {
      throw new Error("Cannot set property on injected service container");
    },
    get: (r, i) => i === ig ? true : ll(r, i, n, e || t),
    getOwnPropertyDescriptor: (r, i) => (ll(r, i, n, e || t), Object.getOwnPropertyDescriptor(r, i)),
    // used by for..in
    has: (r, i) => i in n,
    // used by ..in..
    ownKeys: () => [...Object.getOwnPropertyNames(n)]
    // used by for..in
  });
  return t;
}
const ol = Symbol();
function ll(n, e, t, r) {
  if (e in n) {
    if (n[e] instanceof Error)
      throw new Error("Construction failure. Please make sure that your dependencies are constructable.", { cause: n[e] });
    if (n[e] === ol)
      throw new Error('Cycle detected. Please make "' + String(e) + '" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies');
    return n[e];
  } else if (e in t) {
    const i = t[e];
    n[e] = ol;
    try {
      n[e] = typeof i == "function" ? i(r) : ru(i, r);
    } catch (s) {
      throw n[e] = s instanceof Error ? s : void 0, s;
    }
    return n[e];
  } else
    return;
}
function ai(n, e) {
  if (e) {
    for (const [t, r] of Object.entries(e))
      if (r !== void 0) {
        const i = n[t];
        i !== null && r !== null && typeof i == "object" && typeof r == "object" ? n[t] = ai(i, r) : n[t] = r;
      }
  }
  return n;
}
class sg {
  readFile() {
    throw new Error("No file system is available.");
  }
  async readDirectory() {
    return [];
  }
}
const kt = {
  fileSystemProvider: () => new sg()
}, ag = {
  Grammar: () => {
  },
  LanguageMetaData: () => ({
    caseInsensitive: false,
    fileExtensions: [".langium"],
    languageId: "langium"
  })
}, og = {
  AstReflection: () => new Ol()
};
function lg() {
  const n = pe(Et(kt), og), e = pe(At({ shared: n }), ag);
  return n.ServiceRegistry.register(e), e;
}
function rn(n) {
  var e;
  const t = lg(), r = t.serializer.JsonSerializer.deserialize(n);
  return t.shared.workspace.LangiumDocumentFactory.fromModel(r, yt.parse(`memory://${(e = r.name) !== null && e !== void 0 ? e : "grammar"}.langium`)), r;
}
var cg = Object.defineProperty, k = (n, e) => cg(n, "name", { value: e, configurable: true }), cl = "Statement", _r = "Architecture";
function ug(n) {
  return De.isInstance(n, _r);
}
k(ug, "isArchitecture");
var Rr = "Axis", Bn = "Branch";
function dg(n) {
  return De.isInstance(n, Bn);
}
k(dg, "isBranch");
var vr = "Checkout", Ar = "CherryPicking", Vn = "Commit";
function fg(n) {
  return De.isInstance(n, Vn);
}
k(fg, "isCommit");
var Lr = "Common";
function hg(n) {
  return De.isInstance(n, Lr);
}
k(hg, "isCommon");
var Bi = "Curve", Vi = "Edge", Wi = "Entry", Wn = "GitGraph";
function pg(n) {
  return De.isInstance(n, Wn);
}
k(pg, "isGitGraph");
var Ki = "Group", Or = "Info";
function mg(n) {
  return De.isInstance(n, Or);
}
k(mg, "isInfo");
var Hi = "Junction", Kn = "Merge";
function gg(n) {
  return De.isInstance(n, Kn);
}
k(gg, "isMerge");
var ji = "Option", br = "Packet";
function yg(n) {
  return De.isInstance(n, br);
}
k(yg, "isPacket");
var Pr = "PacketBlock";
function Tg(n) {
  return De.isInstance(n, Pr);
}
k(Tg, "isPacketBlock");
var Mr = "Pie";
function Rg(n) {
  return De.isInstance(n, Mr);
}
k(Rg, "isPie");
var Dr = "PieSection";
function vg(n) {
  return De.isInstance(n, Dr);
}
k(vg, "isPieSection");
var zi = "Radar", qi = "Service", Er = "Direction", _t, iu = (_t = class extends xl {
  getAllTypes() {
    return [_r, Rr, Bn, vr, Ar, Vn, Lr, Bi, Er, Vi, Wi, Wn, Ki, Or, Hi, Kn, ji, br, Pr, Mr, Dr, zi, qi, cl];
  }
  computeIsSubtype(e, t) {
    switch (e) {
      case Bn:
      case vr:
      case Ar:
      case Vn:
      case Kn:
        return this.isSubtype(cl, t);
      case Er:
        return this.isSubtype(Wn, t);
      default:
        return false;
    }
  }
  getReferenceType(e) {
    const t = `${e.container.$type}:${e.property}`;
    switch (t) {
      case "Entry:axis":
        return Rr;
      default:
        throw new Error(`${t} is not a valid reference id.`);
    }
  }
  getTypeMetaData(e) {
    switch (e) {
      case _r:
        return {
          name: _r,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "edges", defaultValue: [] },
            { name: "groups", defaultValue: [] },
            { name: "junctions", defaultValue: [] },
            { name: "services", defaultValue: [] },
            { name: "title" }
          ]
        };
      case Rr:
        return {
          name: Rr,
          properties: [
            { name: "label" },
            { name: "name" }
          ]
        };
      case Bn:
        return {
          name: Bn,
          properties: [
            { name: "name" },
            { name: "order" }
          ]
        };
      case vr:
        return {
          name: vr,
          properties: [
            { name: "branch" }
          ]
        };
      case Ar:
        return {
          name: Ar,
          properties: [
            { name: "id" },
            { name: "parent" },
            { name: "tags", defaultValue: [] }
          ]
        };
      case Vn:
        return {
          name: Vn,
          properties: [
            { name: "id" },
            { name: "message" },
            { name: "tags", defaultValue: [] },
            { name: "type" }
          ]
        };
      case Lr:
        return {
          name: Lr,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "title" }
          ]
        };
      case Bi:
        return {
          name: Bi,
          properties: [
            { name: "entries", defaultValue: [] },
            { name: "label" },
            { name: "name" }
          ]
        };
      case Vi:
        return {
          name: Vi,
          properties: [
            { name: "lhsDir" },
            { name: "lhsGroup", defaultValue: false },
            { name: "lhsId" },
            { name: "lhsInto", defaultValue: false },
            { name: "rhsDir" },
            { name: "rhsGroup", defaultValue: false },
            { name: "rhsId" },
            { name: "rhsInto", defaultValue: false },
            { name: "title" }
          ]
        };
      case Wi:
        return {
          name: Wi,
          properties: [
            { name: "axis" },
            { name: "value" }
          ]
        };
      case Wn:
        return {
          name: Wn,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "statements", defaultValue: [] },
            { name: "title" }
          ]
        };
      case Ki:
        return {
          name: Ki,
          properties: [
            { name: "icon" },
            { name: "id" },
            { name: "in" },
            { name: "title" }
          ]
        };
      case Or:
        return {
          name: Or,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "title" }
          ]
        };
      case Hi:
        return {
          name: Hi,
          properties: [
            { name: "id" },
            { name: "in" }
          ]
        };
      case Kn:
        return {
          name: Kn,
          properties: [
            { name: "branch" },
            { name: "id" },
            { name: "tags", defaultValue: [] },
            { name: "type" }
          ]
        };
      case ji:
        return {
          name: ji,
          properties: [
            { name: "name" },
            { name: "value", defaultValue: false }
          ]
        };
      case br:
        return {
          name: br,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "blocks", defaultValue: [] },
            { name: "title" }
          ]
        };
      case Pr:
        return {
          name: Pr,
          properties: [
            { name: "end" },
            { name: "label" },
            { name: "start" }
          ]
        };
      case Mr:
        return {
          name: Mr,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "sections", defaultValue: [] },
            { name: "showData", defaultValue: false },
            { name: "title" }
          ]
        };
      case Dr:
        return {
          name: Dr,
          properties: [
            { name: "label" },
            { name: "value" }
          ]
        };
      case zi:
        return {
          name: zi,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "axes", defaultValue: [] },
            { name: "curves", defaultValue: [] },
            { name: "options", defaultValue: [] },
            { name: "title" }
          ]
        };
      case qi:
        return {
          name: qi,
          properties: [
            { name: "icon" },
            { name: "iconText" },
            { name: "id" },
            { name: "in" },
            { name: "title" }
          ]
        };
      case Er:
        return {
          name: Er,
          properties: [
            { name: "accDescr" },
            { name: "accTitle" },
            { name: "dir" },
            { name: "statements", defaultValue: [] },
            { name: "title" }
          ]
        };
      default:
        return {
          name: e,
          properties: []
        };
    }
  }
}, k(_t, "MermaidAstReflection"), _t), De = new iu(), ul, Ag = /* @__PURE__ */ k(() => ul ?? (ul = rn('{"$type":"Grammar","isDeclared":true,"name":"Info","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Info","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"info"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"showInfo"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"*"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}')), "InfoGrammar"), dl, Eg = /* @__PURE__ */ k(() => dl ?? (dl = rn(`{"$type":"Grammar","isDeclared":true,"name":"Packet","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Packet","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"packet-beta"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"+"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PacketBlock","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"start","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"end","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"?"},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}`)), "PacketGrammar"), fl, kg = /* @__PURE__ */ k(() => fl ?? (fl = rn('{"$type":"Grammar","isDeclared":true,"name":"Pie","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Pie","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"pie"},{"$type":"Assignment","feature":"showData","operator":"?=","terminal":{"$type":"Keyword","value":"showData"},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},"cardinality":"+"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PieSection","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"PIE_SECTION_LABEL","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]+\\"/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"PIE_SECTION_VALUE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/(0|[1-9][0-9]*)(\\\\.[0-9]+)?/"},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}')), "PieGrammar"), hl, xg = /* @__PURE__ */ k(() => hl ?? (hl = rn('{"$type":"Grammar","isDeclared":true,"name":"Architecture","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Architecture","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"architecture-beta"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"groups","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"services","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"junctions","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"edges","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"LeftPort","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"lhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"RightPort","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"rhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Keyword","value":":"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Arrow","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Assignment","feature":"lhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"--"},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Keyword","value":"-"}]}]},{"$type":"Assignment","feature":"rhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Group","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"group"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Service","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"service"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"iconText","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}}],"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Junction","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"junction"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Edge","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"lhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"lhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"rhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"rhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"ARROW_DIRECTION","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"L"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"R"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"T"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"B"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_ID","definition":{"$type":"RegexToken","regex":"/[\\\\w]+/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TEXT_ICON","definition":{"$type":"RegexToken","regex":"/\\\\(\\"[^\\"]+\\"\\\\)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_ICON","definition":{"$type":"RegexToken","regex":"/\\\\([\\\\w-:]+\\\\)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TITLE","definition":{"$type":"RegexToken","regex":"/\\\\[[\\\\w ]+\\\\]/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_GROUP","definition":{"$type":"RegexToken","regex":"/\\\\{group\\\\}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_INTO","definition":{"$type":"RegexToken","regex":"/<|>/"},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"types":[],"usedGrammars":[]}')), "ArchitectureGrammar"), pl, Sg = /* @__PURE__ */ k(() => pl ?? (pl = rn(`{"$type":"Grammar","isDeclared":true,"name":"GitGraph","interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"rules":[{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"ParserRule","entry":true,"name":"GitGraph","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Keyword","value":":"}]},{"$type":"Keyword","value":"gitGraph:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]},{"$type":"Assignment","feature":"statements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"*"}]}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Direction","definition":{"$type":"Assignment","feature":"dir","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"LR"},{"$type":"Keyword","value":"TB"},{"$type":"Keyword","value":"BT"}]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Commit","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"commit"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"msg:","cardinality":"?"},{"$type":"Assignment","feature":"message","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Branch","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"branch"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"order:"},{"$type":"Assignment","feature":"order","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Merge","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"merge"},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}]}},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Checkout","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"checkout"},{"$type":"Keyword","value":"switch"}]},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"CherryPicking","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"cherry-pick"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"parent:"},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+(?=\\\\s)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"imports":[],"types":[],"usedGrammars":[]}`)), "GitGraphGrammar"), ml, Ig = /* @__PURE__ */ k(() => ml ?? (ml = rn(`{"$type":"Grammar","isDeclared":true,"name":"Radar","interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]},{"$type":"Interface","name":"Entry","attributes":[{"$type":"TypeAttribute","name":"axis","isOptional":true,"type":{"$type":"ReferenceType","referenceType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@12"}}}},{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}],"superTypes":[]}],"rules":[{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"ParserRule","entry":true,"name":"Radar","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":"radar-beta:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Keyword","value":"axis"},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"curve"},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Label","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Keyword","value":"]"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Axis","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Curve","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[],"cardinality":"?"},{"$type":"Keyword","value":"{"},{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},{"$type":"Keyword","value":"}"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Entries","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"DetailedEntry","returnType":{"$ref":"#/interfaces@1"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"axis","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@12"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Keyword","value":":","cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"NumberEntry","returnType":{"$ref":"#/interfaces@1"},"definition":{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Option","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"showLegend"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"ticks"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"max"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"min"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"graticule"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/(0|[1-9][0-9]*)(\\\\.[0-9]+)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"GRATICULE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"circle"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"polygon"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[a-zA-Z_][a-zA-Z0-9\\\\-_]*/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"imports":[],"types":[],"usedGrammars":[]}`)), "RadarGrammar"), Cg = {
  languageId: "info",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
}, $g = {
  languageId: "packet",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
}, Ng = {
  languageId: "pie",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
}, wg = {
  languageId: "architecture",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
}, _g = {
  languageId: "gitGraph",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
}, Lg = {
  languageId: "radar",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: false,
  mode: "production"
}, sn = {
  AstReflection: /* @__PURE__ */ k(() => new iu(), "AstReflection")
}, Og = {
  Grammar: /* @__PURE__ */ k(() => Ag(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ k(() => Cg, "LanguageMetaData"),
  parser: {}
}, bg = {
  Grammar: /* @__PURE__ */ k(() => Eg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ k(() => $g, "LanguageMetaData"),
  parser: {}
}, Pg = {
  Grammar: /* @__PURE__ */ k(() => kg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ k(() => Ng, "LanguageMetaData"),
  parser: {}
}, Mg = {
  Grammar: /* @__PURE__ */ k(() => xg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ k(() => wg, "LanguageMetaData"),
  parser: {}
}, Dg = {
  Grammar: /* @__PURE__ */ k(() => Sg(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ k(() => _g, "LanguageMetaData"),
  parser: {}
}, Fg = {
  Grammar: /* @__PURE__ */ k(() => Ig(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ k(() => Lg, "LanguageMetaData"),
  parser: {}
}, Gg = /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/, Ug = /accTitle[\t ]*:([^\n\r]*)/, Bg = /title([\t ][^\n\r]*|)/, Vg = {
  ACC_DESCR: Gg,
  ACC_TITLE: Ug,
  TITLE: Bg
}, Lt, ia = (Lt = class extends Kc {
  runConverter(e, t, r) {
    let i = this.runCommonConverter(e, t, r);
    return i === void 0 && (i = this.runCustomConverter(e, t, r)), i === void 0 ? super.runConverter(e, t, r) : i;
  }
  runCommonConverter(e, t, r) {
    const i = Vg[e.name];
    if (i === void 0)
      return;
    const s = i.exec(t);
    if (s !== null) {
      if (s[1] !== void 0)
        return s[1].trim().replace(/[\t ]{2,}/gm, " ");
      if (s[2] !== void 0)
        return s[2].replace(/^\s*/gm, "").replace(/\s+$/gm, "").replace(/[\t ]{2,}/gm, " ").replace(/[\n\r]{2,}/gm, `
`);
    }
  }
}, k(Lt, "AbstractMermaidValueConverter"), Lt), Ot, Ai = (Ot = class extends ia {
  runCustomConverter(e, t, r) {
  }
}, k(Ot, "CommonValueConverter"), Ot), bt, xt = (bt = class extends Wc {
  constructor(e) {
    super(), this.keywords = new Set(e);
  }
  buildKeywordTokens(e, t, r) {
    const i = super.buildKeywordTokens(e, t, r);
    return i.forEach((s) => {
      this.keywords.has(s.name) && s.PATTERN !== void 0 && (s.PATTERN = new RegExp(s.PATTERN.toString() + "(?:(?=%%)|(?!\\S))"));
    }), i;
  }
}, k(bt, "AbstractMermaidTokenBuilder"), bt), Pt;
Pt = class extends xt {
}, k(Pt, "CommonTokenBuilder");
var Mt, Wg = (Mt = class extends xt {
  constructor() {
    super(["gitGraph"]);
  }
}, k(Mt, "GitGraphTokenBuilder"), Mt), Kg = {
  parser: {
    TokenBuilder: /* @__PURE__ */ k(() => new Wg(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ k(() => new Ai(), "ValueConverter")
  }
};
function Hg(n = kt) {
  const e = pe(
    Et(n),
    sn
  ), t = pe(
    At({ shared: e }),
    Dg,
    Kg
  );
  return e.ServiceRegistry.register(t), { shared: e, GitGraph: t };
}
k(Hg, "createGitGraphServices");
var Dt, jg = (Dt = class extends xt {
  constructor() {
    super(["info", "showInfo"]);
  }
}, k(Dt, "InfoTokenBuilder"), Dt), zg = {
  parser: {
    TokenBuilder: /* @__PURE__ */ k(() => new jg(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ k(() => new Ai(), "ValueConverter")
  }
};
function qg(n = kt) {
  const e = pe(
    Et(n),
    sn
  ), t = pe(
    At({ shared: e }),
    Og,
    zg
  );
  return e.ServiceRegistry.register(t), { shared: e, Info: t };
}
k(qg, "createInfoServices");
var Ft, Yg = (Ft = class extends xt {
  constructor() {
    super(["packet-beta"]);
  }
}, k(Ft, "PacketTokenBuilder"), Ft), Xg = {
  parser: {
    TokenBuilder: /* @__PURE__ */ k(() => new Yg(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ k(() => new Ai(), "ValueConverter")
  }
};
function Jg(n = kt) {
  const e = pe(
    Et(n),
    sn
  ), t = pe(
    At({ shared: e }),
    bg,
    Xg
  );
  return e.ServiceRegistry.register(t), { shared: e, Packet: t };
}
k(Jg, "createPacketServices");
var Gt, Qg = (Gt = class extends xt {
  constructor() {
    super(["pie", "showData"]);
  }
}, k(Gt, "PieTokenBuilder"), Gt), Ut, Zg = (Ut = class extends ia {
  runCustomConverter(e, t, r) {
    if (e.name === "PIE_SECTION_LABEL")
      return t.replace(/"/g, "").trim();
  }
}, k(Ut, "PieValueConverter"), Ut), ey = {
  parser: {
    TokenBuilder: /* @__PURE__ */ k(() => new Qg(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ k(() => new Zg(), "ValueConverter")
  }
};
function ty(n = kt) {
  const e = pe(
    Et(n),
    sn
  ), t = pe(
    At({ shared: e }),
    Pg,
    ey
  );
  return e.ServiceRegistry.register(t), { shared: e, Pie: t };
}
k(ty, "createPieServices");
var Bt, ny = (Bt = class extends xt {
  constructor() {
    super(["architecture"]);
  }
}, k(Bt, "ArchitectureTokenBuilder"), Bt), Vt, ry = (Vt = class extends ia {
  runCustomConverter(e, t, r) {
    if (e.name === "ARCH_ICON")
      return t.replace(/[()]/g, "").trim();
    if (e.name === "ARCH_TEXT_ICON")
      return t.replace(/["()]/g, "");
    if (e.name === "ARCH_TITLE")
      return t.replace(/[[\]]/g, "").trim();
  }
}, k(Vt, "ArchitectureValueConverter"), Vt), iy = {
  parser: {
    TokenBuilder: /* @__PURE__ */ k(() => new ny(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ k(() => new ry(), "ValueConverter")
  }
};
function sy(n = kt) {
  const e = pe(
    Et(n),
    sn
  ), t = pe(
    At({ shared: e }),
    Mg,
    iy
  );
  return e.ServiceRegistry.register(t), { shared: e, Architecture: t };
}
k(sy, "createArchitectureServices");
var Wt, ay = (Wt = class extends xt {
  constructor() {
    super(["radar-beta"]);
  }
}, k(Wt, "RadarTokenBuilder"), Wt), oy = {
  parser: {
    TokenBuilder: /* @__PURE__ */ k(() => new ay(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ k(() => new Ai(), "ValueConverter")
  }
};
function ly(n = kt) {
  const e = pe(
    Et(n),
    sn
  ), t = pe(
    At({ shared: e }),
    Fg,
    oy
  );
  return e.ServiceRegistry.register(t), { shared: e, Radar: t };
}
k(ly, "createRadarServices");
var Ze = {}, cy = {
  info: /* @__PURE__ */ k(async () => {
    const { createInfoServices: n } = await __vitePreload(() => Promise.resolve().then(() => info4N47QTOZDVSwpJVO), true ? void 0 : void 0, import.meta.url), e = n().Info.parser.LangiumParser;
    Ze.info = e;
  }, "info"),
  packet: /* @__PURE__ */ k(async () => {
    const { createPacketServices: n } = await __vitePreload(() => Promise.resolve().then(() => packetKVYON367O3FngxOm), true ? void 0 : void 0, import.meta.url), e = n().Packet.parser.LangiumParser;
    Ze.packet = e;
  }, "packet"),
  pie: /* @__PURE__ */ k(async () => {
    const { createPieServices: n } = await __vitePreload(() => Promise.resolve().then(() => pieR6RNRRYF2odmVfRs), true ? void 0 : void 0, import.meta.url), e = n().Pie.parser.LangiumParser;
    Ze.pie = e;
  }, "pie"),
  architecture: /* @__PURE__ */ k(async () => {
    const { createArchitectureServices: n } = await __vitePreload(() => Promise.resolve().then(() => architecture4AB2E3PPDg8GoWc2), true ? void 0 : void 0, import.meta.url), e = n().Architecture.parser.LangiumParser;
    Ze.architecture = e;
  }, "architecture"),
  gitGraph: /* @__PURE__ */ k(async () => {
    const { createGitGraphServices: n } = await __vitePreload(() => Promise.resolve().then(() => gitGraphO2Q2CXLXCwdJQUmb), true ? void 0 : void 0, import.meta.url), e = n().GitGraph.parser.LangiumParser;
    Ze.gitGraph = e;
  }, "gitGraph"),
  radar: /* @__PURE__ */ k(async () => {
    const { createRadarServices: n } = await __vitePreload(() => Promise.resolve().then(() => radarMK3ICKWKDci9lSdR), true ? void 0 : void 0, import.meta.url), e = n().Radar.parser.LangiumParser;
    Ze.radar = e;
  }, "radar")
};
async function uy(n, e) {
  const t = cy[n];
  if (!t)
    throw new Error(`Unknown diagram type: ${n}`);
  Ze[n] || await t();
  const i = Ze[n].parse(e);
  if (i.lexerErrors.length > 0 || i.parserErrors.length > 0)
    throw new dy(i);
  return i.value;
}
k(uy, "parse");
var Kt, dy = (Kt = class extends Error {
  constructor(e) {
    const t = e.lexerErrors.map((i) => i.message).join(`
`), r = e.parserErrors.map((i) => i.message).join(`
`);
    super(`Parsing failed: ${t} ${r}`), this.result = e;
  }
}, k(Kt, "MermaidParseError"), Kt);
const info4N47QTOZDVSwpJVO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  InfoModule: zg,
  createInfoServices: qg
}, Symbol.toStringTag, { value: "Module" }));
const packetKVYON367O3FngxOm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PacketModule: Xg,
  createPacketServices: Jg
}, Symbol.toStringTag, { value: "Module" }));
const pieR6RNRRYF2odmVfRs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PieModule: ey,
  createPieServices: ty
}, Symbol.toStringTag, { value: "Module" }));
const architecture4AB2E3PPDg8GoWc2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArchitectureModule: iy,
  createArchitectureServices: sy
}, Symbol.toStringTag, { value: "Module" }));
const gitGraphO2Q2CXLXCwdJQUmb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GitGraphModule: Kg,
  createGitGraphServices: Hg
}, Symbol.toStringTag, { value: "Module" }));
const radarMK3ICKWKDci9lSdR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RadarModule: oy,
  createRadarServices: ly
}, Symbol.toStringTag, { value: "Module" }));
export {
  uy as u
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
