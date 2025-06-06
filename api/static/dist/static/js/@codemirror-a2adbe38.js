import { t as T, N as Vs, s as Dh, a as Oh, b as pt, I as Th, T as pe, c as Wi, P as Bh, h as Lh } from "./@lezer-f449c16b.js";
import { c as P } from "./crelt-7bb88e1d.js";
import { S as Gt } from "./style-mod-ab9c37a6.js";
import { f as Rh } from "./@marijn-45184d7f.js";
import { k as Eh, b as Ph, s as Ih } from "./w3c-keyname-9fb136d3.js";
class L {
  lineAt(t) {
    if (t < 0 || t > this.length)
      throw new RangeError(`Invalid position ${t} in document of length ${this.length}`);
    return this.lineInner(t, false, 1, 0);
  }
  line(t) {
    if (t < 1 || t > this.lines)
      throw new RangeError(`Invalid line number ${t} in ${this.lines}-line document`);
    return this.lineInner(t, true, 1, 0);
  }
  replace(t, e, i) {
    [t, e] = Se(this, t, e);
    let s = [];
    return this.decompose(0, t, s, 2), i.length && i.decompose(0, i.length, s, 3), this.decompose(e, this.length, s, 1), vt.from(s, this.length - (e - t) + i.length);
  }
  append(t) {
    return this.replace(this.length, this.length, t);
  }
  slice(t, e = this.length) {
    [t, e] = Se(this, t, e);
    let i = [];
    return this.decompose(t, e, i, 0), vt.from(i, e - t);
  }
  eq(t) {
    if (t == this)
      return true;
    if (t.length != this.length || t.lines != this.lines)
      return false;
    let e = this.scanIdentical(t, 1), i = this.length - this.scanIdentical(t, -1), s = new je(this), r = new je(t);
    for (let o = e, l = e; ; ) {
      if (s.next(o), r.next(o), o = 0, s.lineBreak != r.lineBreak || s.done != r.done || s.value != r.value)
        return false;
      if (l += s.value.length, s.done || l >= i)
        return true;
    }
  }
  iter(t = 1) {
    return new je(this, t);
  }
  iterRange(t, e = this.length) {
    return new Uo(this, t, e);
  }
  iterLines(t, e) {
    let i;
    if (t == null)
      i = this.iter();
    else {
      e == null && (e = this.lines + 1);
      let s = this.line(t).from;
      i = this.iterRange(s, Math.max(s, e == this.lines + 1 ? this.length : e <= 1 ? 0 : this.line(e - 1).to));
    }
    return new Go(i);
  }
  toString() {
    return this.sliceString(0);
  }
  toJSON() {
    let t = [];
    return this.flatten(t), t;
  }
  constructor() {
  }
  static of(t) {
    if (t.length == 0)
      throw new RangeError("A document must have at least one line");
    return t.length == 1 && !t[0] ? L.empty : t.length <= 32 ? new W(t) : vt.from(W.split(t, []));
  }
}
class W extends L {
  constructor(t, e = Nh(t)) {
    super(), this.text = t, this.length = e;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(t, e, i, s) {
    for (let r = 0; ; r++) {
      let o = this.text[r], l = s + o.length;
      if ((e ? i : l) >= t)
        return new Fh(s, l, i, o);
      s = l + 1, i++;
    }
  }
  decompose(t, e, i, s) {
    let r = t <= 0 && e >= this.length ? this : new W(br(this.text, t, e), Math.min(e, this.length) - Math.max(0, t));
    if (s & 1) {
      let o = i.pop(), l = zi(r.text, o.text.slice(), 0, r.length);
      if (l.length <= 32)
        i.push(new W(l, o.length + r.length));
      else {
        let a = l.length >> 1;
        i.push(new W(l.slice(0, a)), new W(l.slice(a)));
      }
    } else
      i.push(r);
  }
  replace(t, e, i) {
    if (!(i instanceof W))
      return super.replace(t, e, i);
    [t, e] = Se(this, t, e);
    let s = zi(this.text, zi(i.text, br(this.text, 0, t)), e), r = this.length + i.length - (e - t);
    return s.length <= 32 ? new W(s, r) : vt.from(W.split(s, []), r);
  }
  sliceString(t, e = this.length, i = `
`) {
    [t, e] = Se(this, t, e);
    let s = "";
    for (let r = 0, o = 0; r <= e && o < this.text.length; o++) {
      let l = this.text[o], a = r + l.length;
      r > t && o && (s += i), t < a && e > r && (s += l.slice(Math.max(0, t - r), e - r)), r = a + 1;
    }
    return s;
  }
  flatten(t) {
    for (let e of this.text)
      t.push(e);
  }
  scanIdentical() {
    return 0;
  }
  static split(t, e) {
    let i = [], s = -1;
    for (let r of t)
      i.push(r), s += r.length + 1, i.length == 32 && (e.push(new W(i, s)), i = [], s = -1);
    return s > -1 && e.push(new W(i, s)), e;
  }
}
class vt extends L {
  constructor(t, e) {
    super(), this.children = t, this.length = e, this.lines = 0;
    for (let i of t)
      this.lines += i.lines;
  }
  lineInner(t, e, i, s) {
    for (let r = 0; ; r++) {
      let o = this.children[r], l = s + o.length, a = i + o.lines - 1;
      if ((e ? a : l) >= t)
        return o.lineInner(t, e, i, s);
      s = l + 1, i = a + 1;
    }
  }
  decompose(t, e, i, s) {
    for (let r = 0, o = 0; o <= e && r < this.children.length; r++) {
      let l = this.children[r], a = o + l.length;
      if (t <= a && e >= o) {
        let h = s & ((o <= t ? 1 : 0) | (a >= e ? 2 : 0));
        o >= t && a <= e && !h ? i.push(l) : l.decompose(t - o, e - o, i, h);
      }
      o = a + 1;
    }
  }
  replace(t, e, i) {
    if ([t, e] = Se(this, t, e), i.lines < this.lines)
      for (let s = 0, r = 0; s < this.children.length; s++) {
        let o = this.children[s], l = r + o.length;
        if (t >= r && e <= l) {
          let a = o.replace(t - r, e - r, i), h = this.lines - o.lines + a.lines;
          if (a.lines < h >> 5 - 1 && a.lines > h >> 5 + 1) {
            let c = this.children.slice();
            return c[s] = a, new vt(c, this.length - (e - t) + i.length);
          }
          return super.replace(r, l, a);
        }
        r = l + 1;
      }
    return super.replace(t, e, i);
  }
  sliceString(t, e = this.length, i = `
`) {
    [t, e] = Se(this, t, e);
    let s = "";
    for (let r = 0, o = 0; r < this.children.length && o <= e; r++) {
      let l = this.children[r], a = o + l.length;
      o > t && r && (s += i), t < a && e > o && (s += l.sliceString(t - o, e - o, i)), o = a + 1;
    }
    return s;
  }
  flatten(t) {
    for (let e of this.children)
      e.flatten(t);
  }
  scanIdentical(t, e) {
    if (!(t instanceof vt))
      return 0;
    let i = 0, [s, r, o, l] = e > 0 ? [0, 0, this.children.length, t.children.length] : [this.children.length - 1, t.children.length - 1, -1, -1];
    for (; ; s += e, r += e) {
      if (s == o || r == l)
        return i;
      let a = this.children[s], h = t.children[r];
      if (a != h)
        return i + a.scanIdentical(h, e);
      i += a.length + 1;
    }
  }
  static from(t, e = t.reduce((i, s) => i + s.length + 1, -1)) {
    let i = 0;
    for (let d of t)
      i += d.lines;
    if (i < 32) {
      let d = [];
      for (let p of t)
        p.flatten(d);
      return new W(d, e);
    }
    let s = Math.max(32, i >> 5), r = s << 1, o = s >> 1, l = [], a = 0, h = -1, c = [];
    function f(d) {
      let p;
      if (d.lines > r && d instanceof vt)
        for (let g of d.children)
          f(g);
      else
        d.lines > o && (a > o || !a) ? (u(), l.push(d)) : d instanceof W && a && (p = c[c.length - 1]) instanceof W && d.lines + p.lines <= 32 ? (a += d.lines, h += d.length + 1, c[c.length - 1] = new W(p.text.concat(d.text), p.length + 1 + d.length)) : (a + d.lines > s && u(), a += d.lines, h += d.length + 1, c.push(d));
    }
    function u() {
      a != 0 && (l.push(c.length == 1 ? c[0] : vt.from(c, h)), h = -1, a = c.length = 0);
    }
    for (let d of t)
      f(d);
    return u(), l.length == 1 ? l[0] : new vt(l, e);
  }
}
L.empty = new W([""], 0);
function Nh(n) {
  let t = -1;
  for (let e of n)
    t += e.length + 1;
  return t;
}
function zi(n, t, e = 0, i = 1e9) {
  for (let s = 0, r = 0, o = true; r < n.length && s <= i; r++) {
    let l = n[r], a = s + l.length;
    a >= e && (a > i && (l = l.slice(0, i - s)), s < e && (l = l.slice(e - s)), o ? (t[t.length - 1] += l, o = false) : t.push(l)), s = a + 1;
  }
  return t;
}
function br(n, t, e) {
  return zi(n, [""], t, e);
}
class je {
  constructor(t, e = 1) {
    this.dir = e, this.done = false, this.lineBreak = false, this.value = "", this.nodes = [t], this.offsets = [e > 0 ? 1 : (t instanceof W ? t.text.length : t.children.length) << 1];
  }
  nextInner(t, e) {
    for (this.done = this.lineBreak = false; ; ) {
      let i = this.nodes.length - 1, s = this.nodes[i], r = this.offsets[i], o = r >> 1, l = s instanceof W ? s.text.length : s.children.length;
      if (o == (e > 0 ? l : 0)) {
        if (i == 0)
          return this.done = true, this.value = "", this;
        e > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r & 1) == (e > 0 ? 0 : 1)) {
        if (this.offsets[i] += e, t == 0)
          return this.lineBreak = true, this.value = `
`, this;
        t--;
      } else if (s instanceof W) {
        let a = s.text[o + (e < 0 ? -1 : 0)];
        if (this.offsets[i] += e, a.length > Math.max(0, t))
          return this.value = t == 0 ? a : e > 0 ? a.slice(t) : a.slice(0, a.length - t), this;
        t -= a.length;
      } else {
        let a = s.children[o + (e < 0 ? -1 : 0)];
        t > a.length ? (t -= a.length, this.offsets[i] += e) : (e < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(e > 0 ? 1 : (a instanceof W ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(t = 0) {
    return t < 0 && (this.nextInner(-t, -this.dir), t = this.value.length), this.nextInner(t, this.dir);
  }
}
class Uo {
  constructor(t, e, i) {
    this.value = "", this.done = false, this.cursor = new je(t, e > i ? -1 : 1), this.pos = e > i ? t.length : 0, this.from = Math.min(e, i), this.to = Math.max(e, i);
  }
  nextInner(t, e) {
    if (e < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = true, this;
    t += Math.max(0, e < 0 ? this.pos - this.to : this.from - this.pos);
    let i = e < 0 ? this.pos - this.from : this.to - this.pos;
    t > i && (t = i), i -= t;
    let { value: s } = this.cursor.next(t);
    return this.pos += (s.length + t) * e, this.value = s.length <= i ? s : e < 0 ? s.slice(s.length - i) : s.slice(0, i), this.done = !this.value, this;
  }
  next(t = 0) {
    return t < 0 ? t = Math.max(t, this.from - this.pos) : t > 0 && (t = Math.min(t, this.to - this.pos)), this.nextInner(t, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class Go {
  constructor(t) {
    this.inner = t, this.afterBreak = true, this.value = "", this.done = false;
  }
  next(t = 0) {
    let { done: e, lineBreak: i, value: s } = this.inner.next(t);
    return e && this.afterBreak ? (this.value = "", this.afterBreak = false) : e ? (this.done = true, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = true, this.next()) : (this.value = s, this.afterBreak = false), this;
  }
  get lineBreak() {
    return false;
  }
}
typeof Symbol < "u" && (L.prototype[Symbol.iterator] = function() {
  return this.iter();
}, je.prototype[Symbol.iterator] = Uo.prototype[Symbol.iterator] = Go.prototype[Symbol.iterator] = function() {
  return this;
});
class Fh {
  constructor(t, e, i, s) {
    this.from = t, this.to = e, this.number = i, this.text = s;
  }
  get length() {
    return this.to - this.from;
  }
}
function Se(n, t, e) {
  return t = Math.max(0, Math.min(n.length, t)), [t, Math.max(t, Math.min(n.length, e))];
}
function Y(n, t, e = true, i = true) {
  return Rh(n, t, e, i);
}
function Hh(n) {
  return n >= 56320 && n < 57344;
}
function Vh(n) {
  return n >= 55296 && n < 56320;
}
function nt(n, t) {
  let e = n.charCodeAt(t);
  if (!Vh(e) || t + 1 == n.length)
    return e;
  let i = n.charCodeAt(t + 1);
  return Hh(i) ? (e - 55296 << 10) + (i - 56320) + 65536 : e;
}
function Ws(n) {
  return n <= 65535 ? String.fromCharCode(n) : (n -= 65536, String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320));
}
function St(n) {
  return n < 65536 ? 1 : 2;
}
const Jn = /\r\n?|\n/;
var tt = function(n) {
  return n[n.Simple = 0] = "Simple", n[n.TrackDel = 1] = "TrackDel", n[n.TrackBefore = 2] = "TrackBefore", n[n.TrackAfter = 3] = "TrackAfter", n;
}(tt || (tt = {}));
class Dt {
  constructor(t) {
    this.sections = t;
  }
  get length() {
    let t = 0;
    for (let e = 0; e < this.sections.length; e += 2)
      t += this.sections[e];
    return t;
  }
  get newLength() {
    let t = 0;
    for (let e = 0; e < this.sections.length; e += 2) {
      let i = this.sections[e + 1];
      t += i < 0 ? this.sections[e] : i;
    }
    return t;
  }
  get empty() {
    return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
  }
  iterGaps(t) {
    for (let e = 0, i = 0, s = 0; e < this.sections.length; ) {
      let r = this.sections[e++], o = this.sections[e++];
      o < 0 ? (t(i, s, r), s += r) : s += o, i += r;
    }
  }
  iterChangedRanges(t, e = false) {
    Qn(this, t, e);
  }
  get invertedDesc() {
    let t = [];
    for (let e = 0; e < this.sections.length; ) {
      let i = this.sections[e++], s = this.sections[e++];
      s < 0 ? t.push(i, s) : t.push(s, i);
    }
    return new Dt(t);
  }
  composeDesc(t) {
    return this.empty ? t : t.empty ? this : Yo(this, t);
  }
  mapDesc(t, e = false) {
    return t.empty ? this : _n(this, t, e);
  }
  mapPos(t, e = -1, i = tt.Simple) {
    let s = 0, r = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], h = s + l;
      if (a < 0) {
        if (h > t)
          return r + (t - s);
        r += l;
      } else {
        if (i != tt.Simple && h >= t && (i == tt.TrackDel && s < t && h > t || i == tt.TrackBefore && s < t || i == tt.TrackAfter && h > t))
          return null;
        if (h > t || h == t && e < 0 && !l)
          return t == s || e < 0 ? r : r + a;
        r += a;
      }
      s = h;
    }
    if (t > s)
      throw new RangeError(`Position ${t} is out of range for changeset of length ${s}`);
    return r;
  }
  touchesRange(t, e = t) {
    for (let i = 0, s = 0; i < this.sections.length && s <= e; ) {
      let r = this.sections[i++], o = this.sections[i++], l = s + r;
      if (o >= 0 && s <= e && l >= t)
        return s < t && l > e ? "cover" : true;
      s = l;
    }
    return false;
  }
  toString() {
    let t = "";
    for (let e = 0; e < this.sections.length; ) {
      let i = this.sections[e++], s = this.sections[e++];
      t += (t ? " " : "") + i + (s >= 0 ? ":" + s : "");
    }
    return t;
  }
  toJSON() {
    return this.sections;
  }
  static fromJSON(t) {
    if (!Array.isArray(t) || t.length % 2 || t.some((e) => typeof e != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new Dt(t);
  }
  static create(t) {
    return new Dt(t);
  }
}
class $ extends Dt {
  constructor(t, e) {
    super(t), this.inserted = e;
  }
  apply(t) {
    if (this.length != t.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return Qn(this, (e, i, s, r, o) => t = t.replace(s, s + (i - e), o), false), t;
  }
  mapDesc(t, e = false) {
    return _n(this, t, e, true);
  }
  invert(t) {
    let e = this.sections.slice(), i = [];
    for (let s = 0, r = 0; s < e.length; s += 2) {
      let o = e[s], l = e[s + 1];
      if (l >= 0) {
        e[s] = l, e[s + 1] = o;
        let a = s >> 1;
        for (; i.length < a; )
          i.push(L.empty);
        i.push(o ? t.slice(r, r + o) : L.empty);
      }
      r += o;
    }
    return new $(e, i);
  }
  compose(t) {
    return this.empty ? t : t.empty ? this : Yo(this, t, true);
  }
  map(t, e = false) {
    return t.empty ? this : _n(this, t, e, true);
  }
  iterChanges(t, e = false) {
    Qn(this, t, e);
  }
  get desc() {
    return Dt.create(this.sections);
  }
  filter(t) {
    let e = [], i = [], s = [], r = new Qe(this);
    t:
      for (let o = 0, l = 0; ; ) {
        let a = o == t.length ? 1e9 : t[o++];
        for (; l < a || l == a && r.len == 0; ) {
          if (r.done)
            break t;
          let c = Math.min(r.len, a - l);
          J(s, c, -1);
          let f = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
          J(e, c, f), f > 0 && $t(i, e, r.text), r.forward(c), l += c;
        }
        let h = t[o++];
        for (; l < h; ) {
          if (r.done)
            break t;
          let c = Math.min(r.len, h - l);
          J(e, c, -1), J(s, c, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(c), l += c;
        }
      }
    return { changes: new $(e, i), filtered: Dt.create(s) };
  }
  toJSON() {
    let t = [];
    for (let e = 0; e < this.sections.length; e += 2) {
      let i = this.sections[e], s = this.sections[e + 1];
      s < 0 ? t.push(i) : s == 0 ? t.push([i]) : t.push([i].concat(this.inserted[e >> 1].toJSON()));
    }
    return t;
  }
  static of(t, e, i) {
    let s = [], r = [], o = 0, l = null;
    function a(c = false) {
      if (!c && !s.length)
        return;
      o < e && J(s, e - o, -1);
      let f = new $(s, r);
      l = l ? l.compose(f.map(l)) : f, s = [], r = [], o = 0;
    }
    function h(c) {
      if (Array.isArray(c))
        for (let f of c)
          h(f);
      else if (c instanceof $) {
        if (c.length != e)
          throw new RangeError(`Mismatched change set length (got ${c.length}, expected ${e})`);
        a(), l = l ? l.compose(c.map(l)) : c;
      } else {
        let { from: f, to: u = f, insert: d } = c;
        if (f > u || f < 0 || u > e)
          throw new RangeError(`Invalid change range ${f} to ${u} (in doc of length ${e})`);
        let p = d ? typeof d == "string" ? L.of(d.split(i || Jn)) : d : L.empty, g = p.length;
        if (f == u && g == 0)
          return;
        f < o && a(), f > o && J(s, f - o, -1), J(s, u - f, g), $t(r, s, p), o = u;
      }
    }
    return h(t), a(!l), l;
  }
  static empty(t) {
    return new $(t ? [t, -1] : [], []);
  }
  static fromJSON(t) {
    if (!Array.isArray(t))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let e = [], i = [];
    for (let s = 0; s < t.length; s++) {
      let r = t[s];
      if (typeof r == "number")
        e.push(r, -1);
      else {
        if (!Array.isArray(r) || typeof r[0] != "number" || r.some((o, l) => l && typeof o != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (r.length == 1)
          e.push(r[0], 0);
        else {
          for (; i.length < s; )
            i.push(L.empty);
          i[s] = L.of(r.slice(1)), e.push(r[0], i[s].length);
        }
      }
    }
    return new $(e, i);
  }
  static createSet(t, e) {
    return new $(t, e);
  }
}
function J(n, t, e, i = false) {
  if (t == 0 && e <= 0)
    return;
  let s = n.length - 2;
  s >= 0 && e <= 0 && e == n[s + 1] ? n[s] += t : s >= 0 && t == 0 && n[s] == 0 ? n[s + 1] += e : i ? (n[s] += t, n[s + 1] += e) : n.push(t, e);
}
function $t(n, t, e) {
  if (e.length == 0)
    return;
  let i = t.length - 2 >> 1;
  if (i < n.length)
    n[n.length - 1] = n[n.length - 1].append(e);
  else {
    for (; n.length < i; )
      n.push(L.empty);
    n.push(e);
  }
}
function Qn(n, t, e) {
  let i = n.inserted;
  for (let s = 0, r = 0, o = 0; o < n.sections.length; ) {
    let l = n.sections[o++], a = n.sections[o++];
    if (a < 0)
      s += l, r += l;
    else {
      let h = s, c = r, f = L.empty;
      for (; h += l, c += a, a && i && (f = f.append(i[o - 2 >> 1])), !(e || o == n.sections.length || n.sections[o + 1] < 0); )
        l = n.sections[o++], a = n.sections[o++];
      t(s, h, r, c, f), s = h, r = c;
    }
  }
}
function _n(n, t, e, i = false) {
  let s = [], r = i ? [] : null, o = new Qe(n), l = new Qe(t);
  for (let a = -1; ; ) {
    if (o.done && l.len || l.done && o.len)
      throw new Error("Mismatched change set lengths");
    if (o.ins == -1 && l.ins == -1) {
      let h = Math.min(o.len, l.len);
      J(s, h, -1), o.forward(h), l.forward(h);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !e))) {
      let h = l.len;
      for (J(s, l.ins, -1); h; ) {
        let c = Math.min(o.len, h);
        o.ins >= 0 && a < o.i && o.len <= c && (J(s, 0, o.ins), r && $t(r, s, o.text), a = o.i), o.forward(c), h -= c;
      }
      l.next();
    } else if (o.ins >= 0) {
      let h = 0, c = o.len;
      for (; c; )
        if (l.ins == -1) {
          let f = Math.min(c, l.len);
          h += f, c -= f, l.forward(f);
        } else if (l.ins == 0 && l.len < c)
          c -= l.len, l.next();
        else
          break;
      J(s, h, a < o.i ? o.ins : 0), r && a < o.i && $t(r, s, o.text), a = o.i, o.forward(o.len - c);
    } else {
      if (o.done && l.done)
        return r ? $.createSet(s, r) : Dt.create(s);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function Yo(n, t, e = false) {
  let i = [], s = e ? [] : null, r = new Qe(n), o = new Qe(t);
  for (let l = false; ; ) {
    if (r.done && o.done)
      return s ? $.createSet(i, s) : Dt.create(i);
    if (r.ins == 0)
      J(i, r.len, 0, l), r.next();
    else if (o.len == 0 && !o.done)
      J(i, 0, o.ins, l), s && $t(s, i, o.text), o.next();
    else {
      if (r.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(r.len2, o.len), h = i.length;
        if (r.ins == -1) {
          let c = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          J(i, a, c, l), s && c && $t(s, i, o.text);
        } else
          o.ins == -1 ? (J(i, r.off ? 0 : r.len, a, l), s && $t(s, i, r.textBit(a))) : (J(i, r.off ? 0 : r.len, o.off ? 0 : o.ins, l), s && !o.off && $t(s, i, o.text));
        l = (r.ins > a || o.ins >= 0 && o.len > a) && (l || i.length > h), r.forward2(a), o.forward(a);
      }
    }
  }
}
class Qe {
  constructor(t) {
    this.set = t, this.i = 0, this.next();
  }
  next() {
    let { sections: t } = this.set;
    this.i < t.length ? (this.len = t[this.i++], this.ins = t[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: t } = this.set, e = this.i - 2 >> 1;
    return e >= t.length ? L.empty : t[e];
  }
  textBit(t) {
    let { inserted: e } = this.set, i = this.i - 2 >> 1;
    return i >= e.length && !t ? L.empty : e[i].slice(this.off, t == null ? void 0 : this.off + t);
  }
  forward(t) {
    t == this.len ? this.next() : (this.len -= t, this.off += t);
  }
  forward2(t) {
    this.ins == -1 ? this.forward(t) : t == this.ins ? this.next() : (this.ins -= t, this.off += t);
  }
}
class ee {
  constructor(t, e, i) {
    this.from = t, this.to = e, this.flags = i;
  }
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  get empty() {
    return this.from == this.to;
  }
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  get bidiLevel() {
    let t = this.flags & 7;
    return t == 7 ? null : t;
  }
  get goalColumn() {
    let t = this.flags >> 6;
    return t == 16777215 ? void 0 : t;
  }
  map(t, e = -1) {
    let i, s;
    return this.empty ? i = s = t.mapPos(this.from, e) : (i = t.mapPos(this.from, 1), s = t.mapPos(this.to, -1)), i == this.from && s == this.to ? this : new ee(i, s, this.flags);
  }
  extend(t, e = t) {
    if (t <= this.anchor && e >= this.anchor)
      return b.range(t, e);
    let i = Math.abs(t - this.anchor) > Math.abs(e - this.anchor) ? t : e;
    return b.range(this.anchor, i);
  }
  eq(t, e = false) {
    return this.anchor == t.anchor && this.head == t.head && (!e || !this.empty || this.assoc == t.assoc);
  }
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  static fromJSON(t) {
    if (!t || typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return b.range(t.anchor, t.head);
  }
  static create(t, e, i) {
    return new ee(t, e, i);
  }
}
class b {
  constructor(t, e) {
    this.ranges = t, this.mainIndex = e;
  }
  map(t, e = -1) {
    return t.empty ? this : b.create(this.ranges.map((i) => i.map(t, e)), this.mainIndex);
  }
  eq(t, e = false) {
    if (this.ranges.length != t.ranges.length || this.mainIndex != t.mainIndex)
      return false;
    for (let i = 0; i < this.ranges.length; i++)
      if (!this.ranges[i].eq(t.ranges[i], e))
        return false;
    return true;
  }
  get main() {
    return this.ranges[this.mainIndex];
  }
  asSingle() {
    return this.ranges.length == 1 ? this : new b([this.main], 0);
  }
  addRange(t, e = true) {
    return b.create([t].concat(this.ranges), e ? 0 : this.mainIndex + 1);
  }
  replaceRange(t, e = this.mainIndex) {
    let i = this.ranges.slice();
    return i[e] = t, b.create(i, this.mainIndex);
  }
  toJSON() {
    return { ranges: this.ranges.map((t) => t.toJSON()), main: this.mainIndex };
  }
  static fromJSON(t) {
    if (!t || !Array.isArray(t.ranges) || typeof t.main != "number" || t.main >= t.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new b(t.ranges.map((e) => ee.fromJSON(e)), t.main);
  }
  static single(t, e = t) {
    return new b([b.range(t, e)], 0);
  }
  static create(t, e = 0) {
    if (t.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let i = 0, s = 0; s < t.length; s++) {
      let r = t[s];
      if (r.empty ? r.from <= i : r.from < i)
        return b.normalized(t.slice(), e);
      i = r.to;
    }
    return new b(t, e);
  }
  static cursor(t, e = 0, i, s) {
    return ee.create(t, t, (e == 0 ? 0 : e < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (s ?? 16777215) << 6);
  }
  static range(t, e, i, s) {
    let r = (i ?? 16777215) << 6 | (s == null ? 7 : Math.min(6, s));
    return e < t ? ee.create(e, t, 48 | r) : ee.create(t, e, (e > t ? 8 : 0) | r);
  }
  static normalized(t, e = 0) {
    let i = t[e];
    t.sort((s, r) => s.from - r.from), e = t.indexOf(i);
    for (let s = 1; s < t.length; s++) {
      let r = t[s], o = t[s - 1];
      if (r.empty ? r.from <= o.to : r.from < o.to) {
        let l = o.from, a = Math.max(r.to, o.to);
        s <= e && e--, t.splice(--s, 2, r.anchor > r.head ? b.range(a, l) : b.range(l, a));
      }
    }
    return new b(t, e);
  }
}
function Xo(n, t) {
  for (let e of n.ranges)
    if (e.to > t)
      throw new RangeError("Selection points outside of document");
}
let zs = 0;
class S {
  constructor(t, e, i, s, r) {
    this.combine = t, this.compareInput = e, this.compare = i, this.isStatic = s, this.id = zs++, this.default = t([]), this.extensions = typeof r == "function" ? r(this) : r;
  }
  get reader() {
    return this;
  }
  static define(t = {}) {
    return new S(t.combine || ((e) => e), t.compareInput || ((e, i) => e === i), t.compare || (t.combine ? (e, i) => e === i : qs), !!t.static, t.enables);
  }
  of(t) {
    return new qi([], this, 0, t);
  }
  compute(t, e) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new qi(t, this, 1, e);
  }
  computeN(t, e) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new qi(t, this, 2, e);
  }
  from(t, e) {
    return e || (e = (i) => i), this.compute([t], (i) => e(i.field(t)));
  }
}
function qs(n, t) {
  return n == t || n.length == t.length && n.every((e, i) => e === t[i]);
}
class qi {
  constructor(t, e, i, s) {
    this.dependencies = t, this.facet = e, this.type = i, this.value = s, this.id = zs++;
  }
  dynamicSlot(t) {
    var e;
    let i = this.value, s = this.facet.compareInput, r = this.id, o = t[r] >> 1, l = this.type == 2, a = false, h = false, c = [];
    for (let f of this.dependencies)
      f == "doc" ? a = true : f == "selection" ? h = true : ((e = t[f.id]) !== null && e !== void 0 ? e : 1) & 1 || c.push(t[f.id]);
    return { create(f) {
      return f.values[o] = i(f), 1;
    }, update(f, u) {
      if (a && u.docChanged || h && (u.docChanged || u.selection) || Zn(f, c)) {
        let d = i(f);
        if (l ? !xr(d, f.values[o], s) : !s(d, f.values[o]))
          return f.values[o] = d, 1;
      }
      return 0;
    }, reconfigure: (f, u) => {
      let d, p = u.config.address[r];
      if (p != null) {
        let g = Qi(u, p);
        if (this.dependencies.every((m) => m instanceof S ? u.facet(m) === f.facet(m) : m instanceof X ? u.field(m, false) == f.field(m, false) : true) || (l ? xr(d = i(f), g, s) : s(d = i(f), g)))
          return f.values[o] = g, 0;
      } else
        d = i(f);
      return f.values[o] = d, 1;
    } };
  }
}
function xr(n, t, e) {
  if (n.length != t.length)
    return false;
  for (let i = 0; i < n.length; i++)
    if (!e(n[i], t[i]))
      return false;
  return true;
}
function Zn(n, t) {
  let e = false;
  for (let i of t)
    Ue(n, i) & 1 && (e = true);
  return e;
}
function Wh(n, t, e) {
  let i = e.map((a) => n[a.id]), s = e.map((a) => a.type), r = i.filter((a) => !(a & 1)), o = n[t.id] >> 1;
  function l(a) {
    let h = [];
    for (let c = 0; c < i.length; c++) {
      let f = Qi(a, i[c]);
      if (s[c] == 2)
        for (let u of f)
          h.push(u);
      else
        h.push(f);
    }
    return t.combine(h);
  }
  return { create(a) {
    for (let h of i)
      Ue(a, h);
    return a.values[o] = l(a), 1;
  }, update(a, h) {
    if (!Zn(a, r))
      return 0;
    let c = l(a);
    return t.compare(c, a.values[o]) ? 0 : (a.values[o] = c, 1);
  }, reconfigure(a, h) {
    let c = Zn(a, i), f = h.config.facets[t.id], u = h.facet(t);
    if (f && !c && qs(e, f))
      return a.values[o] = u, 0;
    let d = l(a);
    return t.compare(d, u) ? (a.values[o] = u, 0) : (a.values[o] = d, 1);
  } };
}
const vi = S.define({ static: true });
class X {
  constructor(t, e, i, s, r) {
    this.id = t, this.createF = e, this.updateF = i, this.compareF = s, this.spec = r, this.provides = void 0;
  }
  static define(t) {
    let e = new X(zs++, t.create, t.update, t.compare || ((i, s) => i === s), t);
    return t.provide && (e.provides = t.provide(e)), e;
  }
  create(t) {
    let e = t.facet(vi).find((i) => i.field == this);
    return ((e == null ? void 0 : e.create) || this.createF)(t);
  }
  slot(t) {
    let e = t[this.id] >> 1;
    return { create: (i) => (i.values[e] = this.create(i), 1), update: (i, s) => {
      let r = i.values[e], o = this.updateF(r, s);
      return this.compareF(r, o) ? 0 : (i.values[e] = o, 1);
    }, reconfigure: (i, s) => {
      let r = i.facet(vi), o = s.facet(vi), l;
      return (l = r.find((a) => a.field == this)) && l != o.find((a) => a.field == this) ? (i.values[e] = l.create(i), 1) : s.config.address[this.id] != null ? (i.values[e] = s.field(this), 0) : (i.values[e] = this.create(i), 1);
    } };
  }
  init(t) {
    return [this, vi.of({ field: this, create: t })];
  }
  get extension() {
    return this;
  }
}
const Zt = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function Pe(n) {
  return (t) => new Jo(t, n);
}
const he = { highest: Pe(Zt.highest), high: Pe(Zt.high), default: Pe(Zt.default), low: Pe(Zt.low), lowest: Pe(Zt.lowest) };
class Jo {
  constructor(t, e) {
    this.inner = t, this.prec = e;
  }
}
class yn {
  of(t) {
    return new ts(this, t);
  }
  reconfigure(t) {
    return yn.reconfigure.of({ compartment: this, extension: t });
  }
  get(t) {
    return t.config.compartments.get(this);
  }
}
class ts {
  constructor(t, e) {
    this.compartment = t, this.inner = e;
  }
}
class Ji {
  constructor(t, e, i, s, r, o) {
    for (this.base = t, this.compartments = e, this.dynamicSlots = i, this.address = s, this.staticValues = r, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < i.length; )
      this.statusTemplate.push(0);
  }
  staticFacet(t) {
    let e = this.address[t.id];
    return e == null ? t.default : this.staticValues[e >> 1];
  }
  static resolve(t, e, i) {
    let s = [], r = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let u of zh(t, e, o))
      u instanceof X ? s.push(u) : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
    let l = /* @__PURE__ */ Object.create(null), a = [], h = [];
    for (let u of s)
      l[u.id] = h.length << 1, h.push((d) => u.slot(d));
    let c = i == null ? void 0 : i.config.facets;
    for (let u in r) {
      let d = r[u], p = d[0].facet, g = c && c[u] || [];
      if (d.every((m) => m.type == 0))
        if (l[p.id] = a.length << 1 | 1, qs(g, d))
          a.push(i.facet(p));
        else {
          let m = p.combine(d.map((y) => y.value));
          a.push(i && p.compare(m, i.facet(p)) ? i.facet(p) : m);
        }
      else {
        for (let m of d)
          m.type == 0 ? (l[m.id] = a.length << 1 | 1, a.push(m.value)) : (l[m.id] = h.length << 1, h.push((y) => m.dynamicSlot(y)));
        l[p.id] = h.length << 1, h.push((m) => Wh(m, p, d));
      }
    }
    let f = h.map((u) => u(l));
    return new Ji(t, o, f, l, a, r);
  }
}
function zh(n, t, e) {
  let i = [[], [], [], [], []], s = /* @__PURE__ */ new Map();
  function r(o, l) {
    let a = s.get(o);
    if (a != null) {
      if (a <= l)
        return;
      let h = i[a].indexOf(o);
      h > -1 && i[a].splice(h, 1), o instanceof ts && e.delete(o.compartment);
    }
    if (s.set(o, l), Array.isArray(o))
      for (let h of o)
        r(h, l);
    else if (o instanceof ts) {
      if (e.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let h = t.get(o.compartment) || o.inner;
      e.set(o.compartment, h), r(h, l);
    } else if (o instanceof Jo)
      r(o.inner, o.prec);
    else if (o instanceof X)
      i[l].push(o), o.provides && r(o.provides, l);
    else if (o instanceof qi)
      i[l].push(o), o.facet.extensions && r(o.facet.extensions, Zt.default);
    else {
      let h = o.extension;
      if (!h)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      r(h, l);
    }
  }
  return r(n, Zt.default), i.reduce((o, l) => o.concat(l));
}
function Ue(n, t) {
  if (t & 1)
    return 2;
  let e = t >> 1, i = n.status[e];
  if (i == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2)
    return i;
  n.status[e] = 4;
  let s = n.computeSlot(n, n.config.dynamicSlots[e]);
  return n.status[e] = 2 | s;
}
function Qi(n, t) {
  return t & 1 ? n.config.staticValues[t >> 1] : n.values[t >> 1];
}
const Qo = S.define(), es = S.define({ combine: (n) => n.some((t) => t), static: true }), _o = S.define({ combine: (n) => n.length ? n[0] : void 0, static: true }), Zo = S.define(), tl = S.define(), el = S.define(), il = S.define({ combine: (n) => n.length ? n[0] : false });
class Ht {
  constructor(t, e) {
    this.type = t, this.value = e;
  }
  static define() {
    return new qh();
  }
}
class qh {
  of(t) {
    return new Ht(this, t);
  }
}
class $h {
  constructor(t) {
    this.map = t;
  }
  of(t) {
    return new O(this, t);
  }
}
class O {
  constructor(t, e) {
    this.type = t, this.value = e;
  }
  map(t) {
    let e = this.type.map(this.value, t);
    return e === void 0 ? void 0 : e == this.value ? this : new O(this.type, e);
  }
  is(t) {
    return this.type == t;
  }
  static define(t = {}) {
    return new $h(t.map || ((e) => e));
  }
  static mapEffects(t, e) {
    if (!t.length)
      return t;
    let i = [];
    for (let s of t) {
      let r = s.map(e);
      r && i.push(r);
    }
    return i;
  }
}
O.reconfigure = O.define();
O.appendConfig = O.define();
class K {
  constructor(t, e, i, s, r, o) {
    this.startState = t, this.changes = e, this.selection = i, this.effects = s, this.annotations = r, this.scrollIntoView = o, this._doc = null, this._state = null, i && Xo(i, e.newLength), r.some((l) => l.type == K.time) || (this.annotations = r.concat(K.time.of(Date.now())));
  }
  static create(t, e, i, s, r, o) {
    return new K(t, e, i, s, r, o);
  }
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  annotation(t) {
    for (let e of this.annotations)
      if (e.type == t)
        return e.value;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  isUserEvent(t) {
    let e = this.annotation(K.userEvent);
    return !!(e && (e == t || e.length > t.length && e.slice(0, t.length) == t && e[t.length] == "."));
  }
}
K.time = Ht.define();
K.userEvent = Ht.define();
K.addToHistory = Ht.define();
K.remote = Ht.define();
function Kh(n, t) {
  let e = [];
  for (let i = 0, s = 0; ; ) {
    let r, o;
    if (i < n.length && (s == t.length || t[s] >= n[i]))
      r = n[i++], o = n[i++];
    else if (s < t.length)
      r = t[s++], o = t[s++];
    else
      return e;
    !e.length || e[e.length - 1] < r ? e.push(r, o) : e[e.length - 1] < o && (e[e.length - 1] = o);
  }
}
function nl(n, t, e) {
  var i;
  let s, r, o;
  return e ? (s = t.changes, r = $.empty(t.changes.length), o = n.changes.compose(t.changes)) : (s = t.changes.map(n.changes), r = n.changes.mapDesc(t.changes, true), o = n.changes.compose(s)), { changes: o, selection: t.selection ? t.selection.map(r) : (i = n.selection) === null || i === void 0 ? void 0 : i.map(s), effects: O.mapEffects(n.effects, s).concat(O.mapEffects(t.effects, r)), annotations: n.annotations.length ? n.annotations.concat(t.annotations) : t.annotations, scrollIntoView: n.scrollIntoView || t.scrollIntoView };
}
function is(n, t, e) {
  let i = t.selection, s = ye(t.annotations);
  return t.userEvent && (s = s.concat(K.userEvent.of(t.userEvent))), { changes: t.changes instanceof $ ? t.changes : $.of(t.changes || [], e, n.facet(_o)), selection: i && (i instanceof b ? i : b.single(i.anchor, i.head)), effects: ye(t.effects), annotations: s, scrollIntoView: !!t.scrollIntoView };
}
function sl(n, t, e) {
  let i = is(n, t.length ? t[0] : {}, n.doc.length);
  t.length && t[0].filter === false && (e = false);
  for (let r = 1; r < t.length; r++) {
    t[r].filter === false && (e = false);
    let o = !!t[r].sequential;
    i = nl(i, is(n, t[r], o ? i.changes.newLength : n.doc.length), o);
  }
  let s = K.create(n, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return Uh(e ? jh(s) : s);
}
function jh(n) {
  let t = n.startState, e = true;
  for (let s of t.facet(Zo)) {
    let r = s(n);
    if (r === false) {
      e = false;
      break;
    }
    Array.isArray(r) && (e = e === true ? r : Kh(e, r));
  }
  if (e !== true) {
    let s, r;
    if (e === false)
      r = n.changes.invertedDesc, s = $.empty(t.doc.length);
    else {
      let o = n.changes.filter(e);
      s = o.changes, r = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    n = K.create(t, s, n.selection && n.selection.map(r), O.mapEffects(n.effects, r), n.annotations, n.scrollIntoView);
  }
  let i = t.facet(tl);
  for (let s = i.length - 1; s >= 0; s--) {
    let r = i[s](n);
    r instanceof K ? n = r : Array.isArray(r) && r.length == 1 && r[0] instanceof K ? n = r[0] : n = sl(t, ye(r), false);
  }
  return n;
}
function Uh(n) {
  let t = n.startState, e = t.facet(el), i = n;
  for (let s = e.length - 1; s >= 0; s--) {
    let r = e[s](n);
    r && Object.keys(r).length && (i = nl(i, is(t, r, n.changes.newLength), true));
  }
  return i == n ? n : K.create(t, n.changes, n.selection, i.effects, i.annotations, i.scrollIntoView);
}
const Gh = [];
function ye(n) {
  return n == null ? Gh : Array.isArray(n) ? n : [n];
}
var V = function(n) {
  return n[n.Word = 0] = "Word", n[n.Space = 1] = "Space", n[n.Other = 2] = "Other", n;
}(V || (V = {}));
const Yh = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let ns;
try {
  ns = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function Xh(n) {
  if (ns)
    return ns.test(n);
  for (let t = 0; t < n.length; t++) {
    let e = n[t];
    if (/\w/.test(e) || e > "\x80" && (e.toUpperCase() != e.toLowerCase() || Yh.test(e)))
      return true;
  }
  return false;
}
function Jh(n) {
  return (t) => {
    if (!/\S/.test(t))
      return V.Space;
    if (Xh(t))
      return V.Word;
    for (let e = 0; e < n.length; e++)
      if (t.indexOf(n[e]) > -1)
        return V.Word;
    return V.Other;
  };
}
class R {
  constructor(t, e, i, s, r, o) {
    this.config = t, this.doc = e, this.selection = i, this.values = s, this.status = t.statusTemplate.slice(), this.computeSlot = r, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      Ue(this, l << 1);
    this.computeSlot = null;
  }
  field(t, e = true) {
    let i = this.config.address[t.id];
    if (i == null) {
      if (e)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return Ue(this, i), Qi(this, i);
  }
  update(...t) {
    return sl(this, t, true);
  }
  applyTransaction(t) {
    let e = this.config, { base: i, compartments: s } = e;
    for (let l of t.effects)
      l.is(yn.reconfigure) ? (e && (s = /* @__PURE__ */ new Map(), e.compartments.forEach((a, h) => s.set(h, a)), e = null), s.set(l.value.compartment, l.value.extension)) : l.is(O.reconfigure) ? (e = null, i = l.value) : l.is(O.appendConfig) && (e = null, i = ye(i).concat(l.value));
    let r;
    e ? r = t.startState.values.slice() : (e = Ji.resolve(i, s, this), r = new R(e, this.doc, this.selection, e.dynamicSlots.map(() => null), (a, h) => h.reconfigure(a, this), null).values);
    let o = t.startState.facet(es) ? t.newSelection : t.newSelection.asSingle();
    new R(e, t.newDoc, o, r, (l, a) => a.update(l, t), t);
  }
  replaceSelection(t) {
    return typeof t == "string" && (t = this.toText(t)), this.changeByRange((e) => ({ changes: { from: e.from, to: e.to, insert: t }, range: b.cursor(e.from + t.length) }));
  }
  changeByRange(t) {
    let e = this.selection, i = t(e.ranges[0]), s = this.changes(i.changes), r = [i.range], o = ye(i.effects);
    for (let l = 1; l < e.ranges.length; l++) {
      let a = t(e.ranges[l]), h = this.changes(a.changes), c = h.map(s);
      for (let u = 0; u < l; u++)
        r[u] = r[u].map(c);
      let f = s.mapDesc(h, true);
      r.push(a.range.map(f)), s = s.compose(c), o = O.mapEffects(o, c).concat(O.mapEffects(ye(a.effects), f));
    }
    return { changes: s, selection: b.create(r, e.mainIndex), effects: o };
  }
  changes(t = []) {
    return t instanceof $ ? t : $.of(t, this.doc.length, this.facet(R.lineSeparator));
  }
  toText(t) {
    return L.of(t.split(this.facet(R.lineSeparator) || Jn));
  }
  sliceDoc(t = 0, e = this.doc.length) {
    return this.doc.sliceString(t, e, this.lineBreak);
  }
  facet(t) {
    let e = this.config.address[t.id];
    return e == null ? t.default : (Ue(this, e), Qi(this, e));
  }
  toJSON(t) {
    let e = { doc: this.sliceDoc(), selection: this.selection.toJSON() };
    if (t)
      for (let i in t) {
        let s = t[i];
        s instanceof X && this.config.address[s.id] != null && (e[i] = s.spec.toJSON(this.field(t[i]), this));
      }
    return e;
  }
  static fromJSON(t, e = {}, i) {
    if (!t || typeof t.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let s = [];
    if (i) {
      for (let r in i)
        if (Object.prototype.hasOwnProperty.call(t, r)) {
          let o = i[r], l = t[r];
          s.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return R.create({ doc: t.doc, selection: b.fromJSON(t.selection), extensions: e.extensions ? s.concat([e.extensions]) : s });
  }
  static create(t = {}) {
    let e = Ji.resolve(t.extensions || [], /* @__PURE__ */ new Map()), i = t.doc instanceof L ? t.doc : L.of((t.doc || "").split(e.staticFacet(R.lineSeparator) || Jn)), s = t.selection ? t.selection instanceof b ? t.selection : b.single(t.selection.anchor, t.selection.head) : b.single(0);
    return Xo(s, i.length), e.staticFacet(es) || (s = s.asSingle()), new R(e, i, s, e.dynamicSlots.map(() => null), (r, o) => o.create(r), null);
  }
  get tabSize() {
    return this.facet(R.tabSize);
  }
  get lineBreak() {
    return this.facet(R.lineSeparator) || `
`;
  }
  get readOnly() {
    return this.facet(il);
  }
  phrase(t, ...e) {
    for (let i of this.facet(R.phrases))
      if (Object.prototype.hasOwnProperty.call(i, t)) {
        t = i[t];
        break;
      }
    return e.length && (t = t.replace(/\$(\$|\d*)/g, (i, s) => {
      if (s == "$")
        return "$";
      let r = +(s || 1);
      return !r || r > e.length ? i : e[r - 1];
    })), t;
  }
  languageDataAt(t, e, i = -1) {
    let s = [];
    for (let r of this.facet(Qo))
      for (let o of r(this, e, i))
        Object.prototype.hasOwnProperty.call(o, t) && s.push(o[t]);
    return s;
  }
  charCategorizer(t) {
    return Jh(this.languageDataAt("wordChars", t).join(""));
  }
  wordAt(t) {
    let { text: e, from: i, length: s } = this.doc.lineAt(t), r = this.charCategorizer(t), o = t - i, l = t - i;
    for (; o > 0; ) {
      let a = Y(e, o, false);
      if (r(e.slice(a, o)) != V.Word)
        break;
      o = a;
    }
    for (; l < s; ) {
      let a = Y(e, l);
      if (r(e.slice(l, a)) != V.Word)
        break;
      l = a;
    }
    return o == l ? null : b.range(o + i, l + i);
  }
}
R.allowMultipleSelections = es;
R.tabSize = S.define({ combine: (n) => n.length ? n[0] : 4 });
R.lineSeparator = _o;
R.readOnly = il;
R.phrases = S.define({ compare(n, t) {
  let e = Object.keys(n), i = Object.keys(t);
  return e.length == i.length && e.every((s) => n[s] == t[s]);
} });
R.languageData = Qo;
R.changeFilter = Zo;
R.transactionFilter = tl;
R.transactionExtender = el;
yn.reconfigure = O.define();
function Tt(n, t, e = {}) {
  let i = {};
  for (let s of n)
    for (let r of Object.keys(s)) {
      let o = s[r], l = i[r];
      if (l === void 0)
        i[r] = o;
      else if (!(l === o || o === void 0))
        if (Object.hasOwnProperty.call(e, r))
          i[r] = e[r](l, o);
        else
          throw new Error("Config merge conflict for field " + r);
    }
  for (let s in t)
    i[s] === void 0 && (i[s] = t[s]);
  return i;
}
class se {
  eq(t) {
    return this == t;
  }
  range(t, e = t) {
    return _e.create(t, e, this);
  }
}
se.prototype.startSide = se.prototype.endSide = 0;
se.prototype.point = false;
se.prototype.mapMode = tt.TrackDel;
class _e {
  constructor(t, e, i) {
    this.from = t, this.to = e, this.value = i;
  }
  static create(t, e, i) {
    return new _e(t, e, i);
  }
}
function ss(n, t) {
  return n.from - t.from || n.value.startSide - t.value.startSide;
}
class $s {
  constructor(t, e, i, s) {
    this.from = t, this.to = e, this.value = i, this.maxPoint = s;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  findIndex(t, e, i, s = 0) {
    let r = i ? this.to : this.from;
    for (let o = s, l = r.length; ; ) {
      if (o == l)
        return o;
      let a = o + l >> 1, h = r[a] - t || (i ? this.value[a].endSide : this.value[a].startSide) - e;
      if (a == o)
        return h >= 0 ? o : l;
      h >= 0 ? l = a : o = a + 1;
    }
  }
  between(t, e, i, s) {
    for (let r = this.findIndex(e, -1e9, true), o = this.findIndex(i, 1e9, false, r); r < o; r++)
      if (s(this.from[r] + t, this.to[r] + t, this.value[r]) === false)
        return false;
  }
  map(t, e) {
    let i = [], s = [], r = [], o = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let h = this.value[a], c = this.from[a] + t, f = this.to[a] + t, u, d;
      if (c == f) {
        let p = e.mapPos(c, h.startSide, h.mapMode);
        if (p == null || (u = d = p, h.startSide != h.endSide && (d = e.mapPos(c, h.endSide), d < u)))
          continue;
      } else if (u = e.mapPos(c, h.startSide), d = e.mapPos(f, h.endSide), u > d || u == d && h.startSide > 0 && h.endSide <= 0)
        continue;
      (d - u || h.endSide - h.startSide) < 0 || (o < 0 && (o = u), h.point && (l = Math.max(l, d - u)), i.push(h), s.push(u - o), r.push(d - o));
    }
    return { mapped: i.length ? new $s(s, r, i, l) : null, pos: o };
  }
}
class B {
  constructor(t, e, i, s) {
    this.chunkPos = t, this.chunk = e, this.nextLayer = i, this.maxPoint = s;
  }
  static create(t, e, i, s) {
    return new B(t, e, i, s);
  }
  get length() {
    let t = this.chunk.length - 1;
    return t < 0 ? 0 : Math.max(this.chunkEnd(t), this.nextLayer.length);
  }
  get size() {
    if (this.isEmpty)
      return 0;
    let t = this.nextLayer.size;
    for (let e of this.chunk)
      t += e.value.length;
    return t;
  }
  chunkEnd(t) {
    return this.chunkPos[t] + this.chunk[t].length;
  }
  update(t) {
    let { add: e = [], sort: i = false, filterFrom: s = 0, filterTo: r = this.length } = t, o = t.filter;
    if (e.length == 0 && !o)
      return this;
    if (i && (e = e.slice().sort(ss)), this.isEmpty)
      return e.length ? B.of(e) : this;
    let l = new rl(this, null, -1).goto(0), a = 0, h = [], c = new It();
    for (; l.value || a < e.length; )
      if (a < e.length && (l.from - e[a].from || l.startSide - e[a].value.startSide) >= 0) {
        let f = e[a++];
        c.addInner(f.from, f.to, f.value) || h.push(f);
      } else
        l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == e.length || this.chunkEnd(l.chunkIndex) < e[a].from) && (!o || s > this.chunkEnd(l.chunkIndex) || r < this.chunkPos[l.chunkIndex]) && c.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || s > l.to || r < l.from || o(l.from, l.to, l.value)) && (c.addInner(l.from, l.to, l.value) || h.push(_e.create(l.from, l.to, l.value))), l.next());
    return c.finishInner(this.nextLayer.isEmpty && !h.length ? B.empty : this.nextLayer.update({ add: h, filter: o, filterFrom: s, filterTo: r }));
  }
  map(t) {
    if (t.empty || this.isEmpty)
      return this;
    let e = [], i = [], s = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o], a = this.chunk[o], h = t.touchesRange(l, l + a.length);
      if (h === false)
        s = Math.max(s, a.maxPoint), e.push(a), i.push(t.mapPos(l));
      else if (h === true) {
        let { mapped: c, pos: f } = a.map(l, t);
        c && (s = Math.max(s, c.maxPoint), e.push(c), i.push(f));
      }
    }
    let r = this.nextLayer.map(t);
    return e.length == 0 ? r : new B(i, e, r || B.empty, s);
  }
  between(t, e, i) {
    if (!this.isEmpty) {
      for (let s = 0; s < this.chunk.length; s++) {
        let r = this.chunkPos[s], o = this.chunk[s];
        if (e >= r && t <= r + o.length && o.between(r, t - r, e - r, i) === false)
          return;
      }
      this.nextLayer.between(t, e, i);
    }
  }
  iter(t = 0) {
    return Ze.from([this]).goto(t);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(t, e = 0) {
    return Ze.from(t).goto(e);
  }
  static compare(t, e, i, s, r = -1) {
    let o = t.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), l = e.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= r), a = wr(o, l, i), h = new Ie(o, a, r), c = new Ie(l, a, r);
    i.iterGaps((f, u, d) => vr(h, f, c, u, d, s)), i.empty && i.length == 0 && vr(h, 0, c, 0, 0, s);
  }
  static eq(t, e, i = 0, s) {
    s == null && (s = 1e9 - 1);
    let r = t.filter((c) => !c.isEmpty && e.indexOf(c) < 0), o = e.filter((c) => !c.isEmpty && t.indexOf(c) < 0);
    if (r.length != o.length)
      return false;
    if (!r.length)
      return true;
    let l = wr(r, o), a = new Ie(r, l, 0).goto(i), h = new Ie(o, l, 0).goto(i);
    for (; ; ) {
      if (a.to != h.to || !rs(a.active, h.active) || a.point && (!h.point || !a.point.eq(h.point)))
        return false;
      if (a.to > s)
        return true;
      a.next(), h.next();
    }
  }
  static spans(t, e, i, s, r = -1) {
    let o = new Ie(t, null, r).goto(e), l = e, a = o.openStart;
    for (; ; ) {
      let h = Math.min(o.to, i);
      if (o.point) {
        let c = o.activeForPoint(o.to), f = o.pointFrom < e ? c.length + 1 : o.point.startSide < 0 ? c.length : Math.min(c.length, a);
        s.point(l, h, o.point, c, f, o.pointRank), a = Math.min(o.openEnd(h), c.length);
      } else
        h > l && (s.span(l, h, o.active, a), a = o.openEnd(h));
      if (o.to > i)
        return a + (o.point && o.to > i ? 1 : 0);
      l = o.to, o.next();
    }
  }
  static of(t, e = false) {
    let i = new It();
    for (let s of t instanceof _e ? [t] : e ? Qh(t) : t)
      i.add(s.from, s.to, s.value);
    return i.finish();
  }
  static join(t) {
    if (!t.length)
      return B.empty;
    let e = t[t.length - 1];
    for (let i = t.length - 2; i >= 0; i--)
      for (let s = t[i]; s != B.empty; s = s.nextLayer)
        e = new B(s.chunkPos, s.chunk, e, Math.max(s.maxPoint, e.maxPoint));
    return e;
  }
}
B.empty = new B([], [], null, -1);
function Qh(n) {
  if (n.length > 1)
    for (let t = n[0], e = 1; e < n.length; e++) {
      let i = n[e];
      if (ss(t, i) > 0)
        return n.slice().sort(ss);
      t = i;
    }
  return n;
}
B.empty.nextLayer = B.empty;
class It {
  finishChunk(t) {
    this.chunks.push(new $s(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, t && (this.from = [], this.to = [], this.value = []);
  }
  constructor() {
    this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
  }
  add(t, e, i) {
    this.addInner(t, e, i) || (this.nextLayer || (this.nextLayer = new It())).add(t, e, i);
  }
  addInner(t, e, i) {
    let s = t - this.lastTo || i.startSide - this.last.endSide;
    if (s <= 0 && (t - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return s < 0 ? false : (this.from.length == 250 && this.finishChunk(true), this.chunkStart < 0 && (this.chunkStart = t), this.from.push(t - this.chunkStart), this.to.push(e - this.chunkStart), this.last = i, this.lastFrom = t, this.lastTo = e, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, e - t)), true);
  }
  addChunk(t, e) {
    if ((t - this.lastTo || e.value[0].startSide - this.last.endSide) < 0)
      return false;
    this.from.length && this.finishChunk(true), this.setMaxPoint = Math.max(this.setMaxPoint, e.maxPoint), this.chunks.push(e), this.chunkPos.push(t);
    let i = e.value.length - 1;
    return this.last = e.value[i], this.lastFrom = e.from[i] + t, this.lastTo = e.to[i] + t, true;
  }
  finish() {
    return this.finishInner(B.empty);
  }
  finishInner(t) {
    if (this.from.length && this.finishChunk(false), this.chunks.length == 0)
      return t;
    let e = B.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(t) : t, this.setMaxPoint);
    return this.from = null, e;
  }
}
function wr(n, t, e) {
  let i = /* @__PURE__ */ new Map();
  for (let r of n)
    for (let o = 0; o < r.chunk.length; o++)
      r.chunk[o].maxPoint <= 0 && i.set(r.chunk[o], r.chunkPos[o]);
  let s = /* @__PURE__ */ new Set();
  for (let r of t)
    for (let o = 0; o < r.chunk.length; o++) {
      let l = i.get(r.chunk[o]);
      l != null && (e ? e.mapPos(l) : l) == r.chunkPos[o] && !(e == null ? void 0 : e.touchesRange(l, l + r.chunk[o].length)) && s.add(r.chunk[o]);
    }
  return s;
}
class rl {
  constructor(t, e, i, s = 0) {
    this.layer = t, this.skip = e, this.minPoint = i, this.rank = s;
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(t, e = -1e9) {
    return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(t, e, false), this;
  }
  gotoInner(t, e, i) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let s = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(s) || this.layer.chunkEnd(this.chunkIndex) < t || s.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, i = false;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let s = this.layer.chunk[this.chunkIndex].findIndex(t - this.layer.chunkPos[this.chunkIndex], e, true);
      (!i || this.rangeIndex < s) && this.setRangeIndex(s);
    }
    this.next();
  }
  forward(t, e) {
    (this.to - t || this.endSide - e) < 0 && this.gotoInner(t, e, true);
  }
  next() {
    for (; ; )
      if (this.chunkIndex == this.layer.chunk.length) {
        this.from = this.to = 1e9, this.value = null;
        break;
      } else {
        let t = this.layer.chunkPos[this.chunkIndex], e = this.layer.chunk[this.chunkIndex], i = t + e.from[this.rangeIndex];
        if (this.from = i, this.to = t + e.to[this.rangeIndex], this.value = e.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
          break;
      }
  }
  setRangeIndex(t) {
    if (t == this.layer.chunk[this.chunkIndex].value.length) {
      if (this.chunkIndex++, this.skip)
        for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]); )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else
      this.rangeIndex = t;
  }
  nextChunk() {
    this.chunkIndex++, this.rangeIndex = 0, this.next();
  }
  compare(t) {
    return this.from - t.from || this.startSide - t.startSide || this.rank - t.rank || this.to - t.to || this.endSide - t.endSide;
  }
}
class Ze {
  constructor(t) {
    this.heap = t;
  }
  static from(t, e = null, i = -1) {
    let s = [];
    for (let r = 0; r < t.length; r++)
      for (let o = t[r]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= i && s.push(new rl(o, e, i, r));
    return s.length == 1 ? s[0] : new Ze(s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(t, e = -1e9) {
    for (let i of this.heap)
      i.goto(t, e);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Tn(this.heap, i);
    return this.next(), this;
  }
  forward(t, e) {
    for (let i of this.heap)
      i.forward(t, e);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Tn(this.heap, i);
    (this.to - t || this.value.endSide - e) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let t = this.heap[0];
      this.from = t.from, this.to = t.to, this.value = t.value, this.rank = t.rank, t.value && t.next(), Tn(this.heap, 0);
    }
  }
}
function Tn(n, t) {
  for (let e = n[t]; ; ) {
    let i = (t << 1) + 1;
    if (i >= n.length)
      break;
    let s = n[i];
    if (i + 1 < n.length && s.compare(n[i + 1]) >= 0 && (s = n[i + 1], i++), e.compare(s) < 0)
      break;
    n[i] = e, n[t] = s, t = i;
  }
}
class Ie {
  constructor(t, e, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Ze.from(t, e, i);
  }
  goto(t, e = -1e9) {
    return this.cursor.goto(t, e), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = t, this.endSide = e, this.openStart = -1, this.next(), this;
  }
  forward(t, e) {
    for (; this.minActive > -1 && (this.activeTo[this.minActive] - t || this.active[this.minActive].endSide - e) < 0; )
      this.removeActive(this.minActive);
    this.cursor.forward(t, e);
  }
  removeActive(t) {
    Si(this.active, t), Si(this.activeTo, t), Si(this.activeRank, t), this.minActive = Sr(this.active, this.activeTo);
  }
  addActive(t) {
    let e = 0, { value: i, to: s, rank: r } = this.cursor;
    for (; e < this.activeRank.length && (r - this.activeRank[e] || s - this.activeTo[e]) > 0; )
      e++;
    ki(this.active, e, i), ki(this.activeTo, e, s), ki(this.activeRank, e, r), t && ki(t, e, this.cursor.from), this.minActive = Sr(this.active, this.activeTo);
  }
  next() {
    let t = this.to, e = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let s = this.minActive;
      if (s > -1 && (this.activeTo[s] - this.cursor.from || this.active[s].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[s] > t) {
          this.to = this.activeTo[s], this.endSide = this.active[s].endSide;
          break;
        }
        this.removeActive(s), i && Si(i, s);
      } else if (this.cursor.value)
        if (this.cursor.from > t) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let r = this.cursor.value;
          if (!r.point)
            this.addActive(i), this.cursor.next();
          else if (e && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = r, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = r.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (i) {
      this.openStart = 0;
      for (let s = i.length - 1; s >= 0 && i[s] < t; s--)
        this.openStart++;
    }
  }
  activeForPoint(t) {
    if (!this.active.length)
      return this.active;
    let e = [];
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)
      (this.activeTo[i] > t || this.activeTo[i] == t && this.active[i].endSide >= this.point.endSide) && e.push(this.active[i]);
    return e.reverse();
  }
  openEnd(t) {
    let e = 0;
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > t; i--)
      e++;
    return e;
  }
}
function vr(n, t, e, i, s, r) {
  n.goto(t), e.goto(i);
  let o = i + s, l = i, a = i - t;
  for (; ; ) {
    let h = n.to + a - e.to, c = h || n.endSide - e.endSide, f = c < 0 ? n.to + a : e.to, u = Math.min(f, o);
    if (n.point || e.point ? n.point && e.point && (n.point == e.point || n.point.eq(e.point)) && rs(n.activeForPoint(n.to), e.activeForPoint(e.to)) || r.comparePoint(l, u, n.point, e.point) : u > l && !rs(n.active, e.active) && r.compareRange(l, u, n.active, e.active), f > o)
      break;
    (h || n.openEnd != e.openEnd) && r.boundChange && r.boundChange(f), l = f, c <= 0 && n.next(), c >= 0 && e.next();
  }
}
function rs(n, t) {
  if (n.length != t.length)
    return false;
  for (let e = 0; e < n.length; e++)
    if (n[e] != t[e] && !n[e].eq(t[e]))
      return false;
  return true;
}
function Si(n, t) {
  for (let e = t, i = n.length - 1; e < i; e++)
    n[e] = n[e + 1];
  n.pop();
}
function ki(n, t, e) {
  for (let i = n.length - 1; i >= t; i--)
    n[i + 1] = n[i];
  n[t] = e;
}
function Sr(n, t) {
  let e = -1, i = 1e9;
  for (let s = 0; s < t.length; s++)
    (t[s] - i || n[s].endSide - n[e].endSide) < 0 && (e = s, i = t[s]);
  return e;
}
function Be(n, t, e = n.length) {
  let i = 0;
  for (let s = 0; s < e && s < n.length; )
    n.charCodeAt(s) == 9 ? (i += t - i % t, s++) : (i++, s = Y(n, s));
  return i;
}
function os(n, t, e, i) {
  for (let s = 0, r = 0; ; ) {
    if (r >= t)
      return s;
    if (s == n.length)
      break;
    r += n.charCodeAt(s) == 9 ? e - r % e : 1, s = Y(n, s);
  }
  return i === true ? -1 : n.length;
}
function ti(n) {
  let t;
  return n.nodeType == 11 ? t = n.getSelection ? n : n.ownerDocument : t = n, t.getSelection();
}
function ls(n, t) {
  return t ? n == t || n.contains(t.nodeType != 1 ? t.parentNode : t) : false;
}
function $i(n, t) {
  if (!t.anchorNode)
    return false;
  try {
    return ls(n, t.anchorNode);
  } catch {
    return false;
  }
}
function ke(n) {
  return n.nodeType == 3 ? oe(n, 0, n.nodeValue.length).getClientRects() : n.nodeType == 1 ? n.getClientRects() : [];
}
function Ge(n, t, e, i) {
  return e ? kr(n, t, e, i, -1) || kr(n, t, e, i, 1) : false;
}
function re(n) {
  for (var t = 0; ; t++)
    if (n = n.previousSibling, !n)
      return t;
}
function _i(n) {
  return n.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName);
}
function kr(n, t, e, i, s) {
  for (; ; ) {
    if (n == e && t == i)
      return true;
    if (t == (s < 0 ? 0 : Ot(n))) {
      if (n.nodeName == "DIV")
        return false;
      let r = n.parentNode;
      if (!r || r.nodeType != 1)
        return false;
      t = re(n) + (s < 0 ? 0 : 1), n = r;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[t + (s < 0 ? -1 : 0)], n.nodeType == 1 && n.contentEditable == "false")
        return false;
      t = s < 0 ? Ot(n) : 0;
    } else
      return false;
  }
}
function Ot(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function fi(n, t) {
  let e = t ? n.left : n.right;
  return { left: e, right: e, top: n.top, bottom: n.bottom };
}
function _h(n) {
  let t = n.visualViewport;
  return t ? { left: 0, right: t.width, top: 0, bottom: t.height } : { left: 0, right: n.innerWidth, top: 0, bottom: n.innerHeight };
}
function ol(n, t) {
  let e = t.width / n.offsetWidth, i = t.height / n.offsetHeight;
  return (e > 0.995 && e < 1.005 || !isFinite(e) || Math.abs(t.width - n.offsetWidth) < 1) && (e = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(t.height - n.offsetHeight) < 1) && (i = 1), { scaleX: e, scaleY: i };
}
function Zh(n, t, e, i, s, r, o, l) {
  let a = n.ownerDocument, h = a.defaultView || window;
  for (let c = n, f = false; c && !f; )
    if (c.nodeType == 1) {
      let u, d = c == a.body, p = 1, g = 1;
      if (d)
        u = _h(h);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(c).position) && (f = true), c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) {
          c = c.assignedSlot || c.parentNode;
          continue;
        }
        let x = c.getBoundingClientRect();
        ({ scaleX: p, scaleY: g } = ol(c, x)), u = { left: x.left, right: x.left + c.clientWidth * p, top: x.top, bottom: x.top + c.clientHeight * g };
      }
      let m = 0, y = 0;
      if (s == "nearest")
        t.top < u.top ? (y = t.top - (u.top + o), e > 0 && t.bottom > u.bottom + y && (y = t.bottom - u.bottom + o)) : t.bottom > u.bottom && (y = t.bottom - u.bottom + o, e < 0 && t.top - y < u.top && (y = t.top - (u.top + o)));
      else {
        let x = t.bottom - t.top, M = u.bottom - u.top;
        y = (s == "center" && x <= M ? t.top + x / 2 - M / 2 : s == "start" || s == "center" && e < 0 ? t.top - o : t.bottom - M + o) - u.top;
      }
      if (i == "nearest" ? t.left < u.left ? (m = t.left - (u.left + r), e > 0 && t.right > u.right + m && (m = t.right - u.right + r)) : t.right > u.right && (m = t.right - u.right + r, e < 0 && t.left < u.left + m && (m = t.left - (u.left + r))) : m = (i == "center" ? t.left + (t.right - t.left) / 2 - (u.right - u.left) / 2 : i == "start" == l ? t.left - r : t.right - (u.right - u.left) + r) - u.left, m || y)
        if (d)
          h.scrollBy(m, y);
        else {
          let x = 0, M = 0;
          if (y) {
            let v = c.scrollTop;
            c.scrollTop += y / g, M = (c.scrollTop - v) * g;
          }
          if (m) {
            let v = c.scrollLeft;
            c.scrollLeft += m / p, x = (c.scrollLeft - v) * p;
          }
          t = { left: t.left - x, top: t.top - M, right: t.right - x, bottom: t.bottom - M }, x && Math.abs(x - m) < 1 && (i = "nearest"), M && Math.abs(M - y) < 1 && (s = "nearest");
        }
      if (d)
        break;
      (t.top < u.top || t.bottom > u.bottom || t.left < u.left || t.right > u.right) && (t = { left: Math.max(t.left, u.left), right: Math.min(t.right, u.right), top: Math.max(t.top, u.top), bottom: Math.min(t.bottom, u.bottom) }), c = c.assignedSlot || c.parentNode;
    } else if (c.nodeType == 11)
      c = c.host;
    else
      break;
}
function tc(n) {
  let t = n.ownerDocument, e, i;
  for (let s = n.parentNode; s && !(s == t.body || e && i); )
    if (s.nodeType == 1)
      !i && s.scrollHeight > s.clientHeight && (i = s), !e && s.scrollWidth > s.clientWidth && (e = s), s = s.assignedSlot || s.parentNode;
    else if (s.nodeType == 11)
      s = s.host;
    else
      break;
  return { x: e, y: i };
}
class ec {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(t) {
    return this.anchorNode == t.anchorNode && this.anchorOffset == t.anchorOffset && this.focusNode == t.focusNode && this.focusOffset == t.focusOffset;
  }
  setRange(t) {
    let { anchorNode: e, focusNode: i } = t;
    this.set(e, Math.min(t.anchorOffset, e ? Ot(e) : 0), i, Math.min(t.focusOffset, i ? Ot(i) : 0));
  }
  set(t, e, i, s) {
    this.anchorNode = t, this.anchorOffset = e, this.focusNode = i, this.focusOffset = s;
  }
}
let fe = null;
function ll(n) {
  if (n.setActive)
    return n.setActive();
  if (fe)
    return n.focus(fe);
  let t = [];
  for (let e = n; e && (t.push(e, e.scrollTop, e.scrollLeft), e != e.ownerDocument); e = e.parentNode)
    ;
  if (n.focus(fe == null ? { get preventScroll() {
    return fe = { preventScroll: true }, true;
  } } : void 0), !fe) {
    fe = false;
    for (let e = 0; e < t.length; ) {
      let i = t[e++], s = t[e++], r = t[e++];
      i.scrollTop != s && (i.scrollTop = s), i.scrollLeft != r && (i.scrollLeft = r);
    }
  }
}
let Cr;
function oe(n, t, e = t) {
  let i = Cr || (Cr = document.createRange());
  return i.setEnd(n, e), i.setStart(n, t), i;
}
function be(n, t, e, i) {
  let s = { key: t, code: t, keyCode: e, which: e, cancelable: true };
  i && ({ altKey: s.altKey, ctrlKey: s.ctrlKey, shiftKey: s.shiftKey, metaKey: s.metaKey } = i);
  let r = new KeyboardEvent("keydown", s);
  r.synthetic = true, n.dispatchEvent(r);
  let o = new KeyboardEvent("keyup", s);
  return o.synthetic = true, n.dispatchEvent(o), r.defaultPrevented || o.defaultPrevented;
}
function ic(n) {
  for (; n; ) {
    if (n && (n.nodeType == 9 || n.nodeType == 11 && n.host))
      return n;
    n = n.assignedSlot || n.parentNode;
  }
  return null;
}
function al(n) {
  for (; n.attributes.length; )
    n.removeAttributeNode(n.attributes[0]);
}
function nc(n, t) {
  let e = t.focusNode, i = t.focusOffset;
  if (!e || t.anchorNode != e || t.anchorOffset != i)
    return false;
  for (i = Math.min(i, Ot(e)); ; )
    if (i) {
      if (e.nodeType != 1)
        return false;
      let s = e.childNodes[i - 1];
      s.contentEditable == "false" ? i-- : (e = s, i = Ot(e));
    } else {
      if (e == n)
        return true;
      i = re(e), e = e.parentNode;
    }
}
function hl(n) {
  return n.scrollTop > Math.max(1, n.scrollHeight - n.clientHeight - 4);
}
function cl(n, t) {
  for (let e = n, i = t; ; ) {
    if (e.nodeType == 3 && i > 0)
      return { node: e, offset: i };
    if (e.nodeType == 1 && i > 0) {
      if (e.contentEditable == "false")
        return null;
      e = e.childNodes[i - 1], i = Ot(e);
    } else if (e.parentNode && !_i(e))
      i = re(e), e = e.parentNode;
    else
      return null;
  }
}
function fl(n, t) {
  for (let e = n, i = t; ; ) {
    if (e.nodeType == 3 && i < e.nodeValue.length)
      return { node: e, offset: i };
    if (e.nodeType == 1 && i < e.childNodes.length) {
      if (e.contentEditable == "false")
        return null;
      e = e.childNodes[i], i = 0;
    } else if (e.parentNode && !_i(e))
      i = re(e) + 1, e = e.parentNode;
    else
      return null;
  }
}
class Q {
  constructor(t, e, i = true) {
    this.node = t, this.offset = e, this.precise = i;
  }
  static before(t, e) {
    return new Q(t.parentNode, re(t), e);
  }
  static after(t, e) {
    return new Q(t.parentNode, re(t) + 1, e);
  }
}
const Ks = [];
class N {
  constructor() {
    this.parent = null, this.dom = null, this.flags = 2;
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(t) {
    let e = this.posAtStart;
    for (let i of this.children) {
      if (i == t)
        return e;
      e += i.length + i.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(t) {
    return this.posBefore(t) + t.length;
  }
  sync(t, e) {
    if (this.flags & 2) {
      let i = this.dom, s = null, r;
      for (let o of this.children) {
        if (o.flags & 7) {
          if (!o.dom && (r = s ? s.nextSibling : i.firstChild)) {
            let l = N.get(r);
            (!l || !l.parent && l.canReuseDOM(o)) && o.reuseDOM(r);
          }
          o.sync(t, e), o.flags &= -8;
        }
        if (r = s ? s.nextSibling : i.firstChild, e && !e.written && e.node == i && r != o.dom && (e.written = true), o.dom.parentNode == i)
          for (; r && r != o.dom; )
            r = Mr(r);
        else
          i.insertBefore(o.dom, r);
        s = o.dom;
      }
      for (r = s ? s.nextSibling : i.firstChild, r && e && e.node == i && (e.written = true); r; )
        r = Mr(r);
    } else if (this.flags & 1)
      for (let i of this.children)
        i.flags & 7 && (i.sync(t, e), i.flags &= -8);
  }
  reuseDOM(t) {
  }
  localPosFromDOM(t, e) {
    let i;
    if (t == this.dom)
      i = this.dom.childNodes[e];
    else {
      let s = Ot(t) == 0 ? 0 : e == 0 ? -1 : 1;
      for (; ; ) {
        let r = t.parentNode;
        if (r == this.dom)
          break;
        s == 0 && r.firstChild != r.lastChild && (t == r.firstChild ? s = -1 : s = 1), t = r;
      }
      s < 0 ? i = t : i = t.nextSibling;
    }
    if (i == this.dom.firstChild)
      return 0;
    for (; i && !N.get(i); )
      i = i.nextSibling;
    if (!i)
      return this.length;
    for (let s = 0, r = 0; ; s++) {
      let o = this.children[s];
      if (o.dom == i)
        return r;
      r += o.length + o.breakAfter;
    }
  }
  domBoundsAround(t, e, i = 0) {
    let s = -1, r = -1, o = -1, l = -1;
    for (let a = 0, h = i, c = i; a < this.children.length; a++) {
      let f = this.children[a], u = h + f.length;
      if (h < t && u > e)
        return f.domBoundsAround(t, e, h);
      if (u >= t && s == -1 && (s = a, r = h), h > e && f.dom.parentNode == this.dom) {
        o = a, l = c;
        break;
      }
      c = u, h = u + f.breakAfter;
    }
    return { from: r, to: l < 0 ? i + this.length : l, startDOM: (s ? this.children[s - 1].dom.nextSibling : null) || this.dom.firstChild, endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null };
  }
  markDirty(t = false) {
    this.flags |= 2, this.markParentsDirty(t);
  }
  markParentsDirty(t) {
    for (let e = this.parent; e; e = e.parent) {
      if (t && (e.flags |= 2), e.flags & 1)
        return;
      e.flags |= 1, t = false;
    }
  }
  setParent(t) {
    this.parent != t && (this.parent = t, this.flags & 7 && this.markParentsDirty(true));
  }
  setDOM(t) {
    this.dom != t && (this.dom && (this.dom.cmView = null), this.dom = t, t.cmView = this);
  }
  get rootView() {
    for (let t = this; ; ) {
      let e = t.parent;
      if (!e)
        return t;
      t = e;
    }
  }
  replaceChildren(t, e, i = Ks) {
    this.markDirty();
    for (let s = t; s < e; s++) {
      let r = this.children[s];
      r.parent == this && i.indexOf(r) < 0 && r.destroy();
    }
    i.length < 250 ? this.children.splice(t, e - t, ...i) : this.children = [].concat(this.children.slice(0, t), i, this.children.slice(e));
    for (let s = 0; s < i.length; s++)
      i[s].setParent(this);
  }
  ignoreMutation(t) {
    return false;
  }
  ignoreEvent(t) {
    return false;
  }
  childCursor(t = this.length) {
    return new ul(this.children, t, this.children.length);
  }
  childPos(t, e = 1) {
    return this.childCursor().findPos(t, e);
  }
  toString() {
    let t = this.constructor.name.replace("View", "");
    return t + (this.children.length ? "(" + this.children.join() + ")" : this.length ? "[" + (t == "Text" ? this.text : this.length) + "]" : "") + (this.breakAfter ? "#" : "");
  }
  static get(t) {
    return t.cmView;
  }
  get isEditable() {
    return true;
  }
  get isWidget() {
    return false;
  }
  get isHidden() {
    return false;
  }
  merge(t, e, i, s, r, o) {
    return false;
  }
  become(t) {
    return false;
  }
  canReuseDOM(t) {
    return t.constructor == this.constructor && !((this.flags | t.flags) & 8);
  }
  getSide() {
    return 0;
  }
  destroy() {
    for (let t of this.children)
      t.parent == this && t.destroy();
    this.parent = null;
  }
}
N.prototype.breakAfter = 0;
function Mr(n) {
  let t = n.nextSibling;
  return n.parentNode.removeChild(n), t;
}
class ul {
  constructor(t, e, i) {
    this.children = t, this.pos = e, this.i = i, this.off = 0;
  }
  findPos(t, e = 1) {
    for (; ; ) {
      if (t > this.pos || t == this.pos && (e > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
        return this.off = t - this.pos, this;
      let i = this.children[--this.i];
      this.pos -= i.length + i.breakAfter;
    }
  }
}
function dl(n, t, e, i, s, r, o, l, a) {
  let { children: h } = n, c = h.length ? h[t] : null, f = r.length ? r[r.length - 1] : null, u = f ? f.breakAfter : o;
  if (!(t == i && c && !o && !u && r.length < 2 && c.merge(e, s, r.length ? f : null, e == 0, l, a))) {
    if (i < h.length) {
      let d = h[i];
      d && (s < d.length || d.breakAfter && (f == null ? void 0 : f.breakAfter)) ? (t == i && (d = d.split(s), s = 0), !u && f && d.merge(0, s, f, true, 0, a) ? r[r.length - 1] = d : ((s || d.children.length && !d.children[0].length) && d.merge(0, s, null, false, 0, a), r.push(d))) : (d == null ? void 0 : d.breakAfter) && (f ? f.breakAfter = 1 : o = 1), i++;
    }
    for (c && (c.breakAfter = o, e > 0 && (!o && r.length && c.merge(e, c.length, r[0], false, l, 0) ? c.breakAfter = r.shift().breakAfter : (e < c.length || c.children.length && c.children[c.children.length - 1].length == 0) && c.merge(e, c.length, null, false, l, 0), t++)); t < i && r.length; )
      if (h[i - 1].become(r[r.length - 1]))
        i--, r.pop(), a = r.length ? 0 : l;
      else if (h[t].become(r[0]))
        t++, r.shift(), l = r.length ? 0 : a;
      else
        break;
    !r.length && t && i < h.length && !h[t - 1].breakAfter && h[i].merge(0, 0, h[t - 1], false, l, a) && t--, (t < i || r.length) && n.replaceChildren(t, i, r);
  }
}
function pl(n, t, e, i, s, r) {
  let o = n.childCursor(), { i: l, off: a } = o.findPos(e, 1), { i: h, off: c } = o.findPos(t, -1), f = t - e;
  for (let u of i)
    f += u.length;
  n.length += f, dl(n, h, c, l, a, i, 0, s, r);
}
let st = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, as = typeof document < "u" ? document : { documentElement: { style: {} } };
const hs = /Edge\/(\d+)/.exec(st.userAgent), ml = /MSIE \d/.test(st.userAgent), cs = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(st.userAgent), bn = !!(ml || cs || hs), Ar = !bn && /gecko\/(\d+)/i.test(st.userAgent), Bn = !bn && /Chrome\/(\d+)/.exec(st.userAgent), Dr = "webkitFontSmoothing" in as.documentElement.style, gl = !bn && /Apple Computer/.test(st.vendor), Or = gl && (/Mobile\/\w+/.test(st.userAgent) || st.maxTouchPoints > 2);
var w = { mac: Or || /Mac/.test(st.platform), windows: /Win/.test(st.platform), linux: /Linux|X11/.test(st.platform), ie: bn, ie_version: ml ? as.documentMode || 6 : cs ? +cs[1] : hs ? +hs[1] : 0, gecko: Ar, gecko_version: Ar ? +(/Firefox\/(\d+)/.exec(st.userAgent) || [0, 0])[1] : 0, chrome: !!Bn, chrome_version: Bn ? +Bn[1] : 0, ios: Or, android: /Android\b/.test(st.userAgent), webkit: Dr, safari: gl, webkit_version: Dr ? +(/\bAppleWebKit\/(\d+)/.exec(st.userAgent) || [0, 0])[1] : 0, tabSize: as.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size" };
const sc = 256;
class yt extends N {
  constructor(t) {
    super(), this.text = t;
  }
  get length() {
    return this.text.length;
  }
  createDOM(t) {
    this.setDOM(t || document.createTextNode(this.text));
  }
  sync(t, e) {
    this.dom || this.createDOM(), this.dom.nodeValue != this.text && (e && e.node == this.dom && (e.written = true), this.dom.nodeValue = this.text);
  }
  reuseDOM(t) {
    t.nodeType == 3 && this.createDOM(t);
  }
  merge(t, e, i) {
    return this.flags & 8 || i && (!(i instanceof yt) || this.length - (e - t) + i.length > sc || i.flags & 8) ? false : (this.text = this.text.slice(0, t) + (i ? i.text : "") + this.text.slice(e), this.markDirty(), true);
  }
  split(t) {
    let e = new yt(this.text.slice(t));
    return this.text = this.text.slice(0, t), this.markDirty(), e.flags |= this.flags & 8, e;
  }
  localPosFromDOM(t, e) {
    return t == this.dom ? e : e ? this.text.length : 0;
  }
  domAtPos(t) {
    return new Q(this.dom, t);
  }
  domBoundsAround(t, e, i) {
    return { from: i, to: i + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(t, e) {
    return rc(this.dom, t, e);
  }
}
class Nt extends N {
  constructor(t, e = [], i = 0) {
    super(), this.mark = t, this.children = e, this.length = i;
    for (let s of e)
      s.setParent(this);
  }
  setAttrs(t) {
    if (al(t), this.mark.class && (t.className = this.mark.class), this.mark.attrs)
      for (let e in this.mark.attrs)
        t.setAttribute(e, this.mark.attrs[e]);
    return t;
  }
  canReuseDOM(t) {
    return super.canReuseDOM(t) && !((this.flags | t.flags) & 8);
  }
  reuseDOM(t) {
    t.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(t), this.flags |= 6);
  }
  sync(t, e) {
    this.dom ? this.flags & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(t, e);
  }
  merge(t, e, i, s, r, o) {
    return i && (!(i instanceof Nt && i.mark.eq(this.mark)) || t && r <= 0 || e < this.length && o <= 0) ? false : (pl(this, t, e, i ? i.children.slice() : [], r - 1, o - 1), this.markDirty(), true);
  }
  split(t) {
    let e = [], i = 0, s = -1, r = 0;
    for (let l of this.children) {
      let a = i + l.length;
      a > t && e.push(i < t ? l.split(t - i) : l), s < 0 && i >= t && (s = r), i = a, r++;
    }
    let o = this.length - t;
    return this.length = t, s > -1 && (this.children.length = s, this.markDirty()), new Nt(this.mark, e, o);
  }
  domAtPos(t) {
    return yl(this, t);
  }
  coordsAt(t, e) {
    return xl(this, t, e);
  }
}
function rc(n, t, e) {
  let i = n.nodeValue.length;
  t > i && (t = i);
  let s = t, r = t, o = 0;
  t == 0 && e < 0 || t == i && e >= 0 ? w.chrome || w.gecko || (t ? (s--, o = 1) : r < i && (r++, o = -1)) : e < 0 ? s-- : r < i && r++;
  let l = oe(n, s, r).getClientRects();
  if (!l.length)
    return null;
  let a = l[(o ? o < 0 : e >= 0) ? 0 : l.length - 1];
  return w.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (h) => h.width) || a), o ? fi(a, o < 0) : a || null;
}
class Kt extends N {
  static create(t, e, i) {
    return new Kt(t, e, i);
  }
  constructor(t, e, i) {
    super(), this.widget = t, this.length = e, this.side = i, this.prevWidget = null;
  }
  split(t) {
    let e = Kt.create(this.widget, this.length - t, this.side);
    return this.length -= t, e;
  }
  sync(t) {
    (!this.dom || !this.widget.updateDOM(this.dom, t)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(t, e, i, s, r, o) {
    return i && (!(i instanceof Kt) || !this.widget.compare(i.widget) || t > 0 && r <= 0 || e < this.length && o <= 0) ? false : (this.length = t + (i ? i.length : 0) + (this.length - e), true);
  }
  become(t) {
    return t instanceof Kt && t.side == this.side && this.widget.constructor == t.widget.constructor ? (this.widget.compare(t.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, true) : false;
  }
  ignoreMutation() {
    return true;
  }
  ignoreEvent(t) {
    return this.widget.ignoreEvent(t);
  }
  get overrideDOMText() {
    if (this.length == 0)
      return L.empty;
    let t = this;
    for (; t.parent; )
      t = t.parent;
    let { view: e } = t, i = e && e.state.doc, s = this.posAtStart;
    return i ? i.slice(s, s + this.length) : L.empty;
  }
  domAtPos(t) {
    return (this.length ? t == 0 : this.side > 0) ? Q.before(this.dom) : Q.after(this.dom, t == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(t, e) {
    let i = this.widget.coordsAt(this.dom, t, e);
    if (i)
      return i;
    let s = this.dom.getClientRects(), r = null;
    if (!s.length)
      return null;
    let o = this.side ? this.side < 0 : t > 0;
    for (let l = o ? s.length - 1 : 0; r = s[l], !(t > 0 ? l == 0 : l == s.length - 1 || r.top < r.bottom); l += o ? -1 : 1)
      ;
    return fi(r, !o);
  }
  get isEditable() {
    return false;
  }
  get isWidget() {
    return true;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class Ce extends N {
  constructor(t) {
    super(), this.side = t;
  }
  get length() {
    return 0;
  }
  merge() {
    return false;
  }
  become(t) {
    return t instanceof Ce && t.side == this.side;
  }
  split() {
    return new Ce(this.side);
  }
  sync() {
    if (!this.dom) {
      let t = document.createElement("img");
      t.className = "cm-widgetBuffer", t.setAttribute("aria-hidden", "true"), this.setDOM(t);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(t) {
    return this.side > 0 ? Q.before(this.dom) : Q.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(t) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return L.empty;
  }
  get isHidden() {
    return true;
  }
}
yt.prototype.children = Kt.prototype.children = Ce.prototype.children = Ks;
function yl(n, t) {
  let e = n.dom, { children: i } = n, s = 0;
  for (let r = 0; s < i.length; s++) {
    let o = i[s], l = r + o.length;
    if (!(l == r && o.getSide() <= 0)) {
      if (t > r && t < l && o.dom.parentNode == e)
        return o.domAtPos(t - r);
      if (t <= r)
        break;
      r = l;
    }
  }
  for (let r = s; r > 0; r--) {
    let o = i[r - 1];
    if (o.dom.parentNode == e)
      return o.domAtPos(o.length);
  }
  for (let r = s; r < i.length; r++) {
    let o = i[r];
    if (o.dom.parentNode == e)
      return o.domAtPos(0);
  }
  return new Q(e, 0);
}
function bl(n, t, e) {
  let i, { children: s } = n;
  e > 0 && t instanceof Nt && s.length && (i = s[s.length - 1]) instanceof Nt && i.mark.eq(t.mark) ? bl(i, t.children[0], e - 1) : (s.push(t), t.setParent(n)), n.length += t.length;
}
function xl(n, t, e) {
  let i = null, s = -1, r = null, o = -1;
  function l(h, c) {
    for (let f = 0, u = 0; f < h.children.length && u <= c; f++) {
      let d = h.children[f], p = u + d.length;
      p >= c && (d.children.length ? l(d, c - u) : (!r || r.isHidden && e > 0) && (p > c || u == p && d.getSide() > 0) ? (r = d, o = c - u) : (u < c || u == p && d.getSide() < 0 && !d.isHidden) && (i = d, s = c - u)), u = p;
    }
  }
  l(n, t);
  let a = (e < 0 ? i : r) || i || r;
  return a ? a.coordsAt(Math.max(0, a == i ? s : o), e) : oc(n);
}
function oc(n) {
  let t = n.dom.lastChild;
  if (!t)
    return n.dom.getBoundingClientRect();
  let e = ke(t);
  return e[e.length - 1] || null;
}
function fs(n, t) {
  for (let e in n)
    e == "class" && t.class ? t.class += " " + n.class : e == "style" && t.style ? t.style += ";" + n.style : t[e] = n[e];
  return t;
}
const Tr = /* @__PURE__ */ Object.create(null);
function Zi(n, t, e) {
  if (n == t)
    return true;
  n || (n = Tr), t || (t = Tr);
  let i = Object.keys(n), s = Object.keys(t);
  if (i.length - (e && i.indexOf(e) > -1 ? 1 : 0) != s.length - (e && s.indexOf(e) > -1 ? 1 : 0))
    return false;
  for (let r of i)
    if (r != e && (s.indexOf(r) == -1 || n[r] !== t[r]))
      return false;
  return true;
}
function us(n, t, e) {
  let i = false;
  if (t)
    for (let s in t)
      e && s in e || (i = true, s == "style" ? n.style.cssText = "" : n.removeAttribute(s));
  if (e)
    for (let s in e)
      t && t[s] == e[s] || (i = true, s == "style" ? n.style.cssText = e[s] : n.setAttribute(s, e[s]));
  return i;
}
function lc(n) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let e = 0; e < n.attributes.length; e++) {
    let i = n.attributes[e];
    t[i.name] = i.value;
  }
  return t;
}
class Vt {
  eq(t) {
    return false;
  }
  updateDOM(t, e) {
    return false;
  }
  compare(t) {
    return this == t || this.constructor == t.constructor && this.eq(t);
  }
  get estimatedHeight() {
    return -1;
  }
  get lineBreaks() {
    return 0;
  }
  ignoreEvent(t) {
    return true;
  }
  coordsAt(t, e, i) {
    return null;
  }
  get isHidden() {
    return false;
  }
  get editable() {
    return false;
  }
  destroy(t) {
  }
}
var et = function(n) {
  return n[n.Text = 0] = "Text", n[n.WidgetBefore = 1] = "WidgetBefore", n[n.WidgetAfter = 2] = "WidgetAfter", n[n.WidgetRange = 3] = "WidgetRange", n;
}(et || (et = {}));
class D extends se {
  constructor(t, e, i, s) {
    super(), this.startSide = t, this.endSide = e, this.widget = i, this.spec = s;
  }
  get heightRelevant() {
    return false;
  }
  static mark(t) {
    return new ui(t);
  }
  static widget(t) {
    let e = Math.max(-1e4, Math.min(1e4, t.side || 0)), i = !!t.block;
    return e += i && !t.inlineOrder ? e > 0 ? 3e8 : -4e8 : e > 0 ? 1e8 : -1e8, new Yt(t, e, e, i, t.widget || null, false);
  }
  static replace(t) {
    let e = !!t.block, i, s;
    if (t.isBlockGap)
      i = -5e8, s = 4e8;
    else {
      let { start: r, end: o } = wl(t, e);
      i = (r ? e ? -3e8 : -1 : 5e8) - 1, s = (o ? e ? 2e8 : 1 : -6e8) + 1;
    }
    return new Yt(t, i, s, e, t.widget || null, true);
  }
  static line(t) {
    return new di(t);
  }
  static set(t, e = false) {
    return B.of(t, e);
  }
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : false;
  }
}
D.none = B.empty;
class ui extends D {
  constructor(t) {
    let { start: e, end: i } = wl(t);
    super(e ? -1 : 5e8, i ? 1 : -6e8, null, t), this.tagName = t.tagName || "span", this.class = t.class || "", this.attrs = t.attributes || null;
  }
  eq(t) {
    var e, i;
    return this == t || t instanceof ui && this.tagName == t.tagName && (this.class || ((e = this.attrs) === null || e === void 0 ? void 0 : e.class)) == (t.class || ((i = t.attrs) === null || i === void 0 ? void 0 : i.class)) && Zi(this.attrs, t.attrs, "class");
  }
  range(t, e = t) {
    if (t >= e)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(t, e);
  }
}
ui.prototype.point = false;
class di extends D {
  constructor(t) {
    super(-2e8, -2e8, null, t);
  }
  eq(t) {
    return t instanceof di && this.spec.class == t.spec.class && Zi(this.spec.attributes, t.spec.attributes);
  }
  range(t, e = t) {
    if (e != t)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(t, e);
  }
}
di.prototype.mapMode = tt.TrackBefore;
di.prototype.point = true;
class Yt extends D {
  constructor(t, e, i, s, r, o) {
    super(e, i, r, t), this.block = s, this.isReplace = o, this.mapMode = s ? e <= 0 ? tt.TrackBefore : tt.TrackAfter : tt.TrackDel;
  }
  get type() {
    return this.startSide != this.endSide ? et.WidgetRange : this.startSide <= 0 ? et.WidgetBefore : et.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(t) {
    return t instanceof Yt && ac(this.widget, t.widget) && this.block == t.block && this.startSide == t.startSide && this.endSide == t.endSide;
  }
  range(t, e = t) {
    if (this.isReplace && (t > e || t == e && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && e != t)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(t, e);
  }
}
Yt.prototype.point = true;
function wl(n, t = false) {
  let { inclusiveStart: e, inclusiveEnd: i } = n;
  return e == null && (e = n.inclusive), i == null && (i = n.inclusive), { start: e ?? t, end: i ?? t };
}
function ac(n, t) {
  return n == t || !!(n && t && n.compare(t));
}
function Ki(n, t, e, i = 0) {
  let s = e.length - 1;
  s >= 0 && e[s] + i >= n ? e[s] = Math.max(e[s], t) : e.push(n, t);
}
class q extends N {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  merge(t, e, i, s, r, o) {
    if (i) {
      if (!(i instanceof q))
        return false;
      this.dom || i.transferDOM(this);
    }
    return s && this.setDeco(i ? i.attrs : null), pl(this, t, e, i ? i.children.slice() : [], r, o), true;
  }
  split(t) {
    let e = new q();
    if (e.breakAfter = this.breakAfter, this.length == 0)
      return e;
    let { i, off: s } = this.childPos(t);
    s && (e.append(this.children[i].split(s), 0), this.children[i].merge(s, this.children[i].length, null, false, 0, 0), i++);
    for (let r = i; r < this.children.length; r++)
      e.append(this.children[r], 0);
    for (; i > 0 && this.children[i - 1].length == 0; )
      this.children[--i].destroy();
    return this.children.length = i, this.markDirty(), this.length = t, e;
  }
  transferDOM(t) {
    this.dom && (this.markDirty(), t.setDOM(this.dom), t.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(t) {
    Zi(this.attrs, t) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = t);
  }
  append(t, e) {
    bl(this, t, e);
  }
  addLineDeco(t) {
    let e = t.spec.attributes, i = t.spec.class;
    e && (this.attrs = fs(e, this.attrs || {})), i && (this.attrs = fs({ class: i }, this.attrs || {}));
  }
  domAtPos(t) {
    return yl(this, t);
  }
  reuseDOM(t) {
    t.nodeName == "DIV" && (this.setDOM(t), this.flags |= 6);
  }
  sync(t, e) {
    var i;
    this.dom ? this.flags & 4 && (al(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (us(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(t, e);
    let s = this.dom.lastChild;
    for (; s && N.get(s) instanceof Nt; )
      s = s.lastChild;
    if (!s || !this.length || s.nodeName != "BR" && ((i = N.get(s)) === null || i === void 0 ? void 0 : i.isEditable) == false && (!w.ios || !this.children.some((r) => r instanceof yt))) {
      let r = document.createElement("BR");
      r.cmIgnore = true, this.dom.appendChild(r);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let t = 0, e;
    for (let i of this.children) {
      if (!(i instanceof yt) || /[^ -~]/.test(i.text))
        return null;
      let s = ke(i.dom);
      if (s.length != 1)
        return null;
      t += s[0].width, e = s[0].height;
    }
    return t ? { lineHeight: this.dom.getBoundingClientRect().height, charWidth: t / this.length, textHeight: e } : null;
  }
  coordsAt(t, e) {
    let i = xl(this, t, e);
    if (!this.children.length && i && this.parent) {
      let { heightOracle: s } = this.parent.view.viewState, r = i.bottom - i.top;
      if (Math.abs(r - s.lineHeight) < 2 && s.textHeight < r) {
        let o = (r - s.textHeight) / 2;
        return { top: i.top + o, bottom: i.bottom - o, left: i.left, right: i.left };
      }
    }
    return i;
  }
  become(t) {
    return t instanceof q && this.children.length == 0 && t.children.length == 0 && Zi(this.attrs, t.attrs) && this.breakAfter == t.breakAfter;
  }
  covers() {
    return true;
  }
  static find(t, e) {
    for (let i = 0, s = 0; i < t.children.length; i++) {
      let r = t.children[i], o = s + r.length;
      if (o >= e) {
        if (r instanceof q)
          return r;
        if (o > e)
          break;
      }
      s = o + r.breakAfter;
    }
    return null;
  }
}
class Pt extends N {
  constructor(t, e, i) {
    super(), this.widget = t, this.length = e, this.deco = i, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(t, e, i, s, r, o) {
    return i && (!(i instanceof Pt) || !this.widget.compare(i.widget) || t > 0 && r <= 0 || e < this.length && o <= 0) ? false : (this.length = t + (i ? i.length : 0) + (this.length - e), true);
  }
  domAtPos(t) {
    return t == 0 ? Q.before(this.dom) : Q.after(this.dom, t == this.length);
  }
  split(t) {
    let e = this.length - t;
    this.length = t;
    let i = new Pt(this.widget, e, this.deco);
    return i.breakAfter = this.breakAfter, i;
  }
  get children() {
    return Ks;
  }
  sync(t) {
    (!this.dom || !this.widget.updateDOM(this.dom, t)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(t)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : L.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(t) {
    return t instanceof Pt && t.widget.constructor == this.widget.constructor ? (t.widget.compare(this.widget) || this.markDirty(true), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = t.widget, this.length = t.length, this.deco = t.deco, this.breakAfter = t.breakAfter, true) : false;
  }
  ignoreMutation() {
    return true;
  }
  ignoreEvent(t) {
    return this.widget.ignoreEvent(t);
  }
  get isEditable() {
    return false;
  }
  get isWidget() {
    return true;
  }
  coordsAt(t, e) {
    let i = this.widget.coordsAt(this.dom, t, e);
    return i || (this.widget instanceof ds ? null : fi(this.dom.getBoundingClientRect(), this.length ? t == 0 : e <= 0));
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(t) {
    let { startSide: e, endSide: i } = this.deco;
    return e == i ? false : t < 0 ? e < 0 : i > 0;
  }
}
class ds extends Vt {
  constructor(t) {
    super(), this.height = t;
  }
  toDOM() {
    let t = document.createElement("div");
    return t.className = "cm-gap", this.updateDOM(t), t;
  }
  eq(t) {
    return t.height == this.height;
  }
  updateDOM(t) {
    return t.style.height = this.height + "px", true;
  }
  get editable() {
    return true;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return false;
  }
}
class Ye {
  constructor(t, e, i, s) {
    this.doc = t, this.pos = e, this.end = i, this.disallowBlockEffectsFor = s, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = true, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = t.iter(), this.skip = e;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let t = this.content[this.content.length - 1];
    return !(t.breakAfter || t instanceof Pt && t.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new q()), this.atCursorPos = true), this.curLine;
  }
  flushBuffer(t = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(Ci(new Ce(-1), t), t.length), this.pendingBuffer = 0);
  }
  addBlockWidget(t) {
    this.flushBuffer(), this.curLine = null, this.content.push(t);
  }
  finish(t) {
    this.pendingBuffer && t <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, !this.posCovered() && !(t && this.content.length && this.content[this.content.length - 1] instanceof Pt) && this.getLine();
  }
  buildText(t, e, i) {
    for (; t > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: r, lineBreak: o, done: l } = this.cursor.next(this.skip);
        if (this.skip = 0, l)
          throw new Error("Ran out of text content when drawing inline views");
        if (o) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = true, t--;
          continue;
        } else
          this.text = r, this.textOff = 0;
      }
      let s = Math.min(this.text.length - this.textOff, t, 512);
      this.flushBuffer(e.slice(e.length - i)), this.getLine().append(Ci(new yt(this.text.slice(this.textOff, this.textOff + s)), e), i), this.atCursorPos = true, this.textOff += s, t -= s, i = 0;
    }
  }
  span(t, e, i, s) {
    this.buildText(e - t, i, s), this.pos = e, this.openStart < 0 && (this.openStart = s);
  }
  point(t, e, i, s, r, o) {
    if (this.disallowBlockEffectsFor[o] && i instanceof Yt) {
      if (i.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (e > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l = e - t;
    if (i instanceof Yt)
      if (i.block)
        i.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new Pt(i.widget || Me.block, l, i));
      else {
        let a = Kt.create(i.widget || Me.inline, l, l ? 0 : i.startSide), h = this.atCursorPos && !a.isEditable && r <= s.length && (t < e || i.startSide > 0), c = !a.isEditable && (t < e || r > s.length || i.startSide <= 0), f = this.getLine();
        this.pendingBuffer == 2 && !h && !a.isEditable && (this.pendingBuffer = 0), this.flushBuffer(s), h && (f.append(Ci(new Ce(1), s), r), r = s.length + Math.max(0, r - s.length)), f.append(Ci(a, s), r), this.atCursorPos = c, this.pendingBuffer = c ? t < e || r > s.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = s.slice());
      }
    else
      this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = e), this.openStart < 0 && (this.openStart = r);
  }
  static build(t, e, i, s, r) {
    let o = new Ye(t, e, i, r);
    return o.openEnd = B.spans(s, e, i, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o;
  }
}
function Ci(n, t) {
  for (let e of t)
    n = new Nt(e, [n], n.length);
  return n;
}
class Me extends Vt {
  constructor(t) {
    super(), this.tag = t;
  }
  eq(t) {
    return t.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(t) {
    return t.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return true;
  }
}
Me.inline = new Me("span");
Me.block = new Me("div");
var H = function(n) {
  return n[n.LTR = 0] = "LTR", n[n.RTL = 1] = "RTL", n;
}(H || (H = {}));
const le = H.LTR, js = H.RTL;
function vl(n) {
  let t = [];
  for (let e = 0; e < n.length; e++)
    t.push(1 << +n[e]);
  return t;
}
const hc = vl("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), cc = vl("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), ps = /* @__PURE__ */ Object.create(null), wt = [];
for (let n of ["()", "[]", "{}"]) {
  let t = n.charCodeAt(0), e = n.charCodeAt(1);
  ps[t] = e, ps[e] = -t;
}
function Sl(n) {
  return n <= 247 ? hc[n] : 1424 <= n && n <= 1524 ? 2 : 1536 <= n && n <= 1785 ? cc[n - 1536] : 1774 <= n && n <= 2220 ? 4 : 8192 <= n && n <= 8204 ? 256 : 64336 <= n && n <= 65023 ? 4 : 1;
}
const fc = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class jt {
  get dir() {
    return this.level % 2 ? js : le;
  }
  constructor(t, e, i) {
    this.from = t, this.to = e, this.level = i;
  }
  side(t, e) {
    return this.dir == e == t ? this.to : this.from;
  }
  forward(t, e) {
    return t == (this.dir == e);
  }
  static find(t, e, i, s) {
    let r = -1;
    for (let o = 0; o < t.length; o++) {
      let l = t[o];
      if (l.from <= e && l.to >= e) {
        if (l.level == i)
          return o;
        (r < 0 || (s != 0 ? s < 0 ? l.from < e : l.to > e : t[r].level > l.level)) && (r = o);
      }
    }
    if (r < 0)
      throw new RangeError("Index out of range");
    return r;
  }
}
function kl(n, t) {
  if (n.length != t.length)
    return false;
  for (let e = 0; e < n.length; e++) {
    let i = n[e], s = t[e];
    if (i.from != s.from || i.to != s.to || i.direction != s.direction || !kl(i.inner, s.inner))
      return false;
  }
  return true;
}
const I = [];
function uc(n, t, e, i, s) {
  for (let r = 0; r <= i.length; r++) {
    let o = r ? i[r - 1].to : t, l = r < i.length ? i[r].from : e, a = r ? 256 : s;
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = Sl(n.charCodeAt(h));
      u == 512 ? u = c : u == 8 && f == 4 && (u = 16), I[h] = u == 4 ? 2 : u, u & 7 && (f = u), c = u;
    }
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = I[h];
      if (u == 128)
        h < l - 1 && c == I[h + 1] && c & 24 ? u = I[h] = c : I[h] = 256;
      else if (u == 64) {
        let d = h + 1;
        for (; d < l && I[d] == 64; )
          d++;
        let p = h && c == 8 || d < e && I[d] == 8 ? f == 1 ? 1 : 8 : 256;
        for (let g = h; g < d; g++)
          I[g] = p;
        h = d - 1;
      } else
        u == 8 && f == 1 && (I[h] = 1);
      c = u, u & 7 && (f = u);
    }
  }
}
function dc(n, t, e, i, s) {
  let r = s == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= i.length; o++) {
    let h = o ? i[o - 1].to : t, c = o < i.length ? i[o].from : e;
    for (let f = h, u, d, p; f < c; f++)
      if (d = ps[u = n.charCodeAt(f)])
        if (d < 0) {
          for (let g = l - 3; g >= 0; g -= 3)
            if (wt[g + 1] == -d) {
              let m = wt[g + 2], y = m & 2 ? s : m & 4 ? m & 1 ? r : s : 0;
              y && (I[f] = I[wt[g]] = y), l = g;
              break;
            }
        } else {
          if (wt.length == 189)
            break;
          wt[l++] = f, wt[l++] = u, wt[l++] = a;
        }
      else if ((p = I[f]) == 2 || p == 1) {
        let g = p == s;
        a = g ? 0 : 1;
        for (let m = l - 3; m >= 0; m -= 3) {
          let y = wt[m + 2];
          if (y & 2)
            break;
          if (g)
            wt[m + 2] |= 2;
          else {
            if (y & 4)
              break;
            wt[m + 2] |= 4;
          }
        }
      }
  }
}
function pc(n, t, e, i) {
  for (let s = 0, r = i; s <= e.length; s++) {
    let o = s ? e[s - 1].to : n, l = s < e.length ? e[s].from : t;
    for (let a = o; a < l; ) {
      let h = I[a];
      if (h == 256) {
        let c = a + 1;
        for (; ; )
          if (c == l) {
            if (s == e.length)
              break;
            c = e[s++].to, l = s < e.length ? e[s].from : t;
          } else if (I[c] == 256)
            c++;
          else
            break;
        let f = r == 1, u = (c < t ? I[c] : i) == 1, d = f == u ? f ? 1 : 2 : i;
        for (let p = c, g = s, m = g ? e[g - 1].to : n; p > a; )
          p == m && (p = e[--g].from, m = g ? e[g - 1].to : n), I[--p] = d;
        a = c;
      } else
        r = h, a++;
    }
  }
}
function ms(n, t, e, i, s, r, o) {
  let l = i % 2 ? 2 : 1;
  if (i % 2 == s % 2)
    for (let a = t, h = 0; a < e; ) {
      let c = true, f = false;
      if (h == r.length || a < r[h].from) {
        let g = I[a];
        g != l && (c = false, f = g == 16);
      }
      let u = !c && l == 1 ? [] : null, d = c ? i : i + 1, p = a;
      t:
        for (; ; )
          if (h < r.length && p == r[h].from) {
            if (f)
              break t;
            let g = r[h];
            if (!c)
              for (let m = g.to, y = h + 1; ; ) {
                if (m == e)
                  break t;
                if (y < r.length && r[y].from == m)
                  m = r[y++].to;
                else {
                  if (I[m] == l)
                    break t;
                  break;
                }
              }
            if (h++, u)
              u.push(g);
            else {
              g.from > a && o.push(new jt(a, g.from, d));
              let m = g.direction == le != !(d % 2);
              gs(n, m ? i + 1 : i, s, g.inner, g.from, g.to, o), a = g.to;
            }
            p = g.to;
          } else {
            if (p == e || (c ? I[p] != l : I[p] == l))
              break;
            p++;
          }
      u ? ms(n, a, p, i + 1, s, u, o) : a < p && o.push(new jt(a, p, d)), a = p;
    }
  else
    for (let a = e, h = r.length; a > t; ) {
      let c = true, f = false;
      if (!h || a > r[h - 1].to) {
        let g = I[a - 1];
        g != l && (c = false, f = g == 16);
      }
      let u = !c && l == 1 ? [] : null, d = c ? i : i + 1, p = a;
      t:
        for (; ; )
          if (h && p == r[h - 1].to) {
            if (f)
              break t;
            let g = r[--h];
            if (!c)
              for (let m = g.from, y = h; ; ) {
                if (m == t)
                  break t;
                if (y && r[y - 1].to == m)
                  m = r[--y].from;
                else {
                  if (I[m - 1] == l)
                    break t;
                  break;
                }
              }
            if (u)
              u.push(g);
            else {
              g.to < a && o.push(new jt(g.to, a, d));
              let m = g.direction == le != !(d % 2);
              gs(n, m ? i + 1 : i, s, g.inner, g.from, g.to, o), a = g.from;
            }
            p = g.from;
          } else {
            if (p == t || (c ? I[p - 1] != l : I[p - 1] == l))
              break;
            p--;
          }
      u ? ms(n, p, a, i + 1, s, u, o) : p < a && o.push(new jt(p, a, d)), a = p;
    }
}
function gs(n, t, e, i, s, r, o) {
  let l = t % 2 ? 2 : 1;
  uc(n, s, r, i, l), dc(n, s, r, i, l), pc(s, r, i, l), ms(n, s, r, t, e, i, o);
}
function mc(n, t, e) {
  if (!n)
    return [new jt(0, 0, t == js ? 1 : 0)];
  if (t == le && !e.length && !fc.test(n))
    return Cl(n.length);
  if (e.length)
    for (; n.length > I.length; )
      I[I.length] = 256;
  let i = [], s = t == le ? 0 : 1;
  return gs(n, s, s, e, 0, n.length, i), i;
}
function Cl(n) {
  return [new jt(0, n, 0)];
}
let Ml = "";
function gc(n, t, e, i, s) {
  var r;
  let o = i.head - n.from, l = jt.find(t, o, (r = i.bidiLevel) !== null && r !== void 0 ? r : -1, i.assoc), a = t[l], h = a.side(s, e);
  if (o == h) {
    let u = l += s ? 1 : -1;
    if (u < 0 || u >= t.length)
      return null;
    a = t[l = u], o = a.side(!s, e), h = a.side(s, e);
  }
  let c = Y(n.text, o, a.forward(s, e));
  (c < a.from || c > a.to) && (c = h), Ml = n.text.slice(Math.min(o, c), Math.max(o, c));
  let f = l == (s ? t.length - 1 : 0) ? null : t[l + (s ? 1 : -1)];
  return f && c == h && f.level + (s ? 0 : 1) < a.level ? b.cursor(f.side(!s, e) + n.from, f.forward(s, e) ? 1 : -1, f.level) : b.cursor(c + n.from, a.forward(s, e) ? -1 : 1, a.level);
}
function yc(n, t, e) {
  for (let i = t; i < e; i++) {
    let s = Sl(n.charCodeAt(i));
    if (s == 1)
      return le;
    if (s == 2 || s == 4)
      return js;
  }
  return le;
}
const Al = S.define(), Dl = S.define(), Ol = S.define(), Tl = S.define(), ys = S.define(), Bl = S.define(), Ll = S.define(), Us = S.define(), Gs = S.define(), Rl = S.define({ combine: (n) => n.some((t) => t) }), El = S.define({ combine: (n) => n.some((t) => t) }), Pl = S.define();
class xe {
  constructor(t, e = "nearest", i = "nearest", s = 5, r = 5, o = false) {
    this.range = t, this.y = e, this.x = i, this.yMargin = s, this.xMargin = r, this.isSnapshot = o;
  }
  map(t) {
    return t.empty ? this : new xe(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(t) {
    return this.range.to <= t.doc.length ? this : new xe(b.cursor(t.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const Mi = O.define({ map: (n, t) => n.map(t) }), Il = O.define();
function ot(n, t, e) {
  let i = n.facet(Tl);
  i.length ? i[0](t) : window.onerror ? window.onerror(String(t), e, void 0, void 0, t) : e ? console.error(e + ":", t) : console.error(t);
}
const Et = S.define({ combine: (n) => n.length ? n[0] : true });
let bc = 0;
const Ve = S.define();
class z {
  constructor(t, e, i, s, r) {
    this.id = t, this.create = e, this.domEventHandlers = i, this.domEventObservers = s, this.extension = r(this);
  }
  static define(t, e) {
    const { eventHandlers: i, eventObservers: s, provide: r, decorations: o } = e || {};
    return new z(bc++, t, i, s, (l) => {
      let a = [Ve.of(l)];
      return o && a.push(ei.of((h) => {
        let c = h.plugin(l);
        return c ? o(c) : D.none;
      })), r && a.push(r(l)), a;
    });
  }
  static fromClass(t, e) {
    return z.define((i) => new t(i), e);
  }
}
class Ln {
  constructor(t) {
    this.spec = t, this.mustUpdate = null, this.value = null;
  }
  update(t) {
    if (this.value) {
      if (this.mustUpdate) {
        let e = this.mustUpdate;
        if (this.mustUpdate = null, this.value.update)
          try {
            this.value.update(e);
          } catch (i) {
            if (ot(e.state, i, "CodeMirror plugin crashed"), this.value.destroy)
              try {
                this.value.destroy();
              } catch {
              }
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.create(t);
      } catch (e) {
        ot(t.state, e, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(t) {
    var e;
    if (!((e = this.value) === null || e === void 0) && e.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        ot(t.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const Nl = S.define(), Ys = S.define(), ei = S.define(), Fl = S.define(), Xs = S.define(), Hl = S.define();
function Br(n, t) {
  let e = n.state.facet(Hl);
  if (!e.length)
    return e;
  let i = e.map((r) => r instanceof Function ? r(n) : r), s = [];
  return B.spans(i, t.from, t.to, { point() {
  }, span(r, o, l, a) {
    let h = r - t.from, c = o - t.from, f = s;
    for (let u = l.length - 1; u >= 0; u--, a--) {
      let d = l[u].spec.bidiIsolate, p;
      if (d == null && (d = yc(t.text, h, c)), a > 0 && f.length && (p = f[f.length - 1]).to == h && p.direction == d)
        p.to = c, f = p.inner;
      else {
        let g = { from: h, to: c, direction: d, inner: [] };
        f.push(g), f = g.inner;
      }
    }
  } }), s;
}
const Vl = S.define();
function Js(n) {
  let t = 0, e = 0, i = 0, s = 0;
  for (let r of n.state.facet(Vl)) {
    let o = r(n);
    o && (o.left != null && (t = Math.max(t, o.left)), o.right != null && (e = Math.max(e, o.right)), o.top != null && (i = Math.max(i, o.top)), o.bottom != null && (s = Math.max(s, o.bottom)));
  }
  return { left: t, right: e, top: i, bottom: s };
}
const We = S.define();
class dt {
  constructor(t, e, i, s) {
    this.fromA = t, this.toA = e, this.fromB = i, this.toB = s;
  }
  join(t) {
    return new dt(Math.min(this.fromA, t.fromA), Math.max(this.toA, t.toA), Math.min(this.fromB, t.fromB), Math.max(this.toB, t.toB));
  }
  addToSet(t) {
    let e = t.length, i = this;
    for (; e > 0; e--) {
      let s = t[e - 1];
      if (!(s.fromA > i.toA)) {
        if (s.toA < i.fromA)
          break;
        i = i.join(s), t.splice(e - 1, 1);
      }
    }
    return t.splice(e, 0, i), t;
  }
  static extendWithRanges(t, e) {
    if (e.length == 0)
      return t;
    let i = [];
    for (let s = 0, r = 0, o = 0, l = 0; ; s++) {
      let a = s == t.length ? null : t[s], h = o - l, c = a ? a.fromB : 1e9;
      for (; r < e.length && e[r] < c; ) {
        let f = e[r], u = e[r + 1], d = Math.max(l, f), p = Math.min(c, u);
        if (d <= p && new dt(d + h, p + h, d, p).addToSet(i), u > c)
          break;
        r += 2;
      }
      if (!a)
        return i;
      new dt(a.fromA, a.toA, a.fromB, a.toB).addToSet(i), o = a.toA, l = a.toB;
    }
  }
}
class tn {
  constructor(t, e, i) {
    this.view = t, this.state = e, this.transactions = i, this.flags = 0, this.startState = t.state, this.changes = $.empty(this.startState.doc.length);
    for (let r of i)
      this.changes = this.changes.compose(r.changes);
    let s = [];
    this.changes.iterChangedRanges((r, o, l, a) => s.push(new dt(r, o, l, a))), this.changedRanges = s;
  }
  static create(t, e, i) {
    return new tn(t, e, i);
  }
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get selectionSet() {
    return this.transactions.some((t) => t.selection);
  }
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
class Lr extends N {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(t) {
    super(), this.view = t, this.decorations = [], this.dynamicDecorationMap = [false], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.editContextFormatting = D.none, this.lastCompositionAfterCursor = false, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = false, this.lastUpdate = Date.now(), this.setDOM(t.contentDOM), this.children = [new q()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new dt(0, 0, 0, t.state.doc.length)], 0, null);
  }
  update(t) {
    var e;
    let i = t.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: h, toA: c }) => c < this.minWidthFrom || h > this.minWidthTo) ? (this.minWidthFrom = t.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = t.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(t);
    let s = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((e = this.domChanged) === null || e === void 0) && e.newSel ? s = this.domChanged.newSel.head : !Mc(t.changes, this.hasComposition) && !t.selectionSet && (s = t.state.selection.main.head));
    let r = s > -1 ? wc(this.view, t.changes, s) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: h, to: c } = this.hasComposition;
      i = new dt(h, c, t.changes.mapPos(h, -1), t.changes.mapPos(c, 1)).addToSet(i.slice());
    }
    this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null, (w.ie || w.chrome) && !r && t && t.state.doc.lines != t.startState.doc.lines && (this.forceSelection = true);
    let o = this.decorations, l = this.updateDeco(), a = kc(o, l, t.changes);
    return i = dt.extendWithRanges(i, a), !(this.flags & 7) && i.length == 0 ? false : (this.updateInner(i, t.startState.doc.length, r), t.transactions.length && (this.lastUpdate = Date.now()), true);
  }
  updateInner(t, e, i) {
    this.view.viewState.mustMeasureContent = true, this.updateChildren(t, e, i);
    let { observer: s } = this.view;
    s.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let o = w.chrome || w.ios ? { node: s.selectionRange.focusNode, written: false } : void 0;
      this.sync(this.view, o), this.flags &= -8, o && (o.written || s.selectionRange.focusNode != o.node) && (this.forceSelection = true), this.dom.style.height = "";
    }), this.markedForComposition.forEach((o) => o.flags &= -9);
    let r = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let o of this.children)
        o instanceof Pt && o.widget instanceof ds && r.push(o.dom);
    s.updateGaps(r);
  }
  updateChildren(t, e, i) {
    let s = i ? i.range.addToSet(t.slice()) : t, r = this.childCursor(e);
    for (let o = s.length - 1; ; o--) {
      let l = o >= 0 ? s[o] : null;
      if (!l)
        break;
      let { fromA: a, toA: h, fromB: c, toB: f } = l, u, d, p, g;
      if (i && i.range.fromB < f && i.range.toB > c) {
        let v = Ye.build(this.view.state.doc, c, i.range.fromB, this.decorations, this.dynamicDecorationMap), k = Ye.build(this.view.state.doc, i.range.toB, f, this.decorations, this.dynamicDecorationMap);
        d = v.breakAtStart, p = v.openStart, g = k.openEnd;
        let A = this.compositionView(i);
        k.breakAtStart ? A.breakAfter = 1 : k.content.length && A.merge(A.length, A.length, k.content[0], false, k.openStart, 0) && (A.breakAfter = k.content[0].breakAfter, k.content.shift()), v.content.length && A.merge(0, 0, v.content[v.content.length - 1], true, 0, v.openEnd) && v.content.pop(), u = v.content.concat(A).concat(k.content);
      } else
        ({ content: u, breakAtStart: d, openStart: p, openEnd: g } = Ye.build(this.view.state.doc, c, f, this.decorations, this.dynamicDecorationMap));
      let { i: m, off: y } = r.findPos(h, 1), { i: x, off: M } = r.findPos(a, -1);
      dl(this, x, M, m, y, u, d, p, g);
    }
    i && this.fixCompositionDOM(i);
  }
  updateEditContextFormatting(t) {
    this.editContextFormatting = this.editContextFormatting.map(t.changes);
    for (let e of t.transactions)
      for (let i of e.effects)
        i.is(Il) && (this.editContextFormatting = i.value);
  }
  compositionView(t) {
    let e = new yt(t.text.nodeValue);
    e.flags |= 8;
    for (let { deco: s } of t.marks)
      e = new Nt(s, [e], e.length);
    let i = new q();
    return i.append(e, 0), i;
  }
  fixCompositionDOM(t) {
    let e = (r, o) => {
      o.flags |= 8 | (o.children.some((a) => a.flags & 7) ? 1 : 0), this.markedForComposition.add(o);
      let l = N.get(r);
      l && l != o && (l.dom = null), o.setDOM(r);
    }, i = this.childPos(t.range.fromB, 1), s = this.children[i.i];
    e(t.line, s);
    for (let r = t.marks.length - 1; r >= -1; r--)
      i = s.childPos(i.off, 1), s = s.children[i.i], e(r >= 0 ? t.marks[r].node : t.text, s);
  }
  updateSelection(t = false, e = false) {
    (t || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let i = this.view.root.activeElement, s = i == this.dom, r = !s && !(this.view.state.facet(Et) || this.dom.tabIndex > -1) && $i(this.dom, this.view.observer.selectionRange) && !(i && this.dom.contains(i));
    if (!(s || e || r))
      return;
    let o = this.forceSelection;
    this.forceSelection = false;
    let l = this.view.state.selection.main, a = this.moveToLine(this.domAtPos(l.anchor)), h = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
    if (w.gecko && l.empty && !this.hasComposition && xc(a)) {
      let f = document.createTextNode("");
      this.view.observer.ignore(() => a.node.insertBefore(f, a.node.childNodes[a.offset] || null)), a = h = new Q(f, 0), o = true;
    }
    let c = this.view.observer.selectionRange;
    (o || !c.focusNode || (!Ge(a.node, a.offset, c.anchorNode, c.anchorOffset) || !Ge(h.node, h.offset, c.focusNode, c.focusOffset)) && !this.suppressWidgetCursorChange(c, l)) && (this.view.observer.ignore(() => {
      w.android && w.chrome && this.dom.contains(c.focusNode) && Cc(c.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: true }));
      let f = ti(this.view.root);
      if (f)
        if (l.empty) {
          if (w.gecko) {
            let u = vc(a.node, a.offset);
            if (u && u != 3) {
              let d = (u == 1 ? cl : fl)(a.node, a.offset);
              d && (a = new Q(d.node, d.offset));
            }
          }
          f.collapse(a.node, a.offset), l.bidiLevel != null && f.caretBidiLevel !== void 0 && (f.caretBidiLevel = l.bidiLevel);
        } else if (f.extend) {
          f.collapse(a.node, a.offset);
          try {
            f.extend(h.node, h.offset);
          } catch {
          }
        } else {
          let u = document.createRange();
          l.anchor > l.head && ([a, h] = [h, a]), u.setEnd(h.node, h.offset), u.setStart(a.node, a.offset), f.removeAllRanges(), f.addRange(u);
        }
      r && this.view.root.activeElement == this.dom && (this.dom.blur(), i && i.focus());
    }), this.view.observer.setSelectionRange(a, h)), this.impreciseAnchor = a.precise ? null : new Q(c.anchorNode, c.anchorOffset), this.impreciseHead = h.precise ? null : new Q(c.focusNode, c.focusOffset);
  }
  suppressWidgetCursorChange(t, e) {
    return this.hasComposition && e.empty && Ge(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset) && this.posFromDOM(t.focusNode, t.focusOffset) == e.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: t } = this, e = t.state.selection.main, i = ti(t.root), { anchorNode: s, anchorOffset: r } = t.observer.selectionRange;
    if (!i || !e.empty || !e.assoc || !i.modify)
      return;
    let o = q.find(this, e.head);
    if (!o)
      return;
    let l = o.posAtStart;
    if (e.head == l || e.head == l + o.length)
      return;
    let a = this.coordsAt(e.head, -1), h = this.coordsAt(e.head, 1);
    if (!a || !h || a.bottom > h.top)
      return;
    let c = this.domAtPos(e.head + e.assoc);
    i.collapse(c.node, c.offset), i.modify("move", e.assoc < 0 ? "forward" : "backward", "lineboundary"), t.observer.readSelectionRange();
    let f = t.observer.selectionRange;
    t.docView.posFromDOM(f.anchorNode, f.anchorOffset) != e.from && i.collapse(s, r);
  }
  moveToLine(t) {
    let e = this.dom, i;
    if (t.node != e)
      return t;
    for (let s = t.offset; !i && s < e.childNodes.length; s++) {
      let r = N.get(e.childNodes[s]);
      r instanceof q && (i = r.domAtPos(0));
    }
    for (let s = t.offset - 1; !i && s >= 0; s--) {
      let r = N.get(e.childNodes[s]);
      r instanceof q && (i = r.domAtPos(r.length));
    }
    return i ? new Q(i.node, i.offset, true) : t;
  }
  nearest(t) {
    for (let e = t; e; ) {
      let i = N.get(e);
      if (i && i.rootView == this)
        return i;
      e = e.parentNode;
    }
    return null;
  }
  posFromDOM(t, e) {
    let i = this.nearest(t);
    if (!i)
      throw new RangeError("Trying to find position for a DOM position outside of the document");
    return i.localPosFromDOM(t, e) + i.posAtStart;
  }
  domAtPos(t) {
    let { i: e, off: i } = this.childCursor().findPos(t, -1);
    for (; e < this.children.length - 1; ) {
      let s = this.children[e];
      if (i < s.length || s instanceof q)
        break;
      e++, i = 0;
    }
    return this.children[e].domAtPos(i);
  }
  coordsAt(t, e) {
    let i = null, s = 0;
    for (let r = this.length, o = this.children.length - 1; o >= 0; o--) {
      let l = this.children[o], a = r - l.breakAfter, h = a - l.length;
      if (a < t)
        break;
      if (h <= t && (h < t || l.covers(-1)) && (a > t || l.covers(1)) && (!i || l instanceof q && !(i instanceof q && e >= 0)))
        i = l, s = h;
      else if (i && h == t && a == t && l instanceof Pt && Math.abs(e) < 2) {
        if (l.deco.startSide < 0)
          break;
        o && (i = null);
      }
      r = h;
    }
    return i ? i.coordsAt(t - s, e) : null;
  }
  coordsForChar(t) {
    let { i: e, off: i } = this.childPos(t, 1), s = this.children[e];
    if (!(s instanceof q))
      return null;
    for (; s.children.length; ) {
      let { i: l, off: a } = s.childPos(i, 1);
      for (; ; l++) {
        if (l == s.children.length)
          return null;
        if ((s = s.children[l]).length)
          break;
      }
      i = a;
    }
    if (!(s instanceof yt))
      return null;
    let r = Y(s.text, i);
    if (r == i)
      return null;
    let o = oe(s.dom, i, r).getClientRects();
    for (let l = 0; l < o.length; l++) {
      let a = o[l];
      if (l == o.length - 1 || a.top < a.bottom && a.left < a.right)
        return a;
    }
    return null;
  }
  measureVisibleLineHeights(t) {
    let e = [], { from: i, to: s } = t, r = this.view.contentDOM.clientWidth, o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == H.LTR;
    for (let h = 0, c = 0; c < this.children.length; c++) {
      let f = this.children[c], u = h + f.length;
      if (u > s)
        break;
      if (h >= i) {
        let d = f.dom.getBoundingClientRect();
        if (e.push(d.height), o) {
          let p = f.dom.lastChild, g = p ? ke(p) : [];
          if (g.length) {
            let m = g[g.length - 1], y = a ? m.right - d.left : d.right - m.left;
            y > l && (l = y, this.minWidth = r, this.minWidthFrom = h, this.minWidthTo = u);
          }
        }
      }
      h = u + f.breakAfter;
    }
    return e;
  }
  textDirectionAt(t) {
    let { i: e } = this.childPos(t, 1);
    return getComputedStyle(this.children[e].dom).direction == "rtl" ? H.RTL : H.LTR;
  }
  measureTextSize() {
    for (let r of this.children)
      if (r instanceof q) {
        let o = r.measureTextSize();
        if (o)
          return o;
      }
    let t = document.createElement("div"), e, i, s;
    return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(t);
      let r = ke(t.firstChild)[0];
      e = t.getBoundingClientRect().height, i = r ? r.width / 27 : 7, s = r ? r.height : e, t.remove();
    }), { lineHeight: e, charWidth: i, textHeight: s };
  }
  childCursor(t = this.length) {
    let e = this.children.length;
    return e && (t -= this.children[--e].length), new ul(this.children, t, e);
  }
  computeBlockGapDeco() {
    let t = [], e = this.view.viewState;
    for (let i = 0, s = 0; ; s++) {
      let r = s == e.viewports.length ? null : e.viewports[s], o = r ? r.from - 1 : this.length;
      if (o > i) {
        let l = (e.lineBlockAt(o).bottom - e.lineBlockAt(i).top) / this.view.scaleY;
        t.push(D.replace({ widget: new ds(l), block: true, inclusive: true, isBlockGap: true }).range(i, o));
      }
      if (!r)
        break;
      i = r.to + 1;
    }
    return D.set(t);
  }
  updateDeco() {
    let t = 1, e = this.view.state.facet(ei).map((r) => (this.dynamicDecorationMap[t++] = typeof r == "function") ? r(this.view) : r), i = false, s = this.view.state.facet(Fl).map((r, o) => {
      let l = typeof r == "function";
      return l && (i = true), l ? r(this.view) : r;
    });
    for (s.length && (this.dynamicDecorationMap[t++] = i, e.push(B.join(s))), this.decorations = [this.editContextFormatting, ...e, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; t < this.decorations.length; )
      this.dynamicDecorationMap[t++] = false;
    return this.decorations;
  }
  scrollIntoView(t) {
    if (t.isSnapshot) {
      let h = this.view.viewState.lineBlockAt(t.range.head);
      this.view.scrollDOM.scrollTop = h.top - t.yMargin, this.view.scrollDOM.scrollLeft = t.xMargin;
      return;
    }
    for (let h of this.view.state.facet(Pl))
      try {
        if (h(this.view, t.range, t))
          return true;
      } catch (c) {
        ot(this.view.state, c, "scroll handler");
      }
    let { range: e } = t, i = this.coordsAt(e.head, e.empty ? e.assoc : e.head > e.anchor ? -1 : 1), s;
    if (!i)
      return;
    !e.empty && (s = this.coordsAt(e.anchor, e.anchor > e.head ? -1 : 1)) && (i = { left: Math.min(i.left, s.left), top: Math.min(i.top, s.top), right: Math.max(i.right, s.right), bottom: Math.max(i.bottom, s.bottom) });
    let r = Js(this.view), o = { left: i.left - r.left, top: i.top - r.top, right: i.right + r.right, bottom: i.bottom + r.bottom }, { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    Zh(this.view.scrollDOM, o, e.head < e.anchor ? -1 : 1, t.x, t.y, Math.max(Math.min(t.xMargin, l), -l), Math.max(Math.min(t.yMargin, a), -a), this.view.textDirection == H.LTR);
  }
}
function xc(n) {
  return n.node.nodeType == 1 && n.node.firstChild && (n.offset == 0 || n.node.childNodes[n.offset - 1].contentEditable == "false") && (n.offset == n.node.childNodes.length || n.node.childNodes[n.offset].contentEditable == "false");
}
function Wl(n, t) {
  let e = n.observer.selectionRange;
  if (!e.focusNode)
    return null;
  let i = cl(e.focusNode, e.focusOffset), s = fl(e.focusNode, e.focusOffset), r = i || s;
  if (s && i && s.node != i.node) {
    let l = N.get(s.node);
    if (!l || l instanceof yt && l.text != s.node.nodeValue)
      r = s;
    else if (n.docView.lastCompositionAfterCursor) {
      let a = N.get(i.node);
      !a || a instanceof yt && a.text != i.node.nodeValue || (r = s);
    }
  }
  if (n.docView.lastCompositionAfterCursor = r != i, !r)
    return null;
  let o = t - r.offset;
  return { from: o, to: o + r.node.nodeValue.length, node: r.node };
}
function wc(n, t, e) {
  let i = Wl(n, e);
  if (!i)
    return null;
  let { node: s, from: r, to: o } = i, l = s.nodeValue;
  if (/[\n\r]/.test(l) || n.state.doc.sliceString(i.from, i.to) != l)
    return null;
  let a = t.invertedDesc, h = new dt(a.mapPos(r), a.mapPos(o), r, o), c = [];
  for (let f = s.parentNode; ; f = f.parentNode) {
    let u = N.get(f);
    if (u instanceof Nt)
      c.push({ node: f, deco: u.mark });
    else {
      if (u instanceof q || f.nodeName == "DIV" && f.parentNode == n.contentDOM)
        return { range: h, text: s, marks: c, line: f };
      if (f != n.contentDOM)
        c.push({ node: f, deco: new ui({ inclusive: true, attributes: lc(f), tagName: f.tagName.toLowerCase() }) });
      else
        return null;
    }
  }
}
function vc(n, t) {
  return n.nodeType != 1 ? 0 : (t && n.childNodes[t - 1].contentEditable == "false" ? 1 : 0) | (t < n.childNodes.length && n.childNodes[t].contentEditable == "false" ? 2 : 0);
}
let Sc = class {
  constructor() {
    this.changes = [];
  }
  compareRange(t, e) {
    Ki(t, e, this.changes);
  }
  comparePoint(t, e) {
    Ki(t, e, this.changes);
  }
  boundChange(t) {
    Ki(t, t, this.changes);
  }
};
function kc(n, t, e) {
  let i = new Sc();
  return B.compare(n, t, e, i), i.changes;
}
function Cc(n, t) {
  for (let e = n; e && e != t; e = e.assignedSlot || e.parentNode)
    if (e.nodeType == 1 && e.contentEditable == "false")
      return true;
  return false;
}
function Mc(n, t) {
  let e = false;
  return t && n.iterChangedRanges((i, s) => {
    i < t.to && s > t.from && (e = true);
  }), e;
}
function Ac(n, t, e = 1) {
  let i = n.charCategorizer(t), s = n.doc.lineAt(t), r = t - s.from;
  if (s.length == 0)
    return b.cursor(t);
  r == 0 ? e = 1 : r == s.length && (e = -1);
  let o = r, l = r;
  e < 0 ? o = Y(s.text, r, false) : l = Y(s.text, r);
  let a = i(s.text.slice(o, l));
  for (; o > 0; ) {
    let h = Y(s.text, o, false);
    if (i(s.text.slice(h, o)) != a)
      break;
    o = h;
  }
  for (; l < s.length; ) {
    let h = Y(s.text, l);
    if (i(s.text.slice(l, h)) != a)
      break;
    l = h;
  }
  return b.range(o + s.from, l + s.from);
}
function Dc(n, t) {
  return t.left > n ? t.left - n : Math.max(0, n - t.right);
}
function Oc(n, t) {
  return t.top > n ? t.top - n : Math.max(0, n - t.bottom);
}
function Rn(n, t) {
  return n.top < t.bottom - 1 && n.bottom > t.top + 1;
}
function Rr(n, t) {
  return t < n.top ? { top: t, left: n.left, right: n.right, bottom: n.bottom } : n;
}
function Er(n, t) {
  return t > n.bottom ? { top: n.top, left: n.left, right: n.right, bottom: t } : n;
}
function bs(n, t, e) {
  let i, s, r, o, l = false, a, h, c, f;
  for (let p = n.firstChild; p; p = p.nextSibling) {
    let g = ke(p);
    for (let m = 0; m < g.length; m++) {
      let y = g[m];
      s && Rn(s, y) && (y = Rr(Er(y, s.bottom), s.top));
      let x = Dc(t, y), M = Oc(e, y);
      if (x == 0 && M == 0)
        return p.nodeType == 3 ? Pr(p, t, e) : bs(p, t, e);
      if (!i || o > M || o == M && r > x) {
        i = p, s = y, r = x, o = M;
        let v = M ? e < y.top ? -1 : 1 : x ? t < y.left ? -1 : 1 : 0;
        l = !v || (v > 0 ? m < g.length - 1 : m > 0);
      }
      x == 0 ? e > y.bottom && (!c || c.bottom < y.bottom) ? (a = p, c = y) : e < y.top && (!f || f.top > y.top) && (h = p, f = y) : c && Rn(c, y) ? c = Er(c, y.bottom) : f && Rn(f, y) && (f = Rr(f, y.top));
    }
  }
  if (c && c.bottom >= e ? (i = a, s = c) : f && f.top <= e && (i = h, s = f), !i)
    return { node: n, offset: 0 };
  let u = Math.max(s.left, Math.min(s.right, t));
  if (i.nodeType == 3)
    return Pr(i, u, e);
  if (l && i.contentEditable != "false")
    return bs(i, u, e);
  let d = Array.prototype.indexOf.call(n.childNodes, i) + (t >= (s.left + s.right) / 2 ? 1 : 0);
  return { node: n, offset: d };
}
function Pr(n, t, e) {
  let i = n.nodeValue.length, s = -1, r = 1e9, o = 0;
  for (let l = 0; l < i; l++) {
    let a = oe(n, l, l + 1).getClientRects();
    for (let h = 0; h < a.length; h++) {
      let c = a[h];
      if (c.top == c.bottom)
        continue;
      o || (o = t - c.left);
      let f = (c.top > e ? c.top - e : e - c.bottom) - 1;
      if (c.left - 1 <= t && c.right + 1 >= t && f < r) {
        let u = t >= (c.left + c.right) / 2, d = u;
        if ((w.chrome || w.gecko) && oe(n, l).getBoundingClientRect().left == c.right && (d = !u), f <= 0)
          return { node: n, offset: l + (d ? 1 : 0) };
        s = l + (d ? 1 : 0), r = f;
      }
    }
  }
  return { node: n, offset: s > -1 ? s : o > 0 ? n.nodeValue.length : 0 };
}
function zl(n, t, e, i = -1) {
  var s, r;
  let o = n.contentDOM.getBoundingClientRect(), l = o.top + n.viewState.paddingTop, a, { docHeight: h } = n.viewState, { x: c, y: f } = t, u = f - l;
  if (u < 0)
    return 0;
  if (u > h)
    return n.state.doc.length;
  for (let v = n.viewState.heightOracle.textHeight / 2, k = false; a = n.elementAtHeight(u), a.type != et.Text; )
    for (; u = i > 0 ? a.bottom + v : a.top - v, !(u >= 0 && u <= h); ) {
      if (k)
        return e ? null : 0;
      k = true, i = -i;
    }
  f = l + u;
  let d = a.from;
  if (d < n.viewport.from)
    return n.viewport.from == 0 ? 0 : e ? null : Ir(n, o, a, c, f);
  if (d > n.viewport.to)
    return n.viewport.to == n.state.doc.length ? n.state.doc.length : e ? null : Ir(n, o, a, c, f);
  let p = n.dom.ownerDocument, g = n.root.elementFromPoint ? n.root : p, m = g.elementFromPoint(c, f);
  m && !n.contentDOM.contains(m) && (m = null), m || (c = Math.max(o.left + 1, Math.min(o.right - 1, c)), m = g.elementFromPoint(c, f), m && !n.contentDOM.contains(m) && (m = null));
  let y, x = -1;
  if (m && ((s = n.docView.nearest(m)) === null || s === void 0 ? void 0 : s.isEditable) != false) {
    if (p.caretPositionFromPoint) {
      let v = p.caretPositionFromPoint(c, f);
      v && ({ offsetNode: y, offset: x } = v);
    } else if (p.caretRangeFromPoint) {
      let v = p.caretRangeFromPoint(c, f);
      v && ({ startContainer: y, startOffset: x } = v, (!n.contentDOM.contains(y) || w.safari && Tc(y, x, c) || w.chrome && Bc(y, x, c)) && (y = void 0));
    }
    y && (x = Math.min(Ot(y), x));
  }
  if (!y || !n.docView.dom.contains(y)) {
    let v = q.find(n.docView, d);
    if (!v)
      return u > a.top + a.height / 2 ? a.to : a.from;
    ({ node: y, offset: x } = bs(v.dom, c, f));
  }
  let M = n.docView.nearest(y);
  if (!M)
    return null;
  if (M.isWidget && ((r = M.dom) === null || r === void 0 ? void 0 : r.nodeType) == 1) {
    let v = M.dom.getBoundingClientRect();
    return t.y < v.top || t.y <= v.bottom && t.x <= (v.left + v.right) / 2 ? M.posAtStart : M.posAtEnd;
  } else
    return M.localPosFromDOM(y, x) + M.posAtStart;
}
function Ir(n, t, e, i, s) {
  let r = Math.round((i - t.left) * n.defaultCharacterWidth);
  if (n.lineWrapping && e.height > n.defaultLineHeight * 1.5) {
    let l = n.viewState.heightOracle.textHeight, a = Math.floor((s - e.top - (n.defaultLineHeight - l) * 0.5) / l);
    r += a * n.viewState.heightOracle.lineLength;
  }
  let o = n.state.sliceDoc(e.from, e.to);
  return e.from + os(o, r, n.state.tabSize);
}
function Tc(n, t, e) {
  let i;
  if (n.nodeType != 3 || t != (i = n.nodeValue.length))
    return false;
  for (let s = n.nextSibling; s; s = s.nextSibling)
    if (s.nodeType != 1 || s.nodeName != "BR")
      return false;
  return oe(n, i - 1, i).getBoundingClientRect().left > e;
}
function Bc(n, t, e) {
  if (t != 0)
    return false;
  for (let s = n; ; ) {
    let r = s.parentNode;
    if (!r || r.nodeType != 1 || r.firstChild != s)
      return false;
    if (r.classList.contains("cm-line"))
      break;
    s = r;
  }
  let i = n.nodeType == 1 ? n.getBoundingClientRect() : oe(n, 0, Math.max(n.nodeValue.length, 1)).getBoundingClientRect();
  return e - i.left > 5;
}
function xs(n, t) {
  let e = n.lineBlockAt(t);
  if (Array.isArray(e.type)) {
    for (let i of e.type)
      if (i.to > t || i.to == t && (i.to == e.to || i.type == et.Text))
        return i;
  }
  return e;
}
function Lc(n, t, e, i) {
  let s = xs(n, t.head), r = !i || s.type != et.Text || !(n.lineWrapping || s.widgetLineBreaks) ? null : n.coordsAtPos(t.assoc < 0 && t.head > s.from ? t.head - 1 : t.head);
  if (r) {
    let o = n.dom.getBoundingClientRect(), l = n.textDirectionAt(s.from), a = n.posAtCoords({ x: e == (l == H.LTR) ? o.right - 1 : o.left + 1, y: (r.top + r.bottom) / 2 });
    if (a != null)
      return b.cursor(a, e ? -1 : 1);
  }
  return b.cursor(e ? s.to : s.from, e ? -1 : 1);
}
function Nr(n, t, e, i) {
  let s = n.state.doc.lineAt(t.head), r = n.bidiSpans(s), o = n.textDirectionAt(s.from);
  for (let l = t, a = null; ; ) {
    let h = gc(s, r, o, l, e), c = Ml;
    if (!h) {
      if (s.number == (e ? n.state.doc.lines : 1))
        return l;
      c = `
`, s = n.state.doc.line(s.number + (e ? 1 : -1)), r = n.bidiSpans(s), h = n.visualLineSide(s, !e);
    }
    if (a) {
      if (!a(c))
        return l;
    } else {
      if (!i)
        return h;
      a = i(c);
    }
    l = h;
  }
}
function Rc(n, t, e) {
  let i = n.state.charCategorizer(t), s = i(e);
  return (r) => {
    let o = i(r);
    return s == V.Space && (s = o), s == o;
  };
}
function Ec(n, t, e, i) {
  let s = t.head, r = e ? 1 : -1;
  if (s == (e ? n.state.doc.length : 0))
    return b.cursor(s, t.assoc);
  let o = t.goalColumn, l, a = n.contentDOM.getBoundingClientRect(), h = n.coordsAtPos(s, t.assoc || -1), c = n.documentTop;
  if (h)
    o == null && (o = h.left - a.left), l = r < 0 ? h.top : h.bottom;
  else {
    let d = n.viewState.lineBlockAt(s);
    o == null && (o = Math.min(a.right - a.left, n.defaultCharacterWidth * (s - d.from))), l = (r < 0 ? d.top : d.bottom) + c;
  }
  let f = a.left + o, u = i ?? n.viewState.heightOracle.textHeight >> 1;
  for (let d = 0; ; d += 10) {
    let p = l + (u + d) * r, g = zl(n, { x: f, y: p }, false, r);
    if (p < a.top || p > a.bottom || (r < 0 ? g < s : g > s)) {
      let m = n.docView.coordsForChar(g), y = !m || p < m.top ? -1 : 1;
      return b.cursor(g, y, void 0, o);
    }
  }
}
function ji(n, t, e) {
  for (; ; ) {
    let i = 0;
    for (let s of n)
      s.between(t - 1, t + 1, (r, o, l) => {
        if (t > r && t < o) {
          let a = i || e || (t - r < o - t ? -1 : 1);
          t = a < 0 ? r : o, i = a;
        }
      });
    if (!i)
      return t;
  }
}
function En(n, t, e) {
  let i = ji(n.state.facet(Xs).map((s) => s(n)), e.from, t.head > e.from ? -1 : 1);
  return i == e.from ? e : b.cursor(i, i < e.from ? 1 : -1);
}
const ze = "\uFFFF";
class Pc {
  constructor(t, e) {
    this.points = t, this.text = "", this.lineSeparator = e.facet(R.lineSeparator);
  }
  append(t) {
    this.text += t;
  }
  lineBreak() {
    this.text += ze;
  }
  readRange(t, e) {
    if (!t)
      return this;
    let i = t.parentNode;
    for (let s = t; ; ) {
      this.findPointBefore(i, s);
      let r = this.text.length;
      this.readNode(s);
      let o = s.nextSibling;
      if (o == e)
        break;
      let l = N.get(s), a = N.get(o);
      (l && a ? l.breakAfter : (l ? l.breakAfter : _i(s)) || _i(o) && (s.nodeName != "BR" || s.cmIgnore) && this.text.length > r) && this.lineBreak(), s = o;
    }
    return this.findPointBefore(i, e), this;
  }
  readTextNode(t) {
    let e = t.nodeValue;
    for (let i of this.points)
      i.node == t && (i.pos = this.text.length + Math.min(i.offset, e.length));
    for (let i = 0, s = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let r = -1, o = 1, l;
      if (this.lineSeparator ? (r = e.indexOf(this.lineSeparator, i), o = this.lineSeparator.length) : (l = s.exec(e)) && (r = l.index, o = l[0].length), this.append(e.slice(i, r < 0 ? e.length : r)), r < 0)
        break;
      if (this.lineBreak(), o > 1)
        for (let a of this.points)
          a.node == t && a.pos > this.text.length && (a.pos -= o - 1);
      i = r + o;
    }
  }
  readNode(t) {
    if (t.cmIgnore)
      return;
    let e = N.get(t), i = e && e.overrideDOMText;
    if (i != null) {
      this.findPointInside(t, i.length);
      for (let s = i.iter(); !s.next().done; )
        s.lineBreak ? this.lineBreak() : this.append(s.value);
    } else
      t.nodeType == 3 ? this.readTextNode(t) : t.nodeName == "BR" ? t.nextSibling && this.lineBreak() : t.nodeType == 1 && this.readRange(t.firstChild, null);
  }
  findPointBefore(t, e) {
    for (let i of this.points)
      i.node == t && t.childNodes[i.offset] == e && (i.pos = this.text.length);
  }
  findPointInside(t, e) {
    for (let i of this.points)
      (t.nodeType == 3 ? i.node == t : t.contains(i.node)) && (i.pos = this.text.length + (Ic(t, i.node, i.offset) ? e : 0));
  }
}
function Ic(n, t, e) {
  for (; ; ) {
    if (!t || e < Ot(t))
      return false;
    if (t == n)
      return true;
    e = re(t) + 1, t = t.parentNode;
  }
}
class Fr {
  constructor(t, e) {
    this.node = t, this.offset = e, this.pos = -1;
  }
}
class Nc {
  constructor(t, e, i, s) {
    this.typeOver = s, this.bounds = null, this.text = "", this.domChanged = e > -1;
    let { impreciseHead: r, impreciseAnchor: o } = t.docView;
    if (t.state.readOnly && e > -1)
      this.newSel = null;
    else if (e > -1 && (this.bounds = t.docView.domBoundsAround(e, i, 0))) {
      let l = r || o ? [] : Vc(t), a = new Pc(l, t.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = Wc(l, this.bounds.from);
    } else {
      let l = t.observer.selectionRange, a = r && r.node == l.focusNode && r.offset == l.focusOffset || !ls(t.contentDOM, l.focusNode) ? t.state.selection.main.head : t.docView.posFromDOM(l.focusNode, l.focusOffset), h = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !ls(t.contentDOM, l.anchorNode) ? t.state.selection.main.anchor : t.docView.posFromDOM(l.anchorNode, l.anchorOffset), c = t.viewport;
      if ((w.ios || w.chrome) && t.state.selection.main.empty && a != h && (c.from > 0 || c.to < t.state.doc.length)) {
        let f = Math.min(a, h), u = Math.max(a, h), d = c.from - f, p = c.to - u;
        (d == 0 || d == 1 || f == 0) && (p == 0 || p == -1 || u == t.state.doc.length) && (a = 0, h = t.state.doc.length);
      }
      this.newSel = b.single(h, a);
    }
  }
}
function ql(n, t) {
  let e, { newSel: i } = t, s = n.state.selection.main, r = n.inputState.lastKeyTime > Date.now() - 100 ? n.inputState.lastKeyCode : -1;
  if (t.bounds) {
    let { from: o, to: l } = t.bounds, a = s.from, h = null;
    (r === 8 || w.android && t.text.length < l - o) && (a = s.to, h = "end");
    let c = Hc(n.state.doc.sliceString(o, l, ze), t.text, a - o, h);
    c && (w.chrome && r == 13 && c.toB == c.from + 2 && t.text.slice(c.from, c.toB) == ze + ze && c.toB--, e = { from: o + c.from, to: o + c.toA, insert: L.of(t.text.slice(c.from, c.toB).split(ze)) });
  } else
    i && (!n.hasFocus && n.state.facet(Et) || i.main.eq(s)) && (i = null);
  if (!e && !i)
    return false;
  if (!e && t.typeOver && !s.empty && i && i.main.empty ? e = { from: s.from, to: s.to, insert: n.state.doc.slice(s.from, s.to) } : (w.mac || w.android) && e && e.from == e.to && e.from == s.head - 1 && /^\. ?$/.test(e.insert.toString()) && n.contentDOM.getAttribute("autocorrect") == "off" ? (i && e.insert.length == 2 && (i = b.single(i.main.anchor - 1, i.main.head - 1)), e = { from: e.from, to: e.to, insert: L.of([e.insert.toString().replace(".", " ")]) }) : e && e.from >= s.from && e.to <= s.to && (e.from != s.from || e.to != s.to) && s.to - s.from - (e.to - e.from) <= 4 ? e = { from: s.from, to: s.to, insert: n.state.doc.slice(s.from, e.from).append(e.insert).append(n.state.doc.slice(e.to, s.to)) } : w.chrome && e && e.from == e.to && e.from == s.head && e.insert.toString() == `
 ` && n.lineWrapping && (i && (i = b.single(i.main.anchor - 1, i.main.head - 1)), e = { from: s.from, to: s.to, insert: L.of([" "]) }), e)
    return Qs(n, e, i, r);
  if (i && !i.main.eq(s)) {
    let o = false, l = "select";
    return n.inputState.lastSelectionTime > Date.now() - 50 && (n.inputState.lastSelectionOrigin == "select" && (o = true), l = n.inputState.lastSelectionOrigin), n.dispatch({ selection: i, scrollIntoView: o, userEvent: l }), true;
  } else
    return false;
}
function Qs(n, t, e, i = -1) {
  if (w.ios && n.inputState.flushIOSKey(t))
    return true;
  let s = n.state.selection.main;
  if (w.android && (t.to == s.to && (t.from == s.from || t.from == s.from - 1 && n.state.sliceDoc(t.from, s.from) == " ") && t.insert.length == 1 && t.insert.lines == 2 && be(n.contentDOM, "Enter", 13) || (t.from == s.from - 1 && t.to == s.to && t.insert.length == 0 || i == 8 && t.insert.length < t.to - t.from && t.to > s.head) && be(n.contentDOM, "Backspace", 8) || t.from == s.from && t.to == s.to + 1 && t.insert.length == 0 && be(n.contentDOM, "Delete", 46)))
    return true;
  let r = t.insert.toString();
  n.inputState.composing >= 0 && n.inputState.composing++;
  let o, l = () => o || (o = Fc(n, t, e));
  return n.state.facet(Bl).some((a) => a(n, t.from, t.to, r, l)) || n.dispatch(l()), true;
}
function Fc(n, t, e) {
  let i, s = n.state, r = s.selection.main;
  if (t.from >= r.from && t.to <= r.to && t.to - t.from >= (r.to - r.from) / 3 && (!e || e.main.empty && e.main.from == t.from + t.insert.length) && n.inputState.composing < 0) {
    let l = r.from < t.from ? s.sliceDoc(r.from, t.from) : "", a = r.to > t.to ? s.sliceDoc(t.to, r.to) : "";
    i = s.replaceSelection(n.state.toText(l + t.insert.sliceString(0, void 0, n.state.lineBreak) + a));
  } else {
    let l = s.changes(t), a = e && e.main.to <= l.newLength ? e.main : void 0;
    if (s.selection.ranges.length > 1 && n.inputState.composing >= 0 && t.to <= r.to && t.to >= r.to - 10) {
      let h = n.state.sliceDoc(t.from, t.to), c, f = e && Wl(n, e.main.head);
      if (f) {
        let p = t.insert.length - (t.to - t.from);
        c = { from: f.from, to: f.to - p };
      } else
        c = n.state.doc.lineAt(r.head);
      let u = r.to - t.to, d = r.to - r.from;
      i = s.changeByRange((p) => {
        if (p.from == r.from && p.to == r.to)
          return { changes: l, range: a || p.map(l) };
        let g = p.to - u, m = g - h.length;
        if (p.to - p.from != d || n.state.sliceDoc(m, g) != h || p.to >= c.from && p.from <= c.to)
          return { range: p };
        let y = s.changes({ from: m, to: g, insert: t.insert }), x = p.to - r.to;
        return { changes: y, range: a ? b.range(Math.max(0, a.anchor + x), Math.max(0, a.head + x)) : p.map(y) };
      });
    } else
      i = { changes: l, selection: a && s.selection.replaceRange(a) };
  }
  let o = "input.type";
  return (n.composing || n.inputState.compositionPendingChange && n.inputState.compositionEndedAt > Date.now() - 50) && (n.inputState.compositionPendingChange = false, o += ".compose", n.inputState.compositionFirstChange && (o += ".start", n.inputState.compositionFirstChange = false)), s.update(i, { userEvent: o, scrollIntoView: true });
}
function Hc(n, t, e, i) {
  let s = Math.min(n.length, t.length), r = 0;
  for (; r < s && n.charCodeAt(r) == t.charCodeAt(r); )
    r++;
  if (r == s && n.length == t.length)
    return null;
  let o = n.length, l = t.length;
  for (; o > 0 && l > 0 && n.charCodeAt(o - 1) == t.charCodeAt(l - 1); )
    o--, l--;
  if (i == "end") {
    let a = Math.max(0, r - Math.min(o, l));
    e -= o + a - r;
  }
  if (o < r && n.length < t.length) {
    let a = e <= r && e >= o ? r - e : 0;
    r -= a, l = r + (l - o), o = r;
  } else if (l < r) {
    let a = e <= r && e >= l ? r - e : 0;
    r -= a, o = r + (o - l), l = r;
  }
  return { from: r, toA: o, toB: l };
}
function Vc(n) {
  let t = [];
  if (n.root.activeElement != n.contentDOM)
    return t;
  let { anchorNode: e, anchorOffset: i, focusNode: s, focusOffset: r } = n.observer.selectionRange;
  return e && (t.push(new Fr(e, i)), (s != e || r != i) && t.push(new Fr(s, r))), t;
}
function Wc(n, t) {
  if (n.length == 0)
    return null;
  let e = n[0].pos, i = n.length == 2 ? n[1].pos : e;
  return e > -1 && i > -1 ? b.single(e + t, i + t) : null;
}
class zc {
  setSelectionOrigin(t) {
    this.lastSelectionOrigin = t, this.lastSelectionTime = Date.now();
  }
  constructor(t) {
    this.view = t, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = false, this.compositionPendingChange = false, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = t.hasFocus, w.safari && t.contentDOM.addEventListener("input", () => null), w.gecko && sf(t.contentDOM.ownerDocument);
  }
  handleEvent(t) {
    !Xc(this.view, t) || this.ignoreDuringComposition(t) || t.type == "keydown" && this.keydown(t) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(t.type, t)) : this.runHandlers(t.type, t));
  }
  runHandlers(t, e) {
    let i = this.handlers[t];
    if (i) {
      for (let s of i.observers)
        s(this.view, e);
      for (let s of i.handlers) {
        if (e.defaultPrevented)
          break;
        if (s(this.view, e)) {
          e.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(t) {
    let e = qc(t), i = this.handlers, s = this.view.contentDOM;
    for (let r in e)
      if (r != "scroll") {
        let o = !e[r].handlers.length, l = i[r];
        l && o != !l.handlers.length && (s.removeEventListener(r, this.handleEvent), l = null), l || s.addEventListener(r, this.handleEvent, { passive: o });
      }
    for (let r in i)
      r != "scroll" && !e[r] && s.removeEventListener(r, this.handleEvent);
    this.handlers = e;
  }
  keydown(t) {
    if (this.lastKeyCode = t.keyCode, this.lastKeyTime = Date.now(), t.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return true;
    if (this.tabFocusMode > 0 && t.keyCode != 27 && Kl.indexOf(t.keyCode) < 0 && (this.tabFocusMode = -1), w.android && w.chrome && !t.synthetic && (t.keyCode == 13 || t.keyCode == 8))
      return this.view.observer.delayAndroidKey(t.key, t.keyCode), true;
    let e;
    return w.ios && !t.synthetic && !t.altKey && !t.metaKey && ((e = $l.find((i) => i.keyCode == t.keyCode)) && !t.ctrlKey || $c.indexOf(t.key) > -1 && t.ctrlKey && !t.shiftKey) ? (this.pendingIOSKey = e || t, setTimeout(() => this.flushIOSKey(), 250), true) : (t.keyCode != 229 && this.view.observer.forceFlush(), false);
  }
  flushIOSKey(t) {
    let e = this.pendingIOSKey;
    return !e || e.key == "Enter" && t && t.from < t.to && /^\S+$/.test(t.insert.toString()) ? false : (this.pendingIOSKey = void 0, be(this.view.contentDOM, e.key, e.keyCode, e instanceof KeyboardEvent ? e : void 0));
  }
  ignoreDuringComposition(t) {
    return /^key/.test(t.type) ? this.composing > 0 ? true : w.safari && !w.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = false, true) : false : false;
  }
  startMouseSelection(t) {
    this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = t;
  }
  update(t) {
    this.view.observer.update(t), this.mouseSelection && this.mouseSelection.update(t), this.draggedContent && t.docChanged && (this.draggedContent = this.draggedContent.map(t.changes)), t.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function Hr(n, t) {
  return (e, i) => {
    try {
      return t.call(n, i, e);
    } catch (s) {
      ot(e.state, s);
    }
  };
}
function qc(n) {
  let t = /* @__PURE__ */ Object.create(null);
  function e(i) {
    return t[i] || (t[i] = { observers: [], handlers: [] });
  }
  for (let i of n) {
    let s = i.spec;
    if (s && s.domEventHandlers)
      for (let r in s.domEventHandlers) {
        let o = s.domEventHandlers[r];
        o && e(r).handlers.push(Hr(i.value, o));
      }
    if (s && s.domEventObservers)
      for (let r in s.domEventObservers) {
        let o = s.domEventObservers[r];
        o && e(r).observers.push(Hr(i.value, o));
      }
  }
  for (let i in bt)
    e(i).handlers.push(bt[i]);
  for (let i in mt)
    e(i).observers.push(mt[i]);
  return t;
}
const $l = [{ key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" }, { key: "Enter", keyCode: 13, inputType: "insertParagraph" }, { key: "Enter", keyCode: 13, inputType: "insertLineBreak" }, { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }], $c = "dthko", Kl = [16, 17, 18, 20, 91, 92, 224, 225], Ai = 6;
function Di(n) {
  return Math.max(0, n) * 0.7 + 8;
}
function Kc(n, t) {
  return Math.max(Math.abs(n.clientX - t.clientX), Math.abs(n.clientY - t.clientY));
}
class jc {
  constructor(t, e, i, s) {
    this.view = t, this.startEvent = e, this.style = i, this.mustSelect = s, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = e, this.scrollParents = tc(t.contentDOM), this.atoms = t.state.facet(Xs).map((o) => o(t));
    let r = t.contentDOM.ownerDocument;
    r.addEventListener("mousemove", this.move = this.move.bind(this)), r.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = e.shiftKey, this.multiple = t.state.facet(R.allowMultipleSelections) && Uc(t, e), this.dragging = Yc(t, e) && Gl(e) == 1 ? null : false;
  }
  start(t) {
    this.dragging === false && this.select(t);
  }
  move(t) {
    if (t.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && Kc(this.startEvent, t) < 10)
      return;
    this.select(this.lastEvent = t);
    let e = 0, i = 0, s = 0, r = 0, o = this.view.win.innerWidth, l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: s, right: o } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: r, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = Js(this.view);
    t.clientX - a.left <= s + Ai ? e = -Di(s - t.clientX) : t.clientX + a.right >= o - Ai && (e = Di(t.clientX - o)), t.clientY - a.top <= r + Ai ? i = -Di(r - t.clientY) : t.clientY + a.bottom >= l - Ai && (i = Di(t.clientY - l)), this.setScrollSpeed(e, i);
  }
  up(t) {
    this.dragging == null && this.select(this.lastEvent), this.dragging || t.preventDefault(), this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let t = this.view.contentDOM.ownerDocument;
    t.removeEventListener("mousemove", this.move), t.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
  }
  setScrollSpeed(t, e) {
    this.scrollSpeed = { x: t, y: e }, t || e ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
  }
  scroll() {
    let { x: t, y: e } = this.scrollSpeed;
    t && this.scrollParents.x && (this.scrollParents.x.scrollLeft += t, t = 0), e && this.scrollParents.y && (this.scrollParents.y.scrollTop += e, e = 0), (t || e) && this.view.win.scrollBy(t, e), this.dragging === false && this.select(this.lastEvent);
  }
  skipAtoms(t) {
    let e = null;
    for (let i = 0; i < t.ranges.length; i++) {
      let s = t.ranges[i], r = null;
      if (s.empty) {
        let o = ji(this.atoms, s.from, 0);
        o != s.from && (r = b.cursor(o, -1));
      } else {
        let o = ji(this.atoms, s.from, -1), l = ji(this.atoms, s.to, 1);
        (o != s.from || l != s.to) && (r = b.range(s.from == s.anchor ? o : l, s.from == s.head ? o : l));
      }
      r && (e || (e = t.ranges.slice()), e[i] = r);
    }
    return e ? b.create(e, t.mainIndex) : t;
  }
  select(t) {
    let { view: e } = this, i = this.skipAtoms(this.style.get(t, this.extend, this.multiple));
    (this.mustSelect || !i.eq(e.state.selection, this.dragging === false)) && this.view.dispatch({ selection: i, userEvent: "select.pointer" }), this.mustSelect = false;
  }
  update(t) {
    t.transactions.some((e) => e.isUserEvent("input.type")) ? this.destroy() : this.style.update(t) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function Uc(n, t) {
  let e = n.state.facet(Al);
  return e.length ? e[0](t) : w.mac ? t.metaKey : t.ctrlKey;
}
function Gc(n, t) {
  let e = n.state.facet(Dl);
  return e.length ? e[0](t) : w.mac ? !t.altKey : !t.ctrlKey;
}
function Yc(n, t) {
  let { main: e } = n.state.selection;
  if (e.empty)
    return false;
  let i = ti(n.root);
  if (!i || i.rangeCount == 0)
    return true;
  let s = i.getRangeAt(0).getClientRects();
  for (let r = 0; r < s.length; r++) {
    let o = s[r];
    if (o.left <= t.clientX && o.right >= t.clientX && o.top <= t.clientY && o.bottom >= t.clientY)
      return true;
  }
  return false;
}
function Xc(n, t) {
  if (!t.bubbles)
    return true;
  if (t.defaultPrevented)
    return false;
  for (let e = t.target, i; e != n.contentDOM; e = e.parentNode)
    if (!e || e.nodeType == 11 || (i = N.get(e)) && i.ignoreEvent(t))
      return false;
  return true;
}
const bt = /* @__PURE__ */ Object.create(null), mt = /* @__PURE__ */ Object.create(null), jl = w.ie && w.ie_version < 15 || w.ios && w.webkit_version < 604;
function Jc(n) {
  let t = n.dom.parentNode;
  if (!t)
    return;
  let e = t.appendChild(document.createElement("textarea"));
  e.style.cssText = "position: fixed; left: -10000px; top: 10px", e.focus(), setTimeout(() => {
    n.focus(), e.remove(), Ul(n, e.value);
  }, 50);
}
function xn(n, t, e) {
  for (let i of n.facet(t))
    e = i(e, n);
  return e;
}
function Ul(n, t) {
  t = xn(n.state, Us, t);
  let { state: e } = n, i, s = 1, r = e.toText(t), o = r.lines == e.selection.ranges.length;
  if (ws != null && e.selection.ranges.every((a) => a.empty) && ws == r.toString()) {
    let a = -1;
    i = e.changeByRange((h) => {
      let c = e.doc.lineAt(h.from);
      if (c.from == a)
        return { range: h };
      a = c.from;
      let f = e.toText((o ? r.line(s++).text : t) + e.lineBreak);
      return { changes: { from: c.from, insert: f }, range: b.cursor(h.from + f.length) };
    });
  } else
    o ? i = e.changeByRange((a) => {
      let h = r.line(s++);
      return { changes: { from: a.from, to: a.to, insert: h.text }, range: b.cursor(a.from + h.length) };
    }) : i = e.replaceSelection(r);
  n.dispatch(i, { userEvent: "input.paste", scrollIntoView: true });
}
mt.scroll = (n) => {
  n.inputState.lastScrollTop = n.scrollDOM.scrollTop, n.inputState.lastScrollLeft = n.scrollDOM.scrollLeft;
};
bt.keydown = (n, t) => (n.inputState.setSelectionOrigin("select"), t.keyCode == 27 && n.inputState.tabFocusMode != 0 && (n.inputState.tabFocusMode = Date.now() + 2e3), false);
mt.touchstart = (n, t) => {
  n.inputState.lastTouchTime = Date.now(), n.inputState.setSelectionOrigin("select.pointer");
};
mt.touchmove = (n) => {
  n.inputState.setSelectionOrigin("select.pointer");
};
bt.mousedown = (n, t) => {
  if (n.observer.flush(), n.inputState.lastTouchTime > Date.now() - 2e3)
    return false;
  let e = null;
  for (let i of n.state.facet(Ol))
    if (e = i(n, t), e)
      break;
  if (!e && t.button == 0 && (e = Zc(n, t)), e) {
    let i = !n.hasFocus;
    n.inputState.startMouseSelection(new jc(n, t, e, i)), i && n.observer.ignore(() => {
      ll(n.contentDOM);
      let r = n.root.activeElement;
      r && !r.contains(n.contentDOM) && r.blur();
    });
    let s = n.inputState.mouseSelection;
    if (s)
      return s.start(t), s.dragging === false;
  }
  return false;
};
function Vr(n, t, e, i) {
  if (i == 1)
    return b.cursor(t, e);
  if (i == 2)
    return Ac(n.state, t, e);
  {
    let s = q.find(n.docView, t), r = n.state.doc.lineAt(s ? s.posAtEnd : t), o = s ? s.posAtStart : r.from, l = s ? s.posAtEnd : r.to;
    return l < n.state.doc.length && l == r.to && l++, b.range(o, l);
  }
}
let Wr = (n, t, e) => t >= e.top && t <= e.bottom && n >= e.left && n <= e.right;
function Qc(n, t, e, i) {
  let s = q.find(n.docView, t);
  if (!s)
    return 1;
  let r = t - s.posAtStart;
  if (r == 0)
    return 1;
  if (r == s.length)
    return -1;
  let o = s.coordsAt(r, -1);
  if (o && Wr(e, i, o))
    return -1;
  let l = s.coordsAt(r, 1);
  return l && Wr(e, i, l) ? 1 : o && o.bottom >= i ? -1 : 1;
}
function zr(n, t) {
  let e = n.posAtCoords({ x: t.clientX, y: t.clientY }, false);
  return { pos: e, bias: Qc(n, e, t.clientX, t.clientY) };
}
const _c = w.ie && w.ie_version <= 11;
let qr = null, $r = 0, Kr = 0;
function Gl(n) {
  if (!_c)
    return n.detail;
  let t = qr, e = Kr;
  return qr = n, Kr = Date.now(), $r = !t || e > Date.now() - 400 && Math.abs(t.clientX - n.clientX) < 2 && Math.abs(t.clientY - n.clientY) < 2 ? ($r + 1) % 3 : 1;
}
function Zc(n, t) {
  let e = zr(n, t), i = Gl(t), s = n.state.selection;
  return { update(r) {
    r.docChanged && (e.pos = r.changes.mapPos(e.pos), s = s.map(r.changes));
  }, get(r, o, l) {
    let a = zr(n, r), h, c = Vr(n, a.pos, a.bias, i);
    if (e.pos != a.pos && !o) {
      let f = Vr(n, e.pos, e.bias, i), u = Math.min(f.from, c.from), d = Math.max(f.to, c.to);
      c = u < c.from ? b.range(u, d) : b.range(d, u);
    }
    return o ? s.replaceRange(s.main.extend(c.from, c.to)) : l && i == 1 && s.ranges.length > 1 && (h = tf(s, a.pos)) ? h : l ? s.addRange(c) : b.create([c]);
  } };
}
function tf(n, t) {
  for (let e = 0; e < n.ranges.length; e++) {
    let { from: i, to: s } = n.ranges[e];
    if (i <= t && s >= t)
      return b.create(n.ranges.slice(0, e).concat(n.ranges.slice(e + 1)), n.mainIndex == e ? 0 : n.mainIndex - (n.mainIndex > e ? 1 : 0));
  }
  return null;
}
bt.dragstart = (n, t) => {
  let { selection: { main: e } } = n.state;
  if (t.target.draggable) {
    let s = n.docView.nearest(t.target);
    if (s && s.isWidget) {
      let r = s.posAtStart, o = r + s.length;
      (r >= e.to || o <= e.from) && (e = b.range(r, o));
    }
  }
  let { inputState: i } = n;
  return i.mouseSelection && (i.mouseSelection.dragging = true), i.draggedContent = e, t.dataTransfer && (t.dataTransfer.setData("Text", xn(n.state, Gs, n.state.sliceDoc(e.from, e.to))), t.dataTransfer.effectAllowed = "copyMove"), false;
};
bt.dragend = (n) => (n.inputState.draggedContent = null, false);
function jr(n, t, e, i) {
  if (e = xn(n.state, Us, e), !e)
    return;
  let s = n.posAtCoords({ x: t.clientX, y: t.clientY }, false), { draggedContent: r } = n.inputState, o = i && r && Gc(n, t) ? { from: r.from, to: r.to } : null, l = { from: s, insert: e }, a = n.state.changes(o ? [o, l] : l);
  n.focus(), n.dispatch({ changes: a, selection: { anchor: a.mapPos(s, -1), head: a.mapPos(s, 1) }, userEvent: o ? "move.drop" : "input.drop" }), n.inputState.draggedContent = null;
}
bt.drop = (n, t) => {
  if (!t.dataTransfer)
    return false;
  if (n.state.readOnly)
    return true;
  let e = t.dataTransfer.files;
  if (e && e.length) {
    let i = Array(e.length), s = 0, r = () => {
      ++s == e.length && jr(n, t, i.filter((o) => o != null).join(n.state.lineBreak), false);
    };
    for (let o = 0; o < e.length; o++) {
      let l = new FileReader();
      l.onerror = r, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[o] = l.result), r();
      }, l.readAsText(e[o]);
    }
    return true;
  } else {
    let i = t.dataTransfer.getData("Text");
    if (i)
      return jr(n, t, i, true), true;
  }
  return false;
};
bt.paste = (n, t) => {
  if (n.state.readOnly)
    return true;
  n.observer.flush();
  let e = jl ? null : t.clipboardData;
  return e ? (Ul(n, e.getData("text/plain") || e.getData("text/uri-list")), true) : (Jc(n), false);
};
function ef(n, t) {
  let e = n.dom.parentNode;
  if (!e)
    return;
  let i = e.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = t, i.focus(), i.selectionEnd = t.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), n.focus();
  }, 50);
}
function nf(n) {
  let t = [], e = [], i = false;
  for (let s of n.selection.ranges)
    s.empty || (t.push(n.sliceDoc(s.from, s.to)), e.push(s));
  if (!t.length) {
    let s = -1;
    for (let { from: r } of n.selection.ranges) {
      let o = n.doc.lineAt(r);
      o.number > s && (t.push(o.text), e.push({ from: o.from, to: Math.min(n.doc.length, o.to + 1) })), s = o.number;
    }
    i = true;
  }
  return { text: xn(n, Gs, t.join(n.lineBreak)), ranges: e, linewise: i };
}
let ws = null;
bt.copy = bt.cut = (n, t) => {
  let { text: e, ranges: i, linewise: s } = nf(n.state);
  if (!e && !s)
    return false;
  ws = s ? e : null, t.type == "cut" && !n.state.readOnly && n.dispatch({ changes: i, scrollIntoView: true, userEvent: "delete.cut" });
  let r = jl ? null : t.clipboardData;
  return r ? (r.clearData(), r.setData("text/plain", e), true) : (ef(n, e), false);
};
const Yl = Ht.define();
function Xl(n, t) {
  let e = [];
  for (let i of n.facet(Ll)) {
    let s = i(n, t);
    s && e.push(s);
  }
  return e ? n.update({ effects: e, annotations: Yl.of(true) }) : null;
}
function Jl(n) {
  setTimeout(() => {
    let t = n.hasFocus;
    if (t != n.inputState.notifiedFocused) {
      let e = Xl(n.state, t);
      e ? n.dispatch(e) : n.update([]);
    }
  }, 10);
}
mt.focus = (n) => {
  n.inputState.lastFocusTime = Date.now(), !n.scrollDOM.scrollTop && (n.inputState.lastScrollTop || n.inputState.lastScrollLeft) && (n.scrollDOM.scrollTop = n.inputState.lastScrollTop, n.scrollDOM.scrollLeft = n.inputState.lastScrollLeft), Jl(n);
};
mt.blur = (n) => {
  n.observer.clearSelectionRange(), Jl(n);
};
mt.compositionstart = mt.compositionupdate = (n) => {
  n.observer.editContext || (n.inputState.compositionFirstChange == null && (n.inputState.compositionFirstChange = true), n.inputState.composing < 0 && (n.inputState.composing = 0));
};
mt.compositionend = (n) => {
  n.observer.editContext || (n.inputState.composing = -1, n.inputState.compositionEndedAt = Date.now(), n.inputState.compositionPendingKey = true, n.inputState.compositionPendingChange = n.observer.pendingRecords().length > 0, n.inputState.compositionFirstChange = null, w.chrome && w.android ? n.observer.flushSoon() : n.inputState.compositionPendingChange ? Promise.resolve().then(() => n.observer.flush()) : setTimeout(() => {
    n.inputState.composing < 0 && n.docView.hasComposition && n.update([]);
  }, 50));
};
mt.contextmenu = (n) => {
  n.inputState.lastContextMenu = Date.now();
};
bt.beforeinput = (n, t) => {
  var e, i;
  if (t.inputType == "insertReplacementText" && n.observer.editContext) {
    let r = (e = t.dataTransfer) === null || e === void 0 ? void 0 : e.getData("text/plain"), o = t.getTargetRanges();
    if (r && o.length) {
      let l = o[0], a = n.posAtDOM(l.startContainer, l.startOffset), h = n.posAtDOM(l.endContainer, l.endOffset);
      return Qs(n, { from: a, to: h, insert: n.state.toText(r) }, null), true;
    }
  }
  let s;
  if (w.chrome && w.android && (s = $l.find((r) => r.inputType == t.inputType)) && (n.observer.delayAndroidKey(s.key, s.keyCode), s.key == "Backspace" || s.key == "Delete")) {
    let r = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > r + 10 && n.hasFocus && (n.contentDOM.blur(), n.focus());
    }, 100);
  }
  return w.ios && t.inputType == "deleteContentForward" && n.observer.flushSoon(), w.safari && t.inputType == "insertText" && n.inputState.composing >= 0 && setTimeout(() => mt.compositionend(n, t), 20), false;
};
const Ur = /* @__PURE__ */ new Set();
function sf(n) {
  Ur.has(n) || (Ur.add(n), n.addEventListener("copy", () => {
  }), n.addEventListener("cut", () => {
  }));
}
const Gr = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let Ae = false;
function Yr() {
  Ae = false;
}
class rf {
  constructor(t) {
    this.lineWrapping = t, this.doc = L.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
  }
  heightForGap(t, e) {
    let i = this.doc.lineAt(e).number - this.doc.lineAt(t).number + 1;
    return this.lineWrapping && (i += Math.max(0, Math.ceil((e - t - i * this.lineLength * 0.5) / this.lineLength))), this.lineHeight * i;
  }
  heightForLine(t) {
    return this.lineWrapping ? (1 + Math.max(0, Math.ceil((t - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
  }
  setDoc(t) {
    return this.doc = t, this;
  }
  mustRefreshForWrapping(t) {
    return Gr.indexOf(t) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(t) {
    let e = false;
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      s < 0 ? i++ : this.heightSamples[Math.floor(s * 10)] || (e = true, this.heightSamples[Math.floor(s * 10)] = true);
    }
    return e;
  }
  refresh(t, e, i, s, r, o) {
    let l = Gr.indexOf(t) > -1, a = Math.round(e) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = e, this.charWidth = i, this.textHeight = s, this.lineLength = r, a) {
      this.heightSamples = {};
      for (let h = 0; h < o.length; h++) {
        let c = o[h];
        c < 0 ? h++ : this.heightSamples[Math.floor(c * 10)] = true;
      }
    }
    return a;
  }
}
class of {
  constructor(t, e) {
    this.from = t, this.heights = e, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class kt {
  constructor(t, e, i, s, r) {
    this.from = t, this.length = e, this.top = i, this.height = s, this._content = r;
  }
  get type() {
    return typeof this._content == "number" ? et.Text : Array.isArray(this._content) ? this._content : this._content.type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    return this._content instanceof Yt ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  join(t) {
    let e = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(t._content) ? t._content : [t]);
    return new kt(this.from, this.length + t.length, this.top, this.height + t.height, e);
  }
}
var F = function(n) {
  return n[n.ByPos = 0] = "ByPos", n[n.ByHeight = 1] = "ByHeight", n[n.ByPosNoHeight = 2] = "ByPosNoHeight", n;
}(F || (F = {}));
const Ui = 1e-3;
class it {
  constructor(t, e, i = 2) {
    this.length = t, this.height = e, this.flags = i;
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(t) {
    this.flags = (t ? 2 : 0) | this.flags & -3;
  }
  setHeight(t) {
    this.height != t && (Math.abs(this.height - t) > Ui && (Ae = true), this.height = t);
  }
  replace(t, e, i) {
    return it.of(i);
  }
  decomposeLeft(t, e) {
    e.push(this);
  }
  decomposeRight(t, e) {
    e.push(this);
  }
  applyChanges(t, e, i, s) {
    let r = this, o = i.doc;
    for (let l = s.length - 1; l >= 0; l--) {
      let { fromA: a, toA: h, fromB: c, toB: f } = s[l], u = r.lineAt(a, F.ByPosNoHeight, i.setDoc(e), 0, 0), d = u.to >= h ? u : r.lineAt(h, F.ByPosNoHeight, i, 0, 0);
      for (f += d.to - h, h = d.to; l > 0 && u.from <= s[l - 1].toA; )
        a = s[l - 1].fromA, c = s[l - 1].fromB, l--, a < u.from && (u = r.lineAt(a, F.ByPosNoHeight, i, 0, 0));
      c += u.from - a, a = u.from;
      let p = _s.build(i.setDoc(o), t, c, f);
      r = en(r, r.replace(a, h, p));
    }
    return r.updateHeight(i, 0);
  }
  static empty() {
    return new ht(0, 0);
  }
  static of(t) {
    if (t.length == 1)
      return t[0];
    let e = 0, i = t.length, s = 0, r = 0;
    for (; ; )
      if (e == i)
        if (s > r * 2) {
          let l = t[e - 1];
          l.break ? t.splice(--e, 1, l.left, null, l.right) : t.splice(--e, 1, l.left, l.right), i += 1 + l.break, s -= l.size;
        } else if (r > s * 2) {
          let l = t[i];
          l.break ? t.splice(i, 1, l.left, null, l.right) : t.splice(i, 1, l.left, l.right), i += 2 + l.break, r -= l.size;
        } else
          break;
      else if (s < r) {
        let l = t[e++];
        l && (s += l.size);
      } else {
        let l = t[--i];
        l && (r += l.size);
      }
    let o = 0;
    return t[e - 1] == null ? (o = 1, e--) : t[e] == null && (o = 1, i++), new lf(it.of(t.slice(0, e)), o, it.of(t.slice(i)));
  }
}
function en(n, t) {
  return n == t ? n : (n.constructor != t.constructor && (Ae = true), t);
}
it.prototype.size = 1;
class Ql extends it {
  constructor(t, e, i) {
    super(t, e), this.deco = i;
  }
  blockAt(t, e, i, s) {
    return new kt(s, this.length, i, this.height, this.deco || 0);
  }
  lineAt(t, e, i, s, r) {
    return this.blockAt(0, i, s, r);
  }
  forEachLine(t, e, i, s, r, o) {
    t <= r + this.length && e >= r && o(this.blockAt(0, i, s, r));
  }
  updateHeight(t, e = 0, i = false, s) {
    return s && s.from <= e && s.more && this.setHeight(s.heights[s.index++]), this.outdated = false, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class ht extends Ql {
  constructor(t, e) {
    super(t, e, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(t, e, i, s) {
    return new kt(s, this.length, i, this.height, this.breaks);
  }
  replace(t, e, i) {
    let s = i[0];
    return i.length == 1 && (s instanceof ht || s instanceof G && s.flags & 4) && Math.abs(this.length - s.length) < 10 ? (s instanceof G ? s = new ht(s.length, this.height) : s.height = this.height, this.outdated || (s.outdated = false), s) : it.of(i);
  }
  updateHeight(t, e = 0, i = false, s) {
    return s && s.from <= e && s.more ? this.setHeight(s.heights[s.index++]) : (i || this.outdated) && this.setHeight(Math.max(this.widgetHeight, t.heightForLine(this.length - this.collapsed)) + this.breaks * t.lineHeight), this.outdated = false, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class G extends it {
  constructor(t) {
    super(t, 0);
  }
  heightMetrics(t, e) {
    let i = t.doc.lineAt(e).number, s = t.doc.lineAt(e + this.length).number, r = s - i + 1, o, l = 0;
    if (t.lineWrapping) {
      let a = Math.min(this.height, t.lineHeight * r);
      o = a / r, this.length > r + 1 && (l = (this.height - a) / (this.length - r - 1));
    } else
      o = this.height / r;
    return { firstLine: i, lastLine: s, perLine: o, perChar: l };
  }
  blockAt(t, e, i, s) {
    let { firstLine: r, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(e, s);
    if (e.lineWrapping) {
      let h = s + (t < e.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (t - i) / this.height)) * this.length)), c = e.doc.lineAt(h), f = l + c.length * a, u = Math.max(i, t - f / 2);
      return new kt(c.from, c.length, u, f, 0);
    } else {
      let h = Math.max(0, Math.min(o - r, Math.floor((t - i) / l))), { from: c, length: f } = e.doc.line(r + h);
      return new kt(c, f, i + l * h, l, 0);
    }
  }
  lineAt(t, e, i, s, r) {
    if (e == F.ByHeight)
      return this.blockAt(t, i, s, r);
    if (e == F.ByPosNoHeight) {
      let { from: d, to: p } = i.doc.lineAt(t);
      return new kt(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(i, r), h = i.doc.lineAt(t), c = l + h.length * a, f = h.number - o, u = s + l * f + a * (h.from - r - f);
    return new kt(h.from, h.length, Math.max(s, Math.min(u, s + this.height - c)), c, 0);
  }
  forEachLine(t, e, i, s, r, o) {
    t = Math.max(t, r), e = Math.min(e, r + this.length);
    let { firstLine: l, perLine: a, perChar: h } = this.heightMetrics(i, r);
    for (let c = t, f = s; c <= e; ) {
      let u = i.doc.lineAt(c);
      if (c == t) {
        let p = u.number - l;
        f += a * p + h * (t - r - p);
      }
      let d = a + h * u.length;
      o(new kt(u.from, u.length, f, d, 0)), f += d, c = u.to + 1;
    }
  }
  replace(t, e, i) {
    let s = this.length - e;
    if (s > 0) {
      let r = i[i.length - 1];
      r instanceof G ? i[i.length - 1] = new G(r.length + s) : i.push(null, new G(s - 1));
    }
    if (t > 0) {
      let r = i[0];
      r instanceof G ? i[0] = new G(t + r.length) : i.unshift(new G(t - 1), null);
    }
    return it.of(i);
  }
  decomposeLeft(t, e) {
    e.push(new G(t - 1), null);
  }
  decomposeRight(t, e) {
    e.push(null, new G(this.length - t - 1));
  }
  updateHeight(t, e = 0, i = false, s) {
    let r = e + this.length;
    if (s && s.from <= e + this.length && s.more) {
      let o = [], l = Math.max(e, s.from), a = -1;
      for (s.from > e && o.push(new G(s.from - e - 1).updateHeight(t, e)); l <= r && s.more; ) {
        let c = t.doc.lineAt(l).length;
        o.length && o.push(null);
        let f = s.heights[s.index++];
        a == -1 ? a = f : Math.abs(f - a) >= Ui && (a = -2);
        let u = new ht(c, f);
        u.outdated = false, o.push(u), l += c + 1;
      }
      l <= r && o.push(null, new G(r - l).updateHeight(t, l));
      let h = it.of(o);
      return (a < 0 || Math.abs(h.height - this.height) >= Ui || Math.abs(a - this.heightMetrics(t, e).perLine) >= Ui) && (Ae = true), en(this, h);
    } else
      (i || this.outdated) && (this.setHeight(t.heightForGap(e, e + this.length)), this.outdated = false);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class lf extends it {
  constructor(t, e, i) {
    super(t.length + e + i.length, t.height + i.height, e | (t.outdated || i.outdated ? 2 : 0)), this.left = t, this.right = i, this.size = t.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(t, e, i, s) {
    let r = i + this.left.height;
    return t < r ? this.left.blockAt(t, e, i, s) : this.right.blockAt(t, e, r, s + this.left.length + this.break);
  }
  lineAt(t, e, i, s, r) {
    let o = s + this.left.height, l = r + this.left.length + this.break, a = e == F.ByHeight ? t < o : t < l, h = a ? this.left.lineAt(t, e, i, s, r) : this.right.lineAt(t, e, i, o, l);
    if (this.break || (a ? h.to < l : h.from > l))
      return h;
    let c = e == F.ByPosNoHeight ? F.ByPosNoHeight : F.ByPos;
    return a ? h.join(this.right.lineAt(l, c, i, o, l)) : this.left.lineAt(l, c, i, s, r).join(h);
  }
  forEachLine(t, e, i, s, r, o) {
    let l = s + this.left.height, a = r + this.left.length + this.break;
    if (this.break)
      t < a && this.left.forEachLine(t, e, i, s, r, o), e >= a && this.right.forEachLine(t, e, i, l, a, o);
    else {
      let h = this.lineAt(a, F.ByPos, i, s, r);
      t < h.from && this.left.forEachLine(t, h.from - 1, i, s, r, o), h.to >= t && h.from <= e && o(h), e > h.to && this.right.forEachLine(h.to + 1, e, i, l, a, o);
    }
  }
  replace(t, e, i) {
    let s = this.left.length + this.break;
    if (e < s)
      return this.balanced(this.left.replace(t, e, i), this.right);
    if (t > this.left.length)
      return this.balanced(this.left, this.right.replace(t - s, e - s, i));
    let r = [];
    t > 0 && this.decomposeLeft(t, r);
    let o = r.length;
    for (let l of i)
      r.push(l);
    if (t > 0 && Xr(r, o - 1), e < this.length) {
      let l = r.length;
      this.decomposeRight(e, r), Xr(r, l);
    }
    return it.of(r);
  }
  decomposeLeft(t, e) {
    let i = this.left.length;
    if (t <= i)
      return this.left.decomposeLeft(t, e);
    e.push(this.left), this.break && (i++, t >= i && e.push(null)), t > i && this.right.decomposeLeft(t - i, e);
  }
  decomposeRight(t, e) {
    let i = this.left.length, s = i + this.break;
    if (t >= s)
      return this.right.decomposeRight(t - s, e);
    t < i && this.left.decomposeRight(t, e), this.break && t < s && e.push(null), e.push(this.right);
  }
  balanced(t, e) {
    return t.size > 2 * e.size || e.size > 2 * t.size ? it.of(this.break ? [t, null, e] : [t, e]) : (this.left = en(this.left, t), this.right = en(this.right, e), this.setHeight(t.height + e.height), this.outdated = t.outdated || e.outdated, this.size = t.size + e.size, this.length = t.length + this.break + e.length, this);
  }
  updateHeight(t, e = 0, i = false, s) {
    let { left: r, right: o } = this, l = e + r.length + this.break, a = null;
    return s && s.from <= e + r.length && s.more ? a = r = r.updateHeight(t, e, i, s) : r.updateHeight(t, e, i), s && s.from <= l + o.length && s.more ? a = o = o.updateHeight(t, l, i, s) : o.updateHeight(t, l, i), a ? this.balanced(r, o) : (this.height = this.left.height + this.right.height, this.outdated = false, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function Xr(n, t) {
  let e, i;
  n[t] == null && (e = n[t - 1]) instanceof G && (i = n[t + 1]) instanceof G && n.splice(t - 1, 3, new G(e.length + 1 + i.length));
}
const af = 5;
class _s {
  constructor(t, e) {
    this.pos = t, this.oracle = e, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = t;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(t, e) {
    if (this.lineStart > -1) {
      let i = Math.min(e, this.lineEnd), s = this.nodes[this.nodes.length - 1];
      s instanceof ht ? s.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new ht(i - this.pos, -1)), this.writtenTo = i, e > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = e;
  }
  point(t, e, i) {
    if (t < e || i.heightRelevant) {
      let s = i.widget ? i.widget.estimatedHeight : 0, r = i.widget ? i.widget.lineBreaks : 0;
      s < 0 && (s = this.oracle.lineHeight);
      let o = e - t;
      i.block ? this.addBlock(new Ql(o, s, i)) : (o || r || s >= af) && this.addLineDeco(s, r, o);
    } else
      e > t && this.span(t, e);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: t, to: e } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = t, this.lineEnd = e, this.writtenTo < t && ((this.writtenTo < t - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, t - 1)), this.nodes.push(null)), this.pos > t && this.nodes.push(new ht(this.pos - t, -1)), this.writtenTo = this.pos;
  }
  blankContent(t, e) {
    let i = new G(e - t);
    return this.oracle.doc.lineAt(t).to == e && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let t = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (t instanceof ht)
      return t;
    let e = new ht(0, -1);
    return this.nodes.push(e), e;
  }
  addBlock(t) {
    this.enterLine();
    let e = t.deco;
    e && e.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(t), this.writtenTo = this.pos = this.pos + t.length, e && e.endSide > 0 && (this.covering = t);
  }
  addLineDeco(t, e, i) {
    let s = this.ensureLine();
    s.length += i, s.collapsed += i, s.widgetHeight = Math.max(s.widgetHeight, t), s.breaks += e, this.writtenTo = this.pos = this.pos + i;
  }
  finish(t) {
    let e = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(e instanceof ht) && !this.isCovered ? this.nodes.push(new ht(0, -1)) : (this.writtenTo < this.pos || e == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = t;
    for (let s of this.nodes)
      s instanceof ht && s.updateHeight(this.oracle, i), i += s ? s.length : 1;
    return this.nodes;
  }
  static build(t, e, i, s) {
    let r = new _s(i, t);
    return B.spans(e, i, s, r, 0), r.finish(i);
  }
}
function hf(n, t, e) {
  let i = new cf();
  return B.compare(n, t, e, i, 0), i.changes;
}
class cf {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(t, e, i, s) {
    (t < e || i && i.heightRelevant || s && s.heightRelevant) && Ki(t, e, this.changes, 5);
  }
}
function ff(n, t) {
  let e = n.getBoundingClientRect(), i = n.ownerDocument, s = i.defaultView || window, r = Math.max(0, e.left), o = Math.min(s.innerWidth, e.right), l = Math.max(0, e.top), a = Math.min(s.innerHeight, e.bottom);
  for (let h = n.parentNode; h && h != i.body; )
    if (h.nodeType == 1) {
      let c = h, f = window.getComputedStyle(c);
      if ((c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth) && f.overflow != "visible") {
        let u = c.getBoundingClientRect();
        r = Math.max(r, u.left), o = Math.min(o, u.right), l = Math.max(l, u.top), a = Math.min(h == n.parentNode ? s.innerHeight : a, u.bottom);
      }
      h = f.position == "absolute" || f.position == "fixed" ? c.offsetParent : c.parentNode;
    } else if (h.nodeType == 11)
      h = h.host;
    else
      break;
  return { left: r - e.left, right: Math.max(r, o) - e.left, top: l - (e.top + t), bottom: Math.max(l, a) - (e.top + t) };
}
function uf(n) {
  let t = n.getBoundingClientRect(), e = n.ownerDocument.defaultView || window;
  return t.left < e.innerWidth && t.right > 0 && t.top < e.innerHeight && t.bottom > 0;
}
function df(n, t) {
  let e = n.getBoundingClientRect();
  return { left: 0, right: e.right - e.left, top: t, bottom: e.bottom - (e.top + t) };
}
class Pn {
  constructor(t, e, i, s) {
    this.from = t, this.to = e, this.size = i, this.displaySize = s;
  }
  static same(t, e) {
    if (t.length != e.length)
      return false;
    for (let i = 0; i < t.length; i++) {
      let s = t[i], r = e[i];
      if (s.from != r.from || s.to != r.to || s.size != r.size)
        return false;
    }
    return true;
  }
  draw(t, e) {
    return D.replace({ widget: new pf(this.displaySize * (e ? t.scaleY : t.scaleX), e) }).range(this.from, this.to);
  }
}
class pf extends Vt {
  constructor(t, e) {
    super(), this.size = t, this.vertical = e;
  }
  eq(t) {
    return t.size == this.size && t.vertical == this.vertical;
  }
  toDOM() {
    let t = document.createElement("div");
    return this.vertical ? t.style.height = this.size + "px" : (t.style.width = this.size + "px", t.style.height = "2px", t.style.display = "inline-block"), t;
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class Jr {
  constructor(t) {
    this.state = t, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = true, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = false, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Qr, this.scrollTarget = null, this.printing = false, this.mustMeasureContent = true, this.defaultTextDirection = H.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = false;
    let e = t.facet(Ys).some((i) => typeof i != "function" && i.class == "cm-lineWrapping");
    this.heightOracle = new rf(e), this.stateDeco = t.facet(ei).filter((i) => typeof i != "function"), this.heightMap = it.empty().applyChanges(this.stateDeco, L.empty, this.heightOracle.setDoc(t.doc), [new dt(0, 0, 0, t.doc.length)]);
    for (let i = 0; i < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); i++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = D.set(this.lineGaps.map((i) => i.draw(this, false))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let t = [this.viewport], { main: e } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let s = i ? e.head : e.anchor;
      if (!t.some(({ from: r, to: o }) => s >= r && s <= o)) {
        let { from: r, to: o } = this.lineBlockAt(s);
        t.push(new Oi(r, o));
      }
    }
    return this.viewports = t.sort((i, s) => i.from - s.from), this.updateScaler();
  }
  updateScaler() {
    let t = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? Qr : new Zs(this.heightOracle, this.heightMap, this.viewports), t.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (t) => {
      this.viewportLines.push(qe(t, this.scaler));
    });
  }
  update(t, e = null) {
    this.state = t.state;
    let i = this.stateDeco;
    this.stateDeco = this.state.facet(ei).filter((c) => typeof c != "function");
    let s = t.changedRanges, r = dt.extendWithRanges(s, hf(i, this.stateDeco, t ? t.changes : $.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    Yr(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, t.startState.doc, this.heightOracle.setDoc(this.state.doc), r), (this.heightMap.height != o || Ae) && (t.flags |= 2), l ? (this.scrollAnchorPos = t.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let a = r.length ? this.mapViewport(this.viewport, t.changes) : this.viewport;
    (e && (e.range.head < a.from || e.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, e));
    let h = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, t.flags |= this.updateForViewport(), (h || !t.changes.empty || t.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t.changes))), t.flags |= this.computeVisibleRanges(t.changes), e && (this.scrollTarget = e), !this.mustEnforceCursorAssoc && t.selectionSet && t.view.lineWrapping && t.state.selection.main.empty && t.state.selection.main.assoc && !t.state.facet(El) && (this.mustEnforceCursorAssoc = true);
  }
  measure(t) {
    let e = t.contentDOM, i = window.getComputedStyle(e), s = this.heightOracle, r = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? H.RTL : H.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(r), l = e.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = false;
    let h = 0, c = 0;
    if (l.width && l.height) {
      let { scaleX: v, scaleY: k } = ol(e, l);
      (v > 5e-3 && Math.abs(this.scaleX - v) > 5e-3 || k > 5e-3 && Math.abs(this.scaleY - k) > 5e-3) && (this.scaleX = v, this.scaleY = k, h |= 16, o = a = true);
    }
    let f = (parseInt(i.paddingTop) || 0) * this.scaleY, u = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != f || this.paddingBottom != u) && (this.paddingTop = f, this.paddingBottom = u, h |= 18), this.editorWidth != t.scrollDOM.clientWidth && (s.lineWrapping && (a = true), this.editorWidth = t.scrollDOM.clientWidth, h |= 16);
    let d = t.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != d && (this.scrollAnchorHeight = -1, this.scrollTop = d), this.scrolledToBottom = hl(t.scrollDOM);
    let p = (this.printing ? df : ff)(e, this.paddingTop), g = p.top - this.pixelViewport.top, m = p.bottom - this.pixelViewport.bottom;
    this.pixelViewport = p;
    let y = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (y != this.inView && (this.inView = y, y && (a = true)), !this.inView && !this.scrollTarget && !uf(t.dom))
      return 0;
    let x = l.width;
    if ((this.contentDOMWidth != x || this.editorHeight != t.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = t.scrollDOM.clientHeight, h |= 16), a) {
      let v = t.docView.measureVisibleLineHeights(this.viewport);
      if (s.mustRefreshForHeights(v) && (o = true), o || s.lineWrapping && Math.abs(x - this.contentDOMWidth) > s.charWidth) {
        let { lineHeight: k, charWidth: A, textHeight: E } = t.docView.measureTextSize();
        o = k > 0 && s.refresh(r, k, A, E, x / A, v), o && (t.docView.minWidth = 0, h |= 16);
      }
      g > 0 && m > 0 ? c = Math.max(g, m) : g < 0 && m < 0 && (c = Math.min(g, m)), Yr();
      for (let k of this.viewports) {
        let A = k.from == this.viewport.from ? v : t.docView.measureVisibleLineHeights(k);
        this.heightMap = (o ? it.empty().applyChanges(this.stateDeco, L.empty, this.heightOracle, [new dt(0, 0, 0, t.state.doc.length)]) : this.heightMap).updateHeight(s, 0, o, new of(k.from, A));
      }
      Ae && (h |= 2);
    }
    let M = !this.viewportIsAppropriate(this.viewport, c) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return M && (h & 2 && (h |= this.updateScaler()), this.viewport = this.getViewport(c, this.scrollTarget), h |= this.updateForViewport()), (h & 2 || M) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, t)), h |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = false, t.docView.enforceCursorAssoc()), h;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(t, e) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, t / 1e3 / 2)), s = this.heightMap, r = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new Oi(s.lineAt(o - i * 1e3, F.ByHeight, r, 0, 0).from, s.lineAt(l + (1 - i) * 1e3, F.ByHeight, r, 0, 0).to);
    if (e) {
      let { head: h } = e.range;
      if (h < a.from || h > a.to) {
        let c = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), f = s.lineAt(h, F.ByPos, r, 0, 0), u;
        e.y == "center" ? u = (f.top + f.bottom) / 2 - c / 2 : e.y == "start" || e.y == "nearest" && h < a.from ? u = f.top : u = f.bottom - c, a = new Oi(s.lineAt(u - 1e3 / 2, F.ByHeight, r, 0, 0).from, s.lineAt(u + c + 1e3 / 2, F.ByHeight, r, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(t, e) {
    let i = e.mapPos(t.from, -1), s = e.mapPos(t.to, 1);
    return new Oi(this.heightMap.lineAt(i, F.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(s, F.ByPos, this.heightOracle, 0, 0).to);
  }
  viewportIsAppropriate({ from: t, to: e }, i = 0) {
    if (!this.inView)
      return true;
    let { top: s } = this.heightMap.lineAt(t, F.ByPos, this.heightOracle, 0, 0), { bottom: r } = this.heightMap.lineAt(e, F.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (t == 0 || s <= o - Math.max(10, Math.min(-i, 250))) && (e == this.state.doc.length || r >= l + Math.max(10, Math.min(i, 250))) && s > o - 2 * 1e3 && r < l + 2 * 1e3;
  }
  mapLineGaps(t, e) {
    if (!t.length || e.empty)
      return t;
    let i = [];
    for (let s of t)
      e.touchesRange(s.from, s.to) || i.push(new Pn(e.mapPos(s.from), e.mapPos(s.to), s.size, s.displaySize));
    return i;
  }
  ensureLineGaps(t, e) {
    let i = this.heightOracle.lineWrapping, s = i ? 1e4 : 2e3, r = s >> 1, o = s << 1;
    if (this.defaultTextDirection != H.LTR && !i)
      return [];
    let l = [], a = (c, f, u, d) => {
      if (f - c < r)
        return;
      let p = this.state.selection.main, g = [p.from];
      p.empty || g.push(p.to);
      for (let y of g)
        if (y > c && y < f) {
          a(c, y - 10, u, d), a(y + 10, f, u, d);
          return;
        }
      let m = gf(t, (y) => y.from >= u.from && y.to <= u.to && Math.abs(y.from - c) < r && Math.abs(y.to - f) < r && !g.some((x) => y.from < x && y.to > x));
      if (!m) {
        if (f < u.to && e && i && e.visibleRanges.some((M) => M.from <= f && M.to >= f)) {
          let M = e.moveToLineBoundary(b.cursor(f), false, true).head;
          M > c && (f = M);
        }
        let y = this.gapSize(u, c, f, d), x = i || y < 2e6 ? y : 2e6;
        m = new Pn(c, f, y, x);
      }
      l.push(m);
    }, h = (c) => {
      if (c.length < o || c.type != et.Text)
        return;
      let f = mf(c.from, c.to, this.stateDeco);
      if (f.total < o)
        return;
      let u = this.scrollTarget ? this.scrollTarget.range.head : null, d, p;
      if (i) {
        let g = s / this.heightOracle.lineLength * this.heightOracle.lineHeight, m, y;
        if (u != null) {
          let x = Bi(f, u), M = ((this.visibleBottom - this.visibleTop) / 2 + g) / c.height;
          m = x - M, y = x + M;
        } else
          m = (this.visibleTop - c.top - g) / c.height, y = (this.visibleBottom - c.top + g) / c.height;
        d = Ti(f, m), p = Ti(f, y);
      } else {
        let g = f.total * this.heightOracle.charWidth, m = s * this.heightOracle.charWidth, y = 0;
        if (g > 2e6)
          for (let A of t)
            A.from >= c.from && A.from < c.to && A.size != A.displaySize && A.from * this.heightOracle.charWidth + y < this.pixelViewport.left && (y = A.size - A.displaySize);
        let x = this.pixelViewport.left + y, M = this.pixelViewport.right + y, v, k;
        if (u != null) {
          let A = Bi(f, u), E = ((M - x) / 2 + m) / g;
          v = A - E, k = A + E;
        } else
          v = (x - m) / g, k = (M + m) / g;
        d = Ti(f, v), p = Ti(f, k);
      }
      d > c.from && a(c.from, d, c, f), p < c.to && a(p, c.to, c, f);
    };
    for (let c of this.viewportLines)
      Array.isArray(c.type) ? c.type.forEach(h) : h(c);
    return l;
  }
  gapSize(t, e, i, s) {
    let r = Bi(s, i) - Bi(s, e);
    return this.heightOracle.lineWrapping ? t.height * r : s.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(t) {
    Pn.same(t, this.lineGaps) || (this.lineGaps = t, this.lineGapDeco = D.set(t.map((e) => e.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(t) {
    let e = this.stateDeco;
    this.lineGaps.length && (e = e.concat(this.lineGapDeco));
    let i = [];
    B.spans(e, this.viewport.from, this.viewport.to, { span(r, o) {
      i.push({ from: r, to: o });
    }, point() {
    } }, 20);
    let s = 0;
    if (i.length != this.visibleRanges.length)
      s = 12;
    else
      for (let r = 0; r < i.length && !(s & 8); r++) {
        let o = this.visibleRanges[r], l = i[r];
        (o.from != l.from || o.to != l.to) && (s |= 4, t && t.mapPos(o.from, -1) == l.from && t.mapPos(o.to, 1) == l.to || (s |= 8));
      }
    return this.visibleRanges = i, s;
  }
  lineBlockAt(t) {
    return t >= this.viewport.from && t <= this.viewport.to && this.viewportLines.find((e) => e.from <= t && e.to >= t) || qe(this.heightMap.lineAt(t, F.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(t) {
    return t >= this.viewportLines[0].top && t <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((e) => e.top <= t && e.bottom >= t) || qe(this.heightMap.lineAt(this.scaler.fromDOM(t), F.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(t) {
    let e = this.lineBlockAtHeight(t + 8);
    return e.from >= this.viewport.from || this.viewportLines[0].top - t > 200 ? e : this.viewportLines[0];
  }
  elementAtHeight(t) {
    return qe(this.heightMap.blockAt(this.scaler.fromDOM(t), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Oi {
  constructor(t, e) {
    this.from = t, this.to = e;
  }
}
function mf(n, t, e) {
  let i = [], s = n, r = 0;
  return B.spans(e, n, t, { span() {
  }, point(o, l) {
    o > s && (i.push({ from: s, to: o }), r += o - s), s = l;
  } }, 20), s < t && (i.push({ from: s, to: t }), r += t - s), { total: r, ranges: i };
}
function Ti({ total: n, ranges: t }, e) {
  if (e <= 0)
    return t[0].from;
  if (e >= 1)
    return t[t.length - 1].to;
  let i = Math.floor(n * e);
  for (let s = 0; ; s++) {
    let { from: r, to: o } = t[s], l = o - r;
    if (i <= l)
      return r + i;
    i -= l;
  }
}
function Bi(n, t) {
  let e = 0;
  for (let { from: i, to: s } of n.ranges) {
    if (t <= s) {
      e += t - i;
      break;
    }
    e += s - i;
  }
  return e / n.total;
}
function gf(n, t) {
  for (let e of n)
    if (t(e))
      return e;
}
const Qr = { toDOM(n) {
  return n;
}, fromDOM(n) {
  return n;
}, scale: 1, eq(n) {
  return n == this;
} };
class Zs {
  constructor(t, e, i) {
    let s = 0, r = 0, o = 0;
    this.viewports = i.map(({ from: l, to: a }) => {
      let h = e.lineAt(l, F.ByPos, t, 0, 0).top, c = e.lineAt(a, F.ByPos, t, 0, 0).bottom;
      return s += c - h, { from: l, to: a, top: h, bottom: c, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - s) / (e.height - s);
    for (let l of this.viewports)
      l.domTop = o + (l.top - r) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), r = l.bottom;
  }
  toDOM(t) {
    for (let e = 0, i = 0, s = 0; ; e++) {
      let r = e < this.viewports.length ? this.viewports[e] : null;
      if (!r || t < r.top)
        return s + (t - i) * this.scale;
      if (t <= r.bottom)
        return r.domTop + (t - r.top);
      i = r.bottom, s = r.domBottom;
    }
  }
  fromDOM(t) {
    for (let e = 0, i = 0, s = 0; ; e++) {
      let r = e < this.viewports.length ? this.viewports[e] : null;
      if (!r || t < r.domTop)
        return i + (t - s) / this.scale;
      if (t <= r.domBottom)
        return r.top + (t - r.domTop);
      i = r.bottom, s = r.domBottom;
    }
  }
  eq(t) {
    return t instanceof Zs ? this.scale == t.scale && this.viewports.length == t.viewports.length && this.viewports.every((e, i) => e.from == t.viewports[i].from && e.to == t.viewports[i].to) : false;
  }
}
function qe(n, t) {
  if (t.scale == 1)
    return n;
  let e = t.toDOM(n.top), i = t.toDOM(n.bottom);
  return new kt(n.from, n.length, e, i - e, Array.isArray(n._content) ? n._content.map((s) => qe(s, t)) : n._content);
}
const Li = S.define({ combine: (n) => n.join(" ") }), vs = S.define({ combine: (n) => n.indexOf(true) > -1 }), Ss = Gt.newName(), _l = Gt.newName(), Zl = Gt.newName(), ta = { "&light": "." + _l, "&dark": "." + Zl };
function ks(n, t, e) {
  return new Gt(t, { finish(i) {
    return /&/.test(i) ? i.replace(/&\w*/, (s) => {
      if (s == "&")
        return n;
      if (!e || !e[s])
        throw new RangeError(`Unsupported selector: ${s}`);
      return e[s];
    }) : n + " " + i;
  } });
}
const yf = ks("." + Ss, { "&": { position: "relative !important", boxSizing: "border-box", "&.cm-focused": { outline: "1px dotted #212121" }, display: "flex !important", flexDirection: "column" }, ".cm-scroller": { display: "flex !important", alignItems: "flex-start !important", fontFamily: "monospace", lineHeight: 1.4, height: "100%", overflowX: "auto", position: "relative", zIndex: 0, overflowAnchor: "none" }, ".cm-content": { margin: 0, flexGrow: 2, flexShrink: 0, display: "block", whiteSpace: "pre", wordWrap: "normal", boxSizing: "border-box", minHeight: "100%", padding: "4px 0", outline: "none", "&[contenteditable=true]": { WebkitUserModify: "read-write-plaintext-only" } }, ".cm-lineWrapping": { whiteSpace_fallback: "pre-wrap", whiteSpace: "break-spaces", wordBreak: "break-word", overflowWrap: "anywhere", flexShrink: 1 }, "&light .cm-content": { caretColor: "black" }, "&dark .cm-content": { caretColor: "white" }, ".cm-line": { display: "block", padding: "0 2px 0 6px" }, ".cm-layer": { position: "absolute", left: 0, top: 0, contain: "size style", "& > *": { position: "absolute" } }, "&light .cm-selectionBackground": { background: "#d9d9d9" }, "&dark .cm-selectionBackground": { background: "#222" }, "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#d7d4f0" }, "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#233" }, ".cm-cursorLayer": { pointerEvents: "none" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer": { animation: "steps(1) cm-blink 1.2s infinite" }, "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} }, ".cm-cursor, .cm-dropCursor": { borderLeft: "1.2px solid black", marginLeft: "-0.6px", pointerEvents: "none" }, ".cm-cursor": { display: "none" }, "&dark .cm-cursor": { borderLeftColor: "#ddd" }, ".cm-dropCursor": { position: "absolute" }, "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": { display: "block" }, ".cm-iso": { unicodeBidi: "isolate" }, ".cm-announced": { position: "fixed", top: "-10000px" }, "@media print": { ".cm-announced": { display: "none" } }, "&light .cm-activeLine": { backgroundColor: "#cceeff44" }, "&dark .cm-activeLine": { backgroundColor: "#99eeff33" }, "&light .cm-specialChar": { color: "red" }, "&dark .cm-specialChar": { color: "#f78" }, ".cm-gutters": { flexShrink: 0, display: "flex", height: "100%", boxSizing: "border-box", insetInlineStart: 0, zIndex: 200 }, "&light .cm-gutters": { backgroundColor: "#f5f5f5", color: "#6c6c6c", borderRight: "1px solid #ddd" }, "&dark .cm-gutters": { backgroundColor: "#333338", color: "#ccc" }, ".cm-gutter": { display: "flex !important", flexDirection: "column", flexShrink: 0, boxSizing: "border-box", minHeight: "100%", overflow: "hidden" }, ".cm-gutterElement": { boxSizing: "border-box" }, ".cm-lineNumbers .cm-gutterElement": { padding: "0 3px 0 5px", minWidth: "20px", textAlign: "right", whiteSpace: "nowrap" }, "&light .cm-activeLineGutter": { backgroundColor: "#e2f2ff" }, "&dark .cm-activeLineGutter": { backgroundColor: "#222227" }, ".cm-panels": { boxSizing: "border-box", position: "sticky", left: 0, right: 0, zIndex: 300 }, "&light .cm-panels": { backgroundColor: "#f5f5f5", color: "black" }, "&light .cm-panels-top": { borderBottom: "1px solid #ddd" }, "&light .cm-panels-bottom": { borderTop: "1px solid #ddd" }, "&dark .cm-panels": { backgroundColor: "#333338", color: "white" }, ".cm-tab": { display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }, ".cm-widgetBuffer": { verticalAlign: "text-top", height: "1em", width: 0, display: "inline" }, ".cm-placeholder": { color: "#888", display: "inline-block", verticalAlign: "top" }, ".cm-highlightSpace": { backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)", backgroundPosition: "center" }, ".cm-highlightTab": { backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`, backgroundSize: "auto 100%", backgroundPosition: "right 90%", backgroundRepeat: "no-repeat" }, ".cm-trailingSpace": { backgroundColor: "#ff332255" }, ".cm-button": { verticalAlign: "middle", color: "inherit", fontSize: "70%", padding: ".2em 1em", borderRadius: "1px" }, "&light .cm-button": { backgroundImage: "linear-gradient(#eff1f5, #d9d9df)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)" } }, "&dark .cm-button": { backgroundImage: "linear-gradient(#393939, #111)", border: "1px solid #888", "&:active": { backgroundImage: "linear-gradient(#111, #333)" } }, ".cm-textfield": { verticalAlign: "middle", color: "inherit", fontSize: "70%", border: "1px solid silver", padding: ".2em .5em" }, "&light .cm-textfield": { backgroundColor: "white" }, "&dark .cm-textfield": { border: "1px solid #555", backgroundColor: "inherit" } }, ta), bf = { childList: true, characterData: true, subtree: true, attributes: true, characterDataOldValue: true }, In = w.ie && w.ie_version <= 11;
class xf {
  constructor(t) {
    this.view = t, this.active = false, this.editContext = null, this.selectionRange = new ec(), this.selectionChanged = false, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = false, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = t.contentDOM, this.observer = new MutationObserver((e) => {
      for (let i of e)
        this.queue.push(i);
      (w.ie && w.ie_version <= 11 || w.ios && t.composing) && e.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && t.constructor.EDIT_CONTEXT !== false && !(w.chrome && w.chrome_version < 126) && (this.editContext = new vf(t), t.state.facet(Et) && (t.contentDOM.editContext = this.editContext.editContext)), In && (this.onCharData = (e) => {
      this.queue.push({ target: e.target, type: "characterData", oldValue: e.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
      var e;
      ((e = this.view.docView) === null || e === void 0 ? void 0 : e.lastUpdate) < Date.now() - 75 && this.onResize();
    }), this.resizeScroll.observe(t.scrollDOM)), this.addWindowListeners(this.win = t.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((e) => {
      this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), e.length > 0 && e[e.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
    }, { threshold: [0, 1e-3] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((e) => {
      e.length > 0 && e[e.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
    }, {})), this.listenForScroll(), this.readSelectionRange();
  }
  onScrollChanged(t) {
    this.view.inputState.runHandlers("scroll", t), this.intersecting && this.view.measure();
  }
  onScroll(t) {
    this.intersecting && this.flush(false), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(t);
  }
  onResize() {
    this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
      this.resizeTimeout = -1, this.view.requestMeasure();
    }, 50));
  }
  onPrint(t) {
    (t.type == "change" || !t.type) && !t.matches || (this.view.viewState.printing = true, this.view.measure(), setTimeout(() => {
      this.view.viewState.printing = false, this.view.requestMeasure();
    }, 500));
  }
  updateGaps(t) {
    if (this.gapIntersection && (t.length != this.gaps.length || this.gaps.some((e, i) => e != t[i]))) {
      this.gapIntersection.disconnect();
      for (let e of t)
        this.gapIntersection.observe(e);
      this.gaps = t;
    }
  }
  onSelectionChange(t) {
    let e = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey)
      return;
    let { view: i } = this, s = this.selectionRange;
    if (i.state.facet(Et) ? i.root.activeElement != this.dom : !$i(this.dom, s))
      return;
    let r = s.anchorNode && i.docView.nearest(s.anchorNode);
    if (r && r.ignoreEvent(t)) {
      e || (this.selectionChanged = false);
      return;
    }
    (w.ie && w.ie_version <= 11 || w.android && w.chrome) && !i.state.selection.main.empty && s.focusNode && Ge(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset) ? this.flushSoon() : this.flush(false);
  }
  readSelectionRange() {
    let { view: t } = this, e = ti(t.root);
    if (!e)
      return false;
    let i = w.safari && t.root.nodeType == 11 && t.root.activeElement == this.dom && wf(this.view, e) || e;
    if (!i || this.selectionRange.eq(i))
      return false;
    let s = $i(this.dom, i);
    return s && !this.selectionChanged && t.inputState.lastFocusTime > Date.now() - 200 && t.inputState.lastTouchTime < Date.now() - 300 && nc(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, t.docView.updateSelection(), false) : (this.selectionRange.setRange(i), s && (this.selectionChanged = true), true);
  }
  setSelectionRange(t, e) {
    this.selectionRange.set(t.node, t.offset, e.node, e.offset), this.selectionChanged = false;
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let t = 0, e = null;
    for (let i = this.dom; i; )
      if (i.nodeType == 1)
        !e && t < this.scrollTargets.length && this.scrollTargets[t] == i ? t++ : e || (e = this.scrollTargets.slice(0, t)), e && e.push(i), i = i.assignedSlot || i.parentNode;
      else if (i.nodeType == 11)
        i = i.host;
      else
        break;
    if (t < this.scrollTargets.length && !e && (e = this.scrollTargets.slice(0, t)), e) {
      for (let i of this.scrollTargets)
        i.removeEventListener("scroll", this.onScroll);
      for (let i of this.scrollTargets = e)
        i.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(t) {
    if (!this.active)
      return t();
    try {
      return this.stop(), t();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active || (this.observer.observe(this.dom, bf), In && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = true);
  }
  stop() {
    this.active && (this.active = false, this.observer.disconnect(), In && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  clear() {
    this.processRecords(), this.queue.length = 0, this.selectionChanged = false;
  }
  delayAndroidKey(t, e) {
    var i;
    if (!this.delayedAndroidKey) {
      let s = () => {
        let r = this.delayedAndroidKey;
        r && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = r.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && r.force && be(this.dom, r.key, r.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(s);
    }
    (!this.delayedAndroidKey || t == "Enter") && (this.delayedAndroidKey = { key: t, keyCode: e, force: this.lastChange < Date.now() - 50 || !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force) });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
  }
  flushSoon() {
    this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
      this.delayedFlush = -1, this.flush();
    }));
  }
  forceFlush() {
    this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
  }
  pendingRecords() {
    for (let t of this.observer.takeRecords())
      this.queue.push(t);
    return this.queue;
  }
  processRecords() {
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let e = -1, i = -1, s = false;
    for (let r of t) {
      let o = this.readMutation(r);
      o && (o.typeOver && (s = true), e == -1 ? { from: e, to: i } = o : (e = Math.min(o.from, e), i = Math.max(o.to, i)));
    }
    return { from: e, to: i, typeOver: s };
  }
  readChange() {
    let { from: t, to: e, typeOver: i } = this.processRecords(), s = this.selectionChanged && $i(this.dom, this.selectionRange);
    if (t < 0 && !s)
      return null;
    t > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = false;
    let r = new Nc(this.view, t, e, i);
    return this.view.docView.domChanged = { newSel: r.newSel ? r.newSel.main : null }, r;
  }
  flush(t = true) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return false;
    t && this.readSelectionRange();
    let e = this.readChange();
    if (!e)
      return this.view.requestMeasure(), false;
    let i = this.view.state, s = ql(this.view, e);
    return this.view.state == i && (e.domChanged || e.newSel && !e.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), s;
  }
  readMutation(t) {
    let e = this.view.docView.nearest(t.target);
    if (!e || e.ignoreMutation(t))
      return null;
    if (e.markDirty(t.type == "attributes"), t.type == "attributes" && (e.flags |= 4), t.type == "childList") {
      let i = _r(e, t.previousSibling || t.target.previousSibling, -1), s = _r(e, t.nextSibling || t.target.nextSibling, 1);
      return { from: i ? e.posAfter(i) : e.posAtStart, to: s ? e.posBefore(s) : e.posAtEnd, typeOver: false };
    } else
      return t.type == "characterData" ? { from: e.posAtStart, to: e.posAtEnd, typeOver: t.target.nodeValue == t.oldValue } : null;
  }
  setWindow(t) {
    t != this.win && (this.removeWindowListeners(this.win), this.win = t, this.addWindowListeners(this.win));
  }
  addWindowListeners(t) {
    t.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : t.addEventListener("beforeprint", this.onPrint), t.addEventListener("scroll", this.onScroll), t.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(t) {
    t.removeEventListener("scroll", this.onScroll), t.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : t.removeEventListener("beforeprint", this.onPrint), t.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(t) {
    this.editContext && (this.editContext.update(t), t.startState.facet(Et) != t.state.facet(Et) && (t.view.contentDOM.editContext = t.state.facet(Et) ? this.editContext.editContext : null));
  }
  destroy() {
    var t, e, i;
    this.stop(), (t = this.intersection) === null || t === void 0 || t.disconnect(), (e = this.gapIntersection) === null || e === void 0 || e.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
    for (let s of this.scrollTargets)
      s.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function _r(n, t, e) {
  for (; t; ) {
    let i = N.get(t);
    if (i && i.parent == n)
      return i;
    let s = t.parentNode;
    t = s != n.dom ? s : e > 0 ? t.nextSibling : t.previousSibling;
  }
  return null;
}
function Zr(n, t) {
  let e = t.startContainer, i = t.startOffset, s = t.endContainer, r = t.endOffset, o = n.docView.domAtPos(n.state.selection.main.anchor);
  return Ge(o.node, o.offset, s, r) && ([e, i, s, r] = [s, r, e, i]), { anchorNode: e, anchorOffset: i, focusNode: s, focusOffset: r };
}
function wf(n, t) {
  if (t.getComposedRanges) {
    let s = t.getComposedRanges(n.root)[0];
    if (s)
      return Zr(n, s);
  }
  let e = null;
  function i(s) {
    s.preventDefault(), s.stopImmediatePropagation(), e = s.getTargetRanges()[0];
  }
  return n.contentDOM.addEventListener("beforeinput", i, true), n.dom.ownerDocument.execCommand("indent"), n.contentDOM.removeEventListener("beforeinput", i, true), e ? Zr(n, e) : null;
}
class vf {
  constructor(t) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(t.state);
    let e = this.editContext = new window.EditContext({ text: t.state.doc.sliceString(this.from, this.to), selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, t.state.selection.main.anchor))), selectionEnd: this.toContextPos(t.state.selection.main.head) });
    this.handlers.textupdate = (i) => {
      let s = t.state.selection.main, { anchor: r, head: o } = s, l = this.toEditorPos(i.updateRangeStart), a = this.toEditorPos(i.updateRangeEnd);
      t.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i.updateRangeStart, editorBase: l, drifted: false });
      let h = { from: l, to: a, insert: L.of(i.text.split(`
`)) };
      if (h.from == this.from && r < this.from ? h.from = r : h.to == this.to && r > this.to && (h.to = r), h.from == h.to && !h.insert.length) {
        let c = b.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        c.main.eq(s) || t.dispatch({ selection: c, userEvent: "select" });
        return;
      }
      if ((w.mac || w.android) && h.from == o - 1 && /^\. ?$/.test(i.text) && t.contentDOM.getAttribute("autocorrect") == "off" && (h = { from: l, to: a, insert: L.of([i.text.replace(".", " ")]) }), this.pendingContextChange = h, !t.state.readOnly) {
        let c = this.to - this.from + (h.to - h.from + h.insert.length);
        Qs(t, h, b.single(this.toEditorPos(i.selectionStart, c), this.toEditorPos(i.selectionEnd, c)));
      }
      this.pendingContextChange && (this.revertPending(t.state), this.setSelection(t.state));
    }, this.handlers.characterboundsupdate = (i) => {
      let s = [], r = null;
      for (let o = this.toEditorPos(i.rangeStart), l = this.toEditorPos(i.rangeEnd); o < l; o++) {
        let a = t.coordsForChar(o);
        r = a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top) || r || new DOMRect(), s.push(r);
      }
      e.updateCharacterBounds(i.rangeStart, s);
    }, this.handlers.textformatupdate = (i) => {
      let s = [];
      for (let r of i.getTextFormats()) {
        let o = r.underlineStyle, l = r.underlineThickness;
        if (o != "None" && l != "None") {
          let a = this.toEditorPos(r.rangeStart), h = this.toEditorPos(r.rangeEnd);
          if (a < h) {
            let c = `text-decoration: underline ${o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""}${l == "Thin" ? 1 : 2}px`;
            s.push(D.mark({ attributes: { style: c } }).range(a, h));
          }
        }
      }
      t.dispatch({ effects: Il.of(D.set(s)) });
    }, this.handlers.compositionstart = () => {
      t.inputState.composing < 0 && (t.inputState.composing = 0, t.inputState.compositionFirstChange = true);
    }, this.handlers.compositionend = () => {
      if (t.inputState.composing = -1, t.inputState.compositionFirstChange = null, this.composing) {
        let { drifted: i } = this.composing;
        this.composing = null, i && this.reset(t.state);
      }
    };
    for (let i in this.handlers)
      e.addEventListener(i, this.handlers[i]);
    this.measureReq = { read: (i) => {
      this.editContext.updateControlBounds(i.contentDOM.getBoundingClientRect());
      let s = ti(i.root);
      s && s.rangeCount && this.editContext.updateSelectionBounds(s.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(t) {
    let e = 0, i = false, s = this.pendingContextChange;
    return t.changes.iterChanges((r, o, l, a, h) => {
      if (i)
        return;
      let c = h.length - (o - r);
      if (s && o >= s.to)
        if (s.from == r && s.to == o && s.insert.eq(h)) {
          s = this.pendingContextChange = null, e += c, this.to += c;
          return;
        } else
          s = null, this.revertPending(t.state);
      if (r += e, o += e, o <= this.from)
        this.from += c, this.to += c;
      else if (r < this.to) {
        if (r < this.from || o > this.to || this.to - this.from + h.length > 3e4) {
          i = true;
          return;
        }
        this.editContext.updateText(this.toContextPos(r), this.toContextPos(o), h.toString()), this.to += c;
      }
      e += c;
    }), s && !i && this.revertPending(t.state), !i;
  }
  update(t) {
    let e = this.pendingContextChange, i = t.startState.selection.main;
    this.composing && (this.composing.drifted || !t.changes.touchesRange(i.from, i.to) && t.transactions.some((s) => !s.isUserEvent("input.type") && s.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = true, this.composing.editorBase = t.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(t) || !this.rangeIsValid(t.state) ? (this.pendingContextChange = null, this.reset(t.state)) : (t.docChanged || t.selectionSet || e) && this.setSelection(t.state), (t.geometryChanged || t.docChanged || t.selectionSet) && t.view.requestMeasure(this.measureReq);
  }
  resetRange(t) {
    let { head: e } = t.selection.main;
    this.from = Math.max(0, e - 1e4), this.to = Math.min(t.doc.length, e + 1e4);
  }
  reset(t) {
    this.resetRange(t), this.editContext.updateText(0, this.editContext.text.length, t.doc.sliceString(this.from, this.to)), this.setSelection(t);
  }
  revertPending(t) {
    let e = this.pendingContextChange;
    this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(e.from), this.toContextPos(e.from + e.insert.length), t.doc.sliceString(e.from, e.to));
  }
  setSelection(t) {
    let { main: e } = t.selection, i = this.toContextPos(Math.max(this.from, Math.min(this.to, e.anchor))), s = this.toContextPos(e.head);
    (this.editContext.selectionStart != i || this.editContext.selectionEnd != s) && this.editContext.updateSelection(i, s);
  }
  rangeIsValid(t) {
    let { head: e } = t.selection.main;
    return !(this.from > 0 && e - this.from < 500 || this.to < t.doc.length && this.to - e < 500 || this.to - this.from > 1e4 * 3);
  }
  toEditorPos(t, e = this.to - this.from) {
    t = Math.min(t, e);
    let i = this.composing;
    return i && i.drifted ? i.editorBase + (t - i.contextBase) : t + this.from;
  }
  toContextPos(t) {
    let e = this.composing;
    return e && e.drifted ? e.contextBase + (t - e.editorBase) : t - this.from;
  }
  destroy() {
    for (let t in this.handlers)
      this.editContext.removeEventListener(t, this.handlers[t]);
  }
}
class C {
  get state() {
    return this.viewState.state;
  }
  get viewport() {
    return this.viewState.viewport;
  }
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  get inView() {
    return this.viewState.inView;
  }
  get composing() {
    return this.inputState.composing > 0;
  }
  get compositionStarted() {
    return this.inputState.composing >= 0;
  }
  get root() {
    return this._root;
  }
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  constructor(t = {}) {
    var e;
    this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = false, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), t.parent && t.parent.appendChild(this.dom);
    let { dispatch: i } = t;
    this.dispatchTransactions = t.dispatchTransactions || i && ((s) => s.forEach((r) => i(r, this))) || ((s) => this.update(s)), this.dispatch = this.dispatch.bind(this), this._root = t.root || ic(t.parent) || document, this.viewState = new Jr(t.state || R.create(t)), t.scrollTo && t.scrollTo.is(Mi) && (this.viewState.scrollTarget = t.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Ve).map((s) => new Ln(s));
    for (let s of this.plugins)
      s.update(this);
    this.observer = new xf(this), this.inputState = new zc(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Lr(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((e = document.fonts) === null || e === void 0) && e.ready && document.fonts.ready.then(() => this.requestMeasure());
  }
  dispatch(...t) {
    let e = t.length == 1 && t[0] instanceof K ? t : t.length == 1 && Array.isArray(t[0]) ? t[0] : [this.state.update(...t)];
    this.dispatchTransactions(e, this);
  }
  update(t) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let e = false, i = false, s, r = this.state;
    for (let u of t) {
      if (u.startState != r)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      r = u.state;
    }
    if (this.destroyed) {
      this.viewState.state = r;
      return;
    }
    let o = this.hasFocus, l = 0, a = null;
    t.some((u) => u.annotation(Yl)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = Xl(r, o), a || (l = 1));
    let h = this.observer.delayedAndroidKey, c = null;
    if (h ? (this.observer.clearDelayedAndroidKey(), c = this.observer.readChange(), (c && !this.state.doc.eq(r.doc) || !this.state.selection.eq(r.selection)) && (c = null)) : this.observer.clear(), r.facet(R.phrases) != this.state.facet(R.phrases))
      return this.setState(r);
    s = tn.create(this, r, t), s.flags |= l;
    let f = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of t) {
        if (f && (f = f.map(u.changes)), u.scrollIntoView) {
          let { main: d } = u.state.selection;
          f = new xe(d.empty ? d : b.cursor(d.head, d.head > d.anchor ? -1 : 1));
        }
        for (let d of u.effects)
          d.is(Mi) && (f = d.value.clip(this.state));
      }
      this.viewState.update(s, f), this.bidiCache = nn.update(this.bidiCache, s.changes), s.empty || (this.updatePlugins(s), this.inputState.update(s)), e = this.docView.update(s), this.state.facet(We) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(t), this.docView.updateSelection(e, t.some((u) => u.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (s.startState.facet(Li) != s.state.facet(Li) && (this.viewState.mustMeasureContent = true), (e || i || f || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), e && this.docViewUpdate(), !s.empty)
      for (let u of this.state.facet(ys))
        try {
          u(s);
        } catch (d) {
          ot(this.state, d, "update listener");
        }
    (a || c) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), c && !ql(this, c) && h.force && be(this.contentDOM, h.key, h.keyCode);
    });
  }
  setState(t) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
    if (this.destroyed) {
      this.viewState.state = t;
      return;
    }
    this.updateState = 2;
    let e = this.hasFocus;
    try {
      for (let i of this.plugins)
        i.destroy(this);
      this.viewState = new Jr(t), this.plugins = t.facet(Ve).map((i) => new Ln(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView.destroy(), this.docView = new Lr(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    e && this.focus(), this.requestMeasure();
  }
  updatePlugins(t) {
    let e = t.startState.facet(Ve), i = t.state.facet(Ve);
    if (e != i) {
      let s = [];
      for (let r of i) {
        let o = e.indexOf(r);
        if (o < 0)
          s.push(new Ln(r));
        else {
          let l = this.plugins[o];
          l.mustUpdate = t, s.push(l);
        }
      }
      for (let r of this.plugins)
        r.mustUpdate != t && r.destroy(this);
      this.plugins = s, this.pluginMap.clear();
    } else
      for (let s of this.plugins)
        s.mustUpdate = t;
    for (let s = 0; s < this.plugins.length; s++)
      this.plugins[s].update(this);
    e != i && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let t of this.plugins) {
      let e = t.value;
      if (e && e.docViewUpdate)
        try {
          e.docViewUpdate(this);
        } catch (i) {
          ot(this.state, i, "doc view update listener");
        }
    }
  }
  measure(t = true) {
    if (this.destroyed)
      return;
    if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
      this.measureScheduled = -1, this.requestMeasure();
      return;
    }
    this.measureScheduled = 0, t && this.observer.forceFlush();
    let e = null, i = this.scrollDOM, s = i.scrollTop * this.scaleY, { scrollAnchorPos: r, scrollAnchorHeight: o } = this.viewState;
    Math.abs(s - this.viewState.scrollTop) > 1 && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (o < 0)
          if (hl(i))
            r = -1, o = this.viewState.heightMap.height;
          else {
            let d = this.viewState.scrollAnchorAt(s);
            r = d.from, o = d.top;
          }
        this.updateState = 1;
        let a = this.viewState.measure(this);
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null)
          break;
        if (l > 5) {
          console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
          break;
        }
        let h = [];
        a & 4 || ([this.measureRequests, h] = [h, this.measureRequests]);
        let c = h.map((d) => {
          try {
            return d.read(this);
          } catch (p) {
            return ot(this.state, p), to;
          }
        }), f = tn.create(this, this.state, []), u = false;
        f.flags |= a, e ? e.flags |= a : e = f, this.updateState = 2, f.empty || (this.updatePlugins(f), this.inputState.update(f), this.updateAttrs(), u = this.docView.update(f), u && this.docViewUpdate());
        for (let d = 0; d < h.length; d++)
          if (c[d] != to)
            try {
              let p = h[d];
              p.write && p.write(c[d], this);
            } catch (p) {
              ot(this.state, p);
            }
        if (u && this.docView.updateSelection(true), !f.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, o = -1;
              continue;
            } else {
              let p = (r < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(r).top) - o;
              if (p > 1 || p < -1) {
                s = s + p, i.scrollTop = s / this.scaleY, o = -1;
                continue;
              }
            }
          break;
        }
      }
    } finally {
      this.updateState = 0, this.measureScheduled = -1;
    }
    if (e && !e.empty)
      for (let l of this.state.facet(ys))
        l(e);
  }
  get themeClasses() {
    return Ss + " " + (this.state.facet(vs) ? Zl : _l) + " " + this.state.facet(Li);
  }
  updateAttrs() {
    let t = eo(this, Nl, { class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses }), e = { spellcheck: "false", autocorrect: "off", autocapitalize: "off", writingsuggestions: "false", translate: "no", contenteditable: this.state.facet(Et) ? "true" : "false", class: "cm-content", style: `${w.tabSize}: ${this.state.tabSize}`, role: "textbox", "aria-multiline": "true" };
    this.state.readOnly && (e["aria-readonly"] = "true"), eo(this, Ys, e);
    let i = this.observer.ignore(() => {
      let s = us(this.contentDOM, this.contentAttrs, e), r = us(this.dom, this.editorAttrs, t);
      return s || r;
    });
    return this.editorAttrs = t, this.contentAttrs = e, i;
  }
  showAnnouncements(t) {
    let e = true;
    for (let i of t)
      for (let s of i.effects)
        if (s.is(C.announce)) {
          e && (this.announceDOM.textContent = ""), e = false;
          let r = this.announceDOM.appendChild(document.createElement("div"));
          r.textContent = s.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(We);
    let t = this.state.facet(C.cspNonce);
    Gt.mount(this.root, this.styleModules.concat(yf).reverse(), t ? { nonce: t } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(false);
  }
  requestMeasure(t) {
    if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), t) {
      if (this.measureRequests.indexOf(t) > -1)
        return;
      if (t.key != null) {
        for (let e = 0; e < this.measureRequests.length; e++)
          if (this.measureRequests[e].key === t.key) {
            this.measureRequests[e] = t;
            return;
          }
      }
      this.measureRequests.push(t);
    }
  }
  plugin(t) {
    let e = this.pluginMap.get(t);
    return (e === void 0 || e && e.spec != t) && this.pluginMap.set(t, e = this.plugins.find((i) => i.spec == t) || null), e && e.update(this).value;
  }
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  get scaleX() {
    return this.viewState.scaleX;
  }
  get scaleY() {
    return this.viewState.scaleY;
  }
  elementAtHeight(t) {
    return this.readMeasured(), this.viewState.elementAtHeight(t);
  }
  lineBlockAtHeight(t) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(t);
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  lineBlockAt(t) {
    return this.viewState.lineBlockAt(t);
  }
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  moveByChar(t, e, i) {
    return En(this, t, Nr(this, t, e, i));
  }
  moveByGroup(t, e) {
    return En(this, t, Nr(this, t, e, (i) => Rc(this, t.head, i)));
  }
  visualLineSide(t, e) {
    let i = this.bidiSpans(t), s = this.textDirectionAt(t.from), r = i[e ? i.length - 1 : 0];
    return b.cursor(r.side(e, s) + t.from, r.forward(!e, s) ? 1 : -1);
  }
  moveToLineBoundary(t, e, i = true) {
    return Lc(this, t, e, i);
  }
  moveVertically(t, e, i) {
    return En(this, t, Ec(this, t, e, i));
  }
  domAtPos(t) {
    return this.docView.domAtPos(t);
  }
  posAtDOM(t, e = 0) {
    return this.docView.posFromDOM(t, e);
  }
  posAtCoords(t, e = true) {
    return this.readMeasured(), zl(this, t, e);
  }
  coordsAtPos(t, e = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(t, e);
    if (!i || i.left == i.right)
      return i;
    let s = this.state.doc.lineAt(t), r = this.bidiSpans(s), o = r[jt.find(r, t - s.from, -1, e)];
    return fi(i, o.dir == H.LTR == e > 0);
  }
  coordsForChar(t) {
    return this.readMeasured(), this.docView.coordsForChar(t);
  }
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  textDirectionAt(t) {
    return !this.state.facet(Rl) || t < this.viewport.from || t > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(t));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(t) {
    if (t.length > Sf)
      return Cl(t.length);
    let e = this.textDirectionAt(t.from), i;
    for (let r of this.bidiCache)
      if (r.from == t.from && r.dir == e && (r.fresh || kl(r.isolates, i = Br(this, t))))
        return r.order;
    i || (i = Br(this, t));
    let s = mc(t.text, e, i);
    return this.bidiCache.push(new nn(t.from, t.to, e, i, true, s)), s;
  }
  get hasFocus() {
    var t;
    return (this.dom.ownerDocument.hasFocus() || w.safari && ((t = this.inputState) === null || t === void 0 ? void 0 : t.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  focus() {
    this.observer.ignore(() => {
      ll(this.contentDOM), this.docView.updateSelection();
    });
  }
  setRoot(t) {
    this._root != t && (this._root = t, this.observer.setWindow((t.nodeType == 9 ? t : t.ownerDocument).defaultView || window), this.mountStyles());
  }
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let t of this.plugins)
      t.destroy(this);
    this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = true;
  }
  static scrollIntoView(t, e = {}) {
    return Mi.of(new xe(typeof t == "number" ? b.cursor(t) : t, e.y, e.x, e.yMargin, e.xMargin));
  }
  scrollSnapshot() {
    let { scrollTop: t, scrollLeft: e } = this.scrollDOM, i = this.viewState.scrollAnchorAt(t);
    return Mi.of(new xe(b.cursor(i.from), "start", "start", i.top - t, e, true));
  }
  setTabFocusMode(t) {
    t == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof t == "boolean" ? this.inputState.tabFocusMode = t ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + t);
  }
  static domEventHandlers(t) {
    return z.define(() => ({}), { eventHandlers: t });
  }
  static domEventObservers(t) {
    return z.define(() => ({}), { eventObservers: t });
  }
  static theme(t, e) {
    let i = Gt.newName(), s = [Li.of(i), We.of(ks(`.${i}`, t))];
    return e && e.dark && s.push(vs.of(true)), s;
  }
  static baseTheme(t) {
    return he.lowest(We.of(ks("." + Ss, t, ta)));
  }
  static findFromDOM(t) {
    var e;
    let i = t.querySelector(".cm-content"), s = i && N.get(i) || N.get(t);
    return ((e = s == null ? void 0 : s.rootView) === null || e === void 0 ? void 0 : e.view) || null;
  }
}
C.styleModule = We;
C.inputHandler = Bl;
C.clipboardInputFilter = Us;
C.clipboardOutputFilter = Gs;
C.scrollHandler = Pl;
C.focusChangeEffect = Ll;
C.perLineTextDirection = Rl;
C.exceptionSink = Tl;
C.updateListener = ys;
C.editable = Et;
C.mouseSelectionStyle = Ol;
C.dragMovesSelection = Dl;
C.clickAddsSelectionRange = Al;
C.decorations = ei;
C.outerDecorations = Fl;
C.atomicRanges = Xs;
C.bidiIsolatedRanges = Hl;
C.scrollMargins = Vl;
C.darkTheme = vs;
C.cspNonce = S.define({ combine: (n) => n.length ? n[0] : "" });
C.contentAttributes = Ys;
C.editorAttributes = Nl;
C.lineWrapping = C.contentAttributes.of({ class: "cm-lineWrapping" });
C.announce = O.define();
const Sf = 4096, to = {};
class nn {
  constructor(t, e, i, s, r, o) {
    this.from = t, this.to = e, this.dir = i, this.isolates = s, this.fresh = r, this.order = o;
  }
  static update(t, e) {
    if (e.empty && !t.some((r) => r.fresh))
      return t;
    let i = [], s = t.length ? t[t.length - 1].dir : H.LTR;
    for (let r = Math.max(0, t.length - 10); r < t.length; r++) {
      let o = t[r];
      o.dir == s && !e.touchesRange(o.from, o.to) && i.push(new nn(e.mapPos(o.from, 1), e.mapPos(o.to, -1), o.dir, o.isolates, false, o.order));
    }
    return i;
  }
}
function eo(n, t, e) {
  for (let i = n.state.facet(t), s = i.length - 1; s >= 0; s--) {
    let r = i[s], o = typeof r == "function" ? r(n) : r;
    o && fs(o, e);
  }
  return e;
}
const kf = w.mac ? "mac" : w.windows ? "win" : w.linux ? "linux" : "key";
function Cf(n, t) {
  const e = n.split(/-(?!$)/);
  let i = e[e.length - 1];
  i == "Space" && (i = " ");
  let s, r, o, l;
  for (let a = 0; a < e.length - 1; ++a) {
    const h = e[a];
    if (/^(cmd|meta|m)$/i.test(h))
      l = true;
    else if (/^a(lt)?$/i.test(h))
      s = true;
    else if (/^(c|ctrl|control)$/i.test(h))
      r = true;
    else if (/^s(hift)?$/i.test(h))
      o = true;
    else if (/^mod$/i.test(h))
      t == "mac" ? l = true : r = true;
    else
      throw new Error("Unrecognized modifier name: " + h);
  }
  return s && (i = "Alt-" + i), r && (i = "Ctrl-" + i), l && (i = "Meta-" + i), o && (i = "Shift-" + i), i;
}
function Ri(n, t, e) {
  return t.altKey && (n = "Alt-" + n), t.ctrlKey && (n = "Ctrl-" + n), t.metaKey && (n = "Meta-" + n), e !== false && t.shiftKey && (n = "Shift-" + n), n;
}
const Mf = he.default(C.domEventHandlers({ keydown(n, t) {
  return na(ia(t.state), n, t, "editor");
} })), ea = S.define({ enables: Mf }), io = /* @__PURE__ */ new WeakMap();
function ia(n) {
  let t = n.facet(ea), e = io.get(t);
  return e || io.set(t, e = Of(t.reduce((i, s) => i.concat(s), []))), e;
}
function Af(n, t, e) {
  return na(ia(n.state), t, n, e);
}
let qt = null;
const Df = 4e3;
function Of(n, t = kf) {
  let e = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), s = (o, l) => {
    let a = i[o];
    if (a == null)
      i[o] = l;
    else if (a != l)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, r = (o, l, a, h, c) => {
    var f, u;
    let d = e[o] || (e[o] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((y) => Cf(y, t));
    for (let y = 1; y < p.length; y++) {
      let x = p.slice(0, y).join(" ");
      s(x, true), d[x] || (d[x] = { preventDefault: true, stopPropagation: false, run: [(M) => {
        let v = qt = { view: M, prefix: x, scope: o };
        return setTimeout(() => {
          qt == v && (qt = null);
        }, Df), true;
      }] });
    }
    let g = p.join(" ");
    s(g, false);
    let m = d[g] || (d[g] = { preventDefault: false, stopPropagation: false, run: ((u = (f = d._any) === null || f === void 0 ? void 0 : f.run) === null || u === void 0 ? void 0 : u.slice()) || [] });
    a && m.run.push(a), h && (m.preventDefault = true), c && (m.stopPropagation = true);
  };
  for (let o of n) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let h of l) {
        let c = e[h] || (e[h] = /* @__PURE__ */ Object.create(null));
        c._any || (c._any = { preventDefault: false, stopPropagation: false, run: [] });
        let { any: f } = o;
        for (let u in c)
          c[u].run.push((d) => f(d, Cs));
      }
    let a = o[t] || o.key;
    if (a)
      for (let h of l)
        r(h, a, o.run, o.preventDefault, o.stopPropagation), o.shift && r(h, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return e;
}
let Cs = null;
function na(n, t, e, i) {
  Cs = t;
  let s = Eh(t), r = nt(s, 0), o = St(r) == s.length && s != " ", l = "", a = false, h = false, c = false;
  qt && qt.view == e && qt.scope == i && (l = qt.prefix + " ", Kl.indexOf(t.keyCode) < 0 && (h = true, qt = null));
  let f = /* @__PURE__ */ new Set(), u = (m) => {
    if (m) {
      for (let y of m.run)
        if (!f.has(y) && (f.add(y), y(e)))
          return m.stopPropagation && (c = true), true;
      m.preventDefault && (m.stopPropagation && (c = true), h = true);
    }
    return false;
  }, d = n[i], p, g;
  return d && (u(d[l + Ri(s, t, !o)]) ? a = true : o && (t.altKey || t.metaKey || t.ctrlKey) && !(w.windows && t.ctrlKey && t.altKey) && (p = Ph[t.keyCode]) && p != s ? (u(d[l + Ri(p, t, true)]) || t.shiftKey && (g = Ih[t.keyCode]) != s && g != p && u(d[l + Ri(g, t, false)])) && (a = true) : o && t.shiftKey && u(d[l + Ri(s, t, true)]) && (a = true), !a && u(d._any) && (a = true)), h && (a = true), a && c && t.stopPropagation(), Cs = null, a;
}
class pi {
  constructor(t, e, i, s, r) {
    this.className = t, this.left = e, this.top = i, this.width = s, this.height = r;
  }
  draw() {
    let t = document.createElement("div");
    return t.className = this.className, this.adjust(t), t;
  }
  update(t, e) {
    return e.className != this.className ? false : (this.adjust(t), true);
  }
  adjust(t) {
    t.style.left = this.left + "px", t.style.top = this.top + "px", this.width != null && (t.style.width = this.width + "px"), t.style.height = this.height + "px";
  }
  eq(t) {
    return this.left == t.left && this.top == t.top && this.width == t.width && this.height == t.height && this.className == t.className;
  }
  static forRange(t, e, i) {
    if (i.empty) {
      let s = t.coordsAtPos(i.head, i.assoc || 1);
      if (!s)
        return [];
      let r = sa(t);
      return [new pi(e, s.left - r.left, s.top - r.top, null, s.bottom - s.top)];
    } else
      return Tf(t, e, i);
  }
}
function sa(n) {
  let t = n.scrollDOM.getBoundingClientRect();
  return { left: (n.textDirection == H.LTR ? t.left : t.right - n.scrollDOM.clientWidth * n.scaleX) - n.scrollDOM.scrollLeft * n.scaleX, top: t.top - n.scrollDOM.scrollTop * n.scaleY };
}
function no(n, t, e, i) {
  let s = n.coordsAtPos(t, e * 2);
  if (!s)
    return i;
  let r = n.dom.getBoundingClientRect(), o = (s.top + s.bottom) / 2, l = n.posAtCoords({ x: r.left + 1, y: o }), a = n.posAtCoords({ x: r.right - 1, y: o });
  return l == null || a == null ? i : { from: Math.max(i.from, Math.min(l, a)), to: Math.min(i.to, Math.max(l, a)) };
}
function Tf(n, t, e) {
  if (e.to <= n.viewport.from || e.from >= n.viewport.to)
    return [];
  let i = Math.max(e.from, n.viewport.from), s = Math.min(e.to, n.viewport.to), r = n.textDirection == H.LTR, o = n.contentDOM, l = o.getBoundingClientRect(), a = sa(n), h = o.querySelector(".cm-line"), c = h && window.getComputedStyle(h), f = l.left + (c ? parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)) : 0), u = l.right - (c ? parseInt(c.paddingRight) : 0), d = xs(n, i), p = xs(n, s), g = d.type == et.Text ? d : null, m = p.type == et.Text ? p : null;
  if (g && (n.lineWrapping || d.widgetLineBreaks) && (g = no(n, i, 1, g)), m && (n.lineWrapping || p.widgetLineBreaks) && (m = no(n, s, -1, m)), g && m && g.from == m.from && g.to == m.to)
    return x(M(e.from, e.to, g));
  {
    let k = g ? M(e.from, null, g) : v(d, false), A = m ? M(null, e.to, m) : v(p, true), E = [];
    return (g || d).to < (m || p).from - (g && m ? 1 : 0) || d.widgetLineBreaks > 1 && k.bottom + n.defaultLineHeight / 2 < A.top ? E.push(y(f, k.bottom, u, A.top)) : k.bottom < A.top && n.elementAtHeight((k.bottom + A.top) / 2).type == et.Text && (k.bottom = A.top = (k.bottom + A.top) / 2), x(k).concat(E).concat(x(A));
  }
  function y(k, A, E, U) {
    return new pi(t, k - a.left, A - a.top, E - k, U - A);
  }
  function x({ top: k, bottom: A, horizontal: E }) {
    let U = [];
    for (let Wt = 0; Wt < E.length; Wt += 2)
      U.push(y(E[Wt], k, E[Wt + 1], A));
    return U;
  }
  function M(k, A, E) {
    let U = 1e9, Wt = -1e9, bi = [];
    function yr(Qt, zt, ce, _t, Ee) {
      let Lt = n.coordsAtPos(Qt, Qt == E.to ? -2 : 2), Rt = n.coordsAtPos(ce, ce == E.from ? 2 : -2);
      !Lt || !Rt || (U = Math.min(Lt.top, Rt.top, U), Wt = Math.max(Lt.bottom, Rt.bottom, Wt), Ee == H.LTR ? bi.push(r && zt ? f : Lt.left, r && _t ? u : Rt.right) : bi.push(!r && _t ? f : Rt.left, !r && zt ? u : Lt.right));
    }
    let xi = k ?? E.from, wi = A ?? E.to;
    for (let Qt of n.visibleRanges)
      if (Qt.to > xi && Qt.from < wi)
        for (let zt = Math.max(Qt.from, xi), ce = Math.min(Qt.to, wi); ; ) {
          let _t = n.state.doc.lineAt(zt);
          for (let Ee of n.bidiSpans(_t)) {
            let Lt = Ee.from + _t.from, Rt = Ee.to + _t.from;
            if (Lt >= ce)
              break;
            Rt > zt && yr(Math.max(Lt, zt), k == null && Lt <= xi, Math.min(Rt, ce), A == null && Rt >= wi, Ee.dir);
          }
          if (zt = _t.to + 1, zt >= ce)
            break;
        }
    return bi.length == 0 && yr(xi, k == null, wi, A == null, n.textDirection), { top: U, bottom: Wt, horizontal: bi };
  }
  function v(k, A) {
    let E = l.top + (A ? k.top : k.bottom);
    return { top: E, bottom: E, horizontal: [] };
  }
}
function Bf(n, t) {
  return n.constructor == t.constructor && n.eq(t);
}
class Lf {
  constructor(t, e) {
    this.view = t, this.layer = e, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }, this.dom = t.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), e.above && this.dom.classList.add("cm-layer-above"), e.class && this.dom.classList.add(e.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(t.state), t.requestMeasure(this.measureReq), e.mount && e.mount(this.dom, t);
  }
  update(t) {
    t.startState.facet(Gi) != t.state.facet(Gi) && this.setOrder(t.state), (this.layer.update(t, this.dom) || t.geometryChanged) && (this.scale(), t.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(t) {
    this.layer.updateOnDocViewUpdate !== false && t.requestMeasure(this.measureReq);
  }
  setOrder(t) {
    let e = 0, i = t.facet(Gi);
    for (; e < i.length && i[e] != this.layer; )
      e++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - e);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: t, scaleY: e } = this.view;
    (t != this.scaleX || e != this.scaleY) && (this.scaleX = t, this.scaleY = e, this.dom.style.transform = `scale(${1 / t}, ${1 / e})`);
  }
  draw(t) {
    if (t.length != this.drawn.length || t.some((e, i) => !Bf(e, this.drawn[i]))) {
      let e = this.dom.firstChild, i = 0;
      for (let s of t)
        s.update && e && s.constructor && this.drawn[i].constructor && s.update(e, this.drawn[i]) ? (e = e.nextSibling, i++) : this.dom.insertBefore(s.draw(), e);
      for (; e; ) {
        let s = e.nextSibling;
        e.remove(), e = s;
      }
      this.drawn = t;
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const Gi = S.define();
function ra(n) {
  return [z.define((t) => new Lf(t, n)), Gi.of(n)];
}
const oa = !(w.ios && w.webkit && w.webkit_version < 534), ii = S.define({ combine(n) {
  return Tt(n, { cursorBlinkRate: 1200, drawRangeCursor: true }, { cursorBlinkRate: (t, e) => Math.min(t, e), drawRangeCursor: (t, e) => t || e });
} });
function zm(n = {}) {
  return [ii.of(n), Rf, Ef, Pf, El.of(true)];
}
function la(n) {
  return n.startState.facet(ii) != n.state.facet(ii);
}
const Rf = ra({ above: true, markers(n) {
  let { state: t } = n, e = t.facet(ii), i = [];
  for (let s of t.selection.ranges) {
    let r = s == t.selection.main;
    if (s.empty ? !r || oa : e.drawRangeCursor) {
      let o = r ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", l = s.empty ? s : b.cursor(s.head, s.head > s.anchor ? -1 : 1);
      for (let a of pi.forRange(n, o, l))
        i.push(a);
    }
  }
  return i;
}, update(n, t) {
  n.transactions.some((i) => i.selection) && (t.style.animationName = t.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
  let e = la(n);
  return e && so(n.state, t), n.docChanged || n.selectionSet || e;
}, mount(n, t) {
  so(t.state, n);
}, class: "cm-cursorLayer" });
function so(n, t) {
  t.style.animationDuration = n.facet(ii).cursorBlinkRate + "ms";
}
const Ef = ra({ above: false, markers(n) {
  return n.state.selection.ranges.map((t) => t.empty ? [] : pi.forRange(n, "cm-selectionBackground", t)).reduce((t, e) => t.concat(e));
}, update(n, t) {
  return n.docChanged || n.selectionSet || n.viewportChanged || la(n);
}, class: "cm-selectionLayer" }), Ms = { ".cm-line": { "& ::selection, &::selection": { backgroundColor: "transparent !important" } }, ".cm-content": { "& :focus": { caretColor: "initial !important", "&::selection, & ::selection": { backgroundColor: "Highlight !important" } } } };
oa && (Ms[".cm-line"].caretColor = Ms[".cm-content"].caretColor = "transparent !important");
const Pf = he.highest(C.theme(Ms)), aa = O.define({ map(n, t) {
  return n == null ? null : t.mapPos(n);
} }), $e = X.define({ create() {
  return null;
}, update(n, t) {
  return n != null && (n = t.changes.mapPos(n)), t.effects.reduce((e, i) => i.is(aa) ? i.value : e, n);
} }), If = z.fromClass(class {
  constructor(n) {
    this.view = n, this.cursor = null, this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) };
  }
  update(n) {
    var t;
    let e = n.state.field($e);
    e == null ? this.cursor != null && ((t = this.cursor) === null || t === void 0 || t.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (n.startState.field($e) != e || n.docChanged || n.geometryChanged) && this.view.requestMeasure(this.measureReq));
  }
  readPos() {
    let { view: n } = this, t = n.state.field($e), e = t != null && n.coordsAtPos(t);
    if (!e)
      return null;
    let i = n.scrollDOM.getBoundingClientRect();
    return { left: e.left - i.left + n.scrollDOM.scrollLeft * n.scaleX, top: e.top - i.top + n.scrollDOM.scrollTop * n.scaleY, height: e.bottom - e.top };
  }
  drawCursor(n) {
    if (this.cursor) {
      let { scaleX: t, scaleY: e } = this.view;
      n ? (this.cursor.style.left = n.left / t + "px", this.cursor.style.top = n.top / e + "px", this.cursor.style.height = n.height / e + "px") : this.cursor.style.left = "-100000px";
    }
  }
  destroy() {
    this.cursor && this.cursor.remove();
  }
  setDropPos(n) {
    this.view.state.field($e) != n && this.view.dispatch({ effects: aa.of(n) });
  }
}, { eventObservers: { dragover(n) {
  this.setDropPos(this.view.posAtCoords({ x: n.clientX, y: n.clientY }));
}, dragleave(n) {
  (n.target == this.view.contentDOM || !this.view.contentDOM.contains(n.relatedTarget)) && this.setDropPos(null);
}, dragend() {
  this.setDropPos(null);
}, drop() {
  this.setDropPos(null);
} } });
function qm() {
  return [$e, If];
}
function ro(n, t, e, i, s) {
  t.lastIndex = 0;
  for (let r = n.iterRange(e, i), o = e, l; !r.next().done; o += r.value.length)
    if (!r.lineBreak)
      for (; l = t.exec(r.value); )
        s(o + l.index, l);
}
function Nf(n, t) {
  let e = n.visibleRanges;
  if (e.length == 1 && e[0].from == n.viewport.from && e[0].to == n.viewport.to)
    return e;
  let i = [];
  for (let { from: s, to: r } of e)
    s = Math.max(n.state.doc.lineAt(s).from, s - t), r = Math.min(n.state.doc.lineAt(r).to, r + t), i.length && i[i.length - 1].to >= s ? i[i.length - 1].to = r : i.push({ from: s, to: r });
  return i;
}
class Ff {
  constructor(t) {
    const { regexp: e, decoration: i, decorate: s, boundary: r, maxLength: o = 1e3 } = t;
    if (!e.global)
      throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
    if (this.regexp = e, s)
      this.addMatch = (l, a, h, c) => s(c, h, h + l[0].length, l, a);
    else if (typeof i == "function")
      this.addMatch = (l, a, h, c) => {
        let f = i(l, a, h);
        f && c(h, h + l[0].length, f);
      };
    else if (i)
      this.addMatch = (l, a, h, c) => c(h, h + l[0].length, i);
    else
      throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
    this.boundary = r, this.maxLength = o;
  }
  createDeco(t) {
    let e = new It(), i = e.add.bind(e);
    for (let { from: s, to: r } of Nf(t, this.maxLength))
      ro(t.state.doc, this.regexp, s, r, (o, l) => this.addMatch(l, t, o, i));
    return e.finish();
  }
  updateDeco(t, e) {
    let i = 1e9, s = -1;
    return t.docChanged && t.changes.iterChanges((r, o, l, a) => {
      a >= t.view.viewport.from && l <= t.view.viewport.to && (i = Math.min(l, i), s = Math.max(a, s));
    }), t.viewportMoved || s - i > 1e3 ? this.createDeco(t.view) : s > -1 ? this.updateRange(t.view, e.map(t.changes), i, s) : e;
  }
  updateRange(t, e, i, s) {
    for (let r of t.visibleRanges) {
      let o = Math.max(r.from, i), l = Math.min(r.to, s);
      if (l > o) {
        let a = t.state.doc.lineAt(o), h = a.to < l ? t.state.doc.lineAt(l) : a, c = Math.max(r.from, a.from), f = Math.min(r.to, h.to);
        if (this.boundary) {
          for (; o > a.from; o--)
            if (this.boundary.test(a.text[o - 1 - a.from])) {
              c = o;
              break;
            }
          for (; l < h.to; l++)
            if (this.boundary.test(h.text[l - h.from])) {
              f = l;
              break;
            }
        }
        let u = [], d, p = (g, m, y) => u.push(y.range(g, m));
        if (a == h)
          for (this.regexp.lastIndex = c - a.from; (d = this.regexp.exec(a.text)) && d.index < f - a.from; )
            this.addMatch(d, t, d.index + a.from, p);
        else
          ro(t.state.doc, this.regexp, c, f, (g, m) => this.addMatch(m, t, g, p));
        e = e.update({ filterFrom: c, filterTo: f, filter: (g, m) => g < c || m > f, add: u });
      }
    }
    return e;
  }
}
const As = /x/.unicode != null ? "gu" : "g", Hf = new RegExp(`[\0-\b
-\x7F-\x9F\xAD\u061C\u200B\u200E\u200F\u2028\u2029\u202D\u202E\u2066\u2067\u2069\uFEFF\uFFF9-\uFFFC]`, As), Vf = { 0: "null", 7: "bell", 8: "backspace", 10: "newline", 11: "vertical tab", 13: "carriage return", 27: "escape", 8203: "zero width space", 8204: "zero width non-joiner", 8205: "zero width joiner", 8206: "left-to-right mark", 8207: "right-to-left mark", 8232: "line separator", 8237: "left-to-right override", 8238: "right-to-left override", 8294: "left-to-right isolate", 8295: "right-to-left isolate", 8297: "pop directional isolate", 8233: "paragraph separator", 65279: "zero width no-break space", 65532: "object replacement" };
let Nn = null;
function Wf() {
  var n;
  if (Nn == null && typeof document < "u" && document.body) {
    let t = document.body.style;
    Nn = ((n = t.tabSize) !== null && n !== void 0 ? n : t.MozTabSize) != null;
  }
  return Nn || false;
}
const Yi = S.define({ combine(n) {
  let t = Tt(n, { render: null, specialChars: Hf, addSpecialChars: null });
  return (t.replaceTabs = !Wf()) && (t.specialChars = new RegExp("	|" + t.specialChars.source, As)), t.addSpecialChars && (t.specialChars = new RegExp(t.specialChars.source + "|" + t.addSpecialChars.source, As)), t;
} });
function $m(n = {}) {
  return [Yi.of(n), zf()];
}
let oo = null;
function zf() {
  return oo || (oo = z.fromClass(class {
    constructor(n) {
      this.view = n, this.decorations = D.none, this.decorationCache = /* @__PURE__ */ Object.create(null), this.decorator = this.makeDecorator(n.state.facet(Yi)), this.decorations = this.decorator.createDeco(n);
    }
    makeDecorator(n) {
      return new Ff({ regexp: n.specialChars, decoration: (t, e, i) => {
        let { doc: s } = e.state, r = nt(t[0], 0);
        if (r == 9) {
          let o = s.lineAt(i), l = e.state.tabSize, a = Be(o.text, l, i - o.from);
          return D.replace({ widget: new jf((l - a % l) * this.view.defaultCharacterWidth / this.view.scaleX) });
        }
        return this.decorationCache[r] || (this.decorationCache[r] = D.replace({ widget: new Kf(n, r) }));
      }, boundary: n.replaceTabs ? void 0 : /[^]/ });
    }
    update(n) {
      let t = n.state.facet(Yi);
      n.startState.facet(Yi) != t ? (this.decorator = this.makeDecorator(t), this.decorations = this.decorator.createDeco(n.view)) : this.decorations = this.decorator.updateDeco(n, this.decorations);
    }
  }, { decorations: (n) => n.decorations }));
}
const qf = "\u2022";
function $f(n) {
  return n >= 32 ? qf : n == 10 ? "\u2424" : String.fromCharCode(9216 + n);
}
class Kf extends Vt {
  constructor(t, e) {
    super(), this.options = t, this.code = e;
  }
  eq(t) {
    return t.code == this.code;
  }
  toDOM(t) {
    let e = $f(this.code), i = t.state.phrase("Control character") + " " + (Vf[this.code] || "0x" + this.code.toString(16)), s = this.options.render && this.options.render(this.code, i, e);
    if (s)
      return s;
    let r = document.createElement("span");
    return r.textContent = e, r.title = i, r.setAttribute("aria-label", i), r.className = "cm-specialChar", r;
  }
  ignoreEvent() {
    return false;
  }
}
class jf extends Vt {
  constructor(t) {
    super(), this.width = t;
  }
  eq(t) {
    return t.width == this.width;
  }
  toDOM() {
    let t = document.createElement("span");
    return t.textContent = "	", t.className = "cm-tab", t.style.width = this.width + "px", t;
  }
  ignoreEvent() {
    return false;
  }
}
function Km() {
  return Gf;
}
const Uf = D.line({ class: "cm-activeLine" }), Gf = z.fromClass(class {
  constructor(n) {
    this.decorations = this.getDeco(n);
  }
  update(n) {
    (n.docChanged || n.selectionSet) && (this.decorations = this.getDeco(n.view));
  }
  getDeco(n) {
    let t = -1, e = [];
    for (let i of n.state.selection.ranges) {
      let s = n.lineBlockAt(i.head);
      s.from > t && (e.push(Uf.range(s.from)), t = s.from);
    }
    return D.set(e);
  }
}, { decorations: (n) => n.decorations });
class Yf extends Vt {
  constructor(t) {
    super(), this.content = t;
  }
  toDOM(t) {
    let e = document.createElement("span");
    return e.className = "cm-placeholder", e.style.pointerEvents = "none", e.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : typeof this.content == "function" ? this.content(t) : this.content.cloneNode(true)), typeof this.content == "string" ? e.setAttribute("aria-label", "placeholder " + this.content) : e.setAttribute("aria-hidden", "true"), e;
  }
  coordsAt(t) {
    let e = t.firstChild ? ke(t.firstChild) : [];
    if (!e.length)
      return null;
    let i = window.getComputedStyle(t.parentNode), s = fi(e[0], i.direction != "rtl"), r = parseInt(i.lineHeight);
    return s.bottom - s.top > r * 1.5 ? { left: s.left, right: s.right, top: s.top, bottom: s.top + r } : s;
  }
  ignoreEvent() {
    return false;
  }
}
function jm(n) {
  return z.fromClass(class {
    constructor(t) {
      this.view = t, this.placeholder = n ? D.set([D.widget({ widget: new Yf(n), side: 1 }).range(0)]) : D.none;
    }
    get decorations() {
      return this.view.state.doc.length ? D.none : this.placeholder;
    }
  }, { decorations: (t) => t.decorations });
}
const Ds = 2e3;
function Xf(n, t, e) {
  let i = Math.min(t.line, e.line), s = Math.max(t.line, e.line), r = [];
  if (t.off > Ds || e.off > Ds || t.col < 0 || e.col < 0) {
    let o = Math.min(t.off, e.off), l = Math.max(t.off, e.off);
    for (let a = i; a <= s; a++) {
      let h = n.doc.line(a);
      h.length <= l && r.push(b.range(h.from + o, h.to + l));
    }
  } else {
    let o = Math.min(t.col, e.col), l = Math.max(t.col, e.col);
    for (let a = i; a <= s; a++) {
      let h = n.doc.line(a), c = os(h.text, o, n.tabSize, true);
      if (c < 0)
        r.push(b.cursor(h.to));
      else {
        let f = os(h.text, l, n.tabSize);
        r.push(b.range(h.from + c, h.from + f));
      }
    }
  }
  return r;
}
function Jf(n, t) {
  let e = n.coordsAtPos(n.viewport.from);
  return e ? Math.round(Math.abs((e.left - t) / n.defaultCharacterWidth)) : -1;
}
function lo(n, t) {
  let e = n.posAtCoords({ x: t.clientX, y: t.clientY }, false), i = n.state.doc.lineAt(e), s = e - i.from, r = s > Ds ? -1 : s == i.length ? Jf(n, t.clientX) : Be(i.text, n.state.tabSize, e - i.from);
  return { line: i.number, col: r, off: s };
}
function Qf(n, t) {
  let e = lo(n, t), i = n.state.selection;
  return e ? { update(s) {
    if (s.docChanged) {
      let r = s.changes.mapPos(s.startState.doc.line(e.line).from), o = s.state.doc.lineAt(r);
      e = { line: o.number, col: e.col, off: Math.min(e.off, o.length) }, i = i.map(s.changes);
    }
  }, get(s, r, o) {
    let l = lo(n, s);
    if (!l)
      return i;
    let a = Xf(n.state, e, l);
    return a.length ? o ? b.create(a.concat(i.ranges)) : b.create(a) : i;
  } } : null;
}
function Um(n) {
  let t = (n == null ? void 0 : n.eventFilter) || ((e) => e.altKey && e.button == 0);
  return C.mouseSelectionStyle.of((e, i) => t(i) ? Qf(e, i) : null);
}
const _f = { Alt: [18, (n) => !!n.altKey], Control: [17, (n) => !!n.ctrlKey], Shift: [16, (n) => !!n.shiftKey], Meta: [91, (n) => !!n.metaKey] }, Zf = { style: "cursor: crosshair" };
function Gm(n = {}) {
  let [t, e] = _f[n.key || "Alt"], i = z.fromClass(class {
    constructor(s) {
      this.view = s, this.isDown = false;
    }
    set(s) {
      this.isDown != s && (this.isDown = s, this.view.update([]));
    }
  }, { eventObservers: { keydown(s) {
    this.set(s.keyCode == t || e(s));
  }, keyup(s) {
    (s.keyCode == t || !e(s)) && this.set(false);
  }, mousemove(s) {
    this.set(e(s));
  } } });
  return [i, C.contentAttributes.of((s) => {
    var r;
    return !((r = s.plugin(i)) === null || r === void 0) && r.isDown ? Zf : null;
  })];
}
const Ne = "-10000px";
class ha {
  constructor(t, e, i, s) {
    this.facet = e, this.createTooltipView = i, this.removeTooltipView = s, this.input = t.state.facet(e), this.tooltips = this.input.filter((o) => o);
    let r = null;
    this.tooltipViews = this.tooltips.map((o) => r = i(o, r));
  }
  update(t, e) {
    var i;
    let s = t.state.facet(this.facet), r = s.filter((a) => a);
    if (s === this.input) {
      for (let a of this.tooltipViews)
        a.update && a.update(t);
      return false;
    }
    let o = [], l = e ? [] : null;
    for (let a = 0; a < r.length; a++) {
      let h = r[a], c = -1;
      if (h) {
        for (let f = 0; f < this.tooltips.length; f++) {
          let u = this.tooltips[f];
          u && u.create == h.create && (c = f);
        }
        if (c < 0)
          o[a] = this.createTooltipView(h, a ? o[a - 1] : null), l && (l[a] = !!h.above);
        else {
          let f = o[a] = this.tooltipViews[c];
          l && (l[a] = e[c]), f.update && f.update(t);
        }
      }
    }
    for (let a of this.tooltipViews)
      o.indexOf(a) < 0 && (this.removeTooltipView(a), (i = a.destroy) === null || i === void 0 || i.call(a));
    return e && (l.forEach((a, h) => e[h] = a), e.length = l.length), this.input = s, this.tooltips = r, this.tooltipViews = o, true;
  }
}
function tu(n) {
  let t = n.dom.ownerDocument.documentElement;
  return { top: 0, left: 0, bottom: t.clientHeight, right: t.clientWidth };
}
const Fn = S.define({ combine: (n) => {
  var t, e, i;
  return { position: w.ios ? "absolute" : ((t = n.find((s) => s.position)) === null || t === void 0 ? void 0 : t.position) || "fixed", parent: ((e = n.find((s) => s.parent)) === null || e === void 0 ? void 0 : e.parent) || null, tooltipSpace: ((i = n.find((s) => s.tooltipSpace)) === null || i === void 0 ? void 0 : i.tooltipSpace) || tu };
} }), ao = /* @__PURE__ */ new WeakMap(), tr = z.fromClass(class {
  constructor(n) {
    this.view = n, this.above = [], this.inView = true, this.madeAbsolute = false, this.lastTransaction = 0, this.measureTimeout = -1;
    let t = n.state.facet(Fn);
    this.position = t.position, this.parent = t.parent, this.classes = n.themeClasses, this.createContainer(), this.measureReq = { read: this.readMeasure.bind(this), write: this.writeMeasure.bind(this), key: this }, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new ha(n, er, (e, i) => this.createTooltip(e, i), (e) => {
      this.resizeObserver && this.resizeObserver.unobserve(e.dom), e.dom.remove();
    }), this.above = this.manager.tooltips.map((e) => !!e.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((e) => {
      Date.now() > this.lastTransaction - 50 && e.length > 0 && e[e.length - 1].intersectionRatio < 1 && this.measureSoon();
    }, { threshold: [1] }) : null, this.observeIntersection(), n.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
  }
  createContainer() {
    this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
  }
  observeIntersection() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      for (let n of this.manager.tooltipViews)
        this.intersectionObserver.observe(n.dom);
    }
  }
  measureSoon() {
    this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
      this.measureTimeout = -1, this.maybeMeasure();
    }, 50));
  }
  update(n) {
    n.transactions.length && (this.lastTransaction = Date.now());
    let t = this.manager.update(n, this.above);
    t && this.observeIntersection();
    let e = t || n.geometryChanged, i = n.state.facet(Fn);
    if (i.position != this.position && !this.madeAbsolute) {
      this.position = i.position;
      for (let s of this.manager.tooltipViews)
        s.dom.style.position = this.position;
      e = true;
    }
    if (i.parent != this.parent) {
      this.parent && this.container.remove(), this.parent = i.parent, this.createContainer();
      for (let s of this.manager.tooltipViews)
        this.container.appendChild(s.dom);
      e = true;
    } else
      this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
    e && this.maybeMeasure();
  }
  createTooltip(n, t) {
    let e = n.create(this.view), i = t ? t.dom : null;
    if (e.dom.classList.add("cm-tooltip"), n.arrow && !e.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
      let s = document.createElement("div");
      s.className = "cm-tooltip-arrow", e.dom.appendChild(s);
    }
    return e.dom.style.position = this.position, e.dom.style.top = Ne, e.dom.style.left = "0px", this.container.insertBefore(e.dom, i), e.mount && e.mount(this.view), this.resizeObserver && this.resizeObserver.observe(e.dom), e;
  }
  destroy() {
    var n, t, e;
    this.view.win.removeEventListener("resize", this.measureSoon);
    for (let i of this.manager.tooltipViews)
      i.dom.remove(), (n = i.destroy) === null || n === void 0 || n.call(i);
    this.parent && this.container.remove(), (t = this.resizeObserver) === null || t === void 0 || t.disconnect(), (e = this.intersectionObserver) === null || e === void 0 || e.disconnect(), clearTimeout(this.measureTimeout);
  }
  readMeasure() {
    let n = 1, t = 1, e = false;
    if (this.position == "fixed" && this.manager.tooltipViews.length) {
      let { dom: r } = this.manager.tooltipViews[0];
      if (w.gecko)
        e = r.offsetParent != this.container.ownerDocument.body;
      else if (r.style.top == Ne && r.style.left == "0px") {
        let o = r.getBoundingClientRect();
        e = Math.abs(o.top + 1e4) > 1 || Math.abs(o.left) > 1;
      }
    }
    if (e || this.position == "absolute")
      if (this.parent) {
        let r = this.parent.getBoundingClientRect();
        r.width && r.height && (n = r.width / this.parent.offsetWidth, t = r.height / this.parent.offsetHeight);
      } else
        ({ scaleX: n, scaleY: t } = this.view.viewState);
    let i = this.view.scrollDOM.getBoundingClientRect(), s = Js(this.view);
    return { visible: { left: i.left + s.left, top: i.top + s.top, right: i.right - s.right, bottom: i.bottom - s.bottom }, parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(), pos: this.manager.tooltips.map((r, o) => {
      let l = this.manager.tooltipViews[o];
      return l.getCoords ? l.getCoords(r.pos) : this.view.coordsAtPos(r.pos);
    }), size: this.manager.tooltipViews.map(({ dom: r }) => r.getBoundingClientRect()), space: this.view.state.facet(Fn).tooltipSpace(this.view), scaleX: n, scaleY: t, makeAbsolute: e };
  }
  writeMeasure(n) {
    var t;
    if (n.makeAbsolute) {
      this.madeAbsolute = true, this.position = "absolute";
      for (let l of this.manager.tooltipViews)
        l.dom.style.position = "absolute";
    }
    let { visible: e, space: i, scaleX: s, scaleY: r } = n, o = [];
    for (let l = 0; l < this.manager.tooltips.length; l++) {
      let a = this.manager.tooltips[l], h = this.manager.tooltipViews[l], { dom: c } = h, f = n.pos[l], u = n.size[l];
      if (!f || a.clip !== false && (f.bottom <= Math.max(e.top, i.top) || f.top >= Math.min(e.bottom, i.bottom) || f.right < Math.max(e.left, i.left) - 0.1 || f.left > Math.min(e.right, i.right) + 0.1)) {
        c.style.top = Ne;
        continue;
      }
      let d = a.arrow ? h.dom.querySelector(".cm-tooltip-arrow") : null, p = d ? 7 : 0, g = u.right - u.left, m = (t = ao.get(h)) !== null && t !== void 0 ? t : u.bottom - u.top, y = h.offset || iu, x = this.view.textDirection == H.LTR, M = u.width > i.right - i.left ? x ? i.left : i.right - u.width : x ? Math.max(i.left, Math.min(f.left - (d ? 14 : 0) + y.x, i.right - g)) : Math.min(Math.max(i.left, f.left - g + (d ? 14 : 0) - y.x), i.right - g), v = this.above[l];
      !a.strictSide && (v ? f.top - m - p - y.y < i.top : f.bottom + m + p + y.y > i.bottom) && v == i.bottom - f.bottom > f.top - i.top && (v = this.above[l] = !v);
      let k = (v ? f.top - i.top : i.bottom - f.bottom) - p;
      if (k < m && h.resize !== false) {
        if (k < this.view.defaultLineHeight) {
          c.style.top = Ne;
          continue;
        }
        ao.set(h, m), c.style.height = (m = k) / r + "px";
      } else
        c.style.height && (c.style.height = "");
      let A = v ? f.top - m - p - y.y : f.bottom + p + y.y, E = M + g;
      if (h.overlap !== true)
        for (let U of o)
          U.left < E && U.right > M && U.top < A + m && U.bottom > A && (A = v ? U.top - m - 2 - p : U.bottom + p + 2);
      if (this.position == "absolute" ? (c.style.top = (A - n.parent.top) / r + "px", ho(c, (M - n.parent.left) / s)) : (c.style.top = A / r + "px", ho(c, M / s)), d) {
        let U = f.left + (x ? y.x : -y.x) - (M + 14 - 7);
        d.style.left = U / s + "px";
      }
      h.overlap !== true && o.push({ left: M, top: A, right: E, bottom: A + m }), c.classList.toggle("cm-tooltip-above", v), c.classList.toggle("cm-tooltip-below", !v), h.positioned && h.positioned(n.space);
    }
  }
  maybeMeasure() {
    if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
      for (let n of this.manager.tooltipViews)
        n.dom.style.top = Ne;
  }
}, { eventObservers: { scroll() {
  this.maybeMeasure();
} } });
function ho(n, t) {
  let e = parseInt(n.style.left, 10);
  (isNaN(e) || Math.abs(t - e) > 1) && (n.style.left = t + "px");
}
const eu = C.baseTheme({ ".cm-tooltip": { zIndex: 500, boxSizing: "border-box" }, "&light .cm-tooltip": { border: "1px solid #bbb", backgroundColor: "#f5f5f5" }, "&light .cm-tooltip-section:not(:first-child)": { borderTop: "1px solid #bbb" }, "&dark .cm-tooltip": { backgroundColor: "#333338", color: "white" }, ".cm-tooltip-arrow": { height: "7px", width: `${7 * 2}px`, position: "absolute", zIndex: -1, overflow: "hidden", "&:before, &:after": { content: "''", position: "absolute", width: 0, height: 0, borderLeft: "7px solid transparent", borderRight: "7px solid transparent" }, ".cm-tooltip-above &": { bottom: "-7px", "&:before": { borderTop: "7px solid #bbb" }, "&:after": { borderTop: "7px solid #f5f5f5", bottom: "1px" } }, ".cm-tooltip-below &": { top: "-7px", "&:before": { borderBottom: "7px solid #bbb" }, "&:after": { borderBottom: "7px solid #f5f5f5", top: "1px" } } }, "&dark .cm-tooltip .cm-tooltip-arrow": { "&:before": { borderTopColor: "#333338", borderBottomColor: "#333338" }, "&:after": { borderTopColor: "transparent", borderBottomColor: "transparent" } } }), iu = { x: 0, y: 0 }, er = S.define({ enables: [tr, eu] }), sn = S.define({ combine: (n) => n.reduce((t, e) => t.concat(e), []) });
class wn {
  static create(t) {
    return new wn(t);
  }
  constructor(t) {
    this.view = t, this.mounted = false, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new ha(t, sn, (e, i) => this.createHostedView(e, i), (e) => e.dom.remove());
  }
  createHostedView(t, e) {
    let i = t.create(this.view);
    return i.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(i.dom, e ? e.dom.nextSibling : this.dom.firstChild), this.mounted && i.mount && i.mount(this.view), i;
  }
  mount(t) {
    for (let e of this.manager.tooltipViews)
      e.mount && e.mount(t);
    this.mounted = true;
  }
  positioned(t) {
    for (let e of this.manager.tooltipViews)
      e.positioned && e.positioned(t);
  }
  update(t) {
    this.manager.update(t);
  }
  destroy() {
    var t;
    for (let e of this.manager.tooltipViews)
      (t = e.destroy) === null || t === void 0 || t.call(e);
  }
  passProp(t) {
    let e;
    for (let i of this.manager.tooltipViews) {
      let s = i[t];
      if (s !== void 0) {
        if (e === void 0)
          e = s;
        else if (e !== s)
          return;
      }
    }
    return e;
  }
  get offset() {
    return this.passProp("offset");
  }
  get getCoords() {
    return this.passProp("getCoords");
  }
  get overlap() {
    return this.passProp("overlap");
  }
  get resize() {
    return this.passProp("resize");
  }
}
const nu = er.compute([sn], (n) => {
  let t = n.facet(sn);
  return t.length === 0 ? null : { pos: Math.min(...t.map((e) => e.pos)), end: Math.max(...t.map((e) => {
    var i;
    return (i = e.end) !== null && i !== void 0 ? i : e.pos;
  })), create: wn.create, above: t[0].above, arrow: t.some((e) => e.arrow) };
});
class su {
  constructor(t, e, i, s, r) {
    this.view = t, this.source = e, this.field = i, this.setHover = s, this.hoverTime = r, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = { x: 0, y: 0, target: t.dom, time: 0 }, this.checkHover = this.checkHover.bind(this), t.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), t.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
  }
  update() {
    this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (this.hoverTimeout = -1, this.active.length)
      return;
    let t = Date.now() - this.lastMove.time;
    t < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - t) : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: t, lastMove: e } = this, i = t.docView.nearest(e.target);
    if (!i)
      return;
    let s, r = 1;
    if (i instanceof Kt)
      s = i.posAtStart;
    else {
      if (s = t.posAtCoords(e), s == null)
        return;
      let l = t.coordsAtPos(s);
      if (!l || e.y < l.top || e.y > l.bottom || e.x < l.left - t.defaultCharacterWidth || e.x > l.right + t.defaultCharacterWidth)
        return;
      let a = t.bidiSpans(t.state.doc.lineAt(s)).find((c) => c.from <= s && c.to >= s), h = a && a.dir == H.RTL ? -1 : 1;
      r = e.x < l.left ? -h : h;
    }
    let o = this.source(t, s, r);
    if (o == null ? void 0 : o.then) {
      let l = this.pending = { pos: s };
      o.then((a) => {
        this.pending == l && (this.pending = null, a && !(Array.isArray(a) && !a.length) && t.dispatch({ effects: this.setHover.of(Array.isArray(a) ? a : [a]) }));
      }, (a) => ot(t.state, a, "hover tooltip"));
    } else
      o && !(Array.isArray(o) && !o.length) && t.dispatch({ effects: this.setHover.of(Array.isArray(o) ? o : [o]) });
  }
  get tooltip() {
    let t = this.view.plugin(tr), e = t ? t.manager.tooltips.findIndex((i) => i.create == wn.create) : -1;
    return e > -1 ? t.manager.tooltipViews[e] : null;
  }
  mousemove(t) {
    var e, i;
    this.lastMove = { x: t.clientX, y: t.clientY, target: t.target, time: Date.now() }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: s, tooltip: r } = this;
    if (s.length && r && !ru(r.dom, t) || this.pending) {
      let { pos: o } = s[0] || this.pending, l = (i = (e = s[0]) === null || e === void 0 ? void 0 : e.end) !== null && i !== void 0 ? i : o;
      (o == l ? this.view.posAtCoords(this.lastMove) != o : !ou(this.view, o, l, t.clientX, t.clientY)) && (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
    }
  }
  mouseleave(t) {
    clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
    let { active: e } = this;
    if (e.length) {
      let { tooltip: i } = this;
      i && i.dom.contains(t.relatedTarget) ? this.watchTooltipLeave(i.dom) : this.view.dispatch({ effects: this.setHover.of([]) });
    }
  }
  watchTooltipLeave(t) {
    let e = (i) => {
      t.removeEventListener("mouseleave", e), this.active.length && !this.view.dom.contains(i.relatedTarget) && this.view.dispatch({ effects: this.setHover.of([]) });
    };
    t.addEventListener("mouseleave", e);
  }
  destroy() {
    clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
const Ei = 4;
function ru(n, t) {
  let { left: e, right: i, top: s, bottom: r } = n.getBoundingClientRect(), o;
  if (o = n.querySelector(".cm-tooltip-arrow")) {
    let l = o.getBoundingClientRect();
    s = Math.min(l.top, s), r = Math.max(l.bottom, r);
  }
  return t.clientX >= e - Ei && t.clientX <= i + Ei && t.clientY >= s - Ei && t.clientY <= r + Ei;
}
function ou(n, t, e, i, s, r) {
  let o = n.scrollDOM.getBoundingClientRect(), l = n.documentTop + n.documentPadding.top + n.contentHeight;
  if (o.left > i || o.right < i || o.top > s || Math.min(o.bottom, l) < s)
    return false;
  let a = n.posAtCoords({ x: i, y: s }, false);
  return a >= t && a <= e;
}
function lu(n, t = {}) {
  let e = O.define(), i = X.define({ create() {
    return [];
  }, update(s, r) {
    if (s.length && (t.hideOnChange && (r.docChanged || r.selection) ? s = [] : t.hideOn && (s = s.filter((o) => !t.hideOn(r, o))), r.docChanged)) {
      let o = [];
      for (let l of s) {
        let a = r.changes.mapPos(l.pos, -1, tt.TrackDel);
        if (a != null) {
          let h = Object.assign(/* @__PURE__ */ Object.create(null), l);
          h.pos = a, h.end != null && (h.end = r.changes.mapPos(h.end)), o.push(h);
        }
      }
      s = o;
    }
    for (let o of r.effects)
      o.is(e) && (s = o.value), o.is(au) && (s = []);
    return s;
  }, provide: (s) => sn.from(s) });
  return { active: i, extension: [i, z.define((s) => new su(s, n, i, e, t.hoverTime || 300)), nu] };
}
function ca(n, t) {
  let e = n.plugin(tr);
  if (!e)
    return null;
  let i = e.manager.tooltips.indexOf(t);
  return i < 0 ? null : e.manager.tooltipViews[i];
}
const au = O.define(), co = S.define({ combine(n) {
  let t, e;
  for (let i of n)
    t = t || i.topContainer, e = e || i.bottomContainer;
  return { topContainer: t, bottomContainer: e };
} });
function ni(n, t) {
  let e = n.plugin(fa), i = e ? e.specs.indexOf(t) : -1;
  return i > -1 ? e.panels[i] : null;
}
const fa = z.fromClass(class {
  constructor(n) {
    this.input = n.state.facet(si), this.specs = this.input.filter((e) => e), this.panels = this.specs.map((e) => e(n));
    let t = n.state.facet(co);
    this.top = new Pi(n, true, t.topContainer), this.bottom = new Pi(n, false, t.bottomContainer), this.top.sync(this.panels.filter((e) => e.top)), this.bottom.sync(this.panels.filter((e) => !e.top));
    for (let e of this.panels)
      e.dom.classList.add("cm-panel"), e.mount && e.mount();
  }
  update(n) {
    let t = n.state.facet(co);
    this.top.container != t.topContainer && (this.top.sync([]), this.top = new Pi(n.view, true, t.topContainer)), this.bottom.container != t.bottomContainer && (this.bottom.sync([]), this.bottom = new Pi(n.view, false, t.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
    let e = n.state.facet(si);
    if (e != this.input) {
      let i = e.filter((a) => a), s = [], r = [], o = [], l = [];
      for (let a of i) {
        let h = this.specs.indexOf(a), c;
        h < 0 ? (c = a(n.view), l.push(c)) : (c = this.panels[h], c.update && c.update(n)), s.push(c), (c.top ? r : o).push(c);
      }
      this.specs = i, this.panels = s, this.top.sync(r), this.bottom.sync(o);
      for (let a of l)
        a.dom.classList.add("cm-panel"), a.mount && a.mount();
    } else
      for (let i of this.panels)
        i.update && i.update(n);
  }
  destroy() {
    this.top.sync([]), this.bottom.sync([]);
  }
}, { provide: (n) => C.scrollMargins.of((t) => {
  let e = t.plugin(n);
  return e && { top: e.top.scrollMargin(), bottom: e.bottom.scrollMargin() };
}) });
class Pi {
  constructor(t, e, i) {
    this.view = t, this.top = e, this.container = i, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
  }
  sync(t) {
    for (let e of this.panels)
      e.destroy && t.indexOf(e) < 0 && e.destroy();
    this.panels = t, this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), this.dom = void 0);
      return;
    }
    if (!this.dom) {
      this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
      let e = this.container || this.view.dom;
      e.insertBefore(this.dom, this.top ? e.firstChild : null);
    }
    let t = this.dom.firstChild;
    for (let e of this.panels)
      if (e.dom.parentNode == this.dom) {
        for (; t != e.dom; )
          t = fo(t);
        t = t.nextSibling;
      } else
        this.dom.insertBefore(e.dom, t);
    for (; t; )
      t = fo(t);
  }
  scrollMargin() {
    return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let t of this.classes.split(" "))
        t && this.container.classList.remove(t);
      for (let t of (this.classes = this.view.themeClasses).split(" "))
        t && this.container.classList.add(t);
    }
  }
}
function fo(n) {
  let t = n.nextSibling;
  return n.remove(), t;
}
const si = S.define({ enables: fa });
class Ft extends se {
  compare(t) {
    return this == t || this.constructor == t.constructor && this.eq(t);
  }
  eq(t) {
    return false;
  }
  destroy(t) {
  }
}
Ft.prototype.elementClass = "";
Ft.prototype.toDOM = void 0;
Ft.prototype.mapMode = tt.TrackBefore;
Ft.prototype.startSide = Ft.prototype.endSide = -1;
Ft.prototype.point = true;
const Xi = S.define(), hu = S.define(), cu = { class: "", renderEmptyElements: false, elementStyle: "", markers: () => B.empty, lineMarker: () => null, widgetMarker: () => null, lineMarkerChange: null, initialSpacer: null, updateSpacer: null, domEventHandlers: {} }, Xe = S.define();
function fu(n) {
  return [ua(), Xe.of(Object.assign(Object.assign({}, cu), n))];
}
const Os = S.define({ combine: (n) => n.some((t) => t) });
function ua(n) {
  let t = [uu];
  return n && n.fixed === false && t.push(Os.of(true)), t;
}
const uu = z.fromClass(class {
  constructor(n) {
    this.view = n, this.prevViewport = n.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = n.state.facet(Xe).map((t) => new po(n, t));
    for (let t of this.gutters)
      this.dom.appendChild(t.dom);
    this.fixed = !n.state.facet(Os), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(false), n.scrollDOM.insertBefore(this.dom, n.contentDOM);
  }
  update(n) {
    if (this.updateGutters(n)) {
      let t = this.prevViewport, e = n.view.viewport, i = Math.min(t.to, e.to) - Math.max(t.from, e.from);
      this.syncGutters(i < (e.to - e.from) * 0.8);
    }
    n.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px"), this.view.state.facet(Os) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = n.view.viewport;
  }
  syncGutters(n) {
    let t = this.dom.nextSibling;
    n && this.dom.remove();
    let e = B.iter(this.view.state.facet(Xi), this.view.viewport.from), i = [], s = this.gutters.map((r) => new du(r, this.view.viewport, -this.view.documentPadding.top));
    for (let r of this.view.viewportLineBlocks)
      if (i.length && (i = []), Array.isArray(r.type)) {
        let o = true;
        for (let l of r.type)
          if (l.type == et.Text && o) {
            Ts(e, i, l.from);
            for (let a of s)
              a.line(this.view, l, i);
            o = false;
          } else if (l.widget)
            for (let a of s)
              a.widget(this.view, l);
      } else if (r.type == et.Text) {
        Ts(e, i, r.from);
        for (let o of s)
          o.line(this.view, r, i);
      } else if (r.widget)
        for (let o of s)
          o.widget(this.view, r);
    for (let r of s)
      r.finish();
    n && this.view.scrollDOM.insertBefore(this.dom, t);
  }
  updateGutters(n) {
    let t = n.startState.facet(Xe), e = n.state.facet(Xe), i = n.docChanged || n.heightChanged || n.viewportChanged || !B.eq(n.startState.facet(Xi), n.state.facet(Xi), n.view.viewport.from, n.view.viewport.to);
    if (t == e)
      for (let s of this.gutters)
        s.update(n) && (i = true);
    else {
      i = true;
      let s = [];
      for (let r of e) {
        let o = t.indexOf(r);
        o < 0 ? s.push(new po(this.view, r)) : (this.gutters[o].update(n), s.push(this.gutters[o]));
      }
      for (let r of this.gutters)
        r.dom.remove(), s.indexOf(r) < 0 && r.destroy();
      for (let r of s)
        this.dom.appendChild(r.dom);
      this.gutters = s;
    }
    return i;
  }
  destroy() {
    for (let n of this.gutters)
      n.destroy();
    this.dom.remove();
  }
}, { provide: (n) => C.scrollMargins.of((t) => {
  let e = t.plugin(n);
  return !e || e.gutters.length == 0 || !e.fixed ? null : t.textDirection == H.LTR ? { left: e.dom.offsetWidth * t.scaleX } : { right: e.dom.offsetWidth * t.scaleX };
}) });
function uo(n) {
  return Array.isArray(n) ? n : [n];
}
function Ts(n, t, e) {
  for (; n.value && n.from <= e; )
    n.from == e && t.push(n.value), n.next();
}
class du {
  constructor(t, e, i) {
    this.gutter = t, this.height = i, this.i = 0, this.cursor = B.iter(t.markers, e.from);
  }
  addElement(t, e, i) {
    let { gutter: s } = this, r = (e.top - this.height) / t.scaleY, o = e.height / t.scaleY;
    if (this.i == s.elements.length) {
      let l = new da(t, o, r, i);
      s.elements.push(l), s.dom.appendChild(l.dom);
    } else
      s.elements[this.i].update(t, o, r, i);
    this.height = e.bottom, this.i++;
  }
  line(t, e, i) {
    let s = [];
    Ts(this.cursor, s, e.from), i.length && (s = s.concat(i));
    let r = this.gutter.config.lineMarker(t, e, s);
    r && s.unshift(r);
    let o = this.gutter;
    s.length == 0 && !o.config.renderEmptyElements || this.addElement(t, e, s);
  }
  widget(t, e) {
    let i = this.gutter.config.widgetMarker(t, e.widget, e), s = i ? [i] : null;
    for (let r of t.state.facet(hu)) {
      let o = r(t, e.widget, e);
      o && (s || (s = [])).push(o);
    }
    s && this.addElement(t, e, s);
  }
  finish() {
    let t = this.gutter;
    for (; t.elements.length > this.i; ) {
      let e = t.elements.pop();
      t.dom.removeChild(e.dom), e.destroy();
    }
  }
}
class po {
  constructor(t, e) {
    this.view = t, this.config = e, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in e.domEventHandlers)
      this.dom.addEventListener(i, (s) => {
        let r = s.target, o;
        if (r != this.dom && this.dom.contains(r)) {
          for (; r.parentNode != this.dom; )
            r = r.parentNode;
          let a = r.getBoundingClientRect();
          o = (a.top + a.bottom) / 2;
        } else
          o = s.clientY;
        let l = t.lineBlockAtHeight(o - t.documentTop);
        e.domEventHandlers[i](t, l, s) && s.preventDefault();
      });
    this.markers = uo(e.markers(t)), e.initialSpacer && (this.spacer = new da(t, 0, 0, [e.initialSpacer(t)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(t) {
    let e = this.markers;
    if (this.markers = uo(this.config.markers(t.view)), this.spacer && this.config.updateSpacer) {
      let s = this.config.updateSpacer(this.spacer.markers[0], t);
      s != this.spacer.markers[0] && this.spacer.update(t.view, 0, 0, [s]);
    }
    let i = t.view.viewport;
    return !B.eq(this.markers, e, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(t) : false);
  }
  destroy() {
    for (let t of this.elements)
      t.destroy();
  }
}
class da {
  constructor(t, e, i, s) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(t, e, i, s);
  }
  update(t, e, i, s) {
    this.height != e && (this.height = e, this.dom.style.height = e + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), pu(this.markers, s) || this.setMarkers(t, s);
  }
  setMarkers(t, e) {
    let i = "cm-gutterElement", s = this.dom.firstChild;
    for (let r = 0, o = 0; ; ) {
      let l = o, a = r < e.length ? e[r++] : null, h = false;
      if (a) {
        let c = a.elementClass;
        c && (i += " " + c);
        for (let f = o; f < this.markers.length; f++)
          if (this.markers[f].compare(a)) {
            l = f, h = true;
            break;
          }
      } else
        l = this.markers.length;
      for (; o < l; ) {
        let c = this.markers[o++];
        if (c.toDOM) {
          c.destroy(s);
          let f = s.nextSibling;
          s.remove(), s = f;
        }
      }
      if (!a)
        break;
      a.toDOM && (h ? s = s.nextSibling : this.dom.insertBefore(a.toDOM(t), s)), h && o++;
    }
    this.dom.className = i, this.markers = e;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function pu(n, t) {
  if (n.length != t.length)
    return false;
  for (let e = 0; e < n.length; e++)
    if (!n[e].compare(t[e]))
      return false;
  return true;
}
const mu = S.define(), gu = S.define(), me = S.define({ combine(n) {
  return Tt(n, { formatNumber: String, domEventHandlers: {} }, { domEventHandlers(t, e) {
    let i = Object.assign({}, t);
    for (let s in e) {
      let r = i[s], o = e[s];
      i[s] = r ? (l, a, h) => r(l, a, h) || o(l, a, h) : o;
    }
    return i;
  } });
} });
class Hn extends Ft {
  constructor(t) {
    super(), this.number = t;
  }
  eq(t) {
    return this.number == t.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function Vn(n, t) {
  return n.state.facet(me).formatNumber(t, n.state);
}
const yu = Xe.compute([me], (n) => ({ class: "cm-lineNumbers", renderEmptyElements: false, markers(t) {
  return t.state.facet(mu);
}, lineMarker(t, e, i) {
  return i.some((s) => s.toDOM) ? null : new Hn(Vn(t, t.state.doc.lineAt(e.from).number));
}, widgetMarker: (t, e, i) => {
  for (let s of t.state.facet(gu)) {
    let r = s(t, e, i);
    if (r)
      return r;
  }
  return null;
}, lineMarkerChange: (t) => t.startState.facet(me) != t.state.facet(me), initialSpacer(t) {
  return new Hn(Vn(t, mo(t.state.doc.lines)));
}, updateSpacer(t, e) {
  let i = Vn(e.view, mo(e.view.state.doc.lines));
  return i == t.number ? t : new Hn(i);
}, domEventHandlers: n.facet(me).domEventHandlers }));
function Ym(n = {}) {
  return [me.of(n), ua(), yu];
}
function mo(n) {
  let t = 9;
  for (; t < n; )
    t = t * 10 + 9;
  return t;
}
const bu = new class extends Ft {
  constructor() {
    super(...arguments), this.elementClass = "cm-activeLineGutter";
  }
}(), xu = Xi.compute(["selection"], (n) => {
  let t = [], e = -1;
  for (let i of n.selection.ranges) {
    let s = n.doc.lineAt(i.head).from;
    s > e && (e = s, t.push(bu.range(s)));
  }
  return B.of(t);
});
function Xm() {
  return xu;
}
var Wn;
const Ke = new pt(), wu = new pt();
class Ct {
  constructor(t, e, i = [], s = "") {
    this.data = t, this.name = s, R.prototype.hasOwnProperty("tree") || Object.defineProperty(R.prototype, "tree", { get() {
      return _(this);
    } }), this.parser = e, this.extension = [Xt.of(this), R.languageData.of((r, o, l) => {
      let a = go(r, o, l), h = a.type.prop(Ke);
      if (!h)
        return [];
      let c = r.facet(h), f = a.type.prop(wu);
      if (f) {
        let u = a.resolve(o - a.from, l);
        for (let d of f)
          if (d.test(u, r)) {
            let p = r.facet(d.facet);
            return d.type == "replace" ? p : p.concat(c);
          }
      }
      return c;
    })].concat(i);
  }
  isActiveAt(t, e, i = -1) {
    return go(t, e, i).type.prop(Ke) == this.data;
  }
  findRegions(t) {
    let e = t.facet(Xt);
    if ((e == null ? void 0 : e.data) == this.data)
      return [{ from: 0, to: t.doc.length }];
    if (!e || !e.allowsNesting)
      return [];
    let i = [], s = (r, o) => {
      if (r.prop(Ke) == this.data) {
        i.push({ from: o, to: o + r.length });
        return;
      }
      let l = r.prop(pt.mounted);
      if (l) {
        if (l.tree.prop(Ke) == this.data) {
          if (l.overlay)
            for (let a of l.overlay)
              i.push({ from: a.from + o, to: a.to + o });
          else
            i.push({ from: o, to: o + r.length });
          return;
        } else if (l.overlay) {
          let a = i.length;
          if (s(l.tree, l.overlay[0].from + o), i.length > a)
            return;
        }
      }
      for (let a = 0; a < r.children.length; a++) {
        let h = r.children[a];
        h instanceof pe && s(h, r.positions[a] + o);
      }
    };
    return s(_(t), 0), i;
  }
  get allowsNesting() {
    return true;
  }
}
Ct.setState = O.define();
function go(n, t, e) {
  let i = n.facet(Xt), s = _(n).topNode;
  if (!i || i.allowsNesting)
    for (let r = s; r; r = r.enter(t, e, Th.ExcludeBuffers))
      r.type.isTop && (s = r);
  return s;
}
function _(n) {
  let t = n.field(Ct.state, false);
  return t ? t.tree : pe.empty;
}
class vu {
  constructor(t) {
    this.doc = t, this.cursorPos = 0, this.string = "", this.cursor = t.iter();
  }
  get length() {
    return this.doc.length;
  }
  syncTo(t) {
    return this.string = this.cursor.next(t - this.cursorPos).value, this.cursorPos = t + this.string.length, this.cursorPos - this.string.length;
  }
  chunk(t) {
    return this.syncTo(t), this.string;
  }
  get lineChunks() {
    return true;
  }
  read(t, e) {
    let i = this.cursorPos - this.string.length;
    return t < i || e >= this.cursorPos ? this.doc.sliceString(t, e) : this.string.slice(t - i, e - i);
  }
}
let Fe = null;
class rn {
  constructor(t, e, i = [], s, r, o, l, a) {
    this.parser = t, this.state = e, this.fragments = i, this.tree = s, this.treeLen = r, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  static create(t, e, i) {
    return new rn(t, e, [], pe.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new vu(this.state.doc), this.fragments);
  }
  work(t, e) {
    return e != null && e >= this.state.doc.length && (e = void 0), this.tree != pe.empty && this.isDone(e ?? this.state.doc.length) ? (this.takeTree(), true) : this.withContext(() => {
      var i;
      if (typeof t == "number") {
        let s = Date.now() + t;
        t = () => Date.now() > s;
      }
      for (this.parse || (this.parse = this.startParse()), e != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > e) && e < this.state.doc.length && this.parse.stopAt(e); ; ) {
        let s = this.parse.advance();
        if (s)
          if (this.fragments = this.withoutTempSkipped(Wi.addTree(s, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length, this.tree = s, this.parse = null, this.treeLen < (e ?? this.state.doc.length))
            this.parse = this.startParse();
          else
            return true;
        if (t())
          return false;
      }
    });
  }
  takeTree() {
    let t, e;
    this.parse && (t = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > t) && this.parse.stopAt(t), this.withContext(() => {
      for (; !(e = this.parse.advance()); )
        ;
    }), this.treeLen = t, this.tree = e, this.fragments = this.withoutTempSkipped(Wi.addTree(this.tree, this.fragments, true)), this.parse = null);
  }
  withContext(t) {
    let e = Fe;
    Fe = this;
    try {
      return t();
    } finally {
      Fe = e;
    }
  }
  withoutTempSkipped(t) {
    for (let e; e = this.tempSkipped.pop(); )
      t = yo(t, e.from, e.to);
    return t;
  }
  changes(t, e) {
    let { fragments: i, tree: s, treeLen: r, viewport: o, skipped: l } = this;
    if (this.takeTree(), !t.empty) {
      let a = [];
      if (t.iterChangedRanges((h, c, f, u) => a.push({ fromA: h, toA: c, fromB: f, toB: u })), i = Wi.applyChanges(i, a), s = pe.empty, r = 0, o = { from: t.mapPos(o.from, -1), to: t.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let h of this.skipped) {
          let c = t.mapPos(h.from, 1), f = t.mapPos(h.to, -1);
          c < f && l.push({ from: c, to: f });
        }
      }
    }
    return new rn(this.parser, e, i, s, r, o, l, this.scheduleOn);
  }
  updateViewport(t) {
    if (this.viewport.from == t.from && this.viewport.to == t.to)
      return false;
    this.viewport = t;
    let e = this.skipped.length;
    for (let i = 0; i < this.skipped.length; i++) {
      let { from: s, to: r } = this.skipped[i];
      s < t.to && r > t.from && (this.fragments = yo(this.fragments, s, r), this.skipped.splice(i--, 1));
    }
    return this.skipped.length >= e ? false : (this.reset(), true);
  }
  reset() {
    this.parse && (this.takeTree(), this.parse = null);
  }
  skipUntilInView(t, e) {
    this.skipped.push({ from: t, to: e });
  }
  static getSkippingParser(t) {
    return new class extends Bh {
      createParse(e, i, s) {
        let r = s[0].from, o = s[s.length - 1].to;
        return { parsedPos: r, advance() {
          let a = Fe;
          if (a) {
            for (let h of s)
              a.tempSkipped.push(h);
            t && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, t]) : t);
          }
          return this.parsedPos = o, new pe(Vs.none, [], [], o - r);
        }, stoppedAt: null, stopAt() {
        } };
      }
    }();
  }
  isDone(t) {
    t = Math.min(t, this.state.doc.length);
    let e = this.fragments;
    return this.treeLen >= t && e.length && e[0].from == 0 && e[0].to >= t;
  }
  static get() {
    return Fe;
  }
}
function yo(n, t, e) {
  return Wi.applyChanges(n, [{ fromA: t, toA: e, fromB: t, toB: e }]);
}
class De {
  constructor(t) {
    this.context = t, this.tree = t.tree;
  }
  apply(t) {
    if (!t.docChanged && this.tree == this.context.tree)
      return this;
    let e = this.context.changes(t.changes, t.state), i = this.context.treeLen == t.startState.doc.length ? void 0 : Math.max(t.changes.mapPos(this.context.treeLen), e.viewport.to);
    return e.work(20, i) || e.takeTree(), new De(e);
  }
  static init(t) {
    let e = Math.min(3e3, t.doc.length), i = rn.create(t.facet(Xt).parser, t, { from: 0, to: e });
    return i.work(20, e) || i.takeTree(), new De(i);
  }
}
Ct.state = X.define({ create: De.init, update(n, t) {
  for (let e of t.effects)
    if (e.is(Ct.setState))
      return e.value;
  return t.startState.facet(Xt) != t.state.facet(Xt) ? De.init(t.state) : n.apply(t);
} });
let pa = (n) => {
  let t = setTimeout(() => n(), 500);
  return () => clearTimeout(t);
};
typeof requestIdleCallback < "u" && (pa = (n) => {
  let t = -1, e = setTimeout(() => {
    t = requestIdleCallback(n, { timeout: 500 - 100 });
  }, 100);
  return () => t < 0 ? clearTimeout(e) : cancelIdleCallback(t);
});
const zn = typeof navigator < "u" && (!((Wn = navigator.scheduling) === null || Wn === void 0) && Wn.isInputPending) ? () => navigator.scheduling.isInputPending() : null, Su = z.fromClass(class {
  constructor(t) {
    this.view = t, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(t) {
    let e = this.view.state.field(Ct.state).context;
    (e.updateViewport(t.view.viewport) || this.view.viewport.to > e.treeLen) && this.scheduleWork(), (t.docChanged || t.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(e);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: t } = this.view, e = t.field(Ct.state);
    (e.tree != e.context.tree || !e.context.isDone(t.doc.length)) && (this.working = pa(this.work));
  }
  work(t) {
    this.working = null;
    let e = Date.now();
    if (this.chunkEnd < e && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = e + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: i, viewport: { to: s } } = this.view, r = i.field(Ct.state);
    if (r.tree == r.context.tree && r.context.isDone(s + 1e5))
      return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, t && !zn ? Math.max(25, t.timeRemaining() - 5) : 1e9), l = r.context.treeLen < s && i.doc.length > s + 1e3, a = r.context.work(() => zn && zn() || Date.now() > o, s + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - e, (a || this.chunkBudget <= 0) && (r.context.takeTree(), this.view.dispatch({ effects: Ct.setState.of(new De(r.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(r.context);
  }
  checkAsyncSchedule(t) {
    t.scheduleOn && (this.workScheduled++, t.scheduleOn.then(() => this.scheduleWork()).catch((e) => ot(this.view.state, e)).then(() => this.workScheduled--), t.scheduleOn = null);
  }
  destroy() {
    this.working && this.working();
  }
  isWorking() {
    return !!(this.working || this.workScheduled > 0);
  }
}, { eventHandlers: { focus() {
  this.scheduleWork();
} } }), Xt = S.define({ combine(n) {
  return n.length ? n[0] : null;
}, enables: (n) => [Ct.state, Su, C.contentAttributes.compute([n], (t) => {
  let e = t.facet(n);
  return e && e.name ? { "data-language": e.name } : {};
})] }), ku = S.define(), ir = S.define({ combine: (n) => {
  if (!n.length)
    return "  ";
  let t = n[0];
  if (!t || /\S/.test(t) || Array.from(t).some((e) => e != t[0]))
    throw new Error("Invalid indent unit: " + JSON.stringify(n[0]));
  return t;
} });
function on(n) {
  let t = n.facet(ir);
  return t.charCodeAt(0) == 9 ? n.tabSize * t.length : t.length;
}
function ri(n, t) {
  let e = "", i = n.tabSize, s = n.facet(ir)[0];
  if (s == "	") {
    for (; t >= i; )
      e += "	", t -= i;
    s = " ";
  }
  for (let r = 0; r < t; r++)
    e += s;
  return e;
}
function nr(n, t) {
  n instanceof R && (n = new vn(n));
  for (let i of n.state.facet(ku)) {
    let s = i(n, t);
    if (s !== void 0)
      return s;
  }
  let e = _(n.state);
  return e.length >= t ? Mu(n, e, t) : null;
}
class vn {
  constructor(t, e = {}) {
    this.state = t, this.options = e, this.unit = on(t);
  }
  lineAt(t, e = 1) {
    let i = this.state.doc.lineAt(t), { simulateBreak: s, simulateDoubleBreak: r } = this.options;
    return s != null && s >= i.from && s <= i.to ? r && s == t ? { text: "", from: t } : (e < 0 ? s < t : s <= t) ? { text: i.text.slice(s - i.from), from: s } : { text: i.text.slice(0, s - i.from), from: i.from } : i;
  }
  textAfterPos(t, e = 1) {
    if (this.options.simulateDoubleBreak && t == this.options.simulateBreak)
      return "";
    let { text: i, from: s } = this.lineAt(t, e);
    return i.slice(t - s, Math.min(i.length, t + 100 - s));
  }
  column(t, e = 1) {
    let { text: i, from: s } = this.lineAt(t, e), r = this.countColumn(i, t - s), o = this.options.overrideIndentation ? this.options.overrideIndentation(s) : -1;
    return o > -1 && (r += o - this.countColumn(i, i.search(/\S|$/))), r;
  }
  countColumn(t, e = t.length) {
    return Be(t, this.state.tabSize, e);
  }
  lineIndent(t, e = 1) {
    let { text: i, from: s } = this.lineAt(t, e), r = this.options.overrideIndentation;
    if (r) {
      let o = r(s);
      if (o > -1)
        return o;
    }
    return this.countColumn(i, i.search(/\S|$/));
  }
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const Cu = new pt();
function Mu(n, t, e) {
  let i = t.resolveStack(e), s = t.resolveInner(e, -1).resolve(e, 0).enterUnfinishedNodesBefore(e);
  if (s != i.node) {
    let r = [];
    for (let o = s; o && !(o.from == i.node.from && o.type == i.node.type); o = o.parent)
      r.push(o);
    for (let o = r.length - 1; o >= 0; o--)
      i = { node: r[o], next: i };
  }
  return ma(i, n, e);
}
function ma(n, t, e) {
  for (let i = n; i; i = i.next) {
    let s = Du(i.node);
    if (s)
      return s(sr.create(t, e, i));
  }
  return 0;
}
function Au(n) {
  return n.pos == n.options.simulateBreak && n.options.simulateDoubleBreak;
}
function Du(n) {
  let t = n.type.prop(Cu);
  if (t)
    return t;
  let e = n.firstChild, i;
  if (e && (i = e.type.prop(pt.closedBy))) {
    let s = n.lastChild, r = s && i.indexOf(s.name) > -1;
    return (o) => Lu(o, true, 1, void 0, r && !Au(o) ? s.from : void 0);
  }
  return n.parent == null ? Ou : null;
}
function Ou() {
  return 0;
}
class sr extends vn {
  constructor(t, e, i) {
    super(t.state, t.options), this.base = t, this.pos = e, this.context = i;
  }
  get node() {
    return this.context.node;
  }
  static create(t, e, i) {
    return new sr(t, e, i);
  }
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  baseIndentFor(t) {
    let e = this.state.doc.lineAt(t.from);
    for (; ; ) {
      let i = t.resolve(e.from);
      for (; i.parent && i.parent.from == i.from; )
        i = i.parent;
      if (Tu(i, t))
        break;
      e = this.state.doc.lineAt(i.from);
    }
    return this.lineIndent(e.from);
  }
  continue() {
    return ma(this.context.next, this.base, this.pos);
  }
}
function Tu(n, t) {
  for (let e = t; e; e = e.parent)
    if (n == e)
      return true;
  return false;
}
function Bu(n) {
  let t = n.node, e = t.childAfter(t.from), i = t.lastChild;
  if (!e)
    return null;
  let s = n.options.simulateBreak, r = n.state.doc.lineAt(e.from), o = s == null || s <= r.from ? r.to : Math.min(r.to, s);
  for (let l = e.to; ; ) {
    let a = t.childAfter(l);
    if (!a || a == i)
      return null;
    if (!a.type.isSkipped) {
      if (a.from >= o)
        return null;
      let h = /^ */.exec(r.text.slice(e.to - r.from))[0].length;
      return { from: e.from, to: e.to + h };
    }
    l = a.to;
  }
}
function Lu(n, t, e, i, s) {
  let r = n.textAfter, o = r.match(/^\s*/)[0].length, l = i && r.slice(o, o + i.length) == i || s == n.pos + o, a = t ? Bu(n) : null;
  return a ? l ? n.column(a.from) : n.column(a.to) : n.baseIndent + (l ? 0 : n.unit * e);
}
const Ru = 200;
function Qm() {
  return R.transactionFilter.of((n) => {
    if (!n.docChanged || !n.isUserEvent("input.type") && !n.isUserEvent("input.complete"))
      return n;
    let t = n.startState.languageDataAt("indentOnInput", n.startState.selection.main.head);
    if (!t.length)
      return n;
    let e = n.newDoc, { head: i } = n.newSelection.main, s = e.lineAt(i);
    if (i > s.from + Ru)
      return n;
    let r = e.sliceString(s.from, i);
    if (!t.some((h) => h.test(r)))
      return n;
    let { state: o } = n, l = -1, a = [];
    for (let { head: h } of o.selection.ranges) {
      let c = o.doc.lineAt(h);
      if (c.from == l)
        continue;
      l = c.from;
      let f = nr(o, c.from);
      if (f == null)
        continue;
      let u = /^\s*/.exec(c.text)[0], d = ri(o, f);
      u != d && a.push({ from: c.from, to: c.from + u.length, insert: d });
    }
    return a.length ? [n, { changes: a, sequential: true }] : n;
  });
}
const Eu = S.define(), Pu = new pt();
function Iu(n, t, e) {
  let i = _(n);
  if (i.length < e)
    return null;
  let s = i.resolveStack(e, 1), r = null;
  for (let o = s; o; o = o.next) {
    let l = o.node;
    if (l.to <= e || l.from > e)
      continue;
    if (r && l.from < t)
      break;
    let a = l.type.prop(Pu);
    if (a && (l.to < i.length - 50 || i.length == n.doc.length || !Nu(l))) {
      let h = a(l, n);
      h && h.from <= e && h.from >= t && h.to > e && (r = h);
    }
  }
  return r;
}
function Nu(n) {
  let t = n.lastChild;
  return t && t.to == n.to && t.type.isError;
}
function ln(n, t, e) {
  for (let i of n.facet(Eu)) {
    let s = i(n, t, e);
    if (s)
      return s;
  }
  return Iu(n, t, e);
}
function ga(n, t) {
  let e = t.mapPos(n.from, 1), i = t.mapPos(n.to, -1);
  return e >= i ? void 0 : { from: e, to: i };
}
const Sn = O.define({ map: ga }), mi = O.define({ map: ga });
function ya(n) {
  let t = [];
  for (let { head: e } of n.state.selection.ranges)
    t.some((i) => i.from <= e && i.to >= e) || t.push(n.lineBlockAt(e));
  return t;
}
const ae = X.define({ create() {
  return D.none;
}, update(n, t) {
  n = n.map(t.changes);
  for (let e of t.effects)
    if (e.is(Sn) && !Fu(n, e.value.from, e.value.to)) {
      let { preparePlaceholder: i } = t.state.facet(rr), s = i ? D.replace({ widget: new $u(i(t.state, e.value)) }) : bo;
      n = n.update({ add: [s.range(e.value.from, e.value.to)] });
    } else
      e.is(mi) && (n = n.update({ filter: (i, s) => e.value.from != i || e.value.to != s, filterFrom: e.value.from, filterTo: e.value.to }));
  if (t.selection) {
    let e = false, { head: i } = t.selection.main;
    n.between(i, i, (s, r) => {
      s < i && r > i && (e = true);
    }), e && (n = n.update({ filterFrom: i, filterTo: i, filter: (s, r) => r <= i || s >= i }));
  }
  return n;
}, provide: (n) => C.decorations.from(n), toJSON(n, t) {
  let e = [];
  return n.between(0, t.doc.length, (i, s) => {
    e.push(i, s);
  }), e;
}, fromJSON(n) {
  if (!Array.isArray(n) || n.length % 2)
    throw new RangeError("Invalid JSON for fold state");
  let t = [];
  for (let e = 0; e < n.length; ) {
    let i = n[e++], s = n[e++];
    if (typeof i != "number" || typeof s != "number")
      throw new RangeError("Invalid JSON for fold state");
    t.push(bo.range(i, s));
  }
  return D.set(t, true);
} });
function an(n, t, e) {
  var i;
  let s = null;
  return (i = n.field(ae, false)) === null || i === void 0 || i.between(t, e, (r, o) => {
    (!s || s.from > r) && (s = { from: r, to: o });
  }), s;
}
function Fu(n, t, e) {
  let i = false;
  return n.between(t, t, (s, r) => {
    s == t && r == e && (i = true);
  }), i;
}
function ba(n, t) {
  return n.field(ae, false) ? t : t.concat(O.appendConfig.of(wa()));
}
const Hu = (n) => {
  for (let t of ya(n)) {
    let e = ln(n.state, t.from, t.to);
    if (e)
      return n.dispatch({ effects: ba(n.state, [Sn.of(e), xa(n, e)]) }), true;
  }
  return false;
}, Vu = (n) => {
  if (!n.state.field(ae, false))
    return false;
  let t = [];
  for (let e of ya(n)) {
    let i = an(n.state, e.from, e.to);
    i && t.push(mi.of(i), xa(n, i, false));
  }
  return t.length && n.dispatch({ effects: t }), t.length > 0;
};
function xa(n, t, e = true) {
  let i = n.state.doc.lineAt(t.from).number, s = n.state.doc.lineAt(t.to).number;
  return C.announce.of(`${n.state.phrase(e ? "Folded lines" : "Unfolded lines")} ${i} ${n.state.phrase("to")} ${s}.`);
}
const Wu = (n) => {
  let { state: t } = n, e = [];
  for (let i = 0; i < t.doc.length; ) {
    let s = n.lineBlockAt(i), r = ln(t, s.from, s.to);
    r && e.push(Sn.of(r)), i = (r ? n.lineBlockAt(r.to) : s).to + 1;
  }
  return e.length && n.dispatch({ effects: ba(n.state, e) }), !!e.length;
}, zu = (n) => {
  let t = n.state.field(ae, false);
  if (!t || !t.size)
    return false;
  let e = [];
  return t.between(0, n.state.doc.length, (i, s) => {
    e.push(mi.of({ from: i, to: s }));
  }), n.dispatch({ effects: e }), true;
}, _m = [{ key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: Hu }, { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: Vu }, { key: "Ctrl-Alt-[", run: Wu }, { key: "Ctrl-Alt-]", run: zu }], qu = { placeholderDOM: null, preparePlaceholder: null, placeholderText: "\u2026" }, rr = S.define({ combine(n) {
  return Tt(n, qu);
} });
function wa(n) {
  let t = [ae, ju];
  return n && t.push(rr.of(n)), t;
}
function va(n, t) {
  let { state: e } = n, i = e.facet(rr), s = (o) => {
    let l = n.lineBlockAt(n.posAtDOM(o.target)), a = an(n.state, l.from, l.to);
    a && n.dispatch({ effects: mi.of(a) }), o.preventDefault();
  };
  if (i.placeholderDOM)
    return i.placeholderDOM(n, s, t);
  let r = document.createElement("span");
  return r.textContent = i.placeholderText, r.setAttribute("aria-label", e.phrase("folded code")), r.title = e.phrase("unfold"), r.className = "cm-foldPlaceholder", r.onclick = s, r;
}
const bo = D.replace({ widget: new class extends Vt {
  toDOM(n) {
    return va(n, null);
  }
}() });
class $u extends Vt {
  constructor(t) {
    super(), this.value = t;
  }
  eq(t) {
    return this.value == t.value;
  }
  toDOM(t) {
    return va(t, this.value);
  }
}
const Ku = { openText: "\u2304", closedText: "\u203A", markerDOM: null, domEventHandlers: {}, foldingChanged: () => false };
class qn extends Ft {
  constructor(t, e) {
    super(), this.config = t, this.open = e;
  }
  eq(t) {
    return this.config == t.config && this.open == t.open;
  }
  toDOM(t) {
    if (this.config.markerDOM)
      return this.config.markerDOM(this.open);
    let e = document.createElement("span");
    return e.textContent = this.open ? this.config.openText : this.config.closedText, e.title = t.state.phrase(this.open ? "Fold line" : "Unfold line"), e;
  }
}
function Zm(n = {}) {
  let t = Object.assign(Object.assign({}, Ku), n), e = new qn(t, true), i = new qn(t, false), s = z.fromClass(class {
    constructor(o) {
      this.from = o.viewport.from, this.markers = this.buildMarkers(o);
    }
    update(o) {
      (o.docChanged || o.viewportChanged || o.startState.facet(Xt) != o.state.facet(Xt) || o.startState.field(ae, false) != o.state.field(ae, false) || _(o.startState) != _(o.state) || t.foldingChanged(o)) && (this.markers = this.buildMarkers(o.view));
    }
    buildMarkers(o) {
      let l = new It();
      for (let a of o.viewportLineBlocks) {
        let h = an(o.state, a.from, a.to) ? i : ln(o.state, a.from, a.to) ? e : null;
        h && l.add(a.from, a.from, h);
      }
      return l.finish();
    }
  }), { domEventHandlers: r } = t;
  return [s, fu({ class: "cm-foldGutter", markers(o) {
    var l;
    return ((l = o.plugin(s)) === null || l === void 0 ? void 0 : l.markers) || B.empty;
  }, initialSpacer() {
    return new qn(t, false);
  }, domEventHandlers: Object.assign(Object.assign({}, r), { click: (o, l, a) => {
    if (r.click && r.click(o, l, a))
      return true;
    let h = an(o.state, l.from, l.to);
    if (h)
      return o.dispatch({ effects: mi.of(h) }), true;
    let c = ln(o.state, l.from, l.to);
    return c ? (o.dispatch({ effects: Sn.of(c) }), true) : false;
  } }) }), wa()];
}
const ju = C.baseTheme({ ".cm-foldPlaceholder": { backgroundColor: "#eee", border: "1px solid #ddd", color: "#888", borderRadius: ".2em", margin: "0 1px", padding: "0 1px", cursor: "pointer" }, ".cm-foldGutter span": { padding: "0 1px", cursor: "pointer" } });
class kn {
  constructor(t, e) {
    this.specs = t;
    let i;
    function s(l) {
      let a = Gt.newName();
      return (i || (i = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const r = typeof e.all == "string" ? e.all : e.all ? s(e.all) : void 0, o = e.scope;
    this.scope = o instanceof Ct ? (l) => l.prop(Ke) == o.data : o ? (l) => l == o : void 0, this.style = Oh(t.map((l) => ({ tag: l.tag, class: l.class || s(Object.assign({}, l, { tag: null })) })), { all: r }).style, this.module = i ? new Gt(i) : null, this.themeType = e.themeType;
  }
  static define(t, e) {
    return new kn(t, e || {});
  }
}
const Bs = S.define(), Sa = S.define({ combine(n) {
  return n.length ? [n[0]] : null;
} });
function $n(n) {
  let t = n.facet(Bs);
  return t.length ? t : n.facet(Sa);
}
function tg(n, t) {
  let e = [Gu], i;
  return n instanceof kn && (n.module && e.push(C.styleModule.of(n.module)), i = n.themeType), (t == null ? void 0 : t.fallback) ? e.push(Sa.of(n)) : i ? e.push(Bs.computeN([C.darkTheme], (s) => s.facet(C.darkTheme) == (i == "dark") ? [n] : [])) : e.push(Bs.of(n)), e;
}
class Uu {
  constructor(t) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = _(t.state), this.decorations = this.buildDeco(t, $n(t.state)), this.decoratedTo = t.viewport.to;
  }
  update(t) {
    let e = _(t.state), i = $n(t.state), s = i != $n(t.startState), { viewport: r } = t.view, o = t.changes.mapPos(this.decoratedTo, 1);
    e.length < r.to && !s && e.type == this.tree.type && o >= r.to ? (this.decorations = this.decorations.map(t.changes), this.decoratedTo = o) : (e != this.tree || t.viewportChanged || s) && (this.tree = e, this.decorations = this.buildDeco(t.view, i), this.decoratedTo = r.to);
  }
  buildDeco(t, e) {
    if (!e || !this.tree.length)
      return D.none;
    let i = new It();
    for (let { from: s, to: r } of t.visibleRanges)
      Lh(this.tree, e, (o, l, a) => {
        i.add(o, l, this.markCache[a] || (this.markCache[a] = D.mark({ class: a })));
      }, s, r);
    return i.finish();
  }
}
const Gu = he.high(z.fromClass(Uu, { decorations: (n) => n.decorations })), eg = kn.define([{ tag: T.meta, color: "#404740" }, { tag: T.link, textDecoration: "underline" }, { tag: T.heading, textDecoration: "underline", fontWeight: "bold" }, { tag: T.emphasis, fontStyle: "italic" }, { tag: T.strong, fontWeight: "bold" }, { tag: T.strikethrough, textDecoration: "line-through" }, { tag: T.keyword, color: "#708" }, { tag: [T.atom, T.bool, T.url, T.contentSeparator, T.labelName], color: "#219" }, { tag: [T.literal, T.inserted], color: "#164" }, { tag: [T.string, T.deleted], color: "#a11" }, { tag: [T.regexp, T.escape, T.special(T.string)], color: "#e40" }, { tag: T.definition(T.variableName), color: "#00f" }, { tag: T.local(T.variableName), color: "#30a" }, { tag: [T.typeName, T.namespace], color: "#085" }, { tag: T.className, color: "#167" }, { tag: [T.special(T.variableName), T.macroName], color: "#256" }, { tag: T.definition(T.propertyName), color: "#00c" }, { tag: T.comment, color: "#940" }, { tag: T.invalid, color: "#f00" }]), Yu = C.baseTheme({ "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" }, "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" } }), ka = 1e4, Ca = "()[]{}", Ma = S.define({ combine(n) {
  return Tt(n, { afterCursor: true, brackets: Ca, maxScanDistance: ka, renderMatch: Qu });
} }), Xu = D.mark({ class: "cm-matchingBracket" }), Ju = D.mark({ class: "cm-nonmatchingBracket" });
function Qu(n) {
  let t = [], e = n.matched ? Xu : Ju;
  return t.push(e.range(n.start.from, n.start.to)), n.end && t.push(e.range(n.end.from, n.end.to)), t;
}
const _u = X.define({ create() {
  return D.none;
}, update(n, t) {
  if (!t.docChanged && !t.selection)
    return n;
  let e = [], i = t.state.facet(Ma);
  for (let s of t.state.selection.ranges) {
    if (!s.empty)
      continue;
    let r = Mt(t.state, s.head, -1, i) || s.head > 0 && Mt(t.state, s.head - 1, 1, i) || i.afterCursor && (Mt(t.state, s.head, 1, i) || s.head < t.state.doc.length && Mt(t.state, s.head + 1, -1, i));
    r && (e = e.concat(i.renderMatch(r, t.state)));
  }
  return D.set(e, true);
}, provide: (n) => C.decorations.from(n) }), Zu = [_u, Yu];
function ig(n = {}) {
  return [Ma.of(n), Zu];
}
const td = new pt();
function Ls(n, t, e) {
  let i = n.prop(t < 0 ? pt.openedBy : pt.closedBy);
  if (i)
    return i;
  if (n.name.length == 1) {
    let s = e.indexOf(n.name);
    if (s > -1 && s % 2 == (t < 0 ? 1 : 0))
      return [e[s + t]];
  }
  return null;
}
function Rs(n) {
  let t = n.type.prop(td);
  return t ? t(n.node) : n;
}
function Mt(n, t, e, i = {}) {
  let s = i.maxScanDistance || ka, r = i.brackets || Ca, o = _(n), l = o.resolveInner(t, e);
  for (let a = l; a; a = a.parent) {
    let h = Ls(a.type, e, r);
    if (h && a.from < a.to) {
      let c = Rs(a);
      if (c && (e > 0 ? t >= c.from && t < c.to : t > c.from && t <= c.to))
        return ed(n, t, e, a, c, h, r);
    }
  }
  return id(n, t, e, o, l.type, s, r);
}
function ed(n, t, e, i, s, r, o) {
  let l = i.parent, a = { from: s.from, to: s.to }, h = 0, c = l == null ? void 0 : l.cursor();
  if (c && (e < 0 ? c.childBefore(i.from) : c.childAfter(i.to)))
    do
      if (e < 0 ? c.to <= i.from : c.from >= i.to) {
        if (h == 0 && r.indexOf(c.type.name) > -1 && c.from < c.to) {
          let f = Rs(c);
          return { start: a, end: f ? { from: f.from, to: f.to } : void 0, matched: true };
        } else if (Ls(c.type, e, o))
          h++;
        else if (Ls(c.type, -e, o)) {
          if (h == 0) {
            let f = Rs(c);
            return { start: a, end: f && f.from < f.to ? { from: f.from, to: f.to } : void 0, matched: false };
          }
          h--;
        }
      }
    while (e < 0 ? c.prevSibling() : c.nextSibling());
  return { start: a, matched: false };
}
function id(n, t, e, i, s, r, o) {
  let l = e < 0 ? n.sliceDoc(t - 1, t) : n.sliceDoc(t, t + 1), a = o.indexOf(l);
  if (a < 0 || a % 2 == 0 != e > 0)
    return null;
  let h = { from: e < 0 ? t - 1 : t, to: e > 0 ? t + 1 : t }, c = n.doc.iterRange(t, e > 0 ? n.doc.length : 0), f = 0;
  for (let u = 0; !c.next().done && u <= r; ) {
    let d = c.value;
    e < 0 && (u += d.length);
    let p = t + u * e;
    for (let g = e > 0 ? 0 : d.length - 1, m = e > 0 ? d.length : -1; g != m; g += e) {
      let y = o.indexOf(d[g]);
      if (!(y < 0 || i.resolveInner(p + g, 1).type != s))
        if (y % 2 == 0 == e > 0)
          f++;
        else {
          if (f == 1)
            return { start: h, end: { from: p + g, to: p + g + 1 }, matched: y >> 1 == a >> 1 };
          f--;
        }
    }
    e > 0 && (u += d.length);
  }
  return c.done ? { start: h, matched: false } : null;
}
const nd = /* @__PURE__ */ Object.create(null), xo = [Vs.none], wo = [], vo = /* @__PURE__ */ Object.create(null), sd = /* @__PURE__ */ Object.create(null);
for (let [n, t] of [["variable", "variableName"], ["variable-2", "variableName.special"], ["string-2", "string.special"], ["def", "variableName.definition"], ["tag", "tagName"], ["attribute", "attributeName"], ["type", "typeName"], ["builtin", "variableName.standard"], ["qualifier", "modifier"], ["error", "invalid"], ["header", "heading"], ["property", "propertyName"]])
  sd[n] = rd(nd, t);
function Kn(n, t) {
  wo.indexOf(n) > -1 || (wo.push(n), console.warn(t));
}
function rd(n, t) {
  let e = [];
  for (let l of t.split(" ")) {
    let a = [];
    for (let h of l.split(".")) {
      let c = n[h] || T[h];
      c ? typeof c == "function" ? a.length ? a = a.map(c) : Kn(h, `Modifier ${h} used at start of tag`) : a.length ? Kn(h, `Tag ${h} used as modifier`) : a = Array.isArray(c) ? c : [c] : Kn(h, `Unknown highlighting tag ${h}`);
    }
    for (let h of a)
      e.push(h);
  }
  if (!e.length)
    return 0;
  let i = t.replace(/ /g, "_"), s = i + " " + e.map((l) => l.id), r = vo[s];
  if (r)
    return r.id;
  let o = vo[s] = Vs.define({ id: xo.length, name: i, props: [Dh({ [i]: e })] });
  return xo.push(o), o.id;
}
H.RTL, H.LTR;
const od = (n) => {
  let { state: t } = n, e = t.doc.lineAt(t.selection.main.from), i = lr(n.state, e.from);
  return i.line ? ld(n) : i.block ? hd(n) : false;
};
function or(n, t) {
  return ({ state: e, dispatch: i }) => {
    if (e.readOnly)
      return false;
    let s = n(t, e);
    return s ? (i(e.update(s)), true) : false;
  };
}
const ld = or(ud, 0), ad = or(Aa, 0), hd = or((n, t) => Aa(n, t, fd(t)), 0);
function lr(n, t) {
  let e = n.languageDataAt("commentTokens", t);
  return e.length ? e[0] : {};
}
const He = 50;
function cd(n, { open: t, close: e }, i, s) {
  let r = n.sliceDoc(i - He, i), o = n.sliceDoc(s, s + He), l = /\s*$/.exec(r)[0].length, a = /^\s*/.exec(o)[0].length, h = r.length - l;
  if (r.slice(h - t.length, h) == t && o.slice(a, a + e.length) == e)
    return { open: { pos: i - l, margin: l && 1 }, close: { pos: s + a, margin: a && 1 } };
  let c, f;
  s - i <= 2 * He ? c = f = n.sliceDoc(i, s) : (c = n.sliceDoc(i, i + He), f = n.sliceDoc(s - He, s));
  let u = /^\s*/.exec(c)[0].length, d = /\s*$/.exec(f)[0].length, p = f.length - d - e.length;
  return c.slice(u, u + t.length) == t && f.slice(p, p + e.length) == e ? { open: { pos: i + u + t.length, margin: /\s/.test(c.charAt(u + t.length)) ? 1 : 0 }, close: { pos: s - d - e.length, margin: /\s/.test(f.charAt(p - 1)) ? 1 : 0 } } : null;
}
function fd(n) {
  let t = [];
  for (let e of n.selection.ranges) {
    let i = n.doc.lineAt(e.from), s = e.to <= i.to ? i : n.doc.lineAt(e.to);
    s.from > i.from && s.from == e.to && (s = e.to == i.to + 1 ? i : n.doc.lineAt(e.to - 1));
    let r = t.length - 1;
    r >= 0 && t[r].to > i.from ? t[r].to = s.to : t.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: s.to });
  }
  return t;
}
function Aa(n, t, e = t.selection.ranges) {
  let i = e.map((r) => lr(t, r.from).block);
  if (!i.every((r) => r))
    return null;
  let s = e.map((r, o) => cd(t, i[o], r.from, r.to));
  if (n != 2 && !s.every((r) => r))
    return { changes: t.changes(e.map((r, o) => s[o] ? [] : [{ from: r.from, insert: i[o].open + " " }, { from: r.to, insert: " " + i[o].close }])) };
  if (n != 1 && s.some((r) => r)) {
    let r = [];
    for (let o = 0, l; o < s.length; o++)
      if (l = s[o]) {
        let a = i[o], { open: h, close: c } = l;
        r.push({ from: h.pos - a.open.length, to: h.pos + h.margin }, { from: c.pos - c.margin, to: c.pos + a.close.length });
      }
    return { changes: r };
  }
  return null;
}
function ud(n, t, e = t.selection.ranges) {
  let i = [], s = -1;
  for (let { from: r, to: o } of e) {
    let l = i.length, a = 1e9, h = lr(t, r).line;
    if (h) {
      for (let c = r; c <= o; ) {
        let f = t.doc.lineAt(c);
        if (f.from > s && (r == o || o > f.from)) {
          s = f.from;
          let u = /^\s*/.exec(f.text)[0].length, d = u == f.length, p = f.text.slice(u, u + h.length) == h ? u : -1;
          u < f.text.length && u < a && (a = u), i.push({ line: f, comment: p, token: h, indent: u, empty: d, single: false });
        }
        c = f.to + 1;
      }
      if (a < 1e9)
        for (let c = l; c < i.length; c++)
          i[c].indent < i[c].line.text.length && (i[c].indent = a);
      i.length == l + 1 && (i[l].single = true);
    }
  }
  if (n != 2 && i.some((r) => r.comment < 0 && (!r.empty || r.single))) {
    let r = [];
    for (let { line: l, token: a, indent: h, empty: c, single: f } of i)
      (f || !c) && r.push({ from: l.from + h, insert: a + " " });
    let o = t.changes(r);
    return { changes: o, selection: t.selection.map(o, 1) };
  } else if (n != 1 && i.some((r) => r.comment >= 0)) {
    let r = [];
    for (let { line: o, comment: l, token: a } of i)
      if (l >= 0) {
        let h = o.from + l, c = h + a.length;
        o.text[c - o.from] == " " && c++, r.push({ from: h, to: c });
      }
    return { changes: r };
  }
  return null;
}
const Es = Ht.define(), dd = Ht.define(), pd = S.define(), Da = S.define({ combine(n) {
  return Tt(n, { minDepth: 100, newGroupDelay: 500, joinToEvent: (t, e) => e }, { minDepth: Math.max, newGroupDelay: Math.min, joinToEvent: (t, e) => (i, s) => t(i, s) || e(i, s) });
} }), Oa = X.define({ create() {
  return At.empty;
}, update(n, t) {
  let e = t.state.facet(Da), i = t.annotation(Es);
  if (i) {
    let a = lt.fromTransaction(t, i.selection), h = i.side, c = h == 0 ? n.undone : n.done;
    return a ? c = hn(c, c.length, e.minDepth, a) : c = La(c, t.startState.selection), new At(h == 0 ? i.rest : c, h == 0 ? c : i.rest);
  }
  let s = t.annotation(dd);
  if ((s == "full" || s == "before") && (n = n.isolate()), t.annotation(K.addToHistory) === false)
    return t.changes.empty ? n : n.addMapping(t.changes.desc);
  let r = lt.fromTransaction(t), o = t.annotation(K.time), l = t.annotation(K.userEvent);
  return r ? n = n.addChanges(r, o, l, e, t) : t.selection && (n = n.addSelection(t.startState.selection, o, l, e.newGroupDelay)), (s == "full" || s == "after") && (n = n.isolate()), n;
}, toJSON(n) {
  return { done: n.done.map((t) => t.toJSON()), undone: n.undone.map((t) => t.toJSON()) };
}, fromJSON(n) {
  return new At(n.done.map(lt.fromJSON), n.undone.map(lt.fromJSON));
} });
function ng(n = {}) {
  return [Oa, Da.of(n), C.domEventHandlers({ beforeinput(t, e) {
    let i = t.inputType == "historyUndo" ? Ta : t.inputType == "historyRedo" ? Ps : null;
    return i ? (t.preventDefault(), i(e)) : false;
  } })];
}
function Cn(n, t) {
  return function({ state: e, dispatch: i }) {
    if (!t && e.readOnly)
      return false;
    let s = e.field(Oa, false);
    if (!s)
      return false;
    let r = s.pop(n, e, t);
    return r ? (i(r), true) : false;
  };
}
const Ta = Cn(0, false), Ps = Cn(1, false), md = Cn(0, true), gd = Cn(1, true);
class lt {
  constructor(t, e, i, s, r) {
    this.changes = t, this.effects = e, this.mapped = i, this.startSelection = s, this.selectionsAfter = r;
  }
  setSelAfter(t) {
    return new lt(this.changes, this.effects, this.mapped, this.startSelection, t);
  }
  toJSON() {
    var t, e, i;
    return { changes: (t = this.changes) === null || t === void 0 ? void 0 : t.toJSON(), mapped: (e = this.mapped) === null || e === void 0 ? void 0 : e.toJSON(), startSelection: (i = this.startSelection) === null || i === void 0 ? void 0 : i.toJSON(), selectionsAfter: this.selectionsAfter.map((s) => s.toJSON()) };
  }
  static fromJSON(t) {
    return new lt(t.changes && $.fromJSON(t.changes), [], t.mapped && Dt.fromJSON(t.mapped), t.startSelection && b.fromJSON(t.startSelection), t.selectionsAfter.map(b.fromJSON));
  }
  static fromTransaction(t, e) {
    let i = ft;
    for (let s of t.startState.facet(pd)) {
      let r = s(t);
      r.length && (i = i.concat(r));
    }
    return !i.length && t.changes.empty ? null : new lt(t.changes.invert(t.startState.doc), i, void 0, e || t.startState.selection, ft);
  }
  static selection(t) {
    return new lt(void 0, ft, void 0, void 0, t);
  }
}
function hn(n, t, e, i) {
  let s = t + 1 > e + 20 ? t - e - 1 : 0, r = n.slice(s, t);
  return r.push(i), r;
}
function yd(n, t) {
  let e = [], i = false;
  return n.iterChangedRanges((s, r) => e.push(s, r)), t.iterChangedRanges((s, r, o, l) => {
    for (let a = 0; a < e.length; ) {
      let h = e[a++], c = e[a++];
      l >= h && o <= c && (i = true);
    }
  }), i;
}
function bd(n, t) {
  return n.ranges.length == t.ranges.length && n.ranges.filter((e, i) => e.empty != t.ranges[i].empty).length === 0;
}
function Ba(n, t) {
  return n.length ? t.length ? n.concat(t) : n : t;
}
const ft = [], xd = 200;
function La(n, t) {
  if (n.length) {
    let e = n[n.length - 1], i = e.selectionsAfter.slice(Math.max(0, e.selectionsAfter.length - xd));
    return i.length && i[i.length - 1].eq(t) ? n : (i.push(t), hn(n, n.length - 1, 1e9, e.setSelAfter(i)));
  } else
    return [lt.selection([t])];
}
function wd(n) {
  let t = n[n.length - 1], e = n.slice();
  return e[n.length - 1] = t.setSelAfter(t.selectionsAfter.slice(0, t.selectionsAfter.length - 1)), e;
}
function jn(n, t) {
  if (!n.length)
    return n;
  let e = n.length, i = ft;
  for (; e; ) {
    let s = vd(n[e - 1], t, i);
    if (s.changes && !s.changes.empty || s.effects.length) {
      let r = n.slice(0, e);
      return r[e - 1] = s, r;
    } else
      t = s.mapped, e--, i = s.selectionsAfter;
  }
  return i.length ? [lt.selection(i)] : ft;
}
function vd(n, t, e) {
  let i = Ba(n.selectionsAfter.length ? n.selectionsAfter.map((l) => l.map(t)) : ft, e);
  if (!n.changes)
    return lt.selection(i);
  let s = n.changes.map(t), r = t.mapDesc(n.changes, true), o = n.mapped ? n.mapped.composeDesc(r) : r;
  return new lt(s, O.mapEffects(n.effects, t), o, n.startSelection.map(r), i);
}
const Sd = /^(input\.type|delete)($|\.)/;
class At {
  constructor(t, e, i = 0, s = void 0) {
    this.done = t, this.undone = e, this.prevTime = i, this.prevUserEvent = s;
  }
  isolate() {
    return this.prevTime ? new At(this.done, this.undone) : this;
  }
  addChanges(t, e, i, s, r) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && t.changes && (!i || Sd.test(i)) && (!l.selectionsAfter.length && e - this.prevTime < s.newGroupDelay && s.joinToEvent(r, yd(l.changes, t.changes)) || i == "input.type.compose") ? o = hn(o, o.length - 1, s.minDepth, new lt(t.changes.compose(l.changes), Ba(O.mapEffects(t.effects, l.changes), l.effects), l.mapped, l.startSelection, ft)) : o = hn(o, o.length, s.minDepth, t), new At(o, ft, e, i);
  }
  addSelection(t, e, i, s) {
    let r = this.done.length ? this.done[this.done.length - 1].selectionsAfter : ft;
    return r.length > 0 && e - this.prevTime < s && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && bd(r[r.length - 1], t) ? this : new At(La(this.done, t), this.undone, e, i);
  }
  addMapping(t) {
    return new At(jn(this.done, t), jn(this.undone, t), this.prevTime, this.prevUserEvent);
  }
  pop(t, e, i) {
    let s = t == 0 ? this.done : this.undone;
    if (s.length == 0)
      return null;
    let r = s[s.length - 1], o = r.selectionsAfter[0] || e.selection;
    if (i && r.selectionsAfter.length)
      return e.update({ selection: r.selectionsAfter[r.selectionsAfter.length - 1], annotations: Es.of({ side: t, rest: wd(s), selection: o }), userEvent: t == 0 ? "select.undo" : "select.redo", scrollIntoView: true });
    if (r.changes) {
      let l = s.length == 1 ? ft : s.slice(0, s.length - 1);
      return r.mapped && (l = jn(l, r.mapped)), e.update({ changes: r.changes, selection: r.startSelection, effects: r.effects, annotations: Es.of({ side: t, rest: l, selection: o }), filter: false, userEvent: t == 0 ? "undo" : "redo", scrollIntoView: true });
    } else
      return null;
  }
}
At.empty = new At(ft, ft);
const sg = [{ key: "Mod-z", run: Ta, preventDefault: true }, { key: "Mod-y", mac: "Mod-Shift-z", run: Ps, preventDefault: true }, { linux: "Ctrl-Shift-z", run: Ps, preventDefault: true }, { key: "Mod-u", run: md, preventDefault: true }, { key: "Alt-u", mac: "Mod-Shift-u", run: gd, preventDefault: true }];
function Le(n, t) {
  return b.create(n.ranges.map(t), n.mainIndex);
}
function Bt(n, t) {
  return n.update({ selection: t, scrollIntoView: true, userEvent: "select" });
}
function xt({ state: n, dispatch: t }, e) {
  let i = Le(n.selection, e);
  return i.eq(n.selection, true) ? false : (t(Bt(n, i)), true);
}
function Mn(n, t) {
  return b.cursor(t ? n.to : n.from);
}
function Ra(n, t) {
  return xt(n, (e) => e.empty ? n.moveByChar(e, t) : Mn(e, t));
}
function Z(n) {
  return n.textDirectionAt(n.state.selection.main.head) == H.LTR;
}
const Ea = (n) => Ra(n, !Z(n)), Pa = (n) => Ra(n, Z(n));
function Ia(n, t) {
  return xt(n, (e) => e.empty ? n.moveByGroup(e, t) : Mn(e, t));
}
const kd = (n) => Ia(n, !Z(n)), Cd = (n) => Ia(n, Z(n));
function Md(n, t, e) {
  if (t.type.prop(e))
    return true;
  let i = t.to - t.from;
  return i && (i > 2 || /[^\s,.;:]/.test(n.sliceDoc(t.from, t.to))) || t.firstChild;
}
function An(n, t, e) {
  let i = _(n).resolveInner(t.head), s = e ? pt.closedBy : pt.openedBy;
  for (let a = t.head; ; ) {
    let h = e ? i.childAfter(a) : i.childBefore(a);
    if (!h)
      break;
    Md(n, h, s) ? i = h : a = e ? h.to : h.from;
  }
  let r = i.type.prop(s), o, l;
  return r && (o = e ? Mt(n, i.from, 1) : Mt(n, i.to, -1)) && o.matched ? l = e ? o.end.to : o.end.from : l = e ? i.to : i.from, b.cursor(l, e ? -1 : 1);
}
const Ad = (n) => xt(n, (t) => An(n.state, t, !Z(n))), Dd = (n) => xt(n, (t) => An(n.state, t, Z(n)));
function Na(n, t) {
  return xt(n, (e) => {
    if (!e.empty)
      return Mn(e, t);
    let i = n.moveVertically(e, t);
    return i.head != e.head ? i : n.moveToLineBoundary(e, t);
  });
}
const Fa = (n) => Na(n, false), Ha = (n) => Na(n, true);
function Va(n) {
  let t = n.scrollDOM.clientHeight < n.scrollDOM.scrollHeight - 2, e = 0, i = 0, s;
  if (t) {
    for (let r of n.state.facet(C.scrollMargins)) {
      let o = r(n);
      (o == null ? void 0 : o.top) && (e = Math.max(o == null ? void 0 : o.top, e)), (o == null ? void 0 : o.bottom) && (i = Math.max(o == null ? void 0 : o.bottom, i));
    }
    s = n.scrollDOM.clientHeight - e - i;
  } else
    s = (n.dom.ownerDocument.defaultView || window).innerHeight;
  return { marginTop: e, marginBottom: i, selfScroll: t, height: Math.max(n.defaultLineHeight, s - 5) };
}
function Wa(n, t) {
  let e = Va(n), { state: i } = n, s = Le(i.selection, (o) => o.empty ? n.moveVertically(o, t, e.height) : Mn(o, t));
  if (s.eq(i.selection))
    return false;
  let r;
  if (e.selfScroll) {
    let o = n.coordsAtPos(i.selection.main.head), l = n.scrollDOM.getBoundingClientRect(), a = l.top + e.marginTop, h = l.bottom - e.marginBottom;
    o && o.top > a && o.bottom < h && (r = C.scrollIntoView(s.main.head, { y: "start", yMargin: o.top - a }));
  }
  return n.dispatch(Bt(i, s), { effects: r }), true;
}
const So = (n) => Wa(n, false), Is = (n) => Wa(n, true);
function Jt(n, t, e) {
  let i = n.lineBlockAt(t.head), s = n.moveToLineBoundary(t, e);
  if (s.head == t.head && s.head != (e ? i.to : i.from) && (s = n.moveToLineBoundary(t, e, false)), !e && s.head == i.from && i.length) {
    let r = /^\s*/.exec(n.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    r && t.head != i.from + r && (s = b.cursor(i.from + r));
  }
  return s;
}
const Od = (n) => xt(n, (t) => Jt(n, t, true)), Td = (n) => xt(n, (t) => Jt(n, t, false)), Bd = (n) => xt(n, (t) => Jt(n, t, !Z(n))), Ld = (n) => xt(n, (t) => Jt(n, t, Z(n))), Rd = (n) => xt(n, (t) => b.cursor(n.lineBlockAt(t.head).from, 1)), Ed = (n) => xt(n, (t) => b.cursor(n.lineBlockAt(t.head).to, -1));
function Pd(n, t, e) {
  let i = false, s = Le(n.selection, (r) => {
    let o = Mt(n, r.head, -1) || Mt(n, r.head, 1) || r.head > 0 && Mt(n, r.head - 1, 1) || r.head < n.doc.length && Mt(n, r.head + 1, -1);
    if (!o || !o.end)
      return r;
    i = true;
    let l = o.start.from == r.head ? o.end.to : o.end.from;
    return e ? b.range(r.anchor, l) : b.cursor(l);
  });
  return i ? (t(Bt(n, s)), true) : false;
}
const Id = ({ state: n, dispatch: t }) => Pd(n, t, false);
function gt(n, t) {
  let e = Le(n.state.selection, (i) => {
    let s = t(i);
    return b.range(i.anchor, s.head, s.goalColumn, s.bidiLevel || void 0);
  });
  return e.eq(n.state.selection) ? false : (n.dispatch(Bt(n.state, e)), true);
}
function za(n, t) {
  return gt(n, (e) => n.moveByChar(e, t));
}
const qa = (n) => za(n, !Z(n)), $a = (n) => za(n, Z(n));
function Ka(n, t) {
  return gt(n, (e) => n.moveByGroup(e, t));
}
const Nd = (n) => Ka(n, !Z(n)), Fd = (n) => Ka(n, Z(n)), Hd = (n) => gt(n, (t) => An(n.state, t, !Z(n))), Vd = (n) => gt(n, (t) => An(n.state, t, Z(n)));
function ja(n, t) {
  return gt(n, (e) => n.moveVertically(e, t));
}
const Ua = (n) => ja(n, false), Ga = (n) => ja(n, true);
function Ya(n, t) {
  return gt(n, (e) => n.moveVertically(e, t, Va(n).height));
}
const ko = (n) => Ya(n, false), Co = (n) => Ya(n, true), Wd = (n) => gt(n, (t) => Jt(n, t, true)), zd = (n) => gt(n, (t) => Jt(n, t, false)), qd = (n) => gt(n, (t) => Jt(n, t, !Z(n))), $d = (n) => gt(n, (t) => Jt(n, t, Z(n))), Kd = (n) => gt(n, (t) => b.cursor(n.lineBlockAt(t.head).from)), jd = (n) => gt(n, (t) => b.cursor(n.lineBlockAt(t.head).to)), Mo = ({ state: n, dispatch: t }) => (t(Bt(n, { anchor: 0 })), true), Ao = ({ state: n, dispatch: t }) => (t(Bt(n, { anchor: n.doc.length })), true), Do = ({ state: n, dispatch: t }) => (t(Bt(n, { anchor: n.selection.main.anchor, head: 0 })), true), Oo = ({ state: n, dispatch: t }) => (t(Bt(n, { anchor: n.selection.main.anchor, head: n.doc.length })), true), Ud = ({ state: n, dispatch: t }) => (t(n.update({ selection: { anchor: 0, head: n.doc.length }, userEvent: "select" })), true), Gd = ({ state: n, dispatch: t }) => {
  let e = Dn(n).map(({ from: i, to: s }) => b.range(i, Math.min(s + 1, n.doc.length)));
  return t(n.update({ selection: b.create(e), userEvent: "select" })), true;
}, Yd = ({ state: n, dispatch: t }) => {
  let e = Le(n.selection, (i) => {
    let s = _(n), r = s.resolveStack(i.from, 1);
    if (i.empty) {
      let o = s.resolveStack(i.from, -1);
      o.node.from >= r.node.from && o.node.to <= r.node.to && (r = o);
    }
    for (let o = r; o; o = o.next) {
      let { node: l } = o;
      if ((l.from < i.from && l.to >= i.to || l.to > i.to && l.from <= i.from) && o.next)
        return b.range(l.to, l.from);
    }
    return i;
  });
  return e.eq(n.selection) ? false : (t(Bt(n, e)), true);
}, Xd = ({ state: n, dispatch: t }) => {
  let e = n.selection, i = null;
  return e.ranges.length > 1 ? i = b.create([e.main]) : e.main.empty || (i = b.create([b.cursor(e.main.head)])), i ? (t(Bt(n, i)), true) : false;
};
function gi(n, t) {
  if (n.state.readOnly)
    return false;
  let e = "delete.selection", { state: i } = n, s = i.changeByRange((r) => {
    let { from: o, to: l } = r;
    if (o == l) {
      let a = t(r);
      a < o ? (e = "delete.backward", a = Ii(n, a, false)) : a > o && (e = "delete.forward", a = Ii(n, a, true)), o = Math.min(o, a), l = Math.max(l, a);
    } else
      o = Ii(n, o, false), l = Ii(n, l, true);
    return o == l ? { range: r } : { changes: { from: o, to: l }, range: b.cursor(o, o < r.head ? -1 : 1) };
  });
  return s.changes.empty ? false : (n.dispatch(i.update(s, { scrollIntoView: true, userEvent: e, effects: e == "delete.selection" ? C.announce.of(i.phrase("Selection deleted")) : void 0 })), true);
}
function Ii(n, t, e) {
  if (n instanceof C)
    for (let i of n.state.facet(C.atomicRanges).map((s) => s(n)))
      i.between(t, t, (s, r) => {
        s < t && r > t && (t = e ? r : s);
      });
  return t;
}
const Xa = (n, t, e) => gi(n, (i) => {
  let s = i.from, { state: r } = n, o = r.doc.lineAt(s), l, a;
  if (e && !t && s > o.from && s < o.from + 200 && !/[^ \t]/.test(l = o.text.slice(0, s - o.from))) {
    if (l[l.length - 1] == "	")
      return s - 1;
    let h = Be(l, r.tabSize), c = h % on(r) || on(r);
    for (let f = 0; f < c && l[l.length - 1 - f] == " "; f++)
      s--;
    a = s;
  } else
    a = Y(o.text, s - o.from, t, t) + o.from, a == s && o.number != (t ? r.doc.lines : 1) ? a += t ? 1 : -1 : !t && /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, s - o.from)) && (a = Y(o.text, a - o.from, false, false) + o.from);
  return a;
}), Ns = (n) => Xa(n, false, true), Ja = (n) => Xa(n, true, false), Qa = (n, t) => gi(n, (e) => {
  let i = e.head, { state: s } = n, r = s.doc.lineAt(i), o = s.charCategorizer(i);
  for (let l = null; ; ) {
    if (i == (t ? r.to : r.from)) {
      i == e.head && r.number != (t ? s.doc.lines : 1) && (i += t ? 1 : -1);
      break;
    }
    let a = Y(r.text, i - r.from, t) + r.from, h = r.text.slice(Math.min(i, a) - r.from, Math.max(i, a) - r.from), c = o(h);
    if (l != null && c != l)
      break;
    (h != " " || i != e.head) && (l = c), i = a;
  }
  return i;
}), _a = (n) => Qa(n, false), Jd = (n) => Qa(n, true), Qd = (n) => gi(n, (t) => {
  let e = n.lineBlockAt(t.head).to;
  return t.head < e ? e : Math.min(n.state.doc.length, t.head + 1);
}), _d = (n) => gi(n, (t) => {
  let e = n.moveToLineBoundary(t, false).head;
  return t.head > e ? e : Math.max(0, t.head - 1);
}), Zd = (n) => gi(n, (t) => {
  let e = n.moveToLineBoundary(t, true).head;
  return t.head < e ? e : Math.min(n.state.doc.length, t.head + 1);
}), tp = ({ state: n, dispatch: t }) => {
  if (n.readOnly)
    return false;
  let e = n.changeByRange((i) => ({ changes: { from: i.from, to: i.to, insert: L.of(["", ""]) }, range: b.cursor(i.from) }));
  return t(n.update(e, { scrollIntoView: true, userEvent: "input" })), true;
}, ep = ({ state: n, dispatch: t }) => {
  if (n.readOnly)
    return false;
  let e = n.changeByRange((i) => {
    if (!i.empty || i.from == 0 || i.from == n.doc.length)
      return { range: i };
    let s = i.from, r = n.doc.lineAt(s), o = s == r.from ? s - 1 : Y(r.text, s - r.from, false) + r.from, l = s == r.to ? s + 1 : Y(r.text, s - r.from, true) + r.from;
    return { changes: { from: o, to: l, insert: n.doc.slice(s, l).append(n.doc.slice(o, s)) }, range: b.cursor(l) };
  });
  return e.changes.empty ? false : (t(n.update(e, { scrollIntoView: true, userEvent: "move.character" })), true);
};
function Dn(n) {
  let t = [], e = -1;
  for (let i of n.selection.ranges) {
    let s = n.doc.lineAt(i.from), r = n.doc.lineAt(i.to);
    if (!i.empty && i.to == r.from && (r = n.doc.lineAt(i.to - 1)), e >= s.number) {
      let o = t[t.length - 1];
      o.to = r.to, o.ranges.push(i);
    } else
      t.push({ from: s.from, to: r.to, ranges: [i] });
    e = r.number + 1;
  }
  return t;
}
function Za(n, t, e) {
  if (n.readOnly)
    return false;
  let i = [], s = [];
  for (let r of Dn(n)) {
    if (e ? r.to == n.doc.length : r.from == 0)
      continue;
    let o = n.doc.lineAt(e ? r.to + 1 : r.from - 1), l = o.length + 1;
    if (e) {
      i.push({ from: r.to, to: o.to }, { from: r.from, insert: o.text + n.lineBreak });
      for (let a of r.ranges)
        s.push(b.range(Math.min(n.doc.length, a.anchor + l), Math.min(n.doc.length, a.head + l)));
    } else {
      i.push({ from: o.from, to: r.from }, { from: r.to, insert: n.lineBreak + o.text });
      for (let a of r.ranges)
        s.push(b.range(a.anchor - l, a.head - l));
    }
  }
  return i.length ? (t(n.update({ changes: i, scrollIntoView: true, selection: b.create(s, n.selection.mainIndex), userEvent: "move.line" })), true) : false;
}
const ip = ({ state: n, dispatch: t }) => Za(n, t, false), np = ({ state: n, dispatch: t }) => Za(n, t, true);
function th(n, t, e) {
  if (n.readOnly)
    return false;
  let i = [];
  for (let s of Dn(n))
    e ? i.push({ from: s.from, insert: n.doc.slice(s.from, s.to) + n.lineBreak }) : i.push({ from: s.to, insert: n.lineBreak + n.doc.slice(s.from, s.to) });
  return t(n.update({ changes: i, scrollIntoView: true, userEvent: "input.copyline" })), true;
}
const sp = ({ state: n, dispatch: t }) => th(n, t, false), rp = ({ state: n, dispatch: t }) => th(n, t, true), op = (n) => {
  if (n.state.readOnly)
    return false;
  let { state: t } = n, e = t.changes(Dn(t).map(({ from: s, to: r }) => (s > 0 ? s-- : r < t.doc.length && r++, { from: s, to: r }))), i = Le(t.selection, (s) => {
    let r;
    if (n.lineWrapping) {
      let o = n.lineBlockAt(s.head), l = n.coordsAtPos(s.head, s.assoc || 1);
      l && (r = o.bottom + n.documentTop - l.bottom + n.defaultLineHeight / 2);
    }
    return n.moveVertically(s, true, r);
  }).map(e);
  return n.dispatch({ changes: e, selection: i, scrollIntoView: true, userEvent: "delete.line" }), true;
};
function lp(n, t) {
  if (/\(\)|\[\]|\{\}/.test(n.sliceDoc(t - 1, t + 1)))
    return { from: t, to: t };
  let e = _(n).resolveInner(t), i = e.childBefore(t), s = e.childAfter(t), r;
  return i && s && i.to <= t && s.from >= t && (r = i.type.prop(pt.closedBy)) && r.indexOf(s.name) > -1 && n.doc.lineAt(i.to).from == n.doc.lineAt(s.from).from && !/\S/.test(n.sliceDoc(i.to, s.from)) ? { from: i.to, to: s.from } : null;
}
const To = eh(false), ap = eh(true);
function eh(n) {
  return ({ state: t, dispatch: e }) => {
    if (t.readOnly)
      return false;
    let i = t.changeByRange((s) => {
      let { from: r, to: o } = s, l = t.doc.lineAt(r), a = !n && r == o && lp(t, r);
      n && (r = o = (o <= l.to ? l : t.doc.lineAt(o)).to);
      let h = new vn(t, { simulateBreak: r, simulateDoubleBreak: !!a }), c = nr(h, r);
      for (c == null && (c = Be(/^\s*/.exec(t.doc.lineAt(r).text)[0], t.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); )
        o++;
      a ? { from: r, to: o } = a : r > l.from && r < l.from + 100 && !/\S/.test(l.text.slice(0, r)) && (r = l.from);
      let f = ["", ri(t, c)];
      return a && f.push(ri(t, h.lineIndent(l.from, -1))), { changes: { from: r, to: o, insert: L.of(f) }, range: b.cursor(r + 1 + f[1].length) };
    });
    return e(t.update(i, { scrollIntoView: true, userEvent: "input" })), true;
  };
}
function ar(n, t) {
  let e = -1;
  return n.changeByRange((i) => {
    let s = [];
    for (let o = i.from; o <= i.to; ) {
      let l = n.doc.lineAt(o);
      l.number > e && (i.empty || i.to > l.from) && (t(l, s, i), e = l.number), o = l.to + 1;
    }
    let r = n.changes(s);
    return { changes: s, range: b.range(r.mapPos(i.anchor, 1), r.mapPos(i.head, 1)) };
  });
}
const hp = ({ state: n, dispatch: t }) => {
  if (n.readOnly)
    return false;
  let e = /* @__PURE__ */ Object.create(null), i = new vn(n, { overrideIndentation: (r) => {
    let o = e[r];
    return o ?? -1;
  } }), s = ar(n, (r, o, l) => {
    let a = nr(i, r.from);
    if (a == null)
      return;
    /\S/.test(r.text) || (a = 0);
    let h = /^\s*/.exec(r.text)[0], c = ri(n, a);
    (h != c || l.from < r.from + h.length) && (e[r.from] = a, o.push({ from: r.from, to: r.from + h.length, insert: c }));
  });
  return s.changes.empty || t(n.update(s, { userEvent: "indent" })), true;
}, ih = ({ state: n, dispatch: t }) => n.readOnly ? false : (t(n.update(ar(n, (e, i) => {
  i.push({ from: e.from, insert: n.facet(ir) });
}), { userEvent: "input.indent" })), true), nh = ({ state: n, dispatch: t }) => n.readOnly ? false : (t(n.update(ar(n, (e, i) => {
  let s = /^\s*/.exec(e.text)[0];
  if (!s)
    return;
  let r = Be(s, n.tabSize), o = 0, l = ri(n, Math.max(0, r - on(n)));
  for (; o < s.length && o < l.length && s.charCodeAt(o) == l.charCodeAt(o); )
    o++;
  i.push({ from: e.from + o, to: e.from + s.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), true), cp = (n) => (n.setTabFocusMode(), true), fp = [{ key: "Ctrl-b", run: Ea, shift: qa, preventDefault: true }, { key: "Ctrl-f", run: Pa, shift: $a }, { key: "Ctrl-p", run: Fa, shift: Ua }, { key: "Ctrl-n", run: Ha, shift: Ga }, { key: "Ctrl-a", run: Rd, shift: Kd }, { key: "Ctrl-e", run: Ed, shift: jd }, { key: "Ctrl-d", run: Ja }, { key: "Ctrl-h", run: Ns }, { key: "Ctrl-k", run: Qd }, { key: "Ctrl-Alt-h", run: _a }, { key: "Ctrl-o", run: tp }, { key: "Ctrl-t", run: ep }, { key: "Ctrl-v", run: Is }], up = [{ key: "ArrowLeft", run: Ea, shift: qa, preventDefault: true }, { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: kd, shift: Nd, preventDefault: true }, { mac: "Cmd-ArrowLeft", run: Bd, shift: qd, preventDefault: true }, { key: "ArrowRight", run: Pa, shift: $a, preventDefault: true }, { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: Cd, shift: Fd, preventDefault: true }, { mac: "Cmd-ArrowRight", run: Ld, shift: $d, preventDefault: true }, { key: "ArrowUp", run: Fa, shift: Ua, preventDefault: true }, { mac: "Cmd-ArrowUp", run: Mo, shift: Do }, { mac: "Ctrl-ArrowUp", run: So, shift: ko }, { key: "ArrowDown", run: Ha, shift: Ga, preventDefault: true }, { mac: "Cmd-ArrowDown", run: Ao, shift: Oo }, { mac: "Ctrl-ArrowDown", run: Is, shift: Co }, { key: "PageUp", run: So, shift: ko }, { key: "PageDown", run: Is, shift: Co }, { key: "Home", run: Td, shift: zd, preventDefault: true }, { key: "Mod-Home", run: Mo, shift: Do }, { key: "End", run: Od, shift: Wd, preventDefault: true }, { key: "Mod-End", run: Ao, shift: Oo }, { key: "Enter", run: To, shift: To }, { key: "Mod-a", run: Ud }, { key: "Backspace", run: Ns, shift: Ns }, { key: "Delete", run: Ja }, { key: "Mod-Backspace", mac: "Alt-Backspace", run: _a }, { key: "Mod-Delete", mac: "Alt-Delete", run: Jd }, { mac: "Mod-Backspace", run: _d }, { mac: "Mod-Delete", run: Zd }].concat(fp.map((n) => ({ mac: n.key, run: n.run, shift: n.shift }))), rg = [{ key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: Ad, shift: Hd }, { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: Dd, shift: Vd }, { key: "Alt-ArrowUp", run: ip }, { key: "Shift-Alt-ArrowUp", run: sp }, { key: "Alt-ArrowDown", run: np }, { key: "Shift-Alt-ArrowDown", run: rp }, { key: "Escape", run: Xd }, { key: "Mod-Enter", run: ap }, { key: "Alt-l", mac: "Ctrl-l", run: Gd }, { key: "Mod-i", run: Yd, preventDefault: true }, { key: "Mod-[", run: nh }, { key: "Mod-]", run: ih }, { key: "Mod-Alt-\\", run: hp }, { key: "Shift-Mod-k", run: op }, { key: "Shift-Mod-\\", run: Id }, { key: "Mod-/", run: od }, { key: "Alt-A", run: ad }, { key: "Ctrl-m", mac: "Shift-Alt-m", run: cp }].concat(up), og = { key: "Tab", run: ih, shift: nh }, Bo = typeof String.prototype.normalize == "function" ? (n) => n.normalize("NFKD") : (n) => n;
class Oe {
  constructor(t, e, i = 0, s = t.length, r, o) {
    this.test = o, this.value = { from: 0, to: 0 }, this.done = false, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = t.iterRange(i, s), this.bufferStart = i, this.normalize = r ? (l) => r(Bo(l)) : Bo, this.query = this.normalize(e);
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done)
        return -1;
      this.bufferPos = 0, this.buffer = this.iter.value;
    }
    return nt(this.buffer, this.bufferPos);
  }
  next() {
    for (; this.matches.length; )
      this.matches.pop();
    return this.nextOverlapping();
  }
  nextOverlapping() {
    for (; ; ) {
      let t = this.peek();
      if (t < 0)
        return this.done = true, this;
      let e = Ws(t), i = this.bufferStart + this.bufferPos;
      this.bufferPos += St(t);
      let s = this.normalize(e);
      if (s.length)
        for (let r = 0, o = i; ; r++) {
          let l = s.charCodeAt(r), a = this.match(l, o, this.bufferPos + this.bufferStart);
          if (r == s.length - 1) {
            if (a)
              return this.value = a, this;
            break;
          }
          o == i && r < e.length && e.charCodeAt(r) == l && o++;
        }
    }
  }
  match(t, e, i) {
    let s = null;
    for (let r = 0; r < this.matches.length; r += 2) {
      let o = this.matches[r], l = false;
      this.query.charCodeAt(o) == t && (o == this.query.length - 1 ? s = { from: this.matches[r + 1], to: i } : (this.matches[r]++, l = true)), l || (this.matches.splice(r, 2), r -= 2);
    }
    return this.query.charCodeAt(0) == t && (this.query.length == 1 ? s = { from: e, to: i } : this.matches.push(1, e)), s && this.test && !this.test(s.from, s.to, this.buffer, this.bufferStart) && (s = null), s;
  }
}
typeof Symbol < "u" && (Oe.prototype[Symbol.iterator] = function() {
  return this;
});
const sh = { from: -1, to: -1, match: /.*/.exec("") }, hr = "gm" + (/x/.unicode == null ? "" : "u");
class rh {
  constructor(t, e, i, s = 0, r = t.length) {
    if (this.text = t, this.to = r, this.curLine = "", this.done = false, this.value = sh, /\\[sWDnr]|\n|\r|\[\^/.test(e))
      return new oh(t, e, i, s, r);
    this.re = new RegExp(e, hr + ((i == null ? void 0 : i.ignoreCase) ? "i" : "")), this.test = i == null ? void 0 : i.test, this.iter = t.iter();
    let o = t.lineAt(s);
    this.curLineStart = o.from, this.matchPos = cn(t, s), this.getLine(this.curLineStart);
  }
  getLine(t) {
    this.iter.next(t), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
  }
  nextLine() {
    this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
  }
  next() {
    for (let t = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = t;
      let e = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (e) {
        let i = this.curLineStart + e.index, s = i + e[0].length;
        if (this.matchPos = cn(this.text, s + (i == s ? 1 : 0)), i == this.curLineStart + this.curLine.length && this.nextLine(), (i < s || i > this.value.to) && (!this.test || this.test(i, s, e)))
          return this.value = { from: i, to: s, match: e }, this;
        t = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to)
        this.nextLine(), t = 0;
      else
        return this.done = true, this;
    }
  }
}
const Un = /* @__PURE__ */ new WeakMap();
class we {
  constructor(t, e) {
    this.from = t, this.text = e;
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(t, e, i) {
    let s = Un.get(t);
    if (!s || s.from >= i || s.to <= e) {
      let l = new we(e, t.sliceString(e, i));
      return Un.set(t, l), l;
    }
    if (s.from == e && s.to == i)
      return s;
    let { text: r, from: o } = s;
    return o > e && (r = t.sliceString(e, o) + r, o = e), s.to < i && (r += t.sliceString(s.to, i)), Un.set(t, new we(o, r)), new we(e, r.slice(e - o, i - o));
  }
}
class oh {
  constructor(t, e, i, s, r) {
    this.text = t, this.to = r, this.done = false, this.value = sh, this.matchPos = cn(t, s), this.re = new RegExp(e, hr + ((i == null ? void 0 : i.ignoreCase) ? "i" : "")), this.test = i == null ? void 0 : i.test, this.flat = we.get(t, s, this.chunkEnd(s + 5e3));
  }
  chunkEnd(t) {
    return t >= this.to ? this.to : this.text.lineAt(t).to;
  }
  next() {
    for (; ; ) {
      let t = this.re.lastIndex = this.matchPos - this.flat.from, e = this.re.exec(this.flat.text);
      if (e && !e[0] && e.index == t && (this.re.lastIndex = t + 1, e = this.re.exec(this.flat.text)), e) {
        let i = this.flat.from + e.index, s = i + e[0].length;
        if ((this.flat.to >= this.to || e.index + e[0].length <= this.flat.text.length - 10) && (!this.test || this.test(i, s, e)))
          return this.value = { from: i, to: s, match: e }, this.matchPos = cn(this.text, s + (i == s ? 1 : 0)), this;
      }
      if (this.flat.to == this.to)
        return this.done = true, this;
      this.flat = we.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
    }
  }
}
typeof Symbol < "u" && (rh.prototype[Symbol.iterator] = oh.prototype[Symbol.iterator] = function() {
  return this;
});
function dp(n) {
  try {
    return new RegExp(n, hr), true;
  } catch {
    return false;
  }
}
function cn(n, t) {
  if (t >= n.length)
    return t;
  let e = n.lineAt(t), i;
  for (; t < e.to && (i = e.text.charCodeAt(t - e.from)) >= 56320 && i < 57344; )
    t++;
  return t;
}
function Fs(n) {
  let t = String(n.state.doc.lineAt(n.state.selection.main.head).number), e = P("input", { class: "cm-textfield", name: "line", value: t }), i = P("form", { class: "cm-gotoLine", onkeydown: (r) => {
    r.keyCode == 27 ? (r.preventDefault(), n.dispatch({ effects: Je.of(false) }), n.focus()) : r.keyCode == 13 && (r.preventDefault(), s());
  }, onsubmit: (r) => {
    r.preventDefault(), s();
  } }, P("label", n.state.phrase("Go to line"), ": ", e), " ", P("button", { class: "cm-button", type: "submit" }, n.state.phrase("go")), P("button", { name: "close", onclick: () => {
    n.dispatch({ effects: Je.of(false) }), n.focus();
  }, "aria-label": n.state.phrase("close"), type: "button" }, ["\xD7"]));
  function s() {
    let r = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(e.value);
    if (!r)
      return;
    let { state: o } = n, l = o.doc.lineAt(o.selection.main.head), [, a, h, c, f] = r, u = c ? +c.slice(1) : 0, d = h ? +h : l.number;
    if (h && f) {
      let m = d / 100;
      a && (m = m * (a == "-" ? -1 : 1) + l.number / o.doc.lines), d = Math.round(o.doc.lines * m);
    } else
      h && a && (d = d * (a == "-" ? -1 : 1) + l.number);
    let p = o.doc.line(Math.max(1, Math.min(o.doc.lines, d))), g = b.cursor(p.from + Math.max(0, Math.min(u, p.length)));
    n.dispatch({ effects: [Je.of(false), C.scrollIntoView(g.from, { y: "center" })], selection: g }), n.focus();
  }
  return { dom: i };
}
const Je = O.define(), Lo = X.define({ create() {
  return true;
}, update(n, t) {
  for (let e of t.effects)
    e.is(Je) && (n = e.value);
  return n;
}, provide: (n) => si.from(n, (t) => t ? Fs : null) }), pp = (n) => {
  let t = ni(n, Fs);
  if (!t) {
    let e = [Je.of(true)];
    n.state.field(Lo, false) == null && e.push(O.appendConfig.of([Lo, mp])), n.dispatch({ effects: e }), t = ni(n, Fs);
  }
  return t && t.dom.querySelector("input").select(), true;
}, mp = C.baseTheme({ ".cm-panel.cm-gotoLine": { padding: "2px 6px 4px", position: "relative", "& label": { fontSize: "80%" }, "& [name=close]": { position: "absolute", top: "0", bottom: "0", right: "4px", backgroundColor: "inherit", border: "none", font: "inherit", padding: "0" } } }), gp = { highlightWordAroundCursor: false, minSelectionLength: 1, maxMatches: 100, wholeWords: false }, lh = S.define({ combine(n) {
  return Tt(n, gp, { highlightWordAroundCursor: (t, e) => t || e, minSelectionLength: Math.min, maxMatches: Math.min });
} });
function lg(n) {
  let t = [vp, wp];
  return n && t.push(lh.of(n)), t;
}
const yp = D.mark({ class: "cm-selectionMatch" }), bp = D.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function Ro(n, t, e, i) {
  return (e == 0 || n(t.sliceDoc(e - 1, e)) != V.Word) && (i == t.doc.length || n(t.sliceDoc(i, i + 1)) != V.Word);
}
function xp(n, t, e, i) {
  return n(t.sliceDoc(e, e + 1)) == V.Word && n(t.sliceDoc(i - 1, i)) == V.Word;
}
const wp = z.fromClass(class {
  constructor(n) {
    this.decorations = this.getDeco(n);
  }
  update(n) {
    (n.selectionSet || n.docChanged || n.viewportChanged) && (this.decorations = this.getDeco(n.view));
  }
  getDeco(n) {
    let t = n.state.facet(lh), { state: e } = n, i = e.selection;
    if (i.ranges.length > 1)
      return D.none;
    let s = i.main, r, o = null;
    if (s.empty) {
      if (!t.highlightWordAroundCursor)
        return D.none;
      let a = e.wordAt(s.head);
      if (!a)
        return D.none;
      o = e.charCategorizer(s.head), r = e.sliceDoc(a.from, a.to);
    } else {
      let a = s.to - s.from;
      if (a < t.minSelectionLength || a > 200)
        return D.none;
      if (t.wholeWords) {
        if (r = e.sliceDoc(s.from, s.to), o = e.charCategorizer(s.head), !(Ro(o, e, s.from, s.to) && xp(o, e, s.from, s.to)))
          return D.none;
      } else if (r = e.sliceDoc(s.from, s.to), !r)
        return D.none;
    }
    let l = [];
    for (let a of n.visibleRanges) {
      let h = new Oe(e.doc, r, a.from, a.to);
      for (; !h.next().done; ) {
        let { from: c, to: f } = h.value;
        if ((!o || Ro(o, e, c, f)) && (s.empty && c <= s.from && f >= s.to ? l.push(bp.range(c, f)) : (c >= s.to || f <= s.from) && l.push(yp.range(c, f)), l.length > t.maxMatches))
          return D.none;
      }
    }
    return D.set(l);
  }
}, { decorations: (n) => n.decorations }), vp = C.baseTheme({ ".cm-selectionMatch": { backgroundColor: "#99ff7780" }, ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" } }), Sp = ({ state: n, dispatch: t }) => {
  let { selection: e } = n, i = b.create(e.ranges.map((s) => n.wordAt(s.head) || b.cursor(s.head)), e.mainIndex);
  return i.eq(e) ? false : (t(n.update({ selection: i })), true);
};
function kp(n, t) {
  let { main: e, ranges: i } = n.selection, s = n.wordAt(e.head), r = s && s.from == e.from && s.to == e.to;
  for (let o = false, l = new Oe(n.doc, t, i[i.length - 1].to); ; )
    if (l.next(), l.done) {
      if (o)
        return null;
      l = new Oe(n.doc, t, 0, Math.max(0, i[i.length - 1].from - 1)), o = true;
    } else {
      if (o && i.some((a) => a.from == l.value.from))
        continue;
      if (r) {
        let a = n.wordAt(l.value.from);
        if (!a || a.from != l.value.from || a.to != l.value.to)
          continue;
      }
      return l.value;
    }
}
const Cp = ({ state: n, dispatch: t }) => {
  let { ranges: e } = n.selection;
  if (e.some((r) => r.from === r.to))
    return Sp({ state: n, dispatch: t });
  let i = n.sliceDoc(e[0].from, e[0].to);
  if (n.selection.ranges.some((r) => n.sliceDoc(r.from, r.to) != i))
    return false;
  let s = kp(n, i);
  return s ? (t(n.update({ selection: n.selection.addRange(b.range(s.from, s.to), false), effects: C.scrollIntoView(s.to) })), true) : false;
}, Re = S.define({ combine(n) {
  return Tt(n, { top: false, caseSensitive: false, literal: false, regexp: false, wholeWord: false, createPanel: (t) => new Ip(t), scrollToMatch: (t) => C.scrollIntoView(t) });
} });
class ah {
  constructor(t) {
    this.search = t.search, this.caseSensitive = !!t.caseSensitive, this.literal = !!t.literal, this.regexp = !!t.regexp, this.replace = t.replace || "", this.valid = !!this.search && (!this.regexp || dp(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!t.wholeWord;
  }
  unquote(t) {
    return this.literal ? t : t.replace(/\\([nrt\\])/g, (e, i) => i == "n" ? `
` : i == "r" ? "\r" : i == "t" ? "	" : "\\");
  }
  eq(t) {
    return this.search == t.search && this.replace == t.replace && this.caseSensitive == t.caseSensitive && this.regexp == t.regexp && this.wholeWord == t.wholeWord;
  }
  create() {
    return this.regexp ? new Op(this) : new Ap(this);
  }
  getCursor(t, e = 0, i) {
    let s = t.doc ? t : R.create({ doc: t });
    return i == null && (i = s.doc.length), this.regexp ? de(this, s, e, i) : ue(this, s, e, i);
  }
}
class hh {
  constructor(t) {
    this.spec = t;
  }
}
function ue(n, t, e, i) {
  return new Oe(t.doc, n.unquoted, e, i, n.caseSensitive ? void 0 : (s) => s.toLowerCase(), n.wholeWord ? Mp(t.doc, t.charCategorizer(t.selection.main.head)) : void 0);
}
function Mp(n, t) {
  return (e, i, s, r) => ((r > e || r + s.length < i) && (r = Math.max(0, e - 2), s = n.sliceString(r, Math.min(n.length, i + 2))), (t(fn(s, e - r)) != V.Word || t(un(s, e - r)) != V.Word) && (t(un(s, i - r)) != V.Word || t(fn(s, i - r)) != V.Word));
}
class Ap extends hh {
  constructor(t) {
    super(t);
  }
  nextMatch(t, e, i) {
    let s = ue(this.spec, t, i, t.doc.length).nextOverlapping();
    if (s.done) {
      let r = Math.min(t.doc.length, e + this.spec.unquoted.length);
      s = ue(this.spec, t, 0, r).nextOverlapping();
    }
    return s.done || s.value.from == e && s.value.to == i ? null : s.value;
  }
  prevMatchInRange(t, e, i) {
    for (let s = i; ; ) {
      let r = Math.max(e, s - 1e4 - this.spec.unquoted.length), o = ue(this.spec, t, r, s), l = null;
      for (; !o.nextOverlapping().done; )
        l = o.value;
      if (l)
        return l;
      if (r == e)
        return null;
      s -= 1e4;
    }
  }
  prevMatch(t, e, i) {
    let s = this.prevMatchInRange(t, 0, e);
    return s || (s = this.prevMatchInRange(t, Math.max(0, i - this.spec.unquoted.length), t.doc.length)), s && (s.from != e || s.to != i) ? s : null;
  }
  getReplacement(t) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(t, e) {
    let i = ue(this.spec, t, 0, t.doc.length), s = [];
    for (; !i.next().done; ) {
      if (s.length >= e)
        return null;
      s.push(i.value);
    }
    return s;
  }
  highlight(t, e, i, s) {
    let r = ue(this.spec, t, Math.max(0, e - this.spec.unquoted.length), Math.min(i + this.spec.unquoted.length, t.doc.length));
    for (; !r.next().done; )
      s(r.value.from, r.value.to);
  }
}
function de(n, t, e, i) {
  return new rh(t.doc, n.search, { ignoreCase: !n.caseSensitive, test: n.wholeWord ? Dp(t.charCategorizer(t.selection.main.head)) : void 0 }, e, i);
}
function fn(n, t) {
  return n.slice(Y(n, t, false), t);
}
function un(n, t) {
  return n.slice(t, Y(n, t));
}
function Dp(n) {
  return (t, e, i) => !i[0].length || (n(fn(i.input, i.index)) != V.Word || n(un(i.input, i.index)) != V.Word) && (n(un(i.input, i.index + i[0].length)) != V.Word || n(fn(i.input, i.index + i[0].length)) != V.Word);
}
class Op extends hh {
  nextMatch(t, e, i) {
    let s = de(this.spec, t, i, t.doc.length).next();
    return s.done && (s = de(this.spec, t, 0, e).next()), s.done ? null : s.value;
  }
  prevMatchInRange(t, e, i) {
    for (let s = 1; ; s++) {
      let r = Math.max(e, i - s * 1e4), o = de(this.spec, t, r, i), l = null;
      for (; !o.next().done; )
        l = o.value;
      if (l && (r == e || l.from > r + 10))
        return l;
      if (r == e)
        return null;
    }
  }
  prevMatch(t, e, i) {
    return this.prevMatchInRange(t, 0, e) || this.prevMatchInRange(t, i, t.doc.length);
  }
  getReplacement(t) {
    return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, (e, i) => {
      if (i == "&")
        return t.match[0];
      if (i == "$")
        return "$";
      for (let s = i.length; s > 0; s--) {
        let r = +i.slice(0, s);
        if (r > 0 && r < t.match.length)
          return t.match[r] + i.slice(s);
      }
      return e;
    });
  }
  matchAll(t, e) {
    let i = de(this.spec, t, 0, t.doc.length), s = [];
    for (; !i.next().done; ) {
      if (s.length >= e)
        return null;
      s.push(i.value);
    }
    return s;
  }
  highlight(t, e, i, s) {
    let r = de(this.spec, t, Math.max(0, e - 250), Math.min(i + 250, t.doc.length));
    for (; !r.next().done; )
      s(r.value.from, r.value.to);
  }
}
const oi = O.define(), cr = O.define(), Ut = X.define({ create(n) {
  return new Gn(Hs(n).create(), null);
}, update(n, t) {
  for (let e of t.effects)
    e.is(oi) ? n = new Gn(e.value.create(), n.panel) : e.is(cr) && (n = new Gn(n.query, e.value ? fr : null));
  return n;
}, provide: (n) => si.from(n, (t) => t.panel) });
class Gn {
  constructor(t, e) {
    this.query = t, this.panel = e;
  }
}
const Tp = D.mark({ class: "cm-searchMatch" }), Bp = D.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), Lp = z.fromClass(class {
  constructor(n) {
    this.view = n, this.decorations = this.highlight(n.state.field(Ut));
  }
  update(n) {
    let t = n.state.field(Ut);
    (t != n.startState.field(Ut) || n.docChanged || n.selectionSet || n.viewportChanged) && (this.decorations = this.highlight(t));
  }
  highlight({ query: n, panel: t }) {
    if (!t || !n.spec.valid)
      return D.none;
    let { view: e } = this, i = new It();
    for (let s = 0, r = e.visibleRanges, o = r.length; s < o; s++) {
      let { from: l, to: a } = r[s];
      for (; s < o - 1 && a > r[s + 1].from - 2 * 250; )
        a = r[++s].to;
      n.highlight(e.state, l, a, (h, c) => {
        let f = e.state.selection.ranges.some((u) => u.from == h && u.to == c);
        i.add(h, c, f ? Bp : Tp);
      });
    }
    return i.finish();
  }
}, { decorations: (n) => n.decorations });
function yi(n) {
  return (t) => {
    let e = t.state.field(Ut, false);
    return e && e.query.spec.valid ? n(t, e) : uh(t);
  };
}
const dn = yi((n, { query: t }) => {
  let { to: e } = n.state.selection.main, i = t.nextMatch(n.state, e, e);
  if (!i)
    return false;
  let s = b.single(i.from, i.to), r = n.state.facet(Re);
  return n.dispatch({ selection: s, effects: [ur(n, i), r.scrollToMatch(s.main, n)], userEvent: "select.search" }), fh(n), true;
}), pn = yi((n, { query: t }) => {
  let { state: e } = n, { from: i } = e.selection.main, s = t.prevMatch(e, i, i);
  if (!s)
    return false;
  let r = b.single(s.from, s.to), o = n.state.facet(Re);
  return n.dispatch({ selection: r, effects: [ur(n, s), o.scrollToMatch(r.main, n)], userEvent: "select.search" }), fh(n), true;
}), Rp = yi((n, { query: t }) => {
  let e = t.matchAll(n.state, 1e3);
  return !e || !e.length ? false : (n.dispatch({ selection: b.create(e.map((i) => b.range(i.from, i.to))), userEvent: "select.search.matches" }), true);
}), Ep = ({ state: n, dispatch: t }) => {
  let e = n.selection;
  if (e.ranges.length > 1 || e.main.empty)
    return false;
  let { from: i, to: s } = e.main, r = [], o = 0;
  for (let l = new Oe(n.doc, n.sliceDoc(i, s)); !l.next().done; ) {
    if (r.length > 1e3)
      return false;
    l.value.from == i && (o = r.length), r.push(b.range(l.value.from, l.value.to));
  }
  return t(n.update({ selection: b.create(r, o), userEvent: "select.search.matches" })), true;
}, Eo = yi((n, { query: t }) => {
  let { state: e } = n, { from: i, to: s } = e.selection.main;
  if (e.readOnly)
    return false;
  let r = t.nextMatch(e, i, i);
  if (!r)
    return false;
  let o = r, l = [], a, h, c = [];
  if (o.from == i && o.to == s && (h = e.toText(t.getReplacement(o)), l.push({ from: o.from, to: o.to, insert: h }), o = t.nextMatch(e, o.from, o.to), c.push(C.announce.of(e.phrase("replaced match on line $", e.doc.lineAt(i).number) + "."))), o) {
    let f = l.length == 0 || l[0].from >= r.to ? 0 : r.to - r.from - h.length;
    a = b.single(o.from - f, o.to - f), c.push(ur(n, o)), c.push(e.facet(Re).scrollToMatch(a.main, n));
  }
  return n.dispatch({ changes: l, selection: a, effects: c, userEvent: "input.replace" }), true;
}), Pp = yi((n, { query: t }) => {
  if (n.state.readOnly)
    return false;
  let e = t.matchAll(n.state, 1e9).map((s) => {
    let { from: r, to: o } = s;
    return { from: r, to: o, insert: t.getReplacement(s) };
  });
  if (!e.length)
    return false;
  let i = n.state.phrase("replaced $ matches", e.length) + ".";
  return n.dispatch({ changes: e, effects: C.announce.of(i), userEvent: "input.replace.all" }), true;
});
function fr(n) {
  return n.state.facet(Re).createPanel(n);
}
function Hs(n, t) {
  var e, i, s, r, o;
  let l = n.selection.main, a = l.empty || l.to > l.from + 100 ? "" : n.sliceDoc(l.from, l.to);
  if (t && !a)
    return t;
  let h = n.facet(Re);
  return new ah({ search: ((e = t == null ? void 0 : t.literal) !== null && e !== void 0 ? e : h.literal) ? a : a.replace(/\n/g, "\\n"), caseSensitive: (i = t == null ? void 0 : t.caseSensitive) !== null && i !== void 0 ? i : h.caseSensitive, literal: (s = t == null ? void 0 : t.literal) !== null && s !== void 0 ? s : h.literal, regexp: (r = t == null ? void 0 : t.regexp) !== null && r !== void 0 ? r : h.regexp, wholeWord: (o = t == null ? void 0 : t.wholeWord) !== null && o !== void 0 ? o : h.wholeWord });
}
function ch(n) {
  let t = ni(n, fr);
  return t && t.dom.querySelector("[main-field]");
}
function fh(n) {
  let t = ch(n);
  t && t == n.root.activeElement && t.select();
}
const uh = (n) => {
  let t = n.state.field(Ut, false);
  if (t && t.panel) {
    let e = ch(n);
    if (e && e != n.root.activeElement) {
      let i = Hs(n.state, t.query.spec);
      i.valid && n.dispatch({ effects: oi.of(i) }), e.focus(), e.select();
    }
  } else
    n.dispatch({ effects: [cr.of(true), t ? oi.of(Hs(n.state, t.query.spec)) : O.appendConfig.of(Fp)] });
  return true;
}, dh = (n) => {
  let t = n.state.field(Ut, false);
  if (!t || !t.panel)
    return false;
  let e = ni(n, fr);
  return e && e.dom.contains(n.root.activeElement) && n.focus(), n.dispatch({ effects: cr.of(false) }), true;
}, ag = [{ key: "Mod-f", run: uh, scope: "editor search-panel" }, { key: "F3", run: dn, shift: pn, scope: "editor search-panel", preventDefault: true }, { key: "Mod-g", run: dn, shift: pn, scope: "editor search-panel", preventDefault: true }, { key: "Escape", run: dh, scope: "editor search-panel" }, { key: "Mod-Shift-l", run: Ep }, { key: "Mod-Alt-g", run: pp }, { key: "Mod-d", run: Cp, preventDefault: true }];
class Ip {
  constructor(t) {
    this.view = t;
    let e = this.query = t.state.field(Ut).query.spec;
    this.commit = this.commit.bind(this), this.searchField = P("input", { value: e.search, placeholder: at(t, "Find"), "aria-label": at(t, "Find"), class: "cm-textfield", name: "search", form: "", "main-field": "true", onchange: this.commit, onkeyup: this.commit }), this.replaceField = P("input", { value: e.replace, placeholder: at(t, "Replace"), "aria-label": at(t, "Replace"), class: "cm-textfield", name: "replace", form: "", onchange: this.commit, onkeyup: this.commit }), this.caseField = P("input", { type: "checkbox", name: "case", form: "", checked: e.caseSensitive, onchange: this.commit }), this.reField = P("input", { type: "checkbox", name: "re", form: "", checked: e.regexp, onchange: this.commit }), this.wordField = P("input", { type: "checkbox", name: "word", form: "", checked: e.wholeWord, onchange: this.commit });
    function i(s, r, o) {
      return P("button", { class: "cm-button", name: s, onclick: r, type: "button" }, o);
    }
    this.dom = P("div", { onkeydown: (s) => this.keydown(s), class: "cm-search" }, [this.searchField, i("next", () => dn(t), [at(t, "next")]), i("prev", () => pn(t), [at(t, "previous")]), i("select", () => Rp(t), [at(t, "all")]), P("label", null, [this.caseField, at(t, "match case")]), P("label", null, [this.reField, at(t, "regexp")]), P("label", null, [this.wordField, at(t, "by word")]), ...t.state.readOnly ? [] : [P("br"), this.replaceField, i("replace", () => Eo(t), [at(t, "replace")]), i("replaceAll", () => Pp(t), [at(t, "replace all")])], P("button", { name: "close", onclick: () => dh(t), "aria-label": at(t, "close"), type: "button" }, ["\xD7"])]);
  }
  commit() {
    let t = new ah({ search: this.searchField.value, caseSensitive: this.caseField.checked, regexp: this.reField.checked, wholeWord: this.wordField.checked, replace: this.replaceField.value });
    t.eq(this.query) || (this.query = t, this.view.dispatch({ effects: oi.of(t) }));
  }
  keydown(t) {
    Af(this.view, t, "search-panel") ? t.preventDefault() : t.keyCode == 13 && t.target == this.searchField ? (t.preventDefault(), (t.shiftKey ? pn : dn)(this.view)) : t.keyCode == 13 && t.target == this.replaceField && (t.preventDefault(), Eo(this.view));
  }
  update(t) {
    for (let e of t.transactions)
      for (let i of e.effects)
        i.is(oi) && !i.value.eq(this.query) && this.setQuery(i.value);
  }
  setQuery(t) {
    this.query = t, this.searchField.value = t.search, this.replaceField.value = t.replace, this.caseField.checked = t.caseSensitive, this.reField.checked = t.regexp, this.wordField.checked = t.wholeWord;
  }
  mount() {
    this.searchField.select();
  }
  get pos() {
    return 80;
  }
  get top() {
    return this.view.state.facet(Re).top;
  }
}
function at(n, t) {
  return n.state.phrase(t);
}
const Ni = 30, Fi = /[\s\.,:;?!]/;
function ur(n, { from: t, to: e }) {
  let i = n.state.doc.lineAt(t), s = n.state.doc.lineAt(e).to, r = Math.max(i.from, t - Ni), o = Math.min(s, e + Ni), l = n.state.sliceDoc(r, o);
  if (r != i.from) {
    for (let a = 0; a < Ni; a++)
      if (!Fi.test(l[a + 1]) && Fi.test(l[a])) {
        l = l.slice(a);
        break;
      }
  }
  if (o != s) {
    for (let a = l.length - 1; a > l.length - Ni; a--)
      if (!Fi.test(l[a - 1]) && Fi.test(l[a])) {
        l = l.slice(0, a);
        break;
      }
  }
  return C.announce.of(`${n.state.phrase("current match")}. ${l} ${n.state.phrase("on line")} ${i.number}.`);
}
const Np = C.baseTheme({ ".cm-panel.cm-search": { padding: "2px 6px 4px", position: "relative", "& [name=close]": { position: "absolute", top: "0", right: "4px", backgroundColor: "inherit", border: "none", font: "inherit", padding: 0, margin: 0 }, "& input, & button, & label": { margin: ".2em .6em .2em 0" }, "& input[type=checkbox]": { marginRight: ".2em" }, "& label": { fontSize: "80%", whiteSpace: "pre" } }, "&light .cm-searchMatch": { backgroundColor: "#ffff0054" }, "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" }, "&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" }, "&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" } }), Fp = [Ut, he.low(Lp), Np];
class ph {
  constructor(t, e, i, s) {
    this.state = t, this.pos = e, this.explicit = i, this.view = s, this.abortListeners = [], this.abortOnDocChange = false;
  }
  tokenBefore(t) {
    let e = _(this.state).resolveInner(this.pos, -1);
    for (; e && t.indexOf(e.name) < 0; )
      e = e.parent;
    return e ? { from: e.from, to: this.pos, text: this.state.sliceDoc(e.from, this.pos), type: e.type } : null;
  }
  matchBefore(t) {
    let e = this.state.doc.lineAt(this.pos), i = Math.max(e.from, this.pos - 250), s = e.text.slice(i - e.from, this.pos - e.from), r = s.search(mh(t, false));
    return r < 0 ? null : { from: i + r, to: this.pos, text: s.slice(r) };
  }
  get aborted() {
    return this.abortListeners == null;
  }
  addEventListener(t, e, i) {
    t == "abort" && this.abortListeners && (this.abortListeners.push(e), i && i.onDocChange && (this.abortOnDocChange = true));
  }
}
function Po(n) {
  let t = Object.keys(n).join(""), e = /\w/.test(t);
  return e && (t = t.replace(/\w/g, "")), `[${e ? "\\w" : ""}${t.replace(/[^\w\s]/g, "\\$&")}]`;
}
function Hp(n) {
  let t = /* @__PURE__ */ Object.create(null), e = /* @__PURE__ */ Object.create(null);
  for (let { label: s } of n) {
    t[s[0]] = true;
    for (let r = 1; r < s.length; r++)
      e[s[r]] = true;
  }
  let i = Po(t) + Po(e) + "*$";
  return [new RegExp("^" + i), new RegExp(i)];
}
function Vp(n) {
  let t = n.map((s) => typeof s == "string" ? { label: s } : s), [e, i] = t.every((s) => /^\w+$/.test(s.label)) ? [/\w*$/, /\w+$/] : Hp(t);
  return (s) => {
    let r = s.matchBefore(i);
    return r || s.explicit ? { from: r ? r.from : s.pos, options: t, validFor: e } : null;
  };
}
class Io {
  constructor(t, e, i, s) {
    this.completion = t, this.source = e, this.match = i, this.score = s;
  }
}
function ne(n) {
  return n.selection.main.from;
}
function mh(n, t) {
  var e;
  let { source: i } = n, s = t && i[0] != "^", r = i[i.length - 1] != "$";
  return !s && !r ? n : new RegExp(`${s ? "^" : ""}(?:${i})${r ? "$" : ""}`, (e = n.flags) !== null && e !== void 0 ? e : n.ignoreCase ? "i" : "");
}
const gh = Ht.define();
function Wp(n, t, e, i) {
  let { main: s } = n.selection, r = e - s.from, o = i - s.from;
  return Object.assign(Object.assign({}, n.changeByRange((l) => {
    if (l != s && e != i && n.sliceDoc(l.from + r, l.from + o) != n.sliceDoc(e, i))
      return { range: l };
    let a = n.toText(t);
    return { changes: { from: l.from + r, to: i == s.from ? l.to : l.from + o, insert: a }, range: b.cursor(l.from + r + a.length) };
  })), { scrollIntoView: true, userEvent: "input.complete" });
}
const No = /* @__PURE__ */ new WeakMap();
function zp(n) {
  if (!Array.isArray(n))
    return n;
  let t = No.get(n);
  return t || No.set(n, t = Vp(n)), t;
}
const mn = O.define(), li = O.define();
class qp {
  constructor(t) {
    this.pattern = t, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
    for (let e = 0; e < t.length; ) {
      let i = nt(t, e), s = St(i);
      this.chars.push(i);
      let r = t.slice(e, e + s), o = r.toUpperCase();
      this.folded.push(nt(o == r ? r.toLowerCase() : o, 0)), e += s;
    }
    this.astral = t.length != this.chars.length;
  }
  ret(t, e) {
    return this.score = t, this.matched = e, this;
  }
  match(t) {
    if (this.pattern.length == 0)
      return this.ret(-100, []);
    if (t.length < this.pattern.length)
      return null;
    let { chars: e, folded: i, any: s, precise: r, byWord: o } = this;
    if (e.length == 1) {
      let x = nt(t, 0), M = St(x), v = M == t.length ? 0 : -100;
      if (x != e[0])
        if (x == i[0])
          v += -200;
        else
          return null;
      return this.ret(v, [0, M]);
    }
    let l = t.indexOf(this.pattern);
    if (l == 0)
      return this.ret(t.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = e.length, h = 0;
    if (l < 0) {
      for (let x = 0, M = Math.min(t.length, 200); x < M && h < a; ) {
        let v = nt(t, x);
        (v == e[h] || v == i[h]) && (s[h++] = x), x += St(v);
      }
      if (h < a)
        return null;
    }
    let c = 0, f = 0, u = false, d = 0, p = -1, g = -1, m = /[a-z]/.test(t), y = true;
    for (let x = 0, M = Math.min(t.length, 200), v = 0; x < M && f < a; ) {
      let k = nt(t, x);
      l < 0 && (c < a && k == e[c] && (r[c++] = x), d < a && (k == e[d] || k == i[d] ? (d == 0 && (p = x), g = x + 1, d++) : d = 0));
      let A, E = k < 255 ? k >= 48 && k <= 57 || k >= 97 && k <= 122 ? 2 : k >= 65 && k <= 90 ? 1 : 0 : (A = Ws(k)) != A.toLowerCase() ? 1 : A != A.toUpperCase() ? 2 : 0;
      (!x || E == 1 && m || v == 0 && E != 0) && (e[f] == k || i[f] == k && (u = true) ? o[f++] = x : o.length && (y = false)), v = E, x += St(k);
    }
    return f == a && o[0] == 0 && y ? this.result(-100 + (u ? -200 : 0), o, t) : d == a && p == 0 ? this.ret(-200 - t.length + (g == t.length ? 0 : -100), [0, g]) : l > -1 ? this.ret(-700 - t.length, [l, l + this.pattern.length]) : d == a ? this.ret(-200 + -700 - t.length, [p, g]) : f == a ? this.result(-100 + (u ? -200 : 0) + -700 + (y ? 0 : -1100), o, t) : e.length == 2 ? null : this.result((s[0] ? -700 : 0) + -200 + -1100, s, t);
  }
  result(t, e, i) {
    let s = [], r = 0;
    for (let o of e) {
      let l = o + (this.astral ? St(nt(i, o)) : 1);
      r && s[r - 1] == o ? s[r - 1] = l : (s[r++] = o, s[r++] = l);
    }
    return this.ret(t - i.length, s);
  }
}
class $p {
  constructor(t) {
    this.pattern = t, this.matched = [], this.score = 0, this.folded = t.toLowerCase();
  }
  match(t) {
    if (t.length < this.pattern.length)
      return null;
    let e = t.slice(0, this.pattern.length), i = e == this.pattern ? 0 : e.toLowerCase() == this.folded ? -200 : null;
    return i == null ? null : (this.matched = [0, e.length], this.score = i + (t.length == this.pattern.length ? 0 : -100), this);
  }
}
const j = S.define({ combine(n) {
  return Tt(n, { activateOnTyping: true, activateOnCompletion: () => false, activateOnTypingDelay: 100, selectOnOpen: true, override: null, closeOnBlur: true, maxRenderedOptions: 100, defaultKeymap: true, tooltipClass: () => "", optionClass: () => "", aboveCursor: false, icons: true, addToOptions: [], positionInfo: Kp, filterStrict: false, compareCompletions: (t, e) => t.label.localeCompare(e.label), interactionDelay: 75, updateSyncTime: 100 }, { defaultKeymap: (t, e) => t && e, closeOnBlur: (t, e) => t && e, icons: (t, e) => t && e, tooltipClass: (t, e) => (i) => Fo(t(i), e(i)), optionClass: (t, e) => (i) => Fo(t(i), e(i)), addToOptions: (t, e) => t.concat(e), filterStrict: (t, e) => t || e });
} });
function Fo(n, t) {
  return n ? t ? n + " " + t : n : t;
}
function Kp(n, t, e, i, s, r) {
  let o = n.textDirection == H.RTL, l = o, a = false, h = "top", c, f, u = t.left - s.left, d = s.right - t.right, p = i.right - i.left, g = i.bottom - i.top;
  if (l && u < Math.min(p, d) ? l = false : !l && d < Math.min(p, u) && (l = true), p <= (l ? u : d))
    c = Math.max(s.top, Math.min(e.top, s.bottom - g)) - t.top, f = Math.min(400, l ? u : d);
  else {
    a = true, f = Math.min(400, (o ? t.right : s.right - t.left) - 30);
    let x = s.bottom - t.bottom;
    x >= g || x > t.top ? c = e.bottom - t.top : (h = "bottom", c = t.bottom - e.top);
  }
  let m = (t.bottom - t.top) / r.offsetHeight, y = (t.right - t.left) / r.offsetWidth;
  return { style: `${h}: ${c / m}px; max-width: ${f / y}px`, class: "cm-completionInfo-" + (a ? o ? "left-narrow" : "right-narrow" : l ? "left" : "right") };
}
function jp(n) {
  let t = n.addToOptions.slice();
  return n.icons && t.push({ render(e) {
    let i = document.createElement("div");
    return i.classList.add("cm-completionIcon"), e.type && i.classList.add(...e.type.split(/\s+/g).map((s) => "cm-completionIcon-" + s)), i.setAttribute("aria-hidden", "true"), i;
  }, position: 20 }), t.push({ render(e, i, s, r) {
    let o = document.createElement("span");
    o.className = "cm-completionLabel";
    let l = e.displayLabel || e.label, a = 0;
    for (let h = 0; h < r.length; ) {
      let c = r[h++], f = r[h++];
      c > a && o.appendChild(document.createTextNode(l.slice(a, c)));
      let u = o.appendChild(document.createElement("span"));
      u.appendChild(document.createTextNode(l.slice(c, f))), u.className = "cm-completionMatchedText", a = f;
    }
    return a < l.length && o.appendChild(document.createTextNode(l.slice(a))), o;
  }, position: 50 }, { render(e) {
    if (!e.detail)
      return null;
    let i = document.createElement("span");
    return i.className = "cm-completionDetail", i.textContent = e.detail, i;
  }, position: 80 }), t.sort((e, i) => e.position - i.position).map((e) => e.render);
}
function Yn(n, t, e) {
  if (n <= e)
    return { from: 0, to: n };
  if (t < 0 && (t = 0), t <= n >> 1) {
    let s = Math.floor(t / e);
    return { from: s * e, to: (s + 1) * e };
  }
  let i = Math.floor((n - t) / e);
  return { from: n - (i + 1) * e, to: n - i * e };
}
class Up {
  constructor(t, e, i) {
    this.view = t, this.stateField = e, this.applyCompletion = i, this.info = null, this.infoDestroy = null, this.placeInfoReq = { read: () => this.measureInfo(), write: (a) => this.placeInfo(a), key: this }, this.space = null, this.currentClass = "";
    let s = t.state.field(e), { options: r, selected: o } = s.open, l = t.state.facet(j);
    this.optionContent = jp(l), this.optionClass = l.optionClass, this.tooltipClass = l.tooltipClass, this.range = Yn(r.length, o, l.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(t.state), this.dom.addEventListener("mousedown", (a) => {
      let { options: h } = t.state.field(e).open;
      for (let c = a.target, f; c && c != this.dom; c = c.parentNode)
        if (c.nodeName == "LI" && (f = /-(\d+)$/.exec(c.id)) && +f[1] < h.length) {
          this.applyCompletion(t, h[+f[1]]), a.preventDefault();
          return;
        }
    }), this.dom.addEventListener("focusout", (a) => {
      let h = t.state.field(this.stateField, false);
      h && h.tooltip && t.state.facet(j).closeOnBlur && a.relatedTarget != t.contentDOM && t.dispatch({ effects: li.of(null) });
    }), this.showOptions(r, s.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(t, e) {
    this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(t, e, this.range)), this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  update(t) {
    var e;
    let i = t.state.field(this.stateField), s = t.startState.field(this.stateField);
    if (this.updateTooltipClass(t.state), i != s) {
      let { options: r, selected: o, disabled: l } = i.open;
      (!s.open || s.open.options != r) && (this.range = Yn(r.length, o, t.state.facet(j).maxRenderedOptions), this.showOptions(r, i.id)), this.updateSel(), l != ((e = s.open) === null || e === void 0 ? void 0 : e.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
    }
  }
  updateTooltipClass(t) {
    let e = this.tooltipClass(t);
    if (e != this.currentClass) {
      for (let i of this.currentClass.split(" "))
        i && this.dom.classList.remove(i);
      for (let i of e.split(" "))
        i && this.dom.classList.add(i);
      this.currentClass = e;
    }
  }
  positioned(t) {
    this.space = t, this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let t = this.view.state.field(this.stateField), e = t.open;
    if ((e.selected > -1 && e.selected < this.range.from || e.selected >= this.range.to) && (this.range = Yn(e.options.length, e.selected, this.view.state.facet(j).maxRenderedOptions), this.showOptions(e.options, t.id)), this.updateSelectedOption(e.selected)) {
      this.destroyInfo();
      let { completion: i } = e.options[e.selected], { info: s } = i;
      if (!s)
        return;
      let r = typeof s == "string" ? document.createTextNode(s) : s(i);
      if (!r)
        return;
      "then" in r ? r.then((o) => {
        o && this.view.state.field(this.stateField, false) == t && this.addInfoPane(o, i);
      }).catch((o) => ot(this.view.state, o, "completion info")) : this.addInfoPane(r, i);
    }
  }
  addInfoPane(t, e) {
    this.destroyInfo();
    let i = this.info = document.createElement("div");
    if (i.className = "cm-tooltip cm-completionInfo", t.nodeType != null)
      i.appendChild(t), this.infoDestroy = null;
    else {
      let { dom: s, destroy: r } = t;
      i.appendChild(s), this.infoDestroy = r || null;
    }
    this.dom.appendChild(i), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(t) {
    let e = null;
    for (let i = this.list.firstChild, s = this.range.from; i; i = i.nextSibling, s++)
      i.nodeName != "LI" || !i.id ? s-- : s == t ? i.hasAttribute("aria-selected") || (i.setAttribute("aria-selected", "true"), e = i) : i.hasAttribute("aria-selected") && i.removeAttribute("aria-selected");
    return e && Yp(this.list, e), e;
  }
  measureInfo() {
    let t = this.dom.querySelector("[aria-selected]");
    if (!t || !this.info)
      return null;
    let e = this.dom.getBoundingClientRect(), i = this.info.getBoundingClientRect(), s = t.getBoundingClientRect(), r = this.space;
    if (!r) {
      let o = this.dom.ownerDocument.documentElement;
      r = { left: 0, top: 0, right: o.clientWidth, bottom: o.clientHeight };
    }
    return s.top > Math.min(r.bottom, e.bottom) - 10 || s.bottom < Math.max(r.top, e.top) + 10 ? null : this.view.state.facet(j).positionInfo(this.view, e, s, i, r, this.dom);
  }
  placeInfo(t) {
    this.info && (t ? (t.style && (this.info.style.cssText = t.style), this.info.className = "cm-tooltip cm-completionInfo " + (t.class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(t, e, i) {
    const s = document.createElement("ul");
    s.id = e, s.setAttribute("role", "listbox"), s.setAttribute("aria-expanded", "true"), s.setAttribute("aria-label", this.view.state.phrase("Completions")), s.addEventListener("mousedown", (o) => {
      o.target == s && o.preventDefault();
    });
    let r = null;
    for (let o = i.from; o < i.to; o++) {
      let { completion: l, match: a } = t[o], { section: h } = l;
      if (h) {
        let u = typeof h == "string" ? h : h.name;
        if (u != r && (o > i.from || i.from == 0))
          if (r = u, typeof h != "string" && h.header)
            s.appendChild(h.header(h));
          else {
            let d = s.appendChild(document.createElement("completion-section"));
            d.textContent = u;
          }
      }
      const c = s.appendChild(document.createElement("li"));
      c.id = e + "-" + o, c.setAttribute("role", "option");
      let f = this.optionClass(l);
      f && (c.className = f);
      for (let u of this.optionContent) {
        let d = u(l, this.view.state, this.view, a);
        d && c.appendChild(d);
      }
    }
    return i.from && s.classList.add("cm-completionListIncompleteTop"), i.to < t.length && s.classList.add("cm-completionListIncompleteBottom"), s;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function Gp(n, t) {
  return (e) => new Up(e, n, t);
}
function Yp(n, t) {
  let e = n.getBoundingClientRect(), i = t.getBoundingClientRect(), s = e.height / n.offsetHeight;
  i.top < e.top ? n.scrollTop -= (e.top - i.top) / s : i.bottom > e.bottom && (n.scrollTop += (i.bottom - e.bottom) / s);
}
function Ho(n) {
  return (n.boost || 0) * 100 + (n.apply ? 10 : 0) + (n.info ? 5 : 0) + (n.type ? 1 : 0);
}
function Xp(n, t) {
  let e = [], i = null, s = (h) => {
    e.push(h);
    let { section: c } = h.completion;
    if (c) {
      i || (i = []);
      let f = typeof c == "string" ? c : c.name;
      i.some((u) => u.name == f) || i.push(typeof c == "string" ? { name: f } : c);
    }
  }, r = t.facet(j);
  for (let h of n)
    if (h.hasResult()) {
      let c = h.result.getMatch;
      if (h.result.filter === false)
        for (let f of h.result.options)
          s(new Io(f, h.source, c ? c(f) : [], 1e9 - e.length));
      else {
        let f = t.sliceDoc(h.from, h.to), u, d = r.filterStrict ? new $p(f) : new qp(f);
        for (let p of h.result.options)
          if (u = d.match(p.label)) {
            let g = p.displayLabel ? c ? c(p, u.matched) : [] : u.matched;
            s(new Io(p, h.source, g, u.score + (p.boost || 0)));
          }
      }
    }
  if (i) {
    let h = /* @__PURE__ */ Object.create(null), c = 0, f = (u, d) => {
      var p, g;
      return ((p = u.rank) !== null && p !== void 0 ? p : 1e9) - ((g = d.rank) !== null && g !== void 0 ? g : 1e9) || (u.name < d.name ? -1 : 1);
    };
    for (let u of i.sort(f))
      c -= 1e5, h[u.name] = c;
    for (let u of e) {
      let { section: d } = u.completion;
      d && (u.score += h[typeof d == "string" ? d : d.name]);
    }
  }
  let o = [], l = null, a = r.compareCompletions;
  for (let h of e.sort((c, f) => f.score - c.score || a(c.completion, f.completion))) {
    let c = h.completion;
    !l || l.label != c.label || l.detail != c.detail || l.type != null && c.type != null && l.type != c.type || l.apply != c.apply || l.boost != c.boost ? o.push(h) : Ho(h.completion) > Ho(l) && (o[o.length - 1] = h), l = h.completion;
  }
  return o;
}
class ge {
  constructor(t, e, i, s, r, o) {
    this.options = t, this.attrs = e, this.tooltip = i, this.timestamp = s, this.selected = r, this.disabled = o;
  }
  setSelected(t, e) {
    return t == this.selected || t >= this.options.length ? this : new ge(this.options, Vo(e, t), this.tooltip, this.timestamp, t, this.disabled);
  }
  static build(t, e, i, s, r, o) {
    if (s && !o && t.some((h) => h.isPending))
      return s.setDisabled();
    let l = Xp(t, e);
    if (!l.length)
      return s && t.some((h) => h.isPending) ? s.setDisabled() : null;
    let a = e.facet(j).selectOnOpen ? 0 : -1;
    if (s && s.selected != a && s.selected != -1) {
      let h = s.options[s.selected].completion;
      for (let c = 0; c < l.length; c++)
        if (l[c].completion == h) {
          a = c;
          break;
        }
    }
    return new ge(l, Vo(i, a), { pos: t.reduce((h, c) => c.hasResult() ? Math.min(h, c.from) : h, 1e8), create: em, above: r.aboveCursor }, s ? s.timestamp : Date.now(), a, false);
  }
  map(t) {
    return new ge(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), { pos: t.mapPos(this.tooltip.pos) }), this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new ge(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, true);
  }
}
class gn {
  constructor(t, e, i) {
    this.active = t, this.id = e, this.open = i;
  }
  static start() {
    return new gn(Zp, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(t) {
    let { state: e } = t, i = e.facet(j), r = (i.override || e.languageDataAt("autocomplete", ne(e)).map(zp)).map((a) => (this.active.find((c) => c.source == a) || new ut(a, this.active.some((c) => c.state != 0) ? 1 : 0)).update(t, i));
    r.length == this.active.length && r.every((a, h) => a == this.active[h]) && (r = this.active);
    let o = this.open, l = t.effects.some((a) => a.is(dr));
    o && t.docChanged && (o = o.map(t.changes)), t.selection || r.some((a) => a.hasResult() && t.changes.touchesRange(a.from, a.to)) || !Jp(r, this.active) || l ? o = ge.build(r, e, this.id, o, i, l) : o && o.disabled && !r.some((a) => a.isPending) && (o = null), !o && r.every((a) => !a.isPending) && r.some((a) => a.hasResult()) && (r = r.map((a) => a.hasResult() ? new ut(a.source, 0) : a));
    for (let a of t.effects)
      a.is(bh) && (o = o && o.setSelected(a.value, this.id));
    return r == this.active && o == this.open ? this : new gn(r, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? Qp : _p;
  }
}
function Jp(n, t) {
  if (n == t)
    return true;
  for (let e = 0, i = 0; ; ) {
    for (; e < n.length && !n[e].hasResult(); )
      e++;
    for (; i < t.length && !t[i].hasResult(); )
      i++;
    let s = e == n.length, r = i == t.length;
    if (s || r)
      return s == r;
    if (n[e++].result != t[i++].result)
      return false;
  }
}
const Qp = { "aria-autocomplete": "list" }, _p = {};
function Vo(n, t) {
  let e = { "aria-autocomplete": "list", "aria-haspopup": "listbox", "aria-controls": n };
  return t > -1 && (e["aria-activedescendant"] = n + "-" + t), e;
}
const Zp = [];
function yh(n, t) {
  if (n.isUserEvent("input.complete")) {
    let i = n.annotation(gh);
    if (i && t.activateOnCompletion(i))
      return 12;
  }
  let e = n.isUserEvent("input.type");
  return e && t.activateOnTyping ? 5 : e ? 1 : n.isUserEvent("delete.backward") ? 2 : n.selection ? 8 : n.docChanged ? 16 : 0;
}
class ut {
  constructor(t, e, i = false) {
    this.source = t, this.state = e, this.explicit = i;
  }
  hasResult() {
    return false;
  }
  get isPending() {
    return this.state == 1;
  }
  update(t, e) {
    let i = yh(t, e), s = this;
    (i & 8 || i & 16 && this.touches(t)) && (s = new ut(s.source, 0)), i & 4 && s.state == 0 && (s = new ut(this.source, 1)), s = s.updateFor(t, i);
    for (let r of t.effects)
      if (r.is(mn))
        s = new ut(s.source, 1, r.value);
      else if (r.is(li))
        s = new ut(s.source, 0);
      else if (r.is(dr))
        for (let o of r.value)
          o.source == s.source && (s = o);
    return s;
  }
  updateFor(t, e) {
    return this.map(t.changes);
  }
  map(t) {
    return this;
  }
  touches(t) {
    return t.changes.touchesRange(ne(t.state));
  }
}
class ve extends ut {
  constructor(t, e, i, s, r, o) {
    super(t, 3, e), this.limit = i, this.result = s, this.from = r, this.to = o;
  }
  hasResult() {
    return true;
  }
  updateFor(t, e) {
    var i;
    if (!(e & 3))
      return this.map(t.changes);
    let s = this.result;
    s.map && !t.changes.empty && (s = s.map(s, t.changes));
    let r = t.changes.mapPos(this.from), o = t.changes.mapPos(this.to, 1), l = ne(t.state);
    if (l > o || !s || e & 2 && (ne(t.startState) == this.from || l < this.limit))
      return new ut(this.source, e & 4 ? 1 : 0);
    let a = t.changes.mapPos(this.limit);
    return tm(s.validFor, t.state, r, o) ? new ve(this.source, this.explicit, a, s, r, o) : s.update && (s = s.update(s, r, o, new ph(t.state, l, false))) ? new ve(this.source, this.explicit, a, s, s.from, (i = s.to) !== null && i !== void 0 ? i : ne(t.state)) : new ut(this.source, 1, this.explicit);
  }
  map(t) {
    return t.empty ? this : (this.result.map ? this.result.map(this.result, t) : this.result) ? new ve(this.source, this.explicit, t.mapPos(this.limit), this.result, t.mapPos(this.from), t.mapPos(this.to, 1)) : new ut(this.source, 0);
  }
  touches(t) {
    return t.changes.touchesRange(this.from, this.to);
  }
}
function tm(n, t, e, i) {
  if (!n)
    return false;
  let s = t.sliceDoc(e, i);
  return typeof n == "function" ? n(s, e, i, t) : mh(n, true).test(s);
}
const dr = O.define({ map(n, t) {
  return n.map((e) => e.map(t));
} }), bh = O.define(), rt = X.define({ create() {
  return gn.start();
}, update(n, t) {
  return n.update(t);
}, provide: (n) => [er.from(n, (t) => t.tooltip), C.contentAttributes.from(n, (t) => t.attrs)] });
function pr(n, t) {
  const e = t.completion.apply || t.completion.label;
  let i = n.state.field(rt).active.find((s) => s.source == t.source);
  return i instanceof ve ? (typeof e == "string" ? n.dispatch(Object.assign(Object.assign({}, Wp(n.state, e, i.from, i.to)), { annotations: gh.of(t.completion) })) : e(n, t.completion, i.from, i.to), true) : false;
}
const em = Gp(rt, pr);
function Hi(n, t = "option") {
  return (e) => {
    let i = e.state.field(rt, false);
    if (!i || !i.open || i.open.disabled || Date.now() - i.open.timestamp < e.state.facet(j).interactionDelay)
      return false;
    let s = 1, r;
    t == "page" && (r = ca(e, i.open.tooltip)) && (s = Math.max(2, Math.floor(r.dom.offsetHeight / r.dom.querySelector("li").offsetHeight) - 1));
    let { length: o } = i.open.options, l = i.open.selected > -1 ? i.open.selected + s * (n ? 1 : -1) : n ? 0 : o - 1;
    return l < 0 ? l = t == "page" ? 0 : o - 1 : l >= o && (l = t == "page" ? o - 1 : 0), e.dispatch({ effects: bh.of(l) }), true;
  };
}
const im = (n) => {
  let t = n.state.field(rt, false);
  return n.state.readOnly || !t || !t.open || t.open.selected < 0 || t.open.disabled || Date.now() - t.open.timestamp < n.state.facet(j).interactionDelay ? false : pr(n, t.open.options[t.open.selected]);
}, Wo = (n) => n.state.field(rt, false) ? (n.dispatch({ effects: mn.of(true) }), true) : false, nm = (n) => {
  let t = n.state.field(rt, false);
  return !t || !t.active.some((e) => e.state != 0) ? false : (n.dispatch({ effects: li.of(null) }), true);
};
class sm {
  constructor(t, e) {
    this.active = t, this.context = e, this.time = Date.now(), this.updates = [], this.done = void 0;
  }
}
const rm = 50, om = 1e3, lm = z.fromClass(class {
  constructor(n) {
    this.view = n, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = false, this.composing = 0;
    for (let t of n.state.field(rt).active)
      t.isPending && this.startQuery(t);
  }
  update(n) {
    let t = n.state.field(rt), e = n.state.facet(j);
    if (!n.selectionSet && !n.docChanged && n.startState.field(rt) == t)
      return;
    let i = n.transactions.some((r) => {
      let o = yh(r, e);
      return o & 8 || (r.selection || r.docChanged) && !(o & 3);
    });
    for (let r = 0; r < this.running.length; r++) {
      let o = this.running[r];
      if (i || o.context.abortOnDocChange && n.docChanged || o.updates.length + n.transactions.length > rm && Date.now() - o.time > om) {
        for (let l of o.context.abortListeners)
          try {
            l();
          } catch (a) {
            ot(this.view.state, a);
          }
        o.context.abortListeners = null, this.running.splice(r--, 1);
      } else
        o.updates.push(...n.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), n.transactions.some((r) => r.effects.some((o) => o.is(mn))) && (this.pendingStart = true);
    let s = this.pendingStart ? 50 : e.activateOnTypingDelay;
    if (this.debounceUpdate = t.active.some((r) => r.isPending && !this.running.some((o) => o.active.source == r.source)) ? setTimeout(() => this.startUpdate(), s) : -1, this.composing != 0)
      for (let r of n.transactions)
        r.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && r.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1, this.pendingStart = false;
    let { state: n } = this.view, t = n.field(rt);
    for (let e of t.active)
      e.isPending && !this.running.some((i) => i.active.source == e.source) && this.startQuery(e);
    this.running.length && t.open && t.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(j).updateSyncTime));
  }
  startQuery(n) {
    let { state: t } = this.view, e = ne(t), i = new ph(t, e, n.explicit, this.view), s = new sm(n, i);
    this.running.push(s), Promise.resolve(n.source(i)).then((r) => {
      s.context.aborted || (s.done = r || null, this.scheduleAccept());
    }, (r) => {
      this.view.dispatch({ effects: li.of(null) }), ot(this.view.state, r);
    });
  }
  scheduleAccept() {
    this.running.every((n) => n.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(j).updateSyncTime));
  }
  accept() {
    var n;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
    let t = [], e = this.view.state.facet(j), i = this.view.state.field(rt);
    for (let s = 0; s < this.running.length; s++) {
      let r = this.running[s];
      if (r.done === void 0)
        continue;
      if (this.running.splice(s--, 1), r.done) {
        let l = ne(r.updates.length ? r.updates[0].startState : this.view.state), a = Math.min(l, r.done.from + (r.active.explicit ? 0 : 1)), h = new ve(r.active.source, r.active.explicit, a, r.done, r.done.from, (n = r.done.to) !== null && n !== void 0 ? n : l);
        for (let c of r.updates)
          h = h.update(c, e);
        if (h.hasResult()) {
          t.push(h);
          continue;
        }
      }
      let o = i.active.find((l) => l.source == r.active.source);
      if (o && o.isPending)
        if (r.done == null) {
          let l = new ut(r.active.source, 0);
          for (let a of r.updates)
            l = l.update(a, e);
          l.isPending || t.push(l);
        } else
          this.startQuery(o);
    }
    (t.length || i.open && i.open.disabled) && this.view.dispatch({ effects: dr.of(t) });
  }
}, { eventHandlers: { blur(n) {
  let t = this.view.state.field(rt, false);
  if (t && t.tooltip && this.view.state.facet(j).closeOnBlur) {
    let e = t.open && ca(this.view, t.open.tooltip);
    (!e || !e.dom.contains(n.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: li.of(null) }), 10);
  }
}, compositionstart() {
  this.composing = 1;
}, compositionend() {
  this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: mn.of(false) }), 20), this.composing = 0;
} } }), am = typeof navigator == "object" && /Win/.test(navigator.platform), hm = he.highest(C.domEventHandlers({ keydown(n, t) {
  let e = t.state.field(rt, false);
  if (!e || !e.open || e.open.disabled || e.open.selected < 0 || n.key.length > 1 || n.ctrlKey && !(am && n.altKey) || n.metaKey)
    return false;
  let i = e.open.options[e.open.selected], s = e.active.find((o) => o.source == i.source), r = i.completion.commitCharacters || s.result.commitCharacters;
  return r && r.indexOf(n.key) > -1 && pr(t, i), false;
} })), cm = C.baseTheme({ ".cm-tooltip.cm-tooltip-autocomplete": { "& > ul": { fontFamily: "monospace", whiteSpace: "nowrap", overflow: "hidden auto", maxWidth_fallback: "700px", maxWidth: "min(700px, 95vw)", minWidth: "250px", maxHeight: "10em", height: "100%", listStyle: "none", margin: 0, padding: 0, "& > li, & > completion-section": { padding: "1px 3px", lineHeight: 1.2 }, "& > li": { overflowX: "hidden", textOverflow: "ellipsis", cursor: "pointer" }, "& > completion-section": { display: "list-item", borderBottom: "1px solid silver", paddingLeft: "0.5em", opacity: 0.7 } } }, "&light .cm-tooltip-autocomplete ul li[aria-selected]": { background: "#17c", color: "white" }, "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#777" }, "&dark .cm-tooltip-autocomplete ul li[aria-selected]": { background: "#347", color: "white" }, "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#444" }, ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": { content: '"\xB7\xB7\xB7"', opacity: 0.5, display: "block", textAlign: "center" }, ".cm-tooltip.cm-completionInfo": { position: "absolute", padding: "3px 9px", width: "max-content", maxWidth: "400px", boxSizing: "border-box", whiteSpace: "pre-line" }, ".cm-completionInfo.cm-completionInfo-left": { right: "100%" }, ".cm-completionInfo.cm-completionInfo-right": { left: "100%" }, ".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" }, ".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" }, "&light .cm-snippetField": { backgroundColor: "#00000022" }, "&dark .cm-snippetField": { backgroundColor: "#ffffff22" }, ".cm-snippetFieldPosition": { verticalAlign: "text-top", width: 0, height: "1.15em", display: "inline-block", margin: "0 -0.7px -.7em", borderLeft: "1.4px dotted #888" }, ".cm-completionMatchedText": { textDecoration: "underline" }, ".cm-completionDetail": { marginLeft: "0.5em", fontStyle: "italic" }, ".cm-completionIcon": { fontSize: "90%", width: ".8em", display: "inline-block", textAlign: "center", paddingRight: ".6em", opacity: "0.6", boxSizing: "content-box" }, ".cm-completionIcon-function, .cm-completionIcon-method": { "&:after": { content: "'\u0192'" } }, ".cm-completionIcon-class": { "&:after": { content: "'\u25CB'" } }, ".cm-completionIcon-interface": { "&:after": { content: "'\u25CC'" } }, ".cm-completionIcon-variable": { "&:after": { content: "'\u{1D465}'" } }, ".cm-completionIcon-constant": { "&:after": { content: "'\u{1D436}'" } }, ".cm-completionIcon-type": { "&:after": { content: "'\u{1D461}'" } }, ".cm-completionIcon-enum": { "&:after": { content: "'\u222A'" } }, ".cm-completionIcon-property": { "&:after": { content: "'\u25A1'" } }, ".cm-completionIcon-keyword": { "&:after": { content: "'\u{1F511}\uFE0E'" } }, ".cm-completionIcon-namespace": { "&:after": { content: "'\u25A2'" } }, ".cm-completionIcon-text": { "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" } } }), ai = { brackets: ["(", "[", "{", "'", '"'], before: ")]}:;>", stringPrefixes: [] }, ie = O.define({ map(n, t) {
  let e = t.mapPos(n, -1, tt.TrackAfter);
  return e ?? void 0;
} }), mr = new class extends se {
}();
mr.startSide = 1;
mr.endSide = -1;
const xh = X.define({ create() {
  return B.empty;
}, update(n, t) {
  if (n = n.map(t.changes), t.selection) {
    let e = t.state.doc.lineAt(t.selection.main.head);
    n = n.update({ filter: (i) => i >= e.from && i <= e.to });
  }
  for (let e of t.effects)
    e.is(ie) && (n = n.update({ add: [mr.range(e.value, e.value + 1)] }));
  return n;
} });
function hg() {
  return [um, xh];
}
const Xn = "()[]{}<>\xAB\xBB\xBB\xAB\uFF3B\uFF3D\uFF5B\uFF5D";
function wh(n) {
  for (let t = 0; t < Xn.length; t += 2)
    if (Xn.charCodeAt(t) == n)
      return Xn.charAt(t + 1);
  return Ws(n < 128 ? n : n + 1);
}
function vh(n, t) {
  return n.languageDataAt("closeBrackets", t)[0] || ai;
}
const fm = typeof navigator == "object" && /Android\b/.test(navigator.userAgent), um = C.inputHandler.of((n, t, e, i) => {
  if ((fm ? n.composing : n.compositionStarted) || n.state.readOnly)
    return false;
  let s = n.state.selection.main;
  if (i.length > 2 || i.length == 2 && St(nt(i, 0)) == 1 || t != s.from || e != s.to)
    return false;
  let r = pm(n.state, i);
  return r ? (n.dispatch(r), true) : false;
}), dm = ({ state: n, dispatch: t }) => {
  if (n.readOnly)
    return false;
  let i = vh(n, n.selection.main.head).brackets || ai.brackets, s = null, r = n.changeByRange((o) => {
    if (o.empty) {
      let l = mm(n.doc, o.head);
      for (let a of i)
        if (a == l && On(n.doc, o.head) == wh(nt(a, 0)))
          return { changes: { from: o.head - a.length, to: o.head + a.length }, range: b.cursor(o.head - a.length) };
    }
    return { range: s = o };
  });
  return s || t(n.update(r, { scrollIntoView: true, userEvent: "delete.backward" })), !s;
}, cg = [{ key: "Backspace", run: dm }];
function pm(n, t) {
  let e = vh(n, n.selection.main.head), i = e.brackets || ai.brackets;
  for (let s of i) {
    let r = wh(nt(s, 0));
    if (t == s)
      return r == s ? bm(n, s, i.indexOf(s + s + s) > -1, e) : gm(n, s, r, e.before || ai.before);
    if (t == r && Sh(n, n.selection.main.from))
      return ym(n, s, r);
  }
  return null;
}
function Sh(n, t) {
  let e = false;
  return n.field(xh).between(0, n.doc.length, (i) => {
    i == t && (e = true);
  }), e;
}
function On(n, t) {
  let e = n.sliceString(t, t + 2);
  return e.slice(0, St(nt(e, 0)));
}
function mm(n, t) {
  let e = n.sliceString(t - 2, t);
  return St(nt(e, 0)) == e.length ? e : e.slice(1);
}
function gm(n, t, e, i) {
  let s = null, r = n.changeByRange((o) => {
    if (!o.empty)
      return { changes: [{ insert: t, from: o.from }, { insert: e, from: o.to }], effects: ie.of(o.to + t.length), range: b.range(o.anchor + t.length, o.head + t.length) };
    let l = On(n.doc, o.head);
    return !l || /\s/.test(l) || i.indexOf(l) > -1 ? { changes: { insert: t + e, from: o.head }, effects: ie.of(o.head + t.length), range: b.cursor(o.head + t.length) } : { range: s = o };
  });
  return s ? null : n.update(r, { scrollIntoView: true, userEvent: "input.type" });
}
function ym(n, t, e) {
  let i = null, s = n.changeByRange((r) => r.empty && On(n.doc, r.head) == e ? { changes: { from: r.head, to: r.head + e.length, insert: e }, range: b.cursor(r.head + e.length) } : i = { range: r });
  return i ? null : n.update(s, { scrollIntoView: true, userEvent: "input.type" });
}
function bm(n, t, e, i) {
  let s = i.stringPrefixes || ai.stringPrefixes, r = null, o = n.changeByRange((l) => {
    if (!l.empty)
      return { changes: [{ insert: t, from: l.from }, { insert: t, from: l.to }], effects: ie.of(l.to + t.length), range: b.range(l.anchor + t.length, l.head + t.length) };
    let a = l.head, h = On(n.doc, a), c;
    if (h == t) {
      if (zo(n, a))
        return { changes: { insert: t + t, from: a }, effects: ie.of(a + t.length), range: b.cursor(a + t.length) };
      if (Sh(n, a)) {
        let u = e && n.sliceDoc(a, a + t.length * 3) == t + t + t ? t + t + t : t;
        return { changes: { from: a, to: a + u.length, insert: u }, range: b.cursor(a + u.length) };
      }
    } else {
      if (e && n.sliceDoc(a - 2 * t.length, a) == t + t && (c = qo(n, a - 2 * t.length, s)) > -1 && zo(n, c))
        return { changes: { insert: t + t + t + t, from: a }, effects: ie.of(a + t.length), range: b.cursor(a + t.length) };
      if (n.charCategorizer(a)(h) != V.Word && qo(n, a, s) > -1 && !xm(n, a, t, s))
        return { changes: { insert: t + t, from: a }, effects: ie.of(a + t.length), range: b.cursor(a + t.length) };
    }
    return { range: r = l };
  });
  return r ? null : n.update(o, { scrollIntoView: true, userEvent: "input.type" });
}
function zo(n, t) {
  let e = _(n).resolveInner(t + 1);
  return e.parent && e.from == t;
}
function xm(n, t, e, i) {
  let s = _(n).resolveInner(t, -1), r = i.reduce((o, l) => Math.max(o, l.length), 0);
  for (let o = 0; o < 5; o++) {
    let l = n.sliceDoc(s.from, Math.min(s.to, s.from + e.length + r)), a = l.indexOf(e);
    if (!a || a > -1 && i.indexOf(l.slice(0, a)) > -1) {
      let c = s.firstChild;
      for (; c && c.from == s.from && c.to - c.from > e.length + a; ) {
        if (n.sliceDoc(c.to - e.length, c.to) == e)
          return false;
        c = c.firstChild;
      }
      return true;
    }
    let h = s.to == t && s.parent;
    if (!h)
      break;
    s = h;
  }
  return false;
}
function qo(n, t, e) {
  let i = n.charCategorizer(t);
  if (i(n.sliceDoc(t - 1, t)) != V.Word)
    return t;
  for (let s of e) {
    let r = t - s.length;
    if (n.sliceDoc(r, t) == s && i(n.sliceDoc(r - 1, r)) != V.Word)
      return r;
  }
  return -1;
}
function fg(n = {}) {
  return [hm, rt, j.of(n), lm, vm, cm];
}
const wm = [{ key: "Ctrl-Space", run: Wo }, { mac: "Alt-`", run: Wo }, { key: "Escape", run: nm }, { key: "ArrowDown", run: Hi(true) }, { key: "ArrowUp", run: Hi(false) }, { key: "PageDown", run: Hi(true, "page") }, { key: "PageUp", run: Hi(false, "page") }, { key: "Enter", run: im }], vm = he.highest(ea.computeN([j], (n) => n.facet(j).defaultKeymap ? [wm] : []));
class $o {
  constructor(t, e, i) {
    this.from = t, this.to = e, this.diagnostic = i;
  }
}
class te {
  constructor(t, e, i) {
    this.diagnostics = t, this.panel = e, this.selected = i;
  }
  static init(t, e, i) {
    let s = t, r = i.facet(hi).markerFilter;
    r && (s = r(s, i));
    let o = t.slice().sort((f, u) => f.from - u.from || f.to - u.to), l = new It(), a = [], h = 0;
    for (let f = 0; ; ) {
      let u = f == o.length ? null : o[f];
      if (!u && !a.length)
        break;
      let d, p;
      for (a.length ? (d = h, p = a.reduce((m, y) => Math.min(m, y.to), u && u.from > d ? u.from : 1e8)) : (d = u.from, p = u.to, a.push(u), f++); f < o.length; ) {
        let m = o[f];
        if (m.from == d && (m.to > m.from || m.to == d))
          a.push(m), f++, p = Math.min(m.to, p);
        else {
          p = Math.min(m.from, p);
          break;
        }
      }
      let g = Em(a);
      if (a.some((m) => m.from == m.to || m.from == m.to - 1 && i.doc.lineAt(m.from).to == m.from))
        l.add(d, d, D.widget({ widget: new Tm(g), diagnostics: a.slice() }));
      else {
        let m = a.reduce((y, x) => x.markClass ? y + " " + x.markClass : y, "");
        l.add(d, p, D.mark({ class: "cm-lintRange cm-lintRange-" + g + m, diagnostics: a.slice(), inclusiveEnd: a.some((y) => y.to > p) }));
      }
      h = p;
      for (let m = 0; m < a.length; m++)
        a[m].to <= h && a.splice(m--, 1);
    }
    let c = l.finish();
    return new te(c, e, Te(c));
  }
}
function Te(n, t = null, e = 0) {
  let i = null;
  return n.between(e, 1e9, (s, r, { spec: o }) => {
    if (!(t && o.diagnostics.indexOf(t) < 0))
      if (!i)
        i = new $o(s, r, t || o.diagnostics[0]);
      else {
        if (o.diagnostics.indexOf(i.diagnostic) < 0)
          return false;
        i = new $o(i.from, r, i.diagnostic);
      }
  }), i;
}
function Sm(n, t) {
  let e = t.pos, i = t.end || e, s = n.state.facet(hi).hideOn(n, e, i);
  if (s != null)
    return s;
  let r = n.startState.doc.lineAt(t.pos);
  return !!(n.effects.some((o) => o.is(kh)) || n.changes.touchesRange(r.from, Math.max(r.to, i)));
}
function km(n, t) {
  return n.field(ct, false) ? t : t.concat(O.appendConfig.of(Pm));
}
const kh = O.define(), gr = O.define(), Ch = O.define(), ct = X.define({ create() {
  return new te(D.none, null, null);
}, update(n, t) {
  if (t.docChanged && n.diagnostics.size) {
    let e = n.diagnostics.map(t.changes), i = null, s = n.panel;
    if (n.selected) {
      let r = t.changes.mapPos(n.selected.from, 1);
      i = Te(e, n.selected.diagnostic, r) || Te(e, null, r);
    }
    !e.size && s && t.state.facet(hi).autoPanel && (s = null), n = new te(e, s, i);
  }
  for (let e of t.effects)
    if (e.is(kh)) {
      let i = t.state.facet(hi).autoPanel ? e.value.length ? ci.open : null : n.panel;
      n = te.init(e.value, i, t.state);
    } else
      e.is(gr) ? n = new te(n.diagnostics, e.value ? ci.open : null, n.selected) : e.is(Ch) && (n = new te(n.diagnostics, n.panel, e.value));
  return n;
}, provide: (n) => [si.from(n, (t) => t.panel), C.decorations.from(n, (t) => t.diagnostics)] }), Cm = D.mark({ class: "cm-lintRange cm-lintRange-active" });
function Mm(n, t, e) {
  let { diagnostics: i } = n.state.field(ct), s, r = -1, o = -1;
  i.between(t - (e < 0 ? 1 : 0), t + (e > 0 ? 1 : 0), (a, h, { spec: c }) => {
    if (t >= a && t <= h && (a == h || (t > a || e > 0) && (t < h || e < 0)))
      return s = c.diagnostics, r = a, o = h, false;
  });
  let l = n.state.facet(hi).tooltipFilter;
  return s && l && (s = l(s, n.state)), s ? { pos: r, end: o, above: n.state.doc.lineAt(r).to < o, create() {
    return { dom: Am(n, s) };
  } } : null;
}
function Am(n, t) {
  return P("ul", { class: "cm-tooltip-lint" }, t.map((e) => Ah(n, e, false)));
}
const Dm = (n) => {
  let t = n.state.field(ct, false);
  (!t || !t.panel) && n.dispatch({ effects: km(n.state, [gr.of(true)]) });
  let e = ni(n, ci.open);
  return e && e.dom.querySelector(".cm-panel-lint ul").focus(), true;
}, Ko = (n) => {
  let t = n.state.field(ct, false);
  return !t || !t.panel ? false : (n.dispatch({ effects: gr.of(false) }), true);
}, Om = (n) => {
  let t = n.state.field(ct, false);
  if (!t)
    return false;
  let e = n.state.selection.main, i = t.diagnostics.iter(e.to + 1);
  return !i.value && (i = t.diagnostics.iter(0), !i.value || i.from == e.from && i.to == e.to) ? false : (n.dispatch({ selection: { anchor: i.from, head: i.to }, scrollIntoView: true }), true);
}, ug = [{ key: "Mod-Shift-m", run: Dm, preventDefault: true }, { key: "F8", run: Om }], hi = S.define({ combine(n) {
  return Object.assign({ sources: n.map((t) => t.source).filter((t) => t != null) }, Tt(n.map((t) => t.config), { delay: 750, markerFilter: null, tooltipFilter: null, needsRefresh: null, hideOn: () => null }, { needsRefresh: (t, e) => t ? e ? (i) => t(i) || e(i) : t : e }));
} });
function Mh(n) {
  let t = [];
  if (n)
    t:
      for (let { name: e } of n) {
        for (let i = 0; i < e.length; i++) {
          let s = e[i];
          if (/[a-zA-Z]/.test(s) && !t.some((r) => r.toLowerCase() == s.toLowerCase())) {
            t.push(s);
            continue t;
          }
        }
        t.push("");
      }
  return t;
}
function Ah(n, t, e) {
  var i;
  let s = e ? Mh(t.actions) : [];
  return P("li", { class: "cm-diagnostic cm-diagnostic-" + t.severity }, P("span", { class: "cm-diagnosticText" }, t.renderMessage ? t.renderMessage(n) : t.message), (i = t.actions) === null || i === void 0 ? void 0 : i.map((r, o) => {
    let l = false, a = (u) => {
      if (u.preventDefault(), l)
        return;
      l = true;
      let d = Te(n.state.field(ct).diagnostics, t);
      d && r.apply(n, d.from, d.to);
    }, { name: h } = r, c = s[o] ? h.indexOf(s[o]) : -1, f = c < 0 ? h : [h.slice(0, c), P("u", h.slice(c, c + 1)), h.slice(c + 1)];
    return P("button", { type: "button", class: "cm-diagnosticAction", onclick: a, onmousedown: a, "aria-label": ` Action: ${h}${c < 0 ? "" : ` (access key "${s[o]})"`}.` }, f);
  }), t.source && P("div", { class: "cm-diagnosticSource" }, t.source));
}
class Tm extends Vt {
  constructor(t) {
    super(), this.sev = t;
  }
  eq(t) {
    return t.sev == this.sev;
  }
  toDOM() {
    return P("span", { class: "cm-lintPoint cm-lintPoint-" + this.sev });
  }
}
class jo {
  constructor(t, e) {
    this.diagnostic = e, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = Ah(t, e, true), this.dom.id = this.id, this.dom.setAttribute("role", "option");
  }
}
class ci {
  constructor(t) {
    this.view = t, this.items = [];
    let e = (s) => {
      if (s.keyCode == 27)
        Ko(this.view), this.view.focus();
      else if (s.keyCode == 38 || s.keyCode == 33)
        this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
      else if (s.keyCode == 40 || s.keyCode == 34)
        this.moveSelection((this.selectedIndex + 1) % this.items.length);
      else if (s.keyCode == 36)
        this.moveSelection(0);
      else if (s.keyCode == 35)
        this.moveSelection(this.items.length - 1);
      else if (s.keyCode == 13)
        this.view.focus();
      else if (s.keyCode >= 65 && s.keyCode <= 90 && this.selectedIndex >= 0) {
        let { diagnostic: r } = this.items[this.selectedIndex], o = Mh(r.actions);
        for (let l = 0; l < o.length; l++)
          if (o[l].toUpperCase().charCodeAt(0) == s.keyCode) {
            let a = Te(this.view.state.field(ct).diagnostics, r);
            a && r.actions[l].apply(t, a.from, a.to);
          }
      } else
        return;
      s.preventDefault();
    }, i = (s) => {
      for (let r = 0; r < this.items.length; r++)
        this.items[r].dom.contains(s.target) && this.moveSelection(r);
    };
    this.list = P("ul", { tabIndex: 0, role: "listbox", "aria-label": this.view.state.phrase("Diagnostics"), onkeydown: e, onclick: i }), this.dom = P("div", { class: "cm-panel-lint" }, this.list, P("button", { type: "button", name: "close", "aria-label": this.view.state.phrase("close"), onclick: () => Ko(this.view) }, "\xD7")), this.update();
  }
  get selectedIndex() {
    let t = this.view.state.field(ct).selected;
    if (!t)
      return -1;
    for (let e = 0; e < this.items.length; e++)
      if (this.items[e].diagnostic == t.diagnostic)
        return e;
    return -1;
  }
  update() {
    let { diagnostics: t, selected: e } = this.view.state.field(ct), i = 0, s = false, r = null, o = /* @__PURE__ */ new Set();
    for (t.between(0, this.view.state.doc.length, (l, a, { spec: h }) => {
      for (let c of h.diagnostics) {
        if (o.has(c))
          continue;
        o.add(c);
        let f = -1, u;
        for (let d = i; d < this.items.length; d++)
          if (this.items[d].diagnostic == c) {
            f = d;
            break;
          }
        f < 0 ? (u = new jo(this.view, c), this.items.splice(i, 0, u), s = true) : (u = this.items[f], f > i && (this.items.splice(i, f - i), s = true)), e && u.diagnostic == e.diagnostic ? u.dom.hasAttribute("aria-selected") || (u.dom.setAttribute("aria-selected", "true"), r = u) : u.dom.hasAttribute("aria-selected") && u.dom.removeAttribute("aria-selected"), i++;
      }
    }); i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0); )
      s = true, this.items.pop();
    this.items.length == 0 && (this.items.push(new jo(this.view, { from: -1, to: -1, severity: "info", message: this.view.state.phrase("No diagnostics") })), s = true), r ? (this.list.setAttribute("aria-activedescendant", r.id), this.view.requestMeasure({ key: this, read: () => ({ sel: r.dom.getBoundingClientRect(), panel: this.list.getBoundingClientRect() }), write: ({ sel: l, panel: a }) => {
      let h = a.height / this.list.offsetHeight;
      l.top < a.top ? this.list.scrollTop -= (a.top - l.top) / h : l.bottom > a.bottom && (this.list.scrollTop += (l.bottom - a.bottom) / h);
    } })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), s && this.sync();
  }
  sync() {
    let t = this.list.firstChild;
    function e() {
      let i = t;
      t = i.nextSibling, i.remove();
    }
    for (let i of this.items)
      if (i.dom.parentNode == this.list) {
        for (; t != i.dom; )
          e();
        t = i.dom.nextSibling;
      } else
        this.list.insertBefore(i.dom, t);
    for (; t; )
      e();
  }
  moveSelection(t) {
    if (this.selectedIndex < 0)
      return;
    let e = this.view.state.field(ct), i = Te(e.diagnostics, this.items[t].diagnostic);
    i && this.view.dispatch({ selection: { anchor: i.from, head: i.to }, scrollIntoView: true, effects: Ch.of(i) });
  }
  static open(t) {
    return new ci(t);
  }
}
function Bm(n, t = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(n)}</svg>')`;
}
function Vi(n) {
  return Bm(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${n}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
const Lm = C.baseTheme({ ".cm-diagnostic": { padding: "3px 6px 3px 8px", marginLeft: "-1px", display: "block", whiteSpace: "pre-wrap" }, ".cm-diagnostic-error": { borderLeft: "5px solid #d11" }, ".cm-diagnostic-warning": { borderLeft: "5px solid orange" }, ".cm-diagnostic-info": { borderLeft: "5px solid #999" }, ".cm-diagnostic-hint": { borderLeft: "5px solid #66d" }, ".cm-diagnosticAction": { font: "inherit", border: "none", padding: "2px 4px", backgroundColor: "#444", color: "white", borderRadius: "3px", marginLeft: "8px", cursor: "pointer" }, ".cm-diagnosticSource": { fontSize: "70%", opacity: 0.7 }, ".cm-lintRange": { backgroundPosition: "left bottom", backgroundRepeat: "repeat-x", paddingBottom: "0.7px" }, ".cm-lintRange-error": { backgroundImage: Vi("#d11") }, ".cm-lintRange-warning": { backgroundImage: Vi("orange") }, ".cm-lintRange-info": { backgroundImage: Vi("#999") }, ".cm-lintRange-hint": { backgroundImage: Vi("#66d") }, ".cm-lintRange-active": { backgroundColor: "#ffdd9980" }, ".cm-tooltip-lint": { padding: 0, margin: 0 }, ".cm-lintPoint": { position: "relative", "&:after": { content: '""', position: "absolute", bottom: 0, left: "-2px", borderLeft: "3px solid transparent", borderRight: "3px solid transparent", borderBottom: "4px solid #d11" } }, ".cm-lintPoint-warning": { "&:after": { borderBottomColor: "orange" } }, ".cm-lintPoint-info": { "&:after": { borderBottomColor: "#999" } }, ".cm-lintPoint-hint": { "&:after": { borderBottomColor: "#66d" } }, ".cm-panel.cm-panel-lint": { position: "relative", "& ul": { maxHeight: "100px", overflowY: "auto", "& [aria-selected]": { backgroundColor: "#ddd", "& u": { textDecoration: "underline" } }, "&:focus [aria-selected]": { background_fallback: "#bdf", backgroundColor: "Highlight", color_fallback: "white", color: "HighlightText" }, "& u": { textDecoration: "none" }, padding: 0, margin: 0 }, "& [name=close]": { position: "absolute", top: "0", right: "2px", background: "inherit", border: "none", font: "inherit", padding: 0, margin: 0 } } });
function Rm(n) {
  return n == "error" ? 4 : n == "warning" ? 3 : n == "info" ? 2 : 1;
}
function Em(n) {
  let t = "hint", e = 1;
  for (let i of n) {
    let s = Rm(i.severity);
    s > e && (e = s, t = i.severity);
  }
  return t;
}
const Pm = [ct, C.decorations.compute([ct], (n) => {
  let { selected: t, panel: e } = n.field(ct);
  return !t || !e || t.from == t.to ? D.none : D.set([Cm.range(t.from, t.to)]);
}), lu(Mm, { hideOn: Sm }), Lm];
export {
  og as A,
  ir as B,
  jm as C,
  yn as D,
  R as E,
  X as F,
  er as G,
  D as H,
  Ff as M,
  O as S,
  z as V,
  Vt as W,
  $m as a,
  ng as b,
  qm as c,
  zm as d,
  ig as e,
  Zm as f,
  hg as g,
  Xm as h,
  Qm as i,
  fg as j,
  Gm as k,
  Ym as l,
  Km as m,
  lg as n,
  ea as o,
  cg as p,
  rg as q,
  Um as r,
  tg as s,
  ag as t,
  sg as u,
  _m as v,
  wm as w,
  ug as x,
  eg as y,
  C as z
};
